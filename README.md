# Crash Course

An interactive GCSE learning platform supporting AQA Combined Science: Trilogy and separate sciences, with Foundation/Higher filtering, and Pearson Edexcel GCSE Mathematics (1MA1): fifteen Number lessons covering N1–N16 and fifteen Algebra lessons, with generated, mastery-based practice and algebra answers marked by equivalence. The platform is designed to support additional subjects as their curricula are built.

## Project source

The canonical repository is [adamscourfield/crashcourse](https://github.com/adamscourfield/crashcourse), on the `main` branch. Work from the repository root; `science-app/` is an ordinary tracked application directory, not a submodule.

## Run locally

The app is buildless HTML, CSS and JavaScript. From the repository root:

```sh
python3 -m http.server 4173 --directory science-app/dist
```

Open <http://localhost:4173/>. Progress is saved in the browser on that device.

## Checks

With Node.js installed:

```sh
cd science-app
npm test
```

The current automated suite contains 470 tests, including generated-item checks for maths. Browser walk-throughs for maths are in `science-app/tools/`. Browser verification records are stored alongside the app; technical checks are separate from specialist curriculum review.

## Project layout

- `science-app/dist/`: deployable app, lesson content, interactive models and local assets.
- `science-app/dist/maths/`: maths engine (item generators, exact marking, mastery rules), lessons, models and studio UI.
- `science-app/tests/`: automated checks.
- `curriculum/`: subject/topic/lesson registers, specification coverage, briefs and review records.
- `BUILD_PLAN.md` and `BUILD_STATUS.md`: workflow, current delivery status and next batch.
- `LESSON_TEMPLATE.md`: requirements for new lesson briefs.
- `DESIGN-SPEC.md` and `DESIGN_ADAPTATION.md`: design system and implementation decisions.
- `crash-course-*.png`: saved visual verification.

Read `AGENTS.md`, `BUILD_PLAN.md` and `BUILD_STATUS.md` before continuing work. Preserve stable content IDs and saved progress, and update curriculum records after each batch.

## Publishing

The existing Site identity remains in `science-app/.openai/hosting.json`. GitHub is the canonical project source; pushing to GitHub does not itself deploy the hosted Site or change its audience. Follow the Sites publishing workflow and preserve the current audience when publishing app changes.

Previous app-only Site source history has been preserved locally in `.git/sites-source-backup/`. It is not uploaded. Use a separate app-only publishing checkout when the Sites source helper needs its own repository, rather than creating a nested Git repository in this working tree.

Generated deployment archives, dependency folders, local secrets and caches are excluded. Third-party Three.js licensing is retained in `science-app/dist/assets/THREE-LICENSE.txt`.

## Physics Electricity batch03 — implemented, published and GitHub updated

Five shared lessons: AC/DC sources; mains wiring/safety; electrical power; appliance energy; National Grid. AQA8463/8464 4/6.2.3.1–.2 and4/6.2.4.1–.3 checked22October2026. Grid ideal-transformer VpIp=VsIs is Higher only: required in Trilogy6.2.4.3; separate Physics4.7.3.4 cross-topic scaffold only. Separate transformer construction/turns ratio and static electricity remain later. Nominal UK50Hz/about230V, wire roles/colours, live/open-switch hazards, P=VI/I²R and E=Pt/QV explicitly taught. No live-mains activity or numerical real fault-current/trip-time model.

Science288 lessons:113 Chemistry150 Biology25 Physics; Maths30/78 skills preserved.1068 practice/1843 checks before filters; new21/31, including1 Higher practice/check. Separate Higher288/Foundation251; Trilogy Higher215/Foundation197. Electricity15 shared; Grid Higher card/task/questions filtered and completion requirements revalidated by tier.114 films/109 bindings. Five process cards default inline autoplay/Loop; reduced-motion paused. Models compare AC/DC frequency, nominal conductor pairs, electrical power, timed energy and fixed-power transmission/cable losses; all settings and bounded interpretation required. Toy grid voltages/1Ω line are not real transmission ratings. Input energy is not automatically useful output; AC height normalised, not230V peak.

478 combined automated tests passed after merging Maths graph commit0d9de13. Five complete browser journeys:6/6 each, Grid7/7 Higher. Wrong comparison, numeric value/reason, experiment prediction, practice and premature progression rejected.37 phone views at390px fit with one player;5 process cards default Pause/Loop. Grid200V/2000W/wrong prediction7 restores across reload/TrilogyFoundation/back. Foundation Grid4cards/3tasks versus Higher5cards/4tasks;15-lesson Foundation assessment inventory verified. DC comparison corrected to display DC. Maths graph table/five plotted points accepted; no console errors. Prior Energy/Ecology browser completion counts were not confirmed in final shared-origin state; stable IDs and restore tests pass. Technical checks are not specialist review, unrestricted drawing/writing, real apparatus competence or complete statement/evidence audit. Existing progress IDs retained; incoming Maths-r6 cache preserved; global20261022-electricity03r2. Published22October2026 at18:32:25UTC to the existing owner-private Site; audience unchanged. Sites source8d02227618c32e6f8af2df878584e80651c86bfb; deployment appgdep_6ada56a6a78c8191b43622ec49dbcf4b; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_ae5843fd72688191adec497e2182b877. Archive science-app-electricity03.tar.gz; proof crash-course-electricity03.png. Live Electricity15 inventory and Grid process/Pause/Loop verified; Maths Number15/Algebra15 including five new graph lessons verified, no live console errors. Incoming Maths commit0d9de13 merged,30lessons/78skills retained. Runtime/QA canonical commitd026b98 pushed to origin/main; final publication records/proof follow in this handover commit. Next: separate static charge/fields, followed by Electricity statement/evidence reconciliation. Energy/Biology evidence/specialist audits remain open.

## Physics static/particle batch01 — implemented and browser checked; publication pending

Five lessons: three separate-Physics both-tier lessons on electron transfer, non-contact forces, radial fields/sparks (4.2.5.1/.2); two shared both-tier lessons on density/practical preparation and state changes/mass conservation (4/6.3.1.1/.2). Official8463/8464 statements checked22October2026. Density preparation covers regular dimensions, irregular displacement and liquid container subtraction, Physics RP5/Trilogy RP17 AT1, not physical certification. Field-pattern recognition/constrained direction choice supports drawing requirements but unrestricted independent field drawings remain evidence gap. Full Electricity statement/evidence reconciliation remains pending; do not mark topic certified/closed merely because all section headings have teaching.

Science293 lessons:113 Chemistry150 Biology30 Physics. Maths30/78 skills preserved.1088 Science practice/1873 independent checks before filters;20/30 added. Separate Higher293/Foundation256; Trilogy Higher217/Foundation199. Electricity18 separate/15 Trilogy; Particle Model2 both routes/tiers.119 films/114 bindings. Five explicit process cards default inline autoplay/Loop, reduced-motion paused; other cards direct. Saved investigations compare four charge cases, four sign pairs, four source/distance fields, six density method/sample cases and ten state-change/mass cases. Qualitative predictions are labelled choices, not invented force values; numeric charge counts/density are illustrative. All cases and bounded interpretation required. Watching cannot finish investigations.

487 combined automated tests passed. Five complete browser journeys6/6; wrong comparisons, numbers/reasons, sequences, predictions, practice and premature actions rejected. Universal conclusions cannot complete models.35 phone teaching/task views at390px fit with one player; exactly5 looping process cards. Negative-source/far/wrong outward-strong prediction restores after reload and hiding in Trilogy/Foundation/back.18 separate/15 Trilogy Electricity and2 Particle assessment inventories verified. Source notes show RP5 versus RP17 by route; no browser console errors. Existing fallback navigation preserved by appending the new topic after Electricity, rather than changing the first available topic. Duplicate diagram/movie gradient IDs discovered visually and fixed with distinct namespaces; corrected particle shading inspected. Charge-frame tests count16 negative markers including in-transit and16 positive markers throughout transfer.

Models use schematic counts, signs, arrow lengths, trajectories and expanded/symbolic timing. Positive-test-charge field convention; no Coulomb law, numerical force/field strength or spark threshold. Spark sequence is conceptual, no high-voltage construction/activity. Density data original, assumptions full immersion/no bubbles/absorption, images not scales. State film keeps12 fixed-size markers in a sealed20g account; changes physical/reversible, open-system evaporation boundaries explicit; no latent-heat/temperature curves yet. Recognition/selected response is not unrestricted writing/drawing, physical apparatus competence, specialist review or full assistive-device certification.

Files: content-physics-matter.js; mat1-models/figures/visuals/films.js; widgets-mat1.js; content/widget/process/registry/source-note integration; no saved-ID migration. Global20261022-matter01r3; Maths-r6 unchanged. Brief physics-static-particles-batch-01.md; statement map physics-static-particles-batch01-requirements.csv; browser evidence science-app/matter-browser-evidence.json. Publication/GitHub pending. Next Physics batch: internal energy, specific-heat-capacity retrieval/cross-link, latent heat, heating/cooling curves and gas pressure; detailed scope first. Electricity and Energy/Biology full statement/evidence audits and specialist reviews remain open.
