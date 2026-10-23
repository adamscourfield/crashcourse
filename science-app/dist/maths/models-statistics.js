// Investigations for Statistics: how an extreme value moves the mean but not the median, building a
// pie chart, fitting a line of best fit, and reading histograms, cumulative frequency and box plots.
// Every render checks ctx.isActive.
import { mathHTML, esc } from './render.js?v=20261023-maths-r12';
import { btn, progressDots } from './models-number.js?v=20261023-maths-r12';
import { figSVG } from './geomfig.js?v=20261023-maths-r12';
import { graphSVG } from './graph.js?v=20261023-maths-r12';
import { tableFig, pieFig } from './skills-statistics.js?v=20261023-maths-r12';

const M = s => mathHTML(s);
const vNum = s => { const t = String(s ?? '').trim().replace(/−/g, '-'); return t === '' || Number.isNaN(Number(t)) ? null : Number(t); };
const near = (a, b, tol = 1e-9) => a !== null && Math.abs(a - b) <= tol;
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${M(text)}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
const numRow = (id, val, unit, act) => `<div class="mrow-in"><input class="lab-input mnum" id="${id}" inputmode="decimal" autocomplete="off" value="${esc(val)}"><span>${unit}</span><button class="primary mbtn" data-act="${act}">Check</button></div>`;
const bindInput = (ctx, id, S, key = 'raw') => { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { S[key] = i.value; ctx.save(); }; };
const tiles = (key, opts) => `<div class="mtiles">${opts.map(([v, t]) => `<button class="choice mtile" data-${key}="${v}">${M(t)}</button>`).join('')}</div>`;
const sum = a => a.reduce((s, v) => s + v, 0);
const median = a => { const s = [...a].sort((x, y) => x - y), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };

/* ───────── 1. An extreme value; missing value; frequency table ───────── */
function mountAverageBalancer(ctx) {
  const w = ctx.w; w.ab ??= { big: 14, ok: false }; w.mv ??= { raw: '', ok: false }; w.ft ??= { raw: '', ok: false };
  const A = w.ab, V = w.mv, T = w.ft;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!A.ok) {
      const xs = [3, 7, 7, 9, A.big];
      ctx.setTitle('Make the largest value bigger and bigger.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · MEAN OR MEDIAN? ${progressDots(3, 0, 0)}</div>${figSVG(tableFig(['Data', 'Mean', 'Median', 'Range'], [[xs.join(', '), (sum(xs) / 5).toFixed(1), median(xs), A.big - 3]], `Data ${xs.join(', ')}: mean ${(sum(xs) / 5).toFixed(1)}, median ${median(xs)}`))}`;
      ctx.body.innerHTML = `<p>Increase the largest value. Which average is pulled up by an extreme value?</p><div class="mrow"><span>Largest value</span><div class="mstepper">${btn('data-big="-10"', '−10', A.big <= 14 ? 'disabled' : '')}<output>${A.big}</output>${btn('data-big="10"', '+10', A.big >= 94 ? 'disabled' : '')}</div></div>${tiles('av', [['mean', 'The mean'], ['median', 'The median'], ['neither', 'Neither']])}`;
    } else if (!V.ok) {
      ctx.setTitle('Five numbers have a mean of 8.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · WORK BACKWARDS ${progressDots(3, 1, 1)}</div><div class="mwork"><div>3, 7, 7, 9, ?</div><div>mean = 8</div></div>`;
      ctx.body.innerHTML = `<p>Work out the missing number.</p>${numRow('mv', V.raw, '', 'mv')}`;
    } else if (!T.ok) {
      ctx.setTitle('Goals scored in 20 matches.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · FREQUENCY TABLE ${progressDots(3, 2, 2)}</div>${figSVG(tableFig(['Goals', 0, 1, 2, 3], [['Frequency', 4, 6, 7, 3]], 'Goals 0 to 3 with frequencies 4, 6, 7, 3'))}`;
      ctx.body.innerHTML = `<p>Work out the mean number of goals per match.</p>${numRow('ft', T.raw, 'goals', 'ft')}`;
    } else return done(ctx, figSVG(tableFig(['Goals', 0, 1, 2, 3, 'Σ'], [['f', 4, 6, 7, 3, 20], ['fx', 0, 6, 14, 9, 29]], 'Σf = 20 and Σfx = 29')), 'An extreme value drags the mean but leaves the median where it is, so the median is better for skewed data such as house prices. Working backwards from a mean: total = 5 × 8 = 40, so the missing value is 40 − 26 = 14. From a frequency table the mean is Σfx ÷ Σf = 29 ÷ 20 = 1.45.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-big]').forEach(b => (b.onclick = () => { A.big = Math.max(14, Math.min(94, A.big + Number(b.dataset.big))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-big="${b.dataset.big}"]`)?.focus(); }));
    ctx.body.querySelectorAll('[data-av]').forEach(b => (b.onclick = () => { const v = b.dataset.av; if (A.big < 44) { ctx.feedback('Make the largest value much bigger first, and watch both columns.', true); return; } if (v === 'mean') { A.ok = true; ctx.save(); render(); ctx.feedback('The mean rises with the extreme value; the median stays at 7 ✓'); return; } ctx.feedback(v === 'median' ? 'Look again: the median stays at 7, the middle value.' : 'One of them changes a lot. Compare the two columns.', true); }));
    bindInput(ctx, 'mv', V); bindInput(ctx, 'ft', T);
    ctx.body.querySelector('[data-act="mv"]')?.addEventListener('click', () => { const v = vNum(V.raw); if (near(v, 14)) { V.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 8) ? 'The missing value need not equal the mean. Total = 5 × 8 = 40.' : near(v, 6) ? 'Use five numbers: total 5 × 8 = 40, not 4 × 8.' : 'Total = 5 × 8; subtract the four you know.', true); });
    ctx.body.querySelector('[data-act="ft"]')?.addEventListener('click', () => { const v = vNum(T.raw); if (near(v, 1.45)) { T.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 5) ? 'That is 20 ÷ 4 rows. Multiply each goal value by its frequency first.' : near(v, 7.25) ? 'Divide Σfx by the number of matches (20), not by the number of rows.' : near(v, 1.5) ? 'That is the middle goal value. Work out Σfx ÷ Σf.' : 'Σfx = 0 × 4 + 1 × 6 + 2 × 7 + 3 × 3.', true); });
  };
  render();
}

/* ───────── 2. Pie chart: degrees per person; an angle; comparing ───────── */
function mountPieMaker(ctx) {
  const w = ctx.w; w.dp ??= { raw: '', ok: false }; w.ang ??= { raw: '', ok: false }; w.cmp ??= { ok: false };
  const D = w.dp, A = w.ang, C = w.cmp;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!D.ok) {
      ctx.setTitle('40 people: Bus 10, Car 18, Walk 12.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · DEGREES PER PERSON ${progressDots(3, 0, 0)}</div>${figSVG(pieFig(['?', '?', '?'], [120, 120, 120], 'An empty pie chart split into thirds as a placeholder'))}`;
      ctx.body.innerHTML = `<p>A full circle is 360°. How many degrees does each person get?</p>${numRow('dp', D.raw, '°', 'dp')}`;
    } else if (!A.ok) {
      ctx.setTitle('Car: 18 people.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · AN ANGLE ${progressDots(3, 1, 1)}</div>${figSVG(pieFig(['Bus', '?', '?'], [90, 162, 108], 'Pie chart with Bus at 90°'))}`;
      ctx.body.innerHTML = `<p>Work out the angle for Car.</p>${numRow('an', A.raw, '°', 'an')}`;
    } else if (!C.ok) {
      ctx.setTitle('Class A: median 54, range 20. Class B: median 48, range 32.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · COMPARE ${progressDots(3, 2, 2)}</div><div class="mwork"><div>A: median 54, range 20</div><div>B: median 48, range 32</div></div>`;
      ctx.body.innerHTML = `<p>Which comparison is correct?</p>${tiles('cm', [['ok', 'A scored higher on average and was more consistent'], ['range', 'B was more consistent because its range is larger'], ['one', 'A did better because 54 > 48 (nothing else needed)']])}`;
    } else return done(ctx, figSVG(pieFig(['Bus', 'Car', 'Walk'], [90, 162, 108], 'Pie chart: Bus 90°, Car 162°, Walk 108°')), 'Each person is 360 ÷ 40 = 9°, so Bus 90°, Car 162°, Walk 108°, which add up to 360°. To compare two distributions, compare an average (higher median, better on average) and a spread (smaller range or IQR, more consistent), in context.');
    bind();
  };
  const bind = () => {
    bindInput(ctx, 'dp', D); bindInput(ctx, 'an', A);
    ctx.body.querySelector('[data-act="dp"]')?.addEventListener('click', () => { const v = vNum(D.raw); if (near(v, 9)) { D.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 2.5) ? 'A pie chart is out of 360°, not 100.' : near(v, 40) ? 'Divide 360 by the 40 people.' : '360 ÷ 40.', true); });
    ctx.body.querySelector('[data-act="an"]')?.addEventListener('click', () => { const v = vNum(A.raw); if (near(v, 162)) { A.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 18) ? 'Convert people to degrees: 18 × 9.' : near(v, 45) ? 'That is a percentage. Use 9° per person.' : '18 × 9.', true); });
    ctx.body.querySelectorAll('[data-cm]').forEach(b => (b.onclick = () => { const v = b.dataset.cm; if (v === 'ok') { C.ok = true; ctx.save(); render(); return; } ctx.feedback(v === 'range' ? 'A larger range means more spread out, so less consistent.' : 'Also compare the spread: one comparison is not enough.', true); }));
  };
  render();
}

/* ───────── 3. Line of best fit ───────── */
const PTS = [[1, 3], [2, 4.5], [3, 5], [4, 7.5], [5, 8], [6, 9.5], [7, 11], [8, 12.5], [9, 13], [10, 15.5], [4, 15]];
const LINES = { a: ['1.4x + 1.4', 1.4, 1.4], b: ['0.5x + 6', 0.5, 6], c: ['2x + 3', 2, 3] };
function mountScatterFit(ctx) {
  const w = ctx.w; w.sf ??= { pick: 'b', ok: false }; w.es ??= { raw: '', ok: false }; w.ex ??= { ok: false };
  const S = w.sf, E = w.es, X = w.ex;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    const [expr] = LINES[S.pick];
    if (!S.ok) {
      ctx.setTitle('Choose the line of best fit.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · LINE ${S.pick.toUpperCase()} ${progressDots(3, 0, 0)}</div>${graphSVG({ xr: [0, 12], yr: [0, 20], xstep: 1, ystep: 2, points: PTS, fns: [{ expr }] })}`;
      ctx.body.innerHTML = `<p>Try each line. The best fit follows the trend with about as many points above as below. The point (4, 15) is an outlier.</p>${tiles('ln', [['a', 'Line A'], ['b', 'Line B'], ['c', 'Line C']])}<button class="primary mbtn" data-act="ln">Use this line</button>`;
    } else if (!E.ok) {
      ctx.setTitle('Estimate y when x = 6.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · ESTIMATE ${progressDots(3, 1, 1)}</div>${graphSVG({ xr: [0, 12], yr: [0, 20], xstep: 1, ystep: 2, points: PTS, fns: [{ expr: LINES.a[0], label: 'line of best fit' }] })}`;
      ctx.body.innerHTML = `<p>Go up from x = 6 to the line, then across.</p>${numRow('es', E.raw, '', 'es')}`;
    } else if (!X.ok) {
      ctx.setTitle('Can you use the line to estimate y when x = 40?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · INTERPOLATE OR EXTRAPOLATE? ${progressDots(3, 2, 2)}</div>${graphSVG({ xr: [0, 12], yr: [0, 20], xstep: 1, ystep: 2, points: PTS, fns: [{ expr: LINES.a[0] }] })}`;
      ctx.body.innerHTML = tiles('ex', [['no', 'Not reliably: 40 is far outside the data'], ['yes', 'Yes: just extend the line'], ['never', 'Lines of best fit can never be used for estimates']]);
    } else return done(ctx, graphSVG({ xr: [0, 12], yr: [0, 20], xstep: 1, ystep: 2, points: PTS, fns: [{ expr: LINES.a[0], label: 'line of best fit' }] }), 'A line of best fit follows the trend with roughly equal numbers of points either side, ignoring outliers. Use it to estimate inside the data (at x = 6, y ≈ 9.8). Predicting far outside the data is extrapolation: the pattern may not continue.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-ln]').forEach(b => (b.onclick = () => { S.pick = b.dataset.ln; ctx.feedback(''); ctx.save(); render(); }));
    ctx.body.querySelector('[data-act="ln"]')?.addEventListener('click', () => { if (S.pick === 'a') { S.ok = true; ctx.save(); render(); return; } ctx.feedback(S.pick === 'b' ? 'Line B is too shallow: most points at the right are above it.' : 'Line C is too steep: almost every point is below it.', true); });
    bindInput(ctx, 'es', E);
    ctx.body.querySelector('[data-act="es"]')?.addEventListener('click', () => { const v = vNum(E.raw); if (near(v, 9.8, 0.55)) { E.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 6, 0.3) ? 'That is the x-value. Read the y-value from the line.' : 'Up from 6 to the line, then across to the y-axis.', true); });
    ctx.body.querySelectorAll('[data-ex]').forEach(b => (b.onclick = () => { if (b.dataset.ex === 'no') { X.ok = true; ctx.save(); render(); return; } ctx.feedback(b.dataset.ex === 'yes' ? 'The data stop at x = 10. Extending to 40 assumes the pattern continues, which may not be true.' : 'Inside the data (interpolation) estimates are sensible.', true); }));
  };
  render();
}

/* ───────── 4. Histogram, cumulative frequency, box plot ───────── */
const CF = [[0, 0], [10, 5], [20, 18], [30, 42], [40, 63], [50, 75], [60, 80]];
function mountQuartileReader(ctx) {
  const w = ctx.w; w.fd ??= { raw: '', ok: false }; w.md ??= { raw: '', ok: false }; w.iq ??= { raw: '', ok: false };
  const Fd = w.fd, Md = w.md, Iq = w.iq;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Fd.ok) {
      ctx.setTitle('The class 20 < t ≤ 40 has frequency 30.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · FREQUENCY DENSITY ${progressDots(3, 0, 0)}</div>${graphSVG({ xr: [0, 60], yr: [0, 3], xstep: 10, ystep: 0.5, ylabel: 'Frequency density', polys: [{ pts: [[0, 0], [0, 1], [10, 1], [10, 0]] }, { pts: [[10, 0], [10, 2.5], [20, 2.5], [20, 0]] }] })}`;
      ctx.body.innerHTML = `<p>What height should its bar be?</p>${numRow('fd', Fd.raw, '', 'fd')}`;
    } else if (!Md.ok) {
      ctx.setTitle('Marks of 80 students.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · CUMULATIVE FREQUENCY ${progressDots(3, 1, 1)}</div>${graphSVG({ xr: [0, 60], yr: [0, 80], xstep: 10, ystep: 8, xlabel: 'Mark', ylabel: 'Cumulative frequency', polys: [{ pts: CF }] })}`;
      ctx.body.innerHTML = `<p>Estimate the median mark.</p>${numRow('md', Md.raw, 'marks', 'md')}`;
    } else if (!Iq.ok) {
      ctx.setTitle('A box plot: 12, 20, 26, 31, 40.');
      const sx = v => 60 + (v - 7) * (480 / 38);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · BOX PLOT ${progressDots(3, 2, 2)}</div>${figSVG({ h: 170, polys: [{ pts: [[sx(20), 50], [sx(31), 50], [sx(31), 110], [sx(20), 110]] }], segs: [{ a: [sx(26), 50], b: [sx(26), 110] }, { a: [sx(12), 80], b: [sx(20), 80] }, { a: [sx(31), 80], b: [sx(40), 80] }, { a: [sx(12), 65], b: [sx(12), 95] }, { a: [sx(40), 65], b: [sx(40), 95] }], labels: [12, 20, 26, 31, 40].map(v => ({ at: [sx(v), 140], t: String(v) })), alt: 'Box plot: minimum 12, lower quartile 20, median 26, upper quartile 31, maximum 40' })}`;
      ctx.body.innerHTML = `<p>Work out the interquartile range.</p>${numRow('iq', Iq.raw, '', 'iq')}`;
    } else return done(ctx, '<div class="mwork"><div>frequency density = frequency ÷ class width = 1.5</div><div>median at 40 of 80 ≈ 29</div><div>IQR = 31 − 20 = 11</div></div>', 'In a histogram the area is the frequency, so the height is frequency ÷ class width: 30 ÷ 20 = 1.5. On a cumulative frequency graph read the median at half the total (40 of 80). The interquartile range is the width of the box, upper quartile − lower quartile = 11.');
    bind();
  };
  const bind = () => {
    bindInput(ctx, 'fd', Fd); bindInput(ctx, 'md', Md); bindInput(ctx, 'iq', Iq);
    ctx.body.querySelector('[data-act="fd"]')?.addEventListener('click', () => { const v = vNum(Fd.raw); if (near(v, 1.5)) { Fd.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 30) ? 'In a histogram the area is the frequency. Divide by the class width, 20.' : near(v, 3) ? 'The class is 20 wide, not 10.' : '30 ÷ 20.', true); });
    ctx.body.querySelector('[data-act="md"]')?.addEventListener('click', () => { const v = vNum(Md.raw); const med = 20 + 10 * (40 - 18) / (42 - 18); if (near(v, med, 1.05)) { Md.ok = true; ctx.save(); render(); ctx.feedback(`Across from 40, down to about ${med.toFixed(1)} ✓`); return; } ctx.feedback(near(v, 40, 0.5) ? '40 is the cumulative frequency. Read across to the curve and down to the mark.' : near(v, 30, 0.5) ? 'That is the middle of the axis. Read across from 40 (half of 80).' : 'Read across from 40, then down.', true); });
    ctx.body.querySelector('[data-act="iq"]')?.addEventListener('click', () => { const v = vNum(Iq.raw); if (near(v, 11)) { Iq.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 28) ? 'That is the range. The IQR is the width of the box.' : near(v, 6) ? 'Use the quartiles, not the median.' : '31 − 20.', true); });
  };
  render();
}

export const MODELS15 = { 'average-balancer': mountAverageBalancer, 'pie-maker': mountPieMaker, 'scatter-fit': mountScatterFit, 'quartile-reader': mountQuartileReader };
