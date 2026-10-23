// Edexcel 1MA1 Algebra, graphs: coordinates (A8), straight lines (A9, A10; Higher: perpendicular),
// quadratic, cubic and reciprocal graphs (A11, A12; Higher: exponential and trigonometric graphs),
// transformations (A13, Higher), graphical solutions (A17–A19), regions (A22, Higher), real-life
// graphs (A14), gradients and areas under graphs (A15, Higher) and circles (A16, Higher).
// Items may carry `graph` (a graph.js spec drawn above the answer box).
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r9';
import { F, num, fracMarkup, gcd } from './frac.js?v=20261023-maths-r9';
import { fnOf, fmtLine } from './graph.js?v=20261023-maths-r9';
import { polyM, makeA, fixMinus, algAns, algTrap, valAns, choiceItem } from './skills-algebra.js?v=20261023-maths-r9';

const fr = v => { const f = typeof v === 'number' ? (Number.isInteger(v) ? F(v) : F(Math.round(v * 1000), 1000)) : v; return { n: f.n, d: f.d }; };
const nz = (r, lo, hi) => { let v; do v = int(r, lo, hi); while (v === 0); return v; };
const fv = f => (f.d === 1 ? num(f.n) : fracMarkup(f));
const pair = (x, y, labels = ['x =', 'y =']) => ({ kind: 'solutions', vars: ['x', 'y'], labels, sols: [[fr(x), fr(y)]] });
const pairs = (list, extra = {}) => ({ kind: 'solutions', vars: ['x', 'y'], sols: list.map(([x, y]) => [fr(x), fr(y)]), ...extra });
const roots = (list, extra = {}) => ({ kind: 'solutions', vars: ['x'], sols: list.map(v => [fr(v)]), ...extra });
const sT = (list, why) => ({ sols: list.map(p => (Array.isArray(p) ? p.map(fr) : [fr(p)])), why });
const tv = (v, why) => ({ v: typeof v === 'number' ? F(Math.round(v * 1000), 1000) : v, why });
const dec = (v, extra = {}) => { const f = F(Math.round(v * 1000), 1000); return { kind: 'decimal', value: { n: f.n, d: f.d }, ...extra }; };
const grid = (xr, yr, extra = {}) => ({ xr, yr, ...extra });
const pointsAns = (points, g) => ({ kind: 'points', points: points.map(([x, y]) => [x || 0, y || 0]), grid: g });
const lineAns = (m, c, g) => ({ kind: 'line', m: fr(m), c: fr(c), grid: g });
const lineText = (m, c) => `y = ${fmtLine(m.n !== undefined ? m.n / m.d : m, c.n !== undefined ? c.n / c.d : c)}`;
const sameRows = (a, b) => a.length === b.length && a.every(r => b.some(s => r.every((x, i) => x.n === s[i].n && x.d === s[i].d)));
const pt = (x, y) => `(${num(x)}, ${num(y)})`;

function make(skill, level, seed, o) {
  const it = makeA(skill, level, seed, o);
  if (o.soTraps) it.soTraps = o.soTraps.filter(t => !sameRows(t.sols, o.answer.sols)).map(t => ({ ...t, why: fixMinus(t.why) }));
  return it;
}
const rangeOf = (vals, pad = 1) => [Math.min(...vals) - pad, Math.max(...vals) + pad];

/* ───────── A8 coordinates ───────── */
const coords = {
  id: 'maths.algebra.graph-coords',
  name: 'Coordinates in four quadrants',
  levels: [{ label: 'Read coordinates' }, { label: 'Plot points' }, { label: 'Midpoints' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      let x, y; do { x = int(r, -6, 6); y = int(r, -6, 6); } while (x === y || x === 0 || y === 0);
      const L = pick(r, ['A', 'B', 'P', 'Q']);
      return make(this.id, level, seed, { prompt: `Write down the coordinates of point ${L}.`, graph: grid([-7, 7], [-7, 7], { points: [[x, y, L]] }), answer: pair(x, y), steps: [`Across first: ${L} is ${Math.abs(x)} ${x > 0 ? 'right' : 'left'} of the origin, so x = ${num(x)}.`, `Then up or down: ${Math.abs(y)} ${y > 0 ? 'up' : 'down'}, so y = ${num(y)}.`, `${L} = ${pt(x, y)}`], soTraps: [sT([[y, x]], 'Coordinates are (across, up): the x value comes first.'), sT([[-x, y]], `Left of the y-axis means x is negative; right means positive.`)] });
    }
    if (level === 2) {
      const pts = [];
      while (pts.length < 3) { const p = [int(r, -5, 5), int(r, -5, 5)]; if (p[0] !== p[1] && !pts.some(q => q[0] === p[0] && q[1] === p[1])) pts.push(p); }
      return make(this.id, level, seed, { prompt: `Plot the points ${pts.map(([x, y], i) => `${'PQR'[i]}${pt(x, y)}`).join(', ')}.`, answer: pointsAns(pts, grid([-6, 6], [-6, 6])), steps: pts.map(([x, y], i) => `${'PQR'[i]}: go ${Math.abs(x)} ${x >= 0 ? 'right' : 'left'}, then ${Math.abs(y)} ${y >= 0 ? 'up' : 'down'}.`) });
    }
    if (r() < 0.6) {
      const x1 = int(r, -6, 6), y1 = int(r, -6, 6), x2 = x1 + 2 * nz(r, -4, 4), y2 = y1 + 2 * int(r, -4, 4);
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      return make(this.id, level, seed, { prompt: `A is ${pt(x1, y1)} and B is ${pt(x2, y2)}. Find the coordinates of the midpoint of AB.`, answer: pair(mx, my), steps: [`Midpoint = (mean of the x values, mean of the y values)`, `x: (${num(x1)} + ${num(x2)}) ÷ 2 = ${num(mx)}`, `y: (${num(y1)} + ${num(y2)}) ÷ 2 = ${num(my)}`], soTraps: [sT([[(x2 - x1) / 2, (y2 - y1) / 2]], 'Add the coordinates and halve: the midpoint is the mean, not half the difference.'), sT([[x1 + x2, y1 + y2]], 'Remember to halve the totals.')] });
    }
    const mx = int(r, -4, 5), my = int(r, -4, 5), x1 = mx - nz(r, -4, 4), y1 = my - int(r, -4, 4), x2 = 2 * mx - x1, y2 = 2 * my - y1;
    return make(this.id, level, seed, { prompt: `M ${pt(mx, my)} is the midpoint of AB. A is ${pt(x1, y1)}. Find the coordinates of B.`, answer: pair(x2, y2), steps: [`From A to M: x changes by ${num(mx - x1)}, y changes by ${num(my - y1)}.`, `Do the same again from M: B = ${pt(x2, y2)}`], soTraps: [sT([[(x1 + mx) / 2, (y1 + my) / 2]], 'That is the midpoint of AM. B is as far beyond M as A is before it.')] });
  },
};

/* ───────── A9 plotting straight lines ───────── */
const plotLine = {
  id: 'maths.algebra.graph-plot-line',
  name: 'Draw straight-line graphs',
  levels: [{ label: 'y = mx + c' }, { label: 'Negative and fractional gradients' }, { label: 'Rearrange first' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), g = grid([-5, 5], [-8, 8]);
    if (level === 1) {
      const m = int(r, 1, 3), c = int(r, -4, 4);
      return make(this.id, level, seed, { prompt: `Draw the graph of ${lineText(m, c)} for x from −4 to 4.`, answer: lineAns(m, c, g), steps: ['Make a table: choose x = 0, 1 and 2.', `x = 0: y = ${num(c)}; x = 1: y = ${num(m + c)}; x = 2: y = ${num(2 * m + c)}`, 'Plot the points and join them with a straight line.'] });
    }
    if (level === 2) {
      const m = pick(r, [F(-1), F(-2), F(-3), F(1, 2), F(-1, 2), F(3, 2)]), c = int(r, -3, 4), mv = m.n / m.d, xs = m.d === 2 ? [0, 2, 4] : [0, 1, 2];
      return make(this.id, level, seed, { prompt: `Draw the graph of ${lineText(m, F(c))} for x from −4 to 4.`, answer: lineAns(m, c, g), steps: [`Choose x values that give whole-number y values: ${xs.join(', ')}.`, xs.map(x => `x = ${x}: y = ${num(mv * x + c)}`).join('; '), 'Plot and join with a ruler.'] });
    }
    for (;;) {
      const kind = pick(r, ['ax+by=c', 'ky=']);
      if (kind === 'ky=') {
        const k = int(r, 2, 3), m = nz(r, -2, 3), c = int(r, -3, 3);
        return make(this.id, level, seed, { prompt: `Draw the graph of ${k}y = ${polyM([[k * m, 'x'], [k * c, '']])}.`, answer: lineAns(m, c, g), steps: [`Divide by ${k}: ${lineText(m, c)}`, `x = 0: y = ${num(c)}; x = 1: y = ${num(m + c)}`, 'Plot and join.'] });
      }
      const a = int(r, 1, 3), b = pick(r, [1, 2, 3]), cc = int(r, -6, 12), m = F(-a, b), c = F(cc, b);
      if (gcd(a, b) !== 1 || Math.abs(cc / b) > 6) continue;
      const x0 = cc % a === 0 ? cc / a : null;
      return make(this.id, level, seed, { prompt: `Draw the graph of ${polyM([[a, 'x'], [b, 'y']])} = ${num(cc)}.`, answer: lineAns(m, c, g), steps: [`Rearrange: ${b === 1 ? '' : b}y = ${polyM([[-a, 'x'], [cc, '']])}, so ${lineText(m, c)}`, `Find two easy points, for example where it crosses the axes${x0 !== null ? `: (0, ${fv(c)}) and (${num(x0)}, 0)` : ''}.`, 'Plot and join.'] });
    }
  },
};

/* ───────── A9/A10 equations of lines ───────── */
const lineEq = {
  id: 'maths.algebra.graph-line-equation',
  name: 'Gradients, intercepts and equations of lines',
  levels: [{ label: 'Gradient and intercept' }, { label: 'Through two points; parallel lines' }, { label: 'Perpendicular lines', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const yAns = (m, c) => algAns(fmtLine(m.n / m.d, c.n / c.d), 'any', ['x', 'y'], { subject: 'y' });
    if (level === 1) {
      const kind = pick(r, ['read', 'rearr', 'graph']);
      if (kind === 'graph') {
        const m = pick(r, [F(1), F(2), F(3), F(-1), F(-2), F(1, 2), F(-1, 2), F(2, 3), F(-3, 2)]), c = int(r, -3, 3);
        return make(this.id, level, seed, { prompt: 'Find the gradient of the straight line shown.', graph: grid([-5, 5], [-7, 7], { fns: [{ expr: `${m.n}/${m.d}x + ${c}` }], points: [[0, c], [m.d, c + m.n]] }), answer: valAns(m), steps: ['Pick two points on the line where it crosses grid corners.', 'Gradient = change in y ÷ change in x.', `Gradient = ${fv(m)}`], traps: [tv(F(m.d, m.n), 'Gradient is the change in y divided by the change in x (up ÷ across), not across ÷ up.'), tv(F(-m.n, m.d), `The line ${m.n > 0 ? 'rises' : 'falls'} from left to right, so the gradient is ${m.n > 0 ? 'positive' : 'negative'}.`)], note: 'You may give a fraction or a decimal.' });
      }
      const m = nz(r, -6, 6), c = nz(r, -9, 9);
      if (kind === 'read') return make(this.id, level, seed, { prompt: `Write down the gradient and the y-intercept of ${lineText(m, c)}.`, answer: pair(m, c, ['gradient =', 'y-intercept =']), steps: [`In y = mx + c, m is the gradient and c is the y-intercept.`, `Gradient ${num(m)}, y-intercept ${num(c)}`], soTraps: [sT([[c, m]], 'The gradient is the number multiplying x; the y-intercept is the number on its own.')] });
      const k = int(r, 2, 4);
      return make(this.id, level, seed, { prompt: `Write down the gradient and the y-intercept of the line ${k}y = ${polyM([[k * m, 'x'], [k * c, '']])}.`, answer: pair(m, c, ['gradient =', 'y-intercept =']), steps: [`Divide by ${k} to make y the subject: ${lineText(m, c)}`, `Gradient ${num(m)}, y-intercept ${num(c)}`], soTraps: [sT([[k * m, k * c]], `Make y the subject first: divide everything by ${k}.`), sT([[c, m]], 'The gradient multiplies x; the y-intercept is the number on its own.')] });
    }
    if (level === 2) {
      if (r() < 0.5) {
        const m = nz(r, -4, 4), c = int(r, -6, 6), x1 = int(r, -3, 2), x2 = x1 + int(r, 1, 4);
        return make(this.id, level, seed, { prompt: `Find the equation of the line through ${pt(x1, m * x1 + c)} and ${pt(x2, m * x2 + c)}.`, answer: yAns(F(m), F(c)), steps: [`Gradient = (${num(m * x2 + c)} − ${num(m * x1 + c)}) ÷ (${num(x2)} − ${num(x1)}) = ${num(m)}`, `Substitute ${pt(x1, m * x1 + c)} into y = ${num(m)}x + c: c = ${num(c)}`, lineText(m, c)], note: 'Write your answer as y = …', alTraps: [algTrap(fmtLine(1 / m, c), 'Gradient = change in y ÷ change in x, not the other way round.'), algTrap(fmtLine(m, m * x1 + c), `The y-intercept is where x = 0, not the y value at x = ${num(x1)}.`)] });
      }
      const m = nz(r, -4, 4), c1 = int(r, -6, 6), px = int(r, -3, 3), py = int(r, -6, 6), c = py - m * px;
      return make(this.id, level, seed, { prompt: `Find the equation of the line parallel to ${lineText(m, c1)} that passes through ${pt(px, py)}.`, answer: yAns(F(m), F(c)), steps: [`Parallel lines have the same gradient: ${num(m)}.`, `y = ${num(m)}x + c through ${pt(px, py)}: ${num(py)} = ${num(m * px)} + c, so c = ${num(c)}`, lineText(m, c)], note: 'Write your answer as y = …', alTraps: [algTrap(fmtLine(m, c1), `A parallel line has the same gradient but passes through ${pt(px, py)}, so its intercept changes.`), algTrap(fmtLine(m, py), `c is the y-intercept (where x = 0), not the y-coordinate of ${pt(px, py)}.`)] });
    }
    const m = pick(r, [F(2), F(-2), F(3), F(1, 2), F(-1, 3), F(3, 2), F(-4, 3)]), perp = F(-m.d, m.n);
    const px = perp.d * int(r, -2, 2), py = int(r, -5, 5);
    const c = F(py * perp.d - perp.n * px, perp.d);
    return make(this.id, level, seed, { prompt: `Find the equation of the line perpendicular to ${lineText(m, F(int(r, -4, 4)))} that passes through ${pt(px, py)}.`, answer: yAns(perp, c), steps: [`Perpendicular gradients multiply to −1: the new gradient is the negative reciprocal of ${fv(m)}, which is ${fv(perp)}.`, `Substitute ${pt(px, py)}: ${num(py)} = ${fv(perp)} × ${px < 0 ? '(' + num(px) + ')' : num(px)} + c, so c = ${fv(c)}`, lineText(perp, c)], note: 'Write your answer as y = …', alTraps: [algTrap(fmtLine(m.d / m.n, c.n / c.d), 'Perpendicular means the negative reciprocal: change the sign as well as turning the fraction over.'), algTrap(fmtLine(-m.n / m.d, py + (m.n / m.d) * px), 'Turn the gradient upside down as well as changing its sign.')] });
  },
};

/* ───────── A10/A14 interpreting linear graphs ───────── */
const CONTEXTS = [
  { eq: 'C = 2.5m + 4', q: 'A taxi charges £C for a journey of m miles: C = 2.5m + 4. What does the 2.5 represent?', right: 'The cost per mile, in £', wrong: ['The fixed charge, in £', 'The number of miles', 'The total cost of a 1-mile journey'] },
  { eq: 'C = 35h + 50', q: 'A plumber charges £C for h hours of work: C = 35h + 50. What does the 50 represent?', right: 'The call-out charge before any work, in £', wrong: ['The cost per hour, in £', 'The number of hours', 'The total cost of 1 hour'] },
  { eq: 'h = 20 − 1.5t', q: 'A candle is h cm tall t hours after being lit: h = 20 − 1.5t. What does the −1.5 represent?', right: 'The height lost per hour, in cm', wrong: ['The starting height, in cm', 'How many hours the candle lasts', 'The height after 1 hour'] },
  { eq: 'W = 0.8d + 3', q: 'A spring is W cm long when d kg is hung on it: W = 0.8d + 3. What does the 3 represent?', right: 'The length with no weight, in cm', wrong: ['The extension per kg, in cm', 'The largest weight it can hold', 'The length with 1 kg'] },
];
const CONVERSIONS = [
  { name: 'pounds to euros', x: 'Pounds (£)', y: 'Euros (€)', rate: 1.15, xr: [0, 100], yr: [0, 120], xs: 10, ys: 10, unitX: '£', unitY: '€', tol: 2 },
  { name: 'miles to kilometres', x: 'Miles', y: 'Kilometres', rate: 1.6, xr: [0, 50], yr: [0, 80], xs: 5, ys: 10, unitX: '', unitY: 'km', tol: 2 },
  { name: 'kilograms to pounds (lb)', x: 'Kilograms', y: 'Pounds (lb)', rate: 2.2, xr: [0, 20], yr: [0, 45], xs: 2, ys: 5, unitX: 'kg', unitY: 'lb', tol: 1 },
];
const interpret = {
  id: 'maths.algebra.graph-interpret',
  name: 'Interpret linear graphs in context',
  levels: [{ label: 'Gradient and intercept in context' }, { label: 'Read a conversion graph' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const ctx = pick(r, CONTEXTS);
      const c = choiceItem(r, ctx.right, ctx.wrong, o => (o.includes('per') || o.includes('lost') || o.includes('extension') ? 'The number multiplying the variable is a rate: the change for each 1 unit.' : o.includes('fixed') || o.includes('call-out') || o.includes('starting') || o.includes('no weight') ? 'The number on its own is the value when the variable is 0 (the intercept).' : 'That is not what this number measures: compare it with y = mx + c.'));
      return make(this.id, level, seed, { prompt: ctx.q, ...c, steps: ['In y = mx + c, m is the rate of change (the gradient) and c is the starting value (the intercept).', ctx.right] });
    }
    const cv = pick(r, CONVERSIONS), toY = r() < 0.6;
    const v = toY ? cv.xs * int(r, 2, (cv.xr[1] / cv.xs) - 1) : cv.ys * int(r, 2, Math.floor((cv.yr[1] * 0.85) / cv.ys));
    const ans = toY ? v * cv.rate : v / cv.rate;
    return make(this.id, level, seed, { prompt: `The graph converts ${cv.name}. Use it to convert ${toY ? `${cv.unitX === '£' ? '£' + v : v + ' ' + (cv.unitX || 'miles')}` : `${v} ${cv.unitY === '€' ? 'euros' : cv.unitY}`} to ${toY ? cv.y.toLowerCase().replace(/ \(.*\)/, '') : cv.x.toLowerCase().replace(/ \(.*\)/, '')}.`, graph: grid(cv.xr, cv.yr, { xstep: cv.xs, ystep: cv.ys, xlabel: cv.x, ylabel: cv.y, fns: [{ expr: `${cv.rate}x` }] }), answer: dec(ans, { tol: cv.tol }), steps: [toY ? `Go up from ${v} on the horizontal axis to the line, then across to the vertical axis.` : `Go across from ${v} on the vertical axis to the line, then down to the horizontal axis.`, `Reading: about ${+ans.toFixed(1)}`], traps: [], note: 'A reading from the graph: your answer can be slightly out.' });
  },
};

/* ───────── A11/A12 quadratic, cubic and reciprocal graphs ───────── */
const quadTable = {
  id: 'maths.algebra.graph-plot-curve',
  name: 'Plot quadratic, cubic and reciprocal graphs',
  levels: [{ label: 'Quadratics from a table' }, { label: 'Cubics and reciprocals' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    let expr, xs, label;
    if (level === 1) {
      const p = int(r, -2, 2), q = int(r, p + 1, p + 4); // y = (x − p)(x − q) + k shifted roots keep values small
      const k = int(r, -2, 2), b = -(p + q), c = p * q + k;
      expr = polyM([[1, 'x^2'], [b, 'x'], [c, '']]); label = `y = ${expr}`;
      const mid = Math.round((p + q) / 2); xs = [mid - 3, mid - 2, mid - 1, mid, mid + 1, mid + 2, mid + 3];
    } else if (r() < 0.5) {
      const k = pick(r, [0, 1, -1]); expr = polyM([[1, 'x^3'], [-3, 'x'], [k, '']]); label = `y = ${expr}`; xs = [-2, -1, 0, 1, 2];
    } else {
      const k = pick(r, [4, 6, 8, 12]); expr = `{${k}/x}`; label = `y = {${k}/x}`;
      const divs = []; for (let d = 1; d <= k; d++) if (k % d === 0 && d <= 6 && k / d <= 12) divs.push(d);
      xs = [...divs.slice(0, 3).map(d => -d), ...divs.slice(0, 3)];
    }
    const f = fnOf(expr.replace(/\{(\d+)\/x\}/, '$1/x'));
    const pts = xs.map(x => [x, f(x)]);
    if (pts.some(([, y]) => Math.abs(y) > 13)) return this.gen(level, seed + 'r');
    const yr = rangeOf(pts.map(p => p[1]));
    const xr = rangeOf(xs);
    return make(this.id, level, seed, { prompt: `Complete a table of values for ${label} for x = ${xs.map(num).join(', ')}. Plot the points.`, answer: pointsAns(pts, grid(xr, [Math.max(yr[0], -14), Math.min(yr[1], 14)])), steps: [`Substitute each x value: ${pts.map(([x, y]) => `x = ${num(x)} gives y = ${num(y)}`).join('; ')}`, 'Plot each (x, y) and join with a smooth curve (not straight lines).', level === 1 ? 'A quadratic is a ∪ shape, symmetrical about its turning point.' : expr.includes('x^3') ? 'A cubic has an S-shape.' : 'A reciprocal graph has two separate branches and never meets the axes.'] });
  },
};

const readCurve = {
  id: 'maths.algebra.graph-read-quadratic',
  name: 'Read roots and turning points from a graph',
  levels: [{ label: 'Roots and y-intercept' }, { label: 'Turning point' }, { label: 'Estimate roots to 1 d.p.' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level < 3) {
      let p, q; do { p = int(r, -4, 3); q = int(r, p + 1, 5); } while ((p + q) % 2 && level === 2);
      const b = -(p + q), c = p * q, expr = polyM([[1, 'x^2'], [b, 'x'], [c, '']]), tx = (p + q) / 2, ty = tx * tx + b * tx + c;
      const g = grid([-6, 6], [Math.min(-2, Math.floor(ty) - 1), Math.max(6, c + 1)], { fns: [{ expr, label: `y = ${expr}` }], ystep: 1 });
      if (level === 1) {
        if (r() < 0.6) return make(this.id, level, seed, { prompt: `The graph of y = ${expr} is shown. Use it to solve ${expr} = 0.`, graph: g, answer: roots([p, q]), steps: ['The solutions of … = 0 are where the curve crosses the x-axis (y = 0).', `It crosses at x = ${num(p)} and x = ${num(q)}.`], soTraps: [sT([c], `${num(c)} is where the curve crosses the y-axis. The solutions are where it crosses the x-axis.`)] });
        return make(this.id, level, seed, { prompt: `The graph of y = ${expr} is shown. Write down the coordinates of the point where it crosses the y-axis.`, graph: g, answer: pair(0, c), steps: ['On the y-axis, x = 0.', `y = ${num(c)}, so the point is (0, ${num(c)}).`], soTraps: [sT([[c, 0]], 'On the y-axis, x = 0: the coordinates are (0, y).')] });
      }
      return make(this.id, level, seed, { prompt: `The graph of y = ${expr} is shown. Write down the coordinates of its turning point.`, graph: g, answer: pair(tx, ty), steps: ['The turning point is the lowest point of the ∪.', `It is halfway between the roots ${num(p)} and ${num(q)}: x = ${num(tx)}.`, `y = ${num(ty)}`], soTraps: [sT([[ty, tx]], 'Coordinates are (x, y): across first.')] });
    }
    for (;;) {
      const b = int(r, -4, 4), c = int(r, -6, -1), disc = b * b - 4 * c;
      if (Number.isInteger(Math.sqrt(disc))) continue;
      const k = r() < 0.4 ? int(r, 1, 3) : 0;
      const ex = polyM([[1, 'x^2'], [b, 'x'], [c, '']]), rts = [(-b - Math.sqrt(disc + 4 * k)) / 2, (-b + Math.sqrt(disc + 4 * k)) / 2];
      if (rts.some(v => Math.abs(v) > 5.5)) continue;
      const g = grid([-6, 6], [Math.floor(c - (b * b) / 4) - 1, 8], { fns: [{ expr: ex, label: `y = ${ex}` }, ...(k ? [{ expr: String(k), label: `y = ${k}` }] : [])] });
      return make(this.id, level, seed, { prompt: `The graph of y = ${ex} is shown. Use it to estimate the solutions of ${ex} = ${k}. Give your answers to 1 decimal place.`, graph: g, answer: roots(rts.map(v => Math.round(v * 10) / 10), { tol: 0.2, dp: 1 }), steps: [k ? `Find where the curve meets the line y = ${k}.` : 'Find where the curve crosses the x-axis.', `Read the x values: about ${rts.map(v => (Math.round(v * 10) / 10).toFixed(1).replace('-', '−')).join(' and ')}`], note: 'Give both values to 1 decimal place. Readings within 0.2 are accepted.' });
    }
  },
};

const RECOG = {
  linear: { expr: '2x + 1', show: 'y = 2x + 1', why: 'A straight line comes from y = mx + c.' },
  quad: { expr: 'x^2 - 3', show: 'y = x^2 − 3', why: 'A ∪-shaped curve with a vertical line of symmetry is a quadratic.' },
  negquad: { expr: '4 - x^2', show: 'y = 4 − x^2', why: 'A ∩-shaped quadratic has a negative x^2 term.' },
  cubic: { expr: 'x^3', show: 'y = x^3', why: 'A cubic has an S-shape that passes through the origin for y = x^3.' },
  recip: { expr: '1/x', show: 'y = {1/x}', why: 'A reciprocal graph has two branches and never touches the axes.' },
  exp: { expr: '2^x', show: 'y = 2^x', why: 'An exponential graph grows faster and faster and passes through (0, 1).', higher: true },
  sin: { expr: 'sin(x)', show: 'y = sin x', why: 'y = sin x starts at (0, 0) and peaks at 90°.', higher: true, trig: true },
  cos: { expr: 'cos(x)', show: 'y = cos x', why: 'y = cos x starts at (0, 1) and is 0 at 90°.', higher: true, trig: true },
  tan: { expr: 'tan(x)', show: 'y = tan x', why: 'y = tan x repeats every 180° and has asymptotes at 90° and 270°.', higher: true, trig: true },
};
const recognise = {
  id: 'maths.algebra.graph-recognise',
  name: 'Recognise graphs from their shapes',
  levels: [{ label: 'Linear, quadratic, cubic, reciprocal' }, { label: 'Exponential and trigonometric', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const pool = Object.keys(RECOG).filter(k => (level === 1 ? !RECOG[k].higher : true));
    const k = level === 1 ? pick(r, pool) : pick(r, pool.filter(x => RECOG[x].higher));
    const sameScale = level === 1 || !RECOG[k].trig;
    const others = shuffled(r, pool.filter(x => x !== k && (level === 1 || x !== k) && (!(k === 'quad' && x === 'negquad') && !(k === 'negquad' && x === 'quad')))).slice(0, 3);
    const g = RECOG[k].trig ? grid([0, 360], [-2, 2], { xstep: 90, ystep: 1, fns: [{ expr: RECOG[k].expr }], height: 260 }) : grid([-4, 4], [-6, 6], { fns: [{ expr: RECOG[k].expr }] });
    const c = choiceItem(r, RECOG[k].show, others.map(o => RECOG[o].show), o => RECOG[Object.keys(RECOG).find(x => RECOG[x].show === o)].why);
    return make(this.id, level, seed, { prompt: 'Which equation could this graph have?', graph: g, ...c, steps: [RECOG[k].why, sameScale ? 'Check a point: substitute an x value and compare with the graph.' : 'Check key points: the value at 0°, 90° and 180°.'] });
  },
};

const transform = {
  id: 'maths.algebra.graph-transform',
  name: 'Translate and reflect graphs',
  higherOnly: true,
  levels: [{ label: 'Image of a point' }, { label: 'Equation after a transformation' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const a = nz(r, -4, 4), A = Math.abs(a), sgn = a > 0 ? '+' : '−';
    if (level === 1) {
      const p = int(r, -5, 5), q = int(r, -5, 5), kind = pick(r, ['f(x)+a', 'f(x+a)', '-f(x)', 'f(-x)']);
      const map = { 'f(x)+a': [p, q + a, `y = f(x) ${sgn} ${A}`, `Adding ${A} outside f moves the graph ${a > 0 ? 'up' : 'down'} ${A}.`], 'f(x+a)': [p - a, q, `y = f(x ${sgn} ${A})`, `Adding ${A} inside f moves the graph ${a > 0 ? 'left' : 'right'} ${A}: the opposite way to the sign.`], '-f(x)': [p, -q, 'y = −f(x)', 'y = −f(x) reflects in the x-axis: the y-coordinate changes sign.'], 'f(-x)': [-p, q, 'y = f(−x)', 'y = f(−x) reflects in the y-axis: the x-coordinate changes sign.'] };
      const [x, y, eqn, why] = map[kind];
      return make(this.id, level, seed, { prompt: `The point ${pt(p, q)} lies on the graph of y = f(x). Write down the coordinates of the corresponding point on the graph of ${eqn}.`, answer: pair(x, y), steps: [why, `${pt(p, q)} → ${pt(x, y)}`], soTraps: kind === 'f(x+a)' ? [sT([[p + a, q]], `Inside the bracket the shift goes the opposite way: f(x ${sgn} ${A}) moves ${a > 0 ? 'left' : 'right'}.`)] : kind === 'f(x)+a' ? [sT([[p + a, q]], `Adding ${A} outside f changes y, not x.`)] : kind === '-f(x)' ? [sT([[-p, q]], 'y = −f(x) is a reflection in the x-axis: change the sign of y.')] : [sT([[p, -q]], 'y = f(−x) is a reflection in the y-axis: change the sign of x.')] });
    }
    const dir = pick(r, ['right', 'left', 'up', 'down']), right = dir === 'right' ? `y = (x − ${A})^2` : dir === 'left' ? `y = (x + ${A})^2` : dir === 'up' ? `y = x^2 + ${A}` : `y = x^2 − ${A}`;
    const all = [`y = (x − ${A})^2`, `y = (x + ${A})^2`, `y = x^2 + ${A}`, `y = x^2 − ${A}`];
    const c = choiceItem(r, right, all.filter(o => o !== right), o => (o.includes('(') ? `Inside the bracket the shift is horizontal and goes the opposite way to the sign: ${o} moves ${o.includes('−') ? 'right' : 'left'}.` : `Adding outside x^2 moves the graph vertically: ${o} moves ${o.includes('−') ? 'down' : 'up'}.`));
    return make(this.id, level, seed, { prompt: `The graph of y = x^2 is translated ${A} unit${A > 1 ? 's' : ''} ${dir}. Which is the equation of the new graph?`, ...c, steps: [dir === 'right' || dir === 'left' ? `A horizontal translation changes x inside the function: ${dir} ${A} gives f(x ${dir === 'right' ? '−' : '+'} ${A}).` : `A vertical translation adds to the whole function: ${dir} ${A} gives f(x) ${dir === 'up' ? '+' : '−'} ${A}.`, right] });
  },
};

/* ───────── A17–A19 graphical solutions; A22 regions ───────── */
const solveGraph = {
  id: 'maths.algebra.graph-solve',
  name: 'Solve equations using graphs',
  levels: [{ label: 'Linear equations' }, { label: 'Quadratic equations' }, { label: 'Simultaneous equations' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const m = nz(r, -3, 3), c = int(r, -4, 4), x = int(r, -3, 3), k = m * x + c;
      return make(this.id, level, seed, { prompt: `The graph of ${lineText(m, c)} is shown. Use it to solve ${polyM([[m, 'x'], [c, '']])} = ${num(k)}.`, graph: grid([-5, 5], [-10, 10], { fns: [{ expr: `${m}x + ${c}`, label: lineText(m, c) }], ystep: 2 }), answer: { kind: 'integer', value: x, var: 'x' }, steps: [`Find ${num(k)} on the y-axis, go across to the line, then down to the x-axis.`, `x = ${num(x)}`], traps: [tv(k, 'That is the y value. The solution is the x value where the line reaches that height.')] });
    }
    if (level === 2) {
      for (;;) {
        const b = int(r, -3, 3), c = int(r, -6, -1), disc = b * b - 4 * c;
        if (Number.isInteger(Math.sqrt(disc))) continue;
        const ex = polyM([[1, 'x^2'], [b, 'x'], [c, '']]), rts = [(-b - Math.sqrt(disc)) / 2, (-b + Math.sqrt(disc)) / 2];
        if (rts.some(v => Math.abs(v) > 5.5)) continue;
        return make(this.id, level, seed, { prompt: `The graph of y = ${ex} is shown. Use it to estimate the solutions of ${ex} = 0. Give your answers to 1 decimal place.`, graph: grid([-6, 6], [Math.floor(c - (b * b) / 4) - 1, 8], { fns: [{ expr: ex, label: `y = ${ex}` }] }), answer: roots(rts.map(v => Math.round(v * 10) / 10), { tol: 0.2, dp: 1 }), steps: ['The solutions are where the curve crosses the x-axis.', `About x = ${rts.map(v => (Math.round(v * 10) / 10).toFixed(1).replace('-', '−')).join(' and x = ')}`], note: 'Readings within 0.2 are accepted.' });
      }
    }
    for (;;) {
      const m1 = nz(r, -3, 3), m2 = nz(r, -3, 3), x = int(r, -3, 3), y = int(r, -5, 5);
      if (m1 === m2) continue;
      const c1 = y - m1 * x, c2 = y - m2 * x;
      if (Math.abs(c1) > 8 || Math.abs(c2) > 8) continue;
      return make(this.id, level, seed, { prompt: `The graphs of ${lineText(m1, c1)} and ${lineText(m2, c2)} are shown. Use them to solve the simultaneous equations.`, graph: grid([-5, 5], [-10, 10], { fns: [{ expr: `${m1}x + ${c1}`, label: lineText(m1, c1) }, { expr: `${m2}x + ${c2}`, label: lineText(m2, c2) }], ystep: 2 }), answer: pair(x, y), steps: ['The solution is the point where the lines cross.', `They cross at ${pt(x, y)}: x = ${num(x)}, y = ${num(y)}`], soTraps: [sT([[y, x]], 'Read the x-coordinate first, then the y-coordinate.')] });
    }
  },
};

const regions = {
  id: 'maths.algebra.graph-regions',
  name: 'Regions defined by inequalities',
  higherOnly: true,
  levels: [{ label: 'Integer points in a region' }, { label: 'Describe a shaded region' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (;;) {
      const a = int(r, -2, 0), b = int(r, -2, 0), m = pick(r, [1, 2, -1]), c = int(r, 2, 5);
      // region: x ≥ a, y ≥ b, y ≤ mx + c
      const inside = []; for (let x = -6; x <= 6; x++) for (let y = -6; y <= 8; y++) if (x >= a && y >= b && y <= m * x + c) inside.push([x, y]);
      if (inside.length < 4 || inside.length > 14 || inside.some(([x, y]) => x > 5 || y > 7)) continue;
      const xr = [-4, 6], yr = [-4, 8];
      const lines = [{ expr: `${m}x + ${c}`, label: lineText(m, c) }];
      const region = m < 0 ? [[a, b], [a, m * a + c], [(b - c) / m, b]] : [[a, b], [a, m * a + c], [6, m * 6 + c], [6, b]];
      if (level === 1) return make(this.id, level, seed, { prompt: `Plot every point with integer coordinates that satisfies all three inequalities x ≥ ${num(a)}, y ≥ ${num(b)} and y ≤ ${fmtLine(m, c)}.`, graph: grid(xr, yr, { fns: lines }), answer: pointsAns(inside, grid(xr, yr, { fns: lines })), steps: [`Draw x = ${num(a)}, y = ${num(b)} and ${lineText(m, c)}; the region is on the correct side of each line.`, 'Points on a boundary line count, because the inequalities include equality.', `${inside.length} points: ${inside.map(([x, y]) => pt(x, y)).join(', ')}`] });
      if (m > 0) continue;
      const right = `x ≥ ${num(a)}, y ≥ ${num(b)}, y ≤ ${fmtLine(m, c)}`;
      const wrong = [`x ≤ ${num(a)}, y ≥ ${num(b)}, y ≤ ${fmtLine(m, c)}`, `x ≥ ${num(a)}, y ≤ ${num(b)}, y ≤ ${fmtLine(m, c)}`, `x ≥ ${num(a)}, y ≥ ${num(b)}, y ≥ ${fmtLine(m, c)}`];
      const ch = choiceItem(r, right, wrong, o => (o.startsWith('x ≤') ? `The region is to the right of x = ${num(a)}, so x ≥ ${num(a)}.` : o.includes('y ≤ ' + num(b)) ? `The region is above y = ${num(b)}, so y ≥ ${num(b)}.` : `The region is below the sloping line, so y ≤ ${fmtLine(m, c)}. Test a point inside, such as ${pt(inside[0][0], inside[0][1])}.`));
      return make(this.id, level, seed, { prompt: 'Which inequalities describe the shaded region (boundaries included)?', graph: grid(xr, yr, { fns: lines, region }), ...ch, steps: ['For each boundary line, decide which side the region is on.', 'Test a point inside the region in each inequality.', right] });
    }
  },
};

/* ───────── A14 real-life graphs; A15 gradients and areas; A16 circles ───────── */
const realLife = {
  id: 'maths.algebra.graph-real-life',
  name: 'Distance–time and real-life graphs',
  levels: [{ label: 'Read a journey graph' }, { label: 'Speed from a graph' }, { label: 'Compare sections' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const d1 = int(r, 2, 6) * 2, t1 = pick(r, [30, 45, 60]), rest = pick(r, [15, 30]), t3 = pick(r, [30, 45, 60, 90]);
    const pts = [[0, 0], [t1, d1], [t1 + rest, d1], [t1 + rest + t3, 0]];
    const g = grid([0, Math.ceil((t1 + rest + t3) / 15) * 15], [0, d1 + 2], { xstep: 15, ystep: 2, xlabel: 'Time (minutes)', ylabel: 'Distance from home (km)', polys: [{ pts }], height: 280 });
    if (level === 1) {
      if (r() < 0.5) return make(this.id, level, seed, { prompt: 'The graph shows a cycle ride from home and back. For how many minutes did the cyclist stop?', graph: g, answer: { kind: 'integer', value: rest }, steps: ['A stop is a horizontal section: distance does not change.', `From ${t1} to ${t1 + rest} minutes: ${rest} minutes`], traps: [tv(t1 + rest, `That is the time when the stop ended. The stop lasted from ${t1} to ${t1 + rest} minutes.`)] });
      return make(this.id, level, seed, { prompt: 'The graph shows a cycle ride from home and back. How far from home did the cyclist go?', graph: g, answer: { kind: 'integer', value: d1 }, steps: ['Distance from home is on the vertical axis.', `The highest point is ${d1} km.`], traps: [tv(2 * d1, 'The question asks how far from home, not the total distance travelled there and back.')] });
    }
    if (level === 2) {
      const out = r() < 0.5, d = d1, t = out ? t1 : t3, sp = (d * 60) / t;
      return make(this.id, level, seed, { prompt: `The graph shows a cycle ride. Work out the speed, in km/h, on the ${out ? 'way out' : 'way home'}.`, graph: g, answer: Number.isInteger(sp) ? { kind: 'integer', value: sp } : dec(Math.round(sp * 100) / 100, { tol: 0.01 }), steps: [`Distance ${d} km in ${t} minutes = ${t / 60} hours.`, `Speed = distance ÷ time = ${d} ÷ ${t / 60} = ${+sp.toFixed(2)} km/h`], traps: [tv(Math.round((d / t) * 1000) / 1000, `That is km per minute. Change ${t} minutes to hours first (÷ 60).`)], note: 'Give your answer to 2 decimal places if it is not exact.' });
    }
    const sp1 = d1 / t1, sp3 = d1 / t3;
    if (sp1 === sp3) return this.gen(level, seed + 'e');
    const right = sp1 > sp3 ? 'The way out' : 'The way home';
    const c = choiceItem(r, right, [sp1 > sp3 ? 'The way home' : 'The way out', 'The stop'], o => (o === 'The stop' ? 'During the stop the speed is 0: the line is flat.' : 'The steeper the line, the faster the speed. Compare distance ÷ time for each section.'));
    return make(this.id, level, seed, { prompt: 'The graph shows a cycle ride. On which part of the ride was the cyclist fastest?', graph: g, ...c, steps: ['Speed is the gradient of a distance–time graph: steeper means faster.', `Way out: ${d1} km in ${t1} min; way home: ${d1} km in ${t3} min.`, right] });
  },
};

const areas = {
  id: 'maths.algebra.graph-gradient-area',
  name: 'Gradients and areas under graphs',
  higherOnly: true,
  levels: [{ label: 'Acceleration from a velocity–time graph' }, { label: 'Distance as area under the graph' }, { label: 'Estimate a gradient with a tangent' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level < 3) {
      const v = int(r, 2, 6) * 2, t1 = int(r, 2, 5), t2 = t1 + int(r, 2, 6), t3 = t2 + int(r, 2, 4);
      const pts = [[0, 0], [t1, v], [t2, v], [t3, 0]];
      const g = grid([0, t3 + 1], [0, v + 2], { xstep: 1, ystep: 2, xlabel: 'Time (s)', ylabel: 'Velocity (m/s)', polys: [{ pts }], height: 280 });
      if (level === 1) return make(this.id, level, seed, { prompt: `The velocity–time graph is shown. Work out the acceleration in the first ${t1} seconds.`, graph: g, answer: dec(v / t1, { tol: 0.01 }), steps: ['Acceleration is the gradient of a velocity–time graph.', `${v} ÷ ${t1} = ${+(v / t1).toFixed(2)} m/s^2`], traps: [tv(Math.round((t1 / v) * 1000) / 1000, 'Gradient = change in velocity ÷ change in time.'), tv((v * t1) / 2, 'That is the area (distance). Acceleration is the gradient.')], note: 'Give your answer to 2 decimal places if it is not exact.' });
      const dist = (t1 * v) / 2 + (t2 - t1) * v + ((t3 - t2) * v) / 2;
      return make(this.id, level, seed, { prompt: 'The velocity–time graph is shown. Work out the total distance travelled, in metres.', graph: g, answer: { kind: 'integer', value: dist }, steps: ['Distance is the area under a velocity–time graph.', `Split into a triangle, a rectangle and a triangle: ${(t1 * v) / 2} + ${(t2 - t1) * v} + ${((t3 - t2) * v) / 2}`, `${dist} m`], traps: [tv(t3 * v, 'Do not treat the whole shape as a rectangle: the ends are triangles.'), tv(v, 'That is the top speed. Distance is the area under the graph.')] });
    }
    const a = pick(r, [1, 2]), x0 = int(r, -2, 3), expr = a === 1 ? 'x^2' : 'x^2 - 2x';
    const grad = a === 1 ? 2 * x0 : 2 * x0 - 2;
    return make(this.id, level, seed, { prompt: `The graph of y = ${a === 1 ? 'x^2' : 'x^2 − 2x'} is shown. By drawing a tangent, estimate the gradient of the curve at x = ${num(x0)}.`, graph: grid([-4, 5], [-2, 14], { fns: [{ expr, label: `y = ${a === 1 ? 'x²' : 'x² − 2x'}` }], points: [[x0, fnOf(expr)(x0)]], ystep: 2 }), answer: dec(grad, { tol: 0.6 }), steps: ['Draw a straight line that just touches the curve at the point (a tangent).', 'Make a large triangle on the tangent and work out change in y ÷ change in x.', `The gradient is about ${num(grad)}.`], note: 'An estimate from your tangent: answers within 0.6 are accepted.' });
  },
};

const circle = {
  id: 'maths.algebra.graph-circle',
  name: 'Equation of a circle and tangents',
  higherOnly: true,
  levels: [{ label: 'Radius and equation' }, { label: 'Tangent at a point' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const R = int(r, 2, 12);
      if (r() < 0.5) return make(this.id, level, seed, { prompt: `A circle has centre (0, 0) and radius ${R}. Its equation is x^2 + y^2 = k. Find k.`, answer: { kind: 'integer', value: R * R }, steps: ['A circle centre (0, 0) and radius r has equation x^2 + y^2 = r^2.', `k = ${R}^2 = ${R * R}`], traps: [tv(R, `In x^2 + y^2 = r^2 the number on the right is the radius squared: ${R}^2 = ${R * R}.`), tv(2 * R, `k is r^2 (${R} × ${R}), not 2 × r.`)] });
      return make(this.id, level, seed, { prompt: `The circle x^2 + y^2 = ${R * R} has centre (0, 0). What is its radius?`, answer: { kind: 'integer', value: R }, steps: [`x^2 + y^2 = r^2, so r^2 = ${R * R}`, `r = ${R}`], traps: [tv(R * R, `${R * R} is r^2, the radius squared. Take the square root to find r.`), tv(R * R / 2, 'Take the square root of the number, do not halve it.')] });
    }
    const P = pick(r, [[3, 4], [4, 3], [-3, 4], [-4, 3], [3, -4], [4, -3], [-3, -4], [-4, -3]]);
    const [x0, y0] = P, m = F(-x0, y0), c = F(25, y0);
    return make(this.id, level, seed, { prompt: `The point ${pt(x0, y0)} lies on the circle x^2 + y^2 = 25. Find the equation of the tangent to the circle at this point.`, graph: grid([-6, 6], [-6, 6], { circles: [5], points: [[0, 0, 'O'], [x0, y0]] }), answer: algAns(fmtLine(m.n / m.d, c.n / c.d), 'any', ['x', 'y'], { subject: 'y' }), steps: [`Gradient of the radius from (0, 0) to ${pt(x0, y0)}: ${fv(F(y0, x0))}`, `The tangent is perpendicular to the radius: gradient ${fv(m)}`, `y − ${num(y0)} = ${fv(m)}(x − ${num(x0)}), so ${lineText(m, c)}`], note: 'Write your answer as y = …', alTraps: [algTrap(fmtLine(y0 / x0, 0), 'That is the radius. The tangent is perpendicular to the radius.'), algTrap(fmtLine(-x0 / y0, 0), `The tangent passes through ${pt(x0, y0)}, not the origin: find c.`)] });
  },
};

export const graphSkills = [coords, plotLine, lineEq, interpret, quadTable, readCurve, recognise, transform, solveGraph, regions, realLife, areas, circle];
