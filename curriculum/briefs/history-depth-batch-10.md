# History depth batch 10: Medicine key topic 4, c1900–present (11 4.1–4.2)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Specification: Issue 6 PDF (checked). Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| Genetic and lifestyle causes | 11 4.1 | Franklin, Crick, Watson and Wilkins; genes and disease; the Human Genome Project; lifestyle causes | Explain one difference… (4) |
| Modern diagnosis | 11 4.1 | X-rays and blood tests; ultrasound, CT and MRI; monitors; impact and limits | Explain why… (12) |
| Hospital care and the NHS | 11 4.2 | Care before 1948; the impact of war and Beveridge; Bevan and the doctors; access and cost | Explain why… (12) |
| Magic bullets and antibiotics | 11 4.2 | Ehrlich and Salvarsan 606; Prontosil and M&B 693; later antibiotics; resistance | Explain why… (12) |
| High-tech medical and surgical treatment | 11 4.2 | Dialysis and transplants; joint replacement, keyhole and robotic surgery; cancer treatment and IVF; limits | How far… (16) |
| Mass vaccination and lifestyle campaigns | 11 4.2 | Diphtheria, polio, MMR and HPV; why vaccination reached most children; lifestyle campaigns; law and tax | Explain one similarity… (4) |

History has 144 lessons.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 144 lessons. 53 questions were rewritten after the length checks (10 of 102 items remain strong length tells). |
| Interaction | The History flow walked the 6 new lessons through every stage, plus the whole-app checks: 117 checks pass. |
| Regression | 781 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. Dates such as the diphtheria campaign (1942) and prescription charges (1952) follow common textbook usage; the national diphtheria scheme began in 1940 and was widely rolled out from 1942. |

## Overlap with the overviews

These lessons sit under the overviews on modern ideas, NHS treatment and modern prevention. Fleming and the mass production of penicillin, and the lung-cancer case study, are left to their own lessons; this batch mentions them only in passing.

## Not done

Not published; no specialist review; written answers are not marked; sources are described, not printed.
