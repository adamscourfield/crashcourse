# History batch 17: the last 7 exam-skill lessons (B4 and Paper 3). The roadmap is complete

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Specification: Issue 6 PDF (checked). Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | What it teaches | Practice question (not marked) |
|---|---|---|---|
| Elizabethan England: describe (4) and explain why (12) | B4 skills | Feature plus detail; point–evidence–link; own knowledge beyond the stimulus | 12-mark question |
| Elizabethan England: how far do you agree (16) | B4 skills | Support, challenge, weigh, conclude; no SPaG in Paper 2 | 16-mark question |
| Paper 3: inference (4) | 31 skills | Inference plus support from the source, twice | 4-mark question |
| Paper 3: explain why (12) | 31 skills | Choosing the question; connected causes; timing for Section B | 12-mark question |
| Paper 3: source utility (8) | 31 skills | Content, provenance, context for the named enquiry | 8-mark question |
| Paper 3: how and why interpretations differ (4 + 4) | 31 skills | The main difference in view; reasons such as evidence, focus and emphasis | 3(b) and 3(c) |
| Paper 3: how far do you agree with the interpretation (16 + 4) | 31 skills | Testing the claim with knowledge and the other interpretation; SPaG | 16-mark question |

History has **208 lessons**. Every lesson on `curriculum/history-lesson-roadmap.csv` is implemented.

## Sources for the skill lessons

These are the same as for batch 16:
- **Question types:** from the Issue 6 assessment information.
- **Durations, totals and SPaG:** also from the specification. Paper 2 is 1 hour 50 minutes for 64 marks, with no SPaG. Paper 3 is 1 hour 30 minutes for 52 marks, with SPaG in 3(d).
- **Per-question marks and level descriptions:** these follow Pearson's published mark schemes as I know them and **have not been checked against the current mark schemes**. A teacher should confirm them.
- **Interpretations:** these are described as positions only. No historian is named or quoted.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 208 lessons; the roadmap test confirms every row is `implemented`. 49 questions and 21 task options were rewritten after the length checks (3 of 119 items remain strong length tells). |
| Interaction | The History flow walked the 7 new lessons through every stage, plus the whole-app checks: 133 checks pass. 789 automated tests pass. |

## Not done

Not published (56 lessons since the Geography publication are on GitHub only); no specialist review; written answers are not marked; sources and interpretations are described, not printed.
