// Visual models for Number batch 3: listing, units, compound measures, exact answers, ratio fractions.
// visual3() draws worked-example diagrams; MODELS3 holds the investigations.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { F, mul, div, eq, num, parseNumber, decText, fracMarkup } from './frac.js?v=20261023-maths-r9';
import { C, btn, progressDots } from './models-number.js?v=20261023-maths-r9';
import { parseExact, canonical, squareFree } from './exact.js?v=20261023-maths-r9';

const W = 600;
const vOf = raw => { const p = parseNumber(raw); return p ? p.value : null; };
const dtx = f => decText(f) ?? `${f.n}/${f.d}`;

/* ───────── static visuals ───────── */

function gridSVG({ rows, cols, fill = 'all', picked = [], dup = null }) {
  const cw = Math.min(70, 440 / cols.length), ch = Math.min(46, 220 / rows.length), x0 = 120, y0 = 34;
  let s = '';
  cols.forEach((c, j) => { s += `<text x="${x0 + j * cw + cw / 2}" y="${y0 - 10}" text-anchor="middle" fill="${C.muted}" font-size="13">${esc(c)}</text>`; });
  rows.forEach((rw, i) => {
    s += `<text x="${x0 - 10}" y="${y0 + i * ch + ch / 2 + 5}" text-anchor="end" fill="${C.muted}" font-size="13">${esc(rw)}</text>`;
    cols.forEach((c, j) => {
      const diag = fill === 'upper' && i === j, lower = fill === 'upper' && j < i;
      const on = fill === 'all' || (fill === 'upper' && j > i) || picked.includes(`${i},${j}`);
      const isDup = dup === `${i},${j}`;
      s += `<rect x="${x0 + j * cw + 2}" y="${y0 + i * ch + 2}" width="${cw - 4}" height="${ch - 4}" rx="6" fill="${diag ? '#ffffff08' : isDup ? '#ed8b7840' : on && !lower ? C.fill : 'none'}" stroke="${diag ? '#b7c8d630' : C.muted}" stroke-dasharray="${lower ? '3 3' : ''}"/>`;
      if (diag) s += `<text x="${x0 + j * cw + cw / 2}" y="${y0 + i * ch + ch / 2 + 5}" text-anchor="middle" fill="#b7c8d680" font-size="12">—</text>`;
      else if (on && !lower) s += `<text x="${x0 + j * cw + cw / 2}" y="${y0 + i * ch + ch / 2 + 5}" text-anchor="middle" fill="${C.navy}" font-size="12" font-weight="600">✓</text>`;
    });
  });
  const H = y0 + rows.length * ch + 10;
  return `<svg viewBox="0 0 ${W} ${H}" class="mviz" role="img" aria-label="Grid of ${rows.length} by ${cols.length} combinations; ${fill === 'upper' ? 'only pairs above the diagonal count' : picked.length ? picked.length + ' chosen' : 'all combinations'}">${s}</svg>`;
}
function tree3({ items }) {
  const rows = [];
  for (const a of items) for (const b of items.filter(x => x !== a)) rows.push([a, b, items.find(x => x !== a && x !== b)]);
  return `<div class="mcols">${rows.map(r => `<div>${r.join(' ')}</div>`).join('')}<div class="mcols-res">${rows.length} arrangements</div></div>`;
}
function slotsHTML({ slots }) {
  return `<div class="mslots">${slots.map(n => `<span><b>${n}</b><i>choices</i></span>`).join('<em>×</em>')}</div><p class="mcap">${slots.join(' × ')} = ${slots.reduce((a, b) => a * b, 1).toLocaleString('en-GB')}</p>`;
}
function ladderSVG({ units, factors, at = null, from = null }) {
  const step = 64, x0 = 120, y0 = 30;
  let s = '';
  units.forEach((u, i) => {
    const y = y0 + i * step, here = at === i, start = from === i;
    s += `<rect x="${x0 + i * 40}" y="${y}" width="140" height="44" rx="10" fill="${here ? C.coral : start ? '#f8f6f230' : '#f8f6f212'}" stroke="${here ? C.cream : C.muted}"/><text x="${x0 + i * 40 + 70}" y="${y + 28}" text-anchor="middle" fill="${here ? C.navy : C.cream}" font-size="18" font-weight="700">${u}</text>`;
    if (i < factors.length) s += `<text x="${x0 + i * 40 + 200}" y="${y + 50}" fill="${C.coral}" font-size="14" font-weight="600">× ${factors[i].toLocaleString('en-GB')} ↓</text><text x="${x0 + i * 40 - 18}" y="${y + 50}" text-anchor="end" fill="${C.muted}" font-size="13">↑ ÷ ${factors[i].toLocaleString('en-GB')}</text>`;
  });
  return `<svg viewBox="0 0 ${W} ${y0 + units.length * step}" class="mviz" role="img" aria-label="Unit ladder: ${units.map((u, i) => u + (i < factors.length ? ' times ' + factors[i] + ' to ' + units[i + 1] : '')).join(', ')}${at !== null ? '; now at ' + units[at] : ''}">${s}</svg>`;
}
function squareGrid({ label, n = 10 }) {
  let s = `<rect x="200" y="10" width="200" height="200" fill="${C.fill}" stroke="${C.cream}" stroke-width="2"/>`;
  for (let i = 1; i < n; i++) s += `<line x1="${200 + i * 20}" y1="10" x2="${200 + i * 20}" y2="210" stroke="${C.navy}" stroke-width=".7"/><line x1="200" y1="${10 + i * 20}" x2="400" y2="${10 + i * 20}" stroke="${C.navy}" stroke-width=".7"/>`;
  s += `<text x="300" y="232" text-anchor="middle" fill="${C.ink}" font-size="13">100 cm</text><text x="188" y="114" text-anchor="end" fill="${C.ink}" font-size="13">100 cm</text>`;
  return `<svg viewBox="0 0 ${W} 240" class="mviz" role="img" aria-label="A 1 metre square drawn as a 10 by 10 grid; each cell is 10 cm by 10 cm and contains 100 square centimetres">${s}</svg><p class="mcap">${mathHTML(label)} · each small square is 10 × 10 = 100 cm²</p>`;
}
function triangleSVG({ top, left, right }) {
  const s = `<path d="M300 20 L460 210 L140 210 Z" fill="#f8f6f212" stroke="${C.cream}" stroke-width="2"/><line x1="200" y1="120" x2="400" y2="120" stroke="${C.cream}" stroke-width="2"/><line x1="300" y1="120" x2="300" y2="210" stroke="${C.cream}" stroke-width="2"/><text x="300" y="98" text-anchor="middle" fill="${C.coral}" font-size="18" font-weight="700">${top}</text><text x="245" y="172" text-anchor="middle" fill="${C.ink}" font-size="16">${left}</text><text x="355" y="172" text-anchor="middle" fill="${C.ink}" font-size="16">${right}</text>`;
  return `<svg viewBox="0 0 ${W} 230" class="mviz" role="img" aria-label="${top} = ${left} × ${right}; ${left} = ${top} ÷ ${right}; ${right} = ${top} ÷ ${left}">${s}</svg><p class="mcap">${top} = ${left} × ${right} · ${left} = ${top} ÷ ${right} · ${right} = ${top} ÷ ${left}</p>`;
}
function circleSVG({ r, half = false }) {
  const R = 22 * r, cx = 300, cy = half ? 200 : 130;
  const shape = half ? `<path d="M${cx - R} ${cy} A${R} ${R} 0 0 1 ${cx + R} ${cy} Z" fill="${C.fill}" stroke="${C.cream}" stroke-width="2"/>` : `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${C.fill}" stroke="${C.cream}" stroke-width="2"/>`;
  const s = `${shape}<line x1="${cx}" y1="${cy}" x2="${cx + R}" y2="${cy}" stroke="${C.navy}" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="3" fill="${C.navy}"/><text x="${cx + R / 2}" y="${cy - 8}" text-anchor="middle" fill="${C.navy}" font-size="15" font-weight="700">r = ${r}</text>`;
  const area = half ? `{${r * r}π/2}` : `${r * r}π`;
  return `<svg viewBox="0 0 ${W} ${half ? 230 : 270}" class="mviz" role="img" aria-label="${half ? 'Semicircle' : 'Circle'} of radius ${r}">${s}</svg><p class="mcap">${half ? `Area = ${mathHTML(area)} · perimeter = ${r}π + ${2 * r}` : `Area = πr² = ${r * r}π ≈ ${(Math.PI * r * r).toFixed(1)} · circumference = ${2 * r}π`}</p>`;
}
function ratioBar({ a, b, la = 'A', lb = 'B', setA = null, setB = null }) {
  const A = setA ?? a, B = setB ?? b, n = A + B, u = Math.min(52, 480 / Math.max(1, n)), x0 = (W - u * n) / 2;
  let s = '';
  for (let i = 0; i < n; i++) s += `<rect x="${x0 + i * u + 1}" y="40" width="${u - 2}" height="44" rx="5" fill="${i < A ? C.coral : C.muted}" stroke="${C.cream}"/><text x="${x0 + i * u + u / 2}" y="68" text-anchor="middle" fill="${C.navy}" font-size="13" font-weight="700">${i < A ? la[0] : lb[0]}</text>`;
  if (A) s += `<text x="${x0 + (A * u) / 2}" y="28" text-anchor="middle" fill="${C.coral}" font-size="14" font-weight="600">${la}: ${A} part${A === 1 ? '' : 's'}</text>`;
  if (B) s += `<text x="${x0 + A * u + (B * u) / 2}" y="108" text-anchor="middle" fill="${C.ink}" font-size="14">${lb}: ${B} part${B === 1 ? '' : 's'}</text>`;
  return `<svg viewBox="0 0 ${W} 120" class="mviz" role="img" aria-label="Bar split into ${n} equal parts: ${A} ${la} and ${B} ${lb}">${s}</svg>`;
}

export function visual3(v) {
  if (!v) return '';
  switch (v.kind) {
    case 'grid': return gridSVG(v);
    case 'tree3': return tree3(v);
    case 'slots': return slotsHTML(v);
    case 'ladder': return ladderSVG(v);
    case 'squaregrid': return squareGrid(v);
    case 'triangle': return triangleSVG(v);
    case 'circle': return circleSVG(v);
    case 'ratiobar': return ratioBar(v) + `<p class="mcap">${mathHTML(`First part: {${v.a}/${v.a + v.b}} of the total`)}</p>`;
    default: return '';
  }
}

/* ───────── investigations ───────── */

// Listing: outfits (order irrelevant between different groups) then handshakes (pairs once).
const SHIRTS = ['White', 'Blue', 'Green'], TROUSERS = ['Black', 'Navy', 'Beige', 'Grey'], PEOPLE = ['Ali', 'Bea', 'Cal', 'Dev', 'Eve'];
function mountListing(ctx) {
  const w = ctx.w; w.outfits ??= { picked: [], answer: '', done: false }; w.hands ??= { picked: [], done: false };
  const O = w.outfits, H = w.hands;
  const render = () => {
    if (!O.done) {
      ctx.setTitle('List every outfit.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · OUTFITS</div>${gridSVG({ rows: SHIRTS, cols: TROUSERS, fill: 'none', picked: O.picked })}<p class="mcap">${O.picked.length} of the outfits listed</p>`;
      const all = O.picked.length === SHIRTS.length * TROUSERS.length;
      ctx.body.innerHTML = `<p>Choose one shirt and one pair of trousers. Select each outfit once, working systematically: all the white-shirt outfits first, then blue, then green.</p><div class="mgrid-pick" role="group" aria-label="Outfits">${SHIRTS.map((sh, i) => TROUSERS.map((tr, j) => `<button class="choice ${O.picked.includes(`${i},${j}`) ? 'selected' : ''}" data-oc="${i},${j}" aria-pressed="${O.picked.includes(`${i},${j}`)}">${sh} + ${tr}</button>`).join('')).join('')}</div>${all ? `<label class="field-label" for="lsAns">How many outfits? Write it as a calculation using the numbers of shirts and trousers.</label><input class="lab-input mnum" id="lsAns" autocomplete="off" placeholder="e.g. 3 × 4" value="${esc(O.answer)}"><button class="primary mbtn" data-act="lscheck">Check</button>` : ''}`;
    } else if (!H.done) {
      ctx.setTitle('Count each handshake once.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · HANDSHAKES</div>${gridSVG({ rows: PEOPLE, cols: PEOPLE, fill: 'none', picked: H.picked, dup: H.dup })}<p class="mcap">${H.picked.length} handshake${H.picked.length === 1 ? '' : 's'} listed</p>`;
      ctx.body.innerHTML = `<p>Five people each shake hands once with every other person. Select each handshake: the row person shakes the column person.</p><div class="mhand" role="group" aria-label="Handshakes">${PEOPLE.map((a, i) => `<div class="mhand-row"><span>${a}</span>${PEOPLE.map((b, j) => `<button class="choice ${H.picked.includes(`${i},${j}`) ? 'selected' : ''}" data-hs="${i},${j}" aria-label="${a} shakes hands with ${b}" aria-pressed="${H.picked.includes(`${i},${j}`)}">${b}</button>`).join('')}</div>`).join('')}</div><button class="primary mbtn" data-act="hscheck">That is every handshake</button>`;
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${gridSVG({ rows: PEOPLE, cols: PEOPLE, fill: 'upper' })}`;
      ctx.body.innerHTML = '<p>Outfits pair two different groups, so every cell counts: 3 × 4 = 12. Handshakes pair a group with itself: the diagonal is impossible and each pair appears twice in the grid, so 5 × 4 ÷ 2 = 10.</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-oc]').forEach(b => (b.onclick = () => { const k = b.dataset.oc; O.picked = O.picked.includes(k) ? O.picked.filter(x => x !== k) : [...O.picked, k]; ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-oc="${k}"]`)?.focus(); }));
    const inp = ctx.body.querySelector('#lsAns'); if (inp) inp.oninput = () => { O.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="lscheck"]')?.addEventListener('click', () => {
      const t = O.answer.replace(/\s/g, '').replace(/[x*]/gi, '×');
      if (t === '3×4' || t === '4×3') { O.done = true; ctx.feedback('Correct: 3 shirts × 4 pairs of trousers = 12 outfits. Each shirt gives a full row of 4.'); ctx.save(); render(); return; }
      if (t === '3+4' || t === '4+3') { ctx.feedback('3 + 4 = 7 counts the items, not the outfits. There is a whole row of outfits for each shirt.', true); return; }
      if (t === '12') { ctx.feedback('12 is right. Now write it as the calculation that gives 12 straight away.', true); return; }
      ctx.feedback('How many rows (shirts) and how many outfits in each row?', true);
    });
    ctx.body.querySelectorAll('[data-hs]').forEach(b => (b.onclick = () => {
      const [i, j] = b.dataset.hs.split(',').map(Number), k = `${i},${j}`;
      if (i === j) { ctx.feedback(`${PEOPLE[i]} cannot shake hands with themselves.`, true); return; }
      if (H.picked.includes(k)) { H.picked = H.picked.filter(x => x !== k); H.dup = null; ctx.feedback(''); ctx.save(); render(); return; }
      if (H.picked.includes(`${j},${i}`)) { H.dup = k; ctx.feedback(`${PEOPLE[i]} shaking hands with ${PEOPLE[j]} is the same handshake as ${PEOPLE[j]} with ${PEOPLE[i]}, which you already have.`, true); ctx.save(); render(); return; }
      H.picked = [...H.picked, k]; H.dup = null; ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-hs="${k}"]`)?.focus();
    }));
    ctx.body.querySelector('[data-act="hscheck"]')?.addEventListener('click', () => {
      if (H.picked.length < 10) { ctx.feedback(`${10 - H.picked.length > 0 ? 'Some handshakes are missing.' : ''} Work systematically: Ali with everyone after Ali, then Bea with everyone after Bea…`, true); return; }
      H.done = true; ctx.feedback('Correct: 4 + 3 + 2 + 1 = 10 handshakes.'); ctx.save(); render(); ctx.done();
    });
  };
  if (O.done && H.done) ctx.done();
  render();
}

// Unit ladder: step between units; then area and volume factors.
const LADDER = { length: [['km', 'm', 'cm', 'mm'], [1000, 100, 10]], mass: [['kg', 'g'], [1000]] };
const LADDER_TASKS = [{ ladder: 'length', value: '3.4', from: 0, to: 2 }, { ladder: 'length', value: '2500', from: 3, to: 1 }, { ladder: 'mass', value: '0.75', from: 0, to: 1 }];
function mountUnitLadder(ctx) {
  const w = ctx.w; w.ladder ??= { task: 0, at: null, value: null, answer: '', done: [] }; w.area ??= { step: 0, done: false };
  const L = w.ladder, A = w.area;
  const render = () => {
    if (L.done.length < LADDER_TASKS.length) {
      const T = LADDER_TASKS[L.task], [units, factors] = LADDER[T.ladder];
      L.at ??= T.from; L.value ??= T.value;
      ctx.setTitle('Climb the unit ladder.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · CONVERT ${progressDots(3, L.done.length, L.task)}</div><p class="mexpr">${esc(T.value)} ${units[T.from]} → ? ${units[T.to]}</p>${ladderSVG({ units, factors, at: L.at, from: T.from })}<p class="mexpr mmono" aria-live="polite">${esc(dtx(vOf(L.value)))} ${units[L.at]}</p>`;
      ctx.body.innerHTML = L.at === T.to
        ? `<p>You are at ${units[T.to]}. Does the number make sense?</p><button class="primary mbtn" data-act="ldcheck">Yes: ${esc(T.value)} ${units[T.from]} = ${esc(dtx(vOf(L.value)))} ${units[T.to]}</button>${btn('data-act="ldreset"', 'Start again')}`
        : `<p>Convert ${esc(T.value)} ${units[T.from]} into ${units[T.to]}. Move one rung at a time.</p><div class="choices">${L.at < units.length - 1 ? btn('data-ld="down"', `Down to ${units[L.at + 1]}`) : ''}${L.at > 0 ? btn('data-ld="up"', `Up to ${units[L.at - 1]}`) : ''}</div><p class="micro-note">Going down: ×. Going up: ÷.</p>`;
    } else if (!A.done) {
      const q = [['1 m² = ? cm²', ['100', '1000', '10000'], '10000', 'A 1 m square is 100 cm by 100 cm: 100 × 100 squares.'], ['1 litre = ? cm³', ['10', '100', '1000'], '1000', '1 litre = 1000 ml and 1 cm³ = 1 ml.']][A.step];
      ctx.setTitle('Area and volume units.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · SQUARED AND CUBED</div>${A.step === 0 ? squareGrid({ label: '1 m²' }) : `<div class="mcube" role="img" aria-label="A 10 cm cube holds 10 × 10 × 10 = 1000 cubic centimetres, which is 1 litre"><span>10 cm</span><span>10 cm</span><span>10 cm</span></div><p class="mcap">A cube 10 cm on each side</p>`}`;
      ctx.body.innerHTML = `<p>${q[0]}</p><div class="choices">${q[1].map(o => btn(`data-ar="${o}"`, Number(o).toLocaleString('en-GB'))).join('')}</div>`;
      bind(q); return;
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${ladderSVG({ units: LADDER.length[0], factors: LADDER.length[1] })}`;
      ctx.body.innerHTML = '<p>Down the ladder (smaller units) multiply; up the ladder divide. Areas square the length factor (100² = 10 000) and volumes cube it.</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    bind();
  };
  const bind = q => {
    const T = LADDER_TASKS[L.task], [units, factors] = LADDER[T?.ladder || 'length'];
    ctx.body.querySelectorAll('[data-ld]').forEach(b => (b.onclick = () => {
      const down = b.dataset.ld === 'down', towards = T.to > L.at ? 'down' : 'up';
      if (b.dataset.ld !== towards) { ctx.feedback(`${units[T.to]} is ${towards === 'down' ? 'below' : 'above'} ${units[L.at]} on the ladder. Move ${towards}.`, true); return; }
      const f = factors[down ? L.at : L.at - 1];
      L.value = dtx(down ? mul(vOf(L.value), F(f)) : div(vOf(L.value), F(f)));
      L.at += down ? 1 : -1; ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector('[data-ld], [data-act="ldcheck"]')?.focus();
    }));
    ctx.body.querySelector('[data-act="ldreset"]')?.addEventListener('click', () => { L.at = T.from; L.value = T.value; ctx.save(); render(); });
    ctx.body.querySelector('[data-act="ldcheck"]')?.addEventListener('click', () => {
      if (!L.done.includes(L.task)) L.done.push(L.task);
      ctx.feedback(`Correct: ${T.value} ${units[T.from]} = ${dtx(vOf(L.value))} ${units[T.to]}. ${T.to > T.from ? 'A smaller unit means a bigger number.' : 'A bigger unit means a smaller number.'}`);
      if (L.task < LADDER_TASKS.length - 1) Object.assign(L, { task: L.task + 1, at: null, value: null });
      ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-ar]').forEach(b => (b.onclick = () => {
      if (b.dataset.ar !== q[2]) { ctx.feedback(q[3], true); return; }
      ctx.feedback(`Correct: ${q[0].replace('?', Number(q[2]).toLocaleString('en-GB'))}.`);
      if (A.step === 0) A.step = 1; else { A.done = true; ctx.done(); }
      ctx.save(); render();
    }));
  };
  if (L.done.length === LADDER_TASKS.length && A.done) ctx.done();
  render();
}

// Journey: a time slider at a fixed speed, then the average-speed trap.
const SPEED = 48, JOURNEY_TASKS = [{ ask: 'distance', t: 15, want: 12 }, { ask: 'distance', t: 40, want: 32 }, { ask: 'time', d: 36, want: 45 }];
function mountJourney(ctx) {
  const w = ctx.w; w.journey ??= { task: 0, t: 0, answer: '', done: [] }; w.avg ??= { answer: '', done: false };
  const J = w.journey, V = w.avg;
  const track = (t, mark = null) => {
    const d = (SPEED * t) / 60, x = 60 + (d / 48) * 480;
    let s = `<line x1="60" y1="90" x2="540" y2="90" stroke="${C.muted}" stroke-width="3"/>`;
    for (let k = 0; k <= 48; k += 12) s += `<line x1="${60 + (k / 48) * 480}" y1="82" x2="${60 + (k / 48) * 480}" y2="98" stroke="${C.muted}"/><text x="${60 + (k / 48) * 480}" y="120" text-anchor="middle" fill="${C.muted}" font-size="13">${k} km</text>`;
    if (mark !== null) s += `<line x1="${60 + (mark / 48) * 480}" y1="60" x2="${60 + (mark / 48) * 480}" y2="98" stroke="${C.coral}" stroke-dasharray="4 3"/>`;
    s += `<rect x="${x - 18}" y="64" width="36" height="20" rx="6" fill="${C.coral}"/><circle cx="${x - 9}" cy="86" r="5" fill="${C.cream}"/><circle cx="${x + 9}" cy="86" r="5" fill="${C.cream}"/>`;
    return `<svg viewBox="0 0 ${W} 136" class="mviz" role="img" aria-label="Car at ${SPEED} km/h after ${t} minutes has travelled ${d} km">${s}</svg>`;
  };
  const render = () => {
    if (J.done.length < JOURNEY_TASKS.length) {
      const T = JOURNEY_TASKS[J.task];
      ctx.setTitle(`A car travels at ${SPEED} km/h.`);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · JOURNEY ${progressDots(3, J.done.length, J.task)}</div>${track(J.t, T.ask === 'time' ? T.d : null)}<p class="mexpr" aria-live="polite">${J.t} min</p><p class="mcap">${J.t} minutes = {${J.t}/60} hour</p>`.replace(/\{(\d+)\/60\}/, (_, k) => mathHTML(`{${k}/60}`));
      ctx.body.innerHTML = `<p>${T.ask === 'distance' ? `How far does the car travel in <strong>${T.t} minutes</strong>? Move the time to ${T.t} minutes, then work it out.` : `How many minutes does it take to travel <strong>${T.d} km</strong>? Move the car to the marker.`}</p><div class="mrow"><span>Time</span><div class="mstepper">${btn('data-jt="-5"', '−5 min')}<output>${J.t}</output>${btn('data-jt="5"', '+5 min')}</div></div>${T.ask === 'distance' ? `<label class="field-label" for="jAns">Distance in km</label><input class="lab-input mnum" id="jAns" inputmode="decimal" autocomplete="off" value="${esc(J.answer)}">` : ''}<button class="primary mbtn" data-act="jcheck">Check</button>`;
    } else if (!V.done) {
      ctx.setTitle('Average speed.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · TWO LEGS</div><div class="mcols"><div>Leg 1: 60 km at 30 km/h</div><div>Leg 2: 60 km at 60 km/h</div><div class="mcols-res">average speed = ?</div></div>`;
      ctx.body.innerHTML = `<p>Work out the average speed for the whole 120 km journey.</p><label class="field-label" for="avAns">Average speed in km/h</label><input class="lab-input mnum" id="avAns" inputmode="decimal" autocomplete="off" value="${esc(V.answer)}"><button class="primary mbtn" data-act="avcheck">Check</button>`;
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${triangleSVG({ top: 'distance', left: 'speed', right: 'time' })}`;
      ctx.body.innerHTML = '<p>Minutes must become hours (÷ 60) before using a speed in km/h. Average speed is total distance ÷ total time; the car spends 2 hours at 30 km/h but only 1 at 60 km/h, so the answer is 40, not 45.</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-jt]').forEach(b => (b.onclick = () => { J.t = Math.max(0, Math.min(60, J.t + Number(b.dataset.jt))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-jt="${b.dataset.jt}"]`)?.focus(); }));
    const inp = ctx.body.querySelector('#jAns'); if (inp) inp.oninput = () => { J.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="jcheck"]')?.addEventListener('click', () => {
      const T = JOURNEY_TASKS[J.task];
      if (T.ask === 'distance') {
        if (J.t !== T.t) { ctx.feedback(`Set the time to ${T.t} minutes first.`, true); return; }
        const v = vOf(J.answer);
        if (!v) { ctx.feedback('Enter a distance.', true); return; }
        if (!eq(v, F(T.want))) { ctx.feedback(eq(v, F(SPEED * T.t)) ? `${SPEED} × ${T.t} uses minutes as if they were hours. ${T.t} minutes is {${T.t}/60} of an hour.`.replace(/\{(\d+)\/60\}/, '$1/60') : `distance = speed × time = ${SPEED} × ${T.t}/60.`, true); return; }
      } else if (J.t !== T.want) { ctx.feedback(`At ${J.t} minutes the car has gone ${(SPEED * J.t) / 60} km. ${(SPEED * J.t) / 60 < T.d ? 'Keep going.' : 'Too far.'}`, true); return; }
      if (!J.done.includes(J.task)) J.done.push(J.task);
      ctx.feedback(T.ask === 'distance' ? `Correct: ${SPEED} × ${T.t}/60 = ${T.want} km.` : `Correct: ${T.d} ÷ ${SPEED} = ${T.want / 60} hours = ${T.want} minutes.`);
      if (J.task < JOURNEY_TASKS.length - 1) Object.assign(J, { task: J.task + 1, t: 0, answer: '' });
      ctx.save(); render();
    });
    const av = ctx.body.querySelector('#avAns'); if (av) av.oninput = () => { V.answer = av.value; ctx.save(); };
    ctx.body.querySelector('[data-act="avcheck"]')?.addEventListener('click', () => {
      const v = vOf(V.answer);
      if (!v) { ctx.feedback('Enter a speed.', true); return; }
      if (eq(v, F(45))) { ctx.feedback('45 is the average of the two speeds, but the car is slower for longer. Find each time: 60 ÷ 30 = 2 h and 60 ÷ 60 = 1 h. Then total distance ÷ total time.', true); return; }
      if (!eq(v, F(40))) { ctx.feedback('Average speed = total distance ÷ total time.', true); return; }
      V.done = true; ctx.feedback('Correct: 120 km ÷ 3 h = 40 km/h.'); ctx.save(); render(); ctx.done();
    });
  };
  if (J.done.length === JOURNEY_TASKS.length && V.done) ctx.done();
  render();
}

// Circle slider (exact answers in π), then the Higher-only square-factor finder for surds.
const CIRCLE_TASKS = [{ r: 3, ask: 'area', want: 9 }, { r: 4, ask: 'circumference', want: 8 }];
const SURD_TASKS = [72, 200];
function mountCircleSurd(ctx) {
  const higher = ctx.tier === 'Higher';
  const w = ctx.w; w.circle ??= { task: 0, r: 1, answer: '', done: [] }; w.surd ??= { task: 0, k: 1, inside: null, done: [] };
  const Cc = w.circle, Sd = w.surd;
  const circleDone = Cc.done.length >= CIRCLE_TASKS.length, surdDone = Sd.done.length >= SURD_TASKS.length;
  const render = () => {
    if (Cc.done.length < CIRCLE_TASKS.length) {
      const T = CIRCLE_TASKS[Cc.task];
      ctx.setTitle('Keep the answer exact.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · CIRCLES ${progressDots(2, Cc.done.length, Cc.task)}</div>${circleSVG({ r: Cc.r })}`;
      ctx.body.innerHTML = `<p>Set the radius to ${T.r} cm, then give the <strong>${T.ask}</strong> in terms of π.</p><div class="mrow"><span>Radius</span><div class="mstepper">${btn('data-cr="-1"', '−', 'aria-label="Smaller radius"')}<output>${Cc.r} cm</output>${btn('data-cr="1"', '+', 'aria-label="Larger radius"')}</div></div><label class="field-label" for="crAns">Exact ${T.ask}</label><input class="lab-input mnum" id="crAns" autocomplete="off" placeholder="e.g. 9π" value="${esc(Cc.answer)}"><div class="mkeys"><button type="button" class="secondary" data-mk="π">π</button></div><button class="primary mbtn" data-act="crcheck">Check</button>`;
    } else if (higher && Sd.done.length < SURD_TASKS.length) {
      const n = SURD_TASKS[Sd.task];
      Sd.inside ??= n;
      const squares = [4, 9, 16, 25, 36, 49, 64, 100].filter(q => Sd.inside % q === 0);
      ctx.setTitle('Take out square factors (Higher).');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · SIMPLIFY √${n} ${progressDots(2, Sd.done.length, Sd.task)}</div><p class="mexpr" aria-live="polite">√${n} = ${Sd.k === 1 ? '' : Sd.k}√${Sd.inside}</p><p class="mcap">√(a × b) = √a × √b</p>`;
      ctx.body.innerHTML = squares.length
        ? `<p>Choose a square number that divides ${Sd.inside}. Its square root comes outside the root sign.</p><div class="choices mgrid">${squares.map(q => btn(`data-sq="${q}"`, `${Sd.inside} = ${q} × ${Sd.inside / q}`)).join('')}</div>`
        : `<p>${Sd.inside} has no square factor left.</p><button class="primary mbtn" data-act="sqdone">√${n} = ${Sd.k}√${Sd.inside} is fully simplified</button>`;
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${circleSVG({ r: 3 })}`;
      ctx.body.innerHTML = `<p>Exact answers keep π: area πr², circumference 2πr.${higher ? ' A surd is simplest when no square factor is left under the root; choosing the largest square factor first does it in one step.' : ''}</p><p class="mdone">Investigation complete ✓</p>`;
      return;
    }
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-cr]').forEach(b => (b.onclick = () => { Cc.r = Math.max(1, Math.min(6, Cc.r + Number(b.dataset.cr))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-cr="${b.dataset.cr}"]`)?.focus(); }));
    const inp = ctx.body.querySelector('#crAns'); if (inp) inp.oninput = () => { Cc.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-mk]')?.addEventListener('click', () => { const i = ctx.body.querySelector('#crAns'); i.value += 'π'; Cc.answer = i.value; ctx.save(); i.focus(); });
    ctx.body.querySelector('[data-act="crcheck"]')?.addEventListener('click', () => {
      const T = CIRCLE_TASKS[Cc.task];
      if (Cc.r !== T.r) { ctx.feedback(`Set the radius to ${T.r} cm first.`, true); return; }
      const p = parseExact(Cc.answer);
      if (!p) { ctx.feedback('Write the answer using π, for example 9π.', true); return; }
      const c = canonical(p), piCoef = c.map.π;
      if (!piCoef) { ctx.feedback(Math.abs(c.a.n / c.a.d - T.want * Math.PI) < 0.1 ? 'That is a decimal approximation. Give the exact answer in terms of π.' : 'The answer should be a number of πs.', true); return; }
      if (!eq(piCoef, F(T.want))) { ctx.feedback(T.ask === 'area' && eq(piCoef, F(2 * T.r)) ? 'That is the circumference (2πr). Area is πr².' : T.ask === 'circumference' && eq(piCoef, F(T.r * T.r)) ? 'That is the area (πr²). Circumference is 2πr.' : `Use ${T.ask === 'area' ? 'πr²' : '2πr'} with r = ${T.r}.`, true); return; }
      if (!Cc.done.includes(Cc.task)) Cc.done.push(Cc.task);
      ctx.feedback(`Correct: ${T.ask} = ${T.want}π cm${T.ask === 'area' ? '²' : ''} (about ${(T.want * Math.PI).toFixed(1)}).`);
      if (Cc.task < CIRCLE_TASKS.length - 1) Object.assign(Cc, { task: Cc.task + 1, answer: '' });
      ctx.save(); render();
      if (Cc.done.length === CIRCLE_TASKS.length && !higher) ctx.done();
    });
    ctx.body.querySelectorAll('[data-sq]').forEach(b => (b.onclick = () => {
      const q = Number(b.dataset.sq); Sd.k *= Math.sqrt(q); Sd.inside /= q;
      const best = squareFree(SURD_TASKS[Sd.task]);
      ctx.feedback(Sd.inside === best.s ? '' : `√${q} = ${Math.sqrt(q)} comes outside. ${squareFree(Sd.inside).k > 1 ? `${Sd.inside} still has a square factor: keep going.` : ''}`);
      ctx.save(); render();
    }));
    ctx.body.querySelector('[data-act="sqdone"]')?.addEventListener('click', () => {
      const n = SURD_TASKS[Sd.task];
      if (!Sd.done.includes(Sd.task)) Sd.done.push(Sd.task);
      ctx.feedback(`Correct: √${n} = ${Sd.k}√${Sd.inside}. Check: ${Sd.k}² × ${Sd.inside} = ${Sd.k * Sd.k * Sd.inside}.`);
      if (Sd.task < SURD_TASKS.length - 1) Object.assign(Sd, { task: Sd.task + 1, k: 1, inside: null });
      ctx.save(); render();
      if (Sd.done.length === SURD_TASKS.length) ctx.done();
    });
  };
  if (circleDone && (surdDone || !higher)) ctx.done();
  render();
}

// Ratio bars to fractions; then reciprocal cards.
const RATIO_TASKS = [{ a: 3, b: 5, la: 'Red', lb: 'Blue', ask: 'b' }, { a: 2, b: 7, la: 'Walk', lb: 'Bus', ask: 'a' }, { a: 4, b: 6, la: 'Cats', lb: 'Dogs', ask: 'b' }];
const RECIP = [['4', '1/4'], ['{2/3}', '3/2'], ['0.2', '5']];
function mountRatioBar(ctx) {
  const w = ctx.w; w.rbar ??= { task: 0, A: 0, B: 0, answer: '', done: [] }; w.recip ??= { vals: {}, done: false };
  const R = w.rbar, Q = w.recip;
  const render = () => {
    if (R.done.length < RATIO_TASKS.length) {
      const T = RATIO_TASKS[R.task], built = R.A === T.a && R.B === T.b;
      ctx.setTitle('Build the ratio as equal parts.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · RATIO BAR ${progressDots(3, R.done.length, R.task)}</div><p class="mexpr">${T.la} : ${T.lb} = ${T.a} : ${T.b}</p>${ratioBar({ a: T.a, b: T.b, la: T.la, lb: T.lb, setA: R.A, setB: R.B })}`;
      ctx.body.innerHTML = `<p>Build a bar with the right number of equal parts for each.</p><div class="mrow"><span>${T.la} parts</span><div class="mstepper">${btn('data-rb="A,-1"', '−')}<output>${R.A}</output>${btn('data-rb="A,1"', '+')}</div></div><div class="mrow"><span>${T.lb} parts</span><div class="mstepper">${btn('data-rb="B,-1"', '−')}<output>${R.B}</output>${btn('data-rb="B,1"', '+')}</div></div>${built ? `<label class="field-label" for="rbAns">What fraction of the whole bar is ${T.ask === 'a' ? T.la.toLowerCase() : T.lb.toLowerCase()}? (simplest form)</label><input class="lab-input mnum" id="rbAns" autocomplete="off" placeholder="e.g. 3/8" value="${esc(R.answer)}"><button class="primary mbtn" data-act="rbcheck">Check</button>` : ''}`;
    } else if (!Q.done) {
      ctx.setTitle('Reciprocals.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · RECIPROCALS</div><div class="mcols">${RECIP.map(([x]) => `<div>${mathHTML(x)} × ? = 1</div>`).join('')}</div>`;
      ctx.body.innerHTML = `<p>A number times its reciprocal is 1. Find each reciprocal (as a fraction or whole number).</p>${RECIP.map(([x], i) => `<label class="field-label" for="rc${i}">Reciprocal of ${mathHTML(x)}</label><input class="lab-input mnum" id="rc${i}" data-rc="${i}" autocomplete="off" value="${esc(Q.vals[i] ?? '')}">`).join('')}<button class="primary mbtn" data-act="rccheck">Check</button>`;
    } else {
      ctx.setTitle('Investigation complete.');
      ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${ratioBar({ a: 3, b: 5, la: 'Red', lb: 'Blue' })}`;
      ctx.body.innerHTML = '<p>In a : b, each quantity is a fraction of a + b parts. A reciprocal turns a fraction over; their product is 1.</p><p class="mdone">Investigation complete ✓</p>';
      return;
    }
    bind();
  };
  const bind = () => {
    const T = RATIO_TASKS[R.task];
    ctx.body.querySelectorAll('[data-rb]').forEach(b => (b.onclick = () => { const [k, d] = b.dataset.rb.split(','); R[k] = Math.max(0, Math.min(10, R[k] + Number(d))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(`[data-rb="${b.dataset.rb}"]`)?.focus(); }));
    const inp = ctx.body.querySelector('#rbAns'); if (inp) inp.oninput = () => { R.answer = inp.value; ctx.save(); };
    ctx.body.querySelector('[data-act="rbcheck"]')?.addEventListener('click', () => {
      const p = parseNumber(R.answer), part = T.ask === 'a' ? T.a : T.b, other = T.ask === 'a' ? T.b : T.a, want = F(part, T.a + T.b);
      if (!p) { ctx.feedback('Write a fraction such as 3/8.', true); return; }
      if (!eq(p.value, want)) { ctx.feedback(eq(p.value, F(part, other)) || eq(p.value, F(other, part)) ? `That fraction compares one part with the other. The question asks for a fraction of the whole bar, which has ${T.a + T.b} parts.` : `Count the ${T.ask === 'a' ? T.la.toLowerCase() : T.lb.toLowerCase()} parts and all the parts.`, true); return; }
      if (p.shape.kind !== 'proper' || F(p.shape.n, p.shape.d).d !== p.shape.d) { ctx.feedback(`Right value. Now simplify: ${fracMarkup(want).replace(/[{}]/g, '')}.`, true); return; }
      if (!R.done.includes(R.task)) R.done.push(R.task);
      ctx.feedback(`Correct: ${part} of ${T.a + T.b} parts = ${fracMarkup(want).replace(/[{}]/g, '')}.`);
      if (R.task < RATIO_TASKS.length - 1) Object.assign(R, { task: R.task + 1, A: 0, B: 0, answer: '' });
      ctx.save(); render();
    });
    ctx.body.querySelectorAll('[data-rc]').forEach(i => (i.oninput = () => { Q.vals[i.dataset.rc] = i.value; ctx.save(); }));
    ctx.body.querySelector('[data-act="rccheck"]')?.addEventListener('click', () => {
      for (let i = 0; i < RECIP.length; i++) {
        const p = parseNumber(Q.vals[i] ?? ''), want = parseNumber(RECIP[i][1]).value;
        if (!p || !eq(p.value, want)) {
          const x = parseNumber(RECIP[i][0].replace(/[{}]/g, '')).value;
          ctx.feedback(p && eq(p.value, F(-x.n, x.d)) ? 'A reciprocal is not the negative: it is 1 divided by the number.' : `Reciprocal of ${RECIP[i][0].replace(/[{}]/g, '')}: write it as a fraction and turn it upside down.`, true);
          return;
        }
      }
      Q.done = true; ctx.feedback('Correct: 4 × 1/4 = 1, 2/3 × 3/2 = 1, 0.2 × 5 = 1.'); ctx.save(); render(); ctx.done();
    });
  };
  if (R.done.length === RATIO_TASKS.length && Q.done) ctx.done();
  render();
}

export const MODELS3 = { 'listing-grid': mountListing, 'unit-ladder': mountUnitLadder, journey: mountJourney, 'circle-surd': mountCircleSurd, 'ratio-bar': mountRatioBar };
