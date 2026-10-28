// Offline-first queue for a signed-in student's attempts and lesson progress. Everything is written
// to localStorage first, so nothing is lost if the network drops or the tab closes; the queue is
// flushed in batches and each attempt carries a client id, so a re-sent batch is never double-counted.
export const QUEUE_KEY = 'crash-course-classroom-queue-v1';  // + ':' + student id, one queue per student
export const queueKey = studentId => `${QUEUE_KEY}:${studentId}`;
const BATCH = 100;

export function createSync({backend, studentId, storage = globalThis.localStorage, now = () => Date.now()}) {
  const read = () => {
    try { const q = JSON.parse(storage.getItem(queueKey(studentId))); if (q?.studentId === studentId) return q; } catch {}
    return {studentId, attempts: [], progress: {}, sent: {}, seq: 0};
  };
  const write = q => { try { storage.setItem(queueKey(studentId), JSON.stringify(q)); } catch {} };
  let flushing = null, failures = 0, lastError = null, lastSync = null;

  function addAttempt(e) {
    const q = read();
    q.seq = (q.seq || 0) + 1;
    q.attempts.push({...e, clientId: `${studentId.slice(0, 8)}-${now().toString(36)}-${q.seq.toString(36)}-${Math.random().toString(36).slice(2, 6)}`});
    write(q);
  }

  /** rows: [{subject, lessonId, stagesDone, started, complete, checkCorrect, checkTotal}] */
  function setProgress(rows) {
    const q = read();
    for (const r of rows) {
      const key = `${r.subject}|${r.lessonId}`, hash = [r.stagesDone, r.started, r.complete, r.checkCorrect, r.checkTotal].join(',');
      if (q.sent[key] === hash) { delete q.progress[key]; continue; }
      q.progress[key] = {...r, hash};
    }
    write(q);
  }

  function pending() { const q = read(); return q.attempts.length + Object.keys(q.progress).length; }

  async function flushOnce() {
    let q = read();
    while (q.attempts.length) {
      const batch = q.attempts.slice(0, BATCH);
      await backend.recordAttempts(batch);
      q = read();
      const done = new Set(batch.map(a => a.clientId));
      q.attempts = q.attempts.filter(a => !done.has(a.clientId));
      write(q);
    }
    const rows = Object.values(q.progress);
    if (rows.length) {
      await backend.saveProgress(rows);
      q = read();
      for (const r of rows) {
        const key = `${r.subject}|${r.lessonId}`;
        q.sent[key] = r.hash;
        if (q.progress[key]?.hash === r.hash) delete q.progress[key];
      }
      write(q);
    }
  }

  async function flush() {
    if (flushing) return flushing;
    flushing = (async () => {
      try { await flushOnce(); failures = 0; lastError = null; lastSync = now(); return true; }
      catch (err) { failures++; lastError = err?.message || String(err); return false; }
      finally { flushing = null; }
    })();
    return flushing;
  }

  return {addAttempt, setProgress, flush, pending, status: () => ({pending: pending(), failures, lastError, lastSync}), retryDelay: () => Math.min(60000, 2000 * 2 ** Math.min(failures, 5))};
}

/** Flatten a studio progress summary ({topics: [{lessons: [{id, stages, started, check}]}]}) into rows. */
export function progressRows(subject, summary) {
  const rows = [];
  for (const t of summary?.topics || []) for (const l of t.lessons || []) {
    const stagesDone = (l.stages || []).filter(Boolean).length;
    if (!l.started && !stagesDone) continue;
    const total = l.check?.total || 0, correct = Math.min(l.check?.correct || 0, total);
    rows.push({subject, lessonId: l.id, stagesDone, started: true, complete: (l.stages || []).length === 4 && l.stages.every(Boolean), checkCorrect: correct, checkTotal: total});
  }
  return rows;
}
