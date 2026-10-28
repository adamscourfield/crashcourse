# History depth batch 03: Elizabethan England key topic 3 (B4 3.1–3.4). Elizabethan depth lessons complete

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| Education in the home, schools and universities | B4 3.1 | Home, petty and grammar schools, universities and the Inns of Court; why education grew | Describe two features… (4) |
| Sport, pastimes and the theatre | B4 3.1 | Sports by class; festivals; the 1572 Act; the first playhouses; opposition | Explain why… (12) |
| Why poverty increased | B4 3.2 | Population, prices, enclosure, harvests, trade, loss of monastic charity | Explain why… (12) |
| Changing attitudes and the Poor Laws | B4 3.2 | Deserving and undeserving poor; the 1572 and 1576 Acts; town schemes | Describe two features… (4) |
| Factors prompting exploration | B4 3.3 | Technology, trade, wealth, rivalry, promoters | Explain why… (12) |
| Drake's circumnavigation | B4 3.3 | The voyage, the treasure and Nova Albion; significance | Explain the significance… (12) |
| Raleigh and the Roanoke colonies | B4 3.4 | Aims; the 1585 and 1587 colonies; the "lost colony" | Describe two features… (4) |
| Why the Virginia colony failed | B4 3.4 | Planning, people, relations with Native Americans, location and the Armada | How far… (16) |

All 28 Elizabethan depth lessons on the roadmap are now built: B4 has 40 lessons; History has 90. The 2 B4 exam-skill lessons follow later.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 90 lessons. 51 questions and 18 challenge options were rewritten after the length checks. |
| Interaction | The History flow walked the 8 new lessons through every stage, plus the whole-app checks: 149 checks pass. |
| Regression | 781 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. Population figures (about three to about four million) are standard estimates. |
