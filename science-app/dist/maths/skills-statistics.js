// Edexcel 1MA1 Statistics (S1–S6). Charts are drawn from the same data as the question: bar charts,
// histograms, cumulative frequency curves and scatter graphs on the graph renderer; pie charts, box
// plots and tables in geomfig.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r15';
import { F } from './frac.js?v=20261023-maths-r15';
import { makeA, choiceItem } from './skills-algebra.js?v=20261023-maths-r15';

const fr = f => ({ n: f.n, d: f.d });
const intAns = v => ({ kind: 'integer', value: v });
const decA = (f, extra = {}) => ({ kind: 'decimal', value: fr(f), ...extra });
const valA = f => (f.d === 1 ? intAns(f.n) : decA(f));
const tv = (v, why) => ({ v: typeof v === 'number' ? (Number.isInteger(v) ? F(v) : F(Math.round(v * 1000), 1000)) : v, why });
const dt = v => String(+(+v).toFixed(4));
const make = (skill, level, seed, o) => makeA(skill, level, seed, o);
const higherLevels = labels => labels.map(label => ({ label, higher: true }));
const sum = a => a.reduce((s, v) => s + v, 0);
const median = a => { const s = [...a].sort((x, y) => x - y), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
const NOTE = 'Not drawn accurately';

function tableFig(head, rows, alt) {
  // The first column holds labels ("Frequency", "Time (t min)"), so it is sized to its longest text.
  const cols = head.length, longest = Math.max(...[head[0], ...rows.map(r => r[0])].map(t => String(t).length));
  const c0 = Math.min(150, Math.max(70, longest * 8.5 + 20)), cw = Math.min(110, (560 - c0) / (cols - 1)), W = c0 + cw * (cols - 1), x0 = (600 - W) / 2, rh = 38, h = rh * (rows.length + 1);
  const xL = j => x0 + (j === 0 ? 0 : c0 + (j - 1) * cw), mid = j => (j === 0 ? x0 + c0 / 2 : xL(j) + cw / 2);
  const segs = [];
  for (let i = 0; i <= rows.length + 1; i++) segs.push({ a: [x0, 10 + i * rh], b: [x0 + W, 10 + i * rh], w: 1.5 });
  for (let j = 0; j <= cols; j++) { const x = j === cols ? x0 + W : xL(j); segs.push({ a: [x, 10], b: [x, 10 + h], w: 1.5 }); }
  const labels = [...head.map((t, j) => ({ at: [mid(j), 10 + rh / 2 + 5], t: String(t) })), ...rows.flatMap((r, i) => r.map((t, j) => ({ at: [mid(j), 10 + (i + 1) * rh + rh / 2 + 5], t: String(t) })))];
  return { h: h + 20, segs, labels, alt };
}
function pieFig(cats, angles, alt) {
  let a = 90; const C = [300, 160], R = 130;
  const sectors = angles.map(ang => { const s = { c: C, r: R, a1: a - ang, a2: a }; a -= ang; return s; });
  let b = 90; const labels = angles.map((ang, i) => { const mid = b - ang / 2; b -= ang; return { at: [+(C[0] + 0.62 * R * Math.cos(mid * Math.PI / 180)).toFixed(1), +(C[1] - 0.62 * R * Math.sin(mid * Math.PI / 180) + 5).toFixed(1)], t: cats[i] }; });
  return { h: 320, sectors: sectors.map((s, i) => ({ ...s, fill: ['#a8d5b533', '#ed8b7833', '#f2d48a33', '#b7c8d633', '#a8d5b566'][i % 5] })), labels, alt };
}
const bars = (cats, vals, opts = {}) => ({ xr: [0, cats.length + 1], yr: [0, opts.ymax || Math.max(...vals) + 2], xstep: 1, ystep: opts.ystep || 1, xlabel: opts.xlabel, ylabel: opts.ylabel || 'Frequency', xcats: cats.map((c, i) => [i + 1, c]), alt: 'Bar chart: ' + cats.map((c, i) => `${c} ${vals[i]}`).join(', '), polys: cats.map((c, i) => ({ pts: [[i + 0.6, 0], [i + 0.6, vals[i]], [i + 1.4, vals[i]], [i + 1.4, 0]] })) });

/* ═════════ S4, S5 averages and range ═════════ */
const averages = {
  id: 'maths.statistics.averages',
  name: 'Mean, median, mode and range',
  levels: [{ label: 'From a list' }, { label: 'Working backwards from the mean' }, { label: 'Which average? Effect of a change' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const n = int(r, 5, 9), xs = Array.from({ length: n }, () => int(r, 1, 30)), what = pick(r, ['mean', 'median', 'range', 'mode']);
      if (what === 'mode') { xs[int(r, 0, n - 1)] = xs[0]; const counts = {}; xs.forEach(v => (counts[v] = (counts[v] || 0) + 1)); const mx = Math.max(...Object.values(counts)); const modes = Object.keys(counts).filter(k => counts[k] === mx); if (modes.length !== 1) return this.gen(level, seed + 'm'); }
      const list = xs.join(', ');
      if (what === 'mean') { const m = F(sum(xs), n); return make(this.id, level, seed, { prompt: `Work out the mean of: ${list}.${m.d === 1 ? '' : ' Give your answer as a decimal, to 2 decimal places if needed.'}`, answer: m.d === 1 ? intAns(m.n) : decA(F(Math.round(sum(xs) / n * 100), 100), { tol: 0.006 }), steps: [`Total = ${sum(xs)}`, `Mean = ${sum(xs)} ÷ ${n} = ${dt(sum(xs) / n)}`], traps: [tv(median(xs), 'That is the median. The mean is the total ÷ how many.'), tv(sum(xs), 'Divide the total by how many numbers there are.')] }); }
      if (what === 'median') { const md = median(xs), unsorted = n % 2 ? xs[(n - 1) / 2] : (xs[n / 2 - 1] + xs[n / 2]) / 2; return make(this.id, level, seed, { prompt: `Work out the median of: ${list}.`, answer: valA(F(Math.round(md * 2), 2)), steps: [`In order: ${[...xs].sort((a, b) => a - b).join(', ')}`, `The middle value is ${dt(md)}`], traps: [tv(unsorted, 'Put the numbers in order first.')].filter(t => t.v.n / t.v.d !== md) }); }
      if (what === 'range') return make(this.id, level, seed, { prompt: `Work out the range of: ${list}.`, answer: intAns(Math.max(...xs) - Math.min(...xs)), steps: [`Largest ${Math.max(...xs)} − smallest ${Math.min(...xs)}`, `= ${Math.max(...xs) - Math.min(...xs)}`], traps: [tv(xs[n - 1] - xs[0], 'Use the largest and smallest values, not the last and first.'), tv(Math.max(...xs), 'Range is a difference: largest − smallest.')].filter(t => t.v.n !== Math.max(...xs) - Math.min(...xs)) });
      const counts = {}; xs.forEach(v => (counts[v] = (counts[v] || 0) + 1)); const mode = Number(Object.keys(counts).find(k => counts[k] === Math.max(...Object.values(counts))));
      return make(this.id, level, seed, { prompt: `Work out the mode of: ${list}.`, answer: intAns(mode), steps: ['The mode is the most common value.', `${mode} appears ${counts[mode]} times`], traps: [tv(counts[mode], 'That is how many times the mode appears. Give the value.')].filter(t => t.v.n !== mode) });
    }
    if (level === 2) {
      const n = int(r, 4, 7), m = int(r, 5, 20), known = Array.from({ length: n - 1 }, () => int(r, 1, 2 * m)), last = n * m - sum(known);
      if (last < 0 || last > 60) return this.gen(level, seed + 'b');
      return make(this.id, level, seed, { prompt: `${n} numbers have a mean of ${m}. ${n - 1} of them are ${known.join(', ')}. Work out the other number.`, answer: intAns(last), steps: [`Total of all ${n} = ${n} × ${m} = ${n * m}`, `Total of the ${n - 1} known = ${sum(known)}`, `Missing number = ${n * m} − ${sum(known)} = ${last}`], traps: [tv(m, 'The missing number is not necessarily the mean. Use totals.'), tv((n - 1) * m - sum(known) > 0 ? (n - 1) * m - sum(known) : n * m, `Use ${n} × ${m} for the total of all ${n} numbers.`)].filter(t => t.v.n !== last) });
    }
    const cases = [
      ['House prices in a street: £180 000, £195 000, £210 000, £205 000 and £1 400 000. Which average best represents a typical price?', 'The median', ['The mean', 'The mode', 'The range'], 'One very large value pulls the mean up; the median is not affected by it.'],
      ['Shoe sizes sold in a shop on one day. Which average is most useful for ordering stock?', 'The mode', ['The mean', 'The median', 'The range'], 'The shop needs the most common size; a mean shoe size like 7.4 does not exist.'],
      ['Every value in a data set is increased by 5. What happens to the range?', 'It stays the same', ['It increases by 5', 'It doubles', 'It increases by 10'], 'Adding the same amount to every value moves the data but does not spread it out.'],
      ['Every value in a data set is increased by 5. What happens to the mean?', 'It increases by 5', ['It stays the same', 'It is multiplied by 5', 'It increases by 25'], 'Each value goes up by 5, so the total and the mean go up by 5 each.'],
      ['Every value in a data set is doubled. What happens to the range?', 'It doubles', ['It stays the same', 'It increases by 2', 'It halves'], 'The gap between the largest and smallest values is doubled too.'],
    ];
    const [q, a, wrong, why] = pick(r, cases);
    const ch = choiceItem(r, a, wrong, () => why);
    return make(this.id, level, seed, { prompt: q, ...ch, steps: [why] });
  },
};

/* ═════════ S4 averages from frequency tables ═════════ */
const freqAverages = {
  id: 'maths.statistics.frequency-averages',
  name: 'Averages from frequency tables',
  levels: [{ label: 'Mean from a frequency table' }, { label: 'Median and mode from a table' }, { label: 'Estimated mean from grouped data' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level < 3) {
      const xs = [0, 1, 2, 3, 4, 5].slice(0, int(r, 4, 6)), fs = xs.map(() => int(r, 1, 12)), n = sum(fs), fx = sum(xs.map((x, i) => x * fs[i]));
      const fig = tableFig(['Goals', ...xs], [['Frequency', ...fs]], `Frequency table: ${xs.map((x, i) => `${x} goals ${fs[i]}`).join(', ')}`);
      if (level === 1) { const m = F(fx, n); return make(this.id, level, seed, { prompt: `The table shows the number of goals scored in ${n} matches. Work out the mean number of goals per match${m.d === 1 ? '' : ', to 2 decimal places'}.`, fig, calculator: m.d !== 1, answer: m.d === 1 ? intAns(m.n) : decA(F(Math.round(fx / n * 100), 100), { tol: 0.006 }), steps: ['Multiply each value by its frequency and add: Σfx', `Σfx = ${xs.map((x, i) => `${x} × ${fs[i]}`).join(' + ')} = ${fx}`, `Mean = ${fx} ÷ ${n} = ${dt(fx / n)}`], traps: [tv(fx / xs.length, `Divide by the total frequency (${n}), not by the number of rows.`), tv(n / xs.length, 'Use Σfx ÷ Σf: multiply each value by its frequency first.')] }); }
      if (r() < 0.5) { const mode = xs[fs.indexOf(Math.max(...fs))]; if (fs.filter(f => f === Math.max(...fs)).length > 1) return this.gen(level, seed + 'd'); return make(this.id, level, seed, { prompt: 'The table shows the number of goals scored in some matches. What is the mode?', fig, answer: intAns(mode), steps: ['The mode has the highest frequency.', `${mode} goals (frequency ${Math.max(...fs)})`], traps: [tv(Math.max(...fs), 'That is the highest frequency. The mode is the value with that frequency.')].filter(t => t.v.n !== mode) }); }
      const all = xs.flatMap((x, i) => Array(fs[i]).fill(x)), md = median(all);
      return make(this.id, level, seed, { prompt: `The table shows the number of goals scored in ${n} matches. Work out the median number of goals.`, fig, answer: valA(F(Math.round(md * 2), 2)), steps: [`There are ${n} values; the median is the ${n % 2 ? `${(n + 1) / 2}th` : `mean of the ${n / 2}th and ${n / 2 + 1}th`} value.`, 'Count through the frequencies.', `Median = ${dt(md)}`], traps: [tv(xs[Math.floor((xs.length - 1) / 2)], 'Find the middle of all the matches, not the middle row of the table.'), tv(median(fs), 'The frequencies are not the data. Find the middle match.')].filter(t => t.v.n / t.v.d !== md) });
    }
    const w = pick(r, [5, 10, 20]), k = int(r, 3, 5), lows = Array.from({ length: k }, (_, i) => i * w), fs = lows.map(() => int(r, 1, 15)), n = sum(fs), mids = lows.map(l => l + w / 2), fx = sum(mids.map((m, i) => m * fs[i]));
    const fig = tableFig(['Time (t min)', 'Frequency'], lows.map((l, i) => [`${l} < t ≤ ${l + w}`, fs[i]]), `Grouped frequency table with class width ${w}`);
    const est = fx / n;
    return make(this.id, level, seed, { prompt: `The table shows the times taken by ${n} students. Work out an estimate of the mean time, to 1 decimal place.`, fig, calculator: true, answer: decA(F(Math.round(est * 10), 10), { dp: 1, tol: 0.06 }), steps: ['Use the midpoint of each class.', `Σ(midpoint × f) = ${mids.map((m, i) => `${m} × ${fs[i]}`).join(' + ')} = ${fx}`, `Estimate = ${fx} ÷ ${n} ≈ ${est.toFixed(1)}`], traps: [tv(Math.round(sum(lows.map((l, i) => (l + w) * fs[i])) / n * 10) / 10, 'Use the midpoints, not the upper class boundaries.'), tv(Math.round(fx / k * 10) / 10, `Divide by the total frequency, ${n}.`)].filter(t => Math.abs(t.v.n / t.v.d - est) > 0.11) });
  },
};

/* ═════════ S2 charts ═════════ */
const CATS = [['Bus', 'Car', 'Walk', 'Bike', 'Train'], ['Red', 'Blue', 'Green', 'Yellow', 'Purple'], ['Maths', 'Art', 'PE', 'Music', 'History']];
const charts = {
  id: 'maths.statistics.charts',
  name: 'Bar charts and pie charts',
  levels: [{ label: 'Read a bar chart' }, { label: 'Pie chart angles' }, { label: 'From a pie chart back to frequencies' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), cats = pick(r, CATS).slice(0, int(r, 3, 5));
    if (level === 1) {
      const vals = cats.map(() => int(r, 1, 14)), ask = pick(r, ['total', 'diff', 'most']);
      const g = bars(cats, vals, { ystep: 2 });
      if (ask === 'total') return make(this.id, level, seed, { prompt: `The bar chart shows how many students chose each option. How many students are there altogether?`, graph: g, answer: intAns(sum(vals)), steps: [`${vals.join(' + ')} = ${sum(vals)}`], traps: [tv(Math.max(...vals), 'That is the tallest bar. Add the heights of all the bars.')].filter(t => t.v.n !== sum(vals)) });
      if (ask === 'diff') { const [i, j] = shuffled(r, [...cats.keys()]).slice(0, 2); if (vals[i] === vals[j]) return this.gen(level, seed + 'q'); return make(this.id, level, seed, { prompt: `The bar chart shows how many students chose each option. How many more chose ${cats[i]} than ${cats[j]}?${vals[i] < vals[j] ? ' (Give a negative answer if fewer chose it.)' : ''}`, graph: g, answer: intAns(vals[i] - vals[j]), steps: [`${cats[i]}: ${vals[i]}; ${cats[j]}: ${vals[j]}`, `${vals[i]} − ${vals[j]} = ${vals[i] - vals[j]}`], traps: [tv(vals[i] + vals[j], 'Subtract to find how many more.')] }); }
      const m = vals.indexOf(Math.max(...vals)); if (vals.filter(v => v === vals[m]).length > 1) return this.gen(level, seed + 'u');
      const ch = choiceItem(r, cats[m], cats.filter((_, i) => i !== m).slice(0, 3), o => `${o} has ${vals[cats.indexOf(o)]}, fewer than ${cats[m]} (${vals[m]}).`);
      return make(this.id, level, seed, { prompt: 'The bar chart shows how many students chose each option. Which option is the mode?', graph: g, ...ch, steps: [`The tallest bar is ${cats[m]} (${vals[m]}).`] });
    }
    const total = pick(r, [24, 30, 36, 40, 45, 60, 72, 90, 120]), per = 360 / total, vals = (() => { const v = cats.map(() => int(r, 1, Math.max(2, Math.floor(total / cats.length)))); v[v.length - 1] = total - sum(v.slice(0, -1)); return v; })();
    if (vals[vals.length - 1] < 1) return this.gen(level, seed + 'z');
    const angles = vals.map(v => v * per);
    if (level === 2) { const k = int(r, 0, cats.length - 1); return make(this.id, level, seed, { prompt: `${total} people chose a favourite: ${cats.map((c, i) => `${c} ${vals[i]}`).join(', ')}. Work out the angle for ${cats[k]} in a pie chart.`, answer: intAns(angles[k]), steps: [`Each person is 360 ÷ ${total} = ${dt(per)}°`, `${vals[k]} × ${dt(per)} = ${angles[k]}°`], traps: [tv(vals[k], 'Convert the frequency to degrees: multiply by 360 ÷ total.'), tv(Math.round(vals[k] * 100 / total), 'That is a percentage. A pie chart needs degrees out of 360.')].filter(t => t.v.n !== angles[k]) }); }
    const k = int(r, 0, cats.length - 1);
    return make(this.id, level, seed, { prompt: `The pie chart shows the choices of ${total} people. The ${cats[k]} sector has an angle of ${angles[k]}°. How many people chose ${cats[k]}?`, fig: pieFig(cats, angles, `Pie chart; ${cats[k]} sector ${angles[k]}°`), answer: intAns(vals[k]), steps: [`${angles[k]} ÷ 360 = the fraction who chose ${cats[k]}`, `{${angles[k]}/360} × ${total} = ${vals[k]}`], traps: [tv(angles[k], 'Convert the angle back to people: {angle/360} × total.'), tv(Math.round(angles[k] * total / 100), 'A full pie chart is 360°, not 100.')].filter(t => t.v.n !== vals[k]) });
  },
};

/* ═════════ S2 pictograms, vertical line charts, time series ═════════ */
// A pictogram symbol is a disc drawn as sectors, so a part symbol (half or quarter) is visible as a
// fraction of a disc. The key is drawn under the rows.
function pictoFig(cats, counts, key, unit, alt) {
  const R = 15, gap = 40, x0 = 150, rh = 44, sectors = [], labels = [];
  counts.forEach((c, i) => {
    const y = 30 + i * rh; labels.push({ at: [130, y + 5], t: cats[i], anchor: 'end' });
    const whole = Math.floor(c + 1e-9), part = c - whole;
    for (let k = 0; k < whole; k++) { const C = [x0 + k * gap, y]; sectors.push({ c: C, r: R, a1: 90, a2: 270, fill: '#a8d5b5aa' }, { c: C, r: R, a1: 270, a2: 450, fill: '#a8d5b5aa' }); }
    if (part > 1e-9) sectors.push({ c: [x0 + whole * gap, y], r: R, a1: 90, a2: 90 + 360 * part, fill: '#a8d5b5aa' });
  });
  const ky = 30 + counts.length * rh + 6, kc = [x0, ky];
  sectors.push({ c: kc, r: R, a1: 90, a2: 270, fill: '#ed8b78aa' }, { c: kc, r: R, a1: 270, a2: 450, fill: '#ed8b78aa' });
  labels.push({ at: [130, ky + 5], t: 'Key:', anchor: 'end' }, { at: [x0 + 24, ky + 5], t: `= ${key} ${unit}`, anchor: 'start' });
  return { h: ky + 30, sectors, labels, alt };
}
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const charts2 = {
  id: 'maths.statistics.charts2',
  name: 'Pictograms, vertical line charts and time series',
  levels: [{ label: 'Read a pictogram with a key' }, { label: 'Vertical line charts for discrete data' }, { label: 'Time-series line graphs' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const key = pick(r, [2, 4, 6, 8, 10, 12]), cats = pick(r, CATS).slice(0, int(r, 3, 5)), quarter = key % 4 === 0;
      const counts = cats.map(() => int(r, 1, 6) + (quarter ? pick(r, [0, 0, 0.25, 0.5, 0.75]) : pick(r, [0, 0, 0.5])));
      const vals = counts.map(c => c * key), fig = pictoFig(cats, counts, key, 'people', `Pictogram, key one symbol = ${key} people`);
      const ask = pick(r, ['one', 'diff', 'symbols']), k = int(r, 0, cats.length - 1);
      if (ask === 'one') return make(this.id, level, seed, { prompt: `The pictogram shows how many people chose each option. How many people chose ${cats[k]}?`, fig, answer: intAns(vals[k]), steps: [`${cats[k]} has ${dt(counts[k])} symbols`, `${dt(counts[k])} × ${key} = ${vals[k]}`], traps: [tv(counts[k], `That is the number of symbols. Each symbol stands for ${key} people.`), tv(Math.ceil(counts[k]) * key, 'A part symbol is only part of the key: a half symbol is half of it.')].filter(t => t.v.n !== vals[k] || t.v.d !== 1) });
      if (ask === 'diff') { const j = (k + 1 + int(r, 0, cats.length - 2)) % cats.length; if (vals[k] === vals[j]) return this.gen(level, seed + 'd'); const [a, b] = vals[k] > vals[j] ? [k, j] : [j, k]; return make(this.id, level, seed, { prompt: `The pictogram shows how many people chose each option. How many more people chose ${cats[a]} than ${cats[b]}?`, fig, answer: intAns(vals[a] - vals[b]), steps: [`${cats[a]}: ${dt(counts[a])} × ${key} = ${vals[a]}`, `${cats[b]}: ${dt(counts[b])} × ${key} = ${vals[b]}`, `${vals[a]} − ${vals[b]} = ${vals[a] - vals[b]}`], traps: [tv(counts[a] - counts[b], `That is the difference in symbols. Multiply by the key (${key}).`), tv(vals[a] + vals[b], 'Subtract to find how many more.')] }); }
      const n = key * pick(r, quarter ? [1.25, 1.5, 2.5, 3.75, 4.5, 5.25] : [1.5, 2.5, 3.5, 4.5, 5.5]);
      return make(this.id, level, seed, { prompt: `The pictogram uses the key shown. ${n} people chose a new option, Other. How many symbols should be drawn for Other?`, fig, answer: valA(F(Math.round(n * 4), key * 4)), steps: [`${n} ÷ ${key} = ${dt(n / key)} symbols`], traps: [tv(n, `Divide by the key: each symbol is ${key} people.`), tv(n * key, 'Divide by the key, do not multiply.')] });
    }
    if (level === 2) {
      const what = pick(r, [['pets', 'Number of pets', 'households', 'how many pets each household has'], ['goals', 'Goals scored', 'matches', 'how many goals were scored in each match'], ['siblings', 'Number of siblings', 'students', 'how many siblings each student has']]);
      const xs = [0, 1, 2, 3, 4, 5], fs = xs.map(() => int(r, 1, 12)), m = fs.indexOf(Math.max(...fs));
      if (fs.filter(f => f === fs[m]).length > 1) return this.gen(level, seed + 'm');
      // Positions are value + 1 so the frequency axis sits clear of the 0 line; the value is the label under it.
      const graph = { xr: [0, 7], yr: [0, 14], xstep: 1, ystep: 2, xlabel: what[1], ylabel: 'Frequency', xcats: xs.map(x => [x + 1, String(x)]), polys: xs.map((x, i) => ({ pts: [[x + 1, 0], [x + 1, fs[i]]] })), points: xs.map((x, i) => [x + 1, fs[i]]), alt: `Vertical line chart: ${xs.map((x, i) => `${x}: ${fs[i]}`).join(', ')}` };
      const ask = pick(r, ['mode', 'count', 'total']), N = sum(fs), T = sum(xs.map((x, i) => x * fs[i]));
      if (ask === 'mode') return make(this.id, level, seed, { prompt: `The vertical line chart shows ${what[3]}. What is the mode?`, graph, answer: intAns(xs[m]), steps: [`The tallest line is at ${xs[m]} (frequency ${fs[m]})`], traps: [tv(fs[m], `That is the frequency of the mode. The mode is the value: ${what[0]}.`)].filter(t => t.v.n !== xs[m]) });
      if (ask === 'count') return make(this.id, level, seed, { prompt: `The vertical line chart shows ${what[3]}. How many ${what[2]} are there?`, graph, answer: intAns(N), steps: [`Add the frequencies: ${fs.join(' + ')} = ${N}`], traps: [tv(T, `That is the total number of ${what[0]}. Each line counts ${what[2]}: add the frequencies.`), tv(6, 'That is the number of lines. Add their heights.')].filter(t => t.v.n !== N) });
      return make(this.id, level, seed, { prompt: `The vertical line chart shows ${what[3]}. Work out the total number of ${what[0]}.`, graph, answer: intAns(T), steps: [xs.map((x, i) => `${x} × ${fs[i]}`).join(' + '), `= ${T}`], traps: [tv(N, `That counts the ${what[2]}. Multiply each value by its frequency.`), tv(15, 'Multiply each value by its frequency, then add.')].filter(t => t.v.n !== T) });
    }
    const n = int(r, 6, 8), start = int(r, 0, 12 - n), months = MONTHS.slice(start, start + n), what = pick(r, [['ice creams sold', 'Ice creams sold'], ['visitors (hundreds)', 'Visitors (hundreds)'], ['rainfall (mm)', 'Rainfall (mm)']]);
    const ys = []; let v = int(r, 2, 6) * 5; for (let i = 0; i < n; i++) { ys.push(v); v = Math.max(5, Math.min(60, v + 5 * pick(r, [-3, -2, -1, 1, 2, 3]))); }
    const graph = { xr: [0, n + 1], yr: [0, 65], xstep: 1, ystep: 5, ylabel: what[1], xcats: months.map((m, i) => [i + 1, m]), polys: [{ pts: ys.map((y, i) => [i + 1, y]) }], points: ys.map((y, i) => [i + 1, y]), alt: `Time-series graph: ${months.map((m, i) => `${m} ${ys[i]}`).join(', ')}` };
    const ask = pick(r, ['change', 'rise']);
    if (ask === 'change') { const [i, j] = shuffled(r, [...months.keys()]).slice(0, 2).sort((a, b) => a - b); if (ys[i] === ys[j]) return this.gen(level, seed + 'c'); const up = ys[j] > ys[i]; return make(this.id, level, seed, { prompt: `The graph shows ${what[0]} each month. By how much did it ${up ? 'increase' : 'decrease'} from ${months[i]} to ${months[j]}?`, graph, answer: intAns(Math.abs(ys[j] - ys[i])), steps: [`${months[i]}: ${ys[i]}; ${months[j]}: ${ys[j]}`, `${Math.max(ys[i], ys[j])} − ${Math.min(ys[i], ys[j])} = ${Math.abs(ys[j] - ys[i])}`], traps: [tv(ys[j], `That is the ${months[j]} value. Find the difference from ${months[i]}.`), tv(ys[i] + ys[j], 'Subtract the two readings.')].filter(t => t.v.n !== Math.abs(ys[j] - ys[i])) }); }
    const rises = ys.slice(1).map((y, i) => y - ys[i]), best = Math.max(...rises);
    if (best <= 0 || rises.filter(x => x === best).length > 1) return this.gen(level, seed + 'r');
    const b = rises.indexOf(best), label = i => `${months[i]} to ${months[i + 1]}`;
    const others = shuffled(r, rises.map((_, i) => i).filter(i => i !== b)).slice(0, 3);
    const ch = choiceItem(r, label(b), others.map(label), o => { const i = months.indexOf(o.split(' ')[0]); return `${o}: ${ys[i]} → ${ys[i + 1]}, a change of ${rises[i] >= 0 ? '+' : ''}${rises[i]}, less than ${label(b)} (+${best}).`; });
    return make(this.id, level, seed, { prompt: `The graph shows ${what[0]} each month. Between which two months was the biggest increase?`, graph, ...ch, steps: [`The steepest upward line is ${label(b)}: ${ys[b]} → ${ys[b + 1]}, +${best}`] });
  },
};

/* ═════════ S1, S5, S4 sampling and comparing ═════════ */
const sampling = {
  id: 'maths.statistics.sampling',
  name: 'Samples and comparing distributions',
  levels: [{ label: 'Is the sample biased?' }, { label: 'Estimate from a sample' }, { label: 'Compare two distributions' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const cases = [
        ['To find how often people in a town exercise, Sam asks people leaving a gym.', 'Biased: gym users exercise more than most people'],
        ['To find the favourite school lunch, Ali asks the first 10 students in the dinner queue.', 'Biased: the sample is too small and only includes people who already like school lunches'],
        ['To find how far students travel to school, Mo picks 50 names at random from the whole school list.', 'Not biased: every student has an equal chance of being chosen'],
        ['To estimate the average height of adults, Jo measures a basketball team.', 'Biased: basketball players are taller than most adults'],
      ];
      const [desc, ans] = pick(r, cases), others = cases.map(c => c[1]).filter(a => a !== ans);
      const ch = choiceItem(r, ans, shuffled(r, others).slice(0, 2), o => (o.startsWith('Not') ? 'Look at who could not be chosen: the sample does not represent everyone.' : 'That reason does not fit this sample.'));
      return make(this.id, level, seed, { prompt: `${desc} Is the sample biased?`, ...ch, steps: [ans + '.', 'A sample should be random and large enough to represent the population.'] });
    }
    if (level === 2) {
      const n = pick(r, [20, 25, 40, 50, 80]), yes = int(r, 2, n - 2), N = pick(r, [400, 500, 800, 1000, 1200]), est = (yes * N) / n;
      if (!Number.isInteger(est)) return this.gen(level, seed + 'e');
      return make(this.id, level, seed, { prompt: `In a random sample of ${n} students from a school of ${N}, ${yes} walk to school. Estimate how many students in the school walk.`, answer: intAns(est), steps: [`Proportion in the sample: {${yes}/${n}}`, `{${yes}/${n}} × ${N} = ${est}`], traps: [tv(yes, 'Scale the sample up to the whole school.'), tv(N - est, 'That is the number who do not walk.')].filter(t => t.v.n !== est) });
    }
    const [m1, m2] = [int(r, 30, 60), int(r, 30, 60)], [s1, s2] = [int(r, 5, 25), int(r, 5, 25)];
    if (m1 === m2 || s1 === s2) return this.gen(level, seed + 'c');
    const higher = m1 > m2 ? 'Class A' : 'Class B', consistent = s1 < s2 ? 'Class A' : 'Class B';
    const right = `${higher} did better on average (higher median) and ${consistent} was more consistent (smaller range)`;
    const wrong = [`${higher} did better on average and was more consistent because its range is bigger`.replace(/^/, ''), `${higher === 'Class A' ? 'Class B' : 'Class A'} did better on average because its median is lower`, 'You cannot compare classes of different sizes'];
    const ch = choiceItem(r, right, wrong, o => (o.includes('range is bigger') ? 'A bigger range means more spread out, so less consistent.' : o.includes('lower') ? 'A higher median means better marks on average.' : 'Averages and ranges can be compared whatever the class sizes.'));
    return make(this.id, level, seed, { prompt: `Test marks: Class A has median ${m1} and range ${s1}. Class B has median ${m2} and range ${s2}. Compare the two classes.`, ...ch, steps: [`Average: compare medians, ${m1} and ${m2}.`, `Spread: compare ranges, ${s1} and ${s2}; the smaller range is more consistent.`, right + '.'] });
  },
};

/* ═════════ S6 scatter graphs ═════════ */
const scatter = {
  id: 'maths.statistics.scatter',
  name: 'Scatter graphs and correlation',
  levels: [{ label: 'Type of correlation' }, { label: 'Predict with a line of best fit' }, { label: 'Outliers, causation and extrapolation' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed), type = level === 1 ? pick(r, ['positive', 'negative', 'none']) : pick(r, ['positive', 'negative']);
    const m = type === 'positive' ? pick(r, [0.5, 1, 1.5, 2]) : type === 'negative' ? -pick(r, [0.5, 1, 1.5]) : 0, c = type === 'negative' ? 18 : 2;
    const pts = Array.from({ length: 12 }, (_, i) => { const x = 1 + i * 0.8 + (r() - 0.5) * 0.4, y = type === 'none' ? 2 + r() * 14 : m * x + c + (r() - 0.5) * 2.4; return [+x.toFixed(1), +Math.max(0.3, y).toFixed(1)]; });
    const rr = (() => { const n = pts.length, mx = pts.reduce((a, p) => a + p[0], 0) / n, my = pts.reduce((a, p) => a + p[1], 0) / n; let sxy = 0, sxx = 0, syy = 0; for (const [x, y] of pts) { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; syy += (y - my) ** 2; } return sxy / Math.sqrt(sxx * syy); })();
    if (type === 'none' ? Math.abs(rr) > 0.3 : Math.abs(rr) < 0.85) return this.gen(level, seed + 'r');
    const g = { xr: [0, 12], yr: [0, 20], xstep: 1, ystep: 2, points: pts };
    if (level === 1) {
      const right = { positive: 'Positive correlation', negative: 'Negative correlation', none: 'No correlation' }[type];
      const ch = choiceItem(r, right, ['Positive correlation', 'Negative correlation', 'No correlation'].filter(o => o !== right), o => ({ 'Positive correlation': 'Positive: as one variable increases, so does the other.', 'Negative correlation': 'Negative: as one variable increases, the other decreases.', 'No correlation': 'No correlation: the points show no pattern.' })[o]);
      return make(this.id, level, seed, { prompt: 'What type of correlation does the scatter graph show?', graph: g, ...ch, steps: [right + '.'] });
    }
    if (level === 2) {
      const x0 = int(r, 3, 9), y0 = m * x0 + c;
      return make(this.id, level, seed, { prompt: `The line of best fit has been drawn. Use it to estimate y when x = ${x0}.`, graph: { ...g, fns: [{ expr: `${m}x + ${c}`.replace('+ -', '- '), label: 'line of best fit' }] }, answer: decA(F(Math.round(y0 * 10), 10), { tol: 0.55 }), steps: [`Go up from x = ${x0} to the line, then across: y ≈ ${dt(y0)}`, 'Answers within half a unit of the line are accepted.'], traps: [tv(x0, 'Read the y-value from the line, not the x-value.')].filter(t => Math.abs(x0 - y0) > 0.6) });
    }
    const cases = [
      ['Ice cream sales and sunburn cases both rise in summer. Does buying ice cream cause sunburn?', 'No: both are linked to hot weather; correlation does not show causation'],
      ['A line of best fit is drawn for children aged 5 to 11. Is it reliable to predict the height of a 30-year-old?', 'No: 30 is far outside the data, so extrapolating is unreliable'],
      ['A line of best fit is drawn for prices of cars aged 1 to 8 years. Is it reliable to predict the price of a 4-year-old car?', 'Yes: 4 is inside the range of the data (interpolation)'],
      ['One point is far from all the others on a scatter graph. What should you do with it when drawing a line of best fit?', 'Treat it as an outlier and ignore it'],
    ];
    const [q, ans] = pick(r, cases), wrong = cases.map(cs => cs[1]).filter(a => a !== ans);
    const ch = choiceItem(r, ans, shuffled(r, wrong).slice(0, 2), () => 'That answer belongs to a different situation. Think about causation, extrapolation and outliers.');
    return make(this.id, level, seed, { prompt: q, ...ch, steps: [ans + '.'] });
  },
};

/* ═════════ S3, S4 histograms, cumulative frequency, box plots (Higher) ═════════ */
const cumulative = {
  id: 'maths.statistics.cumulative',
  name: 'Histograms, cumulative frequency and box plots',
  higherOnly: true,
  levels: higherLevels(['Frequency density and histograms', 'Median and IQR from cumulative frequency', 'Box plots and comparing']),
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const bounds = [0, 10, 20, 40, 60, 100], ws = bounds.slice(1).map((b, i) => b - bounds[i]), fds = ws.map(() => pick(r, [0.5, 1, 1.5, 2, 2.5, 3])), fs = ws.map((w, i) => w * fds[i]);
      const k = int(r, 0, 4), ask = pick(r, ['freq', 'fd']);
      const g = { xr: [0, 100], yr: [0, 3.5], xstep: 10, ystep: 0.5, xlabel: 'Time (s)', ylabel: 'Frequency density', polys: ws.map((w, i) => ({ pts: [[bounds[i], 0], [bounds[i], fds[i]], [bounds[i + 1], fds[i]], [bounds[i + 1], 0]] })) };
      if (ask === 'freq') return make(this.id, level, seed, { prompt: `The histogram shows some times. How many times are in the class ${bounds[k]} < t ≤ ${bounds[k + 1]}?`, graph: g, answer: valA(F(Math.round(fs[k] * 2), 2)), steps: ['Frequency = frequency density × class width', `${dt(fds[k])} × ${ws[k]} = ${dt(fs[k])}`], traps: [tv(fds[k], 'That is the frequency density. Multiply by the class width.'), tv(fds[k] * 10, `The class width is ${ws[k]}, not 10.`)].filter(t => Math.abs(t.v.n / t.v.d - fs[k]) > 1e-9) });
      const f = int(r, 4, 40) * 2, w = pick(r, [5, 10, 20, 40]);
      return make(this.id, level, seed, { prompt: `A class 20 < t ≤ ${20 + w} has frequency ${f}. Work out the frequency density for the histogram.`, answer: valA(F(f, w)), steps: ['Frequency density = frequency ÷ class width', `${f} ÷ ${w} = ${dt(f / w)}`], traps: [tv(f * w, 'Divide by the class width, do not multiply.'), tv(f, 'Divide by the class width.')].filter(t => Math.abs(t.v.n / t.v.d - f / w) > 1e-9) });
    }
    if (level === 2) {
      const N = pick(r, [40, 60, 80, 100, 120]), xs = [0, 10, 20, 30, 40, 50, 60], centre = int(r, 22, 38);
      const cf = xs.map((x, i) => Math.round(N / (1 + Math.exp(-(x - centre) / int(r, 6, 9)))) ); cf[0] = 0; cf[6] = N;
      for (let i = 1; i < 7; i++) if (cf[i] <= cf[i - 1]) cf[i] = cf[i - 1] + 1;
      if (cf[5] >= N) return this.gen(level, seed + 'c');
      const g = { xr: [0, 60], yr: [0, N], xstep: 10, ystep: N / 10, xlabel: 'Mark', ylabel: 'Cumulative frequency', polys: [{ pts: xs.map((x, i) => [x, cf[i]]) }] };
      const inv = target => { for (let i = 1; i < 7; i++) if (cf[i] >= target) return xs[i - 1] + (10 * (target - cf[i - 1])) / (cf[i] - cf[i - 1]); return 60; };
      const ask = pick(r, ['median', 'iqr']), med = inv(N / 2), iqr = inv(3 * N / 4) - inv(N / 4);
      const v = ask === 'median' ? med : iqr;
      return make(this.id, level, seed, { prompt: `The cumulative frequency graph shows the marks of ${N} students. Estimate the ${ask === 'median' ? 'median mark' : 'interquartile range'}.`, graph: g, answer: decA(F(Math.round(v * 10), 10), { tol: 1.05 }), steps: ask === 'median' ? [`Median: read across from ${N / 2} (half of ${N})`, `≈ ${v.toFixed(1)}`] : [`Lower quartile at ${N / 4}: ≈ ${inv(N / 4).toFixed(1)}`, `Upper quartile at ${3 * N / 4}: ≈ ${inv(3 * N / 4).toFixed(1)}`, `IQR ≈ ${v.toFixed(1)}`], traps: [tv(Math.round(ask === 'median' ? N / 2 : N / 2), 'Read the mark on the horizontal axis, not the cumulative frequency.')].filter(t => Math.abs(t.v.n / t.v.d - v) > 1.1) });
    }
    const lo = int(r, 10, 30), q1 = lo + int(r, 3, 10), md = q1 + int(r, 2, 10), q3 = md + int(r, 2, 10), hi = q3 + int(r, 3, 12);
    const sx = v => 60 + (v - lo + 5) * (480 / (hi - lo + 10));
    const fig = { h: 170, polys: [{ pts: [[sx(q1), 50], [sx(q3), 50], [sx(q3), 110], [sx(q1), 110]] }], segs: [{ a: [sx(md), 50], b: [sx(md), 110] }, { a: [sx(lo), 80], b: [sx(q1), 80] }, { a: [sx(q3), 80], b: [sx(hi), 80] }, { a: [sx(lo), 65], b: [sx(lo), 95] }, { a: [sx(hi), 65], b: [sx(hi), 95] }], labels: [lo, q1, md, q3, hi].map(v => ({ at: [sx(v), 140], t: String(v) })), alt: `Box plot: minimum ${lo}, lower quartile ${q1}, median ${md}, upper quartile ${q3}, maximum ${hi}` };
    const ask = pick(r, ['iqr', 'range', 'median']), v = { iqr: q3 - q1, range: hi - lo, median: md }[ask];
    return make(this.id, level, seed, { prompt: `The box plot shows some data. Work out the ${ask === 'iqr' ? 'interquartile range' : ask}.`, fig, answer: intAns(v), steps: [`Minimum ${lo}, lower quartile ${q1}, median ${md}, upper quartile ${q3}, maximum ${hi}`, ask === 'iqr' ? `IQR = ${q3} − ${q1} = ${v}` : ask === 'range' ? `Range = ${hi} − ${lo} = ${v}` : `Median = ${md}`], traps: [tv(ask === 'iqr' ? hi - lo : q3 - q1, ask === 'iqr' ? 'That is the range. The IQR uses the quartiles (the box).' : 'That is the interquartile range.'), tv(q3, 'That is the upper quartile.')].filter(t => t.v.n !== v) });
  },
};

export { tableFig, pieFig, bars, pictoFig };
export const statisticsSkills = [averages, freqAverages, charts, charts2, sampling, scatter, cumulative];
