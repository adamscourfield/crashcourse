// One pending transition across both studios. Answers are saved before scheduling.
export function createAdvanceClock({schedule = setTimeout, unschedule = clearTimeout} = {}) {
  let timer, generation = 0;
  function cancel() { generation++; if (timer !== undefined) unschedule(timer); timer = undefined; }
  return {cancel, start({delay, guard, next}) {
    cancel(); const ticket = generation;
    timer = schedule(() => { timer = undefined; if (ticket === generation && guard()) next(); }, delay);
  }};
}
const clock = createAdvanceClock();
export function cancelQuestionAdvance() {
  clock.cancel();
  if (typeof document !== 'undefined') document.querySelectorAll('[data-flow-pause]').forEach(b => b.remove());
}
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', cancelQuestionAdvance);
  document.addEventListener('question-flow:cancel', cancelQuestionAdvance);
}
export function questionFlow(button, {answered, automatic = true, delay = 2400, next, guard = () => true}) {
  cancelQuestionAdvance();
  button.hidden = !answered;
  if (!answered || !automatic) return;
  const pause = document.createElement('button');
  pause.type = 'button'; pause.className = 'text-button flow-pause';
  pause.dataset.flowPause = ''; pause.textContent = 'Stay here';
  pause.setAttribute('aria-label', 'Pause automatic next question');
  button.before(pause);
  pause.onclick = () => { cancelQuestionAdvance(); button.focus(); };
  const anchor = button.closest('.activity');
  clock.start({delay, guard: () => button.isConnected && !document.hidden && !document.querySelector('dialog[open]') && guard(), next: () => {
    cancelQuestionAdvance(); next();
    const target = anchor?.querySelector('input:not([disabled]), h2');
    if (target) { if (target.tagName === 'H2') target.tabIndex = -1; target.focus({preventScroll: true}); }
  }});
}
