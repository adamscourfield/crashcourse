# Biology Cell biology — batch03

Source checked/authored19 October2026. Content assets for chromosomes and the body-cell cycle; custom models, browser QA and publication remain owned by the parent task. This batch does not cover stem cells, transport, or separate Biology culturing, and does not complete Cell biology.

## Identity and eligibility

- `science.biology.cells.chromosomes`, **Chromosomes, DNA & genes**, refs1.2.1, widget chromosome-map; prerequisites cell-types/cell-structures.
- `science.biology.cells.cell-cycle`, **Mitosis & the cell cycle**, refs1.2.2, widget cell-cycle; prerequisites chromosomes/differentiation.
- Topic `science.biology.cell-biology`. AQA Biology8461 and Trilogy8464 both use4.1.2.1/.2; shared Foundation/Higher, no restricted internal questions. Content version20261019-b3, stable IDs preserved.
- Official sources read19 October2026: [Biology Cell biology](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology), [Trilogy Biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content).

## Learning purpose and statement coverage

Students can locate chromosomes in a nucleus, connect chromosomes/DNA/genes, interpret normal body-cell pairing without calling pair members identical copies, describe preparation/nuclear division/cell separation in order, allocate matching copies to complete daughter sets, and recognise growth/repair contexts.

`curriculum/biology-division-requirements.csv` maps9 objectives to precise independent item IDs. Official chromosome knowledge is nucleus→chromosomes made of DNA→many genes, normally paired in body cells. The model adds supplied explanation of gene regions, symbolic shapes and pair-versus-copy distinctions to prevent misconceptions. No universal chromosome number, centromere-count exercise or chromatid terminology is assessed.

Official cycle sequence: grow/increase ribosomes and mitochondria, DNA replication produces copies, one set pulled to each end and nucleus divides in mitosis, cytoplasm/membranes divide to two identical cells. Three overall stages are explicitly named; five illustrative frames do not introduce five mitosis phases. Named phases are not required. Mitosis supports growth/development, with repair/replacement retrieval from previous differentiation lesson.

## Discover

Chromosomes has four cards:

1. chromosomes:nucleus — locate chromosomes and change viewing scale.
2. chromosomes:dna — many genes as DNA sections, not miniature cells.
3. chromosomes:nucleus — normal body-cell pairing, supplied four-chromosome/two-pair example.
4. chromosomes:chromosome — pair/copy distinction; compact doubled drawings are not permanent chromosome shape.

Cell cycle has five cards matched to intended frames:

- cycle:0 — growth and increased sub-cellular structures (preparation).
- cycle:1 — DNA copied before mitosis (also preparation).
- cycle:2 — matching sets allocated and nucleus divides (mitosis).
- cycle:3 — cytoplasm/membrane separation.
- cycle:4 — two completed cells and growth/repair purpose.

Worked example: four original chromosomes A/B/C/D produce eight labelled copies before allocation. Each daughter receives A/B/C/D, retaining four chromosomes. The intermediate count deliberately means **labelled copies of genetic material**, not a demand to count a replicated chromosome as two by a particular convention. Independent example uses six originals/twelve labelled copies; another asks final four in each daughter. Hypothetical model counts are explicitly not real human counts.

## Investigate — parent custom widget

Chromosome-map should let students navigate levels and identify the supported nesting relationship, compare corresponding pair members, and distinguish paired chromosomes from copies. Scale changes need explanatory cues rather than depicting all levels at a common physical size.

Cell-cycle should require prediction/allocation of labelled copies before success: give one copy of each original to each end. An incorrect A/A/B/B versus C/C/D/D split has equal amounts but incomplete sets and needs targeted feedback. Ask what happens before/after mitosis; final splitting must be distinguished from nuclear division. Primary task owns all controls, model geometry and completion rules; no generic lab data is supplied by this asset.

Models need labelled, keyboard-operable controls, accessible diagrams/non-colour identifiers, reduced motion and text equivalents of routes/copies. Save drafts, allocations and completion through reload. Changing selected frame is observation, not sufficient successful investigation by itself. Parent must record actual wrong-path and resume checks.

## Practice and independent check

8 practice items (4 each);18 independent checks (8 chromosomes,10 cycle). Stable IDs `bio.p-chrom1..4`, `bio.c-chrom1..8`, `bio.p-cycle1..4`, `bio.c-cycle1..10`. Concepts: chromosome-map, gene-map, chromosome-pairs, chromosome-model, cycle-preparation, cycle-allocation, cycle-sequence, cycle-purpose (all `bio.` namespace).

Numeric answers/tolerance: supplied6 chromosomes→3 pairs practice;8→4 pairs check; four originals→8 labelled copies practice; six originals→12 labelled copies check; each completed daughter from parent4 retains4. Tolerance0.001; answers are whole counts, no units required. Reasoning explains grouping/copying/allocation rather than memorised real counts.

Figures used in independent checks: `bio-chromosomes` with level nucleus/dna/chromosome; `bio-cycle` stage2/pairs2 and stage4/pairs2. Renderer must omit identity/answer labels from exam figures and use feature descriptions in accessible text. Questions supply needed model context and original examples. First answers, retries, result feedback, failed-concept recall and qualification/topic scoping use the existing engine and require integration tests.

No independent freehand chromosome/cycle drawing or extended causal explanation rubric is included. Selecting correct sequence/interpretation and constructing an allocation provides useful evidence but cannot certify a student can write a complete explanation. Retain that assessment limitation.

## Misconceptions and model limits

- Body-cell pair members are identical copies → may carry different gene versions; copying one member is another relationship.
- DNA replication occurs in mitosis → occurs in preparation before nuclear division.
- Mitosis is synonymous with all cell-content separation → nucleus divides in mitosis; cytoplasm/membranes then separate.
- Body-cell cycle halves original chromosome set → correct copying and allocation preserve a complete original set per daughter.
- Equal copied-material amount guarantees correct allocation → each daughter needs each original represented.
- Every chromosome always looks like X → compact doubled form is a symbolic division representation.
- Two enlarged shapes prove a real experiment → drawings are original schematics, not micrographs or experimental evidence.

Colours, gene-marker number, copy spacing, timing and nested geometry are illustrative. Five frames are not named mitotic phases. Genetic identity assumes normal copying/no mutation. No meiosis or gamete-production inference, medical claim or practical fulfilment is introduced.

## Subject-specific skills and verification

WS1.2 is explicitly attached by AQA to chromosome models/analogies for division. Sequence reasoning, grouping and supplied copy allocation are author applications; they are not an added named quantitative syllabus demand. No numbered required practical is introduced here.

| Check | Status |
|---|---|
| Official scope/eligibility | Both specifications4.1.2.1/.2 read; both-tier/shared metadata |
| Factual/answer-key pass | DNA/pair/copy and nuclear/content-division distinctions checked; supplied counts recalculated |
| Syntax/schema/IDs/prerequisites | Local checks passed against existing Biology first two batches |
| Interaction/wrong allocations/resume | Pending parent implementation/browser QA |
| Phone/keyboard/reduced motion | Pending parent model QA |
| Specialist review/constructed explanations | Outstanding |
| Matching source publication/live proof | Not performed by asset task |

Owned files: `science-app/dist/content-biology-division.js`, this brief and `curriculum/biology-division-requirements.csv`. Parent integrates scene dispatch/figures/widgets, updates registers/status and records actual tests and deployment. Next lesson scope is stem cells, then transport and separate-only culturing in their own briefs.


## Primary integration and technical verification

Custom nested map, DNA copying/complete-set allocation and staged cell-content division integrated.141 automated tests pass. Browser full8/8 and10/10; wrong timing, balanced wrong-identity sets and halved daughter predictions reject; corrected paths pass; saved stages/choices/allocations and locked answers survive reload. Four views/five snapshots and allocation controls fit390px. See biology-cell-topic-coverage.md for detailed limits and actual publication. Specialist review outstanding.


Published19 October2026 at12:43:51 UTC. Source `8b6c293b5ceb45188802226b4703493696d7d31d`; deployment `appgdep_6ad61078956c8191b003c4766e27e23b`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_e34b38ee9b808191a4bc929330e9ba51`. Existing owner-private audience retained. Live list verified7 Biology lessons; growth, DNA copying, complete-set allocation and correct feedback verified. Console errors empty. Proof: `crash-course-cell-cycle.png`.
