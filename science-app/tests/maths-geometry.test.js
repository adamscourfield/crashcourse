// Geometry batch 1: every item is re-solved from its PRINTED prompt or its DRAWN figure (labels,
// dimension texts, or the angle actually drawn), with plain arithmetic and a property table written
// here, not imported from the generator.
import test from 'node:test';
import assert from 'node:assert/strict';
import { allSkills, generate } from '../dist/maths/skills.js';
import { mark } from '../dist/maths/answers.js';
import { orderedGeometry, geometryLessons, geometryOrder, geometryTopic } from '../dist/maths/lessons-geometry.js';
import { orderedLessons as numberLessons } from '../dist/maths/lessons-number.js';
import { orderedAlgebra } from '../dist/maths/lessons-algebra.js';
import { orderedRatio } from '../dist/maths/lessons-ratio.js';
import { levelsFor } from '../dist/maths/mastery.js';
import { figSVG, visualGeo } from '../dist/maths/geomfig.js';
import { visual7 } from '../dist/maths/models-algebra3.js';
import { MODELS11 } from '../dist/maths/models-geometry.js';

const N = 200;
const geoSkills = allSkills.filter(sk => sk.id.startsWith('maths.geometry.'));
const items = (id, lv, n = N) => Array.from({ length: n }, (_, i) => generate('maths.geometry.' + id, lv, 'gt-' + i));
const val = a => (a.kind === 'integer' ? a.value : a.value.n / a.value.d);
const correctOption = it => it.answer.options[it.answer.answer];
const deg = s => Number(String(s).replace('°', ''));
const cm = s => Number(String(s).replace(/ ?cm$/, ''));
const nums = s => (s.match(/\d+(?:\.\d+)?/g) || []).map(Number);
const labelled = it => it.fig.angles.map(a => a.label).filter(l => l && /°$/.test(l)).map(deg);
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol;
// a 1 d.p. answer must be the true value correctly rounded (within half a unit in the last place)
const dp1Ok = (it, exact) => it.answer.dp === 1 && near(val(it.answer), Math.round(exact * 10) / 10, 1e-9);
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'decimal') return (a.value.n / a.value.d).toFixed(a.dp ?? 6);
  if (a.kind === 'exact') return `${a.b.n}${a.b.d > 1 ? '/' + a.b.d : ''}π`;
  throw new Error(a.kind);
}
// angle drawn at v between rays to p and q, in degrees (0–180), y axis pointing down
const drawn = ({ v, p, q }) => { const a = [p[0] - v[0], v[1] - p[1]], b = [q[0] - v[0], v[1] - q[1]]; return (Math.acos((a[0] * b[0] + a[1] * b[1]) / (Math.hypot(...a) * Math.hypot(...b))) * 180) / Math.PI; };
const ccw = ({ v, p, q }) => { const a = Math.atan2(v[1] - p[1], p[0] - v[0]), b = Math.atan2(v[1] - q[1], q[0] - v[0]); return ((((b - a) * 180) / Math.PI) % 360 + 360) % 360; };

test('geometry skills: deterministic, JSON-safe, self-marking, traps wrong and explained, figures render', () => {
  assert.equal(geoSkills.length, 10);
  for (const sk of geoSkills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = generate(sk.id, lv, 'g' + i), txt = JSON.stringify(it), tag = `${sk.id}@${lv}: ${it.prompt}`;
    assert.equal(txt, JSON.stringify(generate(sk.id, lv, 'g' + i)));
    assert.deepEqual(JSON.parse(txt), it);
    assert.doesNotMatch(txt, /NaN|undefined|Infinity|\[object/, tag);
    assert.doesNotMatch(it.prompt, /\ba (octagon|exterior|interior|isosceles|area|arc|angle)\b/i, tag);
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', `${tag} → ${rawFor(it.answer)}`);
    for (const t of it.traps || []) { assert.notEqual(mark(it.answer, String(t.v.n / t.v.d)).status, 'correct', `${tag} trap ${t.v.n}/${t.v.d}`); assert.ok(t.why.length > 20, tag); }
    for (const t of it.exTraps || []) { assert.notEqual(mark(it.answer, `${t.b.n}${t.b.d > 1 ? '/' + t.b.d : ''}π`).status, 'correct', tag); assert.ok(t.why.length > 20, tag); }
    if (it.answer.kind === 'choice') { assert.equal(new Set(it.answer.options).size, it.answer.options.length, tag); it.optionWhy.forEach((w, k) => (k === it.answer.answer ? assert.equal(w, null) : assert.ok(w && w.length > 15, tag))); }
    if (it.fig) { const svg = figSVG(it.fig); assert.ok(svg.startsWith('<svg') && !/NaN|undefined/.test(svg) && it.fig.alt.length > 10, tag); }
    if (it.answer.kind === 'decimal' && it.answer.dp === 1) assert.equal(it.calculator, true, `${tag}: 1 d.p. π answers need a calculator`);
  }
});

test('angle facts: answers from the printed labels, and the drawn angle matches on accurate figures', () => {
  for (const it of items('angle-facts', 1)) {
    const known = labelled(it), line = /straight line/.test(it.prompt), want = (line ? 180 : 360) - known.reduce((s, v) => s + v, 0);
    assert.equal(it.answer.value, want, it.prompt);
    const x = it.fig.angles.find(a => a.label === 'x'); assert.ok(near(ccw(x), want, 0.6), `${it.prompt}: drawn ${ccw(x)} vs ${want}`);
  }
  for (const it of items('angle-facts', 2)) assert.equal(it.answer.value, 180 - labelled(it).reduce((s, v) => s + v, 0), it.prompt);
  for (const it of items('angle-facts', 3)) {
    const k = labelled(it);
    if (/exterior/.test(it.prompt)) { assert.equal(it.answer.value, k[0] + k[1]); } // triangles may be squashed to fit: 'not drawn accurately'
    else if (/angle x/.test(it.prompt)) assert.equal(it.answer.value, 180 - 2 * k[0], it.prompt); // base angle given
    else assert.equal(it.answer.value, (180 - k[0]) / 2, it.prompt); // apex given
    if (/isosceles/.test(it.prompt)) assert.equal(it.fig.ticks.length, 2);
  }
});

test('parallel lines: the relation is classified from the drawing and the angle measured from it', () => {
  const rel = it => {
    const [a, b] = it.fig.angles, T = it.fig.segs[2], u = [T.a[0] - T.b[0], T.a[1] - T.b[1]];
    const info = m => { const ua = [m.p[0] - m.v[0], m.p[1] - m.v[1]], ub = [m.q[0] - m.v[0], m.q[1] - m.v[1]], na = Math.hypot(...ua), nb = Math.hypot(...ub), bis = [ua[0] / na + ub[0] / nb, ua[1] / na + ub[1] / nb], upper = m.v[1] === 110; return { between: upper ? bis[1] > 0 : bis[1] < 0, side: Math.sign(u[0] * bis[1] - u[1] * bis[0]), v: m.v.join() }; };
    const A = info(a), B = info(b);
    if (A.v === B.v) return 'Vertically opposite angles';
    if (A.between !== B.between) return A.side === B.side ? 'Corresponding angles' : null;
    if (A.between && B.between) return A.side === B.side ? 'Co-interior angles' : 'Alternate angles';
    return null;
  };
  for (const it of items('parallel', 1)) assert.equal(correctOption(it), rel(it), JSON.stringify(it.fig.angles));
  for (const lv of [2, 3]) for (const it of items('parallel', lv)) {
    const [k, x] = it.fig.angles; assert.ok(near(drawn(k), deg(k.label), 0.6), 'known angle drawn to size');
    assert.ok(near(drawn(x), it.answer.value, 0.6), `${it.prompt} drawn ${drawn(x)} vs ${it.answer.value}`);
    assert.ok(it.answer.value === deg(k.label) || it.answer.value === 180 - deg(k.label));
  }
});

test('polygons and quadrilaterals: angle sums from n, and properties from a table written here', () => {
  for (const it of items('polygon-angles', 1)) { const n = Number(it.prompt.match(/\((\d+) sides\)/)[1]); assert.equal(it.answer.value, (n - 2) * 180); }
  for (const it of items('polygon-angles', 2)) {
    const [v] = nums(it.prompt);
    if (/exterior angle of a regular polygon with/.test(it.prompt)) assert.equal(it.answer.value, 360 / v);
    else if (/interior angle of a regular polygon with/.test(it.prompt)) assert.equal(it.answer.value, 180 - 360 / v);
    else assert.equal(it.answer.value, 360 / (180 - v));
  }
  for (const it of items('polygon-angles', 3)) { const n = it.fig.polys[0].pts.length, k = labelled(it); assert.equal(k.length, n - 1); assert.equal(it.answer.value, (n - 2) * 180 - k.reduce((s, v) => s + v, 0)); assert.ok(it.answer.value > 0 && it.answer.value < 180); }
  // [4 equal sides, 4 right angles, pairs of parallel sides, diagonals perpendicular, diagonals equal, lines, rotational order]
  const T = { Square: [1, 1, 2, 1, 1, 4, 4], Rectangle: [0, 1, 2, 0, 1, 2, 2], Rhombus: [1, 0, 2, 1, 0, 2, 2], Parallelogram: [0, 0, 2, 0, 0, 0, 2], Trapezium: [0, 0, 1, 0, 0, 0, 1], Kite: [0, 0, 0, 1, 0, 1, 1] };
  const has = { 'four equal sides': t => t[0], 'four right angles': t => t[1], 'exactly one pair of parallel sides': t => t[2] === 1, 'diagonals that cross at right angles': t => t[3], 'diagonals that are equal in length': t => t[4],
    'four equal sides but no right angles': t => t[0] && !t[1], 'four right angles but sides that are not all equal': t => t[1] && !t[0], 'two pairs of parallel sides, no right angles and sides that are not all equal': t => t[2] === 2 && !t[1] && !t[0], 'diagonals that cross at right angles but no parallel sides': t => t[3] && t[2] === 0, 'diagonals that are equal and cross at right angles': t => t[4] && t[3] };
  for (const lv of [1, 2]) for (const it of items('quad-props', lv)) {
    if (it.answer.kind === 'choice') {
      const prop = it.prompt.match(/(?:always has|has) (.+)\?$/)[1], f = has[prop]; assert.ok(f, prop);
      it.answer.options.forEach((o, i) => assert.equal(!!f(T[o]), i === it.answer.answer, `${it.prompt} — ${o}`));
    } else { const q = it.prompt.match(/an? (\w+)( have)?\?$/)[1], t = T[q[0].toUpperCase() + q.slice(1)]; assert.equal(it.answer.value, /lines/.test(it.prompt) ? t[5] : t[6], it.prompt); }
  }
  for (const it of items('quad-props', 3)) {
    const v = nums(it.prompt);
    if (/kite/.test(it.prompt)) assert.equal(it.answer.value, (360 - v[0] - v[1]) / 2); else assert.equal(it.answer.value, /opposite/.test(it.prompt) ? v[0] : 180 - v[0]);
  }
});

test('area: answers from the printed dimensions; L-shapes also measured from the drawn outline', () => {
  for (const it of items('area-shapes', 1)) { const [b, h] = it.fig.dims.map(d => cm(d.t)); assert.ok(near(val(it.answer), /triangle/.test(it.prompt) ? (b * h) / 2 : b * h), it.prompt); }
  for (const it of items('area-shapes', 2)) { const [a, b, h] = it.fig.dims.map(d => cm(d.t)); assert.ok(near(val(it.answer), ((a + b) * h) / 2)); }
  for (const it of items('area-shapes', 3)) {
    const v = nums(it.prompt);
    if (/triangle/.test(it.prompt)) assert.ok(near((v[1] * it.answer.value) / 2, v[0]));
    else if (/rectangle/.test(it.prompt)) assert.equal(it.answer.value, 2 * (v[1] + v[0] / v[1]));
    else assert.ok(near(((v[0] + v[1]) * it.answer.value) / 2, v[2]));
  }
  const shoelace = pts => Math.abs(pts.reduce((s, p, i) => s + p[0] * pts[(i + 1) % pts.length][1] - pts[(i + 1) % pts.length][0] * p[1], 0)) / 2;
  for (const it of items('compound-shapes', 1)) {
    const [W, H, top, right] = it.fig.dims.map(d => cm(d.t)); assert.equal(it.answer.value, W * H - (W - top) * (H - right));
    const d0 = it.fig.dims[0], px = Math.hypot(d0.b[0] - d0.a[0], d0.b[1] - d0.a[1]) / W; assert.ok(near(shoelace(it.fig.polys[0].pts) / px ** 2, it.answer.value, 1e-6), 'drawn outline has the stated area');
  }
  for (const it of items('compound-shapes', 2)) { const [W, H] = it.fig.dims.map(d => cm(d.t)); assert.equal(it.answer.value, 2 * (W + H)); }
  for (const it of items('compound-shapes', 3)) { const [W, H, b, h] = nums(it.prompt); assert.ok(near(val(it.answer), W * H - (b * h) / 2)); }
});

test('circles, arcs and sectors: recomputed with Math.PI and rounded independently', () => {
  for (const it of items('circle-measure', 1)) { const [x] = nums(it.prompt), r = /diameter/.test(it.prompt) ? x / 2 : x; assert.ok(dp1Ok(it, /area/.test(it.prompt) ? Math.PI * r * r : 2 * Math.PI * r), it.prompt); assert.equal(it.calculator, true); }
  for (const it of items('circle-measure', 2)) { const [x] = nums(it.prompt), r = /diameter/.test(it.prompt) ? x / 2 : x; assert.ok(near(it.answer.b.n / it.answer.b.d, /area/.test(it.prompt) ? r * r : 2 * r) && it.answer.a.n === 0 && it.answer.r === 'pi', it.prompt); }
  for (const it of items('circle-measure', 3)) { const [x] = nums(it.prompt); assert.equal(it.answer.value, /area/.test(it.prompt) ? Math.sqrt(x) : Math.round(x / Math.PI), it.prompt); }
  for (const lv of [1, 2, 3]) for (const it of items('arcs-sectors', lv)) {
    const [r, a] = nums(it.prompt), arc = (a / 360) * 2 * Math.PI * r, area = (a / 360) * Math.PI * r * r;
    assert.equal(deg(it.fig.angles[0].label), a); assert.ok(near(drawn(it.fig.angles[0]), a, 0.6), 'sector drawn to its angle');
    if (/in terms of π/.test(it.prompt)) assert.ok(near(it.answer.b.n / it.answer.b.d, (a / 360) * r * r));
    else assert.ok(dp1Ok(it, /arc length/.test(it.prompt) ? arc : /perimeter/.test(it.prompt) ? arc + 2 * r : area), it.prompt);
  }
});

test('volume and surface area: recomputed from the printed or drawn dimensions', () => {
  for (const it of items('volume', 1)) { const [l, w, h] = it.fig.dims.map(d => cm(d.t)); assert.ok(near(val(it.answer), /litres/.test(it.prompt) ? (l * w * h) / 1000 : l * w * h), it.prompt); }
  for (const it of items('volume', 2)) { const [b, h, l] = it.fig.dims.map(d => cm(d.t)); assert.ok(near(val(it.answer), (b * h * l) / 2)); }
  for (const it of items('volume', 3)) { const [r, h] = nums(it.prompt); assert.ok(dp1Ok(it, Math.PI * r * r * h), it.prompt); }
  for (const it of items('surface-area', 1)) { const [l, w, h] = it.fig.dims.map(d => cm(d.t)); assert.equal(it.answer.value, 2 * (l * w + l * h + w * h)); }
  for (const it of items('surface-area', 2)) { const [r, h] = nums(it.prompt); assert.ok(dp1Ok(it, 2 * Math.PI * r * r + 2 * Math.PI * r * h), it.prompt); }
  for (const it of items('surface-area', 3)) {
    const p = it.prompt.replace(/V = .*?\. /, ''), v = nums(p);
    const want = /sphere/.test(p) ? (4 / 3) * Math.PI * v[0] ** 3 : /cone/.test(p) ? (Math.PI * v[0] ** 2 * v[1]) / 3 : (v[0] * v[1] * v[2]) / 3;
    if (it.answer.kind === 'integer') assert.equal(it.answer.value, want, p); else assert.ok(dp1Ok(it, want), p);
  }
});

test('geometry lesson records: order, refs, prerequisites, visuals, check plans, calculator flags and tiers', () => {
  assert.equal(geometryTopic.id, 'maths.geometry');
  assert.deepEqual(orderedGeometry.map(l => l.id), geometryOrder);
  assert.equal(geometryLessons.length, 5);
  const all = new Set([...numberLessons, ...orderedAlgebra, ...orderedRatio, ...orderedGeometry].map(l => l.id));
  const refs = new Set(orderedGeometry.flatMap(l => l.refs));
  for (const r of ['G1', 'G3', 'G4', 'G6', 'G9', 'G14', 'G16', 'G17', 'G18']) assert.ok(refs.has(r), r);
  for (const l of orderedGeometry) {
    assert.equal(l.topicId, 'maths.geometry');
    assert.ok(l.refs.every(r => /^G\d+$/.test(r)));
    for (const p of l.prerequisites) assert.ok(all.has(p), `${l.id} prerequisite ${p}`);
    assert.equal(l.learn.length, 3);
    for (const c of l.learn) { const html = visualGeo(c.visual) || visual7(c.visual); assert.ok(html.length > 50 && !/NaN|undefined/.test(html), `${l.id}: ${c.title}`); assert.ok(c.example.steps.length); }
    assert.equal(l.checkPlan.length, 10);
    const ids = l.skills.map(s => s.id);
    for (const [id, lv] of l.checkPlan) { assert.ok(ids.includes(id), `${l.id}: ${id}`); const sk = l.skills.find(s => s.id === id); assert.ok(lv <= levelsFor(sk, 'Foundation').length, `${l.id}: ${id}@${lv} available at Foundation`); }
    const calcItems = l.skills.some(sk => sk.levels.some((_, i) => generate(sk.id, i + 1, 'c0').calculator));
    assert.equal(!!l.calculator, calcItems, `${l.id}: calculator flag matches its items`);
    assert.ok(MODELS11[l.model], `${l.id}: model ${l.model}`);
  }
});

test('inactive Geometry model callbacks cannot write to a previous view', () => {
  for (const mount of Object.values(MODELS11)) {
    const stale = new Proxy({}, { get() { throw new Error('stale DOM read'); }, set() { throw new Error('stale DOM write'); } });
    assert.doesNotThrow(() => mount({ w: {}, tier: 'Higher', panel: stale, body: stale, isActive: () => false, setTitle() { throw new Error('stale title'); } }));
  }
});
