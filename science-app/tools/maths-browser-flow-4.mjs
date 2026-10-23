// Browser walk-through for Algebra batch 1: switching topic from the course map, all six
// investigations with their wrong paths, typed algebra answers (equivalence, form messages, preview,
// unreadable input), a lesson practised to mastery and checked, Foundation/Higher level split,
// topic-scoped assessment and review, reload persistence, science and Number progress untouched,
// and 390px layout. Setup and serving as in maths-browser-flow.mjs.
// Run: node maths-browser-flow-4.mjs <screenshotDir>
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
const rawFor = a => (a.kind === 'choice' ? String(a.answer) : a.kind === 'algebra' ? (a.subject ? `${a.subject} = ${a.expr}` : a.expr) : a.kind === 'integer' ? (a.var ? `${a.var} = ${a.value}` : String(a.value)) : a.kind === 'decimal' ? String(a.value.n / a.value.d) : `${a.value.n}/${a.value.d}`);
async function enter(item, raw) {
  if (item.answer.kind === 'choice') return page.click(`[data-mchoice="${raw}"]`);
  if (item.answer.kind === 'fraction') {
    const neg = raw.startsWith('-'), [n, d] = raw.replace('-', '').split('/');
    const on = await page.locator('[data-msign]').evaluate(e => e.classList.contains('on')); if (on !== neg) await page.click('[data-msign]');
    await page.fill('[data-mw]', ''); await page.fill('[data-mn]', n); await page.fill('[data-md]', d); return page.click('#mSubmit');
  }
  await page.fill('#mText', raw); return page.click('#mSubmit');
}
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }
async function goTopic(id) { await page.click('#mapButton'); await page.click(`[data-mtopic="${id}"]`); await page.click('#closeModal'); }

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
const sciBefore = await page.evaluate(() => localStorage.getItem('crash-course-v2'));
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
ok((await page.locator('#sideProgress').innerText()) === '0 / 15', 'Number topic: 15 lessons');
await goLesson('maths.number.powers', 0);
await page.click('#mapButton');
const mapText = await page.locator('dialog').innerText();
ok(/Algebra/.test(mapText), 'course map links Algebra');
ok(!/Probability|Statistics/.test(mapText), 'unbuilt topics are not listed as available');
await page.click('[data-mtopic="maths.algebra"]');
const listText = await page.locator('dialog').innerText();
ok(listText.includes('TOPIC 02') && listText.includes('Solving linear equations') && !listText.includes('Negative numbers'), 'lesson list is scoped to Algebra');
await page.click('#closeModal');
const algN = Number((await page.locator('#sideProgress').innerText()).split('/ ')[1]);
ok(algN >= 10 && (await page.locator('#sideProgress').innerText()) === `0 / ${algN}`, 'sidebar progress follows the Algebra topic');
ok((await page.locator('#mH1').innerText()).includes('Algebraic notation'), 'first Algebra lesson opens');

const A = ['maths.algebra.notation', 'maths.algebra.simplify', 'maths.algebra.single-brackets', 'maths.algebra.quadratics', 'maths.algebra.linear-equations', 'maths.algebra.formulae'];
for (const id of A) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); ok((await page.locator('#mPanel .mviz-wrap').innerHTML()).length > 80, `${id.split('.').pop()} card ${c + 1} has a visual`); } }
await goLesson('maths.algebra.quadratics', 0); await shot('a01-grid-card');

// ── 1. expression machine ──
await goLesson('maths.algebra.notation', 1);
await page.click('[data-op="+5"]'); await page.click('[data-op="×2"]'); await page.click('[data-act="check"]');
ok((await feedback()).includes('wrong order'), 'machine: right operations in the wrong order explained');
await shot('a02-machine-order');
await page.click('[data-act="clear"]'); await page.click('[data-op="×2"]'); await page.click('[data-op="+5"]'); await page.click('[data-act="check"]');
await wait(900);
await page.click('[data-op="+5"]'); await page.click('[data-op="×2"]'); await page.click('[data-act="check"]'); await wait(900);
await page.fill('#subAns', '-1'); await page.click('[data-act="subcheck"]');
ok((await feedback()).includes('2n + 5'), 'substitution: answer to the unbracketed expression identified');
await page.fill('#subAns', '4'); await page.click('[data-act="subcheck"]');
ok((await lessonOf()).widgetDone, 'expression machine complete');

// ── 2. like-term sorter and index chips ──
await goLesson('maths.algebra.simplify', 1);
await page.click('[data-tile="4"]'); await page.click('[data-bin="a"]');
ok((await feedback()).includes('not the same as a'), 'sorter: a² put with a terms is corrected');
const bins = ['a', 'b', 'a', 'n', 'a2', 'b', 'n', 'a2'];
for (let i = 0; i < 8; i++) { await page.click(`[data-tile="${i}"]`); await page.click(`[data-bin="${bins[i]}"]`); }
await page.fill('#sortAns', '3a^2 + 4a + 6b + 3'); await page.click('[data-act="sortcheck"]');
ok((await feedback()).includes('3a − a = 2a'), 'sorter: sign error in the a group identified');
await page.fill('#sortAns', 'a^2 + 2a^2 + 2a + 6b + 3'); await page.click('[data-act="sortcheck"]');
ok((await feedback()).includes('single term'), 'sorter: uncollected but equivalent answer asked to collect');
await page.fill('#sortAns', '3a² + 2a + 6b + 3'); await page.click('[data-act="sortcheck"]');
await page.click('[data-ix="x^12"]'); ok((await feedback()).includes('3 + 4 = 7'), 'index chips: multiplied indices corrected');
await page.click('[data-ix="x^7"]'); await wait(900);
await page.click('[data-ix="x^5"]'); ok((await feedback()).includes('6 in all'), 'index chips: power of a power corrected');
await page.click('[data-ix="x^6"]'); await wait(900);
ok((await lessonOf()).widgetDone, 'sorter investigation complete');

// ── 3. area model ──
await goLesson('maths.algebra.single-brackets', 1);
await page.fill('#cell0', '3 + x'); await page.fill('#cell1', '12'); await page.click('[data-act="cells"]');
ok((await feedback()).includes('length × width'), 'area model: adding the sides is corrected');
await page.fill('#cell0', '3x'); await page.click('[data-act="cells"]'); await wait(1100);
await page.fill('#cell0', '2x'); await page.fill('#cell1', '6x'); await page.click('[data-act="cells"]');
ok((await feedback()).includes('x × x'), 'area model: x × x as 2x is corrected');
await page.fill('#cell0', 'x^2'); await page.click('[data-act="cells"]'); await wait(1100);
await page.click('[data-fh="1"]'); ok((await feedback()).includes('highest common factor'), 'factorise: factor 1 rejected');
await page.click('[data-fh="5"]'); ok((await feedback()).includes('not a factor of 6'), 'factorise: non-common factor rejected');
await page.click('[data-fh="3"]'); await wait(1300);
await page.click('[data-fh="2"]'); ok((await feedback()).includes('so is x'), 'factorise: partial common factor flagged');
await shot('a03-area-factor');
await page.click('[data-fh="2x"]'); await wait(1300);
ok((await lessonOf()).widgetDone, 'area-model investigation complete');

// ── 4. grid and factor pairs ──
await goLesson('maths.algebra.quadratics', 1);
for (const [i, v] of ['2x', '5x', '3x', '15'].entries()) await page.fill('#g' + i, v);
await page.click('[data-act="grid"]'); ok((await feedback()).includes('x × x'), 'grid: x × x error caught');
await page.fill('#g0', 'x^2'); await page.click('[data-act="grid"]'); await wait(1300);
for (const [i, v] of ['x^2', '2x', '-4x', '8'].entries()) await page.fill('#g' + i, v);
await page.click('[data-act="grid"]'); ok((await feedback()).includes('negative times a positive'), 'grid: sign of the number term caught');
await page.fill('#g3', '-8'); await page.click('[data-act="grid"]'); await wait(1300);
await page.click('[data-pair="1"]'); ok((await feedback()).includes('not 7'), 'factor pairs: right product, wrong sum explained');
await page.click('[data-pair="2"]'); await wait(1000);
await page.click('[data-pair="5"]'); ok((await feedback()).includes('not −1'), 'factor pairs: sign error explained');
await page.click('[data-pair="4"]'); await wait(1000);
ok((await lessonOf()).widgetDone, 'grid investigation complete');

// ── 5. balance ──
await goLesson('maths.algebra.linear-equations', 1);
await page.click('[data-mv="+5"]'); ok((await feedback()).includes('subtract 5'), 'balance: adding 5 explained as unhelpful');
await page.click('[data-act="undo"]'); await page.click('[data-mv="−5"]'); await page.click('[data-mv="÷3"]');
ok((await feedback()).includes('x = 5'), 'balance: 3x + 5 = 20 solved');
await wait(1500);
await page.click('[data-mv="÷5"]'); ok((await feedback()).includes('x on both sides'), 'balance: dividing with x on both sides flagged');
await page.click('[data-act="undo"]'); await page.click('[data-mv="−2x"]');
await shot('a04-balance');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('#mH1').innerText()) === 'Solving linear equations', 'reload: Algebra topic and lesson restored');
ok((await page.locator('#mPanel').innerText()).includes('3x + 3'), 'reload: balance steps restored');
await page.click('[data-mv="−3"]'); await page.click('[data-mv="÷3"]'); await wait(1500);
ok((await lessonOf()).widgetDone, 'balance investigation complete');

// ── 6. reverse machine ──
await goLesson('maths.algebra.formulae', 1);
await page.click('[data-rop="÷ a"]'); ok((await feedback()).includes('undo that first'), 'reverse machine: wrong first inverse explained');
await page.click('[data-rop="− u"]'); await page.click('[data-rop="÷ a"]');
await page.fill('#revAns', 'v - u/a'); await page.click('[data-act="revcheck"]');
ok((await feedback()).includes('divides only u'), 'reverse machine: v − u/a corrected');
await page.fill('#revAns', '(v - u)/a'); await page.click('[data-act="revcheck"]'); await wait(1300);
await page.click('[data-rop="÷ 2"]'); await page.click('[data-rop="− l"]');
await page.fill('#revAns', 'w = P/2 - l'); await page.click('[data-act="revcheck"]'); await wait(1300);
ok((await lessonOf()).widgetDone, 'reverse-machine investigation complete');

// ── typed algebra in practice ──
await goLesson('maths.algebra.single-brackets', 0); for (let i = 0; i < 3; i++) await cont(); // read the three Discover cards
await page.click('[data-mstage="2"]');
let s = await mstate(), it = s.lessons[s.lessonId].practice.item;
ok(it.skill === 'maths.algebra.expand-single', 'practice starts with expanding');
await page.fill('#mText', 'x2'); await page.click('#mSubmit');
ok((await feedback()).includes('use ^ for powers'), 'unreadable input gets a hint');
ok(!(await lessonOf()).practice.answer, 'unreadable input records nothing');
await page.fill('#mText', 'x^2 + 3x');
ok((await page.locator('#mPreview').innerHTML()).includes('<sup'), 'preview renders the typed expression');
const m = it.prompt.match(/^Expand (?:and simplify )?(.+)$/);
await page.fill('#mText', m[1].replace(/−/g, '-')); await page.click('#mSubmit');
ok((await feedback()).includes('multiply out the brackets'), 'expand: copying the bracket back is "right value, wrong form"');
ok((await page.locator('.msolution').count()) === 1, 'worked solution shown after a non-correct answer');
await shot('a05-expand-partial');
await cont();
// Practise the whole lesson to mastery with correct answers, then pass the check.
let guard = 0, answered = 0, sawFactor = false;
while (guard++ < 60) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  it = L.practice.item;
  if (it.skill === 'maths.algebra.factorise-single' && !sawFactor) {
    sawFactor = true;
    await page.fill('#mText', it.prompt.replace(/^Factorise /, '').replace(/−/g, '-')); await page.click('#mSubmit');
    ok((await feedback()).includes('write it as a product'), 'factorise: expanded answer is "right value, wrong form"');
    await cont(); continue;
  }
  await enter(it, rawFor(it.answer));
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'practice rejected ' + it.prompt + ' ← ' + rawFor(it.answer) + ' : ' + (await feedback())); break; }
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
ok(answered >= 16, `two skills and the mixed round secured after ${answered} correct answers`);
await cont(); await cont();
s = await mstate();
const items = s.lessons['maths.algebra.single-brackets'].check.items;
ok(items.length === 10 && items.every(i => i.skill.startsWith('maths.algebra.')), 'check: 10 algebra questions');
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; const ci = c.items[c.index]; await enter(ci, i === 0 ? '0' : rawFor(ci.answer)); await cont(); }
await page.waitForSelector('dialog[open]');
const res = await page.locator('dialog').innerText();
ok(res.includes('9 / 10') && res.includes('Lesson complete'), 'check scored 9/10 and the lesson completes' + (res.includes('Lesson complete') ? '' : ': ' + res.slice(0, 300)));
await shot('a06-check-results');
await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === `1 / ${algN}`, 'Algebra progress 1 / ' + algN);

// ── equations accept "x = …" and fractions ──
await goLesson('maths.algebra.linear-equations', 2);
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
await enter(it, rawFor(it.answer)); ok((await feedback()).startsWith('Correct'), `equation answer accepted as "${rawFor(it.answer)}"`);

// ── rearranging accepts any equivalent form ──
await goLesson('maths.algebra.formulae', 2);
await page.evaluate(k => { const st = JSON.parse(localStorage.getItem(k)); const sk = st.skills['maths.algebra.formula-use'] ||= {}; Object.assign(sk, { level: 3, practised: true, practisedAt: 3, log: [] }); localStorage.setItem(k, JSON.stringify(st)); }, KEY);
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1'); await page.click('[data-mstage="2"]');
s = await mstate(); it = s.lessons[s.lessonId].practice.item;
ok(it.skill === 'maths.algebra.rearrange' && it.answer.kind === 'algebra' && it.answer.subject, 'rearrange item reached');
await page.fill('#mText', `${it.answer.subject}=${it.answer.expr}`); await page.click('#mSubmit');
ok((await feedback()).startsWith('Correct'), `rearrange accepts "${it.answer.subject} = ${it.answer.expr}"`);
await shot('a07-rearrange');

// ── tiers ──
await goLesson('maths.algebra.quadratics', 2);
ok((await page.locator('.mrung').first().innerText()).includes('of 2'), 'Foundation: expanding double brackets has 2 levels');
await page.selectOption('#tier', 'Higher'); await page.waitForTimeout(200);
await goLesson('maths.algebra.quadratics', 2);
ok((await page.locator('.mrung').first().innerText()).includes('of 3'), 'Higher: a third level (three brackets) appears');
await page.selectOption('#tier', 'Foundation'); await page.waitForTimeout(200);

// ── topic-scoped assessment and review ──
await page.click('#assessmentButton'); await page.click('#maBegin');
s = await mstate();
const q = s.runs.assessment.queue;
ok(q.length === 20 && q.every(i => i.skill.startsWith('maths.algebra.')) && new Set(q.map(i => i.skill)).size === 20, 'Algebra assessment: 20 different Algebra skills, no Number skills');
ok((await page.locator('#mSpec').innerText()).includes('Algebra'), 'assessment labelled Algebra');
await page.click('#reviewButton');
const rv = await page.locator('dialog').innerText();
ok(!/Negative|Fraction|Prime/.test(rv), 'review offers only Algebra skills');
await page.click('#closeModal');
await goTopic('maths.number');
ok((await page.locator('#sideProgress').innerText()) === '0 / 15', 'Number progress unaffected');
ok((await page.locator('#mH1').innerText()) === 'Powers, roots and indices', 'Number returns to its last lesson');
s = await mstate();
ok(s.runs.assessment && !s.runs.assessment.finished && s.runs.assessment.topicId === 'maths.algebra', 'unfinished Algebra assessment kept while viewing Number');
ok((await page.locator('#mStatus').innerText()) === '' && !(await page.locator('#mathsContent .steps').isHidden()), 'Number shows its lesson, not the Algebra assessment');
await goTopic('maths.algebra');

// ── science untouched ──
await page.selectOption('#subject', 'science'); await page.waitForTimeout(300);
ok((await page.evaluate(() => localStorage.getItem('crash-course-v2'))) === sciBefore || sciBefore === null, 'science storage unchanged by maths use');
ok((await page.locator('#mathsContent').innerHTML()) === '', 'maths markup cleared when science is shown');
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');

// ── phone ──
await page.setViewportSize({ width: 390, height: 844 });
for (const id of A) for (const stg of [1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${id.split('.').pop()} stage ${stg + 1} has no overflow`); }
await goLesson('maths.algebra.simplify', 1); await shot('a08-phone-sorter');
await goLesson('maths.algebra.formulae', 2); await shot('a09-phone-algebra-input');
await page.setViewportSize({ width: 1280, height: 900 });

ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-4.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
