# Course map cleanup — 23 October 2026

User request: remove the misleading “partly available” flag and show each topic once as a simple navigation link.

Science topic selector now shows discipline and topic name only. Course map and Choose a topic share one registry-driven list, grouped under Biology/Chemistry/Physics. Removed duplicate hard-coded syllabus list, lesson-count/status cards and redundant subject-switch button. Science lesson chooser no longer tells students more lessons are planned or shows internal review status. Internal teaching/evidence/specialist statuses remain unchanged: this is not a curriculum closure claim.

Maths map uses matching plain topic links for the four implemented areas. Unbuilt Probability/Statistics are omitted rather than presented as working links. The subject selector remains the way to change subject. All existing stable IDs, remembered lessons, route/tier filtering and progress storage are unchanged.

QA: syntax and diff checks passed.113 focused automated tests passed (13 question-clock/Biology boundary/process identity plus100 progress/Maths/Physics eligibility). Browser:25 unique links across Science’s three groups for Separate Foundation;24 in Trilogy with Space excluded. Cell biology and Chemical changes navigation worked; Science lesson menu has no stale planned/review message. Maths four-link map opens Number lessons with Enter. Topic selector has no “partly available” suffix. Phone390×844 uses one column and document width390; desktop1280×977 uses three columns. No console errors observed. Existing saved polymer response was restored on preview load. This change does not modify question marking; wrong-answer and auto-navigation logic remain unchanged and their clock/progress regressions passed.

Publication identifiers and GitHub handover are in BUILD_STATUS.md. No new lesson, question or curriculum requirement was added. Specialist and constructed/physical evidence review remain open.
