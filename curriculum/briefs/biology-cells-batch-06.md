# Biology Cell biology — batch06: osmosis

Source checked/authored19 October2026. Two content assets, shared Foundation/Higher across Biology8461 and Trilogy8464. Parent owns custom widgets, browser QA, source/publication and handover updates. No specialist or practical-competence claim.

## Identity, references and source discrepancy

- `science.biology.cells.osmosis`, **Osmosis & water balance**, widget osmosis-lab; prerequisites diffusion/cell-structures.
- `science.biology.cells.osmosis-practical`, **Investigating osmosis**, widget osmosis-practical; prerequisite osmosis.
- Topic `science.biology.cell-biology`; refs1.3.2 map to4.1.3.2 in **both** specifications. Plant-tissue concentration investigation is Biology **required practical3**, Trilogy **required practical2**. Both-tier/shared; no internal restricted questions.
- [Biology Cell biology](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology), [Trilogy Biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content), [official Biology practical handbook](https://filestore.aqa.org.uk/resources/biology/AQA-8461-PRACTICALS-HB.PDF), printed37–39 (osmosis student method), read19 October2026. Handbook introduction states suggested methods are not compulsory.
- Literal discrepancy: Biology online4.1.3.2 says **“use percentiles”**, whereas Trilogy says **“use percentages”**. Both also explicitly require percentage mass gain/loss; handbook asks percentage mass/length change. This batch implements the common explicit percentage calculations and records the percentile wording as an unresolved source clarification. It does not silently call it a typo or certify a percentile objective assessed. `biology-osmosis-requirements.csv` includes a separate unresolved row with no falsely assigned question evidence.

## Learning purpose and mapping

Students can explain water transfer through a partially permeable membrane, predict direction relative to cell contents, distinguish balanced molecular movement from no net mass change, calculate signed percentage change and average uptake rate, plan a controlled tissue comparison and interpret a concentration/percentage graph.11 objective rows (10 implemented teaching objectives plus the wording clarification) map exact item IDs and official source URLs.

Prior knowledge: diffusion/random movement and plant membranes/walls. Misconceptions: solute diffusion is osmosis; water always enters cells; wall supplies the selective barrier; equal conditions stop molecules; denominator is final mass; negative mass change is invalid; droplets measure uptake; exact zero crossing is universal tissue concentration.

## Discover and scientific examples

Osmosis has four cards: osmo:dilute definition; osmo:concentrated cell response; osmo:equal balanced movement; osmo:dilute signed percentage/mean rate. Membrane allows water but not the model solute. Plant walls support swelling but do not replace the cell membrane. Model pressure/real solute complexity is not fully represented.

Percentage = (final−initial)/initial×100, keeping the sign. Worked2.0→2.2 g gives+10%;2.0→1.8 g gives−10%, a10% loss. Mean water uptake is a supplied water-only mass-change proxy:0.6 g/3 h=0.2 g/h. It is not an instantaneous constant rate or proof every tissue mass change in every experiment is water alone.

Practical has five cards: osmoprac:method (plan and measurements), osmoprac:method (blot/repeat), osmoprac:data (calculations/axes), osmoprac:graph (zero crossing), osmoprac:graph (evaluation). Handbook-supported potato cylinders have equal diameter/length, initial masses, measured solution volumes, chosen immersion time, gentle final blotting and reweighing. Source, dimensions, time, temperature and volume are kept comparable. Repeats and anomaly investigation are sensible evaluation enhancements; no single exact cylinder length/immersion time is a compulsory protocol.

Plot concentration x and mean signed percentage change y. A straight local interpolation from0.2,+4% to0.4,−4% estimates zero at0.3 mol/dm³. No-net crossing is an estimate for that tissue/method, not a universally fixed potato-cell concentration. Graphs/data are original illustrative numbers, never attributed to a real experiment.

## Investigate — parent custom widgets

osmosis-lab should let the learner choose relative solutions, predict net direction and compare water movement, including equal conditions. Its outcome must not imply solute crosses a membrane defined as impermeable to that solute. osmosis-practical should require method choices, calculations and zero-cross interpretation before successful completion. Wrong predictions need explanations of relative dilution/sign/initial denominator rather than only red/green indicators.

Parent owns safe model rendering, independent graph figure support, text-labelled controls, keyboard/reduced-motion access, non-colour particle cues, completion, first answers and saved drafts. It must exercise wrong answers, reload and route/tier context. Changing a scene or reading a worked example alone is not enough evidence of investigation success.

Physical school method needs teacher-approved sharp-tool/stain-or-solution handling, suitable measurement equipment and risk assessment. The app does not certify ability to cut identical cylinders, safely handle tools, blot consistently, use a balance or plot an independent graph.

## Practice, checks, recall and numeric keys

8 practice (4 per lesson),17 independent checks (8 osmosis,9 practical). Stable prefixes `bio.p-osmo`/`bio.c-osmo` and `bio.p-osmoprac`/`bio.c-osmoprac`. Eight `bio.` concepts: osmosis-direction,cells,net,percent,rate; osmoprac-method,graph,evaluation (full module keys retain their prefixes).

Fresh checks:3.0→3.6 g=+20%;8.0→6.8 g=−15%;0.9 g/3 h=0.3 g/h;4.0→3.4 g=−15%;6.0→6.9 g=+15%. Numeric tolerance0.001. Signed-change wording consistently requires negative answers for losses, avoiding ambiguity between signed change and positive loss magnitude.

Independent graph schema: `{kind:'bio-osmosis-graph',points:[[0.1,9],[0.3,3],[0.5,-3],[0.7,-9]]}`. Question asks straight interpolation between central points; correct concentration0.4 mol/dm³. Renderer should label axes/units without annotation of the answer or zero-cross coordinate, and accessible text may list supplied data but must not solve it. Fresh plot inputs differ from Discover/practice.

Existing engine governs first-answer locking, scoring, retries, concept-level recall/remediation and saved qualification/topic/tier context. Parent must verify after integration. Choice-based axes/graph interpretation and numeric calculation do not demonstrate independent plotting or extended written explanation; those remain limitations alongside physical practical work and unresolved literal percentile wording.

## Scientific skills / verification / handover

Official: WS1.2 osmosis models; MS1a/1c calculations; MS4a–4d plotting/drawing/interpretation; practical AT1/3/5. WS2.2/3.4 are author planning/uncertainty links, not falsely attributed as the only attached codes. Percentage comparison addresses different initial masses but does not compensate for different surface-area/path geometry or measurement bias.

| Check | Evidence/status |
|---|---|
| Bounded source scope | Both4.1.3.2 sections and official handbook method checked; numbering difference preserved |
| Factual/numeric review | Direction, membrane distinction, signed calculations, mean rates and interpolation recalculated |
| Syntax/schema/IDs/prerequisites | Local audit passed;2 lessons,8 practice,17 checks,8 concepts |
| Source wording | Biology percentiles versus Trilogy percentages recorded; clarification outstanding |
| Widget/wrong path/resume/phone/keyboard | Parent integration/browser verification pending |
| Specialist review/independent graph/practical | Outstanding |
| Publication/live proof | Not performed by asset task |

Owned files: `science-app/dist/content-biology-osmosis.js`, this brief and `curriculum/biology-osmosis-requirements.csv`. No core/status/register/deploy changes. Parent integrates models, updates registers and records actual technical/publication evidence. Next scope: active transport and transport comparisons, then remaining separate-only culturing work.

## Integrated behaviour and actual verification

`dist/osmosis-models.js`, `osmosis-figures.js`, `widgets-osmosis.js` plus content/figure/widget dispatchers implement the brief.3 cell tasks require prediction,4 stepped snapshots and water-selectivity reasoning.4 practical tasks require valid plan/run, signed mean/percentage/rate calculations, five correct plotted coordinates and balanced-motion/estimate interpretation. Saved fields, steps and wrong plotted points persist. All7 tasks and both full flows pass8/8,9/9;157 automated checks pass. First independent choices/numbers remain locked on reload; route/tier shared14/14 preserved. Model/drawing/practical/source-wording limits remain as above. Published and live phone verified; see release evidence below.


Published19 October2026 at14:40:39 UTC. Source `e869293e5912cd1db48ca4717264adb49b4a69d9`; deployment `appgdep_6ad62bd3c88c81919ae008e4ab21093d`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_7ccddf0bc9f481919d1dd9484a762c33`. Existing owner-private audience preserved. Live14-lesson Biology list and all7 investigation tasks verified at390px with document width390; practical table300px wide;3D/2D osmosis and graph caption/title clearance24px. Final shortened selected-answer labels and osmosis-specific source/model notes verified. Console errors empty; viewport reset. Screenshot `crash-course-osmosis.png`. Initial143aa890 publication superseded only for mobile label refinement;157 tests passed on final source.
