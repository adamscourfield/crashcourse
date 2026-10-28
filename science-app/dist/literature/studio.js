import {lessons, topics, units, source, specIssue} from './content.js?v=20261028-lit03';
import {questionFlow, cancelQuestionAdvance} from '../question-flow.js?v=20261023-flow01';
import {recordConcept, dueConcepts} from '../progress.js?v=20261028-subjects01';
import {summarise} from '../progress-summary.js?v=20261023-mastery01';

export const KEY = 'crash-course-literature-v1';
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
export const draftVersionsHTML = versions => versions.length ? `<details><summary>Saved versions · ${versions.length}</summary>${versions.map((v,i)=>`<article class="lit-version"><h4>Version ${i+1}</h4><p>${esc(v.text)}</p></article>`).join('')}</details>` : '';
const allQuestions = () => lessons.flatMap(l => [...l.practice, ...l.check]);

export function restore(raw) {
  let v = {};
  try { v = JSON.parse(raw) || {}; if (v.version !== 1) v = {}; } catch { v = {}; }
  const obj = x => x && typeof x === 'object' && !Array.isArray(x);
  const review = v.review && Array.isArray(v.review.ids) && v.review.ids.length && v.review.ids.every(id => allQuestions().some(q => q.id === id)) ? v.review : null;
  return {version: 1, lessonId: lessons.some(l => l.id === v.lessonId) ? v.lessonId : lessons[0].id, lessons: obj(v.lessons) ? v.lessons : {}, concepts: obj(v.concepts) ? v.concepts : {}, review};
}
/** Stage gates: all cards read; every view opened and every challenge passed; every practice item correct; check answered with ≥ 80%. */
export const literatureGates = (l, p) => [
  l.cards.every((_, i) => p.seen.includes(i)),
  l.tasks.every((_, i) => p.passed.includes(i)) && l.views.every((_, i) => p.observed.includes(i)) && (p.wordSeen || []).length >= l.views[0].words.length,
  l.practice.every(q => p.practice[q.id]?.correct),
  l.check.every(q => p.checks[q.id] !== undefined) && l.check.filter(q => p.checks[q.id] === q.answer).length / l.check.length >= 0.8,
];
/** Deterministic option order per question and attempt, so the correct option is not always first. */
export function choiceIndices(id, count, run = 1) {
  let seed = 2166136261; for (const c of id + ':' + run) seed = Math.imul(seed ^ c.charCodeAt(0), 16777619);
  const a = Array.from({length: count}, (_, i) => i);
  for (let i = count - 1; i > 0; i--) { seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5; const j = (seed >>> 0) % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
/** HTML for one explorer view. */
export function viewHTML(v) {
  if (v.kind === 'language') return `<h3 class="h-view-title">${esc(v.title)}</h3><blockquote class="lit-quotation">${esc(v.content)}</blockquote><p>Choose a detail to explore its possibilities.</p><div class="lit-details">${v.words.map(([word], i) => `<button class="scene-button" data-lit-word="${i}">${esc(word)}</button>`).join('')}</div><div class="lit-reading" id="litReading" role="status"></div>`;
  if (v.kind === 'timeline') return `<h3 class="h-view-title">${esc(v.title)}</h3><ol class="h-timeline">${v.events.map(([d, t]) => `<li><span class="h-date">${esc(d)}</span><span>${esc(t)}</span></li>`).join('')}</ol>`;
  if (v.kind === 'people') return `<h3 class="h-view-title">${esc(v.title)}</h3><div class="h-cards">${v.rows.map(([n, t]) => `<div class="h-card"><b>${esc(n)}</b><span>${esc(t)}</span></div>`).join('')}</div>`;
  if (v.kind === 'factors') return `<h3 class="h-view-title">${esc(v.title)}</h3><div class="h-factors">${v.rows.map(([n, t]) => `<div class="h-factor"><b>${esc(n)}</b><span>${esc(t)}</span></div>`).join('')}</div>`;
  if (v.kind === 'source') return `<h3 class="h-view-title">${esc(v.title)}</h3><div class="h-source"><div class="h-source-k">WHAT IT IS</div><p>${esc(v.content)}</p><div class="h-source-k">HOW USEFUL?</div><p>${esc(v.evaluation)}</p></div>`;
  return '';
}
const viewLabel = v => ({timeline: 'Scene sequence', people: 'Who knows what?', language: 'Read closely'}[v.kind]);

export function createLiteratureStudio({root, modal, closeModal, onProgress}) {
  let raw; try { raw = localStorage.getItem(KEY); } catch { raw = null; }
  const s = restore(raw);
  let mode = s.review ? 'review' : 'lesson';
  let run = s.review ? {questions: s.review.ids.map(id => allQuestions().find(q => q.id === id)), answers: s.review.answers || {}, index: Math.min(s.review.index || 0, s.review.ids.length - 1)} : null;
  const $ = sel => root.querySelector(sel), $$ = sel => [...root.querySelectorAll(sel)];
  const lesson = () => lessons.find(l => l.id === s.lessonId);
  const state = l => (s.lessons[l.id] ??= {stage: 0, card: 0, seen: [], observed: [], viewIndex: 0, task: 0, passed: [], practice: {}, pi: 0, checks: {}, ci: 0});
  const contextLesson = () => (mode === 'review' && run ? lessons.find(l => [...l.check, ...l.practice].some(q => q.id === run.questions[run.index]?.id)) || lesson() : lesson());
  const activeTopic = () => topics.find(t => t.id === contextLesson().topicId);
  const unitOf = t => units.find(u => u.id === t.unit);
  const topicLessons = l => lessons.filter(x=>x.topicId===l.topicId);
  const authorOf = l => l.author || 'William Shakespeare';
  const bookURL = l => l.topicId === 'english-literature.christmas-carol' ? 'https://www.gutenberg.org/files/46/46-h/46-h.htm' : 'https://www.folger.edu/explore/shakespeares-works/macbeth/read/';

  function getProgress() {
    const rows = lessons.map(l => {
      const p = state(l), gaps = [], due = [];
      for (const id of new Set([...l.practice, ...l.check].map(q => q.concept))) {
        const c = s.concepts[id]; if (!c) continue;
        const item = {id, label: id.split('.').pop().replaceAll('-', ' ').replace(/^./, x => x.toUpperCase())};
        if (c.needsReview) gaps.push(item);
        if (c.needsReview || c.due <= Date.now()) due.push(item);
      }
      const a = {total: 0, correct: 0}, b = {total: 0, correct: 0};
      for (const q of l.practice) if (p.practice[q.id]) { a.total++; if (p.practice[q.id].first === q.answer) a.correct++; }
      for (const q of l.check) if (p.checks[q.id] !== undefined) { b.total++; if (p.checks[q.id] === q.answer) b.correct++; }
      return {id: l.id, title: l.title, topicId: l.topicId, stages: literatureGates(l, p), started: !!(p.seen.length || p.observed.length || Object.keys(p.practice).length || Object.keys(p.checks).length), practice: a, check: b, gaps, due};
    });
    return {...summarise(rows, topics), subject: 'English Literature', scope: `AQA GCSE English Literature · 8702 · ${lessons.length} built lessons`, scopeNote: `${lessons.length} built Literature lessons only. Completion and scores describe knowledge activities; analytical writing is saved but not marked. The rest of Literature is planned.`, practiceLabel: 'Practice first tries'};
  }
  function save() {
    s.review = mode === 'review' && run ? {ids: run.questions.map(q => q.id), answers: run.answers, index: run.index} : null;
    let ok = true; try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { ok = false; }
    const x = getProgress();
    onProgress?.({done: x.completed, total: x.total, due: x.due.length, storage: ok, topic: activeTopic().title});
    return ok;
  }
  function leaveWriting() {
    const p=state(lesson());if(!p.writingActive)return;
    if(p.independent && !p.independent.firstResponse)p.independent.departures=(p.independent.departures||0)+1;
    p.writingActive=false;save();
  }
  function stop() { leaveWriting(); }
  function feedback(t, error = false) { const f = $('#hFeedback'); if (f) { f.textContent = t; f.classList.toggle('error', error); } }

  function explorer(l, p, record) {
    const panel = $('#hPanel'); if (!panel) return;
    p.viewIndex = Math.min(Math.max(0, p.viewIndex || 0), l.views.length - 1);
    const v = l.views[p.viewIndex];
    if (record && !p.observed.includes(p.viewIndex)) p.observed.push(p.viewIndex);
    panel.innerHTML = `<div class="eyebrow">EVIDENCE EXPLORER</div><div class="geo-controls h-tabs" role="tablist">${l.views.map((x, i) => `<button class="scene-button" role="tab" data-hview="${i}" aria-pressed="${i === p.viewIndex}">${esc(viewLabel(x))}${record && p.observed.includes(i) ? ' ✓' : ''}</button>`).join('')}</div><div class="h-view" id="hView">${viewHTML(v)}</div><p class="geo-caption">${v.kind === 'source' ? 'The document is described by type, author, date and content; no wording is quoted or invented.' : esc(authorOf(l))+'’s words; original teaching commentary. These readings are possibilities to support or challenge with evidence.'}</p>`;
    if(v.kind === 'language') {
      const show = i => { $('#litReading').textContent = v.words[i][1]; $$('[data-lit-word]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.litWord) === i))); };
      $$('[data-lit-word]').forEach(b => b.onclick = () => { p.word = Number(b.dataset.litWord); (p.wordSeen ??= []); if(!p.wordSeen.includes(p.word))p.wordSeen.push(p.word); show(p.word); save(); });
      if(Number.isInteger(p.word) && v.words[p.word]) show(p.word);
    }
    $$('[data-hview]').forEach(b => (b.onclick = () => { p.viewIndex = Number(b.dataset.hview); explorer(l, p, record); if (record) { const o = $('#hObserved'); if (o) o.textContent = `Views explored: ${p.observed.length} / ${l.views.length}`; save(); } }));
  }

  function pWritingOpen(l) { return !!state(l).draft; }
  function render() {
    cancelQuestionAdvance();
    if(mode==='lesson' && state(lesson()).writingActive) return renderIndependentWriting();
    const t = activeTopic(), u = unitOf(t);
    root.innerHTML = `<section class="intro"><div><div class="eyebrow">ENGLISH LITERATURE · ${esc(u.paper.toUpperCase())} · ${esc(t.title.toUpperCase())} · ${esc(contextLesson().scope)}</div><h1>${mode === 'lesson' ? esc(lesson().title) : 'Recall review'}</h1></div><div class="lesson-meta">◷ ${contextLesson().minutes} min</div></section><div class="lesson-toolbar"><button class="secondary lit-lesson-button" id="hLessons">☷ Lessons · ${topicLessons(contextLesson()).indexOf(contextLesson()) + 1} / ${topicLessons(contextLesson()).length} in ${esc(activeTopic().title)}</button><button class="text-button" id="hNext">Next lesson →</button></div><nav class="steps" aria-label="Lesson stages">${['Discover', 'Investigate', 'Practise', 'Check'].map((x, i) => `<button data-hstage="${i}"><b>0${i + 1}</b>${x}</button>`).join('')}</nav><section class="workspace"><div class="scene-panel geo-panel h-panel" id="hPanel"></div><article class="activity"><div class="eyebrow" id="hKicker"></div><h2 id="hTitle"></h2><div id="hBody"></div><div id="hFeedback" role="status" aria-live="polite"></div><div class="activity-footer"><span id="hHint"></span><button class="primary" id="hContinue">Continue →</button></div></article></section><section class="lit-writing"><div id="litIndependent"></div><details id="litGuidedWriting" ${pWritingOpen(lesson()) ? 'open' : ''}><summary>Write & reflect · saved draft</summary><p>${esc(lesson().writing)}</p><label for="litDraft">Your interpretation</label><textarea id="litDraft" rows="6" placeholder="Make a claim, select evidence, explain how it supports your reading."></textarea><p id="litDraftStatus" role="status"></p><button class="secondary" id="litSaveDraft">Save a version</button><div id="litVersions"></div><div class="lit-rubric"><h3>Review your argument</h3><ul>${lesson().rubric.map(r => `<li>${esc(r)}</li>`).join('')}</ul><p>Use these prompts to revise or discuss your draft with a teacher. Writing is saved, not automatically graded; knowledge scores do not establish essay mastery.</p></div></details></section><span class="spec">${esc(contextLesson().refs.map(r => 'AQA 8702 ' + r).join(' · '))}</span><footer><button class="text-button" id="hSources">Sources & notes</button></footer>`;
    if(lesson().independentWriting){$('#litGuidedWriting').hidden=true;$('#litIndependent').innerHTML=`<h3>Independent writing</h3><p>A fresh extract-to-whole response. Guidance is hidden during the attempt. Writing is saved, not automatically marked.</p><button class="primary" id="litStartIndependent">${state(lesson()).independent?.firstResponse ? 'Review or revise your response' : 'Start independent writing →'}</button>`;$('#litStartIndependent').onclick=()=>{state(lesson()).writingActive=true;state(lesson()).independent ??= {draft:'',startedAt:Date.now(),departures:0};render();};}
    const wp=state(lesson()), area=$('#litDraft'); area.value=wp.draft || '';$('#litVersions').innerHTML=draftVersionsHTML(wp.drafts || []);
    area.oninput=()=>{wp.draft=area.value;const ok=save();$('#litDraftStatus').textContent=ok?'Draft saved on this device.':'Draft kept for this session; device storage is unavailable.';};
    $('#litSaveDraft').onclick=()=>{if(!area.value.trim()){$('#litDraftStatus').textContent='Write an interpretation before saving a version.';return;} (wp.drafts ??= []).push({text:area.value,at:Date.now()});$('#litVersions').innerHTML=draftVersionsHTML(wp.drafts);const ok=save();$('#litDraftStatus').textContent=ok?`Version ${wp.drafts.length} saved. You can keep revising.`:'Version kept for this session; device storage is unavailable.';};
    $('#hLessons').onclick = () => openLessons();
    $('#hSources').onclick = openSources;
    $('#hNext').onclick = () => { const i = lessons.indexOf(lesson()); i < lessons.length - 1 ? openLesson(lessons[i + 1].id) : openMap(); };
    $$('[data-hstage]').forEach(b => (b.onclick = () => { mode = 'lesson'; state(lesson()).stage = Number(b.dataset.hstage); render(); }));
    root.querySelector('.lit-writing').hidden=mode==='review';
    if (mode === 'review') return renderReview();
    const l = lesson(), p = state(l), done = literatureGates(l, p);
    p.stage = Math.max(0, Math.min(3, p.stage));
    $$('[data-hstage]').forEach((b, i) => { b.classList.toggle('selected', p.stage === i); b.setAttribute('aria-current', p.stage === i ? 'step' : 'false'); if (done[i]) b.querySelector('b').textContent = '✓'; });
    $('#hKicker').textContent = ['DISCOVER', 'INVESTIGATE', 'PRACTISE', 'CHECK'][p.stage];
    root.querySelector('.workspace').classList.toggle('question-mode', p.stage >= 2);
    if (p.stage === 0) {
      const c = l.cards[p.card] || l.cards[0];
      $('#hTitle').textContent = c[0];
      $('#hBody').innerHTML = `<p>${esc(c[1])}</p><div class="reading-dots">${l.cards.map((_, i) => `<button data-hcard="${i}" aria-label="Explanation ${i + 1}" class="${i === p.card ? 'current' : ''}">${i + 1}</button>`).join('')}</div>`;
      $$('[data-hcard]').forEach(b => (b.onclick = () => { p.card = Number(b.dataset.hcard); render(); }));
      $('#hContinue').onclick = () => { if (!p.seen.includes(p.card)) p.seen.push(p.card); const unread = l.cards.findIndex((_, i) => !p.seen.includes(i)); if (unread < 0) p.stage = 1; else p.card = unread; render(); };
      explorer(l, p, false);
    } else if (p.stage === 1) {
      const i = Math.min(p.task, l.tasks.length - 1), tk = l.tasks[i], passed = p.passed.includes(i);
      $('#hTitle').textContent = /^Exam skill/.test(tk[0]) ? 'Exam skill' : 'Weigh the evidence';
      $('#hBody').innerHTML = `<p id="hObserved">Views explored: ${p.observed.length} / ${l.views.length}</p><p>${esc(tk[0].replace(/^Exam skill · /, ''))}</p><div class="choices">${choiceIndices(tk[0], tk[1].length).map(j => `<button class="choice ${passed && j === tk[2] ? 'selected' : ''}" data-htask="${j}" ${passed ? 'disabled' : ''}>${esc(tk[1][j])}</button>`).join('')}</div>`;
      $$('[data-htask]').forEach(b => (b.onclick = () => {
        if (p.passed.includes(i)) return;
        if (Number(b.dataset.htask) !== tk[2]) return feedback(tk[4] || 'Not yet. Check what the scene actually establishes. A possible interpretation still needs evidence; avoid turning an influence or a character’s opinion into a fact.', true);
        p.passed.push(i); $$('[data-htask]').forEach(x => (x.disabled = true)); save(); feedback('Correct. ' + tk[3]);
      }));
      if (passed) feedback('Correct. ' + tk[3]);
      $('#hHint').textContent = `Challenge ${i + 1} / ${l.tasks.length}`;
      $('#hContinue').onclick = () => {
        if (!p.passed.includes(i)) return feedback('Answer this challenge first.', true);
        if (i < l.tasks.length - 1) p.task++;
        else if ((p.wordSeen || []).length < l.views[0].words.length) {p.viewIndex=0;render();return feedback('Explore the three language details before moving on.',true);}
        else if (!l.views.every((_, k) => p.observed.includes(k))) return feedback('Open every view in the evidence explorer before moving on.', true);
        else p.stage = 2;
        render();
      };
      explorer(l, p, true);
    } else if (p.stage === 2) {
      p.pi = Math.min(p.pi, l.practice.length - 1);
      const q = l.practice[p.pi], a = p.practice[q.id];
      question(q, a?.choice, v => { if (a?.correct) return; const old = p.practice[q.id]; p.practice[q.id] = {choice: v, first: old?.first ?? v, correct: v === q.answer}; recordConcept(s, q.concept, v === q.answer); save(); render(); }, !!a?.correct, p);
      if (a) feedback((a.correct ? 'Correct. ' : 'Try again. ') + q.why, !a.correct);
      $('#hHint').textContent = `Practice ${p.pi + 1} / ${l.practice.length}`;
      $('#hContinue').onclick = () => { if (!p.practice[q.id]?.correct) return; if (p.pi < l.practice.length - 1) p.pi++; else p.stage = 3; render(); };
      questionFlow($('#hContinue'), {answered: !!a?.correct, next: () => $('#hContinue').click(), guard: () => !root.hidden && mode === 'lesson' && state(l).stage === 2});
    } else {
      p.ci = Math.min(p.ci, l.check.length - 1);
      const q = l.check[p.ci], a = p.checks[q.id];
      question(q, a, v => { if (a !== undefined) return; p.checks[q.id] = v; recordConcept(s, q.concept, v === q.answer); save(); render(); }, a !== undefined, p);
      if (a !== undefined) feedback('Answer recorded.');
      $('#hHint').textContent = `Independent check ${p.ci + 1} / ${l.check.length}`;
      $('#hContinue').textContent = p.ci === l.check.length - 1 ? 'See results →' : 'Next question →';
      $('#hContinue').onclick = () => { if (p.checks[q.id] === undefined) return; if (p.ci < l.check.length - 1) { p.ci++; render(); } else results(l, p); };
      questionFlow($('#hContinue'), {answered: a !== undefined, delay: 650, next: () => $('#hContinue').click(), guard: () => !root.hidden && mode === 'lesson' && state(l).stage === 3});
    }
    save();
  }
  function renderReview() {
    root.querySelector('.steps').hidden = true;
    const q = run.questions[run.index], a = run.answers[q.id];
    question(q, a, v => { if (run.answers[q.id] !== undefined) return; run.answers[q.id] = v; recordConcept(s, q.concept, v === q.answer, Date.now(), true); save(); render(); }, a !== undefined, {history: []});
    if (a !== undefined) feedback((a === q.answer ? 'Correct. ' : 'Revisit this. ') + q.why, a !== q.answer);
    $('#hHint').textContent = `Recall ${run.index + 1} / ${run.questions.length}`;
    $('#hContinue').onclick = () => { if (run.answers[q.id] === undefined) return; if (++run.index >= run.questions.length) { mode = 'lesson'; run = null; render(); modal('<h2>Review recorded</h2><p>Correct recall schedules the next visit. Missed concepts stay on your review list.</p>'); } else render(); };
    questionFlow($('#hContinue'), {answered: a !== undefined, automatic: a === q.answer, next: () => $('#hContinue').click(), guard: () => !root.hidden && mode === 'review'});
    save();
  }
  function question(q, value, answer, locked, p) {
    $('#hPanel').innerHTML = '';
    root.querySelector('.workspace').classList.add('question-mode');
    $('#hTitle').textContent = q.prompt;
    $('#hBody').innerHTML = `<div class="choices">${choiceIndices(q.id, q.options.length, 1 + (p.history?.length || 0)).map(i => `<button class="choice ${value === i ? 'selected' : ''}" data-hanswer="${i}" ${locked ? 'disabled' : ''}>${esc(q.options[i])}</button>`).join('')}</div>`;
    $$('[data-hanswer]').forEach(b => (b.onclick = () => answer(Number(b.dataset.hanswer))));
  }
  function results(l, p) {
    const score = Math.round((l.check.filter(q => p.checks[q.id] === q.answer).length / l.check.length) * 100);
    modal(`<h2>${score}% · ${literatureGates(l, p).every(Boolean) ? 'Knowledge activities complete' : 'Keep building'}</h2><p>Knowledge activity completion needs all four stages and at least 80% on Check. Your written response is saved separately and needs human review.</p>${l.check.map(q => `<details class="result-row"><summary>${p.checks[q.id] === q.answer ? '✓' : '↻'} ${esc(q.prompt)}</summary><p>${esc(q.why)} Correct answer: ${esc(q.options[q.answer])}</p></details>`).join('')}<button class="primary" id="hRetake">Try check again</button>`);
    document.getElementById('hRetake').onclick = () => { (p.history ??= []).push({...p.checks}); p.checks = {}; p.ci = 0; closeModal(); render(); };
  }
  function openLesson(id, stage) { if (!lessons.some(l => l.id === id)) return; leaveWriting(); s.lessonId = id; mode = 'lesson'; if (stage !== undefined) state(lesson()).stage = stage; closeModal(); render(); }
  function openLessons(id = contextLesson().topicId) {
    const t = topics.find(x => x.id === id) || topics[0], u = unitOf(t);
    modal(`<span class="eyebrow">ENGLISH LITERATURE · ${esc(u.paper.toUpperCase())}</span><h2>${esc(t.title)}</h2><p>${esc(u.title)}</p><div class="lesson-list">${lessons.filter(l => l.topicId === t.id).map((l, i) => `<button class="lesson-row ${l.id === lesson().id ? 'current' : ''}" aria-current="${l.id === lesson().id ? 'true' : 'false'}" data-hlesson="${l.id}"><span>${i + 1}</span><span><b>${esc(l.title)}</b><small>${literatureGates(l, state(l)).every(Boolean) ? 'Knowledge activities complete' : l.minutes + ' min'}</small></span><span>→</span></button>`).join('')}</div>`);
    document.querySelectorAll('[data-hlesson]').forEach(b => (b.onclick = () => openLesson(b.dataset.hlesson)));
  }
  function openMap() {
    const built = units.filter(u => topics.some(t => t.unit === u.id));
    modal(`<span class="eyebrow">AQA GCSE ENGLISH LITERATURE · 8702</span><h2>Course map</h2>${built.map(u => `<h3 class="h-map-unit">${esc(u.paper)}: ${esc(u.title)}</h3>${topics.filter(t => t.unit === u.id).map(t => `<button class="topic-link" data-htopic="${t.id}"><span>${esc(t.title)}</span><span>→</span></button>`).join('')}`).join('')}`);
    document.querySelectorAll('[data-htopic]').forEach(b => (b.onclick = () => openLessons(b.dataset.htopic)));
  }
  function startReview(topicId) {
    const allowed = new Set(dueConcepts(s)), seen = new Set();
    const list = lessons.filter(l => typeof topicId !== 'string' || l.topicId === topicId).flatMap(l => [...l.check, ...l.practice]).filter(q => { if (!allowed.has(q.concept) || seen.has(q.concept)) return false; seen.add(q.concept); return true; });
    if (!list.length) { modal('<h2>Nothing due yet</h2><p>Your missed or due concepts will return here. Continue learning for now.</p>'); return; }
    leaveWriting(); run = {questions: list, answers: {}, index: 0}; mode = 'review'; closeModal(); render();
  }
  function openSources() {
    const l=contextLesson();
    modal(`<h2>Sources & notes</h2><p>AQA GCSE English Literature 8702; ${esc(l.refs.join(', '))}. Current text: ${esc(activeTopic().title)}; scope: ${esc(l.scope)}. Sources checked 28 October 2026.</p><p><a href="${source}" target="_blank" rel="noopener">Official AQA specification ↗</a></p><p><a href="${bookURL(l)}" target="_blank" rel="noopener">Read ${esc(activeTopic().title)} ↗</a></p><p>Brief quotations from ${esc(authorOf(l))}’s public-domain text; original teaching commentary. Read the full scenes or staves alongside these lessons. Scene/line numbering can vary by edition.</p><p>Supported interpretations can differ. No English specialist review completed. Knowledge checks score selected responses; writing is saved for human review and does not receive an automatic essay mark. Independent writing records departures but cannot police external resources. Practice prompts are original, not official exam papers.</p>`);
  }
  function renderIndependentWriting() {
    const l=lesson(),p=state(l),w=p.independent??={draft:'',startedAt:Date.now(),departures:0};
    const submitted=!!w.firstResponse;
    root.innerHTML=`<section class="intro"><div><div class="eyebrow">MACBETH · INDEPENDENT WRITING</div><h1>${submitted?'Review & revise':'Your first response'}</h1></div></section><section class="lit-writing"><p>${esc(l.independentPrompt)}</p><p class="eyebrow">${esc(l.independentExtractLabel)}</p><blockquote class="lit-writing-extract">${esc(l.independentExtract)}</blockquote>${submitted?`<details><summary>First submitted response</summary><p class="lit-writing-extract">${esc(w.firstResponse.text)}</p></details><h3>Review criteria</h3><ul>${l.rubric.map(r=>`<li>${esc(r)}</li>`).join('')}</ul><p>Discuss this response with a teacher. No essay mark is assigned here.</p>`:'<p>Use the supplied passage and your knowledge of the play. Lesson explanations and review criteria are hidden here. Leaving is recorded; external resources cannot be monitored.</p>'}<label for="litIndependentDraft">${submitted?'Your revision':'Your response'}</label><textarea id="litIndependentDraft" rows="14"></textarea><p id="litIndependentStatus" role="status"></p><button class="primary" id="litSubmitIndependent">${submitted?'Save revision':'Submit first response'}</button><button class="secondary" id="litLeaveIndependent">Save & return to lesson</button><div id="litIndependentVersions"></div></section>`;
    const area=$('#litIndependentDraft');area.value=submitted?(w.revision??w.firstResponse.text):w.draft;
    $('#litIndependentVersions').innerHTML=draftVersionsHTML(w.revisions||[]);
    area.oninput=()=>{if(submitted)w.revision=area.value;else w.draft=area.value;const ok=save();$('#litIndependentStatus').textContent=ok?'Draft saved on this device.':'Draft kept for this session; storage unavailable.';};
    $('#litSubmitIndependent').onclick=()=>{
      if(!area.value.trim()){$('#litIndependentStatus').textContent='Write a response before submitting.';return;}
      if(!w.firstResponse)w.firstResponse={text:area.value,at:Date.now(),departures:w.departures||0};
      else (w.revisions??=[]).push({text:area.value,at:Date.now()});
      renderIndependentWriting();
      $('#litIndependentStatus').textContent=submitted?'Revision saved; your first response is unchanged.':'First response saved. Use the criteria to review it; no mark has been assigned.';
    };
    $('#litLeaveIndependent').onclick=()=>{if(!w.firstResponse)w.departures=(w.departures||0)+1;p.writingActive=false;render();};
    save();
  }
  return {render, stop, openLessons, openMap, openSources, startReview, getProgress, openProgressLesson: openLesson, reviewTopic: startReview, title: () => (mode === 'review' ? 'Literature review' : lesson().title), state: () => s};
}
