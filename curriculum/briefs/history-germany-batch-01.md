# History batch 12: Weimar and Nazi Germany, key topics 1–2 (31 1.1–2.4)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

The user chose Paper 3 option 31 on 28 October 2026. Sixteen requirement rows (31 1.1–4.4) were added to `curriculum/history-requirements.csv`; the key-topic and subsection structure was confirmed against a school checklist derived from the specification, and the bullet wording is paraphrased (not checked against the PDF).

## Lessons

| Lesson | Ref | Content | Exam practice question (not marked) |
|---|---|---|---|
| The origins of the Republic | 31 1.1 | Legacy of war; Kiel, abdication, armistice; the stab-in-the-back myth; the constitution, PR and Article 48 | Explain why… (12) |
| Early challenges | 31 1.2 | Versailles; Spartacists; the Kapp Putsch; political murders; the Ruhr and hyperinflation | Explain why… (12) |
| Recovery under Stresemann | 31 1.3 | Rentenmark; Dawes and Young Plans; Locarno, the League, Kellogg-Briand; dependence on US loans | Explain why… (12) |
| Changes in society | 31 1.4 | Wages, housing, unemployment insurance; women; the Bauhaus, Dix and Grosz, cinema and cabaret | Explain why… (12) |
| The early Nazi Party | 31 2.1 | Hitler's early career; the DAP and NSDAP; the Twenty-Five Points; Hitler as leader; the SA | Explain why… (12) |
| The Munich Putsch and the lean years | 31 2.2 | Causes, events and trial; Mein Kampf; the change to legal methods; Bamberg; reorganisation | Explain why… (12) |
| Growth in Nazi support | 31 2.3 | The Depression; Brüning and Article 48; propaganda, the SA and Hitler's appeal; fear of communism; election results | Explain why… (12) |
| How Hitler became Chancellor | 31 2.4 | The 1932 presidential election; Papen; Schleicher; the backstairs intrigue | Explain why… (12) |

Exam-skill tasks cover the Paper 3 question types: inference, explaining why, interpretations (how and why they differ) and "how far" judgements.

## Gaps that matter

- **Interpretations are paraphrased positions,** not extracts from named historians. The real Paper 3 Question 3 uses printed extracts, so interpretation practice here is partial.
- **The source-utility question (8 marks)** is practised only through described source types.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 54 lessons. About 30 distractors and 13 short explanations were rewritten after the length checks. Two concept ids were renamed to fit the id pattern. |
| Interaction | The History flow runs all 54 lessons through every stage: 885 checks pass. |
| Regression | 780 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. |
