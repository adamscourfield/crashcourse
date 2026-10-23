// Edexcel GCSE (9–1) Mathematics 1MA1 — Number strand, pilot skills.
// Every generator is a pure function of (level, seed) and returns a JSON-safe item:
//   {id, skill, level, seed, calculator, prompt, answer, steps, traps?, optionWhy?, note?}
// prompt/steps/options use render.js markup: {3/4}, {1 2/3}, ^2, √, and a true minus sign.
// traps: wrong values that reveal a specific misconception, each with targeted feedback.
import { rng, int, pick, shuffled, intExcept } from './rng.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, gcd, lcm, num, fracMarkup, fromMixed, mixedParts } from './frac.js?v=20261023-maths-r9';
import { isPrime, primeFactors, primesMarkup, specValue } from './answers.js?v=20261023-maths-r9';

const t = n => (n < 0 ? `(${num(n)})` : String(n)); // operand after an operator
const fm = (f, mixed = false) => fracMarkup(f, { mixed });
const Fx = (n, d) => F(n, d);
export function make(skill, level, seed, o) {
  const target = ['integer', 'fraction', 'decimal', 'standard', 'power'].includes(o.answer.kind) ? specValue(o.answer) : null;
  const seen = new Set();
  const traps = (o.traps || []).filter(tr => {
    if (tr.v === null || tr.v === undefined || !target) return false;
    let v;
    try { v = typeof tr.v === 'number' ? F(tr.v) : F(tr.v.n, tr.v.d); } catch { return false; }
    const key = v.n + '/' + v.d;
    if (eq(v, target) || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map(tr => ({ v: typeof tr.v === 'number' ? { n: tr.v, d: 1 } : { n: tr.v.n, d: tr.v.d }, why: tr.why }));
  return { id: `${skill}@${level}#${seed}`, skill, level, seed: String(seed), calculator: false, ...o, traps };
}
const intAns = (value, extra = {}) => ({ kind: 'integer', value, ...extra });
const fracAns = (f, form = 'simplest') => ({ kind: 'fraction', value: { n: f.n, d: f.d }, form });
function choiceItem(r, correct, wrong, whyWrong) {
  const options = shuffled(r, [correct, ...wrong]);
  return { answer: { kind: 'choice', options, answer: options.indexOf(correct) }, optionWhy: options.map(o => (o === correct ? null : whyWrong(o))) };
}

/* ───────────────────────── Negative numbers (N1, N2) ───────────────────────── */

const compare = {
  id: 'maths.number.negatives.compare',
  name: 'Order positive and negative numbers',
  levels: [{ label: 'Integers' }, { label: 'Decimals' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const set = new Set();
      set.add(-int(r, 2, 15));
      while (set.size < 4) set.add(int(r, -18, 12));
      const list = shuffled(r, [...set]);
      const askSmallest = r() < 0.6;
      const target = askSmallest ? Math.min(...list) : Math.max(...list);
      const c = choiceItem(r, num(target), list.filter(x => x !== target).map(num), o => {
        const v = Number(o.replace('−', '-'));
        return askSmallest && v < 0 && Math.abs(v) < Math.abs(target)
          ? `${o} is closer to zero than ${num(target)}. On a number line, the number furthest left is the smallest.`
          : `${o} is not the ${askSmallest ? 'smallest' : 'largest'}. Picture the numbers on a number line: further left is smaller.`;
      });
      return make(this.id, level, seed, { prompt: `Which number is the ${askSmallest ? 'smallest' : 'largest'}?`, ...c,
        steps: [`Place the numbers on a number line: ${[...list].sort((a, b) => a - b).map(num).join(', ')} (left to right).`, `The ${askSmallest ? 'smallest is furthest left' : 'largest is furthest right'}: ${num(target)}.`] });
    }
    const base = int(r, 1, 6);
    const forms = shuffled(r, [base + 0.5, base + 0.05, base + 0.45, base + 0.4, base + 0.25, base + 0.3]).slice(0, 4).map(x => -Math.round(x * 100) / 100);
    const askLargest = r() < 0.5;
    const target = askLargest ? Math.max(...forms) : Math.min(...forms);
    const show = x => num(x);
    const c = choiceItem(r, show(target), forms.filter(x => x !== target).map(show), () =>
      `For negative numbers, the one closest to zero is the largest. Compare place by place: ${forms.map(show).join(', ')}.`);
    return make(this.id, level, seed, { prompt: `Which number is the ${askLargest ? 'largest' : 'smallest'}?`, ...c,
      steps: [`All four are between ${num(-(base + 1))} and ${num(-base)}. Compare the tenths, then the hundredths.`, `In order from smallest to largest: ${[...forms].sort((a, b) => a - b).map(show).join(', ')}.`, `The ${askLargest ? 'largest (closest to zero)' : 'smallest (furthest from zero)'} is ${show(target)}.`] });
  },
};

function signedSum(terms) {
  // terms: [{op:'+'|'−', v}] with the first op ignored; returns {expr, rewritten, steps, value}
  const expr = terms.map((x, i) => (i === 0 ? num(x.v) : `${x.op} ${t(x.v)}`)).join(' ');
  const simple = terms.map((x, i) => {
    const s = i === 0 ? 1 : x.op === '+' ? 1 : -1;
    return s * x.v;
  });
  const rewritten = simple.map((v, i) => (i === 0 ? num(v) : v < 0 ? `− ${-v}` : `+ ${v}`)).join(' ');
  const value = simple.reduce((a, b) => a + b, 0);
  return { expr, rewritten, value, simple };
}

const addsub = {
  id: 'maths.number.negatives.add-subtract',
  name: 'Add and subtract negative numbers',
  levels: [{ label: 'Crossing zero' }, { label: 'Two signs together' }, { label: 'Three terms and contexts' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 1, 15), b = int(r, 2, 18);
      const form = pick(r, ['a-b', '-a+b', '-a-b']);
      const terms = form === 'a-b' ? [{ v: a }, { op: '−', v: Math.max(b, a + 2) }] : form === '-a+b' ? [{ v: -a }, { op: '+', v: b }] : [{ v: -a }, { op: '−', v: b }];
      const s = signedSum(terms);
      return make(this.id, level, seed, { prompt: `Work out ${s.expr}`, answer: intAns(s.value),
        steps: [`Start at ${num(terms[0].v)} on the number line.`, `${terms[1].op === '+' ? 'Adding' : 'Subtracting'} ${terms[1].v} moves ${terms[1].v} to the ${terms[1].op === '+' ? 'right' : 'left'}.`, `${s.expr} = ${num(s.value)}`],
        traps: [{ v: -s.value, why: 'The size is right but the sign is wrong. Check which side of zero you finish on.' }, { v: Math.abs(terms[0].v) + terms[1].v * (terms[1].op === '+' ? 1 : -1), why: `It looks like the negative sign on ${num(terms[0].v)} was dropped. Start at ${num(terms[0].v)}, not ${Math.abs(terms[0].v)}.` }] });
    }
    if (level === 2) {
      const a = int(r, 1, 14) * (r() < 0.5 ? -1 : 1), b = int(r, 2, 12);
      const form = pick(r, ['minusneg', 'minusneg', 'plusneg']);
      const terms = [{ v: a }, { op: form === 'plusneg' ? '+' : '−', v: -b }];
      const s = signedSum(terms);
      return make(this.id, level, seed, { prompt: `Work out ${s.expr}`, answer: intAns(s.value),
        steps: [form === 'minusneg' ? `Subtracting a negative is the same as adding: ${s.expr} = ${s.rewritten}.` : `Adding a negative is the same as subtracting: ${s.expr} = ${s.rewritten}.`, `${s.rewritten} = ${num(s.value)}`],
        traps: [{ v: form === 'minusneg' ? a - b : a + b, why: form === 'minusneg' ? `${num(a)} − (−${b}) is not ${num(a)} − ${b}. Taking away a negative moves you right: it is the same as adding ${b}.` : `Adding (−${b}) moves left on the number line: it is the same as subtracting ${b}.` }, { v: -s.value, why: 'The size is right but the sign is wrong. Check which side of zero you finish on.' }] });
    }
    if (r() < 0.35) {
      const lo = -int(r, 3, 15), hi = int(r, 2, 14);
      const ctx = pick(r, ['temperature', 'height']);
      const prompt = ctx === 'temperature'
        ? `At midnight the temperature was ${num(lo)}°C. At noon it was ${hi}°C. By how many degrees did the temperature rise?`
        : `A diver is at ${num(lo)} m (below sea level). A bird is ${hi} m above sea level. How far above the diver is the bird, in metres?`;
      return make(this.id, level, seed, { prompt, answer: intAns(hi - lo),
        steps: [`Difference = higher − lower = ${hi} − (${num(lo)})`, `Subtracting a negative is adding: ${hi} + ${-lo} = ${hi - lo}`],
        traps: [{ v: hi + lo, why: `That finds ${hi} − ${-lo}. From ${num(lo)} up to 0 is ${-lo}, then 0 up to ${hi} is ${hi} more.` }] });
    }
    const terms = [{ v: int(r, -12, 12) || -4 }];
    for (let i = 0; i < 2; i++) terms.push({ op: pick(r, ['+', '−']), v: intExcept(r, -11, 11, [0]) });
    const s = signedSum(terms);
    return make(this.id, level, seed, { prompt: `Work out ${s.expr}`, answer: intAns(s.value),
      steps: [`Rewrite any double signs: ${s.expr} = ${s.rewritten}`, `Work left to right: ${num(s.simple[0])} ${s.simple[1] < 0 ? '−' : '+'} ${Math.abs(s.simple[1])} = ${num(s.simple[0] + s.simple[1])}`, `${num(s.simple[0] + s.simple[1])} ${s.simple[2] < 0 ? '−' : '+'} ${Math.abs(s.simple[2])} = ${num(s.value)}`],
      traps: [{ v: -s.value, why: 'The size is right but the sign is wrong. Check each step on a number line.' }, { v: terms.reduce((a, x, i) => a + (i === 0 ? x.v : x.op === '+' ? x.v : -Math.abs(x.v)), 0), why: 'Check any "− (−n)": subtracting a negative is the same as adding.' }] });
  },
};

const muldiv = {
  id: 'maths.number.negatives.multiply-divide',
  name: 'Multiply and divide with negative numbers',
  levels: [{ label: 'One negative' }, { label: 'Two negatives and division' }, { label: 'Three numbers and powers' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const signRule = (count, v) => `There ${count === 1 ? 'is 1 negative' : `are ${count} negatives`}: ${count % 2 ? 'an odd number, so the answer is negative' : 'an even number, so the answer is positive'}. So the answer is ${num(v)}.`;
    if (level === 1) {
      const a = int(r, 2, 12), b = int(r, 2, 12);
      const negFirst = r() < 0.5;
      const expr = negFirst ? `${num(-a)} × ${b}` : `${a} × ${t(-b)}`;
      return make(this.id, level, seed, { prompt: `Work out ${expr}`, answer: intAns(-a * b),
        steps: [`Ignore the signs first: ${a} × ${b} = ${a * b}.`, signRule(1, -a * b)],
        traps: [{ v: a * b, why: 'One negative times one positive gives a negative answer.' }] });
    }
    if (level === 2) {
      const a = int(r, 2, 12), b = int(r, 2, 12);
      const form = pick(r, ['nn', 'd1', 'd2', 'd3']);
      const p = a * b;
      const spec = { nn: [`${num(-a)} × ${t(-b)}`, a * b, 2, `${a} × ${b} = ${p}`], d1: [`${num(-p)} ÷ ${b}`, -a, 1, `${p} ÷ ${b} = ${a}`], d2: [`${p} ÷ ${t(-b)}`, -a, 1, `${p} ÷ ${b} = ${a}`], d3: [`${num(-p)} ÷ ${t(-b)}`, a, 2, `${p} ÷ ${b} = ${a}`] }[form];
      return make(this.id, level, seed, { prompt: `Work out ${spec[0]}`, answer: intAns(spec[1]),
        steps: [`Ignore the signs first: ${spec[3]}.`, signRule(spec[2], spec[1])],
        traps: [{ v: -spec[1], why: spec[2] === 2 ? 'Two negatives give a positive answer, for division as well as multiplication.' : 'Exactly one negative gives a negative answer.' }] });
    }
    const form = pick(r, ['three', 'three', 'square', 'cube', 'mixdiv']);
    if (form === 'square' || form === 'cube') {
      const a = int(r, 2, form === 'cube' ? 5 : 9), k = form === 'square' ? 2 : 3, v = (-a) ** k;
      return make(this.id, level, seed, { prompt: `Work out (${num(-a)})^${k}`, answer: intAns(v),
        steps: [`(${num(-a)})^${k} means ${Array(k).fill(`(${num(-a)})`).join(' × ')}.`, `${a}^${k} = ${a ** k}`, signRule(k, v)],
        traps: [{ v: -v, why: `Count the negatives: ${k} of them. ${k % 2 ? 'Odd' : 'Even'} means ${k % 2 ? 'negative' : 'positive'}.` }, { v: -a * k, why: `A power means repeated multiplication, not ${num(-a)} × ${k}.` }] });
    }
    if (form === 'mixdiv') {
      const a = int(r, 2, 9), b = int(r, 2, 6), c = int(r, 2, 6);
      const ns = [r() < 0.5, true, r() < 0.5];
      const A = a * b * (ns[0] ? -1 : 1), B = b * (ns[1] ? -1 : 1), C = c * (ns[2] ? -1 : 1);
      const v = (A / B) * C, count = ns.filter(Boolean).length;
      return make(this.id, level, seed, { prompt: `Work out ${num(A)} ÷ ${t(B)} × ${t(C)}`, answer: intAns(v),
        steps: [`Divide and multiply left to right, ignoring signs: ${a * b} ÷ ${b} = ${a}, then ${a} × ${c} = ${a * c}.`, signRule(count, v)],
        traps: [{ v: -v, why: 'Count all the negatives in the calculation: odd means negative, even means positive.' }] });
    }
    const vals = [int(r, 2, 9), int(r, 2, 9), int(r, 2, 6)].map(v => (r() < 0.55 ? -v : v));
    if (vals.every(v => v > 0)) vals[1] = -vals[1];
    const v = vals[0] * vals[1] * vals[2], count = vals.filter(x => x < 0).length;
    return make(this.id, level, seed, { prompt: `Work out ${num(vals[0])} × ${t(vals[1])} × ${t(vals[2])}`, answer: intAns(v),
      steps: [`Ignore the signs first: ${vals.map(Math.abs).join(' × ')} = ${Math.abs(v)}.`, signRule(count, v)],
      traps: [{ v: -v, why: 'Count every negative sign: odd means negative, even means positive.' }] });
  },
};

/* ───────────────────────── Order of operations and inverses (N3) ───────────────────────── */

const evaluate = {
  id: 'maths.number.order.evaluate',
  name: 'Use the order of operations',
  levels: [{ label: '× and ÷ before + and −' }, { label: 'Brackets, powers and roots' }, { label: 'Left to right and combined' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const T = [];
    if (level === 1) {
      T.push(() => { const a = int(r, 2, 20), b = int(r, 2, 9), c = int(r, 2, 9); return [`${a} + ${b} × ${c}`, a + b * c, [`Multiply first: ${b} × ${c} = ${b * c}`, `${a} + ${b * c} = ${a + b * c}`], [{ v: (a + b) * c, why: `Multiplication comes before addition. You worked out ${a} + ${b} first.` }]]; });
      T.push(() => { const b = int(r, 2, 9), c = int(r, 2, 9), a = b * c + int(r, 1, 20); return [`${a} − ${b} × ${c}`, a - b * c, [`Multiply first: ${b} × ${c} = ${b * c}`, `${a} − ${b * c} = ${a - b * c}`], [{ v: (a - b) * c, why: `Multiplication comes before subtraction. You worked out ${a} − ${b} first.` }]]; });
      T.push(() => { const c = int(r, 2, 9), q = int(r, 2, 9), b = c * q, a = int(r, 2, 30); return [`${a} + ${b} ÷ ${c}`, a + q, [`Divide first: ${b} ÷ ${c} = ${q}`, `${a} + ${q} = ${a + q}`], (a + b) % c === 0 ? [{ v: (a + b) / c, why: `Division comes before addition. You worked out ${a} + ${b} first.` }] : []]; });
      T.push(() => { const a = int(r, 2, 9), b = int(r, 2, 9), c = int(r, 2, 9), d = int(r, 2, 9); return [`${a} × ${b} + ${c} × ${d}`, a * b + c * d, [`Do both multiplications: ${a} × ${b} = ${a * b} and ${c} × ${d} = ${c * d}`, `${a * b} + ${c * d} = ${a * b + c * d}`], [{ v: (a * b + c) * d, why: 'Both multiplications come before the addition. Working strictly left to right gives the wrong answer.' }]]; });
    } else if (level === 2) {
      T.push(() => { const a = int(r, 2, 12), b = int(r, 2, 12), c = int(r, 2, 9); return [`(${a} + ${b}) × ${c}`, (a + b) * c, [`Brackets first: ${a} + ${b} = ${a + b}`, `${a + b} × ${c} = ${(a + b) * c}`], [{ v: a + b * c, why: 'Brackets are worked out first, before the multiplication.' }]]; });
      T.push(() => { const a = int(r, 2, 20), b = int(r, 2, 9); return [`${a} + ${b}^2`, a + b * b, [`Powers first: ${b}^2 = ${b * b}`, `${a} + ${b * b} = ${a + b * b}`], [{ v: (a + b) ** 2, why: `Only ${b} is squared, not ${a} + ${b}.` }, { v: a + 2 * b, why: `${b}^2 means ${b} × ${b}, not ${b} × 2.` }]]; });
      T.push(() => { const a = int(r, 2, 6), c = int(r, 1, 5), b = c + int(r, 1, 4); return [`${a} × (${b} − ${c})^2`, a * (b - c) ** 2, [`Brackets first: ${b} − ${c} = ${b - c}`, `Then the power: ${b - c}^2 = ${(b - c) ** 2}`, `${a} × ${(b - c) ** 2} = ${a * (b - c) ** 2}`], [{ v: (a * (b - c)) ** 2, why: `Only the bracket is squared. Square ${b - c} first, then multiply by ${a}.` }]]; });
      T.push(() => { const s = int(r, 2, 10), b = int(r, 2, 6), c = int(r, 2, 9); return [`√${s * s} × ${b} + ${c}`, s * b + c, [`Roots first: √${s * s} = ${s}`, `Then multiply: ${s} × ${b} = ${s * b}`, `${s * b} + ${c} = ${s * b + c}`], [{ v: s * (b + c), why: 'After the root, multiply before you add.' }]]; });
    } else {
      T.push(() => { const b = int(r, 2, 6), c = int(r, 2, 6), q = int(r, 2, 8), a = b * q; return [`${a} ÷ ${b} × ${c}`, q * c, [`Division and multiplication have equal priority: work left to right.`, `${a} ÷ ${b} = ${q}`, `${q} × ${c} = ${q * c}`], a % (b * c) === 0 ? [{ v: a / (b * c), why: '÷ and × have equal priority, so work left to right. Multiplying first changes the answer.' }] : []]; });
      T.push(() => { const a = int(r, 15, 40), b = int(r, 2, 9), c = int(r, 2, 9); return [`${a} − ${b} + ${c}`, a - b + c, ['+ and − have equal priority: work left to right.', `${a} − ${b} = ${a - b}`, `${a - b} + ${c} = ${a - b + c}`], [{ v: a - (b + c), why: '+ and − have equal priority, so work left to right. Adding first changes the answer.' }]]; });
      T.push(() => { const d = int(r, 1, 6), k = int(r, 2, 5), c = d + k, b = int(r, 2, 6); const top = k * int(r, 3, 12); const a = top - b * b; if (a < 1) return null; return [`(${a} + ${b}^2) ÷ (${c} − ${d})`, top / k, [`Inside the first bracket, power first: ${b}^2 = ${b * b}, so ${a} + ${b * b} = ${top}`, `Second bracket: ${c} − ${d} = ${k}`, `${top} ÷ ${k} = ${top / k}`], []]; });
      T.push(() => { const c = int(r, 1, 5), b = c + int(r, 1, 5), d = int(r, 2, 6), a = int(r, 20, 60); return [`${a} − (${b} − ${c}) × ${d}`, a - (b - c) * d, [`Brackets first: ${b} − ${c} = ${b - c}`, `Multiply: ${b - c} × ${d} = ${(b - c) * d}`, `${a} − ${(b - c) * d} = ${a - (b - c) * d}`], [{ v: (a - (b - c)) * d, why: 'After the bracket, multiply before you subtract.' }]]; });
    }
    let made = null;
    while (!made) made = pick(r, T)();
    const [expr, value, steps, traps] = made;
    return make(this.id, level, seed, { prompt: `Work out ${expr}`, answer: intAns(value), steps, traps });
  },
};

function bracketings(n, ops) {
  // n: 4 numbers, ops: 3 ops among + − × ÷. Returns [{text, value}] with exact integer values.
  const ap = (a, o, b) => (o === '+' ? a + b : o === '−' ? a - b : o === '×' ? a * b : b !== 0 && a % b === 0 ? a / b : NaN);
  const pri = o => (o === '×' || o === '÷' ? 2 : 1);
  const evalFlat = (ns, os) => {
    ns = [...ns]; os = [...os];
    for (const lvl of [2, 1]) for (let i = 0; i < os.length;) if (pri(os[i]) === lvl) { ns.splice(i, 2, ap(ns[i], os[i], ns[i + 1])); os.splice(i, 1); } else i++;
    return ns[0];
  };
  const [a, b, c, d] = n, [o1, o2, o3] = ops;
  const out = [
    { text: `(${a} ${o1} ${b}) ${o2} ${c} ${o3} ${d}`, value: evalFlat([ap(a, o1, b), c, d], [o2, o3]) },
    { text: `${a} ${o1} (${b} ${o2} ${c}) ${o3} ${d}`, value: evalFlat([a, ap(b, o2, c), d], [o1, o3]) },
    { text: `${a} ${o1} ${b} ${o2} (${c} ${o3} ${d})`, value: evalFlat([a, b, ap(c, o3, d)], [o1, o2]) },
    { text: `(${a} ${o1} ${b} ${o2} ${c}) ${o3} ${d}`, value: evalFlat([evalFlat([a, b, c], [o1, o2]), d], [o3]) },
    { text: `${a} ${o1} (${b} ${o2} ${c} ${o3} ${d})`, value: evalFlat([a, evalFlat([b, c, d], [o2, o3])], [o1]) },
  ];
  return { flat: evalFlat(n, ops), options: out.filter(x => Number.isInteger(x.value)) };
}

const brackets = {
  id: 'maths.number.order.brackets',
  name: 'Place brackets to change a calculation',
  levels: [{ label: '+, − and ×' }, { label: 'Including ÷' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (let tries = 0; tries < 2000; tries++) {
      const opsPool = level === 1 ? ['+', '−', '×'] : ['+', '−', '×', '÷'];
      const n = [int(r, 2, 9), int(r, 2, 9), int(r, 2, 9), int(r, 2, 9)];
      const ops = [pick(r, opsPool), pick(r, opsPool), pick(r, opsPool)];
      if (!ops.includes('×') && !ops.includes('÷')) continue;
      if (level === 2 && !ops.includes('÷')) ops[int(r, 0, 2)] = '÷';
      ops.forEach((o, j) => { if (o === '÷') { n[j + 1] = int(r, 2, 6); n[j] = n[j + 1] * int(r, 2, 6); } });
      const { flat, options } = bracketings(n, ops);
      if (!Number.isInteger(flat)) continue;
      const byValue = new Map();
      for (const o of options) if (!byValue.has(o.value)) byValue.set(o.value, o);
      const distinct = [...byValue.values()].filter(o => o.value !== flat);
      if (distinct.length < 3) continue;
      const pickd = shuffled(r, distinct).slice(0, 4);
      const target = pickd[0];
      const expr = `${n[0]} ${ops[0]} ${n[1]} ${ops[1]} ${n[2]} ${ops[2]} ${n[3]}`;
      const c = choiceItem(r, target.text, pickd.slice(1).map(o => o.text), o => `${o} = ${num(pickd.find(x => x.text === o).value)}, not ${num(target.value)}.`);
      return make(this.id, level, seed, { prompt: `Without brackets, ${expr} = ${num(flat)}. Where do the brackets go to make the answer ${num(target.value)}?`, ...c,
        steps: [`Test each option: brackets are worked out first.`, `${target.text} = ${num(target.value)} ✓`, `Without brackets the usual order (× and ÷ before + and −) gives ${num(flat)}.`] });
    }
    throw new Error('brackets: no item');
  },
};

const OPS = {
  add: k => ({ text: `add ${k}`, f: x => x + k, inv: `subtract ${k}`, g: y => y - k, k }),
  sub: k => ({ text: `subtract ${k}`, f: x => x - k, inv: `add ${k}`, g: y => y + k, k }),
  mul: k => ({ text: `multiply by ${k}`, f: x => x * k, inv: `divide by ${k}`, g: y => y / k, k }),
  div: k => ({ text: `divide by ${k}`, f: x => x / k, inv: `multiply by ${k}`, g: y => y * k, k }),
};
const inverse = {
  id: 'maths.number.order.inverse',
  name: 'Use inverse operations',
  levels: [{ label: 'Two steps' }, { label: 'Three steps' }, { label: 'Negative values' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (let tries = 0; tries < 300; tries++) {
      const steps = level === 1 ? 2 : 3;
      const start = level === 3 ? int(r, -12, 12) || -5 : int(r, 2, 15);
      const chain = [];
      let x = start, ok = true;
      for (let i = 0; i < steps; i++) {
        const kind = pick(r, i === 0 ? ['mul', 'add', 'sub', 'mul'] : ['add', 'sub', 'mul', 'div']);
        const op = OPS[kind](kind === 'mul' || kind === 'div' ? int(r, 2, 6) : int(r, 2, 15));
        const y = op.f(x);
        if (!Number.isInteger(y) || Math.abs(y) > 200) { ok = false; break; }
        chain.push(op); x = y;
      }
      if (!ok || chain.every(o => o.text.startsWith('add') || o.text.startsWith('subtract'))) continue;
      if (level === 3 && x >= 0 && start >= 0) continue;
      const end = x;
      const back = [...chain].reverse();
      let y = end;
      const work = back.map(op => { const before = y; y = op.g(y); return `${op.inv[0].toUpperCase() + op.inv.slice(1)}: ${num(before)} → ${num(y)}`; });
      let fwd = end;
      for (const op of chain) fwd = op.f(fwd);
      let wrongOrder = end;
      for (const op of chain) wrongOrder = op.g(wrongOrder);
      return make(this.id, level, seed, {
        prompt: `I think of a number. I ${chain.map(o => o.text).join(', then ')}. My answer is ${num(end)}. What number did I think of?`,
        answer: intAns(start),
        steps: [`Work backwards from ${num(end)}, undoing each step in reverse order with the inverse operation.`, ...work, `Check: start at ${num(start)} and ${chain.map(o => o.text).join(', ')} → ${num(end)} ✓`],
        traps: [{ v: Number.isInteger(fwd) ? fwd : null, why: 'You applied the operations again instead of undoing them. Use the inverse of each step.' }, { v: Number.isInteger(wrongOrder) ? wrongOrder : null, why: 'You used the right inverse operations but in the wrong order. Undo the last step first.' }],
      });
    }
    throw new Error('inverse: no item');
  },
};

/* ───────────────────────── Fractions (N2, N8, N12) ───────────────────────── */

const simplify = {
  id: 'maths.number.fractions.simplify-convert',
  name: 'Simplify fractions and convert mixed numbers',
  levels: [{ label: 'Simplest form' }, { label: 'Improper to mixed' }, { label: 'Mixed to improper' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      let p, q; do { q = int(r, 3, 12); p = int(r, 1, q - 1); } while (gcd(p, q) !== 1);
      const k = int(r, 2, 9);
      const g = k;
      return make(this.id, level, seed, { prompt: `Write {${p * k}/${q * k}} in its simplest form.`, answer: fracAns(F(p, q)),
        steps: [`Find the highest common factor of ${p * k} and ${q * k}: it is ${g}.`, `Divide the numerator and denominator by ${g}: {${p * k}/${q * k}} = {${p}/${q}}.`, `${p} and ${q} have no common factor other than 1, so this is the simplest form.`] });
    }
    let w, n, d; do { d = int(r, 2, 12); n = int(r, 1, d - 1); w = int(r, 1, 7); } while (gcd(n, d) !== 1);
    const improper = w * d + n;
    if (level === 2) {
      return make(this.id, level, seed, { prompt: `Write {${improper}/${d}} as a mixed number.`, answer: fracAns(F(improper, d), 'mixed'),
        steps: [`How many whole ${d}s are in ${improper}? ${improper} ÷ ${d} = ${w} remainder ${n}.`, `${w} wholes and {${n}/${d}} left over: {${improper}/${d}} = {${w} ${n}/${d}}.`] });
    }
    return make(this.id, level, seed, { prompt: `Write {${w} ${n}/${d}} as an improper fraction.`, answer: fracAns(F(improper, d), 'improper'),
      steps: [`Each whole is {${d}/${d}}, so ${w} wholes = {${w * d}/${d}}.`, `{${w * d}/${d}} + {${n}/${d}} = {${improper}/${d}}.`],
      traps: [{ v: { n: w + n, d }, why: `Multiply the whole number by the denominator first: ${w} × ${d} = ${w * d}, then add ${n}.` }, { v: { n: w * n + d, d }, why: `Multiply the whole number by the denominator (${w} × ${d}), not by the numerator.` }] });
  },
};

const properFrac = (r, lo = 2, hi = 12) => { let n, d; do { d = int(r, lo, hi); n = int(r, 1, d - 1); } while (gcd(n, d) !== 1); return F(n, d); };

const fracAddSub = {
  id: 'maths.number.fractions.add-subtract',
  name: 'Add and subtract fractions and mixed numbers',
  levels: [{ label: 'Same denominator' }, { label: 'Different denominators' }, { label: 'Mixed and negative' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const d = int(r, 4, 15);
      const op = r() < 0.5 ? '+' : '−';
      let a = int(r, op === '−' ? 2 : 1, d - 1), b = int(r, 1, op === '−' ? a - 1 : d - 1);
      const v = op === '+' ? F(a + b, d) : F(a - b, d);
      const raw = op === '+' ? a + b : a - b;
      return make(this.id, level, seed, { prompt: `Work out {${a}/${d}} ${op} {${b}/${d}}. Give your answer in its simplest form.`, answer: fracAns(v),
        steps: [`The denominators are the same, so ${op === '+' ? 'add' : 'subtract'} the numerators: ${a} ${op} ${b} = ${raw}.`, `{${a}/${d}} ${op} {${b}/${d}} = {${raw}/${d}}`, eq(v, F(raw * 1, d)) && gcd(raw, d) === 1 && raw < d ? `{${raw}/${d}} is already in its simplest form.` : `Simplify: {${raw}/${d}} = ${fm(v, true)}.`],
        traps: [{ v: op === '+' ? { n: a + b, d: 2 * d } : null, why: 'Do not add the denominators. The pieces stay the same size; you are counting how many pieces there are.' }] });
    }
    const a = properFrac(r);
    let b = properFrac(r);
    while (b.d === a.d) b = properFrac(r);
    if (level === 2) {
      let [x, y] = [a, b];
      const op = r() < 0.5 ? '+' : '−';
      if (op === '−' && x.n * y.d < y.n * x.d) [x, y] = [y, x];
      if (op === '−' && eq(x, y)) return this.gen(level, seed + 'x');
      const L = lcm(x.d, y.d);
      const xn = x.n * (L / x.d), yn = y.n * (L / y.d);
      const v = op === '+' ? add(x, y) : sub(x, y);
      return make(this.id, level, seed, { prompt: `Work out ${fm(x)} ${op} ${fm(y)}. Give your answer in its simplest form.`, answer: fracAns(v),
        steps: [`Find a common denominator: the lowest common multiple of ${x.d} and ${y.d} is ${L}.`, `Convert: ${fm(x)} = {${xn}/${L}} and ${fm(y)} = {${yn}/${L}}.`, `{${xn}/${L}} ${op} {${yn}/${L}} = {${op === '+' ? xn + yn : xn - yn}/${L}}`, `Simplest form: ${fm(v, true)}`],
        traps: [{ v: op === '+' ? (x.d + y.d ? { n: x.n + y.n, d: x.d + y.d } : null) : (x.d !== y.d && x.n - y.n > 0 && x.d - y.d !== 0 ? { n: x.n - y.n, d: Math.abs(x.d - y.d) } : null), why: `You ${op === '+' ? 'added' : 'subtracted'} the numerators and the denominators. Change both fractions to the same denominator first.` }, { v: { n: op === '+' ? x.n + y.n : x.n - y.n, d: x.d * y.d }, why: 'The denominator is right but the numerators were not converted. Multiply each numerator by the same number as its denominator.' }] });
    }
    if (r() < 0.3) {
      // negative result: smaller − larger
      let x = a, y = b;
      if (eq(x, y)) return this.gen(level, seed + 'y');
      if (x.n * y.d > y.n * x.d) [x, y] = [y, x];
      const v = sub(x, y), L = lcm(x.d, y.d);
      return make(this.id, level, seed, { prompt: `Work out ${fm(x)} − ${fm(y)}. Give your answer in its simplest form.`, answer: fracAns(v),
        steps: [`Common denominator ${L}: ${fm(x)} = {${x.n * (L / x.d)}/${L}} and ${fm(y)} = {${y.n * (L / y.d)}/${L}}.`, `${x.n * (L / x.d)} − ${y.n * (L / y.d)} = ${num(x.n * (L / x.d) - y.n * (L / y.d))}, so the answer is ${fm(v)}.`, `The answer is negative because ${fm(y)} is bigger than ${fm(x)}.`],
        traps: [{ v: { n: -v.n, d: v.d }, why: `${fm(y)} is larger than ${fm(x)}, so taking it away gives a negative answer.` }] });
    }
    const w1 = int(r, 2, 6), w2 = int(r, 1, w1 - 1);
    const x = add(F(w1), a), y = add(F(w2), b);
    const op = r() < 0.55 ? '−' : '+';
    const v = op === '+' ? add(x, y) : sub(x, y);
    const trapSplit = op === '−' && a.n * b.d < b.n * a.d ? add(F(w1 - w2), sub(b, a)) : null;
    return make(this.id, level, seed, { prompt: `Work out ${fm(x, true)} ${op} ${fm(y, true)}. Give your answer as a mixed number in its simplest form.`, answer: fracAns(v, 'mixed'),
      steps: [`Convert to improper fractions: ${fm(x, true)} = ${fm(x)} and ${fm(y, true)} = ${fm(y)}.`, `Common denominator ${lcm(x.d, y.d)}: ${fm(x)} ${op} ${fm(y)} = {${(op === '+' ? x.n * (lcm(x.d, y.d) / x.d) + y.n * (lcm(x.d, y.d) / y.d) : x.n * (lcm(x.d, y.d) / x.d) - y.n * (lcm(x.d, y.d) / y.d))}/${lcm(x.d, y.d)}}.`, `As a mixed number in simplest form: ${fm(v, true)}`],
      traps: [{ v: trapSplit, why: `Taking ${fm(b)} from ${fm(a)} needs borrowing: ${fm(a)} is smaller. Converting both to improper fractions avoids this trap.` }] });
  },
};

const fracMulDiv = {
  id: 'maths.number.fractions.multiply-divide',
  name: 'Multiply and divide fractions and mixed numbers',
  levels: [{ label: 'Multiply' }, { label: 'Divide and integers' }, { label: 'Mixed numbers' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const a = properFrac(r, 2, 10), b = properFrac(r, 2, 10);
    if (level === 1) {
      const v = mul(a, b);
      return make(this.id, level, seed, { prompt: `Work out ${fm(a)} × ${fm(b)}. Give your answer in its simplest form.`, answer: fracAns(v),
        steps: [`Multiply the numerators and multiply the denominators: {${a.n} × ${b.n}/${a.d} × ${b.d}} = {${a.n * b.n}/${a.d * b.d}}.`, `Simplest form: ${fm(v)}`],
        traps: [{ v: { n: a.n * b.d, d: a.d * b.n }, why: 'That is division (flip and multiply). For multiplication, multiply straight across.' }] });
    }
    if (level === 2) {
      const form = pick(r, ['ff', 'ff', 'if', 'fi']);
      if (form === 'ff') {
        const v = div(a, b);
        return make(this.id, level, seed, { prompt: `Work out ${fm(a)} ÷ ${fm(b)}. Give your answer in its simplest form.`, answer: fracAns(v),
          steps: [`Dividing by ${fm(b)} is the same as multiplying by its reciprocal ${fm(F(b.d, b.n))}.`, `${fm(a)} × {${b.d}/${b.n}} = {${a.n * b.d}/${a.d * b.n}}`, `Simplest form: ${fm(v, true)}`],
          traps: [{ v: mul(a, b), why: 'You multiplied without flipping. To divide, multiply by the reciprocal of the second fraction.' }, { v: mul(F(a.d, a.n), b), why: 'You flipped the first fraction. Flip only the one you are dividing by (the second).' }] });
      }
      const k = int(r, 2, 9);
      if (form === 'if') {
        const v = mul(F(k), b);
        return make(this.id, level, seed, { prompt: `Work out ${k} × ${fm(b)}. Give your answer in its simplest form.`, answer: fracAns(v, 'simplest'),
          steps: [`Write ${k} as {${k}/1}: {${k}/1} × ${fm(b)} = {${k * b.n}/${b.d}}.`, `Simplest form: ${fm(v, true)}`],
          traps: [{ v: { n: k * b.n, d: k * b.d }, why: `Multiplying top and bottom by ${k} gives an equivalent fraction, not ${k} times as much. Only the numerator is multiplied.` }] });
      }
      const v = div(a, F(k));
      return make(this.id, level, seed, { prompt: `Work out ${fm(a)} ÷ ${k}. Give your answer in its simplest form.`, answer: fracAns(v),
        steps: [`Dividing by ${k} is multiplying by {1/${k}}.`, `${fm(a)} × {1/${k}} = {${a.n}/${a.d * k}}`, `Simplest form: ${fm(v)}`],
        traps: [{ v: mul(a, F(k)), why: `That multiplies by ${k}. Dividing by ${k} makes the answer smaller.` }] });
    }
    const x = add(F(int(r, 1, 3)), a), y = add(F(int(r, 1, 3)), b);
    const op = r() < 0.5 ? '×' : '÷';
    const v = op === '×' ? mul(x, y) : div(x, y);
    const px = mixedParts(x), py = mixedParts(y);
    return make(this.id, level, seed, { prompt: `Work out ${fm(x, true)} ${op} ${fm(y, true)}. Give your answer as a mixed number in its simplest form${op === '÷' && Math.abs(v.n) < v.d ? ' (or as a fraction if it is less than 1)' : ''}.`, answer: fracAns(v, 'mixed'),
      steps: [`Convert to improper fractions first: ${fm(x, true)} = ${fm(x)}, ${fm(y, true)} = ${fm(y)}.`, op === '×' ? `${fm(x)} × ${fm(y)} = {${x.n * y.n}/${x.d * y.d}}` : `${fm(x)} ÷ ${fm(y)} = ${fm(x)} × {${y.d}/${y.n}} = {${x.n * y.d}/${x.d * y.n}}`, `Simplest form: ${fm(v, true)}`],
      traps: [{ v: op === '×' ? add(F(px.whole * py.whole), mul(F(px.n, px.d), F(py.n, py.d))) : null, why: 'You cannot multiply the whole numbers and the fractions separately. Convert to improper fractions first.' }, { v: op === '÷' ? mul(x, y) : null, why: 'You multiplied without flipping the second fraction.' }] });
  },
};

const ofAmount = {
  id: 'maths.number.fractions.of-amount',
  name: 'Fractions of amounts and reverse fractions',
  levels: [{ label: 'Fraction of an amount' }, { label: 'Find the whole' }, { label: 'Fraction of a fraction' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const f = properFrac(r, 3, 9);
    if (level === 1) {
      const unit = int(r, 2, 15), amount = unit * f.d;
      const ctx = pick(r, [['', ''], ['£', ''], ['', ' kg'], ['', ' cm']]);
      return make(this.id, level, seed, { prompt: `Find ${fm(f)} of ${ctx[0]}${amount}${ctx[1]}.`, answer: intAns(unit * f.n),
        steps: [`Find {1/${f.d}} first: ${amount} ÷ ${f.d} = ${unit}.`, `${f.n} lots of that: ${unit} × ${f.n} = ${ctx[0]}${unit * f.n}${ctx[1]}.`],
        traps: [{ v: unit, why: `${unit} is {1/${f.d}} of ${amount}. You need ${f.n} of those parts.` }, { v: amount - unit * f.n, why: `That is the part left over (${fm(sub(F(1), f))}), not ${fm(f)}.` }] });
    }
    if (level === 2) {
      const unit = int(r, 2, 12), part = unit * f.n, whole = unit * f.d;
      const ctx = pick(r, [`${fm(f)} of a number is ${part}. What is the number?`, `${fm(f)} of the students in a year group walk to school. ${part} students walk. How many students are in the year group?`, `Jo has spent ${fm(f)} of her savings. She spent £${part}. How much were her savings at the start, in pounds?`]);
      return make(this.id, level, seed, { prompt: ctx, answer: intAns(whole),
        steps: [`${f.n} parts = ${part}, so 1 part = ${part} ÷ ${f.n} = ${unit}.`, `The whole is ${f.d} parts: ${unit} × ${f.d} = ${whole}.`],
        traps: [{ v: Number.isInteger(part * f.n / f.d) ? part * f.n / f.d : null, why: `That finds ${fm(f)} of ${part}. Here ${part} is the part; you need the whole.` }, { v: unit, why: `${unit} is one part. The whole is ${f.d} parts.` }] });
    }
    if (r() < 0.5) {
      const g = properFrac(r, 2, 6);
      const groups = pick(r, [['students in a class', 'are boys', 'of the boys wear glasses', 'boys who wear glasses', 'boys'], ['cars in a car park', 'are red', 'of the red cars are electric', 'red electric cars', 'red cars'], ['books on a shelf', 'are fiction', 'of the fiction books are hardback', 'fiction hardbacks', 'fiction books']]);
      const v = mul(f, g);
      return make(this.id, level, seed, { prompt: `${fm(f)} of the ${groups[0]} ${groups[1]}. ${fm(g)} ${groups[2]}. What fraction of all the ${groups[0]} are ${groups[3]}?`, answer: fracAns(v),
        steps: [`"${fm(g)} of ${fm(f)}" means ${fm(g)} × ${fm(f)}.`, `${fm(g)} × ${fm(f)} = {${g.n * f.n}/${g.d * f.d}} = ${fm(v)}`],
        traps: [{ v: add(f, g), why: '"Of" means multiply. Adding the fractions does not find a fraction of a fraction.' }, { v: g, why: `${fm(g)} is a fraction of the ${groups[4]} only, not of all the ${groups[0]}.` }] });
    }
    const whole = add(F(int(r, 1, 3)), properFrac(r, 2, 6));
    const v = mul(f, whole);
    return make(this.id, level, seed, { prompt: `A bag holds ${fm(whole, true)} kg of flour. A recipe uses ${fm(f)} of the bag. How many kilograms of flour does the recipe use? Give your answer in its simplest form.`, answer: fracAns(v, 'simplest'),
      steps: [`${fm(f)} of ${fm(whole, true)} means ${fm(f)} × ${fm(whole, true)}.`, `Convert: ${fm(whole, true)} = ${fm(whole)}.`, `${fm(f)} × ${fm(whole)} = {${f.n * whole.n}/${f.d * whole.d}} = ${fm(v, true)} kg`],
      traps: [{ v: sub(whole, v), why: 'That is the flour left in the bag, not the amount used.' }] });
  },
};

/* ───────────────────────── Primes, factors and multiples (N4) ───────────────────────── */

const identify = {
  id: 'maths.number.primes.identify',
  name: 'Primes, factors and multiples',
  levels: [{ label: 'Spot the prime' }, { label: 'Traps and vocabulary' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const whyNot = o => {
      const v = Number(o);
      if (v === 1) return '1 is not prime: a prime has exactly two factors, and 1 has only one.';
      const f = Object.keys(primeFactors(v)).map(Number);
      const d = f[0];
      return `${v} is not prime: ${v} = ${d} × ${v / d}.`;
    };
    if (level === 1 || r() < 0.5) {
      const lo = level === 1 ? 2 : 31, hi = level === 1 ? 30 : 99;
      const primes = []; for (let i = lo; i <= hi; i++) if (isPrime(i)) primes.push(i);
      const traps = level === 1 ? [1, 9, 15, 21, 25, 27, 4, 6, 8, 10, 12, 14, 18, 20, 22] : [33, 39, 49, 51, 57, 63, 69, 77, 81, 87, 91, 93];
      const p = pick(r, primes);
      const wrong = shuffled(r, traps).slice(0, 3).map(String);
      const c = choiceItem(r, String(p), wrong, whyNot);
      return make(this.id, level, seed, { prompt: 'Which of these numbers is prime?', ...c,
        steps: ['A prime number has exactly two factors: 1 and itself.', ...wrong.map(w => whyNot(w)), `${p} has no factors other than 1 and ${p}, so it is prime.`] });
    }
    const n = pick(r, [24, 30, 36, 40, 48, 60, 72]);
    const m = pick(r, [2, 3, 4, 5, 6].filter(x => n % x === 0));
    const right = shuffled(r, [...Array(n).keys()].map(x => x + 1).filter(x => n % x === 0 && x % m === 0 && x !== m && x !== n))[0] ?? n;
    const pool = [n * 2, ...[...Array(n).keys()].map(x => x + 1).filter(x => n % x === 0 && x % m !== 0), ...[...Array(n).keys()].map(x => x + 1).filter(x => n % x !== 0 && x % m === 0 && x > m)];
    const wrong = shuffled(r, [...new Set(pool)].filter(x => x !== right)).slice(0, 3).map(String);
    const c = choiceItem(r, String(right), wrong, o => {
      const v = Number(o);
      return n % v !== 0 ? `${v} is not a factor of ${n}: ${n} ÷ ${v} is not a whole number.` : `${v} is not a multiple of ${m}: it is not in the ${m} times table.`;
    });
    return make(this.id, level, seed, { prompt: `Which number is a factor of ${n} and also a multiple of ${m}?`, ...c,
      steps: [`A factor of ${n} divides into ${n} exactly. A multiple of ${m} is in the ${m} times table.`, `${right}: ${n} ÷ ${right} = ${n / right} ✓ and ${right} = ${m} × ${right / m} ✓`] });
  },
};

function composite(r, primes, minCount, maxValue) {
  for (let i = 0; i < 400; i++) {
    const count = int(r, minCount, minCount + 2);
    const f = {};
    let v = 1;
    for (let j = 0; j < count; j++) { const p = pick(r, primes); f[p] = (f[p] || 0) + 1; v *= p; }
    if (v <= maxValue && v > 10 && Object.keys(f).length >= 2) return { v, f };
  }
  return { v: 60, f: { 2: 2, 3: 1, 5: 1 } };
}

const factorise = {
  id: 'maths.number.primes.factorise',
  name: 'Write a number as a product of prime factors',
  levels: [{ label: 'Up to 100' }, { label: 'Up to 400, index form' }, { label: 'Larger numbers' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const { v, f } = level === 1 ? composite(r, [2, 2, 3, 5], 3, 100) : level === 2 ? composite(r, [2, 2, 3, 3, 5, 7], 4, 400) : composite(r, [2, 3, 5, 7, 11], 5, 3000);
    const chain = [];
    let rest = v;
    for (const p of Object.keys(f).map(Number).sort((a, b) => a - b)) for (let i = 0; i < f[p]; i++) { chain.push(`${rest} ÷ ${p} = ${rest / p}`); rest /= p; }
    return make(this.id, level, seed, { prompt: `Write ${v} as a product of its prime factors.${level > 1 ? ' Give your answer in index form.' : ''}`, answer: { kind: 'primes', value: f },
      steps: [`Divide by the smallest prime that goes in, and repeat: ${chain.join(', ')}.`, `So ${v} = ${Object.keys(f).map(Number).sort((a, b) => a - b).flatMap(p => Array(f[p]).fill(p)).join(' × ')}`, `In index form: ${v} = ${primesMarkup(f)}`],
      note: 'Type × as x or *, and powers with ^ (for example 2^3 x 5).' });
  },
};

function pairWithCommon(r, maxG, maxM) {
  for (let i = 0; i < 400; i++) {
    const g = int(r, 2, maxG), m = int(r, 2, maxM), n = int(r, 2, maxM);
    if (m !== n && gcd(m, n) === 1) return [g * m, g * n];
  }
  return [12, 18];
}

const hcfLcm = {
  id: 'maths.number.primes.hcf-lcm',
  name: 'Highest common factor and lowest common multiple',
  levels: [{ label: 'Small numbers' }, { label: 'Larger numbers and contexts' }, { label: 'From prime factor form' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const swap = (want, a, b) => ({ v: want === 'HCF' ? lcm(a, b) : gcd(a, b), why: want === 'HCF' ? 'That is the lowest common multiple. The highest common factor divides into both numbers.' : 'That is the highest common factor. The lowest common multiple is in both times tables.' });
    if (level === 1) {
      const [a, b] = pairWithCommon(r, 6, 5);
      const want = r() < 0.5 ? 'HCF' : 'LCM';
      return make(this.id, level, seed, { prompt: `Find the ${want === 'HCF' ? 'highest common factor (HCF)' : 'lowest common multiple (LCM)'} of ${a} and ${b}.`, answer: intAns(want === 'HCF' ? gcd(a, b) : lcm(a, b)),
        steps: want === 'HCF' ? [`Factors of ${a}: ${divisors(a).join(', ')}.`, `Factors of ${b}: ${divisors(b).join(', ')}.`, `The highest factor in both lists is ${gcd(a, b)}.`] : [`Multiples of ${a}: ${multiplesUpTo(a, lcm(a, b)).join(', ')}.`, `Multiples of ${b}: ${multiplesUpTo(b, lcm(a, b)).join(', ')}.`, `The first number in both lists is ${lcm(a, b)}.`],
        traps: [swap(want, a, b), { v: want === 'LCM' ? a * b : null, why: `${a} × ${b} is a common multiple, but not the lowest. ${a} and ${b} share a factor of ${gcd(a, b)}.` }] });
    }
    if (level === 2) {
      const [a, b] = pairWithCommon(r, 12, 7);
      const ctx = pick(r, ['bus', 'pack', 'plain', 'plain']);
      if (ctx === 'bus') {
        const [x, y] = [Math.max(6, Math.round(a / 2)), Math.max(8, Math.round(b / 2))];
        const X = x === y ? x + 2 : x, Y = y;
        return make(this.id, level, seed, { prompt: `A red bus leaves the station every ${X} minutes. A blue bus leaves every ${Y} minutes. Both leave together at 9:00. After how many minutes do they next leave together?`, answer: intAns(lcm(X, Y)),
          steps: ['Both buses leave together at times in both "times tables": you need the lowest common multiple.', `Prime factors: ${X} = ${primesMarkup(primeFactors(X))}, ${Y} = ${primesMarkup(primeFactors(Y))}.`, `LCM = ${primesMarkup(maxPowers(primeFactors(X), primeFactors(Y)))} = ${lcm(X, Y)} minutes.`],
          traps: [swap('LCM', X, Y), { v: X * Y, why: `${X} × ${Y} minutes is a time they meet, but not the first. Check smaller common multiples.` }] });
      }
      if (ctx === 'pack') {
        return make(this.id, level, seed, { prompt: `${a} pencils and ${b} rubbers are shared into identical packs with nothing left over. What is the greatest number of packs that can be made?`, answer: intAns(gcd(a, b)),
          steps: ['The number of packs must divide into both amounts exactly: you need the highest common factor.', `Prime factors: ${a} = ${primesMarkup(primeFactors(a))}, ${b} = ${primesMarkup(primeFactors(b))}.`, `HCF = product of the shared primes = ${gcd(a, b)} packs.`],
          traps: [swap('HCF', a, b)] });
      }
      const want = r() < 0.5 ? 'HCF' : 'LCM';
      return make(this.id, level, seed, { prompt: `Find the ${want} of ${a} and ${b}.`, answer: intAns(want === 'HCF' ? gcd(a, b) : lcm(a, b)),
        steps: [`Prime factors: ${a} = ${primesMarkup(primeFactors(a))}, ${b} = ${primesMarkup(primeFactors(b))}.`, want === 'HCF' ? `HCF: multiply the primes they share (lowest power of each): ${primesMarkup(minPowers(primeFactors(a), primeFactors(b)))} = ${gcd(a, b)}.` : `LCM: multiply every prime, using the highest power of each: ${primesMarkup(maxPowers(primeFactors(a), primeFactors(b)))} = ${lcm(a, b)}.`],
        traps: [swap(want, a, b), { v: want === 'LCM' ? a * b : null, why: `${a} × ${b} counts the shared factor ${gcd(a, b)} twice. The LCM uses it once.` }] });
    }
    const [A, B] = pairWithCommon(r, 12, 9);
    const fa = primeFactors(A * pick(r, [1, 2, 3])), fb = primeFactors(B);
    const va = Object.entries(fa).reduce((t2, [p, k]) => t2 * Number(p) ** k, 1), vb = B;
    const want = r() < 0.5 ? 'HCF' : 'LCM';
    const target = want === 'HCF' ? gcd(va, vb) : lcm(va, vb);
    return make(this.id, level, seed, { prompt: `A = ${primesMarkup(fa)} and B = ${primesMarkup(fb)}. Find the ${want === 'HCF' ? 'highest common factor' : 'lowest common multiple'} of A and B.`, answer: intAns(target, { allowProduct: true }),
      steps: want === 'HCF' ? [`Take each prime that appears in both, with the lower power: ${primesMarkup(minPowers(fa, fb))}.`, `HCF = ${target}`] : [`Take every prime that appears in either, with the higher power: ${primesMarkup(maxPowers(fa, fb))}.`, `LCM = ${target}`],
      note: 'You can give an ordinary number or a product of primes.',
      traps: [swap(want, va, vb)] });
  },
};
function divisors(n) { const d = []; for (let i = 1; i <= n; i++) if (n % i === 0) d.push(i); return d; }
function multiplesUpTo(n, lim) { const m = []; for (let i = n; i <= lim; i += n) m.push(i); return m; }
function maxPowers(a, b) { const o = { ...a }; for (const [p, k] of Object.entries(b)) o[p] = Math.max(o[p] || 0, k); return o; }
function minPowers(a, b) { const o = {}; for (const [p, k] of Object.entries(a)) if (b[p]) o[p] = Math.min(k, b[p]); return Object.keys(o).length ? o : { 1: 1 }; }

export const numberSkills = [compare, addsub, muldiv, evaluate, brackets, inverse, simplify, fracAddSub, fracMulDiv, ofAmount, identify, factorise, hcfLcm];
export const skillById = Object.fromEntries(numberSkills.map(s => [s.id, s]));
export function generate(skillId, level, seed) {
  const s = skillById[skillId];
  if (!s) throw new Error('Unknown skill ' + skillId);
  const lv = Math.min(Math.max(1, level), s.levels.length);
  return s.gen(lv, String(seed));
}
export { Fx };
