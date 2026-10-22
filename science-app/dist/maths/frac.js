// Exact rational arithmetic and parsing of what students type.
export const gcd = (a, b) => {
  a = Math.abs(a); b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
};
export const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

export function F(n, d = 1) {
  if (!Number.isInteger(n) || !Number.isInteger(d) || d === 0) throw new Error(`Bad fraction ${n}/${d}`);
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1;
  return { n: n / g || 0, d: d / g }; // || 0 turns −0 into 0 so items survive JSON
}
export const add = (a, b) => F(a.n * b.d + b.n * a.d, a.d * b.d);
export const sub = (a, b) => F(a.n * b.d - b.n * a.d, a.d * b.d);
export const mul = (a, b) => F(a.n * b.n, a.d * b.d);
export const div = (a, b) => F(a.n * b.d, a.d * b.n);
export const eq = (a, b) => a.n === b.n && a.d === b.d;
export const fromMixed = (w, n, d) => F((Math.abs(w) * d + n) * (w < 0 ? -1 : 1), d);

/** Mixed-number parts of a fraction: {neg, whole, n, d}. */
export function mixedParts(f) {
  const neg = f.n < 0, a = Math.abs(f.n);
  return { neg, whole: Math.floor(a / f.d), n: a % f.d, d: f.d };
}

/** Markup understood by render.js: {3/4}, {1 2/3}, integers with a true minus sign. */
export function fracMarkup(f, { mixed = false } = {}) {
  if (f.d === 1) return num(f.n);
  const p = mixedParts(f), m = p.neg ? '−' : '';
  if (mixed && p.whole) return `${m}{${p.whole} ${p.n}/${p.d}}`;
  return `${m}{${Math.abs(f.n)}/${f.d}}`;
}
export const fracText = f => (f.d === 1 ? num(f.n) : `${f.n < 0 ? '−' : ''}${Math.abs(f.n)}/${f.d}`);
export const num = n => (n < 0 ? '−' + Math.abs(n) : String(n));

const MINUS = /[−‒–—﹣－]/g;
export const normalise = s => String(s ?? '').replace(MINUS, '-').replace(/\s+/g, ' ').trim();

/**
 * Parse a number the student wrote: "-3", "3/4", "-1 2/3", "0.25".
 * Returns {value, shape} where shape records how it was written (so marking can
 * say "correct value, not in simplest form"), or null when it cannot be read.
 */
export function parseNumber(raw) {
  const s = normalise(raw);
  let m;
  if ((m = s.match(/^(-)?\s*(\d+)$/))) {
    const v = Number(m[2]) * (m[1] ? -1 : 1);
    return { value: F(v), shape: { kind: 'integer' } };
  }
  if ((m = s.match(/^(-)?\s*(\d+)\s*\/\s*(\d+)$/))) {
    const n = Number(m[2]), d = Number(m[3]);
    if (!d) return null;
    return { value: F(n * (m[1] ? -1 : 1), d), shape: { kind: n >= d ? 'improper' : 'proper', n, d } };
  }
  if ((m = s.match(/^(-)?\s*(\d+)\s+(\d+)\s*\/\s*(\d+)$/))) {
    const w = Number(m[2]), n = Number(m[3]), d = Number(m[4]);
    if (!d) return null;
    return { value: F((w * d + n) * (m[1] ? -1 : 1), d), shape: { kind: 'mixed', w, n, d, properPart: n < d } };
  }
  if ((m = s.match(/^(-)?\s*(\d*)\.(\d+)$/))) {
    const d = 10 ** m[3].length, n = Number((m[2] || '0') + m[3]);
    return { value: F(n * (m[1] ? -1 : 1), d), shape: { kind: 'decimal', places: m[3].length, digits: ((m[2] || '') + m[3]).replace(/^0+/, '') } };
  }
  return null;
}

/** True when the written fraction cannot be simplified further. */
export function inSimplestForm(shape) {
  if (shape.kind === 'integer' || shape.kind === 'decimal') return true;
  if (shape.kind === 'mixed') return shape.properPart && gcd(shape.n, shape.d) === 1 && shape.n > 0;
  return gcd(shape.n, shape.d) === 1 && shape.d !== 1;
}

/** Terminating decimal text for a fraction whose denominator divides a power of 10 (null otherwise). */
export function decText(f, places = null) {
  let d = f.d, k = 0;
  while (d % 10 === 0) { d /= 10; k++; }
  while (d % 2 === 0) { d /= 2; k++; }
  while (d % 5 === 0) { d /= 5; k++; }
  if (d !== 1) return null;
  const P = places ?? k;
  const scaled = Math.round((Math.abs(f.n) * 10 ** P) / f.d);
  let str = String(scaled).padStart(P + 1, '0');
  if (P) str = str.slice(0, -P) + '.' + str.slice(-P);
  return (f.n < 0 ? '−' : '') + str;
}
/** Exact rational from a decimal string such as "3.25" or "-0.04". */
export function D(text) { const p = parseNumber(String(text)); if (!p) throw new Error('bad decimal ' + text); return p.value; }
