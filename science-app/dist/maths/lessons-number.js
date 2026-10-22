// Edexcel GCSE (9–1) Mathematics 1MA1 — Number pilot lessons.
// Specification references are 1MA1 content codes (Issue 2, June 2015; checked 22 October 2026):
//   N1 order numbers · N2 four operations incl. negatives, fractions, mixed numbers
//   N3 priority of operations, inverse operations · N4 primes, factors, multiples, HCF/LCM,
//   prime factorisation and the unique factorisation theorem · N8 exact calculation with fractions
//   N12 fractions as operators.
// All teaching text and questions are original.
import { skillById } from './skills-number.js?v=20261022-maths-r1';

const S = id => skillById[id];

export const mathsTopics = [
  { id: 'maths.number', title: 'Number', short: 'Number', number: '01', status: 'partial',
    coverage: 'Five pilot lessons cover ordering and negative numbers (N1, N2), order of operations and inverse operations (N3), fraction arithmetic and fractions as operators (N2, N8, N12) and primes, factors, multiples, HCF and LCM (N4). Remaining Number statements (N5–N16) are planned.' },
];

export const mathsCourseMap = [
  ['Number', 'maths.number'], ['Algebra', null], ['Ratio, proportion and rates of change', null], ['Geometry and measures', null], ['Probability', null], ['Statistics', null],
];

export const mathsSource = 'https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/specification-and-sample-assesment/gcse-maths-2015-specification.pdf';

export const mathsLessons = [
  {
    id: 'maths.number.negatives',
    topicId: 'maths.number',
    title: 'Negative numbers',
    refs: ['N1', 'N2'],
    minutes: 40,
    model: 'negatives',
    big: 'Numbers increase to the right on a number line. Adding and subtracting move you along it; subtracting a negative moves right. When multiplying or dividing, count the negative signs: an even number gives a positive answer, an odd number gives a negative answer.',
    learn: [
      { title: 'Order on a number line.', text: 'Numbers increase from left to right. A negative number further from zero is smaller: −8 is less than −3, even though 8 is more than 3. The same is true for decimals: −2.5 is further left than −2.05, so −2.5 < −2.05.',
        example: { prompt: 'Order these from smallest to largest: 2, −7, 0, −1.5, −4', steps: ['Place each number on the line. Negative numbers sit to the left of 0.', '−7 is furthest left, then −4, then −1.5, then 0, then 2.', 'Smallest to largest: −7, −4, −1.5, 0, 2'] },
        visual: { kind: 'line', min: -8, max: 3, points: [2, -7, 0, -1.5, -4] } },
      { title: 'Add and subtract by moving.', text: 'Start at the first number. Adding a positive number moves right; subtracting a positive number moves left. Crossing zero is just more steps in the same direction.',
        example: { prompt: 'Work out 2 − 9', steps: ['Start at 2.', 'Subtracting 9 moves 9 steps left: 2 steps reach 0, then 7 more.', '2 − 9 = −7'] },
        visual: { kind: 'line', min: -8, max: 4, points: [2], jumps: [[2, -7]] } },
      { title: 'Two signs together.', text: 'Look at the pattern: 5 − 2 = 3, 5 − 1 = 4, 5 − 0 = 5. Each time we subtract one less, the answer goes up by 1, so 5 − (−1) = 6. Subtracting a negative is the same as adding. Adding a negative is the same as subtracting: 5 + (−3) = 5 − 3.',
        example: { prompt: 'Work out −4 − (−6)', steps: ['Subtracting a negative is the same as adding: −4 − (−6) = −4 + 6', 'Start at −4 and move 6 right.', '−4 − (−6) = 2'] },
        visual: { kind: 'line', min: -6, max: 4, points: [-4], jumps: [[-4, 2]] } },
      { title: 'Multiply and divide: count the negatives.', text: 'Continue the pattern 3 × (−2) = −6, 2 × (−2) = −4, 1 × (−2) = −2, 0 × (−2) = 0. The answers go up by 2 each time, so (−1) × (−2) = 2. Work out the size, then count negative signs: even means positive, odd means negative. Division follows the same rule because it undoes multiplication.',
        example: { prompt: 'Work out (−2) × 3 × (−5)', steps: ['Size: 2 × 3 × 5 = 30', 'There are 2 negatives: an even number.', '(−2) × 3 × (−5) = 30'] },
        visual: { kind: 'pattern', rows: [[3, -6], [2, -4], [1, -2], [0, 0], [-1, 2], [-2, 4]] } },
    ],
    skills: [S('maths.number.negatives.compare'), S('maths.number.negatives.add-subtract'), S('maths.number.negatives.multiply-divide')],
    checkPlan: [['maths.number.negatives.compare', 1], ['maths.number.negatives.compare', 2], ['maths.number.negatives.add-subtract', 1], ['maths.number.negatives.add-subtract', 2], ['maths.number.negatives.add-subtract', 2], ['maths.number.negatives.add-subtract', 3], ['maths.number.negatives.multiply-divide', 1], ['maths.number.negatives.multiply-divide', 2], ['maths.number.negatives.multiply-divide', 2], ['maths.number.negatives.multiply-divide', 3]],
    limits: 'The number line is a model for addition and subtraction. The pattern argument shows why the sign rules hold; it is not a formal proof.',
  },
  {
    id: 'maths.number.order-of-operations',
    topicId: 'maths.number',
    title: 'Order of operations and inverses',
    refs: ['N3'],
    minutes: 40,
    model: 'order',
    prerequisites: ['maths.number.negatives'],
    big: 'Brackets first, then powers and roots, then × and ÷, then + and −. Operations of equal priority (× with ÷, + with −) are worked from left to right. To undo a chain of operations, apply the inverse operations in reverse order.',
    learn: [
      { title: 'Why there is an agreed order.', text: 'Working strictly left to right, 2 + 3 × 4 would give 20. Everyone using mathematics agrees to multiply first, giving 14, so a written calculation has only one meaning. The order is: brackets; powers and roots; multiplication and division; addition and subtraction.',
        example: { prompt: 'Work out 7 + 2 × 5', steps: ['Multiplication before addition: 2 × 5 = 10', '7 + 10 = 17'] },
        visual: { kind: 'collapse', stages: ['7 + 2 × 5', '7 + 10', '17'] } },
      { title: 'Equal priority: left to right.', text: 'Multiplication and division have equal priority, and so do addition and subtraction. Memory aids such as BIDMAS can make it look as if division always comes before multiplication; it does not. Work through equal-priority operations from left to right.',
        example: { prompt: 'Work out 20 ÷ 4 × 5', steps: ['÷ and × have equal priority, so go left to right.', '20 ÷ 4 = 5', '5 × 5 = 25 (not 20 ÷ 20 = 1)'] },
        visual: { kind: 'collapse', stages: ['20 ÷ 4 × 5', '5 × 5', '25'] } },
      { title: 'Brackets and powers first.', text: 'Anything in brackets is worked out first. Next come powers and roots. A long fraction line also groups: the whole numerator and the whole denominator are each worked out before dividing.',
        example: { prompt: 'Work out (3 + 5)^2 ÷ 4', steps: ['Brackets: 3 + 5 = 8', 'Power: 8^2 = 64', '64 ÷ 4 = 16'] },
        visual: { kind: 'collapse', stages: ['(3 + 5)^2 ÷ 4', '8^2 ÷ 4', '64 ÷ 4', '16'] } },
      { title: 'Undo with inverse operations.', text: 'Addition and subtraction undo each other, as do multiplication and division, and squaring and square-rooting (for positive numbers). To reverse a chain of steps, undo the last step first, like taking off shoes before socks.',
        example: { prompt: 'I think of a number, multiply it by 3, then subtract 4. The answer is 11. What was my number?', steps: ['Undo the last step: 11 + 4 = 15', 'Undo the first step: 15 ÷ 3 = 5', 'Check: 5 × 3 − 4 = 11 ✓'] },
        visual: { kind: 'machine', forward: ['× 3', '− 4'], input: 5, output: 11 } },
    ],
    skills: [S('maths.number.order.evaluate'), S('maths.number.order.brackets'), S('maths.number.order.inverse')],
    checkPlan: [['maths.number.order.evaluate', 1], ['maths.number.order.evaluate', 2], ['maths.number.order.evaluate', 2], ['maths.number.order.evaluate', 3], ['maths.number.order.evaluate', 3], ['maths.number.order.brackets', 1], ['maths.number.order.brackets', 2], ['maths.number.order.inverse', 1], ['maths.number.order.inverse', 2], ['maths.number.order.inverse', 3]],
    limits: 'Calculations here use whole numbers so the focus is the order of operations. Square roots are of perfect squares; roots of other numbers come in later lessons.',
  },
  {
    id: 'maths.number.fractions-add-subtract',
    topicId: 'maths.number',
    title: 'Adding and subtracting fractions',
    refs: ['N2', 'N8'],
    minutes: 45,
    model: 'fraction-bars',
    prerequisites: ['maths.number.primes'],
    big: 'Fractions can only be added or subtracted when the pieces are the same size, so first write both with a common denominator. Then add or subtract the numerators and keep the denominator. Convert mixed numbers to improper fractions first, and give answers in their simplest form.',
    learn: [
      { title: 'Equivalent fractions.', text: 'Multiplying or dividing the numerator and denominator by the same number gives an equal fraction: the pieces change size, but the amount does not. A fraction is in its simplest form when the numerator and denominator have no common factor except 1. Divide both by their highest common factor to simplify in one step.',
        example: { prompt: 'Write {18/24} in its simplest form.', steps: ['The highest common factor of 18 and 24 is 6.', '{18/24} = {3/4}'] },
        visual: { kind: 'bars', bars: [[3, 4], [18, 24]], caption: 'Same length, smaller pieces' } },
      { title: 'Mixed numbers and improper fractions.', text: 'An improper fraction has a numerator at least as big as its denominator. A mixed number writes the same amount as wholes plus a proper fraction. {2 3/5} is 2 wholes, which is {10/5}, plus {3/5}, so {2 3/5} = {13/5}.',
        example: { prompt: 'Write {23/4} as a mixed number.', steps: ['23 ÷ 4 = 5 remainder 3', '{23/4} = {5 3/4}'] },
        visual: { kind: 'bars', bars: [[4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [3, 4]], caption: 'Five wholes and three quarters' } },
      { title: 'Add only same-sized pieces.', text: 'Adding the tops and the bottoms gives nonsense: it would make {1/3} + {1/4} = {2/7}, which is smaller than {1/3} on its own. Instead, find a common denominator (the lowest common multiple of the denominators), convert both fractions, then add the numerators.',
        example: { prompt: 'Work out {5/6} − {3/8}', steps: ['The LCM of 6 and 8 is 24.', '{5/6} = {20/24} and {3/8} = {9/24}', '{20/24} − {9/24} = {11/24}'] },
        visual: { kind: 'bars', bars: [[1, 3], [1, 4], [4, 12], [3, 12]], caption: 'Thirds and quarters both become twelfths' } },
      { title: 'Mixed numbers: convert first.', text: 'Converting mixed numbers to improper fractions means you never have to borrow from the whole numbers. Answers can be negative: if you take a larger fraction from a smaller one, the result is below zero.',
        example: { prompt: 'Work out {3 1/4} − {1 2/3}', steps: ['{3 1/4} = {13/4} and {1 2/3} = {5/3}', 'The LCM of 4 and 3 is 12: {39/12} − {20/12} = {19/12}', '{19/12} = {1 7/12} (not {2 5/12}: {1/4} is smaller than {2/3})'] },
        visual: { kind: 'bars', bars: [[13, 4], [5, 3]], caption: '{3 1/4} and {1 2/3} as lengths' } },
    ],
    skills: [S('maths.number.fractions.simplify-convert'), S('maths.number.fractions.add-subtract')],
    checkPlan: [['maths.number.fractions.simplify-convert', 1], ['maths.number.fractions.simplify-convert', 2], ['maths.number.fractions.simplify-convert', 3], ['maths.number.fractions.add-subtract', 1], ['maths.number.fractions.add-subtract', 2], ['maths.number.fractions.add-subtract', 2], ['maths.number.fractions.add-subtract', 2], ['maths.number.fractions.add-subtract', 3], ['maths.number.fractions.add-subtract', 3], ['maths.number.fractions.add-subtract', 3]],
    limits: 'Bars show fractions as lengths of one whole. They show why denominators must match; they are not drawn to the exact scale of every question.',
  },
  {
    id: 'maths.number.fractions-multiply-divide',
    topicId: 'maths.number',
    title: 'Multiplying and dividing fractions',
    refs: ['N2', 'N8', 'N12'],
    minutes: 45,
    model: 'fraction-area',
    prerequisites: ['maths.number.fractions-add-subtract'],
    big: 'To multiply fractions, multiply the numerators and multiply the denominators. "Of" means multiply. To divide, multiply by the reciprocal of the second fraction. Convert mixed numbers to improper fractions first. To find a whole from a part, find one part, then multiply.',
    learn: [
      { title: '"Of" means multiply.', text: '{2/3} of 12 is 8, and so is {2/3} × 12. A fraction of a fraction works the same way: {1/2} of {3/4} is {3/8}. In an area model, shading {3/4} one way and {1/2} the other way overlaps 3 of the 8 small rectangles.',
        example: { prompt: 'Work out {2/3} × {4/5}', steps: ['Multiply the numerators: 2 × 4 = 8', 'Multiply the denominators: 3 × 5 = 15', '{2/3} × {4/5} = {8/15}'] },
        visual: { kind: 'area', a: [2, 3], b: [4, 5] } },
      { title: 'Simplify before you multiply.', text: 'You can divide any numerator and any denominator by a common factor before multiplying. The numbers stay smaller, and the answer comes out in its simplest form.',
        example: { prompt: 'Work out {4/9} × {3/8}', steps: ['4 and 8 share a factor of 4: {1/9} × {3/2}', '3 and 9 share a factor of 3: {1/3} × {1/2}', '= {1/6}'] },
        visual: { kind: 'area', a: [4, 9], b: [3, 8] } },
      { title: 'Dividing: how many fit?', text: '3 ÷ {1/4} asks how many quarters fit into 3. There are 12, the same as 3 × 4. Dividing by a fraction is the same as multiplying by its reciprocal (the fraction turned upside down). Only the fraction you are dividing by is turned over.',
        example: { prompt: 'Work out {2/3} ÷ {4/5}', steps: ['Multiply by the reciprocal of {4/5}: {2/3} × {5/4}', '= {10/12}', '= {5/6}'] },
        visual: { kind: 'fit', whole: [9, 4], piece: [3, 4] } },
      { title: 'Mixed numbers: convert first.', text: 'Multiplying the whole numbers and the fractions separately gives the wrong answer, because it misses the "cross" parts of the product. Convert to improper fractions, then multiply or divide.',
        example: { prompt: 'Work out {1 1/2} × {2 2/3}', steps: ['{1 1/2} = {3/2} and {2 2/3} = {8/3}', '{3/2} × {8/3} = {24/6} = 4', 'Not 1 × 2 + {1/2} × {2/3} = {2 1/3}'] },
        visual: { kind: 'area', a: [3, 2], b: [8, 3] } },
      { title: 'Find the whole from a part.', text: 'If you know a fraction of an amount, find one part first, then the whole. When {3/5} of a number is 24, three parts are 24, so one part is 8 and five parts are 40.',
        example: { prompt: '{3/5} of a number is 24. Find the number.', steps: ['3 parts = 24, so 1 part = 24 ÷ 3 = 8', 'The whole is 5 parts: 8 × 5 = 40', 'Check: {3/5} of 40 = 24 ✓'] },
        visual: { kind: 'parts', parts: 5, known: 3, value: 24 } },
    ],
    skills: [S('maths.number.fractions.multiply-divide'), S('maths.number.fractions.of-amount')],
    checkPlan: [['maths.number.fractions.multiply-divide', 1], ['maths.number.fractions.multiply-divide', 2], ['maths.number.fractions.multiply-divide', 2], ['maths.number.fractions.multiply-divide', 3], ['maths.number.fractions.multiply-divide', 3], ['maths.number.fractions.of-amount', 1], ['maths.number.fractions.of-amount', 1], ['maths.number.fractions.of-amount', 2], ['maths.number.fractions.of-amount', 2], ['maths.number.fractions.of-amount', 3]],
    limits: 'The area model shows products of proper fractions inside one whole square; improper fractions extend beyond it. The "how many fit" model shows division with whole-number answers most clearly.',
  },
  {
    id: 'maths.number.primes',
    topicId: 'maths.number',
    title: 'Primes, factors and multiples',
    refs: ['N4'],
    minutes: 45,
    model: 'factor-tree',
    big: 'A prime has exactly two factors: 1 and itself. Every whole number greater than 1 can be written as a product of primes in exactly one way. The HCF multiplies the shared primes; the LCM multiplies every prime at its highest power.',
    learn: [
      { title: 'Factors, multiples and primes.', text: 'A factor divides a number exactly; a multiple is in its times table. Factors come in pairs: 36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6. A prime number has exactly two factors. 1 is not prime (it has one factor) and 2 is the only even prime.',
        example: { prompt: 'Is 51 prime?', steps: ['Try small primes: 51 ÷ 2 is not whole.', '51 ÷ 3 = 17, so 51 = 3 × 17.', '51 has more than two factors, so it is not prime.'] },
        visual: { kind: 'pairs', n: 36 } },
      { title: 'Prime factor trees.', text: 'Split a number into any factor pair, and keep splitting until every branch ends in a prime. Whichever pair you start with, you always reach the same primes: this is the unique factorisation theorem. Write repeated primes as powers (index form).',
        example: { prompt: 'Write 60 as a product of prime factors.', steps: ['60 = 6 × 10', '6 = 2 × 3 and 10 = 2 × 5', '60 = 2 × 2 × 3 × 5 = 2^2 × 3 × 5'] },
        visual: { kind: 'tree', n: 60, splits: { 60: [6, 10], 6: [2, 3], 10: [2, 5] } } },
      { title: 'HCF and LCM from prime factors.', text: '60 = 2^2 × 3 × 5 and 72 = 2^3 × 3^2. Put the shared primes in the middle of a Venn diagram. The HCF is the product of the shared primes. The LCM is the product of every prime in the diagram.',
        example: { prompt: 'Find the HCF and LCM of 60 and 72.', steps: ['Shared: 2, 2, 3 → HCF = 2^2 × 3 = 12', 'Every prime: 5 | 2, 2, 3 | 2, 3 → LCM = 2^3 × 3^2 × 5 = 360', 'Check: HCF × LCM = 12 × 360 = 4320 = 60 × 72 ✓'] },
        visual: { kind: 'venn', a: 60, b: 72 } },
      { title: 'Which one does the question want?', text: 'Splitting things into the largest possible equal groups with nothing left over needs the HCF. Finding when repeating events next happen together needs the LCM. Decide which before calculating.',
        example: { prompt: 'Lights flash every 12 and 18 seconds. They flash together now. When next?', steps: ['"Next together" means a common multiple: the LCM.', '12 = 2^2 × 3, 18 = 2 × 3^2', 'LCM = 2^2 × 3^2 = 36 seconds'] },
        visual: { kind: 'venn', a: 12, b: 18 } },
    ],
    skills: [S('maths.number.primes.identify'), S('maths.number.primes.factorise'), S('maths.number.primes.hcf-lcm')],
    checkPlan: [['maths.number.primes.identify', 1], ['maths.number.primes.identify', 2], ['maths.number.primes.factorise', 1], ['maths.number.primes.factorise', 2], ['maths.number.primes.factorise', 3], ['maths.number.primes.hcf-lcm', 1], ['maths.number.primes.hcf-lcm', 1], ['maths.number.primes.hcf-lcm', 2], ['maths.number.primes.hcf-lcm', 2], ['maths.number.primes.hcf-lcm', 3]],
    limits: 'Factor trees and Venn diagrams are recording methods. Any valid first split is accepted; the order of primes in an answer does not matter.',
  },
];

// Teaching order: primes come before fraction arithmetic, which relies on HCF/LCM.
export const lessonOrder = ['maths.number.negatives', 'maths.number.order-of-operations', 'maths.number.primes', 'maths.number.fractions-add-subtract', 'maths.number.fractions-multiply-divide'];
export const orderedLessons = lessonOrder.map(id => mathsLessons.find(l => l.id === id));
