# Organic completion — implementation brief

19 October 2026. Content asset authored; central integration, browser QA and publication are owned by the parent task and remain unverified here. Specialist review not performed.

## Identity, scope and sources

- Science / Chemistry; AQA 8462 and Trilogy8464; topic `science.chemistry.organic-chemistry`.
- Source checked 19 October2026: [Chemistry Organic](https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/organic-chemistry) and [Trilogy Chemistry](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/chemistry-subject-content).
- Detailed statement/eligibility research: `curriculum/organic-research.md`; objective mapping: `curriculum/organic-requirements.csv`.
- Stable namespace `science.chemistry.organic.`. Original assets `dist/content-organic-completion.js`, exports organicCompletionLessons/Concepts. No existing IDs renamed.
- Shared both-tier lessons: alkanes, distillation, hydrocarbon-properties, cracking. Separate both-tier: alkenes, alkene-reactions, alcohols, carboxylic-acids, addition-polymers, natural-polymers. Separate Higher: weak-organic-acids, condensation-polymers, amino-acids. All questions follow their lesson's gate; no internal Higher questions are mixed into Foundation lessons.
- Prior learning: atom conservation, chemical equations, covalent bonding, molecular properties and polymers; weak-acid lesson uses ionisation/pH from Chemical changes. No prerequisite IDs inserted until central integration verifies actual IDs.

## Observable lesson purposes and interaction

| Stable suffix | Student can / meaningful lab predictions | Diagnostic misconception |
|---|---|---|
| alkanes | Recognise finite crude mixture; apply CnH2n+2; connect valence and atom counts. Predict propane formula, H on ethane carbons, classify a mixed sample. | Hydrocarbons may contain oxygen; crude oil is pure; carbon valence ignored. |
| distillation | Explain evaporation/column gradient/condensation and feedstock. Select region from boiling data, compare collection levels, distinguish physical separation. | Condensation breaks molecules; fractions are pure; low-boiling fraction condenses first at base. |
| hydrocarbon-properties | Predict three size trends; balance complete combustion. Set property predictions and independently construct two equation coefficient sets. | Viscosity falls with size; alter subscripts to balance; forget O2 is diatomic. |
| cracking | Explain two general methods/usefulness; conserve atoms; interpret bromine test. Complete missing cracking formula, predict observation, select demand-solving process. | One unique cracking split; all orange reagents become colourless; distillation creates smaller molecules. |
| alkenes | Identify C=C/unsaturation; recognise first four; construct atom counts/bonds. Predict C4H8, valence and pentene chain extension. | Double bond counts as one; first alkene contains one carbon. |
| alkene-reactions | Describe combustion/addition and conditions; connect first-four alkene skeletons to H2/H2O/halogen products. Predict hydrogenation formula, bromination product bond string, hydration reagent/conditions. | C atoms disappear; hydration uses H2 only; double bond stays. |
| alcohols | Recognise first four/OH; predict sodium/oxidation/water/combustion; explain fermentation. Construct butanol formula, balance propanol combustion, choose fermentation conditions. | All oxygen compounds are alcohols; fermentation needs boiling/aeration; ignore oxygen in alcohol. |
| carboxylic-acids | Recognise first four/COOH; predict carbonate/aqueous/ester behaviour. Build ethanoic formula, identify gas, predict ester+water. | Forget COOH carbon; acid+carbonate gives H2; esterification makes salt. |
| weak-organic-acids | Explain partial ionisation versus concentration and equal-concentration pH. Interpret particles, choose controlled comparison, calculate pH ratio. | Weak means dilute; pH scale linear; different acid concentrations establish strength. |
| addition-polymers | Construct/infer repeat and monomer with atom conservation. Build ethene repeat, infer propene, calculate retained mass. | Lose CH3 branches; retain C=C; assume water by-product. |
| condensation-polymers | Explain difunctional monomers/polyester links/water. Select chain-forming pair, count actual links/waters, identify ester linkage. | Monofunctional pair makes chain; water count always equals monomer count. |
| amino-acids | Recognise glycine/groups; explain peptide link and polypeptide/protein. Count groups, finite chain links/waters and identify peptide chemistry. | Confuse ester and peptide; proteins only glycine; count one water per monomer. |
| natural-polymers | Match polymer/monomer; explain DNA role/two strands/four types. Match cellulose, interpret chain/type counts, identify amino-acid polymer. | DNA has four total monomers; proteins use glucose; gate basic monomer knowledge behind Higher. |

## Discover, practice and independent evidence

Each lesson has three explanation cards: key concept, representation/worked relation, then application/limitations. Every card uses `catalog:<lessonId>`; central catalog renderer provides the lab's illustrative visual. Visuals are flow/tables with text labels and symbolic structures, plus explicit ethane/propene atom-and-bond models; no assertion of a full polished molecular 3D scene is made.

Each lesson has three lab tasks. Fields are predicted numbers, formulas or evidence/condition selections; every field must match. Success feedback explains the reasoning, while wrong feedback directs attention to bond counts, conservation, functional groups or controls. Numeric tolerances are0.001; formulas use exact case and the central normalization contract (Unicode subscripts and spaces only). Bond-string prompts specify ASCII hyphens to avoid an ambiguous input convention. 39 practice questions provide explanation-led remediation. 65 independent questions use fresh examples, five per lesson; first answers/retries, result scoring, concept recall, review scheduling and resume storage must use the existing parent engine.

IDs: `organic.p-<slug>1..3`, `organic.c-<slug>1..5`; concept `organic.<slug>`; task `<slug>1..3`. Root objective CSV lists teaching statements and independent item IDs. The mapping deliberately records limitations rather than certifying specialist coverage.

## Scientific skills and limitations

Chemical formulae, balanced equation coefficients, interpreting tables, molecular valence, repeat-unit inference and scientific models are included. WS1.2 applies throughout; MS5b is an author mapping for representations. Official opportunity mappings additionally include WS4.1 for hydrocarbon properties and AT2/5/6 for alcohol/acid investigation. No numbered Organic required practical; virtual tasks do not fulfil supervised work. General catalyst/heating conditions are taught; precise numerical industrial conditions are not a recall gate.

Critical assessment limitation: the generic engine checks condensed formula/bond strings and choice/numeric responses. It does **not** grade a student's complete displayed structure, annotated distillation column or extended explanation. Lessons explicitly ask for paper drawing where appropriate; teacher/specialist review is still needed for those skills. Do not claim this question bank alone fully assesses every production verb in AQA. Chemistry includes conceptual explanation but recall/selection is weaker evidence than independently written explanation. DNA model omits atomic detail; polymer diagrams simplify shape/length/ends; finite-chain water counts explicitly state open-chain assumptions.

## Verification / handover

- Content-module JavaScript syntax: passed locally.
- Final factual pass: checked combustion coefficients (including oxygen-bearing alcohols), cracking atom conservation, C valence in ethane/propene models, condensation open-chain counts, pH ratios and route/tier inheritance. Explicit butene/pentene skeletons and terminal-alkene hydration main-product structures added. Numeric industrial conditions remain contextual, not compulsory recall.
- Structural audit: 13 unique lessons,39 practice,65 checks,39 lab tasks; all answer indices/numbers valid, all IDs unique, all lab answers represented in select options; numbers finite.
- Route/tier source verification: documented; central eligibility tests still required.
- Browser, keyboard, phone, wrong-answer paths, persistence, first-answer locking, review and publication: not exercised by this bounded asset task.
- Independent specialist chemistry review and practical risk review: outstanding.
- Next concrete action: integrate catalog-organic dispatch and topic registry; add route/tier/answer-key tests, exercise each task family plus wrong/reload paths; reconcile whole-course statement gaps before declaring Chemistry complete.
