# Interactive model audit — 16 October 2026

Latest motion review: [175-lesson source inventory and18 process films](model-motion-audit.md),21October2026. The evidence below describes the earlier54-lesson release only.

All54 implemented lessons were inventoried from source and mounted at Investigate in the browser. After improvements, all54 were checked at desktop and390×844 phone widths (108 recorded states). This is a technical/learning-design audit by the author, not independent specialist review or a claim that every model is optimal. Existing lesson, question and concept IDs and evidence criteria are unchanged; no mastery migration was needed. Counts remain54 lessons,157 practice items and261 independent checks.

## Resolved findings

- Generic 2D molecule fallback previously joined atoms in sequence, inventing H–H connections in water and misrepresenting branching. It now projects the actual bond graph and labels atoms.
- 3D views inherited zoom from previous models; fixed4.5–12 limits could make zoom-out jump inward for carbon models starting at16. Models now centre and fit their bounds, retain a proportional zoom range and offer explicit zoom/reset buttons plus keyboard controls. Captions have a separate band. Button state reflects initial reduced-motion setting; noninteractive2D hides irrelevant3D controls.
- Periodic-table caption overlap fixed. Selected tiles show shell arrangements matching the prompt.
- Older SVGs now have accessible names; existing detailed descriptions remain. Native labelled activities and non-colour cues retained.
- Noble-gas bar heights now match the displayed approximate temperatures on a labelled linear axis beginning at−300°C; selected gas survives reload.
- Chromatography shows one mixed origin separating into spots on one lane, with baseline above solvent and front indicated. Fractional distillation has a visible column distinct from simple distillation. These remain schematic.
- Mass conservation now depicts the weighed boundary and gas crossing it, preserving hidden outcomes until correct checking.
- Titration now depicts supplied initial/final levels on a downward-increasing scale. Exact values are supplied; the picture does not pretend to assess precision meniscus reading. Delivered/mean outcomes remain concealed until successful checking.
- Repeated identical measurement values can stack instead of masking their multiplicity. Phase rendering distinguishes solid/liquid coexistence from liquid/gas coexistence. Element materials have safe defaults.
- Isotope calculation drafts now survive reload.

## Evidence and limits

81 Node checks pass, including graph connectivity, camera bounds/zoom ranges, stacked duplicates, coexistence, result concealment and supplied burette scales. All108 post-change mounted states report no horizontal overflow, caption collisions, empty diagram or unnamed SVG. JSON evidence: model-browser-baseline.json and model-browser-after.json. Browser activity testing:3/3 titration cases and3/3 mass accounts plus balanced Mg equation; wrong answers, correction and reload drafts; isotope draft; noble gas selection; periodic shell feedback; actual water diagram connections; keyboard rotation/Home, zoom/reset, pause and2D toggle. Console errors: none observed.

The scan mounts one saved Investigate state per lesson, not every possible permutation, every Discover card or all browser/device combinations. Selected diagrams were visually inspected. Full screen-reader testing, physical touch-device testing, forced WebGL failure, specialist science review and student usability studies were not performed. No school practical attainment claimed. Existing checks remain recognition/numeric evidence where documented; guided model success is not independent diagram-writing mastery.

## Lesson-by-lesson review

“Retained” means the current representation fits its purpose and no new blocker was found in this pass; it is not a perfection score. Shared framing/accessibility changes also affect retained models. Future improvements below are specific opportunities, not newly introduced defects.

| Lesson | Current model / activity | This pass | Next improvement |
|---|---|---|---|
| Atoms, elements & compounds | molecules | Actual-bond 2D projection; fit, zoom, reset controls | Add comparison prompts for element versus compound after building water |
| Symbols, formulae & equations | balance | Shared diagram spacing and accessible representation | Add grouped molecule tokens beside the atom totals |
| Mixtures & separation | separate | Single-origin chromatography; distinct fractional column; accessible SVG | Extend chromatography to student-controlled solvent distance/Rf and method evaluation |
| How atomic models changed | scatter | Accessible scattering SVG; historical model framing | Add evidence-frequency comparison without implying exaggerated paths are typical |
| Protons, neutrons & electrons | atom | Centred shell model, fit and view controls | Add a prediction before recording atom/ion observations |
| Isotopes & relative atomic mass | isotopes | Numeric draft now survives reload; shared spacing | Add a second independent abundance scenario |
| Electron arrangements | shells | Accessible SVG; shared spacing | Broaden neutral-atom construction beyond Na and Ca |
| The periodic table | periodic | Caption overlap resolved; selected element shows shell arrangement | Add free arrangement prediction before revealing a selected tile |
| Metals & non-metals | metals | Shared atom framing and view controls | Add property data to support classification rather than position alone |
| Group 0: noble gases | noble | Numerically accurate linear bar heights and labelled negative axis; selected gas resumes | Add interpretation from a fresh graph |
| Group 1: alkali metals | alkali | Shared diagram spacing | Require predictions before product reveal rather than exploration alone |
| Group 7: halogens | halogens | Shared diagram spacing | Add particle-level before/after view with conserved halogen atoms |
| Transition metals | transition | Shared diagram spacing | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Three types of chemical bond | bond-types | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Ionic bonding & electron transfer | ionic-transfer | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Ionic lattices, formulae & properties | ionic-lattice | Retained; shared framing/accessibility checks passed | Optional molten-ion mobility comparison alongside the fixed solid lattice |
| Covalent bonds & electron pairs | covalent-single | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Molecules, multiple bonds & formulae | covalent-molecules | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Metallic bonding, conduction & alloys | metallic-lab | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| States, changes & state symbols | states-lab | Melting and boiling coexistence distinguished; shared framing | Optional fixed-position vibration versus mobile-particle comparison; retain static alternative |
| Small molecules & intermolecular forces | molecular-lab | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Polymers & repeating units | polymer-lab | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Giant covalent structures | network-lab | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Diamond: a rigid carbon network | diamond-lab | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Graphite: layers & mobile electrons | graphite-lab | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Graphene, fullerenes & nanotubes | carbon-use-lab | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Nanoparticle sizes & units | nano-sizes | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Surface area, volume & particle size | nano-surface | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Nanoparticle uses, evidence & risks | nano-uses | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Conservation of mass & escaping gases | quant-mass | Visible weighed boundary and entering/leaving gas; result concealed until checked | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Relative formula mass & composition | quant-formula | Safe element material fallback, centred inventory and controls | Show mass contributions beside labelled inventory without implying molecular geometry |
| Measurements, spread & uncertainty | quant-uncertainty | Duplicate readings stack rather than disappear | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Concentration in grams per dm³ | amount-concentration | Retained; shared framing/accessibility checks passed | Add continuous independent mass/volume comparison controls |
| Moles, particles & mass | amount-moles | Retained; shared framing/accessibility checks passed | Compare particle count and mass scales for equal amounts |
| Mole ratios & reaction masses | amount-ratios | Retained; shared framing/accessibility checks passed | Add coefficient-linked molecule tokens beside the three-step account |
| Limiting reactants & excess | stoich-limiting | Retained; shared framing/accessibility checks passed | Show separate remaining and used segments on the shared mol scale |
| Balancing equations from masses | stoich-balancing | Retained; shared framing/accessibility checks passed | Add coefficient-linked atom conservation after the inferred ratio |
| Percentage yield | efficiency-yield | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Atom economy & reaction choices | efficiency-economy | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Concentration in mol/dm³ | volume-molar-concentration | Retained; shared framing/accessibility checks passed | Visual comparison of equal amounts in different total solution volumes |
| Concentrations from reacting volumes | volume-reacting-solutions | Retained; shared framing/accessibility checks passed | Add linked amount/ratio/volume diagram while retaining prediction |
| Gas volumes at room conditions | volume-gas-volumes | Retained; shared framing/accessibility checks passed | Add equal-T/P volume blocks and explicitly fixed gas conditions |
| Metal oxides & oxygen redox | changes-oxygen | Retained; shared framing/accessibility checks passed | Add before/after oxygen atom bookkeeping with no mechanism claim |
| Reactivity series & evidence | changes-reactivity | Retained; shared framing/accessibility checks passed | Let students arrange an evidence-backed order on screen |
| Extracting metals using carbon | redox-extraction | Retained; shared framing/accessibility checks passed | Show a reactivity-position comparison with carbon |
| Electron redox & ionic equations | redox-electrons | Retained; shared framing/accessibility checks passed | Add balanced electron donor/acceptor tokens without literal electron paths |
| Acids reacting with metals | acids-metals | Retained; shared framing/accessibility checks passed | Add linked ion charge and neutral salt formula representation |
| Neutralisation & salt formulae | acids-neutralisation | Retained; shared framing/accessibility checks passed | Add carbonate/oxide/hydroxide product comparison diagram |
| Preparing pure, dry soluble salts | saltph-salts | Retained; shared framing/accessibility checks passed | Add stage-specific apparatus/evidence diagrams alongside method planner |
| pH, indicators & neutralisation | saltph-ph | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Titrations & accurate reacting volumes | titrate-volume | Scaled supplied initial/final levels; delivery concealed until checked | Separate future meniscus-reading and endpoint interaction from supplied-data calculation |
| Strong/weak acids & the pH factor | titrate-strength | Retained; shared framing/accessibility checks passed | Broaden independent explanation/transfer tasks; retain explicit model limitations |
| Electrolysis: ions on the move | electro-process | Retained; shared framing/accessibility checks passed | Add controlled ion mobility animation with reduced-motion equivalent |
| Predicting molten electrolysis products | electro-molten | Retained; shared framing/accessibility checks passed | Add explicit product formation cues after a correct prediction |

## Recommended next work

Prioritise interactive comparisons for concentration/reacting amounts, and atom/electron bookkeeping for redox. Give older exploration-only activities a prediction step. Keep new lesson authoring paused until this audit release is verified; then follow the user’s next priority. Aqueous electrolysis remains the next curriculum batch.

## Specification grounding

Rechecked the official AQA Chemistry8462 atomic, bonding, quantitative and chemical-change chapter pages on16 October2026; unchanged existing Trilogy mappings remain in the topic maps. No new curriculum statements or assessment claims were added. Scientific models remain explicitly symbolic; graph connections and counts, charge carriers, system boundaries and measured volume conventions govern the upgrades.

- https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/atomic-structure-and-the-periodic-table
- https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/bonding-structure-and-the-properties-of-matter
- https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/quantitative-chemistry
- https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/chemical-changes

Interactive-model audit publication: succeeded16 October2026 at20:10 BST. Source4580800c30ce080d3326c57363adcbf159a09953; deployment appgdep_6ad276ac8b2481918cd60076beb0840f; version appgprj_6ad1be5897a88191909a03ad57857103~appgver_9524e1e081088191b331085990e477c5. Owner-private audience preserved. Live refreshed, zoom/reset controls and diamond model verified; live console clean. Proof: crash-course-model-audit-preview.png.
