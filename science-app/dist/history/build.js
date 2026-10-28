// Shared builders for History lessons. A lesson has cards (Discover), an evidence explorer with
// several views that must all be opened (Investigate) plus challenge tasks, practice questions with
// retries and explanations, and an independent check (80% to complete).
export const Q = (id, prompt, options, answer, why, concept) => ({id: 'hist.' + id, prompt, options, answer, why, concept: 'hist.' + concept});
export const view = {
  timeline: (title, events) => ({kind: 'timeline', title, events}),
  people: (title, rows) => ({kind: 'people', title, rows}),
  factors: (title, rows) => ({kind: 'factors', title, rows}),
  source: (title, content, evaluation) => ({kind: 'source', title, content, evaluation}),
};
export function lesson(topicId, slug, title, refs, cards, mainView, views, tasks, practice, check, extra = {}) {
  return {id: 'history.' + slug, topicId, title, refs, cards, views: [mainView, ...views], tasks, practice, check, minutes: 30, ...extra};
}
