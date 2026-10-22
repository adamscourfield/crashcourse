export const amountLessons=[
  {
    "id": "science.chemistry.quantitative.concentration",
    "title": "Concentration in grams per dm³",
    "short": "Mass in a measured volume",
    "refs": [
      "3.2.5"
    ],
    "minutes": 20,
    "widget": "amount-concentration",
    "prerequisites": [
      "science.chemistry.quantitative.formula-mass"
    ],
    "higherQuestions": [
      "quantitative.p-concht",
      "quantitative.c-concht"
    ],
    "big": "Concentration in g/dm³ tells you the mass of solute in each dm³ of solution. Convert volume units before using mass = concentration × volume.",
    "learn": [
      {
        "title": "Interpret the units.",
        "text": "A concentration of 20 g/dm³ means 20 g solute per 1 dm³ of solution. The volume is the final solution volume, not just the water added. To calculate the mass present, use m=c×V, with m in g, c in g/dm³ and V in dm³. For 0.5 dm³ at 20 g/dm³, m=10 g.",
        "scene": "amount:concentration"
      },
      {
        "title": "Convert the volume first.",
        "text": "1 dm³ = 1000 cm³. Divide cm³ by 1000 to get dm³:250 cm³ = 0.250 dm³. At 12 g/dm³, that volume contains 12×0.250=3.0 g solute. Multiplying 12 by 250 without converting would overestimate mass by a factor of 1000.",
        "scene": "amount:concentration"
      },
      {
        "title": "Plan a calculation.",
        "text": "Identify the required mass, the given concentration and the total solution volume. Convert volume, multiply and state units. Check whether the answer is reasonable: half a dm³ contains half the mass named per dm³. This planner is a calculation model, not instructions for preparing a solution in a laboratory.",
        "scene": "amount:concentration"
      },
      {
        "title": "Higher: separate mass from concentration.",
        "text": "Concentration is c=m/V. At fixed volume, doubling solute mass doubles concentration. At fixed solute mass, doubling total solution volume halves concentration. Adding water changes volume without adding solute. These statements assume the solute stays dissolved and the total solution volume is known.",
        "scene": "amount:concentration",
        "higher": true
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-conc1",
        "prompt": "Convert 250 cm³ to dm³.",
        "options": [],
        "answer": 0.25,
        "why": "250÷1000 = 0.250 dm³.",
        "concept": "quantitative.solution-units",
        "type": "number",
        "unit": "dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-conc2",
        "prompt": "Find mass in 0.5 dm³ of a 20 g/dm³ solution.",
        "options": [],
        "answer": 10,
        "why": "20×0.5 = 10 g.",
        "concept": "quantitative.solution-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-conc3",
        "prompt": "Find mass in 200 cm³ of a 15 g/dm³ solution.",
        "options": [],
        "answer": 3,
        "why": "200 cm³=0.2 dm³;15×0.2=3 g.",
        "concept": "quantitative.solution-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-concht",
        "prompt": "At fixed solute mass, doubling solution volume…",
        "options": [
          "Halves concentration",
          "Doubles concentration",
          "Keeps concentration fixed"
        ],
        "answer": 0,
        "why": "c=m/V; twice the denominator gives half the concentration.",
        "concept": "quantitative.solution-relationship"
      }
    ],
    "check": [
      {
        "id": "quantitative.c-conc1",
        "prompt": "Convert 400 cm³ to dm³.",
        "options": [],
        "answer": 0.4,
        "why": "400÷1000 = 0.4 dm³.",
        "concept": "quantitative.solution-units",
        "type": "number",
        "unit": "dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-conc2",
        "prompt": "Mass in 0.25 dm³ of an 8 g/dm³ solution?",
        "options": [],
        "answer": 2,
        "why": "8×0.25 = 2 g.",
        "concept": "quantitative.solution-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-conc3",
        "prompt": "Mass in 150 cm³ of a 20 g/dm³ solution?",
        "options": [],
        "answer": 3,
        "why": "150 cm³=0.15 dm³;20×0.15=3 g.",
        "concept": "quantitative.solution-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-conc4",
        "prompt": "Which volume belongs in m=cV for g/dm³?",
        "options": [
          "Total solution volume in dm³",
          "Only the original solvent volume in cm³",
          "Any volume without unit conversion"
        ],
        "answer": 0,
        "why": "Use the final solution volume and matching dm³ units.",
        "concept": "quantitative.solution-units"
      },
      {
        "id": "quantitative.c-conc5",
        "prompt": "Mass in 1.5 dm³ of a 4 g/dm³ solution?",
        "options": [],
        "answer": 6,
        "why": "4×1.5 = 6 g.",
        "concept": "quantitative.solution-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-concht",
        "prompt": "A solution contains the same solute mass but its total volume doubles. Concentration…",
        "options": [
          "Halves",
          "Doubles",
          "Must increase tenfold"
        ],
        "answer": 0,
        "why": "At fixed mass, c=m/V is inversely proportional to volume.",
        "concept": "quantitative.solution-relationship"
      }
    ],
    "skills": [
      "MS1c",
      "MS3b"
    ]
  },
  {
    "id": "science.chemistry.quantitative.moles",
    "title": "Moles, particles & mass",
    "short": "Count by the mole",
    "refs": [
      "3.2.1"
    ],
    "higher": true,
    "minutes": 25,
    "widget": "amount-moles",
    "prerequisites": [
      "science.chemistry.quantitative.formula-mass"
    ],
    "big": "A mole counts a fixed number of specified particles. Use n=m/Mᵣ to connect amount in mol with mass in grams, and N=n×6.02×10²³ to count particles.",
    "learn": [
      {
        "title": "A counting unit.",
        "text": "One mole contains 6.02×10²³ specified particles: the Avogadro constant is 6.02×10²³ mol⁻¹. State what you count: C atoms, CO₂ molecules, Na⁺ ions or electrons. Equal amounts in mol contain equal numbers of the stated particles, even when their masses differ. One CO₂ molecule contains three atoms, so one mole of CO₂ molecules contains three moles of atoms altogether.",
        "scene": "amount:moles"
      },
      {
        "title": "Convert mass to amount.",
        "text": "The mass of one mole in grams is numerically equal to the relative formula mass. Carbon has Aᵣ=12, so 1 mol carbon atoms has mass 12 g. CO₂ has Mᵣ=44, so 1 mol CO₂ molecules has mass 44 g. Use n=m/Mᵣ; for 22 g CO₂, n=22/44=0.5 mol. Mᵣ has no unit; the corresponding molar mass has units g/mol.",
        "scene": "amount:moles"
      },
      {
        "title": "Rearrange and check.",
        "text": "For mass, m=n×Mᵣ in this GCSE calculation with grams and mol. For 0.25 mol water with Mᵣ=18, m=4.5 g. For particle number, N=n×6.02×10²³, so 0.5 mol contains 3.01×10²³ specified particles. Use e notation in number boxes, for example 3.01e 23. This is a number of particles, not a mass.",
        "scene": "amount:moles"
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-mole1",
        "prompt": "Amount in 22 g CO₂, Mᵣ=44?",
        "options": [],
        "answer": 0.5,
        "why": "22÷44 = 0.5 mol.",
        "concept": "quantitative.mole-mass",
        "type": "number",
        "unit": "mol",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-mole2",
        "prompt": "Mass of 2 mol H₂O, Mᵣ=18?",
        "options": [],
        "answer": 36,
        "why": "2×18 = 36 g.",
        "concept": "quantitative.mole-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-mole3",
        "prompt": "Molecules in 0.5 mol CO₂? Use 6.02e 23 per mol.",
        "options": [],
        "answer": 3.01e+23,
        "why": "0.5×6.02×10²³ = 3.01×10²³ molecules.",
        "concept": "quantitative.mole-particles",
        "type": "number",
        "unit": "molecules",
        "tolerance": 1000000000000000000
      }
    ],
    "check": [
      {
        "id": "quantitative.c-mole1",
        "prompt": "Amount in 9 g water, Mᵣ=18?",
        "options": [],
        "answer": 0.5,
        "why": "9÷18 = 0.5 mol.",
        "concept": "quantitative.mole-mass",
        "type": "number",
        "unit": "mol",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-mole2",
        "prompt": "Mass of 0.25 mol CO₂, Mᵣ=44?",
        "options": [],
        "answer": 11,
        "why": "0.25×44 = 11 g.",
        "concept": "quantitative.mole-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-mole3",
        "prompt": "Number of C atoms in 2 mol carbon? Use 6.02e 23 per mol.",
        "options": [],
        "answer": 1.204e+24,
        "why": "2×6.02×10²³ = 1.204×10²⁴ atoms.",
        "concept": "quantitative.mole-particles",
        "type": "number",
        "unit": "atoms",
        "tolerance": 1000000000000000000
      },
      {
        "id": "quantitative.c-mole4",
        "prompt": "One mol C atoms and one mol CO₂ molecules have…",
        "options": [
          "Equal numbers of the stated particles, different masses",
          "Equal masses necessarily",
          "No comparable particle numbers"
        ],
        "answer": 0,
        "why": "Each contains the Avogadro number of its stated particles.",
        "concept": "quantitative.mole-meaning"
      },
      {
        "id": "quantitative.c-mole5",
        "prompt": "How many mol of atoms altogether are in 1 mol CO₂ molecules?",
        "options": [],
        "answer": 3,
        "why": "Each CO₂ molecule contains three atoms, so the total is 3 mol atoms.",
        "concept": "quantitative.mole-meaning",
        "type": "number",
        "unit": "mol of atoms",
        "tolerance": 0.001
      }
    ],
    "skills": [
      "MS1a",
      "MS1b",
      "MS1c",
      "MS2a",
      "MS3b",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.quantitative.reaction-masses",
    "title": "Mole ratios & reaction masses",
    "short": "Follow the equation’s ratio",
    "refs": [
      "3.2.2"
    ],
    "higher": true,
    "minutes": 25,
    "widget": "amount-ratios",
    "prerequisites": [
      "science.chemistry.quantitative.moles",
      "science.chemistry.quantitative.mass-conservation"
    ],
    "big": "A balanced equation gives ratios of amounts in mol. Convert the given mass to mol, apply the coefficient ratio, then convert the required amount back to grams.",
    "learn": [
      {
        "title": "Coefficients are mole ratios.",
        "text": "Mg + 2HCl → MgCl₂ + H₂ means 1 mol Mg reacts with 2 mol HCl to form 1 mol MgCl₂ and 1 mol H₂. It does not mean their masses are equal. State the reacting particles or substances, and read the whole balanced equation before calculating.",
        "scene": "amount:ratios"
      },
      {
        "title": "Use a three-step route.",
        "text": "For 2.4 g Mg, Aᵣ=24 gives 0.10 mol Mg. The equation makes MgCl₂ in a 1:1 mole ratio, so 0.10 mol MgCl₂ forms when sufficient acid is available. With Mᵣ(MgCl₂)=95, the product mass is 0.10×95=9.5 g. The remaining mass comes from the acid; this does not violate conservation.",
        "scene": "amount:ratios"
      },
      {
        "title": "Keep assumptions visible.",
        "text": "For N₂ + 3H₂ → 2NH₃, one mole of nitrogen can produce two moles of ammonia if there is enough hydrogen. First find nitrogen’s amount, then multiply by 2 for ammonia, then use Mᵣ(NH₃)=17 to obtain mass. These are calculated amounts for the stated complete reaction, not measured actual yields. Later lessons address limiting reactants and percentage yield.",
        "scene": "amount:ratios"
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-ratio1",
        "prompt": "For N₂ + 3H₂ → 2NH₃, the N₂:NH₃ mole ratio is…",
        "options": [
          "1:2",
          "1:1",
          "3:2"
        ],
        "answer": 0,
        "why": "The coefficients are 1 for N₂ and 2 for NH₃.",
        "concept": "quantitative.equation-ratios"
      },
      {
        "id": "quantitative.p-ratio2",
        "prompt": "For 2Mg + O₂ → 2MgO, how many mol MgO form from 0.2 mol Mg with enough O₂?",
        "options": [],
        "answer": 0.2,
        "why": "Mg:MgO is 2:2, simplified 1:1.",
        "concept": "quantitative.equation-ratios",
        "type": "number",
        "unit": "mol",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-ratio3",
        "prompt": "Mass of 0.2 mol MgO, Mᵣ=40?",
        "options": [],
        "answer": 8,
        "why": "0.2×40 = 8 g.",
        "concept": "quantitative.reaction-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      }
    ],
    "check": [
      {
        "id": "quantitative.c-ratio1",
        "prompt": "N₂ + 3H₂ → 2NH₃: amount NH₃ from 0.5 mol N₂ with excess H₂?",
        "options": [],
        "answer": 1,
        "why": "0.5×2 = 1.0 mol NH₃.",
        "concept": "quantitative.equation-ratios",
        "type": "number",
        "unit": "mol",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-ratio2",
        "prompt": "For 2Mg + O₂ → 2MgO,4.8 g Mg reacts fully with enough O₂. Product mass? Mg=24,MgO=40.",
        "options": [],
        "answer": 8,
        "why": "4.8÷24=0.2 mol Mg;1:1 gives 0.2 mol MgO;×40=8 g.",
        "concept": "quantitative.reaction-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-ratio3",
        "prompt": "Mg + 2HCl → MgCl₂ + H₂. How many mol HCl react with 0.3 mol Mg?",
        "options": [],
        "answer": 0.6,
        "why": "Mg:HCl is 1:2, so 0.3×2 = 0.6 mol.",
        "concept": "quantitative.equation-ratios",
        "type": "number",
        "unit": "mol",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-ratio4",
        "prompt": "Why convert to mol before using a balanced equation’s coefficients?",
        "options": [
          "Coefficients give amount ratios, not equal masses",
          "All reactants have the same Mᵣ",
          "Mass is never conserved"
        ],
        "answer": 0,
        "why": "Mole ratios must be combined with different formula masses.",
        "concept": "quantitative.reaction-mass"
      },
      {
        "id": "quantitative.c-ratio5",
        "prompt": "N₂ + 3H₂ → 2NH₃:14 g N₂ (Mᵣ=28) reacts with excess H₂. Mass NH₃, Mᵣ=17?",
        "options": [],
        "answer": 17,
        "why": "14÷28=0.5 mol N₂;×2=1 mol NH₃;×17=17 g.",
        "concept": "quantitative.reaction-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.audit-reverse-mass",
        "prompt": "2Mg + O₂ → 2MgO. What mass Mg forms8 g MgO? AᵣMg24,MᵣMgO40. O₂ excess; complete reaction.",
        "options": [],
        "answer": 4.8,
        "why": "MgO amount8÷40=0.20 mol;2:2 gives0.20 mol Mg;×24=4.8 g.",
        "concept": "quantitative.reaction-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      }
    ],
    "skills": [
      "MS1a",
      "MS1c",
      "MS3b",
      "MS3c"
    ]
  }
];
export const amountConcepts={
  "quantitative.solution-units": "Solution volume units",
  "quantitative.solution-mass": "Mass from concentration",
  "quantitative.solution-relationship": "Higher: concentration relationships",
  "quantitative.mole-meaning": "Higher: mole as a counting unit",
  "quantitative.mole-mass": "Higher: mass and amount",
  "quantitative.mole-particles": "Higher: Avogadro particle counts",
  "quantitative.equation-ratios": "Higher: equation mole ratios",
  "quantitative.reaction-mass": "Higher: reaction mass calculations"
};
