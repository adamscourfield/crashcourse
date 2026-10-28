# History batch 13: Weimar and Nazi Germany, key topics 3–4 (31 3.1–4.4). Option 31 and all three papers are complete

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

## Lessons

| Lesson | Ref | Content | Exam practice question (not marked) |
|---|---|---|---|
| Creating the dictatorship | 31 3.1 | Reichstag Fire and decree; March 1933 election; Enabling Act; unions and parties banned; Night of the Long Knives; Führer; army oath | Explain why… (12) |
| The police state | 31 3.2 | SS, SD, Gestapo and informers; Dachau; judges and the People's Court; the Concordat, Reich Church and Confessing Church | Explain why… (12) |
| Propaganda and culture | 31 3.3 | Goebbels; press, radio and rallies; the 1936 Olympics; Reich Chamber of Culture; book burning; "degenerate art"; Speer and Riefenstahl | Explain why… (12) |
| Opposition, resistance and conformity | 31 3.4 | Support and conformity; Niemöller, the 1937 papal letter, Galen; Swing Youth; Edelweiss Pirates | Explain why… (12) |
| Policies towards women | 31 4.1 | Kinder, Küche, Kirche; marriage loans, Mother's Cross, Lebensborn; employment and the 1937 reversal; appearance | Explain why… (12) |
| Policies towards young people | 31 4.2 | Hitler Youth and League of German Maidens; the 1936 and 1939 laws; curriculum; teachers; elite schools | Explain why… (12) |
| Employment and living standards | 31 4.3 | RAD, autobahns, rearmament, conscription; invisible unemployment; DAF, KdF, Beauty of Labour, Volkswagen; debate on living standards | Explain why… (12) |
| Persecution of minorities | 31 4.4 | Racial beliefs; sterilisation and T4; Roma; homosexual men; Slavs; the 1933 boycott; Nuremberg Laws; Kristallnacht | Explain why… (12) |

All 54 rows in `curriculum/history-requirements.csv` are marked built. History has 62 lessons, covering Papers 1, 2 and 3 for the chosen options.

## Accuracy notes

- The Night of the Long Knives death toll is given as "at least 85, and probably more", because estimates vary.
- Galen's 1941 sermon falls after 1939; it is included because the paraphrased specification names Galen.
- Kristallnacht figures (about 91 killed and about 30,000 men sent to camps) are the commonly cited ones.

## Gaps that matter

The same as batch 12: interpretations and sources are described, not printed extracts, and written answers are not marked.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 62 lessons. About 60 distractors and 15 short explanations were rewritten after the length checks. |
| Interaction | The History flow runs all 62 lessons through every stage: 1013 checks pass. |
| Regression | 780 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. |
