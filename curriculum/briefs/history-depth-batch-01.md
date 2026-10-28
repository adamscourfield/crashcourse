# History depth batch 01: Elizabethan England key topic 1 (B4 1.1–1.4)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

This is the first batch of the scope expansion in `curriculum/history-remaining-plan.md`: History is being brought to Geography's depth. The batch adds 10 depth lessons, each placed after its subsection's overview lesson in the course map.

## Lessons

| Lesson | Ref | Narrower question | Exam practice question (not marked) |
|---|---|---|---|
| England in 1558: society and government | B4 1.1 | Who held power, and how: hierarchy, the prerogative, patronage, Council, Parliament, JPs and Lords Lieutenant | Describe two features… (4) |
| The Virgin Queen | B4 1.1 | Legitimacy, gender and the marriage question; Elizabeth's character and strengths | Explain why… (12) |
| Early challenges: finance, France and Scotland | B4 1.1 | Debt and debasement; the recoinage; Calais; the Auld Alliance; the Treaty of Edinburgh; Le Havre | Describe two features… (4) |
| Religious divisions in 1558 | B4 1.2 | Three changes of religion; points of difference; regional and social divisions; exiles; the Marian bishops | Explain why… (12) |
| The Acts and the Injunctions | B4 1.2 | Supremacy, Uniformity and the Injunctions in detail; enforcement; Parker | Describe two features… (4) |
| The Church of England in society | B4 1.2 | Parish life, homilies, church courts, the 1566 Advertisements | Explain why… (12) |
| The Puritan challenge | B4 1.3 | Who the Puritans were; the crucifix and vestment controversies; extent of the challenge | Describe two features… (4) |
| The Catholic challenge | B4 1.3 | Recusants and church papists; northern nobles; the Papacy and Trent; Spain and France | Explain why… (12) |
| Mary, Queen of Scots: claim and arrival | B4 1.4 | Descent; France and Scotland; Darnley and Bothwell; Langside and flight | Describe two features… (4) |
| Elizabeth's options for dealing with Mary | B4 1.4 | The four options; the York and Westminster inquiry; the Casket Letters | Explain why… (12) |

## Infrastructure added with this batch

- `curriculum/history-lesson-roadmap.csv` (220 lessons) and `science-app/dist/history/order.js`, which orders lessons in the app.
- A test that the roadmap, `order.js` and the app agree.
- `HISTORY_FLOW_IDS` in the History browser flow, so it can walk only a chosen set of lessons.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` covers all 72 lessons, including the roadmap test. 63 questions had distractors or explanations rewritten after the length checks. |
| Interaction | The History flow walked the 10 new lessons through every stage, plus the whole-app checks: 181 checks pass. |
| Regression | 781 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. Figures that vary between sources (debt of about £300,000; the Lords vote margin of three) are the commonly cited ones. |
