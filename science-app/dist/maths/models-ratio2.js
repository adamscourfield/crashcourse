// Investigations for Ratio batch 2: proportion tables and graphs, map scales and similar areas,
// and chords closing in on a tangent. Every render checks ctx.isActive.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { btn, progressDots } from './models-number.js?v=20261023-maths-r9';
import { graphSVG } from './graph.js?v=20261023-maths-r9';
import { barsSVG } from './models-ratio.js?v=20261023-maths-r9';

const M = s => mathHTML(s);
const vNum = s => { const t = String(s ?? '').trim().replace(/−/g, '-'); return t === '' || Number.isNaN(Number(t)) ? null : Number(t); };
const near = (a, b, tol = 1e-9) => a !== null && Math.abs(a - b) <= tol;
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${text}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };

/* ───────── 1. Direct: find k; inverse: complete the table; match graphs ───────── */
const INV_X = [2, 3, 4, 6];
function mountProportionExplorer(ctx) {
  const w = ctx.w; w.dk ??= { k: 1, ok: false }; w.it ??= { a: '', b: '', ok: false }; w.mg ??= { ok: false };
  const D = w.dk, I = w.it, G = w.mg;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!D.ok) {
      ctx.setTitle('y is directly proportional to x, and y = 12 when x = 3. Find k.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · y = kx ${progressDots(3, 0, 0)}</div>${graphSVG({ xr: [0, 6], yr: [0, 30], ystep: 5, height: 240, fns: [{ expr: `${D.k}x`, label: `y = ${D.k}x` }], points: [[3, 12, '(3, 12)']] })}<table class="mtable"><thead><tr><th>x</th><th>1</th><th>2</th><th>3</th><th>5</th></tr></thead><tbody><tr><td>y</td>${[1, 2, 3, 5].map(x => `<td>${D.k * x}</td>`).join('')}</tr></tbody></table>`;
      ctx.body.innerHTML = `<p>Change k until the line passes through (3, 12).</p><div class="mrow"><span>k</span><div class="mstepper">${btn('data-k="-1"', '−1', D.k <= 1 ? 'disabled' : '')}<output>${D.k}</output>${btn('data-k="1"', '+1', D.k >= 9 ? 'disabled' : '')}</div></div><button class="primary mbtn" data-act="k">Check</button>`;
    } else if (!I.ok) {
      ctx.setTitle('y is inversely proportional to x. Complete the table.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · x × y STAYS THE SAME ${progressDots(3, 1, 1)}</div><table class="mtable"><thead><tr><th>x</th>${INV_X.map(x => `<th>${x}</th>`).join('')}</tr></thead><tbody><tr><td>y</td><td>12</td><td>8</td><td>${esc(I.a || '?')}</td><td>${esc(I.b || '?')}</td></tr></tbody></table>${graphSVG({ xr: [0, 7], yr: [0, 14], ystep: 2, height: 220, fns: [{ expr: '24/x', label: 'y = 24/x' }], points: [[2, 12], [3, 8]] })}`;
      ctx.body.innerHTML = `<div class="mpair"><label class="field-label">y when x = 4 <input class="lab-input mtext msmall" id="ia" inputmode="decimal" autocomplete="off" value="${esc(I.a)}"></label><label class="field-label">y when x = 6 <input class="lab-input mtext msmall" id="ib" inputmode="decimal" autocomplete="off" value="${esc(I.b)}"></label></div><button class="primary mbtn" data-act="inv">Check</button>`;
    } else if (!G.ok) {
      ctx.setTitle('Which graph shows inverse proportion?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · GRAPHS ${progressDots(3, 2, 2)}</div><div class="mgallery">${[['A', '3x + 2'], ['B', '12/x'], ['C', '2x']].map(([l, e]) => `<figure>${graphSVG({ xr: [0, 6], yr: [0, 20], ystep: 5, height: 160, fns: [{ expr: e }] })}<figcaption>Graph ${l}</figcaption></figure>`).join('')}</div>`;
      ctx.body.innerHTML = `<div class="mtiles">${['A', 'B', 'C'].map(l => `<button class="choice mtile" data-mg="${l}">Graph ${l}</button>`).join('')}</div>`;
    } else return done(ctx, graphSVG({ xr: [0, 7], yr: [0, 14], ystep: 2, height: 220, fns: [{ expr: '2x', label: 'direct: y = 2x' }, { expr: '24/x', label: 'inverse: y = 24/x' }] }), 'Direct proportion: y = kx, so y ÷ x is the constant k, and the graph is a straight line through the origin (a line that does not pass through the origin is not direct proportion). Inverse proportion: y = k ÷ x, so x × y is the constant (here 24), and the graph is a curve that gets closer to the axes without meeting them.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-k]').forEach(b => (b.onclick = () => { D.k = Math.max(1, Math.min(9, D.k + Number(b.dataset.k))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-k="${b.dataset.k}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="k"]')?.addEventListener('click', () => { if (D.k === 4) { D.ok = true; ctx.save(); render(); ctx.feedback('k = 12 ÷ 3 = 4, so y = 4x ✓'); return; } ctx.feedback(`With k = ${D.k}, y = ${3 * D.k} when x = 3. You need 12, so k = 12 ÷ 3.`, true); });
    for (const id of ['ia', 'ib']) { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { I[id === 'ia' ? 'a' : 'b'] = i.value; ctx.save(); }; }
    ctx.body.querySelector('[data-act="inv"]')?.addEventListener('click', () => {
      const a = vNum(I.a), b = vNum(I.b);
      if (near(a, 6) && near(b, 4)) { I.ok = true; ctx.save(); render(); ctx.feedback('2 × 12 = 3 × 8 = 4 × 6 = 6 × 4 = 24 ✓'); return; }
      ctx.feedback(near(a, 4) || near(b, 0) ? 'It is not "4 less each time": x × y stays at 24.' : near(a, 16) || near(b, 24) ? 'That is direct proportion. Here y gets smaller as x gets bigger: x × y = 24.' : 'x × y = 2 × 12 = 24 every time.', true);
    });
    ctx.body.querySelectorAll('[data-mg]').forEach(b => (b.onclick = () => { const l = b.dataset.mg; if (l === 'B') { G.ok = true; ctx.save(); render(); return; } ctx.feedback(l === 'A' ? 'Graph A is a straight line not through the origin: neither direct nor inverse proportion.' : 'Graph C is a straight line through the origin: direct proportion.', true); }));
  };
  render();
}

/* ───────── 2. Map route; similar areas ───────── */
const LEGS = [2, 3.5, 1.5];
function mountMapScale(ctx) {
  const w = ctx.w; w.mp ??= { raw: '', ok: false }; w.sf ??= { k: 1, ok: false };
  const Mp = w.mp, Sf = w.sf;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Mp.ok) {
      ctx.setTitle('How long is the walk in real life?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · MAP SCALE 1 : 25 000 ${progressDots(2, 0, 0)}</div><div class="mwork">${LEGS.map((l, i) => `<div>Leg ${i + 1}: ${l} cm on the map</div>`).join('')}<div>Total: 7 cm</div></div>`;
      ctx.body.innerHTML = `<p>Each 1 cm on the map is 25 000 cm in real life. Give the real length of the walk in kilometres.</p><div class="mrow-in"><input class="lab-input mnum" id="km" inputmode="decimal" autocomplete="off" value="${esc(Mp.raw)}"><span>km</span><button class="primary mbtn" data-act="km">Check</button></div>`;
    } else if (!Sf.ok) {
      const k = Sf.k;
      ctx.setTitle('Enlarge a 2 cm by 1 cm rectangle.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · LENGTHS AND AREAS ${progressDots(2, 1, 1)}</div>${barsSVG({ rows: [{ label: 'original', parts: 2 }, { label: `× ${k}`, parts: 2 * k }] })}<table class="mtable"><thead><tr><th>Scale factor</th><th>Length</th><th>Area</th></tr></thead><tbody><tr><td>1</td><td>2 cm</td><td>2 cm²</td></tr><tr><td>${k}</td><td>${2 * k} cm</td><td>${2 * k * k} cm²</td></tr></tbody></table>`;
      ctx.body.innerHTML = `<p>Change the scale factor and watch the area. When lengths are multiplied by 3, what is the area multiplied by?</p><div class="mrow"><span>Scale factor</span><div class="mstepper">${btn('data-sk="-1"', '−1', k <= 1 ? 'disabled' : '')}<output>${k}</output>${btn('data-sk="1"', '+1', k >= 4 ? 'disabled' : '')}</div></div><div class="mtiles">${[3, 6, 9, 27].map(v => `<button class="choice mtile" data-af="${v}">× ${v}</button>`).join('')}</div>`;
    } else return done(ctx, `<div class="mwork"><div>7 cm × 25 000 = 175 000 cm = 1.75 km</div><div>lengths × 3 → areas × 9 → volumes × 27</div></div>`, 'A map scale multiplies every length by the same number; convert the units at the end (100 000 cm in a kilometre). Enlarging a shape by scale factor k multiplies lengths by k, but areas by k² and volumes by k³, because area has two dimensions and volume has three.');
    bind();
  };
  const bind = () => {
    const km = ctx.body.querySelector('#km'); if (km) km.oninput = () => { Mp.raw = km.value; ctx.save(); };
    ctx.body.querySelector('[data-act="km"]')?.addEventListener('click', () => { const v = vNum(Mp.raw); if (near(v, 1.75)) { Mp.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 1750) ? 'That is in metres: divide by 1000.' : near(v, 175000) ? 'That is in centimetres: 100 000 cm = 1 km.' : near(v, 17.5) ? 'There are 100 000 cm in a km, not 10 000.' : '7 cm × 25 000 = 175 000 cm. Change that to kilometres.', true); });
    ctx.body.querySelectorAll('[data-sk]').forEach(b => (b.onclick = () => { Sf.k = Math.max(1, Math.min(4, Sf.k + Number(b.dataset.sk))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-sk="${b.dataset.sk}"]`)?.focus(); }));
    ctx.body.querySelectorAll('[data-af]').forEach(b => (b.onclick = () => { const v = Number(b.dataset.af); if (v === 9) { Sf.ok = true; ctx.save(); render(); return; } ctx.feedback(v === 3 ? 'Set the scale factor to 3 and compare the areas: 2 cm² becomes 18 cm².' : v === 6 ? 'Both the length and the width are multiplied by 3: 3 × 3.' : '× 27 is for volumes (three dimensions).', true); }));
  };
  render();
}

/* ───────── 3. Chords approach a tangent; compound units ───────── */
const d = t => t * t + 5;
const STARTS = [3, 4, 5, 6, 6.5, 6.9];
function mountRateChords(ctx) {
  const w = ctx.w; w.ch ??= { i: 0, raw: '', ok: false }; w.uc ??= { raw: '', ok: false };
  const Ch = w.ch, U = w.uc;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Ch.ok) {
      const t1 = STARTS[Ch.i], grad = (d(7) - d(t1)) / (7 - t1);
      ctx.setTitle('Move the chord closer to t = 7.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · CHORD TO TANGENT ${progressDots(2, 0, 0)}</div>${graphSVG({ xr: [0, 8], yr: [0, 70], ystep: 10, height: 260, xlabel: 'Time (s)', ylabel: 'Distance (m)', fns: [{ expr: 'x^2 + 5', label: 'd = t² + 5' }], polys: [{ pts: [[t1, d(t1)], [7, d(7)]], label: 'chord' }], points: [[t1, d(t1)], [7, 54, '(7, 54)']] })}<p class="mcap">Chord from t = ${t1} to t = 7: gradient ${grad.toFixed(2)} m/s (average speed)</p>`;
      ctx.body.innerHTML = `<p>Move the start of the chord towards t = 7. What value does the chord's gradient approach? That is the speed at the instant t = 7.</p><button class="secondary mbtn" data-act="closer" ${Ch.i >= STARTS.length - 1 ? 'disabled' : ''}>Move closer</button><div class="mrow-in"><input class="lab-input mnum" id="ins" inputmode="decimal" autocomplete="off" value="${esc(Ch.raw)}"><span>m/s</span><button class="primary mbtn" data-act="ins">Check</button></div>`;
    } else if (!U.ok) {
      ctx.setTitle('Convert 72 km/h into m/s.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · COMPOUND UNITS ${progressDots(2, 1, 1)}</div><div class="mwork"><div>72 km in 1 hour</div><div>= 72 000 m in 3600 s</div></div>`;
      ctx.body.innerHTML = `<div class="mrow-in"><input class="lab-input mnum" id="ms" inputmode="decimal" autocomplete="off" value="${esc(U.raw)}"><span>m/s</span><button class="primary mbtn" data-act="ms">Check</button></div>`;
    } else return done(ctx, graphSVG({ xr: [0, 8], yr: [0, 70], ystep: 10, height: 240, fns: [{ expr: 'x^2 + 5', label: 'd = t² + 5' }, { expr: '14x - 44', label: 'tangent: 14 m/s' }] }), 'The gradient of a chord is an average rate of change. As the chord gets shorter, its gradient gets closer to the gradient of the tangent, the instantaneous rate: here 14 m/s at t = 7. Compound units convert part by part: 72 km/h is 72 000 m in 3600 s, which is 20 m/s.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelector('[data-act="closer"]')?.addEventListener('click', () => { if (Ch.i < STARTS.length - 1) Ch.i++; ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector('[data-act="closer"]')?.focus(); });
    const ins = ctx.body.querySelector('#ins'); if (ins) ins.oninput = () => { Ch.raw = ins.value; ctx.save(); };
    ctx.body.querySelector('[data-act="ins"]')?.addEventListener('click', () => {
      const v = vNum(Ch.raw);
      if (Ch.i < 3) { ctx.feedback('Move the chord closer first and watch how its gradient changes.', true); return; }
      if (near(v, 14, 0.05)) { Ch.ok = true; ctx.save(); render(); ctx.feedback('The gradients 10, 11, 12, 13, 13.5, 13.9 close in on 14 ✓'); return; }
      ctx.feedback(near(v, 54) ? '54 m is the distance at t = 7, not the speed.' : near(v, 10, 0.05) ? 'That is the average speed over the longest chord. Move it closer.' : 'Look at the gradients as the chord shrinks: they get closer and closer to one value.', true);
    });
    const ms = ctx.body.querySelector('#ms'); if (ms) ms.oninput = () => { U.raw = ms.value; ctx.save(); };
    ctx.body.querySelector('[data-act="ms"]')?.addEventListener('click', () => { const v = vNum(ms?.value ?? U.raw); if (near(v, 20)) { U.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 1200) ? 'An hour is 3600 seconds, not 60 minutes.' : near(v, 259.2) ? 'km/h to m/s: × 1000 ÷ 3600.' : '72 000 m ÷ 3600 s.', true); });
  };
  render();
}

export const MODELS10 = { 'proportion-explorer': mountProportionExplorer, 'map-scale': mountMapScale, 'rate-chords': mountRateChords };
