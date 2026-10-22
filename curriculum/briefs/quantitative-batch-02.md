# Quantitative batch02 —16 October2026

Checked official AQA Chemistry8462 4.3.2.1,2,5 and Trilogy8464 5.3.2.1,2,5. Same content/eligibility in both qualifications. concentration is shared both tiers with a Higher-only relationship card/question; moles and reaction-masses are whole Higher-only lessons. Do not confuse course eligibility with tier eligibility.

Objectives: calculate mass from g/dm³ and volume with cm³↔dm³ conversion; Higher relationship interpretation. Define mole/Avogadro and count specified particles, mass↔amount. Apply balanced-equation mole ratios to reactant/product mass with the other reagent supplied in excess. Limiting-reagent calculations and balancing from masses remain the next batch.

Labs: concentration volume/solute planner with three numeric tasks; mole explorer for C atoms/CO2/H2O molecules with three mass/particle-number tasks; three stepwise reaction stoichiometry accounts. Native labelled controls, saved drafts, wrong-action feedback, model limitations. First answers, supported retries and recall retain existing rules. Questions have quantitative. namespaces. No real experimental/procedural claim.

Platform: central lessonEligible predicate filters route and whole-lesson Higher flag; runtime lists, maps, current selection, progress denominators and question/review pools use it. Foundation fallback when leaving a Higher-only lesson retains hidden saved answers. Restore must not land on an ineligible lesson; previous tier/topic runs remain separately keyed. Existing selected Higher-specific cards/questions still filtered. Source APIs default tier to Higher for backwards-compatible explicit older calls; runtime always supplies selected tier.

User UI correction: sidebar select chevrons inset14px using a background SVG with appearance:none, right text padding36px. Preserve select labels/keyboard behaviour.

Misconceptions: cm³ divided by1000 gives dm³; use total solution volume, not solvent added. Mole is a number of specified particles, not a fixed mass. Molecular atoms need multiplying by atoms per molecule. Equation coefficients give mole ratios, not equal masses. n=m/Mr uses grams and mol; Mr itself has no unit. Product calculation assumes enough other reactant and the stated reaction, not actual yield.

Verification to record: numerical invariants/tolerance; both route/tier combinations and hidden lesson selection/reload; unfinished Higher assessment/review preservation; actual Foundation queues; full3 lesson flows including wrong/resume paths; mobile visuals and selector padding. Specialist review not performed.

QA completed:41 Node tests pass, including all route/tier counts, ineligible-lesson restore and Foundation assessment/recall pools. Browser exercised all three labs (3/3 tasks each), unit/count/mass wrong-answer feedback, concentration input reload, Higher→Foundation fallback and restored completed mole lab. Lesson results: concentration6/6 Higher, moles5/5, reaction masses5/5; Discover explanations completed for all3. Higher topic assessment has6 questions; Foundation4. Unfinished Higher run resumed question2 after tier switch. Phone390 has no horizontal overflow; sidebar chevron computed14px inset and36px right padding; console clean. Review filtering/persistence verified by regression tests, not a full browser review run. Specialist review not performed.

Privately published16 October2026, source f76ce61dd4ca18fed137d5ad3b46ce2cec5acd45, deployment appgdep_6ad22510ddcc8191ba13f369d41c7341. Live refresh verified35 lessons and inset pathway chevron. Screenshot crash-course-dropdown-spacing.png.
