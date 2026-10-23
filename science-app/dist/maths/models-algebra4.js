// Investigations for Algebra batch 5: Fibonacci-type and surd sequences, and exponential growth,
// trapezia under a curve and strict-inequality regions. Every render checks ctx.isActive.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { num } from './frac.js?v=20261023-maths-r9';
import { btn, progressDots } from './models-number.js?v=20261023-maths-r9';
import { graphSVG } from './graph.js?v=20261023-maths-r9';

const M = s => mathHTML(s);
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${text}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
const stepper = (key, val, lo, hi) => `<div class="mstepper">${btn(`data-${key}="-1"`, '−1', val <= lo ? 'disabled' : '')}<output>${num(val)}</output>${btn(`data-${key}="1"`, '+1', val >= hi ? 'disabled' : '')}</div>`;

/* ───────── 1. Fibonacci builder, surd ratio, conjugates ───────── */
const surdTerm = k => (k % 2 === 0 ? num(2 ** (k / 2)) : `${2 ** ((k - 1) / 2) === 1 ? '' : 2 ** ((k - 1) / 2)}√2`);
function mountSequenceSurds(ctx) {
  const w = ctx.w; w.fib ??= { a: 1, b: 1, ok: false }; w.geo ??= { n: 1, picked: [], ok: false }; w.cj ??= { pick: null, ok: false };
  const Fb = w.fib, G = w.geo, Cj = w.cj;
  const fibTerms = (a, b) => { const t = [a, b]; while (t.length < 6) t.push(t.at(-1) + t.at(-2)); return t; };
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Fb.ok) {
      const t = fibTerms(Fb.a, Fb.b);
      ctx.setTitle('Make the 3rd term 10 and the 5th term 26.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · FIBONACCI-TYPE ${progressDots(3, 0, 0)}</div><div class="mbigexpr">${t.map((v, i) => (i === 2 || i === 4 ? `<b class="mhl">${v}</b>` : v)).join(', ')}, …</div><p class="mcap">Each term is the sum of the two before it.</p>`;
      ctx.body.innerHTML = `<p>Choose the first two terms.</p><div class="mrow"><span>1st term</span>${stepper('fa', Fb.a, 0, 15)}</div><div class="mrow"><span>2nd term</span>${stepper('fb', Fb.b, 0, 15)}</div><button class="primary mbtn" data-act="fib">Check</button>`;
    } else if (!G.ok) {
      ctx.setTitle('Multiply by √2 again and again.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · RATIO √2 ${progressDots(3, 1, 1)}</div><div class="mbigexpr">${Array.from({ length: G.n }, (_, k) => surdTerm(k)).map(M).join(', ')}${G.n < 9 ? ', …' : ''}</div>`;
      ctx.body.innerHTML = `<p>Press × √2 to make more terms. Then tap every term that is a whole number.</p><button class="secondary mbtn" data-act="more">× √2</button>${G.n >= 6 ? `<div class="mtiles">${Array.from({ length: G.n }, (_, k) => `<button class="choice mtile ${G.picked.includes(k) ? 'selected' : ''}" data-gt="${k}" aria-pressed="${G.picked.includes(k)}">${M(surdTerm(k))}</button>`).join('')}</div><button class="primary mbtn" data-act="geo">Check</button>` : ''}`;
    } else if (!Cj.ok) {
      const opts = ['3 + √5', '3 − √5', '√5', '3 + 5'];
      ctx.setTitle('Make the denominator rational.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · CONJUGATES ${progressDots(3, 2, 2)}</div><div class="mbigexpr">${M('{4/3 + √5}')}</div>${Cj.pick !== null ? `<div class="mwork"><div>${M(`(3 + √5)(${opts[Cj.pick]})`)}</div><div>${['= 9 + 6√5 + 5 = 14 + 6√5', '= 9 − 5 = 4', '= 3√5 + 5', '= 3(3 + 5) + 8√5 …'][Cj.pick]}</div></div>` : ''}`;
      ctx.body.innerHTML = `<p>Multiply the top and the bottom by which expression to remove the surd from the bottom?</p><div class="mtiles">${opts.map((o, i) => `<button class="choice mtile" data-cj="${i}">${M(o)}</button>`).join('')}</div>`;
    } else return done(ctx, `<div class="mwork"><div>${M('{4/3 + √5} × {3 − √5/3 − √5}')}</div><div>${M('= {4(3 − √5)/4}')}</div><div>${M('= 3 − √5')}</div></div>`, 'In a Fibonacci-type sequence, writing the first two terms as a and b gives a, b, a + b, a + 2b, 2a + 3b, so two known terms give simultaneous equations. In a geometric sequence with ratio √2, every second term is a whole number because √2 × √2 = 2. Multiplying by the conjugate (3 − √5) uses the difference of two squares, (3 + √5)(3 − √5) = 9 − 5, to make the denominator rational.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-fa],[data-fb]').forEach(b => (b.onclick = () => { if (b.dataset.fa) Fb.a = Math.max(0, Math.min(15, Fb.a + Number(b.dataset.fa))); else Fb.b = Math.max(0, Math.min(15, Fb.b + Number(b.dataset.fb))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(b.dataset.fa ? `[data-fa="${b.dataset.fa}"]` : `[data-fb="${b.dataset.fb}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="fib"]')?.addEventListener('click', () => {
      const t = fibTerms(Fb.a, Fb.b);
      if (t[2] === 10 && t[4] === 26) { Fb.ok = true; ctx.save(); render(); ctx.feedback('4, 6, 10, 16, 26 ✓'); return; }
      ctx.feedback(t[2] !== 10 ? `The 3rd term is a + b = ${t[2]}: it must be 10.` : `The 3rd term is right but the 5th is 2a + 3b = ${t[4]}. Keep a + b = 10 and change the split.`, true);
    });
    ctx.body.querySelector('[data-act="more"]')?.addEventListener('click', () => { if (G.n < 9) G.n++; ctx.save(); render(); ctx.body.querySelector('[data-act="more"]')?.focus(); });
    ctx.body.querySelectorAll('[data-gt]').forEach(b => (b.onclick = () => { const k = Number(b.dataset.gt); G.picked = G.picked.includes(k) ? G.picked.filter(x => x !== k) : [...G.picked, k]; ctx.feedback(''); ctx.save(); render(); }));
    ctx.body.querySelector('[data-act="geo"]')?.addEventListener('click', () => {
      const want = Array.from({ length: G.n }, (_, k) => k).filter(k => k % 2 === 0);
      const wrong = G.picked.filter(k => k % 2), missed = want.filter(k => !G.picked.includes(k));
      if (!wrong.length && !missed.length) { G.ok = true; ctx.save(); render(); ctx.feedback('Every second term is whole: √2 × √2 = 2 ✓'); return; }
      ctx.feedback(wrong.length ? `${surdTerm(wrong[0])} still has a √2 in it.` : `${surdTerm(missed[0])} is a whole number too.`, true);
    });
    ctx.body.querySelectorAll('[data-cj]').forEach(b => (b.onclick = () => {
      Cj.pick = Number(b.dataset.cj); ctx.save();
      if (Cj.pick === 1) { Cj.ok = true; ctx.save(); render(); return; }
      render(); ctx.feedback(['Multiplying by the same bracket squares it: the √5 terms add instead of cancelling.', '', '√5 alone leaves 3√5 on the bottom.', '3 + 5 is just 8: it has no surd to cancel the √5.'][Cj.pick], true);
    }));
  };
  render();
}

/* ───────── 2. Growth factor, trapezia, dashed boundaries ───────── */
const VT = t => 0.5 * t * t + 2; // velocity for part B
const exactArea = (0.5 * 64) / 3 + 2 * 4; // ∫0..4 (0.5t² + 2) dt = 32/3 + 8
function mountGrowthArea(ctx) {
  const w = ctx.w; w.ex ??= { k: 10, ok: false }; w.tr ??= { n: 1, ans: null, ok: false }; w.rg ??= { dash: [false, false, false], ok: false };
  const E = w.ex, T = w.tr, Rg = w.rg;
  const trap = n => { const h = 4 / n; let s = 0; for (let i = 0; i < n; i++) s += (h * (VT(i * h) + VT((i + 1) * h))) / 2; return s; };
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!E.ok) {
      const k = E.k / 10;
      ctx.setTitle('Find b so that y = 100 × bˣ passes through both points.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · GROWTH FACTOR ${progressDots(3, 0, 0)}</div>${graphSVG({ xr: [0, 4], yr: [0, 520], ystep: 50, height: 260, fns: [{ expr: `100*${k}^x`, label: `y = 100 × ${k.toFixed(1)}^x` }], points: [[0, 100, '(0, 100)'], [2, 225, '(2, 225)']] })}`;
      ctx.body.innerHTML = `<p>Change b. A value of b above 1 is growth; below 1 is decay.</p><div class="mrow"><span>b</span><div class="mstepper">${btn('data-bk="-1"', '−0.1', E.k <= 5 ? 'disabled' : '')}<output>${k.toFixed(1)}</output>${btn('data-bk="1"', '+0.1', E.k >= 25 ? 'disabled' : '')}</div></div><button class="primary mbtn" data-act="b">Check</button>`;
    } else if (!T.ok) {
      const n = T.n, h = 4 / n, polys = Array.from({ length: n }, (_, i) => ({ pts: [[i * h, 0], [i * h, VT(i * h)], [(i + 1) * h, VT((i + 1) * h)], [(i + 1) * h, 0]] }));
      ctx.setTitle('Estimate the area under the curve with trapezia.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · TRAPEZIA ${progressDots(3, 1, 1)}</div>${graphSVG({ xr: [0, 4], yr: [0, 11], ystep: 1, height: 260, xlabel: 'Time (s)', ylabel: 'Velocity (m/s)', fns: [{ expr: '0.5x^2 + 2', label: 'v = 0.5t² + 2' }], polys })}<p class="mcap">${n} strip${n > 1 ? 's' : ''}: estimate ${trap(n).toFixed(2)} m</p>`;
      ctx.body.innerHTML = `<p>Change the number of strips and watch the estimate. Then decide: are these estimates too big or too small?</p><div class="mtiles">${[1, 2, 4, 8].map(v => `<button class="choice mtile ${v === n ? 'selected' : ''}" data-ns="${v}">${v}</button>`).join('')}</div><div class="mtiles"><button class="choice mtile mtile-line" data-ov="over">Too big: the trapezia stick out above the curve</button><button class="choice mtile mtile-line" data-ov="under">Too small: the trapezia miss area under the curve</button></div>`;
    } else if (!Rg.ok) {
      const lines = ['y < 4 − x', 'y ≥ 0', 'x > 1'];
      ctx.setTitle('Draw each boundary solid or dashed.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · BOUNDARIES ${progressDots(3, 2, 2)}</div>${graphSVG({ xr: [-1, 5], yr: [-1, 5], fns: [{ expr: '4 - x', label: 'y = 4 − x', dash: Rg.dash[0] }, { expr: '0', dash: Rg.dash[1] }], vlines: [{ x: 1, dash: Rg.dash[2], label: 'x = 1' }], region: [[1, 0], [1, 3], [4, 0]] })}<p class="mcap">Region: ${lines.join(', ')}</p>`;
      ctx.body.innerHTML = `<p>Tap a boundary to switch it between solid and dashed so the graph matches the inequalities.</p><div class="mtiles mtiles-wide">${['y = 4 − x', 'y = 0', 'x = 1'].map((l, i) => `<button class="choice mtile mtile-line" data-dl="${i}" aria-pressed="${Rg.dash[i]}">${esc(l)}: ${Rg.dash[i] ? 'dashed' : 'solid'}</button>`).join('')}</div><button class="primary mbtn" data-act="rg">Check</button>`;
    } else return done(ctx, graphSVG({ xr: [-1, 5], yr: [-1, 5], fns: [{ expr: '4 - x', label: 'y = 4 − x', dash: true }, { expr: '0' }], vlines: [{ x: 1, dash: true, label: 'x = 1' }], region: [[1, 0], [1, 3], [4, 0]] }), `In y = ab^x, a is the value at x = 0 and b is the multiplier for each step: 100 × 1.5² = 225, so b = 1.5. Trapezia estimate the area under a curve; for a curve that bends upwards they stick out above it, so they overestimate (here the true area is ${exactArea.toFixed(2)} m), and more strips give a better estimate. A strict inequality (< or >) uses a dashed boundary because points on the line are not included; ≤ and ≥ use solid lines.`);
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-bk]').forEach(b => (b.onclick = () => { E.k = Math.max(5, Math.min(25, E.k + Number(b.dataset.bk))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-bk="${b.dataset.bk}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="b"]')?.addEventListener('click', () => {
      if (E.k === 15) { E.ok = true; ctx.save(); render(); ctx.feedback('100 × 1.5² = 225 ✓'); return; }
      ctx.feedback(E.k === 16 || E.k === 17 ? `That is close, but 100 × ${(E.k / 10).toFixed(1)}² = ${(100 * (E.k / 10) ** 2).toFixed(0)}. b² must be 2.25.` : E.k < 10 ? 'b below 1 makes the curve fall. The points show growth.' : `At x = 2 the curve reaches ${(100 * (E.k / 10) ** 2).toFixed(0)}, not 225.`, true);
    });
    ctx.body.querySelectorAll('[data-ns]').forEach(b => (b.onclick = () => { T.n = Number(b.dataset.ns); ctx.feedback(''); ctx.save(); render(); }));
    ctx.body.querySelectorAll('[data-ov]').forEach(b => (b.onclick = () => {
      if (b.dataset.ov === 'over') { T.ok = true; ctx.save(); render(); ctx.feedback(`The estimates fall towards the true area, ${exactArea.toFixed(2)} m, as the strips get narrower ✓`); return; }
      ctx.feedback('Look at the tops of the trapezia: the curve bends upwards, so the straight tops are above it.', true);
    }));
    ctx.body.querySelectorAll('[data-dl]').forEach(b => (b.onclick = () => { const i = Number(b.dataset.dl); Rg.dash[i] = !Rg.dash[i]; ctx.feedback(''); ctx.save(); render(); }));
    ctx.body.querySelector('[data-act="rg"]')?.addEventListener('click', () => {
      const want = [true, false, true], bad = want.findIndex((v, i) => v !== Rg.dash[i]);
      if (bad < 0) { Rg.ok = true; ctx.save(); render(); return; }
      ctx.feedback([`y < 4 − x is strict: points on y = 4 − x are not included, so dash it.`, 'y ≥ 0 includes equality: y = 0 should be solid.', 'x > 1 is strict: dash x = 1.'][bad].replace('dash it.', Rg.dash[0] ? 'dash it.' : 'dash it.'), true);
    });
  };
  render();
}

export const MODELS8 = { 'sequence-surds': mountSequenceSurds, 'growth-area': mountGrowthArea };
