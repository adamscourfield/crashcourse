// Browser walk-through for Geometry batch 2: Pythagoras, trigonometry, transformations, constructions
// and loci, bearings. Card visuals, all five investigations with wrong paths, resume, plotted
// transformation images with trap feedback, column vectors, exact surd answers, Foundation mastery and
// check, Higher-only levels, 390px. Run: node maths-browser-flow-12.mjs <dir>
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
const lessonOf = async () => { const s = await mstate(); return s.lessons[s.lessonId]; };
const feedback = () => page.locator('#mFeedback').innerText();
const panel = () => page.locator('#mPanel').innerText();
// Continue may be hidden (unanswered question) or already auto-advanced; both are fine.
const cont = async () => { const b = page.locator('#mContinue'); if (await b.isVisible()) await b.click({ timeout: 2000 }).catch(() => {}); };
const shot = name => page.screenshot({ path: `${OUT}/${name}.png` });
const noOverflow = () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
const wait = ms => page.waitForTimeout(ms);
const surdRaw = a => `${a.a.n === 0 ? '' : `${a.a.n}/${a.a.d}+`}${a.b.n === 1 && a.b.d === 1 ? '' : a.b.n}√${a.r}${a.b.d > 1 ? '/' + a.b.d : ''}`;
async function typePoint(x, y) { await page.fill('[data-gx]', String(x)); await page.fill('[data-gy]', String(y)); await page.click('[data-gadd]'); }
async function enter(item) {
  const a = item.answer;
  if (a.kind === 'choice') return page.click(`[data-mchoice="${a.answer}"]`);
  if (a.kind === 'points') { for (const [x, y] of a.points) await typePoint(x, y); return page.click('#mSubmit'); }
  if (a.kind === 'fraction') { await page.fill('[data-mw]', ''); await page.fill('[data-mn]', String(a.value.n)); await page.fill('[data-md]', String(a.value.d)); return page.click('#mSubmit'); }
  const raw = a.kind === 'exact' ? surdRaw(a) : a.kind === 'integer' ? String(a.value) : a.dp != null ? (a.value.n / a.value.d).toFixed(a.dp) : String(+(a.value.n / a.value.d).toFixed(8));
  await page.fill('#mText', raw); return page.click('#mSubmit');
}
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }
async function readCards(id) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let i = 0; i < n; i++) await cont(); }
const short = id => id.split('.').pop();
const check = async (sel, val) => { await page.fill('#' + sel, val); await page.click(`[data-act="${sel}"]`); };
const clickN = async (sel, n) => { for (let i = 0; i < n; i++) await page.click(sel); };

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
await page.click('#mapButton');
await page.click('[data-mtopic="maths.geometry"]'); await page.click('#closeModal');
const GN = Number((await page.locator('#sideProgress').innerText()).split('/ ')[1]);
ok(GN >= 10 && (await page.locator('#sideProgress').innerText()) === `0 / ${GN}`, `Geometry has ${GN} lessons (batch 2 adds five); progress starts at 0`);
const G = ['maths.geometry.pythagoras', 'maths.geometry.trigonometry', 'maths.geometry.transformations', 'maths.geometry.constructions-loci', 'maths.geometry.bearings'];
for (const id of G) {
  await goLesson(id, 0);
  ok((await page.locator('#mCalc').textContent()) === (/transformations|constructions/.test(id) ? 'Non-calculator' : 'Calculator'), `${short(id)}: calculator badge`);
  const n = await page.locator('[data-mcard]').count();
  for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); const html = await page.locator('#mPanel .mviz-wrap').innerHTML(); ok(html.length > 60 && !/NaN|undefined/.test(html), `${short(id)} card ${c + 1} has a visual`); }
}
await goLesson('maths.geometry.transformations', 0); await page.click('[data-mcard="0"]'); ok((await page.locator('.mvec').count()) >= 1, 'column vector renders stacked in the teaching text'); await shot('p01-vector-card');
await goLesson('maths.geometry.trigonometry', 0); await page.click('[data-mcard="2"]'); await shot('p02-exact-values');

// ── 1. squares on the sides ──
await goLesson('maths.geometry.pythagoras', 1);
await check('sa', '7'); ok((await feedback()).includes('areas'), 'squares: adding sides caught');
await check('sa', '25'); await check('sd', '12.5'); ok((await feedback()).includes('Square root'), 'squares: halving the area caught');
await check('sd', '5');
await check('lh', '5.2'); ok((await feedback()).includes('subtract'), 'ladder: adding squares caught');
await page.fill('#lh', '4.8');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('#lh').inputValue()) === '4.8', 'reload keeps the ladder answer');
await page.click('[data-act="lh"]');
ok((await lessonOf()).widgetDone, 'pythagoras-squares investigation complete');

// ── 2. trig ratios ──
await goLesson('maths.geometry.trigonometry', 1);
await clickN('[data-h="2"]', 2); ok((await panel()).includes('8 cm') && (await panel()).includes('4 cm'), 'bigger 30° triangle: hypotenuse 8, opposite 4');
await check('sr', '2'); ok((await feedback()).includes('hypotenuse ÷ opposite'), 'ratio upside down caught');
await check('sr', '0.5');
await page.click('[data-tc="sin"]'); ok((await feedback()).includes('do not know the hypotenuse'), 'choose ratio: sin rejected with reason');
await page.click('[data-tc="tan"]');
await check('ce', '2'); ok((await feedback()).includes('1 ÷ 2'), 'cos 60: upside down caught');
await check('ce', '1/2');
ok((await lessonOf()).widgetDone, 'trig-ratios investigation complete');

// ── 3. transformation lab ──
await goLesson('maths.geometry.transformations', 1);
await clickN('[data-ta="-1"]', 4); await clickN('[data-tb="1"]', 3); await page.click('[data-act="tv"]'); ok((await feedback()).includes('swapped'), 'translation: swapped vector caught');
await clickN('[data-ta="1"]', 7); await clickN('[data-tb="-1"]', 7); await shot('p03-translate'); await page.click('[data-act="tv"]');
await page.click('[data-rt="acw"]'); ok((await feedback()).includes('clock hands'), 'rotation: anticlockwise rejected');
await page.click('[data-rt="cw"]');
await clickN('[data-ek="1"]', 2); await page.click('[data-act="ek"]'); ok((await feedback()).includes('too big'), 'enlargement: scale factor 3 rejected');
await page.click('[data-ek="-1"]'); await shot('p04-enlarge'); await page.click('[data-act="ek"]');
ok((await lessonOf()).widgetDone, 'transform-lab investigation complete');

// ── 4. loci ──
await goLesson('maths.geometry.constructions-loci', 1);
await page.click('[data-eq="Q"]'); ok((await feedback()).includes('from A but'), 'equidistant: wrong point shows both distances');
await page.click('[data-eq="P"]');
await page.click('[data-cr="1"]'); await page.click('[data-act="cr"]'); ok((await feedback()).includes('only touch'), 'compass: radius 3 only touches');
await page.click('[data-cr="1"]'); await page.click('[data-cr="1"]'); await page.click('[data-act="cr"]'); ok((await feedback()).includes('smaller'), 'compass: radius 5 not the smallest');
await page.click('[data-cr="-1"]'); await shot('p05-arcs'); await page.click('[data-act="cr"]');
await page.click('[data-rg="T"]'); ok((await feedback()).includes('nearer to A'), 'region: wrong side of bisector caught');
await page.click('[data-rg="S"]');
ok((await lessonOf()).widgetDone, 'locus-explorer investigation complete');

// ── 5. bearings ──
await goLesson('maths.geometry.bearings', 1);
await clickN('[data-bt="15"]', 3); await page.click('[data-act="bt"]'); ok((await feedback()).includes('from east'), 'bearing: 045 from east caught');
await clickN('[data-bt="15"]', 6); await shot('p06-bearing'); await page.click('[data-act="bt"]');
await check('bb', '225'); ok((await feedback()).includes('Add 180'), 'back bearing: 360 − b caught');
await check('bb', '315');
await check('eh', '11.5'); ok((await feedback()).includes('tan'), 'elevation: sin used caught');
await check('eh', '14.0');
ok((await lessonOf()).widgetDone, 'bearing-compass investigation complete');

// ── transformations practice: plotted images, traps, vectors ──
await readCards('maths.geometry.transformations'); await page.click('[data-mstage="2"]');
let s, it, sawTrap = false, sawPlot = false;
for (let g = 0; g < 50 && !(sawTrap && sawPlot); g++) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  it = L.practice.item; if (!it) break;
  if (it.answer.kind === 'points' && it.ptTraps?.length && !sawTrap) {
    for (const [x, y] of it.ptTraps[0].pts) await typePoint(x, y); await page.click('#mSubmit');
    ok((await feedback()).includes(it.ptTraps[0].why.slice(0, 25)), 'plotted trap image gets its explanation'); sawTrap = true; await cont(); continue;
  }
  if (it.answer.kind === 'points' && !sawPlot) { ok((await page.locator('[data-ginput] svg polygon, [data-ginput] svg polyline, [data-ginput] svg path').count()) > 0, 'object shape drawn on the answer grid'); await enter(it); ok((await feedback()).startsWith('Correct'), 'plotted image accepted'); sawPlot = true; await shot('p07-plot'); continue; }
  await enter(it);
}
ok(sawTrap && sawPlot, 'transformations practice exercised plotting and traps');

// ── trig practice: exact surds ──
await readCards('maths.geometry.trigonometry'); await page.click('[data-mstage="2"]');
let sawSurd = false;
for (let g = 0; g < 60 && !sawSurd; g++) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  it = L.practice.item; if (!it) break;
  if (it.answer.kind === 'exact') { await enter(it); ok((await feedback()).startsWith('Correct'), `exact surd answer ${surdRaw(it.answer)} accepted`); sawSurd = true; continue; }
  await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'trig practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
}
ok(sawSurd, 'trig practice reached an exact surd item');

// ── Foundation: Pythagoras to mastery and check ──
await readCards('maths.geometry.pythagoras'); await page.click('[data-mstage="2"]');
let guard = 0, answered = 0;
while (guard++ < 90) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
ok(answered >= 10, `Pythagoras lesson secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'Pythagoras lesson completes at 10/10');
await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === `1 / ${GN}`, 'Geometry topic progress 1 after one lesson');

// ── tiers ──
await goLesson('maths.geometry.transformations', 2);
ok(!/Negative scale factors/.test(await page.locator('#mBody').innerText()), 'Foundation: negative scale factors hidden');
await page.selectOption('#tier', 'Higher'); await wait(200);
await goLesson('maths.geometry.transformations', 2);
await page.click('.mrung >> nth=0');
ok(/5 levels|of 5/.test(await page.locator('#mBody').innerText()), 'Higher: transformation ladder has 5 levels');
await page.setViewportSize({ width: 390, height: 844 });
for (const id of G) for (const stg of [0, 1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${short(id)} stage ${stg + 1} has no overflow`); }
await goLesson('maths.geometry.transformations', 1); await shot('p08-phone-lab');
await page.setViewportSize({ width: 1280, height: 900 });
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-12.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
