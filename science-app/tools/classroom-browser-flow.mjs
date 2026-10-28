// Browser walk of the classroom feature in demo mode (made-up data in the browser's storage):
// teacher sets work -> student joins, answers (wrong then right), reloads mid-lesson -> teacher sees
// progress, each student's answers and the whole class's answers. Run with the app served at BASE.
//   node tools/classroom-browser-flow.mjs   (BASE defaults to http://localhost:4173/)
import {writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
const {chromium} = await import('playwright').catch(() => createRequire(import.meta.url)('playwright'));

const BASE = process.env.BASE || 'http://localhost:4173/';
const OUT = process.env.OUT || '.';
const checks = [];
const ok = (cond, label) => { checks.push({label, pass: !!cond}); if (!cond) console.log('FAIL', label); };

const browser = await chromium.launch();
const ctx = await browser.newContext({viewport: {width: 1366, height: 900}});
const errors = [];
ctx.on('page', p => p.on('pageerror', e => errors.push(e.message)));
const teacher = await ctx.newPage();
teacher.on('pageerror', e => errors.push(e.message));
teacher.on('dialog', d => d.accept());

// ---------------------------------------------------------------- teacher sets up
await teacher.goto(BASE + 'teacher/');
await teacher.waitForSelector('#authForm');
ok(await teacher.isVisible('.t-demo'), 'demo mode is clearly labelled');
await teacher.fill('input[name=email]', 'demo.teacher@example.test');
await teacher.fill('input[name=password]', 'wrong-password');
await teacher.click('#authForm button[type=submit]');
await teacher.waitForFunction(() => document.querySelector('#authError').textContent.length > 0);
ok((await teacher.textContent('#authError')).includes('not recognised'), 'wrong teacher password is refused');
await teacher.fill('input[name=password]', 'demo-teacher');
await teacher.click('#authForm button[type=submit]');
await teacher.waitForSelector('.t-layout');
ok(await teacher.isVisible('text=10A (demo)'), 'seeded demo class listed');

await teacher.fill('#newClassName', '10B History (test)');
await teacher.click('#newClass button');
await teacher.waitForSelector('#addStudents');
const code = (await teacher.textContent('.t-code b')).trim();
ok(/^[A-HJKMNP-Z2-9]{6}$/.test(code), `class code generated (${code})`);
await teacher.fill('textarea[name=names]', 'Test Pupil One\nTest Pupil Two');
await teacher.click('#addStudents button');
await teacher.waitForSelector('#dlg[open] .t-print');
const logins = await teacher.$$eval('#dlg .t-print tbody tr', rows => rows.map(r => [...r.querySelectorAll('td')].map(td => td.textContent.trim())));
ok(logins.length === 2 && logins[0][1] === 'test-o' && /^[a-z]+-[a-z]+-[a-z]+-\d\d$/.test(logins[0][2]), 'two logins created with generated usernames and passwords');
await teacher.screenshot({path: `${OUT}/classroom-teacher-logins.png`});
await teacher.click('#dlgClose');

await teacher.click('[data-tab=work]');
await teacher.waitForSelector('#assignForm');
await teacher.fill('#assignForm input[name=title]', 'Weimar origins recap');
await teacher.selectOption('#aSubject', 'history');
await teacher.selectOption('#aTopic', 'history.germany.kt1');
await teacher.check('#aLessons input[value="history.germany.origins"]');
await teacher.check('#aLessons input[value="history.germany.war-legacy"]');
ok((await teacher.textContent('#aCount')).startsWith('2 lessons'), 'lesson picker counts chosen lessons');
await teacher.fill('#assignForm input[name=due]', '2026-11-06');
await teacher.click('#assignForm button[type=submit]');
await teacher.waitForSelector('.t-grid');
ok((await teacher.$$('.t-grid tbody tr')).length === 2, 'progress grid shows both students');
ok((await teacher.$$('.t-cell.none')).length === 4, 'every cell starts as not started');

await teacher.click('[data-tab=work]');
await teacher.waitForSelector('#assignForm');
await teacher.fill('#assignForm input[name=title]', 'Separate chemistry');
await teacher.selectOption('#aSubject', 'science');
const sepId = await teacher.$eval('#aTopic', async sel => {
  const cat = await (await fetch('../classroom/catalog.json')).json();
  for (const t of cat.subjects[0].topics) { const l = t.lessons.find(x => x.separate); if (l) { sel.value = t.id; sel.dispatchEvent(new Event('change')); return l.id; } }
});
await teacher.check(`#aLessons input[value="${sepId}"]`);
await teacher.click('#assignForm button[type=submit]');
await teacher.waitForSelector('.t-grid');

// ---------------------------------------------------------------- student joins and works
const student = await ctx.newPage();
student.on('pageerror', e => errors.push(e.message));
await student.goto(BASE);
await student.waitForSelector('#ccSignIn');
ok(true, 'Join your class appears in the lessons sidebar');
// Answer a Science question while signed out: it must never be shared.
await student.click('.steps [data-stage="2"]');
await student.waitForSelector('[data-practice]');
await student.click('[data-practice]');
await student.waitForTimeout(300);
await student.click('#ccSignIn');
await student.fill('#ccForm input[name=code]', code.toLowerCase());
await student.fill('#ccForm input[name=username]', logins[0][1]);
await student.fill('#ccForm input[name=password]', 'not-the-password');
await student.click('#ccForm button');
await student.waitForFunction(() => document.querySelector('#ccError').textContent.length > 0);
ok((await student.textContent('#ccError')).includes('not recognised'), 'wrong student password is refused');
await student.fill('#ccForm input[name=password]', logins[0][2]);
await student.click('#ccForm button');
await student.waitForSelector('#ccWork');
ok((await student.textContent('#ccWorkCount')).trim() === '2', 'student sees two pieces of set work outstanding');

await student.click('#ccWork');
await student.waitForSelector('[data-cc-lesson]');
await student.screenshot({path: `${OUT}/classroom-student-setwork.png`});
ok(await student.isVisible('text=Weimar origins recap'), 'set work lists the assignment');
await student.click(`[data-cc-lesson="${sepId}"]`);
await student.waitForFunction(() => document.querySelector('#ccOpenError')?.textContent.includes('separate sciences'));
ok(true, 'a separate-only lesson explains the pathway change instead of failing silently');
await student.click('[data-cc-lesson="history.germany.origins"]');
await student.waitForSelector('#historyContent:not([hidden]) #hTitle');
ok((await student.textContent('#historyContent h1')).includes('origins of the Weimar Republic'), 'Open goes straight to the set History lesson');

// Practise: a wrong answer, then the right one.
await student.click('[data-hstage="2"]');
await student.waitForSelector('[data-hanswer]');
await student.click('[data-hanswer]:not([data-hanswer="0"])');
await student.waitForTimeout(300);
await student.click('[data-hanswer="0"]');
await student.waitForTimeout(300);
// Check: answer the first two (one wrong, one right).
await student.click('[data-hstage="3"]');
await student.waitForSelector('[data-hanswer]');
await student.click('[data-hanswer]:not([data-hanswer="0"])');
await student.waitForTimeout(900);
if (await student.isVisible('#hContinue')) await student.click('#hContinue');
await student.waitForTimeout(400);
await student.click('[data-hanswer="0"]');
await student.waitForTimeout(400);
const queued = await student.evaluate(() => { const k = Object.keys(localStorage).find(k => k.startsWith('crash-course-classroom-queue-v1:')); return k && JSON.parse(localStorage.getItem(k)); });
ok(queued && queued.studentId, 'answers are queued on the device first');

// Reload mid-lesson: still signed in, nothing lost.
await student.reload();
await student.waitForSelector('#ccWork');
ok(true, 'student stays signed in after reload');
await student.waitForFunction(() => /Shared with your teacher/.test(document.querySelector('#ccSync')?.textContent || ''), null, {timeout: 15000});
ok(true, 'queue flushed after reload ("Shared with your teacher")');
const shared = await student.evaluate(() => JSON.parse(localStorage.getItem('crash-course-classroom-demo-v1')).attempts.map(a => a.subject));
ok(shared.length >= 4 && !shared.includes('science'), `only answers given while signed in are shared (${shared.length} history, 0 science)`);

// ---------------------------------------------------------------- teacher reviews
await teacher.bringToFront();
await teacher.click('[data-tab=progress]');
await teacher.waitForSelector('#pickAssignment');
await teacher.selectOption('#pickAssignment', {label: 'Weimar origins recap · History'});
await teacher.waitForSelector('.t-grid');
await teacher.click('#refresh');
await teacher.waitForSelector('.t-cell.part');
ok((await teacher.$$('.t-cell.part')).length === 1, 'teacher grid shows the student in progress');
await teacher.screenshot({path: `${OUT}/classroom-teacher-grid.png`});
await teacher.click('.t-cell.part');
await teacher.waitForSelector('#dlg[open] .t-attempts');
const detail = await teacher.textContent('#dlgBody');
ok(detail.includes('Practise') && detail.includes('Check'), 'student detail shows Practise and Check answers');
ok((await teacher.$$('#dlgBody .t-bad')).length >= 2 && (await teacher.$$('#dlgBody .t-ok')).length >= 2, 'wrong and right answers both recorded');
ok(detail.includes('Correct answer:'), 'wrong answers show the correct answer');
await teacher.screenshot({path: `${OUT}/classroom-teacher-answers.png`});
await teacher.click('#dlgClose');
await teacher.click('[data-lesson="history.germany.origins"]');
await teacher.waitForSelector('#dlg[open] .t-question');
const whole = await teacher.textContent('#dlgBody');
ok(whole.includes('WHOLE CLASS') && /\d+% right first time/.test(whole), 'whole-class view gives first-attempt percentages per question');
ok(whole.includes('Common wrong answers'), 'whole-class view lists common wrong answers');
await teacher.click('#dlgClose');
await teacher.click('[data-student]');
await teacher.waitForSelector('#dlg[open]');
ok((await teacher.textContent('#dlgBody')).includes('In progress'), 'student view summarises each set lesson');
await teacher.click('#dlgClose');
const [download] = await Promise.all([teacher.waitForEvent('download'), teacher.click('#exportCsv')]);
ok(download.suggestedFilename().endsWith('.csv'), 'progress downloads as CSV');

// Password reset invalidates the old password.
await teacher.click('[data-tab=students]');
await teacher.waitForSelector('[data-reset]');
await teacher.click('[data-reset]');
await teacher.waitForSelector('#dlg[open] .t-print');
const newPw = (await teacher.$eval('#dlg .t-print tbody tr td:nth-child(3)', td => td.textContent)).trim();
await teacher.click('#dlgClose');
await student.bringToFront();
await student.click('#ccSignOut');
await student.click('#ccSignIn');
await student.fill('#ccForm input[name=code]', code);
await student.fill('#ccForm input[name=username]', logins[0][1]);
await student.fill('#ccForm input[name=password]', logins[0][2]);
await student.click('#ccForm button');
await student.waitForFunction(() => document.querySelector('#ccError').textContent.length > 0);
ok(true, 'old password stops working after a reset');
await student.fill('#ccForm input[name=password]', newPw);
await student.click('#ccForm button');
await student.waitForSelector('#ccWork');
ok(true, 'new password works');

// One practice answer in every other subject reaches the teacher through that studio's hook.
for (const [subject, root, stage, choice] of [
  ['science', '#scienceContent', '.steps [data-stage="2"]', '[data-practice]'],
  ['maths', '#mathsContent', '[data-mstage="2"]', '[data-mchoice]'],
  ['geography', '#geographyContent', '[data-gstage="2"]', '[data-ganswer]'],
  ['english-literature', '#literatureContent', '[data-hstage="2"]', '[data-hanswer]'],
]) {
  await student.selectOption('#subject', subject);
  await student.waitForTimeout(400);
  if (await student.evaluate(() => document.querySelector('#modal').open)) await student.evaluate(() => document.querySelector('#modal').close());
  await student.click(`${root} ${stage}`);
  await student.waitForSelector(`${root} ${choice}`);
  await student.click(`${root} ${choice}`);
  await student.waitForTimeout(300);
}
await student.evaluate(() => window.crashCourseClassroom.flush());
const subjects = await student.evaluate(() => [...new Set(JSON.parse(localStorage.getItem('crash-course-classroom-demo-v1')).attempts.map(a => a.subject))].sort());
ok(['english-literature', 'geography', 'history', 'maths', 'science'].every(x => subjects.includes(x)), `answers arrive from all five subjects (${subjects.join(', ')})`);

// ---------------------------------------------------------------- shared computer
const beforeCount = await student.evaluate(() => JSON.parse(localStorage.getItem('crash-course-classroom-demo-v1')).attempts.length);
await student.click('#ccSignOut');
await student.click('#ccSignIn');
await student.fill('#ccForm input[name=code]', code);
await student.fill('#ccForm input[name=username]', logins[1][1]);
await student.fill('#ccForm input[name=password]', logins[1][2]);
await student.click('#ccForm button');
await student.waitForSelector('#ccClear');
ok(true, 'a second student on the same browser is asked to clear the first student\'s saved lessons');
await student.screenshot({path: `${OUT}/classroom-shared-computer.png`});
await student.click('#closeModal');
await student.waitForSelector('#ccSignIn');
ok(true, 'closing the shared-computer prompt signs the second student out');
await student.click('#ccSignIn');
await student.fill('#ccForm input[name=code]', code);
await student.fill('#ccForm input[name=username]', logins[1][1]);
await student.fill('#ccForm input[name=password]', logins[1][2]);
await student.click('#ccForm button');
await student.waitForSelector('#ccClear');
await Promise.all([student.waitForNavigation(), student.click('#ccClear')]);
await student.waitForSelector('#ccWork');
ok((await student.textContent('.classroom-note span')).includes('Test Pupil Two'), 'second student is signed in after clearing');
ok(await student.evaluate(() => localStorage.getItem('crash-course-history-v1') === null || !JSON.parse(localStorage.getItem('crash-course-history-v1')).lessons?.['history.germany.origins']), 'the first student\'s lesson progress is no longer in this browser');
const afterCount = await student.evaluate(() => JSON.parse(localStorage.getItem('crash-course-classroom-demo-v1')).attempts.length);
ok(afterCount === beforeCount, 'the first student\'s shared answers are kept for the teacher');

// ---------------------------------------------------------------- phone widths
await student.setViewportSize({width: 390, height: 844});
await student.waitForTimeout(300);
ok(await student.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'lessons page has no sideways scroll at 390px');
await student.screenshot({path: `${OUT}/classroom-student-mobile.png`});
await teacher.setViewportSize({width: 390, height: 844});
await teacher.click('[data-tab=progress]');
await teacher.waitForSelector('.t-grid');
ok(await teacher.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'teacher dashboard has no sideways page scroll at 390px (grid scrolls inside its box)');
await teacher.screenshot({path: `${OUT}/classroom-teacher-mobile.png`, fullPage: true});

ok(errors.length === 0, `no page errors${errors.length ? ': ' + errors.join(' | ') : ''}`);
await browser.close();
const passed = checks.filter(c => c.pass).length;
writeFileSync(`${OUT}/classroom-browser-evidence.json`, JSON.stringify({date: new Date().toISOString(), mode: 'demo', base: BASE, passed, total: checks.length, checks}, null, 1));
console.log(`${passed}/${checks.length} classroom browser checks passed`);
process.exit(passed === checks.length ? 0 : 1);
