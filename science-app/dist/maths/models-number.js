// Visual models for the Number pilot: static diagrams for worked examples (visual())
// and interactive investigations (mountModel()). Everything is SVG/HTML: keyboard
// operable, no colour-only meaning, and no motion when reduced motion is requested.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { F, gcd, lcm, num, parseNumber, eq } from './frac.js?v=20261023-maths-r9';
import { primeFactors, primesMarkup } from './answers.js?v=20261023-maths-r9';

const C = { ink: '#e4ebf0', muted: '#b7c8d6', faint: '#b7c8d640', coral: '#ed8b78', cream: '#f8f6f2', fill: '#f0b4a6', navy: '#182e44', green: '#a8d5b5' };
const W = 600;

/* ───────── static visuals ───────── */

function numberLine({ min, max, points = [], jumps = [], marker = null, ghost = null, h = 150 }) {
  const pad = 36, span = max - min, x = v => pad + ((v - min) / span) * (W - 2 * pad);
  let s = `<line x1="${pad - 14}" y1="90" x2="${W - pad + 14}" y2="90" stroke="${C.muted}" stroke-width="2"/>`;
  s += `<path d="M${W - pad + 14} 84 L${W - pad + 24} 90 L${W - pad + 14} 96Z" fill="${C.muted}"/><path d="M${pad - 14} 84 L${pad - 24} 90 L${pad - 14} 96Z" fill="${C.muted}"/>`;
  for (let v = Math.ceil(min); v <= max; v++) {
    s += `<line x1="${x(v)}" y1="${v === 0 ? 78 : 83}" x2="${x(v)}" y2="${v === 0 ? 102 : 97}" stroke="${v === 0 ? C.cream : C.muted}" stroke-width="${v === 0 ? 2.5 : 1.5}"/>`;
    if (span <= 16 || v % 2 === 0) s += `<text x="${x(v)}" y="124" text-anchor="middle" fill="${v === 0 ? C.cream : C.muted}" font-size="14" font-weight="${v === 0 ? 700 : 400}">${num(v)}</text>`;
  }
  jumps.forEach(([a, b], i) => {
    const mid = (x(a) + x(b)) / 2, top = 40 - i * 8;
    s += `<path d="M${x(a)} 80 Q${mid} ${top} ${x(b)} 80" fill="none" stroke="${C.coral}" stroke-width="2.5" marker-end="url(#ah)"/><text x="${mid}" y="${top + 4}" text-anchor="middle" fill="${C.coral}" font-size="14" font-weight="600">${b > a ? '+' : '−'}${Math.abs(b - a)}</text>`;
  });
  if (ghost !== null) s += `<circle cx="${x(ghost)}" cy="90" r="9" fill="none" stroke="${C.coral}" stroke-dasharray="3 3" stroke-width="2"/>`;
  points.forEach(v => { s += `<circle cx="${x(v)}" cy="90" r="7" fill="${C.cream}"/><text x="${x(v)}" y="62" text-anchor="middle" fill="${C.ink}" font-size="13">${num(v)}</text>`; });
  if (marker !== null) s += `<g><circle cx="${x(marker)}" cy="90" r="11" fill="${C.coral}" stroke="${C.cream}" stroke-width="2"/><text x="${x(marker)}" y="148" text-anchor="middle" fill="${C.coral}" font-size="13" font-weight="700">${num(marker)}</text></g>`;
  return `<svg viewBox="0 0 ${W} ${h}" class="mviz" role="img" aria-label="Number line from ${num(min)} to ${num(max)}${points.length ? ' with points at ' + points.map(num).join(', ') : ''}${marker !== null ? ', marker at ' + num(marker) : ''}${jumps.length ? ', jumps ' + jumps.map(([a, b]) => `from ${num(a)} to ${num(b)}`).join(', ') : ''}"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${C.coral}"/></marker></defs>${s}</svg>`;
}

function barSVG(bars, { width = W, unitW = null, labels = true } = {}) {
  const maxWholes = Math.max(1, ...bars.map(([n, d]) => Math.ceil(n / d)));
  const u = unitW || Math.min(260, (width - 80) / maxWholes);
  let y = 10, s = '';
  for (const [n, d] of bars) {
    const wholes = Math.max(1, Math.ceil(n / d));
    for (let w = 0; w < wholes; w++) {
      const x0 = 40 + w * u;
      for (let i = 0; i < d; i++) {
        const idx = w * d + i, on = idx < n;
        s += `<rect x="${x0 + (i * u) / d}" y="${y}" width="${u / d}" height="30" fill="${on ? C.fill : 'none'}" stroke="${C.muted}" stroke-width="1"/>`;
      }
      s += `<rect x="${x0}" y="${y}" width="${u}" height="30" fill="none" stroke="${C.cream}" stroke-width="2"/>`;
    }
    if (labels) s += `<text x="${30}" y="${y + 20}" text-anchor="end" fill="${C.ink}" font-size="13">${n}/${d}</text>`;
    y += 44;
  }
  return `<svg viewBox="0 0 ${width} ${y + 4}" class="mviz" role="img" aria-label="Fraction bars: ${bars.map(([n, d]) => `${n} out of ${d} equal parts shaded`).join('; ')}">${s}</svg>`;
}

function areaSVG(a, b, { shadeA = a[0], shadeB = b[0], showOverlap = true } = {}) {
  // a = [n, d] split as columns; b = [n, d] split as rows. Improper fractions extend beyond one unit.
  const cols = a[1], rows = b[1], wa = Math.max(1, Math.ceil(a[0] / a[1])), wb = Math.max(1, Math.ceil(b[0] / b[1]));
  const size = Math.min(300 / Math.max(wa, wb), 220), x0 = 150, y0 = 20;
  let s = '';
  for (let i = 0; i < wa; i++) for (let j = 0; j < wb; j++) s += `<rect x="${x0 + i * size}" y="${y0 + j * size}" width="${size}" height="${size}" fill="none" stroke="${C.cream}" stroke-width="2"/>`;
  for (let c = 0; c < cols * wa; c++) for (let r = 0; r < rows * wb; r++) {
    const inA = c < shadeA, inB = r < shadeB;
    const fill = inA && inB && showOverlap ? C.coral : inA ? '#ed8b7840' : inB ? '#b7c8d640' : 'none';
    const cx = x0 + (c * size) / cols, cy = y0 + (r * size) / rows;
    s += `<rect x="${cx}" y="${cy}" width="${size / cols}" height="${size / rows}" fill="${fill}" stroke="${C.muted}" stroke-width=".8"/>`;
    if (inA && inB && showOverlap) s += `<circle cx="${cx + size / cols / 2}" cy="${cy + size / rows / 2}" r="${Math.min(size / cols, size / rows) * 0.14}" fill="${C.navy}"/>`;
  }
  const H = y0 + size * wb + 30;
  s += `<text x="${x0 + (size * wa) / 2}" y="${H - 6}" text-anchor="middle" fill="${C.ink}" font-size="13">columns: ${shadeA}/${cols} shaded</text>`;
  s += `<text x="${x0 - 12}" y="${y0 + (size * wb) / 2}" text-anchor="end" fill="${C.ink}" font-size="13">rows: ${shadeB}/${rows}</text>`;
  s += `<circle cx="${x0 + size * wa + 22}" cy="${y0 + 10}" r="4" fill="${C.navy}" stroke="${C.coral}" stroke-width="6"/><text x="${x0 + size * wa + 36}" y="${y0 + 14}" fill="${C.ink}" font-size="12">= in both</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" class="mviz" role="img" aria-label="Area model: ${shadeA} of ${cols} columns and ${shadeB} of ${rows} rows shaded; the overlap is ${shadeA * shadeB} of ${cols * rows} small rectangles per whole square">${s}</svg>`;
}

function fitSVG(whole, piece, placed = null) {
  const u = 160, x0 = 40;
  const wholeLen = (whole[0] / whole[1]) * u, pieceLen = (piece[0] / piece[1]) * u;
  const count = placed ?? Math.floor((whole[0] * piece[1]) / (whole[1] * piece[0]) + 1e-9);
  let s = `<rect x="${x0}" y="20" width="${wholeLen}" height="34" fill="none" stroke="${C.cream}" stroke-width="2"/><text x="${x0}" y="14" fill="${C.ink}" font-size="13">${whole[0]}/${whole[1]}</text>`;
  for (let k = 0; k <= whole[0] / whole[1]; k++) s += `<line x1="${x0 + k * u}" y1="58" x2="${x0 + k * u}" y2="66" stroke="${C.muted}"/><text x="${x0 + k * u}" y="80" text-anchor="middle" fill="${C.muted}" font-size="12">${k}</text>`;
  for (let i = 0; i < count; i++) {
    const over = (i + 1) * pieceLen > wholeLen + 0.5;
    s += `<rect x="${x0 + i * pieceLen + 1}" y="96" width="${pieceLen - 2}" height="30" fill="${over ? '#ed8b7830' : C.fill}" stroke="${over ? C.coral : C.cream}" stroke-dasharray="${over ? '4 3' : ''}"/><text x="${x0 + i * pieceLen + pieceLen / 2}" y="116" text-anchor="middle" fill="${C.navy}" font-size="12">${i + 1}</text>`;
  }
  return `<svg viewBox="0 0 ${W} 140" class="mviz" role="img" aria-label="${count} pieces of length ${piece[0]}/${piece[1]} placed along a bar of length ${whole[0]}/${whole[1]}">${s}</svg>`;
}

function partsSVG({ parts, known, value }) {
  const u = Math.min(90, 500 / parts), x0 = (W - u * parts) / 2;
  let s = '';
  for (let i = 0; i < parts; i++) s += `<rect x="${x0 + i * u}" y="40" width="${u}" height="40" fill="${i < known ? C.fill : 'none'}" stroke="${C.cream}" stroke-width="2"/><text x="${x0 + i * u + u / 2}" y="66" text-anchor="middle" fill="${i < known ? C.navy : C.ink}" font-size="14">${value / known}</text>`;
  s += `<path d="M${x0} 32 v-8 h${u * known} v8" fill="none" stroke="${C.coral}" stroke-width="2"/><text x="${x0 + (u * known) / 2}" y="16" text-anchor="middle" fill="${C.coral}" font-size="14">${known} parts = ${value}</text>`;
  s += `<path d="M${x0} 88 v8 h${u * parts} v-8" fill="none" stroke="${C.muted}" stroke-width="2"/><text x="${x0 + (u * parts) / 2}" y="116" text-anchor="middle" fill="${C.ink}" font-size="14">whole = ${parts} parts = ${(value / known) * parts}</text>`;
  return `<svg viewBox="0 0 ${W} 126" class="mviz" role="img" aria-label="Bar model: ${known} of ${parts} equal parts make ${value}; each part is ${value / known}; the whole is ${(value / known) * parts}">${s}</svg>`;
}

function treeLayout(n, splits) {
  // returns nodes with depth/x positions for a binary factor tree
  const nodes = [];
  let leafX = 0;
  (function walk(v, depth, path) {
    const kids = splits[path] || (path === 'r' ? splits[v] : null) || null;
    const node = { v, depth, path, prime: !kids && isP(v) };
    nodes.push(node);
    if (kids) { node.kids = [walk(kids[0], depth + 1, path + '0'), walk(kids[1], depth + 1, path + '1')]; node.x = (node.kids[0].x + node.kids[1].x) / 2; }
    else node.x = leafX++;
    return node;
  })(n, 0, 'r');
  return { nodes, leaves: leafX };
}
const isP = v => { if (v < 2) return false; for (let i = 2; i * i <= v; i++) if (v % i === 0) return false; return true; };

function treeSVG(n, splits, { selected = null } = {}) {
  // splits keyed by path ('r', 'r0', 'r01', ...) or, for static visuals, by value
  const norm = {};
  const fill = (v, path) => { const k = splits[path] || splits[v]; if (k) { norm[path] = k; fill(k[0], path + '0'); fill(k[1], path + '1'); } };
  fill(n, 'r');
  const { nodes, leaves } = treeLayout(n, norm);
  const depth = Math.max(...nodes.map(d => d.depth));
  const gx = Math.min(90, (W - 80) / Math.max(1, leaves - 1 || 1)), x0 = (W - gx * (leaves - 1)) / 2;
  const X = nd => (leaves === 1 ? W / 2 : x0 + nd.x * gx), Y = nd => 30 + nd.depth * 62;
  let s = '';
  nodes.forEach(nd => nd.kids?.forEach(k => { s += `<line x1="${X(nd)}" y1="${Y(nd) + 14}" x2="${X(k)}" y2="${Y(k) - 16}" stroke="${C.muted}" stroke-width="1.5"/>`; }));
  nodes.forEach(nd => {
    const leaf = !nd.kids;
    s += `<g>${leaf && nd.prime ? `<circle cx="${X(nd)}" cy="${Y(nd)}" r="19" fill="${C.fill}" stroke="${C.cream}" stroke-width="2"/>` : ''}${selected === nd.path ? `<rect x="${X(nd) - 26}" y="${Y(nd) - 19}" width="52" height="38" rx="8" fill="none" stroke="${C.coral}" stroke-width="2.5"/>` : ''}<text x="${X(nd)}" y="${Y(nd) + 5}" text-anchor="middle" fill="${leaf && nd.prime ? C.navy : C.ink}" font-size="16" font-weight="${leaf ? 700 : 500}">${nd.v}</text></g>`;
  });
  const H = 30 + depth * 62 + 34;
  const primes = nodes.filter(nd => !nd.kids).map(nd => nd.v);
  return { svg: `<svg viewBox="0 0 ${W} ${H}" class="mviz" role="img" aria-label="Factor tree for ${n}. Current ends of branches: ${primes.join(', ')}">${s}</svg>`, leaves: nodes.filter(nd => !nd.kids), nodes };
}

function vennSVG(a, b, assign = null) {
  const fa = primeFactors(a), fb = primeFactors(b);
  const listA = Object.entries(fa).flatMap(([p, k]) => Array(k).fill(Number(p)));
  const listB = Object.entries(fb).flatMap(([p, k]) => Array(k).fill(Number(p)));
  let shared = [], onlyA = [], onlyB = [...listB];
  if (assign) ({ shared, onlyA, onlyB } = assign);
  else for (const p of listA) { const i = onlyB.indexOf(p); if (i >= 0) { shared.push(p); onlyB.splice(i, 1); } else onlyA.push(p); }
  const col = (list, cx) => list.map((p, i) => `<text x="${cx}" y="${88 + (i - (list.length - 1) / 2) * 24}" text-anchor="middle" fill="${C.ink}" font-size="17" font-weight="600">${p}</text>`).join('');
  const s = `<circle cx="230" cy="88" r="80" fill="#ed8b7818" stroke="${C.coral}" stroke-width="2"/><circle cx="370" cy="88" r="80" fill="#b7c8d618" stroke="${C.muted}" stroke-width="2"/><text x="170" y="16" fill="${C.coral}" font-size="14" font-weight="600">${a}</text><text x="410" y="16" fill="${C.muted}" font-size="14" font-weight="600">${b}</text>${col(onlyA, 190)}${col(shared, 300)}${col(onlyB, 410)}`;
  return `<svg viewBox="0 0 ${W} 180" class="mviz" role="img" aria-label="Venn diagram of prime factors. ${a} only: ${onlyA.join(', ') || 'none'}. Shared: ${shared.join(', ') || 'none'}. ${b} only: ${onlyB.join(', ') || 'none'}.">${s}</svg>`;
}

function pairsSVG(n) {
  const ds = []; for (let i = 1; i <= n; i++) if (n % i === 0) ds.push(i);
  const g = Math.min(52, (W - 60) / ds.length), x0 = (W - g * (ds.length - 1)) / 2;
  let s = '';
  for (let i = 0; i < Math.ceil(ds.length / 2); i++) {
    const j = ds.length - 1 - i;
    if (i === j) continue;
    const xa = x0 + i * g, xb = x0 + j * g, h = 14 + (j - i) * (90 / ds.length);
    s += `<path d="M${xa} 110 Q${(xa + xb) / 2} ${110 - h * 1.6} ${xb} 110" fill="none" stroke="${i % 2 ? C.muted : C.coral}" stroke-width="2"/>`;
  }
  ds.forEach((d, i) => { s += `<text x="${x0 + i * g}" y="132" text-anchor="middle" fill="${C.ink}" font-size="15" font-weight="600">${d}</text>`; });
  return `<svg viewBox="0 0 ${W} 146" class="mviz" role="img" aria-label="Factor pairs of ${n}: ${ds.slice(0, Math.ceil(ds.length / 2)).map((d) => `${d} × ${n / d}`).join(', ')}">${s}</svg>`;
}

function collapseHTML(stages) { return `<ol class="mcollapse">${stages.map((st, i) => `<li${i === stages.length - 1 ? ' class="final"' : ''}>${mathHTML(st)}</li>`).join('')}</ol>`; }
function machineHTML({ forward, input, output }) {
  return `<div class="mmachine"><span class="mm-io">${num(input)}</span>${forward.map(f => `<span class="mm-arrow" aria-hidden="true">→</span><span class="mm-op">${esc(f)}</span>`).join('')}<span class="mm-arrow" aria-hidden="true">→</span><span class="mm-io">${num(output)}</span></div><p class="mcap">Undo in reverse: ${[...forward].reverse().map(f => esc(invText(f))).join(' then ')}</p>`;
}
const invText = f => ({ '×': '÷', '÷': '×', '+': '−', '−': '+' }[f[0]] + f.slice(1));
function patternHTML(rows, editable = null) {
  return `<table class="mpattern"><caption class="sr">Multiplication pattern</caption><tbody>${rows.map(([a, v], i) => `<tr><td>${a < 0 ? `(${num(a)})` : a} × (−2)</td><td>=</td><td>${editable && editable.includes(i) ? `<span class="mp-slot" data-row="${i}">?</span>` : num(v)}</td></tr>`).join('')}</tbody></table>`;
}

export function visual(v) {
  if (!v) return '';
  switch (v.kind) {
    case 'line': return numberLine(v);
    case 'pattern': return patternHTML(v.rows) + '<p class="mcap">Each answer is 2 more than the one above.</p>';
    case 'collapse': return collapseHTML(v.stages);
    case 'machine': return machineHTML(v);
    case 'bars': return barSVG(v.bars) + (v.caption ? `<p class="mcap">${mathHTML(v.caption)}</p>` : '');
    case 'area': return areaSVG(v.a, v.b) + `<p class="mcap">Overlap: ${v.a[0] * v.b[0]} small rectangles out of ${v.a[1] * v.b[1]} in each whole</p>`;
    case 'fit': return fitSVG(v.whole, v.piece) + `<p class="mcap">How many ${v.piece[0]}/${v.piece[1]} pieces fit into ${v.whole[0]}/${v.whole[1]}?</p>`;
    case 'parts': return partsSVG(v);
    case 'pairs': return pairsSVG(v.n);
    case 'tree': return treeSVG(v.n, v.splits).svg;
    case 'venn': return vennSVG(v.a, v.b) + `<p class="mcap">HCF = ${gcd(v.a, v.b)} · LCM = ${lcm(v.a, v.b)}</p>`;
    default: return '';
  }
}

/* ───────── interactive investigations ───────── */
// mountModel(kind, ctx) — ctx: {panel, body, w (saved widget state), save(), feedback(text, error), done(), setTitle(text)}

const btn = (attr, label, extra = '') => `<button class="secondary mbtn" ${attr} ${extra}>${label}</button>`;
const progressDots = (n, doneCount, current) => `<div class="mdots" aria-label="Task ${Math.min(current + 1, n)} of ${n}">${Array.from({ length: n }, (_, i) => `<i class="${i < doneCount ? 'done' : i === current ? 'now' : ''}"></i>`).join('')}</div>`;

const NEG_TASKS = [
  { expr: '−3 + 5', start: -3, move: 5, why: { right: 'Adding a positive number moves right.', wrong: 'Adding a positive number moves right, towards bigger numbers.' } },
  { expr: '2 − 6', start: 2, move: -6, why: { right: 'Subtracting a positive number moves left.', wrong: 'Subtracting a positive number moves left. Crossing zero is fine: keep going.' } },
  { expr: '−1 − (−4)', start: -1, move: 4, why: { right: 'Subtracting a negative moves right: −1 − (−4) = −1 + 4.', wrong: 'Taking away a negative makes the result bigger, so it moves right. −1 − (−4) is the same as −1 + 4.' } },
  { expr: '−2 + (−3)', start: -2, move: -3, why: { right: 'Adding a negative moves left: −2 + (−3) = −2 − 3.', wrong: 'Adding a negative makes the result smaller, so it moves left. −2 + (−3) is the same as −2 − 3.' } },
];

function mountNegatives(ctx) {
  const w = ctx.w; w.neg ??= { task: 0, marker: 0, phase: 'start', done: [] }; w.pattern ??= { vals: {}, done: false };
  const st = w.neg;
  const render = () => {
    if (st.done.length < NEG_TASKS.length) {
      const T = NEG_TASKS[st.task];
      const end = T.start + T.move;
      const showJump = st.phase === 'landed';
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · NUMBER LINE ${progressDots(4, st.done.length, st.task)}</div><p class="mexpr">${esc(T.expr)}</p>${numberLine({ min: -8, max: 8, marker: st.phase === 'start' ? st.marker : T.start, jumps: showJump ? [[T.start, end]] : [], ghost: showJump ? end : null, h: 160 })}`;
      ctx.setTitle('Move along the number line.');
      if (st.phase === 'start') {
        ctx.body.innerHTML = `<p>Work out <strong>${esc(T.expr)}</strong> on the number line. First place the marker at the starting number.</p><div class="mstepper" role="group" aria-label="Move the marker">${btn('data-mv="-1"', '← Left')}<output aria-live="polite">${num(st.marker)}</output>${btn('data-mv="1"', 'Right →')}</div><button class="primary mbtn" data-act="start">This is the start</button><p class="micro-note">Tip: you can also use the arrow keys on the number line.</p>`;
      } else if (st.phase === 'direction') {
        ctx.body.innerHTML = `<p>Start: <strong>${num(T.start)}</strong>. Which way does <strong>${esc(T.expr.replace(/^\S+\s/, ''))}</strong> move you?</p><div class="choices">${btn('data-dir="left"', '← Left (smaller)')}${btn('data-dir="right"', 'Right (bigger) →')}</div>`;
      } else {
        ctx.body.innerHTML = `<p><strong>${esc(T.expr)} = ${num(end)}</strong></p><p>${esc(T.why.right)}</p><button class="primary mbtn" data-act="next">${st.task < 3 ? 'Next calculation →' : 'Continue to part B →'}</button>`;
      }
    } else {
      const rows = [[3, -6], [2, -4], [1, -2], [0, 0], [-1, 2], [-2, 4], [-3, 6]];
      const editable = [3, 4, 5, 6];
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · CONTINUE THE PATTERN</div>${patternHTML(rows, w.pattern.done ? null : editable)}<p class="mcap">${w.pattern.done ? 'Each step down the table adds 2, so negative × negative is positive.' : 'Look at how the answers change from row to row.'}</p>`;
      ctx.setTitle('Why is negative × negative positive?');
      if (w.pattern.done) {
        ctx.body.innerHTML = `<p>The answers go up by 2 every row, so the pattern forces (−1) × (−2) = 2. Two negatives multiply to give a positive.</p><p class="mdone">Investigation complete ✓</p>`;
        return;
      }
      ctx.body.innerHTML = `<p>Complete the table. The first three rows are done for you.</p>${editable.map(i => `<label class="field-label" for="pt${i}">${rows[i][0] < 0 ? `(${num(rows[i][0])})` : rows[i][0]} × (−2) =</label><input class="lab-input mnum" id="pt${i}" data-pt="${i}" inputmode="text" autocomplete="off" value="${esc(w.pattern.vals[i] ?? '')}">`).join('')}<button class="primary mbtn" data-act="pattern">Check the pattern</button>`;
    }
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-mv]').forEach(b => (b.onclick = () => { st.marker = Math.max(-8, Math.min(8, st.marker + Number(b.dataset.mv))); ctx.save(); render(); ctx.body.querySelector('[data-mv="' + b.dataset.mv + '"]')?.focus(); }));
    const svg = ctx.panel.querySelector('svg');
    if (svg && st.phase === 'start' && st.done.length < 4) { svg.tabIndex = 0; svg.onkeydown = e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); st.marker = Math.max(-8, Math.min(8, st.marker + (e.key === 'ArrowLeft' ? -1 : 1))); ctx.save(); render(); ctx.panel.querySelector('svg')?.focus(); } }; }
    const T = NEG_TASKS[st.task];
    ctx.body.querySelector('[data-act="start"]')?.addEventListener('click', () => {
      if (st.marker !== T.start) { ctx.feedback(`The calculation starts at ${num(T.start)}. ${st.marker > T.start ? 'Move left.' : 'Move right.'}`, true); return; }
      st.phase = 'direction'; ctx.feedback(''); ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-dir]').forEach(b => (b.onclick = () => {
      const right = T.move > 0;
      if ((b.dataset.dir === 'right') !== right) { ctx.feedback(T.why.wrong, true); return; }
      st.phase = 'landed'; ctx.feedback(''); ctx.save(); render();
    }));
    ctx.body.querySelector('[data-act="next"]')?.addEventListener('click', () => {
      if (!st.done.includes(st.task)) st.done.push(st.task);
      if (st.task < 3) { st.task++; st.phase = 'start'; st.marker = 0; }
      ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-pt]').forEach(inp => (inp.oninput = () => { w.pattern.vals[inp.dataset.pt] = inp.value; ctx.save(); }));
    ctx.body.querySelector('[data-act="pattern"]')?.addEventListener('click', () => {
      const want = { 3: 0, 4: 2, 5: 4, 6: 6 };
      const wrong = Object.entries(want).find(([i, v]) => { const p = parseNumber(w.pattern.vals[i]); return !p || !eq(p.value, F(v)); });
      if (wrong) {
        const i = Number(wrong[0]), p = parseNumber(w.pattern.vals[i]);
        ctx.feedback(p && eq(p.value, F(-want[i])) ? `Check row ${Number(i) + 1}: the answers are increasing by 2 each row, so after ${num(want[i] - 2)} comes ${num(want[i])}.` : `Check row ${Number(i) + 1}. Each answer is 2 more than the row above.`, true);
        return;
      }
      w.pattern.done = true; ctx.feedback('Correct: the pattern shows (−1) × (−2) = 2.'); ctx.save(); render(); ctx.done();
    });
  };
  if (st.done.length >= 4 && w.pattern.done) ctx.done();
  render();
}

// Order of operations: click the operation that must happen next.
const ORDER_TASKS = ['6 + 4 × 3 − 2', '20 ÷ 4 × 5', '( 2 + 3 ) ^ 2 − 4 × 3', '18 − 6 ÷ 3 + 2 ^ 3'];
const tokens = s => s.split(' ').map(x => (/^\d+$/.test(x) ? Number(x) : x));
const ap = (a, o, b) => (o === '+' ? a + b : o === '−' ? a - b : o === '×' ? a * b : o === '÷' ? a / b : a ** b);
function nextOp(tk) {
  // returns index of the operator that must be evaluated next
  let lo = 0, hi = tk.length - 1;
  for (let i = 0; i < tk.length; i++) if (tk[i] === '(') { let j = i + 1; while (tk[j] !== ')' && tk[j] !== '(') j++; if (tk[j] === ')') { lo = i + 1; hi = j - 1; break; } }
  for (const group of [['^'], ['×', '÷'], ['+', '−']]) for (let i = lo; i <= hi; i++) if (group.includes(tk[i])) return i;
  return -1;
}
function reduce(tk, i) {
  const out = [...tk.slice(0, i - 1), ap(tk[i - 1], tk[i], tk[i + 1]), ...tk.slice(i + 2)];
  for (let k = 0; k < out.length - 2; k++) if (out[k] === '(' && typeof out[k + 1] === 'number' && out[k + 2] === ')') out.splice(k, 3, out[k + 1]);
  return out;
}
const OPNAME = { '+': 'addition', '−': 'subtraction', '×': 'multiplication', '÷': 'division', '^': 'the power' };
function wrongReason(tk, chosen, right) {
  const inBr = (idx) => { let d = 0; for (let k = 0; k < idx; k++) d += tk[k] === '(' ? 1 : tk[k] === ')' ? -1 : 0; return d > 0; };
  if (inBr(right) && !inBr(chosen)) return 'The part in brackets has to be worked out first.';
  if (tk[right] === '^') return 'Powers come before ×, ÷, + and −.';
  const pr = o => (o === '×' || o === '÷' ? 2 : o === '^' ? 3 : 1);
  if (pr(tk[chosen]) < pr(tk[right])) return `${OPNAME[tk[right]][0].toUpperCase() + OPNAME[tk[right]].slice(1)} has higher priority than ${OPNAME[tk[chosen]]}.`;
  return `${OPNAME[tk[chosen]]} and ${OPNAME[tk[right]]} have equal priority, so work from left to right.`.replace(/^./, c => c.toUpperCase());
}
function tokHTML(tk, clickable) {
  let out = '';
  tk.forEach((x, i) => {
    if (x === '^') return;
    if (tk[i - 1] === '^') { out += `<sup>${clickable ? `<button class="mtok-op" data-op="${i - 1}" aria-label="Square: power ${x}">${x}</button>` : x}</sup>`; return; }
    if (typeof x === 'number') out += `<span class="mtok-n">${num(x)}</span>`;
    else if (x === '(' || x === ')') out += `<span class="mtok-b">${x}</span>`;
    else out += clickable ? `<button class="mtok-op" data-op="${i}" aria-label="${OPNAME[x]}">${x}</button>` : `<span class="mtok-o">${x}</span>`;
  });
  return out;
}

const MACHINES = [
  { ops: [['×', 4], ['−', 3]], out: 25 },
  { ops: [['+', 5], ['×', 2], ['−', 6]], out: 20 },
];
function mountOrder(ctx) {
  const w = ctx.w; w.order ??= { task: 0, tk: null, history: [], done: [] }; w.machine ??= { task: 0, chosen: [], answer: '', done: [] };
  const o = w.order, m = w.machine;
  const render = () => {
    if (o.done.length < ORDER_TASKS.length) {
      if (!o.tk) { o.tk = tokens(ORDER_TASKS[o.task]); ctx.save(); }
      const finished = o.tk.length === 1;
      ctx.setTitle('Which operation comes next?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · COLLAPSE THE CALCULATION ${progressDots(4, o.done.length, o.task)}</div><ol class="mcollapse">${o.history.map(h => `<li>${h}</li>`).join('')}<li class="${finished ? 'final' : 'live'}">${tokHTML(o.tk, false)}</li></ol>`;
      ctx.body.innerHTML = finished ? `<p><strong>${esc(ORDER_TASKS[o.task].replace(/ \^ 2/g, '²').replace(/\( /g, '(').replace(/ \)/g, ')'))} = ${num(o.tk[0])}</strong></p><button class="primary mbtn" data-act="onext">${o.task < 3 ? 'Next calculation →' : 'Continue to part B →'}</button>` : `<p>Select the operation that must be done next.</p><div class="mtokens" role="group" aria-label="Calculation">${tokHTML(o.tk, true)}</div>`;
    } else if (m.done.length < MACHINES.length) {
      const M = MACHINES[m.task];
      const inv = M.ops.map(([s, k]) => [{ '×': '÷', '+': '−', '−': '+', '÷': '×' }[s], k]);
      const options = [...inv, ...M.ops].map(([s, k]) => `${s} ${k}`).filter((v, i, a) => a.indexOf(v) === i).sort();
      const need = [...inv].reverse().map(([s, k]) => `${s} ${k}`);
      let val = M.out; for (const c of m.chosen) { const [s, k] = c.split(' '); val = ap(val, s, Number(k)); }
      ctx.setTitle('Run the machine backwards.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · INVERSE MACHINE ${progressDots(2, m.done.length, m.task)}</div><div class="mmachine"><span class="mm-io">?</span>${M.ops.map(([s, k]) => `<span class="mm-arrow" aria-hidden="true">→</span><span class="mm-op">${s} ${k}</span>`).join('')}<span class="mm-arrow" aria-hidden="true">→</span><span class="mm-io">${M.out}</span></div><div class="mmachine back"><span class="mm-io">${M.out}</span>${m.chosen.map(c => `<span class="mm-arrow" aria-hidden="true">→</span><span class="mm-op">${c}</span>`).join('')}${m.chosen.length === need.length ? `<span class="mm-arrow" aria-hidden="true">→</span><span class="mm-io">${num(val)}</span>` : ''}</div><p class="mcap">Top: the forward machine. Bottom: your reverse machine.</p>`;
      ctx.body.innerHTML = m.chosen.length < need.length
        ? `<p>Build the reverse machine, one step at a time, starting from the output ${M.out}.</p><div class="choices mgrid">${options.map(v => btn(`data-inv="${v}"`, v)).join('')}</div>${m.chosen.length ? btn('data-act="undo"', 'Undo last step') : ''}`
        : `<p>Reverse machine complete. What number went in?</p><label class="field-label" for="minp">Starting number</label><input class="lab-input mnum" id="minp" inputmode="numeric" autocomplete="off" value="${esc(m.answer)}"><button class="primary mbtn" data-act="mcheck">Check by running it forwards</button>`;
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div><ol class="mcollapse"><li>Brackets</li><li>Powers and roots</li><li>× and ÷, left to right</li><li class="final">+ and −, left to right</li></ol>`;
      ctx.body.innerHTML = '<p>You collapsed four calculations in the agreed order and reversed two machines by undoing the last step first.</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-op]').forEach(b => (b.onclick = () => {
      const i = Number(b.dataset.op), right = nextOp(o.tk);
      if (i !== right) {
        const would = ap(o.tk[i - 1] === ')' || o.tk[i + 1] === '(' ? NaN : o.tk[i - 1], o.tk[i], o.tk[i + 1]);
        ctx.feedback(`${wrongReason(o.tk, i, right)}${Number.isFinite(would) ? ` (Doing ${num(o.tk[i - 1])} ${o.tk[i] === '^' ? '^' : o.tk[i]} ${num(o.tk[i + 1])} first changes the answer.)` : ''}`, true);
        return;
      }
      o.history.push(tokHTML(o.tk, false));
      o.tk = reduce(o.tk, i);
      ctx.feedback(''); ctx.save(); render();
      ctx.body.querySelector('.mtok-op, [data-act]')?.focus();
    }));
    ctx.body.querySelector('[data-act="onext"]')?.addEventListener('click', () => { if (!o.done.includes(o.task)) o.done.push(o.task); if (o.task < 3) { o.task++; o.tk = null; o.history = []; } ctx.save(); render(); });
    const M = MACHINES[m.task];
    ctx.body.querySelectorAll('[data-inv]').forEach(b => (b.onclick = () => {
      const inv = M.ops.map(([s, k]) => `${{ '×': '÷', '+': '−', '−': '+', '÷': '×' }[s]} ${k}`).reverse();
      const want = inv[m.chosen.length];
      if (b.dataset.inv !== want) {
        const isForward = M.ops.some(([s, k]) => `${s} ${k}` === b.dataset.inv);
        ctx.feedback(isForward ? 'That repeats a forward step. Use the inverse operation to undo it.' : `That undoes a step, but not the right one yet. Undo the last forward step (${M.ops[M.ops.length - 1 - m.chosen.length].join(' ')}) first.`, true);
        return;
      }
      m.chosen.push(want); ctx.feedback(''); ctx.save(); render();
    }));
    ctx.body.querySelector('[data-act="undo"]')?.addEventListener('click', () => { m.chosen.pop(); ctx.save(); render(); });
    const inp = ctx.body.querySelector('#minp');
    if (inp) inp.oninput = () => { m.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="mcheck"]')?.addEventListener('click', () => {
      let val = M.out; for (const c of m.chosen) { const [s, k] = c.split(' '); val = ap(val, s, Number(k)); }
      const p = parseNumber(m.answer);
      if (!p) { ctx.feedback('Enter a number.', true); return; }
      let fwd = p.value.n / p.value.d; for (const [s, k] of M.ops) fwd = ap(fwd, s, k);
      if (fwd !== M.out) { ctx.feedback(`Running ${num(p.value.n / p.value.d)} forwards gives ${num(fwd)}, not ${M.out}. Read the last box of your reverse machine.`, true); return; }
      if (!m.done.includes(m.task)) m.done.push(m.task);
      ctx.feedback(`Correct: ${num(val)} → ${M.ops.map(([s, k]) => `${s} ${k}`).join(' → ')} → ${M.out}.`);
      if (m.task < MACHINES.length - 1) { m.task++; m.chosen = []; m.answer = ''; }
      ctx.save(); render();
      if (m.done.length === MACHINES.length && o.done.length === ORDER_TASKS.length) ctx.done();
    });
  };
  if (o.done.length === ORDER_TASKS.length && m.done.length === MACHINES.length) ctx.done();
  render();
}

// Fraction bars: re-split both bars until the pieces match, then combine.
const BAR_TASKS = [
  { a: [1, 3], op: '+', b: [1, 4] },
  { a: [2, 3], op: '−', b: [1, 4] },
  { a: [1, 2], op: '+', b: [3, 8] },
  { a: [5, 6], op: '+', b: [3, 4] },
];
function mountFractionBars(ctx) {
  const w = ctx.w; w.bars ??= { task: 0, ka: 1, kb: 1, matched: false, answer: '', done: [] };
  const st = w.bars;
  const render = () => {
    if (st.done.length >= BAR_TASKS.length) {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${barSVG([[1, 3], [1, 4], [4, 12], [3, 12], [7, 12]])}<p class="mcap">Only same-sized pieces can be added or subtracted.</p>`;
      ctx.body.innerHTML = '<p>In every case you made the pieces the same size first. The common denominator is a common multiple of both denominators; the lowest one keeps the numbers small.</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    const T = BAR_TASKS[st.task];
    const da = T.a[1] * st.ka, db = T.b[1] * st.kb, same = da === db;
    const result = T.op === '+' ? F(T.a[0] * T.b[1] + T.b[0] * T.a[1], T.a[1] * T.b[1]) : F(T.a[0] * T.b[1] - T.b[0] * T.a[1], T.a[1] * T.b[1]);
    ctx.setTitle('Make the pieces the same size.');
    const bars = [[T.a[0] * st.ka, da], [T.b[0] * st.kb, db]];
    if (st.matched) bars.push([T.op === '+' ? T.a[0] * st.ka + T.b[0] * st.kb : T.a[0] * st.ka - T.b[0] * st.kb, da]);
    ctx.panel.innerHTML = `<div class="mpanel-k">FRACTION BARS ${progressDots(4, st.done.length, st.task)}</div><p class="mexpr">${mathHTML(`{${T.a[0]}/${T.a[1]}} ${T.op} {${T.b[0]}/${T.b[1]}}`)}</p>${barSVG(bars)}<p class="mcap">${same ? 'Both bars now have pieces of the same size ✓' : `Piece sizes: 1/${da} and 1/${db}: not the same yet`}</p>`;
    if (!st.matched) {
      ctx.body.innerHTML = `<p>Split every piece of each bar into smaller equal pieces until both bars use the same size of piece.</p>
        <div class="mrow"><span>First bar: split each piece into</span><div class="mstepper">${btn('data-k="a,-1"', '−', 'aria-label="Fewer pieces in first bar"')}<output>${st.ka}</output>${btn('data-k="a,1"', '+', 'aria-label="More pieces in first bar"')}</div></div>
        <div class="mrow"><span>Second bar: split each piece into</span><div class="mstepper">${btn('data-k="b,-1"', '−', 'aria-label="Fewer pieces in second bar"')}<output>${st.kb}</output>${btn('data-k="b,1"', '+', 'aria-label="More pieces in second bar"')}</div></div>
        <button class="primary mbtn" data-act="match">${T.op === '+' ? 'Combine the bars' : 'Take away'}</button>`;
    } else {
      ctx.body.innerHTML = `<p>Both are now in ${da}ths. ${T.op === '+' ? 'Add' : 'Subtract'} the numbers of pieces, then write the answer in its simplest form.</p><label class="field-label" for="fbAns">${mathHTML(`{${T.a[0]}/${T.a[1]}} ${T.op} {${T.b[0]}/${T.b[1]}}`)} =</label><input class="lab-input mnum" id="fbAns" autocomplete="off" placeholder="e.g. 7/12 or 1 5/12" value="${esc(st.answer)}"><button class="primary mbtn" data-act="fcheck">Check</button>`;
    }
    bind(T, result, same, da);
  };
  const bind = (T, result, same, da) => {
    ctx.body.querySelectorAll('[data-k]').forEach(b => (b.onclick = () => { const [which, d] = b.dataset.k.split(','); const key = which === 'a' ? 'ka' : 'kb'; st[key] = Math.max(1, Math.min(8, st[key] + Number(d))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-k="${b.dataset.k}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="match"]')?.addEventListener('click', () => {
      if (!same) { ctx.feedback(`The pieces are different sizes (1/${T.a[1] * st.ka} and 1/${T.b[1] * st.kb}), so counting them together would be meaningless. Keep splitting until the denominators match.`, true); return; }
      st.matched = true;
      const L = lcm(T.a[1], T.b[1]);
      ctx.feedback(da === L ? `Common denominator ${da}: the lowest possible ✓` : `${da} works as a common denominator. The lowest common multiple, ${L}, would keep the numbers smaller.`);
      ctx.save(); render();
    });
    const inp = ctx.body.querySelector('#fbAns');
    if (inp) inp.oninput = () => { st.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="fcheck"]')?.addEventListener('click', () => {
      const p = parseNumber(st.answer);
      if (!p) { ctx.feedback('Write a fraction such as 7/12, or a mixed number such as 1 5/12.', true); return; }
      if (!eq(p.value, result)) {
        const naive = F(T.op === '+' ? T.a[0] + T.b[0] : T.a[0] - T.b[0], T.a[1] + T.b[1]);
        ctx.feedback(eq(p.value, naive) ? 'That adds the tops and the bottoms. Count the same-sized pieces shown in the bars.' : `Count the shaded pieces in the bottom bar: they are ${da}ths.`, true);
        return;
      }
      const s = p.shape;
      const simplest = s.kind === 'integer' || (s.kind === 'mixed' ? gcd(s.n, s.d) === 1 && s.n < s.d : gcd(s.n, s.d) === 1);
      if (!simplest) { ctx.feedback('Right value. Now write it in its simplest form.', true); return; }
      if (!st.done.includes(st.task)) st.done.push(st.task);
      ctx.feedback('Correct ✓');
      if (st.task < BAR_TASKS.length - 1) Object.assign(st, { task: st.task + 1, ka: 1, kb: 1, matched: false, answer: '' });
      ctx.save(); render();
      if (st.done.length === BAR_TASKS.length) ctx.done();
    });
  };
  if (st.done.length === BAR_TASKS.length) ctx.done();
  render();
}

// Area model for multiplication, then "how many fit" for division.
const AREA_TASKS = [{ a: [2, 3], b: [3, 4] }, { a: [3, 5], b: [1, 2] }];
const FIT_TASKS = [{ whole: [9, 4], piece: [3, 4] }, { whole: [3, 2], piece: [3, 8] }];
function mountFractionArea(ctx) {
  const w = ctx.w; w.area ??= { task: 0, sa: 0, sb: 0, answer: '', done: [] }; w.fit ??= { task: 0, placed: 0, done: [] };
  const A = w.area, Fi = w.fit;
  const render = () => {
    if (A.done.length < AREA_TASKS.length) {
      const T = AREA_TASKS[A.task];
      const ready = A.sa === T.a[0] && A.sb === T.b[0];
      ctx.setTitle('Shade a fraction of a fraction.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · AREA MODEL ${progressDots(2, A.done.length, A.task)}</div><p class="mexpr">${mathHTML(`{${T.a[0]}/${T.a[1]}} × {${T.b[0]}/${T.b[1]}}`)}</p>${areaSVG([T.a[0], T.a[1]], [T.b[0], T.b[1]], { shadeA: A.sa, shadeB: A.sb, showOverlap: true })}`;
      ctx.body.innerHTML = `<p>The square is one whole, split into ${T.a[1]} columns and ${T.b[1]} rows. Shade ${mathHTML(`{${T.a[0]}/${T.a[1]}}`)} of the columns and ${mathHTML(`{${T.b[0]}/${T.b[1]}}`)} of the rows.</p>
        <div class="mrow"><span>Columns shaded</span><div class="mstepper">${btn('data-s="sa,-1"', '−', 'aria-label="Fewer columns"')}<output>${A.sa} / ${T.a[1]}</output>${btn('data-s="sa,1"', '+', 'aria-label="More columns"')}</div></div>
        <div class="mrow"><span>Rows shaded</span><div class="mstepper">${btn('data-s="sb,-1"', '−', 'aria-label="Fewer rows"')}<output>${A.sb} / ${T.b[1]}</output>${btn('data-s="sb,1"', '+', 'aria-label="More rows"')}</div></div>
        ${ready ? `<label class="field-label" for="arAns">The overlap (solid cells with a dot) is what fraction of the whole square?</label><input class="lab-input mnum" id="arAns" autocomplete="off" placeholder="e.g. 6/12" value="${esc(A.answer)}"><button class="primary mbtn" data-act="acheck">Check</button>` : '<p class="micro-note">The overlap is the fraction of a fraction.</p>'}`;
    } else if (Fi.done.length < FIT_TASKS.length) {
      const T = FIT_TASKS[Fi.task];
      const fits = (T.whole[0] * T.piece[1]) / (T.whole[1] * T.piece[0]);
      ctx.setTitle('How many pieces fit?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · DIVISION AS FITTING ${progressDots(2, Fi.done.length, Fi.task)}</div><p class="mexpr">${mathHTML(`{${T.whole[0]}/${T.whole[1]}} ÷ {${T.piece[0]}/${T.piece[1]}}`)}</p>${fitSVG(T.whole, T.piece, Fi.placed)}`;
      ctx.body.innerHTML = `<p>${mathHTML(`{${T.whole[0]}/${T.whole[1]}} ÷ {${T.piece[0]}/${T.piece[1]}}`)} asks how many pieces of length ${mathHTML(`{${T.piece[0]}/${T.piece[1]}}`)} fit exactly into ${mathHTML(`{${T.whole[0]}/${T.whole[1]}}`)}. Lay pieces along the bar.</p><div class="mrow"><span>Pieces placed</span><div class="mstepper">${btn('data-f="-1"', '−', 'aria-label="Remove a piece"')}<output>${Fi.placed}</output>${btn('data-f="1"', '+', 'aria-label="Add a piece"')}</div></div><button class="primary mbtn" data-act="fitcheck">The bar is exactly filled</button>`;
      bind(null, fits);
      return;
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${areaSVG([2, 3], [3, 4])}<p class="mcap">{2/3} × {3/4} = {6/12} = {1/2} · {9/4} ÷ {3/4} = 3</p>`.replace(/\{(\d+)\/(\d+)\}/g, '$1/$2');
      ctx.body.innerHTML = '<p>Multiplying: the overlap is numerator × numerator pieces out of denominator × denominator. Dividing: count how many of the second fraction fit into the first, which is the same as multiplying by its reciprocal.</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    bind(AREA_TASKS[A.task]);
  };
  const bind = (T, fits) => {
    ctx.body.querySelectorAll('[data-s]').forEach(b => (b.onclick = () => { const [k, d] = b.dataset.s.split(','); const max = k === 'sa' ? T.a[1] : T.b[1]; A[k] = Math.max(0, Math.min(max, A[k] + Number(d))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-s="${b.dataset.s}"]`)?.focus(); }));
    const inp = ctx.body.querySelector('#arAns');
    if (inp) inp.oninput = () => { A.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="acheck"]')?.addEventListener('click', () => {
      const p = parseNumber(A.answer), want = F(T.a[0] * T.b[0], T.a[1] * T.b[1]);
      if (!p) { ctx.feedback('Write a fraction such as 6/12.', true); return; }
      if (!eq(p.value, want)) { ctx.feedback(`Count the cells with a dot (${T.a[0] * T.b[0]}) and all the small rectangles in the square (${T.a[1] * T.b[1]}).`, true); return; }
      if (!A.done.includes(A.task)) A.done.push(A.task);
      ctx.feedback(`Correct: ${T.a[0]} × ${T.b[0]} = ${T.a[0] * T.b[0]} pieces out of ${T.a[1]} × ${T.b[1]} = ${T.a[1] * T.b[1]}.`);
      if (A.task < AREA_TASKS.length - 1) Object.assign(A, { task: A.task + 1, sa: 0, sb: 0, answer: '' });
      ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-f]').forEach(b => (b.onclick = () => { Fi.placed = Math.max(0, Math.min(8, Fi.placed + Number(b.dataset.f))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-f="${b.dataset.f}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="fitcheck"]')?.addEventListener('click', () => {
      if (Fi.placed < fits) { ctx.feedback('There is still space left in the bar. Add another piece.', true); return; }
      if (Fi.placed > fits) { ctx.feedback('The last piece sticks out past the end of the bar. Remove one.', true); return; }
      const T2 = FIT_TASKS[Fi.task];
      if (!Fi.done.includes(Fi.task)) Fi.done.push(Fi.task);
      ctx.feedback(`Correct: ${fits} pieces fit, so ${T2.whole[0]}/${T2.whole[1]} ÷ ${T2.piece[0]}/${T2.piece[1]} = ${fits}. Check: ${T2.whole[0]}/${T2.whole[1]} × ${T2.piece[1]}/${T2.piece[0]} = ${fits}.`);
      if (Fi.task < FIT_TASKS.length - 1) Object.assign(Fi, { task: Fi.task + 1, placed: 0 });
      ctx.save(); render();
      if (Fi.done.length === FIT_TASKS.length) ctx.done();
    });
  };
  if (A.done.length === AREA_TASKS.length && Fi.done.length === FIT_TASKS.length) ctx.done();
  render();
}

// Factor trees (two different first splits) and a Venn diagram for HCF/LCM.
const TREE_N = 72, VENN = [84, 120];
function factorPairs(n) { const out = []; for (let i = 2; i * i <= n; i++) if (n % i === 0) out.push([i, n / i]); return out; }
function mountFactorTree(ctx) {
  const w = ctx.w; w.tree ??= { round: 0, splits: {}, sel: 'r', firsts: [], done: [] }; w.venn ??= { picked: [], hcf: '', lcm: '', placed: false, done: false };
  const T = w.tree, V = w.venn;
  const render = () => {
    if (T.done.length < 2) {
      const { svg, leaves } = treeSVG(TREE_N, T.splits, { selected: T.sel });
      const open = leaves.filter(l => !isP(l.v));
      if (!open.some(l => l.path === T.sel)) T.sel = open[0]?.path ?? null;
      ctx.setTitle(T.round === 0 ? 'Build a factor tree.' : 'Build it again, a different way.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · FACTOR TREE ${T.round + 1} OF 2</div>${treeSVG(TREE_N, T.splits, { selected: T.sel }).svg}<p class="mcap">Primes are circled. ${T.firsts.length ? `First tree started ${T.firsts[0].join(' × ')}.` : ''}</p>`;
      if (!open.length) {
        const primes = leaves.map(l => l.v).sort((a, b) => a - b);
        ctx.body.innerHTML = `<p>Every branch ends in a prime: <strong>${primes.join(' × ')}</strong> = ${mathHTML(primesMarkup(primeFactors(TREE_N)))}.</p><button class="primary mbtn" data-act="tnext">${T.round === 0 ? 'Build a second tree →' : 'Compare the trees →'}</button>`;
      } else {
        const node = leaves.find(l => l.path === T.sel);
        ctx.body.innerHTML = `<p>${T.round === 1 ? `Start with a different pair from ${T.firsts[0].join(' × ')}. ` : ''}Choose a number that is not prime, then split it into a factor pair.</p><div class="choices mgrid" role="group" aria-label="Numbers to split">${open.map(l => `<button class="choice ${l.path === T.sel ? 'selected' : ''}" data-node="${l.path}" aria-pressed="${l.path === T.sel}">${l.v}</button>`).join('')}</div><p class="field-label">Split ${node.v} into</p><div class="choices mgrid">${factorPairs(node.v).map(([a, b]) => btn(`data-pair="${a},${b}"`, `${a} × ${b}`)).join('')}</div>`;
      }
    } else if (!V.done) {
      const [a, b] = VENN;
      const la = Object.entries(primeFactors(a)).flatMap(([p, k]) => Array(k).fill(Number(p)));
      const lb = Object.entries(primeFactors(b)).flatMap(([p, k]) => Array(k).fill(Number(p)));
      ctx.setTitle('Sort the primes into a Venn diagram.');
      if (!V.placed) {
        ctx.panel.innerHTML = `<div class="mpanel-k">PART B · HCF AND LCM</div><p class="mexpr">${a} = ${mathHTML(la.join(' × '))}<br>${b} = ${mathHTML(lb.join(' × '))}</p>${vennSVG(a, b, { shared: V.picked.map(i => la[i]), onlyA: la.filter((_, i) => !V.picked.includes(i)), onlyB: (() => { const r = [...lb]; V.picked.forEach(i => { const j = r.indexOf(la[i]); if (j >= 0) r.splice(j, 1); }); return r; })() })}`;
        ctx.body.innerHTML = `<p>Select each prime factor of ${a} that can be matched with one in ${b}. Matched primes move to the shared middle.</p><div class="choices mgrid" role="group" aria-label="Prime factors of ${a}">${la.map((p, i) => `<button class="choice ${V.picked.includes(i) ? 'selected' : ''}" data-pick="${i}" aria-pressed="${V.picked.includes(i)}">${p}</button>`).join('')}</div><button class="primary mbtn" data-act="vplace">These are shared</button>`;
      } else {
        ctx.panel.innerHTML = `<div class="mpanel-k">PART B · HCF AND LCM</div>${vennSVG(a, b)}`;
        ctx.body.innerHTML = `<p>Use the diagram.</p><label class="field-label" for="vh">HCF of ${a} and ${b} (multiply the middle)</label><input class="lab-input mnum" id="vh" inputmode="numeric" autocomplete="off" value="${esc(V.hcf)}"><label class="field-label" for="vl">LCM of ${a} and ${b} (multiply everything)</label><input class="lab-input mnum" id="vl" inputmode="numeric" autocomplete="off" value="${esc(V.lcm)}"><button class="primary mbtn" data-act="vcheck">Check</button>`;
      }
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${vennSVG(...VENN)}<p class="mcap">HCF = ${gcd(...VENN)} · LCM = ${lcm(...VENN)}</p>`;
      ctx.body.innerHTML = `<p>Two different trees for ${TREE_N} gave the same primes, ${mathHTML(primesMarkup(primeFactors(TREE_N)))}. The Venn diagram turns prime factors into the HCF (shared) and LCM (everything).</p><p class="mdone">Investigation complete ✓</p>`;
      return;
    }
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-node]').forEach(b => (b.onclick = () => { T.sel = b.dataset.node; ctx.save(); render(); }));
    ctx.body.querySelectorAll('[data-pair]').forEach(b => (b.onclick = () => {
      const pair = b.dataset.pair.split(',').map(Number);
      if (T.sel === 'r' && T.round === 1 && T.firsts[0] && T.firsts[0].join() === pair.join()) { ctx.feedback(`Your first tree started ${pair.join(' × ')}. Choose a different first pair to test whether the primes change.`, true); return; }
      T.splits[T.sel] = pair; ctx.feedback(''); ctx.save(); render();
    }));
    ctx.body.querySelector('[data-act="tnext"]')?.addEventListener('click', () => {
      if (!T.done.includes(T.round)) { T.done.push(T.round); T.firsts.push(T.splits.r); }
      if (T.round === 0) { T.round = 1; T.splits = {}; T.sel = 'r'; ctx.feedback(''); }
      else ctx.feedback(`Both trees end in the same primes: ${primesMarkup(primeFactors(TREE_N)).replace(/\^(\d)/g, (_, k) => ({ 2: '²', 3: '³' })[k] || '^' + k)}. Every number has exactly one prime factorisation.`);
      ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-pick]').forEach(b => (b.onclick = () => { const i = Number(b.dataset.pick); V.picked = V.picked.includes(i) ? V.picked.filter(x => x !== i) : [...V.picked, i]; ctx.feedback(''); ctx.save(); render(); }));
    ctx.body.querySelector('[data-act="vplace"]')?.addEventListener('click', () => {
      const [a, b] = VENN;
      const la = Object.entries(primeFactors(a)).flatMap(([p, k]) => Array(k).fill(Number(p)));
      const lb = Object.entries(primeFactors(b)).flatMap(([p, k]) => Array(k).fill(Number(p)));
      const picked = V.picked.map(i => la[i]).sort((x, y) => x - y);
      const pool = [...lb]; let ok = true;
      for (const p of picked) { const j = pool.indexOf(p); if (j < 0) ok = false; else pool.splice(j, 1); }
      const shared = Object.entries(primeFactors(gcd(a, b))).flatMap(([p, k]) => Array(k).fill(Number(p)));
      if (!ok) { ctx.feedback(`${b} does not have enough of that prime to match. A prime can only be shared if it appears in both lists.`, true); return; }
      if (picked.length < shared.length) { ctx.feedback(`Some primes can still be matched. Check each prime of ${a} against the list for ${b} again.`, true); return; }
      V.placed = true; ctx.feedback(`Shared: ${shared.join(' × ')} ✓`); ctx.save(); render();
    });
    const h = ctx.body.querySelector('#vh'), l = ctx.body.querySelector('#vl');
    if (h) h.oninput = () => { V.hcf = h.value; ctx.save(); };
    if (l) l.oninput = () => { V.lcm = l.value; ctx.save(); };
    ctx.body.querySelector('[data-act="vcheck"]')?.addEventListener('click', () => {
      const [a, b] = VENN, H = gcd(a, b), L = lcm(a, b);
      const ph = parseNumber(V.hcf), pl = parseNumber(V.lcm);
      if (!ph || !pl) { ctx.feedback('Enter both numbers.', true); return; }
      const hv = ph.value.n / ph.value.d, lv = pl.value.n / pl.value.d;
      if (hv !== H) { ctx.feedback(hv === L ? 'That is the LCM. The HCF only uses the shared middle.' : `Multiply only the shared primes in the middle: ${Object.entries(primeFactors(H)).flatMap(([p, k]) => Array(k).fill(p)).join(' × ')}.`, true); return; }
      if (lv !== L) { ctx.feedback(lv === a * b ? `${a} × ${b} counts the shared primes twice. Multiply each prime in the diagram once.` : 'Multiply every prime in the diagram, each once.', true); return; }
      V.done = true; ctx.feedback(`Correct: HCF ${H}, LCM ${L}. Check: ${H} × ${L} = ${H * L} = ${a} × ${b}.`); ctx.save(); render(); ctx.done();
    });
  };
  if (T.done.length === 2 && V.done) ctx.done();
  render();
}

export const MODELS = { negatives: mountNegatives, order: mountOrder, 'fraction-bars': mountFractionBars, 'fraction-area': mountFractionArea, 'factor-tree': mountFactorTree };
export function mountModel(kind, ctx) { (MODELS[kind] || (() => { ctx.body.textContent = 'Model unavailable.'; }))(ctx); }
export { numberLine, barSVG, areaSVG, treeSVG, vennSVG, nextOp, reduce, tokens, C, btn, progressDots };
