# History scope plan: matching Geography

28 October 2026. **Decision (user):** History must match the scope of Geography and the other built subjects.

## Status, 28 October 2026: roadmap complete

All **208** roadmap lessons are implemented: 62 overview, 131 depth and 15 exam-skill lessons. By unit: Medicine with the Western Front 63, Germany 61, Elizabethan England 42, Cold War 42. The target table below is the original plan; the revisions sections record why it fell from 220 to 208. Publication: 152 lessons reached the Site with the Geography final publication; the 56 built since (batches 12–17) are on GitHub only. No lesson has had specialist review.

## The gap

- Geography has 234 lessons covering every option; one student's pathway is about 200. It works at one lesson per lettered specification statement, plus dedicated skills lessons.
- History had 62 lessons, one per specification *subsection*. Each subsection holds 3–5 assessable bullets, so depth was roughly a third of Geography's.

## Target

`curriculum/history-lesson-roadmap.csv`: **212 lessons** (revised from 220 on 28 October; see below) for the chosen options (Option 11 with the Western Front, B4, P4, option 31).

| Role | Lessons | Meaning |
|---|---:|---|
| overview | 62 | The existing lessons, kept with their IDs, so published lessons and saved progress are unchanged. Each introduces its subsection. |
| depth | 135 | One lesson per specification bullet or distinct event, going further than the overview: more detail, evidence and causation for one narrower question. |
| exam_skill | 15 | One lesson per question type on each paper (Paper 1 thematic and historic environment; P4; B4; Paper 3). |

By unit: Medicine with the Western Front 68, Germany 61, Elizabethan England 42, Cold War 41.

This is an authoring estimate, not a Pearson lesson count. Breadth is limited to the user's chosen options; building every Edexcel History option would be roughly five times larger and has not been requested.

## How it works in the app

- `science-app/dist/history/order.js` is generated from the roadmap and sorts lessons, so depth lessons appear after their subsection's overview within each key topic.
- `tests/history-subject.test.js` checks that every built lesson is on the roadmap with status `implemented`, that `order.js` matches the roadmap, and that the app follows that order.
- The History browser flow takes `HISTORY_FLOW_IDS` so each batch walks its new lessons through every stage while the whole-app checks still run.

## Depth-lesson rules

- Do not repeat the overview: each depth lesson answers one narrower question with specifics (named people, dates, causes, consequences, evidence), and its exam task targets that bullet.
- Same lesson structure: 4 cards, 4 evidence views (factors, timeline, people, source), 4 challenges including an exam skill, 5 practice, 8 checks, and an exam question.
- Write distractors at least as long as the answer from the start; run the length check before wiring a batch in.
- Sources and interpretations stay described, not quoted or invented.

## Revision, 28 October 2026: avoid padding

A depth lesson only adds value if its overview spreads several bullets or events across four cards. I measured shared content vocabulary between each built depth lesson and its overview (`overlap.mjs`, workspace tool).

- **`coldwar.blockade`: removed.** It shared 63% of its vocabulary with the existing Blockade overview `coldwar.berlin` and repeated it card for card. It was built in batch 04 and never published, so no student progress is affected.
- **Seven planned Medicine depth lessons: dropped.** Their overviews are already single case studies: Harvey's impact, Nightingale's reforms, Jenner's opposition, Fleming, mass production, and lung cancer's treatment and government action.
- **Five planned Western Front depth lessons: dropped (roadmap 213 → 208).** `wf-trenches`, `wf-transport` and `wf-chain` would repeat the overviews `wf-context` and `wf-evacuation`, which already give a card each to the trench system, terrain, transport and every stage of the chain. `wf-usefulness` and `wf-follow-up` would repeat both `wf-sources` and the planned exam-skill lesson `skills.he-sources`. The historic environment carries 16 of Paper 1's 52 marks; 5 overviews, 8 depth lessons and 2 skill lessons (15) is proportionate.
- **Partial overlap kept.** Depth lessons under event-level overviews (the Missile Crisis, Cuba, the Armada) share 50–60% of their vocabulary. They add detail but are partly a second pass. This is recorded rather than hidden; teacher review should judge whether they earn their place.
- **Two Berlin-crisis lessons moved.** They had been attached to the wrong overview (`coldwar.berlin` is the 1948–49 Blockade), so they now follow `coldwar.wall` in key topic 2.

## Build order

Batches of about 10, each pushed on completion: Elizabethan England (28), the Cold War (27), Medicine and the Western Front (48, later 43), Germany (40), then the 15 exam-skill lessons.

## Specification check, 28 October 2026

The requirement rows were checked against the Issue 6 PDF supplied by the user. Corrections are listed in `curriculum/briefs/history-depth-batch-08.md`. The roadmap became **213** lessons (one Cold War depth lesson added for the leaders' attitudes), then **208** after the Western Front revision above.

## Open limits

No printed sources or interpretations; written answers not marked; no specialist review.
