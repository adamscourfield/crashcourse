# History depth batch 15: Life in Nazi Germany, key topic 4 (31 4.1–4.4)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Specification: Issue 6 PDF (checked). Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| Nazi views of women and family policy | 31 4.1 | Why the birth rate mattered; rewards; pressure and control; results | Source utility (8) |
| Women's employment and appearance | 31 4.1 | Pushing women out; the labour shortage; the Duty Year; appearance | Explain why… (12) |
| The Hitler Youth and the League of German Maidens | 31 4.2 | Organisation; boys; girls; appeal and limits | Inference (4) |
| Nazi education | 31 4.2 | Control of teachers; curriculum; boys and girls; elite schools | Explain why… (12) |
| Reducing unemployment | 31 4.3 | Scale; RAD and public works; rearmament; invisible unemployment | Explain why… (12) |
| The Labour Front and Strength through Joy | 31 4.3 | DAF; KdF; Beauty of Labour; Volkswagen | Explain why… (12), with one interpretation task |
| Racial beliefs and the treatment of minorities | 31 4.4 | Racial ideas; disabled people; Roma and Sinti; gay men and "asocials" | Explain why… (12) |
| The persecution of Jews, 1933–35 | 31 4.4 | Jews in Germany; the boycott; exclusion by law; the Nuremberg Laws | Inference (4) |
| Kristallnacht and after | 31 4.4 | Growing pressure; the trigger; the night; the aftermath | Source utility (8) |

History has 192 lessons. All 40 planned Germany depth lessons are now built.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 192 lessons. 68 questions and 18 tasks were rewritten after the length checks (7 of 153 items remain strong length tells). |
| Overlap | Shared vocabulary with the overview is 25–49% for each new lesson. `education` is highest at 49%: the `young` overview already gives two cards to the curriculum and teachers. A teacher should judge whether it adds enough. |
| Interaction | The History flow walked the 9 new lessons through every stage, plus the whole-app checks: 165 checks pass. 789 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. One correction before commit: Jewish emigration 1933–35 was about 80,000, not 100,000. Textbook approximations: birth rate about 15 to about 20 per 1,000; women in work under five million to over seven million; Hitler Youth about 7 million by 1939; military spending about 3.5 to 26 billion marks; KdF holidays about ten million by 1938. |

## Not done

Not published; no specialist review; written answers are not marked; sources and interpretations are described, not printed.
