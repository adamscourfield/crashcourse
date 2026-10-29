// Student side of the classroom: sign in with class code + username, see set work, open a set
// lesson, and send every answer and lesson-progress change to the teacher (queued offline first).
import {createBackend} from './backend.js?v=20261029-language01';
import {createSync, progressRows} from './sync.js?v=20261029-language01';
import {connectTracker} from './track.js?v=20261029-language01';

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const SUBJECT_NAMES = {science: 'Science', maths: 'Maths', 'english-language':'English Language', 'english-literature': 'English Literature', history: 'History', geography: 'Geography'};
// Lesson progress lives in the browser, not the account. On a shared computer, the next student must
// not upload the previous student's progress as their own, so the browser remembers whose progress it
// holds and a different student must clear it (their shared copy stays with the teacher) or sign out.
export const OWNER_KEY = 'crash-course-classroom-device-owner';
export const LESSON_KEYS = ['crash-course-v2', 'crash-course-science-v1', 'crash-course-maths-v1', 'crash-course-geography-a-v1', 'crash-course-history-v1', 'crash-course-literature-v1'];
const ls = {get: k => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }, del: k => { try { localStorage.removeItem(k); } catch {} }};
const hasLessonData = () => LESSON_KEYS.some(k => ls.get(k) !== null);
const fmtDue = d => new Date(d).toLocaleDateString('en-GB', {weekday: 'short', day: 'numeric', month: 'short'});

/**
 * app: {subject(): string, summary(): progress summary for the current subject,
 *       open(subject, lessonId): {ok, reason?}, modal(html), closeModal()}
 */
export async function attachClassroom(app, {backend: given, sidebar = document.querySelector('.sidebar')} = {}) {
  const css = document.createElement('link');
  css.rel = 'stylesheet'; css.href = 'classroom/classroom.css?v=20261029-language01';
  document.head.append(css);

  const box = document.createElement('div');
  box.className = 'classroom-side';
  const anchor = sidebar.querySelector('.side-course');
  if (anchor) anchor.before(box); else sidebar.append(box);

  let backend, me = null, sync = null, timer = null, catalog = null, assignments = [], serverProgress = [];
  try { backend = given || await createBackend('student'); me = await backend.session(); }
  catch (err) { box.innerHTML = `<p class="classroom-note">Class sign-in unavailable: ${esc(err.message)}</p>`; return null; }
  if (me && (me.role !== 'student' || (ls.get(OWNER_KEY) && ls.get(OWNER_KEY) !== me.id))) { await backend.signOut(); me = null; }

  async function lessonTitles() {
    if (catalog) return catalog;
    try { const c = await (await fetch('classroom/catalog.json?v=20261029-language01')).json(); catalog = new Map(c.subjects.flatMap(s => s.topics.flatMap(t => t.lessons.map(l => [`${s.id}|${l.id}`, l.title])))); }
    catch { catalog = new Map(); }
    return catalog;
  }

  function snapshot() {
    if (!sync) return;
    try { sync.setProgress(progressRows(app.subject(), app.summary())); } catch {}
  }
  function schedule(ms = 1500) {
    clearTimeout(timer);
    if (!sync) return;
    timer = setTimeout(async () => {
      const s = sync; if (!s) return;
      snapshot(); const ok = await s.flush(); renderSide();
      if (!ok && sync === s) schedule(s.retryDelay());
    }, ms);
  }

  // Page-level listeners are added once and do nothing while signed out.
  let listening = false;
  function listen() {
    if (listening) return; listening = true;
    addEventListener('online', () => schedule(200));
    addEventListener('pagehide', snapshot);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && sync) { snapshot(); sync.flush(); } });
    setInterval(() => { if (!sync) return; snapshot(); if (sync.pending()) schedule(0); }, 60000);
  }

  function start() {
    sync = createSync({backend, studentId: me.id});
    connectTracker(e => {
      if (!sync || !e.subject || !e.lessonId || !e.questionId) return;
      sync.addAttempt(e);
      schedule();
    });
    listen();
    schedule(500);
    refreshWork();
  }
  // Signed out: answers are discarded, never buffered, so nothing done before signing in is shared.
  function stop() { connectTracker(() => {}); clearTimeout(timer); sync = null; }

  async function refreshWork() {
    try { [assignments, serverProgress] = await Promise.all([backend.myAssignments(), backend.myProgress()]); } catch { /* keep the last list */ }
    renderSide();
  }
  const status = (subject, lessonId) => serverProgress.find(p => p.subject === subject && p.lessonId === lessonId);
  const outstanding = () => assignments.filter(a => a.lessonIds.some(id => !status(a.subject, id)?.complete)).length;

  function renderSide() {
    if (!me) {
      box.innerHTML = `<button class="nav classroom-nav" id="ccSignIn"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg><span>Join your class</span></button>`;
      box.querySelector('#ccSignIn').onclick = openSignIn;
      return;
    }
    const st = sync?.status();
    const sync_ = !st ? '' : st.pending ? (st.failures ? `Offline · ${st.pending} waiting to send` : 'Sending…') : 'Shared with your teacher';
    box.innerHTML = `<button class="nav classroom-nav" id="ccWork"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4h6M8 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M8 11h8M8 15h5"/></svg><span>Set work</span><span class="nav-count" id="ccWorkCount">${outstanding()}</span></button><p class="classroom-note"><span>${esc(me.displayName)}</span><span id="ccSync">${esc(sync_)}</span><button class="text-button" id="ccSignOut">Sign out</button></p>`;
    box.querySelector('#ccWork').onclick = openWork;
    box.querySelector('#ccSignOut').onclick = async () => { snapshot(); await sync?.flush(); stop(); await backend.signOut(); me = null; assignments = []; renderSide(); };
  }

  function openSignIn() {
    const demo = backend.kind === 'demo';
    app.modal(`<span class="eyebrow">YOUR CLASS</span><h2>Join your class</h2><p>Use the class code, username and password your teacher gave you. Your answers from now on, and your lesson progress in this browser, are shared with your teacher.</p>${demo ? '<p class="classroom-demo">Demo mode: made-up data stored only in this browser. Try class code <b>TRYME2</b>, username <b>amira-k</b>, password <b>demo-amira</b>.</p>' : ''}<form id="ccForm" class="classroom-form" autocomplete="on"><label>Class code<input name="code" autocomplete="off" autocapitalize="characters" maxlength="8" required></label><label>Username<input name="username" autocomplete="username" autocapitalize="none" required></label><label>Password<input name="password" type="password" autocomplete="current-password" required></label><p class="classroom-error" id="ccError" role="alert"></p><button class="primary" type="submit">Sign in →</button></form><p class="classroom-teacher-link">Teacher? <a href="teacher/">Open the teacher dashboard</a></p>`);
    const f = document.getElementById('ccForm');
    f.onsubmit = async e => {
      e.preventDefault();
      const btn = f.querySelector('button'); btn.disabled = true;
      try {
        me = await backend.signInStudent(f.code.value, f.username.value, f.password.value);
        const owner = ls.get(OWNER_KEY);
        if (owner && owner !== me.id && hasLessonData()) return otherStudentsWork();
        ls.set(OWNER_KEY, me.id);
        app.closeModal(); start(); renderSide();
      } catch (err) { document.getElementById('ccError').textContent = err.message; btn.disabled = false; }
    };
  }

  function otherStudentsWork() {
    app.modal(`<span class="eyebrow">SHARED COMPUTER</span><h2>Another student's lessons are saved in this browser</h2><p>To keep your work separate, clear this browser's saved lessons before you start. The other student's shared work is safe with their teacher; only this browser's copy is removed.</p><div class="modal-actions"><button class="primary" id="ccClear">Clear and continue as ${esc(me.displayName)}</button> <button class="secondary" id="ccCancel">Sign out</button></div>`);
    document.getElementById('ccClear').onclick = () => { LESSON_KEYS.forEach(ls.del); ls.set(OWNER_KEY, me.id); location.reload(); };
    let chosen = false;
    const leave = async () => { if (chosen) return; chosen = true; await backend.signOut(); me = null; app.closeModal(); renderSide(); };
    document.getElementById('ccClear').addEventListener('click', () => { chosen = true; });
    document.getElementById('ccCancel').onclick = leave;
    // Closing the dialog any other way (×, Escape, backdrop) also signs out rather than leaving a half-signed-in state.
    document.getElementById('modal')?.addEventListener('close', leave, {once: true});
  }

  async function openWork() {
    app.modal('<h2>Set work</h2><p>Loading…</p>');
    snapshot(); await sync?.flush(); await refreshWork();
    const titles = await lessonTitles();
    const rows = assignments.map(a => {
      const lessons = a.lessonIds.map(id => {
        const p = status(a.subject, id);
        const label = p?.complete ? 'Complete' : p?.started ? `In progress · ${p.stagesDone}/4 stages` : 'Not started';
        return `<button class="lesson-row classroom-lesson" data-cc-subject="${esc(a.subject)}" data-cc-lesson="${esc(id)}"><span class="classroom-tick ${p?.complete ? 'done' : p?.started ? 'part' : ''}" aria-hidden="true">${p?.complete ? '✓' : p?.started ? '◐' : '○'}</span><span><b>${esc(titles.get(`${a.subject}|${id}`) || id)}</b><small>${label}</small></span><span>→</span></button>`;
      }).join('');
      const done = a.lessonIds.filter(id => status(a.subject, id)?.complete).length;
      const late = a.dueAt && new Date(a.dueAt) < new Date() && done < a.lessonIds.length;
      return `<section class="classroom-assignment"><header><div><span class="eyebrow">${esc(SUBJECT_NAMES[a.subject] || a.subject)} · ${done}/${a.lessonIds.length} complete</span><h3>${esc(a.title)}</h3></div><span class="classroom-due ${late ? 'late' : ''}">${a.dueAt ? `${late ? 'Overdue · was due' : 'Due'} ${esc(fmtDue(a.dueAt))}` : 'No due date'}</span></header>${a.note ? `<p>${esc(a.note)}</p>` : ''}<div class="lesson-list">${lessons}</div></section>`;
    }).join('');
    app.modal(`<span class="eyebrow">YOUR CLASS</span><h2>Set work</h2>${rows || '<p>Your teacher has not set any lessons yet.</p>'}<p class="classroom-error" id="ccOpenError" role="alert"></p>`);
    document.querySelectorAll('[data-cc-lesson]').forEach(b => (b.onclick = () => {
      const r = app.open(b.dataset.ccSubject, b.dataset.ccLesson);
      if (r && !r.ok) document.getElementById('ccOpenError').textContent = r.reason;
    }));
  }

  renderSide();
  if (me) start(); else stop();
  return {backend, me: () => me, flush: () => sync?.flush(), openWork, openSignIn, pending: () => sync?.pending() ?? 0};
}
