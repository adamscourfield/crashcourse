# History depth batch 09: Medicine key topic 3, c1700–c1900 (11 3.1–3.3)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Specification: Issue 6 PDF (checked). Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| Spontaneous generation and miasma | 11 3.1 | Van Leeuwenhoek and better lenses; spontaneous generation; Chadwick and miasma; why old ideas lasted | Explain why… (12) |
| Pasteur's germ theory | 11 3.1 | Fermentation; the swan-necked flasks; vaccines; influence in Britain through Lister and Tyndall | Explain why… (12) |
| Koch and the identification of microbes | 11 3.1 | Anthrax; staining, agar and Petri dishes; TB and cholera; influence in Britain | How far… (16) |
| Anaesthetics | 11 3.2 | Davy; ether and Liston; Simpson and chloroform; Snow and Queen Victoria; problems and opposition | Explain why… (12) |
| Antiseptics and aseptic surgery | 11 3.2 | Hospital infection; Lister and Greenlees; results and resistance; asepsis | Explain one difference… (4) |
| John Snow and the Broad Street pump | 11 3.3 | His theory; the 1854 outbreak; exceptions and the pump handle; the grand experiment; rejection | Explain the significance… (12) |
| The Public Health Act of 1875 | 11 3.2 | Laissez-faire and 1848; the Great Stink and Bazalgette; why attitudes changed; the 1875 Act | Explain why… (12) |

History has 138 lessons.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 138 lessons. 67 questions were rewritten after the length checks. |
| Interaction | The History flow walked the 7 new lessons through every stage, plus the whole-app checks: 133 checks pass. |
| Regression | 781 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. Lister's mortality figures (about 45% falling to about 15%) and the Soho death toll are commonly cited figures. |
