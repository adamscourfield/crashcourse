// Algebra batch 4: functions, algebraic fractions and indices, identities and proof, iteration,
// forming equations. Items are checked against their PRINTED prompts with a separate evaluator
// (plain JavaScript via Function), brute force, bisection and direct substitution. None of these
// checks reuse the generators' arithmetic or the marking parser.
import test from 'node:test';
import assert from 'node:assert/strict';
import { allSkills, generate } from '../dist/maths/skills.js';
import { mark } from '../dist/maths/answers.js';

const N = 200;
const ids = ['func-machine', 'func-notation', 'func-inverse', 'afrac-simplify', 'afrac-add', 'afrac-solve', 'alg-indices', 'identities', 'show-that', 'proof', 'iter-sign', 'iter-rearrange', 'iter-compute', 'form-geometry', 'form-context', 'form-interpret'].map(s => 'maths.algebra.' + s);
const skills = allSkills.filter(sk => ids.includes(sk.id));
const close = (a, b, tol = 1e-7) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
const NUM = t => Number(String(t).replace(/−/g, '-'));
const fv = f => f.n / f.d;
const XS = [-2.7, -1.3, 0.4, 1.9, 3.6, 5.2];

/** Markup or parser text → a JavaScript expression in the given letters. */
function js(markup) {
  let e = String(markup).trim().replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/').replace(/_\{n\}|_n|_\{\d+\}|_\d/g, '');
  e = e.replace(/∛\(/g, 'C(').replace(/√\(/g, 'Q(');
  e = e.replace(/\^\{([^{}/]+)\}/g, '^($1)');
  for (let i = 0; i < 4; i++) e = e.replace(/\{([^{}]+)\/([^{}]+)\}/g, '(($1)/($2))');
  e = e.replace(/\^\(([^()]+)\)/g, '^($1)').replace(/\^/g, '**').replace(/\s+/g, '');
  for (let i = 0; i < 3; i++) e = e.replace(/(\d|[a-z]|\))(?=[a-zCQ(])/g, '$1*').replace(/([a-z])(?=\d)/g, '$1*');
  e = e.replace(/(^|[(+\-*/])-/g, '$1(-1)*').replace(/\*\*\(-1\)\*/g, '**-');
  assert.match(e, /^[\w+\-*/().]+$/, 'unexpected characters in ' + markup + ' → ' + e);
  return e;
}
const fn = (markup, letters = ['x']) => Function(...letters, 'C', 'Q', `return (${js(markup)});`);
const ev = (markup, vals) => { const k = Object.keys(vals); return fn(markup, k)(...k.map(n => vals[n]), Math.cbrt, Math.sqrt); };
const evx = (markup, x, letter = 'x') => ev(markup, { [letter]: x });
const ansAt = (it, x, letter = 'x') => evx(it.answer.expr, x, letter);
const correctOption = it => it.answer.options[it.answer.answer];
const isPrime = n => { if (n < 2 || !Number.isInteger(n)) return false; for (let k = 2; k * k <= n; k++) if (n % k === 0) return false; return true; };
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'algebra') return a.expr;
  if (a.kind === 'solutions') return a.sols.map(r => r.map(v => `${v.n}/${v.d}`).join(',')).join(';');
  if (a.kind === 'list') return a.values.join(', ');
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'fraction') return `${a.value.n}/${a.value.d}`;
  if (a.kind === 'decimal') return (a.value.n / a.value.d).toFixed(a.dp);
  throw new Error('kind ' + a.kind);
}
const items = (id, lv, n = N) => Array.from({ length: n }, (_, i) => generate(id, lv, 'b4-' + i));
const bisect = (f, lo, hi) => { let a = lo, b = hi; for (let i = 0; i < 200; i++) { const m = (a + b) / 2; if (Math.sign(f(m)) === Math.sign(f(a))) a = m; else b = m; } return (a + b) / 2; };

test('batch 4 skills: deterministic, JSON-safe, self-marking, traps all wrong and explained', () => {
  assert.equal(skills.length, 16);
  for (const sk of skills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = generate(sk.id, lv, 'g' + i), again = generate(sk.id, lv, 'g' + i);
    const txt = JSON.stringify(it);
    assert.equal(txt, JSON.stringify(again), `${sk.id}@${lv} not deterministic`);
    assert.deepEqual(JSON.parse(txt), it, `${sk.id}@${lv} not JSON-safe`);
    assert.doesNotMatch(txt, /NaN|undefined|Infinity|\[object/, `${sk.id}@${lv}: ${it.prompt}`);
    assert.doesNotMatch(it.prompt, /(^|[\s(=:,×÷])-\d/, `hyphen minus in ${it.prompt}`);
    assert.doesNotMatch(it.prompt + it.steps.join(' '), /[a-z]\^1(?![\d/])/, `x^1 left in ${it.prompt}`);
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', `${sk.id}@${lv}#${i} own answer: ${it.prompt}`);
    assert.ok(it.steps.length >= 1);
    for (const t of it.traps || []) { assert.notEqual(mark(it.answer, t.v.d === 1 ? String(t.v.n) : `${t.v.n}/${t.v.d}`).status, 'correct', `${sk.id} trap marks correct`); assert.ok(t.why.length > 20); }
    for (const t of it.alTraps || []) { assert.notEqual(mark(it.answer, t.expr).status, 'correct', `${sk.id} algebra trap ${t.expr} marks correct`); assert.ok(t.why.length > 20); }
    for (const t of it.soTraps || []) { assert.notEqual(mark(it.answer, t.sols.map(r => r.map(v => `${v.n}/${v.d}`).join(',')).join(';')).status, 'correct'); assert.ok(t.why.length > 20); }
    if (it.answer.kind === 'choice') { it.optionWhy.forEach((w, k) => (k === it.answer.answer ? assert.equal(w, null) : assert.ok(w && w.length > 15, `${sk.id}: option ${it.answer.options[k]} unexplained`))); assert.equal(new Set(it.answer.options).size, it.answer.options.length); }
  }
});

test('functions: machines, notation, inverses and composites match the printed question', () => {
  const OP = { '×': (x, k) => x * k, '÷': (x, k) => x / k, '+': (x, k) => x + k, '−': (x, k) => x - k };
  const ops = p => [...p.matchAll(/"([×÷+−]) (\d+)"/g)].map(m => [m[1], Number(m[2])]);
  const run = (o, x) => o.reduce((v, [s, k]) => OP[s](v, k), x);
  for (const it of items('maths.algebra.func-machine', 1)) assert.equal(run(ops(it.prompt), NUM(it.prompt.match(/input is (−?\d+)/)[1])), it.answer.value);
  for (const it of items('maths.algebra.func-machine', 2)) assert.equal(run(ops(it.prompt), it.answer.value), NUM(it.prompt.match(/output is (−?\d+)/)[1]));
  for (const it of items('maths.algebra.func-machine', 3)) for (const x of XS) assert.ok(close(ansAt(it, x), run(ops(it.prompt), x)), it.prompt);
  const fOf = p => p.match(/f\(x\) = (.+?)(?:\. | and g)/)[1], gOf = p => p.match(/g\(x\) = (.+?)\. /)[1];
  for (const it of items('maths.algebra.func-notation', 1)) assert.ok(close(evx(fOf(it.prompt), NUM(it.prompt.match(/f\((−?\d+)\)\.$/)[1])), it.answer.value), it.prompt);
  for (const it of items('maths.algebra.func-notation', 2)) {
    const k = NUM(it.prompt.match(/= (−?\d+)\.$/)[1]), vals = it.answer.kind === 'solutions' ? it.answer.sols.map(r => fv(r[0])) : [it.answer.kind === 'integer' ? it.answer.value : fv(it.answer.value)];
    for (const v of vals) assert.ok(close(evx(fOf(it.prompt), v), k), it.prompt);
  }
  for (const it of items('maths.algebra.func-notation', 3)) {
    const f = fOf(it.prompt), inner = it.prompt.match(/Find (\d*)f\(([^)]*)\)/);
    for (const x of XS) {
      const want = inner[1] ? Number(inner[1]) * evx(f, x) : evx(f, evx(inner[2], x));
      assert.ok(close(ansAt(it, x), want), it.prompt);
    }
  }
  for (const it of items('maths.algebra.func-inverse', 1)) for (const x of XS) assert.ok(close(evx(fOf(it.prompt), ansAt(it, x)), x), `f(f⁻¹(x)) ≠ x: ${it.prompt}`);
  for (const it of items('maths.algebra.func-inverse', 2)) {
    const f = fOf(it.prompt), g = gOf(it.prompt), fg = it.prompt.includes('Find fg');
    for (const x of XS) assert.ok(close(ansAt(it, x), fg ? evx(f, evx(g, x)) : evx(g, evx(f, x))), it.prompt);
  }
  for (const it of items('maths.algebra.func-inverse', 3)) {
    const v = it.answer.kind === 'integer' ? it.answer.value : fv(it.answer.value), f = fOf(it.prompt);
    const inv = it.prompt.match(/f\^\{−1\}\((−?\d+)\)/);
    if (inv) { assert.ok(close(evx(f, v), NUM(inv[1])), it.prompt); continue; }
    const [, name, t] = it.prompt.match(/(fg|gf)\((−?\d+)\)/), g = gOf(it.prompt), x = NUM(t);
    assert.ok(close(v, name === 'fg' ? evx(f, evx(g, x)) : evx(g, evx(f, x))), it.prompt);
  }
});

test('algebraic fractions and indices: equal to the printed expression wherever it is defined', () => {
  for (let lv = 1; lv <= 3; lv++) for (const it of items('maths.algebra.afrac-simplify', lv)) {
    const q = it.prompt.replace('Simplify fully ', '');
    for (const x of XS) { const w = evx(q, x); if (Number.isFinite(w) && Math.abs(w) < 1e6) assert.ok(close(ansAt(it, x), w), `${it.prompt} at ${x}`); }
  }
  for (let lv = 1; lv <= 3; lv++) for (const it of items('maths.algebra.afrac-add', lv)) {
    const q = it.prompt.replace(/^Write (.*) as a single fraction.*$/, '$1').replace(/^Simplify fully /, '');
    for (const x of XS) { const w = evx(q, x); if (Number.isFinite(w) && Math.abs(w) < 1e6) assert.ok(close(ansAt(it, x), w), `${it.prompt} at ${x}`); }
  }
  for (let lv = 1; lv <= 2; lv++) for (const it of items('maths.algebra.afrac-solve', lv)) {
    const [l, r] = it.prompt.replace('Solve ', '').split(' = '), vals = it.answer.kind === 'solutions' ? it.answer.sols.map(s => fv(s[0])) : [it.answer.kind === 'integer' ? it.answer.value : fv(it.answer.value)];
    for (const v of vals) assert.ok(close(evx(l, v), NUM(r)), `${it.prompt}: x = ${v}`);
    if (lv === 2) { // brute force: no other solutions among the integers
      const hits = []; for (let x = -40; x <= 40; x++) { const y = evx(l, x); if (Number.isFinite(y) && close(y, 1)) hits.push(x); }
      assert.deepEqual(hits.sort((a, b) => a - b), [...vals].sort((a, b) => a - b), it.prompt);
    }
  }
  for (let lv = 1; lv <= 3; lv++) for (const it of items('maths.algebra.alg-indices', lv)) {
    const q = it.prompt.replace('Simplify ', '');
    for (const x of [0.6, 1.3, 2.2, 3.7]) assert.ok(close(ansAt(it, x), evx(q, x), 1e-9), `${it.prompt} at ${x}`);
  }
});

test('identities, show-that and proof: checked by substitution and brute force over whole numbers', () => {
  for (const it of items('maths.algebra.identities', 1)) {
    const [l, r] = it.prompt.replace(/^Is (.*) an identity or an equation\?$/, '$1').split(' = ');
    const same = XS.every(x => close(evx(l, x), evx(r, x)));
    assert.equal(correctOption(it).startsWith('An identity'), same, it.prompt);
  }
  for (let lv = 2; lv <= 3; lv++) for (const it of items('maths.algebra.identities', lv)) {
    const [l, r] = it.prompt.split('. Find')[0].split(' ≡ '), vals = Object.fromEntries(it.answer.vars.map((v, i) => [v, fv(it.answer.sols[0][i])]));
    for (const x of XS) assert.ok(close(ev(l, { ...vals, x }), ev(r, { ...vals, x })), it.prompt);
  }
  for (const it of items('maths.algebra.show-that', 1)) {
    const opt = correctOption(it), parts = opt.split(/, | and /).map(t => t.trim()), ns = [...Array(25).keys()];
    if (/always odd/.test(it.prompt)) assert.ok(ns.every(n => Math.abs(evx(opt, n, 'n') % 2) === 1), opt);
    else if (/always even/.test(it.prompt)) assert.ok(ns.every(n => evx(opt, n, 'n') % 2 === 0), opt);
    else if (/multiple of (\d+)/.test(it.prompt)) { const k = Number(it.prompt.match(/multiple of (\d+)/)[1]); assert.ok(ns.every(n => evx(opt, n, 'n') % k === 0), opt); }
    else if (/three consecutive/.test(it.prompt)) assert.ok(ns.every(n => parts.map(p => evx(p, n, 'n')).every((v, i, a) => !i || v === a[i - 1] + 1)), opt);
    else if (/consecutive odd/.test(it.prompt)) assert.ok(ns.every(n => { const [a, b] = parts.map(p => evx(p, n, 'n')); return a % 2 === 1 && b === a + 2; }), opt);
    else assert.fail('unclassified ' + it.prompt);
    for (const o of it.answer.options.filter(o => o !== opt)) { // every wrong option fails for some n
      const ps = o.split(/, | and /);
      const okAll = ns.every(n => { const v = ps.map(p => evx(p, n, 'n')); return /odd\?/.test(it.prompt) ? Math.abs(v[0] % 2) === 1 : /even\?/.test(it.prompt) ? v[0] % 2 === 0 : /multiple of (\d+)/.test(it.prompt) ? Number.isInteger(v[0]) && v[0] % Number(it.prompt.match(/multiple of (\d+)/)[1]) === 0 : /three/.test(it.prompt) ? v.every((y, i) => !i || y === v[i - 1] + 1) : v[0] % 2 === 1 && v[1] === v[0] + 2; });
      assert.ok(!okAll, `wrong option ${o} always works: ${it.prompt}`);
    }
  }
  for (const it of items('maths.algebra.show-that', 2)) {
    const e = it.prompt.match(/simplify (.+?) to show/)[1];
    for (const n of [0, 1, 2, 5, 9, 13]) assert.ok(close(ansAt(it, n, 'n'), evx(e, n, 'n')), it.prompt);
    const vals = [...Array(20).keys()].map(n => evx(e, n, 'n'));
    if (/multiple of (\d+)/.test(it.prompt)) assert.ok(vals.every(v => v % Number(it.prompt.match(/multiple of (\d+)/)[1]) === 0));
    if (/odd/.test(it.prompt)) assert.ok(vals.every(v => v % 2 === 1));
    if (/same for every/.test(it.prompt)) assert.equal(new Set(vals).size, 1);
  }
  for (const it of items('maths.algebra.show-that', 3)) {
    const opt = correctOption(it), wrong = it.answer.options.filter(o => o !== opt);
    if (/prime/.test(it.prompt) && /n = /.test(opt)) {
      const claim = it.prompt.match(/"(.+?) is prime/)[1], val = o => evx(claim, Number(o.slice(4)), 'n');
      assert.ok(!isPrime(val(opt)), it.prompt); for (const o of wrong) assert.ok(isPrime(val(o)), `${o}: ${it.prompt}`);
    } else if (/Squaring/.test(it.prompt)) {
      const v = o => evx(o, 0); assert.ok(v(opt) ** 2 < v(opt)); for (const o of wrong) assert.ok(v(o) ** 2 > v(o));
    } else {
      const sum = o => o.split(' + ').map(Number), [a, b] = sum(opt);
      assert.ok(isPrime(a) && isPrime(b) && (a + b) % 2 === 1); for (const o of wrong) { const [c, d] = sum(o); assert.ok(isPrime(c) && isPrime(d) && (c + d) % 2 === 0); }
    }
  }
  for (const it of items('maths.algebra.proof', 1)) {
    const work = it.prompt.match(/starts: (.+)\. Which/)[1], last = work.split(' = ').at(-1), opt = correctOption(it);
    const letters = /[ab]/.test(work) ? ['a', 'b'] : ['n'], probe = v => Object.fromEntries(letters.map((l, i) => [l, v + i * 3]));
    const m = opt.match(/^= ([^,:]+)/);
    if (m) for (const v of [0, 1, 4, 7]) assert.ok(close(ev(m[1], probe(v)), ev(last, probe(v))), `${opt} vs ${work}`);
    for (const o of it.answer.options.filter(o => o !== opt)) { const k = o.match(/^= ([^,:]+)/); if (k) assert.ok([0, 1, 4, 7].some(v => !close(ev(k[1], probe(v)), ev(last, probe(v)))) || /which is (odd|even)|ends in 0/.test(o), `wrong option is algebraically right: ${o}`); }
  }
  for (const it of items('maths.algebra.proof', 2)) {
    const e = it.prompt.match(/numbers, (.+?), is a multiple/)?.[1] || it.prompt.match(/that (.+?) is a multiple/)[1], k = Number(it.prompt.match(/multiple of (\d+)/)[1]);
    for (let n = 0; n < 25; n++) { assert.ok(close(ansAt(it, n, 'n'), evx(e, n, 'n')), it.prompt); assert.equal(evx(e, n, 'n') % k, 0, it.prompt); }
  }
  for (const it of items('maths.algebra.proof', 3)) {
    const q = it.prompt.match(/that (.+?) (>|≥)/)[1];
    for (const x of XS) assert.ok(close(ansAt(it, x), evx(q, x)), it.prompt);
    let min = Infinity; for (let x = -20; x <= 20; x += 0.001) min = Math.min(min, evx(q, x));
    const bound = it.prompt.includes('≥') ? NUM(it.prompt.match(/≥ (\d+)/)[1]) : 0;
    assert.ok(min >= bound - 1e-6 && min > 0, `${it.prompt} has minimum ${min}`);
  }
});

test('iteration: sign changes, rearrangements and iterates agree with direct calculation', () => {
  for (const it of items('maths.algebra.iter-sign', 1)) {
    const f = it.prompt.match(/f\(x\) = (.+?)\. Work/)[1], [a, b] = [...it.prompt.matchAll(/f\((−?\d+)\) and f\((−?\d+)\)/g)][0].slice(1).map(NUM);
    const [p, q] = it.answer.sols[0].map(fv);
    assert.equal(p, evx(f, a)); assert.equal(q, evx(f, b)); assert.ok(p * q < 0, it.prompt);
  }
  for (const it of items('maths.algebra.iter-sign', 2)) {
    const f = it.prompt.match(/^(.+?) = 0/)[1], roots = [];
    for (let x = 0; x < 50; x += 0.005) if (Math.sign(evx(f, x)) !== Math.sign(evx(f, x + 0.005))) roots.push(x);
    assert.equal(roots.length, 1, it.prompt);
    assert.deepEqual(it.answer.values, [Math.floor(roots[0]), Math.floor(roots[0]) + 1], it.prompt);
  }
  for (let lv = 1; lv <= 2; lv++) for (const it of items('maths.algebra.iter-rearrange', lv)) {
    const f = it.prompt.match(/rearrangement of (.+?) = 0/)[1], fx = x => evx(f, x);
    const root = bisect(fx, 0.01, fx(0.01) * fx(20) < 0 ? 20 : 0.02);
    assert.ok(Math.abs(fx(root)) < 1e-6, it.prompt);
    const g = o => evx(o.replace(/^x = /, ''), root);
    assert.ok(close(g(correctOption(it)), root, 1e-6), `${correctOption(it)}: ${it.prompt}`);
    for (const o of it.answer.options.filter(o => o !== correctOption(it))) { const v = g(o); assert.ok(!Number.isFinite(v) || !close(v, root, 1e-4), `${o} also fixes the root: ${it.prompt}`); }
  }
  for (let lv = 1; lv <= 3; lv++) for (const it of items('maths.algebra.iter-compute', lv)) {
    const g = it.prompt.match(/x_\{n \+ 1\} = (.+?) with x_0/)[1], x0 = NUM(it.prompt.match(/x_0 = (\d+)/)[1]), v = fv(it.answer.value);
    const xs = [x0]; for (let i = 0; i < 80; i++) xs.push(evx(g, xs.at(-1)));
    assert.ok(it.calculator, 'iteration items are calculator items');
    if (lv === 1) assert.ok(Math.abs(xs[1] - v) <= 0.0005 + 1e-9, it.prompt);
    if (lv === 2) assert.ok(Math.abs(xs[3] - v) <= 0.0005 + 1e-9, it.prompt);
    if (lv === 3) {
      const f = it.prompt.match(/^(.+?) = 0/)[1];
      assert.ok(Math.abs(evx(f, xs.at(-1))) < 1e-9, `iteration does not converge to a root: ${it.prompt}`);
      assert.equal(v.toFixed(2), xs.at(-1).toFixed(2), it.prompt);
      assert.ok(Math.abs(xs.at(-1) - v) < 0.0045, 'root not too close to a rounding boundary');
    }
  }
});

test('forming equations: the answer satisfies the story it was built from', () => {
  const angles = p => [...p.matchAll(/\(([^()]+)\)°/g)].map(m => m[1]);
  const TOTAL = p => (/triangle|straight line/.test(p) ? 180 : 360);
  for (const it of items('maths.algebra.form-geometry', 1)) {
    const x = it.answer.value, as = angles(it.prompt).map(a => evx(a, x));
    assert.equal(as.reduce((s, a) => s + a, 0), TOTAL(it.prompt), it.prompt);
    assert.ok(as.every(a => a > 0), it.prompt);
  }
  for (const it of items('maths.algebra.form-geometry', 2)) {
    const x = it.answer.value, nums = [...it.prompt.matchAll(/\(([^()]+)\) cm/g)].map(m => evx(m[1], x)), total = NUM(it.prompt.match(/is (\d+) cm/)[1]);
    if (/square/.test(it.prompt)) assert.equal(4 * nums[0], total);
    else if (/perimeter/.test(it.prompt)) assert.equal(2 * (nums[0] + nums[1]), total);
    else assert.equal(NUM(it.prompt.match(/width (\d+) cm/)[1]) * nums[0], total);
    assert.ok(nums.every(v => v > 0), it.prompt);
  }
  for (const it of items('maths.algebra.form-geometry', 3)) {
    if (/triangle are/.test(it.prompt)) {
      const es = angles(it.prompt), x = [...Array(400).keys()].find(x => es.reduce((s, e) => s + evx(e, x), 0) === 180);
      assert.equal(it.answer.value, Math.max(...es.map(e => evx(e, x))), it.prompt);
    } else {
      const [a, b] = [...it.prompt.matchAll(/\(([^()]+)\) cm/g)].map(m => m[1]), base = NUM(it.prompt.match(/third side is (\d+) cm/)[1]);
      const x = [...Array(400).keys()].find(x => evx(a, x) === evx(b, x));
      assert.equal(it.answer.value, 2 * evx(a, x) + base, it.prompt);
      assert.ok(2 * evx(a, x) > base, 'triangle inequality');
    }
  }
  for (const it of items('maths.algebra.form-context', 1)) {
    const x = it.answer.value, d = NUM(it.prompt.match(/has (\d+) more/)[1]), k = /twice/.test(it.prompt) ? 2 : 3, T = NUM(it.prompt.match(/have (\d+) /)[1]);
    assert.equal(x + x + d + k * x, T, it.prompt);
  }
  for (const it of items('maths.algebra.form-context', 2)) {
    const [, cnt, word, S] = it.prompt.match(/sum of (\d) consecutive (whole|even|odd) numbers is (\d+)/), step = word === 'whole' ? 1 : 2;
    const sols = []; for (let n = -50; n < 400; n++) { const ns = Array.from({ length: Number(cnt) }, (_, i) => n + i * step); if (ns.reduce((s, v) => s + v, 0) === Number(S) && (word === 'whole' || (word === 'even') === (n % 2 === 0))) sols.push(ns); }
    assert.equal(sols.length, 1, it.prompt);
    assert.equal(it.answer.value, /largest/.test(it.prompt) ? sols[0].at(-1) : sols[0][0], it.prompt);
  }
  for (const it of items('maths.algebra.form-context', 3)) {
    const [a, b, c, d] = it.prompt.match(/by (\d+) and subtract (\d+).*by (\d+) and add (\d+)/).slice(1).map(Number), n = it.answer.value;
    assert.equal(a * n - b, c * n + d, it.prompt);
  }
  for (const it of items('maths.algebra.form-interpret', 1)) {
    const nums = it.prompt.match(/\d+/g).map(Number);
    if (/minibus/.test(it.prompt)) { const [k, N] = nums; assert.equal(it.answer.value, Math.ceil(N / k)); assert.ok(k * it.answer.value >= N && k * (it.answer.value - 1) < N); }
    else if (/eggs/.test(it.prompt)) { const [k, N] = nums; assert.equal(it.answer.value, Math.floor(N / k)); }
    else { const [k, N] = nums; assert.ok(k * it.answer.value <= N && k * (it.answer.value + 1) > N); }
  }
  for (const it of items('maths.algebra.form-interpret', 2)) {
    const v = it.answer.value; assert.ok(v > 0);
    if (/rectangle/.test(it.prompt)) { const [p, A] = [NUM(it.prompt.match(/x \+ (\d+)/)[1]), NUM(it.prompt.match(/area is (\d+)/)[1])]; assert.equal(v * (v + p), A); }
    else assert.equal(v * (v + 1), NUM(it.prompt.match(/is (\d+)\./)[1]));
  }
});

test('single-fraction and divided-monomial marking', () => {
  const s = { kind: 'algebra', expr: '(x+3)/(x-2)', form: 'fraction', vars: ['x'] };
  assert.equal(mark(s, '(x+3)/(x-2)').status, 'correct');
  assert.equal(mark(s, '-(x+3)/(2-x)').status, 'correct');
  assert.deepEqual(mark(s, '(x^2+5x+6)/(x^2-4)'), { status: 'partial', code: 'not-cancelled' });
  assert.deepEqual(mark(s, '(2x+6)/(2x-4)'), { status: 'partial', code: 'not-cancelled' });
  assert.deepEqual(mark(s, 'x/(x-2)+3/(x-2)'), { status: 'partial', code: 'want-single-fraction' });
  assert.equal(mark(s, '(x+2)/(x-2)').status, 'wrong');
  const t = { kind: 'algebra', expr: '2(x+3)/5', form: 'fraction', vars: ['x'] };
  for (const ok of ['2(x+3)/5', '(2x+6)/5']) assert.equal(mark(t, ok).status, 'correct');
  assert.deepEqual(mark(t, '(4x+12)/10'), { status: 'partial', code: 'not-cancelled' });
  const u = { kind: 'algebra', expr: '1/(9x^4)', form: 'simplified', vars: ['x'] };
  for (const ok of ['1/(9x^4)', '(1/9)x^-4', 'x^-4/9']) assert.equal(mark(u, ok).status, 'correct', ok);
  assert.equal(mark({ kind: 'algebra', expr: 'x/(2y)', form: 'notation', vars: ['x', 'y'] }, 'x/(2y)').status, 'correct');
});
