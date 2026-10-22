# Chemical changes batch 07 — aqueous electrolysis

## Identity and eligibility
Two shared Foundation/Higher lessons: `science.chemistry.changes.aqueous-electrolysis` (Electrolysis in water) and `science.chemistry.changes.electrolysis-practical` (Investigating aqueous electrolysis). Subject Science/Chemistry; AQA Trilogy8464 5.4.3.4 and Chemistry8462 4.4.3.4. Content version20261018-c7; checked18 October2026. Practical preparation links Chemistry required practical3 / Trilogy9. Existing IDs unchanged; no migration.

Official sources:
- https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/chemical-changes
- https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/chemistry-subject-content
- https://filestore.aqa.org.uk/resources/chemistry/AQA-8462-PRACTICALS-HB.PDF (electrolysis teacher/student sections; suggested methods, not compulsory prescription)
- https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/chemical-analysis (gas tests)

## Learning purpose and prerequisites
Predict aqueous products for one dissolved ionic compound with inert electrodes, using metal/hydrogen reactivity and halide/non-halide rules independently. Explain the competing contribution from water. Develop a testable product hypothesis, isolate the intended comparison, interpret product-test observations and investigate contamination. Prior molten electrolysis and reactivity series; practical follows aqueous products. Aluminium extraction and fuller Higher half-equation construction follow.

Misconceptions: aqueous gives the same products as molten → NaCl hydrogen/sodium distinction; every anion forms its element → sulfate/oxygen task; ions are neutral products → formula rejection; bubbles identify oxygen → observation/test distinction; unexpected results may be ignored → controlled repeat.

## Discover and representation
Three short cards per lesson. Product cards explain water, cathode and anode, with a symbolic labelled cell; practical cards explain prediction/controls, apparatus/observations/tests, evaluation and school safety. NaCl/CuSO4 contrast is worked explicitly. Model is not to scale or a rate/volume simulation. GCSE halide prediction is identified as a model: real concentration/electrode conditions can affect products. School practical fulfilment is explicitly excluded.

## Investigate
Products: four crossed cases (NaCl, CuSO4, CuCl2, Na2SO4); free-entry neutral product formulae and cathode reasoning required before revealing the products. Accept ASCII/Unicode subscripts, preserve element case, reject ions and monatomic gas products. Reactivity facts supplied to isolate application of product rules. Completion requires all4 cases.

Practical: three decision pairs: testable hypothesis and comparison controls; interpretation of a labelled observation table; alternative explanation and controlled repeat for chloride contamination. Wrong decisions return causal explanations. Completion requires all3 tasks. Native labelled controls support keyboard and non-colour use; no motion dependency. Table evidence is illustrative, not measured data. Activity teaches method reasoning, not physical competence.

## Practise and independent check
7 feedback-led practice items and11 first-answer independent questions in content-aqueous.js. IDs changes.p-aq1–4 /c-aq1–6; p-aqp1–3 /c-aqp1–5. Answer indices distributed across positions. Product check transfers to potassium, magnesium, silver and iodide; practical check introduces changed electrode material and contamination evaluation. Keys/why fields are explicit. Guided free formula entry is not claimed as independent unrestricted writing evidence.

Existing practice records first attempt separately from retries; independent checks lock first answers, hide model/Key idea, then report explanations. Completion requires Discover recorded, investigation passed, all practice eventually correct and ≥80% check (5/6 or4/5). Same-bank retakes do not prove broad mastery. No unearned prior completion of new IDs. Concepts feed topic/route/tier-scoped recall; wrong answers prompt immediate remediation and successful completion schedules later browser-local recall. Active task, drafts, passed cases and assessment answers persist across reload and eligibility changes.

## Subject skills and coverage
Author WS1.2/WS3.5 (models/explanations); WS2.1/2.2/2.4 and WS3.5 for hypothesis, design, observation/evaluation. Official practical AT links: Chemistry3,7,8; Trilogy Chemistry3,7. These are school apparatus/technique links, not attainment awarded by the simulation. No quantitative gas-yield inference from the observation table. See chemical-changes-topic-coverage.md for statement-to-evidence mapping.

## Verification and handover
Implementation: content-aqueous.js, aqueous-models.js, aqueous-scenes.js, widgets-aqueous.js; integrated through content.js/widgets.js and topic registry. Relevant model, answer validation, eligibility and persistence regression tests added; 86 Node tests passed. Actual browser QA and publication evidence are recorded below. Specialist review: not performed. Coverage remains partial; broader independent written explanations, practical fulfilment and full Higher construction remain open.

### Actual browser verification
Both complete flows exercised. Products: wrong Na/Cl and reactivity reason corrected to H₂/Cl₂; reload preserved draft; all4 cases passed; practice error/retry;6/6 independent score and next-day recall. Practical: wrong controls, swapped gas interpretations and ignored contamination corrected; draft survives reload; all3 tasks passed; deliberate first check error remains locked after reload, final4/5 and concept remediation. Route/tier switch retains both lessons’ work.390px phone table and cell have no horizontal overflow; labels/controls inspected; keyboard select use exercised; source date/ref correct; console clean. Revised control labels shorten selected values without changing keys.86 automated checks pass after final source edits. Physical device/full screen-reader/specialist review not performed.


Changes batch07 and interface cleanup publication: succeeded18 October2026 at20:34 BST. Source e57a802ce6498ca2416f84db3950900cc82b1c0e; deployment appgdep_6ad51f1ad98c81919df300ba1563371a; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_cd328e4cddc08191ab2ea7657d145cea. Existing owner-private audience preserved. Live lesson list shows14 Separate Higher Chemical changes lessons; aqueous lesson opened and console clean. Screenshot crash-course-aqueous-preview.png. Next aluminium extraction and fuller Higher half-equation construction. Specialist review and school practical fulfilment remain outstanding.
