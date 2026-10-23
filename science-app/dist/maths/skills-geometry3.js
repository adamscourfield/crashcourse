// Edexcel 1MA1 Geometry and measures, batch 3: congruence and similarity (G5, G6, G19), circle
// theorems (G9, G10 Higher), 3D solids, plans and elevations (G12, G13), sine and cosine rules, area
// ½ab sin C and 3D trigonometry (G20, G22, G23 Higher), and vectors (G24, G25).
// Circle-theorem figures are drawn accurately from polar angles so the tests can measure them.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r13';
import { F } from './frac.js?v=20261023-maths-r13';
import { makeA, fixMinus, choiceItem, algAns, algTrap } from './skills-algebra.js?v=20261023-maths-r13';

const fr = v => { const f = typeof v === 'number' ? F(v) : v; return { n: f.n, d: f.d }; };
const intAns = v => ({ kind: 'integer', value: v });
const decA = (f, extra = {}) => ({ kind: 'decimal', value: fr(f), ...extra });
const r1 = v => F(Math.round(v * 10), 10);
const dp1 = v => decA(r1(v), { dp: 1, tol: 0.06 });
const tv = (v, why) => ({ v: Number.isInteger(v) ? F(v) : F(Math.round(v * 1000), 1000), why });
const t1 = (v, why) => ({ v: r1(v), why });
const ok1 = (trap, ans) => Number.isFinite(trap) && trap > 0 && Math.abs(trap - ans) > 0.11;
const rad = d => (d * Math.PI) / 180, deg = r => (r * 180) / Math.PI;
const dtx = v => (Number.isInteger(v) ? String(v) : String(+v.toFixed(3)));
const mn = v => String(v).replace('-', '−');
const NOTE = 'Not drawn accurately';
const make = (skill, level, seed, o) => {
  if (o.soTraps && o.answer.kind === 'solutions') { const key = t => t.sols.map(r => r.map(v => `${v.n}/${v.d}`).join()).join(';'), ans = key(o.answer); o = { ...o, soTraps: o.soTraps.filter((t, i, all) => key(t) !== ans && all.findIndex(u => key(u) === key(t)) === i).map(t => ({ ...t, why: fixMinus(t.why) })) }; }
  return makeA(skill, level, seed, o);
};
const higherLevels = labels => labels.map(label => ({ label, higher: true }));

/* ═════════ G5, G6 congruence ═════════ */
const CRIT = {
  SSS: 'three pairs of equal sides',
  SAS: 'two pairs of equal sides and the angle between them equal',
  ASA: 'two pairs of equal angles and a pair of corresponding sides equal',
  RHS: 'a right angle, equal hypotenuses and another pair of equal sides',
};
const congruence = {
  id: 'maths.geometry.congruence',
  name: 'Congruent triangles',
  levels: [{ label: 'Name the condition' }, { label: 'Congruent or not?' }, { label: 'Use congruence' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const c = pick(r, Object.keys(CRIT));
      const ch = choiceItem(r, c, Object.keys(CRIT).filter(k => k !== c), o => `${o} needs ${CRIT[o]}.`);
      return make(this.id, level, seed, { prompt: `Two triangles have ${CRIT[c]}. Which condition shows they are congruent?`, ...ch, steps: [`${c}: ${CRIT[c]}.`] });
    }
    if (level === 2) {
      const cases = [
        ['all three angles equal (40°, 60°, 80° in both)', 'No', 'Equal angles only show the triangles are similar; one could be an enlargement of the other.'],
        ['sides 5 cm, 7 cm and an angle of 50° that is not between them, in both', 'No', 'Two sides and an angle that is not between them (SSA) can make two different triangles.'],
        ['sides 5 cm, 7 cm and 9 cm in both', 'Yes', 'Three pairs of equal sides: SSS.'],
        ['sides 6 cm and 8 cm with an angle of 35° between them, in both', 'Yes', 'Two sides and the included angle: SAS.'],
        ['angles 50° and 70° with the side of 6 cm between them, in both', 'Yes', 'Two angles and the corresponding side: ASA.'],
        ['a right angle, hypotenuse 13 cm and one side 5 cm, in both', 'Yes', 'Right angle, hypotenuse and side: RHS.'],
      ];
      const [desc, ans, why] = pick(r, cases);
      const ch = choiceItem(r, ans, [ans === 'Yes' ? 'No' : 'Yes', 'Only if they are the same way round'], o => (o.startsWith('Only') ? 'Congruent triangles can be reflected or rotated; orientation does not matter.' : why));
      return make(this.id, level, seed, { prompt: `Two triangles have ${desc}. Must they be congruent?`, ...ch, steps: [why] });
    }
    const a = int(r, 30, 80), b = int(r, 30, 140 - a), s = int(r, 4, 15);
    const ask = pick(r, ['side', 'angle']);
    return make(this.id, level, seed, { prompt: ask === 'side' ? `Triangles ABC and PQR are congruent, with A matching P, B matching Q and C matching R. AB = ${s} cm. How long is PQ?` : `Triangles ABC and PQR are congruent, with A matching P, B matching Q and C matching R. Angle A = ${a}° and angle B = ${b}°. What is angle R?`, answer: intAns(ask === 'side' ? s : 180 - a - b), steps: ask === 'side' ? ['Corresponding sides of congruent triangles are equal.', `PQ = AB = ${s} cm`] : ['Corresponding angles are equal, so R = C.', `C = 180 − ${a} − ${b} = ${180 - a - b}°`], traps: ask === 'side' ? [] : [tv(a, 'R matches C, not A: work out the third angle of ABC.'), tv(b, 'R matches C, not B: work out the third angle of ABC.')] });
  },
};

/* ═════════ G19, G6 similar triangles ═════════ */
function aShape(base1, base2, side1, labels) {
  // apex at top; small triangle similar to large one, parallel bases
  const T = [300, 40], k = base2 / base1, H = 250, h = H / k, L = [300 - 180, 40 + H], R = [300 + 180, 40 + H], l = [300 - 180 / k, 40 + h], rr = [300 + 180 / k, 40 + h];
  return { h: 330, polys: [{ pts: [T, L, R] }], segs: [{ a: l, b: rr }], par: [{ a: l, b: rr, n: 1 }, { a: L, b: R, n: 1 }], dims: [{ a: l, b: rr, t: labels[0], off: 16 }, { a: L, b: R, t: labels[1], off: -22 }, { a: T, b: l, t: labels[2], off: 26 }, { a: l, b: L, t: labels[3], off: 26 }].filter(d => d.t), note: NOTE, alt: `Triangle with a line parallel to its base; small base ${labels[0]}, large base ${labels[1]}` };
}
const similarity = {
  id: 'maths.geometry.similarity',
  name: 'Similar triangles',
  levels: [{ label: 'Scale factor and a missing side' }, { label: 'Parallel lines inside a triangle' }, { label: 'Find a part of a side' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 3, 9), k = pick(r, [2, 3, F(3, 2), F(5, 2), 4]), kv = typeof k === 'number' ? k : k.n / k.d, b = int(r, 3, 12);
      if (!Number.isInteger(a * kv * 2)) return this.gen(level, seed + 'k');
      const ans = b * kv;
      return make(this.id, level, seed, { prompt: `Triangles ABC and DEF are similar. AB = ${a} cm and DE = ${dtx(a * kv)} cm. BC = ${b} cm. Work out EF.`, answer: Number.isInteger(ans) ? intAns(ans) : decA(F(Math.round(ans * 2), 2)), steps: [`Scale factor = ${dtx(a * kv)} ÷ ${a} = ${dtx(kv)}`, `EF = ${b} × ${dtx(kv)} = ${dtx(ans)} cm`], traps: [tv(b + a * kv - a, 'Similar shapes are enlargements: multiply by the scale factor, do not add.'), tv(b / kv, 'DEF is the bigger triangle: multiply by the scale factor.')] });
    }
    const s1 = int(r, 3, 8), k = pick(r, [2, 3, F(3, 2), F(5, 2)]), kv = typeof k === 'number' ? k : k.n / k.d, s2 = s1 * kv, e = int(r, 2, 9), E = e * kv;
    if (!Number.isInteger(s2 * 2) || !Number.isInteger(E * 2)) return this.gen(level, seed + 'p');
    if (level === 2) {
      return make(this.id, level, seed, { prompt: `The two horizontal lines are parallel. Work out the length x.`, fig: aShape(s1, s2, e, [`${s1} cm`, 'x', `${e} cm`, `${dtx(E - e)} cm`]), answer: Number.isInteger(s2) ? intAns(s2) : decA(F(s2 * 2, 2)), steps: ['The small triangle and the whole triangle are similar (corresponding angles are equal).', `Scale factor = whole side ÷ small side = ${dtx(E)} ÷ ${e} = ${dtx(kv)}`, `x = ${s1} × ${dtx(kv)} = ${dtx(s2)} cm`], traps: [tv(s1 * (E - e) / e, `Use the whole side (${e} + ${dtx(E - e)}), not just the lower part.`), tv(s1 + E - e, 'Multiply by the scale factor, do not add.')] });
    }
    return make(this.id, level, seed, { prompt: `The two horizontal lines are parallel. Work out the length y.`, fig: aShape(s1, s2, e, [`${s1} cm`, `${dtx(s2)} cm`, `${e} cm`, 'y']), answer: Number.isInteger(E - e) ? intAns(E - e) : decA(F((E - e) * 2, 2)), steps: [`Scale factor = ${dtx(s2)} ÷ ${s1} = ${dtx(kv)}`, `Whole side = ${e} × ${dtx(kv)} = ${dtx(E)} cm`, `y = ${dtx(E)} − ${e} = ${dtx(E - e)} cm`], traps: [tv(E, `That is the whole side. y is only the lower part: subtract ${e}.`)] });
  },
};

/* ═════════ G9, G10 circle theorems (Higher) ═════════ */
const O = [300, 170], RC = 130;
const on = d => [+(O[0] + RC * Math.cos(rad(d))).toFixed(2), +(O[1] - RC * Math.sin(rad(d))).toFixed(2)];
const circ = (extra) => ({ h: 340, circles: [{ c: O, r: RC }], dots: [O], note: NOTE, ...extra });
const lab = (d, t, out = 18) => ({ at: [+(O[0] + (RC + out) * Math.cos(rad(d))).toFixed(1), +(O[1] - (RC + out) * Math.sin(rad(d)) + 5).toFixed(1)], t });
const circAngles = {
  id: 'maths.geometry.circle-angles',
  name: 'Circle theorems: angles',
  levels: higherLevels(['Angle at the centre and in a semicircle', 'Same segment and cyclic quadrilaterals', 'Two steps with reasons']),
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.55) {
        const x = int(r, 25, 80), A = on(-90 - x), B = on(-90 + x), C = on(pick(r, [70, 90, 110])), askCentre = r() < 0.5;
        const fig = circ({ segs: [{ a: O, b: A }, { a: O, b: B }, { a: C, b: A }, { a: C, b: B }], angles: [{ v: O, p: A, q: B, label: askCentre ? 'x' : `${2 * x}°`, r: 26 }, { v: C, p: A, q: B, label: askCentre ? `${x}°` : 'x', r: 34 }], labels: [lab(-90 - x, 'A'), lab(-90 + x, 'B'), { at: [O[0] + 14, O[1] - 6], t: 'O' }], alt: `Circle centre O; angle AOB ${askCentre ? 'x' : 2 * x + '°'} at the centre and angle ACB ${askCentre ? x + '°' : 'x'} at the circumference` });
        return make(this.id, level, seed, { prompt: 'O is the centre of the circle. Work out the size of angle x.', fig, answer: intAns(askCentre ? 2 * x : x), steps: ['The angle at the centre is twice the angle at the circumference.', askCentre ? `x = 2 × ${x} = ${2 * x}°` : `x = ${2 * x} ÷ 2 = ${x}°`], traps: [tv(askCentre ? x / 2 : 2 * x, askCentre ? 'The angle at the centre is the bigger one: double, do not halve.' : 'The angle at the circumference is half the angle at the centre.'), tv(180 - (askCentre ? x : 2 * x), 'These angles are not on a straight line.')] });
      }
      const a = int(r, 20, 70), C = on(2 * a), A = on(180), B = on(0);
      const fig = circ({ segs: [{ a: A, b: B }, { a: A, b: C }, { a: B, b: C }], angles: [{ v: A, p: B, q: C, label: `${a}°`, r: 40 }, { v: B, p: C, q: A, label: 'x', r: 36 }], labels: [lab(180, 'A'), lab(0, 'B'), lab(2 * a, 'C'), { at: [O[0], O[1] + 22], t: 'O' }], alt: `AB is a diameter; C on the circle; angle CAB ${a}°; angle CBA x` });
      return make(this.id, level, seed, { prompt: 'AB is a diameter of the circle, centre O. Work out the size of angle x.', fig, answer: intAns(90 - a), steps: ['The angle in a semicircle is 90°, so angle ACB = 90°.', `x = 180 − 90 − ${a} = ${90 - a}°`], traps: [tv(180 - a, 'Angle ACB is 90° (angle in a semicircle); include it.'), tv(a, 'The triangle is not isosceles.')] });
    }
    if (level === 2) {
      if (r() < 0.5) {
        const y = int(r, 25, 70), A = on(270 - y), B = on(270 + y), c = int(r, 50, 85), d = int(r, 95, 130), C = on(c), D = on(d);
        const fig = circ({ dots: [], segs: [{ a: C, b: A }, { a: C, b: B }, { a: D, b: A }, { a: D, b: B }], angles: [{ v: C, p: A, q: B, label: `${y}°`, r: 34 }, { v: D, p: A, q: B, label: 'x', r: 34 }], labels: [lab(270 - y, 'A'), lab(270 + y, 'B'), lab(c, 'C'), lab(d, 'D')], alt: `Angles ACB = ${y}° and ADB = x subtended by chord AB` });
        return make(this.id, level, seed, { prompt: 'A, B, C and D are points on the circle. Work out the size of angle x.', fig, answer: intAns(y), steps: ['Angles in the same segment are equal (both stand on chord AB).', `x = ${y}°`], traps: [tv(2 * y, 'That is the angle at the centre. Both angles are at the circumference.'), tv(180 - y, 'Opposite angles of a cyclic quadrilateral add to 180°; these are in the same segment, so they are equal.')] });
      }
      const arcs = (() => { for (let k = 0; k < 50; k++) { const a = [2 * int(r, 25, 60), 2 * int(r, 25, 60), 2 * int(r, 25, 60)]; const last = 360 - a[0] - a[1] - a[2]; if (last >= 50 && last <= 130) return [...a, last]; } return [90, 90, 90, 90]; })();
      const st = int(r, 0, 40), P = [st, st + arcs[0], st + arcs[0] + arcs[1], st + arcs[0] + arcs[1] + arcs[2]].map(on);
      const angB = (arcs[2] + arcs[3]) / 2, angD = (arcs[0] + arcs[1]) / 2;
      const fig = circ({ dots: [], polys: [{ pts: P }], angles: [{ v: P[1], p: P[2], q: P[0], label: `${angB}°`, r: 30 }, { v: P[3], p: P[0], q: P[2], label: 'x', r: 30 }], labels: [lab(st, 'A'), lab(st + arcs[0], 'B'), lab(st + arcs[0] + arcs[1], 'C'), lab(st + arcs[0] + arcs[1] + arcs[2], 'D')], alt: `Cyclic quadrilateral ABCD; angle B ${angB}°; angle D x` });
      return make(this.id, level, seed, { prompt: 'ABCD is a cyclic quadrilateral. Work out the size of angle x.', fig, answer: intAns(angD), steps: ['Opposite angles of a cyclic quadrilateral add up to 180°.', `x = 180 − ${angB} = ${angD}°`], traps: [tv(angB, 'Opposite angles of a cyclic quadrilateral add to 180°; they are not equal.'), tv(360 - angB, 'Opposite angles add to 180°, not 360°.')] });
    }
    const x = int(r, 25, 70), A = on(-90 - x), B = on(-90 + x), C = on(90);
    const fig = circ({ segs: [{ a: O, b: A }, { a: O, b: B }, { a: C, b: A }, { a: C, b: B }, { a: A, b: B }], angles: [{ v: C, p: A, q: B, label: `${x}°`, r: 34 }, { v: A, p: B, q: O, label: 'y', r: 30 }], labels: [lab(-90 - x, 'A'), lab(-90 + x, 'B'), lab(90, 'C'), { at: [O[0] + 14, O[1] - 6], t: 'O' }], alt: `Angle ACB ${x}° at the circumference; triangle AOB; angle OAB y` });
    return make(this.id, level, seed, { prompt: 'O is the centre of the circle. Work out the size of angle y.', fig, answer: intAns(90 - x), steps: [`Angle AOB = 2 × ${x} = ${2 * x}° (angle at the centre is twice the angle at the circumference).`, 'OA = OB (radii), so triangle AOB is isosceles.', `y = (180 − ${2 * x}) ÷ 2 = ${90 - x}°`], traps: [tv(180 - 2 * x, 'That is the sum of the two base angles: halve it.'), tv(x, `Find angle AOB first: 2 × ${x}.`)] });
  },
};
const circTangents = {
  id: 'maths.geometry.circle-tangents',
  name: 'Circle theorems: tangents and chords',
  levels: higherLevels(['Tangent and radius', 'Two tangents from a point', 'Alternate segment theorem']),
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 25, 70), T = on(90), P = [T[0] + RC * Math.tan(rad(a)), T[1]];
      const fig = circ({ segs: [{ a: [T[0] - 200, T[1]], b: [T[0] + 260, T[1]] }, { a: O, b: T }, { a: O, b: P }], angles: [{ v: O, p: T, q: P, label: `${a}°`, r: 30 }, { v: P, p: O, q: T, label: 'x', r: 40 }], labels: [lab(90, 'T', 22), { at: [P[0] + 6, P[1] - 10], t: 'P' }, { at: [O[0] - 16, O[1] + 6], t: 'O' }], alt: `Tangent at T; angle TOP ${a}°; angle OPT x` });
      return make(this.id, level, seed, { prompt: 'PT is a tangent to the circle at T, and O is the centre. Work out the size of angle x.', fig, answer: intAns(90 - a), steps: ['A tangent is perpendicular to the radius at the point of contact: angle OTP = 90°.', `x = 180 − 90 − ${a} = ${90 - a}°`], traps: [tv(180 - a, 'Angle OTP is 90°; include it in the triangle.'), tv(a, 'The triangle is not isosceles.')] });
    }
    if (level === 2) {
      const p = 2 * int(r, 15, 50), half = p / 2, d = RC / Math.sin(rad(half)), P = [O[0], O[1] + d];
      const tA = on(-90 - (90 - half)), tB = on(-90 + (90 - half));
      const fig = { ...circ({ segs: [{ a: P, b: tA }, { a: P, b: tB }, { a: tA, b: tB }], angles: [{ v: P, p: tA, q: tB, label: `${p}°`, r: 30 }, { v: tA, p: P, q: tB, label: 'x', r: 30 }], labels: [{ at: [tA[0] - 16, tA[1] + 4], t: 'A' }, { at: [tB[0] + 16, tB[1] + 4], t: 'B' }, { at: [P[0], P[1] + 22], t: 'P' }], alt: `Tangents PA and PB from P; angle APB ${p}°; angle PAB x` }), h: Math.min(560, P[1] + 40) };
      return make(this.id, level, seed, { prompt: 'PA and PB are tangents to the circle. Work out the size of angle x.', fig, answer: intAns((180 - p) / 2), steps: ['Tangents from a point outside a circle are equal: PA = PB.', 'So triangle PAB is isosceles.', `x = (180 − ${p}) ÷ 2 = ${(180 - p) / 2}°`], traps: [tv(180 - p, 'That is the sum of both base angles: halve it.'), tv(90 - p, 'Use the isosceles triangle PAB.')] });
    }
    const t = int(r, 30, 75), A = on(270), B = on(270 + 2 * t), C = on(pick(r, [100, 120, 140]));
    const fig = circ({ dots: [], segs: [{ a: [A[0] - 220, A[1]], b: [A[0] + 220, A[1]] }, { a: A, b: B }, { a: A, b: C }, { a: B, b: C }], angles: [{ v: A, p: [A[0] + 200, A[1]], q: B, label: `${t}°`, r: 40 }, { v: C, p: A, q: B, label: 'x', r: 34 }], labels: [lab(270, 'A', 22), lab(270 + 2 * t, 'B'), lab(C === on(100) ? 100 : 120, ''), { at: [A[0] + 210, A[1] - 8], t: 'tangent' }], alt: `Tangent at A; angle between tangent and chord AB ${t}°; angle ACB x in the alternate segment` });
    return make(this.id, level, seed, { prompt: 'The line is a tangent to the circle at A. Work out the size of angle x.', fig, answer: intAns(t), steps: ['The angle between a tangent and a chord equals the angle in the alternate segment.', `x = ${t}°`], traps: [tv(90 - t, 'Use the alternate segment theorem: x equals the angle between the tangent and the chord.'), tv(2 * t, 'That is the angle at the centre.')] });
  },
};

/* ═════════ G12, G13 solids, plans and elevations ═════════ */
const SOLIDS = { cube: [6, 12, 8], cuboid: [6, 12, 8], 'triangular prism': [5, 9, 6], 'square-based pyramid': [5, 8, 5], tetrahedron: [4, 6, 4], 'pentagonal prism': [7, 15, 10], 'hexagonal prism': [8, 18, 12], cylinder: [3, 2, 0], cone: [2, 1, 1] };
const NETS = [
  ['6 squares', 'Cube'], ['2 triangles and 3 rectangles', 'Triangular prism'], ['1 square and 4 triangles', 'Square-based pyramid'],
  ['4 triangles', 'Tetrahedron'], ['2 circles and 1 rectangle', 'Cylinder'],
];
const solidProps = {
  id: 'maths.geometry.solids',
  name: 'Faces, edges, vertices and nets',
  levels: [{ label: 'Faces, edges and vertices' }, { label: 'Which solid does the net make?' }, { label: 'Faces + vertices − edges = 2' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const s = pick(r, Object.keys(SOLIDS).filter(k => !['cylinder', 'cone'].includes(k))), [f, e, v] = SOLIDS[s], what = pick(r, ['faces', 'edges', 'vertices']);
      const ans = { faces: f, edges: e, vertices: v }[what];
      const traps = what === 'edges' ? [tv(f + v, 'Edges are where two faces meet. For these solids, edges = faces + vertices − 2.')] : what === 'faces' && s.includes('prism') ? [tv(f - 2, 'Include the two end faces.')] : what === 'vertices' ? [tv(e, 'That is the number of edges. Vertices are the corners.')] : [];
      return make(this.id, level, seed, { prompt: `How many ${what} does a ${s} have?`, answer: intAns(ans), steps: [`A ${s} has ${f} faces, ${e} edges and ${v} vertices.`, `Check: ${f} + ${v} − ${e} = 2.`], traps: traps.filter(t => t.v.n !== ans) });
    }
    if (level === 2) { const [net, solid] = pick(r, NETS); const ch = choiceItem(r, solid, shuffled(r, NETS.filter(n => n[1] !== solid).map(n => n[1])).slice(0, 3), o => `A net of a ${o.toLowerCase()} has ${NETS.find(n => n[1] === o)[0]}.`); return make(this.id, level, seed, { prompt: `A net is made of ${net}. Which solid does it fold into?`, ...ch, steps: [`${solid}: ${net}.`] }); }
    const s = pick(r, Object.keys(SOLIDS).filter(k => !['cylinder', 'cone'].includes(k))), [f, e, v] = SOLIDS[s], hide = pick(r, ['edges', 'faces', 'vertices']);
    const given = { faces: f, edges: e, vertices: v }, known = Object.keys(given).filter(k => k !== hide);
    return make(this.id, level, seed, { prompt: `A polyhedron has ${given[known[0]]} ${known[0]} and ${given[known[1]]} ${known[1]}. Use F + V − E = 2 to work out how many ${hide} it has.`, answer: intAns(given[hide]), steps: ['F + V − E = 2 for any polyhedron without holes.', hide === 'edges' ? `E = ${f} + ${v} − 2 = ${e}` : hide === 'faces' ? `F = 2 + ${e} − ${v} = ${f}` : `V = 2 + ${e} − ${f} = ${v}`], traps: [tv(hide === 'edges' ? f + v : hide === 'faces' ? e - v : e - f, 'Remember the 2: F + V − E = 2.')].filter(t => t.v.n !== given[hide]) });
  },
};
const plans = {
  id: 'maths.geometry.plans',
  name: 'Plans and elevations',
  levels: [{ label: 'Squares in the plan' }, { label: 'Front and side elevations' }, { label: 'Volume from the plan' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const cols = int(r, 2, 4), rows = int(r, 2, 3), H = Array.from({ length: rows }, () => Array.from({ length: cols }, () => int(r, 0, 3)));
    if (H[0].every(h => h === 0) || H.some(row => row.every(h => h === 0))) return this.gen(level, seed + 'z');
    const plan = H.flat().filter(h => h > 0).length, front = Array.from({ length: cols }, (_, c) => Math.max(...H.map(row => row[c]))).reduce((a, b) => a + b, 0), side = H.map(row => Math.max(...row)).reduce((a, b) => a + b, 0), total = H.flat().reduce((a, b) => a + b, 0);
    const desc = H.map((row, i) => `${i === 0 ? 'front' : i === rows - 1 ? 'back' : 'middle'} row ${row.join(', ')}`).join('; ');
    const cell = (i, c) => [[200 + c * 52, 20 + (rows - 1 - i) * 52], [248 + c * 52, 20 + (rows - 1 - i) * 52], [248 + c * 52, 68 + (rows - 1 - i) * 52], [200 + c * 52, 68 + (rows - 1 - i) * 52]];
    const fig = { h: 70 + rows * 52, polys: H.flatMap((row, i) => row.map((h, c) => ({ pts: cell(i, c), fill: h ? ['', '#a8d5b533', '#a8d5b566', '#a8d5b599'][h] : 'none', dash: !h }))), labels: H.flatMap((row, i) => row.map((h, c) => ({ at: [224 + c * 52, 50 + (rows - 1 - i) * 52], t: String(h) }))).concat([{ at: [200 + cols * 26, 36 + rows * 52 + 20], t: 'FRONT ↓' }]), alt: `Plan of a stack of centimetre cubes; the number in each square is its height. ${desc}`, data: H };
    const intro = 'The diagram is a plan of a solid made of centimetre cubes. Each number is how many cubes are stacked on that square.';
    if (level === 1) return make(this.id, level, seed, { prompt: `${intro} How many squares does the plan view show?`, fig, answer: intAns(plan), steps: ['The plan is the view from above: one square for every position with at least one cube.', `${plan} squares`], traps: [tv(total, 'That counts every cube. The plan shows each position once.')].filter(t => t.v.n !== plan) });
    if (level === 2) { const what = pick(r, ['front', 'side']), ans = what === 'front' ? front : side; return make(this.id, level, seed, { prompt: `${intro} How many squares does the ${what} elevation show?`, fig, answer: intAns(ans), steps: [what === 'front' ? 'From the front, each column shows its tallest stack.' : 'From the side, each row (front to back) shows its tallest stack.', `${ans} squares`], traps: [tv(total, 'That counts every cube. Hidden cubes do not show in an elevation.'), tv(what === 'front' ? side : front, `That is the ${what === 'front' ? 'side' : 'front'} elevation.`)].filter(t => t.v.n !== ans) }); }
    return make(this.id, level, seed, { prompt: `${intro} Work out the volume of the solid.`, fig, answer: intAns(total), steps: ['Add the heights of all the stacks.', `${H.flat().filter(h => h).join(' + ')} = ${total} cm³`], traps: [tv(plan, 'That is the number of squares in the plan. Add the heights.'), tv(front, 'That is the front elevation. Count every cube.')].filter(t => t.v.n !== total) });
  },
};

/* ═════════ G22, G23, G20 sine rule, cosine rule, area, 3D (Higher) ═════════ */
function triABC(A, B, C, labs, alt) {
  // A at left, B at right; angles in degrees; scale so the triangle fits
  const c = Math.sin(rad(C)), a = Math.sin(rad(A)), b = Math.sin(rad(B)), s = 380 / c;
  const PA = [110, 270], PB = [110 + 380, 270], PC = [110 + b * s * Math.cos(rad(A)), 270 - b * s * Math.sin(rad(A))];
  const sc = Math.min(1, 240 / (270 - PC[1])), PCs = [PC[0], 270 - (270 - PC[1]) * sc];
  const f = { h: 310, polys: [{ pts: [PA, PB, PCs] }], angles: [], dims: [], labels: [{ at: [PA[0] - 14, PA[1] + 18], t: 'A' }, { at: [PB[0] + 14, PB[1] + 18], t: 'B' }, { at: [PCs[0], PCs[1] - 10], t: 'C' }], note: NOTE, alt };
  if (labs.A) f.angles.push({ v: PA, p: PB, q: PCs, label: labs.A, r: 40 });
  if (labs.B) f.angles.push({ v: PB, p: PCs, q: PA, label: labs.B, r: 40 });
  if (labs.C) f.angles.push({ v: PCs, p: PA, q: PB, label: labs.C, r: 34 });
  if (labs.c) f.dims.push({ a: PA, b: PB, t: labs.c, off: -22 });
  if (labs.a) f.dims.push({ a: PB, b: PCs, t: labs.a, off: -24 });
  if (labs.b) f.dims.push({ a: PCs, b: PA, t: labs.b, off: -24 });
  return f;
}
const sineCosine = {
  id: 'maths.geometry.sine-cosine',
  name: 'Sine rule and cosine rule',
  levels: higherLevels(['Sine rule: a side', 'Sine rule: an angle', 'Cosine rule: a side', 'Cosine rule: an angle']),
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level <= 2) {
      const A = int(r, 30, 80), B = int(r, 30, 140 - A), C = 180 - A - B, a = int(r, 6, 20), k = a / Math.sin(rad(A)), b = k * Math.sin(rad(B));
      if (level === 1) return make(this.id, level, seed, { prompt: `In triangle ABC, angle A = ${A}°, angle B = ${B}° and BC = ${a} cm. Work out AC to 1 decimal place.`, fig: triABC(A, B, C, { A: `${A}°`, B: `${B}°`, a: `${a} cm`, b: 'x' }, `Triangle ABC, angle A ${A}°, angle B ${B}°, BC ${a} cm, AC x`), calculator: true, answer: dp1(b), steps: ['Sine rule: {a/sin A} = {b/sin B}', `{x/sin ${B}°} = {${a}/sin ${A}°}`, `x = ${a} × sin ${B}° ÷ sin ${A}° ≈ ${b.toFixed(1)} cm`], traps: [t1(a * Math.sin(rad(A)) / Math.sin(rad(B)), 'The sides and angles are the wrong way round: each side goes with the angle opposite it.'), t1(k * Math.sin(rad(C)), 'That is AB, opposite angle C. AC is opposite angle B.')].filter(t => ok1(t.v.n / t.v.d, b)) });
      const bi = Math.round(b);
      const Bang = deg(Math.asin(bi * Math.sin(rad(A)) / a));
      if (!(bi < a) || !Number.isFinite(Bang)) return this.gen(level, seed + 'q');
      return make(this.id, level, seed, { prompt: `In triangle ABC, angle A = ${A}°, BC = ${a} cm and AC = ${bi} cm. Angle B is acute. Work out angle B to 1 decimal place.`, fig: triABC(A, Bang, 180 - A - Bang, { A: `${A}°`, B: 'θ', a: `${a} cm`, b: `${bi} cm` }, `Triangle ABC, angle A ${A}°, BC ${a} cm, AC ${bi} cm, angle B θ`), calculator: true, answer: dp1(Bang), steps: ['{sin B/b} = {sin A/a}', `sin B = ${bi} × sin ${A}° ÷ ${a} = ${(bi * Math.sin(rad(A)) / a).toFixed(4)}`, `B = sin⁻¹(…) ≈ ${Bang.toFixed(1)}°`], traps: [t1(bi * Math.sin(rad(A)) / a, 'That is sin B. Use sin⁻¹ to find the angle.'), t1(180 - Bang, 'B is acute, so take the angle less than 90°.')].filter(t => ok1(t.v.n / t.v.d, Bang)) });
    }
    if (level === 3) {
      const b = int(r, 4, 15), c = int(r, 4, 15), A = int(r, 30, 140), a = Math.sqrt(b * b + c * c - 2 * b * c * Math.cos(rad(A)));
      const B = deg(Math.asin(b * Math.sin(rad(A)) / a)), Bt = b * b > a * a + c * c ? 180 - B : B;
      return make(this.id, level, seed, { prompt: `In triangle ABC, AB = ${c} cm, AC = ${b} cm and angle A = ${A}°. Work out BC to 1 decimal place.`, fig: triABC(A, Bt, 180 - A - Bt, { A: `${A}°`, c: `${c} cm`, b: `${b} cm`, a: 'x' }, `Triangle ABC, AB ${c} cm, AC ${b} cm, angle A ${A}°, BC x`), calculator: true, answer: dp1(a), steps: ['Cosine rule: a² = b² + c² − 2bc cos A', `x² = ${b}² + ${c}² − 2 × ${b} × ${c} × cos ${A}° = ${(a * a).toFixed(3)}`, `x ≈ ${a.toFixed(1)} cm`], traps: [t1(Math.sqrt(b * b + c * c + 2 * b * c * Math.cos(rad(A))), 'The cosine rule subtracts 2bc cos A.'), t1(a * a, 'That is x². Take the square root.'), t1(Math.hypot(b, c), 'Angle A is not 90°, so Pythagoras alone does not work.')].filter(t => ok1(t.v.n / t.v.d, a)) });
    }
    let a, b, c; for (let k = 0; k < 40; k++) { a = int(r, 4, 15); b = int(r, 4, 15); c = int(r, 4, 15); if (a < b + c && b < a + c && c < a + b && Math.abs(b * b + c * c - a * a) > 4) break; }
    const A = deg(Math.acos((b * b + c * c - a * a) / (2 * b * c))), B = deg(Math.acos((a * a + c * c - b * b) / (2 * a * c)));
    return make(this.id, level, seed, { prompt: `Triangle ABC has sides BC = ${a} cm, AC = ${b} cm and AB = ${c} cm. Work out angle A to 1 decimal place.`, fig: triABC(A, B, 180 - A - B, { A: 'θ', a: `${a} cm`, b: `${b} cm`, c: `${c} cm` }, `Triangle ABC with sides ${a}, ${b} and ${c} cm; angle A θ`), calculator: true, answer: dp1(A), steps: ['cos A = {b² + c² − a²/2bc}', `cos A = {${b * b} + ${c * c} − ${a * a}/${2 * b * c}} = ${((b * b + c * c - a * a) / (2 * b * c)).toFixed(4)}`, `A ≈ ${A.toFixed(1)}°`], traps: [t1(deg(Math.acos((a * a + c * c - b * b) / (2 * a * c))), 'That is angle B. Angle A is opposite side a = BC.'), t1(180 - A, 'Use cos⁻¹ directly: it gives obtuse angles correctly.')].filter(t => ok1(t.v.n / t.v.d, A)) });
  },
};
const area3d = {
  id: 'maths.geometry.area-3d',
  name: 'Area ½ab sin C and 3D problems',
  levels: higherLevels(['Area = ½ab sin C', 'Length in a cuboid', 'Angle in a cuboid']),
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 4, 15), b = int(r, 4, 15), C = int(r, 25, 150), A = 0.5 * a * b * Math.sin(rad(C));
      return make(this.id, level, seed, { prompt: `Triangle PQR has PQ = ${a} cm, PR = ${b} cm and angle QPR = ${C}°. Work out its area to 1 decimal place.`, calculator: true, answer: dp1(A), steps: ['Area = {1/2}ab sin C, where C is the angle between sides a and b', `= 0.5 × ${a} × ${b} × sin ${C}° ≈ ${A.toFixed(1)} cm²`], traps: [t1(a * b * Math.sin(rad(C)), 'You forgot the {1/2}: area = {1/2}ab sin C.'), t1(0.5 * a * b, 'Angle QPR is not 90°: multiply by sin C.'), t1(0.5 * a * b * Math.cos(rad(C)), 'The area formula uses sin C, not cos C.')].filter(t => ok1(t.v.n / t.v.d, A)) });
    }
    const l = int(r, 3, 12), w = int(r, 3, 10), h = int(r, 2, 10), base = Math.hypot(l, w), d = Math.hypot(l, w, h), ang = deg(Math.atan2(h, base));
    const fig = (() => { const s = Math.min(240 / l, 140 / h, 160 / w), L = l * s, H = h * s, D = w * s * 0.55, x0 = 140, y0 = 270, A = [x0, y0], B = [x0 + L, y0], C2 = [x0 + L + D, y0 - D], G = [x0 + L + D, y0 - D - H]; return { h: 300, polys: [{ pts: [A, B, [x0 + L, y0 - H], [x0, y0 - H]] }, { pts: [[x0, y0 - H], [x0 + L, y0 - H], G, [x0 + D, y0 - D - H]], fill: '#a8d5b511' }, { pts: [B, C2, G, [x0 + L, y0 - H]], fill: '#a8d5b511' }], segs: [{ a: A, b: G, colour: 'accent' }, { a: A, b: C2, dash: true }, { a: A, b: [x0 + D, y0 - D], dash: true }, { a: [x0 + D, y0 - D], b: C2, dash: true }, { a: [x0 + D, y0 - D], b: [x0 + D, y0 - D - H], dash: true }], dims: [{ a: A, b: B, t: `${l} cm`, off: -22 }, { a: B, b: C2, t: `${w} cm`, off: -24 }, { a: C2, b: G, t: `${h} cm`, off: -26 }], note: NOTE, alt: `Cuboid ${l} by ${w} by ${h} cm with the space diagonal from A to G` }; })();
    if (level === 2) return make(this.id, level, seed, { prompt: `A cuboid is ${l} cm long, ${w} cm wide and ${h} cm high. Work out the length of the diagonal AG, from a bottom corner to the opposite top corner, to 1 decimal place.`, fig, calculator: true, answer: Number.isInteger(d) ? intAns(d) : dp1(d), steps: [`Diagonal of the base: √(${l}² + ${w}²) = √${l * l + w * w}`, `AG² = ${l * l + w * w} + ${h}² = ${l * l + w * w + h * h}`, `AG ≈ ${d.toFixed(1)} cm`], traps: [t1(base, 'That is the diagonal of the base. Include the height.'), tv(l + w + h, 'Use Pythagoras in 3D: square, add, square root.')].filter(t => ok1(t.v.n / t.v.d, d)) });
    return make(this.id, level, seed, { prompt: `A cuboid is ${l} cm long, ${w} cm wide and ${h} cm high. Work out the angle between the diagonal AG and the base, to 1 decimal place.`, fig, calculator: true, answer: dp1(ang), steps: [`Base diagonal AC = √(${l}² + ${w}²) ≈ ${base.toFixed(3)}`, `tan θ = {${h}/AC}`, `θ ≈ ${ang.toFixed(1)}°`], traps: [t1(90 - ang, 'That is the angle with the vertical edge.'), t1(deg(Math.atan(h / l)), `Use the diagonal of the base, not the ${l} cm edge.`)].filter(t => ok1(t.v.n / t.v.d, ang)) });
  },
};

/* ═════════ G24, G25 vectors ═════════ */
const colAns = (x, y) => ({ kind: 'solutions', vars: ['x', 'y'], labels: ['Top number', 'Bottom number'], sols: [[fr(x), fr(y)]] });
const vec = (a, b) => `{vec ${mn(a)};${mn(b)}}`;
const vectors = {
  id: 'maths.geometry.vectors',
  name: 'Column vectors',
  levels: [{ label: 'Add and subtract' }, { label: 'Multiply by a scalar' }, { label: 'Combinations like 2a − 3b' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), a = [int(r, -6, 6), int(r, -6, 6)], b = [int(r, -6, 6), int(r, -6, 6)];
    if (a.every(v => v === 0) || b.every(v => v === 0)) return this.gen(level, seed + 'z');
    const intro = `a = ${vec(...a)} and b = ${vec(...b)}.`;
    if (level === 1) { const sub = r() < 0.5, res = sub ? [a[0] - b[0], a[1] - b[1]] : [a[0] + b[0], a[1] + b[1]]; return make(this.id, level, seed, { prompt: `${intro} Work out ${sub ? 'a − b' : 'a + b'} as a column vector.`, answer: colAns(...res), steps: [`${sub ? 'Subtract' : 'Add'} the top numbers, then the bottom numbers.`, `= ${vec(...res)}`], soTraps: sub ? [{ sols: [[fr(b[0] - a[0]), fr(b[1] - a[1])]], why: 'That is b − a. Start with a.' }, { sols: [[fr(a[0] + b[0]), fr(a[1] + b[1])]], why: 'Subtract b, do not add it.' }] : [{ sols: [[fr(a[0] - b[0]), fr(a[1] - b[1])]], why: 'Add the vectors, do not subtract.' }] }); }
    if (level === 2) { const k = pick(r, [2, 3, -2, -1, 4]), res = [k * a[0], k * a[1]]; return make(this.id, level, seed, { prompt: `a = ${vec(...a)}. Work out ${mn(k === -1 ? '-' : k)}a as a column vector.`, answer: colAns(...res), steps: [`Multiply both numbers by ${mn(k)}.`, `= ${vec(...res)}`], soTraps: [{ sols: [[fr(k * a[0]), fr(a[1])]], why: 'Multiply the bottom number too.' }, { sols: [[fr(a[0] + k), fr(a[1] + k)]], why: `Multiply by ${mn(k)}, do not add.` }] }); }
    const p = pick(r, [2, 3]), q = pick(r, [1, 2, 3]), res = [p * a[0] - q * b[0], p * a[1] - q * b[1]];
    return make(this.id, level, seed, { prompt: `${intro} Work out ${p}a − ${q === 1 ? '' : q}b as a column vector.`, answer: colAns(...res), steps: [`${p}a = ${vec(p * a[0], p * a[1])}, ${q === 1 ? '' : q}b = ${vec(q * b[0], q * b[1])}`, `${p}a − ${q === 1 ? '' : q}b = ${vec(...res)}`], soTraps: [{ sols: [[fr(p * a[0] + q * b[0]), fr(p * a[1] + q * b[1])]], why: 'Subtract the second vector.' }, { sols: [[fr(p * (a[0] - b[0])), fr(p * (a[1] - b[1]))]], why: `Multiply b by ${q}, not ${p}.` }].filter(t => !(t.sols[0][0].n === res[0] && t.sols[0][1].n === res[1])) });
  },
};
const vectorGeometry = {
  id: 'maths.geometry.vector-geometry',
  name: 'Vectors in geometry',
  levels: [{ label: 'Routes round a shape' }, { label: 'Midpoints and ratios', higher: true }, { label: 'Parallel vectors and proof', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, ['AB', 'BA', 'diag']);
      const fig = { h: 280, polys: [{ pts: [[120, 230], [380, 230], [480, 70], [220, 70]] }], segs: kind === 'diag' ? [{ a: [120, 230], b: [480, 70], dash: true }] : [{ a: [380, 230], b: [220, 70], dash: true }], labels: [{ at: [104, 248], t: 'O' }, { at: [392, 252], t: 'A' }, { at: [494, 66], t: 'C' }, { at: [206, 66], t: 'B' }, { at: [250, 252], t: 'a' }, { at: [152, 150], t: 'b' }], note: NOTE, alt: 'Parallelogram OACB with OA = a and OB = b' };
      if (kind === 'diag') return make(this.id, level, seed, { prompt: 'OACB is a parallelogram. OA = a and OB = b. Write the vector OC in terms of a and b.', fig, answer: algAns('a + b', 'any', ['a', 'b']), steps: ['Go from O to A, then A to C (which equals OB).', 'OC = a + b'], alTraps: [algTrap('a - b', 'Follow the route O → A → C: both steps are forwards.'), algTrap('b - a', 'OC goes forwards along a and along b.')] });
      return make(this.id, level, seed, { prompt: `OACB is a parallelogram. OA = a and OB = b. Write the vector ${kind === 'AB' ? 'AB' : 'BA'} in terms of a and b.`, fig, answer: algAns(kind === 'AB' ? 'b - a' : 'a - b', 'any', ['a', 'b']), steps: [kind === 'AB' ? 'A → O is −a, then O → B is b.' : 'B → O is −b, then O → A is a.', `${kind} = ${kind === 'AB' ? 'b − a' : 'a − b'}`], alTraps: [algTrap(kind === 'AB' ? 'a - b' : 'b - a', 'Check the direction: start at the first letter.'), algTrap('a + b', 'Going backwards along a vector makes it negative.')] });
    }
    if (level === 2) {
      const [m, n] = pick(r, [[1, 1], [1, 2], [2, 1], [1, 3], [3, 1]]), t = `${m} : ${n}`;
      const disp = `a + ${m === 1 ? '' : m}(b - a)/${m + n}`;
      return make(this.id, level, seed, { prompt: `OA = a and OB = b. P is on AB with AP : PB = ${t}. Write OP in terms of a and b.`, answer: algAns(disp, 'any', ['a', 'b']), steps: ['AB = b − a', `AP = {${m}/${m + n}} of AB`, `OP = OA + AP = a + {${m}/${m + n}}(b − a)`, `= {${n}/${m + n}}a + {${m}/${m + n}}b`], alTraps: [algTrap(`${m === 1 ? '' : m}(b - a)/${m + n}`, 'That is AP. Add OA to get from O to P.'), algTrap(`b + ${m === 1 ? '' : m}(a - b)/${m + n}`, `AP : PB = ${t} is measured from A, not from B.`), algTrap(`a + ${m === 1 ? '' : m}(a - b)/${m + n}`, 'AB = b − a: from A to B is back along a, then along b.')] });
    }
    const k = pick(r, [2, 3]), p = int(r, 1, 4), q = int(r, 1, 4), par = r() < 0.5, q2 = par ? q * k : q * k + 1;
    const ch = choiceItem(r, par ? `Yes: it is ${k} times the first vector` : 'No: it is not a multiple of the first vector', [par ? 'No: it is not a multiple of the first vector' : `Yes: it is ${k} times the first vector`, 'Yes: they both contain a and b'], o => (o.includes('both contain') ? 'Parallel vectors are multiples of each other; containing a and b is not enough.' : par ? `${p * k}a + ${q2}b = ${k}(${p}a + ${q}b), a multiple.` : `${k} × ${q} = ${q * k}, not ${q2}, so it is not a multiple.`));
    return make(this.id, level, seed, { prompt: `Is ${p * k}a + ${q2}b parallel to ${p}a + ${q}b?`, ...ch, steps: ['Parallel vectors are scalar multiples of each other.', par ? `${p * k}a + ${q2}b = ${k}(${p}a + ${q}b)` : `${p * k} ÷ ${p} = ${k} but ${q2} ÷ ${q} ≠ ${k}`] });
  },
};

export { triABC, aShape, on as circlePoint };
export const geometrySkills3 = [congruence, similarity, circAngles, circTangents, solidProps, plans, sineCosine, area3d, vectors, vectorGeometry];
