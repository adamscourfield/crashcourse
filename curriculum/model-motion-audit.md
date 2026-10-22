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
