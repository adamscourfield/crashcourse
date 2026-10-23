// Probability: every item re-solved from its PRINTED prompt or the numbers DRAWN in its table, Venn
// diagram or tree, using exact fractions computed here (no generator code).
import test from 'node:test';
import assert from 'node:assert/strict';
import { mark } from '../dist/maths/answers.js';
import { probabilitySkills } from '../dist/maths/skills-probability.js';
import { figSVG } from '../dist/maths/geomfig.js';
import { generate, allSkills } from '../dist/maths/skills.js';
import { orderedProbability, probabilityOrder, probabilityTopic } from '../dist/maths/lessons-probability.js';
import { orderedLessons as numberLessons } from '../dist/maths/lessons-number.js';
import { levelsFor } from '../dist/maths/mastery.js';
import { MODELS14 } from '../dist/maths/models-probability.js';

const N = 200;
const SK = Object.fromEntries(probabilitySkills.map(s => [s.id.replace('maths.probability.', ''), s]));
const items = (id, lv, n = N) => Array.from({ length: n }, (_, i) => SK[id].gen(lv, 'p-' + i));
const val = a => (a.kind === 'integer' ? a.value : a.value.n / a.value.d);
const nums = s => (s.replace(/−/g, '-').match(/\d+(?:\.\d+)?/g) || []).map(Number);
const near = (a, b, tol = 1e-12) => Math.abs(a - b) <= tol;
const correctOption = it => it.answer.options[it.answer.answer];
const frac = s => { const m = String(s).match(/^(\d+)\/(\d+)$/); return m ? Number(m[1]) / Number(m[2]) : Number(s); };
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'fraction') return `${a.value.n}/${a.value.d}`;
  if (a.kind === 'decimal') return String(+(a.value.n / a.value.d).toFixed(6));
  throw new Error(a.kind);
}
const cells = fig => fig.labels.map(l => l.t);
const venn = fig => { const t = fig.labels.map(l => l.t); return { onlyA: +t[0], both: +t[1], onlyB: +t[2], neither: +t[3] }; };

test('probability skills: deterministic, JSON-safe, self-marking, traps wrong and explained, figures render', () => {
  assert.equal(probabilitySkills.length, 8);
  for (const sk of probabilitySkills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = sk.gen(lv, 'g' + i), txt = JSON.stringify(it), tag = `${sk.id}@${lv}: ${it.prompt}`;
    assert.equal(txt, JSON.stringify(sk.gen(lv, 'g' + i)));
    assert.doesNotMatch(txt, /NaN|undefined|Infinity|\[object/, tag);
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', `${tag} → ${rawFor(it.answer)}`);
    if (it.answer.kind === 'fraction') { const v = it.answer.value; assert.ok(v.n >= 0 && v.n <= v.d, `${tag}: a probability lies in [0, 1]`); assert.equal(mark(it.answer, `${v.n * 3}/${v.d * 3}`).status, 'correct', 'unsimplified fractions are accepted'); }
    for (const t of it.traps || []) { assert.notEqual(mark(it.answer, `${t.v.n}/${t.v.d}`).status, 'correct', `${tag} trap ${t.v.n}/${t.v.d}`); assert.ok(t.why.length > 20, tag); }
    if (it.answer.kind === 'choice') { assert.equal(new Set(it.answer.options).size, it.answer.options.length, tag); it.optionWhy.forEach((w, k) => (k === it.answer.answer ? assert.equal(w, null) : assert.ok(w && w.length > 15, tag))); }
    if (it.fig) assert.ok(!/NaN|undefined/.test(figSVG(it.fig)) && it.fig.alt.length > 10, tag);
  }
  assert.deepEqual(probabilitySkills.filter(s => s.higherOnly).map(s => s.id), ['maths.probability.conditional']);
});

test('single events and frequency: recomputed from the printed counts and the drawn tables', () => {
  for (const it of items('single', 1)) {
    const parts = [...it.prompt.matchAll(/(\d+) (\w+)/g)].filter(m => /red|blue|green|yellow|white|black/.test(m[2])), T = parts.reduce((s, m) => s + +m[1], 0);
    const col = it.prompt.match(/that it is (not )?(\w+)\./), k = +parts.find(m => m[2] === col[2])[1];
    assert.ok(near(val(it.answer), col[1] ? 1 - k / T : k / T), it.prompt);
  }
  for (const it of items('single', 2)) { const ps = cells(it.fig).slice(-((it.fig.labels.length) / 2)).slice(1, -1).map(Number); assert.ok(near(val(it.answer), 1 - ps.reduce((a, b) => a + b, 0), 1e-9), JSON.stringify(cells(it.fig))); }
  const WORD = { 'rolling a 7 on an ordinary dice': 'impossible', 'getting heads on a fair coin': 'evens', 'rolling a number less than 7 on an ordinary dice': 'certain', 'rolling a 6 on an ordinary dice': 'unlikely', 'rolling a number greater than 1 on an ordinary dice': 'likely', 'picking a red counter from a bag of 9 red and 1 blue': 'likely' };
  for (const it of items('single', 3)) assert.equal(correctOption(it), WORD[it.prompt.match(/probability of (.+)\?/)[1]]);
  for (const it of items('frequency', 1)) { const v = nums(it.prompt); if (/seed/.test(it.prompt)) assert.equal(it.answer.value, (v[0] / v[1]) * v[2]); else assert.equal(it.answer.value, v[0] / 6); }
  for (const it of items('frequency', 2)) {
    const v = nums(it.prompt);
    if (/relative frequency of (\w+)/.test(it.prompt)) { const c = it.prompt.match(/relative frequency of (\w+)/)[1], f = { red: v[1], blue: v[2], green: v[3] }[c]; assert.ok(near(val(it.answer), f / v[0]), it.prompt); }
    else assert.ok(near(it.answer.value, (v[1] * v[2]) / v[0], 1e-9), it.prompt);
  }
  for (const it of items('frequency', 3)) { const [n, s] = nums(it.prompt.replace(/lands on 6/, 'lands on six')); const fair = Math.abs(s - n / 6) <= Math.max(3, n / 60); assert.equal(correctOption(it).startsWith('Probably fair'), fair, it.prompt); }
});

test('sample spaces and Venn diagrams: counted from the drawn grid and diagram', () => {
  for (const it of items('sample-space', 1)) { const v = nums(it.prompt); assert.equal(it.answer.value, v.reduce((a, b) => a * b, 1)); }
  for (const lv of [2, 3]) for (const it of items('sample-space', lv)) {
    const t = cells(it.fig), body = t.slice(7).filter((_, i) => i % 7 !== 0).map(Number), op = it.prompt.match(/the (sum|difference|product)/)[1];
    // the drawn grid really is the operation table
    for (let x = 1; x <= 6; x++) for (let y = 1; y <= 6; y++) assert.equal(body[(x - 1) * 6 + (y - 1)], op === 'sum' ? x + y : op === 'difference' ? Math.abs(x - y) : x * y);
    const target = Number(it.prompt.match(/is (?:greater than |less than )?(\d+)\.$/)[1]), cmp = /greater/.test(it.prompt) ? (v => v > target) : /less/.test(it.prompt) ? (v => v < target) : (v => v === target);
    assert.ok(near(val(it.answer), body.filter(cmp).length / 36), it.prompt);
  }
  for (const it of items('venn', 1)) { const v = venn(it.fig), T = v.onlyA + v.both + v.onlyB + v.neither, k = /both\./.test(it.prompt) ? v.both : /football only/.test(it.prompt) ? v.onlyA : /or tennis/.test(it.prompt) ? v.onlyA + v.both + v.onlyB : v.neither; assert.ok(near(val(it.answer), k / T), it.prompt); }
  for (const it of items('venn', 2)) { const [T, f, t, b] = nums(it.prompt); assert.ok(near(val(it.answer), (T - (f + t - b)) / T), it.prompt); }
  for (const it of items('venn', 3)) {
    const v = venn(it.fig), T = v.onlyA + v.both + v.onlyB + v.neither, inA = x => x === 'onlyA' || x === 'both', inB = x => x === 'onlyB' || x === 'both';
    const set = it.prompt.match(/P\((.+)\)\.$/)[1], pred = { 'A ∩ B': x => inA(x) && inB(x), 'A ∪ B': x => inA(x) || inB(x), 'A′': x => !inA(x), '(A ∪ B)′': x => !(inA(x) || inB(x)), 'A ∩ B′': x => inA(x) && !inB(x) }[set];
    assert.ok(near(val(it.answer), Object.keys(v).filter(pred).reduce((s, k) => s + v[k], 0) / T), it.prompt);
  }
});

test('combined and dependent events: recomputed by enumerating every pair of draws', () => {
  const enumerate = (R, B, repl, pred) => { const bag = [...Array(R).fill('R'), ...Array(B).fill('B')]; let good = 0, tot = 0; bag.forEach((a, i) => bag.forEach((b, j) => { if (!repl && i === j) return; tot++; if (pred(a, b)) good++; })); return good / tot; };
  const P = { 'both red': (a, b) => a === 'R' && b === 'R', 'both blue': (a, b) => a === 'B' && b === 'B', 'one of each colour': (a, b) => a !== b, 'at least one red': (a, b) => a === 'R' || b === 'R', 'two of the same colour': (a, b) => a === b };
  for (const id of ['combined', 'dependent']) for (let lv = 1; lv <= 3; lv++) for (const it of items(id, lv)) {
    if (/A bag has/.test(it.prompt)) {
      const [R, B] = nums(it.prompt), repl = /, replaced,/.test(it.prompt), ask = it.prompt.match(/probability of (.+)\.$/)[1];
      assert.equal(repl, id === 'combined');
      assert.ok(near(val(it.answer), enumerate(R, B, repl, P[ask])), it.prompt);
      // the tree's second-stage branches match the bag
      const lab = it.fig.labels.map(l => l.t).slice(0, 6).map(frac);
      assert.ok(near(lab[2], repl ? R / (R + B) : (R - 1) / (R + B - 1)), 'second-stage branch drawn correctly');
    } else if (/at least one 6/.test(it.prompt)) { const d = Number(it.prompt.match(/\{1\/(\d+)\}/)[1]), n = Number(it.prompt.match(/spun (\d+) times/)[1]); assert.ok(near(val(it.answer), 1 - ((d - 1) / d) ** n), it.prompt); }
    else { const fr = [...it.prompt.matchAll(/\{(\d+)\/(\d+)\}/g)].map(m => m[1] / m[2]); assert.ok(near(val(it.answer), /both days/.test(it.prompt) ? fr[0] * fr[1] : fr[0] + fr[1]), it.prompt); }
  }
});

test('two-way tables and conditional probability: recomputed from the drawn tables, trees and diagrams', () => {
  for (const it of items('two-way', 1)) { const t = cells(it.fig), boysTotal = +t[7], cat = +t[5]; assert.equal(it.answer.value, boysTotal - cat); }
  for (const it of items('two-way', 2)) { const t = it.fig.labels.map(l => l.t), T = +t[0], late = t.filter(x => /^Late/.test(x)).map(x => +x.split(' ')[1]).reduce((a, b) => a + b, 0); assert.ok(near(val(it.answer), late / T)); }
  for (const it of items('two-way', 3)) { const [T, a, p] = nums(it.prompt); assert.equal(it.answer.value, T * a / 100 * p / 100); }
  for (const it of items('conditional', 1)) {
    const t = cells(it.fig), a = +t[5], b = +t[6], c = +t[9], d = +t[10];
    assert.ok(near(val(it.answer), /takes the bus/.test(it.prompt) ? d / (b + d) : a / (a + b)), it.prompt);
  }
  for (const it of items('conditional', 2)) { const v = venn(it.fig), given = it.prompt.match(/\| (\w)\)/)[1]; assert.ok(near(val(it.answer), v.both / (given === 'A' ? v.onlyA + v.both : v.both + v.onlyB))); }
  for (const it of items('conditional', 3)) {
    const [R, B] = nums(it.prompt), T = R + B;
    // enumerate ordered pairs without replacement and condition directly
    let num = 0, den = 0; const bag = [...Array(R).fill('R'), ...Array(B).fill('B')];
    bag.forEach((a, i) => bag.forEach((b, j) => { if (i === j) return; const cond = /first is red/.test(it.prompt) ? a === 'R' : b === 'R'; if (cond) { den++; if (/first is red/.test(it.prompt) ? b === 'R' : a === 'R') num++; } }));
    assert.ok(near(val(it.answer), num / den), it.prompt);
  }
});

test('probability lesson records: order, refs P1–P9, tiers, prerequisites and models', () => {
  assert.equal(probabilityTopic.id, 'maths.probability');
  assert.deepEqual(orderedProbability.map(l => l.id), probabilityOrder);
  for (const sk of probabilitySkills) assert.ok(allSkills.some(a => a.id === sk.id), sk.id + ' registered');
  const refs = new Set(orderedProbability.flatMap(l => l.refs));
  for (let i = 1; i <= 9; i++) assert.ok(refs.has('P' + i), 'P' + i);
  const ids = new Set([...numberLessons.map(l => l.id), ...orderedProbability.map(l => l.id), 'maths.number.fractions-multiply-divide']);
  for (const l of orderedProbability) {
    for (const p of l.prerequisites) assert.ok(ids.has(p), `${l.id} prerequisite ${p}`);
    assert.equal(l.learn.length, 3); assert.equal(l.checkPlan.length, 10);
    const fSkills = l.skills.filter(sk => !sk.higherOnly);
    assert.ok(fSkills.length >= 1, `${l.id} has Foundation practice`);
    for (const [id, lv] of l.checkPlan) { const sk = l.skills.find(s => s.id === id); assert.ok(sk && lv <= levelsFor(sk, sk.higherOnly ? 'Higher' : 'Foundation').length, `${l.id}: ${id}@${lv}`); }
    assert.ok(MODELS14[l.model], l.model);
    assert.ok(!l.calculator && l.skills.every(sk => sk.levels.every((_, i) => !generate(sk.id, i + 1, 'c').calculator)), `${l.id}: non-calculator`);
  }
});

test('inactive probability model callbacks cannot write to a previous view', () => {
  for (const mount of Object.values(MODELS14)) {
    const stale = new Proxy({}, { get() { throw new Error('stale DOM read'); }, set() { throw new Error('stale DOM write'); } });
    assert.doesNotThrow(() => mount({ w: {}, tier: 'Higher', panel: stale, body: stale, isActive: () => false, setTitle() { throw new Error('stale title'); } }));
  }
});
