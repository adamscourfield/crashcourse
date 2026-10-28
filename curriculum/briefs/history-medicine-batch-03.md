# History batch 09: Medicine in Britain, key topic 3 (11 3.1–3.3)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

## Lessons

| Lesson | Ref | Content | Exam practice question (not marked) |
|---|---|---|---|
| From spontaneous generation to germ theory | 11 3.1 | Continuity of miasma; spontaneous generation; Pasteur 1861; Koch's bacteria, dyes and agar; Franco-German rivalry; slow acceptance in Britain (Bastian) | Explain why… (12) |
| Florence Nightingale and hospital care | 11 3.2 | Hospitals before 1850; Scutari; Mary Seacole; *Notes on Nursing*; the St Thomas's school; pavilion hospitals; belief in miasma | Explain one way… (4) |
| Surgery: anaesthetics and antiseptics | 11 3.2 | Pain, infection, blood loss; ether and chloroform; Hannah Greener; the "black period"; Lister and carbolic; asepsis | "How far…" (16) |
| Case study: Jenner and smallpox vaccination | 11 3.3 (and 3.2) | Inoculation; Phipps 1796; opposition; government grants, 1840 ban on inoculation, 1853 compulsion | Explain one way… (4) |
| Case study: cholera, Snow and public health | 11 3.3 (and 3.2) | Cholera outbreaks; Broad Street 1854; limits of Snow's evidence; 1848 and 1875 Public Health Acts; the Great Stink and Bazalgette; the 1867 Reform Act | Explain why… (12) |

History has 36 lessons. Medicine key topics 1–3 content rows are marked built.

## Accuracy notes

- The Scutari death-rate figures (about 40% down to about 2%) are the commonly cited ones and are disputed by historians; the lesson says "according to commonly cited figures".
- The Public Health Act 1875 is taught in the cholera case study because the paraphrased specification puts it under 3.2 prevention; 3.2 therefore lists the Jenner and cholera lessons too.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 36 lessons. About 35 distractors and 8 short explanations were rewritten after the length checks. |
| Interaction | The History flow runs all 36 lessons through every stage: 597 checks pass. |
| Regression | 768 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. |
