// History (Edexcel 1HI0): content integrity, option balance, stage gates, persistence and the mapping
// of every built lesson to a specification row in curriculum/history-requirements.csv.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { lessons, topics, units } from '../dist/history/content.js';
import { restore, historyGates, choiceIndices, viewHTML, createHistoryStudio } from '../dist/history/studio.js';

const all = lessons.flatMap(l => [...l.practice, ...l.check]);
const tasksAsQ = l => l.tasks.map(([prompt, options, answer, why]) => ({ prompt, options, answer, why }));
const req = fs.readFileSync(new URL('../../curriculum/history-requirements.csv', import.meta.url), 'utf8').trim().split('\n').slice(1).map(line => { const cells = []; let cur = '', q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === ',' && !q) { cells.push(cur); cur = ''; } else cur += ch; } cells.push(cur); return cells; });

test('history content: unique ids, valid answers, explanations, concepts, views', () => {
  const ids = new Set();
  for (const q of all) { assert.ok(!ids.has(q.id), q.id); ids.add(q.id); }
  assert.equal(new Set(lessons.map(l => l.id)).size, lessons.length);
  for (const l of lessons) {
    assert.ok(topics.some(t => t.id === l.topicId), l.id);
    assert.ok(units.some(u => u.id === topics.find(t => t.id === l.topicId).unit));
    assert.ok(l.cards.length >= 3 && l.cards.every(c => c[0] && c[1].length > 120), l.id + ' cards');
    assert.ok(l.views.length >= 3 && new Set(l.views.map(v => v.kind)).size === l.views.length, l.id + ' distinct view kinds');
    for (const v of l.views) { const h = viewHTML(v); assert.ok(h.length > 100 && !/undefined|NaN/.test(h), l.id + ' ' + v.kind); }
    assert.ok(l.tasks.length >= 4 && l.tasks.some(t => /^Exam skill/.test(t[0])), l.id + ' has an exam-skill challenge');
    assert.ok(l.practice.length >= 5 && l.check.length >= 8, l.id);
    assert.ok(l.exam && /\(\d+ marks\)$/.test(l.exam), l.id + ' exam question with marks');
    for (const q of [...l.practice, ...l.check, ...tasksAsQ(l)]) {
      assert.ok(q.options.length >= 3, q.prompt);
      assert.equal(new Set(q.options).size, q.options.length, q.prompt);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, q.prompt);
      assert.ok(q.why && q.why.length > 15, q.prompt);
    }
    for (const q of [...l.practice, ...l.check]) assert.match(q.concept, /^hist\.[a-z-]+$/);
  }
});

test('history options are balanced: the right answer is not given away by its length', () => {
  let n = 0, longest = 0, much = 0;
  for (const l of lessons) for (const q of [...l.practice, ...l.check, ...tasksAsQ(l)]) {
    n++; const L = q.options.map(o => o.length), c = L[q.answer], other = Math.max(...L.filter((_, i) => i !== q.answer));
    if (c > other) longest++; if (c > 1.15 * other) much++;
  }
  assert.ok(longest / n <= 0.5, `correct option longest in ${longest}/${n}`);
  assert.ok(much / n <= 0.15, `correct option clearly longest in ${much}/${n}`);
  // Display order is shuffled: the correct option is not always first on screen.
  const firsts = all.filter(q => choiceIndices(q.id, q.options.length)[0] === q.answer).length;
  assert.ok(firsts / all.length < 0.6, `answer shown first in ${firsts}/${all.length}`);
});

test('history stage gates and restore', () => {
  const l = lessons[0], p = { seen: [], observed: [], passed: [], practice: {}, checks: {} };
  assert.deepEqual(historyGates(l, p), [false, false, false, false]);
  p.seen = l.cards.map((_, i) => i); p.passed = l.tasks.map((_, i) => i);
  assert.equal(historyGates(l, p)[1], false, 'views must be opened too');
  p.observed = l.views.map((_, i) => i);
  for (const q of l.practice) p.practice[q.id] = { correct: true };
  l.check.forEach((q, i) => (p.checks[q.id] = i < Math.ceil(0.8 * l.check.length) ? q.answer : (q.answer + 1) % q.options.length));
  assert.deepEqual(historyGates(l, p), [true, true, true, true]);
  const wrong = Object.fromEntries(l.check.map((q, i) => [q.id, i < 2 ? (q.answer + 1) % q.options.length : q.answer]));
  assert.equal(historyGates(l, { ...p, checks: wrong })[3], l.check.length - 2 >= 0.8 * l.check.length);
  assert.equal(restore('not json').lessonId, lessons[0].id);
  assert.equal(restore(JSON.stringify({ version: 1, lessonId: 'nope', review: { ids: ['missing'] } })).review, null);
  const r = restore(JSON.stringify({ version: 1, lessonId: lessons[1].id, lessons: { a: 1 } }));
  assert.equal(r.lessonId, lessons[1].id); assert.deepEqual(r.lessons, { a: 1 });
});

test('every built lesson maps to specification rows, and every built row has a lesson', () => {
  const rows = req.map(([unit, ref, , , status, ls]) => ({ unit, ref, status, ls: ls ? ls.split(';').map(s => s.trim()) : [] }));
  assert.ok(rows.length >= 38, 'B4, P4 and Option 11 mapped');
  for (const l of lessons) for (const ref of l.refs) { const r = rows.find(x => x.ref === ref); assert.ok(r, ref); assert.equal(r.status, 'built', ref); assert.ok(r.ls.includes(l.id), `${ref} lists ${l.id}`); }
  for (const r of rows.filter(x => x.status === 'built')) for (const id of r.ls) assert.ok(lessons.some(l => l.id === id), id);
});

test('stale history studio callbacks do not throw when the root is detached', () => {
  const root = { querySelector: () => null, querySelectorAll: () => [], set innerHTML(_) {}, hidden: true };
  const g = globalThis; const store = {}; g.localStorage = { getItem: k => store[k] ?? null, setItem: (k, v) => (store[k] = v) };
  const studio = createHistoryStudio({ root, modal() {}, closeModal() {}, onProgress() {} });
  assert.equal(studio.getProgress().total, lessons.length);
  assert.ok(studio.title().length > 3);
});
