// Browser walk-through for the graphs lessons: the plotting input (tapping the grid and the keyboard
// form), all five investigations with wrong paths, graph figures in practice, plotted-line diagnosis,
// a lesson practised to mastery and checked, tier split, reload of a part-plotted answer, 390px.
// Setup and serving as in maths-browser-flow.mjs. Run: node maths-browser-flow-6.mjs <screenshotDir>
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
// Continue may be hidden (unanswered question) or already auto-advanced; both are fine.
const cont = async () => { const b = page.locator('#mContinue'); if (await b.isVisible()) await b.click({ timeout: 2000 }).catch(() => {}); };
const shot = name => page.screenshot({ path: `${OUT}/${name}.png` });
const noOverflow = () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
const wait = ms => page.waitForTimeout(ms);
const fval = v => (v.d === 1 ? String(v.n) : `${v.n}/${v.d}`);

/** Tap the live grid at data coordinates (x, y) using the renderer's own layout constants. */
async function tap(x, y, grid) {
  const pos = await page.evaluate(({ x, y, g }) => {
    const svg = document.querySelector('[data-ginput] svg'); svg.scrollIntoView({ block: 'center' });
    const GL = 54, GR = 584, GT = 14, xs = g.xstep || 1, ys = g.ystep || 1;
    const H0 = g.height || (xs === ys ? Math.max(240, Math.min(440, ((g.yr[1] - g.yr[0]) / (g.xr[1] - g.xr[0])) * (GR - GL))) : 300), GB = GT + H0;
    const p = svg.createSVGPoint(); p.x = GL + ((x - g.xr[0]) / (g.xr[1] - g.xr[0])) * (GR - GL); p.y = GB - ((y - g.yr[0]) / (g.yr[1] - g.yr[0])) * (GB - GT);
    const q = p.matrixTransform(svg.getScreenCTM()); return { x: q.x, y: q.y };
  }, { x, y, g: grid });
  await page.mouse.click(pos.x, pos.y);
}
async function typePoint(x, y) { await page.fill('[data-gx]', String(x)); await page.fill('[data-gy]', String(y)); await page.click('[data-gadd]'); }
function linePoints(a) {
  const m = a.m.n / a.m.d, c = a.c.n / a.c.d, out = [];
  for (let x = a.grid.xr[0]; x <= a.grid.xr[1] && out.length < 2; x++) { const y = m * x + c; if (Number.isInteger(y) && y >= a.grid.yr[0] && y <= a.grid.yr[1]) out.push([x, y]); }
  return out;
}
async function enter(item) {
  const a = item.answer;
  if (a.kind === 'choice') return page.click(`[data-mchoice="${a.answer}"]`);
  if (a.kind === 'points' || a.kind === 'line') { for (const [x, y] of a.kind === 'points' ? a.points : linePoints(a)) await typePoint(x, y); return page.click('#mSubmit'); }
  if (a.kind === 'solutions') { for (let r = 0; r < a.sols.length; r++) for (let i = 0; i < a.vars.length; i++) await page.fill(`[data-sol="${r},${i}"]`, a.dp != null ? (a.sols[r][i].n / a.sols[r][i].d).toFixed(a.dp) : fval(a.sols[r][i])); return page.click('#mSubmit'); }
  if (a.kind === 'fraction') { const neg = a.value.n < 0, on = await page.locator('[data-msign]').evaluate(e => e.classList.contains('on')); if (on !== neg) await page.click('[data-msign]'); await page.fill('[data-mw]', a.value.d === 1 ? String(Math.abs(a.value.n)) : ''); await page.fill('[data-mn]', a.value.d === 1 ? '' : String(Math.abs(a.value.n))); await page.fill('[data-md]', a.value.d === 1 ? '' : String(a.value.d)); return page.click('#mSubmit'); }
  const raw = a.kind === 'algebra' ? (a.subject ? `${a.subject} = ${a.expr}` : a.expr) : a.kind === 'integer' ? (a.var ? `${a.var} = ${a.value}` : String(a.value)) : String(a.value.n / a.value.d);
  await page.fill('#mText', raw); return page.click('#mSubmit');
}
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }
async function goTopic(id) { await page.click('#mapButton'); await page.click(`[data-mtopic="${id}"]`); await page.click('#closeModal'); }
async function readCards(id) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let i = 0; i < n; i++) await cont(); }

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
const sciBefore = await page.evaluate(() => localStorage.getItem('crash-course-v2'));
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
await page.click('#mapButton');
ok(/Algebra/.test(await page.locator('dialog').innerText()), 'course map links Algebra');
await page.click('[data-mtopic="maths.algebra"]'); await page.click('#closeModal');
const G = ['maths.algebra.coordinates-lines', 'maths.algebra.line-equations', 'maths.algebra.nonlinear-graphs', 'maths.algebra.graphical-solutions', 'maths.algebra.real-life-graphs'];
for (const id of G) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); ok((await page.locator('#mPanel .mviz-wrap svg').count()) >= 1, `${id.split('.').pop()} card ${c + 1} draws a graph`); } }
await goLesson('maths.algebra.nonlinear-graphs', 0); await page.click('[data-mcard="2"]'); await shot('d01-trig-card');

// ── 1. table → plot → m and c ──
await goLesson('maths.algebra.coordinates-lines', 1);
for (const [i, v] of ['-1', '1', '3', '5', '7'].entries()) await page.fill(`[data-ty="${i}"]`, v);
await page.click('[data-act="table"]'); ok((await feedback()).includes('Subtract 1'), 'table: adding instead of subtracting caught');
for (const [i, v] of ['-3', '-1', '1', '3', '5'].entries()) await page.fill(`[data-ty="${i}"]`, String(2 * (i - 1) - 1));
await page.click('[data-act="table"]');
const LB = { xr: [-3, 4], yr: [-5, 7] };
for (const [x, y] of [[-1, -3], [0, -1], [1, 1], [2, 3]]) await typePoint(x, y);
await page.click('[data-act="plot"]'); ok((await feedback()).includes('1 point missing'), 'plot: missing point counted');
await tap(3, 5, LB);
ok((await lessonOf()).widget.tbl.plot.split(';').includes('3,5'), 'tapping the grid plots (3, 5)');
await shot('d02-tap-plot');
await page.click('[data-act="plot"]');
for (let i = 0; i < 3; i++) await page.click('[data-gc="1"]');
await page.click('[data-act="mc"]'); ok((await feedback()).includes('c is right'), 'm and c: intercept right, gradient explained');
for (let i = 0; i < 3; i++) await page.click('[data-gm="-1"]');
await page.click('[data-act="mc"]');
ok((await lessonOf()).widgetDone, 'line-builder investigation complete');

// ── 2. gradient triangles and parallel lines ──
await goLesson('maths.algebra.line-equations', 1);
await page.fill('#rise', '2'); await page.fill('#run', '3'); await page.click('[data-act="tri"]'); ok((await feedback()).includes('vertical side'), 'gradient: rise and run swapped caught');
await page.fill('#rise', '3'); await page.fill('#run', '2'); await page.click('[data-act="tri"]'); await wait(1200);
await page.fill('#rise', '2'); await page.fill('#run', '4'); await page.click('[data-act="tri"]'); ok((await feedback()).includes('negative'), 'gradient: sign of a falling line caught');
await page.fill('#rise', '-2'); await page.click('[data-act="tri"]'); await wait(1200);
for (const i of [0, 1, 3]) await page.click(`[data-par="${i}"]`);
await page.click('[data-act="par"]'); ok((await feedback()).includes('slopes the other way'), 'parallel: negative gradient rejected');
await page.click('[data-par="3"]'); await page.click('[data-act="par"]'); ok((await feedback()).includes('Rearrange 2y = 6x + 5'), 'parallel: rearranged line prompted');
await page.click('[data-par="2"]'); await page.click('[data-act="par"]');
ok((await lessonOf()).widgetDone, 'gradient investigation complete');

// ── 3. shapes and a plotted quadratic ──
await goLesson('maths.algebra.nonlinear-graphs', 1);
for (let i = 0; i < 4; i++) await page.click(`[data-gal="${i},${i}"]`);
await page.click('[data-act="gal"]'); ok((await feedback()).includes('does not match'), 'gallery: mismatches explained');
await shot('d03-gallery');
for (const [i, j] of [[0, 2], [1, 0], [2, 3], [3, 1]]) await page.click(`[data-gal="${i},${j}"]`);
await page.click('[data-act="gal"]');
await typePoint(-3, -13); await page.click('[data-act="qplot"]'); ok((await feedback()).includes('positive'), 'quadratic plot: negative squared caught');
await page.click('[data-gclear]');
for (let x = -3; x <= 3; x++) await typePoint(x, x * x - 4);
await page.click('[data-act="qplot"]');
ok((await lessonOf()).widgetDone, 'curve-gallery investigation complete');

// ── 4. horizontal line meets curve ──
await goLesson('maths.algebra.graphical-solutions', 1);
await page.click('[data-act="k"]'); await wait(1100);
for (let i = 0; i < 4; i++) await page.click('[data-k="-1"]');
await page.click('[data-act="k"]'); ok((await feedback()).includes('twice'), 'k = 0 gives two solutions, not one');
await page.click('[data-k="-1"]'); await page.click('[data-act="k"]'); await wait(1100);
await page.click('[data-k="-1"]'); await page.click('[data-act="k"]'); await wait(1100);
await page.fill('#ra', '3'); await page.fill('#rb', '1'); await page.click('[data-act="rd"]'); ok((await feedback()).includes('One is right'), 'read-off: one right, other missing');
await page.fill('#rb', '-1'); await page.click('[data-act="rd"]');
ok((await lessonOf()).widgetDone, 'line-meets-curve investigation complete');

// ── 5. journey story to graph ──
await goLesson('maths.algebra.real-life-graphs', 1);
for (const [x, y] of [[0, 0], [30, 2], [45, 0]]) await typePoint(x, y);
await page.click('[data-act="jplot"]'); ok((await feedback()).includes('stays at 2 km'), 'journey: rest drawn as returning home is corrected');
await page.click('[data-gdel="2"]');
const JG = { xr: [0, 105], yr: [0, 3], xstep: 15, ystep: 0.5, height: 260 };
await tap(45, 2, JG); await tap(90, 0, JG);
await page.click('[data-act="jplot"]');
ok((await lessonOf()).widget.jr.plotOK, 'journey: tapped points complete the graph' + ((await lessonOf()).widget.jr.plotOK ? '' : ` (plotted ${(await lessonOf()).widget.jr.plot}; ${await feedback()})`));
await page.click('[data-sp="1"]'); ok((await feedback()).includes('0.75 hours'), 'journey speed: per-minute answer corrected');
await shot('d04-journey');
await page.click('[data-sp="0"]');
ok((await lessonOf()).widgetDone, 'journey investigation complete');

// ── practice: plotted answers and diagnosis, then a full lesson ──
await readCards('maths.algebra.coordinates-lines'); await page.click('[data-mstage="2"]');
let s = await mstate(), it = s.lessons[s.lessonId].practice.item;
ok(it.answer.kind === 'solutions' && (await page.locator('.mfig svg').count()) === 1, 'reading coordinates shows the graph above the answer');
let guard = 0, answered = 0, sawLine = false, sawPoints = false;
while (guard++ < 80) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  if (it.answer.kind === 'points' && !sawPoints) {
    sawPoints = true;
    await typePoint(it.answer.points[0][0], it.answer.points[0][1]);
    await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
    ok((await page.locator('.mgraph-list li').count()) === 1, 'reload keeps a part-plotted answer');
    await page.click('[data-gclear]');
  }
  if (it.answer.kind === 'line' && !sawLine) {
    sawLine = true;
    const [[x1, y1], [x2, y2]] = linePoints(it.answer);
    await typePoint(x1, y1 + 1); await typePoint(x2, y2 + 1); await page.click('#mSubmit');
    ok((await feedback()).includes('right gradient'), 'plotted line: right gradient, wrong intercept diagnosed');
    await shot('d05-line-diagnosis');
    await cont(); continue;
  }
  await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
ok(sawLine && sawPoints, 'practice included plotted points and plotted lines');
ok(answered >= 16, `coordinates and lines secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'coordinates and lines lesson completes at 10/10');
await page.click('#closeModal');

// ── graph figures in other practice; tiers ──
await goLesson('maths.algebra.graphical-solutions', 2);
ok((await page.locator('.mfig svg').count()) === 1, 'graphical solutions: graph shown with the question');
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
await enter(it); ok((await feedback()).startsWith('Correct'), 'reading a solution from a graph accepted');
await goLesson('maths.algebra.nonlinear-graphs', 2);
ok((await page.locator('.mrung').count()) === 4, 'Foundation: three non-linear graph skills plus mixed (transformations hidden)');
await goLesson('maths.algebra.real-life-graphs', 2);
ok((await page.locator('.mrung').count()) === 1, 'Foundation: real-life graphs only (gradients/areas and circles hidden)');
await page.selectOption('#tier', 'Higher'); await wait(200);
await goLesson('maths.algebra.real-life-graphs', 2);
ok((await page.locator('.mrung').count()) === 4, 'Higher: gradients/areas and circles appear');
await goLesson('maths.algebra.nonlinear-graphs', 2);
ok((await page.locator('.mrung').count()) === 5, 'Higher: transformations appear');
await page.selectOption('#tier', 'Foundation'); await wait(200);

await goTopic('maths.number');
ok((await page.locator('#sideProgress').innerText()) === '0 / 15', 'Number progress unaffected');
await goTopic('maths.algebra');
await page.selectOption('#subject', 'science'); await wait(300);
ok((await page.evaluate(() => localStorage.getItem('crash-course-v2'))) === sciBefore || sciBefore === null, 'science storage unchanged');
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');

// ── phone ──
await page.setViewportSize({ width: 390, height: 844 });
for (const id of G) for (const stg of [1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${id.split('.').pop()} stage ${stg + 1} has no overflow`); }
await goLesson('maths.algebra.coordinates-lines', 2); await shot('d06-phone-plot');
await page.setViewportSize({ width: 1280, height: 900 });

ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-6.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
