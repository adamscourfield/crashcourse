// Browser walk-through for History (Edexcel 1HI0), batch 1: subject switch, course map, all four
// Elizabethan key topic 1 lessons through every stage, gate refusals, wrong answers, resume after
// reload, recall review, progress, 390px, and that Maths and Science still open.
// Run: node history-browser-flow-1.mjs <dir>
import { chromium } from 'playwright';
import sparticuz from '@sparticuz/chromium';
import fs from 'node:fs';

const OUT = process.argv[2] || '.';
const URL = 'http://localhost:4173/';
const KEY = 'crash-course-history-v1';
const log = [];
const ok = (cond, msg) => { log.push((cond ? 'PASS ' : 'FAIL ') + msg); if (!cond) console.error('FAIL', msg); };
const { lessons, units, topics } = await import('../dist/history/content.js');

const browser = await chromium.launch({ executablePath: await sparticuz.executablePath(), args: sparticuz.args, headless: true });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
const page = await ctx.newPage();
await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
const errors = [];
page.on('console', m => { if (m.type() === 'error' && !/fonts\.(googleapis|gstatic)\.com|ERR_FAILED/.test(m.text() + (m.location().url || ''))) errors.push(m.text()); });
page.on('pageerror', e => errors.push(String(e)));
const hstate = () => page.evaluate(k => JSON.parse(localStorage.getItem(k) || 'null'), KEY);
const fb = () => page.locator('#hFeedback').innerText();
const shot = n => page.screenshot({ path: `${OUT}/${n}.png` });
const noOverflow = () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
const cont = () => page.click('#hContinue');
const answerBtn = async (attr, idx) => page.click(`[${attr}="${idx}"]`);
const openL = async l => { await page.click('#mapButton'); await page.click(`[data-htopic="${l.topicId}"]`); await page.click(`[data-hlesson="${l.id}"]`); };

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
await page.selectOption('#subject', 'history'); await page.waitForSelector('#hTitle');
ok((await page.locator('#courseName').innerText()).includes('Edexcel GCSE History'), 'sidebar names Edexcel GCSE History');
ok((await page.locator('#studioLabel').innerText()) === 'History studio', 'studio label follows the subject');
ok((await page.locator('#progressBadge').innerText()) === `0 / ${lessons.length}`, `progress badge 0 / ${lessons.length}`);
await page.click('#mapButton');
const map = await page.locator('dialog').innerText();
ok(units.every(u => topics.some(t => t.unit === u.id) === map.includes(u.title)), 'course map lists exactly the built units');
await page.click('[data-htopic]'); ok((await page.locator('dialog [data-hlesson]').count()) === 4, 'key topic 1 lists four lessons');
await page.click('#closeModal'); await page.click('#mapButton'); ok((await page.locator('dialog [data-htopic]').count()) === new Set(lessons.map(l => l.topicId)).size, 'every built key topic is on the map'); await page.click('[data-htopic]');
await page.click(`[data-hlesson="${lessons[0].id}"]`);
await shot('h01-discover');

for (const [n, l] of lessons.entries()) {
  const tag = l.id.split('.').pop();
  if (n > 0) await openL(l);
  ok((await page.locator('#historyContent .intro h1').innerText()) === l.title, `${tag}: opens`);
  // Discover: every card.
  for (let i = 0; i < l.cards.length; i++) await cont();
  let s = await hstate();
  ok(s.lessons[l.id].stage === 1 && s.lessons[l.id].seen.length === l.cards.length, `${tag}: all cards read, moved to Investigate`);
  // Investigate: wrong answer refused, unopened views refused.
  for (let i = 0; i < l.tasks.length; i++) {
    const t = l.tasks[i];
    if (i === 0) { await answerBtn('data-htask', (t[2] + 1) % t[1].length); ok((await fb()).startsWith('Not quite'), `${tag}: wrong challenge answer refused`); await cont(); ok((await fb()).includes('Answer this challenge first'), `${tag}: cannot skip a challenge`); }
    await answerBtn('data-htask', t[2]); ok((await fb()).startsWith('Correct'), `${tag}: challenge ${i + 1} accepted`);
    if (i === l.tasks.length - 1 && n === 0) { await cont(); ok((await fb()).includes('Open every view'), `${tag}: every view must be opened`); }
    if (i < l.tasks.length - 1) await cont();
  }
  for (let v = 0; v < l.views.length; v++) await page.click(`[data-hview="${v}"]`);
  if (n === 0) {
    await page.click('[data-hview="2"]'); await shot('h02-investigate');
    await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#hTitle');
    s = await hstate();
    ok(s.lessons[l.id].stage === 1 && s.lessons[l.id].observed.length === l.views.length && (await page.locator('[data-hview="2"]').getAttribute('aria-pressed')) === 'true', 'reload resumes Investigate with the chosen view and views explored');
  }
  await cont();
  s = await hstate(); ok(s.lessons[l.id].stage === 2, `${tag}: moved to Practise`);
  // Practise: one wrong attempt, then the right one, each item.
  for (let i = 0; i < l.practice.length; i++) {
    const q = l.practice[i];
    if (i === 0) { await answerBtn('data-hanswer', (q.answer + 1) % q.options.length); ok((await fb()).startsWith('Try again'), `${tag}: wrong practice answer flagged`); }
    await answerBtn('data-hanswer', q.answer); ok((await fb()).startsWith('Correct'), `${tag}: practice ${i + 1} correct`);
    if (n === 0 && i === 0) await shot('h03-practice');
    await cont();
  }
  // Check: in lesson 4, miss two questions (8 checks: 6/8 = 75%) to see the gate hold, then retake.
  const miss = n === 3 ? 2 : 0;
  for (let i = 0; i < l.check.length; i++) { const q = l.check[i]; await answerBtn('data-hanswer', i < miss ? (q.answer + 1) % q.options.length : q.answer); await cont(); }
  await page.waitForSelector('dialog[open]');
  const res = await page.locator('dialog').innerText();
  if (miss) {
    ok(/75% · Keep building/.test(res), `${tag}: 75% does not complete the lesson`);
    await page.click('#hRetake');
    for (const q of l.check) { await answerBtn('data-hanswer', q.answer); await cont(); }
    await page.waitForSelector('dialog[open]');
    ok(/100% · Lesson complete/.test(await page.locator('dialog').innerText()), `${tag}: retake completes at 100%`);
  } else ok(/100% · Lesson complete/.test(res), `${tag}: completes at 100%`);
  if (n === 0) await shot('h04-results');
  await page.click('#closeModal');
}
ok((await page.locator('#progressBadge').innerText()) === `${lessons.length} / ${lessons.length}`, 'progress badge shows every lesson complete');

// Recall review: the two missed check concepts in lesson 4 are due.
await page.click('#reviewButton');
const rv = await hstate();
ok(rv.review && rv.review.ids.length >= 1, `recall review starts with ${rv.review?.ids.length} due concept(s)`);
const firstId = rv.review.ids[0], fq = lessons.flatMap(l => [...l.practice, ...l.check]).find(q => q.id === firstId);
await answerBtn('data-hanswer', fq.answer); ok((await fb()).startsWith('Correct'), 'review answer marked');
await shot('h05-review');

await page.click('#progressButton'); ok(/History/.test(await page.locator('dialog').innerText()), 'progress dashboard opens for History'); await page.click('#closeModal');
await page.setViewportSize({ width: 390, height: 844 });
await openL(lessons[1]);
for (const st of [0, 1, 2, 3]) { await page.click(`[data-hstage="${st}"]`); ok(await noOverflow(), `390px: stage ${st + 1} has no overflow`); }
await page.click('[data-hstage="1"]'); await shot('h06-mobile');
await page.setViewportSize({ width: 1280, height: 900 });
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1'); ok(await page.locator('#historyContent').isHidden(), 'switching to Maths hides History');
await page.selectOption('#subject', 'science'); await page.waitForTimeout(300); ok(await page.locator('#scienceContent').isVisible(), 'Science still opens');
await page.selectOption('#subject', 'history'); await page.waitForSelector('#hTitle'); ok((await page.locator('#progressBadge').innerText()) === `${lessons.length} / ${lessons.length}`, 'History progress kept after switching subjects');
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/history-browser-log-1.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
