# Crash Course — family design adaptation

Reference: DESIGN-SPEC.md, a workspace copy of the user-supplied Together design specification v1.0 (12 October2026). The reference describes a different app; its source-file paths and customer/account/admin workflows do not become instructions to add those features here.

## Applied identity

- Cream #f8f6f2 canvas, navy #182e44 text/navigation/model surfaces, coral #ed8b78 primary actions and accents, neutral #e6e5df dividers, rounded white cards.
- DM Serif Display regular/italic headings and wordmark; DM Sans controls/body. Coral-toned italic title accents. Local Georgia/system fallbacks remain available.
- Crash Course name with a warm circular open-book emblem and a serif/sans wordmark. The earlier double-C mark is superseded. Neutral book icon follows any selected subject; other navigation uses rounded1.6px line SVGs.
- 232px desktop sidebar (200px compact), responsive horizontal phone navigation and stacked lesson panels. The two-pane teaching workspace adapts the family desktop vocabulary; the Together480px customer shell and its relationship-specific navigation are not copied.
- 18px lesson cards,12px actions,10px labelled fields, cream24px dialogs, coral keyboard focus and short no-preference transitions. Fields are49px; core actions48px; model buttons44px.
- Symbolic particle and diagram colours use coral, cream and blue-grey from the family palette, consistently in3D/2D. Chemically meaningful indicator colours retain their scientific meaning. Navy scene surfaces and supporting labels complete the palette.
- Model caption/content reservation adapts to larger/wrapping serif titles, including dense text inventories. No lesson, question, concept, scoring or progress IDs changed.

## Contrast adaptations

Reference --muted remains #71808c; smaller light-surface supporting copy uses #526575 (approximately5.60:1 on cream). Primary navy text on coral is5.66:1. Large italic #ca715f headings on cream are3.22:1. Small waiting/error text uses darker #875342 rather than #98614f, which measured only4.21:1 on the reference peach feedback fill. This is a scoped legibility adaptation, not a claim of a complete accessibility audit.

## Implementation

science-app/dist/family.css owns the shared family layer after existing lesson/model styles. family-layout.js reserves wrapping caption space; visual.js invokes it after model content updates and a ResizeObserver catches font/width changes. index.html loads the theme, updated mark and inline navigation icons. Existing lesson assets and behaviour remain intact.

## Verification

81 Node checks pass. All54 Investigate screens checked at390px with no final horizontal overflow or model-caption collision; representative desktop lessons checked across all4 topics at1074px, initial1281px visual inspection, and340px controls/navigation checked. DM Serif Display loaded; palette tokens verified. Subject planned screen and selection, course-map and assessment dialogs checked; numeric assessment answer survived reload; wrong and correct molten-product feedback exercised. Local console clean. Reduced-motion CSS reviewed; physical device and full screen-reader testing not performed.
JSON evidence: curriculum/family-design-browser-qa.json and family-design-desktop-qa.json. Early caption collisions were resolved before release; recorded final states are the last checked state per lesson.

Family design publication: succeeded16 October2026 at20:32 BST. Source e561fb26eae8592d2957d7bfb51ce5fa78e26dec; deployment appgdep_6ad27bd8e4f88191a4c70af5fd5df807; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_f5462b039f4881919a60347dcc8f905d. Owner-private audience preserved. Live serif font loading, cream/navy/coral tokens and diamond lesson verified; no horizontal overflow. Screenshot: crash-course-family-design-preview.png.

## Future work

Use this family layer for all future subject screens. Continue the recorded model-quality priorities and aqueous electrolysis curriculum backlog according to the user's next request. No authentication, account, admin or relationship features were introduced by applying the visual reference.

Logo refinement: the user requested a softer mark. Replaced the angular badge with a rounded square and the chevron-like Cs with thinner curved strokes; opened wordmark tracking/line spacing. Desktop and340px phone preview passed, with no header collision or horizontal overflow. Published privately; live verified. See BUILD_STATUS.md for source/deployment.

Soft-logo release: succeeded16 October2026 at20:36 BST. Source f384a79a4544a441a102aaa05b04259522579238; deployment appgdep_6ad27cbae76c819189d346e79778ccbc; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_8c999a31c5ec8191895544f4b3cd7b81. Rounded badge/curved strokes and wordmark spacing visually verified on desktop and340px phone, live refreshed. Owner-private audience preserved. No behaviour change; no regression-suite rerun needed for this SVG/CSS refinement. Screenshot crash-course-soft-logo.png.

Current logo redesign: warm open-book symbol, serif Crash and spaced sans-serif Course. Replaces the earlier double-C lockup at the user’s request. Desktop/340px phone checks passed with clear separation from the subject selector and accessible home label preserved. Published privately; live verified.

Book-logo redesign: succeeded16 October2026 at20:41 BST. Source053863daa42e4af4c252dd6226ec7208dc6ff9d8; deployment appgdep_6ad27dc667b88191baad20a76c54ec41; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_609034d31718819184f37e4025a2e10b. Warm open-book emblem and serif/sans wordmark replace the double-C badge. Desktop and340px phone checked; accessible home label retained. Owner-private audience preserved; live verified. Screenshot crash-course-book-logo.png. SVG/CSS-only change; no lesson/scoring/progress changes or additional regression suite.

Science palette update: old green/gold model colours and green lighting replaced with family coral/cream/blue-grey and neutral lighting. Shared particleColours now drives3D and generic2D; lattice2D uses the same ion mapping. Dark labels on light particles retain legibility, including metallic/electrolysis charge labels. 81 automated checks passed; syntax checks passed for the adjusted diagram helpers and diff whitespace check passed. Desktop3D/2D ionic palette consistency checked; metallic positive-ion labels are navy; electrolysis charge labels and ionic colours visually checked; pH12 remained labelled purple. Phone390 model/layout checked with no horizontal overflow; console clean. No new lesson content, question IDs or progress changes. Published privately; live verified.

Science palette publication: succeeded16 October2026 at20:47 BST. Sourcee4afabd5569d84fb20374386a4973ad79f103ddb; deployment appgdep_6ad27f5f89948191a087c1a68aa1ebd7; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_6973c6a68ff48191a989a2ccb47d5466. Owner-private audience preserved. Live lattice refreshed and coral/blue-grey colours visually verified. Screenshot crash-course-science-palette.png.

Copy principle: each visible line should orient the learner, teach, explain an action, report progress/feedback or clarify a scientific limit. Avoid duplicate titles, motivational filler and repeated interface directions. Keep secondary model/source detail behind explicit controls. Independent questions use a single focused card. See curriculum/interface-copy-cleanup.md for verification.
