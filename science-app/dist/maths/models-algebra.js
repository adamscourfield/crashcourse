// Visual models and investigations for Algebra batch 1.
// visual4() draws worked-example diagrams; MODELS4 holds the six investigations.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, num, parseNumber, fracMarkup } from './frac.js?v=20261023-maths-r9';
import { C, btn, progressDots } from './models-number.js?v=20261023-maths-r9';
import { markAlgebra, equivalent, algebraHint } from './algebra.js?v=20261023-maths-r9';

const W = 600;
const fm = f => (f.d === 1 ? num(f.n) : fracMarkup(f));
const vOf = raw => { const p = parseNumber(raw); return p ? p.value : null; };
const M = s => mathHTML(s);

/* ───────── static visuals ───────── */
function machineHTML({ input = 'n', ops, output }) {
  return `<div class="mmachine"><span class="mm-io">${M(input)}</span>${ops.map(o => `<span class="mm-arrow" aria-hidden="true">→</span><span class="mm-op">${M(o)}</span>`).join('')}<span class="mm-arrow" aria-hidden="true">→</span><span class="mm-io">${M(output)}</span></div>`;
}
function termsHTML({ groups }) {
  return `<div class="mterm-groups">${groups.map(g => `<div class="mterm-group"><span>${M(g.label)}</span><div>${g.terms.map(t => `<i>${M(t)}</i>`).join('')}</div><b>${M(g.total)}</b></div>`).join('')}</div>`;
}
/** Area rectangle: height label, widths split into parts, optional cell labels. */
function areaRect({ h, parts, cells = [], hs = null }) {
  const rowsH = hs || [h], x0 = 110, y0 = 34, totalW = 420;
  const ws = parts.map((_, i) => (i === 0 && parts.length > 1 ? totalW * 0.62 : parts.length > 1 ? totalW * 0.38 / (parts.length - 1) : totalW));
  const rh = rowsH.length > 1 ? [110, 60] : [120];
  let s = '', x = x0;
  parts.forEach((p, j) => { s += `<text x="${x + ws[j] / 2}" y="${y0 - 10}" text-anchor="middle" fill="${C.muted}" font-size="16">${esc(p)}</text>`; x += ws[j]; });
  let y = y0;
  rowsH.forEach((hh, i) => {
    s += `<text x="${x0 - 12}" y="${y + rh[i] / 2 + 6}" text-anchor="end" fill="${C.muted}" font-size="16">${esc(hh)}</text>`;
    x = x0;
    parts.forEach((p, j) => {
      const label = cells[i * parts.length + j];
      s += `<rect x="${x}" y="${y}" width="${ws[j]}" height="${rh[i]}" fill="${label ? '#f0b4a633' : '#f8f6f20d'}" stroke="${C.cream}" stroke-width="1.5"/>`;
      if (label) s += `<text x="${x + ws[j] / 2}" y="${y + rh[i] / 2 + 7}" text-anchor="middle" fill="${C.cream}" font-size="20" font-weight="600">${esc(label.replace(/\^2/g, '²').replace(/\^3/g, '³'))}</text>`;
      x += ws[j];
    });
    y += rh[i];
  });
  const lab = `Rectangle ${rowsH.join(' plus ')} by ${parts.join(' plus ')}${cells.length ? '; parts ' + cells.filter(Boolean).join(', ') : ''}`;
  return `<svg viewBox="0 0 ${W} ${y + 16}" class="mviz" role="img" aria-label="${esc(lab.replace(/\^2/g, ' squared'))}">${s}</svg>`;
}
function balanceSVG({ left, right, tilt = 0 }) {
  const t = Math.max(-1, Math.min(1, tilt)) * 8;
  const s = `<polygon points="300,190 280,220 320,220" fill="${C.muted}"/><line x1="120" y1="${120 + t}" x2="480" y2="${120 - t}" stroke="${C.cream}" stroke-width="4" stroke-linecap="round"/><line x1="300" y1="120" x2="300" y2="190" stroke="${C.cream}" stroke-width="4"/>
<rect x="60" y="${70 + t}" width="200" height="46" rx="12" fill="#f0b4a633" stroke="${C.coral}"/><rect x="340" y="${70 - t}" width="200" height="46" rx="12" fill="#f0b4a633" stroke="${C.coral}"/>
<text x="160" y="${101 + t}" text-anchor="middle" fill="${C.cream}" font-size="22" font-weight="600">${esc(left)}</text><text x="440" y="${101 - t}" text-anchor="middle" fill="${C.cream}" font-size="22" font-weight="600">${esc(right)}</text>`;
  return `<svg viewBox="0 0 ${W} 230" class="mviz" role="img" aria-label="Balance: ${esc(left)} on the left equals ${esc(right)} on the right">${s}</svg>`;
}
function tableHTML({ head, rows }) {
  return `<table class="mtable"><thead><tr>${head.map(h => `<th>${M(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${M(String(c))}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
export function visual4(v) {
  if (!v) return '';
  switch (v.kind) {
    case 'algmachine': return machineHTML(v) + (v.caption ? `<p class="mcap">${M(v.caption)}</p>` : '');
    case 'terms': return termsHTML(v);
    case 'arearect': return areaRect(v) + (v.caption ? `<p class="mcap">${M(v.caption)}</p>` : '');
    case 'balance': return balanceSVG(v) + (v.caption ? `<p class="mcap">${M(v.caption)}</p>` : '');
    case 'table': return tableHTML(v) + (v.caption ? `<p class="mcap">${M(v.caption)}</p>` : '');
    case 'rearr': return machineHTML({ input: v.subject, ops: v.forward, output: v.result }) + machineHTML({ input: v.result, ops: v.reverse, output: v.subject }) + `<p class="mcap">Top: what happens to ${esc(v.subject)}. Bottom: undo it in reverse order.</p>`;
    default: return '';
  }
}

/* ───────── shared bits ───────── */
const algInput = (id, value, label, small = false) => `<label class="field-label" for="${id}">${label}</label><input class="lab-input mtext${small ? ' msmall' : ''}" id="${id}" autocomplete="off" spellcheck="false" value="${esc(value || '')}">`;
const doneCard = (ctx, panelHTML, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panelHTML}`; ctx.body.innerHTML = `<p>${text}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };

/* ───────── 1. Expression machine (A1, A2) ───────── */
const OPS = { '×2': { show: '× 2', f: n => 2 * n }, '+5': { show: '+ 5', f: n => n + 5 }, '−5': { show: '− 5', f: n => n - 5 }, '÷2': { show: '÷ 2', f: n => n / 2 }, sq: { show: 'square', f: n => n * n } };
function exprOf(ops) {
  let e = 'n', single = true;
  for (const o of ops) {
    if (o === '×2') { e = single ? `2${e}` : `2(${e})`; }
    else if (o === '+5') { e = `${e} + 5`; single = false; continue; }
    else if (o === '−5') { e = `${e} − 5`; single = false; continue; }
    else if (o === '÷2') { e = single ? `{${e}/2}` : `{${e}/2}`; }
    else if (o === 'sq') { e = single && !e.includes('/') ? (e === 'n' ? 'n^2' : `(${e})^2`) : `(${e})^2`; }
    single = true;
  }
  return e;
}
const MACHINE_TASKS = [{ target: '2n + 5', want: ['×2', '+5'], f: n => 2 * n + 5 }, { target: '2(n + 5)', want: ['+5', '×2'], f: n => 2 * (n + 5) }];
function mountExprMachine(ctx) {
  const w = ctx.w; w.mach ??= { task: 0, ops: [], done: [] }; w.sub ??= { answer: '', done: false };
  const S = w.mach, B = w.sub;
  const run = ops => n => ops.reduce((v, o) => OPS[o].f(v), n);
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (S.done.length < MACHINE_TASKS.length) {
      const T = MACHINE_TASKS[S.task], f = run(S.ops);
      ctx.setTitle(`Build a machine for ${T.target}.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · EXPRESSION MACHINE ${progressDots(2, S.done.length, S.task)}</div>${machineHTML({ input: 'n', ops: S.ops.map(o => OPS[o].show), output: S.ops.length ? exprOf(S.ops) : '?' })}${S.ops.length ? tableHTML({ head: ['n', 'your machine', T.target], rows: [1, 2, 3].map(n => [n, f(n), T.f(n)]) }) : '<p class="mcap">Add operations in order. The table compares your machine with the target.</p>'}`;
      ctx.body.innerHTML = `<p>Start with a number n. Choose operations in the order the machine applies them, so that the output is <strong>${M(T.target)}</strong>.</p><div class="mbtns">${Object.keys(OPS).map(o => btn(`data-op="${o}"`, OPS[o].show)).join('')}</div><div class="mbtns">${btn('data-act="undo"', 'Undo last')}${btn('data-act="clear"', 'Clear')}</div><button class="primary mbtn" data-act="check">Check machine</button>`;
    } else if (!B.done) {
      ctx.setTitle('Substitute.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · SUBSTITUTE</div>${machineHTML({ input: 'n', ops: ['+ 5', '× 2'], output: '2(n + 5)' })}<p class="mcap">Brackets first, then multiply.</p>`;
      ctx.body.innerHTML = `<p>Work out the value of 2(n + 5) when n = −3.</p><label class="field-label" for="subAns">Value</label><input class="lab-input mnum" id="subAns" inputmode="numeric" autocomplete="off" value="${esc(B.answer)}"><button class="primary mbtn" data-act="subcheck">Check</button>`;
    } else return doneCard(ctx, machineHTML({ input: 'n', ops: ['× 2', '+ 5'], output: '2n + 5' }) + machineHTML({ input: 'n', ops: ['+ 5', '× 2'], output: '2(n + 5)' }), 'The order of operations is written into the notation. 2n + 5 multiplies first; 2(n + 5) adds first, and the brackets show that the whole of n + 5 is doubled. Substituting n = −3: 2(−3 + 5) = 2 × 2 = 4.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-op]').forEach(b => (b.onclick = () => { if (S.ops.length >= 4) { ctx.feedback('Four operations is plenty. Undo or clear to try another order.', true); return; } S.ops.push(b.dataset.op); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-op="${b.dataset.op}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="undo"]')?.addEventListener('click', () => { S.ops.pop(); ctx.save(); render(); });
    ctx.body.querySelector('[data-act="clear"]')?.addEventListener('click', () => { S.ops = []; ctx.save(); render(); });
    ctx.body.querySelector('[data-act="check"]')?.addEventListener('click', () => {
      const T = MACHINE_TASKS[S.task], f = run(S.ops);
      if (!S.ops.length) { ctx.feedback('Add at least one operation.', true); return; }
      const same = [1, 2, 3, 7, -4].every(n => Math.abs(f(n) - T.f(n)) < 1e-9);
      if (!same) {
        const swapped = S.ops.join() === [...T.want].reverse().join();
        ctx.feedback(swapped ? `Same operations, wrong order. Your machine makes ${M(exprOf(S.ops))}. For ${M(T.target)}, ${T.want[0] === '×2' ? 'multiply first, then add 5' : 'add 5 first, then the whole result is doubled'}.` : `Your machine makes ${M(exprOf(S.ops))}. Compare the table: the outputs should match ${M(T.target)} for every n.`, true);
        return;
      }
      if (!S.done.includes(S.task)) S.done.push(S.task);
      ctx.feedback(`Your machine gives ${M(T.target)} for every n. ✓`);
      S.task = Math.min(S.task + 1, MACHINE_TASKS.length - 1); S.ops = [];
      ctx.save(); setTimeout(render, 700);
    });
    const inp = ctx.body.querySelector('#subAns'); if (inp) inp.oninput = () => { B.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="subcheck"]')?.addEventListener('click', () => {
      const v = vOf(B.answer);
      if (!v) { ctx.feedback('Enter a number.', true); return; }
      if (eq(v, F(-1))) { ctx.feedback('−1 is 2n + 5. In 2(n + 5) the bracket comes first: −3 + 5 = 2, then × 2.', true); return; }
      if (eq(v, F(16))) { ctx.feedback('Check the sign: −3 + 5 = 2, not 8.', true); return; }
      if (!eq(v, F(4))) { ctx.feedback('Substitute n = −3 into the bracket first: −3 + 5, then multiply by 2.', true); return; }
      B.done = true; ctx.save(); render();
    });
  };
  render();
}

/* ───────── 2. Like-term sorter and index chips (A4) ───────── */
const TILES = [['3a', 'a'], ['2b', 'b'], ['−a', 'a'], ['5', 'n'], ['a^2', 'a2'], ['4b', 'b'], ['−2', 'n'], ['2a^2', 'a2']];
const BINS = [['a', 'a terms'], ['b', 'b terms'], ['a2', 'a^2 terms'], ['n', 'numbers']];
const BIN_WHY = { a: 'An a term has exactly one a, such as 3a or −a.', b: 'A b term has one b, such as 2b.', a2: 'a^2 means a × a: it is not the same as a.', n: 'A number term has no letters.' };
const INDEX_TASKS = [{ show: 'x^3 × x^4', groups: [3, 4], options: ['x^7', 'x^12', '2x^7'], right: 'x^7', why: { 'x^12': 'Count the x chips: 3 + 4 = 7 of them, so x^7. Indices add when multiplying.', '2x^7': 'All the chips join into one power of x; there is no 2 in front.' } }, { show: '(x^3)^2', groups: [3, 3], options: ['x^6', 'x^5', 'x^9'], right: 'x^6', why: { 'x^5': '(x^3)^2 is x^3 × x^3: two groups of three x chips, 6 in all.', 'x^9': 'Two groups of three is 3 × 2 = 6 chips, not 3^2.' } }];
function mountTermSorter(ctx) {
  const w = ctx.w; w.sort ??= { placed: {}, pick: null, answer: '', done: false }; w.idx ??= { task: 0, done: [] };
  const S = w.sort, I = w.idx;
  const allPlaced = () => TILES.every((_, i) => S.placed[i]);
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!S.done) {
      ctx.setTitle(allPlaced() ? 'Write the simplified expression.' : 'Sort the terms.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · LIKE TERMS</div><p class="mexpr">${M('3a + 2b − a + 5 + a^2 + 4b − 2 + 2a^2')}</p><div class="mbins">${BINS.map(([k, label]) => `<div class="mbin"><span>${M(label)}</span><div>${TILES.map((t, i) => (S.placed[i] === k ? `<i>${M(t[0])}</i>` : '')).join('')}</div></div>`).join('')}</div>`;
      ctx.body.innerHTML = allPlaced()
        ? `<p>Every term is in its group. Collect each group and write the simplified expression.</p>${algInput('sortAns', S.answer, 'Simplified expression')}<button class="primary mbtn" data-act="sortcheck">Check</button>`
        : `<p>Select a term, then the group it belongs to. Like terms have exactly the same letters and powers.</p><div class="mtiles">${TILES.map((t, i) => (S.placed[i] ? '' : `<button class="choice mtile ${S.pick === i ? 'selected' : ''}" data-tile="${i}" aria-pressed="${S.pick === i}">${M(t[0])}</button>`)).join('')}</div><div class="mbtns">${BINS.map(([k, label]) => btn(`data-bin="${k}"`, M(label))).join('')}</div>`;
    } else if (I.done.length < INDEX_TASKS.length) {
      const T = INDEX_TASKS[I.task];
      ctx.setTitle(`Simplify ${T.show.replace(/\^(\d)/g, (_, k) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[k])}.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · COUNT THE FACTORS ${progressDots(2, I.done.length, I.task)}</div><p class="mexpr">${M(T.show)}</p><div class="mchips">${T.groups.map(g => `<div class="mchip-group">${Array(g).fill('<i>x</i>').join('')}</div>`).join('<b>×</b>')}</div><p class="mcap">Each chip is one factor of x.</p>`;
      ctx.body.innerHTML = `<p>Write ${M(T.show)} as a single power of x. Count the chips.</p><div class="choices">${T.options.map(o => `<button class="choice" data-ix="${esc(o)}">${M(o)}</button>`).join('')}</div>`;
    } else return doneCard(ctx, termsHTML({ groups: [{ label: 'a^2', terms: ['a^2', '2a^2'], total: '3a^2' }, { label: 'a', terms: ['3a', '−a'], total: '2a' }, { label: 'b', terms: ['2b', '4b'], total: '6b' }, { label: 'numbers', terms: ['5', '−2'], total: '3' }] }), 'Like terms have the same letters with the same powers; only they can be added. a and a² are unlike. When multiplying powers of the same letter, count the factors: the indices add. A power of a power multiplies the indices.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-tile]').forEach(b => (b.onclick = () => { S.pick = Number(b.dataset.tile); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector('[data-bin]')?.focus(); }));
    ctx.body.querySelectorAll('[data-bin]').forEach(b => (b.onclick = () => {
      if (S.pick === null || S.pick === undefined) { ctx.feedback('Select a term first.', true); return; }
      const [t, k] = TILES[S.pick];
      if (b.dataset.bin !== k) { ctx.feedback(`${M(t)} does not go there. ${M(BIN_WHY[k])}`, true); return; }
      S.placed[S.pick] = k; S.pick = null; ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector('[data-tile]')?.focus();
    }));
    const inp = ctx.body.querySelector('#sortAns'); if (inp) inp.oninput = () => { S.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="sortcheck"]')?.addEventListener('click', () => {
      const res = markAlgebra({ expr: '3a^2+2a+6b+3', form: 'simplified', vars: ['a', 'b'] }, S.answer);
      if (res.status === 'invalid') { ctx.feedback(res.hint || algebraHint(res.code), true); return; }
      if (res.status === 'partial') { ctx.feedback('That is equivalent, but collect every group into a single term.', true); return; }
      if (res.status !== 'correct') { ctx.feedback(equivalent(S.answer, '3a^2+4a+6b+3') ? 'Check the a group: 3a − a = 2a.' : 'Total each group: a^2 + 2a^2, 3a − a, 2b + 4b, 5 − 2.', true); return; }
      S.done = true; ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-ix]').forEach(b => (b.onclick = () => {
      const T = INDEX_TASKS[I.task];
      if (b.dataset.ix !== T.right) { ctx.feedback(M(T.why[b.dataset.ix]), true); return; }
      if (!I.done.includes(I.task)) I.done.push(I.task);
      ctx.feedback(`${M(T.show)} = ${M(T.right)} ✓`);
      I.task = Math.min(I.task + 1, INDEX_TASKS.length - 1); ctx.save(); setTimeout(render, 700);
    }));
  };
  render();
}

/* ───────── 3. Area model for single brackets (A4) ───────── */
const EXPAND_TASKS = [{ h: '3', parts: ['x', '4'], cells: ['3x', '12'], whole: '3(x + 4)', result: '3x + 12' }, { h: 'x', parts: ['x', '6'], cells: ['x^2', '6x'], whole: 'x(x + 6)', result: 'x^2 + 6x' }];
const FACTOR_TASKS = [
  { expr: '6x + 15', options: ['1', '2', '3', '5'], right: '3', inside: '2x + 5', why: { 1: 'Every expression has 1 as a factor, so that does not factorise it. Look for the highest common factor.', 2: '15 ÷ 2 is not a whole number: 2 is not a factor of 15.', 5: '6x ÷ 5 is not a whole number of x: 5 is not a factor of 6.' } },
  { expr: '4x^2 + 10x', options: ['2', 'x', '2x', '4x'], right: '2x', inside: '2x + 5', why: { 2: '2 is common, but so is x. Take out both: the highest common factor is 2x.', x: 'x is common, but so is 2. Take out both: the highest common factor is 2x.', '4x': '10x ÷ 4x is not a whole number: 4 is not a factor of 10.' } },
];
function mountAreaBracket(ctx) {
  const w = ctx.w; w.exp ??= { task: 0, a: ['', ''], done: [] }; w.fac ??= { task: 0, pick: null, done: [] };
  const E = w.exp, Fa = w.fac;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (E.done.length < EXPAND_TASKS.length) {
      const T = EXPAND_TASKS[E.task];
      ctx.setTitle(`Expand ${T.whole.replace('^2', '²')}.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · AREA MODEL ${progressDots(2, E.done.length, E.task)}</div><p class="mexpr">${M(T.whole)}</p>${areaRect({ h: T.h, parts: T.parts, cells: E.done.includes(E.task) ? T.cells : [] })}`;
      ctx.body.innerHTML = `<p>The rectangle is ${M(T.h)} by ${M(T.parts.join(' + '))}. Work out the area of each part.</p><div class="mpair">${algInput('cell0', E.a[0], `Area of ${T.h} × ${T.parts[0]}`, true)}${algInput('cell1', E.a[1], `Area of ${T.h} × ${T.parts[1]}`, true)}</div><button class="primary mbtn" data-act="cells">Check areas</button>`;
    } else if (Fa.done.length < FACTOR_TASKS.length) {
      const T = FACTOR_TASKS[Fa.task], ok = Fa.pick === T.right;
      ctx.setTitle(`Factorise ${T.expr.replace('^2', '²')}.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · FIND THE SIDE ${progressDots(2, Fa.done.length, Fa.task)}</div><p class="mexpr">${M(T.expr)}</p>${areaRect({ h: ok ? T.right : '?', parts: ok ? T.inside.split(' + ') : ['?', '?'], cells: T.expr.split(' + ') })}`;
      ctx.body.innerHTML = `<p>The two areas are ${M(T.expr.split(' + ').join(' and '))}. Choose the height of the rectangle: the highest common factor of both terms.</p><div class="choices">${T.options.map(o => `<button class="choice" data-fh="${esc(o)}">${M(o)}</button>`).join('')}</div>`;
    } else return doneCard(ctx, areaRect({ h: '3', parts: ['2x', '5'], cells: ['6x', '15'] }) + `<p class="mcap">${M('3(2x + 5) = 6x + 15')}</p>`, 'Expanding multiplies the outside term by every term inside, like finding the area of each part. Factorising runs the other way: find the side length shared by every part. Take out the highest common factor, numbers and letters, so that what is left in the bracket has no common factor.');
    bind();
  };
  const bind = () => {
    ['cell0', 'cell1'].forEach((id, i) => { const el = ctx.body.querySelector('#' + id); if (el) el.oninput = () => { E.a[i] = el.value; ctx.save(); }; });
    ctx.body.querySelector('[data-act="cells"]')?.addEventListener('click', () => {
      const T = EXPAND_TASKS[E.task];
      for (let i = 0; i < 2; i++) {
        const res = markAlgebra({ expr: T.cells[i], form: 'simplified', vars: ['x'] }, E.a[i]);
        if (res.status === 'invalid') { ctx.feedback(res.code === 'empty' ? 'Fill in both areas.' : res.hint, true); return; }
        if (res.status !== 'correct') {
          const cellTimes = `${T.h} × ${T.parts[i]}`;
          ctx.feedback(equivalent(E.a[i], `${T.h}+${T.parts[i]}`) ? `Area is length × width: ${cellTimes}, not ${T.h} + ${T.parts[i]}.` : T.h === 'x' && i === 0 && equivalent(E.a[i], '2x') ? 'x × x = x², not 2x.' : `The ${i ? 'second' : 'first'} part is ${cellTimes}.`, true);
          return;
        }
      }
      if (!E.done.includes(E.task)) E.done.push(E.task);
      ctx.feedback(`${M(T.whole)} = ${M(T.result)} ✓`);
      ctx.save(); render();
      setTimeout(() => { if (E.task < EXPAND_TASKS.length - 1) { E.task++; E.a = ['', '']; } ctx.save(); render(); }, 900);
    });
    ctx.body.querySelectorAll('[data-fh]').forEach(b => (b.onclick = () => {
      const T = FACTOR_TASKS[Fa.task];
      Fa.pick = b.dataset.fh;
      if (Fa.pick !== T.right) { ctx.feedback(M(T.why[Fa.pick]), true); ctx.save(); return; }
      if (!Fa.done.includes(Fa.task)) Fa.done.push(Fa.task);
      ctx.save(); render(); ctx.feedback(`${M(T.expr)} = ${M(`${T.right}(${T.inside})`)} ✓`);
      setTimeout(() => { if (Fa.task < FACTOR_TASKS.length - 1) { Fa.task++; Fa.pick = null; } ctx.save(); render(); }, 1100);
    }));
  };
  render();
}

/* ───────── 4. Grid method and factor pairs (A4) ───────── */
const GRID_TASKS = [{ a: 3, b: 5 }, { a: -4, b: 2 }];
const term = (k, v) => (k === 1 ? v : k === -1 ? '−' + v : num(k) + v);
const PAIR_TASKS = [{ b: 7, c: 12, pairs: [[1, 12], [2, 6], [3, 4]], right: [3, 4] }, { b: -1, c: -12, pairs: [[1, -12], [-1, 12], [2, -6], [-2, 6], [3, -4], [-3, 4]], right: [3, -4] }];
const quad = (b, c) => `x^2 ${b < 0 ? '−' : '+'} ${Math.abs(b) === 1 ? '' : Math.abs(b)}x ${c < 0 ? '−' : '+'} ${Math.abs(c)}`;
const binx = k => `x ${k < 0 ? '−' : '+'} ${Math.abs(k)}`;
function mountGridQuadratic(ctx) {
  const w = ctx.w; w.grid ??= { task: 0, a: ['', '', '', ''], done: [] }; w.pairs ??= { task: 0, done: [] };
  const G = w.grid, P = w.pairs;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (G.done.length < GRID_TASKS.length) {
      const T = GRID_TASKS[G.task], solved = G.done.includes(G.task);
      const cells = ['x^2', term(T.b, 'x'), term(T.a, 'x'), num(T.a * T.b)];
      ctx.setTitle(`Expand (${binx(T.a)})(${binx(T.b)}).`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · GRID METHOD ${progressDots(2, G.done.length, G.task)}</div><p class="mexpr">${M(`(${binx(T.a)})(${binx(T.b)})`)}</p>${areaRect({ hs: ['x', num(T.a)], parts: ['x', num(T.b)], cells: solved ? cells : [] })}${solved ? `<p class="mcap">${M(quad(T.a + T.b, T.a * T.b).replace(/ \+ 0x| − 0x/, ''))}</p>` : ''}`;
      ctx.body.innerHTML = `<p>Multiply each row by each column. Fill in all four cells.</p><div class="mgrid4">${['x × x', `x × ${num(T.b)}`, `${num(T.a)} × x`, `${num(T.a)} × ${num(T.b)}`].map((l, i) => algInput('g' + i, G.a[i], l, true)).join('')}</div><button class="primary mbtn" data-act="grid">Check grid</button>`;
    } else if (P.done.length < PAIR_TASKS.length) {
      const T = PAIR_TASKS[P.task];
      ctx.setTitle(`Factorise ${quad(T.b, T.c).replace('^2', '²')}.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · FACTOR PAIRS ${progressDots(2, P.done.length, P.task)}</div><p class="mexpr">${M(quad(T.b, T.c))}</p>${tableHTML({ head: ['pair', 'product', 'sum'], rows: T.pairs.map(([p, q]) => [`${num(p)}, ${num(q)}`, num(p * q), num(p + q)]) })}`;
      ctx.body.innerHTML = `<p>Find the pair that multiplies to ${num(T.c)} and adds to ${num(T.b)}. Those numbers go in the brackets.</p><div class="choices">${T.pairs.map(([p, q], i) => `<button class="choice" data-pair="${i}">${M(`(${binx(p)})(${binx(q)})`)}</button>`).join('')}</div>`;
    } else return doneCard(ctx, areaRect({ hs: ['x', '3'], parts: ['x', '−4'], cells: ['x^2', '−4x', '3x', '−12'] }) + `<p class="mcap">${M('(x + 3)(x − 4) = x^2 − x − 12')}</p>`, 'Every term in one bracket multiplies every term in the other: four products, then collect the two x terms. To factorise x² + bx + c, find two numbers that multiply to c and add to b. With a negative c, one number is negative.');
    bind();
  };
  const bind = () => {
    for (let i = 0; i < 4; i++) { const el = ctx.body.querySelector('#g' + i); if (el) el.oninput = () => { G.a[i] = el.value; ctx.save(); }; }
    ctx.body.querySelector('[data-act="grid"]')?.addEventListener('click', () => {
      const T = GRID_TASKS[G.task], want = ['x^2', `${T.b}x`, `${T.a}x`, String(T.a * T.b)];
      for (let i = 0; i < 4; i++) {
        const res = markAlgebra({ expr: want[i], form: 'simplified', vars: ['x'] }, G.a[i]);
        if (res.status === 'invalid') { ctx.feedback(res.code === 'empty' ? 'Fill in all four cells.' : res.hint, true); return; }
        if (res.status !== 'correct') {
          ctx.feedback(i === 0 ? 'x × x = x².' : i === 3 && T.a * T.b < 0 ? `${num(T.a)} × ${num(T.b)} = ${num(T.a * T.b)}: a negative times a positive is negative.` : `Cell ${i + 1} is ${['x × x', `x × ${num(T.b)}`, `${num(T.a)} × x`, `${num(T.a)} × ${num(T.b)}`][i]}.`, true);
          return;
        }
      }
      if (!G.done.includes(G.task)) G.done.push(G.task);
      ctx.save(); render(); ctx.feedback(`Collect the x terms: ${M(quad(T.a + T.b, T.a * T.b))} ✓`);
      setTimeout(() => { if (G.task < GRID_TASKS.length - 1) { G.task++; G.a = ['', '', '', '']; } ctx.save(); render(); }, 1100);
    });
    ctx.body.querySelectorAll('[data-pair]').forEach(b => (b.onclick = () => {
      const T = PAIR_TASKS[P.task], [p, q] = T.pairs[Number(b.dataset.pair)];
      if (p + q !== T.b) { ctx.feedback(`${num(p)} × ${num(q)} = ${num(p * q)}, but ${num(p)} + ${num(q)} = ${num(p + q)}, not ${num(T.b)}.`, true); return; }
      if (!P.done.includes(P.task)) P.done.push(P.task);
      ctx.feedback(`${M(quad(T.b, T.c))} = ${M(`(${binx(p)})(${binx(q)})`)} ✓`);
      P.task = Math.min(P.task + 1, PAIR_TASKS.length - 1); ctx.save(); setTimeout(render, 900);
    }));
  };
  render();
}

/* ───────── 5. Balance (A17) ───────── */
// Equation state: a·x + b = c·x + d with rational coefficients.
const EQ_TASKS = [
  { start: { a: 3, b: 5, c: 0, d: 20 }, moves: ['−5', '+5', '÷3', '×3'] },
  { start: { a: 5, b: 3, c: 2, d: 18 }, moves: ['−2x', '+2x', '−3', '÷3', '÷5'] },
];
const fr = k => F(k);
const side = (a, b) => { const parts = []; if (a.n) parts.push(eq(a, F(1)) ? 'x' : eq(a, F(-1)) ? '−x' : `${fm(a)}x`); if (b.n || !parts.length) parts.push(parts.length ? `${b.n < 0 ? '− ' : '+ '}${fm(F(Math.abs(b.n), b.d))}` : fm(b)); return parts.join(' '); };
const plain = s => s.replace(/\{(\d+)\/(\d+)\}/g, '$1/$2');
function apply(st, mv) {
  const m = mv.match(/^([−+÷×])(\d+)(x?)$/);
  const op = m[1], k = F(Number(m[2])), isX = !!m[3];
  const o = { ...st };
  if (op === '−' || op === '+') { const s = op === '−' ? F(-1) : F(1); if (isX) { o.a = add(o.a, mul(s, k)); o.c = add(o.c, mul(s, k)); } else { o.b = add(o.b, mul(s, k)); o.d = add(o.d, mul(s, k)); } }
  else { const f = op === '÷' ? div(F(1), k) : k; o.a = mul(o.a, f); o.b = mul(o.b, f); o.c = mul(o.c, f); o.d = mul(o.d, f); }
  return o;
}
function mountBalance(ctx) {
  const w = ctx.w; w.bal ??= { task: 0, hist: [], done: [] };
  const Bl = w.bal;
  const cur = () => { const T = EQ_TASKS[Bl.task]; let st = { a: fr(T.start.a), b: fr(T.start.b), c: fr(T.start.c), d: fr(T.start.d) }; for (const mv of Bl.hist) st = apply(st, mv); return st; };
  const solved = st => eq(st.a, F(1)) && st.b.n === 0 && st.c.n === 0;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (Bl.done.length >= EQ_TASKS.length) return doneCard(ctx, balanceSVG({ left: 'x', right: '5' }), 'Whatever you do to one side, do to the other, and the balance stays level. Undo the operations in reverse order: remove the added number, then divide by the coefficient. With x on both sides, first subtract the smaller x term from both sides so x appears once.');
    const st = cur(), T = EQ_TASKS[Bl.task];
    const L = plain(side(st.a, st.b)), R = plain(side(st.c, st.d));
    ctx.setTitle(`Solve ${plain(side(fr(T.start.a), fr(T.start.b)))} = ${plain(side(fr(T.start.c), fr(T.start.d)))}.`);
    ctx.panel.innerHTML = `<div class="mpanel-k">BALANCE ${progressDots(2, Bl.done.length, Bl.task)}</div>${balanceSVG({ left: L, right: R })}<ol class="mcollapse">${Bl.hist.map((mv, i) => `<li>${mv} on both sides</li>`).join('')}</ol>`;
    ctx.body.innerHTML = `<p>Choose an operation to apply to <strong>both sides</strong>. Aim for x on its own on one side.</p><div class="mbtns">${T.moves.map(mv => btn(`data-mv="${mv}"`, `${mv} both sides`)).join('')}</div><div class="mbtns">${btn('data-act="undo"', 'Undo')}${btn('data-act="restart"', 'Start again')}</div>`;
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-mv]').forEach(b => (b.onclick = () => {
      const before = cur(), mv = b.dataset.mv, after = apply(before, mv);
      Bl.hist.push(mv);
      let note = '';
      if (mv === '+5' || mv === '+3') note = `That keeps the balance level, but the number is now bigger. To remove + ${mv.slice(1)}, subtract ${mv.slice(1)}.`;
      else if (mv === '+2x') note = 'Level, but now there is even more x on both sides. Subtract 2x to remove it from the right.';
      else if (mv === '×3') note = 'Level, but multiplying makes the numbers bigger. Undo × 3 by dividing.';
      else if (mv.startsWith('÷') && (before.b.n !== 0 && before.c.n === 0) && !eq(before.a, F(Number(mv.slice(1))))) note = 'Dividing now makes fractions. It is still correct, but removing the number term first is simpler.';
      else if (mv.startsWith('÷') && before.c.n !== 0) note = 'There is still x on both sides. Collect the x terms on one side first.';
      ctx.save(); render();
      if (solved(after)) {
        if (!Bl.done.includes(Bl.task)) Bl.done.push(Bl.task);
        ctx.feedback(`x = ${M(fm(after.d))}. Check: substitute it into the original equation; both sides are equal. ✓`);
        ctx.save();
        setTimeout(() => { if (Bl.task < EQ_TASKS.length - 1) { Bl.task++; Bl.hist = []; } ctx.save(); render(); }, 1300);
      } else if (note) ctx.feedback(note, true);
      else ctx.feedback(`Both sides changed in the same way: ${plain(side(after.a, after.b))} = ${plain(side(after.c, after.d))}.`);
    }));
    ctx.body.querySelector('[data-act="undo"]')?.addEventListener('click', () => { Bl.hist.pop(); ctx.feedback(''); ctx.save(); render(); });
    ctx.body.querySelector('[data-act="restart"]')?.addEventListener('click', () => { Bl.hist = []; ctx.feedback(''); ctx.save(); render(); });
  };
  render();
}

/* ───────── 6. Reverse machine for changing the subject (A5) ───────── */
const REV_TASKS = [
  { formula: 'v = u + at', subject: 't', forward: ['× a', '+ u'], result: 'v', options: ['− u', '÷ a', '+ u', '× a'], right: ['− u', '÷ a'], answer: '{v − u/a}', expr: '(v-u)/a', vars: ['v', 'u', 'a', 't'] },
  { formula: 'P = 2(l + w)', subject: 'w', forward: ['+ l', '× 2'], result: 'P', options: ['÷ 2', '− l', '× 2', '+ l'], right: ['÷ 2', '− l'], answer: '{P/2} − l', expr: 'P/2-l', vars: ['P', 'l', 'w'] },
];
function mountReverse(ctx) {
  const w = ctx.w; w.rev ??= { task: 0, chosen: [], answer: '', done: [] };
  const Rv = w.rev;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (Rv.done.length >= REV_TASKS.length) return doneCard(ctx, visual4({ kind: 'rearr', subject: 'w', forward: ['+ l', '× 2'], result: 'P', reverse: ['÷ 2', '− l'] }), 'To change the subject, list what happens to the new subject in order, then undo those operations in reverse order. The last operation applied is the first one you undo. Keep the whole of the other side together: (v − u) is divided by a, not just u.');
    const T = REV_TASKS[Rv.task], built = Rv.chosen.length === T.right.length;
    ctx.setTitle(`Make ${T.subject} the subject of ${T.formula}.`);
    ctx.panel.innerHTML = `<div class="mpanel-k">REVERSE MACHINE ${progressDots(2, Rv.done.length, Rv.task)}</div>${machineHTML({ input: T.subject, ops: T.forward, output: T.result })}${machineHTML({ input: T.result, ops: Rv.chosen.length ? Rv.chosen : ['?'], output: built ? T.subject : '…' })}<p class="mcap">Top: what happens to ${esc(T.subject)} in ${esc(T.formula)}. Bottom: your reverse machine.</p>`;
    ctx.body.innerHTML = built
      ? `<p>Your reverse machine undoes the formula. Write ${esc(T.subject)} as an expression.</p>${algInput('revAns', Rv.answer, `${T.subject} =`)}<button class="primary mbtn" data-act="revcheck">Check</button>`
      : `<p>Build the reverse machine: choose the operation that undoes the <strong>last</strong> step first.</p><div class="mbtns">${T.options.map(o => btn(`data-rop="${o}"`, o)).join('')}</div>`;
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-rop]').forEach(b => (b.onclick = () => {
      const T = REV_TASKS[Rv.task], want = T.right[Rv.chosen.length], o = b.dataset.rop;
      if (o !== want) {
        ctx.feedback(T.forward.includes(o) ? `${o} repeats the formula's own step. Undo it with the inverse operation.` : `Not yet. The last thing done to ${T.subject} was ${T.forward[T.forward.length - 1 - Rv.chosen.length]}, so undo that first.`, true);
        return;
      }
      Rv.chosen.push(o); ctx.feedback(''); ctx.save(); render();
    }));
    const inp = ctx.body.querySelector('#revAns'); if (inp) inp.oninput = () => { Rv.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="revcheck"]')?.addEventListener('click', () => {
      const T = REV_TASKS[Rv.task];
      const res = markAlgebra({ expr: T.expr, form: 'any', vars: T.vars, subject: T.subject }, Rv.answer);
      if (res.status === 'invalid') { ctx.feedback(res.code === 'empty' ? 'Write the expression.' : res.hint, true); return; }
      if (res.status !== 'correct') { ctx.feedback(Rv.task === 0 && equivalent(Rv.answer.replace(/^\s*t\s*=/, ''), 'v-u/a') ? 'That divides only u by a. The whole of v − u is divided: (v − u)/a.' : Rv.task === 1 && equivalent(Rv.answer.replace(/^\s*w\s*=/, ''), '(P-l)/2') ? 'Divide by 2 first, then subtract l: P/2 − l.' : `Follow the reverse machine: start with ${T.result}, then ${T.right.join(', then ')}.`, true); return; }
      if (!Rv.done.includes(Rv.task)) Rv.done.push(Rv.task);
      ctx.feedback(`${T.subject} = ${M(T.answer)} ✓`);
      ctx.save();
      setTimeout(() => { if (Rv.task < REV_TASKS.length - 1) { Rv.task++; Rv.chosen = []; Rv.answer = ''; } ctx.save(); render(); }, 1100);
    });
  };
  render();
}

export const MODELS4 = { 'expr-machine': mountExprMachine, 'term-sorter': mountTermSorter, 'area-bracket': mountAreaBracket, 'grid-quadratic': mountGridQuadratic, balance: mountBalance, 'reverse-machine': mountReverse };
export { sub };
