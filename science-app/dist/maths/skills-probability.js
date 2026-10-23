// Edexcel 1MA1 Probability (P1–P9). Probabilities are exact fractions; any equivalent fraction is
// accepted (form 'value'), as in the exam. Venn diagrams, tree diagrams and tables are JSON-safe
// figures drawn by geomfig.js from the same numbers as the question.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r11';
import { F, add, sub, mul } from './frac.js?v=20261023-maths-r11';
import { makeA, choiceItem } from './skills-algebra.js?v=20261023-maths-r11';

const fr = f => ({ n: f.n, d: f.d });
const pA = f => ({ kind: 'fraction', value: fr(f), form: 'value' });
const intAns = v => ({ kind: 'integer', value: v });
const decA = (f, extra = {}) => ({ kind: 'decimal', value: fr(f), ...extra });
const tv = (v, why) => ({ v: typeof v === 'number' ? F(v) : v, why });
const ft = f => (f.d === 1 ? String(f.n) : `{${f.n}/${f.d}}`);
const dt = f => String(+(f.n / f.d).toFixed(6));
const make = (skill, level, seed, o) => makeA(skill, level, seed, o);
const higherLevels = labels => labels.map(label => ({ label, higher: true }));
const COLOURS = ['red', 'blue', 'green', 'yellow', 'white', 'black'];

/* ───────── figures ───────── */
function tableFig(head, rows, alt) {
  // head: column headings; rows: [label, ...cells]
  const cols = head.length, cw = Math.min(130, 560 / cols), x0 = (600 - cw * cols) / 2, rh = 40, h = rh * (rows.length + 1);
  const segs = [];
  for (let i = 0; i <= rows.length + 1; i++) segs.push({ a: [x0, 10 + i * rh], b: [x0 + cw * cols, 10 + i * rh], w: 1.5 });
  for (let j = 0; j <= cols; j++) segs.push({ a: [x0 + j * cw, 10], b: [x0 + j * cw, 10 + h], w: 1.5 });
  const labels = [...head.map((t, j) => ({ at: [x0 + j * cw + cw / 2, 10 + rh / 2 + 5], t: String(t) })), ...rows.flatMap((r, i) => r.map((t, j) => ({ at: [x0 + j * cw + cw / 2, 10 + (i + 1) * rh + rh / 2 + 5], t: String(t) })))];
  return { h: h + 20, segs, labels, alt };
}
function vennFig(onlyA, both, onlyB, neither, names = ['A', 'B'], alt) {
  return { h: 290, polys: [{ pts: [[60, 20], [540, 20], [540, 270], [60, 270]], fill: 'none' }], circles: [{ c: [250, 145], r: 100 }, { c: [350, 145], r: 100 }], labels: [{ at: [180, 150], t: String(onlyA) }, { at: [300, 150], t: String(both) }, { at: [420, 150], t: String(onlyB) }, { at: [500, 250], t: String(neither) }, { at: [170, 50], t: names[0] }, { at: [430, 50], t: names[1] }, { at: [78, 44], t: 'ξ', anchor: 'start' }], alt: alt || `Venn diagram: ${names[0]} only ${onlyA}, both ${both}, ${names[1]} only ${onlyB}, neither ${neither}` };
}
function treeFig(first, second, labsFirst, labsSecond, alt) {
  // first: two branch labels; second: [[upper pair], [lower pair]]. Node words sit in gaps between the stages.
  const R = [70, 150], A = [270, 80], B = [270, 220], gap = 32, ends = [[460, 45], [460, 115], [460, 185], [460, 255]];
  const inA = [A[0] - gap, A[1]], outA = [A[0] + gap, A[1]], inB = [B[0] - gap, B[1]], outB = [B[0] + gap, B[1]];
  const segs = [{ a: R, b: inA }, { a: R, b: inB }, { a: outA, b: ends[0] }, { a: outA, b: ends[1] }, { a: outB, b: ends[2] }, { a: outB, b: ends[3] }];
  const mid = (p, q, dy) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2 + dy];
  const labels = [
    { at: mid(R, inA, -12), t: first[0] }, { at: mid(R, inB, 24), t: first[1] },
    { at: mid(outA, ends[0], -10), t: second[0][0] }, { at: mid(outA, ends[1], 22), t: second[0][1] },
    { at: mid(outB, ends[2], -10), t: second[1][0] }, { at: mid(outB, ends[3], 22), t: second[1][1] },
    { at: [A[0], A[1] + 5], t: labsFirst[0] }, { at: [B[0], B[1] + 5], t: labsFirst[1] },
    ...ends.map((e, i) => ({ at: [e[0] + 12, e[1] + 5], t: labsSecond[i % 2], anchor: 'start' })),
  ];
  return { h: 290, segs, labels, alt };
}

/* ═════════ P3, P4 probability scale, single events, sums to 1 ═════════ */
const singleEvent = {
  id: 'maths.probability.single',
  name: 'Single events and the probability scale',
  levels: [{ label: 'Counters in a bag' }, { label: 'P(not A) and missing probabilities' }, { label: 'Words on the scale' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const cols = shuffled(r, COLOURS).slice(0, 3), counts = cols.map(() => int(r, 1, 9)), T = counts.reduce((a, b) => a + b, 0), k = int(r, 0, 2), p = F(counts[k], T), not = r() < 0.35;
      const desc = cols.map((c, i) => `${counts[i]} ${c}`).join(', ').replace(/, ([^,]+)$/, ' and $1');
      if (not) return make(this.id, level, seed, { prompt: `A bag has ${desc} counters. One is taken at random. Work out the probability that it is not ${cols[k]}.`, answer: pA(sub(F(1), p)), steps: [`P(${cols[k]}) = {${counts[k]}/${T}}`, `P(not ${cols[k]}) = 1 − {${counts[k]}/${T}} = ${ft(sub(F(1), p))}`], traps: [tv(p, `That is P(${cols[k]}). "Not" means 1 minus it.`), tv(F(T - counts[k], counts[k]), 'Divide by the total number of counters.')] });
      return make(this.id, level, seed, { prompt: `A bag has ${desc} counters. One is taken at random. Work out the probability that it is ${cols[k]}.`, answer: pA(p), steps: [`There are ${T} counters, ${counts[k]} of them ${cols[k]}.`, `P(${cols[k]}) = {${counts[k]}/${T}}${p.d !== T ? ` = ${ft(p)}` : ''}`], traps: [tv(F(counts[k], T - counts[k]), 'Divide by the total, not by the number of other counters.'), tv(F(1, 3), 'The colours are not equally likely: use the numbers of counters.')] });
    }
    if (level === 2) {
      const n = pick(r, [3, 4]), ps = []; let left = 100;
      for (let i = 0; i < n - 1; i++) { const v = int(r, 1, Math.min(45, left - (n - 1 - i) * 5)) ; ps.push(v); left -= v; }
      if (left < 3) return this.gen(level, seed + 'm');
      const outs = ['A', 'B', 'C', 'D'].slice(0, n), miss = F(left, 100), useDec = true;
      const show = v => (useDec ? dt(F(v, 100)) : `${v}%`);
      return make(this.id, level, seed, { prompt: `A spinner can land on ${outs.join(', ').replace(/, (\w)$/, ' or $1')}. The table shows the probabilities. Work out the probability that it lands on ${outs[n - 1]}, as a decimal.`, fig: tableFig(['Outcome', ...outs], [['Probability', ...ps.map(show), '?']], `Probability table: ${outs.slice(0, -1).map((o, i) => `${o} ${show(ps[i])}`).join(', ')}, ${outs[n - 1]} unknown`), answer: decA(miss), steps: ['The probabilities of all the outcomes add up to 1.', `${ps.map(v => dt(F(v, 100))).join(' + ')} = ${dt(F(100 - left, 100))}`, `1 − ${dt(F(100 - left, 100))} = ${dt(miss)}`], traps: [tv(F(100 - left, 100), 'That is the total of the others. Subtract it from 1.'), tv(F(1, n), 'The outcomes are not equally likely.')] });
    }
    const W = [['impossible', F(0)], ['unlikely', F(1, 5)], ['evens', F(1, 2)], ['likely', F(4, 5)], ['certain', F(1)]];
    const ev = pick(r, [['rolling a 7 on an ordinary dice', 'impossible'], ['getting heads on a fair coin', 'evens'], ['rolling a number less than 7 on an ordinary dice', 'certain'], ['rolling a 6 on an ordinary dice', 'unlikely'], ['rolling a number greater than 1 on an ordinary dice', 'likely'], ['picking a red counter from a bag of 9 red and 1 blue', 'likely']]);
    const ch = choiceItem(r, ev[1], W.map(w => w[0]).filter(w => w !== ev[1]).slice(0, 4).filter((_, i) => i < 3), o => `${o[0].toUpperCase() + o.slice(1)} is ${{ impossible: 'probability 0', unlikely: 'less than {1/2}', evens: 'exactly {1/2}', likely: 'more than {1/2} but less than 1', certain: 'probability 1' }[o]}.`);
    return make(this.id, level, seed, { prompt: `Which word best describes the probability of ${ev[0]}?`, ...ch, steps: [`${ev[0][0].toUpperCase() + ev[0].slice(1)} is ${ev[1]}.`] });
  },
};

/* ═════════ P1, P2, P5 relative and expected frequency ═════════ */
const frequency = {
  id: 'maths.probability.frequency',
  name: 'Relative and expected frequency',
  levels: [{ label: 'Expected frequency' }, { label: 'Relative frequency' }, { label: 'Fair or biased?' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.5) { const d = pick(r, [4, 5, 6, 8, 10]), nn = int(r, 1, d - 1), p = F(nn, d), N = d * int(r, 5, 30); return make(this.id, level, seed, { prompt: `The probability that a seed grows is ${ft(p)}. ${N} seeds are planted. How many would you expect to grow?`, answer: intAns(N * nn / d), steps: ['Expected frequency = probability × number of trials', `${ft(p)} × ${N} = ${N * nn / d}`], traps: [tv(F(N, d), `Multiply by ${nn} as well.`), tv(N - N * nn / d, 'That is the number expected not to grow.')] }); }
      const N = 6 * int(r, 5, 50), face = int(r, 1, 6); return make(this.id, level, seed, { prompt: `A fair dice is rolled ${N} times. How many times would you expect to roll a ${face}?`, answer: intAns(N / 6), steps: [`P(${face}) = {1/6}`, `{1/6} × ${N} = ${N / 6}`], traps: [tv(N / 2, 'Each of the 6 faces is equally likely: divide by 6.'), tv(F(1, 6), 'That is the probability. Multiply it by the number of rolls.')] });
    }
    if (level === 2) {
      const N = pick(r, [20, 25, 40, 50, 80, 100, 200]), outs = ['red', 'blue', 'green'], f1 = int(r, 2, Math.floor(N / 2)), f2 = int(r, 1, N - f1 - 1), f3 = N - f1 - f2, k = int(r, 0, 2), f = [f1, f2, f3], rf = F(f[k], N), M = pick(r, [400, 500, 1000, 600]);
      if (r() < 0.5) return make(this.id, level, seed, { prompt: `A spinner is spun ${N} times. It lands on red ${f1} times, blue ${f2} times and green ${f3} times. Work out the relative frequency of ${outs[k]}.`, fig: tableFig(['Colour', 'red', 'blue', 'green'], [['Frequency', f1, f2, f3]], `Frequency table: red ${f1}, blue ${f2}, green ${f3}`), answer: pA(rf), steps: ['Relative frequency = frequency ÷ total number of trials', `${f[k]} ÷ ${N} = ${ft(rf)}`], traps: [tv(F(1, 3), 'Use the results, not equal chances.'), tv(F(f[k], N - f[k]), `Divide by all ${N} spins.`)] });
      const exp = mul(rf, F(M));
      if (exp.d !== 1) return this.gen(level, seed + 'e');
      return make(this.id, level, seed, { prompt: `A spinner is spun ${N} times and lands on ${outs[k]} ${f[k]} times. Use these results to estimate how many times it will land on ${outs[k]} in ${M} spins.`, answer: intAns(exp.n), steps: [`Relative frequency = {${f[k]}/${N}}`, `{${f[k]}/${N}} × ${M} = ${exp.n}`], traps: [tv(Math.round(M / 3), 'Use the relative frequency from the experiment, not equal chances.'), tv(f[k] + M, 'Scale up by multiplying, not adding.')] });
    }
    const N = pick(r, [60, 120, 300, 600]), ex = N / 6, fair = r() < 0.5, six = fair ? ex + pick(r, [-2, -1, 1, 2]) : Math.round(ex * pick(r, [1.8, 2, 2.4]));
    const ch = choiceItem(r, fair ? 'Probably fair: the result is close to what you would expect' : 'Probably biased: far more sixes than expected', [fair ? 'Probably biased: far more sixes than expected' : 'Probably fair: the result is close to what you would expect', 'You cannot tell anything from an experiment'], o => (o.startsWith('You cannot') ? 'A large number of trials gives a good estimate of the probability.' : fair ? `${six} is close to the expected ${ex}.` : `${six} is far more than the expected ${ex}.`));
    return make(this.id, level, seed, { prompt: `A dice is rolled ${N} times and lands on 6 a total of ${six} times. Is the dice fair?`, ...ch, steps: [`Expected number of sixes for a fair dice: {1/6} × ${N} = ${ex}`, `${six} is ${fair ? 'close to' : 'much more than'} ${ex}, and ${N} is a large number of rolls.`, 'More trials give a more reliable estimate.'] });
  },
};

/* ═════════ P6, P7 sample spaces and Venn diagrams ═════════ */
const sampleSpace = {
  id: 'maths.probability.sample-space',
  name: 'Sample spaces and listing outcomes',
  levels: [{ label: 'Listing combinations' }, { label: 'Two dice: sums and differences' }, { label: 'Probability from a sample space' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 2, 5), b = int(r, 2, 6), c = r() < 0.35 ? int(r, 2, 4) : 0;
      const items = c ? `${a} starters, ${b} mains and ${c} desserts` : `${a} starters and ${b} mains`, ways = a * b * (c || 1);
      return make(this.id, level, seed, { prompt: `A menu has ${items}. How many different meals of one of each can be chosen?`, answer: intAns(ways), steps: ['Multiply the number of choices at each stage (the product rule).', `${[a, b, c].filter(Boolean).join(' × ')} = ${ways}`], traps: [tv(a + b + c, 'Each starter goes with every main: multiply, do not add.')].filter(t => t.v.n !== ways) });
    }
    const op = pick(r, ['sum', 'difference', 'product']), f = (x, y) => (op === 'sum' ? x + y : op === 'difference' ? Math.abs(x - y) : x * y);
    const vals = []; for (let x = 1; x <= 6; x++) for (let y = 1; y <= 6; y++) vals.push(f(x, y));
    const fig = tableFig(['', 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6].map(x => [x, ...[1, 2, 3, 4, 5, 6].map(y => f(x, y))]), `Sample space of the ${op} of two dice`);
    if (level === 2) { const t = pick(r, vals), n = vals.filter(v => v === t).length; return make(this.id, level, seed, { prompt: `Two fair dice are rolled and the ${op} of the scores is found. The table shows every outcome. Work out the probability that the ${op} is ${t}.`, fig, answer: pA(F(n, 36)), steps: [`Count the ${t}s in the table: ${n}`, `P = {${n}/36}${F(n, 36).d !== 36 ? ` = ${ft(F(n, 36))}` : ''}`], traps: [tv(F(1, 36), `Count every way to make ${t}, not just one.`), tv(F(n, 11), 'There are 36 equally likely outcomes, not 11 different values.')].filter(t2 => !(t2.v.n * 36 === n * t2.v.d)) }); }
    const t = pick(r, vals.filter(v => v > 1)), cmp = pick(r, ['greater than', 'less than']), n = vals.filter(v => (cmp === 'greater than' ? v > t : v < t)).length;
    if (n === 0 || n === 36) return this.gen(level, seed + 's');
    return make(this.id, level, seed, { prompt: `Two fair dice are rolled and the ${op} of the scores is found. The table shows every outcome. Work out the probability that the ${op} is ${cmp} ${t}.`, fig, answer: pA(F(n, 36)), steps: [`Count the outcomes ${cmp} ${t}: ${n}`, `P = {${n}/36}`], traps: [tv(F(n + vals.filter(v => v === t).length, 36), `"${cmp}" does not include ${t} itself.`), tv(F(36 - n, 36), 'That is the probability of the opposite event.')].filter(t2 => !(t2.v.n * 36 === n * t2.v.d)) });
  },
};
const venn = {
  id: 'maths.probability.venn',
  name: 'Venn diagrams and set notation',
  levels: [{ label: 'Read a Venn diagram' }, { label: 'Complete and use a Venn diagram' }, { label: 'Set notation: ∩, ∪ and ′' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), a = int(r, 2, 15), b = int(r, 1, 10), c = int(r, 2, 15), d = int(r, 1, 12), T = a + b + c + d;
    if (level === 1) {
      const ask = pick(r, ['both', 'onlyA', 'either', 'neither']), v = { both: b, onlyA: a, either: a + b + c, neither: d }[ask];
      const text = { both: 'both', onlyA: 'football only', either: 'football or tennis (or both)', neither: 'neither sport' }[ask];
      return make(this.id, level, seed, { prompt: `The Venn diagram shows how many of ${T} students play football (F) and tennis (T). A student is picked at random. Work out the probability that they play ${text}.`, fig: vennFig(a, b, c, d, ['F', 'T']), answer: pA(F(v, T)), steps: [`Number who play ${text}: ${v}`, `P = {${v}/${T}}`], traps: [tv(F(ask === 'onlyA' ? a + b : ask === 'either' ? a + b + b + c : b, T), ask === 'onlyA' ? '"Only" leaves out the overlap.' : ask === 'either' ? 'Count the overlap once.' : 'Use the number in the overlap only.'), tv(F(v, T - v), `Divide by all ${T} students.`)].filter(t => !(t.v.n * T === v * t.v.d)) });
    }
    if (level === 2) {
      const tF = a + b, tT = b + c;
      return make(this.id, level, seed, { prompt: `${T} students were asked about football (F) and tennis (T). ${tF} play football, ${tT} play tennis and ${b} play both. A student is picked at random. Work out the probability that they play neither.`, answer: pA(F(d, T)), steps: [`Football only = ${tF} − ${b} = ${a}; tennis only = ${tT} − ${b} = ${c}`, `Neither = ${T} − ${a} − ${b} − ${c} = ${d}`, `P(neither) = {${d}/${T}}`], traps: [tv(F(T - tF - tT, T) , `The ${b} who play both have been subtracted twice. Start the Venn diagram with the overlap.`)].filter(t => t.v.n >= 0 && t.v.n !== d) });
    }
    const ask = pick(r, ['A ∩ B', 'A ∪ B', 'A′', '(A ∪ B)′', 'A ∩ B′']), v = { 'A ∩ B': b, 'A ∪ B': a + b + c, 'A′': c + d, '(A ∪ B)′': d, 'A ∩ B′': a }[ask];
    return make(this.id, level, seed, { prompt: `Use the Venn diagram. A number is chosen at random from ξ. Work out P(${ask}).`, fig: vennFig(a, b, c, d), answer: pA(F(v, T)), steps: [{ 'A ∩ B': 'A ∩ B is the overlap (in A and B).', 'A ∪ B': 'A ∪ B is everything in A or B or both.', 'A′': 'A′ is everything not in A.', '(A ∪ B)′': '(A ∪ B)′ is outside both circles.', 'A ∩ B′': 'A ∩ B′ is in A but not in B.' }[ask], `${v} out of ${T}: P = {${v}/${T}}`], traps: [tv(F(ask === 'A ∩ B' ? a + b + c : b, T), ask === 'A ∩ B' ? '∩ means "and": just the overlap.' : '∪ means "or": include everything in either circle.'), tv(F(T - v, T), 'That is the complement. Read the notation carefully.')].filter(t => !(t.v.n * T === v * t.v.d)) });
  },
};

/* ═════════ P8 combined events and tree diagrams ═════════ */
function twoDraws(r, repl) {
  const R = int(r, 2, 8), B = int(r, 2, 8), T = R + B;
  const p1 = [F(R, T), F(B, T)], p2 = repl ? [[F(R, T), F(B, T)], [F(R, T), F(B, T)]] : [[F(R - 1, T - 1), F(B, T - 1)], [F(R, T - 1), F(B - 1, T - 1)]];
  const fig = treeFig([ft(p1[0]), ft(p1[1])].map(s => s.replace(/[{}]/g, '')), p2.map(row => row.map(f => ft(f).replace(/[{}]/g, ''))), ['Red', 'Blue'], ['Red', 'Blue'], `Tree diagram for two draws ${repl ? 'with' : 'without'} replacement from ${R} red and ${B} blue counters`);
  return { R, B, T, p1, p2, fig, pp: (i, j) => mul(p1[i], p2[i][j]) };
}
function drawItem(self, level, seed, r, repl, ask) {
  const { R, B, T, p1, p2, fig, pp } = twoDraws(r, repl);
  const v = { 'both red': pp(0, 0), 'both blue': pp(1, 1), 'one of each colour': add(pp(0, 1), pp(1, 0)), 'at least one red': sub(F(1), pp(1, 1)), 'two of the same colour': add(pp(0, 0), pp(1, 1)) }[ask];
  const traps = [];
  if (!repl) traps.push(tv(ask === 'both red' ? mul(F(R, T), F(R, T)) : ask === 'both blue' ? mul(F(B, T), F(B, T)) : ask === 'one of each colour' ? mul(F(2 * R * B), F(1, T * T)) : ask === 'two of the same colour' ? F(R * R + B * B, T * T) : sub(F(1), mul(F(B, T), F(B, T))), 'The counter is not replaced, so the second probabilities change: there is one fewer counter.'));
  if (ask === 'one of each colour') traps.push(tv(pp(0, 1), 'Red then blue and blue then red both give one of each: add the two paths.'));
  if (ask === 'at least one red') traps.push(tv(pp(0, 0), '"At least one red" includes red-blue and blue-red. Use 1 − P(no red).'));
  if (ask === 'two of the same colour') traps.push(tv(pp(0, 0), 'Same colour means both red or both blue: add the two paths.'));
  traps.push(tv(add(p1[0], p2[0][0]), 'Multiply along the branches, do not add.'));
  return make(self.id, level, seed, { prompt: `A bag has ${R} red and ${B} blue counters. A counter is taken, ${repl ? 'replaced' : 'not replaced'}, and then a second counter is taken. Work out the probability of ${ask}.`, fig, answer: pA(v), steps: [repl ? 'With replacement, the second draw has the same probabilities.' : `Without replacement, the second draw is out of ${T - 1}.`, 'Multiply along the branches; add the paths you need.', `P(${ask}) = ${ft(v)}`], traps: traps.filter(t => !(t.v.n * v.d === v.n * t.v.d)) });
}
const combined = {
  id: 'maths.probability.combined',
  name: 'Independent events and tree diagrams',
  levels: [{ label: 'AND and OR rules' }, { label: 'Trees with replacement' }, { label: 'At least one' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const d = pick(r, [5, 8, 10, 20]), x = int(r, 1, d - 2), y = int(r, 1, d - x - 1), mutual = r() < 0.5;
      if (mutual) return make(this.id, level, seed, { prompt: `A spinner lands on red with probability ${ft(F(x, d))} and on blue with probability ${ft(F(y, d))}. Work out the probability it lands on red or blue.`, answer: pA(F(x + y, d)), steps: ['Red and blue cannot happen together (mutually exclusive), so add.', `${ft(F(x, d))} + ${ft(F(y, d))} = ${ft(F(x + y, d))}`], traps: [tv(mul(F(x, d), F(y, d)), 'For "or" with mutually exclusive events, add the probabilities.')] });
      const p = F(x, d), q = F(y, d);
      return make(this.id, level, seed, { prompt: `P(rain on Monday) = ${ft(p)} and P(rain on Tuesday) = ${ft(q)}, independently. Work out the probability that it rains on both days.`, answer: pA(mul(p, q)), steps: ['Independent events: multiply for "and".', `${ft(p)} × ${ft(q)} = ${ft(mul(p, q))}`], traps: [tv(add(p, q), 'For "and" with independent events, multiply.')] });
    }
    if (level === 2) return drawItem(this, level, seed, r, true, pick(r, ['both red', 'both blue', 'one of each colour', 'two of the same colour']));
    if (r() < 0.5) return drawItem(this, level, seed, r, true, 'at least one red');
    const n = pick(r, [2, 3]), d = pick(r, [2, 4, 5]), p = F(1, d);
    const none = F((d - 1) ** n, d ** n), v = sub(F(1), none);
    return make(this.id, level, seed, { prompt: `A spinner lands on 6 with probability ${ft(p)}. It is spun ${n} times. Work out the probability of at least one 6.`, answer: pA(v), steps: [`P(no 6 in one spin) = ${ft(sub(F(1), p))}`, `P(no 6 in ${n} spins) = (${ft(sub(F(1), p))})^${n} = ${ft(none)}`, `P(at least one 6) = 1 − ${ft(none)} = ${ft(v)}`], traps: [tv(mul(p, F(n)), 'Adding the chances double counts spins with more than one 6. Use 1 − P(none).'), tv(none, 'That is P(no 6). Subtract it from 1.')].filter(t => !(t.v.n * v.d === v.n * t.v.d)) });
  },
};
const dependent = {
  id: 'maths.probability.dependent',
  name: 'Dependent events (without replacement)',
  levels: [{ label: 'Both the same' }, { label: 'One of each' }, { label: 'At least one, and same colour' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const ask = level === 1 ? pick(r, ['both red', 'both blue']) : level === 2 ? 'one of each colour' : pick(r, ['at least one red', 'two of the same colour']);
    return drawItem(this, level, seed, r, false, ask);
  },
};

/* ═════════ P6 two-way tables and frequency trees (with conditional, Higher) ═════════ */
const twoWay = {
  id: 'maths.probability.two-way',
  name: 'Two-way tables and frequency trees',
  levels: [{ label: 'Complete a two-way table' }, { label: 'Frequency trees' }, { label: 'From percentages to frequencies' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 5, 30), b = int(r, 5, 30), c = int(r, 5, 30), d = int(r, 5, 30), T = a + b + c + d;
      const fig = tableFig(['', 'Cat', 'Dog', 'Total'], [['Boys', a, '?', a + b], ['Girls', c, d, c + d], ['Total', a + c, b + d, T]], `Two-way table with one missing cell: boys cat ${a}, boys total ${a + b}`);
      return make(this.id, level, seed, { prompt: 'The two-way table shows pets chosen by students. Work out the number of boys who chose a dog.', fig, answer: intAns(b), steps: [`Boys total ${a + b} − ${a} chose a cat = ${b}`], traps: [tv(b + d - d === b ? b + d : b + 1, 'Use the boys row: total minus cats.')].filter(t => t.v.n !== b) });
    }
    if (level === 2) {
      const T = 10 * int(r, 5, 20), A = int(r, 2, T / 10 - 2) * 10 / 2 * 2, Ay = int(r, 1, A - 1), By = int(r, 1, T - A - 1);
      const fig = { h: 290, segs: [{ a: [80, 145], b: [260, 75] }, { a: [80, 145], b: [260, 215] }, { a: [260, 75], b: [440, 40] }, { a: [260, 75], b: [440, 110] }, { a: [260, 215], b: [440, 180] }, { a: [260, 215], b: [440, 250] }], labels: [{ at: [60, 150], t: String(T), anchor: 'end' }, { at: [262, 66], t: `Bus ${A}`, anchor: 'start' }, { at: [262, 232], t: `Walk ${T - A}`, anchor: 'start' }, { at: [446, 44], t: `Late ${Ay}`, anchor: 'start' }, { at: [446, 114], t: `On time ${A - Ay}`, anchor: 'start' }, { at: [446, 184], t: `Late ${By}`, anchor: 'start' }, { at: [446, 254], t: `On time ${T - A - By}`, anchor: 'start' }], alt: `Frequency tree: ${T} students; bus ${A} (late ${Ay}); walk ${T - A} (late ${By})` };
      const v = F(Ay + By, T);
      return make(this.id, level, seed, { prompt: 'The frequency tree shows how students travelled and whether they were late. A student is picked at random. Work out the probability that they were late.', fig, answer: pA(v), steps: [`Late: ${Ay} + ${By} = ${Ay + By}`, `P(late) = {${Ay + By}/${T}}`], traps: [tv(F(Ay, A), 'That is only the bus students. Include everyone who was late.'), tv(F(Ay + By, T - Ay - By), `Divide by all ${T} students.`)].filter(t => !(t.v.n * v.d === v.n * t.v.d)) });
    }
    const T = pick(r, [200, 400, 500, 800, 1000]), pc = pick(r, [20, 25, 30, 40, 60]), pc2 = pick(r, [10, 20, 25, 50]), A = T * pc / 100, v = A * pc2 / 100;
    if (!Number.isInteger(v)) return this.gen(level, seed + 'p');
    return make(this.id, level, seed, { prompt: `${T} people took a test. ${pc}% of them were adults. ${pc2}% of the adults passed. How many adults passed?`, answer: intAns(v), steps: [`Adults: ${pc}% of ${T} = ${A}`, `Adults who passed: ${pc2}% of ${A} = ${v}`], traps: [tv(T * pc2 / 100, `${pc2}% of the adults, not of everyone.`), tv(A, 'That is all the adults. Find the percentage who passed.')].filter(t => Number.isInteger(t.v.n) && t.v.n !== v) });
  },
};

/* ═════════ P9 conditional probability (Higher) ═════════ */
const conditional = {
  id: 'maths.probability.conditional',
  name: 'Conditional probability',
  higherOnly: true,
  levels: higherLevels(['From a two-way table', 'From a Venn diagram', 'From a tree diagram']),
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const a = int(r, 5, 30), b = int(r, 5, 30), c = int(r, 5, 30), d = int(r, 5, 30);
      const rowT = [a + b, c + d], colT = [a + c, b + d];
      const fig = tableFig(['', 'Walk', 'Bus', 'Total'], [['Year 10', a, b, a + b], ['Year 11', c, d, c + d], ['Total', a + c, b + d, a + b + c + d]], `Two-way table: Year 10 walk ${a}, bus ${b}; Year 11 walk ${c}, bus ${d}`);
      const which = pick(r, ['y11|bus', 'walk|y10']);
      if (which === 'y11|bus') return make(this.id, level, seed, { prompt: 'A student who takes the bus is picked at random. Work out the probability that they are in Year 11.', fig, answer: pA(F(d, b + d)), steps: [`Only the ${b + d} bus students count.`, `${d} of them are in Year 11: {${d}/${b + d}}`], traps: [tv(F(d, a + b + c + d), 'Given that they take the bus, divide by the bus total only.'), tv(F(d, c + d), 'Divide by the number who take the bus, not by Year 11.')].filter(t => !(t.v.n * (b + d) === d * t.v.d)) });
      return make(this.id, level, seed, { prompt: 'A Year 10 student is picked at random. Work out the probability that they walk.', fig, answer: pA(F(a, a + b)), steps: [`Only the ${a + b} Year 10 students count.`, `${a} of them walk: {${a}/${a + b}}`], traps: [tv(F(a, a + b + c + d), 'Given Year 10, divide by the Year 10 total only.'), tv(F(a, a + c), 'Divide by Year 10, not by everyone who walks.')].filter(t => !(t.v.n * (a + b) === a * t.v.d)) });
    }
    if (level === 2) {
      const a = int(r, 2, 15), b = int(r, 1, 10), c = int(r, 2, 15), d = int(r, 1, 12), T = a + b + c + d;
      const given = pick(r, ['A', 'B']), v = F(b, given === 'A' ? a + b : b + c);
      return make(this.id, level, seed, { prompt: `Use the Venn diagram. A number is chosen at random from ξ. Work out P(${given === 'A' ? 'B' : 'A'} | ${given}).`, fig: vennFig(a, b, c, d), answer: pA(v), steps: [`Given ${given}: only the ${given === 'A' ? a + b : b + c} numbers in circle ${given} count.`, `Of these, ${b} are also in ${given === 'A' ? 'B' : 'A'}: {${b}/${given === 'A' ? a + b : b + c}}`], traps: [tv(F(b, T), `That is P(A ∩ B). Given ${given}, divide by the number in ${given}.`), tv(F(given === 'A' ? c + b : a + b, T), 'P(X | Y) is not P(X).')].filter(t => !(t.v.n * v.d === v.n * t.v.d)) });
    }
    const R = int(r, 3, 8), B = int(r, 3, 8), T = R + B, both = mul(F(R, T), F(R - 1, T - 1)), first = F(R, T), second = add(both, mul(F(B, T), F(R, T - 1)));
    const ask = pick(r, ['second|first', 'first|second']);
    if (ask === 'second|first') return make(this.id, level, seed, { prompt: `A bag has ${R} red and ${B} blue counters. Two are taken without replacement. Given that the first is red, work out the probability that the second is red.`, answer: pA(F(R - 1, T - 1)), steps: [`After a red is taken, ${R - 1} red remain out of ${T - 1}.`, `P = {${R - 1}/${T - 1}}`], traps: [tv(both, 'That is P(both red). Given the first is red, only the second draw is left.'), tv(F(R, T), 'One red has gone: the bag has changed.')].filter(t => !(t.v.n * (T - 1) === (R - 1) * t.v.d)) });
    const v = F(both.n * second.d, both.d * second.n);
    return make(this.id, level, seed, { prompt: `A bag has ${R} red and ${B} blue counters. Two are taken without replacement. Given that the second counter is red, work out the probability that the first was red.`, answer: pA(v), steps: [`P(both red) = ${ft(both)}`, `P(second red) = P(RR) + P(BR) = ${ft(second)}`, `P(first red | second red) = ${ft(both)} ÷ ${ft(second)} = ${ft(v)}`], traps: [tv(both, 'Divide P(both red) by P(second red).'), tv(F(R - 1, T - 1), 'That is P(second red | first red). The condition is the other way round.')].filter(t => !(t.v.n * v.d === v.n * t.v.d)) });
  },
};

export { tableFig, vennFig, treeFig };
export const probabilitySkills = [singleEvent, frequency, sampleSpace, venn, combined, dependent, twoWay, conditional];
