// Edexcel 1MA1 Algebra, batch 5 (gaps): Fibonacci-type unknowns and geometric sequences with a surd
// ratio (A24; Higher: surd ratio), surd expressions in algebra (A4 Higher, with N8), exponential
// graphs in context (A12/A14 Higher), areas under curves and gradients in money contexts (A15 Higher)
// and regions with strict inequalities (A22 Higher). Same contract as the other skill modules.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, gcd, num, fracMarkup } from './frac.js?v=20261023-maths-r9';
import { squareFree } from './exact.js?v=20261023-maths-r9';
import { makeA, fixMinus, choiceItem } from './skills-algebra.js?v=20261023-maths-r9';
import { fmtLine } from './graph.js?v=20261023-maths-r9';

const fr = v => { const f = typeof v === 'number' ? F(v) : v; return { n: f.n, d: f.d }; };
const fv = f => (f.d === 1 ? num(f.n) : fracMarkup(f));
const Z = F(0);
const intAns = v => ({ kind: 'integer', value: v });
const tv = (v, why) => ({ v: typeof v === 'number' ? F(v) : v, why });
const pairs = (list, vars, extra = {}) => ({ kind: 'solutions', vars, sols: list.map(p => p.map(fr)), ...extra });
const sT = (list, why) => ({ sols: list.map(p => p.map(fr)), why });
const ex = (a, b, r) => ({ kind: 'exact', a: fr(a), b: fr(b), r });
const exTrap = (a, b, r, why) => ({ a: fr(a), b: fr(b), r, why });
const sameRows = (a, b) => a.length === b.length && a.every(r => b.some(s => r.every((x, i) => x.n === s[i].n && x.d === s[i].d)));
const surd = (k, s) => (s === 1 ? num(k) : `${k === 1 ? '' : k === -1 ? '−' : num(k)}√${s}`);
const decAns = (f, extra = {}) => ({ kind: 'decimal', value: fr(f), ...extra });

function make(skill, level, seed, o) {
  const it = makeA(skill, level, seed, o);
  if (o.soTraps) it.soTraps = o.soTraps.filter(t => !sameRows(t.sols, o.answer.sols)).map(t => ({ ...t, why: fixMinus(t.why) }));
  if (o.exTraps) {
    const same = t => fr(t.a).n * o.answer.a.d === o.answer.a.n * fr(t.a).d && fr(t.b).n * o.answer.b.d === o.answer.b.n * fr(t.b).d && (t.r === o.answer.r || t.b.n === 0);
    it.exTraps = o.exTraps.filter(t => !same(t)).map(t => ({ ...t, why: fixMinus(t.why) }));
  }
  return it;
}

/* ───────── A24 further sequences ───────── */
const seqFurther = {
  id: 'maths.algebra.seq-further',
  name: 'Fibonacci-type and geometric sequences',
  levels: [{ label: 'Missing terms' }, { label: 'Find the first two terms' }, { label: 'Geometric with a surd ratio', higher: true }, { label: 'Geometric: ratio and first term', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const fib = 'In a Fibonacci-type sequence, each term after the second is the sum of the two terms before it.';
    if (level === 1) {
      const a = int(r, 1, 9), b = int(r, 1, 12), t3 = a + b, t4 = b + t3, t5 = t3 + t4;
      return make(this.id, level, seed, { prompt: `${fib} The first term is ${a} and the third term is ${t3}. Work out the fifth term.`, answer: intAns(t5), steps: [`Second term: ${t3} − ${a} = ${b}`, `Fourth term: ${b} + ${t3} = ${t4}`, `Fifth term: ${t3} + ${t4} = ${t5}`], traps: [tv(t4, `${t4} is the fourth term. Add the third and fourth terms to get the fifth.`), tv(t3 + 2 * (t3 - a), 'The sequence is not arithmetic: each term is the sum of the two before it.')] });
    }
    if (level === 2) {
      const a = int(r, 1, 9), b = int(r, 1, 9), P = a + b, Q = 2 * a + 3 * b;
      return make(this.id, level, seed, { prompt: `${fib} The third term is ${P} and the fifth term is ${Q}. Work out the first two terms.`, answer: pairs([[a, b]], ['a', 'b'], { labels: ['First term:', 'Second term:'] }), steps: ['Let the first two terms be a and b.', 'Terms: a, b, a + b, a + 2b, 2a + 3b', `a + b = ${P} and 2a + 3b = ${Q}`, `Subtract 2 × (a + b) = ${2 * P}: b = ${Q - 2 * P}`, `a = ${P} − ${b} = ${a}`], soTraps: [sT([[b, a]], 'Those are the right numbers in the wrong order: check by building the sequence.')] });
    }
    if (level === 3) {
      const a = int(r, 1, 3), s = pick(r, [2, 3, 5]), term = k => (k % 2 === 0 ? num(a * s ** (k / 2)) : surd(a * s ** ((k - 1) / 2), s));
      const k = pick(r, [5, 6]); // ask for term k + 1 (0-based k)
      const ans = k % 2 === 0 ? ex(F(a * s ** (k / 2)), Z, s) : ex(Z, F(a * s ** ((k - 1) / 2)), s);
      return make(this.id, level, seed, { prompt: `The geometric sequence ${[0, 1, 2, 3].map(term).join(', ')}, … has common ratio √${s}. Work out the ${k + 1}th term. Give your answer in its simplest form.`, answer: ans, steps: [`Each term is the one before × √${s}, and √${s} × √${s} = ${s}.`, `Terms: ${[0, 1, 2, 3, 4, 5, 6].slice(0, k + 1).map(term).join(', ')}`, `The ${k + 1}th term is ${term(k)}.`], exTraps: [exTrap(F(a * s ** k), Z, s, `The ratio is √${s}, not ${s}: two steps multiply by ${s}.`), exTrap(Z, F(a * s ** Math.floor(k / 2)), s, 'Count the terms carefully from the first term.')] });
    }
    const q = int(r, 2, 4), a = int(r, 1, 5), T3 = a * q * q, T5 = a * q ** 4;
    return make(this.id, level, seed, { prompt: `A geometric sequence has a positive common ratio. The third term is ${T3} and the fifth term is ${T5}. Work out the common ratio and the first term.`, answer: pairs([[q, a]], ['r', 'a'], { labels: ['Common ratio:', 'First term:'] }), steps: [`From the 3rd to the 5th term is two steps: r^2 = ${T5} ÷ ${T3} = ${q * q}`, `r = ${q} (positive)`, `First term = ${T3} ÷ ${q}^2 = ${a}`], soTraps: [sT([[q * q, F(T3, q ** 4)]], `${T5} ÷ ${T3} = ${q * q} is r^2, because there are two steps: take the square root.`)] });
  },
};

/* ───────── A4 / N8 surds in algebra ───────── */
const SURDS = [2, 3, 5, 6, 7, 10, 11];
const surdAlgebra = {
  id: 'maths.algebra.surd-algebra',
  name: 'Surd expressions',
  higherOnly: true,
  levels: [{ label: 'Difference of two squares' }, { label: 'Rationalise a + √b denominators' }, { label: 'Square a sum of surds' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.55) {
        const a = int(r, 2, 9), s = pick(r, SURDS);
        return make(this.id, level, seed, { prompt: `Expand and simplify (${a} + √${s})(${a} − √${s})`, answer: intAns(a * a - s), steps: [`(${a} + √${s})(${a} − √${s}) = ${a * a} − ${a}√${s} + ${a}√${s} − ${s}`, `The surd terms cancel: ${a * a} − ${s} = ${num(a * a - s)}`], traps: [tv(a * a + s, `√${s} × (−√${s}) = −${s}: subtract it.`), tv(a * a - s * s, `√${s} × √${s} = ${s} (a square root squared), not ${s * s}.`)] });
      }
      let p, q; do { p = pick(r, SURDS); q = pick(r, SURDS); } while (p === q);
      return make(this.id, level, seed, { prompt: `Expand and simplify (√${p} + √${q})(√${p} − √${q})`, answer: intAns(p - q), steps: [`= √${p} × √${p} − √${q} × √${q} (the middle terms cancel)`, `= ${p} − ${q} = ${num(p - q)}`], traps: [tv(p + q, `The last term is −√${q} × √${q} = −${q}, so subtract ${q}.`), tv(p * p - q * q, `√${p} × √${p} = ${p} (a square root squared), not ${p * p}.`)] });
    }
    if (level === 2) {
      for (;;) {
        const a = int(r, 1, 6), s = pick(r, SURDS), D = a * a - s, minus = r() < 0.4;
        if (D === 0 || Math.abs(D) > 40) continue;
        const k = r() < 0.6 ? D * int(r, 1, 3) * (D < 0 ? -1 : 1) : int(r, 1, 9);
        if (k === 0) continue;
        const A = F(k * a, D), B = F(minus ? k : -k, D);
        const conj = minus ? `${a} + √${s}` : `${a} − √${s}`;
        return make(this.id, level, seed, { prompt: `Rationalise the denominator of {${k}/${a} ${minus ? '−' : '+'} √${s}}. Give your answer in the form p + q√${s}.`, answer: ex(A, B, s), steps: [`Multiply the top and the bottom by ${conj}.`, `Bottom: (${a} ${minus ? '−' : '+'} √${s})(${conj}) = ${a * a} − ${s} = ${num(D)}`, `Top: ${k}(${conj})`, `= ${fv(A)} ${B.n < 0 ? '−' : '+'} ${fv(F(Math.abs(B.n), B.d))}√${s}`], exTraps: [exTrap(A, F(-B.n, B.d), s, `Multiply by the conjugate, ${conj}: the sign in front of √${s} changes.`), exTrap(F(k * a, a * a + s), F(-k, a * a + s), s, `(${a} + √${s})(${a} − √${s}) = ${a * a} − ${s}, not ${a * a} + ${s}.`)] });
      }
    }
    if (r() < 0.65) {
      let p, q; do { p = pick(r, SURDS); q = pick(r, SURDS); } while (p === q || Number.isInteger(Math.sqrt(p * q)));
      const { k, s } = squareFree(p * q);
      return make(this.id, level, seed, { prompt: `Expand and simplify (√${p} + √${q})^2. Give your answer in the form a + b√c.`, answer: ex(F(p + q), F(2 * k), s), steps: [`(√${p} + √${q})(√${p} + √${q}) = ${p} + √${p * q} + √${p * q} + ${q}`, `= ${p + q} + 2√${p * q}`, ...(k > 1 ? [`√${p * q} = ${k}√${s}, so 2√${p * q} = ${2 * k}√${s}`] : []), `= ${p + q} + ${surd(2 * k, s)}`], exTraps: [exTrap(F(p + q), Z, s, 'Squaring a bracket gives a middle term: (√p + √q)^2 = p + 2√(pq) + q.')] });
    }
    const a = int(r, 2, 6), s = pick(r, SURDS);
    return make(this.id, level, seed, { prompt: `Simplify (${a} + √${s})^2 − (${a} − √${s})^2`, answer: ex(Z, F(4 * a), s), steps: [`(${a} + √${s})^2 = ${a * a + s} + ${2 * a}√${s}`, `(${a} − √${s})^2 = ${a * a + s} − ${2 * a}√${s}`, `Subtract: ${4 * a}√${s}`], exTraps: [exTrap(Z, F(2 * a), s, `Subtracting −${2 * a}√${s} adds it, so the result is twice ${2 * a}√${s}.`), exTrap(Z, Z, s, 'The squares are not equal: each has a middle term with opposite signs.')] });
  },
};

/* ───────── A14 Higher: exponential graphs in context ───────── */
const expGraph = {
  id: 'maths.algebra.graph-exponential',
  name: 'Exponential growth and decay',
  higherOnly: true,
  levels: [{ label: 'Use y = ab^x' }, { label: 'Find a and b from a graph' }, { label: 'When does it pass a value?' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.55) {
        const a = int(r, 2, 40) * 10, b = pick(r, [2, 3]), t = int(r, 2, b === 2 ? 6 : 4), v = a * b ** t;
        return make(this.id, level, seed, { prompt: `The number of bacteria in a dish after t hours is N = ${a} × ${b}^t. Work out N when t = ${t}.`, answer: intAns(v), steps: [`${b}^${t} = ${b ** t}`, `${a} × ${b ** t} = ${v}`], traps: [tv((a * b) ** t, `Work out ${b}^${t} first, then multiply by ${a}: the power applies only to ${b}.`), tv(a * b * t, `${b}^${t} means ${b} multiplied by itself ${t} times, not ${b} × ${t}.`)] });
      }
      const t = int(r, 2, 4), a = 2 ** t * int(r, 3, 40) * 5, v = a / 2 ** t;
      return make(this.id, level, seed, { prompt: `The mass of a radioactive sample, in grams, after t days is M = ${a} × 0.5^t. Work out M when t = ${t}.`, answer: intAns(v), steps: [`0.5^${t} = {1/${2 ** t}}`, `${a} ÷ ${2 ** t} = ${v}`], traps: [tv(F(a * t, 2), `0.5^${t} means 0.5 multiplied by itself ${t} times, not 0.5 × ${t}.`), tv(a / 2, `That is after 1 day. Halve ${t} times.`)] });
    }
    if (level === 2) {
      const growth = r() < 0.65, a = growth ? int(r, 1, 5) : 2 ** int(r, 3, 5), b = growth ? pick(r, [2, 3]) : F(1, 2), x2 = 2;
      const bv = growth ? b : 0.5, y2 = a * bv ** x2;
      const g = { xr: [-1, 4], yr: [0, Math.ceil((growth ? a * bv ** 3 : a) * 1.15)], ystep: Math.max(1, Math.ceil((growth ? a * bv ** 3 : a) / 10)), fns: [{ expr: `${a}*${bv}^x`, label: 'y = ab^x' }], points: [[0, a, `(0, ${a})`], [x2, y2, `(${x2}, ${y2})`]] };
      return make(this.id, level, seed, { prompt: `The graph of y = ab^x passes through (0, ${a}) and (2, ${y2}). Work out a and b.`, graph: g, answer: pairs([[a, b]], ['a', 'b'], { labels: ['a =', 'b ='] }), steps: [`At x = 0, b^0 = 1, so y = a: a = ${a}`, `At x = 2: ${a}b^2 = ${y2}, so b^2 = ${fv(F(y2, a))}`, `b = ${fv(growth ? F(b) : b)} (b is positive)`], soTraps: [sT([[a, F(y2 - a, 2)]], 'y = ab^x is not a straight line: b is a multiplier, not a step. Use b^2 = y ÷ a.'), sT([[a, F(y2, a)]], `${fv(F(y2, a))} is b^2, because x went up by 2: take the square root.`)] });
    }
    for (;;) {
      const growth = r() < 0.5;
      if (growth) {
        const P = int(r, 2, 9) * 100, pct = pick(r, [5, 8, 10, 12, 15, 20]), m = 1 + pct / 100, X = P * pick(r, [2, 3]);
        let t = 0; while (P * m ** t <= X && t < 80) t++;
        if (Math.abs(P * m ** t - X) < 0.5 || Math.abs(P * m ** (t - 1) - X) < 0.5) continue;
        return make(this.id, level, seed, { prompt: `An investment of £${P} grows by ${pct}% each year, so its value after t years is V = ${P} × ${m}^t. After how many whole years is it first worth more than £${X}?`, calculator: true, answer: intAns(t), steps: [`Try values of t: t = ${t - 1} gives £${(P * m ** (t - 1)).toFixed(2)}`, `t = ${t} gives £${(P * m ** t).toFixed(2)}, more than £${X}`, `${t} years`], traps: [tv(t - 1, `After ${t - 1} years it is worth £${(P * m ** (t - 1)).toFixed(2)}, not yet more than £${X}.`), tv(Math.ceil((X - P) / (P * pct / 100)), 'That treats the growth as the same amount each year (simple interest). Compound growth multiplies each year.')] });
      }
      const P = int(r, 8, 30) * 1000, pct = pick(r, [10, 15, 20, 25]), m = 1 - pct / 100, X = Math.round(P * pick(r, [0.3, 0.4, 0.5]));
      let t = 0; while (P * m ** t >= X && t < 80) t++;
      if (Math.abs(P * m ** t - X) < 0.5 || Math.abs(P * m ** (t - 1) - X) < 0.5) continue;
      return make(this.id, level, seed, { prompt: `A car worth £${P} loses ${pct}% of its value each year, so its value after t years is V = ${P} × ${m}^t. After how many whole years is it first worth less than £${X}?`, calculator: true, answer: intAns(t), steps: [`t = ${t - 1}: £${(P * m ** (t - 1)).toFixed(2)}`, `t = ${t}: £${(P * m ** t).toFixed(2)}, less than £${X}`, `${t} years`], traps: [tv(t - 1, `After ${t - 1} years it is still worth £${(P * m ** (t - 1)).toFixed(2)}.`), tv(Math.ceil((P - X) / (P * pct / 100)), 'The car loses a percentage of its current value each year, not the same amount.')] });
    }
  },
};

/* ───────── A15 Higher: areas under curves; money gradients ───────── */
function strips(r) {
  for (;;) {
    const h = pick(r, [1, 2, 5]), n = 4, convex = r() < 0.5, p = int(r, 1, 3);
    const c = int(r, 0, 10), T = h * n;
    const f = convex ? t => (p * t * t) / (h * h) + c : t => c + (2 * p * n * t) / h - (p * t * t) / (h * h);
    const ys = Array.from({ length: n + 1 }, (_, i) => f(i * h));
    if (!ys.every(Number.isInteger) || ys.some(y => y < 0)) continue;
    const expr = convex ? `${p}/${h * h}x^2 + ${c}` : `${c} + ${(2 * p * n) / h}x - ${p}/${h * h}x^2`;
    return { h, n, T, ys, convex, expr, f };
  }
}
const areaCurve = {
  id: 'maths.algebra.area-curve',
  name: 'Areas under curves and gradients in context',
  higherOnly: true,
  levels: [{ label: 'Estimate an area with trapezia' }, { label: 'Overestimate or underestimate?' }, { label: 'Gradients in money graphs' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level < 3) {
      const S = strips(r), { h, n, T, ys } = S, top = Math.max(...ys);
      const trap = ys.slice(0, -1).map((y, i) => ({ pts: [[i * h, 0], [i * h, y], [(i + 1) * h, ys[i + 1]], [(i + 1) * h, 0]] }));
      const g = { xr: [0, T], yr: [0, Math.ceil(top * 1.15) || 1], xstep: h, ystep: Math.max(1, Math.ceil(top / 8)), xlabel: 'Time (s)', ylabel: 'Velocity (m/s)', height: 260, fns: [{ expr: S.expr }], polys: trap };
      const area = F(h * (ys[0] + ys[n] + 2 * ys.slice(1, -1).reduce((s, y) => s + y, 0)), 2);
      if (level === 1) {
        const left = h * ys.slice(0, -1).reduce((s, y) => s + y, 0), right = h * ys.slice(1).reduce((s, y) => s + y, 0);
        return make(this.id, level, seed, { prompt: `The graph shows the velocity of a cyclist for ${T} seconds. The velocities at t = ${ys.map((_, i) => i * h).join(', ')} are ${ys.join(', ')} m/s. Use ${n} strips of equal width to estimate the distance travelled.`, graph: g, answer: decAns(area), steps: [`Each strip is ${h} s wide; each is a trapezium.`, `Area ≈ {${h}/2}(${ys[0]} + 2(${ys.slice(1, -1).join(' + ')}) + ${ys[n]})`, `= ${fv(area)} m`], traps: [tv(left, 'That uses rectangles at the left of each strip. A trapezium uses both ends: {1/2}(a + b)h.'), tv(right, 'That uses rectangles at the right of each strip. Use trapezia.'), tv(mul(area, F(2, h)), `Multiply by {${h}/2}: each trapezium has area {1/2}(a + b) × ${h}.`)] });
      }
      const ok = S.convex ? 'An overestimate: the tops of the trapezia lie above the curve' : 'An underestimate: the tops of the trapezia lie below the curve';
      const bad = { 'An overestimate: the tops of the trapezia lie above the curve': 'Look at the graph: the curve bends outwards above the straight tops, so the trapezia miss some area.', 'An underestimate: the tops of the trapezia lie below the curve': 'Look at the graph: the curve sags below the straight tops, so the trapezia include extra area.', 'Exactly right, because trapezia always give the exact area': 'Trapezia have straight tops; a curve does not, so the estimate is not exact.', 'It cannot be decided without more strips': 'Whether the tops are above or below the curve decides it; you can see that from the shape.' };
      const ch = choiceItem(r, ok, Object.keys(bad).filter(k => k !== ok).slice(0, 3), o => bad[o]);
      return make(this.id, level, seed, { prompt: `The trapezium rule with ${n} strips is used to estimate the area under this velocity–time graph. Is the estimate too big or too small?`, graph: g, ...ch, steps: [S.convex ? 'The curve bends upwards (it gets steeper), so each straight top lies above the curve.' : 'The curve bends downwards (it gets less steep), so each straight top lies below the curve.', ok] });
    }
    if (r() < 0.6) {
      const Fc = int(r, 5, 20), M = pick(r, [100, 200, 300, 400, 500]), p = int(r, 2, 15), C = Fc + (p * M) / 100;
      if (!Number.isInteger(C)) return this.gen(level, seed + 'c');
      const g = { xr: [0, M], yr: [0, Math.ceil(C * 1.2)], xstep: M / 5, ystep: Math.max(1, Math.ceil(C / 8)), xlabel: 'Minutes', ylabel: 'Cost (£)', height: 260, polys: [{ pts: [[0, Fc], [M, C]] }], points: [[0, Fc, `£${Fc}`], [M, C, `(${M}, £${C})`]] };
      return make(this.id, level, seed, { prompt: `The graph shows a monthly phone bill: a fixed charge plus a cost for each minute. Work out the cost per minute, in pence.`, graph: g, answer: intAns(p), steps: [`The gradient is the cost per minute: (£${C} − £${Fc}) ÷ ${M} minutes`, `= £${fv(F(C - Fc, M))} = ${p}p per minute`, `The y-intercept, £${Fc}, is the fixed monthly charge.`], traps: [tv(F(C * 100, M), `That divides the whole bill by the minutes. Subtract the fixed charge (£${Fc}) first: use the gradient.`), tv(Fc, `£${Fc} is the fixed charge (the y-intercept), not the cost per minute.`)] });
    }
    const S0 = int(r, 0, 10) * 50, m = int(r, 2, 12) * 10, n = int(r, 6, 12), V = S0 + m * n;
    const g = { xr: [0, n], yr: [0, Math.ceil(V * 1.15)], xstep: 1, ystep: Math.max(10, Math.ceil(V / 8 / 10) * 10), xlabel: 'Months', ylabel: 'Savings (£)', height: 260, polys: [{ pts: [[0, S0], [n, V]] }], points: [[0, S0, `£${S0}`], [n, V, `(${n}, £${V})`]] };
    return make(this.id, level, seed, { prompt: `The graph shows Ali's savings. She saves the same amount each month. How much does she save each month?`, graph: g, answer: intAns(m), steps: [`Gradient = change in savings ÷ change in time`, `(£${V} − £${S0}) ÷ ${n} = £${m} per month`], traps: [tv(F(V, n), `Subtract the starting amount (£${S0}) first.`), tv(S0, `£${S0} is what she started with (the intercept).`)] });
  },
};

/* ───────── A22 Higher: strict inequalities on graphs ───────── */
const LINE_OPTS = ['Dashed: points on the line are not included', 'Solid: points on the line are included', 'Dashed: points on the line are included', 'Solid: points on the line are not included'];
function regionSetup(r) {
  for (;;) {
    const a = int(r, -2, 0), b = int(r, -2, 0), m = pick(r, [-1, -2]), c = int(r, 2, 5);
    const sa = r() < 0.5, sb = r() < 0.5, sc = r() < 0.5; // strict?
    if (!sa && !sb && !sc) continue;
    const ins = (x, y) => (sa ? x > a : x >= a) && (sb ? y > b : y >= b) && (sc ? y < m * x + c : y <= m * x + c);
    const inside = []; for (let x = -6; x <= 7; x++) for (let y = -6; y <= 9; y++) if (ins(x, y)) inside.push([x, y]);
    const loose = []; for (let x = -6; x <= 7; x++) for (let y = -6; y <= 9; y++) if (x >= a && y >= b && y <= m * x + c) loose.push([x, y]);
    if (inside.length < 2 || inside.length > 12 || loose.length === inside.length) continue;
    const xi = (b - c) / m;
    const g = { xr: [-4, 7], yr: [-4, 8], fns: [{ expr: `${m}x + ${c}`, label: `y = ${fmtLine(m, c)}`, dash: sc }, { expr: `${b}`, label: `y = ${num(b)}`, dash: sb }], vlines: [{ x: a, dash: sa, label: `x = ${num(a)}` }], region: [[a, b], [a, m * a + c], [xi, b]] };
    const txt = (s, l, op1, op2) => `${l} ${s ? op1 : op2}`;
    const set = [txt(sa, 'x', `> ${num(a)}`, `≥ ${num(a)}`), txt(sb, 'y', `> ${num(b)}`, `≥ ${num(b)}`), txt(sc, 'y', `< ${fmtLine(m, c)}`, `≤ ${fmtLine(m, c)}`)];
    return { a, b, m, c, sa, sb, sc, inside, g, set };
  }
}
const regionsStrict = {
  id: 'maths.algebra.regions-strict',
  name: 'Strict and inclusive inequalities on graphs',
  higherOnly: true,
  levels: [{ label: 'Solid or dashed?' }, { label: 'Describe the region' }, { label: 'Integer points in a region' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const m = pick(r, [1, 2, 3, -1, -2]), c = int(r, -4, 5), op = pick(r, ['<', '≤', '>', '≥']), strict = op === '<' || op === '>';
      const ok = strict ? LINE_OPTS[0] : LINE_OPTS[1];
      const ch = choiceItem(r, ok, LINE_OPTS.filter(o => o !== ok), o => (o.includes('not included') && o.startsWith('Solid') ? 'A solid line shows that points on it are included.' : o.startsWith('Dashed') && o.endsWith(' included') && !o.includes('not') ? 'A dashed line shows that points on it are not included.' : strict ? `${op} does not include equality, so points on the line are not in the region.` : `${op} includes equality, so points on the line are in the region.`));
      return make(this.id, level, seed, { prompt: `The region y ${op} ${fmtLine(m, c)} is shown on a graph. How should the line y = ${fmtLine(m, c)} be drawn?`, ...ch, steps: [strict ? `${op} is strict: equality is not included, so draw a dashed line.` : `${op} includes equality, so draw a solid line.`] });
    }
    const R = regionSetup(r);
    if (level === 2) {
      const right = R.set.join(', ');
      const flip = i => R.set.map((t, j) => (j !== i ? t : t.replace(/≥|>|≤|</, s => ({ '≥': '>', '>': '≥', '≤': '<', '<': '≤' })[s]))).join(', ');
      const wrong = [flip(0), flip(1), flip(2)];
      const why = o => { const i = wrong.indexOf(o); const line = ['x = ' + num(R.a), 'y = ' + num(R.b), 'y = ' + fmtLine(R.m, R.c)][i]; const was = [R.sa, R.sb, R.sc][i]; return `Look at ${line}: it is ${was ? 'dashed, so that inequality is strict (< or >)' : 'solid, so that inequality includes equality (≤ or ≥)'}.`; };
      const ch = choiceItem(r, right, wrong, why);
      return make(this.id, level, seed, { prompt: 'Which inequalities describe the shaded region? Dashed lines are not included; solid lines are.', graph: R.g, ...ch, steps: ['For each line, decide which side the region is on.', 'Dashed line: strict inequality (< or >). Solid line: ≤ or ≥.', right] });
    }
    return make(this.id, level, seed, { prompt: `Plot every point with integer coordinates that satisfies ${R.set.join(', ').replace(/, ([^,]*)$/, ' and $1')}.`, graph: R.g, answer: { kind: 'points', points: R.inside.map(([x, y]) => [x || 0, y || 0]), grid: { xr: R.g.xr, yr: R.g.yr, fns: R.g.fns, vlines: R.g.vlines } }, steps: ['Points on a dashed (strict) boundary are not included; points on a solid boundary are.', `${R.inside.length} points: ${R.inside.map(([x, y]) => `(${num(x)}, ${num(y)})`).join(', ')}`] });
  },
};

export const algebraSkills4 = [seqFurther, surdAlgebra, expGraph, areaCurve, regionsStrict];
