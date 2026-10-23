// Exact answers: a + b√r or a + bπ, with rational a and b.
// parseExact reads what a student types ("2√3/3", "(2/3)√3", "4 - 2√5", "3pi", "1/√2", "√12")
// and records how it was written, so marking can separate value from form:
//   value  - compared after simplifying every surd (√12 → 2√3) and collecting terms
//   form   - correct only with one simplified irrational term, no surd in a denominator
import { F, add, mul, div, eq, normalise, fracMarkup, num } from './frac.js?v=20261023-maths-r9';

export function squareFree(r) { // r = k²·s → {k, s}
  let k = 1, s = r;
  for (let p = 2; p * p <= s; p++) while (s % (p * p) === 0) { s /= p * p; k *= p; }
  return { k, s };
}
const ratTerm = (n, d) => F(Number(n), Number(d || 1));
const decOrInt = t => { const m = String(t).match(/^(\d+)(?:\.(\d+))?$/); return m ? F(Number(m[1] + (m[2] || '')), 10 ** (m[2] || '').length) : null; };

function parseTerm(term, flags) {
  let m;
  const sign = term.startsWith('-') ? -1 : 1;
  const t = term.replace(/^[+-]/, '');
  if (!t) return null;
  if ((m = t.match(/^(\d+(?:\.\d+)?)(?:\/(\d+))?$/))) { const c = decOrInt(m[1]); return { sym: null, coef: mul(F(sign), m[2] ? div(c, F(Number(m[2]))) : c) }; }
  if ((m = t.match(/^\((\d+)\/(\d+)\)(√\d+|π)$/))) return { sym: m[3], coef: F(sign * Number(m[1]), Number(m[2])) };
  if ((m = t.match(/^(\d+(?:\.\d+)?)?(?:\/(\d+))?(√\d+|π)(?:\/(\d+))?$/))) {
    let c = m[1] ? decOrInt(m[1]) : F(1);
    if (m[2]) c = div(c, F(Number(m[2])));
    if (m[4]) c = div(c, F(Number(m[4])));
    return { sym: m[3], coef: mul(F(sign), c) };
  }
  if ((m = t.match(/^(\d+)?\/(√(\d+))$/))) { flags.notRationalised = true; const r = Number(m[3]); return { sym: m[2], coef: F(sign * Number(m[1] || 1), r), times: r }; }
  return null;
}

/** → {rational, terms:[{sym, coef}], flags} or null */
export function parseExact(raw) {
  let t = normalise(raw).replace(/\s+/g, '').replace(/pi/gi, 'π').replace(/sqrt/gi, '√').replace(/√\((\d+)\)/g, '√$1').replace(/[×*·]/g, '');
  if (!t) return null;
  let outerDen = 1, m;
  if ((m = t.match(/^\((.+)\)\/(\d+)$/))) { t = m[1]; outerDen = Number(m[2]); }
  if (/[^\d+\-./√π()]/.test(t)) return null;
  const parts = t.match(/[+-]?[^+-]+/g);
  if (!parts || parts.join('') !== t) return null;
  const flags = {};
  let rational = F(0), rationalCount = 0;
  const terms = [];
  for (const p of parts) {
    const term = parseTerm(p, flags);
    if (!term) return null;
    term.coef = div(term.coef, F(outerDen));
    if (term.sym === null) { rational = add(rational, term.coef); rationalCount++; }
    else terms.push(term);
  }
  if (rationalCount > 1) flags.uncollected = true;
  const syms = terms.map(x => x.sym);
  if (new Set(syms).size < syms.length) flags.uncollected = true;
  for (const x of terms) if (x.sym !== 'π' && squareFree(Number(x.sym.slice(1))).k > 1) flags.radNotSquarefree = true;
  if (terms.some(x => x.sym === '√1' || x.sym === '√0')) flags.radNotSquarefree = true;
  return { rational, terms, flags };
}

/** Canonical value: {a, map: {s|'π': coef}} with every surd reduced to square-free form. */
export function canonical(p) {
  let a = p.rational;
  const map = {};
  for (const x of p.terms) {
    if (x.sym === 'π') { map.π = add(map.π || F(0), x.coef); continue; }
    const r = Number(x.sym.slice(1));
    const { k, s } = squareFree(r);
    const c = mul(x.coef, F(k));
    if (s === 1) a = add(a, c);
    else map[s] = add(map[s] || F(0), c);
  }
  for (const key of Object.keys(map)) if (map[key].n === 0) delete map[key];
  return { a, map };
}
const sameCanon = (x, y) => eq(x.a, y.a) && Object.keys(x.map).length === Object.keys(y.map).length && Object.keys(x.map).every(k => y.map[k] && eq(x.map[k], y.map[k]));
export const specCanon = spec => canonical({ rational: F(spec.a.n, spec.a.d), terms: spec.b.n === 0 ? [] : [{ sym: spec.r === 'pi' ? 'π' : '√' + spec.r, coef: F(spec.b.n, spec.b.d) }] });

export function markExact(spec, raw) {
  const p = parseExact(raw);
  if (!p) return { status: 'invalid', code: 'format-exact' };
  if (!sameCanon(canonical(p), specCanon(spec))) {
    const approx = p.terms.length === 0 && spec.b.n !== 0 && Math.abs(p.rational.n / p.rational.d - exactNumber(spec)) <= 0.051 * Math.max(1, Math.abs(exactNumber(spec)) / 10);
    return approx ? { status: 'partial', code: 'want-exact' } : { status: 'wrong', code: 'value', given: p };
  }
  if (p.flags.notRationalised) return { status: 'partial', code: 'not-rationalised' };
  if (p.flags.radNotSquarefree || p.flags.uncollected) return { status: 'partial', code: 'surd-not-simplified' };
  return { status: 'correct' };
}
export const exactMatches = (trap, raw) => { const p = parseExact(raw); return !!p && sameCanon(canonical(p), specCanon(trap)); };

/** Markup: 4 + 2√3, {2√3/3}, −√5, 3π, {3π/4}. */
export function exactMarkup({ a, b, r }) {
  const A = F(a.n, a.d), B = F(b.n, b.d), sym = r === 'pi' ? 'π' : '√' + r;
  const irr = B.n === 0 ? '' : (() => {
    const absN = Math.abs(B.n), top = `${absN === 1 ? '' : absN}${sym}`;
    return B.d === 1 ? top : `{${top}/${B.d}}`;
  })();
  if (A.n === 0) return B.n === 0 ? '0' : (B.n < 0 ? '−' : '') + irr;
  if (B.n === 0) return fracMarkup(A);
  return `${fracMarkup(A)} ${B.n < 0 ? '−' : '+'} ${irr}`;
}
/** Approximate numeric value (tests and estimates only). */
export const exactNumber = ({ a, b, r }) => a.n / a.d + (b.n / b.d) * (r === 'pi' ? Math.PI : Math.sqrt(r));

/* ───────── ratios ───────── */
export function parseRatio(raw) {
  const t = normalise(raw).replace(/\s+/g, '');
  if (!/^\d+(\.\d+)?(:\d+(\.\d+)?)+$/.test(t)) return null;
  return t.split(':').map(x => decOrInt(x));
}
export function markRatio(spec, raw) {
  const p = parseRatio(raw);
  if (!p) return { status: 'invalid', code: 'format-ratio' };
  const want = spec.parts;
  if (p.length !== want.length) return { status: 'wrong', code: 'ratio-length' };
  const prop = (xs, ys) => xs.every((x, i) => eq(mul(x, F(ys[0])), mul(xs[0], F(ys[i]))));
  if (!prop(p, want)) return { status: 'wrong', code: 'value', given: p, reversed: prop([...p].reverse(), want) };
  const ints = p.every(x => x.d === 1);
  const g = p.reduce((acc, x) => { const gg = (u, v) => (v ? gg(v, u % v) : u); return gg(acc, x.n); }, 0);
  return ints && g === 1 ? { status: 'correct' } : { status: 'partial', code: 'ratio-not-simplest' };
}
export const ratioMarkup = spec => spec.parts.join(' : ');
/** True when parsed parts (rationals) are in the same proportion as integer parts. */
export const ratioProportional = (p, parts) => p.length === parts.length && p.every((x, i) => eq(mul(x, F(parts[0])), mul(p[0], F(parts[i]))));
export { num };
