// Edexcel 1MA1 Number, batch 3: systematic listing and the product rule (N5; Higher: product rule),
// units and compound measures (N13), exact calculation with π and surds (N8; Higher: surds),
// fractions in ratio problems (N11), reciprocals (N3) and inequality symbols (N1).
// Same contract as the other skill modules: generators are pure functions of (level, seed).
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r9';
import { F, add, sub, mul, div, eq, gcd, num, fracMarkup, decText, D } from './frac.js?v=20261023-maths-r9';
import { make } from './skills-number.js?v=20261023-maths-r9';
import { squareFree } from './exact.js?v=20261023-maths-r9';

const dt = f => { const t = decText(f); if (t === null) throw new Error('non-terminating ' + f.n + '/' + f.d); return t; };
const dec = (f, extra = {}) => ({ kind: 'decimal', value: { n: f.n, d: f.d }, ...extra });
const intAns = v => ({ kind: 'integer', value: v });
const fracAns = f => ({ kind: 'fraction', value: { n: f.n, d: f.d }, form: 'simplest' });
const ex = (a, b, r) => ({ kind: 'exact', a: { n: a.n, d: a.d }, b: { n: b.n, d: b.d }, r });
const exTrap = (a, b, r, why) => ({ a: { n: a.n, d: a.d }, b: { n: b.n, d: b.d }, r, why });
const tv = (v, why) => ({ v: v === null || v === undefined ? null : typeof v === 'number' ? F(v) : v, why });
function choice(r, correct, wrong, whyWrong) {
  const options = shuffled(r, [correct, ...wrong]);
  return { answer: { kind: 'choice', options, answer: options.indexOf(correct) }, optionWhy: options.map(o => (o === correct ? null : whyWrong(o))) };
}
const W = n => n.toLocaleString('en-GB').replace(/,/g, ' ');
const sym = r => (r === 'pi' ? 'π' : '√' + r);
const exText = (a, b, r) => { // plain markup for steps
  const B = b.n === 0 ? '' : `${Math.abs(b.n) === 1 && b.d === 1 ? '' : b.d === 1 ? Math.abs(b.n) : ''}${b.d === 1 ? sym(r) : `{${Math.abs(b.n) === 1 ? '' : Math.abs(b.n)}${sym(r)}/${b.d}}`}`;
  if (a.n === 0) return (b.n < 0 ? '−' : '') + B;
  return `${fracMarkup(a)}${b.n === 0 ? '' : ` ${b.n < 0 ? '−' : '+'} ${B}`}`;
};

/* ───────── Systematic listing and the product rule (N5) ───────── */

const MENUS = [
  ['starters', ['soup', 'salad', 'bread', 'melon', 'olives'], 'mains', ['pasta', 'curry', 'pie', 'risotto', 'burger', 'fish']],
  ['shirts', ['white', 'blue', 'green', 'red', 'grey'], 'pairs of trousers', ['black', 'navy', 'beige', 'brown']],
  ['drinks', ['tea', 'coffee', 'juice', 'water'], 'snacks', ['crisps', 'apple', 'flapjack', 'banana', 'yoghurt']],
];
const listingCount = {
  id: 'maths.number.listing.count',
  name: 'Count outcomes systematically',
  levels: [{ label: 'Pairs from two groups' }, { label: 'Order and repeats' }, { label: 'Product rule', higher: true }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const [an, al, bn, bl] = pick(r, MENUS);
      const a = int(r, 2, al.length), b = int(r, 2, bl.length);
      return make(this.id, level, seed, { prompt: `You choose one of ${a} ${an} (${al.slice(0, a).join(', ')}) and one of ${b} ${bn} (${bl.slice(0, b).join(', ')}). How many different combinations are possible?`, answer: intAns(a * b),
        steps: [`List systematically: ${al[0]} with each of the ${b} ${bn} (${b} combinations), then ${al[1]} with each (${b} more), and so on.`, `There are ${a} rows of ${b}: ${a} × ${b} = ${a * b}`],
        traps: [tv(a + b, `Adding counts the items, not the combinations. Each of the ${a} can go with each of the ${b}: multiply.`)] });
    }
    if (r() < 0.5) {
      const n = int(r, 4, 7), names = shuffled(r, ['Ali', 'Bea', 'Cal', 'Dev', 'Eve', 'Fin', 'Gus']).slice(0, n);
      const ctx = pick(r, ['plays every other player once in a tournament', 'shakes hands once with every other person']);
      return make(this.id, level, seed, { prompt: `${n} people (${names.join(', ')}): each person ${ctx}. How many ${ctx.startsWith('plays') ? 'games are played' : 'handshakes are there'}?`, answer: intAns((n * (n - 1)) / 2),
        steps: [`List in order so nothing repeats: ${names[0]} pairs with the ${n - 1} others; ${names[1]} with the ${n - 2} after them; and so on.`, `${Array.from({ length: n - 1 }, (_, i) => n - 1 - i).join(' + ')} = ${(n * (n - 1)) / 2}`, `${names[0]}–${names[1]} is the same as ${names[1]}–${names[0]}, so it is counted once.`],
        traps: [tv(n * (n - 1), `That counts every pair twice (${names[0]}–${names[1]} and ${names[1]}–${names[0]}). Halve it.`), tv(n * n, 'Nobody plays themselves, and each pair only meets once.')] });
    }
    const digits = shuffled(r, [1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 3).sort((x, y) => x - y);
    return make(this.id, level, seed, { prompt: `How many different 3-digit numbers can be made using the digits ${digits.join(', ')}, each used exactly once?`, answer: intAns(6),
      steps: [`Start with ${digits[0]}: ${digits[0]}${digits[1]}${digits[2]}, ${digits[0]}${digits[2]}${digits[1]} (2 numbers).`, `Then start with ${digits[1]} (2 more), then ${digits[2]} (2 more).`, '3 × 2 × 1 = 6'],
      traps: [tv(3, 'Each starting digit gives 2 numbers, not 1: the last two digits can swap.'), tv(27, 'Each digit can only be used once, so repeats such as 111 are not allowed.')] });
  },
};
// Higher level 3 uses the product rule: written as a separate generator branch for clarity.
const productRule = r => {
  const kind = pick(r, ['code', 'pin-norepeat', 'firstnonzero', 'odd', 'letters']);
  if (kind === 'code') { const L = int(r, 1, 2), N = int(r, 2, 4); const v = 26 ** L * 10 ** N; return [`A code is ${L === 1 ? 'one letter' : 'two letters'} (A to Z) followed by ${N} digits (0 to 9). Letters and digits may repeat. How many different codes are possible?`, v, [`Product rule: multiply the number of choices for each position.`, `${Array(L).fill(26).concat(Array(N).fill(10)).join(' × ')} = ${W(v)}`], [tv(26 * L + 10 * N, 'Adding counts choices, not codes. Multiply the choices for each position.')]]; }
  if (kind === 'pin-norepeat') { const n = int(r, 3, 4); let v = 1; const f = []; for (let i = 0; i < n; i++) { v *= 10 - i; f.push(10 - i); } return [`A ${n}-digit PIN uses the digits 0 to 9 with no digit repeated. How many PINs are possible?`, v, ['Each digit used leaves one fewer choice for the next position.', `${f.join(' × ')} = ${W(v)}`], [tv(10 ** n, 'That allows repeats. With no repeats, each position has one fewer choice.')]]; }
  if (kind === 'firstnonzero') { const n = int(r, 3, 5); const v = 9 * 10 ** (n - 1); return [`How many ${n}-digit whole numbers are there? (The first digit cannot be 0.)`, v, ['First digit: 9 choices (1 to 9). Each other digit: 10 choices.', `9 × ${Array(n - 1).fill(10).join(' × ')} = ${W(v)}`], [tv(10 ** n, 'A number cannot start with 0, so the first digit has 9 choices, not 10.')]]; }
  if (kind === 'odd') { const v = 9 * 10 * 5; return ['How many 3-digit whole numbers are odd?', v, ['First digit: 9 choices; middle digit: 10; last digit must be 1, 3, 5, 7 or 9: 5 choices.', `9 × 10 × 5 = ${v}`], [tv(900, 'That counts all 3-digit numbers. Only 5 of the 10 possible last digits make an odd number.')]]; }
  const n = int(r, 4, 6), k = 2; const v = n * (n - 1);
  return [`${n} runners race. In how many different ways can the gold and silver medals be awarded?`, v, [`Gold: ${n} choices. Silver: ${n - 1} remaining choices.`, `${n} × ${n - 1} = ${v}`], [tv(n * (n - 1) / 2, 'Order matters here: gold A and silver B is different from gold B and silver A.'), tv(n * n, 'The same runner cannot win gold and silver.')]];
};
const _gen = listingCount.gen;
listingCount.gen = function (level, seed) {
  if (level !== 3) return _gen.call(this, level, seed);
  const r = rng(this.id + level + seed);
  const [prompt, v, steps, traps] = productRule(r);
  return make(this.id, level, seed, { prompt, answer: intAns(v), steps, traps });
};

const listingSystematic = {
  id: 'maths.number.listing.systematic',
  name: 'Check a systematic list',
  levels: [{ label: 'Pairs without order' }, { label: 'Arrangements' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const pool = shuffled(r, [['V', 'vanilla'], ['C', 'chocolate'], ['S', 'strawberry'], ['M', 'mint'], ['L', 'lemon']]).slice(0, 4);
      const letters = pool.map(p => p[0]);
      const pairs = []; for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) pairs.push(letters[i] + letters[j]);
      const miss = pick(r, pairs);
      const shown = pairs.filter(p => p !== miss);
      const listed = shown[0];
      const wrong = [listed[1] + listed[0], letters[0] + letters[0], pick(r, shown.slice(1)).split('').reverse().join('')];
      const c = choice(r, miss, [...new Set(wrong)].filter(w => w !== miss).slice(0, 3), o => (o[0] === o[1] ? `${o} is one flavour twice; the list is for two different flavours.` : `${o} is the same pair as ${o[1] + o[0]}, which is already listed.`));
      return make(this.id, level, seed, { prompt: `Ava lists every way to choose two different scoops from ${pool.map(p => `${p[1]} (${p[0]})`).join(', ')}. The order of the scoops does not matter. Her list is ${shown.join(', ')}. Which pair is missing?`, ...c,
        steps: [`Systematically: ${letters[0]} with each later flavour, then ${letters[1]} with each later one, and so on.`, `${pairs.join(', ')}: 6 pairs.`, `Missing: ${miss}`] });
    }
    const d = shuffled(r, [1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 3).sort((x, y) => x - y).map(String);
    const all = [d[0] + d[1] + d[2], d[0] + d[2] + d[1], d[1] + d[0] + d[2], d[1] + d[2] + d[0], d[2] + d[0] + d[1], d[2] + d[1] + d[0]];
    const miss = pick(r, all), shown = all.filter(x => x !== miss);
    const wrong = [d[0] + d[0] + d[1], shown[0], d[2] + d[2] + d[0]];
    const c = choice(r, miss, [...new Set(wrong)].filter(w => w !== miss), o => (shown.includes(o) ? `${o} is already in the list.` : `${o} uses a digit twice; each digit is used exactly once.`));
    return make(this.id, level, seed, { prompt: `Jo lists every 3-digit number that uses the digits ${d.join(', ')} once each: ${shown.join(', ')}. Which number is missing?`, ...c,
      steps: ['List in order of the first digit, then the second.', `${all.join(', ')}: 6 numbers.`, `Missing: ${miss}`] });
  },
};

/* ───────── Units and measures (N13) ───────── */

const LADDERS = {
  length: [['km', 1000], ['m', 100], ['cm', 10], ['mm', 1]],
  mass: [['kg', 1000], ['g', 1]],
  capacity: [['l', 1000], ['ml', 1]],
};
const unitsConvert = {
  id: 'maths.number.units.convert',
  name: 'Convert metric units',
  levels: [{ label: 'Length, mass and capacity' }, { label: 'Area, volume and capacity' }, { label: 'Multi-step problems' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const pairs = [['km', 'm', 1000], ['m', 'cm', 100], ['cm', 'mm', 10], ['m', 'mm', 1000], ['kg', 'g', 1000], ['l', 'ml', 1000], ['km', 'cm', 100000]];
      const [big, small, k] = pick(r, pairs);
      const down = r() < 0.55;
      const x = down ? D(String(int(r, 2, 95) / (r() < 0.6 ? 10 : 100))) : F(int(r, 2, 900) * (k >= 1000 ? 10 : 1));
      const v = down ? mul(x, F(k)) : div(x, F(k));
      const other = k === 1000 ? 100 : k === 100 ? 1000 : k === 10 ? 100 : 1000;
      return make(this.id, level, seed, { prompt: `Convert ${dt(x)} ${down ? big : small} into ${down ? small : big}.`, answer: dec(v),
        steps: [`1 ${big} = ${W(k)} ${small}.`, down ? `Larger unit to smaller unit: multiply by ${W(k)}.` : `Smaller unit to larger unit: divide by ${W(k)}.`, `${dt(x)} ${down ? '×' : '÷'} ${W(k)} = ${dt(v)} ${down ? small : big}`],
        traps: [tv(down ? div(x, F(k)) : mul(x, F(k)), `Wrong direction. Going to a ${down ? 'smaller' : 'larger'} unit, the number should get ${down ? 'bigger' : 'smaller'}.`), tv(down ? mul(x, F(other)) : div(x, F(other)), `1 ${big} is ${W(k)} ${small}, not ${W(other)}.`)] });
    }
    if (level === 2) {
      const kind = pick(r, ['m2cm2', 'cm2m2', 'cm3ml', 'cm3l', 'm3cm3']);
      if (kind === 'm2cm2' || kind === 'cm2m2') {
        const x = kind === 'm2cm2' ? D(String(int(r, 2, 90) / 10)) : F(int(r, 1, 99) * 1000);
        const v = kind === 'm2cm2' ? mul(x, F(10000)) : div(x, F(10000));
        return make(this.id, level, seed, { prompt: `Convert ${dt(x)} ${kind === 'm2cm2' ? 'm²' : 'cm²'} into ${kind === 'm2cm2' ? 'cm²' : 'm²'}.`, answer: dec(v),
          steps: ['1 m = 100 cm, so 1 m² is a square 100 cm by 100 cm.', '1 m² = 100 × 100 = 10 000 cm²', `${dt(x)} ${kind === 'm2cm2' ? '× 10 000' : '÷ 10 000'} = ${dt(v)}`],
          traps: [tv(kind === 'm2cm2' ? mul(x, F(100)) : div(x, F(100)), 'Area units square the length factor: 1 m² = 100 × 100 cm², not 100 cm².')] });
      }
      if (kind === 'm3cm3') {
        const x = D(String(int(r, 2, 40) / 10)), v = mul(x, F(1000000));
        return make(this.id, level, seed, { prompt: `Convert ${dt(x)} m³ into cm³.`, answer: dec(v),
          steps: ['1 m³ is a cube 100 cm on each side.', '1 m³ = 100 × 100 × 100 = 1 000 000 cm³', `${dt(x)} × 1 000 000 = ${W(v.n)} cm³`],
          traps: [tv(mul(x, F(100)), 'Volume units cube the length factor: 100 × 100 × 100.'), tv(mul(x, F(10000)), 'That is the area factor. Volume needs 100 × 100 × 100.')] });
      }
      const ml = kind === 'cm3ml';
      const x = F(int(r, 2, 95) * (ml ? 5 : 50));
      const v = ml ? x : div(x, F(1000));
      return make(this.id, level, seed, { prompt: `A container holds ${W(x.n)} cm³. How many ${ml ? 'millilitres' : 'litres'} is that?`, answer: dec(v),
        steps: ['1 cm³ = 1 ml, and 1000 ml = 1 litre.', ml ? `${W(x.n)} cm³ = ${W(x.n)} ml` : `${W(x.n)} cm³ = ${W(x.n)} ml = ${dt(v)} litres`],
        traps: [tv(ml ? div(x, F(1000)) : x, ml ? '1 cm³ is exactly 1 ml.' : '1 cm³ = 1 ml; then divide by 1000 to get litres.')] });
    }
    if (r() < 0.5) {
      const a = D(String(int(r, 12, 48) / 10)), b = F(int(r, 105, 950));
      const v = add(mul(a, F(1000)), b);
      return make(this.id, level, seed, { prompt: `A walk is ${dt(a)} km and then ${b.n} m more. How many metres is the whole walk?`, answer: dec(v),
        steps: [`Convert to the same unit first: ${dt(a)} km = ${W(mul(a, F(1000)).n)} m.`, `${W(mul(a, F(1000)).n)} + ${b.n} = ${W(v.n)} m`],
        traps: [tv(add(a, b), 'You cannot add km and m directly. Convert the kilometres to metres first.')] });
    }
    const L = int(r, 2, 6), g = pick(r, [125, 200, 250, 300, 400, 500]);
    const total = L * 1000, n = Math.floor(total / g);
    return make(this.id, level, seed, { prompt: `How many ${g} ml glasses can be completely filled from ${L} litres of juice?`, answer: intAns(n),
      steps: [`${L} litres = ${W(total)} ml.`, `${W(total)} ÷ ${g} = ${n}${total % g ? ` remainder ${total % g}` : ''}`, `Only complete glasses count: ${n}.`],
      traps: [tv(total % g ? Math.ceil(total / g) : null, 'Round down: there is not enough juice to fill the last glass.')] });
  },
};

const timeSkill = {
  id: 'maths.number.units.time',
  name: 'Time: hours, minutes and durations',
  levels: [{ label: 'Hours and minutes' }, { label: 'Durations' }, { label: 'Time and money' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.5) {
        const h = int(r, 1, 5), q = pick(r, [0.25, 0.5, 0.75, 0.1, 0.2, 0.4, 0.6, 0.8]);
        const v = Math.round((h + q) * 60);
        return make(this.id, level, seed, { prompt: `How many minutes are there in ${h + q} hours?`, answer: intAns(v),
          steps: [`${h} hours = ${h * 60} minutes.`, `${q} of an hour = ${q} × 60 = ${Math.round(q * 60)} minutes.`, `Total: ${v} minutes`],
          traps: [tv(h * 60 + Number(String(q).slice(2).padEnd(2, '0')), `${q} of an hour is not ${String(q).slice(2).padEnd(2, '0')} minutes. An hour has 60 minutes, not 100: ${q} × 60 = ${Math.round(q * 60)}.`)] });
      }
      const h = int(r, 1, 4), m = pick(r, [15, 30, 45, 6, 12, 36, 24, 48]);
      const v = D(String(h + m / 60));
      return make(this.id, level, seed, { prompt: `Write ${h} hours ${m} minutes as a number of hours (a decimal).`, answer: dec(v),
        steps: [`${m} minutes = {${m}/60} of an hour = ${m / 60}`, `${h} + ${m / 60} = ${dt(v)} hours`],
        traps: [tv(D(`${h}.${String(m).padStart(2, '0')}`), `${h}.${String(m).padStart(2, '0')} hours would be ${h} hours and ${dt(mul(D('0.' + String(m).padStart(2, '0')), F(60)))} minutes. Divide the minutes by 60.`)] });
    }
    if (level === 2) {
      const sh = int(r, 6, 14), sm = pick(r, [5, 15, 20, 35, 40, 45, 50, 55]), dur = int(r, 70, 300);
      const end = sh * 60 + sm + dur, eh = Math.floor(end / 60) % 24, em = end % 60;
      const t = (h, m) => `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      const naive = (eh * 100 + em) - (sh * 100 + sm);
      return make(this.id, level, seed, { prompt: `A journey starts at ${t(sh, sm)} and ends at ${t(eh, em)} on the same day. How long is the journey, in minutes?`, answer: intAns(dur),
        steps: [`Count up to the next hour: ${t(sh, sm)} to ${t(sh + 1, 0)} is ${60 - sm} minutes.`, `${t(sh + 1, 0)} to ${t(eh, 0)} is ${eh - sh - 1} hours = ${(eh - sh - 1) * 60} minutes; then ${em} minutes more.`, `${60 - sm} + ${(eh - sh - 1) * 60} + ${em} = ${dur} minutes`],
        traps: [tv(naive !== dur ? naive : null, 'Times are not ordinary decimals: subtracting them like 1320 − 945 treats an hour as 100 minutes. Count up through the hours instead.')] });
    }
    const rate = pick(r, [24, 30, 36, 42, 48, 60]), h = int(r, 1, 4), m = pick(r, [10, 15, 20, 30, 40, 45, 50]);
    const v = div(mul(F(rate), F(h * 60 + m)), F(60));
    if (decText(v) === null) return this.gen(level, seed + 'x');
    return make(this.id, level, seed, { prompt: `A plumber charges £${rate} per hour. How much does a job lasting ${h} hours ${m} minutes cost, in pounds?`, answer: dec(v, { dp: 2 }), note: 'Money: give 2 decimal places, for example 84.00.',
      steps: [`${m} minutes = {${m}/60} of an hour, so the time is ${h} + {${m}/60} hours.`, `Cost: £${rate} × ${h} = £${rate * h}, plus £${rate} × {${m}/60} = £${dt(div(mul(F(rate), F(m)), F(60)))}`, `Total: £${decText(v, 2)}`],
      traps: [tv(mul(F(rate), D(`${h}.${String(m).padStart(2, '0')}`)), `${h} hours ${m} minutes is not ${h}.${m} hours. Convert the minutes to a fraction of 60.`)] });
  },
};

/* ───────── Compound measures (N13) ───────── */

const speed = {
  id: 'maths.number.compound.speed',
  name: 'Speed, distance and time',
  levels: [{ label: 'Whole hours' }, { label: 'Minutes and hours' }, { label: 'Average speed and unit changes' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const s = int(r, 3, 15) * 5, t = int(r, 2, 6), d = s * t;
      const kind = pick(r, ['s', 'd', 't']);
      const prompt = kind === 's' ? `A train travels ${d} km in ${t} hours. Work out its average speed in km/h.` : kind === 'd' ? `A car travels at ${s} km/h for ${t} hours. How far does it travel, in km?` : `A cyclist travels ${d} km at ${s} km/h. How many hours does it take?`;
      const ans = kind === 's' ? s : kind === 'd' ? d : t;
      return make(this.id, level, seed, { prompt, answer: intAns(ans),
        steps: ['speed = distance ÷ time, so distance = speed × time and time = distance ÷ speed.', kind === 's' ? `speed = ${d} ÷ ${t} = ${s} km/h` : kind === 'd' ? `distance = ${s} × ${t} = ${d} km` : `time = ${d} ÷ ${s} = ${t} hours`],
        traps: [tv(kind === 's' ? F(d * t) : kind === 'd' ? div(F(s), F(t)) : div(F(s), F(d)), 'Check the formula: speed = distance ÷ time.')] });
    }
    if (level === 2) {
      const s = pick(r, [12, 24, 30, 36, 40, 48, 60, 72, 80]), m = pick(r, [15, 20, 30, 40, 45, 50]);
      const d = div(mul(F(s), F(m)), F(60));
      if (decText(d) === null) return this.gen(level, seed + 'm');
      if (r() < 0.5) return make(this.id, level, seed, { prompt: `A bus travels at ${s} km/h for ${m} minutes. How far does it travel, in km?`, answer: dec(d),
        steps: [`Convert the time to hours: ${m} minutes = {${m}/60} hour.`, `distance = ${s} × {${m}/60} = ${dt(d)} km`],
        traps: [tv(s * m, `The speed is per hour, so the time must be in hours, not minutes: ${m} minutes = {${m}/60} hour.`), tv(mul(F(s), D(`0.${m}`)), `${m} minutes is not 0.${m} hours: divide by 60.`)] });
      return make(this.id, level, seed, { prompt: `How many minutes does it take to travel ${dt(d)} km at ${s} km/h?`, answer: intAns(m),
        steps: [`time = distance ÷ speed = ${dt(d)} ÷ ${s} = ${fracMarkup(div(d, F(s)))} hour`, `${fracMarkup(div(d, F(s)))} × 60 = ${m} minutes`],
        traps: [tv(div(d, F(s)), 'That is the time in hours. Multiply by 60 for minutes.')] });
    }
    if (r() < 0.6) {
      for (let k = 0; k < 100; k++) {
        const d1 = int(r, 2, 12) * 10, s1 = pick(r, [20, 30, 40, 60]), d2 = int(r, 2, 12) * 10, s2 = pick(r, [30, 40, 50, 60, 80]);
        const t1 = div(F(d1), F(s1)), t2 = div(F(d2), F(s2)), avg = div(F(d1 + d2), add(t1, t2));
        if (decText(avg) === null || decText(t1) === null || decText(t2) === null || s1 === s2) continue;
        return make(this.id, level, seed, { prompt: `Mo drives ${d1} km at ${s1} km/h, then ${d2} km at ${s2} km/h. Work out the average speed for the whole journey, in km/h.`, answer: dec(avg),
          steps: [`Time for each part: ${d1} ÷ ${s1} = ${dt(t1)} h and ${d2} ÷ ${s2} = ${dt(t2)} h.`, `Total distance ${d1 + d2} km; total time ${dt(add(t1, t2))} h.`, `Average speed = ${d1 + d2} ÷ ${dt(add(t1, t2))} = ${dt(avg)} km/h`],
          traps: [tv(div(F(s1 + s2), F(2)), 'You cannot average the two speeds: Mo spends longer at the slower speed. Use total distance ÷ total time.')] });
      }
    }
    const ms = pick(r, [5, 10, 15, 20, 25, 30]), kmh = mul(F(ms), D('3.6'));
    const toKmh = r() < 0.5;
    return make(this.id, level, seed, { prompt: toKmh ? `Convert ${ms} m/s into km/h.` : `Convert ${dt(kmh)} km/h into m/s.`, answer: dec(toKmh ? kmh : F(ms)),
      steps: ['1 m/s means 1 metre each second: 3600 metres each hour, which is 3.6 km/h.', toKmh ? `${ms} × 3.6 = ${dt(kmh)} km/h` : `${dt(kmh)} ÷ 3.6 = ${ms} m/s`],
      traps: [tv(toKmh ? ms * 60 : div(kmh, F(60)), 'There are 3600 seconds in an hour, not 60. Then change metres to kilometres.'), tv(toKmh ? div(F(ms), D('3.6')) : mul(kmh, D('3.6')), 'Wrong direction: a speed in km/h is a bigger number than the same speed in m/s.')] });
  },
};

const densityPressure = {
  id: 'maths.number.compound.density-pressure',
  name: 'Density and pressure',
  levels: [{ label: 'Find density' }, { label: 'Find mass or volume' }, { label: 'Pressure' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const mats = [['aluminium', '2.7'], ['oak', '0.75'], ['ice', '0.92'], ['glass', '2.5'], ['copper', '8.9'], ['plastic', '1.2'], ['steel', '7.8']];
    if (level === 1) {
      const dens = pick(r, ['2.5', '0.8', '1.5', '3.2', '7.5', '0.6', '4']), V = int(r, 2, 40) * 5;
      const m = mul(D(dens), F(V));
      return make(this.id, level, seed, { prompt: `A block has mass ${dt(m)} g and volume ${V} cm³. Work out its density in g/cm³. (density = mass ÷ volume)`, answer: dec(D(dens)),
        steps: [`density = mass ÷ volume = ${dt(m)} ÷ ${V}`, `= ${dens} g/cm³`],
        traps: [tv(div(F(V), m), 'Divide mass by volume, not volume by mass.'), tv(mul(m, F(V)), 'Density is mass ÷ volume, not mass × volume.')] });
    }
    if (level === 2) {
      const [name, dens] = pick(r, mats), V = int(r, 2, 30) * 10;
      const m = mul(D(dens), F(V));
      if (r() < 0.5) return make(this.id, level, seed, { prompt: `The density of ${name} is ${dens} g/cm³. Find the mass of ${V} cm³ of ${name}, in grams.`, answer: dec(m),
        steps: ['mass = density × volume', `${dens} × ${V} = ${dt(m)} g`], traps: [tv(div(F(V), D(dens)), 'mass = density × volume. Dividing gives a volume.'), tv(div(D(dens), F(V)), 'mass = density × volume.')] });
      return make(this.id, level, seed, { prompt: `The density of ${name} is ${dens} g/cm³. A piece of ${name} has mass ${dt(m)} g. Find its volume in cm³.`, answer: dec(F(V)),
        steps: ['volume = mass ÷ density', `${dt(m)} ÷ ${dens} = ${V} cm³`], traps: [tv(mul(m, D(dens)), 'volume = mass ÷ density, not mass × density.')] });
    }
    const p = int(r, 2, 40) * 25, A = pick(r, ['0.2', '0.4', '0.5', '1.5', '2', '2.5', '0.25']);
    const Fz = mul(F(p), D(A));
    if (r() < 0.5) return make(this.id, level, seed, { prompt: `A force of ${dt(Fz)} N acts on an area of ${A} m². Work out the pressure in N/m². (pressure = force ÷ area)`, answer: dec(F(p)),
      steps: ['pressure = force ÷ area', `${dt(Fz)} ÷ ${A} = ${p} N/m²`], traps: [tv(mul(Fz, D(A)), 'Divide force by area: pressure = force ÷ area.'), tv(div(D(A), Fz), 'Force divided by area, not area divided by force.')] });
    return make(this.id, level, seed, { prompt: `A box exerts a pressure of ${p} N/m² on the floor over an area of ${A} m². What force does it exert, in newtons?`, answer: dec(Fz),
      steps: ['force = pressure × area', `${p} × ${A} = ${dt(Fz)} N`], traps: [tv(div(F(p), D(A)), 'force = pressure × area. Dividing finds an area.')] });
  },
};

/* ───────── Exact answers: π (both tiers) and surds (Higher) (N8) ───────── */

const Z = F(0);
const piSkill = {
  id: 'maths.number.exact.pi',
  name: 'Exact answers in terms of π',
  levels: [{ label: 'Simplify multiples of π' }, { label: 'Circles in terms of π' }, { label: 'Parts of circles' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const kind = pick(r, ['add', 'sub', 'mul', 'div']);
      const a = int(r, 2, 12), b = int(r, 2, 9);
      if (kind === 'add') return make(this.id, level, seed, { prompt: `Simplify ${a}π + ${b}π`, answer: ex(Z, F(a + b), 'pi'), steps: [`π is like a unit: ${a} lots of π plus ${b} lots of π.`, `= ${a + b}π`], exTraps: [exTrap(Z, F(a * b), 'pi', 'Adding like terms adds the numbers in front: it does not multiply them.')] });
      if (kind === 'sub') { const [x, y] = a > b ? [a, b] : [b + a, b]; return make(this.id, level, seed, { prompt: `Simplify ${x}π − ${y}π`, answer: ex(Z, F(x - y), 'pi'), steps: [`${x} lots of π take away ${y} lots of π.`, `= ${x - y}π`], exTraps: [exTrap(F(x - y), Z, 'pi', 'The π stays: the answer is a number of πs.')] }); }
      if (kind === 'mul') return make(this.id, level, seed, { prompt: `Simplify ${b} × ${a}π`, answer: ex(Z, F(a * b), 'pi'), steps: [`${b} × ${a}π = ${a * b}π`], exTraps: [exTrap(Z, F(a + b), 'pi', 'Multiply the numbers: do not add them.')] });
      return make(this.id, level, seed, { prompt: `Simplify ${a * b}π ÷ ${b}`, answer: ex(Z, F(a), 'pi'), steps: [`${a * b}π ÷ ${b} = ${a}π`], exTraps: [] });
    }
    const rad = int(r, 2, 12), useD = r() < 0.4;
    if (level === 2) {
      const area = r() < 0.55;
      const given = useD ? `diameter ${2 * rad} cm` : `radius ${rad} cm`;
      if (area) return make(this.id, level, seed, { prompt: `A circle has ${given}. Find its area. Give your answer in terms of π.`, answer: ex(Z, F(rad * rad), 'pi'), note: 'Area of a circle = πr²',
        steps: [useD ? `The radius is half the diameter: ${rad} cm.` : `r = ${rad} cm`, `Area = πr² = π × ${rad}² = ${rad * rad}π cm²`],
        exTraps: [exTrap(Z, F(2 * rad), 'pi', 'That is the circumference (2πr). Area uses r²: π × r × r.'), ...(useD ? [exTrap(Z, F(4 * rad * rad), 'pi', 'Use the radius, not the diameter: halve it first.')] : [])] });
      return make(this.id, level, seed, { prompt: `A circle has ${given}. Find its circumference. Give your answer in terms of π.`, answer: ex(Z, F(2 * rad), 'pi'), note: 'Circumference = πd = 2πr',
        steps: [`Circumference = πd = π × ${2 * rad}`, `= ${2 * rad}π cm`],
        exTraps: [exTrap(Z, F(rad * rad), 'pi', 'That is the area (πr²). The circumference is π × diameter.'), ...(useD ? [] : [exTrap(Z, F(rad), 'pi', 'Circumference is π × diameter, and the diameter is twice the radius.')])] });
    }
    const kind = pick(r, ['semiArea', 'quarterArea', 'semiPerim']);
    if (kind === 'semiArea') { const rr = 2 * int(r, 1, 6); return make(this.id, level, seed, { prompt: `A semicircle has radius ${rr} cm. Find its area in terms of π.`, answer: ex(Z, F(rr * rr, 2), 'pi'),
      steps: [`A whole circle: π × ${rr}² = ${rr * rr}π`, `Half of it: ${rr * rr / 2}π cm²`], exTraps: [exTrap(Z, F(rr * rr), 'pi', 'That is the whole circle. A semicircle is half of it.')] }); }
    if (kind === 'quarterArea') { const rr = 2 * int(r, 1, 6); return make(this.id, level, seed, { prompt: `A quarter circle has radius ${rr} cm. Find its area in terms of π.`, answer: ex(Z, F(rr * rr, 4), 'pi'),
      steps: [`Whole circle: ${rr * rr}π`, `A quarter: ${rr * rr / 4}π cm²`], exTraps: [exTrap(Z, F(rr * rr), 'pi', 'That is the whole circle: divide by 4.')] }); }
    const rr = int(r, 2, 10);
    return make(this.id, level, seed, { prompt: `A semicircle has radius ${rr} cm. Find its perimeter. Give your answer in terms of π.`, answer: ex(F(2 * rr), F(rr), 'pi'),
      steps: [`Curved part: half the circumference = ½ × 2π × ${rr} = ${rr}π`, `Straight edge: the diameter, ${2 * rr} cm`, `Perimeter = ${rr}π + ${2 * rr} cm`],
      exTraps: [exTrap(Z, F(rr), 'pi', `That is only the curved edge. The perimeter also includes the straight diameter (${2 * rr} cm).`), exTrap(Z, F(2 * rr), 'pi', 'Only half the circumference is curved; then add the diameter.')] });
  },
};

const nonSquare = r => { for (;;) { const s = pick(r, [2, 3, 5, 6, 7, 10, 11]); return s; } };
const surdSimplify = {
  id: 'maths.number.exact.surds-simplify',
  name: 'Simplify surds',
  higherOnly: true,
  levels: [{ label: 'Take out square factors' }, { label: 'Multiply and collect' }, { label: 'Expand brackets' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const k = int(r, 2, 10), s = nonSquare(r), n = k * k * s;
      return make(this.id, level, seed, { prompt: `Simplify √${n}`, answer: ex(Z, F(k), s),
        steps: [`Find the largest square factor of ${n}: ${k * k}.`, `√${n} = √${k * k} × √${s} = ${k}√${s}`],
        exTraps: [exTrap(Z, F(k * k), s, `√${k * k} is ${k}, not ${k * k}: take the square root of the square factor.`)] });
    }
    if (level === 2) {
      const kind = pick(r, ['mulInt', 'mulSurd', 'add', 'sub']);
      if (kind === 'mulInt') { const s = nonSquare(r), k = int(r, 2, 5); return make(this.id, level, seed, { prompt: `Simplify √${s} × √${k * k * s}`, answer: ex(F(k * s), Z, s), steps: [`√${s} × √${k * k * s} = √${s * k * k * s}`, `= √(${k * s})² = ${k * s}`], exTraps: [] }); }
      if (kind === 'mulSurd') { let s1, s2; do { s1 = nonSquare(r); s2 = nonSquare(r); } while (s1 === s2 || squareFree(s1 * s2).k > 1); const a = int(r, 2, 5), b = int(r, 2, 5); return make(this.id, level, seed, { prompt: `Simplify ${a}√${s1} × ${b}√${s2}`, answer: ex(Z, F(a * b), s1 * s2), steps: [`Multiply the numbers: ${a} × ${b} = ${a * b}`, `Multiply the surds: √${s1} × √${s2} = √${s1 * s2}`, `= ${a * b}√${s1 * s2}`], exTraps: [exTrap(Z, F(a + b), s1 * s2, 'Multiply the numbers in front: do not add them.')] }); }
      const s = nonSquare(r), p = int(r, 2, 6), q = int(r, 1, p - 1 || 1);
      const plus = kind === 'add' || p === q;
      const v = plus ? p + q : p - q;
      return make(this.id, level, seed, { prompt: `Simplify √${p * p * s} ${plus ? '+' : '−'} √${q * q * s}`, answer: ex(Z, F(v), s),
        steps: [`√${p * p * s} = ${p}√${s} and √${q * q * s} = ${q === 1 ? '' : q}√${s}`, `${p}√${s} ${plus ? '+' : '−'} ${q === 1 ? '' : q}√${s} = ${v === 1 ? '' : v}√${s}`],
        exTraps: [exTrap(Z, F(1), (plus ? p * p + q * q : p * p - q * q) * s, `You cannot ${plus ? 'add' : 'subtract'} the numbers under the root signs. Simplify each surd first, then collect like terms.`)] });
    }
    const s = nonSquare(r), a = int(r, 1, 5), b = int(r, 1, 4), c = int(r, 1, 5), d = int(r, 1, 3);
    if (r() < 0.4) { // (a + √s)²
      return make(this.id, level, seed, { prompt: `Expand and simplify (${a} + √${s})²`, answer: ex(F(a * a + s), F(2 * a), s),
        steps: [`(${a} + √${s})(${a} + √${s}) = ${a * a} + ${a}√${s} + ${a}√${s} + ${s}`, `= ${a * a + s} + ${2 * a}√${s}`],
        exTraps: [exTrap(F(a * a + s), Z, s, `Squaring a bracket is not squaring each term: (${a} + √${s})² = (${a} + √${s})(${a} + √${s}), which has a middle term.`)] });
    }
    // (a + b√s)(c + d√s) = ac + bds + (ad + bc)√s
    return make(this.id, level, seed, { prompt: `Expand and simplify (${a} + ${b === 1 ? '' : b}√${s})(${c} + ${d === 1 ? '' : d}√${s})`, answer: ex(F(a * c + b * d * s), F(a * d + b * c), s),
      steps: [`${a} × ${c} = ${a * c}; ${a} × ${d === 1 ? '' : d}√${s} = ${a * d}√${s}; ${b === 1 ? '' : b}√${s} × ${c} = ${b * c}√${s}; ${b === 1 ? '' : b}√${s} × ${d === 1 ? '' : d}√${s} = ${b * d} × ${s} = ${b * d * s}`, `Collect: ${a * c + b * d * s} + ${a * d + b * c}√${s}`],
      exTraps: [exTrap(F(a * c + b * d), F(a * d + b * c), s, `√${s} × √${s} = ${s}, so ${b === 1 ? '' : b}√${s} × ${d === 1 ? '' : d}√${s} = ${b * d * s}, not ${b * d}.`)] });
  },
};

const surdRationalise = {
  id: 'maths.number.exact.surds-rationalise',
  name: 'Rationalise denominators',
  higherOnly: true,
  levels: [{ label: 'a over √b' }, { label: 'a over b√c' }, { label: 'Two-term numerators' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const s = pick(r, [2, 3, 5, 6, 7, 10]);
    if (level === 1) {
      const a = pick(r, [s, 2 * s, 3 * s, 1, 2, 5].filter(x => x > 0));
      const coef = F(a, s);
      return make(this.id, level, seed, { prompt: `Rationalise the denominator of {${a}/√${s}}. Give your answer in its simplest form.`, answer: ex(Z, coef, s),
        steps: [`Multiply top and bottom by √${s}: {${a} × √${s}/√${s} × √${s}} = {${a}√${s}/${s}}`, `Simplify: ${exText(Z, coef, s)}`],
        exTraps: [exTrap(Z, F(a), s, `√${s} × √${s} = ${s}, so the denominator becomes ${s}, not 1.`)] });
    }
    if (level === 2) {
      const b = int(r, 2, 5), a = pick(r, [s * 2, s * b, 2 * b * s, 6, 10, 12]);
      const coef = F(a, b * s);
      return make(this.id, level, seed, { prompt: `Rationalise the denominator of {${a}/${b}√${s}}. Give your answer in its simplest form.`, answer: ex(Z, coef, s),
        steps: [`Multiply top and bottom by √${s}: {${a}√${s}/${b} × ${s}} = {${a}√${s}/${b * s}}`, `Simplify: ${exText(Z, coef, s)}`],
        exTraps: [exTrap(Z, F(a, b), s, `${b}√${s} × √${s} = ${b} × ${s} = ${b * s}: multiply the ${b} by ${s} as well.`)] });
    }
    const c = pick(r, [s, 2 * s, 3 * s]);
    return make(this.id, level, seed, { prompt: `Write {${c} + √${s}/√${s}} in the form a + b√${s}.`, answer: ex(F(1), F(c, s), s),
      steps: [`Split the fraction: {${c}/√${s}} + {√${s}/√${s}}`, `{√${s}/√${s}} = 1 and {${c}/√${s}} = {${c}√${s}/${s}} = ${exText(Z, F(c, s), s)}`, `= 1 + ${exText(Z, F(c, s), s)}`],
      exTraps: [exTrap(Z, F(c, s), s, `Do not forget the second term: √${s} ÷ √${s} = 1.`)] });
  },
};

/* ───────── Fractions in ratio (N11), reciprocals (N3), symbols (N1) ───────── */

const ratioFractions = {
  id: 'maths.number.ratio-fractions',
  name: 'Fractions and ratios',
  levels: [{ label: 'Ratio to fraction' }, { label: 'Fraction to ratio' }, { label: 'Comparing two quantities' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    let a, b; do { a = int(r, 1, 9); b = int(r, 1, 9); } while (a === b || gcd(a, b) !== 1);
    const [x, y] = pick(r, [['red', 'blue'], ['boys', 'girls'], ['adults', 'children'], ['cats', 'dogs']]);
    if (level === 1) {
      const which = r() < 0.5;
      const f = F(which ? b : a, a + b);
      return make(this.id, level, seed, { prompt: `The ratio of ${x} to ${y} is ${a} : ${b}. What fraction of the total are ${which ? y : x}?`, answer: fracAns(f),
        steps: [`There are ${a} + ${b} = ${a + b} parts altogether.`, `${which ? y : x} are ${which ? b : a} of those parts: ${fracMarkup(f)}`],
        traps: [tv(F(which ? b : a, which ? a : b), `That compares ${which ? y : x} with ${which ? x : y}, not with the total. The total is ${a + b} parts.`), tv(F(which ? a : b, which ? b : a), `That compares the two groups with each other. The question asks for a fraction of the total: ${a + b} parts.`)] });
    }
    if (level === 2) {
      const f = F(a, a + b);
      return make(this.id, level, seed, { prompt: `${fracMarkup(f)} of a group are ${x}. The rest are ${y}. Write the ratio ${x} : ${y} in its simplest form.`, answer: { kind: 'ratio', parts: [a, b] },
        steps: [`Out of ${a + b} parts, ${a} are ${x} and ${a + b} − ${a} = ${b} are ${y}.`, `${x} : ${y} = ${a} : ${b}`],
        raTraps: [{ parts: [a, a + b], why: `${a} : ${a + b} compares ${x} with the whole group. The rest (${y}) is ${b} parts.` }] });
    }
    if (r() < 0.5) return make(this.id, level, seed, { prompt: `A is ${fracMarkup(F(a, b))} of B. Write the ratio A : B in its simplest form.`, answer: { kind: 'ratio', parts: [a, b] },
      steps: [`If B is ${b} parts, A is ${a} of those parts.`, `A : B = ${a} : ${b}`], raTraps: [{ parts: [a, a + b], why: `A is ${fracMarkup(F(a, b))} of B, not of A and B together.` }] });
    return make(this.id, level, seed, { prompt: `The ratio A : B is ${a} : ${b}. What fraction of B is A?`, answer: fracAns(F(a, b)),
      steps: [`A is ${a} parts and B is ${b} parts.`, `A as a fraction of B: {${a}/${b}}`], traps: [tv(F(a, a + b), `{${a}/${a + b}} is A as a fraction of the total. The question compares A with B only.`)] });
  },
};

const reciprocals = {
  id: 'maths.number.reciprocals',
  name: 'Reciprocals',
  levels: [{ label: 'Whole numbers and fractions' }, { label: 'Mixed numbers and decimals' }, { label: 'Reasoning with reciprocals' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      if (r() < 0.4) { const n = int(r, 2, 12); return make(this.id, level, seed, { prompt: `Write down the reciprocal of ${n}.`, answer: fracAns(F(1, n)), steps: ['The reciprocal of a number is 1 divided by it.', `1 ÷ ${n} = {1/${n}}`], traps: [tv(-n, 'A reciprocal is not the negative. It is 1 divided by the number.')] }); }
      let p, q; do { q = int(r, 2, 11); p = int(r, 1, 11); } while (p === q || gcd(p, q) !== 1);
      return make(this.id, level, seed, { prompt: `Write down the reciprocal of ${fracMarkup(F(p, q))}.`, answer: fracAns(F(q, p)), steps: ['Turn the fraction upside down.', `The reciprocal of ${fracMarkup(F(p, q))} is ${fracMarkup(F(q, p))}`], traps: [tv(F(-p, q), 'A reciprocal is not the negative: turn the fraction upside down.')] });
    }
    if (level === 2) {
      if (r() < 0.5) { let w, p, q; do { w = int(r, 1, 4); q = int(r, 2, 6); p = int(r, 1, q - 1); } while (gcd(p, q) !== 1); const v = F(w * q + p, q); return make(this.id, level, seed, { prompt: `Write down the reciprocal of {${w} ${p}/${q}}.`, answer: fracAns(F(q, w * q + p)), steps: [`Convert to an improper fraction: {${w} ${p}/${q}} = ${fracMarkup(v)}`, `Turn it upside down: ${fracMarkup(F(v.d, v.n))}`], traps: [tv(add(F(w), F(q, p)), 'Convert the mixed number to an improper fraction before turning it over.')] }); }
      const d = pick(r, ['0.5', '0.25', '0.2', '0.4', '0.125', '0.8', '2.5', '1.25']);
      const v = D(d), rec = F(v.d, v.n);
      return make(this.id, level, seed, { prompt: `Write down the reciprocal of ${d}. Give your answer as a fraction or a whole number.`, answer: fracAns(rec), steps: [`${d} = ${fracMarkup(v)}`, `Turn it upside down: ${fracMarkup(rec)}`], traps: [tv(F(-v.n, v.d), 'A reciprocal is not the negative.')] });
    }
    const kind = pick(r, ['product', 'back', 'zero']);
    if (kind === 'zero') {
      const c = choice(r, '0', ['1', '−1', '0.5'].slice(0, 3), o => `${o} has a reciprocal: 1 ÷ ${o} = ${o === '1' ? '1' : o === '−1' ? '−1' : '2'}.`);
      return make(this.id, level, seed, { prompt: 'Which of these numbers has no reciprocal?', ...c, steps: ['The reciprocal of x is 1 ÷ x.', 'You cannot divide by 0, so 0 has no reciprocal.'] });
    }
    if (kind === 'product') { let p, q; do { q = int(r, 2, 9); p = int(r, 1, 9); } while (p === q || gcd(p, q) !== 1); return make(this.id, level, seed, { prompt: `Work out ${fracMarkup(F(p, q))} × the reciprocal of ${fracMarkup(F(p, q))}.`, answer: fracAns(F(1)), steps: [`The reciprocal of ${fracMarkup(F(p, q))} is ${fracMarkup(F(q, p))}.`, `${fracMarkup(F(p, q))} × ${fracMarkup(F(q, p))} = 1. A number times its reciprocal is always 1.`], traps: [tv(F(p * p, q * q), 'Multiply by the reciprocal (upside down), not by the same fraction.')] }); }
    const n = pick(r, [4, 5, 8, 10, 20, 25]), dd = decText(F(1, n));
    return make(this.id, level, seed, { prompt: `The reciprocal of a number is ${dd}. What is the number?`, answer: fracAns(F(n)), steps: [`${dd} = {1/${n}}`, `The reciprocal of {1/${n}} is ${n}, so the number is ${n}.`], traps: [tv(D(dd), 'The reciprocal of the reciprocal takes you back to the number: turn {1/' + n + '} over.')] });
  },
};

const symbols = {
  id: 'maths.number.symbols',
  name: 'Inequality symbols',
  levels: [{ label: 'Choose <, > or =' }, { label: 'True statements with ≤, ≥ and ≠' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    const forms = () => {
      const f = pick(r, [F(1, 2), F(3, 4), F(2, 5), F(3, 8), F(7, 10), F(1, 4), F(3, 5)]);
      const shift = pick(r, [F(0), F(1, 100), F(-1, 100), F(1, 20), F(-1, 20)]);
      const g = add(f, shift);
      const neg = r() < 0.3 ? -1 : 1;
      return [mul(f, F(neg)), mul(g, F(neg))];
    };
    const showF = v => (r() < 0.5 && [2, 4, 5, 8, 10].includes(v.d) ? `${v.n < 0 ? '−' : ''}{${Math.abs(v.n)}/${v.d}}` : `${decText(v).replace('-', '−')}`);
    if (level === 1) {
      const [x, y] = forms();
      const lx = showF(x), ly = decText(y).replace('-', '−');
      const right = eq(x, y) ? '=' : x.n * y.d < y.n * x.d ? '<' : '>';
      const c = choice(r, right, ['<', '>', '='].filter(s => s !== right), () => `Convert both to decimals: ${decText(x).replace('-', '−')} and ${decText(y).replace('-', '−')}.${x.n < 0 ? ' For negatives, the one closer to zero is bigger.' : ''}`);
      return make(this.id, level, seed, { prompt: `Which symbol goes in the box?  ${lx} ☐ ${ly}`, ...c, steps: [`As decimals: ${decText(x).replace('-', '−')} and ${decText(y).replace('-', '−')}.`, `So ${lx} ${right} ${ly}`] });
    }
    for (let t = 0; t < 200; t++) {
      const cands = [];
      const mk = () => { const a = int(r, -9, 9), b = int(r, -9, 9), op = pick(r, ['≤', '≥', '≠', '<', '>']); const truth = op === '≤' ? a <= b : op === '≥' ? a >= b : op === '≠' ? a !== b : op === '<' ? a < b : a > b; return [`${num(a)} ${op} ${num(b)}`, truth, a, b, op]; };
      const want = mk(); if (!want[1]) continue;
      const wrong = []; let g = 0; while (wrong.length < 3 && g++ < 100) { const w = mk(); if (!w[1] && !wrong.some(x => x[0] === w[0]) && w[0] !== want[0]) wrong.push(w); }
      if (wrong.length < 3) continue;
      if (!['≤', '≥', '≠'].includes(want[4]) && !wrong.some(w => ['≤', '≥', '≠'].includes(w[4]))) continue;
      const read = { '≤': 'is less than or equal to', '≥': 'is greater than or equal to', '≠': 'is not equal to', '<': 'is less than', '>': 'is greater than' };
      const c = choice(r, want[0], wrong.map(w => w[0]), o => { const w = wrong.find(x => x[0] === o); return `${num(w[2])} ${read[w[4]]} ${num(w[3])} is false.`; });
      return make(this.id, level, seed, { prompt: 'Which statement is true?', ...c, steps: [`${want[0]} means ${num(want[2])} ${read[want[4]]} ${num(want[3])}: true.`, '≤ and ≥ include equality; ≠ means "not equal to".'] });
    }
    throw new Error('symbols: no item');
  },
};

export const numberSkills3 = [listingCount, listingSystematic, unitsConvert, timeSkill, speed, densityPressure, piSkill, surdSimplify, surdRationalise, ratioFractions, reciprocals, symbols];
