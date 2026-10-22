# Cell biology — statement and evidence audit

Audited19 October2026 before Organisation. Scope: AQA Biology8461 chapter4.1 and Trilogy8464 Biology chapter4.1. This is an AI-assisted source/content and mapping audit, not independent subject-specialist review, a fresh browser test run, or verification that a student has performed practical work.

## Outcome

All chapter headings and important assessable teaching statements have implemented teaching across **19 lessons**:16 shared and3 separate-only. No concrete missing teaching batch or incorrect route/tier restriction was found. The former “percentiles” concern is resolved **for authoring** by corroborating the currently linked official specification PDF and practical guidance; it does not require an extra percentile-rank lesson. Progressing to Organisation is reasonable while retaining the independent constructed-response, freehand and physical practical gaps below. Do not label the whole topic fully assessed or specialist-reviewed.

The eight existing requirement maps contain **85 rows**:84 grouped learning/evidence objectives and1 source-wording record (`bio.osmo.wording`), which is not itself an additional learning objective. These are useful authoring groups, not85 independent official specification statements. The companion `biology-cell-audit.csv` consolidates them without altering the original maps and marks the source-wording row separately.

## Primary sources and the wording discrepancy

- [Official8461 Cell biology HTML](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology),whole chapter4.1; the osmosis paragraph4.1.3.2 currently renders “use percentiles”.
- [Official8464 Biology HTML](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content),chapter4.1; osmosis4.1.3.2 renders “use percentages”.
- [Official8461 specification PDF currently linked from that AQA page](https://cdn.sanity.io/files/p28bar15/green/510eb7c76df13be23292df4392de95eb32b0d30f.pdf): **PDF page22 (zero-based21),printed page23**,4.1.3.2 explicitly says **“use percentages”**, followed by percentage gain/loss of tissue mass. **PDF page87 (zero-based86),printed page88**,practical mathematical opportunities repeat percentages and percentage gain/loss. The linked PDF identifies itself as8461,exams2018 onwards,Version1.0; use its current AQA linkage as provenance rather than implying it was newly published in2026.
- [Official8461 practical handbook](https://filestore.aqa.org.uk/resources/biology/AQA-8461-PRACTICALS-HB.PDF),microscopy pp9/32–33,microbiology pp10–12/34–36,osmosis pp13–14/37–39; suggested methods and explicit school practical context.

**Inference from these primary sources:** the isolated8461 HTML word is a transcription/editorial discrepancy, not evidence of a separate osmosis percentile-ranking requirement. Both the8461 assessment specification PDF and its explicit practical maths guidance agree with8464 on percentages. No official correction notice was obtained, so do not claim AQA personally confirmed an erratum. Author against the corroborated PDF wording, preserve the provenance, and recheck if AQA changes its specification. A percentile lesson is not needed as a precaution or an invented approval gate. `bio.osmo.wording` should now be recorded as a resolved source discrepancy rather than an unfulfilled attain­ment objective.

## Actual source and map validation

Read `BUILD_PLAN.md`,the current and historical Cell biology sections of `BUILD_STATUS.md`,all eight `curriculum/biology-*-requirements.csv` maps,the19 lessons in `science-app/dist/content-biology-*.js`,and corresponding model/task/widget definitions for cells,specialisation,division,stem cells,diffusion/exchange,osmosis,active transport and culture. The validation used actual exported module content, not headings or register counts.

Checks performed in this audit:

- Every mapped lesson ID resolves to an actual Biology lesson; all85 row IDs are unique.
- Every nonempty mapped question ID belongs to its stated lesson,not merely somewhere in the global bank. All **169 distinct independent-check IDs** are represented; no missing/out-of-lesson reference was found.
- Every8461/8464 reference in the maps occurs in the corresponding lesson's reference list. Biology uses4.x in both qualifications; Chemistry's4.x/5.x mapping is not applicable.
- All3 culture lessons are separate-only and both-tier at lesson level. Only `bio.p-growthht` and `bio.c-growthht` are in `higherQuestions`; the associated standard-form explanation card has `higher:true`. The requirements row `bio.growth.standard` is Higher-only and has no Foundation evidence leak. Other population arithmetic remains both-tier.
- In the actual app, question eligibility uses `lesson.higherQuestions`,not a hypothetical `question.higher` property; the audit validated the real mechanism. Standard form elsewhere in4.1.1.1 and microscopy remains both-tier.
- Source keys/calculations inspected include cube6a²/a³ and ratios,area estimates,magnification conversions,signed mass change/rates,interpolation,conditional doubling and inhibition-zone πr²/radius/mean-diameter reasoning. No material key/calculation error was identified by this review. This is not a proof of every possible generated state or a replacement for previously recorded tests.

| Pathway/tier | Lessons | Practice | Independent checks |
|---|---:|---:|---:|
| Trilogy Foundation |16|64|143|
| Trilogy Higher |16|64|143|
| Separate Foundation |19|76|168|
| Separate Higher/full bank |19|77|169|

There are67 mapped question concept IDs. The overall published app counts in the latest batch header are132 lessons,420 practice and774 checks; this audit did not deploy anything or rerun that release's165-test suite.

## Full chapter teaching reconciliation

| Official section | Teaching and exact representative evidence | Coverage judgment and remaining assessment limits |
|---|---|---|
|4.1.1.1 Eukaryotic/prokaryotic cells | `cell-types`: `bio.c-cell-types1–4` distinguish nucleus/main DNA/plasmids and typical groups; `bio.c-cell-types5–8` cover scale,prefixes and standard form; animal/bacterium/scale tasks in `biology-models.js` | Both routes/tiers. Typical qualifier,plasmids optional,bacteria smaller and not no-DNA all preserved. Unrestricted comparative account and observation drawing remain. |
|4.1.1.2 Structures andRP1 | `cell-structures`: `bio.c-cell-structures1–9`; control/energy/boundary/plant tasks link nucleus,cytoplasm,membrane,mitochondria,ribosomes,wall,chloroplast and vacuole to functions. Plasmid role is retrieved through `cell-types` teaching/check4. Relative-area estimate in structures card4/check8. `microscopy` check6/7 and prepare/drawing tasks cover method/recording. | Full important teaching,including cellulose in plant/algal walls,plant mitochondrial respiration,and not-all-plant-cells chloroplasts. Guided structure interpretation is not independent drawn/labeled plant-and-animal observations. PhysicalRP1 AT1/7 remains. |
|4.1.1.3 Specialisation | `specialisation` six models for sperm,nerve,muscle,root hair,xylem,phloem; `bio.c-special1–11` | All six specified examples implemented with structure/function explanations and supplied-context qualifications. Open written causal explanation across novel cells remains representative,not exhaustively assessed. |
|4.1.1.4 Differentiation | `differentiation`: `bio.c-fate1–8`; animal,plant and repair branches | Importance,early animal differentiation,many plants throughout life,mature-animal repair/replacement and acquiring structures covered. Division versus differentiation explicitly distinguished. |
|4.1.1.5 Microscopy | `microscopy`: `bio.c-microscopy1–9`; focusing,ratio/rearrangement,resolution and drawing-record tasks | Magnification versus resolving power,improved electron detail,historical development in this limited sense,units and standard form taught. No unsupported need for named microscopy dates or detailed electron-instrument construction. Actual handling/freehand records still absent. |
|4.1.1.6 Separate culturing | `culturing`: `bio.c-culture1–8`; `bacterial-growth`: `bio.c-growth1–8` plusHT `bio.c-growthht`; `inhibition-zones`: `bio.c-zone1–9` | Broth/agar,uncontaminated cultures,aseptic reasons,flaming loops,taping/inversion,max25°C,conditional20-min division,calculation,πr² andRP2 all taught. Higher applies only to expressing population answers in standard form. PhysicalRP2 AT1/3/4/8 and unrestricted method writing remain. |
|4.1.2.1 Chromosomes | `chromosomes`: `bio.c-chrom1–8`; nested structure views and pair/copy interpretation | Nucleus→chromosomes→DNA,many genes,normally paired body-cell chromosomes covered. Corresponding pairs distinguished from replicated copies; small model count not universal. |
|4.1.2.2 Cell cycle/mitosis | `cell-cycle`: `bio.c-cycle1–10`; preparation,growth,DNA copy allocation and final division tasks | Three overall stages,subcellular growth,DNA replication,complete set to each end,nuclear division then cytoplasm/membranes,two genetically matching cells and growth/repair contexts covered. Model labels count copies of chromosome material without asserting a false universal chromosome count. Named mitosis phases not required. |
|4.1.2.3 Stem cells | `stem-cells`: `bio.c-stem1–8`; `stem-cell-uses`: `bio.c-stemuse1–10` | Definition,self-renewal,differentiation,embryo/adult marrow/meristem capacities,diabetes/paralysis potential,therapeutic cloning/genetic match,viral risk/ethical objections and quick/economic crop/conservation cloning all taught. Benefit/risk case selection does not measure independent extended evaluation; no clinical outcomes promised. |
|4.1.3.1 Diffusion and exchange | `diffusion`: `bio.c-diff1–9`; `surface-area`: `bio.c-surface1–9`; `exchange-surfaces`: `bio.c-exchange1–10` | Definition,gas/solution contexts,O₂/CO₂/urea examples,gradient/temp/area effects,SA:V maths,single/multicellular need,and all5 named lung/intestine/gill/root/leaf surfaces implemented. Particle random motion and no-net equilibrium clarified; counterfactual diagrams do not certify real anatomy or measured rates. |
|4.1.3.2 Osmosis and practical | `osmosis`: `bio.c-osmo1–8`; `osmosis-practical`: `bio.c-osmoprac1–9`;3 water-direction contexts and4 practical tasks | Partial membrane,dilute→concentrated water direction,mass gain/loss,percentage denominator/sign,compound rate,concentration range,controlled tissue measures,repeats,plot/interpolation/evaluation covered. Both salt/sugar options taught,one valid sucrose example simulated. BiologyRP3/TrilogyRP2 AT1/3/5 distinct. Percentages supported by officialPDF; percentile ranks not a missing requirement. |
|4.1.3.3 Active transport and comparison | `active-transport`: `bio.c-active1–9`; `transport-comparison`: `bio.c-compare1–8` | Against-gradient movement,respiration energy,root minerals for growth,gut sugar absorption/use,and distinguishing all3 processes taught. Turning off active route does not stop passive particle motion. Written comparison and independently constructed diagrams remain. |

Lesson IDs in this table use the prefix `science.biology.cells.`; question ranges denote the actual individual IDs checked,not automatically generated unknown questions. The companionCSV provides every exact mapped ID explicitly.

## Important limits that must remain visible

**Independent evidence:** most causal/ethical/method explanations are selected from choices. Numeric calculations provide genuine fresh entry,but answer selection does not demonstrate an independently composed comparative paragraph,evaluation,hypothesis or method. A small lesson check and80% threshold are representative attainment evidence,not comprehensive mastery of every statement.

**Drawings/graphs:** 3D selection,anonymous schematic recognition,guided point plotting,sliders and supplied neutral figures support learning. They do not capture a student's unrestricted cell drawing with scale and labels,a diffusion/osmosis diagram,or a complete independently chosen graph scale/axes/best-fit line. Osmosis graph task requires five calculated points but supplies the axes; keep that distinction. Existing requirement maps already acknowledge drawing/writing gaps; no missing teaching lesson is needed merely to rename those limitations.

**Physical practicals:** no online activity fulfilsRP1 microscopy,SeparateRP2 bacterial investigation,orBiologyRP3/TrilogyRP2 osmosis hands-on requirements. Actual preparation,focus,microscope observation,drawings,weighing/cutting and aseptic technique remain school evidence. Do not combine practical numbers across qualifications. Neutral images are illustrative,not student laboratory records or real micrographs.

**Models:** cell structures and relative sizes are symbolic; culture snapshots assume explicit conditional doubling; membrane transfer steps are not biological rates or ATP budgets; cube reached-core depth is geometry,not a timed tissue experiment; simplified lineage/therapeutic cloning diagrams follow stated AQA scope without clinical guarantees. These limitations are consistently disclosed in teaching/source notes. This audit did not validate detailed anatomy through independent specialist review.

**Working-scientifically opportunities:** many opportunities are represented,but not every entire WS/AT competence can be certified through a question bank. For example isotonic/high-energy drinks are an optional WS1.5 contextual opportunity beside diffusion,not an absent compulsory new Cell biology subsection. Practical risk controls and method choices are taught; independent scientific writing and physical implementation remain separate evidence.

## Concrete follow-up for the parent handover

1. Reconcile `bio.osmo.wording` and current status/register wording to **resolved for authoring via officialPDF**,retaining this evidence trail. Do not add an unsupported percentile-rank requirement or claim an AQA-confirmed correction.
2. The latest `BUILD_STATUS.md` batch08 header correctly says19 lessons,but its older “Current position” table still says “Biology7 Cell biology lessons”. Update the current snapshot while preserving historical release entries. Likewise the runtime Cell biology coverage still says “Remaining source-wording ... gaps”; the source-wording portion can be retired after this audit.
3. Record Cell biology teaching as reconciled across the chapter while retaining partial independent/physical/specialist evidence status. Do not turn technical QA into specialist review or all-student mastery.
4. Organisation can begin. Future evidence enhancements should target independent drawing/graph construction,short written causal/comparative explanations,and explicit practical observation records with teacher-reviewed rubrics. Those are improvements to demonstrated evidence,not an unimplemented major Cell biology teaching batch found by this audit.

**Blockers:** none to beginning the authorised Organisation sequence. No material factual correction or missing teaching statement was found by this bounded audit. Any later source revision or specialist finding should be tracked and corrected without erasing existing stable progress IDs.
