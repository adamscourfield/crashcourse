# Biology Cell biology — batch04: stem cells

Checked/authored19 October2026. Two shared both-tier content assets; parent owns models, integration, technical/browser QA and publication. No specialist review or whole-topic completion claim.

## Identity and eligibility

AQA Biology8461 and Combined Science: Trilogy8464; both use4.1.2.3, no separate-only or Higher-only statements here. Topic `science.biology.cell-biology`.

| Lesson | Runtime ID | Widget | Prerequisites |
|---|---|---|---|
| Stem cells & cell potential |science.biology.cells.stem-cells|stem-lineage|differentiation,cell-cycle|
| Stem-cell uses & decisions |science.biology.cells.stem-cell-uses|stem-uses|stem-cells|

Official sources read19 October2026: [Biology Cell biology](https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology), [Trilogy Biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content). Definition/source capacities are in the first4.1.2.3 content paragraph; therapeutic cloning, risks, objections and plant applications in the next paragraph/bullets. Detailed techniques are expressly not required. WS1.3 is officially attached to evaluating practical risks/benefits and social/ethical issues.

## Learning purpose / mapping

Students can distinguish maintaining stem cells from producing specialised descendants; compare embryonic, adult marrow and plant meristem capacities; connect possible treatments to replacement-cell functions; explain the patient-gene/rejection link in AQA’s simplified therapeutic model; evaluate benefits, virus-transfer risk and ethical/religious objections; explain quick/economic plant cloning for conservation and useful crops.

`curriculum/biology-stem-requirements.csv` maps9 objectives to precise independent question IDs. The embryo claim remains **most** human cell types; marrow **many**, including blood, with more limited potential; meristems **any plant type throughout life**. The sources are not interchangeable. No claim that every mature cell is a stem cell, every plant cell can differentiate unrestrictedly, or a model route guarantees success.

## Discover

Stem-cells has four cards:

1. stem:embryo — definition, self-renewal and differentiation distinction.
2. stem:embryo — embryonic broad human-cell potential; cloned cell supply.
3. stem:marrow — restricted adult potential, replacement blood cells.
4. stem:meristem — any plant-cell fate throughout life, with limits on mature-cell inference.

Stem-cell-uses has five cards:

1. stemuse:therapy — possible help for diabetes/paralysis through suitable replacement cells.
2. stemuse:cloning — embryo with patient genes, AQA model of non-rejection, remaining risks.
3. stemuse:therapy — virus-transfer risk and ethical/religious viewpoints.
4. stemuse:plants — quick/economic cloning, rare species and disease-resistant crops.
5. stemuse:plants — evidence limits: copies versus genetic variation, limited trial versus universal cure.

Worked reasoning is qualitative: suitable cell source → possible descendants → role; patient genetic match → rejection explanation in simplified model; selected useful parent → identical plants retaining that feature. No techniques, protocol recall, actual clinical data or claims of universal treatment availability are taught.

## Investigate — parent model contract

The primary task builds custom widgets, not generic lab objects. Recommended meaningful prediction sequence:

- stem-lineage: choose source and predict a permitted differentiated outcome while retaining a stem-cell supply; reject marrow→every human type and meristem→animal claims. Show possible pathways with feedback; a branch does not guarantee an experimental outcome.
- stem-uses: connect a proposal to a benefit and remaining risk; separate patient matching from treatment efficacy/infection; weigh a stated ethical viewpoint without treating it as a wrong factual answer. Compare conservation/crop choices against their stated purpose rather than present one universal ethical decision as “correct”.

Observe before/after only after a prediction where appropriate. Completion should require correct source/function/evidence reasoning, not a checkbox saying material was read. Parent owns labels, keyboard/non-colour/reduced-motion controls, accessible alternatives, saved state and wrong-path feedback. No claim that these behaviours pass until exercised after integration.

## Practice, independent check, review

8 practice (4 each);18 independent checks (8 potential,10 uses). Stable IDs `bio.p-stem1..4`,`bio.c-stem1..8`,`bio.p-stemuse1..4`,`bio.c-stemuse1..10`. Concepts: stem-definition,stem-capacity,stem-meristem,stem-therapy,stem-cloning,stem-evaluation,stem-plants, all under `bio.`. No numeric tolerances or figure schemas are introduced.

Fresh contextual checks include maintaining a stem-cell pool, restricting an overbroad marrow model, evidence for differentiation, limited treatment-study conclusions, infection despite matching, ethical versus experimentally measurable concerns, and cloned copy count versus genetic variation. Answer explanations give the causal distinction after response; existing check mode must hide these until the answer is locked.

First-attempt/retry records, scoring threshold, retakes, recall scheduling, remediation and route/tier/topic resume use the established engine. Parent must test wrong first answer, retry, reload and context switching. Selection of a balanced evaluation is useful but weaker evidence than independently writing one: constructed evaluation, causal explanation and drawing rubrics remain outstanding.

## Misconceptions and scientific limits

- Every stem cell can become every cell → source-specific capacity.
- Self-renewal means every daughter must differentiate → maintain supply and specialised descendants are distinct outcomes.
- Genetic matching guarantees a cure/removes infection → match addresses rejection in the simplified model, other risks/effectiveness remain.
- Diabetes/paralysis are certain cures → AQA describes possible applications; clinical success/availability is not inferred.
- Ethical disagreement is the same question as viral contamination → values and biological evidence both matter but answer different questions.
- Cloning creates novel resistance or guarantees immunity to all disease → retains selected parent traits; no universal immunity claim.
- More identical plants automatically increases genetic variation → increased copies and diversity are distinct.

Lineage geometry, organelle drawings, cell numbers, times and colours are symbolic. They are not real microscopy, lab protocols or clinical outcome records. AQA’s therapeutic-cloning statement is explicitly presented as its simplified teaching model, not a guarantee about every transplant. No required practical is introduced and no hands-on competence is claimed.

## Skills / verification / handover

WS1.3 for risk/benefit/social-ethical evaluation is official. WS1.2 for stem-lineage modelling is an author mapping rather than a separately attached code in this paragraph. Links to differentiation, cell cycle and later inheritance/health topics are preserved without claiming their coverage.

| Check | Evidence/status |
|---|---|
| Exact specification/eligibility | Both4.1.2.3 source paragraphs checked; shared both-tier |
| Factual/answer keys | Capacity language, self-renewal, plant uses and rejection/risk distinctions reviewed against source |
| Syntax/schema/IDs/prerequisites | Local audit passed against current Biology content modules |
| Widgets/wrong paths/resume/browser | 148 automated tests;6 investigation challenges, wrong feedback, saved drafts,8/8 and10/10 full flows pass |
| Phone/keyboard/reduced motion | Native keyboard controls and desktop diagrams checked; all6 live contexts checked at390px without overflow and24px caption/title clearance |
| Specialist review/constructed evaluation | Outstanding |
| Publication/live proof | Published and live verified; see release evidence below |

Owned files: `science-app/dist/content-biology-stem.js`, this brief and `curriculum/biology-stem-requirements.csv`. No register/status/core edits by this task. Parent integrates the two widgets, updates curricular records, runs relevant tests and records source/publication evidence. Next scope: membrane transport (diffusion, osmosis, active transport) and remaining separate-only culturing; this batch does not complete Cell biology.

Integrated files: `dist/stem-models.js`, `dist/widgets-stem.js`, content/widget dispatchers and registry. Three lineage tasks require predicted capacities, self-renewal and two tested paths each. Three use tasks require both proposals and the matched-source task requires both contamination states. All model drafts persist. Static labelled diagrams have no autonomous motion; native selects/buttons provide keyboard and non-colour access. Ethical judgement is not marked as a moral choice.

Published19 October2026 at13:35:33 UTC. Source `8346bf4c016e9c740332ad88c2352b1504f2ba9d`; deployment `appgdep_6ad61c944c3481919b977aa827bbf73b`; version `appgprj_6ad1be5897a88191909a03ad57857103~appgver_6a5d820110588191bc15e54c1dd7a9a7`. Existing owner-private audience preserved. Live9-lesson Biology list, all6 model contexts at390px, final compact selected-answer copy and clean console verified. Viewport reset. Proof: `crash-course-stem-cells.png`. Initial dc484229 release was superseded only to shorten mobile answer labels;148 tests passed on final source.
