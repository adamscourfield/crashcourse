# Maths Algebra batch 02: sequences, inequalities, quadratic and simultaneous equations

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Builds on `maths-algebra-batch-01.md` (batch 1 has since been published by the combined Physics/Maths release).

## Specification check

The specification is Pearson Edexcel 1MA1, Issue 2. I compared the Foundation and Higher lists for A8–A25 on 22 October 2026. The full statement map is in `curriculum/maths-algebra-requirements.csv`.

| Statement | Higher-only part | In this batch |
|---|---|---|
| A18 | equations needing rearrangement; completing the square; the quadratic formula | `quad-solve` level 3 (Higher level); `quad-complete-square` and `quad-formula` (Higher-only skills) |
| A11 | turning points by completing the square | `quad-complete-square` level 2 (Higher). Reading roots and turning points from graphs is not marked. |
| A19 | linear/quadratic | `sim-nonlinear` (Higher-only skill): a line with a parabola, and a line with x² + y² = 25 |
| A22 | two variables; quadratic inequalities; set notation; graphs | Quadratic inequalities: `ineq-quadratic` (Higher-only skill). The other Higher parts are not built. |
| A24 | geometric sequences with a surd ratio; "other sequences" | Not built |
| A25 | quadratic nth term | `seq-nth-quadratic` (Higher-only skill) |
| A23, A21 | none | Built (A21 in part) |

## Engine: new answer kinds (`sets.js`)

- **`solutions`**: one box per solution, or an x box and a y box per pair. Values may be integers, fractions or decimals, entered in any order.
  - One correct root out of two gets "there is another".
  - x and y swapped is diagnosed.
  - With `dp: 2`, a correct value written without its final zero gets "right value, wrong form", and an unrounded value gets "round it".
- **`inequality`**: accepts x > 3, 3 < x, x ≥ 3 (or >=), double inequalities in either direction, and two regions joined with "or" or a comma.
  - Equivalent forms are accepted.
  - The right boundary values with the wrong < or ≤ get "right values, check the sign".
  - An equation such as "x = 3" is refused with a hint.
- **`list`**: a set of integers. Missing and extra values are named in the feedback ("missing: −1; not allowed: 3").
- **`completed-square`** (new algebra form): requires (x + p)² + q with a monic bracket. An equivalent expanded answer gets "the question asks for the completed-square form".

Each answer kind has its own input in the studio: solution boxes, an inequality field with < ≤ > ≥ x "or" buttons, and a list field.

## Lessons (Algebra 7–10)

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only) | Investigation |
|---|---|---|---|---|
| maths.algebra.sequences | Sequences and the nth term | A23, A24, A25 | seq-terms (3), seq-nth-linear (3), seq-special (3), seq-nth-quadratic (H skill, 2) | Matchstick squares: the added sticks, the nth term (n + 3 and 3n + 4 each diagnosed), pattern 50, and why 200 sticks is impossible |
| maths.algebra.inequalities | Solving inequalities | A22 | ineq-solve (3), ineq-integers (2), ineq-quadratic (H skill, 2) | Build x > 2, x ≤ −1 and −2 < x ≤ 3 on a number line (wrong circle and wrong direction each explained). Then test values in −2x < 6 to see why the sign reverses. |
| maths.algebra.quadratic-equations | Solving quadratic equations | A18, A11 | quad-solve (2 + H), quad-complete-square (H skill, 2), quad-formula (H skill, 2) | Step along y = x² + x − 6 to mark both roots. Then disprove "set each factor equal to 10" for x(x − 3) = 10. |
| maths.algebra.simultaneous | Simultaneous equations | A19, A21 | sim-solve (3), sim-form (2), sim-nonlinear (H skill, 2) | Choose add or subtract to eliminate y, substitute back, then place the intersection point on the graph (a point on one line only is diagnosed). |

The engine now has 65 skills. The Algebra topic has 10 lessons; at Foundation it shows 22 skills, and its topic assessment draws 20 different skills, with at least one from every lesson.

### Misconceptions targeted

- **Sequences:**
  - counting n steps to the nth term;
  - "+3 each time" written as n + 3;
  - the first term used as the constant;
  - the wrong sign for a decreasing sequence;
  - position confused with term;
  - Fibonacci-type and geometric sequences treated as arithmetic;
  - the ratio inverted;
  - the second difference used as the n² coefficient.
- **Inequalities:**
  - the sign not reversed after dividing by a negative;
  - the sign reversed when dividing by a positive;
  - inverse operations wrong;
  - end values included or excluded wrongly;
  - inside and outside the roots confused;
  - the negative root forgotten.
- **Quadratic equations:**
  - root signs flipped;
  - dividing by x and losing x = 0;
  - only one square root given;
  - factors set equal to a non-zero number;
  - −b forgotten in the formula;
  - only the square root divided by 2a;
  - halving or square-subtraction errors when completing the square;
  - the turning point's x sign.
- **Simultaneous equations:**
  - add and subtract confused;
  - sign slips;
  - x and y swapped;
  - context answers swapped;
  - the gradient inverted;
  - y taken from the wrong equation in line and curve pairs.

## Verification evidence

| Check | Result |
|---|---|
| Specification | Higher-only boundaries for A8–A25 compared (table above). |
| Mathematical accuracy | `tests/maths-algebra2.test.js` has 6 tests.<br>• **Generation:** all 13 skills at every level, 250 items each: deterministic and JSON-safe. Each item's own answer is correct; traps are not correct and have explanatory feedback. No hyphen is used for a minus sign.<br>• **Independent checks:** each item is checked against its printed prompt with a separate evaluator, not the generator or marking code:<br>&nbsp;&nbsp;– sequence terms are recomputed from the printed rules;<br>&nbsp;&nbsp;– nth-term answers reproduce the printed terms;<br>&nbsp;&nbsp;– "is it a term" is decided by search;<br>&nbsp;&nbsp;– special sequences are checked against the defining property of every option;<br>&nbsp;&nbsp;– inequality answers agree with the printed inequality at over 10,000 x values, including just either side of each boundary;<br>&nbsp;&nbsp;– integer lists are found by brute force;<br>&nbsp;&nbsp;– quadratic solutions satisfy the printed equation;<br>&nbsp;&nbsp;– formula answers match roots found by independent bisection, rounded to 2 d.p.;<br>&nbsp;&nbsp;– completed squares are equivalent and turning points are minima;<br>&nbsp;&nbsp;– simultaneous pairs satisfy both printed equations;<br>&nbsp;&nbsp;– context answers satisfy the stated totals and points.<br>• **Marking:** a table of cases covers every new kind. |
| Tier restrictions | Higher-only: `quad-solve` level 3, plus five whole skills. Foundation checks are topped up to 10 without them (browser verified). Higher shows them (browser verified). |
| Interaction and wrong paths | `science-app/tools/maths-browser-flow-5.mjs`, 69 checks pass:<br>• all four investigations, including every wrong path above;<br>• reload restores a part-built number line;<br>• inequality input: equation refused, wrong < or ≤ gets partial credit;<br>• integer list with a missing value named;<br>• inequalities lesson practised to mastery and checked at 10/10, with the check topped up without quadratic inequalities;<br>• quadratic solution boxes: one root gets "find both", either order accepted;<br>• swapped simultaneous pair diagnosed;<br>• Higher: formula item reached, unrounded values asked to round, 2 d.p. answers accepted, quadratic nth term shown;<br>• Number and science untouched;<br>• 390px: eight screens with no overflow;<br>• no console errors. |
| Regression | 447 automated tests pass after rebasing onto `main` 24dc0cd. All earlier walk-throughs were rerun: Number 87, 68 and 62 checks; Algebra batch 1 94 (expected counts updated for 10 lessons and a 20-question assessment). 380 browser checks pass in total. |
| Merge | `main` had added a guard that stops a delayed investigation redraw from writing after the learner leaves (stale Algebra redraws). I kept it, applied it to the four new investigations, and extended its regression test to them. |
| Defects found in QA and fixed | • An inequality answer was displayed as "x = undefined …" because the answer field `var` collided with the "x = …" prefix used for equation answers; the field was renamed.<br>• Integer lists contained −0.<br>• Several trap messages were too terse.<br>• Graph curves were drawn outside the plot area; they are now clipped.<br>• Ticket-price labels were spaced oddly. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

Evidence: `science-app/maths-browser-evidence-5.json`, with `-evidence-4.json` refreshed. Screenshots: `crash-course-maths-algebra-inequality-graph.png`, `crash-course-maths-algebra-solutions.png`, `crash-course-maths-algebra-intersection.png`.

## Known limitations

- **Graphical methods are not marked.** Reading roots, intersections or regions from a graph you have drawn (A11, A18, A19, A22) is not marked; graphs only illustrate.
- **Not built:**
  - Higher A22: two-variable regions and set notation;
  - geometric sequences with a surd ratio;
  - exact surd solutions by completing the square.
- **Narrow number ranges.** Simultaneous and quadratic practice uses whole-number (or simple fraction) solutions. That is typical of non-calculator papers, but narrower than Paper 2 and 3 questions.
- **Inequality format.** Answers are typed, so a learner must know the "or" convention for two regions. The input buttons and hint support this.
- **Not reviewed.** Item wording and difficulty have not been reviewed by a maths teacher.

## Cache

Maths modules are at `20261022-maths-r5`, and `app.js` imports the r5 studio. `index.html` still loads the global science version, so **publishing needs a global `?v=` bump**.

## Next concrete actions

1. Adam reviews lessons 7–10.
2. Publish with a global cache bump.
3. Build a graph-plotting and graph-reading input, then the graphs strand (A8–A12, A14; Higher A13, A15, A16), so the graphical parts of A17–A19 and A22 can be marked.
