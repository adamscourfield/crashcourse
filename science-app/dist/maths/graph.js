// Graphs: a static renderer for questions and diagrams, an interactive plotting input, and marking
// for plotted points and straight lines.
//
// Graph spec (JSON-safe, stored in items):
//   {xr:[lo,hi], yr:[lo,hi], xstep?, ystep?, xlabel?, ylabel?,
//    fns?:[{expr:'x^2 - 3', label?}],         curves y = f(x); expr uses x, numbers, + − × ÷ ^,
//                                               brackets, sin/cos/tan in degrees
//    polys?:[{pts:[[x,y],…], label?}],         straight-line segments (real-life graphs)
//    points?:[[x,y,label?]], shade?:[[a,b]], region?:[[x,y],…]  (polygon to shade)}
//
// Answer kinds:
//   {kind:'points', points:[[x,y],…], grid}     plot exactly these points (any order)
//   {kind:'line', m:{n,d}, c:{n,d}, grid}       plot at least two points on y = mx + c
// Raw answers are "x,y;x,y" — the same format as solution pairs.
import { F, num, fracMarkup, normalise } from './frac.js?v=20261023-maths-r9';

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const COL = { ink: '#e4ebf0', muted: '#b7c8d6', grid: '#b7c8d626', axis: '#b7c8d6', a: '#ed8b78', b: '#a8d5b5', c: '#f2d48a', cream: '#f8f6f2', navy: '#182e44' };

/* ───────── evaluator for curves we draw (never for student input) ───────── */
const D = Math.PI / 180;
export function fnOf(expr) {
  let e = String(expr).replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/').replace(/\s+/g, '');
  e = e.replace(/(sin|cos|tan|sqrt|cbrt)\(/g, '@$1(');
  for (let i = 0; i < 3; i++) e = e.replace(/(\d|x|\))(?=[x(@])/g, '$1*');
  e = e.replace(/\^/g, '**').replace(/(^|[(+\-*/])-/g, '$1(-1)*').replace(/@(sin|cos|tan|sqrt|cbrt)/g, 'T.$1');
  if (!/^[\dx+\-*/().]*$/.test(e.replace(/T\.(sin|cos|tan|sqrt|cbrt)/g, ''))) throw new Error('bad graph expression ' + expr);
  const T = { sin: d => Math.sin(d * D), cos: d => Math.cos(d * D), tan: d => Math.tan(d * D), sqrt: Math.sqrt, cbrt: Math.cbrt };
  const f = Function('x', 'T', `return (${e});`);
  return x => f(x, T);
}

/* ───────── rendering ───────── */
const GW = 600, GL = 54, GR = 584, GT = 14;
function frame(g) {
  const xr = g.xr, yr = g.yr, xs = g.xstep || 1, ys = g.ystep || 1;
  const plotW = GR - GL, unitX = plotW / (xr[1] - xr[0]);
  // keep squares square when units match, within sensible heights
  const H0 = g.height || (xs === ys ? Math.max(240, Math.min(440, ((yr[1] - yr[0]) / (xr[1] - xr[0])) * plotW)) : 300);
  const GB = GT + H0, X = x => GL + (x - xr[0]) * unitX, Y = y => GB - ((y - yr[0]) / (yr[1] - yr[0])) * (GB - GT);
  return { X, Y, GB, H: GB + 34, xs, ys, xr, yr };
}
const lab = (v, step) => num(Math.round(v / step) * step === v ? v : +v.toFixed(2));
export function graphSVG(g, extra = {}) {
  const fr = frame(g), { X, Y, GB, H, xs, ys, xr, yr } = fr;
  let s = '';
  const xEvery = Math.max(1, Math.ceil((xr[1] - xr[0]) / xs / 12)), yEvery = Math.max(1, Math.ceil((yr[1] - yr[0]) / ys / 10));
  for (let i = 0, x = Math.ceil(xr[0] / xs) * xs; x <= xr[1] + 1e-9; x += xs, i++) s += `<line x1="${X(x)}" y1="${GT}" x2="${X(x)}" y2="${GB}" stroke="${COL.grid}"/>`;
  for (let y = Math.ceil(yr[0] / ys) * ys; y <= yr[1] + 1e-9; y += ys) s += `<line x1="${GL}" y1="${Y(y)}" x2="${GR}" y2="${Y(y)}" stroke="${COL.grid}"/>`;
  if (g.region) s += `<polygon points="${g.region.map(([x, y]) => `${X(x)},${Y(y)}`).join(' ')}" fill="#a8d5b533" stroke="none"/>`;
  for (const [a, b] of g.shade || []) s += `<rect x="${X(Math.max(a, xr[0]))}" y="${GT}" width="${X(Math.min(b, xr[1])) - X(Math.max(a, xr[0]))}" height="${GB - GT}" fill="#a8d5b522"/>`;
  const y0 = yr[0] <= 0 && yr[1] >= 0 ? Y(0) : GB, x0 = xr[0] <= 0 && xr[1] >= 0 ? X(0) : GL;
  s += `<line x1="${GL}" y1="${y0}" x2="${GR}" y2="${y0}" stroke="${COL.axis}" stroke-width="1.5"/><line x1="${x0}" y1="${GT}" x2="${x0}" y2="${GB}" stroke="${COL.axis}" stroke-width="1.5"/>`;
  let k = 0;
  for (let x = Math.ceil(xr[0] / xs) * xs; x <= xr[1] + 1e-9; x += xs, k++) if (Math.abs(x) > 1e-9 && k % xEvery === 0) s += `<text x="${X(x)}" y="${y0 + 15}" text-anchor="middle" fill="${COL.muted}" font-size="11">${lab(x, xs)}</text>`;
  k = 0;
  for (let y = Math.ceil(yr[0] / ys) * ys; y <= yr[1] + 1e-9; y += ys, k++) if (Math.abs(y) > 1e-9 && k % yEvery === 0) s += `<text x="${x0 - 6}" y="${Y(y) + 4}" text-anchor="end" fill="${COL.muted}" font-size="11">${lab(y, ys)}</text>`;
  if (xr[0] <= 0 && yr[0] <= 0) s += `<text x="${x0 - 6}" y="${y0 + 15}" text-anchor="end" fill="${COL.muted}" font-size="11">0</text>`;
  if (g.xlabel) s += `<text x="${GR}" y="${H - 4}" text-anchor="end" fill="${COL.ink}" font-size="12">${esc(g.xlabel)}</text>`;
  if (g.ylabel) s += `<text x="${GL + 4}" y="${GT + 12}" fill="${COL.ink}" font-size="12">${esc(g.ylabel)}</text>`;
  const cid = 'gclip' + Math.random().toString(36).slice(2, 8);
  s += `<clipPath id="${cid}"><rect x="${GL}" y="${GT}" width="${GR - GL}" height="${GB - GT}"/></clipPath><g clip-path="url(#${cid})">`;
  const colours = [COL.a, COL.b, COL.c];
  (g.fns || []).forEach((fdef, i) => {
    const f = fnOf(fdef.expr);
    let d = '', pen = false;
    for (let j = 0; j <= 400; j++) {
      const x = xr[0] + ((xr[1] - xr[0]) * j) / 400, y = f(x);
      const ok = Number.isFinite(y) && y > yr[0] - (yr[1] - yr[0]) && y < yr[1] + (yr[1] - yr[0]);
      if (!ok) { pen = false; continue; }
      d += `${pen ? 'L' : 'M'}${X(x).toFixed(1)},${Y(y).toFixed(1)}`; pen = true;
    }
    s += `<path d="${d}" fill="none" stroke="${colours[i % 3]}" stroke-width="3"${fdef.dash ? ' stroke-dasharray="10 7"' : ''}/>`;
  });
  for (const v of g.vlines || []) s += `<line x1="${X(v.x)}" y1="${GT}" x2="${X(v.x)}" y2="${GB}" stroke="${COL.c}" stroke-width="3"${v.dash ? ' stroke-dasharray="10 7"' : ''}/>`;
  for (const R of g.circles || []) s += `<ellipse cx="${X(0)}" cy="${Y(0)}" rx="${X(R) - X(0)}" ry="${Y(0) - Y(R)}" fill="none" stroke="${COL.a}" stroke-width="3"/>`;
  (g.polys || []).forEach((p, i) => { s += `<polyline points="${p.pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(' ')}" fill="none" stroke="${colours[i % 3]}" stroke-width="3"/>`; });
  if (extra.line) { const [[x1, y1], [x2, y2]] = extra.line; if (x1 !== x2) { const m = (y2 - y1) / (x2 - x1); s += `<line x1="${X(xr[0])}" y1="${Y(y1 + m * (xr[0] - x1))}" x2="${X(xr[1])}" y2="${Y(y1 + m * (xr[1] - x1))}" stroke="${COL.cream}" stroke-width="2.5"/>`; } else s += `<line x1="${X(x1)}" y1="${GT}" x2="${X(x1)}" y2="${GB}" stroke="${COL.cream}" stroke-width="2.5"/>`; }
  s += '</g>';
  for (const v of g.vlines || []) if (v.label) s += `<text x="${X(v.x) + 6}" y="${GB - 8}" fill="${COL.c}" font-size="13" font-weight="600">${esc(v.label)}</text>`;
  [...(g.fns || []), ...(g.polys || [])].forEach((f, i) => { if (f.label) s += `<text x="${GR - 4}" y="${GT + 16 + i * 17}" text-anchor="end" fill="${colours[i % 3]}" font-size="13" font-weight="600">${esc(f.label)}</text>`; });
  for (const [x, y, l] of g.points || []) s += `<circle cx="${X(x)}" cy="${Y(y)}" r="5.5" fill="${COL.cream}" stroke="${COL.navy}" stroke-width="2"/>${l ? `<text x="${X(x) + 8}" y="${Y(y) - 8}" fill="${COL.cream}" font-size="13">${esc(l)}</text>` : ''}`;
  for (const [x, y] of extra.plotted || []) s += `<path d="M${X(x) - 6},${Y(y) - 6}L${X(x) + 6},${Y(y) + 6}M${X(x) - 6},${Y(y) + 6}L${X(x) + 6},${Y(y) - 6}" stroke="${COL.c}" stroke-width="3" stroke-linecap="round"/>`;
  const desc = g.alt || [((g.fns || []).map(f => (f.label || 'y = ' + f.expr) + (f.dash ? ' (dashed: not included)' : '')).join(', ')), (g.vlines || []).map(v => `x = ${v.x}${v.dash ? ' (dashed: not included)' : ''}`).join(', '), (g.circles || []).map(R => `circle centre (0, 0) radius ${R}`).join(', '), (g.polys || []).map(p => (p.label ? p.label + ': ' : '') + 'line segments through ' + p.pts.map(q => `(${q[0]}, ${q[1]})`).join(', ')).join('; '), (g.points || []).length ? 'marked points ' + g.points.map(p => `(${p[0]}, ${p[1]})`).join(', ') : ''].filter(Boolean).join('; ');
  const plotted = (extra.plotted || []).length ? `; your points: ${extra.plotted.map(p => `(${num(p[0])}, ${num(p[1])})`).join(', ')}` : '';
  return `<svg viewBox="0 0 ${GW} ${H}" class="mviz mgraph ${extra.cls || ''}" role="img" aria-label="${esc(`Graph with x from ${xr[0]} to ${xr[1]} and y from ${yr[0]} to ${yr[1]}${desc ? '; ' + desc : ''}${plotted}`)}" data-xr="${xr.join(',')}" data-yr="${yr.join(',')}">${s}</svg>`;
}

/* ───────── plotted-point answers ───────── */
export function parsePoints(raw) {
  const s = normalise(raw).replace(/[()]/g, '');
  if (!s) return [];
  const out = [];
  for (const row of s.split(';').map(t => t.trim()).filter(Boolean)) {
    const m = row.match(/^(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)$/);
    if (!m) return null;
    out.push([Number(m[1]), Number(m[2])]);
  }
  return out;
}
const same = (p, q) => Math.abs(p[0] - q[0]) < 1e-9 && Math.abs(p[1] - q[1]) < 1e-9;
const uniq = pts => pts.filter((p, i) => pts.findIndex(q => same(p, q)) === i);
export function markPoints(spec, raw) {
  const got = parsePoints(raw);
  if (got === null) return { status: 'invalid', code: 'format-points' };
  if (!got.length) return { status: 'invalid', code: 'empty' };
  const g = uniq(got), want = spec.points;
  const missing = want.filter(w => !g.some(p => same(p, w))), extra = g.filter(p => !want.some(w => same(p, w)));
  if (!missing.length && !extra.length) return { status: 'correct' };
  const swapped = extra.length && extra.every(p => want.some(w => same([p[1], p[0]], w)));
  return { status: 'wrong', code: 'points', missing, extra, swapped };
}
export function markLine(spec, raw) {
  const got = parsePoints(raw);
  if (got === null) return { status: 'invalid', code: 'format-points' };
  const g = uniq(got);
  if (g.length < 2) return { status: 'invalid', code: 'line-two-points' };
  const m = spec.m.n / spec.m.d, c = spec.c.n / spec.c.d;
  const on = ([x, y]) => Math.abs(m * x + c - y) < 1e-9;
  if (g.every(on)) return { status: 'correct' };
  const [[x1, y1], [x2, y2]] = g;
  const gm = x1 === x2 ? null : (y2 - y1) / (x2 - x1), gc = gm === null ? null : y1 - gm * x1;
  const collinear = gm !== null && g.every(([x, y]) => Math.abs(gm * x + gc - y) < 1e-9);
  return { status: 'wrong', code: 'line', gm: collinear ? gm : null, gc: collinear ? gc : null, off: g.filter(p => !on(p)).length };
}
/** Feedback for a wrong plotted line, comparing gradient and intercept. */
export function lineFeedback(spec, res) {
  const m = spec.m.n / spec.m.d, c = spec.c.n / spec.c.d;
  if (res.gm === null) return `Your points are not all in a straight line, or ${res.off} of them ${res.off === 1 ? 'is' : 'are'} not on the line. Work out y for two or three x values, then plot those points.`;
  if (Math.abs(res.gm - m) < 1e-9) return `Your line has the right gradient (${fmtNum(m)}) but crosses the y-axis at ${fmtNum(res.gc)}, not ${fmtNum(c)}.`;
  if (Math.abs(res.gm + m) < 1e-9) return `Your line slopes the wrong way: the gradient should be ${fmtNum(m)}, not ${fmtNum(res.gm)}.`;
  if (Math.abs(res.gc - c) < 1e-9) return `Your line crosses the y-axis at the right place (${fmtNum(c)}) but its gradient is ${fmtNum(res.gm)}, not ${fmtNum(m)}: for each 1 across, the line goes ${fmtNum(Math.abs(m))} ${m >= 0 ? 'up' : 'down'}.`;
  return `Your line is y = ${fmtLine(res.gm, res.gc)}. Check the gradient (${fmtNum(m)}) and where it crosses the y-axis (${fmtNum(c)}).`;
}
export function pointsFeedback(res) {
  if (res.swapped) return 'Some points have x and y the wrong way round: the first number is across (x), the second is up (y).';
  const bits = [];
  if (res.missing.length) bits.push(`${res.missing.length} point${res.missing.length === 1 ? '' : 's'} missing`);
  if (res.extra.length) bits.push(`${res.extra.length} point${res.extra.length === 1 ? ' does' : 's do'} not belong`);
  return bits.join('; ') + '. Check each point against the table or the conditions.';
}
const fmtNum = v => { const f = toFrac(v); return f.d === 1 ? num(f.n) : fracMarkup(f); };
function toFrac(v) { for (let d = 1; d <= 12; d++) { const n = Math.round(v * d); if (Math.abs(n / d - v) < 1e-9) return F(n, d); } return F(Math.round(v * 100), 100); }
export function fmtLine(m, c) {
  const mf = toFrac(m), cf = toFrac(c);
  const mt = mf.n === 0 ? '' : `${mf.n < 0 ? '−' : ''}${mf.d === 1 ? (Math.abs(mf.n) === 1 ? '' : Math.abs(mf.n)) : `{${Math.abs(mf.n)}/${mf.d}}`}x`;
  const ct = cf.n === 0 ? (mt ? '' : '0') : `${mt ? (cf.n < 0 ? ' − ' : ' + ') : cf.n < 0 ? '−' : ''}${cf.d === 1 ? Math.abs(cf.n) : `{${Math.abs(cf.n)}/${cf.d}}`}`;
  return mt + ct;
}
export const pointsMarkup = pts => pts.map(([x, y]) => `(${num(x)}, ${num(y)})`).join(', ');
export const lineMarkup = spec => `y = ${fmtLine(spec.m.n / spec.m.d, spec.c.n / spec.c.d)}`;

/* ───────── interactive input ───────── */
export function graphInputHTML(spec, raw, locked) {
  const pts = parsePoints(raw) || [];
  const isLine = spec.kind === 'line', grid = spec.grid;
  const line = isLine && pts.length >= 2 ? [pts[0], pts.find(p => !same(p, pts[0])) || pts[1]] : null;
  const fig = graphSVG(grid, { plotted: pts, line, cls: locked ? '' : 'mgraph-live' });
  if (locked) return `<div class="mgraph-in">${fig}</div><input type="hidden" id="mText" value="${esc(raw || '')}">`;
  return `<div class="mgraph-in" data-ginput>${fig}<p class="micro-note">${isLine ? 'Tap the grid to plot at least two points on the line; the line is drawn through your first two points.' : 'Tap the grid to plot each point; tap a point again to remove it.'} Or type coordinates:</p>
<div class="mgraph-form"><label>x <input class="lab-input" data-gx inputmode="text" autocomplete="off" aria-label="x coordinate"></label><label>y <input class="lab-input" data-gy inputmode="text" autocomplete="off" aria-label="y coordinate"></label><button type="button" class="secondary" data-gadd>Add point</button><button type="button" class="secondary" data-gclear>Clear</button></div>
<ul class="mgraph-list" aria-live="polite">${pts.map(([x, y], i) => `<li>(${num(x)}, ${num(y)}) <button type="button" class="text-button" data-gdel="${i}" aria-label="Remove point (${num(x)}, ${num(y)})">Remove</button></li>`).join('')}</ul>
<input type="hidden" id="mText" value="${esc(raw || '')}"></div><button class="secondary" id="mSubmit">Check answer</button>`;
}
/** Wire up an input rendered by graphInputHTML inside root. onChange(raw) is called after every edit. */
export function bindGraphInput(root, spec, onChange) {
  const box = root.querySelector('[data-ginput]');
  if (!box) return;
  const hidden = box.querySelector('#mText');
  const snap = spec.grid.snap || 1;
  const pts = () => parsePoints(hidden.value) || [];
  const set = list => { hidden.value = list.map(([x, y]) => `${x},${y}`).join(';'); onChange(hidden.value); };
  const toggle = p => { const cur = pts(), i = cur.findIndex(q => same(q, p)); set(i >= 0 ? cur.filter((_, k) => k !== i) : [...cur, p]); };
  const svg = box.querySelector('svg');
  svg.addEventListener('click', e => {
    const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
    const loc = pt.matrixTransform(svg.getScreenCTM().inverse());
    const fr = frame(spec.grid);
    const x = spec.grid.xr[0] + ((loc.x - GL) / (GR - GL)) * (spec.grid.xr[1] - spec.grid.xr[0]);
    const y = spec.grid.yr[0] + ((fr.GB - loc.y) / (fr.GB - GT)) * (spec.grid.yr[1] - spec.grid.yr[0]);
    const snx = spec.grid.snapX ?? snap, sny = spec.grid.snapY ?? snap;
    const sx = Math.round(x / snx) * snx, sy = Math.round(y / sny) * sny;
    if (sx < spec.grid.xr[0] - 1e-9 || sx > spec.grid.xr[1] + 1e-9 || sy < spec.grid.yr[0] - 1e-9 || sy > spec.grid.yr[1] + 1e-9) return;
    toggle([+sx.toFixed(4), +sy.toFixed(4)]);
  });
  box.querySelector('[data-gadd]').addEventListener('click', () => {
    const xv = normalise(box.querySelector('[data-gx]').value), yv = normalise(box.querySelector('[data-gy]').value);
    if (!/^-?\d+(\.\d+)?$/.test(xv) || !/^-?\d+(\.\d+)?$/.test(yv)) { onChange(hidden.value, 'Type a number for x and for y, such as 2 and −3.'); return; }
    const p = [Number(xv), Number(yv)];
    if (!pts().some(q => same(q, p))) set([...pts(), p]); else onChange(hidden.value);
  });
  box.querySelector('[data-gclear]').addEventListener('click', () => set([]));
  box.querySelectorAll('[data-gdel]').forEach(b => b.addEventListener('click', () => set(pts().filter((_, k) => k !== Number(b.dataset.gdel)))));
}
