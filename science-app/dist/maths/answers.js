// Answer specifications and exact marking.
//
// Kinds:
//   {kind:'integer', value}
//   {kind:'fraction', value:{n,d}, form:'simplest'|'mixed'|'improper'}
//   {kind:'primes', value:{2:3, 3:1}}           product of prime powers, any order/notation
//   {kind:'choice', options:[markup...], answer:index}
//
// mark() returns {status, code}. status is one of:
//   'correct'   - full marks
//   'partial'   - right value written in a form the question did not ask for
//                 (not simplified, not a mixed number, not all prime). Counts as wrong
//                 for mastery, as it would lose the final mark in an exam.
//   'wrong'     - wrong value
//   'invalid'   - could not be read; nothing is recorded and the student fixes the format
import { F, eq, parseNumber, inSimplestForm, normalise, fracMarkup, num, mixedParts } from './frac.js?v=20261022-maths-r1';

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

export function mark(spec, raw) {
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

  const parsed = parseNumber(raw);
  if (!parsed && spec.kind === 'integer' && spec.allowProduct) {
    const f = parsePrimeProduct(raw);
    if (!f) return { status: 'invalid', code: 'format' };
    return productOf(f) === spec.value ? { status: 'correct' } : { status: 'wrong', code: 'value', given: F(productOf(f)) };
  }
  if (!parsed) return { status: 'invalid', code: 'format' };
  const target = spec.kind === 'integer' ? F(spec.value) : F(spec.value.n, spec.value.d);
  const given = parsed.value;
  if (!eq(given, target)) return { status: 'wrong', code: 'value', given };

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
};

/** Correct answer as render.js markup. */
export function answerMarkup(spec) {
  if (spec.kind === 'integer') return num(spec.value);
  if (spec.kind === 'fraction') {
    const f = F(spec.value.n, spec.value.d);
    return fracMarkup(f, { mixed: spec.form === 'mixed' });
  }
  if (spec.kind === 'primes') return primesMarkup(spec.value);
  return spec.options[spec.answer];
}

/** Student's raw answer as markup, for result tables. */
export function givenMarkup(spec, raw) {
  if (raw === undefined || raw === null || raw === '') return 'Not answered';
  if (spec.kind === 'choice') return spec.options[Number(raw)] ?? 'Not answered';
  if (spec.kind === 'primes') {
    const f = parsePrimeProduct(raw);
    return f ? Object.entries(f).map(([b, k]) => (k > 1 ? `${b}^${k}` : b)).join(' × ') : normalise(raw);
  }
  const p = parseNumber(raw);
  if (!p) return normalise(raw);
  const s = p.shape, neg = p.value.n < 0 ? '−' : '';
  if (s.kind === 'mixed') return `${neg}{${s.w} ${s.n}/${s.d}}`;
  if (s.kind === 'proper' || s.kind === 'improper') return `${neg}{${s.n}/${s.d}}`;
  return normalise(raw).replace(/^-/, '−');
}

export { mixedParts };
