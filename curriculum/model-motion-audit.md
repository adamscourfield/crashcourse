# Process-motion audit —21October2026

## Scope and judgement

All175 implemented lessons were inventoried by lesson/widget/Discover scene and assigned a representation decision in `model-motion-register.csv`. `model-motion-source-inventory.json` lists75 scene/visual/widget source modules and counts their existing controls/render calls. This is a source-level learning-design review, not a fresh browser certification of all unchanged scenes or specialist science review. The earlier54-lesson audit remains historical evidence, not evidence for today's175.

Main finding: the shared animation loop rotates a model as a whole. Rotation helps inspect spatial structure, but does not explain movement of substances, direction, sequence or change over time. Its control now says **Rotate model / Stop rotation**. A distinct **Watch process** entry opens an optional worked process film beside the existing3D/2D teaching model.

18 films are bound explicitly to24 lessons.59 lessons retain structure inspection;25 retain evidence/data comparison;67 retain controlled stage/investigation progression. Reasons and source scene keys are recorded per lesson. Rotatable cell anatomy, lattices, molecules, carbon structures, surface/size models and chromosome structure remain inspectable. Quantitative ledgers, rate/health graphs, greenhouse profits, diagnostic tests and risk/benefit evidence retain their controlled comparisons. Predicted-outcome experiments, assay timing, drug trials, growth/time steps, chemical synthesis choices and other supplied datasets retain manual advancement so animation cannot run past the student's decision or imply a measured rate.

## Added films and limits

| Film | Lesson bindings / purpose | Limits |
|---|---|---|
|Simple distillation|Separation; organic distillation: vaporise → condenser → collect|Explicit simple worked example, not a fractional-column replacement; existing fractional model retained.|
|Sodium/chlorine transfer|Ionic bonding|Outer electron only; pair not lattice; track not literal trajectory.|
|Solid/liquid/gas motion|States of matter|Separate state examples, no heating curve or expanding particles.|
|Molten PbBr₂ electrolysis|Process and molten electrolysis|Ions move in melt; electron transfer at electrodes; no aqueous rule substitution or Higher half equations.|
|Successful collision|Collision theory|Abstract A/B with preserved particles; not every collision reacts.|
|Dynamic equilibrium|Dynamic equilibrium|Both reaction-event directions at equal rate; closed system; equal amounts not a general requirement.|
|Chromatographic separation|Rf and practical|Two components with illustrative relative motion; not a named-mixture forecast.|
|Cell cycle|Cell-cycle lesson|Five stage snapshots, not equal biological durations; existing chromosome identities preserved.|
|Diffusion|Diffusion lesson|Random movement both ways; net high→low. Illustrative tracks/counts.|
|Osmosis|Osmosis lesson|Water crosses both ways; larger solutes stay put; fixed reservoirs simplify volume changes.|
|Active transport|Active transport|Carrier movement lower→higher, energy input stated; not protein-scale mechanics.|
|Double circulation|Heart and double-circulation lessons|Complete body/right-heart/lungs/left-heart/body tracer. Route movie rather than heartbeat mechanics. All routes operate continuously; blood is never blue.|
|Enzyme cycle|Enzyme action; digestive enzymes|Complementary binding, breakdown, product release; enzyme unchanged; not every reaction mechanism.|
|Transpiration stream|Root uptake; xylem|Soil→root→xylem→leaf→air, no return-to-soil arrow; symbolic route and time.|
|Translocation|Phloem|Source leaf→root sink example; other sinks/directions stated; reset is not return flow.|
|Antibiotic resistance|Resistance|Existing cohort data: initial18S/2R→0S/2R survivors→0S/8R descendants; selection before reproduction.|
|Monoclonal production|Separate Higher production only|Six existing snapshots: source, stimulation, fusion, selection, cloning, purification.|
|Photosynthesis|Photosynthesis reaction|Light energy input and material reactants/products; overall explanatory sequence, not biochemical kinetics.|

## Playback and progress contract

Every film starts paused, with Play/Pause, Replay, keyboard-operable scrubber, previous/next stage,0.5×/1×/1.5× speed, optional loop and text transcript. The dialog traps focus and returns it to its opener. Close/Escape, lesson changes and background visibility stop playback. No autoplay even without a reduced-motion preference; still stepping/transcript works without playing. Stages and SVG descriptions identify what happens independently of colour. Film time/scale assumptions are explicit. Videos are generated vector animations, not downloaded video assets;3D inspection remains available underneath.

These are worked examples, explicitly separate from the current experiment controls. Watching/scrubbing does not write any lesson progress, change answers, reveal an experiment result or earn completion. Entry is available only in Discover/Investigate; absent in practice and independent checks. Stable lesson/question/concept IDs and storage format unchanged; no migration needed.

## Source checks

Official AQA8461 [Cell biology](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology), [Organisation](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/organisation),8462 [Chemical changes](https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/chemical-changes) and [Rate/equilibrium](https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/the-rate-and-extent-of-chemical-change) rechecked21October2026 for direction/route/process scope. Other existing figures retain prior mapped content and limitations. Existing lesson qualification/tier eligibility controls access; no new assessed specification coverage claimed.

## Verification

236 automated tests pass (six added film tests): bounded timelines, labelled finite SVG frames, distinct beginning/middle/end, bindings to real lesson IDs, retained structural models, transported species, full heart route, no Foundation half-equation leak, and resistance survivor-before-reproduction order. All24 lesson entry points, every film's stage captions and independent-check exclusion exercised in the browser. All18 unique film layouts checked at390×844: document390px; dialog/client content356px, no horizontal overflow. See `model-motion-browser-evidence.json`. Actual pause holds the frame; optional loop wraps from the end; speed/replay/keyboard End/Home/stage controls work. Closing a playing diffusion film leaves the unfinished investigation text/settings unchanged. Live validation recorded after publication below. Technical QA is not a new specialist review or full assistive-technology certification.

## Future lessons

`BUILD_PLAN.md` and `LESSON_TEMPLATE.md` now require representation choice, stage/conservation/direction/reset reasoning, accessible playback, explicit experiment relationship, independent-check isolation and progress testing. Next lessons remain respiration/exercise/metabolism after this visual review; Organisation/Infection evidence reconciliations remain pending.

## Publication

Published21October2026 06:36:58UTC: source `8ab0419688fa1e55eaee4aaa406478be51e9bd9a`; deployment `appgdep_6ad85d7bb38081919d43fdebe2716ebd`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_dc2ffda9ef0881919fb0fd4c0c976e9a`. Owner-private audience retained. Live Watch process entry, stage playback and heart-route film verified; existing photosynthesis prediction/reveal and1/3 investigation progress retained. No live console errors. Proof `crash-course-process-films.png`; archive `science-app-process-films.tar.gz`.


## Current default supersedes earlier playback guidance
See [inline-process-defaults.md](inline-process-defaults.md): process films now open inline, autoplay and loop by default, with reduced-motion and manual model access retained. Earlier optional/modal/paused descriptions are historical.


Brain/eye batch02 adds3 process films across3 new lesson bindings,21October2026:31 films/37 bindings total; inventory190 lessons. Brain structure and brain investigation evidence retain static/controlled comparison views. See biology-homeostasis-batch-02-brief.md.


Endocrine batch03 adds4 process films and4 bindings:35 films/41 bindings across195 lessons. Structure/data cards can explicitly opt out of the lesson film while process cards retain auto-loop defaults. Diabetes remains controlled evidence comparison. See biology-homeostasis-batch-03-brief.md.


Renal batch04 adds5 films/bindings:40 process films/46 lesson bindings; inventory200 lessons. Original water, filtration, liver, ADH and dialysis functional films; amount tables/plots and treatment comparisons remain controlled evidence. See biology-homeostasis-batch-04-brief.md.


Reproduction batch05:205 lessons,44 films/50 bindings. Four new process loops; contraception remains controlled evidence. Original illustrative hormone graphs, linked ovary/uterus and IVF stages use symbolic limitations. See batch05 brief.


Growth batch06:210 lessons;52 films/54 bindings. Eight films/four bindings. Teaching-card processFilm selects exact process; missing override safely falls back. Per-card process:false retains evidence; reduced motion and independent-stage exclusions preserved. Eight film views,20 cards and15 tasksets checked at390px; see batch06 brief.


Inheritance01:215 lessons;56 films/57 bindings. Four new films across three lessons. DNA/strategy evidence remains direct. Chromosome units versus DNA-copy content and egg-product limitations stated. See first Inheritance brief and technical QA evidence.


Inheritance02:220 lessons;58 films/59 bindings. Two Higher separate films. Nucleotide, mutation edit, expression and Punnett evidence remain direct.15 investigation layouts/20 card visibility checks and editable-grid resume verified. See batch02 brief.


Inheritance03:225 lessons;59 films/60 bindings. One sex-chromosome alternative-contribution film. Independent cross construction, editable pedigree, disorder grids and screening comparisons stay direct.20 card visibility,15 phone tasksets, saved headers and pedigree contrast/retake verified; see batch03 brief.


Inheritance04:230 lessons;62 films/63 bindings. Three generational/gene-transfer films; two-habitat cohort comparisons, matched genotype data and application evidence stay direct.20 card visibility,15 phone tasksets and cohort reload verified; see batch04 brief.


Inheritance05:235 lessons;67 films/66 bindings. Five new films: tissue culture, embryo splitting, adult nuclear transfer, conditional speciation and mineral replacement. History, rock layers and tree comparisons stay direct.20 card visibility,15 phone tasksets and cloning-choice reload verified; see batch05 brief.


Transition06:240 lessons;69 films/68 bindings. Two new loops: resistance selection/reproduction and community dependencies; controlled treatment and water/pollinator experiments stay direct. A duplicate imported process-player module was fixed; singleton regression test and1 player across15 investigation/20 teaching views verified. See transition06 brief and boundary-browser-evidence.json.

Ecology02:245 lessons;74 films/72 bindings. Five loops:feeding, delayed predator/prey, existing day/night response, generated quadrat placement and transect station measurement. Student graph construction/field data stay direct.15 phone activities/20 cards with one player, seven process cards checked Loop; graph/quadrat/transect saved edits verified. See Ecology02 brief and ecology-browser-evidence.json.

Ecology03:250 lessons;79 films/76 bindings. Carbon/water transfer, decomposition, anaerobic digester and lipase endpoint films; eight process cards default inline autoplay/Loop, reduced motion paused. Saved ledger/experimental/graph/distribution tasks stay direct.15 phone activities/20 cards fit390px without duplicate player. Edited account, milk endpoint draft and hidden Higher map restore verified. See Ecology03 brief and recycling-browser-evidence.json.

Ecology04:255 lessons;83 films/80 bindings. Four worked causal films for water-pollutant effects, peat release, forest conversion and greenhouse warming. Eight process cards autoplay/Loop; reduced-motion policy paused. Species/dependency, pollution, area/cost and anomaly evidence stay direct.20 cards/15 investigation sets checked390px/single player; saved warming draft restored. See impacts-browser-evidence.json and batch04 brief.

Ecology05:260 lessons;86 films/82 bindings. Feeding-level, extracellular digestion and organic-material allocation worked loops; four process cards autoplay/Loop, reduced-motion paused by policy. Budget/pyramid/allocation/supply controls remain direct.20 cards/15 investigation sets checked390px/single player; hidden pyramid and food-scenario saved drafts verified. See feeding-browser-evidence.json and batch05 brief.

Ecology06:263 Science lessons plus15 Maths;90 films/85 bindings. Four worked loops: energy allocation, suitable mesh selection, fungal production, insulin purification. Five process cards autoplay/Loop; reduced-motion paused by policy. All12 cards/9 investigation sets checked390px/single player; fisheries hidden draft restored. See production-browser-evidence.json. Roadmap completion is not specialist/evidence closure.

Physics Energy01:268 Science plus15 Maths.95 films/90 bindings. Five inline process cards autoplay/Loop with reduced-motion pause; controlled experiments direct.420 tests, five full flows,35 mobile views and saved kinetic draft checked. See physics-energy-browser-evidence.json. Not specialist/physical evidence closure.

Physics Energy02:273 Science and21 Maths;100 films/95 bindings. Five looped worked process cards and direct controlled models.441 tests, five full journeys,39 mobile views, saved draft, tier/course and Maths delayed-callback repair verified. See physics-transfer-browser-evidence.json.

Electricity01:278 Science and25 Maths;104 films/99 bindings. Symbols direct; four process cards autoplay/Loop with reduced-motion pause.456 combined tests; five full journeys,38 mobile views, saved reverse-diode draft and independent numeric keys verified. See electricity-browser-evidence.json. Not specialist/physical evidence closure.

Electricity02:283 Science and25 Maths;109 films/104 bindings. Five looping process cards and direct controlled models.465 tests, five full journeys,35 mobile views, savedLDR draft, old progress/course isolation and sensor routing repair checked. See circuits-browser-evidence.json. Not specialist/physical evidence closure.

## Physics Electricity batch03 — implemented, published and GitHub updated

Five shared lessons: AC/DC sources; mains wiring/safety; electrical power; appliance energy; National Grid. AQA8463/8464 4/6.2.3.1–.2 and4/6.2.4.1–.3 checked22October2026. Grid ideal-transformer VpIp=VsIs is Higher only: required in Trilogy6.2.4.3; separate Physics4.7.3.4 cross-topic scaffold only. Separate transformer construction/turns ratio and static electricity remain later. Nominal UK50Hz/about230V, wire roles/colours, live/open-switch hazards, P=VI/I²R and E=Pt/QV explicitly taught. No live-mains activity or numerical real fault-current/trip-time model.

Science288 lessons:113 Chemistry150 Biology25 Physics; Maths30/78 skills preserved.1068 practice/1843 checks before filters; new21/31, including1 Higher practice/check. Separate Higher288/Foundation251; Trilogy Higher215/Foundation197. Electricity15 shared; Grid Higher card/task/questions filtered and completion requirements revalidated by tier.114 films/109 bindings. Five process cards default inline autoplay/Loop; reduced-motion paused. Models compare AC/DC frequency, nominal conductor pairs, electrical power, timed energy and fixed-power transmission/cable losses; all settings and bounded interpretation required. Toy grid voltages/1Ω line are not real transmission ratings. Input energy is not automatically useful output; AC height normalised, not230V peak.

478 combined automated tests passed after merging Maths graph commit0d9de13. Five complete browser journeys:6/6 each, Grid7/7 Higher. Wrong comparison, numeric value/reason, experiment prediction, practice and premature progression rejected.37 phone views at390px fit with one player;5 process cards default Pause/Loop. Grid200V/2000W/wrong prediction7 restores across reload/TrilogyFoundation/back. Foundation Grid4cards/3tasks versus Higher5cards/4tasks;15-lesson Foundation assessment inventory verified. DC comparison corrected to display DC. Maths graph table/five plotted points accepted; no console errors. Prior Energy/Ecology browser completion counts were not confirmed in final shared-origin state; stable IDs and restore tests pass. Technical checks are not specialist review, unrestricted drawing/writing, real apparatus competence or complete statement/evidence audit. Existing progress IDs retained; incoming Maths-r6 cache preserved; global20261022-electricity03r2. Published22October2026 at18:32:25UTC to the existing owner-private Site; audience unchanged. Sites source8d02227618c32e6f8af2df878584e80651c86bfb; deployment appgdep_6ada56a6a78c8191b43622ec49dbcf4b; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_ae5843fd72688191adec497e2182b877. Archive science-app-electricity03.tar.gz; proof crash-course-electricity03.png. Live Electricity15 inventory and Grid process/Pause/Loop verified; Maths Number15/Algebra15 including five new graph lessons verified, no live console errors. Incoming Maths commit0d9de13 merged,30lessons/78skills retained. Runtime/QA canonical commitd026b98 pushed to origin/main; final publication records/proof follow in this handover commit. Next: separate static charge/fields, followed by Electricity statement/evidence reconciliation. Energy/Biology evidence/specialist audits remain open.

## Physics static/particle batch01 — implemented, published and GitHub updated

Five lessons: three separate-Physics both-tier lessons on electron transfer, non-contact forces, radial fields/sparks (4.2.5.1/.2); two shared both-tier lessons on density/practical preparation and state changes/mass conservation (4/6.3.1.1/.2). Official8463/8464 statements checked22October2026. Density preparation covers regular dimensions, irregular displacement and liquid container subtraction, Physics RP5/Trilogy RP17 AT1, not physical certification. Field-pattern recognition/constrained direction choice supports drawing requirements but unrestricted independent field drawings remain evidence gap. Full Electricity statement/evidence reconciliation remains pending; do not mark topic certified/closed merely because all section headings have teaching.

Science293 lessons:113 Chemistry150 Biology30 Physics. Maths30/78 skills preserved.1088 Science practice/1873 independent checks before filters;20/30 added. Separate Higher293/Foundation256; Trilogy Higher217/Foundation199. Electricity18 separate/15 Trilogy; Particle Model2 both routes/tiers.119 films/114 bindings. Five explicit process cards default inline autoplay/Loop, reduced-motion paused; other cards direct. Saved investigations compare four charge cases, four sign pairs, four source/distance fields, six density method/sample cases and ten state-change/mass cases. Qualitative predictions are labelled choices, not invented force values; numeric charge counts/density are illustrative. All cases and bounded interpretation required. Watching cannot finish investigations.

487 combined automated tests passed. Five complete browser journeys6/6; wrong comparisons, numbers/reasons, sequences, predictions, practice and premature actions rejected. Universal conclusions cannot complete models.35 phone teaching/task views at390px fit with one player; exactly5 looping process cards. Negative-source/far/wrong outward-strong prediction restores after reload and hiding in Trilogy/Foundation/back.18 separate/15 Trilogy Electricity and2 Particle assessment inventories verified. Source notes show RP5 versus RP17 by route; no browser console errors. Existing fallback navigation preserved by appending the new topic after Electricity, rather than changing the first available topic. Duplicate diagram/movie gradient IDs discovered visually and fixed with distinct namespaces; corrected particle shading inspected. Charge-frame tests count16 negative markers including in-transit and16 positive markers throughout transfer.

Models use schematic counts, signs, arrow lengths, trajectories and expanded/symbolic timing. Positive-test-charge field convention; no Coulomb law, numerical force/field strength or spark threshold. Spark sequence is conceptual, no high-voltage construction/activity. Density data original, assumptions full immersion/no bubbles/absorption, images not scales. State film keeps12 fixed-size markers in a sealed20g account; changes physical/reversible, open-system evaporation boundaries explicit; no latent-heat/temperature curves yet. Recognition/selected response is not unrestricted writing/drawing, physical apparatus competence, specialist review or full assistive-device certification.

Files: content-physics-matter.js; mat1-models/figures/visuals/films.js; widgets-mat1.js; content/widget/process/registry/source-note integration; no saved-ID migration. Global20261022-matter01r3; Maths-r6 unchanged. Brief physics-static-particles-batch-01.md; statement map physics-static-particles-batch01-requirements.csv; browser evidence science-app/matter-browser-evidence.json. Published22October2026 at18:53:01UTC through existing owner-private Site; audience unchanged. Sites sourcea511f45319a623ae4116eb08e5d4a1e46b4936ff; deployment appgdep_6ada5b7c7cc4819187cc4be878788350; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_bf8f8049f58881918a31113d3fcc12bc. Archive science-app-matter01.tar.gz; proof crash-course-matter01.png. Live separate static inventory/Trilogy hiding, shared Particle state film/Pause/Loop, Maths Number15/Algebra15 and Science restoration verified; no live console errors. Canonical runtime/QA commit8607ace pushed to origin/main; publication records/proof follow in this handover commit. Next Physics batch: internal energy, specific-heat-capacity retrieval/cross-link, latent heat, heating/cooling curves and gas pressure; detailed scope first. Electricity and Energy/Biology full statement/evidence audits and specialist reviews remain open.
