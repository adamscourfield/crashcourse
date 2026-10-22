# Maths Geometry batch 01: angles, polygons, area, circles, volume

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

This batch opens the fourth Maths topic, Geometry and measures (`maths.geometry`). The course map now lists it as available. Probability and Statistics are still planned.

## Specification

The specification is Pearson Edexcel 1MA1, Issue 2, statements G1–G25. The statement list in `curriculum/maths-geometry-requirements.csv` is paraphrased; it was not re-fetched from Pearson in this batch, so the wording and Higher-only boundaries should be re-checked against the PDF during review. Higher-only parts as recorded:
- G7: negative scale factors;
- G8, G10, G22 and G23: whole statements;
- G19: areas and volumes of similar figures;
- G20: general triangles and 3D;
- G25: vector arguments and proofs.

This batch covers G3, G4, G16 and G18, and parts of G1, G6, G9, G14 and G17. Every other statement is mapped to a planned batch.

## Lessons (Geometry 1–5)

| Lesson ID | Title | Refs | Skills (levels) | Investigation |
|---|---|---|---|---|
| maths.geometry.angles | Angle facts and parallel lines | G1, G3, G6 | angle-facts (3: lines and points, triangles, isosceles and exterior), parallel (3: name the pair, find an angle, two steps) | Turn a ray on a straight line; the missing angle in a triangle; pick the alternate angle |
| maths.geometry.polygons | Polygons and quadrilaterals | G3, G4 | polygon-angles (3: sums, regular polygons, a missing angle), quad-props (3: which shape always has a property, two properties and symmetry, angles in parallelograms and kites) | Split polygons into n − 2 triangles; the exterior angle of a regular octagon |
| maths.geometry.area | Area and perimeter | G16, G17, G14 | area-shapes (3: triangles and parallelograms, trapezia, working backwards), compound-shapes (3: L-shape area, perimeter with missing lengths, shaded areas) | Cut and move a triangle to turn a parallelogram into a rectangle; two trapezia make a parallelogram |
| maths.geometry.circles (calculator) | Circles, arcs and sectors | G9, G17, G18 | circle-measure (3: 1 d.p., in terms of π, working backwards), arcs-sectors (3: arc, area, perimeter and exact answers) | C ÷ d for three circles is π; circumference with d = 7; a 45° sector as a fraction |
| maths.geometry.volume (calculator) | Volume and surface area | G16, G17 | volume (3: cuboids and capacity, triangular prisms, cylinders), surface-area (3: cuboid, cylinder, sphere/cone/pyramid volumes with formulae given) | Stack 6 cm² layers into a prism; cylinder volume as 45π |

All five lessons are for both tiers. The engine now has 126 skills.

## Engine

- **Figures.** New `geomfig.js` draws JSON-safe figure specs:
  - polygons, segments (dashed for hidden edges), circles, ellipses, sectors;
  - angle arcs and right-angle marks;
  - equal-side ticks and parallel arrows;
  - dimension labels;
  - a "Not drawn accurately" note.
- **Figures in questions.** Each generated question carries `item.fig`, built from the same numbers as the prompt. The studio shows it above the answer box. Worked-example cards use the new `geo` visual kind.
- **Calculator flags.** All 1 d.p. π answers are flagged as calculator items. A 1 d.p. answer accepts 0.05 either side of the rounded value.

## Defects found and fixed during QA

- **Quadrilateral distractors were also correct.** The first quadrilateral skill had distractors that also had the stated property. For example, "diagonals bisect each other" offered rectangle, rhombus and square as wrong answers. The skill was rebuilt on a property table so that every distractor provably lacks the property; a test written from an independent table checks every option.
- **Wrong kite wording.** One prompt placed the equal angles of a kite "between its unequal sides"; they are where the equal sides meet.
- **Duplicate "x" labels.** Angles-round-a-point items labelled two angles "x" when a known angle had the same value as x.
- **Two wrong traps:**
  - an area trap ("Square the radius") that was the diameter squared;
  - a pyramid trap message that was too short.
- **"a octagon".** Fixed.
- **Wrong cut-and-move picture.** The moved triangle did not complete a rectangle. It was caught in screenshot review.
- **Wrong acceptance.** The circumference check accepted 21.98, the value from π = 3.14.

## Misconceptions targeted

**Angles**
- 360° used on a straight line, and the reverse.
- Only one angle subtracted.
- Co-interior angles taken as equal.
- Corresponding and alternate confused.

**Polygons**
- n triangles instead of n − 2.
- The exterior sum confused with the interior sum.
- Interior and exterior angles swapped.
- Rectangle and rhombus diagonals taken as lines of symmetry.

**Area**
- The sloping side used as the height.
- Halving a parallelogram.
- Multiplying the parallel sides of a trapezium.
- The cut-out corner not subtracted.
- Missing sides left out of a perimeter.

**Circles**
- Using the diameter in πr².
- Mixing up 2πr and πr².
- Dividing the sector angle by 100.
- Rounding 3.14 × d results.

**Volume**
- Using the whole rectangle instead of the triangular cross-section.
- Mixing up surface area and volume.
- Forgetting to square the radius.
- 2πrh given as the volume.
- Leaving out the {1/3} for cones and pyramids.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-geometry.test.js` has 9 tests.<br>• **Generation:** all 10 skills at every level (200 items each) are deterministic, JSON-safe and self-marking. Traps (numeric and exact π) are wrong and explained, and every figure renders.<br>• **Re-solved from the printed or drawn data:**<br>&nbsp;&nbsp;– angle answers from the printed labels;<br>&nbsp;&nbsp;– angles measured from the drawn rays and parallel-line figures;<br>&nbsp;&nbsp;– the parallel-line relation classified geometrically from the drawing;<br>&nbsp;&nbsp;– polygon sums;<br>&nbsp;&nbsp;– quadrilateral options checked against a property table written in the test;<br>&nbsp;&nbsp;– areas from the dimension labels;<br>&nbsp;&nbsp;– L-shape areas by the shoelace formula on the drawn outline;<br>&nbsp;&nbsp;– circle, arc, sector and solid answers recomputed with `Math.PI` and rounded independently;<br>&nbsp;&nbsp;– sector figures drawn to their angle.<br>• **Records:** lesson records, calculator flags matching the items, Foundation availability, and the stale-redraw guard for all five models.<br>• **Dispatch:** the visual-dispatch test now includes Geometry. |
| Interaction | `science-app/tools/maths-browser-flow-11.mjs`, 77 checks pass:<br>• course map and topic switch;<br>• 15 card visuals;<br>• calculator badges;<br>• all five investigations with 16 wrong paths;<br>• reload keeps a typed answer and the polygon;<br>• question figures in practice;<br>• exact π answers accepted and π traps explained;<br>• the polygons lesson practised to mastery and checked at 10/10, with topic progress 1/5;<br>• Higher listing;<br>• 390px: 15 screens with no overflow;<br>• no console errors.<br>Flow 9 now expects Geometry to be available. |
| Regression | 527 automated tests pass. All eleven Maths walk-throughs pass: 86, 68, 62, 94, 69, 64, 78, 53, 70, 46 and 77 checks, 767 in total. Flow 1 has one conditional check that depends on the random items drawn. Flows 4 and 9 now expect Geometry to be available. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

## Known limitations

- **Diagrams are generated.**
  - Triangles may be squashed to fit and polygons with a missing angle are drawn regular; both are labelled "Not drawn accurately".
  - Measuring with a protractor or ruler is not practised.
- **Reasons are not marked.** Written angle reasons are shown in solutions but not marked.
- **Units are not marked.**
- **Not yet built:**
  - surface area of spheres and cones;
  - composite solids and frustums;
  - finding a sector angle from its arc or area;
  - chord, tangent and segment vocabulary.
- **Not reviewed.** Item wording and difficulty have not been reviewed by a maths teacher.

## Cache

Maths modules are at `20261022-maths-r7`. **Publishing needs a global version bump.**

## Next

Geometry batch 2:
- Pythagoras and trigonometry (G20, G21);
- transformations (G7, G8, G24);
- constructions and loci (G2);
- bearings and scale drawing (G15).
