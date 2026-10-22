# Biology Organisation — batch03: digestive practical preparation

Checked/authored19 October2026. Two shared both-tier content assets; primary owns all custom widgets/integration/browser QA/publication. No specialist review or physical required-practical fulfilment claim.

## Identity, official references and route differences

- `science.biology.organisation.food-tests`, food-tests widget, scenes bioexp:food; prerequisite digestive-enzymes.
- `science.biology.organisation.amylase-practical`, amylase-practical widget, scenes bioexp:amylase; prerequisites digestive-enzymes/enzyme-conditions.
- Both refs2.2.1, topic `science.biology.organisation`, AQA Biology8461/Trilogy8464, Foundation/Higher. No route/tier-exclusive activity.

Sources read19 October2026: [Biology Organisation4.2.2.1](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/organisation), [Trilogy Biology4.2.2.1](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content), [official Biology practical handbook](https://filestore.aqa.org.uk/resources/biology/AQA-8461-PRACTICALS-HB.PDF), printed15–18 and40–45. Handbook methods are suggestions, not compulsory scripts.

| Activity | Biology8461 | Trilogy8464 | Official AT allocation |
|---|---|---|---|
| Food qualitative tests |RP4|RP3|BiologyAT2/8;TrilogyAT2|
| Amylase pH investigation |RP5|RP4|BiologyAT1/2/5/8;TrilogyAT1/2/5|

Lesson `skills` lists the union of relevant route ATs for the existing display schema; it must not be interpreted as identical official allocations. CSV keeps Biology/Trilogy AT columns separately. Additional WS2.2/3.4/3.5 are author method/uncertainty/interpretation links; MS1a/1c supports rates.

## Learning purpose and precise mapping

Students can choose reagent/conditions, describe positives and negatives in words, interpret controls/qualitative limits, plan a fair buffered-pH amylase comparison, recognise fresh30-second iodine sampling and endpoint, calculate repeat mean/relative rate and explain sampling uncertainty. `curriculum/biology-practical-digestion-requirements.csv` maps7 objectives to exact check IDs and source URLs.

Food test choice is **ethanol emulsion** for lipids. The currently served handbook uses ethanol/water and records a cloudy layer; no SudanIII text was found. The model uses a suitable fresh ethanol extraction followed by addition to water, a school-method adaptation rather than a claim that every food component is in one filtered aqueous solution. The handbook’s exact water/ethanol sequence is not asserted as the only acceptable procedure.

## Discover and method reasoning

Food has six cards, all bioexp:food: suitable food preparation/fresh portions; Benedict reducing-sugar test and water bath; iodine starch; Biuret protein; ethanol-emulsion lipid; controls/limits. Aqueous preparation may involve mixing/crushing with distilled water and suitable filtering. It does not establish that insoluble lipid was sampled; lipid uses a fresh appropriate portion.

Observations: Benedict positive may yield green/yellow/orange/brick-red precipitate after suitable water-bath heating, negative blue; iodine starch positive blue-black, negative retained orange/brown; Biuret positive lilac/purple, negative blue; lipid positive white/cloudy emulsion, negative no cloudiness/clear in suitable conditions. Test/reagent identity must accompany colour words. A Benedict negative is not absence of every sugar; the unmodified test targets reducing sugars. These are qualitative observations, not exact amount measurements. Known positives and reagent blanks support interpretation; original food colour/cloudiness can interfere.

Benedict sample tube is not heated directly in a flame; use a suitable supervised hot-water-bath method. Ethanol is flammable and must be kept away from flames and not heated in this test. School chemical handling/risk controls also apply to Biuret and other reagents. App observation never substitutes for real preparation/handling competence.

Amylase has five cards, all bioexp:amylase: buffered pH/variables; controlled water bath and timing at mixing; fresh iodine samples every30s; repeats/means/inverse time; endpoint-resolution limits. Keep enzyme/starch amounts/concentrations and sampling conditions comparable. Take repeated samples from the same reacting mixture onto separate fresh iodine drops, never add iodine to the main reaction or return tested drops. First sample without blue-black is the recorded endpoint, with orange/brown iodine in suitable conditions.

Original worked repeats60/90/120s→mean90s;60s mean→1/60≈0.0167s⁻¹. If positive at90s and negative at120s, disappearance is after90 and by120 under the method assumptions, not definitely105s or precisely120s. Repeats and anomaly investigation assess variation; an approved finer interval can improve timing evidence, while AQA explicitly specifies30-second sampling in this required activity.

## Investigate — primary widget contract

Primary reported food tasks cover preparation plus four reagent/method/result/control comparisons, with known positives/negatives and matched ethanol cloudiness. Amylase model uses illustrative pH4/6/8 endpoint data180/90/150s, constant37°C as a model condition, and matched repeats90/120/90s→mean100s→0.01s⁻¹. Those are original data, not a universal amylase optimum or a real practical record. The supplied constant temperature does not establish all amylases prefer37°C.

Parent owns these widgets and their verification. Require predictions/calculations before outcome, meaningful wrong feedback, text/non-colour labels, keyboard/reduced-motion access, saved drafts and correct completion rules. Test incorrect reagent, negative/positive confusion, adding iodine to main reaction, wrong reciprocal, endpoint precision, first answer versus retry, reload and route/tier context. A user must not complete the investigation solely by visiting the four test tabs.

## Practice / independent check / recall

8 practice (4 each),18 checks (9 each). Stable prefixes `bio.p-bioexpfood`/`bio.c-bioexpfood` and `bio.p-bioexpamylase`/`bio.c-bioexpamylase`. Eight concepts exported: bioexp-food-reagents/results/controls, bioexp-lipid, bioexp-amylase-method/endpoint/rate/resolution, all under bio.

Fresh independent numerical data:90/120/150s→mean120s;1/120 to4dp=0.0083s⁻¹. Practice mean90s and reciprocal60s differ from the widget mean100s; independent numbers are not copied widget outcomes. Mean tolerance0.001s; reciprocal tolerance0.00005s⁻¹ so the generic0.001 tolerance does not accept an excessively broad answer range at this scale. Matched starting amounts and endpoints are explicit:1/time is a relative index, not automatically product mass per second.

Engine owns independent first-answer locking, retakes, practice retries, result explanations, concept remediation/recall and saved course/tier/topic context. No freehand graph, full written method or hands-on reagent/micropipette/balance technique is graded. Selection/calculation evidence supports preparation rather than certification of complete practical skill.

## Misconceptions and limits

All sugars respond to Benedict; iodine is a general protein test; every sample must be positive; cloudy food automatically proves lipid without a comparison; one aqueous filtrate represents every insoluble constituent; a positive qualitative test gives exact concentration; water-bath heating means ethanol can also be heated; iodine belongs in the main amylase reaction; endpoint time is exact to a second despite30-second sampling; every odd repeat should be deleted; any1/time values can be compared irrespective of endpoint. Cards and distractors diagnose these separately.

All model colours, solution shapes, timing and observations are symbolic/illustrative; they are not photographs or measured class results. Verbal observations accompany visual colours. The source contains suggested amylase/buffer behaviour that varies with enzyme preparation; no universal pH optimum is inferred here.

## Verification / handover

| Check | Evidence/status |
|---|---|
| Official references/route/practical numbers | Both4.2.2.1 sources and handbook checked; AT differences explicit |
| Factual and numeric keys | Reagents/results, fresh sample logic, mean/reciprocal and interval bounds reviewed |
| Syntax/schema/IDs/prerequisites | Local audit passed against digestive batch02 |
| Actual widget/wrong paths/resume/phone/keyboard | All9 tasks and wrong/resume paths checked locally; both full flows9/9.178 tests pass on final logic; diff check passes; all9 live tasks at390px without overflow;3D/2D and24px clearance verified |
| Specialist/physical technique/constructed method | Outstanding |
| Publication/live proof | Published; final release in topic coverage record |

Owned `science-app/dist/content-biology-practicals.js`, this brief and `curriculum/biology-practical-digestion-requirements.csv`. No core/root registers/status/publication edits. Primary integrates, updates records and reports actual checks/release. Next scope: remaining Organisation heart/vessels/blood and later health/plant topics in mapped batches; practical specialist and physical execution remain separately recorded.
