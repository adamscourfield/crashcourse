// Edexcel GCSE (9–1) Mathematics 1MA1 — Geometry and measures, batch 4 (gap closing).
//   G16, G17 surface area of spheres, hemispheres and cones (including the slant height), composite
//   solids, volumes of composite solids, equal volumes, and frustums (Higher).
//   (G1 three-letter angle notation is a skill in the angles lesson, lessons-geometry.js.)
// All teaching text and questions are original.
import { skillById } from './skills.js?v=20261023-maths-r15';
import { sphereFig, coneFig, cylTopFig, frustumFig } from './skills-geometry4.js?v=20261023-maths-r15';

const S = id => skillById[id];
const geo = (fig, caption) => ({ kind: 'geo', fig, caption });

export const geometryLessons4 = [
  {
    id: 'maths.geometry.spheres-cones',
    topicId: 'maths.geometry',
    title: 'Spheres, cones and composite solids',
    refs: ['G17', 'G16'],
    minutes: 50,
    model: 'solid-builder',
    calculator: true,
    prerequisites: ['maths.geometry.volume', 'maths.geometry.pythagoras'],
    big: 'The exam gives the formulae for spheres and cones: surface area of a sphere 4πr², volume {4/3}πr³; curved surface of a cone πrl, volume {1/3}πr²h. A hemisphere is half a sphere, and a solid one also has a flat circular face. The slant height l of a cone comes from Pythagoras: l² = r² + h². For a composite solid, add the parts for volume; for surface area, add only the faces on the outside. Answers "in terms of π" keep π as a symbol: 75π, not 235.6.',
    learn: [
      { title: 'Spheres and hemispheres.', text: 'A sphere of radius 5 cm has surface area 4 × π × 5² = 100π cm². A solid hemisphere of radius 5 cm has a curved surface of half of that, 50π, plus a flat circle of π × 5² = 25π: 75π cm² in all. Square the radius before multiplying.',
        example: { prompt: 'Solid hemisphere, radius 4 cm. Total surface area in terms of π.', steps: ['curved: 2π × 4² = 32π', 'flat: π × 4² = 16π', 'total 48π cm²'] },
        visual: geo(sphereFig(5, true), 'Curved surface 2πr², plus the flat face πr²') },
      { title: 'Cones and the slant height.', text: 'The curved surface of a cone is πrl, where l is the slant height along the side, not the vertical height. A cone with radius 6 cm and height 8 cm has l² = 6² + 8² = 100, so l = 10 cm and the curved surface is π × 6 × 10 = 60π cm². A solid cone adds its base: 60π + 36π = 96π cm².',
        example: { prompt: 'Cone r = 5 cm, h = 12 cm. Curved surface?', steps: ['l = √(25 + 144) = 13', 'π × 5 × 13 = 65π cm²'] },
        visual: geo(coneFig({ r: '6 cm', h: '8 cm', l: 'l' }, 'Cone with radius 6 cm, height 8 cm and slant height l'), 'l² = 6² + 8², so l = 10 cm') },
      { title: 'Composite solids.', text: 'A cylinder of radius 3 cm and height 10 cm with a hemisphere on top has volume π × 3² × 10 + half of {4/3}π × 3³ = 90π + 18π = 108π cm³. For its surface, count only the outside: the hemisphere\'s curved surface, the cylinder\'s curved surface and the base, not the circle where they join.',
        example: { prompt: 'Same solid: surface area?', steps: ['hemisphere 2π × 9 = 18π', 'cylinder 2π × 3 × 10 = 60π', 'base 9π', 'total 87π cm²'] },
        visual: geo(cylTopFig(3, 10, 'hemi', 0, 'Cylinder of radius 3 cm and height 10 cm with a hemisphere on top'), 'Add the volumes; count only the outside faces') },
      { title: 'Equal volumes and frustums.', text: 'When a solid is melted and recast, the volume stays the same: a sphere of radius 3 cm (36π cm³) makes a cylinder of radius 2 cm and height 36π ÷ 4π = 9 cm. Higher: a frustum is a cone with its top cut off. Find the small cone\'s radius by similarity, then subtract the small cone\'s volume from the large one.',
        example: { prompt: 'Cone R = 6, H = 12; cut off a cone of height 4. Small radius?', steps: ['scale factor 4 ÷ 12 = {1/3}', 'small radius 6 × {1/3} = 2 cm'] },
        visual: geo(frustumFig(6, 12, 4, 'Frustum: cone of radius 6 cm and height 12 cm with a 4 cm cone cut off'), 'Frustum = large cone − small cone') },
    ],
    skills: [S('maths.geometry.sphere-cone-area'), S('maths.geometry.composite-volume')],
    checkPlan: [['maths.geometry.sphere-cone-area', 1], ['maths.geometry.sphere-cone-area', 1], ['maths.geometry.sphere-cone-area', 2], ['maths.geometry.sphere-cone-area', 2], ['maths.geometry.sphere-cone-area', 3], ['maths.geometry.composite-volume', 1], ['maths.geometry.composite-volume', 1], ['maths.geometry.composite-volume', 2], ['maths.geometry.composite-volume', 2], ['maths.geometry.composite-volume', 3]],
    limits: 'Formulae for spheres and cones are given in each question, as in the exam. Frustums are Higher only (Foundation checks use level 2 instead). Units are shown but not marked.',
  },
];

export const geometryOrder4 = ['maths.geometry.spheres-cones'];
export const orderedGeometry4 = geometryOrder4.map(id => geometryLessons4.find(l => l.id === id));
