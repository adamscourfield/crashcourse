// Edexcel GCSE (9–1) Mathematics 1MA1 — Probability (P1–P9).
//   P1 recording and analysing frequencies · P2 randomness, fairness, expected outcomes · P3 relative
//   and theoretical probability, the 0–1 scale · P4 exhaustive and mutually exclusive outcomes sum to 1 ·
//   P5 larger samples tend to the theoretical probability · P6 enumerating with tables, grids, Venn and
//   tree diagrams · P7 sample spaces for combined experiments · P8 independent and dependent combined
//   events, tree diagrams · P9 (Higher) conditional probability from two-way tables, trees and Venn diagrams.
// All teaching text and questions are original.
import { skillById } from './skills.js?v=20261023-maths-r14';
import { tableFig, vennFig, treeFig } from './skills-probability.js?v=20261023-maths-r14';

const S = id => skillById[id];
const geo = (fig, caption) => ({ kind: 'geo', fig, caption });

export const probabilityTopic = {
  id: 'maths.probability', title: 'Probability', short: 'Probability', number: '05', status: 'partial',
  coverage: 'Four lessons covering P1–P9: the probability scale, single events and outcomes that sum to 1; relative and expected frequency and fairness; sample spaces and Venn diagrams with set notation; independent and dependent events on tree diagrams; two-way tables and frequency trees; and (Higher) conditional probability.',
};

export const probabilityLessons = [
  {
    id: 'maths.probability.basics',
    topicId: 'maths.probability',
    title: 'Probability, relative and expected frequency',
    refs: ['P1', 'P2', 'P3', 'P4', 'P5'],
    minutes: 45,
    model: 'coin-tosser',
    prerequisites: ['maths.number.fractions-add-subtract', 'maths.number.fdp'],
    big: 'Probability measures how likely an event is, from 0 (impossible) to 1 (certain). With equally likely outcomes, P(event) = {number of ways/total number of outcomes}. The probabilities of all the possible outcomes add up to 1, so P(not A) = 1 − P(A). Relative frequency = frequency ÷ number of trials estimates a probability, and gets more reliable as the number of trials grows. Expected frequency = probability × number of trials.',
    learn: [
      { title: 'Equally likely outcomes.', text: 'A bag has 3 red, 5 blue and 2 green counters: 10 in total. P(blue) = {5/10} = {1/2}. P(not blue) = 1 − {1/2} = {1/2}. You do not have to simplify a probability fraction, but you must not write it as a ratio like 5 : 10.',
        example: { prompt: '4 red and 6 blue counters. P(red)?', steps: ['4 red out of 10', '{4/10} = {2/5}'] },
        visual: { kind: 'work', lines: ['impossible   unlikely   evens   likely   certain', '0 ........................ {1/2} ........................ 1'] } },
      { title: 'Probabilities add up to 1.', text: 'A spinner lands on A with probability 0.3, B with 0.25 and C with 0.15. The only other outcome is D, so P(D) = 1 − (0.3 + 0.25 + 0.15) = 0.3. The outcomes are mutually exclusive (only one can happen) and exhaustive (one must happen).',
        example: { prompt: 'P(win) = 0.35. P(not win)?', steps: ['1 − 0.35', '= 0.65'] },
        visual: geo(tableFig(['Outcome', 'A', 'B', 'C', 'D'], [['Probability', '0.3', '0.25', '0.15', '?']], 'Spinner probabilities: A 0.3, B 0.25, C 0.15, D unknown'), 'The four probabilities add up to 1, so D = 0.3') },
      { title: 'Relative and expected frequency.', text: 'A drawing pin lands point-up 36 times in 120 throws: relative frequency {36/120} = 0.3. In 1000 throws you would expect about 0.3 × 1000 = 300. A fair dice rolled 600 times should give about 100 sixes; 180 sixes suggests bias. Small experiments vary a lot, so more trials give a better estimate.',
        example: { prompt: 'P(goal) = 0.2. Expected goals in 45 penalties?', steps: ['0.2 × 45', '= 9'] },
        visual: { kind: 'work', lines: ['relative frequency = {frequency/number of trials}', 'expected frequency = probability × trials'] } },
    ],
    skills: [S('maths.probability.single'), S('maths.probability.frequency')],
    checkPlan: [['maths.probability.single', 1], ['maths.probability.single', 1], ['maths.probability.single', 2], ['maths.probability.single', 3], ['maths.probability.single', 2], ['maths.probability.frequency', 1], ['maths.probability.frequency', 1], ['maths.probability.frequency', 2], ['maths.probability.frequency', 2], ['maths.probability.frequency', 3]],
    limits: 'Probability answers can be typed as any equivalent fraction. Running a physical experiment is simulated in the investigation, not done with real coins or dice.',
  },
  {
    id: 'maths.probability.sample-spaces',
    topicId: 'maths.probability',
    title: 'Sample spaces and Venn diagrams',
    refs: ['P6', 'P7', 'P4'],
    minutes: 45,
    model: 'dice-grid',
    prerequisites: ['maths.probability.basics'],
    big: 'List every outcome systematically. For two stages with m and n choices there are m × n combinations (the product rule). A sample-space grid shows all 36 equally likely outcomes for two dice. A Venn diagram sorts items into sets: A ∩ B is the overlap (A and B), A ∪ B is everything in A or B or both, and A′ is everything not in A. ξ is the universal set.',
    learn: [
      { title: 'The product rule.', text: 'With 3 shirts and 4 pairs of trousers there are 3 × 4 = 12 outfits: each shirt goes with every pair. List them systematically (shirt 1 with each pair, then shirt 2...) to check.',
        example: { prompt: '5 flavours and 3 toppings. Combinations?', steps: ['5 × 3 = 15'] },
        visual: { kind: 'work', lines: ['S1T1  S1T2  S1T3  S1T4', 'S2T1  S2T2  S2T3  S2T4', 'S3T1  S3T2  S3T3  S3T4   → 12'] } },
      { title: 'Sample-space grids.', text: 'For two dice, make a 6 × 6 grid of totals. There are 36 equally likely outcomes. A total of 7 appears 6 times, so P(7) = {6/36} = {1/6}. Count the cells; do not count the different totals.',
        example: { prompt: 'Two dice. P(total of 10)?', steps: ['(4, 6), (5, 5), (6, 4)', '{3/36} = {1/12}'] },
        visual: geo(tableFig(['+', 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6].map(x => [x, ...[1, 2, 3, 4, 5, 6].map(y => x + y)]), 'Sample space of the totals of two dice'), '36 equally likely outcomes') },
      { title: 'Venn diagrams.', text: 'Start with the overlap. If 30 students include 18 who play football, 12 who play tennis and 5 who play both, then football only is 13, tennis only is 7, and neither is 30 − 13 − 5 − 7 = 5. P(F ∩ T) = {5/30}; P(F ∪ T) = {25/30}.',
        example: { prompt: 'Using the diagram, P(neither)?', steps: ['5 outside both circles', '{5/30} = {1/6}'] },
        visual: geo(vennFig(13, 5, 7, 5, ['F', 'T']), 'Fill the overlap first, then each circle, then outside') },
    ],
    skills: [S('maths.probability.sample-space'), S('maths.probability.venn')],
    checkPlan: [['maths.probability.sample-space', 1], ['maths.probability.sample-space', 2], ['maths.probability.sample-space', 2], ['maths.probability.sample-space', 3], ['maths.probability.sample-space', 3], ['maths.probability.venn', 1], ['maths.probability.venn', 1], ['maths.probability.venn', 2], ['maths.probability.venn', 3], ['maths.probability.venn', 3]],
    limits: 'Drawing your own Venn diagram or grid is modelled, not marked; questions use the completed diagram or the numbers to build one.',
  },
  {
    id: 'maths.probability.tree-diagrams',
    topicId: 'maths.probability',
    title: 'Combined events and tree diagrams',
    refs: ['P8', 'P6', 'P4'],
    minutes: 50,
    model: 'tree-builder',
    prerequisites: ['maths.probability.sample-spaces', 'maths.number.fractions-multiply-divide'],
    big: 'For independent events, P(A and B) = P(A) × P(B). For mutually exclusive events, P(A or B) = P(A) + P(B). On a tree diagram, multiply along the branches and add the paths you need; each set of branches adds up to 1. Without replacement the second-stage probabilities change, because there is one item fewer. "At least one" is quickest as 1 − P(none).',
    learn: [
      { title: 'AND and OR.', text: 'P(heads) = {1/2} and P(six) = {1/6} are independent: P(heads and six) = {1/2} × {1/6} = {1/12}. A spinner lands on red ({1/4}) or blue ({1/3}), never both: P(red or blue) = {1/4} + {1/3} = {7/12}.',
        example: { prompt: 'P(A) = 0.3, P(B) = 0.5, independent. P(A and B)?', steps: ['0.3 × 0.5 = 0.15'] },
        visual: { kind: 'work', lines: ['AND (independent): multiply', 'OR (mutually exclusive): add'] } },
      { title: 'With replacement.', text: 'A bag has 3 red and 2 blue counters. Take one, put it back, take another. Each draw has P(red) = {3/5}. P(both red) = {3/5} × {3/5} = {9/25}. P(one of each) = {3/5} × {2/5} + {2/5} × {3/5} = {12/25}.',
        example: { prompt: 'P(both blue)?', steps: ['{2/5} × {2/5} = {4/25}'] },
        visual: geo(treeFig(['3/5', '2/5'], [['3/5', '2/5'], ['3/5', '2/5']], ['Red', 'Blue'], ['Red', 'Blue'], 'Tree diagram with replacement: 3 red, 2 blue'), 'With replacement the second branches are the same') },
      { title: 'Without replacement.', text: 'Do not replace the first counter. If it was red, 2 red and 2 blue remain, so the second-stage branches are {2/4} and {2/4}. P(both red) = {3/5} × {2/4} = {6/20} = {3/10}. P(at least one red) = 1 − P(both blue) = 1 − {2/5} × {1/4} = {9/10}.',
        example: { prompt: 'P(both blue) without replacement?', steps: ['{2/5} × {1/4} = {2/20} = {1/10}'] },
        visual: geo(treeFig(['3/5', '2/5'], [['2/4', '2/4'], ['3/4', '1/4']], ['Red', 'Blue'], ['Red', 'Blue'], 'Tree diagram without replacement: 3 red, 2 blue'), 'Without replacement the second branches change') },
    ],
    skills: [S('maths.probability.combined'), S('maths.probability.dependent')],
    checkPlan: [['maths.probability.combined', 1], ['maths.probability.combined', 2], ['maths.probability.combined', 2], ['maths.probability.combined', 3], ['maths.probability.combined', 3], ['maths.probability.dependent', 1], ['maths.probability.dependent', 1], ['maths.probability.dependent', 2], ['maths.probability.dependent', 3], ['maths.probability.dependent', 3]],
    limits: 'Trees are given; drawing and labelling your own tree is modelled in the investigation. Three-stage trees appear only through "at least one" questions.',
  },
  {
    id: 'maths.probability.conditional',
    topicId: 'maths.probability',
    title: 'Two-way tables, frequency trees and conditional probability',
    refs: ['P9', 'P6'],
    minutes: 45,
    model: 'conditional-filter',
    prerequisites: ['maths.probability.tree-diagrams'],
    big: 'Conditional probability is the probability of A given that B has happened, written P(A | B). Given B, only the outcomes in B are left, so divide by the number (or probability) of B: P(A | B) = {P(A and B)/P(B)}. In a two-way table, use the row or column of the condition; in a Venn diagram, use the circle of the condition; on a tree diagram, the second-stage branches are already conditional.',
    learn: [
      { title: 'Two-way tables and frequency trees.', text: 'Fill in missing cells from the totals: each row and column adds up. A frequency tree splits a group into branches with counts, not probabilities: 200 students, 120 by bus (30 late), 80 walking (8 late). P(late) = {38/200}.',
        example: { prompt: '40% of 500 are adults; 25% of adults pass. How many adults pass?', steps: ['0.4 × 500 = 200 adults', '0.25 × 200 = 50'] },
        visual: geo(tableFig(['', 'Walk', 'Bus', 'Total'], [['Year 10', 24, 36, 60], ['Year 11', 16, 44, 60], ['Total', 40, 80, 120]], 'Two-way table: walk or bus by year group'), 'Rows and columns add up to the totals') },
      { title: 'Given that…', text: 'From the table: P(Year 11 | bus) = {44/80}, because only the 80 bus students count. Compare P(Year 11 and bus) = {44/120}, which uses everyone. "Given that" always shrinks the group you divide by.',
        example: { prompt: 'P(walk | Year 10)?', steps: ['Only the 60 Year 10 students', '{24/60} = {2/5}'] },
        visual: { kind: 'work', lines: ['P(A | B) = {P(A and B)/P(B)}', 'two-way table: use the row or column of the condition'] } },
      { title: 'Conditional probability on trees and Venn diagrams.', text: 'On a without-replacement tree, P(second red | first red) is simply the branch, {2/4}. Reversing the condition needs the formula: P(first red | second red) = P(both red) ÷ P(second red). In a Venn diagram, P(B | A) = {overlap/number in A}.',
        example: { prompt: 'Venn: A only 7, both 3, B only 5. P(B | A)?', steps: ['A has 7 + 3 = 10', '{3/10}'] },
        visual: geo(vennFig(7, 3, 5, 5), 'Given A, only the 10 in circle A count') },
    ],
    skills: [S('maths.probability.two-way'), S('maths.probability.conditional')],
    checkPlan: [['maths.probability.two-way', 1], ['maths.probability.two-way', 2], ['maths.probability.two-way', 2], ['maths.probability.two-way', 3], ['maths.probability.two-way', 3], ['maths.probability.conditional', 1], ['maths.probability.conditional', 1], ['maths.probability.conditional', 2], ['maths.probability.conditional', 3], ['maths.probability.conditional', 3]],
    limits: 'Both tiers. Conditional probability (P9) is Higher only: Foundation practice and checks use the two-way table and frequency tree skill alone. Building a full table or tree from scratch is modelled, not marked.',
  },
];

export const probabilityOrder = ['maths.probability.basics', 'maths.probability.sample-spaces', 'maths.probability.tree-diagrams', 'maths.probability.conditional'];
export const orderedProbability = probabilityOrder.map(id => probabilityLessons.find(l => l.id === id));
