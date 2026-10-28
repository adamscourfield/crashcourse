# History depth batch 05: Cold War key topic 2 (P4 2.1–2.3), plus corrections

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| The refugee problem and Khrushchev's ultimatum | P4 2.1 | The exodus, the brain drain, West Berlin as showcase; the 1958 ultimatum | Explain two consequences… (8) |
| The summits of 1959–61 | P4 2.1 | Geneva, Camp David, the U-2 and Paris, Vienna | Narrative account… (8) |
| The impact of the Berlin Wall | P4 2.1 | 13 August 1961; Checkpoint Charlie; escapes; consequences | Explain the importance… (8) |
| The Bay of Pigs, 1961 | P4 2.2 | The revolution; links to the USSR; the invasion and why it failed | Explain two consequences… (8) |
| Thirteen days: October 1962 | P4 2.2 | Discovery, options, the quarantine, the letters, the deal | Narrative account… (8) |
| Consequences of the Cuban Missile Crisis | P4 2.2 | Hotline, test ban and later treaties; winners and losers | Explain two consequences… (8) |
| Dubček and opposition in Czechoslovakia | P4 2.3 | Discontent; socialism with a human face; the Prague Spring; Moscow's fears | Explain the importance… (8) |
| The Brezhnev Doctrine and its consequences | P4 2.3 | The invasion; the doctrine; reactions; consequences | Explain two consequences… (8) |

## Corrections in this batch

- **Duplicate removed:** `coldwar.blockade` (batch 04) duplicated the existing overview and was deleted.
- **Roadmap trimmed to 212:** seven planned Medicine depth lessons under single-case-study overviews were dropped as padding. Rationale and overlap figures are in the plan.
- **Wrong topic fixed:** the two Berlin-crisis lessons had been filed under key topic 1 and now sit in key topic 2.
- **Armada dates made consistent:** the batch 02 Armada lesson now uses English calendar dates (fireships 28 July, Gravelines 29 July), matching the overview, and says that Spain's calendar ran ten days ahead.

History has 107 lessons.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 107 lessons. 58 questions and 10 challenge options were rewritten after the length checks; one concept id and one short explanation were fixed after the test caught them. |
| Interaction | The History flow walked the 8 new lessons through every stage, plus the whole-app checks: 149 checks pass. |
| Regression | 781 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. The refugee total (about three million) and the invasion force (about half a million) are rounded standard figures. |
