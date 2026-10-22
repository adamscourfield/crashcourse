# Biology Cell biology — batch05: diffusion and exchange

Source-checked/authored19 October2026. Three shared both-tier content assets. Parent owns interactive model implementation, integration, browser verification and publication. No whole Cell biology completion, specialist review or practical fulfilment claim.

## Identity and eligibility

AQA Biology8461 / Combined Science: Trilogy8464, Foundation/Higher. All three lessons map to4.1.3.1 in both specifications, topic `science.biology.cell-biology`:

| Lesson | Stable runtime suffix | Widget | Prerequisites |
|---|---|---|---|
| Diffusion & its rate |diffusion|diffusion-lab|cell-structures|
| Surface area to volume |surface-area|surface-lab|diffusion|
| Specialised exchange surfaces |exchange-surfaces|exchange-lab|diffusion,surface-area,specialisation|

Full runtime prefix `science.biology.cells.`. Official sources read19 October2026: [Biology Cell biology](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology), [Trilogy Biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content). The complete4.1.3.1 scope includes gas/solution definition, membrane exchange, O2/CO2/urea examples, three rate factors, SA:V calculation, single/multicellular implications and all five named exchange contexts. `curriculum/biology-diffusion-requirements.csv` gives15 objective rows with exact independent IDs and source URLs.

## Learning purpose and Discover

Students can explain net transfer despite random two-way motion, apply a specified gradient to biological examples, compare rate factors fairly, calculate/compare SA:V, explain transport/exchange needs, and link adaptations to effects across lungs, intestine, gills, roots and leaves.

Diffusion has five cards: diff:gradient for definition, biological examples and gradient/equal-concentration behaviour; diff:temperature for temperature/area factors; diff:area for area versus overall size. Oxygen enters a respiring cell under its stated gradient; CO2 exits under the converse stated gradient; urea diffuses from cells into plasma for later kidney excretion. No substance is assigned a permanent inside/outside direction. No ATP requirement is asserted for diffusion.

Surface-area has four cards: surface:1 defines cube6a²/a³ and1 cm ratio6:1; surface:2 compares2 cm24/8=3:1 and4 cm96/64=1.5:1; surface:4 connects single-cell sufficiency and multicellular specialisation/transport. Models explicitly distinguish larger total area from lower area per volume and explain why internal distances and tissue demand matter. Area/volume units are kept in the same centimetre system before ratio comparison; area divided by volume has inverse-length dimensions, although school ratios are displayed as x:1.

Exchange-surfaces has five cards/scenes: exchange:lungs,exchange:intestine,exchange:gills,exchange:roots,exchange:leaves. All named examples are present. Alveoli supply area/short path, blood and ventilation; intestinal villi/microvilli supply area, thin route and blood transport; gill filaments/lamellae provide area, thin barrier, close blood and refreshed water; root hairs add soil contact; thin leaves/stomata/air spaces provide gas pathways. Plant blood is never invented. Root water/mineral uptake is explicitly not all labelled diffusion; osmosis and active transport follow in later lessons. Intestinal absorption likewise is not universally assigned diffusion. No required counter-current mechanism recall is added.

## Investigate — parent model contract

Primary owns the three custom widgets; this file provides no generic labs. Suggested evidence-generating challenges:

- diffusion-lab: predict net direction, then observe two-way random crossing. Change gradient, temperature or available area one at a time, compare qualitative net exchange, and explain equal-concentration movement. Do not publish invented precise biological rates/temperature multipliers or imply all particles move one way.
- surface-lab: vary cube size, predict/calculate area, volume and simplified ratio before result; compare absolute surface with surface per volume and infer organism needs. Changing a picture size alone must not silently change its measurement assumptions.
- exchange-lab: select a named organ, manipulate an adaptation or supply/removal condition, predict effect and match a causal explanation. Blood/ventilation apply in their specified animal contexts; plant pathways and uptake mechanisms differ. Models are not controlled experimental records.

Model controls need labels, keyboard access, non-colour particle identities, reduced motion and accessible diagram/text alternatives. Successful completion must require correct prediction/calculation/explanation rather than simply visiting a tab. Parent owns wrong feedback, saved drafts, first-attempt behaviour and completion persistence and must test them after integration.

## Practice / independent check

12 practice items (4 each);28 independent checks (9 diffusion,9 SA:V,10 exchange). IDs `bio.p-diff1..4`,`bio.c-diff1..9`; `bio.p-surface1..4`,`bio.c-surface1..9`; `bio.p-exchange1..4`,`bio.c-exchange1..10`. Ten concepts exported, all `bio.` namespace: diff-direction,equilibrium,factors,examples; surface-calculate,size,organisms; exchange-principles,animals,plants (full prefix repeats diff-/surface-/exchange- as in module).

Practice cube3 cm: area54 cm²,volume27 cm³,ratio2:1. Independent fresh5 cm:150 cm²,125 cm³,1.2:1; another6 cm gives1:1. Numeric tolerance0.001. These values are original mathematical model data, not a fabricated practical. Check questions require supplied-gradient direction, mechanism of each factor, no-net equilibrium, ratio interpretation and context-specific adaptations across all five examples.

Existing engine owns independent first-answer locking, result scoring/remediation, retries and recall scheduling. Topic/course/tier scoping and resume must remain stable. These lessons are shared both-tier and have no internal Higher restriction. Item explanations appear only after an answer according to the relevant practice/check mode.

No freehand diffusion diagram, constructed causal explanation or annotated exchange-organ drawing is automatically graded here. Choice-based causal reasoning is useful but does not certify independent writing of a full large-area/short-path/gradient explanation; that remains a stated assessment limit.

## Misconceptions and scientific model limits

- Every particle travels one way → individual random movement is two-way; net difference follows concentration.
- At equal concentration all particles stop → movement continues without net transfer.
- Temperature creates particles → thermal motion changes, not particle identity/count.
- Increasing area always supplies a bigger organism sufficiently → compare area with volume/demand and distance.
- Lower SA:V means lower total area or no diffusion → ratio and total amount differ.
- Ventilation equals diffusion through the membrane → bulk refresh maintains gradient; membrane crossing is diffusion.
- Every uptake event is diffusion → root water/mineral and intestinal mechanisms require distinctions.
- Plants need blood in roots/leaves → plant transport pathways differ from animal circulation.

Particle counts, speeds, geometry, organs, cell sizes and flow paths are schematic and not necessarily to scale. Units are mathematical inputs when stated; animations cannot establish actual tissue rates. A closed two-compartment illustration differs from an organism continuously supplied/cleared. No home experiment or numbered required practical is introduced by4.1.3.1.

## Skills and verification

Official attached opportunities: WS1.2 diffusion diagrams/models; MS1c and5c ratio/geometry; WS1.5 is listed by AQA as an isotonic/high-energy sports-drink context opportunity but this batch does not claim to assess sports nutrition. Model interpretation and comparison controls are author links. Osmosis/active transport/required plant-tissue investigation are separate upcoming scope.

| Check | Evidence/status |
|---|---|
| Full bounded source scope | Both4.1.3.1 sections checked;15 objectives mapped |
| Factual/numeric review | All three substances, three factors, five organs; cube calculations and gradient directions checked |
| Eligibility / IDs / schema | Local audit passed;3 shared both-tier lessons,12 practice,28 checks,10 concepts |
| Widget/wrong path/resume | Pending parent integration/browser QA |
| Phone/keyboard/reduced motion | Pending parent implementation/checks |
| Specialist review / constructed explanation | Outstanding |
| Publication/live proof | Not performed by asset subtask |

Owned files: `science-app/dist/content-biology-diffusion.js`, this brief, `curriculum/biology-diffusion-requirements.csv`. Parent integrates models, updates registers/status, runs relevant checks and records actual publication. Next concrete scope: osmosis/plant-tissue practical preparation and active transport, preserving required practical numbering differences; separate Biology culturing remains another gated batch.

## Integrated implementation and actual QA

`dist/diffusion-models.js`, `diffusion-figures.js`, `widgets-diffusion.js` and dispatcher/registry imports implement the batch.5+3+5 investigation tasks require predictions/calculations and actual comparisons before completion; all model drafts persist. Cube slider changes the unreached inner cube in3D and2D. Temperature/area reset the same starting counts and retain first-step comparison readings. All13 tasks and3 full flows completed;9/9,9/9,10/10;153 tests passed. Wrong/retry, model resume, locked independent answers and route/tier preserved12/12 complete. Keyboard slider and2D fallback verified. Published and live phone verified; see release evidence below. No specialist, freehand, independent extended response or hands-on practical completion claimed.


Published19 October2026 at13:46:17 UTC. Source `6766503b335f91c69b5dfd169ec82cb365fbf473`; deployment `appgdep_6ad61f1a3760819192ac8165abb46647`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_7ac14ac0bfdc8191be18695d9233384c`. Existing owner-private audience preserved. Live12-lesson Biology list and all5 diffusion/5 exchange contexts verified at390px: document width390 and24px diagram caption/title clearance. Cube1/2/4 sizes and keyboard penetration controls work on phone; canvas300px wide, paired2D core responds and has24px caption clearance. Final model-note refs correct, console errors empty, viewport reset. Screenshot `crash-course-diffusion.png`.
