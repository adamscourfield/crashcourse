// Edexcel 1MA1 Ratio, proportion and rates of change, batch 2: direct and inverse proportion as
// equations and graphs (R10, R13; Higher: constructing equations, powers and roots), proportion
// graphs and gradients as rates (R14; Higher: average and instantaneous rates, R15), scale drawings
// and maps (R2), similar shapes and length/area/volume ratios (R12; Higher: areas and volumes), and
// converting compound units (R1, R11). Same contract as the other skill modules.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, gcd, num, fracMarkup } from './frac.js?v=20261023-maths-r9';
import { makeA, fixMinus, algAns, algTrap, choiceItem } from './skills-algebra.js?v=20261023-maths-r9';

const fr = v => { const f = typeof v === 'number' ? F(v) : v; return { n: f.n, d: f.d }; };
const fv = f => (f.d === 1 ? num(f.n) : fracMarkup(f));
const intAns = v => ({ kind: 'integer', value: v });
const decA = (f, extra = {}) => ({ kind: 'decimal', value: fr(f), ...extra });
const valA = f => (f.d === 1 ? intAns(f.n) : decA(f));
const tv = (v, why) => ({ v: typeof v === 'number' ? F(v) : v, why });
const dtext = f => { const v = f.n / f.d; return Number.isInteger(v) ? String(v) : String(+v.toFixed(6)); };
const terminates = f => { let d = f.d; for (const p of [2, 5]) while (d % p === 0) d /= p; return d === 1; };
const make = (skill, level, seed, o) => makeA(skill, level, seed, o);

/* ═════════ R10, R13 proportion equations ═════════ */
const KINDS = {
  x: { word: 'directly proportional to x', f: x => x, txt: 'x', show: 'kx' },
  x2: { word: 'directly proportional to the square of x', f: x => x * x, txt: 'x^2', show: 'kx^2' },
  x3: { word: 'directly proportional to the cube of x', f: x => x ** 3, txt: 'x^3', show: 'kx^3' },
  rx: { word: 'directly proportional to the square root of x', f: x => Math.sqrt(x), txt: '√x', show: 'k√x' },
  inv: { word: 'inversely proportional to x', f: x => 1 / x, txt: '{1/x}', show: '{k/x}' },
  inv2: { word: 'inversely proportional to the square of x', f: x => 1 / (x * x), txt: '{1/x^2}', show: '{k/x^2}' },
};
const rootOK = x => Number.isInteger(Math.sqrt(x));
function propSetup(r, kinds) {
  for (;;) {
    const kind = pick(r, kinds), K = KINDS[kind], k = int(r, 2, 12) * pick(r, [1, 1, 2, 5]), x1 = kind === 'rx' ? pick(r, [4, 9, 16, 25]) : int(r, 2, 6), x2 = kind === 'rx' ? pick(r, [4, 9, 16, 25, 36, 49, 64]) : int(r, 2, 10);
    if (x1 === x2) continue;
    const yOf = x => { const v = K.f(x); return kind.startsWith('inv') ? F(k, kind === 'inv' ? x : x * x) : F(k * v); };
    const y1 = yOf(x1), y2 = yOf(x2);
    if (!terminates(y1) || !terminates(y2) || y1.d > 8 || y2.d > 8) continue;
    return { kind, K, k, x1, x2, y1, y2 };
  }
}
const propEquation = {
  id: 'maths.ratio.prop-equation',
  name: 'Direct and inverse proportion equations',
  levels: [{ label: 'Direct proportion' }, { label: 'Inverse proportion' }, { label: 'Squares, cubes and roots', higher: true }, { label: 'Write the formula', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const P = propSetup(r, level === 1 ? ['x'] : level === 2 ? ['inv'] : ['x2', 'x3', 'rx', 'inv2']);
    const { K, k, x1, x2, y1, y2 } = P;
    const wrongDir = P.kind.startsWith('inv') ? mul(y1, F(x2, x1)) : mul(y1, F(x1, x2));
    if (level < 4) {
      return make(this.id, level, seed, { prompt: `y is ${K.word}. When x = ${x1}, y = ${dtext(y1)}. Work out y when x = ${x2}.`, answer: valA(y2), steps: [`y = ${K.show}`, `${dtext(y1)} = k × ${K.txt.replace(/x/g, x1).replace('√' + x1, '√' + x1)}, so k = ${k}`, `y = ${k} × ${K.txt.replace(/x/g, String(x2))} = ${dtext(y2)}`], traps: [tv(wrongDir, P.kind.startsWith('inv') ? 'Inverse proportion: as x gets bigger, y gets smaller. Multiply by the reciprocal of the scale factor.' : 'Direct proportion: y changes by the same factor as x (or its power), in the same direction.'), ...(level === 3 ? [tv(mul(y1, F(x2, x1)), `y is proportional to ${K.txt.replace('{1/', '1/').replace('}', '')}, not to x: apply the power or root to x first.`)] : [])] });
    }
    const ans = P.kind.startsWith('inv') ? `{${k}/${P.kind === 'inv' ? 'x' : 'x^2'}}` : `${k}${K.txt}`;
    if (P.kind === 'rx') return this.gen(level, seed + 'r'); // roots cannot be typed by the algebra input
    return make(this.id, level, seed, { prompt: `y is ${K.word}. When x = ${x1}, y = ${dtext(y1)}. Write a formula for y in terms of x.`, answer: algAns(ans, 'any', ['x', 'y'], { subject: 'y' }), steps: [`y = ${K.show}`, `Substitute x = ${x1}, y = ${dtext(y1)}: k = ${k}`, `y = ${ans}`], note: 'Type y = … or just the expression, for example 3x^2 or 12/x.', alTraps: [algTrap(P.kind.startsWith('inv') ? `${k}x` : `{${k}/x}`, P.kind.startsWith('inv') ? 'Inverse proportion puts x in the denominator: y = k/x.' : 'Direct proportion multiplies: y = kx (or kx^2).'), ...(P.kind === 'x2' ? [algTrap(`${k}x`, `y is proportional to x^2, so y = kx^2.`)] : [])] });
  },
};

const propGraphs = {
  id: 'maths.ratio.prop-graphs',
  name: 'Proportion graphs and tables',
  levels: [{ label: 'Recognise proportion graphs' }, { label: 'Is it direct proportion?' }, { label: 'Inverse proportion tables' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const shapes = { 'A straight line through the origin': 'y is directly proportional to x', 'A curve that gets closer to the axes but never meets them': 'y is inversely proportional to x', 'A straight line that crosses the y-axis above the origin': 'y = mx + c with c ≠ 0', 'A curve through the origin that gets steeper': 'y is proportional to x^2' };
      const keys = Object.keys(shapes), ask = pick(r, [0, 1, 3]), right = keys[ask];
      const ch = choiceItem(r, right, keys.filter(k => k !== right), o => `That shape shows ${shapes[o]}, not ${shapes[right]}.`);
      return make(this.id, level, seed, { prompt: `If ${shapes[right]}, which description matches its graph (for positive x)?`, ...ch, steps: [`${shapes[right]}: ${right.toLowerCase()}.`] });
    }
    if (level === 2) {
      const k = int(r, 2, 9), yes = r() < 0.5, xs = shuffled(r, [1, 2, 3, 4, 5, 6, 8, 10]).slice(0, 4).sort((a, b) => a - b), c = int(r, 1, 6), ys = xs.map(x => (yes ? k * x : k * x + c));
      const ch = choiceItem(r, yes ? 'Yes' : 'No', [yes ? 'No' : 'Yes'], () => (yes ? `y ÷ x is ${k} every time, so y = ${k}x: direct proportion.` : `y ÷ x is not constant (${ys[0]} ÷ ${xs[0]} ≠ ${ys[1]} ÷ ${xs[1]}): y = ${k}x + ${c} is a straight line not through the origin.`));
      return make(this.id, level, seed, { prompt: `x: ${xs.join(', ')}. y: ${ys.join(', ')}. Is y directly proportional to x?`, ...ch, steps: [`Divide each y by its x: ${xs.map((x, i) => dtext(F(ys[i], x))).join(', ')}`, yes ? 'Always the same, so y is directly proportional to x.' : 'Not the same each time, so it is not direct proportion (even though y increases).'] });
    }
    const k = pick(r, [12, 24, 36, 48, 60, 72, 120]), divs = []; for (let x = 1; x <= k; x++) if (k % x === 0) divs.push(x);
    const xs = shuffled(r, divs.filter(x => x > 1 && x < k)).slice(0, 3).sort((a, b) => a - b), miss = int(r, 1, 2);
    return make(this.id, level, seed, { prompt: `y is inversely proportional to x. x: ${xs.join(', ')}. y: ${xs.map((x, i) => (i === miss ? '?' : k / x)).join(', ')}. Work out the missing value of y.`, answer: intAns(k / xs[miss]), steps: [`In inverse proportion x × y is constant: ${xs[0]} × ${k / xs[0]} = ${k}`, `${k} ÷ ${xs[miss]} = ${k / xs[miss]}`], traps: [tv(F(k / xs[0] * xs[miss], xs[0]), 'That treats it as direct proportion. In inverse proportion, x × y stays the same.'), tv(k / xs[0] - (xs[miss] - xs[0]), 'Inverse proportion is not "subtract the same amount": x × y is constant.')] });
  },
};

/* ═════════ R2 scale and maps; R12 similarity ratios ═════════ */
const scaleMaps = {
  id: 'maths.ratio.scale-maps',
  name: 'Scale drawings and maps',
  levels: [{ label: 'Map to real distance' }, { label: 'Real distance to map' }, { label: 'Write a scale as 1 : n' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const n = pick(r, [10000, 20000, 25000, 50000, 100000, 200000]);
    if (level === 1) {
      const cm = pick(r, [2, 3, 4, 5, 6, 7, 8, 2.5, 3.5, 4.5, 12]), m = cm * n / 100, km = m / 1000;
      return make(this.id, level, seed, { prompt: `A map has a scale of 1 : ${n}. Two towns are ${cm} cm apart on the map. How far apart are they in real life, in kilometres?`, answer: valA(F(Math.round(km * 1000), 1000)), steps: [`Real distance = ${cm} × ${n} = ${cm * n} cm`, `= ${m} m = ${km} km (100 cm in 1 m, 1000 m in 1 km)`], traps: [tv(F(Math.round(m * 1000), 1000), 'That is in metres: divide by 1000 for kilometres.'), tv(F(cm * n), 'That is in centimetres: convert to kilometres.')] });
    }
    if (level === 2) {
      const km = pick(r, [1, 2, 3, 4, 5, 6, 8, 10, 15]), cm = (km * 100000) / n;
      if (!Number.isInteger(cm * 10) || cm > 60) return this.gen(level, seed + 'c');
      return make(this.id, level, seed, { prompt: `A map has a scale of 1 : ${n}. A path is ${km} km long. How long is it on the map, in centimetres?`, answer: valA(F(Math.round(cm * 10), 10)), steps: [`${km} km = ${km * 100000} cm`, `${km * 100000} ÷ ${n} = ${cm} cm`], traps: [tv(F(km * n), 'Divide the real distance by the scale, after converting to the same units.'), tv(F(Math.round((km * 1000 * 10) / n), 10), 'Convert kilometres to centimetres (× 100 000), not metres.')] });
    }
    const [unit, mult] = pick(r, [['m', 100], ['km', 100000]]), a = pick(r, unit === 'm' ? [2, 5, 10, 20, 50] : [1, 2, 5, 10]);
    return make(this.id, level, seed, { prompt: `On a plan, 1 cm represents ${a} ${unit}. Write the scale in the form 1 : n.`, answer: intAns(a * mult), steps: [`${a} ${unit} = ${a * mult} cm`, `1 cm : ${a * mult} cm, so 1 : ${a * mult}`], traps: [tv(a, `The units must be the same: ${a} ${unit} is ${a * mult} cm.`), tv(a * (unit === 'm' ? 1000 : 1000), unit === 'm' ? 'There are 100 cm in a metre, not 1000.' : '1 km = 1000 m = 100 000 cm, not 1000 cm.')] });
  },
};

const similarRatio = {
  id: 'maths.ratio.similar-ratio',
  name: 'Similar shapes: lengths, areas and volumes',
  levels: [{ label: 'Lengths in similar shapes' }, { label: 'Areas of similar shapes', higher: true }, { label: 'Volumes of similar shapes', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 2, 9), sf = pick(r, [F(2), F(3), F(3, 2), F(5, 2), F(4), F(5, 4)]), b = int(r, 2, 12), A = F(a), B = F(b);
      const A2 = mul(A, sf), B2 = mul(B, sf);
      if (!terminates(B2) || eq(A, B)) return this.gen(level, seed + 's');
      return make(this.id, level, seed, { prompt: `Two triangles are similar. In the smaller triangle two sides are ${a} cm and ${b} cm. The side matching ${a} cm in the larger triangle is ${dtext(A2)} cm. Work out the length of the side matching ${b} cm.`, answer: valA(B2), steps: [`Scale factor = ${dtext(A2)} ÷ ${a} = ${dtext(sf)}`, `${b} × ${dtext(sf)} = ${dtext(B2)} cm`], traps: [tv(add(B, sub(A2, A)), 'Similar shapes are enlargements: multiply by the scale factor, do not add the difference.'), tv(div(B, sf), 'The larger triangle has longer sides: multiply by the scale factor.')] });
    }
    const p = int(r, 1, 4), q = p + int(r, 1, 3), g = gcd(p, q);
    if (g > 1) return this.gen(level, seed + 'g');
    if (level === 2) {
      const small = p * p * int(r, 2, 12), big = (small * q * q) / (p * p);
      if (!Number.isInteger(big)) return this.gen(level, seed + 'b');
      return make(this.id, level, seed, { prompt: `Two similar shapes have corresponding lengths in the ratio ${p} : ${q}. The smaller shape has an area of ${small} cm². Work out the area of the larger shape.`, answer: intAns(big), steps: [`Length scale factor {${q}/${p}}`.replace('{' + q + '/1}', String(q)), `Area scale factor = ({${q}/${p}})^2 = {${q * q}/${p * p}}`.replace(/\{(\d+)\/1\}/g, '$1'), `${small} × {${q * q}/${p * p}} = ${big} cm²`.replace(/\{(\d+)\/1\}/g, '$1')], traps: [tv(F(small * q, p), 'Areas scale by the square of the length scale factor.'), tv(F(small * q ** 3, p ** 3), 'Cube the scale factor for volumes; square it for areas.')] });
    }
    if (r() < 0.5) {
      const small = p ** 3 * int(r, 2, 10), big = (small * q ** 3) / p ** 3;
      return make(this.id, level, seed, { prompt: `Two similar solids have corresponding lengths in the ratio ${p} : ${q}. The smaller solid has a volume of ${small} cm³. Work out the volume of the larger solid.`, answer: intAns(big), steps: [`Volume scale factor = (${q} ÷ ${p})^3 = ${dtext(F(q ** 3, p ** 3))}`, `${small} × ${dtext(F(q ** 3, p ** 3))} = ${big} cm³`].map(s => s), traps: [tv(F(small * q * q, p * p), 'Volumes scale by the cube of the length scale factor, not the square.'), tv(F(small * q, p), 'Volumes scale by the cube of the length scale factor.')] });
    }
    const V1 = p ** 3 * int(r, 1, 6), V2 = (V1 * q ** 3) / p ** 3, L1 = p * int(r, 2, 5), L2 = (L1 * q) / p;
    return make(this.id, level, seed, { prompt: `Two similar jugs have volumes of ${V1} cm³ and ${V2} cm³. The height of the smaller jug is ${L1} cm. Work out the height of the larger jug.`, answer: valA(F(L1 * q, p)), steps: [`Volume scale factor = ${V2} ÷ ${V1} = ${dtext(F(V2, V1))}`, `Length scale factor = ∛${dtext(F(V2, V1))} = ${dtext(F(q, p))}`, `${L1} × ${dtext(F(q, p))} = ${dtext(F(L1 * q, p))} cm`], traps: [tv(F(L1 * V2, V1), 'That uses the volume scale factor for a length: take the cube root first.'), ...(Number.isInteger(Math.sqrt(V2 / V1)) ? [tv(L1 * Math.sqrt(V2 / V1), 'Volumes use the cube of the scale factor, so take the cube root, not the square root.')] : [])] });
  },
};

/* ═════════ R1, R11 compound units; R14, R15 rates ═════════ */
const unitConvert = {
  id: 'maths.ratio.unit-convert',
  name: 'Convert compound units',
  levels: [{ label: 'Speed: km/h and m/s' }, { label: 'Density and flow rates' }, { label: 'Area and volume units' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.5) { const kmh = pick(r, [18, 36, 45, 54, 72, 90, 108, 126, 144]), ms = F(kmh * 1000, 3600); return make(this.id, level, seed, { prompt: `Change ${kmh} km/h into m/s.`, answer: valA(ms), steps: [`${kmh} km/h = ${kmh * 1000} m in 3600 s`, `${kmh * 1000} ÷ 3600 = ${dtext(ms)} m/s`], traps: [tv(F(kmh * 1000, 60), 'An hour is 3600 seconds, not 60.'), tv(F(kmh * 3600, 1000), 'Multiply by 1000 (km to m) and divide by 3600 (hours to seconds).')] }); }
      const ms = pick(r, [5, 10, 15, 20, 25, 30, 12, 8]), kmh = F(ms * 3600, 1000);
      return make(this.id, level, seed, { prompt: `Change ${ms} m/s into km/h.`, answer: valA(kmh), steps: [`In 1 hour: ${ms} × 3600 = ${ms * 3600} m`, `= ${dtext(kmh)} km, so ${dtext(kmh)} km/h`], traps: [tv(F(ms * 1000, 3600), 'm/s to km/h: × 3600 then ÷ 1000, which is × 3.6.'), tv(F(ms * 60, 1000), 'There are 3600 seconds in an hour.')] });
    }
    if (level === 2) {
      if (r() < 0.5) { const d = pick(r, [F(27, 10), F(79, 10), F(1), F(113, 10), F(19, 2), F(78, 100)]), kg = mul(d, F(1000)); return make(this.id, level, seed, { prompt: `A metal has a density of ${dtext(d)} g/cm³. Write this in kg/m³.`, answer: valA(kg), steps: ['1 m³ = 1 000 000 cm³ and 1 kg = 1000 g', `${dtext(d)} g/cm³ = ${dtext(d)} × 1 000 000 ÷ 1000 kg/m³ = ${dtext(kg)} kg/m³`], traps: [tv(div(d, F(1000)), 'Each m³ holds a million cm³, so the number gets bigger: × 1 000 000 ÷ 1000 = × 1000.'), tv(mul(d, F(1000000)), 'Also change grams into kilograms: ÷ 1000.')] }); }
      const lpm = pick(r, [3, 6, 9, 12, 15, 24, 30, 48]), mls = F(lpm * 1000, 60);
      return make(this.id, level, seed, { prompt: `Water flows from a tap at ${lpm} litres per minute. Write this in millilitres per second.`, answer: valA(mls), steps: [`${lpm} litres = ${lpm * 1000} ml`, `${lpm * 1000} ml in 60 s: ${dtext(mls)} ml/s`], traps: [tv(F(lpm * 60, 1000), 'Litres to millilitres is × 1000; minutes to seconds is ÷ 60.'), tv(F(lpm * 1000, 3600), 'A minute is 60 seconds.')] });
    }
    if (r() < 0.5) { const m2 = pick(r, [F(3), F(5, 2), F(12), F(3, 4), F(1, 2)]), cm2 = mul(m2, F(10000)); return make(this.id, level, seed, { prompt: `Change ${dtext(m2)} m² into cm².`, answer: valA(cm2), steps: ['1 m = 100 cm, so 1 m² = 100 × 100 = 10 000 cm²', `${dtext(m2)} × 10 000 = ${dtext(cm2)} cm²`], traps: [tv(mul(m2, F(100)), 'Area units square the length conversion: 1 m² = 10 000 cm², not 100 cm².')] }); }
    const cm3 = pick(r, [2500, 4000, 750, 12000, 1500, 600]), L = F(cm3, 1000);
    return make(this.id, level, seed, { prompt: `A tank holds ${cm3} cm³ of water. How many litres is this?`, answer: valA(L), steps: ['1 litre = 1000 cm³', `${cm3} ÷ 1000 = ${dtext(L)} litres`], traps: [tv(F(cm3, 100), '1 litre is 1000 cm³, so divide by 1000, not 100.'), tv(F(cm3, 1000000), 'That converts to m³; 1 litre is 1000 cm³.')] });
  },
};

const ratesGraphs = {
  id: 'maths.ratio.rates-graphs',
  name: 'Rates of change from graphs',
  levels: [{ label: 'Gradient as a rate' }, { label: 'Average rate of change', higher: true }, { label: 'Average or instantaneous?', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const start = int(r, 0, 20) * 5, rate = int(r, 2, 15), t = pick(r, [4, 5, 6, 8, 10]), end = start + rate * t;
      const g = { xr: [0, t], yr: [0, Math.ceil(end * 1.2)], xstep: 1, ystep: Math.max(5, Math.ceil(end / 8 / 5) * 5), xlabel: 'Time (minutes)', ylabel: 'Water (litres)', height: 260, polys: [{ pts: [[0, start], [t, end]] }], points: [[0, start, `${start} L`], [t, end, `(${t}, ${end})`]] };
      return make(this.id, level, seed, { prompt: 'The graph shows the amount of water in a tank as it fills. At what rate does it fill, in litres per minute?', graph: g, answer: intAns(rate), steps: [`Gradient = (${end} − ${start}) ÷ ${t}`, `= ${rate} litres per minute`], traps: [tv(F(end, t), `Subtract the starting amount (${start} litres) first.`), tv(F(t, end - start), 'Gradient = change in y ÷ change in x, not the other way round.')] });
    }
    const a = pick(r, [1, 2]), c = int(r, 0, 5), f = x => a * x * x + c, t1 = int(r, 0, 3), t2 = t1 + int(r, 2, 4);
    const g = { xr: [0, t2 + 1], yr: [0, Math.ceil(f(t2 + 1) * 1.1)], ystep: Math.max(2, Math.ceil(f(t2 + 1) / 8)), xlabel: 'Time (s)', ylabel: 'Distance (m)', height: 260, fns: [{ expr: `${a}x^2 + ${c}`, label: `d = ${a === 1 ? '' : a}t² + ${c}` }] };
    if (level === 2) {
      const avg = F(f(t2) - f(t1), t2 - t1);
      g.polys = [{ pts: [[t1, f(t1)], [t2, f(t2)]] }]; g.points = [[t1, f(t1), `(${t1}, ${f(t1)})`], [t2, f(t2), `(${t2}, ${f(t2)})`]];
      return make(this.id, level, seed, { prompt: `An object moves so that its distance is d = ${a === 1 ? '' : a}t^2 + ${c} metres after t seconds. Work out its average speed between t = ${t1} and t = ${t2}.`, graph: g, answer: valA(avg), steps: [`d(${t1}) = ${f(t1)} and d(${t2}) = ${f(t2)}`, `Average speed = gradient of the chord = (${f(t2)} − ${f(t1)}) ÷ (${t2} − ${t1}) = ${dtext(avg)} m/s`], traps: [tv(F(f(t2), t2), `Use the change in distance over the change in time between t = ${t1} and t = ${t2}.`), tv(2 * a * t2, `That is the instantaneous speed at t = ${t2} (the tangent), not the average.`)] });
    }
    const ok = `The speed at t = ${t2} (the tangent's gradient)`;
    const ch = choiceItem(r, ok, [`The average speed from t = ${t1} to t = ${t2} (the chord's gradient)`, 'They are equal', 'It cannot be decided from the graph'], o => (o.startsWith('The average') ? `The curve gets steeper, so the tangent at t = ${t2} is steeper than the chord from t = ${t1}.` : o === 'They are equal' ? 'They are only equal for a straight line.' : 'The curve bends upwards, so the steepness at the end is greater than the average.'));
    g.polys = [{ pts: [[t1, f(t1)], [t2, f(t2)]] }];
    return make(this.id, level, seed, { prompt: `For d = ${a === 1 ? '' : a}t^2 + ${c}, which is greater: the average speed from t = ${t1} to t = ${t2}, or the speed at the instant t = ${t2}?`, graph: g, ...ch, steps: ['Average rate of change = gradient of a chord; instantaneous rate = gradient of the tangent.', `The graph gets steeper as t increases, so at t = ${t2} it is steeper than the chord: ${2 * a * t2} m/s against ${dtext(F(f(t2) - f(t1), t2 - t1))} m/s.`] });
  },
};

export const ratioSkills2 = [propEquation, propGraphs, scaleMaps, similarRatio, unitConvert, ratesGraphs];
