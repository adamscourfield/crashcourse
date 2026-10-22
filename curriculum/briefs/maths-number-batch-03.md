# Maths Number batch 03: listing, units, compound measures, exact answers, ratio and reciprocals

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Lessons 11–15 are not published to the Site** (lessons 1–10 were published with the Ecology05 release). **Not specialist-reviewed**. Builds on `maths-number-pilot.md` and `maths-number-batch-02.md`. With this batch, every Number statement N1–N16 has teaching and independent evidence at final-answer level. The remaining gaps are listed per statement in `curriculum/maths-number-requirements.csv`.

## Specification check

The specification is Pearson Edexcel 1MA1, Issue 2. These Higher-only boundaries were checked against the Foundation and Higher statement lists:

| Statement | Higher-only part | Where it lives |
|---|---|---|
| N5 | Product rule for counting | `listing.count` level 3 (Higher level) |
| N8 | Surds: simplify and rationalise denominators | `exact.surds-simplify` and `exact.surds-rationalise`, whole skills flagged `higherOnly` |
| N10 | Recurring decimals ↔ fractions | `fdp.convert` level 3. This batch adds the fraction → recurring decimal direction as a choice variant |
| N1, N3, N11, N13 | None | — |

At Foundation, the exact-answers lesson is still shown, because multiples of π are Foundation content (N8). Its two surd skills are hidden from:
- practice;
- the mixed round;
- checks (the check tops up to 10 items from the remaining skills);
- review;
- the topic assessment;
- the lesson-complete rule.

The surd part of the circle investigation also appears only at Higher.

## Lessons (teaching order 11–15)

| Lesson ID | Title | Refs | Skills (levels; H = Higher) | Investigation |
|---|---|---|---|---|
| maths.number.listing | Systematic listing and the product rule | N5 | listing.systematic (2), listing.count (2 + H) | Outfit grid built systematically; handshake table where each pair is counted once (the duplicate and self cells are rejected with reasons) |
| maths.number.units | Units and measures | N13 | units.convert (3: length/mass/capacity; area, volume and capacity; multi-step), units.time (3: hours and minutes; durations; time and money) | Unit ladder: choose × or ÷ and the factor for each step; area factors squared |
| maths.number.compound-measures | Speed, density and pressure | N13 | compound.speed (3), compound.density-pressure (3) | Two-leg journey: the averaged speed is rejected, then total distance ÷ total time |
| maths.number.exact | Exact answers: π and surds | N8 | exact.pi (3), exact.surds-simplify (H, 3), exact.surds-rationalise (H, 3) | Circle area and circumference in terms of π; Higher: square grid showing √12 = 2√3 |
| maths.number.ratio-reciprocals | Fractions in ratios, reciprocals and inequality symbols | N11, N3, N1 | ratio-fractions (3), reciprocals (3), symbols (2) | Ratio bar: part of the whole vs part to part (both orders diagnosed) |

There are now 15 Number lessons and 38 skills.

## Engine additions

- **`exact` answer kind** (`exact.js`), for values of the form a + b√r or a + bπ with rational a and b.
  - **Accepted input:** `2√3/3`, `(2/3)√3`, `4 - 2√5`, `3pi` and `sqrt(12)`.
  - **Value vs form:** marking compares values after simplifying surds, then judges the form. The answer is "right value, wrong form" in three cases: the surd is not simplified (`√12`), a denominator is not rationalised (`1/√3`), or a decimal approximation is given where an exact answer is required.
  - **Input:** a text box plus √, π and / keys.
- **`ratio` answer kind:** a ratio in the right proportion but not in simplest form is marked partial. A reversed ratio is diagnosed as reversed.
- **Higher-only skills:** a `higherOnly` skill flag, alongside the existing per-level `higher` flag.
- **Topic assessment:** now 20 questions. It draws one skill from each lesson, then fills the remaining places at random with no repeats. Assessing every skill (38) would be too long for one sitting.
- **Version strings:** maths module versions are now `20261022-maths-r3`, including the references in `app.js` and `index.html`.

### Misconceptions targeted in this batch

**Listing and counting**
- Adding choices instead of multiplying them.
- Allowing repeats when they are not allowed.
- Counting each pair twice, or pairing a person with themselves.
- Treating ordered outcomes as unordered.
- A leading zero in a code or number.
- Ignoring an "odd number" restriction.

**Units and time**
- Converting in the wrong direction.
- Using the wrong factor (100 vs 1000).
- Using the length factor for area or volume.
- Adding km to m directly.
- Treating time as decimal (1320 − 945).
- Giving hours when minutes were asked for.
- Rounding up when a remainder cannot fill another container.

**Compound measures**
- Averaging two speeds.
- Using 60 instead of 3600 seconds per hour.
- Inverting density or pressure.
- Multiplying instead of dividing (and the reverse).

**π and surds**
- Using the diameter for the radius.
- Mixing up the area and circumference formulas.
- Treating a semicircle or quarter circle as the whole circle.
- Taking √k² as k² when simplifying a surd.
- Adding the numbers in front when multiplying surds.
- Adding or subtracting the numbers under the root signs.
- Squaring a bracket term by term.
- Taking √s × √s as 1 when rationalising.
- Not multiplying the coefficient by s when rationalising.
- Forgetting the second term of the numerator.

**Ratio and reciprocals**
- Part : part read as a fraction of the whole.
- A ratio written in reverse order.
- Not converting units before comparing.
- A reciprocal taken as the negative.
- Reciprocal of a mixed number taken without converting to an improper fraction first.

## Verification evidence

| Check | Result |
|---|---|
| Specification | Higher-only boundaries for N5, N8 and N10 checked (table above). |
| Mathematical accuracy | `tests/maths.test.js` has 23 tests.<br>• **Generation:** every level of all 38 skills generates 250 deterministic items. Each item's own answer marks correct and no trap marks correct.<br>• **Independent recomputation from the printed prompt:** unit conversions, durations, speed, density and pressure; counting results (from the counting formula for the printed numbers); ratio fractions; reciprocals (x × answer = 1); inequality statements.<br>• **Exact answers:** checked numerically against an independent evaluator.<br>• **Higher-only:** no Foundation path reaches Higher-only levels or skills. |
| Marking | Equivalent exact forms are accepted and the three form errors are separated from wrong values. Ratio simplest form and reversed ratios are tested. |
| Interaction and wrong paths | `science-app/tools/maths-browser-flow-3.mjs`: 62 checks pass.<br>• All five investigations, including their wrong paths.<br>• Typing into the exact and ratio inputs, with partial-credit messages.<br>• Foundation hides the surd skills and Higher shows them.<br>• Check top-up to 10 items.<br>• A 20-question assessment.<br>• 390px screens with no overflow. |
| Regression | 403 automated tests pass (380 science + 23 maths) after rebasing onto `main` 1231c2e, which had already published lessons 1–10 with the Ecology05 release. The pilot flow (87 checks) and batch 02 flow (68 checks) were rerun after this batch and pass, so 217 browser checks pass in total. Science storage is identical before and after maths use. |
| Defects found in QA and fixed | • Some worked solutions had steps that did not terminate cleanly: the glasses remainder and the speed-in-minutes steps.<br>• Fraction → recurring-decimal distractors used invalid dot notation.<br>• The assessment text still said it "checks the five pilot lessons".<br>• The ratio-bar feedback diagnosed only one part-to-part order.<br>• A batch 02 browser check depended on a random item and is now deterministic. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only; not deployed to the Site. |

Evidence: `science-app/maths-browser-evidence-3.json` (with the refreshed `-evidence.json` and `-evidence-2.json`). Screenshots: `crash-course-maths-listing.png`, `crash-course-maths-surd.png`, `crash-course-maths-speed.png`.

## Known limitations

- **Surds:** conjugate denominators such as 1/(2 + √3) are not assessed. They often appear on Higher papers and should be added.
- **Listing:** written lists are taught but not marked; only the count is checked.
- **π:** circle formulas are used here only to give exact answers. Circle work as geometry belongs to the Geometry strand.
- **Units:** metric units only. Rates such as pay or flow are not practised.
- **Choice items:** reciprocal-of-zero, inequality symbols and fraction → recurring decimal are assessed by choice items, which give weaker evidence than typed answers.
- **Reciprocals:** practised on their own, not inside longer priority-of-operations expressions.
- **Review:** item wording and difficulty have not been reviewed by a maths teacher.

## Cache

`index.html` loads `app.js?v=20261022-eco5`, and `app.js` imports `maths/studio.js?v=20261022-maths-r3`. A browser that cached the eco5 `app.js` will keep loading the old maths studio. **The next Site publication must bump the global version** so that lessons 11–15 appear.

## Next concrete actions

1. Adam reviews lessons 11–15 in the browser.
2. Publish Number to the Site with a global cache bump.
3. Add conjugate rationalisation at Higher.
4. Build expression-equivalence marking, then start the Algebra strand.
