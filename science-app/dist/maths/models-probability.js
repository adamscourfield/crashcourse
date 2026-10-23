// Investigations for Probability: tossing a coin many times, a dice grid, building a tree diagram,
// and narrowing the group for conditional probability. Every render checks ctx.isActive.
import { mathHTML, esc } from './render.js?v=20261023-maths-r15';
import { btn, progressDots } from './models-number.js?v=20261023-maths-r15';
import { figSVG } from './geomfig.js?v=20261023-maths-r15';
import { rng } from './rng.js?v=20261023-maths-r15';
import { tableFig, vennFig, treeFig } from './skills-probability.js?v=20261023-maths-r15';

const M = s => mathHTML(s);
const vNum = s => { const t = String(s ?? '').trim().replace(/−/g, '-').replace(/\s+/g, ''); const m = t.match(/^(-?\d+)\/(\d+)$/); if (m) return Number(m[2]) ? Number(m[1]) / Number(m[2]) : null; return t === '' || Number.isNaN(Number(t)) ? null : Number(t); };
const near = (a, b, tol = 1e-9) => a !== null && Math.abs(a - b) <= tol;
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${M(text)}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
const numRow = (id, val, unit, act, mode = 'decimal') => `<div class="mrow-in"><input class="lab-input mnum" id="${id}" inputmode="${mode === 'fraction' ? 'text' : 'decimal'}" autocomplete="off" value="${esc(val)}"><span>${unit}</span><button class="primary mbtn" data-act="${act}">Check</button></div>`;
const bindInput = (ctx, id, S, key = 'raw') => { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { S[key] = i.value; ctx.save(); }; };
const tiles = (key, opts) => `<div class="mtiles">${opts.map(([v, t]) => `<button class="choice mtile" data-${key}="${v}">${M(t)}</button>`).join('')}</div>`;

/* ───────── 1. Toss a coin many times; expected sixes; missing probability ───────── */
function heads(n) { const r = rng('crash-course-coin'); let h = 0; for (let i = 0; i < n; i++) if (r() < 0.5) h++; return h; }
function mountCoinTosser(ctx) {
  const w = ctx.w; w.ct ??= { n: 0, raw: '', ok: false }; w.es ??= { raw: '', ok: false }; w.mp ??= { raw: '', ok: false };
  const C = w.ct, E = w.es, P = w.mp;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!C.ok) {
      const rows = [10, 50, 100, 500, 1000].filter(n => n <= C.n).map(n => { const h = heads(n); return [n, h, (h / n).toFixed(3)]; });
      ctx.setTitle('Toss a fair coin again and again.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · RELATIVE FREQUENCY ${progressDots(3, 0, 0)}</div>${rows.length ? figSVG(tableFig(['Tosses', 'Heads', 'Heads ÷ tosses'], rows, `Coin tosses so far: ${rows.map(r => `${r[0]} tosses, ${r[1]} heads`).join('; ')}`)) : '<p class="mcap">No tosses yet.</p>'}`;
      ctx.body.innerHTML = `<p>Keep tossing. Watch heads ÷ tosses as the number of tosses grows.</p><button class="secondary mbtn" data-act="toss" ${C.n >= 1000 ? 'disabled' : ''}>${C.n === 0 ? 'Toss 10 times' : 'Keep tossing'}</button>${C.n >= 1000 ? `<p>What value does the relative frequency get closer to?</p>${numRow('rf', C.raw, '', 'rf')}` : ''}`;
    } else if (!E.ok) {
      ctx.setTitle('A fair dice is rolled 600 times.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · EXPECTED FREQUENCY ${progressDots(3, 1, 1)}</div><div class="mwork"><div>${M('P(six) = {1/6}')}</div><div>expected = probability × number of trials</div></div>`;
      ctx.body.innerHTML = `<p>How many sixes would you expect?</p>${numRow('es', E.raw, 'sixes', 'es')}`;
    } else if (!P.ok) {
      ctx.setTitle('A spinner has four outcomes.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · PROBABILITIES ADD TO 1 ${progressDots(3, 2, 2)}</div>${figSVG(tableFig(['Outcome', 'A', 'B', 'C', 'D'], [['Probability', '0.4', '0.2', '0.15', '?']], 'Spinner: A 0.4, B 0.2, C 0.15, D unknown'))}`;
      ctx.body.innerHTML = `<p>Work out P(D).</p>${numRow('pd', P.raw, '', 'pd')}`;
    } else return done(ctx, figSVG(tableFig(['Tosses', 'Heads ÷ tosses'], [10, 100, 1000].map(n => [n, (heads(n) / n).toFixed(3)]), 'Relative frequency settles near 0.5')), 'Relative frequency wobbles for a few trials and settles towards the theoretical probability as the number of trials grows. Expected frequency = probability × trials: {1/6} × 600 = 100. The probabilities of all the outcomes add up to 1, so P(D) = 1 − 0.75 = 0.25.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelector('[data-act="toss"]')?.addEventListener('click', () => { C.n = { 0: 10, 10: 50, 50: 100, 100: 500, 500: 1000 }[C.n] ?? 1000; ctx.feedback(''); ctx.save(); render(); });
    bindInput(ctx, 'rf', C); bindInput(ctx, 'es', E); bindInput(ctx, 'pd', P);
    ctx.body.querySelector('[data-act="rf"]')?.addEventListener('click', () => { const v = vNum(C.raw); if (near(v, 0.5)) { C.ok = true; ctx.save(); render(); ctx.feedback('The relative frequency gets closer to 0.5, the theoretical probability ✓'); return; } ctx.feedback(near(v, 500, 60) ? 'That is a number of heads. Give the proportion: heads ÷ tosses.' : 'Look at the last column as the tosses increase.', true); });
    ctx.body.querySelector('[data-act="es"]')?.addEventListener('click', () => { const v = vNum(E.raw); if (near(v, 100)) { E.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 300) ? 'A six is 1 of 6 equally likely faces, not 1 of 2.' : near(v, 1 / 6, 0.001) ? 'That is the probability. Multiply it by 600.' : '{1/6} × 600.', true); });
    ctx.body.querySelector('[data-act="pd"]')?.addEventListener('click', () => { const v = vNum(P.raw); if (near(v, 0.25)) { P.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 0.75) ? 'That is the total of the others. Subtract it from 1.' : near(v, 0.25 * 100) ? 'Write it as a decimal, like the table: 0.25.' : '1 − (0.4 + 0.2 + 0.15).', true); });
  };
  render();
}

/* ───────── 2. Dice grid; product rule; Venn diagram ───────── */
function gridFig(target) {
  const f = tableFig(['+', 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6].map(x => [x, ...[1, 2, 3, 4, 5, 6].map(y => x + y)]), `Two-dice totals with every ${target} highlighted`);
  const cw = 560 / 7, x0 = (600 - cw * 7) / 2;
  f.polys = []; for (let x = 1; x <= 6; x++) for (let y = 1; y <= 6; y++) if (x + y === target) f.polys.push({ pts: [[x0 + y * cw, 10 + x * 40], [x0 + (y + 1) * cw, 10 + x * 40], [x0 + (y + 1) * cw, 50 + x * 40], [x0 + y * cw, 50 + x * 40]], fill: '#ed8b7866' });
  return f;
}
function mountDiceGrid(ctx) {
  const w = ctx.w; w.dg ??= { t: 7, raw: '', ok: false }; w.pr ??= { raw: '', ok: false }; w.vn ??= { raw: '', ok: false };
  const G = w.dg, R = w.pr, V = w.vn;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!G.ok) {
      ctx.setTitle('Two dice: which totals are most likely?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · SAMPLE SPACE · TOTAL ${G.t} ${progressDots(3, 0, 0)}</div>${figSVG(gridFig(G.t))}`;
      ctx.body.innerHTML = `<p>Choose a total to highlight its cells. Then work out P(total of 7). You can type a fraction such as 3/36.</p><div class="mrow"><span>Total</span><div class="mstepper">${btn('data-gt="-1"', '−1', G.t <= 2 ? 'disabled' : '')}<output>${G.t}</output>${btn('data-gt="1"', '+1', G.t >= 12 ? 'disabled' : '')}</div></div>${numRow('p7', G.raw, '', 'p7', 'fraction')}`;
    } else if (!R.ok) {
      ctx.setTitle('3 shirts and 4 pairs of trousers.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · LISTING ${progressDots(3, 1, 1)}</div><div class="mwork"><div>S1 with T1, T2, T3, T4</div><div>S2 with T1, T2, T3, T4</div><div>S3 with …</div></div>`;
      ctx.body.innerHTML = `<p>How many different outfits are there?</p>${numRow('pr', R.raw, 'outfits', 'pr')}`;
    } else if (!V.ok) {
      ctx.setTitle('30 students: 18 play football, 12 play tennis, 5 play both.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · VENN DIAGRAM ${progressDots(3, 2, 2)}</div>${figSVG(vennFig('?', 5, '?', '?', ['F', 'T'], 'Venn diagram with 5 in the overlap and the other regions unknown'))}`;
      ctx.body.innerHTML = `<p>Fill in the diagram in your head, starting with the overlap. How many play neither?</p>${numRow('vn', V.raw, 'students', 'vn')}`;
    } else return done(ctx, figSVG(vennFig(13, 5, 7, 5, ['F', 'T'])), 'With equally likely outcomes, count cells, not values: 6 of the 36 cells total 7, so P(7) = {6/36} = {1/6}, the most likely total. Each of 3 shirts goes with each of 4 pairs: 3 × 4 = 12. In a Venn diagram start with the overlap: 18 − 5 = 13 football only, 12 − 5 = 7 tennis only, 30 − 25 = 5 neither.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-gt]').forEach(b => (b.onclick = () => { G.t = Math.max(2, Math.min(12, G.t + Number(b.dataset.gt))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-gt="${b.dataset.gt}"]`)?.focus(); }));
    bindInput(ctx, 'p7', G); bindInput(ctx, 'pr', R); bindInput(ctx, 'vn', V);
    ctx.body.querySelector('[data-act="p7"]')?.addEventListener('click', () => { const v = vNum(G.raw); if (near(v, 1 / 6)) { G.ok = true; ctx.save(); render(); ctx.feedback('6 of the 36 cells: {6/36} = {1/6} ✓'); return; } ctx.feedback(near(v, 1 / 11) ? 'There are 11 possible totals, but they are not equally likely. Count cells out of 36.' : near(v, 1 / 36) ? 'Count every cell that shows 7.' : 'Set the total to 7 and count the highlighted cells.', true); });
    ctx.body.querySelector('[data-act="pr"]')?.addEventListener('click', () => { const v = vNum(R.raw); if (near(v, 12)) { R.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 7) ? 'Each shirt goes with every pair of trousers: multiply.' : '3 × 4.', true); });
    ctx.body.querySelector('[data-act="vn"]')?.addEventListener('click', () => { const v = vNum(V.raw); if (near(v, 5)) { V.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 0) ? '18 + 12 counts the 5 who play both twice. Start with the overlap.' : near(v, 10) ? 'Football only is 13 and tennis only is 7: 30 − 13 − 5 − 7.' : 'Football only = 18 − 5; tennis only = 12 − 5.', true); });
  };
  render();
}

/* ───────── 3. Tree diagram with and without replacement ───────── */
function mountTreeBuilder(ctx) {
  const w = ctx.w; w.tb ??= { repl: true, raw: '', ok: false }; w.br ??= { raw: '', ok: false }; w.al ??= { raw: '', ok: false };
  const T = w.tb, B = w.br, A = w.al;
  const tree = repl => treeFig(['3/5', '2/5'], repl ? [['3/5', '2/5'], ['3/5', '2/5']] : [['2/4', '2/4'], ['3/4', '1/4']], ['Red', 'Blue'], ['Red', 'Blue'], `Tree for 3 red and 2 blue counters ${repl ? 'with' : 'without'} replacement`);
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!T.ok) {
      ctx.setTitle('3 red and 2 blue counters. Take two.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · ${T.repl ? 'WITH' : 'WITHOUT'} REPLACEMENT ${progressDots(3, 0, 0)}</div>${figSVG(tree(T.repl))}`;
      ctx.body.innerHTML = `<p>Switch between putting the first counter back and keeping it. Without replacement, after a red is taken, what is the probability the second is red?</p><button class="secondary mbtn" data-act="sw">${T.repl ? 'Do not replace the first counter' : 'Replace the first counter'}</button>${numRow('tb', T.raw, '', 'tb', 'fraction')}`;
    } else if (!B.ok) {
      ctx.setTitle('Without replacement: both red?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · MULTIPLY ALONG ${progressDots(3, 1, 1)}</div>${figSVG(tree(false))}`;
      ctx.body.innerHTML = `<p>Work out P(both red).</p>${numRow('bb', B.raw, '', 'bb', 'fraction')}`;
    } else if (!A.ok) {
      ctx.setTitle('Without replacement: at least one red?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · AT LEAST ONE ${progressDots(3, 2, 2)}</div>${figSVG(tree(false))}`;
      ctx.body.innerHTML = `<p>Work out P(at least one red). Hint: what is the only way to get no red?</p>${numRow('al', A.raw, '', 'al', 'fraction')}`;
    } else return done(ctx, figSVG(tree(false)), 'Without replacement the second-stage probabilities change: after a red, 2 red remain out of 4. Multiply along the branches: P(both red) = {3/5} × {2/4} = {3/10}. "At least one red" is everything except blue-blue: 1 − {2/5} × {1/4} = {9/10}.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelector('[data-act="sw"]')?.addEventListener('click', () => { T.repl = !T.repl; ctx.feedback(''); ctx.save(); render(); });
    bindInput(ctx, 'tb', T); bindInput(ctx, 'bb', B); bindInput(ctx, 'al', A);
    ctx.body.querySelector('[data-act="tb"]')?.addEventListener('click', () => { const v = vNum(T.raw); if (near(v, 0.5)) { T.ok = true; ctx.save(); render(); ctx.feedback('2 red left out of 4: {2/4} ✓'); return; } ctx.feedback(near(v, 0.6) ? 'That is with replacement. Without it, one red has gone: 2 red out of 4.' : near(v, 2 / 5) ? 'There are only 4 counters left.' : 'Count the counters left after one red is taken.', true); });
    ctx.body.querySelector('[data-act="bb"]')?.addEventListener('click', () => { const v = vNum(B.raw); if (near(v, 0.3)) { B.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 0.36) ? 'That is with replacement. Use the second branch {2/4}.' : near(v, 1.1) ? 'Multiply along the branches, do not add.' : '{3/5} × {2/4}.', true); });
    ctx.body.querySelector('[data-act="al"]')?.addEventListener('click', () => { const v = vNum(A.raw); if (near(v, 0.9)) { A.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 0.3) ? 'That is both red only. At least one red also includes red-blue and blue-red.' : near(v, 0.1) ? 'That is P(no red). Subtract it from 1.' : '1 − P(blue, blue).', true); });
  };
  render();
}

/* ───────── 4. Two-way table; given that…; Venn ───────── */
function mountConditionalFilter(ctx) {
  const w = ctx.w; w.tw ??= { raw: '', ok: false }; w.gv ??= { on: false, raw: '', ok: false }; w.vc ??= { raw: '', ok: false };
  const Wt = w.tw, G = w.gv, V = w.vc;
  const table = miss => tableFig(['', 'Walk', 'Bus', 'Total'], [['Year 10', 24, miss ? '?' : 36, 60], ['Year 11', 16, 44, 60], ['Total', 40, 80, 120]], 'Two-way table of travel by year group');
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    const higher = ctx.tier === 'Higher';
    if (!Wt.ok) {
      ctx.setTitle('Complete the two-way table.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · TWO-WAY TABLE ${progressDots(higher ? 3 : 1, 0, 0)}</div>${figSVG(table(true))}`;
      ctx.body.innerHTML = `<p>How many Year 10 students take the bus?</p>${numRow('tw', Wt.raw, 'students', 'tw')}`;
    } else if (higher && !G.ok) {
      ctx.setTitle('Given that the student takes the bus…');
      const t = table(false); if (G.on) t.polys = [{ pts: [[180, 10], [320, 10], [320, 170], [180, 170]], fill: '#ed8b7844' }].map(p => { const cw = Math.min(130, 560 / 4), x0 = (600 - cw * 4) / 2; return { ...p, pts: [[x0 + 2 * cw, 10], [x0 + 3 * cw, 10], [x0 + 3 * cw, 170], [x0 + 2 * cw, 170]] }; });
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · NARROW THE GROUP ${progressDots(3, 1, 1)}</div>${figSVG(t)}`;
      ctx.body.innerHTML = `<p>A bus student is picked at random. Work out P(Year 11 | bus).</p><button class="secondary mbtn" data-act="hl">${G.on ? 'Show everyone' : 'Highlight only the bus students'}</button>${numRow('gv', G.raw, '', 'gv', 'fraction')}`;
    } else if (higher && !V.ok) {
      ctx.setTitle('A only 7, both 3, B only 5, neither 5.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · VENN DIAGRAM ${progressDots(3, 2, 2)}</div>${figSVG(vennFig(7, 3, 5, 5))}`;
      ctx.body.innerHTML = `<p>Work out P(B | A).</p>${numRow('vc', V.raw, '', 'vc', 'fraction')}`;
    } else return done(ctx, figSVG(table(false)), higher ? 'Rows and columns add up to their totals: 60 − 24 = 36. "Given that" shrinks the group: of the 80 bus students, 44 are in Year 11, so P(Year 11 | bus) = {44/80} = {11/20}. In the Venn diagram, given A leaves the 10 in A, so P(B | A) = {3/10}.' : 'Rows and columns of a two-way table add up to their totals: 60 − 24 = 36 Year 10 students take the bus.');
    bind();
  };
  const bind = () => {
    bindInput(ctx, 'tw', Wt); bindInput(ctx, 'gv', G); bindInput(ctx, 'vc', V);
    ctx.body.querySelector('[data-act="hl"]')?.addEventListener('click', () => { G.on = !G.on; ctx.feedback(''); ctx.save(); render(); });
    ctx.body.querySelector('[data-act="tw"]')?.addEventListener('click', () => { const v = vNum(Wt.raw); if (near(v, 36)) { Wt.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 44) ? 'That is Year 11. Use the Year 10 row: 60 − 24.' : near(v, 56) ? 'Use the Year 10 row total, 60.' : 'Year 10 total 60 − 24 walk.', true); });
    ctx.body.querySelector('[data-act="gv"]')?.addEventListener('click', () => { const v = vNum(G.raw); if (near(v, 44 / 80)) { G.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 44 / 120) ? 'That is P(Year 11 and bus). Given bus, divide by the 80 bus students.' : near(v, 44 / 60) ? 'Divide by the bus total, not the Year 11 total.' : 'Only the bus column counts.', true); });
    ctx.body.querySelector('[data-act="vc"]')?.addEventListener('click', () => { const v = vNum(V.raw); if (near(v, 0.3)) { V.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 0.15) ? 'That is P(A ∩ B). Given A, only the 10 in A count.' : near(v, 3 / 8) ? 'That is P(A | B). Given A, divide by the number in A.' : 'The overlap ÷ the number in A.', true); });
  };
  render();
}

export const MODELS14 = { 'coin-tosser': mountCoinTosser, 'dice-grid': mountDiceGrid, 'tree-builder': mountTreeBuilder, 'conditional-filter': mountConditionalFilter };
