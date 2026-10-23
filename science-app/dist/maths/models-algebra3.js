// Visual models and investigations for Algebra batch 4: functions, algebraic fractions, proof,
// iteration and forming equations. visual7() draws worked-example diagrams; MODELS7 holds the
// investigations. Every render checks ctx.isActive so a stale redraw cannot paint a newer view.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { num } from './frac.js?v=20261023-maths-r9';
import { C, btn, progressDots } from './models-number.js?v=20261023-maths-r9';
import { graphSVG } from './graph.js?v=20261023-maths-r9';
import { equivalent, markAlgebra, algebraPreview } from './algebra.js?v=20261023-maths-r9';

const M = s => mathHTML(s);
const W = 600;
const vNum = s => { const t = String(s ?? '').trim().replace(/−/g, '-'); return t === '' || Number.isNaN(Number(t)) ? null : Number(t); };
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${text}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
const isPrime = n => { if (n < 2) return false; for (let k = 2; k * k <= n; k++) if (n % k === 0) return false; return true; };

/* ───────── static visuals ───────── */
function machineSVG({ ops = [], input = '', output = '', reverse = false }) {
  const n = ops.length, bw = 120, gap = 34, total = 70 + n * (bw + gap) + 70, x0 = (W - total) / 2;
  let s = '', x = x0;
  const arrow = (a, b) => `<line x1="${a}" y1="60" x2="${b - 8}" y2="60" stroke="${C.muted}" stroke-width="2"/><path d="M${b - 8} 54 L${b} 60 L${b - 8} 66 z" fill="${C.muted}"/>`;
  s += `<text x="${x + 30}" y="66" text-anchor="middle" fill="${C.cream}" font-size="20" font-family="Georgia,serif">${esc(input)}</text>`; x += 60;
  for (const op of ops) {
    s += arrow(x, x + gap); x += gap;
    s += `<rect x="${x}" y="34" width="${bw}" height="52" rx="10" fill="none" stroke="${reverse ? C.green : C.coral}" stroke-width="3"/><text x="${x + bw / 2}" y="67" text-anchor="middle" fill="${C.cream}" font-size="18">${esc(op)}</text>`;
    x += bw;
  }
  s += arrow(x, x + gap); x += gap;
  s += `<text x="${x + 30}" y="66" text-anchor="middle" fill="${C.cream}" font-size="20" font-family="Georgia,serif">${esc(output)}</text>`;
  return `<svg viewBox="0 0 ${W} 120" class="mviz" role="img" aria-label="Function machine${reverse ? ' run backwards' : ''}: ${esc(input)} then ${ops.map(esc).join(', then ')}, giving ${esc(output)}">${s}</svg>`;
}
function workBox({ lines = [] }) {
  return `<div class="mwork">${lines.map(l => `<div>${M(l)}</div>`).join('')}</div>`;
}
function triSVG({ labels = ['', '', ''] }) {
  const A = [110, 250], B = [490, 250], Cc = [230, 40];
  return `<svg viewBox="0 0 ${W} 290" class="mviz" role="img" aria-label="Triangle with angles ${labels.map(esc).join(', ')}"><polygon points="${[A, B, Cc].map(p => p.join(',')).join(' ')}" fill="none" stroke="${C.coral}" stroke-width="3"/><text x="${A[0] + 46}" y="${A[1] - 14}" fill="${C.cream}" font-size="18">${esc(labels[0])}</text><text x="${B[0] - 50}" y="${B[1] - 14}" text-anchor="end" fill="${C.cream}" font-size="18">${esc(labels[1])}</text><text x="${Cc[0]}" y="${Cc[1] + 46}" text-anchor="middle" fill="${C.cream}" font-size="18">${esc(labels[2])}</text></svg>`;
}
export function visual7(v) {
  if (!v) return '';
  const body = v.kind === 'fmachine' ? machineSVG(v) : v.kind === 'work' ? workBox(v) : v.kind === 'tri' ? triSVG(v) : '';
  return body ? body + (v.caption ? `<p class="mcap">${M(v.caption)}</p>` : '') : '';
}

/* ───────── 1. Function machine: forwards, backwards, then x ───────── */
const FM_IN = [2, 5, -1];
const fmOut = x => 3 * x - 4;
const REV = ['+ 4', '− 4', '× 3', '÷ 3'];
function mountFunctionMachine(ctx) {
  const w = ctx.w; w.fwd ??= { ys: FM_IN.map(() => ''), ok: false }; w.rev ??= { pick: [], ok: false }; w.expr ??= { raw: '', ok: false };
  const Fw = w.fwd, Rv = w.rev, Ex = w.expr;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Fw.ok) {
      ctx.setTitle('Run the machine forwards.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · INPUT TO OUTPUT ${progressDots(3, 0, 0)}</div>${machineSVG({ ops: ['× 3', '− 4'], input: 'input', output: 'output' })}<p class="mcap">Do the operations in order, left to right.</p>`;
      ctx.body.innerHTML = `<p>Work out the output for each input.</p><div class="mtable-in">${FM_IN.map((x, i) => `<label>${num(x)} → <input class="lab-input" data-fy="${i}" inputmode="text" autocomplete="off" value="${esc(Fw.ys[i])}"></label>`).join('')}</div><button class="primary mbtn" data-act="fwd">Check outputs</button>`;
    } else if (!Rv.ok) {
      ctx.setTitle('The output was 26. Build the reverse machine.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · OUTPUT TO INPUT ${progressDots(3, 1, 1)}</div>${machineSVG({ ops: ['× 3', '− 4'], input: '?', output: '26' })}${machineSVG({ ops: Rv.pick.length ? Rv.pick.map(i => REV[i]) : ['…'], input: '26', output: Rv.pick.length === 2 ? '?' : '', reverse: true })}`;
      ctx.body.innerHTML = `<p>Tap two operations, in order, to undo the machine.</p><div class="mtiles">${REV.map((t, i) => `<button class="choice mtile ${Rv.pick.includes(i) ? 'selected' : ''}" data-rv="${i}" aria-pressed="${Rv.pick.includes(i)}">${esc(t)}</button>`).join('')}</div><button class="secondary mbtn" data-act="clear">Start again</button><button class="primary mbtn" data-act="rev">Run it backwards</button>`;
    } else if (!Ex.ok) {
      ctx.setTitle('Now the input is x.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · AN EXPRESSION ${progressDots(3, 2, 2)}</div>${machineSVG({ ops: ['× 3', '− 4'], input: 'x', output: '?' })}${machineSVG({ ops: ['− 4', '× 3'], input: 'x', output: '?' })}<p class="mcap">The second machine has the same operations in the other order.</p>`;
      ctx.body.innerHTML = `<p>Write an expression for the output of the <strong>first</strong> machine.</p><input class="lab-input mtext malg" id="fx" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(Ex.raw)}"><p class="malg-preview" id="fxp">${Ex.raw ? 'Reads as: ' + M(algebraPreview(Ex.raw)) : ''}</p><button class="primary mbtn" data-act="expr">Check</button>`;
    } else return done(ctx, `${machineSVG({ ops: ['× 3', '− 4'], input: 'x', output: '3x − 4' })}${machineSVG({ ops: ['+ 4', '÷ 3'], input: 'x', output: '(x + 4)/3', reverse: true })}`, 'A function machine applies its operations in order: × 3 then − 4 turns x into 3x − 4, while − 4 then × 3 gives 3(x − 4). To go backwards, undo the last operation first with its inverse: + 4, then ÷ 3. Higher: if f(x) = 3x − 4, the reverse machine is the inverse function f^{−1}(x) = {x + 4/3}.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-fy]').forEach(i => (i.oninput = () => { Fw.ys[Number(i.dataset.fy)] = i.value; ctx.save(); }));
    ctx.body.querySelector('[data-act="fwd"]')?.addEventListener('click', () => {
      const bad = FM_IN.findIndex((x, i) => vNum(Fw.ys[i]) !== fmOut(x));
      if (bad < 0) { Fw.ok = true; ctx.save(); render(); ctx.feedback('All three outputs are right ✓'); return; }
      const x = FM_IN[bad], g = vNum(Fw.ys[bad]);
      ctx.feedback(g === null ? 'Enter a number for each output.' : g === 3 * (x - 4) ? `For ${num(x)}: × 3 comes first. ${num(x)} × 3 = ${num(3 * x)}, then − 4.` : g === 3 * x + 4 ? `For ${num(x)}: the second step subtracts 4.` : `For ${num(x)}: ${num(x)} × 3 = ${num(3 * x)}, then ${num(3 * x)} − 4.`, true);
    });
    ctx.body.querySelectorAll('[data-rv]').forEach(b => (b.onclick = () => { const i = Number(b.dataset.rv); if (Rv.pick.includes(i) || Rv.pick.length >= 2) return; Rv.pick.push(i); ctx.feedback(''); ctx.save(); render(); }));
    ctx.body.querySelector('[data-act="clear"]')?.addEventListener('click', () => { Rv.pick = []; ctx.feedback(''); ctx.save(); render(); });
    ctx.body.querySelector('[data-act="rev"]')?.addEventListener('click', () => {
      const [a, b] = Rv.pick.map(i => REV[i]);
      if (Rv.pick.length < 2) { ctx.feedback('Choose two operations.', true); return; }
      if (a === '+ 4' && b === '÷ 3') { Rv.ok = true; ctx.save(); render(); ctx.feedback('26 + 4 = 30, 30 ÷ 3 = 10. Check: 10 × 3 − 4 = 26 ✓'); return; }
      if (a === '÷ 3' && b === '+ 4') { ctx.feedback('Those are the right inverses, but undo the last operation (− 4) first: 26 ÷ 3 + 4 is not a whole number, and 26 + 4 then ÷ 3 is.', true); return; }
      if ([a, b].includes('− 4') || [a, b].includes('× 3')) { ctx.feedback('Use inverse operations: the inverse of − 4 is + 4 and the inverse of × 3 is ÷ 3.', true); return; }
      ctx.feedback('Undo each operation once.', true);
    });
    const fx = ctx.body.querySelector('#fx');
    if (fx) fx.oninput = () => { Ex.raw = fx.value; ctx.save(); const p = ctx.body.querySelector('#fxp'); if (p) p.innerHTML = fx.value.trim() ? 'Reads as: ' + M(algebraPreview(fx.value)) : ''; };
    ctx.body.querySelector('[data-act="expr"]')?.addEventListener('click', () => {
      const res = markAlgebra({ expr: '3x - 4', form: 'any', vars: ['x'] }, Ex.raw);
      if (res.status === 'invalid') { ctx.feedback(res.hint || 'Type an expression in x, for example 3x − 4.', true); return; }
      if (res.status === 'correct') { Ex.ok = true; ctx.save(); render(); return; }
      ctx.feedback(equivalent(Ex.raw, '3(x - 4)') ? '3(x − 4) is the second machine: it subtracts 4 before multiplying. The first machine multiplies x by 3 first.' : 'Start with x, multiply by 3 to get 3x, then subtract 4.', true);
    });
  };
  render();
}

/* ───────── 2. Algebraic fractions: test, choose, factorise ───────── */
const CANDIDATES = [{ t: 'x + 3', f: x => x + 3, ok: true }, { t: 'x^2 + 5x + 3', f: x => x * x + 5 * x + 3, why: 'That divides only the 6 by 2. Cancelling must divide the whole top by the whole bottom.' }, { t: '{5x + 6/2}', f: x => (5 * x + 6) / 2, why: 'That cancels x^2 with x as if they were factors. They are terms, not factors.' }, { t: 'x^2 + 4x + 4', f: x => x * x + 4 * x + 4, why: 'That subtracts the bottom from the top. Dividing is not subtracting.' }];
function mountFractionCancel(ctx) {
  const w = ctx.w; w.val ??= { raw: '', ok: false }; w.pick ??= { tried: [], ok: false }; w.fac ??= { raw: '', ok: false };
  const V = w.val, P = w.pick, Fa = w.fac;
  const target = '{x^2 + 5x + 6/x + 2}';
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!V.ok) {
      ctx.setTitle('Substitute a number.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · TRY x = 4 ${progressDots(3, 0, 0)}</div><div class="mbigexpr">${M(target)}</div><p class="mcap">A simplified fraction must give the same value for every x.</p>`;
      ctx.body.innerHTML = `<p>Work out the value of ${M(target)} when x = 4.</p><input class="lab-input mtext msmall" id="fv" inputmode="text" autocomplete="off" value="${esc(V.raw)}"><button class="primary mbtn" data-act="val">Check</button>`;
    } else if (!P.ok) {
      ctx.setTitle('Which is the correct simplification?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · TEST EACH ONE ${progressDots(3, 1, 1)}</div><div class="mbigexpr">${M(target)} = 7 when x = 4</div><table class="mtable"><thead><tr><th>Expression</th><th>at x = 4</th></tr></thead><tbody>${P.tried.map(i => `<tr><td>${M(CANDIDATES[i].t)}</td><td>${num(CANDIDATES[i].f(4))}</td></tr>`).join('')}</tbody></table>`;
      ctx.body.innerHTML = `<p>Tap an expression to test it at x = 4, then choose the one that equals the fraction.</p><div class="mtiles">${CANDIDATES.map((c, i) => `<button class="choice mtile" data-cd="${i}">${M(c.t)}</button>`).join('')}</div>`;
    } else if (!Fa.ok) {
      ctx.setTitle('Why does it work? Factorise the top.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · FACTORISE ${progressDots(3, 2, 2)}</div><div class="mbigexpr">${M('{x^2 + 5x + 6/x + 2} = {(  ?  )(  ?  )/x + 2}')}</div>`;
      ctx.body.innerHTML = `<p>Factorise x^2 + 5x + 6 into two brackets.</p>`.replace('x^2', 'x²') + `<input class="lab-input mtext malg" id="ff" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(Fa.raw)}"><button class="primary mbtn" data-act="fac">Check</button>`;
    } else return done(ctx, `<div class="mwork"><div>${M('{x^2 + 5x + 6/x + 2}')}</div><div>${M('= {(x + 2)(x + 3)/(x + 2)}')}</div><div>${M('= x + 3')}</div></div>`, 'Only factors can be cancelled: things that multiply the whole top and the whole bottom. Factorise first, then cancel a common bracket. Substituting a value is a quick check: a correct simplification gives the same value as the original for every x (except where the bottom is 0).');
    bind();
  };
  const bind = () => {
    const fv = ctx.body.querySelector('#fv'); if (fv) fv.oninput = () => { V.raw = fv.value; ctx.save(); };
    ctx.body.querySelector('[data-act="val"]')?.addEventListener('click', () => {
      const g = vNum(V.raw);
      if (g === 7) { V.ok = true; ctx.save(); render(); ctx.feedback('16 + 20 + 6 = 42, and 4 + 2 = 6. 42 ÷ 6 = 7 ✓'); return; }
      ctx.feedback(g === 42 ? 'That is the top. Divide it by the bottom, 4 + 2 = 6.' : 'Top: 4^2 + 5 × 4 + 6 = 42. Bottom: 4 + 2 = 6. Then divide.'.replace('4^2', '4²'), true);
    });
    ctx.body.querySelectorAll('[data-cd]').forEach(b => (b.onclick = () => {
      const i = Number(b.dataset.cd), c = CANDIDATES[i];
      if (!P.tried.includes(i)) P.tried.push(i);
      ctx.save();
      if (c.ok) { P.ok = true; render(); ctx.feedback('x + 3 = 7 when x = 4 ✓'); return; }
      render(); ctx.feedback(`${num(c.f(4))}, not 7. ${c.why}`, true);
    }));
    const ff = ctx.body.querySelector('#ff'); if (ff) ff.oninput = () => { Fa.raw = ff.value; ctx.save(); };
    ctx.body.querySelector('[data-act="fac"]')?.addEventListener('click', () => {
      const res = markAlgebra({ expr: 'x^2 + 5x + 6', form: 'factorised', vars: ['x'] }, Fa.raw);
      if (res.status === 'correct') { Fa.ok = true; ctx.save(); render(); return; }
      ctx.feedback(res.status === 'invalid' ? (res.hint || 'Type two brackets, for example (x + 1)(x + 4).') : res.status === 'partial' ? 'That is equal, but write it as two brackets multiplied together.' : 'Find two numbers that multiply to 6 and add to 5.', true);
    });
  };
  render();
}

/* ───────── 3. Proof: examples, a proof, a counterexample ───────── */
const LINES = ['Let the numbers be n, n + 1 and n + 2', 'Their sum is n + (n + 1) + (n + 2) = 3n + 3', '3n + 3 = 3(n + 1)', 'n + 1 is a whole number, so 3(n + 1) is a multiple of 3'];
const DECOY = '1 + 2 + 3 = 6, which is a multiple of 3';
function mountProofBuilder(ctx) {
  const w = ctx.w; w.ex ??= { tries: [], raw: '', ok: false }; w.pf ??= { order: [], ok: false }; w.ce ??= { tries: [], raw: '', ok: false };
  const E = w.ex, Pf = w.pf, Ce = w.ce;
  const tiles = [3, 0, 4, 2, 1]; // display order; 4 is the decoy
  const tileText = i => (i === 4 ? DECOY : LINES[i]);
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!E.ok) {
      ctx.setTitle('Test the claim with examples.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · EXAMPLES ${progressDots(3, 0, 0)}</div><p class="mclaim">"The sum of any three consecutive whole numbers is a multiple of 3."</p><table class="mtable"><thead><tr><th>Numbers</th><th>Sum</th><th>÷ 3</th></tr></thead><tbody>${E.tries.map(n => `<tr><td>${n}, ${n + 1}, ${n + 2}</td><td>${3 * n + 3}</td><td>${n + 1}</td></tr>`).join('')}</tbody></table>`;
      ctx.body.innerHTML = `<p>Enter a starting whole number to test the claim. Try three different numbers.</p><div class="mrow-in"><input class="lab-input mnum" id="pn" inputmode="numeric" autocomplete="off" value="${esc(E.raw)}"><button class="primary mbtn" data-act="try">Test</button></div>`;
    } else if (!Pf.ok) {
      ctx.setTitle('Examples are not a proof. Build one.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · PROOF ${progressDots(3, 1, 1)}</div><ol class="mproof">${Pf.order.map(i => `<li>${M(LINES[i])}</li>`).join('') || '<li class="mmuted">Tap the lines in order…</li>'}</ol>`;
      ctx.body.innerHTML = `<p>Tap the lines in the order of a proof that works for every whole number. One line does not belong.</p><div class="mtiles mtiles-wide">${tiles.filter(i => !Pf.order.includes(i)).map(i => `<button class="choice mtile mtile-line" data-pl="${i}">${M(tileText(i))}</button>`).join('')}</div><button class="secondary mbtn" data-act="restart">Start again</button>`;
    } else if (!Ce.ok) {
      ctx.setTitle('Disprove a claim with a counterexample.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · COUNTEREXAMPLE ${progressDots(3, 2, 2)}</div><p class="mclaim">"n² + n + 11 is prime for every whole number n."</p><table class="mtable"><thead><tr><th>n</th><th>n² + n + 11</th><th>Prime?</th></tr></thead><tbody>${Ce.tries.map(n => `<tr><td>${n}</td><td>${n * n + n + 11}</td><td>${isPrime(n * n + n + 11) ? 'yes' : 'no'}</td></tr>`).join('')}</tbody></table>`;
      ctx.body.innerHTML = `<p>Find a whole number n that makes n² + n + 11 not prime.</p><div class="mrow-in"><input class="lab-input mnum" id="cn" inputmode="numeric" autocomplete="off" value="${esc(Ce.raw)}"><button class="primary mbtn" data-act="ce">Test</button></div>`;
    } else return done(ctx, `<ol class="mproof">${LINES.map(l => `<li>${M(l)}</li>`).join('')}</ol>`, 'Examples can support a claim but cannot prove it for every number. A proof uses algebra: n, n + 1, n + 2 stands for any three consecutive numbers, and 3(n + 1) shows the sum is always a multiple of 3. To disprove a claim, one counterexample is enough: n = 10 gives 121 = 11 × 11.');
    bind();
  };
  const bind = () => {
    const pn = ctx.body.querySelector('#pn'); if (pn) pn.oninput = () => { E.raw = pn.value; ctx.save(); };
    ctx.body.querySelector('[data-act="try"]')?.addEventListener('click', () => {
      const n = vNum(E.raw);
      if (n === null || !Number.isInteger(n) || Math.abs(n) > 100000) { ctx.feedback('Enter a whole number.', true); return; }
      if (E.tries.includes(n)) { ctx.feedback('Try a different number.', true); return; }
      E.tries.push(n); E.raw = '';
      if (E.tries.length >= 3) { E.ok = true; ctx.save(); render(); ctx.feedback('It worked every time, but three examples do not show it works for every number.'); return; }
      ctx.save(); render(); ctx.feedback(`${n} + ${n + 1} + ${n + 2} = ${3 * n + 3} = 3 × ${n + 1} ✓`);
    });
    ctx.body.querySelectorAll('[data-pl]').forEach(b => (b.onclick = () => {
      const i = Number(b.dataset.pl);
      if (i === 4) { ctx.feedback('That is one example. A proof must work for every whole number.', true); return; }
      if (i !== Pf.order.length) { ctx.feedback(Pf.order.length === 0 ? 'Start by naming the numbers with algebra.' : `That line comes later. What follows "${LINES[Pf.order.length - 1]}"?`, true); return; }
      Pf.order.push(i); ctx.feedback('');
      if (Pf.order.length === LINES.length) Pf.ok = true;
      ctx.save(); render();
    }));
    ctx.body.querySelector('[data-act="restart"]')?.addEventListener('click', () => { Pf.order = []; ctx.feedback(''); ctx.save(); render(); });
    const cn = ctx.body.querySelector('#cn'); if (cn) cn.oninput = () => { Ce.raw = cn.value; ctx.save(); };
    ctx.body.querySelector('[data-act="ce"]')?.addEventListener('click', () => {
      const n = vNum(Ce.raw);
      if (n === null || !Number.isInteger(n) || n < 0 || n > 1000) { ctx.feedback('Enter a whole number from 0 to 1000.', true); return; }
      if (!Ce.tries.includes(n)) Ce.tries.push(n);
      Ce.raw = '';
      const v = n * n + n + 11;
      if (!isPrime(v)) { let f = 2; while (v % f) f++; Ce.ok = true; ctx.save(); render(); ctx.feedback(`n = ${n} gives ${v} = ${f} × ${v / f}, not prime ✓`); return; }
      ctx.save(); render(); ctx.feedback(`${v} is prime.${Ce.tries.length >= 4 ? ' Hint: try n = 10, or n = 11.' : ' Try another value.'}`, true);
    });
  };
  render();
}

/* ───────── 4. Iteration: sign change, iterate, another start ───────── */
const f4 = x => x ** 3 + 2 * x - 5, g4 = x => Math.cbrt(5 - 2 * x);
const ROOT4 = (() => { let x = 1; for (let i = 0; i < 200; i++) x = g4(x); return x; })();
const cobweb = xs => { const pts = [[xs[0], 0]]; for (let i = 0; i < xs.length - 1; i++) pts.push([xs[i], xs[i + 1]], [xs[i + 1], xs[i + 1]]); return pts; };
const iterTable = xs => `<table class="mtable"><thead><tr><th>n</th><th>x<sub>n</sub></th></tr></thead><tbody>${xs.map((v, i) => `<tr><td>${i}</td><td>${v.toFixed(5).replace('-', '−')}</td></tr>`).join('')}</tbody></table>`;
function mountIteration(ctx) {
  const w = ctx.w; w.sg ??= { a: '', b: '', ok: false }; w.it ??= { xs: [1], raw: '', ok: false }; w.st ??= { x0: null, ok: false };
  const S = w.sg, I = w.it, St = w.st;
  const graph = (xs, x0) => graphSVG({ xr: [0, 2.5], yr: [0, 2.5], xstep: 0.5, ystep: 0.5, height: 260, fns: [{ expr: 'x', label: 'y = x' }, { expr: 'cbrt(5 - 2x)', label: 'y = ∛(5 − 2x)' }], polys: xs.length > 1 ? [{ pts: cobweb(xs) }] : [], points: [[x0, 0, `x₀ = ${x0}`]] });
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!S.ok) {
      ctx.setTitle('Show there is a solution between 1 and 2.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · SIGN CHANGE ${progressDots(3, 0, 0)}</div>${graphSVG({ xr: [-1, 3], yr: [-8, 12], ystep: 2, height: 240, fns: [{ expr: 'x^3 + 2x - 5', label: 'y = x³ + 2x − 5' }] })}`;
      ctx.body.innerHTML = `<p>f(x) = x³ + 2x − 5. Work out f(1) and f(2).</p><div class="mpair"><label class="field-label">f(1) = <input class="lab-input mtext msmall" id="sa" inputmode="text" autocomplete="off" value="${esc(S.a)}"></label><label class="field-label">f(2) = <input class="lab-input mtext msmall" id="sb" inputmode="text" autocomplete="off" value="${esc(S.b)}"></label></div><button class="primary mbtn" data-act="sign">Check</button>`;
    } else if (!I.ok) {
      ctx.setTitle(`Iterate x${'ₙ₊₁'} = ∛(5 − 2x${'ₙ'}) from x₀ = 1.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · ITERATE ${progressDots(3, 1, 1)}</div>${graph(I.xs, 1)}${iterTable(I.xs)}`;
      ctx.body.innerHTML = `<p>Press Iterate to put the last value back into the formula. When the values agree to 2 decimal places, enter the solution.</p><button class="secondary mbtn" data-act="step">Iterate</button><div class="mrow-in"><label class="field-label" for="rt">Solution to 2 d.p.</label><input class="lab-input mnum" id="rt" inputmode="decimal" autocomplete="off" value="${esc(I.raw)}"><button class="primary mbtn" data-act="root">Check</button></div>`;
    } else if (!St.ok) {
      const xs = [St.x0 ?? 0]; if (St.x0 !== null) for (let i = 0; i < 6; i++) xs.push(g4(xs.at(-1)));
      ctx.setTitle('Does the starting value matter?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · ANOTHER START ${progressDots(3, 2, 2)}</div>${St.x0 === null ? '<p class="mcap">Choose a different starting value.</p>' : graph(xs, St.x0) + iterTable(xs)}`;
      ctx.body.innerHTML = `<p>Choose a new starting value x₀.</p><div class="mtiles">${[0, 2].map(v => `<button class="choice mtile ${St.x0 === v ? 'selected' : ''}" data-x0="${v}">x₀ = ${v}</button>`).join('')}</div>${St.x0 === null ? '' : `<p>Do the values close in on the same solution?</p><div class="mtiles"><button class="choice mtile" data-same="1">Yes, ${ROOT4.toFixed(2)}</button><button class="choice mtile" data-same="0">No, a different one</button></div>`}`;
    } else return done(ctx, graph([1, ...Array.from({ length: 5 }, (_, i, a) => 0)].reduce((acc, _, i) => (i ? [...acc, g4(acc.at(-1))] : acc), [1]), 1), `f(1) = −2 and f(2) = 7: the sign change shows a solution between 1 and 2. Rearranging x³ + 2x − 5 = 0 as x = ∛(5 − 2x) gives the iteration x_{n + 1} = ∛(5 − 2x_n). Each output is fed back in; the values zig-zag towards where y = x meets y = ∛(5 − 2x), the solution x = ${ROOT4.toFixed(2)} (2 d.p.). Here any nearby start leads to the same solution, but not every rearrangement converges.`);
    bind();
  };
  const bind = () => {
    for (const id of ['sa', 'sb']) { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { S[id === 'sa' ? 'a' : 'b'] = i.value; ctx.save(); }; }
    ctx.body.querySelector('[data-act="sign"]')?.addEventListener('click', () => {
      const a = vNum(S.a), b = vNum(S.b);
      if (a === -2 && b === 7) { S.ok = true; ctx.save(); render(); ctx.feedback('f(1) is negative and f(2) is positive: the curve crosses 0 between them ✓'); return; }
      ctx.feedback(a !== -2 ? 'f(1) = 1³ + 2 × 1 − 5.' : 'f(2) = 2³ + 2 × 2 − 5 = 8 + 4 − 5.', true);
    });
    ctx.body.querySelector('[data-act="step"]')?.addEventListener('click', () => { if (I.xs.length < 12) I.xs.push(g4(I.xs.at(-1))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector('[data-act="step"]')?.focus(); });
    const rt = ctx.body.querySelector('#rt'); if (rt) rt.oninput = () => { I.raw = rt.value; ctx.save(); };
    ctx.body.querySelector('[data-act="root"]')?.addEventListener('click', () => {
      const v = vNum(I.raw), want = Number(ROOT4.toFixed(2));
      if (v === null) { ctx.feedback('Enter a decimal.', true); return; }
      if (I.xs.length < 4) { ctx.feedback('Iterate a few more times first, until two values agree to 2 decimal places.', true); return; }
      if (Math.abs(v - want) < 1e-9) { I.ok = true; ctx.save(); render(); return; }
      ctx.feedback(Math.abs(v - ROOT4) < 0.02 ? 'Close: round to 2 decimal places once the values settle.' : 'Keep iterating until the values stop changing in the first two decimal places.', true);
    });
    ctx.body.querySelectorAll('[data-x0]').forEach(b => (b.onclick = () => { St.x0 = Number(b.dataset.x0); ctx.feedback(''); ctx.save(); render(); }));
    ctx.body.querySelectorAll('[data-same]').forEach(b => (b.onclick = () => { if (b.dataset.same === '1') { St.ok = true; ctx.save(); render(); } else ctx.feedback(`Look at the table: the values still settle at ${ROOT4.toFixed(2)}.`, true); }));
  };
  render();
}

/* ───────── 5. Forming an equation from a triangle ───────── */
const EQS = [{ t: 'x + 2x + x + 20 = 180', ok: true }, { t: 'x + 2x + x + 20 = 360', why: 'Angles in a triangle add up to 180°; 360° is for a quadrilateral or around a point.' }, { t: 'x + 2x = x + 20', why: 'The angles are not equal to each other: they add up to 180°.' }, { t: '4x = 180', why: 'Collect the numbers too: x + 2x + x + 20 = 4x + 20.' }];
function mountEquationBuilder(ctx) {
  const w = ctx.w; w.eq ??= { ok: false }; w.sv ??= { raw: '', ok: false }; w.an ??= { raw: '', ok: false };
  const E = w.eq, Sv = w.sv, An = w.an;
  const tri = labels => triSVG({ labels });
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!E.ok) {
      ctx.setTitle('Which equation fits the triangle?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · FORM ${progressDots(3, 0, 0)}</div>${tri(['x°', '2x°', '(x + 20)°'])}`;
      ctx.body.innerHTML = `<p>Choose the equation that uses a fact about the triangle.</p><div class="mtiles mtiles-wide">${EQS.map((e, i) => `<button class="choice mtile mtile-line" data-eq="${i}">${M(e.t)}</button>`).join('')}</div>`;
    } else if (!Sv.ok) {
      ctx.setTitle('Solve the equation.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · SOLVE ${progressDots(3, 1, 1)}</div>${tri(['x°', '2x°', '(x + 20)°'])}<div class="mwork"><div>x + 2x + x + 20 = 180</div><div>4x + 20 = 180</div></div>`;
      ctx.body.innerHTML = `<div class="mrow-in"><label class="field-label" for="sx">x =</label><input class="lab-input mnum" id="sx" inputmode="numeric" autocomplete="off" value="${esc(Sv.raw)}"><button class="primary mbtn" data-act="sx">Check</button></div>`;
    } else if (!An.ok) {
      ctx.setTitle('Answer the question that was asked.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · INTERPRET ${progressDots(3, 2, 2)}</div>${tri(['40°', '80°', '60°'])}<p class="mcap">x = 40</p>`;
      ctx.body.innerHTML = `<p>The question asks: what is the size of the <strong>largest angle</strong>?</p><div class="mrow-in"><input class="lab-input mnum" id="la" inputmode="numeric" autocomplete="off" value="${esc(An.raw)}"><span>°</span><button class="primary mbtn" data-act="la">Check</button></div>`;
    } else return done(ctx, tri(['40°', '80°', '60°']), 'Name the unknown, write every quantity in terms of it, and use a fact (angles in a triangle add up to 180°) to make an equation. Solving gives x = 40, but x is not always the answer: substitute back to find what the question asks for, here the largest angle 2x = 80°. Check: 40 + 80 + 60 = 180.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-eq]').forEach(b => (b.onclick = () => { const e = EQS[Number(b.dataset.eq)]; if (e.ok) { E.ok = true; ctx.save(); render(); ctx.feedback('Angles in a triangle add up to 180° ✓'); } else ctx.feedback(e.why, true); }));
    const sx = ctx.body.querySelector('#sx'); if (sx) sx.oninput = () => { Sv.raw = sx.value; ctx.save(); };
    ctx.body.querySelector('[data-act="sx"]')?.addEventListener('click', () => {
      const v = vNum(Sv.raw);
      if (v === 40) { Sv.ok = true; ctx.save(); render(); ctx.feedback('4x = 160, so x = 40 ✓'); return; }
      ctx.feedback(v === 50 ? 'Subtract 20 first: 4x = 160.' : v === 45 ? 'Subtract the 20 before dividing: 4x = 160.' : 'Subtract 20 from both sides, then divide by 4.', true);
    });
    const la = ctx.body.querySelector('#la'); if (la) la.oninput = () => { An.raw = la.value; ctx.save(); };
    ctx.body.querySelector('[data-act="la"]')?.addEventListener('click', () => {
      const v = vNum(An.raw);
      if (v === 80) { An.ok = true; ctx.save(); render(); return; }
      ctx.feedback(v === 40 ? 'x = 40 is the smallest angle. Substitute x into each expression.' : v === 60 ? '60° is x + 20. Which angle is biggest?' : 'The angles are x = 40°, 2x = 80° and x + 20 = 60°.', true);
    });
  };
  render();
}

export const MODELS7 = { 'function-machine': mountFunctionMachine, 'fraction-cancel': mountFractionCancel, 'proof-builder': mountProofBuilder, 'iteration-stepper': mountIteration, 'equation-builder': mountEquationBuilder };
