// Render maths markup to accessible HTML.
//   {3/4}        stacked fraction          {2 1/3}  mixed number
//   {a × b/c}    stacked with expressions  x^2      superscript power
//   x_{n+1}, x_n subscript
// Screen readers get a linear reading ("3 over 4", "2 and 1 over 3", "squared").
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function frac(inner) {
  const slash = inner.lastIndexOf('/');
  let top = inner.slice(0, slash).trim();
  const bottom = inner.slice(slash + 1).trim();
  let whole = '';
  const m = top.match(/^(\d+)\s+(\d+)$/);
  if (m) { whole = m[1]; top = m[2]; }
  const spoken = `${whole ? whole + ' and ' : ''}${top} over ${bottom}`;
  return `<span class="mx">${whole ? `<span class="mx-w" aria-hidden="true">${whole}</span>` : ''}<span class="fr" aria-hidden="true"><span class="fr-n">${top}</span><span class="fr-d">${bottom}</span></span><span class="sr">${spoken}</span></span>`;
}

const POW = { 2: 'squared', 3: 'cubed' };
export function mathHTML(markup) {
  let s = esc(markup);
  s = s.replace(/\^\{([^{}]+)\}/g, (_, k) => `<sup aria-hidden="true">${k}</sup><span class="sr"> to the power ${k.replace('/', ' over ')}</span>`);
  s = s.replace(/\{([^{}]+\/[^{}]+)\}/g, (_, inner) => frac(inner));
  // subscripts after fractions, so {3/x_n} still reads as one fraction
  s = s.replace(/_(?:\{([^{}]+)\}|([A-Za-z0-9]))/g, (_, a, b) => `<sub aria-hidden="true">${a ?? b}</sub><span class="sr"> sub ${a ?? b}</span>`);
  s = s.replace(/\^(\d+)/g, (_, k) => `<sup aria-hidden="true">${k}</sup><span class="sr"> ${POW[k] || 'to the power ' + k}</span>`);
  return s;
}

/** Plain-text version for titles, aria-labels and results. */
export function mathText(markup) {
  return String(markup).replace(/\{(\d+)\s+(\d+)\/(\d+)\}/g, '$1 $2/$3').replace(/\{([^{}]+)\/([^{}]+)\}/g, '$1/$2').replace(/_\{([^{}]+)\}/g, '_$1').replace(/\^2\b/g, '²').replace(/\^3\b/g, '³');
}
export { esc };
