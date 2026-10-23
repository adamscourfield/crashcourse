// Browser walk-through for the Geometry and Algebra gap-closing batch: three-letter angle notation in
// the angles lesson (reached in practice, wrong option explained, check items answered), the new
// spheres-cones lesson (cards, investigation with wrong paths and resume, exact-π answers and a
// π trap, Foundation mastery and check without frustums, Higher check with a frustum), and the
// Higher trig-graph transformation level in the non-linear graphs check. Run: node maths-browser-flow-16.mjs <dir>
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
await page.click('#mapButton'); await page.click('[data-mtopic="maths.geometry"]'); await page.click('#closeModal');
const GN = Number((await page.locator('#sideProgress').innerText()).split('/ ')[1]);
ok(GN === 14, `Foundation: Geometry has ${GN} lessons (16 at Higher; two Higher-only)`);
ok((await listed('maths.geometry.spheres-cones')) === 1, 'Foundation: spheres and cones lesson listed');

// ── G1: angle notation in the angles lesson ──
ok((await cards('maths.geometry.angles')) === 4, 'angles lesson has a fourth card on three-letter notation');
await page.click('[data-mcard="3"]'); await shot('g01-notation-card');
await readCards('maths.geometry.angles'); await page.click('[data-mstage="2"]');
ok((await page.locator('.mrung').count()) === 4, 'angles practice: three skills and a mixed round');
let s, it, sawN = false;
for (let g = 0; g < 90 && !sawN; g++) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  it = L.practice.item; if (!it) break;
  if (it.skill === 'maths.geometry.angle-notation') {
    sawN = true; ok((await page.locator('#mBody .mfig svg').count()) === 1, 'notation item draws the lettered shape'); await shot('g02-notation-practice');
    const wrong = (it.answer.answer + 1) % it.answer.options.length; await page.click(`[data-mchoice="${wrong}"]`);
    ok((await feedback()).includes(it.optionWhy[wrong].slice(0, 30)), 'wrong angle name explained: ' + it.optionWhy[wrong].slice(0, 50));
    break;
  }
  await enter(it);
}
ok(sawN, 'angles practice reaches the notation skill');
// Check: answer the three notation items after jumping to each.
await page.click('[data-mstage="3"]'); await cont();
s = await mstate(); const AC = s.lessons[s.lessonId].check;
ok(AC && AC.items.filter(x => x.skill === 'maths.geometry.angle-notation').length === 3, 'angles check includes three notation items');
for (let k = 0; k < 3; k++) {
  const done0 = (await lessonOf()).check.answers;
  const target = await jumpCheck(x => x.skill === 'maths.geometry.angle-notation' && !(x.id in done0));
  if (!target) break;
  await enter(target); await wait(100);
  ok(await recordedOk(target), `notation check item level ${target.level} marked correct after reload`);
}

// ── G17: spheres, cones and composite solids ──
ok((await cards('maths.geometry.spheres-cones')) === 4, 'spheres-cones lesson has four cards');
await page.click('[data-mcard="3"]'); await shot('g03-frustum-card');
await goLesson('maths.geometry.spheres-cones', 1);
await check('hs', '50'); ok((await feedback()).includes('flat circular face'), 'hemisphere: curved surface only caught');
await check('hs', '100'); ok((await feedback()).includes('whole sphere'), 'hemisphere: whole sphere caught');
await page.click('[data-hshow]'); ok((await page.locator('#mPanel').innerText()).includes('flat face: π × 5² = 25π'), 'taking the hemisphere apart shows both faces');
await page.fill('#hs', '75π');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('#hs').inputValue()) === '75π' && (await page.locator('#mPanel').innerText()).includes('25π'), 'reload keeps the typed answer and the opened faces');
await page.click('[data-act="hs"]');
await check('cl', '14'); ok((await feedback()).includes('Pythagoras'), 'slant height: adding the lengths caught');
await check('cl', '100'); ok((await feedback()).includes('square root'), 'slant height: l² given caught');
await check('cl', '10'); await shot('g04-cone');
await check('cs', '48'); ok((await feedback()).includes('slant height'), 'cone: vertical height used caught');
await check('cs', '60');
await check('cv', '126'); ok((await feedback()).includes('half a sphere'), 'composite: whole sphere added caught');
await check('cv', '108');
ok((await lessonOf()).widgetDone, 'solid-builder investigation complete');

await readCards('maths.geometry.spheres-cones'); await page.click('[data-mstage="2"]');
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
ok(it.skill === 'maths.geometry.sphere-cone-area', 'practice starts with surface areas');
if (it.answer.kind === 'exact' && it.exTraps?.length) { await page.fill('#mText', `${it.exTraps[0].b.n}π`); await page.click('#mSubmit'); ok((await feedback()).includes(it.exTraps[0].why.slice(0, 25)), 'exact-π trap explained: ' + it.exTraps[0].why.slice(0, 40)); await cont(); }
else if (it.traps?.length) { await page.fill('#mText', String(it.traps[0].v.n / it.traps[0].v.d)); await page.click('#mSubmit'); ok((await feedback()).includes(it.traps[0].why.slice(0, 25)), 'decimal trap explained: ' + it.traps[0].why.slice(0, 40)); await cont(); }
let guard = 0, answered = 0, sawPi = false, sawFrustum = false;
while (guard++ < 120) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  if (it.answer.kind === 'exact' && !sawPi) { sawPi = true; await shot('g05-exact'); }
  if (/frustum/.test(it.prompt)) sawFrustum = true;
  await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
  answered++;
}
ok(sawPi, 'an answer in terms of π was typed and accepted');
ok(!sawFrustum, 'Foundation practice has no frustums');
ok(answered >= 8, `spheres-cones secured after ${answered} correct answers`);
await cont(); await cont();
s = await mstate(); ok(!s.lessons[s.lessonId].check.items.some(x => /frustum/.test(x.prompt)), 'Foundation check has no frustum');
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'spheres-cones lesson completes at 10/10');
await page.click('#closeModal');

// ── Higher: frustum in the check; trig-graph transformation ──
await page.selectOption('#tier', 'Higher'); await wait(200);
await goLesson('maths.geometry.spheres-cones', 3); await page.click('#mContinue');
s = await mstate(); const HC = s.lessons[s.lessonId].check;
ok(HC.items.some(x => /frustum/.test(x.prompt)), 'Higher check includes a frustum');
const fr = await jumpCheck(x => /frustum/.test(x.prompt));
ok((await page.locator('#mBody .mfig svg').count()) === 1, 'frustum drawn'); await shot('g06-frustum');
await enter(fr); await wait(100); ok(await recordedOk(fr), 'frustum volume recorded and correct');

await page.click('#mapButton'); await page.click('[data-mtopic="maths.algebra"]'); await page.click('#closeModal');
await goLesson('maths.algebra.nonlinear-graphs', 3); await page.click('#mContinue');
const tg = await jumpCheck(x => x.skill === 'maths.algebra.graph-transform' && x.level === 3);
ok(!!tg, 'Higher non-linear graphs check includes a trig-graph transformation');
if (tg) {
  if (tg.graph) ok((await page.locator('#mBody svg').count()) >= 1, 'transformed trig curve drawn'); await shot('g07-trig');
  await enter(tg); await wait(100); ok(await recordedOk(tg), 'trig transformation answer recorded and correct');
}

await page.click('#mapButton'); await page.click('[data-mtopic="maths.geometry"]'); await page.click('#closeModal');
await page.setViewportSize({ width: 390, height: 844 });
for (const [id, stg] of [['maths.geometry.angles', 0], ['maths.geometry.spheres-cones', 0], ['maths.geometry.spheres-cones', 1], ['maths.geometry.spheres-cones', 2]]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${id.split('.').pop()} stage ${stg + 1} has no overflow`); }
await page.setViewportSize({ width: 1280, height: 900 });
fs.writeFileSync(`${OUT}/maths-browser-log-16.txt`, log.join('\n'));
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-16.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
