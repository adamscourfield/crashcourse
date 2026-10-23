# Maths Probability batch 01: P1–P9

Date: 23 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

This batch opens the fifth Maths topic, Probability (`maths.probability`), with four lessons at both tiers. Conditional probability is a Higher-only skill inside lesson 4. Every statement P1–P9 has teaching and practice; see `curriculum/maths-probability-requirements.csv`. That statement list is paraphrased and was not re-fetched from Pearson in this batch, so re-check its wording at review.

## Lessons

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only) | Investigation |
|---|---|---|---|---|
| maths.probability.basics | Probability, relative and expected frequency | P1–P5 | single (3: counters in a bag, P(not A) and missing probabilities, words on the scale), frequency (3: expected frequency, relative frequency, fair or biased) | Toss a coin 10 → 1000 times and watch heads ÷ tosses settle; expected sixes; a missing probability |
| maths.probability.sample-spaces | Sample spaces and Venn diagrams | P6, P7, P4 | sample-space (3: product rule, two-dice grids, probabilities from grids), venn (3: read, complete from totals, set notation ∩ ∪ ′) | Highlight the cells for each total; 3 × 4 outfits; fill a Venn diagram from the overlap |
| maths.probability.tree-diagrams | Combined events and tree diagrams | P8, P6, P4 | combined (3: AND/OR, trees with replacement, at least one), dependent (3: both the same, one of each, at least one / same colour) | Switch a tree between with and without replacement; P(both red); P(at least one red) |
| maths.probability.conditional | Two-way tables, frequency trees and conditional probability | P9, P6 | two-way (3: complete a table, frequency trees, percentages to frequencies), conditional (H3: two-way tables, Venn diagrams, trees, including the reversed condition) | Complete a two-way table; Higher: highlight the bus column for P(Year 11 \| bus); P(B \| A) from a Venn diagram |

The engine now has 154 skills. All four lessons are non-calculator.

## Answers and figures

- **Probabilities are exact fractions.** Any equivalent fraction is accepted (form `value`), as in the exam. The table question asks for a decimal, to match the table.
- **New figures, drawn by `geomfig.js`:**
  - tables, including two-dice grids and two-way tables;
  - Venn diagrams with ξ;
  - tree diagrams with the node words in gaps between the stages;
  - frequency trees.
- **Tree diagrams.** The first version drew the node words over the branch lines. This was found in screenshot review and fixed.

## Misconceptions targeted

**Single events**
- Dividing by the number of other outcomes.
- Treating colours as equally likely.
- Giving P(A) when P(not A) was asked.

**Frequency**
- Probability given instead of expected frequency.
- Scaling by adding.
- Distrusting large experiments.

**Sample spaces**
- Counting distinct totals instead of cells (1/11).
- "Greater than" including the boundary.
- Adding choices instead of multiplying.

**Venn diagrams**
- Counting the overlap twice.
- Mixing up ∩ and ∪.
- Complements.

**Trees**
- Adding along branches.
- Treating draws as replaced when they are not.
- Only one path for "one of each" or "same colour".
- Adding chances for "at least one".

**Conditional probability**
- Dividing by the total instead of the condition's group.
- Reversing the condition.

## Verification evidence

| Check | Result |
|---|---|
| Mathematical accuracy | `tests/maths-probability.test.js` has 7 tests.<br>• **Generation:** all 8 skills, 200 items per level: deterministic, JSON-safe, self-marking. Probabilities lie in [0, 1], unsimplified fractions are accepted, and traps are wrong and explained.<br>• **Independent re-solves:**<br>&nbsp;&nbsp;– from the printed counts;<br>&nbsp;&nbsp;– from the numbers drawn in tables, Venn diagrams and frequency trees;<br>&nbsp;&nbsp;– the drawn dice grid checked cell by cell;<br>&nbsp;&nbsp;– combined and conditional answers by enumerating every ordered pair of draws from the bag;<br>&nbsp;&nbsp;– tree branches checked against the bag.<br>• **Records:** P1–P9 references, tiers, prerequisites, non-calculator flags, and the stale-redraw guard. |
| Interaction | `science-app/tools/maths-browser-flow-14.mjs`, 59 checks pass:<br>• course map and topic;<br>• 12 card visuals;<br>• all four investigations with 12 wrong paths;<br>• reload keeps tosses and an answer;<br>• tree practice shows its figure;<br>• a probability trap explained;<br>• an unsimplified fraction accepted;<br>• the basics lesson practised to mastery and checked at 10/10;<br>• Foundation hides the conditional skill, Higher shows it and the Higher investigation parts;<br>• 390px: 12 screens with no overflow;<br>• no console errors. |
| Regression | 642 automated tests pass. All fourteen Maths walk-throughs pass: 87, 68, 62, 94, 69, 64, 78, 53, 70, 46, 77, 72, 67 and 59 checks, 966 in total. Flows 4, 9 and 11 now check that the course map lists only built topics. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. |

## Known limitations

- **Not marked on screen:**
  - drawing Venn diagrams, trees, two-way tables and sample spaces (modelled only);
  - running real experiments (simulated).
- **Fairness judgements** are chosen from options, not explained in writing.
- **Not reviewed.** Item wording and difficulty have not been reviewed by a maths teacher.

## Cache

Maths modules are at `20261023-maths-r11`. **Publishing needs a global version bump.**

## Next

Statistics (S1–S6).
