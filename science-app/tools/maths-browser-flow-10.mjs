// Browser walk-through for Ratio batch 2: proportion equations and graphs, scale and similarity,
// compound units and rates of change. Investigations with wrong paths, Higher proportion formulae,
// tiers, resume, Foundation mastery and check, 390px. Run: node maths-browser-flow-10.mjs <dir>
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
const cont = () => page.click('#mContinue');
const shot = name => page.screenshot({ path: `${OUT}/${name}.png` });
const noOverflow = () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
const wait = ms => page.waitForTimeout(ms);
const fval = v => (v.d === 1 ? String(v.n) : `${v.n}/${v.d}`);
async function enter(item) {
  const a = item.answer;
  if (a.kind === 'choice') return page.click(`[data-mchoice="${a.answer}"]`);
  if (a.kind === 'solutions') { for (let r = 0; r < a.sols.length; r++) for (let i = 0; i < a.vars.length; i++) await page.fill(`[data-sol="${r},${i}"]`, a.dp != null ? (a.sols[r][i].n / a.sols[r][i].d).toFixed(a.dp) : fval(a.sols[r][i])); return page.click('#mSubmit'); }
  if (a.kind === 'fraction') { const neg = a.value.n < 0, on = await page.locator('[data-msign]').evaluate(e => e.classList.contains('on')); if (on !== neg) await page.click('[data-msign]'); await page.fill('[data-mw]', a.value.d === 1 ? String(Math.abs(a.value.n)) : ''); await page.fill('[data-mn]', a.value.d === 1 ? '' : String(Math.abs(a.value.n))); await page.fill('[data-md]', a.value.d === 1 ? '' : String(a.value.d)); return page.click('#mSubmit'); }
  if (a.kind === 'ratio') { await page.fill('#mText', a.parts.join(':')); return page.click('#mSubmit'); }
  const raw = a.kind === 'algebra' ? a.expr : a.kind === 'list' ? a.values.join(', ') : a.kind === 'integer' ? String(a.value) : (a.dp != null ? (a.value.n / a.value.d).toFixed(a.dp) : String(+(a.value.n / a.value.d).toFixed(8)));
  await page.fill('#mText', raw); return page.click('#mSubmit');
}
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }
async function readCards(id) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let i = 0; i < n; i++) await cont(); }
const short = id => id.split('.').pop();

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
await page.click('#mapButton');
ok(/Ratio, proportion and rates of change\s*8 lessons available/.test(await page.locator('dialog').innerText()), 'course map: Ratio has 8 lessons');
await page.click('[data-mtopic="maths.ratio"]'); await page.click('#closeModal');
const R2 = ['maths.ratio.proportion-algebra', 'maths.ratio.scale-similarity', 'maths.ratio.rates'];
for (const id of R2) {
  await goLesson(id, 0);
  const n = await page.locator('[data-mcard]').count();
  for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); const html = await page.locator('#mPanel .mviz-wrap').innerHTML(); ok(html.length > 60 && !/NaN|undefined/.test(html), `${short(id)} card ${c + 1} has a visual`); }
}
await goLesson('maths.ratio.rates', 0); await page.click('[data-mcard="2"]'); await shot('h01-chord-tangent');

// ── 1. proportion explorer ──
await goLesson('maths.ratio.proportion-algebra', 1);
await page.click('[data-k="1"]'); await page.click('[data-act="k"]'); ok((await feedback()).includes('k = 12 ÷ 3'), 'direct: wrong k explained');
await page.click('[data-k="1"]'); await page.click('[data-k="1"]'); await page.click('[data-act="k"]');
await page.fill('#ia', '16'); await page.fill('#ib', '24'); await page.click('[data-act="inv"]'); ok((await feedback()).includes('direct proportion'), 'inverse table: direct answers caught');
await page.fill('#ia', '6');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('#ia').inputValue()) === '6', 'reload keeps a part-filled table');
await page.fill('#ib', '4'); await page.click('[data-act="inv"]');
await page.click('[data-mg="A"]'); ok((await feedback()).includes('not through the origin'), 'graphs: line not through the origin rejected');
await page.click('[data-mg="B"]');
ok((await lessonOf()).widgetDone, 'proportion-explorer investigation complete');

// ── 2. map scale ──
await goLesson('maths.ratio.scale-similarity', 1);
await page.fill('#km', '1750'); await page.click('[data-act="km"]'); ok((await feedback()).includes('metres'), 'map: metres answer caught');
await page.fill('#km', '1.75'); await page.click('[data-act="km"]');
await page.click('[data-af="3"]'); ok((await feedback()).includes('18 cm²'), 'area factor: × 3 corrected');
await page.click('[data-sk="1"]'); await page.click('[data-sk="1"]');
ok((await page.locator('#mPanel').innerText()).includes('18 cm²'), 'scale factor 3 shows area 18 cm²');
await page.click('[data-af="9"]');
ok((await lessonOf()).widgetDone, 'map-scale investigation complete');

// ── 3. chords ──
await goLesson('maths.ratio.rates', 1);
await page.fill('#ins', '14'); await page.click('[data-act="ins"]'); ok((await feedback()).includes('Move the chord closer first'), 'chords: answering before exploring refused');
for (let i = 0; i < 5; i++) await page.click('[data-act="closer"]');
await shot('h02-chords');
await page.fill('#ins', '54'); await page.click('[data-act="ins"]'); ok((await feedback()).includes('distance'), 'chords: distance confused with speed caught');
await page.fill('#ins', '14'); await page.click('[data-act="ins"]');
await page.fill('#ms', '1200'); await page.click('[data-act="ms"]'); ok((await feedback()).includes('3600 seconds'), 'units: per-minute conversion caught');
await page.fill('#ms', '20'); await page.click('[data-act="ms"]');
ok((await lessonOf()).widgetDone, 'rate-chords investigation complete');

// ── Foundation: proportion practice to mastery and check ──
await readCards('maths.ratio.proportion-algebra'); await page.click('[data-mstage="2"]');
ok((await page.locator('.mrung').count()) === 3, 'Foundation: two proportion skills plus mixed');
let s, it, guard = 0, answered = 0;
while (guard++ < 80) {
  s = await mstate(); const L = s.lessons[s.lessonId];
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  if (it.skill === 'maths.ratio.prop-equation') ok(it.level <= 2, 'Foundation proportion stays at levels 1–2');
  await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
ok(answered >= 10, `proportion lesson secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'proportion lesson completes at 10/10');
await page.click('#closeModal');

// ── Higher: formula answers ──
await page.selectOption('#tier', 'Higher'); await wait(200);
await goLesson('maths.ratio.scale-similarity', 2);
ok((await page.locator('.mrung').count()) === 3, 'Higher: scale and similarity skills plus mixed');
await goLesson('maths.ratio.proportion-algebra', 2);
for (let g = 0; g < 60; g++) {
  s = await mstate(); const L = s.lessons[s.lessonId];
  if (L.practice.answer) { await cont(); continue; }
  it = L.practice.item;
  if (it.answer.kind === 'algebra') { await page.fill('#mText', 'y = ' + it.answer.expr); await page.click('#mSubmit'); ok((await feedback()).startsWith('Correct'), 'Higher: proportion formula typed as y = … accepted'); break; }
  await enter(it);
}
await page.setViewportSize({ width: 390, height: 844 });
for (const id of R2) for (const stg of [0, 1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${short(id)} stage ${stg + 1} has no overflow`); }
await page.setViewportSize({ width: 1280, height: 900 });
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-10.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
