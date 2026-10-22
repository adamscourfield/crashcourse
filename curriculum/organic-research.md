# Organic chemistry — source verification and authoring map

Checked 19 October 2026. Research/briefing only: no implementation, testing, publication or specialist review implied.

## Official sources and eligibility

- [AQA Chemistry 8462, Organic chemistry](https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/organic-chemistry), sections 4.7.1–4.7.3.
- [AQA Trilogy 8464, Chemistry subject content](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/chemistry-subject-content), sections 5.7.1.1–5.7.1.4; introductory tier convention.

Shared content: Chemistry 4.7.1.1–4 and Trilogy 5.7.1.1–4, both tiers. All Chemistry 4.7.2 and 4.7.3 is separate Chemistry only. Within that separate content, only the weak-acid explanation in 4.7.2.4 and the whole of 4.7.3.2 and 4.7.3.3 are Higher only. Addition polymerisation and DNA/natural-polymer knowledge are **both-tier separate**, even though adjacent subsections are Higher. Trilogy does not require names/formulae of individual alkenes: give formulae in cracking questions rather than assessing their unaided recall.

## Proposed lesson boundaries and assessable statements

IDs below are proposed stable suffixes under `science.chemistry.organic.`; reconcile against the actual app before creating them. These are authoring boundaries, not official AQA lesson divisions.

| Proposed lesson | Exact references | Required coverage and independent evidence |
|---|---|---|
| `alkanes` — Crude oil & alkanes | 4.7.1.1 / 5.7.1.1 | Finite crude oil in rocks derives from ancient biomass, mainly plankton buried in mud; mixture of many compounds, mainly hydrocarbons. Hydrocarbon contains only H/C. Alkane family and CnH2n+2; methane/ethane/propane/butane; recognise molecular and displayed representations. Assess identification, formula prediction and representation, not just definitions. |
| `distillation` — Separating crude oil | 4.7.1.2 / 5.7.1.2 | Fractions contain molecules with similar carbon counts. Explain heating/evaporation, column temperature gradient, condensation at different levels; separation is physical. Fuels and chemical feedstock; petrol, diesel, kerosene, heavy fuel oil, LPG examples; solvents, lubricants, polymers, detergents. Other specific fraction names are not required. Assess an annotated column and unfamiliar boiling-point data. |
| `hydrocarbon-properties` — Size, properties & combustion | 4.7.1.3 / 5.7.1.3 | Increasing molecular size: higher boiling point, greater viscosity, lower flammability; link use to properties. Combustion releases energy, oxidises C/H; complete combustion yields CO2 and H2O. Construct balanced equations from supplied hydrocarbon formulae. Include fresh coefficient-entry assessment. |
| `cracking` — Useful smaller molecules | 4.7.1.4 / 5.7.1.4 | Large hydrocarbons split into smaller alkanes/alkenes. Describe general catalytic and steam-cracking conditions; increased alkene reactivity; bromine-water test/colour change; demand for smaller fuel molecules; alkenes as polymer/chemical feedstock. Balance supplied cracking equations and explain uses/modern dependence. |
| `alkenes` — Alkene structures | 4.7.2.1, separate both tiers | C=C; unsaturation; CnH2n; ethene/propene/butene/pentene. Recognise name/formula and construct fully displayed forms; distinguish from alkanes. |
| `alkene-reactions` — Addition across a double bond | 4.7.2.2, separate both tiers | C=C functional group determines common reactions; alkene combustion/smoky incomplete combustion. Describe conditions/reactions with hydrogen, water, halogens; display first four alkenes and products with H2, water, Cl2, Br2, I2. Include a reaction builder, not only product-name choices. |
| `alcohols` — Alcohols & fermentation | 4.7.2.3, separate both tiers | –OH; methanol/ethanol/propanol/butanol, recognition; reactions with sodium, air, water and oxidising agent; main uses; ethanol from yeast/sugar and fermentation conditions. Balance combustion equations; other alcohol reaction equations are not required. |
| `carboxylic-acids` — Acids & esters | 4.7.2.4, separate both tiers | –COOH; first four names; recognise structures; carbonate reactions, aqueous acidity, ester production with alcohols. Only ethyl ethanoate ester name required; balanced acid reaction equations not required. Keep Higher explanation separate. |
| `weak-organic-acids` — Partial ionisation | 4.7.2.4 Higher paragraph, separate Higher | Explain weak carboxylic acids using partial ionisation and pH, connected to earlier strong/weak-acid lesson. Compare equal concentrations; distinguish weakness from dilution. Could be a filtered extension rather than a standalone lesson if current architecture supports it safely. |
| `addition-polymers` — Monomer to repeat unit | 4.7.3.1, separate both tiers | Many alkene monomers join, no other product; repeat unit retains monomer atoms. Poly(ethene)/poly(propene); recognise monomer/polymer; draw polymer formation and infer monomer from repeat unit. Cross-link earlier Bonding polymers, but retain this structural assessment. |
| `condensation-polymers` — Making polyesters | 4.7.3.2, separate Higher | Two functional groups per monomer; simplest case diol plus dicarboxylic acid; small-molecule loss, usually water. Explain via functional groups and repeat-unit linkage; AQA example ethanediol/hexanedioic acid. |
| `amino-acids` — Amino acids & proteins | 4.7.3.3, separate Higher | Two different groups; glycine H2NCH2COOH, condensation to polypeptide; varied amino-acid sequences form proteins. Display a peptide linkage and identify water loss. |
| `natural-polymers` — DNA & natural polymers | 4.7.3.4, separate both tiers | DNA genetic instructions, typically two polymer strands/four nucleotide types/double helix; proteins, starch, cellulose and their monomers. Proteins→amino acids; starch/cellulose→glucose; DNA→nucleotides. Do not gate basic protein monomer knowledge behind Higher amino-acid chemistry. |

## Formula and reaction authoring checks

These are chemistry calculations/examples for implementation, not additional mandated recall lists.

- Alkane sequence: CH4, C2H6, C3H8, C4H10. Alkene sequence: C2H4, C3H6, C4H8, C5H10; choose terminal straight-chain structures for drawing. Molecular formula alone cannot distinguish every possible structural class; constrain prompts to the taught families.
- Complete combustion: CH4 + 2O2 → CO2 + 2H2O; 2C2H6 + 7O2 → 4CO2 + 6H2O; C3H8 + 5O2 → 3CO2 + 4H2O. CnHm needs n CO2 and m/2 H2O, then oxygen balance; use integer coefficients in final response.
- Cracking example: C10H22 → C8H18 + C2H4. It is one possible product combination, not a uniquely fixed mechanism. Catalytic: vaporise/heated catalyst; steam: mix vapour/steam and heat strongly. AQA requires general conditions here, not a mandatory precise numerical temperature.
- Bromine water: orange/brown → colourless for alkene; alkane does not decolourise in the ordinary test conditions. Preserve literal reagent colours even within the family palette.
- Ethene examples: +H2 → C2H6 (nickel catalyst/heating); +H2O → C2H5OH (steam, phosphoric-acid catalyst, raised temperature/pressure); +Br2 → CH2Br–CH2Br. Addition changes C=C to C–C; show all attached H/bonds. Exact numerical industrial conditions are not specified in this paragraph.
- Ethanol combustion: C2H5OH + 3O2 → 2CO2 + 3H2O. Fermentation teaching: aqueous sugar/yeast, warm controlled conditions without oxygen; excessive heat harms yeast. Alcohols dissolve in water; sodium gives hydrogen; oxidation gives corresponding carboxylic acid. Avoid making non-required reaction equations a recall gate.
- Carboxylic acid + carbonate → salt + CO2 + H2O. Ethanol + ethanoic acid ⇌ ethyl ethanoate + water, acid catalyst. Ester names beyond ethyl ethanoate are outside required recall.
- Addition repeats: [–CH2–CH2–]n and [–CH2–CH(CH3)–]n; brackets, n and continuation bonds matter. Do not remove atoms or leave a C=C inside the backbone repeat.
- Polyester linkage –C(=O)–O–; peptide linkage –C(=O)–NH–. For finite chains, water count equals number of condensation links, not blindly number of monomers. Avoid asking a water count from a repeat-unit diagram without chain-end assumptions.

## Skills, practicals and acceptance limits

Official organic rows explicitly attach WS1.2 (molecular/reaction models), WS4.1 (hydrocarbon properties), MS5b (2D/3D representations), and AT2/5/6 opportunities for alcohol/acid investigations. No numbered required practical is introduced in Organic chemistry; do not label suggested investigations as required practical completion. Virtual observation is preparation, not school practical fulfilment.

Use LESSON_TEMPLATE.md for each implementation brief. Interactions should require student prediction/manipulation, give diagnostic feedback, and require correct completion; include independent construction of equations/displayed structures, fresh examples and later recall. Test route/tier fallback and preservation, wrong paths, first answers versus retries, numeric blanks, mobile diagrams, keyboard and reduced motion. Models must state symbolic size/colour/bond limitations. A complete heading list or answer-choice quiz alone does not evidence all drawing/explanation statements.

Remaining limits: this document verifies scope against official pages; it does not certify lesson content, answer keys, practical risk assessments or specialist review. Where numerical conditions or observation detail extends the specification wording, validate against an official AQA teaching/practical resource before treating it as mandated recall. Final implementation needs statement→teaching→interaction→independent-item mapping and an explicit gap list.
