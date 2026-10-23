// Edexcel 1MA1 Geometry and measures, batch 2: Pythagoras (G20, G6), right-angled trigonometry and
// exact values (G20, G21), transformations and column vectors (G7, G8, G24), constructions and loci
// (G2), bearings and scale drawings (G15). Items carry JSON-safe figures (item.fig) or coordinate
// grids (item.graph) built from the same numbers as the question.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r10';
import { F } from './frac.js?v=20261023-maths-r10';
import { makeA, fixMinus, choiceItem } from './skills-algebra.js?v=20261023-maths-r10';

const fr = v => { const f = typeof v === 'number' ? F(v) : v; return { n: f.n, d: f.d }; };
const intAns = v => ({ kind: 'integer', value: v });
const decA = (f, extra = {}) => ({ kind: 'decimal', value: fr(f), ...extra });
const r1 = v => F(Math.round(v * 10), 10);
const dp1 = v => decA(r1(v), { dp: 1, tol: 0.06 });
const tv = (v, why) => ({ v: Number.isInteger(v) ? F(v) : F(Math.round(v * 1000), 1000), why });
const t1 = (v, why) => ({ v: r1(v), why }); // trap shown at 1 d.p.
const ok1 = (trap, ans) => Math.abs(trap - ans) > 0.11; // keep 1 d.p. traps well outside the tolerance
const surd = (a, b, r, why) => ({ a: fr(a), b: fr(b), r, ...(why ? { why } : {}) });
const exA = (a, b, r) => ({ kind: 'exact', a: fr(a), b: fr(b), r });
const rad = d => (d * Math.PI) / 180, deg = r => (r * 180) / Math.PI;
const dtx = v => (Number.isInteger(v) ? String(v) : String(+v.toFixed(3)));
const NOTE = 'Not drawn accurately';
const make = (skill, level, seed, o) => {
  const it = makeA(skill, level, seed, o);
  if (o.ptTraps) it.ptTraps = o.ptTraps.map(t => ({ ...t, why: fixMinus(t.why) }));
  if (o.exTraps) it.exTraps = o.exTraps.map(t => ({ ...t, why: fixMinus(t.why) }));
  return it;
};

/* ───────── right-angled triangle figure ─────────
   Right angle at B (bottom right). A bottom left, C top right. Side labels: AB, BC, AC; angle label at A. */
function rtFig(ab, bc, labs, angA, alt) {
  const s = Math.min(380 / ab, 220 / bc), A = [110, 270], B = [110 + ab * s, 270], C = [110 + ab * s, 270 - bc * s];
  const f = { h: 310, polys: [{ pts: [A, B, C] }], angles: [{ v: B, p: A, q: C, right: true }], dims: [], note: NOTE, alt };
  if (labs[0]) f.dims.push({ a: A, b: B, t: labs[0], off: -22 });
  if (labs[1]) f.dims.push({ a: B, b: C, t: labs[1], off: -30 });
  if (labs[2]) f.dims.push({ a: C, b: A, t: labs[2], off: -22 });
  if (angA) f.angles.push({ v: A, p: B, q: C, label: angA, r: 46 });
  return f;
}
const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [20, 21, 29], [12, 16, 20]];

/* ═════════ G20 Pythagoras: sides ═════════ */
const pythSides = {
  id: 'maths.geometry.pythagoras',
  name: "Pythagoras' theorem",
  levels: [{ label: 'Find the hypotenuse' }, { label: 'Find a shorter side' }, { label: 'Is it right-angled?' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), exact = r() < 0.45;
    if (level === 1) {
      let a, b; if (exact) { const t = pick(r, TRIPLES); [a, b] = r() < 0.5 ? [t[0], t[1]] : [t[1], t[0]]; } else { a = int(r, 3, 15); b = int(r, 3, 15); if (Number.isInteger(Math.hypot(a, b))) return this.gen(level, seed + 'h'); }
      const c = Math.hypot(a, b), ans = Number.isInteger(c) ? intAns(c) : dp1(c);
      const traps = [tv(a + b, 'Add the squares, then square root: c² = a² + b².'), tv(a * a + b * b, 'That is c². Take the square root to find c.')];
      if (!Number.isInteger(c) && ok1(Math.sqrt(Math.abs(a * a - b * b)), c) && a !== b) traps.push(t1(Math.sqrt(Math.abs(a * a - b * b)), 'You subtracted. The hypotenuse is the longest side, so add the squares.'));
      return make(this.id, level, seed, { prompt: `Work out the length of the hypotenuse x.${Number.isInteger(c) ? '' : ' Give your answer to 1 decimal place.'}`, fig: rtFig(a, b, [`${a} cm`, `${b} cm`, 'x'], '', `Right-angled triangle with shorter sides ${a} cm and ${b} cm; hypotenuse x`), calculator: !Number.isInteger(c), answer: ans, steps: [`x² = ${a}² + ${b}² = ${a * a} + ${b * b} = ${a * a + b * b}`, `x = √${a * a + b * b} = ${Number.isInteger(c) ? c : c.toFixed(3) + '…'}${Number.isInteger(c) ? '' : ` ≈ ${c.toFixed(1)}`} cm`], traps });
    }
    if (level === 2) {
      let a, c; if (exact) { const t = pick(r, TRIPLES); a = r() < 0.5 ? t[0] : t[1]; c = t[2]; } else { c = int(r, 8, 20); a = int(r, 3, c - 2); if (Number.isInteger(Math.sqrt(c * c - a * a))) return this.gen(level, seed + 's'); }
      const b = Math.sqrt(c * c - a * a), ans = Number.isInteger(b) ? intAns(b) : dp1(b), add = Math.hypot(a, c);
      const traps = [tv(c * c - a * a, 'That is x². Take the square root.'), tv(c - a, 'Subtract the squares, not the lengths.')];
      if (ok1(add, b)) traps.push(t1(add, `You added the squares. ${c} cm is the hypotenuse, so subtract: x² = ${c}² − ${a}².`));
      return make(this.id, level, seed, { prompt: `Work out the length x.${Number.isInteger(b) ? '' : ' Give your answer to 1 decimal place.'}`, fig: rtFig(a, b, [`${a} cm`, 'x', `${c} cm`], '', `Right-angled triangle with hypotenuse ${c} cm and one shorter side ${a} cm; the other side is x`), calculator: !Number.isInteger(b), answer: ans, steps: [`${c} cm is the hypotenuse, so subtract: x² = ${c}² − ${a}² = ${c * c} − ${a * a} = ${c * c - a * a}`, `x = √${c * c - a * a} = ${Number.isInteger(b) ? b : b.toFixed(3) + '… ≈ ' + b.toFixed(1)} cm`], traps });
    }
    const right = r() < 0.5; let s3;
    if (right) { const t = pick(r, TRIPLES), k = pick(r, [1, 1, 2]); s3 = t.map(v => v * k); } else { const t = pick(r, TRIPLES); s3 = [t[0], t[1], t[2] + pick(r, [-1, 1])]; }
    const [p, q, h] = s3, lhs = p * p + q * q, rhs = h * h;
    const ch = choiceItem(r, right ? 'Yes' : 'No', [right ? 'No' : 'Yes'], o => (o === 'Yes' ? `${p}² + ${q}² = ${lhs}, but ${h}² = ${rhs}. They are not equal, so it is not right-angled.` : `${p}² + ${q}² = ${lhs} = ${h}², so it is right-angled.`));
    return make(this.id, level, seed, { prompt: `A triangle has sides of ${p} cm, ${q} cm and ${h} cm. Is it a right-angled triangle?`, ...ch, steps: ['Test the two shorter sides against the longest: is a² + b² = c²?', `${p}² + ${q}² = ${lhs}; ${h}² = ${rhs}`, right ? 'Equal, so the triangle is right-angled (the converse of Pythagoras).' : 'Not equal, so it is not right-angled.'] });
  },
};

/* ═════════ G20 Pythagoras in context ═════════ */
const pythProblems = {
  id: 'maths.geometry.pythagoras-problems',
  name: 'Pythagoras in problems',
  levels: [{ label: 'Ladders, diagonals and journeys' }, { label: 'Distance between two points' }, { label: 'Isosceles triangles and two steps' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, ['ladder', 'diag', 'walk']);
      if (kind === 'ladder') { const L = int(r, 5, 12), d = int(r, 1, Math.floor(L / 2)), h = Math.sqrt(L * L - d * d); if (Number.isInteger(h)) return this.gen(level, seed + 'l'); return make(this.id, level, seed, { prompt: `A ${L} m ladder leans against a vertical wall. Its foot is ${d} m from the wall on level ground. How high up the wall does it reach? Give your answer to 1 decimal place.`, fig: rtFig(d, h, [`${d} m`, 'h', `${L} m`], '', `Ladder ${L} m long, foot ${d} m from the wall; height h`), calculator: true, answer: dp1(h), steps: [`The ladder is the hypotenuse: h² = ${L}² − ${d}² = ${L * L - d * d}`, `h = √${L * L - d * d} ≈ ${h.toFixed(1)} m`], traps: [t1(Math.hypot(L, d), 'The ladder is the hypotenuse, so subtract the squares.'), tv(L - d, 'Subtract the squares, not the lengths.')] }); }
      if (kind === 'diag') { const l = int(r, 4, 20), w = int(r, 3, 15), dg = Math.hypot(l, w); if (Number.isInteger(dg)) return this.gen(level, seed + 'd'); return make(this.id, level, seed, { prompt: `A rectangle is ${l} cm long and ${w} cm wide. Work out the length of its diagonal. Give your answer to 1 decimal place.`, fig: { h: 290, polys: [{ pts: [[120, 60], [480, 60], [480, 240], [120, 240]] }], segs: [{ a: [120, 240], b: [480, 60], dash: true }], dims: [{ a: [120, 240], b: [480, 240], t: `${l} cm`, off: -22 }, { a: [480, 240], b: [480, 60], t: `${w} cm`, off: -30 }], note: NOTE, alt: `Rectangle ${l} cm by ${w} cm with a diagonal` }, calculator: true, answer: dp1(dg), steps: [`The diagonal is the hypotenuse of a right-angled triangle: d² = ${l}² + ${w}² = ${l * l + w * w}`, `d ≈ ${dg.toFixed(1)} cm`], traps: [tv(l + w, 'Square, add, then square root.'), tv(l * l + w * w, 'That is d². Take the square root.')] }); }
      const n = int(r, 3, 15), e = int(r, 3, 15), dist = Math.hypot(n, e); if (Number.isInteger(dist)) return this.gen(level, seed + 'w');
      return make(this.id, level, seed, { prompt: `Sam walks ${n} km due north and then ${e} km due east. How far is Sam from the start, in a straight line? Give your answer to 1 decimal place.`, fig: { h: 300, segs: [{ a: [180, 260], b: [180, 70] }, { a: [180, 70], b: [440, 70] }, { a: [180, 260], b: [440, 70], dash: true }], angles: [{ v: [180, 70], p: [180, 260], q: [440, 70], right: true }], dims: [{ a: [180, 260], b: [180, 70], t: `${n} km`, off: 30 }, { a: [180, 70], b: [440, 70], t: `${e} km`, off: 18 }], labels: [{ at: [180, 285], t: 'Start' }], note: NOTE, alt: `${n} km north then ${e} km east; straight-line distance dashed` }, calculator: true, answer: dp1(dist), steps: [`d² = ${n}² + ${e}² = ${n * n + e * e}`, `d ≈ ${dist.toFixed(1)} km`], traps: [tv(n + e, 'That is the distance walked. The straight line is the hypotenuse.')] });
    }
    if (level === 2) {
      const tri = r() < 0.5, t = pick(r, [[3, 4, 5], [6, 8, 10], [5, 12, 13]]), dx = tri ? t[0] * pick(r, [1, -1]) : int(r, -6, 6) || 3, dy = tri ? t[1] * pick(r, [1, -1]) : int(r, -6, 6) || -2;
      const x1 = int(r, -4, 4), y1 = int(r, -4, 4), x2 = x1 + dx, y2 = y1 + dy, d = Math.hypot(dx, dy), exactD = Number.isInteger(d);
      return make(this.id, level, seed, { prompt: `A is the point (${x1}, ${y1}) and B is the point (${x2}, ${y2}). Work out the length of AB.${exactD ? '' : ' Give your answer to 1 decimal place.'}`, calculator: !exactD, answer: exactD ? intAns(d) : dp1(d), steps: [`Across: ${x2} − ${x1} = ${dx}; up: ${y2} − ${y1} = ${dy}`, `AB² = ${dx}² + ${dy}² = ${dx * dx + dy * dy}`, `AB = ${exactD ? d : '√' + (dx * dx + dy * dy) + ' ≈ ' + d.toFixed(1)}`], traps: [tv(Math.abs(dx) + Math.abs(dy), 'That is the distance along the grid lines. AB is the hypotenuse.'), tv(dx * dx + dy * dy, 'That is AB². Take the square root.')] });
    }
    if (r() < 0.5) {
      const half = int(r, 3, 10), side = int(r, half + 2, 20), h = Math.sqrt(side * side - half * half); if (Number.isInteger(h)) return this.gen(level, seed + 'i');
      return make(this.id, level, seed, { prompt: `An isosceles triangle has a base of ${2 * half} cm and two equal sides of ${side} cm. Work out its perpendicular height. Give your answer to 1 decimal place.`, fig: { h: 300, polys: [{ pts: [[120, 260], [480, 260], [300, 50]] }], segs: [{ a: [300, 50], b: [300, 260], dash: true }], angles: [{ v: [300, 260], p: [480, 260], q: [300, 50], right: true }], ticks: [{ a: [120, 260], b: [300, 50], n: 1 }, { a: [480, 260], b: [300, 50], n: 1 }], dims: [{ a: [120, 260], b: [480, 260], t: `${2 * half} cm`, off: -22 }, { a: [300, 50], b: [120, 260], t: `${side} cm`, off: -26 }, { a: [300, 260], b: [300, 50], t: 'h', off: -14 }], note: NOTE, alt: `Isosceles triangle, base ${2 * half} cm, equal sides ${side} cm, height h` }, calculator: true, answer: dp1(h), steps: [`The height splits the base in half: ${half} cm`, `h² = ${side}² − ${half}² = ${side * side - half * half}`, `h ≈ ${h.toFixed(1)} cm`], traps: [t1(Math.sqrt(side * side - 4 * half * half) || 1, `Halve the base first: the right-angled triangle has base ${half} cm.`)].filter(t => ok1(t.v.n / t.v.d, h)) });
    }
    const a = int(r, 3, 9), b = int(r, 3, 9), c = int(r, 2, 8), ac2 = a * a + b * b, ad = Math.sqrt(ac2 + c * c);
    return make(this.id, level, seed, { prompt: `In triangle ABC, angle B = 90°, AB = ${a} cm and BC = ${b} cm. In triangle ACD, angle C = 90° and CD = ${c} cm. Work out AD to 1 decimal place.`, fig: { h: 320, polys: [{ pts: [[110, 280], [330, 280], [330, 120]] }, { pts: [[110, 280], [330, 120], [460, 60]], fill: '#a8d5b511' }], angles: [{ v: [330, 280], p: [110, 280], q: [330, 120], right: true }, { v: [330, 120], p: [110, 280], q: [460, 60], right: true }], labels: [{ at: [96, 296], t: 'A' }, { at: [340, 300], t: 'B' }, { at: [346, 136], t: 'C' }, { at: [472, 56], t: 'D' }], dims: [{ a: [110, 280], b: [330, 280], t: `${a} cm`, off: -22 }, { a: [330, 280], b: [330, 120], t: `${b} cm`, off: -26 }], note: NOTE, alt: `Two right-angled triangles sharing AC: AB ${a} cm, BC ${b} cm, CD ${c} cm` }, calculator: true, answer: dp1(ad), steps: [`AC² = ${a}² + ${b}² = ${ac2} (keep it exact)`, `AD² = AC² + ${c}² = ${ac2} + ${c * c} = ${ac2 + c * c}`, `AD ≈ ${ad.toFixed(1)} cm`], traps: [t1(Math.hypot(a + b, c), 'Find AC first with triangle ABC, then use triangle ACD.'), tv(a + b + c, 'Use Pythagoras twice; do not add the lengths.')].filter(t => ok1(t.v.n / t.v.d, ad)) });
  },
};

/* ═════════ G20 trigonometry in right-angled triangles ═════════ */
const RATIO = { sin: ['opposite', 'hypotenuse'], cos: ['adjacent', 'hypotenuse'], tan: ['opposite', 'adjacent'] };
const trig = {
  id: 'maths.geometry.trig',
  name: 'Sin, cos and tan',
  levels: [{ label: 'Choose the ratio' }, { label: 'Find a side' }, { label: 'Find an angle' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), th = int(r, 20, 70), H = int(r, 6, 20), adj = H * Math.cos(rad(th)), opp = H * Math.sin(rad(th));
    const names = { adjacent: 0, opposite: 1, hypotenuse: 2 }, val = { adjacent: adj, opposite: opp, hypotenuse: H };
    const fn = pick(r, ['sin', 'cos', 'tan']), [top, bot] = RATIO[fn], knownIsTop = r() < 0.45;
    const known = knownIsTop ? top : bot, unknown = knownIsTop ? bot : top, kv = Math.max(2, Math.round(val[known]));
    // rebuild the triangle so the known side is exactly kv
    const scale = kv / val[known], s = { adjacent: adj * scale, opposite: opp * scale, hypotenuse: H * scale };
    const labs = ['', '', '']; labs[names[known]] = `${kv} cm`; labs[names[unknown]] = 'x';
    const fig = rtFig(s.adjacent, s.opposite, labs, `${th}°`, `Right-angled triangle with angle ${th}°; the ${known} is ${kv} cm and the ${unknown} is x`);
    if (level === 1) {
      const ch = choiceItem(r, fn, ['sin', 'cos', 'tan'].filter(f => f !== fn), o => `${o} uses the ${RATIO[o][0]} and the ${RATIO[o][1]}. Here you have the ${known} and the ${unknown}.`);
      return make(this.id, level, seed, { prompt: `Which ratio links the ${th}° angle, the ${known} and the ${unknown} x?`, fig, ...ch, steps: [`Label the sides from the ${th}° angle: the ${known} is ${kv} cm and x is the ${unknown}.`, `${fn} = {${top}/${bot}} uses both (SOH CAH TOA).`] });
    }
    if (level === 2) {
      const f = { sin: Math.sin, cos: Math.cos, tan: Math.tan }[fn](rad(th)), x = knownIsTop ? kv / f : kv * f;
      const traps = []; const add = (v, why) => { if (ok1(v, x) && v > 0) traps.push(t1(v, why)); };
      add(knownIsTop ? kv * f : kv / f, knownIsTop ? `x is on the bottom of the ratio: x = ${kv} ÷ ${fn} ${th}°.` : `x is on the top of the ratio: x = ${kv} × ${fn} ${th}°.`);
      for (const g of ['sin', 'cos', 'tan'].filter(g => g !== fn)) { const gv = { sin: Math.sin, cos: Math.cos, tan: Math.tan }[g](rad(th)); add(knownIsTop ? kv / gv : kv * gv, `That uses ${g}. With the ${known} and the ${unknown}, use ${fn}.`); }
      return make(this.id, level, seed, { prompt: 'Work out the length x. Give your answer to 1 decimal place.', fig, calculator: true, answer: dp1(x), steps: [`${fn} ${th}° = {${top}/${bot}}`, knownIsTop ? `${fn} ${th}° = {${kv}/x}, so x = ${kv} ÷ ${fn} ${th}°` : `${fn} ${th}° = {x/${kv}}, so x = ${kv} × ${fn} ${th}°`, `x ≈ ${x.toFixed(1)} cm`], traps });
    }
    // find an angle: two sides known, both whole numbers
    const fn3 = pick(r, ['sin', 'cos', 'tan']), [tp, bt] = RATIO[fn3];
    let a = int(r, 3, 15), b = fn3 === 'tan' ? int(r, 3, 15) : int(r, a + 1, a + 12);
    const ang = deg(fn3 === 'sin' ? Math.asin(a / b) : fn3 === 'cos' ? Math.acos(a / b) : Math.atan(a / b));
    const sides = fn3 === 'sin' ? { opposite: a, hypotenuse: b } : fn3 === 'cos' ? { adjacent: a, hypotenuse: b } : { opposite: a, adjacent: b };
    const sAdj = sides.adjacent ?? Math.sqrt(sides.hypotenuse ** 2 - sides.opposite ** 2), sOpp = sides.opposite ?? Math.sqrt(sides.hypotenuse ** 2 - sides.adjacent ** 2);
    const l3 = ['', '', '']; for (const k of Object.keys(sides)) l3[names[k]] = `${sides[k]} cm`;
    const traps = []; const add = (v, why) => { if (Number.isFinite(v) && ok1(v, ang) && v > 0) traps.push(t1(v, why)); };
    add(90 - ang, `That is the other angle. θ is the angle at the bottom left, where the ${fn3 === 'tan' ? 'adjacent' : bt === 'hypotenuse' && fn3 === 'cos' ? 'adjacent' : 'hypotenuse'} meets the base.`);
    add(a / b, `That is ${fn3} θ. Use the inverse, ${fn3}⁻¹, to get the angle.`);
    return make(this.id, level, seed, { prompt: 'Work out the size of angle θ. Give your answer to 1 decimal place.', fig: rtFig(sAdj, sOpp, l3, 'θ', `Right-angled triangle; the ${tp} is ${a} cm and the ${bt} is ${b} cm; angle θ`), calculator: true, answer: dp1(ang), steps: [`${fn3} θ = {${tp}/${bt}} = {${a}/${b}}`, `θ = ${fn3}⁻¹({${a}/${b}}) ≈ ${ang.toFixed(1)}°`], traps });
  },
};

/* ═════════ G21 exact trigonometric values ═════════ */
// value as a + b√r: rational part a, surd coefficient b
const EXACT = {
  'sin 0°': [0, 0, 2], 'sin 30°': [F(1, 2), 0, 2], 'sin 45°': [0, F(1, 2), 2], 'sin 60°': [0, F(1, 2), 3], 'sin 90°': [1, 0, 2],
  'cos 0°': [1, 0, 2], 'cos 30°': [0, F(1, 2), 3], 'cos 45°': [0, F(1, 2), 2], 'cos 60°': [F(1, 2), 0, 2], 'cos 90°': [0, 0, 2],
  'tan 0°': [0, 0, 2], 'tan 30°': [0, F(1, 3), 3], 'tan 45°': [1, 0, 2], 'tan 60°': [0, 1, 3],
};
const exactText = ([a, b, r]) => { const A = fr(a), B = fr(b); if (B.n === 0) return A.d === 1 ? String(A.n) : `{${A.n}/${A.d}}`; const top = `${B.n === 1 ? '' : B.n}√${r}`; return B.d === 1 ? top : `{${top}/${B.d}}`; };
const asAnswer = ([a, b, r]) => (fr(b).n === 0 ? (fr(a).d === 1 ? intAns(fr(a).n) : { kind: 'fraction', value: fr(a) }) : exA(a, b, r));
const trigExact = {
  id: 'maths.geometry.trig-exact',
  name: 'Exact values of sin, cos and tan',
  levels: [{ label: 'Recall the exact values' }, { label: 'Exact lengths in triangles' }, { label: 'Find the angle' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const key = pick(r, Object.keys(EXACT)), v = EXACT[key], [f, a] = key.split(' '), swap = f === 'sin' ? `cos ${a}` : f === 'cos' ? `sin ${a}` : null;
      const o = { prompt: `Write down the exact value of ${key}.`, answer: asAnswer(v), steps: [`${key} = ${exactText(v)}`, 'Half an equilateral triangle gives 30° and 60°; half a square gives 45°.'] };
      const sv = swap && EXACT[swap];
      if (sv && JSON.stringify(sv) !== JSON.stringify(v)) {
        const why = `That is ${swap}. ${f} ${a} = ${exactText(v)}.`;
        if (o.answer.kind === 'exact') { if (fr(sv[1]).n !== 0) o.exTraps = [surd(sv[0], sv[1], sv[2], why)]; }
        else if (fr(sv[1]).n === 0) o.traps = [{ v: F(fr(sv[0]).n, fr(sv[0]).d), why }];
      }
      return make(this.id, level, seed, o);
    }
    if (level === 2) {
      const h = 2 * int(r, 2, 10), kind = pick(r, ['opp30', 'adj60', 'opp60', 'adj30', 'leg45']);
      if (kind === 'opp30' || kind === 'adj60') {
        const ang = kind === 'opp30' ? 30 : 60, side = kind === 'opp30' ? 'opposite' : 'adjacent', fn = kind === 'opp30' ? 'sin' : 'cos';
        const sAdj = h * Math.cos(rad(ang)), sOpp = h * Math.sin(rad(ang)), labs = side === 'opposite' ? ['', 'x', `${h} cm`] : ['x', '', `${h} cm`];
        return make(this.id, level, seed, { prompt: 'Work out the exact length x. Do not use a calculator.', fig: rtFig(sAdj, sOpp, labs, `${ang}°`, `Right-angled triangle, hypotenuse ${h} cm, angle ${ang}°; x is the ${side}`), answer: intAns(h / 2), steps: [`${fn} ${ang}° = {1/2}`, `x = ${h} × {1/2} = ${h / 2} cm`], traps: [tv(h * 2, `Multiply by ${fn} ${ang}° = {1/2}; do not divide.`)] });
      }
      if (kind === 'opp60' || kind === 'adj30') {
        const ang = kind === 'opp60' ? 60 : 30, fn = kind === 'opp60' ? 'sin' : 'cos', labs = kind === 'opp60' ? ['', 'x', `${h} cm`] : ['x', '', `${h} cm`];
        return make(this.id, level, seed, { prompt: 'Work out the exact length x. Give your answer as a surd.', fig: rtFig(h * Math.cos(rad(ang)), h * Math.sin(rad(ang)), labs, `${ang}°`, `Right-angled triangle, hypotenuse ${h} cm, angle ${ang}°`), answer: exA(0, h / 2, 3), steps: [`${fn} ${ang}° = {√3/2}`, `x = ${h} × {√3/2} = ${h / 2}√3 cm`], exTraps: [surd(0, h, 3, 'Halve it: the value is √3 over 2.'), surd(0, F(h, 2), 2, `That uses √2. ${fn} ${ang}° = {√3/2}.`)] });
      }
      const L = int(r, 2, 12);
      return make(this.id, level, seed, { prompt: `A right-angled triangle has an angle of 45° and a shorter side of ${L} cm. Work out the exact length of the hypotenuse.`, fig: rtFig(L, L, [`${L} cm`, '', 'x'], '45°', `Right-angled isosceles triangle, shorter sides ${L} cm, hypotenuse x`), answer: exA(0, L, 2), steps: ['The triangle is isosceles, so both shorter sides are ' + L + ' cm.', `x² = ${L}² + ${L}² = ${2 * L * L}`, `x = ${L}√2 cm`], exTraps: [surd(0, L, 3, 'Use √2 for 45°: x² = 2 × ' + L + '².'), surd(0, 2 * L, 2, `x² = 2 × ${L}², so x = ${L}√2.`)] });
    }
    const ang = pick(r, [30, 45, 60]), k = int(r, 2, 9), kind = ang === 45 ? 'tan' : pick(r, ['sin', 'cos']);
    const [o, h] = kind === 'tan' ? [k, k] : kind === 'sin' ? (ang === 30 ? [k, 2 * k] : [null, 2 * k]) : (ang === 60 ? [k, 2 * k] : [null, 2 * k]);
    if (o === null) return this.gen(level, seed + 'n');
    const desc = kind === 'tan' ? `the opposite side and the adjacent side are both ${k} cm` : kind === 'sin' ? `the opposite side is ${k} cm and the hypotenuse is ${2 * k} cm` : `the adjacent side is ${k} cm and the hypotenuse is ${2 * k} cm`;
    const ch = choiceItem(r, `${ang}°`, ['30°', '45°', '60°', '90°'].filter(v => v !== `${ang}°`).slice(0, 3), v => `${kind} ${v} is not ${kind === 'tan' ? '1' : '{1/2}'}. Use ${kind} θ = ${kind === 'tan' ? '1' : '{1/2}'}.`);
    return make(this.id, level, seed, { prompt: `In a right-angled triangle, ${desc}, measured from angle θ. What is θ?`, ...ch, steps: [`${kind} θ = ${kind === 'tan' ? `{${k}/${k}} = 1` : `{${k}/${2 * k}} = {1/2}`}`, `${kind} ${ang}° = ${kind === 'tan' ? '1' : '{1/2}'}, so θ = ${ang}°`] });
  },
};

/* ═════════ G7, G24 transformations on a grid ═════════ */
const GRID = { xr: [-7, 7], yr: [-7, 7] };
const tri3 = r => { for (let k = 0; k < 40; k++) { const x = int(r, -4, 3), y = int(r, -4, 3), p = [[x, y], [x + int(r, 1, 3), y], [x, y + int(r, 1, 3)]]; if (r() < 0.5) p[2] = [x + int(r, 1, 3), y + int(r, 1, 3)]; if (p[2][0] !== p[1][0] || p[2][1] !== p[1][1]) return p; } return [[0, 0], [2, 0], [0, 2]]; };
const inGrid = pts => pts.every(([x, y]) => x >= -7 && x <= 7 && y >= -7 && y <= 7 && Number.isInteger(x) && Number.isInteger(y));
const sameSet = (a, b) => JSON.stringify(a.map(p => p.join()).sort()) === JSON.stringify(b.map(p => p.join()).sort());
const ptsText = pts => pts.map(([x, y]) => `(${x}, ${y})`).join(', ');
const mn = v => String(v).replace('-', '−');
const vec = (a, b) => `{vec ${mn(a)};${mn(b)}}`;
const REFL = { 'the y-axis': ([x, y]) => [-x, y], 'the x-axis': ([x, y]) => [x, -y], 'the line y = x': ([x, y]) => [y, x], 'the line y = −x': ([x, y]) => [-y, -x] };
const rot = (deg_, [cx, cy]) => ([x, y]) => { const dx = x - cx, dy = y - cy; return deg_ === 90 ? [cx - dy, cy + dx] : deg_ === -90 ? [cx + dy, cy - dx] : [cx - dx, cy - dy]; }; // 90 = anticlockwise
const transform = {
  id: 'maths.geometry.transform',
  name: 'Translate, reflect, rotate and enlarge',
  levels: [{ label: 'Translations by a column vector' }, { label: 'Reflections' }, { label: 'Rotations' }, { label: 'Enlargements' }, { label: 'Negative scale factors', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), P = tri3(r);
    const build = (img, prompt, steps, ptTraps, extraGraph = {}) => {
      if (!inGrid(img)) return null;
      // the object is drawn on the answer grid itself, so the image is plotted beside it
      const grid = { ...GRID, polys: [{ pts: [...P, P[0]], label: 'A' }], ...extraGraph };
      return make(this.id, level, seed, { prompt, answer: { kind: 'points', points: img, grid }, steps, ptTraps: ptTraps.filter(t => inGrid(t.pts) && JSON.stringify([...t.pts].sort()) !== JSON.stringify([...img].sort())) });
    };
    let it = null;
    if (level === 1) {
      const a = int(r, -5, 5) || 4, b = int(r, -5, 5) || -3, img = P.map(([x, y]) => [x + a, y + b]);
      it = build(img, `Translate triangle A by the vector ${vec(a, b)}. Plot the three vertices of the image.`, [`${vec(a, b)}: ${Math.abs(a)} ${a >= 0 ? 'right' : 'left'} and ${Math.abs(b)} ${b >= 0 ? 'up' : 'down'}`, `Image: ${ptsText(img)}`], [{ pts: P.map(([x, y]) => [x + b, y + a]), why: 'The top number moves across (x) and the bottom number moves up or down (y).' }, { pts: P.map(([x, y]) => [x - a, y - b]), why: 'Positive numbers move right and up; negative numbers move left and down.' }]);
    } else if (level === 2) {
      const line = pick(r, Object.keys(REFL)), img = P.map(REFL[line]);
      const other = { 'the y-axis': 'the x-axis', 'the x-axis': 'the y-axis', 'the line y = x': 'the line y = −x', 'the line y = −x': 'the line y = x' }[line];
      it = build(img, `Reflect triangle A in ${line}. Plot the three vertices of the image.`, [`Each point moves to the same distance on the other side of ${line}.`, `Image: ${ptsText(img)}`], [{ pts: P.map(REFL[other]), why: `That is a reflection in ${other}.` }], { fns: line.includes('y = x') ? [{ expr: 'x', dash: true }] : line.includes('−x') ? [{ expr: '-x', dash: true }] : [] });
    } else if (level === 3) {
      const d = pick(r, [90, -90, 180]), c = pick(r, [[0, 0], [0, 0], [int(r, -2, 2), int(r, -2, 2)]]), img = P.map(rot(d, c));
      const dirTxt = d === 180 ? '180°' : `90° ${d === 90 ? 'anticlockwise' : 'clockwise'}`;
      it = build(img, `Rotate triangle A ${dirTxt} about (${c[0]}, ${c[1]}). Plot the three vertices of the image.`, ['Trace the shape, put your pencil on the centre and turn the tracing.', `Image: ${ptsText(img)}`], [...(d !== 180 ? [{ pts: P.map(rot(-d, c)), why: 'That turns the wrong way. Clockwise is the way the hands of a clock move.' }] : []), { pts: P.map(rot(d, [0, 0])), why: `Rotate about (${c[0]}, ${c[1]}), not the origin.` }], { points: [[c[0], c[1], 'centre']] });
      if (it && c[0] === 0 && c[1] === 0) it.ptTraps = it.ptTraps.filter(t => !t.why.startsWith('Rotate about'));
    } else {
      const k = level === 4 ? pick(r, [2, 2, 3, F(1, 2)]) : pick(r, [-1, -2, F(-1, 2)]), kv = typeof k === 'number' ? k : k.n / k.d;
      const c = [int(r, -3, 3), int(r, -3, 3)], img = P.map(([x, y]) => [c[0] + kv * (x - c[0]), c[1] + kv * (y - c[1])]);
      const kt = typeof k === 'number' ? String(k) : `{${k.n}/${k.d}}`;
      it = build(img, `Enlarge triangle A by scale factor ${kt}, centre (${c[0]}, ${c[1]}). Plot the three vertices of the image.`, [`Multiply each distance from the centre by ${kt}${kv < 0 ? ' — the negative sign puts the image on the opposite side of the centre' : ''}.`, `Image: ${ptsText(img)}`], [{ pts: P.map(([x, y]) => [x * kv, y * kv]), why: `Measure from the centre (${c[0]}, ${c[1]}), not from the origin.` }, ...(kv < 0 ? [{ pts: P.map(([x, y]) => [c[0] - kv * (x - c[0]), c[1] - kv * (y - c[1])]), why: 'A negative scale factor puts the image on the other side of the centre, upside down.' }] : [])], { points: [[c[0], c[1], 'centre']] });
    }
    return it || this.gen(level, seed + 'g');
  },
};

/* ═════════ G7, G8 describe a transformation ═════════ */
const describe = {
  id: 'maths.geometry.transform-describe',
  name: 'Describe a transformation',
  levels: [{ label: 'Translations and reflections' }, { label: 'Rotations and enlargements' }, { label: 'Combinations and invariant points', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), P = tri3(r);
    const show = (img, label = 'B') => ({ ...GRID, polys: [{ pts: [...P, P[0]], label: 'A' }, { pts: [...img, img[0]], label }] });
    if (level === 1) {
      if (r() < 0.5) {
        const a = int(r, -5, 5) || 3, b = int(r, -4, 4) || 2, img = P.map(([x, y]) => [x + a, y + b]); if (!inGrid(img)) return this.gen(level, seed + 't');
        const right = `Translation by ${vec(a, b)}`, wrong = [`Translation by ${vec(b, a)}`, `Translation by ${vec(-a, -b)}`, `Reflection in the y-axis`].filter(w => w !== right);
        const ch = choiceItem(r, right, [...new Set(wrong)].slice(0, 3), o => (o.includes(vec(-a, -b)) ? 'That vector maps B back onto A.' : o.includes('Reflection') ? 'B is the same way round as A, so it is not a reflection.' : 'The top number is across, the bottom number is up or down.'));
        return make(this.id, level, seed, { prompt: 'Describe fully the single transformation that maps triangle A onto triangle B.', graph: show(img), ...ch, steps: [`Every point moves ${Math.abs(a)} ${a >= 0 ? 'right' : 'left'} and ${Math.abs(b)} ${b >= 0 ? 'up' : 'down'}.`, right] });
      }
      const line = pick(r, Object.keys(REFL)), img = P.map(REFL[line]); if (JSON.stringify([...img].sort()) === JSON.stringify([...P].sort())) return this.gen(level, seed + 'q');
      const right = `Reflection in ${line}`, wrong = Object.keys(REFL).filter(l => l !== line).map(l => `Reflection in ${l}`).slice(0, 2).concat(['Rotation 180° about (0, 0)']).filter(w => !sameSet(P.map(w.startsWith('Rotation') ? rot(180, [0, 0]) : REFL[w.replace('Reflection in ', '')]), img));
      const ch = choiceItem(r, right, wrong.slice(0, 3), o => `${o} does not put every vertex of A onto B. Check one point.`);
      return make(this.id, level, seed, { prompt: 'Describe fully the single transformation that maps triangle A onto triangle B.', graph: show(P.map(REFL[line])), ...ch, steps: ['B is a mirror image of A.', `Each vertex is the same distance from ${line} on the other side.`, right] });
    }
    if (level === 2) {
      if (r() < 0.5) {
        const d = pick(r, [90, -90, 180]), c = [0, 0], img = P.map(rot(d, c)), t = d === 180 ? 'Rotation 180° about (0, 0)' : `Rotation 90° ${d === 90 ? 'anticlockwise' : 'clockwise'} about (0, 0)`;
        const wrong = (d === 180 ? ['Rotation 90° clockwise about (0, 0)', 'Reflection in the x-axis', 'Enlargement, scale factor −2, centre (0, 0)'] : [`Rotation 90° ${d === 90 ? 'clockwise' : 'anticlockwise'} about (0, 0)`, 'Rotation 180° about (0, 0)', 'Reflection in the line y = x']).filter(w => !sameSet(w.startsWith('Reflection') ? P.map(REFL[w.replace('Reflection in ', '')]) : w.startsWith('Enlargement') ? P.map(([x, y]) => [-2 * x, -2 * y]) : P.map(rot(w.includes('180') ? 180 : w.includes('anticlockwise') ? 90 : -90, [0, 0])), img));
        const ch = choiceItem(r, t, wrong, o => (o.startsWith('Rotation') ? 'Check the direction and the angle: trace A and turn it about (0, 0).' : o.startsWith('Enlargement') ? 'B is the same size as A, so it is not an enlargement by −2.' : 'A rotation keeps the shape the same way round; check a vertex.'));
        return make(this.id, level, seed, { prompt: 'Describe fully the single transformation that maps triangle A onto triangle B.', graph: show(img), ...ch, steps: ['A rotation needs an angle, a direction and a centre.', t] });
      }
      const k = pick(r, [2, 3]), c = [int(r, -2, 0), int(r, -2, 0)], Q = [[c[0] + 1, c[1] + 1], [c[0] + 2, c[1] + 1], [c[0] + 1, c[1] + 2]], img = Q.map(([x, y]) => [c[0] + k * (x - c[0]), c[1] + k * (y - c[1])]);
      const t = `Enlargement, scale factor ${k}, centre (${c[0]}, ${c[1]})`;
      const ch = choiceItem(r, t, [`Enlargement, scale factor ${k}, centre (0, 0)`, `Enlargement, scale factor {1/${k}}, centre (${c[0]}, ${c[1]})`, `Translation by ${vec(img[0][0] - Q[0][0], img[0][1] - Q[0][1])}`].filter(w => w !== t), o => (o.includes('{1/') ? 'B is bigger than A, so the scale factor is more than 1.' : o.startsWith('Translation') ? 'B is bigger than A, so it is not a translation.' : 'Draw lines through matching vertices: they meet at the centre.'));
      return make(this.id, level, seed, { prompt: 'Describe fully the single transformation that maps triangle A onto triangle B.', graph: { ...GRID, polys: [{ pts: [...Q, Q[0]], label: 'A' }, { pts: [...img, img[0]], label: 'B' }] }, ...ch, steps: [`Lengths are ${k} times as long: scale factor ${k}.`, `Lines through matching vertices meet at (${c[0]}, ${c[1]}).`, t] });
    }
    if (r() < 0.5) {
      const pairs = [
        ['Reflect in the x-axis, then reflect in the y-axis.', 'Rotation 180° about (0, 0)', ['Reflection in the line y = x', 'Rotation 90° clockwise about (0, 0)', 'Translation by ' + vec(0, 0)]],
        ['Reflect in the y-axis, then reflect in the line y = x.', 'Rotation 90° clockwise about (0, 0)', ['Rotation 90° anticlockwise about (0, 0)', 'Rotation 180° about (0, 0)', 'Reflection in the x-axis']],
        ['Rotate 90° anticlockwise about (0, 0), then reflect in the x-axis.', 'Reflection in the line y = −x', ['Reflection in the line y = x', 'Rotation 90° clockwise about (0, 0)', 'Reflection in the y-axis']],
        ['Rotate 180° about (0, 0), then rotate 180° about (0, 0) again.', 'No change (the identity)', ['Rotation 90° clockwise about (0, 0)', 'Reflection in the x-axis', 'Rotation 180° about (0, 0)']],
      ];
      const [desc, right, wrong] = pick(r, pairs);
      const ch = choiceItem(r, right, wrong.slice(0, 3), () => 'Track one point, such as (2, 1), through both steps and compare.');
      return make(this.id, level, seed, { prompt: `${desc} Which single transformation has the same effect?`, ...ch, steps: ['Follow a point through both steps. Example: (2, 1).', right] });
    }
    const line = pick(r, ['the line y = x', 'the x-axis', 'the y-axis']), on = line === 'the line y = x' ? (() => { const v = int(r, -4, 4) || 2; return [v, v]; })() : line === 'the x-axis' ? [int(r, -5, 5) || 3, 0] : [0, int(r, -5, 5) || -2];
    const offs = [[on[0] + 1, on[1]], [on[1], on[0] + 2], [-on[0] || 3, on[1] + 1]].filter(p => !(REFL[line](p)[0] === p[0] && REFL[line](p)[1] === p[1]));
    const fmt = p => `(${p[0]}, ${p[1]})`;
    const ch = choiceItem(r, fmt(on), [...new Set(offs.map(fmt))].filter(s => s !== fmt(on)).slice(0, 3), o => `${o} moves when reflected in ${line}. Invariant points lie on the mirror line.`);
    return make(this.id, level, seed, { prompt: `Which point is invariant (does not move) under a reflection in ${line}?`, ...ch, steps: ['Points on the mirror line stay where they are.', `${fmt(on)} is on ${line}.`] });
  },
};

/* ═════════ G2 constructions and loci ═════════ */
const LOCI = [
  ['points the same distance from A and from B', 'The perpendicular bisector of AB', 'Points equidistant from two points lie on the perpendicular bisector of the line joining them.'],
  ['points the same distance from the lines AB and AC', 'The bisector of angle BAC', 'Points equidistant from two lines that meet lie on the angle bisector.'],
  ['points exactly 3 cm from the point A', 'A circle, centre A, radius 3 cm', 'A fixed distance from a point is a circle.'],
  ['points exactly 2 cm from the line segment AB', 'Two lines parallel to AB joined by semicircles at A and B', 'Alongside the segment the locus is two parallel lines; round each end it is a semicircle.'],
];
const CONSTRUCT = [
  ['to draw the perpendicular bisector of AB', 'Arcs of the same radius from A and from B, more than half of AB, crossing above and below', ['Arcs of radius less than half of AB from A and B', 'One arc from the midpoint of AB', 'An arc from A only, crossing AB']],
  ['to bisect angle BAC', 'An arc from A crossing both arms, then equal arcs from those two crossings', ['Equal arcs from B and C, wherever B and C are', 'A single arc from A', 'Measure the angle and halve it with a protractor']],
  ['to draw the perpendicular from point P to the line L', 'An arc from P crossing L twice, then equal arcs from those two crossings on the far side', ['One arc from P touching L once', 'Arcs from the two ends of L', 'Draw any line through P and measure 90° by eye']],
];
const loci = {
  id: 'maths.geometry.loci',
  name: 'Loci and regions',
  levels: [{ label: 'Name the locus' }, { label: 'Regions on a grid' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) { const [desc, ans, why] = pick(r, LOCI); const ch = choiceItem(r, ans, LOCI.map(l => l[1]).filter(a => a !== ans), o => `That is the locus of ${LOCI.find(l => l[1] === o)[0]}.`); return make(this.id, level, seed, { prompt: `What is the locus of ${desc}?`, ...ch, steps: [why] }); }
    // regions: closer to B than C and within d of A
    for (let k = 0; k < 60; k++) {
      const A = [int(r, -3, 3), int(r, -3, 3)], B = [int(r, -6, -2), int(r, -5, 5)], C = [int(r, 2, 6), int(r, -5, 5)], d = int(r, 3, 5);
      const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
      const good = p => dist(p, A) < d && dist(p, B) < dist(p, C);
      const cand = []; for (let x = -6; x <= 6; x++) for (let y = -6; y <= 6; y++) { const p = [x, y]; if ([A, B, C].some(q => q[0] === x && q[1] === y)) continue; cand.push(p); }
      const yes = cand.filter(p => good(p) && dist(p, A) < d - 0.4 && dist(p, B) < dist(p, C) - 0.6), noFar = cand.filter(p => dist(p, A) > d + 0.4 && dist(p, B) < dist(p, C) - 0.6), noNear = cand.filter(p => dist(p, A) < d - 0.4 && dist(p, C) < dist(p, B) - 0.6);
      if (!yes.length || !noFar.length || noNear.length < 2) continue;
      const right = pick(r, yes), w = [pick(r, noFar), ...shuffled(r, noNear).slice(0, 2)], f = p => `(${p[0]}, ${p[1]})`;
      const ch = choiceItem(r, f(right), w.map(f), o => { const p = w.find(q => f(q) === o); return dist(p, A) > d ? `${o} is more than ${d} units from A.` : `${o} is nearer to C than to B.`; });
      return make(this.id, level, seed, { prompt: `Which point is less than ${d} units from A and nearer to B than to C?`, graph: { xr: [-7, 7], yr: [-7, 7], points: [[...A, 'A'], [...B, 'B'], [...C, 'C']] }, ...ch, steps: [`Less than ${d} from A: inside the circle, centre A, radius ${d}.`, 'Nearer to B than C: on B’s side of the perpendicular bisector of BC.', `${f(right)} satisfies both.`] });
    }
    return this.gen(level, seed + 'x');
  },
};


const ANGLES = [
  [60, 'Construct an equilateral triangle: equal arcs from both ends of a line'],
  [90, 'Construct the perpendicular bisector of a line'],
  [30, 'Construct 60° (equilateral triangle), then bisect it'],
  [45, 'Construct 90° (perpendicular), then bisect it'],
];
const constructions = {
  id: 'maths.geometry.constructions',
  name: 'Ruler-and-compass constructions',
  levels: [{ label: 'Choose the method' }, { label: 'Constructing triangles' }, { label: 'Constructing angles' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) { const [task, ans, wrong] = pick(r, CONSTRUCT); const ch = choiceItem(r, ans, wrong, () => 'That does not fix two points that are equally far from the right places, so the ruled line would not be exact.'); return make(this.id, level, seed, { prompt: `Which method is correct ${task} with a ruler and compasses?`, ...ch, steps: [ans + '.', 'Leave the construction arcs showing.'] }); }
    if (level === 2) {
      const a = int(r, 3, 9), b = int(r, 3, 9), c = pick(r, [a + b - int(r, 1, 2), a + b, a + b + 1, Math.abs(a - b) + 1]), possible = a + b > c && a + c > b && b + c > a;
      if (c < 2) return this.gen(level, seed + 'c');
      const ch = choiceItem(r, possible ? 'Yes' : 'No', [possible ? 'No' : 'Yes'], () => (possible ? 'Each side is shorter than the other two added together, so the arcs from the ends of the longest side will cross.' : `${Math.max(a, b, c)} cm is not shorter than the other two sides added together, so the arcs cannot meet.`));
      return make(this.id, level, seed, { prompt: `Can a triangle be constructed with sides ${a} cm, ${b} cm and ${c} cm?`, ...ch, steps: ['Draw the longest side, then arcs of the other two lengths from its ends.', `The arcs meet only if the two shorter sides add up to more than the longest: ${[a, b, c].sort((x, y) => x - y).slice(0, 2).join(' + ')} ${possible ? '>' : '≤'} ${Math.max(a, b, c)}.`] });
    }
    const [ang, ans] = pick(r, ANGLES), ch = choiceItem(r, ans, ANGLES.filter(x => x[0] !== ang).map(x => x[1]), o => `That method makes an angle of ${ANGLES.find(x => x[1] === o)[0]}°, not ${ang}°.`);
    return make(this.id, level, seed, { prompt: `How can you construct an angle of ${ang}° with only a ruler and compasses?`, ...ch, steps: [ans + '.', 'Bisecting halves an angle: 60° → 30°, 90° → 45°.'] });
  },
};

/* ═════════ G15 bearings ═════════ */
function bearingFig(b, labelB = 'B', angLabel = `${b}°`) {
  const A = [300, 170], len = 130, B = [A[0] + len * Math.sin(rad(b)), A[1] - len * Math.cos(rad(b))], N = [A[0], A[1] - 130];
  return { h: 340, segs: [{ a: A, b: N }, { a: A, b: B }], angles: [{ v: A, p: N, q: B, label: angLabel, r: b > 180 ? 40 : 34 }], labels: [{ at: [N[0], N[1] - 10], t: 'N' }, { at: [A[0] - 14, A[1] + 22], t: 'A' }, { at: [B[0] + (B[0] >= A[0] ? 14 : -14), B[1] + (B[1] > A[1] ? 18 : -6)], t: labelB }], dots: [A, B], note: NOTE, alt: `North line at A; ${labelB} on a bearing of ${b}°` };
}
const b3 = v => String(((v % 360) + 360) % 360).padStart(3, '0');
const COMPASS = { north: 0, 'north-east': 45, east: 90, 'south-east': 135, south: 180, 'south-west': 225, west: 270, 'north-west': 315 };
const bearings = {
  id: 'maths.geometry.bearings',
  name: 'Bearings',
  levels: [{ label: 'Read a bearing' }, { label: 'Back bearings' }, { label: 'Bearings with angle facts' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.3) { const [name, v] = pick(r, Object.entries(COMPASS).filter(([, v]) => v !== 0)); return make(this.id, level, seed, { prompt: `B is ${name} of A. What is the bearing of B from A? Give three figures.`, answer: intAns(v), steps: ['Measure clockwise from north.', `${name} = ${b3(v)}°`], traps: [tv(360 - v, 'Bearings go clockwise from north, not anticlockwise.')].filter(t => t.v.n !== v) }); }
      const b = int(r, 10, 350); if (b % 90 === 0) return this.gen(level, seed + 'z');
      return make(this.id, level, seed, { prompt: 'What is the bearing of B from A? Give three figures.', fig: bearingFig(b), answer: intAns(b), steps: ['A bearing is measured clockwise from north, at the starting point.', `${b3(b)}°`], traps: [tv(360 - b, 'Measure clockwise from north, not anticlockwise.')] });
    }
    if (level === 2) {
      const b = int(r, 5, 355); if (b % 180 === 0) return this.gen(level, seed + 'y');
      const back = (b + 180) % 360;
      return make(this.id, level, seed, { prompt: `The bearing of B from A is ${b3(b)}°. Work out the bearing of A from B.`, fig: bearingFig(b), answer: intAns(back), steps: ['Add or subtract 180° (the north lines are parallel, so the angles are co-interior).', `${b} ${b < 180 ? '+' : '−'} 180 = ${b3(back)}°`], traps: [tv(360 - b, 'That reflects the bearing. A back bearing differs by 180°.'), tv(b, 'The bearing changes when you start from B.')] });
    }
    const theta = int(r, 25, 80), kind = pick(r, ['reflex', 'east']);
    if (kind === 'reflex') { const b = 360 - theta; return make(this.id, level, seed, { prompt: `B is ${theta}° to the west of north from A (measured anticlockwise from north). What is the bearing of B from A?`, fig: { ...bearingFig(b, 'B', `${theta}°`), angles: [{ v: [300, 170], p: [300 + 130 * Math.sin(rad(b)), 170 - 130 * Math.cos(rad(b))], q: [300, 40], label: `${theta}°`, r: 34 }] }, answer: intAns(b), steps: ['Bearings are measured clockwise from north.', `360 − ${theta} = ${b3(b)}°`], traps: [tv(theta, 'That angle is anticlockwise. Bearings go clockwise: 360 − ' + theta + '.')] }); }
    const b = 90 + theta;
    return make(this.id, level, seed, { prompt: `B is ${theta}° below the east line from A (south of east). What is the bearing of B from A?`, fig: { ...bearingFig(b, 'B', `${theta}°`), segs: [{ a: [300, 170], b: [300, 40] }, { a: [300, 170], b: [300 + 130 * Math.sin(rad(b)), 170 - 130 * Math.cos(rad(b))] }, { a: [300, 170], b: [440, 170], dash: true }], angles: [{ v: [300, 170], p: [440, 170], q: [300 + 130 * Math.sin(rad(b)), 170 - 130 * Math.cos(rad(b))], label: `${theta}°`, r: 40 }] }, answer: intAns(b), steps: ['East is 090°.', `090 + ${theta} = ${b3(b)}°`], traps: [tv(90 - theta, 'Below the east line is further round clockwise: add to 90.'), tv(theta, 'Measure from north, not from east.')] });
  },
};

/* ═════════ G15, G20 scale drawings, elevation and journeys ═════════ */
const scaleDrawing = {
  id: 'maths.geometry.scale-drawing',
  name: 'Scale drawings, elevation and journeys',
  levels: [{ label: 'Scale drawings' }, { label: 'Angles of elevation and depression' }, { label: 'Journeys on bearings' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const sc = pick(r, [50, 100, 200, 20]), cm = int(r, 3, 18) / 2, real = (cm * sc) / 100, back = r() < 0.4;
      if (back) return make(this.id, level, seed, { prompt: `A plan is drawn to a scale of 1 : ${sc}. A wall is ${dtx(real)} m long. How long is it on the plan, in cm?`, answer: Number.isInteger(cm) ? intAns(cm) : decA(F(cm * 2, 2)), steps: [`${dtx(real)} m = ${dtx(real * 100)} cm`, `${dtx(real * 100)} ÷ ${sc} = ${dtx(cm)} cm`], traps: [tv(real * 100 * sc, `Divide by ${sc} to make it smaller on the plan.`), tv(real / sc, 'Change metres to centimetres first.')] });
      return make(this.id, level, seed, { prompt: `A plan is drawn to a scale of 1 : ${sc}. A wall is ${dtx(cm)} cm long on the plan. How long is the real wall, in metres?`, answer: Number.isInteger(real) ? intAns(real) : decA(F(Math.round(real * 100), 100)), steps: [`${dtx(cm)} × ${sc} = ${dtx(cm * sc)} cm`, `${dtx(cm * sc)} cm = ${dtx(real)} m`], traps: [tv(cm * sc, 'That is in centimetres: divide by 100 for metres.')] });
    }
    if (level === 2) {
      const ang = int(r, 15, 60), d = int(r, 10, 80), h = d * Math.tan(rad(ang)), dep = r() < 0.4;
      return make(this.id, level, seed, { prompt: dep ? `From the top of a cliff, the angle of depression of a boat is ${ang}°. The boat is ${d} m from the foot of the cliff. How high is the cliff? Give your answer to 1 decimal place.` : `From a point ${d} m from the foot of a tower, on level ground, the angle of elevation of the top is ${ang}°. How tall is the tower? Give your answer to 1 decimal place.`, fig: rtFig(d, h, [`${d} m`, 'h', ''], `${ang}°`, dep ? `Cliff of height h; boat ${d} m away; angle of depression ${ang}° (equal to the angle of elevation from the boat)` : `Tower of height h; ${d} m away; angle of elevation ${ang}°`), calculator: true, answer: dp1(h), steps: [dep ? `The angle of depression equals the angle of elevation from the boat (alternate angles): ${ang}°.` : `The angle of elevation is measured up from the horizontal: ${ang}°.`, `tan ${ang}° = {h/${d}}`, `h = ${d} × tan ${ang}° ≈ ${h.toFixed(1)} m`], traps: [t1(d * Math.sin(rad(ang)), `Use tan: you know the adjacent (${d} m) and want the opposite.`), t1(d / Math.tan(rad(ang)), `h is on the top: h = ${d} × tan ${ang}°.`)].filter(t => ok1(t.v.n / t.v.d, h)) });
    }
    const a = int(r, 3, 12), b = int(r, 3, 12), dist = Math.hypot(a, b), brg = deg(Math.atan2(a, b)); // a east, b north
    const askBearing = r() < 0.5;
    if (askBearing) return make(this.id, level, seed, { prompt: `A ship sails ${b} km due north and then ${a} km due east. Work out the bearing of the ship from its start. Give your answer to the nearest degree.`, fig: { h: 300, segs: [{ a: [200, 260], b: [200, 80] }, { a: [200, 80], b: [400, 80] }, { a: [200, 260], b: [400, 80], dash: true }], angles: [{ v: [200, 80], p: [200, 260], q: [400, 80], right: true }, { v: [200, 260], p: [200, 80], q: [400, 80], label: 'θ', r: 40 }], dims: [{ a: [200, 260], b: [200, 80], t: `${b} km`, off: 30 }, { a: [200, 80], b: [400, 80], t: `${a} km`, off: 18 }], note: NOTE, alt: `${b} km north then ${a} km east; bearing θ from the start` }, calculator: true, answer: intAns(Math.round(brg)), steps: [`tan θ = {${a}/${b}}`, `θ = tan⁻¹({${a}/${b}}) ≈ ${brg.toFixed(1)}°`, `Bearing ${b3(Math.round(brg))}°`], traps: [tv(Math.round(90 - brg), 'That angle is measured from east. Bearings are measured from north.')].filter(t => t.v.n !== Math.round(brg)) });
    return make(this.id, level, seed, { prompt: `A ship sails ${b} km on a bearing of 000° and then ${a} km on a bearing of 090°. How far is it from its start? Give your answer to 1 decimal place.`, calculator: true, answer: Number.isInteger(dist) ? intAns(dist) : dp1(dist), steps: ['000° is north and 090° is east, so the legs are at right angles.', `d² = ${b}² + ${a}² = ${a * a + b * b}`, `d ≈ ${dist.toFixed(1)} km`], traps: [tv(a + b, 'That is the distance sailed. The straight line back is the hypotenuse.')] });
  },
};

export { rtFig, bearingFig };
export const geometrySkills2 = [pythSides, pythProblems, trig, trigExact, transform, describe, loci, constructions, bearings, scaleDrawing];
