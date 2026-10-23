// Edexcel GCSE (9–1) Mathematics 1MA1 — Problem solving (assessment objectives AO2 reasoning and AO3
// solving problems). Each lesson joins two or more content areas in multi-step problems in context:
// area and volume with cost and rates; money with ratio and percentages; shapes and words with
// equations; averages and probability with totals and money. The statement references are the
// content each problem draws on; the problem-solving demand itself is from the assessment objectives.
// All teaching text and questions are original.
import { skillById } from './skills.js?v=20261023-maths-r15';
import { wallFig, pondFig, tankFig, triAlgFig, rectAlgFig } from './skills-problems.js?v=20261023-maths-r15';

const S = id => skillById[id];
const geo = (fig, caption) => ({ kind: 'geo', fig, caption });
const work = lines => ({ kind: 'work', lines });

export const problemsTopic = {
  id: 'maths.problems', title: 'Problem solving', short: 'Problems', number: '07', status: 'partial',
  coverage: 'Four lessons of exam-style multi-step problems that join content areas: area and volume with cost, rates and similar shapes; money with ratio, percentages, offers, VAT, overtime, interest and depreciation; equations formed from angles, perimeters, ages, prices and areas; averages and probability with totals, games and two events. Every answer is one number or choice; wrong answers are recognised by the stage where they stop or go wrong.',
};

const PLAN = 'Plan first: write down what the question wants, then what you need to find to get it. Work in stages, label each result, and check the final answer against the question.';

export const problemLessons = [
  {
    id: 'maths.problems.area-volume',
    topicId: 'maths.problems',
    title: 'Problems with area, volume and cost',
    refs: ['G16', 'G17', 'N13', 'R11', 'G19'],
    minutes: 50,
    model: 'paint-planner',
    calculator: true,
    prerequisites: ['maths.geometry.area', 'maths.geometry.volume', 'maths.number.compound-measures'],
    big: `${PLAN} In area and volume problems the shape is rarely the final answer: you then turn an area into tins, tiles or bags (rounding up, because you cannot buy part of one), or a volume into a time or a number of glasses (rounding down when only full ones count). Change units before you divide.`,
    learn: [
      { title: 'Area to cost.', text: 'A wall 6 m by 2.5 m with a door 0.8 m by 2 m: area 15 − 1.6 = 13.4 m². A tin covers 5 m²: 13.4 ÷ 5 = 2.68 tins, so buy 3. At £16 a tin, that is £48. Rounding up is part of the answer, not an afterthought.',
        example: { prompt: '9.3 m² to cover; a bag covers 2 m² and costs £5. Cost?', steps: ['9.3 ÷ 2 = 4.65 bags', 'buy 5 bags', '5 × £5 = £25'] },
        visual: geo(wallFig(6, 2.5, 0.8, 2), 'Wall minus door, then tins, then cost') },
      { title: 'Units inside the problem.', text: 'Tiles 50 cm by 50 cm: 0.5 × 0.5 = 0.25 m² each, so 4 tiles cover 1 m², not 1. A tank 80 cm × 50 cm × 40 cm holds 160 000 cm³ = 160 litres; at 8 litres per minute it fills in 20 minutes. Change to matching units before dividing.',
        example: { prompt: 'Floor 12 m²; tiles 25 cm square. How many tiles?', steps: ['25 cm = 0.25 m; 0.25 × 0.25 = 0.0625 m²', '12 ÷ 0.0625 = 192 tiles (16 per m²)'] },
        visual: geo(tankFig(80, 50, 40), '160 000 cm³ = 160 litres') },
      { title: 'Rounding up, rounding down.', text: 'Buying enough (tins, boxes, bags): round up. Counting complete things (full glasses, whole boxes packed): round down. A jug holds 9425 ml; 9425 ÷ 330 = 28.56…, so 28 glasses can be filled completely.',
        example: { prompt: 'A 2 litre bottle fills 300 ml glasses. How many full glasses?', steps: ['2000 ÷ 300 = 6.67', '6 full glasses'] },
        visual: geo(pondFig(3, 1), 'Path = outer circle − pond') },
    ],
    skills: [S('maths.problems.area-cost'), S('maths.problems.volume-time')],
    checkPlan: [['maths.problems.area-cost', 1], ['maths.problems.area-cost', 1], ['maths.problems.area-cost', 2], ['maths.problems.area-cost', 2], ['maths.problems.area-cost', 3], ['maths.problems.volume-time', 1], ['maths.problems.volume-time', 1], ['maths.problems.volume-time', 2], ['maths.problems.volume-time', 2], ['maths.problems.volume-time', 3]],
    limits: 'Only the final answer is marked; each wrong value that matches a stopped or mistaken stage gets feedback naming that stage, but written working and method marks are not assessed. Similar containers are Higher only (Foundation checks use the top Foundation level instead).',
  },
  {
    id: 'maths.problems.money',
    topicId: 'maths.problems',
    title: 'Money problems: ratio, percentages and interest',
    refs: ['R5', 'R9', 'R16', 'N13', 'N12'],
    minutes: 50,
    model: 'share-planner',
    calculator: true,
    prerequisites: ['maths.ratio.sharing', 'maths.ratio.percentages', 'maths.ratio.growth-decay'],
    big: `${PLAN} In money problems, follow the money through each stage and ask "a percentage of what?": of a share, of the original price, of last year's value. Reverse percentages divide by the multiplier. Offers like "buy 3, pay for 2" change how many items you pay for.`,
    learn: [
      { title: 'A percentage of what?', text: 'Share £240 in the ratio 3 : 5: one part is £30, so the shares are £90 and £150. If the second person spends 30% of their share, that is 30% of £150 = £45, leaving £105. 30% of £240 would be the wrong whole.',
        example: { prompt: '£180 in the ratio 1 : 2; the larger share loses 25%. Left?', steps: ['one part £60; larger share £120', '75% of £120 = £90'] },
        visual: work(['one part: £240 ÷ 8 = £30', 'share: 5 × £30 = £150', 'left: 70% of £150 = £105']) },
      { title: 'Comparing offers and reversing VAT.', text: '6 items at £3 with 25% off: £18 × 0.75 = £13.50. 6 items at £2.40, buy 3 pay for 2: pay for 4, £9.60. A price of £144 including 20% VAT is 120% of the original: £144 ÷ 1.2 = £120 (not £144 × 0.8 = £115.20).',
        example: { prompt: '£78 includes 20% VAT. Before VAT?', steps: ['£78 ÷ 1.2', '= £65'] },
        visual: work(['original × 1.2 = £144', 'original = £144 ÷ 1.2 = £120', '£144 × 0.8 = £115.20 ✗']) },
      { title: 'Pay, interest and depreciation.', text: 'Overtime at time and a half: £12 × 1.5 = £18 an hour for the extra hours only. Simple interest adds the same amount each year; compound interest multiplies: £5000 at 3% for 4 years is £5000 × 1.03⁴ = £5627.54. Higher: to find when a value first falls below a target, multiply year by year until it does.',
        example: { prompt: '£10 000 falls 20% a year. First below £5000 after?', steps: ['8000, 6400, 5120, 4096', 'after 4 years'] },
        visual: work(['simple: 5000 + 4 × 150 = £5600', 'compound: 5000 × 1.03⁴ = £5627.54']) },
    ],
    skills: [S('maths.problems.money-ratio'), S('maths.problems.money-percent')],
    checkPlan: [['maths.problems.money-ratio', 1], ['maths.problems.money-ratio', 1], ['maths.problems.money-ratio', 2], ['maths.problems.money-ratio', 2], ['maths.problems.money-ratio', 3], ['maths.problems.money-percent', 1], ['maths.problems.money-percent', 1], ['maths.problems.money-percent', 2], ['maths.problems.money-percent', 2], ['maths.problems.money-percent', 3]],
    limits: 'Only the final answer is marked; method is shown in the worked steps. "How many years until" is Higher only. Answers in pounds accept pounds and pence (37.5 or 37.50) unless the nearest penny is asked for.',
  },
  {
    id: 'maths.problems.equations',
    topicId: 'maths.problems',
    title: 'Problems solved with equations',
    refs: ['A17', 'A21', 'A19', 'A18', 'G3', 'G16'],
    minutes: 50,
    model: 'angle-planner',
    calculator: true,
    prerequisites: ['maths.algebra.linear-equations', 'maths.algebra.simultaneous', 'maths.geometry.angles'],
    big: `${PLAN} When a problem gives facts in words or on a diagram, name the unknown (let x be …), write an equation from a fact you know (angles add to 180°, the perimeter is …, the total cost is …), solve it, and then answer the question that was actually asked, which is rarely x itself.`,
    learn: [
      { title: 'From a diagram.', text: 'A triangle has angles x, 2x and 3x − 30. They add up to 180: 6x − 30 = 180, so x = 35. The angles are 35°, 70° and 75°; if the question asks for the largest, the answer is 75°, not 35.',
        example: { prompt: 'A rectangle (2x + 1) by (x − 2) has perimeter 34. Area?', steps: ['2(3x − 1) = 34, so x = 6', '13 × 4 = 52'] },
        visual: geo(triAlgFig(['x°', '2x°', '3x − 30°'], 'Triangle with angles x, 2x and 3x − 30 degrees'), '6x − 30 = 180') },
      { title: 'From words.', text: 'Ann is 4 years older than Ben; Cal is twice Ben\'s age; together 52. Let Ben be x: x + 4 + x + 2x = 52, so x = 12, and Cal is 24. Two unknowns need two equations: 3 adults and 2 children cost £36, 2 adults and 3 children cost £34. Solve together.',
        example: { prompt: '3a + 2c = 36 and 2a + 3c = 34. Find a + c.', steps: ['add: 5a + 5c = 70', 'a + c = 14'] },
        visual: work(['let Ben = x', 'x + 4 + x + 2x = 52', '4x = 48, x = 12', 'Cal = 2x = 24']) },
      { title: 'Higher: when the equation is quadratic.', text: 'A rectangle is 3 cm longer than it is wide and has area 40 cm²: x(x + 3) = 40, so x² + 3x − 40 = 0, (x + 8)(x − 5) = 0. A width cannot be −8, so x = 5 and the perimeter is 2(5 + 8) = 26 cm. Reject solutions that make no sense in context.',
        example: { prompt: 'x(x + 2) = 48. Width?', steps: ['x² + 2x − 48 = 0', '(x + 8)(x − 6) = 0', 'x = 6'] },
        visual: geo(rectAlgFig('(x + 3) cm', 'x cm', 'Rectangle x by x + 3'), 'x(x + 3) = 40') },
    ],
    skills: [S('maths.problems.form-solve'), S('maths.problems.word-equations')],
    checkPlan: [['maths.problems.form-solve', 1], ['maths.problems.form-solve', 1], ['maths.problems.form-solve', 2], ['maths.problems.form-solve', 2], ['maths.problems.form-solve', 3], ['maths.problems.word-equations', 1], ['maths.problems.word-equations', 1], ['maths.problems.word-equations', 2], ['maths.problems.word-equations', 2], ['maths.problems.word-equations', 3]],
    limits: 'The equation itself is not marked, only the final answer; forming it is modelled in the worked steps. Quadratic problems are Higher only.',
  },
  {
    id: 'maths.problems.data-chance',
    topicId: 'maths.problems',
    title: 'Problems with averages and probability',
    refs: ['S4', 'P3', 'P8', 'P2', 'R5'],
    minutes: 45,
    model: 'game-planner',
    calculator: true,
    prerequisites: ['maths.statistics.averages', 'maths.probability.basics', 'maths.probability.tree-diagrams'],
    big: `${PLAN} With means, work with totals: total = mean × number. Totals can be added and subtracted; means cannot. With probability, expected frequency = probability × number of trials turns chances into counts, and counts into money. With two events, multiply along each branch, then add the branches you need.`,
    learn: [
      { title: 'Means through totals.', text: 'Class A: 20 students, mean 60 (total 1200). Class B: 30 students, mean 70 (total 2100). Together: 3300 ÷ 50 = 66, not (60 + 70) ÷ 2 = 65, because the classes are different sizes.',
        example: { prompt: 'The mean of 4 ages is 30. A fifth person joins; the mean becomes 32. Their age?', steps: ['totals: 4 × 30 = 120; 5 × 32 = 160', '160 − 120 = 40'] },
        visual: work(['total = mean × number', '1200 + 2100 = 3300', '3300 ÷ 50 = 66']) },
      { title: 'Probability, counts and money.', text: 'A game costs £1; P(win) = {1/5}; prize £4; 200 plays. Takings £200; expected winners {1/5} × 200 = 40; prizes 40 × £4 = £160; expected profit £40. A bag of 60 counters with P(green) = {1/4} has 15 green; the other 45 are shared in the given ratio.',
        example: { prompt: '80 counters; P(green) = {1/4}; red : blue = 2 : 3. Blue?', steps: ['green 20; red and blue 60', 'blue = {3/5} × 60 = 36'] },
        visual: work(['takings 200 × £1 = £200', 'winners {1/5} × 200 = 40', 'profit £200 − £160 = £40']) },
      { title: 'Two events.', text: 'P(rain) = 0.3. If it rains, P(late) = 0.4; if not, P(late) = 0.1. P(late) = 0.3 × 0.4 + 0.7 × 0.1 = 0.19. In 100 days, expect 19 late days. Multiply along each branch first, then add the branches that end in "late".',
        example: { prompt: 'P(A) = 0.5; P(B|A) = 0.2; P(B|not A) = 0.4. P(B)?', steps: ['0.5 × 0.2 + 0.5 × 0.4', '= 0.3'] },
        visual: work(['rain and late: 0.3 × 0.4 = 0.12', 'dry and late: 0.7 × 0.1 = 0.07', 'P(late) = 0.19']) },
    ],
    skills: [S('maths.problems.mean-problems'), S('maths.problems.probability-problems')],
    checkPlan: [['maths.problems.mean-problems', 1], ['maths.problems.mean-problems', 1], ['maths.problems.mean-problems', 2], ['maths.problems.mean-problems', 2], ['maths.problems.mean-problems', 3], ['maths.problems.probability-problems', 1], ['maths.problems.probability-problems', 1], ['maths.problems.probability-problems', 2], ['maths.problems.probability-problems', 3], ['maths.problems.probability-problems', 3]],
    limits: 'Only the final answer is marked. Two-event problems are written in words; the tree is modelled in the worked steps.',
  },
];

export const problemsOrder = ['maths.problems.area-volume', 'maths.problems.money', 'maths.problems.equations', 'maths.problems.data-chance'];
export const orderedProblems = problemsOrder.map(id => problemLessons.find(l => l.id === id));
