// Classroom data layer. One interface, two adapters:
//   * Supabase (real accounts; schema and row-level security in supabase/migrations), used when
//     classroom/config.js has a project URL and anon key.
//   * Demo (made-up data in this browser's localStorage), used otherwise. It mirrors the same
//     ownership rules so the whole teacher/student journey can be tried and tested offline.
// Teacher and student sessions use different storage keys, so a teacher and a student can be
// signed in on the same device (the teacher dashboard and the student app are separate pages).
import {classroomConfig} from './config.js?v=20261028-classroom01';
import {normaliseCode, normaliseUsername, studentEmail, usernameFor, newPassword, cleanDisplayName} from './identity.js?v=20261028-classroom01';

export const SUBJECTS = ['science', 'maths', 'english-literature', 'history', 'geography'];

const uid = () => (globalThis.crypto?.randomUUID ? crypto.randomUUID() : 'id-' + Math.random().toString(36).slice(2) + Date.now().toString(36));
const iso = d => (d ? new Date(d).toISOString() : null);
const fail = msg => { throw new Error(msg); };
function store() { try { return globalThis.localStorage || null; } catch { return null; } }

// ------------------------------------------------------------------------------------- mapping
const mapClass = r => ({id: r.id, name: r.name, joinCode: r.join_code, archived: !!r.archived, createdAt: r.created_at});
const mapAssignment = r => ({id: r.id, classId: r.class_id, title: r.title, subject: r.subject, lessonIds: [...r.lesson_ids], dueAt: r.due_at, note: r.note || '', createdAt: r.created_at});
const mapProgress = r => ({studentId: r.student_id, subject: r.subject, lessonId: r.lesson_id, stagesDone: r.stages_done, started: !!r.started, complete: !!r.complete, checkCorrect: r.check_correct, checkTotal: r.check_total, completedAt: r.completed_at, updatedAt: r.updated_at});
const mapAttempt = r => ({id: r.id, studentId: r.student_id, subject: r.subject, lessonId: r.lesson_id, questionId: r.question_id, stage: r.stage, prompt: r.prompt, answer: r.answer, correctAnswer: r.correct_answer, correct: r.correct, answeredAt: r.answered_at});
const attemptRow = a => ({subject: a.subject, lesson_id: a.lessonId, question_id: a.questionId, stage: a.stage, prompt: (a.prompt || '').slice(0, 2000), answer: (a.answer || '').slice(0, 20000), correct_answer: (a.correctAnswer || '').slice(0, 2000), correct: a.correct ?? null, client_id: a.clientId, answered_at: iso(a.answeredAt) || new Date().toISOString()});
const progressRow = (studentId, p) => ({student_id: studentId, subject: p.subject, lesson_id: p.lessonId, stages_done: p.stagesDone, started: !!p.started, complete: !!p.complete, check_correct: p.checkCorrect || 0, check_total: p.checkTotal || 0});

export function validAssignment(a) {
  if (!SUBJECTS.includes(a.subject)) fail('Choose a subject');
  if (!cleanDisplayName(a.title)) fail('Give the assignment a title');
  if (!Array.isArray(a.lessonIds) || !a.lessonIds.length) fail('Choose at least one lesson');
  if (a.lessonIds.length > 60) fail('Set at most 60 lessons in one assignment');
  return {title: cleanDisplayName(a.title).slice(0, 120), subject: a.subject, lessonIds: [...new Set(a.lessonIds)], dueAt: a.dueAt ? iso(a.dueAt) : null, note: String(a.note || '').slice(0, 1000)};
}

// ------------------------------------------------------------------------------------- Supabase
async function supabaseBackend(role, config) {
  const {createClient} = await import('./vendor/supabase-2.117.3.js');
  const sb = createClient(config.supabaseUrl, config.supabaseAnonKey, {
    auth: {storageKey: `crash-course-classroom-${role}`, persistSession: true, autoRefreshToken: true},
  });
  const ok = ({data, error}) => { if (error) fail(error.message); return data; };
  let me = null;
  async function loadMe() {
    const {data: {session}} = await sb.auth.getSession();
    if (!session) return (me = null);
    const p = ok(await sb.from('profiles').select('id, role, display_name, username').eq('id', session.user.id).maybeSingle());
    me = p ? {id: p.id, role: p.role, displayName: p.display_name, username: p.username, email: p.role === 'teacher' ? session.user.email : null} : null;
    return me;
  }
  async function fn(body) {
    const {data, error} = await sb.functions.invoke('manage-students', {body});
    if (error) {
      let msg = error.message;
      try { msg = (await error.context.json()).error || msg; } catch {}
      fail(msg);
    }
    return data;
  }
  const api = {
    kind: 'supabase',
    async session() { return me || loadMe(); },
    async signUpTeacher(email, password, displayName) {
      const r = await sb.auth.signUp({email, password, options: {data: {display_name: cleanDisplayName(displayName)}}});
      if (r.error) fail(r.error.message);
      if (!r.data.session) return {needsConfirmation: true};
      return loadMe();
    },
    async signInTeacher(email, password) {
      const r = await sb.auth.signInWithPassword({email, password});
      if (r.error) fail('Email or password not recognised');
      const u = await loadMe();
      if (u?.role !== 'teacher') { await sb.auth.signOut(); fail('This is a student account. Students sign in from the lessons page.'); }
      return u;
    },
    async signInStudent(joinCode, username, password) {
      const code = normaliseCode(joinCode), name = normaliseUsername(username);
      if (!code) fail('Check the class code: six letters and numbers');
      if (!name) fail('Check your username');
      const r = await sb.auth.signInWithPassword({email: studentEmail(name, code, config.studentEmailDomain), password});
      if (r.error) fail('Class code, username or password not recognised');
      const u = await loadMe();
      if (u?.role !== 'student') { await sb.auth.signOut(); fail('Teachers sign in from the teacher dashboard.'); }
      return u;
    },
    async signOut() { await sb.auth.signOut(); me = null; },

    async listClasses() {
      const rows = ok(await sb.from('classes').select('id, name, join_code, archived, created_at, class_members(count)').order('created_at'));
      return rows.map(r => ({...mapClass(r), studentCount: r.class_members?.[0]?.count ?? 0}));
    },
    async createClass(name) {
      const u = await api.session();
      const n = cleanDisplayName(name);
      if (!n) fail('Name the class');
      return mapClass(ok(await sb.from('classes').insert({teacher_id: u.id, name: n}).select('id, name, join_code, archived, created_at').single()));
    },
    async renameClass(id, name) { ok(await sb.from('classes').update({name: cleanDisplayName(name)}).eq('id', id)); },
    async roster(classId) {
      const rows = ok(await sb.from('class_members').select('student_id, joined_at, profiles!inner(display_name, username)').eq('class_id', classId));
      return rows.map(r => ({id: r.student_id, displayName: r.profiles.display_name, username: r.profiles.username, joinedAt: r.joined_at})).sort((a, b) => a.displayName.localeCompare(b.displayName));
    },
    async createStudents(classId, names) { return (await fn({action: 'create', classId, names})).students; },
    async resetPassword(classId, studentId) { return fn({action: 'reset', classId, studentId}); },
    async deleteStudent(classId, studentId) { await fn({action: 'delete', classId, studentId}); },
    async listAssignments(classId) {
      return ok(await sb.from('assignments').select('*').eq('class_id', classId).order('created_at', {ascending: false})).map(mapAssignment);
    },
    async createAssignment(classId, a) {
      const u = await api.session(), v = validAssignment(a);
      return mapAssignment(ok(await sb.from('assignments').insert({class_id: classId, created_by: u.id, title: v.title, subject: v.subject, lesson_ids: v.lessonIds, due_at: v.dueAt, note: v.note}).select('*').single()));
    },
    async updateAssignment(id, patch) {
      const v = validAssignment(patch);
      ok(await sb.from('assignments').update({title: v.title, lesson_ids: v.lessonIds, due_at: v.dueAt, note: v.note}).eq('id', id));
    },
    async deleteAssignment(id) { ok(await sb.from('assignments').delete().eq('id', id)); },
    async progressFor(studentIds, subject, lessonIds) {
      if (!studentIds.length) return [];
      let q = sb.from('lesson_progress').select('*').in('student_id', studentIds);
      if (subject) q = q.eq('subject', subject);
      if (lessonIds?.length) q = q.in('lesson_id', lessonIds);
      return ok(await q).map(mapProgress);
    },
    async attemptsFor(studentIds, subject, lessonIds) {
      if (!studentIds.length) return [];
      let q = sb.from('attempts').select('id, student_id, subject, lesson_id, question_id, stage, prompt, answer, correct_answer, correct, answered_at').in('student_id', studentIds).order('answered_at').limit(5000);
      if (subject) q = q.eq('subject', subject);
      if (lessonIds?.length) q = q.in('lesson_id', lessonIds);
      return ok(await q).map(mapAttempt);
    },

    async myClasses() { return ok(await sb.from('classes').select('id, name, join_code, archived, created_at')).map(mapClass); },
    async myAssignments() { return ok(await sb.from('assignments').select('*').order('due_at', {ascending: true, nullsFirst: false})).map(mapAssignment); },
    async myProgress() { const u = await api.session(); return u ? api.progressFor([u.id]) : []; },
    async recordAttempts(list) {
      if (!list.length) return 0;
      ok(await sb.from('attempts').upsert(list.map(attemptRow), {onConflict: 'student_id,client_id', ignoreDuplicates: true}));
      return list.length;
    },
    async saveProgress(rows) {
      const u = await api.session();
      if (!u || !rows.length) return 0;
      ok(await sb.from('lesson_progress').upsert(rows.map(p => progressRow(u.id, p)), {onConflict: 'student_id,subject,lesson_id'}));
      return rows.length;
    },
  };
  return api;
}

// ------------------------------------------------------------------------------------- demo
export const DEMO_KEY = 'crash-course-classroom-demo-v1';
export const DEMO_TEACHER = {email: 'demo.teacher@example.test', password: 'demo-teacher'};
export const DEMO_CODE = 'TRYME2';

function demoSeed() {
  const teacher = {id: uid(), role: 'teacher', email: DEMO_TEACHER.email, password: DEMO_TEACHER.password, displayName: 'Demo Teacher'};
  const cls = {id: uid(), teacher_id: teacher.id, name: '10A (demo)', join_code: DEMO_CODE, archived: false, created_at: new Date().toISOString()};
  const students = [['Amira K (demo)', 'amira-k', 'demo-amira'], ['Ben O (demo)', 'ben-o', 'demo-ben'], ['Chen L (demo)', 'chen-l', 'demo-chen']]
    .map(([displayName, username, password]) => ({id: uid(), role: 'student', username, password, displayName, joinCode: DEMO_CODE}));
  return {version: 1, users: [teacher, ...students], classes: [cls], members: students.map(s => ({class_id: cls.id, student_id: s.id, joined_at: new Date().toISOString()})), assignments: [], attempts: [], progress: [], nextAttempt: 1};
}

export function demoBackend(role, {storage = store(), now = () => Date.now()} = {}) {
  const sessionKey = `crash-course-classroom-demo-session-${role}`;
  const mem = {};
  const get = k => { try { return storage ? storage.getItem(k) : mem[k] ?? null; } catch { return mem[k] ?? null; } };
  const set = (k, v) => { try { if (storage) storage.setItem(k, v); else mem[k] = v; } catch { mem[k] = v; } };
  const del = k => { try { storage ? storage.removeItem(k) : delete mem[k]; } catch { delete mem[k]; } };
  const load = () => { try { const d = JSON.parse(get(DEMO_KEY)); if (d?.version === 1) return d; } catch {} const d = demoSeed(); set(DEMO_KEY, JSON.stringify(d)); return d; };
  const save = d => set(DEMO_KEY, JSON.stringify(d));
  const meRow = d => { const id = get(sessionKey); return d.users.find(u => u.id === id) || null; };
  const pub = u => u && {id: u.id, role: u.role, displayName: u.displayName, username: u.username || null, email: u.role === 'teacher' ? u.email : null};
  const need = (d, r) => { const u = meRow(d); if (!u) fail('Sign in first'); if (r && u.role !== r) fail(r === 'teacher' ? 'Teachers only' : 'Students only'); return u; };
  const owns = (d, u, classId) => { const c = d.classes.find(c => c.id === classId && c.teacher_id === u.id); if (!c) fail('You can only manage your own classes'); return c; };
  const teaches = (d, u, sid) => d.members.some(m => m.student_id === sid && d.classes.some(c => c.id === m.class_id && c.teacher_id === u.id));
  const ts = () => new Date(now()).toISOString();

  const api = {
    kind: 'demo',
    async session() { return pub(meRow(load())); },
    async signUpTeacher(email, password, displayName) {
      const d = load(), e = String(email || '').trim().toLowerCase();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)) fail('Enter an email address');
      if (String(password || '').length < 8) fail('Use at least 8 characters for the password');
      if (d.users.some(u => u.email === e)) fail('That email already has an account');
      const u = {id: uid(), role: 'teacher', email: e, password, displayName: cleanDisplayName(displayName) || e};
      d.users.push(u); save(d); set(sessionKey, u.id); return pub(u);
    },
    async signInTeacher(email, password) {
      const d = load(), e = String(email || '').trim().toLowerCase(), u = d.users.find(x => x.email === e && x.password === password);
      if (!u) fail('Email or password not recognised');
      if (u.role !== 'teacher') fail('This is a student account. Students sign in from the lessons page.');
      set(sessionKey, u.id); return pub(u);
    },
    async signInStudent(joinCode, username, password) {
      const code = normaliseCode(joinCode), name = normaliseUsername(username);
      if (!code) fail('Check the class code: six letters and numbers');
      if (!name) fail('Check your username');
      const d = load(), u = d.users.find(x => x.role === 'student' && x.joinCode === code && x.username === name && x.password === password);
      if (!u) fail('Class code, username or password not recognised');
      set(sessionKey, u.id); return pub(u);
    },
    async signOut() { del(sessionKey); },

    async listClasses() {
      const d = load(), u = need(d, 'teacher');
      return d.classes.filter(c => c.teacher_id === u.id).map(c => ({...mapClass(c), studentCount: d.members.filter(m => m.class_id === c.id).length}));
    },
    async createClass(name) {
      const d = load(), u = need(d, 'teacher'), n = cleanDisplayName(name);
      if (!n) fail('Name the class');
      let code; do { code = Array.from({length: 6}, () => 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'[Math.floor(Math.random() * 31)]).join(''); } while (d.classes.some(c => c.join_code === code));
      const c = {id: uid(), teacher_id: u.id, name: n, join_code: code, archived: false, created_at: ts()};
      d.classes.push(c); save(d); return mapClass(c);
    },
    async renameClass(id, name) { const d = load(), u = need(d, 'teacher'); owns(d, u, id).name = cleanDisplayName(name) || 'Class'; save(d); },
    async roster(classId) {
      const d = load(), u = need(d, 'teacher'); owns(d, u, classId);
      return d.members.filter(m => m.class_id === classId).map(m => { const s = d.users.find(x => x.id === m.student_id); return {id: s.id, displayName: s.displayName, username: s.username, joinedAt: m.joined_at}; }).sort((a, b) => a.displayName.localeCompare(b.displayName));
    },
    async createStudents(classId, names) {
      const d = load(), u = need(d, 'teacher'), c = owns(d, u, classId);
      const list = (names || []).map(cleanDisplayName).filter(Boolean);
      if (!list.length) fail('Add at least one student name');
      if (list.length > 40) fail('Add at most 40 students at a time');
      if (d.members.filter(m => m.class_id === classId).length + list.length > 60) fail('A class can have at most 60 students');
      const taken = new Set(d.users.filter(x => x.joinCode === c.join_code).map(x => x.username));
      const out = [];
      for (const displayName of list) {
        const username = usernameFor(displayName, taken); taken.add(username);
        const s = {id: uid(), role: 'student', username, password: newPassword(), displayName, joinCode: c.join_code};
        d.users.push(s); d.members.push({class_id: classId, student_id: s.id, joined_at: ts()});
        out.push({studentId: s.id, displayName, username, password: s.password});
      }
      save(d); return out;
    },
    async resetPassword(classId, studentId) {
      const d = load(), u = need(d, 'teacher'); owns(d, u, classId);
      if (!d.members.some(m => m.class_id === classId && m.student_id === studentId)) fail('That student is not in this class');
      const s = d.users.find(x => x.id === studentId); s.password = newPassword(); save(d);
      return {username: s.username, password: s.password};
    },
    async deleteStudent(classId, studentId) {
      const d = load(), u = need(d, 'teacher'); owns(d, u, classId);
      if (!d.members.some(m => m.class_id === classId && m.student_id === studentId)) fail('That student is not in this class');
      d.users = d.users.filter(x => x.id !== studentId); d.members = d.members.filter(m => m.student_id !== studentId);
      d.attempts = d.attempts.filter(a => a.student_id !== studentId); d.progress = d.progress.filter(p => p.student_id !== studentId);
      save(d);
    },
    async listAssignments(classId) {
      const d = load(), u = need(d, 'teacher'); owns(d, u, classId);
      return d.assignments.filter(a => a.class_id === classId).sort((a, b) => b.created_at.localeCompare(a.created_at)).map(mapAssignment);
    },
    async createAssignment(classId, a) {
      const d = load(), u = need(d, 'teacher'); owns(d, u, classId);
      const v = validAssignment(a);
      const row = {id: uid(), class_id: classId, created_by: u.id, title: v.title, subject: v.subject, lesson_ids: v.lessonIds, due_at: v.dueAt, note: v.note, created_at: ts()};
      d.assignments.push(row); save(d); return mapAssignment(row);
    },
    async updateAssignment(id, patch) {
      const d = load(), u = need(d, 'teacher'), row = d.assignments.find(a => a.id === id);
      if (!row) fail('Assignment not found'); owns(d, u, row.class_id);
      const v = validAssignment({...mapAssignment(row), ...patch});
      Object.assign(row, {title: v.title, lesson_ids: v.lessonIds, due_at: v.dueAt, note: v.note}); save(d);
    },
    async deleteAssignment(id) {
      const d = load(), u = need(d, 'teacher'), row = d.assignments.find(a => a.id === id);
      if (!row) return; owns(d, u, row.class_id);
      d.assignments = d.assignments.filter(a => a.id !== id); save(d);
    },
    async progressFor(studentIds, subject, lessonIds) {
      const d = load(), u = need(d);
      const allowed = id => (u.role === 'student' ? id === u.id : teaches(d, u, id));
      return d.progress.filter(p => studentIds.includes(p.student_id) && allowed(p.student_id) && (!subject || p.subject === subject) && (!lessonIds?.length || lessonIds.includes(p.lesson_id))).map(mapProgress);
    },
    async attemptsFor(studentIds, subject, lessonIds) {
      const d = load(), u = need(d);
      const allowed = id => (u.role === 'student' ? id === u.id : teaches(d, u, id));
      return d.attempts.filter(a => studentIds.includes(a.student_id) && allowed(a.student_id) && (!subject || a.subject === subject) && (!lessonIds?.length || lessonIds.includes(a.lesson_id))).sort((a, b) => a.answered_at.localeCompare(b.answered_at)).map(mapAttempt);
    },

    async myClasses() {
      const d = load(), u = need(d, 'student');
      return d.classes.filter(c => d.members.some(m => m.class_id === c.id && m.student_id === u.id)).map(mapClass);
    },
    async myAssignments() {
      const d = load(), u = need(d, 'student');
      const mine = new Set(d.members.filter(m => m.student_id === u.id).map(m => m.class_id));
      return d.assignments.filter(a => mine.has(a.class_id)).sort((a, b) => (a.due_at || '9').localeCompare(b.due_at || '9')).map(mapAssignment);
    },
    async myProgress() { const d = load(), u = need(d, 'student'); return d.progress.filter(p => p.student_id === u.id).map(mapProgress); },
    async recordAttempts(list) {
      const d = load(), u = need(d, 'student');
      let added = 0;
      for (const a of list) {
        if (d.attempts.some(x => x.student_id === u.id && x.client_id === a.clientId)) continue;
        d.attempts.push({id: d.nextAttempt++, student_id: u.id, ...attemptRow(a)}); added++;
      }
      save(d); return added;
    },
    async saveProgress(rows) {
      const d = load(), u = need(d, 'student');
      for (const p of rows) {
        const r = progressRow(u.id, p);
        if (r.check_correct > r.check_total) continue;
        const old = d.progress.find(x => x.student_id === u.id && x.subject === r.subject && x.lesson_id === r.lesson_id);
        const completed_at = r.complete ? old?.completed_at || ts() : null;
        if (old) Object.assign(old, r, {completed_at, updated_at: ts()});
        else d.progress.push({...r, completed_at, updated_at: ts()});
      }
      save(d); return rows.length;
    },
    resetDemo() { set(DEMO_KEY, JSON.stringify(demoSeed())); del(sessionKey); },
  };
  return api;
}

/** role: 'teacher' (dashboard) or 'student' (lessons app). */
export async function createBackend(role, config = classroomConfig) {
  if (config.supabaseUrl && config.supabaseAnonKey) return supabaseBackend(role, config);
  return demoBackend(role);
}
