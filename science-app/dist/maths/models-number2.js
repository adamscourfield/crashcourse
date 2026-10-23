// Visual models for Number batch 2: static worked-example diagrams (visual2) and five
// investigations (MODELS2). SVG/HTML only, keyboard operable, colour never the only cue.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, num, parseNumber, decText } from './frac.js?v=20261023-maths-r9';
import { C, btn, progressDots } from './models-number.js?v=20261023-maths-r9';

const W = 600;
const trim = v => String(Math.round(v * 1e6) / 1e6).replace('-', '−');
const dtx = f => decText(f) ?? `${f.n}/${f.d}`;
const vOf = raw => { const p = parseNumber(raw); return p ? p.value : null; };

/* ───────── static visuals ───────── */

function decLine({ lo, hi, step, value = null, mark = null, interval = null, loIn = true, hiIn = false, labels = null, points = [], h = 150 }) {
  const pad = 40, x = v => pad + ((v - lo) / (hi - lo)) * (W - 2 * pad);
  let s = `<line x1="${pad - 10}" y1="90" x2="${W - pad + 10}" y2="90" stroke="${C.muted}" stroke-width="2"/>`;
  const n = Math.round((hi - lo) / step);
  for (let i = 0; i <= n; i++) {
    const v = lo + i * step, major = labels ? labels.includes(Math.round(v * 1e6) / 1e6) : i % 2 === 0 || n <= 6;
    s += `<line x1="${x(v)}" y1="${major ? 80 : 84}" x2="${x(v)}" y2="${major ? 100 : 96}" stroke="${C.muted}" stroke-width="1.5"/>`;
    if (major) s += `<text x="${x(v)}" y="122" text-anchor="middle" fill="${C.muted}" font-size="13">${trim(v)}</text>`;
  }
  if (interval) {
    const [a, b] = interval;
    s += `<line x1="${x(a)}" y1="90" x2="${x(b)}" y2="90" stroke="${C.coral}" stroke-width="7" stroke-linecap="butt"/>`;
    s += `<circle cx="${x(a)}" cy="90" r="8" fill="${loIn ? C.coral : C.navy}" stroke="${C.coral}" stroke-width="3"/><circle cx="${x(b)}" cy="90" r="8" fill="${hiIn ? C.coral : C.navy}" stroke="${C.coral}" stroke-width="3"/>`;
    s += `<text x="${x(a)}" y="66" text-anchor="middle" fill="${C.coral}" font-size="13" font-weight="600">${trim(a)} ${loIn ? '●' : '○'}</text><text x="${x(b)}" y="66" text-anchor="middle" fill="${C.coral}" font-size="13" font-weight="600">${hiIn ? '●' : '○'} ${trim(b)}</text>`;
  }
  points.forEach(([label, v], i) => { s += `<circle cx="${x(v)}" cy="90" r="6" fill="${C.cream}"/><text x="${x(v)}" y="${i % 2 ? 140 : 56}" text-anchor="middle" fill="${C.ink}" font-size="14" font-weight="600">${esc(label.replace(/\{(\d+)\/(\d+)\}/g, '$1/$2'))}</text>`; });
  if (value !== null) s += `<path d="M${x(value)} 46 l-7 -12 h14z" fill="${C.cream}"/><text x="${x(value)}" y="28" text-anchor="middle" fill="${C.cream}" font-size="14" font-weight="700">${trim(value)}</text><line x1="${x(value)}" y1="48" x2="${x(value)}" y2="90" stroke="${C.cream}" stroke-dasharray="3 3"/>`;
  if (mark !== null) s += `<circle cx="${x(mark)}" cy="90" r="9" fill="none" stroke="${C.coral}" stroke-width="3"/>`;
  const desc = `Number line from ${trim(lo)} to ${trim(hi)}${value !== null ? `; value ${trim(value)}` : ''}${mark !== null ? `; nearest mark ${trim(mark)}` : ''}${interval ? `; interval from ${trim(interval[0])} (${loIn ? 'included' : 'not included'}) to ${trim(interval[1])} (${hiIn ? 'included' : 'not included'})` : ''}${points.length ? '; points ' + points.map(([l, v]) => `${l.replace(/[{}]/g, '')} at ${trim(v)}`).join(', ') : ''}`;
  return `<svg viewBox="0 0 ${W} ${h}" class="mviz" role="img" aria-label="${esc(desc)}">${s}</svg>`;
}

function columnsHTML({ rows, op, result }) {
  return `<div class="mcols" role="img" aria-label="${esc(rows.join(', ') + ' gives ' + result)}">${rows.map((r, i) => `<div>${i === rows.length - 1 && op ? `<span class="mcols-op">${esc(op)}</span>` : ''}${mathHTML(r)}</div>`).join('')}<div class="mcols-res">${mathHTML(result)}</div></div>`;
}
function scaleHTML({ top, bottom, factor }) {
  const t2 = trim(Number(top) * factor), b2 = trim(Number(bottom) * factor);
  return `<div class="mscale" role="img" aria-label="${top} divided by ${bottom} equals ${t2} divided by ${b2}">${mathHTML(`{${top}/${bottom}}`)}<span>= ${mathHTML(`{${top} × ${factor}/${bottom} × ${factor}}`)} =</span>${mathHTML(`{${t2}/${b2}}`)}</div><p class="mcap">Multiplying top and bottom by the same number keeps the value.</p>`;
}
function grid100({ shaded, label }) {
  let s = '';
  for (let i = 0; i < 100; i++) { const r = Math.floor(i / 10), c = i % 10; s += `<rect x="${150 + c * 30}" y="${10 + r * 30}" width="28" height="28" rx="3" fill="${i < shaded ? C.fill : '#f8f6f214'}" stroke="${C.muted}" stroke-width=".6"/>`; }
  return `<svg viewBox="0 0 ${W} 316" class="mviz" role="img" aria-label="Hundred square with ${shaded} of 100 squares shaded">${s}</svg><p class="mcap">${mathHTML(label)}</p>`;
}
function recurringHTML({ digits, fraction }) {
  return `<p class="mexpr">0.${digits.split('').map((d, i) => (i === 0 || i === digits.length - 1 ? d + '̇' : d)).join('')} = 0.${digits.repeat(4)}…</p><p class="mexpr">= ${mathHTML(fraction)}</p><p class="mcap">The dots mark the first and last digits of the repeating block.</p>`;
}
function chipsHTML({ groups, caption }) {
  return `<div class="mchips" role="img" aria-label="${esc(caption.replace(/\^\{?([^}\s]+)\}?/g, ' to the power $1'))}">${groups.map(([b, k]) => `<div class="mchip-group">${Array.from({ length: k }, () => `<i>${b}</i>`).join('<span>×</span>')}</div>`).join('<b>×</b>')}</div><p class="mcap">${mathHTML(caption)}</p>`;
}
function halvingHTML({ base, from, to }) {
  const rows = []; for (let k = from; k >= to; k--) rows.push([k, k >= 0 ? String(base ** k) : `{1/${base ** -k}}`]);
  return `<table class="mpattern"><tbody>${rows.map(([k, v]) => `<tr><td>${mathHTML(`${base}^{${num(k)}}`)}</td><td>=</td><td>${mathHTML(v)}</td></tr>`).join('')}</tbody></table><p class="mcap">Each step down divides by ${base}.</p>`;
}
function placeHTML({ digits, n }) {
  return `<p class="mexpr mmono">${esc(digits)}</p><p class="mexpr">= ${mathHTML(`${decText(n >= 0 ? div(vOf(digits), F(10 ** n)) : mul(vOf(digits), F(10 ** -n)))} × 10^{${num(n)}}`)}</p><p class="mcap">The point moves ${Math.abs(n)} places ${n >= 0 ? 'left: a positive power' : 'right: a negative power'}.</p>`;
}

export function visual2(v) {
  if (!v) return '';
  switch (v.kind) {
    case 'columns': return columnsHTML(v);
    case 'scale': return scaleHTML(v);
    case 'fdpline': return decLine({ lo: v.min ?? 0, hi: v.max ?? 1, step: v.max ? 0.005 : 0.05, labels: v.max ? [v.min, (v.min + v.max) / 2, v.max].map(x => Math.round(x * 1e6) / 1e6) : [0, 0.5, 1], points: v.points });
    case 'grid100': return grid100(v);
    case 'recurring': return recurringHTML(v);
    case 'zoom': return decLine({ lo: v.lo, hi: v.hi, step: v.step, value: v.value, mark: v.mark ?? null, interval: v.interval ?? null });
    case 'chips': return chipsHTML(v);
    case 'halving': return halvingHTML(v);
    case 'place': return placeHTML(v);
    default: return '';
  }
}

/* ───────── investigations ───────── */

// Division by a decimal: scale both numbers by 10 until the divisor is whole; then place the point in a product.
const SCALE_TASKS = [['7.2', '0.3'], ['4.56', '0.6'], ['0.84', '0.07']];
const POINT_TASKS = [['3.6', '0.45'], ['0.7', '0.08'], ['12.5', '0.4']];
function mountDecimalScale(ctx) {
  const w = ctx.w; w.scale ??= { task: 0, k: 0, answer: '', done: [] }; w.point ??= { task: 0, pos: null, done: [] };
  const A = w.scale, P = w.point;
  const render = () => {
    if (A.done.length < SCALE_TASKS.length) {
      const [t, b] = SCALE_TASKS[A.task].map(vOf);
      const T = mul(t, F(10 ** A.k)), B = mul(b, F(10 ** A.k)), whole = B.d === 1;
      ctx.setTitle('Make the divisor a whole number.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · SCALE THE DIVISION ${progressDots(3, A.done.length, A.task)}</div><p class="mexpr">${mathHTML(`{${SCALE_TASKS[A.task][0]}/${SCALE_TASKS[A.task][1]}}`)}${A.k ? ` = ${mathHTML(`{${dtx(T)}/${dtx(B)}}`)}` : ''}</p><p class="mcap">${A.k ? `Both numbers × ${10 ** A.k}: the answer is unchanged.` : 'A division can be written as a fraction.'} ${whole ? 'The divisor is now a whole number ✓' : ''}</p>`;
      ctx.body.innerHTML = whole
        ? `<p>Now work out ${dtx(T)} ÷ ${dtx(B)} with short division.</p><label class="field-label" for="dsAns">${SCALE_TASKS[A.task][0]} ÷ ${SCALE_TASKS[A.task][1]} =</label><input class="lab-input mnum" id="dsAns" inputmode="decimal" autocomplete="off" value="${esc(A.answer)}"><button class="primary mbtn" data-act="dscheck">Check</button>`
        : `<p>Work out <strong>${SCALE_TASKS[A.task][0]} ÷ ${SCALE_TASKS[A.task][1]}</strong>. First change it into an equal division whose divisor is a whole number.</p><div class="choices">${btn('data-sc="top"', '× 10 the top only')}${btn('data-sc="bottom"', '× 10 the bottom only')}${btn('data-sc="both"', '× 10 both numbers')}</div>`;
    } else if (P.done.length < POINT_TASKS.length) {
      const [x, y] = POINT_TASKS[P.task];
      const ix = Number(x.replace('.', '')), iy = Number(y.replace('.', '')), digits = String(ix * iy);
      P.pos ??= digits.length;
      const shown = P.pos >= digits.length ? digits : P.pos <= 0 ? '0.' + '0'.repeat(-P.pos) + digits : digits.slice(0, P.pos) + '.' + digits.slice(P.pos);
      const est = Math.max(1, Math.round(Number(x))) * Number(Number(y).toPrecision(1));
      ctx.setTitle('Place the decimal point.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · WHERE DOES THE POINT GO? ${progressDots(3, P.done.length, P.task)}</div><p class="mexpr">${x} × ${y}</p><p class="mcap">${ix} × ${iy} = ${digits}</p><p class="mexpr mmono" aria-live="polite">${esc(shown)}</p><p class="mcap">Estimate: about ${trim(Math.max(1, Math.round(Number(x))))} × ${trim(Number(Number(y).toPrecision(1)))} = ${trim(est)}</p>`;
      ctx.body.innerHTML = `<p>The digits of the answer are ${digits}. Move the decimal point so that ${x} × ${y} is correct. Use the count of decimal places, and check against the estimate.</p><div class="mstepper">${btn('data-pt="-1"', '← Left', 'aria-label="Move point left"')}<output>${esc(shown)}</output>${btn('data-pt="1"', 'Right →', 'aria-label="Move point right"')}</div><button class="primary mbtn" data-act="ptcheck">This is ${x} × ${y}</button>`;
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${scaleHTML({ top: '4.56', bottom: '0.6', factor: 10 })}`;
      ctx.body.innerHTML = '<p>Dividing: scale both numbers by the same power of 10 until the divisor is whole. Multiplying: multiply the digits, then use the total number of decimal places and an estimate to place the point.</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-sc]').forEach(b => (b.onclick = () => {
      const [t, d] = SCALE_TASKS[A.task].map(vOf), orig = div(t, d);
      const T = mul(t, F(10 ** A.k)), B = mul(d, F(10 ** A.k));
      if (b.dataset.sc !== 'both') {
        const nt = b.dataset.sc === 'top' ? mul(T, F(10)) : T, nb = b.dataset.sc === 'bottom' ? mul(B, F(10)) : B;
        ctx.feedback(`That changes the answer: ${dtx(nt)} ÷ ${dtx(nb)} = ${dtx(div(nt, nb))}, but ${SCALE_TASKS[A.task][0]} ÷ ${SCALE_TASKS[A.task][1]} = ${dtx(orig)}. Scale both numbers by the same amount.`, true);
        return;
      }
      A.k++; ctx.feedback(''); ctx.save(); render();
    }));
    const inp = ctx.body.querySelector('#dsAns'); if (inp) inp.oninput = () => { A.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="dscheck"]')?.addEventListener('click', () => {
      const [t, d] = SCALE_TASKS[A.task].map(vOf), v = vOf(A.answer);
      if (!v) { ctx.feedback('Enter a number.', true); return; }
      if (!eq(v, div(t, d))) { ctx.feedback(`Check: ${dtx(v)} × ${SCALE_TASKS[A.task][1]} = ${dtx(mul(v, d))}, not ${SCALE_TASKS[A.task][0]}.`, true); return; }
      if (!A.done.includes(A.task)) A.done.push(A.task);
      ctx.feedback(`Correct: ${SCALE_TASKS[A.task][0]} ÷ ${SCALE_TASKS[A.task][1]} = ${dtx(v)}.`);
      if (A.task < SCALE_TASKS.length - 1) Object.assign(A, { task: A.task + 1, k: 0, answer: '' });
      ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-pt]').forEach(b => (b.onclick = () => { const [x, y] = POINT_TASKS[P.task]; const len = String(Number(x.replace('.', '')) * Number(y.replace('.', ''))).length; P.pos = Math.max(-3, Math.min(len, P.pos + Number(b.dataset.pt))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-pt="${b.dataset.pt}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="ptcheck"]')?.addEventListener('click', () => {
      const [x, y] = POINT_TASKS[P.task], want = mul(vOf(x), vOf(y));
      const digits = String(Number(x.replace('.', '')) * Number(y.replace('.', '')));
      const got = div(F(Number(digits)), F(10 ** (digits.length - P.pos)));
      if (!eq(got, want)) { ctx.feedback(`${dtx(got)} is too ${got.n * want.d > want.n * got.d ? 'big' : 'small'}. ${x} has ${(x.split('.')[1] || '').length} decimal place(s) and ${y} has ${(y.split('.')[1] || '').length}: the answer needs ${(x.split('.')[1] || '').length + (y.split('.')[1] || '').length}.`, true); return; }
      if (!P.done.includes(P.task)) P.done.push(P.task);
      ctx.feedback(`Correct: ${x} × ${y} = ${dtx(want)}.`);
      if (P.task < POINT_TASKS.length - 1) Object.assign(P, { task: P.task + 1, pos: null });
      ctx.save(); render();
      if (P.done.length === POINT_TASKS.length) ctx.done();
    });
  };
  if (A.done.length === SCALE_TASKS.length && P.done.length === POINT_TASKS.length) ctx.done();
  render();
}

// Order mixed fractions, decimals and percentages: convert each to a decimal, then order.
const FDP_ROUNDS = [
  [['{3/8}', '3/8'], ['0.4', '0.4'], ['33%', '0.33'], ['0.36', '0.36']],
  [['0.65', '0.65'], ['{5/8}', '5/8'], ['62%', '0.62'], ['0.6', '0.6']],
];
function mountFdpLine(ctx) {
  const w = ctx.w; w.fdp ??= { round: 0, conv: {}, order: [], done: [] };
  const st = w.fdp;
  const render = () => {
    if (st.done.length >= FDP_ROUNDS.length) {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${decLine({ lo: 0.3, hi: 0.7, step: 0.05, points: FDP_ROUNDS.flat().map(([l, v]) => [l, vOf(v).n / vOf(v).d]) })}`;
      ctx.body.innerHTML = '<p>Converting everything to decimals made each comparison a place-value comparison. Looking at the digits alone (33 vs 3/8, or 62 vs 0.6) is misleading.</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    const cards = FDP_ROUNDS[st.round];
    const need = cards.filter(([l]) => !/^0\.\d+$/.test(l));
    const allConv = need.every(([l]) => st.conv[st.round + l]);
    const placed = cards.filter(([l]) => /^0\.\d+$/.test(l) || st.conv[st.round + l]).map(([l, v]) => [l, vOf(v).n / vOf(v).d]);
    ctx.setTitle(allConv ? 'Order them, smallest first.' : 'Convert to decimals first.');
    ctx.panel.innerHTML = `<div class="mpanel-k">ORDERING · ROUND ${st.round + 1} OF 2</div>${decLine({ lo: st.round ? 0.55 : 0.3, hi: st.round ? 0.7 : 0.45, step: 0.01, labels: st.round ? [0.55, 0.6, 0.65, 0.7] : [0.3, 0.35, 0.4, 0.45], points: placed })}<p class="mcap">${st.order.length ? 'Your order so far: ' + st.order.map(l => l.replace(/[{}]/g, '')).join(', ') : 'Converted values appear on the line.'}</p>`;
    if (!allConv) {
      ctx.body.innerHTML = `<p>Write each value as a decimal.</p>${need.map(([l]) => `<div class="mrow"><span>${mathHTML(l)} =</span>${st.conv[st.round + l] ? `<strong>${esc(st.conv[st.round + l])}</strong>` : `<span class="mrow-in"><input class="lab-input mnum" data-cv="${esc(l)}" inputmode="decimal" autocomplete="off" aria-label="${esc(l.replace(/[{}]/g, ''))} as a decimal"><button class="secondary mbtn" data-cvb="${esc(l)}">Check</button></span>`}</div>`).join('')}`;
    } else {
      ctx.body.innerHTML = `<p>Select the values from smallest to largest.</p><div class="choices mgrid">${cards.map(([l]) => `<button class="choice ${st.order.includes(l) ? 'selected' : ''}" data-ord="${esc(l)}" ${st.order.includes(l) ? 'disabled' : ''}>${mathHTML(l)}</button>`).join('')}</div>${st.order.length ? btn('data-act="ordreset"', 'Start the order again') : ''}`;
    }
    bind();
  };
  const bind = () => {
    const cards = FDP_ROUNDS[st.round];
    ctx.body.querySelectorAll('[data-cvb]').forEach(b => (b.onclick = () => {
      const l = b.dataset.cvb, raw = ctx.body.querySelector(`[data-cv="${CSS.escape(l)}"]`).value;
      const want = vOf(cards.find(c => c[0] === l)[1]), v = vOf(raw);
      if (!v) { ctx.feedback('Write a decimal such as 0.375.', true); return; }
      if (!eq(v, want)) {
        ctx.feedback(l.includes('%') ? `Percent means out of 100: divide by 100.` : `Divide the numerator by the denominator: ${l.replace(/[{}]/g, '')} = ${dtx(want)}${eq(v, vOf('0.' + l.match(/\d+/)[0])) ? `, not 0.${l.match(/\d+/)[0]}` : ''}.`, true);
        return;
      }
      st.conv[st.round + l] = dtx(want); ctx.feedback(''); ctx.save(); render();
    }));
    ctx.body.querySelectorAll('[data-ord]').forEach(b => (b.onclick = () => {
      const l = b.dataset.ord, rest = cards.filter(c => !st.order.includes(c[0]));
      const min = rest.reduce((m, c) => (vOf(c[1]).n / vOf(c[1]).d < vOf(m[1]).n / vOf(m[1]).d ? c : m));
      if (l !== min[0]) { ctx.feedback(`${l.replace(/[{}]/g, '')} = ${dtx(vOf(cards.find(c => c[0] === l)[1]))}, but ${min[0].replace(/[{}]/g, '')} = ${dtx(vOf(min[1]))} is smaller.`, true); return; }
      st.order.push(l); ctx.feedback('');
      if (st.order.length === cards.length) { if (!st.done.includes(st.round)) st.done.push(st.round); ctx.feedback(`Correct order: ${st.order.map(x => x.replace(/[{}]/g, '')).join(', ')}.`); if (st.round === 0) { st.round = 1; st.order = []; } }
      ctx.save(); render();
      if (st.done.length === FDP_ROUNDS.length) ctx.done();
    }));
    ctx.body.querySelector('[data-act="ordreset"]')?.addEventListener('click', () => { st.order = []; ctx.save(); render(); });
  };
  if (st.done.length === FDP_ROUNDS.length) ctx.done();
  render();
}

// Rounding on a zoomed number line, then build an error interval with open/closed ends.
const ROUND_TASKS = [
  { x: 4.276, lo: 4.2, hi: 4.3, step: 0.01, place: '1 decimal place' },
  { x: 7.25, lo: 7.2, hi: 7.3, step: 0.01, place: '1 decimal place' },
  { x: 38450, lo: 38000, hi: 39000, step: 100, place: 'the nearest 1000' },
];
const IV_TASKS = [
  { val: 4.3, unit: 0.1, desc: '1 decimal place', step: 0.05 },
  { val: 70, unit: 10, desc: 'the nearest 10', step: 1 },
];
function mountRoundingLine(ctx) {
  const w = ctx.w; w.rnd ??= { task: 0, done: [] }; w.iv ??= { task: 0, lo: null, hi: null, loIn: false, hiIn: false, done: [] };
  const R = w.rnd, I = w.iv;
  const render = () => {
    if (R.done.length < ROUND_TASKS.length) {
      const T = ROUND_TASKS[R.task], mid = (T.lo + T.hi) / 2;
      ctx.setTitle('Which way does it round?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · ZOOM IN ${progressDots(3, R.done.length, R.task)}</div>${decLine({ lo: T.lo, hi: T.hi, step: T.step, value: T.x, labels: [T.lo, mid, T.hi].map(v => Math.round(v * 1e6) / 1e6) })}<p class="mcap">Halfway is ${trim(mid)}.</p>`;
      ctx.body.innerHTML = `<p>Round <strong>${trim(T.x)}</strong> to ${T.place}. It lies between ${trim(T.lo)} and ${trim(T.hi)}.</p><div class="choices">${btn(`data-rd="${T.lo}"`, `Round to ${trim(T.lo)}`)}${btn(`data-rd="${T.hi}"`, `Round to ${trim(T.hi)}`)}</div>`;
    } else if (I.done.length < IV_TASKS.length) {
      const T = IV_TASKS[I.task];
      I.lo ??= T.val; I.hi ??= T.val;
      ctx.setTitle('Build the error interval.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · ERROR INTERVAL ${progressDots(2, I.done.length, I.task)}</div>${decLine({ lo: T.val - T.unit, hi: T.val + T.unit, step: T.step, value: T.val, interval: [I.lo, I.hi], loIn: I.loIn, hiIn: I.hiIn, labels: [-1, -0.5, 0, 0.5, 1].map(k => Math.round((T.val + k * T.unit) * 1e6) / 1e6) })}<p class="mcap">● included · ○ not included</p>`;
      ctx.body.innerHTML = `<p>x = ${trim(T.val)}, correct to ${T.desc}. Set the smallest and largest values x could take, and whether each end is included.</p>
        <div class="mrow"><span>Lower end</span><div class="mstepper">${btn('data-ivl="-1"', '−', 'aria-label="Lower end down"')}<output>${trim(I.lo)}</output>${btn('data-ivl="1"', '+', 'aria-label="Lower end up"')}</div><button class="secondary mbtn mend" data-ivin="lo" aria-pressed="${I.loIn}">${I.loIn ? '● included' : '○ not included'}</button></div>
        <div class="mrow"><span>Upper end</span><div class="mstepper">${btn('data-ivh="-1"', '−', 'aria-label="Upper end down"')}<output>${trim(I.hi)}</output>${btn('data-ivh="1"', '+', 'aria-label="Upper end up"')}</div><button class="secondary mbtn mend" data-ivin="hi" aria-pressed="${I.hiIn}">${I.hiIn ? '● included' : '○ not included'}</button></div>
        <p class="micro-note">Interval: ${trim(I.lo)} ${I.loIn ? '≤' : '<'} x ${I.hiIn ? '≤' : '<'} ${trim(I.hi)}</p><button class="primary mbtn" data-act="ivcheck">Check the interval</button>`;
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${decLine({ lo: 4.2, hi: 4.4, step: 0.05, value: 4.3, interval: [4.25, 4.35], labels: [4.2, 4.25, 4.3, 4.35, 4.4] })}`;
      ctx.body.innerHTML = '<p>A rounded value could have come from anywhere within half a unit of it. The lower end rounds up to the value, so it is included (≤); the upper end would round up to the next value, so it is not (<).</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-rd]').forEach(b => (b.onclick = () => {
      const T = ROUND_TASKS[R.task], mid = (T.lo + T.hi) / 2, want = T.x >= mid - 1e-9 ? T.hi : T.lo;
      if (Math.abs(Number(b.dataset.rd) - want) > 1e-9) { ctx.feedback(Math.abs(T.x - mid) < 1e-9 ? `${trim(T.x)} is exactly halfway. The rule is: halfway rounds up.` : `${trim(T.x)} is ${T.x > mid ? 'past' : 'before'} the halfway point ${trim(mid)}, so it is nearer ${trim(want)}.`, true); return; }
      if (!R.done.includes(R.task)) R.done.push(R.task);
      ctx.feedback(`Correct: ${trim(T.x)} rounds to ${trim(want)}.`);
      if (R.task < ROUND_TASKS.length - 1) R.task++;
      ctx.save(); render();
    }));
    const T = IV_TASKS[I.task];
    const bump = (key, d) => { I[key] = Math.round((I[key] + d * T.step) * 1e6) / 1e6; ctx.feedback(''); ctx.save(); render(); };
    ctx.body.querySelectorAll('[data-ivl]').forEach(b => (b.onclick = () => { bump('lo', Number(b.dataset.ivl)); ctx.body.querySelector(`[data-ivl="${b.dataset.ivl}"]`)?.focus(); }));
    ctx.body.querySelectorAll('[data-ivh]').forEach(b => (b.onclick = () => { bump('hi', Number(b.dataset.ivh)); ctx.body.querySelector(`[data-ivh="${b.dataset.ivh}"]`)?.focus(); }));
    ctx.body.querySelectorAll('[data-ivin]').forEach(b => (b.onclick = () => { const k = b.dataset.ivin === 'lo' ? 'loIn' : 'hiIn'; I[k] = !I[k]; ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-ivin="${b.dataset.ivin}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="ivcheck"]')?.addEventListener('click', () => {
      const lo = T.val - T.unit / 2, hi = T.val + T.unit / 2, near = (a, b) => Math.abs(a - b) < 1e-9;
      if (!near(I.lo, lo) || !near(I.hi, hi)) {
        ctx.feedback(near(I.hi - I.lo, 2 * T.unit) ? `The interval is too wide. Values only round to ${trim(T.val)} if they are within half of ${trim(T.unit)}.` : near(I.lo, T.val) ? `Values a little below ${trim(T.val)} also round to it. Rounding, unlike truncating, works from both sides.` : `x must be within half of ${trim(T.unit)} (that is ${trim(T.unit / 2)}) of ${trim(T.val)}.`, true);
        return;
      }
      if (!I.loIn) { ctx.feedback(`${trim(lo)} rounds up to ${trim(T.val)}, so it is included: use ●.`, true); return; }
      if (I.hiIn) { ctx.feedback(`${trim(hi)} would round up to ${trim(T.val + T.unit)}, so it is not included: use ○.`, true); return; }
      if (!I.done.includes(I.task)) I.done.push(I.task);
      ctx.feedback(`Correct: ${trim(lo)} ≤ x < ${trim(hi)}.`);
      if (I.task < IV_TASKS.length - 1) Object.assign(I, { task: I.task + 1, lo: null, hi: null, loIn: false, hiIn: false });
      ctx.save(); render();
      if (I.done.length === IV_TASKS.length) ctx.done();
    });
  };
  if (R.done.length === ROUND_TASKS.length && I.done.length === IV_TASKS.length) ctx.done();
  render();
}

// Index laws from factor chips, then the halving table into zero and negative indices.
const CHIP_TASKS = [
  { kind: 'mul', base: 3, a: 4, b: 2, prompt: '3^4 × 3^2', law: 'Multiplying: add the indices.' },
  { kind: 'div', base: 2, a: 6, b: 2, prompt: '2^6 ÷ 2^2', law: 'Dividing: subtract the indices.' },
  { kind: 'pow', base: 5, a: 2, b: 3, prompt: '(5^2)^3', law: 'Power of a power: multiply the indices.' },
];
function mountIndexChips(ctx) {
  const w = ctx.w; w.chips ??= { task: 0, cancelled: 0, answer: '', done: [] }; w.halve ??= { vals: {}, done: false };
  const K = w.chips, H = w.halve;
  const render = () => {
    if (K.done.length < CHIP_TASKS.length) {
      const T = CHIP_TASKS[K.task];
      const chip = (n, off = 0) => Array.from({ length: n }, (_, i) => `<i class="${i < off ? 'gone' : ''}" aria-label="${i < off ? 'cancelled ' : ''}${T.base}">${T.base}</i>`).join('');
      let vis;
      if (T.kind === 'mul') vis = `<div class="mchips"><div class="mchip-group">${chip(T.a)}</div><b>×</b><div class="mchip-group">${chip(T.b)}</div></div>`;
      else if (T.kind === 'div') vis = `<div class="mchips mchips-frac"><div class="mchip-group">${chip(T.a, K.cancelled)}</div><hr><div class="mchip-group">${chip(T.b, K.cancelled)}</div></div>`;
      else vis = `<div class="mchips">${Array.from({ length: T.b }, () => `<div class="mchip-group">${chip(T.a)}</div>`).join('<b>×</b>')}</div>`;
      ctx.setTitle('Count the factors.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · FACTOR CHIPS ${progressDots(3, K.done.length, K.task)}</div><p class="mexpr">${mathHTML(T.prompt)}</p>${vis}<p class="mcap">Each chip is one factor of ${T.base}.</p>`;
      const ready = T.kind !== 'div' || K.cancelled >= T.b;
      ctx.body.innerHTML = `<p>${T.kind === 'mul' ? `Write ${mathHTML(T.prompt)} as a single power of ${T.base}. Count the ${T.base}s being multiplied.` : T.kind === 'div' ? `Each ${T.base} on the bottom cancels one on the top. Cancel pairs until the bottom is gone.` : `${mathHTML(T.prompt)} is ${T.b} lots of ${mathHTML(`${T.base}^${T.a}`)}. How many ${T.base}s altogether?`}</p>${T.kind === 'div' && !ready ? btn('data-act="cancel"', 'Cancel a pair') : ''}${ready ? `<label class="field-label" for="chAns">${mathHTML(T.prompt)} = ${T.base} to the power</label><input class="lab-input mnum" id="chAns" inputmode="numeric" autocomplete="off" value="${esc(K.answer)}"><button class="primary mbtn" data-act="chcheck">Check</button>` : ''}`;
    } else if (!H.done) {
      const rows = [[3, '8'], [2, '4'], [1, '2'], [0, null], [-1, null], [-2, null], [-3, null]];
      ctx.setTitle('Continue the pattern below 2^1.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · HALVING TABLE</div>${halvingHTML({ base: 2, from: 3, to: 1 })}`;
      ctx.body.innerHTML = `<p>Each row down divides by 2. Continue the pattern.</p>${rows.filter(r => r[1] === null).map(([k]) => `<label class="field-label" for="hv${k}">${mathHTML(`2^{${num(k)}}`)} =</label><input class="lab-input mnum" id="hv${k}" data-hv="${k}" autocomplete="off" placeholder="${k < 0 ? 'e.g. 1/2' : ''}" value="${esc(H.vals[k] ?? '')}">`).join('')}<button class="primary mbtn" data-act="hvcheck">Check the pattern</button>`;
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${halvingHTML({ base: 2, from: 3, to: -3 })}`;
      ctx.body.innerHTML = `<p>${CHIP_TASKS.map(t => t.law).join(' ')} Halving continues below 2^1: 2^0 = 1 and negative indices give reciprocals, never negative numbers.</p><p class="mdone">Investigation complete ✓</p>`;
      return;
    }
    bind();
  };
  const bind = () => {
    const T = CHIP_TASKS[K.task];
    ctx.body.querySelector('[data-act="cancel"]')?.addEventListener('click', () => { K.cancelled++; ctx.save(); render(); (ctx.body.querySelector('[data-act="cancel"]') || ctx.body.querySelector('#chAns'))?.focus(); });
    const inp = ctx.body.querySelector('#chAns'); if (inp) inp.oninput = () => { K.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="chcheck"]')?.addEventListener('click', () => {
      const want = T.kind === 'mul' ? T.a + T.b : T.kind === 'div' ? T.a - T.b : T.a * T.b;
      const got = Number(K.answer);
      if (!Number.isInteger(got) || K.answer.trim() === '') { ctx.feedback('Enter a whole number.', true); return; }
      if (got !== want) {
        const wrongWhy = T.kind === 'mul' && got === T.a * T.b ? 'Count the chips: the indices are added, not multiplied.' : T.kind === 'div' && got === T.a / T.b ? 'Count the chips left on top: the indices are subtracted, not divided.' : T.kind === 'pow' && got === T.a + T.b ? `There are ${T.b} groups of ${T.a} chips: multiply.` : 'Count the chips again.';
        ctx.feedback(wrongWhy, true); return;
      }
      if (!K.done.includes(K.task)) K.done.push(K.task);
      ctx.feedback(`Correct: ${T.prompt.replace(/\^(\d)/g, '^$1')} = ${T.base}^${want}. ${T.law}`);
      if (K.task < CHIP_TASKS.length - 1) Object.assign(K, { task: K.task + 1, cancelled: 0, answer: '' });
      ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-hv]').forEach(i => (i.oninput = () => { H.vals[i.dataset.hv] = i.value; ctx.save(); }));
    ctx.body.querySelector('[data-act="hvcheck"]')?.addEventListener('click', () => {
      for (const k of [0, -1, -2, -3]) {
        const v = vOf(H.vals[k] ?? ''), want = k === 0 ? F(1) : F(1, 2 ** -k);
        if (!v || !eq(v, want)) {
          ctx.feedback(v && v.n < 0 ? `Halving never makes a number negative: 2^${num(k)} is a fraction, not ${dtx(v).replace('-', '−')}.` : k === 0 && v && v.n === 0 ? 'Half of 2 is 1, not 0: so 2^0 = 1.' : `Check 2^${num(k)}: halve the row above.`, true);
          return;
        }
      }
      H.done = true; ctx.feedback('Correct: 2^0 = 1, 2^−1 = 1/2, 2^−2 = 1/4, 2^−3 = 1/8.'); ctx.save(); render(); ctx.done();
    });
  };
  if (K.done.length === CHIP_TASKS.length && H.done) ctx.done();
  render();
}

// Standard form: slide the decimal point until 1 ≤ A < 10, then choose the power.
const SF_TASKS = [{ digits: '32', e: 6 }, { digits: '45', e: -4 }, { digits: '72', e: 10 }, { digits: '603', e: -2 }];
const sfOrdinary = (digits, e) => { const v = mul(F(Number(digits)), e - digits.length + 1 >= 0 ? F(10 ** (e - digits.length + 1)) : F(1, 10 ** (digits.length - 1 - e))); return v; };
const groupDigits = t => { const [i, d] = t.split('.'); return i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (d !== undefined ? '.' + d.replace(/(\d{3})(?=\d)/g, '$1 ') : ''); };
function mountSfSlider(ctx) {
  const w = ctx.w; w.sf ??= { task: 0, moves: 0, placed: false, exp: '', neg: false, done: [] };
  const S = w.sf;
  const render = () => {
    if (S.done.length >= SF_TASKS.length) {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${placeHTML({ digits: '3200000', n: 6 })}`;
      ctx.body.innerHTML = '<p>The power of 10 counts how many places the decimal point moves to make a number between 1 and 10: positive for large numbers, negative for numbers less than 1.</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    const T = SF_TASKS[S.task], ord = sfOrdinary(T.digits, T.e);
    const ordText = decText(ord);
    const A = T.e >= 0 ? div(ord, F(10 ** S.moves)) : mul(ord, F(10 ** S.moves));
    const aText = decText(A), Av = A.n / A.d, inRange = Av >= 1 && Av < 10;
    ctx.setTitle(S.placed ? 'Now the power of 10.' : 'Slide the decimal point.');
    ctx.panel.innerHTML = `<div class="mpanel-k">STANDARD FORM ${progressDots(4, S.done.length, S.task)}</div><p class="mexpr mmono">${esc(groupDigits(ordText))}</p><p class="mexpr mmono" aria-live="polite">${esc(aText)}</p><p class="mcap">Point moved ${S.moves} place${S.moves === 1 ? '' : 's'} ${T.e >= 0 ? 'left' : 'right'}${inRange ? ' · between 1 and 10 ✓' : ''}</p>`;
    ctx.body.innerHTML = !S.placed
      ? `<p>Write <strong>${esc(groupDigits(ordText))}</strong> in standard form. Move the decimal point until the number is at least 1 and less than 10.</p><div class="mstepper">${btn('data-mv="1"', T.e >= 0 ? '← Move left' : 'Move right →')}<output>${S.moves}</output>${btn('data-mv="-1"', 'Undo')}</div><button class="primary mbtn" data-act="sfplace">This is between 1 and 10</button>`
      : `<p>${esc(groupDigits(ordText))} = ${esc(aText)} × 10 to the power…</p><div class="mans"><span class="mtimes">${esc(aText)} × 10</span><span class="mexp"><button type="button" class="msign ${S.neg ? 'on' : ''}" data-sfneg aria-pressed="${S.neg}" aria-label="Negative power">−</button><input class="lab-input" id="sfExp" inputmode="numeric" autocomplete="off" aria-label="Power of 10" value="${esc(S.exp)}"></span></div><button class="primary mbtn" data-act="sfcheck">Check</button>`;
    bind(T, A, inRange);
  };
  const bind = (T, A, inRange) => {
    ctx.body.querySelectorAll('[data-mv]').forEach(b => (b.onclick = () => { S.moves = Math.max(0, Math.min(14, S.moves + Number(b.dataset.mv))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-mv="${b.dataset.mv}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="sfplace"]')?.addEventListener('click', () => {
      if (!inRange) { ctx.feedback(A.n / A.d >= 10 ? 'Still 10 or more: keep moving the point.' : 'That is less than 1: you have moved too far. Undo a step.', true); return; }
      S.placed = true; ctx.feedback(''); ctx.save(); render();
    });
    ctx.body.querySelector('[data-sfneg]')?.addEventListener('click', () => { S.neg = !S.neg; ctx.save(); render(); });
    const inp = ctx.body.querySelector('#sfExp'); if (inp) inp.oninput = () => { S.exp = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="sfcheck"]')?.addEventListener('click', () => {
      const n = Number(S.exp) * (S.neg ? -1 : 1);
      if (S.exp.trim() === '' || !Number.isInteger(n)) { ctx.feedback('Enter a whole number for the power.', true); return; }
      if (n !== T.e) { ctx.feedback(Math.abs(n) === Math.abs(T.e) ? (T.e > 0 ? 'A large number needs a positive power: the A part was multiplied up by 10 each move.' : 'A number less than 1 needs a negative power: it is smaller than the A part.') : `The power is the number of places the point moved: ${S.moves}.`, true); return; }
      if (!S.done.includes(S.task)) S.done.push(S.task);
      ctx.feedback(`Correct: ${groupDigits(decText(sfOrdinary(T.digits, T.e)))} = ${decText(A)} × 10^${num(T.e)}.`);
      if (S.task < SF_TASKS.length - 1) Object.assign(S, { task: S.task + 1, moves: 0, placed: false, exp: '', neg: false });
      ctx.save(); render();
      if (S.done.length === SF_TASKS.length) ctx.done();
    });
  };
  if (S.done.length === SF_TASKS.length) ctx.done();
  render();
}

export const MODELS2 = { 'decimal-scale': mountDecimalScale, 'fdp-line': mountFdpLine, 'rounding-line': mountRoundingLine, 'index-chips': mountIndexChips, 'sf-slider': mountSfSlider };
export { decLine, sfOrdinary };
