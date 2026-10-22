# Crash Course — lesson-building plan

Last updated: 20 October 2026. This is the working plan for building the product across subjects and across sessions.

## Start here

Read `BUILD_STATUS.md` for the current position, then the relevant rows in `curriculum/topic-register.csv` and `curriculum/lesson-register.csv`. Use `LESSON_TEMPLATE.md` to brief a new lesson. Check the actual application source before assuming a feature or lesson exists.

| Record | Purpose |
|---|---|
| `BUILD_PLAN.md` | Product principles, delivery sequence and working process. |
| `BUILD_STATUS.md` | Current batch, decisions, open issues, next action and handover. |
| `LESSON_TEMPLATE.md` | Reusable lesson brief and acceptance criteria. |
| `curriculum/subject-register.csv` | Subject availability, specification choices and mapping readiness. |
| `curriculum/topic-register.csv` | Science topic backlog and coverage/build/review status. |
| `curriculum/lesson-register.csv` | Individual lessons, stable IDs, qualification references and delivery evidence. |
| `curriculum/aqa-spec-index.json` | Numbered AQA heading index. It is not a statement-level coverage audit. |
| `curriculum/atomic-topic-coverage.md` | Mapping for the implemented first topic. |
| `science-app/dist/content.js` | Teaching content actually served by the current app. |

Planning files describe intentions and evidence. Application code describes implemented behaviour. If they disagree, inspect and reconcile them; do not silently mark the plan complete.

## Product direction

Crash Course guides GCSE students through a whole course. It should help them understand an idea, use it, explain it independently and recall it later.

- Build around learning objectives and misconceptions, rather than the number of pages produced.
- Use interactive models when manipulation or observation helps understanding. Use diagrams, worked examples, source comparisons or other tools when they fit the subject better.
- Preserve the requested polished Cinema 4D-style visual direction for appropriate science scenes: dimensional materials, considered lighting, clear depth and purposeful movement. Do not force 3D into every activity.
- Connect visual representations to the formats students meet in assessment: diagrams, graphs, equations, numerical answers and written explanations.
- Adapt the studio, course map, terminology, activities and progress context to the selected subject.
- State which content is available and which is planned. A subject selector is not evidence that a subject's lessons exist.

## Curriculum structure

Use this hierarchy:

`Subject → Qualification / specification → Topic → Lesson → Activity → Assessment item → Concept`

Science additionally has a discipline: Biology, Chemistry or Physics. Keep this distinct from a subject such as Maths or English Language.

Each lesson needs explicit course eligibility and tier restrictions. Share overlapping content between AQA Combined Science: Trilogy and the separate sciences; add extension activities only where the relevant specification requires them. Higher Tier and separate-science eligibility are independent properties.

For other subjects, first establish exam board, specification code, exam years, tier where applicable, and optional units or set texts. Do not assume that an AQA Science choice establishes the exam board for every subject. History options and English Literature texts need explicit choices before their complete courses can be mapped.

### Stable identity

Use stable, namespaced IDs for new curriculum records, for example `science.chemistry.bonding.ionic-bonding`. Track the actual runtime ID separately where the current app uses a short ID such as `particles`.

Do not rename existing runtime lesson, question or concept IDs casually: saved progress refers to them. Any later migration to namespaced IDs needs a mapping and tests. Key progress by subject/course and content version as the platform expands, rather than allowing identical short IDs in two subjects to share progress.

Store qualification references alongside content. Avoid copying an entire lesson just to change its reference number or route label.

## Interactive-model acceptance

The user reiterated that interactive models are key. Each Biology brief must state what the learner changes, what visibly changes as a result, the prediction/explanation required and what the model simplifies. Static illustrations alone do not satisfy a new investigation. Provide keyboard controls, persistent model state, non-colour cues and phone verification; avoid invented biological rate/force precision. Keep this priority across future sessions.

## Cell model visual decision

Use genuine rotatable cutaways for animal/plant/bacterial spatial relationships, with separate wall/membrane layers, recognisable internal structures, a keyboard-accessible structure/function selector and a clear selected marker. Keep improved2D schematics for revision and independent checks, and as the WebGL fallback. Start still; rotation is optional. Preserve separately-enlarged/not-to-scale notes and original progress IDs.3D is purposeful here, not a requirement for every lesson.

## Biology progression

Latest priority is Biology. Cell biology has16 shared plus3 separate-only lessons; statement/evidence audit found no material missing teaching. Official8461 PDF resolves the isolated HTML percentile wording for authoring. Six Organisation batches add23 shared both-tier lessons, including plant tissues/transport and data/practical preparation. Next reconcile topic statements and evidence before mapping FIVE Infection and response lessons. Independent writing/freehand/physical practical and specialist evidence remain distinct. Preserve Chemistry’s ten-topic release and all progress.

## Current authorised scope

The user authorised all Chemistry lessons without intermediate permission checks. The ten-topic teaching sequence now contains113 published lessons. QA and existing-audience publication completed as one release; retain the mapped evidence gaps and specialist/practical statuses. See `curriculum/CHEMISTRY_COMPLETION.md`. Biology is now being implemented in Organisation batches of five; Physics and other subjects remain planned.

## Delivery sequence

This sequence is the working recommendation, not a claim that all later batches have been commissioned or implemented. A new user instruction can change priority; record the change in `BUILD_STATUS.md`.

| Phase | Work | Exit evidence |
|---|---|---|
| 1 — establish the pattern | Atomic structure and the periodic table. Implemented first batch. | Lesson flows, assessment, review and pathway checks. |
| 2 — strengthen the pattern | Audit the first batch against individual assessable statements; address gaps; improve independent question variety and review the learning experience. | Statement-level coverage record and resolved findings. |
| 3 — next science batch | Bonding, structure and properties of matter. The sixteen lessons are implemented (thirteen shared and three separate-only); continue in mapped, coherent batches. | Topic mapping, functioning activities, assessments and QA. |
| 4 — expand science | Quantitative Chemistry has eight lessons (four both tiers, four Higher only). Continue Chemistry; then Biology and Physics, following prerequisite relationships and the user's priorities. | Reconciled topic/lesson registers after every batch. |
| 5 — expand subjects | Select and map the next non-science specification. Pilot representative lesson types before scaling its course. | Subject-specific templates and a reviewed pilot batch. |
| 6 — student platform | Accounts, cross-device progress, broader analytics and teacher workflows as separately scoped work. | Defined data model and verified product behaviour. |

The app now has explicit course/topic registries, topic-specific lesson lists and separate assessment/review histories. Preserve this scoping as topic count grows; a topic assessment must not accidentally become an assessment of every lesson in the entire platform.

User preference20 October2026: build batches of FIVE closely related lessons. Build and verify the whole learning loop for a batch before moving to the next. Some topics will need more or fewer lessons; decide from the specification and learning needs.

## Workflow for each topic

1. **Verify scope.** Fetch the current official specification and relevant assessment guidance. Record source, check date, qualification, tier and optional-unit restrictions. Headings alone are insufficient.
2. **Create the coverage map.** Split assessable statements into objectives. Map every objective to a lesson and an activity or question. Include calculations, practical skills, data interpretation and required examples. Mark gaps explicitly.
3. **Identify dependencies.** Record prior concepts, likely misconceptions and links to future topics. Decide whether a shared concept is taught here, retrieved here, or deferred to a named later lesson.
4. **Brief the lessons.** Fill in `LESSON_TEMPLATE.md` for the batch. Decide what the student does and what evidence demonstrates understanding before designing a scene.
5. **Author and implement.** Write original explanations, interactions, worked examples, practice and independent questions. Include qualification/tier filtering and source references.
6. **Verify content and behaviour.** Use the checks below. Resolve factual, mathematical, scoring, accessibility and navigation defects before calling a lesson QA-passed.
7. **Publish the verified source.** Use the existing Site identity and preserve its audience. Record the successful deployment and its matching source commit. A local preview is not a published lesson.
8. **Update the handover.** Reconcile the registers, coverage map and `BUILD_STATUS.md`. Record remaining gaps and one concrete next action.

Do not replace unfinished work with a longer future plan. Use these records to continue the user's authorised batch to completion.

## Standard learning loop

| Stage | Student action | Evidence |
|---|---|---|
| Discover | Read/listen, inspect representations, connect to a prior idea. | Explanations encountered; meaningful prediction or interpretation where appropriate. |
| Investigate | Change something, compare results, build, classify or test a claim. | Task-specific outcomes, not just opening a screen. |
| Practise | Solve supported examples, explain reasoning, receive targeted feedback and retry. | Attempts and misconceptions recorded separately from mastery. |
| Check | Answer without worked solutions or answer-revealing model hints. | First answers and an independent result. |
| Review | Retrieve concepts after a delay or following a missed answer. | Recall evidence and the next scheduled review. |

This loop is a default, not a rigid template for every subject. A source-analysis lesson or essay-planning lesson may need a different activity structure while retaining explanation, independent application and later recall.

## Content and assessment checks

For each lesson:

- Objectives match the full specification paragraphs, including restrictions within a paragraph and inherited restrictions.
- Terms, calculations, units, diagrams and examples are accurate. Model simplifications are visible where they affect interpretation.
- Practice includes useful explanations for likely wrong answers. Correct answers are not made obvious by length, wording, position or interface clues.
- Independent questions test application as well as recognition. Use fresh examples and varied representations where appropriate.
- Answer keys, accepted numeric tolerances and marking rules are checked. Written answers need an explicit rubric; do not pretend a multiple-choice check measures essay quality.
- Required practical preparation covers method choice, variables, observations, data and evaluation. Simulations do not fulfil the school practical requirement.
- Distinguish initial correctness, eventual practice success, check scores and recall performance.

The current app uses an 80% check threshold alongside completion of the other stages. With three questions, this requires all three correct; with four questions, three correct is only 75%. Do not treat a short check as high-confidence proof of broad mastery. Expand question banks and evidence types as content develops. Topic readiness is separate from completing every lesson.

Independent subject-specialist review is tracked separately from technical QA. Its absence must remain visible in the records, but it is not an invented approval gate for routine user-authorised building.

## Interaction and platform checks

- Desktop and phone layouts remain usable; labels are readable and controls work by keyboard.
- Colour is supported by text or another cue; reduced motion and useful non-3D representations are available where relevant.
- Returning to the app resumes the right subject, course, lesson and activity without losing recorded answers.
- Subject, route and tier changes show only appropriate content and do not destroy other progress.
- Assessments retain first answers and report results accurately. Review only selects concepts eligible for the student's current course/tier.
- Existing saved IDs remain valid or have a tested migration. Changed teaching content must not inherit unearned mastery.
- New behaviour has targeted regression checks. Exercise each new interaction in the browser, including wrong answers and retry/resume paths.
- Separate tests actually run from checks merely planned. Repeat testing when changes or unresolved concerns justify it.

## Status vocabulary

Track these independently rather than using one ambiguous “done” label:

| Field | Values |
|---|---|
| Planning | `unmapped`, `heading_indexed`, `statement_mapped`, `briefed` |
| Build | `not_started`, `in_progress`, `implemented` |
| QA | `not_run`, `in_progress`, `passed`, `needs_fixes` |
| Publication | `not_published`, `published` |
| Specialist review | `not_reviewed`, `reviewed`, `changes_requested` |

A lesson can be implemented, QA-passed and published while still lacking statement-level audit or specialist review. Preserve that distinction. “Complete course” requires reconciled coverage of all assessable requirements, not just a full list of topic headings.

## Handover after each batch

Update the last-worked date, completed batch, source/deployment evidence, tests run, known limitations, accepted decisions and next recommended action. Keep progress claims scoped: this topic, this pathway, this subject.

Do not store credentials or real student data in planning records. No automatic follow-up or background schedule is created by this plan.

Current implementation checkpoint (16 October2026):35 lessons, including6 Quantitative Chemistry lessons (4 Foundation/6 Higher). Whole-lesson eligibility now filters tier and route independently. Next authorised batch: Higher limiting reactants and balancing equations from mass data; then separate-only yield/atom economy. See BUILD_STATUS.md for publication and QA evidence.

Batch03 checkpoint:37 lessons,101 practice items,166 check items. Higher limiting reactants and balancing from masses are implemented; next separate-only percentage yield and atom economy.

Batch04 checkpoint:39 lessons,109 practice items,178 check items. Separate-only percentage yield and atom economy implemented with Higher extensions; next molar concentrations and gas volumes.

Batch05 checkpoint:42 lessons,118 practice items,193 independent checks. Separate Higher molar concentrations, reacting volumes and gas volumes implemented. Next Quantitative statement reconciliation/evidence enhancements, then Chemical changes.

Audit/Changes checkpoint:44 lessons,124 practice,207 checks. Quantitative35-objective evidence audit records remaining gaps; Chemical changes2 shared lessons published after QA. Next carbon extraction and Higher electron redox.

Chemical changes batch02 checkpoint:46 lessons,130 practice,217 independent checks. Carbon extraction shared both tiers; Higher electron redox includes saved free-entry equation construction. Next acids/metals and neutralisation/salts.

Chemical changes batch03:48 lessons,137 practice,229 checks. Acid-metal and neutralisation/salt formula lessons implemented; next soluble salts and pH.

Chemical changes batch04:50 lessons,143 practice,239 checks. Salt preparation planner and pH explorer with typed neutralisation equation implemented. Next separate titration and Higher strong/weak acids.

Chemical changes batch05:52 lessons,150 practice,250 checks. Separate titration and shared Higher acid-strength implemented; route-specific reference override handles differing paragraph numbers. Next electrolysis.

Interactive-model audit checkpoint:54 lessons scanned,108 desktop/phone states checked, shared renderer and targeted diagram upgrades. See curriculum/interactive-model-audit.md for resolved findings and remaining quality priorities. No new lessons or independent evidence claims added.

Family design checkpoint: use DESIGN-SPEC.md as the Together family reference and DESIGN_ADAPTATION.md for Crash Course-specific implementation decisions. Preserve the cream/navy/coral and serif/sans language across future subjects.

Chemical changes batch07 checkpoint (18 October2026):56 lessons,164 practice,272 checks. Aqueous products and practical preparation implemented, QA-passed and privately published. Next aluminium extraction and fuller Higher half-equation construction. See BUILD_STATUS.md for actual release evidence.


Changes batch07 and interface cleanup publication: succeeded18 October2026 at20:34 BST. Source e57a802ce6498ca2416f84db3950900cc82b1c0e; deployment appgdep_6ad51f1ad98c81919df300ba1563371a; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_cd328e4cddc08191ab2ea7657d145cea. Existing owner-private audience preserved. Live lesson list shows14 Separate Higher Chemical changes lessons; aqueous lesson opened and console clean. Screenshot crash-course-aqueous-preview.png. Next aluminium extraction and fuller Higher half-equation construction. Specialist review and school practical fulfilment remain outstanding.

Chemical changes batch08 checkpoint:58 lessons,172 practice,285 independent checks. Aluminium and Higher half-equation writing implemented, QA-passed and privately published. Next statement-level Chemical changes reconciliation, then Energy changes.


Changes batch08 publication: succeeded18 October2026 at20:18:46 UTC. Source1762c9ee1d88e47205393613f8c4cf9652ee3159; deployment appgdep_6ad52996ef1081919ecaa71b0718a07f; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_b00ac44ee28081919181432c315425f9. Existing owner-private audience preserved. Live list confirms16 Separate Higher Chemical changes lessons with Higher-only writing label; aluminium lesson opened; console clean. Screenshot crash-course-aluminium-preview.png. Next Chemical changes statement reconciliation, then Energy changes. Specialist review and school practical fulfilment remain outstanding.

Energy batch01 checkpoint:60 lessons,178 practice,297 checks. Chemical changes43-objective audit records remaining evidence gaps. Energy transfer and profiles shared both tiers implemented, QA-passed and privately published. Next temperature practical preparation and Higher bond energies, then separate cells/fuel cells.


Energy batch01 / Chemical changes audit publication: succeeded18 October2026 at20:31:33 UTC. Source0506ad12c50c16edb51252b08604c4eceb85cd4b; deployment appgdep_6ad52c969940819186bfb0385d16699e; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_76a358964020819182ca019d21f9561d. Existing owner-private audience preserved. Live fifth topic and both lessons verified; profile builder opened; console clean. Screenshot crash-course-energy-preview.png. Next required temperature-change practical preparation and Higher bond-energy calculations. Specialist review and school practical fulfilment outstanding.

Energy batch02 checkpoint:62 lessons,185 practice,310 checks. Practical temperature investigation and Higher bond-energy calculations implemented;100 automated tests and both full browser flows passed. Privately published and live verified. Next Separate-only cells/batteries and fuel cells; then Energy statement reconciliation.


Energy batch02 publication: succeeded18 October2026 at20:45:49 UTC. Source1b25b5365a2dfb722fc7003a8b5ccab2f0fe9432; deployment appgdep_6ad52fef3f28819188f7cae866b72295; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_93f14df2e4248191add9acca7d7bac63. Existing owner-private audience preserved. Live Energy list confirms4 lessons with Higher-only bond label; both new lessons opened; console error log empty. Screenshot crash-course-bond-energies-preview.png. Next separate-only cells/batteries and fuel cells, then statement reconciliation. School practical and specialist review remain outstanding.


Energy batch03 checkpoint:65 lessons,194 practice,328 independent checks. Energy batch03:104 Node tests pass; syntax and diff checks pass. Browser all3 full flows completed6/6. Wrong electron direction/series total, unsupported fuel choice/evidence and unbalanced/reversed half-equations corrected with feedback. Saved drafts survive reload; submitted independent numeric/half-equation answers remain locked. All9 investigation cases completed. Unicode/scaled/reordered equations accepted. Combined hides all3 new lessons; Separate Foundation shows2 and Higher3; returning preserves work. All3 models and controls inspected at390px with no horizontal overflow or caption collision; input-to-check keyboard Tab verified; console error log empty. No physical-device/full screen-reader or specialist review claim. Privately published and live verified. Next Reconcile Energy statements and independent evidence gaps; then rates and extent of chemical change.


Energy batch03 publication succeeded19 October2026 at07:06:58 UTC. Source03cc4f6aa70493b31924401cd5f8133884640ae0; deployment appgdep_6ad5c1848ebc8191967d3676b978e5ec; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_7bbc4a9ae29481919233c6cfcd0e78d1. Existing owner-private audience preserved. Live7-lesson Separate Higher list verified; all3 new lessons opened and fuel evaluation mounted; console error log empty. Screenshot crash-course-fuel-cells-preview.png. Next Energy statement reconciliation and evidence enhancements, then rates. Specialist review and school practical fulfilment outstanding.


Energy audit / Rates01 checkpoint:67 lessons,201 practice,342 independent checks. 109 Node tests pass; syntax/diff checks pass. Energy31-objective audit validates every lesson/question ID and inherited tier/route scope; direct recharge check added and browser scored7/7 without changing old IDs. Rates mean-rate Higher flow7/7 and collision flow6/6 completed. Wrong inverted rate, final-reading/subinterval arithmetic and lower-barrier collision explanation corrected; drafts and first-answer locks survive reload. Foundation shows3 mean explanation cards and6 checks; Higher shows4/7 and mol/s items; shared route switches preserve work. New2-question topic assessment first answer survives reload/topic switch. Both390px activities inspected without horizontal overflow/caption collision; keyboard Tab order verified; console error log empty. Numeric mole-rate tolerances reject zero in automated checks. No physical-device/full screen-reader or specialist review claim. Privately published and live verified. Next Rate graphs and tangents (numeric gradient Higher only); catalysts; gas-volume and turbidity practical preparation.


Energy audit / Rates01 publication succeeded19 October2026 at07:17:08 UTC. Source97a9f59222172fbe507f045f1d7c23fe9b5e5c7a; deployment appgdep_6ad5c3e577b08191a54a9f0e8f8a4eb0; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_1129dffff23c819189a048dab9f9f660. Existing owner-private audience preserved. Live topic06 list and both new lessons verified; collision activity mounted; console errors empty. Screenshot crash-course-rates-preview.png. Next graphs/tangents and catalysts, then required practical preparation. Specialist review and school practical fulfilment remain outstanding.


Rates02 checkpoint:69 lessons,208 practice,355 independent checks. Rates02:114 Node tests pass; syntax/diff checks pass. Curve derivative and tangent coordinates validated; catalyst endpoints preserved. Browser graph Higher flow7/7 and catalyst6/6 completed. Wrong plot coordinates, faster-versus-final amount, flat tangent and higher catalyst barrier/changed energy difference receive feedback. Draft plotted values, tangent tilt and catalyst selections survive reload. Range adjusted with keyboard arrows; independent graph first answer remains locked on reload. Gradient practice wrong/retry verified; independent tangent stimulus and result shown. Foundation graph has3 cards/6 checks, Higher4/7; route/tier switches retain work.390px tangent and catalyst layouts inspected with no horizontal overflow or caption collision; console error log empty. Independent accessible graph descriptions give coordinate data rather than a worked comparison. Freehand graph/tangent skill, school practicals, full screen-reader/physical-device and specialist review remain outstanding. Privately published and live verified. Next Concentration practical preparation: gas-volume and colour/turbidity methods with hypothesis; then reversible reactions and equilibrium.


Rates02 publication succeeded19 October2026 at07:26:05 UTC. Sourcef090f0d964cafdb07537348619fae78e34a3e405; deployment appgdep_6ad5c5ff72188191b2ee720cf2cd251e; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_8ef4372b49a8819196cafa7bdb7fed44. Existing owner-private audience preserved. Live4-lesson list verified; both new lessons opened; tangent interaction mounted and keyboard tilt worked; console errors empty. Screenshot crash-course-tangent-preview.png. Next concentration practical preparation (gas-volume and colour/turbidity), then reversible reactions/equilibrium. Specialist review and school practical fulfilment outstanding.


Rates03 checkpoint:70 lessons,212 practice,363 independent checks. Rates03:118 Node tests pass; syntax/diff checks pass. Dilution uses pre-acid g/dm³ stock fraction; both-tier keys/refs and mixed slider/numeric persistence verified. Browser Combined Foundation full flow8/8; all4 tasks completed. Wrong plan controls, raw gas volumes instead of rates, higher-yield interpretation and dilution/endpoint choices receive feedback; correct retries pass. Draft choices, numeric entries and70% cloudiness survive reload; independent first answer locked. Practice wrong numeric retry verified. Separate Higher retains shared completed work.390px gas and turbidity layouts inspected without horizontal overflow/caption collision; keyboard range endpoints produce opacity0 and1; console errors empty. Gas-syringe apparatus is a valid alternative to handbook collection apparatus; original illustrative data, not copied practical results. No physical practical competence, unrestricted method writing, full screen-reader/physical-device or specialist-review claim. Privately published and live verified. Next Reversible reactions and energy reversal; closed-system dynamic equilibrium; then Higher equilibrium condition changes.


Rates03 publication succeeded19 October2026 at07:35:53 UTC. Source3d76ef775e7033ff308282663614edef04640e0c; deployment appgdep_6ad5c84b369081918736f571e75b299d; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_fa1e5957ab1481918b033d144a8f006f. Existing owner-private audience preserved. Live5-lesson rates list and new lesson verified; turbidity activity mounted and slider worked; console errors empty. Screenshot crash-course-rate-practical-preview.png. Next reversible reactions/energy reversal and closed-system equilibrium; Higher condition shifts follow. Specialist review and school practical fulfilment outstanding.


Organisation batch01 checkpoint19 October2026:135 lessons/432 practice/798 independent checks. Cell biology statement audit complete for authoring with retained evidence gaps. Three shared both-tier Organisation lessons published after169 automated tests and all10 live phone investigation tasks. Next named digestive enzymes/sites/products, conditions/rates, bile and mapped required practicals. Full release evidence in BUILD_STATUS.md and biology-organisation-topic-coverage.md.


Organisation batch02 checkpoint19 October2026:138 lessons/444 practice/824 independent checks;25 Separate Biology lessons/22 Trilogy. Digestive enzymes, conditions/rates and bile published;174 automated tests pass and all10 new investigation tasks verified live on phone. Next food-test practical preparation followed by amylase-pH practical preparation, then map heart/blood. Specialist/constructed-response/physical-practical gaps remain. See BUILD_STATUS.md for exact release provenance.


Organisation batch03 checkpoint20 October2026:140 lessons/452 practice/842 independent checks. Food tests and amylase practical preparation published;178 tests pass, both full flows9/9 and all9 live phone tasks verified. Eight Organisation lessons available. Next map/build heart and double circulation, blood vessels/flow and blood components; practical competence and specialist/constructed-response evidence remain outstanding.


Organisation batch04 checkpoint20 October2026: FIVE shared lessons published,145 total lessons/472practice/883checks.186 automated tests, all five full flows and17 live phone tasks pass. Five lessons per batch is now the recorded user preference. Next five cover coronary disease/treatments, health/interacting diseases, lifestyle risk, health-data interpretation and cancer, after statement mapping. Specialist/physical/constructed-response/real-image gaps remain. Release provenance in BUILD_STATUS.md.

## Heart visual decision —20 October2026
Use connected cutaways with recognisable asymmetric chambers, septum, major vessels and ventricular wall contrast. Keep labelled2D and rotatable3D geometry consistent. Symbolic colours need a text key; retain orientation cues and model limitations. User visual feedback takes priority over the next five-lesson content batch.

Batch05 checkpoint20October2026:150 lessons/492 practice/923 independent checks. Five shared health/risk/data/cancer lessons published after194 tests and local/live browser verification. Organisation18 shared; Biology37 Separate/34 Trilogy. Next FIVE plant organisation/transport lessons after statement mapping.

Batch06 checkpoint20October2026:155 lessons/512 practice/967 independent checks. Five shared plant lessons published after202 tests and local/live browser verification. Organisation23 shared; Biology42 Separate/39 Trilogy. Next Organisation statement/evidence reconciliation before mapping FIVE Infection and response lessons; practical, constructed/freehand and specialist evidence remain distinct.

## Choose motion deliberately — added21October2026

For every new model, explicitly decide whether the learning objective is a structure, a process over time, or an evidence comparison. Use inspectable3D/labelled2D for structure. Use a short replayable process film when direction, sequence, transfer or transformation is essential; camera rotation alone does not explain a process. Use controlled plots/tables and student-led stages when prediction and evidence need to remain concealed. A film can accompany rather than replace these activities.

Process films must have purpose-labelled stages, open inline and autoplay with looping enabled (start paused when reduced motion is requested), support play/pause, replay, previous/next stage, scrubbing, optional loop and speed, and offer a readable transcript. Respect reduced-motion preferences through user-triggered playback and still stepping. Keep symbolic timing, routes and scale explicit; distinguish worked examples from the current experiment settings. Do not autoplay answer-bearing scenes in independent checks or award progress for watching. Preserve IDs, drafts, tier/route scope and existing assessment criteria. Test beginning/middle/end, pause/replay/loop, phone/keyboard, closing/background lifecycle and return to an unfinished investigation. Reference `curriculum/model-motion-register.csv` and `curriculum/model-motion-audit.md`.


## Homeostasis batch02 — published

Five separate-only brain/eye lessons; four both-tier and Higher-only brain investigation.24 mapped statement groups in biology-senses-requirements.csv, official8461 4.5.2.2/.3 checked21October2026.20 practice/20 independent checks; app190/662/1239; Biology77 Separate Higher/64 Trilogy Higher. Topic10 Separate Higher/9 Separate Foundation/5 Trilogy. Three auto-looping process films added (31 films/37 lesson bindings); brain and eye cutaways retain paired diagrams.259 automated tests pass and five browser full flows4/4, all11 challenge sets complete. Wrong/empty answers reject, draft persists, independent first wrong locks after reload,75% fails/100% retake passes. Representative390px layouts fit; console errors empty. Technical QA only; specialist/freehand/extended-writing evidence remains outstanding. Stable prior IDs/storage preserved. Next map thermoregulation (separate, Higher mechanism restrictions), endocrine system, insulin, diabetes and Higher glucagon/negative feedback. See biology-homeostasis-batch-02-brief.md.


Published21October2026 at08:18:24UTC. Source ffdaf03d0adca2d8025ccc7c31f948bb7d52f78d; deployment appgdep_6ad8752b4a10819192ca162f36348930; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f6e508568fa081918c408e956408b0e3. Owner-private audience preserved. Live ten-lesson list and accommodation inline autoplay/Loop verified. Proof crash-course-brain-eye.png; archive science-app-senses.tar.gz.


## Homeostasis batch03 — published

Five lessons: thermoregulation (separate Biology, both-tier responses/Higher mechanism detail); endocrine system; insulin control; diabetes (shared both-tier); glucagon feedback (shared Higher only).34 grouped statement rows map8461 4.5.2.4/4.5.3.1–.2 and8464 4.5.3.1–.2, checked21October2026.25 practice/33 independent checks; app195/687/1272; Biology82 Separate Higher/68 Trilogy Higher. Homeostasis15 Separate Higher/13 Foundation/9 Trilogy Higher/8 Foundation. Four new process films,35 films/41 bindings total. Gland-map/data cards and gland/data/risk comparison activities open their actual evidence. Process cards and pathway investigations default inline looping. Temperature Higher task requirements are explicit and recomputed by selected tier without losing drafts.

270 automated checks pass. All15 investigation sets and five full browser flows6/6,8/8,6/6,7/7,6/6 pass; wrong first practice each, wrong comparison each, out-of-order pathways and zero numeric answers reject. Low-glucose scenario/wrong choice and edited numeric value restore on reload. Independent wrong first answer locks after reload; diabetes71% fails and100% retake passes. Foundation3 temperature cards/2 tasks; Higher4/3. Shared route/tier switches preserve9/9 Trilogy Higher,8/8 Foundation and15/15 Separate Higher. All15 phone investigation layouts have390px document width without horizontal overflow; four process films fit304px panels, stage controls work. Native keyboard scrub, model inspection, diagram/process card handoff and console checked; no errors observed. Counts/timing/data are original illustrative models, not clinical measurement or dose advice. Technical QA is not specialist review, freehand/extended-writing evidence or physical-device/full screen-reader certification. Stable prior IDs/storage and private Site identity retained.

Next: map five separate-only water/nitrogen balance lessons: water/osmosis, kidney filtration/reabsorption, Higher urea formation, Higher ADH, dialysis/transplant comparison. Reproductive hormones follow. Organisation/Infection evidence reconciliation remains pending. Source content-biology-endocrine.js; endo-models/figures/meshes/visuals/films.js; widgets-endocrine.js. Brief biology-homeostasis-batch-03-brief.md; mapping biology-endocrine-requirements.csv; browser evidence endocrine-browser-evidence.json. Published21October2026 at11:59:11UTC. Source2c910b9e3775d57dbf8edb687b3a77b9d3176d75; deployment appgdep_6ad8a8fc64488191b7dee34c23ad53bc; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_db69c68534c48191b198236d3d760124. Owner-private audience preserved. Live15-lesson list, insulin looping process and glucose graph-card handoff verified; console errors empty. Archive science-app-endocrine.tar.gz; proof crash-course-endocrine.png.


Published21October2026 at11:59:11UTC. Source2c910b9e3775d57dbf8edb687b3a77b9d3176d75; deployment appgdep_6ad8a8fc64488191b7dee34c23ad53bc; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_db69c68534c48191b198236d3d760124. Owner-private audience preserved. Live15-lesson list, insulin looping process and glucose graph-card handoff verified; console errors empty. Archive science-app-endocrine.tar.gz; proof crash-course-endocrine.png.


## Homeostasis batch04 — published

Five separate Biology lessons: water/osmosis; kidney filtration/reabsorption; Higher urea formation; Higher ADH; dialysis/transplant.26 grouped statement/evidence rows map8461 4.5.3.3, checked21October2026. NIDDK corroborates dialysis/transplant facts; no clinical guidance or patient data.20 practice/30 checks; app200/707/1302; Biology87 Separate Higher/68 Trilogy Higher. Homeostasis20 Separate Higher/16 Foundation; Trilogy unchanged9 Higher/8 Foundation. Five auto-loop process films added:40 films/46 bindings total. Labelled functional models avoid unnecessary nephron anatomy; original amount table→student bar plotting, matched-solute dialysis and treatment evaluation retain evidence views.

278 automated checks pass. All15 investigation sets and five full browser flows6/6 pass, with wrong practice retries, wrong comparison predictions, premature pathway choices, zero numeric and swapped bars rejected. Student returned-ion bar14 restores on reload; first wrong independent answer locks; treatment check67% fails and100% retake passes. Foundation excludes urea/ADH, retains3 new lessons;20/20 Separate Higher and9/9 Trilogy Higher retained across route switch. All15 phone investigation layouts fit390px without page overflow; five film panels fit304px, Loop checked, stage controls and keyboard End/replay work. No browser console errors. Stable IDs/storage preserved. Technical QA is not specialist review, unrestricted writing/freehand, clinical or physical-device/full screen-reader certification.

Source content-biology-renal.js; renal-models/figures/meshes/visuals/films.js; widgets-renal.js. Brief biology-homeostasis-batch-04-brief.md; mapping biology-renal-requirements.csv; browser evidence renal-browser-evidence.json. Next map FIVE shared reproduction lessons: puberty/reproductive hormones, menstrual cycle basics, Higher cycle interactions/graphs, contraception, Higher infertility/IVF, using route-specific numbering. Adrenaline/thyroxine and separate plant hormones remain later; Organisation/Infection evidence audits remain pending. Published21October2026 at12:36:36UTC. Source0828b0e4099c7b4f03f1153f22c48e112a4217ff; deployment appgdep_6ad8b1c549f48191858e85cf12588f68; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_90cfe27eb7548191baa90b8d3bd6ff02. Owner-private audience preserved. Live20-lesson list, Higher scope and kidney inline autoplay/Loop verified; console errors empty. Archive science-app-renal.tar.gz; proof crash-course-renal.png.


Published21October2026 at12:36:36UTC. Source0828b0e4099c7b4f03f1153f22c48e112a4217ff; deployment appgdep_6ad8b1c549f48191858e85cf12588f68; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_90cfe27eb7548191baa90b8d3bd6ff02. Owner-private audience preserved. Live20-lesson list, Higher scope and kidney inline autoplay/Loop verified; console errors empty. Archive science-app-renal.tar.gz; proof crash-course-renal.png.


## Homeostasis batch05 — implemented and published

Five shared Biology lessons: puberty/reproductive hormones; menstrual cycle events/roles; Higher interactions/graphs; contraception; Higher fertility drugs/IVF. Route-specific references8461 4.5.3.4–6 and8464 4.5.3.3–5 verified21October2026. NHS/HFEA corroborate copper IUD, combined patch and embryo-transfer wording.21 practice/31 checks added; app205 lessons/728 practice/1333 checks. Biology92 Separate Higher/73 Trilogy Higher. Homeostasis25 Separate Higher/19 Foundation/14 Trilogy Higher/11 Foundation. Four new process films give44 films/50 lesson bindings. Contraception opens controlled mechanism/evidence views; graph/evaluation cards keep evidence visible. Cycle timing and relative-unit curves are explicitly illustrative, not individual predictions.

286 automated tests pass. Five full browser flows pass (four6/6 checks, IVF7/7), including investigation wrong-answer retries and premature pathway rejection. All15 investigation layouts fit390px without document overflow. Completed progress25/25 survives reload; graph cursor day28 and numeric value6 restore. Course/tier switching shows19/14/11 eligible lessons and retains completion. Four process views use inline playback with Loop checked; direct graph task has no visible process overlay. Technical checks do not constitute specialist review, clinical advice, unrestricted written/freehand assessment or full assistive-device certification.

Source content-biology-reproduction.js; repro-models/figures/meshes/visuals/films.js; widgets-reproduction.js. Brief biology-homeostasis-batch-05-brief.md; statement map biology-reproduction-requirements.csv; browser evidence reproduction-browser-evidence.json. No progress schema migration or existing-ID replacement. Next map Higher adrenaline/thyroxine feedback and separate plant-hormone responses, practical and applications into the next bounded batch; Homeostasis remains partial. Organisation/Infection evidence audits remain outstanding. Published21October2026 at12:57:19UTC. Source6bcf2ff86aad57d7b9dce62028c83bffeb9b04a0; deployment appgdep_6ad8b6a0aaec8191bbbe5d157161bceb; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_952f9123586c8191b1a49cae699fedf4. Owner-private audience preserved. Live25-lesson list and cycle inline autoplay/Loop verified; no console errors. Archive science-app-reproduction.tar.gz; proof crash-course-reproduction.png.


## Homeostasis batch06 — implemented and published

Five new lessons: shared Higher adrenaline/thyroxine feedback; separate both-tier tropisms and seedling practical8 preparation; separate Higher auxin applications and gibberellin/ethene roles/uses.32 grouped statement/support rows map8461 4.5.3.7/4.5.4.1/.2 and8464 4.5.3.6, checked21October2026.20 practice/30 checks added; app210 lessons/748 practice/1363 checks. Biology97 Separate Higher/74 Trilogy Higher. Homeostasis30 Separate Higher/21 Foundation/15 Trilogy Higher/11 Foundation. Eight new process films across four lesson bindings:52 films/54 bindings overall. Per-card processFilm selection matches adrenaline, thyroid, phototropism, each gravity response, rooting, germination and ripening. The seedling practical remains editable evidence; length/mean tasks and student-assembled labels/direction complement the growth models.

296 automated tests pass, including route/tier/ref scope, opposite auxin responses, gated errors, numerical denominators, drawing labels, per-card/reduced-motion policy, persisted hidden drafts and isolated SVG paint IDs. Five full browser flows pass6/6 each, with wrong predictions/practice, premature stages, zero numeric and wrong labels rejected. First wrong independent answer stays locked after reload;67% fails and100% retake passes. Edited drawing label restores on reload, then corrected. Prior25 completions retained; final30/30,21/21,15/15,11/11 persist across course/tier switches. All15 investigations and20 teaching cards fit390px without document overflow; process panels344px. All8 matching film views show Loop checked; evidence cards hide the player. Keyboard End/stage/replay checked on representative film; no console errors. Visual review fixed hidden-view SVG ID conflicts and repositioned gravity curves; final growth view checked. Technical QA is not specialist review, unrestricted written/freehand assessment, real apparatus competence or full physical-device/screen-reader certification.

Files: content-biology-growth.js; growth-models/figures/visuals/films.js; widgets-growth.js; process-policy.js per-card override; registry/content/widget integration. No IDs/schema migration. Brief biology-homeostasis-batch-06-brief.md, mapping biology-growth-requirements.csv, evidence growth-browser-evidence.json. Next source-reconcile Homeostasis statements and independently constructed/practical evidence, then map first five Inheritance lessons. Homeostasis stays partial; Organisation/Infection audits pending; Physics remains planned. Published21October2026 at13:16:35UTC. Sourceee8449c8331f7c4f5928a6a6fb9e6baebe6484b5; deployment appgdep_6ad8bb23bca0819189970ecb73819674; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_46bf71dbae148191b90681a6b10b4c67. Existing owner-private audience preserved. Live30-lesson inventory, tropism inline autoplay/Loop and rendered growth curve verified; no console errors. Archive science-app-growth.tar.gz; proof crash-course-growth.png.


## Inheritance batch01 and remaining Biology roadmap — implemented and published

User priority moves to Inheritance/Ecology; Homeostasis reconciliation remains pending. biology-remaining-roadmap.csv reserves28 Inheritance and25 Ecology section-scoped lesson units, not final statement-complete briefs. First five Inheritance lessons now implemented: reproduction, meiosis, fertilisation/embryo growth, separate reproduction strategies, DNA/genome. Four shared plus one separate-only, all both tiers.31 grouped assessable/support requirements map8461 4.6.1.1–.4 and8464 4.6.1.1–.3. Remaining23 Inheritance/25 Ecology units are planned, not available. Later exact scopes may change at briefing. Ecology sampling practical numbering8461 RP9/8464 RP7 checked; separate decay RP10. Topic coverage maps record exclusions and tier differences.

20 practice/30 checks added; app215 lessons/768 practice/1393 checks. Biology102 Separate Higher/78 Trilogy Higher. Inheritance5 Separate/4 Trilogy at both tiers. Four new films across three bindings give56 films/57 bindings overall. Sexual/asexual card selection, one-replication/two-division chromosome model, fertilisation/mitotic growth, DNA hierarchy and genome/strategy evidence. Model limitations distinguish chromosome/DNA counts, pollen carriers and four generalised meiotic products from functional egg production. All prior IDs/progress retained; new topic-scoped assessment/review use existing context keys.

303 automated tests pass. All five full browser flows6/6 pass, including incorrect prediction/practice retries, premature pathways and numeric errors. Independent first wrong locks after reload;67% fails/100% retake passes. Edited meiosis numeric8 restores and was corrected to9. Existing Homeostasis30/30 retained; Inheritance4/4 Trilogy and5/5 Separate persist across Foundation/Higher switches. All15 investigation sets and20 teaching cards fit390px without overflow; four films use checked Loop; DNA, strategy and mixed evidence cards hide film. No console errors observed. Technical QA is not specialist review or unrestricted written/freehand evidence. No full physical-device/screen-reader certification claimed.

Files: content-biology-inheritance.js; inherit-models/figures/visuals/films.js; widgets-inherit.js; registry/content/widget integration. Brief biology-inheritance-batch-01-brief.md; requirement CSV biology-inheritance-batch01-requirements.csv; browser evidence inheritance-browser-evidence.json. Next brief five units: separate both-tier nucleotides, separate Higher protein synthesis, separate Higher coding/non-coding variants, shared alleles/vocabulary and shared basic genetic crosses. Ecology follows its saved roadmap. Published21October2026 at13:35:37UTC. Source25f8d5a4f8126c29a48bdfed9bd6e936a4556a1f; deployment appgdep_6ad8bf9766408191b9267092e1ebdc33; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f771004320e081919fd6ee199b81d5fd. Owner-private audience preserved. Live five-lesson inventory, course labels and DNA/genome diagram verified; no console errors. Archive science-app-inheritance01.tar.gz; proof crash-course-inheritance01.png.


## Inheritance batch02 — implemented and published

Five lessons: separate both-tier nucleotides; separate Higher protein synthesis and coding/non-coding variants; shared both-tier alleles and supplied genetic-cross completion.8461 4.6.1.5/.6 and8464 4.6.1.4 verified21October2026.20 grouped teaching/evidence statements mapped in biology-inheritance-batch02-requirements.csv. Complementary pairing restricted to Higher lesson; no RNA structure detail. Cross tasks supply parents/gametes; unsupplied construction remains later Higher. Family-tree interpretation remains later. Single-gene dominance and probability assumptions explicit; colour blindness is not misrepresented as the autosomal toy cross.

20 practice/30 checks added; app220 lessons/788 practice/1423 checks. Biology107 Separate Higher/80 Trilogy Higher. Inheritance10 Separate Higher/8 Foundation/6 Trilogy both tiers. Roadmap now18 Inheritance/25 Ecology units remain planned. Two new process films give58 films/59 lesson bindings. Nucleotide backbone/base interpretation, synthetic triplets and real one-base insertion/deletion groupings, protein template/carrier/ribosome/chain/fold loop, expression comparisons, allele pairs and two student-editable supplied Punnett grids. Invented token code is explicitly not a real codon lookup. Alternative variant outcomes are not presented as inevitable disease.

310 automated tests pass: scope, grid multiplicity/gates, insert/delete lengths/grouping, complementary bases, sequence errors, finite accessible diagrams, process/evidence defaults and hidden/unfinished drafts. All five full browser flows6/6 pass; wrong predictions/practice, premature sequences, blank/wrong grid entries and zero numeric answers rejected. Edited grid cell aa restores on reload then corrected to Aa. All15 investigation layouts fit390px without document overflow. All20 teaching cards show matching process/evidence visibility and Loop checked for films; no console errors. Course/tier switching retains10/10 Separate Higher,8/8 Foundation and6/6 Trilogy. Technical QA is not specialist review, unrestricted written/freehand evidence or full assistive/physical-device testing. Existing IDs/storage schema preserved.

Files: content-biology-genetics.js; gen-models/figures/visuals/films.js; widgets-gen.js; content/widget/registry integration. Brief biology-inheritance-batch-02-brief.md; genetics-browser-evidence.json. Next five: Higher construction of crosses, family trees, inherited disorders, embryo-screening evaluation and chromosomal sex inheritance. Remaining source/evidence reviews for earlier Biology topics still pending. Published21October2026 at14:09:30UTC. Sourceb52acaaf7c721afcd343a8cc81d85d64fab11225; deployment appgdep_6ad8c78c0c288191a6efe9acd8fe0d0b; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_d65e5bcb65008191865bb54400466b9e. Owner-private audience preserved. Live10-lesson inventory and protein inline autoplay/Loop/rendering verified; no console errors. Archive science-app-genetics02.tar.gz; proof crash-course-genetics02.png.


## Inheritance batch03 — implemented and published

Five shared lessons: Higher independent cross construction; both-tier family trees, polydactyly/CF, embryo-screening evaluation and chromosomal sex inheritance.8461 4.6.1.6/.7/.8 and8464 4.6.1.4/.5/.6 verified21October2026.27 grouped assessable/support statements in biology-inheritance-batch03-requirements.csv. HFEA corroborates embryo testing scope, IVF requirement and uncertainty; fictional data and families only. No clinical advice, gene-editing or guaranteed-health claim. Pedigree inference retains AA-or-Aa uncertainty; bounded dominant/recessive and typical XX/XY models explicit.

20 practice/30 checks added; app225 lessons/808 practice/1453 checks. Biology112 Separate Higher/85 Trilogy Higher. Inheritance15 Separate Higher/12 Foundation/11 Trilogy Higher/10 Foundation. Roadmap13 Inheritance/25 Ecology units remain planned. One chromosome-contribution process film added:59 films/60 bindings. The cross builder derives gamete headers from parents, accepts reordered axes with matching cells and rejects repeated/wrong allele headers. Both-tier supplied disorder/sex grids, editable pedigree genotypes, diagram-based independent pedigree questions and screening dataset/perspectives keep evidence directly visible. Only sex-combination process card autoplays/loops; no cosmetic clinical film.

319 automated tests pass. Five full browser flows6/6 pass including wrong predictions/practice, blank/wrong header/cell/pedigree entries and zero calculations rejected. Reversed axes tested through actual construction. Header edit restores on reload. Independent first wrong locks after reload;67% fails and100% retake passes. Previous10 completions retained;15/15 Separate Higher,12/12 Foundation,11/11 Trilogy Higher and10/10 Foundation persist across switches. All15 mobile investigation layouts fit390px without overflow;20 cards have matching process/evidence visibility; native scrub/stage/replay and Loop checked. No console errors observed. Independent pedigree contrast fixed with a dark backing, visually rechecked and regression-tested. Technical QA is not specialist review or unrestricted written/freehand assessment; no full physical-device/screen-reader certification claimed. Stable IDs/storage preserved.

Files: content-biology-family.js; family-models/figures/visuals/films.js; widgets-family.js; content/widget/registry/app question-figure integration. Brief biology-inheritance-batch-03-brief.md; family-browser-evidence.json. Next five: variation, natural selection, selective breeding, genetic-engineering applications and Higher engineering steps. Earlier Biology evidence/source reconciliation remains pending. Published21October2026 at14:50:11UTC. Source49986ec83f48c0836ef23f1ab7fb6c40ebd2cabe; deployment appgdep_6ad8d0fe18808191b46c204e4de63470; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_d96b241b71fc8191b1682ed86129bad6. Owner-private audience preserved. Live15-lesson inventory, new route/tier labels and pedigree rendering verified; console errors empty. Archive science-app-family03.tar.gz; proof crash-course-family03.png.


## Inheritance batch04 — implemented and published

Five lessons: genes/environment/variation, natural selection, selective breeding, genetic-engineering applications and Higher gene-transfer steps. The first four are shared at both tiers; transfer steps are shared Higher only. Official8461 and8464 4.6.2.1–.4 verified21October2026.27 grouped assessable/support statements in biology-inheritance-batch04-requirements.csv. Mutation creates variants without foresight; selection changes inherited population proportions, not individual colour by need. Breeding goals include crops, production animals, gentle dogs and flowers; risks and ethical concerns are distinct from benefits. GM crop/insulin applications and uncertainty remain separate from Higher enzymes/vector/early-transfer sequence.

20 practice/30 checks added; app230 lessons/828 practice/1483 checks. Biology117 Separate Higher/90 Trilogy Higher. Inheritance20 Separate Higher/16 Foundation/16 Trilogy Higher/14 Foundation. Roadmap8 Inheritance/25 Ecology units remain planned. Three new process films give62 films/63 bindings. Selection and repeated breeding stages and gene transfer autoplay/loop; comparative datasets and application/ethical evidence stay direct. The two-habitat cohort activity requires predictions and at least two generations in each habitat. Deterministic fixed20 offspring and2:1 weighted contribution are explicit toy assumptions; no wild-population forecast or real GM yield claim. Fresh numeric cohort diagram matches8 light/12 dark.

327 automated tests pass. All five full browser flows6/6 pass, including wrong comparison/practice answers, premature pathways, incorrect cohort predictions and zero numerical answers rejected. Light habitat, prediction and generation1 counts13/7 restore after reload. All15 phone investigation layouts and20 cards fit390px without document overflow; process/evidence visibility matches intent and Loop is checked. Previous15 completions retained;20/20 Separate Higher,16/16 Foundation,16/16 Trilogy Higher and14/14 Foundation retained across course/tier switches. No console errors observed. Stable IDs/storage preserved. Technical QA is not specialist review or unrestricted written/freehand assessment; full physical-device/screen-reader certification not claimed. Earlier Biology statement/evidence audits remain pending.

Files: content-biology-evolution.js; evo-models/figures/visuals/films.js; widgets-evo.js; content/widget/registry integration. Brief biology-inheritance-batch-04-brief.md; evolution-browser-evidence.json. Next five: separate cloning, Darwin/Lamarck history, Wallace/speciation, Mendel/genetics history, then shared evidence/fossils. Published21October2026 at17:04:14UTC. Source582cc4b103ca01f25c3a470e12202e97cbbcdf38; deployment appgdep_6ad8f07d911881919bc3b1a21bec730d; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_fa74c247d74081918e94ea8f5046d3b6. Owner-private audience preserved. Live20-lesson inventory, Higher labels and inline selection autoplay/Loop rendering verified; console errors empty. Archive science-app-evolution04.tar.gz; proof crash-course-evolution04.png.


## Inheritance batch05 — implemented and published

Five both-tier lessons: separate Biology cloning, Darwin/Lamarck, Wallace/speciation and Mendel history; shared fossil/evolution evidence. Official8461 4.6.2.5 and4.6.3.1–.5 and8464 4.6.3.1–.2 verified21October2026.27 grouped teaching/support requirements mapped in biology-inheritance-batch05-requirements.csv. Four cloning methods, donor nuclear identity, conditional reproductive isolation, historical acceptance/delayed recognition, later chromosome/DNA evidence, three fossil pathways, record limitations, rock order and branching interpretation covered. Resistance mechanism and full classification remain next batch; no clinical protocol or success claim.

20 practice/30 checks added; app235 lessons/848 practice/1513 checks. Biology122 Separate Higher/91 Trilogy Higher. Inheritance25 Separate Higher/21 Foundation/17 Trilogy Higher/15 Foundation. Roadmap3 Inheritance/25 Ecology units remain planned. Five new films across three lesson bindings:67 films/66 bindings overall. Plant tissue culture, embryo splitting and adult nuclear transfer have distinct loops; speciation compresses many generations and states conditional outcomes; mineral replacement is one fossil pathway, not every mode. Historical evidence, ratios, layers and branching diagrams stay directly inspectable. Worked films do not alter saved challenge selections or award completion. Nuclear genome distinguished from mitochondrial/cytoplasmic and environmental identity.

334 automated tests pass. Five full browser flows6/6 pass, including wrong predictions/practice, premature sequences and zero calculations rejected. Edited cloning next-stage choice restores after reload. Automated unfinished separate-cloning draft survives Trilogy fallback. Previous20 completions retained;25/25 Separate Higher,21/21 Foundation,17/17 Trilogy Higher and15/15 Foundation retained across switches. All15 phone investigation layouts and20 cards fit390px without document overflow; six process cards show matching films and checked Loop; direct evidence stays visible elsewhere. No console errors observed. Stable lesson/question/concept IDs and storage preserved. Technical QA is not specialist review, unrestricted written/freehand evidence or full assistive/physical-device certification. Earlier Biology evidence/source reconciliation remains pending.

Files: content-biology-history.js; hist-models/figures/visuals/films.js; widgets-hist.js; content/widget/registry integration. Brief biology-inheritance-batch-05-brief.md; history-browser-evidence.json. Next: extinction, antibiotic resistance and classification; then first Ecology batch. Published21October2026 at20:06:01UTC. Source9b5de816d395a3f0e928e679b63669a02602a491; deployment appgdep_6ad91b1915a48191a2abadb469eb634c; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_9fbce1b6da7081919af3d4dcdb4ef955. Owner-private audience preserved. Live25-lesson inventory, separate/shared labels and inline fossil autoplay/Loop rendering verified; no console errors. Archive science-app-history05.tar.gz; proof crash-course-history05.png.


## Inheritance06 / Ecology01 — implemented and published

Five shared both-tier lessons: extinction, bacterial antibiotic resistance, Linnaean/domain/tree classification, communities/competition/interdependence and abiotic-factor evidence. Official8461 4.6.3.6/.7/4.6.4 and8464 4.6.3.3/.4/4.6.4 plus both4.7.1.1/.2 verified22October2026.27 grouped teaching/support requirements in biology-transition-batch06-requirements.csv. All28 reserved Inheritance lesson units now have implementation; statement/evidence reconciliation and specialist review are still pending. Ecology opens with2 lessons;23 roadmap units remain planned. Physics remains planned.

20 practice/30 checks added; app240 lessons/868 practice/1543 checks. Biology127 Separate Higher/96 Trilogy Higher. Inheritance28 Separate Higher/24 Foundation/20 Trilogy Higher/18 Foundation; Ecology2 at both tiers/routes. Two new process films give69 films/68 bindings. Resistance film separates variant presence, removal of susceptible cells, reproduction and spread. Controlled experiment compares antibiotic absence/presence, requires exposure and division plus both percentage predictions, and preserves actual counts. Community dependency film is distinct from four-condition water/pollinator experiment; students predict outputs and compare isolated changes. Counts/outputs are fictional, not clinical or ecological forecasts. Extinction counts, ranks/tree, temperature chart and moisture data stay direct. NHS corroborates current antibiotic use-as-directed and MRSA treatment wording; no all-bacteria-killed or every-antibiotic-fails guarantee. AQA prescribed-course requirement mapped as adherence to prescriber instructions; no personal treatment decision or dosing advice.

343 automated tests pass, including selection count/proportion invariants, controlled model outcomes, course/topic scope, answer gates, reduced motion, finite labelled figures, hidden/unfinished drafts and a single process-player module identity. Five full browser flows6/6 pass, including wrong comparisons/practice, premature sequence/exposure completion and incorrect predictions/calculations rejected. A duplicate module URL initially created overlapping process players; fixed and regression tested, then one player verified across all15 phone investigation layouts and20 cards. No document overflow at390px. Three process cards autoplay/Loop; controlled evidence stays direct. Antibiotic stage1/prediction100 and dry/pollinator-present/prediction6 restore on reload. Earlier25 completions retained; Inheritance28/28 Separate Higher,24/24 Foundation,20/20 Trilogy Higher,18/18 Foundation; Ecology2/2 every route/tier. Ecology-only2-question assessment retains its locked first wrong answer after reload and correctly scores1/2 (50%) below pass. No console errors observed. Community arrows and labels visually refined/rechecked. Technical QA is not specialist review, unrestricted writing/freehand/physical-fieldwork evidence or full physical-device/screen-reader certification.

Files: content-biology-boundary.js; bound-models/figures/visuals/films.js; widgets-bound.js; topic/content/widget/registry integration. Brief biology-transition-batch-06-brief.md; boundary-browser-evidence.json. Stable IDs and storage retained. Next five Ecology: biotic factors, adaptations, food chains/predator-prey, quadrat sampling and transects/distribution; brief exact statements first. Earlier Biology topic evidence audits remain pending. Published22October2026 at06:38:04UTC. Source3404777e1b8c4e5a551d1e37a6aad5066dad1a08; deployment appgdep_6ad9af3d248881919d17ede2fd3f129d; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f6c0c3df87a4819190b80d5cf3cb05ff. Owner-private audience preserved. Published Ecology2-lesson menu and community inline autoplay/Loop rendering verified; no console errors. Archive science-app-boundary06.tar.gz; proof crash-course-boundary06.png.


## Canonical GitHub repository — 22 October 2026

The project source is now managed from the workspace root on `main`, tracking `origin/main` at https://github.com/adamscourfield/crashcourse . Upload includes application source/assets, tests, curriculum registers/briefs/coverage, build/design instructions and QA records/screenshots. Generated deployment archives, credentials, dependencies and caches are excluded. The existing GitHub initial commit is preserved. The prior app-only Site Git metadata is backed up locally in `.git/sites-source-backup/`; `science-app/` is an ordinary tracked directory, not a submodule. Future source changes use root GitHub `main`; use a separate app-only checkout for the Sites source helper if needed. Existing hosting identity/audience is unchanged; GitHub push is not a deployment. This handover adds no lesson coverage or specialist-review claim. App check result:343 tests passed in the preceding published batch; this upload does not change app code. Next action remains the next five Ecology lessons from the recorded plan.

## Ecology batch02 — implemented, publication and GitHub update pending

Five shared both-tier lessons: biotic factors, structural/behavioural/functional adaptations, food chains/predator-prey, quadrat population estimates and transect distribution/practical preparation. Both8461/8464 4.7.1.3/.4 and4.7.2.1 verified22October2026.27 grouped teaching/support requirements in biology-ecology-batch02-requirements.csv. Current official practical-assessment pages confirm8461 RP9/8464 RP7 and shared AT1/3/4/6, with AT8 separate Biology. AQA8461 handbook version5.2 (2018), field investigation pages53–55, supplies illustrative method context; older Trilogy draft PDF is supplementary, not the controlling current scope. No claim of physical practical completion. Full-topic statement reconciliation/specialist review remain separate.

20 practice/30 checks added; app245 lessons/888 practice/1573 checks. Biology132 Separate Higher/101 Trilogy Higher. Ecology7 shared lessons at both tiers/routes;18 roadmap units remain planned. Five new process films across four lesson bindings give74 films/72 bindings overall. Film/evidence cards explicitly separated. Feeding direction, delayed population response, existing day/night behaviour, coordinate sampling and station measurement loops use original symbolic examples. Graph builder requires labelled axis choices, a fitting scale and all10 paired points. Quadrats require following four generated coordinates, placing the square, counting each target plant, recording all observations and scaling mean density to habitat area; estimated64 differs from full toy field68. Transect activity requires four measured stations, three-count means and a limited association interpretation. These are constrained graph/field models, not unrestricted hand drawing or physical apparatus skills. Selected-quadrat accessible description provides the equivalent plant count.

352 automated tests pass. Five full browser flows6/6 pass, including wrong comparisons/practice, premature chain steps, wrong graph axes/scale/points, wrong coordinates/counts/estimate, wrong station means and sole-cause claims rejected. Graph edit9, quadrat estimate63 with all four recorded observations, and measured4m station mean5 restore after reload and were corrected. Automated unfinished graph/quadrat/station drafts preserve earlier progress and scoped assessment. Previous2 Ecology completions retained;7/7 at all course/tier combinations. All15 phone investigation sets and20 teaching cards fit390px without document overflow, with one process player. Seven process cards autoplay/Loop; data/graph/field tasks stay direct. New Ecology assessment start offers7 questions; earlier run persistence is covered by restore tests. No console errors observed. Technical QA is not specialist review, unrestricted written/freehand evidence, physical fieldwork or full screen-reader/device certification.

Files: content-biology-ecology.js; eco2-models/figures/visuals/films.js; widgets-eco2.js; content/widget/registry/CSS integration. Brief biology-ecology-batch-02-brief.md; ecology-browser-evidence.json. Stable IDs and browser storage retained. Canonical GitHub/main remains at the workspace root; Sites publishing uses a separate app-only checkout. User requirement to commit/push every finished batch is now recorded in AGENTS.md. Next five: carbon cycle, water cycle, separate decomposition, separate decay practical and separate Higher distribution response (confirm exact roadmap scopes before building). Earlier Biology evidence audits remain pending. Publication and GitHub verification pending.
