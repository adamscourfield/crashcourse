// Edexcel 1MA1 Number, batch 2: decimals and written methods (N2), fractions/decimals/percentages
// (N1, N10, N12), rounding, estimation and error intervals (N14–N16), powers, roots and indices
// (N6, N7) and standard form (N9). Higher-only levels (checked against the specification
// 22 October 2026): estimating roots (N6), fractional indices (N7), recurring decimals (N10),
// upper and lower bounds (N16).
// Same contract as skills-number.js: generators are pure functions of (level, seed).
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, gcd, num, fracMarkup, decText, D } from './frac.js?v=20261023-maths-r9';
import { make } from './skills-number.js?v=20261023-maths-r9';

const dt = f => { const t = decText(f); if (t === null) throw new Error('non-terminating ' + f.n + '/' + f.d); return t; };
const dec = (f, extra = {}) => ({ kind: 'decimal', value: { n: f.n, d: f.d }, ...extra });
const intAns = v => ({ kind: 'integer', value: v });
const fracAns = f => ({ kind: 'fraction', value: { n: f.n, d: f.d }, form: 'simplest' });
const rd = (r, lo, hi, dp) => F(int(r, Math.round(lo * 10 ** dp), Math.round(hi * 10 ** dp)), 10 ** dp); // random decimal
const places = f => { const t = decText(f); return t && t.includes('.') ? t.split('.')[1].length : 0; };
const toF = v => (typeof v === 'number' ? F(v) : v);
const tv = (v, why) => ({ v: v === null || v === undefined ? null : toF(v), why });
function choice(r, correct, wrong, whyWrong) {
  const options = shuffled(r, [correct, ...wrong]);
  return { answer: { kind: 'choice', options, answer: options.indexOf(correct) }, optionWhy: options.map(o => (o === correct ? null : whyWrong(o))) };
}
const W = n => n.toLocaleString('en-GB').replace(/,/g, ' '); // 34 567 (thin grouping, as on exam papers)
const fixedSign = s => s.replace(/^-/, '−');

/* ───────── Decimals and written methods (N2) ───────── */

const decAddSub = {
  id: 'maths.number.decimals.add-subtract',
  name: 'Add and subtract decimals',
  levels: [{ label: 'Line up the points' }, { label: 'Whole numbers and borrowing' }, { label: 'Negatives and money' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = rd(r, 1, 60, int(r, 1, 2)), b = rd(r, 1, 60, places(a) === 1 ? 2 : 1);
      const op = r() < 0.5 ? '+' : '−';
      const [x, y] = op === '−' && a.n * b.d < b.n * a.d ? [b, a] : [a, b];
      const v = op === '+' ? add(x, y) : sub(x, y);
      const P = Math.max(places(x), places(y));
      const digits = f => Number(dt(f).replace('.', ''));
      const misaligned = F(op === '+' ? digits(x) + digits(y) : digits(x) - digits(y), 10 ** P);
      return make(this.id, level, seed, { prompt: `Work out ${dt(x)} ${op} ${dt(y)}`, answer: dec(v),
        steps: [`Line up the decimal points. Fill gaps with zeros: ${decText(x, P)} ${op} ${decText(y, P)}`, `Work column by column from the right: ${decText(x, P)} ${op} ${decText(y, P)} = ${dt(v)}`],
        traps: [tv(misaligned, 'The digits were lined up from the right instead of lining up the decimal points. Line up the points, then fill gaps with zeros.')] });
    }
    if (level === 2) {
      const w = int(r, 2, 6) * 10, b = rd(r, 1, w - 1, 2);
      const v = sub(F(w), b);
      const whole = Math.floor(b.n / b.d), frac = sub(b, F(whole));
      return make(this.id, level, seed, { prompt: `Work out ${w} − ${dt(b)}`, answer: dec(v),
        steps: [`Write ${w} as ${w}.00 so the decimal points line up.`, `${w}.00 − ${decText(b, 2)}: borrow across the zeros.`, `= ${dt(v)}`, `Check by adding: ${dt(v)} + ${dt(b)} = ${w} ✓`],
        traps: [tv(add(F(w - whole), frac), `Only the whole part was subtracted and the decimal part was copied down. Write ${w} as ${w}.00 and subtract every column.`)] });
    }
    if (r() < 0.45) {
      const total = int(r, 2, 5) * 10, items = [rd(r, 1, 9, 2), rd(r, 1, 9, 2)];
      const v = sub(sub(F(total), items[0]), items[1]);
      return make(this.id, level, seed, { prompt: `Sam pays with a £${total} note for two items costing £${decText(items[0], 2)} and £${decText(items[1], 2)}. How much change should Sam get, in pounds?`, answer: dec(v, { dp: 2 }),
        steps: [`Total cost: £${decText(items[0], 2)} + £${decText(items[1], 2)} = £${decText(add(...items), 2)}`, `Change: £${total}.00 − £${decText(add(...items), 2)} = £${decText(v, 2)}`],
        traps: [tv(add(...items), 'That is the total cost. The change is what is left from the note.')], note: 'Money: give 2 decimal places, for example 6.50.' });
    }
    const a = rd(r, 0.5, 9, 1), b = rd(r, 3, 12, 2), c = rd(r, 0.5, 6, 1);
    const v = add(sub(a, b), c);
    return make(this.id, level, seed, { prompt: `Work out ${dt(a)} − ${dt(b)} + ${dt(c)}`, answer: dec(v),
      steps: [`Left to right: ${dt(a)} − ${dt(b)} = ${fixedSign(dt(sub(a, b)))}`, `${fixedSign(dt(sub(a, b)))} + ${dt(c)} = ${fixedSign(dt(v))}`],
      traps: [tv(F(-v.n, v.d), 'The size is right but the sign is wrong. Check which side of zero each step finishes on.'), tv(sub(a, add(b, c)), 'Work left to right: subtract first, then add. Adding first changes the answer.')] });
  },
};

const decMultiply = {
  id: 'maths.number.decimals.multiply',
  name: 'Long multiplication and multiplying decimals',
  levels: [{ label: 'Long multiplication' }, { label: 'Decimals × 1 d.p.' }, { label: 'Two decimal places' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 120, 899), b = int(r, 13, 89);
      const tens = Math.floor(b / 10), units = b % 10;
      return make(this.id, level, seed, { prompt: `Work out ${a} × ${b}`, answer: intAns(a * b),
        steps: [`${a} × ${units} = ${a * units}`, `${a} × ${tens * 10} = ${a * tens * 10} (multiply by ${tens}, then by 10: put a 0 in the units column)`, `Add: ${a * units} + ${a * tens * 10} = ${a * b}`],
        traps: [tv(a * (tens + units), `The second row is ${a} × ${tens * 10}, not ${a} × ${tens}. Put a zero in the units column before multiplying by ${tens}.`)] });
    }
    const x = level === 2 ? rd(r, 0.2, 9.9, 1) : rd(r, 0.12, 9.99, 2), y = level === 2 ? (r() < 0.4 ? F(int(r, 3, 19)) : rd(r, 0.2, 9.9, 1)) : rd(r, 0.2, 9.9, 1);
    const v = mul(x, y);
    const px = places(x), py = places(y), ix = Number(dt(x).replace('.', '')), iy = Number(dt(y).replace('.', ''));
    return make(this.id, level, seed, { prompt: `Work out ${dt(x)} × ${dt(y)}`, answer: dec(v),
      steps: [`Ignore the decimal points: ${ix} × ${iy} = ${ix * iy}`, `There ${px + py === 1 ? 'is 1 decimal place' : `are ${px + py} decimal places`} in the question altogether, so the answer has ${px + py}: ${dt(v)}`, `Estimate to check: about ${Math.max(1, Math.round(x.n / x.d))} × ${Math.max(1, Math.round(y.n / y.d))} = ${Math.max(1, Math.round(x.n / x.d)) * Math.max(1, Math.round(y.n / y.d))}`],
      traps: [tv(mul(v, F(10)), 'The decimal point is in the wrong place. Count the decimal places in both numbers and use the total.'), tv(div(v, F(10)), 'The decimal point is in the wrong place. Count the decimal places in both numbers and use the total; an estimate helps.')] });
  },
};

const decDivide = {
  id: 'maths.number.decimals.divide',
  name: 'Short division, long division and dividing by decimals',
  levels: [{ label: 'Short division to decimals' }, { label: 'Divide by a decimal' }, { label: 'Long division' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const dd = pick(r, [2, 4, 5, 8]);
      let Nn; do { Nn = rd(r, 10, 99, r() < 0.6 ? 0 : 1); } while (Nn.n % dd === 0 && Nn.d === 1);
      const qq = div(Nn, F(dd));
      const isInt = Nn.d === 1;
      return make(this.id, level, seed, { prompt: `Work out ${dt(Nn)} ÷ ${dd}. Give your answer as a decimal.`, answer: dec(qq),
        steps: [`Short division: ${dd} into each digit, carrying remainders.`, isInt ? `When you reach the end, write ${dt(Nn)} as ${dt(Nn)}.00 and keep dividing.` : 'Keep the decimal point in line.', `${dt(Nn)} ÷ ${dd} = ${dt(qq)}`],
        traps: isInt ? [tv(F(Math.floor(Nn.n / dd) * 10 + (Nn.n % dd), 10), `A remainder is not a decimal. ${Math.floor(Nn.n / dd)} remainder ${Nn.n % dd} means ${Nn.n % dd}/${dd} left over; keep dividing past the decimal point.`)] : [] });
    }
    if (level === 2) {
      const dv = pick(r, [F(3, 10), F(4, 10), F(6, 10), F(2, 10), F(5, 10), F(12, 10), F(25, 100), F(8, 100), F(15, 10)]);
      const q = r() < 0.6 ? F(int(r, 4, 48)) : rd(r, 2, 30, 1);
      const N = mul(q, dv);
      const k = places(dv), s = 10 ** k;
      return make(this.id, level, seed, { prompt: `Work out ${dt(N)} ÷ ${dt(dv)}`, answer: dec(q),
        steps: [`Make the divisor a whole number: multiply both numbers by ${s}.`, `${dt(N)} ÷ ${dt(dv)} = ${dt(mul(N, F(s)))} ÷ ${dt(mul(dv, F(s)))}`, `${dt(mul(N, F(s)))} ÷ ${dt(mul(dv, F(s)))} = ${dt(q)}`],
        traps: [tv(div(q, F(s)), `Multiply both numbers by ${s}, not just the divisor. Dividing by a number less than 1 makes the answer bigger.`), tv(div(q, F(s * s)), 'Multiply both numbers by the same power of 10 so the value of the division stays the same.')] });
    }
    const dv = int(r, 12, 39), q = int(r, 105, 420);
    return make(this.id, level, seed, { prompt: `Work out ${dv * q} ÷ ${dv}`, answer: intAns(q),
      steps: [`Long division: how many ${dv}s in each part, working from the left.`, `Use multiples of ${dv}: ${[1, 2, 3, 4, 5].map(k => dv * k).join(', ')}, …`, `${dv * q} ÷ ${dv} = ${q}. Check: ${q} × ${dv} = ${dv * q} ✓`],
      traps: [tv(Math.floor(q / 10), 'A digit is missing: when a part is smaller than the divisor, write 0 in the answer and bring down the next digit.')] });
  },
};

/* ───────── Fractions, decimals and percentages (N1, N10, N12) ───────── */

const NICE = [2, 4, 5, 8, 10, 20, 25, 40, 50];
const niceFrac = r => { let n, d; do { d = pick(r, NICE); n = int(r, 1, d - 1); } while (gcd(n, d) !== 1); return F(n, d); };
const DOT = '̇';
const recur = (pre, rep) => `0.${pre}${[...rep].map((c, i) => (i === 0 || i === rep.length - 1 ? c + DOT : c)).join('')}`;

const fdpConvert = {
  id: 'maths.number.fdp.convert',
  name: 'Convert between fractions, decimals and percentages',
  levels: [{ label: 'Fractions and decimals' }, { label: 'Percentages' }, { label: 'Recurring decimals', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const f = niceFrac(r);
      if (r() < 0.5) {
        const scale = [10, 100, 1000].find(p => p % f.d === 0);
        return make(this.id, level, seed, { prompt: `Write ${fracMarkup(f)} as a decimal.`, answer: dec(f),
          steps: [`Make the denominator ${scale}: ${fracMarkup(f)} = {${f.n * (scale / f.d)}/${scale}}`, `{${f.n * (scale / f.d)}/${scale}} = ${dt(f)}`],
          traps: [tv(D(`0.${f.n}`), `${fracMarkup(f)} is not 0.${f.n}. Divide ${f.n} by ${f.d}, or make the denominator a power of 10.`)] });
      }
      const scale = 10 ** places(f);
      return make(this.id, level, seed, { prompt: `Write ${dt(f)} as a fraction in its simplest form.`, answer: fracAns(f),
        steps: [`${dt(f)} = {${f.n * (scale / f.d)}/${scale}}`, `Simplify by the HCF: ${fracMarkup(f)}`] });
    }
    if (level === 2) {
      const form = pick(r, ['f2p', 'd2p', 'p2f', 'p2d']);
      if (form === 'f2p') {
        const f = niceFrac(r), p = mul(f, F(100));
        return make(this.id, level, seed, { prompt: `Write ${fracMarkup(f)} as a percentage.`, answer: dec(p), note: 'Type the number of percent, for example 37.5',
          steps: [`Percent means "out of 100": ${fracMarkup(f)} × 100 = ${dt(p)}`, `${fracMarkup(f)} = ${dt(p)}%`],
          traps: [tv(f, `${dt(f)} is the decimal. Multiply by 100 to get a percentage.`)] });
      }
      if (form === 'd2p') {
        const d = rd(r, 0.005, 1.6, pick(r, [2, 3])), p = mul(d, F(100));
        return make(this.id, level, seed, { prompt: `Write ${dt(d)} as a percentage.`, answer: dec(p), note: 'Type the number of percent.',
          steps: [`Multiply by 100: ${dt(d)} × 100 = ${dt(p)}`, `${dt(d)} = ${dt(p)}%`],
          traps: [tv(mul(d, F(10)), 'Multiply by 100, not 10: move every digit two places.'), tv(mul(d, F(1000)), 'Multiply by 100, not 1000.')] });
      }
      const pc = pick(r, [5, 12, 15, 24, 35, 45, 64, 75, 85, 2.5, 12.5, 37.5, 62.5, 120, 150]);
      const f = div(D(String(pc)), F(100));
      if (form === 'p2f') return make(this.id, level, seed, { prompt: `Write ${pc}% as a fraction in its simplest form.`, answer: fracAns(f),
        steps: [`${pc}% = {${pc}/100}${Number.isInteger(pc) ? '' : ` = {${pc * 10}/1000}`}`, `Simplify: ${fracMarkup(f)}`] });
      return make(this.id, level, seed, { prompt: `Write ${pc}% as a decimal.`, answer: dec(f),
        steps: [`Divide by 100: ${pc} ÷ 100 = ${dt(f)}`], traps: [tv(div(D(String(pc)), F(10)), 'Divide by 100, not 10: move every digit two places.')] });
    }
    const kind = pick(r, ['one', 'two', 'mixed', 'f2r']);
    if (kind === 'f2r') {
      const opts = [[1, 3, recur('', '3')], [2, 3, recur('', '6')], [1, 6, recur('1', '6')], [5, 6, recur('8', '3')], [2, 9, recur('', '2')], [7, 9, recur('', '7')], ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => [n, 11, recur('', String(9 * n).padStart(2, '0'))])];
      const [n, d, right] = pick(r, opts);
      const digits = right.replace(/\u0307/g, '').slice(2);
      const wrong = d === 11 ? [`0.${digits}`, recur('', digits[1] + digits[0]), recur('', digits[0])]
        : d === 6 ? [`0.${digits}`, recur('', digits), recur('', digits[1])]
        : [`0.${digits}`, recur('', String((Number(digits) + 1) % 10)), `0.${digits}${digits}`];
      const uniq = [...new Set(wrong)].filter(w => w !== right).slice(0, 3);
      const c = choice(r, right, uniq, o => (o.includes(DOT) ? `Divide ${n} by ${d}: ${(n / d).toFixed(6)}… Check which digits repeat.` : `${o} is a terminating decimal. ${n} ÷ ${d} never ends: the digits repeat.`));
      return make(this.id, level, seed, { prompt: `Which is ${fracMarkup(F(n, d))} written as a decimal?`, ...c,
        steps: [`Divide: ${n} ÷ ${d} = ${(n / d).toFixed(6)}…`, `The repeating block is shown with dots: ${right}`] });
    }
    if (kind === 'one') {
      const a = int(r, 1, 8), f = F(a, 9);
      return make(this.id, level, seed, { prompt: `Write ${recur('', String(a))} as a fraction in its simplest form. (The dot shows the digit recurs.)`, answer: fracAns(f),
        steps: [`Let x = 0.${String(a).repeat(4)}…`, `10x = ${a}.${String(a).repeat(4)}…`, `Subtract: 9x = ${a}, so x = {${a}/9}${gcd(a, 9) > 1 ? ` = ${fracMarkup(f)}` : ''}`],
        traps: [tv(F(a, 10), `0.${a} would be {${a}/10}, but the digit recurs for ever. Subtract to remove the recurring part.`)] });
    }
    if (kind === 'two') {
      let ab; do { ab = int(r, 10, 98); } while (ab % 11 === 0);
      const f = F(ab, 99);
      return make(this.id, level, seed, { prompt: `Write ${recur('', String(ab))} as a fraction in its simplest form. (The dots show the first and last recurring digits.)`, answer: fracAns(f),
        steps: [`Let x = 0.${String(ab).repeat(3)}…`, `Two digits recur, so multiply by 100: 100x = ${ab}.${String(ab).repeat(3)}…`, `Subtract: 99x = ${ab}, so x = {${ab}/99}${gcd(ab, 99) > 1 ? ` = ${fracMarkup(f)}` : ''}`],
        traps: [tv(F(ab, 100), `0.${ab} would be {${ab}/100}, but the digits recur for ever.`), tv(F(ab, 90), 'Two digits recur, so multiply by 100 and subtract to get 99x.')] });
    }
    const a = int(r, 1, 9); let b; do { b = int(r, 1, 9); } while (b === a);
    const f = F(10 * a + b - a, 90);
    return make(this.id, level, seed, { prompt: `Write ${recur(String(a), String(b))} as a fraction in its simplest form. (Only the ${b} recurs.)`, answer: fracAns(f),
      steps: [`Let x = 0.${a}${String(b).repeat(4)}…`, `10x = ${a}.${String(b).repeat(4)}… and 100x = ${a}${b}.${String(b).repeat(3)}…`, `Subtract: 90x = ${10 * a + b} − ${a} = ${10 * a + b - a}`, `x = {${10 * a + b - a}/90} = ${fracMarkup(f)}`],
      traps: [tv(F(10 * a + b, 99), `Only the ${b} recurs, not ${a}${b}. Multiply by 10 and by 100, then subtract.`), tv(F(10 * a + b, 90), `Subtract ${a} (the non-recurring part) before dividing by 90.`)] });
  },
};

const fdpOrder = {
  id: 'maths.number.fdp.order',
  name: 'Order fractions, decimals and percentages',
  levels: [{ label: 'Clear gaps' }, { label: 'Close values' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    for (let t = 0; t < 400; t++) {
      const base = level === 1 ? [niceFrac(r), niceFrac(r), niceFrac(r), niceFrac(r)] : (() => { const c = niceFrac(r); return [c, add(c, F(int(r, 1, 4), 100)), sub(c, F(int(r, 1, 3), 1000)), add(c, F(int(r, 1, 9), 1000))]; })();
      if (base.some(v => v.n <= 0 || v.n >= v.d)) continue;
      const keys = base.map(v => v.n / v.d);
      if (new Set(keys.map(k => k.toFixed(6))).size < 4) continue;
      if (level === 1 && Math.min(...keys.flatMap((a, i) => keys.slice(i + 1).map(b => Math.abs(a - b)))) < 0.04) continue;
      const forms = ['frac', 'dec', 'pct', 'dec'];
      const show = (v, form) => { if (form === 'frac' && NICE.includes(v.d)) return fracMarkup(v); if (form === 'pct') { const p = decText(mul(v, F(100))); return p ? p + '%' : null; } return decText(v); };
      const labels = base.map((v, i) => show(v, forms[i]));
      if (labels.some(l => !l)) continue;
      const order = keys.map((k, i) => i).sort((a, b) => keys[a] - keys[b]);
      const correct = order.map(i => labels[i]).join(', ');
      const swapped = [...order]; const j = int(r, 0, 2); [swapped[j], swapped[j + 1]] = [swapped[j + 1], swapped[j]];
      const faceVal = l => Number(l.replace(/[{}%]/g, '').split('/')[0].replace(/^\./, '0.'));
      const byFace = keys.map((k, i) => i).sort((a, b) => faceVal(labels[a]) - faceVal(labels[b]));
      const wrong = [...new Set([swapped.map(i => labels[i]).join(', '), byFace.map(i => labels[i]).join(', '), [...order].reverse().map(i => labels[i]).join(', ')])].filter(w => w !== correct).slice(0, 3);
      if (wrong.length < 2) continue;
      const asDec = order.map(i => `${labels[i]} = ${decText(base[i])}`).join('; ');
      const c = choice(r, correct, wrong, () => `Convert every value to a decimal first: ${asDec}.`);
      return make(this.id, level, seed, { prompt: 'Which list is in order from smallest to largest?', ...c,
        steps: [`Convert each to a decimal: ${asDec}.`, `Smallest to largest: ${correct}`] });
    }
    throw new Error('fdp order: no item');
  },
};

const percentages = {
  id: 'maths.number.fdp.percentages',
  name: 'Percentages of amounts',
  levels: [{ label: 'Building from 10% and 1%' }, { label: 'One amount as a percentage of another' }, { label: 'Over 100% and decimal percentages' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const p = pick(r, [10, 20, 5, 15, 25, 30, 35, 45, 60, 75, 1, 2, 12]), amt = int(r, 2, 30) * 20;
      const v = div(mul(F(p), F(amt)), F(100));
      return make(this.id, level, seed, { prompt: `Find ${p}% of ${amt}.`, answer: dec(v),
        steps: [`10% of ${amt} = ${dt(div(F(amt), F(10)))}${p % 5 === 0 && p % 10 ? `, so 5% = ${dt(div(F(amt), F(20)))}` : ''}${p < 10 ? `; 1% = ${dt(div(F(amt), F(100)))}` : ''}`, `${p}% of ${amt} = ${p} × ${dt(div(F(amt), F(100)))} = ${dt(v)}`],
        traps: [tv(div(F(amt), F(p)), `Finding ${p}% is not dividing by ${p}. Find 1% (÷ 100) or 10% (÷ 10) and build up.`), tv(div(mul(F(p), F(amt)), F(1000)), 'The decimal point is out by one place. 10% is one tenth.')] });
    }
    if (level === 2) {
      for (let t = 0; t < 200; t++) {
        const whole = pick(r, [20, 25, 40, 50, 60, 80, 120, 200, 250, 400, 16, 24, 32, 48]), part = int(r, 1, whole - 1);
        const p = div(mul(F(part), F(100)), F(whole));
        if (decText(p) === null || places(p) > 1) continue;
        const ctx = pick(r, [`A student scores ${part} out of ${whole} in a test. Write this as a percentage.`, `Write £${part} as a percentage of £${whole}.`, `Write ${part} cm as a percentage of ${whole} cm.`]);
        return make(this.id, level, seed, { prompt: ctx, answer: dec(p), note: 'Type the number of percent.',
          steps: [`Write as a fraction: {${part}/${whole}}`, `Multiply by 100: ${part} ÷ ${whole} × 100 = ${dt(p)}`, `= ${dt(p)}%`],
          traps: [tv(div(F(part), F(whole)), 'That is the decimal. Multiply by 100 to get a percentage.'), tv(F(part), `${part} is the amount, not the percentage. Compare it with ${whole}.`)] });
      }
      throw new Error('percentages: no item');
    }
    const kind = pick(r, ['over', 'over', 'half', 'decimal']);
    if (kind === 'over') {
      const p = pick(r, [110, 120, 125, 150, 175, 200, 250, 135]), amt = int(r, 2, 40) * 4;
      const v = div(mul(F(p), F(amt)), F(100));
      if (decText(v) === null) return this.gen(level, seed + 'o');
      return make(this.id, level, seed, { prompt: `Find ${p}% of ${amt}.`, answer: dec(v),
        steps: [`${p}% = 100% + ${p - 100}%`, `100% of ${amt} = ${amt}; ${p - 100}% of ${amt} = ${dt(div(mul(F(p - 100), F(amt)), F(100)))}`, `Total: ${dt(v)}. More than 100% gives more than the original amount.`],
        traps: [tv(div(mul(F(p - 100), F(amt)), F(100)), `That is ${p - 100}%. ${p}% includes the whole amount (100%) as well.`)] });
    }
    const p = kind === 'half' ? pick(r, [0.5, 2.5, 7.5, 12.5, 17.5]) : pick(r, [0.1, 0.2, 1.5, 4.5]);
    const amt = int(r, 1, 30) * 40;
    const v = div(mul(D(String(p)), F(amt)), F(100));
    return make(this.id, level, seed, { prompt: `Find ${p}% of ${amt}.`, answer: dec(v),
      steps: [`1% of ${amt} = ${dt(div(F(amt), F(100)))}`, `${p}% = ${p} × ${dt(div(F(amt), F(100)))} = ${dt(v)}${kind === 'half' && p === 17.5 ? ' (or 10% + 5% + 2.5%)' : ''}`],
      traps: [tv(div(mul(D(String(p)), F(amt)), F(10)), 'The decimal point is out by one place. 1% is one hundredth.')] });
  },
};

/* ───────── Rounding, estimation and error intervals (N14–N16) ───────── */

function roundTo(f, unit) { // nearest multiple of unit (a rational), halves round up (away from zero for positives)
  const q = div(f, unit);
  return mul(F(Math.floor(q.n / q.d + 0.5 + 1e-12)), unit);
}
const truncTo = (f, unit) => { const q = div(f, unit); return mul(F(Math.floor(q.n / q.d + 1e-12)), unit); };
function sfUnit(f, sf) { const v = Math.abs(f.n / f.d); const e = Math.floor(Math.log10(v)) - sf + 1; return e >= 0 ? F(10 ** e) : F(1, 10 ** -e); }

const rounding = {
  id: 'maths.number.rounding.round',
  name: 'Round to decimal places and significant figures',
  levels: [{ label: 'Nearest 10, 100, 1000 and 1 d.p.' }, { label: 'Decimal places and significant figures' }, { label: 'Large and small numbers' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.5) {
        const unit = pick(r, [10, 100, 1000]), n = int(r, unit * 2, unit * 99) + (r() < 0.2 ? 0 : 0);
        const v = roundTo(F(n), F(unit));
        return make(this.id, level, seed, { prompt: `Round ${W(n)} to the nearest ${unit}.`, answer: dec(v),
          steps: [`${W(n)} is between ${W(truncTo(F(n), F(unit)).n)} and ${W(truncTo(F(n), F(unit)).n + unit)}.`, `Look at the next digit to the right: ${String(n % unit).padStart(String(unit).length - 1, '0')[0]}. ${Number(String(n % unit).padStart(String(unit).length - 1, '0')[0]) >= 5 ? '5 or more: round up' : 'Less than 5: round down'}.`, `${W(n)} → ${W(v.n)}`],
          traps: [tv(truncTo(F(n), F(unit)).n === v.n ? truncTo(F(n), F(unit)).n + unit : truncTo(F(n), F(unit)), 'Check the digit after the rounding place: 5 or more rounds up; less than 5 rounds down.')] });
      }
      const x = rd(r, 1, 99, 2), v = roundTo(x, F(1, 10));
      return make(this.id, level, seed, { prompt: `Round ${dt(x)} to 1 decimal place.`, answer: dec(v, { dp: 1 }),
        steps: [`The second decimal digit decides: ${decText(x, 2).slice(-1)}.`, `${Number(decText(x, 2).slice(-1)) >= 5 ? 'Round up' : 'Round down'}: ${decText(v, 1)}`],
        traps: [tv(eq(truncTo(x, F(1, 10)), v) ? null : truncTo(x, F(1, 10)), 'That cuts the number off (truncates). Look at the next digit: 5 or more rounds up.')] });
    }
    if (level === 2) {
      const kind = pick(r, ['dp', 'dp9', 'sf']);
      if (kind !== 'sf') {
        const dp = pick(r, [1, 2]);
        const x = kind === 'dp9' ? add(rd(r, 1, 30, dp), F(int(r, 95, 99), 10 ** (dp + 2))) : rd(r, 0.1, 50, dp + 2);
        const v = roundTo(x, F(1, 10 ** dp));
        return make(this.id, level, seed, { prompt: `Round ${dt(x)} to ${dp} decimal place${dp > 1 ? 's' : ''}.`, answer: dec(v, { dp }),
          steps: [`Look at decimal place ${dp + 1}.`, `${dt(x)} → ${decText(v, dp)}${decText(v, dp).endsWith('0') ? ` (keep the final 0: it shows ${dp} decimal places)` : ''}`],
          traps: [tv(eq(truncTo(x, F(1, 10 ** dp)), v) ? null : truncTo(x, F(1, 10 ** dp)), 'That truncates. Look at the next digit: 5 or more rounds up, which may carry into earlier digits.')] });
      }
      const sf = pick(r, [2, 3]), x = rd(r, 0.0011, 0.098, 5);
      if (x.n === 0) return this.gen(level, seed + 's');
      const u = sfUnit(x, sf), v = roundTo(x, u);
      return make(this.id, level, seed, { prompt: `Round ${dt(x)} to ${sf} significant figures.`, answer: dec(v, { sf }),
        steps: ['Leading zeros are not significant: start counting at the first non-zero digit.', `${dt(x)} → ${decText(v, places(u))}`],
        traps: [tv(roundTo(x, F(1, 10 ** sf)), `That rounds to ${sf} decimal places. Significant figures start at the first non-zero digit.`)] });
    }
    if (r() < 0.6) {
      const sf = pick(r, [1, 2, 3]), n = int(r, 1100, 989000);
      const u = sfUnit(F(n), sf), v = roundTo(F(n), u);
      const short = Math.round(v.n / u.n);
      return make(this.id, level, seed, { prompt: `Round ${W(n)} to ${sf} significant figure${sf > 1 ? 's' : ''}.`, answer: dec(v),
        steps: [`Count ${sf} significant figure${sf > 1 ? 's' : ''} from the first digit: that means rounding to the nearest ${W(u.n)}.`, `${W(n)} → ${W(v.n)}`, 'Fill the remaining places with zeros so the number keeps its size.'],
        traps: [tv(short === v.n ? null : short, `${short} has lost its size. Keep zeros as place holders: ${W(v.n)}.`)] });
    }
    const sf = pick(r, [1, 2]), x = rd(r, 0.000105, 0.0098, 7);
    const u = sfUnit(x, sf), v = roundTo(x, u);
    return make(this.id, level, seed, { prompt: `Round ${dt(x)} to ${sf} significant figure${sf > 1 ? 's' : ''}.`, answer: dec(v, { sf }),
      steps: ['Skip the leading zeros: they are not significant.', `${dt(x)} → ${decText(v, places(u))}`],
      traps: [tv(roundTo(x, F(1, 10 ** sf)), `That rounds to ${sf} decimal place${sf > 1 ? 's' : ''}. Significant figures start at the first non-zero digit.`)] });
  },
};

const sf1 = f => roundTo(f, sfUnit(f, 1));
const estimate = {
  id: 'maths.number.rounding.estimate',
  name: 'Estimate by rounding to 1 significant figure',
  levels: [{ label: 'Products' }, { label: 'Decimals and division' }, { label: 'Over- or underestimate?' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const noHalf = (lo, hi, dp) => { for (;;) { const x = rd(r, lo, hi, dp); const u = sfUnit(x, 1), q = div(x, u); const frac = q.n / q.d - Math.floor(q.n / q.d); if (Math.abs(frac - 0.5) > 0.06 && Math.floor(q.n / q.d) >= 1) return x; } };
    if (level === 1) {
      const a = noHalf(11, 98, 0), b = noHalf(11, 980, 0);
      const ea = sf1(a), eb = sf1(b), v = mul(ea, eb);
      return make(this.id, level, seed, { prompt: `Estimate the value of ${a.n} × ${b.n} by rounding each number to 1 significant figure.`, answer: dec(v),
        steps: [`${a.n} ≈ ${ea.n} and ${b.n} ≈ ${eb.n}`, `${ea.n} × ${eb.n} = ${W(v.n)}`],
        traps: [tv(mul(a, b), 'That is the exact answer. An estimate uses the rounded numbers.')] });
    }
    if (level === 2) {
      for (let t = 0; t < 200; t++) {
        const a = noHalf(1.1, 9.8, 2), b = noHalf(11, 98, 1), c = pick(r, [noHalf(0.11, 0.98, 2), noHalf(1.1, 9.8, 1)]);
        const ea = sf1(a), eb = sf1(b), ec = sf1(c);
        const v = div(mul(ea, eb), ec);
        if (decText(v) === null) continue;
        return make(this.id, level, seed, { prompt: `Estimate the value of {${dt(a)} × ${dt(b)}/${dt(c)}} by rounding each number to 1 significant figure.`, answer: dec(v),
          steps: [`${dt(a)} ≈ ${dt(ea)}, ${dt(b)} ≈ ${dt(eb)}, ${dt(c)} ≈ ${dt(ec)}`, `{${dt(ea)} × ${dt(eb)}/${dt(ec)}} = {${dt(mul(ea, eb))}/${dt(ec)}} = ${dt(v)}`, ec.n < ec.d ? `Dividing by ${dt(ec)} makes the answer bigger.` : ''].filter(Boolean),
          traps: [tv(mul(mul(ea, eb), ec), `Divide by ${dt(ec)}, do not multiply.`)] });
      }
    }
    const up = r() < 0.5, kind = pick(r, ['mul', 'div']);
    const pickDir = (lo, hi, dp, wantUp) => { for (;;) { const x = noHalf(lo, hi, dp); const e = sf1(x); if (wantUp ? x.n * e.d < e.n * x.d : x.n * e.d > e.n * x.d) return x; } };
    let a, b, over;
    if (kind === 'mul') { a = pickDir(11, 98, 0, up); b = pickDir(1.1, 9.8, 1, up); over = up; }
    else { a = pickDir(11, 98, 0, up); b = pickDir(1.1, 9.8, 1, !up); over = up; }
    const expr = `${dt(a)} ${kind === 'mul' ? '×' : '÷'} ${dt(b)}`;
    const est = `${dt(sf1(a))} ${kind === 'mul' ? '×' : '÷'} ${dt(sf1(b))}`;
    const c = choice(r, over ? 'An overestimate' : 'An underestimate', [over ? 'An underestimate' : 'An overestimate', 'Exactly right'], o => (o === 'Exactly right' ? 'Rounding changes the numbers, so the estimate is not exact.' : `${dt(a)} was rounded ${sf1(a).n * a.d > a.n * sf1(a).d ? 'up' : 'down'} and ${dt(b)} was rounded ${sf1(b).n * b.d > b.n * sf1(b).d ? 'up' : 'down'}. ${kind === 'div' ? 'Rounding the divisor up makes the answer smaller.' : ''}`));
    return make(this.id, level, seed, { prompt: `Kai estimates ${expr} as ${est}. Is the estimate an overestimate or an underestimate?`, ...c,
      steps: [`${dt(a)} rounded ${sf1(a).n * a.d > a.n * sf1(a).d ? 'up' : 'down'} to ${dt(sf1(a))}; ${dt(b)} rounded ${sf1(b).n * b.d > b.n * sf1(b).d ? 'up' : 'down'} to ${dt(sf1(b))}.`, kind === 'mul' ? 'In a product, rounding both numbers up gives too much; both down gives too little.' : 'In a division, a bigger top or a smaller bottom gives a bigger answer.', `So it is ${over ? 'an overestimate' : 'an underestimate'}.`] });
  },
};

const ivSpec = (lo, hi, loIn = true, hiIn = false) => ({ kind: 'interval', lo: { n: lo.n, d: lo.d }, hi: { n: hi.n, d: hi.d }, loIn, hiIn });
const ivTrap = (lo, hi, why) => ({ lo: { n: lo.n, d: lo.d }, hi: { n: hi.n, d: hi.d }, why });
const errorInterval = {
  id: 'maths.number.rounding.error-interval',
  name: 'Error intervals and bounds',
  levels: [{ label: 'Rounding intervals' }, { label: 'Truncation and significant figures' }, { label: 'Bounds in calculations', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const v = pick(r, ['x', 'y', 'm', 't']);
    if (level === 1) {
      const kind = pick(r, ['1dp', '1dp', 'whole', 'ten']);
      const unit = kind === '1dp' ? F(1, 10) : kind === 'whole' ? F(1) : F(10);
      const val = kind === '1dp' ? rd(r, 1.1, 19.9, 1) : kind === 'whole' ? F(int(r, 3, 99)) : F(int(r, 3, 60) * 10);
      const half = div(unit, F(2)), lo = sub(val, half), hi = add(val, half);
      const desc = kind === '1dp' ? '1 decimal place' : kind === 'whole' ? 'the nearest whole number' : 'the nearest 10';
      return make(this.id, level, seed, { prompt: `${v} = ${dt(val)}, correct to ${desc}. Write down the error interval for ${v}.`, answer: ivSpec(lo, hi),
        steps: [`Rounding to ${desc} means the true value is within half of ${dt(unit)} (${dt(half)}) either side.`, `Lower bound ${dt(val)} − ${dt(half)} = ${dt(lo)}: this rounds up to ${dt(val)}, so it is included (≤).`, `Upper bound ${dt(val)} + ${dt(half)} = ${dt(hi)}: this would round up to ${dt(add(val, unit))}, so it is not included (<).`, `${dt(lo)} ≤ ${v} < ${dt(hi)}`],
        ivTraps: [ivTrap(sub(val, unit), add(val, unit), `The interval is half a unit either side, not a whole unit: ± ${dt(half)}.`), ivTrap(val, add(val, unit), `That is the interval for truncation. Rounding can come from below ${dt(val)} too.`)] });
    }
    if (level === 2) {
      if (r() < 0.5) {
        const unit = pick(r, [F(1, 10), F(1)]), val = unit.d === 10 ? rd(r, 1.1, 29.9, 1) : F(int(r, 3, 99));
        const lo = val, hi = add(val, unit);
        return make(this.id, level, seed, { prompt: `${v} = ${dt(val)}, truncated to ${unit.d === 10 ? '1 decimal place' : 'a whole number'}. Write down the error interval for ${v}.`, answer: ivSpec(lo, hi),
          steps: ['Truncating cuts off the extra digits: it never rounds up.', `So ${v} is at least ${dt(val)} and less than ${dt(hi)}.`, `${dt(lo)} ≤ ${v} < ${dt(hi)}`],
          ivTraps: [ivTrap(sub(val, div(unit, F(2))), add(val, div(unit, F(2))), 'That is the interval for rounding. Truncating never rounds up, so the value starts at the number itself.')] });
      }
      const sf = 1, val = F(int(r, 2, 9) * pick(r, [10, 100, 1000]));
      const u = sfUnit(val, sf), half = div(u, F(2)), lo = sub(val, half), hi = add(val, half);
      return make(this.id, level, seed, { prompt: `${v} = ${W(val.n)}, correct to 1 significant figure. Write down the error interval for ${v}.`, answer: ivSpec(lo, hi),
        steps: [`1 significant figure here means the nearest ${W(u.n)}.`, `Half of ${W(u.n)} is ${W(half.n)}: ${W(lo.n)} ≤ ${v} < ${W(hi.n)}`],
        ivTraps: [ivTrap(sub(val, F(5)), add(val, F(5)), `1 significant figure for ${W(val.n)} means the nearest ${W(u.n)}, not the nearest 10.`)] });
    }
    const a = rd(r, 3.1, 19.9, 1), b = rd(r, 1.1, 2.9, 1);
    const h = F(1, 20), aL = sub(a, h), aU = add(a, h), bL = sub(b, h), bU = add(b, h);
    const kind = pick(r, ['addU', 'subU', 'subL', 'mulL', 'mulU', 'divU']);
    if (kind === 'divU') {
      const correct = `{${dt(aU)}/${dt(bL)}}`;
      const c = choice(r, correct, [`{${dt(aU)}/${dt(bU)}}`, `{${dt(aL)}/${dt(bL)}}`, `{${dt(aL)}/${dt(bU)}}`], () => 'For the largest possible answer, divide the biggest possible top by the smallest possible bottom.');
      return make(this.id, level, seed, { prompt: `a = ${dt(a)} and b = ${dt(b)}, both correct to 1 decimal place. Which calculation gives the upper bound of a ÷ b?`, ...c,
        steps: [`Bounds: ${dt(aL)} ≤ a < ${dt(aU)} and ${dt(bL)} ≤ b < ${dt(bU)}.`, 'Biggest answer: biggest top ÷ smallest bottom.', `Upper bound = ${correct}`] });
    }
    const spec = { addU: [add(aU, bU), 'a + b', 'upper', `${dt(aU)} + ${dt(bU)}`], subU: [sub(aU, bL), 'a − b', 'upper', `${dt(aU)} − ${dt(bL)}`], subL: [sub(aL, bU), 'a − b', 'lower', `${dt(aL)} − ${dt(bU)}`], mulL: [mul(aL, bL), 'a × b', 'lower', `${dt(aL)} × ${dt(bL)}`], mulU: [mul(aU, bU), 'a × b', 'upper', `${dt(aU)} × ${dt(bU)}`] }[kind];
    const naive = kind === 'subU' ? sub(aU, bU) : kind === 'subL' ? sub(aL, bL) : null;
    return make(this.id, level, seed, { prompt: `a = ${dt(a)} and b = ${dt(b)}, both correct to 1 decimal place. Work out the ${spec[2]} bound of ${spec[1]}.`, answer: dec(spec[0]),
      steps: [`Bounds: ${dt(aL)} ≤ a < ${dt(aU)} and ${dt(bL)} ≤ b < ${dt(bU)}.`, kind.startsWith('sub') ? `For the ${spec[2]} bound of a difference, use the ${spec[2]} bound of a and the ${spec[2] === 'upper' ? 'lower' : 'upper'} bound of b.` : `Use the ${spec[2]} bound of both.`, `${spec[3]} = ${dt(spec[0])}`],
      traps: [tv(naive, `Subtracting the ${spec[2]} bound of b does not give the ${spec[2]} answer. To make a difference as ${spec[2] === 'upper' ? 'big' : 'small'} as possible, take away the ${spec[2] === 'upper' ? 'smallest' : 'biggest'} possible b.`), tv(kind === 'mulL' || kind === 'mulU' || kind === 'addU' ? (kind === 'addU' ? add(a, b) : mul(a, b)) : null, 'That uses the rounded values. Bounds use the limits of each measurement.')] });
  },
};

/* ───────── Powers, roots and indices (N6, N7) ───────── */

const powersEvaluate = {
  id: 'maths.number.powers.evaluate',
  name: 'Powers and roots',
  levels: [{ label: 'Squares, cubes and roots' }, { label: 'Combined calculations' }, { label: 'Estimate roots', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, ['sq', 'cube', 'sqrt', 'cbrt', 'pow']);
      if (kind === 'sq') { const a = int(r, 11, 15); return make(this.id, level, seed, { prompt: `Work out ${a}^2`, answer: intAns(a * a), steps: [`${a}^2 = ${a} × ${a} = ${a * a}`], traps: [tv(2 * a, `${a}^2 means ${a} × ${a}, not ${a} × 2.`)] }); }
      if (kind === 'cube') { const a = int(r, 2, 6); return make(this.id, level, seed, { prompt: `Work out ${a}^3`, answer: intAns(a ** 3), steps: [`${a}^3 = ${a} × ${a} × ${a} = ${a ** 3}`], traps: [tv(3 * a, `${a}^3 means ${a} × ${a} × ${a}, not ${a} × 3.`)] }); }
      if (kind === 'sqrt') { const a = int(r, 6, 15); return make(this.id, level, seed, { prompt: `Work out √${a * a}`, answer: intAns(a), steps: [`Which number squared is ${a * a}? ${a} × ${a} = ${a * a}`, `√${a * a} = ${a}`], traps: [tv(Number.isInteger(a * a / 2) ? a * a / 2 : null, 'A square root is not half. Find the number that multiplies by itself to give the answer.')] }); }
      if (kind === 'cbrt') { const a = int(r, 2, 6); return make(this.id, level, seed, { prompt: `Work out ∛${a ** 3}`, answer: intAns(a), steps: [`Which number cubed is ${a ** 3}? ${a} × ${a} × ${a} = ${a ** 3}`, `∛${a ** 3} = ${a}`], traps: [tv(Number.isInteger(a ** 3 / 3) ? a ** 3 / 3 : null, 'A cube root is not a third. Find the number that cubes to give the answer.')] }); }
      const a = pick(r, [2, 3, 10]), k = a === 2 ? int(r, 4, 7) : a === 3 ? 4 : int(r, 3, 6);
      return make(this.id, level, seed, { prompt: `Work out ${a}^${k}`, answer: intAns(a ** k), steps: [`${a}^${k} = ${Array(k).fill(a).join(' × ')} = ${W(a ** k)}`], traps: [tv(a * k, `A power means repeated multiplication, not ${a} × ${k}.`)] });
    }
    if (level === 2) {
      const s = int(r, 4, 12), c = int(r, 2, 5), b = int(r, 2, 5);
      const kind = pick(r, ['a', 'b', 'c']);
      if (kind === 'a') return make(this.id, level, seed, { prompt: `Work out √${s * s} + ${c}^3`, answer: intAns(s + c ** 3), steps: [`√${s * s} = ${s}`, `${c}^3 = ${c ** 3}`, `${s} + ${c ** 3} = ${s + c ** 3}`], traps: [tv(s + 3 * c, `${c}^3 was worked out as ${c} × 3. A power is repeated multiplication: ${c}^3 = ${c} × ${c} × ${c} = ${c ** 3}.`)] });
      if (kind === 'b') return make(this.id, level, seed, { prompt: `Work out ∛${c ** 3} × ${b}^2`, answer: intAns(c * b * b), steps: [`∛${c ** 3} = ${c}`, `${b}^2 = ${b * b}`, `${c} × ${b * b} = ${c * b * b}`], traps: [tv((c * b) ** 2, 'Only the second number is squared; work out each part first.')] });
      const n = int(r, 2, 4);
      return make(this.id, level, seed, { prompt: `Work out (−${n})^3 + ${s}^2`, answer: intAns(-(n ** 3) + s * s), steps: [`(−${n})^3 = ${num(-(n ** 3))} (three negatives: negative)`, `${s}^2 = ${s * s}`, `${num(-(n ** 3))} + ${s * s} = ${num(-(n ** 3) + s * s)}`], traps: [tv(n ** 3 + s * s, `(−${n})^3 is negative: an odd number of negative factors.`)] });
    }
    const n = pick(r, [2, 3]);
    for (let t = 0; t < 100; t++) {
      const x = int(r, 5, n === 2 ? 140 : 900);
      const lo = Math.floor(n === 2 ? Math.sqrt(x) : Math.cbrt(x) + 1e-9);
      if (lo ** n === x) continue;
      const sym = n === 2 ? '√' : '∛';
      const correct = `${lo} and ${lo + 1}`;
      const wrong = [`${lo - 1} and ${lo}`, `${lo + 1} and ${lo + 2}`, n === 2 ? `${Math.floor(x / 2)} and ${Math.floor(x / 2) + 1}` : `${Math.floor(x / 3)} and ${Math.floor(x / 3) + 1}`].filter(w => w !== correct && !w.startsWith('0 '));
      const c = choice(r, correct, [...new Set(wrong)].slice(0, 3), () => `${lo}^${n} = ${lo ** n} and ${lo + 1}^${n} = ${(lo + 1) ** n}. ${x} is between these, so ${sym}${x} is between ${lo} and ${lo + 1}.`);
      return make(this.id, level, seed, { prompt: `${sym}${x} lies between which two consecutive whole numbers?`, ...c,
        steps: [`Find the ${n === 2 ? 'square' : 'cube'} numbers either side of ${x}: ${lo}^${n} = ${lo ** n} and ${lo + 1}^${n} = ${(lo + 1) ** n}.`, `So ${sym}${x} is between ${lo} and ${lo + 1}${Math.abs(x - lo ** n) < Math.abs((lo + 1) ** n - x) ? `, nearer ${lo}` : `, nearer ${lo + 1}`}.`] });
    }
    throw new Error('powers: no item');
  },
};

const pw = (base, exp) => ({ kind: 'power', base, exp });
const indexLaws = {
  id: 'maths.number.powers.index-laws',
  name: 'Laws of indices',
  levels: [{ label: 'Multiply and divide powers' }, { label: 'Powers of powers and zero' }, { label: 'Negative indices' }, { label: 'Fractional indices', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const b = pick(r, [2, 3, 5, 7, 10]);
    if (level === 1) {
      const m = int(r, 2, 6), n = int(r, 2, 6);
      if (r() < 0.5) return make(this.id, level, seed, { prompt: `Write ${b}^${m} × ${b}^${n} as a single power of ${b}.`, answer: pw(b, m + n),
        steps: [`${b}^${m} × ${b}^${n} = (${m} lots of ${b}) × (${n} lots of ${b}) = ${m + n} lots of ${b}`, `Add the powers: ${b}^{${m + n}}`],
        traps: [tv(Math.abs(m * n) <= 12 ? F(b ** (m * n)) : null, 'When multiplying powers of the same base, add the powers; do not multiply them.')] });
      const hi = m + n;
      return make(this.id, level, seed, { prompt: `Write ${b}^${hi} ÷ ${b}^${n} as a single power of ${b}.`, answer: pw(b, m),
        steps: [`${n} of the ${b}s cancel with ${n} in the top.`, `Subtract the powers: ${hi} − ${n} = ${m}, so ${b}^{${m}}`],
        traps: [tv(hi % n === 0 && hi / n !== m ? F(b ** (hi / n)) : null, 'When dividing powers of the same base, subtract the powers; do not divide them.')] });
    }
    if (level === 2) {
      const kind = pick(r, ['pp', 'zero', 'combo']);
      if (kind === 'pp') { const m = int(r, 2, 4), n = int(r, 2, 4); return make(this.id, level, seed, { prompt: `Write (${b}^${m})^${n} as a single power of ${b}.`, answer: pw(b, m * n),
        steps: [`(${b}^${m})^${n} = ${Array(n).fill(`${b}^${m}`).join(' × ')}`, `Multiply the powers: ${m} × ${n} = ${m * n}, so ${b}^{${m * n}}`],
        traps: [tv(F(b ** (m + n)), 'A power of a power multiplies the indices; adding is for multiplying two powers.')] }); }
      if (kind === 'zero') { const n = int(r, 2, 9); return make(this.id, level, seed, { prompt: `Work out ${b}^${n} ÷ ${b}^${n}`, answer: intAns(1), steps: ['Anything divided by itself is 1.', `Using the law: ${b}^{${n} − ${n}} = ${b}^{0} = 1`], traps: [tv(0, `${b}^0 is 1, not 0: it is ${b}^${n} divided by itself.`)] }); }
      const p = int(r, 2, 5), q = int(r, 2, 5), s = int(r, 1, p + q - 1);
      return make(this.id, level, seed, { prompt: `Write {${b}^${p} × ${b}^${q}/${b}^${s}} as a single power of ${b}.`, answer: pw(b, p + q - s),
        steps: [`Top: ${b}^${p} × ${b}^${q} = ${b}^{${p + q}}`, `Divide: ${b}^{${p + q}} ÷ ${b}^${s} = ${b}^{${p + q - s}}`] });
    }
    if (level === 3) {
      const kind = pick(r, ['eval', 'eval', 'write']);
      const bb = pick(r, [2, 3, 4, 5, 10]), n = bb === 2 ? int(r, 1, 5) : bb === 10 ? int(r, 1, 3) : int(r, 1, 3);
      if (kind === 'eval') return make(this.id, level, seed, { prompt: `Work out ${bb}^{−${n}}. Give your answer as a fraction.`, answer: fracAns(F(1, bb ** n)),
        steps: ['A negative power means "one over": the reciprocal.', `${bb}^{−${n}} = {1/${bb}^${n}} = {1/${bb ** n}}`],
        traps: [tv(-(bb ** n), 'A negative power does not make the number negative. It means the reciprocal.'), tv(-bb * n, `${bb}^{−${n}} is not ${bb} × −${n}. It is 1 ÷ ${bb}^${n}.`)] });
      return make(this.id, level, seed, { prompt: `Write {1/${bb ** n}} as a power of ${bb}.`, answer: pw(bb, -n),
        steps: [`${bb ** n} = ${bb}^${n}`, `{1/${bb}^${n}} = ${bb}^{−${n}}`], traps: [tv(F(bb ** n), 'The reciprocal of a power has a negative index.')] });
    }
    const base = pick(r, [[4, 2], [9, 2], [16, 2], [25, 2], [8, 3], [27, 3], [64, 3], [16, 4], [125, 3], [36, 2]]);
    const [x, root] = base, rt = Math.round(x ** (1 / root));
    const top = pick(r, [1, 1, 2, root === 2 ? 3 : 2]), neg = r() < 0.35;
    const val = rt ** top;
    const ans = neg ? F(1, val) : F(val);
    return make(this.id, level, seed, { prompt: `Work out ${x}^{${neg ? '−' : ''}${top}/${root}}${neg ? '. Give your answer as a fraction.' : ''}`, answer: fracAns(ans),
      steps: [`The denominator ${root} means the ${root === 2 ? 'square' : root === 3 ? 'cube' : root + 'th'} root: ${root === 2 ? '√' : root === 3 ? '∛' : root + '√'}${x} = ${rt}`, top > 1 ? `The numerator ${top} means raise to the power ${top}: ${rt}^${top} = ${val}` : `So ${x}^{1/${root}} = ${rt}`, neg ? `The negative sign means the reciprocal: {1/${val}}` : ''].filter(Boolean),
      traps: [tv(Number.isInteger(x * top / root) ? (neg ? -x * top / root : x * top / root) : null, `A fractional index is not multiplication by ${top}/${root}. The denominator is a root; the numerator is a power.`), tv(neg ? F(val) : null, 'The negative index means take the reciprocal.'), tv(neg ? F(-val) : null, 'A negative index does not make the answer negative; it means the reciprocal.')] });
  },
};

/* ───────── Standard form (N9) ───────── */

const SF = (aText, n) => { const a = D(aText); return { kind: 'standard', a: { n: a.n, d: a.d }, n }; };
const sfText = (a, n) => `${a} × 10^{${num(n)}}`;
function mantissa(r, sig) { for (;;) { const a = rd(r, 1, 9.99, sig - 1); if (a.n / a.d >= 1 && a.n / a.d < 10 && (sig === 1 || a.n % 10 !== 0 || a.d === 1)) return a; } }
const ordinary = (a, n) => mul(a, n >= 0 ? F(10 ** n) : F(1, 10 ** -n));

const sfConvert = {
  id: 'maths.number.standard-form.convert',
  name: 'Write numbers in standard form',
  levels: [{ label: 'Large numbers' }, { label: 'Small numbers and back' }, { label: 'Correcting and comparing' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = mantissa(r, int(r, 1, 3)), n = int(r, 3, 9), v = ordinary(a, n);
      return make(this.id, level, seed, { prompt: `Write ${W(v.n)} in standard form.`, answer: SF(dt(a), n),
        steps: [`Place the decimal point after the first non-zero digit: ${dt(a)} (between 1 and 10).`, `Count how many places the digits move: ${n}.`, `${W(v.n)} = ${sfText(dt(a), n)}`],
        traps: [tv(ordinary(a, n - 1), `Count the places the decimal point moves, not just the zeros: it is ${n}.`), tv(ordinary(a, -n), 'A large number has a positive power of 10.')] });
    }
    if (level === 2) {
      const a = mantissa(r, int(r, 1, 3)), n = -int(r, 2, 7), v = ordinary(a, n);
      if (r() < 0.55) return make(this.id, level, seed, { prompt: `Write ${dt(v)} in standard form.`, answer: SF(dt(a), n),
        steps: [`Move the decimal point to just after the first non-zero digit: ${dt(a)}.`, `It moved ${-n} places right, so the power is ${num(n)}.`, `${dt(v)} = ${sfText(dt(a), n)}`],
        traps: [tv(ordinary(a, -n), 'A number less than 1 has a negative power of 10.'), tv(ordinary(a, n + 1), `Count the places the point moves to reach ${dt(a)}: ${-n}.`)] });
      const big = r() < 0.5, nn = big ? int(r, 3, 7) : n, vv = ordinary(a, nn);
      return make(this.id, level, seed, { prompt: `Write ${sfText(dt(a), nn)} as an ordinary number.`, answer: dec(vv),
        steps: [`${big ? 'Multiply' : 'Divide'} ${dt(a)} by 10 ${Math.abs(nn)} times: move the digits ${Math.abs(nn)} places ${big ? 'left (the number gets bigger)' : 'right (the number gets smaller)'}.`, `= ${big ? W(vv.n) : dt(vv)}`],
        traps: [tv(ordinary(a, -nn), `The power is ${num(nn)}: the number is ${big ? 'large' : 'small'}.`), tv(ordinary(a, nn > 0 ? nn - 1 : nn + 1), `Move the decimal point exactly ${Math.abs(nn)} places.`)] });
    }
    if (r() < 0.6) {
      const shift = pick(r, [1, -1]);
      let n; do { n = int(r, -6, 8); } while (n === 0 || n - shift === 0);
      const a = mantissa(r, 2);
      const shown = mul(a, shift > 0 ? F(10) : F(1, 10));
      return make(this.id, level, seed, { prompt: `${sfText(dt(shown), n - shift)} is not in standard form. Write it in standard form.`, answer: SF(dt(a), n),
        steps: [`${dt(shown)} is not between 1 and 10. Write it as ${sfText(dt(a), shift)}.`, `Then ${sfText(dt(a), shift)} × 10^{${num(n - shift)}} = ${sfText(dt(a), n)} (add the powers).`],
        traps: [tv(ordinary(a, n - 2 * shift), `Check the direction. ${dt(shown)} ${shift > 0 ? 'got 10 times smaller' : 'got 10 times bigger'}, so the power must go ${shift > 0 ? 'up' : 'down'} by 1.`)] });
    }
    const vals = []; const used = new Set();
    while (vals.length < 4) { const a = mantissa(r, 2), n = int(r, -5, 6); const k = dt(ordinary(a, n)); if (!used.has(k)) { used.add(k); vals.push([a, n]); } }
    const mag = ([a, n]) => (a.n / a.d) * 10 ** n;
    const wantLarge = r() < 0.5;
    const target = [...vals].sort((x, y) => (wantLarge ? mag(y) - mag(x) : mag(x) - mag(y)))[0];
    const label = ([a, n]) => sfText(dt(a), n);
    const c = choice(r, label(target), vals.filter(v => v !== target).map(label), () => 'Compare the powers of 10 first: the bigger power is the bigger number. Only compare the first numbers when the powers are equal.');
    return make(this.id, level, seed, { prompt: `Which number is the ${wantLarge ? 'largest' : 'smallest'}?`, ...c,
      steps: ['Compare the powers of 10 first; a negative power means a number less than 1.', `The ${wantLarge ? 'largest' : 'smallest'} is ${label(target)}.`] });
  },
};

const sfCalculate = {
  id: 'maths.number.standard-form.calculate',
  name: 'Calculate in standard form',
  levels: [{ label: 'Multiply and divide' }, { label: 'Adjusting the answer' }, { label: 'Add and subtract' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level < 3) {
      for (let t = 0; t < 300; t++) {
        const op = r() < 0.5 ? '×' : '÷';
        const a = F(int(r, 2, 9)), b = F(int(r, 2, 9)), m = int(r, -4, 8), n = int(r, -4, 8);
        const raw = op === '×' ? mul(a, b) : div(a, b);
        if (decText(raw) === null || places(raw) > 2) continue;
        const rv = raw.n / raw.d, needs = rv >= 10 || rv < 1;
        if ((level === 1) === needs) continue;
        const e = op === '×' ? m + n : m - n;
        const shift = rv >= 10 ? 1 : rv < 1 ? -1 : 0;
        const A = mul(raw, shift === 1 ? F(1, 10) : shift === -1 ? F(10) : F(1)), E = e + shift;
        if (Math.abs(E) > 12) continue;
        return make(this.id, level, seed, { prompt: `Work out (${sfText(dt(a), m)}) ${op} (${sfText(dt(b), n)}). Give your answer in standard form.`, answer: { kind: 'standard', a: { n: A.n, d: A.d }, n: E },
          steps: [`${op === '×' ? 'Multiply' : 'Divide'} the numbers: ${dt(a)} ${op} ${dt(b)} = ${dt(raw)}`, `${op === '×' ? 'Add' : 'Subtract'} the powers: 10^{${num(m)}} ${op} 10^{${num(n)}} = 10^{${num(e)}}`, shift ? `${dt(raw)} × 10^{${num(e)}} is not in standard form: ${dt(raw)} = ${sfText(dt(A), shift)}, so the answer is ${sfText(dt(A), E)}` : `= ${sfText(dt(A), E)}`],
          traps: (() => { const we = op === '×' ? m * n : n !== 0 && m % n === 0 ? m / n : null; return we !== null && we !== e && Math.abs(we) <= 12 ? [tv(ordinary(raw, we), `${op === '×' ? 'Add' : 'Subtract'} the powers of 10; do not ${op === '×' ? 'multiply' : 'divide'} them.`)] : []; })() });
      }
      throw new Error('sf calculate: no item');
    }
    const a = mantissa(r, 2), m = int(r, 3, 8), k = int(r, 1, 2), b = mantissa(r, 1), n = m - k;
    const op = r() < 0.6 ? '+' : '−';
    const v = op === '+' ? add(ordinary(a, m), ordinary(b, n)) : sub(ordinary(a, m), ordinary(b, n));
    const A = div(v, F(10 ** m)); let E = m, AA = A;
    if (AA.n / AA.d >= 10) { AA = div(AA, F(10)); E++; } else if (AA.n / AA.d < 1) { AA = mul(AA, F(10)); E--; }
    if (decText(AA) === null || AA.n <= 0) return this.gen(level, seed + 'a');
    return make(this.id, level, seed, { prompt: `Work out ${sfText(dt(a), m)} ${op} ${sfText(dt(b), n)}. Give your answer in standard form.`, answer: { kind: 'standard', a: { n: AA.n, d: AA.d }, n: E },
      steps: [`Make the powers match: ${sfText(dt(b), n)} = ${sfText(dt(ordinary(b, -k)), m)}`, `${dt(a)} ${op} ${dt(ordinary(b, -k))} = ${dt(A)}, so ${sfText(dt(A), m)}`, eq(A, AA) ? `= ${sfText(dt(AA), E)}` : `Adjust: ${sfText(dt(AA), E)}`],
      traps: [tv(ordinary(op === '+' ? add(a, b) : sub(a, b), m), `The powers of 10 are different (${m} and ${n}), so the first numbers cannot be ${op === '+' ? 'added' : 'subtracted'} directly. Convert one so the powers match.`)] });
  },
};

export const numberSkills2 = [decAddSub, decMultiply, decDivide, fdpConvert, fdpOrder, percentages, rounding, estimate, errorInterval, powersEvaluate, indexLaws, sfConvert, sfCalculate];
