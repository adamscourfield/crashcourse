# Crash Course workspace instructions

## Before starting work

Read `BUILD_PLAN.md` and `BUILD_STATUS.md`, then the relevant curriculum register rows and coverage map. Inspect the actual source for the lesson or feature being changed. Follow the user's latest priorities if they differ from the recorded recommendation, and update the handover accordingly.

## Keep the product coherent

- The app is called Crash Course and supports multiple subjects. Studio labels, course maps, activities and progress must follow the selected subject.
- Science currently supports AQA Trilogy and separate sciences, with Foundation/Higher filtering. Course-specific and tier-specific requirements are distinct.
- Verify new curriculum requirements against official specifications. Map assessable statements, not only headings.
- Use `LESSON_TEMPLATE.md` for new briefs. Build explanations, meaningful interactions, feedback-led practice, independent assessment and later recall.
- Share overlapping content across qualifications. Preserve stable lesson/question/concept IDs and existing progress; test any migration.
- The current app has an atomic topic, five Bonding batches and five Quantitative Chemistry batches and six Chemical changes batches, with explicit topic scoping. Preserve topic/course/tier separation for assessments, review and progress when expanding.
- Use polished 3D where it helps learning, with accessible diagrams and model limitations. Adapt the interaction type to the subject.
- Do not present planned subjects/topics as available, or technical QA as specialist content review.

## After each batch

Update `BUILD_STATUS.md`, `curriculum/subject-register.csv`, `curriculum/topic-register.csv`, `curriculum/lesson-register.csv` and affected coverage records. Record what was implemented, what checks actually passed, what was published, unresolved limitations and the next concrete action. Keep planning, implementation, QA, publication and specialist-review statuses separate.

For code changes, run relevant checks in `science-app/` and exercise new interactions, wrong-answer paths and resume behaviour in the browser when available. Avoid repeating unrelated checks without a reason.

Use the existing Site identity in `science-app/.openai/hosting.json`; preserve its audience. Follow the Sites skill for source preparation and publication. Planning-only documentation changes do not require an app deployment. Never store credentials or real student data in these records.
