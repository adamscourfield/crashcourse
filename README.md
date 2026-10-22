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
