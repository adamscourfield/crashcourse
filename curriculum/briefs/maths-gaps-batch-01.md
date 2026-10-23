# Maths gap-closing batch 01: G17, G1, A13 (and an N13 record correction)

Date: 23 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

This batch closes the gaps that the Maths requirement files still recorded after all six content areas were built.

## What changed

| Gap (as recorded) | What was built | Where |
|---|---|---|
| **G17** Surface area of spheres and cones, composite solids and frustums "planned for batch 3" (never built) | New lesson `maths.geometry.spheres-cones` (Spheres, cones and composite solids; G17, G16; both tiers; calculator) with two skills, four cards and a `solid-builder` investigation | `skills-geometry4.js`, `lessons-geometry4.js`, `models-geometry4.js` |
| **G1** Three-letter angle notation and diagrams from descriptions "planned for batch 3" (never built) | New skill `maths.geometry.angle-notation` and a fourth card in the angles lesson | `skills-geometry4.js`, `lessons-geometry.js` |
| **A13** Transformations of trigonometric graphs not practised | Third (Higher) level on `maths.algebra.graph-transform`; one sentence added to the transforming-graphs card; the lesson's check now includes it | `skills-graphs.js`, `lessons-algebra.js` |
| **N13** "Rates of pay and flow not practised" | **Nothing built: the record was wrong.** Rates of pay are already practised in `number.units.time` and flow rates in `ratio.unit-convert`. The requirement row is corrected. | `maths-number-requirements.csv` |

Geometry now has 16 lessons (14 at Foundation). The engine has 164 skills.

## Skills

| Skill | Levels (H = Higher-only) | Answers |
|---|---|---|
| `geometry.angle-notation` | Which angle is marked? (choose the three-letter name of an arc drawn in a lettered quadrilateral with a diagonal) · Use angles given by three letters (triangle) · From a written description (isosceles triangle described in words, no diagram) | choice; integers |
| `geometry.sphere-cone-area` | Spheres and hemispheres · Cones, including the slant height by Pythagoras (Pythagorean triples) · Composite solids (cylinder with a hemisphere or a cone; outside faces only) | in terms of π, or 1 d.p. |
| `geometry.composite-volume` | Cylinder with a hemisphere or a cone · Melting and recasting (sphere into cylinder; whole-number heights) · H: frustums (small cone's radius by similarity) | in terms of π, whole numbers, or 1 d.p. |
| `algebra.graph-transform` level 3 (H) | Choose the equation of a dashed transformed sin or cos curve; or where the maximum moves | choice; coordinates |

Formulae for spheres and cones are printed in every question, as on the exam paper.

## Misconceptions targeted

- **Angle names:** the vertex is not the middle letter; right vertex but wrong arms. Base angle versus top angle in a described isosceles triangle.
- **Spheres and cones:**
  - hemisphere without its flat face, or as a whole sphere;
  - radius doubled instead of squared;
  - volume formula used for area;
  - vertical height used instead of the slant height;
  - curved surface versus total surface.
- **Composite solids:**
  - counting the hidden joining circle, or missing the base;
  - a whole sphere on top instead of half;
  - a cone as ½ or a whole cylinder.
- **Equal volumes:** dividing by r instead of r²; keeping π.
- **Frustums:** the whole cone; treating the frustum as a cone of its own height; the small cone with the large radius.
- **Trig transformations:** the direction of a horizontal shift (inside the bracket the opposite way); vertical versus horizontal.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-geometry4.test.js` has 6 tests.<br>• **Generation:** all three skills, 200 items per level: deterministic, JSON-safe, self-marking. Traps (including π traps) are wrong and explained. Frustums are the only Higher level.<br>• **Angle names** are checked against the drawn vertices: the right option names the arc's vertex and arms, and no second option names the same angle (ABC = CBA).<br>• **Areas and volumes** are re-solved from the drawn radius, height and slant height, and from the printed measurements. The frustum's drawn heights add up to the whole cone.<br>• **Trig transformations** (`tests/maths-graphs.test.js`): each option is turned into a function in the test; only the right one matches the dashed curve at 73 points, and the maximum-point answers are where the transformed curve is largest. |
| Interaction | `science-app/tools/maths-browser-flow-16.mjs`, 46 checks pass (the count varies by one with the first random practice item):<br>• the angles lesson has four cards, reaches the notation skill in practice and explains a wrong angle name;<br>• three notation check items are answered after a reload;<br>• spheres-cones cards, and the investigation with seven wrong paths and resume of a typed "75π" answer and the opened faces;<br>• a π trap is explained, and answers typed as "kπ" are accepted;<br>• Foundation mastery and the 10/10 check, with no frustums;<br>• the Higher check includes a frustum (drawn and marked correct);<br>• the Higher non-linear graphs check includes a trig transformation;<br>• 390px: no overflow; no console errors. |
| Regression | 659 automated tests pass (662 after merging the S2 publication, with flows 1, 11, 13 and 16 re-run and passing). All sixteen Maths walk-throughs pass: 87, 68, 62, 94, 69, 64, 78, 53, 70, 46, 78, 72, 67, 59, 60 and 46 checks, 1073 in total. Flow 13 now expects 14 Foundation Geometry lessons. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

Screenshot review moved the frustum and cone height labels off the slanted edges, where they overlapped. A stale hint ("That is l²…") stayed on screen after the slant-height step. Each step now confirms its answer instead.

## Known limitations

- Drawing a diagram from a written description is modelled in worked steps but not drawn on screen.
- Units are shown but not marked.
- The frustum and cone height labels sit beside the slanted sides. The prompt says they are heights.
- Not reviewed by a maths teacher.

## Cache

Maths modules are at `20261023-maths-r14`. **Publishing needs a global version bump.**
