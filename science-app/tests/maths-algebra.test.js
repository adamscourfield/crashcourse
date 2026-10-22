// Algebra batch 1: generated items, independent checks and expression marking.
// The checks below evaluate the PRINTED prompt and answer with a separate, deliberately simple
// evaluator (plain JavaScript after inserting the implied multiplications), so they do not rely
// on the parser in dist/maths/algebra.js that does the marking.
import test from 'node:test';
import assert from 'node:assert/strict';
import { allSkills, generate, skillById } from '../dist/maths/skills.js';
import { mark, answerMarkup } from '../dist/maths/answers.js';
import { markAlgebra, equivalent, algebraMatches } from '../dist/maths/algebra.js';
import { F, decText } from '../dist/maths/frac.js';
import { orderedAlgebra, algebraLessons, algebraOrder } from '../dist/maths/lessons-algebra.js';
import { orderedLessons as numberLessons } from '../dist/maths/lessons-number.js';
import { levelsFor, topLevel, freshMaths, lessonState, lessonDone } from '../dist/maths/mastery.js';
import { visual4 } from '../dist/maths/models-algebra.js';
import { visual5 } from '../dist/maths/models-algebra2.js';

const N = 250;
const algebraSkills = allSkills.filter(sk => sk.id.startsWith('maths.algebra.'));
const batch1 = new Set(['notation', 'substitute', 'vocabulary', 'collect', 'index-laws', 'expand-single', 'factorise-single', 'expand-double', 'factorise-quadratic', 'solve', 'solve-both-sides', 'form-solve', 'formula-use', 'rearrange'].map(s => 'maths.algebra.' + s));
const close = (a, b) => Math.abs(a - b) <= 1e-7 * Math.max(1, Math.abs(a), Math.abs(b));

/** Markup → JS source with letters as variables: implied multiplication made explicit. */
function js(markup) {
  let e = markup.trim().replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/');
  e = e.replace(/\{([^{}]+)\/([^{}]+)\}/g, '(($1)/($2))');
  e = e.replace(/\^\{([^{}]+)\}/g, '^($1)').replace(/\^/g, '**');
  e = e.replace(/\s+/g, '');
  for (let i = 0; i < 3; i++) e = e.replace(/(\d|[A-Za-z]|\))(?=[A-Za-z(])/g, '$1*').replace(/([A-Za-z])(?=\d)/g, '$1*');
  e = e.replace(/(^|[(+\-*/])-/g, '$1(-1)*'); // unary minus, so -x**2 is -(x**2) as in algebra
  assert.match(e, /^[\w+\-*/().]+$/, 'unexpected characters in ' + markup + ' → ' + e);
  return e;
}
function evalAtJS(markup, vals) {
  const names = Object.keys(vals);
  return Function(...names, `return (${js(markup)});`)(...names.map(n => vals[n]));
}
const lettersIn = m => [...new Set((m.replace(/\{|\}/g, '').match(/[A-Za-z]/g) || []))];
const randVals = (letters, k) => Object.fromEntries(letters.map((v, i) => [v, 0.37 + 1.13 * i + 0.71 * k]));
function sameFunction(a, b) {
  const letters = [...new Set([...lettersIn(a), ...lettersIn(b)])];
  for (let k = 0; k < 4; k++) { const v = randVals(letters, k); if (!close(evalAtJS(a, v), evalAtJS(b, v))) return false; }
  return true;
}
const rawFor = a => (a.kind === 'choice' ? String(a.answer) : a.kind === 'algebra' ? a.expr : a.kind === 'decimal' ? decText(F(a.value.n, a.value.d)).replace('−', '-') : a.kind === 'integer' ? String(a.value) : `${a.value.n}/${a.value.d}`);
const valueOf = a => (a.kind === 'integer' ? a.value : a.value.n / a.value.d);

test('every algebra skill level generates deterministic, JSON-safe items whose own answer marks correct', () => {
  for (const sk of algebraSkills.filter(sk => batch1.has(sk.id))) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const a = generate(sk.id, lv, 's' + i), b = generate(sk.id, lv, 's' + i);
    assert.deepEqual(a, b, `${sk.id} L${lv} not deterministic`);
    assert.deepEqual(JSON.parse(JSON.stringify(a)), a, 'item must survive JSON');
    assert.ok(a.prompt && a.steps.length >= 1 && a.steps.every(Boolean), `${sk.id} needs a prompt and worked steps`);
    assert.equal(mark(a.answer, rawFor(a.answer)).status, 'correct', `${sk.id} L${lv} ${a.prompt} → ${rawFor(a.answer)}`);
    if (a.answer.kind === 'algebra') {
      for (const t of a.alTraps || []) {
        assert.equal(mark(a.answer, t.expr).status, 'wrong', `${sk.id} trap marks as not wrong: ${a.prompt} trap ${t.expr}`);
        assert.ok(t.why.length > 20, 'trap feedback must explain the misconception');
      }
    }
    for (const t of a.traps || []) {
      const traw = t.v.d === 1 ? String(t.v.n) : `${t.v.n}/${t.v.d}`;
      assert.equal(mark(a.answer, traw).status, 'wrong', `${sk.id} numeric trap equals the answer: ${a.prompt}`);
    }
    const shown = [a.prompt, ...a.steps, ...(a.optionWhy || []).filter(Boolean), ...(a.traps || []).map(t => t.why), ...(a.alTraps || []).map(t => t.why), a.answer.display || ''];
    for (const t of shown) assert.doesNotMatch(t, /-/, `hyphen instead of a true minus sign: ${t}`);
    if (a.answer.kind === 'choice') {
      assert.equal(new Set(a.answer.options).size, a.answer.options.length, `${sk.id} duplicate options: ${a.prompt}`);
      a.answer.options.forEach((_, j) => { if (j !== a.answer.answer) assert.ok(a.optionWhy[j], 'every wrong option needs feedback'); });
    }
  }
});

test('simplify, expand and factorise answers equal the printed expression (independent evaluation)', () => {
  let checked = 0;
  const ids = ['notation', 'collect', 'index-laws', 'expand-single', 'factorise-single', 'expand-double', 'factorise-quadratic'].map(s => 'maths.algebra.' + s);
  for (const id of ids) for (let lv = 1; lv <= skillById[id].levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = generate(id, lv, 'e' + i);
    const m = it.prompt.match(/^(?:Simplify|Expand and simplify|Expand|Factorise) (.+)$/);
    if (!m) continue;
    const printed = m[1].replace(/ × /g, '*').replace(/ ÷ /g, '/');
    assert.ok(sameFunction(printed, it.answer.display), `${it.prompt} → ${it.answer.display}`);
    if (/Factorise/.test(it.prompt)) assert.match(it.answer.display, /\(/, 'a factorised answer has brackets');
    if (/Expand/.test(it.prompt)) assert.doesNotMatch(it.answer.display, /\(/, 'an expanded answer has no brackets');
    checked++;
  }
  assert.ok(checked > 4000, 'expected thousands of checks, got ' + checked);
});

test('substitution answers match the printed values', () => {
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.substitute', lv, 'u' + i);
    let m = it.prompt.match(/^Work out the value of (.+) when (.+)\.$/);
    let expr, assigns;
    if (m) { expr = m[1]; assigns = m[2]; }
    else { m = it.prompt.match(/^([A-Za-z]) = (.+?)(?: converts °C to °F)?\. Work out [A-Za-z] when (.+)\.$/); assert.ok(m, it.prompt); expr = m[2]; assigns = m[3]; }
    const vals = Object.fromEntries([...assigns.matchAll(/([A-Za-z]) = (−?[\d.]+)/g)].map(([, k, v]) => [k, Number(v.replace('−', '-'))]));
    assert.ok(close(evalAtJS(expr, vals), valueOf(it.answer)), `${it.prompt} printed ${evalAtJS(expr, vals)} stored ${valueOf(it.answer)}`);
  }
});

test('equation solutions satisfy the printed equation', () => {
  let checked = 0;
  for (const id of ['maths.algebra.solve', 'maths.algebra.solve-both-sides']) for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate(id, lv, 'q' + i);
    const [L, R] = it.prompt.replace(/^Solve /, '').split(' = ');
    const x = valueOf(it.answer);
    assert.ok(close(evalAtJS(L, { x }), evalAtJS(R, { x })), `${it.prompt}: x = ${x} gives ${evalAtJS(L, { x })} ≠ ${evalAtJS(R, { x })}`);
    assert.equal(mark(it.answer, `x = ${rawFor(it.answer)}`).status, 'correct', 'answers written as x = … are accepted');
    checked++;
  }
  assert.equal(checked, 6 * N);
});

test('formed equations: the answer satisfies the situation described', () => {
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.form-solve', lv, 'f' + i), x = valueOf(it.answer), p = it.prompt;
    let m;
    if ((m = p.match(/multiply it by (\d+), then add (\d+)\. The answer is (\d+)/))) assert.equal(x * m[1] + Number(m[2]), Number(m[3]), p);
    else if ((m = p.match(/subtract (\d+), then multiply by (\d+)\. The answer is (−?\d+)/))) assert.equal((x - m[1]) * m[2], Number(m[3].replace('−', '-')), p);
    else if ((m = p.match(/length \((.+?)\) cm and width \((.+?)\) cm\. Its perimeter is (\d+)/))) assert.ok(close(2 * evalAtJS(m[1], { x }) + 2 * evalAtJS(m[2], { x }), Number(m[3])), p);
    else if ((m = p.match(/are \((.+?)\)° and \((.+?)\)°/))) assert.ok(close(evalAtJS(m[1], { x }) + evalAtJS(m[2], { x }), 180), p);
    else if ((m = p.match(/Ben is (\d+) years older than Ali\. Cara is (twice|three times) as old as Ben\. Their ages add up to (\d+)/))) { const ben = x + Number(m[1]); assert.equal(x + ben + (m[2] === 'twice' ? 2 : 3) * ben, Number(m[3]), p); }
    else if ((m = p.match(/costs (\d+)p more than a pen\. (\d+) pens and (\d+) notebooks cost (\d+)p/))) assert.equal(m[2] * x + m[3] * (x + Number(m[1])), Number(m[4]), p);
    else assert.fail('unrecognised prompt ' + p);
  }
});

test('formula use: substituting the answer back makes the printed formula true', () => {
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.formula-use', lv, 'g' + i);
    const m = it.prompt.match(/^(.+?) = (.+?)\. Find ([A-Za-z]) when (.+?)\.(?: \(.*\))?$/);
    assert.ok(m, it.prompt);
    const vals = Object.fromEntries([...m[4].matchAll(/([A-Za-z]) = (−?[\d.]+)/g)].map(([, k, v]) => [k, Number(v.replace('−', '-'))]));
    vals[m[3]] = valueOf(it.answer);
    assert.ok(close(evalAtJS(m[1], vals), evalAtJS(m[2], vals)), `${it.prompt} with ${m[3]} = ${vals[m[3]]}`);
  }
});

test('rearranged formulae: the answer makes the original formula true for any values of the other letters', () => {
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.rearrange', lv, 'r' + i);
    const m = it.prompt.match(/^Make ([A-Za-z]) the subject of (.+) = (.+)$/);
    assert.ok(m, it.prompt);
    const subj = m[1], others = [...new Set([...lettersIn(m[2]), ...lettersIn(m[3])])].filter(v => v !== subj);
    for (let k = 0; k < 3; k++) {
      const vals = randVals(others, k);
      vals[subj] = evalAtJS(it.answer.display, vals);
      assert.ok(close(evalAtJS(m[2], vals), evalAtJS(m[3], vals)), `${it.prompt} → ${it.answer.display}`);
    }
    assert.equal(mark(it.answer, `${subj} = ${it.answer.expr}`).status, 'correct');
  }
});

test('vocabulary: the identity option holds for every x and the others do not', () => {
  for (let i = 0; i < N; i++) {
    const it = generate('maths.algebra.vocabulary', 2, 'v' + i);
    if (!/identity/.test(it.prompt)) continue;
    it.answer.options.forEach((o, j) => {
      const [L, R] = o.split(' = ');
      const holds = [0.3, 1.7, 5.2, -2.6].every(x => close(evalAtJS(L, { x }), evalAtJS(R, { x })));
      assert.equal(holds, j === it.answer.answer, o);
    });
  }
});

test('algebra marking: equivalence, form, notation and unreadable input', () => {
  const S = (expr, form, extra = {}) => ({ kind: 'algebra', expr, form, vars: ['x', 'y', 'a', 'b'], ...extra });
  const cases = [
    [S('2x+6', 'expanded'), '6 + 2x', 'correct'], [S('2x+6', 'expanded'), '2(x + 3)', 'partial', 'want-expanded'], [S('2x+6', 'expanded'), 'x + x + 6', 'partial', 'not-simplified'],
    [S('2x+6', 'factorised'), '2(x+3)', 'correct'], [S('2x+6', 'factorised'), '2x+6', 'partial', 'want-factorised'], [S('4x+8', 'factorised'), '2(2x+4)', 'partial', 'not-fully-factorised'],
    [S('x^2+5x+6', 'factorised'), '(x+3)(x+2)', 'correct'], [S('x^2+5x+6', 'factorised'), '(x-2)(x-3)', 'wrong'], [S('x^3-9x', 'factorised'), 'x(x^2-9)', 'partial', 'not-fully-factorised'],
    [S('6x^2+4x', 'factorised'), '2(3x^2+2x)', 'partial', 'not-fully-factorised'], [S('4x^2-9', 'factorised'), '(2x - 3)(2x + 3)', 'correct'], [S('x^2+2xy+y^2', 'factorised'), '(x+y)^2', 'correct'],
    [S('3ab', 'notation'), '3ab', 'correct'], [S('3ab', 'notation'), '3 × a × b', 'partial', 'notation'], [S('a^2b', 'notation'), 'aab', 'partial', 'not-simplified'], [S('x/2', 'notation'), '0.5x', 'partial', 'notation-decimal'],
    [S('x/2', 'simplified'), '(1/2)x', 'correct'], [S('6x^3', 'simplified'), '6x³', 'correct'], [S('6x^3', 'simplified'), '2x × 3x²', 'partial', 'not-simplified'], [S('5x', 'simplified'), '5X', 'correct'],
    [S('a/b', 'notation'), 'a/b', 'correct'], [S('x^2-x-12', 'expanded'), 'x² − 4x + 3x − 12', 'partial', 'not-simplified'], [S('x^2-x-12', 'expanded'), 'x^2 − x − 12', 'correct'],
    [S('(v-u)/a', 'any', { subject: 't', vars: ['v', 'u', 'a', 't'] }), 't = (v − u)/a', 'correct'], [S('(v-u)/a', 'any', { subject: 't', vars: ['v', 'u', 'a', 't'] }), 'v/a − u/a', 'correct'],
    [S('(v-u)/a', 'any', { subject: 't', vars: ['v', 'u', 'a', 't'] }), 'v − u/a', 'wrong'], [S('(v-u)/a', 'any', { subject: 't', vars: ['v', 'u', 'a', 't'] }), 't = (v − u)/t', 'wrong'],
    [S('P/4', 'any', { subject: 's', vars: ['P', 's'] }), 'p/4', 'correct'],
  ];
  for (const [spec, raw, status, code] of cases) {
    const res = markAlgebra(spec, raw);
    assert.equal(res.status, status, `${raw} for ${spec.expr} (${spec.form})`);
    if (code) assert.equal(res.code, code, raw);
  }
  for (const raw of ['x2', '1/2x', '(x + 1', 'x ++ 1 =', 'x @ 2']) assert.equal(markAlgebra(S('x', 'any'), raw).status, 'invalid', raw);
  assert.match(markAlgebra(S('x', 'any'), 'x2').hint, /\^/);
  assert.match(markAlgebra(S('x', 'any'), '1/2x').hint, /brackets/);
  assert.equal(mark({ kind: 'fraction', value: { n: 7, d: 2 }, form: 'value', var: 'x' }, 'x = 3.5').status, 'correct');
  assert.equal(mark({ kind: 'fraction', value: { n: 7, d: 2 }, form: 'value', var: 'x' }, '14/4').status, 'correct');
  assert.equal(mark({ kind: 'integer', value: -3, var: 'x' }, 'x=-3').status, 'correct');
  assert.equal(answerMarkup({ kind: 'integer', value: -3, var: 'x' }), 'x = −3');
  assert.ok(equivalent('(x+1)^2', 'x^2+2x+1') && !equivalent('(x+1)^2', 'x^2+1'));
  assert.ok(algebraMatches('x^2+1', 'x² + 1', { vars: ['x'] }));
});

test('Higher-only algebra sits only in final Higher levels; Foundation checks never reach it', () => {
  const higher = algebraSkills.flatMap(sk => sk.levels.map((l, i) => (l.higher ? `${sk.id}@${i + 1}` : null)).filter(Boolean));
  assert.deepEqual(higher.sort(), ['maths.algebra.expand-double@3', 'maths.algebra.factorise-quadratic@3', 'maths.algebra.quad-solve@3']);
  assert.deepEqual(algebraSkills.filter(sk => sk.higherOnly).map(sk => sk.id).sort(), ['maths.algebra.ineq-quadratic', 'maths.algebra.quad-complete-square', 'maths.algebra.quad-formula', 'maths.algebra.seq-nth-quadratic', 'maths.algebra.sim-nonlinear']);
  for (const sk of algebraSkills) assert.ok(sk.levels.slice(0, levelsFor(sk, 'Foundation').length).every(l => !l.higher), sk.id);
  for (const l of orderedAlgebra) for (const [id, lv] of l.checkPlan) assert.ok(!levelsFor(skillById[id], 'Foundation')[Math.min(lv, topLevel(skillById[id], 'Foundation')) - 1].higher);
});

test('algebra lesson records: ids, refs, prerequisites, visuals and check plans', () => {
  assert.equal(new Set(algebraLessons.map(l => l.id)).size, algebraLessons.length);
  assert.deepEqual(orderedAlgebra.map(l => l.id), algebraOrder);
  const known = new Set([...numberLessons.map(l => l.id)]);
  for (const l of orderedAlgebra) {
    assert.equal(l.topicId, 'maths.algebra');
    assert.ok(l.refs.every(r => /^A\d{1,2}$/.test(r)), l.id);
    for (const p of l.prerequisites || []) assert.ok(known.has(p), `${l.id} prerequisite ${p} must come earlier`);
    known.add(l.id);
    assert.ok(l.learn.length >= 3);
    for (const c of l.learn) assert.ok(c.example.steps.length && (visual4(c.visual) || visual5(c.visual)).length > 20, `${l.id}: ${c.title} visual`);
    assert.equal(l.checkPlan.length, 10);
    for (const [id, lv] of l.checkPlan) { assert.ok(l.skills.some(sk => sk.id === id), `${l.id} check uses foreign skill ${id}`); assert.ok(lv >= 1 && lv <= skillById[id].levels.length); }
    assert.equal(new Set(l.checkPlan.map(([id]) => id)).size, l.skills.length, `${l.id} check must sample every skill`);
    const s = freshMaths();
    assert.deepEqual(lessonDone(lessonState(s, l.id), l, 'Foundation', s), { discover: false, investigate: false, practise: false, check: false });
  }
});

test('inactive Algebra model callbacks cannot write to a previous subject or stage', async () => {
  const { MODELS4 } = await import('../dist/maths/models-algebra.js');
  const { MODELS5 } = await import('../dist/maths/models-algebra2.js');
  for (const mount of [...Object.values(MODELS4), ...Object.values(MODELS5)]) {
    const stale = new Proxy({}, { get() { throw new Error('stale DOM read'); }, set() { throw new Error('stale DOM write'); } });
    assert.doesNotThrow(() => mount({ w: {}, tier: 'Higher', panel: stale, body: stale, isActive: () => false, setTitle() { throw new Error('stale title'); } }));
  }
});
