// Crash Course teacher dashboard: classes, student logins, set work, and each student's and the
// whole class's progress and answers. Data access goes through classroom/backend.js (Supabase with
// row-level security, or demo mode with made-up data in this browser).
import {createBackend, DEMO_TEACHER} from '../classroom/backend.js?v=20261028-classroom01';

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const SUBJECT_NAMES = {science: 'Science', maths: 'Maths', 'english-literature': 'English Literature', history: 'History', geography: 'Geography'};
const STAGES = {practice: 'Practise', check: 'Check', challenge: 'Investigate challenge', review: 'Recall review', assessment: 'Topic assessment', model: 'Model activity', writing: 'Written response'};
const fmtDate = d => (d ? new Date(d).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}) : '—');
const fmtTime = d => (d ? new Date(d).toLocaleString('en-GB', {day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'}) : '—');
const pct = (a, b) => (b ? Math.round((a / b) * 100) : null);

const S = {backend: null, me: null, classes: [], classId: null, tab: 'progress', roster: [], assignments: [], assignmentId: null, progress: [], attempts: [], catalog: null, titles: new Map(), busy: false, notice: ''};

// ------------------------------------------------------------------------------- helpers
function dialog(html) { $('#dlgBody').innerHTML = html; if (!$('#dlg').open) $('#dlg').showModal(); $('#dlgBody').scrollTop = 0; }
function closeDialog() { if ($('#dlg').open) $('#dlg').close(); }
$('#dlgClose').onclick = closeDialog;
$('#dlg').addEventListener('click', e => { if (e.target === $('#dlg')) closeDialog(); });

async function guard(fn, errSel) {
  try { return await fn(); }
  catch (err) { const el = errSel && $(errSel); if (el) el.textContent = err.message; else alertBox(err.message); return undefined; }
}
function alertBox(msg) { S.notice = msg; const n = $('#notice'); if (n) { n.textContent = msg; n.hidden = !msg; } }

async function loadCatalog() {
  if (S.catalog) return S.catalog;
  S.catalog = await (await fetch('../classroom/catalog.json?v=20261028-classroom01')).json();
  for (const s of S.catalog.subjects) for (const t of s.topics) for (const l of t.lessons) S.titles.set(`${s.id}|${l.id}`, l.title);
  return S.catalog;
}
const title = (subject, id) => S.titles.get(`${subject}|${id}`) || id;
const cls = () => S.classes.find(c => c.id === S.classId);
const assignment = () => S.assignments.find(a => a.id === S.assignmentId);

// ------------------------------------------------------------------------------- auth
function renderAuth(mode = 'signin') {
  $('#user').innerHTML = '';
  const demo = S.backend.kind === 'demo';
  $('#app').innerHTML = `<section class="t-auth"><span class="t-eyebrow">TEACHERS</span><h1>${mode === 'signin' ? 'Sign in' : 'Create a teacher account'}</h1>
    <p>Set lessons for your classes and see every student's progress and answers.</p>
    ${demo ? `<p class="t-demo">Demo mode: made-up data stored only in this browser. Sign in as <b>${esc(DEMO_TEACHER.email)}</b> with password <b>${esc(DEMO_TEACHER.password)}</b>, or create your own demo account. <button class="t-link" id="resetDemo">Reset demo data</button></p>` : ''}
    <form id="authForm" class="t-form">
      ${mode === 'signup' ? '<label>Your name<input name="name" autocomplete="name" required maxlength="80"></label>' : ''}
      <label>Email<input name="email" type="email" autocomplete="email" required></label>
      <label>Password<input name="password" type="password" minlength="8" autocomplete="${mode === 'signin' ? 'current-password' : 'new-password'}" required></label>
      <p class="t-error" id="authError" role="alert"></p>
      <button class="t-primary" type="submit">${mode === 'signin' ? 'Sign in' : 'Create account'} →</button>
    </form>
    <p>${mode === 'signin' ? 'New here? <button class="t-link" id="toSignup">Create a teacher account</button>' : 'Already have an account? <button class="t-link" id="toSignin">Sign in</button>'}</p>
    <p class="t-muted">Students do not sign in here. They choose <b>Join your class</b> on the <a href="../">lessons page</a>.</p></section>`;
  $('#toSignup')?.addEventListener('click', () => renderAuth('signup'));
  $('#toSignin')?.addEventListener('click', () => renderAuth('signin'));
  $('#resetDemo')?.addEventListener('click', () => { S.backend.resetDemo(); renderAuth(mode); });
  $('#authForm').onsubmit = async e => {
    e.preventDefault();
    const f = e.target, btn = f.querySelector('button'); btn.disabled = true;
    const r = await guard(async () => mode === 'signin' ? S.backend.signInTeacher(f.email.value, f.password.value) : S.backend.signUpTeacher(f.email.value, f.password.value, f.name.value), '#authError');
    btn.disabled = false;
    if (r?.needsConfirmation) { $('#authError').textContent = 'Check your email to confirm the account, then sign in.'; return; }
    if (r) { S.me = r; await loadClasses(); render(); }
  };
}

// ------------------------------------------------------------------------------- data
async function loadClasses() {
  S.classes = await S.backend.listClasses();
  if (!S.classes.some(c => c.id === S.classId)) S.classId = S.classes[0]?.id || null;
  if (S.classId) await loadClass();
}
async function loadClass() {
  [S.roster, S.assignments] = await Promise.all([S.backend.roster(S.classId), S.backend.listAssignments(S.classId)]);
  if (!S.assignments.some(a => a.id === S.assignmentId)) S.assignmentId = S.assignments[0]?.id || null;
  await loadResults();
}
async function loadResults() {
  const a = assignment(), ids = S.roster.map(s => s.id);
  if (!a || !ids.length) { S.progress = []; S.attempts = []; return; }
  [S.progress, S.attempts] = await Promise.all([S.backend.progressFor(ids, a.subject, a.lessonIds), S.backend.attemptsFor(ids, a.subject, a.lessonIds)]);
}
const progressOf = (sid, lessonId) => S.progress.find(p => p.studentId === sid && p.lessonId === lessonId);
const attemptsOf = (sid, lessonId) => S.attempts.filter(x => x.studentId === sid && (!lessonId || x.lessonId === lessonId));

// ------------------------------------------------------------------------------- shell
function render() {
  if (!S.me) return renderAuth();
  $('#user').innerHTML = `<span>${esc(S.me.displayName || S.me.email)}</span><button class="t-link" id="signOut">Sign out</button>`;
  $('#signOut').onclick = async () => { await S.backend.signOut(); S.me = null; S.classes = []; S.classId = null; render(); };
  const c = cls();
  $('#app').innerHTML = `<div class="t-layout"><nav class="t-classes" aria-label="Your classes"><span class="t-eyebrow">YOUR CLASSES</span>
      ${S.classes.map(k => `<button class="t-class ${k.id === S.classId ? 'active' : ''}" data-class="${k.id}"><b>${esc(k.name)}</b><small>${k.studentCount} student${k.studentCount === 1 ? '' : 's'} · code ${esc(k.joinCode)}</small></button>`).join('') || '<p class="t-muted">No classes yet.</p>'}
      <form id="newClass" class="t-inline"><label class="t-sr" for="newClassName">New class name</label><input id="newClassName" name="name" placeholder="New class, e.g. 10A History" maxlength="80" required><button class="t-secondary" type="submit">Add class</button></form><p class="t-error" id="classError" role="alert"></p></nav>
    <section class="t-panel">${c ? classPanel(c) : '<h1>Create your first class</h1><p>Add a class on the left. You will get a join code, then you can add students and set lessons.</p>'}</section></div>`;
  $$('[data-class]').forEach(b => (b.onclick = async () => { S.classId = b.dataset.class; S.assignmentId = null; await guard(loadClass); render(); }));
  $('#newClass').onsubmit = async e => {
    e.preventDefault();
    const k = await guard(() => S.backend.createClass(e.target.name.value), '#classError');
    if (k) { S.classId = k.id; S.tab = 'students'; await guard(loadClasses); render(); }
  };
  if (c) bindClassPanel();
}

function classPanel(c) {
  const tabs = [['progress', 'Progress & answers'], ['work', 'Set work'], ['students', 'Students']];
  return `<header class="t-class-head"><div><span class="t-eyebrow">CLASS</span><h1>${esc(c.name)}</h1></div><div class="t-code"><small>Class code</small><b>${esc(c.joinCode)}</b></div></header>
    <p class="t-notice" id="notice" ${S.notice ? '' : 'hidden'}>${esc(S.notice)}</p>
    <div class="t-tabs" role="tablist">${tabs.map(([id, label]) => `<button role="tab" aria-selected="${S.tab === id}" class="t-tab" data-tab="${id}">${label}</button>`).join('')}</div>
    <div id="tabBody">${S.tab === 'progress' ? progressTab() : S.tab === 'work' ? workTab() : studentsTab()}</div>`;
}

function bindClassPanel() {
  $$('[data-tab]').forEach(b => (b.onclick = () => { S.tab = b.dataset.tab; S.notice = ''; render(); }));
  if (S.tab === 'progress') bindProgress();
  if (S.tab === 'work') bindWork();
  if (S.tab === 'students') bindStudents();
}

// ------------------------------------------------------------------------------- progress tab
function cellFor(s, lessonId) {
  const p = progressOf(s.id, lessonId), n = attemptsOf(s.id, lessonId).length;
  const score = p && p.checkTotal ? `${p.checkCorrect}/${p.checkTotal}` : '';
  const [cls_, label, text] = p?.complete ? ['done', 'Complete', '✓'] : p?.started || n ? ['part', `In progress, ${p?.stagesDone || 0} of 4 stages`, `${p?.stagesDone || 0}/4`] : ['none', 'Not started', '—'];
  return `<td><button class="t-cell ${cls_}" data-cell="${s.id}|${esc(lessonId)}" aria-label="${esc(s.displayName)}, ${esc(title(assignment().subject, lessonId))}: ${label}${score ? `, check ${score}` : ''}, ${n} answers"><span>${text}</span>${score ? `<small>Check ${score}</small>` : ''}</button></td>`;
}

function progressTab() {
  if (!S.roster.length) return '<p>No students yet. Add them in the <b>Students</b> tab.</p>';
  if (!S.assignments.length) return '<p>No work set yet. Choose lessons in the <b>Set work</b> tab.</p>';
  const a = assignment();
  const done = s => a.lessonIds.filter(id => progressOf(s.id, id)?.complete).length;
  const last = s => { const t = [...attemptsOf(s.id).map(x => x.answeredAt), ...S.progress.filter(p => p.studentId === s.id).map(p => p.updatedAt)].filter(Boolean).sort().pop(); return t ? fmtTime(t) : 'No activity'; };
  const classComplete = S.roster.reduce((n, s) => n + done(s), 0), possible = S.roster.length * a.lessonIds.length;
  return `<div class="t-toolbar"><label>Assignment <select id="pickAssignment">${S.assignments.map(x => `<option value="${x.id}" ${x.id === a.id ? 'selected' : ''}>${esc(x.title)} · ${esc(SUBJECT_NAMES[x.subject])}</option>`).join('')}</select></label>
      <button class="t-secondary" id="refresh">Refresh</button><button class="t-secondary" id="exportCsv">Download CSV</button></div>
    <p class="t-summary"><b>${pct(classComplete, possible) ?? 0}%</b> of set lessons complete across the class (${classComplete} of ${possible}). Due ${esc(fmtDate(a.dueAt))}.${a.note ? ` <span class="t-muted">${esc(a.note)}</span>` : ''}</p>
    <div class="t-table-wrap"><table class="t-grid"><caption class="t-sr">Progress on ${esc(a.title)}</caption><thead><tr><th scope="col">Student</th>
      ${a.lessonIds.map(id => `<th scope="col"><button class="t-link t-lesson-head" data-lesson="${esc(id)}" title="See the class's answers to this lesson">${esc(title(a.subject, id))}</button></th>`).join('')}
      <th scope="col">Complete</th><th scope="col">Last active</th></tr></thead>
      <tbody>${S.roster.map(s => `<tr><th scope="row"><button class="t-link" data-student="${s.id}">${esc(s.displayName)}</button></th>${a.lessonIds.map(id => cellFor(s, id)).join('')}<td>${done(s)}/${a.lessonIds.length}</td><td class="t-muted">${esc(last(s))}</td></tr>`).join('')}</tbody></table></div>
    <p class="t-muted">Select a cell to see that student's answers, a lesson title for the whole class's answers question by question, or a name for one student's work across the assignment. Check scores are first answers; Practise allows retries until correct.</p>`;
}

function bindProgress() {
  $('#pickAssignment')?.addEventListener('change', async e => { S.assignmentId = e.target.value; await guard(loadResults); render(); });
  $('#refresh')?.addEventListener('click', async () => { await guard(loadClass); render(); });
  $('#exportCsv')?.addEventListener('click', exportCsv);
  $$('[data-cell]').forEach(b => (b.onclick = () => { const [sid, lid] = b.dataset.cell.split('|'); showCell(sid, lid); }));
  $$('[data-lesson]').forEach(b => (b.onclick = () => showLesson(b.dataset.lesson)));
  $$('[data-student]').forEach(b => (b.onclick = () => showStudent(b.dataset.student)));
}

function attemptRows(list, showStudent = false) {
  if (!list.length) return '<p class="t-muted">No answers yet.</p>';
  return `<ol class="t-attempts">${list.map(x => {
    const name = showStudent ? S.roster.find(s => s.id === x.studentId)?.displayName : '';
    const mark = x.correct === true ? '<span class="t-ok" aria-label="Correct">✓</span>' : x.correct === false ? '<span class="t-bad" aria-label="Incorrect">✗</span>' : '<span class="t-muted" aria-label="Not marked">✎</span>';
    const answer = x.stage === 'writing' ? `<blockquote class="t-writing">${esc(x.answer)}</blockquote>` : `<span class="t-answer">${esc(x.answer || '—')}</span>`;
    return `<li>${mark}<div>${name ? `<b>${esc(name)}</b> · ` : ''}<small>${esc(STAGES[x.stage] || x.stage)} · ${esc(fmtTime(x.answeredAt))}</small><br>${x.subject === 'maths' && showStudent ? `<small class="t-muted">${esc(x.prompt)}</small><br>` : ''}${answer}${x.correct === false && x.correctAnswer ? `<br><small class="t-muted">Correct answer: ${esc(x.correctAnswer)}</small>` : ''}</div></li>`;
  }).join('')}</ol>`;
}

// Maths questions are generated per student (id "skill@level#seed"), so the class view groups them by
// skill and level; other subjects use fixed question ids.
const questionKey = x => (x.subject === 'maths' ? x.questionId.split('#')[0] : x.questionId);
function groupByQuestion(list, byKey = questionKey) {
  const map = new Map();
  for (const x of list) { const k = byKey(x); if (!map.has(k)) map.set(k, {prompt: x.prompt, stage: x.stage, generated: x.subject === 'maths', items: []}); map.get(k).items.push(x); }
  return [...map.entries()];
}

function showCell(sid, lessonId) {
  const s = S.roster.find(x => x.id === sid), a = assignment(), p = progressOf(sid, lessonId), list = attemptsOf(sid, lessonId);
  const groups = groupByQuestion(list, x => x.questionId);
  const firstRight = groups.filter(([, g]) => g.items[0].correct === true).length, marked = groups.filter(([, g]) => g.items[0].correct !== null).length;
  dialog(`<span class="t-eyebrow">${esc(SUBJECT_NAMES[a.subject])} · ${esc(s.displayName)}</span><h2>${esc(title(a.subject, lessonId))}</h2>
    <p>${p?.complete ? `<b>Complete</b> ${esc(fmtTime(p.completedAt))}` : p?.started ? `<b>In progress</b>: ${p.stagesDone} of 4 stages` : '<b>Not started</b>'}${p?.checkTotal ? ` · Check ${p.checkCorrect}/${p.checkTotal} (${pct(p.checkCorrect, p.checkTotal)}%)` : ''} · ${list.length} answer${list.length === 1 ? '' : 's'}${marked ? ` · ${firstRight}/${marked} questions right first time` : ''}</p>
    ${groups.map(([qid, g]) => `<section class="t-question"><h3>${esc(g.prompt || qid)}</h3>${attemptRows(g.items)}</section>`).join('') || '<p class="t-muted">No answers yet.</p>'}`);
}

function showLesson(lessonId) {
  const a = assignment(), list = S.attempts.filter(x => x.lessonId === lessonId);
  const groups = groupByQuestion(list);
  const summary = groups.map(([qid, g]) => {
    const firsts = new Map();
    for (const x of g.items) if (!firsts.has(x.studentId)) firsts.set(x.studentId, x);
    const marked = [...firsts.values()].filter(x => x.correct !== null);
    const right = marked.filter(x => x.correct).length;
    const wrongAnswers = new Map();
    for (const x of g.items) if (x.correct === false) wrongAnswers.set(x.answer, (wrongAnswers.get(x.answer) || 0) + 1);
    const common = [...wrongAnswers.entries()].sort((p, q) => q[1] - p[1]).slice(0, 3);
    return {qid, g, students: firsts.size, right, marked: marked.length, common};
  });
  const done = S.roster.filter(s => progressOf(s.id, lessonId)?.complete).length;
  dialog(`<span class="t-eyebrow">${esc(SUBJECT_NAMES[a.subject])} · WHOLE CLASS</span><h2>${esc(title(a.subject, lessonId))}</h2>
    <p>${done} of ${S.roster.length} students complete · ${list.length} answers. Questions are in the order students first met them; percentages use each student's first answer.</p>
    ${summary.map(q => `<section class="t-question"><h3>${esc(q.g.prompt || q.qid)}</h3>${q.g.generated ? '<p class="t-muted">Maths questions are generated for each student, so numbers differ; answers are grouped by skill and level.</p>' : ''}<p class="t-muted">${esc(STAGES[q.g.stage] || q.g.stage)} · ${q.students} student${q.students === 1 ? '' : 's'} answered${q.marked ? ` · <b>${pct(q.right, q.marked)}%</b> right first time` : ''}${q.common.length ? ` · Common wrong answers: ${q.common.map(([ans, n]) => `“${esc(ans)}” (${n})`).join(', ')}` : ''}</p>
      <details><summary>Every answer (${q.g.items.length})</summary>${attemptRows(q.g.items, true)}</details></section>`).join('') || '<p class="t-muted">No answers yet.</p>'}`);
}

function showStudent(sid) {
  const s = S.roster.find(x => x.id === sid), a = assignment();
  dialog(`<span class="t-eyebrow">STUDENT · ${esc(s.username)}</span><h2>${esc(s.displayName)}</h2><p>${esc(a.title)} · ${esc(SUBJECT_NAMES[a.subject])}</p>
    ${a.lessonIds.map(id => { const p = progressOf(sid, id), list = attemptsOf(sid, id);
      return `<section class="t-question"><h3>${esc(title(a.subject, id))}</h3><p class="t-muted">${p?.complete ? 'Complete' : p?.started ? `In progress · ${p.stagesDone}/4 stages` : 'Not started'}${p?.checkTotal ? ` · Check ${p.checkCorrect}/${p.checkTotal}` : ''} · ${list.length} answers</p>${list.length ? `<details><summary>Answers</summary>${attemptRows(list)}</details>` : ''}</section>`; }).join('')}`);
}

function exportCsv() {
  const a = assignment(), q = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = [['Student', 'Username', 'Lesson', 'Status', 'Stages done', 'Check correct', 'Check total', 'Answers', 'Completed at']];
  for (const s of S.roster) for (const id of a.lessonIds) {
    const p = progressOf(s.id, id);
    rows.push([s.displayName, s.username, title(a.subject, id), p?.complete ? 'Complete' : p?.started ? 'In progress' : 'Not started', p?.stagesDone ?? 0, p?.checkCorrect ?? '', p?.checkTotal ?? '', attemptsOf(s.id, id).length, p?.completedAt || '']);
  }
  const blob = new Blob([rows.map(r => r.map(q).join(',')).join('\n')], {type: 'text/csv'});
  const link = Object.assign(document.createElement('a'), {href: URL.createObjectURL(blob), download: `${cls().name} - ${a.title}.csv`.replace(/[\\/:*?"<>|]/g, '-')});
  document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

// ------------------------------------------------------------------------------- set work tab
function workTab() {
  const list = S.assignments.map(a => `<li class="t-assign"><div><b>${esc(a.title)}</b><small>${esc(SUBJECT_NAMES[a.subject])} · ${a.lessonIds.length} lesson${a.lessonIds.length === 1 ? '' : 's'} · due ${esc(fmtDate(a.dueAt))}</small></div><div><button class="t-link" data-view-assign="${a.id}">View progress</button> <button class="t-link t-danger" data-del-assign="${a.id}">Delete</button></div></li>`).join('');
  return `<div class="t-two"><section><h2>Set lessons</h2><form id="assignForm" class="t-form">
      <label>Title<input name="title" required maxlength="120" placeholder="e.g. Weimar recap before the mock"></label>
      <label>Subject<select name="subject" id="aSubject"></select></label>
      <label>Topic<select id="aTopic"></select></label>
      <fieldset class="t-lessons"><legend>Lessons <button type="button" class="t-link" id="aAll">Select all in topic</button></legend><div id="aLessons"></div></fieldset>
      <p class="t-muted" id="aCount">No lessons chosen.</p>
      <label>Due date<input type="date" name="due"></label>
      <label>Note for students (optional)<textarea name="note" rows="2" maxlength="1000"></textarea></label>
      <p class="t-error" id="assignError" role="alert"></p>
      <button class="t-primary" type="submit">Set this work →</button></form></section>
    <section><h2>Work set for this class</h2>${list ? `<ul class="t-list">${list}</ul>` : '<p class="t-muted">Nothing set yet.</p>'}</section></div>`;
}

const chosen = new Set();
async function bindWork() {
  const cat = await loadCatalog();
  const subj = $('#aSubject'), top = $('#aTopic');
  subj.innerHTML = cat.subjects.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join('');
  const subject = () => cat.subjects.find(s => s.id === subj.value);
  const flags = l => [l.separate ? 'Separate sciences only' : '', l.higher ? 'Higher tier only' : ''].filter(Boolean).join(' · ');
  const drawTopics = () => { chosen.clear(); top.innerHTML = subject().topics.map(t => `<option value="${t.id}">${esc(t.title)} (${t.lessons.length})</option>`).join(''); drawLessons(); };
  const drawLessons = () => {
    const t = subject().topics.find(x => x.id === top.value);
    $('#aLessons').innerHTML = t.lessons.map(l => `<label class="t-check"><input type="checkbox" value="${esc(l.id)}" ${chosen.has(l.id) ? 'checked' : ''}><span>${esc(l.title)}${flags(l) ? ` <small>${flags(l)}</small>` : ''}</span></label>`).join('');
    $$('#aLessons input').forEach(i => (i.onchange = () => { i.checked ? chosen.add(i.value) : chosen.delete(i.value); count(); }));
    count();
  };
  const count = () => { $('#aCount').textContent = chosen.size ? `${chosen.size} lesson${chosen.size === 1 ? '' : 's'} chosen${chosen.size > 1 ? ' (students see them in topic order)' : ''}.` : 'No lessons chosen.'; };
  subj.onchange = drawTopics; top.onchange = drawLessons;
  $('#aAll').onclick = () => { const t = subject().topics.find(x => x.id === top.value); t.lessons.forEach(l => chosen.add(l.id)); drawLessons(); };
  drawTopics();
  $('#assignForm').onsubmit = async e => {
    e.preventDefault();
    const f = e.target, order = subject().topics.flatMap(t => t.lessons.map(l => l.id)).filter(id => chosen.has(id));
    const r = await guard(() => S.backend.createAssignment(S.classId, {title: f.title.value, subject: subj.value, lessonIds: order, dueAt: f.due.value ? new Date(f.due.value + 'T23:59:00') : null, note: f.note.value}), '#assignError');
    if (r) { chosen.clear(); S.assignmentId = r.id; S.tab = 'progress'; await guard(loadClass); S.notice = `Set “${r.title}”. Students see it under Set work when they next open the lessons.`; render(); }
  };
  $$('[data-del-assign]').forEach(b => (b.onclick = async () => {
    const a = S.assignments.find(x => x.id === b.dataset.delAssign);
    if (!confirm(`Delete “${a.title}”? Students' answers are kept, but the work will no longer appear as set.`)) return;
    await guard(() => S.backend.deleteAssignment(a.id)); await guard(loadClass); render();
  }));
  $$('[data-view-assign]').forEach(b => (b.onclick = async () => { S.assignmentId = b.dataset.viewAssign; S.tab = 'progress'; await guard(loadResults); render(); }));
}

// ------------------------------------------------------------------------------- students tab
function studentsTab() {
  const c = cls();
  return `<div class="t-two"><section><h2>Students (${S.roster.length})</h2>
      ${S.roster.length ? `<table class="t-roster"><thead><tr><th scope="col">Name</th><th scope="col">Username</th><th scope="col">Added</th><th scope="col"><span class="t-sr">Actions</span></th></tr></thead><tbody>${S.roster.map(s => `<tr><td>${esc(s.displayName)}</td><td><code>${esc(s.username)}</code></td><td class="t-muted">${esc(fmtDate(s.joinedAt))}</td><td><button class="t-link" data-reset="${s.id}">New password</button> <button class="t-link t-danger" data-remove="${s.id}">Delete</button></td></tr>`).join('')}</tbody></table>` : '<p class="t-muted">No students yet.</p>'}
      <div class="t-howto"><h3>How students sign in</h3><ol><li>Open the Crash Course lessons page.</li><li>Choose <b>Join your class</b> in the menu.</li><li>Enter class code <b>${esc(c.joinCode)}</b>, their username and password.</li></ol></div></section>
    <section><h2>Add students</h2><form id="addStudents" class="t-form"><label>One name per line<textarea name="names" rows="8" placeholder="Amira Khan&#10;Ben Okafor" required></textarea></label>
      <p class="t-muted">Usernames and passwords are made for you. Passwords are shown once: print or copy them before closing.${S.backend.kind === 'demo' ? ' Use made-up names in demo mode.' : ' Until a DPIA and school sign-off are complete, use test names only.'}</p>
      <p class="t-error" id="addError" role="alert"></p><button class="t-primary" type="submit">Create logins →</button></form></section></div>`;
}

function showLogins(list, heading) {
  const c = cls();
  dialog(`<div class="t-print"><span class="t-eyebrow">${esc(c.name)} · CLASS CODE ${esc(c.joinCode)}</span><h2>${esc(heading)}</h2><p>Students choose <b>Join your class</b> on the lessons page, then enter the class code, username and password.</p>
    <table class="t-roster"><thead><tr><th scope="col">Name</th><th scope="col">Username</th><th scope="col">Password</th></tr></thead><tbody>${list.map(s => `<tr><td>${esc(s.displayName)}</td><td><code>${esc(s.username)}</code></td><td><code>${esc(s.password)}</code></td></tr>`).join('')}</tbody></table></div>
    <p class="t-muted">These passwords are not shown again. You can make a new password for a student at any time.</p><div class="t-actions"><button class="t-primary" id="printLogins">Print</button> <button class="t-secondary" id="copyLogins">Copy</button></div>`);
  $('#printLogins').onclick = () => window.print();
  $('#copyLogins').onclick = async () => { const text = list.map(s => `${s.displayName}\t${c.joinCode}\t${s.username}\t${s.password}`).join('\n'); try { await navigator.clipboard.writeText(text); $('#copyLogins').textContent = 'Copied'; } catch { $('#copyLogins').textContent = 'Copy not available'; } };
}

function bindStudents() {
  $('#addStudents').onsubmit = async e => {
    e.preventDefault();
    const names = e.target.names.value.split('\n').map(x => x.trim()).filter(Boolean);
    const btn = e.target.querySelector('button'); btn.disabled = true;
    const r = await guard(() => S.backend.createStudents(S.classId, names), '#addError');
    btn.disabled = false;
    if (r) { await guard(loadClasses); render(); showLogins(r, `${r.length} new login${r.length === 1 ? '' : 's'}`); }
  };
  $$('[data-reset]').forEach(b => (b.onclick = async () => {
    const s = S.roster.find(x => x.id === b.dataset.reset);
    if (!confirm(`Make a new password for ${s.displayName}? Their old password will stop working.`)) return;
    const r = await guard(() => S.backend.resetPassword(S.classId, s.id));
    if (r) showLogins([{displayName: s.displayName, username: r.username, password: r.password}], 'New password');
  }));
  $$('[data-remove]').forEach(b => (b.onclick = async () => {
    const s = S.roster.find(x => x.id === b.dataset.remove);
    if (!confirm(`Delete ${s.displayName}'s account? This permanently removes their login, answers and progress.`)) return;
    await guard(() => S.backend.deleteStudent(S.classId, s.id)); await guard(loadClasses); render();
  }));
}

// ------------------------------------------------------------------------------- start
(async () => {
  try {
    S.backend = await createBackend('teacher');
    if (S.backend.kind === 'demo') { $('#mode').hidden = false; $('#mode').textContent = 'Demo mode · made-up data in this browser'; }
    S.me = await S.backend.session();
    if (S.me && S.me.role !== 'teacher') { await S.backend.signOut(); S.me = null; }
    if (S.me) await loadClasses();
    render();
  } catch (err) {
    $('#app').innerHTML = `<h1>Dashboard unavailable</h1><p>${esc(err.message)}</p>`;
  }
})();
window.crashCourseTeacher = S;
