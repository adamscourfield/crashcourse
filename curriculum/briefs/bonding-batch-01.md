# Bonding batch 01 — lesson briefs

16 October 2026. Based on `LESSON_TEMPLATE.md`. Shared AQA Trilogy 8464 / separate Chemistry 8462; Foundation and Higher. References use 4.x for separate Chemistry and 5.x for Trilogy. No separate-only or Higher-only requirements occur within these three lessons.

Official sources: [separate Chemistry](https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/bonding-structure-and-the-properties-of-matter), [Trilogy Chemistry](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/chemistry-subject-content).

## Lesson 1 — Three types of chemical bond

Runtime/curriculum ID: `science.chemistry.bonding.chemical-bonds`.

References: 4.2.1.1 / 5.2.1.1. Prerequisites: `electrons`, `metals`.

Objectives: distinguish ionic, covalent and metallic bonding; identify the relevant charged particles and electron transfer/sharing; avoid confusing covalent bond type with molecular structure.

Discover: charged particles, electron behaviour, and the distinction between bonding and structure. Visuals: ionic lattice, shared pair in hydrogen, metal with delocalised electrons.

Investigate: classify three evidence-based cases. Completion requires all three correct; incorrect choices receive an explanation. Models are intentionally available during this supported investigation.

Practise: three items covering element-type prediction, electrostatic attraction and structure. Independent check: five new items, scored on first answer. Existing 80% criterion means at least four of five, alongside the other stages.

Misconceptions: “every covalent substance has small molecules”; “electron transfer itself is the bond”; “metals contain negative metal ions”. Address through contrasting descriptions and feedback.

Concepts: `bonding.bond-types`, `bonding.electrostatic`, `bonding.bond-structures`, `bonding.ion-transfer`.

## Lesson 2 — Ionic bonding and electron transfer

ID: `science.chemistry.bonding.ionic-bonding`.

References: 4.2.1.2 / 5.2.1.2. Prerequisites: `subatomic`, `electrons`, lesson 1 above.

Objectives: infer charges for Groups 1, 2, 6 and 7; track transfer without changing proton counts; interpret outer-shell dot-and-cross diagrams, brackets and charges.

Discover: group/charge relationship, full outer shells, worked NaCl/MgO/MgCl₂ transfers and electron-origin notation.

Investigate: transfer electrons for NaCl, MgO, MgCl₂ and Na₂O, then identify the attraction between opposite ions. All four cases must be completed. Intermediate states are labelled as transfer in progress; final ionic shells/charges appear after the transfers. Inner shells are omitted, and the explanation accounts for an emptied third shell revealing a full second shell.

Practise: three items. Independent check: four multiple-choice applications plus a numeric electron-count answer for Ca²⁺. Blank/non-finite answers are rejected; the first valid submitted number is scored and retained across reloads.

Misconceptions: electrons are created when the outer shell changes; dots and crosses are different physical kinds of electron; proton numbers change on ion formation; a 2+ ion gains electrons.

Concepts: `bonding.ion-charge`, `bonding.ion-transfer`, `bonding.dot-cross`, `bonding.electrostatic`.

Scope note: the activity teaches transfer and diagram interpretation. Independently drawing a new dot-and-cross diagram is not yet an input mode; this remains an assessment enhancement in the coverage map.

## Lesson 3 — Ionic lattices, formulae and properties

ID: `science.chemistry.bonding.ionic-lattices`.

References: 4.2.1.3 and 4.2.2.3 / Trilogy equivalents. Prerequisite: lesson 2.

Objectives: recognise a giant ionic lattice, explain attraction in all directions, deduce simple empirical formulae from ratios/charges, evaluate representations, and explain melting/conductivity in terms of strong bonds and mobile ions.

Discover: 3D NaCl structure, simplest ratios, mobility and conductivity, model limitations. A rotatable 64-ion sample has equal positive and negative counts; a flat slice provides a labelled alternative. A real crystal extends beyond its artificial edges.

Investigate: compare 3D/slice views and solid/molten/aqueous property explanations; enter the numbers needed to balance Mg²⁺/Cl⁻ and Na⁺/O²⁻. Both ratio challenges are required. The displayed lattice represents solid arrangement; it does not animate a molten material or solution, and the note makes that distinction explicit.

Practise: three items on ratios, charge mobility and empirical formula. Independent check: four multiple-choice applications and a numeric 1:1 ion-count question.

Misconceptions: NaCl consists of separate salt molecules; the model's ball count is a molecular formula; electrons carry current in molten salt; a 2D drawing proves the crystal is flat.

Concepts: `bonding.ionic-formula`, `bonding.ionic-properties`, `bonding.lattice-models`.

## Shared implementation and verification

Content: `science-app/dist/content-bonding.js`. Topic/course registry: `dist/registry.js`. Interactions: `dist/widgets.js`; visuals: `dist/visual.js`.

All controls are standard keyboard-operable buttons, selects and number inputs. Rotation also supports arrow keys; reduced motion is honoured. Symbol/charge labels support colour. The main learning loop and first-answer distinction are preserved.

Progress uses stable new lesson/question/concept IDs. The existing short atomic IDs remain intact. Assessments and review sessions are stored by topic, route and tier, with migration of earlier single-topic runs.

Publication and verification results are recorded in `BUILD_STATUS.md` and the registers after QA. Specialist review is separate and has not been performed. Remaining bonding sections are planned rather than labelled complete.
