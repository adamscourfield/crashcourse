// Investigations for Geometry batch 3: when triangles must be congruent, angles that stay fixed on a
// circle, cube stacks, choosing the sine or cosine rule, and walking along vectors.
// Every render checks ctx.isActive.
import { mathHTML, esc } from './render.js?v=20261023-maths-r12';
import { btn, progressDots } from './models-number.js?v=20261023-maths-r12';
import { figSVG } from './geomfig.js?v=20261023-maths-r12';
import { graphSVG } from './graph.js?v=20261023-maths-r12';
import { triABC, aShape, circlePoint as P } from './skills-geometry3.js?v=20261023-maths-r12';

const M = s => mathHTML(s);
const vNum = s => { const t = String(s ?? '').trim().replace(/−/g, '-').replace(/°$/, ''); return t === '' || Number.isNaN(Number(t)) ? null : Number(t); };
const near = (a, b, tol = 1e-9) => a !== null && Math.abs(a - b) <= tol;
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${M(text)}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
const numRow = (id, val, unit, act) => `<div class="mrow-in"><input class="lab-input mnum" id="${id}" inputmode="decimal" autocomplete="off" value="${esc(val)}"><span>${unit}</span><button class="primary mbtn" data-act="${act}">Check</button></div>`;
const stepper = (key, label, val, lo, hi, step, unit = '', shown = val) => `<div class="mrow"><span>${label}</span><div class="mstepper">${btn(`data-${key}="-${step}"`, `−${step}${unit}`, val <= lo ? 'disabled' : '')}<output>${shown}${unit}</output>${btn(`data-${key}="${step}"`, `+${step}${unit}`, val >= hi ? 'disabled' : '')}</div></div>`;
const bindStep = (ctx, key, get, set, lo, hi, render) => ctx.body.querySelectorAll(`[data-${key}]`).forEach(b => (b.onclick = () => { set(Math.max(lo, Math.min(hi, get() + Number(b.dataset[key])))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-${key}="${b.dataset[key]}"]`)?.focus(); }));
const bindInput = (ctx, id, S, key = 'raw') => { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { S[key] = i.value; ctx.save(); }; };
const tiles = (key, opts) => `<div class="mtiles">${opts.map(([v, t]) => `<button class="choice mtile" data-${key}="${v}">${M(t)}</button>`).join('')}</div>`;
const rad = d => (d * Math.PI) / 180;
const O = [300, 170];

/* ───────── 1. AAA is not enough; name the condition; similar triangle ───────── */
function mountCongruenceTest(ctx) {
  const w = ctx.w; w.aa ??= { k: 1, ok: false }; w.cn ??= { ok: false }; w.sm ??= { raw: '', ok: false };
  const A = w.aa, C = w.cn, S = w.sm;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!A.ok) {
      const base = (f, x0, lab) => { const s = 60 * f, Pa = [x0, 270], Pb = [x0 + 3 * s, 270], Pc = [x0 + 3 * s * 0.35, 270 - 2.2 * s]; return [{ pts: [Pa, Pb, Pc] }, [{ v: Pa, p: Pb, q: Pc, label: '50°', r: 22 }, { v: Pb, p: Pc, q: Pa, label: '60°', r: 22 }], lab]; };
      const t1 = base(0.8, 60), t2 = base(0.8 * A.k, 330);
      ctx.setTitle('Two triangles with angles 50°, 60° and 70°.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · ANGLES ONLY ${progressDots(3, 0, 0)}</div>${figSVG({ h: 300, polys: [t1[0], t2[0]], angles: [...t1[1], ...t2[1]], note: 'Not drawn accurately', alt: `Two triangles with the same angles; the second is ${A.k} times as big` })}`;
      ctx.body.innerHTML = `<p>Resize the second triangle. Its angles never change. Must two triangles with the same three angles be congruent?</p>${stepper('ak', 'Size', A.k * 4, 4, 6, 1, '', `× ${A.k}`)}${tiles('aa', [['yes', 'Yes'], ['no', 'No']])}`;
    } else if (!C.ok) {
      ctx.setTitle('Sides 6 cm and 8 cm with 40° between them, in both triangles.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · NAME THE CONDITION ${progressDots(3, 1, 1)}</div>${figSVG(triABC(40, 82, 58, { A: '40°', c: '8 cm', b: '6 cm' }, 'Triangle with sides 6 cm and 8 cm and the 40° angle between them'))}`;
      ctx.body.innerHTML = `<p>Which condition shows two such triangles are congruent?</p>${tiles('cn', [['SSS', 'SSS'], ['SAS', 'SAS'], ['ASA', 'ASA'], ['RHS', 'RHS']])}`;
    } else if (!S.ok) {
      ctx.setTitle('The horizontal lines are parallel.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · SIMILAR TRIANGLES ${progressDots(3, 2, 2)}</div>${figSVG(aShape(4, 10, 6, ['4 cm', 'x', '6 cm', '9 cm']))}`;
      ctx.body.innerHTML = `<p>The small triangle at the top is similar to the whole triangle. Work out x.</p>${numRow('sx', S.raw, 'cm', 'sx')}`;
    } else return done(ctx, `<div class="mwork"><div>AAA → similar, not necessarily congruent</div><div>two sides and the included angle → SAS</div><div>scale factor 15 ÷ 6 = 2.5, x = 10 cm</div></div>`, 'Congruence needs enough facts to fix the triangle: SSS, SAS, ASA or RHS. Equal angles alone only make the triangles similar. For similar triangles, find the scale factor from a matching pair of whole sides (here 6 + 9 = 15 against 6) and multiply.');
    bind();
  };
  const bind = () => {
    bindStep(ctx, 'ak', () => A.k * 4, v => (A.k = v / 4), 4, 6, render);
    ctx.body.querySelectorAll('[data-aa]').forEach(b => (b.onclick = () => { if (b.dataset.aa === 'no') { A.ok = true; ctx.save(); render(); ctx.feedback('Same angles, different sizes: similar, not congruent ✓'); return; } ctx.feedback('Look at the two triangles: same angles, but one is bigger. Congruent shapes are the same size.', true); }));
    ctx.body.querySelectorAll('[data-cn]').forEach(b => (b.onclick = () => { const c = b.dataset.cn; if (c === 'SAS') { C.ok = true; ctx.save(); render(); return; } ctx.feedback(c === 'SSS' ? 'You only know two of the sides.' : c === 'ASA' ? 'You only know one angle.' : 'There is no right angle.', true); }));
    bindInput(ctx, 'sx', S);
    ctx.body.querySelector('[data-act="sx"]')?.addEventListener('click', () => { const v = vNum(S.raw); if (near(v, 10)) { S.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 6) ? 'Use the whole side, 6 + 9 = 15 cm, not 9 cm: scale factor 15 ÷ 6.' : near(v, 13) ? 'Multiply by the scale factor; do not add 9.' : 'Scale factor = whole side ÷ top side = 15 ÷ 6.', true); });
  };
  render();
}

/* ───────── 2. Move C round the circle; semicircle; cyclic quadrilateral ───────── */
const angAt = (V, A, B) => { const u = [A[0] - V[0], A[1] - V[1]], v = [B[0] - V[0], B[1] - V[1]]; return (Math.acos((u[0] * v[0] + u[1] * v[1]) / (Math.hypot(...u) * Math.hypot(...v))) * 180) / Math.PI; };
function mountCircleExplorer(ctx) {
  const w = ctx.w; w.ce ??= { c: 90, raw: '', ok: false }; w.sc ??= { c: 60, raw: '', ok: false }; w.cq ??= { raw: '', ok: false };
  const E = w.ce, S = w.sc, Q = w.cq;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!E.ok) {
      const A = P(-145), B = P(-35), C = P(E.c), atC = angAt(C, A, B);
      ctx.setTitle('Move C round the circle. Watch angle ACB.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · ANGLE AT THE CENTRE ${progressDots(3, 0, 0)}</div>${figSVG({ h: 340, circles: [{ c: O, r: 130 }], dots: [O], segs: [{ a: O, b: A }, { a: O, b: B }, { a: C, b: A }, { a: C, b: B }], angles: [{ v: O, p: A, q: B, label: '110°', r: 26 }, { v: C, p: A, q: B, label: `${atC.toFixed(0)}°`, r: 34 }], alt: `Angle AOB 110° at the centre; angle ACB ${atC.toFixed(0)}° with C at ${E.c}°` })}`;
      ctx.body.innerHTML = `<p>Angle AOB at the centre is 110°. Move C and watch angle ACB. What is angle ACB, and how does it compare with 110°?</p>${stepper('cc', 'Move C', E.c, 30, 150, 20, '°')}${numRow('ca', E.raw, '°', 'ca')}`;
    } else if (!S.ok) {
      const A = P(180), B = P(0), C = P(S.c), atC = angAt(C, A, B);
      ctx.setTitle('AB is a diameter. Move C.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · ANGLE IN A SEMICIRCLE ${progressDots(3, 1, 1)}</div>${figSVG({ h: 340, circles: [{ c: O, r: 130 }], dots: [O], segs: [{ a: A, b: B }, { a: C, b: A }, { a: C, b: B }], angles: [{ v: C, p: A, q: B, label: `${atC.toFixed(0)}°`, r: 30 }], alt: `Diameter AB; C on the circle at ${S.c}°; angle ACB ${atC.toFixed(0)}°` })}`;
      ctx.body.innerHTML = `<p>Move C anywhere on the circle. What is angle ACB always?</p>${stepper('sc', 'Move C', S.c, 20, 160, 20, '°')}${numRow('sa', S.raw, '°', 'sa')}`;
    } else if (!Q.ok) {
      const pts = [P(20), P(120), P(200), P(300)];
      ctx.setTitle('ABCD is a cyclic quadrilateral. Angle B = 100°.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · CYCLIC QUADRILATERAL ${progressDots(3, 2, 2)}</div>${figSVG({ h: 340, circles: [{ c: O, r: 130 }], polys: [{ pts }], angles: [{ v: pts[1], p: pts[2], q: pts[0], label: '100°', r: 28 }, { v: pts[3], p: pts[0], q: pts[2], label: 'x', r: 28 }], note: 'Not drawn accurately', alt: 'Cyclic quadrilateral ABCD with angle B 100° and angle D x' })}`;
      ctx.body.innerHTML = `<p>Work out x, the angle opposite B.</p>${numRow('qx', Q.raw, '°', 'qx')}`;
    } else return done(ctx, '<div class="mwork"><div>angle at the centre = 2 × angle at the circumference</div><div>angle in a semicircle = 90°</div><div>opposite angles of a cyclic quadrilateral add to 180°</div></div>', 'Wherever C is on the major arc, angle ACB is half of the 110° at the centre: 55°. A diameter makes a 180° angle at the centre, so the angle in a semicircle is always 90°. Opposite angles of a cyclic quadrilateral add up to 180°.');
    bind();
  };
  const bind = () => {
    bindStep(ctx, 'cc', () => E.c, v => (E.c = v), 30, 150, render); bindStep(ctx, 'sc', () => S.c, v => (S.c = v), 20, 160, render);
    bindInput(ctx, 'ca', E); bindInput(ctx, 'sa', S); bindInput(ctx, 'qx', Q);
    ctx.body.querySelector('[data-act="ca"]')?.addEventListener('click', () => { const v = vNum(E.raw); if (near(v, 55)) { E.ok = true; ctx.save(); render(); ctx.feedback('55° wherever C is: half of 110° ✓'); return; } ctx.feedback(near(v, 110) ? 'The angle at the circumference is smaller: it is half the angle at the centre.' : near(v, 220) ? 'Halve, do not double.' : 'Read angle ACB from the diagram as you move C.', true); });
    ctx.body.querySelector('[data-act="sa"]')?.addEventListener('click', () => { const v = vNum(S.raw); if (near(v, 90)) { S.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 180) ? '180° is the angle at the centre (a straight line). The angle at the circumference is half of it.' : 'Move C and read the angle: it never changes.', true); });
    ctx.body.querySelector('[data-act="qx"]')?.addEventListener('click', () => { const v = vNum(Q.raw); if (near(v, 80)) { Q.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 100) ? 'Opposite angles of a cyclic quadrilateral are not equal; they add to 180°.' : near(v, 260) ? 'Opposite angles add to 180°, not 360°.' : 'x + 100 = 180.', true); });
  };
  render();
}

/* ───────── 3. Cube stack: elevation, volume, Euler ───────── */
const STACK = [[2, 1, 3], [1, 0, 2]]; // front row, back row
function stackFig() {
  const rows = STACK.length, cols = STACK[0].length;
  return { h: 80 + rows * 60, polys: STACK.flatMap((row, i) => row.map((h, c) => ({ pts: [[210 + c * 60, 20 + (rows - 1 - i) * 60], [266 + c * 60, 20 + (rows - 1 - i) * 60], [266 + c * 60, 76 + (rows - 1 - i) * 60], [210 + c * 60, 76 + (rows - 1 - i) * 60]], fill: h ? ['', '#a8d5b533', '#a8d5b566', '#a8d5b599'][h] : 'none', dash: !h }))), labels: STACK.flatMap((row, i) => row.map((h, c) => ({ at: [238 + c * 60, 54 + (rows - 1 - i) * 60], t: String(h) }))).concat([{ at: [300, 40 + rows * 60 + 20], t: 'FRONT ↓' }]), alt: 'Plan of a cube stack: front row heights 2, 1, 3; back row heights 1, 0, 2' };
}
function mountCubeStacker(ctx) {
  const w = ctx.w; w.fe ??= { raw: '', ok: false }; w.vo ??= { raw: '', ok: false }; w.eu ??= { raw: '', ok: false };
  const F = w.fe, V = w.vo, U = w.eu;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!F.ok) {
      ctx.setTitle('Look at the stack from the front.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · FRONT ELEVATION ${progressDots(3, 0, 0)}</div>${figSVG(stackFig())}`;
      ctx.body.innerHTML = `<p>Each number is how many cubes are stacked on that square. From the front, each column shows its tallest stack. How many squares are in the front elevation?</p>${numRow('fe', F.raw, 'squares', 'fe')}`;
    } else if (!V.ok) {
      ctx.setTitle('How many cubes are there altogether?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · VOLUME ${progressDots(3, 1, 1)}</div>${figSVG(stackFig())}`;
      ctx.body.innerHTML = `<p>Each cube is 1 cm³. Work out the volume.</p>${numRow('vo', V.raw, 'cm³', 'vo')}`;
    } else if (!U.ok) {
      ctx.setTitle('A pentagonal prism has 7 faces and 10 vertices.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · F + V − E = 2 ${progressDots(3, 2, 2)}</div><div class="mwork"><div>cube: 6 + 8 − 12 = 2</div><div>triangular prism: 5 + 6 − 9 = 2</div><div>square-based pyramid: 5 + 5 − 8 = 2</div></div>`;
      ctx.body.innerHTML = `<p>The pattern F + V − E = 2 works for every solid in the table. How many edges does the pentagonal prism have?</p>${numRow('eu', U.raw, 'edges', 'eu')}`;
    } else return done(ctx, figSVG(stackFig()), 'An elevation shows the tallest stack in each line of sight: 2, 1 and 3 from the front, so 6 squares. The volume adds every stack: 2 + 1 + 3 + 1 + 2 = 9 cm³. For a polyhedron, faces + vertices − edges = 2, so the pentagonal prism has 7 + 10 − 2 = 15 edges.');
    bind();
  };
  const bind = () => {
    bindInput(ctx, 'fe', F); bindInput(ctx, 'vo', V); bindInput(ctx, 'eu', U);
    ctx.body.querySelector('[data-act="fe"]')?.addEventListener('click', () => { const v = vNum(F.raw); if (near(v, 6)) { F.ok = true; ctx.save(); render(); ctx.feedback('Columns: max(2, 1) + max(1, 0) + max(3, 2) = 2 + 1 + 3 = 6 ✓'); return; } ctx.feedback(near(v, 9) ? 'That counts every cube. Cubes behind others are hidden in the front view.' : near(v, 5) ? 'That is the number of squares in the plan.' : 'Take the tallest stack in each column, front to back.', true); });
    ctx.body.querySelector('[data-act="vo"]')?.addEventListener('click', () => { const v = vNum(V.raw); if (near(v, 9)) { V.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 6) ? 'That is the front elevation. Count every cube, including hidden ones.' : 'Add all the numbers on the plan.', true); });
    ctx.body.querySelector('[data-act="eu"]')?.addEventListener('click', () => { const v = vNum(U.raw); if (near(v, 15)) { U.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 17) ? 'Subtract the 2: E = F + V − 2.' : near(v, 19) ? 'E = 7 + 10 − 2.' : 'Rearrange F + V − E = 2 for E.', true); });
  };
  render();
}

/* ───────── 4. Choose the rule; sine rule; area ───────── */
function mountTriangleSolver(ctx) {
  const w = ctx.w; w.ch ??= { i: 0, ok: false }; w.sr ??= { raw: '', ok: false }; w.ar ??= { raw: '', ok: false };
  const C = w.ch, S = w.sr, A = w.ar;
  const CASES = [['two sides and the angle between them', 'cos', 'Two sides and the included angle: cosine rule.'], ['two angles and a side opposite one of them', 'sin', 'A side with its opposite angle: sine rule.'], ['all three sides', 'cos', 'Three sides, find an angle: cosine rule.']];
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!C.ok) {
      const [desc] = CASES[C.i];
      ctx.setTitle(`Case ${C.i + 1} of 3: you know ${desc}.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · WHICH RULE? ${progressDots(3, 0, 0)}</div><div class="mwork"><div>${M('sine rule: {a/sin A} = {b/sin B}')}</div><div>cosine rule: a² = b² + c² − 2bc cos A</div></div>`;
      ctx.body.innerHTML = `<p>Which rule do you use first?</p>${tiles('rule', [['sin', 'Sine rule'], ['cos', 'Cosine rule']])}`;
    } else if (!S.ok) {
      ctx.setTitle('A = 40°, B = 65°, BC = 8 cm. Find AC.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · SINE RULE ${progressDots(3, 1, 1)}</div>${figSVG(triABC(40, 65, 75, { A: '40°', B: '65°', a: '8 cm', b: 'b' }, 'Triangle A 40°, B 65°, BC 8 cm, AC b'))}`;
      ctx.body.innerHTML = `<p>${M('{b/sin 65°} = {8/sin 40°}')}. Work out b to 1 decimal place.</p>${numRow('sb', S.raw, 'cm', 'sb')}`;
    } else if (!A.ok) {
      ctx.setTitle('Two sides of 7 cm and 9 cm with 50° between them.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · AREA ${progressDots(3, 2, 2)}</div>${figSVG(triABC(50, 74, 56, { A: '50°', b: '7 cm', c: '9 cm' }, 'Sides 7 cm and 9 cm with a 50° angle between them'))}`;
      ctx.body.innerHTML = `<p>${M('Area = {1/2}ab sin C')}. Work out the area to 1 decimal place.</p>${numRow('ta', A.raw, 'cm²', 'ta')}`;
    } else return done(ctx, '<div class="mwork"><div>side + opposite angle known → sine rule</div><div>SAS or SSS → cosine rule</div><div>b ≈ 11.3 cm; area ≈ 24.1 cm²</div></div>', 'Use the sine rule when you know a side and the angle opposite it. Use the cosine rule when you know two sides and the angle between them, or all three sides. The area of any triangle is {1/2}ab sin C, with C between sides a and b.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-rule]').forEach(b => (b.onclick = () => { const [, want, why] = CASES[C.i]; if (b.dataset.rule === want) { C.i += 1; if (C.i >= CASES.length) C.ok = true; ctx.save(); render(); ctx.feedback(why + ' ✓'); return; } ctx.feedback(want === 'cos' ? 'The sine rule needs a side and the angle opposite it, and you do not have such a pair.' : 'You have a side with its opposite angle, so the sine rule is quicker.', true); }));
    bindInput(ctx, 'sb', S); bindInput(ctx, 'ta', A);
    const b = (8 * Math.sin(rad(65))) / Math.sin(rad(40)), ar = 0.5 * 7 * 9 * Math.sin(rad(50));
    ctx.body.querySelector('[data-act="sb"]')?.addEventListener('click', () => { const v = vNum(S.raw); if (near(v, Math.round(b * 10) / 10, 0.0501)) { S.ok = true; ctx.save(); render(); ctx.feedback(`b = 8 × sin 65° ÷ sin 40° ≈ ${b.toFixed(1)} cm ✓`); return; } ctx.feedback(near(v, 5.7, 0.06) ? 'Upside down: b = 8 × sin 65° ÷ sin 40°.' : 'Multiply both sides by sin 65°.', true); });
    ctx.body.querySelector('[data-act="ta"]')?.addEventListener('click', () => { const v = vNum(A.raw); if (near(v, Math.round(ar * 10) / 10, 0.0501)) { A.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 48.3, 0.06) ? 'Multiply by {1/2}.' : near(v, 31.5, 0.06) ? 'The angle is not 90°: multiply by sin 50°.' : near(v, 20.3, 0.06) ? 'Use sin, not cos.' : '0.5 × 7 × 9 × sin 50°.', true); });
  };
  render();
}

/* ───────── 5. Build a vector; a route; 2a − b ───────── */
function mountVectorWalk(ctx) {
  const w = ctx.w; w.vw ??= { x: 0, y: 0, ok: false }; w.rt ??= { ok: false }; w.cb ??= { top: '', bot: '', ok: false };
  const V = w.vw, R = w.rt, C = w.cb, T = [4, -3];
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!V.ok) {
      ctx.setTitle('Make the vector from O to the target T.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · ${M(`{vec ${String(V.x).replace('-', '−')};${String(V.y).replace('-', '−')}}`)} ${progressDots(3, 0, 0)}</div>${graphSVG({ xr: [-5, 5], yr: [-5, 5], polys: [{ pts: [[0, 0], [V.x, V.y]], label: 'your vector' }], points: [[0, 0, 'O'], [...T, 'T']] })}`;
      ctx.body.innerHTML = `<p>The top number moves across, the bottom number moves up.</p>${stepper('vx', 'Top', V.x, -5, 5, 1)}${stepper('vy', 'Bottom', V.y, -5, 5, 1)}<button class="primary mbtn" data-act="vt">Check</button>`;
    } else if (!R.ok) {
      ctx.setTitle('OACB is a parallelogram with OA = a and OB = b.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · A ROUTE ${progressDots(3, 1, 1)}</div>${figSVG({ h: 280, polys: [{ pts: [[120, 230], [380, 230], [480, 70], [220, 70]] }], segs: [{ a: [380, 230], b: [220, 70], dash: true }], labels: [{ at: [104, 248], t: 'O' }, { at: [392, 252], t: 'A' }, { at: [494, 66], t: 'C' }, { at: [206, 66], t: 'B' }, { at: [250, 252], t: 'a' }, { at: [152, 150], t: 'b' }], alt: 'Parallelogram OACB with OA = a and OB = b; AB dashed' })}`;
      ctx.body.innerHTML = `<p>Which is the vector AB?</p>${tiles('rt', [['ba', 'b − a'], ['ab', 'a − b'], ['sum', 'a + b']])}`;
    } else if (!C.ok) {
      ctx.setTitle(`a = (3, 1) and b = (−1, 4). Work out 2a − b.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · COMBINE ${progressDots(3, 2, 2)}</div><div class="mwork"><div>${M('a = {vec 3;1}')}</div><div>${M('b = {vec −1;4}')}</div></div>`;
      ctx.body.innerHTML = `<div class="mpair"><label class="field-label">Top <input class="lab-input mtext msmall" id="ct" inputmode="decimal" autocomplete="off" value="${esc(C.top)}"></label><label class="field-label">Bottom <input class="lab-input mtext msmall" id="cbm" inputmode="decimal" autocomplete="off" value="${esc(C.bot)}"></label></div><button class="primary mbtn" data-act="cv">Check</button>`;
    } else return done(ctx, graphSVG({ xr: [-5, 8], yr: [-5, 5], polys: [{ pts: [[0, 0], [4, -3]], label: 'OT' }, { pts: [[0, 0], [7, -2]], label: '2a − b' }] }), 'A column vector gives the movement across and up. Going backwards along a vector makes it negative, so AB = −a + b = b − a. Work with column vectors number by number: 2a − b = (6 − (−1), 2 − 4) = (7, −2).');
    bind();
  };
  const bind = () => {
    bindStep(ctx, 'vx', () => V.x, v => (V.x = v), -5, 5, render); bindStep(ctx, 'vy', () => V.y, v => (V.y = v), -5, 5, render);
    ctx.body.querySelector('[data-act="vt"]')?.addEventListener('click', () => { if (V.x === 4 && V.y === -3) { V.ok = true; ctx.save(); render(); ctx.feedback('OT = (4, −3) ✓'); return; } ctx.feedback(V.x === -3 && V.y === 4 ? 'Swapped: the top number is across.' : V.x === 4 && V.y === 3 ? 'T is below O, so the bottom number is negative.' : 'Your vector does not end at T yet.', true); });
    ctx.body.querySelectorAll('[data-rt]').forEach(b => (b.onclick = () => { if (b.dataset.rt === 'ba') { R.ok = true; ctx.save(); render(); return; } ctx.feedback(b.dataset.rt === 'ab' ? 'That is BA. AB starts at A: back along a, then along b.' : 'a + b is OC. From A to B you go back along a.', true); }));
    bindInput(ctx, 'ct', C, 'top'); bindInput(ctx, 'cbm', C, 'bot');
    ctx.body.querySelector('[data-act="cv"]')?.addEventListener('click', () => { const t = vNum(C.top), b = vNum(C.bot); if (near(t, 7) && near(b, -2)) { C.ok = true; ctx.save(); render(); return; } ctx.feedback(near(t, 5) && near(b, 6) ? 'Subtract b, do not add it.' : near(t, 7) ? 'Check the bottom: 2 × 1 − 4.' : near(t, 2) && near(b, -3) ? 'Double a first: 2a = (6, 2).' : 'Top: 2 × 3 − (−1). Bottom: 2 × 1 − 4.', true); });
  };
  render();
}

export const MODELS13 = { 'congruence-test': mountCongruenceTest, 'circle-theorem-explorer': mountCircleExplorer, 'cube-stacker': mountCubeStacker, 'triangle-solver': mountTriangleSolver, 'vector-walk': mountVectorWalk };
