# History batch 04: Superpower relations and the Cold War, key topic 1 (P4 1.1–1.3)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

## Lessons

P4 is the Paper 2 period study. Its exam questions are:
- explain two consequences (8);
- a narrative account analysing events (8);
- explain the importance of events (8 each).

| Lesson | Ref | Content | Exam practice question (not marked) |
|---|---|---|---|
| The Grand Alliance and early tension | P4 1.1 | Tehran, Yalta and Potsdam; ideology; Stalin, Roosevelt, Truman and Churchill; the atomic bomb; the Long and Novikov telegrams; satellite states | Explain two consequences… (8) |
| The Truman Doctrine, the Marshall Plan and the new alliances | P4 1.2 | Containment; Marshall Aid and "dollar imperialism"; Cominform, Comecon, NATO; Czechoslovakia 1948 | Write a narrative account… (8) |
| Berlin, 1948–49: blockade and airlift | P4 1.2 | Zones, Bizonia, the Deutschmark, the blockade, the airlift, the FRG and GDR | Explain two consequences… (8) |
| The arms race, the Warsaw Pact and Hungary, 1949–58 | P4 1.3 | Atomic and hydrogen bombs, ICBMs and Sputnik; the Warsaw Pact; Khrushchev, Nagy and the 1956 invasion; the international reaction | Explain the importance… (8) |

Specification row P4 1.2 is split across two lessons. Each lesson has 4 cards, 4 explorer views, 4 challenges including exam skills (consequence, narrative chain, importance), 5 practice and 8 check items.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 16 History lessons. Distractors were rewritten again after the length check; two short explanations were lengthened after the explanation-length check failed. |
| Interaction | The History flow runs all 16 lessons through every stage: 277 checks pass. The course-map check now compares the map against the built units rather than a fixed list. |
| Regression | 758 automated tests pass. |
| Accuracy | Dates and events checked against standard accounts while writing; not reviewed by a historian. |

## Next

P4 key topic 2: Cold War crises, 1958–70.
