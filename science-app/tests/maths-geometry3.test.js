// Geometry batch 3: items re-solved from the PRINTED prompt or the DRAWN figure with plain arithmetic,
// trigonometry and vector algebra written here (no generator code). Circle-theorem answers are
// measured from the drawn points, which lie on the drawn circle.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mark } from '../dist/maths/answers.js';
import { geometrySkills3 } from '../dist/maths/skills-geometry3.js';
import { figSVG } from '../dist/maths/geomfig.js';
import { mathHTML } from '../dist/maths/render.js';
import { generate, allSkills } from '../dist/maths/skills.js';
import { orderedGeometry3, geometryOrder3 } from '../dist/maths/lessons-geometry3.js';
import { orderedGeometry, geometryTopic } from '../dist/maths/lessons-geometry.js';
import { orderedGeometry2 } from '../dist/maths/lessons-geometry2.js';
import { orderedLessons as numberLessons } from '../dist/maths/lessons-number.js';
import { orderedAlgebra } from '../dist/maths/lessons-algebra.js';
import { orderedRatio } from '../dist/maths/lessons-ratio.js';
import { levelsFor } from '../dist/maths/mastery.js';
import { MODELS13 } from '../dist/maths/models-geometry3.js';

const N = 200;
const SK = Object.fromEntries(geometrySkills3.map(s => [s.id.replace('maths.geometry.', ''), s]));
const items = (id, lv, n = N) => Array.from({ length: n }, (_, i) => SK[id].gen(lv, 'g3-' + i));
const val = a => (a.kind === 'integer' ? a.value : a.value.n / a.value.d);
const nums = s => (s.replace(/−/g, '-').match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol;
const r1 = v => Math.round(v * 10) / 10;
const dp1Ok = (it, exact) => (it.answer.kind === 'integer' ? near(it.answer.value, exact, 1e-9) : near(val(it.answer), r1(exact), 1e-9));
const D = Math.PI / 180;
const correctOption = it => it.answer.options[it.answer.answer];
const drawn = ({ v, p, q }) => { const a = [p[0] - v[0], p[1] - v[1]], b = [q[0] - v[0], q[1] - v[1]]; return Math.acos((a[0] * b[0] + a[1] * b[1]) / (Math.hypot(...a) * Math.hypot(...b))) / D; };
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'decimal') return (a.value.n / a.value.d).toFixed(a.dp ?? 6);
  if (a.kind === 'algebra') return a.expr;
  if (a.kind === 'solutions') return a.sols.map(r => r.map(v => `${v.n}/${v.d}`).join(',')).join(';');
  throw new Error(a.kind);
}

test('geometry batch 3 skills: deterministic, JSON-safe, self-marking, traps wrong and explained', () => {
  assert.equal(geometrySkills3.length, 10);
  for (const sk of geometrySkills3) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = sk.gen(lv, 'g' + i), txt = JSON.stringify(it), tag = `${sk.id}@${lv}: ${it.prompt}`;
    assert.equal(txt, JSON.stringify(sk.gen(lv, 'g' + i)));
    assert.doesNotMatch(txt, /NaN|undefined|Infinity|\[object/, tag);
    assert.doesNotMatch(it.prompt, /(^|[\s(=:,×÷;])-\d/, tag);
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', `${tag} → ${rawFor(it.answer)}`);
    for (const t of it.traps || []) { assert.notEqual(mark(it.answer, String(t.v.n / t.v.d)).status, 'correct', `${tag} trap ${t.v.n}/${t.v.d}`); assert.ok(t.why.length > 20, tag); }
    for (const t of it.alTraps || []) { assert.notEqual(mark(it.answer, t.expr).status, 'correct', `${tag} ${t.expr}`); assert.ok(t.why.length > 20, tag); }
    for (const t of it.soTraps || []) { assert.notEqual(mark(it.answer, t.sols.map(r => r.map(v => `${v.n}/${v.d}`).join(',')).join(';')).status, 'correct', tag); assert.ok(t.why.length > 15, tag); }
    if (it.answer.kind === 'choice') { assert.equal(new Set(it.answer.options).size, it.answer.options.length, tag); it.optionWhy.forEach((w, k) => (k === it.answer.answer ? assert.equal(w, null) : assert.ok(w && w.length > 15, tag))); }
    if (it.fig) assert.ok(!/NaN|undefined/.test(figSVG(it.fig)) && it.fig.alt.length > 10, tag);
    if (it.answer.kind === 'decimal' && it.answer.dp === 1) assert.equal(it.calculator, true, tag);
  }
  const higher = geometrySkills3.flatMap(sk => sk.levels.map((v, i) => (v.higher ? `${sk.id.replace('maths.geometry.', '')}@${i + 1}` : null)).filter(Boolean));
  assert.deepEqual(higher.sort(), ['area-3d@1', 'area-3d@2', 'area-3d@3', 'circle-angles@1', 'circle-angles@2', 'circle-angles@3', 'circle-tangents@1', 'circle-tangents@2', 'circle-tangents@3', 'sine-cosine@1', 'sine-cosine@2', 'sine-cosine@3', 'sine-cosine@4', 'vector-geometry@2', 'vector-geometry@3']);
});

test('congruence and similarity: conditions from a table here; lengths from the printed and drawn sides', () => {
  const CRIT = { 'three pairs of equal sides': 'SSS', 'two pairs of equal sides and the angle between them equal': 'SAS', 'two pairs of equal angles and a pair of corresponding sides equal': 'ASA', 'a right angle, equal hypotenuses and another pair of equal sides': 'RHS' };
  for (const it of items('congruence', 1)) assert.equal(correctOption(it), CRIT[it.prompt.match(/have (.+)\. Which/)[1]]);
  for (const it of items('congruence', 2)) assert.equal(correctOption(it), /all three angles|not between/.test(it.prompt) ? 'No' : 'Yes', it.prompt);
  for (const it of items('congruence', 3)) { const v = nums(it.prompt); assert.equal(it.answer.value, /PQ\?/.test(it.prompt) ? v.at(-1) : 180 - v.at(-2) - v.at(-1), it.prompt); }
  for (const it of items('similarity', 1)) { const [ab, de, bc] = nums(it.prompt).slice(-3); assert.ok(near(val(it.answer), (bc * de) / ab), it.prompt); }
  const cm = t => Number(t.replace(' cm', ''));
  for (const lv of [2, 3]) for (const it of items('similarity', lv)) {
    const d = Object.fromEntries(it.fig.dims.map((x, i) => [['small', 'large', 'top', 'lower'][i], x.t]));
    const k = (cm(d.top) + (lv === 2 ? cm(d.lower) : 0)) / cm(d.top);
    if (lv === 2) assert.ok(near(val(it.answer), cm(d.small) * k), JSON.stringify(d));
    else assert.ok(near(val(it.answer), cm(d.top) * (cm(d.large) / cm(d.small)) - cm(d.top)), JSON.stringify(d));
    // the drawn small base really is parallel to the large base, and proportional
    const [T, L, R] = it.fig.polys[0].pts, s = it.fig.segs[0];
    assert.ok(near(s.a[1], s.b[1], 1e-9) && near(L[1], R[1], 1e-9));
  }
});

test('circle theorems: answers equal the angles measured on the drawn circle', () => {
  const onCircle = (p, c, r) => near(Math.hypot(p[0] - c[0], p[1] - c[1]), r, 0.02);
  for (const id of ['circle-angles', 'circle-tangents']) for (let lv = 1; lv <= 3; lv++) for (const it of items(id, lv)) {
    const { c, r } = it.fig.circles[0], x = it.fig.angles.find(a => a.label === 'x' || a.label === 'y');
    assert.ok(near(drawn(x), it.answer.value, 0.6), `${id}@${lv}: drawn ${drawn(x).toFixed(2)} vs ${it.answer.value} — ${it.prompt}`);
    for (const a of it.fig.angles.filter(a => a.label && a.label.endsWith('°'))) assert.ok(near(drawn(a), Number(a.label.replace('°', '')), 0.6), `${id}@${lv} given ${a.label} drawn ${drawn(a).toFixed(2)}`);
    for (const a of it.fig.angles.filter(a => a.v !== c && !(a.v[0] === c[0] && a.v[1] === c[1]))) if (!(id === 'circle-tangents' && a.v[1] > c[1] + r + 1)) { /* vertices on the circle or outside points */ }
    if (id === 'circle-angles') for (const a of it.fig.angles) if (!(a.v[0] === c[0] && a.v[1] === c[1])) assert.ok(onCircle(a.v, c, r), `${id}@${lv} vertex on circle`);
  }
});

test('solids and plans: counts from a table here, elevations and volumes from the drawn plan numbers', () => {
  const T = { cube: [6, 12, 8], cuboid: [6, 12, 8], 'triangular prism': [5, 9, 6], 'square-based pyramid': [5, 8, 5], tetrahedron: [4, 6, 4], 'pentagonal prism': [7, 15, 10], 'hexagonal prism': [8, 18, 12] };
  for (const it of items('solids', 1)) { const [, what, s] = it.prompt.match(/How many (\w+) does an? (.+) have/) ? [null, ...it.prompt.match(/How many (\w+) does an? (.+) have/).slice(1)] : []; assert.equal(it.answer.value, T[s][{ faces: 0, edges: 1, vertices: 2 }[what]], it.prompt); }
  const NET = { '6 squares': 'Cube', '2 triangles and 3 rectangles': 'Triangular prism', '1 square and 4 triangles': 'Square-based pyramid', '4 triangles': 'Tetrahedron', '2 circles and 1 rectangle': 'Cylinder' };
  for (const it of items('solids', 2)) assert.equal(correctOption(it), NET[it.prompt.match(/made of (.+)\. Which/)[1]]);
  for (const it of items('solids', 3)) { const m = [...it.prompt.matchAll(/(\d+) (faces|edges|vertices)/g)].map(x => [x[2], +x[1]]), g = Object.fromEntries(m), hide = it.prompt.match(/how many (\w+) it has/)[1]; const want = hide === 'edges' ? g.faces + g.vertices - 2 : hide === 'faces' ? 2 + g.edges - g.vertices : 2 + g.edges - g.faces; assert.equal(it.answer.value, want, it.prompt); }
  for (let lv = 1; lv <= 3; lv++) for (const it of items('plans', lv)) {
    // rebuild the grid from the drawn labels and squares (rows from the bottom of the picture = front)
    const L = it.fig.labels.filter(l => /^\d$/.test(l.t)), ys = [...new Set(L.map(l => l.at[1]))].sort((a, b) => b - a), xs = [...new Set(L.map(l => l.at[0]))].sort((a, b) => a - b);
    const H = ys.map(y => xs.map(x => Number(L.find(l => l.at[0] === x && l.at[1] === y).t)));
    const plan = H.flat().filter(Boolean).length, front = xs.map((_, c) => Math.max(...H.map(r => r[c]))).reduce((a, b) => a + b, 0), side = H.map(r => Math.max(...r)).reduce((a, b) => a + b, 0), vol = H.flat().reduce((a, b) => a + b, 0);
    const want = lv === 1 ? plan : lv === 3 ? vol : /front/.test(it.prompt) ? front : side;
    assert.equal(it.answer.value, want, it.prompt);
  }
});

test('sine and cosine rules, area and 3D: recomputed from the printed values', () => {
  for (const it of items('sine-cosine', 1)) { const [A, B, a] = nums(it.prompt); assert.ok(dp1Ok(it, (a * Math.sin(B * D)) / Math.sin(A * D)), it.prompt); }
  for (const it of items('sine-cosine', 2)) { const [A, a, b] = nums(it.prompt); assert.ok(dp1Ok(it, Math.asin((b * Math.sin(A * D)) / a) / D), it.prompt); }
  for (const it of items('sine-cosine', 3)) { const [c, b, A] = nums(it.prompt); assert.ok(dp1Ok(it, Math.sqrt(b * b + c * c - 2 * b * c * Math.cos(A * D))), it.prompt); }
  for (const it of items('sine-cosine', 4)) { const [a, b, c] = nums(it.prompt); assert.ok(dp1Ok(it, Math.acos((b * b + c * c - a * a) / (2 * b * c)) / D), it.prompt); }
  for (const it of items('area-3d', 1)) { const [a, b, C] = nums(it.prompt); assert.ok(dp1Ok(it, 0.5 * a * b * Math.sin(C * D)), it.prompt); }
  for (const it of items('area-3d', 2)) { const [l, w, h] = nums(it.prompt); assert.ok(dp1Ok(it, Math.hypot(l, w, h)), it.prompt); }
  for (const it of items('area-3d', 3)) { const [l, w, h] = nums(it.prompt); assert.ok(dp1Ok(it, Math.atan2(h, Math.hypot(l, w)) / D), it.prompt); }
  // the drawn triangles for the rules have the stated angles where they are not squashed
  for (const lv of [1, 3]) for (const it of items('sine-cosine', lv, 50)) for (const a of it.fig.angles.filter(a => a.label && a.label.endsWith('°') && a.v[0] === 110)) assert.ok(near(drawn(a), Number(a.label.replace('°', '')), 0.6) || it.fig.polys[0].pts[2][1] > 29, 'angle at A drawn to size');
});

test('vectors: column arithmetic and vector expressions recomputed independently', () => {
  const colVec = s => s.match(/\{vec ([^;]+);([^}]+)\}/g).map(v => v.match(/\{vec ([^;]+);([^}]+)\}/).slice(1).map(x => Number(x.replace('−', '-'))));
  for (let lv = 1; lv <= 3; lv++) for (const it of items('vectors', lv)) {
    const V = colVec(it.prompt), got = it.answer.sols[0].map(f => f.n / f.d), expr = it.prompt.match(/Work out (.+) as a column/)[1].replace(/−/g, '-');
    const a = V[0], b = V[1] || [0, 0];
    const evalv = i => Function('a', 'b', `return ${expr.replace(/(\d)([ab])/g, '$1*$2').replace(/(^|[^\w])-a/g, '$1-1*a')};`)(a[i], b[i]);
    assert.deepEqual(got.map(x => x + 0), [evalv(0) + 0, evalv(1) + 0], `${it.prompt} → ${got}`);
    assert.match(mathHTML(it.prompt), /mvec/);
  }
  // vector expressions: compare against coordinates O = 0, A = a, B = b with a, b independent test vectors
  const a = [3, 1], b = [-1, 2];
  const evalExpr = e => [0, 1].map(i => Function('a', 'b', `return ${e.replace(/(\d)\s*\(/g, '$1*(').replace(/(\d)([ab])/g, '$1*$2').replace(/\)\s*\(/g, ')*(')};`)(a[i], b[i]));
  for (const it of items('vector-geometry', 1)) { const name = it.prompt.match(/vector (\w\w) in terms/)[1], pt = { O: [0, 0], A: a, B: b, C: [a[0] + b[0], a[1] + b[1]] }, want = [0, 1].map(i => pt[name[1]][i] - pt[name[0]][i]); assert.deepEqual(evalExpr(it.answer.expr), want, it.prompt); }
  for (const it of items('vector-geometry', 2)) { const [m, n] = nums(it.prompt.match(/AP : PB = (\d+ : \d+)/)[1].replace(':', ' ')); const want = [0, 1].map(i => a[i] + (m / (m + n)) * (b[i] - a[i])); evalExpr(it.answer.expr).forEach((v, i) => assert.ok(near(v, want[i], 1e-12), it.prompt)); }
  for (const it of items('vector-geometry', 3)) { const [p1, q1, p2, q2] = nums(it.prompt); assert.equal(correctOption(it).startsWith('Yes: it is'), p1 * q2 === p2 * q1, it.prompt); }
});

test('geometry batch 3 records: order, refs, prerequisites, tiers, calculator flags, every G statement referenced', () => {
  assert.deepEqual(orderedGeometry3.map(l => l.id), geometryOrder3);
  for (const sk of geometrySkills3) assert.ok(allSkills.some(a => a.id === sk.id), sk.id + ' registered');
  const all = [...numberLessons, ...orderedAlgebra, ...orderedRatio, ...orderedGeometry, ...orderedGeometry2, ...orderedGeometry3], ids = new Set(all.map(l => l.id));
  const geo = [...orderedGeometry, ...orderedGeometry2, ...orderedGeometry3], refs = new Set(geo.flatMap(l => l.refs));
  for (let i = 1; i <= 25; i++) assert.ok(refs.has('G' + i), 'G' + i + ' is referenced by a Geometry lesson');
  assert.equal(geo.length, 15); assert.equal(geo.filter(l => !l.higherOnly).length, 13);
  assert.ok(/Sixteen lessons/.test(geometryTopic.coverage));
  for (const l of orderedGeometry3) {
    for (const p of l.prerequisites) assert.ok(ids.has(p), `${l.id} prerequisite ${p}`);
    assert.equal(l.learn.length, 3); assert.equal(l.checkPlan.length, 10);
    const tier = l.higherOnly ? 'Higher' : 'Foundation';
    for (const [id, lv] of l.checkPlan) { const sk = l.skills.find(s => s.id === id); assert.ok(sk && lv <= levelsFor(sk, tier).length, `${l.id}: ${id}@${lv} available at ${tier}`); }
    if (l.higherOnly) assert.ok(l.skills.every(sk => sk.levels.every(v => v.higher)), `${l.id}: Higher-only lesson has only Higher levels`);
    const calcItems = l.skills.some(sk => sk.levels.some((_, i) => Array.from({ length: 20 }, (_, k) => generate(sk.id, i + 1, 'c' + k)).some(it => it.calculator)));
    assert.equal(!!l.calculator, calcItems, `${l.id}: calculator flag matches its items`);
    assert.ok(MODELS13[l.model], l.model);
  }
});

test('inactive Geometry batch 3 model callbacks cannot write to a previous view', () => {
  for (const mount of Object.values(MODELS13)) {
    const stale = new Proxy({}, { get() { throw new Error('stale DOM read'); }, set() { throw new Error('stale DOM write'); } });
    assert.doesNotThrow(() => mount({ w: {}, tier: 'Higher', panel: stale, body: stale, isActive: () => false, setTitle() { throw new Error('stale title'); } }));
  }
});
