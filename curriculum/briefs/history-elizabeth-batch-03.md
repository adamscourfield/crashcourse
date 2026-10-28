# History batch 03: Early Elizabethan England, key topic 3 (B4 3.1–3.4). B4 is now complete

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

## Lessons

These four lessons follow the same pattern as batches 01–02: 4 cards, a 4-view evidence explorer, 4 challenges including exam skills, 5 practice and 8 check items each.

| Lesson | Ref | Content | Exam practice question (not marked) |
|---|---|---|---|
| Education and leisure | B4 3.1 | Education at home, petty and grammar schools, universities and the Inns of Court; sport and pastimes by class; travelling players, the 1572 Act, and The Theatre, The Curtain and The Rose | Describe two features… (4) |
| The 'problem' of the poor | B4 3.2 | Causes of rising poverty; vagabonds; deserving and undeserving poor; the Statute of Artificers (1563), Vagabonds Act (1572), Poor Relief Act (1576) and Norwich's scheme | Explain why… (12) |
| Exploration and Drake's circumnavigation | B4 3.3 | Trade, wealth and rivalry; maps, instruments and race-built galleons; the 1577–80 voyage and its significance | Explain why… significant (12) |
| The attempted colonisation of Virginia | B4 3.4 | Motives; Gilbert and Raleigh's patent; Grenville, Lane and Roanoke (1585–86); reasons for failure, including relations with the Algonquians and Wingina's death | How far do you agree… (16) |

All 12 B4 content rows in `curriculum/history-requirements.csv` are now marked built.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` now covers all 12 lessons. The first draft again gave the correct option the longest wording in too many items; distractors were rewritten until the length test passed. |
| Interaction | `tools/history-browser-flow-1.mjs` runs all 12 lessons through every stage: 213 checks pass. |
| Regression | 758 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. |
| Publication | GitHub `main` only. |

## Next

P4 Superpower relations and the Cold War, then Option 11 Medicine and the Western Front.
