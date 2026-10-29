import test from 'node:test';
import assert from 'node:assert/strict';
import { allSkills, generate, skillById } from '../dist/maths/skills.js';
import { mark, parsePrimeProduct, primeFactors, isPrime, answerMarkup, decimalPlacesFor } from '../dist/maths/answers.js';
import { exactNumber } from '../dist/maths/exact.js';
import { parseNumber, F, eq, decText } from '../dist/maths/frac.js';
import { mathHTML } from '../dist/maths/render.js';
import { mathsLessons, orderedLessons, lessonOrder } from '../dist/maths/lessons-number.js';
import { freshMaths, restoreMaths, skillState, recordPractice, topLevel, levelsFor, isPractised, mixedMet, recordRecall, flagForRecall, dueSkills, lessonDone, lessonState, scheduleFirstReview, RULES, DAY } from '../dist/maths/mastery.js';
import { tokens, nextOp, reduce } from '../dist/maths/models-number.js';
import { subjects } from '../dist/progress.js';

const N = 250; // items per skill level in the sweeps below
const numberSkills = allSkills.filter(sk => sk.id.startsWith('maths.number.')); // Algebra has its own test file

const asc = t => t.replace('−', '-');
function rawFor(answer) {
  if (answer.kind === 'choice') return String(answer.answer);
  if (answer.kind === 'decimal') return asc(decText(F(answer.value.n, answer.value.d), decimalPlacesFor(answer)));
  if (answer.kind === 'standard') return `${asc(decText(F(answer.a.n, answer.a.d)))} x 10^${answer.n}`;
  if (answer.kind === 'power') return `${answer.base}^${answer.exp}`;
  if (answer.kind === 'ratio') return answer.parts.join(':');
  if (answer.kind === 'exact') {
    const sym = answer.r === 'pi' ? 'π' : '√' + answer.r, A = F(answer.a.n, answer.a.d), B = F(answer.b.n, answer.b.d);
    const irr = B.n === 0 ? '' : `${Math.abs(B.n)}${sym}${B.d > 1 ? '/' + B.d : ''}`;
    const rat = A.n === 0 ? '' : A.d === 1 ? String(A.n) : `${A.n}/${A.d}`;
    if (!irr) return rat || '0';
    return rat ? `${rat} ${B.n < 0 ? '-' : '+'} ${irr}` : `${B.n < 0 ? '-' : ''}${irr}`;
  }
  if (answer.kind === 'interval') return `${asc(decText(F(answer.lo.n, answer.lo.d)))} ${answer.loIn ? '<=' : '<'} x ${answer.hiIn ? '<=' : '<'} ${asc(decText(F(answer.hi.n, answer.hi.d)))}`;
  if (answer.kind === 'integer') return String(answer.value);
  if (answer.kind === 'primes') return Object.entries(answer.value).map(([p, k]) => (k > 1 ? `${p}^${k}` : p)).join(' x ');
  const f = F(answer.value.n, answer.value.d);
  if (f.d === 1) return String(f.n);
  const neg = f.n < 0, a = Math.abs(f.n);
  if (answer.form === 'mixed' && a > f.d) return `${neg ? '-' : ''}${Math.floor(a / f.d)} ${a % f.d}/${f.d}`;
  return `${neg ? '-' : ''}${a}/${f.d}`;
}
const valueOf = answer => (answer.kind === 'exact' ? exactNumber(answer) : answer.kind === 'integer' ? answer.value : answer.kind === 'standard' ? (answer.a.n / answer.a.d) * 10 ** answer.n : answer.kind === 'power' ? answer.base ** answer.exp : answer.value.n / answer.value.d);
const close = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));

// Independent evaluation of a printed "Work out …" prompt using ordinary JS arithmetic.
function evalPrompt(prompt) {
  let e = prompt.replace(/^Work out /, '').replace(/\. Give your answer.*$/, '');
  e = e.replace(/\^\{([^{}]+)\}/g, '^($1)');
  e = e.replace(/\{(\d+) (\d+)\/(\d+)\}/g, '($1+$2/$3)').replace(/\{([^{}/]+)\/([^{}]+)\}/g, '(($1)/($2))');
  e = e.replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**').replace(/√(\d+)/g, 'Math.sqrt($1)').replace(/∛(\d+)/g, 'Math.cbrt($1)');
  e = e.replace(/-\((\d)/g, '-1*($1'); // "−(" after a minus sign in front of a bracket is a unary minus
  assert.match(e, /^[\d+\-*/(). Mathsqrtcb]+$/, 'unexpected characters in ' + prompt);
  return Function(`return (${e});`)();
}

test('maths is offered as an available subject; Geography, History and Literature are available while Language reading foundations are available', () => {
  assert.equal(subjects.find(s => s.id === 'maths').status, 'available');
  assert.ok(subjects.filter(s => !['science', 'maths', 'geography', 'history', 'english-literature', 'english-language'].includes(s.id)).every(s => s.status === 'planned'));
});

test('every skill level generates deterministic, JSON-safe items whose own answer marks correct', () => {
  for (const sk of numberSkills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const a = generate(sk.id, lv, 's' + i), b = generate(sk.id, lv, 's' + i);
    assert.deepEqual(a, b, `${sk.id} L${lv} not deterministic`);
    assert.deepEqual(JSON.parse(JSON.stringify(a)), a, 'item must survive JSON');
    assert.ok(a.prompt && a.steps.length >= 1, `${sk.id} needs a prompt and worked steps`);
    assert.equal(mark(a.answer, rawFor(a.answer)).status, 'correct', `${sk.id} L${lv} ${a.prompt} → ${rawFor(a.answer)}`);
    for (const t of a.traps || []) {
      const tval = F(t.v.n, t.v.d);
      if (a.answer.kind === 'exact' || a.answer.kind === 'ratio') continue;
      const traw = a.answer.kind === 'standard' || a.answer.kind === 'power' || a.answer.kind === 'decimal' ? (decText(tval) ?? `${t.v.n}/${t.v.d}`).replace('−', '-') : t.v.d === 1 ? String(t.v.n) : `${t.v.n}/${t.v.d}`;
      const res = mark(a.answer, traw);
      assert.notEqual(res.status, 'correct', `${sk.id} trap marks correct: ${a.prompt}`);
      if (a.answer.kind !== 'standard' && a.answer.kind !== 'power') assert.equal(res.status, 'wrong', `${sk.id} trap equals the answer: ${a.prompt}`);
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
    if (!it.prompt.startsWith('Work out ') || /reciprocal/.test(it.prompt)) continue;
    const v = evalPrompt(it.prompt);
    assert.ok(close(v, valueOf(it.answer)), `${it.prompt} printed value ${v}, stored ${valueOf(it.answer)}`);
    checked++;
  }
  assert.ok(checked > 6000, 'expected thousands of independently checked calculations, got ' + checked);
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

// ───────── batch 2: properties checked from the printed prompt ─────────
const num = t => parseNumber(t.replace(/ /g, '').replace('−', '-')).value;
const fv = f => f.n / f.d;

test('rounding answers are the nearest multiple of the stated unit', () => {
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.number.rounding.round', lv, 'r' + i);
    const m = it.prompt.match(/^Round ([\d .]+) to (?:the nearest (\d+)|(\d) decimal places?|(\d) significant figures?)\.$/);
    assert.ok(m, it.prompt);
    const x = num(m[1]), ans = F(it.answer.value.n, it.answer.value.d);
    let unit;
    if (m[2]) unit = F(Number(m[2]));
    else if (m[3]) unit = F(1, 10 ** Number(m[3]));
    else { const e = Math.floor(Math.log10(fv(x))) - Number(m[4]) + 1; unit = e >= 0 ? F(10 ** e) : F(1, 10 ** -e); }
    const q = fv(ans) / fv(unit);
    assert.ok(Math.abs(q - Math.round(q)) < 1e-9, `${it.prompt}: ${fv(ans)} is not a multiple of the unit`);
    assert.ok(Math.abs(fv(ans) - fv(x)) <= fv(unit) / 2 + 1e-12, `${it.prompt}: ${fv(ans)} is not nearest`);
    if (m[3]) assert.equal(it.answer.dp, Number(m[3]));
  }
});

test('error intervals are half a unit either side for rounding and start at the value for truncation', () => {
  for (let lv = 1; lv <= 2; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.number.rounding.error-interval', lv, 'e' + i);
    const m = it.prompt.match(/= ([\d .]+), (correct to|truncated to) (1 decimal place|the nearest whole number|the nearest 10|a whole number|1 significant figure)/);
    assert.ok(m, it.prompt);
    const v = fv(num(m[1])), lo = fv(it.answer.lo), hi = fv(it.answer.hi);
    const unit = m[3] === '1 decimal place' ? 0.1 : m[3] === 'the nearest 10' ? 10 : m[3] === '1 significant figure' ? 10 ** Math.floor(Math.log10(v)) : 1;
    assert.ok(close(hi - lo, unit), it.prompt);
    if (m[2] === 'truncated to') assert.ok(close(lo, v), it.prompt); else assert.ok(close((lo + hi) / 2, v), it.prompt);
    assert.equal(it.answer.loIn, true); assert.equal(it.answer.hiIn, false);
  }
});

test('standard form conversions preserve the printed value; percentages and estimates match the prompt', () => {
  for (let lv = 1; lv <= 2; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.number.standard-form.convert', lv, 's' + i);
    let m;
    if ((m = it.prompt.match(/^Write ([\d .]+) in standard form\.$/))) {
      assert.ok(close(fv(num(m[1])), valueOf(it.answer)), it.prompt);
      const A = it.answer.a.n / it.answer.a.d; assert.ok(A >= 1 && A < 10, it.prompt);
    } else if ((m = it.prompt.match(/^Write ([\d.]+) × 10\^\{(−?\d+)\} as an ordinary number\.$/))) {
      assert.ok(close(Number(m[1]) * 10 ** Number(m[2].replace('−', '-')), valueOf(it.answer)), it.prompt);
    } else assert.fail(it.prompt);
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.number.fdp.percentages', lv, 'p' + i);
    const m = it.prompt.match(/^Find ([\d.]+)% of (\d+)\.$/);
    if (m) assert.ok(close((Number(m[1]) / 100) * Number(m[2]), valueOf(it.answer)), it.prompt);
    const k = it.prompt.match(/(\d+) out of (\d+)|£(\d+) as a percentage of £(\d+)|(\d+) cm as a percentage of (\d+) cm/);
    if (k) { const [a, b] = k.slice(1).filter(Boolean).map(Number); assert.ok(close((a / b) * 100, valueOf(it.answer)), it.prompt); }
  }
  for (let lv = 1; lv <= 2; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.number.rounding.estimate', lv, 'x' + i);
    const nums = [...it.prompt.matchAll(/\d+(?:\.\d+)?/g)].map(x => Number(x[0])).filter(x => x !== 1);
    const r1 = x => Number(x.toPrecision(1));
    const v = nums.length === 2 ? r1(nums[0]) * r1(nums[1]) : (r1(nums[0]) * r1(nums[1])) / r1(nums[2]);
    assert.ok(close(v, valueOf(it.answer)), it.prompt + ' → ' + v);
  }
});

test('recurring decimals (Higher) convert to the fraction the dotted digits describe', () => {
  for (let i = 0; i < N; i++) {
    const it = generate('maths.number.fdp.convert', 3, 'c' + i);
    if (it.answer.kind === 'choice') {
      const [, fn, fd] = it.prompt.match(/\{(\d+)\/(\d+)\}/);
      const opt = it.answer.options[it.answer.answer].slice(2), marks = [...opt.matchAll(/\ḋ/g)].map(x => x.index), plain2 = opt.replace(/̇/g, '');
      const f2 = opt.slice(0, marks[0]).replace(/̇/g, '').length, l2 = opt.slice(0, marks.at(-1)).replace(/̇/g, '').length;
      assert.ok(Math.abs(Number('0.' + plain2.slice(0, f2) + plain2.slice(f2, l2 + 1).repeat(12)) - Number(fn) / Number(fd)) < 1e-9, it.prompt);
      continue;
    }
    const d = it.prompt.match(/Write 0\.([\ḋ]+) as/)[1];
    const plain = d.replace(/̇/g, ''), dots = [...d.matchAll(/\ḋ/g)].map(x => x.index);
    const first = d.slice(0, dots[0]).replace(/̇/g, '').length, last = d.slice(0, dots.at(-1)).replace(/̇/g, '').length;
    const pre = plain.slice(0, first), rep = plain.slice(first, last + 1);
    const approx = Number('0.' + pre + rep.repeat(12));
    assert.ok(Math.abs(approx - valueOf(it.answer)) < 1e-9, it.prompt);
  }
});

test('Higher-only content sits only in Higher levels and never reaches a Foundation learner', () => {
  const higherLevels = numberSkills.flatMap(sk => sk.levels.map((l, i) => (l.higher ? `${sk.id}@${i + 1}` : null)).filter(Boolean));
  assert.deepEqual(higherLevels.sort(), ['maths.number.fdp.convert@3', 'maths.number.listing.count@3', 'maths.number.powers.evaluate@3', 'maths.number.powers.index-laws@4', 'maths.number.rounding.error-interval@3'].sort());
  assert.deepEqual(numberSkills.filter(sk => sk.higherOnly).map(sk => sk.id).sort(), ['maths.number.exact.surds-rationalise', 'maths.number.exact.surds-simplify']);
  const exactLesson = orderedLessons.find(l => l.id === 'maths.number.exact');
  assert.ok(exactLesson.skills.some(sk => !sk.higherOnly), 'the exact-answers lesson still has Foundation content (π)');
  for (const sk of numberSkills) {
    const fl = levelsFor(sk, 'Foundation');
    assert.ok(fl.every(l => !l.higher));
    assert.ok(sk.levels.slice(0, fl.length).every(l => !l.higher), `${sk.id}: Higher levels must come after Foundation ones`);
  }
  for (const l of orderedLessons) for (const [id, lv] of l.checkPlan) assert.ok(!levelsFor(skillById[id], 'Foundation')[Math.min(lv, topLevel(skillById[id], 'Foundation')) - 1].higher);
});

test('batch-2 answer kinds: decimals keep required places, standard form and powers distinguish form from value', () => {
  assert.equal(mark({ kind: 'decimal', value: { n: 31, d: 10 }, dp: 2 }, '3.10').status, 'correct');
  assert.equal(mark({ kind: 'decimal', value: { n: 31, d: 10 }, dp: 2 }, '3.1').code, 'dp-format');
  assert.equal(mark({ kind: 'decimal', value: { n: 203, d: 5000 }, sf: 3 }, '0.0406').status, 'correct');
  assert.equal(mark({ kind: 'decimal', value: { n: 2, d: 25 }, sf: 2 }, '0.08').code, 'sf-format');
  assert.equal(answerMarkup({ kind: 'decimal', value: { n: 2, d: 25 }, sf: 2 }), '0.080', 'the shown answer keeps the significant zero');
  assert.equal(mark({ kind: 'decimal', value: { n: 1, d: 4 } }, '1/4').code, 'want-decimal');
  const sf = { kind: 'standard', a: { n: 45, d: 10 }, n: -4 };
  for (const ok of ['4.5 x 10^-4', '4.5×10⁻⁴', '4.5 * 10^(−4)', '4.5e-4']) assert.equal(mark(sf, ok).status, 'correct', ok);
  assert.equal(mark(sf, '45 x 10^-5').code, 'want-standard');
  assert.equal(mark(sf, '0.00045').code, 'want-standard');
  assert.equal(mark(sf, '4.5 x 10^4').status, 'wrong');
  assert.equal(mark({ kind: 'power', base: 2, exp: -3 }, '2^-3').status, 'correct');
  assert.equal(mark({ kind: 'power', base: 2, exp: -3 }, '1/8').code, 'want-power');
  assert.equal(mark({ kind: 'power', base: 2, exp: 6 }, '4^3').code, 'want-power');
  const iv = { kind: 'interval', lo: { n: 425, d: 100 }, hi: { n: 435, d: 100 }, loIn: true, hiIn: false };
  assert.equal(mark(iv, '4.25 ≤ x < 4.35').status, 'correct');
  assert.equal(mark(iv, '4.25<=y<4.35').status, 'correct');
  assert.equal(mark(iv, '4.25 < x <= 4.35').code, 'interval-ends');
  assert.equal(mark(iv, '4.2 <= x < 4.4').status, 'wrong');
  assert.equal(mark(iv, '4.25 to 4.35').status, 'invalid');
});

// ───────── batch 3: exact answers, units, compound measures, listing, ratio, reciprocals, symbols ─────────
function evalExact(prompt) {
  let e = prompt.replace(/^(Simplify|Expand and simplify|Rationalise the denominator of|Write) /, '').replace(/\. Give your answer.*$/, '').replace(/ in the form a \+ b√\d+\.$/, '').replace(/\.$/, '');
  e = e.replace(/\{([^{}]+)\/([^{}]+)\}/g, '(($1)/($2))');
  e = e.replace(/(\d)√(\d+)/g, '$1*Math.sqrt($2)').replace(/√(\d+)/g, 'Math.sqrt($1)').replace(/(\d)π/g, '$1*Math.PI').replace(/π/g, 'Math.PI');
  e = e.replace(/²/g, '**2').replace(/\)\(/g, ')*(').replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/');
  assert.match(e, /^[\d+\-*/(). MathsqrtPI]+$/, 'unexpected characters in ' + prompt + ' → ' + e);
  return Function(`return (${e});`)();
}
test('exact answers (π and surds) equal the printed expression evaluated numerically', () => {
  let checked = 0;
  for (const id of ['maths.number.exact.pi', 'maths.number.exact.surds-simplify', 'maths.number.exact.surds-rationalise']) for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate(id, lv, 'x' + i);
    if (/circle|semicircle/.test(it.prompt)) {
      const r = Number(it.prompt.match(/radius (\d+)/)?.[1] ?? Number(it.prompt.match(/diameter (\d+)/)[1]) / 2);
      const want = /semicircle.*area/.test(it.prompt) ? (Math.PI * r * r) / 2 : /quarter/.test(it.prompt) ? (Math.PI * r * r) / 4 : /semicircle.*perimeter/.test(it.prompt) ? Math.PI * r + 2 * r : /area/.test(it.prompt) ? Math.PI * r * r : 2 * Math.PI * r;
      assert.ok(close(want, valueOf(it.answer)), it.prompt);
    } else assert.ok(close(evalExact(it.prompt), valueOf(it.answer)), it.prompt + ' → ' + evalExact(it.prompt));
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', it.prompt + ' ← ' + rawFor(it.answer));
    checked++;
  }
  assert.ok(checked >= 2000);
});

test('unit conversions, durations, speeds and densities match the printed numbers', () => {
  const factor = { 'km>m': 1000, 'm>cm': 100, 'cm>mm': 10, 'm>mm': 1000, 'kg>g': 1000, 'l>ml': 1000, 'km>cm': 100000, 'm²>cm²': 10000, 'm³>cm³': 1e6 };
  const f = (a, b) => factor[`${a}>${b}`] ?? 1 / factor[`${b}>${a}`];
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.number.units.convert', lv, 'u' + i);
    let m;
    if ((m = it.prompt.match(/^Convert ([\d.]+) (\S+) into (\S+)\.$/))) assert.ok(close(Number(m[1]) * f(m[2], m[3]), valueOf(it.answer)), it.prompt);
    else if ((m = it.prompt.match(/holds ([\d ]+) cm³\. How many (millilitres|litres)/))) assert.ok(close(Number(m[1].replace(/ /g, '')) / (m[2] === 'litres' ? 1000 : 1), valueOf(it.answer)), it.prompt);
    else if ((m = it.prompt.match(/is ([\d.]+) km and then (\d+) m/))) assert.ok(close(Number(m[1]) * 1000 + Number(m[2]), valueOf(it.answer)), it.prompt);
    else if ((m = it.prompt.match(/How many (\d+) ml glasses .* from (\d+) litres/))) assert.equal(valueOf(it.answer), Math.floor((Number(m[2]) * 1000) / Number(m[1])), it.prompt);
    else assert.fail(it.prompt);
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.number.units.time', lv, 't' + i);
    let m;
    if ((m = it.prompt.match(/minutes are there in ([\d.]+) hours/))) assert.ok(close(Number(m[1]) * 60, valueOf(it.answer)), it.prompt);
    else if ((m = it.prompt.match(/Write (\d+) hours (\d+) minutes as a number of hours/))) assert.ok(close(Number(m[1]) + Number(m[2]) / 60, valueOf(it.answer)), it.prompt);
    else if ((m = it.prompt.match(/starts at (\d\d):(\d\d) and ends at (\d\d):(\d\d)/))) assert.equal(valueOf(it.answer), (Number(m[3]) * 60 + Number(m[4])) - (Number(m[1]) * 60 + Number(m[2])), it.prompt);
    else if ((m = it.prompt.match(/£(\d+) per hour.* (\d+) hours (\d+) minutes/))) assert.ok(close(Number(m[1]) * (Number(m[2]) + Number(m[3]) / 60), valueOf(it.answer)), it.prompt);
    else assert.fail(it.prompt);
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.number.compound.speed', lv, 's' + i), n = [...it.prompt.matchAll(/\d+(?:\.\d+)?/g)].map(x => Number(x[0]));
    let want;
    if (/travels (\d+) km in (\d+) hours/.test(it.prompt)) want = n[0] / n[1];
    else if (/at (\d+) km\/h for (\d+) hours/.test(it.prompt)) want = n[0] * n[1];
    else if (/travels (\d+) km at (\d+) km\/h\. How many hours/.test(it.prompt)) want = n[0] / n[1];
    else if (/for (\d+) minutes/.test(it.prompt)) want = (n[0] * n[1]) / 60;
    else if (/How many minutes does it take to travel/.test(it.prompt)) want = (n[0] / n[1]) * 60;
    else if (/average speed for the whole journey/.test(it.prompt)) want = (n[0] + n[2]) / (n[0] / n[1] + n[2] / n[3]);
    else if (/Convert ([\d.]+) m\/s into km\/h/.test(it.prompt)) want = n[0] * 3.6;
    else if (/Convert ([\d.]+) km\/h into m\/s/.test(it.prompt)) want = n[0] / 3.6;
    else assert.fail(it.prompt);
    assert.ok(close(want, valueOf(it.answer)), it.prompt);
  }
  for (let lv = 1; lv <= 3; lv++) for (let i = 0; i < N; i++) {
    const it = generate('maths.number.compound.density-pressure', lv, 'd' + i), n = [...it.prompt.matchAll(/\d+(?:\.\d+)?/g)].map(x => Number(x[0]));
    const want = /mass ([\d.]+) g and volume (\d+)/.test(it.prompt) ? n[0] / n[1] : /Find the mass of/.test(it.prompt) ? n[0] * n[1] : /Find its volume/.test(it.prompt) ? n[1] / n[0] : /force of ([\d.]+) N acts on an area of ([\d.]+)/.test(it.prompt) ? n[0] / n[1] : n[0] * n[1];
    assert.ok(close(want, valueOf(it.answer)), it.prompt);
  }
});

test('listing, ratio fractions, reciprocals and inequality symbols are right by the printed numbers', () => {
  for (let i = 0; i < N; i++) {
    const a = generate('maths.number.listing.count', 1, 'l' + i), groups = [...a.prompt.matchAll(/\(([^)]+)\)/g)].map(m => m[1].split(', ').length);
    assert.equal(a.answer.value, groups[0] * groups[1], a.prompt);
    const b = generate('maths.number.listing.count', 2, 'm' + i), m = b.prompt.match(/^(\d+) people/);
    assert.equal(b.answer.value, m ? (Number(m[1]) * (Number(m[1]) - 1)) / 2 : 6, b.prompt);
    const c = generate('maths.number.listing.count', 3, 'n' + i);
    let k;
    if ((k = c.prompt.match(/(one letter|two letters) .* followed by (\d) digits/))) assert.equal(c.answer.value, 26 ** (k[1] === 'one letter' ? 1 : 2) * 10 ** Number(k[2]), c.prompt);
    else if ((k = c.prompt.match(/A (\d)-digit PIN .* no digit repeated/))) assert.equal(c.answer.value, [10, 9, 8, 7].slice(0, Number(k[1])).reduce((x, y) => x * y, 1), c.prompt);
    else if ((k = c.prompt.match(/How many (\d)-digit whole numbers are there/))) assert.equal(c.answer.value, 9 * 10 ** (Number(k[1]) - 1), c.prompt);
    else if (/3-digit whole numbers are odd/.test(c.prompt)) assert.equal(c.answer.value, 450);
    else if ((k = c.prompt.match(/^(\d+) runners/))) assert.equal(c.answer.value, Number(k[1]) * (Number(k[1]) - 1), c.prompt);
    else assert.fail(c.prompt);
    const sys = generate('maths.number.listing.systematic', 1 + (i % 2), 's' + i), listed = sys.prompt.match(/(?:list is|each:) ([A-Z0-9, ]+)\./)[1].split(', ');
    assert.ok(!listed.includes(sys.answer.options[sys.answer.answer]) && listed.length === 5, sys.prompt);
  }
  for (let i = 0; i < N; i++) {
    const r1 = generate('maths.number.ratio-fractions', 1, 'r' + i), m = r1.prompt.match(/is (\d+) : (\d+)\. What fraction of the total are (\w+)/), [, a, b] = m.map(Number);
    const first = r1.prompt.match(/ratio of (\w+) to/)[1] === m[3];
    assert.ok(close((first ? a : b) / (a + b), valueOf(r1.answer)), r1.prompt);
    const rc = generate('maths.number.reciprocals', 1 + (i % 2), 'c' + i), x = rc.prompt.match(/reciprocal of (\{[^}]+\}|\d+(?:\.\d+)?)/)[1].replace(/\{(\d+) (\d+)\/(\d+)\}/, '($1+$2/$3)').replace(/\{(\d+)\/(\d+)\}/, '($1/$2)');
    assert.ok(close(Function(`return ${x}`)() * valueOf(rc.answer), 1), rc.prompt);
  }
  const truth = st => { const [l, op, rr] = st.replace(/−/g, '-').split(' '); const L = Number(l), R = Number(rr); return { '<': L < R, '>': L > R, '≤': L <= R, '≥': L >= R, '≠': L !== R }[op]; };
  for (let i = 0; i < N; i++) {
    const it = generate('maths.number.symbols', 2, 'y' + i);
    assert.equal(it.answer.options.filter(truth).length, 1, it.answer.options.join(' | '));
    assert.ok(truth(it.answer.options[it.answer.answer]));
    const one = generate('maths.number.symbols', 1, 'z' + i), m = one.prompt.match(/box\?\s+(\S+) ☐ (\S+)$/);
    const val = t => Function(`return ${t.replace('−', '-').replace(/\{(\d+)\/(\d+)\}/, '($1/$2)')}`)();
    const L = val(m[1]), R = val(m[2]), right = Math.abs(L - R) < 1e-12 ? '=' : L < R ? '<' : '>';
    assert.equal(one.answer.options[one.answer.answer], right, one.prompt);
  }
});

test('exact and ratio marking: value vs form', () => {
  const s3 = { kind: 'exact', a: { n: 0, d: 1 }, b: { n: 2, d: 1 }, r: 3 };
  for (const ok of ['2√3', '2sqrt(3)', '2 × √3']) assert.equal(mark(s3, ok).status, 'correct', ok);
  assert.equal(mark(s3, '√12').code, 'surd-not-simplified');
  assert.equal(mark(s3, '√3 + √3').code, 'surd-not-simplified');
  assert.equal(mark(s3, '3√2').status, 'wrong');
  const rat = { kind: 'exact', a: { n: 0, d: 1 }, b: { n: 2, d: 3 }, r: 3 };
  for (const ok of ['2√3/3', '(2/3)√3', '(2√3)/3']) assert.equal(mark(rat, ok).status, 'correct', ok);
  assert.equal(mark(rat, '2/√3').code, 'not-rationalised');
  const pi = { kind: 'exact', a: { n: 8, d: 1 }, b: { n: 4, d: 1 }, r: 'pi' };
  for (const ok of ['4π + 8', '8 + 4pi', '8+4π']) assert.equal(mark(pi, ok).status, 'correct', ok);
  assert.equal(mark({ kind: 'exact', a: { n: 0, d: 1 }, b: { n: 9, d: 1 }, r: 'pi' }, '28.3').code, 'want-exact');
  assert.equal(mark({ kind: 'exact', a: { n: 0, d: 1 }, b: { n: 9, d: 1 }, r: 'pi' }, '28').status, 'wrong');
  const q = { kind: 'ratio', parts: [3, 5] };
  assert.equal(mark(q, '3 : 5').status, 'correct');
  assert.equal(mark(q, '6:10').code, 'ratio-not-simplest');
  assert.equal(mark(q, '5:3').status, 'wrong');
  assert.equal(mark(q, '3/5').status, 'invalid');
});
