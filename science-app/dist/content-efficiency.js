export const efficiencyLessons=[
  {
    "id": "science.chemistry.quantitative.percentage-yield",
    "title": "Percentage yield",
    "short": "From possible to collected",
    "refs": [
      "3.3.1"
    ],
    "separate": true,
    "minutes": 25,
    "widget": "efficiency-yield",
    "prerequisites": [
      "science.chemistry.quantitative.formula-mass"
    ],
    "higherQuestions": [
      "quantitative.p-yieldht",
      "quantitative.c-yieldht"
    ],
    "skills": [
      "WS4.2",
      "WS4.6",
      "MS1a",
      "MS1c",
      "MS2a",
      "MS3b"
    ],
    "big": "Percentage yield compares the mass actually obtained with the maximum theoretical mass. A low yield does not mean atoms disappeared.",
    "learn": [
      {
        "title": "Compare what you collect with what is possible.",
        "text": "If a reaction could produce 10.0 g but only 8.0 g is collected, percentage yield = actual mass ÷ theoretical mass × 100 = 80%. Use the same mass units. The theoretical mass is the calculated maximum for the stated reaction; the actual yield is the product obtained.",
        "scene": "efficiency:yield"
      },
      {
        "title": "Account for a lower yield.",
        "text": "A reversible reaction may not go to completion. Some product may be lost during separation, or reactants may take alternative reaction pathways. These lower the amount of desired product collected without violating conservation of mass: atoms remain in other material or uncollected product.",
        "scene": "efficiency:yield"
      },
      {
        "title": "Interpret a suspicious result.",
        "text": "A recorded mass above the theoretical maximum gives a calculated yield above 100%. That signals a problem with the assumptions or measurement, such as wet or impure product; it is not evidence that more pure product was made than the maximum. High yield says how much product was recovered, not how many reactant atoms enter that product.",
        "scene": "efficiency:yield"
      },
      {
        "title": "Higher: calculate the theoretical maximum.",
        "text": "For 2Mg + O₂ → 2MgO with oxygen in excess, 4.8 g Mg is 4.8÷24 = 0.20 mol. The 2:2 ratio gives 0.20 mol MgO. With Mᵣ(MgO)=40, theoretical mass = 8.0 g. Collecting 6.0 g gives 6.0÷8.0×100 = 75%. Use the balanced equation and limiting supply before calculating percentage yield.",
        "scene": "efficiency:yield",
        "higher": true
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-yield1",
        "prompt": "Actual product 6 g; theoretical product 8 g. Percentage yield?",
        "options": [],
        "answer": 75,
        "why": "6÷8×100 = 75%.",
        "concept": "quantitative.yield-calculation",
        "type": "number",
        "unit": "%",
        "tolerance": 0.05
      },
      {
        "id": "quantitative.p-yield2",
        "prompt": "Product is left on the filter during separation. The collected yield…",
        "options": [
          "Falls without atoms disappearing",
          "Rises above the theoretical maximum",
          "Changes the equation coefficients"
        ],
        "answer": 0,
        "why": "Uncollected product still contains the missing atoms.",
        "concept": "quantitative.yield-loss"
      },
      {
        "id": "quantitative.p-yield3",
        "prompt": "Theoretical product 20 g; percentage yield 60%. Actual product mass?",
        "options": [],
        "answer": 12,
        "why": "0.60×20 = 12 g.",
        "concept": "quantitative.yield-calculation",
        "type": "number",
        "unit": "g",
        "tolerance": 0.05
      },
      {
        "id": "quantitative.p-yieldht",
        "prompt": "2Mg + O₂ → 2MgO. 2.4 g Mg reacts with excess O₂. Aᵣ(Mg)=24, Mᵣ(MgO)=40. Theoretical MgO mass?",
        "options": [],
        "answer": 4,
        "why": "2.4÷24 = 0.1 mol; 2:2 gives 0.1 mol MgO; ×40 = 4 g.",
        "concept": "quantitative.theoretical-yield",
        "type": "number",
        "unit": "g",
        "tolerance": 0.05
      }
    ],
    "check": [
      {
        "id": "quantitative.c-yield1",
        "prompt": "Actual product 9 g; theoretical product 12 g. Yield?",
        "options": [],
        "answer": 75,
        "why": "9÷12×100 = 75%.",
        "concept": "quantitative.yield-calculation",
        "type": "number",
        "unit": "%",
        "tolerance": 0.05
      },
      {
        "id": "quantitative.c-yield2",
        "prompt": "Theoretical product 15 g; yield 80%. Actual mass?",
        "options": [],
        "answer": 12,
        "why": "0.80×15 = 12 g.",
        "concept": "quantitative.yield-calculation",
        "type": "number",
        "unit": "g",
        "tolerance": 0.05
      },
      {
        "id": "quantitative.c-yield3",
        "prompt": "Which can reduce desired product yield?",
        "options": [
          "A reversible reaction that does not complete",
          "Atoms ceasing to exist",
          "A change in relative atomic mass"
        ],
        "answer": 0,
        "why": "Unreacted material remains when a reversible reaction does not complete.",
        "concept": "quantitative.yield-loss"
      },
      {
        "id": "quantitative.c-yield4",
        "prompt": "A student calculates 110% yield from a wet product. Best interpretation?",
        "options": [
          "A new conservation law",
          "Water may have inflated the measured mass",
          "110% is always the true pure-product yield"
        ],
        "answer": 1,
        "why": "The measured sample may include water, so its mass is not all desired dry product.",
        "concept": "quantitative.yield-quality"
      },
      {
        "id": "quantitative.c-yield5",
        "prompt": "Alternative reactions reduce desired-product yield because…",
        "options": [
          "Some atoms enter other products",
          "Every atom loses mass",
          "The theoretical equation changes its subscripts automatically"
        ],
        "answer": 0,
        "why": "The atoms are conserved but some enter different products.",
        "concept": "quantitative.yield-loss"
      },
      {
        "id": "quantitative.c-yieldht",
        "prompt": "CaCO₃ → CaO + CO₂. 10 g CaCO₃ (Mᵣ100), complete decomposition. CaO Mᵣ56. Actual CaO collected 4.2 g. Yield?",
        "options": [],
        "answer": 75,
        "why": "0.1 mol CaCO₃ gives 0.1 mol CaO, theoretical 5.6 g. 4.2÷5.6×100 = 75%.",
        "concept": "quantitative.theoretical-yield",
        "type": "number",
        "unit": "%",
        "tolerance": 0.05
      }
    ]
  },
  {
    "id": "science.chemistry.quantitative.atom-economy",
    "title": "Atom economy & reaction choices",
    "short": "Follow the useful atoms",
    "refs": [
      "3.3.2"
    ],
    "separate": true,
    "minutes": 25,
    "widget": "efficiency-economy",
    "prerequisites": [
      "science.chemistry.quantitative.formula-mass"
    ],
    "higherQuestions": [
      "quantitative.p-economyht",
      "quantitative.c-economyht"
    ],
    "skills": [
      "WS4.2",
      "WS4.6",
      "MS1a",
      "MS1c",
      "MS3b"
    ],
    "big": "Atom economy measures the share of reactant mass incorporated into the desired product according to the balanced equation. It differs from experimental percentage yield.",
    "learn": [
      {
        "title": "Track the desired product.",
        "text": "Use atom economy = coefficient-weighted relative mass of desired product ÷ total coefficient-weighted relative masses of all reactants × 100. For CaCO₃ → CaO + CO₂ with CaO desired, relative masses are 100, 56, 44: atom economy =56÷100×100 =56%. CO₂ contains the rest of the reactant atoms.",
        "scene": "efficiency:economy"
      },
      {
        "title": "Coefficients matter.",
        "text": "For 2H₂ + O₂ → 2H₂O, desired water has weighted relative mass 2×18=36. Total reactants are 2×2 +32=36. Atom economy is 100% because water is the only product. Use the balanced equation, not just one copy of every formula. Do not include solvent or a catalyst unless it is a reactant in the stated equation.",
        "scene": "efficiency:economy"
      },
      {
        "title": "Separate utilisation from recovery.",
        "text": "A reaction can have 100% atom economy yet a low collected yield because product is lost or reaction is incomplete. High atom economy can reduce unwanted material and improve resource use and costs. It does not alone tell you a process is safe, fast or the best overall choice.",
        "scene": "efficiency:economy"
      },
      {
        "title": "Higher: weigh the whole pathway.",
        "text": "When comparing routes, use the supplied data for atom economy, yield, rate, equilibrium position and useful by-products. If two routes have equal yield, rate and operating conditions but one has higher atom economy, it may use feedstock more efficiently. A faster, higher-yielding route or a useful co-product can change the decision. Explain the trade-off using the stated objective and evidence; do not always choose the highest atom economy.",
        "scene": "efficiency:economy",
        "higher": true
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-economy1",
        "prompt": "CaCO₃ → CaO + CO₂, CaO desired. Relative masses 100, 56, 44. Atom economy?",
        "options": [],
        "answer": 56,
        "why": "56÷100×100 =56%.",
        "concept": "quantitative.economy-calculation",
        "type": "number",
        "unit": "%",
        "tolerance": 0.05
      },
      {
        "id": "quantitative.p-economy2",
        "prompt": "2H₂ + O₂ → 2H₂O. Relative masses 2, 32, 18. Total weighted reactant relative mass?",
        "options": [],
        "answer": 36,
        "why": "2×2 +1×32 =36.",
        "concept": "quantitative.economy-coefficients",
        "type": "number",
        "unit": "relative mass total",
        "tolerance": 0.05
      },
      {
        "id": "quantitative.p-economy3",
        "prompt": "100% atom economy with 60% collected yield is…",
        "options": [
          "Impossible because the quantities are identical",
          "Possible: some product was not obtained",
          "Proof that atoms were destroyed"
        ],
        "answer": 1,
        "why": "Equation-based utilisation and experimental recovery are different measures.",
        "concept": "quantitative.yield-vs-economy"
      },
      {
        "id": "quantitative.p-economyht",
        "prompt": "Two routes have equal yield, rate, equilibrium conversion and operating costs; both co-products have no use. Atom economies A=40%, B=80%. For less unwanted material choose…",
        "options": [
          "A, because lower utilisation is better",
          "B, using the supplied equal-performance conditions",
          "Neither can be compared even with these data"
        ],
        "answer": 1,
        "why": "B directs a greater proportion into desired product under the stated comparable conditions.",
        "concept": "quantitative.pathway-choice"
      }
    ],
    "check": [
      {
        "id": "quantitative.c-economy1",
        "prompt": "2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O. Na₂CO₃ desired. Relative masses 84, 106, 44, 18. Atom economy to 1 d.p.?",
        "options": [],
        "answer": 63.1,
        "why": "106÷(2×84)×100 =63.095…%, or 63.1%.",
        "concept": "quantitative.economy-coefficients",
        "type": "number",
        "unit": "%",
        "tolerance": 0.05
      },
      {
        "id": "quantitative.c-economy2",
        "prompt": "CaCO₃ → CaO + CO₂. This time CO₂ is desired. Relative masses 100, 56, 44. Atom economy?",
        "options": [],
        "answer": 44,
        "why": "44÷100×100 =44%; desired product choice changes the numerator.",
        "concept": "quantitative.economy-calculation",
        "type": "number",
        "unit": "%",
        "tolerance": 0.05
      },
      {
        "id": "quantitative.c-economy3",
        "prompt": "A useful benefit of high atom economy is…",
        "options": [
          "Fewer atoms exist after reaction",
          "A larger proportion of feedstock can enter desired product",
          "Guaranteed100% collected yield"
        ],
        "answer": 1,
        "why": "Less starting material goes into other products; this can reduce waste and costs.",
        "concept": "quantitative.economy-value"
      },
      {
        "id": "quantitative.c-economy4",
        "prompt": "Which measurement is needed for percentage yield but not equation-based atom economy?",
        "options": [
          "Actual product mass collected",
          "Balanced equation coefficients",
          "Relative formula masses"
        ],
        "answer": 0,
        "why": "Yield uses actual recovery; atom economy follows the equation.",
        "concept": "quantitative.yield-vs-economy"
      },
      {
        "id": "quantitative.c-economy5",
        "prompt": "C₂H₄ + H₂ → C₂H₆ is an addition reaction with only ethane produced. Atom economy for ethane?",
        "options": [],
        "answer": 100,
        "why": "All reactant atoms enter the only product.",
        "concept": "quantitative.economy-calculation",
        "type": "number",
        "unit": "%",
        "tolerance": 0.05
      },
      {
        "id": "quantitative.c-economyht",
        "prompt": "For reliable output choose a route. A: atom economy 95%, yield 30%, slow, equilibrium favours reactants, no useful co-product. B: economy 75%, yield 90%, fast, equilibrium favours products, saleable co-product. Equal safety and energy costs. Best supported choice?",
        "options": [
          "A based only on atom economy",
          "B: better output/rate, favourable equilibrium and useful co-product offset lower atom economy",
          "Both must give equal output"
        ],
        "answer": 1,
        "why": "Use all supplied data: B meets the output objective while its co-product also has value.",
        "concept": "quantitative.pathway-choice"
      }
    ]
  }
];
export const efficiencyConcepts={"quantitative.yield-calculation": "Percentage yield", "quantitative.yield-loss": "Why product yield falls", "quantitative.yield-quality": "Evaluating measured yield", "quantitative.theoretical-yield": "Theoretical mass and yield", "quantitative.economy-calculation": "Atom economy", "quantitative.economy-coefficients": "Coefficient-weighted atom economy", "quantitative.yield-vs-economy": "Yield versus atom economy", "quantitative.economy-value": "Resource use and atom economy", "quantitative.pathway-choice": "Choosing reaction pathways"};
