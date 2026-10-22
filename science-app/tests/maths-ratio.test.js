// Ratio batch 1: every item is re-solved from its PRINTED prompt with plain arithmetic (no generator
// code, no marking parser), plus the usual generation contract and lesson-record checks.
import test from 'node:test';
import assert from 'node:assert/strict';
import { allSkills, generate, skillById } from '../dist/maths/skills.js';
import { mark } from '../dist/maths/answers.js';
import { orderedRatio, ratioLessons, ratioOrder } from '../dist/maths/lessons-ratio.js';
import { orderedLessons as numberLessons } from '../dist/maths/lessons-number.js';
import { orderedAlgebra } from '../dist/maths/lessons-algebra.js';
import { levelsFor, topLevel, freshMaths, lessonState, lessonDone } from '../dist/maths/mastery.js';
import { visual7 } from '../dist/maths/models-algebra3.js';
import { visual9, MODELS9 } from '../dist/maths/models-ratio.js';
import { visual6 } from '../dist/maths/models-graphs.js';

const N = 200;
const ratioSkills = allSkills.filter(sk => sk.id.startsWith('maths.ratio.'));
const close = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
const NUM = t => Number(String(t).replace(/−/g, '-').replace(/[£$€¥]|CHF ?/g, ''));
const fv = f => f.n / f.d;
const val = a => (a.kind === 'integer' ? a.value : fv(a.value));
const items = (id, lv, n = N) => Array.from({ length: n }, (_, i) => generate('maths.ratio.' + id, lv, 'r1-' + i));
const correctOption = it => it.answer.options[it.answer.answer];
const gcdA = xs => xs.reduce((g, x) => { let a = g, b = x; while (b) [a, b] = [b, a % b]; return a; }, 0);
const UNIT = { cm: 1, m: 100, g: 1, kg: 1000, ml: 1, litres: 1000, minutes: 1, hours: 60 };
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'algebra') return a.expr;
  if (a.kind === 'solutions') return a.sols.map(r => r.map(v => `${v.n}/${v.d}`).join(',')).join(';');
  if (a.kind === 'ratio') return a.parts.join(':');
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'fraction') return `${a.value.n}/${a.value.d}`;
  if (a.kind === 'decimal') return (a.value.n / a.value.d).toFixed(a.dp ?? 6).replace(/\.?0+$/, m => (a.dp ? m : ''));
  throw new Error(a.kind);
}
const assertRatio = (parts, want, msg) => { assert.equal(gcdA(parts), 1, msg); assert.ok(parts.every((p, i) => close(p * want[0], parts[0] * want[i])), msg); };

test('ratio skills: deterministic, JSON-safe, self-marking, traps wrong and explained', () => {
  assert.equal(ratioSkills.length, 17);
  for (const sk of ratioSkills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = generate(sk.id, lv, 'g' + i), txt = JSON.stringify(it);
    assert.equal(txt, JSON.stringify(generate(sk.id, lv, 'g' + i)));
    assert.deepEqual(JSON.parse(txt), it);
    assert.doesNotMatch(txt, /NaN|undefined|Infinity|\[object/, `${sk.id}@${lv}: ${it.prompt}`);
    assert.doesNotMatch(it.prompt, /(^|[\s(=:,×÷])-\d/, it.prompt);
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', `${sk.id}@${lv}#${i}: ${it.prompt} → ${rawFor(it.answer)}`);
    for (const t of it.traps || []) { assert.notEqual(mark(it.answer, String(t.v.n / t.v.d)).status, 'correct', `${sk.id} trap ${t.v.n}/${t.v.d}: ${it.prompt}`); assert.ok(t.why.length > 20); }
    for (const t of it.alTraps || []) { assert.notEqual(mark(it.answer, t.expr).status, 'correct'); assert.ok(t.why.length > 20); }
    for (const t of it.soTraps || []) { assert.notEqual(mark(it.answer, t.sols.map(r => r.map(v => `${v.n}/${v.d}`).join(',')).join(';')).status, 'correct'); assert.ok(t.why.length > 20); }
    for (const t of it.raTraps || []) { assert.notEqual(mark(it.answer, t.parts.join(':')).status, 'correct'); assert.ok(t.why.length > 20); }
    if (it.answer.kind === 'choice') it.optionWhy.forEach((w, k) => (k === it.answer.answer ? assert.equal(w, null) : assert.ok(w && w.length > 15)));
  }
});

test('notation and fractions: ratios and fractions recomputed from the printed quantities', () => {
  for (const it of items('simplify', 1)) assertRatio(it.answer.parts, it.prompt.match(/Write (.+) in its/)[1].split(' : ').map(Number), it.prompt);
  for (const it of items('simplify', 2)) {
    const body = it.prompt.match(/Write (.+) in its simplest form/)[1], sides = body.split(' : ');
    const q = sides.map(s => { const m = s.match(/^(\d+(?:\.\d+)?|\{\d+\/\d+\})(?: (\w+))?$/); const v = m[1].startsWith('{') ? Function(`return ${m[1].slice(1, -1)}`)() : Number(m[1]); return v * (m[2] ? UNIT[m[2]] : 1); });
    assertRatio(it.answer.parts, q, it.prompt);
  }
  for (const it of items('simplify', 3)) {
    const [a, b] = it.prompt.match(/Write (\d+) : (\d+)/).slice(1).map(Number), n = /1 : n/.test(it.prompt) ? b / a : a / b;
    assert.ok(close(fv(it.answer.value), n), it.prompt);
  }
  for (const it of items('fraction-of', 1)) {
    const [, x, u1, y, u2] = it.prompt.match(/Write (\d+) (\w+) as a fraction of (\d+(?:\.\d+)?) (\w+)/);
    assert.ok(close(fv(it.answer.value), (x * UNIT[u1]) / (y * UNIT[u2])), it.prompt); assert.ok(fv(it.answer.value) < 1);
  }
  for (const it of items('fraction-of', 2)) { const [A, B] = it.prompt.match(/\d+/g).map(Number); assert.ok(close(fv(it.answer.value), A / B), it.prompt); assert.ok(fv(it.answer.value) > 1); }
  for (const it of items('fraction-of', 3)) {
    if (it.answer.kind === 'algebra') { const [a, b] = it.prompt.match(/= (\d+) : (\d+)/).slice(1).map(Number); for (const x of [1, 3.5, 12]) assert.ok(close(Function('x', `return ${it.answer.expr.replace(/(\d)x/g, '$1*x')}`)(x), (b / a) * x), it.prompt); }
    else { const [b, a] = it.prompt.match(/\{(\d+)\/(\d+)\}/).slice(1).map(Number); assertRatio(it.answer.parts, [a, b], it.prompt); }
  }
});

test('sharing and combining: shares add up, keep the ratio and match the given facts', () => {
  for (const it of items('share', 1)) { const Q = NUM(it.prompt.match(/share £(\d+)/)[1]), [a, b] = it.prompt.match(/ratio (\d+) : (\d+)/).slice(1).map(Number), [p, q] = it.answer.sols[0].map(fv); assert.equal(p + q, Q); assert.ok(close(p * b, q * a), it.prompt); }
  for (const it of items('share', 2)) { const Q = Number(it.prompt.match(/^(\d+)/)[1]), parts = it.prompt.match(/ratio ([\d : ]+)\./)[1].split(' : ').map(Number), T = parts.reduce((s, p) => s + p, 0), pick = /largest/.test(it.prompt) ? Math.max(...parts) : Math.min(...parts); assert.equal(it.answer.value, (Q * pick) / T); }
  for (const it of items('share', 3)) {
    const [lo, hi] = it.prompt.match(/ratio (\d+) : (\d+)/).slice(1).map(Number);
    if (/more than/.test(it.prompt)) { const d = NUM(it.prompt.match(/gets £(\d+) more/)[1]); assert.equal(it.answer.value, (lo * d) / (hi - lo)); }
    else { const got = NUM(it.prompt.match(/gets £(\d+)\./)[1]); assert.equal(it.answer.value, (got / lo) * (lo + hi)); }
  }
  for (const it of items('combine', 1)) { const [a, b, c, d] = it.prompt.match(/= (\d+) : (\d+) and B : C = (\d+) : (\d+)/).slice(1).map(Number), [A, B, C] = it.answer.parts; assert.ok(close(A / B, a / b) && close(B / C, c / d), it.prompt); assert.equal(gcdA([A, B, C]), 1); }
  for (const it of items('combine', 2)) {
    if (/Concrete/.test(it.prompt)) { const parts = it.prompt.match(/ratio ([\d : ]+) by/)[1].split(' : ').map(Number), have = NUM(it.prompt.match(/uses (\d+) kg of (\w+)/)[1]), which = ['cement', 'sand', 'gravel'].indexOf(it.prompt.match(/uses \d+ kg of (\w+)/)[1]); assert.equal(it.answer.value, (have / parts[which]) * parts[2]); }
    else { const w = NUM(it.prompt.match(/ratio 1 : (\d+)/)[1]), tot = NUM(it.prompt.match(/make (\d+) ml/)[1]); assert.equal(it.answer.value, tot / (1 + w)); }
  }
  for (const it of items('combine', 3)) {
    const [a, b] = it.prompt.match(/counters is (\d+) : (\d+)/).slice(1).map(Number), add = NUM(it.prompt.match(/(\d+) more red/)[1]), [p, q] = it.prompt.match(/is (\d+) : (\d+)\. How/).slice(1).map(Number);
    const hits = []; for (let k = 1; k < 500; k++) if ((a * k + add) * q === p * b * k) hits.push(b * k);
    assert.deepEqual(hits, [it.answer.value], it.prompt);
  }
});

test('proportion, best buys and conversions: recomputed from the printed numbers', () => {
  for (const it of items('proportion', 1)) { const [N0, q, M0] = [it.prompt.match(/for (\d+) people uses/)[1], it.prompt.match(/uses (\d+) g/)[1], it.prompt.match(/for (\d+) people\?/)[1]].map(Number); assert.equal(it.answer.value, (q * M0) / N0); }
  for (const it of items('proportion', 2)) { const [n, cost, m] = [it.prompt.match(/^(\d+)/)[1], it.prompt.match(/cost (£\d+(?:\.\d+)?)/)[1], it.prompt.match(/cost of (\d+)/)[1]].map(NUM); assert.ok(close(val(it.answer), (cost / n) * m, 1e-9), it.prompt); }
  for (const it of items('proportion', 3)) { const [w, d, w2] = [it.prompt.match(/^(\d+)/)[1], it.prompt.match(/take (\d+)/)[1], it.prompt.match(/would (\d+)/)[1]].map(Number); assert.equal(it.answer.value, (w * d) / w2); }
  for (let lv = 1; lv <= 2; lv++) for (const it of items('best-buy', lv)) {
    const packs = [...it.prompt.matchAll(/(Pack \w): (\d+) g for £(\d+(?:\.\d+)?)/g)].map(m => ({ name: m[1], u: Number(m[3]) / Number(m[2]) }));
    assert.equal(correctOption(it), packs.reduce((b, p) => (p.u < b.u ? p : b)).name, it.prompt);
  }
  for (const it of items('best-buy', 3)) { const [g, c] = [it.prompt.match(/A (\d+) g/)[1], it.prompt.match(/costs £(\d+(?:\.\d+)?)/)[1]].map(Number); assert.ok(close(val(it.answer), (c * 100 * 100) / g, 1e-9), it.prompt); }
  for (const it of items('conversion', 1)) {
    const rate = NUM(it.prompt.match(/£1 = ([^\d]*)(\d+(?:\.\d+)?)/)[2]);
    if (/Change £/.test(it.prompt)) assert.ok(close(val(it.answer), NUM(it.prompt.match(/Change £(\d+)/)[1]) * rate), it.prompt);
    else assert.ok(close(val(it.answer), NUM(it.prompt.match(/Change [^\d]*(\d+(?:\.\d+)?) into pounds/)[1]) / rate), it.prompt);
  }
  for (const it of items('conversion', 2)) { const rate = NUM(it.prompt.match(/paid (£\d+(?:\.\d+)?)/)[1]), h = NUM(it.prompt.match(/first (\d+) hours/)[1]), tot = NUM(it.prompt.match(/works (\d+) hours/)[1]); assert.ok(close(val(it.answer), rate * h + 1.5 * rate * (tot - h)), it.prompt); }
  for (const it of items('conversion', 3)) { const uk = NUM(it.prompt.match(/£(\d+) in the UK/)[1]), ab = NUM(it.prompt.match(/and [^\d]*(\d+(?:\.\d+)?) abroad/)[1]), rate = NUM(it.prompt.match(/£1 = [^\d]*(\d+(?:\.\d+)?)/)[1]); assert.ok(close(val(it.answer), Math.abs(uk - ab / rate), 1e-9), it.prompt); }
});

test('percentages, compound change and iteration: recomputed from the printed numbers', () => {
  for (const it of items('percent-of', 1)) { const [p, A] = [it.prompt.match(/out (\d+(?:\.\d+)?)%/)[1], it.prompt.match(/of £(\d+)/)[1]].map(Number); assert.ok(close(val(it.answer), (p / 100) * A), it.prompt); }
  for (const it of items('percent-of', 2)) {
    let A, B;
    if (/minutes/.test(it.prompt)) { A = NUM(it.prompt.match(/Write (\d+) minutes/)[1]); B = 120; }
    else if (/marks/.test(it.prompt)) [A, B] = it.prompt.match(/scored (\d+) marks out of (\d+)/).slice(1).map(Number);
    else if (/spaces/.test(it.prompt)) [A, B] = it.prompt.match(/^(\d+) of the (\d+)/).slice(1).map(Number);
    else { B = NUM(it.prompt.match(/had (\d+) visitors/)[1]); A = NUM(it.prompt.match(/and (\d+) visitors this/)[1]); }
    assert.ok(close(val(it.answer), (A / B) * 100), it.prompt);
  }
  for (const it of items('percent-of', 3)) { const A = NUM(it.prompt.match(/price of £(\d+)/)[1]), p = NUM(it.prompt.match(/by (\d+(?:\.\d+)?)%/)[1]), up = /increased/.test(it.prompt); assert.ok(close(val(it.answer), A * (1 + (up ? 1 : -1) * p / 100)), it.prompt); }
  for (const it of items('percent-change', 1)) { const [O, Nn] = it.prompt.match(/from £(\d+) to £(\d+)/).slice(1).map(Number); assert.ok(close(val(it.answer), (Math.abs(Nn - O) / O) * 100), it.prompt); }
  for (const it of items('percent-change', 2)) { const p = NUM(it.prompt.match(/(\d+(?:\.\d+)?)%/)[1]), Nn = NUM(it.prompt.match(/£(\d+(?:\.\d+)?)/)[1]), up = /increase/.test(it.prompt); assert.ok(close(val(it.answer) * (1 + (up ? 1 : -1) * p / 100), Nn), it.prompt); }
  for (const it of items('percent-change', 3)) { const P = NUM(it.prompt.match(/£(\d+) is/)[1]), r = NUM(it.prompt.match(/at (\d+(?:\.\d+)?)%/)[1]), n = NUM(it.prompt.match(/for (\d+) years/)[1]), I = (P * r * n) / 100; assert.ok(close(val(it.answer), /total value/.test(it.prompt) ? P + I : I), it.prompt); }
  for (let lv = 1; lv <= 3; lv++) for (const it of items('compound', lv)) {
    const P = NUM(it.prompt.match(/£(\d+)/)[1]), r = NUM(it.prompt.match(/(\d+(?:\.\d+)?)%/)[1]), n = NUM(it.prompt.match(/(?:for|after) (\d+) years/)[1]);
    const v = /falls/.test(it.prompt) ? P * (1 - r / 100) ** n : P * (1 + r / 100) ** n, want = /interest earned/.test(it.prompt) ? v - P : v;
    assert.ok(Math.abs(val(it.answer) - want) <= 0.0051, it.prompt); assert.ok(it.calculator);
  }
  for (const it of items('multipliers', 1)) { const p = NUM(it.prompt.match(/(\d+(?:\.\d+)?)%/)[1]); assert.ok(close(val(it.answer), 1 + (/increase/.test(it.prompt) ? 1 : -1) * p / 100), it.prompt); }
  for (const it of items('multipliers', 2)) {
    const [a, b] = [...it.prompt.matchAll(/(\d+)%/g)].map(m => Number(m[1])), upFirst = /increased by \d+% and then/.test(it.prompt);
    const m = (upFirst ? 1 + a / 100 : 1 - a / 100) * (upFirst ? 1 - b / 100 : 1 + b / 100);
    assert.ok(close(val(it.answer), (m - 1) * 100, 1e-9), it.prompt);
  }
  for (const it of items('multipliers', 3)) {
    const u0 = NUM(it.prompt.match(/has (\d+) fish/)[1]), g = NUM(it.prompt.match(/by (\d+)%/)[1]), c = NUM(it.prompt.match(/then (\d+) fish/)[1]), take = /caught/.test(it.prompt);
    let u = u0; for (let i = 0; i < 3; i++) u = u * (1 + g / 100) + (take ? -c : c);
    assert.equal(it.answer.value, Math.round(u), it.prompt);
  }
});

test('proportion, scale, similarity and rates: recomputed from the printed numbers and graphs', async () => {
  const { fnOf } = await import('../dist/maths/graph.js');
  const POW = { 'directly proportional to x': x => x, 'directly proportional to the square of x': x => x * x, 'directly proportional to the cube of x': x => x ** 3, 'directly proportional to the square root of x': x => Math.sqrt(x), 'inversely proportional to x': x => 1 / x, 'inversely proportional to the square of x': x => 1 / (x * x) };
  for (let lv = 1; lv <= 4; lv++) for (const it of items('prop-equation', lv)) {
    const kind = it.prompt.match(/y is (.+?)\. When/)[1], f = POW[kind], [x1, y1] = it.prompt.match(/When x = (\d+), y = (\d+(?:\.\d+)?)/).slice(1).map(Number), k = y1 / f(x1);
    if (lv < 4) { const x2 = NUM(it.prompt.match(/when x = (\d+)\.$/)[1]); assert.ok(close(val(it.answer), k * f(x2), 1e-9), it.prompt); }
    else for (const x of [1.5, 2, 7]) assert.ok(close(Function('x', `return ${it.answer.expr.replace(/\^/g, '**').replace(/(\d)x/g, '$1*x')}`)(x), k * f(x), 1e-9), it.prompt);
  }
  for (const it of items('prop-graphs', 1)) { const ok = correctOption(it); assert.equal(ok, { 'y is directly proportional to x': 'A straight line through the origin', 'y is inversely proportional to x': 'A curve that gets closer to the axes but never meets them', 'y is proportional to x^2': 'A curve through the origin that gets steeper' }[it.prompt.match(/If (.+?), which/)[1]]); }
  for (const it of items('prop-graphs', 2)) { const xs = it.prompt.match(/x: ([\d, ]+)\./)[1].split(', ').map(Number), ys = it.prompt.match(/y: ([\d, ]+)\./)[1].split(', ').map(Number); assert.equal(correctOption(it) === 'Yes', new Set(ys.map((y, i) => y / xs[i])).size === 1, it.prompt); }
  for (const it of items('prop-graphs', 3)) { const xs = it.prompt.match(/x: ([\d, ]+)\./)[1].split(', ').map(Number), ys = it.prompt.match(/y: ([\d, ?]+)\./)[1].split(', '), i = ys.indexOf('?'), j = i === 0 ? 1 : 0; assert.equal(it.answer.value * xs[i], Number(ys[j]) * xs[j], it.prompt); }
  for (const it of items('scale-maps', 1)) { const n = NUM(it.prompt.match(/1 : (\d+)/)[1]), cm = NUM(it.prompt.match(/are (\d+(?:\.\d+)?) cm/)[1]); assert.ok(close(val(it.answer), (cm * n) / 100000), it.prompt); }
  for (const it of items('scale-maps', 2)) { const n = NUM(it.prompt.match(/1 : (\d+)/)[1]), km = NUM(it.prompt.match(/is (\d+) km/)[1]); assert.ok(close(val(it.answer), (km * 100000) / n), it.prompt); }
  for (const it of items('scale-maps', 3)) { const [a, u] = it.prompt.match(/represents (\d+) (m|km)/).slice(1); assert.equal(it.answer.value, Number(a) * (u === 'm' ? 100 : 100000)); }
  for (const it of items('similar-ratio', 1)) { const [a, b] = it.prompt.match(/are (\d+) cm and (\d+) cm/).slice(1).map(Number), A2 = NUM(it.prompt.match(/triangle is (\d+(?:\.\d+)?) cm/)[1]); assert.ok(close(val(it.answer), (b * A2) / a), it.prompt); }
  for (const it of items('similar-ratio', 2)) { const [p, q] = it.prompt.match(/ratio (\d+) : (\d+)/).slice(1).map(Number), A = NUM(it.prompt.match(/area of (\d+) cm/)[1]); assert.ok(close(val(it.answer), A * (q / p) ** 2), it.prompt); }
  for (const it of items('similar-ratio', 3)) {
    if (/ratio/.test(it.prompt)) { const [p, q] = it.prompt.match(/ratio (\d+) : (\d+)/).slice(1).map(Number), V = NUM(it.prompt.match(/volume of (\d+) cm/)[1]); assert.ok(close(val(it.answer), V * (q / p) ** 3), it.prompt); }
    else { const [V1, V2] = it.prompt.match(/volumes of (\d+) cm³ and (\d+) cm³/).slice(1).map(Number), L = NUM(it.prompt.match(/jug is (\d+) cm/)[1]); assert.ok(close(val(it.answer), L * Math.cbrt(V2 / V1), 1e-9), it.prompt); }
  }
  for (let lv = 1; lv <= 3; lv++) for (const it of items('unit-convert', lv)) {
    const p = it.prompt; let want;
    if (/km\/h into m\/s/.test(p)) want = (NUM(p.match(/Change (\d+)/)[1]) * 1000) / 3600;
    else if (/m\/s into km\/h/.test(p)) want = NUM(p.match(/Change (\d+)/)[1]) * 3.6;
    else if (/g\/cm³/.test(p)) want = NUM(p.match(/density of (\d+(?:\.\d+)?)/)[1]) * 1000;
    else if (/litres per minute/.test(p)) want = (NUM(p.match(/at (\d+) litres/)[1]) * 1000) / 60;
    else if (/m² into cm²/.test(p)) want = NUM(p.match(/Change (\d+(?:\.\d+)?)/)[1]) * 10000;
    else want = NUM(p.match(/holds (\d+) cm/)[1]) / 1000;
    assert.ok(close(val(it.answer), want, 1e-9), p);
  }
  for (const it of items('rates-graphs', 1)) { const [[x1, y1], [x2, y2]] = it.graph.polys[0].pts; assert.equal(it.answer.value, (y2 - y1) / (x2 - x1)); }
  for (const it of items('rates-graphs', 2)) { const f = fnOf(it.graph.fns[0].expr), [t1, t2] = it.prompt.match(/between t = (\d+) and t = (\d+)/).slice(1).map(Number); assert.ok(close(val(it.answer), (f(t2) - f(t1)) / (t2 - t1), 1e-9), it.prompt); }
  for (const it of items('rates-graphs', 3)) { const f = fnOf(it.graph.fns[0].expr), [t1, t2] = it.prompt.match(/from t = (\d+) to t = (\d+)/).slice(1).map(Number), inst = (f(t2 + 1e-6) - f(t2 - 1e-6)) / 2e-6, avg = (f(t2) - f(t1)) / (t2 - t1); assert.equal(correctOption(it).startsWith('The speed at'), inst > avg, it.prompt); }
});

test('ratio lesson records: ids, refs, prerequisites, visuals, check plans and tiers', () => {
  assert.equal(new Set(ratioLessons.map(l => l.id)).size, ratioLessons.length);
  assert.deepEqual(orderedRatio.map(l => l.id), ratioOrder);
  const known = new Set([...numberLessons, ...orderedAlgebra].map(l => l.id));
  for (const l of orderedRatio) {
    assert.equal(l.topicId, 'maths.ratio');
    assert.ok(l.refs.every(r => /^R\d{1,2}$/.test(r)), l.id);
    for (const p of l.prerequisites || []) assert.ok(known.has(p), `${l.id} prerequisite ${p} must come earlier`);
    known.add(l.id);
    assert.ok(l.learn.length >= 3);
    for (const c of l.learn) assert.ok(c.example.steps.length && (visual6(c.visual) || visual7(c.visual) || visual9(c.visual)).length > 20, `${l.id}: ${c.title}`);
    assert.equal(l.checkPlan.length, 10);
    for (const [id, lv] of l.checkPlan) { assert.ok(l.skills.some(sk => sk.id === id)); assert.ok(lv >= 1 && lv <= skillById[id].levels.length); }
    assert.equal(new Set(l.checkPlan.map(([id]) => id)).size, l.skills.length);
    for (const [id, lv] of l.checkPlan) assert.ok(!levelsFor(skillById[id], 'Foundation')[Math.min(lv, topLevel(skillById[id], 'Foundation')) - 1].higher);
    const s = freshMaths();
    assert.deepEqual(lessonDone(lessonState(s, l.id), l, 'Foundation', s), { discover: false, investigate: false, practise: false, check: false });
  }
  const higher = ratioSkills.flatMap(sk => sk.levels.map((l, i) => (l.higher ? `${sk.id}@${i + 1}` : null)).filter(Boolean));
  assert.deepEqual(higher.sort(), ['maths.ratio.multipliers@3', 'maths.ratio.prop-equation@3', 'maths.ratio.prop-equation@4', 'maths.ratio.rates-graphs@2', 'maths.ratio.rates-graphs@3', 'maths.ratio.similar-ratio@2', 'maths.ratio.similar-ratio@3']);
  for (const sk of ratioSkills) assert.ok(sk.levels.slice(0, levelsFor(sk, 'Foundation').length).every(l => !l.higher), sk.id);
});

test('inactive Ratio model callbacks cannot write to a previous view', async () => {
  const { MODELS10 } = await import('../dist/maths/models-ratio2.js');
  for (const mount of [...Object.values(MODELS9), ...Object.values(MODELS10)]) {
    const stale = new Proxy({}, { get() { throw new Error('stale DOM read'); }, set() { throw new Error('stale DOM write'); } });
    assert.doesNotThrow(() => mount({ w: {}, tier: 'Higher', panel: stale, body: stale, isActive: () => false, setTitle() { throw new Error('stale title'); } }));
  }
});

test('every maths worked-example visual renders through the studio dispatch chain, by the right drawer', async () => {
  const chain = [
    (await import('../dist/maths/models-number.js')).visual, (await import('../dist/maths/models-number2.js')).visual2, (await import('../dist/maths/models-number3.js')).visual3,
    (await import('../dist/maths/models-algebra.js')).visual4, (await import('../dist/maths/models-algebra2.js')).visual5, (await import('../dist/maths/models-graphs.js')).visual6, visual7, visual9,
  ];
  for (const l of [...numberLessons, ...orderedAlgebra, ...orderedRatio]) for (const c of l.learn) {
    let first = -1, html = '';
    for (let i = 0; i < chain.length && first < 0; i++) { html = chain[i](c.visual); if (html) first = i; }
    assert.ok(first >= 0 && html.length > 20 && !/NaN|undefined/.test(html), `${l.id}: ${c.title} has no visual`);
    // a kind owned by a later drawer must not be swallowed by an earlier one
    const owners = chain.map((f, i) => { try { return f(c.visual) ? i : -1; } catch { return -2; } }).filter(i => i !== -1);
    assert.equal(owners.length, 1, `${l.id}: ${c.title} visual kind "${c.visual?.kind}" is claimed by drawers ${owners.join(', ')}`);
  }
});
