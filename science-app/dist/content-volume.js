export const volumeLessons=[
  {
    "id": "science.chemistry.quantitative.molar-concentration",
    "title": "Concentration in mol/dm³",
    "short": "Count the solute in solution",
    "refs": [
      "3.4"
    ],
    "separate": true,
    "higher": true,
    "minutes": 25,
    "widget": "volume-molar-concentration",
    "prerequisites": [
      "science.chemistry.quantitative.concentration",
      "science.chemistry.quantitative.moles"
    ],
    "big": "Molar concentration links amount and solution volume: n=cV. Use dm³, then use molar mass to connect amount to grams.",
    "learn": [
      {
        "title": "Concentration counts amount per volume.",
        "text": "A concentration of 0.20 mol/dm³ means 0.20 mol of solute in each dm³ of solution. Use n=cV with V in dm³. For 250 cm³, first convert to 0.250 dm³: n=0.20×0.250=0.050 mol. Use final solution volume, not only solvent volume.",
        "scene": "volume:molar-concentration"
      },
      {
        "title": "Connect amount to mass.",
        "text": "Once amount is known, mass=n×Mᵣ in grams. For 0.050 mol NaOH, Mᵣ=40, so mass=2.0 g. Molar concentration and mass concentration are different: multiply mol/dm³ by molar mass in g/mol to obtain g/dm³. Numerically, 0.20 mol/dm³ NaOH corresponds to 8.0 g/dm³.",
        "scene": "volume:molar-concentration"
      },
      {
        "title": "Rearrange and explain the relationship.",
        "text": "Use c=n/V=m/(MᵣV), or V=n/c. For the same solute at fixed volume, doubling mass doubles concentration. For fixed dissolved mass, doubling total solution volume halves concentration. A sample containing 0.10 mol in 0.50 dm³ has c=0.20 mol/dm³. Keep grams, mol and dm³ distinct.",
        "scene": "volume:molar-concentration"
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-molar1",
        "prompt": "Amount in 250 cm³ of 0.20 mol/dm³ solution?",
        "options": [],
        "answer": 0.05,
        "why": "250÷1000=0.250 dm³; n=0.20×0.250=0.050 mol.",
        "concept": "quantitative.molar-amount",
        "type": "number",
        "unit": "mol",
        "tolerance": 1e-05
      },
      {
        "id": "quantitative.p-molar2",
        "prompt": "0.050 mol NaOH, Mᵣ40. Mass?",
        "options": [],
        "answer": 2,
        "why": "0.050×40=2.0 g.",
        "concept": "quantitative.molar-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-molar3",
        "prompt": "0.12 mol in 0.40 dm³. Molar concentration?",
        "options": [],
        "answer": 0.3,
        "why": "c=n/V=0.12÷0.40=0.30 mol/dm³.",
        "concept": "quantitative.molar-relationship",
        "type": "number",
        "unit": "mol/dm³",
        "tolerance": 0.001
      }
    ],
    "check": [
      {
        "id": "quantitative.c-molar1",
        "prompt": "Amount in 200 cm³ of 0.30 mol/dm³ solution?",
        "options": [],
        "answer": 0.06,
        "why": "0.30×0.200=0.060 mol.",
        "concept": "quantitative.molar-amount",
        "type": "number",
        "unit": "mol",
        "tolerance": 1e-05
      },
      {
        "id": "quantitative.c-molar2",
        "prompt": "Mass NaOH in 150 cm³ at 0.40 mol/dm³, Mᵣ40?",
        "options": [],
        "answer": 2.4,
        "why": "n=0.40×0.150=0.060 mol; mass=0.060×40=2.4 g.",
        "concept": "quantitative.molar-mass",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-molar3",
        "prompt": "Volume containing 0.10 mol at 0.25 mol/dm³?",
        "options": [],
        "answer": 0.4,
        "why": "V=n/c=0.10÷0.25=0.40 dm³.",
        "concept": "quantitative.molar-relationship",
        "type": "number",
        "unit": "dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-molar4",
        "prompt": "4 g NaOH, Mᵣ40, in final volume 500 cm³. Concentration?",
        "options": [],
        "answer": 0.2,
        "why": "n=4÷40=0.10 mol; c=0.10÷0.500=0.20 mol/dm³.",
        "concept": "quantitative.molar-relationship",
        "type": "number",
        "unit": "mol/dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-molar5",
        "prompt": "For fixed dissolved mass of the same solute, doubling total solution volume…",
        "options": [
          "Halves molar concentration",
          "Doubles molar concentration",
          "Keeps molar concentration fixed"
        ],
        "answer": 0,
        "why": "Amount stays fixed while c=n/V halves.",
        "concept": "quantitative.molar-relationship"
      }
    ],
    "skills": [
      "WS4.2",
      "WS4.3",
      "WS4.6",
      "MS1a",
      "MS1c",
      "MS3b",
      "MS3c"
    ]
  },
  {
    "id": "science.chemistry.quantitative.reacting-solutions",
    "title": "Concentrations from reacting volumes",
    "short": "Use the reaction to find the unknown",
    "refs": [
      "3.4"
    ],
    "separate": true,
    "higher": true,
    "minutes": 25,
    "widget": "volume-reacting-solutions",
    "prerequisites": [
      "science.chemistry.quantitative.molar-concentration",
      "science.chemistry.quantitative.reaction-masses"
    ],
    "big": "Known concentration × volume gives known amount. Apply the equation ratio, then divide by the unknown solution volume.",
    "learn": [
      {
        "title": "Find the known amount first.",
        "text": "For HCl + NaOH → NaCl + H₂O, 25.0 cm³ of 0.100 mol/dm³ HCl reacts completely with 20.0 cm³ NaOH solution. Known HCl amount=0.100×0.0250=0.00250 mol. The equation is 1:1, so NaOH amount is also 0.00250 mol.",
        "scene": "volume:reacting-solutions"
      },
      {
        "title": "Use the unknown solution’s own volume.",
        "text": "Unknown NaOH concentration=0.00250÷0.0200=0.125 mol/dm³. The volumes are different because their concentrations differ. Convert both volumes to dm³. Equal reacting amounts do not mean equal concentrations when volumes differ. These values represent a complete reaction at the stated equation ratio.",
        "scene": "volume:reacting-solutions"
      },
      {
        "title": "A different equation needs a different ratio.",
        "text": "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. If 25.0 cm³ NaOH at 0.200 mol/dm³ neutralises 20.0 cm³ acid completely, NaOH amount=0.00500 mol. Acid amount is half this, 0.00250 mol; acid concentration=0.125 mol/dm³. Do not assume every acid–alkali equation is 1:1. Practical titration technique is taught separately.",
        "scene": "volume:reacting-solutions"
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-sol1",
        "prompt": "25 cm³ solution at 0.10 mol/dm³: amount?",
        "options": [],
        "answer": 0.0025,
        "why": "n=cV=0.10×0.025=0.00250 mol.",
        "concept": "quantitative.solution-known",
        "type": "number",
        "unit": "mol",
        "tolerance": 1e-05
      },
      {
        "id": "quantitative.p-sol2",
        "prompt": "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Acid amount that reacts completely with 0.010 mol NaOH?",
        "options": [],
        "answer": 0.005,
        "why": "Acid:base is 1:2, so 0.010÷2=0.005 mol acid.",
        "concept": "quantitative.solution-ratio",
        "type": "number",
        "unit": "mol",
        "tolerance": 1e-05
      },
      {
        "id": "quantitative.p-sol3",
        "prompt": "0.003 mol of unknown solute in 20 cm³. Concentration?",
        "options": [],
        "answer": 0.15,
        "why": "c=0.003÷0.020=0.150 mol/dm³.",
        "concept": "quantitative.solution-unknown",
        "type": "number",
        "unit": "mol/dm³",
        "tolerance": 0.001
      }
    ],
    "check": [
      {
        "id": "quantitative.c-sol1",
        "prompt": "HCl + NaOH → NaCl + H₂O. 20 cm³ HCl at 0.20 mol/dm³ reacts completely with 25 cm³ NaOH. NaOH concentration?",
        "options": [],
        "answer": 0.16,
        "why": "HCl amount 0.004 mol;1:1 gives NaOH 0.004 mol; ÷0.025=0.16 mol/dm³.",
        "concept": "quantitative.solution-unknown",
        "type": "number",
        "unit": "mol/dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-sol2",
        "prompt": "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. 10 cm³ acid at 0.20 mol/dm³ reacts completely with 20 cm³ NaOH. NaOH concentration?",
        "options": [],
        "answer": 0.2,
        "why": "Acid 0.002 mol; base 0.004 mol; ÷0.020=0.20 mol/dm³.",
        "concept": "quantitative.solution-ratio",
        "type": "number",
        "unit": "mol/dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-sol3",
        "prompt": "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. 30 cm³ NaOH at 0.10 mol/dm³ reacts completely with 15 cm³ acid. Acid concentration?",
        "options": [],
        "answer": 0.1,
        "why": "Base 0.003 mol; acid 0.0015 mol; ÷0.015=0.10 mol/dm³.",
        "concept": "quantitative.solution-ratio",
        "type": "number",
        "unit": "mol/dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-sol4",
        "prompt": "Known solution has c=0.50 mol/dm³ and volume 12 cm³. Known amount?",
        "options": [],
        "answer": 0.006,
        "why": "0.50×0.012=0.006 mol.",
        "concept": "quantitative.solution-known",
        "type": "number",
        "unit": "mol",
        "tolerance": 1e-05
      },
      {
        "id": "quantitative.c-sol5",
        "prompt": "For a complete reaction, equal solution volumes imply equal concentrations…",
        "options": [
          "For every equation",
          "Only when the reacting mole ratio is1:1",
          "Even when one reactant is in excess"
        ],
        "answer": 1,
        "why": "The coefficients relate amounts; equal volumes give equal concentrations only for 1:1 reacting amounts.",
        "concept": "quantitative.solution-ratio"
      }
    ],
    "skills": [
      "WS4.2",
      "WS4.3",
      "WS4.6",
      "MS1a",
      "MS1c",
      "MS3b",
      "MS3c"
    ]
  },
  {
    "id": "science.chemistry.quantitative.gas-volumes",
    "title": "Gas volumes at room conditions",
    "short": "Give the gas some space",
    "refs": [
      "3.5"
    ],
    "separate": true,
    "higher": true,
    "minutes": 25,
    "widget": "volume-gas-volumes",
    "prerequisites": [
      "science.chemistry.quantitative.moles",
      "science.chemistry.quantitative.reaction-masses"
    ],
    "big": "At AQA room conditions, V=24n in dm³. Gas-to-gas volume ratios follow equation coefficients only at the same temperature and pressure.",
    "learn": [
      {
        "title": "The same amount takes the same volume.",
        "text": "Equal amounts in mol of gases occupy equal volumes at the same temperature and pressure. AQA uses 24 dm³ per mol at room temperature and pressure:20°C and 1 atmosphere. At these conditions V=24n, so 0.50 mol gas occupies 12 dm³. This relation is for gases, not liquids or solids.",
        "scene": "volume:gas-volumes"
      },
      {
        "title": "Convert mass to amount, then volume.",
        "text": "For 2.2 g CO₂ with Mᵣ44, n=2.2÷44=0.050 mol. At RTP, V=24×0.050=1.20 dm³, or 1200 cm³. Rearrange to n=V/24; if mass is wanted, use m=nMᵣ. The 24 value does not apply at arbitrary temperature and pressure.",
        "scene": "volume:gas-volumes"
      },
      {
        "title": "Gas coefficients give volume ratios.",
        "text": "For N₂(g) + 3H₂(g) → 2NH₃(g), the gaseous volume ratio is 1:3:2 when all volumes are measured at the same temperature and pressure. With N₂ in excess,6 dm³ H₂ can form 4 dm³ NH₃ if conversion is complete. Coefficients are not volume ratios for solids or solutions; actual yields may be lower.",
        "scene": "volume:gas-volumes"
      }
    ],
    "practice": [
      {
        "id": "quantitative.p-gas1",
        "prompt": "Volume of 0.25 mol gas at RTP?",
        "options": [],
        "answer": 6,
        "why": "V=24×0.25=6 dm³.",
        "concept": "quantitative.gas-amount",
        "type": "number",
        "unit": "dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-gas2",
        "prompt": "Volume of 4.4 g CO₂, Mᵣ44, at RTP?",
        "options": [],
        "answer": 2.4,
        "why": "n=4.4÷44=0.1 mol;V=24×0.1=2.4 dm³.",
        "concept": "quantitative.gas-mass",
        "type": "number",
        "unit": "dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.p-gas3",
        "prompt": "N₂(g)+3H₂(g)→2NH₃(g). Excess N₂, complete conversion. NH₃ volume from 9 dm³ H₂ at equal conditions?",
        "options": [],
        "answer": 6,
        "why": "9×2/3=6 dm³.",
        "concept": "quantitative.gas-ratio",
        "type": "number",
        "unit": "dm³",
        "tolerance": 0.001
      }
    ],
    "check": [
      {
        "id": "quantitative.c-gas1",
        "prompt": "Volume of 1.6 g O₂, Mᵣ32, at RTP?",
        "options": [],
        "answer": 1.2,
        "why": "1.6÷32=0.05 mol;×24=1.2 dm³.",
        "concept": "quantitative.gas-mass",
        "type": "number",
        "unit": "dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-gas2",
        "prompt": "Mass CO₂ in 12 dm³ at RTP, Mᵣ44?",
        "options": [],
        "answer": 22,
        "why": "n=12÷24=0.50 mol;mass=0.50×44=22 g.",
        "concept": "quantitative.gas-rearrange",
        "type": "number",
        "unit": "g",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-gas3",
        "prompt": "2CO(g)+O₂(g)→2CO₂(g). Excess O₂, complete conversion. CO₂ volume from 3 dm³ CO at equal conditions?",
        "options": [],
        "answer": 3,
        "why": "CO:CO₂ is 2:2, so volumes are equal.",
        "concept": "quantitative.gas-ratio",
        "type": "number",
        "unit": "dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-gas4",
        "prompt": "N₂(g)+3H₂(g)→2NH₃(g). H₂ volume needed for 8 dm³ NH₃ at equal conditions and complete conversion?",
        "options": [],
        "answer": 12,
        "why": "8×3/2=12 dm³ H₂.",
        "concept": "quantitative.gas-ratio",
        "type": "number",
        "unit": "dm³",
        "tolerance": 0.001
      },
      {
        "id": "quantitative.c-gas5",
        "prompt": "When does AQA use 24 dm³ as one mole of gas volume?",
        "options": [
          "At all temperatures and pressures",
          "At20°C and1 atmosphere pressure",
          "For liquids at20°C"
        ],
        "answer": 1,
        "why": "The molar gas volume 24 dm³/mol is the course RTP value, tied to those conditions.",
        "concept": "quantitative.gas-conditions"
      }
    ],
    "skills": [
      "WS4.2",
      "WS4.3",
      "WS4.6",
      "MS1a",
      "MS1c",
      "MS3b",
      "MS3c"
    ]
  }
];
export const volumeConcepts={"quantitative.molar-amount": "Molar amount", "quantitative.molar-mass": "Molar mass", "quantitative.molar-relationship": "Molar relationship", "quantitative.solution-known": "Solution known", "quantitative.solution-ratio": "Solution ratio", "quantitative.solution-unknown": "Solution unknown", "quantitative.gas-amount": "Gas amount", "quantitative.gas-mass": "Gas mass", "quantitative.gas-ratio": "Gas ratio", "quantitative.gas-rearrange": "Gas rearrange", "quantitative.gas-conditions": "Gas conditions"};
