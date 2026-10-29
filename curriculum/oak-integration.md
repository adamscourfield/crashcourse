# Oak resource integration and initial discovery

29 October 2026. Scope: authenticated API discovery and an initial curriculum comparison, not a completed audit or lesson import. Existing exam-board requirements and specialist-review statuses remain authoritative.

## Access and reproducibility

Current documented API is v1; playground also exposes frozen v0. Official OpenAPI schema: https://open-api.thenational.academy/api/v1/swagger.json . Read-only bearer authentication succeeded. The local `.private/oak-key` is ignored and mode600; never copy it to app assets, hosting archives, screenshots or GitHub. `.private/oak-cache` holds local response JSON; only endpoint/checksum/count metadata is committed. No learner data is sent. Do not print response bodies in routine logs.

Run `python3 tools/oak-read.py /subjects` from the repository. Other verified paths include `/subjects/english/programmes`, `/programmes/english-secondary-year-10-aqa/units`, `/programmes/english-secondary-year-11-aqa/units`, `/units/fiction-read-around-the-world/summary` and `/lessons/fiction-reading-skills/summary`. Client fixes HTTPS host/version, rejects arbitrary URLs/query strings, does not follow redirects, bounds request time, keeps auth out of process arguments, and withholds error bodies. Invoke deliberately; no automatic crawler/retries. Oak documents a standard1000 requests/hour limit. No key provisioning UI or OpenAI changes.

## What the initial comparison actually establishes

- AQA English programmes exist for years10/11. Returned17 and31 unit records respectively; these include alternative texts at identical sequence positions, not48 compulsory units or a required lesson count. Our Macbeth, Inspector Calls, Christmas Carol and Power and Conflict choices are represented. This is topic compatibility, not statement-level validation.
- The sampled Language fiction unit has18 lesson records, prior knowledge, curriculum statements, sequencing rationale and language classification. It connects reading of named writers with structure, narrative craft and extended writing. Crash Course's20 original micro-passage foundations do not yet demonstrate that range; retain the recorded priority for authentic broader reading and sustained writing in the remaining155 Language sessions.
- A sampled lesson summary supplies learning points, vocabulary, misconceptions, teaching tips and content guidance. Its `downloadsAvailable` is false. Published metadata does not imply that text/media can be downloaded or embedded. Do not bypass restricted assets or reproduce third-party novel passages from metadata references.
- Geography programmes enumerate AQA and Edexcel B, not our Edexcel A1GA0. Use transferable concepts only with explicit mapping to Edexcel A assessable statements, choices and fieldwork requirements.
- Science programme discovery returned only years1–9, but `/subjects/science` lists AQA KS4 sequence and board/tier/child-subject factors. This discrepancy is not evidence GCSE science is unavailable. Next inspect `science-secondary-aqa` sequence/units and preserve Combined/separate plus Foundation/Higher boundaries.
- Maths has year10/year11 Foundation/Higher programmes; History has AQA/Edexcel. Board labels alone cannot confirm our exact Maths specification or History options. Inspect unit-level factors before matching.

## Reuse and attribution

Official API terms allow adaptation and commercial reuse of OGL content, subject to exceptions and asset-specific licences. Each imported/adapted resource needs Oak lesson/unit identifier, canonical link, retrieval date, source version/checksum, exact fields used, licence/third-party credits, adaptation notes, local lesson/concept IDs, author review and QA. Use the specified subject attribution and OGLv3 link. Do not imply Oak endorsement or adopt its branding. Re-check rights on each actual extract/image/video, especially modern Literature and fiction. API availability alone is not permission for every referenced work.

Terms: https://www.thenational.academy/legal/terms-and-conditions-api-version
OGL: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
API overview: https://open-api.thenational.academy/docs/about-oaks-api/api-overview
Limits: https://open-api.thenational.academy/docs/about-oaks-api/api-limits

## Bulk and audit workflow

Bulk page offers subject/phase JSON including curriculum, quizzes, transcripts and misconceptions. Its schema is https://open-api.thenational.academy/api/bulk/schema.json ; required top-level fields: sequenceSlug, subjectTitle, sequence, lessons; optional ks4Options. Schema inspected; no bulk lesson file downloaded, no full-content import. Prefer targeted summaries for initial mapping and bounded private bulk caches when needed. Exclude raw caches from app deployment.

Next create a reviewable crosswalk: exam-board assessable statement → Crash Course teaching/practice/check/written evidence → Oak unit/lesson and learning point/misconception → match/partial/missing/not-applicable → reviewer/action. Compare prerequisites, misconceptions, assessment depth and sequencing, not titles or lesson counts. Candidate matches must not automatically change coverage to complete. Start English Language, then selected Literature texts, Science pathways and other subjects. Keep original interactive models and guided route; adapt resources to learning purpose rather than embedding entire lessons. No new availability claims until implementation and review.

Discovery evidence: oak-discovery-2026-10-29.json. Existing source inspected: science-app/dist/language/content.js, subject register and English Language coverage records. Counts and all learner progress unchanged; no deployment needed.
