# Maths Algebra batch 05: closing the remaining Algebra gaps

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

This batch closes the gaps recorded after batch 04. Each gap became a skill in one of two new lessons. Adding the skills to existing lessons would have changed what those lessons need for completion, and so altered saved progress.

| Gap (statement) | Closed by |
|---|---|
| A4 surd expressions (Higher; N8 already covered single surds and {a/√b}) | `surd-algebra`: (a + √b)(a − √b), (√p + √q)(√p − √q), rationalising {k/(a ± √b)}, (√p + √q)², (a + √b)² − (a − √b)² |
| A24 Fibonacci-type sequences and Higher geometric sequences with a surd ratio | `seq-further`: missing terms, first two terms from the 3rd and 5th (Foundation); surd-ratio terms; ratio and first term from two terms (Higher) |
| A12/A14 Higher exponential graphs in context | `graph-exponential`: N = ab^t values, a and b from a drawn graph, compound growth and depreciation thresholds (calculator) |
| A15 Higher areas under curves and money graphs | `area-curve`: trapezium estimates from tabulated values on a drawn curve; overestimate or underestimate from the curvature; gradients of cost and savings graphs |
| A22 Higher dashed boundaries for strict inequalities | `regions-strict`: solid or dashed; describe a region with mixed strict and inclusive boundaries; plot integer points in a strict region with the plotting input |

## Lessons (Algebra 21–22)

| Lesson ID | Title | Refs | Tier | Skills | Investigation |
|---|---|---|---|---|---|
| maths.algebra.surds-sequences | Surds in algebra and further sequences | A24, A4 | Foundation and Higher | seq-further (2 + H2), surd-algebra (H3) | Choose a and b to hit the 3rd and 5th terms; generate ×√2 terms and pick the whole numbers; choose the conjugate that rationalises {4/3 + √5} |
| maths.algebra.further-graphs | Exponential graphs, areas under curves and strict regions | A12, A14, A15, A22 | Higher only | graph-exponential (3), area-curve (3), regions-strict (3) | Tune b in y = 100 × b^x through two points; vary the number of trapezia and judge over or under; switch each boundary between solid and dashed |

There are now 99 skills. Algebra has 22 lessons: 19 at Foundation and 22 at Higher.

## Engine changes

- **Graph renderer.** It now draws dashed curves (`dash: true`) and vertical boundary lines (`vlines`). Its text description says which lines are dashed and not included. The plotting input inherits both.

## Misconceptions targeted

**Sequences**
- A Fibonacci-type sequence treated as arithmetic.
- An off-by-one term.
- The first two terms swapped.
- A ratio of √s taken as s.
- r² mistaken for r when there are two steps between known terms.

**Surds**
- √s × √s taken as s².
- The sign of a conjugate not changed.
- a² + b used instead of a² − b.
- The middle term dropped when squaring.

**Exponential graphs**
- The power applied to the coefficient.
- b^t read as b × t.
- 0.5^t read as 0.5 × t.
- Linear thinking about b from two points.
- b² mistaken for b.
- A threshold year that is one too early.
- Simple growth used instead of compound growth.

**Areas and money gradients**
- Left or right rectangles used instead of trapezia.
- The factor h/2 forgotten.
- Over and underestimates confused.
- The whole bill divided by the time, ignoring the fixed charge.
- The intercept taken as the rate.

**Strict regions**
- Dashed and solid lines confused.
- Strictness misread on one boundary.
- Points on a dashed line counted.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-algebra4.test.js` has 5 tests.<br>• **Generation:** all 5 skills at every level (200 items each) are deterministic and JSON-safe. Each own answer is correct, and every trap (numeric, solution or exact) is wrong and explained.<br>• **Independent checks:**<br>&nbsp;&nbsp;– Fibonacci terms rebuilt from the prompt;<br>&nbsp;&nbsp;– surd-ratio terms checked numerically against the printed terms;<br>&nbsp;&nbsp;– surd expressions evaluated numerically from the printed expression;<br>&nbsp;&nbsp;– exponential values, and a and b, checked against both printed points and the drawn curve;<br>&nbsp;&nbsp;– threshold years found by stepping;<br>&nbsp;&nbsp;– trapezium estimates recomputed from the printed values, which are checked to lie on the drawn curve;<br>&nbsp;&nbsp;– over or underestimate decided against Simpson's-rule integration;<br>&nbsp;&nbsp;– money gradients taken from the drawn line;<br>&nbsp;&nbsp;– dashed flags match strict inequalities;<br>&nbsp;&nbsp;– the centroid of the shaded region satisfies the correct description;<br>&nbsp;&nbsp;– strict-region points found by brute force. |
| Interaction | `science-app/tools/maths-browser-flow-8.mjs`, 53 checks pass:<br>• lesson counts per tier (19 Foundation, 22 Higher);<br>• a Foundation mastery run and check (10/10) that never reaches Higher levels;<br>• every card has a visual;<br>• dashed boundaries drawn;<br>• both investigations, including 8 wrong paths;<br>• reload keeps selected terms;<br>• tier rungs;<br>• exponential practice accepted;<br>• 390px: 6 screens with no overflow;<br>• no console errors. |
| Regression | 509 automated tests pass on `main` 5ca323f plus this change. All eight Maths walk-throughs pass: 87, 68, 62, 94, 69, 64, 78 and 53 checks, 575 in total. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

## Remaining Algebra limits

- **Not marked:** sketching (as opposed to plotting); free-text proofs; drawn tangents.
- **Templates:** contexts come from templates.

Every A1–A25 statement now has teaching and practice, though some are marked on final answers only.

## Next

Ratio, proportion and rates of change (R1–R16).
