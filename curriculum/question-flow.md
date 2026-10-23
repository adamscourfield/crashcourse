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
