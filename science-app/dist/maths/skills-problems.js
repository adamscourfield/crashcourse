// Edexcel 1MA1 problem solving (assessment objectives AO2 and AO3): multi-step problems in context
// that join two or more content areas. Every item has one final answer; its traps are the values a
// student reaches by stopping part-way or by taking one wrong step, so feedback names the stage that
// went wrong. Diagrams (item.fig, geomfig.js) are drawn from the same numbers as the question.
import { rng, int, pick, shuffled } from './rng.js?v=20261023-maths-r16';
import { F } from './frac.js?v=20261023-maths-r16';
import { makeA, choiceItem } from './skills-algebra.js?v=20261023-maths-r16';

const fr = v => { const f = typeof v === 'number' ? F(v) : v; return { n: f.n, d: f.d }; };
const intAns = v => ({ kind: 'integer', value: v });
const decA = (f, extra = {}) => ({ kind: 'decimal', value: fr(f), ...extra });
const cents = v => Math.round(v * 100);
/** Money in pounds: whole pounds as an integer, otherwise pounds and pence (37.5 and 37.50 both accepted). */
const money = v => (cents(v) % 100 === 0 ? intAns(cents(v) / 100) : decA(F(cents(v), 100)));
const dp1 = v => decA(F(Math.round(v * 10), 10), { dp: 1, tol: 0.06 });
const tv = (v, why) => ({ v: Number.isInteger(v) ? F(v) : F(Math.round(v * 1000), 1000), why });
const gbp = v => `£${Number.isInteger(v) ? v : v.toFixed(2)}`;
const nt = v => String(+(+v).toFixed(4));
const NOTE = 'Not drawn accurately';
const make = (skill, level, seed, o) => {
  const it = makeA(skill, level, seed, o);
  if (it.traps && o.answer.kind === 'decimal') { const want = o.answer.value.n / o.answer.value.d, tol = (o.answer.tol ?? 0) + 1e-9; it.traps = it.traps.filter(t => Math.abs(t.v.n / t.v.d - want) > tol); }
  return it;
};
const higher = label => ({ label, higher: true });

/* ───────── figures ───────── */
function wallFig(W, H, dw, dh) {
  const s = Math.min(420 / W, 200 / H), x0 = (600 - W * s) / 2, y0 = 40, X = x => x0 + x * s, Y = y => y0 + (H - y) * s;
  const dx = W * 0.62;
  return { h: H * s + 90, polys: [{ pts: [[X(0), Y(0)], [X(W), Y(0)], [X(W), Y(H)], [X(0), Y(H)]], fill: '#a8d5b522' }, { pts: [[X(dx), Y(0)], [X(dx + dw), Y(0)], [X(dx + dw), Y(dh)], [X(dx), Y(dh)]], fill: '#12233366' }], dims: [{ a: [X(0), Y(0)], b: [X(W), Y(0)], t: `${nt(W)} m`, off: -22 }, { a: [X(0), Y(0)], b: [X(0), Y(H)], t: `${nt(H)} m`, off: 28 }, { a: [X(dx + dw), Y(0)], b: [X(dx + dw), Y(dh)], t: `${nt(dh)} m`, off: -26 }], labels: [{ at: [X(dx + dw / 2), Y(dh / 2) + 5], t: 'door' }, { at: [X(dx + dw / 2), Y(dh) + 20], t: `${nt(dw)} m`, size: 13 }], note: NOTE, alt: `Wall ${nt(W)} m by ${nt(H)} m with a door ${nt(dw)} m by ${nt(dh)} m` };
}
function lFig(A, B, a, b) {
  // L-shape: A by B overall with an a by b rectangle removed from the top-right corner.
  const s = Math.min(380 / A, 230 / B), x0 = (600 - A * s) / 2, y0 = 30, X = x => x0 + x * s, Y = y => y0 + (B - y) * s;
  return { h: B * s + 80, polys: [{ pts: [[X(0), Y(0)], [X(A), Y(0)], [X(A), Y(B - b)], [X(A - a), Y(B - b)], [X(A - a), Y(B)], [X(0), Y(B)]], fill: '#a8d5b522' }], dims: [{ a: [X(0), Y(0)], b: [X(A), Y(0)], t: `${A} m`, off: -22 }, { a: [X(0), Y(0)], b: [X(0), Y(B)], t: `${B} m`, off: 28 }, { a: [X(0), Y(B)], b: [X(A - a), Y(B)], t: `${A - a} m`, off: 18 }, { a: [X(A), Y(0)], b: [X(A), Y(B - b)], t: `${B - b} m`, off: -28 }], note: NOTE, alt: `L-shaped floor: ${A} m by ${B} m with a ${a} m by ${b} m corner cut out` };
}
function pondFig(rr, w) {
  const R = 150, c = [300, 175], k = R / (rr + w);
  return { h: 350, circles: [{ c, r: R }, { c, r: rr * k }], sectors: [], segs: [{ a: c, b: [c[0] + rr * k, c[1]] }, { a: [c[0] - rr * k, c[1]], b: [c[0] - R, c[1]], dash: true }], labels: [{ at: [c[0] + (rr * k) / 2, c[1] - 8], t: `${rr} m` }, { at: [c[0] - rr * k - (w * k) / 2, c[1] - 8], t: `${w} m` }, { at: [c[0], c[1] + rr * k + (w * k) / 2 + 5], t: 'path' }, { at: [c[0], c[1] + 40], t: 'pond' }], note: NOTE, alt: `Circular pond of radius ${rr} m with a path ${w} m wide around it` };
}
function tankFig(l, w, h, unit = 'cm') {
  const s = Math.min(260 / l, 160 / h, 200 / w), L = l * s, H = h * s, D = w * s * 0.5, x0 = 150, y0 = 260;
  const A = [x0, y0], B = [x0 + L, y0], C = [x0 + L, y0 - H], Dd = [x0, y0 - H], mv = p => [p[0] + D, p[1] - D];
  return { h: 300, polys: [{ pts: [A, B, C, Dd] }, { pts: [Dd, C, mv(C), mv(Dd)], fill: '#a8d5b511' }, { pts: [B, mv(B), mv(C), C], fill: '#a8d5b511' }], dims: [{ a: A, b: B, t: `${l} ${unit}`, off: -22 }, { a: B, b: mv(B), t: `${w} ${unit}`, off: -24 }, { a: A, b: Dd, t: `${h} ${unit}`, off: 26 }], note: NOTE, alt: `Cuboid tank ${l} ${unit} by ${w} ${unit} by ${h} ${unit}` };
}
function triAlgFig(labels, alt) {
  const A = [110, 280], B = [490, 280], C = [300, 70];
  return { h: 320, polys: [{ pts: [A, B, C] }], angles: [{ v: A, p: B, q: C, label: labels[0], r: 40 }, { v: B, p: C, q: A, label: labels[1], r: 40 }, { v: C, p: A, q: B, label: labels[2], r: 34 }], note: NOTE, alt };
}
function rectAlgFig(lt, wt, alt) {
  return { h: 260, polys: [{ pts: [[140, 40], [460, 40], [460, 200], [140, 200]], fill: '#a8d5b522' }], dims: [{ a: [140, 200], b: [460, 200], t: lt, off: -22 }], labels: [{ at: [472, 125], t: wt, anchor: 'start' }], note: NOTE, alt };
}

/* ═════════ P1 area, perimeter and cost ═════════ */
const areaCost = {
  id: 'maths.problems.area-cost',
  name: 'Area problems with cost',
  levels: [{ label: 'Paint a wall' }, { label: 'Tile an L-shaped floor' }, { label: 'Gravel a path round a pond' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const W = int(r, 4, 9), H = pick(r, [2.4, 2.5, 3]), dw = pick(r, [0.8, 0.9, 1]), dh = 2, cover = pick(r, [5, 6, 8, 10]), price = pick(r, [12, 14.5, 18, 22.99, 9.5]);
      const area = W * H - dw * dh, tins = Math.ceil(area / cover - 1e-9), cost = tins * price;
      if (Math.abs(area / cover - Math.round(area / cover)) < 0.05) return this.gen(level, seed + 'a');
      return make(this.id, level, seed, { prompt: `Sam paints one wall (not the door). A tin of paint covers ${cover} m² and costs ${gbp(price)}. Sam can only buy whole tins. Work out the cost of the paint Sam needs.`, fig: wallFig(W, H, dw, dh), calculator: true, answer: money(cost), steps: [`Wall: ${W} × ${H} = ${nt(W * H)} m²; door: ${dw} × ${dh} = ${nt(dw * dh)} m²`, `Area to paint: ${nt(W * H)} − ${nt(dw * dh)} = ${nt(area)} m²`, `Tins: ${nt(area)} ÷ ${cover} = ${nt(area / cover)}…, so ${tins} tins`, `Cost: ${tins} × ${gbp(price)} = ${gbp(cost)}`],
        traps: [tv(area, 'That is the area to paint. Next: how many tins, then the cost.'), tv(cents((area / cover) * price) / 100, `Only whole tins can be bought: round ${nt(area / cover)}… up to ${tins}.`), tv(Math.ceil((W * H) / cover - 1e-9) * price, 'The door is not painted: subtract its area first.'), tv(tins, `That is the number of tins. Multiply by ${gbp(price)}.`), tv(Math.floor(area / cover) * price, `Rounding down leaves part of the wall unpainted: ${nt(area / cover)}… tins means ${tins}.`)] });
    }
    if (level === 2) {
      const A = int(r, 5, 9), B = int(r, 4, 7), a = int(r, 2, A - 2), b = int(r, 1, B - 2), tile = pick(r, [50, 25]), per = (100 / tile) ** 2, box = pick(r, [8, 10, 12, 20]), price = pick(r, [15, 18.5, 24, 30]);
      const area = A * B - a * b, tiles = area * per, boxes = Math.ceil(tiles / box - 1e-9), cost = boxes * price;
      if (tiles % box === 0) return this.gen(level, seed + 't');
      return make(this.id, level, seed, { prompt: `The floor is to be covered with square tiles ${tile} cm by ${tile} cm. Tiles come in boxes of ${box}; a box costs ${gbp(price)}. Only whole boxes can be bought. Work out the cost of the tiles.`, fig: lFig(A, B, a, b), calculator: true, answer: money(cost), steps: [`Area: ${A} × ${B} − ${a} × ${b} = ${area} m²`, `${tile} cm = ${tile / 100} m, so ${per} tiles cover 1 m²`, `Tiles: ${area} × ${per} = ${tiles}`, `Boxes: ${tiles} ÷ ${box} = ${nt(tiles / box)}…, so ${boxes} boxes`, `Cost: ${boxes} × ${gbp(price)} = ${gbp(cost)}`],
        traps: [tv(area, 'That is the floor area in m². Next: how many tiles, boxes, then the cost.'), tv(Math.ceil(area / box - 1e-9) * price, `A tile is ${tile} cm by ${tile} cm, so ${per} tiles cover 1 m², not 1.`), tv(cents((tiles / box) * price) / 100, `Only whole boxes can be bought: round ${nt(tiles / box)}… up.`), tv(Math.ceil((A * B * per) / box - 1e-9) * price, 'The corner is cut out: subtract its area.'), tv(boxes, `That is the number of boxes. Multiply by ${gbp(price)}.`)] });
    }
    const rr = int(r, 2, 6), w = pick(r, [1, 1.5, 2]), bag = pick(r, [2, 3, 4, 5]), price = pick(r, [4.5, 6, 7.25, 8]);
    const area = Math.PI * ((rr + w) ** 2 - rr ** 2), bags = Math.ceil(area / bag - 1e-9), cost = bags * price;
    if (Math.abs(area / bag - Math.round(area / bag)) < 0.05) return this.gen(level, seed + 'p');
    return make(this.id, level, seed, { prompt: `A path goes round a circular pond. One bag of gravel covers ${bag} m² of path and costs ${gbp(price)}. Only whole bags can be bought. Work out the cost of gravel for the path.`, fig: pondFig(rr, w), calculator: true, answer: money(cost), steps: [`Outer circle radius: ${rr} + ${w} = ${rr + w} m`, `Path area: π × ${rr + w}² − π × ${rr}² = ${area.toFixed(3)}… m²`, `Bags: ${area.toFixed(3)}… ÷ ${bag} = ${(area / bag).toFixed(3)}…, so ${bags} bags`, `Cost: ${bags} × ${gbp(price)} = ${gbp(cost)}`],
      traps: [tv(Math.ceil((Math.PI * (rr + w) ** 2) / bag - 1e-9) * price, 'That covers the pond too. Subtract the pond: the path is the ring between the circles.'), tv(Math.ceil((Math.PI * w * w) / bag - 1e-9) * price, `The path is not a circle of radius ${w}: it is the outer circle minus the pond.`), tv(bags, `That is the number of bags. Multiply by ${gbp(price)}.`), tv(cents((area / bag) * price) / 100, 'Only whole bags can be bought: round up.')] });
  },
};

/* ═════════ P1 volume, capacity and time ═════════ */
const SIM = [[2, 40], [3, 25], [2, 150], [4, 10], [3, 60], [5, 8]]; // length scale factor, small capacity (ml)
const volumeTime = {
  id: 'maths.problems.volume-time',
  name: 'Volume problems with rates',
  levels: [{ label: 'Fill a tank at a rate' }, { label: 'How many containers?' }, higher('Similar containers')],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const l = pick(r, [50, 60, 80, 100, 120]), w = pick(r, [30, 40, 50]), h = pick(r, [30, 40, 50, 60]), rate = pick(r, [4, 5, 6, 8, 10, 12]);
      const L = (l * w * h) / 1000, t = L / rate;
      if (!Number.isInteger(t * 2)) return this.gen(level, seed + 'r');
      return make(this.id, level, seed, { prompt: `Water flows into the empty tank at ${rate} litres per minute. How many minutes does it take to fill the tank? (1 litre = 1000 cm³)`, fig: tankFig(l, w, h), answer: Number.isInteger(t) ? intAns(t) : decA(F(t * 2, 2)), steps: [`Volume: ${l} × ${w} × ${h} = ${l * w * h} cm³`, `= ${nt(L)} litres`, `Time: ${nt(L)} ÷ ${rate} = ${nt(t)} minutes`], traps: [tv(L, `That is the volume in litres. Divide by ${rate} litres per minute.`), tv((l * w * h) / rate, 'Change cm³ to litres first: divide by 1000.'), tv(L * rate, 'Divide the volume by the rate, do not multiply.')] });
    }
    if (level === 2) {
      const rr = pick(r, [10, 12, 15, 20]), h = pick(r, [20, 25, 30, 40]), glass = pick(r, [200, 250, 300, 330]);
      const V = Math.PI * rr * rr * h, n = Math.floor(V / glass);
      if (V / glass - n < 0.05 || V / glass - n > 0.95) return this.gen(level, seed + 'g');
      return make(this.id, level, seed, { prompt: `A cylindrical jug has radius ${rr} cm and height ${h} cm and is full of juice. How many glasses of ${glass} ml can be completely filled from it? (1 ml = 1 cm³)`, calculator: true, answer: intAns(n), steps: [`Volume: π × ${rr}² × ${h} = ${V.toFixed(2)} cm³ = ${V.toFixed(2)} ml`, `${V.toFixed(2)} ÷ ${glass} = ${(V / glass).toFixed(3)}…`, `Only ${n} glasses can be filled completely (round down)`], traps: [tv(n + 1, 'The last glass would not be full: round down here.'), tv(Math.floor((2 * Math.PI * rr * h) / glass), 'That uses 2πrh, the curved surface. Volume is πr²h.'), tv(Math.floor((Math.PI * 4 * rr * rr * h) / glass), 'Use the radius, not the diameter.'), tv(Math.round(V), `That is the volume in ml. Divide by ${glass}.`)] });
    }
    const [k, small] = pick(r, SIM), s1 = pick(r, [4, 5, 6, 8]), big = small * k ** 3;
    return make(this.id, level, seed, { prompt: `Two bottles are mathematically similar. The small bottle is ${s1} cm tall and holds ${small} ml. The large bottle is ${s1 * k} cm tall. How much does the large bottle hold?`, answer: intAns(big), steps: [`Length scale factor: ${s1 * k} ÷ ${s1} = ${k}`, `Volume scale factor: ${k}³ = ${k ** 3}`, `${small} × ${k ** 3} = ${big} ml`], traps: [tv(small * k, `Capacity is a volume: multiply by the length scale factor cubed (${k}³), not ${k}.`), tv(small * k * k, `${k}² is the area scale factor. Volumes use ${k}³.`), tv(small + (s1 * k - s1), 'Similar shapes scale by multiplying, not by adding the difference.')] });
  },
};

/* ═════════ P2 money with ratio and percentages ═════════ */
const NAMES = [['Ali', 'Bea'], ['Cal', 'Dee'], ['Eve', 'Finn'], ['Gus', 'Hana'], ['Ivy', 'Jon']];
const moneyRatio = {
  id: 'maths.problems.money-ratio',
  name: 'Money problems with ratio and percentages',
  levels: [{ label: 'Share, then spend a percentage' }, { label: 'Best buy with offers' }, { label: 'Price before VAT' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const [A, B] = pick(r, NAMES), a = int(r, 1, 5), b = int(r, 1, 5), unit = pick(r, [10, 12, 15, 20, 25, 30]), tot = (a + b) * unit, p = pick(r, [10, 20, 25, 40, 50]);
      if (a === b) return this.gen(level, seed + 'q');
      const share = b * unit, left = share * (1 - p / 100);
      return make(this.id, level, seed, { prompt: `${A} and ${B} share ${gbp(tot)} in the ratio ${a} : ${b}. ${B} spends ${p}% of their share. How much does ${B} have left?`, answer: money(left), steps: [`${a} + ${b} = ${a + b} parts; one part = ${gbp(tot)} ÷ ${a + b} = ${gbp(unit)}`, `${B}'s share: ${b} × ${gbp(unit)} = ${gbp(share)}`, `Spent: ${p}% of ${gbp(share)} = ${gbp((share * p) / 100)}`, `Left: ${gbp(share)} − ${gbp((share * p) / 100)} = ${gbp(left)}`], traps: [tv(share, `That is ${B}'s share. ${B} then spends ${p}% of it.`), tv((share * p) / 100, 'That is the amount spent. Subtract it from the share.'), tv(a * unit * (1 - p / 100), `${B} gets ${b} parts, not ${a}: the ratio is ${A} : ${B}.`), tv(share - (tot * p) / 100, `${B} spends ${p}% of their own share, not of the total.`), tv((tot / b) * (1 - p / 100), `Divide by the total number of parts (${a + b}), then multiply by ${b}.`)] });
    }
    if (level === 2) {
      const item = pick(r, ['notebook', 'pen', 'mug', 'candle']), n = pick(r, [6, 9, 12]), pA = pick(r, [2.5, 3, 4, 5]), off = pick(r, [20, 25, 30]), pB = pick(r, [2.4, 3.2, 4.2, 4.8, 3.6]);
      const costA = n * pA * (1 - off / 100), costB = (n / 3) * 2 * pB, diff = Math.abs(costA - costB);
      if (cents(diff) === 0) return this.gen(level, seed + 'd');
      const cheaper = costA < costB ? 'Shop A' : 'Shop B';
      return make(this.id, level, seed, { prompt: `Kai needs ${n} ${item}s. Shop A sells them at ${gbp(pA)} each with ${off}% off. Shop B sells them at ${gbp(pB)} each on a "buy 3, pay for 2" offer. How much cheaper is the cheaper shop?`, answer: money(diff), steps: [`Shop A: ${n} × ${gbp(pA)} = ${gbp(n * pA)}; ${off}% off: × ${nt(1 - off / 100)} = ${gbp(costA)}`, `Shop B: pay for ${(n / 3) * 2} of ${n}: ${(n / 3) * 2} × ${gbp(pB)} = ${gbp(costB)}`, `${cheaper} is cheaper by ${gbp(diff)}`], traps: [tv(Math.min(costA, costB), 'That is the cheaper total. The question asks how much cheaper: find the difference.'), tv(Math.abs(n * pA * (off / 100) - costB), `${off}% off means paying ${100 - off}%, not ${off}%.`), tv(Math.abs(costA - n * pB), 'With "buy 3, pay for 2", every third item is free.'), tv(Math.abs(costA - (n / 2) * pB), `Pay for 2 in every 3: that is ${(n / 3) * 2} items, not ${n / 2}.`)] });
    }
    const pre = pick(r, [15, 24, 35, 48, 60, 72, 85, 120, 250]), vat = 20, inc = pre * 1.2;
    const thing = pick(r, ['bike helmet', 'lamp', 'printer', 'coat', 'chair']);
    return make(this.id, level, seed, { prompt: `The price of a ${thing} is ${gbp(inc)}, including VAT at ${vat}%. Work out the price before VAT was added.`, answer: money(pre), steps: [`The price including VAT is 120% of the original`, `1% = ${gbp(inc)} ÷ 120; 100% = ${gbp(inc)} ÷ 1.2`, `= ${gbp(pre)}`], traps: [tv(inc * 0.8, 'Taking 20% off the new price does not undo adding 20%: the 20% was of the smaller, original price. Divide by 1.2.'), tv(inc - 20, 'VAT is a percentage, not £20.'), tv(inc * 0.2, 'That is 20% of the price including VAT. Divide by 1.2 to find the original.')] });
  },
};

/* ═════════ P2 pay, interest and depreciation ═════════ */
const moneyPercent = {
  id: 'maths.problems.money-percent',
  name: 'Pay, interest and value problems',
  levels: [{ label: 'Pay with overtime' }, { label: 'Simple or compound interest?' }, higher('How many years until…?')],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const rate = pick(r, [9.5, 10, 11.4, 12, 12.6, 14]), basic = pick(r, [35, 37.5, 38, 40]), extra = pick(r, [3, 4, 5, 6, 8]), mult = pick(r, [1.5, 2]);
      const pay = rate * basic + rate * mult * extra, word = mult === 1.5 ? 'time and a half' : 'double time';
      return make(this.id, level, seed, { prompt: `Mo is paid ${gbp(rate)} an hour for the first ${basic} hours each week and ${word} for any extra hours. One week Mo works ${nt(basic + extra)} hours. Work out Mo's pay for that week.`, calculator: true, answer: money(pay), steps: [`Basic: ${basic} × ${gbp(rate)} = ${gbp(rate * basic)}`, `Overtime rate: ${gbp(rate)} × ${mult} = ${gbp(rate * mult)}`, `Overtime: ${extra} × ${gbp(rate * mult)} = ${gbp(rate * mult * extra)}`, `Total: ${gbp(pay)}`], traps: [tv(rate * (basic + extra), `The extra ${extra} hours are paid at ${word}, not the normal rate.`), tv(rate * mult * (basic + extra), `Only the hours after ${basic} are paid at ${word}.`), tv(rate * basic + rate * mult, `Multiply the overtime rate by the ${extra} extra hours.`), tv(rate * basic, 'Add the overtime pay to the basic pay.')] });
    }
    if (level === 2) {
      const P = pick(r, [2000, 2500, 4000, 5000, 8000]), sr = pick(r, [3, 3.5, 4]), cr = pick(r, [2.5, 3, 3.2, 3.5]), n = pick(r, [3, 4, 5]);
      const S = P * (1 + (sr * n) / 100), C = P * (1 + cr / 100) ** n, diff = Math.abs(S - C);
      if (diff < 1) return this.gen(level, seed + 'i');
      return make(this.id, level, seed, { prompt: `Lena invests ${gbp(P)} for ${n} years. Account A pays ${sr}% simple interest per year. Account B pays ${cr}% compound interest per year. How much more is the better account worth after ${n} years? Give your answer to the nearest penny.`, calculator: true, answer: decA(F(cents(diff), 100), { dp: 2, tol: 0.006 }), steps: [`A: ${gbp(P)} + ${n} × ${sr}% of ${gbp(P)} = ${gbp(S)}`, `B: ${gbp(P)} × ${nt(1 + cr / 100)}^${n} = ${gbp(C)}`, `Difference: ${gbp(diff)}`], traps: [tv(Math.max(S, C), 'That is the value of the better account. Find the difference between the two.'), tv(Math.abs(S - P * (1 + (cr * n) / 100)), 'Account B is compound: multiply by the multiplier each year, (1 + r/100)ⁿ.'), tv(Math.abs(P * (1 + sr / 100) ** n - C), 'Account A is simple interest: the same amount is added each year.')] });
    }
    const P = pick(r, [12000, 15000, 18000, 20000, 24000]), dep = pick(r, [12, 15, 18, 20, 25]), target = pick(r, [0.5, 0.4, 0.3]) * P;
    let v = P, y = 0; while (v >= target) { v *= 1 - dep / 100; y++; }
    const what = pick(r, ['car', 'van', 'boat']);
    return make(this.id, level, seed, { prompt: `A ${what} costs ${gbp(P)}. Its value falls by ${dep}% each year. After how many whole years is it first worth less than ${gbp(target)}?`, calculator: true, answer: intAns(y), steps: [`Multiplier: 1 − ${dep}/100 = ${nt(1 - dep / 100)}`, ...Array.from({ length: y }, (_, k) => `After ${k + 1} year${k ? 's' : ''}: ${gbp(P * (1 - dep / 100) ** (k + 1))}`), `First below ${gbp(target)} after ${y} years`], traps: [tv(Math.ceil((P - target) / ((P * dep) / 100)), `The value falls by ${dep}% of the current value each year, not of the original price: multiply by ${nt(1 - dep / 100)} each year.`), tv(y - 1, `After ${y - 1} years it is still ${gbp(P * (1 - dep / 100) ** (y - 1))}, not below ${gbp(target)}.`)] });
  },
};

/* ═════════ P3 angles and shapes with algebra ═════════ */
const formSolve = {
  id: 'maths.problems.form-solve',
  name: 'Form and solve equations from shapes',
  levels: [{ label: 'Angles in a triangle' }, { label: 'Perimeter to area' }, { label: 'Angles in a quadrilateral' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      for (;;) {
        const a = int(r, 1, 3), b = int(r, 2, 4), x = int(r, 10, 40), c = 180 - (a + b + 1) * x;
        if (a === b || c === 0 || c < -30 || c > 60) continue;
        const A = [a * x, b * x, x + c]; if (A.some(v => v <= 5)) continue;
        const big = Math.max(...A); if (A.filter(v => v === big).length > 1) continue;
        const lab = [`${a === 1 ? '' : a}x`, `${b}x`, `x ${c > 0 ? '+' : '−'} ${Math.abs(c)}`];
        return make(this.id, level, seed, { prompt: 'The angles of the triangle are shown in degrees. Work out the size of the largest angle.', fig: triAlgFig(lab.map(t => t + '°'), `Triangle with angles ${lab.join(', ')} degrees`), answer: intAns(big), steps: [`${lab.join(' + ')} = 180`, `${a + b + 1}x ${c > 0 ? '+' : '−'} ${Math.abs(c)} = 180, so ${a + b + 1}x = ${180 - c}`, `x = ${x}`, `Angles: ${A.join('°, ')}°; the largest is ${big}°`], traps: [tv(x, 'That is x. Substitute it to find each angle, then pick the largest.'), ...A.filter(v => v !== big).map(v => tv(v, 'That is one of the smaller angles. Which is the largest?'))] });
      }
    }
    if (level === 2) {
      const a = int(r, 2, 4), b = int(r, 1, 9), c = int(r, 1, 3), d = int(r, 1, 6), x = int(r, 2, 9);
      const L = a * x + b, W = c * x - d; if (W <= 1 || L === W) return this.gen(level, seed + 'w');
      const P = 2 * (L + W), area = L * W, sgn = '−';
      return make(this.id, level, seed, { prompt: `The rectangle has perimeter ${P} cm. Work out its area.`, fig: rectAlgFig(`(${a}x + ${b}) cm`, `(${c === 1 ? '' : c}x ${sgn} ${d}) cm`, `Rectangle with length ${a}x + ${b} cm and width ${c}x − ${d} cm`), answer: intAns(area), steps: [`2(${a}x + ${b}) + 2(${c === 1 ? '' : c}x − ${d}) = ${P}`, `${2 * (a + c)}x ${b - d >= 0 ? '+' : '−'} ${Math.abs(2 * (b - d))} = ${P}`, `x = ${x}`, `Length ${L} cm, width ${W} cm; area ${L} × ${W} = ${area} cm²`], traps: [tv(x, 'That is x. Use it to find the length and the width, then the area.'), tv(L + W, 'That is half the perimeter. Multiply length by width for the area.'), tv((a * x + b) * (c * x + d), `The width is ${c === 1 ? '' : c}x − ${d}, not + ${d}.`)] });
    }
    for (;;) {
      const x = int(r, 15, 40), co = [int(r, 1, 3), int(r, 1, 3), int(r, 2, 4)], k = 360 - x * (co[0] + co[1] + co[2] + 1);
      if (k < -40 || k > 80 || k === 0) continue;
      const A = [co[0] * x, co[1] * x, co[2] * x, x + k]; if (A.some(v => v <= 10 || v >= 180)) continue;
      const lab = [...co.map(c => `${c === 1 ? '' : c}x`), `x ${k > 0 ? '+' : '−'} ${Math.abs(k)}`], small = Math.min(...A);
      return make(this.id, level, seed, { prompt: `The angles of a quadrilateral are ${lab.map(t => t + '°').join(', ')}. Work out the size of the smallest angle.`, answer: intAns(small), steps: [`Angles in a quadrilateral add up to 360°`, `${co[0] + co[1] + co[2] + 1}x ${k > 0 ? '+' : '−'} ${Math.abs(k)} = 360`, `x = ${x}`, `Angles: ${A.join('°, ')}°; smallest ${small}°`], traps: [tv(x, 'That is x. Substitute to find each angle.'), tv((180 - k) / (co[0] + co[1] + co[2] + 1), 'The angles of a quadrilateral add up to 360°, not 180°.')].filter(t => t.v.n / t.v.d !== small) });
    }
  },
};

/* ═════════ P3 word problems with equations ═════════ */
const wordEquations = {
  id: 'maths.problems.word-equations',
  name: 'Word problems with equations',
  levels: [{ label: 'Ages and amounts' }, { label: 'Two unknowns: simultaneous equations' }, higher('Area gives a quadratic')],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const [A, B] = pick(r, NAMES), C = pick(r, ['Kim', 'Lou', 'Max']), b = int(r, 6, 20), d = int(r, 2, 9), m = pick(r, [2, 3]);
      const ages = [b + d, b, m * b], tot = ages[0] + ages[1] + ages[2];
      return make(this.id, level, seed, { prompt: `${A} is ${d} years older than ${B}. ${C} is ${m === 2 ? 'twice' : 'three times'} as old as ${B}. Their ages add up to ${tot}. How old is ${C}?`, answer: intAns(ages[2]), steps: [`Let ${B} be x: ${A} is x + ${d}, ${C} is ${m}x`, `x + ${d} + x + ${m}x = ${tot}, so ${m + 2}x = ${tot - d}`, `x = ${b}, so ${C} is ${m} × ${b} = ${ages[2]}`], traps: [tv(b, `That is ${B}'s age (x). ${C} is ${m}x.`), tv(b + d, `That is ${A}'s age. The question asks for ${C}.`), tv(m * Math.round(tot / (m + 2)), `Remember ${A}'s extra ${d} years: subtract them before dividing.`)] });
    }
    if (level === 2) {
      const a = pick(r, [6, 7.5, 8, 9, 10, 12]), c = pick(r, [3.5, 4, 4.5, 5, 6]), p = [int(r, 2, 4), int(r, 1, 3)], q = [int(r, 1, 3), int(r, 2, 4)];
      if (p[0] * q[1] === p[1] * q[0] || a === c) return this.gen(level, seed + 's');
      const T1 = p[0] * a + p[1] * c, T2 = q[0] * a + q[1] * c, ask = pick(r, ['family', 'adult', 'child']);
      const fam = 2 * a + 2 * c, want = ask === 'family' ? fam : ask === 'adult' ? a : c;
      const qtext = ask === 'family' ? 'How much do tickets for 2 adults and 2 children cost?' : `How much is one ${ask} ticket?`;
      return make(this.id, level, seed, { prompt: `At a cinema, ${p[0]} adult tickets and ${p[1]} child ticket${p[1] > 1 ? 's' : ''} cost ${gbp(T1)}. ${q[0]} adult ticket${q[0] > 1 ? 's' : ''} and ${q[1]} child tickets cost ${gbp(T2)}. ${qtext}`, calculator: true, answer: money(want), steps: [`${p[0]}a + ${p[1]}c = ${nt(T1)}`, `${q[0]}a + ${q[1]}c = ${nt(T2)}`, `Solve: a = ${gbp(a)}, c = ${gbp(c)}`, ...(ask === 'family' ? [`2 × ${gbp(a)} + 2 × ${gbp(c)} = ${gbp(fam)}`] : [])], traps: [tv(ask === 'child' ? a : c, ask === 'family' ? 'x' : `That is the ${ask === 'child' ? 'adult' : 'child'} ticket.`), tv(ask === 'family' ? a + c : (T1 + T2) / (p[0] + p[1] + q[0] + q[1]), ask === 'family' ? 'That is one adult and one child. The question asks for 2 of each.' : 'Averaging the totals mixes adult and child prices: solve the two equations.')].filter(t => t.why !== 'x') });
    }
    {
      const x = int(r, 3, 12), k = int(r, 2, 7), area = x * (x + k), per = 2 * (2 * x + k);
      return make(this.id, level, seed, { prompt: `A rectangle is ${k} cm longer than it is wide. Its area is ${area} cm². Work out its perimeter.`, answer: intAns(per), steps: [`Width x, length x + ${k}: x(x + ${k}) = ${area}`, `x² + ${k}x − ${area} = 0`, `(x − ${x})(x + ${x + k}) = 0; x = ${x} (a length cannot be −${x + k})`, `Perimeter: 2(${x} + ${x + k}) = ${per} cm`], traps: [tv(x, `That is the width. The perimeter adds all four sides.`), tv(2 * x + k, 'That is half the perimeter: width + length. Double it.'), tv(4 * Math.sqrt(area), 'The rectangle is not a square: form x(x + ' + k + ') = ' + area + ' and solve.')] });
    }
  },
};

/* ═════════ P4 averages problems ═════════ */
const meanProblems = {
  id: 'maths.problems.mean-problems',
  name: 'Problems with the mean',
  levels: [{ label: 'Combine two groups' }, { label: 'Someone joins: find their value' }, { label: 'A missing frequency' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const n1 = int(r, 10, 30), n2 = int(r, 10, 30), m1 = int(r, 40, 80), m2 = int(r, 40, 80); if (n1 === n2 || m1 === m2) return this.gen(level, seed + 'm');
      const tot = n1 * m1 + n2 * m2, mean = tot / (n1 + n2);
      if (!Number.isInteger(mean * 10)) return this.gen(level, seed + 'n');
      return make(this.id, level, seed, { prompt: `Class A has ${n1} students with a mean test score of ${m1}. Class B has ${n2} students with a mean score of ${m2}. Work out the mean score of all ${n1 + n2} students.`, calculator: true, answer: Number.isInteger(mean) ? intAns(mean) : decA(F(mean * 10, 10)), steps: [`Total A: ${n1} × ${m1} = ${n1 * m1}; total B: ${n2} × ${m2} = ${n2 * m2}`, `Total: ${tot}; mean ${tot} ÷ ${n1 + n2} = ${nt(mean)}`], traps: [tv((m1 + m2) / 2, `The classes are different sizes, so the mean of the two means is wrong: use the totals.`), tv(tot, `That is the total score. Divide by ${n1 + n2}.`)] });
    }
    if (level === 2) {
      const n = int(r, 4, 8), m = int(r, 20, 50), d = pick(r, [1, 2, 3, -1, -2]), m2 = m + d, x = (n + 1) * m2 - n * m;
      if (x <= 0) return this.gen(level, seed + 'x');
      const age = r() < 0.5;
      const prompt = age ? `The mean age of ${n} people is ${m} years. Another person joins them and the mean age becomes ${m2} years. How old is the new person?` : `The mean weight of ${n} parcels is ${m} kg. Another parcel is added and the mean weight becomes ${m2} kg. Work out the weight of the new parcel.`;
      return make(this.id, level, seed, { prompt, answer: intAns(x), steps: [`Total before: ${n} × ${m} = ${n * m}`, `Total after: ${n + 1} × ${m2} = ${(n + 1) * m2}`, `New ${age ? 'person' : 'parcel'}: ${(n + 1) * m2} − ${n * m} = ${x}`], traps: [tv(m2, `That is the new mean. Use totals: the new total minus the old total.`), tv(n * m2 - n * m, `There are ${n + 1} values after the new one joins.`), tv((n + 1) * m2, 'That is the new total. Subtract the old total.')].filter(t => t.v.n !== x) });
    }
    for (;;) {
      const xs = [0, 1, 2, 3, 4], fs = xs.map(() => int(r, 1, 9)), k = int(r, 1, 4), mean = sum(xs.map((x, i) => x * fs[i])) / sum(fs);
      if (!Number.isInteger(mean * 10) || mean * 10 % 5 !== 0 || k === mean) continue;
      const shown = fs.map((f, i) => (i === k ? 'x' : f));
      return make(this.id, level, seed, { prompt: `The table shows the number of pets owned by some students. Pets: 0, 1, 2, 3, 4. Frequency: ${shown.join(', ')}. The mean number of pets is ${nt(mean)}. Work out x.`, answer: intAns(fs[k]), steps: [`Σf = ${sum(fs) - fs[k]} + x; Σfx = ${sum(xs.map((x, i) => (i === k ? 0 : x * fs[i])))} + ${k}x`, `${sum(xs.map((x, i) => (i === k ? 0 : x * fs[i])))} + ${k}x = ${nt(mean)}(${sum(fs) - fs[k]} + x)`, `x = ${fs[k]}`], traps: [tv(Math.round(mean), 'x is a frequency, not the mean.'), tv(sum(fs), 'That is the total frequency. Solve for the missing frequency x.')].filter(t => t.v.n !== fs[k]) });
    }
  },
};
const sum = a => a.reduce((s, v) => s + v, 0);

/* ═════════ P4 probability problems ═════════ */
const probProblems = {
  id: 'maths.problems.probability-problems',
  name: 'Probability problems',
  levels: [{ label: 'Is the game worth it?' }, { label: 'Counters from ratios and probabilities' }, { label: 'Two events: expected number' }],
  gen(level, seed) {
    const r = rng(this.id + level + seed);
    if (level === 1) {
      const [num, den] = pick(r, [[1, 5], [1, 4], [1, 10], [3, 20], [1, 8]]), plays = den * pick(r, [20, 30, 40, 50]), cost = pick(r, [0.5, 1, 2]), prize = pick(r, [2, 3, 4, 5, 8]);
      const wins = (plays * num) / den, profit = plays * cost - wins * prize;
      if (profit <= 0) return this.gen(level, seed + 'z');
      return make(this.id, level, seed, { prompt: `At a fair, a game costs ${gbp(cost)} to play. The probability of winning is {${num}/${den}}, and a winner gets ${gbp(prize)}. The game is played ${plays} times. How much profit should the stall expect to make?`, answer: money(Math.abs(profit)), steps: [`Takings: ${plays} × ${gbp(cost)} = ${gbp(plays * cost)}`, `Expected wins: {${num}/${den}} × ${plays} = ${wins}`, `Prizes: ${wins} × ${gbp(prize)} = ${gbp(wins * prize)}`, `Profit: ${gbp(plays * cost)} − ${gbp(wins * prize)} = ${gbp(profit)}`], traps: [tv(wins, `That is the expected number of wins. Find the prize money and compare it with the takings.`), tv(plays * cost, 'That is the money taken. Subtract the prize money.'), tv(wins * prize, 'That is the prize money. Compare it with the takings.')] });
    }
    if (level === 2) {
      const a = int(r, 1, 4), b = int(r, 2, 6), g = pick(r, [[1, 5], [1, 4], [3, 10], [2, 5]]), N = pick(r, [20, 40, 60, 80, 100, 120]);
      const green = (N * g[0]) / g[1], rest = N - green; if (a === b || !Number.isInteger(green) || rest % (a + b)) return this.gen(level, seed + 'c');
      const blue = (rest / (a + b)) * b;
      return make(this.id, level, seed, { prompt: `A bag has ${N} counters: red, blue and green. The probability of taking green is {${g[0]}/${g[1]}}. The ratio of red to blue counters is ${a} : ${b}. How many blue counters are in the bag?`, answer: intAns(blue), steps: [`Green: {${g[0]}/${g[1]}} × ${N} = ${green}`, `Red and blue: ${N} − ${green} = ${rest}`, `${a} + ${b} = ${a + b} parts; one part = ${rest / (a + b)}`, `Blue: ${b} × ${rest / (a + b)} = ${blue}`], traps: [tv((N / (a + b)) * b, 'Take out the green counters first: the ratio is only for red and blue.'), tv(green, 'That is the number of green counters.'), tv((rest / (a + b)) * a, 'That is the number of red counters.')].filter(t => Number.isInteger(t.v.n / t.v.d) && t.v.n !== blue) });
    }
    const p = pick(r, [0.2, 0.3, 0.4, 0.25]), lr = pick(r, [0.5, 0.4, 0.3]), ld = pick(r, [0.1, 0.2, 0.05]), days = pick(r, [20, 40, 60, 100]);
    const pl = p * lr + (1 - p) * ld, late = pl * days;
    if (!Number.isInteger(late * 10)) return this.gen(level, seed + 'l');
    return make(this.id, level, seed, { prompt: `The probability that it rains on a school day is ${p}. If it rains, the probability that Zoe is late is ${lr}. If it does not rain, the probability that she is late is ${ld}. Work out the expected number of days Zoe is late in ${days} school days.`, calculator: true, answer: Number.isInteger(late) ? intAns(late) : decA(F(Math.round(late * 10), 10)), steps: [`P(rain and late) = ${p} × ${lr} = ${nt(p * lr)}`, `P(no rain and late) = ${nt(1 - p)} × ${ld} = ${nt((1 - p) * ld)}`, `P(late) = ${nt(pl)}`, `Expected: ${nt(pl)} × ${days} = ${nt(late)} days`], traps: [tv(pl, `That is the probability of being late. Multiply by ${days} days.`), tv(p * lr * days, 'Zoe can also be late when it does not rain: add both branches.'), tv((lr + ld) * days, 'Multiply along each branch first (rain × late), then add the branches.')] });
  },
};

export { wallFig, lFig, pondFig, tankFig, triAlgFig, rectAlgFig };
export const problemSkills = [areaCost, volumeTime, moneyRatio, moneyPercent, formSolve, wordEquations, meanProblems, probProblems];
