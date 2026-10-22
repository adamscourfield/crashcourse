# Biology Organisation — batch04: circulation and lungs

Source checked/authored20 October2026. Exactly five lessons, all shared Foundation/Higher. Primary task owns custom widgets, integration, technical/browser QA and publication. No specialist review or complete Organisation claim.

## Identity and official references

Topic `science.biology.organisation`; runtime prefix `science.biology.organisation.`:

| Suffix / lesson | Ref in Biology8461 and Trilogy8464 | Widget / scene | Prerequisites |
|---|---|---|---|
| heart / The heart |4.2.2.2|heart-lab / circ:heart|organisation.levels|
| double-circulation / Double circulation |4.2.2.2|circulation-route / circ:route|organisation.heart,cells.exchange-surfaces|
| blood-vessels / Blood vessel adaptations |4.2.2.2|vessel-lab / circ:vessels|organisation.double-circulation|
| blood / Blood components |4.2.2.3|blood-lab / circ:blood|organisation.levels,organisation.double-circulation|
| lungs / Lungs & gas exchange |4.2.2.2|lung-lab / circ:lungs|cells.exchange-surfaces,organisation.double-circulation|

Prerequisite prefixes are `science.biology.`. Sources: [official Biology Organisation](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/organisation), [official Trilogy Biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content), both read20 October2026. Blood-product evaluation context additionally checked against [NHS blood transfusion information](https://www.nhs.uk/tests-and-treatments/blood-transfusion/) for benefits, compatibility/testing and residual infection/reaction risks. This is educational risk evaluation, not individual treatment advice.

`curriculum/biology-circulation-requirements.csv` maps19 objectives to precise independent question IDs, refs, skills and URLs. Shared tiers/routes have identical teaching here. No Higher-only production, numerical extension or assessment is introduced.

## Learning purpose and Discover

Students can connect heart/chamber/vessel structures to pumping, trace both loops with named vessels, calculate supplied volume rates, distinguish blood components/functions/adaptations, and explain air-to-blood gas exchange using separate gradients.

- **Heart,5cards:** four chamber roles/person’s right-left; right ventricle→lungs/left→body and thicker left wall; one-way valve function; coronary muscle supply; natural right-atrial pacemaker/artificial electrical correction. Individual valve names are expressly not required. Detailed coronary disease and treatments remain later scope.
- **Double circulation,5cards:** pulmonary artery→lungs→pulmonary vein return; left ventricle→aorta→body→vena cava return; vessel direction versus oxygen; repumping between circuits; mean volume/time with unit conversions. Deoxygenated is not oxygen-free, and symbolic blue is not literal blood colour.
- **Vessels,4cards:** thick muscular/elastic arterial walls; lower-pressure vein return/larger lumen/representative valves; one-cell-thick capillary walls/narrow lumen/network area; compare structures using function rather than colour. Many veins have valves, not an assertion every named vein has an identical valve arrangement.
- **Blood,6cards:** plasma tissue transport; red-cell haemoglobin/biconcavity/thin centre/no mature-human nucleus/flexibility; different white-cell defence roles; platelet fragments/clotting; blood-product benefit/risk; schematic recognition limits. Plasma carries nutrients/CO2/urea, cells/fragments and thermal energy. White-cell functions include engulfing and antibody/antitoxin production by different types. Platelets support local clotting, reducing blood loss/pathogen entry.
- **Lungs,5cards:** trachea/bronchi/airways/alveoli; many sacs/thin alveolar and capillary walls; oxygen air→blood and CO2 blood→air under supplied gradients; capillary refresh; ventilation refresh. Lung vocabulary stays within the named required structures; detailed diaphragm/intercostal mechanics and counter-current theory are not added.

Model sizes, heart orientation, pressures, travel times, particle counts and blood colours are symbolic. Alveolar blood supply/ventilation sustain gradients rather than create gases. Air does not flow through the heart chambers or normally enter the bloodstream as bubbles. The blood model exaggerates platelet size and cell spacing for legibility, without a calibrated relative-size claim.

## Investigate — primary model contract

Primary plans17 purposeful interactions: heart4,route3,vessels3,blood4,lungs3. This brief does not certify their completion. Appropriate challenges include chamber/pressure/one-way predictions, named route tracing, matching wall/lumen to conditions, component-function recognition and changing area/barrier/refresh conditions. Require a learner prediction and meaningful feedback, not merely selecting all display tabs.

The primary renderer must label controls for keyboard/non-colour access, support reduced motion, provide accessible diagrams/text and save draft/completed evidence. Test a wrong route, pulmonary artery/oxygen misconception, rate-unit error, capillary-thickness inference, blood recognition and separate gas gradients. Verify first-answer locking, retries, reload, phone layout and topic/course/tier scoping after integration.

## Practice / independent checks / calculations

20 practice (4 each),41 checks (8 each except blood9). Stable prefixes `bio.p-circheart`/`bio.c-circheart`, circroute,circvessel,circblood,circlung. Twenty `bio.circ-` concepts exported. Questions are original classifications, causal applications and fresh calculations; no reused actual patient measurements or copied exam items.

Rate examples: Discover450 cm³/30s=15 cm³/s. Practice600/40=15 cm³/s; supplied50 cm³/beat×80 beats/min=4000 cm³/min. Independent750/30=25 cm³/s and900mL/3min=300mL/min. Numeric tolerance0.001. Matching time units and1cm³=1mL are explicit; per-beat multiplication is a supplied arithmetic example rather than extra formula recall. Averages are not instantaneous pulsation or clinical readings.

Three independent blood-recognition items use `{kind:'bio-blood',component:'red'|'white'|'platelet',labelled:false}`. Parent confirmed support for neutral feature descriptions, with no identity labels or accessibility answer hints. Shapes may show pale non-nucleated red-cell form, a nucleated white cell and fragments; all are original schematics. The remaining items assess functions/adaptations/risk. **Actual photograph/micrograph recognition, microscope observation and the student’s own labelled drawing remain outstanding**, even if these diagrams pass technical checks.

Existing engine owns independent first attempts, retries, result explanations/scoring, remediation, recall and saved context. Selecting a causal explanation is weaker than independently constructing one; no freehand heart/vessel/lung drawing or extended structure→process→function rubric is automatically graded. No blood handling or real physiological measurement is requested or certified.

## Misconceptions and constraints

Heart right/left equals viewer right/left; atria are the main output pumps; all chamber walls need equal pressure; valves make oxygen or pump independently; chamber blood alone supplies every heart-muscle cell; pacemaker replaces the whole heart; every artery carries oxygen-rich blood; every vein carries oxygen-poor blood; every vein has identical valves; every capillary wall is thick; plasma is haemoglobin; every white cell has one identical function; platelets are complete nucleated cells; screening proves zero risk; lungs pump blood/create oxygen; ventilation equals membrane diffusion. Cards and distractors distinguish these claims directly.

Blood-product benefits/risks are qualitative and proportionate: screening and compatibility controls reduce risks rather than guarantee zero. No clinical thresholds, blood-group compatibility table, transfusion protocol, patient recommendation or treatment guarantee is taught. Coronary treatments/health/lifestyle/cancer and later plant Organisation content remain outside this batch.

## Skills, verification and handover

Official4.2.2.2 attaches MS1a/1c to blood-flow rates.4.2.2.3 attaches AT7 microscope observation/drawing opportunity, WS1.5 blood-product risk and WS3.5 recognition/adaptation evidence. WS1.2 heart/route/vessel/lung model codes are author mappings, not invented official paragraph annotations. No new numbered required practical is introduced.

| Check | Evidence/status |
|---|---|
| Source/ref/eligibility | Both4.2.2.2/.3 verified; exactly5 shared both-tier lessons |
| Factual/numeric keys | Chamber direction, exceptions, blood adaptations, lung gradients and fresh rates reviewed |
| Syntax/schema/IDs/prerequisites | Local audit passed against existing Organisation/Cell biology assets |
| Model/wrong paths/resume/phone/keyboard | All17 tasks, wrong/resume paths and five full flows8/8,8/8,8/8,9/9,8/8 verified;186 tests pass. All17 live phone tasks pass at390px,3D/2D and native controls checked. |
| Specialist/constructed explanation | Outstanding |
| Real blood image/microscope/drawing | Outstanding; schematic recognition only |
| Matching publication/live proof | Published; exact provenance in biology-organisation-topic-coverage.md |

Owned `science-app/dist/content-biology-circulation.js`, this brief and `curriculum/biology-circulation-requirements.csv`. No core/widgets/registers/status/deployment edits. Primary integrates and records actual checks/release. Next: remaining Organisation disease/treatment/health/lifestyle/cancer and plant tissues/transport in further batches, with specialist/image/physical evidence kept distinct from technical QA.
