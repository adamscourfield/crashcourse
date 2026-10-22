// Browser walk-through for Number batch 2: all five investigations with wrong paths, the new
// answer inputs (decimal, standard form, power, interval) in practice and checks, a complete
// lesson to mastery, Foundation/Higher level split, reload persistence and 390px layout.
// Setup and serving as in maths-browser-flow.mjs. Run: node maths-browser-flow-2.mjs <screenshotDir>
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
async function goLesson(id, stage) { await page.click('#lessonNav'); await page.click(`[data-mlesson="${id}"]`); await page.click(`[data-mstage="${stage}"]`); }

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.goto(URL, { waitUntil: 'networkidle' });
await page.selectOption('#subject', 'maths'); await page.waitForSelector('#mH1');
ok((await page.locator('#sideProgress').innerText()) === '0 / 10', 'ten maths lessons available');

// ── Discover cards render their visuals ──
for (const id of ['maths.number.decimals', 'maths.number.fdp', 'maths.number.rounding', 'maths.number.powers', 'maths.number.standard-form']) {
  await goLesson(id, 0);
  for (let c = 0; c < 4; c++) { await page.click(`[data-mcard="${c}"]`); ok((await page.locator('#mPanel .mviz-wrap').innerHTML()).length > 80, `${id} card ${c + 1} has a visual`); }
}
await goLesson('maths.number.fdp', 0); await page.click('[data-mcard="3"]'); await shot('b2-01-recurring-card');

// ── 1. Decimal scaling ──
await goLesson('maths.number.decimals', 1);
await page.click('[data-sc="bottom"]');
ok((await feedback()).includes('That changes the answer'), 'scaling only the divisor is rejected with the changed value');
await page.click('[data-sc="both"]'); await page.fill('#dsAns', '2.4'); await page.click('[data-act="dscheck"]');
ok((await feedback()).includes('Check:'), 'wrong quotient is checked by multiplying back');
await page.fill('#dsAns', '24'); await page.click('[data-act="dscheck"]');
await page.click('[data-sc="both"]'); await page.fill('#dsAns', '7.6'); await page.click('[data-act="dscheck"]');
await page.click('[data-sc="both"]'); await page.click('[data-sc="both"]'); await page.fill('#dsAns', '12'); await page.click('[data-act="dscheck"]');
await shot('b2-02-decimal-point');
await page.click('[data-act="ptcheck"]');
ok((await feedback()).includes('too big'), 'decimal point: unplaced point is too big');
for (const [moves] of [[3], [3], [2]]) { for (let i = 0; i < moves; i++) await page.click('[data-pt="-1"]'); await page.click('[data-act="ptcheck"]'); }
ok((await lessonOf()).widgetDone, 'decimal investigation complete (3.6×0.45=1.62, 0.7×0.08=0.056, 12.5×0.4=5)');

// ── 2. FDP ordering ──
await goLesson('maths.number.fdp', 1);
await page.fill('[data-cv="{3/8}"]', '0.3'); await page.click('[data-cvb="{3/8}"]');
ok((await feedback()).includes('not 0.3'), 'FDP: 3/8 as 0.3 misconception detected');
await page.fill('[data-cv="{3/8}"]', '0.375'); await page.click('[data-cvb="{3/8}"]');
await page.fill('[data-cv="33%"]', '33'); await page.click('[data-cvb="33%"]');
ok((await feedback()).includes('divide by 100'), 'FDP: percentage not divided by 100 detected');
await page.fill('[data-cv="33%"]', '0.33'); await page.click('[data-cvb="33%"]');
await page.click('[data-ord="0.4"]');
ok((await feedback()).includes('is smaller'), 'FDP: wrong first choice explained with decimals');
for (const l of ['33%', '0.36', '{3/8}', '0.4']) await page.click(`[data-ord="${l}"]`);
await page.fill('[data-cv="{5/8}"]', '0.625'); await page.click('[data-cvb="{5/8}"]');
await page.fill('[data-cv="62%"]', '0.62'); await page.click('[data-cvb="62%"]');
await shot('b2-03-fdp-line');
for (const l of ['0.6', '62%', '{5/8}', '0.65']) await page.click(`[data-ord="${l}"]`);
ok((await lessonOf()).widgetDone, 'FDP investigation complete');

// ── 3. Rounding and error intervals ──
await goLesson('maths.number.rounding', 1);
await page.click('[data-rd="4.2"]');
ok((await feedback()).includes('past'), 'rounding: 4.276 rounded down is corrected');
await page.click('[data-rd="4.3"]');
await page.click('[data-rd="7.2"]');
ok((await feedback()).includes('exactly halfway'), 'rounding: halfway case explained');
await page.click('[data-rd="7.3"]'); await page.click('[data-rd="38000"]');
await page.click('[data-ivh="1"]'); await page.click('[data-act="ivcheck"]');
ok((await feedback()).includes('below'), 'interval: one-sided (truncation-style) interval challenged');
await page.click('[data-ivl="-1"]'); await page.click('[data-act="ivcheck"]');
ok((await feedback()).includes('included: use ●'), 'interval: lower end must be included');
await page.click('[data-ivin="lo"]'); await page.click('[data-ivin="hi"]'); await page.click('[data-act="ivcheck"]');
ok((await feedback()).includes('not included'), 'interval: upper end must be excluded');
await page.click('[data-ivin="hi"]');
await shot('b2-04-error-interval');
await page.click('[data-act="ivcheck"]');
for (let i = 0; i < 5; i++) await page.click('[data-ivl="-1"]');
for (let i = 0; i < 5; i++) await page.click('[data-ivh="1"]');
await page.click('[data-ivin="lo"]'); await page.click('[data-act="ivcheck"]');
ok((await lessonOf()).widgetDone, 'rounding investigation complete');

// ── 4. Index chips and halving ──
await goLesson('maths.number.powers', 1);
await page.fill('#chAns', '8'); await page.click('[data-act="chcheck"]');
ok((await feedback()).includes('added, not multiplied'), 'index chips: multiplying indices detected');
await page.fill('#chAns', '6'); await page.click('[data-act="chcheck"]');
await page.click('[data-act="cancel"]'); await page.click('[data-act="cancel"]');
await shot('b2-05-index-chips');
await page.fill('#chAns', '3'); await page.click('[data-act="chcheck"]');
ok((await feedback()).includes('subtracted, not divided'), 'index chips: dividing indices detected');
await page.fill('#chAns', '4'); await page.click('[data-act="chcheck"]');
await page.fill('#chAns', '6'); await page.click('[data-act="chcheck"]');
await page.fill('#hv0', '0'); await page.fill('#hv-1', '-2'); await page.fill('#hv-2', '-4'); await page.fill('#hv-3', '-8');
await page.click('[data-act="hvcheck"]');
ok((await feedback()).includes('2^0 = 1') || (await feedback()).includes('Half of 2 is 1'), 'halving: 2^0 = 0 corrected');
await page.fill('#hv0', '1'); await page.click('[data-act="hvcheck"]');
ok((await feedback()).includes('never makes a number negative'), 'halving: negative index as negative number corrected');
await page.reload(); await page.waitForSelector('#mH1');
ok((await page.inputValue('#hv-1')) === '-2', 'halving drafts survive reload');
await page.fill('#hv-1', '1/2'); await page.fill('#hv-2', '1/4'); await page.fill('#hv-3', '1/8'); await page.click('[data-act="hvcheck"]');
ok((await lessonOf()).widgetDone, 'index investigation complete');

// ── 5. Standard form slider ──
await goLesson('maths.number.standard-form', 1);
await page.click('[data-act="sfplace"]');
ok((await feedback()).includes('keep moving'), 'slider: not yet between 1 and 10');
for (let i = 0; i < 7; i++) await page.click('[data-mv="1"]');
await page.click('[data-act="sfplace"]');
ok((await feedback()).includes('too far'), 'slider: moved too far detected');
await page.click('[data-mv="-1"]'); await page.click('[data-act="sfplace"]');
await page.click('[data-sfneg]'); await page.fill('#sfExp', '6'); await page.click('[data-act="sfcheck"]');
ok((await feedback()).includes('positive power'), 'slider: wrong sign for a large number explained');
await page.click('[data-sfneg]'); await page.click('[data-act="sfcheck"]');
for (const [moves, n] of [[4, -4], [10, 10], [2, -2]]) {
  for (let i = 0; i < moves; i++) await page.click('[data-mv="1"]');
  await page.click('[data-act="sfplace"]');
  if (n < 0) await page.click('[data-sfneg]');
  await page.fill('#sfExp', String(Math.abs(n))); await page.click('[data-act="sfcheck"]');
}
await shot('b2-06-standard-form');
ok((await lessonOf()).widgetDone, 'standard form investigation complete');

// ── practice with every new answer kind, including a wrong answer of each ──
async function practise(id, count, label) {
  await goLesson(id, 2);
  const kinds = new Set(); let wrongShown = false;
  for (let i = 0; i < count; i++) {
    const s = await mstate(), L = s.lessons[s.lessonId];
    if (L.practice.answer) { await cont(); continue; }
    if (!L.practice.item) { if (L.stage !== 2) break; await cont(); continue; }
    const it = L.practice.item; kinds.add(it.answer.kind);
    if (i === 1 && it.answer.kind !== 'choice') {
      const bad = { decimal: '999.5', standard: '9.9|99', power: '9|9', interval: '1|<|<|2', integer: '99999', fraction: '99/100' }[it.answer.kind];
      await enter(it, bad); wrongShown = (await page.locator('.msolution').count()) === 1; await cont(); continue;
    }
    await enter(it, rawFor(it.answer));
    const fb = await feedback();
    if (!fb.startsWith('Correct')) { ok(false, `${label}: own answer rejected: ${it.prompt} → ${rawFor(it.answer)} :: ${fb}`); return kinds; }
    await cont();
  }
  ok(wrongShown, `${label}: a wrong answer shows the worked solution`);
  return kinds;
}
const k1 = await practise('maths.number.standard-form', 14, 'standard form');
ok(k1.has('standard'), 'standard-form input used in practice');
await page.click('[data-mstage="2"]');
const s0 = await mstate(); const cur = s0.lessons[s0.lessonId].practice.item;
if (cur && cur.answer.kind === 'standard' && !s0.lessons[s0.lessonId].practice.answer) {
  const A = cur.answer.a.n / cur.answer.a.d;
  await enter(cur, `${decText(cur.answer.a.n * 10, cur.answer.a.d)}|${cur.answer.n - 1}`);
  ok((await feedback()).includes('not in standard form'), `${A * 10} × 10^n gets the "not in standard form" message`);
}
await shot('b2-07-standard-practice');
const k2 = await practise('maths.number.powers', 16, 'powers');
ok(k2.has('power'), 'power input used in practice');
const k3 = await practise('maths.number.rounding', 24, 'rounding');
ok(k3.has('decimal'), 'decimal input used in practice');

// ── a full lesson to mastery: rounding (decimal, choice and interval answers) ──
await goLesson('maths.number.rounding', 0);
for (let i = 0; i < 4; i++) await cont();
ok((await lessonOf()).seen.length === 4, 'rounding Discover cards all read');
await page.click('[data-mstage="2"]');
let answered = 0, guard = 0, sawInterval = false;
while (guard++ < 160) {
  const s = await mstate(), L = s.lessons[s.lessonId];
  if (L.practice.answer) { await cont(); continue; }
  if (!L.practice.item) break;
  const it = L.practice.item; if (it.answer.kind === 'interval') sawInterval = true;
  await enter(it, rawFor(it.answer));
  if (!(await feedback()).startsWith('Correct')) { ok(false, 'mastery run own answer rejected: ' + it.prompt + ' → ' + rawFor(it.answer)); break; }
  answered++;
  if ((await page.locator('#mContinue').innerText()).includes('independent check')) break;
}
const sm = await mstate();
ok(['maths.number.rounding.round', 'maths.number.rounding.estimate', 'maths.number.rounding.error-interval'].every(id => sm.skills[id].practised) && sm.lessons['maths.number.rounding'].mixed.done, `rounding lesson practice secured after ${answered} more answers`);
ok(sawInterval, 'interval input used through the browser');
await cont(); await cont();
let s = await mstate();
for (let i = 0; i < 10; i++) { s = await mstate(); const c = s.lessons[s.lessonId].check; const it = c.items[c.index]; await enter(it, i === 0 ? (it.answer.kind === 'choice' ? String((it.answer.answer + 1) % it.answer.options.length) : it.answer.kind === 'interval' ? '1|<|<|2' : '999.5') : rawFor(it.answer)); if (i === 0) { await page.reload(); await page.waitForSelector('#mH1'); ok(await page.locator('#mSubmit').count() === 0, 'first check answer locked after reload'); } await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog h2').innerText()).startsWith('9 / 10'), 'rounding check 9/10: ' + await page.locator('dialog h2').innerText());
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'rounding lesson completes at 90%: ' + (await page.locator('dialog p').first().innerText()).slice(0, 90));
await shot('b2-08-check-results');
await page.click('#closeModal');

// ── tier split ──
await goLesson('maths.number.fdp', 2);
ok((await page.locator('.mrung').first().innerText()).includes('of 2'), 'Foundation: conversion ladder stops at level 2 (no recurring decimals)');
const before = JSON.stringify((await mstate()).skills['maths.number.powers.index-laws']);
await page.selectOption('#tier', 'Higher'); await page.waitForSelector('#mH1');
await page.click('[data-mstage="2"]');
ok((await page.locator('.mrung').first().innerText()).includes('of 3'), 'Higher: conversion ladder adds level 3 (recurring decimals)');
await goLesson('maths.number.powers', 2);
const il = (await mstate()).skills['maths.number.powers.index-laws'];
ok(!il.practised || (await page.locator('.mrung').nth(1).innerText()).includes('of 4'), 'Higher: index laws secured at Foundation reopen at the fractional level 4');
ok(JSON.stringify((await mstate()).skills['maths.number.powers.index-laws']) === before, 'switching tier does not erase skill progress');
await page.selectOption('#tier', 'Foundation'); await page.waitForSelector('#mH1');

// ── phone ──
await page.setViewportSize({ width: 390, height: 844 });
for (const [id, st] of [['maths.number.standard-form', 2], ['maths.number.rounding', 1], ['maths.number.powers', 1], ['maths.number.decimals', 1], ['maths.number.fdp', 0]]) {
  await goLesson(id, st); ok(await noOverflow(), `390px: ${id.split('.').pop()} stage ${st + 1} has no overflow`);
}
await goLesson('maths.number.standard-form', 2);
await shot('b2-09-phone-standard-input');
await page.setViewportSize({ width: 1280, height: 900 });

ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-2.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
