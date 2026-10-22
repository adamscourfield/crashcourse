# Chemical analysis — completion lesson briefs

## Identity and eligibility

- Subject/discipline: Science / Chemistry. Topic: `science.chemistry.chemical-analysis`.
- Qualifications: AQA Trilogy8464 and separate Chemistry8462. Sources checked19 October2026; content version1. All seven lessons are both tiers. First four shared; last three separate Chemistry only, inheriting the restriction from4.8.3. Exact runtime references in the module omit the qualification prefix and resolve to4.x or5.x. No lesson or task is Higher-only.
- [Official Chemistry specification](https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/chemical-analysis),4.8.1.1–4.8.3.7; [Trilogy specification](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/chemistry-subject-content),5.8.1.1–5.8.2.4; [AQA handbook](https://filestore.aqa.org.uk/resources/chemistry/AQA-8462-PRACTICALS-HB.PDF), suggested methods pp19–23,48–53.
- Runtime source: `science-app/dist/content-analysis-completion.js`. Stable lesson IDs use `science.chemistry.analysis.<slug>`; question IDs `analysis.*`; concept IDs preserved within this new namespace.
- Full statement mapping: `curriculum/analysis-requirements.csv`,23 objectives. Research detail: `curriculum/analysis-research.md`.

## Learning purpose and dependencies

Students classify purity/formulations; explain and interpret chromatography; calculate dimensionless Rf; prepare practical methods; distinguish four gas tests; identify specified cations/anions with appropriate reagents; construct hydroxide formulae and balance molecular equations; identify reference emission patterns and calculate concentrations from supplied calibrations.

Prerequisites are the existing atomic elements/compounds/mixtures/separation ideas, ionic charges/formulae, balanced equations and acid reactions. These are semantic prerequisites, not newly imposed runtime gates that could invalidate old progress. New lessons retrieve them explicitly. Sequence follows the table below.

| Lesson slug | Objectives / observable end point | Discover and investigation | Misconception diagnosis and correction |
|---|---|---|---|
| purity-formulations | A01–04: classify chemically pure samples and designed products from evidence | Four explanation cards; compare melting records, match paint component functions, select a product meeting two performance thresholds | Natural means chemically pure → milk counterexample; most ingredient always best → multi-criterion performance table |
| chromatography-rf | A05–08: explain phases, compare lanes and compute ratios/distances | Four cards; calculate30/80, match unknown to two references, use a second solvent to resolve overlap and calculate distance | Invert Rf or use spot edge → origin/centre explanation; one spot proves purity → two-solvent evidence |
| chromatography-practical | A09: plan and evaluate RP6/Trilogy12 | Four cards; repair baseline/solvent setup, subtract a nonzero origin before division, repair broad spots/unmarked front | Raw ruler values are travel distances → subtract common origin; ink/submerged samples → contamination/washing explanation |
| gas-tests | A10–13: link specified test with distinctive observation | Four cards; distinguish burning/glowing splints, select limewater/damp litmus, justify carbonate gas result | Bubbles/colourless appearance identify gas → require positive specific test; all splints same → distinguish starting condition |
| cation-tests | A14–16: all five flames, six hydroxides/excess Al, balanced equations | Five cards; full flame-reference bank, excess-NaOH inference, Cu and Fe(III) equation construction, Mg/Ca/Fe(II) hydroxide formula transfer | White solid identifies Ca uniquely → Mg ambiguity; Fe(II)/Fe(III) confused → green/brown; formula altered to balance → correct OH groups and coefficients |
| anion-tests | A17–20: identify carbonate/halides/sulfate and both ions in single unknown RP7 | Four cards; acid/reagent planning with fresh portions, all three silver-halide colours, NaBr unknown formula, carbonate gas confirmation | Any white precipitate means sulfate → reagent-dependent evidence; HCl for chloride test → reagent introduces chloride |
| flame-emission | A21–23: compare instruments and interpret reference/calibration data | Four cards; match line positions, interpolate linear calibration, distinguish sensitive/rapid/accurate | Brighter different metal proves larger concentration → suitable same-metal calibration; two lines alone identify → compare line positions |

## Discover

Each lesson has four or five original explanation cards and a named model scene `catalog:<lesson-id>`. Cards connect conceptual explanation, worked reasoning and exam-style evidence. Table/flow scenes intentionally suit qualitative identification and calibrated data; they do not claim molecular mechanisms or actual spectra. Spectral positions and calibration numbers are explicitly illustrative, not real memorised wavelengths. All colour evidence has text labels. Scientific test colours are preserved, rather than recoloured to the UI palette.

## Investigate

Each lesson has three to five staged lab tasks with explicit fields, answer keys, feedback and success messages. Tasks require evidence-based decisions or numeric/formula construction, not simply opening a scene. Common catalog engine will own saving, validation, keyboard labels, responsive layouts and stage gating; this content file supplies `lab`, `catalog-analysis` and scene hooks only. Every select has stable values, number fields have tolerances and formula fields expect specified formulae with only whitespace/subscript normalisation. Product formula tasks avoid alternative compound names or ambiguous full-equation syntax.

Numeric lab keys: Rf30/80=.375, second-solvent distance.70×60=42mm; nonzero-origin distances39−12=27mm and72−12=60mm,Rf.45; calibration54/18=3mg/dm³. Equation labs Cu(OH)2 with NaOH2, Fe(OH)3 with NaOH3/NaCl3, plus Mg(OH)2,Ca(OH)2,Fe(OH)2. Formula answers may use rendered subscripts via engine normalisation. Tasks and scenes use original synthetic observations consistent with the specification, not copied empirical results.

## Practise

23 original supported items cover methods, interpretations, numeric ratios/calibration and equation coefficients. Each has stable ID, concept and explanation. Common engine should preserve first practice attempts separately from later correct retries. Examples include40/64=.625,24/60=.40, calibration50/20=2.5, and Fe(III) NaOH coefficient3. Feedback uses the actual reasoning rather than a bare wrong/right label.

## Independent check

45 original independent questions:6 purity,6 chromatography,6 practical,6 gases,8 cations,7 anions,6 instrumentation. Fresh numeric examples:18/72=.25; .60×50=30mm;21/60=.35; (46−10)/(70−10)=.60;75/30×2=5mg/dm³; MgCl2 uses NaOH coefficient2. Numeric tolerance normally.001; integer coefficients tolerance0. Choice answers use actual option indices checked against their explanations. No formula free-entry independent type is invented here: supported formula construction occurs in lab and the independent bank tests transfer with fresh coefficients/formula recognition. This limitation is explicit in coverage records.

The shared app controls first-answer locking, results and80% threshold. These short checks provide representative evidence; they do not establish unrestricted scientific writing or complete practical competence. All four gas tests have independent questions. All five flames and all six hydroxide observations are in teaching/lab; independent questions sample these rather than exhaustively testing every colour in every run. Later recall should retrieve the mapped eligible concepts and never expose separate-only content on Trilogy.

## Review and progression

New concepts cover purity, formulations, phases, Rf, chromatograms, method/evaluation, gas tests/evidence, flames/hydroxides/equations, halides/carbonates/sulfates, unknown salts, instrumental advantages, emission and calibration. Existing engine schedules recall and saves lesson/question IDs. Test returning to a partial lab task and an answered independent item; switching Trilogy/Separate should preserve but hide ineligible progress. All new lessons remain eligible on Foundation and Higher in their respective routes.

## Subject-specific skills and practical limits

Official attached skill codes are recorded in the module; authoring links to method reasoning/data interpretation are not claims of externally assessed competence. Shared chromatography practical: ChemistryRP6/TrilogyRP12,AT1/4. Separate unknown-ion practical:RP7,AT1/8. Full molecular hydroxide balancing is both-tier; optional ionic-equation Higher work is not required for completion here. Handbook methods are suggestions. Fresh aliquots/clean wires control contamination; use suitable school-approved reagents, handling and risk assessment. No gas-smelling instructions or home generation activities. Simulations do not fulfil school practicals.

## Verification evidence

| Check | Status |
|---|---|
| Full statements and restrictions | Research checked against official sources;23 mapped objectives; inherited separate restriction verified |
| Factual/mathematical answer keys | Author checked; Node syntax/import/schema checks passed for7 lessons,23 practice,45 checks,24 tasks and21 concepts; option answers, finite numeric keys, field schemas, scene hooks and three separate-only flags validated |
| Core integration, wrong/retry/resume | Parent integration and browser QA pending |
| Phone, keyboard, reduced-motion/screen reader | Parent QA pending; content provides labelled textual evidence |
| Publication/live | Not published by this content task; parent to record actual evidence |
| Specialist review | Not performed |

## Handover

Owned files: new content module, this brief, analysis-requirements.csv. No core engine, register or deployment changes by this delegated task. Parent must integrate exports, source references, catalog renderer and topic registry; run relevant checks; exercise every novel interaction, wrong/retry and saved answers; reconcile registers and actual publication. Remaining work includes unrestricted independent written accounts, physical practical technique and specialist review. Full content authoring does not erase those evidence limitations.
