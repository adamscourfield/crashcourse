// Classroom: identity rules, lesson catalogue, demo backend ownership rules (mirroring the Supabase
// row-level security tested in classroom-db.test.js), the offline attempt queue, and the hooks that
// send answers from every subject studio.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {usernameFor, newPassword, studentEmail, normaliseCode, normaliseUsername, cleanDisplayName} from '../dist/classroom/identity.js';
import {demoBackend, DEMO_TEACHER, DEMO_CODE, validAssignment} from '../dist/classroom/backend.js';
import {createSync, progressRows, queueKey} from '../dist/classroom/sync.js';
import {readdirSync} from 'node:fs';
import {track, connectTracker, disconnectTracker, plain} from '../dist/classroom/track.js';
import {buildCatalog} from '../tools/build-classroom-catalog.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const memory = () => { const m = new Map(); return {getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: k => m.delete(k), map: m}; };

test('identity: usernames, passwords, codes and synthetic student emails', () => {
  assert.equal(usernameFor('Amira Khan'), 'amira-k');
  assert.equal(usernameFor('Zoë Brontë'), 'zoe-b');
  assert.equal(usernameFor('  Jo  '), 'jo-pupil');
  assert.equal(usernameFor('Amira Khan', new Set(['amira-k', 'amira-k2'])), 'amira-k3');
  assert.equal(usernameFor('<script>'), 'script');
  for (let i = 0; i < 50; i++) assert.match(newPassword(), /^[a-z]+-[a-z]+-[a-z]+-[1-9]\d$/);
  assert.equal(normaliseCode('tryme-2 '), 'TRYME2');
  assert.equal(normaliseCode('DEMO2O'), '', 'O is never used in codes');
  assert.equal(normaliseCode('ABC'), '');
  assert.equal(normaliseUsername(' Amira-K '), 'amira-k');
  assert.equal(normaliseUsername('a b'), '');
  assert.equal(studentEmail('amira-k', 'tryme2', 'pupils.crashcourse.invalid'), 'amira-k@tryme2.pupils.crashcourse.invalid');
  assert.throws(() => studentEmail('x', 'TRYME2', 'd'));
  assert.equal(cleanDisplayName(' A  <b>B</b>\n'), 'A bB/b');
});

test('identity helpers are identical in the browser and the edge function', () => {
  assert.equal(readFileSync(join(root, 'dist/classroom/identity.js'), 'utf8'), readFileSync(join(root, '../supabase/functions/manage-students/identity.js'), 'utf8'));
});

test('lesson catalogue is up to date and covers every built lesson once', async () => {
  const fresh = await buildCatalog();
  const saved = JSON.parse(readFileSync(join(root, 'dist/classroom/catalog.json'), 'utf8'));
  assert.deepEqual(saved, fresh, 'run node tools/build-classroom-catalog.mjs');
  const counts = Object.fromEntries(fresh.subjects.map(s => [s.id, s.topics.flatMap(t => t.lessons).length]));
  assert.deepEqual(Object.keys(counts).sort(), ['english-literature', 'geography', 'history', 'maths', 'science']);
  for (const s of fresh.subjects) {
    const ids = s.topics.flatMap(t => t.lessons.map(l => l.id));
    assert.equal(new Set(ids).size, ids.length, `${s.id} lesson ids unique`);
    assert.ok(ids.length > 40, `${s.id} has lessons`);
  }
});

test('assignment validation', () => {
  assert.throws(() => validAssignment({subject: 'art', title: 'x', lessonIds: ['a']}), /subject/);
  assert.throws(() => validAssignment({subject: 'history', title: ' ', lessonIds: ['a']}), /title/);
  assert.throws(() => validAssignment({subject: 'history', title: 'x', lessonIds: []}), /lesson/);
  assert.deepEqual(validAssignment({subject: 'history', title: 'Recap', lessonIds: ['a', 'a', 'b']}).lessonIds, ['a', 'b']);
});

test('demo backend: the full teacher and student journey, with ownership rules', async () => {
  const storage = memory();
  const teacher = demoBackend('teacher', {storage}), student = demoBackend('student', {storage}), other = demoBackend('teacher2', {storage});
  await assert.rejects(teacher.listClasses(), /Sign in/);
  await assert.rejects(teacher.signInTeacher(DEMO_TEACHER.email, 'wrong'), /not recognised/);
  const me = await teacher.signInTeacher(DEMO_TEACHER.email, DEMO_TEACHER.password);
  assert.equal(me.role, 'teacher');
  const [demoClass] = await teacher.listClasses();
  assert.equal(demoClass.joinCode, DEMO_CODE);
  assert.equal(demoClass.studentCount, 3);

  const k = await teacher.createClass('10A History');
  assert.match(k.joinCode, /^[A-Z2-9]{6}$/);
  const logins = await teacher.createStudents(k.id, ['Amira Khan', 'Amira Kaur', 'Ben Okafor']);
  assert.deepEqual(logins.map(l => l.username), ['amira-k', 'amira-k2', 'ben-o']);
  const set = await teacher.createAssignment(k.id, {title: 'Weimar recap', subject: 'history', lessonIds: ['history.germany.origins', 'history.germany.versailles'], dueAt: '2026-11-04T23:59:00Z'});

  // A teacher with no relationship to the class sees nothing and can change nothing.
  await other.signUpTeacher('other@example.test', 'password123', 'Other');
  await assert.rejects(other.roster(k.id), /own classes/);
  await assert.rejects(other.createAssignment(k.id, {title: 'x', subject: 'history', lessonIds: ['x']}), /own classes/);
  assert.deepEqual(await other.progressFor(logins.map(l => l.studentId)), []);

  await assert.rejects(student.signInStudent(k.joinCode, 'amira-k', 'nope'), /not recognised/);
  await assert.rejects(student.signInStudent(DEMO_CODE, 'amira-k', logins[0].password), /not recognised/, 'username is scoped to the class code');
  const amira = await student.signInStudent(k.joinCode.toLowerCase(), 'Amira-K', logins[0].password);
  assert.equal(amira.role, 'student');
  const work = await student.myAssignments();
  assert.deepEqual(work.map(a => a.title), ['Weimar recap']);
  await assert.rejects(student.listClasses(), /Teachers only/);

  const base = {subject: 'history', lessonId: 'history.germany.origins', questionId: 'gd1.p1', stage: 'practice', prompt: 'About how many German soldiers died?', correctAnswer: 'Two million'};
  assert.equal(await student.recordAttempts([{...base, answer: 'Two hundred thousand', correct: false, clientId: 'c-0001-aaaa'}, {...base, answer: 'Two million', correct: true, clientId: 'c-0002-bbbb'}]), 2);
  assert.equal(await student.recordAttempts([{...base, answer: 'Two million', correct: true, clientId: 'c-0002-bbbb'}]), 0, 'a re-sent attempt is ignored');
  await student.saveProgress([{subject: 'history', lessonId: 'history.germany.origins', stagesDone: 4, started: true, complete: true, checkCorrect: 7, checkTotal: 8}]);

  const ids = (await teacher.roster(k.id)).map(s => s.id);
  const progress = await teacher.progressFor(ids, 'history', set.lessonIds);
  assert.equal(progress.length, 1);
  assert.equal(progress[0].complete, true);
  assert.ok(progress[0].completedAt);
  const attempts = await teacher.attemptsFor(ids, 'history', set.lessonIds);
  assert.deepEqual(attempts.map(a => [a.answer, a.correct]), [['Two hundred thousand', false], ['Two million', true]]);

  // Reset password: the old one stops working.
  const reset = await teacher.resetPassword(k.id, amira.id);
  await student.signOut();
  await assert.rejects(student.signInStudent(k.joinCode, 'amira-k', logins[0].password), /not recognised/);
  await student.signInStudent(k.joinCode, 'amira-k', reset.password);

  // Deleting a student removes their account and data.
  await teacher.deleteStudent(k.id, amira.id);
  assert.equal((await teacher.attemptsFor(ids, 'history')).length, 0);
  assert.equal((await teacher.roster(k.id)).length, 2);
  assert.equal(await student.session(), null, 'deleted student is signed out');
});

test('sync queue: survives reload, sends each attempt once, keeps work after a failure', async () => {
  const storage = memory();
  const sent = [], saved = [];
  let fail = true;
  const backend = {
    async recordAttempts(list) { if (fail) throw new Error('offline'); sent.push(...list); return list.length; },
    async saveProgress(rows) { saved.push(...rows); return rows.length; },
  };
  const s1 = createSync({backend, studentId: 'student-1234', storage});
  s1.addAttempt({subject: 'maths', lessonId: 'L1', questionId: 'q1', stage: 'check', answer: '3', correct: true});
  s1.setProgress([{subject: 'maths', lessonId: 'L1', stagesDone: 3, started: true, complete: false, checkCorrect: 1, checkTotal: 1}]);
  assert.equal(await s1.flush(), false);
  assert.equal(s1.pending(), 2, 'nothing lost while offline');
  assert.ok(s1.retryDelay() > 2000, 'backs off after failure');

  // "Reload": a new queue object reads the same storage.
  const s2 = createSync({backend, studentId: 'student-1234', storage});
  assert.equal(s2.pending(), 2);
  fail = false;
  assert.equal(await s2.flush(), true);
  assert.equal(sent.length, 1);
  assert.match(sent[0].clientId, /^student-/);
  assert.equal(saved.length, 1);
  assert.equal(s2.pending(), 0);
  s2.setProgress([{subject: 'maths', lessonId: 'L1', stagesDone: 3, started: true, complete: false, checkCorrect: 1, checkTotal: 1}]);
  assert.equal(s2.pending(), 0, 'unchanged progress is not re-sent');
  s2.setProgress([{subject: 'maths', lessonId: 'L1', stagesDone: 4, started: true, complete: true, checkCorrect: 1, checkTotal: 1}]);
  assert.equal(s2.pending(), 1);

  // Another student on the same device has a separate queue and cannot overwrite this one's unsent work.
  s2.addAttempt({subject: 'maths', lessonId: 'L1', questionId: 'q2', stage: 'check', answer: '4', correct: false});
  const s3 = createSync({backend, studentId: 'student-9999', storage});
  assert.equal(s3.pending(), 0);
  s3.addAttempt({subject: 'maths', lessonId: 'L1', questionId: 'q9', stage: 'check', answer: '1', correct: true});
  assert.equal(createSync({backend, studentId: 'student-1234', storage}).pending(), 2, 'first student still has their unsent attempt and progress');
  assert.ok(storage.getItem(queueKey('student-1234')) && storage.getItem(queueKey('student-9999')));
});

test('progressRows flattens a studio summary', () => {
  const rows = progressRows('history', {topics: [{lessons: [
    {id: 'a', stages: [true, true, true, true], started: true, check: {correct: 7, total: 8}},
    {id: 'b', stages: [true, false, false, false], started: true, check: {correct: 0, total: 0}},
    {id: 'c', stages: [false, false, false, false], started: false, check: {correct: 0, total: 0}},
  ]}]});
  assert.deepEqual(rows, [
    {subject: 'history', lessonId: 'a', stagesDone: 4, started: true, complete: true, checkCorrect: 7, checkTotal: 8},
    {subject: 'history', lessonId: 'b', stagesDone: 1, started: true, complete: false, checkCorrect: 0, checkTotal: 0},
  ]);
});

test('tracker buffers until connected and strips markup', () => {
  disconnectTracker();
  track({subject: 'maths', lessonId: 'L', questionId: 'q', answer: 'x'});
  const got = [];
  connectTracker(e => got.push(e));
  track({subject: 'maths', lessonId: 'L', questionId: 'q2', answer: 'y'});
  assert.deepEqual(got.map(e => e.questionId), ['q', 'q2']);
  assert.ok(got[0].answeredAt > 0);
  disconnectTracker();
  assert.equal(plain('<b>2</b>&nbsp;&amp; <i>x</i>²'), '2 & x ²');
  assert.equal(plain([1, 2]), '1, 2');
});

test('the shared-computer guard knows every studio\'s saved-progress key', async () => {
  const src = ['app.js', 'progress.js', 'maths/mastery.js', 'geography/studio.js', 'history/studio.js', 'literature/studio.js'].map(f => readFileSync(join(root, 'dist', f), 'utf8')).join('\n');
  const keys = [...new Set([...src.matchAll(/'(crash-course-(?!classroom)(?:[a-z0-9-]+-)?v\d+)'/g)].map(m => m[1]))].sort();
  const guard = readFileSync(join(root, 'dist/classroom/student.js'), 'utf8').match(/LESSON_KEYS = (\[[^\]]+\])/)[1];
  assert.deepEqual(JSON.parse(guard.replace(/'/g, '"')).sort(), keys);
});

test('every subject studio sends practice, check and review answers to the classroom hook', () => {
  const read = f => readFileSync(join(root, 'dist', f), 'utf8');
  const app = read('app.js');
  for (const stage of ["'practice'", "'check'", "view==='review'?'review':'assessment'"]) assert.ok(app.includes(`ccSend(`) && app.includes(stage), `science ${stage}`);
  assert.equal(app.match(/ccSend\(/g).length, 4, 'science: definition plus practice, check and run');
  assert.ok(app.includes("import('./classroom/student.js"), 'classroom loads separately from lessons');
  const maths = read('maths/studio.js');
  assert.equal(maths.match(/sendMaths\(/g).length, 3, 'maths: practice, check and review/assessment runs');
  for (const [f, subject] of [['history/studio.js', 'history'], ['literature/studio.js', 'english-literature'], ['geography/studio.js', 'geography']]) {
    const s = read(f);
    assert.ok(s.includes(`subject:'${subject}'`) || s.includes(`subject: '${subject}'`), f);
    for (const stage of ['practice', 'check', 'review', 'challenge']) assert.ok(s.includes(`'${stage}'`), `${f} ${stage}`);
  }
  assert.ok(read('literature/studio.js').includes("stage: 'writing'"), 'literature written responses');
  assert.ok(read('geography/studio.js').includes("stage:'model'"), 'geography model activities');
});
