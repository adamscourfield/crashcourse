// Edexcel 1MA1 Algebra, batch 2: sequences (A23–A25; Higher: quadratic nth term), linear inequalities
// (A22; Higher: quadratic inequalities), quadratic equations (A18; Higher: rearrangement, completing
// the square, the formula; A11 turning point by completing the square) and simultaneous equations
// (A19, A21; Higher: linear/quadratic). Same contract as the other skill modules.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, gcd, num, fracMarkup } from './frac.js?v=20261023-maths-r9';
import { polyM, makeA, fixMinus, algAns, algTrap, valAns, choiceItem } from './skills-algebra.js?v=20261023-maths-r9';

const fr = v => { const f = typeof v === 'number' ? F(v) : v; return { n: f.n, d: f.d }; };
const fv = f => (f.d === 1 ? num(f.n) : fracMarkup(f));
const nz = (r, lo, hi) => { let v; do v = int(r, lo, hi); while (v === 0); return v; };
const intAns = v => ({ kind: 'integer', value: v });
const tv = (v, why) => ({ v: typeof v === 'number' ? F(v) : v, why });
const sols = (vals, extra = {}) => ({ kind: 'solutions', vars: ['x'], sols: vals.map(v => [fr(v)]), ...extra });
const pairs = (list, vars = ['x', 'y'], extra = {}) => ({ kind: 'solutions', vars, sols: list.map(p => p.map(fr)), ...extra });
const sT = (list, why) => ({ sols: list.map(p => (Array.isArray(p) ? p.map(fr) : [fr(p)])), why });
const gt = (v, inc) => ({ lo: fr(v), loIn: inc, hi: null, hiIn: false });
const lt = (v, inc) => ({ lo: null, loIn: false, hi: fr(v), hiIn: inc });
const between = (a, ai, b, bi) => ({ lo: fr(a), loIn: ai, hi: fr(b), hiIn: bi });
const ineq = set => ({ kind: 'inequality', letter: 'x', set });
const iT = (set, why) => ({ set, why });
const list = values => ({ kind: 'list', values });
const OPS = ['<', '≤', '>', '≥'];
const flip = { '<': '>', '≤': '≥', '>': '<', '≥': '≤' };
const setFor = (op, v) => (op === '<' ? [lt(v, false)] : op === '≤' ? [lt(v, true)] : op === '>' ? [gt(v, false)] : [gt(v, true)]);
const lin = (a, b, v = 'x') => polyM([[a, v], [b, '']]);
const sameRows = (a, b) => a.length === b.length && a.every(r => b.some(s => r.every((x, i) => x.n === s[i].n && x.d === s[i].d)));
const sameSet = (a, b) => JSON.stringify(a) === JSON.stringify(b);

/** Algebra make() plus filtering of solution-set and inequality traps that equal the answer. */
function make(skill, level, seed, o) {
  const it = makeA(skill, level, seed, o);
  if (o.soTraps) it.soTraps = o.soTraps.filter(t => !sameRows(t.sols, o.answer.sols)).map(t => ({ ...t, why: fixMinus(t.why) }));
  if (o.inTraps) it.inTraps = o.inTraps.filter(t => !sameSet(t.set, o.answer.set)).map(t => ({ ...t, why: fixMinus(t.why) }));
  return it;
}
const terms = (f, n = 5) => Array.from({ length: n }, (_, i) => f(i + 1));
const seqText = ts => ts.map(num).join(', ') + ', …';

/* ───────── A23 generate terms ───────── */
const seqTerms = {
  id: 'maths.algebra.seq-terms',
  name: 'Generate terms of a sequence',
  levels: [{ label: 'Term-to-term rules' }, { label: 'Position-to-term rules' }, { label: 'Is it in the sequence?' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.5) {
        const a = int(r, -10, 20), d = nz(r, -7, 9), k = int(r, 4, 7), v = a + (k - 1) * d;
        return make(this.id, level, seed, { prompt: `The first term of a sequence is ${num(a)}. The term-to-term rule is "${d > 0 ? 'add ' + d : 'subtract ' + -d}". Work out the ${k}th term.`, answer: intAns(v), steps: [`From the 1st term to the ${k}th term is ${k - 1} steps.`, `${num(a)} ${d > 0 ? '+' : '−'} ${k - 1} × ${Math.abs(d)} = ${num(v)}`], traps: [tv(a + k * d, `The ${k}th term is ${k - 1} steps after the 1st, not ${k}.`)] });
      }
      const a = int(r, 1, 6), m = pick(r, [2, 3]), c = pick(r, [-1, 1, 2]);
      const seq = [a]; for (let i = 1; i < 4; i++) seq.push(seq[i - 1] * m + c);
      return make(this.id, level, seed, { prompt: `A sequence starts with ${a}. The rule is: multiply by ${m}, then ${c > 0 ? 'add ' + c : 'subtract ' + -c}. Work out the 4th term.`, answer: intAns(seq[3]), steps: seq.slice(1).map((t, i) => `Term ${i + 2}: ${seq[i]} × ${m} ${c > 0 ? '+' : '−'} ${Math.abs(c)} = ${t}`), traps: [tv(seq[3] * m + c, 'That is the 5th term: apply the rule 3 times to go from the 1st term to the 4th.'), tv(a * m ** 3 + c, `Add or subtract ${Math.abs(c)} at every step, not just once at the end.`)] });
    }
    if (level === 2) {
      const k = int(r, 6, 20);
      if (r() < 0.6) {
        const p = nz(r, -6, 9), q = nz(r, -12, 12), v = p * k + q;
        return make(this.id, level, seed, { prompt: `The nth term of a sequence is ${lin(p, q, 'n')}. Work out the ${k}th term.`, answer: intAns(v), steps: [`Substitute n = ${k}.`, `${num(p)} × ${k} ${q < 0 ? '−' : '+'} ${Math.abs(q)} = ${num(v)}`], traps: [tv(p * (k + q), `Multiply n by ${p} first, then ${q < 0 ? 'subtract' : 'add'} ${Math.abs(q)}.`), tv(p + k + q, `The n in ${lin(p, q, 'n')} is multiplied by ${num(p)}: substitute n = ${k} and work out ${num(p)} × ${k}, not ${num(p)} + ${k}.`)] });
      }
      const q = nz(r, -9, 9), v = k * k + q;
      return make(this.id, level, seed, { prompt: `The nth term of a sequence is n^2 ${q < 0 ? '−' : '+'} ${Math.abs(q)}. Work out the ${k}th term.`, answer: intAns(v), steps: [`${k}^2 = ${k * k}`, `${k * k} ${q < 0 ? '−' : '+'} ${Math.abs(q)} = ${v}`], traps: [tv(2 * k + q, `n^2 means n × n: ${k} × ${k} = ${k * k}.`)] });
    }
    const p = int(r, 2, 9), q = nz(r, -9, 12), n = int(r, 8, 40);
    if (r() < 0.5) {
      const v = p * n + q;
      return make(this.id, level, seed, { prompt: `Which term of the sequence with nth term ${lin(p, q, 'n')} is equal to ${v}?`, answer: intAns(n), steps: [`Solve ${lin(p, q, 'n')} = ${v}`, `${p}n = ${v - q}`, `n = ${n}`], traps: [tv(p * v + q, `That is the ${v}th term. Here you know the term and need its position: solve ${lin(p, q, 'n')} = ${v}.`)] });
    }
    const yes = r() < 0.5, v = p * n + q + (yes ? 0 : int(r, 1, p - 1));
    const pos = F(v - q, p);
    const c = choiceItem(r, yes ? 'Yes' : 'No', [yes ? 'No' : 'Yes'], () => `Solve ${lin(p, q, 'n')} = ${v}: n = ${fv(pos)}. ${yes ? 'That is a whole number, so it is a term.' : 'n must be a whole number, so it is not a term.'}`);
    return make(this.id, level, seed, { prompt: `Is ${v} a term of the sequence with nth term ${lin(p, q, 'n')}?`, ...c, steps: [`Solve ${lin(p, q, 'n')} = ${v}: ${p}n = ${v - q}, so n = ${fv(pos)}.`, yes ? `n = ${n} is a whole number: ${v} is the ${n}th term.` : 'n is not a whole number, so it is not a term.'] });
  },
};

/* ───────── A25 linear nth term ───────── */
const seqLinear = {
  id: 'maths.algebra.seq-nth-linear',
  name: 'Find the nth term of a linear sequence',
  levels: [{ label: 'Increasing' }, { label: 'Decreasing and negative' }, { label: 'Use the nth term' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level < 3) {
      const d = level === 1 ? int(r, 2, 9) : -int(r, 2, 8), z = level === 1 ? int(r, -6, 9) : int(r, 10, 40) * (r() < 0.8 ? 1 : -1);
      const ts = terms(n => d * n + z, 4);
      const ans = lin(d, z, 'n');
      return make(this.id, level, seed, { prompt: `Find an expression for the nth term of ${seqText(ts)}`, answer: algAns(ans, 'any', ['n']), steps: [`The terms ${d > 0 ? 'go up' : 'go down'} by ${Math.abs(d)} each time, so the nth term starts ${d}n.`.replace(' 1n', ' n'), `Zero term (the term before the first): ${ts[0]} ${d > 0 ? '−' : '+'} ${Math.abs(d)} = ${num(z)}`, `nth term: ${ans}`], note: 'Use n, for example 3n + 2.', alTraps: [algTrap(lin(1, d, 'n'), `"${d > 0 ? '+' : '−'}${Math.abs(d)} each time" means the n coefficient is ${d}: ${d}n, not n ${d > 0 ? '+' : '−'} ${Math.abs(d)}.`), algTrap(lin(d, ts[0], 'n'), `Use the zero term, not the first term: check n = 1 gives ${ts[0]}.`), algTrap(lin(-d, z, 'n'), `The sequence ${d > 0 ? 'increases' : 'decreases'}, so the coefficient of n is ${d > 0 ? 'positive' : 'negative'}.`)] });
    }
    const d = int(r, 3, 9), a = int(r, -5, 12), n = int(r, 12, 40), z = a - d;
    if (r() < 0.5) {
      const v = d * n + z, ts = terms(k => d * k + z, 4);
      return make(this.id, level, seed, { prompt: `Which term of ${seqText(ts)} is ${v}?`, answer: intAns(n), steps: [`nth term: ${lin(d, z, 'n')}`, `${lin(d, z, 'n')} = ${v}, so ${d}n = ${v - z}`, `n = ${n}`], traps: [tv(Math.round((v - a) / d), `Find the nth term first (${lin(d, z, 'n')}), then solve. Counting steps from the first term gives the number of steps, not the position.`)] });
    }
    const T = int(r, 60, 200), first = Math.floor((T - z) / d) + 1, v = d * first + z, ts = terms(k => d * k + z, 4);
    return make(this.id, level, seed, { prompt: `Find the first term of ${seqText(ts)} that is greater than ${T}.`, answer: intAns(v), steps: [`nth term: ${lin(d, z, 'n')}`, `${lin(d, z, 'n')} > ${T} gives n > ${fv(F(T - z, d))}`, `The first whole number is n = ${first}: term ${v}.`], traps: [tv(first, `${first} is the position. The question asks for the term: ${lin(d, z, 'n')} with n = ${first}.`), tv(v - d, `${v - d} is not greater than ${T}.`)] });
  },
};

/* ───────── A24 special sequences ───────── */
const KINDS = ['Triangular numbers', 'Square numbers', 'Cube numbers', 'Arithmetic', 'Fibonacci-type', 'Geometric'];
const KIND_WHY = { 'Triangular numbers': 'Triangular numbers are 1, 3, 6, 10, 15: the differences go up by 1.', 'Square numbers': 'Square numbers are 1, 4, 9, 16, 25: n × n.', 'Cube numbers': 'Cube numbers are 1, 8, 27, 64: n × n × n.', Arithmetic: 'An arithmetic sequence adds the same number each time.', 'Fibonacci-type': 'In a Fibonacci-type sequence each term is the sum of the two before it.', Geometric: 'A geometric sequence multiplies by the same number each time.' };
const seqSpecial = {
  id: 'maths.algebra.seq-special',
  name: 'Special sequences',
  levels: [{ label: 'Name the sequence' }, { label: 'Next terms' }, { label: 'Geometric with fractions' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, KINDS);
      let ts;
      if (kind === 'Triangular numbers') ts = [1, 3, 6, 10, 15];
      else if (kind === 'Square numbers') ts = [1, 4, 9, 16, 25];
      else if (kind === 'Cube numbers') ts = [1, 8, 27, 64, 125];
      else if (kind === 'Arithmetic') { const a = int(r, 2, 20), d = nz(r, -6, 9); ts = terms(n => a + (n - 1) * d); }
      else if (kind === 'Fibonacci-type') { const a = int(r, 1, 5), b = int(r, 2, 7); ts = [a, b]; while (ts.length < 6) ts.push(ts.at(-1) + ts.at(-2)); }
      else { const a = int(r, 1, 5), m = pick(r, [2, 3, 5]); ts = terms(n => a * m ** (n - 1)); }
      const others = shuffled(r, KINDS.filter(k => k !== kind)).slice(0, 3);
      const c = choiceItem(r, kind, others, o => KIND_WHY[o]);
      return make(this.id, level, seed, { prompt: `What type of sequence is ${seqText(ts)}?`, ...c, steps: [KIND_WHY[kind]] });
    }
    if (level === 2) {
      const kind = pick(r, ['fib', 'geo', 'tri', 'sq']);
      if (kind === 'fib') {
        const a = int(r, 1, 6), b = int(r, 2, 9), ts = [a, b]; while (ts.length < 6) ts.push(ts.at(-1) + ts.at(-2));
        return make(this.id, level, seed, { prompt: `Each term is the sum of the two terms before it: ${ts.slice(0, 5).join(', ')}, … Work out the next term.`, answer: intAns(ts[5]), steps: [`${ts[3]} + ${ts[4]} = ${ts[5]}`], traps: [tv(ts[4] + (ts[4] - ts[3]), 'This is not arithmetic: add the two previous terms.')] });
      }
      if (kind === 'geo') {
        const a = int(r, 1, 6), m = pick(r, [2, 3, 4, -2]), ts = terms(n => a * m ** (n - 1), 5);
        return make(this.id, level, seed, { prompt: `Work out the next term of the geometric sequence ${ts.slice(0, 4).map(num).join(', ')}, …`, answer: intAns(ts[4]), steps: [`Common ratio: ${num(ts[1])} ÷ ${num(ts[0])} = ${num(m)}`, `${num(ts[3])} × ${m < 0 ? '(' + num(m) + ')' : m} = ${num(ts[4])}`], traps: [tv(ts[3] + (ts[3] - ts[2]), 'A geometric sequence multiplies by the same number; it does not add the same number.')] });
      }
      if (kind === 'tri') {
        const s = int(r, 3, 6), ts = terms(n => ((n + s) * (n + s + 1)) / 2, 5);
        return make(this.id, level, seed, { prompt: `These are triangular numbers: ${ts.slice(0, 4).join(', ')}, … Work out the next one.`, answer: intAns(ts[4]), steps: [`Differences: ${ts[1] - ts[0]}, ${ts[2] - ts[1]}, ${ts[3] - ts[2]}: they go up by 1.`, `Next difference ${ts[4] - ts[3]}: ${ts[3]} + ${ts[4] - ts[3]} = ${ts[4]}`], traps: [tv(ts[3] + (ts[3] - ts[2]), 'The differences increase by 1 each time.')] });
      }
      const c = nz(r, -5, 5), s0 = int(r, 1, 4), ts = terms(n => (n + s0) ** 2 + c, 5);
      return make(this.id, level, seed, { prompt: `The terms are each a square number ${c > 0 ? 'plus ' + c : 'minus ' + -c}: ${ts.slice(0, 4).join(', ')}, … Work out the next term.`, answer: intAns(ts[4]), steps: [`The squares are ${terms(n => (n + s0) ** 2, 5).slice(0, 4).join(', ')}; the next is ${(5 + s0) ** 2}.`, `${(5 + s0) ** 2} ${c > 0 ? '+' : '−'} ${Math.abs(c)} = ${ts[4]}`], traps: [tv(ts[3] + (ts[3] - ts[2]), 'The differences go up by 2 each time, so it is not arithmetic.')] });
    }
    const p = pick(r, [1, 2, 3]), q = p === 1 ? pick(r, [2, 3]) : p === 2 ? 3 : pick(r, [2, 4]);
    const a = q ** 4 * int(r, 1, 2), ratio = F(p, q), ts = [a]; for (let i = 1; i < 5; i++) ts.push(ts[i - 1] * p / q);
    if (r() < 0.5) return make(this.id, level, seed, { prompt: `Find the common ratio of the geometric sequence ${ts.slice(0, 4).join(', ')}, …`, answer: valAns(ratio), steps: [`Ratio = second term ÷ first term = ${ts[1]} ÷ ${ts[0]} = ${fv(ratio)}`, `Check: ${ts[2]} ÷ ${ts[1]} = ${fv(ratio)}`], traps: [tv(F(q, p), 'Divide each term by the one before it, not the other way round.'), tv(ts[1] - ts[0], 'A geometric sequence has a common ratio (divide), not a common difference (subtract).')] });
    return make(this.id, level, seed, { prompt: `Work out the next term of the geometric sequence ${ts.slice(0, 4).join(', ')}, …`, answer: intAns(ts[4]), steps: [`Common ratio: ${ts[1]} ÷ ${ts[0]} = ${fv(ratio)}`, `${ts[3]} × ${fv(ratio)} = ${ts[4]}`], traps: [tv(ts[3] - (ts[2] - ts[3]), 'The terms are multiplied by the same fraction each time, not reduced by the same amount.')] });
  },
};

/* ───────── A25 Higher: quadratic nth term ───────── */
const seqQuadratic = {
  id: 'maths.algebra.seq-nth-quadratic',
  name: 'Find the nth term of a quadratic sequence',
  higherOnly: true,
  levels: [{ label: 'n² + bn + c' }, { label: 'an² + bn + c' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const a = level === 1 ? 1 : pick(r, [2, 3, -1, -2]), b = int(r, -6, 6), c = int(r, -8, 8);
    const ts = terms(n => a * n * n + b * n + c, 5);
    const d1 = ts.slice(1).map((t, i) => t - ts[i]), d2 = d1[1] - d1[0];
    const rest = terms(n => b * n + c, 4);
    const ans = polyM([[a, 'n^2'], [b, 'n'], [c, '']]);
    return make(this.id, level, seed, { prompt: `Find an expression for the nth term of the quadratic sequence ${seqText(ts)}`, answer: algAns(ans, 'any', ['n']),
      steps: [`First differences: ${d1.map(num).join(', ')}`, `Second difference: ${num(d2)}, so the n^2 coefficient is ${num(d2)} ÷ 2 = ${num(a)}.`, `Subtract ${polyM([[a, 'n^2']])} from each term: ${rest.map(num).join(', ')}`, `That linear sequence has nth term ${polyM([[b, 'n'], [c, '']])}.`, `nth term: ${ans}`],
      note: 'Use n, for example 2n^2 + 3n − 1.', alTraps: [algTrap(polyM([[d2, 'n^2'], [b, 'n'], [c, '']]), `The n^2 coefficient is half the second difference: ${num(d2)} ÷ 2 = ${num(a)}.`), algTrap(polyM([[a, 'n^2'], [d1[0], 'n'], [c, '']]), `After subtracting ${polyM([[a, 'n^2']])}, find the nth term of what is left; the first difference is not the n coefficient.`)] });
  },
};

/* ───────── A22 linear inequalities ───────── */
const ineqSolve = {
  id: 'maths.algebra.ineq-solve',
  name: 'Solve linear inequalities',
  levels: [{ label: 'One step' }, { label: 'Two steps and negative coefficients' }, { label: 'Double and both-sides inequalities' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), op = pick(r, OPS);
    const note = 'Type an inequality, for example x > 3 or −2 < x ≤ 5. Use the buttons for ≤ and ≥.';
    if (level === 1) {
      const kind = pick(r, ['add', 'mul', 'div']);
      if (kind === 'add') { const a = nz(r, -9, 12), b = int(r, -10, 20), v = b - a; return make(this.id, level, seed, { prompt: `Solve x ${a < 0 ? '−' : '+'} ${Math.abs(a)} ${op} ${num(b)}`, answer: ineq(setFor(op, v)), steps: [`${a < 0 ? 'Add' : 'Subtract'} ${Math.abs(a)} on both sides, just as in an equation.`, `x ${op} ${num(v)}`], inTraps: [iT(setFor(flip[op], v), 'Adding or subtracting does not change the direction of the inequality.'), iT(setFor(op, b + a), `Use the inverse operation: ${a < 0 ? 'add' : 'subtract'} ${Math.abs(a)} on both sides to undo ${a < 0 ? '−' : '+'} ${Math.abs(a)}.`)], note }); }
      if (kind === 'mul') { const a = int(r, 2, 9), b = int(r, -20, 40), v = F(b, a); return make(this.id, level, seed, { prompt: `Solve ${a}x ${op} ${num(b)}`, answer: ineq(setFor(op, v)), steps: [`Divide both sides by ${a}. ${a} is positive, so the sign stays the same.`, `x ${op} ${fv(v)}`], inTraps: [iT(setFor(flip[op], v), `Dividing by a positive number (${a}) keeps the direction of the inequality.`)], note }); }
      const a = int(r, 2, 6), b = int(r, -8, 10), v = a * b;
      return make(this.id, level, seed, { prompt: `Solve {x/${a}} ${op} ${num(b)}`, answer: ineq(setFor(op, v)), steps: [`Multiply both sides by ${a}.`, `x ${op} ${num(v)}`], inTraps: [iT(setFor(op, F(b, a)), `Undo ÷ ${a} by multiplying by ${a}.`)], note });
    }
    if (level === 2) {
      if (r() < 0.5) {
        const a = int(r, 2, 8), b = nz(r, -12, 12), c = int(r, -20, 30), v = F(c - b, a);
        return make(this.id, level, seed, { prompt: `Solve ${lin(a, b)} ${op} ${num(c)}`, answer: ineq(setFor(op, v)), steps: [`${b < 0 ? 'Add' : 'Subtract'} ${Math.abs(b)}: ${a}x ${op} ${num(c - b)}`, `Divide by ${a}: x ${op} ${fv(v)}`], inTraps: [iT(setFor(op, F(c + b, a)), `Use the inverse operation: ${b < 0 ? 'add' : 'subtract'} ${Math.abs(b)} on both sides to undo ${b < 0 ? '−' : '+'} ${Math.abs(b)}.`), iT(setFor(flip[op], v), 'Dividing by a positive number keeps the direction of the inequality.')], note });
      }
      const a = int(r, 2, 6), c = int(r, -10, 20), d = int(r, -15, 15), v = F(c - d, a);
      return make(this.id, level, seed, { prompt: `Solve ${num(c)} − ${a}x ${op} ${num(d)}`, answer: ineq(setFor(flip[op], v)), steps: [`Subtract ${num(c)}: −${a}x ${op} ${num(d - c)}`, `Divide by −${a}. Dividing by a negative number reverses the inequality: ${op} becomes ${flip[op]}.`, `x ${flip[op]} ${fv(v)}`], inTraps: [iT(setFor(op, v), `When you divide both sides by −${a}, the inequality sign reverses. Check with a value: try x = ${fv(add(v, F(op === '<' || op === '≤' ? 1 : -1)))}.`)], note });
    }
    if (r() < 0.5) {
      const a = int(r, 2, 5), b = nz(r, -9, 9), lo = int(r, -6, 2), hi = lo + int(r, 2, 6), L = a * lo + b, H = a * hi + b;
      const li = r() < 0.5, hi_ = r() < 0.5, o1 = li ? '≤' : '<', o2 = hi_ ? '≤' : '<';
      return make(this.id, level, seed, { prompt: `Solve ${num(L)} ${o1} ${lin(a, b)} ${o2} ${num(H)}`, answer: ineq([between(lo, li, hi, hi_)]), steps: [`Do the same to all three parts. ${b < 0 ? 'Add' : 'Subtract'} ${Math.abs(b)}: ${num(L - b)} ${o1} ${a}x ${o2} ${num(H - b)}`, `Divide by ${a}: ${num(lo)} ${o1} x ${o2} ${num(hi)}`], inTraps: [iT([between(F(L + b, a), li, F(H + b, a), hi_)], `${b < 0 ? 'Add' : 'Subtract'} ${Math.abs(b)} in every part to undo ${b < 0 ? '−' : '+'} ${Math.abs(b)}.`)], note });
    }
    for (;;) {
      const a = int(r, 2, 9), c = int(r, 1, 8), b = nz(r, -10, 10), d = nz(r, -10, 10);
      if (a === c) continue;
      const v = F(d - b, a - c), resOp = a > c ? op : flip[op];
      return make(this.id, level, seed, { prompt: `Solve ${lin(a, b)} ${op} ${lin(c, d)}`, answer: ineq(setFor(resOp, v)), steps: [`Subtract ${c === 1 ? '' : c}x from both sides: ${lin(a - c, b)} ${op} ${num(d)}`, `${b < 0 ? 'Add' : 'Subtract'} ${Math.abs(b)}: ${a - c === 1 ? '' : a - c === -1 ? '−' : a - c}x ${op} ${num(d - b)}`, a > c ? `Divide by ${a - c}: x ${op} ${fv(v)}` : `Divide by ${a - c}, a negative number, so reverse the sign: x ${resOp} ${fv(v)}`], inTraps: [iT(setFor(a > c ? flip[op] : op, v), a > c ? 'Dividing by a positive number keeps the direction of the inequality.' : 'Dividing by a negative number reverses the inequality.')], note });
    }
  },
};

const ineqIntegers = {
  id: 'maths.algebra.ineq-integers',
  name: 'Integer solutions of inequalities',
  levels: [{ label: 'List from an inequality' }, { label: 'Solve, then list' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const range = (lo, li, hi, hi_) => { const out = []; for (let k = Math.ceil(lo); k <= Math.floor(hi); k++) if ((k > lo || li) && (k < hi || hi_)) out.push(k || 0); return out; };
    const note = 'List the integers separated by commas, for example −1, 0, 1, 2.';
    if (level === 1) {
      const lo = int(r, -6, 2), hi = lo + int(r, 3, 6), li = r() < 0.5, hi_ = r() < 0.5, vals = range(lo, li, hi, hi_);
      return make(this.id, level, seed, { prompt: `n is an integer and ${num(lo)} ${li ? '≤' : '<'} n ${hi_ ? '≤' : '<'} ${num(hi)}. List all the possible values of n.`, answer: list(vals), steps: [`${li ? '≤' : '<'} at the left: ${num(lo)} is ${li ? '' : 'not '}included. ${hi_ ? '≤' : '<'} at the right: ${num(hi)} is ${hi_ ? '' : 'not '}included.`, `n = ${vals.map(num).join(', ')}`], note });
    }
    const a = pick(r, [2, 3]), b = nz(r, -5, 5), lo = int(r, -5, 1), hi = lo + int(r, 3, 6), li = r() < 0.5, hi_ = r() < 0.5;
    const L = a * lo + b + (li ? 0 : int(r, 0, a - 1)), H = a * hi + b - (hi_ ? 0 : int(r, 0, a - 1));
    const xl = (L - b) / a, xh = (H - b) / a, vals = range(xl, li, xh, hi_);
    if (vals.length < 2) return this.gen(level, seed + 'v');
    return make(this.id, level, seed, { prompt: `n is an integer and ${num(L)} ${li ? '≤' : '<'} ${lin(a, b, 'n')} ${hi_ ? '≤' : '<'} ${num(H)}. List all the possible values of n.`, answer: list(vals), steps: [`${b < 0 ? 'Add' : 'Subtract'} ${Math.abs(b)} and divide by ${a} in every part: ${fv(F(L - b, a))} ${li ? '≤' : '<'} n ${hi_ ? '≤' : '<'} ${fv(F(H - b, a))}`, `Integers in that range: ${vals.map(num).join(', ')}`], note });
  },
};

const ineqQuadratic = {
  id: 'maths.algebra.ineq-quadratic',
  name: 'Solve quadratic inequalities',
  higherOnly: true,
  levels: [{ label: 'Factorised' }, { label: 'Factorise first' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), op = pick(r, OPS), inc = op === '≤' || op === '≥';
    const note = 'For two regions, write them joined by "or", for example x < −2 or x > 3.';
    let a, b, prompt, steps0;
    if (level === 1) {
      a = int(r, -8, 3); b = a + int(r, 1, 8);
      prompt = `Solve (${lin(1, -a)})(${lin(1, -b)}) ${op} 0`; steps0 = [`The graph y = (${lin(1, -a)})(${lin(1, -b)}) crosses the x-axis at x = ${num(a)} and x = ${num(b)}.`];
    } else if (r() < 0.4) {
      const k = int(r, 2, 9); a = -k; b = k;
      prompt = `Solve x^2 ${op} ${k * k}`; steps0 = [`x^2 − ${k * k} ${op} 0, and x^2 − ${k * k} = (x + ${k})(x − ${k}).`, `Critical values: x = −${k} and x = ${k} (remember the negative root).`];
    } else {
      a = int(r, -8, 3); b = a + int(r, 1, 8);
      prompt = `Solve ${polyM([[1, 'x^2'], [-(a + b), 'x'], [a * b, '']])} ${op} 0`; steps0 = [`Factorise: (${lin(1, -a)})(${lin(1, -b)}) ${op} 0`, `Critical values: x = ${num(a)} and x = ${num(b)}.`];
    }
    const inside = op === '<' || op === '≤';
    const set = inside ? [between(a, inc, b, inc)] : [lt(a, inc), gt(b, inc)];
    const other = inside ? [lt(a, inc), gt(b, inc)] : [between(a, inc, b, inc)];
    return make(this.id, level, seed, { prompt, answer: ineq(set), steps: [...steps0, `The curve is a ∪ shape: it is below the x-axis between the roots and above it outside them.`, inside ? `${op} 0 means between the roots: ${num(a)} ${op} x ${op} ${num(b)}` : `${op} 0 means outside the roots: x ${inc ? '≤' : '<'} ${num(a)} or x ${inc ? '≥' : '>'} ${num(b)}`],
      inTraps: [iT(other, inside ? `${op} 0 is where the ∪-shaped graph is below the x-axis: between the roots.` : `${op} 0 is where the graph is above the x-axis: outside the roots, so two separate regions.`), iT(inside ? [lt(b, inc)] : [gt(b, inc)], `There are two critical values: ${num(a)} and ${num(b)}. The solution uses both.`)], note });
  },
};

/* ───────── A18 quadratic equations ───────── */
const quadSolve = {
  id: 'maths.algebra.quad-solve',
  name: 'Solve quadratic equations by factorising',
  levels: [{ label: 'x² + bx + c = 0' }, { label: 'Difference of two squares and common factors' }, { label: 'Rearrange first; ax² + bx + c = 0', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const note = 'Give both solutions.';
    if (level === 1) {
      let p, q; do { p = nz(r, -9, 9); q = nz(r, -9, 9); } while (p === q);
      const factored = r() < 0.4;
      const prompt = factored ? `Solve (${lin(1, -p)})(${lin(1, -q)}) = 0` : `Solve ${polyM([[1, 'x^2'], [-(p + q), 'x'], [p * q, '']])} = 0`;
      return make(this.id, level, seed, { prompt, answer: sols([p, q]), steps: [...(factored ? [] : [`Factorise: (${lin(1, -p)})(${lin(1, -q)}) = 0`]), 'If two numbers multiply to 0, one of them is 0.', `${lin(1, -p)} = 0 gives x = ${num(p)}; ${lin(1, -q)} = 0 gives x = ${num(q)}`], soTraps: [sT([-p, -q], `If x ${-p < 0 ? '−' : '+'} ${Math.abs(p)} = 0, then x = ${num(p)}: the solution has the opposite sign to the number in the bracket.`)], note });
    }
    if (level === 2) {
      if (r() < 0.5) { const k = int(r, 2, 12); return make(this.id, level, seed, { prompt: `Solve x^2 − ${k * k} = 0`, answer: sols([k, -k]), steps: [`x^2 − ${k * k} = (x + ${k})(x − ${k}) = 0`, `x = −${k} or x = ${k}`], soTraps: [sT([k], `A square root has two values: x = ${k} or x = −${k}.`)], note }); }
      const b = nz(r, -12, 12);
      return make(this.id, level, seed, { prompt: `Solve ${polyM([[1, 'x^2'], [b, 'x']])} = 0`, answer: sols([0, -b]), steps: [`Factorise: x(${lin(1, b)}) = 0`, `x = 0 or ${lin(1, b)} = 0, so x = 0 or x = ${num(-b)}`], soTraps: [sT([-b], 'Do not divide by x: that loses the solution x = 0. Factorise instead.')], note });
    }
    const kind = pick(r, ['move', 'xx', 'a']);
    if (kind === 'a') {
      for (;;) {
        const a = int(r, 2, 5), p = nz(r, -7, 7), q = nz(r, -7, 7);
        if (gcd(a, p) !== 1) continue;
        const x1 = F(-p, a), x2 = F(-q);
        if (eq(x1, x2)) continue;
        return make(this.id, level, seed, { prompt: `Solve ${polyM([[a, 'x^2'], [a * q + p, 'x'], [p * q, '']])} = 0`, answer: sols([x1, x2]), steps: [`Factorise: (${lin(a, p)})(${lin(1, q)}) = 0`, `${lin(a, p)} = 0 gives x = ${fv(x1)}`, `${lin(1, q)} = 0 gives x = ${num(-q)}`], soTraps: [sT([F(p, a), F(q)], 'Check the signs: set each bracket equal to 0 and solve.'), sT([F(-p), F(-q)], `${a}x ${p < 0 ? '−' : '+'} ${Math.abs(p)} = 0 gives x = ${fv(x1)}: divide by ${a}.`)], note });
      }
    }
    let p, q; do { p = nz(r, -8, 8); q = nz(r, -8, 8); } while (p === q);
    if (kind === 'move') return make(this.id, level, seed, { prompt: `Solve x^2 = ${lin(p + q, -p * q)}`, answer: sols([p, q]), steps: [`Rearrange to make one side 0: ${polyM([[1, 'x^2'], [-(p + q), 'x'], [p * q, '']])} = 0`, `Factorise: (${lin(1, -p)})(${lin(1, -q)}) = 0`, `x = ${num(p)} or x = ${num(q)}`], soTraps: [sT([-p, -q], 'Rearrange so that one side is 0 before factorising, and check the signs.')], note });
    const b = -(p + q), c = -p * q;
    if (b === 0) return this.gen(level, seed + 'b');
    return make(this.id, level, seed, { prompt: `Solve x(${lin(1, b)}) = ${num(c)}`, answer: sols([p, q]), steps: [`Expand and rearrange: ${polyM([[1, 'x^2'], [b, 'x'], [-c, '']])} = 0`, `(${lin(1, -p)})(${lin(1, -q)}) = 0`, `x = ${num(p)} or x = ${num(q)}`], soTraps: [sT([c, c - b], `x × (x ${b < 0 ? '−' : '+'} ${Math.abs(b)}) = ${num(c)} does not mean either factor is ${num(c)}. Only a product of 0 lets you set each factor to 0: rearrange first.`)], note });
  },
};

const quadSquare = {
  id: 'maths.algebra.quad-complete-square',
  name: 'Complete the square',
  higherOnly: true,
  levels: [{ label: 'Write as (x + p)² + q' }, { label: 'Turning point' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), p = nz(r, -6, 6), c = int(r, -12, 15), q = c - p * p;
    const quad = polyM([[1, 'x^2'], [2 * p, 'x'], [c, '']]), cs = `(${lin(1, p)})^2${q ? ` ${q < 0 ? '−' : '+'} ${Math.abs(q)}` : ''}`;
    if (level === 1) return make(this.id, level, seed, { prompt: `Write ${quad} in the form (x + p)^2 + q`, answer: algAns(cs, 'completed-square', ['x']), steps: [`Halve the coefficient of x: ${2 * p} ÷ 2 = ${num(p)}, so start with (${lin(1, p)})^2.`, `(${lin(1, p)})^2 = ${polyM([[1, 'x^2'], [2 * p, 'x'], [p * p, '']])}: that adds ${p * p}.`, `${quad} = ${cs}`], alTraps: [algTrap(`(${lin(1, 2 * p)})^2 + ${c}`, `Halve the coefficient of x: (x ${p < 0 ? '−' : '+'} ${Math.abs(p)})^2.`), algTrap(`(${lin(1, p)})^2 + ${c + p * p}`, `(${lin(1, p)})^2 already contains +${p * p}, so subtract ${p * p}, do not add it.`)], note: 'Type it as (x + p)^2 + q.' });
    return make(this.id, level, seed, { prompt: `y = ${quad}. By completing the square, find the coordinates of the turning point.`, answer: pairs([[-p, q]], ['x', 'y']), steps: [`${quad} = ${cs}`, `(${lin(1, p)})^2 is smallest (0) when x = ${num(-p)}; then y = ${num(q)}.`, `Turning point (${num(-p)}, ${num(q)})`], soTraps: [sT([[p, q]], `(${lin(1, p)})^2 = 0 when x = ${num(-p)}: the x-coordinate has the opposite sign to the number in the bracket.`)] });
  },
};

const quadFormula = {
  id: 'maths.algebra.quad-formula',
  name: 'Use the quadratic formula',
  higherOnly: true,
  levels: [{ label: 'ax² + bx + c = 0' }, { label: 'Rearrange first' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (;;) {
      const a = level === 1 ? int(r, 1, 4) : 1, b = nz(r, -9, 9), c = nz(r, -9, 9), D = b * b - 4 * a * c;
      if (D <= 0 || Number.isInteger(Math.sqrt(D))) continue;
      const roots = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
      const near = v => Math.abs(v * 100 - Math.round(v * 100)) > 0.499 && Math.abs(v * 100 - Math.round(v * 100)) < 0.501;
      if (roots.some(near)) continue;
      const rnd = v => F(Math.round(v * 100), 100);
      const prompt = level === 1 ? `Solve ${polyM([[a, 'x^2'], [b, 'x'], [c, '']])} = 0. Give your solutions correct to 2 decimal places.` : r() < 0.5 ? `Solve x^2 = ${polyM([[-b, 'x'], [-c, '']])}. Give your solutions correct to 2 decimal places.` : `Solve x(${lin(1, b)}) = ${num(-c)}. Give your solutions correct to 2 decimal places.`;
      const wrongB = [(b + Math.sqrt(D)) / (2 * a), (b - Math.sqrt(D)) / (2 * a)];
      const half = [-b + Math.sqrt(D) / (2 * a), -b - Math.sqrt(D) / (2 * a)];
      return make(this.id, level, seed, { prompt, answer: sols(roots.map(rnd), { dp: 2 }),
        steps: [...(level === 2 ? [`Rearrange to make one side 0: ${polyM([[1, 'x^2'], [b, 'x'], [c, '']])} = 0`] : []), `a = ${a}, b = ${num(b)}, c = ${num(c)}`, `x = {−b ± √(b^2 − 4ac)/2a} = {${num(-b)} ± √${D}/${2 * a}}`, `x = ${roots.map(v => (Math.round(v * 100) / 100).toFixed(2).replace('-', '−')).join(' or x = ')} (2 d.p.)`],
        soTraps: [sT(wrongB.map(rnd), `Start with −b: here −b = ${num(-b)}.`), sT(half.map(rnd), `Divide the whole of −b ± √(b^2 − 4ac) by 2a, not just the square root.`)], note: 'Give both solutions to 2 decimal places.' });
    }
  },
};

/* ───────── A19 simultaneous equations ───────── */
const eqn = (a, b, e, x = 'x', y = 'y') => `${polyM([[a, x], [b, y]])} = ${num(e)}`;
const simSolve = {
  id: 'maths.algebra.sim-solve',
  name: 'Solve simultaneous equations',
  levels: [{ label: 'Add or subtract' }, { label: 'Multiply one equation' }, { label: 'Multiply both equations' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (;;) {
      const x = int(r, -5, 9), y = int(r, -5, 9);
      let a, b, c, d;
      if (level === 1) { a = int(r, 1, 6); c = int(r, 1, 6); b = int(r, 1, 5); d = pick(r, [b, -b]); if (a === c && b === d) continue; }
      else if (level === 2) { const k = int(r, 2, 4); c = int(r, 1, 5); d = pick(r, [1, -1]) * int(r, 1, 3); a = int(r, 1, 6); b = k * d * pick(r, [1, -1]); }
      else { a = int(r, 2, 5); c = int(r, 2, 5); b = nz(r, -5, 5); d = nz(r, -5, 5); if (gcd(a, c) !== 1 || gcd(Math.abs(b), Math.abs(d)) !== 1 || Math.abs(b) === 1 || Math.abs(d) === 1) continue; }
      if (a * d - b * c === 0) continue;
      const e1 = a * x + b * y, e2 = c * x + d * y;
      const elim = level === 1 ? (b === d ? 'Subtract the equations: the y terms cancel.' : 'Add the equations: the y terms cancel.') : level === 2 ? `Multiply the second equation by ${Math.abs(b / d)} so the y terms have the same size of coefficient, then ${b / d > 0 ? 'subtract' : 'add'} the equations.` : 'Multiply each equation so that one letter has the same size of coefficient in both, then add or subtract.';
      return make(this.id, level, seed, { prompt: `Solve the simultaneous equations ${eqn(a, b, e1)} and ${eqn(c, d, e2)}`, answer: pairs([[x, y]], ['x', 'y']), steps: [elim, `This gives ${level === 3 ? 'one letter' : 'x'}; substitute it back into either equation to find the other.`, `x = ${num(x)}, y = ${num(y)}`, `Check in the other equation: ${eqn(c, d, e2).split(' = ')[0]} with x = ${num(x)}, y = ${num(y)} gives ${num(e2)} ✓`], soTraps: [sT([[x, -y]], 'Check the sign when you add or subtract the equations: substitute both values into both equations.'), sT([[-x, y]], 'Check the sign of x: substitute both values into both equations.')], note: 'Fill in both values.' });
    }
  },
};

const simForm = {
  id: 'maths.algebra.sim-form',
  name: 'Form and solve simultaneous equations',
  levels: [{ label: 'Prices' }, { label: 'A line through two points' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      for (;;) {
        const A = int(r, 6, 20), Cc = int(r, 3, A - 1), p = int(r, 1, 4), q = int(r, 1, 5), s = int(r, 1, 4), t = int(r, 1, 5);
        if (p * t - q * s === 0) continue;
        const T1 = p * A + q * Cc, T2 = s * A + t * Cc;
        return make(this.id, level, seed, { prompt: `${p} adult ticket${p > 1 ? 's' : ''} and ${q} child ticket${q > 1 ? 's' : ''} cost £${T1}. ${s} adult ticket${s > 1 ? 's' : ''} and ${t} child ticket${t > 1 ? 's' : ''} cost £${T2}. Work out the cost of an adult ticket and of a child ticket.`, answer: pairs([[A, Cc]], ['a', 'c'], { labels: ['Adult ticket: £', 'Child ticket: £'] }), steps: [`Let a = adult price, c = child price: ${eqn(p, q, T1, 'a', 'c')} and ${eqn(s, t, T2, 'a', 'c')}`, 'Eliminate one letter by matching coefficients, then substitute back.', `a = ${A}, c = ${Cc}`], soTraps: [sT([[Cc, A]], 'Those prices are the wrong way round: check which value is the adult ticket.')] });
      }
    }
    for (;;) {
      const m = nz(r, -4, 5), c = int(r, -8, 8), x1 = int(r, -4, 3), x2 = x1 + int(r, 1, 5);
      return make(this.id, level, seed, { prompt: `The line y = mx + c passes through (${num(x1)}, ${num(m * x1 + c)}) and (${num(x2)}, ${num(m * x2 + c)}). Find m and c.`, answer: pairs([[m, c]], ['m', 'c'], { labels: ['m =', 'c ='] }), steps: [`Substitute both points: ${num(m * x1 + c)} = ${x1 === 0 ? 'c' : `${num(x1)}m + c`} and ${num(m * x2 + c)} = ${num(x2)}m + c`, `Subtract: ${num(m * (x2 - x1))} = ${x2 - x1}m, so m = ${num(m)}`, `Substitute back: c = ${num(c)}`], soTraps: [sT([[F(x2 - x1, m * (x2 - x1)), c]], 'Gradient = change in y ÷ change in x, not the other way round.')] });
    }
  },
};

const LATTICE25 = [[0, 5], [5, 0], [0, -5], [-5, 0], [3, 4], [4, 3], [-3, 4], [-4, 3], [3, -4], [4, -3], [-3, -4], [-4, -3]];
const simNonlinear = {
  id: 'maths.algebra.sim-nonlinear',
  name: 'Linear and quadratic simultaneous equations',
  higherOnly: true,
  levels: [{ label: 'Line and parabola' }, { label: 'Line and circle' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const note = 'There are two solution pairs: fill in both.';
    if (level === 1) {
      for (;;) {
        const r1 = int(r, -4, 4), r2 = int(r, -4, 4), p = int(r, -3, 3);
        if (r1 === r2) continue;
        const m = r1 + r2, c = p - r1 * r2;
        const line = `y = ${polyM([[m, 'x'], [c, '']])}`;
        return make(this.id, level, seed, { prompt: `Solve the simultaneous equations y = ${polyM([[1, 'x^2'], [p, '']])} and ${line}`, answer: pairs([[r1, r1 * r1 + p], [r2, r2 * r2 + p]]), steps: [`Set the two expressions for y equal: ${polyM([[1, 'x^2'], [p, '']])} = ${polyM([[m, 'x'], [c, '']])}`, `Rearrange: ${polyM([[1, 'x^2'], [-m, 'x'], [p - c, '']])} = 0, so (${lin(1, -r1)})(${lin(1, -r2)}) = 0`, `x = ${num(r1)} or x = ${num(r2)}`, `Substitute into the line for y: (${num(r1)}, ${num(r1 * r1 + p)}) and (${num(r2)}, ${num(r2 * r2 + p)})`], soTraps: [sT([[r1, m * r1], [r2, m * r2]], 'Find each y by substituting x into one of the original equations, including the constant term.')], note });
      }
    }
    for (;;) {
      const [P, Q] = shuffled(r, LATTICE25).slice(0, 2);
      if (P[0] === Q[0]) continue;
      const m = (Q[1] - P[1]) / (Q[0] - P[0]);
      if (!Number.isInteger(m) || m === 0) continue;
      const c = P[1] - m * P[0];
      const A = 1 + m * m, B = 2 * m * c, C = c * c - 25;
      const g = gcd(gcd(A, Math.abs(B)), Math.abs(C)) || 1;
      return make(this.id, level, seed, { prompt: `Solve the simultaneous equations x^2 + y^2 = 25 and y = ${polyM([[m, 'x'], [c, '']])}`, answer: pairs([P, Q]), steps: [`Substitute y = ${polyM([[m, 'x'], [c, '']])} into x^2 + y^2 = 25: x^2 + (${polyM([[m, 'x'], [c, '']])})^2 = 25`, `Expand and simplify: ${polyM([[A / g, 'x^2'], [B / g, 'x'], [C / g, '']])} = 0`, `Solve: x = ${num(P[0])} or x = ${num(Q[0])}`, `Find y from the line: (${num(P[0])}, ${num(P[1])}) and (${num(Q[0])}, ${num(Q[1])})`], soTraps: [sT([[P[0], -P[1]], [Q[0], -Q[1]]], 'Use the straight line to find each y: substituting into the circle gives two possible y values, and only one lies on the line.')], note });
    }
  },
};

export const algebraSkills2 = [seqTerms, seqLinear, seqSpecial, seqQuadratic, ineqSolve, ineqIntegers, ineqQuadratic, quadSolve, quadSquare, quadFormula, simSolve, simForm, simNonlinear];
