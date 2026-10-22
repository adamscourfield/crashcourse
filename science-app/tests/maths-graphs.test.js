// Graphs: plotting input, tolerance marking and the graph skills. Items are checked against the
// printed question and the item's own graph data with a separate evaluator (plain JavaScript),
// brute force and bisection, not with the generators' arithmetic.
import test from 'node:test';
import assert from 'node:assert/strict';
import { allSkills, generate } from '../dist/maths/skills.js';
import { mark } from '../dist/maths/answers.js';
import { graphSVG, graphInputHTML, markPoints, markLine, lineFeedback, parsePoints } from '../dist/maths/graph.js';

const N = 200;
const skills = allSkills.filter(sk => sk.id.includes('.graph-'));
const close = (a, b, t = 1e-7) => Math.abs(a - b) <= t * Math.max(1, Math.abs(a), Math.abs(b));
const NUM = t => Number(String(t).replace(/−/g, '-'));
function js(markup) {
  let e = markup.trim().replace(/−/g, '-').replace(/×/g, '*').replace(/\{([^{}]+)\/([^{}]+)\}/g, '(($1)/($2))').replace(/\^/g, '**').replace(/\s+/g, '');
  for (let i = 0; i < 3; i++) e = e.replace(/(\d|[a-z]|\))(?=[a-z(])/g, '$1*').replace(/([a-z])(?=\d)/g, '$1*');
  e = e.replace(/(^|[(+\-*/])-/g, '$1(-1)*');
  assert.match(e, /^[\w+\-*/().]+$/, 'unexpected characters in ' + markup);
  return e;
}
const ev = (m, vals) => { const k = Object.keys(vals); return Function(...k, `return (${js(m)});`)(...k.map(n => vals[n])); };
const fv = f => f.n / f.d;
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'algebra') return (a.subject ? a.subject + ' = ' : '') + a.expr;
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'points') return a.points.map(p => p.join(',')).join(';');
  if (a.kind === 'line') { const m = fv(a.m), c = fv(a.c); return [0, a.m.d, 2 * a.m.d].map(x => `${x},${m * x + c}`).join(';'); }
  if (a.kind === 'solutions') return a.sols.map(r => r.map(v => (a.dp != null ? fv(v).toFixed(a.dp) : `${v.n}/${v.d}`)).join(',')).join(';');
  if (a.kind === 'fraction') return `${a.value.n}/${a.value.d}`;
  return String(fv(a.value));
}
const pts = p => [...p.matchAll(/\((−?\d+(?:\.\d+)?), (−?\d+(?:\.\d+)?)\)/g)].map(m => [NUM(m[1]), NUM(m[2])]);
function bisectRoots(f, lo = -12, hi = 12) { const out = []; for (let x = lo; x < hi; x += 0.05) { const a = f(x), b = f(x + 0.05); if (a === 0) out.push(x); else if (Math.sign(a) !== Math.sign(b)) { let p = x, q = x + 0.05; for (let k = 0; k < 50; k++) { const m = (p + q) / 2; if (Math.sign(f(p)) === Math.sign(f(m))) p = m; else q = m; } out.push((p + q) / 2); } } return out; }

test('graph items: deterministic, JSON-safe, own answers correct, graphs render, true minus signs', () => {
  for (const sk of skills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const a = generate(sk.id, lv, 's' + i);
    assert.deepEqual(generate(sk.id, lv, 's' + i), a);
    assert.deepEqual(JSON.parse(JSON.stringify(a)), a, 'item must survive JSON');
    assert.equal(mark(a.answer, rawFor(a.answer)).status, 'correct', `${sk.id} L${lv} ${a.prompt} → ${rawFor(a.answer)}`);
    for (const g of [a.graph, a.answer.grid].filter(Boolean)) { const svg = graphSVG(g); assert.ok(!/NaN|undefined|Infinity/.test(svg), `${sk.id} graph renders: ${a.prompt}`); assert.match(svg, /role="img" aria-label="Graph/); }
    for (const t of [...(a.traps || []), ...(a.soTraps || []), ...(a.alTraps || [])]) assert.ok(t.why.length > 20, `${sk.id} trap feedback too short`);
    for (const t of a.alTraps || []) assert.equal(mark(a.answer, t.expr).status, 'wrong');
    for (const t of a.traps || []) assert.equal(mark(a.answer, String(fv(t.v))).status, 'wrong', `${sk.id} numeric trap is accepted: ${a.prompt}`);
    for (const txt of [a.prompt, ...a.steps, ...(a.optionWhy || []).filter(Boolean)]) assert.doesNotMatch(txt, /(^|[\s(=:,])-\d/, `hyphen for minus: ${txt}`);
  }
});

test('coordinates, plotted lines and line equations agree with the printed question', () => {
  for (let i = 0; i < N; i++) {
    const a = generate('maths.algebra.graph-coords', 1, 'c' + i), P = a.graph.points[0];
    assert.deepEqual(a.answer.sols[0].map(fv), [P[0], P[1]]);
    const b = generate('maths.algebra.graph-coords', 2, 'c' + i);
    assert.deepEqual(b.answer.points, pts(b.prompt));
    const c = generate('maths.algebra.graph-coords', 3, 'c' + i), q = pts(c.prompt), ans = c.answer.sols[0].map(fv);
    if (/^A is/.test(c.prompt)) assert.deepEqual(ans, [(q[0][0] + q[1][0]) / 2, (q[0][1] + q[1][1]) / 2]);
    else assert.deepEqual([(q[1][0] + ans[0]) / 2, (q[1][1] + ans[1]) / 2], q[0], c.prompt);
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.graph-plot-line', lv, 'p' + i), eq = it.prompt.match(/graph of (.+?)(?: for x|\.$)/)[1], [L, R] = eq.split(' = ');
    const m = fv(it.answer.m), c = fv(it.answer.c);
    for (const x of [-2, 0, 1, 3]) { const y = m * x + c; assert.ok(close(ev(L, { x, y }), ev(R, { x, y })), `${it.prompt}: (${x}, ${y}) should satisfy it`); }
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.graph-line-equation', lv, 'e' + i), p = it.prompt;
    if (/gradient and the y-intercept of (.+)\.$/.test(p)) { const [L, R] = p.match(/of (?:the line )?(.+)\.$/)[1].split(' = '), [m, c] = it.answer.sols[0].map(fv); for (const x of [0, 1, 4]) assert.ok(close(ev(L, { x, y: m * x + c }), ev(R, { x, y: m * x + c })), p); }
    else if (/gradient of the straight line shown/.test(p)) { const [[x1, y1], [x2, y2]] = it.graph.points; assert.ok(close(fv(it.answer.value ? it.answer.value : { n: it.answer.value, d: 1 }) || it.answer.value, (y2 - y1) / (x2 - x1)), p); }
    else {
      const line = x => ev(it.answer.display, { x });
      const given = pts(p);
      for (const [x, y] of /through .+ and .+\.$/.test(p) && !/parallel|perpendicular/.test(p) ? given : given.slice(-1)) assert.ok(close(line(x), y), `${p} → ${it.answer.display}`);
      const grad = line(1) - line(0);
      const other = p.match(/(?:parallel|perpendicular) to y = (.+?) that/);
      if (other) { const g2 = ev(other[1], { x: 1 }) - ev(other[1], { x: 0 }); assert.ok(/parallel/.test(p) ? close(grad, g2) : close(grad * g2, -1), p); }
    }
  }
});

test('read-offs, curves, transformations and graphical solutions agree with the graph and the question', () => {
  for (let lv = 1; lv <= 2; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.graph-plot-curve', lv, 'q' + i), eq = it.prompt.match(/for (y = .+) for x = /)[1].slice(4), xs = it.prompt.match(/for x = (.+)\. Plot/)[1].split(', ').map(NUM);
    assert.deepEqual(it.answer.points, xs.map(x => [x, ev(eq, { x })]), it.prompt);
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.graph-read-quadratic', lv, 'r' + i), f = x => ev(it.graph.fns[0].expr, { x });
    if (/crosses the y-axis/.test(it.prompt)) assert.deepEqual(it.answer.sols[0].map(fv), [0, f(0)]);
    else if (/turning point/.test(it.prompt)) { const [tx, ty] = it.answer.sols[0].map(fv); assert.ok(close(f(tx), ty) && f(tx - 0.5) > ty && f(tx + 0.5) > ty, it.prompt); }
    else { const k = NUM(it.prompt.match(/= (−?\d+)(?:\.|$)/)[1]); const rts = bisectRoots(x => f(x) - k); assert.equal(rts.length, it.answer.sols.length, it.prompt); it.answer.sols.forEach(([v], j) => assert.ok(Math.abs(fv(v) - rts.sort((a, b) => a - b)[j]) <= 0.051 + (it.answer.tol ? 0 : 0), `${it.prompt}: ${fv(v)} vs ${rts[j]}`)); }
  }
  for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.graph-transform', 1, 't' + i), [[p, q]] = pts(it.prompt), eqn = it.prompt.match(/graph of (y = [^.]+)\.$/)[1], ans = it.answer.sols[0].map(fv);
    let m;
    const want = (m = eqn.match(/^y = f\(x\) ([+−]) (\d+)$/)) ? [p, q + (m[1] === '+' ? 1 : -1) * m[2]] : (m = eqn.match(/^y = f\(x ([+−]) (\d+)\)$/)) ? [p - (m[1] === '+' ? 1 : -1) * m[2], q] : eqn === 'y = −f(x)' ? [p, -q] : [-p, q];
    assert.deepEqual(ans.map(v => v + 0), want.map(v => v + 0), it.prompt);
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.graph-solve', lv, 'g' + i);
    if (lv === 1) { const [L, R] = it.prompt.match(/solve (.+)\.$/)[1].split(' = '); assert.ok(close(ev(L, { x: it.answer.value }), ev(R, { x: 0 })), it.prompt); }
    else if (lv === 2) { const f = x => ev(it.graph.fns[0].expr, { x }), rts = bisectRoots(f).sort((a, b) => a - b); it.answer.sols.map(([v]) => fv(v)).sort((a, b) => a - b).forEach((v, j) => assert.ok(Math.abs(v - rts[j]) <= 0.051, it.prompt)); }
    else { const [x, y] = it.answer.sols[0].map(fv); for (const f of it.graph.fns) assert.ok(close(ev(f.expr, { x }), y), it.prompt); }
  }
  const SHAPES = { 'y = 2x + 1': '2x + 1', 'y = x^2 − 3': 'x^2 - 3', 'y = 4 − x^2': '4 - x^2', 'y = x^3': 'x^3', 'y = {1/x}': '1/x', 'y = 2^x': '2^x' };
  for (let lv = 1; lv <= 2; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.graph-recognise', lv, 'k' + i), shown = it.graph.fns[0].expr, right = it.answer.options[it.answer.answer];
    if (SHAPES[right]) for (const x of [-1.5, 0.5, 2]) assert.ok(close(ev(SHAPES[right], { x }), ev(shown.replace(/\//g, '/'), { x })), `${right} vs ${shown}`);
    else assert.equal(right.replace('y = ', '').replace(' x', '(x)'), shown, it.prompt);
  }
});

test('regions, real-life graphs, gradients, areas and circles agree with the graph data', () => {
  for (let i = 0; i < N; i++) {
    const a = generate('maths.algebra.graph-regions', 1, 'x' + i), conds = a.prompt.match(/inequalities (.+) and (.+)\.$/).slice(1).join(', ').split(', ');
    const holds = (x, y) => conds.every(c => { const [L, op, R] = c.split(/ (≥|≤) /); return op === '≥' ? ev(L, { x, y }) >= ev(R, { x, y }) - 1e-9 : ev(L, { x, y }) <= ev(R, { x, y }) + 1e-9; });
    const brute = []; for (let x = -10; x <= 10; x++) for (let y = -10; y <= 10; y++) if (holds(x, y)) brute.push([x, y]);
    assert.equal(markPoints(a.answer, brute.map(p => p.join(',')).join(';')).status, 'correct', a.prompt);
    const b = generate('maths.algebra.graph-regions', 2, 'x' + i), poly = b.graph.region, cx = poly.reduce((s, p) => s + p[0], 0) / poly.length, cy = poly.reduce((s, p) => s + p[1], 0) / poly.length;
    b.answer.options.forEach((o, j) => { const ok = o.split(', ').every(c => { const [L, op, R] = c.split(/ (≥|≤) /); return op === '≥' ? ev(L, { x: cx, y: cy }) >= ev(R, { x: cx, y: cy }) : ev(L, { x: cx, y: cy }) <= ev(R, { x: cx, y: cy }); }); assert.equal(ok, j === b.answer.answer, o); });
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.graph-real-life', lv, 'j' + i), P = it.graph.polys[0].pts;
    if (/stop/.test(it.prompt)) assert.equal(it.answer.value, P[2][0] - P[1][0]);
    else if (/How far/.test(it.prompt)) assert.equal(it.answer.value, Math.max(...P.map(p => p[1])));
    else if (/speed/.test(it.prompt)) { const seg = /way out/.test(it.prompt) ? [P[0], P[1]] : [P[2], P[3]], sp = (Math.abs(seg[1][1] - seg[0][1]) / (seg[1][0] - seg[0][0])) * 60; assert.ok(Math.abs((it.answer.value.n ?? it.answer.value) / (it.answer.value.d ?? 1) - sp) <= 0.01, it.prompt); }
    else { const s1 = (P[1][1] - P[0][1]) / (P[1][0] - P[0][0]), s3 = Math.abs((P[3][1] - P[2][1]) / (P[3][0] - P[2][0])); assert.equal(it.answer.options[it.answer.answer], s1 > s3 ? 'The way out' : 'The way home'); }
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.graph-gradient-area', lv, 'v' + i);
    if (lv === 1) { const P = it.graph.polys[0].pts; assert.ok(Math.abs(fv(it.answer.value) - (P[1][1] - P[0][1]) / (P[1][0] - P[0][0])) <= 0.01); }
    else if (lv === 2) { const P = it.graph.polys[0].pts; let area = 0; for (let k = 1; k < P.length; k++) area += ((P[k][0] - P[k - 1][0]) * (P[k][1] + P[k - 1][1])) / 2; assert.equal(it.answer.value, area); }
    else { const x0 = NUM(it.prompt.match(/at x = (−?\d+)\./)[1]), f = x => ev(it.graph.fns[0].expr, { x }); assert.ok(Math.abs(fv(it.answer.value) - (f(x0 + 1e-5) - f(x0 - 1e-5)) / 2e-5) < 1e-3, it.prompt); }
  }
  for (let i = 0; i < N; i++) {
    const a = generate('maths.algebra.graph-circle', 1, 'o' + i), n = a.prompt.match(/\d+/g).map(Number);
    assert.ok(/radius\?$/.test(a.prompt) ? a.answer.value ** 2 === n.find(v => v > 2 && Number.isInteger(Math.sqrt(v)) && v !== 2) : a.answer.value === n.find(v => v > 1 && v < 13) ** 2, a.prompt);
    const b = generate('maths.algebra.graph-circle', 2, 'o' + i), [[x0, y0]] = pts(b.prompt), t = x => ev(b.answer.display, { x });
    assert.ok(close(t(x0), y0) && close((t(1) - t(0)) * (y0 / x0), -1), b.prompt);
  }
});

test('plotting input and graph marking', () => {
  const L = { kind: 'line', m: { n: 2, d: 1 }, c: { n: -1, d: 1 }, grid: { xr: [-5, 5], yr: [-5, 5] } };
  assert.equal(markLine(L, '0,-1;1,1').status, 'correct');
  assert.equal(markLine(L, '0,-1').code, 'line-two-points');
  assert.match(lineFeedback(L, markLine(L, '0,1;1,3')), /right gradient/);
  assert.match(lineFeedback(L, markLine(L, '0,-1;1,-3')), /wrong way/);
  assert.match(lineFeedback(L, markLine(L, '0,-1;1,0')), /right place/);
  const P = { kind: 'points', points: [[1, 2], [3, 4]], grid: L.grid };
  assert.equal(markPoints(P, '3,4;1,2').status, 'correct');
  assert.equal(markPoints(P, '(3, 4); (1, 2); (1, 2)').status, 'correct');
  assert.ok(markPoints(P, '2,1;4,3').swapped);
  assert.deepEqual([markPoints(P, '1,2').missing, markPoints(P, '1,2;3,4;0,0').extra], [[[3, 4]], [[0, 0]]]);
  assert.equal(mark(P, '').status, 'invalid');
  assert.deepEqual(parsePoints('1,2;-3,0.5'), [[1, 2], [-3, 0.5]]);
  const html = graphInputHTML(P, '1,2', false);
  assert.match(html, /data-gx/); assert.match(html, /Add point/); assert.match(html, /id="mText" value="1,2"/);
  assert.doesNotMatch(graphInputHTML(P, '1,2', true), /data-gadd/);
  const T = { kind: 'decimal', value: { n: 46, d: 1 }, tol: 2 };
  assert.equal(mark(T, '45').status, 'correct'); assert.equal(mark(T, '48').status, 'correct'); assert.equal(mark(T, '48.5').status, 'wrong');
  const S = { kind: 'solutions', vars: ['x'], sols: [[{ n: -6, d: 5 }], [{ n: 16, d: 5 }]], tol: 0.2, dp: 1 };
  assert.equal(mark(S, '-1.1; 3.3').status, 'correct'); assert.equal(mark(S, '-1.5; 3.2').status, 'wrong');
  const I = { kind: 'inequality', letter: 'x', set: [{ lo: { n: 3, d: 1 }, loIn: false, hi: null, hiIn: false }] };
  assert.equal(mark(I, '{x : x > 3}').status, 'correct');
});
