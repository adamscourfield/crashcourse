# Heart visual redesign —20 October2026

User priority: replace the four-ellipse heart with clearer paired2D and3D teaching views. No new lessons or assessment statements added.145 lessons/472 practice/883 checks unchanged; stable lesson, question and concept IDs and saved progress retained.

Original shared coordinate layout in `science-app/dist/heart-anatomy.js`: asymmetric four-chamber cutaway, septum, thicker left ventricular wall, venae cavae, pulmonary vessels, aorta, valve flaps and supporting cords. Labelled SVG has leader lines, flow arrows and a textual colour key. Three.js uses extruded myocardium with four true cavity holes, curved vessels and a selected-chamber rim. Existing chamber inspection and wall counterfactual update both views. Larger responsive panel reserves room for labels and captions.

Anatomy references checked: [NHLBI anatomy](https://www.nhlbi.nih.gov/health/heart/anatomy), [NHLBI blood flow](https://www.nhlbi.nih.gov/health/heart/blood-flow). Original geometry; no copied illustrations. AQA4.2.2.2 scope unchanged.

Technical QA:187 automated tests pass, including finite actual Three.js meshes, four cavity holes, stable chamber IDs, paired wall states and selected-chamber rim. Diff check passes. Local browser: all four chamber selections, wrong chamber-role feedback then correction, thick/thin wall comparison, thin state retained on reload, zoom/keyboard rotation/reset and diagram toggle exercised. Existing completed lesson and10/13 topic progress retained. No progress migration needed.

Limitations: schematic cutaway, simplified/partly obscured vessel courses and symbolic colours/dimensions; no real flow or pressure simulation, real photograph or specialist anatomy review. Blood is never blue; palette distinguishes pathways. Existing valve/pacing explanatory models remain separate. Independent drawing and physical practical evidence not implied.

Published20 October2026 at06:28:31UTC; source `519f7e62dc6ac8b907d2c8d0a1b20a3df966fb88`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_bf68565f113081919af1025e80828b58`; deployment `appgdep_6ad70a0161ac8191969d550b77b1e086` succeeded. Existing owner-private audience retained. [Live app](https://gcse-science-atom-lab.newbuddy32.chatgpt.site/). Live390×844 check passed for labelled diagram, captions/key and3D fit; desktop restored. Screenshots `crash-course-heart-redesign.png` and `crash-course-heart-3d.png`.
