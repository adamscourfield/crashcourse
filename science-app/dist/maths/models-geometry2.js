// Investigations for Geometry batch 2: squares on the sides, ratios that stay fixed, a
// transformation lab, compass arcs and loci, and turning to a bearing. Every render checks ctx.isActive.
import { mathHTML, esc } from './render.js?v=20261023-maths-r12';
import { btn, progressDots } from './models-number.js?v=20261023-maths-r12';
import { figSVG } from './geomfig.js?v=20261023-maths-r12';
import { graphSVG } from './graph.js?v=20261023-maths-r12';
import { rtFig, bearingFig } from './skills-geometry2.js?v=20261023-maths-r12';

const M = s => mathHTML(s);
const vNum = s => { const t = String(s ?? '').trim().replace(/−/g, '-').replace(/°$/, ''); if (/^-?\d+\/\d+$/.test(t)) { const [a, b] = t.split('/').map(Number); return a / b; } return t === '' || Number.isNaN(Number(t)) ? null : Number(t); };
const near = (a, b, tol = 1e-9) => a !== null && Math.abs(a - b) <= tol;
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${text}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
const numRow = (id, val, unit, act) => `<div class="mrow-in"><input class="lab-input mnum" id="${id}" inputmode="decimal" autocomplete="off" value="${esc(val)}"><span>${unit}</span><button class="primary mbtn" data-act="${act}">Check</button></div>`;
const stepper = (key, label, val, lo, hi, step, unit = '') => `<div class="mrow"><span>${label}</span><div class="mstepper">${btn(`data-${key}="-${step}"`, `−${step}${unit}`, val <= lo ? 'disabled' : '')}<output>${val}${unit}</output>${btn(`data-${key}="${step}"`, `+${step}${unit}`, val >= hi ? 'disabled' : '')}</div></div>`;
const bindStep = (ctx, key, get, set, lo, hi, render) => ctx.body.querySelectorAll(`[data-${key}]`).forEach(b => (b.onclick = () => { set(Math.max(lo, Math.min(hi, get() + Number(b.dataset[key])))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-${key}="${b.dataset[key]}"]`)?.focus(); }));
const bindInput = (ctx, id, S) => { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { S.raw = i.value; ctx.save(); }; };
const rad = d => (d * Math.PI) / 180;

/* ───────── 1. Squares on the sides; the ladder ───────── */
function squaresFig() {
  // right triangle 3-4-5 at 30 px per unit, with the three squares drawn on its sides
  const u = 30, A = [210, 230], B = [330, 230], C = [210, 140]; // AB = 4, AC = 3, BC = 5
  const sq = (p, q) => { const d = [q[0] - p[0], q[1] - p[1]], n = [d[1], -d[0]]; return [p, q, [q[0] + n[0], q[1] + n[1]], [p[0] + n[0], p[1] + n[1]]]; };
  return { h: 400, polys: [{ pts: sq(B, A), fill: '#a8d5b533' }, { pts: sq(A, C), fill: '#f2d48a33' }, { pts: sq(C, B), fill: '#ed8b7833' }, { pts: [A, B, C] }], angles: [{ v: A, p: B, q: C, right: true }], labels: [{ at: [270, 300], t: '16 cm²' }, { at: [165, 190], t: '9 cm²' }, { at: [330, 120], t: '? cm²' }], note: 'Not drawn accurately', alt: 'Right-angled triangle with sides 3 cm and 4 cm and squares of 9 cm² and 16 cm² on them; the square on the hypotenuse is unknown', _u: u };
}
function mountPythagorasSquares(ctx) {
  const w = ctx.w; w.sq ??= { raw: '', side: '', ok: false, sideOk: false }; w.ld ??= { raw: '', ok: false };
  const Q = w.sq, L = w.ld;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Q.sideOk) {
      ctx.setTitle('Squares on the sides of a right-angled triangle.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · AREAS ${progressDots(2, 0, 0)}</div>${figSVG(squaresFig())}`;
      ctx.body.innerHTML = Q.ok
        ? `<p>The big square is 25 cm². So how long is the hypotenuse?</p>${numRow('sd', Q.side, 'cm', 'sd')}`
        : `<p>The squares on the two shorter sides are 9 cm² and 16 cm². Cut them up and they exactly cover the square on the hypotenuse. What is its area?</p>${numRow('sa', Q.raw, 'cm²', 'sa')}`;
    } else if (!L.ok) {
      ctx.setTitle('A 5 m ladder, foot 1.4 m from the wall.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · THE LADDER ${progressDots(2, 1, 1)}</div>${figSVG(rtFig(1.4, 4.8, ['1.4 m', 'h', '5 m'], '', 'Ladder 5 m long leaning against a wall, foot 1.4 m out; height h'))}`;
      ctx.body.innerHTML = `<p>The ladder is the hypotenuse. How high up the wall does it reach?</p>${numRow('lh', L.raw, 'm', 'lh')}`;
    } else return done(ctx, figSVG(squaresFig()).replace('? cm²', '25 cm²'), 'In a right-angled triangle, the square on the hypotenuse equals the sum of the squares on the other two sides: a² + b² = c². For the hypotenuse, add the squares and square root; for a shorter side, subtract: h² = 5² − 1.4² = 23.04, so h = 4.8 m.');
    bind();
  };
  const bind = () => {
    bindInput(ctx, 'sa', Q); const sd = ctx.body.querySelector('#sd'); if (sd) sd.oninput = () => { Q.side = sd.value; ctx.save(); };
    ctx.body.querySelector('[data-act="sa"]')?.addEventListener('click', () => { const v = vNum(Q.raw); if (near(v, 25)) { Q.ok = true; ctx.save(); render(); ctx.feedback('9 + 16 = 25 cm² ✓'); return; } ctx.feedback(near(v, 7) ? '7 adds the side lengths. Add the areas of the squares.' : near(v, 49) ? '49 is 7². Add the two areas: 9 + 16.' : near(v, 144) ? 'Add the areas, do not multiply them.' : 'The two smaller squares together cover the big one.', true); });
    ctx.body.querySelector('[data-act="sd"]')?.addEventListener('click', () => { const v = vNum(Q.side); if (near(v, 5)) { Q.sideOk = true; ctx.save(); render(); ctx.feedback('√25 = 5 cm ✓'); return; } ctx.feedback(near(v, 12.5) ? 'Square root the area, do not halve it.' : 'The side of a 25 cm² square is √25.', true); });
    bindInput(ctx, 'lh', L);
    ctx.body.querySelector('[data-act="lh"]')?.addEventListener('click', () => { const v = vNum(L.raw); if (near(v, 4.8, 0.001)) { L.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 5.2, 0.01) ? 'You added the squares. The ladder is the longest side, so subtract: 5² − 1.4².' : near(v, 3.6, 0.001) ? 'Subtract the squares, not the lengths.' : near(v, 23.04, 0.001) ? 'That is h². Take the square root.' : 'h² = 5² − 1.4².', true); });
  };
  render();
}

/* ───────── 2. sin stays the same for the same angle; choose a ratio; an exact value ───────── */
function mountTrigRatios(ctx) {
  const w = ctx.w; w.tr ??= { hyp: 4, raw: '', ok: false }; w.tc ??= { ok: false }; w.te ??= { raw: '', ok: false };
  const T = w.tr, C = w.tc, E = w.te;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!T.ok) {
      const h = T.hyp, o = h / 2, a = h * Math.cos(rad(30));
      ctx.setTitle('Triangles with a 30° angle.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · SAME ANGLE, ANY SIZE ${progressDots(3, 0, 0)}</div>${figSVG(rtFig(a, o, ['', `${o} cm`, `${h} cm`], '30°', `Right-angled triangle with a 30° angle, hypotenuse ${h} cm, opposite ${o} cm`))}<table class="mtable"><thead><tr><th>Hypotenuse</th><th>Opposite</th><th>Opposite ÷ hypotenuse</th></tr></thead><tbody><tr><td>${h} cm</td><td>${o} cm</td><td>?</td></tr></tbody></table>`;
      ctx.body.innerHTML = `<p>Make the triangle bigger or smaller. Work out opposite ÷ hypotenuse. Does it change?</p>${stepper('h', 'Hypotenuse', h, 2, 12, 2, ' cm')}${numRow('sr', T.raw, '', 'sr')}`;
    } else if (!C.ok) {
      ctx.setTitle('You know the opposite. You want the adjacent.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · CHOOSE THE RATIO ${progressDots(3, 1, 1)}</div>${figSVG(rtFig(8, 5, ['x', '5 cm', ''], '32°', 'Right-angled triangle with angle 32°, opposite 5 cm and adjacent x'))}`;
      ctx.body.innerHTML = `<p>Which ratio links the 32° angle, the opposite and the adjacent?</p><div class="mtiles">${['sin', 'cos', 'tan'].map(f => `<button class="choice mtile" data-tc="${f}">${f}</button>`).join('')}</div>`;
    } else if (!E.ok) {
      ctx.setTitle('An exact value: cos 60°.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · HALF AN EQUILATERAL TRIANGLE ${progressDots(3, 2, 2)}</div>${figSVG({ h: 300, polys: [{ pts: [[150, 260], [450, 260], [300, 40]] }], segs: [{ a: [300, 40], b: [300, 260], dash: true }], dims: [{ a: [150, 260], b: [300, 260], t: '1', off: -22 }, { a: [300, 40], b: [150, 260], t: '2', off: -22 }], angles: [{ v: [150, 260], p: [300, 260], q: [300, 40], label: '60°', r: 44 }, { v: [300, 260], p: [150, 260], q: [300, 40], right: true }], note: 'Not drawn accurately', alt: 'Equilateral triangle of side 2 cut in half: hypotenuse 2, base 1, angle 60°' })}`;
      ctx.body.innerHTML = `<p>An equilateral triangle with sides of 2 is cut in half. Use the half triangle: what is cos 60° exactly?</p>${numRow('ce', E.raw, '', 'ce')}`;
    } else return done(ctx, `<div class="mwork"><div>${M('sin 30° = {1/2} for every size of triangle')}</div><div>opposite and adjacent → tan</div><div>${M('cos 60° = {1/2}, sin 60° = {√3/2}')}</div></div>`, 'For a fixed angle, each ratio of sides is the same whatever the size of the triangle: that is why sin, cos and tan are useful. Choose the ratio that uses the side you know and the side you want (SOH CAH TOA). Half an equilateral triangle gives the exact values for 30° and 60°; half a square gives 45°.');
    bind();
  };
  const bind = () => {
    bindStep(ctx, 'h', () => T.hyp, v => (T.hyp = v), 2, 12, render); bindInput(ctx, 'sr', T); bindInput(ctx, 'ce', E);
    ctx.body.querySelector('[data-act="sr"]')?.addEventListener('click', () => { const v = vNum(T.raw); if (near(v, 0.5)) { T.ok = true; ctx.save(); render(); ctx.feedback(`${T.hyp / 2} ÷ ${T.hyp} = 0.5 for every size: sin 30° = 0.5 ✓`); return; } ctx.feedback(near(v, 2) ? 'That is hypotenuse ÷ opposite. Divide the opposite by the hypotenuse.' : 'Divide the opposite by the hypotenuse.', true); });
    ctx.body.querySelectorAll('[data-tc]').forEach(b => (b.onclick = () => { const f = b.dataset.tc; if (f === 'tan') { C.ok = true; ctx.save(); render(); ctx.feedback('tan 32° = {5/x}, so x = 5 ÷ tan 32° ≈ 8.0 cm ✓'); return; } ctx.feedback(f === 'sin' ? 'sin uses the opposite and the hypotenuse. You do not know the hypotenuse.' : 'cos uses the adjacent and the hypotenuse. You do not know the hypotenuse.', true); }));
    ctx.body.querySelector('[data-act="ce"]')?.addEventListener('click', () => { const v = vNum(E.raw); if (near(v, 0.5)) { E.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 2) ? 'cos is adjacent ÷ hypotenuse: 1 ÷ 2.' : near(v, Math.sqrt(3) / 2, 0.01) ? 'That is sin 60°. cos uses the adjacent side, 1.' : 'cos 60° = adjacent ÷ hypotenuse.', true); });
  };
  render();
}

/* ───────── 3. Transformation lab ───────── */
const OBJ = [[1, 1], [3, 1], [1, 2]];
const shift = (pts, a, b) => pts.map(([x, y]) => [x + a, y + b]);
const tGrid = (extra = {}) => ({ xr: [-6, 6], yr: [-6, 6], ...extra });
const closeP = p => [...p, p[0]];
function mountTransformLab(ctx) {
  const w = ctx.w; w.tl ??= { a: 0, b: 0, ok: false }; w.rt ??= { ok: false }; w.en ??= { k: 1, ok: false };
  const T = w.tl, R = w.rt, E = w.en, TARGET = shift(OBJ, 3, -4);
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!T.ok) {
      ctx.setTitle('Slide A onto the dashed target.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · TRANSLATION ${M(`{vec ${String(T.a).replace('-', '−')};${String(T.b).replace('-', '−')}}`)} ${progressDots(3, 0, 0)}</div>${graphSVG(tGrid({ polys: [{ pts: closeP(OBJ), label: 'A' }, { pts: closeP(TARGET), label: 'target' }, { pts: closeP(shift(OBJ, T.a, T.b)), label: 'image' }] }))}`;
      ctx.body.innerHTML = `<p>The top number of the vector moves across; the bottom number moves up. Change them until the image covers the target.</p>${stepper('ta', 'Across', T.a, -5, 5, 1)}${stepper('tb', 'Up', T.b, -5, 5, 1)}<button class="primary mbtn" data-act="tv">Check</button>`;
    } else if (!R.ok) {
      const B = OBJ.map(([x, y]) => [y, -x]);
      ctx.setTitle('Which rotation maps A onto B?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · ROTATION ABOUT (0, 0) ${progressDots(3, 1, 1)}</div>${graphSVG(tGrid({ polys: [{ pts: closeP(OBJ), label: 'A' }, { pts: closeP(B), label: 'B' }], points: [[0, 0, 'centre']] }))}`;
      ctx.body.innerHTML = `<div class="mtiles">${[['cw', '90° clockwise'], ['acw', '90° anticlockwise'], ['half', '180°']].map(([k, t]) => `<button class="choice mtile" data-rt="${k}">${t}</button>`).join('')}</div>`;
    } else if (!E.ok) {
      const img = OBJ.map(([x, y]) => [E.k * x, E.k * y]), eGrid = x => ({ xr: [-1, 10], yr: [-1, 7], ...x });
      ctx.setTitle('Enlarge A from centre (0, 0) to fit the target.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · ENLARGEMENT ${progressDots(3, 2, 2)}</div>${graphSVG(eGrid({ polys: [{ pts: closeP(OBJ), label: 'A' }, { pts: closeP(OBJ.map(([x, y]) => [2 * x, 2 * y])), label: 'target' }, ...(E.k > 1 ? [{ pts: closeP(img), label: `× ${E.k}` }] : [])], points: [[0, 0, 'centre']] }))}`;
      ctx.body.innerHTML = `<p>Each vertex moves along a line from the centre. Choose the scale factor that puts the image on the target, then check.</p>${stepper('ek', 'Scale factor', E.k, 1, 3, 1)}<button class="primary mbtn" data-act="ek">Check</button>`;
    } else return done(ctx, graphSVG(tGrid({ polys: [{ pts: closeP(OBJ), label: 'A' }, { pts: closeP(TARGET), label: 'translated' }, { pts: closeP(OBJ.map(([x, y]) => [y, -x])), label: 'rotated' }] })), `Translation by ${M('{vec 3;−4}')}: 3 right, 4 down. Rotation: 90° clockwise about (0, 0) takes (x, y) to (y, −x). Enlargement: scale factor 2 doubles every distance from the centre. Describe fully: the vector; the angle, direction and centre; the scale factor and centre.`);
    bind();
  };
  const bind = () => {
    bindStep(ctx, 'ta', () => T.a, v => (T.a = v), -5, 5, render); bindStep(ctx, 'tb', () => T.b, v => (T.b = v), -5, 5, render); bindStep(ctx, 'ek', () => E.k, v => (E.k = v), 1, 3, render);
    ctx.body.querySelector('[data-act="tv"]')?.addEventListener('click', () => { if (T.a === 3 && T.b === -4) { T.ok = true; ctx.save(); render(); ctx.feedback('Translation by the vector (3, −4) ✓'); return; } ctx.feedback(T.a === -4 && T.b === 3 ? 'The numbers are swapped: the top number moves across.' : T.a === -3 && T.b === 4 ? 'That moves the target back to A. Go the other way.' : 'The image is not on the target yet: count the squares across and down.', true); });
    ctx.body.querySelectorAll('[data-rt]').forEach(b => (b.onclick = () => { if (b.dataset.rt === 'cw') { R.ok = true; ctx.save(); render(); return; } ctx.feedback(b.dataset.rt === 'acw' ? 'Anticlockwise would put B above the x-axis on the left. Turn the way clock hands go.' : '180° would put B below and to the left. This is a quarter turn.', true); }));
    ctx.body.querySelector('[data-act="ek"]')?.addEventListener('click', () => { if (E.k === 2) { E.ok = true; ctx.save(); render(); return; } ctx.feedback(E.k === 1 ? 'Scale factor 1 leaves A the same size.' : 'Scale factor 3 is too big: the target is twice as far from the centre.', true); });
  };
  render();
}

/* ───────── 4. Equidistant points; compass arcs; a region ───────── */
const LA = [-3, 0], LB = [3, 0];
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
function mountLocusExplorer(ctx) {
  const w = ctx.w; w.eq ??= { ok: false }; w.arc ??= { r: 2, ok: false }; w.rg ??= { ok: false };
  const Q = w.eq, A = w.arc, G = w.rg;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Q.ok) {
      ctx.setTitle('Which point is the same distance from A and from B?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · EQUIDISTANT ${progressDots(3, 0, 0)}</div>${graphSVG({ xr: [-6, 6], yr: [-5, 5], points: [[...LA, 'A'], [...LB, 'B'], [0, 4, 'P'], [1, 3, 'Q'], [-2, 2, 'R']] })}`;
      ctx.body.innerHTML = `<div class="mtiles">${['P', 'Q', 'R'].map(l => `<button class="choice mtile" data-eq="${l}">${l}</button>`).join('')}</div>`;
    } else if (!A.ok) {
      const r = A.r, meet = r > 3;
      ctx.setTitle('Construct the perpendicular bisector of AB (AB = 6 cm).');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · COMPASS ARCS ${progressDots(3, 1, 1)}</div>${figSVG({ h: 300, segs: [{ a: [120, 150], b: [480, 150] }, ...(meet ? [{ a: [300, 150 - 60 * Math.sqrt(r * r - 9)], b: [300, 150 + 60 * Math.sqrt(r * r - 9)], colour: 'accent', dash: true }] : [])], circles: [{ c: [120, 150], r: 60 * r, dash: true }, { c: [480, 150], r: 60 * r, dash: true }], dots: [[120, 150], [480, 150]], labels: [{ at: [110, 176], t: 'A' }, { at: [490, 176], t: 'B' }], alt: `Arcs of radius ${r} cm from A and B ${meet ? 'cross above and below AB' : 'do not cross'}` })}`;
      ctx.body.innerHTML = `<p>Set the compass radius. The arcs must cross twice so you can join the crossings. What is the smallest whole-number radius that works?</p>${stepper('cr', 'Radius', r, 1, 6, 1, ' cm')}<button class="primary mbtn" data-act="cr">Use this radius</button>`;
    } else if (!G.ok) {
      ctx.setTitle('Less than 4 units from A and nearer to B than to A.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · A REGION ${progressDots(3, 2, 2)}</div>${graphSVG({ xr: [-6, 6], yr: [-5, 5], fns: [], points: [[...LA, 'A'], [...LB, 'B'], [1, 1, 'S'], [-1, 2, 'T'], [2, 4, 'U']] })}`;
      ctx.body.innerHTML = `<p>Which point is less than 4 units from A <em>and</em> nearer to B than to A?</p><div class="mtiles">${['S', 'T', 'U'].map(l => `<button class="choice mtile" data-rg="${l}">${l}</button>`).join('')}</div>`;
    } else return done(ctx, graphSVG({ xr: [-6, 6], yr: [-5, 5], fns: [], polys: [{ pts: [[0, -5], [0, 5]] }], points: [[...LA, 'A'], [...LB, 'B'], [1, 1, 'S']] }), 'Points equidistant from A and B lie on the perpendicular bisector of AB (here the y-axis). To construct it, the compass width must be more than half of AB or the arcs will not meet. A region obeys every rule at once: inside the circle round A and on B’s side of the bisector.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-eq]').forEach(b => (b.onclick = () => { const l = b.dataset.eq; if (l === 'P') { Q.ok = true; ctx.save(); render(); ctx.feedback('P is 5 from A and 5 from B ✓'); return; } const p = l === 'Q' ? [1, 3] : [-2, 2]; ctx.feedback(`${l} is ${dist(p, LA).toFixed(1)} from A but ${dist(p, LB).toFixed(1)} from B.`, true); }));
    bindStep(ctx, 'cr', () => A.r, v => (A.r = v), 1, 6, render);
    ctx.body.querySelector('[data-act="cr"]')?.addEventListener('click', () => { if (A.r === 4) { A.ok = true; ctx.save(); render(); ctx.feedback('4 cm is more than half of 6 cm, so the arcs cross ✓'); return; } ctx.feedback(A.r <= 3 ? `Arcs of ${A.r} cm ${A.r === 3 ? 'only touch at the midpoint' : 'do not meet'}. The radius must be more than half of AB.` : 'That works, but a smaller whole-number radius also works.', true); });
    ctx.body.querySelectorAll('[data-rg]').forEach(b => (b.onclick = () => { const l = b.dataset.rg; if (l === 'S') { G.ok = true; ctx.save(); render(); return; } ctx.feedback(l === 'T' ? 'T is on A’s side of the bisector (x < 0), so it is nearer to A.' : `U is ${dist([2, 4], LA).toFixed(1)} units from A: more than 4.`, true); }));
  };
  render();
}

/* ───────── 5. Turn to a bearing; back bearing; elevation ───────── */
function mountBearingCompass(ctx) {
  const w = ctx.w; w.bc ??= { t: 0, ok: false }; w.bb ??= { raw: '', ok: false }; w.el ??= { raw: '', ok: false };
  const B = w.bc, K = w.bb, E = w.el, TARGET = 135;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!B.ok) {
      const t = B.t, Ap = [300, 170], tip = [300 + 120 * Math.sin(rad(t)), 170 - 120 * Math.cos(rad(t))], lh = [300 + 140 * Math.sin(rad(TARGET)), 170 - 140 * Math.cos(rad(TARGET))];
      ctx.setTitle('Face north at A, then turn clockwise to face the lighthouse.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · TURNING ${String(t).padStart(3, '0')}° ${progressDots(3, 0, 0)}</div>${figSVG({ h: 340, segs: [{ a: Ap, b: [300, 40] }, { a: Ap, b: tip, colour: 'accent', w: 3 }], dots: [Ap, lh], labels: [{ at: [300, 30], t: 'N' }, { at: [286, 192], t: 'A' }, { at: [lh[0] + 12, lh[1] + 18], t: 'Lighthouse' }], ...(t > 0 ? { angles: [{ v: Ap, p: [300, 40], q: tip, label: `${t}°`, r: 36 }] } : {}), alt: `North line at A; pointer turned ${t}° clockwise; lighthouse on a bearing of 135°` })}`;
      ctx.body.innerHTML = `<p>Turn the pointer clockwise until it points at the lighthouse. Then check the bearing.</p>${stepper('bt', 'Turn', t, 0, 345, 15, '°')}<button class="primary mbtn" data-act="bt">Check</button>`;
    } else if (!K.ok) {
      ctx.setTitle('The bearing of the lighthouse from A is 135°.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · BACK BEARING ${progressDots(3, 1, 1)}</div>${figSVG(bearingFig(135, 'L'))}`;
      ctx.body.innerHTML = `<p>A boat at the lighthouse wants to go back to A. What bearing should it take?</p>${numRow('bb', K.raw, '°', 'bb')}`;
    } else if (!E.ok) {
      ctx.setTitle('From 20 m away, the top of the lighthouse is at 35° above the horizontal.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · ANGLE OF ELEVATION ${progressDots(3, 2, 2)}</div>${figSVG(rtFig(20, 14, ['20 m', 'h', ''], '35°', 'Angle of elevation 35° from 20 m away; height h'))}`;
      ctx.body.innerHTML = `<p>Work out the height h to 1 decimal place.</p>${numRow('eh', E.raw, 'm', 'eh')}`;
    } else return done(ctx, figSVG(bearingFig(135, 'L')), 'A bearing is measured clockwise from north at the starting point: the lighthouse is on 135° from A. Going back, add or subtract 180°: 315°. Heights from angles of elevation use tan: h = 20 × tan 35° ≈ 14.0 m.');
    bind();
  };
  const bind = () => {
    bindStep(ctx, 'bt', () => B.t, v => (B.t = v), 0, 345, render); bindInput(ctx, 'bb', K); bindInput(ctx, 'eh', E);
    ctx.body.querySelector('[data-act="bt"]')?.addEventListener('click', () => { if (B.t === TARGET) { B.ok = true; ctx.save(); render(); ctx.feedback('135°: halfway between east (090°) and south (180°) ✓'); return; } ctx.feedback(B.t === 225 ? 'That is anticlockwise from north. Bearings go clockwise.' : B.t === 45 ? 'That is the angle from east. Bearings are measured from north.' : B.t < TARGET ? 'Keep turning clockwise.' : 'You have turned past it.', true); });
    ctx.body.querySelector('[data-act="bb"]')?.addEventListener('click', () => { const v = vNum(K.raw); if (near(v, 315)) { K.ok = true; ctx.save(); render(); ctx.feedback('135 + 180 = 315° ✓'); return; } ctx.feedback(near(v, 135) ? 'That is the bearing from A. Starting at the lighthouse, it differs by 180°.' : near(v, 225) ? '225° is 360 − 135. Add 180° instead.' : near(v, 45) ? 'Add 180°, do not subtract from 180°.' : 'Back bearing = 135 + 180.', true); });
    ctx.body.querySelector('[data-act="eh"]')?.addEventListener('click', () => { const v = vNum(E.raw); if (near(v, 14.0, 0.0501)) { E.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 11.5, 0.06) ? 'That uses sin. You know the adjacent and want the opposite: tan.' : near(v, 28.6, 0.06) ? 'h is on the top of the ratio: h = 20 × tan 35°.' : near(v, 16.4, 0.06) ? 'That uses cos. Use tan.' : 'tan 35° = {h/20}.', true); });
  };
  render();
}

export const MODELS12 = { 'pythagoras-squares': mountPythagorasSquares, 'trig-ratios': mountTrigRatios, 'transform-lab': mountTransformLab, 'locus-explorer': mountLocusExplorer, 'bearing-compass': mountBearingCompass };
