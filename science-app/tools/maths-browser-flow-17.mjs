// Browser walk-through for Problem solving: course map, cards, the four planner investigations (wrong
// plans, wrong stage values with stage feedback, resume), stage-trap feedback in practice, Foundation
// mastery and check, tier split of Higher levels, 390px. Run: node maths-browser-flow-17.mjs <dir>
import { chromium } from 'playwright';
import sparticuz from '@sparticuz/chromium';
import fs from 'node:fs';

const OUT = process.argv[2] || '.';
const URL = 'http://localhost:4173/';
const KEY = 'crash-course-maths-v1';
const log = [];
const ok = (cond, msg) => { log.push((cond ? 'PASS ' : 'FAIL ') + msg); if (!cond) console.error('FAIL', msg); };

const browser = await chromium.launch({ executablePath: await sparticuz.executablePath(), args: sparticuz.args, headless: true });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
const page = await ctx.newPage();
await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
const errors = [];
page.on('console', m => { if (m.type() === 'error' && !/fonts\.(googleapis|gstatic)\.com/.test(m.location().url || '')) errors.push(m.text() + ' @ ' + (m.location().url || '?')); });
page.on('pageerror', e => errors.push(String(e)));

const mstate = () => page.evaluate(k => JSON.parse(localStorage.getItem(k) || 'null'), KEY);
const putState = s => page.evaluate(([k, v]) => localStorage.setItem(k, JSON.stringify(v)), [KEY, s]);
const lessonOf = async () => { const s = await mstate(); return s.lessons[s.lessonId]; };
const feedback = () => page.locator('#mFeedback').innerText();
const cont = async () => { const b = page.locator('#mContinue'); if (await b.isVisible()) await b.click({ timeout: 2000 }).catch(() => {}); };
const shot = name => page.screenshot({ path: `${OUT}/${name}.png` });
const noOverflow = () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
const wait = ms => page.waitForTimeout(ms);
// Check answers are stored raw; mark them with the app's own marker.
const recordedOk = async item => { const v = (await lessonOf()).check.answers[item.id]; return v !== undefined && (await page.evaluate(async ([a, v]) => (await import('/maths/answers.js')).mark(a, v).status, [item.answer, v])) === 'correct'; };
const rawFor = a => a.kind === 'integer' ? String(a.value) : a.kind === 'exact' ? `${a.b.n}${a.b.d > 1 ? '/' + a.b.d : ''}π` : a.dp != null ? (a.value.n / a.value.d).toFixed(a.dp) : String(+(a.value.n / a.value.d).toFixed(8));
async function enter(item) {
  const a = item.answer;
  if (a.kind === 'choice') return page.click(`[data-mchoice="${a.answer}"]`);
  if (a.kind === 'solutions') { for (let r = 0; r < a.sols.length; r++) for (let i = 0; i < a.vars.length; i++) await page.fill(`[data-sol="${r},${i}"]`, String(a.sols[r][i].n / a.sols[r][i].d)); return page.click('#mSubmit'); }
  await page.fill('#mText', rawFor(a)); return page.click('#mSubmit');
}
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }
async function readCards(id) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let i = 0; i < n; i++) await cont(); }
const check = async (sel, val) => { await page.fill('#' + sel, val); await page.click(`[data-act="${sel}"]`); };
const listed = async id => { await page.click('#lessonNav'); const n = await page.locator(`[data-mlesson="${id}"]`).count(); await page.keyboard.press('Escape'); return n; };
const cards = async id => { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); const html = await page.locator('#mPanel .mviz-wrap').innerHTML(); ok(html.length > 60 && !/NaN|undefined/.test(html), `${id.split('.').pop()} card ${c + 1} has a visual`); } return n; };
// Jump a running check to the first item matching `pred` (resume path: the state is saved, the page reloaded).
async function jumpCheck(pred) {
  const s = await mstate(), c = s.lessons[s.lessonId].check, idx = c.items.findIndex(pred);
  if (idx < 0) return null;
  c.index = idx; await putState(s); await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
  return c.items[idx];
}


await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
await page.click('#mapButton');
ok(/Problem solving/.test(await page.locator('dialog').innerText()), 'course map links Problem solving');
await page.click('[data-mtopic="maths.problems"]'); await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === '0 / 4', 'Problem solving has 4 lessons at Foundation');
const L4 = ['maths.problems.area-volume', 'maths.problems.money', 'maths.problems.equations', 'maths.problems.data-chance'];
for (const id of L4) ok((await cards(id)) === 3, `${id.split('.').pop()} has three cards`);
await goLesson('maths.problems.area-volume', 0); await page.click('[data-mcard="0"]'); await shot('p01-card');

// ── the four planners: a wrong plan, wrong values with stage feedback, resume, finish ──
const PLAN = {
  'maths.problems.area-volume': { bad: 'tins', badMsg: 'door is not painted', b: [['12.5', 'whole wall'], ['10.7']], c: [['36.11', 'round up to 3'], ['3', 'number of tins'], ['40.50']] },
  'maths.problems.money': { bad: 'pct', badMsg: 'not of the total', b: [['90', "Ali's share"], ['150']], c: [['45', 'amount she spends'], ['105']] },
  'maths.problems.equations': { bad: 'right', badMsg: 'right-angled', b: [['25', 'add 30'], ['35']], c: [['35', 'That is x'], ['75']] },
  'maths.problems.data-chance': { bad: 'prize', badMsg: 'Only about', b: [['160', 'lose'], ['40']], c: [['160', 'prize money'], ['40']] },
};
let first = true;
for (const id of L4) {
  const P = PLAN[id], tag = id.split('.').pop();
  await goLesson(id, 1);
  await page.click(`[data-plan="${P.bad}"]`); ok((await feedback()).includes(P.badMsg), `${tag}: wrong plan explained`);
  await page.click('[data-plan]:first-child');
  for (const [v, msg] of P.b) { await check('pb', v); if (msg) ok((await feedback()).includes(msg), `${tag}: first-stage wrong value ${v} explained`); }
  if (first) {
    await page.fill('#pc', '99');
    await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
    ok((await page.locator('#pc').inputValue()) === '99' && /FINISH/.test(await page.locator('#mPanel').innerText()), 'reload keeps the stage and the typed answer');
    first = false;
  }
  for (const [v, msg] of P.c) { await check('pc', v); if (msg) ok((await feedback()).includes(msg), `${tag}: final-stage wrong value ${v} explained`); }
  ok((await lessonOf()).widgetDone, `${tag} investigation complete`);
  if (tag === 'area-volume') await shot('p02-planner-done');
}

// ── practice: a stage trap names the stage ──
await readCards('maths.problems.area-volume'); await page.click('[data-mstage="2"]');
let s = await mstate(), it = s.lessons[s.lessonId].practice.item;
ok(!!it.fig && (await page.locator('#mBody .mfig svg').count()) === 1, 'problem practice draws its diagram'); await shot('p03-practice');
const t0 = it.traps[0]; await page.fill('#mText', String(+(t0.v.n / t0.v.d).toFixed(4))); await page.click('#mSubmit');
ok((await feedback()).includes(t0.why.slice(0, 25)), 'stopped-early answer gets stage feedback: ' + t0.why.slice(0, 50));

// ── Foundation: the averages and probability problems lesson to mastery and check ──
await readCards('maths.problems.data-chance'); await page.click('[data-mstage="2"]');
let guard = 0, answered = 0;
while (guard++ < 120) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item; await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
  answered++;
}
ok(answered >= 8, `data-chance secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'data-chance completes at 10/10');
await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === '1 / 4', 'Problem solving progress 1 / 4');

// ── Foundation money check has no "how many years"; Higher has one ──
await goLesson('maths.problems.money', 3); await page.click('#mContinue');
s = await mstate(); ok(!s.lessons[s.lessonId].check.items.some(x => /how many whole years/.test(x.prompt)), 'Foundation money check: no Higher depreciation item');
await page.selectOption('#tier', 'Higher'); await wait(200);
await page.click('#mapButton'); await page.click('[data-mtopic="maths.problems"]'); await page.click('#closeModal');
await goLesson('maths.problems.equations', 3); await page.click('#mContinue');
const q = await jumpCheck(x => x.skill === 'maths.problems.word-equations' && x.level === 3);
ok(!!q, 'Higher equations check includes the quadratic area problem');
if (q) { await enter(q); await wait(100); ok(await recordedOk(q), 'quadratic problem answer recorded and correct'); }

await page.setViewportSize({ width: 390, height: 844 });
for (const id of L4) for (const stg of [0, 1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${id.split('.').pop()} stage ${stg + 1} has no overflow`); }
await page.setViewportSize({ width: 1280, height: 900 });
fs.writeFileSync(`${OUT}/maths-browser-log-17.txt`, log.join('\n'));
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-17.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
