// Edexcel 1MA1 Geometry and measures, batch 1: angle facts and parallel lines (G1, G3, G6), polygons
// and quadrilaterals (G3, G4), area and perimeter of 2D shapes (G14, G16, G17), circles, arcs and
// sectors (G9, G17, G18), volume and surface area (G16, G17). Each item carries a JSON-safe figure
// (item.fig, drawn by geomfig.js) built from the same numbers as the question.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, gcd, num, fracMarkup } from './frac.js?v=20261023-maths-r9';
import { makeA, fixMinus, choiceItem } from './skills-algebra.js?v=20261023-maths-r9';

const fr = v => { const f = typeof v === 'number' ? F(v) : v; return { n: f.n, d: f.d }; };
const intAns = v => ({ kind: 'integer', value: v });
const decA = (f, extra = {}) => ({ kind: 'decimal', value: fr(f), ...extra });
const valA = f => (f.d === 1 ? intAns(f.n) : decA(f));
const tv = (v, why) => ({ v: typeof v === 'number' ? (Number.isInteger(v) ? F(v) : F(Math.round(v * 1000), 1000)) : v, why });
const dtext = f => { const v = typeof f === 'number' ? f : f.n / f.d; return Number.isInteger(v) ? String(v) : String(+v.toFixed(6)); };
const r1 = v => F(Math.round(v * 10), 10); // round to 1 dp, exact
const dp1 = v => decA(r1(v), { dp: 1, tol: 0.06 });
const exPi = k => ({ kind: 'exact', a: { n: 0, d: 1 }, b: fr(k), r: 'pi' });
const exTrap = (k, why) => ({ a: { n: 0, d: 1 }, b: fr(k), r: 'pi', why });
const NOTE = 'Not drawn accurately';
const make = (skill, level, seed, o) => { const it = makeA(skill, level, seed, o); if (o.exTraps) it.exTraps = o.exTraps.filter(t => !(t.b.n * o.answer.b.d === o.answer.b.n * t.b.d)).map(t => ({ ...t, why: fixMinus(t.why) })); return it; };
const deg = d => `${d}°`;
const rad = d => (d * Math.PI) / 180;
const at = (c, r, d) => [+(c[0] + r * Math.cos(rad(d))).toFixed(1), +(c[1] - r * Math.sin(rad(d))).toFixed(1)];

/* ───────── figure builders ───────── */
/** Rays from O at the given directions (degrees); angle labels between consecutive rays. */
function raysFig(dirs, labels, full) {
  const O = [300, full ? 170 : 220], R = 170, segs = [], angles = [];
  if (!full) segs.push({ a: [60, O[1]], b: [540, O[1]] });
  for (const d of dirs) segs.push({ a: O, b: at(O, full ? 140 : R, d) });
  const all = full ? dirs : [0, ...dirs, 180];
  for (let i = 0; i < labels.length; i++) { const d1 = all[i], d2 = full ? (i + 1 < all.length ? all[i + 1] : all[0] + 360) : all[i + 1]; angles.push({ v: O, p: at(O, 100, d1), q: at(O, 100, d2), label: labels[i], r: 34 + (i % 2) * 8 }); }
  return { h: full ? 340 : 260, segs, angles, dots: [O], note: NOTE, alt: `${full ? 'Angles around a point' : 'Angles on a straight line'}: ${labels.join(', ')}` };
}
/** Triangle with base AB and base angles a, b (degrees); marks and labels per vertex. */
function triFig(a, b, labels, extra = {}) {
  const A = [110, 290], B = [490, 290], AB = 380, AC = (AB * Math.sin(rad(b))) / Math.sin(rad(a + b));
  let C = [A[0] + AC * Math.cos(rad(a)), A[1] - AC * Math.sin(rad(a))];
  const scale = Math.min(1, 250 / (A[1] - C[1] || 1)); C = [A[0] + (C[0] - A[0]) * 1, A[1] - (A[1] - C[1]) * scale];
  const f = { h: 330, polys: [{ pts: [A, B, C] }], angles: [], ticks: [], segs: [], note: NOTE, alt: `Triangle with angles ${labels.filter(Boolean).join(', ')}` };
  if (labels[0]) f.angles.push({ v: A, p: B, q: C, label: labels[0] });
  if (labels[1]) f.angles.push({ v: B, p: C, q: A, label: labels[1] });
  if (labels[2]) f.angles.push({ v: C, p: A, q: B, label: labels[2] });
  if (extra.iso) f.ticks.push({ a: A, b: C, n: 1 }, { a: B, b: C, n: 1 });
  if (extra.exterior) { const D = [570, 290]; f.segs.push({ a: B, b: D }); f.angles = f.angles.filter(x => x.v !== B); f.angles.push({ v: B, p: D, q: C, label: extra.exterior }); f.alt += `; exterior angle ${extra.exterior}`; }
  return f;
}
/** Two parallel lines cut by a transversal at angle t; marks: [{at:'P'|'Q', quad:'tl'|'tr'|'bl'|'br', label}] */
function parallelFig(t, marks) {
  const P = [300 + 120 / Math.tan(rad(t)) / 2, 110], Q = [300 - 120 / Math.tan(rad(t)) / 2, 230], u = [Math.cos(rad(t)), -Math.sin(rad(t))];
  const L = 150, segs = [{ a: [40, 110], b: [560, 110] }, { a: [40, 230], b: [560, 230] }, { a: [P[0] + u[0] * L * 0.9, P[1] + u[1] * L * 0.9], b: [Q[0] - u[0] * L * 0.9, Q[1] - u[1] * L * 0.9] }];
  const ray = (V, quad) => { const E = [V[0] + 80, V[1]], Wp = [V[0] - 80, V[1]], Up = [V[0] + u[0] * 80, V[1] + u[1] * 80], Dn = [V[0] - u[0] * 80, V[1] - u[1] * 80]; return { tr: [E, Up], tl: [Up, Wp], bl: [Wp, Dn], br: [Dn, E] }[quad]; };
  const angles = marks.map(m => { const V = m.at === 'P' ? P : Q, [p, q] = ray(V, m.quad); return { v: V, p, q, label: m.label, r: 28 }; });
  return { h: 340, segs, angles, par: [{ a: [420, 110], b: [520, 110], n: 1 }, { a: [420, 230], b: [520, 230], n: 1 }], note: NOTE, alt: `Two parallel lines crossed by a transversal; marked angles ${marks.map(m => m.label).join(' and ')}` };
}
function polygonFig(n, labels) {
  const O = [300, 170], R = 140, pts = Array.from({ length: n }, (_, i) => at(O, R, 90 + (360 * i) / n));
  const angles = labels.map((l, i) => (l ? { v: pts[i], p: pts[(i + 1) % n], q: pts[(i + n - 1) % n], label: l, r: 26 } : null)).filter(Boolean);
  return { h: 340, polys: [{ pts }], angles, note: NOTE, alt: `Polygon with ${n} sides; angles ${labels.filter(Boolean).join(', ')}` };
}
const rectFig = (w, h, lw, lh, alt) => { const s = Math.min(400 / w, 220 / h), W = w * s, H = h * s, x0 = (600 - W) / 2, y0 = 40; return { h: H + 90, polys: [{ pts: [[x0, y0], [x0 + W, y0], [x0 + W, y0 + H], [x0, y0 + H]] }], dims: [{ a: [x0, y0 + H], b: [x0 + W, y0 + H], t: lw, off: -22 }, { a: [x0 + W, y0 + H], b: [x0 + W, y0], t: lh, off: -30 }], note: NOTE, alt }; };

/* ═════════ G3, G6 angle facts ═════════ */
const angleFacts = {
  id: 'maths.geometry.angle-facts',
  name: 'Angle facts',
  levels: [{ label: 'Straight lines and points' }, { label: 'Triangles' }, { label: 'Isosceles and exterior angles' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.5) {
        const a = int(r, 20, 80), b = int(r, 20, 160 - a), x = 180 - a - b, order = shuffled(r, [0, 1, 2]), vals = [a, b, x], labs = order.map(i => (i === 2 ? 'x' : deg(vals[i])));
        let c = 0; const dirs = order.slice(0, 2).map(i => (c += vals[i]));
        return make(this.id, level, seed, { prompt: 'The diagram shows angles on a straight line. Work out the size of angle x.', fig: raysFig(dirs, labs, false), answer: intAns(x), steps: ['Angles on a straight line add up to 180°.', `x = 180 − ${a} − ${b} = ${x}°`], traps: [tv(360 - a - b, 'Angles on a straight line add up to 180°, not 360°.')] });
      }
      const vals = [int(r, 40, 120), int(r, 40, 110), int(r, 40, 100)], x = 360 - vals.reduce((s, v) => s + v, 0);
      if (x < 30) return this.gen(level, seed + 'p');
      const all = shuffled(r, [...vals, x]), ix = all.indexOf(x), labs = all.map((v, i) => (i === ix ? 'x' : deg(v)));
      let c = 0; const dirs = [0, ...all.slice(0, 3).map(v => (c += v))];
      return make(this.id, level, seed, { prompt: 'The diagram shows angles around a point. Work out the size of angle x.', fig: raysFig(dirs, labs, true), answer: intAns(x), steps: ['Angles around a point add up to 360°.', `x = 360 − ${vals.join(' − ')} = ${x}°`], traps: [tv(180 - vals.reduce((s, v) => s + v, 0) + 360 > 0 ? 180 - (vals[0] + vals[1]) : 1, 'Angles around a point add up to 360°, not 180°.')] });
    }
    if (level === 2) {
      const a = int(r, 30, 90), b = int(r, 30, 140 - a), c = 180 - a - b, which = int(r, 0, 2), vals = [a, b, c], labs = vals.map((v, i) => (i === which ? 'x' : deg(v)));
      return make(this.id, level, seed, { prompt: 'Work out the size of angle x in the triangle.', fig: triFig(a, b, labs), answer: intAns(vals[which]), steps: ['Angles in a triangle add up to 180°.', `x = 180 − ${vals.filter((_, i) => i !== which).join(' − ')} = ${vals[which]}°`], traps: [tv(360 - (180 - vals[which]), 'Angles in a triangle add up to 180°, not 360°.')] });
    }
    if (r() < 0.5) {
      const base = int(r, 25, 80), apex = 180 - 2 * base, askApex = r() < 0.5;
      return make(this.id, level, seed, { prompt: `The triangle is isosceles (the marked sides are equal). ${askApex ? 'Work out the size of angle x.' : 'Work out the size of angle y.'}`, fig: triFig(base, base, askApex ? [deg(base), '', 'x'] : ['y', '', deg(apex)], { iso: true }), answer: intAns(askApex ? apex : base), steps: askApex ? ['The base angles of an isosceles triangle are equal: both ' + base + '°.', `x = 180 − 2 × ${base} = ${apex}°`] : ['The two base angles are equal.', `2y = 180 − ${apex} = ${2 * base}, so y = ${base}°`], traps: askApex ? [tv(180 - base, 'Both base angles are ' + base + '°: subtract both from 180.')] : [tv(180 - apex, 'The two base angles share what is left: divide by 2.'), tv(apex, 'The base angles are the two equal ones next to the base, not the angle at the top.')] });
    }
    const a = int(r, 30, 80), c = int(r, 30, 140 - a), ext = a + c, b = 180 - ext;
    return make(this.id, level, seed, { prompt: 'Work out the size of the exterior angle x.', fig: triFig(a, b, [deg(a), '', deg(c)], { exterior: 'x' }), answer: intAns(ext), steps: ['The exterior angle equals the sum of the two opposite interior angles.', `x = ${a} + ${c} = ${ext}° (or: the third angle is ${b}°, and x = 180 − ${b})`], traps: [tv(b, `${b}° is the interior angle next to x; x is on the straight line with it.`)] });
  },
};

/* ═════════ G1, G3 parallel lines ═════════ */
const REL = { corresponding: 'Corresponding angles', alternate: 'Alternate angles', cointerior: 'Co-interior angles', vertical: 'Vertically opposite angles' };
const PAIRS = [
  { k: 'corresponding', a: ['P', 'tr'], b: ['Q', 'tr'] }, { k: 'corresponding', a: ['P', 'bl'], b: ['Q', 'bl'] }, { k: 'corresponding', a: ['P', 'br'], b: ['Q', 'br'] },
  { k: 'alternate', a: ['P', 'bl'], b: ['Q', 'tr'] }, { k: 'alternate', a: ['P', 'br'], b: ['Q', 'tl'] },
  { k: 'cointerior', a: ['P', 'bl'], b: ['Q', 'tl'] }, { k: 'cointerior', a: ['P', 'br'], b: ['Q', 'tr'] },
  { k: 'vertical', a: ['P', 'tl'], b: ['P', 'br'] }, { k: 'vertical', a: ['Q', 'tr'], b: ['Q', 'bl'] },
];
const quadAngle = (t, quad) => (quad === 'tr' || quad === 'bl' ? t : 180 - t);
const parallel = {
  id: 'maths.geometry.parallel',
  name: 'Angles and parallel lines',
  levels: [{ label: 'Name the angle pair' }, { label: 'Find an angle and give the reason' }, { label: 'Two steps' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), t = int(r, 35, 75) + (r() < 0.5 ? 0 : 50), pr = pick(r, PAIRS);
    const marks = [{ at: pr.a[0], quad: pr.a[1], label: level === 1 ? 'a' : deg(quadAngle(t, pr.a[1])) }, { at: pr.b[0], quad: pr.b[1], label: level === 1 ? 'b' : 'x' }];
    if (level === 1) {
      const ch = choiceItem(r, REL[pr.k], Object.values(REL).filter(v => v !== REL[pr.k]), o => ({ 'Corresponding angles': 'Corresponding angles are in matching positions at each line (an F shape).', 'Alternate angles': 'Alternate angles are between the parallel lines on opposite sides of the transversal (a Z shape).', 'Co-interior angles': 'Co-interior angles are between the parallel lines on the same side (a C shape) and add up to 180°.', 'Vertically opposite angles': 'Vertically opposite angles are opposite each other at one crossing point.' })[o]);
      return make(this.id, level, seed, { prompt: 'The two lines with arrows are parallel. What type of angle pair are a and b?', fig: parallelFig(t, marks), ...ch, steps: [`a and b are ${REL[pr.k].toLowerCase()}.`, pr.k === 'cointerior' ? 'Co-interior angles add up to 180°.' : 'They are equal.'] });
    }
    const known = quadAngle(t, pr.a[1]), x = quadAngle(t, pr.b[1]);
    if (level === 2) return make(this.id, level, seed, { prompt: 'The two lines with arrows are parallel. Work out the size of angle x.', fig: parallelFig(t, marks), answer: intAns(x), steps: [`${REL[pr.k]}${pr.k === 'cointerior' ? ' add up to 180°' : ' are equal'}.`, `x = ${pr.k === 'cointerior' ? `180 − ${known} = ` : ''}${x}°`], traps: [tv(180 - known === x ? known : 180 - known, pr.k === 'cointerior' ? 'Co-interior angles add up to 180°; they are not equal.' : `${REL[pr.k]} are equal; they do not add up to 180°.`)] });
    // two steps: known angle at P quadrant, x at Q in a non-paired position (needs straight line + relation)
    const quads = ['tl', 'tr', 'bl', 'br'], qa = pick(r, quads), qb = pick(r, quads.filter(q => !(PAIRS.some(p => p.a[0] === 'P' && p.a[1] === qa && p.b[0] === 'Q' && p.b[1] === q)))), k2 = quadAngle(t, qa), xv = quadAngle(t, qb);
    return make(this.id, level, seed, { prompt: 'The two lines with arrows are parallel. Work out the size of angle x.', fig: parallelFig(t, [{ at: 'P', quad: qa, label: deg(k2) }, { at: 'Q', quad: qb, label: 'x' }]), answer: intAns(xv), steps: [`Angles on a straight line add to 180°: the angle next to ${k2}° is ${180 - k2}°.`, 'Use corresponding, alternate or vertically opposite angles to move it to x.', `x = ${xv}°`], traps: [tv(xv === k2 ? 180 - k2 : k2, xv === k2 ? 'x is equal to the given angle here; check the positions.' : 'x is not in a matching position: use a straight line (180°) first.')] });
  },
};

/* ═════════ G3, G4 polygons and quadrilaterals ═════════ */
const PNAME = { 3: 'triangle', 4: 'quadrilateral', 5: 'pentagon', 6: 'hexagon', 7: 'heptagon', 8: 'octagon', 9: 'nonagon', 10: 'decagon', 12: 'dodecagon' };
const polygonAngles = {
  id: 'maths.geometry.polygon-angles',
  name: 'Angles in polygons',
  levels: [{ label: 'Sum of interior angles' }, { label: 'Regular polygons' }, { label: 'A missing angle' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const n = pick(r, [5, 6, 7, 8, 9, 10, 12]), s = (n - 2) * 180;
      return make(this.id, level, seed, { prompt: `Work out the sum of the interior angles of ${/^[aeiou]/.test(PNAME[n]) ? 'an' : 'a'} ${PNAME[n]} (${n} sides).`, answer: intAns(s), steps: [`A ${n}-sided polygon splits into ${n - 2} triangles from one vertex.`, `(${n} − 2) × 180 = ${s}°`], traps: [tv(n * 180, `It splits into ${n - 2} triangles, not ${n}.`), tv(360, '360° is the sum of the exterior angles.')] });
    }
    if (level === 2) {
      const n = pick(r, [5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 36]), ext = 360 / n, int_ = 180 - ext, kind = pick(r, ['ext', 'int', 'n']);
      if (kind === 'ext') return make(this.id, level, seed, { prompt: `Work out the size of each exterior angle of a regular polygon with ${n} sides.`, answer: intAns(ext), steps: ['The exterior angles of any polygon add up to 360°.', `360 ÷ ${n} = ${ext}°`], traps: [tv(int_, 'That is the interior angle; the exterior angle is 180° minus it.'), tv((n - 2) * 180 / n === int_ ? 180 / n : 1, 'The exterior angles add up to 360°, not 180°.')] });
      if (kind === 'int') return make(this.id, level, seed, { prompt: `Work out the size of each interior angle of a regular polygon with ${n} sides.`, answer: intAns(int_), steps: [`Exterior angle = 360 ÷ ${n} = ${ext}°`, `Interior angle = 180 − ${ext} = ${int_}°`], traps: [tv(ext, 'That is the exterior angle: subtract it from 180°.')] });
      return make(this.id, level, seed, { prompt: `Each interior angle of a regular polygon is ${int_}°. How many sides does it have?`, answer: intAns(n), steps: [`Exterior angle = 180 − ${int_} = ${ext}°`, `Number of sides = 360 ÷ ${ext} = ${n}`], traps: [tv(F(360, int_), 'Divide 360 by the exterior angle, not the interior angle.')] });
    }
    const n = pick(r, [5, 6]), s = (n - 2) * 180, vals = []; let left = s;
    for (let i = 0; i < n - 1; i++) { const v = int(r, 95, 150); vals.push(v); left -= v; }
    if (left < 60 || left > 175) return this.gen(level, seed + 'm');
    const labs = [...vals.map(deg), 'x'], order = shuffled(r, labs.map((_, i) => i)), shown = order.map(i => labs[i]);
    return make(this.id, level, seed, { prompt: `The diagram shows ${/^[aeiou]/.test(PNAME[n]) ? 'an' : 'a'} ${PNAME[n]}. Work out the size of angle x.`, fig: polygonFig(n, shown), answer: intAns(left), steps: [`Interior angles of a ${PNAME[n]} add up to (${n} − 2) × 180 = ${s}°.`, `x = ${s} − (${vals.join(' + ')}) = ${left}°`], traps: [tv(360 - vals.reduce((a, b) => a + b, 0) > 0 ? 360 - vals.reduce((a, b) => a + b, 0) : 1, `The angles of a ${PNAME[n]} add up to ${s}°, not 360°.`), tv((n - 1) * 180 - vals.reduce((a, b) => a + b, 0), `A ${PNAME[n]} splits into ${n - 2} triangles.`)] });
  },
};

// Property table for the six named quadrilaterals (a "trapezium" here is a general one, not isosceles).
// sides4: four equal sides · right4: four right angles · par2: two pairs of parallel sides · par1: exactly
// one pair · par0: no parallel sides · perp: diagonals cross at right angles · eqd: diagonals equal ·
// lines / rot: lines of symmetry and order of rotational symmetry.
const Q = {
  Square: { sides4: 1, right4: 1, par2: 1, par1: 0, par0: 0, perp: 1, eqd: 1, lines: 4, rot: 4 },
  Rectangle: { sides4: 0, right4: 1, par2: 1, par1: 0, par0: 0, perp: 0, eqd: 1, lines: 2, rot: 2 },
  Rhombus: { sides4: 1, right4: 0, par2: 1, par1: 0, par0: 0, perp: 1, eqd: 0, lines: 2, rot: 2 },
  Parallelogram: { sides4: 0, right4: 0, par2: 1, par1: 0, par0: 0, perp: 0, eqd: 0, lines: 0, rot: 2 },
  Trapezium: { sides4: 0, right4: 0, par2: 0, par1: 1, par0: 0, perp: 0, eqd: 0, lines: 0, rot: 1 },
  Kite: { sides4: 0, right4: 0, par2: 0, par1: 0, par0: 1, perp: 1, eqd: 0, lines: 1, rot: 1 },
};
const QWORD = { sides4: 'four equal sides', right4: 'four right angles', par1: 'exactly one pair of parallel sides', perp: 'diagonals that cross at right angles', eqd: 'diagonals that are equal in length' };
const QNOT = { sides4: 'its sides are not all equal', right4: 'its angles are not all right angles', par1: 'it does not have exactly one pair of parallel sides', perp: 'its diagonals do not cross at right angles', eqd: 'its diagonals are not equal in length' };
// Two-property descriptions, each true of exactly one shape in the table (checked in the tests).
const QDESC = [
  { q: 'Rhombus', text: 'four equal sides but no right angles', test: p => p.sides4 && !p.right4 },
  { q: 'Rectangle', text: 'four right angles but sides that are not all equal', test: p => p.right4 && !p.sides4 },
  { q: 'Parallelogram', text: 'two pairs of parallel sides, no right angles and sides that are not all equal', test: p => p.par2 && !p.right4 && !p.sides4 },
  { q: 'Kite', text: 'diagonals that cross at right angles but no parallel sides', test: p => p.perp && p.par0 },
  { q: 'Square', text: 'diagonals that are equal and cross at right angles', test: p => p.eqd && p.perp },
  { q: 'Trapezium', text: 'exactly one pair of parallel sides', test: p => p.par1 },
];
const QNAMES = Object.keys(Q);
const quadProps = {
  id: 'maths.geometry.quad-props',
  name: 'Properties of quadrilaterals',
  levels: [{ label: 'Which shape always has this property?' }, { label: 'Two properties and symmetry' }, { label: 'Angles in quadrilaterals' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const key = pick(r, Object.keys(QWORD)), yes = QNAMES.filter(n => Q[n][key]), no = QNAMES.filter(n => !Q[n][key]), q = pick(r, yes);
      const ch = choiceItem(r, q, shuffled(r, no).slice(0, 3), o => `A ${o.toLowerCase()} does not always have ${QWORD[key]}: ${QNOT[key]}.`);
      return make(this.id, level, seed, { prompt: `Which one of these quadrilaterals always has ${QWORD[key]}?`, ...ch, steps: [`A ${q.toLowerCase()} has ${QWORD[key]}.`, ...(yes.length > 1 ? [`(So does a ${yes.filter(n => n !== q).map(n => n.toLowerCase()).join(' and a ')}, but ${yes.length > 2 ? 'they are' : 'it is'} not one of the options.)`] : [])] });
    }
    if (level === 2) {
      if (r() < 0.55) {
        const d = pick(r, QDESC), others = QNAMES.filter(n => n !== d.q);
        const why = o => { const p = Q[o]; if (d.q === 'Rhombus') return o === 'Square' ? 'A square has four equal sides but also four right angles.' : `A ${o.toLowerCase()} does not have four equal sides.`; if (d.q === 'Rectangle') return o === 'Square' ? 'A square has four right angles, but its sides are all equal.' : `A ${o.toLowerCase()} does not have four right angles.`; if (d.q === 'Parallelogram') return !p.par2 ? `A ${o.toLowerCase()} does not have two pairs of parallel sides.` : p.right4 ? `A ${o.toLowerCase()} has right angles.` : `A ${o.toLowerCase()} has four equal sides.`; if (d.q === 'Kite') return p.perp ? `A ${o.toLowerCase()} has parallel sides.` : `The diagonals of a ${o.toLowerCase()} do not cross at right angles.`; if (d.q === 'Square') return p.perp ? `The diagonals of a ${o.toLowerCase()} are not equal.` : `The diagonals of a ${o.toLowerCase()} do not cross at right angles.`; return p.par2 ? `A ${o.toLowerCase()} has two pairs of parallel sides.` : 'A kite has no parallel sides.'; };
        const ch = choiceItem(r, d.q, shuffled(r, others).slice(0, 3), why);
        return make(this.id, level, seed, { prompt: `Which quadrilateral has ${d.text}?`, ...ch, steps: [`A ${d.q.toLowerCase()} has ${d.text}.`] });
      }
      const q = pick(r, ['Square', 'Rectangle', 'Rhombus', 'Parallelogram', 'Kite']), kind = pick(r, ['lines', 'rot']), v = Q[q][kind];
      const wrong = kind === 'lines' ? [tv(Q[q].rot === v ? v + 2 : Q[q].rot, 'That is the order of rotational symmetry. Lines of symmetry are mirror lines.'), ...(q === 'Rectangle' || q === 'Rhombus' ? [tv(4, `The diagonals of a ${q.toLowerCase()} are not mirror lines; fold it along one and the halves do not match.`)] : []), ...(q === 'Parallelogram' ? [tv(2, 'A parallelogram has no lines of symmetry: the diagonals are not mirror lines.')] : [])]
        : [tv(Q[q].lines === v ? v + 1 : Q[q].lines, 'That is the number of lines of symmetry. Rotational order counts how many times it fits onto itself in one full turn.')];
      return make(this.id, level, seed, { prompt: kind === 'lines' ? `How many lines of symmetry does a ${q.toLowerCase()} have?` : `What is the order of rotational symmetry of a ${q.toLowerCase()}?`, answer: intAns(v), steps: [kind === 'lines' ? `A ${q.toLowerCase()} has ${v} line${v === 1 ? '' : 's'} of symmetry.` : `A ${q.toLowerCase()} fits onto itself ${v} time${v === 1 ? '' : 's'} in a full turn: order ${v}.`], traps: wrong.filter(t => t.v.n !== v) });
    }
    if (r() < 0.5) {
      const a = int(r, 50, 130), b = 180 - a, ask = pick(r, ['opp', 'adj']);
      return make(this.id, level, seed, { prompt: `In a parallelogram one angle is ${a}°. Work out the size of ${ask === 'opp' ? 'the opposite angle' : 'a neighbouring (adjacent) angle'}.`, answer: intAns(ask === 'opp' ? a : b), steps: [ask === 'opp' ? 'Opposite angles of a parallelogram are equal.' : 'Neighbouring angles of a parallelogram are co-interior, so they add up to 180°.', `= ${ask === 'opp' ? a : b}°`], traps: [tv(ask === 'opp' ? b : a, ask === 'opp' ? 'Opposite angles are equal.' : 'Adjacent angles add up to 180°; they are only equal in a rectangle.'), tv(360 - a, 'Angles in a quadrilateral add up to 360°, but you need a property of the parallelogram here.')] });
    }
    const a = int(r, 60, 130), b = int(r, 40, 110), x = (360 - a - b) / 2;
    if (!Number.isInteger(x) || x < 30) return this.gen(level, seed + 'k');
    return make(this.id, level, seed, { prompt: `A kite has angles of ${a}° and ${b}° at the two corners where its equal sides meet. The other two angles are equal. Work out one of them.`, answer: intAns(x), steps: ['Angles in a quadrilateral add up to 360°.', `The two equal angles share 360 − ${a} − ${b} = ${360 - a - b}°`, `Each is ${x}°`], traps: [tv(360 - a - b, 'Share what is left between the two equal angles.'), tv(180 - a - b > 0 ? 180 - a - b : 1, 'Angles in a quadrilateral add up to 360°, not 180°.')] });
  },
};

/* ═════════ G16, G17 area and perimeter ═════════ */
const areaShapes = {
  id: 'maths.geometry.area-shapes',
  name: 'Area of rectangles, triangles, parallelograms and trapezia',
  levels: [{ label: 'Rectangles, triangles and parallelograms' }, { label: 'Trapezia' }, { label: 'Work backwards from an area' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, ['tri', 'para', 'tri', 'para']), b = int(r, 4, 16), h = int(r, 3, 12), slant = Math.round(Math.hypot(h, int(r, 2, 5)) * 10) / 10 + 0;
      const A = kind === 'tri' ? F(b * h, 2) : F(b * h);
      const s = Math.min(380 / (b + 4), 220 / h), x0 = 110, y0 = 60 + h * s, off = 2.5 * s;
      const fig = kind === 'tri' ? { h: y0 + 50, polys: [{ pts: [[x0, y0], [x0 + b * s, y0], [x0 + off, y0 - h * s]] }], segs: [{ a: [x0 + off, y0 - h * s], b: [x0 + off, y0], dash: true }], angles: [{ v: [x0 + off, y0], p: [x0 + b * s, y0], q: [x0 + off, y0 - h * s], right: true }], dims: [{ a: [x0, y0], b: [x0 + b * s, y0], t: `${b} cm`, off: -22 }, { a: [x0 + off, y0], b: [x0 + off, y0 - h * s], t: `${h} cm`, off: -26 }, { a: [x0 + b * s, y0], b: [x0 + off, y0 - h * s], t: `${slant} cm`, off: -20 }], note: NOTE, alt: `Triangle with base ${b} cm, perpendicular height ${h} cm and sloping side ${slant} cm` }
        : { h: y0 + 50, polys: [{ pts: [[x0, y0], [x0 + b * s, y0], [x0 + b * s + off, y0 - h * s], [x0 + off, y0 - h * s]] }], segs: [{ a: [x0 + off, y0 - h * s], b: [x0 + off, y0], dash: true }], angles: [{ v: [x0 + off, y0], p: [x0 + b * s, y0], q: [x0 + off, y0 - h * s], right: true }], dims: [{ a: [x0, y0], b: [x0 + b * s, y0], t: `${b} cm`, off: -22 }, { a: [x0 + off, y0], b: [x0 + off, y0 - h * s], t: `${h} cm`, off: -28 }, { a: [x0, y0], b: [x0 + off, y0 - h * s], t: `${slant} cm`, off: 34 }], note: NOTE, alt: `Parallelogram with base ${b} cm, perpendicular height ${h} cm and sloping side ${slant} cm` };
      return make(this.id, level, seed, { prompt: `Work out the area of the ${kind === 'tri' ? 'triangle' : 'parallelogram'}.`, fig, answer: valA(A), steps: [kind === 'tri' ? 'Area of a triangle = {1/2} × base × perpendicular height' : 'Area of a parallelogram = base × perpendicular height', `= ${kind === 'tri' ? '{1/2} × ' : ''}${b} × ${h} = ${dtext(A)} cm²`], traps: [tv(kind === 'tri' ? b * h : F(b * h, 2), kind === 'tri' ? 'A triangle is half of a rectangle: multiply by {1/2}.' : 'A parallelogram is not half of anything: base × height.'), tv(kind === 'tri' ? (b * slant) / 2 : b * slant, 'Use the perpendicular height (the dashed line), not the sloping side.')] });
    }
    if (level === 2) {
      const a = int(r, 3, 12), b = a + int(r, 2, 8), h = int(r, 2, 10), A = F((a + b) * h, 2), s = Math.min(380 / b, 200 / h), x0 = (600 - b * s) / 2, y0 = 50 + h * s, ins = ((b - a) * s) / 2;
      const fig = { h: y0 + 50, polys: [{ pts: [[x0, y0], [x0 + b * s, y0], [x0 + b * s - ins, y0 - h * s], [x0 + ins, y0 - h * s]] }], segs: [{ a: [x0 + ins, y0 - h * s], b: [x0 + ins, y0], dash: true }], par: [{ a: [x0 + ins, y0 - h * s], b: [x0 + b * s - ins, y0 - h * s], n: 1 }, { a: [x0, y0], b: [x0 + b * s, y0], n: 1 }], dims: [{ a: [x0 + ins, y0 - h * s], b: [x0 + b * s - ins, y0 - h * s], t: `${a} cm`, off: 18 }, { a: [x0, y0], b: [x0 + b * s, y0], t: `${b} cm`, off: -22 }, { a: [x0 + ins, y0], b: [x0 + ins, y0 - h * s], t: `${h} cm`, off: -28 }], note: NOTE, alt: `Trapezium with parallel sides ${a} cm and ${b} cm, height ${h} cm` };
      return make(this.id, level, seed, { prompt: 'Work out the area of the trapezium.', fig, answer: valA(A), steps: ['Area = {1/2}(a + b)h', `= {1/2} × (${a} + ${b}) × ${h} = ${dtext(A)} cm²`], traps: [tv((a + b) * h, 'Halve it: the trapezium is half of a parallelogram with base a + b.'), tv(a * b * h / 2, 'Add the parallel sides, do not multiply them.')] });
    }
    const kind = pick(r, ['tri', 'rect', 'trap']);
    if (kind === 'tri') { const b = int(r, 4, 20), h = int(r, 2, 15), A = F(b * h, 2); return make(this.id, level, seed, { prompt: `A triangle has an area of ${dtext(A)} cm² and a base of ${b} cm. Work out its perpendicular height.`, answer: intAns(h), steps: [`{1/2} × ${b} × h = ${dtext(A)}`, `${b / 2}h = ${dtext(A)}, so h = ${h} cm`], traps: [tv(F(b * h, 2 * b), 'Remember the {1/2}: double the area before dividing by the base.')] }); }
    if (kind === 'rect') { const w = int(r, 3, 15), l = int(r, 3, 20), A = w * l; return make(this.id, level, seed, { prompt: `A rectangle has an area of ${A} cm² and a width of ${w} cm. Work out its perimeter.`, answer: intAns(2 * (w + l)), steps: [`Length = ${A} ÷ ${w} = ${l} cm`, `Perimeter = 2 × (${w} + ${l}) = ${2 * (w + l)} cm`], traps: [tv(l, `${l} cm is the length; the question asks for the perimeter.`), tv(w + l, 'The perimeter goes all the way round: two lengths and two widths.')] }); }
    const a = int(r, 2, 10), b = a + int(r, 2, 8), h = int(r, 2, 12), A = F((a + b) * h, 2);
    return make(this.id, level, seed, { prompt: `A trapezium has parallel sides of ${a} cm and ${b} cm and an area of ${dtext(A)} cm². Work out its height.`, answer: intAns(h), steps: [`{1/2}(${a} + ${b})h = ${dtext(A)}`, `${dtext(F(a + b, 2))}h = ${dtext(A)}, so h = ${h} cm`], traps: [tv(F((a + b) * h, 2 * (a + b)), 'Halve the sum of the parallel sides: {1/2}(a + b).')] });
  },
};

const compound = {
  id: 'maths.geometry.compound-shapes',
  name: 'Compound shapes and perimeter',
  levels: [{ label: 'Area of an L-shape' }, { label: 'Perimeter with missing lengths' }, { label: 'Shaded areas' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const W = int(r, 8, 20), H = int(r, 6, 14), cw = int(r, 2, W - 3), ch = int(r, 2, H - 3), s = Math.min(380 / W, 230 / H), x0 = (600 - W * s) / 2, y0 = 40;
    const pts = [[x0, y0], [x0 + (W - cw) * s, y0], [x0 + (W - cw) * s, y0 + ch * s], [x0 + W * s, y0 + ch * s], [x0 + W * s, y0 + H * s], [x0, y0 + H * s]];
    const L = { h: H * s + 90, polys: [{ pts }], note: NOTE, dims: [] };
    const area = W * H - cw * ch, per = 2 * (W + H);
    if (level === 1) {
      L.dims = [{ a: pts[5], b: pts[4], t: `${W} cm`, off: -22 }, { a: pts[0], b: pts[5], t: `${H} cm`, off: 26 }, { a: pts[0], b: pts[1], t: `${W - cw} cm`, off: 18 }, { a: pts[3], b: pts[4], t: `${H - ch} cm`, off: -28 }];
      L.alt = `L-shape: bottom ${W} cm, left ${H} cm, top ${W - cw} cm, right ${H - ch} cm`;
      return make(this.id, level, seed, { prompt: 'Work out the area of the shape. All corners are right angles.', fig: L, answer: intAns(area), steps: [`Big rectangle ${W} × ${H} = ${W * H} cm²`, `Missing corner: ${cw} × ${ch} = ${cw * ch} cm² (${W} − ${W - cw} by ${H} − ${H - ch})`, `${W * H} − ${cw * ch} = ${area} cm²`], traps: [tv(W * H, 'The corner is cut out: subtract its area.'), tv(W * H - (W - cw) * (H - ch), `The cut-out corner is ${cw} cm by ${ch} cm: find each length by subtracting.`)] });
    }
    if (level === 2) {
      L.dims = [{ a: pts[5], b: pts[4], t: `${W} cm`, off: -22 }, { a: pts[0], b: pts[5], t: `${H} cm`, off: 26 }, { a: pts[1], b: pts[2], t: `${ch} cm`, off: -24 }, { a: pts[0], b: pts[1], t: `${W - cw} cm`, off: 18 }];
      L.alt = `L-shape: bottom ${W} cm, left ${H} cm, inner step ${ch} cm, top ${W - cw} cm`;
      return make(this.id, level, seed, { prompt: 'Work out the perimeter of the shape. All corners are right angles.', fig: L, answer: intAns(per), steps: [`Missing lengths: ${W} − ${W - cw} = ${cw} cm and ${H} − ${ch} = ${H - ch} cm`, `Perimeter = ${W} + ${H} + ${W - cw} + ${ch} + ${cw} + ${H - ch} = ${per} cm`], traps: [tv(W + H + (W - cw) + ch, 'Add all six sides, including the two missing ones.'), tv(area, 'That is the area. The perimeter is the distance around the edge.')] });
    }
    const b = int(r, 3, W), h = int(r, 2, H - 1), shade = F(2 * W * H - b * h, 2);
    const rect = [[x0, y0], [x0 + W * s, y0], [x0 + W * s, y0 + H * s], [x0, y0 + H * s]], tri = [[x0 + W * s / 2 - (b * s) / 2, y0 + H * s], [x0 + W * s / 2 + (b * s) / 2, y0 + H * s], [x0 + W * s / 2, y0 + H * s - h * s]];
    return make(this.id, level, seed, { prompt: `A white triangle is cut from a ${W} cm by ${H} cm rectangle. The triangle has base ${b} cm and height ${h} cm. Work out the shaded area.`, fig: { h: H * s + 90, polys: [{ pts: rect, fill: '#a8d5b555' }, { pts: tri, fill: '#182e44' }], dims: [{ a: rect[3], b: rect[2], t: `${W} cm`, off: -22 }, { a: rect[0], b: rect[3], t: `${H} cm`, off: 26 }], note: NOTE, alt: `Shaded ${W} by ${H} rectangle with a white triangle of base ${b} and height ${h} removed` }, answer: valA(shade), steps: [`Rectangle: ${W} × ${H} = ${W * H} cm²`, `Triangle: {1/2} × ${b} × ${h} = ${dtext(F(b * h, 2))} cm²`, `Shaded: ${W * H} − ${dtext(F(b * h, 2))} = ${dtext(shade)} cm²`], traps: [tv(W * H - b * h, 'The triangle is half of base × height.'), tv(F(b * h, 2), 'That is the white triangle; subtract it from the rectangle.')] });
  },
};

/* ═════════ G9, G17, G18 circles, arcs and sectors ═════════ */
const circleFig = (r_, label, dia) => ({ h: 300, circles: [{ c: [300, 150], r: 120 }], segs: [dia ? { a: [180, 150], b: [420, 150] } : { a: [300, 150], b: [420, 150] }], dots: [[300, 150]], labels: [{ at: [dia ? 300 : 360, 140], t: label }], alt: `Circle with ${dia ? 'diameter' : 'radius'} ${label}` });
const sectorFig = (rr, ang, labR, labA) => ({ h: 320, sectors: [{ c: [300, 230], r: 180, a1: 90 - ang / 2, a2: 90 + ang / 2 }], angles: [{ v: [300, 230], p: at([300, 230], 100, 90 - ang / 2), q: at([300, 230], 100, 90 + ang / 2), label: labA, r: 34 }], labels: [{ at: [...at([300, 230], 120, 90 - ang / 2 - 8)].map((v, i) => (i ? v : v + 10)), t: labR, anchor: 'start' }], note: NOTE, alt: `Sector with radius ${labR} and angle ${labA}` });
const circleMeasure = {
  id: 'maths.geometry.circle-measure',
  name: 'Circumference and area of circles',
  levels: [{ label: 'Circumference and area to 1 d.p.' }, { label: 'Answers in terms of π' }, { label: 'Work backwards' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), rr = int(r, 2, 20), dia = r() < 0.45, d = 2 * rr, what = pick(r, ['circumference', 'area']);
    const given = dia ? `diameter ${d} cm` : `radius ${rr} cm`, fig = circleFig(rr, dia ? `${d} cm` : `${rr} cm`, dia);
    if (level === 1) {
      const v = what === 'area' ? Math.PI * rr * rr : Math.PI * d;
      return make(this.id, level, seed, { prompt: `A circle has ${given}. Work out its ${what}. Give your answer to 1 decimal place.`, fig, calculator: true, answer: dp1(v), steps: [what === 'area' ? `Area = πr² = π × ${rr}² ` : `Circumference = πd = π × ${d}`, `= ${v.toFixed(4)}… = ${r1(v).n / r1(v).d} ${what === 'area' ? 'cm²' : 'cm'} (1 d.p.)`.replace(/ (\d+) cm/, ' $1.0 cm')], traps: what === 'area' ? [tv(r1(Math.PI * d * d), dia ? `Halve the diameter first: r = ${rr} cm.` : 'Area uses the radius squared: πr².'), tv(r1(2 * Math.PI * rr), 'That is the circumference. Area = πr².')] : [tv(r1(Math.PI * rr * rr), 'That is the area. Circumference = πd = 2πr.'), tv(r1(Math.PI * rr), `Circumference = π × diameter (${d} cm), not π × radius.`)] });
    }
    if (level === 2) {
      const k = what === 'area' ? rr * rr : d;
      return make(this.id, level, seed, { prompt: `A circle has ${given}. Work out its ${what}. Give your answer in terms of π.`, fig, answer: exPi(k), steps: [what === 'area' ? `πr² = π × ${rr}² = ${k}π cm²` : `πd = ${d}π cm`], exTraps: what === 'area' ? [(dia ? exTrap(d * d, `Use the radius (${rr} cm), not the diameter: π × ${rr}².`) : exTrap(rr, `Square the radius: π × ${rr}², not π × ${rr}.`)), exTrap(2 * rr, 'That is the circumference. Area = πr².')] : [exTrap(rr * rr, 'That is the area. Circumference = πd.'), exTrap(rr, 'Circumference = π × diameter, not π × radius.')] });
    }
    if (what === 'area') { const A = rr * rr; return make(this.id, level, seed, { prompt: `A circle has an area of ${A}π cm². Work out its radius.`, fig: circleFig(rr, 'r', false), answer: intAns(rr), steps: [`πr² = ${A}π, so r² = ${A}`, `r = √${A} = ${rr} cm`], traps: [tv(A, `${A} is r²: take the square root.`), tv(F(A, 2), 'Area = πr²: r² = ' + A + ', so take the square root, do not halve.')] }); }
    const C = Math.PI * d;
    return make(this.id, level, seed, { prompt: `A circular track has a circumference of ${C.toFixed(2)} m. Work out its diameter, to the nearest metre.`, fig: circleFig(rr, 'd', true), calculator: true, answer: intAns(d), steps: [`C = πd, so d = C ÷ π`, `${C.toFixed(2)} ÷ π = ${d}.0… ≈ ${d} m`], traps: [tv(rr, `That is the radius; the diameter is twice the radius: ${d} m.`), tv(Math.round(C / 2), 'Divide the circumference by π, not by 2.')] });
  },
};

const arcsSectors = {
  id: 'maths.geometry.arcs-sectors',
  name: 'Arcs and sectors',
  levels: [{ label: 'Arc length' }, { label: 'Sector area' }, { label: 'Sector perimeter and exact answers' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), ang = pick(r, [30, 40, 45, 60, 72, 80, 90, 100, 120, 135, 150]), rr = int(r, 3, 15), fig = sectorFig(rr, ang, `${rr} cm`, `${ang}°`);
    if (level === 1) { const v = (ang / 360) * 2 * Math.PI * rr; return make(this.id, level, seed, { prompt: `Work out the arc length of a sector with radius ${rr} cm and angle ${ang}°. Give your answer to 1 decimal place.`, fig, calculator: true, answer: dp1(v), steps: [`Arc length = {${ang}/360} × 2π × ${rr}`, `= ${v.toFixed(4)}… cm`], traps: [tv(r1((ang / 360) * Math.PI * rr * rr), 'That is the sector area. Arc length uses the circumference, 2πr.'), tv(r1(2 * Math.PI * rr), `That is the whole circumference: take the fraction {${ang}/360} of it.`)] }); }
    if (level === 2) { const v = (ang / 360) * Math.PI * rr * rr; return make(this.id, level, seed, { prompt: `Work out the area of a sector with radius ${rr} cm and angle ${ang}°. Give your answer to 1 decimal place.`, fig, calculator: true, answer: dp1(v), steps: [`Sector area = {${ang}/360} × π × ${rr}²`, `= ${v.toFixed(4)}… cm²`], traps: [tv(r1((ang / 360) * 2 * Math.PI * rr), 'That is the arc length. Area uses πr².'), tv(r1(Math.PI * rr * rr), `That is the whole circle: take {${ang}/360} of it.`)] }); }
    if (r() < 0.5) { const arc = (ang / 360) * 2 * Math.PI * rr, P = arc + 2 * rr; return make(this.id, level, seed, { prompt: `Work out the perimeter of a sector with radius ${rr} cm and angle ${ang}°. Give your answer to 1 decimal place.`, fig, calculator: true, answer: dp1(P), steps: [`Arc = {${ang}/360} × 2π × ${rr} = ${arc.toFixed(3)} cm`, `Perimeter = arc + 2 radii = ${arc.toFixed(3)} + ${2 * rr} = ${P.toFixed(3)} cm`], traps: [tv(r1(arc), `Add the two straight edges (2 × ${rr} cm) to the arc.`), tv(r1(arc + rr), 'A sector has two straight edges, both radii.')] }); }
    const k = F(ang * rr * rr, 360);
    return make(this.id, level, seed, { prompt: `Work out the area of a sector with radius ${rr} cm and angle ${ang}°. Give your answer in terms of π.`, fig, answer: exPi(k), steps: [`{${ang}/360} × π × ${rr}² = ${dtext(k)}π cm²`], exTraps: [exTrap(F(ang * 2 * rr, 360), 'That is the arc length; area uses r².'), exTrap(rr * rr, `That is the whole circle: multiply by {${ang}/360}.`)] });
  },
};

/* ═════════ G16, G17 volume and surface area ═════════ */
function cuboidFig(l, w, h) {
  const s = Math.min(260 / l, 160 / h, 200 / w), L = l * s, H = h * s, D = w * s * 0.5, x0 = 150, y0 = 260;
  const A = [x0, y0], B = [x0 + L, y0], C = [x0 + L, y0 - H], Dd = [x0, y0 - H], off = [D, -D];
  const mv = p => [p[0] + off[0], p[1] + off[1]];
  return { h: 300, polys: [{ pts: [A, B, C, Dd] }, { pts: [Dd, C, mv(C), mv(Dd)], fill: '#a8d5b511' }, { pts: [B, mv(B), mv(C), C], fill: '#a8d5b511' }], dims: [{ a: A, b: B, t: `${l} cm`, off: -22 }, { a: B, b: mv(B), t: `${w} cm`, off: -24 }, { a: A, b: Dd, t: `${h} cm`, off: 26 }], note: NOTE, alt: `Cuboid ${l} cm by ${w} cm by ${h} cm` };
}
function prismFig(b, h, l) {
  const s = Math.min(200 / b, 150 / h), Bw = b * s, H = h * s, x0 = 110, y0 = 270, D = [Math.min(240, 40 + l * 10), -Math.min(100, 20 + l * 4)];
  const A = [x0, y0], B = [x0 + Bw, y0], C = [x0, y0 - H], mv = p => [+(p[0] + D[0]).toFixed(1), +(p[1] + D[1]).toFixed(1)];
  // visible: front triangle ABC, sloping face C B B' C'; hidden (dashed): A A', A' B', A' C'
  return { h: 300, polys: [{ pts: [B, mv(B), mv(C), C], fill: '#a8d5b511' }, { pts: [A, B, C] }], segs: [{ a: A, b: mv(A), dash: true }, { a: mv(A), b: mv(B), dash: true }, { a: mv(A), b: mv(C), dash: true }], angles: [{ v: A, p: B, q: C, right: true }], dims: [{ a: A, b: B, t: `${b} cm`, off: -22 }, { a: A, b: C, t: `${h} cm`, off: 26 }, { a: B, b: mv(B), t: `${l} cm`, off: -24 }], note: NOTE, alt: `Triangular prism: right-angled triangle ${b} cm by ${h} cm, length ${l} cm` };
}
function cylFig(rr, h) {
  const s = Math.min(110 / rr, 200 / h), R = rr * s, H = h * s, cx = 300, top = 50;
  return { h: H + 110, ellipses: [{ c: [cx, top], rx: R, ry: R * 0.3 }, { c: [cx, top + H], rx: R, ry: R * 0.3 }], segs: [{ a: [cx - R, top], b: [cx - R, top + H] }, { a: [cx + R, top], b: [cx + R, top + H] }, { a: [cx, top], b: [cx + R, top], dash: true }], labels: [{ at: [cx + R / 2, top - 8], t: `${rr} cm` }, { at: [cx + R + 12, top + H / 2], t: `${h} cm`, anchor: 'start' }], note: NOTE, alt: `Cylinder radius ${rr} cm, height ${h} cm` };
}
const volume = {
  id: 'maths.geometry.volume',
  name: 'Volume of prisms and cylinders',
  levels: [{ label: 'Cuboids and capacity' }, { label: 'Prisms' }, { label: 'Cylinders' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const l = int(r, 3, 20), w = int(r, 2, 12), h = int(r, 2, 15), V = l * w * h, litres = r() < 0.35 && V % 100 === 0;
      return make(this.id, level, seed, { prompt: litres ? `A tank is a cuboid ${l} cm by ${w} cm by ${h} cm. How many litres does it hold? (1 litre = 1000 cm³)` : 'Work out the volume of the cuboid.', fig: cuboidFig(l, w, h), answer: valA(litres ? F(V, 1000) : F(V)), steps: [`Volume = ${l} × ${w} × ${h} = ${V} cm³`, ...(litres ? [`${V} ÷ 1000 = ${dtext(F(V, 1000))} litres`] : [])], traps: [tv(litres ? V : 2 * (l * w + l * h + w * h), litres ? 'Convert cm³ to litres: divide by 1000.' : 'That is the surface area. Volume = length × width × height.'), tv(l + w + h, 'Multiply the three dimensions, do not add them.')] });
    }
    if (level === 2) {
      const b = int(r, 3, 12), h = int(r, 2, 10), l = int(r, 4, 20), A = F(b * h, 2), V = mul(A, F(l));
      return make(this.id, level, seed, { prompt: 'Work out the volume of the triangular prism.', fig: prismFig(b, h, l), answer: valA(V), steps: [`Cross-section: {1/2} × ${b} × ${h} = ${dtext(A)} cm²`, `Volume = area of cross-section × length = ${dtext(A)} × ${l} = ${dtext(V)} cm³`], traps: [tv(b * h * l, 'The cross-section is a triangle: {1/2} × base × height.'), tv(A, 'That is the area of the cross-section; multiply by the length.')] });
    }
    const rr = int(r, 2, 12), h = int(r, 3, 25), V = Math.PI * rr * rr * h;
    return make(this.id, level, seed, { prompt: `A cylinder has radius ${rr} cm and height ${h} cm. Work out its volume to 1 decimal place.`, fig: cylFig(rr, h), calculator: true, answer: dp1(V), steps: [`Volume = πr²h = π × ${rr}² × ${h}`, `= ${V.toFixed(3)}… cm³`], traps: [tv(r1(Math.PI * 4 * rr * rr * h), 'Use the radius, not the diameter.'), tv(r1(2 * Math.PI * rr * h), 'That is the curved surface area. Volume = πr²h.')] });
  },
};

const surface = {
  id: 'maths.geometry.surface-area',
  name: 'Surface area and other solids',
  levels: [{ label: 'Surface area of a cuboid' }, { label: 'Surface area of a cylinder' }, { label: 'Spheres, cones and pyramids' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const l = int(r, 2, 15), w = int(r, 2, 10), h = int(r, 2, 12), S = 2 * (l * w + l * h + w * h);
      return make(this.id, level, seed, { prompt: 'Work out the total surface area of the cuboid.', fig: cuboidFig(l, w, h), answer: intAns(S), steps: [`Faces: 2 × ${l} × ${w} + 2 × ${l} × ${h} + 2 × ${w} × ${h}`, `= ${2 * l * w} + ${2 * l * h} + ${2 * w * h} = ${S} cm²`], traps: [tv(l * w * h, 'That is the volume. Surface area adds the areas of all six faces.'), tv(S / 2, 'A cuboid has six faces: each of the three sizes appears twice.')] });
    }
    if (level === 2) {
      const rr = int(r, 2, 10), h = int(r, 3, 20), S = 2 * Math.PI * rr * rr + 2 * Math.PI * rr * h;
      return make(this.id, level, seed, { prompt: `A closed cylinder has radius ${rr} cm and height ${h} cm. Work out its total surface area to 1 decimal place.`, fig: cylFig(rr, h), calculator: true, answer: dp1(S), steps: [`Two circles: 2 × π × ${rr}² = ${(2 * Math.PI * rr * rr).toFixed(3)} cm²`, `Curved surface: 2π × ${rr} × ${h} = ${(2 * Math.PI * rr * h).toFixed(3)} cm²`, `Total = ${S.toFixed(3)} cm²`], traps: [tv(r1(2 * Math.PI * rr * h), 'Add the two circular ends to the curved surface.'), tv(r1(Math.PI * rr * rr + 2 * Math.PI * rr * h), 'A closed cylinder has two circular ends.')] });
    }
    const kind = pick(r, ['sphere', 'cone', 'pyramid']);
    if (kind === 'sphere') { const rr = int(r, 2, 12), V = (4 / 3) * Math.PI * rr ** 3; return make(this.id, level, seed, { prompt: `The volume of a sphere is V = {4/3}πr^3. Work out the volume of a sphere with radius ${rr} cm, to 1 decimal place.`, calculator: true, answer: dp1(V), steps: [`{4/3} × π × ${rr}^3 = {4/3} × π × ${rr ** 3}`, `= ${V.toFixed(3)}… cm³`], traps: [tv(r1((4 / 3) * Math.PI * rr * rr), 'Cube the radius: r^3.'), tv(r1(4 * Math.PI * rr ** 3), 'Multiply by {4/3}, not 4.')] }); }
    if (kind === 'cone') { const rr = int(r, 2, 10), h = int(r, 3, 20), V = (Math.PI * rr * rr * h) / 3; return make(this.id, level, seed, { prompt: `The volume of a cone is V = {1/3}πr^2h. Work out the volume of a cone with radius ${rr} cm and height ${h} cm, to 1 decimal place.`, calculator: true, answer: dp1(V), steps: [`{1/3} × π × ${rr}^2 × ${h}`, `= ${V.toFixed(3)}… cm³`], traps: [tv(r1(Math.PI * rr * rr * h), 'That is the cylinder; a cone is {1/3} of it.')] }); }
    const b = int(r, 3, 15), h = int(r, 3, 20), V = F(b * b * h, 3);
    return make(this.id, level, seed, { prompt: `The volume of a pyramid is V = {1/3} × base area × height. A square-based pyramid has base ${b} cm by ${b} cm and height ${h} cm. Work out its volume.${V.d === 1 ? '' : ' Give your answer to 1 decimal place.'}`, calculator: true, answer: V.d === 1 ? intAns(V.n) : dp1(V.n / V.d), steps: [`Base area: ${b} × ${b} = ${b * b} cm²`, `{1/3} × ${b * b} × ${h} = ${(V.n / V.d).toFixed(V.d === 1 ? 0 : 3)} cm³`], traps: [tv(b * b * h, 'That is base area × height, the prism with the same base. A pyramid is {1/3} of it.')] });
  },
};

export { raysFig, triFig, parallelFig, polygonFig, rectFig, circleFig, sectorFig, cuboidFig, prismFig, cylFig };
export const geometrySkills = [angleFacts, parallel, polygonAngles, quadProps, areaShapes, compound, circleMeasure, arcsSectors, volume, surface];
