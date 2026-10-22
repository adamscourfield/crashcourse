# Maths Algebra batch 01: expression marking and six lessons

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Builds on the Number engine (`maths-number-pilot.md`, `maths-number-batch-02.md`, `maths-number-batch-03.md`).

## Why the engine came first

Algebra answers have many correct forms: 2(x + 3), 2x + 6 and 6 + 2x all have the same value. A question can also demand one form: expand, factorise or simplify. Exact-answer marking would reject correct work. Value-only marking would accept a copied-out bracket as "expanded". The batch therefore starts with an expression-equivalence engine (`dist/maths/algebra.js`).

## Specification check

The specification is Pearson Edexcel 1MA1, Issue 2. I compared the Foundation and Higher statement lists for A1–A25 on 22 October 2026. The statement-level mapping for every Algebra statement, including those not yet built, is in `curriculum/maths-algebra-requirements.csv`.

| Statement | Higher-only part | In this batch |
|---|---|---|
| A4 | algebraic fractions; products of two **or more** binomials; factorising ax² + bx + c | Three binomials: `expand-double` level 3. ax² + bx + c (and a²x² − b²): `factorise-quadratic` level 3. Algebraic fractions are not built. |
| A6 | "and proofs" | Not built |
| A7 | inverse and composite functions; function notation | Not built |
| A1, A2, A3, A5, A17, A21 | none | Built (A17 algebraic only; A21 in part) |
| A13, A15, A16, A20 | whole statement is Higher-only | Later batches |

## Engine: algebra answers (`algebra.js`)

**Parser:**
- Handles numbers, letters and implicit multiplication (3ab, 2(x + 1), (x + 1)(x − 2)).
- Accepts + − × * · ÷ /, powers with ^ or ² ³, and brackets.
- Upper and lower case are matched to the question's letters.
- A leading "x =" or "t =" is accepted.

**Refused with a specific hint, rather than guessed:**
- "x2": the hint says to use ^ for powers and to put numbers before letters.
- "1/2x": refused as ambiguous, with a request for brackets.
- Unbalanced brackets.
- Unknown characters.

**Value:**
- Both expressions are evaluated to rational functions with exact rational coefficients.
- They are compared by cross-multiplying, so (v − u)/a and v/a − u/a are equal.
- Equivalence is exact, not sampled.

**Form, judged from the written structure:**
- `simplified`: like terms collected, no brackets, each letter written once (x × x must be x²).
- `expanded`: as simplified. A bracket left in gives "the question asks you to expand".
- `factorised`: the answer must be a product with a bracket. It is not fully factorised if any of these hold:
  - a bracket keeps a common number or letter;
  - a quadratic bracket can still be factorised (rational roots, including a difference of two squares).
- `notation`: simplified, with no × or ÷ signs, and fraction coefficients rather than decimals (A1).
- `any`: value only. Used for rearranged formulae and expressions from words.

**Other changes:**
- Equation answers are numbers with `var: 'x'`. They accept "x = 3.5", 7/2 or 14/4: any exact equivalent.
- A rearranged formula containing the subject on both sides is wrong.
- The answer box shows a live preview ("Reads as: 3x² − 2(x + 1)") plus keys for x², brackets and /.
- Trap expressions give targeted feedback for specific wrong answers.

## Lessons (Algebra topic, teaching order 1–6)

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only level) | Investigation |
|---|---|---|---|---|
| maths.algebra.notation | Algebraic notation, substitution and vocabulary | A1, A2, A3, A6 | notation (3), substitute (3), vocabulary (2) | Build machines for 2n + 5 and 2(n + 5); a table compares outputs. Same operations in the wrong order are diagnosed. Substitute n = −3. |
| maths.algebra.simplify | Simplifying expressions and the laws of indices | A4, A1 | collect (3), index-laws (3) | Sort terms into like-term groups (a² rejected from the a group), then write the simplified expression. Count factor chips for x³ × x⁴ and (x³)². |
| maths.algebra.single-brackets | Expanding and factorising single brackets | A4 | expand-single (3), factorise-single (3) | Area model for 3(x + 4) and x(x + 6). Choose the side length for 6x + 15 and 4x² + 10x: 1, non-common factors and partial common factors are each rejected with a reason. |
| maths.algebra.quadratics | Double brackets and factorising quadratics | A4 | expand-double (2 + H), factorise-quadratic (2 + H) | Grid method for (x + 3)(x + 5) and (x − 4)(x + 2). Factor pairs for x² + 7x + 12 and x² − x − 12. |
| maths.algebra.linear-equations | Solving linear equations | A17, A3, A21 | solve (3), solve-both-sides (3), form-solve (3) | Balance: apply operations to both sides of 3x + 5 = 20 and 5x + 3 = 2x + 18. Valid but unhelpful moves are explained. |
| maths.algebra.formulae | Using and rearranging formulae | A5, A2 | formula-use (3), rearrange (3) | Reverse machine: undo v = u + at and P = 2(l + w) in reverse order, then type the subject. |

The engine now has 52 skills: 38 Number and 14 Algebra.

### Misconceptions targeted (trap answers with feedback)

**Notation and substitution**
- y + y + y written as y³.
- a × a written as 2a.
- Coefficients added instead of multiplied.
- a ÷ b inverted.
- 3a read as the digits "3 and a".
- (2x)² used for 2x².
- A negative number squared to a negative.
- ½ dropped, or (mv)² for mv², in scientific formulae.

**Collecting like terms**
- Sign of a term ignored.
- Unlike terms combined (3a + 2b = 5ab; x² + x = x³).

**Index laws**
- Indices multiplied when they should be added.
- Indices added for a power of a power.
- Coefficients added, or not raised to the power.
- x⁰ taken as 0.

**Brackets**
- Only the first term multiplied.
- −k × −b given the wrong sign.
- x × x written as 2x.
- (x + a)² taken as x² + a².
- Middle terms missing.

**Factorising**
- A factor pair with the right product but the wrong sum.
- Wrong signs in the brackets.
- Difference of two squares written as (x − k)².

**Equations**
- Inverse operations applied in the wrong order.
- Sign kept when moving a term.
- Bracket partly expanded.
- Angles on a line taken as 360°.
- Perimeter using only two sides.
- k(x + a) written as kx + a in a context.

**Rearranging**
- v − u/a for (v − u)/a.
- Dividing by 2 instead of multiplying to undo ½.

## Studio changes

- Topics are now explicit. The course map's Algebra card switches topic and returns to the lesson last opened there.
- Each topic has its own lesson list, numbering, sidebar progress, review list, topic assessment, assessment label and breadcrumb. An unfinished assessment in one topic is kept while you view the other.
- Algebra's topic assessment uses each of its 14 skills once. Number keeps its 20-question assessment.
- `frac.js` now normalises −0 to 0. This fixed one equation item that did not survive a save and reload.

## Verification evidence

| Check | Result |
|---|---|
| Specification | Higher-only boundaries for A1–A25 compared (table above; full mapping in the requirements CSV). |
| Mathematical accuracy | `tests/maths-algebra.test.js` has 11 tests.<br>• **Generation:** every level of all 14 skills generates 250 deterministic, JSON-safe items. Each item's own answer marks correct; every trap marks wrong and has explanatory feedback. No hyphen appears where a minus sign is meant.<br>• **Independent evaluator:** printed prompts and answers are checked with a separate evaluator (plain JavaScript with the implied multiplications made explicit), not the marking parser.<br>• **Simplify, expand and factorise:** over 4,000 answers equal the printed expression at random points.<br>• **Substitution:** answers match the printed values.<br>• **Equations:** every solution satisfies the printed equation.<br>• **Formed equations:** answers satisfy the described situation.<br>• **Formula use:** values make the formula true.<br>• **Rearranged formulae:** they make the original formula true for random values of the other letters.<br>• **Vocabulary:** only the identity option holds for every x. |
| Marking | 28 tabulated equivalence and form cases. Unreadable input with hints. "x =" answers. Fraction and decimal equation answers. Case correction. |
| Tier restrictions | Exactly two Higher-only levels, both final levels. No Foundation check reaches them. Browser: 2 levels at Foundation, 3 at Higher. |
| Interaction and wrong paths | `science-app/tools/maths-browser-flow-4.mjs`, 94 checks pass:<br>• course-map topic switch and topic-scoped lists;<br>• every Discover card has a visual;<br>• all six investigations, including their wrong paths;<br>• typed algebra: hint for unreadable input (nothing recorded), preview, "expand" and "factorise" form messages, worked solution after a wrong answer;<br>• a full lesson practised to mastery, then checked at 9/10 and completed;<br>• "x = …" and "t = …" answers accepted;<br>• tier split;<br>• topic-scoped assessment and review;<br>• Number progress and last lesson preserved;<br>• science storage unchanged and maths markup cleared;<br>• reload restores the topic, lesson and balance steps;<br>• 390px: twelve screens with no overflow. |
| Regression | 431 automated tests pass on `main` 9f4373c plus this change. The Number walk-throughs were rerun after rebasing: 87, 68 and 62 checks pass, so 311 browser checks pass in total. |
| Harness reliability | One run of the pilot (Number) walk-through ended with an uncaught exception before its summary. The cause was not captured. Seven later runs passed. Separately, the pilot harness reports 86 or 87 checks because one check runs only when a random task appears; this is pre-existing. |
| Defects found in QA and fixed | • Hyphens instead of minus signs in some worked steps and prompts. A sanitiser and a test now prevent this.<br>• Several trap messages were too terse to teach and were rewritten.<br>• An answer like {p/2} was converted for marking as (p)/(2) and judged "not simplified". Monomials divided by a letter are now accepted, as A1 requires a/b.<br>• Large index-law answers hit a power cap (raised).<br>• The breadcrumb always said "Maths / Number".<br>• A term-group label showed a raw "a^2".<br>• −0 in one item broke reload.<br>• Topic memory used a key that the saved-state restore drops; it now uses the existing `lastLessonByTopic`. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only; not deployed to the Site. |

Evidence: `science-app/maths-browser-evidence-4.json`. Screenshots: `crash-course-maths-algebra-machine.png`, `crash-course-maths-algebra-expand.png`, `crash-course-maths-algebra-balance.png`.

## Known limitations

- **Final answers only.** No method marks, and "show that" arguments and proofs (A6) are not marked.
- **Not yet built:**
  - algebraic fractions (A4 Higher);
  - square roots of expressions in rearranging (such as A = πr² for r);
  - negative and fractional algebraic indices;
  - function notation (A7);
  - graphical solutions (A17);
  - A8–A16 and A18–A25.
- **Ambiguous input is refused.** "1/2x" must be typed with brackets. This is deliberate, but some students will find it fussy; the hint tells them what to do.
- **Choice items.** Vocabulary items (A3) are choice items, which give weaker evidence than typed answers.
- **Calculator use.** It is not enforced; all items are labelled non-calculator.
- **Specialist review.** Item wording and difficulty have not been reviewed by a maths teacher. Rearranging with the subject twice is at both tiers because A5 is identical at both, but it is demanding for Foundation.

## Cache

Maths modules are at `20261022-maths-r4`, and `app.js` imports the r4 studio. `index.html` loads `app.js?v=20261022-physics01`, so **publishing this batch requires a global version bump**. Until then, browsers that cached `app.js` will keep loading the Number-only studio.

## Next concrete actions

1. Adam reviews the six Algebra lessons in the browser, especially the input rules and the lesson difficulty.
2. Publish with a global cache bump.
3. Next Algebra batch: quadratic equations (A18), simultaneous equations (A19), inequalities (A22) and sequences (A23–A25). Graphs (A8–A12, A14) need a graph-plotting input first.
