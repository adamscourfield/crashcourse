# Biology Organisation — batch01

Authored/source-checked19 October2026. Three shared both-tier content assets. Parent owns topic registration, custom models, integration, browser QA and publication. Organisation is only partially implemented by this batch.

## Identity, scope and sources

AQA Biology8461 and Combined Science: Trilogy8464 Foundation/Higher. Topic `science.biology.organisation`; runtime prefix `science.biology.organisation.`:

| Lesson suffix/title | Exact refs in both specifications | Widget | Prerequisites |
|---|---|---|---|
| levels / Cells to organ systems |4.2.1|organisation-levels|science.biology.cells.specialisation|
| digestion / The digestive route |4.2.2.1 partial|digestion-route|levels,science.biology.cells.exchange-surfaces|
| enzyme-action / How enzymes work |4.2.2.1 partial|enzyme-fit|digestion|

Read19 October2026: [official Biology Organisation](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/organisation), [official Trilogy Biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content). Principles4.2.1 defines cell/tissue/organ/system/organism and develops size/scale.4.2.2.1 assumes KS3 digestive knowledge, requires enzyme nature/specificity/lock-key, chemical digestion/absorption and substantial further work deferred below. No Higher/separate restriction applies to this batch.

## Learning purpose and exact coverage

Students can classify organisational levels and connect cooperating functions, use supplied sizes rather than picture size, distinguish molecular digestion from physical breakdown/absorption, follow a basic digestive route and explain enzyme protein/catalyst/substrate/active-site/product relationships.

`curriculum/biology-organisation-requirements.csv` maps9 implemented objectives to precise question IDs and6 explicit planned rows. Remaining4.2.2.1 statements: temperature/pH activity and reaction-rate calculations; named digestive enzyme actions/sites/word equations; use of products in building carbohydrates/lipids/proteins and glucose respiration; bile formation/storage/neutralisation/emulsification; food-test practicals; amylase-pH practical. The wider4.2.2.2–7 and4.2.3.1–2 remain planned. Naming a topic in a selector does not mean these later lessons exist.

Practical numbering for future scope is recorded without claiming preparation here: food tests BiologyRP4/TrilogyRP3, amylase pH BiologyRP5/TrilogyRP4. Source AT allocations differ: food BiologyAT2/8 versus TrilogyAT2; amylase BiologyAT1/2/5/8 versus TrilogyAT1/2/5. Later briefs must preserve those differences.

## Discover and representations

Levels has five cards/scenes org:cell,tissue,organ,system,organism. Definitions lead to stomach tissues and cooperating digestive organs, then a single-celled-organism exception and supplied length conversions. Worked0.02 mm cell=20 μm;20 mm organ is1000times its length. Sizes are illustrative and hierarchy is organisational, not a literal uniform-size nesting rule.

Digestion has four cards/scenes digest:mouth,stomach,intestine,intestine. Simplified route mouth→oesophagus→stomach→small intestine→large intestine, then anus; glands may add secretions without food passing through them. Chewing/physical pieces differ from molecular breakdown. Digestive enzymes make small soluble products from large insoluble food molecules; many products enter the blood through the intestinal wall. Water/mineral ions do not need prior molecular breakdown. Large intestine absorbs water; egestion is not synonymous with digestion. Named enzyme/bile detail is expressly deferred.

Enzyme-action has four cards/scenes enzyme:fit,fit,reaction,unchanged. Enzymes are protein molecules/biological catalysts, not living cells. A substrate fits a specific active site, changes to products and leaves while enzyme remains available. Lock/key is a simplified shape model; real proteins are not perfectly rigid puzzle pieces. It does not establish universal direct ATP use or energy creation. Breakdown is the example, not a claim all enzyme reactions break molecules.

## Investigate — parent model contracts

- organisation-levels: predict the level of a supplied structure, assemble the hierarchy and connect different tissue/organ roles; compare supplied scales rather than merely grow an illustration.
- digestion-route: move a food/molecule representation through appropriate organs, distinguish physical pieces from chemical molecules, and predict what can cross an intestinal boundary. Avoid showing every swallowed substance as a large insoluble polymer or all nutrients taking one literal anatomical route.
- enzyme-fit: choose a matching substrate, predict reaction/products, then reuse the same enzyme. Show non-fitting substrate separately; no unsupported measured timing or chemical energy claims. Temperature/pH/denaturation remain later scope.

Primary owns all controls, models and success rules; no generic labs authored here. Prediction before result and targeted wrong feedback should establish learning rather than card visits. Text labels, keyboard/non-colour access, reduced motion and accessible diagrams must be verified after integration. Save draft answers/completion, test wrong/retry/reload and route/tier/topic switching. An animation is not proof of physical practical competence.

## Practice / independent checks / review

12 practice (4 each);24 independent checks (8 each). Stable prefixes `bio.p-org`/`bio.c-org`, `bio.p-digest`/`bio.c-digest`, `bio.p-enzyme`/`bio.c-enzyme`. No colliding prefixes were found in existing source when authoring. Eleven exported concepts under bio.: org-levels/cooperation/scale; digest-route/purpose/absorption; enzyme-nature/specificity/products/reuse/model.

Fresh numeric evidence:0.03 mm→30 μm practice;0.015 mm→15 μm check;30 mm÷0.03 mm=1000 independent ratio. Numeric tolerance0.001. Other checks use new classifications, physical-versus-chemical scenarios, absorption transfer, enzyme substrate mismatch/product retention and the limits of a rigid model. No exact rates, enzyme-production site answers or unsupported practical result tables are included.

Existing engine handles independent first answers, practice retry feedback, result scoring/remediation, retakes, recall scheduling and saved qualification/topic/tier context. Parent must test actual implementation. Selecting a definition or causal explanation is weaker evidence than independently writing one; no freehand digestive-system/organisation drawing or extended explanation rubric is automatically assessed.

## Misconceptions and model limits

- Tissue is one enlarged cell → many related cells cooperate.
- Organ contains only one tissue → different tissues contribute functions.
- Every organism must have organs → single-celled organisms are an exception.
- Equal-sized drawings establish actual size → scales/measurements are required.
- Chewing equals complete molecular digestion → physical piece size differs from molecule structure.
- Digestion equals absorption → breakdown and cross-boundary transfer differ.
- Every ingested substance requires enzyme breakdown → water/ions are already small.
- Enzyme is a living mini-cell or is consumed → a protein catalyst remains available overall.
- All substrates fit or substrate colour decides → active-site shape determines specificity in this model.
- Products are pieces of the enzyme → substrate changes while enzyme remains.

All tissue cells, organ sizes, pathways, active-site shapes, reaction timing and molecule colours are original schematics, not real micrographs or anatomical/chemical measurements. This bounded model does not show complete digestion or detailed molecular flexibility and does not certify every reaction is directly ATP-powered.

## Scientific skills, verification and handover

Official4.2.1 attaches MS1c for size/scale;4.2.2.1 attaches WS1.2 for enzyme models (rate MS1a/1c deferred). Other WS1.2 use is an author mapping. No numbered practical is implemented by this batch.

| Check | Evidence/status |
|---|---|
| Official bounded scope | Both Organisation sections read;4.2.1 covered,4.2.2.1 partial and remaining rows explicit |
| Eligibility/factual/numeric keys | Shared both-tier; definitions/route/catalyst limits and scale calculations reviewed |
| Syntax/schema/IDs/prerequisites | Local audit passed against current Cell biology content modules |
| Custom widgets/wrong paths/resume | All10 tasks completed; wrong gates and saved organ/absorption/enzyme states verified |
| Phone/keyboard/reduced motion | All10 live tasks checked at390px without overflow;3D/2D switching and keyboard/native controls verified |
| Specialist/constructed explanation | Outstanding |
| Publication/live proof | Published; see biology-organisation-topic-coverage.md |

Owned `science-app/dist/content-biology-organisation.js`, this brief and `curriculum/biology-organisation-requirements.csv`. No core/registry/status/publish mutation. Parent integrates the new topic/widgets, updates records and records actual tests/release. Next concrete scope: temperature/pH and rates, digestive enzyme products/sites, bile and the required practicals in mapped batches.

Parent integration:169 tests pass, all three full flows8/8 each, numerical and practice retry paths, first-answer locking, shared3/3 route/tier progress and isolated topic assessment3/3 verified. Publication/live phone evidence recorded in the topic coverage record.
