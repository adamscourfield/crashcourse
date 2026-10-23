// Answer specifications and exact marking.
//
// Kinds:
//   {kind:'integer', value}
//   {kind:'fraction', value:{n,d}, form:'simplest'|'mixed'|'improper'}
//   {kind:'primes', value:{2:3, 3:1}}           product of prime powers, any order/notation
//   {kind:'choice', options:[markup...], answer:index}
//   {kind:'decimal', value:{n,d}, dp?, sf?}      terminating decimal; dp/sf demand that many written places/figures
//   {kind:'standard', a:{n,d}, n}               A × 10^n with 1 ≤ |A| < 10
//   {kind:'power', base, exp}                   a single power such as 5^7 or 2^-3
//   {kind:'interval', lo:{n,d}, hi:{n,d}, loIn, hiIn}   error interval such as 4.25 ≤ x < 4.35
//   {kind:'exact', a:{n,d}, b:{n,d}, r}         a + b√r (r a square-free integer) or a + bπ (r = 'pi')
//   {kind:'ratio', parts:[2, 5]}                ratio in simplest whole-number form
//
// mark() returns {status, code}. status is one of:
//   'correct'   - full marks
//   'partial'   - right value written in a form the question did not ask for
//                 (not simplified, not a mixed number, not all prime). Counts as wrong
//                 for mastery, as it would lose the final mark in an exam.
//   'wrong'     - wrong value
//   'invalid'   - could not be read; nothing is recorded and the student fixes the format
import { markAlgebra, algebraPreview } from './algebra.js?v=20261023-maths-r9';
import { markPoints, markLine, pointsMarkup, lineMarkup, parsePoints } from './graph.js?v=20261023-maths-r9';
import { markSolutions, solutionsMarkup, solutionsGiven, markInequality, inequalityMarkup, markList, listMarkup } from './sets.js?v=20261023-maths-r9';
import { markExact, exactMarkup, markRatio, ratioMarkup, parseExact, parseRatio } from './exact.js?v=20261023-maths-r9';
import { F, eq, mul, parseNumber, inSimplestForm, normalise, fracMarkup, num, mixedParts, decText } from './frac.js?v=20261023-maths-r9';

export function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}
export function primeFactors(n) {
  const out = {};
  for (let p = 2; p * p <= n; p++) while (n % p === 0) { out[p] = (out[p] || 0) + 1; n /= p; }
  if (n > 1) out[n] = (out[n] || 0) + 1;
  return out;
}
export const productOf = f => Object.entries(f).reduce((t, [p, k]) => t * Number(p) ** k, 1);
export const primesMarkup = f =>
  Object.keys(f).map(Number).sort((a, b) => a - b).map(p => (f[p] > 1 ? `${p}^${f[p]}` : String(p))).join(' × ');

const SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };

/** Parse "2^3 × 3", "2³x3", "2*2*2*3", "2.2.2.3" into {base: count} or null. */
export function parsePrimeProduct(raw) {
  let s = normalise(raw).toLowerCase();
  s = s.replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, m => '^' + [...m].map(c => SUP[c]).join(''));
  s = s.replace(/\s*\^\s*/g, '^').replace(/\s*\*\*\s*/g, '^');
  const parts = s.split(/\s*[×x*·.]\s*|\s+/).filter(Boolean);
  if (!parts.length) return null;
  const out = {};
  for (const part of parts) {
    const m = part.match(/^(\d+)(?:\^(\d+))?$/);
    if (!m) return null;
    const b = Number(m[1]), k = m[2] ? Number(m[2]) : 1;
    if (!b || !k) return null;
    out[b] = (out[b] || 0) + k;
  }
  return out;
}

const SUPS = { '⁻': '-', '−': '-' };
const supToCaret = t => t.replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+)/g, m => '^' + [...m].map(c => SUP[c] ?? SUPS[c] ?? c).join(''));
const pow10 = n => (n >= 0 ? F(10 ** n) : F(1, 10 ** -n));

/** Parse "3.2 × 10^5", "3.2x10^-4", "3.2 * 10^(−4)", "3.2e5" → {a, n}; null if not of that shape. */
export function parseStandard(raw) {
  let t = supToCaret(normalise(raw)).toLowerCase().replace(/\s+/g, '');
  let m = t.match(/^(-?\d+(?:\.\d+)?|-?\.\d+)(?:[×x*·]10\^\(?(-?\d+)\)?|e(-?\d+))$/);
  if (!m) return null;
  const a = parseNumber(m[1]);
  if (!a) return null;
  return { a: a.value, n: Number(m[2] ?? m[3]) };
}
/** Parse "5^7", "2^-3", "5⁷", "(-3)^4" → {base, exp}. */
export function parsePower(raw) {
  const t = supToCaret(normalise(raw)).replace(/\s+/g, '');
  const m = t.match(/^\(?(-?\d+)\)?\^\(?(-?\d+)\)?$/);
  return m ? { base: Number(m[1]), exp: Number(m[2]) } : null;
}
const powValue = (b, e) => (Math.abs(e) > 40 ? null : e >= 0 ? F(b ** e) : F(1, b ** -e));
/** Parse "4.25 <= x < 4.35" (any letter, ≤ or <=) → {lo, hi, loIn, hiIn}. */
export function parseInterval(raw) {
  const t = normalise(raw).replace(/<=|=</g, '≤').replace(/\s+/g, '');
  const m = t.match(/^(-?[\d.]+)(≤|<)[a-z]+(≤|<)(-?[\d.]+)$/i);
  if (!m) return null;
  const lo = parseNumber(m[1]), hi = parseNumber(m[4]);
  if (!lo || !hi) return null;
  return { lo: lo.value, hi: hi.value, loIn: m[2] === '≤', hiIn: m[3] === '≤' };
}

/** The numeric value a raw answer represents (for trap matching), or null. */
export function answerValue(spec, raw) {
  raw = stripVar(spec, raw);
  if (spec.kind === 'standard') { const s = parseStandard(raw); if (s) return mul(s.a, pow10(s.n)); }
  if (spec.kind === 'power') { const p = parsePower(raw); if (p) return powValue(p.base, p.exp); }
  if (['interval', 'choice', 'primes', 'exact', 'ratio', 'algebra', 'solutions', 'inequality', 'list', 'points', 'line'].includes(spec.kind)) return null;
  const p = parseNumber(raw);
  return p ? p.value : null;
}
export const specValue = spec => (spec.kind === 'integer' ? F(spec.value) : spec.kind === 'standard' ? mul(F(spec.a.n, spec.a.d), pow10(spec.n)) : spec.kind === 'power' ? powValue(spec.base, spec.exp) : F(spec.value.n, spec.value.d));

/** Remove "x =" from a numeric answer to an equation. */
const stripVar = (spec, raw) => (spec.var ? String(raw ?? '').replace(new RegExp('^\\s*' + spec.var + '\\s*=\\s*', 'i'), '') : raw);

export function mark(spec, raw) {
  raw = stripVar(spec, raw);
  if (spec.kind === 'algebra') return normalise(raw) === '' ? { status: 'invalid', code: 'empty' } : markAlgebra(spec, raw);
  if (spec.kind === 'points') return markPoints(spec, raw);
  if (spec.kind === 'line') return markLine(spec, raw);
  if (['solutions', 'inequality', 'list'].includes(spec.kind)) {
    if (normalise(raw) === '' || /^[;,\s]*$/.test(raw)) return { status: 'invalid', code: 'empty' };
    return spec.kind === 'solutions' ? markSolutions(spec, raw) : spec.kind === 'inequality' ? markInequality(spec, raw) : markList(spec, raw);
  }
  if (spec.kind === 'choice') {
    if (raw === null || raw === undefined || raw === '') return { status: 'invalid', code: 'empty' };
    return Number(raw) === spec.answer ? { status: 'correct' } : { status: 'wrong', code: 'choice' };
  }
  if (normalise(raw) === '') return { status: 'invalid', code: 'empty' };

  if (spec.kind === 'primes') {
    const f = parsePrimeProduct(raw);
    if (!f) return { status: 'invalid', code: 'format' };
    const target = spec.value;
    const sameProduct = productOf(f) === productOf(target);
    const allPrime = Object.keys(f).every(b => isPrime(Number(b)));
    if (sameProduct && allPrime) return { status: 'correct' };
    if (sameProduct) return { status: 'partial', code: 'not-all-prime', given: f };
    return { status: 'wrong', code: allPrime ? 'wrong-product' : 'wrong-product-composite', given: f };
  }

  if (spec.kind === 'exact') return markExact(spec, raw);
  if (spec.kind === 'ratio') return markRatio(spec, raw);
  if (spec.kind === 'interval') {
    const iv = parseInterval(raw);
    if (!iv) return { status: 'invalid', code: 'format-interval' };
    const ends = eq(iv.lo, F(spec.lo.n, spec.lo.d)) && eq(iv.hi, F(spec.hi.n, spec.hi.d));
    if (!ends) return { status: 'wrong', code: 'interval-value', given: iv };
    return iv.loIn === spec.loIn && iv.hiIn === spec.hiIn ? { status: 'correct' } : { status: 'partial', code: 'interval-ends' };
  }
  if (spec.kind === 'standard') {
    const st = parseStandard(raw), plain = st ? null : parseNumber(raw);
    if (!st && !plain) return { status: 'invalid', code: 'format-standard' };
    const v = st ? mul(st.a, pow10(st.n)) : plain.value;
    if (!eq(v, specValue(spec))) return { status: 'wrong', code: 'value', given: v };
    const A = st ? Math.abs(st.a.n / st.a.d) : null;
    return st && A >= 1 && A < 10 ? { status: 'correct' } : { status: 'partial', code: 'want-standard' };
  }
  if (spec.kind === 'power') {
    const pw = parsePower(raw), plain = pw ? null : parseNumber(raw);
    if (!pw && !plain) return { status: 'invalid', code: 'format-power' };
    if (pw && pw.base === spec.base && pw.exp === spec.exp) return { status: 'correct' };
    const v = pw ? powValue(pw.base, pw.exp) : plain.value;
    return v && eq(v, specValue(spec)) ? { status: 'partial', code: 'want-power' } : { status: 'wrong', code: 'value', given: v };
  }
  const parsed = parseNumber(raw);
  if (spec.kind === 'decimal') {
    if (!parsed) return { status: 'invalid', code: 'format' };
    if (spec.tol != null) { const t = specValue(spec); return Math.abs(parsed.value.n / parsed.value.d - t.n / t.d) <= spec.tol + 1e-9 ? { status: 'correct' } : { status: 'wrong', code: 'value', given: parsed.value }; }
    if (!eq(parsed.value, specValue(spec))) return { status: 'wrong', code: 'value', given: parsed.value };
    const sh = parsed.shape;
    if (sh.kind !== 'decimal' && sh.kind !== 'integer') return { status: 'partial', code: 'want-decimal' };
    if (spec.dp != null && (sh.kind === 'decimal' ? sh.places : 0) !== spec.dp) return { status: 'partial', code: 'dp-format' };
    if (spec.sf != null && sh.kind === 'decimal' && sh.digits.length < spec.sf) return { status: 'partial', code: 'sf-format' };
    return { status: 'correct' };
  }
  if (!parsed && spec.kind === 'integer' && spec.allowProduct) {
    const f = parsePrimeProduct(raw);
    if (!f) return { status: 'invalid', code: 'format' };
    return productOf(f) === spec.value ? { status: 'correct' } : { status: 'wrong', code: 'value', given: F(productOf(f)) };
  }
  if (!parsed) return { status: 'invalid', code: 'format' };
  const target = spec.kind === 'integer' ? F(spec.value) : F(spec.value.n, spec.value.d);
  const given = parsed.value;
  if (!eq(given, target)) return { status: 'wrong', code: 'value', given };
  if (spec.form === 'value') return { status: 'correct' };

  const shape = parsed.shape;
  if (spec.kind === 'integer') {
    if (shape.kind === 'integer' || shape.kind === 'decimal') return { status: 'correct' };
    return { status: 'partial', code: 'write-as-integer' };
  }
  // fraction answers
  if (target.d === 1) {
    return shape.kind === 'integer' ? { status: 'correct' } : { status: 'partial', code: 'write-as-integer' };
  }
  if (shape.kind === 'decimal') return { status: 'partial', code: 'decimal-not-fraction' };
  if (!inSimplestForm(shape)) return { status: 'partial', code: 'not-simplest' };
  if (spec.form === 'mixed' && Math.abs(target.n) > target.d && shape.kind !== 'mixed') return { status: 'partial', code: 'want-mixed' };
  if (spec.form === 'improper' && shape.kind === 'mixed') return { status: 'partial', code: 'want-improper' };
  return { status: 'correct' };
}

export const PARTIAL_MESSAGES = {
  'not-simplest': 'That has the right value, but it is not in its simplest form. Divide the numerator and denominator by their highest common factor.',
  'write-as-integer': 'That has the right value, but write it as a whole number.',
  'decimal-not-fraction': 'That has the right value, but the question asks for a fraction.',
  'want-mixed': 'That has the right value, but the question asks for a mixed number.',
  'want-improper': 'That has the right value, but the question asks for an improper fraction.',
  'not-all-prime': 'Those numbers multiply to the right total, but not every factor is prime. Keep splitting until only primes are left.',
  'want-decimal': 'That has the right value, but the question asks for a decimal.',
  'dp-format': 'That has the right value, but it needs exactly the number of decimal places asked for. Keep any final zero, such as 3.10 for 2 decimal places.',
  'sf-format': 'That has the right value, but show all the significant figures asked for, including a final zero if there is one.',
  'want-standard': 'That has the right value, but it is not in standard form. The first number must be at least 1 and less than 10.',
  'want-power': 'That has the right value, but the question asks for a single power of the given base.',
  'want-exact': 'That is a decimal approximation. The question asks for an exact answer: leave it in terms of π or as a surd.',
  'not-rationalised': 'That has the right value, but the denominator still contains a surd. Multiply the top and bottom by that surd to rationalise it.',
  'surd-not-simplified': 'That has the right value, but it is not fully simplified. Take out any square factor (√12 = 2√3) and collect like terms.',
  'ratio-not-simplest': 'That ratio is equivalent, but not in its simplest form. Divide every part by their highest common factor, using whole numbers.',
  'want-expanded': 'That is equivalent, but the question asks you to expand: multiply out the brackets and collect like terms.',
  'want-factorised': 'That is equivalent, but the question asks you to factorise: write it as a product with brackets.',
  'not-fully-factorised': 'That is equivalent, but not fully factorised. A bracket still has a common factor, or a quadratic bracket can still be factorised.',
  'not-simplified': 'That is equivalent, but not fully simplified. Collect like terms, and write x × x as x^2.',
  notation: 'That is equivalent, but write it without × or ÷ signs: 3ab, not 3 × a × b, and a/b for a ÷ b.',
  'notation-decimal': 'That is equivalent, but write coefficients as fractions rather than decimals: x/2, not 0.5x.',
  'dp-round': 'Those values round to the right answers, but give each one rounded to the number of decimal places asked for.',
  'line-two-points': 'Plot at least two points on the line.',
  'one-solution': 'That solution is right, but there is another. A quadratic equation usually has two solutions: find both.',
  'ineq-ends': 'The boundary values are right, but check each sign: ≤ and ≥ include the boundary value; < and > do not.',
  'want-single-fraction': 'That is equivalent, but write it as a single fraction: one numerator over one denominator.',
  'not-cancelled': 'That is equivalent, but the top and bottom still share a common factor. Factorise both and cancel it.',
  'want-completed-square': 'That is equivalent, but the question asks for the completed-square form (x + p)^2 + q.',
  'interval-ends': 'The two end values are right, but check the signs. The lower bound is included (≤); the upper bound is not (<), because it would round up.',
};

/** Written decimal places a decimal answer needs (dp, or enough to show sf significant figures). */
export function decimalPlacesFor(spec) {
  if (spec.dp != null) return spec.dp;
  if (spec.sf == null) return null;
  const v = Math.abs(spec.value.n / spec.value.d);
  return v === 0 ? null : Math.max(0, spec.sf - 1 - Math.floor(Math.log10(v) + 1e-12));
}

/** Correct answer as render.js markup. */
export function answerMarkup(spec) {
  if (spec.var) return `${spec.var} = ${answerMarkup({ ...spec, var: undefined })}`;
  if (spec.kind === 'algebra') return spec.subject ? `${spec.subject} = ${spec.display}` : spec.display;
  if (spec.kind === 'solutions') return solutionsMarkup(spec);
  if (spec.kind === 'points') return pointsMarkup(spec.points);
  if (spec.kind === 'line') return lineMarkup(spec);
  if (spec.kind === 'decimal' && spec.tol) {
    const v = spec.value.n / spec.value.d, k = spec.tol >= 0.1 ? 10 : 100, rd = x => num(Math.round(x * k) / k);
    return `${rd(v)} (accept ${rd(v - spec.tol)} to ${rd(v + spec.tol)})`;
  }
  if (spec.kind === 'inequality') return inequalityMarkup(spec);
  if (spec.kind === 'list') return listMarkup(spec);
  if (spec.kind === 'integer') return num(spec.value);
  if (spec.kind === 'fraction') {
    const f = F(spec.value.n, spec.value.d);
    return fracMarkup(f, { mixed: spec.form === 'mixed' });
  }
  if (spec.kind === 'primes') return primesMarkup(spec.value);
  if (spec.kind === 'decimal') return decText(F(spec.value.n, spec.value.d), decimalPlacesFor(spec)) ?? fracMarkup(F(spec.value.n, spec.value.d));
  if (spec.kind === 'standard') return `${decText(F(spec.a.n, spec.a.d))} × 10^{${num(spec.n)}}`;
  if (spec.kind === 'power') return `${spec.base < 0 ? `(${num(spec.base)})` : spec.base}^{${num(spec.exp)}}`;
  if (spec.kind === 'exact') return exactMarkup(spec);
  if (spec.kind === 'ratio') return ratioMarkup(spec);
  if (spec.kind === 'interval') return `${decText(F(spec.lo.n, spec.lo.d))} ${spec.loIn ? '≤' : '<'} x ${spec.hiIn ? '≤' : '<'} ${decText(F(spec.hi.n, spec.hi.d))}`;
  return spec.options[spec.answer];
}

/** Student's raw answer as markup, for result tables. */
export function givenMarkup(spec, raw) {
  if (raw === undefined || raw === null || raw === '') return 'Not answered';
  if (spec.kind === 'choice') return spec.options[Number(raw)] ?? 'Not answered';
  if (spec.kind === 'algebra') return algebraPreview(raw);
  if (spec.kind === 'solutions') return solutionsGiven(spec, raw);
  if (spec.kind === 'points' || spec.kind === 'line') { const p = parsePoints(raw); return p ? (p.length ? pointsMarkup(p) : 'No points plotted') : normalise(raw); }
  if (spec.kind === 'inequality' || spec.kind === 'list') return normalise(raw).replace(/<=/g, '≤').replace(/>=/g, '≥').replace(/-/g, '−');
  raw = stripVar(spec, raw);
  if (spec.kind === 'primes') {
    const f = parsePrimeProduct(raw);
    return f ? Object.entries(f).map(([b, k]) => (k > 1 ? `${b}^${k}` : b)).join(' × ') : normalise(raw);
  }
  if (spec.kind === 'exact' || spec.kind === 'ratio') return normalise(raw).replace(/pi/gi, 'π').replace(/-/g, '−');
  if (['standard', 'power', 'interval'].includes(spec.kind)) return normalise(raw).replace(/<=/g, '≤').replace(/\^\(?(-?\d+)\)?/g, (_, k) => `^{${k.replace('-', '−')}}`).replace(/-/g, '−').replace(/\s*[x*]\s*10/gi, ' × 10');
  const p = parseNumber(raw);
  if (!p) return normalise(raw);
  const s = p.shape, neg = p.value.n < 0 ? '−' : '';
  if (s.kind === 'mixed') return `${neg}{${s.w} ${s.n}/${s.d}}`;
  if (s.kind === 'proper' || s.kind === 'improper') return `${neg}{${s.n}/${s.d}}`;
  return normalise(raw).replace(/^-/, '−');
}

export { mixedParts };
