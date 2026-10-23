// Visual models and investigations for Ratio batch 1: simplifying, sharing with bar models, best
// buys and proportion, percentage bars, and compound against simple growth. visual9() draws
// worked-example bar models; MODELS9 holds the investigations. Every render checks ctx.isActive.
import { mathHTML, esc } from './render.js?v=20261023-maths-r9';
import { num } from './frac.js?v=20261023-maths-r9';
import { C, btn, progressDots } from './models-number.js?v=20261023-maths-r9';

const M = s => mathHTML(s);
const W = 600;
const vNum = s => { const t = String(s ?? '').trim().replace(/−/g, '-').replace(/^£/, ''); return t === '' || Number.isNaN(Number(t)) ? null : Number(t); };
const done = (ctx, panel, text) => { ctx.setTitle('Investigation complete.'); ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div>${panel}`; ctx.body.innerHTML = `<p>${text}</p><p class="mdone">Investigation complete ✓</p>`; ctx.done(); };
const near = (a, b) => a !== null && Math.abs(a - b) < 1e-9;

/** Bar model: rows of equal boxes; parts may be fractional (drawn as a part box); extra = boxes highlighted. */
export function barsSVG({ rows = [], unit = 52 }) {
  const maxParts = Math.max(...rows.map(r => r.parts)), bw = Math.min(unit, (W - 140) / maxParts), h = 40;
  let s = '';
  rows.forEach((row, i) => {
    const y = 20 + i * 62;
    s += `<text x="100" y="${y + 26}" text-anchor="end" fill="${C.cream}" font-size="15">${esc(row.label)}</text>`;
    for (let k = 0; k < Math.ceil(row.parts); k++) {
      const w = Math.min(1, row.parts - k) * bw, hi = row.extra && k >= row.parts - row.extra;
      s += `<rect x="${112 + k * bw}" y="${y}" width="${w}" height="${h}" fill="${hi ? '#ed8b7855' : '#a8d5b533'}" stroke="${C.coral}" stroke-width="2"/>`;
      if (row.value && w === bw) s += `<text x="${112 + k * bw + bw / 2}" y="${y + 26}" text-anchor="middle" fill="${C.cream}" font-size="13">${esc(row.value)}</text>`;
    }
  });
  const H = 20 + rows.length * 62;
  return `<svg viewBox="0 0 ${W} ${H}" class="mviz" role="img" aria-label="Bar model: ${rows.map(r => `${r.label} ${r.parts} part${r.parts === 1 ? '' : 's'}${r.value ? ', each ' + r.value : ''}`).join('; ')}">${s}</svg>`;
}
export function visual9(v) {
  if (!v || v.kind !== 'ratiobars') return '';
  return barsSVG(v) + (v.caption ? `<p class="mcap">${M(v.caption)}</p>` : '');
}

/* ───────── 1. Simplify by common factors; units; 1 : n ───────── */
const UNIT_OPTS = ['40 : 2', '40 : 200', '4 : 2', '400 : 2'];
function mountSimplifier(ctx) {
  const w = ctx.w; w.sm ??= { a: 36, b: 48, ok: false }; w.un ??= { ok: false }; w.one ??= { raw: '', ok: false };
  const Sm = w.sm, U = w.un, O = w.one;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Sm.ok) {
      ctx.setTitle('Simplify 36 : 48 one factor at a time.');
      const g = (x, y) => (y ? g(y, x % y) : x);
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · COMMON FACTORS ${progressDots(3, 0, 0)}</div><div class="mbigexpr">${Sm.a} : ${Sm.b}</div>${barsSVG({ rows: [{ label: 'first', parts: Math.min(Sm.a, 12) }, { label: 'second', parts: Math.min(Sm.b, 12) }] })}<p class="mcap">${g(Sm.a, Sm.b) === 1 ? 'No common factor left.' : 'Both parts still share a factor.'}</p>`;
      ctx.body.innerHTML = `<p>Divide both parts by a common factor. When there is none left, say it is simplest.</p><div class="mtiles">${[2, 3, 5].map(k => `<button class="choice mtile" data-dv="${k}">÷ ${k}</button>`).join('')}</div><button class="primary mbtn" data-act="simplest">It is in its simplest form</button><button class="secondary mbtn" data-act="reset">Start again</button>`;
    } else if (!U.ok) {
      ctx.setTitle('Compare 40 cm with 2 m.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · MATCH THE UNITS ${progressDots(3, 1, 1)}</div><div class="mbigexpr">40 cm : 2 m</div>`;
      ctx.body.innerHTML = '<p>Which ratio uses the same units for both parts?</p>' + `<div class="mtiles">${UNIT_OPTS.map((o, i) => `<button class="choice mtile" data-un="${i}">${esc(o)}</button>`).join('')}</div>`;
    } else if (!O.ok) {
      ctx.setTitle('Write 4 : 10 in the form 1 : n.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · 1 : n ${progressDots(3, 2, 2)}</div><div class="mbigexpr">4 : 10 = 1 : n</div>${barsSVG({ rows: [{ label: '4', parts: 1, value: '÷ 4' }, { label: '10', parts: 2.5, value: '÷ 4' }] })}`;
      ctx.body.innerHTML = `<div class="mrow-in"><label class="field-label" for="nn">n =</label><input class="lab-input mnum" id="nn" inputmode="decimal" autocomplete="off" value="${esc(O.raw)}"><button class="primary mbtn" data-act="n">Check</button></div>`;
    } else return done(ctx, `<div class="mwork"><div>36 : 48 = 3 : 4</div><div>40 cm : 2 m = 40 : 200 = 1 : 5</div><div>4 : 10 = 1 : 2.5</div></div>`, 'Divide every part by common factors until none is left; the highest common factor does it in one step. Units must match before comparing: 2 m is 200 cm. In the form 1 : n, n can be a decimal: divide both parts by the first part.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-dv]').forEach(b => (b.onclick = () => {
      const k = Number(b.dataset.dv);
      if (Sm.a % k || Sm.b % k) { ctx.feedback(`${Sm.a % k ? Sm.a : Sm.b} is not divisible by ${k}: ${k} is not a common factor.`, true); return; }
      Sm.a /= k; Sm.b /= k; ctx.feedback(`÷ ${k}: ${Sm.a} : ${Sm.b}`); ctx.save(); render();
    }));
    ctx.body.querySelector('[data-act="reset"]')?.addEventListener('click', () => { Sm.a = 36; Sm.b = 48; ctx.feedback(''); ctx.save(); render(); });
    ctx.body.querySelector('[data-act="simplest"]')?.addEventListener('click', () => {
      if (Sm.a === 3 && Sm.b === 4) { Sm.ok = true; ctx.save(); render(); ctx.feedback('3 : 4 ✓ The highest common factor of 36 and 48 is 12.'); return; }
      ctx.feedback(`${Sm.a} and ${Sm.b} still share a factor: keep dividing.`, true);
    });
    ctx.body.querySelectorAll('[data-un]').forEach(b => (b.onclick = () => {
      const i = Number(b.dataset.un);
      if (i === 1) { U.ok = true; ctx.save(); render(); ctx.feedback('40 : 200 = 1 : 5 ✓'); return; }
      ctx.feedback(['40 : 2 compares centimetres with metres: change 2 m into centimetres.', '', '4 : 2 changes the 40 but not the 2 m.', '400 : 2 converts the wrong part: 2 m = 200 cm.'][i], true);
    }));
    const nn = ctx.body.querySelector('#nn'); if (nn) nn.oninput = () => { O.raw = nn.value; ctx.save(); };
    ctx.body.querySelector('[data-act="n"]')?.addEventListener('click', () => { const v = vNum(O.raw); if (near(v, 2.5)) { O.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 0.4) ? 'Divide by 4 (the first part), so 4 becomes 1: 10 ÷ 4.' : near(v, 6) ? 'Divide, do not subtract: 10 ÷ 4.' : 'Divide both parts by 4.', true); });
  };
  render();
}

/* ───────── 2. Bar-model sharing ───────── */
function mountShareBars(ctx) {
  const w = ctx.w; w.sh ??= { a: 1, b: 1, setOK: false, part: '', ok: false }; w.df ??= { part: '', a: '', ok: false };
  const Sh = w.sh, D = w.df;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Sh.ok) {
      ctx.setTitle('Share £60 in the ratio 2 : 3.');
      const val = Sh.setOK && near(vNum(Sh.part), 12) ? '£12' : '';
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · BAR MODEL ${progressDots(2, 0, 0)}</div><div class="mbigexpr">£60</div>${barsSVG({ rows: [{ label: 'Asha', parts: Sh.a, value: val }, { label: 'Ben', parts: Sh.b, value: val }] })}`;
      ctx.body.innerHTML = !Sh.setOK ? `<p>Set the number of equal boxes for each person.</p><div class="mrow"><span>Asha</span><div class="mstepper">${btn('data-sa="-1"', '−1')}<output>${Sh.a}</output>${btn('data-sa="1"', '+1')}</div></div><div class="mrow"><span>Ben</span><div class="mstepper">${btn('data-sb="-1"', '−1')}<output>${Sh.b}</output>${btn('data-sb="1"', '+1')}</div></div><button class="primary mbtn" data-act="set">Check the bars</button>` : `<p>There are 5 equal boxes worth £60 altogether. How much is one box?</p><div class="mrow-in"><span>£</span><input class="lab-input mnum" id="pv" inputmode="decimal" autocomplete="off" value="${esc(Sh.part)}"><button class="primary mbtn" data-act="part">Check</button></div>`;
    } else if (!D.ok) {
      ctx.setTitle('Share in 2 : 5 when Finn gets £18 more than Ella.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · THE DIFFERENCE ${progressDots(2, 1, 1)}</div>${barsSVG({ rows: [{ label: 'Ella', parts: 2 }, { label: 'Finn', parts: 5, extra: 3 }] })}<p class="mcap">The highlighted boxes are the difference: £18.</p>`;
      ctx.body.innerHTML = `<div class="mpair"><label class="field-label">One box: £ <input class="lab-input mtext msmall" id="dp" inputmode="decimal" autocomplete="off" value="${esc(D.part)}"></label><label class="field-label">Ella gets: £ <input class="lab-input mtext msmall" id="da" inputmode="decimal" autocomplete="off" value="${esc(D.a)}"></label></div><button class="primary mbtn" data-act="diff">Check</button>`;
    } else return done(ctx, barsSVG({ rows: [{ label: 'Ella', parts: 2, value: '£6' }, { label: 'Finn', parts: 5, value: '£6', extra: 3 }] }), 'A bar model makes the equal parts visible. £60 in 2 : 3 is 5 boxes of £12: £24 and £36. When you know the difference, count the boxes in the difference: Finn has 3 more boxes, worth £18, so one box is £6, Ella gets £12 and Finn £30.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-sa],[data-sb]').forEach(b => (b.onclick = () => { if (b.dataset.sa) Sh.a = Math.max(1, Math.min(8, Sh.a + Number(b.dataset.sa))); else Sh.b = Math.max(1, Math.min(8, Sh.b + Number(b.dataset.sb))); ctx.feedback(''); ctx.save(); render(); ctx.body.querySelector(b.dataset.sa ? `[data-sa="${b.dataset.sa}"]` : `[data-sb="${b.dataset.sb}"]`)?.focus(); }));
    ctx.body.querySelector('[data-act="set"]')?.addEventListener('click', () => { if (Sh.a === 2 && Sh.b === 3) { Sh.setOK = true; ctx.save(); render(); ctx.feedback('2 boxes and 3 boxes ✓'); return; } ctx.feedback(Sh.a === 3 && Sh.b === 2 ? 'The ratio is Asha : Ben = 2 : 3, so Asha has 2 boxes.' : 'One box for each part of the ratio: 2 for Asha, 3 for Ben.', true); });
    const pv = ctx.body.querySelector('#pv'); if (pv) pv.oninput = () => { Sh.part = pv.value; ctx.save(); };
    ctx.body.querySelector('[data-act="part"]')?.addEventListener('click', () => { const v = vNum(Sh.part); if (near(v, 12)) { Sh.ok = true; ctx.save(); render(); ctx.feedback('£12 a box: Asha £24, Ben £36 ✓'); return; } ctx.feedback(near(v, 30) || near(v, 20) ? 'Divide by the total number of boxes, 5, not by one person\'s boxes.' : '£60 ÷ 5 boxes.', true); });
    for (const id of ['dp', 'da']) { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { D[id === 'dp' ? 'part' : 'a'] = i.value; ctx.save(); }; }
    ctx.body.querySelector('[data-act="diff"]')?.addEventListener('click', () => {
      const p = vNum(D.part), a = vNum(D.a);
      if (near(p, 6) && near(a, 12)) { D.ok = true; ctx.save(); render(); return; }
      ctx.feedback(!near(p, 6) ? (near(p, 18) ? '£18 is the 3 highlighted boxes, not one box.' : 'The difference is 3 boxes: £18 ÷ 3.') : 'Ella has 2 boxes.', true);
    });
  };
  render();
}

/* ───────── 3. Best buy, recipe, inverse proportion ───────── */
const PACKS = [{ g: 400, p: 168 }, { g: 600, p: 234 }, { g: 250, p: 110 }];
function mountBestBuy(ctx) {
  const w = ctx.w; w.bb ??= { shown: [], ok: false }; w.rc ??= { f: '', e: '', ok: false }; w.iv ??= { raw: '', ok: false };
  const B = w.bb, R = w.rc, I = w.iv;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!B.ok) {
      ctx.setTitle('Which pack is the best value?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · UNIT PRICE ${progressDots(3, 0, 0)}</div><table class="mtable"><thead><tr><th>Pack</th><th>Mass</th><th>Price</th><th>Per 100 g</th></tr></thead><tbody>${PACKS.map((x, i) => `<tr><td>${'ABC'[i]}</td><td>${x.g} g</td><td>£${(x.p / 100).toFixed(2)}</td><td>${B.shown.includes(i) ? (x.p / x.g * 100).toFixed(0) + 'p' : '?'}</td></tr>`).join('')}</tbody></table>`;
      ctx.body.innerHTML = `<p>Work out the price per 100 g of each pack (tap to reveal it), then choose the best value.</p><div class="mtiles">${PACKS.map((_, i) => `<button class="choice mtile" data-sh="${i}">Price per 100 g of ${'ABC'[i]}</button>`).join('')}</div><div class="mtiles">${PACKS.map((_, i) => `<button class="choice mtile" data-best="${i}">Pack ${'ABC'[i]}</button>`).join('')}</div>`;
    } else if (!R.ok) {
      ctx.setTitle('Scale a recipe for 4 people up to 6.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · DIRECT PROPORTION ${progressDots(3, 1, 1)}</div><div class="mwork"><div>Pancakes for 4: 200 g flour, 2 eggs</div><div>× {6/4} = × 1.5</div></div>`;
      ctx.body.innerHTML = `<div class="mpair"><label class="field-label">Flour for 6 (g) <input class="lab-input mtext msmall" id="rf" inputmode="decimal" autocomplete="off" value="${esc(R.f)}"></label><label class="field-label">Eggs for 6 <input class="lab-input mtext msmall" id="re" inputmode="decimal" autocomplete="off" value="${esc(R.e)}"></label></div><button class="primary mbtn" data-act="rc">Check</button>`;
    } else if (!I.ok) {
      ctx.setTitle('3 builders take 8 days. How long do 4 builders take?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · INVERSE PROPORTION ${progressDots(3, 2, 2)}</div>${barsSVG({ rows: [{ label: '3 builders', parts: 8, value: '' }, { label: '4 builders', parts: 6, value: '' }] })}<p class="mcap">The total work is the same: builders × days.</p>`;
      ctx.body.innerHTML = `<div class="mrow-in"><input class="lab-input mnum" id="iv" inputmode="decimal" autocomplete="off" value="${esc(I.raw)}"><span>days</span><button class="primary mbtn" data-act="iv">Check</button></div>`;
    } else return done(ctx, `<div class="mwork"><div>Best value: 39p per 100 g</div><div>Recipe × 1.5: 300 g, 3 eggs</div><div>3 × 8 = 24 builder-days; 24 ÷ 4 = 6 days</div></div>`, 'Compare value with a unit price, such as pence per 100 g: the biggest pack is not always the cheapest per gram, so check. Direct proportion multiplies every amount by the same factor. In inverse proportion the product stays fixed: more builders, fewer days.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-sh]').forEach(b => (b.onclick = () => { const i = Number(b.dataset.sh); if (!B.shown.includes(i)) B.shown.push(i); ctx.feedback(`${PACKS[i].p}p ÷ ${PACKS[i].g / 100} = ${(PACKS[i].p / PACKS[i].g * 100).toFixed(0)}p per 100 g`); ctx.save(); render(); }));
    ctx.body.querySelectorAll('[data-best]').forEach(b => (b.onclick = () => {
      const i = Number(b.dataset.best);
      if (B.shown.length < 3) { ctx.feedback('Work out all three unit prices before deciding.', true); return; }
      if (i === 1) { B.ok = true; ctx.save(); render(); ctx.feedback('Pack B: 39p per 100 g ✓'); return; }
      ctx.feedback(i === 0 ? 'Pack A is 42p per 100 g; Pack B is cheaper per 100 g.' : 'Pack C is the cheapest pack, but 44p per 100 g is the worst value.', true);
    }));
    for (const id of ['rf', 're']) { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { R[id === 'rf' ? 'f' : 'e'] = i.value; ctx.save(); }; }
    ctx.body.querySelector('[data-act="rc"]')?.addEventListener('click', () => {
      const f = vNum(R.f), e = vNum(R.e);
      if (near(f, 300) && near(e, 3)) { R.ok = true; ctx.save(); render(); return; }
      ctx.feedback(near(f, 202) || near(e, 4) ? 'Proportion multiplies: for 6 people use 1.5 times as much, not 2 more.' : !near(f, 300) ? '200 g × 1.5.' : '2 eggs × 1.5.', true);
    });
    const iv = ctx.body.querySelector('#iv'); if (iv) iv.oninput = () => { I.raw = iv.value; ctx.save(); };
    ctx.body.querySelector('[data-act="iv"]')?.addEventListener('click', () => { const v = vNum(I.raw); if (near(v, 6)) { I.ok = true; ctx.save(); render(); return; } ctx.feedback(v !== null && Math.abs(v - 32 / 3) < 0.01 ? 'More builders finish sooner: this is inverse proportion. 3 × 8 = 24 builder-days, shared by 4.' : 'Find the total builder-days (3 × 8), then divide by 4.', true); });
  };
  render();
}

/* ───────── 4. Percentage bar: multiplier, reverse, change ───────── */
function mountPercentBar(ctx) {
  const w = ctx.w; w.mu ??= { ok: false }; w.rv ??= { ten: '', orig: '', ok: false }; w.ch ??= { raw: '', ok: false };
  const Mu = w.mu, Rv = w.rv, Ch = w.ch;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Mu.ok) {
      ctx.setTitle('Increase £80 by 15% in one step.');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · MULTIPLIER ${progressDots(3, 0, 0)}</div>${barsSVG({ rows: [{ label: '£80', parts: 10 }, { label: '+15%', parts: 11.5, extra: 1.5 }] })}<p class="mcap">100% + 15% = 115%</p>`;
      ctx.body.innerHTML = `<p>Which single multiplier increases an amount by 15%?</p><div class="mtiles">${['0.15', '1.15', '1.5', '0.85'].map((o, i) => `<button class="choice mtile" data-mu="${i}">× ${o}</button>`).join('')}</div>`;
    } else if (!Rv.ok) {
      ctx.setTitle('After 20% off, a coat costs £48. What was the original price?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · ORIGINAL VALUE ${progressDots(3, 1, 1)}</div>${barsSVG({ rows: [{ label: '£48', parts: 8, value: near(vNum(Rv.ten), 6) ? '£6' : '' }, { label: 'original', parts: 10, value: near(vNum(Rv.ten), 6) ? '£6' : '' }] })}<p class="mcap">The sale price is 80% of the original: 8 boxes of 10%.</p>`;
      ctx.body.innerHTML = `<div class="mpair"><label class="field-label">10% of the original: £ <input class="lab-input mtext msmall" id="rt" inputmode="decimal" autocomplete="off" value="${esc(Rv.ten)}"></label><label class="field-label">Original price: £ <input class="lab-input mtext msmall" id="ro" inputmode="decimal" autocomplete="off" value="${esc(Rv.orig)}"></label></div><button class="primary mbtn" data-act="rv">Check</button>`;
    } else if (!Ch.ok) {
      ctx.setTitle('A ticket rises from £40 to £50. Percentage increase?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART C · PERCENTAGE CHANGE ${progressDots(3, 2, 2)}</div>${barsSVG({ rows: [{ label: '£40', parts: 4, value: '£10' }, { label: '£50', parts: 5, value: '£10', extra: 1 }] })}`;
      ctx.body.innerHTML = `<div class="mrow-in"><input class="lab-input mnum" id="pc" inputmode="decimal" autocomplete="off" value="${esc(Ch.raw)}"><span>%</span><button class="primary mbtn" data-act="pc">Check</button></div>`;
    } else return done(ctx, `<div class="mwork"><div>+15%: × 1.15</div><div>80% = £48, so 100% = £60</div><div>£10 ÷ £40 = 25%</div></div>`, 'A multiplier does a percentage change in one step: 100% + 15% is × 1.15, and 100% − 20% is × 0.8. To find an original value, the new amount is a known percentage of the original, so divide by the multiplier. Percentage change always compares with the original value.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelectorAll('[data-mu]').forEach(b => (b.onclick = () => { const i = Number(b.dataset.mu); if (i === 1) { Mu.ok = true; ctx.save(); render(); ctx.feedback('£80 × 1.15 = £92 ✓'); return; } ctx.feedback(['× 0.15 gives just the 15% (£12), not the new amount.', '', '× 1.5 is a 50% increase.', '× 0.85 is a 15% decrease.'][i], true); }));
    for (const id of ['rt', 'ro']) { const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { Rv[id === 'rt' ? 'ten' : 'orig'] = i.value; ctx.save(); }; }
    ctx.body.querySelector('[data-act="rv"]')?.addEventListener('click', () => {
      const t = vNum(Rv.ten), o = vNum(Rv.orig);
      if (near(t, 6) && near(o, 60)) { Rv.ok = true; ctx.save(); render(); return; }
      ctx.feedback(near(o, 57.6) ? '20% of £48 is not the discount: the 20% was of the original price. 8 boxes = £48.' : !near(t, 6) ? 'The sale price is 8 boxes of 10%: £48 ÷ 8.' : '10 boxes make the original price.', true);
    });
    const pc = ctx.body.querySelector('#pc'); if (pc) pc.oninput = () => { Ch.raw = pc.value; ctx.save(); };
    ctx.body.querySelector('[data-act="pc"]')?.addEventListener('click', () => { const v = vNum(Ch.raw); if (near(v, 25)) { Ch.ok = true; ctx.save(); render(); return; } ctx.feedback(near(v, 20) ? 'Divide the change by the original price (£40), not the new price.' : near(v, 10) ? '£10 is the change in pounds; write it as a percentage of £40.' : 'Change ÷ original × 100.', true); });
  };
  render();
}

/* ───────── 5. Compound against simple; repeated change ───────── */
const simpleV = n => 1000 + 100 * n, compV = n => 1000 * 1.1 ** n;
function mountCompoundRace(ctx) {
  const w = ctx.w; w.cr ??= { n: 1, raw: '', ok: false }; w.rp ??= { ok: false };
  const Cr = w.cr, Rp = w.rp;
  const render = () => {
    if (ctx.isActive && !ctx.isActive()) return;
    if (!Cr.ok) {
      ctx.setTitle('£1000 at 10% a year: simple or compound?');
      const rows = Array.from({ length: Cr.n + 1 }, (_, i) => `<tr><td>${i}</td><td>£${simpleV(i).toFixed(2)}</td><td>£${compV(i).toFixed(2)}</td><td>£${(compV(i) - simpleV(i)).toFixed(2)}</td></tr>`).join('');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART A · COMPOUND VS SIMPLE ${progressDots(2, 0, 0)}</div><table class="mtable"><thead><tr><th>Year</th><th>Simple</th><th>Compound</th><th>Gap</th></tr></thead><tbody>${rows}</tbody></table>`;
      ctx.body.innerHTML = `<p>Add years to the table. After how many whole years is the compound account at least £100 ahead?</p><button class="secondary mbtn" data-act="yr">Add a year</button><div class="mrow-in"><input class="lab-input mnum" id="cy" inputmode="numeric" autocomplete="off" value="${esc(Cr.raw)}"><span>years</span><button class="primary mbtn" data-act="cy">Check</button></div>`;
    } else if (!Rp.ok) {
      ctx.setTitle('+20%, then −20%: back where you started?');
      ctx.panel.innerHTML = `<div class="mpanel-k">PART B · REPEATED CHANGE ${progressDots(2, 1, 1)}</div><div class="mwork"><div>£100 × 1.2 = £120</div><div>£120 × 0.8 = £96</div></div>`;
      ctx.body.innerHTML = `<p>What is the overall percentage change?</p><div class="mtiles">${['0%', '−4%', '+4%', '−20%'].map((o, i) => `<button class="choice mtile" data-rp="${i}">${o}</button>`).join('')}</div>`;
    } else return done(ctx, `<div class="mwork"><div>Year 5: simple £1500, compound £1610.51</div><div>1.2 × 0.8 = 0.96: −4%</div></div>`, 'Simple interest adds the same £100 every year; compound interest multiplies by 1.1, so it earns interest on interest and pulls ahead faster each year. Successive percentage changes multiply: +20% then −20% is × 0.96, a 4% fall, because the 20% decrease is of the larger amount.');
    bind();
  };
  const bind = () => {
    ctx.body.querySelector('[data-act="yr"]')?.addEventListener('click', () => { if (Cr.n < 10) Cr.n++; ctx.save(); render(); ctx.body.querySelector('[data-act="yr"]')?.focus(); });
    const cy = ctx.body.querySelector('#cy'); if (cy) cy.oninput = () => { Cr.raw = cy.value; ctx.save(); };
    ctx.body.querySelector('[data-act="cy"]')?.addEventListener('click', () => { const v = vNum(Cr.raw); if (v === 5) { Cr.ok = true; ctx.save(); render(); ctx.feedback('Year 5: £1610.51 against £1500, a gap of £110.51 ✓'); return; } ctx.feedback(v === 4 ? 'After 4 years the gap is £64.10: not yet £100.' : 'Add years until the gap column reaches £100.', true); });
    ctx.body.querySelectorAll('[data-rp]').forEach(b => (b.onclick = () => { const i = Number(b.dataset.rp); if (i === 1) { Rp.ok = true; ctx.save(); render(); return; } ctx.feedback(['The 20% decrease is of £120, so it removes £24, more than the £20 added.', '', '£96 is less than £100: a decrease.', 'The overall multiplier is 1.2 × 0.8 = 0.96, not 0.8.'][i], true); }));
  };
  render();
}

export const MODELS9 = { 'ratio-simplifier': mountSimplifier, 'share-bars': mountShareBars, 'best-buy': mountBestBuy, 'percent-bar': mountPercentBar, 'compound-race': mountCompoundRace };
