# Biology Cell biology — batch02

Authored/source-checked19 October2026. Bounded content asset, pending integration, widget QA and publication. No specialist review or whole-topic completion claim.

## Identity and eligibility

AQA Biology8461 and Combined Science: Trilogy8464, shared Foundation/Higher. Topic `science.biology.cell-biology`. `science.biology.cells.specialisation`, refs1.1.3, widget special-cell; `science.biology.cells.differentiation`, refs1.1.4, widget cell-fate. Both source specifications number these sections4.1.1.3/4.1.1.4. No separate-only/Higher-only internal content.

Sources: [AQA Biology Cell biology](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology) and [AQA Trilogy Biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content), verified19 October2026. AQA requires, **when provided with appropriate information**, relating structures of sperm, nerve, muscle, root-hair, xylem and phloem cells to function. Detailed adaptation examples below supply that context; they are not presented as an additional mandatory memorised list. Differentiation statements follow the official development/repair distinctions.

## Learning purpose / coverage

By the end students can link an adaptation to a mechanism and function across all six specified examples; recognise limits of symbolic diagrams; explain acquisition of specialised sub-cellular structures and why this supports different roles; distinguish animal/plant differentiation patterns and division versus differentiation. Prerequisites: specialisation → existing cell-structures; differentiation → specialisation. IDs remain stable and distinct from first batch.

`curriculum/biology-specialisation-requirements.csv` maps12 specific objectives to exact fresh independent check IDs. This is only4.1.1.3/.4; microscopy, cell division, stem-cell use and transport mechanisms have their own scope.

## Discover

Specialisation has six cards/scenes: special:sperm, special:nerve, special:muscle, special:root, special:xylem, special:phloem. Each supplies the relevant cellular context and directly links structure/process/job:

- Sperm tail/movement, respiratory mitochondria/energy demand; supplied acrosome enzyme context, genetic material in head.
- Neuron long extension/distant communication, branches/connections; many examples have insulating myelin, not an absolute rule for all neurons.
- Muscle contractile protein structures/force plus respiratory mitochondria/activity; energy provision alone is not the mechanism of contraction.
- Root-hair projection/soil-contact surface for water and minerals; no assumption of chloroplasts underground.
- Mature xylem: dead hollow vessel elements, lost contents/end walls, lignified strengthening/open water-mineral pathway/support; no active mature nucleus.
- Phloem: living sieve-tube tissue/perforated plates/sugar movement, companion metabolic support; mature sieve-tube elements lack nuclei, companion cells retain them. Do not equate all phloem cells with dead xylem.

Differentiation has four cards: fate:animal (definition/importance), fate:animal (most animal types early; adult repair), fate:plant (many types retain flexibility), fate:compare (division distinction/limits). A developmental branch depicts a possible route under suitable conditions, not an instantly reversible mature-cell transformation.

Misconceptions diagnosed in items: mitochondria themselves contract; every plant cell has a nucleus/chloroplast; every mature plant cell differentiates freely; every mature animal cell can become any type; more cells necessarily means differentiation; models establish real size without scale.

## Investigate — parent widget contract

Primary task owns custom interaction/model code; no generic lab schema authored here. Recommended meaningful challenge for special-cell: compare an unadapted/specialised shape, manipulate one feature, predict its functional consequence before revealing the comparison, and match mechanism to goal across six examples. Avoid arbitrary performance claims for invented quantitative models. For cell-fate: choose a developmental context and distinguish increased cell number from acquired structures, while rejecting impossible dead-xylem/mature-cell transformations.

Controls must have text labels, keyboard support and reduced-motion behaviour. Diagrams need non-colour cues and an accessible symbolic alternative. Wrong feedback should explain the missing causal link. Record successful completion only after required predictions are correct; saved drafts/answers must resume. Parent task must test these actual behaviours; this brief does not certify them.

Schematic limits: illustrative sizes, organelle counts, tissue segment lengths, signal/flow speeds and animation paths; original schematics are not real micrographs. Sperm/neurons/muscle forms vary. Xylem/phloem sections simplify multi-cellular transport tissues, and a live companion cell must not be drawn as an internal nucleus of a sieve-tube element. Do not imply every specialised cell freely changes identity when switching diagrams.

## Practice / independent check

8 practice items total,4 per lesson;19 independent checks (11 specialisation,8 differentiation). Stable question prefixes `bio.p-special`, `bio.c-special`, `bio.p-fate`, `bio.c-fate`; concept IDs exported with content. Original choice items include fresh scenarios and all six named examples. Independent figures use `{kind:'bio-special',type:'sperm'|'nerve'|'muscle'|'root'|'xylem'|'phloem',adapted:true}`; identity labels must be omitted from the visible figure and accessible text must describe features rather than reveal identity. Assessment wording supplies context where intended; a schematic is not a photographic identification claim.

Existing engine handles answer-index shuffle, independent first-answer locking, retries, result explanations and concept remediation. The same wrong-first-answer/resume tests used for prior lessons must be exercised after integration. No numeric rubrics are introduced. Concept IDs: special-animal, special-plant, special-transport, special-model, differentiation, division-vs-fate, fate-patterns (all under bio.). Existing scheduling, topic scoping and qualification context must remain intact.

Assessment limit: selecting a causal explanation provides weaker evidence than independently constructing one. No freehand cell drawing or extended written structure→mechanism→function rubric is automatically scored here; those remain explicitly outstanding. No numbered required practical is introduced by these two sections.

## Subject-specific skills

Comparing cell/tissue structures, interpreting models, judging unsupported inference and constructing structure/function causal links. WS1.2 is an author mapping for using models, not a separate attached official skill requirement under these two paragraphs. Links forward to transport, nervous systems, muscle energy demand, cell division/stem cells; details of those later topics are not claimed complete.

## Verification / handover

| Check | Evidence/status |
|---|---|
| Source and course/tier scope | Official4.1.1.3/.4 checked in both specifications; both-tier/shared metadata |
| Factual/keys review | All six structures/functions and differentiation statements read against scope; correct mature-xylem and sieve-tube/companion distinction |
| Syntax / IDs / schema | Local checks passed;2 lessons,8 practice,19 checks,7 concepts; prerequisites must resolve against integrated first batch |
| Widget, wrong paths, first-answer/resume | Pending parent integration/browser checks |
| Phone, keyboard, reduced motion | Pending parent widget implementation/QA |
| Specialist review / constructed responses | Outstanding |
| Publication and live proof | Not performed by content subtask |

Owned files: `science-app/dist/content-biology-specialisation.js`, this brief, `curriculum/biology-specialisation-requirements.csv`. Parent updates course/registers, integrates widget dispatch, runs relevant checks and records publication evidence. Next curriculum step: cell division and stem cells, followed by transport; specialist explanation review remains separate from technical QA.


## Primary integration and actual QA

Custom comparison/scrub/branch widgets integrated.138 automated tests pass; all6 adaptation and3 differentiation contexts completed in browser with wrong/retry and required-evidence gates, saved stage/choice persistence and keyboard/390px checks. Independent11/11 and8/8. See biology-cell-topic-coverage.md for limitations and actual publication. No specialist review performed.


Published19 October2026 at12:29:45 UTC. Source `fba829eeec7970451977d75b8683ac29bf3df003`; deployment `appgdep_6ad60d2a0bb08191b01337895cffd722`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_d0045c3aed8c8191897b59a4068642a6`. Existing owner-private audience retained. Live list verified5 Biology lessons; root-hair feature toggle and keyboard process scrubber verified. Console errors empty. Proof: `crash-course-cell-adaptations.png`.
