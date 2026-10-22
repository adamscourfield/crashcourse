# Biology Cell biology — batch08: culturing and inhibition

Authored/source-checked19 October2026. Three separate Biology content assets; custom widgets, technical/browser QA and publication remain parent work. No specialist review, physical aseptic competence or completion-of-practical claim.

## Identity, scope and official audience

All lessons map AQA Biology8461 **4.1.1.6 Culturing microorganisms (biology only)**. No corresponding Trilogy requirement: `separate:true`; lessons are both-tier. Topic `science.biology.cell-biology`, runtime prefix `science.biology.cells.`:

- culturing, **Culturing microorganisms**, culture-lab; prerequisite cell-types.
- bacterial-growth, **Bacterial growth calculations**, growth-lab; prerequisites culturing/cell-cycle.
- inhibition-zones, **Investigating inhibition zones**, zone-lab; prerequisite culturing.

Sources read19 October2026: [official Biology Cell biology specification](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology), [AQA Biology practical handbook](https://filestore.aqa.org.uk/resources/biology/AQA-8461-PRACTICALS-HB.PDF), printed10–12 teacher/technician guidance and34–36 student microbiology worksheet. Source audience is school/college GCSE teaching and **supervised** practical work, not home culturing. Handbook methods are suggestions rather than compulsory scripts. Biology **required practical2** investigates antiseptic/antibiotic effects on growth with inhibition zones, AT1/3/4/8.

`curriculum/biology-culture-requirements.csv` maps10 objectives with exact question IDs, source URLs, source audience and remaining limitations. Scope includes broth/agar, uncontaminated cultures, all four required aseptic-control reasons, conditional binary fission, population/area calculations and practical interpretation.

## Learning purpose / Discover

Students can explain how culture controls protect interpretation, distinguish conditional growth from unlimited doubling, calculate supplied populations, measure/approximate inhibition areas, and evaluate a controlled comparison without clinical claims.

Culturing has five cards: culture:broth media/purpose; culture:agar sterilisation/contamination; culture:aseptic loop; culture:aseptic taped lid/inversion; culture:aseptic school25°C limit. Reasons: sterilise dishes/media/loop to kill pre-existing or transferred contaminants; tape helps prevent accidental opening; inversion reduces condensation falling onto agar; maximum25°C reduces encouragement of harmful body-temperature-adapted microorganisms. The limit is not sterilisation or proof unknown organisms are safe. Approved school organisms/procedures and staff disposal remain necessary; reopening incubated growth/home unknown cultures is outside scope.

Growth has four shared cards: growth:0 binary fission and conditional20-minute example; growth:1 doubling intervals; growth:3 varied starting population; growth:3 model limits. Binary fission is not nuclear division by mitosis. Formula N×2ⁿ is used with supplied constant division time, matching time units and no-death/resource-limit assumptions. Worked1 bacterium/20 min/60 min gives8;5/30 min/2 h gives80. Real timing/synchrony and resource limits differ.

One extra **Higher-only** card (`higher:true`, growth:3) teaches normalised population standard form, example6400=6.4×10³. AQA restricts expressing the bacterial population in standard form, not the ordinary population calculation itself. Shared investigations must remain completable at Foundation.

Zones has five cards: zone:measure school RP2/context; zone:measure mean perpendicular diameter/radius; zone:compare variables/control/repeats; zone:measure explicit disc-area convention; zone:evaluate inference limits. Radius=diameter/2; area=πr². Worked12 mm diameter→113.04 mm² atπ3.14. Total circle including a6 mm disc within20 mm outer diameter=314 mm²; if explicitly excluding disc, subtractπ3² to get285.74 mm². Subtraction is a supplied geometry extension, not an additional required biological recall rule. Circular approximation/irregular boundaries are explicit.

## Investigate — parent model contract

Parent builds culture-lab controls explaining contamination/reasons rather than operational culturing instruction; growth-lab predicts division counts/population and flags conditional assumptions; zone-lab requires diameter→radius→area plus controlled comparison/evaluation. Growth widget has no tier access: keep all investigation tasks both-tier and confine Higher expression assessment to filtered card/questions.

No generic lab objects are authored. Controls need labels, keyboard access, non-colour cues, reduced motion, accessible diagrams and saved predictions. Completion requires meaningful correct choices/calculations, not visiting all cards. Wrong feedback should diagnose doubling-versus-addition, hours/minutes, radius-versus-diameter and inference limits. Parent tests errors, first-answer locking, retry/reload and route/tier fallback.

School practical safety is taught as rationale and boundaries. The app does not provide an operational home-culture protocol or demonstrate flaming, aseptic transfer, incubation, disposal or ruler technique. It contains no living material. Figures, counts, zone measurements, growth timing and bacteria graphics are original symbolic models rather than laboratory/clinical records.

## Practice / independent check / Higher gating

Full Higher totals: **13 practice,26 checks** across three lessons. Foundation totals: **12 practice,25 checks**. Culturing4/8; growth4/8 base plus1/1 Higher; zones4/9. IDs `bio.p-culture1..4`,`bio.c-culture1..8`; `bio.p-growth1..4`,`bio.c-growth1..8`; `bio.p-growthht`,`bio.c-growthht`; `bio.p-zone1..4`,`bio.c-zone1..9`.

**Runtime gating contract:** bacterial-growth has `higherQuestions:['bio.p-growthht','bio.c-growthht']`; app does not filter an item merely because `q.higher` exists. Shared lesson has `higher:false`. The standard-form card uses `higher:true`, supported by current card filtering. No other tasks/cards are Higher-only. Correct normalised forms:4096→4.096×10³ practice;3072→3.072×10³ independent. This choice format recognises normalisation but does not independently grade typed standard-form production, a remaining assessment limitation.

Fresh counts:4 initial/2 doublings→16;20-minute division time/3 h→9 doublings;4 initial/20 min/2 h→256;10 initial/30 min/90 min→80. Numeric whole-count tolerance0.001. All intervals are complete; no unsupported fractional-cell or partial-interval rule is introduced.

Zone checks: outer diameter20 mm→radius10;16 mm→200.96 mm² usingπ3.14;18/22 perpendicular diameters→mean20;outer radius9/disc radius3, clear area excluding disc→226.08 mm². Areas tolerance0.01, givenπ3.14. Figure schema `{kind:'bio-zone',diameter:20,disc:6}`: renderer labels measured diameter and shows neutral ruler, but must not annotate the requested radius/area answer. Both tiers calculate areas. Repeats/control/circular limits and test-specific inhibition conclusions are independently assessed.

Eleven exported concepts cover media, aseptic/safety, growth calculations/timing/limits/standard form, and zone geometry/measurement/method/limits. Existing engine governs independent answer locking, retry records, scoring, recall/remediation and saved route/tier/topic progress; parent validates integration. Selecting a reason is not a full independently written aseptic-method explanation; no freehand geometry or physical technique rubric is scored here.

## Misconceptions and evaluation limits

-20-minute doubling is universal/forever → conditional on nutrients/temperature and model assumptions.
- Bacterial fission is mitosis → bacteria lack nuclei.
- Add2 per interval → multiply population by2 per interval.
-25°C/tape guarantees safety → only parts of approved school risk controls.
- Diameter is radius → halve before squaring.
- Larger zone proves all cells killed/clinical cure → visible growth inhibition under test conditions only.
- Equal disc sizes alone make tests fair → strain, agar, treatment conditions, time and temperature also matter.
- Irregular zoneπr² is exact → model approximation using stated mean dimensions.

The controls include the appropriate carrier-only disc; a positive carrier effect complicates attribution. Diffusion through agar and test conditions also influence zone size. No clinical treatment selection or efficacy guarantee is offered.

## Skills, verification and handover

Official4.1.1.6 opportunities: WS2.2/2.4 aseptic reasons; MS1a/1b/1d/2a/2h populations; MS5c circle areas; practical AT1/3/4/8. MS1b expression of population answers is the explicit Higher restriction. WS3.4 repeats/spread is an author link, not a claim every attached skill has been independently demonstrated.

| Check | Status |
|---|---|
| Source/scope/eligibility | Official separate-only4.1.1.6 and handbook reviewed; both-tier base/HT expression separated |
| Factual/numeric keys | Aseptic reasons, counts, standard forms and circle conventions recalculated |
| Syntax/schema/IDs/prerequisites | Local audit passed against existing Biology modules |
| Higher Foundation filtering | Asset metadata checked; parent must run actual browser/test route/tier checks |
| Widgets/wrong paths/resume/phone/keyboard | Parent implementation/QA pending |
| Specialist/physical practical/constructed response | Outstanding |
| Publication/live proof | Not performed by content asset task |

Owned `science-app/dist/content-biology-culture.js`, this brief, `curriculum/biology-culture-requirements.csv`. No core/status/register/publish edits. Parent integrates widgets/figures, updates records and performs technical/browser/release checks. Next: reconcile Cell biology statement coverage, retaining physical-practical and constructed-response gaps separately from implemented teaching.

## Integrated technical verification

Primary files `dist/culture-models.js`, `culture-figures.js`, `widgets-culture.js`, dispatchers and registry. All10 investigation tasks and3full Higher flows passed8/8,9/9,9/9;165 automated checks pass. Wrong answers/model plans corrected with feedback; culture/lid/temperature, generation counts and ruler states persist. Both independent locks and neutral plate figure checked. Foundation growth4cards/8checks; Combined excludes3lessons and shared16/16 completion retained, Separate saved work restored. Keyboard ruler endpoints recorded20/22mm. Published and live phone verified; see release evidence below. Physical practical, unrestricted written work and specialist review remain outstanding.


Published19 October2026 at18:56:39 UTC. Source `a0259fa7f97b978b9605723905387548fc97d0cf`; deployment `appgdep_6ad667d6e4b48191a7476813d9222fb4`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_ff2a8e1c50f88191bc91615ebeb2b83e`. Existing owner-private audience preserved. Live19-lesson Separate Biology list and all10 investigation tasks verified at390px: document width390, diagram caption/title clearance24px.3D/2D media switching, readable native controls, both supplied growth comparisons, keyboard20/22mm ruler measurements and area/control tasks passed. Console errors empty; viewport reset. Screenshot `crash-course-culturing.png`.
