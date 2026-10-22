// Algebra batch 2: sequences, inequalities, quadratic and simultaneous equations.
// Items are checked against their PRINTED prompts with a separate evaluator (plain JavaScript),
// by substitution, brute force over integers, or truth tables over many x values. None of
// these checks use the generator's own arithmetic or the marking parser.
import test from 'node:test';
import assert from 'node:assert/strict';
import { allSkills, generate } from '../dist/maths/skills.js';
import { mark } from '../dist/maths/answers.js';
import { parseInequality } from '../dist/maths/sets.js';
import { F, decText } from '../dist/maths/frac.js';

const N = 250;
const ids = ['seq-terms', 'seq-nth-linear', 'seq-special', 'seq-nth-quadratic', 'ineq-solve', 'ineq-integers', 'ineq-quadratic', 'quad-solve', 'quad-complete-square', 'quad-formula', 'sim-solve', 'sim-form', 'sim-nonlinear'].map(s => 'maths.algebra.' + s);
const skills = allSkills.filter(sk => ids.includes(sk.id));
const close = (a, b, tol = 1e-7) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
const NUM = t => Number(t.replace(/−/g, '-'));

function js(markup) {
  let e = markup.trim().replace(/−/g, '-').replace(/×/g, '*');
  e = e.replace(/\{([^{}]+)\/([^{}]+)\}/g, '(($1)/($2))').replace(/\^/g, '**').replace(/\s+/g, '');
  for (let i = 0; i < 3; i++) e = e.replace(/(\d|[A-Za-z]|\))(?=[A-Za-z(])/g, '$1*').replace(/([A-Za-z])(?=\d)/g, '$1*');
  e = e.replace(/(^|[(+\-*/])-/g, '$1(-1)*');
  assert.match(e, /^[\w+\-*/().]+$/, 'unexpected characters in ' + markup);
  return e;
}
const ev = (markup, vals) => { const k = Object.keys(vals); return Function(...k, `return (${js(markup)});`)(...k.map(n => vals[n])); };
const fv = f => f.n / f.d;
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'algebra') return a.expr;
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'list') return a.values.join(', ');
  if (a.kind === 'solutions') return a.sols.map(r => r.map(v => (a.dp != null ? decText(F(v.n, v.d), a.dp) : v.d === 1 ? String(v.n) : `${v.n}/${v.d}`).replace('−', '-')).join(',')).join(';');
  if (a.kind === 'inequality') return a.set.map(iv => (iv.lo && iv.hi ? `${iv.lo.n}/${iv.lo.d} ${iv.loIn ? '<=' : '<'} x ${iv.hiIn ? '<=' : '<'} ${iv.hi.n}/${iv.hi.d}` : iv.lo ? `x ${iv.loIn ? '>=' : '>'} ${iv.lo.n}/${iv.lo.d}` : `x ${iv.hiIn ? '<=' : '<'} ${iv.hi.n}/${iv.hi.d}`)).join(' or ');
  return `${a.value.n}/${a.value.d}`;
}
const inSet = (set, x) => set.some(iv => (iv.lo === null || (iv.loIn ? x >= fv(iv.lo) - 1e-12 : x > fv(iv.lo) + 1e-12)) && (iv.hi === null || (iv.hiIn ? x <= fv(iv.hi) + 1e-12 : x < fv(iv.hi) - 1e-12)));
const CMP = { '<': (a, b) => a < b - 1e-12, '≤': (a, b) => a <= b + 1e-12, '>': (a, b) => a > b + 1e-12, '≥': (a, b) => a >= b - 1e-12 };
/** Truth of a printed inequality chain "A op B" or "A op B op C" at x. */
function holds(text, x) {
  const parts = text.split(/ (<|≤|>|≥) /);
  for (let i = 1; i < parts.length; i += 2) if (!CMP[parts[i]](ev(parts[i - 1], { x }), ev(parts[i + 1], { x }))) return false;
  return true;
}
const grid = set => { const pts = new Set([-20, -7.3, -1.1, 0.4, 3.7, 13.9, 20]); for (const iv of set) for (const e of [iv.lo, iv.hi]) if (e) { const v = fv(e); [v - 0.01, v, v + 0.01].forEach(p => pts.add(p)); } return [...pts]; };

test('batch-2 items: deterministic, JSON-safe, own answer correct, traps wrong, true minus signs', () => {
  for (const sk of skills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const a = generate(sk.id, lv, 's' + i);
    assert.deepEqual(generate(sk.id, lv, 's' + i), a, `${sk.id} not deterministic`);
    assert.deepEqual(JSON.parse(JSON.stringify(a)), a, 'item must survive JSON');
    assert.equal(mark(a.answer, rawFor(a.answer)).status, 'correct', `${sk.id} L${lv} ${a.prompt} → ${rawFor(a.answer)}`);
    for (const t of a.soTraps || []) {
      const traw = t.sols.map(r => r.map(v => (a.answer.dp != null ? decText(F(v.n, v.d), a.answer.dp) : `${v.n}/${v.d}`).replace('−', '-')).join(',')).join(';');
      assert.notEqual(mark(a.answer, traw).status, 'correct', `${sk.id} solution trap marks correct: ${a.prompt}`);
      assert.ok(t.why.length > 20);
    }
    for (const t of a.inTraps || []) { assert.notEqual(mark(a.answer, rawFor({ kind: 'inequality', set: t.set })).status, 'correct', `${sk.id} inequality trap marks correct: ${a.prompt}`); assert.ok(t.why.length > 20); }
    for (const t of a.alTraps || []) { assert.equal(mark(a.answer, t.expr).status, 'wrong', `${sk.id} algebra trap: ${a.prompt}`); assert.ok(t.why.length > 20); }
    for (const t of a.traps || []) assert.equal(mark(a.answer, t.v.d === 1 ? String(t.v.n) : `${t.v.n}/${t.v.d}`).status, 'wrong', `${sk.id} numeric trap equals the answer: ${a.prompt}`);
    for (const txt of [a.prompt, ...a.steps, ...(a.optionWhy || []).filter(Boolean), ...[...(a.traps || []), ...(a.soTraps || []), ...(a.inTraps || []), ...(a.alTraps || [])].map(t => t.why)]) assert.doesNotMatch(txt, /(^|[\s(=:,])-\d/, `hyphen for minus: ${txt}`);
    if (a.answer.kind === 'choice') a.answer.options.forEach((_, j) => { if (j !== a.answer.answer) assert.ok(a.optionWhy[j]); });
  }
});

test('sequences agree with the printed terms and rules', () => {
  for (let i = 0; i < N; i++) for (let lv = 1; lv <= 3; lv++) {
    const it = generate('maths.algebra.seq-terms', lv, 't' + i), p = it.prompt;
    let m;
    if ((m = p.match(/first term of a sequence is (−?\d+)\. The term-to-term rule is "(add|subtract) (\d+)"\. Work out the (\d+)th term/))) { let t = NUM(m[1]); for (let k = 1; k < +m[4]; k++) t += (m[2] === 'add' ? 1 : -1) * m[3]; assert.equal(it.answer.value, t, p); }
    else if ((m = p.match(/starts with (\d+)\. The rule is: multiply by (\d+), then (add|subtract) (\d+)\. Work out the 4th term/))) { let t = +m[1]; for (let k = 1; k < 4; k++) t = t * m[2] + (m[3] === 'add' ? 1 : -1) * m[4]; assert.equal(it.answer.value, t, p); }
    else if ((m = p.match(/nth term of a sequence is (.+)\. Work out the (\d+)th term/))) assert.equal(it.answer.value, ev(m[1], { n: +m[2] }), p);
    else if ((m = p.match(/nth term (.+) is equal to (−?\d+)\?/))) assert.equal(ev(m[1], { n: it.answer.value }), NUM(m[2]), p);
    else if ((m = p.match(/^Is (−?\d+) a term of the sequence with nth term (.+)\?$/))) { const yes = Array.from({ length: 500 }, (_, k) => ev(m[2], { n: k + 1 })).includes(NUM(m[1])); assert.equal(it.answer.options[it.answer.answer], yes ? 'Yes' : 'No', p); }
    else assert.fail('unrecognised ' + p);
  }
  for (let i = 0; i < N; i++) for (let lv = 1; lv <= 3; lv++) {
    const it = generate('maths.algebra.seq-nth-linear', lv, 'l' + i), p = it.prompt;
    const ts = (p.match(/((?:−?\d+, )+)…/) || [])[1]?.split(', ').filter(Boolean).map(NUM);
    let m;
    if (/^Find an expression/.test(p)) ts.forEach((t, k) => assert.equal(ev(it.answer.display, { n: k + 1 }), t, p));
    else if ((m = p.match(/is (−?\d+)\?$/))) { const d = ts[1] - ts[0]; assert.equal(ts[0] + (it.answer.value - 1) * d, NUM(m[1]), p); }
    else if ((m = p.match(/greater than (\d+)\.$/))) { const d = ts[1] - ts[0]; let t = ts[0]; while (t <= +m[1]) t += d; assert.equal(it.answer.value, t, p); }
    else assert.fail(p);
  }
  for (let lv = 1; lv <= 2; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.seq-nth-quadratic', lv, 'q' + i);
    const ts = it.prompt.match(/sequence ((?:−?\d+, )+)…/)[1].split(', ').filter(Boolean).map(NUM);
    ts.forEach((t, k) => assert.equal(ev(it.answer.display, { n: k + 1 }), t, it.prompt));
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.seq-special', lv, 'p' + i), p = it.prompt;
    const ts = p.match(/((?:−?\d+, )+)…/)[1].split(', ').filter(Boolean).map(NUM);
    if (lv === 1) {
      const name = it.answer.options[it.answer.answer], d = ts.slice(1).map((t, k) => t - ts[k]);
      const props = { 'Triangular numbers': ts.every((t, k) => t === ((k + 1) * (k + 2)) / 2), 'Square numbers': ts.every((t, k) => t === (k + 1) ** 2), 'Cube numbers': ts.every((t, k) => t === (k + 1) ** 3), Arithmetic: d.every(x => x === d[0]), 'Fibonacci-type': ts.slice(2).every((t, k) => t === ts[k] + ts[k + 1]), Geometric: ts.slice(1).every((t, k) => close(t / ts[k], ts[1] / ts[0])) };
      assert.ok(props[name], `${p} → ${name}`);
      it.answer.options.forEach((o, j) => { if (j !== it.answer.answer) assert.ok(!props[o], `${p}: ${o} also fits`); });
    } else if (/sum of the two/.test(p)) assert.equal(it.answer.value, ts.at(-1) + ts.at(-2));
    else if (/common ratio/.test(p)) assert.ok(close(fv(it.answer.value), ts[1] / ts[0]), p);
    else if (/geometric/.test(p)) assert.ok(close(it.answer.value, ts.at(-1) * (ts[1] / ts[0])), p);
    else if (/triangular/.test(p)) { const k = Math.round((Math.sqrt(8 * ts.at(-1) + 1) - 1) / 2); assert.equal(it.answer.value, ((k + 1) * (k + 2)) / 2, p); }
    else { const m = p.match(/square number (plus|minus) (\d+)/), c = (m[1] === 'plus' ? 1 : -1) * m[2], s = Math.round(Math.sqrt(ts.at(-1) - c)); assert.equal(it.answer.value, (s + 1) ** 2 + c, p); }
  }
});

test('inequality answers agree with the printed inequality at many values of x (including boundaries)', () => {
  let checked = 0;
  for (const id of ['maths.algebra.ineq-solve', 'maths.algebra.ineq-quadratic']) for (let lv = 1; lv <= 3; lv++) {
    if (lv > generate(id, 1, 'x').level + 2 || (id.endsWith('quadratic') && lv > 2)) continue;
    for (let i = 0; i < N; i++) {
      const it = generate(id, lv, 'i' + i), text = it.prompt.replace(/^Solve /, '');
      for (const x of grid(it.answer.set)) { assert.equal(inSet(it.answer.set, x), holds(text, x), `${it.prompt} at x = ${x}`); checked++; }
    }
  }
  assert.ok(checked > 10000);
  for (let lv = 1; lv <= 2; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.ineq-integers', lv, 'z' + i);
    const cond = it.prompt.match(/integer and (.+)\. List/)[1];
    const brute = []; for (let n = -60; n <= 60; n++) if (holds(cond.replace(/n/g, 'x'), n)) brute.push(n);
    assert.deepEqual([...it.answer.values].sort((a, b) => a - b), brute, it.prompt);
  }
});

test('quadratic solutions satisfy the printed equation; completed squares and turning points are right', () => {
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.quad-solve', lv, 'q' + i), [L, R] = it.prompt.replace(/^Solve /, '').split(' = ');
    const xs = it.answer.sols.map(r => fv(r[0]));
    assert.equal(new Set(xs).size, 2, it.prompt + ' needs two distinct solutions');
    for (const x of xs) assert.ok(close(ev(L, { x }), ev(R, { x })), `${it.prompt}: x = ${x}`);
  }
  for (let lv = 1; lv <= 2; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.quad-formula', lv, 'f' + i), [L, R] = it.prompt.replace(/^Solve /, '').replace(/\. Give.*$/, '').split(' = ');
    // Independent roots: bisection on L − R between sign changes.
    const f = x => ev(L, { x }) - ev(R, { x }), roots = [];
    for (let x = -30; x < 30; x += 0.25) if (Math.sign(f(x)) !== Math.sign(f(x + 0.25))) { let a = x, b = x + 0.25; for (let k = 0; k < 60; k++) { const m = (a + b) / 2; if (Math.sign(f(a)) === Math.sign(f(m))) a = m; else b = m; } roots.push(Math.round(((a + b) / 2) * 100) / 100); }
    assert.deepEqual(it.answer.sols.map(r => fv(r[0])).sort((a, b) => a - b), roots.sort((a, b) => a - b), it.prompt);
  }
  for (let i = 0; i < N; i++) {
    const a = generate('maths.algebra.quad-complete-square', 1, 'c' + i), q = a.prompt.match(/^Write (.+) in the form/)[1];
    for (const x of [-2.3, 0.7, 4.1]) assert.ok(close(ev(q, { x }), ev(a.answer.display, { x })), a.prompt);
    assert.match(a.answer.display, /^\(x [+−] \d+\)\^2( [+−] \d+)?$/);
    const b = generate('maths.algebra.quad-complete-square', 2, 'c' + i), y = b.prompt.match(/^y = (.+)\. By/)[1], [tx, ty] = b.answer.sols[0].map(fv);
    assert.ok(close(ev(y, { x: tx }), ty) && ev(y, { x: tx - 0.5 }) > ty && ev(y, { x: tx + 0.5 }) > ty, b.prompt);
  }
});

test('simultaneous solutions satisfy both printed equations', () => {
  for (const [id, levels] of [['maths.algebra.sim-solve', 3], ['maths.algebra.sim-nonlinear', 2]]) for (let lv = 1; lv <= levels; lv++) for (let i = 0; i < N; i++) {
    const it = generate(id, lv, 'm' + i);
    const eqs = it.prompt.replace(/^Solve the simultaneous equations /, '').split(' and ');
    assert.equal(eqs.length, 2);
    for (const [x, y] of it.answer.sols.map(r => r.map(fv))) for (const e of eqs) { const [L, R] = e.split(' = '); assert.ok(close(ev(L, { x, y }), ev(R, { x, y })), `${it.prompt}: (${x}, ${y})`); }
    if (id.endsWith('nonlinear')) assert.equal(it.answer.sols.length, 2);
  }
  for (let i = 0; i < N; i++) {
    const a = generate('maths.algebra.sim-form', 1, 'f' + i), m = [...a.prompt.matchAll(/(\d+) adult tickets? and (\d+) child tickets? cost £(\d+)/g)];
    const [A, Cc] = a.answer.sols[0].map(fv);
    for (const [, p, q, T] of m) assert.equal(p * A + q * Cc, +T, a.prompt);
    const b = generate('maths.algebra.sim-form', 2, 'f' + i), pts = [...b.prompt.matchAll(/\((−?\d+), (−?\d+)\)/g)].map(([, x, y]) => [NUM(x), NUM(y)]);
    const [mm, c] = b.answer.sols[0].map(fv);
    for (const [x, y] of pts) assert.equal(mm * x + c, y, b.prompt);
  }
});

test('set answers: solutions, inequalities and integer lists distinguish form from value', () => {
  const S = { kind: 'solutions', vars: ['x'], sols: [[{ n: 3, d: 1 }], [{ n: -5, d: 1 }]] };
  assert.equal(mark(S, '-5; 3').status, 'correct');
  assert.equal(mark(S, 'x = 3 or x = −5').status, 'correct');
  assert.equal(mark(S, '3').code, 'one-solution');
  assert.equal(mark(S, '-3;5').status, 'wrong');
  assert.equal(mark(S, '3;abc').status, 'invalid');
  const P = { kind: 'solutions', vars: ['x', 'y'], sols: [[{ n: 4, d: 1 }, { n: 3, d: 1 }]] };
  assert.equal(mark(P, '4,3').status, 'correct');
  assert.equal(mark(P, '3,4').code, 'swapped');
  const D = { kind: 'solutions', vars: ['x'], sols: [[{ n: 7, d: 5 }], [{ n: -131, d: 50 }]], dp: 2 };
  assert.equal(mark(D, '1.40; -2.62').status, 'correct');
  assert.equal(mark(D, '1.4; -2.62').code, 'dp-format');
  assert.equal(mark(D, '1.401; -2.619').code, 'dp-round');
  const I = { kind: 'inequality', letter: 'x', set: [{ lo: { n: 3, d: 1 }, loIn: false, hi: null, hiIn: false }] };
  for (const raw of ['x > 3', 'x>3', '3 < x', 'X > 3', 'x > 6/2']) assert.equal(mark(I, raw).status, 'correct', raw);
  assert.equal(mark(I, 'x >= 3').code, 'ineq-ends');
  assert.equal(mark(I, 'x < 3').status, 'wrong');
  assert.equal(mark(I, 'x = 3').status, 'invalid');
  assert.match(mark(I, 'x = 3').hint, /inequality/);
  const I2 = { kind: 'inequality', letter: 'x', set: [{ lo: null, loIn: false, hi: { n: -2, d: 1 }, hiIn: false }, { lo: { n: 3, d: 1 }, loIn: false, hi: null, hiIn: false }] };
  for (const raw of ['x < -2 or x > 3', 'x > 3 or x < −2', 'x<-2, x>3']) assert.equal(mark(I2, raw).status, 'correct', raw);
  assert.equal(mark(I2, '-2 < x < 3').status, 'wrong');
  assert.deepEqual(parseInequality('5 > x ≥ 1'), [{ lo: F(1), loIn: true, hi: F(5), hiIn: false }]);
  const Lst = { kind: 'list', values: [-1, 0, 1, 2] };
  assert.equal(mark(Lst, '2, 1, 0, -1').status, 'correct');
  const w = mark(Lst, '0, 1, 2, 3');
  assert.deepEqual([w.status, w.missing, w.extra], ['wrong', [-1], [3]]);
  assert.equal(mark(Lst, '1.5, 2').status, 'invalid');
});
