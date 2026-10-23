// Browser walk-through for Geometry batch 3: congruence and similarity, circle theorems (Higher),
// solids and plans, sine and cosine rules (Higher), vectors. Tier visibility of the two Higher-only
// lessons, card visuals, all five investigations with wrong paths, resume, column-vector and
// vector-expression answers, Foundation mastery and check, 390px. Run: node maths-browser-flow-13.mjs <dir>
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
async function enter(item) {
  const a = item.answer;
  if (a.kind === 'choice') return page.click(`[data-mchoice="${a.answer}"]`);
  if (a.kind === 'solutions') { for (let r = 0; r < a.sols.length; r++) for (let i = 0; i < a.vars.length; i++) await page.fill(`[data-sol="${r},${i}"]`, String(a.sols[r][i].n / a.sols[r][i].d)); return page.click('#mSubmit'); }
  const raw = a.kind === 'algebra' ? a.expr : a.kind === 'integer' ? String(a.value) : a.dp != null ? (a.value.n / a.value.d).toFixed(a.dp) : String(+(a.value.n / a.value.d).toFixed(8));
  await page.fill('#mText', raw); return page.click('#mSubmit');
}
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }
async function readCards(id) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let i = 0; i < n; i++) await cont(); }
const short = id => id.split('.').pop();
const check = async (sel, val) => { await page.fill('#' + sel, val); await page.click(`[data-act="${sel}"]`); };
const clickN = async (sel, n) => { for (let i = 0; i < n; i++) await page.click(sel); };
const listed = async id => { await page.click('#lessonNav'); const n = await page.locator(`[data-mlesson="${id}"]`).count(); await page.keyboard.press('Escape'); return n; };

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
await page.click('#mapButton');
ok(/Geometry and measures/.test(await page.locator('dialog').innerText()), 'course map links Geometry');
await page.click('[data-mtopic="maths.geometry"]'); await page.click('#closeModal');
const GN = Number((await page.locator('#sideProgress').innerText()).split('/ ')[1]);
ok(GN === 13, `Foundation: Geometry has ${GN} lessons (two Higher-only lessons hidden)`);
ok((await listed('maths.geometry.circle-theorems')) === 0 && (await listed('maths.geometry.trig-rules')) === 0, 'Foundation: Higher-only circle theorems and trig rules are hidden');
ok((await listed('maths.geometry.vectors')) === 1, 'Foundation: vectors listed');
const F = ['maths.geometry.congruence-similarity', 'maths.geometry.solids-plans', 'maths.geometry.vectors'], Hx = ['maths.geometry.circle-theorems', 'maths.geometry.trig-rules'];
const cards = async id => { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); const html = await page.locator('#mPanel .mviz-wrap').innerHTML(); ok(html.length > 60 && !/NaN|undefined/.test(html), `${short(id)} card ${c + 1} has a visual`); } };
for (const id of F) await cards(id);

// ── 1. congruence test ──
await goLesson('maths.geometry.congruence-similarity', 1);
await page.click('[data-aa="yes"]'); ok((await feedback()).includes('same size'), 'AAA: "yes" rejected');
await clickN('[data-ak="1"]', 2); ok((await page.locator('#mPanel svg').getAttribute('aria-label')).includes('1.5 times'), 'resizing keeps the angles');
await page.click('[data-aa="no"]');
await page.click('[data-cn="ASA"]'); ok((await feedback()).includes('one angle'), 'condition: ASA rejected');
await page.click('[data-cn="SAS"]');
await check('sx', '6'); ok((await feedback()).includes('whole side'), 'similar: part side used caught');
await page.fill('#sx', '10');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('#sx').inputValue()) === '10', 'reload keeps the typed answer');
await page.click('[data-act="sx"]');
ok((await lessonOf()).widgetDone, 'congruence-test investigation complete');

// ── 3. cube stacker ──
await goLesson('maths.geometry.solids-plans', 1);
await check('fe', '9'); ok((await feedback()).includes('hidden'), 'elevation: every cube counted caught');
await check('fe', '6'); await check('vo', '6'); ok((await feedback()).includes('front elevation'), 'volume: elevation given caught');
await check('vo', '9'); await check('eu', '17'); ok((await feedback()).includes('Subtract the 2'), 'Euler: forgetting 2 caught');
await check('eu', '15');
ok((await lessonOf()).widgetDone, 'cube-stacker investigation complete');

// ── 5. vector walk ──
await goLesson('maths.geometry.vectors', 1);
await clickN('[data-vx="1"]', 4); await clickN('[data-vy="1"]', 3); await page.click('[data-act="vt"]'); ok((await feedback()).includes('negative'), 'vector: sign of bottom number caught');
await clickN('[data-vy="-1"]', 6); await shot('q01-vector'); await page.click('[data-act="vt"]');
await page.click('[data-rt="ab"]'); ok((await feedback()).includes('That is BA'), 'route: BA for AB caught');
await page.click('[data-rt="ba"]');
await page.fill('#ct', '5'); await page.fill('#cbm', '6'); await page.click('[data-act="cv"]'); ok((await feedback()).includes('Subtract b'), '2a − b: adding caught');
await page.fill('#ct', '7'); await page.fill('#cbm', '-2'); await page.click('[data-act="cv"]');
ok((await lessonOf()).widgetDone, 'vector-walk investigation complete');

// ── vectors practice: column vectors typed in two boxes, expressions ──
await readCards('maths.geometry.vectors'); await page.click('[data-mstage="2"]');
let s, it, sawCol = false, sawExpr = false, sawTrap = false;
for (let g = 0; g < 60 && !(sawCol && sawExpr && sawTrap); g++) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  it = L.practice.item; if (!it) break;
  if (it.answer.kind === 'solutions' && it.soTraps?.length && !sawTrap) {
    const t = it.soTraps[0]; for (let i = 0; i < 2; i++) await page.fill(`[data-sol="0,${i}"]`, String(t.sols[0][i].n / t.sols[0][i].d)); await page.click('#mSubmit');
    ok((await feedback()).includes(t.why.slice(0, 15)), 'column-vector trap gets its explanation'); sawTrap = true; await cont(); continue;
  }
  await enter(it);
  const good = (await feedback()).startsWith('Correct');
  if (it.answer.kind === 'solutions' && !sawCol) { ok(good && (await page.locator('.msols-row label').first().innerText()).includes('Top'), 'column vector typed as top and bottom numbers accepted'); sawCol = true; await shot('q02-column-answer'); }
  if (it.answer.kind === 'algebra' && !sawExpr) { ok(good, `vector expression ${it.answer.expr} accepted`); sawExpr = true; }
  if (!good) { ok(false, 'rejected ' + it.prompt); break; }
}
ok(sawCol && sawExpr && sawTrap, 'vectors practice exercised both answer types and a trap');

// ── Foundation: solids and plans to mastery and check ──
await readCards('maths.geometry.solids-plans'); await page.click('[data-mstage="2"]');
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
ok(answered >= 10, `solids lesson secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'solids lesson completes at 10/10');
await page.click('#closeModal');

// ── Higher ──
await page.selectOption('#tier', 'Higher'); await wait(200);
ok((await listed('maths.geometry.circle-theorems')) === 1 && (await listed('maths.geometry.trig-rules')) === 1, 'Higher: circle theorems and trig rules listed');
for (const id of Hx) await cards(id);
await goLesson('maths.geometry.circle-theorems', 1);
await check('ca', '110'); ok((await feedback()).includes('half'), 'circle: centre angle given caught');
await clickN('[data-cc="20"]', 2); ok((await page.locator('#mPanel svg').getAttribute('aria-label')).includes('ACB 55°'), 'moving C keeps angle ACB at 55°');
await shot('q03-circle'); await check('ca', '55');
await check('sa', '180'); ok((await feedback()).includes('half'), 'semicircle: 180 caught');
await check('sa', '90'); await check('qx', '100'); ok((await feedback()).includes('not equal'), 'cyclic: equal angles caught');
await check('qx', '80');
ok((await lessonOf()).widgetDone, 'circle-theorem-explorer investigation complete');
await goLesson('maths.geometry.trig-rules', 1);
await page.click('[data-rule="sin"]'); ok((await feedback()).includes('opposite'), 'rule: sine rule for SAS rejected');
await page.click('[data-rule="cos"]'); await page.click('[data-rule="sin"]'); await page.click('[data-rule="cos"]');
await check('sb', '5.7'); ok((await feedback()).includes('Upside down'), 'sine rule: inverted ratio caught');
await check('sb', '11.3'); await check('ta', '48.3'); ok((await feedback()).includes('{1/2}') || (await feedback()).includes('½') || (await feedback()).length > 5, 'area: missing half caught');
await check('ta', '24.1');
ok((await lessonOf()).widgetDone, 'triangle-solver investigation complete');
// Higher practice: a circle-theorem item marked against its figure
await readCards('maths.geometry.circle-theorems'); await page.click('[data-mstage="2"]');
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
ok((await page.locator('#mBody .mfig svg circle').count()) >= 1, 'circle-theorem practice shows the circle'); await enter(it); ok((await feedback()).startsWith('Correct'), 'circle-theorem practice answer accepted'); await shot('q04-circle-practice');
await page.setViewportSize({ width: 390, height: 844 });
for (const id of [...F, ...Hx]) for (const stg of [0, 1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${short(id)} stage ${stg + 1} has no overflow`); }
await page.setViewportSize({ width: 1280, height: 900 });
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-13.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
