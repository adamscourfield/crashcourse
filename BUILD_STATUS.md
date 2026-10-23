## Geography A first batch — implemented; publication pending

23October2026. Pearson Edexcel Geography A1GA0 Issue5 September2025 verified from official PDF; Paper1 now1h45 from2026. User chose all-option platform with student pathways. First5 common lessons implemented: rock families; UK geology; geology/relief; physical landscape processes; people changing landscapes.15practice/20independent checks. Native selectable specimen/map/profile/land-use models; process lesson loops by default with pause/manual stages/reduced-motion policy. Natural Earth public-domain outline provides generalised UK location context, not geology boundaries. Geo storage/review/pathways independent; untiered UI; automatic question flow and shared My progress integrated. All24 valid pathway combinations supported; incomplete/duplicate/overselection rejects.

618automated tests passed; five full browser journeys completed5/5. Premature investigation continuation rejected; wrong independent and recall answers recorded; recall first answer survives reload; correct recall clears flag.75%failed/100%retake passed. Path choices restored after reload; Science15/361 and Maths data retained across switches. Five390px model/card views had no horizontal overflow; full process0→1→2→0 cycle observed with Pause/Loop default. Topic assessment deliberately hidden until built. Technical QA is not specialist geographical review or physical/constructed evidence certification.

Planning:152 lettered content references indexed (future statement briefs pending);30 fieldwork rows;43 general-skill/command entries;49 integrated-skill references;82 provisional authoring units across14 groups (5built/77 provisional, not a fixed full-course lesson count). First-batch coverage map and5 briefs exist. Three case-study roles and located-example obligations recorded; named case libraries not yet selected/built. Authentic BGS/OS interpretation, extended/constructed answers and actual school fieldwork evidence remain open. Appendix1 requires at least two fieldwork occasions outside classroom/school grounds; simulations do not replace these. Next: brief coastal weathering/mass movement; sediment processes; waves/geology; storm/climate controls; erosional landforms (1.3a–c/1.4a). Details curriculum/geography-a-plan.md; science-app/geography-browser-evidence.json. Publication/GitHub synchronization follow.

## Maths: Edexcel 1MA1 Geometry and measures — batch 02 (Geometry 6–10); on GitHub `main`, not published

**Batch 02 lessons:**
- Pythagoras (G20, G6; calculator);
- trigonometry and exact values (G20, G21; calculator);
- transformations and column vectors (G7, G8, G24; Higher: negative scale factors, combinations, invariant points);
- constructions and loci (G2, G1);
- bearings, scale drawings and elevation (G15, G20; calculator).

**Totals:** Geometry has 10 lessons; the engine has 136 skills. New engine features: stacked column vectors (`{vec a;b}`), transformation images plotted on the object's own grid, and explained wrong images (`ptTraps`).

**QA:**
- 619 automated tests pass (after merging upstream automatic question navigation, the course-map simplification and the Maths r9 cache) (`tests/maths-geometry2.test.js`: 7 tests; every "describe" option is applied to the drawn vertices).
- All twelve Maths walk-throughs pass: 87, 68, 62, 94, 69, 64, 78, 53, 69, 46, 77 and 72 checks, 839 in total.
- QA found and fixed two generator defects where a distractor was also a correct description: a reflection equal to a rotation for symmetric triangles, and "Rotation 360°".
- Updated for upstream changes to the Maths UI:
  - Answering now auto-advances: Continue is hidden until a question is answered, and correct answers move on by themselves. The walk-throughs now tolerate this, and walk-through 1 checks that Continue stays hidden during the independent check.
  - The course map no longer shows lesson counts or "Planned" labels. Eight walk-throughs now read counts from the sidebar progress and check that unbuilt topics are not listed.
- Brief: `curriculum/briefs/maths-geometry-batch-02.md`.

**Cache:** Geometry 6–10 modules use the current `20261023-maths-r9` versions. **Publishing them needs a global version bump.**

**Not done:**
- Site publication of Geometry 6–10;
- specialist review.

**Next:** Geometry batch 3 — congruence and similarity, circle theorems, solids, plans and elevations, sine and cosine rules, vectors.

## Student mastery dashboard — published and GitHub synced

23October2026. New My progress badge and shared Science/Maths dashboard show completed/remaining/in-progress lessons; four milestones; practice and latest-check accuracy; deduplicated gaps and scheduled recall; expandable topic/lesson progress with next-step/revision/review actions. Uses existing saved data without migration or new storage. Course/tier filters respected; no-data accuracy is unknown rather than0%.612 automated tests and focused browser/reload/mobile journeys passed. Details/metric limits: curriculum/mastery-dashboard.md; science-app/mastery-browser-evidence.json. No new curriculum or specialist certification. Published23October2026 at06:20:23UTC to the existing owner-private Site, audience unchanged: https://gcse-science-atom-lab.newbuddy32.chatgpt.site/. Sites source5b1be07709b95e4d31c71d1d0ae505f5c09acd86; deployment appgdep_6adafc9bfcb48191ba18a597716d8731; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_177e17ff1510819185ec525be284f01e. Archive science-app-mastery01.tar.gz. Live dashboard confirms existing live-origin state:0/310completed,43in progress, practice1/2, no check attempts shown as a dash,1gap and2recall concepts in scoped topic links; no console errors. Local QA counts differ because preview and live have separate browser storage. Proof crash-course-mastery-live.png. Canonical main commit records this release.

## Course map cleanup — published and GitHub synced

23October2026. Removed stale partly-available flags from Science selector/topic navigation and misleading planned-lesson text from Science lesson chooser. One grouped list of links replaces duplicate card/syllabus maps; Maths uses matching links to its four built topics. Internal coverage/evidence statuses unchanged.113 focused tests, syntax/diff checks and desktop/mobile browser navigation passed. Details: curriculum/course-map-cleanup.md. No new curriculum content or specialist review claimed. Published23October2026 at06:05:25UTC to the existing owner-private Site, audience unchanged: https://gcse-science-atom-lab.newbuddy32.chatgpt.site/. Sites source57fc3b360b7af9ef6c93f3adc0248c88d854e893; deployment appgdep_6adaf919d96481919ae21b04f6e8ae5b; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_18941d03d118819181bfa9e966490a3a. Archive science-app-map01.tar.gz. Live selector has clean topic names and map shows25 topic links once. Proof crash-course-map-live.png. Canonical main commit records this publication.

## Automatic question navigation — published and GitHub synced

23October2026. Shared Science/Maths answer flow now advances correct practice after feedback and independent checks after recording; final answers open results. Wrong/invalid answers retain learning feedback. Typed answers support Enter. Redundant pre-answer Next/Skip hidden; optional Stay here pauses transitions. Modal/render/visibility cancellation and context guards prevent stale movement; saved progress/marking untouched.603 automated tests passed; focused browser journeys and phone390×844 verified. No new curriculum coverage or specialist-review claim. Details: curriculum/question-flow.md and science-app/question-flow-browser-evidence.json. Published23October2026 at05:57:55UTC to the existing owner-private Site (audience unchanged): https://gcse-science-atom-lab.newbuddy32.chatgpt.site/. Sites source f217f97b8f9ffdbaec85ac22bbd7ad2ec2263e46; deployment appgdep_6adaf7586918819189c4fa3056997241; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_9f53bc6207848191b7970060aaaea3e7; archive science-app-question-flow01.tar.gz. Live Heart practice verified focused layout and correct-answer auto navigation; screenshot crash-course-question-flow-live.png. Main release commit records this handover. Science practice now hides the generic model panel and retains question-specific figures. Future lessons should inherit this shared flow.

## Science teaching roadmaps complete — published and GitHub synced

23October2026. Finished the remaining63Physics lessons: Atomic Structure10, Forces25, Waves14, Magnetism10 and Space4. Together with existing Energy10/Electricity18/Particle7, Physics has98separate Higher teaching units (84separate Foundation;69Trilogy Higher;65Trilogy Foundation). Science now361lessons:113Chemistry150Biology98Physics;1298practice/2115independent selected checks before filters. Science Separate Higher361/Foundation310; Trilogy Higher259/Foundation237.168films/162bindings overall. Teaching completeness is distinct from assessment/specialist/physical evidence completion.

Merged concurrent Maths through dce103f via9b348cb:50Maths lessons (15Number,22Higher/19Foundation Algebra,8Ratio,5Geometry),126skills. Incoming author's767browser checks are retained as their evidence, not claimed as rerun. Our merged599automated tests passed; focused78Physics/radiation/process checks also passed after the final model adjustments. Maths22Higher/19Foundation Algebra,8Ratio/5Geometry menus, new exponential and Geometry lesson rendering verified; switching back restores the independent Science tier/session. Global cache20261023-physicscomplete01; Maths20261023-maths-r9 ensures latest Algebra assets refresh.

Browser evidence:20distinct full lesson journeys across all five new topics,366phone views covering every new lesson (327card/saved-investigation views,29prerequisite layouts,10final enlarged-diagram/version checks),5wrong-path/reload journeys. Wrong comparisons, numerical answers/reasons, sequence steps, predictions and premature continuation rejected. All conditions plus a bounded interpretation required; universal conclusion rejected even after all settings. Higher cards/tasks/checks hidden at Foundation, restored at Higher with drafts retained. Space hidden in Trilogy; route switch coherently selects eligible Physics Energy without discarding Space progress. No browser console errors. Native form controls, textual/non-colour cues, inline autoplay/Loop and policy-tested reduced-motion pause retained; full assistive-device review remains open.

Model refinements: local wave oscillation distinct from energy travel; correctly oriented magnetic poles/fields; motor force pairs/current commutation; alternator slip rings versus dynamo split ring and distinct output waveforms; labelled ray direction/normal, real/virtual/concave image geometry; decay ledgers use specified real alpha/beta examples rather than arbitrary mode predictions. Expected half-life is not individual decay timing. Static ray/field/vector/spectrum views remain static; process movies loop by default. Direct diagrams enlarged by removing duplicate generic captions. Toy data, independent scales and omitted effects documented. Chemistry prerequisite IDs and existing SHC/Grid overlap retained. Whole-topic route eligibility now guards unsupported topic/lesson combinations.

Records: curriculum/physics-completion-coverage.md; five completion briefs, authoring snapshots, concrete teaching/question requirement CSVs and topic maps; subject/topic/lesson/motion registers; science-app/physics-completion-browser-evidence.json. Independent unrestricted writing/equations/ray/force/graph construction, supervised school practical performance/uncertainty, stronger assessment breadth and specialist review remain open across Science. No simulation is recorded as physical completion. No specialist-review claim is made by these technical tests.

Publication/GitHub: published23October2026 at05:41:39UTC to the existing owner-private Site, audience unchanged: https://gcse-science-atom-lab.newbuddy32.chatgpt.site/. Sites source4d9d22fa8defe7cde98b0c9a0238787973cc152c; deployment appgdep_6adaf38666c48191b87909617317fe1b; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_7959a0040e9081919f5f0502cec158b8. Archive science-app-physics-complete01.tar.gz. Canonical verified release ece32773100536b4076264381722ccf2f0ebc970 pushed to GitHub main; this final documentation commit records publication. Live Science map confirms all eight Physics topics/counts and new Space lesson opens inline with Pause/Loop enabled; no console errors. Proof crash-course-physics-complete-live.png. Latest concurrent Maths Ratio/Geometry included.599combined tests passed after that merge. Next action after publication: specialist and constructed-evidence review, rather than more missing Physics teaching units.

## Maths Algebra05 — incoming author handover, incorporated in the Physics completion release above

Two lessons close the gaps recorded after batch 04:
- **Surds in algebra and further sequences** (A24, A4). Fibonacci-type unknowns are Foundation; Higher adds geometric sequences with a surd ratio, conjugates and rationalising a ± √b denominators.
- **Exponential graphs, areas under curves and strict regions** (A12, A14, A15, A22; Higher only). It covers abˣ in context, trapezium estimates and over/underestimates, gradients of money graphs, and dashed boundaries.

There are 5 new skills (99 in all). Graphs now draw dashed lines and vertical boundaries. Every A1–A25 statement now has teaching and practice; limits are listed per statement in the requirements file.

**QA:**
- 509 automated tests pass on `main` 5ca323f plus this change (`tests/maths-algebra4.test.js` is new).
- Browser walk-throughs: the new flow 8 has 53 checks. The earlier seven were rerun (87, 68, 62, 94, 69, 64 and 78); flow 7's lesson counts now come from the page. 575 checks in total.
- Brief: `curriculum/briefs/maths-algebra-batch-05.md`.

**Cache:** maths modules are at `20261022-maths-r7`. **Publishing needs a global version bump.**

**Not done:**
- Site publication of lessons 21–22;
- specialist review.

**Next:** the Ratio strand (R1–R16).

## Physics Particle batch02 — implemented, published and GitHub updated

Five lessons: internal energy/temperature, latent heat, heating/cooling curves and gas motion/temperature/pressure shared both tiers; separate-Physics gas compression/pV both tiers with mandatory Higher work/pump-warming extension. AQA8463/8464 4/6.3.2.1–.3,4/6.3.3.1,4.3.3.2 and HT4.3.3.3 checked22October2026. Existing Energy heating lesson retains its ID/practical and now cross-maps4/6.3.2.2; Particle lesson prerequisite links back to it, no duplicate SHC lesson. Latent-fusion AT5 is an opportunity, not a new required-practical claim. Full Particle statement/evidence reconciliation remains open; teaching coverage is not specialist/constructed/physical closure.

Science298 lessons:113 Chemistry150 Biology35 Physics. Maths35/94 skills retained after merging c22678f.1109 Science practice/1904 independent checks before filters;21/31 added including1 Higher practice/check. Separate Higher298/Foundation261; Trilogy Higher221/Foundation203. Particle7 separate/6 Trilogy; Electricity18/15 unchanged.125 films/119 bindings. Six explicit process cards across5 lessons autoplay inline/Loop, reduced-motion paused; remaining cards direct. All controlled conditions required: internal4,latent4,curves10,gas4,compression4 including expansion. Higher adds3 work/condition comparisons, revalidated at completion. Physical values for gas are not inferred from a Celsius ratio.

504 combined automated tests passed after merging Maths commitc22678f, including the original Chemistry thermal checks and10 new Particle tests. Five full browser journeys6/6,6/6,6/6,6/6,7/7 Higher compression. Wrong comparisons/numbers/reasons/sequences/predictions/practice and premature actions rejected; universal conclusions cannot complete model evidence.37 teaching/task views fit390px without page overflow or duplicate player;6 process cards default Pause/Loop. Expansion0.008m³/initial200000Pa/wrong prediction9 restores across reload/Foundation/hidden Trilogy/back. Foundation compression4cards/3tasks; Higher5cards/4tasks. Particle assessment6Trilogy/7Separate. Direct cooling diagram, shared Energy SHC prerequisite and4.3.2.2 source reference checked. Maths Number15/Algebra15 and Science restoration verified; no browser console errors. Existing density/state IDs retained; restore tests preserve prior completion. Gradient namespace distinct between direct diagrams and films; fixed marker-count tests pass.

Original toy material c1000J/(kg°C), fusion10000J/kg at20°C, vaporisation20000J/kg at80°C; not water. Curve1kg/1000W, no losses/fixed pressure,120model seconds. Each unequal-duration region gets equal playback time; cursor reports model seconds. Cooling reverses the ideal energy account. Latent energy changes arrangement, not temperature; mcΔθ confined to single-phase changes. Gas trajectories/speeds/wall arrows qualitative, no calibrated pressure/temperature law or collision statistics. Fixed-temperature compression retains mass/size/speed scale and uses absolute pressure/pV; a reservoir removes work energy. Higher rapid approximately insulated compression can warm gas and does not use pV constant. Friction/leaks/real pump dynamics omitted. Physical practical/uncertainty, unrestricted graph/writing, full assistive-device and specialist evidence remain separate.

Files: content-physics-thermal.js; mat2-models/figures/visuals/films.js; widgets-mat2.js; existing Energy heating references extended; content/widget/process/registry/source notes integrated. Global20261022-thermal01r3; incoming Maths-r7 preserved. Brief physics-particle-batch-02.md; map physics-particle-batch02-requirements.csv; browser evidence science-app/thermal-particles-browser-evidence.json. Published22October2026 at19:28:00UTC through the existing owner-private Site; audience unchanged. Sites source679d6cd9b01af6377759cac7eda14f613a58726d; deployment appgdep_6ada63a85afc8191908e5397135e5e2c; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_b47f2d6c1a808191ae2961f4bbbcadd4. Archive science-app-thermal01.tar.gz; proof crash-course-thermal01.png. Live Particle6Trilogy/7Separate inventory, compression route filtering, heating-curve inline Pause/Loop, Maths15Number/20HigherAlgebra (18Foundation) and new functions/iteration menus verified; no console errors. Incoming Maths c22678f included with all35lessons/94skills. Canonical runtime/QA commit0476963 pushed to origin/main; final publication records/proof follow in this handover commit. Next: Atomic Structure/Radiation batch, share Chemistry overlap by stable references after scoping. Full Particle/Electricity/Energy/Biology evidence audits and specialist review remain open.
## Maths Algebra batch04 — prior authoring handover; now published with Physics Particle02

Five Algebra lessons (16–20):
- **Forming and solving equations in context** (A21, A17, A18).
- **Functions** (A7; Higher: notation, inverse and composite).
- **Identities, show that and proof** (A6, A3; Higher: proof).
- **Algebraic fractions and fractional indices** (A4, A18; Higher only).
- **Solving equations by iteration** (A20; Higher only, calculator).

There are 16 new skills (94 in all) and five investigations. Algebra now has 20 lessons: 18 at Foundation and 20 at Higher.

**Engine changes:**
- a single-simplified-fraction answer form (an uncancelled answer, or a sum of fractions, is marked partly right);
- divided monomials such as 1/(9x^4) are now accepted as simplified (this fixes a latent fault);
- subscripts in markup;
- sqrt() and cbrt() in graphs;
- a calculator badge driven by the lesson and item.

**QA:**
- 494 automated tests pass on `main` 71ab5d7 plus this change; `tests/maths-algebra3.test.js` checks every item independently against its printed prompt.
- Browser walk-throughs: the new flow 7 has 78 checks; the earlier six were rerun (87, 68, 62, 94, 69 and 64); 522 in total.
- One defect was found and fixed in browser QA: a visual-name clash with the Number function machine.
- Brief: `curriculum/briefs/maths-algebra-batch-04.md`.

**Cache:** maths modules are at `20261022-maths-r7`. **Published with Physics Particle02 global cache20261022-thermal01r3.**

**Not done:**
- Site publication of lessons16–20: completed above;
- specialist review;
- free-text proofs are not marked;
- algebraic surd expressions, exponential graphs in context, areas under curves, dashed region boundaries, and surd-ratio geometric sequences.

**Next:** Ratio, proportion and rates of change (R1–R16).

## Physics static/particle batch01 — implemented, published and GitHub updated

Five lessons: three separate-Physics both-tier lessons on electron transfer, non-contact forces, radial fields/sparks (4.2.5.1/.2); two shared both-tier lessons on density/practical preparation and state changes/mass conservation (4/6.3.1.1/.2). Official8463/8464 statements checked22October2026. Density preparation covers regular dimensions, irregular displacement and liquid container subtraction, Physics RP5/Trilogy RP17 AT1, not physical certification. Field-pattern recognition/constrained direction choice supports drawing requirements but unrestricted independent field drawings remain evidence gap. Full Electricity statement/evidence reconciliation remains pending; do not mark topic certified/closed merely because all section headings have teaching.

Science293 lessons:113 Chemistry150 Biology30 Physics. Maths30/78 skills preserved.1088 Science practice/1873 independent checks before filters;20/30 added. Separate Higher293/Foundation256; Trilogy Higher217/Foundation199. Electricity18 separate/15 Trilogy; Particle Model2 both routes/tiers.119 films/114 bindings. Five explicit process cards default inline autoplay/Loop, reduced-motion paused; other cards direct. Saved investigations compare four charge cases, four sign pairs, four source/distance fields, six density method/sample cases and ten state-change/mass cases. Qualitative predictions are labelled choices, not invented force values; numeric charge counts/density are illustrative. All cases and bounded interpretation required. Watching cannot finish investigations.

487 combined automated tests passed. Five complete browser journeys6/6; wrong comparisons, numbers/reasons, sequences, predictions, practice and premature actions rejected. Universal conclusions cannot complete models.35 phone teaching/task views at390px fit with one player; exactly5 looping process cards. Negative-source/far/wrong outward-strong prediction restores after reload and hiding in Trilogy/Foundation/back.18 separate/15 Trilogy Electricity and2 Particle assessment inventories verified. Source notes show RP5 versus RP17 by route; no browser console errors. Existing fallback navigation preserved by appending the new topic after Electricity, rather than changing the first available topic. Duplicate diagram/movie gradient IDs discovered visually and fixed with distinct namespaces; corrected particle shading inspected. Charge-frame tests count16 negative markers including in-transit and16 positive markers throughout transfer.

Models use schematic counts, signs, arrow lengths, trajectories and expanded/symbolic timing. Positive-test-charge field convention; no Coulomb law, numerical force/field strength or spark threshold. Spark sequence is conceptual, no high-voltage construction/activity. Density data original, assumptions full immersion/no bubbles/absorption, images not scales. State film keeps12 fixed-size markers in a sealed20g account; changes physical/reversible, open-system evaporation boundaries explicit; no latent-heat/temperature curves yet. Recognition/selected response is not unrestricted writing/drawing, physical apparatus competence, specialist review or full assistive-device certification.

Files: content-physics-matter.js; mat1-models/figures/visuals/films.js; widgets-mat1.js; content/widget/process/registry/source-note integration; no saved-ID migration. Global20261022-matter01r3; Maths-r6 unchanged. Brief physics-static-particles-batch-01.md; statement map physics-static-particles-batch01-requirements.csv; browser evidence science-app/matter-browser-evidence.json. Published22October2026 at18:53:01UTC through existing owner-private Site; audience unchanged. Sites sourcea511f45319a623ae4116eb08e5d4a1e46b4936ff; deployment appgdep_6ada5b7c7cc4819187cc4be878788350; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_bf8f8049f58881918a31113d3fcc12bc. Archive science-app-matter01.tar.gz; proof crash-course-matter01.png. Live separate static inventory/Trilogy hiding, shared Particle state film/Pause/Loop, Maths Number15/Algebra15 and Science restoration verified; no live console errors. Canonical runtime/QA commit8607ace pushed to origin/main; publication records/proof follow in this handover commit. Next Physics batch: internal energy, specific-heat-capacity retrieval/cross-link, latent heat, heating/cooling curves and gas pressure; detailed scope first. Electricity and Energy/Biology full statement/evidence audits and specialist reviews remain open.

## Physics Electricity batch03 — implemented, published and GitHub updated

Five shared lessons: AC/DC sources; mains wiring/safety; electrical power; appliance energy; National Grid. AQA8463/8464 4/6.2.3.1–.2 and4/6.2.4.1–.3 checked22October2026. Grid ideal-transformer VpIp=VsIs is Higher only: required in Trilogy6.2.4.3; separate Physics4.7.3.4 cross-topic scaffold only. Separate transformer construction/turns ratio and static electricity remain later. Nominal UK50Hz/about230V, wire roles/colours, live/open-switch hazards, P=VI/I²R and E=Pt/QV explicitly taught. No live-mains activity or numerical real fault-current/trip-time model.

Science288 lessons:113 Chemistry150 Biology25 Physics; Maths30/78 skills preserved.1068 practice/1843 checks before filters; new21/31, including1 Higher practice/check. Separate Higher288/Foundation251; Trilogy Higher215/Foundation197. Electricity15 shared; Grid Higher card/task/questions filtered and completion requirements revalidated by tier.114 films/109 bindings. Five process cards default inline autoplay/Loop; reduced-motion paused. Models compare AC/DC frequency, nominal conductor pairs, electrical power, timed energy and fixed-power transmission/cable losses; all settings and bounded interpretation required. Toy grid voltages/1Ω line are not real transmission ratings. Input energy is not automatically useful output; AC height normalised, not230V peak.

478 combined automated tests passed after merging Maths graph commit0d9de13. Five complete browser journeys:6/6 each, Grid7/7 Higher. Wrong comparison, numeric value/reason, experiment prediction, practice and premature progression rejected.37 phone views at390px fit with one player;5 process cards default Pause/Loop. Grid200V/2000W/wrong prediction7 restores across reload/TrilogyFoundation/back. Foundation Grid4cards/3tasks versus Higher5cards/4tasks;15-lesson Foundation assessment inventory verified. DC comparison corrected to display DC. Maths graph table/five plotted points accepted; no console errors. Prior Energy/Ecology browser completion counts were not confirmed in final shared-origin state; stable IDs and restore tests pass. Technical checks are not specialist review, unrestricted drawing/writing, real apparatus competence or complete statement/evidence audit. Existing progress IDs retained; incoming Maths-r6 cache preserved; global20261022-electricity03r2. Published22October2026 at18:32:25UTC to the existing owner-private Site; audience unchanged. Sites source8d02227618c32e6f8af2df878584e80651c86bfb; deployment appgdep_6ada56a6a78c8191b43622ec49dbcf4b; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_ae5843fd72688191adec497e2182b877. Archive science-app-electricity03.tar.gz; proof crash-course-electricity03.png. Live Electricity15 inventory and Grid process/Pause/Loop verified; Maths Number15/Algebra15 including five new graph lessons verified, no live console errors. Incoming Maths commit0d9de13 merged,30lessons/78skills retained. Runtime/QA canonical commitd026b98 pushed to origin/main; final publication records/proof follow in this handover commit. Next: separate static charge/fields, followed by Electricity statement/evidence reconciliation. Energy/Biology evidence/specialist audits remain open.

## Maths: Edexcel 1MA1 Algebra batch03 — prior authoring handover; now published with Electricity03

A new graph engine, `dist/maths/graph.js`:
- questions can show a graph;
- an interactive grid lets students plot points by tapping, or with a keyboard form, with snapping;
- plotted points and lines are marked, with line diagnosis (wrong intercept, direction or gradient);
- values read from graphs are accepted within a tolerance;
- set notation is accepted in inequality answers.

Five Algebra lessons (11–15):
- **Coordinates and straight-line graphs** (A8, A9).
- **Gradient, intercept and equations of lines** (A9, A10; Higher: perpendicular).
- **Quadratic, cubic and reciprocal graphs** (A11–A13; Higher: exponential, trigonometric, transformations).
- **Solving with graphs** (graphical A17–A19; Higher: A22 regions).
- **Real-life graphs** (A14; Higher: A15 gradients and areas, A16 circles).

There are 13 new skills (78 in all) and five investigations.

**QA:**
- 470 automated tests pass on `main` 406f618 plus this change. Graph items are checked independently against the printed question and the item's own graph data.
- Browser walk-throughs pass: graphs 64 checks (`tools/maths-browser-flow-6.mjs`, including real taps on the grid), and 87, 68, 62, 94 and 69 rerun, so 444 in total.
- Brief: `curriculum/briefs/maths-algebra-batch-03.md`.

**Cache:** maths modules are at `20261022-maths-r6`. **Published with Electricity03 global cache20261022-electricity03r2.**

**Not done:**
- Site publication of lessons11–15: completed with Electricity03 above;
- specialist review;
- drawn lines and curves are marked as plotted points only;
- exponential graphs in context, areas under curves, financial graphs.

**Next:** functions, algebraic fractions, proof and iteration, then Ratio.
## Physics Electricity batch02 — implemented, published and GitHub updated

Five shared both-tier lessons: series circuits, parallel circuits, resistor-combinations practical preparation, thermistors/thermostats and LDRs/automatic lights. AQA8463/8464 4/6.2.2, .2.1.3 and .2.1.4 checked22October2026. Series sameI/sharedpd/summedR/equivalentR calculations; parallel samepd across closed branches/summedI/lowerR/adding or opening branches. No parallel equivalent-resistance formula or numerical equivalent-resistance assessment required. Combinations plus previous wire lesson now cover both planned RP3 Physics/RP15 Trilogy teaching-preparation parts, AT1/6/7; physical competence remains separate. NTC thermistorR falls withT; LDRR falls with illumination, with AT6 measurement/graph opportunities and thermostat/dark-light applications.28 grouped teaching/support rows; no complete Electricity statement/evidence audit or specialist certification claimed.

Science283 lessons:113 Chemistry,150 Biology,20 Physics. Maths25 (Number15/Algebra10,65 skills) preserved.1047 Science practice/1812 checks before filters;20 practice/30 checks added. Separate Higher283/Foundation246; Trilogy Higher210/Foundation192. Electricity10 allroutes/tiers; Energy10 unchanged.109 films/104 bindings overall. Five process cards default inline autoplay/Loop, reduced-motion paused. Direct experiments preserve selected controls: series4 conditions, parallel6 including branch2 open, combinations4, each sensor4. All conditions, correct predictions and bounded interpretation required. Tracers show conventional direction, not literal charge counts/electron speed. Ideal source and constant-temperature resistors; the open branch has a visible gap and zero current without assigning sourcepd across its isolated resistor.

465 automated tests passed. Five full browser journeys scored6/6; wrong comparison/numeric/reason/prediction/practice and premature paths rejected; universal interpretations cannot complete evidence. All35 teaching/task views fit390px with no page overflow or duplicate player; exactly5 visible process cards with Loop/Pause defaults. Bright-index100/4V/wrong prediction3 restored across reload and Trilogy/Foundation/back. Prior5 Electricity,10 Energy and25 Ecology completions retained; both routes/tiers show10 Electricity lessons; assessment offers10 eligible questions. RP15/RP3 notes verified by route. Maths15 Number/10 Algebra menus preserved. Sensor kind-suffix routing error caught by automated/browser tests and fixed before publication; supported-state tests and both sensor journeys now pass; no subsequent console errors. Updated earlier symbol/wire/IV cross-links now point to available combinations/sensor lessons; wire cross-link and final sensor graph axis labels checked in browser.

Sensor curves/thresholds are original bounded examples, not required equations or real device calibrations. Imposed20→60→20°C or light-index0→100→0 is not feedback generated by the heater/lamp. A separate controller/power-stage block chooses output ON below40°C or light-index50; increasing sensor current does not force the output to be on. No hysteresis/lag/self-heating simulation or potential-divider/transistor theory required. Sensor graph axes/units explicit. Technical QA is not specialist review, unrestricted drawing/graphs/writing, physical measuring/uncertainty evidence or full device/accessibility certification.

Files: content-physics-circuits.js; el2-models/figures/visuals/films.js; widgets-el2.js; content/widget/registry/process/source-note integration; existing el1 cross-links refreshed with stable IDs/options. Cache20261022-electricity02r5; Maths-r5 unchanged. Brief physics-electricity-batch-02-brief.md; mapping physics-electricity-batch02-requirements.csv; browser evidence science-app/circuits-browser-evidence.json. Published22October2026 at13:44:37UTC through the existing owner-private Site. Final Sites sourcea414bbc368071bfca75e30435f756ebe8f3fbc33; deployment appgdep_6ada13351b0481918697ed4aa61e50c9; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f3d2b3a8370881918539089e0162f756. Archive science-app-electricity02.tar.gz; proof crash-course-electricity02.png. Live10-lesson Electricity inventory, new parallel inline process/Pause/Loop and Maths Algebra10 availability verified, no live console errors. Accessible descriptions explicitly track open/closed branch state and separate resistor names from their values; both states exercised live. Owner-private audience unchanged. Canonical final source/QA commit406f618 pushed to origin/main; final publication records/proof follow in this handover commit. All25 Maths lessons and existing Science progress retained. Next five: ac/dc sources, mains wiring/safety, electrical power, electrical energy/appliances and National Grid; brief exact requirements first. Separate static electricity follows later. Energy/Biology statement/evidence audits and specialist reviews remain open; latest user priority is new lessons.

## Physics Electricity batch01 — implemented, published and GitHub updated

Five shared both-tier lessons: standard circuit symbols/measuring circuits; charge/current Q=It; potential difference/current/resistance V=IR; wire resistance/fair testing; resistor/filament/diode I–V. AQA8463 4.2.1.1–.4 and8464 6.2.1.1–.4 checked22October2026, including the official symbol image.14 symbol entries include fuse and open/closed switches. Sensor symbols introduced; thermistor/LDR behaviour, applications and investigations remain planned. Wire preparation is only part of Physics RP3/Trilogy RP15 (AT1/6/7): series/parallel combinations remain. I–V preparation addresses all3 required elements for Physics RP4/Trilogy RP16 (AT6/7).30 grouped teaching/support mapping rows; no full Electricity statement/evidence closure claimed. Energy statement/evidence reconciliation remains pending: latest user priority is new lessons.

Science278 lessons:113 Chemistry,150 Biology,15 Physics; Maths25 (15 Number/10 Algebra),65 generated skills in separate engine.1027 Science practice/1782 independent checks before filters. Separate Higher278/Foundation241; Trilogy Higher205/Foundation187. Electricity5 allroutes/tiers, Energy remains10. Adds24 practice/35 checks.104 films/99 bindings. Four inline process cards autoplay/Loop with reduced-motion paused; symbols remain direct structure inspection. Models: source/switch/component builder with correct meter-placement gate; charge past a reference section; current responding to V/R; controlled wire geometry and supplied V/I;9 resistor/lamp/diode voltage snapshots including negative. All settings and bounded interpretation required. No valid current is claimed for incorrect measuring placement. Markers show conventional current externally positive→negative, not electron speed, energy packets or charge consumption.

456 combined automated tests passed after merging concurrent Maths Algebra02 commitf340bd2 (447 baseline plus9 Electricity tests). Five full browser journeys scored9/9,6/6,6/6,6/6,8/8; wrong comparisons/numbers/reasons/predictions/practice and premature actions rejected. Wrong meter placement cannot record. Final independent numeric values differ from lab examples and were separately rechecked in browser:8C,24Ω,4Ω,15Ω. All38 teaching/investigation views fit390px without document overflow/duplicate player; exactly4 visible looping process cards. Diode/−2V/wrong prediction1 restores across reload/Trilogy/Foundation/back. Prior10 Energy and25 Ecology completions retained; allroutes/tiers show5 Electricity lessons and assessment offers5 eligible questions. Source notes RP3/4 versus RP15/16 verified. Maths Number15/Algebra10 preserved; simultaneous-equations elimination responds and Science restores, no console errors. Original380 Maths browser checks are separate prior evidence, not rerun in this Science integration check.

Files: content-physics-electricity.js; el1-models/figures/visuals/films.js; widgets-el1.js; content/widget/registry/process/source-note and independent symbol-figure integration. Cache20261022-electricity01r3; merged Maths cachemaths-r5. Stable IDs/assessment context/progress preserved. Original wire coefficient and I–V laws are illustrative, not required equations, measured material properties or device ratings. Reverse diode zero current is idealisation; no numerical V/0 resistance. Technical QA does not establish specialist review, unrestricted freehand diagrams/graphs/writing, physical apparatus competence or full accessibility/device certification.

Brief physics-electricity-batch-01-brief.md; mapping physics-electricity-batch01-requirements.csv; coverage physics-electricity-topic-coverage.md; browser evidence science-app/electricity-browser-evidence.json. Published22October2026 at13:13:28UTC through the existing owner-private Site. Sites source3184da35cfe4125bd70ea63903753e120db8bc61; deployment appgdep_6ada0bd3efd48191a72fe2f21c457483; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_42c205e29f9c8191befe3687107efb57. Archive science-app-electricity01.tar.gz; proof crash-course-electricity01.png. Live Electricity5-lesson inventory, new V=IR inline process/Pause/Loop and Maths Algebra10 availability verified with no live console errors. Owner-private audience preserved. Canonical combined coverage/QA/source commita68934a pushed to origin/main; final publication records/proof follow in this handover commit. Concurrent Maths commitf340bd2 and all25 Maths lessons are included; original380-browser-check and specialist/graphical-marking limits remain separate. Next five proposed: series circuits, parallel circuits, resistor-combination practical completion, thermistors, LDRs; brief exact requirements first. Energy/Biology statement/evidence audits and specialist review remain open. New-topic availability is partial, and later Electricity sections are not shown as built.

## Maths Algebra batch02 — prior handover, now published with Electricity01

The four new Algebra lessons were included in the combined publication above. The following records the original Maths authoring and QA; publication is now complete.

Four Algebra lessons (7–10):
- **Sequences and the nth term** (A23–A25; Higher: quadratic nth term).
- **Solving inequalities** (A22; Higher: quadratic inequalities).
- **Solving quadratic equations** (A18 and the A11 turning point; Higher: rearrangement, ax² + bx + c, completing the square, the formula to 2 d.p.).
- **Simultaneous equations** (A19, A21; Higher: a line with a parabola or a circle).

There are 13 new skills (65 in all) and four investigations: matchstick nth term, number line and sign reversal, roots on a graph and the zero rule, and elimination with the intersection point.

New answer kinds in `dist/maths/sets.js`:
- **solution boxes:** order-free; one root of two, swapped x/y and the 2 d.p. format are each diagnosed;
- **typed inequalities:** equivalent forms accepted; a wrong < or ≤ gets partial credit; an equation is refused;
- **integer lists:** missing and extra values are named;
- **completed-square form.**

**Merged with `main`:** main had added a guard against stale Algebra redraws. I kept it, applied it to the new investigations, and extended its test.

**QA:**
- 447 automated tests pass after rebasing onto `main` 24dc0cd. The new checks use independent evaluation, brute force and bisection.
- Browser walk-throughs pass: batch 02 69 checks (`tools/maths-browser-flow-5.mjs`), and 87, 68, 62 and 94 rerun, so 380 in total.
- Brief: `curriculum/briefs/maths-algebra-batch-02.md`.
- Mapping: `curriculum/maths-algebra-requirements.csv`.

**Cache:** maths modules are at `20261022-maths-r5`. **Original publishing note, now resolved: global version bump was required.**

**Not done:**
- Site publication of lessons7–10: completed with Electricity01;
- specialist review;
- graphical solutions are not marked;
- Higher A22 two-variable regions and set notation;
- surd geometric sequences.

**Next:** a graph input, then graphs (A8–A16).

## Physics Energy batch02 — implemented, published and GitHub updated

Five lessons: power; conservation/dissipation; thermal conduction/insulation; efficiency; resources/reliability/impacts. Shared8463/8464 both tiers under existing Energy topic. Exact refs4/6.1.1.4, .1.2.1, .1.2.2 and .1.3 checked22October2026. Efficiency-improvement card,1 practice/2 checks and fourth investigation are Higher only, enforced again by completion requirements. Insulation RP2 AT1/5 preparation is separate Physics only; Trilogy shares conduction teaching and rod AT1/5 opportunity, not RP2. Resources covers all named families, uses, reliability, environmental issues, trends and social/political/economic/ethical constraints; no generator-mechanism requirement.29 grouped teaching/support mapping rows; full Energy statement/evidence audit remains outstanding.

Science273 lessons:113 Chemistry,150 Biology,10 Physics; Maths21 (15 Number,6 Algebra) remains separate.1003 practice/1747 independent checks before filters. Separate Higher273/Foundation236; Trilogy Higher200/Foundation182. Energy10 both routes/tiers. Batch adds23 practice/36 checks at Higher,22/34 at Foundation.100 films/95 bindings total. Five worked process cards inline autoplay/Loop, reduced-motion paused;23 new teaching cards and16 investigation views at Higher. Models: equal-work/different-time lift, conserved energy split, material/thickness cooling, proportional energy-flow split, wind-capacity/weather plus backup balance. Controlled comparisons require all four settings and limited interpretation. Virtual readings, trend data and resource snapshots are original, not measured properties, current national data or forecasts. Cooling law is a toy assumption, not a required equation; supplied final readings support temperature-drop prediction.

441 automated tests passed, including9 new Physics model/scope tests and1 inactive-Algebra-model regression check. Five full browser journeys score6/6,6/6,6/6,8/8,10/10. Premature actions, wrong comparisons/numeric values/reasons/predictions and wrong-practice paths rejected; universal claims cannot finish model evidence. All39 Higher mobile views fit390px without document overflow or duplicate player; exactly five visible process cards with Loop/Pause defaults. Foundation efficiency4 cards/3 tasks vs Higher5/4; independent Higher completion revalidation tested. Saved conductivity2/thickness1/wrong prediction32 restores across reload/Trilogy/back. Prior5 Physics and25 Ecology completions retained; both routes/tiers show10 eligible Energy lessons. New-start assessment offers10 eligible questions. Source notes route-tested after repairing an openModal naming error found during QA.

Merged concurrent Maths Algebra commit5109308 before implementation. Number15/Algebra6 menus and expression machine verified. A delayed Algebra redraw could write after changing subject/stage; added generation/connected-panel guards to all six Algebra models and a unit check. Re-tested leaving immediately after both700ms success callbacks: Science remains intact, Discover remains Writing algebra, fresh preview console has no errors. Cache20261022-physics02r1 and maths-r4p1 ensure repaired modules load. Original Maths311-browser-check evidence remains distinct from this integration smoke test. Technical QA is not specialist review, unrestricted writing/graphing, physical practical evidence or full accessibility/device certification.

Files: content-physics-transfer.js; phy2-models/figures/visuals/films.js; widgets-phy2.js; content/widget/registry/process/source-note integration; Maths studio/model callback guards. Evidence physics-transfer-browser-evidence.json; brief physics-energy-batch-02-brief.md; physics-energy-batch02-requirements.csv. Published22October2026 at12:44:12UTC through the existing owner-private Site. Sites source7242644f03a70a21bcc01e6fc30413296fe51dfe; deployment appgdep_6ada050c28448191b85468c5d69961c7; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f25ddf6056e081918175757691af3ab2. Archive science-app-physics02.tar.gz; proof crash-course-physics02.png. Live10-lesson Energy inventory, new power inline process/Pause/Loop and Maths Algebra6-lesson availability verified, with no live console errors. Owner-private audience preserved. Canonical combined source/tests/coverage/QA commit8da4a65 pushed to origin/main; final publication records/proof follow in the handover commit. Concurrent Maths Algebra commit5109308 and all21 Maths lessons included; original marking/specialist limits remain unchanged. Next: reconcile Energy assessable statements/skills and independent evidence across both batches, then brief first Electricity lessons. Earlier Biology evidence audits and specialist reviews remain open. Ten Energy lessons are an authoring inventory, not proof of full qualification/evidence closure.

## Maths Algebra batch01 — prior handover, now published with Physics Energy02

The six Algebra lessons were included in the combined publication above. The following records the original Maths QA; its publication task is now complete.

**Engine first.** `dist/maths/algebra.js` marks typed algebra by exact equivalence, then by the form the question asks for:
- simplified, expanded, fully factorised, A1 notation, or any equivalent form;
- unreadable or ambiguous input (such as "x2" or "1/2x") gets a hint and records nothing;
- a live preview shows how the typed answer reads.

**Six Algebra lessons:**
- notation, substitution and vocabulary (A1–A3, A6 equation vs identity);
- simplifying and index laws (A4);
- single brackets (A4);
- double brackets and factorising quadratics (A4; Higher: three brackets, ax² + bx + c);
- linear equations, including forming them (A17, A21 in part);
- using and rearranging formulae (A5, A2).

There are 14 new skills, making 52 maths skills in all, and six investigations: expression machine, like-term sorter, area model, grid and factor pairs, balance, and reverse machine.

The studio is now topic-aware. The course map switches between Number and Algebra, and each topic has its own lesson list, progress, review, assessment and breadcrumb.

**QA:**
- 431 automated tests pass on `main` 9f4373c plus this change, including 11 Algebra tests. Prompts and answers are checked with an evaluator independent of the marking parser.
- Browser walk-throughs pass: Algebra 94 checks (`tools/maths-browser-flow-4.mjs`), and Number 87, 68 and 62 rerun, so 311 checks in total.
- One earlier run of the pilot harness crashed before reporting; this was not reproduced in seven reruns.
- Mapping: `curriculum/maths-algebra-requirements.csv` (all of A1–A25).
- Brief: `curriculum/briefs/maths-algebra-batch-01.md`.
- Evidence: `science-app/maths-browser-evidence-4.json`.

**Cache:** maths modules are at `20261022-maths-r4`. **Original publishing note (now resolved by Physics Energy02): global `?v=` bump required**, because `index.html` still loads `app.js?v=20261022-physics01`.

**Not done:**
- Site publication: completed with Physics Energy02;
- teacher or specialist review;
- algebraic fractions, function notation, graphs, A18–A25;
- show-that arguments and proofs are not marked.

**Next:** Adam reviews; publish; then quadratic and simultaneous equations, inequalities and sequences.

## Physics Energy batch01 — implemented, published and GitHub updated

First five shared both-tier Physics lessons: Energy stores/systems/transfers; kinetic energy; gravitational potential energy; elastic potential energy; specific heat capacity/virtual practical. AQA8463 4.1.1.1–.3 and8464 6.1.1.1–.3 checked22October2026. Five required energy situations are explicitly taught. The virtual SHC preparation identifies Physics RP1 / Trilogy RP14 and AT1/5; it does not certify practical competence.25 grouped teaching/support mapping rows record the batch; this is not a full Energy statement audit. Power, full conservation/dissipation, conduction/insulation, efficiency and resources remain planned.

Science268 lessons:113 Chemistry,150 Biology,5 Physics; Maths15 remains separate.980 practice/1711 independent checks before filters. Separate Higher268/Foundation231; Trilogy Higher195/Foundation177. Physics Energy5 all routes/tiers.95 process films/90 bindings overall. Five process cards default inline autoplay/Loop, reduced-motion paused by policy; comparison experiments remain direct. Cart speed/mass, lifting height/mass, supported spring extension/constant and block mass/loss change labelled equation-based outcomes. The stores activity compares all five required situations on a common400J closed-account scale. All observations and bounded interpretation are required; wrong predictions do not count.

420 automated tests passed. Five full browser journeys scored6/6; premature actions, wrong comparisons/numeric values/reasons/predictions rejected. Universal conclusions cannot finish model evidence. Kinetic mass4/speed6/wrong prediction71 restored after reload and Trilogy/Foundation/back; previous25 Ecology completions retained. All20 teaching cards and15 investigation views fit390px without document overflow or duplicate player. Exactly five teaching cards expose the process player; Loop/Pause defaults verified, remaining cards direct. Topic assessment offers5 eligible questions. RP1/RP14 source notes verified by route. Maths15 menu retained; no console errors. Technical QA is not specialist content review, full assistive-technology certification, independent extended writing/graph evidence or physical practical evidence.

Stable IDs are science.physics.energy.*; Chemistry Energy and Biology Bioenergetics assessment/progress keys remain distinct. Cache20261022-physics01 preserves Maths r3. Evidence science-app/physics-energy-browser-evidence.json; brief curriculum/briefs/physics-energy-batch-01-brief.md; coverage curriculum/physics-energy-topic-coverage.md and physics-energy-batch01-requirements.csv. Published22October2026 at11:59:48UTC through the existing owner-private Site. Sites source949ae2c8395e1a0781ccfd02b48bb31efce955c9; deployment appgdep_6ad9faa50fe4819198e121d70cf8d5e4; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_3877319c7b0c81918ac54f37852d0c17. Archive science-app-physics01.tar.gz; proof crash-course-physics01.png. Live Physics5-lesson inventory and inline launch process/Pause/Loop verified with no browser console errors. Canonical source/tests/coverage/QA commitfe0b70e pushed to origin/main; final publication records/proof follow in this handover commit. Audience unchanged. Next batch: power, conservation/dissipation, conduction/insulation, efficiency and resources, with exact statements briefed first. Biology statement/evidence reconciliation and specialist review remain open and are not hidden by roadmap completion.

## Ecology batch06 — implemented, published and GitHub source updated

Final three section-scoped roadmap lessons: farming efficiency/ethical trade-offs, sustainable fisheries, and mycoprotein/insulin/GM crops. All separate Biology both tiers; AQA8461 4.7.5.2/.3/.4 checked22October2026.15 grouped teaching/support requirements in biology-ecology-batch06-requirements.csv. Covers movement/temperature energy transfer and high-protein feed with welfare/resource evaluation; declining stocks, breeding populations, local disappearance, net size and quotas; large-scale culture, Fusarium fungus on glucose syrup aerobically, biomass harvest/purification, protein-rich vegetarian food, GM bacterium/purified human insulin and trait-specific GM crop/nutritional benefits including golden rice. Farming WS1.3/1.4 and fisheries WS1.4 are explicit source links; biotechnology evaluation/numerical activities are authoring opportunities.

Science263 lessons/960 practice/1681 checks; Biology150 Separate Higher/109 Trilogy Higher, with15 Maths Number lessons in their separate generated-practice engine. Ecology25 Separate Higher/24 Separate Foundation/15 Trilogy both tiers. All25 roadmap units implemented; no claim of full statement/evidence closure or specialist certification.12 practice/18 independent checks added. Four process films across three bindings give90 films/85 bindings overall. Five process cards inline autoplay/Loop, reduced-motion policy paused; controlled data/evaluation stays direct. Models require all four conditions plus bounded interpretation: equal-intake farm energy allocation, adult-catch/juvenile-bycatch/recruit account, and conceptual glucose/oxygen aerobic product output. Figures, rates, counts and yields are original fictional teaching assumptions, not prescriptions or forecasts. Zero no-oxygen output is not a universal fungal-death claim; fish bycatch outside the adult target is explicit toy accounting, not a legal quota rule.

407 tests passed before integrating concurrent Maths batch03;411 combined tests now pass, with15 Maths lessons preserved. Three full browser journeys6/6 passed; wrong comparisons/numerics/reasons/predictions and premature actions rejected. Universal claims could not complete the model; all four settings and limited conclusion required. Fisheries adult60/large-mesh/prediction39 restored after reload and Trilogy exclusion/back to Separate, then corrected. Previous22 Ecology completions retained; filters show15/15 Trilogy,24/24 Separate Foundation and25/25 Separate Higher. All12 cards/9 investigation sets fit390px without document overflow or duplicate process player; five process cards show Loop checked. Topic assessment start offers25 eligible Separate Higher questions. Maths studio opens and Science restores. Correct source/model notes checked, no console errors. Technical QA is not specialist review, independent extended argument writing or full assistive-technology/device certification.

Files: content-biology-production.js; eco6-models/figures/visuals/films.js; widgets-eco6.js; content/widget/registry/process/source-note integration. Cache20261022-eco6; Maths-specific module/style version updated to the concurrent r3 source. Stable IDs/progress retained. Brief biology-ecology-batch-06-brief.md; production-browser-evidence.json. Next: reconcile every Ecology assessable statement/skill and independent evidence against all six batch mappings, then earlier Biology evidence audits. Physics remains planned. The25-unit roadmap is an authoring sequence, not proof that every assessable statement has sufficient independent evidence. Published22October2026 at09:16:39UTC. Sites source8eaa065ff83a08b15bed0385203ca60b6da57d81; deployment appgdep_6ad9d465bc94819196cdf560789fcbcb; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_5329c3382fa0819197ff98e65ecbe36a. Owner-private audience preserved. Live25-lesson Separate Higher inventory and new mycoprotein inline process/Loop verified with one player and no console errors; Maths15-lesson menu verified. Archive science-app-ecology06.tar.gz; proof crash-course-ecology06.png. Canonical combined source/tests/coverage/QA commitc4ba1bd3a005ea8004ecc4cab75ab15187a15a7a pushed to origin/main; final publication records/proof follow in the handover commit. Concurrent Maths batch03 commit14803ca preserved and lessons11–15 included in this release; its original403-test/217-browser-check evidence and specialist/marking limits remain distinct from our411 combined tests and integration smoke checks.

## Maths Number batch03 — prior handover, now published with Ecology06

Lessons11–15 were published in the combined release recorded above. The following describes the original Maths handover and its separate QA.

Five lessons were added to the ten published with Ecology05:
- listing and the product rule (N5; product rule Higher-only);
- units and measures (N13);
- speed, density and pressure (N13);
- exact answers with π and surds (N8; the surd skills are Higher-only and hidden at Foundation);
- fractions in ratios, reciprocals and inequality symbols (N11, N3, N1).

Fraction → recurring decimal (N10 Higher) is now assessed.

Engine additions:
- an `exact` answer kind (a + b√r, bπ). It marks unsimplified surds, unrationalised denominators and decimal approximations as right value, wrong form;
- a `ratio` answer kind (simplest form; reversed order diagnosed);
- whole-skill `higherOnly` flags;
- checks topped up to 10 items when Higher-only skills are hidden;
- a 20-question topic assessment drawn across all lessons.

The engine now has 38 skills.

QA:
- 403 automated tests pass after rebasing onto `main` 1231c2e (380 science + 23 maths).
- Browser walk-throughs: batch 03 passes 62 checks (`tools/maths-browser-flow-3.mjs`). The pilot (87) and batch 02 (68) flows were rerun and pass, so 217 checks pass in total.
- Evidence: `science-app/maths-browser-evidence-3.json`.

Remaining gaps are listed per statement in `curriculum/maths-number-requirements.csv`: no conjugate surd denominators; written lists and methods are not marked; metric units only.

Brief: `curriculum/briefs/maths-number-batch-03.md`.

**Cache:** `app.js` now imports `maths/studio.js?v=20261022-maths-r3`, but `index.html` still loads `app.js?v=20261022-eco5`. **Publishing lessons 11–15 requires a global version bump.**

Not done: Site publication of lessons 11–15; teacher or specialist review. Next steps: Adam reviews the lessons; publish them; build expression-equivalence marking before Algebra.

## Ecology batch05 — implemented, published and GitHub source updated

Five lessons: maintaining biodiversity shared both tiers, trophic/decomposer nutrition, biomass pyramids, biomass transfer and food security separate Biology both tiers. AQA8461/8464 4.7.3.6 plus separate4.7.4.1/.2/.3 and4.7.5.1 checked22October2026.25 grouped teaching/support requirements mapped in biology-ecology-batch05-requirements.csv. Required examples: breeding endangered species, rare-habitat protection/regeneration, margins/hedgerows in monoculture, reduced deforestation/CO₂ and recycling; numbered feeding roles/apex and extracellular enzymes→soluble products→diffusion; accurate common-scale pyramids; about1% light energy versus about10% biomass, loss routes including faeces/respiration CO₂/water/urinary urea/water, supplied efficiency; demand/diets/transport/pests/pathogens/rain/input costs/conflict and sustainable food access. Explicit skill links: conservation WS1.4/1.5, pyramids WS1.2/MS2c, biomass MS1c, food security WS1.4; trophic model reading is an authoring opportunity.

Science260 lessons/948 practice/1663 independent checks, plus the concurrent10 Maths Number lessons with generated practice in their separate engine; Biology147 Separate Higher/109 Trilogy Higher. Ecology22 Separate Higher/21 Separate Foundation/15 Trilogy both tiers;3 separate roadmap units remain.20 practice/30 checks added. Three films across two bindings give86 films/82 bindings overall. Four process cards default inline autoplay/Loop; reduced-motion policy paused. Direct custom models: constrained conservation budget/targets, proportional pyramid builder with exact four masses/common scale/base, original organic-material allocation, six population/food-access scenarios with prediction/reveal and limited interpretation. Policy outcomes, costs, masses and food units are original fictional examples.100-unit allocation tracks ingested organic material, not total gas/product masses after oxygen enters; no claim of complete ecosystem mass/energy accounting. Pyramid entry is constrained construction, not unrestricted independent freehand evidence. Current shared Trilogy Ecology roadmap is implemented, but statement reconciliation/specialist/independent evidence closure is not claimed.

380 Science tests passed before integration;399 combined tests pass after merging the concurrent10-lesson Maths update from GitHub. Five full browser journeys6/6 passed with wrong comparisons/numerics/reasons, premature recording and skipped digestion stages rejected, plus wrong-practice correction. Overbudget and universal-policy claims, wrong pyramid base/scale/value,90-unit allocation/destruction claim and wrong supply deficits were rejected. Pyramid150 (instead of160) survives reload and Trilogy exclusion/back to Separate, then corrected. Conflict food prediction70 restored, then corrected to80. Previous17 Ecology completions retained; filters reach15/15 Trilogy,21/21 Separate Foundation,22/22 Separate Higher. All20 teaching cards/15 investigation sets fit390px without document overflow or duplicate player; four process cards show Loop checked. New-start assessment offers22 Separate Higher eligible questions. Model notes read and no console errors observed. Automated restore preserves prior completion and scoped assessment. Technical QA is not specialist review, unrestricted independent writing/drawing or full device/assistive-technology certification.

Files: content-biology-feeding.js; eco5-models/figures/visuals/films.js; widgets-eco5.js; content/widget/registry/process/source-note integration. Cache20261022-eco5; stable IDs/progress retained. Brief biology-ecology-batch-05-brief.md; feeding-browser-evidence.json. Next three: farming techniques, sustainable fisheries and biotechnology, then final Ecology statement/evidence reconciliation; earlier Biology audits remain outstanding. Published22October2026 at08:56:18UTC. Sites source2fc5da5392336b18adf235c2270cf70e438b2f9e; deployment appgdep_6ad9cfa2332c8191b4da49ad85dc4d20; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_b282d8ce3d048191be59913c5e0b52c5. Owner-private audience preserved. Live22-lesson Separate Higher inventory, new proportional pyramid and available Maths studio verified with no console errors. Archive science-app-ecology05.tar.gz; proof crash-course-ecology05.png. Canonical combined source/tests/coverage/QA commit3ac4cac6f185eb084f71e33e4fc07c1b03af2aba pushed to origin/main; final records/proof follow in the handover commit. Concurrent Maths commit2a1a2c0 preserved and its10 lessons published in this combined release; Maths specialist/marking limitations remain unchanged.

## Maths: Edexcel 1MA1 Number — prior handover, now published with Ecology05

Publication completed with the combined Ecology05 release recorded above. The following QA and next-step details describe the original Maths handover.

User priority (22 October 2026): Edexcel GCSE Mathematics, with far more practice than science lessons. Maths is now an available subject (Foundation and Higher; no routes). It has its own engine in `science-app/dist/maths/` and its own store (`crash-course-maths-v1`); science storage and code paths are untouched apart from a small hand-off in `app.js`.

Engine: 26 seeded skill generators with worked solutions and misconception traps; exact marking for integers, fractions, decimals (required d.p./s.f.), prime products, standard form, single powers and error intervals, distinguishing wrong values from right values in the wrong form; level ladders (2 correct up, 2 wrong down, 4 of the last 5 at the top level to secure); an interleaved mixed round; fresh 10-item independent checks each run; spaced interleaved review; topic assessment of every skill.

Ten Number lessons in teaching order: negatives (N1, N2); order of operations and inverses (N3); primes, HCF and LCM (N4); adding/subtracting fractions (N2, N8); multiplying/dividing fractions (N2, N8, N12); decimals and written methods (N2); fractions, decimals and percentages (N1, N10, N12); rounding, estimation and error intervals (N14–N16); powers, roots and indices (N6, N7); standard form (N9). Higher-only content verified against the Foundation/Higher statement lists: estimating roots (N6), fractional indices (N7), recurring decimals (N10), bounds (N16); these sit only in final Higher levels. N5, N8 surds/π, N11 and N13 remain planned. Mapping: `curriculum/maths-number-requirements.csv`.

QA: 389 automated tests pass (370 on `main` + 19 maths), including independent re-evaluation of over 6,000 printed calculations and property checks for rounding, intervals, standard form, percentages, estimates and recurring decimals. Browser walk-throughs pass: pilot 87 checks (`tools/maths-browser-flow.mjs`) and batch 02 68 checks (`tools/maths-browser-flow-2.mjs`), covering all ten investigations and wrong paths, practice to mastery, checks and retakes, review, assessment, reload persistence, tier switching, 390px with reduced motion, and science storage identical before and after. Evidence: `science-app/maths-browser-evidence.json`, `science-app/maths-browser-evidence-2.json`.

**Pre-existing live defect fixed:** `family.css` line 34 left `@media (prefers-reduced-motion: no-preference)` unclosed, so reduced-motion users lost every later rule, including the phone layout and logo redesign. One closing brace added; verified at 390px.

Historical Maths handover (integrated by Ecology05; publication recorded above after release). **Cache versioning:** to avoid conflicting with parallel science batches, the global `?v=` string was not bumped (science stays `20261022-eco4`); maths modules use `20261022-maths-r2`. **The next Site publication must bump the global version** so cached `app.js`, `progress.js` and `family.css` refresh.

Not done: Site publication; teacher/specialist review of item wording and difficulty; marking of written working or extended reasoning; expression equivalence for Algebra. Next: Adam reviews the maths lessons; then N5/N8/N13; expression marking before Algebra. Briefs: `curriculum/briefs/maths-number-pilot.md`, `curriculum/briefs/maths-number-batch-02.md`.

## Ecology batch04 — implemented, published and GitHub source updated

Five shared both-tier lessons: biodiversity, waste/pollution, land use/peat, tropical deforestation and global warming. AQA8461/8464 4.7.3.1–.5 checked22October2026.25 grouped teaching/support requirements mapped in biology-ecology-batch04-requirements.csv. Required examples include sewage/fertiliser/toxic chemicals, smoke/acidic gases/landfill; building/quarrying/farming/dumping; peat habitat, decay/burning CO₂ and compost affordability; cattle/rice/biofuel land demands; CO₂/methane, biological effects, systematic reviews of thousands of peer-reviewed studies and complex-context uncertainty. Maintaining biodiversity4.7.3.6 is the next lesson, not claimed complete here.

App255 lessons/928 practice/1633 independent checks; Biology142 Separate Higher/108 Trilogy Higher. Ecology17 Separate Higher/16 Separate Foundation/14 Trilogy both tiers;8 roadmap units remain planned.20 practice/30 checks added. Four new films/lesson bindings give83 films/80 bindings overall. Eight process cards default inline autoplay/Loop; reduced-motion paused by policy. Direct evidence includes species-shape counts and dependency web, pollutant indicator bars, original land/compost comparisons, forest area allocation and fictional temperature anomalies. Three gated investigation tasks per lesson: contextual prediction/reveal with feedback, numeric account with reasoning, and causal-stage sequence. Comparisons are constrained, not full ecosystem simulations or unrestricted independent writing/graph construction. Prices, areas, counts and anomalies are original fictional examples. No current market/climate measurement or required practical completion claimed.

370 automated tests pass. Five full browser journeys6/6 passed with wrong comparison/numeric/reasoning, premature recording and skipped sequence stages rejected, plus wrong-practice correction. Warming draft0.4/reason1 survives reload and was corrected. Earlier12 Ecology completions retained; filters reach14/14 Trilogy,16/16 Separate Foundation and17/17 Separate Higher. All20 teaching cards/15 investigation sets fit390px without document overflow or duplicate player; eight process cards show Loop checked. New-start assessment offers17 eligible Separate Higher Ecology questions. New model notes checked, no console errors observed. Automated restore preserves older progress/scoped assessment. Technical QA is not specialist review, independent extended-writing/graph evidence or full assistive-technology/device certification.

Files: content-biology-impacts.js; eco4-models/figures/visuals/films.js; widgets-eco4.js; content/widget/registry/process/source-note integration. Cache version20261022-eco4. Brief biology-ecology-batch-04-brief.md; impacts-browser-evidence.json. Stable IDs/progress retained. Next five: maintaining biodiversity, trophic levels, biomass pyramids, biomass transfer/efficiency and food security; confirm exact statements before briefing. Earlier Biology audits and specialist review remain outstanding. Published22October2026 at08:04:33UTC. Sites sourcee160fc853319bc2071919c2abf135e2f83e2a1b5; deployment appgdep_6ad9c3822cd081919e37ea5b7483bb3e; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_a5595071ed608191bbd736be311d4704. Owner-private audience preserved. Live17-lesson Separate Higher inventory and new deforestation default process/Loop confirmed, one player/no console errors. Archive science-app-ecology04.tar.gz; proof crash-course-ecology04.png. Canonical source/tests/coverage/QA commit9906a60505457b688a3c3b169f7f6f31b2e5f64f pushed to GitHub origin/main; final records and proof follow in the handover commit.

## Ecology batch03 — implemented, published and GitHub source updated

Five lessons: carbon cycle/decomposers and water cycle (shared both tiers), decomposition/compost/biogas and milk-decay practical (separate Biology both tiers), environmental change/distribution (separate Higher only). Official8461/8464 4.7.2.2, separate4.7.2.3/.4 and RP10 checked22October2026. AQA8461 handbook5.2 (2018), pp29–30/56–58, distinguishes lipase classroom fatty-acid pH fall from natural lactic-acid milk decay.27 grouped teaching/support mappings recorded in biology-ecology-batch03-requirements.csv; these do not constitute full-topic statement closure. Nitrogen cycle excluded. Physical RP10/AT evidence, unrestricted written/freehand evidence and specialist review remain outstanding.

20 practice/30 independent checks added. App250 lessons/908 practice/1603 checks. Biology137 Separate Higher/103 Trilogy Higher. Ecology12 Separate Higher/11 Separate Foundation/9 Trilogy both tiers;13 roadmap units remain planned. Five films across four new bindings give79 films/76 bindings overall. Eight process cards default to inline autoplay/Loop, reduced-motion paused by policy; evidence/data/maps stay direct. Carbon/water ledgers require each named transfer with14/12 conserved units and reject empty sources. Compost comparisons require baseline and four isolated conditions. Milk practical requires three common-endpoint virtual runs, original repeated means200/100/260 s, reciprocal rates and a limited conclusion, then bounded graph construction. Higher suitability map requires all four hypothetical scenarios; water/gas indices and thresholds are fictional, not real species forecasts or extinction evidence. Movies are worked examples separate from saved experiments.

362 automated tests pass. All five full browser journeys passed6/6 with wrong-answer correction, premature/incorrect recording rejected, including wrong material interpretation, compost rates, practical endpoint/means, axes/scale/points and unsupported conclusions. Edited carbon account survived reload. Milk35°C/50s/mean99 draft restored and was corrected. Higher map warmer/prediction1 survived reload and Foundation exclusion/back to Higher. Previous7 Ecology completions retained; filters show9/9 Trilogy,11/11 Separate Foundation,12/12 Separate Higher. All15 investigation sets and20 teaching cards fit390px without document overflow or duplicate process player; eight process cards show Loop checked. New-start assessment offers12 Separate Higher Ecology questions. Current notes verified; no console errors. See recycling-browser-evidence.json. Automated restore additionally preserves older progress and scoped assessment. Technical QA is not specialist content review or physical practical competence.

Files: content-biology-recycling.js; eco3-models/figures/visuals/films.js; widgets-eco3.js; content/widget/registry/process/source-note integration. Shared cache version20261022-eco3 preserves single process-player instance. Stable lesson/question/concept IDs and storage retained. Canonical GitHub/main remains at workspace root; separate app-only checkout used for Sites. Next five: biodiversity, waste/pollution, land use/peat, deforestation and global warming. Verify exact assessable scope before next brief. Earlier Biology audits remain pending. Published22October2026 at07:41:02UTC. Sites source7659027b7d203179de8d66a4df9af74d80e59efb; deployment appgdep_6ad9bd9a94ec8191922cb22095a1327f; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_d2f15fc9fd04819191f42e1fab4a993a. Owner-private audience preserved. Live12-lesson Separate Higher inventory and new carbon inline autoplay/Loop verified, one player and no console errors. Archive science-app-ecology03.tar.gz; proof crash-course-ecology03.png. Canonical GitHub source/tests/coverage/QA commit2d03bd53530964fbc71b7bfe35046a3f30137681 pushed to origin/main; final publication records, proof and documentation are included in the follow-up handover commit.

## Ecology batch02 — implemented, published and GitHub source updated

Five shared both-tier lessons: biotic factors, structural/behavioural/functional adaptations, food chains/predator-prey, quadrat population estimates and transect distribution/practical preparation. Both8461/8464 4.7.1.3/.4 and4.7.2.1 verified22October2026.27 grouped teaching/support requirements in biology-ecology-batch02-requirements.csv. Current official practical-assessment pages confirm8461 RP9/8464 RP7 and shared AT1/3/4/6, with AT8 separate Biology. AQA8461 handbook version5.2 (2018), field investigation pages53–55, supplies illustrative method context; older Trilogy draft PDF is supplementary, not the controlling current scope. No claim of physical practical completion. Full-topic statement reconciliation/specialist review remain separate.

20 practice/30 checks added; app245 lessons/888 practice/1573 checks. Biology132 Separate Higher/101 Trilogy Higher. Ecology7 shared lessons at both tiers/routes;18 roadmap units remain planned. Five new process films across four lesson bindings give74 films/72 bindings overall. Film/evidence cards explicitly separated. Feeding direction, delayed population response, existing day/night behaviour, coordinate sampling and station measurement loops use original symbolic examples. Graph builder requires labelled axis choices, a fitting scale and all10 paired points. Quadrats require following four generated coordinates, placing the square, counting each target plant, recording all observations and scaling mean density to habitat area; estimated64 differs from full toy field68. Transect activity requires four measured stations, three-count means and a limited association interpretation. These are constrained graph/field models, not unrestricted hand drawing or physical apparatus skills. Selected-quadrat accessible description provides the equivalent plant count.

352 automated tests pass. Five full browser flows6/6 pass, including wrong comparisons/practice, premature chain steps, wrong graph axes/scale/points, wrong coordinates/counts/estimate, wrong station means and sole-cause claims rejected. Graph edit9, quadrat estimate63 with all four recorded observations, and measured4m station mean5 restore after reload and were corrected. Automated unfinished graph/quadrat/station drafts preserve earlier progress and scoped assessment. Previous2 Ecology completions retained;7/7 at all course/tier combinations. All15 phone investigation sets and20 teaching cards fit390px without document overflow, with one process player. Seven process cards autoplay/Loop; data/graph/field tasks stay direct. New Ecology assessment start offers7 questions; earlier run persistence is covered by restore tests. No console errors observed. Technical QA is not specialist review, unrestricted written/freehand evidence, physical fieldwork or full screen-reader/device certification.

Files: content-biology-ecology.js; eco2-models/figures/visuals/films.js; widgets-eco2.js; content/widget/registry/CSS integration. Brief biology-ecology-batch-02-brief.md; ecology-browser-evidence.json. Stable IDs and browser storage retained. Canonical GitHub/main remains at the workspace root; Sites publishing uses a separate app-only checkout. User requirement to commit/push every finished batch is now recorded in AGENTS.md. Next five: carbon cycle, water cycle, separate decomposition, separate decay practical and separate Higher distribution response (confirm exact roadmap scopes before building). Earlier Biology evidence audits remain pending. Published22October2026 at07:08:24UTC. Sites app sourcecb1d3202eccf9559d7fe9670c83b970f0a41790a; deployment appgdep_6ad9b658724c819192df1b88acf6e69b; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_93a0a0632d788191b5483ecdf8f48ccd. Owner-private audience preserved. Live7-lesson Ecology inventory and responsive quadrat inline autoplay/Loop rendering verified; no console errors. Archive science-app-ecology02.tar.gz; proof crash-course-ecology02.png. Canonical GitHub source/tests/coverage/QA commit5fc3e0ffc59663fe64d497871510e7efe3f2bd8d pushed to origin/main; final publication records and proof are included in the follow-up handover commit.

## Canonical GitHub repository — 22 October 2026

The project source is now managed from the workspace root on `main`, tracking `origin/main` at https://github.com/adamscourfield/crashcourse . Upload includes application source/assets, tests, curriculum registers/briefs/coverage, build/design instructions and QA records/screenshots. Generated deployment archives, credentials, dependencies and caches are excluded. The existing GitHub initial commit is preserved. The prior app-only Site Git metadata is backed up locally in `.git/sites-source-backup/`; `science-app/` is an ordinary tracked directory, not a submodule. Future source changes use root GitHub `main`; use a separate app-only checkout for the Sites source helper if needed. Existing hosting identity/audience is unchanged; GitHub push is not a deployment. This handover adds no lesson coverage or specialist-review claim. App check result:343 tests passed in the preceding published batch; this upload does not change app code. Next action remains the next five Ecology lessons from the recorded plan.

## Inheritance06 / Ecology01 — implemented and published

Five shared both-tier lessons: extinction, bacterial antibiotic resistance, Linnaean/domain/tree classification, communities/competition/interdependence and abiotic-factor evidence. Official8461 4.6.3.6/.7/4.6.4 and8464 4.6.3.3/.4/4.6.4 plus both4.7.1.1/.2 verified22October2026.27 grouped teaching/support requirements in biology-transition-batch06-requirements.csv. All28 reserved Inheritance lesson units now have implementation; statement/evidence reconciliation and specialist review are still pending. Ecology opens with2 lessons;23 roadmap units remain planned. Physics remains planned.

20 practice/30 checks added; app240 lessons/868 practice/1543 checks. Biology127 Separate Higher/96 Trilogy Higher. Inheritance28 Separate Higher/24 Foundation/20 Trilogy Higher/18 Foundation; Ecology2 at both tiers/routes. Two new process films give69 films/68 bindings. Resistance film separates variant presence, removal of susceptible cells, reproduction and spread. Controlled experiment compares antibiotic absence/presence, requires exposure and division plus both percentage predictions, and preserves actual counts. Community dependency film is distinct from four-condition water/pollinator experiment; students predict outputs and compare isolated changes. Counts/outputs are fictional, not clinical or ecological forecasts. Extinction counts, ranks/tree, temperature chart and moisture data stay direct. NHS corroborates current antibiotic use-as-directed and MRSA treatment wording; no all-bacteria-killed or every-antibiotic-fails guarantee. AQA prescribed-course requirement mapped as adherence to prescriber instructions; no personal treatment decision or dosing advice.

343 automated tests pass, including selection count/proportion invariants, controlled model outcomes, course/topic scope, answer gates, reduced motion, finite labelled figures, hidden/unfinished drafts and a single process-player module identity. Five full browser flows6/6 pass, including wrong comparisons/practice, premature sequence/exposure completion and incorrect predictions/calculations rejected. A duplicate module URL initially created overlapping process players; fixed and regression tested, then one player verified across all15 phone investigation layouts and20 cards. No document overflow at390px. Three process cards autoplay/Loop; controlled evidence stays direct. Antibiotic stage1/prediction100 and dry/pollinator-present/prediction6 restore on reload. Earlier25 completions retained; Inheritance28/28 Separate Higher,24/24 Foundation,20/20 Trilogy Higher,18/18 Foundation; Ecology2/2 every route/tier. Ecology-only2-question assessment retains its locked first wrong answer after reload and correctly scores1/2 (50%) below pass. No console errors observed. Community arrows and labels visually refined/rechecked. Technical QA is not specialist review, unrestricted writing/freehand/physical-fieldwork evidence or full physical-device/screen-reader certification.

Files: content-biology-boundary.js; bound-models/figures/visuals/films.js; widgets-bound.js; topic/content/widget/registry integration. Brief biology-transition-batch-06-brief.md; boundary-browser-evidence.json. Stable IDs and storage retained. Next five Ecology: biotic factors, adaptations, food chains/predator-prey, quadrat sampling and transects/distribution; brief exact statements first. Earlier Biology topic evidence audits remain pending. Published22October2026 at06:38:04UTC. Source3404777e1b8c4e5a551d1e37a6aad5066dad1a08; deployment appgdep_6ad9af3d248881919d17ede2fd3f129d; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f6c0c3df87a4819190b80d5cf3cb05ff. Owner-private audience preserved. Published Ecology2-lesson menu and community inline autoplay/Loop rendering verified; no console errors. Archive science-app-boundary06.tar.gz; proof crash-course-boundary06.png.

## Inheritance batch05 — implemented and published

Five both-tier lessons: separate Biology cloning, Darwin/Lamarck, Wallace/speciation and Mendel history; shared fossil/evolution evidence. Official8461 4.6.2.5 and4.6.3.1–.5 and8464 4.6.3.1–.2 verified21October2026.27 grouped teaching/support requirements mapped in biology-inheritance-batch05-requirements.csv. Four cloning methods, donor nuclear identity, conditional reproductive isolation, historical acceptance/delayed recognition, later chromosome/DNA evidence, three fossil pathways, record limitations, rock order and branching interpretation covered. Resistance mechanism and full classification remain next batch; no clinical protocol or success claim.

20 practice/30 checks added; app235 lessons/848 practice/1513 checks. Biology122 Separate Higher/91 Trilogy Higher. Inheritance25 Separate Higher/21 Foundation/17 Trilogy Higher/15 Foundation. Roadmap3 Inheritance/25 Ecology units remain planned. Five new films across three lesson bindings:67 films/66 bindings overall. Plant tissue culture, embryo splitting and adult nuclear transfer have distinct loops; speciation compresses many generations and states conditional outcomes; mineral replacement is one fossil pathway, not every mode. Historical evidence, ratios, layers and branching diagrams stay directly inspectable. Worked films do not alter saved challenge selections or award completion. Nuclear genome distinguished from mitochondrial/cytoplasmic and environmental identity.

334 automated tests pass. Five full browser flows6/6 pass, including wrong predictions/practice, premature sequences and zero calculations rejected. Edited cloning next-stage choice restores after reload. Automated unfinished separate-cloning draft survives Trilogy fallback. Previous20 completions retained;25/25 Separate Higher,21/21 Foundation,17/17 Trilogy Higher and15/15 Foundation retained across switches. All15 phone investigation layouts and20 cards fit390px without document overflow; six process cards show matching films and checked Loop; direct evidence stays visible elsewhere. No console errors observed. Stable lesson/question/concept IDs and storage preserved. Technical QA is not specialist review, unrestricted written/freehand evidence or full assistive/physical-device certification. Earlier Biology evidence/source reconciliation remains pending.

Files: content-biology-history.js; hist-models/figures/visuals/films.js; widgets-hist.js; content/widget/registry integration. Brief biology-inheritance-batch-05-brief.md; history-browser-evidence.json. Next: extinction, antibiotic resistance and classification; then first Ecology batch. Published21October2026 at20:06:01UTC. Source9b5de816d395a3f0e928e679b63669a02602a491; deployment appgdep_6ad91b1915a48191a2abadb469eb634c; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_9fbce1b6da7081919af3d4dcdb4ef955. Owner-private audience preserved. Live25-lesson inventory, separate/shared labels and inline fossil autoplay/Loop rendering verified; no console errors. Archive science-app-history05.tar.gz; proof crash-course-history05.png.

## Inheritance batch04 — implemented and published

Five lessons: genes/environment/variation, natural selection, selective breeding, genetic-engineering applications and Higher gene-transfer steps. The first four are shared at both tiers; transfer steps are shared Higher only. Official8461 and8464 4.6.2.1–.4 verified21October2026.27 grouped assessable/support statements in biology-inheritance-batch04-requirements.csv. Mutation creates variants without foresight; selection changes inherited population proportions, not individual colour by need. Breeding goals include crops, production animals, gentle dogs and flowers; risks and ethical concerns are distinct from benefits. GM crop/insulin applications and uncertainty remain separate from Higher enzymes/vector/early-transfer sequence.

20 practice/30 checks added; app230 lessons/828 practice/1483 checks. Biology117 Separate Higher/90 Trilogy Higher. Inheritance20 Separate Higher/16 Foundation/16 Trilogy Higher/14 Foundation. Roadmap8 Inheritance/25 Ecology units remain planned. Three new process films give62 films/63 bindings. Selection and repeated breeding stages and gene transfer autoplay/loop; comparative datasets and application/ethical evidence stay direct. The two-habitat cohort activity requires predictions and at least two generations in each habitat. Deterministic fixed20 offspring and2:1 weighted contribution are explicit toy assumptions; no wild-population forecast or real GM yield claim. Fresh numeric cohort diagram matches8 light/12 dark.

327 automated tests pass. All five full browser flows6/6 pass, including wrong comparison/practice answers, premature pathways, incorrect cohort predictions and zero numerical answers rejected. Light habitat, prediction and generation1 counts13/7 restore after reload. All15 phone investigation layouts and20 cards fit390px without document overflow; process/evidence visibility matches intent and Loop is checked. Previous15 completions retained;20/20 Separate Higher,16/16 Foundation,16/16 Trilogy Higher and14/14 Foundation retained across course/tier switches. No console errors observed. Stable IDs/storage preserved. Technical QA is not specialist review or unrestricted written/freehand assessment; full physical-device/screen-reader certification not claimed. Earlier Biology statement/evidence audits remain pending.

Files: content-biology-evolution.js; evo-models/figures/visuals/films.js; widgets-evo.js; content/widget/registry integration. Brief biology-inheritance-batch-04-brief.md; evolution-browser-evidence.json. Next five: separate cloning, Darwin/Lamarck history, Wallace/speciation, Mendel/genetics history, then shared evidence/fossils. Published21October2026 at17:04:14UTC. Source582cc4b103ca01f25c3a470e12202e97cbbcdf38; deployment appgdep_6ad8f07d911881919bc3b1a21bec730d; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_fa74c247d74081918e94ea8f5046d3b6. Owner-private audience preserved. Live20-lesson inventory, Higher labels and inline selection autoplay/Loop rendering verified; console errors empty. Archive science-app-evolution04.tar.gz; proof crash-course-evolution04.png.

## Inheritance batch03 — implemented and published

Five shared lessons: Higher independent cross construction; both-tier family trees, polydactyly/CF, embryo-screening evaluation and chromosomal sex inheritance.8461 4.6.1.6/.7/.8 and8464 4.6.1.4/.5/.6 verified21October2026.27 grouped assessable/support statements in biology-inheritance-batch03-requirements.csv. HFEA corroborates embryo testing scope, IVF requirement and uncertainty; fictional data and families only. No clinical advice, gene-editing or guaranteed-health claim. Pedigree inference retains AA-or-Aa uncertainty; bounded dominant/recessive and typical XX/XY models explicit.

20 practice/30 checks added; app225 lessons/808 practice/1453 checks. Biology112 Separate Higher/85 Trilogy Higher. Inheritance15 Separate Higher/12 Foundation/11 Trilogy Higher/10 Foundation. Roadmap13 Inheritance/25 Ecology units remain planned. One chromosome-contribution process film added:59 films/60 bindings. The cross builder derives gamete headers from parents, accepts reordered axes with matching cells and rejects repeated/wrong allele headers. Both-tier supplied disorder/sex grids, editable pedigree genotypes, diagram-based independent pedigree questions and screening dataset/perspectives keep evidence directly visible. Only sex-combination process card autoplays/loops; no cosmetic clinical film.

319 automated tests pass. Five full browser flows6/6 pass including wrong predictions/practice, blank/wrong header/cell/pedigree entries and zero calculations rejected. Reversed axes tested through actual construction. Header edit restores on reload. Independent first wrong locks after reload;67% fails and100% retake passes. Previous10 completions retained;15/15 Separate Higher,12/12 Foundation,11/11 Trilogy Higher and10/10 Foundation persist across switches. All15 mobile investigation layouts fit390px without overflow;20 cards have matching process/evidence visibility; native scrub/stage/replay and Loop checked. No console errors observed. Independent pedigree contrast fixed with a dark backing, visually rechecked and regression-tested. Technical QA is not specialist review or unrestricted written/freehand assessment; no full physical-device/screen-reader certification claimed. Stable IDs/storage preserved.

Files: content-biology-family.js; family-models/figures/visuals/films.js; widgets-family.js; content/widget/registry/app question-figure integration. Brief biology-inheritance-batch-03-brief.md; family-browser-evidence.json. Next five: variation, natural selection, selective breeding, genetic-engineering applications and Higher engineering steps. Earlier Biology evidence/source reconciliation remains pending. Published21October2026 at14:50:11UTC. Source49986ec83f48c0836ef23f1ab7fb6c40ebd2cabe; deployment appgdep_6ad8d0fe18808191b46c204e4de63470; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_d96b241b71fc8191b1682ed86129bad6. Owner-private audience preserved. Live15-lesson inventory, new route/tier labels and pedigree rendering verified; console errors empty. Archive science-app-family03.tar.gz; proof crash-course-family03.png.

## Inheritance batch02 — implemented and published

Five lessons: separate both-tier nucleotides; separate Higher protein synthesis and coding/non-coding variants; shared both-tier alleles and supplied genetic-cross completion.8461 4.6.1.5/.6 and8464 4.6.1.4 verified21October2026.20 grouped teaching/evidence statements mapped in biology-inheritance-batch02-requirements.csv. Complementary pairing restricted to Higher lesson; no RNA structure detail. Cross tasks supply parents/gametes; unsupplied construction remains later Higher. Family-tree interpretation remains later. Single-gene dominance and probability assumptions explicit; colour blindness is not misrepresented as the autosomal toy cross.

20 practice/30 checks added; app220 lessons/788 practice/1423 checks. Biology107 Separate Higher/80 Trilogy Higher. Inheritance10 Separate Higher/8 Foundation/6 Trilogy both tiers. Roadmap now18 Inheritance/25 Ecology units remain planned. Two new process films give58 films/59 lesson bindings. Nucleotide backbone/base interpretation, synthetic triplets and real one-base insertion/deletion groupings, protein template/carrier/ribosome/chain/fold loop, expression comparisons, allele pairs and two student-editable supplied Punnett grids. Invented token code is explicitly not a real codon lookup. Alternative variant outcomes are not presented as inevitable disease.

310 automated tests pass: scope, grid multiplicity/gates, insert/delete lengths/grouping, complementary bases, sequence errors, finite accessible diagrams, process/evidence defaults and hidden/unfinished drafts. All five full browser flows6/6 pass; wrong predictions/practice, premature sequences, blank/wrong grid entries and zero numeric answers rejected. Edited grid cell aa restores on reload then corrected to Aa. All15 investigation layouts fit390px without document overflow. All20 teaching cards show matching process/evidence visibility and Loop checked for films; no console errors. Course/tier switching retains10/10 Separate Higher,8/8 Foundation and6/6 Trilogy. Technical QA is not specialist review, unrestricted written/freehand evidence or full assistive/physical-device testing. Existing IDs/storage schema preserved.

Files: content-biology-genetics.js; gen-models/figures/visuals/films.js; widgets-gen.js; content/widget/registry integration. Brief biology-inheritance-batch-02-brief.md; genetics-browser-evidence.json. Next five: Higher construction of crosses, family trees, inherited disorders, embryo-screening evaluation and chromosomal sex inheritance. Remaining source/evidence reviews for earlier Biology topics still pending. Published21October2026 at14:09:30UTC. Sourceb52acaaf7c721afcd343a8cc81d85d64fab11225; deployment appgdep_6ad8c78c0c288191a6efe9acd8fe0d0b; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_d65e5bcb65008191865bb54400466b9e. Owner-private audience preserved. Live10-lesson inventory and protein inline autoplay/Loop/rendering verified; no console errors. Archive science-app-genetics02.tar.gz; proof crash-course-genetics02.png.

## Inheritance batch01 and remaining Biology roadmap — implemented and published

User priority moves to Inheritance/Ecology; Homeostasis reconciliation remains pending. biology-remaining-roadmap.csv reserves28 Inheritance and25 Ecology section-scoped lesson units, not final statement-complete briefs. First five Inheritance lessons now implemented: reproduction, meiosis, fertilisation/embryo growth, separate reproduction strategies, DNA/genome. Four shared plus one separate-only, all both tiers.31 grouped assessable/support requirements map8461 4.6.1.1–.4 and8464 4.6.1.1–.3. Remaining23 Inheritance/25 Ecology units are planned, not available. Later exact scopes may change at briefing. Ecology sampling practical numbering8461 RP9/8464 RP7 checked; separate decay RP10. Topic coverage maps record exclusions and tier differences.

20 practice/30 checks added; app215 lessons/768 practice/1393 checks. Biology102 Separate Higher/78 Trilogy Higher. Inheritance5 Separate/4 Trilogy at both tiers. Four new films across three bindings give56 films/57 bindings overall. Sexual/asexual card selection, one-replication/two-division chromosome model, fertilisation/mitotic growth, DNA hierarchy and genome/strategy evidence. Model limitations distinguish chromosome/DNA counts, pollen carriers and four generalised meiotic products from functional egg production. All prior IDs/progress retained; new topic-scoped assessment/review use existing context keys.

303 automated tests pass. All five full browser flows6/6 pass, including incorrect prediction/practice retries, premature pathways and numeric errors. Independent first wrong locks after reload;67% fails/100% retake passes. Edited meiosis numeric8 restores and was corrected to9. Existing Homeostasis30/30 retained; Inheritance4/4 Trilogy and5/5 Separate persist across Foundation/Higher switches. All15 investigation sets and20 teaching cards fit390px without overflow; four films use checked Loop; DNA, strategy and mixed evidence cards hide film. No console errors observed. Technical QA is not specialist review or unrestricted written/freehand evidence. No full physical-device/screen-reader certification claimed.

Files: content-biology-inheritance.js; inherit-models/figures/visuals/films.js; widgets-inherit.js; registry/content/widget integration. Brief biology-inheritance-batch-01-brief.md; requirement CSV biology-inheritance-batch01-requirements.csv; browser evidence inheritance-browser-evidence.json. Next brief five units: separate both-tier nucleotides, separate Higher protein synthesis, separate Higher coding/non-coding variants, shared alleles/vocabulary and shared basic genetic crosses. Ecology follows its saved roadmap. Published21October2026 at13:35:37UTC. Source25f8d5a4f8126c29a48bdfed9bd6e936a4556a1f; deployment appgdep_6ad8bf9766408191b9267092e1ebdc33; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f771004320e081919fd6ee199b81d5fd. Owner-private audience preserved. Live five-lesson inventory, course labels and DNA/genome diagram verified; no console errors. Archive science-app-inheritance01.tar.gz; proof crash-course-inheritance01.png.

## Homeostasis batch06 — implemented and published

Five new lessons: shared Higher adrenaline/thyroxine feedback; separate both-tier tropisms and seedling practical8 preparation; separate Higher auxin applications and gibberellin/ethene roles/uses.32 grouped statement/support rows map8461 4.5.3.7/4.5.4.1/.2 and8464 4.5.3.6, checked21October2026.20 practice/30 checks added; app210 lessons/748 practice/1363 checks. Biology97 Separate Higher/74 Trilogy Higher. Homeostasis30 Separate Higher/21 Foundation/15 Trilogy Higher/11 Foundation. Eight new process films across four lesson bindings:52 films/54 bindings overall. Per-card processFilm selection matches adrenaline, thyroid, phototropism, each gravity response, rooting, germination and ripening. The seedling practical remains editable evidence; length/mean tasks and student-assembled labels/direction complement the growth models.

296 automated tests pass, including route/tier/ref scope, opposite auxin responses, gated errors, numerical denominators, drawing labels, per-card/reduced-motion policy, persisted hidden drafts and isolated SVG paint IDs. Five full browser flows pass6/6 each, with wrong predictions/practice, premature stages, zero numeric and wrong labels rejected. First wrong independent answer stays locked after reload;67% fails and100% retake passes. Edited drawing label restores on reload, then corrected. Prior25 completions retained; final30/30,21/21,15/15,11/11 persist across course/tier switches. All15 investigations and20 teaching cards fit390px without document overflow; process panels344px. All8 matching film views show Loop checked; evidence cards hide the player. Keyboard End/stage/replay checked on representative film; no console errors. Visual review fixed hidden-view SVG ID conflicts and repositioned gravity curves; final growth view checked. Technical QA is not specialist review, unrestricted written/freehand assessment, real apparatus competence or full physical-device/screen-reader certification.

Files: content-biology-growth.js; growth-models/figures/visuals/films.js; widgets-growth.js; process-policy.js per-card override; registry/content/widget integration. No IDs/schema migration. Brief biology-homeostasis-batch-06-brief.md, mapping biology-growth-requirements.csv, evidence growth-browser-evidence.json. Next source-reconcile Homeostasis statements and independently constructed/practical evidence, then map first five Inheritance lessons. Homeostasis stays partial; Organisation/Infection audits pending; Physics remains planned. Published21October2026 at13:16:35UTC. Sourceee8449c8331f7c4f5928a6a6fb9e6baebe6484b5; deployment appgdep_6ad8bb23bca0819189970ecb73819674; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_46bf71dbae148191b90681a6b10b4c67. Existing owner-private audience preserved. Live30-lesson inventory, tropism inline autoplay/Loop and rendered growth curve verified; no console errors. Archive science-app-growth.tar.gz; proof crash-course-growth.png.

## Homeostasis batch05 — implemented and published

Five shared Biology lessons: puberty/reproductive hormones; menstrual cycle events/roles; Higher interactions/graphs; contraception; Higher fertility drugs/IVF. Route-specific references8461 4.5.3.4–6 and8464 4.5.3.3–5 verified21October2026. NHS/HFEA corroborate copper IUD, combined patch and embryo-transfer wording.21 practice/31 checks added; app205 lessons/728 practice/1333 checks. Biology92 Separate Higher/73 Trilogy Higher. Homeostasis25 Separate Higher/19 Foundation/14 Trilogy Higher/11 Foundation. Four new process films give44 films/50 lesson bindings. Contraception opens controlled mechanism/evidence views; graph/evaluation cards keep evidence visible. Cycle timing and relative-unit curves are explicitly illustrative, not individual predictions.

286 automated tests pass. Five full browser flows pass (four6/6 checks, IVF7/7), including investigation wrong-answer retries and premature pathway rejection. All15 investigation layouts fit390px without document overflow. Completed progress25/25 survives reload; graph cursor day28 and numeric value6 restore. Course/tier switching shows19/14/11 eligible lessons and retains completion. Four process views use inline playback with Loop checked; direct graph task has no visible process overlay. Technical checks do not constitute specialist review, clinical advice, unrestricted written/freehand assessment or full assistive-device certification.

Source content-biology-reproduction.js; repro-models/figures/meshes/visuals/films.js; widgets-reproduction.js. Brief biology-homeostasis-batch-05-brief.md; statement map biology-reproduction-requirements.csv; browser evidence reproduction-browser-evidence.json. No progress schema migration or existing-ID replacement. Next map Higher adrenaline/thyroxine feedback and separate plant-hormone responses, practical and applications into the next bounded batch; Homeostasis remains partial. Organisation/Infection evidence audits remain outstanding. Published21October2026 at12:57:19UTC. Source6bcf2ff86aad57d7b9dce62028c83bffeb9b04a0; deployment appgdep_6ad8b6a0aaec8191bbbe5d157161bceb; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_952f9123586c8191b1a49cae699fedf4. Owner-private audience preserved. Live25-lesson list and cycle inline autoplay/Loop verified; no console errors. Archive science-app-reproduction.tar.gz; proof crash-course-reproduction.png.

## Homeostasis batch04 — published

Five separate Biology lessons: water/osmosis; kidney filtration/reabsorption; Higher urea formation; Higher ADH; dialysis/transplant.26 grouped statement/evidence rows map8461 4.5.3.3, checked21October2026. NIDDK corroborates dialysis/transplant facts; no clinical guidance or patient data.20 practice/30 checks; app200/707/1302; Biology87 Separate Higher/68 Trilogy Higher. Homeostasis20 Separate Higher/16 Foundation; Trilogy unchanged9 Higher/8 Foundation. Five auto-loop process films added:40 films/46 bindings total. Labelled functional models avoid unnecessary nephron anatomy; original amount table→student bar plotting, matched-solute dialysis and treatment evaluation retain evidence views.

278 automated checks pass. All15 investigation sets and five full browser flows6/6 pass, with wrong practice retries, wrong comparison predictions, premature pathway choices, zero numeric and swapped bars rejected. Student returned-ion bar14 restores on reload; first wrong independent answer locks; treatment check67% fails and100% retake passes. Foundation excludes urea/ADH, retains3 new lessons;20/20 Separate Higher and9/9 Trilogy Higher retained across route switch. All15 phone investigation layouts fit390px without page overflow; five film panels fit304px, Loop checked, stage controls and keyboard End/replay work. No browser console errors. Stable IDs/storage preserved. Technical QA is not specialist review, unrestricted writing/freehand, clinical or physical-device/full screen-reader certification.

Source content-biology-renal.js; renal-models/figures/meshes/visuals/films.js; widgets-renal.js. Brief biology-homeostasis-batch-04-brief.md; mapping biology-renal-requirements.csv; browser evidence renal-browser-evidence.json. Next map FIVE shared reproduction lessons: puberty/reproductive hormones, menstrual cycle basics, Higher cycle interactions/graphs, contraception, Higher infertility/IVF, using route-specific numbering. Adrenaline/thyroxine and separate plant hormones remain later; Organisation/Infection evidence audits remain pending. Published21October2026 at12:36:36UTC. Source0828b0e4099c7b4f03f1153f22c48e112a4217ff; deployment appgdep_6ad8b1c549f48191858e85cf12588f68; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_90cfe27eb7548191baa90b8d3bd6ff02. Owner-private audience preserved. Live20-lesson list, Higher scope and kidney inline autoplay/Loop verified; console errors empty. Archive science-app-renal.tar.gz; proof crash-course-renal.png.

## Homeostasis batch03 — published

Five lessons: thermoregulation (separate Biology, both-tier responses/Higher mechanism detail); endocrine system; insulin control; diabetes (shared both-tier); glucagon feedback (shared Higher only).34 grouped statement rows map8461 4.5.2.4/4.5.3.1–.2 and8464 4.5.3.1–.2, checked21October2026.25 practice/33 independent checks; app195/687/1272; Biology82 Separate Higher/68 Trilogy Higher. Homeostasis15 Separate Higher/13 Foundation/9 Trilogy Higher/8 Foundation. Four new process films,35 films/41 bindings total. Gland-map/data cards and gland/data/risk comparison activities open their actual evidence. Process cards and pathway investigations default inline looping. Temperature Higher task requirements are explicit and recomputed by selected tier without losing drafts.

270 automated checks pass. All15 investigation sets and five full browser flows6/6,8/8,6/6,7/7,6/6 pass; wrong first practice each, wrong comparison each, out-of-order pathways and zero numeric answers reject. Low-glucose scenario/wrong choice and edited numeric value restore on reload. Independent wrong first answer locks after reload; diabetes71% fails and100% retake passes. Foundation3 temperature cards/2 tasks; Higher4/3. Shared route/tier switches preserve9/9 Trilogy Higher,8/8 Foundation and15/15 Separate Higher. All15 phone investigation layouts have390px document width without horizontal overflow; four process films fit304px panels, stage controls work. Native keyboard scrub, model inspection, diagram/process card handoff and console checked; no errors observed. Counts/timing/data are original illustrative models, not clinical measurement or dose advice. Technical QA is not specialist review, freehand/extended-writing evidence or physical-device/full screen-reader certification. Stable prior IDs/storage and private Site identity retained.

Next: map five separate-only water/nitrogen balance lessons: water/osmosis, kidney filtration/reabsorption, Higher urea formation, Higher ADH, dialysis/transplant comparison. Reproductive hormones follow. Organisation/Infection evidence reconciliation remains pending. Source content-biology-endocrine.js; endo-models/figures/meshes/visuals/films.js; widgets-endocrine.js. Brief biology-homeostasis-batch-03-brief.md; mapping biology-endocrine-requirements.csv; browser evidence endocrine-browser-evidence.json. Published21October2026 at11:59:11UTC. Source2c910b9e3775d57dbf8edb687b3a77b9d3176d75; deployment appgdep_6ad8a8fc64488191b7dee34c23ad53bc; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_db69c68534c48191b198236d3d760124. Owner-private audience preserved. Live15-lesson list, insulin looping process and glucose graph-card handoff verified; console errors empty. Archive science-app-endocrine.tar.gz; proof crash-course-endocrine.png.

## Homeostasis batch02 — published

Five separate-only brain/eye lessons; four both-tier and Higher-only brain investigation.24 mapped statement groups in biology-senses-requirements.csv, official8461 4.5.2.2/.3 checked21October2026.20 practice/20 independent checks; app190/662/1239; Biology77 Separate Higher/64 Trilogy Higher. Topic10 Separate Higher/9 Separate Foundation/5 Trilogy. Three auto-looping process films added (31 films/37 lesson bindings); brain and eye cutaways retain paired diagrams.259 automated tests pass and five browser full flows4/4, all11 challenge sets complete. Wrong/empty answers reject, draft persists, independent first wrong locks after reload,75% fails/100% retake passes. Representative390px layouts fit; console errors empty. Technical QA only; specialist/freehand/extended-writing evidence remains outstanding. Stable prior IDs/storage preserved. Next map thermoregulation (separate, Higher mechanism restrictions), endocrine system, insulin, diabetes and Higher glucagon/negative feedback. See biology-homeostasis-batch-02-brief.md.

# Process playback defaults — 21 October 2026

User-requested update supersedes earlier optional/paused modal-film guidance. All 28 existing films across 34 lesson bindings open inline by default in Discover and Investigate, autoplaying with Loop checked. Reduced-motion preference starts playback paused and retains still-stage controls. Static structure/data lessons keep their existing view. Inspect model / Show process preserves access to the original model. Investigation inputs automatically return to the selected model/results; practice, checks, assessment and review do not autoplay worked films. No lesson/question IDs, progress schema or curriculum coverage changed.

Implemented: inline player, default policy, visibility pause, reduced-motion response, manual pause/replay/scrub/stages/speed, transcript and model limitations. Future lessons must choose structure/process/evidence deliberately and use these defaults for process films.

Verification: 254 automated tests pass, including four default-policy tests; syntax and diff checks pass. Local browser verified inline autoplay and checked Loop, wrap from end to start, held pause during speed change, inspection toggle, investigation handoff, wrong-answer feedback and persisted investigation choice after reload. Practice hides film and toggle. Reduced-motion policy is automated-tested; physical device and full screen-reader testing are not claimed. Specialist content review remains outstanding. Published21October2026 at07:34:57UTC; source49c2428acc193930b9acb20f0c26731802971242; deployment appgdep_6ad86b125a48819188b51f8e967bf88f; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f9b1bc9b0a5081918b070cb1c83eafee. Owner-private audience preserved. Live nervous-system default inline autoplay/checked Loop verified. Proof: crash-course-inline-process.png.

Counts unchanged: 185 lessons / 642 practice / 1219 independent checks. Next content: map five separate-only brain/eye lessons with exact tier restrictions, then shared endocrine content.


# Crash Course — current build status

Last updated: 21 October 2026.

## Homeostasis batch01 — published

Five shared both-tier lessons: homeostasis; nervous-system signals; reflex arc; synapses; reaction-time practical preparation.21 practice/41 checks/5 recall groups; app185/642/1219; Biology72 Separate Higher/64 Trilogy Higher. Topic5 shared at all routes/tiers. Official8461 4.5.1/4.5.2.1 and8464 4.5.1/4.5.2 checked21October2026; RP7 Biology/RP6 Trilogy, AT1,3,4.41 evidence rows; NIH corroborates chemical-synapse mechanism scaffold. Brain/eye/endocrine remain planned. Bioenergetics author statement reconciliation found no obvious missing teaching against4.4; independent written/freehand/physical/specialist gaps remain; Organisation/Infection audits still pending.

New source content-biology-neural.js; neural-models/meshes/figures/visuals/films.js; widgets-neural.js. Branching neurone/axon/insulation, spinal route, synaptic terminals/transmitter/receptors and ruler apparatus paired with labelled2D and raw tables. Five paused worked process films support direction/sequence and do not earn completion or show during practice/check. Generic target and original reaction records not patient/timing simulations. Stable prior IDs/storage and owner-private identity preserved.

250 automated checks pass. All15 challenges and five full flows8/8,8/8,8/8,8/8,9/9. Wrong predictions/practice retries each, motor-first/wire-gap/premature repeats/wrong axes reject. Reflex step3/relay selection, synapse diffusion stage and quiet2/3 with170mean draft restore on reload. First wrong check locks; retake8/9. Shared5/5 retained Trilogy Foundation→Separate Higher; prior Bioenergetics completion retained. All15 phone layouts and5 films fit; caption clearance≥24px, film356px; keyboard/paired views checked, console errors empty. Brief biology-homeostasis-batch-01-brief.md, mapping biology-neural-requirements.csv, coverage biology-homeostasis-topic-coverage.md, browser evidence neural-browser-evidence.json. Technical QA is not specialist review or physical/constructed/freehand evidence.

Next: map FIVE separate-only brain/eye lessons with exact Higher scope; shared endocrine sequence follows. Keep planned content unavailable until implemented.

Published21October2026 07:26:12UTC: source `e5b29278727e6d8a880fd506a0f5e0dac24d499b`; deployment `appgdep_6ad86901cb248191b8f1bd491aac3840`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_6b88392ac654819194e10bc363e7f4de`. Owner-private audience retained. Live five-lesson list/topic05 and shared eligibility verified; synapse diffusion stage restores after reload, process-film stage playback works and new3D neurone is visible. Live console errors empty. Archive `science-app-neural.tar.gz`; proof `crash-course-neural.png`.

## Bioenergetics batch02 — published

Five lessons: aerobic respiration; anaerobic respiration/fermentation; exercise responses; Higher-only oxygen-debt recovery; metabolism. Four new both-tier/five Higher shared lessons. Basic oxygen-debt creation stays both-tier; blood/liver/glucose and extra oxygen definition restricted to Higher.23 practice/42 checks/5 recall groups; app180/621/1178; Biology67 Separate Higher/59 Trilogy Higher. Topic10 Higher/eight Foundation. Official4.4.2.1–.3 checked21October2026, mapped in respiration requirements CSV and appended coverage map. AT1,3,4 exercise opportunity is preparation, not a required-practical or physical competence claim.

Five paused process films with native playback/transcript controls accompany meaningful student-led models/data. Front-open mitochondrial cutaway has continuous inner folds; muscle/yeast representations differ; distinct carbohydrate/protein/waste groupings, lipid assembly1:3 and timed pulse/baseline oxygen arithmetic require reasoning. Films stay out of practice/check and do not earn progress. New source content-biology-respiration.js; resp-models/meshes/figures/visuals/films.js; widgets-respiration.js. Existing IDs/storage and owner-private identity preserved.

243 automated tests pass. All15 challenges and five full flows8/8,8/8,9/9,8/8,9/9; wrong/retry practice each, wrong pulse/out-of-order liver/swapped lipid reject. Pulse draft and Higher step2/liver selection restore across reload/tier switch. Independent first wrong stays locked; metabolism retake8/9. Prior5/10 retained→10/10; Trilogy Foundation8/8. All15 phone layouts and5 films fit; captions≥24px; keyboard rotation/zoom/reset/paired diagrams checked; no browser errors. Technical QA, not specialist review. Brief biology-bioenergetics-batch-02-brief.md; browser evidence respiration-browser-evidence.json. Model-motion register expanded to180 lessons with5 new film decisions.

Next: reconcile Bioenergetics statement/evidence coverage, then map first FIVE Homeostasis lessons. Organisation/Infection audits remain pending. Do not mark Biology/science complete; constructed/freehand/physical/specialist evidence remains separate.

Published21October2026 07:01:21UTC: source `e5680b60a081be52ee0625de96394d96fd497bac`; deployment `appgdep_6ad8633232648191a6f81c4e0b66034b`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_7b12e5148b048191a37a76ce9378d6ae`. Owner-private audience retained. Live ten-lesson list with coverage-review message and Higher-only oxygen-debt scope verified. Saved oxygen-absent prediction/reveal resumes after reload; new process-film stage and refined mitochondrial3D verified. Live console errors empty. Archive `science-app-respiration.tar.gz`; proof `crash-course-respiration.png`.

## Model-motion review — published

User priority: retrospective model/process review before new lessons. Inventoried175 lessons;18 worked process films across24 lessons,59 structure views retained,25 data/evidence comparisons retained,67 controlled stage investigations retained. Decisions and reasons in model-motion-register.csv; scope/limits/source links in model-motion-audit.md. Camera-rotation labels clarified. Films support pause/replay/loop/speed/scrub/stage/text; start paused, stop on close/background and stay out of practice/independent checks. Watching cannot earn progress or change the current experiment.3D/2D originals retained. BUILD_PLAN and LESSON_TEMPLATE now mandate this decision for future models.

236 technical tests pass. All24 bindings/stages/independent-check exclusion and18 unique phone film layouts pass; pause frame holds, loop wraps, keyboard/speed/replay work; unfinished diffusion investigation unchanged after close. No console errors observed. This is source review of all175, with new browser QA for changed films, not a fresh browser certification of all unchanged models or specialist review. Counts remain175 lessons/598 practice/1136 checks. Next: resume FIVE respiration/exercise/metabolism lessons. Organisation/Infection reconciliations still pending.

Published21October2026 06:36:58UTC: source `8ab0419688fa1e55eaee4aaa406478be51e9bd9a`; deployment `appgdep_6ad85d7bb38081919d43fdebe2716ebd`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_dc2ffda9ef0881919fb0fd4c0c976e9a`. Owner-private audience retained. Live Watch process entry, stage playback and heart-route film verified; existing photosynthesis prediction/reveal and1/3 investigation progress retained. No live console errors. Proof `crash-course-process-films.png`; archive `science-app-process-films.tar.gz`.

## Bioenergetics batch01 — published

Five photosynthesis lessons: reaction/light energy; four rate factors; Higher-only limiting factors/greenhouse decisions; required-practical preparation; glucose uses. Four shared Foundation/five Higher lessons.25 practice/42 independent checks/5 recall groups. App175 lessons/598 practice/1136 checks; Biology62 Separate Higher/54 Trilogy Higher. Official4.4.1.1–.3 checked20October2026; RP6 Biology/RP5 Trilogy, AT1–5. Requirements CSV and Bioenergetics coverage map record statements and evidence; brief in biology-bioenergetics-batch-01-brief.md.

230 automated checks pass. All17 investigation challenges and five learning/practice/check flows passed8/8,9/9,8/8,9/9,8/8. Wrong/retry practice in each lesson; empty ledger inspection rejected. One-repeat practical/prediction resumes after reload. Existing Infection15/15 retained; new5/5. Foundation four-lesson filtering and Trilogy RP5 source label verified. All17 phone layouts fit390px; captions at least24px clear. Console errors empty. Technical QA21October2026, not specialist content review or physical practical competence. Rate/gas/financial data illustrative; inverse-square applies to light approximation, not a universal biological rate law. Stable prior IDs/storage preserved.

Next concrete action: map FIVE respiration/exercise/metabolism lessons. Organisation and Infection reconciliation remains pending under user priority for new lessons. Bioenergetics is partial; specialist/constructed/freehand/physical evidence remains outstanding.

Published21October2026 06:19:25UTC: source `664bffe23da827151d6ed4041e7d7c5c37937dc1`; deployment `appgdep_6ad8595f49948191996d2d050da6f5ab`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_040ee4e12f008191ad309a68d5c6e7ac`. Owner-private audience retained. Live five-lesson list/Higher scope verified; chloroplast3D, ledger gating and saved light prediction/reveal after reload verified. Keyboard rotation/zoom/reset works; live console errors empty. Archive `science-app-photosynthesis.tar.gz`; proof `crash-course-photosynthesis.png`.

## Infection and response batch03 — published

Five separate-only lessons: Making monoclonal antibodies; Using monoclonal antibodies; Detecting plant disease (all Higher only); Plant pests & deficiencies; Plant defence responses (both tiers).20 practice/44 checks/5 recall groups. App170 lessons/573 practice/1094 checks; Biology57 Separate Higher/49 Trilogy Higher. Infection15 separate Higher/12 separate Foundation/10 Trilogy at either tier.44 grouped evidence rows map8461 4.3.2.1/.2 and4.3.3.1/.2, with Higher restricted only where the specification says so. Both-tier plant lesson excludes Higher detection/identification. Shared TMV/rose teaching credited without duplicating earlier IDs.

All16 investigations (45 state comparisons plus production sequence/three assay conditions) and five full flows8/8,9/9,8/8,9/9,10/10 pass locally. Each practice wrong/retry; wrong production order, target line without control, nitrate mechanism and barrier mechanism reject. Production stage2/selected-next-action draft survives Foundation switch, return to Higher and reload; invalid-control assay stage2/wrong prediction resumes. Independent first wrong stays locked after reload; plant-defence retake9/10. Existing10/15 retained, rises15/15; Foundation12/12, Trilogy10/10 and no new lessons exposed there. Old specialised-cell interaction exercised after new namespace collision was fixed before publication; explicit separatebio namespace and dispatch parse regression added.223 technical tests pass. All16 phone task layouts width390; paired diagrams24px clear of titles. Technical checks are not specialist content review or real diagnostic/research competence.

Files: content-biology-special-infection.js; special-infection-models/meshes/figures/visuals.js; widgets-special-infection.js; tests/special-infection.test.js and existing integration/count tests. Brief `curriculum/biology-infection-batch-03-brief.md`; mappings `biology-special-infection-requirements.csv`; evidence in Infection coverage map. Model limitations stated: symbolic scales/binding, supplied T/C assay, non-diagnostic plant signs, matched ion comparisons, targeting not a zero-side-effect guarantee, historical early-expectation evaluation and non-universal mimicry. Source checked20October2026; RHS corroborates aphid sap feeding. No credentials or real student data in records.

Next concrete action: reconcile Infection shared/separate statements and remaining independent evidence, retain pending Organisation audit, then map and build the first FIVE Bioenergetics lessons. Do not mark all Biology/science complete. No unrestricted constructed-response or specialist review claimed.

Published20October2026 08:52:43UTC: source `ea469ff47a5279f4b0ce97dce821d2d729b0b1fe`; deployment `appgdep_6ad72bcb10a881918ac12bd34eaec362`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_11484264a7a881918fff1d080e759c43`. Owner-private audience retained. Live15-lesson list with Higher/both-tier eligibility labels and coverage-review message verified. Supplied antibody assay3D/2D and stage3/positive prediction resume after reload verified; console errors empty. Keyboard rotation/zoom/reset verified locally.223 automated tests and diff whitespace checks pass. Archive `science-app-special-infection.tar.gz`; proof `crash-course-special-infection.png`.

## Infection and response batch02 — published

Five shared both-tier lessons: Vaccination; Antibiotics & painkillers; Antibiotic resistance; Discovering & testing drugs; Clinical trials & evidence.21 practice/42 independent checks/5 recall concepts. App165 lessons/553 practice/1050 checks; Biology52 Separate/49 Trilogy.38 grouped evidence rows map4.3.1.7–.9 plus resistance8461 4.6.3.7/8464 4.6.3.4. Cross-credit recorded on future Inheritance register; no duplicate lesson. Topic10 shared lessons, remains partial for separate-only content and evidence audit.

All16 activity challenges and five full flows8/8,8/8,9/9,8/8,9/9 pass locally. Practice wrong/retry each; incorrect prediction, mutation-by-need, preclinical/clinical confusion, participant-only blinding and highest-dose choices reject. Network resumes step2/6 infected; resistance step1 and numerical10/50 draft retained after reload. Clinical first wrong numeric answer20 remains locked on reload; retake8/9. Existing5/10 retained, rises10/10; route/tier switches retain shared completion.215 automated tests pass. All16 phone task layouts fit390px; wrapped-caption collision fixed (24px), tables51px clear. Detailed evidence/limits in Infection coverage map and batch02 brief. These are technical checks, not specialist review or physical research competence.

New files `content-biology-medicines.js`, `medicine-models.js`, `medicine-meshes.js`, `medicine-figures.js`, `medicine-visuals.js`, `widgets-medicines.js`, `tests/medicines.test.js`; existing registry/content/widget/source/CSS integrations preserve stable earlier IDs/storage key. Models include specific immune response, actual contact links, bacterial survival/descendants, sources and staged evidence. Dose/screening/outcome data are original, not clinical predictions; perfect-protection network assumptions and selection limits stated. NHS guidance checked to support prescribed-course wording without a guarantee of complete killing or directed mutation.

Next concrete action: FIVE separate-only lessons—monoclonal production, monoclonal uses (both Higher only), plant disease detection/identification (Higher), plant pathogens/aphids/ion deficiencies and plant defences (both tiers). Verify exact paragraph scope first. Shared Infection statement/evidence reconciliation and Organisation audit remain outstanding. Independent constructed explanations and specialist review not claimed.

Published20October2026 08:28:42UTC: source `65376c3fc6cc1388b43975866e568d1ad33a6c1b`; deployment `appgdep_6ad7262acd58819184e0c8dccc2e7d5e`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_29c708f8358081918a043ebe103a434e`. Owner-private audience preserved. Live10-lesson list and new vaccination3D/labelled2D verified;40%/step5/8 infected state resumes after reload. Error console empty.215 automated tests and diff whitespace checks pass. Proof `crash-course-medicines.png`; archive `science-app-medicines.tar.gz`.

## Infection and response batch01 — published

Five shared both-tier lessons: Pathogens & transmission; Viral diseases; Bacterial diseases; Fungi & malaria; Human defence systems.20 practice/41 independent checks/5 recall concepts. App160 lessons/532 practice/1008 checks; Biology47 Separate/44 Trilogy. Official8461/8464 sections4.3.1.1–.6 checked20October2026.44 authoring evidence rows map named examples, spread/control, damage and defences; three detail-level independent evidence gaps recorded explicitly. Brief and coverage map linked below.

All16 investigation challenges/40 comparisons and five full flows8/8,8/8,8/8,8/8,9/9 passed locally. Each practice wrong→retry passes; missing/wrong model prediction rejects. Unrecorded fungal-state prediction/reveal restores after reload. Independent first wrong remains locked after reload; defence retake8/9. Shared completion5/5 retains across Separate Higher→Trilogy Foundation. All16 model task layouts checked at390px, document width390, with3D/labelled2D switches. New tests validate real finite geometry, state-dependent effects, route/tier eligibility and draft/first-answer retention. Technical QA is not specialist content review or full assistive-technology certification.

Organisation preliminary review found no new obvious missing teaching, but full statement/evidence reconciliation has NOT been completed; earlier handover remains an outstanding audit. This batch proceeds with the user's next-five priority. Do not mark Organisation complete. Physical/constructed/freehand/specialist evidence remains separate. Infection is partial: vaccination, antibiotics/painkillers, resistance, drug development and separate-only requirements remain planned.

Next concrete action: FIVE shared lessons on vaccination; antibiotics and painkillers; antibiotic resistance; drug discovery/preclinical testing; clinical trials/dose/efficacy. Verify exact statements and avoid implying planned separate-only Higher monoclonal content is shared.

Files: `science-app/dist/content-biology-infection.js`, `infection-models.js`, `infection-meshes.js`, `infection-visuals.js`, `widgets-infection.js`; registry/content/widget/source integration; `science-app/tests/infection.test.js`; `curriculum/biology-infection-batch-01-brief.md`, `biology-infection-requirements.csv`, `biology-infection-topic-coverage.md`. Existing lesson IDs/storage key and owner-private Site identity retained.


Publication20October2026 at07:51:40UTC: source `3e20f398581f751479ea092cf19a4e0176d5bdde`; deployment `appgdep_6ad71d74c20881918d6658bf62a59756`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_67428b5c5da48191be93c04189793e2b`. Existing owner-private audience preserved. Live five-lesson list, viral model3D/2D, saved prediction/reveal after reload and empty error console verified. Local labelled diagram clearance15px and keyboard rotation/zoom/reset verified.207 automated tests and `git diff --check` pass. Archive `science-app-infection.tar.gz`; proof `crash-course-infection.png`.

## Organisation batch06 — published

Five shared both-tier plant lessons: Inside a leaf; Roots: water & mineral uptake; Xylem & the transpiration stream; Stomata & the environment; Phloem & translocation.20 practice/44 independent checks/17 recall concepts; app155 lessons/512 practice/967 checks. Biology42 Separate/39 Trilogy; Organisation23 shared.29 grouped requirements mapped to exact question IDs against8461/8464 sections4.2.3.1/.2. See plant requirements CSV and batch06 brief.

All17 investigation challenges and five full flows8/8,8/8,10/10,10/10,8/8 pass locally, including each practice wrong→retry. Wrong tissue/guard-cell counts reject; energy-off uptake,6mm potometer reading and first three sample fields resume after reload. Numeric first wrong answer stays locked after reload;9/10 retake recorded. Earlier15/23 completion retained then20/23. All17 phone task layouts fit390px.202 automated tests cover finite meshes, front-facing hollow tubes, real stomatal pore, bubble direction, data/units and saved progress. Published and live phone verified; release evidence below. Next Organisation statement/evidence reconciliation, then map FIVE Infection and response lessons. Physical/freehand/constructed/specialist evidence remains outstanding.

## Organisation batch05 — published

Five shared both-tier lessons: coronary heart disease/treatments, health/interacting diseases, lifestyle/risk/costs, health-data workshop and cancer.20 practice/40 independent checks/20 recall concepts; app150 lessons/492 practice/923 checks. Biology37 Separate/34 Trilogy; Organisation18 shared.27 grouped objectives mapped against8461/8464 sections4.2.2.4–4.2.2.7. See `curriculum/biology-health-requirements.csv` and batch05 brief.

All16 investigation challenges completed locally, all five full lesson flows8/8. Wrong histogram and spread-order feedback, same-start statin comparison and mid-spread reload verified; earlier10/18 completion preserved then15/18 after all five.194 automated tests pass including finite actual3D artery/tumour meshes, camera-facing artery cutaway geometry, data boundaries and progress restoration. All16 local phone layouts fit390px; numeric first-answer lock survives reload on a7/8 retake, and graph stimuli render. Live practice wrong→retry verified. Final release published and live phone verified; earlier release superseded for camera-facing artery cutaway. No specialist review, unrestricted written evaluation or freehand graphing claimed. Next FIVE plant organisation/transport lessons after statement mapping.

## Heart visual redesign — published

Replaced the old four-ellipse heart with paired labelled SVG and extruded3D cutaways sharing chamber/vessel coordinates. Chamber selection and left-wall comparison preserve saved IDs/progress.187 automated tests pass; local browser wrong-answer, comparison, reload and view controls verified. Counts unchanged145/472/883. Published and live phone verified; production source519f7e6. Publication evidence: `curriculum/heart-visual-redesign.md`. Specialist review remains outstanding. Next content batch remains FIVE health/treatment/risk/data/cancer lessons.

## Organisation batch04 — published

Latest user preference: FIVE lessons per batch, recorded20 October2026. The heart; Double circulation; Blood vessels; Blood components; Lungs and gas exchange are shared both-tier lessons. Added20 practice/41 checks/20 recall concepts; app145 lessons/472 practice/883 checks. Biology32 Separate/29 Trilogy; Organisation13 shared lessons. Source4.2.2.2/.3 statement mapping has19 grouped objectives.3D chamber/wall, vessel cross-section, blood-component and alveolus models have labelled diagrams; route, valve, pacing and gas exchange use purposeful schematics/counterfactuals. Counts/colours/scales are symbolic; blood is never blue.

All17 investigation tasks completed locally, including wrong wall/route feedback, valve comparisons, all vessel builds, four blood roles and conserved gas/adaptation comparisons. Leaky-valve outcome, pulmonary-artery route step and mid-gas transfer survive reload. Full flows8/8,8/8,8/8,9/9,8/8; practice retry, numeric/choice first-answer locks, neutral blood diagrams and existing5/13→10/13 completion retained across Combined Foundation/Separate Higher.186 tests pass on final source; diff check passes, including actual3D mesh builds and neutral-diagram checks. Published and live phone verified; see release evidence below. Specialist, independently constructed/freehand, real-micrograph and physical microscopy/drawing evidence remain outstanding. Next FIVE health/treatment/risk/data/cancer lessons after mapping.

## Organisation batch03 — published

Food tests and Investigating pH & amylase are shared both-tier lessons. Added8 practice/18 checks/8 recall concepts; full app140 lessons/452 practice/842 checks. Biology27 Separate/24 Trilogy; Organisation8 shared lessons. Food preparation/fair controls and four reagent/method comparisons use saved positive/negative observations with written labels and3D/2D tubes. Amylase planning,30s fresh-iodine sampling across three pHs, repeat mean/relative rate, student-plotted points and interval-based conclusions implemented. Practical numbers/ATs distinguish Biology4/5 from Trilogy3/4. Simulations do not establish school practical competence.

178 automated tests pass on final logic; diff check passes. All9 investigation tasks completed. Wrong heating/reagent/endpoint/exact-time claims reject;60s positive sample, assay outcomes and wrong0.015 graph point survive reload. Full flows9/9 and9/9; practice retry, numeric/choice first locks and shared pathway/tier completion verified. A local tube material colour reference error was fixed; all four tests then re-exercised, including matching Discover models and clearer transparent lipid negative versus cloudy positive. Published and live phone verified; see release evidence below. Next heart/double circulation, blood vessels/flow and blood components; remaining Organisation sections and specialist/constructed/freehand/physical evidence distinct.

## Organisation batch02 — published

Three shared both-tier lessons: Digestive enzymes & products, Enzyme conditions & rates, Bile & fat digestion. Added12 practice/26 independent checks and10 recall concepts. Full app138 lessons/444 practice/824 checks; Biology25 Separate/22 Trilogy, Organisation6 shared lessons. Enzyme food/product/production mapping; temperature/heat-cool/pH comparisons with saved measurement records; amount/time and matched-endpoint rate calculations; same-volume fat subdivision in3D/2D and controlled bile/lipase comparisons implemented. Rates/curves are original illustrations, not measurements or universal optima.

174 automated tests pass. All10 investigation tasks completed; wrong food, missing sites, hotter-always-faster, wrong rate and emulsification-as-digestion reject/correct. Two enzyme sites, heat/cooled20°C sample and bile no-lipase comparison persist after reload. Full flows9/9,9/9,8/8; practice retry, numerical/choice first-answer locks and shared3/6 new completion across Separate Foundation/Combined Higher verified. Source notes correct4.2.2.1 shared scope. Published and live phone verified; see release evidence below. Next food-test then amylase-pH practical preparation; later heart/blood. Organisation remains partial, independent constructed/freehand/physical-practical and specialist review outstanding.

## Organisation batch01 — published

Cell biology audit reconciled84 grouped learning/evidence objectives and1 source-wording record across19 lessons. No material missing teaching was found. The linked8461 official PDF confirms percentages; isolated HTML “percentiles” is treated as a source discrepancy resolved for authoring, not an extra lesson requirement. Independent writing/freehand, physical practical and specialist review remain outstanding.

Three shared both-tier Organisation lessons: Cells to organ systems, The digestive route, How enzymes work. Added12 practice/24 checks; full app135 lessons/432 practice/798 checks. Biology22 Separate/19 Trilogy lessons across Cell biology and Organisation. Buildable tissues/organ contributions, stepped tract and molecule-size absorption comparisons, and rotatable active-site fit/product/reuse model with accessible2D equivalents. All10 investigation tasks and all three full flows8/8 passed; practice wrong/retry, numerical answers, independent first-answer locking, unfinished model reload, shared Foundation3/3 and isolated3-question Organisation assessment resume verified.169 automated tests pass on final application inputs; diff check passes. Published and live phone verified; see release evidence below.4.2.1 taught,4.2.2.1 partial; all remaining Organisation content explicitly planned. Next named digestive enzymes/products/sites, conditions/rates, bile and practical preparation.

## Biology batch08 — published

Three separate-only both-tier lessons cover culturing, bacterial growth calculations and inhibition-zone investigation. App total132 lessons/420 practice/774 checks on the full content bank; Biology19 Separate versus16 Trilogy lessons. Batch Higher13practice/26checks; Foundation12/25. Standard-form expression is the only Higher card/item extension in growth; both-tier population arithmetic remains available.3D/2D media/lid models, conditional doubling snapshots, keyboard ruler/diameters and repeated-treatment/control comparisons implemented. School context,25°C maximum, aseptic reasons and practical2 preserved; no clinical treatment, hands-on competence or real growth simulation claimed.

165 automated tests pass. All10 investigation tasks completed with wrong aseptic/tape/37°C plan, doubling, radius/diameter and clinical-overclaim paths corrected. Sealed/inverted plan, both growth comparisons and9–31mm ruler/recorded diameters survive reload. Full Higher checks8/8,9/9,9/9; Foundation growth4cards and8/8 with HT items absent. Practice retry, first numeric/choice locking and neutral plate figure verified. Combined excludes all3 culture lessons and shows16/16; returning to Separate retains saved3/3 growth investigation and19-lesson state. All10 live investigation tasks pass at390px without horizontal overflow;24px diagram caption/title clearance,3D/2D switching and keyboard ruler verified. Viewport reset. Next reconcile Cell biology statements/evidence gaps before Organisation;8461percentile wording and practical/written/specialist evidence remain unresolved.

## Biology batch07 — published

Active transport and Compare cell transport add8 practice/17 independent checks. App total129 lessons/407 practice/748 checks; Biology16 shared both-tier lessons.3D/2D symbolic membrane model compares root-ion uptake, gut-sugar absorption and reversed page layout with/without respiration energy.5 case comparisons test mechanism, gradient/substance evidence and passive versus active energy dependence. Model counts are conservative but not biological rates/ATP budgets; disabling the active route does not imply motionless particles.

161 automated tests pass. All8 investigation tasks and both full lesson flows completed9/9 and8/8. Missing predictions/comparison evidence and wrong direction/process receive feedback; mid-energy comparison and tested mechanism outcomes survive reload. Practice wrong/retry, independent first-answer locks, neutral assessment figures and shared Separate Higher16/16 progress verified. All8 live investigation contexts pass at390px without horizontal overflow, with24px caption/title clearance.3D/2D switching and source notes verified; viewport reset. Specialist, written/freehand and physical practical gaps remain;8461 percentile wording still unresolved. Next separate-only culturing and practical preparation; then audit Cell biology coverage before Organisation.

## Biology batch06 — published

Two shared both-tier osmosis lessons add8 practice and17 independent checks. App total127 lessons/399 practice/731 independent checks; Biology14 lessons.3D/2D plant-cell model contrasts dilute/concentrated/equal surroundings, keeps the cell wall fixed, changes cell contents and distinguishes net movement from balanced water exchange. Practical preparation requires fair-test choices, consistent blotting and a prediction; calculates a mean, signed percentage and signed mass-change rate; plots5 points and estimates zero mass change. Trilogy RP2 and Biology RP3 remain explicitly distinguished. Original data are illustrative, not school practical evidence.

157 automated tests pass. All7 investigation tasks completed, including incorrect direction, wet weighing, wrong loss sign and incorrect graph point with feedback/correction. Concentrated step4 and wrong plotted0 at0.2 mol dm⁻³ survive reload. Full lesson checks8/8 and9/9; practice retry, numeric/choice first-answer locks, independent graph visibility and shared Foundation progress14/14 verified. All7 live tasks pass at390px without overflow;3D/2D views, graph and300px table inspected. Final mobile labels/source notes verified and viewport reset. Official8461 online wording 'percentiles' versus8464 'percentages' is recorded as unresolved in the objective map; percentile coverage is not claimed. Specialist, independent writing/freehand and physical practical evidence remain outstanding. Next active transport and process comparison; separate-only culturing after that.

## Biology batch05 — published

Three shared both-tier lessons cover diffusion/rate, surface area to volume and exchange surfaces. App total125 lessons/391 practice/714 independent checks; Biology12 lessons. Added12 practice and28 independent checks. Particle exchange conserves32 particles, reverses with the gradient and continues both ways at equal concentration. Temperature/area comparisons reset starting conditions. Rotatable3D cubes compare geometric SA:V and the unreached core at equal illustrative depth; matching2D fallback retained. Five counterfactual exchange models connect lungs/intestine/gills/roots/leaves to area, path and maintained gradients. No real diffusion rate or organ anatomy is claimed.

153 automated tests pass. All13 investigation tasks completed; wrong prediction/capacity/calculation/explanation gates and corrections pass; temperature comparison, depth0.125 and removed-gill states survive reload. All3 full flows score9/9,9/9,10/10; practice wrong/retry, first independent answer locking and route/tier retained completion12/12 verified. Keyboard depth control and2D fallback checked. Live phone verification passed across5 diffusion,3 cube sizes and5 exchange contexts with no horizontal overflow.3D/2D switching and keyboard controls work; viewport reset. Specialist, written/freehand and prior practical gaps remain. Next osmosis and its required-practical preparation, then active transport and separate-only culturing.

## Biology batch04 — published

Two shared both-tier stem-cell lessons add8 practice and18 independent checks. App total122 lessons/379 practice/686 checks; Biology9 lessons. Interactive lineage challenges require prediction, self-renewal and comparison of differentiated outcomes, including restricted adult bone-marrow pathways. Treatment/plant comparisons distinguish genetic matching, contamination, potential benefit and retained traits. Full browser flows score8/8 and10/10; wrong answers/retries, first-answer locks, unfinished model reload and shared Foundation progress9/9 verified.148 automated tests pass. No specialist review, clinical success, physical practical or independently written evaluation is claimed.

Live6-context phone verification passed at390px: document width390 and24px caption/title clearance. Shortened selected-answer labels after phone inspection; final live copy verified. Next diffusion/exchange surfaces.

## Cell type visual refresh — published

Latest user priority: improve unclear animal/plant/bacterial diagrams and assess3D. Rebuilt all three as genuine rotatable Three.js cutaways, with separate boundary layers, distinct organelle shapes, stationary initial view, zoom/reset/keyboard controls, a structure selector with names/functions and a white selected-structure arrow. Rebuilt the paired2D schematics, retaining anonymous assessment evidence. Existing120 lessons/371 practice/668 checks and all IDs/progress remain unchanged.144 tests pass. All19 type-specific structure options,2D/3D mode preservation, saved selection, keyboard rotation/zoom and Chemistry renderer regression pass in browser; unlabelled independent check remains hint-free and scores8/8. Final live/mobile evidence recorded in `curriculum/cell-visual-redesign.md`.

Published and live/mobile verified. Next concrete action: resume stem cells. This is technical visual QA, not specialist validation of model anatomy or proportions.

## Biology cell batch03 — published

Latest priority: next Biology lessons with central interactive models. Chromosomes/DNA/genes and Mitosis/cell cycle implemented, shared both tiers/routes. Added8 practice and18 independent checks. App total120 lessons,371 practice and668 checks; Biology7 lessons. Nested genetic-material views and region highlighting; preparation/growth and copying controls; exact-identity DNA-copy allocation; prediction before cytoplasm/membrane division. Equal totals with missing chromosome identities reject. Models preserve drafts/stage across reload. Technical checks pass:141 tests, full8/8 and10/10 browser flows, wrong/retry gates, locked independent answers, shared progress7/7 and390px diagrams/controls. All first-batch practical/drawing and specialist review gaps remain.

Published and live verified. Next concrete action: stem cells. Evidence in `curriculum/biology-cell-topic-coverage.md` and batch03 brief.

## Biology cell batch02 — published

Latest priority: keep progressing; interactive models are central. Added shared both-tier Specialised cells and Cell differentiation lessons,8 practice and19 independent checks. App total118 lessons,363 practice and650 checks; Biology5 lessons. Six adaptation models support prediction, present/absent toggles, process stepping/scrubbing and causal explanations. Differentiation requires exploring animal and plant branches plus adult repair. Saved controls, outcomes, compared states and explanations persist.138 automated tests pass; all nine model contexts, wrong paths, keyboard controls, mid-branch resume, phone layouts and both independent checks pass (11/11 and8/8). Source maps and specialist/practical/written limits remain distinct.

Published and live verified. Next concrete action: chromosomes and cell cycle. See `curriculum/biology-cell-topic-coverage.md` and batch02 brief for evidence.

## Biology cell batch01 — published

Latest priority: move onto Biology. Three shared both-tier lessons implement cell types, animal/plant structures and microscopy, with12 practice and26 checks. App total116 lessons,355 practice,631 checks. Cell biology remains partial; rest of Biology and Physics are planned. Biology course/reference labels and course-map availability follow the discipline; shared/existing Chemistry progress is preserved.135 tests pass; all three lesson flows and3-question topic assessment pass in-browser, including wrong-answer/retry/resume and390px layouts. Detailed evidence and publication checkpoint: `curriculum/biology-cell-topic-coverage.md`.

Published and live verified. Next concrete action: cell specialisation and differentiation. Specialist review, physical practical1 and unrestricted written/drawing evidence remain outstanding.

## Full Chemistry completion run — published

Latest instruction: build all Chemistry lessons without intermediate checks with the user. All43 remaining lessons are implemented and technical QA has passed. Total113 lessons,343 practice items and605 independent checks across all ten Chemistry topics. Course totals: Combined Foundation71/Higher81; Separate Foundation95/Higher113. Full release record: `curriculum/CHEMISTRY_COMPLETION.md`.

131 automated tests pass. All40 new Organic/Analysis/Atmosphere/Resources explanation and investigation flows were exercised, all practice/check sequences scored100%, and all40 models were checked at390px without horizontal overflow. The3 equilibrium lessons passed end-to-end; expanded shift checks score8/8. Wrong-answer/retry, formula draft persistence, explorer state, independent-answer locks and Higher exclusion were verified. Polymer structures stack on phones. Registers and168 new objective rows resolve against actual source IDs. These checks are technical QA, not specialist review.

Release succeeded and live verification passed. Next concrete action: specialist content review and mapped independent written/freehand/practical evidence improvements. Biology, Physics and other subjects remain planned. No additional unimplemented Chemistry teaching batches are recorded.

## Current position

113 Chemistry lessons are implemented and privately published across all ten topics:13 Atomic,16 Bonding,13 Quantitative,16 Chemical changes,7 Energy,8 Rates/equilibrium,13 Organic,7 Analysis,6 Atmosphere and14 Resources. There are343 practice and605 independent-check items before route/tier filtering.

Live Site: [Crash Course](https://gcse-science-atom-lab.newbuddy32.chatgpt.site).

| Area | Actual status |
|---|---|
| Atomic structure | 13 implemented/published lessons; a 51-objective statement audit now records representative evidence and remaining gaps. |
| Bonding | Thirteen shared and3 separate-only lessons published. Main chapter teaching is implemented;42-objective audit records independent-evidence gaps. |
| Quantitative Chemistry | Thirteen lessons with35-objective audit; remaining written/graph/symbolic evidence gaps explicitly recorded. |
| Assessment improvements | Numeric electron-count and weighted-mass checks; extra atomic evidence questions; mixed question types in lesson/topic/review flows. |
| Topic/course organisation | Explicit course/topic registry, topic selector, independent topic/route/tier assessment and review histories. |
| Existing progress | Existing atomic IDs and submitted answers preserved; legacy single-topic runs migrate to the atomic topic. Additional checks need additional evidence. |
| Chemical changes | Sixteen lessons include aluminium extraction and Higher half-equation writing with five independent full-entry questions. 43-objective statement audit records recall, independent written and school practical evidence gaps. |
| Energy changes | 4 shared lessons: transfer, profiles, practical preparation and Higher-only bond energies. Separate cells/batteries, fuel cells and Higher fuel half-equations implemented; 31-objective audit records explicit remaining evidence gaps. |
| Rates and extent | 8 lessons include reversible reactions, dynamic equilibrium and Higher condition shifts. Practical/written/freehand evidence remains outstanding. |
| Organic / Analysis / Atmosphere / Resources | 13 /7 /6 /14 lessons implemented and technically checked. Teaching sequence mapped; broader constructed evidence and specialist review remain. |
| Biology |19 Cell biology lessons audited plus13 Organisation lessons implemented. Organisation remains partial; other topics planned. |
| Physics | Heading index only; lessons not started. |
| Other subjects | Subject-aware planned screens; specifications/options and lessons not mapped/built. |
| Specialist review | Not performed. Technical QA and content mapping are recorded separately. |
| Student accounts / cross-device sync / reminders | Not implemented. Progress and review dates remain browser-local. |

## Accepted decisions

- Product name: Crash Course.
- Support both AQA Trilogy (8464) and separate Biology/Chemistry/Physics (8461/8462/8463), with Foundation/Higher filtering.
- Subject changes must update the studio, course header and course map.
- Use purposeful interactive visuals with the requested polished Cinema 4D-style aesthetic where it helps learning.
- Work in coherent batches, keep original explanations/questions and mark partial topics honestly.
- Preserve stable saved IDs; scope learning records to the correct topic, course/pathway and tier.

## Source and publication

Project: `science-app/`. Site project ID: `appgprj_6ad1be5897a88191909a03ad57857103`.

Last verified live source before batch03: `f76ce61dd4ca18fed137d5ad3b46ce2cec5acd45`.

Last verified deployment before batch03: `appgdep_6ad22510ddcc8191ba13f369d41c7341`.

Previous batch publication: **succeeded, 16 October 2026 at 12:51:19 UTC**. Source commit: `94477123729e0681eaedfb4e780191d7b4843877`. Deployment: `appgdep_6ad21db78d2c8191ad718534eee6283c`. Saved version: `appgprj_6ad1be5897a88191909a03ad57857103~appgver_7694506beff081919501ab24495eb548`. Preserve the existing Site identity and audience; refresh actual state when resuming.

## Verification in this batch

Rates03:118 Node tests pass; syntax/diff checks pass. Dilution uses pre-acid g/dm³ stock fraction; both-tier keys/refs and mixed slider/numeric persistence verified. Browser Combined Foundation full flow8/8; all4 tasks completed. Wrong plan controls, raw gas volumes instead of rates, higher-yield interpretation and dilution/endpoint choices receive feedback; correct retries pass. Draft choices, numeric entries and70% cloudiness survive reload; independent first answer locked. Practice wrong numeric retry verified. Separate Higher retains shared completed work.390px gas and turbidity layouts inspected without horizontal overflow/caption collision; keyboard range endpoints produce opacity0 and1; console errors empty. Gas-syringe apparatus is a valid alternative to handbook collection apparatus; original illustrative data, not copied practical results. No physical practical competence, unrestricted method writing, full screen-reader/physical-device or specialist-review claim. Privately published and live verified.

## Curriculum records

- `curriculum/atomic-requirements.csv`: 51 mapped atomic requirements/objectives; 8 assessment enhancements and cross-topic applications are explicitly recorded.
- `curriculum/atomic-topic-coverage.md`: updated atomic mapping and audit summary.
- `curriculum/bonding-topic-coverage.md` and `bonding-requirements.csv`: full chapter authoring reconciliation with42 mapped objectives and explicit evidence gaps.
- `curriculum/briefs/bonding-batch-01.md` `bonding-batch-02.md`, `bonding-batch-03.md`, `bonding-batch-04.md` and `bonding-batch-05.md`: objectives, misconception handling, interactions, assessment rules and QA evidence.
- Subject/topic/lesson registers reconciled against the source: 6 subject entries, 25 science topics, 113 implemented lessons.

- `curriculum/chemical-changes-requirements.csv`:43 mapped objectives, with recall/writing/practical evidence gaps; validated against runtime IDs.
- `curriculum/energy-topic-coverage.md` and `briefs/energy-batch-01.md`: first Energy batch and future scope.

- `curriculum/quantitative-topic-coverage.md` and `briefs/quantitative-batch-01.md`: two Quantitative batch mappings, QA evidence and remaining scope.

## Next authorised action

Next FIVE: coronary heart disease/treatments; health and interacting diseases; lifestyle risks; interpreting health data; cancer. Map4.2.2.4–4.2.2.7 before authoring. Preserve existing progress.

## Platform limits to retain

No cross-device sync or real student accounts. Recall scheduling is rule-based. Some objectives still have only representative or recognition-based assessment. Non-science exam boards, options and set texts remain undecided. Scientific models are simplified, and simulations do not replace school practical activities.

Current batch02 publication: **succeeded,16 October2026 at13:22:40 UTC**. Source commit `f76ce61dd4ca18fed137d5ad3b46ce2cec5acd45`. Deployment `appgdep_6ad22510ddcc8191ba13f369d41c7341`. Saved version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_597812309e988191b410832f2a0aaaf1`. Live tab refreshed and sidebar chevron verified. Proof: crash-course-dropdown-spacing.png.

Batch03 publication: Succeeded16 October2026 at14:34 BST. Source daa36ceea51f9af87cb35309a82417ca58eae09b; deployment appgdep_6ad227da97b081918921c7bf4360553b; saved version appgprj_6ad1be5897a88191909a03ad57857103~appgver_499145ecaca88191b53375113a011680. Existing owner-private audience preserved. Live refreshed37 lessons,8 Higher quantitative lessons; limiting lesson opened. Screenshot crash-course-limiting-preview.png.

Batch04 publication: Succeeded16 October2026 at14:43 BST. Source2c3172424f3825302057e9e90aa085c27e66f89b; deployment appgdep_6ad22a0183508191912d9828c677d443; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_ffe9edc88cec81918b7f77d77159a26f. Audience remains owner-private. Live refreshed39 lessons and percentage-yield opened. Screenshot crash-course-yield-preview.png.

Batch05 publication: Succeeded16 October2026 at15:03 BST. Source93848cbf5553c824b2d3d28931bd2efbbd1a0057; deployment appgdep_6ad22e84d4a481919bd4069a4de7c331; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_267de74ef0588191a6fb1bd5c0588624. Existing owner-private audience preserved. Live refreshed42 lessons and molar-concentration opened. Screenshot crash-course-volumes-preview.png.

Audit/Changes publication: Succeeded16 October2026 at15:12 BST. Source cb60f4c510e9d0feb98a442652a373ca950df6ea; deployment appgdep_6ad230b379188191b390d26c929a41f7; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_bd30fd6ffb388191968b9de99dbc9f49. Existing owner-private audience preserved. Live refreshed44 lessons and Chemical changes opened. Screenshot crash-course-changes-preview.png.

Changes batch02 publication: Succeeded16 October2026 at16:52 BST. Source3a966871dbc57842475c575f42efaa1b3a83ee8d; deployment appgdep_6ad2484b91b88191b40136673a518f67; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_ba056011b41c819181faa9f068d0ed98. Existing owner-private audience preserved. Live refreshed46 lessons and electron-redox opened. Screenshot crash-course-electron-redox-preview.png.

Changes batch03 publication: Succeeded16 October2026 at18:41 BST. Source99a4f11012a812f2b76acef8a954d8934a012641; deployment appgdep_6ad261cfbb108191b34513a6e176eb6d; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_214e75ded0b48191a57060b6947a57b7. Existing owner-private audience preserved. Live refreshed48 lessons and neutralisation-salts opened. Screenshot crash-course-acids-preview.png.

Changes batch04 publication: Succeeded16 October2026 at18:54 BST. Source9c876a3bd8e5e2136fe77628b7bc77c823f6cf82; deployment appgdep_6ad264b338a0819196d947bf9ea92f38; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_fb711538459c81919112f64305589fc3. Audience remains owner-private. Live refreshed and pH lesson opened. Screenshot crash-course-ph-preview.png.

Changes batch05 publication: Succeeded16 October2026 at19:30 BST. Source4e06e21155dd4ac0f74931ca8cc504225b4edaea; deployment appgdep_6ad26d3815ac8191a80b3e9033b91c78; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_c5ae752a2b348191a4558b09d18c4c00. Audience remains owner-private. Live refreshed52 lessons and titration opened. Screenshot crash-course-titrations-preview.png.

Changes batch06 publication: Succeeded16 October2026 at19:48 BST. Source9718f9322cb97501bfdd74d9293ed8d016e8a503; deployment appgdep_6ad271896fd08191b4612c5ce9fe3cb3; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_eb75fdea7b348191b4e67a23ecbbd7ef. Existing owner-private audience preserved. Live refreshed54 lessons, corrected course-map coverage, molten lesson opened. Screenshot crash-course-electrolysis-preview.png. Initial publication5f092b2673725fd44928a67caa3415328b426bfc was superseded to correct stale map copy; focused electro tests passed after correction.

Interactive-model audit publication: succeeded16 October2026 at20:10 BST. Source4580800c30ce080d3326c57363adcbf159a09953; deployment appgdep_6ad276ac8b2481918cd60076beb0840f; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_9524e1e081088191b331085990e477c5. Owner-private audience preserved. Live refreshed, zoom/reset controls and diamond model verified; live console clean. Proof: crash-course-model-audit-preview.png.

Family design publication: succeeded16 October2026 at20:32 BST. Source e561fb26eae8592d2957d7bfb51ce5fa78e26dec; deployment appgdep_6ad27bd8e4f88191a4c70af5fd5df807; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f5462b039f4881919a60347dcc8f905d. Owner-private audience preserved. Live serif font loading, cream/navy/coral tokens and diamond lesson verified; no horizontal overflow. Screenshot: crash-course-family-design-preview.png.

Soft-logo release: succeeded16 October2026 at20:36 BST. Source f384a79a4544a441a102aaa05b04259522579238; deployment appgdep_6ad27cbae76c819189d346e79778ccbc; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_8c999a31c5ec8191895544f4b3cd7b81. Rounded badge/curved strokes and wordmark spacing visually verified on desktop and340px phone, live refreshed. Owner-private audience preserved. No behaviour change; no regression-suite rerun needed for this SVG/CSS refinement. Screenshot crash-course-soft-logo.png.

Book-logo redesign: succeeded16 October2026 at20:41 BST. Source053863daa42e4af4c252dd6226ec7208dc6ff9d8; deployment appgdep_6ad27dc667b88191baad20a76c54ec41; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_609034d31718819184f37e4025a2e10b. Warm open-book emblem and serif/sans wordmark replace the double-C badge. Desktop and340px phone checked; accessible home label retained. Owner-private audience preserved; live verified. Screenshot crash-course-book-logo.png. SVG/CSS-only change; no lesson/scoring/progress changes or additional regression suite.

Current priority: science model/diagram colours matched to the family palette. 81 automated checks passed; syntax checks passed for the adjusted diagram helpers and diff whitespace check passed. Desktop3D/2D ionic palette consistency checked; metallic positive-ion labels are navy; electrolysis charge labels and ionic colours visually checked; pH12 remained labelled purple. Phone390 model/layout checked with no horizontal overflow; console clean. No new lesson content, question IDs or progress changes. Privately published and live verified; see curriculum/science-palette-update.md.

Science palette publication: succeeded16 October2026 at20:47 BST. Sourcee4afabd5569d84fb20374386a4973ad79f103ddb; deployment appgdep_6ad27f5f89948191a087c1a68aa1ebd7; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_6973c6a68ff48191a989a2ccb47d5466. Owner-private audience preserved. Live lattice refreshed and coral/blue-grey colours visually verified. Screenshot crash-course-science-palette.png.


Changes batch07 and interface cleanup publication: succeeded18 October2026 at20:34 BST. Source e57a802ce6498ca2416f84db3950900cc82b1c0e; deployment appgdep_6ad51f1ad98c81919df300ba1563371a; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_cd328e4cddc08191ab2ea7657d145cea. Existing owner-private audience preserved. Live lesson list shows14 Separate Higher Chemical changes lessons; aqueous lesson opened and console clean. Screenshot crash-course-aqueous-preview.png. Next aluminium extraction and fuller Higher half-equation construction. Specialist review and school practical fulfilment remain outstanding.


Changes batch08 publication: succeeded18 October2026 at20:18:46 UTC. Source1762c9ee1d88e47205393613f8c4cf9652ee3159; deployment appgdep_6ad52996ef1081919ecaa71b0718a07f; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_b00ac44ee28081919181432c315425f9. Existing owner-private audience preserved. Live list confirms16 Separate Higher Chemical changes lessons with Higher-only writing label; aluminium lesson opened; console clean. Screenshot crash-course-aluminium-preview.png. Next Chemical changes statement reconciliation, then Energy changes. Specialist review and school practical fulfilment remain outstanding.


Energy batch01 / Chemical changes audit publication: succeeded18 October2026 at20:31:33 UTC. Source0506ad12c50c16edb51252b08604c4eceb85cd4b; deployment appgdep_6ad52c969940819186bfb0385d16699e; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_76a358964020819182ca019d21f9561d. Existing owner-private audience preserved. Live fifth topic and both lessons verified; profile builder opened; console clean. Screenshot crash-course-energy-preview.png. Next required temperature-change practical preparation and Higher bond-energy calculations. Specialist review and school practical fulfilment outstanding.


Energy batch02 publication: succeeded18 October2026 at20:45:49 UTC. Source1b25b5365a2dfb722fc7003a8b5ccab2f0fe9432; deployment appgdep_6ad52fef3f28819188f7cae866b72295; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_93f14df2e4248191add9acca7d7bac63. Existing owner-private audience preserved. Live Energy list confirms4 lessons with Higher-only bond label; both new lessons opened; console error log empty. Screenshot crash-course-bond-energies-preview.png. Next separate-only cells/batteries and fuel cells, then statement reconciliation. School practical and specialist review remain outstanding.


Energy batch03 publication succeeded19 October2026 at07:06:58 UTC. Source03cc4f6aa70493b31924401cd5f8133884640ae0; deployment appgdep_6ad5c1848ebc8191967d3676b978e5ec; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_7bbc4a9ae29481919233c6cfcd0e78d1. Existing owner-private audience preserved. Live7-lesson Separate Higher list verified; all3 new lessons opened and fuel evaluation mounted; console error log empty. Screenshot crash-course-fuel-cells-preview.png. Next Energy statement reconciliation and evidence enhancements, then rates. Specialist review and school practical fulfilment outstanding.


Energy audit / Rates01 publication succeeded19 October2026 at07:17:08 UTC. Source97a9f59222172fbe507f045f1d7c23fe9b5e5c7a; deployment appgdep_6ad5c3e577b08191a54a9f0e8f8a4eb0; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_1129dffff23c819189a048dab9f9f660. Existing owner-private audience preserved. Live topic06 list and both new lessons verified; collision activity mounted; console errors empty. Screenshot crash-course-rates-preview.png. Next graphs/tangents and catalysts, then required practical preparation. Specialist review and school practical fulfilment remain outstanding.


Rates02 publication succeeded19 October2026 at07:26:05 UTC. Sourcef090f0d964cafdb07537348619fae78e34a3e405; deployment appgdep_6ad5c5ff72188191b2ee720cf2cd251e; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_8ef4372b49a8819196cafa7bdb7fed44. Existing owner-private audience preserved. Live4-lesson list verified; both new lessons opened; tangent interaction mounted and keyboard tilt worked; console errors empty. Screenshot crash-course-tangent-preview.png. Next concentration practical preparation (gas-volume and colour/turbidity), then reversible reactions/equilibrium. Specialist review and school practical fulfilment outstanding.


Rates03 publication succeeded19 October2026 at07:35:53 UTC. Source3d76ef775e7033ff308282663614edef04640e0c; deployment appgdep_6ad5c84b369081918736f571e75b299d; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_fa1e5957ab1481918b033d144a8f006f. Existing owner-private audience preserved. Live5-lesson rates list and new lesson verified; turbidity activity mounted and slider worked; console errors empty. Screenshot crash-course-rate-practical-preview.png. Next reversible reactions/energy reversal and closed-system equilibrium; Higher condition shifts follow. Specialist review and school practical fulfilment outstanding.


## Full Chemistry release evidence

Published19 October2026 at12:03:37 UTC. Source commit `404048a74261944f289f092305ba10d34faad393`; deployment `appgdep_6ad607077b5c8191b62bda71282cdfdb`; saved version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_7592b8d33d748191b6102f560c089f8a`. Existing owner-private audience preserved. Live topic map verified all ten topics and113 Separate Higher lessons; final NPK lesson mounted and correct investigation feedback verified. Proof: `crash-course-chemistry-complete.png`.


## Biology batch01 release evidence

Published19 October2026 at12:16:44 UTC. Source commit `cfebb14cbe942b4ad0ede7eb2b4ced93416c6249`; deployment `appgdep_6ad60a1d26248191965ebc85cacb93c4`; saved version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_26cd286e8dc88191833825aee21b8ab2`. Existing owner-private audience preserved. Live Biology list verified all3 lessons and cell-type investigation mounted; console errors empty. Screenshot: `crash-course-biology-cells.png`.


## Biology batch02 publication

Published19 October2026 at12:29:45 UTC. Source `fba829eeec7970451977d75b8683ac29bf3df003`; deployment `appgdep_6ad60d2a0bb08191b01337895cffd722`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_d0045c3aed8c8191897b59a4068642a6`. Existing owner-private audience retained. Live list verified5 Biology lessons; root-hair feature toggle and keyboard process scrubber verified. Console errors empty. Proof: `crash-course-cell-adaptations.png`.


## Biology batch03 publication

Published19 October2026 at12:43:51 UTC. Source `8b6c293b5ceb45188802226b4703493696d7d31d`; deployment `appgdep_6ad61078956c8191b003c4766e27e23b`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_e34b38ee9b808191a4bc929330e9ba51`. Existing owner-private audience retained. Live list verified7 Biology lessons; growth, DNA copying, complete-set allocation and correct feedback verified. Console errors empty. Proof: `crash-course-cell-cycle.png`.


## Cell visual refresh publication

Published19 October2026 at13:00:24 UTC. Source `6645dbd735915e665e9bfa9d6a9eb4a40b0b95d7`; deployment `appgdep_6ad614514560819190693ce086d220ce`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_2db64f908bac8191a17b22dfa933cecf`. Existing owner-private audience retained. Live3D cutaways/structure selector and2D switching verified. All3 types at390px: scroll width390 and24px canvas/title clearance. Viewport reset after QA. Console errors empty. Proof: `crash-course-cell-cutaways.png`.


## Biology batch04 publication

Published19 October2026 at13:35:33 UTC. Source `8346bf4c016e9c740332ad88c2352b1504f2ba9d`; deployment `appgdep_6ad61c944c3481919b977aa827bbf73b`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_6a5d820110588191bc15e54c1dd7a9a7`. Existing owner-private audience preserved. Live9-lesson Biology list, all6 model contexts at390px, final compact selected-answer copy and clean console verified. Viewport reset. Proof: `crash-course-stem-cells.png`. Initial dc484229 release was superseded only to shorten mobile answer labels;148 tests passed on final source.


## Biology batch05 publication

Published19 October2026 at13:46:17 UTC. Source `6766503b335f91c69b5dfd169ec82cb365fbf473`; deployment `appgdep_6ad61f1a3760819192ac8165abb46647`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_7ac14ac0bfdc8191be18695d9233384c`. Existing owner-private audience preserved. Live12-lesson Biology list and all5 diffusion/5 exchange contexts verified at390px: document width390 and24px diagram caption/title clearance. Cube1/2/4 sizes and keyboard penetration controls work on phone; canvas300px wide, paired2D core responds and has24px caption clearance. Final model-note refs correct, console errors empty, viewport reset. Screenshot `crash-course-diffusion.png`.


## Biology batch06 publication

Published19 October2026 at14:40:39 UTC. Source `e869293e5912cd1db48ca4717264adb49b4a69d9`; deployment `appgdep_6ad62bd3c88c81919ae008e4ab21093d`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_7ccddf0bc9f481919d1dd9484a762c33`. Existing owner-private audience preserved. Live14-lesson Biology list and all7 investigation tasks verified at390px with document width390; practical table300px wide;3D/2D osmosis and graph caption/title clearance24px. Final shortened selected-answer labels and osmosis-specific source/model notes verified. Console errors empty; viewport reset. Screenshot `crash-course-osmosis.png`. Initial143aa890 publication superseded only for mobile label refinement;157 tests passed on final source.


## Biology batch07 publication

Published19 October2026 at18:43:00 UTC. Source `46a902198f7648c64f4b8f3e1f5e04714cb56054`; deployment `appgdep_6ad664a2c9f0819196cbc5a412d92fdd`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_db0f14397f248191a47f376398796a60`. Existing owner-private audience preserved. Live16-lesson Biology list and all8 investigation contexts verified at390px: document width390,24px caption/title clearance.3D/2D switching, readable selected labels, energy/route controls and correct4.1.3.3 model/source notes verified. Console errors empty, viewport reset. Screenshot `crash-course-active-transport.png`.


## Biology batch08 publication

Published19 October2026 at18:56:39 UTC. Source `a0259fa7f97b978b9605723905387548fc97d0cf`; deployment `appgdep_6ad667d6e4b48191a7476813d9222fb4`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_ff2a8e1c50f88191bc91615ebeb2b83e`. Existing owner-private audience preserved. Live19-lesson Separate Biology list and all10 investigation tasks verified at390px: document width390, diagram caption/title clearance24px.3D/2D media switching, readable native controls, both supplied growth comparisons, keyboard20/22mm ruler measurements and area/control tasks passed. Console errors empty; viewport reset. Screenshot `crash-course-culturing.png`.


## Organisation batch01 publication

Published19 October2026 at19:25:39 UTC. Source `31e64aef2ad84399337638b611dc8bf0e0bf2fe5`; deployment `appgdep_6ad66ea155f88191ae79c46a9550dd46`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_97df0552ed3c8191a2c396ff30df06f8`. Existing owner-private audience preserved. Live all10 investigation tasks pass at390px with document width390. Tissue and enzyme3D/2D switches, readable controls and enzyme diagram24px caption/title clearance verified. Final source/model notes4.2.2.1 and partial topic scope correct. Console errors empty; viewport reset. Proof `crash-course-organisation.png`.


## Organisation batch02 publication

Published19 October2026 at19:46:01 UTC. Source `fcb71773acc43d06ecc8f3c1fed229195442387c`; deployment `appgdep_6ad673664d7c8191b81c8dbee6e42342`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_54cfa9f5c7908191b6a8e806496660a8`. Existing owner-private audience preserved. All10 new tasks exercised live at390px: document width390, readable selected values,3D/2D fat switching and24px diagram caption/title clearance. Final selected enzyme sites now show navy fill plus checkmark; verified at390px after publication. Initial85419f2 release superseded solely for visible production-site selection and cache tags. After final propagation, reload restored saved investigations. Six-question topic-assessment scope verified without starting a new run. Console errors empty; viewport reset. Proof `crash-course-digestive.png`.


## Organisation batch03 publication

Published19 October2026 at20:58:12 UTC. Source `8eac0fc1864075c2b2cb61f0e7ce5e2abbee83f7`; deployment `appgdep_6ad6845479bc81919407d6bea476fa10`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_5216fc63d0508191918770f0804a7161`. Existing owner-private audience preserved. Live QA completed20 October2026: all9 investigation tasks at390px, document width390, readable native controls,3D/2D food models and24px caption/title clearance. All four assays compared positive/negative controls. All three pH sampling series, repeats and graph passed. BiologyRP5/AT1,2,5,8 notes verified; earlier local Trilogy/food route notes verified separately. Console errors empty, viewport reset. Proof `crash-course-practicals.png`.


## Organisation batch04 publication

Published20 October2026 at06:17:19 UTC. Source `461657baa28c585f5d81a54de9e55c167f295563`; deployment `appgdep_6ad7075ea47c8191b976608229e039b4`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_f6c716c6cd2c81919b3da6833cce010f`. Existing owner-private audience preserved. All17 investigation tasks exercised live at390px: document width390. Heart/blood3D/2D views,24px heart diagram caption/title gap, pacing patterns, all vessel constructions and gas/adaptation outcomes verified. Selected lung explanation was shortened after phone inspection; final short copy and width390 verified. Initialce3d0fbc release superseded only for shorter selected labels/cache tags.13-question available-lesson topic scope verified without starting a new assessment. Final source notes4.2.2.2/.3/source date20October correct. Console errors empty; viewport reset. Proof `crash-course-circulation.png`.


## Organisation batch05 publication

Published20 October2026 at06:53:18 UTC. Source `2fec4dc3b9b65efcc5f0a35aee9714388f2d9f0b`; deployment `appgdep_6ad70fd0f64481918edcba5e9a7ec5fa`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_64033c1114c881918dd4fc8785936fea`. Existing owner-private audience retained. Live phone390px confirms corrected open artery/stent and all five lesson views, including health chart and cancer2D/3D.18-question available-lesson assessment scope verified without starting a run. Console errors empty; viewport reset. Proof `crash-course-health.png`. Initialce1b64b2 deployment superseded only for default artery-cutaway visibility.


## Organisation batch06 publication

Published20October2026 at07:29:00 UTC. Source `461d9f4aa416dcc7ed94595b3976c5459dbfbcea`; deployment `appgdep_6ad7182b53cc81919e49fd6c69791b92`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_f6b6df2f5b8c819196b19c7b53622e93`. Existing owner-private audience preserved. Live phone390px confirms23 available lessons, leaf-layer slider and tissue recording, all five new lesson models, phloem2D/3D and correct source refs/date/limitations.23-question available-lesson scope verified without starting a run. Console errors empty; viewport restored. Proof `crash-course-plants.png`.


Published21October2026 at08:18:24UTC. Source ffdaf03d0adca2d8025ccc7c31f948bb7d52f78d; deployment appgdep_6ad8752b4a10819192ca162f36348930; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f6e508568fa081918c408e956408b0e3. Owner-private audience preserved. Live ten-lesson list and accommodation inline autoplay/Loop verified. Proof crash-course-brain-eye.png; archive science-app-senses.tar.gz.


Published21October2026 at11:59:11UTC. Source2c910b9e3775d57dbf8edb687b3a77b9d3176d75; deployment appgdep_6ad8a8fc64488191b7dee34c23ad53bc; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_db69c68534c48191b198236d3d760124. Owner-private audience preserved. Live15-lesson list, insulin looping process and glucose graph-card handoff verified; console errors empty. Archive science-app-endocrine.tar.gz; proof crash-course-endocrine.png.


Published21October2026 at12:36:36UTC. Source0828b0e4099c7b4f03f1153f22c48e112a4217ff; deployment appgdep_6ad8b1c549f48191858e85cf12588f68; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_90cfe27eb7548191baa90b8d3bd6ff02. Owner-private audience preserved. Live20-lesson list, Higher scope and kidney inline autoplay/Loop verified; console errors empty. Archive science-app-renal.tar.gz; proof crash-course-renal.png.

## Latest incoming Maths additions — original author evidence

## Maths: Edexcel 1MA1 Geometry and measures — batch 01 (5 lessons); on GitHub `main`, not published

A new fourth Maths topic (`maths.geometry`), now available on the course map. Probability and Statistics remain planned.

**Batch 01 lessons (both tiers):**
- angle facts and parallel lines (G1, G3, G6);
- polygons and quadrilaterals (G3, G4);
- area and perimeter (G16, G17, G14);
- circles, arcs and sectors (G9, G17, G18; calculator);
- volume and surface area (G16, G17; calculator).

There are 10 new skills (126 in all) and five investigations. Every generated question carries its own diagram, drawn by the new `geomfig.js` from the same numbers as the prompt. Coverage: G3, G4, G16 and G18 covered; G1, G6, G9, G14 and G17 partial; the rest are mapped to batches 2–3 in `curriculum/maths-geometry-requirements.csv`. That file's statement wording is paraphrased and was not re-fetched from Pearson in this batch; re-check it against the PDF at review.

**QA:**
- 527 automated tests pass (`tests/maths-geometry.test.js`: 9 tests; answers re-solved from printed labels and dimensions, and angles and areas measured from the drawn figures).
- All eleven Maths browser walk-throughs pass: 86, 68, 62, 94, 69, 64, 78, 53, 70, 46 and 77 checks, 767 in total. Flow 1 varies by one check depending on which random items appear. Flows 4 and 9 were updated because Geometry is no longer "Planned".
- QA found and fixed a quadrilateral skill whose distractors were also correct answers, a wrong kite statement, duplicate "x" labels and a wrong cut-and-move picture; see the brief.
- Brief: `curriculum/briefs/maths-geometry-batch-01.md`.

**Cache:** maths modules are at `20261022-maths-r7`. **Publishing needs a global version bump.**

**Not done:**
- Site publication;
- specialist review.

**Next:** Geometry batch 2 — Pythagoras, trigonometry and exact values, transformations, constructions and loci, bearings and scale drawings.

## Maths: Edexcel 1MA1 Ratio, proportion and rates of change — batches 01–02 (8 lessons); on GitHub `main`, not published

A new third Maths topic (`maths.ratio`), now available on the course map. Every R1–R16 statement is taught and practised; see `curriculum/maths-ratio-requirements.csv`.

**Batch 01:**
- ratio notation and fractions (R3, R4, R6, R8);
- sharing and combining ratios (R5);
- proportion, best buys and conversions (R7, R10, R11, R1);
- percentages, change, original value and simple interest (R9);
- compound interest, growth and decay (R16, calculator; Higher: iterative processes).

**Batch 02:**
- direct and inverse proportion equations and graphs (R10, R13, R14; Higher: powers, roots and formulae);
- scale drawings, maps and similar shapes (R2, R12; Higher: area and volume factors);
- compound units and rates of change (R1, R11, R14; Higher: R15 chords and tangents).

There are 17 new skills (116 in all) and eight investigations. Money answers must show 2 d.p.; unsimplified ratios are marked as partly right.

**QA:**
- 518 automated tests pass (`tests/maths-ratio.test.js`: 9 tests, including independent re-solves of every printed prompt).
- A new test renders every Maths worked-example visual through the studio's dispatch chain and fails on name clashes (the defect class behind the `machine` and `bars` console errors found in browser QA).
- All ten Maths browser walk-throughs pass: 87, 68, 62, 94, 69, 64, 78, 53, 70 and 46 checks, 691 in total.
- Briefs: `curriculum/briefs/maths-ratio-batch-01.md` and `-02.md`.

**Cache:** maths modules are at `20261022-maths-r7`. **Publishing needs a global version bump.**

**Not done:**
- Site publication;
- specialist review.

**Next:** Geometry and measures (G1–G25).

