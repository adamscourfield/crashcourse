// Edexcel 1MA1 Algebra, batch 1: notation, substitution and vocabulary (A1–A3), simplifying and
// index laws (A4), single and double brackets and factorising quadratics (A4; Higher: three
// binomials and ax² + bx + c), linear equations (A17, with forming equations from A21), and
// using and rearranging formulae (A5, A2).
// Same contract as the Number skill modules: generators are pure functions of (level, seed).
// Algebraic answers use kind 'algebra' (see algebra.js): {expr, display, form, vars, subject?}.
// alTraps are wrong expressions that reveal a specific misconception.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, gcd, num, fracMarkup, decText } from './frac.js?v=20261023-maths-r9';
import { make as baseMake } from './skills-number.js?v=20261023-maths-r9';

// A negative number written into prompt or step text must use a true minus sign (−), as everywhere else.
const fixMinus = t => (typeof t === 'string' ? t.replace(/(^|[\s(=:,×÷])-(\d)/g, '$1−$2') : t);
function make(skill, level, seed, o) {
  const it = baseMake(skill, level, seed, o);
  it.prompt = fixMinus(it.prompt);
  it.steps = it.steps.map(fixMinus);
  if (it.optionWhy) it.optionWhy = it.optionWhy.map(fixMinus);
  if (it.traps) it.traps = it.traps.map(t => ({ ...t, why: fixMinus(t.why) }));
  if (it.alTraps) it.alTraps = it.alTraps.map(t => ({ ...t, why: fixMinus(t.why) }));
  return it;
}
import { algValue, equivalent } from './algebra.js?v=20261023-maths-r9';

/* ───────── formatting helpers ───────── */
const Fr = c => (typeof c === 'number' ? F(c) : c);
const coefM = (c, mon) => {
  const a = F(Math.abs(c.n), c.d);
  const k = a.d === 1 ? String(a.n) : `{${a.n}/${a.d}}`;
  if (!mon) return k;
  return a.n === 1 && a.d === 1 ? mon : k + mon;
};
/** Markup for a sum of terms [[coef, monomial]] in the given order: "3x^2 − 5x + 2". */
export function polyM(terms) {
  const ts = terms.map(([c, m]) => [Fr(c), m]).filter(([c]) => c.n !== 0);
  if (!ts.length) return '0';
  return ts.map(([c, m], i) => (i === 0 ? (c.n < 0 ? '−' : '') : c.n < 0 ? ' − ' : ' + ') + coefM(c, m)).join('');
}
/** Markup → text the algebra parser reads. */
const wrap = t => (/^[\w^]+$/.test(t.trim()) ? t.trim() : `(${t.trim()})`);
export const asc = m => m.replace(/−/g, '-').replace(/\{(\d+)\/(\d+)\}/g, '($1/$2)').replace(/\{([^{}]+)\/([^{}]+)\}/g, (_, a, b) => `${wrap(a)}/${wrap(b)}`);
const degOf = mon => (mon.match(/[a-z](\^\d+)?/gi) || []).reduce((t, p) => t + (p.includes('^') ? Number(p.split('^')[1]) : 1), 0);
/** Collect like terms [[coef, mon, key?]] → ordered [[coef, mon]]: higher degree first, number last. */
function collect(terms) {
  const map = new Map();
  for (const [c, mon, key = mon] of terms) {
    const cur = map.get(key) || { c: F(0), mon: key };
    cur.c = add(cur.c, Fr(c));
    map.set(key, cur);
  }
  return [...map.values()].filter(t => t.c.n !== 0).sort((a, b) => degOf(b.mon) - degOf(a.mon) || (a.mon < b.mon ? -1 : 1)).map(t => [t.c, t.mon]);
}
const A = (display, form, vars, extra = {}) => ({ kind: 'algebra', expr: asc(display), display, form, vars, ...extra });
const tr = (display, why) => ({ expr: asc(display), why });
const intAns = (value, extra = {}) => ({ kind: 'integer', value, ...extra });
const valAns = (f, extra = {}) => (f.d === 1 ? intAns(f.n, extra) : { kind: 'fraction', value: { n: f.n, d: f.d }, form: 'value', ...extra });
const dec = f => ({ kind: 'decimal', value: { n: f.n, d: f.d } });
const tv = (v, why) => ({ v: v === null || v === undefined ? null : typeof v === 'number' ? F(v) : v, why });
const nz = (r, lo, hi) => { let v; do v = int(r, lo, hi); while (v === 0); return v; };
const sgn = (n, first = false) => (n < 0 ? (first ? '−' : ' − ') : first ? '' : ' + ');
const fv = f => (f.d === 1 ? num(f.n) : fracMarkup(f));
const bracket = n => (n < 0 ? `(${num(n)})` : String(n));
function choice(r, correct, wrong, whyWrong) {
  const options = shuffled(r, [correct, ...wrong]);
  return { answer: { kind: 'choice', options, answer: options.indexOf(correct) }, optionWhy: options.map(o => (o === correct ? null : whyWrong(o))) };
}
/** make() plus algebra trap filtering: unreadable, equivalent-to-answer and duplicate traps are dropped. */
function makeA(skill, level, seed, o) {
  const it = make(skill, level, seed, o);
  if (o.answer.kind === 'algebra') {
    const kept = [];
    it.alTraps = (o.alTraps || []).filter(t => {
      if (!algValue(t.expr) || equivalent(t.expr, o.answer.expr) || kept.some(k => equivalent(k, t.expr))) return false;
      kept.push(t.expr);
      return true;
    }).map(t => ({ ...t, why: fixMinus(t.why) }));
  }
  return it;
}
const LET = ['x', 'y', 'a', 'n', 'p', 't', 'm', 'k'];

/* ───────── A1 notation ───────── */
const notation = {
  id: 'maths.algebra.notation',
  name: 'Write algebra simply',
  levels: [{ label: 'Products and repeated sums' }, { label: 'Powers and division' }, { label: 'Expressions from words' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), v = pick(r, LET);
    if (level === 1) {
      const kind = pick(r, ['sum', 'letters', 'numbers']);
      if (kind === 'sum') {
        const n = int(r, 3, 6);
        return makeA(this.id, level, seed, { prompt: `Simplify ${Array(n).fill(v).join(' + ')}`, answer: A(`${n}${v}`, 'notation', [v]),
          steps: [`There are ${n} lots of ${v}.`, `${Array(n).fill(v).join(' + ')} = ${n}${v}`], alTraps: [tr(`${v}^${n}`, `Adding ${v} ${n} times gives ${n}${v}. ${v}^${n} means ${Array(n).fill(v).join(' × ')}.`)] });
      }
      if (kind === 'letters') {
        const [a, b] = shuffled(r, ['a', 'b', 'c', 'p', 'q', 'y']).slice(0, 2).sort(), k = int(r, 2, 9);
        const parts = shuffled(r, [a, String(k), b]);
        return makeA(this.id, level, seed, { prompt: `Simplify ${parts.join(' × ')}`, answer: A(`${k}${a}${b}`, 'notation', [a, b]),
          steps: ['Leave out the × signs.', 'Write the number first, then the letters in alphabetical order.', `${parts.join(' × ')} = ${k}${a}${b}`], alTraps: [tr(`${k}+${a}+${b}`, `× means multiply, so the result is one term: ${k}${a}${b}.`)] });
      }
      const p = int(r, 2, 7), q = int(r, 2, 6);
      return makeA(this.id, level, seed, { prompt: `Simplify ${p} × ${v} × ${q}`, answer: A(`${p * q}${v}`, 'notation', [v]),
        steps: [`Multiply the numbers: ${p} × ${q} = ${p * q}.`, `${p} × ${v} × ${q} = ${p * q}${v}`], alTraps: [tr(`${p + q}${v}`, `Multiply the numbers, do not add them: ${p} × ${q} = ${p * q}.`)] });
    }
    if (level === 2) {
      const kind = pick(r, ['aab', 'kmkm', 'cube', 'divide', 'divide2']);
      if (kind === 'aab') {
        const [a, b] = shuffled(r, ['a', 'b', 'p', 'q', 'x', 'y']).slice(0, 2).sort();
        return makeA(this.id, level, seed, { prompt: `Simplify ${a} × ${a} × ${b}`, answer: A(`${a}^2${b}`, 'notation', [a, b]),
          steps: [`${a} × ${a} = ${a}^2`, `${a} × ${a} × ${b} = ${a}^2${b}`], alTraps: [tr(`2${a}${b}`, `${a} × ${a} is ${a} squared, ${a}^2. 2${a} means ${a} + ${a}.`)] });
      }
      if (kind === 'kmkm') {
        const p = int(r, 2, 5), q = int(r, 2, 5);
        return makeA(this.id, level, seed, { prompt: `Simplify ${p} × ${v} × ${q} × ${v}`, answer: A(`${p * q}${v}^2`, 'notation', [v]),
          steps: [`Numbers: ${p} × ${q} = ${p * q}`, `Letters: ${v} × ${v} = ${v}^2`, `Answer: ${p * q}${v}^2`],
          alTraps: [tr(`${p * q}${v}`, `There are two ${v}s multiplied together: ${v} × ${v} = ${v}^2.`), tr(`${p + q}${v}^2`, `Multiply the numbers: ${p} × ${q} = ${p * q}.`), tr(`${p * q}*2${v}`, `Multiplying ${v} by itself gives ${v}^2, not 2${v}.`)] });
      }
      if (kind === 'cube') {
        const n = int(r, 3, 4);
        return makeA(this.id, level, seed, { prompt: `Simplify ${Array(n).fill(v).join(' × ')}`, answer: A(`${v}^${n}`, 'notation', [v]),
          steps: [`${v} multiplied by itself ${n} times is ${v} to the power ${n}.`, `${v}^${n}`], alTraps: [tr(`${n}${v}`, `${n}${v} means ${Array(n).fill(v).join(' + ')}. Multiplying gives a power: ${v}^${n}.`)] });
      }
      if (kind === 'divide') {
        const k = int(r, 2, 9);
        return makeA(this.id, level, seed, { prompt: `Write ${v} ÷ ${k} without a ÷ sign.`, answer: A(`{${v}/${k}}`, 'notation', [v]),
          steps: [`Division is written as a fraction: the number being divided goes on top.`, `${v} ÷ ${k} = {${v}/${k}}`], alTraps: [tr(`{${k}/${v}}`, `The number being divided goes on top: ${v} ÷ ${k} = {${v}/${k}}.`)], note: 'Type a fraction with /, for example x/4.' });
      }
      const [a, b] = shuffled(r, ['a', 'b', 'p', 'q', 'm', 'n']).slice(0, 2);
      return makeA(this.id, level, seed, { prompt: `Write ${a} ÷ ${b} without a ÷ sign.`, answer: A(`{${a}/${b}}`, 'notation', [a, b]),
        steps: ['Division is written as a fraction, first quantity on top.', `${a} ÷ ${b} = {${a}/${b}}`], alTraps: [tr(`{${b}/${a}}`, `The quantity being divided goes on top: ${a} ÷ ${b} = {${a}/${b}}.`)], note: 'Type a fraction with /, for example a/b.' });
    }
    const n = 'n', k = int(r, 2, 6), c = int(r, 2, 9);
    const kind = pick(r, ['mulsub', 'addmul', 'double', 'square', 'halve', 'cost']);
    const W = s => `Think of a number ${n}. ${s} Write an expression for the result.`;
    if (kind === 'mulsub') return makeA(this.id, level, seed, { prompt: W(`Multiply it by ${k}, then subtract ${c}.`), answer: A(`${k}n − ${c}`, 'any', [n]), steps: [`Multiply by ${k}: ${k}n`, `Then subtract ${c}: ${k}n − ${c}`], alTraps: [tr(`${k}(n − ${c})`, `The subtraction happens after multiplying, so only ${k}n has ${c} taken away. ${k}(n − ${c}) subtracts first.`), tr(`${k} − ${c}n`, 'Write the steps in order: the number is multiplied first.')] });
    if (kind === 'addmul') return makeA(this.id, level, seed, { prompt: W(`Add ${c}, then multiply by ${k}.`), answer: A(`${k}(n + ${c})`, 'any', [n]), steps: [`Add ${c}: n + ${c}`, `Multiply the whole result by ${k}: ${k}(n + ${c})`, `This can also be written ${k}n + ${k * c}.`], alTraps: [tr(`${k}n + ${c}`, `The ${c} is added first, so all of n + ${c} is multiplied by ${k}: use brackets, ${k}(n + ${c}).`)] });
    if (kind === 'double') return makeA(this.id, level, seed, { prompt: `Ali has n sweets. Ben has ${c} more than double the number Ali has. Write an expression for the number of sweets Ben has.`, answer: A(`2n + ${c}`, 'any', [n]), steps: ['Double n: 2n', `${c} more: 2n + ${c}`], alTraps: [tr(`2(n + ${c})`, `Double first, then add ${c}: 2n + ${c}.`), tr(`n + ${c + 2}`, 'Double means multiply by 2: 2n.'), tr(`n^2 + ${c}`, 'Double means × 2, not squared.')] });
    if (kind === 'square') return makeA(this.id, level, seed, { prompt: W(`Square it, then add ${c}.`), answer: A(`n^2 + ${c}`, 'any', [n]), steps: ['Square: n^2', `Add ${c}: n^2 + ${c}`], alTraps: [tr(`2n + ${c}`, 'Squaring means n × n = n^2, not 2n.'), tr(`(n + ${c})^2`, `Square first, then add ${c}.`)] });
    if (kind === 'halve') return makeA(this.id, level, seed, { prompt: W(`Halve it, then subtract ${c}.`), answer: A(`{n/2} − ${c}`, 'any', [n]), steps: ['Halve: {n/2}', `Subtract ${c}: {n/2} − ${c}`], alTraps: [tr(`{n − ${c}/2}`, `Halve first, then subtract ${c}: only n is divided by 2.`), tr(`2n − ${c}`, 'Halving divides by 2.')] });
    const a = int(r, 2, 6), b = int(r, 2, 6);
    return makeA(this.id, level, seed, { prompt: `A pen costs x pence and a ruler costs y pence. Write an expression for the cost, in pence, of ${a} pens and ${b} rulers.`, answer: A(`${a}x + ${b}y`, 'any', ['x', 'y']), steps: [`${a} pens cost ${a}x pence.`, `${b} rulers cost ${b}y pence.`, `Total: ${a}x + ${b}y`], alTraps: [tr(`${a + b}xy`, `${a}x and ${b}y are unlike terms: they cannot be combined.`), tr(`${a}x + y`, `Each of the ${b} rulers costs y, so the rulers cost ${b}y.`), tr(`(${a} + ${b})(x + y)`, 'Multiply each count by its own price, then add.')] });
  },
};

/* ───────── A2 substitution ───────── */
const substitute = {
  id: 'maths.algebra.substitute',
  name: 'Substitute into expressions and formulae',
  levels: [{ label: 'Positive whole numbers' }, { label: 'Negatives and powers' }, { label: 'Scientific formulae' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, ['pa+qb', 'ab-c', 'k(p+q)', 'x/k+y']);
      if (kind === 'pa+qb') {
        const p = int(r, 2, 9), q = int(r, 2, 9), a = int(r, 2, 9), b = int(r, 2, 9), v = p * a + q * b;
        return make(this.id, level, seed, { prompt: `Work out the value of ${p}a + ${q}b when a = ${a} and b = ${b}.`, answer: intAns(v), steps: [`${p}a = ${p} × ${a} = ${p * a}`, `${q}b = ${q} × ${b} = ${q * b}`, `${p * a} + ${q * b} = ${v}`], traps: [tv(Number(`${p}${a}`) + Number(`${q}${b}`), `${p}a means ${p} × a, not the digits ${p} and ${a} side by side.`), tv(p + a + q + b, `${p}a means ${p} × a: multiply, then add.`)] });
      }
      if (kind === 'ab-c') {
        const a = int(r, 2, 9), b = int(r, 2, 9), c = int(r, 1, a * b - 1), v = a * b - c;
        return make(this.id, level, seed, { prompt: `Work out the value of ab − c when a = ${a}, b = ${b} and c = ${c}.`, answer: intAns(v), steps: [`ab = ${a} × ${b} = ${a * b}`, `${a * b} − ${c} = ${v}`], traps: [tv(a + b - c, 'ab means a × b, not a + b.')] });
      }
      if (kind === 'k(p+q)') {
        const k = int(r, 2, 9), p = int(r, 2, 9), q = int(r, 2, 9), v = k * (p + q);
        return make(this.id, level, seed, { prompt: `Work out the value of ${k}(p + q) when p = ${p} and q = ${q}.`, answer: intAns(v), steps: [`Brackets first: p + q = ${p + q}`, `${k} × ${p + q} = ${v}`], traps: [tv(k * p + q, `The ${k} multiplies the whole bracket: ${k} × (${p} + ${q}).`)] });
      }
      const k = int(r, 2, 6), x = k * int(r, 2, 9), y = int(r, 1, 12), v = x / k + y;
      return make(this.id, level, seed, { prompt: `Work out the value of {x/${k}} + y when x = ${x} and y = ${y}.`, answer: intAns(v), steps: [`{x/${k}} = ${x} ÷ ${k} = ${x / k}`, `${x / k} + ${y} = ${v}`], traps: [tv(F(x, k + y), `Only x is divided by ${k}; then add y.`)] });
    }
    if (level === 2) {
      if (r() < 0.75) {
        const a = int(r, 1, 3), b = nz(r, -6, 6), c = int(r, -9, 9), x = -int(r, 1, 5);
        const v = a * x * x + b * x + c, expr = polyM([[a, 'x^2'], [b, 'x'], [c, '']]);
        const traps = [tv(-a * x * x + b * x + c, `${bracket(x)}^2 = ${x * x}: a negative number squared is positive.`), tv(a * x * x - b * x + c, `Check the sign of ${b}x: ${b} × ${bracket(x)} = ${b * x}.`)];
        if (a > 1) traps.push(tv((a * x) ** 2 + b * x + c, `Only x is squared: ${a}x^2 means ${a} × x^2, not (${a}x)^2.`));
        return make(this.id, level, seed, { prompt: `Work out the value of ${expr} when x = ${num(x)}.`, answer: intAns(v),
          steps: [`x^2 = ${bracket(x)}^2 = ${x * x}`, ...(a === 1 ? [] : [`${a}x^2 = ${a} × ${x * x} = ${a * x * x}`]), `${num(b)}x = ${num(b)} × ${bracket(x)} = ${num(b * x)}`, `${a * x * x} ${b * x < 0 ? '−' : '+'} ${Math.abs(b * x)}${c ? ` ${c < 0 ? '−' : '+'} ${Math.abs(c)}` : ''} = ${num(v)}`], traps });
      }
      const a = -int(r, 2, 6), b = -int(r, 1, 9), v = a * a - 2 * b;
      return make(this.id, level, seed, { prompt: `Work out the value of a^2 − 2b when a = ${num(a)} and b = ${num(b)}.`, answer: intAns(v), steps: [`a^2 = ${bracket(a)}^2 = ${a * a}`, `2b = 2 × ${bracket(b)} = ${2 * b}`, `${a * a} − ${bracket(2 * b)} = ${v}`], traps: [tv(-a * a - 2 * b, `${bracket(a)}^2 = ${a * a}, a positive number.`), tv(a * a + 2 * b, `Subtracting ${bracket(2 * b)} is the same as adding ${-2 * b}.`)] });
    }
    const kind = pick(r, ['v=u+at', 's=ut+½at²', 'E=½mv²', 'F=9C/5+32']);
    if (kind === 'v=u+at') {
      const u = int(r, 0, 15), a = F(pick(r, [98, 25, 15, 8, 40, 35]), 10), t = int(r, 2, 8), v = add(F(u), mul(a, F(t)));
      return make(this.id, level, seed, { prompt: `v = u + at. Work out v when u = ${u}, a = ${decText(a)} and t = ${t}.`, answer: dec(v), steps: [`at = ${decText(a)} × ${t} = ${decText(mul(a, F(t)))}`, `v = ${u} + ${decText(mul(a, F(t)))} = ${decText(v)}`], traps: [tv(mul(add(F(u), a), F(t)), 'Multiply a by t first (at), then add u.')] });
    }
    if (kind === 's=ut+½at²') {
      const u = int(r, 0, 6), a = pick(r, [2, 4, 6, 10]), t = int(r, 2, 5), s = u * t + (a * t * t) / 2;
      return make(this.id, level, seed, { prompt: `s = ut + {1/2}at^2. Work out s when u = ${u}, a = ${a} and t = ${t}.`, answer: dec(F(s)), steps: [`ut = ${u} × ${t} = ${u * t}`, `{1/2}at^2 = {1/2} × ${a} × ${t * t} = ${(a * t * t) / 2}`, `s = ${u * t} + ${(a * t * t) / 2} = ${s}`], traps: [tv(u * t + (a * t) ** 2 / 2, `Only t is squared: {1/2} × a × t^2.`), tv(u * t + a * t * t, 'The formula halves at^2: remember the {1/2}.')] });
    }
    if (kind === 'E=½mv²') {
      const m = 2 * int(r, 1, 6), v = int(r, 2, 7), E = (m * v * v) / 2;
      return make(this.id, level, seed, { prompt: `E = {1/2}mv^2. Work out E when m = ${m} and v = ${v}.`, answer: dec(F(E)), steps: [`v^2 = ${v * v}`, `E = {1/2} × ${m} × ${v * v} = ${E}`], traps: [tv((m * v) ** 2 / 2, 'Only v is squared, not m × v.'), tv(m * v * v, 'Remember to halve: E = {1/2}mv^2.'), tv(m * v, 'Square v before multiplying: E = {1/2} × m × v^2.')] });
    }
    const C = 5 * int(r, -4, 8), Fv = (9 * C) / 5 + 32;
    return make(this.id, level, seed, { prompt: `F = {9C/5} + 32 converts °C to °F. Work out F when C = ${num(C)}.`, answer: dec(F(Fv)), steps: [`9C = 9 × ${bracket(C)} = ${9 * C}`, `÷ 5: ${(9 * C) / 5}`, `+ 32: ${num(Fv)}`], traps: [tv(F(9 * (C + 32), 5), 'Multiply and divide first, then add 32.')] });
  },
};

/* ───────── A3 vocabulary (and A6: equation vs identity) ───────── */
const KINDS = {
  Expression: ['5y − 2', '3a + 2b', 'x^2 − 4x', '7 − 2n'],
  Equation: ['4x − 1 = 11', '2(y + 3) = 14', '5n = 35', 'x^2 = 49'],
  Formula: ['A = lw', 'v = u + at', 'P = 2l + 2w', 'C = 2πr'],
  Identity: ['2(x + 3) ≡ 2x + 6', 'x + x ≡ 2x', 'a × b ≡ b × a', '(n + 1)^2 ≡ n^2 + 2n + 1'],
  Inequality: ['3x + 1 > 7', 'n ≤ 5', '2y − 3 < 9', 'x ≥ −2'],
};
const DEF = {
  Expression: 'An expression is a collection of terms with no equals sign, such as 3x + 2.',
  Equation: 'An equation has an equals sign and is true only for particular values of the letter.',
  Formula: 'A formula is a rule linking different quantities, each with its own letter, such as A = lw.',
  Identity: 'An identity is true for every value of the letters; it can be written with ≡.',
  Inequality: 'An inequality compares with <, >, ≤ or ≥.',
};
const vocabulary = {
  id: 'maths.algebra.vocabulary',
  name: 'Expressions, equations, formulae and identities',
  levels: [{ label: 'Name the statement' }, { label: 'Terms, factors and identities' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, Object.keys(KINDS)), example = pick(r, KINDS[kind]);
      const others = shuffled(r, Object.keys(KINDS).filter(k => k !== kind)).slice(0, 3);
      const c = choice(r, kind, others, o => `${DEF[o]} ${example} is ${/^[AEIOU]/.test(kind) ? 'an' : 'a'} ${kind.toLowerCase()}.`);
      return make(this.id, level, seed, { prompt: `Which word best describes ${example}?`, ...c, steps: [DEF[kind], `So ${example} is ${/^[AEIOU]/.test(kind) ? 'an' : 'a'} ${kind.toLowerCase()}.`] });
    }
    const kind = pick(r, ['terms', 'factor', 'identity']);
    if (kind === 'terms') {
      const n = int(r, 2, 4), mons = shuffled(r, ['x^2', 'x', '', 'xy', 'y']).slice(0, n);
      const expr = polyM(mons.map(m => [nz(r, -9, 9), m]));
      const c = choice(r, String(n), [1, 2, 3, 4, 5].filter(k => k !== n).slice(0, 3).map(String), () => 'Terms are separated by + and − signs; count the parts between them.');
      return make(this.id, level, seed, { prompt: `How many terms are in ${expr}?`, ...c, steps: ['Terms are separated by + and − signs.', `${expr} has ${n} terms.`] });
    }
    if (kind === 'factor') {
      const k = pick(r, [6, 8, 10, 12]), ds = [2, 3, 4, 5, 6].filter(d => k % d === 0 && d < k);
      const d = pick(r, ds), right = pick(r, [`${d}x`, `${d}y`, `${d}xy`]);
      const c = choice(r, right, [`${k}x^2`, `${2 * k}y`, `${k + 1}x`], o => `${o} does not divide ${k}xy exactly: ${o.includes('^2') ? 'there is only one x' : 'the number part is not a factor of ' + k}.`);
      return make(this.id, level, seed, { prompt: `Which of these is a factor of ${k}xy?`, ...c, steps: [`A factor divides exactly: ${k}xy ÷ ${right} leaves no remainder.`, `${k}xy = ${right} × ${right === `${d}x` ? `${k / d}y` : right === `${d}y` ? `${k / d}x` : k / d}`] });
    }
    const k = int(r, 2, 6), a = int(r, 1, 9), b = int(r, 1, 9), cc = b + int(r, 1, 9);
    const right = `${k}(x + ${a}) = ${k}x + ${k * a}`;
    const wrong = [`${k}(x + ${a}) = ${k}x + ${a}`, `x + ${b} = ${cc}`, `2x = x^2`];
    const c = choice(r, right, wrong, o => (o === wrong[0] ? `Expanding gives ${k}x + ${k * a}, so the sides are never equal.` : o === wrong[1] ? `This is only true when x = ${cc - b}: it is an equation.` : 'This is only true when x = 0 or x = 2: it is an equation.'));
    return make(this.id, level, seed, { prompt: 'Which of these is an identity (true for every value of x)?', ...c, steps: [`Expand ${k}(x + ${a}) = ${k}x + ${k * a}: both sides are the same expression, so it is true for every x.`, 'An identity can be written with ≡.'] });
  },
};

/* ───────── A4 collecting like terms ───────── */
const collectSkill = {
  id: 'maths.algebra.collect',
  name: 'Collect like terms',
  levels: [{ label: 'One letter and numbers' }, { label: 'Two letters' }, { label: 'Powers and products' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (let tries = 0; tries < 50; tries++) {
      let terms;
      const v = pick(r, ['x', 'y', 'a', 'n', 'p']);
      if (level === 1) {
        terms = [[int(r, 2, 9), v], [nz(r, -8, 8), v]];
        if (r() < 0.5) terms.push([nz(r, -6, 6), v]);
        const nc = int(r, r() < 0.3 ? 0 : 1, 2);
        for (let i = 0; i < nc; i++) terms.push([nz(r, -9, 9), '']);
      } else if (level === 2) {
        const [a, b] = pick(r, [['a', 'b'], ['x', 'y'], ['p', 'q'], ['m', 'n']]);
        terms = [[int(r, 2, 9), a], [nz(r, -8, 8), b], [nz(r, -8, 8), a], [nz(r, -8, 8), b]];
        if (r() < 0.3) terms.push([nz(r, -9, 9), '']);
      } else if (r() < 0.6) {
        terms = [[int(r, 2, 6), `${v}^2`], [nz(r, -7, 7), v], [nz(r, -5, 5), `${v}^2`], [nz(r, -7, 7), v]];
      } else {
        terms = [[int(r, 2, 7), 'ab', 'ab'], [nz(r, -6, 6), 'ba', 'ab'], [nz(r, -6, 6), 'a', 'a'], [nz(r, -6, 6), 'a', 'a']];
      }
      const first = terms[0], rest = shuffled(r, terms.slice(1));
      terms = [first, ...rest];
      const res = collect(terms);
      if (res.length !== new Set(terms.map(t => t[2] ?? t[1])).size || res.some(([c]) => c.n === 0)) continue;
      const prompt = `Simplify ${polyM(terms.map(([c, m]) => [c, m]))}`;
      const ans = polyM(res);
      const keys = [...new Set(terms.map(t => t[2] ?? t[1]))];
      const traps = [];
      const absRes = collect(terms.map(([c, m, k]) => [Math.abs(c), m, k]));
      traps.push(tr(polyM(absRes), 'The sign in front of a term belongs to it: − 3a means subtract 3a.'));
      const total = terms.reduce((t, [c]) => t + c, 0);
      if (keys.length > 1 && total) {
        const mainMon = level === 3 && keys[0].includes('^') ? keys[0].replace('^2', '^3') : level === 2 ? keys.filter(k => k).join('') : keys[0];
        traps.push(tr(`${total}${mainMon}`, level === 1 ? `Letter terms and number terms are unlike: ${v} terms and numbers cannot be combined.` : level === 2 ? 'Terms in different letters are unlike terms: they cannot be combined into one term.' : `${keys[0]} and ${keys[1] || 'the other terms'} are unlike terms: you cannot add them, and adding never changes a power.`));
      }
      const steps = keys.map(k => {
        const group = terms.filter(t => (t[2] ?? t[1]) === k);
        const sum = group.reduce((t, [c]) => t + c, 0);
        return `${k ? `${k} terms` : 'Numbers'}: ${polyM(group.map(([c, m]) => [c, m]))} = ${polyM([[sum, k]])}`;
      });
      if (keys.includes('ab') && level === 3) steps.unshift('ba is the same as ab, so they are like terms.');
      return makeA(this.id, level, seed, { prompt, answer: A(ans, 'simplified', ['a', 'b', 'x', 'y', 'n', 'p', 'q', 'm']), steps: [...steps, `Answer: ${ans}`], alTraps: traps });
    }
    throw new Error('collect: no item');
  },
};

/* ───────── A4 index laws with algebra ───────── */
const indexLaws = {
  id: 'maths.algebra.index-laws',
  name: 'Simplify products, quotients and powers',
  levels: [{ label: 'Multiply' }, { label: 'Divide and power of a power' }, { label: 'Coefficients and two letters' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), v = pick(r, ['x', 'y', 'a', 'p', 'm']);
    const vars = ['x', 'y', 'a', 'b', 'p', 'm'];
    if (level === 1) {
      const kind = pick(r, ['pow', 'coef', 'same']);
      if (kind === 'pow') {
        const m = int(r, 2, 7), n = int(r, 2, 6);
        return makeA(this.id, level, seed, { prompt: `Simplify ${v}^${m} × ${v}^${n}`, answer: A(`${v}^${m + n}`, 'simplified', vars), steps: [`Multiplying powers of the same letter: add the indices.`, `${v}^${m} × ${v}^${n} = ${v}^{${m} + ${n}} = ${v}^${m + n}`], alTraps: [tr(`${v}^${m * n}`, `Add the indices when multiplying: ${m} + ${n} = ${m + n}.`), tr(`2${v}^${m + n}`, `${v}^${m} × ${v}^${n} is a single power of ${v}: the result is ${v}^${m + n}, with no 2 in front.`)] });
      }
      if (kind === 'coef') {
        const p = int(r, 2, 7), q = int(r, 2, 7), [a, b] = pick(r, [['a', 'b'], ['x', 'y'], ['p', 'q']]);
        return makeA(this.id, level, seed, { prompt: `Simplify ${p}${a} × ${q}${b}`, answer: A(`${p * q}${a}${b}`, 'simplified', [a, b]), steps: [`Numbers: ${p} × ${q} = ${p * q}`, `Letters: ${a} × ${b} = ${a}${b}`, `${p * q}${a}${b}`], alTraps: [tr(`${p + q}${a}${b}`, `Multiply the numbers: ${p} × ${q} = ${p * q}.`), tr(`${p}${a} + ${q}${b}`, '× means multiply, so the answer is a single term.')] });
      }
      const p = int(r, 2, 6), q = int(r, 2, 6);
      return makeA(this.id, level, seed, { prompt: `Simplify ${p}${v} × ${q}${v}`, answer: A(`${p * q}${v}^2`, 'simplified', vars), steps: [`Numbers: ${p} × ${q} = ${p * q}`, `${v} × ${v} = ${v}^2`, `${p * q}${v}^2`], alTraps: [tr(`${p * q}${v}`, `There are two ${v}s multiplied together: ${v} × ${v} = ${v}^2.`), tr(`${p + q}${v}^2`, `Multiply the numbers: ${p} × ${q} = ${p * q}.`), tr(`${p + q}${v}`, `This is multiplication, not adding like terms: ${p} × ${q} = ${p * q} and ${v} × ${v} = ${v}^2.`)] });
    }
    if (level === 2) {
      const kind = pick(r, ['div', 'powpow', 'coefdiv', 'zero']);
      if (kind === 'div') {
        const n = int(r, 2, 5), m = n + int(r, 2, 6);
        return makeA(this.id, level, seed, { prompt: `Simplify ${v}^${m} ÷ ${v}^${n}`, answer: A(`${v}^${m - n}`, 'simplified', vars), steps: ['Dividing powers of the same letter: subtract the indices.', `${v}^${m} ÷ ${v}^${n} = ${v}^{${m} − ${n}} = ${v}^${m - n}`], alTraps: m % n === 0 ? [tr(`${v}^${m / n}`, `Subtract the indices when dividing: ${m} − ${n} = ${m - n}.`)] : [tr(`${v}^${m + n}`, 'Subtract the indices when dividing.')] });
      }
      if (kind === 'powpow') {
        const m = int(r, 2, 6), n = int(r, 2, 4);
        return makeA(this.id, level, seed, { prompt: `Simplify (${v}^${m})^${n}`, answer: A(`${v}^${m * n}`, 'simplified', vars), steps: ['A power of a power: multiply the indices.', `(${v}^${m})^${n} = ${v}^{${m} × ${n}} = ${v}^${m * n}`], alTraps: [tr(`${v}^${m + n}`, `(${v}^${m})^${n} is ${n} lots of ${v}^${m} multiplied together: multiply the indices, ${m} × ${n} = ${m * n}.`)] });
      }
      if (kind === 'zero') {
        const n = int(r, 2, 9);
        return makeA(this.id, level, seed, { prompt: `Simplify ${v}^${n} ÷ ${v}^${n}`, answer: A('1', 'simplified', vars), steps: [`${v}^${n} ÷ ${v}^${n} = ${v}^0`, 'Anything (except 0) divided by itself is 1, so ' + v + '^0 = 1.'], alTraps: [tr('0', `Subtracting the indices gives ${v}^0, and ${v}^0 = 1, not 0.`), tr(v, `Anything (except 0) divided by itself is 1, so ${v}^0 = 1.`)] });
      }
      const q = int(r, 2, 6), k = int(r, 2, 6), p = q * k, n = int(r, 1, 4), m = n + int(r, 1, 5);
      const den = n === 1 ? `${q}${v}` : `${q}${v}^${n}`;
      return makeA(this.id, level, seed, { prompt: `Simplify {${p}${v}^${m}/${den}}`, answer: A(m - n === 1 ? `${k}${v}` : `${k}${v}^${m - n}`, 'simplified', vars), steps: [`Numbers: ${p} ÷ ${q} = ${k}`, `Letters: ${v}^${m} ÷ ${n === 1 ? v : `${v}^${n}`} = ${v}^${m - n}`, `${k}${v}^${m - n}`.replace(/\^1$/, '')], alTraps: [tr(`${p - q}${v}^${m - n}`, `Divide the numbers: ${p} ÷ ${q} = ${k}.`), tr(`${k}${v}^${m + n}`, 'Subtract the indices when dividing.')] });
    }
    const kind = pick(r, ['bracketpow', 'twoletters', 'divide2']);
    if (kind === 'bracketpow') {
      const c = int(r, 2, 4), m = int(r, 2, 4), n = int(r, 2, 3);
      return makeA(this.id, level, seed, { prompt: `Simplify (${c}${v}^${m})^${n}`, answer: A(`${c ** n}${v}^${m * n}`, 'simplified', vars), steps: [`Everything in the bracket is raised to the power ${n}.`, `${c}^${n} = ${c ** n}`, `(${v}^${m})^${n} = ${v}^${m * n}`, `${c ** n}${v}^${m * n}`], alTraps: [tr(`${c}${v}^${m * n}`, `The ${c} is inside the bracket, so it is raised to the power ${n} too: ${c}^${n} = ${c ** n}.`), tr(`${c * n}${v}^${m * n}`, `${c}^${n} means ${Array(n).fill(c).join(' × ')}, not ${c} × ${n}.`), tr(`${c ** n}${v}^${m + n}`, 'Power of a power: multiply the indices.')] });
    }
    if (kind === 'twoletters') {
      const p = int(r, 2, 6), q = int(r, 2, 6), a1 = int(r, 2, 4), b2 = int(r, 2, 4);
      return makeA(this.id, level, seed, { prompt: `Simplify ${p}a^${a1}b × ${q}ab^${b2}`, answer: A(`${p * q}a^${a1 + 1}b^${b2 + 1}`, 'simplified', ['a', 'b']), steps: [`Numbers: ${p} × ${q} = ${p * q}`, `a: a^${a1} × a = a^${a1 + 1} (a means a^1)`, `b: b × b^${b2} = b^${b2 + 1}`, `${p * q}a^${a1 + 1}b^${b2 + 1}`], alTraps: [tr(`${p * q}a^${a1}b^${b2}`, 'a on its own means a^1: add its index too.'), tr(`${p + q}a^${a1 + 1}b^${b2 + 1}`, `Multiply the numbers: ${p} × ${q} = ${p * q}.`)] });
    }
    const q = int(r, 2, 5), k = int(r, 2, 5), p = q * k, x1 = int(r, 3, 7), y1 = int(r, 2, 4), x2 = int(r, 1, x1 - 1);
    return makeA(this.id, level, seed, { prompt: `Simplify {${p}x^${x1}y^${y1}/${q}x^${x2}y}`, answer: A(`${k}x^${x1 - x2}y^${y1 - 1}`.replace(/\^1(?!\d)/g, ''), 'simplified', ['x', 'y']), steps: [`Numbers: ${p} ÷ ${q} = ${k}`, `x: x^${x1} ÷ x^${x2} = x^${x1 - x2}`, `y: y^${y1} ÷ y = y^${y1 - 1}`, `${k}x^${x1 - x2}y^${y1 - 1}`.replace(/\^1(?!\d)/g, '')], alTraps: [tr(`${p - q}x^${x1 - x2}y^${y1 - 1}`, `Divide the numbers: ${p} ÷ ${q} = ${k}.`)] });
  },
};

/* ───────── A4 single brackets ───────── */
const linM = (a, v, b) => polyM([[a, v], [b, '']]);
const expandSingle = {
  id: 'maths.algebra.expand-single',
  name: 'Expand single brackets',
  levels: [{ label: 'Number outside' }, { label: 'Negative or letter outside' }, { label: 'Expand and simplify' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), v = pick(r, ['x', 'y', 'a', 'n', 'p']);
    const vars = ['x', 'y', 'a', 'b', 'n', 'p'];
    if (level === 1) {
      const k = int(r, 2, 9), a = int(r, 1, 5), b = nz(r, -9, 9);
      const ans = linM(k * a, v, k * b);
      return makeA(this.id, level, seed, { prompt: `Expand ${k}(${linM(a, v, b)})`, answer: A(ans, 'expanded', vars), steps: [`Multiply every term in the bracket by ${k}.`, `${k} × ${a === 1 ? v : a + v} = ${k * a}${v}`, `${k} × ${bracket(b)} = ${k * b}`, `Answer: ${ans}`], alTraps: [tr(linM(k * a, v, b), `Multiply every term inside the bracket by ${k}, including the ${Math.abs(b)}.`), tr(linM(a, v, k * b), `Multiply the ${a === 1 ? v : a + v} by ${k} as well.`)] });
    }
    if (level === 2) {
      const kind = pick(r, ['neg', 'letter', 'letter2']);
      if (kind === 'neg') {
        const k = int(r, 2, 7), a = int(r, 1, 4), b = nz(r, -9, 9);
        const ans = linM(-k * a, v, -k * b);
        return makeA(this.id, level, seed, { prompt: `Expand −${k}(${linM(a, v, b)})`, answer: A(ans, 'expanded', vars), steps: [`Multiply every term by −${k}.`, `−${k} × ${a === 1 ? v : a + v} = ${-k * a}${v}`.replace('-', '−'), `−${k} × ${bracket(b)} = ${num(-k * b)}`, `Answer: ${ans}`], alTraps: [tr(linM(-k * a, v, k * b), `−${k} × ${bracket(b)} = ${num(-k * b)}: a negative times a ${b < 0 ? 'negative is positive' : 'positive is negative'}.`), tr(linM(-k * a, v, b), `Multiply both terms by −${k}.`)] });
      }
      if (kind === 'letter') {
        const b = nz(r, -9, 9);
        const ans = polyM([[1, `${v}^2`], [b, v]]);
        return makeA(this.id, level, seed, { prompt: `Expand ${v}(${linM(1, v, b)})`, answer: A(ans, 'expanded', vars), steps: [`${v} × ${v} = ${v}^2`, `${v} × ${bracket(b)} = ${num(b)}${v}`, `Answer: ${ans}`], alTraps: [tr(polyM([[2, v], [b, v]]), `Multiplying ${v} by itself gives ${v}^2; 2${v} would mean ${v} + ${v}.`), tr(polyM([[1, `${v}^2`], [b, '']]), `Multiply the ${Math.abs(b)} by ${v} as well: ${num(b)}${v}.`)] });
      }
      const p = int(r, 2, 5), q = int(r, 2, 5), s = nz(r, -6, 6);
      const ans = polyM([[p * q, 'a^2'], [p * s, 'ab']]);
      return makeA(this.id, level, seed, { prompt: `Expand ${p}a(${polyM([[q, 'a'], [s, 'b']])})`, answer: A(ans, 'expanded', vars), steps: [`${p}a × ${q}a = ${p * q}a^2`, `${p}a × ${s < 0 ? '(−' + Math.abs(s) + 'b)' : s + 'b'} = ${num(p * s)}ab`, `Answer: ${ans}`], alTraps: [tr(polyM([[p * q, 'a'], [p * s, 'ab']]), `Multiplying a by itself gives a^2, so ${p}a × ${q}a = ${p * q}a^2.`), tr(polyM([[p * q, 'a^2'], [s, 'b']]), `Multiply the second term by ${p}a too.`)] });
    }
    const kind = pick(r, ['sum', 'diff', 'letter']);
    if (kind === 'letter') {
      const b = nz(r, -7, 7), c = int(r, 2, 6), d = nz(r, -7, 7);
      const terms = [[1, `${v}^2`], [b, v], [c, v], [c * d, '']];
      const ans = polyM(collect(terms));
      return makeA(this.id, level, seed, { prompt: `Expand and simplify ${v}(${linM(1, v, b)}) + ${c}(${linM(1, v, d)})`, answer: A(ans, 'expanded', vars), steps: [`${v}(${linM(1, v, b)}) = ${polyM([[1, `${v}^2`], [b, v]])}`, `${c}(${linM(1, v, d)}) = ${linM(c, v, c * d)}`, `Collect: ${ans}`], alTraps: [tr(polyM(collect([[1, `${v}^2`], [b, v], [c, v], [d, '']])), `Multiply both terms in the second bracket by ${c}.`)] });
    }
    const p = int(r, 2, 6), a = int(r, 1, 3), b = nz(r, -6, 6), q = int(r, 2, 6), c = int(r, 1, 3), d = nz(r, -6, 6);
    const minus = kind === 'diff', Q = minus ? -q : q;
    const res = collect([[p * a, v], [p * b, ''], [Q * c, v], [Q * d, '']]);
    if (!res.length || res.length < 2) return this.gen(level, seed + 'x');
    const ans = polyM(res);
    const traps = [];
    if (minus) traps.push(tr(polyM(collect([[p * a, v], [p * b, ''], [-q * c, v], [q * d, '']])), `The −${q} multiplies both terms: −${q} × ${bracket(d)} = ${num(-q * d)}.`));
    traps.push(tr(polyM(collect([[p * a, v], [b, ''], [Q * c, v], [d, '']])), 'Multiply every term in each bracket.'));
    return makeA(this.id, level, seed, { prompt: `Expand and simplify ${p}(${linM(a, v, b)}) ${minus ? '−' : '+'} ${q}(${linM(c, v, d)})`, answer: A(ans, 'expanded', vars), steps: [`${p}(${linM(a, v, b)}) = ${linM(p * a, v, p * b)}`, `${minus ? '−' : '+'}${q}(${linM(c, v, d)}) = ${linM(Q * c, v, Q * d)}`, `Collect like terms: ${ans}`], alTraps: traps });
  },
};

const factoriseSingle = {
  id: 'maths.algebra.factorise-single',
  name: 'Factorise into a single bracket',
  levels: [{ label: 'Number factor' }, { label: 'Letter factor' }, { label: 'Two letters, highest common factor' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), v = pick(r, ['x', 'y', 'a', 'n', 'p']);
    const vars = ['x', 'y', 'a', 'b', 'n', 'p'];
    for (let t = 0; t < 50; t++) {
      if (level === 1) {
        const k = int(r, 2, 9), a = int(r, 1, 6), b = nz(r, -9, 9);
        if (gcd(a, b) !== 1) continue;
        const inside = linM(a, v, b), given = linM(k * a, v, k * b);
        return makeA(this.id, level, seed, { prompt: `Factorise ${given}`, answer: A(`${k}(${inside})`, 'factorised', vars), steps: [`The highest common factor of ${k * a} and ${Math.abs(k * b)} is ${k}.`, `${k * a}${v} ÷ ${k} = ${a === 1 ? '' : a}${v}, ${num(k * b)} ÷ ${k} = ${num(b)}`, `${k}(${inside})`, `Check: expanding gives ${given}.`], alTraps: [tr(`${k}(${linM(a, v, k * b)})`, `Divide every term by ${k}: ${num(k * b)} ÷ ${k} = ${num(b)}.`)] });
      }
      if (level === 2) {
        if (r() < 0.5) {
          const b = nz(r, -9, 9);
          return makeA(this.id, level, seed, { prompt: `Factorise ${polyM([[1, `${v}^2`], [b, v]])}`, answer: A(`${v}(${linM(1, v, b)})`, 'factorised', vars), steps: [`Both terms contain ${v}.`, `${v}^2 ÷ ${v} = ${v}, ${num(b)}${v} ÷ ${v} = ${num(b)}`, `${v}(${linM(1, v, b)})`], alTraps: [tr(`${v}(${polyM([[1, `${v}^2`], [b, '']])})`, `Divide each term by ${v}: ${v}^2 ÷ ${v} = ${v}, leaving ${v} in the bracket.`)] });
        }
        const k = int(r, 2, 6), a = int(r, 1, 5), b = nz(r, -7, 7);
        if (gcd(a, b) !== 1) continue;
        return makeA(this.id, level, seed, { prompt: `Factorise ${polyM([[k * a, `${v}^2`], [k * b, v]])}`, answer: A(`${k}${v}(${linM(a, v, b)})`, 'factorised', vars), steps: [`Highest common factor: ${k}${v} (the number ${k} and the letter ${v}).`, `${k * a}${v}^2 ÷ ${k}${v} = ${a === 1 ? '' : a}${v}; ${num(k * b)}${v} ÷ ${k}${v} = ${num(b)}`, `${k}${v}(${linM(a, v, b)})`], alTraps: [] });
      }
      const k = int(r, 2, 6), p = int(r, 1, 5), q = nz(r, -6, 6);
      if (gcd(p, q) !== 1) continue;
      if (r() < 0.5) {
        const given = polyM([[k * p, 'ab'], [k * q, 'a']]);
        return makeA(this.id, level, seed, { prompt: `Factorise ${given}`, answer: A(`${k}a(${linM(p, 'b', q)})`, 'factorised', ['a', 'b']), steps: [`Highest common factor: ${k}a.`, `${k * p}ab ÷ ${k}a = ${p === 1 ? '' : p}b; ${num(k * q)}a ÷ ${k}a = ${num(q)}`, `${k}a(${linM(p, 'b', q)})`], alTraps: [] });
      }
      const given = polyM([[k * p, 'x^2y'], [k * q, 'xy^2']]);
      return makeA(this.id, level, seed, { prompt: `Factorise ${given}`, answer: A(`${k}xy(${polyM([[p, 'x'], [q, 'y']])})`, 'factorised', ['x', 'y']), steps: [`Highest common factor: ${k}xy (both terms contain x and y).`, `${k * p}x^2y ÷ ${k}xy = ${p === 1 ? '' : p}x; ${num(k * q)}xy^2 ÷ ${k}xy = ${num(q)}y`, `${k}xy(${polyM([[p, 'x'], [q, 'y']])})`], alTraps: [] });
    }
    throw new Error('factorise-single: no item');
  },
};

/* ───────── A4 double brackets and quadratics ───────── */
const binM = (p, v, a) => polyM([[p, v], [a, '']]);
const expandDouble = {
  id: 'maths.algebra.expand-double',
  name: 'Expand double brackets',
  levels: [{ label: '(x + a)(x + b)' }, { label: 'Negatives, squares and coefficients' }, { label: 'Three brackets', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), v = pick(r, ['x', 'y', 'a', 'n']);
    const vars = ['x', 'y', 'a', 'n'];
    if (level === 1) {
      const a = int(r, 1, 9), b = int(r, 1, 9);
      const ans = polyM([[1, `${v}^2`], [a + b, v], [a * b, '']]);
      return makeA(this.id, level, seed, { prompt: `Expand and simplify (${binM(1, v, a)})(${binM(1, v, b)})`, answer: A(ans, 'expanded', vars), steps: [`Multiply each term in the first bracket by each term in the second: ${v} × ${v} = ${v}^2, ${v} × ${b} = ${b}${v}, ${a} × ${v} = ${a}${v}, ${a} × ${b} = ${a * b}`, `${v}^2 + ${b}${v} + ${a}${v} + ${a * b}`, `Collect: ${ans}`], alTraps: [tr(polyM([[1, `${v}^2`], [a * b, '']]), `There are four products. The middle terms ${b}${v} and ${a}${v} are missing.`), tr(polyM([[1, `${v}^2`], [a + b, v], [a + b, '']]), `Multiply the numbers: ${a} × ${b} = ${a * b}.`)] });
    }
    if (level === 2) {
      const kind = pick(r, ['mixed', 'square', 'coef']);
      if (kind === 'square') {
        const a = nz(r, -9, 9);
        const ans = polyM([[1, `${v}^2`], [2 * a, v], [a * a, '']]);
        return makeA(this.id, level, seed, { prompt: `Expand and simplify (${binM(1, v, a)})^2`, answer: A(ans, 'expanded', vars), steps: [`(${binM(1, v, a)})^2 = (${binM(1, v, a)})(${binM(1, v, a)})`, `${v}^2 ${a < 0 ? '−' : '+'} ${Math.abs(a)}${v} ${a < 0 ? '−' : '+'} ${Math.abs(a)}${v} + ${a * a}`, `Collect: ${ans}`], alTraps: [tr(polyM([[1, `${v}^2`], [a * a, '']]), `Squaring a bracket is not squaring each term. Write it as two brackets: there are two middle terms of ${num(a)}${v}.`), tr(polyM([[1, `${v}^2`], [-a * a, '']]), 'Write it as two brackets and multiply out all four products.')] });
      }
      if (kind === 'coef') {
        const p = int(r, 2, 3), a = nz(r, -7, 7), q = int(r, 1, 3), b = nz(r, -7, 7);
        const ans = polyM([[p * q, `${v}^2`], [p * b + a * q, v], [a * b, '']]);
        if (p * b + a * q === 0) return this.gen(level, seed + 'c');
        return makeA(this.id, level, seed, { prompt: `Expand and simplify (${binM(p, v, a)})(${binM(q, v, b)})`, answer: A(ans, 'expanded', vars), steps: [`${p}${v} × ${q === 1 ? '' : q}${v} = ${p * q}${v}^2`, `${p}${v} × ${bracket(b)} = ${num(p * b)}${v}; ${bracket(a)} × ${q === 1 ? '' : q}${v} = ${num(a * q)}${v}`, `${bracket(a)} × ${bracket(b)} = ${num(a * b)}`, `Collect: ${ans}`], alTraps: [tr(polyM([[p * q, `${v}^2`], [a * b, '']]), 'There are four products: include the two middle terms.'), tr(polyM([[p * q, `${v}^2`], [a + b, v], [a * b, '']]), `The middle terms are ${p}${v} × ${bracket(b)} and ${bracket(a)} × ${q === 1 ? '' : q}${v}: include the coefficients.`)] });
      }
      const a = nz(r, -9, 9), b = nz(r, -9, 9);
      if (a + b === 0 || (a > 0 && b > 0)) return this.gen(level, seed + 'm');
      const ans = polyM([[1, `${v}^2`], [a + b, v], [a * b, '']]);
      return makeA(this.id, level, seed, { prompt: `Expand and simplify (${binM(1, v, a)})(${binM(1, v, b)})`, answer: A(ans, 'expanded', vars), steps: [`${v} × ${v} = ${v}^2`, `${v} × ${bracket(b)} = ${num(b)}${v}; ${bracket(a)} × ${v} = ${num(a)}${v}`, `${bracket(a)} × ${bracket(b)} = ${num(a * b)}`, `Collect: ${ans}`], alTraps: [tr(polyM([[1, `${v}^2`], [a + b, v], [-a * b, '']]), `${bracket(a)} × ${bracket(b)} = ${num(a * b)}: check the sign.`), tr(polyM([[1, `${v}^2`], [a * b, '']]), 'Include the two middle terms.')] });
    }
    const a = nz(r, -5, 5), b = nz(r, -5, 5), c = nz(r, -4, 4);
    const s1 = a + b + c, s2 = a * b + b * c + a * c, s3 = a * b * c;
    const ans = polyM([[1, `${v}^3`], [s1, `${v}^2`], [s2, v], [s3, '']]);
    const two = polyM([[1, `${v}^2`], [a + b, v], [a * b, '']]);
    return makeA(this.id, level, seed, { prompt: `Expand and simplify (${binM(1, v, a)})(${binM(1, v, b)})(${binM(1, v, c)})`, answer: A(ans, 'expanded', vars), steps: [`Expand the first two brackets: (${binM(1, v, a)})(${binM(1, v, b)}) = ${two}`, `Multiply each term of ${two} by each term of (${binM(1, v, c)}).`, `Collect: ${ans}`], alTraps: [tr(polyM([[1, `${v}^3`], [s3, '']]), 'Multiply every term by every term: there are several middle terms to collect.')] });
  },
};

const factoriseQuadratic = {
  id: 'maths.algebra.factorise-quadratic',
  name: 'Factorise quadratic expressions',
  levels: [{ label: 'x² + bx + c' }, { label: 'Negative terms and difference of two squares' }, { label: 'ax² + bx + c', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), v = pick(r, ['x', 'y', 'a', 'n']);
    const vars = ['x', 'y', 'a', 'n'];
    if (level === 1) {
      const p = int(r, 1, 9), q = int(r, 1, 9);
      const given = polyM([[1, `${v}^2`], [p + q, v], [p * q, '']]);
      const pairs = [];
      for (let d = 1; d * d <= p * q; d++) if ((p * q) % d === 0) pairs.push([d, (p * q) / d]);
      const wrongPair = pairs.find(([d, e]) => d + e !== p + q);
      return makeA(this.id, level, seed, { prompt: `Factorise ${given}`, answer: A(`(${binM(1, v, p)})(${binM(1, v, q)})`, 'factorised', vars), steps: [`Find two numbers that multiply to ${p * q} and add to ${p + q}: ${p} and ${q}.`, `${given} = (${binM(1, v, p)})(${binM(1, v, q)})`, `Check: ${p} × ${q} = ${p * q} and ${p} + ${q} = ${p + q}.`], alTraps: wrongPair ? [tr(`(${binM(1, v, wrongPair[0])})(${binM(1, v, wrongPair[1])})`, `${wrongPair[0]} and ${wrongPair[1]} multiply to ${p * q} but add to ${wrongPair[0] + wrongPair[1]}, not ${p + q}.`)] : [] });
    }
    if (level === 2) {
      const kind = pick(r, ['mixed', 'mixed', 'dots']);
      if (kind === 'dots') {
        const k = int(r, 2, 12);
        return makeA(this.id, level, seed, { prompt: `Factorise ${v}^2 − ${k * k}`, answer: A(`(${binM(1, v, k)})(${binM(1, v, -k)})`, 'factorised', vars), steps: [`${v}^2 − ${k * k} is a difference of two squares: ${v}^2 − ${k}^2.`, `a^2 − b^2 = (a + b)(a − b)`, `(${binM(1, v, k)})(${binM(1, v, -k)})`], alTraps: [tr(`(${binM(1, v, -k)})^2`, `(${v} − ${k})^2 gives ${v}^2 − ${2 * k}${v} + ${k * k}. The middle terms must cancel: use one + and one −.`), tr(`(${binM(1, v, k)})^2`, 'The middle terms must cancel: use one + and one −.')] });
      }
      const p = nz(r, -9, 9), q = nz(r, -9, 9);
      if ((p > 0 && q > 0) || p + q === 0) return this.gen(level, seed + 'q');
      const given = polyM([[1, `${v}^2`], [p + q, v], [p * q, '']]);
      return makeA(this.id, level, seed, { prompt: `Factorise ${given}`, answer: A(`(${binM(1, v, p)})(${binM(1, v, q)})`, 'factorised', vars), steps: [`Find two numbers that multiply to ${num(p * q)} and add to ${num(p + q)}: ${num(p)} and ${num(q)}.`, `${given} = (${binM(1, v, p)})(${binM(1, v, q)})`], alTraps: [tr(`(${binM(1, v, -p)})(${binM(1, v, -q)})`, `Those numbers add to ${num(-p - q)}. Check the signs: they must multiply to ${num(p * q)} and add to ${num(p + q)}.`)] });
    }
    if (r() < 0.25) {
      const a = int(r, 2, 5), b = int(r, 1, 9);
      if (gcd(a, b) !== 1) return this.gen(level, seed + 'd');
      return makeA(this.id, level, seed, { prompt: `Factorise ${a * a}${v}^2 − ${b * b}`, answer: A(`(${binM(a, v, b)})(${binM(a, v, -b)})`, 'factorised', vars), steps: [`${a * a}${v}^2 = (${a}${v})^2 and ${b * b} = ${b}^2: a difference of two squares.`, `(${binM(a, v, b)})(${binM(a, v, -b)})`], alTraps: [tr(`(${binM(a * a, v, b)})(${binM(1, v, -b)})`, `${a * a}${v}^2 is (${a}${v})^2: each bracket starts with ${a}${v}.`)] });
    }
    for (let t = 0; t < 50; t++) {
      const a = int(r, 2, 5), p = nz(r, -7, 7), q = nz(r, -7, 7);
      if (gcd(a, p) !== 1) continue;
      const B = a * q + p, C = p * q;
      if (B === 0) continue;
      const given = polyM([[a, `${v}^2`], [B, v], [C, '']]);
      const swapped = `(${binM(a, v, q)})(${binM(1, v, p)})`;
      return makeA(this.id, level, seed, { prompt: `Factorise ${given}`, answer: A(`(${binM(a, v, p)})(${binM(1, v, q)})`, 'factorised', vars), steps: [`Multiply ${a} × ${num(C)} = ${num(a * C)}. Find two numbers that multiply to ${num(a * C)} and add to ${num(B)}: ${num(a * q)} and ${num(p)}.`, `Split the middle term: ${polyM([[a, `${v}^2`], [a * q, v], [p, v], [C, '']])}`, `Factorise in pairs: ${a}${v}(${binM(1, v, q)}) ${p < 0 ? '−' : '+'} ${Math.abs(p)}(${binM(1, v, q)})`, `= (${binM(a, v, p)})(${binM(1, v, q)})`], alTraps: [tr(swapped, `Expand to check: ${swapped} does not give ${num(B)}${v} in the middle. Swap the numbers in the brackets.`)] });
    }
    throw new Error('factorise-quadratic: no item');
  },
};

/* ───────── A17 linear equations ───────── */
const X = { var: 'x' };
const solve = {
  id: 'maths.algebra.solve',
  name: 'Solve one- and two-step equations',
  levels: [{ label: 'One and two steps' }, { label: 'Negatives and fraction answers' }, { label: 'Fractions in the equation' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, ['add', 'mul', 'div', 'two', 'two']);
      if (kind === 'add') { const a = int(r, 2, 20), x = int(r, 1, 20); return make(this.id, level, seed, { prompt: `Solve x + ${a} = ${x + a}`, answer: intAns(x, X), steps: [`Subtract ${a} from both sides.`, `x = ${x + a} − ${a} = ${x}`], traps: [tv(x + 2 * a, `Undo + ${a} by subtracting ${a}.`)], note: 'Give the value of x.' }); }
      if (kind === 'mul') { const a = int(r, 2, 12), x = int(r, 2, 12); return make(this.id, level, seed, { prompt: `Solve ${a}x = ${a * x}`, answer: intAns(x, X), steps: [`${a}x means ${a} × x. Divide both sides by ${a}.`, `x = ${a * x} ÷ ${a} = ${x}`], traps: [tv(a * x - a, `${a}x means ${a} × x: divide by ${a}, do not subtract.`)] }); }
      if (kind === 'div') { const a = int(r, 2, 9), x = a * int(r, 2, 9); return make(this.id, level, seed, { prompt: `Solve {x/${a}} = ${x / a}`, answer: intAns(x, X), steps: [`Multiply both sides by ${a}.`, `x = ${x / a} × ${a} = ${x}`], traps: [tv(F(x / a, a), `Undo dividing by ${a} by multiplying by ${a}.`)] }); }
      const a = int(r, 2, 9), b = int(r, 1, 15), x = int(r, 1, 12), c = a * x + b;
      return make(this.id, level, seed, { prompt: `Solve ${a}x + ${b} = ${c}`, answer: intAns(x, X), steps: [`Subtract ${b} from both sides: ${a}x = ${c - b}`, `Divide both sides by ${a}: x = ${x}`], traps: [tv(F(c + b, a), `Undo + ${b} by subtracting ${b}, not adding.`), tv(F(c, a) && sub(F(c, a), F(b)), `Undo the + ${b} first, then divide by ${a}.`)] });
    }
    if (level === 2) {
      const kind = pick(r, ['negx', 'divadd', 'aminus', 'frac']);
      if (kind === 'negx') { const a = int(r, 2, 9), b = int(r, 1, 15), x = nz(r, -9, 9), c = a * x - b; return make(this.id, level, seed, { prompt: `Solve ${a}x − ${b} = ${num(c)}`, answer: intAns(x, X), steps: [`Add ${b} to both sides: ${a}x = ${num(c + b)}`, `Divide by ${a}: x = ${num(x)}`], traps: [tv(F(c - b, a), `Undo − ${b} by adding ${b}.`)] }); }
      if (kind === 'divadd') { const a = int(r, 2, 6), b = int(r, 1, 9), q = nz(r, -6, 9), x = a * q, c = q + b; return make(this.id, level, seed, { prompt: `Solve {x/${a}} + ${b} = ${num(c)}`, answer: intAns(x, X), steps: [`Subtract ${b}: {x/${a}} = ${num(q)}`, `Multiply by ${a}: x = ${num(x)}`], traps: [tv(a * c - b, `Subtract ${b} first, then multiply by ${a}.`)] }); }
      if (kind === 'aminus') { const a = int(r, 5, 20), x = int(r, 1, 25), b = a - x; return make(this.id, level, seed, { prompt: `Solve ${a} − x = ${num(b)}`, answer: intAns(x, X), steps: [`Add x to both sides: ${a} = ${num(b)} + x`, `Subtract ${bracket(b)}: x = ${a} − ${bracket(b)} = ${x}`], traps: [tv(b - a, `If ${a} − x = ${num(b)}, then x = ${a} − ${bracket(b)}. Substitute to check: ${a} − ${num(b - a)} is not ${num(b)}.`)] }); }
      for (;;) {
        const a = int(r, 2, 8), b = nz(r, -9, 9), num_ = int(r, 1, 30);
        const xf = F(num_ - b, a);
        if (xf.d === 1) continue;
        return make(this.id, level, seed, { prompt: `Solve ${a}x ${b < 0 ? '−' : '+'} ${Math.abs(b)} = ${num_}`, answer: valAns(xf, X), steps: [`${b < 0 ? 'Add' : 'Subtract'} ${Math.abs(b)}: ${a}x = ${num_ - b}`, `Divide by ${a}: x = ${fv(F(num_ - b, a))}`, 'A fraction answer is fine; you may also give it as a decimal or mixed number.'], traps: [tv(F(num_ + b, a), `To undo ${b < 0 ? '− ' : '+ '}${Math.abs(b)}, ${b < 0 ? 'add' : 'subtract'} ${Math.abs(b)} on both sides.`), tv(F(a, num_ - b), `Divide ${num_ - b} by ${a}, not ${a} by ${num_ - b}.`)] });
      }
    }
    if (r() < 0.5) {
      const a = int(r, 2, 6), b = nz(r, -9, 9), c = nz(r, -8, 9), x = a * c - b;
      return make(this.id, level, seed, { prompt: `Solve {x ${b < 0 ? '−' : '+'} ${Math.abs(b)}/${a}} = ${num(c)}`, answer: intAns(x, X), steps: [`Multiply both sides by ${a}: x ${b < 0 ? '−' : '+'} ${Math.abs(b)} = ${num(a * c)}`, `${b < 0 ? 'Add' : 'Subtract'} ${Math.abs(b)}: x = ${num(x)}`], traps: [tv(F(c - b, 1) && F(a * (c - b)), `The whole of x ${b < 0 ? '−' : '+'} ${Math.abs(b)} is divided by ${a}: multiply both sides by ${a} first.`), tv(add(F(c, a), F(-b)), `Multiply by ${a} to undo the division.`)] });
    }
    for (;;) {
      const a = int(r, 2, 5), b = nz(r, -9, 9), c = int(r, 2, 5), d = nz(r, -6, 8);
      const xf = F(c * d - b, a);
      if (xf.n === 0) continue;
      return make(this.id, level, seed, { prompt: `Solve {${a}x ${b < 0 ? '−' : '+'} ${Math.abs(b)}/${c}} = ${num(d)}`, answer: valAns(xf, X), steps: [`Multiply both sides by ${c}: ${a}x ${b < 0 ? '−' : '+'} ${Math.abs(b)} = ${num(c * d)}`, `${b < 0 ? 'Add' : 'Subtract'} ${Math.abs(b)}: ${a}x = ${num(c * d - b)}`, `Divide by ${a}: x = ${fv(xf)}`], traps: [tv(F(d - b, a), `Multiply both sides by ${c} first: the whole of ${a}x ${b < 0 ? '−' : '+'} ${Math.abs(b)} is divided by ${c}.`)] });
    }
  },
};

const solveBoth = {
  id: 'maths.algebra.solve-both-sides',
  name: 'Solve equations with brackets or x on both sides',
  levels: [{ label: 'Brackets' }, { label: 'Unknown on both sides' }, { label: 'Brackets on both sides' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 2, 7), b = nz(r, -8, 8), x = nz(r, -6, 10), c = a * (x + b);
      return make(this.id, level, seed, { prompt: `Solve ${a}(x ${b < 0 ? '−' : '+'} ${Math.abs(b)}) = ${num(c)}`, answer: intAns(x, X), steps: [`Expand: ${a}x ${a * b < 0 ? '−' : '+'} ${Math.abs(a * b)} = ${num(c)} (or divide both sides by ${a} first)`, `${a * b < 0 ? 'Add' : 'Subtract'} ${Math.abs(a * b)}: ${a}x = ${num(c - a * b)}`, `Divide by ${a}: x = ${num(x)}`], traps: [tv(F(c - b, a), `${a} multiplies both terms in the bracket: ${a}(x ${b < 0 ? '−' : '+'} ${Math.abs(b)}) = ${a}x ${a * b < 0 ? '−' : '+'} ${Math.abs(a * b)}.`)] });
    }
    if (level === 2) {
      for (;;) {
        const a = int(r, 2, 9), c = int(r, 1, 8), b = nz(r, -12, 12), x = nz(r, -8, 10);
        if (a === c) continue;
        const d = (a - c) * x + b;
        const L = polyM([[a, 'x'], [b, '']]), Rr = polyM([[c, 'x'], [d, '']]);
        return make(this.id, level, seed, { prompt: `Solve ${L} = ${Rr}`, answer: intAns(x, X), steps: [`Subtract ${c === 1 ? '' : c}x from both sides: ${polyM([[a - c, 'x'], [b, '']])} = ${num(d)}`, `${b < 0 ? 'Add' : 'Subtract'} ${Math.abs(b)}: ${a - c === 1 ? '' : a - c}x = ${num(d - b)}`, `${a - c === 1 ? '' : `Divide by ${a - c}: `}x = ${num(x)}`], traps: [tv(F(d + b, a - c), `Moving ${num(b)} to the other side changes its sign: ${b < 0 ? 'add' : 'subtract'} ${Math.abs(b)} ${b < 0 ? 'to' : 'from'} both sides.`), tv(F(d - b, a + c), `Subtract ${c === 1 ? '' : c}x from both sides: ${a}x − ${c === 1 ? '' : c}x = ${a - c === 1 ? '' : a - c}x.`)] });
      }
    }
    for (;;) {
      const a = int(r, 2, 6), b = nz(r, -6, 6), c = int(r, 1, 5), d = nz(r, -6, 6);
      if (a === c) continue;
      const xf = F(c * d - a * b, a - c);
      if (xf.n === 0) continue;
      return make(this.id, level, seed, { prompt: `Solve ${a}(x ${b < 0 ? '−' : '+'} ${Math.abs(b)}) = ${c === 1 ? '' : c}(x ${d < 0 ? '−' : '+'} ${Math.abs(d)})`.replace('= (', '= ('), answer: valAns(xf, X), steps: [`Expand both sides: ${polyM([[a, 'x'], [a * b, '']])} = ${polyM([[c, 'x'], [c * d, '']])}`, `Subtract ${c === 1 ? '' : c}x: ${polyM([[a - c, 'x'], [a * b, '']])} = ${num(c * d)}`, `${a * b < 0 ? 'Add' : 'Subtract'} ${Math.abs(a * b)}: ${a - c === 1 ? '' : a - c}x = ${num(c * d - a * b)}`, `x = ${fv(xf)}`], traps: [tv(F(c * d - b, a - c), `Expand fully: ${a} × ${bracket(b)} = ${num(a * b)}.`), tv(F(d - b, a - c), 'Multiply out both brackets before collecting.')] });
    }
  },
};

const formSolve = {
  id: 'maths.algebra.form-solve',
  name: 'Form and solve equations',
  levels: [{ label: 'Think of a number' }, { label: 'Perimeters and angles' }, { label: 'Ages and costs' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 2, 9), b = int(r, 1, 20), x = int(r, 2, 15);
      if (r() < 0.5) return make(this.id, level, seed, { prompt: `I think of a number, multiply it by ${a}, then add ${b}. The answer is ${a * x + b}. What is my number?`, answer: intAns(x), steps: [`Call the number x: ${a}x + ${b} = ${a * x + b}`, `Subtract ${b}: ${a}x = ${a * x}`, `Divide by ${a}: x = ${x}`], traps: [tv(F(a * x + 2 * b, a), `Undo the steps in reverse order: subtract ${b}, then divide by ${a}.`)] });
      return make(this.id, level, seed, { prompt: `I think of a number, subtract ${b}, then multiply by ${a}. The answer is ${num(a * (x - b))}. What is my number?`, answer: intAns(x), steps: [`Call the number x: ${a}(x − ${b}) = ${num(a * (x - b))}`, `Divide by ${a}: x − ${b} = ${num(x - b)}`, `Add ${b}: x = ${x}`], traps: [tv(F(a * (x - b) + b, a), `The subtraction happened first, so undo the multiplication first: divide by ${a}, then add ${b}.`)] });
    }
    if (level === 2) {
      if (r() < 0.5) {
        const p = int(r, 1, 4), q = int(r, 1, 9), s = int(r, 1, 3), t = nz(r, -2, 9), x = int(r, 3, 12);
        if (s * x + t <= 0) return this.gen(level, seed + 'p');
        const P = 2 * (p * x + q) + 2 * (s * x + t);
        return make(this.id, level, seed, { prompt: `A rectangle has length (${binM(p, 'x', q)}) cm and width (${binM(s, 'x', t)}) cm. Its perimeter is ${P} cm. Find x.`, answer: intAns(x), steps: [`Perimeter = 2 lengths + 2 widths: 2(${binM(p, 'x', q)}) + 2(${binM(s, 'x', t)}) = ${P}`, `${polyM([[2 * (p + s), 'x'], [2 * (q + t), '']])} = ${P}`, `${2 * (p + s)}x = ${P - 2 * (q + t)}`, `x = ${x}`], traps: [tv(F(P - q - t, p + s), 'The perimeter includes all four sides: two lengths and two widths.')] });
      }
      const a = int(r, 2, 6), b = int(r, 5, 40), c = int(r, 1, 5), x = int(r, 8, 25), d = 180 - b - (a + c) * x;
      if (d <= 0) return this.gen(level, seed + 'a');
      return make(this.id, level, seed, { prompt: `Two angles on a straight line are (${a}x + ${b})° and (${c === 1 ? '' : c}x + ${d})°. Find x.`, answer: intAns(x), steps: ['Angles on a straight line add up to 180°.', `${a}x + ${b} + ${c === 1 ? '' : c}x + ${d} = 180`, `${a + c}x + ${b + d} = 180, so ${a + c}x = ${180 - b - d}`, `x = ${x}`], traps: [tv(F(360 - b - d, a + c), 'Angles on a straight line add up to 180°, not 360°.')] });
    }
    if (r() < 0.5) {
      const x = int(r, 6, 20), a = int(r, 2, 9), k = int(r, 2, 3), T = x + (x + a) + k * (x + a);
      return make(this.id, level, seed, { prompt: `Ali is x years old. Ben is ${a} years older than Ali. Cara is ${k === 2 ? 'twice' : 'three times'} as old as Ben. Their ages add up to ${T}. How old is Ali?`, answer: intAns(x), steps: [`Ben: x + ${a}. Cara: ${k}(x + ${a}) = ${k}x + ${k * a}`, `x + x + ${a} + ${k}x + ${k * a} = ${T}`, `${k + 2}x + ${a + k * a} = ${T}, so ${k + 2}x = ${T - a - k * a}`, `x = ${x}`], traps: [tv(F(T - 2 * a, k + 2), `Cara's age is ${k}(x + ${a}): the ${a} is multiplied by ${k} too.`)] });
    }
    const x = int(r, 20, 90), a = int(r, 10, 60), m = int(r, 2, 4), n = int(r, 2, 4), T = m * x + n * (x + a);
    return make(this.id, level, seed, { prompt: `A pen costs x pence. A notebook costs ${a}p more than a pen. ${m} pens and ${n} notebooks cost ${T}p in total. Find x.`, answer: intAns(x), steps: [`Notebook: x + ${a}`, `${m}x + ${n}(x + ${a}) = ${T}`, `${m + n}x + ${n * a} = ${T}, so ${m + n}x = ${T - n * a}`, `x = ${x}`], traps: [tv(F(T - a, m + n), `Each of the ${n} notebooks costs ${a}p more: that is ${n * a}p extra in total.`)] });
  },
};

/* ───────── A5 formulae ───────── */
const formulaUse = {
  id: 'maths.algebra.formula-use',
  name: 'Use a formula to find an unknown',
  levels: [{ label: 'One step' }, { label: 'Two steps' }, { label: 'Squares in the formula' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, ['A=lw', 'P=4s', 'v=u+at']);
      if (kind === 'A=lw') { const l = int(r, 2, 12), w = int(r, 2, 12); return make(this.id, level, seed, { prompt: `A = lw. Find w when A = ${l * w} and l = ${l}.`, answer: valAns(F(w)), steps: [`Substitute: ${l * w} = ${l} × w`, `Divide by ${l}: w = ${w}`], traps: [tv(l * w - l, `${l}w means ${l} × w: divide by ${l}.`)] }); }
      if (kind === 'P=4s') { const s = F(int(r, 5, 60), 2); return make(this.id, level, seed, { prompt: `P = 4s. Find s when P = ${decText(mul(s, F(4)))}.`, answer: valAns(s), steps: [`${decText(mul(s, F(4)))} = 4s`, `s = ${decText(mul(s, F(4)))} ÷ 4 = ${decText(s)}`], traps: [tv(mul(s, F(16)), 'Divide by 4 to undo × 4.')] }); }
      const a = int(r, 2, 6), t = int(r, 2, 8), u = int(r, 0, 20), v = u + a * t;
      return make(this.id, level, seed, { prompt: `v = u + at. Find u when v = ${v}, a = ${a} and t = ${t}.`, answer: valAns(F(u)), steps: [`${v} = u + ${a} × ${t} = u + ${a * t}`, `u = ${v} − ${a * t} = ${u}`], traps: [tv(v + a * t, `Subtract ${a * t} to undo + ${a * t}.`)] });
    }
    if (level === 2) {
      const kind = pick(r, ['v=u+at', 'P=2l+2w', 'C=5(F-32)/9']);
      if (kind === 'v=u+at') { const a = int(r, 2, 9), t = int(r, 2, 8), u = int(r, 0, 20), v = u + a * t; return make(this.id, level, seed, { prompt: `v = u + at. Find a when v = ${v}, u = ${u} and t = ${t}.`, answer: valAns(F(a)), steps: [`${v} = ${u} + ${t}a`, `Subtract ${u}: ${v - u} = ${t}a`, `Divide by ${t}: a = ${a}`], traps: [tv(F(v, t) && sub(F(v, t), F(u)), `Subtract ${u} first, then divide by ${t}.`), tv(F(v + u, t), `Subtract ${u} to undo + ${u}.`)] }); }
      if (kind === 'P=2l+2w') { const l = int(r, 4, 20), w = int(r, 2, 15), P = 2 * l + 2 * w; return make(this.id, level, seed, { prompt: `P = 2l + 2w. Find w when P = ${P} and l = ${l}.`, answer: valAns(F(w)), steps: [`${P} = 2 × ${l} + 2w = ${2 * l} + 2w`, `2w = ${P - 2 * l}`, `w = ${w}`], traps: [tv(P - 2 * l, 'That is 2w: divide by 2.'), tv(F(P - l, 2), `2l = ${2 * l}: subtract ${2 * l}, not ${l}.`)] }); }
      const C = 5 * int(r, -3, 12), Fv = (9 * C) / 5 + 32;
      return make(this.id, level, seed, { prompt: `C = {5(F − 32)/9}. Find F when C = ${num(C)}.`, answer: valAns(F(Fv)), steps: [`Multiply by 9: ${9 * C} = 5(F − 32)`, `Divide by 5: ${(9 * C) / 5} = F − 32`, `Add 32: F = ${num(Fv)}`], traps: [tv(F(9 * C, 5), 'Remember to add 32 at the end.')] });
    }
    const kind = pick(r, ['E', 's', 'v2']);
    if (kind === 'E') { const m = 2 * int(r, 1, 6), v = int(r, 2, 9), E = (m * v * v) / 2; return make(this.id, level, seed, { prompt: `E = {1/2}mv^2. Find v when E = ${E} and m = ${m}. (v is positive.)`, answer: valAns(F(v)), steps: [`${E} = {1/2} × ${m} × v^2 = ${m / 2}v^2`, `v^2 = ${E} ÷ ${m / 2} = ${v * v}`, `v = √${v * v} = ${v}`], traps: [tv(v * v, `That is v^2. Take the square root: v = ${v}.`), tv(F(E, m), 'Multiply by 2 to undo the {1/2}, divide by m, then take the square root.')] }); }
    if (kind === 's') { const u = int(r, 0, 10), v = int(r, 4, 25), t = 2 * int(r, 1, 6), s = ((u + v) * t) / 2; return make(this.id, level, seed, { prompt: `s = {1/2}(u + v)t. Find v when s = ${s}, u = ${u} and t = ${t}.`, answer: valAns(F(v)), steps: [`${s} = {1/2}(${u} + v) × ${t} = ${t / 2}(${u} + v)`, `Divide by ${t / 2}: ${u + v} = ${u} + v`, `v = ${v}`], traps: [tv(F(2 * s, t), `That is u + v: subtract ${u}.`)] }); }
    const u = int(r, 1, 8), a = int(r, 1, 5), s = int(r, 2, 10), v = Math.sqrt(u * u + 2 * a * s);
    if (!Number.isInteger(v)) return this.gen(level, seed + 'v');
    return make(this.id, level, seed, { prompt: `v^2 = u^2 + 2as. Find s when v = ${v}, u = ${u} and a = ${a}.`, answer: valAns(F(s)), steps: [`${v * v} = ${u * u} + ${2 * a}s`, `${2 * a}s = ${v * v - u * u}`, `s = ${s}`], traps: [tv(F(v - u, 2 * a), 'Square v and u before subtracting: v^2 − u^2, not v − u.')] });
  },
};

const rearrange = {
  id: 'maths.algebra.rearrange',
  name: 'Change the subject of a formula',
  levels: [{ label: 'One step' }, { label: 'Two steps' }, { label: 'Squares, fractions and the subject twice' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const ask = (formula, subj, ans, vars, steps, traps) => makeA(this.id, level, seed, { prompt: `Make ${subj} the subject of ${formula}`, answer: A(ans, 'any', vars, { subject: subj }), steps, alTraps: traps, note: `Type ${subj} = … or just the expression.` });
    if (level === 1) {
      const kind = pick(r, ['plus', 'minus', 'times', 'over', 'lw']);
      const c = int(r, 2, 12), k = int(r, 2, 9);
      if (kind === 'plus') return ask(`y = x + ${c}`, 'x', `y − ${c}`, ['x', 'y'], [`Subtract ${c} from both sides: y − ${c} = x`, `x = y − ${c}`], [tr(`y + ${c}`, `Undo + ${c} by subtracting ${c}.`)]);
      if (kind === 'minus') return ask(`y = x − ${c}`, 'x', `y + ${c}`, ['x', 'y'], [`Add ${c} to both sides: y + ${c} = x`, `x = y + ${c}`], [tr(`y − ${c}`, `Undo − ${c} by adding ${c}.`)]);
      if (kind === 'times') return ask(`P = ${k}s`, 's', `{P/${k}}`, ['P', 's'], [`Divide both sides by ${k}.`, `s = {P/${k}}`], [tr(`${k}P`, `Undo × ${k} by dividing by ${k}.`), tr(`P − ${k}`, `${k}s means ${k} × s: divide by ${k}.`)]);
      if (kind === 'over') return ask(`y = {x/${k}}`, 'x', `${k}y`, ['x', 'y'], [`Multiply both sides by ${k}.`, `x = ${k}y`], [tr(`{y/${k}}`, `Undo ÷ ${k} by multiplying by ${k}.`)]);
      return ask('A = lw', 'l', '{A/w}', ['A', 'l', 'w'], ['Divide both sides by w.', 'l = {A/w}'], [tr('Aw', 'Undo × w by dividing by w.'), tr('{w/A}', 'Divide A by w: A goes on top.')]);
    }
    if (level === 2) {
      const kind = pick(r, ['mx+c', 'v=u+at', 'P=2l+2w', 'k(x-c)']);
      if (kind === 'mx+c') {
        const m = int(r, 2, 9), c = nz(r, -12, 12);
        return ask(`y = ${m}x ${c < 0 ? '−' : '+'} ${Math.abs(c)}`, 'x', `{y ${c < 0 ? '+' : '−'} ${Math.abs(c)}/${m}}`, ['x', 'y'], [`${c < 0 ? 'Add' : 'Subtract'} ${Math.abs(c)} ${c < 0 ? 'to' : 'from'} both sides: y ${c < 0 ? '+' : '−'} ${Math.abs(c)} = ${m}x`, `Divide both sides by ${m}: x = {y ${c < 0 ? '+' : '−'} ${Math.abs(c)}/${m}}`],
          [tr(`{y/${m}} ${c < 0 ? '+' : '−'} ${Math.abs(c)}`, `Undo the ${c < 0 ? '−' : '+'} ${Math.abs(c)} first, then divide the whole of y ${c < 0 ? '+' : '−'} ${Math.abs(c)} by ${m}.`), tr(`{y ${c < 0 ? '−' : '+'} ${Math.abs(c)}/${m}}`, `Use the inverse: ${c < 0 ? 'add' : 'subtract'} ${Math.abs(c)} to undo ${c < 0 ? '−' : '+'} ${Math.abs(c)}, then divide.`)]);
      }
      if (kind === 'v=u+at') {
        const s = pick(r, ['t', 'a']), o = s === 't' ? 'a' : 't';
        return ask('v = u + at', s, `{v − u/${o}}`, ['v', 'u', 'a', 't'], ['Subtract u from both sides: v − u = at', `Divide both sides by ${o}: ${s} = {v − u/${o}}`], [tr(`v − {u/${o}}`, `Divide the whole of v − u by ${o}: use brackets, (v − u)/${o}.`), tr(`{v + u/${o}}`, 'Subtract u to undo + u.')]);
      }
      if (kind === 'P=2l+2w') return ask('P = 2l + 2w', 'l', '{P − 2w/2}', ['P', 'l', 'w'], ['Subtract 2w: P − 2w = 2l', 'Divide by 2: l = {P − 2w/2}', 'This can also be written l = {P/2} − w.'], [tr('P − w', 'Divide the whole of P − 2w by 2: (P − 2w)/2, or P/2 − w.'), tr('{P + 2w/2}', 'Subtract 2w to undo + 2w.')]);
      const k = int(r, 2, 7), c = int(r, 1, 9);
      return ask(`y = ${k}(x − ${c})`, 'x', `{y/${k}} + ${c}`, ['x', 'y'], [`Divide both sides by ${k}: {y/${k}} = x − ${c}`, `Add ${c}: x = {y/${k}} + ${c}`], [tr(`{y + ${c}/${k}}`, `Undo the multiplication by ${k} first: divide by ${k}, then add ${c}.`), tr(`{y/${k}} − ${c}`, `Undo − ${c} by adding ${c}.`)]);
    }
    const kind = pick(r, ['E', 'frac', 'twice']);
    if (kind === 'E') return ask('E = {1/2}mv^2', 'm', '{2E/v^2}', ['E', 'm', 'v'], ['Multiply both sides by 2: 2E = mv^2', 'Divide by v^2: m = {2E/v^2}'], [tr('{E/(2v^2)}', 'Multiply by 2 to undo the {1/2}, do not divide.'), tr('2E − v^2', 'm is multiplied by v^2: divide by v^2.')]);
    if (kind === 'frac') {
      const a = int(r, 2, 9), b = int(r, 2, 6);
      return ask(`y = {x + ${a}/${b}}`, 'x', `${b}y − ${a}`, ['x', 'y'], [`Multiply both sides by ${b}: ${b}y = x + ${a}`, `Subtract ${a}: x = ${b}y − ${a}`], [tr(`{y/${b}} − ${a}`, `Undo the division by ${b} by multiplying by ${b}.`), tr(`${b}(y − ${a})`, `Multiply by ${b} first, then subtract ${a}.`)]);
    }
    const k = int(r, 2, 5), c = nz(r, -9, 9);
    const over = (top, d) => (d === 1 ? top : `{${top}/${d}}`);
    const ans = over(`${num(c)} − ${k}y`, k - 1);
    return ask(`${k}(x + y) = x ${c < 0 ? '−' : '+'} ${Math.abs(c)}`, 'x', ans, ['x', 'y'], [`Expand: ${k}x + ${k}y = x ${c < 0 ? '−' : '+'} ${Math.abs(c)}`, `Collect the x terms on one side: ${k}x − x = ${num(c)} − ${k}y`, `${k - 1 === 1 ? '' : k - 1}x = ${num(c)} − ${k}y`, `x = ${ans}`], [tr(over(`${num(c)} − y`, k - 1), `Expand fully: ${k}(x + y) = ${k}x + ${k}y.`), tr(`{${num(c)} − ${k}y/${k}}`, `Collect the x terms: ${k}x − x = ${k - 1 === 1 ? '' : k - 1}x.`)]);
  },
};

export { make as makeAlg, makeA, fixMinus, A as algAns, tr as algTrap, valAns, choice as choiceItem };
export const algebraSkills = [notation, substitute, vocabulary, collectSkill, indexLaws, expandSingle, factoriseSingle, expandDouble, factoriseQuadratic, solve, solveBoth, formSolve, formulaUse, rearrange];
