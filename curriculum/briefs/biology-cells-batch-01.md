# Biology Cell biology — batch01

Checked/authored19 October2026. This brief covers only eukaryotes/prokaryotes, animal/plant sub-cellular structures, and microscopy/practical1 preparation. Cell specialisation, differentiation, culturing, cell division and transport remain outside this batch. No whole-topic completion claim.

## Identity and eligibility

Three shared both-tier lessons for AQA Biology8461 and Combined Science: Trilogy8464. Topic `science.biology.cell-biology`; namespace `science.biology.cells`. Content version20261019-b1. No existing IDs changed.

| Lesson | Exact references in both specifications | Widget / scene | Prerequisites |
|---|---|---|---|
| cell-types — Eukaryotes & prokaryotes |4.1.1.1|bio-types / bio:types|None|
| cell-structures — Cell structures & functions |4.1.1.2|bio-structures / bio:structures|cell-types|
| microscopy — Microscopy & magnification |4.1.1.2 (RP1),4.1.1.5|bio-microscopy / bio:microscopy|cell-types,cell-structures|

Sources read19 October2026: [Biology Cell biology](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology), [Trilogy Biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content). Required practical1 is positioned under4.1.1.2 in both, not under microscopy4.1.1.5. No Higher-only or separate-only statements are introduced here.

## Learning purpose and coverage

- **cell-types:** compare nucleus/DNA organisation; identify bacterial main loop and possible plasmids; compare cell lengths/orders of magnitude with standard form and metric prefixes. Misconceptions: bacteria lack DNA; plasmids are nuclei; every bacterium has plasmids; equal drawing sizes imply equal real sizes. Four Discover cards lead from common parts to bacterial DNA/plasmids and size. Worked example20 μm/2 μm=10; independent30/3 and100-fold difference. Standard-form recognition is assessed by choice; independent entry of standard form remains an enhancement.
- **cell-structures:** connect nucleus, cytoplasm, membrane, mitochondria, ribosomes, cellulose wall, chloroplasts and permanent vacuole to functions; recognise plant models without claiming every plant cell has chloroplasts. Misconceptions: plants do not respire; every plant cell photosynthesises; wall and membrane identical; model dots visible in ordinary light microscopy. Four Discover cards teach functions, then evidence/relative estimates. Independent items include all named functions, root-cell exception and a fresh circular-area estimate. Assumption: roughly circular two-dimensional outlines, area ratio is diameter ratio squared, not volume ratio.
- **microscopy:** distinguish resolution/magnification; explain improved detail using electron microscopy; calculate image/real sizes and magnification with consistent mm/μm/nm units; plan slide preparation/focusing and drawing records. Misconceptions: enlargement alone creates detail; ratio carries a length unit; divide inconsistent units; copied ideal diagram proves observation. Four cards cover detail, formula/rearrangements, school method and honest records. Worked example10 mm/20 μm=500; fresh practice12 mm/30 μm=400,15 mm/500=30 μm; independent24 mm/60 μm=400,32 mm/800=40 μm,25 μm×200=5 mm. Equal numerical answers in two separate examples result from different inputs, not reused question wording.

`curriculum/biology-cell-requirements.csv` maps the twelve teaching objectives to exact references and independent item IDs. This is a bounded batch map, not a full Cell biology audit.

## Discover and investigation

Every lesson has four cards and a constant matching scene. Diagrams are original symbolic illustrations, not invented photographs or micrographs. Primary task owns the three custom widgets; this asset defines no lab schema. Recommended success criteria: distinguish cell types from structural evidence, match each structure/function including the exceptions, and complete unit-consistent size calculations plus a method choice. Prediction before result, targeted feedback and keyboard-accessible labelled controls must be exercised in integration. Colour must not be the only identifying cue. Reduced-motion behaviour and accessible diagram alternatives belong to the parent renderer.

## Practice, independent checks and recall

-12 practice items;26 independent checks (8 cell-types,9 structures,9 microscopy).
- Stable IDs `bio.p-cell-types1..4`, `bio.c-cell-types1..8`; same convention for structures/microscopy. Concepts use `bio.` namespace, exported with the content.
- Numeric tolerances0.001 for appropriate displayed unit; magnification unit× is a ratio, not a length unit. All requested answers are finite, fresh calculations with visible reasoning in post-answer feedback.
- Independent questions include `figure:{kind:'bio-cell',type:'plant'|'bacterium',labelled:false}`; cell recognition uses original schematic evidence. A scale question uses `figure:{kind:'bio-scale',micrometres:20}` and explicitly supplies a cell/bar-length ratio so no screen ruler measurement is assumed.
- Existing parent engine must preserve first answers separately from retries, independently score checks, add failed concepts to recall and restore the same context after reload/route/tier changes. These behaviours are not established by this content-file audit.

## Scientific/practical skills

Official links:4.1.1.1 MS1b/2a/2h and WS4.4;4.1.1.2 WS1.2,MS1d/3a,AT7; microscopy WS1.1 and MS1a/1b/2h/3b,WS4.4; RP1 AT1/7. Codes beyond directly attached paragraphs are author links, not a claim every activity validates a whole skill.

RP1 preparation includes thin specimen, water/stain as appropriate, gentle angled coverslip, low-power finding/centring, safe focusing and fine focus at higher power; teacher-approved slide/stain/sample handling. Drawing requires observed plant and animal cells with labels and magnification or scale. Simulations cannot demonstrate hands-on focusing, preparation or biological drawing competence. Actual practical observation and paper drawing remain necessary; no specialist biology review or school practical fulfilment is claimed.

## Verification and handover

Owned file `science-app/dist/content-biology-cells.js` exports biologyCellLessons/Concepts. Local syntax and structural/answer-key audit pass; three unique lesson IDs,12 practice,26 checks, nine concept IDs; all prerequisites resolve within the batch. Relative-area and magnification calculations recalculated; figures are explicitly schematic. Route/tier metadata shared both-tier.

Integration, custom-widget operation, wrong paths, first-answer locking, resume, phone/keyboard/reduced motion, whole-suite checks, publication and live proof: parent task must record actual outcomes. Content specialist review outstanding. Next scope after this batch: cell specialisation/differentiation, then division/transport in the curriculum sequence; separate Biology culturing requires its own gated brief.


Primary integration and technical QA complete; see `../biology-cell-topic-coverage.md` for actual135-test/browser evidence. Custom widgets provide3/4/5 tasks, symbolic cutaways and a keyboard focus/view simulator. Publication is recorded separately there.


Published19 October2026 at12:16:44 UTC. Source commit `cfebb14cbe942b4ad0ede7eb2b4ced93416c6249`; deployment `appgdep_6ad60a1d26248191965ebc85cacb93c4`; saved version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_26cd286e8dc88191833825aee21b8ab2`. Existing owner-private audience preserved. Live Biology list verified all3 lessons and cell-type investigation mounted; console errors empty. Screenshot: `crash-course-biology-cells.png`.
