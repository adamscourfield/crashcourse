# Paragraph feedback integration

Status28October2026: implemented and locally tested; **not activated against OpenAI and not deployed as the hosted backend**. The lesson-only hosted release remains static until private key setup. `runtime/` prepares a Worker rollout under the existing Site ID/audience. Do not report a successful model call from mocked tests or a successful build.

## Student experience

Literature guided writing has Get AI feedback. Select a paragraph to review only the selection, otherwise the draft is used (60–6000characters). Explicit disclosure explains that the text/question/criteria go to OpenAI. A review gives strengths, three lesson-specific criterion judgments, one next edit and a reflection question. It is formative feedback, not a GCSE grade or teacher mark. Knowledge gates and mastery counts do not change. The last three reviews retain the exact submitted paragraph and timestamp in the existing browser-local lesson state. Drafts/first submissions are never overwritten. Independent-writing AI access is absent until the first response is submitted.

## Backend

`ai/marking.js` is shared by the loopback preview and Worker. POST `/api/marking` takes lessonId, paragraph and guided/independent kind. Question/criteria/context are looked up server-side from the stable lesson catalogue, not accepted from the browser. Production requires Sites identity plus same-origin JSON. Request body16KB, paragraph6000characters,30s provider deadline,1800output-token cap,20s per-user cooldown. Cooldown is per Worker isolate and is not a durable billing quota; retain owner-private access and add durable quotas before a broad public rollout.

OpenAI Responses API, configurable model (default gpt-4.1-mini), `store:false`, strict JSON schema. Missing key/refusal/timeout/invalid response produce honest errors; no synthetic mark fallback. Returned criterion IDs/lengths/statuses are validated; labels come from the rubric and quoted student evidence must be an exact substring or is removed. Student writing is explicitly untrusted data in the prompt. The system does not provide a substitute model paragraph or silently verify unsupported literary quotations. Prompting is not proof of perfect resistance or marking accuracy; specialist calibration still needed. No application-side paragraph/body/key logging or server-side paragraph database; provider data handling is not represented as zero retention.

## Private configuration required

Install/enable OpenAI Developers and use its `openai-platform-api-key` workflow with its required approval. Sites identity-and-secrets instructions require this route. Never paste keys into chat or browser fields, commit keys, or add them to hosting.json. Then configure `OPENAI_API_KEY` as a Site secret; `OPENAI_MODEL` is optional. No key existed when this integration was prepared. OpenAI Developers was subsequently installed; the user explicitly deferred key setup. Do not reopen provisioning until requested. Before activation, exercise a real opt-in synthetic paragraph request and record actual provider/model/error behaviour. Do not send real student data as a smoke test.

Official references checked28October2026:
- https://developers.openai.com/api/docs/guides/structured-outputs?api-mode=responses
- https://developers.openai.com/api/reference/resources/responses/methods/create
- https://developers.openai.com/api/docs/models/gpt-4.1-mini

## Build and rollout

The canonical source keeps authored lesson assets in `dist/`. `runtime/` is the supported Sites Vinext starter prepared separately for migration. Existing HTML and assets are copied into its public output, with the API intercepted server-side. Root `build` copies generated Worker output into ignored dist/server and dist/client; authored lessons remain tracked. The user deferred key setup. Root hosting.json remains static, matching the published lesson release. The prepared runtime/ Worker source is retained for a later migration; remove the static field only when secure key setup and rollout resume.

1. Install runtime dependencies using the Sites dependency helper in runtime/, or `npm ci` there on a normal developer machine.
2. `npm --prefix science-app test`; `npm --prefix science-app run build`.
3. `npm --prefix science-app run preview` serves localhost4177 with the same API; it binds only127.0.0.1 and injects a development identity. Do not deploy this Node shim.
4. With secure Site key configured, archive canonical app source into the separate app-only Site checkout, preserve project_id/audience, build/package with Sites helper and publish the exact returned commit/archive. Do not use the root repository as the helper checkout.
5. Verify live root/assets, authenticated API status and a synthetic actual model request, then record native deployment receipt/GitHub SHA separately.

Full suite830passed; final71focused after adding explicit independent AI-concealment assertions. API requests/responses are mocked in tests. Production Worker build passed and localhost4189 root/API-status/assets smoke checks passed with available:false. Browser preview confirms unavailable UI and safe existing draft flow; no real AI response was generated.
