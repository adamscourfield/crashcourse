import {mathsSummary} from '../progress-summary.js?v=20261023-mastery01';
import {cancelQuestionAdvance,questionFlow} from '../question-flow.js?v=20261023-flow01';
// Maths studio: lesson flow, generated practice with mastery ladders, independent checks,
// spaced interleaved review and topic assessment. Owns its own saved state (MATHS_KEY) so it
// can never alter science progress.
import { mathHTML, mathText, esc } from './render.js?v=20261023-maths-r9';
import { mark, answerMarkup, givenMarkup, PARTIAL_MESSAGES, answerValue, parseStandard, parsePower, parseInterval } from './answers.js?v=20261023-maths-r9';
import { algebraMatches, algebraPreview } from './algebra.js?v=20261023-maths-r9';
import { parseSolutions, solutionsMatch, inequalityMatches } from './sets.js?v=20261023-maths-r9';
import { graphSVG, graphInputHTML, bindGraphInput, lineFeedback, pointsFeedback } from './graph.js?v=20261023-maths-r9';
import { exactMatches, parseRatio, ratioProportional } from './exact.js?v=20261023-maths-r9';
import { parseNumber, F, eq, normalise, decText } from './frac.js?v=20261023-maths-r9';
import { generate, skillById } from './skills.js?v=20261023-maths-r9';
import { orderedLessons as numberLessons, mathsTopics as numberTopics, mathsCourseMap, mathsSource } from './lessons-number.js?v=20261023-maths-r9';
import { algebraTopic, orderedAlgebra } from './lessons-algebra.js?v=20261023-maths-r9';
import { visual4, MODELS4 } from './models-algebra.js?v=20261023-maths-r9';
import { visual5, MODELS5 } from './models-algebra2.js?v=20261023-maths-r9';
import { visual6, MODELS6 } from './models-graphs.js?v=20261023-maths-r9';
import { visual7, MODELS7 } from './models-algebra3.js?v=20261023-maths-r9';
import { MODELS8 } from './models-algebra4.js?v=20261023-maths-r9';
import { visual9, MODELS9 } from './models-ratio.js?v=20261023-maths-r9';
import { MODELS10 } from './models-ratio2.js?v=20261023-maths-r9';
import { figSVG, visualGeo } from './geomfig.js?v=20261023-maths-r9';
import { ratioTopic, orderedRatio } from './lessons-ratio.js?v=20261023-maths-r9';
import { geometryTopic, orderedGeometry } from './lessons-geometry.js?v=20261023-maths-r9';
import { MODELS11 } from './models-geometry.js?v=20261023-maths-r9';
import { visual, mountModel } from './models-number.js?v=20261023-maths-r9';
import { visual2, MODELS2 } from './models-number2.js?v=20261023-maths-r9';
import { visual3, MODELS3 } from './models-number3.js?v=20261023-maths-r9';
import { newSeed, rng, shuffled } from './rng.js?v=20261023-maths-r9';
import { MATHS_KEY, restoreMaths, lessonState, skillState, levelsFor, topLevel, recordPractice, levelProgress, mixedMet, gradeRun, scheduleFirstReview, recordRecall, flagForRecall, dueSkills, lessonDone, isPractised, RULES } from './mastery.js?v=20261023-maths-r9';

const STAGES = ['Discover', 'Investigate', 'Practise', 'Check'];
const orderedLessons = [...numberLessons, ...orderedAlgebra, ...orderedRatio, ...orderedGeometry];
const mathsTopics = [...numberTopics, algebraTopic, ratioTopic, geometryTopic];
const EVENT_TEXT = { up: 'Level up', down: 'Stepping back a level to rebuild', practised: 'Skill secure' };

export function createMathsStudio({ root, modal, closeModal, onProgress }) {
  let raw = null, storage = true;
  try { raw = localStorage.getItem(MATHS_KEY); } catch { storage = false; }
  const s = restoreMaths(raw);
  // Lessons, review, assessment and progress are scoped to the current topic.
  const tierLessons = () => orderedLessons.filter(l => s.tier === 'Higher' || !l.higherOnly);
  s.topicId = orderedLessons.find(l => l.id === s.lessonId)?.topicId || s.topicId || 'maths.number';
  const lessons = () => tierLessons().filter(l => l.topicId === s.topicId);
  const topic = () => mathsTopics.find(t => t.id === s.topicId) || mathsTopics[0];
  if (!lessons().some(l => l.id === s.lessonId)) s.lessonId = lessons()[0].id;
  let view = s.view && s.runs[s.view] && !s.runs[s.view].finished ? s.view : 'lesson';
  const $ = sel => root.querySelector(sel), $$ = sel => [...root.querySelectorAll(sel)];
  const lesson = () => lessons().find(l => l.id === s.lessonId);
  const lessonSkills = l => l.skills.filter(sk => s.tier === 'Higher' || !sk.higherOnly);
  const allSkills = () => [...new Set(lessons().flatMap(lessonSkills))];

  function save() {
    s.view = view;
    try { localStorage.setItem(MATHS_KEY, JSON.stringify(s)); } catch { storage = false; }
    const done = lessons().filter(l => lessonState(s, l.id).complete).length;
    onProgress?.({ done, total: lessons().length, due: reviewDue().length, storage, topic: topic().title });
  }
  const feedback = (text, error = false) => { const f = $('#mFeedback'); if (!f) return; f.innerHTML = text ? mathHTML(text) : ''; f.classList.toggle('error', !!error); };

  /* ───────── shell ───────── */
  function shell() {
    root.innerHTML = `<section class="intro"><div><div class="eyebrow"><span class="intro-number" id="mNumber"></span> <span class="mbadge" id="mCalc">Non-calculator</span></div><h1 id="mH1"></h1></div><div class="lesson-meta" id="mMeta"></div></section>
<div class="lesson-toolbar"><button class="text-button" id="mLessons">Lessons</button><span id="mStatus"></span><button class="text-button" id="mNextLesson">Next lesson →</button></div>
<nav class="steps" aria-label="Lesson stages">${STAGES.map((n, i) => `<button data-mstage="${i}"><b>0${i + 1}</b> ${n} <span hidden></span></button>`).join('')}</nav>
<section class="workspace mworkspace"><div class="scene-panel mpanel" id="mPanel"></div><article class="activity"><div class="eyebrow" id="mKicker"></div><h2 id="mTitle"></h2><div id="mBody"></div><div id="mFeedback" class="mfeedback" role="status" aria-live="polite"></div><div class="activity-footer"><span id="mHint"></span><button class="primary" id="mContinue">Continue →</button></div></article></section>
<section class="below"><details class="lesson-summary"><summary>Key idea</summary><p id="mBig"></p></details><span class="spec" id="mSpec"></span></section>
<footer><button class="text-button" id="mSources">Specification & model notes</button></footer>`;
    $('#mLessons').onclick = openLessons;
    $('#mNextLesson').onclick = nextLesson;
    $('#mSources').onclick = openSources;
    $$('[data-mstage]').forEach(b => (b.onclick = () => { view = 'lesson'; lessonState(s, s.lessonId).stage = Number(b.dataset.mstage); render(); }));
    $('#mContinue').onclick = onContinue;
  }

  let modelGeneration = 0;
  function render() {
    cancelQuestionAdvance();
    modelGeneration++;
    if (!$('#mPanel')) shell();
    if (view !== 'lesson') return renderRun();
    const l = lesson(), p = lessonState(s, l.id), d = lessonDone(p, l, s.tier, s);
    const list = lessons(), idx = list.findIndex(x => x.id === l.id);
    p.stage = Math.min(3, Math.max(0, p.stage || 0));
    $('#mNumber').textContent = `LESSON ${String(idx + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}`;
    $('#mH1').textContent = l.title;
    $('#mMeta').innerHTML = `<div>◷ ${l.minutes} min · ${l.higherOnly ? 'Higher only' : 'Foundation and Higher'}</div>`;
    $('#mCalc').textContent = l.calculator ? 'Calculator' : 'Non-calculator';
    $('#mStatus').textContent = p.complete ? `Complete · best check ${p.best}%` : '';
    $('#mBig').textContent = l.big;
    $('#mSpec').textContent = 'Edexcel 1MA1 · ' + l.refs.join(', ');
    $('.steps').hidden = false;
    $('#mNextLesson').hidden = false;
    $$('[data-mstage]').forEach((b, i) => {
      const done = [d.discover, d.investigate, d.practise, d.check][i];
      b.classList.toggle('selected', p.stage === i); b.classList.toggle('done', done);
      b.setAttribute('aria-current', p.stage === i ? 'step' : 'false');
      b.querySelector('b').textContent = done ? '✓' : `0${i + 1}`;
    });
    $('#mKicker').textContent = STAGES[p.stage].toUpperCase();
    $('#mContinue').hidden = false; $('#mContinue').textContent = 'Continue →';
    $('.mworkspace').classList.toggle('question-mode', p.stage >= 2);
    feedback('');
    [renderDiscover, renderInvestigate, renderPractice, renderCheck][p.stage](l, p);
    save();
  }

  /* ───────── discover ───────── */
  function renderDiscover(l, p) {
    p.card = Math.min(l.learn.length - 1, Math.max(0, p.card || 0));
    const c = l.learn[p.card];
    p.reveal ??= {};
    const shown = p.reveal[p.card] ?? 0;
    $('#mPanel').innerHTML = `<div class="mpanel-k">WORKED EXAMPLE ${p.card + 1} OF ${l.learn.length}</div><div class="mviz-wrap">${visual(c.visual) || visual2(c.visual) || visual3(c.visual) || visual4(c.visual) || visual5(c.visual) || visual6(c.visual) || visual7(c.visual) || visual9(c.visual) || visualGeo(c.visual)}</div>`;
    $('#mTitle').textContent = c.title;
    const pre = p.card === 0 && l.prerequisites?.length ? `<div class="prerequisites"><span>Prior learning:</span>${l.prerequisites.map(id => `<button class="text-button" data-mpre="${id}">${esc(orderedLessons.find(x => x.id === id)?.title || id)}</button>`).join('')}</div>` : '';
    $('#mBody').innerHTML = `${pre}<p>${mathHTML(c.text)}</p><div class="mexample"><div class="mexample-q"><span class="eyebrow">EXAMPLE</span><p>${mathHTML(c.example.prompt)}</p></div><ol class="msteps">${c.example.steps.map((st, i) => `<li ${i < shown ? '' : 'hidden'}>${mathHTML(st)}</li>`).join('')}</ol>${shown < c.example.steps.length ? `<button class="secondary" id="mReveal">${shown ? 'Next step' : 'Try it, then show the first step'}</button>` : ''}</div><div class="reading-dots">${l.learn.map((_, i) => `<button data-mcard="${i}" aria-label="Explanation ${i + 1}" class="${i === p.card ? 'current' : ''}">${i + 1}</button>`).join('')}</div>`;
    $('#mReveal')?.addEventListener('click', () => { p.reveal[p.card] = shown + 1; render(); $('#mReveal')?.focus(); });
    $$('[data-mcard]').forEach(b => (b.onclick = () => { p.card = Number(b.dataset.mcard); render(); }));
    $$('[data-mpre]').forEach(b => (b.onclick = () => setLesson(b.dataset.mpre)));
    $('#mHint').textContent = `Explanation ${p.card + 1} of ${l.learn.length}`;
  }

  /* ───────── investigate ───────── */
  function renderInvestigate(l, p) {
    const generation = modelGeneration, panel = $('#mPanel'), body = $('#mBody');
    $('#mTitle').textContent = '';
    $('#mHint').textContent = p.widgetDone ? 'Complete ✓' : '';
    (MODELS11[l.model] || MODELS10[l.model] || MODELS9[l.model] || MODELS8[l.model] || MODELS7[l.model] || MODELS6[l.model] || MODELS5[l.model] || MODELS4[l.model] || MODELS3[l.model] || MODELS2[l.model] || (ctx => mountModel(l.model, ctx)))({
      panel, body, w: p.widget, tier: s.tier,
      isActive: () => generation === modelGeneration && panel.isConnected && body.isConnected && $('#mPanel') === panel && !!$('#mTitle'),
      save, feedback, setTitle: t => ($('#mTitle').textContent = t),
      done: () => { if (!p.widgetDone) { p.widgetDone = true; save(); render(); } $('#mHint').textContent = 'Complete ✓'; },
    });
  }

  /* ───────── answer controls ───────── */
  function controls(item, value, locked) {
    const fig = item.graph ? `<div class="mfig">${graphSVG(item.graph)}</div>` : item.fig ? `<div class="mfig">${figSVG(item.fig)}</div>` : '';
    return fig + controlsInner(item, value, locked);
  }
  function controlsInner(item, value, locked) {
    const a = item.answer, v = value ?? '';
    if (a.kind === 'points' || a.kind === 'line') return graphInputHTML(a, v, locked);
    if (a.kind === 'choice') return `<div class="choices">${a.options.map((o, i) => `<button class="choice ${String(v) === String(i) ? 'selected' : ''}" data-mchoice="${i}" ${locked ? 'disabled' : ''}>${mathHTML(o)}</button>`).join('')}</div>`;
    if (a.kind === 'fraction') {
      const parsed = parseNumber(v);
      const sh = parsed?.shape || {};
      const neg = /^\s*[-−]/.test(String(v));
      const whole = sh.kind === 'mixed' ? sh.w : sh.kind === 'integer' ? Math.abs(parsed.value.n) : '';
      const n = sh.kind === 'mixed' || sh.kind === 'proper' || sh.kind === 'improper' ? sh.n : '';
      const d = sh.kind === 'mixed' || sh.kind === 'proper' || sh.kind === 'improper' ? sh.d : '';
      return `<fieldset class="mfrac-in" ${locked ? 'disabled' : ''}><legend class="field-label">Your answer${a.form === 'mixed' ? ' (whole number box for a mixed number)' : ''}</legend><button type="button" class="msign ${neg ? 'on' : ''}" data-msign aria-pressed="${neg}" aria-label="Negative">−</button><input class="lab-input mwhole" data-mw inputmode="numeric" autocomplete="off" aria-label="Whole number (optional)" placeholder="" value="${esc(whole)}"><span class="mfrac-stack"><input class="lab-input" data-mn inputmode="numeric" autocomplete="off" aria-label="Numerator" value="${esc(n)}"><i aria-hidden="true"></i><input class="lab-input" data-md inputmode="numeric" autocomplete="off" aria-label="Denominator" value="${esc(d)}"></span></fieldset>${locked ? '' : '<button class="secondary" id="mSubmit">Check answer</button>'}`;
    }
    const dec = f => (f ? decText(f) ?? `${f.n}/${f.d}` : '');
    const submit = locked ? '' : '<button class="secondary" id="mSubmit">Check answer</button>';
    if (a.kind === 'standard') {
      const p = parseStandard(v) || {};
      const neg = (p.n ?? 0) < 0;
      return `<fieldset class="mans mstd" ${locked ? 'disabled' : ''}><legend class="field-label">Your answer in standard form</legend><input class="lab-input" data-sa inputmode="decimal" autocomplete="off" aria-label="Number from 1 up to 10" value="${esc(p.a ? dec(p.a) : '')}"><span class="mtimes">× 10</span><span class="mexp"><button type="button" class="msign ${neg ? 'on' : ''}" data-mexpsign aria-pressed="${neg}" aria-label="Negative power">−</button><input class="lab-input" data-sn inputmode="numeric" autocomplete="off" aria-label="Power of 10" value="${esc(p.n !== undefined ? Math.abs(p.n) : '')}"></span></fieldset>${submit}`;
    }
    if (a.kind === 'power') {
      const p = parsePower(v) || {};
      const neg = (p.exp ?? 0) < 0;
      return `<fieldset class="mans mpow" ${locked ? 'disabled' : ''}><legend class="field-label">Your answer as a single power</legend><input class="lab-input" data-pb inputmode="numeric" autocomplete="off" aria-label="Base" value="${esc(p.base ?? '')}"><span class="mexp"><button type="button" class="msign ${neg ? 'on' : ''}" data-mexpsign aria-pressed="${neg}" aria-label="Negative power">−</button><input class="lab-input" data-pe inputmode="numeric" autocomplete="off" aria-label="Power" value="${esc(p.exp !== undefined ? Math.abs(p.exp) : '')}"></span></fieldset>${submit}`;
    }
    if (a.kind === 'interval') {
      const p = parseInterval(v) || {};
      const op = inc => (inc ? '≤' : '<');
      return `<fieldset class="mans mint-iv" ${locked ? 'disabled' : ''}><legend class="field-label">Your error interval</legend><input class="lab-input" data-ilo inputmode="decimal" autocomplete="off" aria-label="Lower bound" value="${esc(p.lo ? dec(p.lo) : '')}"><button type="button" class="msign mop" data-iop="lo" aria-label="Lower sign: ${op(p.loIn)}">${op(p.loIn)}</button><span class="mvar">x</span><button type="button" class="msign mop" data-iop="hi" aria-label="Upper sign: ${op(p.hiIn)}">${op(p.hiIn)}</button><input class="lab-input" data-ihi inputmode="decimal" autocomplete="off" aria-label="Upper bound" value="${esc(p.hi ? dec(p.hi) : '')}"></fieldset><p class="micro-note">Tap a sign to switch between &lt; and ≤.</p>${submit}`;
    }
    if (a.kind === 'exact') return `<label class="field-label" for="mText">Your exact answer</label><input class="lab-input mtext" id="mText" autocomplete="off" spellcheck="false" value="${esc(v)}" ${locked ? 'disabled' : ''}><div class="mkeys">${locked ? '' : '<button type="button" class="secondary" data-mkey="√">√</button><button type="button" class="secondary" data-mkey="π">π</button><button type="button" class="secondary" data-mkey="/">/</button>'}</div>${item.note ? `<p class="micro-note">${esc(item.note)}</p>` : '<p class="micro-note">For example 3π, 2√5, 4 − 2√3 or 2√3/3.</p>'}${submit}`;
    if (a.kind === 'algebra') return `<label class="field-label" for="mText">${a.subject ? `Your answer: ${esc(a.subject)} =` : 'Your answer'}</label><input class="lab-input mtext malg" id="mText" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(v)}" ${locked ? 'disabled' : ''}><p class="malg-preview" id="mPreview" aria-live="polite">${v ? 'Reads as: ' + mathHTML(algebraPreview(v)) : ''}</p><div class="mkeys">${locked ? '' : '<button type="button" class="secondary" data-mkey="^2" aria-label="squared">x²</button><button type="button" class="secondary" data-mkey="(">(</button><button type="button" class="secondary" data-mkey=")">)</button><button type="button" class="secondary" data-mkey="/">/</button>'}</div><p class="micro-note">${esc(item.note || 'Type letters and numbers, for example 3x^2 − 2(x + 1). Use ^ for powers and / for fractions.')}</p>${submit}`;
    if (a.kind === 'solutions') {
      const rows = String(v).split(';'), cell = (r, i) => (rows[r] || '').split(',')[i] ?? '';
      const joiner = a.vars.length === 1 ? 'or' : 'and';
      return `<fieldset class="mans msols" ${locked ? 'disabled' : ''}><legend class="field-label">Your answer${a.dp != null ? ` (${a.dp} decimal places)` : ''}</legend>${a.sols.map((_, r) => `${r ? `<span class="msols-join">${joiner}</span>` : ''}<div class="msols-row">${a.vars.map((vn, i) => `<label><span>${esc(a.labels?.[i] ?? vn + ' =')}</span><input class="lab-input" data-sol="${r},${i}" inputmode="text" autocomplete="off" aria-label="${esc((a.labels?.[i] ?? vn + ' =') + ' (solution ' + (r + 1) + ')')}" value="${esc(cell(r, i).trim())}"></label>`).join('')}</div>`).join('')}</fieldset>${item.note ? `<p class="micro-note">${esc(item.note)}</p>` : ''}${submit}`;
    }
    if (a.kind === 'inequality') return `<label class="field-label" for="mText">Your answer</label><input class="lab-input mtext malg" id="mText" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(v)}" ${locked ? 'disabled' : ''}><div class="mkeys">${locked ? '' : ['<', '≤', '>', '≥', 'x', ' or '].map(k => `<button type="button" class="secondary" data-mkey="${k}">${k.trim()}</button>`).join('')}</div><p class="micro-note">${esc(item.note || 'For example x > 3 or −2 < x ≤ 5.')}</p>${submit}`;
    if (a.kind === 'list') return `<label class="field-label" for="mText">Your answer</label><input class="lab-input mtext" id="mText" inputmode="text" autocomplete="off" value="${esc(v)}" ${locked ? 'disabled' : ''}><p class="micro-note">${esc(item.note || 'Separate the values with commas.')}</p>${submit}`;
    if (a.kind === 'ratio') return `<label class="field-label" for="mText">Your ratio</label><input class="lab-input mtext" id="mText" inputmode="text" autocomplete="off" placeholder="e.g. 3:4" value="${esc(v)}" ${locked ? 'disabled' : ''}><div class="mkeys">${locked ? '' : '<button type="button" class="secondary" data-mkey=":">:</button>'}</div>${submit}`;
    if (a.kind === 'primes') return `<label class="field-label" for="mText">Your answer</label><input class="lab-input mtext" id="mText" autocomplete="off" spellcheck="false" value="${esc(v)}" ${locked ? 'disabled' : ''}><div class="mkeys">${locked ? '' : '<button type="button" class="secondary" data-mkey=" × ">×</button><button type="button" class="secondary" data-mkey="^">x<sup>n</sup></button>'}</div>${item.note ? `<p class="micro-note">${esc(item.note)}</p>` : ''}${locked ? '' : '<button class="secondary" id="mSubmit">Check answer</button>'}`;
    return `<label class="field-label" for="mText">Your answer${a.kind === 'decimal' && a.dp != null ? ` (${a.dp} decimal place${a.dp === 1 ? '' : 's'})` : ''}</label><div class="mint"><button type="button" class="msign" data-msign-text aria-label="Make negative" ${locked ? 'disabled' : ''}>±</button><input class="lab-input mtext" id="mText" inputmode="${a.kind === 'decimal' ? 'decimal' : 'numeric'}" autocomplete="off" value="${esc(v)}" ${locked ? 'disabled' : ''}></div>${item.note ? `<p class="micro-note">${esc(item.note)}</p>` : ''}${locked ? '' : '<button class="secondary" id="mSubmit">Check answer</button>'}`;
  }
  function readValue(item) {
    const a = item.answer;
    if (a.kind === 'fraction') {
      const neg = $('[data-msign]')?.classList.contains('on');
      const w = $('[data-mw]').value.trim(), n = $('[data-mn]').value.trim(), d = $('[data-md]').value.trim();
      if (!n && !d) return (neg && w ? '-' : '') + w;
      return `${neg ? '-' : ''}${w ? w + ' ' : ''}${n}/${d}`;
    }
    const val = sel => ($(sel)?.value ?? '').trim();
    if (a.kind === 'standard') { if (!val('[data-sa]') && !val('[data-sn]')) return ''; return `${val('[data-sa]')} x 10^${$('[data-mexpsign]').classList.contains('on') ? '-' : ''}${val('[data-sn]')}`; }
    if (a.kind === 'power') { if (!val('[data-pb]') && !val('[data-pe]')) return ''; return `${val('[data-pb]')}^${$('[data-mexpsign]').classList.contains('on') ? '-' : ''}${val('[data-pe]')}`; }
    if (a.kind === 'interval') { if (!val('[data-ilo]') && !val('[data-ihi]')) return ''; return `${val('[data-ilo]')} ${$('[data-iop="lo"]').textContent} x ${$('[data-iop="hi"]').textContent} ${val('[data-ihi]')}`; }
    if (a.kind === 'solutions') {
      const rows = a.sols.map((_, r) => a.vars.map((_, i) => val(`[data-sol="${r},${i}"]`)).join(','));
      return rows.every(r => !r.replace(/,/g, '')) ? '' : rows.join(';');
    }
    return $('#mText')?.value ?? '';
  }
  function bindControls(item, onAnswer, onDraft) {
    if (item.answer.kind === 'points' || item.answer.kind === 'line') {
      bindGraphInput(root, item.answer, (raw, err) => {
        const typed = document.activeElement?.matches?.('[data-gadd]');
        onDraft?.(raw); render();
        if (err) feedback(err, true);
        if (typed) $('[data-gx]')?.focus();
      });
    }
    $$('[data-mchoice]').forEach(b => (b.onclick = () => onAnswer(b.dataset.mchoice)));
    $('#mSubmit')?.addEventListener('click', () => onAnswer(readValue(item)));
    $('[data-msign]')?.addEventListener('click', e => { e.currentTarget.classList.toggle('on'); e.currentTarget.setAttribute('aria-pressed', e.currentTarget.classList.contains('on')); onDraft?.(readValue(item)); });
    $('[data-msign-text]')?.addEventListener('click', () => { const i = $('#mText'); i.value = i.value.trim().startsWith('-') || i.value.trim().startsWith('−') ? i.value.trim().slice(1) : '-' + i.value.trim(); onDraft?.(i.value); i.focus(); });
    $$('[data-mkey]').forEach(b => (b.onclick = () => { const i = $('#mText'); const at = i.selectionStart ?? i.value.length; i.value = i.value.slice(0, at) + b.dataset.mkey + i.value.slice(i.selectionEnd ?? at); i.focus(); i.selectionStart = i.selectionEnd = at + b.dataset.mkey.length; onDraft?.(i.value); }));
    $('[data-mexpsign]')?.addEventListener('click', e => { e.currentTarget.classList.toggle('on'); e.currentTarget.setAttribute('aria-pressed', e.currentTarget.classList.contains('on')); onDraft?.(readValue(item)); });
    $$('[data-iop]').forEach(b => (b.onclick = () => { b.textContent = b.textContent === '<' ? '≤' : '<'; b.setAttribute('aria-label', (b.dataset.iop === 'lo' ? 'Lower' : 'Upper') + ' sign: ' + b.textContent); onDraft?.(readValue(item)); }));
    const pv = () => { const p = $('#mPreview'), t = $('#mText'); if (p && t) p.innerHTML = t.value.trim() ? 'Reads as: ' + mathHTML(algebraPreview(t.value)) : ''; };
    if (item.answer.kind === 'algebra') $$('[data-mkey]').forEach(b => b.addEventListener('click', pv));
    $$('.mfrac-in input, .mans input, #mText, [data-sol]').forEach(i => {
      i.addEventListener('input', () => { onDraft?.(readValue(item)); pv(); });
      i.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); onAnswer(readValue(item)); } });
    });
  }
  function diagnose(item, raw, result) {
    if (result.status === 'partial') return PARTIAL_MESSAGES[result.code] || 'Right value, but not in the form asked for.';
    if (item.answer.kind === 'choice') return item.optionWhy?.[Number(raw)] || '';
    if (item.answer.kind === 'primes') {
      if (result.code === 'wrong-product' || result.code === 'wrong-product-composite') {
        const prod = Object.entries(result.given || {}).reduce((t, [b, k]) => t * Number(b) ** k, 1);
        return `Those factors multiply to ${prod}, not ${Object.entries(item.answer.value).reduce((t, [b, k]) => t * Number(b) ** k, 1)}. Multiply your answer out to check it.`;
      }
      return '';
    }
    if (item.answer.kind === 'points') return pointsFeedback(result);
    if (item.answer.kind === 'line') return result.code === 'line' ? lineFeedback(item.answer, result) : '';
    if (item.answer.kind === 'solutions') {
      const t = item.soTraps?.find(t => solutionsMatch(t.sols, raw, item.answer));
      if (t) return t.why;
      if (result.code === 'swapped') return 'Your values are the wrong way round: check which letter each one belongs to.';
      if (result.hit && item.answer.sols.length > 1) return `${result.hit} of your solutions ${result.hit === 1 ? 'is' : 'are'} right. Substitute each one back into the equation${item.answer.vars.length > 1 ? 's' : ''} to check.`;
      return '';
    }
    if (item.answer.kind === 'inequality') return item.inTraps?.find(t => inequalityMatches(t.set, raw, item.answer))?.why || '';
    if (item.answer.kind === 'list') {
      const bits = [];
      if (result.missing?.length) bits.push(`missing: ${result.missing.map(n => String(n).replace('-', '−')).join(', ')}`);
      if (result.extra?.length) bits.push(`not allowed: ${result.extra.map(n => String(n).replace('-', '−')).join(', ')}`);
      return bits.length ? `Check the ends: < leaves the boundary out, ≤ includes it (${bits.join('; ')}).` : '';
    }
    if (item.answer.kind === 'algebra') return item.alTraps?.find(t => algebraMatches(t.expr, raw, item.answer))?.why || '';
    if (item.answer.kind === 'exact') return item.exTraps?.find(t => exactMatches(t, raw))?.why || '';
    if (item.answer.kind === 'ratio') {
      if (result.reversed) return 'The parts are in the wrong order. Write them in the same order as the question names them.';
      const p = parseRatio(raw);
      return (p && item.raTraps?.find(t => ratioProportional(p, t.parts))?.why) || '';
    }
    if (item.answer.kind === 'interval') {
      const iv = parseInterval(raw);
      const t = iv && item.ivTraps?.find(t => eq(iv.lo, F(t.lo.n, t.lo.d)) && eq(iv.hi, F(t.hi.n, t.hi.d)));
      return t ? t.why : '';
    }
    const v = answerValue(item.answer, raw);
    if (!v) return '';
    const trap = item.traps?.find(t => eq(v, F(t.v.n, t.v.d)));
    return trap ? trap.why : '';
  }
  const FORMAT_HELP = { 'format-standard': 'Fill in both boxes: a number from 1 up to 10, and the power of 10.', 'format-power': 'Fill in both boxes: the base and the power.', 'format-interval': 'Give both end values of the interval.', 'format-exact': 'Write an exact answer such as 3π, 2√5, 4 − 2√3 or 2√3/3. Use the √ and π buttons.', 'format-ratio': 'Write a ratio with colons, such as 3:4.', 'format-solutions': 'Fill in every box with a number, such as 3, −2, 1.5 or 7/2.', 'format-inequality': 'Write an inequality using x, such as x > 3, x ≤ −1 or −2 < x ≤ 4. Use the buttons for ≤ and ≥; join two regions with "or".', 'format-list': 'List whole numbers separated by commas, such as −1, 0, 1, 2.', 'format-points': 'Plot points by tapping the grid, or type x and y and press Add point.', 'line-two-points': 'Plot at least two points on the line.', primes: 'Write primes joined by × (type x or *), for example 2^3 x 5.', format: 'Write a whole number, a decimal, a fraction like 3/4, or a mixed number like 1 3/4.' };
  const invalidText = (item, res) => (res.code === 'empty' ? 'Enter an answer first.' : res.hint || FORMAT_HELP[res.code] || FORMAT_HELP[item.answer.kind === 'primes' ? 'primes' : 'format']);
  const solution = item => `<div class="msolution"><span class="eyebrow">WORKED SOLUTION</span><ol class="msteps">${item.steps.map(st => `<li>${mathHTML(st)}</li>`).join('')}</ol><p class="mfinal">Answer: <strong>${mathHTML(answerMarkup(item.answer))}</strong></p></div>`;

  /* ───────── practise ───────── */
  function practiceTarget(l, p) {
    const sks = lessonSkills(l);
    const open = sks.find(sk => !isPractised(skillState(s, sk.id), sk, s.tier));
    if (open) return { mode: 'skill', skill: open, level: skillState(s, open.id).level };
    if (sks.length > 1 && !p.mixed.done) {
      const last = p.mixed.log.at(-1)?.skill;
      const r = rng(l.id + p.mixed.log.length + (p.mixed.salt ||= newSeed()));
      const pool = sks.filter(sk => sk.id !== last);
      const sk = pool[Math.floor(r() * pool.length)];
      return { mode: 'mixed', skill: sk, level: topLevel(sk, s.tier) };
    }
    return { mode: 'done' };
  }
  function ladder(l, p, target) {
    const sks = lessonSkills(l);
    return `<div class="mladder" aria-label="Practice progress">${sks.map(sk => {
      const k = skillState(s, sk.id), top = topLevel(sk, s.tier), secure = isPractised(k, sk, s.tier);
      const cur = target.mode === 'skill' && target.skill.id === sk.id;
      return `<div class="mrung ${cur ? 'current' : ''} ${secure ? 'secure' : ''}"><b>${esc(sk.name)}</b><span>${secure ? 'Secure ✓' : `Level ${Math.min(k.level, top)} of ${top} · ${esc(levelsFor(sk, s.tier)[Math.min(k.level, top) - 1].label)}`}</span><i style="--p:${secure ? 1 : (Math.min(k.level, top) - 1 + levelProgress(k, sk, s.tier)) / top}"></i></div>`;
    }).join('')}${sks.length > 1 ? `<div class="mrung ${target.mode === 'mixed' ? 'current' : ''} ${p.mixed.done ? 'secure' : ''}"><b>Mixed round</b><span>${p.mixed.done ? 'Secure ✓' : `${p.mixed.log.slice(-RULES.mixedWindow).filter(e => e.c).length} of the last ${RULES.mixedWindow} correct (need ${RULES.mixedNeeded})`}</span><i style="--p:${p.mixed.done ? 1 : Math.min(1, p.mixed.log.slice(-RULES.mixedWindow).filter(e => e.c && !e.a).length / RULES.mixedNeeded)}"></i></div>` : ''}</div>`;
  }

  function renderPractice(l, p) {
    const target = practiceTarget(l, p);
    const pr = p.practice;
    const keep = !!(pr.item && pr.answer); // Keep feedback visible before advancing, including a newly secured skill.
    $('#mPanel').innerHTML = '';
    if (!keep && target.mode === 'done') { p.stage = 3; render(); return; }
    if (!keep && (!pr.item || pr.item.skill !== target.skill.id || (pr.mode || 'skill') !== target.mode || (target.mode === 'skill' && pr.item.level !== Math.min(target.level, topLevel(target.skill, s.tier)) && !pr.answer))) {
      pr.item = generate(target.skill.id, Math.min(target.level, topLevel(target.skill, s.tier)), newSeed());
      pr.mode = target.mode; pr.answer = null; pr.assisted = false; pr.example = null; pr.draft = '';
    }
    const item = pr.item, answered = !!pr.answer;
    $('#mTitle').innerHTML = mathHTML(item.prompt);
    const ex = pr.example ? `<div class="mexample assisted"><span class="eyebrow">WORKED EXAMPLE · A SIMILAR QUESTION</span><p>${mathHTML(pr.example.prompt)}</p>${pr.example.graph ? `<div class="mfig">${graphSVG(pr.example.graph)}</div>` : ''}<ol class="msteps">${pr.example.steps.map(st => `<li>${mathHTML(st)}</li>`).join('')}</ol><p class="mfinal">Answer: <strong>${mathHTML(answerMarkup(pr.example.answer))}</strong></p></div>` : '';
    $('#mBody').innerHTML = `${ladder(l, p, target)}<div class="mq-meta"><span class="mbadge">${(pr.mode || target.mode) === 'mixed' ? 'Mixed' : 'Level ' + item.level}</span><span class="mbadge">${item.calculator ? 'Calculator' : 'Non-calculator'}</span>${pr.assisted ? '<span class="mbadge soft">After an example</span>' : ''}</div>${ex}${controls(item, answered ? pr.answer.raw : pr.draft, answered)}${answered && pr.answer.status !== 'correct' ? solution(item) : ''}${!answered && !pr.example ? '<button class="text-button mhelp" id="mExample">Show me a worked example first</button>' : ''}`;
    if (answered) feedback(pr.answer.msg, pr.answer.status !== 'correct');
    bindControls(item, value => {
      if (pr.answer) return;
      const res = mark(item.answer, value);
      if (res.status === 'invalid') { feedback(invalidText(item, res), true); return; }
      const correct = res.status === 'correct';
      let event = null;
      if ((pr.mode || target.mode) === 'skill') event = recordPractice(skillState(s, item.skill), skillById[item.skill], s.tier, { correct, assisted: pr.assisted }).event;
      else {
        p.mixed.log.push({ skill: item.skill, c: correct, a: pr.assisted, t: Date.now() });
        if (mixedMet(p.mixed.log)) { p.mixed.done = true; event = 'practised'; }
      }
      const why = correct ? '' : diagnose(item, value, res);
      const msg = (correct ? 'Correct.' : res.status === 'partial' ? 'Nearly.' : 'Not this time.') + (why ? ' ' + why : '') + (!correct && !why ? ' Compare your working with the worked solution.' : '') + (event ? ` ${EVENT_TEXT[event]}${event === 'up' ? `: level ${skillState(s, item.skill).level}.` : '.'}` : '');
      pr.answer = { raw: value, status: res.status, msg };
      save(); render();
    }, draft => { pr.draft = draft; save(); });
    $('#mExample')?.addEventListener('click', () => { pr.example = generate(item.skill, item.level, newSeed()); pr.assisted = true; save(); render(); });
    $('#mContinue').textContent = answered && pr.answer.status !== 'correct' ? 'Try another question →' : 'Next question →';
    questionFlow($('#mContinue'), {answered, automatic: pr.answer?.status === 'correct', next: onContinue, guard: () => !root.hidden && view === 'lesson' && lesson().id === l.id && p.stage === 2});
    $('#mHint').textContent = (pr.mode || target.mode) === 'mixed' ? 'Mixed round: skills interleaved' : skillById[item.skill].name;
  }

  /* ───────── check ───────── */
  function startCheck(l, p) {
    const run = (p.history.length || 0) + 1;
    const allowed = lessonSkills(l);
    const plan = l.checkPlan.filter(([id]) => allowed.some(sk => sk.id === id));
    for (let i = 0; plan.length < 10 && allowed.length; i++) { const sk = allowed[i % allowed.length]; plan.push([sk.id, topLevel(sk, s.tier)]); }
    const items = shuffled(rng(l.id + run + Date.now()), plan.map(([id, lv]) => generate(id, Math.min(lv, topLevel(skillById[id], s.tier)), newSeed())));
    p.check = { run, items, answers: {}, drafts: {}, index: 0, startedAt: Date.now() };
  }
  function renderCheck(l, p) {
    if (!p.check || p.check.finished) {
      $('#mTitle').textContent = 'Independent check';
      const d = lessonDone(p, l, s.tier, s);
      $('#mBody').innerHTML = `<p>Ten new questions across this lesson's skills. There are no worked examples or hints, and your first answer to each question counts. You need ${RULES.checkPass}% to complete the lesson.</p>${!d.practise ? '<p class="callout">You have not finished practising yet. You can still try the check, but the lesson completes only when practice is secure too.</p>' : ''}${p.history.length ? `<p>Previous runs: ${p.history.map(h => h.score + '%').join(', ')}. A new run uses different questions.</p>` : ''}`;
      $('#mContinue').textContent = p.history.length ? 'Start a new check →' : 'Start the check →';
      $('#mHint').textContent = '';
      return;
    }
    const c = p.check, item = c.items[c.index], a = c.answers[item.id];
    $('#mTitle').innerHTML = mathHTML(item.prompt);
    $('#mBody').innerHTML = `<p class="check-rule">First answers count.</p><div class="mq-meta"><span class="mbadge">${item.calculator ? 'Calculator' : 'Non-calculator'}</span></div>${controls(item, a ?? c.drafts[item.id], a !== undefined)}`;
    bindControls(item, value => {
      if (c.answers[item.id] !== undefined) return;
      const res = mark(item.answer, value);
      if (res.status === 'invalid') { feedback(invalidText(item, res), true); return; }
      c.answers[item.id] = value;
      save(); render(); feedback('Answer recorded.');

    }, draft => { c.drafts[item.id] = draft; save(); });
    if (a !== undefined) feedback('Answer recorded.');
    $('#mContinue').textContent = c.index === c.items.length - 1 ? 'See my results →' : 'Next question →';
    questionFlow($('#mContinue'), {answered: a !== undefined, delay: 650, next: onContinue, guard: () => !root.hidden && view === 'lesson' && lesson().id === l.id && p.stage === 3});
    $('#mHint').textContent = `Independent check ${c.index + 1} / ${c.items.length}`;
  }
  function finishCheck(l, p) {
    const c = p.check, g = gradeRun(c.items, c.answers, mark);
    c.finished = true;
    const now = Date.now();
    for (const it of c.items) {
      const ok = mark(it.answer, c.answers[it.id]).status === 'correct';
      if (!ok) flagForRecall(skillState(s, it.skill), now);
    }
    p.history.push({ run: c.run, score: g.percent, at: now, answers: { ...c.answers }, ids: c.items.map(i => i.id) });
    p.best = Math.max(p.best || 0, g.percent);
    const d = lessonDone(p, l, s.tier, s);
    const complete = d.discover && d.investigate && d.practise && d.check;
    if (complete && !p.complete) { p.complete = true; p.completedAt = now; lessonSkills(l).forEach(sk => scheduleFirstReview(skillState(s, sk.id), now)); }
    save();
    const pending = [];
    if (!d.discover) pending.push('the Discover explanations');
    if (!d.investigate) pending.push('the investigation');
    if (!d.practise) pending.push('practice');
    if (g.percent < RULES.checkPass) pending.push(`a check score of at least ${RULES.checkPass}%`);
    const weak = [...new Set(c.items.filter(it => mark(it.answer, c.answers[it.id]).status !== 'correct').map(it => skillById[it.skill].name))];
    modal(`<span class="eyebrow">INDEPENDENT CHECK · RUN ${c.run}</span><h2>${g.correct} / ${g.total} · ${g.percent}%</h2><p>${pending.length ? 'To complete this lesson, finish ' + pending.join(', ') + '.' : 'Lesson complete. These skills now join your spaced review, starting tomorrow.'}${weak.length ? ` Skills to revisit: ${esc(weak.join('; '))}. They have been added to your review list.` : ''}</p>${resultRows(c.items, c.answers)}<div class="modal-actions"><button class="primary" id="mrNext">${pending.length ? 'Continue learning' : 'Next lesson →'}</button><button class="secondary" id="mrRetake">New check with different questions</button>${weak.length ? '<button class="secondary" id="mrReview">Review weak skills now</button>' : ''}</div>`);
    document.getElementById('mrRetake').onclick = () => { closeModal(); startCheck(l, p); save(); render(); };
    document.getElementById('mrNext').onclick = () => { closeModal(); if (pending.length) { p.stage = !d.discover ? 0 : !d.investigate ? 1 : !d.practise ? 2 : 3; render(); } else nextLesson(); };
    document.getElementById('mrReview')?.addEventListener('click', () => { closeModal(); startReview(); });
  }
  function resultRows(items, answers) {
    return items.map(it => {
      const ok = mark(it.answer, answers[it.id]).status === 'correct';
      return `<details class="result-row"><summary><span class="${ok ? 'right' : 'wrong'}">${ok ? '✓' : '↻'}</span> ${mathHTML(it.prompt)}</summary><p>Your answer: ${mathHTML(givenMarkup(it.answer, answers[it.id]))}<br>Correct answer: <strong>${mathHTML(answerMarkup(it.answer))}</strong></p><ol class="msteps">${it.steps.map(st => `<li>${mathHTML(st)}</li>`).join('')}</ol></details>`;
    }).join('');
  }

  function onContinue() {
    if (view !== 'lesson') return nextRun();
    const l = lesson(), p = lessonState(s, l.id);
    if (p.stage === 0) {
      if (!p.seen.includes(p.card)) p.seen.push(p.card);
      if (p.card < l.learn.length - 1) p.card++;
      else { const unread = l.learn.findIndex((_, i) => !p.seen.includes(i)); if (unread >= 0) p.card = unread; else p.stage = 1; }
      return render();
    }
    if (p.stage === 1) {
      if (!p.widgetDone) return feedback('Complete the investigation to continue.', true);
      p.stage = 2; return render();
    }
    if (p.stage === 2) {
      const answered = !!p.practice.answer;
      if (!answered && practiceTarget(l, p).mode === 'done') { p.stage = 3; return render(); }
      // Skipping an unanswered question records nothing; a fresh question is generated.
      p.practice.item = null; p.practice.answer = null; p.practice.example = null; p.practice.assisted = false; p.practice.draft = '';
      return render();
    }
    if (!p.check || p.check.finished) { startCheck(l, p); return render(); }
    const c = p.check, item = c.items[c.index];
    if (c.answers[item.id] === undefined) return feedback('Record an answer before moving on.', true);
    if (c.index < c.items.length - 1) { c.index++; return render(); }
    finishCheck(l, p);
    render();
  }

  /* ───────── navigation ───────── */
  function setLesson(id) {
    const l = tierLessons().find(x => x.id === id);
    if (!l) return;
    s.topicId = l.topicId; s.lessonId = id; view = 'lesson';
    closeModal(); render();
  }
  function nextLesson() {
    const list = lessons(), i = list.findIndex(l => l.id === s.lessonId);
    if (i < list.length - 1) setLesson(list[i + 1].id); else openLessons();
  }
  function openLessons() {
    const t = topic();
    modal(`<span class="eyebrow">MATHS · TOPIC ${t.number}</span><h2>${esc(t.title)}</h2><p>Edexcel GCSE Mathematics (1MA1) · ${s.tier}. ${esc(t.coverage)}</p><div class="lesson-list">${lessons().map((l, i) => { const p = lessonState(s, l.id); const started = p.seen.length || p.widgetDone || p.history.length || lessonSkills(l).some(sk => skillState(s, sk.id).log.length); return `<button class="lesson-row" data-mlesson="${l.id}"><span class="lesson-row-number">${p.complete ? '✓' : String(i + 1).padStart(2, '0')}</span><span><b>${esc(l.title)}</b><small>${l.minutes} min · ${l.refs.join(', ')} · ${p.complete ? 'Complete' : started ? 'In progress' : 'Ready'}</small></span><span>→</span></button>`; }).join('')}</div><div class="modal-actions"><button class="primary" id="mmAssess">Available-lesson assessment →</button><button class="secondary" id="mmReview">Review & recall</button><button class="secondary" id="mmMap">Course map</button></div>`);
    document.querySelectorAll('[data-mlesson]').forEach(b => (b.onclick = () => setLesson(b.dataset.mlesson)));
    document.getElementById('mmAssess').onclick = startAssessment;
    document.getElementById('mmReview').onclick = startReview;
    document.getElementById('mmMap').onclick = openMap;
  }
  function openMap() {
    modal(`<span class="eyebrow">MATHS</span><h2>Course map</h2><div class="topic-links">${mathsCourseMap.filter(([, id]) => id && tierLessons().some(l => l.topicId === id)).map(([name, id]) => `<button class="topic-link" data-mtopic="${id}" ${id === s.topicId ? 'aria-current="page"' : ''}><span>${esc(name)}</span><span aria-hidden="true">→</span></button>`).join('')}</div>`);
    document.querySelectorAll('[data-mtopic]').forEach(b => (b.onclick = () => setTopic(b.dataset.mtopic)));
  }
  /** Switch topic, returning to the lesson last opened in it. */
  function setTopic(id) {
    if (id !== s.topicId) {
      (s.lastLessonByTopic ||= {})[s.topicId] = s.lessonId;
      s.topicId = id;
      const back = s.lastLessonByTopic[id];
      s.lessonId = lessons().some(l => l.id === back) ? back : lessons()[0].id;
      view = 'lesson'; render();
    }
    openLessons();
  }
  function openSources() {
    const l = lesson();
    modal(`<span class="eyebrow">SPECIFICATION & MODEL NOTES</span><h2>${esc(l.title)}</h2><p>Edexcel GCSE (9–1) Mathematics 1MA1 references: ${l.refs.join(', ')}. ${l.higherOnly ? 'Higher tier only.' : 'Foundation and Higher tiers.'} Specification Issue 2 (June 2015), checked 22 October 2026.</p><p><a href="${mathsSource}" target="_blank" rel="noopener">Open the Edexcel specification ↗</a></p><p><strong>How practice works:</strong> questions are generated fresh each time from templates with worked solutions. A skill rises a level after ${RULES.promoteStreak} correct answers in a row, steps back after ${RULES.demoteRun} wrong in a row, and is secure when ${RULES.topNeeded} of the last ${RULES.topWindow} at the top level are correct without help. A mixed round then interleaves the skills. The independent check is new questions each run, with ${RULES.checkPass}% to pass.</p><p><strong>Model notes:</strong> ${esc(l.limits)}</p><p>All teaching content and questions are original. Practice is computer-marked for exact answers; it does not mark written working, method marks or extended reasoning. Progress is stored in this browser only.</p>`);
  }

  /* ───────── review and assessment runs ───────── */
  function reviewDue() {
    const ids = allSkills().map(sk => sk.id);
    return dueSkills(s, ids).filter(id => lessons().some(l => lessonSkills(l).some(sk => sk.id === id) && (lessonState(s, l.id).complete || s.skills[id]?.needsReview)));
  }
  function startReview() {
    const active = s.runs.review;
    if (active && !active.finished && (active.topicId || 'maths.number') === s.topicId) { view = 'review'; closeModal(); return render(); }
    const due = reviewDue();
    const practised = allSkills().filter(sk => isPractised(s.skills[sk.id], sk, s.tier)).map(sk => sk.id);
    const pool = due.length ? due : practised;
    if (!pool.length) {
      modal('<h2>Your recall list starts here.</h2><p>Complete a lesson, or secure a skill in practice. Skills you get wrong in a check come back here straight away; completed skills return for spaced review after 1, 3, 9 and 21 days.</p><button class="primary" id="mrLessons">Choose a lesson →</button>');
      document.getElementById('mrLessons').onclick = openLessons;
      return;
    }
    const chosen = shuffled(rng(newSeed()), pool).slice(0, 10);
    modal(`<span class="eyebrow">SPACED, INTERLEAVED RECALL</span><h2>${chosen.length} skill${chosen.length === 1 ? '' : 's'} to revisit.</h2><p>${due.length ? 'These skills are due, or were missed in a check.' : 'Nothing is due yet. This is an optional early review of skills you have secured.'} Questions are new and mixed together, so you practise choosing the method as well as using it.</p><p>${chosen.map(id => esc(skillById[id].name)).join(' · ')}</p><button class="primary" id="mrBegin">Start recall →</button>`);
    document.getElementById('mrBegin').onclick = () => {
      s.runs.review = { kind: 'review', topicId: s.topicId, early: !due.length, queue: chosen.map(id => generate(id, topLevel(skillById[id], s.tier), newSeed())), answers: {}, drafts: {}, index: 0, finished: false, startedAt: Date.now() };
      view = 'review'; closeModal(); render();
    };
  }
  /** Up to 20 skills: one from every lesson, then other skills at random, each skill at most once. */
  function assessmentSkills() {
    const r = rng(newSeed()), pickFrom = list => list[Math.floor(r() * list.length)];
    const chosen = [];
    for (const l of lessons()) { const opts = lessonSkills(l).filter(sk => !chosen.includes(sk)); if (opts.length) chosen.push(pickFrom(opts)); }
    const rest = shuffled(r, allSkills().filter(sk => !chosen.includes(sk)));
    return [...chosen, ...rest].slice(0, Math.max(20, lessons().length));
  }
  function startAssessment() {
    const active = s.runs.assessment;
    if (active && !active.finished && active.tier === s.tier && (active.topicId || 'maths.number') === s.topicId) { view = 'assessment'; closeModal(); return render(); }
    const sks = assessmentSkills();
    modal(`<span class="eyebrow">INDEPENDENT TOPIC ASSESSMENT</span><h2>${esc(topic().title)}: available lessons</h2><p>${sks.length} new questions covering every available lesson, at the top level for your tier and in mixed order. Each attempt draws a different selection of skills. First answers count; worked solutions appear at the end. Pass mark: ${RULES.checkPass}%.</p><button class="primary" id="maBegin">Start assessment →</button>`);
    document.getElementById('maBegin').onclick = () => {
      s.runs.assessment = { kind: 'assessment', tier: s.tier, topicId: s.topicId, queue: shuffled(rng(newSeed()), sks.map(sk => generate(sk.id, topLevel(sk, s.tier), newSeed()))), answers: {}, drafts: {}, index: 0, finished: false, startedAt: Date.now() };
      view = 'assessment'; closeModal(); render();
    };
  }
  function renderRun() {
    const run = s.runs[view];
    if (!run || run.finished || (run.topicId || 'maths.number') !== s.topicId) { view = 'lesson'; return render(); }
    const assessing = view === 'assessment';
    const item = run.queue[run.index], a = run.answers[item.id];
    $('.steps').hidden = true; $('#mNextLesson').hidden = true;
    $('.mworkspace').classList.add('question-mode');
    $('#mNumber').textContent = assessing ? 'TOPIC CHECK' : 'SPACED REVIEW';
    $('#mH1').textContent = assessing ? 'Topic assessment' : 'Review';
    $('#mMeta').innerHTML = '';
    $('#mStatus').textContent = '';
    $('#mBig').textContent = assessing ? 'First answers count. Worked solutions appear after the final question.' : 'Recall strengthens learning. A missed answer brings the skill back sooner.';
    $('#mSpec').textContent = 'Edexcel 1MA1 · ' + topic().title;
    $('#mKicker').textContent = assessing ? 'ASSESSMENT' : 'REVIEW · ' + skillById[item.skill].name.toUpperCase();
    $('#mTitle').innerHTML = mathHTML(item.prompt);
    $('#mPanel').innerHTML = '';
    $('#mBody').innerHTML = `${assessing ? '<p class="check-rule">First answers count.</p>' : ''}<div class="mq-meta"><span class="mbadge">${item.calculator ? 'Calculator' : 'Non-calculator'}</span></div>${controls(item, a ?? run.drafts[item.id], a !== undefined)}${!assessing && a !== undefined && mark(item.answer, a).status !== 'correct' ? solution(item) : ''}`;
    feedback('');
    if (a !== undefined) {
      const res = mark(item.answer, a);
      feedback(assessing ? 'Answer recorded.' : res.status === 'correct' ? 'Correct. Next review of this skill is scheduled further ahead.' : `Revisit this. ${diagnose(item, a, res) || ''}`, !assessing && res.status !== 'correct');
    }
    bindControls(item, value => {
      if (run.answers[item.id] !== undefined) return;
      const res = mark(item.answer, value);
      if (res.status === 'invalid') { feedback(invalidText(item, res), true); return; }
      run.answers[item.id] = value;
      const k = skillState(s, item.skill), ok = res.status === 'correct';
      if (assessing) { if (!ok) flagForRecall(k); }
      else if (!run.early || !ok) recordRecall(k, ok);
      save(); render();
    }, draft => { run.drafts[item.id] = draft; save(); });
    $('#mContinue').hidden = false;
    $('#mContinue').textContent = run.index === run.queue.length - 1 ? 'See results →' : 'Next question →';
    questionFlow($('#mContinue'), {answered: a !== undefined, automatic: assessing || (a !== undefined && mark(item.answer, a).status === 'correct'), delay: assessing ? 650 : 2400, next: nextRun, guard: () => !root.hidden && view !== 'lesson'});
    $('#mHint').textContent = `${run.index + 1} / ${run.queue.length}`;
    save();
  }
  function nextRun() {
    const run = s.runs[view], item = run.queue[run.index];
    if (run.answers[item.id] === undefined) return feedback('Record an answer before moving on.', true);
    if (run.index < run.queue.length - 1) { run.index++; return render(); }
    run.finished = true; run.finishedAt = Date.now();
    const g = gradeRun(run.queue, run.answers, mark);
    run.score = g.percent;
    const assessing = view === 'assessment';
    s.runs[view + 'History'] = [...(s.runs[view + 'History'] || []), { score: g.percent, at: run.finishedAt, tier: run.tier || s.tier }].slice(-20);
    view = 'lesson';
    save();
    modal(`<span class="eyebrow">${assessing ? 'TOPIC ASSESSMENT' : 'RECALL RESULTS'}</span><h2>${g.correct} / ${g.total} · ${g.percent}%</h2><p>${assessing ? (g.percent >= RULES.checkPass ? `You reached the ${RULES.checkPass}% threshold for the available lessons. Missed skills have been added to your review list.` : 'Missed skills have been added to your review list. Work on those before trying another assessment.') : 'Correct recall pushes the next review further away. Missed skills stay on your review list.'}</p>${resultRows(run.queue, run.answers)}<div class="modal-actions"><button class="primary" id="mrBack">Back to lessons →</button><button class="secondary" id="mrAgain">Review weak skills</button></div>`);
    document.getElementById('mrBack').onclick = () => { closeModal(); render(); };
    document.getElementById('mrAgain').onclick = () => { closeModal(); startReview(); };
    render();
  }

  function setTier(tier) {
    s.tier = tier === 'Higher' ? 'Higher' : 'Foundation';
    if (!lessons().some(l => l.id === s.lessonId)) s.lessonId = lessons()[0].id;
    view = 'lesson'; render();
  }
  function resetLesson() {
    const l = lesson();
    modal(`<h2>Reset this lesson?</h2><p>Clear the activities, practice levels and check scores for “${esc(l.title)}” on this device. Other lessons and your science progress stay saved.</p><button class="primary" id="mConfirmReset">Reset this lesson</button>`);
    document.getElementById('mConfirmReset').onclick = () => { delete s.lessons[l.id]; lessonSkills(l).forEach(sk => delete s.skills[sk.id]); view = 'lesson'; closeModal(); render(); };
  }

  function openProgressLesson(id, stage = 0) { setLesson(id); lessonState(s, id).stage = Math.max(0, Math.min(3, stage)); render(); }
  function reviewTopic(id) { if (!mathsTopics.some(t => t.id === id)) return; s.topicId = id; const list = lessons(); if (!list.some(l => l.id === s.lessonId)) s.lessonId = list[0].id; view = 'lesson'; closeModal(); render(); startReview(); }
  return { getProgress: () => mathsSummary(orderedLessons, mathsTopics, s), openProgressLesson, reviewTopic, setTopic, topic: () => s.topicId, render, openLessons, openMap, openSources, startReview, startAssessment, setTier, resetLesson, tier: () => s.tier, state: () => s, title: () => (view === 'lesson' ? lesson().title : view === 'review' ? 'Review' : 'Topic assessment'), reviewDue };
}
