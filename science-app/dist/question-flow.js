// One pending transition across both studios. Answers are saved before scheduling.
export function createAdvanceClock({schedule = (...args) => setTimeout(...args), unschedule = id => clearTimeout(id)} = {}) {
  let timer, generation = 0;
  function cancel() { generation++; if (timer !== undefined) unschedule(timer); timer = undefined; }
  return {cancel, start({delay, guard, next}) {
    cancel(); const ticket = generation;
    timer = schedule(() => { timer = undefined; if (ticket === generation && guard()) next(); }, delay);
    timer?.unref?.();
  }};
}
const clock = createAdvanceClock();
export function cancelQuestionAdvance() {
  clock.cancel();
  if (typeof document !== 'undefined') document.querySelectorAll('[data-flow-pause], [data-flow-status], [data-flow-route]').forEach(b => b.remove());
}
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', cancelQuestionAdvance);
  document.addEventListener('question-flow:cancel', cancelQuestionAdvance);
}
const FLOW_KEY = 'crash-course-auto-navigation';
function autoEnabled() { try { return localStorage.getItem(FLOW_KEY) !== 'paused'; } catch { return true; } }
function setAuto(enabled) { try { localStorage.setItem(FLOW_KEY, enabled ? 'on' : 'paused'); } catch {} }
export function questionFlow(button, {answered, automatic = true, delay = 2400, next, guard = () => true, label = 'Next question'}) {
  cancelQuestionAdvance();
  button.hidden = !answered;
  if (!answered || !automatic) return;
  const enabled = autoEnabled();
  const pause = document.createElement('button');
  pause.type = 'button'; pause.className = 'text-button flow-pause';
  pause.dataset.flowPause = ''; pause.textContent = enabled ? 'Pause auto' : 'Resume auto';
  pause.setAttribute('aria-label', enabled ? 'Pause automatic lesson navigation' : 'Resume automatic lesson navigation');
  const status = document.createElement('span'); status.className = 'flow-status'; status.dataset.flowStatus = '';
  status.textContent = enabled ? `${label} automatically · ${Math.ceil(delay / 1000)}s` : 'Automatic navigation paused';
  const workspace=button.closest('.workspace');
  if(workspace && typeof document.createElement('div').append==='function'){
    const route=document.createElement('div');route.className='flow-route';route.dataset.flowRoute='';
    route.setAttribute('role','region');route.setAttribute('aria-label','Lesson route');route.append(status,pause);workspace.before(route);
  }else{button.before(status);button.before(pause);}
  pause.onclick = () => { setAuto(!enabled); questionFlow(button, {answered, automatic, delay, next, guard, label}); };
  if (!enabled) return;
  const anchor = button.closest('.activity');
  clock.start({delay, guard: () => button.isConnected && !document.hidden && !document.querySelector('dialog[open]') && guard(), next: () => {
    // Never carry a learner away while composing writing or selecting text.
    if (document.activeElement?.matches?.('textarea, [contenteditable="true"]') || document.getSelection?.()?.toString()) {
      clock.cancel();status.textContent='Paused while you write or select text';pause.textContent='Resume auto';pause.setAttribute('aria-label','Resume automatic lesson navigation');pause.onclick=()=>questionFlow(button,{answered,automatic,delay,next,guard,label});return;
    }
    cancelQuestionAdvance(); next();
    const currentAnchor = (button.id && document.getElementById?.(button.id)?.closest('.activity')) || anchor;
    const target = currentAnchor?.querySelector('input:not([disabled]), h2');
    if (target) { if (target.tagName === 'H2') target.tabIndex = -1; target.focus({preventScroll: true}); showFlowTarget(target); }
  }});
}

// Guided navigation uses reading time, never answers on a learner's behalf.
export function readingDelay(text) {
  const words = String(text || '').replace(/<[^>]*>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  return Math.min(120000, Math.max(12000, Math.ceil(words / 170 * 60000)));
}
export function showFlowTarget(target) {
  if(typeof window==='undefined'||!target?.getBoundingClientRect)return;
  const r=target.getBoundingClientRect();
  if(r.top>window.innerHeight*.75||r.bottom<0)target.scrollIntoView?.({block:'start',behavior:'auto'});
}
export function guidedFlow(button, {text = '', label = 'Next step', next, guard = () => true, delay} = {}) {
  button.textContent = label + ' →';
  const workspace=button.closest('.workspace');
  showFlowTarget(/evidence|model view|model activity/i.test(label)?workspace?.querySelector('#hView, #gScene'):button.closest('.activity')?.querySelector('h2'));
  questionFlow(button, {answered: true, delay: delay ?? readingDelay(text), next, guard, label});
}
