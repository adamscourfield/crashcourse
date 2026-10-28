# History batch 02: Early Elizabethan England, key topic 2 (B4 2.1–2.4)

Date: 28 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

## Lessons

These four lessons follow the same pattern as batch 01: 4 cards, a 4-view evidence explorer, 4 challenges including exam skills, 5 practice and 8 check items each.

| Lesson | Ref | Content | Exam practice question (not marked) |
|---|---|---|---|
| Revolt, plots and the execution of Mary | B4 2.1 | Revolt of the Northern Earls and the papal bull of 1570; the Ridolfi, Throckmorton and Babington plots; Walsingham's spies; the causes and significance of Mary's execution | Explain why… (12) |
| Relations with Spain and the privateers | B4 2.2 | Political, religious and commercial rivalry; Hawkins and San Juan de Ulúa; Drake, Nombre de Dios, the circumnavigation and his knighthood | Describe two features… (4) |
| The outbreak of war with Spain, 1585–88 | B4 2.3 | William of Orange's death and the Catholic League; the Treaty of Nonsuch; Robert Dudley in the Netherlands; the Cadiz raid | Explain why… (12) |
| The Spanish Armada, 1588 | B4 2.4 | Philip's plan, Medina Sidonia and Parma; the Channel fighting; fireships and Gravelines; the voyage home; reasons for the English victory | How far do you agree… (16) |

**Exam skills practised:**
- significance and narrative links (Babington → proof → execution);
- consequence (Drake's knighthood → Philip's anger);
- explanation (Cadiz → delay → preparation);
- a weighed judgement on the reasons for the Armada's defeat;
- provenance of an intercepted cipher letter, a Spanish ambassador's report and commemorative paintings.

Dates follow English Old Style accounts. Casualty figures are deliberately avoided, because accounts differ.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` now covers all eight lessons. A first draft failed the option-length test: the correct option was the longest in 70 of 136 items. Distractors were rewritten, and the test passes. |
| Interaction | `tools/history-browser-flow-1.mjs` now runs every built lesson through every stage. It opens lessons through the course map, because each key topic has its own lesson list. 149 checks pass. |
| Regression | 758 automated tests pass. |
| Accuracy | Checked against standard accounts while writing; not reviewed by a historian. |
| Publication | GitHub `main` only. |

## Known limitations

These are as for batch 01: selected response only, no real images or quoted sources, and no teacher review.

## Next

B4 key topic 3: education and leisure, the poor, exploration, Virginia.
