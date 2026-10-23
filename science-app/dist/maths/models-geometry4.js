// Investigation for Geometry batch 4: building a hemisphere's surface from its parts, finding a
// cone's slant height before its curved surface, and adding the volumes of a composite solid.
// Every render checks ctx.isActive.
import { mathHTML, esc } from './render.js?v=20261023-maths-r15';
import { btn, progressDots } from './models-number.js?v=20261023-maths-r15';
import { figSVG } from './geomfig.js?v=20261023-maths-r15';
import { sphereFig, coneFig, cylTopFig } from './skills-geometry4.js?v=20261023-maths-r15';

const M = s => mathHTML(s);
const vNum = s => { const t = String(s ?? '').trim().replace(/−/g, '-').replace(/\s*(π|pi)\s*$/i, ''); return t === '' || Number.isNaN(Number(t)) ? null : Number(t); };
const near = (a, b, tol = 1e-9) => a !== null && Math.abs(a - b) <= tol;
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${M(text)}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
const numRow = (id, val, unit, act) => `<div class="mrow-in"><input class="lab-input mnum" id="${id}" inputmode="decimal" autocomplete="off" value="${esc(val)}"><span>${unit}</span><button class="primary mbtn" data-act="${act}">Check</button></div>`;
const bindInput = (ctx, id, S, key = 'raw') => { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { S[key] = i.value; ctx.save(); }; };

/* Parts: A hemisphere surface (with a reveal of its two faces), B cone slant height then curved
   surface, C composite volume. */
function mountSolidBuilder(ctx) {
  const w = ctx.w; w.hs ??= { raw: '', ok: false, shown: false }; w.cl ??= { raw: '', ok: false }; w.cs ??= { raw: '', ok: false }; w.cv ??= { raw: '', ok: false };
  const H = w.hs, L = w.cl, C = w.cs, V = w.cv;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!H.ok) {
      ctx.setTitle('A solid hemisphere of radius 5 cm.');
      const parts = H.shown ? `<div class="mwork"><div>curved surface: half of 4π × 5² = 50π</div><div>flat face: π × 5² = 25π</div></div>` : '';
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · HEMISPHERE ${progressDots(3, 0, 0)}</div>${figSVG(sphereFig(5, true))}${parts}`;
      ctx.body.innerHTML = `<p>${M('The surface area of a sphere is 4πr^2.')} Work out the total surface area of the solid hemisphere, in terms of π.</p>${H.shown ? '' : btn('data-hshow="1"', 'Take it apart')}${numRow('hs', H.raw, 'π cm²', 'hs')}`;
    } else if (!L.ok) {
      ctx.setTitle('A cone with radius 6 cm and vertical height 8 cm.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · SLANT HEIGHT ${progressDots(3, 1, 1)}</div>${figSVG(coneFig({ r: '6 cm', h: '8 cm', l: 'l' }, 'Cone: radius 6 cm, height 8 cm, slant height l'))}`;
      ctx.body.innerHTML = `<p>The radius, the height and the slant height make a right-angled triangle. Work out the slant height l.</p>${numRow('cl', L.raw, 'cm', 'cl')}`;
    } else if (!C.ok) {
      ctx.setTitle('Slant height 10 cm.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · CURVED SURFACE ${progressDots(3, 1, 1)}</div>${figSVG(coneFig({ r: '6 cm', h: '8 cm', l: '10 cm' }, 'Cone: radius 6 cm, height 8 cm, slant height 10 cm'))}`;
      ctx.body.innerHTML = `<p>${M('The curved surface area of a cone is πrl.')} Work out the curved surface area, in terms of π.</p>${numRow('cs', C.raw, 'π cm²', 'cs')}`;
    } else if (!V.ok) {
      ctx.setTitle('A cylinder (radius 3 cm, height 10 cm) with a hemisphere on top.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · COMPOSITE VOLUME ${progressDots(3, 2, 2)}</div>${figSVG(cylTopFig(3, 10, 'hemi', 0, 'Cylinder of radius 3 cm and height 10 cm with a hemisphere on top'))}`;
      ctx.body.innerHTML = `<p>${M('The volume of a sphere is {4/3}πr^3.')} Work out the volume of the solid, in terms of π.</p>${numRow('cv', V.raw, 'π cm³', 'cv')}`;
    } else return done(ctx, `<div class="mwork"><div>hemisphere: 50π + 25π = 75π cm²</div><div>cone: l = √(36 + 64) = 10; πrl = 60π cm²</div><div>solid: 90π + 18π = 108π cm³</div></div>`, 'A solid hemisphere has a curved surface (half of 4πr²) and a flat circle (πr²). A cone\'s curved surface uses the slant height, which comes from Pythagoras. For a composite solid, add the volumes of the parts; for its surface, count only the outside faces.');
    bind();
  };
  const bind = () => {
    bindInput(ctx, 'hs', H); bindInput(ctx, 'cl', L); bindInput(ctx, 'cs', C); bindInput(ctx, 'cv', V);
    ctx.body.querySelector('[data-hshow]')?.addEventListener('click', () => { H.shown = true; ctx.save(); render(); });
    ctx.body.querySelector('[data-act="hs"]')?.addEventListener('click', () => { const v = vNum(H.raw); if (near(v, 75)) { H.ok = true; ctx.save(); render(); ctx.feedback('50π + 25π = 75π cm² ✓'); return; } ctx.feedback(near(v, 50) ? 'That is the curved surface only. A solid hemisphere also has a flat circular face: add π × 5².' : near(v, 100) ? 'That is a whole sphere. A hemisphere is half of it, plus the flat face.' : near(v, 25) ? 'That is the flat face only. Add the curved surface: half of 4π × 5².' : 'Add the curved surface (half of 4πr²) and the flat circle (πr²).', true); });
    ctx.body.querySelector('[data-act="cl"]')?.addEventListener('click', () => { const v = vNum(L.raw); if (near(v, 10)) { L.ok = true; ctx.save(); render(); ctx.feedback('l² = 36 + 64 = 100, so l = 10 cm ✓'); return; } ctx.feedback(near(v, 14) ? 'Do not add the lengths. Use Pythagoras: l² = 6² + 8².' : near(v, 100) ? 'That is l². Take the square root.' : near(v, Math.sqrt(28), 0.01) ? 'The slant height is the longest side: add the squares, l² = 6² + 8².' : 'Use Pythagoras: l² = r² + h².', true); });
    ctx.body.querySelector('[data-act="cs"]')?.addEventListener('click', () => { const v = vNum(C.raw); if (near(v, 60)) { C.ok = true; ctx.save(); render(); ctx.feedback('π × 6 × 10 = 60π cm² ✓'); return; } ctx.feedback(near(v, 48) ? 'Use the slant height (10 cm), not the vertical height.' : near(v, 96) ? 'The question asks for the curved surface only, without the base.' : 'Curved surface = π × r × l = π × 6 × 10.', true); });
    ctx.body.querySelector('[data-act="cv"]')?.addEventListener('click', () => { const v = vNum(V.raw); if (near(v, 108)) { V.ok = true; ctx.save(); render(); ctx.feedback('90π + 18π = 108π cm³ ✓'); return; } ctx.feedback(near(v, 126) ? 'That adds a whole sphere. Only half a sphere sits on top: 18π.' : near(v, 90) ? 'That is the cylinder only. Add the hemisphere.' : near(v, 18) ? 'That is the hemisphere only. Add the cylinder: π × 3² × 10.' : 'Cylinder π × 3² × 10 = 90π, plus half of {4/3}π × 3³.', true); });
  };
  render();
}

export const MODELS16 = { 'solid-builder': mountSolidBuilder };
