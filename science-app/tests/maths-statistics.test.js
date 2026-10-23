// Statistics: every item re-solved from the PRINTED data or the data DRAWN in its table, chart, graph
// or box plot, with arithmetic written here (no generator code).
import test from 'node:test';
import assert from 'node:assert/strict';
import { mark } from '../dist/maths/answers.js';
import { statisticsSkills } from '../dist/maths/skills-statistics.js';
import { figSVG } from '../dist/maths/geomfig.js';
import { graphSVG } from '../dist/maths/graph.js';
import { generate, allSkills } from '../dist/maths/skills.js';
import { orderedStatistics, statisticsOrder, statisticsTopic } from '../dist/maths/lessons-statistics.js';
import { orderedLessons as numberLessons } from '../dist/maths/lessons-number.js';
import { orderedAlgebra } from '../dist/maths/lessons-algebra.js';
import { orderedGeometry } from '../dist/maths/lessons-geometry.js';
import { levelsFor } from '../dist/maths/mastery.js';
import { MODELS15 } from '../dist/maths/models-statistics.js';

const N = 200;
const SK = Object.fromEntries(statisticsSkills.map(s => [s.id.replace('maths.statistics.', ''), s]));
const items = (id, lv, n = N) => Array.from({ length: n }, (_, i) => SK[id].gen(lv, 's-' + i));
const val = a => (a.kind === 'integer' ? a.value : a.value.n / a.value.d);
const nums = s => (s.replace(/−/g, '-').match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol;
const correctOption = it => it.answer.options[it.answer.answer];
const sum = a => a.reduce((s, v) => s + v, 0);
const median = a => { const s = [...a].sort((x, y) => x - y), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
const okAnswer = (it, want) => { const a = it.answer; if (a.kind === 'integer') return near(a.value, want, 1e-9); return Math.abs(val(a) - want) <= (a.tol ?? 1e-9) + 1e-9; };
function rawFor(a) {
  if (a.kind === 'choice') return String(a.answer);
  if (a.kind === 'integer') return String(a.value);
  if (a.kind === 'decimal') return a.dp != null ? (a.value.n / a.value.d).toFixed(a.dp) : String(+(a.value.n / a.value.d).toFixed(6));
  throw new Error(a.kind);
}
const tableRows = fig => { const L = fig.labels, ys = [...new Set(L.map(l => l.at[1]))].sort((a, b) => a - b); return ys.map(y => L.filter(l => l.at[1] === y).sort((a, b) => a.at[0] - b.at[0]).map(l => l.t)); };

test('statistics skills: deterministic, JSON-safe, self-marking, traps wrong and explained, charts render', () => {
  assert.equal(statisticsSkills.length, 6);
  for (const sk of statisticsSkills) for (let lv = 1; lv <= sk.levels.length; lv++) for (let i = 0; i < N; i++) {
    const it = sk.gen(lv, 'g' + i), txt = JSON.stringify(it), tag = `${sk.id}@${lv}: ${it.prompt}`;
    assert.equal(txt, JSON.stringify(sk.gen(lv, 'g' + i)));
    assert.doesNotMatch(txt, /NaN|undefined|Infinity|\[object/, tag);
    assert.equal(mark(it.answer, rawFor(it.answer)).status, 'correct', `${tag} → ${rawFor(it.answer)}`);
    for (const t of it.traps || []) { assert.notEqual(mark(it.answer, String(t.v.n / t.v.d)).status, 'correct', `${tag} trap ${t.v.n}/${t.v.d}`); assert.ok(t.why.length > 20, tag); }
    if (it.answer.kind === 'choice') { assert.equal(new Set(it.answer.options).size, it.answer.options.length, tag); it.optionWhy.forEach((w, k) => (k === it.answer.answer ? assert.equal(w, null) : assert.ok(w && w.length > 15, tag))); }
    if (it.fig) assert.ok(!/NaN|undefined/.test(figSVG(it.fig)) && it.fig.alt.length > 10, tag);
    if (it.graph) assert.ok(!/NaN|undefined/.test(graphSVG(it.graph)), tag);
  }
  assert.deepEqual(statisticsSkills.filter(s => s.higherOnly).map(s => s.id), ['maths.statistics.cumulative']);
});

test('averages: recomputed from the printed lists and the drawn tables', () => {
  for (const it of items('averages', 1)) {
    const xs = nums(it.prompt.split(':')[1].split('.')[0]), what = it.prompt.match(/the (mean|median|range|mode)/)[1];
    if (what === 'mean') assert.ok(okAnswer(it, sum(xs) / xs.length), it.prompt);
    if (what === 'median') assert.equal(val(it.answer), median(xs));
    if (what === 'range') assert.equal(it.answer.value, Math.max(...xs) - Math.min(...xs));
    if (what === 'mode') { const c = {}; xs.forEach(v => (c[v] = (c[v] || 0) + 1)); const mx = Math.max(...Object.values(c)); assert.deepEqual(Object.keys(c).filter(k => c[k] === mx).map(Number), [it.answer.value]); }
  }
  for (const it of items('averages', 2)) { const [n, m, , ...rest] = nums(it.prompt); assert.equal(it.answer.value, n * m - sum(rest), it.prompt); }
  for (let lv = 1; lv <= 2; lv++) for (const it of items('frequency-averages', lv)) {
    const [xs, fs] = tableRows(it.fig).map(r => r.slice(1).map(Number)), n = sum(fs), all = xs.flatMap((x, i) => Array(fs[i]).fill(x));
    if (/mean/.test(it.prompt)) assert.ok(okAnswer(it, sum(all) / n), it.prompt);
    else if (/median/.test(it.prompt)) assert.equal(val(it.answer), median(all));
    else { const mx = Math.max(...fs); assert.equal(it.answer.value, xs[fs.indexOf(mx)]); }
  }
  for (const it of items('frequency-averages', 3)) {
    const rows = tableRows(it.fig).slice(1), mids = rows.map(r => { const [a, b] = nums(r[0]); return (a + b) / 2; }), fs = rows.map(r => Number(r[1]));
    assert.ok(okAnswer(it, sum(mids.map((m, i) => m * fs[i])) / sum(fs)), it.prompt);
  }
});

test('charts and sampling: frequencies from the drawn bars and pie angles; estimates from the printed sample', () => {
  for (const it of items('charts', 1)) {
    const v = it.graph.polys.map(p => p.pts[1][1]);
    // Each category name sits under the centre of its own bar, and the bars carry no colour-coded legend.
    const cats = it.graph.polys.map(p => { const mid = (p.pts[0][0] + p.pts[2][0]) / 2, c = it.graph.xcats.find(([x]) => near(x, mid, 1e-9)); assert.ok(c, 'every bar is named'); assert.equal(p.label, undefined); return c[1]; });
    const svg = graphSVG(it.graph); for (const c of cats) assert.equal(svg.split(`>${c}</text>`).length - 1, 1, 'category ' + c + ' drawn once');
    if (/altogether/.test(it.prompt)) assert.equal(it.answer.value, sum(v));
    else if (/more chose/.test(it.prompt)) { const [, a, b] = it.prompt.match(/more chose (\w+) than (\w+)/); assert.equal(it.answer.value, v[cats.indexOf(a)] - v[cats.indexOf(b)]); }
    else assert.equal(correctOption(it), cats[v.indexOf(Math.max(...v))]);
  }
  for (const it of items('charts', 2)) { const total = nums(it.prompt)[0], parts = [...it.prompt.matchAll(/([A-Z]\w+) (\d+)/g)], k = it.prompt.match(/angle for (\w+)/)[1], f = Number(parts.find(p => p[1] === k)[2]); assert.equal(it.answer.value, (f * 360) / total, it.prompt); assert.equal(sum(parts.map(p => +p[2])), total); }
  for (const it of items('charts', 3)) {
    const [total, angle] = [nums(it.prompt)[0], Number(it.prompt.match(/angle of (\d+)°/)[1])];
    assert.equal(it.answer.value, (angle * total) / 360, it.prompt);
    const k = it.prompt.match(/The (\w+) sector/)[1], idx = it.fig.labels.findIndex(l => l.t === k), s = it.fig.sectors[idx];
    assert.ok(near(s.a2 - s.a1, angle, 1e-9), 'the drawn sector has the stated angle');
    assert.ok(near(sum(it.fig.sectors.map(x => x.a2 - x.a1)), 360, 1e-9), 'sectors make a full circle');
  }
  for (const it of items('sampling', 2)) { const [n, N, yes] = nums(it.prompt); assert.equal(it.answer.value, (yes * N) / n, it.prompt); }
  for (const it of items('sampling', 3)) { const [m1, s1, m2, s2] = nums(it.prompt); const o = correctOption(it); assert.ok(o.startsWith(m1 > m2 ? 'Class A' : 'Class B') && o.includes(`${s1 < s2 ? 'Class A' : 'Class B'} was more consistent`), it.prompt); }
});

test('scatter graphs: correlation from the drawn points, estimates from the drawn line', () => {
  const r = pts => { const n = pts.length, mx = sum(pts.map(p => p[0])) / n, my = sum(pts.map(p => p[1])) / n, sxy = sum(pts.map(p => (p[0] - mx) * (p[1] - my))), sxx = sum(pts.map(p => (p[0] - mx) ** 2)), syy = sum(pts.map(p => (p[1] - my) ** 2)); return sxy / Math.sqrt(sxx * syy); };
  for (const it of items('scatter', 1)) { const rr = r(it.graph.points), o = correctOption(it); if (o.startsWith('Positive')) assert.ok(rr > 0.7, rr); else if (o.startsWith('Negative')) assert.ok(rr < -0.7, rr); else assert.ok(Math.abs(rr) < 0.4, rr); }
  for (const it of items('scatter', 2)) {
    const x0 = Number(it.prompt.match(/x = (\d+)/)[1]), e = it.graph.fns[0].expr.replace(/\s/g, ''), [, m, s, c] = e.match(/^(-?[\d.]+)x([+-])([\d.]+)$/), y = +m * x0 + (s === '+' ? +c : -c);
    assert.ok(okAnswer(it, y), it.prompt);
  }
});

test('histograms, cumulative frequency and box plots: read from the drawn bars, curve and box', () => {
  for (const it of items('cumulative', 1)) {
    if (it.graph) { const [a, b] = nums(it.prompt.match(/class (.+)\?/)[1]), bar = it.graph.polys.find(p => p.pts[0][0] === a); assert.ok(near(val(it.answer), bar.pts[1][1] * (b - a)), it.prompt); }
    else { const v = nums(it.prompt), [lo, hi, f] = [v[0], v[1], v[2]]; assert.ok(near(val(it.answer), f / (hi - lo)), it.prompt); }
  }
  for (const it of items('cumulative', 2)) {
    const pts = it.graph.polys[0].pts, N = pts.at(-1)[1], inv = t => { for (let i = 1; i < pts.length; i++) if (pts[i][1] >= t) return pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * (t - pts[i - 1][1]) / (pts[i][1] - pts[i - 1][1]); };
    const want = /median/.test(it.prompt) ? inv(N / 2) : inv(3 * N / 4) - inv(N / 4);
    assert.ok(okAnswer(it, want), `${it.prompt} want ${want}`);
    for (let i = 1; i < pts.length; i++) assert.ok(pts[i][1] >= pts[i - 1][1], 'cumulative frequency never decreases');
  }
  for (const it of items('cumulative', 3)) {
    const [lo, q1, md, q3, hi] = it.fig.labels.map(l => Number(l.t));
    const want = /interquartile/.test(it.prompt) ? q3 - q1 : /range/.test(it.prompt) ? hi - lo : md;
    assert.equal(it.answer.value, want);
    const box = it.fig.polys[0].pts, scale = (box[1][0] - box[0][0]) / (q3 - q1);
    assert.ok(near(it.fig.segs[0].a[0] - box[0][0], (md - q1) * scale, 1e-6), 'the median line is drawn in the right place');
  }
});

test('statistics lesson records: order, refs S1–S6, tiers, calculator flags and models', () => {
  assert.equal(statisticsTopic.id, 'maths.statistics');
  assert.deepEqual(orderedStatistics.map(l => l.id), statisticsOrder);
  for (const sk of statisticsSkills) assert.ok(allSkills.some(a => a.id === sk.id), sk.id + ' registered');
  const refs = new Set(orderedStatistics.flatMap(l => l.refs));
  for (let i = 1; i <= 6; i++) assert.ok(refs.has('S' + i), 'S' + i);
  const ids = new Set([...numberLessons, ...orderedAlgebra, ...orderedGeometry, ...orderedStatistics].map(l => l.id));
  for (const l of orderedStatistics) {
    for (const p of l.prerequisites) assert.ok(ids.has(p), `${l.id} prerequisite ${p}`);
    assert.equal(l.learn.length, 3); assert.equal(l.checkPlan.length, 10);
    const tier = l.higherOnly ? 'Higher' : 'Foundation';
    for (const [id, lv] of l.checkPlan) { const sk = l.skills.find(s => s.id === id); assert.ok(sk && lv <= levelsFor(sk, tier).length, `${l.id}: ${id}@${lv}`); }
    const calcItems = l.skills.some(sk => sk.levels.some((_, i) => Array.from({ length: 30 }, (_, k) => generate(sk.id, i + 1, 'c' + k)).some(it => it.calculator)));
    assert.equal(!!l.calculator, calcItems, `${l.id}: calculator flag matches its items`);
    assert.ok(MODELS15[l.model], l.model);
  }
});

test('inactive statistics model callbacks cannot write to a previous view', () => {
  for (const mount of Object.values(MODELS15)) {
    const stale = new Proxy({}, { get() { throw new Error('stale DOM read'); }, set() { throw new Error('stale DOM write'); } });
    assert.doesNotThrow(() => mount({ w: {}, tier: 'Higher', panel: stale, body: stale, isActive: () => false, setTitle() { throw new Error('stale title'); } }));
  }
});
