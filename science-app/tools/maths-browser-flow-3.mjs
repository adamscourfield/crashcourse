// Browser walk-through for Number batch 3 (built from the batch 2 harness): all five investigations with wrong paths, the new
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
  if (a.kind === 'ratio') return a.parts.join(':');
  if (a.kind === 'exact') {
    const sym = a.r === 'pi' ? 'π' : '√' + a.r, An = a.a.n / g(a.a.n, a.a.d) , Ad = a.a.d / g(a.a.n, a.a.d), Bn = a.b.n / g(a.b.n, a.b.d), Bd = a.b.d / g(a.b.n, a.b.d);
    const irr = Bn === 0 ? '' : `${Math.abs(Bn) === 1 ? '' : Math.abs(Bn)}${sym}${Bd > 1 ? '/' + Bd : ''}`;
    const rat = An === 0 ? '' : Ad === 1 ? String(An) : `${An}/${Ad}`;
    if (!irr) return rat || '0';
    return rat ? `${rat} ${Bn < 0 ? '-' : '+'} ${irr}` : `${Bn < 0 ? '-' : ''}${irr}`;
  }
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
ok((await page.locator('#sideProgress').innerText()) === '0 / 15', 'fifteen maths lessons available at Foundation (surd skills hidden, lesson kept for π)');
const B3 = ['maths.number.listing', 'maths.number.units', 'maths.number.compound-measures', 'maths.number.exact', 'maths.number.ratio-reciprocals'];
for (const id of B3) { await goLesson(id, 0); const n = await page.locator('[data-mcard]').count(); for (let c = 0; c < n; c++) { await page.click(`[data-mcard="${c}"]`); ok((await page.locator('#mPanel .mviz-wrap').innerHTML()).length > 80, `${id.split('.').pop()} card ${c + 1} has a visual`); } }

// ── listing ──
await goLesson('maths.number.listing', 1);
for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) await page.click(`[data-oc="${i},${j}"]`);
await page.fill('#lsAns', '3 + 4'); await page.click('[data-act="lscheck"]');
ok((await feedback()).includes('counts the items'), 'outfits: adding the groups is challenged');
await page.fill('#lsAns', '3 x 4'); await page.click('[data-act="lscheck"]');
await page.click('[data-hs="2,2"]'); ok((await feedback()).includes('themselves'), 'handshakes: diagonal rejected');
await page.click('[data-hs="0,1"]'); await page.click('[data-hs="1,0"]');
ok((await feedback()).includes('same handshake'), 'handshakes: duplicate pair detected');
await shot('b3-01-handshakes');
await page.click('[data-act="hscheck"]'); ok((await feedback()).includes('missing'), 'handshakes: incomplete list challenged');
for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) if (!(i === 0 && j === 1)) await page.click(`[data-hs="${i},${j}"]`);
await page.click('[data-act="hscheck"]');
ok((await lessonOf()).widgetDone, 'listing investigation complete');

// ── unit ladder ──
await goLesson('maths.number.units', 1);
await page.click('[data-ld="down"]'); await page.click('[data-ld="up"]');
ok((await feedback()).includes('Move down'), 'ladder: wrong direction explained');
await page.click('[data-ld="down"]'); await page.click('[data-act="ldcheck"]');
await page.click('[data-ld="up"]'); await page.click('[data-ld="up"]'); await page.click('[data-act="ldcheck"]');
await page.click('[data-ld="down"]'); await page.click('[data-act="ldcheck"]');
await page.click('[data-ar="100"]'); ok((await feedback()).includes('100 cm by 100 cm'), 'area units: 100 corrected to 10 000');
await shot('b3-02-area-units');
await page.click('[data-ar="10000"]'); await page.click('[data-ar="1000"]');
ok((await lessonOf()).widgetDone, 'units investigation complete');

// ── journey ──
await goLesson('maths.number.compound-measures', 1);
for (let i = 0; i < 3; i++) await page.click('[data-jt="5"]');
await page.fill('#jAns', '720'); await page.click('[data-act="jcheck"]');
ok((await feedback()).includes('minutes as if they were hours'), 'journey: minutes not converted is explained');
await page.fill('#jAns', '12'); await page.click('[data-act="jcheck"]');
for (let i = 0; i < 8; i++) await page.click('[data-jt="5"]');
await page.fill('#jAns', '32'); await page.click('[data-act="jcheck"]');
for (let i = 0; i < 8; i++) await page.click('[data-jt="5"]');
await page.click('[data-act="jcheck"]'); ok((await feedback()).includes('Keep going'), 'journey: time short of the marker');
await page.click('[data-jt="5"]'); await page.click('[data-act="jcheck"]');
await page.fill('#avAns', '45'); await page.click('[data-act="avcheck"]');
ok((await feedback()).includes('slower for longer'), 'average speed: mean of speeds challenged');
await shot('b3-03-average-speed');
await page.fill('#avAns', '40'); await page.click('[data-act="avcheck"]');
ok((await lessonOf()).widgetDone, 'journey investigation complete');

// ── circles (Foundation) ──
await goLesson('maths.number.exact', 1);
await page.click('[data-cr="1"]'); await page.click('[data-cr="1"]');
await page.fill('#crAns', '28.3'); await page.click('[data-act="crcheck"]');
ok((await feedback()).includes('decimal approximation'), 'circle: decimal approximation asked to be exact');
await page.fill('#crAns', '6π'); await page.click('[data-act="crcheck"]');
ok((await feedback()).includes('circumference'), 'circle: circumference given for area detected');
await page.fill('#crAns', '9π'); await page.click('[data-act="crcheck"]');
await page.click('[data-cr="1"]'); await page.fill('#crAns', '16pi'); await page.click('[data-act="crcheck"]');
ok((await feedback()).includes('area'), 'circle: area given for circumference detected');
await page.fill('#crAns', '8π'); await page.click('[data-act="crcheck"]');
ok((await lessonOf()).widgetDone, 'Foundation: exact investigation complete without the surd part');
ok(!(await page.locator('#mBody').innerText()).includes('square factor'), 'Foundation: surd part not shown');

// ── π lesson end to end at Foundation (check tops up to 10 π questions) ──
await goLesson('maths.number.exact', 0); for (let i = 0; i < 4; i++) await cont();
await page.click('[data-mstage="2"]');
ok((await page.locator('.mrung').count()) === 1, 'Foundation: one practice skill (π) in the exact-answers lesson');
let guard = 0, answered = 0;
while (guard++ < 40) { const s = await mstate(), L = s.lessons[s.lessonId]; if (L.practice.answer) { await cont(); continue; } if (!L.practice.item) break; await enter(L.practice.item, rawFor(L.practice.item.answer)); if (!(await feedback()).startsWith('Correct')) { ok(false, 'π practice rejected ' + L.practice.item.prompt + ' ← ' + rawFor(L.practice.item.answer)); break; } answered++; if ((await page.locator('#mContinue').innerText()).includes('independent check')) break; }
ok(answered >= 8, `π skill secured after ${answered} answers`);
await cont(); await cont();
let st = await mstate();
const items = st.lessons['maths.number.exact'].check.items;
ok(items.length === 10 && items.every(it => it.skill === 'maths.number.exact.pi'), 'Foundation check: 10 questions, all on π (surd items removed and topped up)');
for (let i = 0; i < 10; i++) { st = await mstate(); const c = st.lessons[st.lessonId].check; await enter(c.items[c.index], rawFor(c.items[c.index].answer)); await cont(); }
await page.waitForSelector('dialog[open]');
ok((await page.locator('dialog').innerText()).includes('Lesson complete'), 'Foundation: exact-answers lesson completes');
await shot('b3-04-pi-check');
await page.click('#closeModal');

// ── ratio bar and reciprocals ──
await goLesson('maths.number.ratio-reciprocals', 1);
for (let i = 0; i < 3; i++) await page.click('[data-rb="A,1"]'); for (let i = 0; i < 5; i++) await page.click('[data-rb="B,1"]');
await page.fill('#rbAns', '3/5'); await page.click('[data-act="rbcheck"]');
ok((await feedback()).includes('compares one part with the other'), 'ratio bar: part-to-part fraction challenged');
await page.fill('#rbAns', '5/8'); await page.click('[data-act="rbcheck"]');
for (let i = 0; i < 2; i++) await page.click('[data-rb="A,1"]'); for (let i = 0; i < 7; i++) await page.click('[data-rb="B,1"]');
await page.fill('#rbAns', '2/9'); await page.click('[data-act="rbcheck"]');
for (let i = 0; i < 4; i++) await page.click('[data-rb="A,1"]'); for (let i = 0; i < 6; i++) await page.click('[data-rb="B,1"]');
await page.fill('#rbAns', '6/10'); await page.click('[data-act="rbcheck"]');
ok((await feedback()).includes('simplify'), 'ratio bar: unsimplified fraction challenged');
await page.fill('#rbAns', '3/5'); await page.click('[data-act="rbcheck"]');
await page.fill('#rc0', '-4'); await page.fill('#rc1', '3/2'); await page.fill('#rc2', '5'); await page.click('[data-act="rccheck"]');
ok((await feedback()).includes('not the negative'), 'reciprocal: negative misconception detected');
await shot('b3-05-reciprocals');
await page.fill('#rc0', '1/4'); await page.click('[data-act="rccheck"]');
ok((await lessonOf()).widgetDone, 'ratio and reciprocal investigation complete');
await page.click('[data-mstage="2"]');
for (let i = 0; i < 12; i++) { const s = await mstate(), L = s.lessons[s.lessonId]; if (L.practice.answer) { await cont(); continue; } const it = L.practice.item; if (it.answer.kind === 'ratio') { await enter(it, it.answer.parts.map(x => x * 2).join(':')); ok((await feedback()).includes('simplest form'), 'ratio input: unsimplified ratio gets the simplest-form message'); await shot('b3-06-ratio-input'); break; } await enter(it, rawFor(it.answer)); ok((await feedback()).startsWith('Correct'), 'ratio lesson practice accepts ' + rawFor(it.answer)); }

// ── Higher: surd part of the investigation and surd practice ──
await page.selectOption('#tier', 'Higher'); await page.waitForSelector('#mH1');
await goLesson('maths.number.exact', 1);
ok((await page.locator('#mBody').innerText()).includes('square number'), 'Higher: surd square-factor finder shown');
await page.click('[data-sq="4"]');
ok((await feedback()).includes('still has a square factor'), 'surd finder: partial simplification flagged');
await page.click('[data-sq="9"]'); await page.click('[data-act="sqdone"]');
await page.click('[data-sq="100"]'); await page.click('[data-act="sqdone"]');
ok((await feedback()).includes('10√2'), 'surd finder: √200 = 10√2');
await page.click('[data-mstage="2"]');
ok((await page.locator('.mrung').count()) === 4, 'Higher: three skills plus a mixed round in the exact-answers lesson');
let sawSurd = false;
for (let i = 0; i < 30 && !sawSurd; i++) {
  const s = await mstate(), L = s.lessons[s.lessonId];
  if (L.practice.answer) { await cont(); continue; }
  const it = L.practice.item;
  if (it.skill === 'maths.number.exact.surds-simplify' && it.level === 1) {
    const m = it.prompt.match(/√(\d+)/); await enter(it, '√' + m[1]);
    ok((await feedback()).includes('not fully simplified'), 'surd input: unsimplified surd gets its own message'); sawSurd = true; await shot('b3-07-surd-input'); break;
  }
  await enter(it, rawFor(it.answer)); ok((await feedback()).startsWith('Correct'), 'Higher exact practice accepts ' + rawFor(it.answer) + ' for ' + it.prompt.slice(0, 40));
}
ok(sawSurd, 'reached a surd question in Higher practice');

// ── assessment ──
await page.click('#assessmentButton'); await page.click('#maBegin');
st = await mstate();
const q = st.runs.assessment.queue;
const lessonsOfSkill = id => ['negatives', 'order', 'primes', 'fractions', 'decimals', 'fdp', 'rounding', 'powers', 'standard-form', 'listing', 'units', 'compound', 'exact', 'ratio-fractions', 'reciprocals', 'symbols'].find(k => id.includes('.' + k));
ok(q.length === 20, 'topic assessment has 20 questions');
ok(new Set(q.map(it => it.skill)).size === 20, 'no skill repeats within an assessment');

// ── phone ──
await page.setViewportSize({ width: 390, height: 844 });
for (const [id, stg] of [['maths.number.listing', 1], ['maths.number.ratio-reciprocals', 1], ['maths.number.exact', 2], ['maths.number.units', 1], ['maths.number.compound-measures', 1]]) { await goLesson(id, stg); ok(await noOverflow(), `390px: ${id.split('.').pop()} stage ${stg + 1} has no overflow`); }
await goLesson('maths.number.exact', 2); await shot('b3-08-phone-exact');
await page.setViewportSize({ width: 1280, height: 900 });

ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
fs.writeFileSync(`${OUT}/maths-browser-log-3.txt`, log.join('\n'));
console.log(log.filter(l => l.startsWith('FAIL')).join('\n') || 'ALL PASS', `\n${log.length} checks`);
await browser.close();
