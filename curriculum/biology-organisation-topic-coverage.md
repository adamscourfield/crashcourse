# Organisation — first teaching batch

Checked19 October2026 against official [Biology8461 Organisation](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/organisation) and [Trilogy8464 Biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content). Sources, grouped requirements and exact independent question IDs are in `biology-organisation-requirements.csv`; batch brief is `briefs/organisation-batch-01.md`.

## Implemented scope

Three shared both-tier lessons: Cells to organ systems (`science.biology.organisation.levels`), The digestive route (`.digestion`), How enzymes work (`.enzyme-action`).12 practice and24 independent checks plus11 recall concepts.4.2.1 teaching covers hierarchy, coordinated functions, the single-celled exception and numerical scale.4.2.2.1 is partial: digestive overview, physical versus molecular breakdown, absorption, enzyme nature/specificity/products/reuse. Nine implemented grouped objectives and six planned scope rows are authoring groups, not a count of all official statements.

Students predict before building a tissue, combine three tissue contributions into an organ and distinguish organ systems from organisms. Stepped digestive models compare physical/chemical changes and large/small molecules crossing a boundary. Enzyme interaction requires both matching/non-matching substrates, observation of products and a second catalytic cycle. Saved evidence and predictions gate progression.3D cell/tissue/enzyme shape models have accessible2D alternatives and keyboard controls. Organ layers are functional schematics, not histology; hierarchy scales differ. Enzyme shape is a simplified analogy without real protein detail, reaction rates, universal ATP dependence or actual anatomy. Models start still.

## Actual technical verification

169 automated tests pass; `git diff --check` passes. All10 investigation tasks completed in browser. Missing predictions, incomplete tissue assembly and incomplete enzyme reuse reject; corrected paths pass. Two selected organ tissue contributions, completed absorption comparisons and bound enzyme state survive reload. All three full Discover/Practise/Check flows score8/8 each. Practice wrong/retry, numerical scale answers and independent first-answer lock across reload verified. Combined Foundation retains3/3 completion from Separate Higher. Source notes identify shared both-tier4.2.1/4.2.2.1 scope. Topic assessment samples these three lessons only; first answer remains locked across Cell biology switch/reload/resume, final3/3. Existing-topic separation also has automated regression coverage.

All10 live investigation tasks pass at390px without overflow; tissue/enzyme3D/2D, readable controls and enzyme caption clearance24px verified. Viewport reset; console errors empty. These are technical checks, not specialist content review, physical-device testing or complete screen-reader certification.

## Explicit remaining scope and evidence

Named digestive enzymes/sites/products and their uses, temperature/pH/denaturation, rates, bile, food tests (BiologyRP4/TrilogyRP3), amylase pH (BiologyRP5/TrilogyRP4) remain planned. Heart/vessels/blood, health/disease/lifestyle/cancer and plant tissues/transport remain planned and require further statement mapping. Organisation is not complete. Independent constructed explanations/freehand, school practical competence and specialist review are not claimed. Full app now135 lessons/432 practice/798 checks, Biology22 Separate/19 Trilogy across the two topics; Physics remains planned.

Next concrete action: map and build named digestive enzymes/products/sites, conditions/rates, bile and practical preparation in coherent batches, retaining route/tier and stable IDs.

## Publication

Published19 October2026 at19:25:39 UTC. Source `31e64aef2ad84399337638b611dc8bf0e0bf2fe5`; deployment `appgdep_6ad66ea155f88191ae79c46a9550dd46`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_97df0552ed3c8191a2c396ff30df06f8`. Existing owner-private audience preserved. Live all10 investigation tasks pass at390px with document width390. Tissue and enzyme3D/2D switches, readable controls and enzyme diagram24px caption/title clearance verified. Final source/model notes4.2.2.1 and partial topic scope correct. Console errors empty; viewport reset. Proof `crash-course-organisation.png`.


## Batch02 — digestive enzymes, conditions/rates and bile

Checked19 October2026 against the same official8461/8464 section4.2.2.1. Three shared both-tier lessons add12 practice/26 checks/10 recall concepts. Exact9 grouped objective mappings in `biology-digestive-requirements.csv`, brief `briefs/organisation-batch-02.md`. Broader original planned requirements for enzymes/conditions/bile now point to this implemented map; food tests and amylase-pH practical preparation remain planned with qualification-specific numbers. Organisation now6 available lessons; other sections still planned. Full app138 lessons/444 practice/824 checks.

Enzyme interaction tests all three foods/products and exact production sets with no extras. Conditions compare10/40/60°C, fresh20°C versus heated60/cooled20, both enzyme models at pH2/6, plus amount/time and1/time calculations. Measurement records persist visibly. Bile interaction conserves fat volume8 model units while exposed cube area doubles24→48; matched acidic/alkaline intact fat, alkaline split fat and absent-lipase control separate mechanisms. Cubes stand for fat-droplet geometry; product values are illustrative, not actual biological yields. All models start still, use native keyboard controls and readable diagrams.

Actual local QA:174 tests pass; all10 tasks completed, wrong cases/corrections and model resume verified. Full learning flows9/9,9/9,8/8; wrong practice retry, first-choice/numeric lock across reload, shared Separate Foundation/Combined Higher3/6 new completion verified. Source notes correct. All10 live tasks pass at390px with width390; native selected labels readable, comparison records retained,3D/2D fat diagrams and24px caption/title gap verified. Final enzyme-site selected buttons have checkmarks and contrast. Technical QA does not claim specialist review, independently written/freehand evidence or hands-on practical competence. Next food tests and amylase-pH practical preparation, then heart/blood in mapped batches.


### Batch02 publication

Published19 October2026 at19:46:01 UTC. Source `fcb71773acc43d06ecc8f3c1fed229195442387c`; deployment `appgdep_6ad673664d7c8191b81c8dbee6e42342`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_54cfa9f5c7908191b6a8e806496660a8`. Existing owner-private audience preserved. All10 new tasks exercised live at390px: document width390, readable selected values,3D/2D fat switching and24px diagram caption/title clearance. Final selected enzyme sites now show navy fill plus checkmark; verified at390px after publication. Initial85419f2 release superseded solely for visible production-site selection and cache tags. After final propagation, reload restored saved investigations. Six-question topic-assessment scope verified without starting a new run. Console errors empty; viewport reset. Proof `crash-course-digestive.png`.


## Batch03 — food tests and amylase practical preparation

Official8461/8464 section4.2.2.1 and linked AQA Biology practical handbook checked19 October2026. Two shared both-tier lessons add8 practice/18 checks/8 recall concepts. Seven grouped objective rows in `biology-practical-digestion-requirements.csv`, full brief `briefs/organisation-batch-03.md`. Food RP Biology4/Trilogy3: AT2,8 versus AT2. Amylase RP Biology5/Trilogy4: AT1,2,5,8 versus AT1,2,5. Source notes filter the route-specific apparatus skills correctly.4.2.1 and4.2.2.1 now have teaching and practical preparation; remaining Organisation sections are still planned. No whole-topic completion claim.

Food interaction requires separate portions, controlled methods, negative control and both known positive/negative tests for reducing sugar/Benedict, starch/iodine, protein/Biuret, lipid/ethanol emulsion. Lipid extraction uses a fresh suitable portion; aqueous filtering is not asserted to recover all fat. Written observations supplement colours; negative lipid fluid is transparent versus cloudy positive.3D tubes/precipitate have accessible2D equivalents, start still and support native controls. Discover cards show the matching test result. Methods/values/volumes are schematic, not student experimental evidence.

Amylase requires buffered pH, controlled water-bath temperature, matched enzyme/starch amounts and timing on mixing. Fresh samples are tested against fresh iodine every30s, with iodine outside the reacting mixture. Original endpoints4/6/8pH are180/90/150s; first negative after a preceding positive brackets disappearance. Repeats90/120/90 give mean100s and1/mean0.010s⁻¹. Student plotting of1/time includes wrong-point persistence, correction and limits on exact optimum/time inference. Supplied observations/repeats are original, not actual measured rates.

Local QA:178 automated tests pass on final logic; diff check passes. All5food+4amylase tasks completed; wrong heating/method/positive-endpoint/exact-time claims and corrections verified. Positive assay selections,60s starch-positive sample and wrong graph0.015 point persist through reload. All four assays re-exercised after correcting a local colour variable error. Both full flows9/9, practice retry, first choice/numeric locking and shared Combined Higher/Separate Foundation progress verified. Published and live phone verified; see release evidence below. Specialist validation, unrestricted constructed method/freehand graphing and physical school execution remain separate gaps. Next heart/vessels/blood mapping and lessons.


## Organisation batch03 publication

Published19 October2026 at20:58:12 UTC. Source `8eac0fc1864075c2b2cb61f0e7ce5e2abbee83f7`; deployment `appgdep_6ad6845479bc81919407d6bea476fa10`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_5216fc63d0508191918770f0804a7161`. Existing owner-private audience preserved. Live QA completed20 October2026: all9 investigation tasks at390px, document width390, readable native controls,3D/2D food models and24px caption/title clearance. All four assays compared positive/negative controls. All three pH sampling series, repeats and graph passed. BiologyRP5/AT1,2,5,8 notes verified; earlier local Trilogy/food route notes verified separately. Console errors empty, viewport reset. Proof `crash-course-practicals.png`.


## Batch04 — heart, circulation, vessels, blood and lungs

Checked20 October2026 against official8461/8464 sections4.2.2.2 and4.2.2.3. Exactly FIVE shared both-tier lessons add20 practice/41 checks/20 recall concepts.19 grouped objectives and exact independent IDs in `biology-circulation-requirements.csv`; full brief `briefs/organisation-batch-04.md`. Earlier aggregate remaining-scope record now excludes these implemented sections. Whole topic remains partial: health/lifestyle/cancer and plant organisation still planned. App145 lessons/472 practice/883 checks, Biology32 Separate/29 Trilogy, Organisation13 shared lessons.

Interactive coverage: four chamber roles; thick/thin left-wall comparison; working forward/reverse versus leaky valves; natural/irregular/artificial signal patterns and coronary supply; all11 double-circuit stops, named-vessel oxygen exceptions and volume/time calculations; matched artery/vein/capillary walls/lumens/valves; four component function/counterfactual comparisons; airway/alveolar views, two-gas net diffusion and one-factor-at-a-time area/path/ventilation/blood-flow comparisons.3D meshes and labelled2D diagrams are functional schematics, not anatomical measurements or medical simulations. Blood is not blue. Gas totals conserved in a closed illustrative comparison; equality stops net movement while molecules continue moving. Signals are not ECGs or clinical treatment evidence.

Local technical QA: all17 tasks completed; wrong pressure/route reasoning and correction verified. Leaky-valve comparison, mid-route pulmonary artery and step1 gas state persist after reload. All five full flows8/8,8/8,8/8,9/9,8/8; practice retry, numeric/choice first-answer locks, neutral diagram recognition and shared progress10/13 after prior5/13 verified.186 automated tests pass on final source; diff check passes, including finite actual3D builds across all components and neutral blood-figure tests. Labels/models follow teaching card component; figures have neutral shape descriptions for accessibility. Published and live phone verified; see release evidence below.

Evidence gaps: independent constructed explanations, unrestricted freehand biological drawing/graphing, real-micrograph recognition, AT7 physical microscope observation and drawing, and specialist content/anatomy review remain incomplete. Schematic recognition is not photo recognition. WS1.5 blood-product risk teaching is original general GCSE context; no patient advice or clinical outcome is inferred. Next FIVE: coronary disease/treatments, health/interacting disease, lifestyle risk, health-data interpretation, cancer.


## Organisation batch04 publication

Published20 October2026 at06:17:19 UTC. Source `461657baa28c585f5d81a54de9e55c167f295563`; deployment `appgdep_6ad7075ea47c8191b976608229e039b4`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_f6c716c6cd2c81919b3da6833cce010f`. Existing owner-private audience preserved. All17 investigation tasks exercised live at390px: document width390. Heart/blood3D/2D views,24px heart diagram caption/title gap, pacing patterns, all vessel constructions and gas/adaptation outcomes verified. Selected lung explanation was shortened after phone inspection; final short copy and width390 verified. Initialce3d0fbc release superseded only for shorter selected labels/cache tags.13-question available-lesson topic scope verified without starting a new assessment. Final source notes4.2.2.2/.3/source date20October correct. Console errors empty; viewport reset. Proof `crash-course-circulation.png`.


## Heart visual refresh20October2026
Shared original2D/3D cutaway replaces four-ellipse anatomy; cavity selection and wall counterfactual retained. Counts/scope unchanged.187 technical tests pass; browser and release evidence in `heart-visual-redesign.md`. Specialist, unrestricted drawing and physical practical evidence remain outstanding.

Published20 October2026 at06:28:31UTC; source `519f7e62dc6ac8b907d2c8d0a1b20a3df966fb88`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_bf68565f113081919af1025e80828b58`; deployment `appgdep_6ad70a0161ac8191969d550b77b1e086` succeeded. Existing owner-private audience retained. [Live app](https://gcse-science-atom-lab.newbuddy32.chatgpt.site/). Live390×844 check passed for labelled diagram, captions/key and3D fit; desktop restored. Screenshots `crash-course-heart-redesign.png` and `crash-course-heart-3d.png`.


## Batch05 — health, risk, data and cancer

Official8461/8464 sections4.2.2.4–4.2.2.7 checked20October2026.27 grouped statement objectives in `biology-health-requirements.csv`; full lesson brief `briefs/organisation-batch-05.md`. Five shared both-tier lessons add20 practice/40 checks/20 recall concepts.150 total lessons/492 practice/923 checks; Biology37 Separate/34 Trilogy, Organisation18 shared. Historical remaining-scope notes above describe earlier checkpoints; current remaining teaching is plant tissues/transport4.2.3, not health/cancer.

Interactive evidence: healthy/narrow/stented artery cutaways; equal-start later statin comparison; mechanical/biological/donor/artificial treatment tradeoffs; four disease pathways; diet/stress/life context; six exposure/outcome links; multiple risk factors; four cost scales; student-built frequency table/histogram and incidence bars; six scatter coordinates; sampling-frame comparison; controlled/contained/invasive tissue growth and blood-borne secondary establishment. Quantities and steps are original illustrative comparisons, not clinical probabilities, real flow/growth or diagnosis. Separate labelled2D and optional rotatable3D for arteries/tumours.

Local QA: all16 tasks and all five full8/8 flows complete. Wrong histogram feedback and saved wrong values, statin comparison state and mid-spread step2 persist on reload. Earlier completion10/18 retained, then15/18 after new five.193 automated tests pass; final phone/publication evidence to follow. Independent checks hide teaching model hints and include two graph stimuli. Constrained numeric/point entry is not unrestricted graphing or written evaluation. Specialist content/anatomy review, constructed/freehand and physical-practical evidence remain distinct outstanding gaps.

Final QA:194 tests pass; app diff check passes. All16 local phone task layouts have document width390 and readable native controls. Histogram caption/title gap43px; numeric fields have no dropdown chevron. Shared Separate Higher/Trilogy Foundation completion15/18 retained. Numeric first wrong answer2 stays locked on reload; retake7/8 remains recorded. Two independent graph stimuli rendered with no teaching-model hints. Live practice wrong→correct retry verified. Production phone check caught a backwards artery opening; final geometry opens toward camera and centres the blood/stent, backed by a transformed-bounds regression. Initialce1b64b2 release is superseded for this visual correction only. Final release record follows.


## Organisation batch05 publication

Published20 October2026 at06:53:18 UTC. Source `2fec4dc3b9b65efcc5f0a35aee9714388f2d9f0b`; deployment `appgdep_6ad70fd0f64481918edcba5e9a7ec5fa`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_64033c1114c881918dd4fc8785936fea`. Existing owner-private audience retained. Live phone390px confirms corrected open artery/stent and all five lesson views, including health chart and cancer2D/3D.18-question available-lesson assessment scope verified without starting a run. Console errors empty; viewport reset. Proof `crash-course-health.png`. Initialce1b64b2 deployment superseded only for default artery-cutaway visibility.


## Batch06 — plant tissues and transport

Official8461/8464 sections4.2.3.1/.2 checked20October2026.29 grouped objectives in `biology-plant-requirements.csv`; brief `briefs/organisation-batch-06.md`. Five shared both-tier lessons add20 practice/44 checks/17 recall concepts. Whole app155/512/967; Biology42 Separate/39 Trilogy; Organisation23 shared. Historical planned-plant notes above refer to earlier releases. Plant teaching is now implemented; complete topic statement/evidence reconciliation remains, alongside practical/constructed/freehand/specialist gaps.

Models: layered leaf cutaway with selected structures and separation slider; root/shoot meristems; neutral callout construction; root hair/gradient/energy counterfactuals; hollow front-facing xylem and porous phloem tubes; aperture-changing guard cells and true epidermal pore; whole plant routes; potometer bubble with displacement towards the shoot; six countable equal-area stomata fields and three plotted uptake coordinates. Alternative labelled SVGs, native controls, optional motion, saved states and symbolic scale notes provided. No calibrated transport/growth rate, real microscopy or actual apparatus manipulation is implied.

Local QA: all17 tasks completed; all five full flows8/8,8/8,10/10,10/10,8/8. Every lesson has practice wrong→retry feedback. Tissue-role and double-counted guard-cell errors reject and correct. Energy-off state,6mm/2min bubble and upper counts2,1,3 persist after reload. Numeric first wrong answer3 remains disabled on reload;9/10 retake recorded without clearing earlier answers/history. Prior15/23 progress retained then20/23 after five lessons. All17 phone layouts fit390px, labels shortened.202 tests cover actual mesh variants, true pore opening, tube cutaway direction, neutral labels, sampling/rates and progress. Final release/phone evidence follows.

Evidence limits: constrained labels and coordinates are preparation, not unrestricted drawing/graphing or written evaluation. Real transverse-section microscope observation/drawing (AT7), actual uptake apparatus (AT3/4/5), real stomata distribution investigations (AT6/7) and specialist content/anatomy review remain outstanding. No separate-only/HT-only requirement is introduced, and detailed phloem transport mechanism is expressly excluded.


## Organisation batch06 publication

Published20October2026 at07:29:00 UTC. Source `461d9f4aa416dcc7ed94595b3976c5459dbfbcea`; deployment `appgdep_6ad7182b53cc81919e49fd6c69791b92`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_f6b6df2f5b8c819196b19c7b53622e93`. Existing owner-private audience preserved. Live phone390px confirms23 available lessons, leaf-layer slider and tissue recording, all five new lesson models, phloem2D/3D and correct source refs/date/limitations.23-question available-lesson scope verified without starting a run. Console errors empty; viewport restored. Proof `crash-course-plants.png`.
