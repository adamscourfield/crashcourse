// Browser walk-through for Algebra batch 4: functions, algebraic fractions, proof, iteration and
// forming equations. All five investigations with wrong paths, worked-example visuals, partial
// marking of uncancelled fractions, the calculator badge, tier split, investigation resume after
// reload, a lesson practised to mastery and checked, and 390px layouts.
// Setup and serving as in maths-browser-flow.mjs. Run: node maths-browser-flow-7.mjs <screenshotDir>
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
  const raw = a.kind === 'algebra' ? a.expr : a.kind === 'list' ? a.values.join(', ') : a.kind === 'integer' ? String(a.value) : (a.value.n / a.value.d).toFixed(a.dp ?? 3);
  await page.fill('#mText', raw); return page.click('#mSubmit');
}
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }
async function readCards(id) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let i = 0; i < n; i++) await cont(); }
const short = id => id.split('.').pop();

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
const sciBefore = await page.evaluate(() => localStorage.getItem('crash-course-v2'));
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
await page.click('#mapButton');
ok(/Algebra\s*18 lessons available/.test(await page.locator('dialog').innerText()), 'Foundation course map: Algebra has 18 lessons');
await page.click('[data-mtopic="maths.algebra"]'); await page.click('#closeModal');
await page.click('#lessonNav');
const listF = (await page.locator('dialog .lesson-row').allInnerTexts()).join(' | ');
ok(listF.includes('Forming and solving equations') && listF.includes('Functions:') && listF.includes('Identities, show that'), 'Foundation list: forming equations, functions and proof lessons');
ok(!/Algebraic fractions|iteration/i.test(listF), 'Foundation list: Higher-only fractions and iteration lessons hidden');
await page.click('#closeModal');
await page.selectOption('#tier', 'Higher'); await wait(200);
await page.click('#mapButton');
ok(/Algebra\s*20 lessons available/.test(await page.locator('dialog').innerText()), 'Higher course map: Algebra has 20 lessons');
await page.click('[data-mtopic="maths.algebra"]'); await page.click('#closeModal');

const B4 = ['maths.algebra.forming-equations', 'maths.algebra.functions', 'maths.algebra.proof', 'maths.algebra.algebraic-fractions', 'maths.algebra.iteration'];
for (const id of B4) {
  await goLesson(id, 0);
  const n = await page.locator('[data-mcard]').count();
  for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); const html = await page.locator('#mPanel .mviz-wrap').innerHTML(); ok(html.length > 60 && !/NaN|undefined/.test(html), `${short(id)} card ${c + 1} has a visual`); }
}
await goLesson('maths.algebra.iteration', 0);
ok((await page.locator('#mCalc').textContent()) === 'Calculator', 'iteration lesson shows the calculator badge');
await page.click('[data-mcard="2"]'); await shot('e01-iteration-cobweb');
ok((await page.locator('#mBody sub').count()) > 0, 'subscripts render in the iteration text');
await goLesson('maths.algebra.functions', 0);
ok((await page.locator('#mCalc').textContent()) === 'Non-calculator', 'other lessons stay non-calculator');

// ── 1. function machine ──
await goLesson('maths.algebra.functions', 1);
await page.fill('[data-fy="0"]', '-6'); await page.fill('[data-fy="1"]', '11'); await page.fill('[data-fy="2"]', '-7');
await page.click('[data-act="fwd"]'); ok((await feedback()).includes('× 3 comes first'), 'machine: subtracting first is caught');
await page.fill('[data-fy="0"]', '2'); await page.click('[data-act="fwd"]');
await page.click('[data-rv="3"]'); await page.click('[data-rv="0"]'); await page.click('[data-act="rev"]');
ok((await feedback()).includes('undo the last operation'), 'reverse machine: wrong order of inverses caught');
await page.click('[data-act="clear"]'); await page.click('[data-rv="1"]'); await page.click('[data-rv="2"]'); await page.click('[data-act="rev"]');
ok((await feedback()).includes('inverse of − 4 is + 4'), 'reverse machine: non-inverse operations caught');
await page.click('[data-act="clear"]'); await page.click('[data-rv="0"]'); await page.click('[data-rv="3"]'); await page.click('[data-act="rev"]');
await page.fill('#fx', '3(x-4)'); await page.click('[data-act="expr"]'); ok((await feedback()).includes('second machine'), 'expression: other machine order explained');
await shot('e02-function-machine');
await page.fill('#fx', '3x - 4'); await page.click('[data-act="expr"]');
ok((await lessonOf()).widgetDone, 'function-machine investigation complete');

// ── 2. fraction cancelling ──
await goLesson('maths.algebra.algebraic-fractions', 1);
await page.fill('#fv', '42'); await page.click('[data-act="val"]'); ok((await feedback()).includes('Divide it by the bottom'), 'fraction value: numerator only caught');
await page.fill('#fv', '7'); await page.click('[data-act="val"]');
await page.click('[data-cd="1"]'); ok((await feedback()).includes('whole top'), 'cancelling a term: explained by its value at x = 4');
await page.click('[data-cd="0"]');
await page.fill('#ff', 'x^2+5x+6'); await page.click('[data-act="fac"]'); ok((await feedback()).includes('two brackets'), 'factorise: unfactorised form rejected');
await page.fill('#ff', '(x+2)(x+3)'); await page.click('[data-act="fac"]');
ok((await lessonOf()).widgetDone, 'fraction-cancel investigation complete');

// ── 3. proof builder, with resume after reload ──
await goLesson('maths.algebra.proof', 1);
for (const n of ['4', '4', '10', '-3']) { await page.fill('#pn', n); await page.click('[data-act="try"]'); }
ok((await feedback()).includes('do not show it works'), 'proof: three examples are not a proof');
await page.click('[data-pl="4"]'); ok((await feedback()).includes('one example'), 'proof: example line rejected');
await page.click('[data-pl="2"]'); ok((await feedback()).includes('naming the numbers'), 'proof: out-of-order line rejected');
await page.click('[data-pl="0"]'); await page.click('[data-pl="1"]');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('.mproof li').count()) === 2, 'reload keeps a part-built proof');
await page.click('[data-pl="2"]'); await page.click('[data-pl="3"]');
await page.fill('#cn', '3'); await page.click('[data-act="ce"]'); ok((await feedback()).includes('is prime'), 'counterexample: a prime value is not a counterexample');
await page.fill('#cn', '10'); await page.click('[data-act="ce"]');
ok((await lessonOf()).widgetDone, 'proof-builder investigation complete');

// ── 4. iteration ──
await goLesson('maths.algebra.iteration', 1);
await page.fill('#sa', '2'); await page.fill('#sb', '7'); await page.click('[data-act="sign"]'); ok((await feedback()).includes('f(1)'), 'sign change: wrong f(1) caught');
await page.fill('#sa', '-2'); await page.click('[data-act="sign"]');
await page.fill('#rt', '1.33'); await page.click('[data-act="root"]'); ok((await feedback()).includes('Iterate a few more'), 'iteration: answering before iterating is refused');
for (let i = 0; i < 5; i++) await page.click('[data-act="step"]');
ok((await page.locator('#mPanel tbody tr').count()) === 6, 'iteration table shows x0 to x5');
await shot('e03-iteration-stepper');
await page.fill('#rt', '1.3'); await page.click('[data-act="root"]'); ok((await feedback()).length > 10, 'iteration: under-rounded answer gets feedback');
await page.fill('#rt', '1.33'); await page.click('[data-act="root"]');
await page.click('[data-x0="2"]'); await page.click('[data-same="0"]'); ok((await feedback()).includes('settle'), 'iteration: different-start claim corrected');
await page.click('[data-same="1"]');
ok((await lessonOf()).widgetDone, 'iteration investigation complete');

// ── 5. forming an equation ──
await goLesson('maths.algebra.forming-equations', 1);
await page.click('[data-eq="1"]'); ok((await feedback()).includes('180°'), 'equation: 360° total corrected');
await page.click('[data-eq="3"]'); ok((await feedback()).includes('numbers too'), 'equation: dropped constant corrected');
await page.click('[data-eq="0"]');
await page.fill('#sx', '50'); await page.click('[data-act="sx"]'); ok((await feedback()).includes('Subtract 20'), 'solve: dividing first caught');
await page.fill('#sx', '40'); await page.click('[data-act="sx"]');
await page.fill('#la', '40'); await page.click('[data-act="la"]'); ok((await feedback()).includes('smallest angle'), 'interpret: giving x instead of the angle caught');
await page.fill('#la', '80'); await page.click('[data-act="la"]');
ok((await lessonOf()).widgetDone, 'equation-builder investigation complete');

// ── algebraic-fraction practice: an uncancelled answer is partly right ──
await goLesson('maths.algebra.algebraic-fractions', 2);
let s = await mstate(), it = s.lessons[s.lessonId].practice.item;
ok(it.skill === 'maths.algebra.afrac-simplify', 'fractions practice starts with simplifying');
const q = it.prompt.replace('Simplify fully ', '').replace(/^\{(.+)\/(.+)\}$/, '($1)/($2)').replace(/−/g, '-');
await page.fill('#mText', q); await page.click('#mSubmit');
ok(/common factor|single fraction|Right value|equivalent/i.test(await feedback()), 'copying the question back is marked as not yet simplified: ' + (await feedback()).slice(0, 80));
await shot('e04-fraction-partial');

// ── iteration practice: calculator badge on items ──
await goLesson('maths.algebra.iteration', 2);
ok(/^Calculator$/m.test((await page.locator('.mq-meta .mbadge').allTextContents()).join('\n')), 'iteration practice items carry the calculator badge');

// ── tiers ──
await goLesson('maths.algebra.functions', 2);
ok((await page.locator('.mrung').count()) === 4, 'Higher: three function skills plus mixed');
await goLesson('maths.algebra.proof', 2);
ok((await page.locator('.mrung').count()) === 4, 'Higher: identities, show that and proof plus mixed');
await page.selectOption('#tier', 'Foundation'); await wait(200);
await goLesson('maths.algebra.functions', 2);
ok((await page.locator('.mrung').count()) === 1, 'Foundation: function machines only');
await goLesson('maths.algebra.proof', 2);
ok((await page.locator('.mrung').count()) === 3, 'Foundation: identities and show that plus mixed (proof hidden)');

// ── forming equations practised to mastery, then checked (Foundation) ──
await readCards('maths.algebra.forming-equations'); await page.click('[data-mstage="2"]');
let guard = 0, answered = 0, wrongOnce = false;
while (guard++ < 90) {
  s = await mstate(); const L = s.lessons[s.lessonId];
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  if (!wrongOnce && it.answer.kind === 'integer' && it.traps?.length) {
    wrongOnce = true; const t = it.traps[0].v;
    await page.fill('#mText', fval(t)); await page.click('#mSubmit');
    ok((await feedback()).includes(it.traps[0].why.slice(0, 25)), 'forming equations: trap answer gets its explanation');
    await cont(); continue;
  }
  await enter(it);
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ': ' + (await feedback())); break; }
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
ok(answered >= 12, `forming equations secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'forming equations lesson completes at 10/10');
await page.click('#closeModal');

await page.selectOption('#subject', 'science'); await wait(300);
ok((await page.evaluate(() => localStorage.getItem('crash-course-v2'))) === sciBefore || sciBefore === null, 'science storage unchanged');
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');

// ── phone ──
await page.selectOption('#tier', 'Higher'); await wait(200);
await page.setViewportSize({ width: 390, height: 844 });
for (const id of B4) for (const stg of [0, 1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${short(id)} stage ${stg + 1} has no overflow`); }
await goLesson('maths.algebra.proof', 1); await shot('e05-phone-proof');
await page.setViewportSize({ width: 1280, height: 900 });

ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-7.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
