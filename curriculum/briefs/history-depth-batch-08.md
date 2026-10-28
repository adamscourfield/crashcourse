# History depth batch 08: Medicine key topic 2, c1500–c1700 (11 2.1–2.3), and specification check

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| Continuity and change in ideas about cause | 11 2.1 | The Renaissance and Linacre; Paracelsus; religion loses ground; what stayed the same | Explain one difference… (4) |
| Thomas Sydenham's scientific approach | 11 2.1 | Observation; diseases as distinct things; Peruvian bark; limits and legacy | How far… (16) |
| Printing and the Royal Society | 11 2.1 | Gutenberg and Caxton; why printing mattered; the Society, Hooke and Boyle; transfusion experiments | Explain why… (12) |
| Renaissance prevention and treatment | 11 2.2 | Continuity; Culpeper; new ingredients; quacks and the royal touch | Explain one similarity… (4) |
| Care in the community and in hospitals | 11 2.2 | The dissolution; refounded hospitals; pest houses and almshouses; home care | Explain why… (12) |
| Vesalius and changes in training | 11 2.2 | Padua; the 1543 book; Geminus; the College of Physicians and the Barber-Surgeons | Explain why… (12) |
| Plague in 1348 and 1665 compared | 11 2.3 | Ideas, treatment, prevention and government; why the response differed | Explain one difference… (4) |

## Specification check (Issue 6 PDF, supplied by the user)

The user supplied the Pearson specification PDF (Issue 6, June 2024; sha256 `a5d760fd…0c09`). All 54 rows in `curriculum/history-requirements.csv` were rewritten as close paraphrases checked against it. The PDF is used for checking only and is not stored in the repository.

- **Option 11 and B4:** they matched the earlier paraphrase. One correction: the Western Front treatment bullet names "the RAMC and nurses", so the planned FANY lesson becomes `medicine.wf-ramc-nurses`.
- **P4, wrong refs:** key topic 2 is organised differently from the earlier assumption, so six depth lessons had incorrect refs and were corrected:
  - telegrams → 1.1;
  - Bay of Pigs and Dubček → 2.1;
  - Wall impact → 2.2/2.3;
  - Brezhnev Doctrine → 2.2/2.3;
  - missile-crisis consequences → 2.3.
- **P4, a gap:** "the attitudes of Stalin, Truman and Churchill" (1.1) had no lesson, so `coldwar.leaders-attitudes` was added to the roadmap.
- **Option 31, churches:** the Churches belong to 3.3, not 3.2. The police-state overview now maps to both, and the planned Churches lesson moves to 3.3.
- **Option 31, Sinti:** 4.4 names "Roma and Sinti", so the persecution lessons were updated. One meaningless padded distractor ("Nordic Roma") was also replaced.
- **Lesson lists:** each requirement row's lesson list is now rebuilt from the lessons' own refs rather than appended by hand. This also cleaned stray spaces in some IDs.

The roadmap is now 213 lessons. History has 131.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 131 lessons. 74 questions and a challenge explanation were rewritten after the length checks. |
| Interaction | The History flow walked the 7 new lessons, plus the edited persecution and telegrams lessons, through every stage, with the whole-app checks: 165 checks pass. |
| Regression | 781 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. |
