// Answers that are sets of values rather than one number or expression.
//
//   {kind:'solutions', vars:['x'], sols:[[{n,d}], [{n,d}]], dp?, labels?}
//       Roots of an equation (x = 2 or x = −5), or solution pairs of simultaneous equations
//       (vars ['x','y']). Raw answers are rows separated by ';', values within a row by ','.
//       Order of rows does not matter. With dp, values must be written to dp decimal places.
//   {kind:'inequality', letter:'x', set:[{lo, loIn, hi, hiIn}]}  (lo/hi null = unbounded)
//       Solution set of an inequality: x > 3, −2 < x ≤ 3, x < −2 or x > 3.
//   {kind:'list', values:[−1, 0, 1]}  a set of integers, any order.
import { F, eq, normalise, parseNumber, decText, fracMarkup, num } from './frac.js?v=20261023-maths-r9';

const val = f => F(f.n, f.d);
const fmt = (f, dp) => (dp != null ? decText(val(f), dp) ?? fracMarkup(val(f)) : val(f).d === 1 ? num(val(f).n) : fracMarkup(val(f)));

/* ───────── solutions ───────── */
export function parseSolutions(raw, vars) {
  const rows = normalise(raw).split(/;|\bor\b/i).map(r => r.trim()).filter(Boolean);
  if (!rows.length) return null;
  const out = [];
  for (const row of rows) {
    const cells = row.split(',').map(c => c.trim());
    if (cells.length !== vars.length) return null;
    const vals = [];
    for (let i = 0; i < cells.length; i++) {
      const c = cells[i].replace(new RegExp('^' + vars[i] + '\\s*=\\s*', 'i'), '');
      const p = parseNumber(c);
      if (!p) return null;
      vals.push(p);
    }
    out.push(vals);
  }
  return out;
}
let TOL = null; // set while marking a spec with a read-off tolerance
const rowEq = (row, sol) => row.every((p, i) => (TOL != null ? Math.abs(p.value.n / p.value.d - sol[i].n / sol[i].d) <= TOL + 1e-9 : eq(p.value, val(sol[i]))));
/** Match rows to solutions one-to-one, in any order. Returns the number matched. */
function matchCount(rows, sols) {
  const used = new Set();
  let n = 0;
  for (const row of rows) {
    const j = sols.findIndex((s, k) => !used.has(k) && rowEq(row, s));
    if (j >= 0) { used.add(j); n++; }
  }
  return n;
}
export function markSolutions(spec, raw) {
  TOL = spec.tol ?? null;
  try { return markSolutionsInner(spec, raw); } finally { TOL = null; }
}
function markSolutionsInner(spec, raw) {
  const rows = parseSolutions(raw, spec.vars);
  if (!rows) return { status: 'invalid', code: 'format-solutions' };
  const want = spec.sols;
  const hit = matchCount(rows, want);
  const dpOK = p => p.shape.kind === 'integer' || (p.shape.kind === 'decimal' && p.shape.places === spec.dp);
  if (hit === want.length && rows.length === want.length) {
    if (spec.dp != null && rows.some(r => r.some(p => !dpOK(p)))) return { status: 'partial', code: 'dp-format' };
    return { status: 'correct' };
  }
  if (spec.dp != null && rows.length === want.length) {
    const k = 10 ** spec.dp, rounded = rows.map(r => r.map(p => ({ value: F(Math.round((p.value.n / p.value.d) * k), k) })));
    if (matchCount(rounded, want) === want.length) return { status: 'partial', code: 'dp-round' };
  }
  if (want.length === 2 && hit === 1 && rows.length === 1) return { status: 'partial', code: 'one-solution' };
  if (spec.vars.length === 2 && rows.length === want.length && matchCount(rows.map(r => [...r].reverse()), want) === want.length) return { status: 'wrong', code: 'swapped' };
  return { status: 'wrong', code: 'value', hit, count: rows.length };
}
export const solutionsMatch = (trapSols, raw, spec) => { TOL = spec.tol ?? null; try { return solutionsMatchInner(trapSols, raw, spec); } finally { TOL = null; } };
const solutionsMatchInner = (trapSols, raw, spec) => { const rows = parseSolutions(raw, spec.vars); return !!rows && rows.length === trapSols.length && matchCount(rows, trapSols) === trapSols.length; };
export function solutionsMarkup(spec) {
  const lab = (i, v) => { const l = spec.labels?.[i] ?? v + ' ='; return l.endsWith('£') ? l : l + ' '; };
  const one = s => spec.vars.map((v, i) => `${lab(i, v)}${fmt(s[i], spec.dp)}`).join(', ');
  return spec.sols.map(one).join(spec.vars.length === 1 ? ' or ' : ' and ') + (spec.tol ? ` (accept answers within ${spec.tol})` : '');
}
export function solutionsGiven(spec, raw) {
  const rows = parseSolutions(raw, spec.vars);
  if (!rows) return normalise(raw);
  return rows.map(r => r.map((p, i) => `${(spec.labels?.[i] ?? spec.vars[i] + ' =').replace(/([^£])$/, '$1 ')}${normalise(p.shape.kind === 'decimal' || p.shape.kind === 'integer' ? decText(p.value, p.shape.places ?? 0) : fracMarkup(p.value))}`).join(', ')).join(spec.vars.length === 1 ? ' or ' : ' and ');
}

/* ───────── inequalities ───────── */
const OPS = { '<': ['<', false], '≤': ['<', true], '>': ['>', false], '≥': ['>', true] };
function partToInterval(part, v) {
  const t = part.replace(/\s+/g, '');
  const re = /(<|≤|>|≥)/;
  const bits = t.split(re);
  // bits like [a, op, x, op, b] or [x, op, b] or [a, op, x]
  if (bits.length === 3) {
    let [l, op, r] = bits;
    if (l.toLowerCase() === v.toLowerCase()) {
      const p = parseNumber(r); if (!p) return null;
      const [dir, inc] = OPS[op];
      return dir === '<' ? { lo: null, loIn: false, hi: p.value, hiIn: inc } : { lo: p.value, loIn: inc, hi: null, hiIn: false };
    }
    if (r.toLowerCase() === v.toLowerCase()) {
      const p = parseNumber(l); if (!p) return null;
      const [dir, inc] = OPS[op];
      return dir === '<' ? { lo: p.value, loIn: inc, hi: null, hiIn: false } : { lo: null, loIn: false, hi: p.value, hiIn: inc };
    }
    return null;
  }
  if (bits.length === 5) {
    const [a, o1, x, o2, b] = bits;
    if (x.toLowerCase() !== v.toLowerCase()) return null;
    const pa = parseNumber(a), pb = parseNumber(b);
    if (!pa || !pb) return null;
    const [d1, i1] = OPS[o1], [d2, i2] = OPS[o2];
    if (d1 !== d2) return null;
    return d1 === '<' ? { lo: pa.value, loIn: i1, hi: pb.value, hiIn: i2 } : { lo: pb.value, loIn: i2, hi: pa.value, hiIn: i1 };
  }
  return null;
}
export function parseInequality(raw, v = 'x') {
  let s = normalise(raw).replace(/<=|=</g, '≤').replace(/>=|=>/g, '≥').replace(/∪/g, ' or ');
  const setNote = s.match(/^\{\s*[a-z]\s*[:|]\s*(.+)\}$/i); // set notation {x : x > 3}
  if (setNote) s = setNote[1];
  if (!/[<>≤≥]/.test(s)) return null;
  const parts = s.split(/\bor\b|,|;/i).map(p => p.trim()).filter(Boolean);
  const set = [];
  for (const p of parts) { const iv = partToInterval(p, v); if (!iv) return null; set.push(iv); }
  return set.sort((a, b) => (a.lo === null ? -1 : b.lo === null ? 1 : a.lo.n / a.lo.d - b.lo.n / b.lo.d));
}
const endEq = (a, b) => (a === null && b === null) || (a && b && eq(a, val(b)));
const ivSame = (a, b, ends) => endEq(a.lo, b.lo) && endEq(a.hi, b.hi) && (!ends || ((a.lo === null || a.loIn === b.loIn) && (a.hi === null || a.hiIn === b.hiIn)));
const setSame = (got, want, ends = true) => got.length === want.length && got.every((g, i) => ivSame(g, want[i], ends));
export function markInequality(spec, raw) {
  if (/=/.test(raw) && !/[<>≤≥]/.test(raw)) return { status: 'invalid', code: 'format-inequality', hint: 'Give the answer as an inequality, such as x > 3, not an equation.' };
  const got = parseInequality(raw, spec.letter);
  if (!got) return { status: 'invalid', code: 'format-inequality' };
  const want = spec.set;
  if (setSame(got, want)) return { status: 'correct' };
  if (setSame(got, want, false)) return { status: 'partial', code: 'ineq-ends' };
  return { status: 'wrong', code: 'value', given: got };
}
export const inequalityMatches = (trapSet, raw, spec) => { const g = parseInequality(raw, spec.letter); return !!g && setSame(g, trapSet); };
export function inequalityMarkup({ letter: v, set }) {
  return set.map(iv => {
    if (iv.lo !== null && iv.hi !== null) return `${fmt(iv.lo)} ${iv.loIn ? '≤' : '<'} ${v} ${iv.hiIn ? '≤' : '<'} ${fmt(iv.hi)}`;
    if (iv.lo !== null) return `${v} ${iv.loIn ? '≥' : '>'} ${fmt(iv.lo)}`;
    return `${v} ${iv.hiIn ? '≤' : '<'} ${fmt(iv.hi)}`;
  }).join(' or ');
}

/* ───────── integer lists ───────── */
export function parseList(raw) {
  const s = normalise(raw).replace(/[{}]/g, '');
  if (!s) return null;
  const parts = s.split(/[,;\s]+/).filter(Boolean);
  const vals = [];
  for (const p of parts) { if (!/^-?\d+$/.test(p)) return null; vals.push(Number(p)); }
  return vals;
}
export function markList(spec, raw) {
  const got = parseList(raw);
  if (!got) return { status: 'invalid', code: 'format-list' };
  const g = new Set(got), w = new Set(spec.values);
  if (g.size === w.size && [...g].every(x => w.has(x))) return { status: 'correct' };
  return { status: 'wrong', code: 'value', missing: [...w].filter(x => !g.has(x)), extra: [...g].filter(x => !w.has(x)) };
}
export const listMarkup = spec => [...spec.values].sort((a, b) => a - b).map(num).join(', ');
