// Edexcel GCSE (9–1) Mathematics 1MA1 — Geometry and measures, batch 1.
// Specification references (Issue 2; Foundation and Higher lists compared 22 October 2026):
//   G1 notation and terms · G3 angles at a point, on a line, vertically opposite, parallel lines,
//   triangles and polygons · G4 properties of quadrilaterals · G6 using angle facts in reasoning ·
//   G9 circle terms · G14 units · G16 area of rectangles, triangles, parallelograms, trapezia; volume
//   of cuboids and prisms · G17 circles, composite shapes, cylinders; spheres, cones, pyramids (formulae
//   given) · G18 arcs and sectors.
// Not in this batch: constructions and loci (G2), congruence and similarity (G5, G19), transformations
// (G7, G8), circle theorems (G10), coordinates (G11), plans and elevations (G12, G13), bearings (G15),
// Pythagoras and trigonometry (G20–G23), vectors (G24, G25).
// All teaching text and questions are original.
import { skillById } from './skills.js?v=20261023-maths-r9';
import { raysFig, triFig, parallelFig, polygonFig, circleFig, sectorFig, cuboidFig, prismFig, cylFig } from './skills-geometry.js?v=20261023-maths-r9';

const S = id => skillById[id];
const geo = (fig, caption) => ({ kind: 'geo', fig, caption });
const NOTE = 'Not drawn accurately';
// Fixed teaching figures (same spec format as the question figures).
const paraFig = { h: 270, polys: [{ pts: [[120, 220], [420, 220], [500, 60], [200, 60]] }, { pts: [[120, 220], [200, 220], [200, 60]], fill: '#a8d5b533' }, { pts: [[420, 220], [500, 220], [500, 60]], fill: '#a8d5b533', dash: true }], segs: [{ a: [200, 60], b: [200, 220], dash: true }, { a: [420, 220], b: [500, 220], dash: true }, { a: [500, 220], b: [500, 60], dash: true }], angles: [{ v: [200, 220], p: [420, 220], q: [200, 60], right: true }], dims: [{ a: [120, 220], b: [420, 220], t: 'b', off: -22 }, { a: [200, 220], b: [200, 60], t: 'h', off: -20 }], note: NOTE, alt: 'Parallelogram: the triangle cut from the left end moves to the right end, making a rectangle b by h' };
const trapFig = { h: 260, polys: [{ pts: [[100, 210], [500, 210], [400, 50], [160, 50]] }], segs: [{ a: [160, 50], b: [160, 210], dash: true }], angles: [{ v: [160, 210], p: [500, 210], q: [160, 50], right: true }], par: [{ a: [160, 50], b: [400, 50], n: 1 }, { a: [100, 210], b: [500, 210], n: 1 }], dims: [{ a: [160, 50], b: [400, 50], t: '6 cm', off: 18 }, { a: [100, 210], b: [500, 210], t: '10 cm', off: -22 }, { a: [160, 210], b: [160, 50], t: '4 cm', off: -20 }], note: NOTE, alt: 'Trapezium with parallel sides 6 cm and 10 cm and height 4 cm' };
const lFig = { h: 320, polys: [{ pts: [[150, 40], [360, 40], [360, 100], [450, 100], [450, 280], [150, 280]] }], dims: [{ a: [150, 280], b: [450, 280], t: '10 cm', off: -22 }, { a: [150, 40], b: [150, 280], t: '8 cm', off: 26 }, { a: [150, 40], b: [360, 40], t: '7 cm', off: 18 }, { a: [450, 100], b: [450, 280], t: '6 cm', off: -28 }], note: NOTE, alt: 'L-shape: 10 cm by 8 cm with a 3 cm by 2 cm corner removed' };

export const geometryTopic = {
  id: 'maths.geometry', title: 'Geometry and measures', short: 'Geometry', number: '04', status: 'partial',
  coverage: 'Five lessons so far: angle facts on lines, at points, in triangles and with parallel lines; angles in polygons and properties of quadrilaterals; area and perimeter of rectangles, triangles, parallelograms, trapezia and compound shapes; circumference and area of circles, arcs and sectors; volume and surface area of prisms, cylinders, spheres, cones and pyramids. Every question has its own diagram. Pythagoras, trigonometry, transformations, constructions, similarity, circle theorems and vectors come next.',
};

export const geometryLessons = [
  {
    id: 'maths.geometry.angles',
    topicId: 'maths.geometry',
    title: 'Angle facts and parallel lines',
    refs: ['G1', 'G3', 'G6'],
    minutes: 45,
    model: 'angle-explorer',
    prerequisites: ['maths.algebra.linear-equations'],
    big: 'Angles on a straight line add up to 180°, angles around a point add up to 360° and angles in a triangle add up to 180°. Vertically opposite angles are equal. An isosceles triangle has two equal sides and two equal base angles. With parallel lines, corresponding angles (F) are equal, alternate angles (Z) are equal and co-interior angles (C) add up to 180°. Give the reason for each step.',
    learn: [
      { title: 'Lines, points and triangles.', text: 'On a straight line, 70° and x make 180°, so x = 110°. Around a point the angles make 360°. In a triangle, 50° + 60° + x = 180°, so x = 70°. An exterior angle of a triangle equals the sum of the two interior angles opposite it.',
        example: { prompt: 'Two angles of a triangle are 48° and 77°. Find the third.', steps: ['180 − 48 − 77', '= 55°'] },
        visual: geo(triFig(50, 60, ['50°', '60°', 'x']), 'Angles in a triangle add up to 180°') },
      { title: 'Isosceles triangles.', text: 'Equal sides are marked with dashes. The angles opposite them, the base angles, are equal. If the top angle is 40°, the base angles share 140°: 70° each. If a base angle is 65°, the top angle is 180 − 2 × 65 = 50°.',
        example: { prompt: 'An isosceles triangle has a top angle of 36°. Find a base angle.', steps: ['180 − 36 = 144', '144 ÷ 2 = 72°'] },
        visual: geo(triFig(70, 70, ['70°', '70°', '40°'], { iso: true }), 'Base angles are equal') },
      { title: 'Parallel lines.', text: 'A line crossing two parallel lines makes matching angles. Corresponding angles sit in the same position at each crossing (F shape) and are equal. Alternate angles are between the parallel lines on opposite sides (Z shape) and are equal. Co-interior angles are between the lines on the same side (C shape) and add up to 180°.',
        example: { prompt: 'Alternate to an angle of 64°. Find it.', steps: ['Alternate angles are equal', '64°'] },
        visual: geo(parallelFig(60, [{ at: 'P', quad: 'bl', label: '60°' }, { at: 'Q', quad: 'tr', label: '60°' }, { at: 'Q', quad: 'tl', label: '120°' }]), 'Alternate angles equal; co-interior angles add to 180°') },
    ],
    skills: [S('maths.geometry.angle-facts'), S('maths.geometry.parallel')],
    checkPlan: [['maths.geometry.angle-facts', 1], ['maths.geometry.angle-facts', 1], ['maths.geometry.angle-facts', 2], ['maths.geometry.angle-facts', 3], ['maths.geometry.angle-facts', 3], ['maths.geometry.parallel', 1], ['maths.geometry.parallel', 2], ['maths.geometry.parallel', 2], ['maths.geometry.parallel', 3], ['maths.geometry.parallel', 3]],
    limits: 'Diagrams are generated and marked "not drawn accurately". The angle is marked; the written reason is shown in each worked solution but not marked. Angle problems with algebra are practised in the Algebra lesson on forming equations.',
  },
  {
    id: 'maths.geometry.polygons',
    topicId: 'maths.geometry',
    title: 'Polygons and quadrilaterals',
    refs: ['G3', 'G4'],
    minutes: 40,
    model: 'polygon-split',
    prerequisites: ['maths.geometry.angles'],
    big: 'A polygon with n sides splits into n − 2 triangles from one corner, so its interior angles add up to (n − 2) × 180°. The exterior angles of any polygon add up to 360°, so a regular polygon with n sides has exterior angles of 360 ÷ n and interior angles of 180° minus that. Quadrilaterals are defined by their sides, angles, diagonals and symmetry: square, rectangle, rhombus, parallelogram, trapezium and kite.',
    learn: [
      { title: 'Interior angles.', text: 'A hexagon splits into 4 triangles from one corner, so its angles add up to 4 × 180 = 720°. A pentagon makes 3 triangles: 540°. To find a missing angle, subtract the known angles from the total.',
        example: { prompt: 'Find the sum of the interior angles of an octagon.', steps: ['8 − 2 = 6 triangles', '6 × 180 = 1080°'] },
        visual: geo(polygonFig(6, ['120°', '120°', '120°', '120°', '120°', '120°']), 'A regular hexagon: six angles of 120°, total 720°') },
      { title: 'Regular polygons.', text: 'Walking round any polygon you turn through 360° in total, so the exterior angles add up to 360°. A regular pentagon has exterior angles of 360 ÷ 5 = 72° and interior angles of 180 − 72 = 108°. If each interior angle is 150°, each exterior angle is 30° and there are 360 ÷ 30 = 12 sides.',
        example: { prompt: 'Each exterior angle of a regular polygon is 40°. How many sides?', steps: ['360 ÷ 40 = 9'] },
        visual: geo(polygonFig(5, ['108°', '108°', '108°', '108°', '108°']), 'Regular pentagon: interior 108°, exterior 72°') },
      { title: 'Quadrilaterals.', text: 'A rhombus has 4 equal sides and diagonals that cross at right angles. A rectangle has 4 right angles and equal diagonals. A parallelogram has two pairs of parallel sides, opposite angles equal and neighbouring angles adding to 180°. A trapezium has exactly one pair of parallel sides. A kite has two pairs of equal adjacent sides.',
        example: { prompt: 'In a parallelogram one angle is 70°. Find the other three.', steps: ['Opposite: 70°', 'Neighbours: 180 − 70 = 110°, twice'] },
        visual: { kind: 'work', lines: ['square ⊂ rectangle ⊂ parallelogram', 'square ⊂ rhombus ⊂ parallelogram', 'trapezium: exactly one pair of parallel sides'] } },
    ],
    skills: [S('maths.geometry.polygon-angles'), S('maths.geometry.quad-props')],
    checkPlan: [['maths.geometry.polygon-angles', 1], ['maths.geometry.polygon-angles', 2], ['maths.geometry.polygon-angles', 2], ['maths.geometry.polygon-angles', 3], ['maths.geometry.polygon-angles', 3], ['maths.geometry.quad-props', 1], ['maths.geometry.quad-props', 1], ['maths.geometry.quad-props', 2], ['maths.geometry.quad-props', 3], ['maths.geometry.quad-props', 3]],
    limits: 'Missing-angle polygons are drawn regular and marked "not drawn accurately". Symmetry of quadrilaterals is described in words; drawing lines of symmetry is not marked.',
  },
  {
    id: 'maths.geometry.area',
    topicId: 'maths.geometry',
    title: 'Area and perimeter',
    refs: ['G16', 'G17', 'G14'],
    minutes: 45,
    model: 'area-cutter',
    prerequisites: ['maths.number.units'],
    big: 'Perimeter is the distance around a shape; area is the space inside, in square units. Rectangle: length × width. Triangle: {1/2} × base × perpendicular height. Parallelogram: base × perpendicular height. Trapezium: {1/2}(a + b)h, where a and b are the parallel sides. Always use the perpendicular height, not a sloping side. Split compound shapes into rectangles and triangles, or subtract a missing piece.',
    learn: [
      { title: 'Triangles and parallelograms.', text: 'Cut a triangle off one end of a parallelogram and move it to the other end: it becomes a rectangle with the same base and height, so area = base × perpendicular height. A triangle is half of a parallelogram: {1/2} × base × height. The sloping side is not used.',
        example: { prompt: 'Triangle: base 10 cm, perpendicular height 7 cm, sloping side 8 cm. Area?', steps: ['{1/2} × 10 × 7', '= 35 cm²'] },
        visual: geo(paraFig, 'Cut and move: the parallelogram becomes a rectangle b × h') },
      { title: 'Trapezia.', text: 'Two copies of a trapezium, one turned over, make a parallelogram with base a + b. So one trapezium has area {1/2}(a + b)h. With parallel sides 6 cm and 10 cm and height 4 cm: {1/2} × 16 × 4 = 32 cm².',
        example: { prompt: 'Parallel sides 5 cm and 9 cm, height 6 cm. Area?', steps: ['{1/2} × (5 + 9) × 6', '= 42 cm²'] },
        visual: geo(trapFig, '{1/2}(6 + 10) × 4 = 32 cm²') },
      { title: 'Compound shapes and perimeter.', text: 'An L-shape is a big rectangle with a corner removed: subtract, or split it into two rectangles. Find missing lengths by subtracting: if the bottom is 12 cm and the top is 7 cm, the step is 5 cm. For perimeter, add every edge, including the missing ones.',
        example: { prompt: 'A 10 by 8 rectangle with a 3 by 2 corner removed. Area?', steps: ['80 − 6', '= 74 cm²'] },
        visual: geo(lFig, 'Area 80 − 6 = 74 cm²; perimeter 2 × (10 + 8) = 36 cm') },
    ],
    skills: [S('maths.geometry.area-shapes'), S('maths.geometry.compound-shapes')],
    checkPlan: [['maths.geometry.area-shapes', 1], ['maths.geometry.area-shapes', 1], ['maths.geometry.area-shapes', 2], ['maths.geometry.area-shapes', 2], ['maths.geometry.area-shapes', 3], ['maths.geometry.compound-shapes', 1], ['maths.geometry.compound-shapes', 1], ['maths.geometry.compound-shapes', 2], ['maths.geometry.compound-shapes', 3], ['maths.geometry.compound-shapes', 3]],
    limits: 'Answers are numbers in the units shown; writing the units is taught but not marked. Converting area units is practised in the Ratio lesson on compound units.',
  },
  {
    id: 'maths.geometry.circles',
    topicId: 'maths.geometry',
    title: 'Circles, arcs and sectors',
    refs: ['G9', 'G17', 'G18'],
    minutes: 45,
    calculator: true,
    model: 'circle-unroll',
    prerequisites: ['maths.geometry.area', 'maths.number.exact'],
    big: 'The circumference of a circle is πd = 2πr and its area is πr². The radius is half the diameter. Give answers to the accuracy asked, or exactly in terms of π. A sector with angle θ is the fraction {θ/360} of the circle: arc length {θ/360} × 2πr and sector area {θ/360} × πr². The perimeter of a sector is the arc plus two radii.',
    learn: [
      { title: 'Circumference and area.', text: 'For every circle, circumference ÷ diameter = π ≈ 3.14159. A circle of radius 5 cm has circumference 2π × 5 = 10π ≈ 31.4 cm and area π × 5² = 25π ≈ 78.5 cm². If you are given the diameter, halve it before finding the area.',
        example: { prompt: 'Diameter 12 cm. Area to 1 d.p.?', steps: ['r = 6 cm', 'π × 6² = 113.097…', '113.1 cm²'] },
        visual: geo(circleFig(5, '5 cm', false), 'C = 2πr, A = πr²') },
      { title: 'Arcs and sectors.', text: 'A 90° sector is a quarter of the circle. A 72° sector is {72/360} = {1/5} of it. Radius 10 cm, angle 72°: arc = {1/5} × 20π = 4π ≈ 12.6 cm; area = {1/5} × 100π = 20π ≈ 62.8 cm².',
        example: { prompt: 'Radius 6 cm, angle 120°. Sector area in terms of π?', steps: ['{120/360} = {1/3}', '{1/3} × 36π = 12π cm²'] },
        visual: geo(sectorFig(10, 72, '10 cm', '72°'), 'A 72° sector is {1/5} of the circle') },
      { title: 'Working backwards.', text: 'If the area is 49π cm², then r² = 49 and r = 7 cm. If the circumference is 31.4 cm, then d = 31.4 ÷ π ≈ 10 cm. The perimeter of a sector adds the two straight edges, each a radius, to the arc.',
        example: { prompt: 'Area 64π cm². Radius?', steps: ['r² = 64', 'r = 8 cm'] },
        visual: { kind: 'work', lines: ['πr² = 49π', 'r² = 49', 'r = 7 cm'] } },
    ],
    skills: [S('maths.geometry.circle-measure'), S('maths.geometry.arcs-sectors')],
    checkPlan: [['maths.geometry.circle-measure', 1], ['maths.geometry.circle-measure', 1], ['maths.geometry.circle-measure', 2], ['maths.geometry.circle-measure', 2], ['maths.geometry.circle-measure', 3], ['maths.geometry.arcs-sectors', 1], ['maths.geometry.arcs-sectors', 1], ['maths.geometry.arcs-sectors', 2], ['maths.geometry.arcs-sectors', 2], ['maths.geometry.arcs-sectors', 3]],
    limits: 'Calculator lesson. Answers to 1 decimal place accept 0.05 either side of the rounded value. Answers in terms of π are typed with the π button, for example 12π.',
  },
  {
    id: 'maths.geometry.volume',
    topicId: 'maths.geometry',
    title: 'Volume and surface area',
    refs: ['G16', 'G17'],
    minutes: 45,
    calculator: true,
    model: 'prism-builder',
    prerequisites: ['maths.geometry.area', 'maths.geometry.circles'],
    big: 'The volume of a prism is the area of its cross-section × its length: a cuboid is length × width × height, and a cylinder is πr²h. Surface area is the total area of all the faces: a cuboid has three pairs of equal rectangles; a closed cylinder has two circles and a curved rectangle of width 2πr. For spheres, cones and pyramids, the formulae are given in the question: substitute carefully.',
    learn: [
      { title: 'Prisms and cylinders.', text: 'A prism has the same cross-section all the way along. Stack layers: a triangular cross-section of 12 cm² and length 10 cm gives 12 × 10 = 120 cm³. A cylinder with radius 3 cm and height 10 cm has volume π × 9 × 10 = 90π ≈ 282.7 cm³.',
        example: { prompt: 'Cuboid 5 cm × 4 cm × 3 cm. Volume?', steps: ['5 × 4 × 3 = 60 cm³'] },
        visual: geo(prismFig(6, 4, 10), 'Volume = cross-section area × length') },
      { title: 'Surface area.', text: 'A cuboid 5 × 4 × 3 has faces 20, 20, 15, 15, 12, 12: total 94 cm². A closed cylinder unrolls into two circles and a rectangle 2πr wide and h high: 2πr² + 2πrh.',
        example: { prompt: 'Cylinder r = 2 cm, h = 5 cm. Surface area to 1 d.p.?', steps: ['2π × 4 + 2π × 2 × 5', '= 8π + 20π = 28π', '≈ 88.0 cm²'] },
        visual: geo(cylFig(3, 10), 'Two circles and a curved rectangle') },
      { title: 'Spheres, cones and pyramids.', text: 'Sphere: V = {4/3}πr³. Cone: V = {1/3}πr²h. Pyramid: V = {1/3} × base area × height. A cone holds a third of the cylinder with the same base and height. Cube the radius for a sphere, and square it for a cone.',
        example: { prompt: 'Sphere radius 3 cm. Volume to 1 d.p.?', steps: ['{4/3} × π × 27', '= 36π ≈ 113.1 cm³'] },
        visual: geo(cuboidFig(5, 4, 3), 'Cuboid: 5 × 4 × 3 = 60 cm³') },
    ],
    skills: [S('maths.geometry.volume'), S('maths.geometry.surface-area')],
    checkPlan: [['maths.geometry.volume', 1], ['maths.geometry.volume', 1], ['maths.geometry.volume', 2], ['maths.geometry.volume', 2], ['maths.geometry.volume', 3], ['maths.geometry.surface-area', 1], ['maths.geometry.surface-area', 1], ['maths.geometry.surface-area', 2], ['maths.geometry.surface-area', 3], ['maths.geometry.surface-area', 3]],
    limits: 'Calculator lesson. Formulae for spheres, cones and pyramids are given, as on the exam paper. Surface areas of cones and spheres, and frustums, come in a later batch.',
  },
];

export const geometryOrder = ['maths.geometry.angles', 'maths.geometry.polygons', 'maths.geometry.area', 'maths.geometry.circles', 'maths.geometry.volume'];
export const orderedGeometry = geometryOrder.map(id => geometryLessons.find(l => l.id === id));
