# History depth batch 14: Nazi control and dictatorship, key topic 3 (31 3.1–3.4)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Specification: Issue 6 PDF (checked). Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| The Reichstag Fire and the Enabling Act | 31 3.1 | Emergency decree; March election; passing the Act; coordination | Explain why… (12) |
| The Night of the Long Knives and the Führer | 31 3.1 | The SA problem; pressure on Hitler; the purge; the oath and the Führer | Explain why… (12) |
| The SS, the SD and the Gestapo | 31 3.2 | SS; SD; Gestapo; informers and the historians' debate | Explain why… (12), with one interpretation task |
| Concentration camps and the courts | 31 3.2 | First camps; who was held; expansion; the courts | Explain why… (12) |
| Goebbels, the media and rallies | 31 3.3 | Press; radio; film and posters; Nuremberg | Source utility (8) |
| The 1936 Olympics | 31 3.3 | Winning the Games; boycott and cover-up; the spectacle; Jesse Owens | Inference (4) |
| Nazi control of culture and the arts | 31 3.3 | Reich Chamber of Culture; books; art and music; architecture and film | Explain why… (12) |
| The Nazis and the Churches | 31 3.3 | Religion in Germany; the Concordat; pressure on Catholics; the Reich Church | Explain why… (12) |
| Support and conformity | 31 3.4 | Reasons for support; the Hitler myth; fear; grumbling and refusal | Explain why… (12), with one interpretation task |
| Opposition from the Churches | 31 3.4 | Emergency League; Confessing Church; Niemöller; Catholic protest and its limits | Explain why… (12) |
| Opposition from young people | 31 3.4 | Causes; Edelweiss Pirates; Swing Youth; the regime's response | Explain why… (12) |

The two Church lessons are split by specification bullet. `churches` (3.3) covers Nazi policy and `church-opposition` (3.4) covers resistance. They share 20% of their card vocabulary.

History has 183 lessons.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 183 lessons. 95 questions and 17 tasks were rewritten after the length checks (23 of 187 items remain strong length tells). |
| Overlap | Shared vocabulary with the overview is 18–36% for each new lesson. |
| Interaction | The History flow walked the 11 new lessons through every stage, plus the whole-app checks: 197 checks pass. 789 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. Three errors in my own draft were corrected before commit: Jehovah's Witnesses (about 10,000 imprisoned and about 1,500 died, not "a quarter killed"); Röhm shot the day after his arrest; the "cathedral of light" used from 1934. Textbook approximations: SS about 50,000 (1933) to 240,000 (1939); Gestapo about 30,000 officers; about 4,000 communists arrested after the fire; about 7,000 pastors in the Emergency League; radio in about 70% of homes by 1939. |

## Not done

Not published; no specialist review; written answers are not marked; sources and interpretations are described, not printed. Youth opposition includes wartime events (1940 and 1944) as context. The specification period ends in 1939.
