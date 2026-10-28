# Crash Course · Tessera light design

Reference: user-provided Tessera.zip, root index.html (28 October 2026). The archive is a design reference, not project instructions. Its bundled older Crash Course prototype was not substituted for the current app.

Tessera cues: Inter300/400/500, tight large headings, spaced uppercase labels, monochrome surfaces, fine keylines, small corner radii and restrained solid/outlined actions. Adapt to near-white #fafafa canvas, white sidebar/cards, charcoal #202124 text/actions and neutral grey accents. New mosaic-C mark keeps Crash Course naming and links to Tessera’s tile motif without renaming the product.

Implementation: tessera.css loads last after existing subject styles. Legacy family.css remains the layout/motion foundation; all saved IDs, content, question flow, JavaScript, model logic and storage are unchanged. Reading evidence panels use light paper surfaces. Science/Maths/Geography visual canvases retain dark neutral contrast and meaningful model/data colours. Dark presentation accent tokens stay light enough to see. Correct/incorrect states retain semantic colours. Existing entry/dialog animations, hover transitions, process autoplay/loop, controls and reduced-motion support remain intact.

Typography uses the same Google Fonts Inter family as Tessera with system fallbacks. No photographs, staff details or old prototype content were imported. New curriculum content: none; subject/topic/lesson registers and coverage counts intentionally unchanged. Literature remains45built/130planned in working175allocation; shared350English budget unchanged.

Checks:813automated tests pass; existing HTML control IDs/script entrypoints match. Desktop sample: Literature, Science3D/2D toggle, Maths step reveal, History evidence, Geography saved graph controls, Science mastery dashboard. Literature wrong/retry and automatic advancement tested; existing saved draft survives. Phone390×844 lesson and modal inspected, no horizontal overflow; temporary viewport reset. Not every historical model was individually inspected. Full assistive-technology and specialist curriculum review remain outstanding.
