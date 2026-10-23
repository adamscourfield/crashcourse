// Investigations for problem solving: one worked problem per lesson, taken in three stages. Part A
// is the plan (which quantity to find first, with each wrong plan explained), part B the
// intermediate value and part C the final answer. Each wrong value has its own feedback naming the
// stage where it went wrong. Every render checks ctx.isActive.
import { mathHTML, esc } from './render.js?v=20261023-maths-r15';
import { progressDots } from './models-number.js?v=20261023-maths-r15';
import { figSVG } from './geomfig.js?v=20261023-maths-r15';
import { wallFig, triAlgFig } from './skills-problems.js?v=20261023-maths-r15';

const M = s => mathHTML(s);
const vNum = s => { const t = String(s ?? '').trim().replace(/−/g, '-').replace(/^£/, '').replace(/[°%]$/, ''); return t === '' || Number.isNaN(Number(t)) ? null : Number(t); };
const near = (a, b, tol = 0.005) => a !== null && Math.abs(a - b) <= tol;
const numRow = (id, val, unit, pre = '') => `<div class="mrow-in">${pre ? `<span>${pre}</span>` : ''}<input class="lab-input mnum" id="${id}" inputmode="decimal" autocomplete="off" value="${esc(val)}"><span>${unit}</span><button class="primary mbtn" data-act="${id}">Check</button></div>`;
const tiles = (key, opts) => `<div class="mtiles">${opts.map(([v, t]) => `<button class="choice mtile" data-${key}="${v}">${M(t)}</button>`).join('')}</div>`;

const PLANS = {
  'paint-planner': {
    title: 'A wall 5 m by 2.5 m has a door 0.9 m by 2 m. A tin covers 4 m² and costs £13.50.',
    fig: () => figSVG(wallFig(5, 2.5, 0.9, 2)),
    A: { q: 'How much does the paint for the wall cost? What should you work out first?', ok: 'area', opts: [['area', 'The area to paint: the wall minus the door', null], ['price', 'The price of 1 m²: £13.50 ÷ 4', 'You could, but you still need the area first, and you cannot buy part of a tin.'], ['tins', 'The tins for the whole wall: 5 × 2.5 ÷ 4', 'The door is not painted. Find the area to paint first.']] },
    B: { q: 'Work out the area to paint.', ans: 10.7, unit: 'm²', wrong: [[12.5, 'That is the whole wall. Subtract the door: 0.9 × 2 = 1.8 m².'], [1.8, 'That is the door. Subtract it from the wall.']], hint: 'Wall 5 × 2.5, minus door 0.9 × 2.' },
    C: { q: 'Now work out the cost. Only whole tins can be bought.', ans: 40.5, unit: '', pre: '£', wrong: [[36.11, '10.7 ÷ 4 = 2.675 tins, but you cannot buy part of a tin: round up to 3.'], [27, 'Two tins only cover 8 m². Round 2.675 up to 3 tins.'], [3, 'That is the number of tins. Multiply by £13.50.']], hint: '10.7 ÷ 4 = 2.675, so buy 3 tins at £13.50.' },
    summary: ['area to paint: 12.5 − 1.8 = 10.7 m²', 'tins: 10.7 ÷ 4 = 2.675 → 3', 'cost: 3 × £13.50 = £40.50'],
    text: 'Plan before calculating: what do you need (the cost), what does that need (whole tins), and what does that need (the area to paint)? Then check the answer makes sense: rounding the tins up is part of the problem.',
  },
  'share-planner': {
    title: 'Ali and Bea share £240 in the ratio 3 : 5. Bea spends 30% of her share.',
    fig: () => '<div class="mwork"><div>£240 in the ratio 3 : 5</div><div>Bea spends 30% of her share</div><div>How much does Bea have left?</div></div>',
    A: { q: 'How much does Bea have left? What should you work out first?', ok: 'part', opts: [['part', 'One part: £240 ÷ (3 + 5)', null], ['pct', '30% of £240', 'Bea spends 30% of her share, not of the total. Find her share first.'], ['five', '£240 ÷ 5', 'There are 3 + 5 = 8 parts altogether, not 5.']] },
    B: { q: "Work out Bea's share.", ans: 150, unit: '', pre: '£', wrong: [[90, "That is Ali's share (3 parts). Bea has 5 parts."], [48, 'Divide by 8 parts, not 5: one part is £30.']], hint: 'One part = £30; Bea has 5 parts.' },
    C: { q: 'How much does Bea have left?', ans: 105, unit: '', pre: '£', wrong: [[45, 'That is the amount she spends. Subtract it from £150.'], [78, '30% of £240 is not what she spends: it is 30% of her £150.'], [150, 'Take off the 30% she spends.']], hint: '30% of £150 = £45; £150 − £45.' },
    summary: ['one part: £240 ÷ 8 = £30', "Bea's share: 5 × £30 = £150", 'left: 70% of £150 = £105'],
    text: 'In a multi-step money problem, follow the money: the ratio decides each share, and the percentage applies to whatever amount the sentence says, here Bea\'s share, not the total.',
  },
  'angle-planner': {
    title: 'The angles of a triangle are x°, 2x° and (3x − 30)°.',
    fig: () => figSVG(triAlgFig(['x°', '2x°', '3x − 30°'], 'Triangle with angles x, 2x and 3x − 30 degrees')),
    A: { q: 'Which is the largest angle? What should you do first?', ok: 'sum', opts: [['sum', 'Add the angles and set the total equal to 180', null], ['right', 'Set 3x − 30 = 90', 'Nothing says the triangle is right-angled.'], ['guess', 'Try x = 30', 'Trying values can work, but an equation is quicker and exact: the angles add up to 180°.']] },
    B: { q: 'Solve the equation to find x.', ans: 35, unit: '', wrong: [[25, '6x − 30 = 180 gives 6x = 210: add 30 to both sides, do not subtract.'], [30, 'x + 2x + 3x − 30 = 6x − 30. Set it equal to 180 and solve.']], hint: 'x + 2x + 3x − 30 = 180, so 6x = 210.' },
    C: { q: 'Work out the size of the largest angle.', ans: 75, unit: '°', wrong: [[35, 'That is x. Work out all three angles: 35°, 70° and 75°.'], [70, 'That is 2x. The angle 3x − 30 = 75° is larger.']], hint: 'x = 35: the angles are 35°, 70° and 3 × 35 − 30.' },
    summary: ['x + 2x + 3x − 30 = 180', '6x = 210, x = 35', 'angles 35°, 70°, 75°: largest 75°'],
    text: 'Finding x is rarely the end. Read the question again: here it asks for the largest angle, so substitute x back into every expression and check the three angles add up to 180°.',
  },
  'game-planner': {
    title: 'A game costs £1 to play. P(win) = {1/5}. A winner gets £4. It is played 200 times.',
    fig: () => '<div class="mwork"><div>200 plays at £1 each</div><div>P(win) = {1/5}, prize £4</div><div>Expected profit for the stall?</div></div>',
    A: { q: 'How much profit should the stall expect? What should you work out first?', ok: 'wins', opts: [['wins', 'The expected number of winners: {1/5} × 200', null], ['prize', 'The prize money if every player wins: 200 × £4', 'Only about {1/5} of players win.'], ['lose', 'The probability of losing: {4/5}', 'True, but the prizes depend on how many win.']] },
    B: { q: 'Work out the expected number of winners.', ans: 40, unit: 'winners', wrong: [[160, 'That is the expected number who lose: {4/5} × 200.'], [5, 'That is the reciprocal of the probability. Multiply: {1/5} × 200.']], hint: 'Expected frequency = probability × number of trials.' },
    C: { q: 'Work out the expected profit.', ans: 40, unit: '', pre: '£', wrong: [[160, 'That is the prize money: 40 × £4. Subtract it from the takings.'], [200, 'That is the takings. Subtract the prize money.']], hint: 'Takings £200; prizes 40 × £4 = £160.' },
    summary: ['takings: 200 × £1 = £200', 'expected winners: {1/5} × 200 = 40', 'profit: £200 − 40 × £4 = £40'],
    text: 'Expected frequency turns a probability into a number of outcomes, and from there into money. Keep the stages separate: winners, then prize money, then compare with the takings.',
  },
};

function mountPlanner(key) {
  return ctx => {
    const P = PLANS[key], w = ctx.w;
    w.a ??= { ok: false }; w.b ??= { raw: '', ok: false }; w.c ??= { raw: '', ok: false };
    const A = w.a, B = w.b, C = w.c;
    const render = () => {
      if (ctx.isActive && !ctx.isActive()) return;
      ctx.setTitle(P.title);
      if (!A.ok) {
        ctx.panel.innerHTML = `<div class="mpanel-k">PART A · PLAN ${progressDots(3, 0, 0)}</div>${P.fig()}`;
        ctx.body.innerHTML = `<p>${M(P.A.q)}</p>${tiles('plan', P.A.opts.map(([v, t]) => [v, t]))}`;
      } else if (!B.ok) {
        ctx.panel.innerHTML = `<div class="mpanel-k">PART B · FIRST STAGE ${progressDots(3, 1, 1)}</div>${P.fig()}`;
        ctx.body.innerHTML = `<p>${M(P.B.q)}</p>${numRow('pb', B.raw, P.B.unit, P.B.pre)}`;
      } else if (!C.ok) {
        ctx.panel.innerHTML = `<div class="mpanel-k">PART C · FINISH ${progressDots(3, 2, 2)}</div>${P.fig()}<div class="mwork"><div>${M(P.summary[0])}</div></div>`;
        ctx.body.innerHTML = `<p>${M(P.C.q)}</p>${numRow('pc', C.raw, P.C.unit, P.C.pre)}`;
      } else {
        ctx.setTitle('Investigation complete.');
        ctx.panel.innerHTML = `<div class="mpanel-k">SUMMARY</div><div class="mwork">${P.summary.map(l => `<div>${M(l)}</div>`).join('')}</div>`;
        ctx.body.innerHTML = `<p>${M(P.text)}</p><p class="mdone">Investigation complete ✓</p>`;
        ctx.done(); return;
      }
      bind();
    };
    const numCheck = (S, spec) => {
      const v = vNum(S.raw);
      if (near(v, spec.ans)) { S.ok = true; ctx.save(); render(); ctx.feedback(`${spec.pre || ''}${spec.pre === '£' && !Number.isInteger(spec.ans) ? spec.ans.toFixed(2) : spec.ans}${spec.unit ? (spec.unit === '°' ? '°' : ' ' + spec.unit) : ''} ✓`); return; }
      const hit = spec.wrong.find(([x]) => near(v, x, 0.011));
      ctx.feedback(hit ? hit[1] : v === null ? 'Type a number.' : spec.hint, true);
    };
    const bind = () => {
      ctx.body.querySelectorAll('[data-plan]').forEach(b => (b.onclick = () => { const o = P.A.opts.find(x => x[0] === b.dataset.plan); if (b.dataset.plan === P.A.ok) { A.ok = true; ctx.save(); render(); ctx.feedback('Good plan ✓'); return; } ctx.feedback(o[2], true); }));
      for (const [id, S, spec] of [['pb', B, P.B], ['pc', C, P.C]]) {
        const i = ctx.body.querySelector('#' + id); if (i) i.oninput = () => { S.raw = i.value; ctx.save(); };
        ctx.body.querySelector(`[data-act="${id}"]`)?.addEventListener('click', () => numCheck(S, spec));
      }
    };
    render();
  };
}

export const MODELS17 = Object.fromEntries(Object.keys(PLANS).map(k => [k, mountPlanner(k)]));
export { PLANS };
