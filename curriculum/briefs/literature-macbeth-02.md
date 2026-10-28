# Macbeth batch 2 — ten lessons, brief before implementation

## Identity and eligibility
AQA GCSE English Literature 8702, untiered, Macbeth. Curriculum IDs english-literature.macbeth.[discovery,crown,banquet,apparitions,resistance,unravelling,ending,macbeth-character,lady-macbeth,kingship]; runtime IDs lit.macbeth.[same suffix]. Existing five IDs and version1 progress retained. AQA3.1.1 whole-play study and3.3 reading/writing skills. Official sources checked28October2026: https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/subject-content/shakespeare-and-the-19th-century-novel and https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/subject-content/skills . Primary text https://www.folger.edu/explore/shakespeares-works/macbeth/read/ . Public-domain Shakespeare wording; original commentary; scene rather than edition-dependent line references. Folger combines the final battle/restoration material into5.8 where other editions divide5.8–5.9: identify both transparently.

## Learning purpose and prerequisites
Prerequisite: prior five scoped lessons, then chronological order through ending; character/theme lessons assume whole-play reading. Student reconstructs consequences and motives; distinguishes evidence, character claims and interpretations; analyses language/dramatic structure; connects a local detail to change across the play; drafts and revises a supported argument.

| Lesson | Observable focus / misconception to diagnose | Reading scope |
|---|---|---|
| discovery | Explain how discovery and flight change suspicion; flight is not proof of guilt |2.3–2.4|
| crown | Explain insecurity and independent planning; becoming king does not settle Macbeth |3.1–3.2|
| banquet | Connect escaped heir, disrupted feast and political resistance; guests do not share Macbeth’s ghost perception |3.3–3.6, including Hecate3.5|
| apparitions | Distinguish literal promise from Macbeth’s inference of invulnerability |4.1|
| resistance | Explain civilian suffering, testing and grief; Malcolm’s fabricated vices are not a confession |4.2–4.3|
| unravelling | Contrast mental/political disorder; hand-washing is not proof of a visible real stain |5.1–5.4|
| ending | Explain fulfilled conditions and Macbeth’s choices; moving wood is a military tactic |5.5–end|
| macbeth-character | Develop a changing character argument; courage and tyranny can coexist |whole play|
| lady-macbeth | Track persuasion, exclusion and guilt; avoid fixed gender stereotypes/unsupported diagnosis |whole play|
| kingship | Compare royal responsibility and coercion; divine-order readings do not make every king infallible |whole play|

## Discover
Three original cards per lesson: narrative/concept foundation, contrast/development, analytical method or interpretive qualification. Prior-knowledge connection refers to earlier scenes. A worked reading connects selected words and stage effects with a defensible interpretation. Read full linked scenes alongside the teaching: no claim that short summaries replace the text. Whole-play units use selected episodes, not a claim to cover every possible interpretation.

## Investigate and motion decision
Each lesson has three selectable language details, character perspectives and a scene/evidence sequence. Student chooses a detail and sees its interpretation, compares knowledge/claims, then answers an evidence-led challenge. Character/theme lessons use their sequence to compare earlier/later passages. Stage gate requires language details, view exploration and successful challenge. Wrong challenge feedback redirects to literal evidence and avoids treating opinion or prophecy as fact. Native buttons, readable text, no colour-only meaning. Static evidence comparison remains still: a looping camera or forced process movie would hinder close reading. No new3D assets are needed.

## Practice
Three distinct questions per lesson, IDs `<runtime>.practice.1–3`, stable `lit.macbeth.*` concept IDs. Exact stimuli, options, keys and explanatory feedback live in content-batch02.js. Wrong answers retain retry and explain the relevant misconception. First attempts remain separate. Correct response automatically advances with shared Stay here and manual Next. All untiered; no Science route/tier leakage. Selected responses practise interpretation and methods but do not establish independent written attainment.

## Independent check and writing
Four fresh knowledge/interpretation items per lesson, `<runtime>.check.1–4`; first answers lock, explanations only at results; 80% gate (4/4 with four items). Retakes archive prior responses; recall targets missed concepts. Independent prompts use different details/angles from practice. No passage explanation or hints are displayed in the knowledge question panel.

Each lesson also has an original short analytical writing prompt and three specific review criteria. Saved draft and immutable readable snapshots retain revision history. Criteria cover claim/evidence/method and development or qualification. Writing is not automatically scored; text presence/length does not earn a writing mastery claim. Reviewed extended responses and teacher/examiner assessment remain outstanding. Knowledge completion excludes the unmarked draft.

## Review, resume and subject skills
Keep current lesson/card/view/detail/question/first answers/check history/drafts/review across reload and subject changes via crash-course-literature-v1. Existing learners’ IDs and responses remain unchanged. Add concepts for suspicion, insecurity, equivocation, resistance, grief, legitimacy and structural development to later recall. Topic map lists built Macbeth only; lesson count/position reflects15available, not20planned. Reading/writing skills and interpretations are author mappings to3.3, not invented official paragraph codes.

## Verification and handover
Coverage objectives and exact item mappings go in english-literature-coverage.csv; requirements and registers updated after batch. Verify original five records unchanged,15unique lesson IDs/105question IDs, quotation/scene attribution, distractor/key correctness, stage gates, resume with old progress, independent locks, wrong/retry and draft-version escaping. Run affected regression checks and attempt browser QA only through available authorised tools. Record actual visual/mobile/keyboard limitations separately from automated checks; specialist review remains not performed. Publish existing owner-private Site with exact source and canonical GitHub main receipt. Next batch follows the roadmap; user requests ten lessons per batch.

Implemented28Oct2026: dist/literature/content-batch02.js; content/studio integrations and dynamic metadata; all registers/coverage updated. QA799fulltests and32final focused tests passed; offline handler journeys through10lessons plus wrong-check retake and old-release resume. All10quotations matched primary Folger text after normalisation. Browser layout/mobile/keyboard not exercised because recorded browser-tool security restriction remains; no specialist review. Actual GitHub/hosting receipt in BUILD_STATUS; source provenance in science-app/literature-batch02-qa.json.
