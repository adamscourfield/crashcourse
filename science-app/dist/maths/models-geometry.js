// Investigations for Geometry batch 1: angle facts, polygon triangulation, cut-and-move areas,
// unrolling circles and stacking prism layers. Every render checks ctx.isActive.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { btn, progressDots } from './models-number.js?v=20261023-maths-r9';
import { figSVG } from './geomfig.js?v=20261023-maths-r9';
import { parallelFig, triFig, prismFig, cylFig, sectorFig } from './skills-geometry.js?v=20261023-maths-r9';

const M = s => mathHTML(s);
const vNum = s => { const t = String(s ?? '').trim().replace(/−/g, '-').replace(/°$/, ''); return t === '' || Number.isNaN(Number(t)) ? null : Number(t); };
const near = (a, b, tol = 1e-9) => a !== null && Math.abs(a - b) <= tol;
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${text}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
const rad = d => (d * Math.PI) / 180;
const at = (c, r, d) => [+(c[0] + r * Math.cos(rad(d))).toFixed(1), +(c[1] - r * Math.sin(rad(d))).toFixed(1)];
const numRow = (id, val, unit, act) => `<div class="mrow-in"><input class="lab-input mnum" id="${id}" inputmode="decimal" autocomplete="off" value="${esc(val)}"><span>${unit}</span><button class="primary mbtn" data-act="${act}">Check</button></div>`;
const NOTE = 'Not drawn accurately';

/* ───────── 1. Straight line, triangle, alternate angles ───────── */
function lineFig(a) {
  const O = [300, 220];
  return { h: 260, segs: [{ a: [60, 220], b: [540, 220] }, { a: O, b: at(O, 170, 180 - a) }], angles: [{ v: O, p: [540, 220], q: at(O, 100, 180 - a), label: `b = ${180 - a}°`, r: 34 }, { v: O, p: at(O, 100, 180 - a), q: [60, 220], label: `a = ${a}°`, r: 44 }], dots: [O], alt: `Straight line split into a = ${a}° and b = ${180 - a}°` };
}
function mountAngleExplorer(ctx) {
  const w = ctx.w; w.sl ??= { a: 60, raw: '', ok: false }; w.tr ??= { raw: '', ok: false }; w.pl ??= { ok: false };
  const L = w.sl, T = w.tr, P = w.pl;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!L.ok) {
      ctx.setTitle('Angles on a straight line.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · STRAIGHT LINE ${progressDots(3, 0, 0)}</div>${figSVG(lineFig(L.a))}<div class="mwork"><div>a + b = ${L.a} + ${180 - L.a} = 180°</div></div>`;
      ctx.body.innerHTML = `<p>Turn the ray and watch a + b. Then use what you see: if a = 47°, what is b?</p><div class="mrow"><span>a</span><div class="mstepper">${btn('data-a="-10"', '−10°', L.a <= 30 ? 'disabled' : '')}<output>${L.a}°</output>${btn('data-a="10"', '+10°', L.a >= 150 ? 'disabled' : '')}</div></div>${numRow('sa', L.raw, '°', 'sa')}`;
    } else if (!T.ok) {
      ctx.setTitle('Find the missing angle in the triangle.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · TRIANGLE ${progressDots(3, 1, 1)}</div>${figSVG(triFig(50, 75, ['50°', '75°', 'x']))}`;
      ctx.body.innerHTML = `<p>The angles in a triangle add up to 180°. Work out x.</p>${numRow('tx', T.raw, '°', 'tx')}`;
    } else if (!P.ok) {
      ctx.setTitle('Which angle is alternate to the 70° angle?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · PARALLEL LINES ${progressDots(3, 2, 2)}</div>${figSVG(parallelFig(70, [{ at: 'Q', quad: 'tr', label: '70°' }, { at: 'P', quad: 'bl', label: 'a' }, { at: 'P', quad: 'br', label: 'b' }, { at: 'P', quad: 'tr', label: 'c' }]))}`;
      ctx.body.innerHTML = `<p>Alternate angles sit between the parallel lines, on opposite sides of the crossing line (a Z shape).</p><div class="mtiles">${['a', 'b', 'c'].map(l => `<button class="choice mtile" data-pl="${l}">Angle ${l}</button>`).join('')}</div>`;
    } else return done(ctx, figSVG(parallelFig(70, [{ at: 'Q', quad: 'tr', label: '70°' }, { at: 'P', quad: 'bl', label: '70°' }, { at: 'P', quad: 'br', label: '110°' }, { at: 'P', quad: 'tr', label: '70°' }])), 'Angles on a straight line add up to 180° and angles in a triangle add up to 180°. With parallel lines, alternate angles (Z) are equal, corresponding angles (F) are equal, and co-interior angles (C) add up to 180°. Name the fact each time you use it.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-a]').forEach(b => (b.onclick = () => { L.a = Math.max(30, Math.min(150, L.a + Number(b.dataset.a))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-a="${b.dataset.a}"]`)?.focus(); }));
    const sa = ctx.body.querySelector('#sa'); if (sa) sa.oninput = () => { L.raw = sa.value; ctx.save(); };
    ctx.body.querySelector('[data-act="sa"]')?.addEventListener('click', () => { const v = vNum(L.raw); if (near(v, 133)) { L.ok = true; ctx.save(); render(); ctx.feedback('180 − 47 = 133° ✓'); return; } ctx.feedback(near(v, 47) ? 'Equal angles come from vertically opposite angles. These two make a straight line.' : near(v, 313) ? '360° is for angles around a point. A straight line is 180°.' : near(v, 43) ? '43° makes a right angle (90°). A straight line is 180°.' : 'a + b always came to 180°. Work out 180 − 47.', true); });
    const tx = ctx.body.querySelector('#tx'); if (tx) tx.oninput = () => { T.raw = tx.value; ctx.save(); };
    ctx.body.querySelector('[data-act="tx"]')?.addEventListener('click', () => { const v = vNum(T.raw); if (near(v, 55)) { T.ok = true; ctx.save(); render(); ctx.feedback('180 − 50 − 75 = 55° ✓'); return; } ctx.feedback(near(v, 130) || near(v, 105) ? 'Subtract both known angles from 180°.' : near(v, 235) ? 'Angles in a triangle add up to 180°, not 360°.' : near(v, 125) ? '125° is 50 + 75. Subtract that from 180°.' : '50 + 75 + x = 180.', true); });
    ctx.body.querySelectorAll('[data-pl]').forEach(b => (b.onclick = () => { const l = b.dataset.pl; if (l === 'a') { P.ok = true; ctx.save(); render(); return; } ctx.feedback(l === 'b' ? 'Angle b is co-interior with 70° (a C shape): they add up to 180°, so b = 110°.' : 'Angle c is corresponding (an F shape). It is also 70°, but it is not between the parallel lines.', true); }));
  };
  render();
}

/* ───────── 2. Triangulate a polygon; regular exterior angles ───────── */
function splitFig(n) {
  const O = [300, 170], R = 140, pts = Array.from({ length: n }, (_, i) => at(O, R, 90 + (360 * i) / n));
  const segs = []; for (let i = 2; i < n - 1; i++) segs.push({ a: pts[0], b: pts[i], dash: true, colour: 'accent' });
  return { h: 330, polys: [{ pts }], segs, dots: [pts[0]], alt: `Polygon with ${n} sides split into ${n - 2} triangles from one vertex` };
}
const PN = { 3: 'triangle', 4: 'quadrilateral', 5: 'pentagon', 6: 'hexagon', 7: 'heptagon', 8: 'octagon', 9: 'nonagon', 10: 'decagon' };
function mountPolygonSplit(ctx) {
  const w = ctx.w; w.ps ??= { n: 4, raw: '', ok: false }; w.ex ??= { raw: '', ok: false };
  const S = w.ps, E = w.ex;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!S.ok) {
      ctx.setTitle('Split polygons into triangles.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · ${PN[S.n].toUpperCase()} ${progressDots(2, 0, 0)}</div>${figSVG(splitFig(S.n))}<table class="mtable"><thead><tr><th>Sides</th><th>Triangles</th><th>Angle sum</th></tr></thead><tbody><tr><td>${S.n}</td><td>${S.n - 2}</td><td>${S.n - 2} × 180 = ${(S.n - 2) * 180}°</td></tr></tbody></table>`;
      ctx.body.innerHTML = `<p>Change the number of sides. Then work out the sum of the interior angles of a decagon (10 sides).</p><div class="mrow"><span>Sides</span><div class="mstepper">${btn('data-n="-1"', '−1', S.n <= 3 ? 'disabled' : '')}<output>${S.n}</output>${btn('data-n="1"', '+1', S.n >= 9 ? 'disabled' : '')}</div></div>${numRow('ds', S.raw, '°', 'ds')}`;
    } else if (!E.ok) {
      ctx.setTitle('A regular octagon: each exterior angle.');
      const O = [300, 170], pts = Array.from({ length: 8 }, (_, i) => at(O, 120, 90 + 45 * i)), ext = [pts[0][0] + (pts[0][0] - pts[7][0]) * 0.9, pts[0][1] + (pts[0][1] - pts[7][1]) * 0.9];
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · EXTERIOR ANGLES ${progressDots(2, 1, 1)}</div>${figSVG({ h: 330, polys: [{ pts }], segs: [{ a: pts[0], b: ext, dash: true }], angles: [{ v: pts[0], p: ext, q: pts[1], label: 'e', r: 30 }], alt: 'Regular octagon with one side extended to show the exterior angle e' })}`;
      ctx.body.innerHTML = `<p>Walk all the way round any polygon and you turn through 360° in total. Work out e for a regular octagon.</p>${numRow('oe', E.raw, '°', 'oe')}`;
    } else return done(ctx, `<div class="mwork"><div>interior sum = (n − 2) × 180°</div><div>decagon: 8 × 180 = 1440°</div><div>regular octagon: exterior 360 ÷ 8 = 45°, interior 135°</div></div>`, 'From one vertex, a polygon with n sides splits into n − 2 triangles, so its interior angles add up to (n − 2) × 180°. The exterior angles always add up to 360°, so for a regular polygon each exterior angle is 360 ÷ n and each interior angle is 180° minus that.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-n]').forEach(b => (b.onclick = () => { S.n = Math.max(3, Math.min(9, S.n + Number(b.dataset.n))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-n="${b.dataset.n}"]`)?.focus(); }));
    const ds = ctx.body.querySelector('#ds'); if (ds) ds.oninput = () => { S.raw = ds.value; ctx.save(); };
    ctx.body.querySelector('[data-act="ds"]')?.addEventListener('click', () => { const v = vNum(S.raw); if (near(v, 1440)) { S.ok = true; ctx.save(); render(); ctx.feedback('10 − 2 = 8 triangles, 8 × 180 = 1440° ✓'); return; } ctx.feedback(near(v, 1800) ? 'A decagon makes 8 triangles, not 10: count them on the diagram.' : near(v, 360) ? '360° is the sum of the exterior angles.' : near(v, 144) ? '144° is one interior angle of a regular decagon. The question asks for the sum.' : 'Sides − 2 triangles, each 180°.', true); });
    const oe = ctx.body.querySelector('#oe'); if (oe) oe.oninput = () => { E.raw = oe.value; ctx.save(); };
    ctx.body.querySelector('[data-act="oe"]')?.addEventListener('click', () => { const v = vNum(E.raw); if (near(v, 45)) { E.ok = true; ctx.save(); render(); ctx.feedback('360 ÷ 8 = 45° ✓'); return; } ctx.feedback(near(v, 135) ? '135° is the interior angle. The exterior angle is 180 − 135.' : near(v, 1080) ? '1080° is the sum of the interior angles.' : 'The 8 equal exterior angles share 360°.', true); });
  };
  render();
}

/* ───────── 3. Cut and move a parallelogram; double a trapezium ───────── */
function paraCut(moved) {
  const base = [[120, 230], [440, 230], [520, 70], [200, 70]];
  const pieces = moved ? [{ pts: [[200, 230], [440, 230], [520, 70], [200, 70]] }, { pts: [[440, 230], [520, 230], [520, 70]], fill: '#a8d5b555' }] : [{ pts: base }, { pts: [[120, 230], [200, 230], [200, 70]], fill: '#a8d5b555' }];
  return { h: 280, polys: pieces, segs: [{ a: [200, 70], b: [200, 230], dash: true }], angles: [{ v: [200, 230], p: [440, 230], q: [200, 70], right: true }], dims: [{ a: moved ? [200, 230] : [120, 230], b: moved ? [520, 230] : [440, 230], t: '8 cm', off: -22 }, { a: [200, 230], b: [200, 70], t: '5 cm', off: moved ? 26 : -20 }, ...(moved ? [] : [{ a: [440, 230], b: [520, 70], t: '6 cm', off: -24 }])], note: NOTE, alt: moved ? 'The triangle has moved: a rectangle 8 cm by 5 cm' : 'Parallelogram, base 8 cm, height 5 cm, sloping side 6 cm' };
}
function trapDouble(two) {
  // 10 cm = 200 px. Original: bottom 10, top 4. The turned-over copy has bottom 4 and top 10.
  const polys = [{ pts: [[90, 230], [290, 230], [250, 70], [170, 70]] }];
  if (two) polys.push({ pts: [[290, 230], [370, 230], [450, 70], [250, 70]], fill: '#a8d5b555' });
  const dims = two ? [{ a: [90, 230], b: [370, 230], t: '10 + 4 = 14 cm', off: -22 }, { a: [170, 230], b: [170, 70], t: '6 cm', off: 26 }]
    : [{ a: [170, 70], b: [250, 70], t: '4 cm', off: 18 }, { a: [90, 230], b: [290, 230], t: '10 cm', off: -22 }, { a: [170, 230], b: [170, 70], t: '6 cm', off: 26 }];
  return { h: 280, polys, dims, segs: [{ a: [170, 70], b: [170, 230], dash: true }], note: NOTE, alt: two ? 'Two copies of the trapezium make a parallelogram with base 14 cm and height 6 cm' : 'Trapezium with parallel sides 4 cm and 10 cm, height 6 cm' };
}
function mountAreaCutter(ctx) {
  const w = ctx.w; w.pc ??= { moved: false, raw: '', ok: false }; w.td ??= { two: false, raw: '', ok: false };
  const P = w.pc, T = w.td;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!P.ok) {
      ctx.setTitle('Cut a triangle off the parallelogram and move it.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · PARALLELOGRAM ${progressDots(2, 0, 0)}</div>${figSVG(paraCut(P.moved))}`;
      ctx.body.innerHTML = `<p>${P.moved ? 'The shape is now a rectangle with the same base and height. Work out the area of the parallelogram.' : 'Move the shaded triangle to the other end.'}</p><button class="secondary mbtn" data-act="cut">${P.moved ? 'Put it back' : 'Move the triangle'}</button>${numRow('pa', P.raw, 'cm²', 'pa')}`;
    } else if (!T.ok) {
      ctx.setTitle('Two trapezia make a parallelogram.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · TRAPEZIUM ${progressDots(2, 1, 1)}</div>${figSVG(trapDouble(T.two))}`;
      ctx.body.innerHTML = `<p>${T.two ? 'Two copies, one turned over, make a parallelogram 14 cm long. Work out the area of ONE trapezium.' : 'Add a second copy, turned upside down.'}</p><button class="secondary mbtn" data-act="two">${T.two ? 'Remove the copy' : 'Add a copy'}</button>${numRow('ta', T.raw, 'cm²', 'ta')}`;
    } else return done(ctx, figSVG(trapDouble(true)), 'Parallelogram = base × perpendicular height, because cutting and moving a triangle turns it into a rectangle. The sloping side is never used. Two copies of a trapezium make a parallelogram with base a + b, so one trapezium is {1/2}(a + b)h: here {1/2} × 14 × 6 = 42 cm².');
    bind();
  };
  const bind = () => {
    ctx.body.querySelector('[data-act="cut"]')?.addEventListener('click', () => { P.moved = !P.moved; ctx.feedback(''); ctx.save(); render(); });
    ctx.body.querySelector('[data-act="two"]')?.addEventListener('click', () => { T.two = !T.two; ctx.feedback(''); ctx.save(); render(); });
    const pa = ctx.body.querySelector('#pa'); if (pa) pa.oninput = () => { P.raw = pa.value; ctx.save(); };
    ctx.body.querySelector('[data-act="pa"]')?.addEventListener('click', () => { const v = vNum(P.raw); if (near(v, 40)) { P.ok = true; ctx.save(); render(); ctx.feedback('8 × 5 = 40 cm² ✓'); return; } ctx.feedback(near(v, 48) ? '6 cm is the sloping side. Use the perpendicular height, 5 cm.' : near(v, 20) ? 'Only a triangle is halved. The rectangle is 8 × 5.' : near(v, 26) ? 'That is the perimeter of the rectangle. Area is base × height.' : 'The rectangle is 8 cm by 5 cm.', true); });
    const ta = ctx.body.querySelector('#ta'); if (ta) ta.oninput = () => { T.raw = ta.value; ctx.save(); };
    ctx.body.querySelector('[data-act="ta"]')?.addEventListener('click', () => { const v = vNum(T.raw); if (near(v, 42)) { T.ok = true; ctx.save(); render(); ctx.feedback('{1/2} × (4 + 10) × 6 = 42 cm² ✓'); return; } ctx.feedback(near(v, 84) ? '84 cm² is both copies. Halve it for one trapezium.' : near(v, 240) || near(v, 120) ? 'Add the parallel sides, do not multiply them.' : near(v, 60) ? 'Use both parallel sides: (4 + 10), then halve.' : 'Area of the parallelogram ÷ 2.', true); });
  };
  render();
}

/* ───────── 4. C ÷ d; circumference; sector fraction ───────── */
const CIRC = [[2, 6.28], [5, 15.71], [8, 25.13]];
function mountCircleUnroll(ctx) {
  const w = ctx.w; w.cd ??= { raw: '', ok: false }; w.c7 ??= { raw: '', ok: false }; w.sc ??= { ok: false };
  const A = w.cd, B = w.c7, C = w.sc;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!A.ok) {
      ctx.setTitle('Measure round three circles.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · CIRCUMFERENCE ÷ DIAMETER ${progressDots(3, 0, 0)}</div><table class="mtable"><thead><tr><th>Diameter d</th><th>Circumference C</th><th>C ÷ d</th></tr></thead><tbody>${CIRC.map(([d, c]) => `<tr><td>${d} cm</td><td>${c} cm</td><td>?</td></tr>`).join('')}</tbody></table>`;
      ctx.body.innerHTML = `<p>Work out C ÷ d for any row. Give it to 2 decimal places.</p>${numRow('cd', A.raw, '', 'cd')}`;
    } else if (!B.ok) {
      ctx.setTitle('A circle has diameter 7 cm.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · USE π ${progressDots(3, 1, 1)}</div>${figSVG({ h: 300, circles: [{ c: [300, 150], r: 120 }], segs: [{ a: [180, 150], b: [420, 150] }], dots: [[300, 150]], labels: [{ at: [300, 140], t: '7 cm' }], alt: 'Circle with diameter 7 cm' })}`;
      ctx.body.innerHTML = `<p>C = π × d. Work out the circumference to 1 decimal place. Use the π button on your calculator.</p>${numRow('c7', B.raw, 'cm', 'c7')}`;
    } else if (!C.ok) {
      ctx.setTitle('What fraction of the circle is this sector?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · SECTORS ${progressDots(3, 2, 2)}</div>${figSVG(sectorFig(6, 45, '6 cm', '45°'))}`;
      ctx.body.innerHTML = `<div class="mtiles">${['1/8', '1/4', '45/100', '1/45'].map(f => `<button class="choice mtile" data-sf="${f}">${M(`{${f}}`)}</button>`).join('')}</div>`;
    } else return done(ctx, `<div class="mwork"><div>C ÷ d = π ≈ 3.14 for every circle</div><div>d = 7: C = 7π ≈ 22.0 cm</div><div>45° sector = {45/360} = {1/8} of the circle</div></div>`, 'Every circle has the same ratio of circumference to diameter: π ≈ 3.14159. So C = πd = 2πr, and the area is πr². A sector with angle θ is the fraction {θ/360} of the circle, so multiply the circumference or the area by that fraction.');
    bind();
  };
  const bind = () => {
    for (const [id, S] of [['cd', A], ['c7', B]]) { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { S.raw = i.value; ctx.save(); }; }
    ctx.body.querySelector('[data-act="cd"]')?.addEventListener('click', () => { const v = vNum(A.raw); if (near(v, 3.14, 0.006)) { A.ok = true; ctx.save(); render(); ctx.feedback('6.28 ÷ 2 = 15.71 ÷ 5 = 25.13 ÷ 8 ≈ 3.14 ✓ That number is π.'); return; } ctx.feedback(near(v, 6.28, 0.01) ? 'That is C ÷ radius. Divide by the diameter.' : near(v, 0.32, 0.01) ? 'That is d ÷ C. Divide the circumference by the diameter.' : 'Try 6.28 ÷ 2.', true); });
    ctx.body.querySelector('[data-act="c7"]')?.addEventListener('click', () => { const v = vNum(B.raw); if (near(v, 22)) { B.ok = true; ctx.save(); render(); ctx.feedback('π × 7 = 21.99… ≈ 22.0 cm ✓'); return; } ctx.feedback(near(v, 44.0, 0.06) ? 'That is 2π × 7. 7 cm is the diameter, so C = π × 7.' : near(v, 38.5, 0.06) ? 'That is the area (πr² with r = 3.5).' : near(v, 153.9, 0.06) ? 'That is π × 7², an area. Circumference is π × d.' : near(v, 21.98, 0.001) ? '21.98 comes from using 3.14. Use the π button, then round to 1 decimal place.' : near(v, 21.99, 0.001) || near(v, 21.9, 0.001) ? 'π × 7 = 21.991…, which rounds to 22.0 to 1 decimal place.' : 'C = π × 7.', true); });
    ctx.body.querySelectorAll('[data-sf]').forEach(b => (b.onclick = () => { const f = b.dataset.sf; if (f === '1/8') { C.ok = true; ctx.save(); render(); return; } ctx.feedback(f === '1/4' ? 'A quarter is 90°. This sector is 45°.' : f === '45/100' ? 'A whole turn is 360°, not 100: {45/360}.' : 'The angle goes on top: {45/360}.', true); }));
  };
  render();
}

/* ───────── 5. Stack prism layers; cylinder in terms of π ───────── */
function mountPrismBuilder(ctx) {
  const w = ctx.w; w.pr ??= { l: 1, raw: '', ok: false }; w.cy ??= { raw: '', ok: false };
  const P = w.pr, C = w.cy;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!P.ok) {
      ctx.setTitle('Build a prism from 1 cm layers.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · LAYERS ${progressDots(2, 0, 0)}</div>${figSVG(prismFig(4, 3, P.l))}<table class="mtable"><thead><tr><th>Length</th><th>Cross-section</th><th>Volume</th></tr></thead><tbody><tr><td>${P.l} cm</td><td>{1/2} × 4 × 3 = 6 cm²</td><td>6 × ${P.l} = ${6 * P.l} cm³</td></tr></tbody></table>`;
      ctx.body.innerHTML = `<p>Each 1 cm layer is a triangle of 6 cm². Add layers. Then work out the volume when the prism is 10 cm long.</p><div class="mrow"><span>Length</span><div class="mstepper">${btn('data-l="-1"', '−1', P.l <= 1 ? 'disabled' : '')}<output>${P.l} cm</output>${btn('data-l="1"', '+1', P.l >= 6 ? 'disabled' : '')}</div></div>${numRow('pv', P.raw, 'cm³', 'pv')}`;
    } else if (!C.ok) {
      ctx.setTitle('A cylinder is a prism with a circular cross-section.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · CYLINDER ${progressDots(2, 1, 1)}</div>${figSVG(cylFig(3, 5))}`;
      ctx.body.innerHTML = `<p>Radius 3 cm, height 5 cm. Volume = πr²h. Give the volume in terms of π.</p><div class="mrow-in"><span>Volume =</span><input class="lab-input mnum" id="cv" inputmode="decimal" autocomplete="off" value="${esc(C.raw)}"><span>π cm³</span><button class="primary mbtn" data-act="cv">Check</button></div>`;
    } else return done(ctx, figSVG(cylFig(3, 5)), 'A prism is the same cross-section all the way along, so its volume is the area of the cross-section × the length. A cylinder is a prism with a circle for its cross-section: V = πr²h, here π × 9 × 5 = 45π cm³. Leave π in the answer when asked for an exact value.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-l]').forEach(b => (b.onclick = () => { P.l = Math.max(1, Math.min(6, P.l + Number(b.dataset.l))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-l="${b.dataset.l}"]`)?.focus(); }));
    const pv = ctx.body.querySelector('#pv'); if (pv) pv.oninput = () => { P.raw = pv.value; ctx.save(); };
    ctx.body.querySelector('[data-act="pv"]')?.addEventListener('click', () => { const v = vNum(P.raw); if (near(v, 60)) { P.ok = true; ctx.save(); render(); ctx.feedback('6 cm² × 10 cm = 60 cm³ ✓'); return; } ctx.feedback(near(v, 120) ? 'The cross-section is a triangle: {1/2} × 4 × 3 = 6, not 12.' : near(v, 17) ? 'Multiply, do not add.' : near(v, 6) ? 'That is one layer. There are 10 layers.' : 'Cross-section area × length.', true); });
    const cv = ctx.body.querySelector('#cv'); if (cv) cv.oninput = () => { C.raw = cv.value; ctx.save(); };
    ctx.body.querySelector('[data-act="cv"]')?.addEventListener('click', () => { const v = vNum(C.raw); if (near(v, 45)) { C.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 141.4, 0.1) || near(v, 141.37, 0.01) ? 'That is the decimal value. Type the number in front of π: π × 9 × 5.' : near(v, 15) ? 'Square the radius: 3² = 9.' : near(v, 30) ? '2πrh = 30π is the curved surface area, not the volume.' : near(v, 90) ? 'Use the radius squared, 9, not the diameter squared or 2r².' : 'π × 3² × 5.', true); });
  };
  render();
}

export const MODELS11 = { 'angle-explorer': mountAngleExplorer, 'polygon-split': mountPolygonSplit, 'area-cutter': mountAreaCutter, 'circle-unroll': mountCircleUnroll, 'prism-builder': mountPrismBuilder };
