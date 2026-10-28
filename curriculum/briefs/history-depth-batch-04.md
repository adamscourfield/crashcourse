# History depth batch 04: Cold War key topic 1 (P4 1.1–1.3)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| Tehran, Yalta and Potsdam | P4 1.1 | What each conference agreed; why agreement turned to suspicion | Explain two consequences… (8) |
| Capitalism and communism | P4 1.1 | The two systems; roots of mistrust since 1917 | Explain the importance… (8) |
| Soviet expansion in Eastern Europe | P4 1.1 | Stalin's motives; salami tactics; the satellites; the Western view | Narrative account… (8) |
| The Long and Novikov Telegrams | P4 1.2 | What each said; why they mattered; containment | Explain two consequences… (8) |
| The Truman Doctrine and the Marshall Plan | P4 1.2 | Greece and Turkey; the doctrine; the aid plan; the Soviet response | Explain the importance… (8) |
| Cominform, Comecon and NATO | P4 1.2 | The three organisations and the two blocs | Narrative account… (8) |
| The arms race and the Warsaw Pact | P4 1.3 | Atomic and hydrogen bombs, ICBMs, Sputnik; West German rearmament and the Pact | Explain the importance… (8) |
| The Hungarian Uprising | P4 1.3 | Rákosi, the secret speech, October 1956, the invasion | Narrative account… (8) |
| International reaction to Hungary | P4 1.3 | Why the West did not act; the UN; consequences | Explain two consequences… (8) |

The exam-skill challenges use the three P4 question types: consequences, narrative account and importance. History has 100 lessons.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 100 lessons. 66 questions and 12 challenge options were rewritten after the length checks. Seventeen items still have a correct answer more than 15% longer than every distractor; all are short names, dates or numbers. |
| Interaction | The History flow walked the 10 new lessons through every stage, plus the whole-app checks: 181 checks pass. |
| Regression | 781 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. Soviet war deaths (about twenty million) and Marshall Aid (about $13 billion) are rounded standard figures. |

## Correction (28 October 2026, batch 05)

The Berlin Blockade depth lesson (`coldwar.blockade`) was removed: it duplicated the existing overview `coldwar.berlin` (Berlin, 1948–49). This batch therefore now has 9 lessons. See `curriculum/history-remaining-plan.md`.
