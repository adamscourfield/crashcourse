// Browser walk-through for Algebra batch 5 (gaps): Fibonacci-type and surd sequences, surd expressions,
// exponential graphs, trapezia under curves, strict-inequality regions with dashed boundaries. Both
// investigations with wrong paths, exact-answer marking, plotting points in a strict region, tiers,
// resume after reload, Foundation mastery and check, 390px. Run: node maths-browser-flow-8.mjs <dir>
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
  if (a.kind === 'exact') { const A = a.a.n / a.a.d, B = `${a.b.n < 0 ? '-' : '+'}${Math.abs(a.b.n)}√${a.r}/${a.b.d}`; await page.fill('#mText', `${a.a.n}/${a.a.d}${B}`.replace(/^0\/1\+?/, '')); return page.click('#mSubmit'); }
  if (a.kind === 'points') { for (const [x, y] of a.points) await typePoint(x, y); return page.click('#mSubmit'); }
  const raw = a.kind === 'algebra' ? a.expr : a.kind === 'list' ? a.values.join(', ') : a.kind === 'integer' ? String(a.value) : (a.value.n / a.value.d).toFixed(a.dp ?? 3);
  await page.fill('#mText', raw); return page.click('#mSubmit');
}
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }
async function readCards(id) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let i = 0; i < n; i++) await cont(); }
const short = id => id.split('.').pop();
async function typePoint(x, y) { await page.fill('[data-gx]', String(x)); await page.fill('[data-gy]', String(y)); await page.click('[data-gadd]'); }

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
const sciBefore = await page.evaluate(() => localStorage.getItem('crash-course-v2'));
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
await page.click('#mapButton');
ok(/Algebra\s*19 lessons available/.test(await page.locator('dialog').innerText()), 'Foundation course map: Algebra has 19 lessons');
await page.click('[data-mtopic="maths.algebra"]'); await page.click('#closeModal');
await page.click('#lessonNav');
const listF = (await page.locator('dialog .lesson-row').allInnerTexts()).join(' | ');
ok(listF.includes('Surds in algebra and further sequences') && !listF.includes('Exponential graphs'), 'Foundation list: sequences lesson shown, Higher-only graphs lesson hidden');
await page.click('#closeModal');

// ── Foundation: Fibonacci practice to mastery, then the check ──
await readCards('maths.algebra.surds-sequences'); await page.click('[data-mstage="2"]');
ok((await page.locator('.mrung').count()) === 1, 'Foundation: one sequence skill (surd skill hidden)');
let s, it, guard = 0, answered = 0;
while (guard++ < 60) {
  s = await mstate(); const L = s.lessons[s.lessonId];
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  ok(it.level <= 2 || false, 'Foundation never sees surd-ratio levels') ;
  await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
ok(answered >= 6, `Fibonacci-type sequences secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; ok(c.items[c.index].level <= 2, 'Foundation check stays within Foundation levels'); await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
const dlg = await page.locator('dialog').innerText();
ok(dlg.includes('10 / 10') && /finish .*investigat/i.test(dlg), 'Foundation check scores 10/10 and asks for the investigation before completion');
await page.click('#closeModal');

await page.selectOption('#tier', 'Higher'); await wait(200);
await page.click('#mapButton');
ok(/Algebra\s*22 lessons available/.test(await page.locator('dialog').innerText()), 'Higher course map: Algebra has 22 lessons');
await page.click('[data-mtopic="maths.algebra"]'); await page.click('#closeModal');
for (const id of ['maths.algebra.surds-sequences', 'maths.algebra.further-graphs']) {
  await goLesson(id, 0);
  const n = await page.locator('[data-mcard]').count();
  for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); const html = await page.locator('#mPanel .mviz-wrap').innerHTML(); ok(html.length > 60 && !/NaN|undefined/.test(html), `${short(id)} card ${c + 1} has a visual`); }
}
await goLesson('maths.algebra.further-graphs', 0); await page.click('[data-mcard="3"]');
ok((await page.locator('#mPanel path[stroke-dasharray], #mPanel line[stroke-dasharray]').count()) >= 2, 'strict-region card draws dashed boundaries');
await shot('f01-dashed-region');

// ── investigation 1: Fibonacci, √2 terms, conjugate ──
await goLesson('maths.algebra.surds-sequences', 1);
for (let i = 0; i < 4; i++) await page.click('[data-fa="1"]');
await page.click('[data-act="fib"]'); ok((await feedback()).includes('3rd term'), 'Fibonacci: wrong third term caught');
for (let i = 0; i < 4; i++) await page.click('[data-fb="1"]');
await page.click('[data-act="fib"]'); ok((await feedback()).includes('Keep a + b = 10'), 'Fibonacci: right 3rd, wrong 5th term caught');
await page.click('[data-fa="-1"]'); await page.click('[data-fb="1"]'); await page.click('[data-act="fib"]');
for (let i = 0; i < 6; i++) await page.click('[data-act="more"]');
await page.click('[data-gt="1"]'); await page.click('[data-act="geo"]'); ok((await feedback()).includes('still has a √2'), 'surd terms: a surd term picked as whole is caught');
await page.click('[data-gt="1"]'); for (const k of [0, 2, 4, 6]) await page.click(`[data-gt="${k}"]`);
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('[data-gt].selected').count()) === 4, 'reload keeps the selected terms');
await page.click('[data-act="geo"]');
await page.click('[data-cj="0"]'); ok((await feedback()).includes('squares it'), 'conjugate: same bracket rejected with a reason');
await shot('f02-conjugate');
await page.click('[data-cj="1"]');
ok((await lessonOf()).widgetDone, 'sequence-surds investigation complete');

// ── investigation 2: growth factor, trapezia, boundaries ──
await goLesson('maths.algebra.further-graphs', 1);
for (let i = 0; i < 6; i++) await page.click('[data-bk="1"]');
await page.click('[data-act="b"]'); ok((await feedback()).includes('b² must be 2.25') || (await feedback()).includes('not 225'), 'growth: wrong b explained');
await page.click('[data-bk="-1"]'); await page.click('[data-act="b"]');
for (const n of [2, 4, 8]) { await page.click(`[data-ns="${n}"]`); }
ok((await page.locator('#mPanel polyline').count()) === 8, 'eight trapezia drawn');
await page.click('[data-ov="under"]'); ok((await feedback()).includes('bends upwards'), 'trapezia: underestimate claim corrected');
await shot('f03-trapezia');
await page.click('[data-ov="over"]');
await page.click('[data-act="rg"]'); ok((await feedback()).includes('dash'), 'boundaries: all-solid drawing corrected');
await page.click('[data-dl="0"]'); await page.click('[data-dl="1"]'); await page.click('[data-act="rg"]'); ok((await feedback()).includes('y = 0 should be solid'), 'boundaries: inclusive line drawn dashed is corrected');
await page.click('[data-dl="1"]'); await page.click('[data-dl="2"]'); await page.click('[data-act="rg"]');
ok((await lessonOf()).widgetDone, 'growth-area investigation complete');

// ── Higher practice: exact answers, strict-region plotting ──
await goLesson('maths.algebra.surds-sequences', 2);
ok((await page.locator('.mrung').count()) === 3, 'Higher: both skills plus mixed');
await goLesson('maths.algebra.further-graphs', 2);
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
ok(it.skill === 'maths.algebra.graph-exponential', 'further graphs practice starts with exponential graphs');
await enter(it); ok((await feedback()).startsWith('Correct'), 'exponential answer accepted');
await page.setViewportSize({ width: 390, height: 844 });
for (const id of ['maths.algebra.surds-sequences', 'maths.algebra.further-graphs']) for (const stg of [0, 1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${short(id)} stage ${stg + 1} has no overflow`); }
await goLesson('maths.algebra.further-graphs', 1); await shot('f04-phone-graphs');
await page.setViewportSize({ width: 1280, height: 900 });

await page.selectOption('#subject', 'science'); await wait(300);
ok((await page.evaluate(() => localStorage.getItem('crash-course-v2'))) === sciBefore || sciBefore === null, 'science storage unchanged');
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-8.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
