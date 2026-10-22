export const quantitativeLessons=[
  {
    "id": "science.chemistry.quantitative.mass-conservation",
    "title": "Conservation of mass & escaping gases",
    "short": "Every atom accounted for",
    "refs": [
      "3.1.1",
      "3.1.3"
    ],
    "minutes": 25,
    "widget": "quant-mass",
    "prerequisites": [
      "equations"
    ],
    "big": "Chemical reactions rearrange atoms. Total mass is conserved, but an open balance reading can change when a gas enters or leaves the weighed system.",
    "learn": [
      {
        "title": "Balance atoms, not formulae.",
        "text": "No atoms are created or destroyed in a chemical reaction. Balance a symbol equation by changing coefficients in front of whole formulae. For magnesium burning: 2Mg(s) + O₂(g) → 2MgO(s). There are two Mg atoms and two O atoms on each side. The coefficient 2 multiplies all atoms in MgO; changing its subscript would change the substance.",
        "scene": "quant:ledger"
      },
      {
        "title": "Define what is on the balance.",
        "text": "A 2.4 g magnesium sample combines with 1.6 g oxygen to make 4.0 g magnesium oxide. The solid gains mass because oxygen atoms enter from the surroundings. If the oxygen was not initially on the balance, the increase is expected. Include both reactants to compare total masses. Gas has mass even when it is invisible.",
        "scene": "quant:ledger"
      },
      {
        "title": "Follow a gas leaving.",
        "text": "Thermal decomposition can be written CaCO₃(s) → CaO(s) + CO₂(g). If 10.0 g calcium carbonate produces 5.6 g calcium oxide,4.4 g carbon dioxide is produced. An open system can lose this gas, reducing its measured mass. If the whole system, including gas, is weighed before and after, total mass is unchanged. These are bookkeeping examples, not instructions for heating a sealed container.",
        "scene": "quant:ledger"
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-mass1",
        "prompt": "A 6 g metal combines with 4 g oxygen. Product mass?",
        "options": [],
        "answer": 10,
        "why": "6 + 4 = 10 g when all reactants and products are counted.",
        "concept": "quantitative.conservation",
        "type": "number",
        "unit": "g",
        "tolerance": 0
      },
      {
        "id": "quantitative.p-mass2",
        "prompt": "Why does a heated metal gain mass in air?",
        "options": [
          "Oxygen joins the metal",
          "New atoms are created",
          "The balance must always be faulty"
        ],
        "answer": 0,
        "why": "Oxygen atoms enter from the air and become part of the oxide.",
        "concept": "quantitative.gas-boundaries"
      },
      {
        "id": "quantitative.p-mass3",
        "prompt": "In 2MgO, how many oxygen atoms are represented?",
        "options": [
          "One",
          "Two",
          "Four"
        ],
        "answer": 1,
        "why": "The coefficient 2 multiplies the whole MgO formula.",
        "concept": "quantitative.coefficients"
      }
    ],
    "check": [
      {
        "id": "quantitative.c-mass1",
        "prompt": "An enclosed reaction has 8.2 g reactants. Total product mass?",
        "options": [],
        "answer": 8.2,
        "why": "No material enters or leaves: total mass stays 8.2 g.",
        "concept": "quantitative.conservation",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-mass2",
        "prompt": "A carbonate gives 6.0 g solid oxide and 4.4 g CO₂. Original carbonate mass?",
        "options": [],
        "answer": 10.4,
        "why": "6.0 + 4.4 = 10.4 g.",
        "concept": "quantitative.gas-boundaries",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-mass3",
        "prompt": "A carbonate loses measured mass in an open vessel. Best explanation?",
        "options": [
          "Gas particles leave the weighed system",
          "Atoms cease to exist",
          "All products must have zero mass"
        ],
        "answer": 0,
        "why": "CO₂ carries mass away while total mass including escaped gas is conserved.",
        "concept": "quantitative.gas-boundaries"
      },
      {
        "id": "quantitative.c-mass4",
        "prompt": "How should you balance Mg + O₂ → MgO?",
        "options": [
          "2Mg + O₂ → 2MgO",
          "Mg + O₂ → MgO₂",
          "Mg₂ + O₂ → MgO"
        ],
        "answer": 0,
        "why": "Use coefficients to conserve atoms without changing substances.",
        "concept": "quantitative.coefficients"
      },
      {
        "id": "quantitative.c-mass5",
        "prompt": "Why can a metal oxide weigh more than the original metal?",
        "options": [
          "Oxygen from outside the initial weighed sample is included",
          "Mass was created from nothing",
          "The oxygen has no mass"
        ],
        "answer": 0,
        "why": "The added oxygen contributes mass.",
        "concept": "quantitative.gas-boundaries"
      },
      {
        "id": "quantitative.audit-mass-total",
        "prompt": "2H₂ + O₂ → 2H₂O. Mᵣ(H₂)=2, O₂=32, H₂O=18. Total reactant relative mass including coefficients?",
        "options": [],
        "answer": 36,
        "why": "2×2 +32=36; products2×18=36.",
        "concept": "quantitative.conservation",
        "type": "number",
        "unit": "relative mass total",
        "tolerance": 0.001
      }
    ],
    "skills": [
      "WS1.2",
      "AT1",
      "AT2",
      "AT6"
    ]
  },
  {
    "id": "science.chemistry.quantitative.formula-mass",
    "title": "Relative formula mass & composition",
    "short": "Count it, sum it, compare it",
    "refs": [
      "3.1.2"
    ],
    "minutes": 25,
    "widget": "quant-formula",
    "prerequisites": [
      "isotopes",
      "equations"
    ],
    "big": "Relative formula mass adds the relative atomic masses of every atom in a formula. An element’s mass percentage uses its whole contribution, not just one atom.",
    "learn": [
      {
        "title": "Sum every atom.",
        "text": "Relative formula mass, Mᵣ, is the sum of all the relative atomic masses, Aᵣ, in a formula. With H=1 and O=16, H₂O has Mᵣ=2×1+16=18. CO₂ has Mᵣ=12+2×16=44. Mᵣ is a relative quantity with no unit; it is not a measured sample mass in grams. An ionic formula gives the ratio used in the calculation, not necessarily a molecule.",
        "scene": "quant:formula"
      },
      {
        "title": "Make brackets do their job.",
        "text": "In Ca(OH)₂, the subscript 2 multiplies both O and H inside the brackets. There is one Ca, two O and two H. With Ca=40, O=16 and H=1, Mᵣ=40+2×16+2×1=74. A coefficient outside a whole formula multiplies the entire formula. For 2H₂ + O₂ → 2H₂O, relative totals are 2×2+32=36 and 2×18=36.",
        "scene": "quant:formula"
      },
      {
        "title": "Calculate an element’s percentage.",
        "text": "Percentage by mass = total Aᵣ contribution from the element ÷ Mᵣ ×100. Oxygen in water contributes 16 out of 18, so its percentage is 88.9% to one decimal place. Oxygen in Ca(OH)₂ contributes 32, not 16:32÷74×100=43.2%. Keep extra digits until the last step and round as requested.",
        "scene": "quant:formula"
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-formula1",
        "prompt": "Calculate Mᵣ of CO₂. Aᵣ:C=12,O=16.",
        "options": [],
        "answer": 44,
        "why": "12 + 2×16 = 44.",
        "concept": "quantitative.formula-mass",
        "type": "number",
        "unit": "Mᵣ (no unit)",
        "tolerance": 0
      },
      {
        "id": "quantitative.p-formula2",
        "prompt": "How many oxygen atoms are represented in Ca(OH)₂?",
        "options": [],
        "answer": 2,
        "why": "The subscript 2 multiplies O and H inside the brackets.",
        "concept": "quantitative.formula-counts",
        "type": "number",
        "unit": "oxygen atoms",
        "tolerance": 0
      },
      {
        "id": "quantitative.p-formula3",
        "prompt": "Calculate the percentage by mass of oxygen in H₂O, to 1 decimal place. H=1,O=16.",
        "options": [],
        "answer": 88.9,
        "why": "16÷18×100 = 88.888…%, rounded 88.9%.",
        "concept": "quantitative.mass-percent",
        "type": "number",
        "unit": "%",
        "tolerance": 0.051
      }
    ],
    "check": [
      {
        "id": "quantitative.c-formula1",
        "prompt": "Calculate Mᵣ of H₂SO₄. H=1,S=32,O=16.",
        "options": [],
        "answer": 98,
        "why": "2×1+32+4×16 = 98.",
        "concept": "quantitative.formula-mass",
        "type": "number",
        "unit": "Mᵣ (no unit)",
        "tolerance": 0
      },
      {
        "id": "quantitative.c-formula2",
        "prompt": "Calculate Mᵣ of Ca(OH)₂. Ca=40,O=16,H=1.",
        "options": [],
        "answer": 74,
        "why": "40+2×16+2×1 = 74.",
        "concept": "quantitative.formula-counts",
        "type": "number",
        "unit": "Mᵣ (no unit)",
        "tolerance": 0
      },
      {
        "id": "quantitative.c-formula3",
        "prompt": "Calculate oxygen’s percentage by mass in MgO. Mg=24,O=16.",
        "options": [],
        "answer": 40,
        "why": "16÷(24+16)×100 = 40%.",
        "concept": "quantitative.mass-percent",
        "type": "number",
        "unit": "%",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-formula4",
        "prompt": "Calculate carbon’s percentage by mass in CO₂ to 1 decimal place. C=12,O=16.",
        "options": [],
        "answer": 27.3,
        "why": "12÷44×100 = 27.2727…%, rounded 27.3%.",
        "concept": "quantitative.mass-percent",
        "type": "number",
        "unit": "%",
        "tolerance": 0.051
      },
      {
        "id": "quantitative.c-formula5",
        "prompt": "Which statement is correct?",
        "options": [
          "Mᵣ has no unit; sample mass can be measured in grams",
          "Mᵣ is always measured in kilograms",
          "Mᵣ counts only one atom per element"
        ],
        "answer": 0,
        "why": "Mᵣ is relative and sums every atom in the formula.",
        "concept": "quantitative.formula-mass"
      },
      {
        "id": "quantitative.audit-bracket-percent",
        "prompt": "Percentage oxygen by mass in Ca(OH)₂? Aᵣ:Ca40,O16,H1. Give1 d.p.",
        "options": [],
        "answer": 43.2,
        "why": "Mᵣ=40+2×(16+1)=74; oxygen contribution32. 32÷74×100=43.2%.",
        "concept": "quantitative.mass-percent",
        "type": "number",
        "unit": "%",
        "tolerance": 0.05
      },
      {
        "id": "quantitative.audit-bracket-percent2",
        "prompt": "Percentage nitrogen by mass in (NH₄)₂SO₄? Aᵣ:N14,H1,S32,O16. Give1 d.p.",
        "options": [],
        "answer": 21.2,
        "why": "Mᵣ=132; nitrogen contribution2×14=28; 28÷132×100=21.2%.",
        "concept": "quantitative.mass-percent",
        "type": "number",
        "unit": "%",
        "tolerance": 0.05
      }
    ],
    "skills": [
      "MS1a",
      "MS1c",
      "MS2a"
    ]
  },
  {
    "id": "science.chemistry.quantitative.uncertainty",
    "title": "Measurements, spread & uncertainty",
    "short": "A result is more than one number",
    "refs": [
      "3.1.4"
    ],
    "minutes": 20,
    "widget": "quant-uncertainty",
    "prerequisites": [
      "science.chemistry.quantitative.formula-mass"
    ],
    "big": "Repeated measurements show a distribution. Report the mean alongside the spread, and distinguish repeatability from evidence of accuracy.",
    "learn": [
      {
        "title": "Show the spread.",
        "text": "Every measurement has uncertainty. Repeating a measurement helps show variation. A dot plot places each reading on a labelled scale, making clusters or unusual values easier to see. The mean is the sum divided by the number of readings. For 2.38,2.40 and 2.42 g, the mean is 2.40 g. A mean is an estimate, not proof of the true value.",
        "scene": "quant:plot"
      },
      {
        "title": "Keep range and half-range distinct.",
        "text": "The full range is maximum minus minimum:2.42−2.38=0.04 g. When a task asks for a half-range estimate of uncertainty, divide the range by 2:±0.02 g. You might report 2.40±0.02 g under that stated convention. The range describes observed spread; it does not include every source of uncertainty. Follow the method specified in the question.",
        "scene": "quant:plot"
      },
      {
        "title": "Interpret, then investigate.",
        "text": "Close repeat readings show repeatability, but a miscalibrated balance can give close readings that are all shifted from the true value. More repeats cannot remove that systematic error. Investigate an unusual result rather than deleting it merely to improve the mean. If uncertainty intervals overlap, that alone does not prove results are identical; consider the evidence and test conditions.",
        "scene": "quant:plot"
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-uncert1",
        "prompt": "Readings are 2.1,2.2 and 2.3 g. Calculate the mean.",
        "options": [],
        "answer": 2.2,
        "why": "(2.1+2.2+2.3)÷3 = 2.2 g.",
        "concept": "quantitative.measurement-mean",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-uncert2",
        "prompt": "For 2.1,2.2 and 2.3 g, calculate the FULL range.",
        "options": [],
        "answer": 0.2,
        "why": "2.3−2.1 = 0.2 g.",
        "concept": "quantitative.measurement-range",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-uncert3",
        "prompt": "Very close repeats prove…",
        "options": [
          "Good repeatability under those conditions",
          "That systematic error is impossible",
          "That the true value is known exactly"
        ],
        "answer": 0,
        "why": "Close readings can all be shifted by the same systematic error.",
        "concept": "quantitative.measurement-evaluation"
      }
    ],
    "check": [
      {
        "id": "quantitative.c-uncert1",
        "prompt": "Find the mean of 4.8,5.0 and 5.2 g.",
        "options": [],
        "answer": 5,
        "why": "(4.8+5.0+5.2)÷3 = 5.0 g.",
        "concept": "quantitative.measurement-mean",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-uncert2",
        "prompt": "Find the FULL range of 4.8,5.0 and 5.2 g.",
        "options": [],
        "answer": 0.4,
        "why": "5.2−4.8 = 0.4 g.",
        "concept": "quantitative.measurement-range",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-uncert3",
        "prompt": "For 4.8,5.0 and 5.2 g, estimate uncertainty using HALF the range.",
        "options": [],
        "answer": 0.2,
        "why": "Full range 0.4 g; half-range 0.2 g.",
        "concept": "quantitative.measurement-range",
        "type": "number",
        "unit": "± g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-uncert4",
        "prompt": "A balance reads 0.10 g high every time. What helps address this?",
        "options": [
          "Check/calibrate the balance against a suitable reference",
          "Take more repeats without checking the balance",
          "Delete the largest reading automatically"
        ],
        "answer": 0,
        "why": "Repeats alone do not remove a systematic offset.",
        "concept": "quantitative.measurement-evaluation"
      },
      {
        "id": "quantitative.c-uncert5",
        "prompt": "An unusually high reading appears. Best next step?",
        "options": [
          "Investigate the procedure and repeat where appropriate",
          "Delete it because high results are always wrong",
          "Change every reading to the expected number"
        ],
        "answer": 0,
        "why": "Investigate potential causes using evidence rather than silently discarding data.",
        "concept": "quantitative.measurement-evaluation"
      }
    ],
    "skills": [
      "WS3.4",
      "MS1a",
      "MS2a"
    ]
  }
];
export const quantitativeConcepts={
  "quantitative.conservation": "Conservation of mass",
  "quantitative.gas-boundaries": "Gases and weighed system boundaries",
  "quantitative.coefficients": "Coefficients vs subscripts",
  "quantitative.formula-mass": "Relative formula mass",
  "quantitative.formula-counts": "Formulae and bracket multipliers",
  "quantitative.mass-percent": "Percentage composition",
  "quantitative.measurement-mean": "Means of repeated measurements",
  "quantitative.measurement-range": "Range and uncertainty estimates",
  "quantitative.measurement-evaluation": "Repeatability, accuracy and anomalies"
};
