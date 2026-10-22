# Maths Number batch 02 — decimals, FDP, rounding, powers and standard form

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`; **not published to the Site**; **not specialist-reviewed**. Builds on `curriculum/briefs/maths-number-pilot.md`.

## Specification check

Pearson Edexcel 1MA1, Issue 2. Foundation and Higher statement lists compared on 22 October 2026 to locate Higher-only content (the earlier extraction lost the bold formatting):

| Statement | Higher-only part | Where it lives |
|---|---|---|
| N6 | Estimate powers and roots of any given positive number | `powers.evaluate` level 3 |
| N7 | Fractional indices | `powers.index-laws` level 4 |
| N10 | Recurring decimals to fractions and back | `fdp.convert` level 3 |
| N16 | Upper and lower bounds | `rounding.error-interval` level 3 |
| N2, N9, N12, N14, N15 | None: identical at both tiers | — |

Higher-only levels are the last levels of their skills, so Foundation learners' ladders, checks, mixed rounds, reviews and assessments stop before them (tested). Statement mapping: `curriculum/maths-number-requirements.csv` (N1–N16).

## Lessons (teaching order 6–10)

| Lesson ID | Title | Refs | Skills (levels; H = Higher-only level) | Investigation |
|---|---|---|---|---|
| maths.number.decimals | Decimals and written methods | N2 | decimals.add-subtract (3), decimals.multiply (3: long multiplication, × 1 d.p., × 2 d.p.), decimals.divide (3: short division to decimals, ÷ a decimal, long division) | Scale a division by powers of 10 until the divisor is whole (scaling one number only is rejected with the changed value); place the decimal point in three products against an estimate |
| maths.number.fdp | Fractions, decimals and percentages | N1, N10, N12 | fdp.convert (2 + H), fdp.order (2), fdp.percentages (3) | Convert mixed cards to decimals, then order them smallest first on a zoomed number line (two rounds) |
| maths.number.rounding | Rounding, estimation and error intervals | N14, N15, N16 | rounding.round (3), rounding.estimate (3), rounding.error-interval (2 + H) | Round on a zoomed line including an exact halfway case; build error intervals by setting both ends and their ●/○ inclusivity |
| maths.number.powers | Powers, roots and indices | N6, N7 | powers.evaluate (2 + H), powers.index-laws (3 + H) | Factor chips for ×, ÷ (cancel pairs) and power-of-power; halving table continues into 2⁰ and negative indices |
| maths.number.standard-form | Standard form | N9 | standard-form.convert (3), standard-form.calculate (3) | Slide the decimal point until 1 ≤ A < 10, then choose the power and its sign (four numbers, large and small) |

## Engine additions

- **Answer kinds:** `decimal` (optionally requiring a number of decimal places or significant figures, so 3.10 for 2 d.p. and 0.080 for 2 s.f. are required); `standard` (A × 10ⁿ; a right value not in standard form, such as 20 × 10⁸ or 0.00045, is marked "right value, wrong form"); `power` (a single power; 78125 for 5⁷ or 1/8 for 2⁻³ is "right value, wrong form"); `interval` (error interval; correct ends with the wrong ≤/< is distinguished from wrong ends).
- **Inputs:** structured boxes for A × 10ⁿ and bases/powers with a sign toggle; an interval input whose signs toggle between < and ≤; decimal keyboard on phones.
- **Rendering:** braced exponents (`^{−2/3}`) and recurring dots.
- **Traps** now work for every numeric kind; interval traps compare end points (half-unit vs whole-unit, rounding vs truncation).
- **Skills registry** (`skills.js`) holds all 26 skills.

### Misconceptions targeted in this batch

Lining digits up from the right instead of the decimal point; copying the decimal part when subtracting from a whole number; missing place-value zero in long multiplication; decimal point misplaced in products; remainder written as a decimal; scaling only the divisor; a missing zero digit in long division; 3/8 read as 0.3; percentage not ×100 or ÷100 (or ×10); percentage computed by dividing by the percentage; > 100% treated as the excess only; truncating instead of rounding; decimal places counted as significant figures; place-holder zeros dropped (35 for 35 000); exact answer given as an estimate; multiplying by a divisor; whole-unit or one-sided error intervals; ≤/< swapped; naive bounds of differences; rounded values used for bounds; 2⁵ read as 2 × 5; square root taken as half; adding vs multiplying indices; negative index treated as a negative number; fractional index treated as multiplication; standard-form powers counted from zeros; wrong sign of the power; powers multiplied when multiplying in standard form; adding A parts when the powers differ.

## Verification evidence

| Check | Result |
|---|---|
| Specification | Higher-only boundaries verified against the Foundation/Higher statement lists (table above). |
| Mathematical accuracy | `tests/maths.test.js` (19 tests): every level of all 26 skills generates 250 deterministic items whose own answers mark correct and whose traps never mark correct; over 6,000 "Work out" prompts re-evaluated from the printed text (including standard form, roots and fractional indices); rounding answers checked as the nearest multiple of the stated unit; error intervals checked as half a unit either side (or starting at the value for truncation); standard-form conversions preserve the printed value; percentages and estimates recomputed from the prompt; recurring decimals expanded from their dotted digits. |
| Tier restrictions | Exactly four Higher-only levels, all after the Foundation levels; no Foundation check-plan entry can reach them. Browser: the conversion ladder shows 2 levels at Foundation and 3 at Higher; switching tier keeps skill progress. |
| Interaction and wrong paths | `science-app/tools/maths-browser-flow-2.mjs`: 68 checks pass, covering all five investigations with their wrong paths, every new input in practice with a wrong answer showing the worked solution, the "not in standard form" message, a full lesson secured and checked (9/10, lesson complete), the first check answer locked after reload, investigation drafts restored after reload, and five 390px screens with no overflow. |
| Regression | 389 automated tests pass (370 on `main` + 19 maths). Pilot walk-through rerun: 87 checks pass, including science storage identical before and after maths use. |
| Defects found in QA | Correct answer displayed as 0.08 where 2 s.f. requires 0.080 (fixed: displayed answers keep significant zeros); a too-terse trap message (fixed); structured answer boxes and the pilot's fraction boxes were stretched to full width by a shared `.activity input.lab-input` rule (fixed with maths-scoped selectors); interval input wrapped at 390px (fixed). |
| Specialist review | Not performed. |
| Publication | GitHub `main` only; not deployed to the Site. |

## Cache versioning decision

Science batches bump the `?v=` string in every module. To avoid conflicting with that parallel work, this change keeps `main`'s current science version (`20261022-eco4`) and versions only the maths modules (`20261022-maths-r2`). Browsers that cached the current release will not fetch the updated `app.js`, `progress.js` and `family.css` until the next global bump; **the next Site publication must bump the global version** (science batches already do this).

## Known limitations

- Only final answers are marked; written-method layout and working are not.
- Estimates are marked against rounding each number to 1 s.f., as the questions instruct; real mark schemes may accept other sensible estimates.
- Higher: fraction → recurring decimal and quotient bounds by calculation are not yet assessed.
- Item wording and difficulty have not been reviewed by a maths teacher.

## Next concrete actions

1. Adam reviews lessons 6–10 in the browser.
2. Remaining Number: N5 listing and product rule (Higher), N8 surds and π, N13 units and compound measures, N11 with Ratio.
3. Expression-equivalence marking, then Algebra.

Publication22October2026: included in the combined Ecology05 release, deployment appgdep_6ad9cfa2332c8191b4da49ad85dc4d20, source2fc5da5392336b18adf235c2270cf70e438b2f9e. Original389-test/155-browser-check Maths evidence retained; combined399 tests and Science/Maths subject/tier/mobile smoke checks pass. See BUILD_STATUS.md and feeding-browser-evidence.json. Specialist and written-working/expression-marking limits remain.
