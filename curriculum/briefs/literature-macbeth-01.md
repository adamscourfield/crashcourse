# Macbeth batch 1 — brief and implementation record

## Identity and eligibility
AQA GCSE English Literature 8702; untiered; selected Macbeth pathway. Curriculum/runtime IDs are paired in english-literature-lesson-roadmap.csv. Batch: opening (1.1–1.2), prophecy (1.3), hidden desires (1.4–1.5), decision (1.6–1.7), murder (2.1–2.2). Source checked 28 October 2026. AQA 3.1.1 and 3.3, with original author mappings to reading, methods and evidence skills. Text reference: https://www.folger.edu/explore/shakespeares-works/macbeth/read/ ; individual scene references rather than edition-dependent line numbers. Version 1.

## Learning purpose and prerequisites
Each student can reconstruct the scoped sequence; distinguish a character’s knowledge from the audience’s; support an interpretation with a precise language/dramatic feature. Draft a short analysis and revise it against concrete prompts. No prior Macbeth lesson is required for lesson 1; subsequent lessons assume the preceding scoped scenes. Vocabulary is explained in context in the selectable details. Full scene reading alongside the summaries is expected.

Misconceptions diagnosed: prediction equals instruction; influence removes agency; a character’s judgment is objective narration; dramatic irony means rhyme; the dagger must be a real object; identifying a device alone is analysis. Each appears in the investigation, practice or independent questions and receives a corrective explanation.

## Discover
Three original explanation cards per lesson: scoped story, a contrast/decision and dramatic/language implications. Continue records each card; reading dots allow revisiting. Original worked readings connect word choice to an interpretation without asserting a unique possible interpretation. Prior knowledge comes from the previous sequence; first lesson introduces the difference between report, audience knowledge and character knowledge.

## Investigate
Three views: selectable details in a short Shakespeare quotation, character knowledge contrasts, scene sequence. Selecting a detail changes the explanatory reading. Student explores all three details and all views, then answers a three-option interpretive challenge. Each challenge has an explicit defensible answer and explanation; a wrong answer gives corrective guidance and allows retry. Viewing alone does not complete the task. Native buttons support keyboard use; meaning does not rely on colour. Static evidence is a better fit than a forced physical 3D object or movie.

## Practice
Three items per lesson, IDs `<runtime>.practice.1–3`, with stable `lit.macbeth.*` concept IDs. Exact prompts, keys, distractors and rationales in content.js. Clicking answers directly records first attempt separately from retry; incorrect selections reveal reasoning and remain on the question; correct answers automatically advance after the shared reading delay, with Stay here/manual Next controls. Option order is deterministic per item/attempt. All items are untiered. Practice can reveal answers; it is not independent performance.

## Independent check
Four fresh selected-response items per lesson, IDs `<runtime>.check.1–4`; exact keys/rationales in source. First answers lock; no correctness or rationale is displayed until results. Answer recording advances automatically. At least 80% required for the knowledge stage (with four equal items this requires 4/4); retakes archive the previous answer set and vary option order. Misses create concept review entries. These checks measure recognition/comprehension, not independent essay writing.

## Writing and review
One original analytical writing task and three concrete review prompts per lesson, in content.js. Draft saves while typing; explicit Save a version records a snapshot. Text is escaped when rendered. No text length threshold, automatic essay mark or assertion of writing mastery. Students should review with a teacher; independent extended-response assessment remains to build. Knowledge completion excludes the unmarked draft. Recall uses due/missed concepts, preserves session state and schedules successful recall through shared concept scheduling. Main progress dashboard shows only built knowledge activities and needs an explicit writing limitation.

## Progression and resume
All four knowledge stages must be satisfied for activity completion; jumping stages does not bypass completion gates. Subject-specific local storage key `crash-course-literature-v1` preserves current lesson, card, explored details, selected answers, first attempts, draft and snapshots, check history and recall. Science/Maths/History/Geography IDs/storage remain unchanged. Main Science tier/route controls are hidden in Literature. Only Macbeth appears in the available course map; planned other texts remain in the authoring records.

## Model and motion decision
Learning purpose: evidence comparison and close reading. No autoplay or camera rotation: textual evidence must remain readable and stable. Scene sequence shows order, not real-world elapsed time or a forced animation. Quotation-level readings are proposed interpretations, not unique examiner-approved answers.

## Verification and handover
Implemented: dist/literature/content.js, studio.js, literature.css; subject entry/progress/navigation integration. Coverage: english-literature-coverage.csv and requirements/roadmap/registers. Technical tests verify ID/eligibility, completion gates, resume snapshots/first attempts, escaping, deterministic choices and navigation integration. Full regression result and publication receipt are recorded in BUILD_STATUS.md. Specialist review not performed. Browser/phone/keyboard/wrong-answer visual journeys could not be exercised: local-preview acquisition was rejected by the browser security policy; no alternate browser-control route used. Preserve this limitation in the handover. Next: visual QA then Macbeth 2.3 onward; full written-response review and complete text teaching remain outstanding.
