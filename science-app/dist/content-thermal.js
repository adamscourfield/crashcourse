export const thermalLessons=[
  {
    "id": "science.chemistry.energy.temperature-practical",
    "title": "Investigating temperature changes",
    "short": "Plan, measure and evaluate",
    "refs": [
      "5.1.1"
    ],
    "minutes": 30,
    "widget": "thermal-practical",
    "prerequisites": [
      "science.chemistry.energy.energy-transfer"
    ],
    "big": "A fair temperature comparison changes one intended variable and controls other factors. Use temperature change and repeated evidence, not just the hottest reading.",
    "learn": [
      {
        "title": "Measure the change.",
        "text": "For a supervised neutralisation investigation, use an insulated polystyrene cup supported in a beaker, a lid, measuring equipment and a thermometer or probe. Record initial temperatures, mix as directed, stir gently and record the maximum for warming or minimum for cooling. Wear eye protection and follow the school’s instructions for acids and alkalis. Temperature change is the final extreme minus the starting temperature.",
        "scene": "thermal:apparatus"
      },
      {
        "title": "Change one factor.",
        "text": "This investigation compares acid concentration. Use fresh solutions for each trial and keep the acid volume, total liquid volume, initial temperature, alkali concentration and amount, cup insulation and measurement method consistent. Use sufficient alkali throughout the chosen concentration range. Plot temperature rise against acid concentration; do not change the liquid volume at the same time.",
        "scene": "thermal:data"
      },
      {
        "title": "Test the explanation.",
        "text": "Repeat each condition and investigate unusual results rather than automatically deleting them. Heat exchange with the room and energy transferred to the cup can reduce an observed rise. A lid and better insulation reduce heat loss, but do not prove an exact energy value. AQA Chemistry practical 4 / Trilogy practical 10 can investigate acid–metal, acid–carbonate, neutralisation or displacement reactions. This activity prepares reasoning and does not replace the school practical.",
        "scene": "thermal:evaluate"
      }
    ],
    "practice": [
      {
        "id": "energy.p-temp1",
        "prompt": "When comparing acid concentration, which should stay constant?",
        "options": [
          "Total liquid volume",
          "Acid concentration",
          "The recorded temperature rise"
        ],
        "answer": 0,
        "why": "Total liquid volume influences heating and must not change alongside concentration.",
        "concept": "energy.temp-controls"
      },
      {
        "id": "energy.p-temp2",
        "type": "number",
        "prompt": "A trial starts at 19.5°C and reaches 27.2°C. Temperature rise?",
        "answer": 7.7,
        "tolerance": 0.01,
        "unit": "°C",
        "why": "27.2 − 19.5 = 7.7°C.",
        "concept": "energy.temp-data"
      },
      {
        "id": "energy.p-temp3",
        "prompt": "One repeat is much higher than the other two. Best next step?",
        "options": [
          "Delete it without checking",
          "Investigate the method and repeat the condition",
          "Assume the other two must be wrong"
        ],
        "answer": 1,
        "why": "A surprising result needs investigation; disagreement alone does not identify its cause.",
        "concept": "energy.temp-evaluation"
      }
    ],
    "check": [
      {
        "id": "energy.c-temp1",
        "prompt": "To test the effect of acid concentration, the independent variable is…",
        "options": [
          "Maximum temperature",
          "Cup material",
          "Acid concentration"
        ],
        "answer": 2,
        "why": "Concentration is the factor deliberately changed.",
        "concept": "energy.temp-controls"
      },
      {
        "id": "energy.c-temp2",
        "prompt": "Why compare temperature rises rather than maximum readings alone?",
        "options": [
          "Starting temperatures may differ",
          "The maximum never matters",
          "It removes all heat loss"
        ],
        "answer": 0,
        "why": "A rise compares each extreme with its own starting temperature; initial conditions should still be controlled.",
        "concept": "energy.temp-data"
      },
      {
        "id": "energy.c-temp3",
        "type": "number",
        "prompt": "Initial 21.4°C; maximum 30.0°C. Temperature rise?",
        "answer": 8.6,
        "tolerance": 0.01,
        "unit": "°C",
        "why": "30.0 − 21.4 = 8.6°C.",
        "concept": "energy.temp-data"
      },
      {
        "id": "energy.c-temp4",
        "prompt": "Which improvement reduces heat loss during a warming reaction?",
        "options": [
          "Remove the lid",
          "Use an insulated cup with a lid",
          "Stir only after the reading is finished"
        ],
        "answer": 1,
        "why": "Insulation and a lid reduce transfer to the wider surroundings.",
        "concept": "energy.temp-evaluation"
      },
      {
        "id": "energy.c-temp5",
        "prompt": "Readings for three concentrations, under controlled conditions: 0.25 mol/dm³ gives +3.0°C, 0.50 gives +6.1°C, 0.75 gives +9.0°C. What does this dataset support?",
        "options": [
          "The same rise at every concentration",
          "Exactly this trend for every possible reaction",
          "Greater concentration gives a greater rise over this tested range"
        ],
        "answer": 2,
        "why": "The conclusion is limited to the tested reaction and range.",
        "concept": "energy.temp-data"
      },
      {
        "id": "energy.c-temp6",
        "prompt": "Repeats give rises of 8.0, 8.2 and 14.0°C. Which evaluation is justified?",
        "options": [
          "The disagreement needs a method check and further repeat",
          "14.0°C proves the reaction changed identity",
          "The average must be exact"
        ],
        "answer": 0,
        "why": "Check measurements, starting conditions and contamination before explaining the anomaly.",
        "concept": "energy.temp-evaluation"
      }
    ],
    "skills": [
      "WS2.1",
      "WS2.2",
      "WS2.4",
      "WS3.4",
      "WS3.5",
      "MS4a",
      "MS4c",
      "AT1",
      "AT3",
      "AT5",
      "AT6"
    ]
  },
  {
    "id": "science.chemistry.energy.bond-energies",
    "title": "Calculating bond-energy changes",
    "short": "Count bonds, then balance the energy",
    "refs": [
      "5.1.3"
    ],
    "minutes": 30,
    "widget": "thermal-bonds",
    "higher": true,
    "prerequisites": [
      "science.chemistry.energy.reaction-profiles",
      "science.chemistry.bonding.covalent-single"
    ],
    "big": "Breaking bonds takes energy; forming bonds releases it. Overall change = energy taken in to break bonds − energy released by forming bonds.",
    "learn": [
      {
        "title": "Separate the two processes.",
        "text": "Energy must be supplied to break bonds in the reactants. Energy is released when bonds form in the products. Do not say breaking a bond releases energy. The overall change compares both totals; it is different from the activation energy needed to start a reaction.",
        "scene": "thermal:bonds"
      },
      {
        "title": "Build an energy account.",
        "text": "For H₂ + Cl₂ → 2HCl, supplied bond energies are H–H 436, Cl–Cl 242 and H–Cl 431 kJ/mol. Break one H–H and one Cl–Cl: 436 + 242 = 678. Form two H–Cl bonds: 2 × 431 = 862. Overall change = 678 − 862 = −184 kJ/mol for the reaction as written. More energy is released than taken in, so it is exothermic.",
        "scene": "thermal:bonds"
      },
      {
        "title": "Count every molecule’s bonds.",
        "text": "Coefficients multiply entire molecules. N₂ + 3H₂ → 2NH₃ breaks one N≡N and three H–H bonds, then forms six N–H bonds: each NH₃ contains three. For 2H₂ + O₂ → 2H₂O, four O–H bonds form, not two. Keep molecular subscripts, bond order and equation coefficients distinct.",
        "scene": "thermal:bonds"
      },
      {
        "title": "Interpret the sign and limits.",
        "text": "Broken minus formed is negative for an exothermic reaction and positive for an endothermic reaction. If breaking requires more than formation releases, energy is taken in overall. Supplied mean bond energies give approximate values for gaseous species; they do not describe a one-step mechanism, include phase changes or predict an exact solution temperature. Use the equation and data supplied.",
        "scene": "thermal:bonds"
      }
    ],
    "practice": [
      {
        "id": "energy.p-bond1",
        "prompt": "Breaking a chemical bond…",
        "options": [
          "Takes in energy",
          "Releases energy",
          "Always has zero energy cost"
        ],
        "answer": 0,
        "why": "Energy is needed to separate bonded atoms.",
        "concept": "energy.bond-direction"
      },
      {
        "id": "energy.p-bond2",
        "type": "number",
        "prompt": "H₂ + Br₂ → 2HBr. Bond energies: H–H 436, Br–Br 193, H–Br 366 kJ/mol. Overall change for the equation?",
        "answer": -103,
        "tolerance": 0.1,
        "unit": "kJ/mol",
        "why": "Broken = 629; formed = 732; 629 − 732 = −103 kJ/mol.",
        "concept": "energy.bond-calculation"
      },
      {
        "id": "energy.p-bond3",
        "type": "number",
        "prompt": "2H₂ + O₂ → 2H₂O(g). H–H 436, O=O 498, O–H 464 kJ/mol. Overall change?",
        "answer": -486,
        "tolerance": 0.1,
        "unit": "kJ/mol",
        "why": "Break 2×436 + 498 = 1370. Form 4×464 = 1856. Difference −486.",
        "concept": "energy.bond-counts"
      },
      {
        "id": "energy.p-bond4",
        "prompt": "An endothermic energy account has…",
        "options": [
          "Formation releasing more than breaking takes in",
          "Breaking taking in more than formation releases",
          "No bonds forming"
        ],
        "answer": 1,
        "why": "The positive difference must be supplied overall.",
        "concept": "energy.bond-direction"
      }
    ],
    "check": [
      {
        "id": "energy.c-bond1",
        "prompt": "When product bonds form, energy is…",
        "options": [
          "Always destroyed",
          "Always taken in",
          "Released"
        ],
        "answer": 2,
        "why": "Bond formation releases energy.",
        "concept": "energy.bond-direction"
      },
      {
        "id": "energy.c-bond2",
        "type": "number",
        "prompt": "H₂ + F₂ → 2HF. H–H 436, F–F 158, H–F 562 kJ/mol. Calculate the overall change.",
        "answer": -530,
        "tolerance": 0.1,
        "unit": "kJ/mol",
        "why": "Broken = 594; formed = 1124; 594 − 1124 = −530.",
        "concept": "energy.bond-calculation"
      },
      {
        "id": "energy.c-bond3",
        "type": "number",
        "prompt": "CH₄ + 2O₂ → CO₂ + 2H₂O(g). How many C–H bonds are broken per reaction as written?",
        "answer": 4,
        "tolerance": 0,
        "unit": "bonds",
        "why": "One methane molecule contains four C–H bonds.",
        "concept": "energy.bond-counts"
      },
      {
        "id": "energy.c-bond4",
        "type": "number",
        "prompt": "2HCl → H₂ + Cl₂. H–Cl 431, H–H 436, Cl–Cl 242 kJ/mol. Overall change?",
        "answer": 184,
        "tolerance": 0.1,
        "unit": "kJ/mol",
        "why": "Break 862; form 678; 862 − 678 = +184, endothermic.",
        "concept": "energy.bond-calculation"
      },
      {
        "id": "energy.c-bond5",
        "prompt": "Broken bonds require 1500 kJ; forming bonds releases 1200 kJ. The reaction is…",
        "options": [
          "Endothermic",
          "Exothermic",
          "Neither"
        ],
        "answer": 0,
        "why": "The +300 kJ difference is taken in overall.",
        "concept": "energy.bond-direction"
      },
      {
        "id": "energy.c-bond6",
        "type": "number",
        "prompt": "CH₄ + 2O₂ → CO₂ + 2H₂O(g). Bond energies: C–H 413, O=O 498, C=O in CO₂ 805, O–H 464 kJ/mol. Overall change?",
        "answer": -818,
        "tolerance": 0.1,
        "unit": "kJ/mol",
        "why": "Broken = 4×413 + 2×498 = 2648. Formed = 2×805 + 4×464 = 3466. Difference −818.",
        "concept": "energy.bond-counts"
      },
      {
        "id": "energy.c-bond7",
        "prompt": "Why can a mean-bond-energy prediction differ from an experimental value?",
        "options": [
          "Energy is not conserved",
          "Average bond values approximate different molecular environments",
          "Bond formation takes no energy"
        ],
        "answer": 1,
        "why": "Mean values and physical-state assumptions limit the estimate.",
        "concept": "energy.bond-calculation"
      }
    ],
    "skills": [
      "WS1.2",
      "WS4.1",
      "WS4.2",
      "MS1a"
    ]
  }
];
export const thermalConcepts={"energy.temp-controls": "Temperature investigation variables", "energy.temp-data": "Interpreting temperature measurements", "energy.temp-evaluation": "Evaluating temperature investigations", "energy.bond-direction": "Energy in breaking and forming bonds", "energy.bond-counts": "Counting bonds in balanced reactions", "energy.bond-calculation": "Calculating overall bond-energy change"};
