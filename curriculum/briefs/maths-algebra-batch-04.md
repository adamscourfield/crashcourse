# Maths Algebra batch 04: functions, algebraic fractions, proof, iteration and forming equations

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Algebra lessons 1–15 have been published by the combined releases.

This batch completes the open Algebra statements recorded after batch 03:
- A7 functions;
- A4 Higher algebraic fractions;
- A6 proof;
- A20 iteration;
- A21 forming equations in context.

## Specification

The specification is Pearson Edexcel 1MA1, Issue 2. Higher-only boundaries were compared on 22 October 2026, as recorded in batches 01–02. Tier decisions in this batch:

| Statement | Foundation | Higher-only part | In this batch |
|---|---|---|---|
| A4 | Index laws with whole-number powers | Algebraic fractions; negative and fractional indices in algebra | Whole lesson `algebraic-fractions` is Higher only |
| A6 | Equation vs identity; show expressions are equivalent; arguments | Proof | `identities` L1–2 and `show-that` for Foundation; `identities` L3 and `proof` Higher |
| A7 | Expressions as functions with inputs and outputs (function machines) | Function notation; inverse; composite | `func-machine` for Foundation; `func-notation` and `func-inverse` Higher |
| A18 | — | Solving equations with algebraic fractions | `afrac-solve` |
| A20 | — | Whole statement | Whole lesson `iteration` is Higher only and a calculator lesson |
| A21 | Form equations from words and shapes, solve and interpret | — | `form-geometry`, `form-context`, `form-interpret` (L2 Higher, because it rejects roots of a quadratic) |

## Lessons (Algebra 16–20 in course order)

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only) | Investigation |
|---|---|---|---|---|
| maths.algebra.forming-equations | Forming and solving equations in context | A21, A17, A18 | form-geometry (3: angles, perimeter and area, use the solution), form-context (3: shares, consecutive numbers, think of a number), form-interpret (1 + H) | Choose the equation for a triangle's angles, solve it, then give the angle the question asks for |
| maths.algebra.functions | Functions: machines, notation, inverses and composites | A7 | func-machine (3), func-notation (H, 3), func-inverse (H, 3) | Run a machine forwards, build its reverse from inverse operations, write the output for input x |
| maths.algebra.proof | Identities, show that and proof | A6, A3 | identities (2 + H), show-that (3: algebraic representation, simplify to show, counterexamples), proof (H, 3: complete the proof, factorise to prove, complete the square) | Test a claim with examples, order the lines of a proof, find a counterexample |
| maths.algebra.algebraic-fractions | Algebraic fractions and fractional indices (Higher only) | A4, A18 | afrac-simplify (3), afrac-add (3: number denominators, algebraic denominators, × and ÷), afrac-solve (2), alg-indices (3) | Substitute x = 4 to test candidate simplifications, then factorise to see why only whole factors cancel |
| maths.algebra.iteration | Solving equations by iteration (Higher only, calculator) | A20 | iter-sign (2), iter-rearrange (2), iter-compute (3: x₁, x₃, iterate to a solution) | Sign change, then iterate x_{n+1} = ∛(5 − 2x_n) with a live cobweb diagram and table, then a different start |

The engine now has 94 skills (38 Number, 56 Algebra). The Algebra topic has 20 lessons: 18 at Foundation, because two lessons are Higher only.

## Engine changes

- **Single-fraction answers.** A new algebra answer form, `fraction`, accepts one algebraic fraction with nothing left to cancel:
  - it checks the integer common factor and the polynomial gcd of top and bottom (Euclid over rationals);
  - an equivalent answer that is not cancelled is marked partly right with the message "still share a common factor";
  - a sum of separate fractions is marked partly right with "write it as a single fraction".
- **Divided monomials.** An answer such as 1/(9x^4) or x/(2y) is now accepted as simplified. Before, it was wrongly treated as unsimplified. That was a latent fault in earlier notation questions, whose own hint suggested typing x/(2y).
- **Subscripts.** Markup supports x_{n + 1} and x_n, and they still render correctly inside fractions.
- **Graph functions.** The graph evaluator supports sqrt() and cbrt(), for iteration cobweb diagrams.
- **Calculator badge.** It now follows the lesson and the item, so iteration shows "Calculator". It was previously hard-coded as "Non-calculator".
- **Tolerance traps.** Traps that fall inside a decimal answer's tolerance are dropped, so a "wrong" value can never be marked right.
- **Name clash fixed.** The new function-machine visual was renamed (`fmachine`) after browser QA found it clashed with the Number topic's existing `machine` visual.

## Misconceptions targeted

**Function machines and notation**
- Operations done in the wrong order, or inverses undone in the wrong order.
- Brackets missing when the whole expression is multiplied, as in 3(x − 4) vs 3x − 4.
- (−3)² treated as −9.
- 2x² read as (2x)².
- f(2x) confused with 2f(x).
- f(x + c) not expanded.
- (x + c)² written as x² + c².

**Inverse and composite functions**
- f⁻¹ treated as the reciprocal 1/f(x).
- fg and gf confused, or treated as f × g.
- f(k) given for f⁻¹(k).

**Algebraic fractions**
- Terms cancelled instead of factors.
- Only one term divided by the common factor.
- Tops and bottoms added.
- The minus not applied to the whole second numerator.
- The right-hand side not multiplied by the common denominator.
- Dividing without flipping the second fraction.

**Indices**
- A negative index read as a negative number.
- The power not applied to the coefficient.
- Powers added instead of multiplied.
- A fractional power taken as the root only.

**Identities and proof**
- Coefficients swapped.
- a(x + b)² + c expanded without multiplying by a.
- An example offered as a proof.
- A factor slip, as in 3(n + 3) for 3n + 3.
- "Even" given where the claim is "multiple of 4".
- The middle term dropped, as in (n + 1)² = n² + 1.

**Iteration**
- The cube of a negative number taken as positive.
- An off-by-one iterate (x₂ or x₄ given for x₃).
- Stopping before the values settle.
- Sign errors when rearranging.

**Forming equations**
- The wrong angle total.
- Perimeter or area confused.
- x given where the question asks for an angle or length.
- kx counted as one x.
- Consecutive even numbers stepped by 1.
- Rounding the wrong way in context.
- A negative length accepted.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-algebra3.test.js` has 7 tests.<br>• **Generation:** all 16 skills at every level (200 items each) are deterministic and JSON-safe. Each own answer is correct, every trap is wrong and explained, and no hyphen minus or x^1 appears.<br>• **Independent checks against the printed prompt, using a separate evaluator:**<br>&nbsp;&nbsp;– function machines rerun from the printed operations; f(f⁻¹(x)) = x; composites recomputed; f(answer) = k;<br>&nbsp;&nbsp;– simplified, added, multiplied and divided fractions equal the printed expression wherever it is defined;<br>&nbsp;&nbsp;– fraction-equation solutions satisfy the equation, with a brute-force search finding no other integer solutions;<br>&nbsp;&nbsp;– index answers equal the printed expression;<br>&nbsp;&nbsp;– identity answers make both sides equal;<br>&nbsp;&nbsp;– representation options checked by brute force over n = 0–24, with every wrong option failing for some n;<br>&nbsp;&nbsp;– claims of "multiple of k", "odd" and "constant" verified;<br>&nbsp;&nbsp;– counterexamples: the chosen value is composite, odd or smaller, and every other option agrees with the claim;<br>&nbsp;&nbsp;– completed-square proofs: the minimum of the quadratic, found by a 0.001 grid search, is above the stated bound;<br>&nbsp;&nbsp;– sign-change values recomputed, and a fine-grid search finds exactly one positive root in the stated interval;<br>&nbsp;&nbsp;– the correct rearrangement fixes the root found by bisection, and no wrong one does;<br>&nbsp;&nbsp;– iterates recomputed with Math.cbrt and Math.sqrt; the limit is a root, and the 2 d.p. answer is not near a rounding boundary;<br>&nbsp;&nbsp;– angle sums, perimeters, areas, ages, consecutive numbers and think-of-a-number answers satisfy their stories; consecutive-number answers are unique;<br>&nbsp;&nbsp;– rounding direction matches the context.<br>• **Marking:** the single-fraction and divided-monomial forms have unit tests. |
| Interaction | `science-app/tools/maths-browser-flow-7.mjs`, 78 checks pass:<br>• lesson counts per tier (18 Foundation, 20 Higher);<br>• Higher-only lessons hidden at Foundation;<br>• every worked-example card has a visual;<br>• subscripts render;<br>• calculator badge on the iteration lesson and its items, and not elsewhere;<br>• all five investigations, including 17 wrong paths;<br>• a part-built proof survives reload;<br>• an uncancelled fraction gets the partial message;<br>• trap feedback appears in practice;<br>• tier rungs (Foundation: function machines only; proof hidden);<br>• forming equations practised to mastery, then checked at 10/10;<br>• science storage untouched;<br>• 390px: 15 screens with no overflow;<br>• no console errors. |
| Regression | 494 automated tests pass on `main` 71ab5d7 plus this change. The six earlier walk-throughs were rerun (87, 68, 62, 94, 69 and 64 checks); flow 6 now reads the Algebra lesson count from the page. In total, 522 browser checks pass. |
| Defects found in QA and fixed | • The function-machine visual name clashed with an existing Number visual and threw a console error.<br>• A test-only regex captured the wrong formula; that was a harness fault, not an engine fault.<br>• An iteration trap could fall inside the answer tolerance.<br>• A show-that explanation was too terse.<br>• x^1 appeared in index prompts. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

Evidence: `science-app/maths-browser-evidence-7.json`. Screenshots: `crash-course-maths-algebra4-function-machine.png`, `crash-course-maths-algebra4-iteration.png`, `crash-course-maths-algebra4-fraction-partial.png`.

## Known limitations

- **Proofs.** Written proofs and show-that arguments are not marked as free text. Practice marks the algebra that carries the argument (simplified, factorised or completed-square forms) and the choice of a correct final line or counterexample.
- **Iteration.** Convergence and divergence are illustrated, not assessed. The sign-change conclusion is shown in worked solutions but not marked.
- **Not built:**
  - algebraic surd expressions (A4);
  - exponential graphs in context (A14 Higher);
  - areas under curves and financial graphs (A15);
  - dashed region boundaries (A22);
  - geometric sequences with a surd ratio (A24 Higher).
- **Contexts.** Forming-equation contexts come from templates.
- **Not reviewed.** Item wording and difficulty have not been reviewed by a maths teacher.

## Cache

Maths modules are at `20261022-maths-r7`, because the shared modules changed. **Publishing needs a global version bump.**

## Next concrete actions

1. Adam reviews Algebra 16–20.
2. Publish.
3. Start the Ratio, proportion and rates of change strand (R1–R16), or close the remaining Algebra gaps listed above.
