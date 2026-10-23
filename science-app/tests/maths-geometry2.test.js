// Geometry batch 2: items re-solved from the PRINTED prompt or the DRAWN figure/grid with plain
// arithmetic and trigonometry written here (no generator code).
import test from 'node:test';
import assert from 'node:assert/strict';
import { allSkills, generate } from '../dist/maths/skills.js';
import { mark } from '../dist/maths/answers.js';
import { orderedGeometry2, geometryOrder2 } from '../dist/maths/lessons-geometry2.js';
import { orderedGeometry } from '../dist/maths/lessons-geometry.js';
import { orderedLessons as numberLessons } from '../dist/maths/lessons-number.js';
import { orderedAlgebra } from '../dist/maths/lessons-algebra.js';
import { orderedRatio } from '../dist/maths/lessons-ratio.js';
import { levelsFor } from '../dist/maths/mastery.js';
import { figSVG } from '../dist/maths/geomfig.js';
import { graphSVG } from '../dist/maths/graph.js';
import { MODELS12 } from '../dist/maths/models-geometry2.js';
import { mathHTML, mathText } from '../dist/maths/render.js';

const N = 200;
const geo2 = allSkills.filter(sk => ['pythagoras', 'pythagoras-problems', 'trig', 'trig-exact', 'transform', 'transform-describe', 'loci', 'constructions', 'bearings', 'scale-drawing'].includes(sk.id.replace('maths.geometry.', '')));
const items = (id, lv, n = N) => Array.from({ length: n }, (_, i) => generate('maths.geometry.' + id, lv, 'g2-' + i));
const val = a => (a.kind === 'integer' ? a.value : a.value.n / a.value.d);
const nums = s => (s.replace(/−/g, '-').match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
const cm = t => Number(String(t).replace(/ ?(cm|m|km)$/, ''));
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol;
const r1 = v => Math.round(v * 10) / 10;
const dp1Ok = (it, exact) => it.answer.kind === 'integer' ? near(it.answer.value, exact, 1e-9) : near(val(it.answer), r1(exact), 1e-9);
const D = Math.PI / 180;
const correctOption = it => it.answer.options[it.answer.answer];
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'fraction') return `${a.value.n}/${a.value.d}`;
  if (a.kind === 'decimal') return (a.value.n / a.value.d).toFixed(a.dp ?? 6);
  if (a.kind === 'exact') return `${a.a.n}/${a.a.d}+${a.b.n}√${a.r}/${a.b.d}`;
  if (a.kind === 'points') return a.points.map(p => p.join(',')).join(';');
  throw new Error(a.kind);
}
// side labels of rtFig: dims carry {a, b, t}; identify sides geometrically (right angle at B)
function sides(fig) {
  const [A, B, C] = fig.polys[0].pts, key = d => { const s = [d.a, d.b].map(p => p.join()).sort().join('|'); return s === [A, B].map(p => p.join()).sort().join('|') ? 'adj' : s === [B, C].map(p => p.join()).sort().join('|') ? 'opp' : 'hyp'; };
  return Object.fromEntries(fig.dims.map(d => [key(d), d.t]));
}

test('geometry batch 2 skills: deterministic, JSON-safe, self-marking, traps wrong and explained', () => {
  assert.equal(geo2.length, 10);
  for (const sk of geo2) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = generate(sk.id, lv, 'g' + i), txt = JSON.stringify(it), tag = `${sk.id}@${lv}: ${it.prompt}`;
    assert.equal(txt, JSON.stringify(generate(sk.id, lv, 'g' + i)));
    assert.doesNotMatch(txt, /NaN|undefined|Infinity|\[object/, tag);
    assert.doesNotMatch(it.prompt, /(^|[\s(=:,×÷;])-\d/, tag);
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', `${tag} → ${rawFor(it.answer)}`);
    for (const t of it.traps || []) { assert.notEqual(mark(it.answer, String(t.v.n / t.v.d)).status, 'correct', `${tag} trap ${t.v.n}/${t.v.d}`); assert.ok(t.why.length > 20, tag); }
    for (const t of it.exTraps || []) { assert.notEqual(mark(it.answer, `${t.a.n}/${t.a.d}+${t.b.n}√${t.r}/${t.b.d}`).status, 'correct', tag); assert.ok(t.why.length > 20, tag); }
    for (const t of it.ptTraps || []) { assert.notEqual(mark(it.answer, t.pts.map(p => p.join(',')).join(';')).status, 'correct', tag); assert.ok(t.why.length > 20, tag); }
    if (it.answer.kind === 'choice') { assert.equal(new Set(it.answer.options).size, it.answer.options.length, tag); it.optionWhy.forEach((w, k) => (k === it.answer.answer ? assert.equal(w, null) : assert.ok(w && w.length > 15, tag))); }
    if (it.fig) assert.ok(!/NaN|undefined/.test(figSVG(it.fig)) && it.fig.alt.length > 10, tag);
    if (it.graph) assert.ok(!/NaN|undefined/.test(graphSVG(it.graph)), tag);
    if (it.answer.kind === 'points') assert.ok(!/NaN|undefined/.test(graphSVG(it.answer.grid)), tag);
    if (it.answer.kind === 'decimal' && it.answer.dp === 1) assert.equal(it.calculator, true, tag);
  }
});

test('Pythagoras: answers from the printed side labels, and the drawn triangle has a right angle', () => {
  for (const lv of [1, 2]) for (const it of items('pythagoras', lv)) {
    const s = sides(it.fig), [A, B, C] = it.fig.polys[0].pts;
    assert.ok(near((A[0] - B[0]) * (C[0] - B[0]) + (A[1] - B[1]) * (C[1] - B[1]), 0, 1e-6), 'right angle at B');
    const want = lv === 1 ? Math.hypot(cm(s.adj), cm(s.opp)) : Math.sqrt(cm(s.hyp) ** 2 - cm(s.adj === 'x' ? s.opp : s.adj) ** 2);
    assert.ok(dp1Ok(it, want), it.prompt + JSON.stringify(s));
  }
  for (const it of items('pythagoras', 3)) { const [a, b, c] = nums(it.prompt).sort((x, y) => x - y); assert.equal(correctOption(it), a * a + b * b === c * c ? 'Yes' : 'No'); }
  for (const it of items('pythagoras-problems', 1)) {
    const v = nums(it.prompt);
    const want = /ladder/.test(it.prompt) ? Math.sqrt(v[0] ** 2 - v[1] ** 2) : Math.hypot(v[0], v[1]);
    assert.ok(dp1Ok(it, want), it.prompt);
  }
  for (const it of items('pythagoras-problems', 2)) { const [x1, y1, x2, y2] = nums(it.prompt); assert.ok(dp1Ok(it, Math.hypot(x2 - x1, y2 - y1)), it.prompt); }
  for (const it of items('pythagoras-problems', 3)) {
    const v = nums(it.prompt);
    const want = /isosceles/.test(it.prompt) ? Math.sqrt(v[1] ** 2 - (v[0] / 2) ** 2) : Math.sqrt(v[1] ** 2 + v[2] ** 2 + v[4] ** 2);
    assert.ok(dp1Ok(it, want), it.prompt + ' ' + v);
  }
});

test('trigonometry: SOH CAH TOA from the labelled figure; exact values from a table written here', () => {
  const RAT = { sin: ['opp', 'hyp'], cos: ['adj', 'hyp'], tan: ['opp', 'adj'] }, NAME = { adjacent: 'adj', opposite: 'opp', hypotenuse: 'hyp' };
  for (const it of items('trig', 1)) { const s = sides(it.fig), have = Object.keys(s).sort().join(); assert.equal(RAT[correctOption(it)].slice().sort().join(), have, it.prompt); }
  for (const it of items('trig', 2)) {
    const s = sides(it.fig), th = Number(it.fig.angles.find(a => a.label && a.label.endsWith('°')).label.replace('°', ''));
    const known = Object.entries(s).find(([, t]) => t !== 'x'), unk = Object.keys(s).find(k => s[k] === 'x'), k = cm(known[1]);
    const ratio = { opp: Math.sin(th * D), adj: Math.cos(th * D), hyp: 1 }, want = (k / ratio[known[0]]) * ratio[unk];
    assert.ok(dp1Ok(it, want), it.prompt + JSON.stringify(s) + th);
  }
  for (const it of items('trig', 3)) { const s = sides(it.fig), o = s.opp && cm(s.opp), a = s.adj && cm(s.adj), h = s.hyp && cm(s.hyp); const want = o && h ? Math.asin(o / h) / D : a && h ? Math.acos(a / h) / D : Math.atan(o / a) / D; assert.ok(dp1Ok(it, want), JSON.stringify(s)); }
  const EX = { 'sin 0°': 0, 'sin 30°': 0.5, 'sin 45°': Math.SQRT1_2, 'sin 60°': Math.sqrt(3) / 2, 'sin 90°': 1, 'cos 0°': 1, 'cos 30°': Math.sqrt(3) / 2, 'cos 45°': Math.SQRT1_2, 'cos 60°': 0.5, 'cos 90°': 0, 'tan 0°': 0, 'tan 30°': 1 / Math.sqrt(3), 'tan 45°': 1, 'tan 60°': Math.sqrt(3) };
  const exVal = a => (a.kind === 'exact' ? a.a.n / a.a.d + (a.b.n / a.b.d) * Math.sqrt(a.r) : val(a));
  for (const it of items('trig-exact', 1)) { const key = it.prompt.match(/value of (\w+ \d+°)/)[1]; assert.ok(near(exVal(it.answer), EX[key], 1e-12), key); }
  for (const it of items('trig-exact', 2)) {
    const s = sides(it.fig), ang = Number(it.fig.angles.find(a => a.label).label.replace('°', '')), unk = Object.keys(s).find(k => s[k] === 'x');
    const want = s.hyp && s.hyp !== 'x' ? cm(s.hyp) * (unk === 'opp' ? Math.sin(ang * D) : Math.cos(ang * D)) : cm(s.adj) / Math.cos(ang * D);
    assert.ok(near(exVal(it.answer), want, 1e-9), it.prompt);
  }
  for (const it of items('trig-exact', 3)) { const v = nums(it.prompt), ratio = /both/.test(it.prompt) ? 1 : v[0] / v[1], f = /both/.test(it.prompt) ? Math.atan : /opposite/.test(it.prompt) ? Math.asin : Math.acos; assert.equal(correctOption(it), `${Math.round(f(ratio) / D)}°`); }
});

test('transformations: images recomputed from the drawn object and the printed rule', () => {
  const obj = it => it.answer.grid.polys[0].pts.slice(0, 3), same = (a, b) => JSON.stringify([...a].map(p => p.join()).sort()) === JSON.stringify([...b].map(p => p.join()).sort());
  for (const it of items('transform', 1)) { const [a, b] = nums(it.prompt.match(/vec ([^}]+)\}/)[1]); assert.ok(same(it.answer.points, obj(it).map(([x, y]) => [x + a, y + b])), it.prompt); assert.match(mathHTML(it.prompt), /mvec/); }
  const R = { 'the y-axis': ([x, y]) => [-x, y], 'the x-axis': ([x, y]) => [x, -y], 'the line y = x': ([x, y]) => [y, x], 'the line y = −x': ([x, y]) => [-y, -x] };
  for (const it of items('transform', 2)) { const line = it.prompt.match(/in (.+)\. Plot/)[1]; assert.ok(same(it.answer.points, obj(it).map(R[line])), it.prompt); }
  for (const it of items('transform', 3)) {
    const [cx, cy] = nums(it.prompt.match(/about \(([^)]+)\)/)[1]), t = /180/.test(it.prompt) ? Math.PI : /anticlockwise/.test(it.prompt) ? Math.PI / 2 : -Math.PI / 2;
    const want = obj(it).map(([x, y]) => [Math.round(cx + (x - cx) * Math.cos(t) - (y - cy) * Math.sin(t)), Math.round(cy + (x - cx) * Math.sin(t) + (y - cy) * Math.cos(t))]);
    assert.ok(same(it.answer.points, want), it.prompt);
  }
  for (const lv of [4, 5]) for (const it of items('transform', lv)) {
    const kTxt = it.prompt.match(/scale factor (\S+),/)[1].replace('−', '-'), k = kTxt.includes('/') ? Function(`return ${kTxt.replace(/[{}]/g, '')}`)() : Number(kTxt), [cx, cy] = nums(it.prompt.match(/centre \(([^)]+)\)/)[1]);
    assert.ok(same(it.answer.points, obj(it).map(([x, y]) => [cx + k * (x - cx), cy + k * (y - cy)])), it.prompt);
    assert.equal(lv === 5, k < 0);
  }
  // describe: apply the chosen description to A's drawn vertices and land on B
  const apply = (d, p) => {
    let m;
    if ((m = d.match(/^Translation by \{vec ([^;]+);([^}]+)\}/))) { const [a, b] = [m[1], m[2]].map(s => Number(s.replace('−', '-'))); return p.map(([x, y]) => [x + a, y + b]); }
    if ((m = d.match(/^Reflection in (.+)$/))) return p.map(R[m[1]]);
    if (/^Rotation 360/.test(d)) return p;
    if ((m = d.match(/^Rotation (\d+)° ?(clockwise|anticlockwise)? about \((-?\d+), (-?\d+)\)/))) { const t = (m[1] === '180' ? 180 : m[2] === 'clockwise' ? -90 : 90) * D; return p.map(([x, y]) => [Math.round(x * Math.cos(t) - y * Math.sin(t)), Math.round(x * Math.sin(t) + y * Math.cos(t))]); }
    if ((m = d.match(/^Enlargement, scale factor (\S+), centre \((-?\d+), (-?\d+)\)/))) { const k = m[1].includes('/') ? Function(`return ${m[1].replace(/[{}]/g, '').replace('−', '-')}`)() : Number(m[1].replace('−', '-')), cx = +m[2], cy = +m[3]; return p.map(([x, y]) => [cx + k * (x - cx), cy + k * (y - cy)]); }
    throw new Error(d);
  };
  for (const lv of [1, 2]) for (const it of items('transform-describe', lv)) {
    const [A, B] = it.graph.polys.map(q => q.pts.slice(0, 3));
    it.answer.options.forEach((o, i) => assert.equal(same(apply(o.replace(/−/g, '−'), A), B), i === it.answer.answer, `${o} :: ${JSON.stringify(A)} → ${JSON.stringify(B)}`));
  }
  for (const it of items('transform-describe', 3)) {
    if (/invariant/.test(it.prompt)) { const line = it.prompt.match(/in (.+)\?$/)[1]; it.answer.options.forEach((o, i) => { const p = nums(o); const q = R[line](p); assert.equal(q[0] === p[0] && q[1] === p[1], i === it.answer.answer, o); }); }
    else {
      const P = [[2, 1], [5, 3]], first = it.prompt.split(' Which')[0].replace(/\.$/, '');
      const toDesc = part => { let t = part.trim().replace(/ again$/, '').replace(/\.$/, ''); t = t.charAt(0).toUpperCase() + t.slice(1); return t.replace(/^Reflect /, 'Reflection ').replace(/^Rotate /, 'Rotation '); };
      let got = P; for (const part of first.split(', then ')) got = apply(toDesc(part), got);
      const right = correctOption(it);
      assert.ok(same(got, /identity/.test(right) ? P : apply(right, P)), `${it.prompt} → ${right}`);
      for (const o of it.answer.options) if (o !== right && !/identity/.test(o)) assert.ok(!same(got, apply(o, P)), `distractor ${o} is also correct`);
    }
  }
});

test('loci, constructions and bearings: checked with distances, the triangle inequality and angle arithmetic', () => {
  for (const it of items('loci', 2)) {
    const pts = Object.fromEntries(it.graph.points.map(([x, y, l]) => [l, [x, y]])), d = nums(it.prompt)[0], dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
    it.answer.options.forEach((o, i) => { const p = nums(o); assert.equal(dist(p, pts.A) < d && dist(p, pts.B) < dist(p, pts.C), i === it.answer.answer, o); });
  }
  for (const it of items('constructions', 2)) { const [a, b, c] = nums(it.prompt).sort((x, y) => x - y); assert.equal(correctOption(it), a + b > c ? 'Yes' : 'No', it.prompt); }
  for (const it of items('bearings', 1)) {
    if (it.fig) { const [A, N] = [it.fig.segs[0].a, it.fig.segs[0].b], Bp = it.fig.segs[1].b; let brg = Math.atan2(Bp[0] - A[0], A[1] - Bp[1]) / D; brg = (brg + 360) % 360; assert.ok(near(brg, it.answer.value, 0.6), `drawn ${brg} vs ${it.answer.value}`); assert.equal(N[0], A[0]); }
    else assert.equal(it.answer.value, { 'north-east': 45, east: 90, 'south-east': 135, south: 180, 'south-west': 225, west: 270, 'north-west': 315 }[it.prompt.match(/B is ([\w-]+) of A/)[1]]);
  }
  for (const it of items('bearings', 2)) { const [b] = nums(it.prompt); assert.equal(it.answer.value, (b + 180) % 360); }
  for (const it of items('bearings', 3)) { const [t] = nums(it.prompt); assert.equal(it.answer.value, /west of north/.test(it.prompt) ? 360 - t : 90 + t); }
  for (const it of items('scale-drawing', 1)) { const sc = Number(it.prompt.match(/1 : (\d+)/)[1]), x = nums(it.prompt.split(". ")[1])[0]; assert.ok(near(val(it.answer), /on the plan\?|on the plan, in cm/.test(it.prompt) ? (x * 100) / sc : (x * sc) / 100, 1e-9), it.prompt); }
  for (const it of items('scale-drawing', 2)) { const v = nums(it.prompt), ang = /depression/.test(it.prompt) ? v[0] : v[1], d = /depression/.test(it.prompt) ? v[1] : v[0]; assert.ok(dp1Ok(it, d * Math.tan(ang * D)), it.prompt); }
  for (const it of items('scale-drawing', 3)) { const v = nums(it.prompt); if (/bearing of the ship/.test(it.prompt)) assert.equal(it.answer.value, Math.round(Math.atan2(v[1], v[0]) / D), it.prompt); else assert.ok(dp1Ok(it, Math.hypot(v[0], v[2])), it.prompt + v); }
});

test('geometry batch 2 records: order, refs, prerequisites, visuals, check plans, tiers, column-vector markup', () => {
  assert.deepEqual(orderedGeometry2.map(l => l.id), geometryOrder2);
  const all = new Set([...numberLessons, ...orderedAlgebra, ...orderedRatio, ...orderedGeometry, ...orderedGeometry2].map(l => l.id));
  const refs = new Set(orderedGeometry2.flatMap(l => l.refs));
  for (const r of ['G2', 'G6', 'G7', 'G8', 'G15', 'G20', 'G21', 'G24']) assert.ok(refs.has(r), r);
  for (const l of orderedGeometry2) {
    for (const p of l.prerequisites) assert.ok(all.has(p), `${l.id} prerequisite ${p}`);
    assert.equal(l.learn.length, 3);
    assert.equal(l.checkPlan.length, 10);
    for (const [id, lv] of l.checkPlan) { const sk = l.skills.find(s => s.id === id); assert.ok(sk && lv <= levelsFor(sk, 'Foundation').length, `${l.id}: ${id}@${lv}`); }
    const calcItems = l.skills.some(sk => sk.levels.some((_, i) => Array.from({ length: 20 }, (_, k) => generate(sk.id, i + 1, 'c' + k)).some(it => it.calculator)));
    assert.equal(!!l.calculator, calcItems, `${l.id}: calculator flag matches its items`);
    assert.ok(MODELS12[l.model], l.model);
  }
  const higher = geo2.flatMap(sk => sk.levels.map((v, i) => (v.higher ? `${sk.id}@${i + 1}` : null)).filter(Boolean)).sort();
  assert.deepEqual(higher, ['maths.geometry.transform-describe@3', 'maths.geometry.transform@5']);
  assert.match(mathHTML('{vec 3;−2}'), /class="mvec"/); assert.equal(mathText('{vec 3;−2}'), '(3, −2)');
});

test('inactive Geometry batch 2 model callbacks cannot write to a previous view', () => {
  for (const mount of Object.values(MODELS12)) {
    const stale = new Proxy({}, { get() { throw new Error('stale DOM read'); }, set() { throw new Error('stale DOM write'); } });
    assert.doesNotThrow(() => mount({ w: {}, tier: 'Higher', panel: stale, body: stale, isActive: () => false, setTitle() { throw new Error('stale title'); } }));
  }
});
