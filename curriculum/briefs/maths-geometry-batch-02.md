# Maths Geometry batch 02: Pythagoras, trigonometry, transformations, constructions and loci, bearings

Date: 23 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

Geometry now has 10 lessons. The statement map in `curriculum/maths-geometry-requirements.csv` is still paraphrased and should be re-checked against the Pearson PDF at review (see batch 01).

## Lessons (Geometry 6–10)

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only) | Investigation |
|---|---|---|---|---|
| maths.geometry.pythagoras (calculator) | Pythagoras' theorem | G20, G6 | pythagoras (3: hypotenuse, shorter side, is it right-angled?), pythagoras-problems (3: ladders, diagonals and journeys; distance between points; isosceles height and two-step) | Squares of 9 and 16 cm² cover the 25 cm² square; a 5 m ladder 1.4 m out |
| maths.geometry.trigonometry (calculator) | Trigonometry in right-angled triangles | G20, G21 | trig (3: choose the ratio, find a side, find an angle), trig-exact (3: recall, exact lengths with surds, angle from an exact ratio) | opposite ÷ hypotenuse stays 0.5 for 30° at every size; choose tan; cos 60° from half an equilateral triangle |
| maths.geometry.transformations | Transformations and column vectors | G7, G8, G24 | transform (4 + H1: translate, reflect, rotate, enlarge; negative scale factors), transform-describe (2 + H1: describe fully; combinations and invariant points) | Slide A onto a target by a column vector; pick the rotation; choose the scale factor |
| maths.geometry.constructions-loci | Constructions and loci | G2, G1 | constructions (3: method, constructing triangles, constructing 60/90/45/30°), loci (2: name the locus, regions on a grid) | Which point is equidistant; the smallest compass radius whose arcs cross; a region |
| maths.geometry.bearings (calculator) | Bearings, scale drawings and elevation | G15, G20 | bearings (3: read, back bearings, with angle facts), scale-drawing (3: plan scales, elevation and depression, journeys on bearings) | Turn clockwise from north to the lighthouse; the back bearing; height from an angle of elevation |

The engine now has 136 skills.

## Engine

- **Column vectors.** A new `{vec a;b}` markup renders stacked column vectors (with a screen-reader reading and a plain-text form).
- **Plotting on the object's grid.** Transformation answers are plotted on the same grid as the object.
- **Explained wrong images.** Plotted points can carry trap images (`ptTraps`): a known wrong image, such as a swapped vector, a rotation the wrong way or an enlargement from the origin, gets its own explanation.

## Defects found and fixed during QA

- **Distractors that were also correct (generator):**
  - A reflection distractor could also map A onto B when the triangle was symmetric. Options were compared vertex by vertex instead of as sets.
  - A "Rotation 360°" distractor was itself the identity.
  - Both were caught by tests that apply every option to the drawn vertices and check that only the keyed option lands on B.
- **Off-grid coordinates.** Coordinates in distance questions could leave the readable range.
- **Minus signs.** Column vectors showed a hyphen instead of a minus sign.
- **Short messages.** Some option explanations were too short.
- **A test-harness bug.** A test mis-parsed the "1 : n" scale (my error, not an app defect).

## Misconceptions targeted

**Pythagoras**
- Adding the squares when finding a shorter side.
- Forgetting the square root.
- Adding lengths.
- Not halving the base of an isosceles triangle.

**Trigonometry**
- The wrong ratio.
- Multiplying instead of dividing when x is on the bottom.
- Giving the other angle.
- Giving the ratio instead of the angle.
- Swapping sin and cos exact values.
- Using √2 for 30° or 60°.

**Transformations**
- Swapped vector components.
- Wrong vector signs.
- The wrong mirror line.
- Clockwise and anticlockwise confused.
- Rotating about the origin instead of the given centre.
- Enlarging from the origin.
- The direction of a negative scale factor.

**Loci and constructions**
- Arcs shorter than half of AB.
- The wrong locus for each rule.
- Triangles that break the triangle inequality.

**Bearings**
- Measuring anticlockwise.
- Measuring from east.
- 360 − b given as the back bearing.
- sin used where tan is needed for heights.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-geometry2.test.js` has 7 tests.<br>• **Generation:** all 10 skills (200 items per level) are deterministic and JSON-safe; own answers mark correct; numeric, surd and plotted traps are wrong and explained.<br>• **Independent re-solves:**<br>&nbsp;&nbsp;– Pythagoras from the labelled sides of the drawn triangle (identified geometrically, with the right angle checked);<br>&nbsp;&nbsp;– SOH CAH TOA from the labels and the marked angle;<br>&nbsp;&nbsp;– exact values against a table written in the test;<br>&nbsp;&nbsp;– transformation images from the drawn object;<br>&nbsp;&nbsp;– every "describe" option applied to the drawn vertices;<br>&nbsp;&nbsp;– combinations traced through a test point;<br>&nbsp;&nbsp;– invariant points;<br>&nbsp;&nbsp;– loci regions by distance;<br>&nbsp;&nbsp;– the triangle inequality;<br>&nbsp;&nbsp;– bearings measured from the drawn line;<br>&nbsp;&nbsp;– back bearings, scales, elevation and journeys.<br>• **Records:** lesson records, Higher-only levels and calculator flags.<br>• **Rendering and dispatch:** column-vector rendering; the visual-dispatch test now includes these lessons. |
| Interaction | `science-app/tools/maths-browser-flow-12.mjs`, 73 checks pass:<br>• all 15 card visuals and calculator badges;<br>• column vectors render stacked;<br>• all five investigations with 16 wrong paths;<br>• reload keeps an answer;<br>• a plotted trap image gets its explanation and a correct plot is accepted, with the object drawn on the answer grid;<br>• an exact surd typed and accepted;<br>• the Pythagoras lesson practised to mastery and checked at 10/10;<br>• Foundation hides negative scale factors and Higher shows a 5-level ladder;<br>• 390px: 15 screens;<br>• no console errors. |
| Regression | 619 automated tests pass after rebasing on upstream's automatic question navigation and simplified course map (Maths cache r9). All twelve Maths walk-throughs pass: 87, 68, 62, 94, 69, 64, 78, 53, 69, 46, 77 and 72 checks, 839 in total. The walk-throughs were updated for both upstream changes: Continue is now hidden until an answer is given, and lesson counts are read from the sidebar instead of the map. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

## Known limitations

- **Constructions are not drawn.** Ruler-and-compass constructions are chosen from options and illustrated, not drawn and marked. Real drawing must be practised on paper.
- **Descriptions are chosen, not written.** "Describe fully" answers are chosen from options.
- **Bearings format not enforced.** Bearings accept 65 as well as 065.
- **Vertices only.** Transformation images are marked by their vertices.
- **Not reviewed.** Item wording and difficulty have not been reviewed by a maths teacher.

## Cache

Maths modules are at `20261023-maths-r9` (set upstream). **Publishing Geometry 6–10 needs a global version bump.**

## Next

Geometry batch 3:
- congruence and similarity (G5, G19);
- circle theorems (G10, Higher);
- plans, elevations and 3D solids (G12, G13);
- sine and cosine rules, ½ab sin C and 3D trigonometry (G20, G22, G23, Higher);
- vectors (G25).
