// Edexcel GCSE (9–1) Mathematics 1MA1 — Geometry and measures, batch 3.
//   G5 congruence criteria · G6 reasoning with congruence and similarity · G9 circle vocabulary ·
//   G10 circle theorems (Higher) · G12 properties of solids · G13 plans and elevations · G19 similar
//   figures · G20 3D Pythagoras and trigonometry (Higher) · G22 sine and cosine rules (Higher) ·
//   G23 area = ½ab sin C (Higher) · G24, G25 vectors (proofs Higher).
// All teaching text and questions are original.
import { skillById } from './skills.js?v=20261023-maths-r16';
import { triABC, aShape, circlePoint } from './skills-geometry3.js?v=20261023-maths-r16';

const S = id => skillById[id];
const geo = (fig, caption) => ({ kind: 'geo', fig, caption });
const g = (spec, caption) => ({ kind: 'g', g: spec, caption });
const O = [300, 170];
const P = circlePoint;

export const geometryLessons3 = [
  {
    id: 'maths.geometry.congruence-similarity',
    topicId: 'maths.geometry',
    title: 'Congruence and similarity',
    refs: ['G5', 'G6', 'G19'],
    minutes: 45,
    model: 'congruence-test',
    prerequisites: ['maths.geometry.angles', 'maths.ratio.scale-similarity'],
    big: 'Congruent shapes are identical in shape and size (one may be reflected or rotated). Two triangles are congruent if they have SSS (three equal sides), SAS (two sides and the angle between them), ASA (two angles and a corresponding side) or RHS (right angle, hypotenuse and side). Equal angles alone (AAA) only show similarity. Similar shapes are enlargements: corresponding angles are equal and every length is multiplied by the same scale factor. A line parallel to one side of a triangle cuts off a smaller similar triangle.',
    learn: [
      { title: 'Conditions for congruence.', text: 'You need enough facts to fix the triangle completely. SSS, SAS, ASA and RHS each do; AAA does not (the triangle could be any size), and two sides with an angle that is not between them (SSA) can give two different triangles. In a proof, name the equal parts, give a reason for each, and state the condition.',
        example: { prompt: 'Sides 5, 7 and the 40° angle between them in both triangles. Congruent?', steps: ['Two sides and the included angle', 'Yes: SAS'] },
        visual: { kind: 'work', lines: ['SSS: three pairs of equal sides', 'SAS: two sides and the angle between them', 'ASA: two angles and a corresponding side', 'RHS: right angle, hypotenuse, side'] } },
      { title: 'Similar triangles.', text: 'Find the scale factor from a pair of matching sides: new ÷ old. Multiply to enlarge, divide to go back. Match sides by the equal angles opposite them, not by position on the page.',
        example: { prompt: 'AB = 4 cm matches DE = 10 cm. BC = 6 cm. Find EF.', steps: ['Scale factor 10 ÷ 4 = 2.5', 'EF = 6 × 2.5 = 15 cm'] },
        visual: { kind: 'work', lines: ['scale factor = {new/old}', '{10/4} = 2.5', 'EF = 6 × 2.5 = 15 cm'] } },
      { title: 'Parallel lines inside a triangle.', text: 'A line parallel to the base makes a small triangle at the top that is similar to the whole triangle (corresponding angles are equal). Use whole sides: if the small side is 4 cm and the whole side is 4 + 6 = 10 cm, the scale factor is 2.5, not 1.5.',
        example: { prompt: 'Small base 3 cm; sides 4 cm (small) and 4 + 4 = 8 cm (whole). Large base?', steps: ['Scale factor 8 ÷ 4 = 2', 'Large base = 3 × 2 = 6 cm'] },
        visual: geo(aShape(3, 6, 4, ['3 cm', 'x', '4 cm', '4 cm']), 'Scale factor 8 ÷ 4 = 2, so x = 6 cm') },
    ],
    skills: [S('maths.geometry.congruence'), S('maths.geometry.similarity')],
    checkPlan: [['maths.geometry.congruence', 1], ['maths.geometry.congruence', 1], ['maths.geometry.congruence', 2], ['maths.geometry.congruence', 2], ['maths.geometry.congruence', 3], ['maths.geometry.similarity', 1], ['maths.geometry.similarity', 1], ['maths.geometry.similarity', 2], ['maths.geometry.similarity', 2], ['maths.geometry.similarity', 3]],
    limits: 'Formal written congruence proofs are modelled in the worked steps but not marked; conditions are chosen from options. Areas and volumes of similar shapes are practised in the Ratio lesson on scale and similarity.',
  },
  {
    id: 'maths.geometry.circle-theorems',
    topicId: 'maths.geometry',
    title: 'Circle theorems',
    refs: ['G10', 'G9'],
    minutes: 55,
    higherOnly: true,
    model: 'circle-theorem-explorer',
    prerequisites: ['maths.geometry.angles', 'maths.geometry.circles'],
    big: 'The angle at the centre is twice the angle at the circumference standing on the same arc. The angle in a semicircle is 90°. Angles in the same segment are equal. Opposite angles of a cyclic quadrilateral add up to 180°. A tangent meets the radius at 90°, and the two tangents from a point are equal. The angle between a tangent and a chord equals the angle in the alternate segment. Give the theorem as your reason each time.',
    learn: [
      { title: 'Angles from an arc.', text: 'Angles standing on the same arc: at the centre it is twice the angle at the circumference. If the arc is a semicircle the centre angle is 180°, so the angle in a semicircle is 90°. Any two angles at the circumference on the same arc (in the same segment) are equal.',
        example: { prompt: 'The angle at the centre is 124°. The angle at the circumference on the same arc?', steps: ['Half of the angle at the centre', '124 ÷ 2 = 62°'] },
        visual: geo({ h: 340, circles: [{ c: O, r: 130 }], dots: [O], segs: [{ a: O, b: P(-152) }, { a: O, b: P(-28) }, { a: P(90), b: P(-152) }, { a: P(90), b: P(-28) }], angles: [{ v: O, p: P(-152), q: P(-28), label: '124°', r: 26 }, { v: P(90), p: P(-152), q: P(-28), label: '62°', r: 34 }], note: 'Not drawn accurately', alt: 'Angle at the centre 124°, angle at the circumference 62°, on the same arc' }, 'The angle at the centre is twice the angle at the circumference') },
      { title: 'Cyclic quadrilaterals.', text: 'A quadrilateral with all four corners on the circle is cyclic. Its opposite angles add up to 180°. Be careful: this is not true for a quadrilateral with only three corners on the circle.',
        example: { prompt: 'Angle A of a cyclic quadrilateral ABCD is 72°. Angle C?', steps: ['Opposite angles add to 180°', 'C = 108°'] },
        visual: geo({ h: 340, circles: [{ c: O, r: 130 }], polys: [{ pts: [P(10), P(110), P(190), P(290)] }], angles: [{ v: P(110), p: P(190), q: P(10), label: '', r: 28 }, { v: P(290), p: P(10), q: P(190), label: '', r: 28 }], note: 'Not drawn accurately', alt: 'Cyclic quadrilateral; opposite angles add to 180°' }, 'Opposite angles add up to 180°') },
      { title: 'Tangents.', text: 'A tangent touches the circle at one point and is perpendicular to the radius there. Two tangents from the same point are equal in length, which makes isosceles triangles and kites. The alternate segment theorem: the angle between a tangent and a chord equals the angle the chord makes in the other segment.',
        example: { prompt: 'Angle between tangent and radius?', steps: ['Always 90°'] },
        visual: geo({ h: 340, circles: [{ c: O, r: 130 }], dots: [O], segs: [{ a: [80, 300], b: [520, 300] }, { a: O, b: P(270) }], angles: [{ v: P(270), p: [520, 300], q: O, right: true }], note: 'Not drawn accurately', alt: 'A tangent at the bottom of the circle meets the radius at a right angle' }, 'Tangent ⟂ radius') },
    ],
    skills: [S('maths.geometry.circle-angles'), S('maths.geometry.circle-tangents')],
    checkPlan: [['maths.geometry.circle-angles', 1], ['maths.geometry.circle-angles', 1], ['maths.geometry.circle-angles', 2], ['maths.geometry.circle-angles', 2], ['maths.geometry.circle-angles', 3], ['maths.geometry.circle-tangents', 1], ['maths.geometry.circle-tangents', 1], ['maths.geometry.circle-tangents', 2], ['maths.geometry.circle-tangents', 3], ['maths.geometry.circle-tangents', 3]],
    limits: 'Higher only. Diagrams are drawn accurately but marked "not drawn accurately", as in the exam. Reasons are shown in solutions but not marked. Proving the theorems is discussed in the investigation, not assessed.',
  },
  {
    id: 'maths.geometry.solids-plans',
    topicId: 'maths.geometry',
    title: '3D solids, plans and elevations',
    refs: ['G12', 'G13'],
    minutes: 40,
    model: 'cube-stacker',
    prerequisites: ['maths.geometry.volume'],
    big: 'A face is a flat surface, an edge is where two faces meet, and a vertex is a corner. For any polyhedron without holes, faces + vertices − edges = 2. A net is a flat shape that folds into a solid. The plan is the view from above; the front and side elevations are the views from the front and side. Elevations show the tallest stack in each line of sight, so hidden cubes do not appear.',
    learn: [
      { title: 'Faces, edges and vertices.', text: 'A cuboid has 6 faces, 12 edges and 8 vertices: 6 + 8 − 12 = 2. A triangular prism has 5 faces, 9 edges and 6 vertices. A square-based pyramid has 5 faces, 8 edges and 5 vertices. Prisms have two identical ends joined by rectangles.',
        example: { prompt: 'A hexagonal prism has 8 faces and 12 vertices. Edges?', steps: ['E = F + V − 2', '= 8 + 12 − 2 = 18'] },
        visual: { kind: 'work', lines: ['F + V − E = 2', 'cuboid: 6 + 8 − 12 = 2', 'triangular prism: 5 + 6 − 9 = 2'] } },
      { title: 'Nets.', text: 'A cube net has 6 squares. A triangular prism net has 2 triangles and 3 rectangles. A square-based pyramid has 1 square and 4 triangles. A cylinder unrolls into 2 circles and a rectangle whose length is the circumference.',
        example: { prompt: 'A net has 1 square and 4 triangles. Solid?', steps: ['A square base with 4 triangular sides', 'Square-based pyramid'] },
        visual: geo({ h: 300, polys: [{ pts: [[250, 110], [350, 110], [350, 210], [250, 210]] }, { pts: [[250, 110], [350, 110], [300, 30]] }, { pts: [[350, 110], [350, 210], [430, 160]] }, { pts: [[250, 210], [350, 210], [300, 290]] }, { pts: [[250, 110], [250, 210], [170, 160]] }], alt: 'Net of a square-based pyramid: a square with a triangle on each side' }, 'Net of a square-based pyramid') },
      { title: 'Plans and elevations.', text: 'Write the height of each stack on its square of the plan. The front elevation shows, for each column, the tallest stack in it; the side elevation does the same for each row. The volume is the total of all the heights.',
        example: { prompt: 'Plan: front row 2, 1; back row 3, 0. Front elevation?', steps: ['Columns: max(2, 3) = 3 and max(1, 0) = 1', '3 + 1 = 4 squares'] },
        visual: { kind: 'work', lines: ['back row:   3  0', 'front row:  2  1', 'front elevation heights: 3, 1', 'volume: 3 + 2 + 1 = 6 cm³'] } },
    ],
    skills: [S('maths.geometry.solids'), S('maths.geometry.plans')],
    checkPlan: [['maths.geometry.solids', 1], ['maths.geometry.solids', 1], ['maths.geometry.solids', 2], ['maths.geometry.solids', 3], ['maths.geometry.solids', 3], ['maths.geometry.plans', 1], ['maths.geometry.plans', 2], ['maths.geometry.plans', 2], ['maths.geometry.plans', 3], ['maths.geometry.plans', 3]],
    limits: 'Drawing plans, elevations and isometric views is not marked; questions count squares and cubes instead. Exam questions also ask you to sketch them on paper.',
  },
  {
    id: 'maths.geometry.trig-rules',
    topicId: 'maths.geometry',
    title: 'Sine rule, cosine rule and 3D',
    refs: ['G22', 'G23', 'G20'],
    minutes: 55,
    higherOnly: true,
    calculator: true,
    model: 'triangle-solver',
    prerequisites: ['maths.geometry.trigonometry', 'maths.geometry.pythagoras'],
    big: 'In any triangle, label side a opposite angle A, and so on. Sine rule: {a/sin A} = {b/sin B} = {c/sin C}; use it when you know a side and its opposite angle. Cosine rule: a² = b² + c² − 2bc cos A; use it with two sides and the angle between them, or all three sides. Area = {1/2}ab sin C, where C is the angle between sides a and b. In 3D, find a right-angled triangle inside the solid: a cuboid diagonal is √(l² + w² + h²).',
    learn: [
      { title: 'Sine rule.', text: 'A = 40°, B = 65° and a = 8 cm. Then {b/sin 65°} = {8/sin 40°}, so b = 8 × sin 65° ÷ sin 40° ≈ 11.3 cm. To find an angle, flip it: {sin B/b} = {sin A/a}. If the angle could be obtuse, check whether 180° minus your answer also fits.',
        example: { prompt: 'A = 50°, a = 10, b = 12. Angle B (acute)?', steps: ['sin B = 12 × sin 50° ÷ 10 = 0.919…', 'B ≈ 66.8°'] },
        visual: geo(triABC(40, 65, 75, { A: '40°', B: '65°', a: '8 cm', b: 'b' }, 'Triangle with A 40°, B 65°, a 8 cm, b unknown'), 'Each side goes with the angle opposite it') },
      { title: 'Cosine rule.', text: 'Two sides and the angle between them: b = 7, c = 9, A = 50°. a² = 49 + 81 − 2 × 7 × 9 × cos 50° = 48.99…, so a ≈ 7.0 cm. Three sides: rearrange to cos A = {b² + c² − a²/2bc}. When A = 90°, the cosine rule becomes Pythagoras.',
        example: { prompt: 'Sides 5, 6, 7. Largest angle?', steps: ['It is opposite the 7', 'cos θ = {25 + 36 − 49/60} = 0.2', 'θ ≈ 78.5°'] },
        visual: geo(triABC(50, 74, 56, { A: '50°', b: '7 cm', c: '9 cm', a: 'a' }, 'Triangle with b 7 cm, c 9 cm and A 50° between them'), 'Two sides and the included angle: cosine rule') },
      { title: 'Area and 3D.', text: 'Area = {1/2} × 7 × 9 × sin 50° ≈ 24.1 cm². For a cuboid 6 by 4 by 3: the base diagonal is √(36 + 16) = √52, and the space diagonal is √(52 + 9) = √61 ≈ 7.8 cm. Its angle with the base is tan⁻¹(3 ÷ √52) ≈ 22.6°.',
        example: { prompt: 'Cuboid 3 × 4 × 12. Space diagonal?', steps: ['√(9 + 16 + 144) = √169', '= 13'] },
        visual: { kind: 'work', lines: ['Area = {1/2}ab sin C', 'space diagonal = √(l² + w² + h²)', 'angle with base: tan θ = {h/base diagonal}'] } },
    ],
    skills: [S('maths.geometry.sine-cosine'), S('maths.geometry.area-3d')],
    checkPlan: [['maths.geometry.sine-cosine', 1], ['maths.geometry.sine-cosine', 2], ['maths.geometry.sine-cosine', 3], ['maths.geometry.sine-cosine', 3], ['maths.geometry.sine-cosine', 4], ['maths.geometry.area-3d', 1], ['maths.geometry.area-3d', 1], ['maths.geometry.area-3d', 2], ['maths.geometry.area-3d', 3], ['maths.geometry.area-3d', 3]],
    limits: 'Higher only; calculator lesson. Answers to 1 decimal place accept 0.05 either side. The ambiguous case of the sine rule is flagged in the prompts (angle B is acute) rather than assessed.',
  },
  {
    id: 'maths.geometry.vectors',
    topicId: 'maths.geometry',
    title: 'Vectors',
    refs: ['G24', 'G25'],
    minutes: 45,
    model: 'vector-walk',
    prerequisites: ['maths.geometry.transformations', 'maths.algebra.simplify'],
    big: 'A vector has size and direction. Column vectors add and subtract number by number, and multiplying by a scalar multiplies both numbers. On a diagram, a route from one point to another is the sum of the vectors along the way; going backwards along a vector makes it negative. Higher: parallel vectors are scalar multiples of each other, and a point dividing AB in a ratio is found from AB = b − a.',
    learn: [
      { title: 'Column vectors.', text: `${'{vec 3;1}'} + ${'{vec −1;4}'} = ${'{vec 2;5}'}. 3 × ${'{vec 2;−1}'} = ${'{vec 6;−3}'}. Subtracting a vector is adding its negative: ${'{vec 3;1}'} − ${'{vec −1;4}'} = ${'{vec 4;−3}'}.`,
        example: { prompt: 'a = (2, 5) and b = (−3, 1) as column vectors. 2a − b?', steps: ['2a = (4, 10)', '2a − b = (7, 9)'] },
        visual: g({ xr: [-1, 6], yr: [-1, 6], polys: [{ pts: [[0, 0], [3, 1]], label: 'a' }, { pts: [[3, 1], [2, 5]], label: 'b' }, { pts: [[0, 0], [2, 5]], label: 'a + b' }] }, 'Nose to tail: a then b gives a + b') },
      { title: 'Routes in shapes.', text: 'In parallelogram OACB with OA = a and OB = b: OC = a + b (along a then along b), and AB = −a + b = b − a (back along a, then along b). Always read the letters in order: AB starts at A.',
        example: { prompt: 'OA = a, OB = b. Write BA.', steps: ['B → O is −b, O → A is a', 'BA = a − b'] },
        visual: geo({ h: 280, polys: [{ pts: [[120, 230], [380, 230], [480, 70], [220, 70]] }], segs: [{ a: [380, 230], b: [220, 70], dash: true }], labels: [{ at: [104, 248], t: 'O' }, { at: [392, 252], t: 'A' }, { at: [494, 66], t: 'C' }, { at: [206, 66], t: 'B' }, { at: [250, 252], t: 'a' }, { at: [152, 150], t: 'b' }], alt: 'Parallelogram OACB with OA = a, OB = b and the diagonal AB' }, 'AB = b − a') },
      { title: 'Parallel vectors and ratios (Higher).', text: 'If one vector is a multiple of another, they are parallel: 6a + 9b = 3(2a + 3b). If they also share a point, the points are on a straight line. To find P on AB with AP : PB = 1 : 2, go to A and then a third of the way along AB: OP = a + {1/3}(b − a).',
        example: { prompt: 'Is 4a − 6b parallel to 2a − 3b?', steps: ['4a − 6b = 2(2a − 3b)', 'Yes'] },
        visual: { kind: 'work', lines: ['AB = b − a', 'AP = {1/3}AB', 'OP = a + {1/3}(b − a) = {2/3}a + {1/3}b'] } },
    ],
    skills: [S('maths.geometry.vectors'), S('maths.geometry.vector-geometry')],
    checkPlan: [['maths.geometry.vectors', 1], ['maths.geometry.vectors', 1], ['maths.geometry.vectors', 2], ['maths.geometry.vectors', 3], ['maths.geometry.vectors', 3], ['maths.geometry.vector-geometry', 1], ['maths.geometry.vector-geometry', 1], ['maths.geometry.vectors', 2], ['maths.geometry.vectors', 1], ['maths.geometry.vector-geometry', 1]],
    limits: 'Column-vector answers are typed as a top number and a bottom number. Vector expressions are marked by algebraic equivalence. Written vector proofs (Higher) are reduced to parallel and ratio questions; full proofs are not marked.',
  },
];

export const geometryOrder3 = ['maths.geometry.congruence-similarity', 'maths.geometry.circle-theorems', 'maths.geometry.solids-plans', 'maths.geometry.trig-rules', 'maths.geometry.vectors'];
export const orderedGeometry3 = geometryOrder3.map(id => geometryLessons3.find(l => l.id === id));
