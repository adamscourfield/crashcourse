// Problem solving: every item re-solved from the PRINTED prompt and the DRAWN figure with arithmetic
// written here (no generator code). Expressions on diagrams such as "3x − 30°" are parsed and the
// equation solved here.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mark } from '../dist/maths/answers.js';
import { problemSkills } from '../dist/maths/skills-problems.js';
import { figSVG } from '../dist/maths/geomfig.js';
import { generate, allSkills } from '../dist/maths/skills.js';
import { orderedProblems, problemsOrder, problemsTopic } from '../dist/maths/lessons-problems.js';
import { mathsCourseMap } from '../dist/maths/lessons-number.js';
import { levelsFor } from '../dist/maths/mastery.js';
import { MODELS17, PLANS } from '../dist/maths/models-problems.js';

const N = 200;
const SK = Object.fromEntries(problemSkills.map(s => [s.id.replace('maths.problems.', ''), s]));
const items = (id, lv, n = N) => Array.from({ length: n }, (_, i) => SK[id].gen(lv, 'pp-' + i));
const val = a => (a.kind === 'integer' ? a.value : a.value.n / a.value.d);
const nums = s => (s.replace(/−/g, '-').replace(/\{(\d+)\/(\d+)\}/g, (_, a, b) => String(a / b)).match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
const money = (it, want) => near(val(it.answer), Math.round(want * 100) / 100, 0.0051);
const correctOption = it => it.answer.options[it.answer.answer];
const dimVal = (fig, k) => Number(fig.dims[k].t.split(' ')[0]);
/** "3x + 20", "x − 7", "2x" → [coefficient, constant]. */
const lin = t => { const m = t.replace(/[°()cm\s]/g, '').replace(/−/g, '-').match(/^(\d*)x([+-]\d+)?$/); assert.ok(m, 'unparsed ' + t); return [m[1] === '' ? 1 : Number(m[1]), m[2] ? Number(m[2]) : 0]; };
const solveSum = (exprs, total) => { const c = exprs.reduce((s, e) => s + lin(e)[0], 0), k = exprs.reduce((s, e) => s + lin(e)[1], 0); return (total - k) / c; };
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'decimal') return a.dp != null ? (a.value.n / a.value.d).toFixed(a.dp) : String(+(a.value.n / a.value.d).toFixed(6));
  throw new Error(a.kind);
}

test('problem-solving skills: deterministic, JSON-safe, self-marking, every trap wrong and explained', () => {
  assert.equal(problemSkills.length, 8);
  for (const sk of problemSkills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = sk.gen(lv, 'g' + i), txt = JSON.stringify(it), tag = `${sk.id}@${lv}: ${it.prompt}`;
    assert.equal(txt, JSON.stringify(sk.gen(lv, 'g' + i)));
    assert.doesNotMatch(txt, /NaN|undefined|Infinity|\[object/, tag);
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', `${tag} → ${rawFor(it.answer)}`);
    assert.ok((it.traps || []).length >= 1 || it.answer.kind === 'choice', tag + ': at least one stage trap');
    for (const t of it.traps || []) { assert.notEqual(mark(it.answer, String(t.v.n / t.v.d)).status, 'correct', `${tag} trap ${t.v.n}/${t.v.d}`); assert.ok(t.why.length > 20, tag); }
    if (it.answer.kind === 'choice') { assert.equal(new Set(it.answer.options).size, it.answer.options.length, tag); it.optionWhy.forEach((w, k) => (k === it.answer.answer ? assert.equal(w, null) : assert.ok(w && w.length > 15, tag))); }
    if (it.fig) assert.ok(!/NaN|undefined/.test(figSVG(it.fig)) && it.fig.alt.length > 10, tag);
    if (it.answer.kind === 'decimal' && it.answer.dp != null) assert.equal(it.calculator, true, tag);
    assert.ok(it.steps.length >= 2, tag + ': multi-step');
  }
  const higher = problemSkills.flatMap(sk => sk.levels.map((v, i) => (v.higher ? `${sk.id.replace('maths.problems.', '')}@${i + 1}` : null)).filter(Boolean));
  assert.deepEqual(higher.sort(), ['money-percent@3', 'volume-time@3', 'word-equations@3']);
});

test('area and volume problems: re-solved from the drawn measurements and the printed rates', () => {
  for (const it of items('area-cost', 1)) {
    const [W, H, dh] = [0, 1, 2].map(k => dimVal(it.fig, k)), dw = Number(it.fig.labels[1].t.split(' ')[0]), [cover, price] = nums(it.prompt.split('covers ')[1]);
    money(it, Math.ceil((W * H - dw * dh) / cover - 1e-9) * price) || assert.fail(it.prompt);
  }
  for (const it of items('area-cost', 2)) {
    const [A, B, top, right] = [0, 1, 2, 3].map(k => dimVal(it.fig, k)), cut = (A - top) * (B - right), tile = +it.prompt.match(/tiles (\d+) cm/)[1], box = +it.prompt.match(/boxes of (\d+)/)[1], price = +it.prompt.match(/costs £(\d+(?:\.\d+)?)/)[1];
    const tiles = (A * B - cut) * (100 / tile) ** 2;
    assert.ok(money(it, Math.ceil(tiles / box - 1e-9) * price), it.prompt);
  }
  for (const it of items('area-cost', 3)) {
    const rr = Number(it.fig.labels[0].t.split(' ')[0]), w = Number(it.fig.labels[1].t.split(' ')[0]), [bag, price] = nums(it.prompt.split('covers ')[1]);
    assert.ok(money(it, Math.ceil((Math.PI * ((rr + w) ** 2 - rr ** 2)) / bag - 1e-9) * price), it.prompt);
  }
  for (const it of items('volume-time', 1)) { const [l, w, h] = [0, 1, 2].map(k => dimVal(it.fig, k)), rate = nums(it.prompt)[0]; assert.ok(near(val(it.answer), (l * w * h) / 1000 / rate), it.prompt); }
  for (const it of items('volume-time', 2)) { const [rr, h, glass] = nums(it.prompt); assert.equal(it.answer.value, Math.floor((Math.PI * rr * rr * h) / glass), it.prompt); }
  for (const it of items('volume-time', 3)) { const [s1, small, s2] = nums(it.prompt); assert.equal(it.answer.value, small * (s2 / s1) ** 3, it.prompt); }
});

test('money problems: re-solved from the printed prices, ratios and rates', () => {
  for (const it of items('money-ratio', 1)) { const [tot, a, b, p] = nums(it.prompt); assert.ok(money(it, (tot / (a + b)) * b * (1 - p / 100)), it.prompt); }
  for (const it of items('money-ratio', 2)) {
    const [n, pA, off, pB] = nums(it.prompt).filter((_, k) => k !== 4 && k !== 5); // drop the "3" and "2" of the offer
    const A = n * pA * (1 - off / 100), B = (n / 3) * 2 * pB;
    assert.ok(money(it, Math.abs(A - B)), it.prompt + ` ${A} ${B}`);
  }
  for (const it of items('money-ratio', 3)) { const [inc, vat] = nums(it.prompt); assert.equal(vat, 20); assert.ok(money(it, inc / 1.2), it.prompt); }
  for (const it of items('money-percent', 1)) {
    const [rate, basic, total] = nums(it.prompt), mult = /double time/.test(it.prompt) ? 2 : 1.5;
    assert.ok(money(it, rate * basic + rate * mult * (total - basic)), it.prompt);
  }
  for (const it of items('money-percent', 2)) {
    const [P, n, sr, cr] = nums(it.prompt), S = P * (1 + (sr * n) / 100), C = P * (1 + cr / 100) ** n;
    assert.ok(near(val(it.answer), Math.round(Math.abs(S - C) * 100) / 100, 0.0051), it.prompt);
  }
  for (const it of items('money-percent', 3)) {
    const [P, dep, target] = nums(it.prompt); let v = P, y = 0; while (v >= target) { v *= 1 - dep / 100; y++; }
    assert.equal(it.answer.value, y, it.prompt);
  }
});

test('equation problems: the equation formed and solved here from the drawn or printed expressions', () => {
  for (const it of items('form-solve', 1)) {
    const exprs = it.fig.angles.map(a => a.label), x = solveSum(exprs, 180), A = exprs.map(e => lin(e)[0] * x + lin(e)[1]);
    assert.ok(Number.isInteger(x) && A.every(v => v > 0), it.fig.alt);
    assert.equal(it.answer.value, Math.max(...A), it.fig.alt);
  }
  for (const it of items('form-solve', 2)) {
    const [L, W] = [it.fig.dims[0].t, it.fig.labels[0].t].map(x => x.replace(' cm', '')), P = nums(it.prompt)[0], x = solveSum([L, L, W, W], P);
    const len = lin(L)[0] * x + lin(L)[1], wid = lin(W)[0] * x + lin(W)[1];
    assert.ok(Number.isInteger(x) && wid > 0, it.fig.alt); assert.equal(it.answer.value, len * wid, it.prompt);
  }
  for (const it of items('form-solve', 3)) {
    const exprs = it.prompt.match(/are (.+)\. Work/)[1].split(', '), x = solveSum(exprs, 360), A = exprs.map(e => lin(e)[0] * x + lin(e)[1]);
    assert.ok(A.every(v => v > 0 && v < 180), it.prompt); assert.equal(it.answer.value, Math.min(...A), it.prompt);
  }
  for (const it of items('word-equations', 1)) {
    const [d, tot] = nums(it.prompt), m = /twice/.test(it.prompt) ? 2 : 3, x = (tot - d) / (m + 2);
    assert.ok(Number.isInteger(x)); assert.equal(it.answer.value, m * x, it.prompt);
  }
  for (const it of items('word-equations', 2)) {
    const [p0, p1, T1, q0, q1, T2] = nums(it.prompt), det = p0 * q1 - p1 * q0, a = (T1 * q1 - p1 * T2) / det, c = (p0 * T2 - q0 * T1) / det;
    const want = /2 adults and 2 children/.test(it.prompt) ? 2 * a + 2 * c : /one adult/.test(it.prompt) ? a : c;
    assert.ok(money(it, want), it.prompt);
  }
  for (const it of items('word-equations', 3)) {
    const [k, area] = nums(it.prompt), x = (-k + Math.sqrt(k * k + 4 * area)) / 2;
    assert.ok(Number.isInteger(x)); assert.equal(it.answer.value, 2 * (2 * x + k), it.prompt);
  }
});

test('averages and probability problems: totals, expected frequencies and branches worked out here', () => {
  for (const it of items('mean-problems', 1)) { const [n1, m1, n2, m2] = nums(it.prompt); assert.ok(near(val(it.answer), (n1 * m1 + n2 * m2) / (n1 + n2)), it.prompt); }
  for (const it of items('mean-problems', 2)) { const [n, m, m2] = nums(it.prompt); assert.equal(it.answer.value, (n + 1) * m2 - n * m, it.prompt); }
  for (const it of items('mean-problems', 3)) {
    const f = it.prompt.match(/Frequency: ([^.]+)\./)[1].split(', '), mean = nums(it.prompt.split('mean number of pets is ')[1])[0], k = f.indexOf('x');
    const known = f.map(Number), sf = known.reduce((s, v, i) => (i === k ? s : s + v), 0), sfx = known.reduce((s, v, i) => (i === k ? s : s + i * v), 0);
    assert.ok(near(it.answer.value, (mean * sf - sfx) / (k - mean)), it.prompt);
  }
  for (const it of items('probability-problems', 1)) { const [cost, p, prize, plays] = nums(it.prompt); assert.ok(money(it, plays * cost - p * plays * prize), it.prompt); assert.ok(plays * cost - p * plays * prize > 0); }
  for (const it of items('probability-problems', 2)) { const [N, g, a, b] = nums(it.prompt); assert.equal(it.answer.value, ((N - N * g) / (a + b)) * b, it.prompt); }
  for (const it of items('probability-problems', 3)) { const [p, lr, ld, days] = nums(it.prompt); assert.ok(near(val(it.answer), (p * lr + (1 - p) * ld) * days), it.prompt); }
});

test('problem-solving records: topic on the course map, lessons, prerequisites, tiers, calculator flags, models', () => {
  assert.equal(problemsTopic.id, 'maths.problems');
  assert.ok(mathsCourseMap.some(([, id]) => id === 'maths.problems'));
  assert.deepEqual(orderedProblems.map(l => l.id), problemsOrder);
  for (const sk of problemSkills) assert.ok(allSkills.some(a => a.id === sk.id), sk.id + ' registered');
  for (const l of orderedProblems) {
    assert.equal(l.topicId, 'maths.problems'); assert.equal(l.checkPlan.length, 10); assert.equal(l.learn.length, 3);
    for (const [id, lv] of l.checkPlan) { const sk = l.skills.find(s => s.id === id); assert.ok(sk && lv <= levelsFor(sk, 'Higher').length, `${l.id}: ${id}@${lv}`); }
    const calcItems = l.skills.some(sk => sk.levels.some((_, i) => Array.from({ length: 30 }, (_, k) => generate(sk.id, i + 1, 'c' + k)).some(it => it.calculator)));
    assert.equal(!!l.calculator, calcItems, l.id);
    assert.ok(MODELS17[l.model], l.model);
    for (const c of l.learn) if (c.visual.kind === 'geo') assert.ok(!/NaN|undefined/.test(figSVG(c.visual.fig)), c.title);
  }
});

test('planner investigations: the right plan is listed once, wrong values are wrong, arithmetic checked', () => {
  for (const [k, P] of Object.entries(PLANS)) {
    assert.equal(P.A.opts.filter(o => o[2] === null).length, 1, k); assert.equal(P.A.opts.find(o => o[2] === null)[0], P.A.ok, k);
    for (const st of [P.B, P.C]) for (const [v] of st.wrong) assert.ok(Math.abs(v - st.ans) > 0.01, `${k}: ${v}`);
  }
  assert.ok(near(PLANS['paint-planner'].B.ans, 5 * 2.5 - 0.9 * 2)); assert.ok(near(PLANS['paint-planner'].C.ans, Math.ceil((5 * 2.5 - 0.9 * 2) / 4) * 13.5));
  assert.equal(PLANS['share-planner'].C.ans, (240 / 8) * 5 * 0.7);
  assert.equal(PLANS['angle-planner'].B.ans, solveSum(['x', '2x', '3x − 30'], 180)); assert.equal(PLANS['angle-planner'].C.ans, 3 * 35 - 30);
  assert.equal(PLANS['game-planner'].C.ans, 200 * 1 - (200 / 5) * 4);
  for (const mount of Object.values(MODELS17)) {
    const stale = new Proxy({}, { get() { throw new Error('stale DOM read'); }, set() { throw new Error('stale DOM write'); } });
    assert.doesNotThrow(() => mount({ w: {}, tier: 'Higher', panel: stale, body: stale, isActive: () => false, setTitle() { throw new Error('stale title'); } }));
  }
});
