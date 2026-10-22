# Cell type visual redesign

User priority19 October2026: existing cell type diagrams are not clear enough; assess whether3D helps. The scope is visual/interaction quality of animal, plant and bacterial cells, not new lessons. Existing120 lesson IDs, question IDs, scores and completion evidence are retained.

## Design decision

Use rotatable3D cutaways for spatial understanding and distinct cell boundaries; keep improved2D schematics for revision, WebGL fallback and independent assessment. A large central plant vacuole, peripheral nucleus, separate wall/membrane, folded mitochondria, stacked chloroplast structures, enlarged paired ribosomes, bacterial DNA loop and additional plasmid ring have distinct forms. Every type has a native keyboard-accessible structure selector with its name/function; selected3D structures have a white arrow as well as colour, and2D structures have a thick outline and label. Models start stationary, with optional rotation, keyboard/drag controls, zoom/reset and2D toggle. All models are separately enlarged, symbolic and not to scale. Organelles are exaggerated;3D is not a light/electron micrograph.

The3D explorer is instructional. Independent checks remain unlabelled2D evidence and have no explorer/function hints. Microscopy simulation is unaffected. Existing task answers and stable IDs remain unchanged. Instructor/specialist review of biological fidelity has not occurred; simplified forms and relative proportions must not be treated as measured anatomy.

## Implementation

- `cell-anatomy.js`: shared membership, names/functions and selection validity.
- `cell-meshes.js`: actual Three.js geometries and cutaway shells, separate boundary layers, organelle shapes and selected marker.
- `cell-3d.js`: model spec and existing renderer/control integration.
- `cell-diagrams.js`: clearer2D forms for all3 cell types.
- `widgets-biology.js`: structure inspector preserving existing activity evidence.
- `visual.js`: custom model hook, nested mesh disposal, local clipping, mode/orientation preservation and model scale note. Regression verification includes Chemistry models.

## Verification and release

144 automated tests pass: all existing curriculum/progress checks plus3D anatomy membership, plant wall versus membrane boundaries, nucleus/vacuole separation, selection cues and unlabelled independent figures. Browser, phone and release evidence is recorded below. No forced WebGL-failure, physical-device or full screen-reader certification is claimed; automatic fallback is implemented and the2D control path is exercised.

Next content work remains stem cells after this visual quality fix.


## Actual browser checks before release

All19 structure options (animal5, plant8, bacterium6) render with matching selected-structure accessible label and nonempty function text; exactly one WebGL canvas remains across switches.2D mode remains selected while changing structures within the same specimen. Plasmid inspection survives reload; earlier Biology completion remains7/7. Cropped canvas screenshots change after arrow-key rotation and zoom. New three-type cutaways inspected on desktop; preliminary phone cutaway inspected; final390px layout verified on the published Site. Chemistry atom scene renders after nested3D disposal, exactly one canvas, with cell-specific note removed and no console errors. Independent cell check has anonymous diagram title and no structure explorer/visible3D model; retake scores8/8. No forced WebGL-failure test or full device/accessibility certification.


## Actual release and final phone verification

Published19 October2026 at13:00:24 UTC. Source `6645dbd735915e665e9bfa9d6a9eb4a40b0b95d7`; deployment `appgdep_6ad614514560819190693ce086d220ce`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_2db64f908bac8191a17b22dfa933cecf`. Existing owner-private audience retained. Live3D cutaways/structure selector and2D switching verified. All3 types at390px: scroll width390 and24px canvas/title clearance. Viewport reset after QA. Console errors empty. Proof: `crash-course-cell-cutaways.png`.

No lesson/question IDs, eligibility or counts changed:120 lessons,371 practice,668 checks. All144 final-package automated tests passed. Stem cells remain the next content batch.
