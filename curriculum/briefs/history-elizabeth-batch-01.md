# History batch 01: the History studio and Early Elizabethan England, key topic 1 (B4 1.1–1.4)

Date: 23 October 2026. Status: implemented, technically QA'd and pushed to GitHub `main`. **Not published to the Site** and **not specialist-reviewed**.

## Course choice

Pearson Edexcel GCSE (9–1) History, **1HI0**, specification **Issue 6, June 2024**. The user chose Edexcel for these units:

| Paper | Unit | Status |
|---|---|---|
| Paper 1 | Option 11: Medicine in Britain, c1250–present, with the historic environment *The British sector of the Western Front, 1914–18* | mapped, not built |
| Paper 2 | B4: Early Elizabethan England, 1558–88 (British depth study) | **key topic 1 built** |
| Paper 2 | P4: Superpower relations and the Cold War, 1941–91 (period study) | mapped, not built |
| Paper 3 | Modern depth study (options 30–33) | **not chosen yet: ask the user** |

The content bullets for B4, P4, Option 11 and the Western Front are listed in `curriculum/history-requirements.csv` (38 rows), paraphrased from the specification. They were read through a web summariser, because the PDF could not be downloaded in this sandbox. **Re-check the wording against the PDF at review.** One detail to confirm is the wording "the RAMC and the FANY" in HE3.

## The studio

`science-app/dist/history/` is a new subject studio, built the same way as Geography and wired into `app.js`, `index.html` and `progress.js`:
- Discover: cards.
- Investigate: an **evidence explorer** with four views, all of which must be opened:
  - factors;
  - timeline;
  - people and institutions;
  - a source focus.
  
  It also has challenges, each with an explanation, and every lesson includes at least one exam-skill challenge.
- Practise: retries until correct.
- Check: first answers count, and 80% completes the lesson. Missed concepts return in recall review, and the progress dashboard shows History.

Option order is shuffled. A test also limits how often the right answer is the longest option. A first draft had the longest option correct in 75% of items; after rewriting distractors it is 46%, and it is clearly longest in under 15%.

**Source policy:**
- Documents are described by type, author, date and content, with a short note on how useful they are.
- No quotation is invented or attributed to a real person.
- Real images and quoted primary sources are left for a later batch, with proper attribution.

## Lessons (B4 key topic 1)

| Lesson | Ref | Exam practice question (for planning; not marked) |
|---|---|---|
| England in 1558 and the new queen | B4 1.1 | Describe two features… (4) |
| The religious settlement of 1559 | B4 1.2 | Explain why… (12) |
| Puritan and Catholic challenges | B4 1.3 | How far do you agree… (16) |
| The problem of Mary, Queen of Scots | B4 1.4 | Explain why… (12) |

Each lesson has:
- 4 cards;
- 4 explorer views;
- 4 challenges, including exam skills: telling a feature with supporting detail from a bare statement, explanation from description, a supported judgement from an assertion, and provenance;
- 5 practice items;
- 8 check items.

## Verification evidence

| Check | Result |
|---|---|
| Content and logic | `tests/history-subject.test.js` has 5 tests:<br>• unique ids, valid answers, explanations and concepts;<br>• every view renders;<br>• an exam-skill challenge and a marked exam question in every lesson;<br>• option-length balance and shuffled display;<br>• stage gates (cards, all views and challenges, practice, 80% check);<br>• restore of bad or stale saved data;<br>• every built lesson maps to a `built` requirement row and back;<br>• the studio starts without a DOM. |
| Interaction | `science-app/tools/history-browser-flow-1.mjs`, 84 checks pass:<br>• subject switch, course name and studio label;<br>• the course map lists only built units;<br>• all four lessons through every stage;<br>• a wrong challenge refused; a skipped challenge refused; unopened views refused;<br>• reload resumes Investigate with the chosen view;<br>• a wrong practice answer flagged;<br>• 75% check does not complete, and a retake does;<br>• recall review of the missed concepts; the progress dashboard;<br>• 390px with no overflow;<br>• Maths and Science still open, and History progress survives a subject switch;<br>• no console errors. |
| Regression | 758 automated tests pass after merging the latest Geography release; the History flow (84 checks) and Maths flow 1 (87 checks) pass. An existing Biology test file was already named `history.test.js`; it was briefly overwritten during development, restored unchanged, and the new tests are in `history-subject.test.js`. `maths.test.js` and `progress.test.js` now expect History to be available. |
| Accuracy | Facts were checked against standard accounts while writing, not by a historian. |
| Specialist review | Not performed. |
| Publication | GitHub `main` only. `progress.js` changed (History is now available), so publishing needs the global cache bump. |

## Known limitations

- **Selected response only.** Describe, explain, judge and source-usefulness answers are not marked. Each lesson has an exam question for planning on paper, and the challenges practise the skills behind it.
- **No real images or quoted sources yet.**
- **Not reviewed** by a history teacher.
- **Paper 3** is not chosen.

## Next

- B4 key topic 2: plots, Spain, the Armada.
- B4 key topic 3: society, the poor, exploration, Virginia.
- P4 Cold War.
- Option 11 Medicine and the Western Front.
