// Algebraic answers: parse what a student types, decide whether it is equivalent to the
// expected expression, then judge the form the question asked for.
//
//   value - exact: both sides become rational functions (polynomial ÷ polynomial with
//           rational coefficients) and are compared by cross-multiplying, so 2(x + 3),
//           2x + 6 and 6 + x + x are equal, and (v − u)/a equals v/a − u/a.
//   form  - from the written structure: 'simplified' (like terms collected, no brackets),
//           'expanded', 'factorised' (fully), 'notation' (simplified and no × or ÷ signs,
//           fractions rather than decimals for coefficients), 'fraction' (one algebraic fraction
//           with no common factor left between top and bottom) or 'any'.
//
// Syntax accepted: numbers, single letters (implicit multiplication: 3ab, 2(x + 1),
// (x + 1)(x − 2)), + − × * · ÷ /, ^ or ² ³ for powers, brackets. "x2" is refused with a hint,
// and "1/2x" is refused as ambiguous, because the student meant something definite and the
// marker must not guess.
import { F, add, sub, mul, div, eq, gcd, normalise } from './frac.js?v=20261023-maths-r9';

/* ───────── polynomials and rational functions ───────── */
const mkey = m => Object.keys(m).filter(v => m[v]).sort().map(v => v + m[v]).join('·');
const P = () => new Map(); // key → {m, c}
function pAddTerm(p, m, c) {
  const k = mkey(m), cur = p.get(k);
  const n = cur ? add(cur.c, c) : c;
  if (n.n === 0) p.delete(k); else p.set(k, { m: { ...m }, c: n });
  return p;
}
const pConst = c => pAddTerm(P(), {}, c);
const pVar = v => pAddTerm(P(), { [v]: 1 }, F(1));
function pAdd(a, b, sign = 1) { const out = P(); for (const t of a.values()) pAddTerm(out, t.m, t.c); for (const t of b.values()) pAddTerm(out, t.m, sign < 0 ? mul(t.c, F(-1)) : t.c); return out; }
function pMul(a, b) {
  const out = P();
  for (const x of a.values()) for (const y of b.values()) {
    const m = { ...x.m };
    for (const v in y.m) m[v] = (m[v] || 0) + y.m[v];
    pAddTerm(out, m, mul(x.c, y.c));
  }
  return out;
}
const pZero = p => p.size === 0;
const R = (n, d = pConst(F(1))) => ({ n, d });
const rAdd = (a, b, s = 1) => R(pAdd(pMul(a.n, b.d), pMul(b.n, a.d), s), pMul(a.d, b.d));
const rMul = (a, b) => R(pMul(a.n, b.n), pMul(a.d, b.d));
function rDiv(a, b) { if (pZero(b.n)) throw new AlgError('divzero'); return R(pMul(a.n, b.d), pMul(a.d, b.n)); }
function rPow(a, k) {
  if (Math.abs(k) > 30) throw new AlgError('big-power');
  let out = R(pConst(F(1)));
  for (let i = 0; i < Math.abs(k); i++) out = rMul(out, a);
  return k < 0 ? rDiv(R(pConst(F(1))), out) : out;
}
export const rEquivalent = (a, b) => pZero(pAdd(pMul(a.n, b.d), pMul(b.n, a.d), -1));

class AlgError extends Error { constructor(code, hint) { super(code); this.code = code; this.hint = hint; } }

/* ───────── tokens ───────── */
const SUPD = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-' };
function tokenize(raw) {
  let s = normalise(raw).replace(/\*\*/g, '^').replace(/[×·]/g, '*').replace(/÷/g, '÷').replace(/[[{]/g, '(').replace(/[\]}]/g, ')');
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g, m => '^' + [...m].map(c => SUPD[c]).join(''));
  const toks = [];
  let i = 0, divideSign = false;
  while (i < s.length) {
    const c = s[i];
    if (c === ' ') { i++; continue; }
    if (/[0-9.]/.test(c)) {
      const m = s.slice(i).match(/^(\d+(?:\.\d+)?|\.\d+)/);
      if (!m) throw new AlgError('format');
      const text = m[1], [w, f = ''] = text.split('.');
      toks.push({ t: 'num', v: F(Number((w || '0') + f), 10 ** f.length), dec: f.length > 0, at: i });
      i += text.length;
      continue;
    }
    if (/[a-zA-Z]/.test(c)) {
      if (/[0-9]/.test(s[i + 1] || '')) throw new AlgError('letter-digit');
      toks.push({ t: 'var', name: c, at: i }); i++; continue;
    }
    if (c === '÷') { divideSign = true; toks.push({ t: 'op', v: '/', at: i }); i++; continue; }
    if ('+-*/^()'.includes(c)) { toks.push({ t: c === '(' || c === ')' ? c : 'op', v: c, at: i }); i++; continue; }
    if (c === '=') throw new AlgError('equals');
    throw new AlgError('chars');
  }
  for (let k = 1; k < toks.length; k++) if (toks[k].t === 'num' && toks[k - 1].t === 'num') throw new AlgError('format');
  return { toks, divideSign };
}

/* ───────── parser → AST ───────── */
export function parseAlgebra(raw) {
  const { toks, divideSign } = tokenize(raw);
  if (!toks.length) throw new AlgError('empty');
  let i = 0;
  const peek = () => toks[i], next = () => toks[i++];
  const isOp = (t, v) => t && t.t === 'op' && t.v === v;
  const startsAtom = t => t && (t.t === 'num' || t.t === 'var' || t.t === '(');
  function expr() {
    const ts = [];
    let sign = 1;
    if (isOp(peek(), '+')) next();
    ts.push({ sign, e: term() });
    while (isOp(peek(), '+') || isOp(peek(), '-')) {
      sign = next().v === '-' ? -1 : 1;
      ts.push({ sign, e: term() });
    }
    return ts.length === 1 && ts[0].sign === 1 ? ts[0].e : { k: 'add', ts };
  }
  function term() {
    const fs = [{ op: null, e: unary() }];
    let afterDivide = false;
    for (;;) {
      const t = peek();
      if (isOp(t, '*') || isOp(t, '/')) { next(); afterDivide = t.v === '/'; fs.push({ op: t.v, e: unary() }); continue; }
      if (startsAtom(t)) {
        if (afterDivide) throw new AlgError('ambiguous');
        fs.push({ op: 'imp', e: power() }); continue;
      }
      break;
    }
    return fs.length === 1 ? fs[0].e : { k: 'mul', fs };
  }
  function unary() {
    if (isOp(peek(), '-')) { next(); return { k: 'neg', e: unary() }; }
    if (isOp(peek(), '+')) { next(); return unary(); }
    return power();
  }
  function power() {
    const b = atom();
    if (isOp(peek(), '^')) {
      next();
      let paren = false, neg = false;
      if (peek()?.t === '(') { next(); paren = true; }
      if (isOp(peek(), '-')) { next(); neg = true; }
      const t = next();
      if (!t || t.t !== 'num' || t.dec) throw new AlgError('power');
      if (paren) { if (peek()?.t !== ')') throw new AlgError('power'); next(); }
      if (isOp(peek(), '^')) throw new AlgError('power');
      return { k: 'pow', b, e: (neg ? -1 : 1) * t.v.n };
    }
    return b;
  }
  function atom() {
    const t = next();
    if (!t) throw new AlgError('incomplete');
    if (t.t === 'num') return { k: 'num', v: t.v, dec: t.dec };
    if (t.t === 'var') return { k: 'var', name: t.name };
    if (t.t === '(') {
      const e = expr();
      if (peek()?.t !== ')') throw new AlgError('brackets');
      next();
      return { k: 'paren', e };
    }
    throw new AlgError('incomplete');
  }
  const ast = expr();
  if (i < toks.length) throw new AlgError(toks[i].t === ')' ? 'brackets' : 'format');
  return { ast, explicit: toks.some(t => isOp(t, '*')) || divideSign, divideSign };
}

export function evaluate(ast) {
  switch (ast.k) {
    case 'num': return R(pConst(ast.v));
    case 'var': return R(pVar(ast.name));
    case 'paren': return evaluate(ast.e);
    case 'neg': return rMul(R(pConst(F(-1))), evaluate(ast.e));
    case 'pow': return rPow(evaluate(ast.b), ast.e);
    case 'add': return ast.ts.reduce((acc, t) => rAdd(acc, evaluate(t.e), t.sign), R(P()));
    case 'mul': return ast.fs.reduce((acc, f) => (f.op === '/' ? rDiv(acc, evaluate(f.e)) : rMul(acc, evaluate(f.e))), R(pConst(F(1))));
  }
  throw new AlgError('format');
}

/** Rational function of a typed expression, or null. */
export function algValue(raw) { try { return evaluate(parseAlgebra(raw).ast); } catch { return null; } }
/** True when two typed expressions are algebraically equivalent. */
export function equivalent(a, b) { const x = algValue(a), y = algValue(b); return !!x && !!y && rEquivalent(x, y); }
/** Numeric value at given variable values (tests and previews). */
export function evalAt(raw, vals) {
  const r = algValue(raw);
  if (!r) return NaN;
  const pv = p => [...p.values()].reduce((t, { m, c }) => t + (c.n / c.d) * Object.entries(m).reduce((u, [v, k]) => u * vals[v] ** k, 1), 0);
  return pv(r.n) / pv(r.d);
}

/* ───────── form analysis ───────── */
// A monomial as written: at most one multiplied number, at most one dividing number,
// each letter once (x × x should be x²), no brackets, no algebraic division.
function mono(node, acc = { exps: {}, mulNums: 0, divNums: 0, bad: false, dec: false, letters: {} }, dividing = false) {
  switch (node.k) {
    case 'num': if (dividing) acc.divNums++; else acc.mulNums++; if (node.dec) acc.dec = true; break;
    case 'var': acc.letters[node.name] = (acc.letters[node.name] || 0) + 1; acc.exps[node.name] = (acc.exps[node.name] || 0) + (dividing ? -1 : 1); break;
    case 'pow':
      if (node.b.k === 'var') { acc.letters[node.b.name] = (acc.letters[node.b.name] || 0) + 1; acc.exps[node.b.name] = (acc.exps[node.b.name] || 0) + (dividing ? -node.e : node.e); }
      else acc.bad = true;
      break;
    case 'neg': if (dividing) acc.bad = true; else mono(node.e, acc); break;
    case 'paren':
      if (isNumeric(node.e)) { if (dividing) acc.divNums++; else acc.mulNums++; }
      else if (dividing && ['mul', 'var', 'pow'].includes(node.e.k)) mono(node.e, acc, true); // 1/(9x^4)
      else acc.bad = true;
      break;
    case 'mul':
      for (const f of node.fs) mono(f.e, acc, dividing !== (f.op === '/'));
      break;
    default: acc.bad = true;
  }
  return acc;
}
function monoOK(a) { return !a.bad && a.mulNums <= 1 && a.divNums <= 1 && Object.values(a.letters).every(c => c === 1); }
const sigOf = a => Object.keys(a.exps).filter(v => a.exps[v]).sort().map(v => v + a.exps[v]).join('·');

/** {ok, collected, brackets, dec} for a sum of monomials written in simplest form. */
export function sumInfo(ast) {
  const terms = ast.k === 'add' ? ast.ts.map(t => t.e) : [ast];
  const infos = terms.map(t => mono(t));
  const brackets = hasParen(ast);
  const ok = infos.every(monoOK);
  const sigs = infos.map(sigOf);
  const collected = new Set(sigs).size === sigs.length;
  return { ok, collected, brackets, dec: infos.some(a => a.dec), terms: terms.length };
}
const isNumeric = n => n.k === 'num' || (n.k === 'neg' && isNumeric(n.e)) || (n.k === 'mul' && n.fs.every(f => isNumeric(f.e))) || (n.k === 'paren' && isNumeric(n.e));
function hasParen(n) {
  if (!n || typeof n !== 'object') return false;
  if (n.k === 'paren') return !isNumeric(n.e);
  if (n.k === 'add') return n.ts.some(t => hasParen(t.e));
  if (n.k === 'mul') return n.fs.some(f => (f.op === '/' && f.e.k === 'paren' && ['mul', 'var', 'pow'].includes(f.e.e.k) ? hasParen(f.e.e) : hasParen(f.e)));
  if (n.k === 'neg') return hasParen(n.e);
  if (n.k === 'pow') return hasParen(n.b);
  return false;
}

const isSquare = n => n >= 0 && Number.isInteger(Math.sqrt(n)) && Math.round(Math.sqrt(n)) ** 2 === n;
/** Can this integer polynomial be split further (common number, common letter, reducible quadratic)? */
function reducible(p) {
  const ts = [...p.values()];
  if (ts.length < 2) return null;
  if (ts.some(t => t.c.d !== 1)) return 'fraction-inside';
  if (ts.reduce((g, t) => gcd(g, t.c.n), 0) > 1) return 'number';
  const letters = new Set(ts.flatMap(t => Object.keys(t.m)));
  for (const v of letters) if (ts.every(t => (t.m[v] || 0) >= 1)) return 'letter';
  const deg = t => Object.values(t.m).reduce((a, b) => a + b, 0);
  const maxDeg = Math.max(...ts.map(deg));
  if (maxDeg !== 2) return null;
  const vs = [...letters];
  const coef = m => { const t = p.get(mkey(m)); return t ? t.c.n : 0; };
  if (vs.length === 1) {
    const [x] = vs, a = coef({ [x]: 2 }), b = coef({ [x]: 1 }), c = coef({});
    return a && isSquare(b * b - 4 * a * c) ? 'quadratic' : null;
  }
  if (vs.length === 2 && ts.every(t => deg(t) === 2)) {
    const [x, y] = vs, a = coef({ [x]: 2 }), b = coef({ [x]: 1, [y]: 1 }), c = coef({ [y]: 2 });
    return a && c && isSquare(b * b - 4 * a * c) ? 'quadratic' : null;
  }
  return null;
}

/** 'ok', 'not-factorised', 'not-fully' or 'inner-not-simplified' for a factorised form. */
export function factorInfo(ast) {
  let node = ast;
  while (node.k === 'neg') node = node.e;
  const factors = node.k === 'mul' ? node.fs : [{ op: null, e: node }];
  if (factors.some(f => f.op === '/')) return 'not-factorised';
  let brackets = 0;
  for (const { e } of factors) {
    const inner = e.k === 'paren' ? e.e : e.k === 'pow' && e.b.k === 'paren' ? e.b.e : null;
    if (!inner) { if (!['num', 'var'].includes(e.k) && !(e.k === 'pow' && e.b.k === 'var')) return 'not-factorised'; continue; }
    brackets++;
    const si = sumInfo(inner);
    if (!si.ok || !si.collected) return 'inner-not-simplified';
    const val = evaluate(inner);
    if (val.d.size !== 1 || [...val.d.values()][0].c.n !== 1 || [...val.d.values()][0].c.d !== 1 || Object.keys([...val.d.values()][0].m).length) return 'not-fully';
    const red = reducible(val.n);
    if (red) return 'not-fully';
  }
  return brackets ? 'ok' : 'not-factorised';
}

/** (x + p)^2 + q with a monic linear bracket and a number term (either may be absent). */
function completedSquare(ast) {
  const terms = ast.k === 'add' ? ast.ts : [{ sign: 1, e: ast }];
  let squares = 0;
  for (const { sign, e } of terms) {
    if (e.k === 'pow' && e.e === 2 && e.b.k === 'paren') {
      if (sign < 0) return false;
      const v = evaluate(e.b.e), ts = [...v.n.values()];
      const lin = ts.filter(t => Object.keys(t.m).length), d = [...v.d.values()];
      if (d.length !== 1 || Object.keys(d[0].m).length || lin.length !== 1 || Object.values(lin[0].m)[0] !== 1 || !eq(lin[0].c, mul(d[0].c, F(1)))) return false;
      squares++;
      continue;
    }
    if (!isNumeric(e)) return false;
  }
  return squares === 1;
}

/* ───────── single simplified algebraic fraction ───────── */
function hasDiv(n) {
  if (!n || typeof n !== 'object') return false;
  if (n.k === 'mul') return n.fs.some(f => f.op === '/' || hasDiv(f.e));
  if (n.k === 'add') return n.ts.some(t => hasDiv(t.e));
  if (n.k === 'paren' || n.k === 'neg') return hasDiv(n.e);
  if (n.k === 'pow') return n.e < 0 || hasDiv(n.b);
  return false;
}
/** Univariate polynomial (Map form) → dense coefficient array, or null if several letters. */
function dense(p) {
  const out = [];
  let letter = null;
  for (const { m, c } of p.values()) {
    const vs = Object.keys(m);
    if (vs.length > 1) return null;
    if (vs.length) { if (letter && letter !== vs[0]) return null; letter = vs[0]; }
    out[vs.length ? m[vs[0]] : 0] = c;
  }
  for (let i = 0; i < out.length; i++) out[i] ??= F(0);
  return out;
}
const trim = a => { while (a.length && a[a.length - 1].n === 0) a.pop(); return a; };
function polyRem(a, b) {
  a = trim([...a]);
  while (a.length >= b.length && a.length) {
    const k = div(a[a.length - 1], b[b.length - 1]), sh = a.length - b.length;
    for (let i = 0; i < b.length; i++) a[i + sh] = sub(a[i + sh], mul(k, b[i]));
    trim(a);
  }
  return a;
}
/** Degree of gcd(a, b) for dense polynomials with rational coefficients. */
function gcdDegree(a, b) {
  a = trim([...a]); b = trim([...b]);
  while (b.length) { const r = polyRem(a, b); a = b; b = r; }
  return a.length - 1;
}
/** 'ok', 'want-single-fraction' or 'not-cancelled' for an answer that should be one fraction in lowest terms. */
function fractionInfo(ast) {
  let node = ast;
  while (node.k === 'neg') node = node.e;
  if (!hasDiv(node)) return sumInfo(node).dec ? 'notation-decimal' : 'ok'; // a polynomial: nothing left to cancel
  if (node.k !== 'mul') return 'want-single-fraction';
  const divs = node.fs.filter(f => f.op === '/');
  if (divs.length !== 1 || node.fs[node.fs.length - 1].op !== '/') return 'want-single-fraction';
  const top = node.fs.slice(0, -1), bottom = node.fs[node.fs.length - 1].e;
  if (top.some(f => hasDiv(f.e)) || hasDiv(bottom)) return 'want-single-fraction';
  const N = top.reduce((acc, f) => rMul(acc, evaluate(f.e)), R(pConst(F(1)))).n, D = evaluate(bottom).n;
  const cs = [...N.values(), ...D.values()].map(t => t.c);
  if (cs.every(c => c.d === 1) && cs.reduce((g, c) => gcd(g, Math.abs(c.n)), 0) > 1) return 'not-cancelled';
  const a = dense(N), b = dense(D);
  if (a && b && trim([...b]).length > 1 && gcdDegree(a, b) > 0) return 'not-cancelled';
  return 'ok';
}

/* ───────── marking ───────── */
const HINTS = {
  'letter-digit': 'Write the number before the letter (3a, not a3), and use ^ for powers: x^2.',
  ambiguous: 'Use brackets to make the division clear, for example (v − u)/t or x/(2y).',
  equals: 'Type just the expression (or the answer as x = …).',
  power: 'Write powers as whole numbers after ^, for example x^2 or (x + 1)^2.',
  brackets: 'Check your brackets: every ( needs a matching ).',
  divzero: 'That divides by zero.',
};
export const algebraHint = code => HINTS[code] || 'Write an expression using numbers, letters, + − × ÷, ^ for powers and brackets, for example 3x^2 − 2(x + 1).';

/** Remove a leading "subject =" (or a trailing "= subject"); returns null if a different form of equation. */
function stripSubject(raw, subject) {
  const s = normalise(raw);
  if (!s.includes('=')) return s;
  const parts = s.split('=');
  if (parts.length !== 2) return null;
  const [l, r] = parts.map(x => x.trim());
  const ok = x => x === subject || (subject && x.toLowerCase() === subject.toLowerCase() && !/[A-Z]/.test(subject));
  if (subject && ok(l)) return r;
  if (subject && ok(r)) return l;
  return null;
}
/** Lower-case letters the student capitalised when the question uses only the lower-case one. */
function fixCase(s, vars = []) {
  return s.replace(/[A-Za-z]/g, c => {
    if (vars.includes(c)) return c;
    const other = c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    return vars.includes(other) ? other : c;
  });
}

export function markAlgebra(spec, raw) {
  const s0 = stripSubject(raw, spec.subject);
  if (s0 === null) return { status: 'invalid', code: 'format-algebra', hint: spec.subject ? `Write your answer as ${spec.subject} = …` : HINTS.equals };
  if (s0 === '') return { status: 'invalid', code: 'empty' };
  const s = fixCase(s0, spec.vars);
  let parsed, value;
  try { parsed = parseAlgebra(s); value = evaluate(parsed.ast); }
  catch (e) { return { status: 'invalid', code: 'format-algebra', hint: algebraHint(e.code) }; }
  const target = evaluate(parseAlgebra(spec.expr).ast);
  if (spec.subject && [...value.n.values(), ...value.d.values()].some(t => t.m[spec.subject])) return { status: 'wrong', code: 'subject-both-sides' };
  if (!rEquivalent(value, target)) return { status: 'wrong', code: 'value' };
  const form = spec.form || 'any';
  if (form === 'any') return { status: 'correct' };
  if (form === 'fraction') { const f = fractionInfo(parsed.ast); return f === 'ok' ? { status: 'correct' } : { status: 'partial', code: f }; }
  if (form === 'completed-square') return completedSquare(parsed.ast) ? { status: 'correct' } : { status: 'partial', code: 'want-completed-square' };
  if (form === 'factorised') {
    const f = factorInfo(parsed.ast);
    if (f === 'ok') return { status: 'correct' };
    return { status: 'partial', code: f === 'not-factorised' ? 'want-factorised' : f === 'not-fully' ? 'not-fully-factorised' : 'not-simplified' };
  }
  const si = sumInfo(parsed.ast);
  if (si.brackets) return { status: 'partial', code: form === 'expanded' ? 'want-expanded' : 'not-simplified' };
  if (!si.ok || !si.collected) return { status: 'partial', code: 'not-simplified' };
  if (form === 'notation' && (parsed.explicit || si.dec)) return { status: 'partial', code: si.dec ? 'notation-decimal' : 'notation' };
  return { status: 'correct' };
}

/** Does the typed answer match a trap expression? (feedback only) */
export function algebraMatches(trapExpr, raw, spec) {
  const s = stripSubject(raw, spec?.subject);
  return s !== null && equivalent(fixCase(s, spec?.vars), trapExpr);
}

/** Display a typed answer as markup (preview and result tables). */
export function algebraPreview(raw) {
  return normalise(raw).replace(/\*\*/g, '^').replace(/\*/g, '×').replace(/\^\(?(-?\d+)\)?/g, (_, k) => `^{${k.replace('-', '−')}}`).replace(/-/g, '−');
}
