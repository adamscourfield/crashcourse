// Browser walk-through for Geometry batch 1: angles, polygons, area, circles, volume. Course map and
// topic switch, every card visual, calculator badges, all five investigations with wrong paths,
// resume, question figures, exact-π answers and trap feedback in practice, Foundation mastery and
// check, Higher listing, 390px. Run: node maths-browser-flow-11.mjs <dir>
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
const piRaw = a => `${a.b.n === 1 && a.b.d === 1 ? '' : a.b.n}π${a.b.d > 1 ? '/' + a.b.d : ''}`;
async function enter(item) {
  const a = item.answer;
  if (a.kind === 'choice') return page.click(`[data-mchoice="${a.answer}"]`);
  const raw = a.kind === 'exact' ? piRaw(a) : a.kind === 'integer' ? String(a.value) : a.dp != null ? (a.value.n / a.value.d).toFixed(a.dp) : String(+(a.value.n / a.value.d).toFixed(8));
  await page.fill('#mText', raw); return page.click('#mSubmit');
}
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }
async function readCards(id) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let i = 0; i < n; i++) await cont(); }
const short = id => id.split('.').pop();
const check = async (sel, val) => { await page.fill('#' + sel, val); await page.click(`[data-act="${sel}"]`); };

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
await page.click('#mapButton');
const mapTxt = await page.locator('dialog').innerText();
ok(/Geometry and measures/.test(mapTxt), 'course map links Geometry');
ok((await page.locator('dialog .topic-link').count()) >= 1 && (await page.locator('dialog .topic-link').count()) === (await page.locator('dialog .topic-link[data-mtopic]').count()), 'course map lists only built topics, each as a link');
await page.click('[data-mtopic="maths.geometry"]'); await page.click('#closeModal');
const GN = Number((await page.locator('#sideProgress').innerText()).split('/ ')[1]);
ok(GN >= 5 && (await page.locator('#sideProgress').innerText()) === `0 / ${GN}`, `Geometry topic progress starts at 0 of ${GN}`);
ok((await page.locator('#mH1').innerText()).includes('Angle facts'), 'Geometry opens on its first lesson');
const G = ['maths.geometry.angles', 'maths.geometry.polygons', 'maths.geometry.area', 'maths.geometry.circles', 'maths.geometry.volume'];
for (const id of G) {
  await goLesson(id, 0);
  ok((await page.locator('#mCalc').textContent()) === (/circles|volume/.test(id) ? 'Calculator' : 'Non-calculator'), `${short(id)}: calculator badge`);
  const n = await page.locator('[data-mcard]').count();
  for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); const html = await page.locator('#mPanel .mviz-wrap').innerHTML(); ok(html.length > 60 && !/NaN|undefined/.test(html), `${short(id)} card ${c + 1} has a visual`); }
}
await goLesson('maths.geometry.angles', 0); await page.click('[data-mcard="2"]'); await shot('g01-parallel-card');
await goLesson('maths.geometry.area', 0); await page.click('[data-mcard="0"]'); await shot('g02-parallelogram-card');

// ── 1. angle explorer ──
await goLesson('maths.geometry.angles', 1);
await page.click('[data-a="10"]'); ok((await panel()).includes('70 + 110 = 180'), 'straight line: turning the ray updates a + b');
await check('sa', '47'); ok((await feedback()).includes('vertically opposite'), 'line: equal-angle answer explained');
await check('sa', '313'); ok((await feedback()).includes('360°'), 'line: around-a-point answer explained');
await check('sa', '133');
await check('tx', '235'); ok((await feedback()).includes('not 360°'), 'triangle: 360 used instead of 180 caught');
await check('tx', '55');
await shot('g03-alternate');
await page.click('[data-pl="b"]'); ok((await feedback()).includes('co-interior'), 'parallel: co-interior angle rejected with reason');
await page.click('[data-pl="c"]'); ok((await feedback()).includes('corresponding'), 'parallel: corresponding angle rejected with reason');
await page.click('[data-pl="a"]');
ok((await lessonOf()).widgetDone, 'angle-explorer investigation complete');

// ── 2. polygon split, with resume ──
await goLesson('maths.geometry.polygons', 1);
for (let i = 0; i < 3; i++) await page.click('[data-n="1"]');
ok((await panel()).includes('5 × 180 = 900°'), 'heptagon splits into 5 triangles: 900°');
await shot('g04-heptagon-split');
await check('ds', '1800'); ok((await feedback()).includes('8 triangles, not 10'), 'decagon: n × 180 caught');
await page.fill('#ds', '1440');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('#ds').inputValue()) === '1440' && (await panel()).includes('HEPTAGON'), 'reload keeps the typed answer and the polygon');
await page.click('[data-act="ds"]');
await check('oe', '135'); ok((await feedback()).includes('interior angle'), 'octagon: interior angle given for exterior caught');
await check('oe', '45');
ok((await lessonOf()).widgetDone, 'polygon-split investigation complete');

// ── 3. area cutter ──
await goLesson('maths.geometry.area', 1);
await check('pa', '48'); ok((await feedback()).includes('sloping side'), 'parallelogram: sloping side used caught');
await page.click('[data-act="cut"]'); ok((await page.locator('[data-act="cut"]').innerText()).includes('Put it back') && (await page.locator('#mPanel svg').getAttribute('aria-label')).includes('rectangle'), 'cut and move turns it into a rectangle');
await shot('g05-cut-move');
await check('pa', '40');
await page.click('[data-act="two"]'); ok((await page.locator('#mPanel svg').getAttribute('aria-label')).includes('14 cm'), 'two trapezia make a 14 cm parallelogram');
await check('ta', '84'); ok((await feedback()).includes('both copies'), 'trapezium: both copies caught');
await check('ta', '42');
ok((await lessonOf()).widgetDone, 'area-cutter investigation complete');

// ── 4. circle unroll ──
await goLesson('maths.geometry.circles', 1);
await check('cd', '6.28'); ok((await feedback()).includes('radius'), 'C ÷ r caught');
await check('cd', '3.14');
await check('c7', '44.0'); ok((await feedback()).includes('diameter'), 'circumference: 2πd caught');
await check('c7', '21.98'); ok((await feedback()).includes('π button'), 'circumference: 3.14 used for π caught');
await check('c7', '21.99'); ok((await feedback()).includes('rounds to 22.0'), 'circumference: unrounded answer caught');
await check('c7', '22.0');
await page.click('[data-sf="45/100"]'); ok((await feedback()).includes('360°'), 'sector: out of 100 caught');
await page.click('[data-sf="1/8"]');
ok((await lessonOf()).widgetDone, 'circle-unroll investigation complete');

// ── 5. prism builder ──
await goLesson('maths.geometry.volume', 1);
await page.click('[data-l="1"]'); await page.click('[data-l="1"]'); ok((await panel()).includes('6 × 3 = 18 cm³'), 'three layers: 18 cm³');
await check('pv', '120'); ok((await feedback()).includes('triangle'), 'prism: rectangle cross-section caught');
await check('pv', '60');
await check('cv', '141.4'); ok((await feedback()).includes('decimal value'), 'cylinder: decimal given for exact caught');
await check('cv', '30'); ok((await feedback()).includes('curved surface'), 'cylinder: curved surface caught');
await shot('g06-cylinder');
await check('cv', '45');
ok((await lessonOf()).widgetDone, 'prism-builder investigation complete');

// ── circles practice: figures, exact π answers, trap feedback ──
await readCards('maths.geometry.circles'); await page.click('[data-mstage="2"]');
let s, it, sawExact = false, sawTrap = false, sawFig = false;
for (let g = 0; g < 60 && !(sawExact && sawTrap && sawFig); g++) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  it = L.practice.item; if (!it) break;
  if (it.fig && !sawFig) { ok((await page.locator('#mBody .mfig svg').count()) === 1, 'practice item shows its figure'); sawFig = true; }
  if (it.answer.kind === 'exact' && it.exTraps?.length && !sawTrap) {
    const t = it.exTraps[0]; await page.fill('#mText', piRaw(t)); await page.click('#mSubmit');
    ok((await feedback()).includes(t.why.slice(0, 20)), 'exact trap answer gets its explanation'); sawTrap = true; await cont(); continue;
  }
  if (it.answer.kind === 'exact' && !sawExact) { await enter(it); ok((await feedback()).startsWith('Correct'), 'answer in terms of π typed with π accepted'); sawExact = true; continue; }
  await enter(it);
}
ok(sawExact && sawTrap && sawFig, 'circles practice exercised figures, exact answers and traps');
await shot('g07-circle-practice');

// ── Foundation: polygons practice to mastery and check ──
await readCards('maths.geometry.polygons'); await page.click('[data-mstage="2"]');
ok((await page.locator('.mrung').count()) === 3, 'polygons: two skills plus mixed');
let guard = 0, answered = 0;
while (guard++ < 80) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
ok(answered >= 10, `polygons lesson secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'polygons lesson completes at 10/10');
await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === `1 / ${GN}`, 'Geometry topic progress 1 after one lesson');

// ── Higher: the same five lessons ──
await page.selectOption('#tier', 'Higher'); await wait(200);
await page.click('#lessonNav'); ok((await page.locator('[data-mlesson^="maths.geometry."]').count()) >= GN, 'Higher: every Geometry lesson listed (Higher may add Higher-only lessons)'); await page.keyboard.press('Escape');
await page.setViewportSize({ width: 390, height: 844 });
for (const id of G) for (const stg of [0, 1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${short(id)} stage ${stg + 1} has no overflow`); }
await goLesson('maths.geometry.volume', 2); await shot('g08-phone-volume');
await page.setViewportSize({ width: 1280, height: 900 });
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-11.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
