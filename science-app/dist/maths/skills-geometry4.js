// Edexcel 1MA1 Geometry and measures, batch 4 (gap closing): three-letter angle notation and
// diagrams from written descriptions (G1); surface area of spheres, hemispheres, cones and composite
// solids, volumes of composite solids, and frustums (Higher) (G16, G17). Every item carries a
// JSON-safe figure (item.fig, drawn by geomfig.js) built from the same numbers as the question.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r15';
import { F } from './frac.js?v=20261023-maths-r15';
import { makeA, fixMinus, choiceItem } from './skills-algebra.js?v=20261023-maths-r15';

const fr = v => { const f = typeof v === 'number' ? F(v) : v; return { n: f.n, d: f.d }; };
const intAns = v => ({ kind: 'integer', value: v });
const decA = (f, extra = {}) => ({ kind: 'decimal', value: fr(f), ...extra });
const tv = (v, why) => ({ v: typeof v === 'number' ? (Number.isInteger(v) ? F(v) : F(Math.round(v * 1000), 1000)) : v, why });
const r1 = v => F(Math.round(v * 10), 10);
const dp1 = v => decA(r1(v), { dp: 1, tol: 0.06 });
const t1 = (v, why) => tv(r1(v), why);
const exPi = k => ({ kind: 'exact', a: { n: 0, d: 1 }, b: fr(k), r: 'pi' });
const exTrap = (k, why) => ({ a: { n: 0, d: 1 }, b: fr(k), r: 'pi', why });
const NOTE = 'Not drawn accurately';
const make = (skill, level, seed, o) => {
  const it = makeA(skill, level, seed, o);
  if (o.exTraps) it.exTraps = o.exTraps.filter(t => !(t.b.n * o.answer.b.d === o.answer.b.n * t.b.d)).map(t => ({ ...t, why: fixMinus(t.why) }));
  if (it.traps && o.answer.kind === 'decimal') it.traps = it.traps.filter(t => Math.abs(t.v.n / t.v.d - o.answer.value.n / o.answer.value.d) > 0.06);
  return it;
};
const higher = label => ({ label, higher: true });
const PI = 'π';
const piText = k => `${k}π`;

/* ───────── figure builders ───────── */
/** Sphere of radius r: outline circle, dashed equator, radius marked. */
function sphereFig(rr, hemi = false) {
  const R = 120, c = [300, hemi ? 200 : 160];
  if (hemi) return { h: 260, sectors: [{ c, r: R, a1: 0, a2: 180, fill: '#a8d5b511' }], ellipses: [{ c, rx: R, ry: R * 0.28 }], segs: [{ a: c, b: [c[0] + R, c[1]], dash: true }], labels: [{ at: [c[0] + R / 2, c[1] - 8], t: `${rr} cm` }], note: NOTE, alt: `Solid hemisphere of radius ${rr} cm` };
  return { h: 320, circles: [{ c, r: R }], ellipses: [{ c, rx: R, ry: R * 0.28, dash: true }], segs: [{ a: c, b: [c[0] + R, c[1]] }], dots: [c], labels: [{ at: [c[0] + R / 2, c[1] - 8], t: `${rr} cm` }], note: NOTE, alt: `Sphere of radius ${rr} cm` };
}
/** Cone with base radius r and height h (and slant l when shown). Labels: { r, h, l } strings or ''. */
function coneFig(lab, alt) {
  const R = 110, H = 200, c = [300, 260], apex = [300, 260 - H];
  const segs = [{ a: apex, b: [c[0] - R, c[1]] }, { a: apex, b: [c[0] + R, c[1]] }, { a: c, b: [c[0] + R, c[1]], dash: true }];
  if (lab.h) segs.push({ a: apex, b: c, dash: true });
  const labels = [{ at: [c[0] + R / 2, c[1] - 8], t: lab.r }];
  if (lab.h) labels.push({ at: [c[0] + 7, c[1] - H / 2 + 30], t: lab.h, anchor: 'start' });
  if (lab.l) labels.push({ at: [c[0] + R / 2 + 22, c[1] - H / 2], t: lab.l, anchor: 'start' });
  return { h: 310, ellipses: [{ c, rx: R, ry: R * 0.28 }], segs, labels, angles: lab.h ? [{ v: c, p: apex, q: [c[0] + R, c[1]], right: true }] : [], note: NOTE, alt };
}
/** A cylinder of radius r and height h with a hemisphere or a cone (height ch) on top. */
function cylTopFig(rr, h, top, ch, alt) {
  const R = 100, s = R / rr, H = Math.min(150, h * s), cx = 300, base = 300, topY = base - H;
  const f = { h: 330, ellipses: [{ c: [cx, base], rx: R, ry: R * 0.28 }, { c: [cx, topY], rx: R, ry: R * 0.28, dash: true }], segs: [{ a: [cx - R, topY], b: [cx - R, base] }, { a: [cx + R, topY], b: [cx + R, base] }, { a: [cx, base], b: [cx + R, base], dash: true }], labels: [{ at: [cx + R / 2, base - 8], t: `${rr} cm` }, { at: [cx + R + 12, (topY + base) / 2], t: `${h} cm`, anchor: 'start' }], note: NOTE, alt };
  if (top === 'hemi') f.sectors = [{ c: [cx, topY], r: R, a1: 0, a2: 180, fill: '#a8d5b511' }];
  else { const CH = Math.min(110, ch * s), ap = [cx, topY - CH]; f.segs.push({ a: ap, b: [cx - R, topY] }, { a: ap, b: [cx + R, topY] }, { a: ap, b: [cx, topY], dash: true }); f.labels.push({ at: [cx + 6, topY - CH / 2 + 18], t: `${ch} cm`, anchor: 'start', size: 13 }); }
  return f;
}
/** Frustum: a cone of base radius R and height H with the top cone (height h) removed. */
function frustumFig(Rr, Hh, hh, alt) {
  const R = 130, H = 230, base = 290, cx = 300, apex = [cx, base - H], cut = base - H + (H * hh) / Hh, rc = (R * hh) / Hh;
  return { h: 320, ellipses: [{ c: [cx, base], rx: R, ry: R * 0.26 }, { c: [cx, cut], rx: rc, ry: rc * 0.26 }], segs: [{ a: [cx - rc, cut], b: [cx - R, base] }, { a: [cx + rc, cut], b: [cx + R, base] }, { a: apex, b: [cx - rc, cut], dash: true }, { a: apex, b: [cx + rc, cut], dash: true }, { a: apex, b: [cx, base], dash: true }, { a: [cx, base], b: [cx + R, base], dash: true }], labels: [{ at: [cx + R / 2, base - 8], t: `${Rr} cm` }, { at: [cx - rc / 2 - 16, (apex[1] + cut) / 2 + 5], t: `${hh} cm`, anchor: 'end' }, { at: [cx + (rc + R) / 2 + 14, (cut + base) / 2 + 5], t: `${Hh - hh} cm`, anchor: 'start' }], note: NOTE, alt };
}
/** Triangle or quadrilateral with lettered vertices; `marks` are angle arcs { at, from, to, label }. */
function letteredFig(names, pts, marks, diag, alt) {
  const idx = Object.fromEntries(names.map((n, i) => [n, i])), P = n => pts[idx[n]];
  const cen = [pts.reduce((s, p) => s + p[0], 0) / pts.length, pts.reduce((s, p) => s + p[1], 0) / pts.length];
  const labels = names.map((n, i) => { const p = pts[i], d = [p[0] - cen[0], p[1] - cen[1]], l = Math.hypot(...d) || 1; return { at: [+(p[0] + (d[0] / l) * 22).toFixed(1), +(p[1] + (d[1] / l) * 22 + 6).toFixed(1)], t: n }; });
  return { h: 330, polys: [{ pts }], segs: diag ? [{ a: P(diag[0]), b: P(diag[1]) }] : [], angles: marks.map(m => ({ v: P(m.at), p: P(m.from), q: P(m.to), label: m.label, r: 34 })), labels, note: NOTE, alt };
}
const QUADS = [[[110, 280], [480, 290], [430, 70], [170, 90]], [[90, 250], [420, 290], [510, 90], [200, 60]], [[130, 290], [500, 250], [380, 60], [100, 110]]];
const TRIS = [[[100, 280], [500, 280], [330, 60]], [[110, 260], [490, 290], [200, 60]], [[90, 290], [470, 240], [380, 50]]];
const LETTERS = [['A', 'B', 'C', 'D'], ['P', 'Q', 'R', 'S'], ['K', 'L', 'M', 'N'], ['E', 'F', 'G', 'H']];
const ang = (v, p, q) => { const a = [p[0] - v[0], p[1] - v[1]], b = [q[0] - v[0], q[1] - v[1]]; return (Math.acos((a[0] * b[0] + a[1] * b[1]) / (Math.hypot(...a) * Math.hypot(...b))) * 180) / Math.PI; };

/* ═════════ G1 three-letter angle notation ═════════ */
const angleNotation = {
  id: 'maths.geometry.angle-notation',
  name: 'Naming angles with three letters',
  levels: [{ label: 'Which angle is marked?' }, { label: 'Use angles given by three letters' }, { label: 'From a written description' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      // A quadrilateral with one diagonal; the marked angle is between two of the lines at a vertex.
      const L = pick(r, LETTERS), pts = pick(r, QUADS), [a, b, c, d] = L, diag = pick(r, [[a, c], [b, d]]);
      const cands = [];
      for (const [v, i] of L.map((v, i) => [v, i])) {
        const nb = [L[(i + 1) % 4], L[(i + 3) % 4]], arms = diag.includes(v) ? [...nb, diag.find(x => x !== v)] : nb;
        for (let j = 0; j < arms.length; j++) for (let k = j + 1; k < arms.length; k++) cands.push([arms[j], v, arms[k]]);
      }
      const name = t => `angle ${t.join('')}`, key = t => t[1] + [t[0], t[2]].sort().join('');
      const mark = pick(r, cands.filter(t => diag.includes(t[1]))), wrong = shuffled(r, cands.filter(t => key(t) !== key(mark) && t[1] !== mark[1])).slice(0, 2);
      const pool = [...shuffled(r, cands.filter(t => t[1] === mark[1] && key(t) !== key(mark))).slice(0, 1), [mark[1], mark[0], mark[2]], ...wrong];
      const opts = []; for (const t of pool) if (opts.length < 3 && key(t) !== key(mark) && !opts.some(o => key(o) === key(t))) opts.push(t);
      const fig = letteredFig(L, pts, [{ at: mark[1], from: mark[0], to: mark[2], label: 'x' }], diag, `Quadrilateral ${L.join('')} with diagonal ${diag.join('')}; angle x is marked at ${mark[1]} between ${mark[1]}${mark[0]} and ${mark[1]}${mark[2]}`);
      const ch = choiceItem(r, name(mark), opts.map(name), o => { const t = o.replace('angle ', '').split(''); if (t[1] !== mark[1]) return `The middle letter is the vertex: ${o} is at ${t[1]}, but x is at ${mark[1]}.`; return `${o} is at the right vertex, but between ${t[1]}${t[0]} and ${t[1]}${t[2]}. x is between ${mark[1]}${mark[0]} and ${mark[1]}${mark[2]}.`; });
      return make(this.id, level, seed, { prompt: 'Which of these names the angle marked x?', fig, ...ch, steps: [`x is at vertex ${mark[1]}, so ${mark[1]} is the middle letter.`, `Its arms go to ${mark[0]} and ${mark[2]}: angle ${mark.join('')} (or angle ${[...mark].reverse().join('')}).`] });
    }
    if (level === 2) {
      // Angles given in words only; the figure shows the letters. Find the third angle.
      const L = pick(r, LETTERS).slice(0, 3), pts = pick(r, TRIS), vals = (() => { const a = int(r, 35, 80), b = int(r, 35, 140 - a); return [a, b, 180 - a - b]; })();
      const order = shuffled(r, [0, 1, 2]), askI = order[0], [g1, g2] = order.slice(1);
      const angName = i => { const o = [0, 1, 2].filter(j => j !== i); return `${L[o[0]]}${L[i]}${L[o[1]]}`; };
      const fig = letteredFig(L, pts, [], null, `Triangle ${L.join('')}`);
      return make(this.id, level, seed, { prompt: `In triangle ${L.join('')}, angle ${angName(g1)} = ${vals[g1]}° and angle ${angName(g2)} = ${vals[g2]}°. Work out angle ${angName(askI)}.`, fig, answer: intAns(vals[askI]), steps: [`Angle ${angName(g1)} is at ${L[g1]} and angle ${angName(g2)} is at ${L[g2]}.`, `Angle ${angName(askI)} is at ${L[askI]}: 180 − ${vals[g1]} − ${vals[g2]} = ${vals[askI]}°`], traps: [tv(180 - vals[g1], 'Use both given angles: the three angles of the triangle add up to 180°.')].filter(t => t.v.n !== vals[askI]) });
    }
    const L = pick(r, LETTERS).slice(0, 3), [A, B, C] = shuffled(r, L);
    // Equal sides meet at the apex; the base angles are opposite the equal sides.
    const giveApex = r() < 0.5, apexA = int(r, 20, 110) & ~1, baseA = (180 - apexA) / 2, baseB = int(r, 30, 80), apexB = 180 - 2 * baseB;
    const apexName = `${B}${A}${C}`, baseName = `${A}${B}${C}`;
    if (giveApex) return make(this.id, level, seed, { prompt: `${A}${B}${C} is an isosceles triangle with ${A}${B} = ${A}${C}. Angle ${apexName} = ${apexA}°. Work out angle ${baseName}.`, answer: intAns(baseA), steps: [`${A}${B} = ${A}${C}, so the equal sides meet at ${A}: angle ${apexName} is the top angle.`, `The base angles ${A}${B}${C} and ${A}${C}${B} are equal: (180 − ${apexA}) ÷ 2 = ${baseA}°`], traps: [tv(apexA, `Angle ${baseName} is at ${B}, a base angle, not the top angle at ${A}.`), tv(180 - 2 * apexA, `The angle at ${A} is the top angle, not a base angle: share 180 − ${apexA} between the two base angles.`)].filter(t => t.v.n > 0 && t.v.n !== baseA) });
    return make(this.id, level, seed, { prompt: `${A}${B}${C} is an isosceles triangle with ${A}${B} = ${A}${C}. Angle ${A}${C}${B} = ${baseB}°. Work out angle ${apexName}.`, answer: intAns(apexB), steps: [`${A}${B} = ${A}${C}, so angles ${A}${B}${C} and ${A}${C}${B} (at the base) are equal: both ${baseB}°.`, `Angle ${apexName} = 180 − 2 × ${baseB} = ${apexB}°`], traps: [tv(180 - baseB, `Both base angles are ${baseB}°: subtract 2 × ${baseB}.`), tv((180 - baseB) / 2, `Angle ${A}${C}${B} is a base angle (at ${C}), not the top angle.`)].filter(t => t.v.n !== apexB) });
  },
};

/* ═════════ G17 surface area of spheres, hemispheres, cones and composite solids ═════════ */
const TRIPLES = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17], [7, 24, 25], [12, 16, 20]];
const sphereCone = {
  id: 'maths.geometry.sphere-cone-area',
  name: 'Surface area of spheres, cones and composite solids',
  levels: [{ label: 'Spheres and hemispheres' }, { label: 'Cones, including the slant height' }, { label: 'Composite solids' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const rr = int(r, 2, 12), kind = pick(r, ['sphere', 'hemi', 'hemi-exact', 'sphere-exact']);
      const hemi = kind.startsWith('hemi'), exact = kind.endsWith('exact'), k = hemi ? 3 * rr * rr : 4 * rr * rr;
      const head = `The surface area of a sphere is 4πr^2. `;
      const ask = hemi ? `A solid hemisphere has radius ${rr} cm. Work out its total surface area` : `A sphere has radius ${rr} cm. Work out its surface area`;
      const steps = hemi ? [`Curved surface: half of 4πr^2 = 2π × ${rr}^2 = ${2 * rr * rr}π`, `Flat circular face: π × ${rr}^2 = ${rr * rr}π`, `Total = ${k}π cm²${exact ? '' : ` ≈ ${(k * Math.PI).toFixed(3)} cm²`}`] : [`4 × π × ${rr}^2 = ${k}π cm²`, ...(exact ? [] : [`≈ ${(k * Math.PI).toFixed(3)} cm²`])];
      const fig = sphereFig(rr, hemi);
      // Traps: hemisphere without its flat face (2πr²) or as a whole sphere (4πr²); sphere halved (2πr²),
      // radius doubled instead of squared (8πr), and the volume formula.
      const wrongK = hemi ? [[2 * rr * rr, 'A solid hemisphere also has a flat circular face: add πr².'], [4 * rr * rr, 'A hemisphere is half a sphere: 2πr² curved, plus the flat face πr².']] : [[2 * rr * rr, 'That is half a sphere. The whole sphere is 4πr².'], [8 * rr, 'Square the radius, do not double it: 4 × π × r × r.']];
      const vol = hemi ? (2 * rr ** 3) / 3 : (4 * rr ** 3) / 3;
      if (exact) return make(this.id, level, seed, { prompt: `${head}${ask}. Give your answer in terms of π.`, fig, answer: exPi(k), steps, exTraps: [...wrongK.map(([v, w]) => exTrap(v, w)), ...(Number.isInteger(vol) ? [exTrap(vol, 'That is the volume. Surface area uses 4πr².')] : [])] });
      return make(this.id, level, seed, { prompt: `${head}${ask}, to 1 decimal place.`, fig, calculator: true, answer: dp1(k * Math.PI), steps, traps: [...wrongK.map(([v, w]) => t1(v * Math.PI, w)), t1(vol * Math.PI, 'That is the volume. Surface area uses 4πr².'), t1(k, 'That leaves out π: multiply by π (3.14159…).')] });
    }
    if (level === 2) {
      const [a, b, c] = pick(r, TRIPLES), rr = a, h = b, l = c, given = pick(r, ['l', 'h']), total = r() < 0.5;
      const k = rr * l + (total ? rr * rr : 0);
      const fig = coneFig(given === 'l' ? { r: `${rr} cm`, l: `${l} cm` } : { r: `${rr} cm`, h: `${h} cm` }, `Cone, radius ${rr} cm, ${given === 'l' ? `slant height ${l} cm` : `perpendicular height ${h} cm`}`);
      const steps = [...(given === 'h' ? [`Slant height: l^2 = ${rr}^2 + ${h}^2 = ${l * l}, so l = ${l} cm`] : []), `Curved surface = πrl = π × ${rr} × ${l} = ${rr * l}π`, ...(total ? [`Base = π × ${rr}^2 = ${rr * rr}π`, `Total = ${k}π cm²`] : [])];
      return make(this.id, level, seed, { prompt: `The curved surface area of a cone is πrl, where l is the slant height. ${total ? 'Work out the total surface area of the solid cone' : 'Work out the curved surface area of the cone'}. Give your answer in terms of π.`, fig, answer: exPi(k), steps, exTraps: [exTrap(rr * h + (total ? rr * rr : 0), 'Use the slant height l, not the vertical height: l² = r² + h².'), exTrap(rr * l, 'A solid cone also has a circular base: add πr².'), exTrap(rr * l + rr * rr, 'The question asks for the curved surface only.'), exTrap((rr * rr * h) / 3, 'That is the volume. The curved surface is πrl.')].filter(t => Number.isInteger(t.b.n) && (given === 'h' || t.why.indexOf('slant') < 0)) });
    }
    const top = pick(r, ['hemi', 'cone']), rr = top === 'cone' ? pick(r, [3, 6, 5, 9, 8]) : int(r, 2, 9), h = int(r, 4, 15);
    const tri = TRIPLES.find(t => t[0] === rr), ch = top === 'cone' ? tri[1] : 0, l = top === 'cone' ? tri[2] : 0;
    const k = top === 'hemi' ? 2 * rr * rr + 2 * rr * h + rr * rr : rr * l + 2 * rr * h + rr * rr;
    const fig = cylTopFig(rr, h, top, ch, top === 'hemi' ? `Solid: cylinder of radius ${rr} cm and height ${h} cm with a hemisphere on top` : `Solid: cylinder of radius ${rr} cm and height ${h} cm with a cone of height ${ch} cm on top`);
    const topLine = top === 'hemi' ? `Hemisphere (curved only): 2π × ${rr}^2 = ${2 * rr * rr}π` : `Cone (curved only): l = √(${rr}^2 + ${ch}^2) = ${l}; π × ${rr} × ${l} = ${rr * l}π`;
    return make(this.id, level, seed, { prompt: `The solid is made from a cylinder and a ${top === 'hemi' ? 'hemisphere' : 'cone'}. ${top === 'hemi' ? 'The surface area of a sphere is 4πr^2.' : 'The curved surface area of a cone is πrl.'} Work out the total surface area of the solid. Give your answer in terms of π.`, fig, answer: exPi(k), steps: [topLine, `Cylinder (curved only): 2π × ${rr} × ${h} = ${2 * rr * h}π`, `Base circle: π × ${rr}^2 = ${rr * rr}π`, `Total = ${k}π cm²`], exTraps: [exTrap(k + rr * rr, 'Where the two parts join there is no surface: do not count the top of the cylinder.'), exTrap(k - rr * rr, 'The bottom of the cylinder is a circle on the outside: include πr².'), exTrap(top === 'hemi' ? k + 2 * rr * rr : k, top === 'hemi' ? 'Only half a sphere: 2πr², not 4πr².' : 'x'), exTrap(top === 'cone' ? rr * ch + 2 * rr * h + rr * rr : k, 'Use the slant height of the cone, not its vertical height.')].filter(t => t.why !== 'x') });
  },
};

/* ═════════ G16, G17 composite volumes, equal volumes and frustums (Higher) ═════════ */
const MELT = [[3, 2, 9], [6, 4, 18], [3, 6, 1], [6, 3, 32], [3, 1, 36], [6, 6, 8], [9, 6, 27], [3, 3, 4]]; // sphere R, cylinder r, height
const compositeVolume = {
  id: 'maths.geometry.composite-volume',
  name: 'Volumes of composite solids and frustums',
  levels: [{ label: 'Cylinder with a hemisphere or a cone' }, { label: 'Melting and filling: equal volumes' }, higher('Frustums')],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const top = pick(r, ['hemi', 'cone']), rr = top === 'hemi' ? pick(r, [3, 6, 9, 3, 6]) : int(r, 2, 8), h = int(r, 4, 15), ch = top === 'cone' ? 3 * int(r, 1, 4) : 0;
      const cyl = rr * rr * h, topK = top === 'hemi' ? (2 * rr ** 3) / 3 : (rr * rr * ch) / 3, k = cyl + topK;
      const fig = cylTopFig(rr, h, top, ch, top === 'hemi' ? `Solid: cylinder of radius ${rr} cm and height ${h} cm with a hemisphere on top` : `Solid: cylinder of radius ${rr} cm and height ${h} cm with a cone of height ${ch} cm on top`);
      const formula = top === 'hemi' ? 'The volume of a sphere is {4/3}πr^3.' : 'The volume of a cone is {1/3}πr^2h.';
      const exact = r() < 0.5;
      const steps = [`Cylinder: π × ${rr}^2 × ${h} = ${cyl}π`, top === 'hemi' ? `Hemisphere: half of {4/3}π × ${rr}^3 = ${topK}π` : `Cone: {1/3} × π × ${rr}^2 × ${ch} = ${topK}π`, `Total = ${k}π cm³${exact ? '' : ` ≈ ${(k * Math.PI).toFixed(3)} cm³`}`];
      if (exact) return make(this.id, level, seed, { prompt: `The solid is made from a cylinder and a ${top === 'hemi' ? 'hemisphere' : 'cone'}. ${formula} Work out the volume of the solid. Give your answer in terms of π.`, fig, answer: exPi(k), steps, exTraps: [exTrap(cyl + 2 * topK, top === 'hemi' ? 'Only half a sphere sits on top: halve {4/3}πr³.' : 'The cone is {1/3}πr²h, not {2/3}.'), exTrap(cyl, `That is the cylinder only. Add the ${top === 'hemi' ? 'hemisphere' : 'cone'} on top.`), exTrap(top === 'cone' ? cyl + rr * rr * ch : cyl + (4 * rr ** 3) / 3, top === 'cone' ? 'A cone is one third of a cylinder with the same base and height.' : 'A hemisphere is half a sphere.')].filter(t => Number.isInteger(t.b.n)) });
      return make(this.id, level, seed, { prompt: `The solid is made from a cylinder and a ${top === 'hemi' ? 'hemisphere' : 'cone'}. ${formula} Work out the volume of the solid, to 1 decimal place.`, fig, calculator: true, answer: dp1(k * Math.PI), steps, traps: [t1((cyl + 2 * topK) * Math.PI, top === 'hemi' ? 'Only half a sphere sits on top: halve {4/3}πr³.' : 'The cone is {1/3}πr²h, not {2/3}.'), t1(cyl * Math.PI, `That is the cylinder only. Add the ${top === 'hemi' ? 'hemisphere' : 'cone'} on top.`), t1(k, 'That leaves out π: multiply by π (3.14159…).')] });
    }
    if (level === 2) {
      const [R, rr, h] = pick(r, MELT);
      return make(this.id, level, seed, { prompt: `A solid metal sphere of radius ${R} cm is melted down and made into a solid cylinder of radius ${rr} cm. The volume of a sphere is {4/3}πr^3. Work out the height of the cylinder.`, calculator: true, answer: intAns(h), steps: [`Sphere: {4/3} × π × ${R}^3 = ${(4 * R ** 3) / 3}π cm³`, `Cylinder: π × ${rr}^2 × h = ${rr * rr}πh`, `${rr * rr}πh = ${(4 * R ** 3) / 3}π, so h = ${(4 * R ** 3) / 3} ÷ ${rr * rr} = ${h} cm`], traps: [tv(+((4 * R ** 3) / 3 / rr).toFixed(3), 'Divide by r², not r: the cylinder is πr²h.'), tv(+((4 * Math.PI * R ** 3) / 3 / (rr * rr)).toFixed(3), 'π is on both sides, so it cancels.'), tv((4 * R ** 3) / 3, `That is the volume ÷ π. Divide by π × ${rr}² to find h.`)].filter(t => t.v.n / t.v.d !== h) });
    }
    // Frustum: large cone R, H; small cone (removed) h, radius R*h/H.
    const H = pick(r, [12, 15, 18, 20, 24, 30]), divs = [2, 3, 4, 5, 6].filter(d => H % d === 0), d = pick(r, divs), hh = H / d * int(r, 1, d - 1), R = pick(r, [d, 2 * d, 3 * d].filter(v => v <= 15)), rs = (R * hh) / H;
    if (!Number.isInteger(rs) || rs < 1) return this.gen(level, seed + 'f');
    const V = (Math.PI / 3) * (R * R * H - rs * rs * hh);
    const fig = frustumFig(R, H, hh, `Frustum: a cone of base radius ${R} cm and height ${H} cm with a cone of height ${hh} cm cut off the top`);
    return make(this.id, level, seed, { prompt: `A frustum is made by cutting a small cone of height ${hh} cm from the top of a cone of height ${H} cm and base radius ${R} cm. The volume of a cone is {1/3}πr^2h. Work out the volume of the frustum, to 1 decimal place.`, fig, calculator: true, answer: dp1(V), steps: [`The small cone is similar to the large cone: scale factor ${hh} ÷ ${H}, so its radius is ${R} × ${hh}/${H} = ${rs} cm`, `Large cone: {1/3} × π × ${R}^2 × ${H} = ${(R * R * H) / 3}π`, `Small cone: {1/3} × π × ${rs}^2 × ${hh} = ${+((rs * rs * hh) / 3).toFixed(4)}π`, `Frustum = ${+((R * R * H - rs * rs * hh) / 3).toFixed(4)}π ≈ ${V.toFixed(3)} cm³`], traps: [t1((Math.PI / 3) * R * R * H, 'That is the whole cone. Subtract the small cone that was cut off.'), t1((Math.PI / 3) * R * R * (H - hh), 'The frustum is not a cone of height ' + (H - hh) + ' cm: subtract the small cone from the large one.'), t1((Math.PI / 3) * (R * R * H - R * R * hh), 'The small cone has a smaller radius: use similar triangles to find it.')] });
  },
};

export { sphereFig, coneFig, cylTopFig, frustumFig, letteredFig };
export const geometrySkills4 = [angleNotation, sphereCone, compositeVolume];
