# Maths Algebra batch 03: graphs, with a plotting input

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Lessons 1–10 of Algebra have been published by the combined releases.

## Why an input came first

Graph questions ask students to plot points, draw lines and read values from graphs. Before this batch, graphs only illustrated ideas, so the graphical parts of A17, A18, A19 and A22 and most of A8–A16 could not be practised or marked. This batch adds `dist/maths/graph.js`:

- **Renderer.** Draws curves, line segments, circles, shaded regions and labelled points from JSON-safe specs. Questions now show a graph above the answer box.
- **Plotting input.** Students tap the grid to plot or remove points. Taps snap to the grid, with separate x and y steps where needed, such as minutes and kilometres. A keyboard form ("x", "y", Add point) and a list with Remove buttons give the same result without a pointer. A part-plotted answer survives reload.
- **Marking:**
  - `points`: an exact set, in any order, with duplicates ignored. Missing and extra points are counted, and x and y written the wrong way round is diagnosed.
  - `line`: at least two points, all on y = mx + c. A wrong line is diagnosed as one of: right gradient but wrong intercept; wrong direction; right intercept but wrong gradient; or a general mismatch.
- **Tolerances for readings.** Decimal answers and solution sets can carry `tol`, so values read from a graph are accepted within a stated margin (for example ±0.2, ±2 on a conversion graph, ±0.6 for a gradient estimated with a tangent). The accepted range is shown with the answer.
- **Set notation.** Inequality answers also accept set notation, such as {x : x > 3}.

## Specification

The specification is Pearson Edexcel 1MA1, Issue 2. Higher-only boundaries were compared on 22 October 2026 (see `maths-algebra-batch-02.md` for the A8–A25 comparison). Higher-only parts in this batch:

| Statement | Higher-only part | In this batch |
|---|---|---|
| A9 | perpendicular lines | `graph-line-equation` level 3 |
| A11 | turning points by completing the square | done in batch 02 |
| A12 | exponential and trigonometric graphs | `graph-recognise` level 2 |
| A13 | translations and reflections (whole statement) | `graph-transform` (Higher-only skill) |
| A14 | exponential graphs in context | not built |
| A15 | gradients and areas under graphs (whole statement) | `graph-gradient-area` (Higher-only skill) |
| A16 | circle centre the origin and its tangent (whole statement) | `graph-circle` (Higher-only skill) |
| A22 | regions on a graph and set notation | `graph-regions` (Higher-only skill); set notation accepted in inequality answers |

## Lessons (Algebra 11–15)

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only) | Investigation |
|---|---|---|---|---|
| maths.algebra.coordinates-lines | Coordinates and straight-line graphs | A8, A9 | graph-coords (3: read, plot, midpoints), graph-plot-line (3: y = mx + c, negative and fractional gradients, rearrange first) | Complete a table for y = 2x − 1, plot it by tapping or typing, then set m and c to fit two points |
| maths.algebra.line-equations | Gradient, intercept and equations of lines | A9, A10 | graph-line-equation (2 + H), graph-interpret (2: context, conversion graphs) | Gradient triangles, including a falling line; pick every line parallel to y = 3x + 1, including 2y = 6x + 5 |
| maths.algebra.nonlinear-graphs | Quadratic, cubic and reciprocal graphs | A11, A12, A13 | graph-plot-curve (2), graph-read-quadratic (3), graph-recognise (1 + H), graph-transform (H skill, 2) | Match four graph shapes to their equations, then plot y = x² − 4 |
| maths.algebra.graphical-solutions | Solving equations and inequalities with graphs | A17, A18, A19, A22 | graph-solve (3: linear, quadratic to 1 d.p., simultaneous), graph-regions (H skill, 2) | Move y = k to give two, one or no solutions of x² − 2x = k, then read the solutions of x² − 2x = 3 |
| maths.algebra.real-life-graphs | Real-life graphs, gradients, areas and circles | A14, A15, A16 | graph-real-life (3), graph-gradient-area (H skill, 3), graph-circle (H skill, 2) | Turn a walk story into a distance–time graph by plotting its corner points, then find the speed home |

The engine now has 78 skills (38 Number, 40 Algebra). The Algebra topic has 15 lessons.

### Misconceptions targeted

**Coordinates**
- x and y swapped.
- Left of the y-axis taken as positive.
- Midpoint taken as half the difference, or as the sum without halving.

**Straight lines**
- Gradient inverted (across ÷ up).
- Gradient sign wrong.
- Equation used unrearranged (2y = 6x + 4 read as gradient 6).
- y-coordinate of a point used as the intercept.
- Parallel line given the same intercept.
- Perpendicular gradient taken as the reciprocal without changing sign, or with the sign changed but not inverted.

**Graphs in context**
- Rate and intercept confused in context.

**Reading and plotting curves**
- A negative number squared to a negative when making a table.
- y-intercept given instead of the roots.
- (y, x) given for a turning point.

**Transformations**
- f(x + a) moved the wrong way.
- Vertical and horizontal changes confused.
- The axis of reflection confused.

**Graphical solutions and regions**
- y read instead of x.
- Which side of a boundary line the region is on.

**Real-life graphs**
- Stop end-time given for the stop's duration.
- Total there-and-back distance given for "how far from home".
- km/min given instead of km/h.
- Area and gradient confused on velocity–time graphs.
- Trapezia treated as rectangles.

**Circles**
- r given for r², or r² for r.
- The radius gradient used for the tangent.
- A tangent drawn through the origin.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-graphs.test.js` has 5 tests.<br>• **Generation:** all 13 graph skills at every level (200 items each) are deterministic and JSON-safe. Each own answer is correct, every graph renders with no NaN or undefined values and an accessible label, and trap feedback explains the error.<br>• **Independent checks against the printed question or the item's graph data:**<br>&nbsp;&nbsp;– coordinates and midpoints;<br>&nbsp;&nbsp;– plotted lines satisfy the printed equation, including rearranged forms;<br>&nbsp;&nbsp;– equations of lines pass through the given points with the parallel or perpendicular gradient;<br>&nbsp;&nbsp;– curve tables are recomputed;<br>&nbsp;&nbsp;– read-off roots match roots found by bisection, and turning points are minima;<br>&nbsp;&nbsp;– transformations are recomputed from the printed equation;<br>&nbsp;&nbsp;– graph solutions satisfy the plotted functions;<br>&nbsp;&nbsp;– region points are found by brute force, and region descriptions are tested at the polygon's centroid;<br>&nbsp;&nbsp;– journey stop, distance and speed come from the plotted segments;<br>&nbsp;&nbsp;– acceleration and area come from the velocity–time segments;<br>&nbsp;&nbsp;– tangent gradients match a numerical derivative;<br>&nbsp;&nbsp;– circle tangents are perpendicular to the radius.<br>• **Marking:** plotted points, lines, tolerances and set notation are covered by unit tests. |
| Interaction | `science-app/tools/maths-browser-flow-6.mjs`, 64 checks pass:<br>• every Discover card draws a graph;<br>• tapping the grid plots the intended point;<br>• keyboard plotting and removal;<br>• all five investigations, including their wrong paths;<br>• graph figures shown with questions;<br>• a plotted line with the right gradient but wrong intercept is diagnosed;<br>• a part-plotted answer survives reload;<br>• the coordinates and lines lesson practised to mastery, then checked at 10/10;<br>• tier split (Foundation hides transformations, gradients and areas, and circles);<br>• Number and science untouched;<br>• 390px: ten screens with no overflow;<br>• no console errors. |
| Regression | 470 automated tests pass on `main` 406f618 plus this change. All earlier walk-throughs were rerun: 87, 68, 62, 94 and 69 checks. The batch 1 and 2 harnesses now read the Algebra lesson count from the page instead of hard-coding it. In total, 444 browser checks pass. |
| Defects found in QA and fixed | • Plotting the last correct point skipped to the next part before the student pressed Check. Each step now advances only on Check.<br>• The journey check crashed when the answer was correct.<br>• −0 appeared in plotted points.<br>• Read-off answers displayed as fractions.<br>• Tolerance ranges were shown at a silly precision.<br>• Several trap messages were too terse. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

Evidence: `science-app/maths-browser-evidence-6.json`, with `-4.json` and `-5.json` refreshed. Screenshots: `crash-course-maths-graph-tap-plot.png`, `crash-course-maths-graph-line-diagnosis.png`, `crash-course-maths-graph-trig.png`.

## Known limitations

- **Points, not drawings.** Curves and lines are marked as plotted points; smooth joining, ruler lines, axis labels and scales drawn by students are not marked.
- **Tangents.** Gradient-of-curve estimates are marked on the number only; the tangent drawn is not marked.
- **Not built:**
  - exponential growth in context (A14 Higher);
  - areas under curves (as opposed to straight-line graphs);
  - financial graphs;
  - dashed boundaries for strict inequalities in regions.
- **Grid input.** Plotting needs a grid that snaps; fractional coordinates can only be typed if the grid allows them.
- **Accessibility.** The tap target is the whole grid. A keyboard form is provided, but full screen-reader testing has not been done.
- **Not reviewed.** Item wording and difficulty have not been reviewed by a maths teacher.

## Cache

Maths modules are at `20261022-maths-r6`. **Publishing needs a global version bump.**

## Next concrete actions

1. Adam reviews lessons 11–15, especially the plotting input on a phone.
2. Publish.
3. Remaining Algebra: functions (A7 Higher), algebraic fractions (A4 Higher), proof (A6), iteration (A20); then the Ratio strand.
