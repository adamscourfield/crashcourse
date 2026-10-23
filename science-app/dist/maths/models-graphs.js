// Investigations for the graphs lessons. Several reuse the plotting input from graph.js so learners
// practise the same interaction that practice questions mark.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { num } from './frac.js?v=20261023-maths-r9';
import { btn, progressDots } from './models-number.js?v=20261023-maths-r9';
import { graphSVG, graphInputHTML, bindGraphInput, markPoints, markLine, pointsFeedback, lineFeedback, fmtLine } from './graph.js?v=20261023-maths-r9';

const M = s => mathHTML(s);
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${text}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
/** Mount the plotting input inside an investigation body; store the raw value on state[key]. */
function plotInput(ctx, spec, state, key, render) {
  ctx.body.querySelector('#mSubmit')?.remove();
  bindGraphInput(ctx.body, spec, (raw, err) => { state[key] = raw; ctx.save(); render(); if (err) ctx.feedback(err, true); });
}
const plotHTML = (spec, raw) => graphInputHTML(spec, raw, false).replace(/<button class="secondary" id="mSubmit">Check answer<\/button>$/, '');

/* ───────── 1. Table → points → line; then find m and c ───────── */
const TABLE_X = [-1, 0, 1, 2, 3];
function mountLineBuilder(ctx) {
  const w = ctx.w; w.tbl ??= { ys: TABLE_X.map(() => ''), tableOK: false, plot: '' }; w.mc ??= { m: 1, c: 0, done: false };
  const T = w.tbl, Q = w.mc;
  const spec = { kind: 'points', points: TABLE_X.map(x => [x, 2 * x - 1]), grid: { xr: [-3, 4], yr: [-5, 7] } };
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!T.tableOK) {
      ctx.setTitle('Complete the table for y = 2x − 1.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · TABLE OF VALUES ${progressDots(3, 0, 0)}</div><table class="mtable"><thead><tr><th>x</th>${TABLE_X.map(x => `<th>${num(x)}</th>`).join('')}</tr></thead><tbody><tr><td>y</td>${T.ys.map(y => `<td>${esc(y || '?')}</td>`).join('')}</tr></tbody></table>`;
      ctx.body.innerHTML = `<p>Substitute each x value into y = 2x − 1.</p><div class="mtable-in">${TABLE_X.map((x, i) => `<label>x = ${num(x)}: y = <input class="lab-input" data-ty="${i}" inputmode="text" autocomplete="off" value="${esc(T.ys[i])}"></label>`).join('')}</div><button class="primary mbtn" data-act="table">Check table</button>`;
    } else if (!T.plotOK) {
      ctx.setTitle('Plot the points from your table.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · PLOT ${progressDots(3, 1, 1)}</div><table class="mtable"><thead><tr><th>x</th>${TABLE_X.map(x => `<th>${num(x)}</th>`).join('')}</tr></thead><tbody><tr><td>y</td>${TABLE_X.map(x => `<td>${num(2 * x - 1)}</td>`).join('')}</tr></tbody></table>`;
      ctx.body.innerHTML = `<p>Plot the five points (x, y) from the table.</p>${plotHTML(spec, T.plot)}<button class="primary mbtn" data-act="plot">Check points</button>`;
      plotInput(ctx, spec, T, 'plot', render);
    } else if (!Q.done) {
      ctx.setTitle('Find the line through (0, 3) and (2, −1).');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · GRADIENT AND INTERCEPT ${progressDots(3, 2, 2)}</div>${graphSVG({ xr: [-3, 4], yr: [-5, 7], fns: [{ expr: `${Q.m}x + ${Q.c}`, label: `y = ${fmtLine(Q.m, Q.c).replace(/\{(\d+)\/(\d+)\}/g, '$1/$2')}` }], points: [[0, 3, '(0, 3)'], [2, -1, '(2, −1)']] })}`;
      ctx.body.innerHTML = `<p>Change m (the gradient) and c (the y-intercept) until the line passes through both points.</p><div class="mrow"><span>m</span><div class="mstepper">${btn('data-gm="-1"', '−1')}<output>${num(Q.m)}</output>${btn('data-gm="1"', '+1')}</div></div><div class="mrow"><span>c</span><div class="mstepper">${btn('data-gc="-1"', '−1')}<output>${num(Q.c)}</output>${btn('data-gc="1"', '+1')}</div></div><button class="primary mbtn" data-act="mc">Check</button>`;
    } else return done(ctx, graphSVG({ xr: [-3, 4], yr: [-5, 7], fns: [{ expr: '2x - 1', label: 'y = 2x − 1' }, { expr: '-2x + 3', label: 'y = −2x + 3' }] }), 'Every point (x, y) with y = 2x − 1 lies on one straight line, so a table of three or more values is enough to draw it. In y = mx + c, c is where the line crosses the y-axis and m is the gradient: how far it goes up (or down, if negative) for each 1 across.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-ty]').forEach(i => (i.oninput = () => { T.ys[Number(i.dataset.ty)] = i.value; ctx.save(); }));
    ctx.body.querySelector('[data-act="table"]')?.addEventListener('click', () => {
      const bad = TABLE_X.findIndex((x, i) => Number(T.ys[i].replace('−', '-')) !== 2 * x - 1 || T.ys[i].trim() === '');
      if (bad >= 0) { const x = TABLE_X[bad]; ctx.feedback(Number(T.ys[bad].replace('−', '-')) === 2 * x + 1 ? `At x = ${num(x)}: 2 × ${x < 0 ? '(' + num(x) + ')' : x} − 1 = ${num(2 * x - 1)}. Subtract 1, do not add it.` : `At x = ${num(x)}: y = 2 × ${x < 0 ? '(' + num(x) + ')' : x} − 1 = ${num(2 * x - 1)}.`, true); return; }
      T.tableOK = true; ctx.feedback('Table complete ✓'); ctx.save(); render();
    });
    ctx.body.querySelector('[data-act="plot"]')?.addEventListener('click', () => { const res = markPoints(spec, T.plot); if (res.status === 'invalid') { ctx.feedback('Plot the points first.', true); return; } if (res.status !== 'correct') { ctx.feedback(pointsFeedback(res), true); return; } T.plotOK = true; ctx.save(); render(); ctx.feedback('All five points lie on a straight line ✓'); });
    ctx.body.querySelectorAll('[data-gm],[data-gc]').forEach(b => (b.onclick = () => { if (b.dataset.gm) Q.m = Math.max(-4, Math.min(4, Q.m + Number(b.dataset.gm))); else Q.c = Math.max(-5, Math.min(6, Q.c + Number(b.dataset.gc))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(b.dataset.gm ? `[data-gm="${b.dataset.gm}"]` : `[data-gc="${b.dataset.gc}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="mc"]')?.addEventListener('click', () => {
      const on1 = Q.c === 3, on2 = 2 * Q.m + Q.c === -1;
      if (on1 && on2) { Q.done = true; ctx.save(); render(); return; }
      ctx.feedback(on1 ? 'The line passes through (0, 3), so c is right. From x = 0 to x = 2, y goes from 3 to −1: down 4 for 2 across, so m = −2.' : on2 ? 'It passes through (2, −1) but not (0, 3). The y-intercept is the y value at x = 0.' : 'The line should cross the y-axis at (0, 3): set c first, then find the gradient.', true);
    });
  };
  render();
}

/* ───────── 2. Gradient triangles, then parallel lines ───────── */
const TRI = [{ m: [3, 2], c: -2, p: [0, -2], q: [2, 1] }, { m: [-1, 2], c: 3, p: [0, 3], q: [4, 1] }];
const PAR = ['y = 3x + 1', 'y = 3x − 4', '2y = 6x + 5', 'y = −3x + 1', 'y = x + 3'];
const PAR_OK = [0, 1, 2];
function mountGradient(ctx) {
  const w = ctx.w; w.tri ??= { task: 0, rise: '', run: '', done: [] }; w.par ??= { picked: [], done: false };
  const G = w.tri, P = w.par;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (G.done.length < TRI.length) {
      const T = TRI[G.task], [n, d] = T.m;
      ctx.setTitle('Find the gradient using a triangle.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · GRADIENT TRIANGLE ${progressDots(2, G.done.length, G.task)}</div>${graphSVG({ xr: [-2, 6], yr: [-4, 5], fns: [{ expr: `${n}/${d}x + ${T.c}` }], polys: [{ pts: [T.p, [T.q[0], T.p[1]], T.q] }], points: [[...T.p, `(${num(T.p[0])}, ${num(T.p[1])})`], [...T.q, `(${num(T.q[0])}, ${num(T.q[1])})`]] })}<p class="mcap">The triangle goes across from the first point, then ${n > 0 ? 'up' : 'down'} to the second.</p>`;
      ctx.body.innerHTML = `<p>Read the change in y (up is positive, down is negative) and the change in x, then gradient = change in y ÷ change in x.</p><div class="mpair"><label class="field-label">Change in y <input class="lab-input mtext msmall" id="rise" value="${esc(G.rise)}" inputmode="text" autocomplete="off"></label><label class="field-label">Change in x <input class="lab-input mtext msmall" id="run" value="${esc(G.run)}" inputmode="text" autocomplete="off"></label></div><button class="primary mbtn" data-act="tri">Check</button>`;
    } else if (!P.done) {
      ctx.setTitle('Which lines are parallel to y = 3x + 1?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · PARALLEL LINES</div>${graphSVG({ xr: [-4, 4], yr: [-8, 8], fns: P.picked.map(i => ({ expr: ['3x+1', '3x-4', '3x+2.5', '-3x+1', 'x+3'][i], label: PAR[i] })) })}`;
      ctx.body.innerHTML = `<p>Select every line parallel to y = 3x + 1 (including itself), then check. Selected lines are drawn.</p><div class="mtiles">${PAR.map((e, i) => `<button class="choice mtile ${P.picked.includes(i) ? 'selected' : ''}" data-par="${i}" aria-pressed="${P.picked.includes(i)}">${M(e)}</button>`).join('')}</div><button class="primary mbtn" data-act="par">Check</button>`;
    } else return done(ctx, graphSVG({ xr: [-4, 4], yr: [-8, 8], fns: [{ expr: '3x+1', label: 'y = 3x + 1' }, { expr: '3x-4', label: 'y = 3x − 4' }, { expr: '3x+2.5', label: '2y = 6x + 5' }] }), 'Gradient = change in y ÷ change in x, with a negative change in y when the line goes down. Parallel lines have equal gradients: 2y = 6x + 5 is y = 3x + 2.5, so it is parallel to y = 3x + 1 even though it looks different. Higher: perpendicular gradients multiply to −1.');
    bind();
  };
  const bind = () => {
    for (const id of ['rise', 'run']) { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { G[id] = i.value; ctx.save(); }; }
    ctx.body.querySelector('[data-act="tri"]')?.addEventListener('click', () => {
      const T = TRI[G.task], dy = T.q[1] - T.p[1], dx = T.q[0] - T.p[0];
      const ry = Number(G.rise.replace('−', '-')), rx = Number(G.run.replace('−', '-'));
      if (!G.rise.trim() || !G.run.trim() || Number.isNaN(ry) || Number.isNaN(rx)) { ctx.feedback('Enter both changes as numbers.', true); return; }
      if (ry === -dy && rx === dx) { ctx.feedback('The line goes down from the first point to the second, so the change in y is negative.', true); return; }
      if (ry === dx && rx === dy) { ctx.feedback('Change in y is the vertical side; change in x is the horizontal side.', true); return; }
      if (ry !== dy || rx !== dx) { ctx.feedback(`Count the squares: across ${dx}, then ${dy > 0 ? 'up' : 'down'} ${Math.abs(dy)}.`, true); return; }
      if (!G.done.includes(G.task)) G.done.push(G.task);
      ctx.feedback(`Gradient = ${num(dy)} ÷ ${dx} = ${M(fmtLine(dy / dx, 0).replace('x', '') || '0')} ✓`);
      ctx.save();
      setTimeout(() => { if (G.task < TRI.length - 1) { G.task++; G.rise = ''; G.run = ''; } ctx.save(); render(); }, 1000);
    });
    ctx.body.querySelectorAll('[data-par]').forEach(b => (b.onclick = () => { const i = Number(b.dataset.par); P.picked = P.picked.includes(i) ? P.picked.filter(x => x !== i) : [...P.picked, i]; ctx.feedback(''); ctx.save(); render(); }));
    ctx.body.querySelector('[data-act="par"]')?.addEventListener('click', () => {
      const wrong = P.picked.filter(i => !PAR_OK.includes(i)), missed = PAR_OK.filter(i => !P.picked.includes(i));
      if (wrong.includes(3)) { ctx.feedback('y = −3x + 1 has gradient −3: it slopes the other way, so it is not parallel.', true); return; }
      if (wrong.includes(4)) { ctx.feedback('y = x + 3 has gradient 1, not 3.', true); return; }
      if (missed.includes(2)) { ctx.feedback('Rearrange 2y = 6x + 5 to y = 3x + 2.5: what is its gradient?', true); return; }
      if (missed.length) { ctx.feedback('Look for every line with gradient 3.', true); return; }
      P.done = true; ctx.save(); render();
    });
  };
  render();
}

/* ───────── 3. Match the shapes; plot a quadratic ───────── */
const GALLERY = [{ expr: 'x^2 - 2', eq: 'y = x^2 − 2' }, { expr: 'x^3 - 3x', eq: 'y = x^3 − 3x' }, { expr: '3/x', eq: 'y = {3/x}' }, { expr: '-x + 2', eq: 'y = −x + 2' }];
const ORDER = [2, 0, 3, 1]; // panel order of the graphs
function mountCurveGallery(ctx) {
  const w = ctx.w; w.gal ??= { picks: {}, done: false }; w.qp ??= { plot: '' };
  const Gl = w.gal, Qp = w.qp;
  const qspec = { kind: 'points', points: [-3, -2, -1, 0, 1, 2, 3].map(x => [x, x * x - 4]), grid: { xr: [-4, 4], yr: [-5, 6] } };
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Gl.done) {
      ctx.setTitle('Match each graph to its equation.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · SHAPES</div><div class="mgallery">${ORDER.map((g, i) => `<figure><figcaption>Graph ${'ABCD'[i]}</figcaption>${graphSVG({ xr: [-4, 4], yr: [-6, 6], fns: [{ expr: GALLERY[g].expr }], height: 240 })}</figure>`).join('')}</div>`;
      ctx.body.innerHTML = `<p>Choose the equation for each graph.</p>${ORDER.map((_, i) => `<div class="mrow"><span>Graph ${'ABCD'[i]}</span><div class="mbtns">${GALLERY.map((G, j) => btn(`data-gal="${i},${j}" aria-pressed="${Gl.picks[i] === j}"${Gl.picks[i] === j ? ' style="outline:2px solid var(--coral)"' : ''}`, M(G.eq))).join('')}</div></div>`).join('')}<button class="primary mbtn" data-act="gal">Check</button>`;
    } else if (!Qp.ok) {
      ctx.setTitle('Plot y = x² − 4.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · PLOT A QUADRATIC</div><table class="mtable"><thead><tr><th>x</th>${[-3, -2, -1, 0, 1, 2, 3].map(x => `<th>${num(x)}</th>`).join('')}</tr></thead><tbody><tr><td>y</td>${[-3, -2, -1, 0, 1, 2, 3].map(() => '<td>?</td>').join('')}</tr></tbody></table><p class="mcap">Square first, then subtract 4. A negative number squared is positive.</p>`;
      ctx.body.innerHTML = `<p>Work out y for x = −3 to 3 and plot all seven points.</p>${plotHTML(qspec, Qp.plot)}<button class="primary mbtn" data-act="qplot">Check points</button>`;
      plotInput(ctx, qspec, Qp, 'plot', render);
    } else return done(ctx, graphSVG({ xr: [-4, 4], yr: [-5, 6], fns: [{ expr: 'x^2 - 4', label: 'y = x² − 4' }], points: [[-2, 0, '−2'], [2, 0, '2'], [0, -4, '(0, −4)']] }), 'Recognise graphs by shape: straight line (linear), ∪ or ∩ (quadratic), S-shape (cubic), two separate branches that never touch the axes (reciprocal). Plot curves from a table and join with a smooth curve. y = x² − 4 is symmetrical about x = 0, with turning point (0, −4) and roots −2 and 2.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-gal]').forEach(b => (b.onclick = () => { const [i, j] = b.dataset.gal.split(',').map(Number); Gl.picks[i] = j; ctx.feedback(''); ctx.save(); render(); }));
    ctx.body.querySelector('[data-act="gal"]')?.addEventListener('click', () => {
      const wrong = ORDER.findIndex((g, i) => Gl.picks[i] !== g);
      if (wrong < 0) { Gl.done = true; ctx.save(); render(); return; }
      if (Gl.picks[wrong] === undefined) { ctx.feedback(`Choose an equation for graph ${'ABCD'[wrong]}.`, true); return; }
      const hint = ['A straight line comes from y = mx + c.', 'A ∪ shape is a quadratic.', 'Two separate branches that never touch the axes: a reciprocal graph.', 'An S-shaped curve is a cubic.'][[3, 0, 2, 1].indexOf(ORDER[wrong])];
      ctx.feedback(`Graph ${'ABCD'[wrong]} does not match. ${hint}`, true);
    });
    ctx.body.querySelector('[data-act="qplot"]')?.addEventListener('click', () => { const res = markPoints(qspec, Qp.plot); if (res.status === 'invalid') { ctx.feedback('Plot the points first.', true); return; } if (res.status !== 'correct') { const neg = res.extra.find(([x, y]) => y === -(x * x) - 4); ctx.feedback(neg ? `At x = ${num(neg[0])}: (${num(neg[0])})² = ${neg[0] * neg[0]}, positive, so y = ${neg[0] * neg[0] - 4}.` : pointsFeedback(res), true); return; } Qp.ok = true; ctx.save(); render(); });
  };
  render();
}

/* ───────── 4. A horizontal line meets a curve ───────── */
const CURVE = 'x^2 - 2x';
const K_TASKS = [{ n: 2, text: 'two solutions' }, { n: 1, text: 'exactly one solution' }, { n: 0, text: 'no solutions' }];
const nSol = k => (k > -1 ? 2 : k === -1 ? 1 : 0);
function mountLineMeetsCurve(ctx) {
  const w = ctx.w; w.k ??= { k: 4, task: 0, done: [] }; w.rd ??= { a: '', b: '', done: false };
  const K = w.k, Rd = w.rd;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (K.done.length < K_TASKS.length) {
      const T = K_TASKS[K.task];
      ctx.setTitle(`Make x² − 2x = k have ${T.text}.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · HOW MANY SOLUTIONS? ${progressDots(3, K.done.length, K.task)}</div>${graphSVG({ xr: [-3, 5], yr: [-3, 8], fns: [{ expr: CURVE, label: 'y = x² − 2x' }, { expr: String(K.k), label: `y = ${num(K.k)}` }] })}`;
      ctx.body.innerHTML = `<p>The solutions of x² − 2x = k are where the curve meets the line y = k. Move the line.</p><div class="mrow"><span>k</span><div class="mstepper">${btn('data-k="-1"', '−1')}<output>${num(K.k)}</output>${btn('data-k="1"', '+1')}</div></div><button class="primary mbtn" data-act="k">Check</button>`;
    } else if (!Rd.done) {
      ctx.setTitle('Solve x² − 2x = 3 from the graph.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · READ THE SOLUTIONS</div>${graphSVG({ xr: [-3, 5], yr: [-3, 8], fns: [{ expr: CURVE, label: 'y = x² − 2x' }, { expr: '3', label: 'y = 3' }] })}`;
      ctx.body.innerHTML = `<p>Read the x values where the curve meets y = 3.</p><div class="mpair"><label class="field-label">x = <input class="lab-input mtext msmall" id="ra" value="${esc(Rd.a)}" autocomplete="off"></label><label class="field-label">or x = <input class="lab-input mtext msmall" id="rb" value="${esc(Rd.b)}" autocomplete="off"></label></div><button class="primary mbtn" data-act="rd">Check</button>`;
    } else return done(ctx, graphSVG({ xr: [-3, 5], yr: [-3, 8], fns: [{ expr: CURVE, label: 'y = x² − 2x' }, { expr: '3', label: 'y = 3' }], points: [[-1, 3, '−1'], [3, 3, '3']] }), 'To solve f(x) = k from a graph, draw the line y = k and read the x values where it meets the curve. A horizontal line can meet a ∪-shaped curve twice, once (just touching the turning point, here k = −1) or not at all. Readings from a graph are estimates unless the crossing is exactly on a grid line.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-k]').forEach(b => (b.onclick = () => { K.k = Math.max(-3, Math.min(8, K.k + Number(b.dataset.k))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-k="${b.dataset.k}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="k"]')?.addEventListener('click', () => {
      const T = K_TASKS[K.task], n = nSol(K.k);
      if (n !== T.n) { ctx.feedback(`With k = ${num(K.k)}, the line meets the curve ${n === 0 ? 'nowhere' : n === 1 ? 'once' : 'twice'}. ${T.n === 1 ? 'Exactly one solution happens when the line just touches the turning point.' : T.n === 0 ? 'Move the line below the lowest point of the curve.' : 'Move the line above the turning point.'}`, true); return; }
      if (!K.done.includes(K.task)) K.done.push(K.task);
      ctx.feedback(`${T.text[0].toUpperCase() + T.text.slice(1)} ✓`); ctx.save();
      setTimeout(() => { if (K.task < K_TASKS.length - 1) K.task++; ctx.save(); render(); }, 900);
    });
    for (const id of ['ra', 'rb']) { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { Rd[id === 'ra' ? 'a' : 'b'] = i.value; ctx.save(); }; }
    ctx.body.querySelector('[data-act="rd"]')?.addEventListener('click', () => {
      const vals = [Rd.a, Rd.b].map(v => Number(v.replace('−', '-'))).sort((p, q) => p - q);
      if ([Rd.a, Rd.b].some(v => !v.trim()) || vals.some(Number.isNaN)) { ctx.feedback('Enter both x values.', true); return; }
      if (vals[0] === -1 && vals[1] === 3) { Rd.done = true; ctx.save(); render(); return; }
      ctx.feedback(vals.includes(3) && !vals.includes(-1) ? 'One is right. The line meets the curve twice: find the other crossing on the left.' : 'Find where the curve crosses the horizontal line y = 3, then read straight down to the x-axis.', true);
    });
  };
  render();
}

/* ───────── 5. Plot a journey from a story ───────── */
const JOURNEY = { kind: 'points', points: [[0, 0], [30, 2], [45, 2], [90, 0]], grid: { xr: [0, 105], yr: [0, 3], xstep: 15, ystep: 0.5, snap: 0.5, xlabel: 'Time (minutes)', ylabel: 'Distance from home (km)', height: 260 } };
JOURNEY.grid.snapX = 15;
function mountJourneyGraph(ctx) {
  const w = ctx.w; w.jr ??= { plot: '', speed: null, done: false };
  const J = w.jr;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!J.plotOK) {
      ctx.setTitle('Draw the walk as a distance–time graph.');
      ctx.panel.innerHTML = '<div class="mpanel-k">PART A · STORY TO GRAPH</div><ol class="mcollapse"><li>Leaves home at time 0.</li><li>Walks 2 km in 30 minutes.</li><li>Rests for 15 minutes.</li><li>Walks back home, arriving 45 minutes later.</li></ol>';
      ctx.body.innerHTML = `<p>Plot the four corner points of the journey (time in minutes, distance in km). Lines join them in order.</p>${plotHTML(JOURNEY, J.plot)}<button class="primary mbtn" data-act="jplot">Check</button>`;
      plotInput(ctx, JOURNEY, J, 'plot', render);
    } else if (!J.done) {
      ctx.setTitle('How fast was the walk home?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · SPEED FROM THE GRAPH</div>${graphSVG({ ...JOURNEY.grid, polys: [{ pts: JOURNEY.points }] })}`;
      ctx.body.innerHTML = `<p>2 km in 45 minutes. What was the speed in km/h?</p><div class="choices">${['2.67 km/h', '0.04 km/h', '22.5 km/h', '2 km/h'].map((o, i) => `<button class="choice" data-sp="${i}">${o}</button>`).join('')}</div>`;
    } else return done(ctx, graphSVG({ ...JOURNEY.grid, polys: [{ pts: JOURNEY.points }] }), 'On a distance–time graph, a flat section is a stop and the gradient is the speed: steeper means faster; sloping down means returning. Change minutes to hours before working out km/h: 2 km in 0.75 hours is 2.67 km/h.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelector('[data-act="jplot"]')?.addEventListener('click', () => {
      const res = markPoints(JOURNEY, J.plot);
      if (res.status === 'invalid') { ctx.feedback('Plot the points first.', true); return; }
      const hint = res.status === 'correct' ? '' : res.extra.find(([t, d]) => t === 45 && d === 0) ? 'During the rest the distance from home stays at 2 km.' : res.extra.find(([t]) => t === 75) ? 'Arriving 45 minutes after the rest ended (45 min) means 90 minutes.' : pointsFeedback(res);
      if (res.status !== 'correct') { ctx.feedback(hint, true); return; }
      J.plotOK = true; ctx.save(); render(); ctx.feedback('The graph matches the story ✓');
    });
    ctx.body.querySelectorAll('[data-sp]').forEach(b => (b.onclick = () => {
      const why = ['', 'That is km per minute: change 45 minutes to 0.75 hours.', '22.5 is 45 ÷ 2: speed is distance ÷ time.', '2 km is the distance, not the speed.'][Number(b.dataset.sp)];
      if (why) { ctx.feedback(why, true); return; }
      J.done = true; ctx.save(); render();
    }));
  };
  render();
}

export const MODELS6 = { 'line-builder': mountLineBuilder, 'gradient-triangle': mountGradient, 'curve-gallery': mountCurveGallery, 'line-meets-curve': mountLineMeetsCurve, 'journey-graph': mountJourneyGraph };
/** Worked-example diagrams for the graphs lessons: {kind:'g', g: graph spec, caption?}. */
export function visual6(v) {
  if (!v || v.kind !== 'g') return '';
  return graphSVG(v.g) + (v.caption ? `<p class="mcap">${M(v.caption)}</p>` : '');
}
