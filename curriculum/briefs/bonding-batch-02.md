# Bonding batch 02 — covalent diagrams and metals

Source checked: 16 October 2026. Shared by AQA Trilogy 8464 (5.2.1.4–5; 5.2.2.7–8) and Chemistry 8462 (4.2.1.4–5; 4.2.2.7–8). Both tiers, no separate-only material.

Sources: [Chemistry](https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/bonding-structure-and-the-properties-of-matter), [Trilogy](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/chemistry-subject-content).

## Lesson briefs

| Stable runtime ID suffix | Purpose and prerequisites | Discover / investigate | Independent evidence |
|---|---|---|---|
| covalent-single | Explain electrostatic attraction to a shared pair; construct H₂, Cl₂, HCl. Requires electrons and chemical-bonds. | Three explanations; construct shared and lone pairs for all three molecules. Validate electron conservation, each atom’s contribution and shell access. | c-single1–5: attraction, 14-electron budget, missing lone pair, symbol origins, hydrogen duet. |
| covalent-molecules | Construct O₂, N₂, H₂O, NH₃, CH₄ and connect diagrams to formulae. Requires covalent-single. | Three explanations; five constructions including double/triple bonds. Actual tetrahedral methane 3D model; flat electron-accounting layout explicitly distinguished from shape. | c-multi1–5: six shared electrons in N₂, atom counts, water pairs, methane electron budget, model limitations. |
| metallic | Explain metallic bonds, conduction, bending and alloy hardness. Requires metals and chemical-bonds. | Three explanations; pure/alloy comparison, keyboard layer slider, 3D metallic model and three diagnostic explanation choices. | c-metallic1–5: recognise structure, attraction, mobile charge, layer distortion, thermal transfer. |

All full runtime IDs begin `science.chemistry.bonding.`. Question/concept IDs begin `bonding.`. Each lesson has three supported practice items and five first-answer check items. Numeric answers require exact integers. Existing 80% check threshold and staged completion rules apply.

## Misconceptions and correction

- Sharing is not electron transfer. Pair attraction is explained using both nuclei.
- Shared electrons count once in a whole-molecule budget, but in both bonded atoms’ shell access. Feedback diagnoses total electron count before individual shells/origins.
- Dots/crosses track origins; they are not different electron species. All terminal atoms in the builder use crosses, central/left atom dots.
- Double/triple bonds have two/three pairs, not two/three electrons.
- Solid metal current is carried by electrons, not moving ions. Alloy hardness is linked to disrupted layers, not mass.

## Interaction, access and persistence

Construction uses labelled integer inputs for each bond and each numbered atom; keyboard accessible with a textual diagram description. Pair inputs produce the diagram, rather than selecting a finished answer. Every draft, molecule position and successful construction survives reload. All required diagrams must be correct for lab completion. The fixed connectivity is supplied: this is constrained diagram construction, not free drawing.

Metal mode, slide position, task and explanation success persist. The slider is symbolic and does not calculate force or strength. Lab completion requires three correct explanation choices; exploring the controls is encouraged but not a prerequisite for those answers.

SVGs are static and reduced-motion compatible; 3D retains the existing motion/keyboard/2D controls. Artificial sizes, electron symbols, outer-shell scope, flat layouts and alloy simplification are stated. No school practical is claimed.

## Review and evidence limitations

Eight new concepts join existing recall scheduling: shared pairs, lone pairs, multiple bonds, molecular formulae, covalent models, metallic bonding, metal conduction, alloys. Wrong answers are immediately eligible; successful learning is due after one day. First practice attempts and independent answers retain the existing separation. Topic/pathway/tier runs remain scoped.

Independent checks use numeric and choice responses. Full independent diagram drawing, written explanations and formula deduction from an unlabelled interactive model remain enhancements; guided construction success is not claimed as independent exam drawing evidence. Polymer repeating-unit and giant-network line representations remain for the next structural lessons. Specialist review has not occurred.

## QA

20 Node checks passed, including all eight molecular budgets/shells, invalid sharing/fractions, construction-state round trip, existing progress and context isolation. All three lesson flows reached 5/5 results in the browser. All eight constructions exercised; incomplete H₂/O₂ rejected; drafts resumed after reload. Metallic wrong answer, alloy selection, keyboard slider/resume and 3D rotation exercised. Phone width390 had no horizontal overflow and diagram bounds cleared caption. Final diagram-number overlap repaired and visually checked. Module URLs versioned after browser caching exposed stale assets; updated labels verified after reload.

Publication evidence is recorded in BUILD_STATUS.md after deployment.
