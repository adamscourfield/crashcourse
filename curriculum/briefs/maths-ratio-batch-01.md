# Maths Ratio batch 01: ratio, sharing, proportion, percentages, growth and decay

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

This batch opens the third Maths topic, Ratio, proportion and rates of change (`maths.ratio`). The course map now lists it as available.

## Specification

The specification is Pearson Edexcel 1MA1, Issue 2. Statements R1–R16 were checked on 22 October 2026 against the Foundation and Higher subject-content lists. Higher-only parts:
- R13: constructing proportion equations;
- R15: the whole statement;
- R16: general iterative processes.

Statement-by-statement mapping is in `curriculum/maths-ratio-requirements.csv`. Speed, density and pressure are already taught in Number (N13). Gradient as a rate of change and tangents are partly covered by Algebra; those links are recorded there.

## Lessons (Ratio 1–5)

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only) | Investigation |
|---|---|---|---|---|
| maths.ratio.notation | Ratio notation, simplifying and fractions | R3, R4, R6, R8 | simplify (3: whole numbers; units, decimals and fractions; 1 : n), fraction-of (3: as a fraction, greater than 1, linear relationships) | Divide 36 : 48 by common factors until none is left; match units for 40 cm : 2 m; 4 : 10 as 1 : n |
| maths.ratio.sharing | Sharing and combining ratios | R5, R4 | share (3: two parts, three parts, from one share or the difference), combine (3: combine ratios, mixtures, changing ratios) | Build a bar model for £60 in 2 : 3; use the difference boxes for 2 : 5 |
| maths.ratio.proportion | Proportion, best buys and conversions | R7, R10, R11, R1 | proportion (3: recipes, unitary costs, inverse), best-buy (3), conversion (3: exchange, overtime pay, two currencies) | Unit prices of three packs (the cheapest pack is the worst value); scale a recipe; inverse proportion |
| maths.ratio.percentages | Percentages, percentage change and simple interest | R9 | percent-of (3), percent-change (3: change, original value, simple interest) | Choose the multiplier for +15%; a 10% bar model for a reverse percentage; percentage change |
| maths.ratio.growth-decay | Compound interest, growth and decay (calculator) | R16, R9 | compound (3: compound interest, depreciation, interest earned), multipliers (2 + H: iterative processes) | Simple against compound interest, year by year; +20% then −20% |

The engine now has 110 skills. The Ratio topic has 5 lessons at both tiers.

## Engine and records

- **Answer handling.** Ratio answers use the existing ratio input; unsimplified ratios are marked as partly right. Money answers with pence must show 2 decimal places (5.40, not 5.4) and are marked partly right otherwise. Calculator money answers accept a 1p difference.
- **Exact arithmetic.** All money and percentage generation is done in whole pence or exact fractions.
- **New test.** A test renders every Number, Algebra and Ratio worked-example visual through the studio's real dispatch chain, and fails if two drawers claim the same visual kind. This catches the defect class found twice in browser QA: `machine` in batch 04 and `bars` here.

## Misconceptions targeted

**Ratio notation**
- Mixed units compared without converting.
- Comparing numerators only.
- Dividing the wrong part for 1 : n.
- Treating a ratio additively.

**Sharing and combining**
- Dividing by each part instead of the total number of parts.
- The difference treated as one part.
- Giving the other person's share or the total.
- B parts left unmatched when combining ratios.
- Mixture total confused with one part.

**Proportion and conversions**
- Additive scaling.
- Treating inverse proportion as direct.
- Cheapest pack taken to be best value.
- Price per gram for price per 100 g.
- Multiplying or dividing the exchange rate the wrong way.
- Overtime at the normal rate, or only the extra half.

**Percentages**
- Taking the percentage without applying it.
- Dividing by the new value in percentage change.
- Taking the percentage of the sale price in reverse problems.
- Simple and compound interest confused.

**Growth and decay**
- Adding percentages of successive changes.
- Using the decimal p/100 as a multiplier.
- Applying the removals in an iteration only once.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-ratio.test.js` has 8 tests.<br>• **Generation:** all 11 skills at every level (200 items each) are deterministic and JSON-safe. Each own answer is correct, and every trap (numeric, solution, ratio or algebra) is wrong and explained.<br>• **Independent re-solve of each printed prompt:**<br>&nbsp;&nbsp;– ratios, after converting units;<br>&nbsp;&nbsp;– 1 : n forms;<br>&nbsp;&nbsp;– fractions of quantities;<br>&nbsp;&nbsp;– y = (b/a)x evaluated at several x;<br>&nbsp;&nbsp;– shares that sum to the total and keep the ratio;<br>&nbsp;&nbsp;– combined ratios;<br>&nbsp;&nbsp;– changing ratios, by brute force (unique solution);<br>&nbsp;&nbsp;– recipes, unit costs and inverse proportion;<br>&nbsp;&nbsp;– best buys from the printed prices;<br>&nbsp;&nbsp;– exchange and overtime;<br>&nbsp;&nbsp;– all percentage, interest and multiplier answers;<br>&nbsp;&nbsp;– iterative populations.<br>• **Records and models:** lesson records and tiers, the stale-redraw guard for all five models, and the visual-dispatch test. |
| Interaction | `science-app/tools/maths-browser-flow-9.mjs`, 70 checks pass:<br>• Ratio on the course map (5 lessons; Geometry still planned) and topic switching;<br>• every card has a visual;<br>• calculator badge;<br>• all five investigations, including 16 wrong paths;<br>• reload keeps a bar model;<br>• unsimplified ratio marked partly right;<br>• money missing the final zero flagged;<br>• the notation lesson practised to mastery, then checked at 10/10, with topic progress updating to 1/5;<br>• Higher rungs;<br>• Algebra progress unaffected;<br>• science storage untouched;<br>• 390px: 15 screens with no overflow;<br>• no console errors. |
| Regression | 518 automated tests and all ten Maths walk-throughs pass (691 checks) on the final tree with batch 02. |
| Defects found and fixed | • The `bars` visual-name clash with Number.<br>• A fractional penny in the overtime step.<br>• A "water" trap equal to the right answer.<br>• Several terse or garbled trap messages. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

## Known limitations

- **Templates.** Contexts are template-based.
- **Exact percentages.** Non-calculator percentages are chosen to give exact answers.
- **Still to build:** R2, R12 and R13; the graphical and algebraic parts of R10; R14 proportion graphs; R15 chords; compound-unit conversions (R1). These are planned for Ratio batch 2.
- **Not reviewed.** Item wording and difficulty have not been reviewed by a maths teacher.

## Cache

Maths modules are at `20261022-maths-r7`. **Publishing needs a global version bump.**
