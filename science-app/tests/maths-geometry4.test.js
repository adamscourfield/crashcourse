// Geometry batch 4 (gap closing): items re-solved from the PRINTED prompt or the DRAWN figure with
// arithmetic written here (no generator code). Angle names are checked against the drawn vertices.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mark } from '../dist/maths/answers.js';
import { geometrySkills4 } from '../dist/maths/skills-geometry4.js';
import { figSVG } from '../dist/maths/geomfig.js';
import { generate, allSkills } from '../dist/maths/skills.js';
import { orderedGeometry4, geometryOrder4 } from '../dist/maths/lessons-geometry4.js';
import { orderedGeometry, geometryTopic } from '../dist/maths/lessons-geometry.js';
import { orderedGeometry2 } from '../dist/maths/lessons-geometry2.js';
import { orderedGeometry3 } from '../dist/maths/lessons-geometry3.js';
import { levelsFor } from '../dist/maths/mastery.js';
import { MODELS16 } from '../dist/maths/models-geometry4.js';

const N = 200;
const SK = Object.fromEntries(geometrySkills4.map(s => [s.id.replace('maths.geometry.', ''), s]));
const items = (id, lv, n = N) => Array.from({ length: n }, (_, i) => SK[id].gen(lv, 'g4-' + i));
const val = a => (a.kind === 'integer' ? a.value : a.value.n / a.value.d);
const nums = s => (s.replace(/−/g, '-').match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol;
const r1 = v => Math.round(v * 10) / 10;
const piK = it => { assert.equal(it.answer.kind, 'exact'); assert.equal(it.answer.r, 'pi'); assert.equal(it.answer.a.n, 0); return it.answer.b.n / it.answer.b.d; };
const correctOption = it => it.answer.options[it.answer.answer];
const cm = (fig, re) => { const l = fig.labels.find(x => re.test(x.t)); return l ? Number(l.t.split(' ')[0]) : null; };
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'decimal') return (a.value.n / a.value.d).toFixed(a.dp ?? 6);
  if (a.kind === 'exact') return `${a.b.n}${a.b.d > 1 ? '/' + a.b.d : ''}π`;
  throw new Error(a.kind);
}

test('geometry batch 4 skills: deterministic, JSON-safe, self-marking, traps wrong and explained', () => {
  assert.equal(geometrySkills4.length, 3);
  for (const sk of geometrySkills4) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = sk.gen(lv, 'g' + i), txt = JSON.stringify(it), tag = `${sk.id}@${lv}: ${it.prompt}`;
    assert.equal(txt, JSON.stringify(sk.gen(lv, 'g' + i)));
    assert.doesNotMatch(txt, /NaN|undefined|Infinity|\[object/, tag);
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', `${tag} → ${rawFor(it.answer)}`);
    for (const t of it.traps || []) { assert.notEqual(mark(it.answer, String(t.v.n / t.v.d)).status, 'correct', `${tag} trap ${t.v.n}/${t.v.d}`); assert.ok(t.why.length > 20, tag); }
    for (const t of it.exTraps || []) { assert.notEqual(mark(it.answer, `${t.b.n}${t.b.d > 1 ? '/' + t.b.d : ''}π`).status, 'correct', `${tag} trap ${t.b.n}π`); assert.ok(t.why.length > 20, tag); }
    if (it.answer.kind === 'choice') { assert.equal(new Set(it.answer.options).size, it.answer.options.length, tag); it.optionWhy.forEach((w, k) => (k === it.answer.answer ? assert.equal(w, null) : assert.ok(w && w.length > 15, tag))); }
    if (it.fig) assert.ok(!/NaN|undefined/.test(figSVG(it.fig)) && it.fig.alt.length > 10, tag);
    if (it.answer.kind === 'decimal' && it.answer.dp === 1) assert.equal(it.calculator, true, tag);
  }
  const higher = geometrySkills4.flatMap(sk => sk.levels.map((v, i) => (v.higher ? `${sk.id.replace('maths.geometry.', '')}@${i + 1}` : null)).filter(Boolean));
  assert.deepEqual(higher, ['composite-volume@3']);
});

test('three-letter angle notation: the right name for the drawn angle; angles found from names and descriptions', () => {
  // Level 1: the vertex letter is the one drawn nearest the marked angle's vertex; the arms end at the
  // letters nearest the arc's end points. The correct option must name exactly that angle, and no
  // other option may name it (ABC and CBA are the same angle).
  const letterAt = (fig, p) => fig.labels.reduce((b, l) => (Math.hypot(l.at[0] - p[0], l.at[1] - 6 - p[1]) < Math.hypot(b.at[0] - p[0], b.at[1] - 6 - p[1]) ? l : b)).t;
  const key = n => n[1] + [n[0], n[2]].sort().join('');
  for (const it of items('angle-notation', 1)) {
    const m = it.fig.angles[0], want = [letterAt(it.fig, m.p), letterAt(it.fig, m.v), letterAt(it.fig, m.q)].join('');
    const names = it.answer.options.map(o => o.replace('angle ', ''));
    assert.equal(key(names[it.answer.answer]), key(want), it.fig.alt);
    assert.equal(names.filter(n => key(n) === key(want)).length, 1, 'only one option names the marked angle');
  }
  for (const it of items('angle-notation', 2)) {
    const [, g1, a1, g2, a2, ask] = it.prompt.match(/angle (\w{3}) = (\d+)° and angle (\w{3}) = (\d+)°\. Work out angle (\w{3})/);
    assert.ok(new Set([g1[1], g2[1], ask[1]]).size === 3, 'three different vertices');
    assert.equal(it.answer.value, 180 - Number(a1) - Number(a2), it.prompt);
  }
  for (const it of items('angle-notation', 3)) {
    const [, s1, s2] = it.prompt.match(/with (\w{2}) = (\w{2})/), apex = s1[0];
    assert.equal(s2[0], apex, 'equal sides share the apex letter');
    const [, gName, g] = it.prompt.match(/Angle (\w{3}) = (\d+)°/), ask = it.prompt.match(/Work out angle (\w{3})/)[1];
    const isApex = n => n[1] === apex, gv = Number(g);
    const want = isApex(gName) ? (isApex(ask) ? gv : (180 - gv) / 2) : isApex(ask) ? 180 - 2 * gv : gv;
    assert.equal(it.answer.value, want, it.prompt);
    assert.ok(Number.isInteger(want) && want > 0);
  }
});

test('surface areas: re-solved from the printed or drawn radius, height and slant height', () => {
  for (const it of items('sphere-cone-area', 1)) {
    const rr = nums(it.prompt.split('radius ')[1])[0], hemi = /hemisphere/.test(it.prompt), k = hemi ? 3 * rr * rr : 4 * rr * rr;
    assert.equal(cm(it.fig, /cm$/), rr, 'the drawn radius matches the prompt');
    if (it.answer.kind === 'exact') assert.equal(piK(it), k, it.prompt); else assert.ok(near(val(it.answer), r1(k * Math.PI)), it.prompt);
  }
  for (const it of items('sphere-cone-area', 2)) {
    const L = it.fig.labels.map(l => l.t), rr = Number(L[0].split(' ')[0]), other = Number(L[1].split(' ')[0]);
    const slant = /slant height/.test(it.fig.alt) ? other : Math.sqrt(rr * rr + other * other);
    assert.ok(Number.isInteger(slant), 'slant height is a whole number');
    assert.equal(piK(it), rr * slant + (/total/.test(it.prompt) ? rr * rr : 0), it.prompt + ' ' + it.fig.alt);
  }
  for (const it of items('sphere-cone-area', 3)) {
    const [rr, h, ch] = nums(it.fig.alt.replace(/^Solid: /, '')), hemi = /hemisphere/.test(it.prompt);
    const top = hemi ? 2 * rr * rr : rr * Math.sqrt(rr * rr + ch * ch);
    assert.equal(piK(it), top + 2 * rr * h + rr * rr, it.fig.alt);
  }
});

test('composite volumes, equal volumes and frustums: re-solved from the printed and drawn measurements', () => {
  for (const it of items('composite-volume', 1)) {
    const [rr, h, ch] = nums(it.fig.alt.replace(/^Solid: /, '')), hemi = /hemisphere/.test(it.prompt);
    const k = rr * rr * h + (hemi ? (2 / 3) * rr ** 3 : (rr * rr * ch) / 3);
    if (it.answer.kind === 'exact') assert.ok(near(piK(it), k, 1e-9), it.fig.alt); else assert.ok(near(val(it.answer), r1(k * Math.PI)), it.fig.alt);
  }
  for (const it of items('composite-volume', 2)) {
    const [R, rr] = nums(it.prompt);
    assert.ok(near(it.answer.value * Math.PI * rr * rr, (4 / 3) * Math.PI * R ** 3, 1e-6), it.prompt);
  }
  for (const it of items('composite-volume', 3)) {
    const [hh, H, R] = nums(it.prompt), rs = (R * hh) / H;
    assert.equal(cm(it.fig, /cm$/), R);
    const top = Number(it.fig.labels[1].t.split(' ')[0]), bottom = Number(it.fig.labels[2].t.split(' ')[0]);
    assert.equal(top, hh); assert.equal(top + bottom, H, 'the drawn heights add up to the whole cone');
    assert.ok(near(val(it.answer), r1((Math.PI / 3) * (R * R * H - rs * rs * hh))), it.prompt);
  }
});

test('geometry batch 4 records: the new lesson, the notation skill in the angles lesson, every G statement still referenced', () => {
  assert.deepEqual(orderedGeometry4.map(l => l.id), geometryOrder4);
  for (const sk of geometrySkills4) assert.ok(allSkills.some(a => a.id === sk.id), sk.id + ' registered');
  const geo = [...orderedGeometry, ...orderedGeometry2, ...orderedGeometry3, ...orderedGeometry4];
  assert.equal(geo.length, 16); assert.ok(/Sixteen lessons/.test(geometryTopic.coverage));
  const angles = orderedGeometry.find(l => l.id === 'maths.geometry.angles');
  assert.ok(angles.skills.some(s => s.id === 'maths.geometry.angle-notation') && angles.checkPlan.some(([id]) => id === 'maths.geometry.angle-notation'));
  for (const l of orderedGeometry4) {
    assert.ok(l.refs.includes('G17'));
    for (const [id, lv] of l.checkPlan) { const sk = l.skills.find(s => s.id === id); assert.ok(sk && lv <= levelsFor(sk, 'Higher').length, `${l.id}: ${id}@${lv}`); }
    assert.equal(levelsFor(SK['composite-volume'], 'Foundation').length, 2, 'frustums are Higher only');
    const calcItems = l.skills.some(sk => sk.levels.some((_, i) => Array.from({ length: 20 }, (_, k) => generate(sk.id, i + 1, 'c' + k)).some(it => it.calculator)));
    assert.equal(!!l.calculator, calcItems);
    assert.ok(MODELS16[l.model], l.model);
    for (const c of l.learn) assert.ok(!/NaN|undefined/.test(figSVG(c.visual.fig)), c.title);
  }
});

test('inactive Geometry batch 4 model callbacks cannot write to a previous view', () => {
  for (const mount of Object.values(MODELS16)) {
    const stale = new Proxy({}, { get() { throw new Error('stale DOM read'); }, set() { throw new Error('stale DOM write'); } });
    assert.doesNotThrow(() => mount({ w: {}, tier: 'Higher', panel: stale, body: stale, isActive: () => false, setTitle() { throw new Error('stale title'); } }));
  }
});
