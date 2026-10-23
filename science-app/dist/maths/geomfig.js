// Geometry figures for questions and worked examples. A figure is a JSON-safe spec drawn in a
// 600-wide viewBox, so generated items can carry their own diagram and survive saving:
//   { h, alt, polys:[{pts, fill?, dash?}], segs:[{a, b, dash?, w?}], circles:[{c, r, dash?}],
//     sectors:[{c, r, a1, a2, fill?}], angles:[{v, p, q, label?, right?, r?}], ticks:[{a, b, n}],
//     par:[{a, b, n}], labels:[{at, t, anchor?, size?, colour?}], dots:[[x, y]], dims:[{a, b, t, off?}] }
// Points are [x, y] in SVG units (y down). Angles in sectors are degrees anticlockwise from east.
import { esc, mathHTML } from './render.js?v=20261023-maths-r9';

const COL = { line: '#e4ebf0', accent: '#ed8b78', muted: '#b7c8d6', fill: '#a8d5b522', green: '#a8d5b5', cream: '#f8f6f2' };
const W = 600;
const P = ([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`;
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const len = v => Math.hypot(v[0], v[1]);
const unit = v => { const l = len(v) || 1; return [v[0] / l, v[1] / l]; };
const pt = (c, r, deg) => [c[0] + r * Math.cos((deg * Math.PI) / 180), c[1] - r * Math.sin((deg * Math.PI) / 180)];

function angleMark({ v, p, q, label, right, r = 30 }) {
  const u1 = unit(sub(p, v)), u2 = unit(sub(q, v));
  if (right) {
    const s = 16, a = [v[0] + u1[0] * s, v[1] + u1[1] * s], b = [v[0] + u2[0] * s, v[1] + u2[1] * s], c = [a[0] + u2[0] * s, a[1] + u2[1] * s];
    return `<path d="M${P(a)}L${P(c)}L${P(b)}" fill="none" stroke="${COL.accent}" stroke-width="2"/>`;
  }
  const a1 = Math.atan2(-u1[1], u1[0]), a2 = Math.atan2(-u2[1], u2[0]);
  let d = a2 - a1; while (d <= -Math.PI) d += 2 * Math.PI; while (d > Math.PI) d -= 2 * Math.PI;
  const s = [v[0] + u1[0] * r, v[1] + u1[1] * r], e = [v[0] + u2[0] * r, v[1] + u2[1] * r];
  const sweep = d > 0 ? 0 : 1;
  let out = `<path d="M${P(s)}A${r},${r} 0 0 ${sweep} ${P(e)}" fill="none" stroke="${COL.accent}" stroke-width="2"/>`;
  if (label) {
    const mid = a1 + d / 2, lr = r + 16 + Math.max(0, String(label).length - 3) * 3, at = [v[0] + lr * Math.cos(mid), v[1] - lr * Math.sin(mid)];
    out += `<text x="${at[0].toFixed(1)}" y="${(at[1] + 5).toFixed(1)}" text-anchor="middle" fill="${COL.cream}" font-size="15">${esc(label)}</text>`;
  }
  return out;
}
function tickMarks({ a, b, n = 1 }) {
  const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], u = unit(sub(b, a)), nrm = [-u[1], u[0]];
  let s = '';
  for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 6, c = [m[0] + u[0] * o, m[1] + u[1] * o]; s += `<line x1="${(c[0] + nrm[0] * 7).toFixed(1)}" y1="${(c[1] + nrm[1] * 7).toFixed(1)}" x2="${(c[0] - nrm[0] * 7).toFixed(1)}" y2="${(c[1] - nrm[1] * 7).toFixed(1)}" stroke="${COL.accent}" stroke-width="2"/>`; }
  return s;
}
function parMarks({ a, b, n = 1 }) {
  const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], u = unit(sub(b, a)), nrm = [-u[1], u[0]];
  let s = '';
  for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 9, c = [m[0] + u[0] * o, m[1] + u[1] * o], tail1 = [c[0] - u[0] * 8 + nrm[0] * 6, c[1] - u[1] * 8 + nrm[1] * 6], tail2 = [c[0] - u[0] * 8 - nrm[0] * 6, c[1] - u[1] * 8 - nrm[1] * 6]; s += `<path d="M${P(tail1)}L${P(c)}L${P(tail2)}" fill="none" stroke="${COL.accent}" stroke-width="2"/>`; }
  return s;
}
function dim({ a, b, t, off = 18 }) {
  const u = unit(sub(b, a)), nrm = [u[1], -u[0]], m = [(a[0] + b[0]) / 2 + nrm[0] * off, (a[1] + b[1]) / 2 + nrm[1] * off];
  return `<text x="${m[0].toFixed(1)}" y="${(m[1] + 5).toFixed(1)}" text-anchor="middle" fill="${COL.cream}" font-size="15">${esc(t)}</text>`;
}
export function figSVG(f) {
  if (!f) return '';
  const h = f.h || 320;
  let s = '';
  for (const p of f.sectors || []) {
    const A = pt(p.c, p.r, p.a1), B = pt(p.c, p.r, p.a2), large = ((p.a2 - p.a1 + 360) % 360) > 180 ? 1 : 0;
    s += `<path d="M${P(p.c)}L${P(A)}A${p.r},${p.r} 0 ${large} 0 ${P(B)}Z" fill="${p.fill || COL.fill}" stroke="${COL.line}" stroke-width="2.5"/>`;
  }
  for (const p of f.polys || []) s += `<polygon points="${p.pts.map(P).join(' ')}" fill="${p.fill || COL.fill}" stroke="${COL.line}" stroke-width="2.5"${p.dash ? ' stroke-dasharray="8 6"' : ''}/>`;
  for (const c of f.circles || []) s += `<circle cx="${c.c[0]}" cy="${c.c[1]}" r="${c.r}" fill="${c.fill || 'none'}" stroke="${COL.line}" stroke-width="2.5"${c.dash ? ' stroke-dasharray="8 6"' : ''}/>`;
  for (const e of f.ellipses || []) s += `<ellipse cx="${e.c[0]}" cy="${e.c[1]}" rx="${e.rx}" ry="${e.ry}" fill="${e.fill || 'none'}" stroke="${COL.line}" stroke-width="2.5"${e.dash ? ' stroke-dasharray="8 6"' : ''}/>`;
  for (const g of f.segs || []) s += `<line x1="${g.a[0]}" y1="${g.a[1]}" x2="${g.b[0]}" y2="${g.b[1]}" stroke="${g.colour === 'accent' ? COL.accent : COL.line}" stroke-width="${g.w || 2.5}"${g.dash ? ' stroke-dasharray="8 6"' : ''}/>`;
  for (const a of f.angles || []) s += angleMark(a);
  for (const t of f.ticks || []) s += tickMarks(t);
  for (const t of f.par || []) s += parMarks(t);
  for (const d of f.dims || []) s += dim(d);
  for (const d of f.dots || []) s += `<circle cx="${d[0]}" cy="${d[1]}" r="4.5" fill="${COL.cream}"/>`;
  for (const l of f.labels || []) s += `<text x="${l.at[0]}" y="${l.at[1]}" text-anchor="${l.anchor || 'middle'}" fill="${l.colour === 'accent' ? COL.accent : COL.cream}" font-size="${l.size || 16}"${l.italic ? ' font-style="italic"' : ''}>${esc(l.t)}</text>`;
  return `<svg viewBox="0 0 ${W} ${h}" class="mviz mgeo" role="img" aria-label="${esc(f.alt || 'Geometry diagram')}">${s}${f.note ? `<text x="${W - 8}" y="${h - 8}" text-anchor="end" fill="${COL.muted}" font-size="12">${esc(f.note)}</text>` : ''}</svg>`;
}
/** Worked-example visual: {kind:'geo', fig, caption?}. */
export function visualGeo(v) {
  if (!v || v.kind !== 'geo') return '';
  return figSVG(v.fig) + (v.caption ? `<p class="mcap">${mathHTML(v.caption)}</p>` : '');
}
export { pt as polarPoint };
