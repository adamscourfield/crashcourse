// Browser walk-through of the maths pilot (87 checks): every investigation and its wrong paths,
// practice to mastery, check/retake, review, assessment, reload persistence, 390px layout and
// science regression. Not part of `npm test`.
// Setup (outside the repo): npm i playwright @sparticuz/chromium
// Serve:  python3 -m http.server 4173 --directory science-app/dist
// Run:    node maths-browser-flow.mjs <screenshotDir>   (from the folder with node_modules)
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
page.on('requestfailed', r => { if (!/fonts\.(googleapis|gstatic)\.com/.test(r.url())) errors.push('request failed ' + r.url()); });
page.on('pageerror', e => errors.push(String(e)));

const mstate = () => page.evaluate(k => JSON.parse(localStorage.getItem(k) || 'null'), KEY);
const feedback = () => page.locator('#mFeedback').innerText();
// Continue may be hidden (unanswered question) or already auto-advanced; both are fine.
const cont = async () => { const b = page.locator('#mContinue'); if (await b.isVisible()) await b.click({ timeout: 2000 }).catch(() => {}); };
const shot = name => page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });

const g = (x, y) => (y ? g(y, x % y) : Math.abs(x));
function decText(n, d, places = null) {
  let dd = d, k = 0; while (dd % 10 === 0) { dd /= 10; k++; } while (dd % 2 === 0) { dd /= 2; k++; } while (dd % 5 === 0) { dd /= 5; k++; }
  if (dd !== 1) return null;
  const P = places ?? k, sc = Math.round((Math.abs(n) * 10 ** P) / d);
  let t = String(sc).padStart(P + 1, '0'); if (P) t = t.slice(0, -P) + '.' + t.slice(-P);
  return (n < 0 ? '-' : '') + t;
}
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'decimal') { const v = Math.abs(a.value.n / a.value.d); const p = a.dp ?? (a.sf != null && v ? Math.max(0, a.sf - 1 - Math.floor(Math.log10(v) + 1e-12)) : null); return decText(a.value.n, a.value.d, p); }
  if (a.kind === 'standard') return `${decText(a.a.n, a.a.d)}|${a.n}`;
  if (a.kind === 'power') return `${a.base}|${a.exp}`;
  if (a.kind === 'interval') return `${decText(a.lo.n, a.lo.d)}|${a.loIn ? '≤' : '<'}|${a.hiIn ? '≤' : '<'}|${decText(a.hi.n, a.hi.d)}`;
  if (a.kind === 'ratio') return a.parts.join(':');
  if (a.kind === 'exact') return `${a.a.n}/${a.a.d}${a.b.n < 0 ? '-' : '+'}${Math.abs(a.b.n)}${a.r === 'pi' ? 'π' : '√' + a.r}/${a.b.d}`;
  if (a.kind === 'primes') return Object.entries(a.value).map(([p, k]) => (k > 1 ? `${p}^${k}` : p)).join(' x ');
  let { n, d } = a.value; const h = g(n, d); n /= h; d /= h;
  if (d === 1) return String(n);
  const neg = n < 0, A = Math.abs(n);
  if (a.form === 'mixed' && A > d) return `${neg ? '-' : ''}${Math.floor(A / d)} ${A % d}/${d}`;
  return `${neg ? '-' : ''}${A}/${d}`;
}
async function setSign(sel, neg) { const on = await page.locator(sel).evaluate(e => e.classList.contains('on')); if (on !== neg) await page.click(sel); }
async function enter(item, raw) {
  const a = item.answer;
  if (a.kind === 'choice') return page.click(`[data-mchoice="${raw}"]`);
  if (a.kind === 'standard') { const [m, n] = raw.split('|'); await page.fill('[data-sa]', m); await setSign('[data-mexpsign]', n.startsWith('-')); await page.fill('[data-sn]', n.replace('-', '')); return page.click('#mSubmit'); }
  if (a.kind === 'power') { const [b, e] = raw.split('|'); await page.fill('[data-pb]', b); await setSign('[data-mexpsign]', e.startsWith('-')); await page.fill('[data-pe]', e.replace('-', '')); return page.click('#mSubmit'); }
  if (a.kind === 'interval') {
    const [lo, o1, o2, hi] = raw.split('|');
    await page.fill('[data-ilo]', lo); await page.fill('[data-ihi]', hi);
    for (const [k, o] of [['lo', o1], ['hi', o2]]) if ((await page.locator(`[data-iop="${k}"]`).innerText()) !== o) await page.click(`[data-iop="${k}"]`);
    return page.click('#mSubmit');
  }
  if (a.kind === 'fraction') {
    const neg = raw.startsWith('-'), r = raw.replace(/^-/, '');
    let w = '', n = '', d = '';
    if (r.includes('/')) { const m = r.match(/^(?:(\d+) )?(\d+)\/(\d+)$/); [w, n, d] = [m[1] || '', m[2], m[3]]; } else w = r;
    await setSign('[data-msign]', neg);
    await page.fill('[data-mw]', w); await page.fill('[data-mn]', n); await page.fill('[data-md]', d);
    return page.click('#mSubmit');
  }
  await page.fill('#mText', raw);
  return page.click('#mSubmit');
}
const wrongFor = item => {
  const a = item.answer;
  if (a.kind === 'choice') return String((a.answer + 1) % a.options.length);
  if (item.traps?.length) { const t = item.traps[0].v; return t.d === 1 ? String(t.n) : `${t.n}/${t.d}`; }
  if (a.kind === 'primes') return '2 x 3 x 7 x 11';
  if (a.kind === 'integer') return String(a.value + 1);
  return `${a.value.n + 1}/${a.value.d}`;
};
const lessonOf = async () => { const s = await mstate(); return s.lessons[s.lessonId]; };
const noOverflow = () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);

// ── open the app, switch to maths ──
await page.goto(URL);
await page.evaluate(() => localStorage.clear());
await page.goto(URL);
const sciTitleBefore = await page.locator('#scienceContent .intro h1').innerText();
const sciBefore = await page.evaluate(() => JSON.parse(localStorage.getItem('crash-course-v2')));
await page.selectOption('#subject', 'maths');
await page.waitForSelector('#mH1');
ok((await page.locator('#mH1').innerText()) === 'Negative numbers', 'maths opens on lesson 1 Negative numbers');
ok(await page.locator('#route').isHidden(), 'science pathway select hidden in maths');
ok((await page.locator('#courseName').innerText()).includes('Edexcel'), 'sidebar names Edexcel course');
ok((await page.locator('#sideProgress').innerText()) === '0 / 15', 'sidebar shows 0 / 15 maths lessons');
await shot('m01-discover');

// ── discover: reveal steps and read all cards ──
await page.click('#mReveal');
ok(await page.locator('.msteps li:not([hidden])').count() === 1, 'worked example reveals one step at a time');
for (let i = 0; i < 4; i++) await cont();
let p = await lessonOf();
ok(p.stage === 1 && p.seen.length === 4, 'all four explanation cards seen, moved to Investigate');

// ── investigate: negatives model, with wrong paths ──
await cont();
ok((await feedback()).includes('Complete the investigation'), 'cannot skip the investigation');
await page.click('[data-act="start"]');
ok((await feedback()).includes('starts at −3'), 'wrong start position rejected with guidance');
for (let i = 0; i < 3; i++) await page.click('[data-mv="-1"]');
await page.click('[data-act="start"]');
await page.click('[data-dir="left"]');
ok((await feedback()).includes('moves right'), 'wrong direction for "+5" explained');
await page.click('[data-dir="right"]');
await shot('m02-number-line');
await page.click('[data-act="next"]');
const tasks = [[2, 'left'], [-1, 'right'], [-2, 'left']];
for (const [start, dir] of tasks) {
  const cur = (await lessonOf()).widget.neg.marker;
  for (let i = 0; i < Math.abs(start - cur); i++) await page.click(`[data-mv="${start > cur ? 1 : -1}"]`);
  await page.click('[data-act="start"]');
  if (start === -1) { await page.click('[data-dir="left"]'); ok((await feedback()).includes('Taking away a negative'), 'subtracting a negative: misconception feedback shown'); }
  await page.click(`[data-dir="${dir}"]`);
  await page.click('[data-act="next"]');
}
await page.fill('#pt3', '0'); await page.fill('#pt4', '-2'); await page.fill('#pt5', '-4'); await page.fill('#pt6', '-6');
await page.click('[data-act="pattern"]');
ok((await feedback()).includes('increasing by 2'), 'pattern: negative × negative = negative is challenged');
await page.reload(); await page.waitForSelector('#mH1');
ok((await page.inputValue('#pt4')) === '-2', 'investigation drafts survive reload');
await page.fill('#pt4', '2'); await page.fill('#pt5', '4'); await page.fill('#pt6', '6');
await page.click('[data-act="pattern"]');
p = await lessonOf();
ok(p.widgetDone === true, 'negatives investigation complete');
await cont();

// ── practise: generated items, a wrong answer, a worked example, reload, then mastery ──
let s = await mstate(); let item = s.lessons[s.lessonId].practice.item;
ok(!!item && item.skill === 'maths.number.negatives.compare', 'practice starts with the first skill');
await page.click('#mExample');
s = await mstate();
ok(s.lessons[s.lessonId].practice.assisted === true && await page.locator('.mexample.assisted').count() === 1, 'worked example shown and attempt marked assisted');
item = s.lessons[s.lessonId].practice.item;
await enter(item, wrongFor(item));
ok(await page.locator('.msolution').count() === 1, 'wrong answer shows the worked solution');
ok((await feedback()).length > 30, 'wrong answer gets targeted feedback: ' + (await feedback()).slice(0, 90));
await shot('m03-practice-wrong');
await page.reload(); await page.waitForSelector('#mH1');
ok(await page.locator('.msolution').count() === 1, 'answered practice item and solution survive reload');
let answered = 0, guard = 0, sawTrap = false, sawLevelUp = false;
while (guard++ < 120) {
  s = await mstate(); const L = s.lessons[s.lessonId]; if (L.stage === 3) break;
  if (L.stage !== 2) break;
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) { await cont(); continue; }
  item = L.practice.item;
  if (answered === 7 && item.traps?.length) { await enter(item, wrongFor(item)); sawTrap = (await feedback()).includes(item.traps[0].why.slice(0, 25)); answered++; continue; }
  await enter(item, rawFor(item.answer));
  const fb = await feedback();
  if (!fb.startsWith('Correct')) { ok(false, 'own answer not accepted in browser: ' + item.prompt + ' → ' + rawFor(item.answer) + ' :: ' + fb); break; }
  if (fb.includes('Level up')) sawLevelUp = true;
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
ok(sawTrap, 'a trap answer produced its specific misconception message');
ok(sawLevelUp, 'level-up message shown');
s = await mstate();
ok(['maths.number.negatives.compare', 'maths.number.negatives.add-subtract', 'maths.number.negatives.multiply-divide'].every(id => s.skills[id].practised) && s.lessons[s.lessonId].mixed.done, `all three skills secure and mixed round passed after ${answered} answers`);
ok(answered >= 22, `practice demanded substantial volume: ${answered} answers`);
await shot('m04-practice-complete');
await cont();

// ── check: first answers count, one wrong, results, retake with new questions ──
await cont();
s = await mstate();
const check1 = s.lessons[s.lessonId].check;
ok(check1.items.length === 10, 'independent check has 10 generated items');
for (let i = 0; i < 10; i++) {
  s = await mstate(); const c = s.lessons[s.lessonId].check; const it = c.items[c.index];
  if (i === 2) ok(!(await page.locator('#mContinue').isVisible()), 'check cannot be skipped: no Continue until an answer is recorded');
  await enter(it, i < 3 ? wrongFor(it) : rawFor(it.answer));
  ok(i > 0 || (await feedback()) === 'Answer recorded.', 'check gives no correctness hint');
  if (i === 0) { await page.reload(); await page.waitForSelector('#mH1'); ok(await page.locator('#mSubmit').count() === 0 && await page.locator('[data-mchoice][disabled], .mtext[disabled], fieldset[disabled]').count() >= 1, 'first check answer locked after reload'); }
  await cont();
}
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog h2').innerText()).startsWith('7 / 10'), 'check scored 7/10: ' + await page.locator('dialog h2').innerText());
ok((await page.locator('dialog').innerText()).includes('at least 80%'), 'below 80% explains what is pending');
await shot('m05-check-results');
await page.click('#mrRetake');
s = await mstate();
const check2 = s.lessons[s.lessonId].check;
ok(check2.items.every(it => !check1.items.some(o => o.prompt === it.prompt && o.seed === it.seed)), 'retake uses fresh questions');
const weak = Object.values(s.skills).filter(k => k.needsReview).length;
ok(weak >= 1, 'missed check items flag skills for recall');
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; await enter(c.items[c.index], rawFor(c.items[c.index].answer)); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog h2').innerText()).startsWith('10 / 10'), 'retake 10/10');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'lesson completes');
s = await mstate();
ok(s.lessons['maths.number.negatives'].complete && s.lessons['maths.number.negatives'].best === 100, 'completion and best score saved');
ok((await page.locator('#sideProgress').innerText()) === '1 / 15', 'sidebar progress 1 / 15');
await page.click('#mrNext');
ok((await page.locator('#mH1').innerText()) === 'Order of operations and inverses', 'next lesson opens');

// ── review: weak skills straight away ──
await page.click('#reviewButton');
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('to revisit'), 'review lists skills due');
await page.click('#mrBegin');
s = await mstate();
let rv = s.runs.review;
ok(rv && rv.queue.length >= 1, 'review run created with ' + rv.queue.length + ' items');
await enter(rv.queue[0], wrongFor(rv.queue[0]));
ok(await page.locator('.msolution').count() === 1, 'review miss shows worked solution');
for (let i = 0; i < rv.queue.length; i++) { s = await mstate(); rv = s.runs.review; if (rv.answers[rv.queue[rv.index].id] === undefined) await enter(rv.queue[rv.index], rawFor(rv.queue[rv.index].answer)); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog .eyebrow').first().innerText()).includes('RECALL'), 'review results shown');
await page.click('#mrBack');

// ── other investigations, driven to completion with wrong paths ──
async function goLesson(id) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click('[data-mstage="1"]'); }
await goLesson('maths.number.order-of-operations');
await page.click('[data-op="1"]');
ok((await feedback()).includes('higher priority'), 'order model: choosing + before × explained');
for (let guard2 = 0; guard2 < 60; guard2++) {
  s = await mstate(); const w = s.lessons[s.lessonId].widget;
  if (w.order?.done?.length === 4) break;
  if (await page.locator('[data-act="onext"]').count()) { await page.click('[data-act="onext"]'); continue; }
  const right = await page.evaluate(async () => { const m = await import('./maths/models-number.js?v=20261022-maths-r3'); const st = JSON.parse(localStorage.getItem('crash-course-maths-v1')); return m.nextOp(st.lessons[st.lessonId].widget.order.tk); });
  await page.click(`[data-op="${right}"]`);
}
await shot('m06-order-model');
await page.click('[data-inv="÷ 4"]');
ok((await feedback()).includes('Undo the last forward step'), 'inverse machine: wrong order explained');
await page.click('[data-inv="+ 3"]'); await page.click('[data-inv="÷ 4"]');
await page.fill('#minp', '7'); await page.click('[data-act="mcheck"]');
await page.click('[data-inv="+ 6"]'); await page.click('[data-inv="÷ 2"]'); await page.click('[data-inv="− 5"]');
await page.fill('#minp', '9'); await page.click('[data-act="mcheck"]');
ok((await feedback()).includes('forwards gives'), 'inverse machine: wrong start number checked by running forwards');
await page.fill('#minp', '8'); await page.click('[data-act="mcheck"]');
ok((await lessonOf()).widgetDone, 'order investigation complete');

await goLesson('maths.number.primes');
await page.click('[data-pair="2,36"]'); await page.click('[data-pair="2,18"]'); await page.click('[data-pair="2,9"]'); await page.click('[data-pair="3,3"]');
await shot('m07-factor-tree');
await page.click('[data-act="tnext"]');
await page.click('[data-pair="2,36"]');
ok((await feedback()).includes('different first pair'), 'second tree must start differently');
await page.click('[data-pair="8,9"]');
for (let g = 0; g < 8; g++) { const pair = page.locator('[data-pair]').first(); if (!(await pair.count())) break; await pair.click(); }
await page.click('[data-act="tnext"]');
ok((await feedback()).includes('same primes'), 'unique factorisation conclusion shown');
await page.click('[data-pick="0"]'); await page.click('[data-act="vplace"]');
ok((await feedback()).includes('can still be matched'), 'Venn: incomplete matching challenged');
await page.click('[data-pick="1"]'); await page.click('[data-pick="2"]'); await page.click('[data-act="vplace"]');
await page.fill('#vh', '840'); await page.fill('#vl', '840'); await page.click('[data-act="vcheck"]');
ok((await feedback()).includes('That is the LCM'), 'HCF/LCM swap detected');
await page.fill('#vh', '12'); await page.fill('#vl', '10080'); await page.click('[data-act="vcheck"]');
ok((await feedback()).includes('twice'), 'LCM = product misconception detected');
await page.fill('#vl', '840'); await page.click('[data-act="vcheck"]');
ok((await lessonOf()).widgetDone, 'factor tree investigation complete');

await goLesson('maths.number.fractions-add-subtract');
const bars = [[4, 3], [4, 3], [4, 1], [2, 3]];
for (let t = 0; t < 4; t++) {
  if (t === 0) { await page.click('[data-act="match"]'); ok((await feedback()).includes('different sizes'), 'fraction bars: unequal pieces cannot be combined'); }
  for (let i = 1; i < bars[t][0]; i++) await page.click('[data-k="a,1"]');
  for (let i = 1; i < bars[t][1]; i++) await page.click('[data-k="b,1"]');
  await page.click('[data-act="match"]');
  if (t === 0) { await page.fill('#fbAns', '2/7'); await page.click('[data-act="fcheck"]'); ok((await feedback()).includes('adds the tops and the bottoms'), 'fraction bars: add-tops-and-bottoms misconception detected'); await shot('m08-fraction-bars'); }
  if (t === 1) { await page.fill('#fbAns', '10/24'); await page.click('[data-act="fcheck"]'); ok((await feedback()).includes('simplest'), 'fraction bars: simplest form required'); }
  await page.fill('#fbAns', ['7/12', '5/12', '7/8', '1 7/12'][t]); await page.click('[data-act="fcheck"]');
}
ok((await lessonOf()).widgetDone, 'fraction bars investigation complete');

await goLesson('maths.number.fractions-multiply-divide');
for (const [a, b, ans] of [[2, 3, '6/12'], [3, 1, '3/10']]) {
  for (let i = 0; i < a; i++) await page.click('[data-s="sa,1"]');
  for (let i = 0; i < b; i++) await page.click('[data-s="sb,1"]');
  if (ans === '6/12') { await page.fill('#arAns', '5/7'); await page.click('[data-act="acheck"]'); ok((await feedback()).includes('Count the cells with a dot'), 'area model: wrong overlap guided'); await shot('m09-area-model'); }
  await page.fill('#arAns', ans); await page.click('[data-act="acheck"]');
}
for (const n of [3, 4]) {
  for (let i = 0; i < n + 1; i++) await page.click('[data-f="1"]');
  await page.click('[data-act="fitcheck"]'); ok((await feedback()).includes('sticks out'), 'division fit: overshoot detected');
  await page.click('[data-f="-1"]'); await page.click('[data-act="fitcheck"]');
}
ok((await lessonOf()).widgetDone, 'area/division investigation complete');

// ── practise a fraction lesson briefly: structured fraction input in the browser ──
await page.click('[data-mstage="2"]');
for (let i = 0; i < 6; i++) { s = await mstate(); const L = s.lessons[s.lessonId]; if (L.practice.answer) { await cont(); continue; } const it = L.practice.item; await enter(it, rawFor(it.answer)); ok((await feedback()).startsWith('Correct'), `fraction practice accepts ${rawFor(it.answer)} for ${it.prompt.slice(0, 50)}`); await cont(); }
s = await mstate(); item = s.lessons[s.lessonId].practice.item;
if (item.answer.kind === 'fraction' && item.answer.value.d > 1) {
  const g = 2; await enter(item, `${item.answer.value.n * g}/${item.answer.value.d * g}`);
  ok((await feedback()).includes('simplest form'), 'unsimplified fraction gets the "simplest form" message, not a plain wrong');
}
await shot('m10-fraction-practice');

// ── topic assessment ──
await page.click('#assessmentButton');
await page.click('#maBegin');
s = await mstate();
ok(s.runs.assessment.queue.length === 20, 'assessment draws 20 questions across all lessons');
await enter(s.runs.assessment.queue[0], rawFor(s.runs.assessment.queue[0].answer));
await page.reload(); await page.waitForSelector('#mH1');
ok((await page.locator('#mH1').innerText()) === 'Topic assessment', 'unfinished assessment resumes after reload');

// ── phone width ──
await page.setViewportSize({ width: 390, height: 844 });
for (const st of [0, 1, 2, 3]) { await page.click('#lessonNav').catch(() => {}); if (await page.locator('[data-mlesson="maths.number.primes"]').count()) await page.click('[data-mlesson="maths.number.primes"]'); await page.click(`[data-mstage="${st}"]`); ok(await noOverflow(), `390px: no horizontal overflow on stage ${st + 1}`); if (st < 3) await shot(`m11-phone-stage${st + 1}`); }
await page.click('#lessonNav'); await page.click('[data-mlesson="maths.number.fractions-add-subtract"]'); await page.click('[data-mstage="2"]');
ok(await noOverflow(), '390px: fraction practice input has no overflow');
await shot('m12-phone-fraction-input');
ok(await page.evaluate(() => getComputedStyle(document.querySelector('.sidebar')).position === 'static'), '390px with reduced motion: phone layout applies (family.css media block closed)');
await page.setViewportSize({ width: 1280, height: 900 });

// ── science untouched ──
await page.selectOption('#subject', 'science');
await page.waitForSelector('#scienceContent:not([hidden])');
ok((await page.locator('#scienceContent .intro h1').innerText()) === sciTitleBefore, 'science returns to the same lesson with its own title');
ok(await page.locator('#mathsContent').evaluate(e => e.innerHTML === ''), 'maths markup removed while science is shown');
ok(await page.locator('#route').isVisible(), 'science pathway select visible again');
const sci = await page.evaluate(() => JSON.parse(localStorage.getItem('crash-course-v2')));
ok(JSON.stringify(sci.lessons) === JSON.stringify(sciBefore.lessons) && JSON.stringify(sci.concepts) === JSON.stringify(sciBefore.concepts), 'science lessons and concepts identical before and after all maths work');
await page.selectOption('#subject', 'english-language');
ok(await page.locator('#plannedSubject').isVisible() && await page.locator('#mathsContent').isHidden(), 'planned subjects still show the planned screen');

ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
