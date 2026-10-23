// Browser walk-through for Algebra batch 2: sequences, inequalities, quadratic equations and
// simultaneous equations. Covers all four investigations with wrong paths, the new answer inputs
// (solution boxes, coordinate pairs, inequalities, integer lists) with their partial-credit messages,
// a lesson practised to mastery and checked at Foundation (Higher-only skill hidden and topped up),
// Higher-only skills and the 2 d.p. rule, reload persistence, Number/science untouched, and 390px.
// Setup and serving as in maths-browser-flow.mjs. Run: node maths-browser-flow-5.mjs <screenshotDir>
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
const dec2 = v => (v.n / v.d).toFixed(2);
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'algebra') return a.subject ? `${a.subject} = ${a.expr}` : a.expr;
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'list') return a.values.join(', ');
  if (a.kind === 'inequality') return a.set.map(iv => (iv.lo && iv.hi ? `${fval(iv.lo)} ${iv.loIn ? '<=' : '<'} x ${iv.hiIn ? '<=' : '<'} ${fval(iv.hi)}` : iv.lo ? `x ${iv.loIn ? '>=' : '>'} ${fval(iv.lo)}` : `x ${iv.hiIn ? '<=' : '<'} ${fval(iv.hi)}`)).join(' or ');
  if (a.kind === 'solutions') return a.sols.map(r => r.map(v => (a.dp != null ? dec2(v) : fval(v))).join(',')).join(';');
  return fval(a.value);
}
async function enter(item, raw) {
  const a = item.answer;
  if (a.kind === 'choice') return page.click(`[data-mchoice="${raw}"]`);
  if (a.kind === 'solutions') {
    const rows = raw.split(';');
    for (let r = 0; r < a.sols.length; r++) for (let i = 0; i < a.vars.length; i++) await page.fill(`[data-sol="${r},${i}"]`, (rows[r] || '').split(',')[i] ?? '');
    return page.click('#mSubmit');
  }
  if (a.kind === 'fraction') {
    const neg = raw.startsWith('-'), [n, d] = raw.replace('-', '').split('/');
    const on = await page.locator('[data-msign]').evaluate(e => e.classList.contains('on')); if (on !== neg) await page.click('[data-msign]');
    await page.fill('[data-mw]', d ? '' : n); await page.fill('[data-mn]', d ? n : ''); await page.fill('[data-md]', d || ''); return page.click('#mSubmit');
  }
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
const algN = Number((await page.locator('#sideProgress').innerText()).split('/ ')[1]);
ok(algN >= 10 && (await page.locator('#sideProgress').innerText()) === `0 / ${algN}`, 'Algebra progress 0 / ' + algN);
const B2 = ['maths.algebra.sequences', 'maths.algebra.inequalities', 'maths.algebra.quadratic-equations', 'maths.algebra.simultaneous'];
for (const id of B2) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); ok((await page.locator('#mPanel .mviz-wrap').innerHTML()).length > 80, `${id.split('.').pop()} card ${c + 1} has a visual`); } }
await goLesson('maths.algebra.inequalities', 0); await page.click('[data-mcard="3"]'); await shot('c01-quadratic-inequality-card');

// ── 1. matchstick pattern ──
await goLesson('maths.algebra.sequences', 1);
await page.click('[data-diff="4"]'); ok((await feedback()).includes('shares a side'), 'pattern: 4 sticks per square corrected');
await page.click('[data-diff="3"]');
await page.fill('#nthAns', 'n + 3'); await page.click('[data-act="nth"]'); ok((await feedback()).includes('goes with n'), 'pattern: n + 3 corrected');
await page.fill('#nthAns', '3n + 4'); await page.click('[data-act="nth"]'); ok((await feedback()).includes('zero term'), 'pattern: first term used as constant corrected');
await page.fill('#nthAns', '3n+1'); await page.click('[data-act="nth"]');
await page.fill('#p50', '150'); await page.click('[data-act="p50"]'); ok((await feedback()).includes('+ 1'), 'pattern: missing + 1 caught');
await page.fill('#p50', '151'); await page.click('[data-act="p50"]');
await page.click('[data-can="yes"]'); ok((await feedback()).includes('66'), 'pattern: 200 sticks shown impossible');
await page.click('[data-can="no"]');
ok((await lessonOf()).widgetDone, 'pattern investigation complete');

// ── 2. number line and dividing by a negative ──
await goLesson('maths.algebra.inequalities', 1);
await page.click('[data-move="lo,1"]'); await page.click('[data-circle="lo"]'); await page.click('[data-move="lo,1"]'); await page.click('[data-act="line"]');
ok((await feedback()).includes('circles'), 'number line: filled circle for > corrected');
await page.click('[data-circle="lo"]'); await page.click('[data-act="line"]'); await wait(1100);
await page.click('[data-move="lo,-1"]'); await page.click('[data-act="line"]'); ok((await feedback()).includes('to the left'), 'number line: wrong direction explained');
await page.click('[data-end="lo"][data-set="null"]'); await page.click('[data-end="hi"][data-set="0"]'); await page.click('[data-move="hi,-1"]'); await page.click('[data-circle="hi"]');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('#mTitle').innerText()).includes('x ≤ −1') && (await page.locator('#mBody').innerText()).includes('Right end: −1'), 'reload: number-line task and settings restored');
await page.click('[data-act="line"]'); await wait(1100);
await page.click('[data-move="lo,-1"]'); await page.click('[data-move="lo,-1"]'); await page.click('[data-end="hi"][data-set="0"]');
for (let i = 0; i < 4; i++) await page.click('[data-move="hi,1"]');
await page.click('[data-circle="hi"]'); await page.click('[data-act="line"]'); await wait(1100);
await page.click('[data-test="-4"]'); await page.click('[data-act="test"]'); ok((await feedback()).includes('not less than 6'), 'flip: a value that fails is explained');
await page.click('[data-test="-4"]'); for (const v of [-2, -1, 0, 2]) await page.click(`[data-test="${v}"]`); await page.click('[data-act="test"]');
await page.click('[data-sol="x < −3"]'); ok((await feedback()).includes('reverses'), 'flip: not reversing the sign challenged');
await shot('c02-flip');
await page.click('[data-sol="x > −3"]');
ok((await lessonOf()).widgetDone, 'number-line investigation complete');

// ── 3. roots on a graph ──
await goLesson('maths.algebra.quadratic-equations', 1);
await page.click('[data-act="mark"]'); ok((await feedback()).includes('y = −6'), 'roots: non-root rejected with its y value');
await page.click('[data-qx="1"]'); await page.click('[data-qx="1"]'); await page.click('[data-act="mark"]');
await page.click('[data-act="mark"]'); ok((await feedback()).includes('another'), 'roots: same root twice flagged');
for (let i = 0; i < 5; i++) await page.click('[data-qx="-1"]');
await page.click('[data-act="mark"]');
await page.click('[data-zero="1"]'); ok((await feedback()).includes('70'), 'zero rule: setting factors to 10 disproved');
await shot('c03-zero-rule');
await page.click('[data-zero="0"]');
ok((await lessonOf()).widgetDone, 'roots investigation complete');

// ── 4. elimination and intersection ──
await goLesson('maths.algebra.simultaneous', 1);
await page.click('[data-el="sub"]'); ok((await feedback()).includes('still there'), 'elimination: subtracting when signs differ explained');
await page.click('[data-el="add"]'); await page.click('[data-sub="new"]'); ok((await feedback()).includes('original equations'), 'elimination: substitution target corrected');
await page.click('[data-sub="either"]'); await page.fill('#yAns', '-3'); await page.click('[data-act="y"]'); ok((await feedback()).includes('y = 3'), 'elimination: sign slip caught');
await page.fill('#yAns', '3'); await page.click('[data-act="y"]');
for (let i = 0; i < 5; i++) await page.click('[data-mx="1"]'); await page.click('[data-my="1"]');
await page.click('[data-act="meet"]'); ok((await feedback()).includes('but not on x − y = 1'), 'intersection: point on one line only explained');
await page.click('[data-mx="-1"]'); await page.click('[data-my="1"]'); await page.click('[data-my="1"]');
await shot('c04-intersection');
await page.click('[data-act="meet"]');
ok((await lessonOf()).widgetDone, 'intersection investigation complete');

// ── inequalities: inputs, then a full lesson at Foundation ──
await readCards('maths.algebra.inequalities'); await page.click('[data-mstage="2"]');
ok((await page.locator('.mrung').count()) === 3, 'Foundation: two inequality skills plus the mixed round (quadratic inequalities hidden)');
let s = await mstate(), it = s.lessons[s.lessonId].practice.item;
ok(it.answer.kind === 'inequality', 'inequality item reached');
await page.fill('#mText', 'x = 3'); await page.click('#mSubmit'); ok((await feedback()).includes('not an equation'), 'inequality: equation answer refused with a hint');
const ends = it.answer.set.map(iv => ({ ...iv, loIn: iv.lo ? !iv.loIn : iv.loIn, hiIn: iv.hi ? !iv.hiIn : iv.hiIn }));
await enter(it, rawFor({ kind: 'inequality', set: ends })); ok((await feedback()).includes('boundary values are right'), 'inequality: wrong < / ≤ is "right values, check the sign"');
await shot('c05-inequality-partial');
await cont();
let guard = 0, answered = 0, sawList = false;
while (guard++ < 70) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  if (it.answer.kind === 'list' && !sawList) {
    sawList = true;
    await enter(it, it.answer.values.slice(1).join(', ')); ok((await feedback()).includes('missing'), 'integer list: missing end value named');
    await cont(); continue;
  }
  await enter(it, rawFor(it.answer));
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ' ← ' + rawFor(it.answer) + ': ' + (await feedback())); break; }
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
ok(answered >= 16, `inequalities secured after ${answered} correct answers`);
await cont(); await cont();
s = await mstate();
const items = s.lessons['maths.algebra.inequalities'].check.items;
ok(items.length === 10 && items.every(i => i.skill !== 'maths.algebra.ineq-quadratic'), 'Foundation check: 10 questions, no quadratic inequalities (topped up)');
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index], rawFor(c.items[c.index].answer)); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'inequalities lesson completes at 10/10');
await page.click('#closeModal');

// ── quadratic equations: two-box solutions ──
await goLesson('maths.algebra.quadratic-equations', 2);
ok((await page.locator('.mrung').count()) === 1, 'Foundation: only factorising (formula and completing the square hidden)');
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
await page.fill('[data-sol="0,0"]', fval(it.answer.sols[0][0])); await page.click('#mSubmit');
ok((await feedback()).includes('there is another'), 'one of two solutions: "find both"');
await cont();
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
await page.fill('[data-sol="0,0"]', fval(it.answer.sols[1][0])); await page.fill('[data-sol="1,0"]', fval(it.answer.sols[0][0])); await page.click('#mSubmit');
ok((await feedback()).startsWith('Correct'), 'solutions accepted in either order');
await shot('c06-two-solutions');

// ── simultaneous: pairs ──
await goLesson('maths.algebra.simultaneous', 2);
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
const [px, py] = it.answer.sols[0].map(fval);
if (px !== py) { await page.fill('[data-sol="0,0"]', py); await page.fill('[data-sol="0,1"]', px); await page.click('#mSubmit'); ok((await feedback()).includes('wrong way round'), 'swapped x and y diagnosed'); await cont(); }
else ok(true, 'swapped x and y diagnosed (skipped: x = y in this item)');
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
await enter(it, rawFor(it.answer)); ok((await feedback()).startsWith('Correct'), 'simultaneous pair accepted');

// ── Higher: formula to 2 d.p. ──
await page.selectOption('#tier', 'Higher'); await wait(200);
await page.evaluate(k => { const st = JSON.parse(localStorage.getItem(k)); for (const id of ['maths.algebra.quad-solve', 'maths.algebra.quad-complete-square']) Object.assign(st.skills[id] ||= {}, { level: 3, practised: true, practisedAt: 3, log: [] }); localStorage.setItem(k, JSON.stringify(st)); }, KEY);
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
await goLesson('maths.algebra.quadratic-equations', 2);
ok((await page.locator('.mrung').count()) === 4, 'Higher: three quadratic skills plus the mixed round');
if ((await mstate()).lessons['maths.algebra.quadratic-equations'].practice.answer) await cont(); // an answered question stays until Next
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
ok(it.skill === 'maths.algebra.quad-formula', 'Higher: quadratic formula item reached');
const off = it.answer.sols.map(r => (r[0].n / r[0].d + 0.001).toFixed(3));
await page.fill('[data-sol="0,0"]', off[0]); await page.fill('[data-sol="1,0"]', off[1]); await page.click('#mSubmit');
ok((await feedback()).includes('rounded'), '2 d.p. rule: unrounded values asked to round');
await shot('c07-formula-rounding');
await cont(); s = await mstate(); it = s.lessons[s.lessonId].practice.item;
await enter(it, rawFor(it.answer)); ok((await feedback()).startsWith('Correct'), 'formula answers to 2 d.p. accepted');
await goLesson('maths.algebra.sequences', 2);
ok((await page.locator('.mrung').count()) === 5, 'Higher: quadratic nth term appears in sequences');
await page.selectOption('#tier', 'Foundation'); await wait(200);

// ── untouched elsewhere ──
await goTopic('maths.number');
ok((await page.locator('#sideProgress').innerText()) === '0 / 15', 'Number progress unaffected');
await goTopic('maths.algebra');
ok((await page.locator('#sideProgress').innerText()) === `1 / ${algN}`, 'Algebra progress 1 / ' + algN);
await page.selectOption('#subject', 'science'); await wait(300);
ok((await page.evaluate(() => localStorage.getItem('crash-course-v2'))) === sciBefore || sciBefore === null, 'science storage unchanged');
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');

// ── phone ──
await page.setViewportSize({ width: 390, height: 844 });
for (const id of B2) for (const stg of [1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${id.split('.').pop()} stage ${stg + 1} has no overflow`); }
await goLesson('maths.algebra.simultaneous', 2); await shot('c08-phone-pairs');
await goLesson('maths.algebra.inequalities', 1); await shot('c09-phone-numberline');
await page.setViewportSize({ width: 1280, height: 900 });

ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-5.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
