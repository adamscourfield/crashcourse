## Guided lesson route — 29 October 2026

Implemented shared automatic navigation across Science, Maths, Literature, History and Geography. Explanations advance at a bounded reading pace; Maths reveals worked steps before moving on. Literature details/views and History/Geography evidence views follow a defined sequence. Genuine answers and required model work remain learner actions; completed investigations and correct challenges lead into practice automatically. Existing practice/check automatic flow retained. Wrong answers remain editable; no answer or writing is submitted by a timer. A visible route/pause bar precedes the workspace; pause persists across steps/subjects/reload. One primary Next action can move earlier. Typed answer Enter still advances after marking. Off-screen active content is brought into view; writing/selection, modal and hidden-context guards protect navigation. First Maths check follows its reading introduction; retakes remain deliberate. Source/question IDs and mastery rules unchanged; no new curriculum coverage.

QA:881 full tests,880 passed/1 unconfigured Postgres RLS skipped/0 failed;77 focused passed after final route/scroll refinements. New deterministic tests cover full explanation-to-evidence-to-real-answer flow, persistent pause/resume, reading pace, wrong/unanswered protection, editing/selection/modal/hidden guards and stale timer cancellation. Actual browser: Literature explanations advanced without clicks, pause/reload/resume, sequential evidence primary action, wrong challenge held/correct challenge auto-entered practice; Maths worked-step primary action and typed47.50/Enter auto-next; Science incomplete titration waits for actual work; Geography completed model routes to practice; History visible route. Phone390 width390/no overflow; desktop restored; no sampled console errors. Results now have a primary route to the missing stage, Literature writing or the next lesson; retake is secondary. Actual browser four-answer-only Check reached results and Write your response opened/focused the draft. Not every lesson/model or full assistive-technology audit. See curriculum/question-flow.md and science-app/guided-navigation-qa.json.

GitHub and existing owner-private Site publication pending; receipt follows. Teaching counts unchanged:361 Science,73 Maths,175 Literature,208 History,189 Geography. New lessons must use this flow rather than introduce extra navigation. Next: student usability/accessibility and pacing calibration; keep specialist and actual writing review distinct from interface QA.

### Current behaviour and boundaries

Reading pace is170 words/minute with12-second minimum and120-second maximum per presentation. This is an initial interface estimate, not a measured learner reading speed. Pause auto persists on this device under a separate preference key; lesson/progress data are not migrated. The notice gives the scheduled duration, not a live countdown. Next remains available immediately. Reading exposure records seen content; it does not award knowledge or writing marks.

Required activity controls, submissions, retrying a wrong answer, independent writing and results decisions remain intentional. Geography student labs are opened by the route and never completed for the learner. Existing detailed model-specific controls remain; this change does not claim every internal model case has been individually redesigned. Cancelling navigation for a modal/hidden tab leaves the visible primary Next available; returning does not jump away. Static text/evidence is paced; process model loop/motion preferences are preserved. Author future explanations/challenges against this shared route and test wrong-answer, resume and context cancellation paths.

# Automatic question flow — 23 October 2026

## Purpose and implementation

Reduce navigation required to answer questions across existing Science and Maths lessons, without changing question IDs, marking rules, mastery thresholds or stored progress.

- Choice questions record on selection. Typed answers use one submission or Enter; composing text does not submit.
- Correct practice answers retain feedback for 2.4 seconds, then advance automatically. Science final practice enters Check. Maths final mastery/mixed practice opens the independent-check introduction, removing the duplicate practice-complete screen; starting a new check remains deliberate.
- Wrong Science practice answers stay editable. Wrong/partial Maths practice retains the diagnosis and worked solution with one “Try another question” action. Blank/invalid inputs remain editable and record nothing.
- Independent checks and topic assessments advance 650ms after a valid first answer, without correctness feedback. Final answers open results automatically. Review advances after correct feedback; missed recall keeps its explanation visible.
- Science Practise uses the focused question layout on desktop and phone: the generic model panel is hidden, while question-specific diagrams remain in the answer area. Discover/Investigate models remain available.
- Before an answer is recorded the redundant Next/Skip button is hidden. After answering, Next remains an immediate alternative; “Stay here” cancels the timed transition for reading.
- One shared, cancellable clock serves both studios. Rerender, modal navigation and tab visibility changes cancel it. Subject/lesson/stage/context guards prevent stale transitions. A paused/hidden-tab transition remains available manually; returning/reloading an answered question may schedule it again.
- Automatic transitions focus the next question heading, preserving keyboard access and announcing context. No answer is submitted merely by typing a character. Existing course/tier filtering, first-answer marks, attempt counts and review scheduling are preserved.

## Verification

603 automated tests passed locally, including four new deterministic clock tests for normal advancement, cancelled queued callbacks, replacement callbacks and invalid context. Existing single process-player identity test caught a cache-query mismatch during development; dependency module identity was restored and the suite passed.

Browser testing used the local preview through the app browser: Science wrong-then-correct practice, automatic three-question journey into Check, all four check answers into results, “Stay here” and manual continuation; equation blank validation and Enter submission; opening lesson navigation cancels pending movement; saved equation response survives reload and restores feedback; switching Science/Maths and changing tier keep sessions separate; polymer choice-to-number progression, blank numeric validation and correct Enter submission. Maths blank input, correct Enter-to-next generated question, wrong answer with retained solution; all ten independent-check questions (typed and choices) reached results without Next clicks. No browser console errors observed. Phone390×844 numeric feedback/footer has no horizontal overflow. Screenshots at root and structured evidence in science-app/question-flow-browser-evidence.json.

Packaging-note: the isolated app-only source checkout cannot resolve two audit tests’ parent curriculum CSVs; its attempted full suite passed601/603 with two missing-file failures. The canonical workspace full suite passed603/603; the final layout change then passed13 focused tests and browser QA. Packaging reused those completed checks rather than treating the isolated audit failures as content failures.

Publication status and exact release identifiers are recorded in BUILD_STATUS.md. This is an interface improvement, not new curriculum coverage or specialist content review. Full assistive-device and student usability review remain open.

## Future lessons

Use this shared flow rather than adding per-question navigation. Keep deliberate actions for investigations, starting an independent run and reviewing mistakes; avoid secondary selectors or confirmation steps for ordinary answers. Process models retain the existing inline looping default.
