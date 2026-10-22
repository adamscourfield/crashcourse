export const energyLessons=[
  {
    "id": "science.chemistry.energy.energy-transfer",
    "title": "Exothermic & endothermic reactions",
    "short": "Follow the energy transfer",
    "refs": [
      "5.1.1"
    ],
    "minutes": 25,
    "widget": "energy-transfer",
    "prerequisites": [
      "science.chemistry.changes.neutralisation-salts"
    ],
    "big": "Exothermic reactions transfer energy to their surroundings; endothermic reactions take energy from them. Energy is conserved.",
    "learn": [
      {
        "title": "Choose a boundary.",
        "text": "Treat the reacting particles as the system. The solution, water or apparatus around them can act as surroundings. Energy is conserved: energy lost by one part is transferred to another, not destroyed. A thermometer reading describes the measured material; it is not a direct measure of the energy stored in the products.",
        "scene": "energy:transfer"
      },
      {
        "title": "Warmer surroundings: exothermic.",
        "text": "An exothermic reaction transfers energy to its surroundings, raising their temperature. Products have less stored energy than reactants by the amount transferred. Combustion, many oxidation reactions and neutralisation are examples. Hand warmers and self-heating cans use this transfer to warm another material.",
        "scene": "energy:exo"
      },
      {
        "title": "Cooler surroundings: endothermic.",
        "text": "An endothermic reaction takes energy from its surroundings, lowering their temperature. Thermal decomposition and citric acid reacting with sodium hydrogencarbonate are examples. Some sports cold packs use endothermic reactions. When choosing a use, compare supplied temperatures, duration and handling requirements; the biggest temperature change is not always the best choice.",
        "scene": "energy:endo"
      }
    ],
    "practice": [
      {
        "id": "energy.p-transfer1",
        "prompt": "A solution warms during neutralisation. The reaction is…",
        "options": [
          "Exothermic",
          "Endothermic",
          "Neither: no energy moves"
        ],
        "answer": 0,
        "why": "Energy is transferred to the measured surroundings.",
        "concept": "energy.transfer-direction"
      },
      {
        "id": "energy.p-transfer2",
        "prompt": "A cold pack cools its surroundings because the reaction…",
        "options": [
          "Destroys thermal energy",
          "Takes energy from the surroundings",
          "Transfers energy to the surroundings"
        ],
        "answer": 1,
        "why": "Energy goes into the reacting system; it is conserved.",
        "concept": "energy.conservation"
      },
      {
        "id": "energy.p-transfer3",
        "type": "number",
        "prompt": "Surroundings change from 23°C to 17°C. Enter final minus initial temperature.",
        "answer": -6,
        "tolerance": 0.01,
        "unit": "°C",
        "why": "17 − 23 = −6°C. The fall is consistent with an endothermic reaction.",
        "concept": "energy.temperature"
      }
    ],
    "check": [
      {
        "id": "energy.c-transfer1",
        "prompt": "The measured surroundings cool during a reaction. Which account fits?",
        "options": [
          "Energy moves from reaction to surroundings",
          "Energy disappears",
          "Energy moves from surroundings to reaction"
        ],
        "answer": 2,
        "why": "Taking energy from surroundings is endothermic.",
        "concept": "energy.transfer-direction"
      },
      {
        "id": "energy.c-transfer2",
        "prompt": "During an exothermic reaction, energy lost by the reacting system…",
        "options": [
          "Is transferred to the surroundings",
          "Is destroyed",
          "Must turn into new atoms"
        ],
        "answer": 0,
        "why": "Energy is conserved during chemical changes.",
        "concept": "energy.conservation"
      },
      {
        "id": "energy.c-transfer3",
        "prompt": "Which is a specified exothermic example?",
        "options": [
          "Thermal decomposition",
          "Combustion",
          "Citric acid with sodium hydrogencarbonate"
        ],
        "answer": 1,
        "why": "Combustion transfers energy to its surroundings.",
        "concept": "energy.examples"
      },
      {
        "id": "energy.c-transfer4",
        "prompt": "Citric acid reacts with sodium hydrogencarbonate and the mixture cools. This is…",
        "options": [
          "Exothermic",
          "Evidence of no reaction",
          "Endothermic"
        ],
        "answer": 2,
        "why": "This specified reaction takes energy from its surroundings.",
        "concept": "energy.examples"
      },
      {
        "id": "energy.c-transfer5",
        "prompt": "A hand warmer must stay at 35–45°C for at least 20 min. Supplied data: A reaches 40°C for 30 min; B reaches 70°C for 5 min. Which fits both criteria?",
        "options": [
          "A",
          "B",
          "Both"
        ],
        "answer": 0,
        "why": "A satisfies both the given temperature and duration limits; B satisfies neither.",
        "concept": "energy.applications"
      },
      {
        "id": "energy.c-transfer6",
        "type": "number",
        "prompt": "Surroundings initially 28°C reach 21°C. Enter final minus initial temperature.",
        "answer": -7,
        "tolerance": 0.01,
        "unit": "°C",
        "why": "21 − 28 = −7°C. A signed change distinguishes cooling from warming.",
        "concept": "energy.temperature"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS4a",
      "AT5"
    ]
  },
  {
    "id": "science.chemistry.energy.reaction-profiles",
    "title": "Building reaction profiles",
    "short": "Read the route from reactants to products",
    "refs": [
      "5.1.2"
    ],
    "minutes": 25,
    "widget": "energy-profiles",
    "prerequisites": [
      "science.chemistry.energy.energy-transfer"
    ],
    "big": "A reaction profile shows relative energy levels along a reaction path. Activation energy is measured from the reactants to the peak.",
    "learn": [
      {
        "title": "Reactions need a start.",
        "text": "Reacting particles must collide with enough energy. The minimum needed is the activation energy. A reaction can release energy overall and still need energy to get started: a fuel may need ignition even though burning is exothermic.",
        "scene": "energy:profile-exo"
      },
      {
        "title": "Draw the path.",
        "text": "Put energy on the vertical axis and reaction progress on the horizontal axis. Mark the reactant and product levels, then draw a curved path rising above both to a peak. Lower products indicate an exothermic reaction; higher products indicate an endothermic reaction. Reaction progress is not a time axis.",
        "scene": "energy:profile-endo"
      },
      {
        "title": "Two different comparisons.",
        "text": "Activation energy runs from the reactant level to the peak. The overall energy change compares the reactant and product levels. Changing the peak while keeping both endpoints fixed changes the activation barrier, not the overall transfer. The diagrams use relative levels; no numerical reaction-energy calculation is needed in this lesson.",
        "scene": "energy:profile-exo"
      }
    ],
    "practice": [
      {
        "id": "energy.p-profile1",
        "prompt": "In the shown profile, the reaction is…",
        "options": [
          "Endothermic",
          "Exothermic",
          "Impossible because it has a peak"
        ],
        "answer": 1,
        "why": "The products are lower than the reactants.",
        "concept": "energy.profiles",
        "figure": {
          "reactants": 40,
          "products": 25,
          "peak": 90
        }
      },
      {
        "id": "energy.p-profile2",
        "prompt": "Which comparison gives the activation energy?",
        "options": [
          "Products to reactants",
          "Products to zero",
          "Reactants to peak"
        ],
        "answer": 2,
        "why": "Use the reactant energy level as the starting point.",
        "concept": "energy.activation"
      },
      {
        "id": "energy.p-profile3",
        "prompt": "The horizontal axis on a reaction profile is…",
        "options": [
          "Reaction progress",
          "Elapsed time",
          "Thermometer temperature"
        ],
        "answer": 0,
        "why": "The path represents reaction progress, not a measured time trace.",
        "concept": "energy.profile-axes"
      }
    ],
    "check": [
      {
        "id": "energy.c-profile1",
        "prompt": "Classify the reaction shown.",
        "options": [
          "Exothermic",
          "Endothermic",
          "No energy transfer"
        ],
        "answer": 1,
        "why": "Products are at a higher relative energy than reactants.",
        "concept": "energy.profiles",
        "figure": {
          "reactants": 30,
          "products": 60,
          "peak": 95
        }
      },
      {
        "id": "energy.c-profile2",
        "prompt": "Which labelled arrow represents activation energy?",
        "options": [
          "B",
          "Neither",
          "A"
        ],
        "answer": 2,
        "why": "A runs from the reactant level to the peak.",
        "concept": "energy.activation",
        "figure": {
          "reactants": 40,
          "products": 25,
          "peak": 90
        }
      },
      {
        "id": "energy.c-profile3",
        "prompt": "Which feature must appear in a simple reaction profile?",
        "options": [
          "A curved path with a peak above both endpoint levels",
          "A flat line with no barrier",
          "A horizontal axis labelled temperature"
        ],
        "answer": 0,
        "why": "The curved path rises to an activation barrier.",
        "concept": "energy.profiles"
      },
      {
        "id": "energy.c-profile4",
        "prompt": "A new pathway has a lower peak but the same reactant and product levels. What changes?",
        "options": [
          "Overall energy transfer only",
          "Activation energy only",
          "Both endpoint energy levels"
        ],
        "answer": 1,
        "why": "A lower peak changes the barrier; fixed endpoints preserve the overall energy change.",
        "concept": "energy.activation"
      },
      {
        "id": "energy.c-profile5",
        "prompt": "Why can an exothermic fuel reaction need ignition?",
        "options": [
          "Energy conservation stops combustion",
          "Products must have higher energy",
          "An activation barrier must be overcome"
        ],
        "answer": 2,
        "why": "Exothermic describes the overall transfer, not a zero starting barrier.",
        "concept": "energy.activation"
      },
      {
        "id": "energy.c-profile6",
        "prompt": "What does the horizontal axis represent?",
        "options": [
          "Reaction progress",
          "Seconds",
          "Energy transferred per second"
        ],
        "answer": 0,
        "why": "A reaction profile is not a temperature/time graph.",
        "concept": "energy.profile-axes",
        "figure": {
          "reactants": 50,
          "products": 20,
          "peak": 90
        }
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS4a",
      "MS4c"
    ]
  }
];
export const energyConcepts={"energy.transfer-direction": "Exothermic and endothermic transfer", "energy.conservation": "Conservation of energy", "energy.temperature": "Signed temperature changes", "energy.examples": "Reaction energy examples", "energy.applications": "Evaluating heating and cooling uses", "energy.profiles": "Relative energy in reaction profiles", "energy.activation": "Activation energy and overall transfer", "energy.profile-axes": "Reaction-profile axes"};
