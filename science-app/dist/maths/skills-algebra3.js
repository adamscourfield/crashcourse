// Edexcel 1MA1 Algebra, batch 4: functions (A7; Higher: notation, inverse, composite), algebraic
// fractions and fractional/negative algebraic indices (A4, A18 Higher), identities and proof (A6;
// Higher: proof), iteration (A20, Higher) and forming and solving equations in context (A21, A17).
// Same contract as the other skill modules: generators are pure functions of (level, seed).
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, gcd, num, fracMarkup } from './frac.js?v=20261023-maths-r9';
import { polyM, makeA, fixMinus, algAns, algTrap, valAns, choiceItem } from './skills-algebra.js?v=20261023-maths-r9';

const fr = v => { const f = typeof v === 'number' ? F(v) : v; return { n: f.n, d: f.d }; };
const fv = f => (f.d === 1 ? num(f.n) : fracMarkup(f));
const nz = (r, lo, hi) => { let v; do v = int(r, lo, hi); while (v === 0); return v; };
const intAns = v => ({ kind: 'integer', value: v });
const tv = (v, why) => ({ v: typeof v === 'number' ? F(v) : v, why });
const sols = (vals, extra = {}) => ({ kind: 'solutions', vars: ['x'], sols: vals.map(v => [fr(v)]), ...extra });
const pairs = (list, vars, extra = {}) => ({ kind: 'solutions', vars, sols: list.map(p => p.map(fr)), ...extra });
const sT = (list, why) => ({ sols: list.map(p => (Array.isArray(p) ? p.map(fr) : [fr(p)])), why });
const lin = (a, b, v = 'x') => polyM([[a, v], [b, '']]);
const sg = (b, first = false) => (b < 0 ? (first ? '−' : ' − ') : first ? '' : ' + ');
const pm = b => `${sg(b)}${Math.abs(b)}`; // " + 3" or " − 3"
const br = n => (n < 0 ? `(${num(n)})` : num(n));
const sameRows = (a, b) => a.length === b.length && a.every(r => b.some(s => r.every((x, i) => x.n === s[i].n && x.d === s[i].d)));
const raw = (expr, why) => ({ expr, why }); // an algebra trap given directly as parser text
const isPrime = n => { if (n < 2) return false; for (let k = 2; k * k <= n; k++) if (n % k === 0) return false; return true; };
const rnd = (v, dp) => { const k = 10 ** dp; return F(Math.round(v * k), k); };
const fix = (v, dp) => v.toFixed(dp).replace('-', '−');

function make(skill, level, seed, o) {
  const it = makeA(skill, level, seed, o);
  const one = t => (typeof t === 'string' ? t.replace(/([a-z])\^1(?![\d/])/g, '$1') : t); // x^1 → x
  it.prompt = one(it.prompt); it.steps = it.steps.map(one);
  if (it.answer.display) it.answer = { ...it.answer, display: one(it.answer.display) };
  if (it.alTraps) it.alTraps = it.alTraps.map(t => ({ ...t, why: one(t.why) }));
  if (o.answer.tol != null) { const t = o.answer.value.n / o.answer.value.d; it.traps = it.traps.filter(tr => Math.abs(tr.v.n / tr.v.d - t) > o.answer.tol + 1e-9); } // a trap inside the tolerance would be marked right
  if (o.soTraps) it.soTraps = o.soTraps.filter(t => !sameRows(t.sols, o.answer.sols)).map(t => ({ ...t, why: fixMinus(t.why) }));
  return it;
}
const choice = (r, correct, wrong, why) => choiceItem(r, correct, wrong, why);

/* ═════════ A7 functions ═════════ */
const APPLY = { '×': (x, k) => x * k, '÷': (x, k) => x / k, '+': (x, k) => x + k, '−': (x, k) => x - k };
const INV = { '×': '÷', '÷': '×', '+': '−', '−': '+' };
const opT = ([o, k]) => `${o} ${k}`;
const run = (ops, x) => ops.reduce((v, [o, k]) => APPLY[o](v, k), x);
const whole = v => Number.isInteger(v) && Math.abs(v) < 1000;

const funcMachine = {
  id: 'maths.algebra.func-machine',
  name: 'Function machines',
  levels: [{ label: 'Input to output' }, { label: 'Output to input' }, { label: 'Write the output as an expression' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (;;) {
      const mOp = [pick(r, level === 3 ? ['×', '×', '÷'] : ['×', '×', '÷']), int(r, 2, 6)], aOp = [pick(r, ['+', '−']), int(r, 1, 12)];
      const ops = r() < 0.5 ? [mOp, aOp] : [aOp, mOp];
      const desc = `A function machine does "${opT(ops[0])}", then "${opT(ops[1])}".`;
      if (level === 1) {
        const x = int(r, -6, 15), y = run(ops, x), back = run([ops[1], ops[0]], x);
        if (!whole(y)) continue;
        return make(this.id, level, seed, { prompt: `${desc} The input is ${num(x)}. Work out the output.`, answer: intAns(y), steps: [`${num(x)} ${opT(ops[0])} = ${num(run([ops[0]], x))}`, `${num(run([ops[0]], x))} ${opT(ops[1])} = ${num(y)}`], traps: whole(back) ? [tv(back, `Do the operations in order: "${opT(ops[0])}" first, then "${opT(ops[1])}".`)] : [] });
      }
      if (level === 2) {
        const x = int(r, -6, 15), y = run(ops, x);
        if (!whole(y)) continue;
        const inv = [[INV[ops[1][0]], ops[1][1]], [INV[ops[0][0]], ops[0][1]]], wrongOrder = run([inv[1], inv[0]], y), fwd = run(ops, y);
        return make(this.id, level, seed, { prompt: `${desc} The output is ${num(y)}. Work out the input.`, answer: intAns(x), steps: ['Work backwards: undo the last operation first, using inverse operations.', `${num(y)} ${opT(inv[0])} = ${num(run([inv[0]], y))}`, `${num(run([inv[0]], y))} ${opT(inv[1])} = ${num(x)}`], traps: [...(whole(wrongOrder) ? [tv(wrongOrder, `Undo the operations in reverse order: undo "${opT(ops[1])}" first, then "${opT(ops[0])}".`)] : []), ...(whole(fwd) ? [tv(fwd, 'You put the output through the machine again. To find the input, use inverse operations in reverse order.')] : [])] });
      }
      const [m, k] = mOp, [a, b] = aOp, s = a === '+' ? b : -b;
      const mulFirst = ops[0] === mOp;
      const ans = mulFirst ? (m === '×' ? lin(k, s) : `{x/${k}}${pm(s)}`) : m === '×' ? `${k}(${lin(1, s)})` : `{${lin(1, s)}/${k}}`;
      const other = mulFirst ? (m === '×' ? `${k}(${lin(1, s)})` : `{${lin(1, s)}/${k}}`) : m === '×' ? lin(k, s) : `{x/${k}}${pm(s)}`;
      return make(this.id, level, seed, { prompt: `${desc} The input is x. Write an expression for the output.`, answer: algAns(ans, 'any', ['x']), steps: [`Start with x.`, `${opT(ops[0])}: ${mulFirst ? (m === '×' ? `${k}x` : `{x/${k}}`) : lin(1, s)}`, `${opT(ops[1])}: ${ans}`], note: 'Use brackets when a whole expression is multiplied or divided, for example 3(x + 2) or (x + 2)/3.', alTraps: [algTrap(other, `Follow the order of the machine: "${opT(ops[0])}" happens first, ${mulFirst ? 'so it applies to x alone.' : 'so the whole of the result is then ' + (m === '×' ? 'multiplied' : 'divided') + ': use brackets.'}`)] });
    }
  },
};

const funcNotation = {
  id: 'maths.algebra.func-notation',
  name: 'Function notation',
  higherOnly: true,
  levels: [{ label: 'Evaluate f(a)' }, { label: 'Solve f(x) = k' }, { label: 'Expressions such as f(2x)' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, ['lin', 'quad', 'ax2']);
      const t = nz(r, -5, 6);
      if (kind === 'lin') { const a = nz(r, -6, 9), b = nz(r, -12, 12), v = a * t + b; return make(this.id, level, seed, { prompt: `f(x) = ${lin(a, b)}. Work out f(${num(t)}).`, answer: intAns(v), steps: [`Replace x with ${num(t)}: ${num(a)} × ${br(t)}${pm(b)}`, `= ${num(v)}`], traps: [tv(a + t + b, `${a}x means ${a} × x: work out ${num(a)} × ${br(t)}.`)] }); }
      if (kind === 'quad') { const b = nz(r, -6, 6), c = int(r, -9, 9), tt = -Math.abs(t) || -2, v = tt * tt + b * tt + c; return make(this.id, level, seed, { prompt: `f(x) = ${polyM([[1, 'x^2'], [b, 'x'], [c, '']])}. Work out f(${num(tt)}).`, answer: intAns(v), steps: [`(${num(tt)})^2 = ${tt * tt}`, `${num(b)} × ${br(tt)} = ${num(b * tt)}`, `${tt * tt}${pm(b * tt)}${c ? pm(c) : ''} = ${num(v)}`], traps: [tv(-tt * tt + b * tt + c, `(${num(tt)})^2 = ${num(tt)} × ${br(tt)} = ${tt * tt}, a positive number.`)] }); }
      const a = int(r, 2, 4), c = nz(r, -9, 9), v = a * t * t + c;
      return make(this.id, level, seed, { prompt: `f(x) = ${polyM([[a, 'x^2'], [c, '']])}. Work out f(${num(t)}).`, answer: intAns(v), steps: [`Square first: ${br(t)}^2 = ${t * t}`, `${a} × ${t * t}${pm(c)} = ${num(v)}`], traps: [tv(a * a * t * t + c, `${a}x^2 means ${a} × x^2: square ${num(t)} first, then multiply by ${a}.`)] });
    }
    if (level === 2) {
      if (r() < 0.65) {
        const a = nz(r, -6, 8), b = nz(r, -12, 12), x = int(r, -6, 10), k = a * x + b + (r() < 0.3 ? int(r, 1, Math.abs(a) - 1 || 1) : 0), sol = F(k - b, a);
        return make(this.id, level, seed, { prompt: `f(x) = ${lin(a, b)}. Solve f(x) = ${num(k)}.`, answer: valAns(sol), steps: [`${lin(a, b)} = ${num(k)}`, `${a}x = ${num(k - b)}`.replace(/^1x/, 'x').replace(/^-1x/, '−x'), `x = ${fv(sol)}`], traps: [tv(a * k + b, `f(${num(k)}) is the output when x = ${num(k)}. Here ${num(k)} is the output: solve ${lin(a, b)} = ${num(k)}.`)] });
      }
      const c = int(r, -9, 9), s = int(r, 2, 9), k = s * s + c;
      return make(this.id, level, seed, { prompt: `f(x) = ${polyM([[1, 'x^2'], [c, '']])}. Solve f(x) = ${num(k)}.`, answer: sols([s, -s]), steps: [`x^2${pm(c)} = ${num(k)}`.replace(' + 0', ''), `x^2 = ${s * s}`, `x = ${s} or x = −${s}`], soTraps: [sT([s], `x^2 = ${s * s} has two solutions: ${s} and −${s}.`)], note: 'Give both solutions.' });
    }
    const a = nz(r, -5, 7), b = nz(r, -9, 9), kind = pick(r, ['2x', 'x+c', 'kf', 'sq']);
    if (kind === '2x') { const m = int(r, 2, 4); return make(this.id, level, seed, { prompt: `f(x) = ${lin(a, b)}. Find f(${m}x) in terms of x.`, answer: algAns(lin(a * m, b), 'any', ['x']), steps: [`Replace x with ${m}x: ${num(a)} × ${m}x${pm(b)}`, `= ${lin(a * m, b)}`], alTraps: [algTrap(`${m}(${lin(a, b)})`, `f(${m}x) replaces x with ${m}x; it is not ${m} × f(x).`)] }); }
    if (kind === 'x+c') { const c = nz(r, -6, 6); return make(this.id, level, seed, { prompt: `f(x) = ${lin(a, b)}. Find f(${lin(1, c)}) in terms of x.`, answer: algAns(lin(a, a * c + b), 'any', ['x']), steps: [`Replace x with (${lin(1, c)}): ${num(a)}(${lin(1, c)})${pm(b)}`, `= ${lin(a, a * c)}${pm(b)} = ${lin(a, a * c + b)}`], alTraps: [algTrap(lin(a, b + c), `Replace every x with the whole bracket (${lin(1, c)}), then expand: ${num(a)} × ${br(c)} = ${num(a * c)}.`)] }); }
    if (kind === 'kf') { const k = int(r, 2, 5); return make(this.id, level, seed, { prompt: `f(x) = ${lin(a, b)}. Find ${k}f(x) in terms of x.`, answer: algAns(lin(k * a, k * b), 'any', ['x']), steps: [`${k}f(x) = ${k}(${lin(a, b)})`, `= ${lin(k * a, k * b)}`], alTraps: [algTrap(lin(k * a, b), `Multiply every term of f(x) by ${k}.`)] }); }
    const c = nz(r, -5, 5);
    return make(this.id, level, seed, { prompt: `f(x) = x^2. Find f(${lin(1, c)}) in terms of x, expanded.`, answer: algAns(polyM([[1, 'x^2'], [2 * c, 'x'], [c * c, '']]), 'expanded', ['x']), steps: [`f(${lin(1, c)}) = (${lin(1, c)})^2`, `= (${lin(1, c)})(${lin(1, c)}) = ${polyM([[1, 'x^2'], [2 * c, 'x'], [c * c, '']])}`], alTraps: [algTrap(polyM([[1, 'x^2'], [c * c, '']]), `(${lin(1, c)})^2 means (${lin(1, c)})(${lin(1, c)}): expand both brackets to get the middle term ${num(2 * c)}x.`)] });
  },
};

const funcInverse = {
  id: 'maths.algebra.func-inverse',
  name: 'Inverse and composite functions',
  higherOnly: true,
  levels: [{ label: 'Inverse functions' }, { label: 'Composite functions' }, { label: 'Evaluate composites and inverses' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const note = 'Write it in terms of x, for example (x − 3)/2.';
    if (level === 1) {
      const a = int(r, 2, 7), b = nz(r, -9, 9), kind = pick(r, ['lin', 'frac', 'bracket']);
      if (kind === 'lin') return make(this.id, level, seed, { prompt: `f(x) = ${lin(a, b)}. Find f^{−1}(x).`, answer: algAns(`{${lin(1, -b)}/${a}}`, 'any', ['x']), steps: [`Let y = ${lin(a, b)} and make x the subject.`, `y${pm(-b)} = ${a}x, so x = {y${pm(-b)}/${a}}`, `f^{−1}(x) = {${lin(1, -b)}/${a}}`], note, alTraps: [algTrap(`{${lin(1, b)}/${a}}`, `Undo ${pm(b).trim()} with the inverse operation: ${b > 0 ? 'subtract' : 'add'} ${Math.abs(b)}.`), algTrap(`{x/${a}}${pm(-b)}`, `Undo the operations in reverse order: first ${b > 0 ? 'subtract' : 'add'} ${Math.abs(b)}, then divide the whole of that by ${a}.`), raw(`1/(${a}x + ${b})`.replace('+ -', '- '), 'f^{−1} is the inverse function (undo f), not the reciprocal 1 ÷ f(x).')] });
      if (kind === 'frac') return make(this.id, level, seed, { prompt: `f(x) = {${lin(1, b)}/${a}}. Find f^{−1}(x).`, answer: algAns(lin(a, -b), 'any', ['x']), steps: [`Let y = {${lin(1, b)}/${a}}`, `${a}y = ${lin(1, b)}`, `x = ${lin(a, -b, 'y')}, so f^{−1}(x) = ${lin(a, -b)}`], note, alTraps: [algTrap(lin(a, b), `Undo ${pm(b).trim()} by ${b > 0 ? 'subtracting' : 'adding'} ${Math.abs(b)}.`), algTrap(`${a}(${lin(1, -b)})`, `f adds first, then divides; undo in reverse order: multiply by ${a} first, then ${b > 0 ? 'subtract' : 'add'} ${Math.abs(b)}.`)] });
      return make(this.id, level, seed, { prompt: `f(x) = ${a}(${lin(1, b)}). Find f^{−1}(x).`, answer: algAns(`{x/${a}}${pm(-b)}`, 'any', ['x']), steps: [`Let y = ${a}(${lin(1, b)})`, `{y/${a}} = ${lin(1, b)}`, `x = {y/${a}}${pm(-b)}, so f^{−1}(x) = {x/${a}}${pm(-b)}`], note, alTraps: [algTrap(`{${lin(1, -b)}/${a}}`, `f ${b > 0 ? 'adds' : 'subtracts'} first, then multiplies; undo in reverse order: divide by ${a} first, then ${b > 0 ? 'subtract' : 'add'} ${Math.abs(b)}.`), algTrap(`{x/${a}}${pm(b)}`, `Undo ${pm(b).trim()} by ${b > 0 ? 'subtracting' : 'adding'} ${Math.abs(b)}.`)] });
    }
    const a = nz(r, -4, 5), b = nz(r, -8, 8), c = int(r, 2, 5), d = nz(r, -7, 7);
    const sq = r() < 0.45;
    const gTxt = sq ? 'x^2' : lin(c, d), g = x => (sq ? x * x : c * x + d), f = x => a * x + b;
    if (level === 2) {
      const fg = r() < 0.55, name = fg ? 'fg(x)' : 'gf(x)';
      const fgE = sq ? polyM([[a, 'x^2'], [b, '']]) : lin(a * c, a * d + b), gfE = sq ? `(${lin(a, b)})^2` : lin(c * a, c * b + d);
      const ans = fg ? fgE : gfE, other = fg ? gfE : fgE;
      return make(this.id, level, seed, { prompt: `f(x) = ${lin(a, b)} and g(x) = ${gTxt}. Find ${name}.`, answer: algAns(ans, 'any', ['x']), steps: [fg ? 'fg(x) = f(g(x)): apply g first, then f.' : 'gf(x) = g(f(x)): apply f first, then g.', fg ? `f(${gTxt}) = ${num(a)}(${gTxt})${pm(b)}` : sq ? `g(${lin(a, b)}) = (${lin(a, b)})^2` : `g(${lin(a, b)}) = ${c}(${lin(a, b)})${pm(d)}`, `${name} = ${ans}`], note: 'Write it in terms of x.', alTraps: [algTrap(other, `${name} means ${fg ? 'f(g(x)): do g first' : 'g(f(x)): do f first'}. You found ${fg ? 'gf(x)' : 'fg(x)'}.`), ...(sq ? [] : [algTrap(`(${lin(a, b)})(${gTxt})`, `${name} is a composite function (one after the other), not f(x) × g(x).`)])] });
    }
    const kind = pick(r, ['fg', 'gf', 'inv']);
    if (kind === 'inv') {
      const A = int(r, 2, 6), B = nz(r, -9, 9), k = int(r, -10, 20), v = F(k - B, A);
      return make(this.id, level, seed, { prompt: `f(x) = ${lin(A, B)}. Work out f^{−1}(${num(k)}).`, answer: valAns(v), steps: [`f^{−1}(x) = {${lin(1, -B)}/${A}}`, `f^{−1}(${num(k)}) = {${num(k)}${pm(-B)}/${A}} = ${fv(v)}`], traps: [tv(A * k + B, `That is f(${num(k)}). f^{−1}(${num(k)}) is the input that f turns into ${num(k)}.`), tv(F(1, A * k + B || 1), 'f^{−1} undoes f; it is not 1 ÷ f.')] });
    }
    const t = int(r, -4, 5), v = kind === 'fg' ? f(g(t)) : g(f(t)), w = kind === 'fg' ? g(f(t)) : f(g(t));
    return make(this.id, level, seed, { prompt: `f(x) = ${lin(a, b)} and g(x) = ${gTxt}. Work out ${kind}(${num(t)}).`, answer: intAns(v), steps: kind === 'fg' ? [`g(${num(t)}) = ${num(g(t))}`, `f(${num(g(t))}) = ${num(v)}`] : [`f(${num(t)}) = ${num(f(t))}`, `g(${num(f(t))}) = ${num(v)}`], traps: [tv(w, `${kind}(${num(t)}) means ${kind === 'fg' ? 'f(g(' + num(t) + ')): work out g first' : 'g(f(' + num(t) + ')): work out f first'}.`), tv(f(t) * g(t), 'A composite function applies one function to the output of the other; it is not f × g.')] });
  },
};

/* ═════════ A4 Higher: algebraic fractions and indices ═════════ */
const quadM = (p, q, a = 1) => polyM([[a, 'x^2'], [a * q + p * 1, 'x'], [p * q, '']]); // (ax + p)(x + q) expanded when a given
const expand = (p, q) => polyM([[1, 'x^2'], [p + q, 'x'], [p * q, '']]); // (x + p)(x + q)
const fracNote = 'Write a single fraction such as (x + 3)/(x − 2). Use brackets round the top and the bottom.';

const afracSimplify = {
  id: 'maths.algebra.afrac-simplify',
  name: 'Simplify algebraic fractions',
  higherOnly: true,
  levels: [{ label: 'One factor cancels' }, { label: 'Factorise top and bottom' }, { label: 'ax² + bx + c' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.55) {
        let p, q; do { p = nz(r, -7, 7); q = nz(r, -7, 7); } while (p === q);
        return make(this.id, level, seed, { prompt: `Simplify fully {${expand(p, q)}/${lin(1, p)}}`, answer: algAns(lin(1, q), 'fraction', ['x']), steps: [`Factorise the top: ${expand(p, q)} = (${lin(1, p)})(${lin(1, q)})`, `Cancel the common factor (${lin(1, p)})`, `= ${lin(1, q)}`], note: fracNote, alTraps: [algTrap(lin(1, p), `(${lin(1, p)}) is the factor that cancels. What is left is the other factor.`), algTrap(polyM([[1, 'x'], [p + q, 'x'], [q, '']]), 'You can only cancel factors (things multiplied), not individual terms. Factorise the top first.')] });
      }
      for (;;) {
        const k = int(r, 2, 5), u = int(r, 1, 5), v = nz(r, -9, 9), w = int(r, 2, 7);
        if (gcd(gcd(u, Math.abs(v)), w) !== 1 || w === 1) continue;
        return make(this.id, level, seed, { prompt: `Simplify fully {${lin(k * u, k * v)}/${k * w}}`, answer: algAns(`{${lin(u, v)}/${w}}`, 'fraction', ['x']), steps: [`Factorise the top: ${lin(k * u, k * v)} = ${k}(${lin(u, v)})`, `${k * w} = ${k} × ${w}`, `Cancel ${k}: {${lin(u, v)}/${w}}`], note: fracNote, alTraps: [algTrap(`{${lin(u, k * v)}/${w}}`, `Divide every term on the top by ${k}, not just the x term.`)] });
      }
    }
    for (;;) {
      if (level === 2) {
        const dots = r() < 0.3;
        let p, q, s;
        if (dots) { const k = int(r, 2, 7); p = pick(r, [k, -k]); q = -p; s = nz(r, -7, 7); } else { p = nz(r, -7, 7); q = nz(r, -7, 7); s = nz(r, -7, 7); }
        if (q === s || s === p && q === p) continue;
        const top = dots ? `x^2 − ${p * p}` : expand(p, q), bottom = expand(p, s);
        return make(this.id, level, seed, { prompt: `Simplify fully {${top}/${bottom}}`, answer: algAns(`{${lin(1, q)}/${lin(1, s)}}`, 'fraction', ['x']), steps: [`Factorise the top: (${lin(1, p)})(${lin(1, q)})`, `Factorise the bottom: (${lin(1, p)})(${lin(1, s)})`, `Cancel (${lin(1, p)}): {${lin(1, q)}/${lin(1, s)}}`], note: fracNote, alTraps: [raw(`(${p + q}x + ${p * q})/(${p + s}x + ${p * s})`.replace(/\+ -/g, '- '), 'The x^2 terms are not factors, so they cannot be cancelled. Factorise the top and the bottom, then cancel a whole bracket.'), raw(`${q}/${s}`, 'You cancelled the x terms. Only whole factors (brackets) can be cancelled.')] });
      }
      const a = pick(r, [2, 3]), b = nz(r, -7, 7), p = nz(r, -6, 6), s = nz(r, -6, 6), dots = r() < 0.35;
      const S = dots ? -p : s;
      if (gcd(a, Math.abs(b)) !== 1 || b === a * p || b === a * S || S === p) continue;
      const top = polyM([[a, 'x^2'], [a * p + b, 'x'], [b * p, '']]), bottom = dots ? `x^2 − ${p * p}` : expand(p, S);
      return make(this.id, level, seed, { prompt: `Simplify fully {${top}/${bottom}}`, answer: algAns(`{${lin(a, b)}/${lin(1, S)}}`, 'fraction', ['x']), steps: [`Factorise the top: (${lin(a, b)})(${lin(1, p)})`, `Factorise the bottom: (${lin(1, p)})(${lin(1, S)})`, `Cancel (${lin(1, p)}): {${lin(a, b)}/${lin(1, S)}}`], note: fracNote, alTraps: [raw(`(${lin(1, b)})/(${lin(1, S)})`.replace(/−/g, '-'), `Factorise ${top} as (${lin(a, b)})(${lin(1, p)}): check by expanding.`), raw(`${a}`, 'Only whole brackets cancel, not the x^2 terms.')] });
    }
  },
};

const lcm = (a, b) => (a * b) / gcd(a, b);
const afracOperate = {
  id: 'maths.algebra.afrac-add',
  name: 'Add, subtract, multiply and divide algebraic fractions',
  higherOnly: true,
  levels: [{ label: 'Number denominators' }, { label: 'Algebraic denominators' }, { label: 'Multiply and divide' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (;;) {
      if (level === 1) {
        const m = int(r, 2, 6), n = int(r, 2, 7), a = nz(r, -6, 6), b = nz(r, -6, 6), plus = r() < 0.55;
        if (m === n) continue;
        const L = lcm(m, n), pm_ = L / m, pn = L / n, s = plus ? 1 : -1;
        let c = pm_ + s * pn, d = pm_ * a + s * pn * b, D = L;
        if (c === 0) continue;
        const g = gcd(gcd(Math.abs(c), Math.abs(d)), D); c /= g; d /= g; D /= g;
        const ans = D === 1 ? lin(c, d) : `{${lin(c, d)}/${D}}`;
        const traps = plus ? [algTrap(`{${lin(2, a + b)}/${m + n}}`, 'Do not add the denominators. Write both fractions over a common denominator first.')] : [algTrap(`{${lin(pm_ - pn, pm_ * a + pn * b)}/${L}}`, `Subtracting the second fraction subtracts all of its numerator: −${pn}(${lin(1, b)}) = ${lin(-pn, -pn * b)}.`)];
        return make(this.id, level, seed, { prompt: `Write {${lin(1, a)}/${m}} ${plus ? '+' : '−'} {${lin(1, b)}/${n}} as a single fraction in its simplest form.`, answer: algAns(ans, 'fraction', ['x']), steps: [`Common denominator ${L}: {${pm_}(${lin(1, a)})/${L}} ${plus ? '+' : '−'} {${pn}(${lin(1, b)})/${L}}`, `Numerator: ${lin(pm_, pm_ * a)} ${plus ? '+' : '−'} (${lin(pn, pn * b)}) = ${lin(pm_ + s * pn, pm_ * a + s * pn * b)}`, g > 1 ? `Cancel the common factor ${g}: ${ans}` : `= ${ans}`], note: fracNote, alTraps: traps });
      }
      if (level === 2) {
        const a = int(r, 1, 6), b = int(r, 1, 6), p = nz(r, -6, 6), q = nz(r, -6, 6), plus = r() < 0.55;
        if (p === q) continue;
        const s = plus ? 1 : -1, A = a + s * b, B = a * q + s * b * p;
        const den = `(${lin(1, p)})(${lin(1, q)})`;
        const ans = `{${A === 0 ? num(B) : lin(A, B)}/${den}}`;
        return make(this.id, level, seed, { prompt: `Write {${a}/${lin(1, p)}} ${plus ? '+' : '−'} {${b}/${lin(1, q)}} as a single fraction.`, answer: algAns(ans, 'fraction', ['x']), steps: [`Common denominator ${den}`, `{${a}(${lin(1, q)})/${den}} ${plus ? '+' : '−'} {${b}(${lin(1, p)})/${den}}`, `Numerator: ${lin(a, a * q)} ${plus ? '+' : '−'} (${lin(b, b * p)}) = ${A === 0 ? num(B) : lin(A, B)}`, `= ${ans}`], note: 'Write one fraction, for example (5x − 1)/((x + 1)(x − 2)). Leave the bottom factorised or expand it.', alTraps: plus ? [raw(`${a + b}/(2x + ${p + q})`.replace('+ -', '- '), 'Do not add the tops and the bottoms. Multiply each fraction to get a common denominator first.')] : [raw(`(${a - b}x + ${a * q + b * p})/((x + ${p})(x + ${q}))`.replace(/\+ -/g, '- '), `Subtract all of the second numerator: −${b}(${lin(1, p)}) = ${lin(-b, -b * p)}.`)] });
      }
      let p, q; do { p = nz(r, -6, 6); q = nz(r, -6, 6); } while (p === q);
      const u = int(r, 2, 6), v = int(r, 2, 9), divide = r() < 0.5, g = gcd(u, v), U = u / g, V = v / g;
      const ans = U === 1 ? `${V === 1 ? '' : V}(${lin(1, q)})`.replace(/^\((.*)\)$/, '$1') : `{${V === 1 ? '' : V}(${lin(1, q)})/${U}}`.replace('{(', '{(');
      const first = `{${expand(p, q)}/${u}x}`, second = divide ? `{${lin(1, p)}/${v}x}` : `{${v}x/${lin(1, p)}}`;
      return make(this.id, level, seed, { prompt: `Simplify fully ${first} ${divide ? '÷' : '×'} ${second}`, answer: algAns(ans, 'fraction', ['x']), steps: [...(divide ? [`Dividing by a fraction is multiplying by its reciprocal: × {${v}x/${lin(1, p)}}`] : []), `Factorise: {(${lin(1, p)})(${lin(1, q)})/${u}x} × {${v}x/${lin(1, p)}}`, `Cancel (${lin(1, p)}) and x${g > 1 ? `, and divide ${u} and ${v} by ${g}` : ''}`, `= ${ans}`], note: 'Give one fraction (or expression) with nothing left to cancel.', alTraps: divide ? [raw(`(x + ${p})^2(x + ${q})/(${u * v}x^2)`.replace(/\+ -/g, '- '), 'To divide by a fraction, turn the second fraction upside down and multiply.')] : [] });
    }
  },
};

const afracSolve = {
  id: 'maths.algebra.afrac-solve',
  name: 'Solve equations with algebraic fractions',
  higherOnly: true,
  levels: [{ label: 'Number denominators' }, { label: 'Letters in the denominators' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (;;) {
      if (level === 1) {
        const x = int(r, -5, 14), m = int(r, 2, 5), n = int(r, 2, 6), plus = r() < 0.6;
        if (m === n) continue;
        const a = m * int(r, -2, 4) - x, b = n * int(r, -2, 4) - x;
        if (a === 0 || b === 0) continue;
        const k = (x + a) / m + (plus ? 1 : -1) * ((x + b) / n), L = m * n, s = plus ? 1 : -1;
        const coef = n + s * m;
        if (coef === 0) continue;
        const wrong = F(k - n * a - s * m * b, coef);
        return make(this.id, level, seed, { prompt: `Solve {${lin(1, a)}/${m}} ${plus ? '+' : '−'} {${lin(1, b)}/${n}} = ${num(k)}`, answer: valAns(F(x)), steps: [`Multiply every term by ${L}: ${n}(${lin(1, a)}) ${plus ? '+' : '−'} ${m}(${lin(1, b)}) = ${num(L * k)}`, `${lin(n, n * a)} ${plus ? '+' : '−'} (${lin(m, m * b)}) = ${num(L * k)}`, `${lin(coef, n * a + s * m * b)} = ${num(L * k)}`, `x = ${num(x)}`], traps: [tv(wrong, `Multiply every term by ${L}, including the right-hand side: it becomes ${num(L * k)}.`), ...(plus ? [] : [tv(F(L * k - n * a - m * b, n - m), `Subtracting ${m}(${lin(1, b)}) subtracts both terms: −${m}x ${b > 0 ? '−' : '+'} ${Math.abs(m * b)}.`)])] });
      }
      const a = int(r, 1, 6), b = int(r, 1, 6), p = int(r, -4, 5), q = int(r, -4, 5);
      if (p === q) continue;
      const B = p + q - a - b, C = p * q - a * q - b * p, D = B * B - 4 * C;
      if (D <= 0 || !Number.isInteger(Math.sqrt(D))) continue;
      const r1 = (-B + Math.sqrt(D)) / 2, r2 = (-B - Math.sqrt(D)) / 2;
      if (!Number.isInteger(r1) || !Number.isInteger(r2) || [r1, r2].some(v => v === -p || v === -q)) continue;
      const dp_ = p === 0 ? 'x' : lin(1, p), dq = q === 0 ? 'x' : lin(1, q);
      return make(this.id, level, seed, { prompt: `Solve {${a}/${dp_}} + {${b}/${dq}} = 1`, answer: sols([r1, r2]), steps: [`Multiply every term by (${dp_})(${dq}): ${a}(${dq}) + ${b}(${dp_}) = (${dp_})(${dq})`, `${lin(a + b, a * q + b * p)} = ${expand(p, q)}`, `Rearrange: ${polyM([[1, 'x^2'], [B, 'x'], [C, '']])} = 0`, `Factorise and solve: x = ${num(r1)} or x = ${num(r2)}`, `Check neither value makes a denominator 0.`], soTraps: [sT([-r1, -r2], 'Check the signs: substitute each solution back into the equation.')], note: 'Give both solutions.' });
    }
  },
};

const algIndices = {
  id: 'maths.algebra.alg-indices',
  name: 'Negative and fractional indices in algebra',
  higherOnly: true,
  levels: [{ label: 'Negative indices' }, { label: 'Fractional indices' }, { label: 'Negative fractional indices' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const note = 'For example 3x^-2, 3/x^2, 9x^4 or 1/(9x^4).';
    if (level === 1) {
      if (r() < 0.5) {
        const b = int(r, 2, 6), c = int(r, 1, 5), a = b * c, n = int(r, 3, 9), m = int(r, 1, n - 1), k = n - m, co = c === 1 ? '' : c;
        return make(this.id, level, seed, { prompt: `Simplify {${a}x^${m}/${b}x^${n}}`, answer: algAns(`${co}x^{−${k}}`, 'simplified', ['x'], { expr: `${co}x^(-${k})` }), steps: [`Divide the numbers: ${a} ÷ ${b} = ${c}`, `Subtract the powers: x^{${m} − ${n}} = x^{−${k}}`, `= ${co}x^{−${k}} = {${c}/x^${k}}`], note, alTraps: [raw(`${co}x^${k}`, `x^${m} ÷ x^${n} = x^{${m} − ${n}}: the power is negative because ${n} is bigger than ${m}.`), raw(`${a - b}x^(-${k})`, `Divide the numbers: ${a} ÷ ${b}.`)] });
      }
      const c = int(r, 2, 4), m = int(r, 1, 4), k = pick(r, [2, 3]);
      if (r() < 0.5) return make(this.id, level, seed, { prompt: `Simplify (${c}x^{−${m}})^${k}`, answer: algAns(`${c ** k}x^{−${m * k}}`, 'simplified', ['x'], { expr: `${c ** k}x^(-${m * k})` }), steps: [`Raise the number to the power ${k}: ${c}^${k} = ${c ** k}`, `Multiply the powers: x^{−${m} × ${k}} = x^{−${m * k}}`, `= ${c ** k}x^{−${m * k}} = {${c ** k}/x^${m * k}}`], note, alTraps: [raw(`${c}x^(-${m * k})`, `The ${c} is inside the bracket, so it is raised to the power ${k} too.`), raw(`${c ** k}x^(${k - m})`, 'A power of a power multiplies the indices; it does not add them.')] });
      return make(this.id, level, seed, { prompt: `Simplify (${c}x^${m})^{−${k}}`, answer: algAns(`{1/${c ** k}x^${m * k}}`, 'simplified', ['x'], { expr: `1/(${c ** k}x^${m * k})` }), steps: [`A negative index means a reciprocal: (${c}x^${m})^{−${k}} = {1/(${c}x^${m})^${k}}`, `(${c}x^${m})^${k} = ${c ** k}x^${m * k}`, `= {1/${c ** k}x^${m * k}}`], note, alTraps: [raw(`-${c ** k}x^${m * k}`, 'A negative index gives a reciprocal (1 over), not a negative number.'), raw(`${c ** k}x^${m * k}`, 'The negative index means one over the answer.')] });
    }
    const [n, p] = pick(r, [[2, 1], [3, 1], [3, 2], [2, 3]]), b = n === 3 ? int(r, 2, 5) : int(r, 2, p === 3 ? 4 : 9), m = int(r, 1, n === 3 ? 3 : 4);
    if (b ** n > 125 || b ** p > 125) return this.gen(level, seed + 'b');
    if (level === 2) {
      return make(this.id, level, seed, { prompt: `Simplify (${b ** n}x^${n * m})^{${p}/${n}}`, answer: algAns(`${b ** p}x^${m * p}`, 'simplified', ['x']), steps: [`The ${n === 2 ? 'square' : 'cube'} root (power {1/${n}}): ${n === 2 ? '√' : '∛'}${b ** n} = ${b}, and x^${n * m} becomes x^${m}`, ...(p > 1 ? [`Then the power ${p}: ${b}^${p} = ${b ** p}, x^{${m} × ${p}} = x^${m * p}`] : []), `= ${b ** p}x^${m * p}`], note, alTraps: [raw(`${b ** n}x^${m * p}`, `The power applies to the ${b ** n} as well: find the ${n === 2 ? 'square' : 'cube'} root of ${b ** n}${p > 1 ? ', then raise it to the power ' + p : ''}.`), ...(p > 1 ? [raw(`${b}x^${m}`, `The power {${p}/${n}} means the ${n === 2 ? 'square' : 'cube'} root, then the power ${p}.`)] : [])] });
    }
    if (r() < 0.5) return make(this.id, level, seed, { prompt: `Simplify (${b ** n}x^${n * m})^{−${p}/${n}}`, answer: algAns(`{1/${b ** p}x^${m * p}}`, 'simplified', ['x'], { expr: `1/(${b ** p}x^${m * p})` }), steps: ['The negative sign means a reciprocal.', `(${b ** n}x^${n * m})^{${p}/${n}} = ${b ** p}x^${m * p}`, `= {1/${b ** p}x^${m * p}}`], note, alTraps: [raw(`-${b ** p}x^${m * p}`, 'A negative index gives a reciprocal, not a negative number.'), raw(`${b ** p}x^${m * p}`, 'Remember the negative index: one over the answer.')] });
    const k = 1;
    return make(this.id, level, seed, { prompt: `Simplify ({${b ** n}/x^${n * m}})^{−${k}/${n}}`, answer: algAns(`{x^${m}/${b}}`, 'simplified', ['x'], { expr: `x^${m}/${b}` }), steps: [`The negative index turns the fraction upside down: ({x^${n * m}/${b ** n}})^{${k}/${n}}`, `Take the ${n === 2 ? 'square' : 'cube'} root of the top and the bottom: {x^${m}/${b}}`], note, alTraps: [raw(`${b}/x^${m}`, 'The negative index turns the fraction upside down.'), raw(`-${b}/x^${m}`, 'A negative index gives a reciprocal, not a negative number.')] });
  },
};

/* ═════════ A6 identities and proof ═════════ */
const cf = (k, v) => (k === 1 ? v : k === -1 ? '−' + v : num(k) + v);
const ID_OPT = ['An identity: true for every value of x', 'An equation: true only for a particular value of x'];
const identities = {
  id: 'maths.algebra.identities',
  name: 'Identities',
  levels: [{ label: 'Identity or equation?' }, { label: 'Find unknown coefficients' }, { label: 'a(x + b)² + c identities', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 2, 6), b = nz(r, -7, 7), c = nz(r, -4, 5), isId = r() < 0.5;
      if (a + c === 0) return this.gen(level, seed + 'c');
      const e = isId ? 0 : nz(r, -3, 3), A = a + c + e, B = isId ? a * b : a * b + nz(r, -6, 6);
      if (A === a + c && !isId) return this.gen(level, seed + 'e');
      const lhs = `${a}(${lin(1, b)})${c < 0 ? ' − ' : ' + '}${Math.abs(c) === 1 ? '' : Math.abs(c)}x`, rhs = lin(A, B);
      const ch = choice(r, isId ? ID_OPT[0] : ID_OPT[1], [isId ? ID_OPT[1] : ID_OPT[0]], () => (isId ? `Expand the left: ${lin(a + c, a * b)}. That is exactly the right-hand side, so it is true for every x.` : `Expand the left: ${lin(a + c, a * b)}. The x terms differ from ${rhs}, so it is only true for one value of x.`));
      return make(this.id, level, seed, { prompt: `Is ${lhs} = ${rhs} an identity or an equation?`, ...ch, steps: [`Expand and simplify the left-hand side: ${lin(a + c, a * b)}`, isId ? `It is the same as the right-hand side for every x: an identity, written ${lhs} ≡ ${rhs}.` : `It differs from ${rhs}, so it is only true for one value of x: an equation you can solve.`] });
    }
    if (level === 2) {
      for (;;) {
        const a = nz(r, -4, 6), b = nz(r, -4, 6), p = nz(r, -5, 6), q = nz(r, -5, 6);
        if (p === q) continue;
        const A = a + b, B = a * p + b * q;
        return make(this.id, level, seed, { prompt: `a(${lin(1, p)}) + b(${lin(1, q)}) ≡ ${lin(A, B)}. Find the values of a and b.`, answer: pairs([[a, b]], ['a', 'b'], { labels: ['a =', 'b ='] }), steps: [`Expand: (a + b)x + (${cf(p, 'a')}${q < 0 ? ' − ' : ' + '}${cf(Math.abs(q), 'b')})`, `Match the x terms: a + b = ${num(A)}`, `Match the numbers: ${num(p)}a ${q < 0 ? '−' : '+'} ${Math.abs(q)}b = ${num(B)}`, `Solve: a = ${num(a)}, b = ${num(b)}`], soTraps: [sT([[b, a]], 'Those are the wrong way round: check which value is a and which is b by expanding.')], note: 'An identity is true for every x, so the x terms match and the numbers match.' });
      }
    }
    const a = int(r, 2, 4), b = nz(r, -5, 5), c = int(r, -12, 12), A = a, B = 2 * a * b, C = a * b * b + c;
    return make(this.id, level, seed, { prompt: `${polyM([[A, 'x^2'], [B, 'x'], [C, '']])} ≡ a(x + b)^2 + c. Find a, b and c.`, answer: pairs([[a, b, c]], ['a', 'b', 'c'], { labels: ['a =', 'b =', 'c ='] }), steps: [`a(x + b)^2 + c = ax^2 + 2abx + ab^2 + c`, `Match x^2: a = ${a}`, `Match x: 2 × ${a} × b = ${B}, so b = ${num(b)}`, `Match numbers: ${a} × ${b * b} + c = ${num(C)}, so c = ${num(c)}`], soTraps: [sT([[a, b, C - b * b]], `The bracket is multiplied by a: a(x + b)^2 contains ${a} × ${b * b} = ${a * b * b}, not ${b * b}.`), sT([[a, 2 * b, C - 4 * a * b * b]], `2ab = ${B}, so b = ${B} ÷ ${2 * a}.`)] });
  },
};

const REPS = [
  { q: 'n is a whole number. Which expression is always odd?', ok: '2n + 1', because: '2n is even, so one more than it is odd.', bad: { 'n + 1': 'n + 1 is odd only when n is even.', '2n': '2n is always even.', '3n': '3n is odd only when n is odd.', 'n^2 + 1': 'n^2 + 1 is odd only when n is even.' } },
  { q: 'n is a whole number. Which expression is always even?', ok: '2n', because: '2 × any whole number is even.', bad: { 'n + 2': 'n + 2 is even only when n is even.', 'n^2': 'n^2 is odd when n is odd.', '2n + 1': '2n + 1 is always odd.', '3n + 1': '3n + 1 is even only when n is odd.' } },
  { q: 'n is a whole number. Which are three consecutive whole numbers?', ok: 'n, n + 1, n + 2', because: 'each number is 1 more than the one before.', bad: { 'n, 2n, 3n': 'n, 2n, 3n are multiples of n, not consecutive numbers.', 'n, n + 2, n + 4': 'n, n + 2, n + 4 go up in 2s.', '2n, 2n + 2, 2n + 4': '2n, 2n + 2, 2n + 4 are consecutive even numbers.' } },
  { q: 'n is a whole number. Which are two consecutive odd numbers?', ok: '2n + 1 and 2n + 3', because: '2n + 1 is odd, and the next odd number is 2 more.', bad: { '2n + 1 and 2n + 2': '2n + 2 is even, so this pair is not two odd numbers.', 'n and n + 2': 'n and n + 2 are both odd only when n is odd.', '2n and 2n + 2': '2n and 2n + 2 are both even.' } },
];
const counterClaims = [
  { claim: 'n^2 + n + 11 is prime for every whole number n.', f: n => n * n + n + 11, pool: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { claim: '2n + 1 is prime for every positive whole number n.', f: n => 2 * n + 1, pool: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { claim: 'n^2 − n + 41 is prime for every whole number n.', f: n => n * n - n + 41, pool: [5, 10, 20, 30, 41, 42] },
  { claim: '6n + 1 is prime for every positive whole number n.', f: n => 6 * n + 1, pool: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
];
const showThat = {
  id: 'maths.algebra.show-that',
  name: 'Show that, and counterexamples',
  levels: [{ label: 'Write it with algebra' }, { label: 'Simplify to show a result' }, { label: 'Find a counterexample' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.2) { const k = int(r, 3, 9); const bad = { [`n + ${k}`]: `n + ${k} is ${k} more than n, not a multiple of ${k}.`, [`n^${k}`]: `n^${k} is n multiplied by itself ${k} times.`, [`{n/${k}}`]: `{n/${k}} need not be a whole number.` }; const ch = choice(r, `${k}n`, Object.keys(bad), o => bad[o]); return make(this.id, level, seed, { prompt: `n is a whole number. Which expression is always a multiple of ${k}?`, ...ch, steps: [`${k}n = ${k} × n, so it is always a multiple of ${k}.`] }); }
      const T = pick(r, REPS), wrong = shuffled(r, Object.keys(T.bad)).slice(0, 3), ch = choice(r, T.ok, wrong, o => T.bad[o]);
      return make(this.id, level, seed, { prompt: T.q, ...ch, steps: [`${T.ok}: ${T.because}`] });
    }
    if (level === 2) {
      const kind = pick(r, ['diff', 'next', 'const']);
      if (kind === 'diff') { const a = int(r, 1, 6); return make(this.id, level, seed, { prompt: `Expand and simplify (n + ${a})^2 − (n − ${a})^2 to show that it is always a multiple of ${4 * a} when n is a whole number.`, answer: algAns(`${4 * a}n`, 'simplified', ['n']), steps: [`(n + ${a})^2 = n^2 + ${2 * a}n + ${a * a}`, `(n − ${a})^2 = n^2 − ${2 * a}n + ${a * a}`, `Subtract: ${4 * a}n = ${4 * a} × n, a multiple of ${4 * a}.`], note: 'Use n. Simplify fully.', alTraps: [raw(`${2 * a * a}`, `(n + ${a})^2 is n^2 + ${2 * a}n + ${a * a}, not n^2 + ${a * a}: expand both brackets fully.`), raw('0', `(n + ${a})^2 ≠ n^2 + ${a * a}. Write (n + ${a})(n + ${a}) and expand.`)] }); }
      if (kind === 'next') return make(this.id, level, seed, { prompt: 'Expand and simplify (n + 1)^2 − n^2 to show that the difference between consecutive square numbers is always odd.', answer: algAns('2n + 1', 'simplified', ['n']), steps: ['(n + 1)^2 = n^2 + 2n + 1', 'Subtract n^2: 2n + 1', '2n is even, so 2n + 1 is odd.'], note: 'Use n. Simplify fully.', alTraps: [raw('1', '(n + 1)^2 = n^2 + 2n + 1: do not forget the middle term 2n.')] });
      const a = int(r, 1, 6), b = int(r, 1, 6);
      return make(this.id, level, seed, { prompt: `Expand and simplify (n + ${a})(n + ${b}) − n(n + ${a + b}) to show that it is the same for every value of n.`, answer: algAns(`${a * b}`, 'simplified', ['n']), steps: [`(n + ${a})(n + ${b}) = n^2 + ${a + b}n + ${a * b}`, `n(n + ${a + b}) = n^2 + ${a + b}n`, `Subtract: ${a * b}, which does not depend on n.`], note: 'Use n. Simplify fully.', alTraps: [raw(`${a + b}n + ${a * b}`, `n(n + ${a + b}) = n^2 + ${a + b}n: subtract both terms.`)] });
    }
    const kind = pick(r, ['prime', 'prime', 'square', 'sum']);
    if (kind === 'prime') {
      for (;;) {
        const C = pick(r, counterClaims), comp = C.pool.filter(n => !isPrime(C.f(n))), pr = C.pool.filter(n => isPrime(C.f(n)));
        if (!comp.length || pr.length < 3) continue;
        const ok = pick(r, comp), wrong = shuffled(r, pr).slice(0, 3);
        const ch = choice(r, `n = ${ok}`, wrong.map(n => `n = ${n}`), o => { const n = Number(o.slice(4)); return `n = ${n} gives ${C.f(n)}, which is prime, so it agrees with the claim.`; });
        const v = C.f(ok); let fct = 2; while (v % fct) fct++;
        return make(this.id, level, seed, { prompt: `Sam says: "${C.claim}" Which value of n shows that Sam is wrong?`, ...ch, steps: [`n = ${ok} gives ${v} = ${fct} × ${v / fct}, which is not prime.`, 'One counterexample is enough to show a claim is false.'] });
      }
    }
    if (kind === 'square') {
      const f = pick(r, [[1, 2], [1, 3], [2, 5], [1, 4]]), others = shuffled(r, [2, 3, 5, 7, 10, -3, -4]).slice(0, 3);
      const ok = `{${f[0]}/${f[1]}}`;
      const ch = choice(r, ok, others.map(num), o => { const v = Number(o.replace('−', '-')); return `${o}^2 = ${v * v}, which is bigger than ${o}.`; });
      return make(this.id, level, seed, { prompt: 'Priya says: "Squaring a number always gives a bigger number." Which value shows that she is wrong?', ...ch, steps: [`(${ok})^2 = {${f[0] ** 2}/${f[1] ** 2}}, which is smaller than ${ok}.`, 'Numbers between 0 and 1 get smaller when they are squared.'] });
    }
    const p = pick(r, [3, 5, 7, 11, 13]), odd = shuffled(r, [[3, 5], [5, 7], [7, 11], [3, 13], [5, 11], [11, 13]]).slice(0, 3);
    const ch = choice(r, `2 + ${p}`, odd.map(([a, b]) => `${a} + ${b}`), o => `${o} = ${o.split(' + ').map(Number).reduce((s, x) => s + x, 0)}, which is even, so it agrees with the claim.`);
    return make(this.id, level, seed, { prompt: 'Jo says: "The sum of two prime numbers is always even." Which example shows that Jo is wrong?', ...ch, steps: [`2 + ${p} = ${2 + p}, which is odd.`, '2 is the only even prime, so it gives the counterexample.'] });
  },
};

const PROOFS = [
  { claim: 'the sum of any three consecutive whole numbers is a multiple of 3', work: 'n + (n + 1) + (n + 2) = 3n + 3', ok: '= 3(n + 1), which is 3 × a whole number, so it is a multiple of 3', bad: { '1 + 2 + 3 = 6, which is a multiple of 3': 'An example is not a proof: it shows the claim for one case only.', '= 3n + 3, which is odd': '3n + 3 is not always odd, and odd is not what the claim says.', '= 3(n + 3), so it is a multiple of 3': '3(n + 3) = 3n + 9. Factorise carefully: 3n + 3 = 3(n + 1).' } },
  { claim: 'the sum of two consecutive odd numbers is a multiple of 4', work: '(2n + 1) + (2n + 3) = 4n + 4', ok: '= 4(n + 1), so it is a multiple of 4', bad: { '3 + 5 = 8, which is a multiple of 4': 'One example does not prove it for every pair.', '= 4n + 4, which is even': 'Even is not enough: the claim is about multiples of 4. Factorise.', '= 4(n + 4), so it is a multiple of 4': '4(n + 4) = 4n + 16. Factorise carefully: 4n + 4 = 4(n + 1).' } },
  { claim: 'the product of two odd numbers is odd', work: '(2a + 1)(2b + 1) = 4ab + 2a + 2b + 1', ok: '= 2(2ab + a + b) + 1: one more than a multiple of 2, so it is odd', bad: { '3 × 5 = 15, which is odd': 'An example is not a proof.', '= 2(2ab + a + b + 1), so it is even': 'The +1 is not inside the bracket: 2(2ab + a + b) + 1.', 'Odd × odd is always odd': 'That restates the claim; it does not prove it.' } },
  { claim: 'the sum of five consecutive whole numbers is a multiple of 5', work: 'n + (n + 1) + (n + 2) + (n + 3) + (n + 4) = 5n + 10', ok: '= 5(n + 2), so it is a multiple of 5', bad: { '1 + 2 + 3 + 4 + 5 = 15, a multiple of 5': 'An example is not a proof.', '= 5(n + 10), so it is a multiple of 5': '5(n + 10) = 5n + 50. Factorise carefully: 5n + 10 = 5(n + 2).', '= 5n + 10, which ends in 0': '5n + 10 does not always end in 0 (n = 1 gives 15).' } },
  { claim: 'the difference between two consecutive square numbers is odd', work: '(n + 1)^2 − n^2 = n^2 + 2n + 1 − n^2 = 2n + 1', ok: '2n is even, so 2n + 1 is odd', bad: { '= 1, which is odd': '(n + 1)^2 = n^2 + 2n + 1, so the difference is 2n + 1, not 1.', '4 − 1 = 3, which is odd': 'An example is not a proof.', '2n + 1 is prime, so it is odd': '2n + 1 is not always prime (n = 4 gives 9).' } },
];
const proof = {
  id: 'maths.algebra.proof',
  name: 'Algebraic proof',
  higherOnly: true,
  levels: [{ label: 'Complete the proof' }, { label: 'Factorise to prove' }, { label: 'Prove by completing the square' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const P = pick(r, PROOFS), ch = choice(r, P.ok, Object.keys(P.bad), o => P.bad[o]);
      return make(this.id, level, seed, { prompt: `Prove that ${P.claim}. A proof starts: ${P.work}. Which line completes the proof?`, ...ch, steps: [P.work, P.ok, 'A proof works for every value, using algebra; examples do not prove a general statement.'] });
    }
    if (level === 2) {
      const kind = pick(r, ['odd', 'odd', 'even', 'gap']);
      if (kind === 'odd') {
        const b = pick(r, [1, 3, 5]), a = b + pick(r, [2, 4]), lc = 4 * (a - b), k = a * a - b * b, g = gcd(lc, k);
        const ans = `${g}(${polyM([[lc / g, 'n'], [k / g, '']])})`;
        return make(this.id, level, seed, { prompt: `Prove that (2n + ${a})^2 − (2n + ${b})^2 is a multiple of ${g} for every whole number n. Expand, simplify, then factorise to show it.`, answer: algAns(ans, 'factorised', ['n']), steps: [`(2n + ${a})^2 = 4n^2 + ${4 * a}n + ${a * a}`, `(2n + ${b})^2 = 4n^2 + ${4 * b}n + ${b * b}`, `Subtract: ${polyM([[lc, 'n'], [k, '']])}`, `= ${ans}, which is ${g} × a whole number, so a multiple of ${g}.`], note: 'Give the fully factorised form that shows the multiple, for example 8(n + 1).', alTraps: [raw(`${lc}n`, `Expand both brackets fully: the numbers ${a * a} and ${b * b} do not cancel.`), raw(`${lc}n + ${a * a + b * b}`, `Subtracting the second bracket subtracts ${b * b} too.`)] });
      }
      if (kind === 'even') return make(this.id, level, seed, { prompt: 'Prove that the sum of the squares of two consecutive even numbers, (2n)^2 + (2n + 2)^2, is a multiple of 4. Expand, simplify, then factorise to show it.', answer: algAns('4(2n^2 + 2n + 1)', 'factorised', ['n']), steps: ['(2n)^2 = 4n^2', '(2n + 2)^2 = 4n^2 + 8n + 4', 'Add: 8n^2 + 8n + 4', '= 4(2n^2 + 2n + 1), a multiple of 4.'], note: 'Give the fully factorised form that shows the multiple.', alTraps: [raw('4(2n^2+2n+4)', 'Divide every term by 4: 4 ÷ 4 = 1.'), raw('2n^2 + 4n + 4', '(2n)^2 = 4n^2: square the 2 as well.')] });
      const a = int(r, 2, 6);
      return make(this.id, level, seed, { prompt: `Prove that (n + ${a})^2 − (n + ${a - 2})^2 is a multiple of 4 for every whole number n. Expand, simplify, then factorise to show it.`, answer: algAns(`4(n + ${a - 1})`, 'factorised', ['n']), steps: [`(n + ${a})^2 = n^2 + ${2 * a}n + ${a * a}`, `(n + ${a - 2})^2 = n^2 + ${2 * a - 4}n + ${(a - 2) ** 2}`, `Subtract: 4n + ${4 * a - 4}`, `= 4(n + ${a - 1}), a multiple of 4.`], note: 'Give the fully factorised form that shows the multiple.', alTraps: [raw(`4n`, `Expand both brackets fully: the numbers ${a * a} and ${(a - 2) ** 2} do not cancel.`)] });
    }
    const p = nz(r, -6, 6), q = int(r, 1, 9), b = 2 * p, c = p * p + q, cs = `(${lin(1, p)})^2 + ${q}`;
    const ge = r() < 0.4;
    return make(this.id, level, seed, { prompt: ge ? `Prove that ${polyM([[1, 'x^2'], [b, 'x'], [c, '']])} ≥ ${q} for all values of x. Start by writing it in the form (x + p)^2 + q.` : `Prove that ${polyM([[1, 'x^2'], [b, 'x'], [c, '']])} > 0 for all values of x. Start by writing it in the form (x + p)^2 + q.`, answer: algAns(cs, 'completed-square', ['x']), steps: [`Halve the x coefficient: ${num(b)} ÷ 2 = ${num(p)}`, `${polyM([[1, 'x^2'], [b, 'x'], [c, '']])} = ${cs}`, `(${lin(1, p)})^2 ≥ 0 for every x, so ${cs} ≥ ${q}${ge ? '.' : ' > 0.'}`], note: 'Type the completed-square form, for example (x − 3)^2 + 2.', alTraps: [algTrap(`(${lin(1, b)})^2 + ${c}`, `Halve the coefficient of x: (x ${p < 0 ? '−' : '+'} ${Math.abs(p)})^2.`), algTrap(`(${lin(1, p)})^2 + ${c + p * p}`, `(${lin(1, p)})^2 already contains +${p * p}: subtract it.`)] });
  },
};

/* ═════════ A20 iteration ═════════ */
const ITER = {
  cbrt: (a, b) => ({ eq: `x^3 + ${a}x − ${b} = 0`, f: x => x ** 3 + a * x - b, g: x => Math.cbrt(b - a * x), gm: `∛(${b} − ${a}x_n)` }),
  cbrt2: (a, b) => ({ eq: `x^3 − ${a}x − ${b} = 0`, f: x => x ** 3 - a * x - b, g: x => Math.cbrt(a * x + b), gm: `∛(${a}x_n + ${b})` }),
  sqrt: (a, b) => ({ eq: `x^2 − ${a}x − ${b} = 0`, f: x => x * x - a * x - b, g: x => Math.sqrt(a * x + b), gm: `√(${a}x_n + ${b})` }),
  frac: (a, b) => ({ eq: `x^2 − ${a}x − ${b} = 0`, f: x => x * x - a * x - b, g: x => a + b / x, gm: `${a} + {${b}/x_n}` }),
};
function iterSetup(r) {
  for (;;) {
    const kind = pick(r, Object.keys(ITER)), a = int(r, 1, 6), b = int(r, 2, 12), I = ITER[kind](a, b);
    let x = 1.5;
    for (let i = 0; i < 200; i++) x = I.g(x);
    if (!Number.isFinite(x) || Math.abs(I.f(x)) > 1e-9 || x <= 0.6) continue;
    const x0 = Math.max(1, Math.round(x));
    let y = x0, ok = true;
    for (let i = 0; i < 60; i++) { y = I.g(y); if (!Number.isFinite(y)) ok = false; }
    if (!ok || Math.abs(y - x) > 1e-9) continue;
    return { kind, a, b, ...I, root: x, x0 };
  }
}
const seqOf = (I, n) => { const out = [I.x0]; for (let i = 0; i < n; i++) out.push(I.g(out.at(-1))); return out; };

const iterSign = {
  id: 'maths.algebra.iter-sign',
  name: 'Show that a solution lies in an interval',
  higherOnly: true,
  levels: [{ label: 'Evaluate at two values' }, { label: 'Find the interval' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (;;) {
      const p = nz(r, -9, 8), q = nz(r, -12, 12), f = x => x ** 3 + p * x + q, fs = `${polyM([[1, 'x^3'], [p, 'x'], [q, '']])}`;
      if (level === 1) {
        const a = int(r, -3, 3);
        if (f(a) === 0 || f(a + 1) === 0 || Math.sign(f(a)) === Math.sign(f(a + 1))) continue;
        return make(this.id, level, seed, { prompt: `f(x) = ${fs}. Work out f(${num(a)}) and f(${num(a + 1)}). (The sign change shows that ${fs} = 0 has a solution between ${num(a)} and ${num(a + 1)}.)`, calculator: true, answer: pairs([[f(a), f(a + 1)]], ['p', 'q'], { labels: [`f(${num(a)}) =`, `f(${num(a + 1)}) =`] }), steps: [`f(${num(a)}) = ${br(a)}^3${p < 0 ? ' − ' : ' + '}${Math.abs(p)} × ${br(a)}${pm(q)} = ${num(f(a))}`, `f(${num(a + 1)}) = ${br(a + 1)}^3${p < 0 ? ' − ' : ' + '}${Math.abs(p)} × ${br(a + 1)}${pm(q)} = ${num(f(a + 1))}`, `One is negative and one is positive. f is continuous, so it crosses 0 between ${num(a)} and ${num(a + 1)}.`], soTraps: a < 0 ? [sT([[-(a ** 3) + p * a + q, f(a + 1)]], `(${num(a)})^3 is negative: ${num(a)} × ${br(a)} × ${br(a)} = ${num(a ** 3)}.`)] : [] });
      }
      const ks = []; for (let k = 0; k < 10; k++) { if (f(k) === 0) ks.push(NaN); else if (Math.sign(f(k)) !== Math.sign(f(k + 1)) && f(k + 1) !== 0) ks.push(k); }
      let crossings = 0; for (let x = 0; x < 11; x += 0.01) if (Math.sign(f(x)) !== Math.sign(f(x + 0.01))) crossings++;
      if (ks.length !== 1 || Number.isNaN(ks[0]) || crossings !== 1) continue;
      const k = ks[0];
      return make(this.id, level, seed, { prompt: `${fs} = 0 has exactly one positive solution. Between which two consecutive whole numbers does it lie?`, calculator: true, answer: { kind: 'list', values: [k, k + 1] }, steps: [`f(${k}) = ${num(f(k))} and f(${k + 1}) = ${num(f(k + 1))}`, `The sign changes, so the solution is between ${k} and ${k + 1}.`], note: 'Give the two whole numbers separated by a comma, for example 2, 3.' });
    }
  },
};

const iterRearrange = {
  id: 'maths.algebra.iter-rearrange',
  name: 'Rearrange an equation for iteration',
  higherOnly: true,
  levels: [{ label: 'Cubic equations' }, { label: 'Quadratic equations' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), a = int(r, 2, 7), b = int(r, 2, 12);
    if (level === 1) {
      const good = { [`x = ∛(${b} − ${a}x)`]: 1, [`x = {${b} − x^3/${a}}`]: 1 };
      const bad = { [`x = ∛(${b} + ${a}x)`]: `x^3 = ${b} − ${a}x, so the ${a}x is subtracted inside the cube root.`, [`x = ∛(${a}x − ${b})`]: `Rearranging x^3 + ${a}x − ${b} = 0 gives x^3 = ${b} − ${a}x, not ${a}x − ${b}.`, [`x = {${b} + x^3/${a}}`]: `${a}x = ${b} − x^3, so x^3 is subtracted.`, [`x = {x^3 − ${b}/${a}}`]: `${a}x = ${b} − x^3: the signs are the other way round.` };
      const ok = pick(r, Object.keys(good)), ch = choice(r, ok, shuffled(r, Object.keys(bad)).slice(0, 3), o => bad[o]);
      return make(this.id, level, seed, { prompt: `Which of these is a correct rearrangement of x^3 + ${a}x − ${b} = 0?`, ...ch, steps: ok.includes('∛') ? [`x^3 = ${b} − ${a}x`, `Take the cube root: x = ∛(${b} − ${a}x)`] : [`${a}x = ${b} − x^3`, `Divide by ${a}: x = {${b} − x^3/${a}}`] });
    }
    const good = { [`x = √(${a}x + ${b})`]: 1, [`x = ${a} + {${b}/x}`]: 1 };
    const bad = { [`x = √(${a}x − ${b})`]: `x^2 = ${a}x + ${b}: the ${b} is added.`, [`x = √(${b} − ${a}x)`]: `x^2 = ${a}x + ${b}, not ${b} − ${a}x.`, [`x = ${a} − {${b}/x}`]: `Divide x^2 = ${a}x + ${b} by x: x = ${a} + {${b}/x}.`, [`x = {${b}/x} − ${a}`]: `Divide x^2 = ${a}x + ${b} by x: x = ${a} + {${b}/x}.` };
    const ok = pick(r, Object.keys(good)), ch = choice(r, ok, shuffled(r, Object.keys(bad)).slice(0, 3), o => bad[o]);
    return make(this.id, level, seed, { prompt: `Which of these is a correct rearrangement of x^2 − ${a}x − ${b} = 0?`, ...ch, steps: ok.includes('√') ? [`x^2 = ${a}x + ${b}`, `Take the square root: x = √(${a}x + ${b})`] : [`x^2 = ${a}x + ${b}`, `Divide every term by x: x = ${a} + {${b}/x}`] });
  },
};

const iterCompute = {
  id: 'maths.algebra.iter-compute',
  name: 'Use an iteration formula',
  higherOnly: true,
  levels: [{ label: 'Find x₁' }, { label: 'Find x₃' }, { label: 'Iterate to a solution' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (;;) {
      const I = iterSetup(r), xs = seqOf(I, 30);
      const intro = `Use the iteration formula x_{n + 1} = ${I.gm} with x_0 = ${I.x0}`;
      const listing = n => xs.slice(1, n + 1).map((v, i) => `x_{${i + 1}} = ${fix(v, 6)}…`);
      if (level === 1) {
        const v = xs[1];
        return make(this.id, level, seed, { prompt: `${intro} to find x_1. Give your answer to 3 decimal places.`, calculator: true, answer: { kind: 'decimal', value: fr(rnd(v, 3)), dp: 3, tol: 0.0005 }, steps: [`Substitute x_0 = ${I.x0}: x_1 = ${I.gm.replace(/x_n/g, `(${I.x0})`)}`, `x_1 = ${fix(v, 6)}… = ${fix(v, 3)} (3 d.p.)`], traps: [tv(rnd(I.x0, 3), 'x_1 comes from putting x_0 into the formula.')] });
      }
      if (level === 2) {
        const v = xs[3];
        return make(this.id, level, seed, { prompt: `${intro} to find x_3. Give your answer to 3 decimal places.`, calculator: true, answer: { kind: 'decimal', value: fr(rnd(v, 3)), dp: 3, tol: 0.0012 }, steps: ['Use each answer as the next input (use the ANS key to keep full accuracy).', ...listing(3), `x_3 = ${fix(v, 3)} (3 d.p.)`], traps: [tv(rnd(xs[2], 3), 'That is x_2: apply the formula three times starting from x_0.'), tv(rnd(xs[4], 3), 'That is x_4: x_3 is three applications of the formula after x_0.')] });
      }
      const k = I.root * 100, frac_ = k - Math.floor(k);
      if (frac_ > 0.45 && frac_ < 0.55) continue;
      let need = 1; while (need < 30 && fix(xs[need], 2) !== fix(xs[need + 1], 2)) need++;
      return make(this.id, level, seed, { prompt: `${I.eq} has a solution near x = ${I.x0}. ${intro} repeatedly to find this solution correct to 2 decimal places.`, calculator: true, answer: { kind: 'decimal', value: fr(rnd(I.root, 2)), dp: 2 }, steps: [...listing(Math.min(need + 1, 8)), `The values agree to 2 decimal places: x = ${fix(I.root, 2)}`], traps: [tv(rnd(xs[1], 2), 'Keep iterating until the values stop changing at 2 decimal places.')] });
    }
  },
};

/* ═════════ A21 forming and solving equations ═════════ */
const ang = (a, b) => `(${lin(a, b)})°`;
const SHAPES = { tri: ['a triangle', 180, 3], line: ['a straight line', 180, 3], point: ['a point', 360, 4], quad: ['a quadrilateral', 360, 4] };
const WRONG_TOTAL = { tri: 360, line: 360, point: 180, quad: 180 };
function angleSet(r, kind, n) {
  for (;;) {
    const x = int(r, 6, 40), as = Array.from({ length: n }, () => int(r, 1, 4)), bs = Array.from({ length: n - 1 }, () => int(r, -20, 40));
    const total = SHAPES[kind][1], last = total - as.reduce((s, a) => s + a * x, 0) - bs.reduce((s, b) => s + b, 0);
    bs.push(last);
    const angles = as.map((a, i) => a * x + bs[i]);
    if (angles.some(v => v <= 5 || v >= 175) || Math.abs(last) > 80 || new Set(angles).size < n) continue;
    return { x, as, bs, angles, total };
  }
}
const formGeometry = {
  id: 'maths.algebra.form-geometry',
  name: 'Form and solve equations from shapes',
  levels: [{ label: 'Angles' }, { label: 'Perimeter and area' }, { label: 'Use the solution' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const sum = (as, bs) => polyM([[as.reduce((s, a) => s + a, 0), 'x'], [bs.reduce((s, b) => s + b, 0), '']]);
    if (level === 1) {
      const kind = pick(r, ['tri', 'line', 'point', 'quad']), [name, total, n0] = SHAPES[kind], n = kind === 'line' ? pick(r, [2, 3]) : n0;
      const S = angleSet(r, kind, n), A = S.as.reduce((s, a) => s + a, 0), B = S.bs.reduce((s, b) => s + b, 0);
      const where = kind === 'tri' ? 'The angles of a triangle are' : kind === 'quad' ? 'The angles of a quadrilateral are' : kind === 'line' ? 'Angles on a straight line are' : 'The angles around a point are';
      return make(this.id, level, seed, { prompt: `${where} ${S.as.map((a, i) => ang(a, S.bs[i])).join(', ').replace(/, ([^,]*)$/, ' and $1')}. Work out the value of x.`, answer: intAns(S.x), steps: [`Angles ${kind === 'tri' ? 'in a triangle' : kind === 'quad' ? 'in a quadrilateral' : kind === 'line' ? 'on a straight line' : 'around a point'} add up to ${total}°.`, `${sum(S.as, S.bs)} = ${total}`, `${A}x = ${total - B}`, `x = ${S.x}`], traps: [tv(F(WRONG_TOTAL[kind] - B, A), `Angles ${kind === 'tri' ? 'in a triangle add up to 180°' : kind === 'quad' ? 'in a quadrilateral add up to 360°' : kind === 'line' ? 'on a straight line add up to 180°' : 'around a point add up to 360°'}, not ${WRONG_TOTAL[kind]}°.`)] });
    }
    if (level === 2) {
      const kind = pick(r, ['rectP', 'squareP', 'rectA']), x = int(r, 3, 15);
      if (kind === 'rectP') {
        const a = int(r, 1, 4), b = int(r, -3, 9), c = int(r, 1, 3), d = int(r, -2, 6);
        if (a * x + b <= 0 || c * x + d <= 0) return this.gen(level, seed + 'p');
        const P = 2 * (a * x + b + c * x + d);
        return make(this.id, level, seed, { prompt: `A rectangle has length (${lin(a, b)}) cm and width (${lin(c, d)}) cm. Its perimeter is ${P} cm. Work out the value of x.`, answer: intAns(x), steps: [`Perimeter = 2 × length + 2 × width: 2(${lin(a, b)}) + 2(${lin(c, d)}) = ${P}`, `${lin(2 * (a + c), 2 * (b + d))} = ${P}`, `x = ${x}`], traps: [tv(F(P - b - d, a + c), 'A rectangle has two lengths and two widths: double both before adding.')] });
      }
      if (kind === 'squareP') {
        const a = int(r, 2, 5), b = int(r, -4, 8), P = 4 * (a * x + b);
        return make(this.id, level, seed, { prompt: `A square has sides of (${lin(a, b)}) cm. Its perimeter is ${P} cm. Work out the value of x.`, answer: intAns(x), steps: [`4(${lin(a, b)}) = ${P}`, `${lin(a, b)} = ${P / 4}`, `x = ${x}`], traps: [tv(F(P - b, a), 'A square has four equal sides: 4 × side = perimeter.')] });
      }
      const k = int(r, 2, 8), a = int(r, 1, 4), b = int(r, -2, 9), A = k * (a * x + b);
      return make(this.id, level, seed, { prompt: `A rectangle has width ${k} cm and length (${lin(a, b)}) cm. Its area is ${A} cm². Work out the value of x.`, answer: intAns(x), steps: [`Area = length × width: ${k}(${lin(a, b)}) = ${A}`, `${lin(a, b)} = ${A / k}`, `x = ${x}`], traps: [tv(F(A - b, a), `Area = length × width: multiply the length by ${k}.`)] });
    }
    if (r() < 0.6) {
      const S = angleSet(r, 'tri', 3), big = Math.max(...S.angles), B = S.bs.reduce((s, b) => s + b, 0), A = S.as.reduce((s, a) => s + a, 0);
      return make(this.id, level, seed, { prompt: `The angles of a triangle are ${S.as.map((a, i) => ang(a, S.bs[i])).join(', ').replace(/, ([^,]*)$/, ' and $1')}. Work out the size of the largest angle.`, answer: intAns(big), steps: [`${sum(S.as, S.bs)} = 180, so ${A}x = ${180 - B} and x = ${S.x}`, `The angles are ${S.angles.join('°, ')}°.`, `Largest: ${big}°`], traps: [tv(S.x, `x = ${S.x} is not an angle: substitute it into each expression.`), ...S.angles.filter(v => v !== big).map(v => tv(v, `${v}° is one of the angles but not the largest.`))] });
    }
    for (;;) {
      const x = int(r, 2, 12), a = int(r, 2, 5), c = int(r, 1, a - 1), d = int(r, 1, 15), b = c * x + d - a * x, base = int(r, 3, 20);
      if (Math.abs(b) > 20) continue;
      const side = a * x + b;
      if (side <= 0 || 2 * side <= base) continue;
      const P = 2 * side + base;
      return make(this.id, level, seed, { prompt: `An isosceles triangle has two equal sides of length (${lin(a, b)}) cm and (${lin(c, d)}) cm. The third side is ${base} cm. Work out the perimeter of the triangle.`, answer: intAns(P), steps: [`The equal sides give an equation: ${lin(a, b)} = ${lin(c, d)}`, `${a - c === 1 ? '' : a - c}x = ${d - b}, so x = ${x}`, `Each equal side is ${side} cm.`, `Perimeter = ${side} + ${side} + ${base} = ${P} cm`], traps: [tv(x, `x = ${x}: substitute it to find the side lengths, then add all three sides.`), tv(side + base, 'There are two equal sides: include both in the perimeter.')] });
    }
  },
};

const NAMES = [['Amir', 'Bea', 'Cal'], ['Dina', 'Eli', 'Fay'], ['Gus', 'Hana', 'Ivo'], ['Jade', 'Kai', 'Lena']];
const formContext = {
  id: 'maths.algebra.form-context',
  name: 'Form and solve equations from words',
  levels: [{ label: 'Shares and amounts' }, { label: 'Consecutive numbers' }, { label: 'Think of a number' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const [A, B, C] = pick(r, NAMES), x = int(r, 4, 30), d = int(r, 2, 9), k = pick(r, [2, 3]), item = pick(r, ['stickers', 'marbles', 'cards', 'badges']);
      const T = x + (x + d) + k * x;
      return make(this.id, level, seed, { prompt: `${A} has x ${item}. ${B} has ${d} more ${item} than ${A}. ${C} has ${k === 2 ? 'twice' : 'three times'} as many ${item} as ${A}. Altogether they have ${T} ${item}. How many ${item} does ${A} have?`, answer: intAns(x), steps: [`${A}: x, ${B}: x + ${d}, ${C}: ${k}x`, `x + x + ${d} + ${k}x = ${T}`, `${k + 2}x + ${d} = ${T}, so ${k + 2}x = ${T - d}`, `x = ${x}`], traps: [tv(F(T - d, 3), `${C} has ${k}x, so there are ${k + 2} lots of x altogether, not 3.`), tv(F(T, 3), 'The three amounts are not equal: write each one in terms of x.'), tv(k * x, `${k * x} is how many ${C} has; the question asks about ${A}.`)] });
    }
    if (level === 2) {
      const kind = pick(r, ['int', 'even', 'odd']), cnt = pick(r, [3, 4]), step = kind === 'int' ? 1 : 2;
      let n = int(r, 5, 60); if (kind === 'even' && n % 2) n++; if (kind === 'odd' && n % 2 === 0) n++;
      const ns = Array.from({ length: cnt }, (_, i) => n + i * step), S = ns.reduce((s, v) => s + v, 0), ask = pick(r, ['largest', 'smallest']);
      const word = kind === 'int' ? 'consecutive whole numbers' : kind === 'even' ? 'consecutive even numbers' : 'consecutive odd numbers';
      const ans = ask === 'largest' ? ns.at(-1) : ns[0], exprs = ns.map((_, i) => (i ? `n + ${i * step}` : 'n'));
      return make(this.id, level, seed, { prompt: `The sum of ${cnt} ${word} is ${S}. Work out the ${ask} of the numbers.`, answer: intAns(ans), steps: [`Let the numbers be ${exprs.join(', ')}`, `${cnt}n + ${S - cnt * n} = ${S}`, `n = ${n}`, `The numbers are ${ns.join(', ')}; the ${ask} is ${ans}.`], traps: [tv(ask === 'largest' ? ns[0] : ns.at(-1), `That is the ${ask === 'largest' ? 'smallest' : 'largest'} number.`), tv(F(S, cnt), `${S} ÷ ${cnt} is the mean, not the ${ask} number.`), ...(step === 2 ? [tv(ask === 'largest' ? add(F(S - (cnt * (cnt - 1)) / 2, cnt), F(cnt - 1)) : F(S - (cnt * (cnt - 1)) / 2, cnt), `${kind === 'even' ? 'Even' : 'Odd'} numbers go up in 2s: n, n + 2, n + 4…`)] : [])] });
    }
    for (;;) {
      const n = int(r, 2, 20), a = int(r, 3, 9), c = int(r, 1, a - 1), b = int(r, 1, 15), d = (a - c) * n - b;
      if (d < 1 || d > 40) continue;
      return make(this.id, level, seed, { prompt: `I think of a number. If I multiply it by ${a} and subtract ${b}, I get the same answer as when I multiply it by ${c === 1 ? '1' : c} and add ${d}. What is my number?`, answer: intAns(n), steps: [`Let the number be n: ${a}n − ${b} = ${c === 1 ? '' : c}n + ${d}`, `Subtract ${c === 1 ? '' : c}n from both sides: ${a - c === 1 ? '' : a - c}n − ${b} = ${d}`, `Add ${b}: ${a - c === 1 ? '' : a - c}n = ${b + d}`, `n = ${n}`], traps: [tv(F(d - b, a - c), `Add ${b} to both sides (inverse of − ${b}): ${a - c === 1 ? '' : a - c}n = ${d} + ${b}.`), tv(F(b + d, a + c), `Subtract ${c === 1 ? '' : c}n from both sides to collect the n terms: ${a}n − ${c === 1 ? '' : c}n = ${a - c === 1 ? '' : a - c}n.`)] });
    }
  },
};

const formInterpret = {
  id: 'maths.algebra.form-interpret',
  name: 'Interpret the solution in context',
  levels: [{ label: 'Rounding to make sense' }, { label: 'Reject impossible solutions', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      for (;;) {
        const kind = pick(r, ['bus', 'box', 'money']), k = kind === 'money' ? int(r, 3, 12) : int(r, 6, 20), N = int(r, 2 * k, 12 * k);
        if (N % k === 0) continue;
        const up = kind === 'bus', ans = up ? Math.ceil(N / k) : Math.floor(N / k);
        const prompt = kind === 'bus' ? `A minibus holds ${k} people. ${N} people need to travel. Solve ${k}b ≥ ${N} to find the smallest number of minibuses needed.` : kind === 'box' ? `A box holds ${k} eggs. A farmer has ${N} eggs. How many boxes can be completely filled?` : `A ticket costs £${k}. Zara has £${N}. Solve ${k}t ≤ ${N} to find the greatest number of tickets she can buy.`;
        return make(this.id, level, seed, { prompt, answer: intAns(ans), steps: [`${N} ÷ ${k} = ${fix(N / k, 2).replace(/\.?0+$/, '')}…`, up ? `${Math.floor(N / k)} minibuses are not enough, so round up: ${ans}.` : `Only whole ${kind === 'box' ? 'boxes' : 'tickets'} count, so round down: ${ans}.`], traps: [tv(up ? Math.floor(N / k) : Math.ceil(N / k), up ? `${Math.floor(N / k)} minibuses would leave ${N - k * Math.floor(N / k)} people behind: round up.` : `${Math.ceil(N / k)} ${kind === 'box' ? 'boxes would need ' + k * Math.ceil(N / k) + ' eggs' : 'tickets would cost £' + k * Math.ceil(N / k)}: round down.`), tv(F(N, k), 'The answer must be a whole number in this context.')] });
      }
    }
    if (r() < 0.55) {
      const x = int(r, 2, 15), p = int(r, 1, 9), A = x * (x + p);
      return make(this.id, level, seed, { prompt: `A rectangle has width x cm and length (x + ${p}) cm. Its area is ${A} cm². Form and solve an equation to find the width.`, answer: intAns(x), steps: [`x(x + ${p}) = ${A}`, `x^2 + ${p}x − ${A} = 0`, `(x − ${x})(x + ${x + p}) = 0, so x = ${x} or x = −${x + p}`, `A length cannot be negative, so the width is ${x} cm.`], traps: [tv(-(x + p), 'A width cannot be negative: reject that solution.'), tv(x + p, `${x + p} cm is the length, not the width.`)] });
    }
    const n = int(r, 4, 25), N = n * (n + 1);
    return make(this.id, level, seed, { prompt: `The product of two consecutive positive whole numbers is ${N}. Form and solve an equation to find the smaller number.`, answer: intAns(n), steps: [`n(n + 1) = ${N}`, `n^2 + n − ${N} = 0`, `(n − ${n})(n + ${n + 1}) = 0, so n = ${n} or n = −${n + 1}`, `The numbers are positive, so n = ${n}.`], traps: [tv(-(n + 1), 'The numbers are positive: reject the negative solution.'), tv(n + 1, `${n + 1} is the larger number.`)] });
  },
};

export const algebraSkills3 = [funcMachine, funcNotation, funcInverse, afracSimplify, afracOperate, afracSolve, algIndices, identities, showThat, proof, iterSign, iterRearrange, iterCompute, formGeometry, formContext, formInterpret];
