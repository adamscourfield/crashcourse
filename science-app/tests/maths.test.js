import test from 'node:test';
import assert from 'node:assert/strict';
import { numberSkills, generate, skillById } from '../dist/maths/skills-number.js';
import { mark, parsePrimeProduct, primeFactors, isPrime, answerMarkup } from '../dist/maths/answers.js';
import { parseNumber, F, eq } from '../dist/maths/frac.js';
import { mathHTML } from '../dist/maths/render.js';
import { mathsLessons, orderedLessons, lessonOrder } from '../dist/maths/lessons-number.js';
import { freshMaths, restoreMaths, skillState, recordPractice, topLevel, isPractised, mixedMet, recordRecall, flagForRecall, dueSkills, lessonDone, lessonState, scheduleFirstReview, RULES, DAY } from '../dist/maths/mastery.js';
import { tokens, nextOp, reduce } from '../dist/maths/models-number.js';
import { subjects } from '../dist/progress.js';

const N = 250; // items per skill level in the sweeps below

function rawFor(answer) {
  if (answer.kind === 'choice') return String(answer.answer);
  if (answer.kind === 'integer') return String(answer.value);
  if (answer.kind === 'primes') return Object.entries(answer.value).map(([p, k]) => (k > 1 ? `${p}^${k}` : p)).join(' x ');
  const f = F(answer.value.n, answer.value.d);
  if (f.d === 1) return String(f.n);
  const neg = f.n < 0, a = Math.abs(f.n);
  if (answer.form === 'mixed' && a > f.d) return `${neg ? '-' : ''}${Math.floor(a / f.d)} ${a % f.d}/${f.d}`;
  return `${neg ? '-' : ''}${a}/${f.d}`;
}
const valueOf = answer => (answer.kind === 'integer' ? answer.value : answer.value.n / answer.value.d);

// Independent evaluation of a printed "Work out …" prompt using ordinary JS arithmetic.
function evalPrompt(prompt) {
  let e = prompt.replace(/^Work out /, '').replace(/\. Give your answer.*$/, '');
  e = e.replace(/\{(\d+) (\d+)\/(\d+)\}/g, '($1+$2/$3)').replace(/\{(\d+)\/(\d+)\}/g, '($1/$2)');
  e = e.replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**').replace(/√(\d+)/g, 'Math.sqrt($1)');
  e = e.replace(/-\((\d)/g, '-1*($1'); // "−(" after a minus sign in front of a bracket is a unary minus
  assert.match(e, /^[\d+\-*/(). Mathsqrt]+$/, 'unexpected characters in ' + prompt);
  return Function(`return (${e});`)();
}

test('maths is offered as an available subject; other non-science subjects stay planned', () => {
  assert.equal(subjects.find(s => s.id === 'maths').status, 'available');
  assert.ok(subjects.filter(s => !['science', 'maths'].includes(s.id)).every(s => s.status === 'planned'));
});

test('every skill level generates deterministic, JSON-safe items whose own answer marks correct', () => {
  for (const sk of numberSkills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const a = generate(sk.id, lv, 's' + i), b = generate(sk.id, lv, 's' + i);
    assert.deepEqual(a, b, `${sk.id} L${lv} not deterministic`);
    assert.deepEqual(JSON.parse(JSON.stringify(a)), a, 'item must survive JSON');
    assert.ok(a.prompt && a.steps.length >= 1, `${sk.id} needs a prompt and worked steps`);
    assert.equal(mark(a.answer, rawFor(a.answer)).status, 'correct', `${sk.id} L${lv} ${a.prompt} → ${rawFor(a.answer)}`);
    for (const t of a.traps || []) {
      const res = mark(a.answer, t.v.d === 1 ? String(t.v.n) : `${t.v.n}/${t.v.d}`);
      assert.equal(res.status, 'wrong', `${sk.id} trap equals the answer: ${a.prompt}`);
      assert.ok(t.why.length > 20, 'trap feedback must explain the misconception');
    }
    if (a.answer.kind === 'choice') {
      assert.equal(new Set(a.answer.options).size, a.answer.options.length, `${sk.id} duplicate options: ${a.prompt}`);
      a.answer.options.forEach((_, j) => { if (j !== a.answer.answer) assert.ok(a.optionWhy[j], 'every wrong option needs feedback'); });
    }
  }
});

test('"Work out" answers agree with an independent evaluation of the printed calculation', () => {
  let checked = 0;
  for (const sk of numberSkills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = generate(sk.id, lv, 'w' + i);
    if (!it.prompt.startsWith('Work out ')) continue;
    const v = evalPrompt(it.prompt);
    assert.ok(Math.abs(v - valueOf(it.answer)) < 1e-9, `${it.prompt} printed value ${v}, stored ${valueOf(it.answer)}`);
    checked++;
  }
  assert.ok(checked > 3000, 'expected thousands of independently checked calculations, got ' + checked);
});

test('prime, HCF/LCM, inverse and fraction-of-amount items satisfy their defining properties', () => {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  for (let i = 0; i < N; i++) for (let lv = 1; lv <= 3; lv++) {
    const f = generate('maths.number.primes.factorise', lv, 'p' + i);
    const n = Number(f.prompt.match(/Write (\d+)/)[1]);
    assert.equal(Object.entries(f.answer.value).reduce((t, [p, k]) => t * Number(p) ** k, 1), n);
    assert.ok(Object.keys(f.answer.value).every(p => isPrime(Number(p))));

    const h = generate('maths.number.primes.hcf-lcm', lv, 'h' + i);
    const m = h.prompt.match(/(HCF|LCM)\)? of (\d+) and (\d+)/);
    if (m) { const [a, b] = [Number(m[2]), Number(m[3])]; assert.equal(h.answer.value, m[1] === 'HCF' ? gcd(a, b) : (a * b) / gcd(a, b), h.prompt); }

    const inv = generate('maths.number.order.inverse', lv, 'i' + i);
    let x = inv.answer.value;
    for (const [, op, k] of inv.prompt.matchAll(/(add|subtract|multiply it by|multiply by|divide by) (\d+)/g)) x = op === 'add' ? x + +k : op === 'subtract' ? x - +k : op.startsWith('multiply') ? x * +k : x / +k;
    assert.equal(x, Number(inv.prompt.match(/answer is (−?\d+)/)[1].replace('−', '-')), inv.prompt);
  }
  for (let i = 0; i < N; i++) {
    const o = generate('maths.number.fractions.of-amount', 1, 'o' + i);
    const [, n, d, amt] = o.prompt.match(/\{(\d+)\/(\d+)\} of \D*(\d+)/);
    assert.equal(o.answer.value, (n / d) * amt, o.prompt);
    const r = generate('maths.number.fractions.of-amount', 2, 'r' + i);
    const [, rn, rd] = r.prompt.match(/\{(\d+)\/(\d+)\}/); const part = Number(r.prompt.match(/(?:is|walk|spent £)\D*?(\d+)(?=\D*\.)/)?.[1] ?? r.prompt.match(/(\d+) students walk|£(\d+)/).slice(1).find(Boolean));
    assert.equal(r.answer.value * (rn / rd), part, r.prompt);
  }
});

test('marking accepts equivalent notation and distinguishes form errors from wrong values', () => {
  const int = { kind: 'integer', value: -3 };
  for (const ok of ['-3', '−3', ' -3 ', '-3.0']) assert.equal(mark(int, ok).status, 'correct', ok);
  assert.equal(mark(int, '3').status, 'wrong');
  assert.equal(mark(int, '-6/2').status, 'partial');
  assert.equal(mark(int, 'minus three').status, 'invalid');
  assert.equal(mark(int, '').status, 'invalid');

  const fr = { kind: 'fraction', value: { n: 3, d: 2 }, form: 'simplest' };
  for (const ok of ['3/2', '1 1/2', ' 3 / 2']) assert.equal(mark(fr, ok).status, 'correct', ok);
  assert.equal(mark(fr, '6/4').code, 'not-simplest');
  assert.equal(mark(fr, '1 2/4').code, 'not-simplest');
  assert.equal(mark(fr, '1.5').code, 'decimal-not-fraction');
  assert.equal(mark(fr, '2/3').status, 'wrong');
  assert.equal(mark({ ...fr, form: 'mixed' }, '3/2').code, 'want-mixed');
  assert.equal(mark({ ...fr, form: 'improper' }, '1 1/2').code, 'want-improper');
  assert.equal(mark({ kind: 'fraction', value: { n: -5, d: 12 }, form: 'simplest' }, '-5/12').status, 'correct');
  assert.equal(mark({ kind: 'fraction', value: { n: 4, d: 1 }, form: 'simplest' }, '4').status, 'correct');
  assert.equal(mark({ kind: 'fraction', value: { n: 4, d: 1 }, form: 'simplest' }, '8/2').status, 'partial');

  const pr = { kind: 'primes', value: { 2: 3, 3: 1 } };
  for (const ok of ['2^3 x 3', '2³×3', '3 × 2 × 2 × 2', '2*2*2*3', '2 ^ 3 * 3', '2.2.2.3']) assert.equal(mark(pr, ok).status, 'correct', ok);
  assert.equal(mark(pr, '4 x 6').code, 'not-all-prime');
  assert.equal(mark(pr, '2^3 x 5').status, 'wrong');
  assert.equal(mark(pr, '24').code, 'not-all-prime');
  assert.equal(mark(pr, 'two cubed').status, 'invalid');
  assert.deepEqual(parsePrimeProduct('2²×3²×5'), { 2: 2, 3: 2, 5: 1 });
  assert.equal(mark({ kind: 'integer', value: 12, allowProduct: true }, '2^2 x 3').status, 'correct');
  assert.deepEqual(primeFactors(360), { 2: 3, 3: 2, 5: 1 });
});

test('render produces accessible stacked fractions, mixed numbers and powers without injecting HTML', () => {
  const h = mathHTML('{3/4} + {2 1/3} − x^2 <b>');
  assert.match(h, /class="fr"/);
  assert.match(h, /3 over 4/);
  assert.match(h, /2 and 1 over 3/);
  assert.match(h, /squared/);
  assert.match(h, /&lt;b&gt;/);
  assert.doesNotMatch(h, /<b>/);
});

test('mastery ladder: promotion, demotion, assisted attempts and top-level window', () => {
  const sk = skillById['maths.number.negatives.add-subtract'];
  const k = skillState(freshMaths(), sk.id);
  const go = (c, a = false) => recordPractice(k, sk, 'Foundation', { correct: c, assisted: a }).event;
  assert.equal(go(true), null); assert.equal(go(true), 'up'); assert.equal(k.level, 2);
  assert.equal(go(true, true), null); assert.equal(k.level, 2, 'assisted correct answers never promote');
  go(false); assert.equal(go(false), 'down'); assert.equal(k.level, 1);
  go(true); go(true); go(true); go(true); assert.equal(k.level, 3);
  go(true); go(true); go(false); assert.equal(isPractised(k, sk, 'Foundation'), false);
  assert.equal(go(true), null, '3 of 4 at the top level is not yet secure');
  assert.equal(go(true), 'practised', '4 of the last 5 at the top level');
  assert.equal(isPractised(k, sk, 'Foundation'), true);
  const minimum = k.log.filter(e => !e.a).length;
  assert.ok(minimum >= 8, 'a three-level skill needs at least 8 unassisted answers');
});

test('a fresh learner needs at least 8 correct answers for a 3-level skill; 4 of 5 at the top', () => {
  const sk = skillById['maths.number.primes.factorise'];
  const k = skillState(freshMaths(), sk.id);
  let n = 0; while (!isPractised(k, sk, 'Foundation')) { recordPractice(k, sk, 'Foundation', { correct: true }); n++; }
  assert.equal(n, RULES.promoteStreak * (topLevel(sk, 'Foundation') - 1) + RULES.topNeeded);
});

test('practised status is tier-aware when Higher adds levels', () => {
  const sk = { id: 'x', levels: [{ label: 'a' }, { label: 'b', higher: true }] };
  const k = skillState(freshMaths(), 'x');
  for (let i = 0; i < 4; i++) recordPractice(k, sk, 'Foundation', { correct: true });
  assert.equal(isPractised(k, sk, 'Foundation'), true);
  assert.equal(isPractised(k, sk, 'Higher'), false);
});

test('mixed round, recall scheduling and check flags', () => {
  assert.equal(mixedMet([{ c: true }, { c: true }, { c: true }]), false);
  assert.equal(mixedMet([{ c: false }, { c: true }, { c: true }, { c: true }, { c: true }]), true);
  assert.equal(mixedMet([{ c: true }, { c: true }, { c: true }, { c: true, a: true }, { c: false }]), false);
  const k = skillState(freshMaths(), 'y'), t0 = 1e12;
  scheduleFirstReview(k, t0); assert.equal(k.due, t0 + DAY);
  recordRecall(k, true, t0); assert.equal(k.interval, 3);
  recordRecall(k, true, t0); assert.equal(k.interval, 9);
  recordRecall(k, true, t0); assert.equal(k.interval, 21);
  recordRecall(k, true, t0); assert.equal(k.interval, 21);
  recordRecall(k, false, t0); assert.equal(k.needsReview, true); assert.equal(k.due, t0);
  const s = freshMaths(); flagForRecall(skillState(s, 'z'), t0);
  assert.deepEqual(dueSkills(s, ['z', 'q'], t0), ['z']);
});

test('saved maths state restores safely and never touches science storage', () => {
  assert.deepEqual(restoreMaths('not json'), freshMaths());
  assert.deepEqual(restoreMaths(null), freshMaths());
  const s = freshMaths(); s.tier = 'Higher'; s.lessons = []; s.skills = { a: { level: 2 } }; s.view = 'review';
  const r = restoreMaths(JSON.stringify(s));
  assert.equal(r.tier, 'Higher'); assert.deepEqual(r.lessons, {}); assert.equal(r.skills.a.level, 2); assert.equal(r.view, 'review');
  assert.equal(restoreMaths(JSON.stringify({ ...s, tier: 'Expert' })).tier, 'Foundation');
});

test('lesson records: unique IDs, valid prerequisites, 1MA1 refs and check plans on their own skills', () => {
  assert.equal(new Set(mathsLessons.map(l => l.id)).size, mathsLessons.length);
  assert.deepEqual(orderedLessons.map(l => l.id), lessonOrder);
  const pos = Object.fromEntries(lessonOrder.map((id, i) => [id, i]));
  for (const l of mathsLessons) {
    assert.ok(l.refs.every(r => /^N\d{1,2}$/.test(r)), l.id);
    assert.ok(l.learn.length >= 3 && l.learn.every(c => c.example?.steps?.length && c.visual?.kind));
    for (const p of l.prerequisites || []) assert.ok(pos[p] < pos[l.id], `${l.id} prerequisite ${p} must come earlier`);
    assert.equal(l.checkPlan.length, 10);
    for (const [id, lv] of l.checkPlan) { assert.ok(l.skills.some(sk => sk.id === id), `${l.id} check uses foreign skill ${id}`); assert.ok(lv >= 1 && lv <= skillById[id].levels.length); }
    assert.ok(new Set(l.checkPlan.map(([id]) => id)).size === l.skills.length, `${l.id} check must sample every skill`);
    const s = freshMaths(), p = lessonState(s, l.id);
    assert.deepEqual(lessonDone(p, l, 'Foundation', s), { discover: false, investigate: false, practise: false, check: false });
  }
});

test('order-of-operations investigation collapses expressions to the conventional value', () => {
  const js = e => Function(`return ${e.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/\^/g, '**')}`)();
  for (const e of ['6 + 4 × 3 − 2', '20 ÷ 4 × 5', '( 2 + 3 ) ^ 2 − 4 × 3', '18 − 6 ÷ 3 + 2 ^ 3', '24 ÷ 4 ÷ 2', '10 − 4 + 3']) {
    let tk = tokens(e), guard = 0;
    while (tk.length > 1 && guard++ < 20) tk = reduce(tk, nextOp(tk));
    assert.equal(tk[0], js(e), e);
  }
});
