// Edexcel GCSE (9–1) Mathematics 1MA1 — Geometry and measures, batch 2.
//   G2 constructions and loci · G6 deriving results (Pythagoras) · G7 transformations (negative scale
//   factors Higher) · G8 combinations and invariance (Higher) · G15 bearings and scale drawings ·
//   G20 Pythagoras and trigonometry in right-angled triangles (2D) · G21 exact trigonometric values ·
//   G24 translations as column vectors.
// All teaching text and questions are original.
import { skillById } from './skills.js?v=20261023-maths-r11';
import { rtFig, bearingFig } from './skills-geometry2.js?v=20261023-maths-r11';

const S = id => skillById[id];
const geo = (fig, caption) => ({ kind: 'geo', fig, caption });
const g = (spec, caption) => ({ kind: 'g', g: spec, caption });
const TRI = [[1, 1], [3, 1], [1, 4]];
const close = pts => [...pts, pts[0]];

export const geometryLessons2 = [
  {
    id: 'maths.geometry.pythagoras',
    topicId: 'maths.geometry',
    title: "Pythagoras' theorem",
    refs: ['G20', 'G6', 'G11'],
    minutes: 45,
    calculator: true,
    model: 'pythagoras-squares',
    prerequisites: ['maths.geometry.area', 'maths.number.powers'],
    big: 'In a right-angled triangle the hypotenuse c is the longest side, opposite the right angle, and a² + b² = c². To find the hypotenuse, square the two shorter sides, add, then square root. To find a shorter side, subtract the square of the other shorter side from c², then square root. If a² + b² = c² for three lengths, the triangle is right-angled.',
    learn: [
      { title: 'Find the hypotenuse.', text: 'The square on the hypotenuse has the same area as the squares on the other two sides together. With shorter sides 6 cm and 8 cm: c² = 36 + 64 = 100, so c = 10 cm. Check: the hypotenuse must be the longest side.',
        example: { prompt: 'Shorter sides 5 cm and 12 cm. Find the hypotenuse.', steps: ['c² = 25 + 144 = 169', 'c = √169 = 13 cm'] },
        visual: geo(rtFig(8, 6, ['8 cm', '6 cm', 'c'], '', 'Right-angled triangle with shorter sides 8 cm and 6 cm and hypotenuse c'), 'c² = 8² + 6² = 100, so c = 10 cm') },
      { title: 'Find a shorter side.', text: 'If you know the hypotenuse, subtract. Hypotenuse 13 cm and one side 5 cm: b² = 169 − 25 = 144, so b = 12 cm. Adding here would give a side longer than the hypotenuse, which is impossible.',
        example: { prompt: 'Hypotenuse 10 cm, one side 7 cm. Find the other side to 1 d.p.', steps: ['b² = 100 − 49 = 51', 'b = √51 ≈ 7.1 cm'] },
        visual: geo(rtFig(5, 12, ['5 cm', 'b', '13 cm'], '', 'Right-angled triangle with hypotenuse 13 cm, one side 5 cm and the other b'), 'b² = 13² − 5² = 144, so b = 12 cm') },
      { title: 'Spot the right-angled triangle.', text: 'Ladders, diagonals of rectangles, journeys north then east, the height of an isosceles triangle and the distance between two coordinates all hide a right-angled triangle. Draw it, label the hypotenuse, then use a² + b² = c². In 3D or two-step problems, keep the first answer exact (as c²) until the end.',
        example: { prompt: 'Distance from (1, 2) to (7, 10)?', steps: ['across 6, up 8', 'd² = 36 + 64 = 100', 'd = 10'] },
        visual: g({ xr: [0, 8], yr: [0, 11], polys: [{ pts: [[1, 2], [7, 2], [7, 10], [1, 2]] }], points: [[1, 2, '(1, 2)'], [7, 10, '(7, 10)']] }, 'Across 6 and up 8: the distance is the hypotenuse, 10') },
    ],
    skills: [S('maths.geometry.pythagoras'), S('maths.geometry.pythagoras-problems')],
    checkPlan: [['maths.geometry.pythagoras', 1], ['maths.geometry.pythagoras', 1], ['maths.geometry.pythagoras', 2], ['maths.geometry.pythagoras', 2], ['maths.geometry.pythagoras', 3], ['maths.geometry.pythagoras-problems', 1], ['maths.geometry.pythagoras-problems', 1], ['maths.geometry.pythagoras-problems', 2], ['maths.geometry.pythagoras-problems', 3], ['maths.geometry.pythagoras-problems', 3]],
    limits: 'Calculator lesson; some items have whole-number answers and need no calculator. Pythagoras in 3D (Higher) comes in batch 3. A proof of the theorem is shown in the investigation but not marked.',
  },
  {
    id: 'maths.geometry.trigonometry',
    topicId: 'maths.geometry',
    title: 'Trigonometry in right-angled triangles',
    refs: ['G20', 'G21'],
    minutes: 50,
    calculator: true,
    model: 'trig-ratios',
    prerequisites: ['maths.geometry.pythagoras', 'maths.algebra.formulae'],
    big: 'Label the sides from the angle you are using: the hypotenuse is opposite the right angle, the opposite side faces the angle, and the adjacent side is next to it. sin θ = {opposite/hypotenuse}, cos θ = {adjacent/hypotenuse}, tan θ = {opposite/adjacent} (SOH CAH TOA). Pick the ratio that uses the side you know and the side you want. To find an angle, use the inverse: θ = sin⁻¹(…). Learn the exact values for 0°, 30°, 45°, 60° and 90°.',
    learn: [
      { title: 'Choose the ratio.', text: 'From the 35° angle, the side of 10 cm is the hypotenuse and you want the opposite. Opposite and hypotenuse: SOH, sine. So x = 10 × sin 35° ≈ 5.7 cm. If the unknown is on the bottom, divide: tan 40° = {6/x} gives x = 6 ÷ tan 40°.',
        example: { prompt: 'Hypotenuse 10 cm, angle 35°. Find the opposite side.', steps: ['sin 35° = {x/10}', 'x = 10 × sin 35° ≈ 5.7 cm'] },
        visual: geo(rtFig(10 * Math.cos(35 * Math.PI / 180), 10 * Math.sin(35 * Math.PI / 180), ['', 'x', '10 cm'], '35°', 'Right-angled triangle, hypotenuse 10 cm, angle 35°, opposite side x'), 'Opposite and hypotenuse: use sin') },
      { title: 'Find an angle.', text: 'If you know two sides, write the ratio as a fraction and use the inverse function. Opposite 5 cm and adjacent 8 cm: tan θ = {5/8}, so θ = tan⁻¹(0.625) ≈ 32.0°. Make sure your calculator is in degrees.',
        example: { prompt: 'Adjacent 7 cm, hypotenuse 9 cm. Find θ.', steps: ['cos θ = {7/9}', 'θ = cos⁻¹({7/9}) ≈ 38.9°'] },
        visual: geo(rtFig(8, 5, ['8 cm', '5 cm', ''], 'θ', 'Right-angled triangle, adjacent 8 cm, opposite 5 cm, angle θ'), 'tan θ = {5/8}, so θ ≈ 32.0°') },
      { title: 'Exact values.', text: 'Cut an equilateral triangle of side 2 in half: the short side is 1, the height √3. So sin 30° = {1/2}, cos 30° = {√3/2}, tan 30° = {1/√3} = {√3/3}, and sin 60° = {√3/2}, cos 60° = {1/2}, tan 60° = √3. Half a square of side 1 has hypotenuse √2: sin 45° = cos 45° = {√2/2} and tan 45° = 1. Also sin 0° = 0, cos 0° = 1, sin 90° = 1, cos 90° = 0, tan 0° = 0.',
        example: { prompt: 'Hypotenuse 12 cm, angle 30°. Exact opposite side?', steps: ['sin 30° = {1/2}', 'x = 12 × {1/2} = 6 cm'] },
        visual: { kind: 'work', lines: ['sin 30° = {1/2}   cos 30° = {√3/2}   tan 30° = {√3/3}', 'sin 45° = {√2/2}   cos 45° = {√2/2}   tan 45° = 1', 'sin 60° = {√3/2}   cos 60° = {1/2}   tan 60° = √3'] } },
    ],
    skills: [S('maths.geometry.trig'), S('maths.geometry.trig-exact')],
    checkPlan: [['maths.geometry.trig', 1], ['maths.geometry.trig', 2], ['maths.geometry.trig', 2], ['maths.geometry.trig', 3], ['maths.geometry.trig', 3], ['maths.geometry.trig-exact', 1], ['maths.geometry.trig-exact', 1], ['maths.geometry.trig-exact', 2], ['maths.geometry.trig-exact', 2], ['maths.geometry.trig-exact', 3]],
    limits: 'Calculator lesson, except the exact-value items. Answers to 1 decimal place accept 0.05 either side. Exact surd answers are typed with the √ button, for example 4√3 or √3/2. The sine and cosine rules and 3D trigonometry (Higher) come in batch 3.',
  },
  {
    id: 'maths.geometry.transformations',
    topicId: 'maths.geometry',
    title: 'Transformations and column vectors',
    refs: ['G7', 'G8', 'G24', 'G11'],
    minutes: 50,
    model: 'transform-lab',
    prerequisites: ['maths.algebra.coordinates-lines'],
    big: 'A translation slides a shape by a column vector: the top number moves across (right is positive), the bottom number moves up (up is positive). A reflection needs a mirror line. A rotation needs an angle, a direction and a centre. An enlargement needs a scale factor and a centre: multiply each distance from the centre by the scale factor. To describe a transformation fully, give every one of these details. Translations, reflections and rotations give congruent images; enlargements give similar ones.',
    learn: [
      { title: 'Translations and reflections.', text: `Translating by ${'{vec 4;−2}'} moves every point 4 right and 2 down. Reflecting in the y-axis changes (x, y) to (−x, y); in the x-axis, to (x, −y); in y = x, the coordinates swap. Count squares to the mirror line and the same number beyond it.`,
        example: { prompt: 'Reflect (3, 1) in the line y = x.', steps: ['Swap the coordinates', '(1, 3)'] },
        visual: g({ xr: [-5, 5], yr: [-5, 5], fns: [{ expr: 'x', dash: true, label: 'y = x' }], polys: [{ pts: close(TRI), label: 'A' }, { pts: close(TRI.map(([x, y]) => [y, x])), label: 'B' }] }, 'B is the reflection of A in y = x') },
      { title: 'Rotations.', text: 'Use tracing paper: trace the shape, hold the centre with your pencil, and turn. 90° clockwise about the origin takes (x, y) to (y, −x); 90° anticlockwise takes it to (−y, x); 180° takes it to (−x, −y). Always state the centre and the direction.',
        example: { prompt: 'Rotate (2, 1) 90° clockwise about (0, 0).', steps: ['(x, y) → (y, −x)', '(1, −2)'] },
        visual: g({ xr: [-5, 5], yr: [-5, 5], polys: [{ pts: close(TRI), label: 'A' }, { pts: close(TRI.map(([x, y]) => [y, -x])), label: 'B' }], points: [[0, 0, 'centre']] }, 'B: A rotated 90° clockwise about (0, 0)') },
      { title: 'Enlargements.', text: 'Draw lines from the centre through each vertex. Scale factor 2 makes each distance from the centre twice as long; scale factor {1/2} halves it. Higher: a negative scale factor puts the image on the other side of the centre, upside down. Combining two transformations can often be described by one, and invariant points are points that do not move.',
        example: { prompt: 'Enlarge (2, 1) by scale factor 3, centre (0, 0).', steps: ['Multiply the distances by 3', '(6, 3)'] },
        visual: g({ xr: [-1, 8], yr: [-1, 8], polys: [{ pts: close([[1, 1], [3, 1], [1, 2]]), label: 'A' }, { pts: close([[3, 1], [7, 1], [3, 3]]), label: 'B' }], points: [[-1, 1, 'centre (−1, 1)']] }, 'B is A enlarged by scale factor 2, centre (−1, 1)') },
    ],
    skills: [S('maths.geometry.transform'), S('maths.geometry.transform-describe')],
    checkPlan: [['maths.geometry.transform', 1], ['maths.geometry.transform', 2], ['maths.geometry.transform', 3], ['maths.geometry.transform', 4], ['maths.geometry.transform', 4], ['maths.geometry.transform-describe', 1], ['maths.geometry.transform-describe', 1], ['maths.geometry.transform-describe', 2], ['maths.geometry.transform-describe', 2], ['maths.geometry.transform', 3]],
    limits: 'Images are plotted as points (the vertices) on the grid, by tapping or typing. Descriptions are chosen from options, not written. Negative scale factors and combinations (G8) are Higher-only levels.',
  },
  {
    id: 'maths.geometry.constructions-loci',
    topicId: 'maths.geometry',
    title: 'Constructions and loci',
    refs: ['G2', 'G1'],
    minutes: 45,
    model: 'locus-explorer',
    prerequisites: ['maths.geometry.angles'],
    big: 'A locus is the set of all points that obey a rule. Points a fixed distance from a point make a circle. Points equidistant from two points lie on the perpendicular bisector of the line joining them. Points equidistant from two intersecting lines lie on the angle bisector. Ruler-and-compass constructions make these exactly: keep the compass width the same for each pair of arcs and leave the arcs showing. Regions combine loci: "less than 3 cm from A" is inside the circle; "nearer to B than C" is B’s side of the perpendicular bisector of BC.',
    learn: [
      { title: 'Perpendicular bisector.', text: 'Open the compasses to more than half of AB. Draw arcs from A and from B, above and below the line, without changing the width. The two crossing points are each equally far from A and B; join them. Every point on this line is equidistant from A and B.',
        example: { prompt: 'Why must the arcs be more than half of AB?', steps: ['Shorter arcs from A and B would not meet', 'so there would be no crossing points to join'] },
        visual: geo({ h: 300, segs: [{ a: [150, 160], b: [450, 160] }, { a: [300, 30], b: [300, 290], colour: 'accent', dash: true }], circles: [{ c: [150, 160], r: 190, dash: true }, { c: [450, 160], r: 190, dash: true }], dots: [[150, 160], [450, 160]], labels: [{ at: [136, 186], t: 'A' }, { at: [464, 186], t: 'B' }], alt: 'Equal arcs from A and B cross above and below AB; the line through the crossings is the perpendicular bisector' }, 'Equal arcs from A and B; join the crossings') },
      { title: 'Angle bisector.', text: 'With the compass point on the vertex, draw an arc crossing both arms. From the two crossing points, draw equal arcs that meet inside the angle. Join the vertex to where they meet. Every point on the bisector is equally far from both arms. Bisecting 60° gives 30°; bisecting 90° gives 45°.',
        example: { prompt: 'How do you construct 45°?', steps: ['Construct 90° with a perpendicular', 'then bisect it'] },
        visual: geo({ h: 300, segs: [{ a: [120, 250], b: [500, 250] }, { a: [120, 250], b: [380, 40] }, { a: [120, 250], b: [500, 150], colour: 'accent', dash: true }], angles: [{ v: [120, 250], p: [500, 250], q: [500, 150], label: '', r: 120 }, { v: [120, 250], p: [500, 150], q: [380, 40], label: '', r: 128 }], dots: [[120, 250]], alt: 'An angle with its bisector drawn from the vertex' }, 'The bisector splits the angle into two equal parts') },
      { title: 'Loci and regions.', text: 'Shade only the region that obeys every rule. "Less than 3 cm from A" is inside a circle of radius 3 cm; "at least 3 cm" is on or outside it. "Within 2 cm of a line segment" is a stadium shape: parallel lines alongside it and semicircles round the ends. Use a key, and a dashed boundary for strict inequalities.',
        example: { prompt: 'Points within 2 m of a 10 m wall: what shape?', steps: ['Two 10 m lines 2 m either side', 'joined by semicircles of radius 2 m at each end'] },
        visual: g({ xr: [-7, 7], yr: [-7, 7], points: [[0, 1, 'A'], [-5, 0, 'B'], [5, 0, 'C']], fns: [], polys: [] }, 'Which points are nearer to B than to C and within 4 units of A?') },
    ],
    skills: [S('maths.geometry.constructions'), S('maths.geometry.loci')],
    checkPlan: [['maths.geometry.constructions', 1], ['maths.geometry.constructions', 1], ['maths.geometry.constructions', 2], ['maths.geometry.constructions', 3], ['maths.geometry.constructions', 3], ['maths.geometry.loci', 1], ['maths.geometry.loci', 1], ['maths.geometry.loci', 2], ['maths.geometry.loci', 2], ['maths.geometry.loci', 2]],
    limits: 'Constructions are not drawn and marked on screen: methods are chosen from options, and the investigation draws arcs for you. Drawing accurately with real compasses must be practised on paper.',
  },
  {
    id: 'maths.geometry.bearings',
    topicId: 'maths.geometry',
    title: 'Bearings, scale drawings and elevation',
    refs: ['G15', 'G20'],
    minutes: 45,
    calculator: true,
    model: 'bearing-compass',
    prerequisites: ['maths.geometry.angles', 'maths.geometry.trigonometry', 'maths.ratio.scale-similarity'],
    big: 'A bearing is an angle measured clockwise from north, at the point you are starting from, and written with three figures (east is 090°). The bearing back is 180° more or less, because the north lines are parallel. Scale drawings multiply every length by the same number. Angles of elevation are measured up from the horizontal; angles of depression down from the horizontal, and they are equal by alternate angles. Right-angled trigonometry and Pythagoras solve journeys and heights.',
    learn: [
      { title: 'Measuring bearings.', text: 'Stand at A, face north, and turn clockwise until you face B. If you turn 65°, the bearing of B from A is 065°. If B is 40° west of north, the bearing is 360 − 40 = 320°. Always draw the north line at the starting point.',
        example: { prompt: 'B is south-east of A. Bearing?', steps: ['South-east is halfway between 090° and 180°', '135°'] },
        visual: geo(bearingFig(65), 'Bearing of B from A: 065°') },
      { title: 'Back bearings.', text: 'If the bearing of B from A is 065°, the bearing of A from B is 065 + 180 = 245°. If it is 300°, the back bearing is 300 − 180 = 120°. The two north lines are parallel, so the angles at A and B are co-interior.',
        example: { prompt: 'Bearing of B from A is 210°. Bearing of A from B?', steps: ['210 − 180', '= 030°'] },
        visual: { kind: 'work', lines: ['bearing < 180°: add 180°', 'bearing ≥ 180°: subtract 180°', '065° → 245°,  300° → 120°'] } },
      { title: 'Elevation, depression and journeys.', text: 'From 30 m away the angle of elevation of a tower top is 40°: height = 30 × tan 40° ≈ 25.2 m. A ship sails 8 km north then 6 km east: it is √(64 + 36) = 10 km from the start, on a bearing of tan⁻¹({6/8}) ≈ 037°.',
        example: { prompt: 'Angle of elevation 25°, distance 50 m. Height?', steps: ['tan 25° = {h/50}', 'h = 50 × tan 25° ≈ 23.3 m'] },
        visual: geo(rtFig(30, 25.17, ['30 m', 'h', ''], '40°', 'Angle of elevation 40° from 30 m away; height h'), 'h = 30 × tan 40° ≈ 25.2 m') },
    ],
    skills: [S('maths.geometry.bearings'), S('maths.geometry.scale-drawing')],
    checkPlan: [['maths.geometry.bearings', 1], ['maths.geometry.bearings', 1], ['maths.geometry.bearings', 2], ['maths.geometry.bearings', 2], ['maths.geometry.bearings', 3], ['maths.geometry.scale-drawing', 1], ['maths.geometry.scale-drawing', 1], ['maths.geometry.scale-drawing', 2], ['maths.geometry.scale-drawing', 3], ['maths.geometry.scale-drawing', 3]],
    limits: 'Calculator lesson. Bearings are typed as numbers (65 or 065 both mark correct); the three-figure form is taught but not enforced. Measuring with a protractor on paper is not marked.',
  },
];

export const geometryOrder2 = ['maths.geometry.pythagoras', 'maths.geometry.trigonometry', 'maths.geometry.transformations', 'maths.geometry.constructions-loci', 'maths.geometry.bearings'];
export const orderedGeometry2 = geometryOrder2.map(id => geometryLessons2.find(l => l.id === id));
