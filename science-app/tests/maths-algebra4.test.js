// Algebra batch 5 (gaps): further sequences, surd expressions, exponential graphs, areas under
// curves and money gradients, strict regions. Each item is checked against its printed prompt or its
// own graph data with plain JavaScript (numeric surds, brute force, Simpson integration).
import test from 'node:test';
import assert from 'node:assert/strict';
import { allSkills, generate } from '../dist/maths/skills.js';
import { mark } from '../dist/maths/answers.js';
import { exactNumber } from '../dist/maths/exact.js';
import { fnOf } from '../dist/maths/graph.js';

const N = 200;
const ids = ['seq-further', 'surd-algebra', 'graph-exponential', 'area-curve', 'regions-strict'].map(s => 'maths.algebra.' + s);
const skills = allSkills.filter(sk => ids.includes(sk.id));
const close = (a, b, tol = 1e-7) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
const NUM = t => Number(String(t).replace(/−/g, '-'));
const fv = f => f.n / f.d;
const items = (id, lv, n = N) => Array.from({ length: n }, (_, i) => generate(id, lv, 'b5-' + i));
const correctOption = it => it.answer.options[it.answer.answer];
/** Numeric value of markup with surds and fractions: "2√5", "{4/3 + √5}", "(√2 + √3)^2". */
function numeric(markup) {
  let e = markup.replace(/−/g, '-').replace(/\s+/g, '');
  for (let i = 0; i < 3; i++) e = e.replace(/\{([^{}]+)\/([^{}]+)\}/g, '(($1)/($2))');
  e = e.replace(/(\d)√/g, '$1*√').replace(/√(\d+)/g, 'Math.sqrt($1)').replace(/\)\(/g, ')*(').replace(/(\d)\(/g, '$1*(').replace(/\^/g, '**');
  assert.match(e.replace(/Math\.sqrt/g, ''), /^[\d+\-*/().]+$/, markup);
  return Function(`return (${e});`)();
}
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'solutions') return a.sols.map(r => r.map(v => `${v.n}/${v.d}`).join(',')).join(';');
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'decimal') return String(a.value.n / a.value.d);
  if (a.kind === 'exact') return `${a.a.n}/${a.a.d}${a.b.n < 0 ? '-' : '+'}${Math.abs(a.b.n)}√${a.r}/${a.b.d}`;
  if (a.kind === 'points') return a.points.map(p => p.join(',')).join(';');
  throw new Error(a.kind);
}

test('gap skills: deterministic, JSON-safe, self-marking, traps wrong and explained', () => {
  assert.equal(skills.length, 5);
  for (const sk of skills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = generate(sk.id, lv, 'g' + i), txt = JSON.stringify(it);
    assert.equal(txt, JSON.stringify(generate(sk.id, lv, 'g' + i)));
    assert.deepEqual(JSON.parse(txt), it);
    assert.doesNotMatch(txt, /NaN|undefined|Infinity|\[object/, `${sk.id}@${lv}: ${it.prompt}`);
    assert.doesNotMatch(it.prompt, /(^|[\s(=:,×÷])-\d/, it.prompt);
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', `${sk.id}@${lv}#${i}: ${it.prompt}`);
    for (const t of it.traps || []) { assert.notEqual(mark(it.answer, t.v.d === 1 ? String(t.v.n) : String(t.v.n / t.v.d)).status, 'correct', `${sk.id} trap`); assert.ok(t.why.length > 20); }
    for (const t of it.soTraps || []) { assert.notEqual(mark(it.answer, t.sols.map(r => r.map(v => `${v.n}/${v.d}`).join(',')).join(';')).status, 'correct'); assert.ok(t.why.length > 20); }
    for (const t of it.exTraps || []) { assert.ok(!close(exactNumber(t), exactNumber(it.answer)), `${sk.id} exact trap equals answer: ${it.prompt}`); assert.ok(t.why.length > 20); }
    if (it.answer.kind === 'choice') it.optionWhy.forEach((w, k) => (k === it.answer.answer ? assert.equal(w, null) : assert.ok(w && w.length > 15)));
  }
});

test('sequences and surds: recomputed from the printed terms and expressions', () => {
  for (const it of items('maths.algebra.seq-further', 1)) {
    const [a, t3] = it.prompt.match(/first term is (\d+) and the third term is (\d+)/).slice(1).map(Number), t = [a, t3 - a];
    while (t.length < 5) t.push(t.at(-1) + t.at(-2));
    assert.equal(t[2], t3); assert.equal(it.answer.value, t[4]);
  }
  for (const it of items('maths.algebra.seq-further', 2)) {
    const [P, Q] = it.prompt.match(/third term is (\d+) and the fifth term is (\d+)/).slice(1).map(Number), t = it.answer.sols[0].map(fv);
    while (t.length < 5) t.push(t.at(-1) + t.at(-2));
    assert.equal(t[2], P); assert.equal(t[4], Q); assert.ok(t[0] > 0 && t[1] > 0);
  }
  for (const it of items('maths.algebra.seq-further', 3)) {
    const terms = it.prompt.match(/sequence (.+?), … has/)[1].split(', ').map(numeric), s = NUM(it.prompt.match(/ratio √(\d+)/)[1]), k = NUM(it.prompt.match(/the (\d+)th term/)[1]);
    for (let i = 1; i < terms.length; i++) assert.ok(close(terms[i] / terms[i - 1], Math.sqrt(s)), it.prompt);
    assert.ok(close(exactNumber(it.answer), terms[0] * Math.sqrt(s) ** (k - 1)), it.prompt);
  }
  for (const it of items('maths.algebra.seq-further', 4)) {
    const [T3, T5] = it.prompt.match(/third term is (\d+) and the fifth term is (\d+)/).slice(1).map(Number), [rr, a] = it.answer.sols[0].map(fv);
    assert.ok(rr > 0); assert.equal(a * rr ** 2, T3); assert.equal(a * rr ** 4, T5);
  }
  for (let lv = 1; lv <= 3; lv++) for (const it of items('maths.algebra.surd-algebra', lv)) {
    const e = it.prompt.replace(/^(Expand and simplify |Simplify |Rationalise the denominator of )/, '').replace(/\. Give.*$/, '');
    const want = numeric(e), got = it.answer.kind === 'integer' ? it.answer.value : exactNumber(it.answer);
    assert.ok(close(got, want, 1e-9), `${it.prompt}: ${got} vs ${want}`);
    if (it.answer.kind === 'exact' && lv === 2) assert.ok(!/√/.test(String(it.answer.a.d)), 'rational part has no surd');
  }
});

test('exponential graphs: values, parameters and threshold times agree with direct calculation', () => {
  for (const it of items('maths.algebra.graph-exponential', 1)) {
    const [, a, b, t] = it.prompt.match(/= (\d+) × ([\d.]+)\^t\. Work out \w when t = (\d+)/).map(NUM);
    assert.ok(close(it.answer.value, a * b ** t), it.prompt);
  }
  for (const it of items('maths.algebra.graph-exponential', 2)) {
    const pts = [...it.prompt.matchAll(/\((\d+), (\d+)\)/g)].map(m => [NUM(m[1]), NUM(m[2])]), [a, b] = it.answer.sols[0].map(fv);
    for (const [x, y] of pts) assert.ok(close(a * b ** x, y), it.prompt);
    const f = fnOf(it.graph.fns[0].expr); for (const [x, y] of pts) assert.ok(close(f(x), y), 'graph passes through the printed points');
  }
  for (const it of items('maths.algebra.graph-exponential', 3)) {
    const [, P, m] = it.prompt.match(/V = (\d+) × ([\d.]+)\^t/).map(NUM), X = NUM(it.prompt.match(/than £(\d+)/)[1]), up = /more than/.test(it.prompt);
    let t = 0; while (up ? P * m ** t <= X : P * m ** t >= X) t++;
    assert.equal(it.answer.value, t, it.prompt); assert.ok(it.calculator);
  }
});

test('areas under curves and money gradients: trapezium rule, integration and gradients from the data', () => {
  for (const it of items('maths.algebra.area-curve', 1)) {
    const ts = it.prompt.match(/t = ([\d, ]+) are/)[1].split(', ').map(Number), vs = it.prompt.match(/are ([\d, ]+) m\/s/)[1].split(', ').map(Number), h = ts[1] - ts[0];
    let est = 0; for (let i = 0; i < vs.length - 1; i++) est += (h * (vs[i] + vs[i + 1])) / 2;
    assert.ok(close(fv(it.answer.value), est), it.prompt);
    const f = fnOf(it.graph.fns[0].expr); ts.forEach((t, i) => assert.ok(close(f(t), vs[i]), 'printed values lie on the drawn curve'));
  }
  for (const it of items('maths.algebra.area-curve', 2)) {
    const f = fnOf(it.graph.fns[0].expr), T = it.graph.xr[1], n = it.graph.polys.length, h = T / n;
    let est = 0; for (let i = 0; i < n; i++) est += (h * (f(i * h) + f((i + 1) * h))) / 2;
    let area = 0; const m = 2000, d = T / m; for (let i = 0; i < m; i++) area += (d / 6) * (f(i * d) + 4 * f((i + 0.5) * d) + f((i + 1) * d));
    assert.ok(Math.abs(est - area) > 1e-6, 'curve is not a straight line');
    assert.equal(correctOption(it).startsWith('An overestimate'), est > area, it.prompt);
  }
  for (const it of items('maths.algebra.area-curve', 3)) {
    const [[x1, y1], [x2, y2]] = it.graph.polys[0].pts, grad = (y2 - y1) / (x2 - x1);
    assert.ok(close(it.answer.value, /pence/.test(it.prompt) ? grad * 100 : grad), it.prompt);
    for (const [x, y] of it.graph.points) assert.ok(it.graph.polys[0].pts.some(p => p[0] === x && p[1] === y));
  }
});

test('strict regions: dashed lines match strict inequalities; plotted points found by brute force', () => {
  for (const it of items('maths.algebra.regions-strict', 1)) {
    const op = it.prompt.match(/region y (<|≤|>|≥)/)[1];
    assert.equal(correctOption(it).startsWith('Dashed'), op === '<' || op === '>', it.prompt);
    assert.equal(correctOption(it).endsWith('not included'), op === '<' || op === '>');
  }
  const test3 = (txt, x, y) => txt.split(', ').every(t => { const [, lhs, op, rhs] = t.match(/^(x|y) (<|≤|>|≥) (.+)$/); const L = lhs === 'x' ? x : y, R = Function('x', `return ${rhs.replace(/−/g, '-').replace(/(\d)x/g, '$1*x')};`)(x); return op === '<' ? L < R : op === '≤' ? L <= R : op === '>' ? L > R : L >= R; });
  for (const it of items('maths.algebra.regions-strict', 2)) {
    const ok = correctOption(it), g = it.graph;
    const [cx, cy] = g.region.reduce((s, p) => [s[0] + p[0] / 3, s[1] + p[1] / 3], [0, 0]);
    assert.ok(test3(ok, cx, cy), 'centroid of the shaded region satisfies the correct inequalities');
    const strict = [g.vlines[0].dash, g.fns[1].dash, g.fns[0].dash], parts = ok.split(', ');
    parts.forEach((p, i) => assert.equal(/<|>/.test(p.replace(/≤|≥/g, '')), strict[i], `${p} vs dashed=${strict[i]}`));
    for (const o of it.answer.options.filter(o => o !== ok)) assert.notDeepEqual(o.split(', ').map(p => /[<>]/.test(p.replace(/≤|≥/g, ''))), strict);
  }
  for (const it of items('maths.algebra.regions-strict', 3)) {
    const set = it.prompt.match(/satisfies (.+)\.$/)[1].replace(' and ', ', ');
    const want = []; for (let x = -10; x <= 10; x++) for (let y = -10; y <= 10; y++) if (test3(set, x, y)) want.push([x, y]);
    assert.deepEqual(it.answer.points.map(p => p.join(',')).sort(), want.map(p => p.join(',')).sort(), it.prompt);
  }
});
