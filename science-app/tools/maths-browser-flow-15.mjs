// Browser walk-through for Statistics: course map, card visuals, all four investigations with wrong
// paths, resume, charts in practice, Foundation mastery and check, the Higher-only cumulative lesson
// hidden at Foundation and working at Higher, 390px. Run: node maths-browser-flow-15.mjs <dir>
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
async function enter(item) {
  const a = item.answer;
  if (a.kind === 'choice') return page.click(`[data-mchoice="${a.answer}"]`);
  const raw = a.kind === 'integer' ? String(a.value) : a.dp != null ? (a.value.n / a.value.d).toFixed(a.dp) : String(+(a.value.n / a.value.d).toFixed(8));
  await page.fill('#mText', raw); return page.click('#mSubmit');
}
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }
async function readCards(id) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let i = 0; i < n; i++) await cont(); }
const short = id => id.split('.').pop();
const check = async (sel, val) => { await page.fill('#' + sel, val); await page.click(`[data-act="${sel}"]`); };
const listed = async id => { await page.click('#lessonNav'); const n = await page.locator(`[data-mlesson="${id}"]`).count(); await page.keyboard.press('Escape'); return n; };

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
await page.click('#mapButton');
ok(/Statistics/.test(await page.locator('dialog').innerText()), 'course map links Statistics');
ok((await page.locator('dialog .topic-link').count()) === 6, 'course map lists all six Maths topics');
await page.click('[data-mtopic="maths.statistics"]'); await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === '0 / 3', 'Statistics has 3 lessons at Foundation (cumulative frequency is Higher only)');
ok((await listed('maths.statistics.cumulative')) === 0, 'Foundation: Higher-only histogram lesson hidden');
const F = ['maths.statistics.averages', 'maths.statistics.charts-sampling', 'maths.statistics.scatter'];
const cards = async id => { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); const html = await page.locator('#mPanel .mviz-wrap').innerHTML(); ok(html.length > 60 && !/NaN|undefined/.test(html), `${short(id)} card ${c + 1} has a visual`); } };
for (const id of F) await cards(id);
await goLesson('maths.statistics.charts-sampling', 0); await page.click('[data-mcard="1"]'); await shot('s01-pie-card');

// ── 1. average balancer ──
await goLesson('maths.statistics.averages', 1);
await page.click('[data-av="mean"]'); ok((await feedback()).includes('much bigger first'), 'averages: answering before exploring refused');
for (let i = 0; i < 4; i++) await page.click('[data-big="10"]');
await shot('s02-extreme');
await page.click('[data-av="median"]'); ok((await feedback()).includes('stays at 7'), 'averages: median chosen rejected');
await page.click('[data-av="mean"]');
await check('mv', '8'); ok((await feedback()).includes('need not equal'), 'missing value: mean given caught');
await page.fill('#mv', '14');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('#mv').inputValue()) === '14', 'reload keeps the typed answer');
await page.click('[data-act="mv"]');
await check('ft', '7.25'); ok((await feedback()).includes('number of matches'), 'frequency mean: divided by rows caught');
await check('ft', '1.45');
ok((await lessonOf()).widgetDone, 'average-balancer investigation complete');

// ── 2. pie maker ──
await goLesson('maths.statistics.charts-sampling', 1);
await check('dp', '2.5'); ok((await feedback()).includes('360'), 'pie: out of 100 caught');
await check('dp', '9'); await check('an', '18'); ok((await feedback()).includes('18 × 9'), 'pie: frequency for angle caught');
await check('an', '162');
await page.click('[data-cm="range"]'); ok((await feedback()).includes('less consistent'), 'compare: larger range misread caught');
await page.click('[data-cm="ok"]');
ok((await lessonOf()).widgetDone, 'pie-maker investigation complete');

// ── 3. scatter fit ──
await goLesson('maths.statistics.scatter', 1);
await page.click('[data-ln="c"]'); await page.click('[data-act="ln"]'); ok((await feedback()).includes('too steep'), 'line C rejected as too steep');
await page.click('[data-ln="a"]'); await shot('s03-fit'); await page.click('[data-act="ln"]');
await check('es', '6'); ok((await feedback()).includes('x-value'), 'estimate: x given caught');
await check('es', '9.8');
await page.click('[data-ex="yes"]'); ok((await feedback()).includes('stop at x = 10'), 'extrapolation: "yes" rejected');
await page.click('[data-ex="no"]');
ok((await lessonOf()).widgetDone, 'scatter-fit investigation complete');

// ── charts practice: a chart is drawn ──
await readCards('maths.statistics.charts-sampling'); await page.click('[data-mstage="2"]');
let s, it, sawChart = false;
for (let g = 0; g < 30 && !sawChart; g++) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  it = L.practice.item; if (!it) break;
  if (it.graph || it.fig) { ok((await page.locator('#mBody .mfig svg').count()) === 1, 'practice item shows its chart'); sawChart = true; await shot('s04-chart-practice'); }
  await enter(it);
}
ok(sawChart, 'charts practice drew a chart');
// Keep going until the pictogram / line chart / time-series skill comes up; try its trap first.
let saw2 = false;
for (let g = 0; g < 60 && !saw2; g++) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  it = L.practice.item; if (!it) break;
  if (it.skill === 'maths.statistics.charts2') {
    saw2 = true; ok((await page.locator('#mBody .mfig svg').count()) === 1, `S2 chart drawn (${it.fig ? 'pictogram' : 'line chart'})`); await shot('s06-charts2');
    const t = (it.traps || [])[0];
    if (t && it.answer.kind !== 'choice') { await page.fill('#mText', String(+(t.v.n / t.v.d).toFixed(4))); await page.click('#mSubmit'); ok((await feedback()).includes(t.why.slice(0, 25)), 'S2 trap explained: ' + t.why.slice(0, 40)); await cont(); s = await mstate(); it = s.lessons[s.lessonId].practice.item; }
    if (it && it.skill === 'maths.statistics.charts2') { await enter(it); ok((await feedback()).startsWith('Correct'), 'S2 item answered from its chart'); }
    break;
  }
  await enter(it);
}
ok(saw2, 'charts lesson reaches pictogram / line chart / time-series practice');

// ── Foundation: scatter lesson to mastery and check (single skill: no mixed round) ──
await readCards('maths.statistics.scatter'); await page.click('[data-mstage="2"]');
ok((await page.locator('.mrung').count()) === 1, 'scatter lesson: one skill, no mixed round');
let guard = 0, answered = 0;
while (guard++ < 90) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
  answered++;
}
ok(answered >= 6, `scatter lesson secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'scatter lesson completes at 10/10');
await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === '1 / 3', 'Statistics progress 1 / 3');

// ── Higher: cumulative lesson ──
await page.selectOption('#tier', 'Higher'); await wait(200);
ok((await listed('maths.statistics.cumulative')) === 1, 'Higher: histogram lesson listed');
await cards('maths.statistics.cumulative');
await goLesson('maths.statistics.cumulative', 1);
await check('fd', '30'); ok((await feedback()).includes('class width'), 'histogram: frequency for density caught');
await check('fd', '1.5'); await check('md', '40'); ok((await feedback()).includes('cumulative frequency'), 'CF: reading the wrong axis caught');
await shot('s05-cf'); await check('md', '29'); await check('iq', '28'); ok((await feedback()).includes('range'), 'box plot: range for IQR caught');
await check('iq', '11');
ok((await lessonOf()).widgetDone, 'quartile-reader investigation complete');
await readCards('maths.statistics.cumulative'); await page.click('[data-mstage="2"]');
s = await mstate(); it = s.lessons[s.lessonId].practice.item; await enter(it); ok((await feedback()).startsWith('Correct'), 'Higher practice item answered from its chart');
await page.setViewportSize({ width: 390, height: 844 });
for (const id of [...F, 'maths.statistics.cumulative']) for (const stg of [0, 1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${short(id)} stage ${stg + 1} has no overflow`); }
await page.setViewportSize({ width: 1280, height: 900 });
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-15.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
