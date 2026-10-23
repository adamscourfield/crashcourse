// Edexcel 1MA1 Ratio, proportion and rates of change, batch 1: ratio notation and simplifying (R3, R4,
// R6, R8), sharing and combining ratios (R4, R5), direct and inverse proportion, best buys and
// conversions (R1, R7, R10, R11), percentages (R9) and compound growth and decay (R9, R16; Higher:
// iterative processes). Same contract as the other skill modules: pure functions of (level, seed).
// Money and percentages are computed in whole pence or exact fractions, never floating point.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, gcd, lcm, num, fracMarkup } from './frac.js?v=20261023-maths-r9';
import { makeA, fixMinus, algAns, algTrap, choiceItem } from './skills-algebra.js?v=20261023-maths-r9';

const fr = v => { const f = typeof v === 'number' ? F(v) : v; return { n: f.n, d: f.d }; };
const fv = f => (f.d === 1 ? num(f.n) : fracMarkup(f));
const intAns = v => ({ kind: 'integer', value: v });
const tv = (v, why) => ({ v: typeof v === 'number' ? F(v) : v, why });
const ratio = parts => ({ kind: 'ratio', parts });
const raT = (parts, why) => ({ parts, why });
const fracA = f => ({ kind: 'fraction', value: fr(f), form: 'simplest' });
const sameRows = (a, b) => a.length === b.length && a.every(r => b.some(s => r.every((x, i) => x.n === s[i].n && x.d === s[i].d)));
const pairs = (list, vars, extra = {}) => ({ kind: 'solutions', vars, sols: list.map(p => p.map(fr)), ...extra });
const sT = (list, why) => ({ sols: list.map(p => p.map(fr)), why });
/** Decimal answer from an exact fraction; money with pennies must show 2 decimal places. */
const decA = (f, extra = {}) => ({ kind: 'decimal', value: fr(f), ...extra });
const pence = p => F(p, 100);
const isMoneyPence = f => f.d !== 1 && (100 % f.d === 0);
const moneyA = f => decA(f, isMoneyPence(f) ? { dp: 2 } : {});
/** £ text from an exact amount: £12, £12.50, £0.85. */
const money = f => { const v = f.n / f.d; return `£${Number.isInteger(v) ? v : v.toFixed(2)}`; };
const dtext = f => { const v = f.n / f.d; return Number.isInteger(v) ? String(v) : String(+v.toFixed(6)); };
const pctText = p => `${dtext(typeof p === 'number' ? F(p) : p)}%`;
const PCT_NICE = [F(5), F(10), F(15), F(20), F(25), F(30), F(35), F(40), F(45), F(60), F(75), F(25, 2), F(5, 2), F(35, 2)];

function make(skill, level, seed, o) {
  const it = makeA(skill, level, seed, o);
  if (o.soTraps) it.soTraps = o.soTraps.filter(t => !sameRows(t.sols, o.answer.sols)).map(t => ({ ...t, why: fixMinus(t.why) }));
  if (o.raTraps) {
    const prop = (a, b) => a.length === b.length && a.every((x, i) => x * b[0] === a[0] * b[i]);
    it.raTraps = o.raTraps.filter(t => !prop(t.parts, o.answer.parts)).map(t => ({ ...t, why: fixMinus(t.why) }));
  }
  return it;
}
const coprime = (r, n, lo = 1, hi = 9) => { for (;;) { const xs = Array.from({ length: n }, () => int(r, lo, hi)); if (xs.reduce((g, x) => gcd(g, x), 0) === 1 && new Set(xs).size === n) return xs; } };
const NAMES = [['Asha', 'Ben'], ['Cara', 'Dev'], ['Ella', 'Finn'], ['Gita', 'Hugo'], ['Isla', 'Jack']];

/* ═════════ R3, R4, R6, R8 ratio notation ═════════ */
const UNITS = [
  { a: 'cm', b: 'm', k: 100, gen: r => [int(r, 5, 95), pick(r, [1, 2, 3, F(3, 2), F(5, 2)])] },
  { a: 'g', b: 'kg', k: 1000, gen: r => [int(r, 1, 19) * 50, pick(r, [1, 2, 3, F(3, 2)])] },
  { a: 'ml', b: 'litres', k: 1000, gen: r => [int(r, 1, 19) * 50, pick(r, [1, 2, F(5, 2)])] },
  { a: 'minutes', b: 'hours', k: 60, gen: r => [int(r, 2, 11) * 5, pick(r, [1, 2, 3, F(3, 2)])] },
];
const ratioSimplify = {
  id: 'maths.ratio.simplify',
  name: 'Simplify ratios',
  levels: [{ label: 'Whole-number ratios' }, { label: 'Units, decimals and fractions' }, { label: 'The form 1 : n' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const n = r() < 0.7 ? 2 : 3, parts = coprime(r, n), k = int(r, 2, 12), big = parts.map(p => p * k);
      return make(this.id, level, seed, { prompt: `Write ${big.join(' : ')} in its simplest form.`, answer: ratio(parts), steps: [`The highest common factor of ${big.join(', ')} is ${k}.`, `Divide every part by ${k}: ${parts.join(' : ')}`], raTraps: [] });
    }
    if (level === 2) {
      const kind = pick(r, ['units', 'units', 'dec', 'frac']);
      if (kind === 'units') {
        const U = pick(r, UNITS), [x, yRaw] = U.gen(r), y = typeof yRaw === 'number' ? F(yRaw) : yRaw, yS = mul(y, F(U.k));
        if (yS.d !== 1) return this.gen(level, seed + 'u');
        const g = gcd(x, yS.n), ans = [x / g, yS.n / g];
        if (ans[0] === ans[1]) return this.gen(level, seed + 'e');
        const yt = dtext(y);
        return make(this.id, level, seed, { prompt: `Write ${x} ${U.a} : ${yt} ${U.b} in its simplest form.`, answer: ratio(ans), steps: [`Use the same units: ${yt} ${U.b} = ${yS.n} ${U.a}`, `${x} : ${yS.n}`, `Divide by ${g}: ${ans.join(' : ')}`], raTraps: Number.isInteger(y.n / y.d) ? [raT([x, y.n / y.d], `The units must match before you compare: ${yt} ${U.b} = ${yS.n} ${U.a}.`)] : [] });
      }
      if (kind === 'dec') {
        const [a, b] = coprime(r, 2), k = pick(r, [2, 3, 4, 5, 6]), A = F(a * k, 10), B = F(b * k, 10);
        return make(this.id, level, seed, { prompt: `Write ${dtext(A)} : ${dtext(B)} in its simplest form, using whole numbers.`, answer: ratio([a, b]), steps: [`Multiply both parts by 10: ${a * k} : ${b * k}`, `Divide by ${k}: ${a} : ${b}`], raTraps: [] });
      }
      let A, B; do { A = F(int(r, 1, 5), pick(r, [2, 3, 4, 5, 6])); B = F(int(r, 1, 5), pick(r, [2, 3, 4, 5, 6])); } while (A.d === 1 || B.d === 1 || eq(A, B));
      const L = lcm(A.d, B.d), a = (A.n * L) / A.d, b = (B.n * L) / B.d, g = gcd(a, b);
      return make(this.id, level, seed, { prompt: `Write ${fv(A)} : ${fv(B)} in its simplest form, using whole numbers.`, answer: ratio([a / g, b / g]), steps: [`Multiply both parts by ${L}, a common denominator: ${a} : ${b}`, ...(g > 1 ? [`Divide by ${g}: ${a / g} : ${b / g}`] : [])], raTraps: [raT([A.n, B.n], 'Compare the fractions, not just their numerators: multiply both by a common denominator.')] });
    }
    const a = pick(r, [2, 4, 5, 8, 10, 20, 25]), b = int(r, 3, 60);
    if (b % a === 0 || b === a) return this.gen(level, seed + 'm');
    const n = F(b, a), flip = r() < 0.3;
    if (flip) return make(this.id, level, seed, { prompt: `Write ${b} : ${a} in the form n : 1.`, answer: decA(n), steps: [`Divide both parts by ${a}: ${dtext(n)} : 1`], traps: [tv(F(a, b), `Divide by ${a} (the part that must become 1), not by ${b}.`)] });
    return make(this.id, level, seed, { prompt: `Write ${a} : ${b} in the form 1 : n.`, answer: decA(n), steps: [`Divide both parts by ${a}: 1 : ${dtext(n)}`, `n = ${dtext(n)}`], traps: [tv(F(a, b), `Divide both parts by ${a} so the first part becomes 1: n = ${b} ÷ ${a}.`)] });
  },
};

const ratioFraction = {
  id: 'maths.ratio.fraction-of',
  name: 'Fractions, ratios and multiplicative relationships',
  levels: [{ label: 'One quantity as a fraction of another' }, { label: 'Fractions greater than 1' }, { label: 'Ratios, fractions and linear relationships' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const U = pick(r, UNITS), [x, yRaw] = U.gen(r), y = typeof yRaw === 'number' ? F(yRaw) : yRaw, yS = mul(y, F(U.k));
      if (yS.d !== 1 || x >= yS.n) return this.gen(level, seed + 'u');
      return make(this.id, level, seed, { prompt: `Write ${x} ${U.a} as a fraction of ${dtext(y)} ${U.b}. Give your answer in its simplest form.`, answer: fracA(F(x, yS.n)), steps: [`Same units: ${dtext(y)} ${U.b} = ${yS.n} ${U.a}`, `{${x}/${yS.n}} = ${fv(F(x, yS.n))}`], traps: Number.isInteger(y.n / y.d) ? [tv(F(x, y.n / y.d), `Change ${dtext(y)} ${U.b} into ${U.a} first: ${yS.n} ${U.a}.`)] : [] });
    }
    if (level === 2) {
      const [a, b] = coprime(r, 2, 2, 9), k = int(r, 2, 9), A = Math.max(a, b) * k, B = Math.min(a, b) * k;
      const ctx = pick(r, [[`Tom is ${A} years old and his sister is ${B}.`, `Write Tom's age as a fraction of his sister's age.`], [`A tree is ${A} m tall and a fence is ${B} m tall.`, `Write the height of the tree as a fraction of the height of the fence.`], [`Shop A sells ${A} cakes and shop B sells ${B}.`, `Write shop A's sales as a fraction of shop B's sales.`]]);
      return make(this.id, level, seed, { prompt: `${ctx[0]} ${ctx[1]}`, answer: fracA(F(A, B)), steps: [`{${A}/${B}} = ${fv(F(A, B))}`, `The fraction is greater than 1 because the first quantity is bigger.`], traps: [tv(F(B, A), 'That is the other way round: put the first quantity on the top.')] });
    }
    const [a, b] = coprime(r, 2, 1, 9);
    if (r() < 0.5) return make(this.id, level, seed, { prompt: `x : y = ${a} : ${b}. Write y in terms of x.`, answer: algAns(`{${b}x/${a}}`, 'any', ['x', 'y'], { subject: 'y' }), steps: [`x : y = ${a} : ${b} means {y/x} = {${b}/${a}}`, `y = {${b}/${a}}x`], note: 'Type y = … or just the expression, for example 5x/3.', alTraps: [algTrap(`{${a}x/${b}}`, `The ratio is x : y, so y is {${b}/${a}} of x, not {${a}/${b}}.`), algTrap(`x + ${b - a}`, 'Ratios are multiplicative: y is a multiple of x, not x plus a fixed amount.')] });
    return make(this.id, level, seed, { prompt: `y is {${b}/${a}} of x. Write the ratio x : y in its simplest form.`, answer: ratio([a, b]), steps: [`y = {${b}/${a}}x, so for every ${a} of x there are ${b} of y.`, `x : y = ${a} : ${b}`], raTraps: [raT([b, a], 'Those are the right numbers in the wrong order: x comes first.'), raT([a, a + b], `Compare x with y, not with the total.`)] });
  },
};

/* ═════════ R4, R5 sharing and combining ═════════ */
const ratioShare = {
  id: 'maths.ratio.share',
  name: 'Share in a ratio',
  levels: [{ label: 'Two parts' }, { label: 'Three parts' }, { label: 'From one share or the difference' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), [A, B] = pick(r, NAMES);
    if (level === 1) {
      const [a, b] = coprime(r, 2), k = int(r, 2, 25) * pick(r, [1, 1, 5]), Q = k * (a + b);
      return make(this.id, level, seed, { prompt: `${A} and ${B} share £${Q} in the ratio ${a} : ${b}. How much does each get?`, answer: pairs([[k * a, k * b]], ['p', 'q'], { labels: [`${A}: £`, `${B}: £`] }), steps: [`Total parts: ${a} + ${b} = ${a + b}`, `One part: £${Q} ÷ ${a + b} = £${k}`, `${A}: ${a} × £${k} = £${k * a}; ${B}: ${b} × £${k} = £${k * b}`, `Check: £${k * a} + £${k * b} = £${Q}`], soTraps: [...(Q % a === 0 && Q % b === 0 ? [sT([[Q / a, Q / b]], `Do not divide £${Q} by each part. Add the parts (${a + b}) to find one share.`)] : []), ...(Q % 2 === 0 ? [sT([[Q / 2, Q / 2]], 'The ratio is not 1 : 1, so the shares are not equal: one part is £' + Q / (a + b) + '.')] : [])] });
    }
    if (level === 2) {
      const parts = coprime(r, 3), k = int(r, 2, 20), Q = k * parts.reduce((s, p) => s + p, 0), which = pick(r, ['largest', 'smallest']);
      const v = (which === 'largest' ? Math.max(...parts) : Math.min(...parts)) * k;
      return make(this.id, level, seed, { prompt: `${Q} sweets are shared in the ratio ${parts.join(' : ')}. How many sweets are in the ${which} share?`, answer: intAns(v), steps: [`Total parts: ${parts.join(' + ')} = ${Q / k}`, `One part: ${Q} ÷ ${Q / k} = ${k}`, `${which === 'largest' ? 'Largest' : 'Smallest'} share: ${v / k} × ${k} = ${v}`], traps: [tv(F(Q, 3), 'The shares are not equal: divide by the total number of parts.'), tv(F(Q, v / k), `Divide by the total number of parts (${Q / k}), not by one part.`)] });
    }
    const [a, b] = coprime(r, 2), lo = Math.min(a, b), hi = Math.max(a, b), k = int(r, 2, 30);
    if (r() < 0.5) {
      const d = (hi - lo) * k;
      return make(this.id, level, seed, { prompt: `${A} and ${B} share money in the ratio ${lo} : ${hi}. ${B} gets £${d} more than ${A}. How much does ${A} get?`, answer: intAns(lo * k), steps: [`The difference is ${hi} − ${lo} = ${hi - lo} parts.`, `One part: £${d} ÷ ${hi - lo} = £${k}`, `${A}: ${lo} × £${k} = £${lo * k}`], traps: [tv(d * lo, `£${d} is the difference, ${hi - lo} parts, not one part.`), tv(hi * k, `That is ${B}'s share; the question asks how much ${A} gets.`)] });
    }
    const got = lo * k;
    return make(this.id, level, seed, { prompt: `${A} and ${B} share some money in the ratio ${lo} : ${hi}. ${A} gets £${got}. How much money was shared altogether?`, answer: intAns((lo + hi) * k), steps: [`${A}'s ${lo} part${lo > 1 ? 's are' : ' is'} £${got}, so one part is £${k}.`, `Altogether ${lo + hi} parts: ${lo + hi} × £${k} = £${(lo + hi) * k}`], traps: [tv(hi * k, `That is ${B}'s share. The question asks for the total.`), tv(got * (lo + hi), `£${got} is ${lo} parts, not one part.`)] });
  },
};

const ratioCombine = {
  id: 'maths.ratio.combine',
  name: 'Combine, scale and change ratios',
  levels: [{ label: 'Combine two ratios' }, { label: 'Mixtures and recipes' }, { label: 'When a ratio changes' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      for (;;) {
        const [a, b] = coprime(r, 2, 1, 7), [c, d] = coprime(r, 2, 1, 7);
        if (b === c) continue;
        const L = lcm(b, c), p = [a * (L / b), L, d * (L / c)], g = p.reduce((x, y) => gcd(x, y), 0), ans = p.map(x => x / g);
        return make(this.id, level, seed, { prompt: `A : B = ${a} : ${b} and B : C = ${c} : ${d}. Write A : B : C in its simplest form.`, answer: ratio(ans), steps: [`Make the B parts equal: the lowest common multiple of ${b} and ${c} is ${L}.`, `A : B = ${a * (L / b)} : ${L} and B : C = ${L} : ${d * (L / c)}`, `A : B : C = ${ans.join(' : ')}`], raTraps: [raT([a, b, d], `The B parts must match before you join the ratios: ${b} and ${c} are different.`)] });
      }
    }
    if (level === 2) {
      if (r() < 0.5) {
        const parts = [1, int(r, 2, 3), int(r, 4, 6)], names = ['cement', 'sand', 'gravel'], i = int(r, 0, 1), j = 2, k = int(r, 2, 12), have = parts[i] * k;
        return make(this.id, level, seed, { prompt: `Concrete is made by mixing ${names.join(', ').replace(/, ([^,]*)$/, ' and $1')} in the ratio ${parts.join(' : ')} by mass. A builder uses ${have} kg of ${names[i]}. How much ${names[j]} is needed?`, answer: intAns(parts[j] * k), steps: [`${parts[i]} part${parts[i] > 1 ? 's' : ''} = ${have} kg, so 1 part = ${k} kg.`, `${names[j]}: ${parts[j]} × ${k} = ${parts[j] * k} kg`], traps: [tv(have + parts[j] - parts[i], 'Ratios scale by multiplying, not by adding.'), tv(parts[j] * have, `${have} kg is ${parts[i]} part${parts[i] > 1 ? 's' : ''}; find one part first.`)] });
      }
      const w = int(r, 3, 9), k = int(r, 2, 10) * 10, total = (1 + w) * k;
      return make(this.id, level, seed, { prompt: `Squash is mixed with water in the ratio 1 : ${w}. How much squash is needed to make ${total} ml of drink?`, answer: intAns(k), steps: [`The drink is 1 + ${w} = ${1 + w} parts.`, `1 part = ${total} ÷ ${1 + w} = ${k} ml of squash`], traps: [tv(F(total, w), `The ${total} ml is squash and water together: divide by ${1 + w} parts, not ${w}.`), tv(k * w, 'That is the amount of water, not squash.')] });
    }
    for (;;) {
      const [a, b] = coprime(r, 2, 1, 7), k = int(r, 2, 9), addN = int(r, 1, 6) * k, newA = a * k + addN, g = gcd(newA, b * k), p = newA / g, q = (b * k) / g;
      if (p > 12 || q > 12 || (p === a && q === b)) continue;
      return make(this.id, level, seed, { prompt: `In a bag the ratio of red to blue counters is ${a} : ${b}. ${addN} more red counters are added. Now the ratio of red to blue is ${p} : ${q}. How many blue counters are in the bag?`, answer: intAns(b * k), steps: [`Let there be ${a}x red and ${b}x blue.`, `({${a}x + ${addN}})/${b}x = {${p}/${q}}, so ${q}(${a}x + ${addN}) = ${p} × ${b}x`, `${q * a}x + ${q * addN} = ${p * b}x, so x = ${k}`, `Blue: ${b} × ${k} = ${b * k}`], traps: [tv(a * k, 'That is the number of red counters at the start.'), tv(k, `x = ${k} is one part; there are ${b} parts of blue.`)] });
    }
  },
};

/* ═════════ R7, R10, R11, R1 proportion, best buys, conversions ═════════ */
const proportion = {
  id: 'maths.ratio.proportion',
  name: 'Direct and inverse proportion',
  levels: [{ label: 'Recipes' }, { label: 'Costs by the unitary method' }, { label: 'Inverse proportion' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const N = pick(r, [2, 4, 6, 8]), M = pick(r, [3, 5, 6, 10, 12].filter(m => m !== N)), g = gcd(N, M), q = (N / g) * int(r, 2, 30) * 5, v = (q * M) / N;
      const ing = pick(r, ['flour', 'butter', 'sugar', 'rice']);
      return make(this.id, level, seed, { prompt: `A recipe for ${N} people uses ${q} g of ${ing}. How much ${ing} is needed for ${M} people?`, answer: intAns(v), steps: [`For 1 person: ${q} ÷ ${N} = ${dtext(F(q, N))} g`, `For ${M} people: ${dtext(F(q, N))} × ${M} = ${v} g`], traps: [tv(q + (M - N), `Proportion means multiplying: ${M} people need {${M}/${N}} times as much, not ${M - N} g more.`), tv(q * M, `${q} g is for ${N} people, not 1 person.`)] });
    }
    if (level === 2) {
      const n = int(r, 3, 8), unit = int(r, 15, 240), m = int(r, 2, 15), item = pick(r, ['pens', 'notebooks', 'bus tickets', 'apples']);
      if (m === n) return this.gen(level, seed + 'n');
      const tot = pence(unit * n), want = pence(unit * m);
      return make(this.id, level, seed, { prompt: `${n} ${item} cost ${money(tot)}. Work out the cost of ${m} ${item}.`, answer: moneyA(want), steps: [`1 costs ${money(tot)} ÷ ${n} = ${money(pence(unit))}`, `${m} cost ${m} × ${money(pence(unit))} = ${money(want)}`], traps: [tv(mul(tot, F(m)), `${money(tot)} is for ${n} ${item}, not one: find the cost of one first.`), tv(div(tot, F(m)), `Find the cost of one (divide by ${n}), then multiply by ${m}.`)] });
    }
    const w = int(r, 2, 9), d = int(r, 2, 12), total = w * d, divs = []; for (let x = 2; x <= 20; x++) if (total % x === 0 && x !== w) divs.push(x);
    if (!divs.length) return this.gen(level, seed + 'd');
    const w2 = pick(r, divs), d2 = total / w2, what = pick(r, [['builders', 'build a wall', 'days'], ['painters', 'paint a hall', 'hours'], ['pumps', 'empty a tank', 'hours']]);
    return make(this.id, level, seed, { prompt: `${w} ${what[0]} take ${d} ${what[2]} to ${what[1]}. Working at the same rate, how long would ${w2} ${what[0]} take?`, answer: intAns(d2), steps: [`Total work: ${w} × ${d} = ${total} ${what[0].slice(0, -1)}-${what[2]}`, `${total} ÷ ${w2} = ${d2} ${what[2]}`, `More ${what[0]} take less time: this is inverse proportion.`], traps: [tv(F(d * w2, w), `More ${what[0]} finish faster: this is inverse proportion, so multiply by {${w}/${w2}}, not {${w2}/${w}}.`)] });
  },
};

const bestBuy = {
  id: 'maths.ratio.best-buy',
  name: 'Best buys and unit prices',
  levels: [{ label: 'Compare two packs' }, { label: 'Compare three packs' }, { label: 'Price per 100 g' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const pack = () => { const g = pick(r, [150, 200, 250, 300, 400, 500, 600, 750, 1000]); const per100 = int(r, 30, 140); return { g, p: Math.round((per100 * g) / 100), }; };
    if (level < 3) {
      for (;;) {
        const n = level === 1 ? 2 : 3, packs = Array.from({ length: n }, pack), unit = packs.map(x => x.p / x.g);
        if (new Set(packs.map(x => x.g)).size < n) continue;
        const best = unit.indexOf(Math.min(...unit));
        if (unit.some((u, i) => i !== best && u < unit[best] * 1.03)) continue;
        const names = ['Pack A', 'Pack B', 'Pack C'].slice(0, n), desc = packs.map((x, i) => `${names[i]}: ${x.g} g for ${money(pence(x.p))}`).join('; ');
        const ch = choiceItem(r, names[best], names.filter((_, i) => i !== best), o => { const i = names.indexOf(o); return `${o} costs ${(packs[i].p / packs[i].g * 100).toFixed(1)}p per 100 g, more than ${names[best]} (${(unit[best] * 100).toFixed(1)}p per 100 g).`; });
        return make(this.id, level, seed, { prompt: `Which pack is the best value? ${desc}.`, ...ch, steps: [...packs.map((x, i) => `${names[i]}: ${x.p}p ÷ ${x.g} g × 100 = ${(x.p / x.g * 100).toFixed(1)}p per 100 g`), `The lowest price per 100 g is ${names[best]}.`] });
      }
    }
    const x = pack(), v = F(x.p * 100, x.g);
    if (v.d !== 1 && 10 % v.d !== 0) return this.gen(level, seed + 'p');
    return make(this.id, level, seed, { prompt: `A ${x.g} g box of cereal costs ${money(pence(x.p))}. Work out the price per 100 g, in pence.`, answer: decA(v), steps: [`${x.g} g is ${dtext(F(x.g, 100))} lots of 100 g.`, `${x.p}p ÷ ${dtext(F(x.g, 100))} = ${dtext(v)}p per 100 g`], traps: [tv(F(x.p, x.g), 'That is the price per gram. Multiply by 100 for the price per 100 g.'), tv(F(x.g * 100, x.p), 'Divide the price by the mass, not the mass by the price.')] });
  },
};

const RATES = [['euros (€)', '€', F(116, 100)], ['US dollars ($)', '$', F(125, 100)], ['Swiss francs', 'CHF ', F(110, 100)], ['Japanese yen', '¥', F(190)]];
const conversion = {
  id: 'maths.ratio.conversion',
  name: 'Exchange rates and rates of pay',
  levels: [{ label: 'Exchange rates' }, { label: 'Pay and overtime' }, { label: 'Compare prices in two currencies' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const [name, sym, rate] = pick(r, RATES);
      if (r() < 0.5) {
        const gbp = int(r, 2, 60) * 10, v = mul(F(gbp), rate);
        return make(this.id, level, seed, { prompt: `£1 = ${sym}${dtext(rate)}. Change £${gbp} into ${name}.`, answer: decA(v, isMoneyPence(v) ? { dp: 2 } : {}), steps: [`Multiply by the rate: ${gbp} × ${dtext(rate)} = ${sym}${dtext(v)}`], traps: [tv(div(F(gbp), rate), 'Pounds to the other currency: multiply by the rate, because each £1 buys more than 1 unit.')] });
      }
      const gbp = int(r, 2, 60) * 10, foreign = mul(F(gbp), rate);
      return make(this.id, level, seed, { prompt: `£1 = ${sym}${dtext(rate)}. Change ${sym}${dtext(foreign)} into pounds.`, answer: intAns(gbp), steps: [`Divide by the rate: ${dtext(foreign)} ÷ ${dtext(rate)} = £${gbp}`], traps: [tv(mul(foreign, rate), 'To change back into pounds, divide by the rate.')] });
    }
    if (level === 2) {
      const rate = int(r, 950, 1600), h = int(r, 30, 40), o = int(r, 2, 10), base = rate * h, ot = (rate * 3 * o) / 2;
      if (!Number.isInteger(ot)) return this.gen(level, seed + 'o');
      const tot = pence(base + ot);
      return make(this.id, level, seed, { prompt: `Maya is paid ${money(pence(rate))} per hour for her first ${h} hours each week. Overtime is paid at time-and-a-half. One week she works ${h + o} hours. How much is she paid?`, answer: moneyA(tot), steps: [`Normal pay: ${h} × ${money(pence(rate))} = ${money(pence(base))}`, `Overtime rate: 1.5 × ${money(pence(rate))} = £${dtext(F(rate * 3, 200))}`, `Overtime: ${o} × £${dtext(F(rate * 3, 200))} = ${money(pence(ot))}`, `Total: ${money(tot)}`], traps: [tv(pence(rate * (h + o)), 'The overtime hours are paid at 1.5 times the normal rate.'), tv(F(2 * base + rate * o, 200), 'Time-and-a-half pays the whole 1.5 × rate for each overtime hour, not just an extra half.')] });
    }
    const [name, sym, rate] = pick(r, RATES.slice(0, 2)), uk = int(r, 20, 90), foreignGBP = uk + pick(r, [-1, 1]) * int(r, 2, 9), foreign = mul(F(foreignGBP), rate);
    const cheaperUK = uk < foreignGBP, diff = Math.abs(uk - foreignGBP);
    return make(this.id, level, seed, { prompt: `A pair of trainers costs £${uk} in the UK and ${sym}${dtext(foreign)} abroad. £1 = ${sym}${dtext(rate)}. How much cheaper, in pounds, is the cheaper price?`, answer: intAns(diff), steps: [`Abroad price in pounds: ${dtext(foreign)} ÷ ${dtext(rate)} = £${foreignGBP}`, `${cheaperUK ? 'The UK' : 'Abroad'} is cheaper by £${uk} and £${foreignGBP}: £${diff}`], traps: [(() => { const d = sub(foreign, F(uk)); return tv(F(Math.abs(d.n), d.d), 'Convert to the same currency before comparing: you cannot subtract pounds from another currency.'); })()] });
  },
};

/* ═════════ R9 percentages ═════════ */
const pctOf = {
  id: 'maths.ratio.percent-of',
  name: 'Percentages of amounts and percentage increase',
  levels: [{ label: 'Percentage of an amount' }, { label: 'One quantity as a percentage of another' }, { label: 'Increase or decrease by a percentage' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const p = pick(r, PCT_NICE), A = int(r, 1, 30) * 40, v = mul(F(A), div(p, F(100)));
      return make(this.id, level, seed, { prompt: `Work out ${pctText(p)} of £${A}.`, answer: moneyA(v), steps: [`10% of £${A} = £${dtext(F(A, 10))}`, `${pctText(p)} of £${A} = {${dtext(p)}/100} × ${A} = ${money(v)}`], traps: [tv(div(F(A), p), `"Of" means multiply: ${dtext(p)} ÷ 100 × ${A}.`), tv(mul(F(A), p), 'Divide by 100 as well: a percentage is out of 100.')] });
    }
    if (level === 2) {
      const p = pick(r, [...PCT_NICE, F(120), F(150), F(250), F(80)]), kind = r() < 0.3;
      if (kind) {
        const pp = pick(r, [F(25), F(50), F(75), F(125, 2), F(75, 2), F(150)]), tot = 120, part = mul(F(tot), div(pp, F(100)));
        if (part.d !== 1) return this.gen(level, seed + 'm');
        return make(this.id, level, seed, { prompt: `Write ${part.n} minutes as a percentage of 2 hours.`, answer: decA(pp), steps: ['2 hours = 120 minutes', `{${part.n}/120} × 100 = ${dtext(pp)}%`], traps: [tv(F(part.n * 100, 2), 'Change 2 hours into minutes first.'), tv(F(12000, part.n), 'Divide the first quantity by the second, then × 100.')] });
      }
      const B = pick(r, [20, 25, 40, 50, 80, 120, 160, 200, 250, 400]), A = mul(F(B), div(p, F(100)));
      if (A.d !== 1) return this.gen(level, seed + 'a');
      const it = pick(r, [['a test', 'marks', 'Ravi scored'], ['a car park', 'spaces', 'There are'], ['last year', 'visitors', 'This year there were']]);
      const prompt = it[0] === 'a test' ? `Ravi scored ${A.n} marks out of ${B}. Write his score as a percentage.` : it[0] === 'a car park' ? `${A.n} of the ${B} spaces in a car park are full. What percentage of the spaces are full?` : `A museum had ${B} visitors last month and ${A.n} visitors this month. Write this month's visitors as a percentage of last month's.`;
      return make(this.id, level, seed, { prompt, answer: decA(p), steps: [`{${A.n}/${B}} × 100 = ${dtext(p)}%`, ...(p.n / p.d > 100 ? ['More than 100%, because the first quantity is bigger.'] : [])], traps: [tv(F(B * 100, A.n), `Divide ${A.n} by ${B}, not the other way round.`), tv(F(A.n, B), 'Multiply the fraction by 100 to make a percentage.')] });
    }
    const p = pick(r, PCT_NICE.slice(0, 11)), up = r() < 0.5, A = int(r, 2, 40) * 20, m = up ? add(F(1), div(p, F(100))) : sub(F(1), div(p, F(100))), v = mul(F(A), m);
    const what = up ? `A price of £${A} is increased by ${pctText(p)}.` : `A price of £${A} is reduced by ${pctText(p)} in a sale.`;
    return make(this.id, level, seed, { prompt: `${what} Work out the new price.`, answer: moneyA(v), steps: [`Multiplier: ${up ? '1 + ' : '1 − '}${dtext(div(p, F(100)))} = ${dtext(m)}`, `£${A} × ${dtext(m)} = ${money(v)}`], traps: [tv(mul(F(A), div(p, F(100))), `That is the ${up ? 'increase' : 'reduction'}. ${up ? 'Add it to' : 'Subtract it from'} the original price.`), tv(mul(F(A), up ? sub(F(1), div(p, F(100))) : add(F(1), div(p, F(100)))), `${up ? 'Increase' : 'Decrease'}: the multiplier is ${up ? 'more' : 'less'} than 1.`)] });
  },
};

const pctChange = {
  id: 'maths.ratio.percent-change',
  name: 'Percentage change, reverse percentages and simple interest',
  levels: [{ label: 'Percentage change' }, { label: 'Original value' }, { label: 'Simple interest' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const p = pick(r, PCT_NICE.filter(x => x.d === 1)), up = r() < 0.5, O = pick(r, [20, 40, 60, 80, 120, 160, 200, 240, 400]), N = mul(F(O), up ? add(F(1), div(p, F(100))) : sub(F(1), div(p, F(100))));
      if (N.d !== 1) return this.gen(level, seed + 'n');
      return make(this.id, level, seed, { prompt: `The price of a bike ${up ? 'rose' : 'fell'} from £${O} to £${N.n}. Work out the percentage ${up ? 'increase' : 'decrease'}.`, answer: decA(p), steps: [`Change: £${Math.abs(N.n - O)}`, `{${Math.abs(N.n - O)}/${O}} × 100 = ${dtext(p)}%`, 'Divide by the original value.'], traps: [tv(F(Math.abs(N.n - O) * 100, N.n), `Divide the change by the original price (£${O}), not the new price.`), tv(Math.abs(N.n - O), 'That is the change in pounds. Write it as a percentage of the original price.')] });
    }
    if (level === 2) {
      const p = pick(r, [F(10), F(20), F(25), F(15), F(40), F(5), F(35), F(30)]), up = r() < 0.4, O = int(r, 2, 40) * 20, m = up ? add(F(1), div(p, F(100))) : sub(F(1), div(p, F(100))), N = mul(F(O), m);
      return make(this.id, level, seed, { prompt: up ? `After a ${pctText(p)} increase, a rent is £${dtext(N)} a month. What was the rent before the increase?` : `In a sale, everything is ${pctText(p)} off. A coat costs £${dtext(N)} in the sale. What was the original price?`, answer: moneyA(F(O)), steps: [`The ${up ? 'new' : 'sale'} price is ${dtext(mul(m, F(100)))}% of the original.`, `Original = £${dtext(N)} ÷ ${dtext(m)} = £${O}`], traps: [tv(mul(N, up ? sub(F(1), div(p, F(100))) : add(F(1), div(p, F(100)))), `The ${pctText(p)} is a percentage of the original price, not of £${dtext(N)}. Divide by ${dtext(m)}.`)] });
    }
    const P = int(r, 2, 60) * 100, rate = pick(r, [F(2), F(3), F(4), F(5), F(5, 2), F(7, 2)]), n = int(r, 2, 8), I = mul(F(P), mul(div(rate, F(100)), F(n))), total = r() < 0.5;
    const comp = F(Math.round(P * (1 + rate.n / rate.d / 100) ** n * 100), 100);
    return make(this.id, level, seed, { prompt: `£${P} is invested at ${pctText(rate)} per year simple interest for ${n} years. ${total ? 'Work out the total value at the end.' : 'Work out the total interest earned.'}`, answer: moneyA(total ? add(F(P), I) : I), steps: [`Interest each year: ${pctText(rate)} of £${P} = ${money(mul(F(P), div(rate, F(100))))}`, `Over ${n} years: ${n} × ${money(mul(F(P), div(rate, F(100))))} = ${money(I)}`, ...(total ? [`Total: £${P} + ${money(I)} = ${money(add(F(P), I))}`] : [])], traps: [tv(total ? I : add(F(P), I), total ? 'That is only the interest; add it to the amount invested.' : 'That is the total value; the interest is the amount added.'), tv(total ? comp : sub(comp, F(P)), 'Simple interest is the same amount every year; it is not compounded.')] });
  },
};

/* ═════════ R16 growth and decay ═════════ */
const round2 = v => F(Math.round(v * 100), 100);
const compound = {
  id: 'maths.ratio.compound',
  name: 'Compound interest and depreciation',
  levels: [{ label: 'Compound interest' }, { label: 'Depreciation' }, { label: 'Interest earned' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), n = int(r, 2, 6);
    if (level === 2) {
      const P = int(r, 5, 40) * 1000, p = pick(r, [8, 10, 12, 15, 18, 20, 25]), v = round2(P * (1 - p / 100) ** n);
      return make(this.id, level, seed, { prompt: `A van costs £${P}. Its value falls by ${p}% each year. Work out its value after ${n} years. Give your answer to the nearest penny.`, calculator: true, answer: decA(v, { dp: 2, tol: 0.011 }), steps: [`Multiplier: 1 − ${p / 100} = ${1 - p / 100}`, `£${P} × ${1 - p / 100}^${n} = £${(v.n / v.d).toFixed(2)}`], traps: [tv(round2(P * (1 - (p * n) / 100)), `The value falls by ${p}% of its current value each year, not ${p}% of the original price.`), tv(round2(P * (p / 100) ** n), `Use the multiplier ${1 - p / 100}, not ${p / 100}.`)] });
    }
    const P = int(r, 5, 80) * 100, p = pick(r, [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]), A = P * (1 + p / 100) ** n, v = round2(level === 1 ? A : A - P);
    return make(this.id, level, seed, { prompt: `£${P} is invested at ${p}% per year compound interest for ${n} years. ${level === 1 ? 'Work out the value of the investment at the end. Give your answer to the nearest penny.' : 'Work out the interest earned. Give your answer to the nearest penny.'}`, calculator: true, answer: decA(v, { dp: 2, tol: 0.011 }), steps: [`Multiplier: 1 + ${p / 100} = ${1 + p / 100}`, `£${P} × ${1 + p / 100}^${n} = £${A.toFixed(2)}`, ...(level === 3 ? [`Interest: £${A.toFixed(2)} − £${P} = £${(A - P).toFixed(2)}`] : [])], traps: [tv(round2(level === 1 ? P * (1 + (p * n) / 100) : (P * p * n) / 100), 'That is simple interest. Compound interest earns interest on the interest as well.'), tv(round2(level === 1 ? A - P : A), level === 1 ? 'That is only the interest; the question asks for the total value.' : 'That is the total value; subtract the amount invested.')] });
  },
};

const multipliers = {
  id: 'maths.ratio.multipliers',
  name: 'Multipliers and repeated change',
  levels: [{ label: 'Find the multiplier' }, { label: 'Two changes in a row' }, { label: 'Iterative processes', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const p = pick(r, [F(3), F(7, 2), F(12), F(15), F(4), F(25, 2), F(30), F(45), F(1, 2), F(80)]), up = r() < 0.5, m = up ? add(F(1), div(p, F(100))) : sub(F(1), div(p, F(100)));
      return make(this.id, level, seed, { prompt: `Write the decimal multiplier for a ${pctText(p)} ${up ? 'increase' : 'decrease'}.`, answer: decA(m), steps: [up ? `100% + ${pctText(p)} = ${dtext(mul(m, F(100)))}%` : `100% − ${pctText(p)} = ${dtext(mul(m, F(100)))}%`, `${dtext(mul(m, F(100)))}% = ${dtext(m)}`], traps: [tv(div(p, F(100)), `${dtext(div(p, F(100)))} finds the ${up ? 'increase' : 'decrease'} only. The multiplier gives the new amount.`), tv(up ? sub(F(1), div(p, F(100))) : add(F(1), div(p, F(100))), `${up ? 'An increase' : 'A decrease'} needs a multiplier ${up ? 'bigger' : 'smaller'} than 1.`)] });
    }
    if (level === 2) {
      const a = pick(r, [10, 20, 25, 30, 40, 50]), b = pick(r, [10, 20, 25, 30, 40, 50]), upFirst = r() < 0.5;
      const m = mul(upFirst ? F(100 + a, 100) : F(100 - a, 100), upFirst ? F(100 - b, 100) : F(100 + b, 100)), change = mul(sub(m, F(1)), F(100));
      if (change.n === 0) return this.gen(level, seed + 'z');
      const naive = upFirst ? a - b : b - a;
      return make(this.id, level, seed, { prompt: `A price is ${upFirst ? `increased by ${a}% and then decreased by ${b}%` : `decreased by ${a}% and then increased by ${b}%`}. Work out the overall percentage change. Write a decrease as a negative number.`, answer: decA(change), steps: [`Multipliers: ${upFirst ? 1 + a / 100 : 1 - a / 100} × ${upFirst ? 1 - b / 100 : 1 + b / 100} = ${dtext(m)}`, `${dtext(m)} is ${dtext(mul(m, F(100)))}% of the original: a change of ${dtext(change)}%`], traps: [tv(naive, 'The second percentage is of the new price, not the original: multiply the multipliers.')] });
    }
    const u0 = int(r, 10, 60) * 100, g = pick(r, [5, 10, 20]), c = int(r, 1, 10) * 10, take = r() < 0.6;
    const m = F(100 + g, 100); let u = F(u0); for (let i = 0; i < 3; i++) u = take ? sub(mul(u, m), F(c)) : add(mul(u, m), F(c));
    const ans = Math.round(u.n / u.d), wrong = Math.round(u0 * ((100 + g) / 100) ** 3 + (take ? -3 : 3) * c);
    return make(this.id, level, seed, { prompt: `At the start of a year a lake has ${u0} fish. Each year the number of fish increases by ${g}%, then ${c} fish are ${take ? 'caught' : 'added'}. Use F_{n + 1} = ${dtext(m)}F_n ${take ? '−' : '+'} ${c} to work out the number of fish after 3 years, to the nearest whole number.`, calculator: true, answer: intAns(ans), steps: [`F_1 = ${dtext(m)} × ${u0} ${take ? '−' : '+'} ${c}`, 'Use each answer as the next F_n.', `After 3 years: ${dtext(u)} ≈ ${ans}`], traps: wrong !== ans ? [tv(wrong, `The ${c} fish are ${take ? 'removed' : 'added'} each year after the growth, so the change in later years acts on the new number.`)] : [] });
  },
};

export const ratioSkills = [ratioSimplify, ratioFraction, ratioShare, ratioCombine, proportion, bestBuy, conversion, pctOf, pctChange, compound, multipliers];
