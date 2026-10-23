// Visual models and investigations for Algebra batch 2: sequences, inequalities, quadratic and
// simultaneous equations. visual5() draws worked-example diagrams; MODELS5 holds the investigations.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { F, eq, num, parseNumber } from './frac.js?v=20261023-maths-r9';
import { C, btn, progressDots } from './models-number.js?v=20261023-maths-r9';
import { markAlgebra, equivalent, evalAt, algebraHint } from './algebra.js?v=20261023-maths-r9';

const W = 600;
const M = s => mathHTML(s);
const vOf = raw => { const p = parseNumber(raw); return p ? p.value : null; };

/* ───────── static visuals ───────── */
function sticksSVG({ n = [1, 2, 3] }) {
  const unit = 26, gap = 46;
  let x = 30, s = '';
  for (const k of n) {
    for (let i = 0; i < k; i++) {
      const x0 = x + i * unit;
      s += `<rect x="${x0}" y="40" width="${unit}" height="${unit}" fill="none" stroke="${C.coral}" stroke-width="3"/>`;
    }
    s += `<text x="${x + (k * unit) / 2}" y="94" text-anchor="middle" fill="${C.muted}" font-size="13">pattern ${k}: ${3 * k + 1} sticks</text>`;
    x += k * unit + gap;
  }
  return `<svg viewBox="0 0 ${W} 110" class="mviz" role="img" aria-label="Matchstick squares in a row: ${n.map(k => `pattern ${k} uses ${3 * k + 1} sticks`).join(', ')}">${s}</svg>`;
}
function dotsTri({ n = [1, 2, 3, 4] }) {
  let x = 40, s = '';
  for (const k of n) {
    for (let row = 0; row < k; row++) for (let c = 0; c <= row; c++) s += `<circle cx="${x + c * 16 - row * 8 + (k * 16) / 2}" cy="${20 + row * 16}" r="5" fill="${C.coral}"/>`;
    s += `<text x="${x + (k * 16) / 2}" y="${36 + k * 16}" text-anchor="middle" fill="${C.muted}" font-size="13">${(k * (k + 1)) / 2}</text>`;
    x += k * 16 + 50;
  }
  return `<svg viewBox="0 0 ${W} 120" class="mviz" role="img" aria-label="Triangular dot patterns with ${n.map(k => (k * (k + 1)) / 2).join(', ')} dots">${s}</svg>`;
}
function diffTable({ terms, second = false }) {
  const d1 = terms.slice(1).map((t, i) => t - terms[i]), d2 = d1.slice(1).map((t, i) => t - d1[i]);
  const row = (label, vals, off) => `<div class="mdiff-row"><span>${label}</span>${vals.map((v, i) => `<b style="--o:${off + i * 2}">${num(v)}</b>`).join('')}</div>`;
  return `<div class="mdiff">${row('terms', terms, 0)}${row('1st difference', d1, 1)}${second ? row('2nd difference', d2, 2) : ''}</div>`;
}
/** Number line for an inequality set: [{lo, loIn, hi, hiIn}] with numbers or null. */
function numLine({ set = [], min = -5, max = 5, marks = [] }) {
  const x0 = 50, x1 = 550, X = v => x0 + ((v - min) / (max - min)) * (x1 - x0), y = 70;
  let s = `<line x1="${x0 - 20}" y1="${y}" x2="${x1 + 20}" y2="${y}" stroke="${C.muted}" stroke-width="2"/>`;
  for (let v = min; v <= max; v++) s += `<line x1="${X(v)}" y1="${y - 6}" x2="${X(v)}" y2="${y + 6}" stroke="${C.muted}"/><text x="${X(v)}" y="${y + 26}" text-anchor="middle" fill="${C.muted}" font-size="13">${num(v)}</text>`;
  for (const iv of set) {
    const a = iv.lo === null ? x0 - 20 : X(iv.lo), b = iv.hi === null ? x1 + 20 : X(iv.hi);
    s += `<line x1="${a}" y1="${y - 22}" x2="${b}" y2="${y - 22}" stroke="${C.coral}" stroke-width="4"/>`;
    if (iv.lo === null) s += `<path d="M${a} ${y - 22} l10 -7 v14 z" fill="${C.coral}"/>`;
    if (iv.hi === null) s += `<path d="M${b} ${y - 22} l-10 -7 v14 z" fill="${C.coral}"/>`;
    for (const [v, inc] of [[iv.lo, iv.loIn], [iv.hi, iv.hiIn]]) if (v !== null) s += `<circle cx="${X(v)}" cy="${y - 22}" r="7" fill="${inc ? C.coral : C.navy}" stroke="${C.coral}" stroke-width="3"/>`;
  }
  for (const [v, ok] of marks) s += `<circle cx="${X(v)}" cy="${y}" r="6" fill="${ok ? C.green : '#ed8b7860'}" stroke="${C.cream}"/>`;
  const txt = set.map(iv => (iv.lo !== null && iv.hi !== null ? `from ${iv.lo} ${iv.loIn ? 'included' : 'not included'} to ${iv.hi} ${iv.hiIn ? 'included' : 'not included'}` : iv.lo !== null ? `greater than ${iv.loIn ? 'or equal to ' : ''}${iv.lo}` : `less than ${iv.hiIn ? 'or equal to ' : ''}${iv.hi}`)).join(' or ');
  return `<svg viewBox="0 0 ${W} 110" class="mviz" role="img" aria-label="Number line: ${txt || 'no region marked'}. Filled circle includes the value; open circle does not.">${s}</svg>`;
}
let clipN = 0;
/** Axes with curves/lines given as expressions in x, points and shaded x-ranges. */
function graphSVG({ fns = [], points = [], xr = [-5, 5], yr = [-8, 8], shade = [], label = '' }) {
  const L = 60, R = 540, T = 14, B = 286, X = x => L + ((x - xr[0]) / (xr[1] - xr[0])) * (R - L), Y = y => B - ((y - yr[0]) / (yr[1] - yr[0])) * (B - T);
  let s = '';
  for (let x = xr[0]; x <= xr[1]; x++) s += `<line x1="${X(x)}" y1="${T}" x2="${X(x)}" y2="${B}" stroke="#b7c8d61f"/>`;
  for (let y = Math.ceil(yr[0]); y <= yr[1]; y += yr[1] - yr[0] > 20 ? 5 : 2) s += `<line x1="${L}" y1="${Y(y)}" x2="${R}" y2="${Y(y)}" stroke="#b7c8d61f"/>`;
  for (const [a, b] of shade) s += `<rect x="${X(Math.max(a, xr[0]))}" y="${T}" width="${X(Math.min(b, xr[1])) - X(Math.max(a, xr[0]))}" height="${B - T}" fill="#a8d5b522"/>`;
  s += `<line x1="${L}" y1="${Y(0)}" x2="${R}" y2="${Y(0)}" stroke="${C.muted}" stroke-width="1.5"/><line x1="${X(0)}" y1="${T}" x2="${X(0)}" y2="${B}" stroke="${C.muted}" stroke-width="1.5"/>`;
  for (let x = xr[0]; x <= xr[1]; x++) if (x) s += `<text x="${X(x)}" y="${Y(0) + 16}" text-anchor="middle" fill="${C.muted}" font-size="11">${num(x)}</text>`;
  const cid = 'mclip' + (++clipN);
  s += `<clipPath id="${cid}"><rect x="${L}" y="${T}" width="${R - L}" height="${B - T}"/></clipPath>`;
  fns.forEach((f, k) => {
    const pts = [];
    for (let i = 0; i <= 200; i++) { const x = xr[0] + ((xr[1] - xr[0]) * i) / 200, y = evalAt(f.expr, { x }); if (Number.isFinite(y) && y >= yr[0] - 2 && y <= yr[1] + 2) pts.push(`${X(x).toFixed(1)},${Y(Math.max(yr[0] - 2, Math.min(yr[1] + 2, y))).toFixed(1)}`); else pts.push(null); }
    const d = pts.reduce((acc, p) => (p ? acc + (acc.endsWith('|') || !acc ? 'M' : 'L') + p : acc + '|'), '').replace(/\|/g, ' ');
    s += `<path d="${d}" fill="none" stroke="${k ? C.green : C.coral}" stroke-width="3" clip-path="url(#${cid})"/>`;
    if (f.label) s += `<text x="${R - 4}" y="${T + 16 + k * 18}" text-anchor="end" fill="${k ? C.green : C.coral}" font-size="13">${esc(f.label)}</text>`;
  });
  for (const [x, y, lab] of points) s += `<circle cx="${X(x)}" cy="${Y(y)}" r="6" fill="${C.cream}" stroke="${C.navy}" stroke-width="2"/>${lab ? `<text x="${X(x) + 9}" y="${Y(y) - 9}" fill="${C.cream}" font-size="13">${esc(lab)}</text>` : ''}`;
  return `<svg viewBox="0 0 ${W} 300" class="mviz mgraph" role="img" aria-label="${esc(label || 'Graph of ' + fns.map(f => f.label || f.expr).join(' and '))}${points.length ? '; marked points ' + points.map(p => `(${p[0]}, ${p[1]})`).join(', ') : ''}">${s}</svg>`;
}
export function visual5(v) {
  if (!v) return '';
  const cap = v.caption ? `<p class="mcap">${M(v.caption)}</p>` : '';
  switch (v.kind) {
    case 'sticks': return sticksSVG(v) + cap;
    case 'dots-tri': return dotsTri(v) + cap;
    case 'diffs': return diffTable(v) + cap;
    case 'numline': return numLine(v) + cap;
    case 'graph': return graphSVG(v) + cap;
    default: return '';
  }
}

const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${text}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
const input = (id, value, label, mode = 'text') => `<label class="field-label" for="${id}">${label}</label><input class="lab-input mtext" id="${id}" inputmode="${mode}" autocomplete="off" spellcheck="false" value="${esc(value || '')}">`;

/* ───────── 1. Matchstick pattern → nth term ───────── */
function mountSeqPattern(ctx) {
  const w = ctx.w; w.pat ??= { step: 0, diff: null, nth: '', p50: '', can: null };
  const P = w.pat;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (P.step >= 4) return done(ctx, sticksSVG({ n: [1, 2, 3] }) + diffTable({ terms: [4, 7, 10, 13, 16] }), 'Each new square adds 3 sticks, so the nth term starts 3n. Pattern 1 has 4 sticks, one more than 3 × 1, so the nth term is 3n + 1. The nth term answers questions without drawing every pattern: pattern 50 uses 3 × 50 + 1 = 151 sticks, and 200 sticks is impossible because 3n + 1 = 200 gives n = 66⅓.');
    ctx.setTitle(['How many sticks are added each time?', 'Write the nth term.', 'Use the nth term.', 'Could a pattern use exactly 200 sticks?'][P.step]);
    ctx.panel.innerHTML = `<div class="mpanel-k">MATCHSTICK SQUARES ${progressDots(4, P.step, P.step)}</div>${sticksSVG({ n: [1, 2, 3] })}${P.step >= 1 ? diffTable({ terms: [4, 7, 10, 13] }) : ''}`;
    if (P.step === 0) ctx.body.innerHTML = `<p>Patterns 1, 2 and 3 use 4, 7 and 10 sticks. How many sticks does each new pattern add?</p><div class="choices">${[1, 3, 4].map(k => `<button class="choice" data-diff="${k}">${k}</button>`).join('')}</div>`;
    else if (P.step === 1) ctx.body.innerHTML = `<p>Write an expression for the number of sticks in pattern n.</p>${input('nthAns', P.nth, 'Sticks in pattern n')}<button class="primary mbtn" data-act="nth">Check</button>`;
    else if (P.step === 2) ctx.body.innerHTML = `<p>How many sticks are in pattern 50?</p>${input('p50', P.p50, 'Sticks', 'numeric')}<button class="primary mbtn" data-act="p50">Check</button>`;
    else ctx.body.innerHTML = `<p>Solve 3n + 1 = 200 to decide.</p><div class="choices"><button class="choice" data-can="yes">Yes</button><button class="choice" data-can="no">No</button></div>`;
    bind();
  };
  const next = () => { P.step++; ctx.save(); render(); };
  const bind = () => {
    ctx.body.querySelectorAll('[data-diff]').forEach(b => (b.onclick = () => { if (b.dataset.diff !== '3') { ctx.feedback(b.dataset.diff === '4' ? 'The first pattern has 4 sticks, but each new square shares a side with the one before, so it adds 3.' : 'Count the difference: 7 − 4 = 3.', true); return; } ctx.feedback('Each new square adds 3 sticks ✓'); next(); }));
    const i1 = ctx.body.querySelector('#nthAns'); if (i1) i1.oninput = () => { P.nth = i1.value; ctx.save(); };
    ctx.body.querySelector('[data-act="nth"]')?.addEventListener('click', () => {
      const res = markAlgebra({ expr: '3n+1', form: 'any', vars: ['n'] }, P.nth);
      if (res.status === 'invalid') { ctx.feedback(res.code === 'empty' ? 'Write an expression using n.' : res.hint || algebraHint(res.code), true); return; }
      if (res.status !== 'correct') { ctx.feedback(equivalent(P.nth, 'n+3') ? '"+3 each time" goes with n: 3n, not n + 3. Check pattern 2: n + 3 = 5, but it has 7 sticks.' : equivalent(P.nth, '3n+4') ? 'Check n = 1: 3 × 1 + 4 = 7, but pattern 1 has 4 sticks. Use the zero term, 4 − 3 = 1.' : 'Check your expression with n = 1, 2 and 3: it should give 4, 7 and 10.', true); return; }
      ctx.feedback('3n + 1 ✓'); next();
    });
    const i2 = ctx.body.querySelector('#p50'); if (i2) i2.oninput = () => { P.p50 = i2.value; ctx.save(); };
    ctx.body.querySelector('[data-act="p50"]')?.addEventListener('click', () => {
      const v = vOf(P.p50);
      if (!v) { ctx.feedback('Enter a number.', true); return; }
      if (!eq(v, F(151))) { ctx.feedback(eq(v, F(150)) ? 'Remember the + 1: 3 × 50 + 1.' : eq(v, F(200)) ? '4 × 50 counts every side of every square, but neighbours share a side. Use 3n + 1.' : 'Substitute n = 50 into 3n + 1.', true); return; }
      ctx.feedback('151 ✓'); next();
    });
    ctx.body.querySelectorAll('[data-can]').forEach(b => (b.onclick = () => { if (b.dataset.can === 'yes') { ctx.feedback('3n + 1 = 200 gives 3n = 199, n = 66⅓. Pattern numbers are whole numbers, so no pattern uses exactly 200.', true); return; } next(); }));
  };
  render();
}

/* ───────── 2. Inequalities on a number line ───────── */
const LINE_TASKS = [
  { text: 'x > 2', want: { lo: 2, loIn: false, hi: null, hiIn: false } },
  { text: 'x ≤ −1', want: { lo: null, loIn: false, hi: -1, hiIn: true } },
  { text: '−2 < x ≤ 3', want: { lo: -2, loIn: false, hi: 3, hiIn: true } },
];
const TEST_VALUES = [-5, -4, -3, -2, -1, 0, 2];
function mountIneqLine(ctx) {
  const w = ctx.w; w.line ??= { task: 0, iv: { lo: 0, loIn: false, hi: null, hiIn: false }, done: [] }; w.flip ??= { picked: [], tested: false, done: false };
  const Ln = w.line, Fl = w.flip;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (Ln.done.length < LINE_TASKS.length) {
      const T = LINE_TASKS[Ln.task], iv = Ln.iv;
      ctx.setTitle(`Show ${T.text} on the number line.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · NUMBER LINE ${progressDots(3, Ln.done.length, Ln.task)}</div><p class="mexpr">${M(T.text)}</p>${numLine({ set: [iv] })}`;
      const end = (key, label) => iv[key] === null ? `<div class="mrow"><span>${label}</span>${btn(`data-end="${key}" data-set="0"`, 'Add an end')}</div>` : `<div class="mrow"><span>${label}: ${num(iv[key])}</span><div class="mstepper">${btn(`data-move="${key},-1"`, '−1')}${btn(`data-move="${key},1"`, '+1')}</div>${btn(`data-circle="${key}"`, iv[key + 'In'] ? 'Filled ●' : 'Open ○')}${btn(`data-end="${key}" data-set="null"`, 'No end (arrow)')}</div>`;
      ctx.body.innerHTML = `<p>Set each end of the region. A filled circle ● includes the value; an open circle ○ does not. An end with no value continues as an arrow.</p>${end('lo', 'Left end')}${end('hi', 'Right end')}<button class="primary mbtn" data-act="line">Check</button>`;
    } else if (!Fl.done) {
      ctx.setTitle('Solve −2x < 6.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · DIVIDING BY A NEGATIVE</div><p class="mexpr">${M('−2x < 6')}</p>${numLine({ set: Fl.tested ? [{ lo: -3, loIn: false, hi: null, hiIn: false }] : [], marks: Fl.picked.map(v => [v, -2 * v < 6]) })}`;
      ctx.body.innerHTML = Fl.tested
        ? `<p>Dividing both sides by −2 would give x < −3, but the values you tested show the opposite. Which inequality is the solution?</p><div class="choices">${['x < −3', 'x > −3'].map(o => `<button class="choice" data-sol="${o}">${M(o)}</button>`).join('')}</div>`
        : `<p>Which of these values make −2x < 6 true? Select every one that works, then check.</p><div class="mtiles">${TEST_VALUES.map(v => `<button class="choice mtile ${Fl.picked.includes(v) ? 'selected' : ''}" data-test="${v}" aria-pressed="${Fl.picked.includes(v)}">${num(v)}</button>`).join('')}</div><button class="primary mbtn" data-act="test">Check my values</button>`;
    } else return done(ctx, numLine({ set: [{ lo: -3, loIn: false, hi: null, hiIn: false }] }), 'Solve inequalities like equations, but multiplying or dividing both sides by a negative number reverses the sign: −2x < 6 gives x > −3. Test a value to check: x = 0 gives 0 < 6, true. On a number line, ● includes the boundary (≤, ≥) and ○ leaves it out (<, >).');
    bind();
  };
  const bind = () => {
    const iv = Ln.iv;
    ctx.body.querySelectorAll('[data-move]').forEach(b => (b.onclick = () => { const [k, d] = b.dataset.move.split(','); iv[k] = Math.max(-5, Math.min(5, iv[k] + Number(d))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-move="${b.dataset.move}"]`)?.focus(); }));
    ctx.body.querySelectorAll('[data-circle]').forEach(b => (b.onclick = () => { iv[b.dataset.circle + 'In'] = !iv[b.dataset.circle + 'In']; ctx.save(); render(); }));
    ctx.body.querySelectorAll('[data-end]').forEach(b => (b.onclick = () => { const k = b.dataset.end; iv[k] = b.dataset.set === 'null' ? null : k === 'lo' ? (iv.hi ?? 1) - 1 : (iv.lo ?? -1) + 1; iv[k + 'In'] = false; ctx.save(); render(); }));
    ctx.body.querySelector('[data-act="line"]')?.addEventListener('click', () => {
      const T = LINE_TASKS[Ln.task], want = T.want;
      if (iv.lo === null && iv.hi === null) { ctx.feedback('Give the region at least one end.', true); return; }
      const endsOK = iv.lo === want.lo && iv.hi === want.hi;
      if (!endsOK) {
        const dirWrong = (want.hi === null && iv.lo === null && iv.hi === want.lo) || (want.lo === null && iv.hi === null && iv.lo === want.hi);
        ctx.feedback(dirWrong ? `Wrong direction. ${T.text.includes('>') && !T.text.includes('<') ? 'Greater than means to the right.' : 'Less than means to the left.'}` : `The boundary ${want.lo !== null && want.hi !== null ? 'values are' : 'value is'} ${[want.lo, want.hi].filter(v => v !== null).map(num).join(' and ')}.`, true);
        return;
      }
      if ((want.lo !== null && iv.loIn !== want.loIn) || (want.hi !== null && iv.hiIn !== want.hiIn)) { ctx.feedback('Check the circles: ≤ and ≥ include the value (filled ●); < and > do not (open ○).', true); return; }
      if (!Ln.done.includes(Ln.task)) Ln.done.push(Ln.task);
      ctx.feedback(`${M(T.text)} ✓`);
      ctx.save();
      setTimeout(() => { if (Ln.task < LINE_TASKS.length - 1) { Ln.task++; Ln.iv = { lo: 0, loIn: false, hi: null, hiIn: false }; } ctx.save(); render(); }, 900);
    });
    ctx.body.querySelectorAll('[data-test]').forEach(b => (b.onclick = () => { const v = Number(b.dataset.test); Fl.picked = Fl.picked.includes(v) ? Fl.picked.filter(x => x !== v) : [...Fl.picked, v]; ctx.save(); render(); }));
    ctx.body.querySelector('[data-act="test"]')?.addEventListener('click', () => {
      const right = TEST_VALUES.filter(v => -2 * v < 6);
      const wrong = Fl.picked.filter(v => !right.includes(v)), missed = right.filter(v => !Fl.picked.includes(v));
      if (wrong.length || missed.length) { ctx.feedback(wrong.length ? `Substitute: x = ${num(wrong[0])} gives −2 × ${wrong[0] < 0 ? '(' + num(wrong[0]) + ')' : wrong[0]} = ${num(-2 * wrong[0])}, which is not less than 6.` : `x = ${num(missed[0])} works too: −2 × ${missed[0] < 0 ? '(' + num(missed[0]) + ')' : missed[0]} = ${num(-2 * missed[0])}, which is less than 6.`, true); return; }
      Fl.tested = true; ctx.feedback('The values that work are all greater than −3.'); ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-sol]').forEach(b => (b.onclick = () => { if (b.dataset.sol === 'x < −3') { ctx.feedback('x = −4 is less than −3, but −2 × (−4) = 8, which is not less than 6. Dividing by −2 reverses the sign.', true); return; } Fl.done = true; ctx.save(); render(); }));
  };
  render();
}

/* ───────── 3. Roots on a graph and the zero rule ───────── */
const QUAD = 'x^2 + x - 6';
const ZERO_CHOICES = [
  ['Rearrange to x² − 3x − 10 = 0, then factorise', null],
  ['Set each factor equal to 10: x = 10 or x − 3 = 10', 'Check: x = 10 gives 10 × 7 = 70, not 10. Setting each factor to a value only works when the product is 0.'],
  ['Divide both sides by x', 'Dividing by x leaves x − 3 = 10/x, which still has x on both sides; it does not solve the equation.'],
];
function mountQuadRoots(ctx) {
  const w = ctx.w; w.roots ??= { x: 0, found: [] }; w.zero ??= { step: 0, done: false };
  const Rt = w.roots, Z = w.zero;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (Rt.found.length < 2) {
      const y = evalAt(QUAD, { x: Rt.x });
      ctx.setTitle('Where does y = x² + x − 6 cross the x-axis?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · ROOTS ${progressDots(2, Rt.found.length, Rt.found.length)}</div>${graphSVG({ fns: [{ expr: QUAD, label: 'y = x² + x − 6' }], points: [[Rt.x, y, `(${num(Rt.x)}, ${num(y)})`], ...Rt.found.map(x => [x, 0, ''])], yr: [-8, 8] })}`;
      ctx.body.innerHTML = `<p>Move along the curve. A root is an x value where y = 0: mark both.</p><div class="mrow"><span>x</span><div class="mstepper">${btn('data-qx="-1"', '−1')}<output>${num(Rt.x)}</output>${btn('data-qx="1"', '+1')}</div></div><p>y = ${num(y)}</p>${btn('data-act="mark"', 'Mark this as a root')}`;
    } else if (!Z.done) {
      ctx.setTitle('Solve x(x − 3) = 10.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · WHY "= 0" MATTERS</div>${graphSVG({ fns: [{ expr: QUAD, label: 'y = (x + 3)(x − 2)' }], points: [[-3, 0, 'x = −3'], [2, 0, 'x = 2']], yr: [-8, 8] })}<p class="mcap">${M('(x + 3)(x − 2) = 0 because one bracket is 0.')}</p>`;
      ctx.body.innerHTML = `<p>The roots came from (x + 3)(x − 2) = 0: if a product is 0, one factor is 0. Which is the right first step for x(x − 3) = 10?</p><div class="choices">${ZERO_CHOICES.map(([t], i) => `<button class="choice" data-zero="${i}">${esc(t)}</button>`).join('')}</div>`;
    } else return done(ctx, graphSVG({ fns: [{ expr: QUAD, label: 'y = x² + x − 6' }], points: [[-3, 0, '−3'], [2, 0, '2']], yr: [-8, 8] }), 'The solutions of x² + x − 6 = 0 are where the graph crosses the x-axis: x = −3 and x = 2, matching (x + 3)(x − 2) = 0. Factorising only solves the equation when one side is 0, so rearrange first: x(x − 3) = 10 becomes x² − 3x − 10 = 0, (x − 5)(x + 2) = 0, x = 5 or x = −2.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-qx]').forEach(b => (b.onclick = () => { Rt.x = Math.max(-5, Math.min(5, Rt.x + Number(b.dataset.qx))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-qx="${b.dataset.qx}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="mark"]')?.addEventListener('click', () => {
      const y = evalAt(QUAD, { x: Rt.x });
      if (y !== 0) { ctx.feedback(`At x = ${num(Rt.x)}, y = ${num(y)}, not 0. A root is where the curve meets the x-axis.`, true); return; }
      if (Rt.found.includes(Rt.x)) { ctx.feedback('You have marked that root. There is another one.', true); return; }
      Rt.found.push(Rt.x); ctx.feedback(Rt.found.length === 2 ? 'Both roots: x = −3 and x = 2 ✓' : `x = ${num(Rt.x)} is a root. Find the other.`); ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-zero]').forEach(b => (b.onclick = () => { const why = ZERO_CHOICES[Number(b.dataset.zero)][1]; if (why) { ctx.feedback(why, true); return; } Z.done = true; ctx.save(); render(); }));
  };
  render();
}

/* ───────── 4. Elimination, then the intersection ───────── */
function mountSimGraph(ctx) {
  const w = ctx.w; w.elim ??= { step: 0, y: '' }; w.meet ??= { x: 0, y: 0, done: false };
  const E = w.elim, Mt = w.meet;
  const lines = [{ expr: '11 - 2x', label: '2x + y = 11' }, { expr: 'x - 1', label: 'x − y = 1' }];
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (E.step < 3) {
      ctx.setTitle('Solve 2x + y = 11 and x − y = 1.');
      const rows = ['2x + y = 11', 'x − y = 1', ...(E.step >= 1 ? ['3x = 12, so x = 4'] : []), ...(E.step >= 2 ? ['4 − y = 1'] : [])];
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · ELIMINATION ${progressDots(3, E.step, E.step)}</div><ol class="mcollapse">${rows.map(r => `<li>${M(r)}</li>`).join('')}</ol>`;
      if (E.step === 0) ctx.body.innerHTML = '<p>The y terms are +y and −y. Which step removes y?</p><div class="choices"><button class="choice" data-el="add">Add the equations</button><button class="choice" data-el="sub">Subtract the equations</button></div>';
      else if (E.step === 1) ctx.body.innerHTML = '<p>x = 4. Which equation could you substitute it into to find y?</p><div class="choices"><button class="choice" data-sub="either">Either equation</button><button class="choice" data-sub="new">Only 3x = 12</button></div>';
      else ctx.body.innerHTML = `<p>Substitute x = 4 into x − y = 1 and find y.</p>${input('yAns', E.y, 'y =', 'numeric')}<button class="primary mbtn" data-act="y">Check</button>`;
    } else if (!Mt.done) {
      ctx.setTitle('Find where the lines cross.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · INTERSECTION</div>${graphSVG({ fns: lines, points: [[Mt.x, Mt.y, `(${num(Mt.x)}, ${num(Mt.y)})`]], xr: [-2, 7], yr: [-4, 12] })}`;
      ctx.body.innerHTML = `<p>Move the point to where the two lines cross.</p><div class="mrow"><span>x</span><div class="mstepper">${btn('data-mx="-1"', '−1')}<output>${num(Mt.x)}</output>${btn('data-mx="1"', '+1')}</div></div><div class="mrow"><span>y</span><div class="mstepper">${btn('data-my="-1"', '−1')}<output>${num(Mt.y)}</output>${btn('data-my="1"', '+1')}</div></div><button class="primary mbtn" data-act="meet">Check</button>`;
    } else return done(ctx, graphSVG({ fns: lines, points: [[4, 3, '(4, 3)']], xr: [-2, 7], yr: [-4, 12] }), 'Adding the equations removed y because +y and −y cancel; then substituting x = 4 gave y = 3. The solution (4, 3) is the one point on both lines, which is why simultaneous equations can be solved graphically too. Substitute into the other equation to check: 2 × 4 + 3 = 11 ✓.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-el]').forEach(b => (b.onclick = () => { if (b.dataset.el === 'sub') { ctx.feedback('Subtracting gives x + 2y = 10: y is still there. +y − (−y) = 2y. Adding makes +y + (−y) = 0.', true); return; } E.step = 1; ctx.feedback('Adding: 3x = 12 ✓'); ctx.save(); render(); }));
    ctx.body.querySelectorAll('[data-sub]').forEach(b => (b.onclick = () => { if (b.dataset.sub === 'new') { ctx.feedback('3x = 12 has no y in it. Substitute into either of the original equations.', true); return; } E.step = 2; ctx.save(); render(); }));
    const yi = ctx.body.querySelector('#yAns'); if (yi) yi.oninput = () => { E.y = yi.value; ctx.save(); };
    ctx.body.querySelector('[data-act="y"]')?.addEventListener('click', () => { const v = vOf(E.y); if (!v) { ctx.feedback('Enter a number.', true); return; } if (!eq(v, F(3))) { ctx.feedback(eq(v, F(-3)) ? '4 − y = 1, so y = 3: subtract 1 from 4.' : '4 − y = 1: what must y be?', true); return; } E.step = 3; ctx.feedback('y = 3 ✓'); ctx.save(); render(); });
    ctx.body.querySelectorAll('[data-mx],[data-my]').forEach(b => (b.onclick = () => { if (b.dataset.mx) Mt.x = Math.max(-2, Math.min(7, Mt.x + Number(b.dataset.mx))); else Mt.y = Math.max(-4, Math.min(12, Mt.y + Number(b.dataset.my))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(b.dataset.mx ? `[data-mx="${b.dataset.mx}"]` : `[data-my="${b.dataset.my}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="meet"]')?.addEventListener('click', () => {
      const on1 = 2 * Mt.x + Mt.y === 11, on2 = Mt.x - Mt.y === 1;
      if (!(on1 && on2)) { ctx.feedback(on1 ? 'That point is on 2x + y = 11 but not on x − y = 1.' : on2 ? 'That point is on x − y = 1 but not on 2x + y = 11.' : 'That point is on neither line.', true); return; }
      Mt.done = true; ctx.save(); render();
    });
  };
  render();
}

export const MODELS5 = { 'seq-pattern': mountSeqPattern, 'ineq-line': mountIneqLine, 'quad-roots': mountQuadRoots, 'sim-graph': mountSimGraph };
export { numLine, graphSVG };
