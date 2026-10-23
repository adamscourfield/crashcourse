// Browser walk-through for Probability: course map and topic, card visuals, all four investigations
// with wrong paths, resume, fraction answers (unsimplified accepted), Venn/tree figures in practice,
// Foundation mastery and check, the Higher-only conditional skill hidden at Foundation, 390px.
// Run: node maths-browser-flow-14.mjs <dir>
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
async function enter(item, override) {
  const a = item.answer;
  if (a.kind === 'choice') return page.click(`[data-mchoice="${a.answer}"]`);
  if (a.kind === 'fraction') { const [n, d] = override || [a.value.n, a.value.d]; if (d === 1) { await page.fill('[data-mw]', String(n)); await page.fill('[data-mn]', ''); await page.fill('[data-md]', ''); } else { await page.fill('[data-mw]', ''); await page.fill('[data-mn]', String(n)); await page.fill('[data-md]', String(d)); } return page.click('#mSubmit'); }
  const raw = a.kind === 'integer' ? String(a.value) : String(+(a.value.n / a.value.d).toFixed(8));
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
ok(/Probability/.test(mapTxt) && !/Statistics/.test(mapTxt), 'course map links Probability; Statistics not yet listed');
await page.click('[data-mtopic="maths.probability"]'); await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === '0 / 4', 'Probability has 4 lessons at Foundation');
const P = ['maths.probability.basics', 'maths.probability.sample-spaces', 'maths.probability.tree-diagrams', 'maths.probability.conditional'];
for (const id of P) {
  await goLesson(id, 0);
  ok((await page.locator('#mCalc').textContent()) === 'Non-calculator', `${short(id)}: non-calculator`);
  const n = await page.locator('[data-mcard]').count();
  for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); const html = await page.locator('#mPanel .mviz-wrap').innerHTML(); ok(html.length > 60 && !/NaN|undefined/.test(html), `${short(id)} card ${c + 1} has a visual`); }
}
await goLesson('maths.probability.tree-diagrams', 0); await page.click('[data-mcard="2"]'); await shot('r01-tree-card');

// ── 1. coin tosser ──
await goLesson('maths.probability.basics', 1);
for (let i = 0; i < 5; i++) await page.click('[data-act="toss"]');
await shot('r02-coin');
await check('rf', '500'); ok((await feedback()).includes('proportion'), 'coin: count of heads given for a proportion caught');
await page.fill('#rf', '0.5');
await page.reload({ waitUntil: 'networkidle' }); await page.waitForSelector('#mH1');
ok((await page.locator('#rf').inputValue()) === '0.5', 'reload keeps the tosses and the typed answer');
await page.click('[data-act="rf"]');
await check('es', '300'); ok((await feedback()).includes('1 of 6'), 'expected sixes: halving caught');
await check('es', '100'); await check('pd', '0.75'); ok((await feedback()).includes('Subtract it from 1'), 'missing probability: total given caught');
await check('pd', '0.25');
ok((await lessonOf()).widgetDone, 'coin-tosser investigation complete');

// ── 2. dice grid ──
await goLesson('maths.probability.sample-spaces', 1);
await check('p7', '1/11'); ok((await feedback()).includes('not equally likely'), 'grid: 1/11 caught');
await page.click('[data-gt="1"]'); await page.click('[data-gt="-1"]'); await shot('r03-grid');
await check('p7', '6/36');
await check('pr', '7'); ok((await feedback()).includes('multiply'), 'product rule: adding caught');
await check('pr', '12'); await check('vn', '0'); ok((await feedback()).includes('twice'), 'Venn: double counting caught');
await check('vn', '5');
ok((await lessonOf()).widgetDone, 'dice-grid investigation complete');

// ── 3. tree builder ──
await goLesson('maths.probability.tree-diagrams', 1);
await check('tb', '3/5'); ok((await feedback()).includes('with replacement'), 'tree: replacement probability caught');
await page.click('[data-act="sw"]'); ok((await page.locator('#mPanel svg').getAttribute('aria-label')).includes('without'), 'switching to without replacement redraws the tree');
await shot('r04-tree'); await check('tb', '2/4');
await check('bb', '9/25'); ok((await feedback()).includes('with replacement'), 'both red: replacement used caught');
await check('bb', '3/10'); await check('al', '3/10'); ok((await feedback()).includes('At least one'), 'at least one: both-red only caught');
await check('al', '9/10');
ok((await lessonOf()).widgetDone, 'tree-builder investigation complete');

// ── 4. conditional filter at Foundation: two-way table only ──
await goLesson('maths.probability.conditional', 1);
await check('tw', '44'); ok((await feedback()).includes('Year 10 row'), 'two-way: wrong row caught');
await check('tw', '36');
ok((await lessonOf()).widgetDone, 'Foundation: conditional-filter completes after the two-way table');

// ── practice: fractions (unsimplified accepted), figures ──
await readCards('maths.probability.tree-diagrams'); await page.click('[data-mstage="2"]');
let s, it, sawUnsimp = false, sawTree = false, sawTrap = false;
for (let g = 0; g < 50 && !(sawUnsimp && sawTree && sawTrap); g++) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.practice.answer) { await cont(); continue; }
  it = L.practice.item; if (!it) break;
  if (it.fig && !sawTree) { ok((await page.locator('#mBody .mfig svg').count()) === 1, 'practice item shows its tree diagram'); sawTree = true; await shot('r05-tree-practice'); }
  if (it.answer.kind === 'fraction' && it.traps?.length && !sawTrap) { const t = it.traps[0]; await enter(it, [t.v.n, t.v.d]); ok((await feedback()).includes(t.why.slice(0, 20)), 'probability trap explained'); sawTrap = true; await cont(); continue; }
  if (it.answer.kind === 'fraction' && it.answer.value.d > 1 && !sawUnsimp) { await enter(it, [it.answer.value.n * 2, it.answer.value.d * 2]); ok((await feedback()).startsWith('Correct'), 'unsimplified probability fraction accepted'); sawUnsimp = true; continue; }
  await enter(it);
}
ok(sawUnsimp && sawTree && sawTrap, 'tree practice exercised figures, traps and unsimplified fractions');

// ── Foundation: basics to mastery and check ──
await readCards('maths.probability.basics'); await page.click('[data-mstage="2"]');
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
ok(answered >= 10, `basics lesson secured after ${answered} correct answers`);
await cont(); await cont();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index]); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'basics lesson completes at 10/10');
await page.click('#closeModal');
ok((await page.locator('#sideProgress').innerText()) === '1 / 4', 'Probability progress 1 / 4');

// ── tiers: conditional skill only at Higher ──
await goLesson('maths.probability.conditional', 2);
ok((await page.locator('.mrung').count()) === 1 && !/Conditional/.test((await page.locator('.mrung').allInnerTexts()).join(' ')), 'Foundation: conditional probability skill hidden (one skill, no mixed round needed)');
await page.selectOption('#tier', 'Higher'); await wait(200);
await goLesson('maths.probability.conditional', 2);
ok((await page.locator('.mrung').count()) === 3 && /Conditional/.test(await page.locator('#mBody').innerText()), 'Higher: conditional probability skill shown');
await goLesson('maths.probability.conditional', 1);
await page.click('[data-act="hl"]'); await check('gv', '44/120'); ok((await feedback()).includes('Given bus'), 'Higher: joint probability for conditional caught');
await shot('r06-given'); await check('gv', '44/80');
await check('vc', '3/8'); ok((await feedback()).includes('P(A | B)'), 'Higher: reversed condition caught');
await check('vc', '3/10');
ok((await lessonOf()).widgetDone, 'Higher: conditional-filter investigation complete');
await page.setViewportSize({ width: 390, height: 844 });
for (const id of P) for (const stg of [0, 1, 2]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${short(id)} stage ${stg + 1} has no overflow`); }
await page.setViewportSize({ width: 1280, height: 900 });
ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-14.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
