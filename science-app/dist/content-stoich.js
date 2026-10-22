export const stoichLessons=[
  {
    "id": "science.chemistry.quantitative.limiting-reactants",
    "title": "Limiting reactants & excess",
    "short": "Find the limiting supply",
    "refs": [
      "3.2.4"
    ],
    "higher": true,
    "minutes": 25,
    "widget": "stoich-limiting",
    "prerequisites": [
      "science.chemistry.quantitative.reaction-masses"
    ],
    "big": "Compare the available amount divided by its equation coefficient. The smaller value limits product; adding more of an already excess reactant cannot help.",
    "skills": [
      "WS4.1"
    ],
    "learn": [
      {
        "title": "A reaction needs the right ratio.",
        "text": "For N₂ + 3H₂ → 2NH₃, each 1 mol N₂ needs 3 mol H₂. With 2 mol N₂ and 3 mol H₂, H₂ runs out first: only 1 mol N₂ can react. H₂ is limiting, 1 mol N₂ remains, and at most 2 mol NH₃ forms. This maximum assumes the stated reaction completes.",
        "scene": "stoich:limiting"
      },
      {
        "title": "Compare amounts per coefficient.",
        "text": "Divide each available amount in mol by its coefficient. For 2 mol N₂ and 3 mol H₂: 2÷1=2, while 3÷3=1. The smaller value sets the reaction amount. Multiply it by the product coefficient to find product mol. If starting data are masses, first use n=m/Mᵣ. The smaller mass or smaller number of moles is not automatically limiting.",
        "scene": "stoich:limiting"
      },
      {
        "title": "Excess is left over.",
        "text": "With 2 mol N₂ and 3 mol H₂, adding more N₂ leaves the same maximum 2 mol NH₃: H₂ is still limiting. Adding H₂ can increase the maximum until N₂ becomes limiting. At the exact equation ratio neither reactant remains in excess; both are used up together. These are amount accounts, not predictions of rate or experimental yield.",
        "scene": "stoich:limiting"
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-limit1",
        "prompt": "N₂ + 3H₂ → 2NH₃. Start with 2 mol N₂ and 3 mol H₂. Which is limiting?",
        "options": [
          "N₂",
          "H₂",
          "Both in exact ratio"
        ],
        "answer": 1,
        "why": "2÷1=2 and 3÷3=1. Hydrogen permits fewer reaction amounts.",
        "concept": "quantitative.limiting-choice"
      },
      {
        "id": "quantitative.p-limit2",
        "prompt": "N₂ + 3H₂ → 2NH₃. With 1 mol N₂ and 1.5 mol H₂, maximum NH₃?",
        "options": [],
        "answer": 1,
        "why": "H₂ permits 1.5÷3=0.5 reaction amount; 0.5×2=1 mol NH₃.",
        "concept": "quantitative.limiting-product",
        "type": "number",
        "unit": "mol",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-limit3",
        "prompt": "H₂ limits NH₃ formation. Adding only more N₂…",
        "options": [
          "Always doubles product",
          "Cannot increase the maximum product",
          "Makes H₂ excess immediately"
        ],
        "answer": 1,
        "why": "The limiting supply of H₂ is unchanged.",
        "concept": "quantitative.limiting-excess"
      }
    ],
    "check": [
      {
        "id": "quantitative.c-limit1",
        "prompt": "2Mg + O₂ → 2MgO. Start with 0.4 mol Mg and 0.1 mol O₂. Limiting reactant?",
        "options": [
          "Mg",
          "O₂",
          "Neither: exact ratio"
        ],
        "answer": 1,
        "why": "Mg:0.4÷2=0.2; O₂:0.1÷1=0.1. O₂ limits.",
        "concept": "quantitative.limiting-choice"
      },
      {
        "id": "quantitative.c-limit2",
        "prompt": "2Mg + O₂ → 2MgO. 0.4 mol Mg and 0.1 mol O₂: maximum MgO?",
        "options": [],
        "answer": 0.2,
        "why": "The limiting reaction amount is 0.1 mol;  MgO=2×0.1=0.2 mol.",
        "concept": "quantitative.limiting-product",
        "type": "number",
        "unit": "mol",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-limit3",
        "prompt": "2Mg + O₂ → 2MgO. 0.4 mol Mg and 0.1 mol O₂ react completely where possible. Mg left?",
        "options": [],
        "answer": 0.2,
        "why": "0.2 mol Mg reacts with 0.1 mol O₂, leaving 0.4−0.2=0.2 mol Mg.",
        "concept": "quantitative.limiting-excess",
        "type": "number",
        "unit": "mol",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-limit4",
        "prompt": "2Mg + O₂ → 2MgO. Mix 4.8 g Mg (Aᵣ24) and 1.6 g O₂ (Mᵣ32). Maximum MgO mass (Mᵣ40)?",
        "options": [],
        "answer": 4,
        "why": "Mg=0.2 mol, O₂=0.05 mol;  O₂ limits, giving 0.1 mol MgO or 4 g.",
        "concept": "quantitative.limiting-product",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-limit5",
        "prompt": "2Mg + O₂ → 2MgO. 0.2 mol Mg and 0.1 mol O₂ react. Which statement is correct?",
        "options": [
          "Mg must be excess because it has more moles",
          "O₂ must be limiting because it has fewer moles",
          "Both are used up in the exact equation ratio"
        ],
        "answer": 2,
        "why": "0.2÷2 equals 0.1÷1. Neither remains in excess.",
        "concept": "quantitative.limiting-choice"
      }
    ]
  },
  {
    "id": "science.chemistry.quantitative.balance-masses",
    "title": "Balancing equations from masses",
    "short": "Let the data find the ratio",
    "refs": [
      "3.2.3"
    ],
    "higher": true,
    "minutes": 25,
    "widget": "stoich-balancing",
    "prerequisites": [
      "science.chemistry.quantitative.moles",
      "science.chemistry.quantitative.reaction-masses"
    ],
    "big": "Convert each reacting mass to mol, divide by the smallest amount, then turn the complete ratio into the simplest whole-number coefficients. Check every element.",
    "skills": [
      "MS3b",
      "MS3c"
    ],
    "learn": [
      {
        "title": "Mass ratios are not coefficients.",
        "text": "Suppose 4.8 g Mg reacts with 3.2 g O₂ to form 8.0 g MgO. Use Aᵣ(Mg)=24, Mᵣ(O₂)=32 and Mᵣ(MgO)=40. The amounts are 0.2, 0.1 and 0.2 mol. Divide all by 0.1 to obtain 2:1:2, giving 2Mg + O₂ → 2MgO. Use masses actually reacting and formed, not initial excess masses.",
        "scene": "stoich:balancing"
      },
      {
        "title": "Keep fractions until the whole ratio is ready.",
        "text": "For 5.6 g Fe, 2.4 g O₂ and 8.0 g Fe₂O₃, use relative masses 56,32,160. Amounts are 0.1,0.075,0.05 mol. Divide by 0.05: 2:1.5:1. Multiply EVERY entry by 2 to obtain 4:3:2. Rounding 1.5 to 2 would give a different, unbalanced equation.",
        "scene": "stoich:balancing"
      },
      {
        "title": "Check atoms and simplest integers.",
        "text": "4Fe + 3O₂ → 2Fe₂O₃ has 4 Fe and 6 O atoms on each side. Changing a subscript changes the substance, so change only coefficients. 8:6:4 balances too, but reduce it to 4:3:2 when asked for the simplest ratio. The supplied data here are idealised reacting masses; experimental uncertainty needs separate consideration.",
        "scene": "stoich:balancing"
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-bmass1",
        "prompt": "Mass 6.4 g O₂, Mᵣ32: amount?",
        "options": [],
        "answer": 0.2,
        "why": "6.4÷32=0.2 mol.",
        "concept": "quantitative.mass-to-ratio",
        "type": "number",
        "unit": "mol",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-bmass2",
        "prompt": "The mole ratio is 2:1.5:1. To obtain whole coefficients…",
        "options": [
          "Round only1.5 to2",
          "Multiply every entry by2",
          "Change the oxygen formula"
        ],
        "answer": 1,
        "why": "Multiply all entries by 2 to preserve the ratio:4:3:2.",
        "concept": "quantitative.fractional-ratio"
      },
      {
        "id": "quantitative.p-bmass3",
        "prompt": "Reacting masses H₂=0.4 g, O₂=3.2 g, H₂O=3.6 g; Mᵣ=2, 32, 18. Simplest coefficient of H₂?",
        "options": [],
        "answer": 2,
        "why": "Moles 0.2:0.1:0.2 →2:1:2.",
        "concept": "quantitative.mass-to-ratio",
        "type": "number",
        "unit": "coefficient",
        "tolerance": 0.001
      }
    ],
    "check": [
      {
        "id": "quantitative.c-bmass1",
        "prompt": "Mg + O₂ → MgO. Reacting masses 9.6 g, 6.4 g, 16 g; relative masses 24, 32, 40. Simplest Mg coefficient?",
        "options": [],
        "answer": 2,
        "why": "0.4:0.2:0.4 mol gives 2:1:2.",
        "concept": "quantitative.mass-to-ratio",
        "type": "number",
        "unit": "coefficient",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-bmass2",
        "prompt": "Fe + O₂ → Fe₂O₃. Reacting masses 11.2 g, 4.8 g, 16 g; relative masses 56, 32, 160. Simplest O₂ coefficient?",
        "options": [],
        "answer": 3,
        "why": "Moles 0.2:0.15:0.1 →2:1.5:1 →4:3:2.",
        "concept": "quantitative.fractional-ratio",
        "type": "number",
        "unit": "coefficient",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-bmass3",
        "prompt": "N₂ + H₂ → NH₃. Reacting masses 2.8 g, 0.6 g, 3.4 g; relative masses 28, 2, 17. Simplest NH₃ coefficient?",
        "options": [],
        "answer": 2,
        "why": "Moles 0.1:0.3:0.2 →1:3:2.",
        "concept": "quantitative.mass-to-ratio",
        "type": "number",
        "unit": "coefficient",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-bmass4",
        "prompt": "Which is a valid final check for 4Fe + 3O₂ → 2Fe₂O₃?",
        "options": [
          "Equal masses must mean equal coefficients",
          "Both sides contain4 Fe atoms and6 O atoms",
          "Change Fe₂O₃ to FeO to simplify"
        ],
        "answer": 1,
        "why": "Count coefficient×subscript for each element on both sides.",
        "concept": "quantitative.coefficient-check"
      },
      {
        "id": "quantitative.c-bmass5",
        "prompt": "Why use reacting masses rather than all the initial mass of an excess reactant?",
        "options": [
          "Excess has no mass",
          "Initial excess includes material that did not react",
          "Excess changes its atomic mass"
        ],
        "answer": 1,
        "why": "Unreacted material is not part of the stoichiometric reacting ratio.",
        "concept": "quantitative.mass-to-ratio"
      }
    ]
  }
];
export const stoichConcepts={"quantitative.limiting-choice": "Limiting choice", "quantitative.limiting-product": "Limiting product", "quantitative.limiting-excess": "Limiting excess", "quantitative.mass-to-ratio": "Mass to ratio", "quantitative.fractional-ratio": "Fractional ratio", "quantitative.coefficient-check": "Coefficient check"};
