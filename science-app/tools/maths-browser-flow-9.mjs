// Browser walk-through for Ratio batch 1: the new Ratio topic on the course map, all five investigations
// with wrong paths, ratio and money answers (partial marking for unsimplified ratios and missing pence),
// calculator badge, tiers, resume after reload, a lesson practised to mastery and checked, 390px.
// Run: node maths-browser-flow-9.mjs <screenshotDir>
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
const sciBefore = await page.evaluate(() => localStorage.getItem('crash-course-v2'));
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
await page.click('#mapButton');
const mapTxt = await page.locator('dialog').innerText();
const RN = Number((mapTxt.match(/Ratio, proportion and rates of change\s*(\d+) lessons available/) || [])[1]);
ok(RN >= 5, 'course map: Ratio is available with ' + RN + ' lessons');
ok(/Geometry and measures\s*Planned/.test(mapTxt), 'course map: Geometry still planned');
await page.click('[data-mtopic="maths.ratio"]'); await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === `0 / ${RN}`, 'Ratio topic progress starts at 0');
ok((await page.locator('#mH1').innerText()).includes('Ratio notation'), 'Ratio opens on its first lesson');
const R = ['maths.ratio.notation', 'maths.ratio.sharing', 'maths.ratio.proportion', 'maths.ratio.percentages', 'maths.ratio.growth-decay'];
for (const id of R) {
  await goLesson(id, 0);
  const n = await page.locator('[data-mcard]').count();
  for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); const html = await page.locator('#mPanel .mviz-wrap').innerHTML(); ok(html.length > 60 && !/NaN|undefined/.test(html), `${short(id)} card ${c + 1} has a visual`); }
}
await goLesson('maths.ratio.sharing', 0); await shot('g01-bar-model');
await goLesson('maths.ratio.growth-decay', 0);
ok((await page.locator('#mCalc').textContent()) === 'Calculator', 'growth and decay is a calculator lesson');

// ── 1. simplifier ──
await goLesson('maths.ratio.notation', 1);
await page.click('[data-dv="5"]'); ok((await feedback()).includes('not divisible by 5'), 'simplify: non-common factor refused');
await page.click('[data-dv="2"]'); await page.click('[data-act="simplest"]'); ok((await feedback()).includes('still share a factor'), 'simplify: premature "simplest" refused');
await page.click('[data-dv="2"]'); await page.click('[data-dv="3"]'); await page.click('[data-act="simplest"]');
await page.click('[data-un="0"]'); ok((await feedback()).includes('centimetres with metres'), 'units: mixed units caught');
await page.click('[data-un="1"]');
await page.fill('#nn', '0.4'); await page.click('[data-act="n"]'); ok((await feedback()).includes('Divide by 4'), '1 : n: reciprocal caught');
await page.fill('#nn', '2.5'); await page.click('[data-act="n"]');
ok((await lessonOf()).widgetDone, 'ratio-simplifier investigation complete');

// ── 2. share bars, with resume ──
await goLesson('maths.ratio.sharing', 1);
await page.click('[data-sa="1"]'); await page.click('[data-sa="1"]'); await page.click('[data-sb="1"]');
await page.click('[data-act="set"]'); ok((await feedback()).includes('Asha has 2 boxes'), 'bars: ratio drawn the wrong way round caught');
await page.click('[data-sa="-1"]'); await page.click('[data-sb="1"]');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('#mPanel rect').count()) === 5, 'reload keeps the bar model (5 boxes)');
await page.click('[data-act="set"]');
await page.fill('#pv', '30'); await page.click('[data-act="part"]'); ok((await feedback()).includes('total number of boxes'), 'one box: dividing by one person\'s boxes caught');
await page.fill('#pv', '12'); await page.click('[data-act="part"]');
await page.fill('#dp', '18'); await page.fill('#da', '36'); await page.click('[data-act="diff"]'); ok((await feedback()).includes('3 highlighted boxes'), 'difference treated as one part caught');
await shot('g02-difference');
await page.fill('#dp', '6'); await page.fill('#da', '12'); await page.click('[data-act="diff"]');
ok((await lessonOf()).widgetDone, 'share-bars investigation complete');

// ── 3. best buy ──
await goLesson('maths.ratio.proportion', 1);
await page.click('[data-best="2"]'); ok((await feedback()).includes('all three'), 'best buy: choosing before working out refused');
for (const i of [0, 1, 2]) await page.click(`[data-sh="${i}"]`);
await page.click('[data-best="2"]'); ok((await feedback()).includes('worst value'), 'best buy: cheapest pack is not best value');
await page.click('[data-best="1"]');
await page.fill('#rf', '202'); await page.fill('#re', '4'); await page.click('[data-act="rc"]'); ok((await feedback()).includes('multiplies'), 'recipe: additive scaling caught');
await page.fill('#rf', '300'); await page.fill('#re', '3'); await page.click('[data-act="rc"]');
await page.fill('#iv', '10.67'); await page.click('[data-act="iv"]'); ok((await feedback()).includes('inverse proportion'), 'inverse proportion: direct answer caught');
await page.fill('#iv', '6'); await page.click('[data-act="iv"]');
ok((await lessonOf()).widgetDone, 'best-buy investigation complete');

// ── 4. percent bar ──
await goLesson('maths.ratio.percentages', 1);
await page.click('[data-mu="0"]'); ok((await feedback()).includes('just the 15%'), 'multiplier 0.15 explained');
await page.click('[data-mu="1"]');
await page.fill('#rt', '4.8'); await page.fill('#ro', '57.6'); await page.click('[data-act="rv"]'); ok((await feedback()).includes('of the original price'), 'reverse percentage: 20% of the sale price caught');
await page.fill('#rt', '6'); await page.fill('#ro', '60'); await page.click('[data-act="rv"]');
await page.fill('#pc', '20'); await page.click('[data-act="pc"]'); ok((await feedback()).includes('original price'), 'percentage change: dividing by the new value caught');
await page.fill('#pc', '25'); await page.click('[data-act="pc"]');
ok((await lessonOf()).widgetDone, 'percent-bar investigation complete');

// ── 5. compound race ──
await goLesson('maths.ratio.growth-decay', 1);
for (let i = 0; i < 4; i++) await page.click('[data-act="yr"]');
await page.fill('#cy', '4'); await page.click('[data-act="cy"]'); ok((await feedback()).includes('not yet £100'), 'compound: year 4 gap explained');
await page.fill('#cy', '5'); await page.click('[data-act="cy"]');
await page.click('[data-rp="0"]'); ok((await feedback()).includes('of £120'), 'repeated change: "back to start" corrected');
await page.click('[data-rp="1"]');
ok((await lessonOf()).widgetDone, 'compound-race investigation complete');
await shot('g03-compound');

// ── answers: unsimplified ratio and missing pence are partly right ──
await readCards('maths.ratio.notation'); await page.click('[data-mstage="2"]');
let s = await mstate(), it = s.lessons[s.lessonId].practice.item;
ok(it.answer.kind === 'ratio', 'notation practice starts with a ratio answer');
await page.fill('#mText', it.answer.parts.map(p => p * 2).join(':')); await page.click('#mSubmit');
ok(/simplest form/i.test(await feedback()), 'unsimplified ratio marked as not in simplest form');
await cont();
let guard = 0, answered = 0;
while (guard++ < 80) {
  s = await mstate(); const L = s.lessons[s.lessonId];
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
ok(answered >= 12, `ratio notation secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'ratio notation lesson completes at 10/10');
await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === `1 / ${RN}`, 'Ratio progress counts the completed lesson');

await goLesson('maths.ratio.proportion', 2);
let sawMoney = false;
for (let g = 0; g < 60 && !sawMoney; g++) {
  s = await mstate(); const L = s.lessons[s.lessonId];
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  if (it.answer.kind === 'decimal' && it.answer.dp === 2) {
    await page.fill('#mText', (it.answer.value.n / it.answer.value.d).toFixed(3)); await page.click('#mSubmit');
    const fb = await feedback(); ok(/decimal places/.test(fb), 'money with the wrong number of decimal places is flagged: ' + fb.slice(0, 60));
    sawMoney = true; break;
  }
  await enter(it);
}
ok(sawMoney, 'a money answer was found to test');
await shot('g04-money');

// ── tiers ──
await goLesson('maths.ratio.growth-decay', 2);
ok((await page.locator('.mq-meta').textContent()).includes('Calculator'), 'growth practice shows the calculator badge');
s = await mstate();
ok(true, 'tier ' + s.tier);
await page.selectOption('#tier', 'Higher'); await wait(200);
await goLesson('maths.ratio.growth-decay', 2);
ok((await page.locator('.mrung').count()) === 3, 'Higher: two growth skills plus mixed');

await page.click('#mapButton'); await page.click('[data-mtopic="maths.algebra"]'); await page.click('#closeModal');
ok(/^0 \/ \d+$/.test(await page.locator('#sideProgress').innerText()), 'Algebra progress unaffected by Ratio work');
await page.click('#mapButton'); await page.click('[data-mtopic="maths.ratio"]'); await page.click('#closeModal');
await page.setViewportSize({ width: 390, height: 844 });
for (const id of R) for (const stg of [0, 1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${short(id)} stage ${stg + 1} has no overflow`); }
await goLesson('maths.ratio.sharing', 1); await shot('g05-phone-bars');
await page.setViewportSize({ width: 1280, height: 900 });

await page.selectOption('#subject', 'science'); await wait(300);
ok((await page.evaluate(() => localStorage.getItem('crash-course-v2'))) === sciBefore || sciBefore === null, 'science storage unchanged');
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-9.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
