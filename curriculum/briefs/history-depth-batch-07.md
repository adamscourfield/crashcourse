# History depth batch 07: Medicine key topic 1, c1250–c1500 (11 1.1–1.3)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**. Plan: `curriculum/history-remaining-plan.md`.

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| Supernatural and religious explanations | 11 1.1 | God's will, saints and shrines, the king's touch, astrology; why these ideas lasted | Explain why… (12) |
| The Four Humours and miasma | 11 1.1 | Hippocrates; the humours, elements and seasons; uroscopy; miasma | Explain one similarity… (4) |
| Hippocrates, Galen and the Church | 11 1.1 | Galen and the Theory of Opposites; Church support; control of learning; Islamic transmission | How far… (16) |
| Medieval prevention and treatment | 11 1.2 | Regimen sanitatis; purifying the air; bloodletting and purging; remedies and charms | Explain one difference… (4) |
| Hospitals in the 13th century | 11 1.2 | Who ran them; care not cure; prayer; who was admitted; leper houses | Explain why… (12) |
| Physicians, apothecaries and barber surgeons | 11 1.2 | Training and roles; John of Arderne; women and home care | Explain one difference… (4) |
| The Black Death: beliefs and treatments | 11 1.3 | The Paris faculty's planetary explanation; penance and flagellants; treatments; why none worked | Explain why… (12) |
| The Black Death: attempts to stop its spread | 11 1.3 | Avoidance and flight; purifying the air; Edward III's 1349 order; plague pits | Explain one similarity… (4) |

History has 124 lessons.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 124 lessons. 83 questions and 8 challenge options were rewritten after the length checks. |
| Interaction | The History flow walked the 8 new lessons through every stage, plus the whole-app checks: 149 checks pass. |
| Regression | 781 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. Gloucester shutting its gates in 1348 is a commonly repeated chronicle account and is flagged in the lesson as "said to have". |
