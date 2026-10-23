# Maths Geometry batch 03: congruence and similarity, circle theorems, solids, sine and cosine rules, vectors

Date: 23 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

This batch completes the Geometry and measures topic. Every statement G1–G25 is now referenced by a lesson, taught and practised. Drawing-based parts are still not marked on screen; see the limitations below. Geometry has 15 lessons: 13 at Foundation, plus 2 Higher-only. The statement wording in `curriculum/maths-geometry-requirements.csv` is paraphrased and must be re-checked against the Pearson PDF at review.

## Lessons (Geometry 11–15)

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only) | Investigation |
|---|---|---|---|---|
| maths.geometry.congruence-similarity | Congruence and similarity | G5, G6, G19 | congruence (3: name the condition, congruent or not, use congruence), similarity (3: scale factor, parallel line in a triangle, part of a side) | Resize a triangle with fixed angles (AAA is not congruence); name SAS; a similar triangle with a whole side of 6 + 9 |
| maths.geometry.circle-theorems (Higher only) | Circle theorems | G10, G9 | circle-angles (H3: centre and semicircle; same segment and cyclic quadrilateral; two-step), circle-tangents (H3: tangent–radius, two tangents, alternate segment) | Move C round the circle: angle ACB stays 55° for 110° at the centre; semicircle 90°; cyclic quadrilateral |
| maths.geometry.solids-plans | 3D solids, plans and elevations | G12, G13 | solids (3: faces, edges and vertices; nets; F + V − E = 2), plans (3: plan, front and side elevations, volume from a plan) | Front elevation of a cube stack; its volume; Euler for a pentagonal prism |
| maths.geometry.trig-rules (Higher only, calculator) | Sine rule, cosine rule and 3D | G22, G23, G20 | sine-cosine (H4: sine rule side and angle, cosine rule side and angle), area-3d (H3: ½ab sin C, cuboid diagonal, angle with the base) | Choose the rule in three cases; a sine-rule side; an area |
| maths.geometry.vectors | Vectors | G24, G25 | vectors (3: add and subtract, scalar multiples, combinations), vector-geometry (1 + H2: routes in a parallelogram; ratios on a line; parallel vectors) | Build OT as a column vector; choose AB = b − a; work out 2a − b |

The engine now has 146 skills. G11 is now also referenced by the transformations and Pythagoras lessons, which work on coordinate axes.

## Answer types

- **Column vectors** are typed as a top number and a bottom number, using the existing labelled two-value input.
- **Vector expressions** such as `a + (b − a)/3` are marked by algebraic equivalence.
- **Circle-theorem figures** are drawn accurately from polar angles (and still marked "Not drawn accurately", as in the exam), so the tests can measure every drawn angle.

## Defects found and fixed during QA

- **A wrong diagram.** The semicircle diagram placed C so that the drawn angle CAB was 90° − a instead of the labelled a. The answer was correct, but the picture contradicted the label. It was caught by the test that measures the drawn angles.
- **Ambiguous nets.** A "cuboid" net option was removed, because a cube net is also a cuboid net.
- **Column-vector traps equal to the answer.** These could arise when a component was 0, or when a = b. They are now filtered.
- **Unparsed fractions.** Vector-ratio answers written as "a + 1/3(b − a)" did not parse. They are now written with brackets.
- **Short messages.** Several trap explanations were too short.

## Misconceptions targeted

**Congruence and similarity**
- AAA or SSA taken as proof of congruence.
- Thinking orientation matters.
- Adding instead of multiplying by the scale factor.
- Using part of a side instead of the whole side.

**Circle theorems**
- Halving or doubling the wrong way.
- Missing the 90° in a semicircle or at a tangent.
- Cyclic angles taken as equal.
- Forgetting to halve the base angles of an isosceles triangle.

**Solids**
- Leaving out the end faces.
- Edges confused with vertices.
- Counting hidden cubes in an elevation.
- Plan and elevation confused.

**Sine and cosine rules**
- Inverted ratios.
- The wrong opposite side.
- The sign in the cosine rule.
- Using Pythagoras when the angle is not 90°.
- Using sin for cos in the area formula.
- Using the base edge instead of the base diagonal in 3D.

**Vectors**
- b − a confused with a − b.
- Adding instead of subtracting.
- Scaling only one component.
- Measuring a ratio from the wrong end.
- "Contains a and b" taken to mean parallel.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-geometry3.test.js` has 8 tests.<br>• **Generation:** all 10 skills, at every level (200 items each), are deterministic and JSON-safe; answers mark correct; numeric, algebraic and column traps are wrong and explained.<br>• **Independent re-solves:**<br>&nbsp;&nbsp;– congruence conditions against a table written in the test;<br>&nbsp;&nbsp;– similar lengths from the drawn side labels;<br>&nbsp;&nbsp;– every circle-theorem answer and given angle measured on the drawn circle, with vertices checked to lie on it;<br>&nbsp;&nbsp;– faces, edges and vertices from a table;<br>&nbsp;&nbsp;– elevations and volumes rebuilt from the plan numbers drawn on the figure;<br>&nbsp;&nbsp;– sine rule, cosine rule, area and 3D answers recomputed;<br>&nbsp;&nbsp;– column arithmetic evaluated from the printed expression;<br>&nbsp;&nbsp;– vector expressions evaluated at test vectors;<br>&nbsp;&nbsp;– parallel tests by cross-multiplication.<br>• **Records:** every G1–G25 reference is present; 13 Foundation and 15 Higher lessons; Higher-only lessons contain only Higher levels; calculator flags match their items; the stale-redraw guard holds; the visual-dispatch test includes these lessons. |
| Interaction | `science-app/tools/maths-browser-flow-13.mjs`, 67 checks pass:<br>• Foundation hides both Higher-only lessons (13 lessons) and Higher lists them;<br>• all 15 card visuals;<br>• all five investigations with 14 wrong paths;<br>• reload keeps an answer;<br>• moving C keeps angle ACB at 55°;<br>• column vectors typed top and bottom, and a column trap explained;<br>• a vector expression accepted;<br>• the solids lesson practised to mastery and checked at 10/10;<br>• a Higher circle-theorem practice item;<br>• 390px: 15 screens with no overflow;<br>• no console errors. |
| Regression | 633 automated tests pass (after rebasing on upstream Geography and the r10 cache). All thirteen Maths walk-throughs pass: 87, 68, 62, 94, 69, 64, 78, 53, 69, 46, 77, 72 and 67 checks, 906 in total. Flow 11 now allows extra Higher-only lessons in the Higher listing. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

## Known limitations

- **Not marked:**
  - drawing plans, elevations, isometric views and constructions;
  - written congruence, circle-theorem and vector proofs (modelled in solutions only).
- **The sine rule's ambiguous case** is flagged in prompts ("angle B is acute"), not assessed.
- **3D trigonometry** is limited to cuboids.
- **Not reviewed.** Item wording and difficulty have not been reviewed by a maths teacher.

## Cache

Maths modules are at `20261023-maths-r10`. Geometry 6–10 were published upstream. **Publishing Geometry 11–15 needs a global version bump.**

## Next

Probability (P1–P9), then Statistics (S1–S6).
