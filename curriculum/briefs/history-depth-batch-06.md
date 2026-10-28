# History depth batch 06: Cold War key topic 3 (P4 3.1–3.3). Cold War depth lessons complete

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| SALT 1 and the Helsinki Agreements | P4 3.1 | The Sino-Soviet split and Ostpolitik; the ABM Treaty and Interim Agreement; Helsinki's three baskets and its human-rights effect | Explain two consequences… (8) |
| SALT 2 and the end of détente | P4 3.1 | Vladivostok to Vienna; SS-20s, Africa, human rights; the Senate; withdrawal | Narrative account… (8) |
| Afghanistan and the Carter Doctrine | P4 3.2 | Why the USSR invaded; the doctrine; US measures; the long war | Explain two consequences… (8) |
| The Olympic boycotts | P4 3.2 | Moscow 1980 and Los Angeles 1984; significance | Explain the importance… (8) |
| Reagan and SDI | P4 3.2 | The Reagan Doctrine; SDI; the dangers of 1983; Soviet weakness | Explain the importance… (8) |
| Gorbachev's new thinking and the INF Treaty | P4 3.2 | Reasonable sufficiency; Geneva and Reykjavik; the INF Treaty; troop cuts | Explain two consequences… (8) |
| The revolutions of 1989 | P4 3.3 | Poland, Hungary, East Germany, Czechoslovakia, Bulgaria, Romania; why Moscow did not intervene | Narrative account… (8) |
| The fall of the Wall and reunification | P4 3.3 | 9 November; Two Plus Four; a united Germany in NATO | Explain the importance… (8) |
| The end of the Warsaw Pact and the USSR | P4 3.3 | Comecon and the Pact dissolved; nationalism; the August coup; December 1991 | Narrative account… (8) |

All Cold War depth lessons on the roadmap are built: P4 has 38 lessons, plus 3 planned exam-skill lessons. History has 116 lessons.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 116 lessons. 67 questions and 7 challenge options were rewritten after the length checks; three concept ids were renamed to fit the id pattern. |
| Interaction | The History flow walked the 9 new lessons through every stage, plus the whole-app checks: 165 checks pass. A first attempt run alongside the unit tests failed to start, and a sequential rerun passed. |
| Regression | 781 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. INF missiles destroyed (about 2,600) and Moscow boycott numbers (about sixty countries) are rounded standard figures. |
