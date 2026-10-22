// Maths progress model. Pure functions only: the studio UI calls these and saves the result.
//
// Mastery is earned from sustained accuracy on freshly generated items, not from answering
// a fixed list once:
//   • each skill climbs a ladder of levels; 2 unassisted correct in a row moves up a level;
//   • 2 wrong in a row (above level 1) steps back down a level, after a worked solution;
//   • at the top level for the student's tier, 4 of the last 5 unassisted attempts must be
//     correct (minimum 4 attempts) for the skill to count as practised;
//   • a mixed round then interleaves all lesson skills: 4 of the last 5 correct;
//   • the independent check is freshly generated, unassisted, first answers count, 80% to pass.
// Assisted items (attempted straight after viewing a worked example) never raise a level.
export const MATHS_KEY = 'crash-course-maths-v1';
export const DAY = 86400000;
export const RULES = { promoteStreak: 2, demoteRun: 2, topWindow: 5, topNeeded: 4, mixedWindow: 5, mixedNeeded: 4, checkPass: 80 };

export function freshMaths() {
  return { version: 1, tier: 'Foundation', topicId: null, lessonId: null, lastLessonByTopic: {}, lessons: {}, skills: {}, runs: {} };
}

export function restoreMaths(raw) {
  const s = freshMaths();
  try {
    const v = JSON.parse(raw);
    if (v && v.version === 1) {
      for (const k of ['lessons', 'skills', 'runs', 'lastLessonByTopic'])
        s[k] = v[k] && typeof v[k] === 'object' && !Array.isArray(v[k]) ? v[k] : {};
      s.tier = v.tier === 'Higher' ? 'Higher' : 'Foundation';
      s.topicId = typeof v.topicId === 'string' ? v.topicId : null;
      s.lessonId = typeof v.lessonId === 'string' ? v.lessonId : null;
      if (v.view === 'review' || v.view === 'assessment') s.view = v.view;
    }
  } catch { /* fresh state */ }
  return s;
}

export function lessonState(s, id) {
  const d = { stage: 0, card: 0, seen: [], widget: {}, widgetDone: false, practice: { index: 0, item: null, answer: null, assisted: false }, mixed: { log: [], item: null, answer: null, done: false }, check: null, history: [], complete: false, best: 0 };
  const p = s.lessons[id];
  if (!p || typeof p !== 'object' || Array.isArray(p)) return (s.lessons[id] = d);
  for (const [k, v] of Object.entries(d)) if (p[k] === undefined) p[k] = v;
  return p;
}

export function skillState(s, id) {
  const d = { level: 1, streak: 0, wrongRun: 0, log: [], practised: false, correct: 0, wrong: 0, interval: 0, due: null, needsReview: false };
  const k = s.skills[id];
  if (!k || typeof k !== 'object' || Array.isArray(k)) return (s.skills[id] = d);
  for (const [key, v] of Object.entries(d)) if (k[key] === undefined) k[key] = v;
  return k;
}

export const levelsFor = (skill, tier) => skill.levels.filter(l => tier === 'Higher' || !l.higher);
export const topLevel = (skill, tier) => levelsFor(skill, tier).length;

/** Top-level attempts since the student first reached the top level. */
function topAttempts(k, top) {
  const out = [];
  for (let i = k.log.length - 1; i >= 0 && k.log[i].l === top; i--) out.unshift(k.log[i]);
  return out;
}

export function topWindowMet(k, top) {
  const recent = topAttempts(k, top).slice(-RULES.topWindow);
  return recent.length >= RULES.topNeeded && recent.filter(e => e.c && !e.a).length >= RULES.topNeeded;
}

/** Apply one practice attempt. Returns {event}: 'up' | 'down' | 'practised' | null. */
export function recordPractice(k, skill, tier, { correct, assisted = false }, now = Date.now()) {
  const top = topLevel(skill, tier);
  k.level = Math.min(Math.max(1, k.level), top);
  k.log.push({ l: k.level, c: !!correct, a: !!assisted, t: now });
  if (k.log.length > 60) k.log = k.log.slice(-60);
  correct ? k.correct++ : k.wrong++;
  let event = null;
  if (correct) {
    k.wrongRun = 0;
    if (assisted) k.streak = 0;
    else {
      k.streak++;
      if (k.level < top && k.streak >= RULES.promoteStreak) { k.level++; k.streak = 0; event = 'up'; }
      else if (k.level === top && !isPractised(k, skill, tier) && topWindowMet(k, top)) { k.practised = true; k.practisedAt = top; event = 'practised'; }
    }
  } else {
    k.streak = 0;
    k.wrongRun++;
    if (k.wrongRun >= RULES.demoteRun && k.level > 1) { k.level--; k.wrongRun = 0; event = 'down'; }
  }
  return { event };
}

/** Practised at the top level of the current tier (Foundation practice does not cover added Higher levels). */
export const isPractised = (k, skill, tier) => !!k?.practised && (k.practisedAt ?? 0) >= topLevel(skill, tier);

/** Progress through the current level, 0..1, for the ladder display. */
export function levelProgress(k, skill, tier) {
  const top = topLevel(skill, tier);
  if (isPractised(k, skill, tier)) return 1;
  if (k.level < top) return Math.min(1, k.streak / RULES.promoteStreak);
  const recent = topAttempts(k, top).slice(-RULES.topWindow);
  return Math.min(1, recent.filter(e => e.c && !e.a).length / RULES.topNeeded);
}

export function mixedMet(log) {
  const recent = log.slice(-RULES.mixedWindow);
  return recent.length >= RULES.mixedNeeded && recent.filter(e => e.c && !e.a).length >= RULES.mixedNeeded;
}

export function gradeRun(items, answers, markFn) {
  const correct = items.filter(it => answers[it.id] !== undefined && markFn(it.answer, answers[it.id]).status === 'correct').length;
  const attempted = items.filter(it => answers[it.id] !== undefined).length;
  return { correct, attempted, total: items.length, percent: items.length ? Math.round((correct / items.length) * 100) : 0, finished: attempted === items.length };
}

/** Review scheduling, matching the science studio intervals (1, 3, 9, 21 days). */
export function scheduleFirstReview(k, now = Date.now()) {
  if (!k.interval && !k.needsReview) { k.interval = 1; k.due = now + DAY; }
}
export function recordRecall(k, correct, now = Date.now()) {
  if (correct) {
    k.correct++;
    k.needsReview = false;
    k.interval = k.interval ? Math.min(k.interval * 3, 21) : 1;
    k.due = now + k.interval * DAY;
  } else {
    k.wrong++;
    k.needsReview = true;
    k.interval = 0;
    k.due = now;
  }
}
/** A wrong first answer in an independent check or assessment flags the skill for recall. */
export function flagForRecall(k, now = Date.now()) { k.needsReview = true; k.interval = 0; k.due = now; }

export function dueSkills(s, skillIds, now = Date.now()) {
  return skillIds.filter(id => { const k = s.skills[id]; return k && (k.needsReview || (k.due !== null && k.due <= now)); });
}

export function lessonDone(p, lesson, tier, s) {
  const skills = lesson.skills.filter(sk => tier === 'Higher' || !sk.higherOnly);
  return {
    discover: lesson.learn.every((_, i) => p.seen.includes(i)),
    investigate: p.widgetDone,
    practise: skills.every(sk => isPractised(s.skills[sk.id], sk, tier)) && (skills.length < 2 || p.mixed.done),
    check: p.best >= RULES.checkPass,
  };
}
