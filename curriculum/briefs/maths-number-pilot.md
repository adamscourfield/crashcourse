# Maths pilot — Edexcel 1MA1 Number: practice engine and five lessons

Date: 22 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main` together with batch 02 (`curriculum/briefs/maths-number-batch-02.md`); **not published to the Site**; **not specialist-reviewed**.

## Why maths needed an engine before lessons

The science lesson format has about 3.4 hand-written practice items per lesson; a learner completes Practise by answering each one correctly once, and the lesson by scoring 80% on 5–8 fixed check items. That is reasonable evidence for "can explain diffusion", but far too thin for procedural fluency in mathematics. The answer types (multiple choice, a number with a tolerance, chemical half-equations) also cannot mark exact fractions, mixed numbers or products of primes, and science progress is stored under a single key with a hard-coded science fallback lesson.

The pilot therefore builds a maths engine first and proves it on five Number lessons.

## Engine design (science-app/dist/maths/)

| Module | Responsibility |
|---|---|
| `rng.js` | Seeded randomness. Every item is a pure function of (skill, level, seed). |
| `frac.js` | Exact rational arithmetic; parses integers, `3/4`, mixed `1 2/3`, decimals and Unicode minus signs, recording the *form* written. |
| `answers.js` | Answer kinds `integer` (optionally a prime product), `fraction` (`simplest` / `mixed` / `improper`), `primes`, `choice`. Marking returns `correct`, `partial` (right value, wrong form: not simplified, not mixed, not all prime), `wrong` or `invalid` (unreadable; nothing recorded). |
| `skills-number.js` | 13 skill generators with 2–3 levels each. Each item carries a worked solution and "trap" answers that identify specific misconceptions with targeted feedback. |
| `mastery.js` | Pure progress rules (below). Separate storage key `crash-course-maths-v1`. |
| `lessons-number.js` | Five lessons: worked-example cards, model, skills, 10-item check plan, model limits. |
| `models-number.js` | SVG/HTML visuals and five interactive investigations. No 3D: the representations are number lines, expression collapsing, bars, area grids, factor trees and Venn diagrams. |
| `studio.js` | Maths UI: Discover → Investigate → Practise → Check, plus review and topic assessment. |
| `render.js`, `maths.css` | Accessible stacked fractions/mixed numbers/powers; maths layout on the shared design tokens. |

Integration with `app.js` is a single branch in `refresh()` plus maths-aware handlers for the shared sidebar buttons. Science code paths and the science store (`crash-course-v2`) are untouched; the maths DOM is cleared whenever another subject is shown (science uses page-wide selectors such as `.intro h1`).

### Mastery rules (mastery.js `RULES`)

- **Ladder:** 2 unassisted correct in a row moves up a level; 2 wrong in a row steps back down (above level 1).
- **Secure skill:** at the top level for the learner's tier, 4 of the last 5 unassisted attempts correct (minimum 4). A three-level skill therefore needs at least 8 correct answers; typical learners will need more.
- **Assisted attempts:** an attempt made after "Show me a worked example" never raises a level.
- **Wrong answers** always show the full worked solution of that item, plus targeted misconception feedback where a trap matches.
- **Mixed round:** once every skill is secure, skills are interleaved at the top level until 4 of the last 5 are correct.
- **Independent check:** 10 freshly generated items per run (each run different), no hints, first answers count, 80% to pass. Missed items flag their skill for immediate recall.
- **Review:** completed skills return after 1, 3, 9 and 21 days (matching science); review runs interleave one new item per due skill.
- **Tier-aware:** a skill practised at Foundation is not counted as practised at Higher if Higher adds levels.

In the recorded browser run, Lesson 1 took 29 practice answers (two of them deliberately wrong) to secure three skills and pass the mixed round, compared with 3–4 fixed items in a science lesson.

## Specification

Pearson Edexcel Level 1/Level 2 GCSE (9–1) in Mathematics, **1MA1**, Issue 2 (June 2015), first certification 2017. Source: https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/specification-and-sample-assesment/gcse-maths-2015-specification.pdf, checked 22 October 2026. Paper 1 is non-calculator; papers 2–3 allow a calculator; each paper is 1h30, 80 marks. Tier weightings for Number: Foundation 22–28%, Higher 12–18%.

**Wording caveat:** statement content below is paraphrased from the specification. The plain-text extraction available here dropped the bold/underlined formatting that marks Higher-only content, so Higher-only boundaries must be confirmed against the PDF before Higher-specific Number lessons are built.

Statement-level mapping: `curriculum/maths-number-requirements.csv`.

## Lessons

| Order | Lesson ID | Title | 1MA1 refs | Skills (levels) | Investigation |
|---|---|---|---|---|---|
| 1 | maths.number.negatives | Negative numbers | N1, N2 | compare (2), add-subtract (3), multiply-divide (3) | Number-line jumps (start, direction) and a sign pattern table |
| 2 | maths.number.order-of-operations | Order of operations and inverses | N3 | evaluate (3), brackets (2), inverse (3) | Select the next operation to collapse four calculations; build two reverse machines |
| 3 | maths.number.primes | Primes, factors and multiples | N4 | identify (2), factorise (3), hcf-lcm (3) | Two factor trees for 72 with different first splits; Venn diagram for HCF/LCM of 84 and 120 |
| 4 | maths.number.fractions-add-subtract | Adding and subtracting fractions | N2, N8 | simplify-convert (3), add-subtract (3) | Re-split fraction bars until pieces match, then combine |
| 5 | maths.number.fractions-multiply-divide | Multiplying and dividing fractions | N2, N8, N12 | multiply-divide (3), of-amount (3) | Area model for products; "how many fit" for division |

Primes precedes fractions because common denominators and simplifying depend on HCF/LCM. All five lessons are available at Foundation and Higher; no Higher-only levels exist in this pilot.

### Misconceptions targeted (trap answers with feedback)

Subtracting a negative treated as subtracting; dropped sign on the starting number; wrong sign from an odd/even count of negatives; (−a)ᵏ treated as −a × k; strict left-to-right evaluation; addition before multiplication; division before multiplication when they have equal priority; squaring a whole bracketed sum; inverse operations applied in the wrong order or re-applied forwards; adding numerators and denominators; denominator multiplied without converting numerators; wholes and fractions handled separately in mixed-number subtraction (borrowing) and multiplication; multiplying without taking the reciprocal; taking the reciprocal of the first fraction; k × a/b scaled top and bottom; reverse-fraction problems solved forwards; "of" treated as addition; 1 treated as prime; HCF and LCM swapped; a × b given as the LCM; composite factors left in a prime factorisation.

## Verification evidence

| Check | Result |
|---|---|
| Full specification statements mapped | Partial by design: N4 covered; N1, N2, N3, N8, N12 partially. Gaps listed in the requirements CSV. |
| Factual and mathematical accuracy | `tests/maths.test.js`: every skill level generates 250 items; each item's stored answer marks correct; every trap marks wrong and has feedback. Over 3,000 "Work out" items are re-evaluated from their **printed prompt** with plain JavaScript arithmetic and agree with the stored answer. Prime factorisations, HCF/LCM, inverse chains and fraction-of-amount items are checked against their defining properties. 54,000-item smoke generation: 0 failures. |
| Course and tier restrictions | Tier-aware practised status tested. No Higher-only content in the pilot. |
| Answer keys / marking | Equivalent notation accepted (Unicode/ASCII minus, mixed/improper where allowed, prime products in any order or notation); form errors (not simplified, not mixed, composite factors, decimal for fraction) distinguished from wrong values. |
| Interaction and wrong-answer paths | Browser walk-through, 87 checks, all pass: every investigation completed including its wrong paths; practice wrong answer → worked solution and trap feedback; worked example marks attempt assisted; level-up shown; full practice to mastery (29 answers); check scored 7/10 then a different 10/10 retake; review and assessment runs. |
| Resume and saved answers | Investigation drafts, answered practice items with solutions, locked first check answers and an unfinished topic assessment all survive reload. |
| Phone and keyboard | 390px: no horizontal overflow on all four stages and the fraction input. Investigations are button/keyboard operated; the number line also takes arrow keys. Full screen-reader testing not performed. |
| Regression | 389 automated tests pass after batch 02 (370 on `main` + 19 maths). Science lessons/concepts storage identical before and after all maths work; science returns to the same lesson with its own heading; planned subjects still show the planned screen. No console errors other than blocked Google Fonts requests in the test sandbox. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only; not deployed to the Site. |

Browser evidence: `science-app/maths-browser-evidence.json`. Reusable harness: `science-app/tools/maths-browser-flow.mjs`.

## Defects found and fixed during QA

1. An answer that secured a skill was immediately replaced by the next skill's question, hiding its feedback. Answered items now persist until Next.
2. Science's page-wide selectors wrote the science lesson title into the maths heading once the maths markup existed. Maths markup now sits after the science markup and is cleared when maths is not shown.
3. **Pre-existing, affects live science:** `family.css` line 34 opened `@media (prefers-reduced-motion: no-preference)` without closing it. Every later rule (phone layout, logo redesign, caption spacing) applied only to users who had *not* requested reduced motion, so reduced-motion users saw a broken phone layout. Fixed with one closing brace; verified at 390px with reduced motion.
4. Area-model wording called the overlap "darkest" when it is the brightest colour; overlap cells now also carry a dot so colour is not the only cue.

## Known limitations

- Marking is exact-answer only: no method marks, no written working, no "show that" or extended reasoning (AO2/AO3 written responses). Choice items (brackets placement, primes/vocabulary) give limited AO2 evidence.
- Item quality has been tested for correctness, not yet reviewed by a maths teacher for difficulty calibration, wording or Edexcel exam style.
- Algebraic expression equivalence is not implemented yet; it is needed before the Algebra strand.
- The stage bar clips "04 Check" by about 16px at 390px. This is identical in science and comes from a deliberate earlier row-layout rule; left unchanged.
- Calculator use is labelled per item (all "non-calculator" here) but not enforced.
- Progress is per browser, as for science.

## Handover

- Implemented files: `science-app/dist/maths/*`; `app.js` (maths branch and handlers); `progress.js` (Maths available); `index.html` (container and stylesheet); `family.css` (closing brace); maths modules versioned `20261022-maths-r2` (science version unchanged; see the batch 02 brief); `tests/maths.test.js`; `tests/progress.test.js` (subject assertion).
- Register rows updated: subject `maths`; topic `maths.number`; five lesson rows.
- Next concrete actions: (1) Adam reviews the five lessons in the browser and the item wording; (2) publish via the Sites workflow, preserving the audience; (3) confirm Higher-only Number boundaries in the PDF; (4) remaining Number statements N5–N16, starting with decimals and formal written methods (N2) and the four-operation calculator work; (5) expression-equivalence marking before Algebra.

Publication22October2026: included in the combined Ecology05 release, deployment appgdep_6ad9cfa2332c8191b4da49ad85dc4d20, source2fc5da5392336b18adf235c2270cf70e438b2f9e. Original389-test/155-browser-check Maths evidence retained; combined399 tests and Science/Maths subject/tier/mobile smoke checks pass. See BUILD_STATUS.md and feeding-browser-evidence.json. Specialist and written-working/expression-marking limits remain.
