// Tiny hook the subject studios call when a student answers a question. It has no dependencies, so
// studios stay independent of the classroom feature: events go nowhere until the classroom module
// connects a sink (only while a student is signed in to a class).
const buffer = [];
let sink = null;

/** e: {subject, lessonId, questionId, stage, prompt, answer, correctAnswer, correct} */
export function track(e) {
  const ev = {...e, answeredAt: Date.now()};
  if (sink) { try { sink(ev); } catch {} return; }
  buffer.push(ev);
  if (buffer.length > 200) buffer.shift();
}

export function connectTracker(fn) {
  sink = fn;
  // Answers given in this page before the classroom module finished loading.
  while (buffer.length) { const ev = buffer.shift(); try { fn(ev); } catch {} }
}

export function disconnectTracker() { sink = null; buffer.length = 0; }

/** Plain text for a prompt or answer that may contain markup. */
export function plain(v) {
  if (v === null || v === undefined) return '';
  if (Array.isArray(v)) return v.map(plain).join(', ');
  if (typeof v === 'object') return JSON.stringify(v);
  return String(v).replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}
