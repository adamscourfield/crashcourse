export const equilibriumLessons=[
  {
    "id": "science.chemistry.rates.reversible-reactions",
    "title": "Reversible reactions & energy",
    "short": "Reversible reactions & energy",
    "refs": [
      "6.2.1",
      "6.2.2"
    ],
    "minutes": 25,
    "widget": "equilibrium-reverse",
    "higher": false,
    "prerequisites": [
      "science.chemistry.energy.energy-transfer"
    ],
    "big": "In a reversible reaction, products can react to regenerate the original reactants. The ⇌ symbol shows that both directions are possible. Changing conditions can favour the observed direction; the symbol does not mean equal amounts or equal rates at every moment.",
    "learn": [
      {
        "title": "Both directions are possible.",
        "text": "In a reversible reaction, products can react to regenerate the original reactants. The ⇌ symbol shows that both directions are possible. Changing conditions can favour the observed direction; the symbol does not mean equal amounts or equal rates at every moment.",
        "scene": "equilibrium:reverse"
      },
      {
        "title": "Follow the observations.",
        "text": "Hydrated copper sulfate is blue. Heating can remove its water to leave white anhydrous copper sulfate; adding water restores the blue hydrated material. Another example is ammonium chloride decomposing on heating into ammonia and hydrogen chloride, which recombine on cooling. These are supervised school demonstrations, not instructions for home experiments.",
        "scene": "equilibrium:reverse"
      },
      {
        "title": "Reverse the energy transfer.",
        "text": "If the forward reaction releases energy, the reverse takes in the same amount for the same quantities and states. Heating hydrated copper sulfate drives an endothermic dehydration; hydration releases energy. If a specified forward change releases40 kJ, the exact reverse absorbs40 kJ, rather than releasing it again. Energy is conserved.",
        "scene": "equilibrium:reverse"
      }
    ],
    "practice": [
      {
        "id": "rates.p-rev1",
        "prompt": "The ⇌ symbol means…",
        "options": [
          "Products can regenerate reactants",
          "Both sides must have equal amounts",
          "Every reaction has stopped"
        ],
        "answer": 0,
        "why": "Reversibility describes the possible directions.",
        "concept": "rates.reversibility"
      },
      {
        "id": "rates.p-rev2",
        "prompt": "An endothermic forward change has a reverse change that is…",
        "options": [
          "Endothermic too",
          "Exothermic",
          "Energy-free"
        ],
        "answer": 1,
        "why": "The reverse transfers the same energy in the opposite direction.",
        "concept": "rates.reverse-energy"
      },
      {
        "id": "rates.p-rev3",
        "type": "number",
        "prompt": "A reaction releases35 kJ. How much does its exact reverse absorb?",
        "answer": 35,
        "tolerance": 0.01,
        "unit": "kJ",
        "why": "Same amount, opposite transfer.",
        "concept": "rates.reverse-energy"
      }
    ],
    "check": [
      {
        "id": "rates.c-rev1",
        "prompt": "Which statement defines a reversible reaction?",
        "options": [
          "Products can react to form original reactants",
          "Reactants disappear without products",
          "Only the forward direction is possible"
        ],
        "answer": 0,
        "why": "Products can regenerate reactants.",
        "concept": "rates.reversibility"
      },
      {
        "id": "rates.c-rev2",
        "prompt": "Heating hydrated copper sulfate gives…",
        "options": [
          "White anhydrous copper sulfate and water",
          "Blue copper metal",
          "No chemical change"
        ],
        "answer": 0,
        "why": "Water is removed from the hydrated material.",
        "concept": "rates.reversibility"
      },
      {
        "id": "rates.c-rev3",
        "prompt": "Adding water to white anhydrous copper sulfate can…",
        "options": [
          "Restore blue hydrated copper sulfate",
          "Destroy copper atoms",
          "Make sodium chloride"
        ],
        "answer": 0,
        "why": "Hydration reverses the dehydration.",
        "concept": "rates.reversibility"
      },
      {
        "id": "rates.c-rev4",
        "type": "number",
        "prompt": "Forward change absorbs52 kJ. Energy released by the exact reverse?",
        "answer": 52,
        "tolerance": 0.01,
        "unit": "kJ",
        "why": "Opposite direction, equal magnitude.",
        "concept": "rates.reverse-energy"
      },
      {
        "id": "rates.c-rev5",
        "prompt": "The ⇌ sign alone proves…",
        "options": [
          "Equal concentrations now",
          "Both reaction directions are possible",
          "Equilibrium has already been reached"
        ],
        "answer": 1,
        "why": "Equilibrium requires equal rates in a closed system; reversibility alone is insufficient.",
        "concept": "rates.reversibility"
      },
      {
        "id": "rates.c-rev6",
        "prompt": "Ammonia and hydrogen chloride can recombine on cooling to form…",
        "options": [
          "Ammonium chloride",
          "Copper sulfate",
          "Hydrogen peroxide"
        ],
        "answer": 0,
        "why": "This reverses ammonium chloride decomposition.",
        "concept": "rates.reversibility"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1c",
      "MS4a"
    ]
  },
  {
    "id": "science.chemistry.rates.dynamic-equilibrium",
    "title": "Dynamic equilibrium",
    "short": "Dynamic equilibrium",
    "refs": [
      "6.2.3"
    ],
    "minutes": 25,
    "widget": "equilibrium-dynamic",
    "higher": false,
    "prerequisites": [
      "science.chemistry.rates.reversible-reactions"
    ],
    "big": "A reversible reaction can reach equilibrium when reactants and products cannot escape. At equilibrium, forward and reverse reactions occur at equal rates. The system must be closed to the substances involved; it can still exchange energy with its surroundings.",
    "learn": [
      {
        "title": "Close the system.",
        "text": "A reversible reaction can reach equilibrium when reactants and products cannot escape. At equilibrium, forward and reverse reactions occur at equal rates. The system must be closed to the substances involved; it can still exchange energy with its surroundings.",
        "scene": "equilibrium:dynamic"
      },
      {
        "title": "Constant amounts, continuing reactions.",
        "text": "Equal forward and reverse rates give no net change in amounts. Particles still react in both directions: equilibrium is dynamic, not stopped. Reactant and product amounts need not be equal. A mixture can have many more product particles while the two reaction rates are equal.",
        "scene": "equilibrium:dynamic"
      },
      {
        "title": "Read the evidence.",
        "text": "Starting with only reactants, the forward rate can initially exceed the reverse rate. As products form, reverse reaction becomes possible. Under unchanged conditions the rates can approach the same value. A constant macroscopic reading supports equilibrium only alongside the reversible, closed-system context; an exhausted irreversible reaction can also stop changing. The particle exchange model is illustrative, not a measured rate law.",
        "scene": "equilibrium:dynamic"
      }
    ],
    "practice": [
      {
        "id": "rates.p-eq1",
        "prompt": "Dynamic equilibrium requires…",
        "options": [
          "A closed reversible system with equal opposing rates",
          "Equal particle counts only",
          "No particle motion"
        ],
        "answer": 0,
        "why": "Rates, not amounts, must match.",
        "concept": "rates.dynamic-equilibrium"
      },
      {
        "id": "rates.p-eq2",
        "prompt": "At equilibrium the reactions…",
        "options": [
          "Stop completely",
          "Continue in both directions",
          "Only go forward"
        ],
        "answer": 1,
        "why": "There is ongoing microscopic change.",
        "concept": "rates.dynamic-equilibrium"
      },
      {
        "id": "rates.p-eq3",
        "prompt": "A closed mixture has20 A and80 B with equal forward/reverse rates. It…",
        "options": [
          "Can be at equilibrium",
          "Cannot because amounts differ",
          "Contains no reactants"
        ],
        "answer": 0,
        "why": "Unequal amounts are compatible with equal rates.",
        "concept": "rates.equilibrium-evidence"
      }
    ],
    "check": [
      {
        "id": "rates.c-eq1",
        "prompt": "Forward rate6 and reverse rate6 under fixed conditions means…",
        "options": [
          "No net amount change",
          "Both amounts must equal6",
          "Both reactions stop"
        ],
        "answer": 0,
        "why": "Equal opposing rates balance.",
        "concept": "rates.dynamic-equilibrium"
      },
      {
        "id": "rates.c-eq2",
        "prompt": "Why must gas reactants/products be retained?",
        "options": [
          "Escape prevents the required closed-system balance",
          "Gases contain no particles",
          "A lid destroys energy"
        ],
        "answer": 0,
        "why": "Loss changes the composition and prevents the intended equilibrium.",
        "concept": "rates.dynamic-equilibrium"
      },
      {
        "id": "rates.c-eq3",
        "prompt": "At dynamic equilibrium, reactant and product concentrations…",
        "options": [
          "Must be equal",
          "Stay constant but may differ",
          "Both fall forever"
        ],
        "answer": 1,
        "why": "Constant concentrations follow balanced rates, not equal concentrations.",
        "concept": "rates.equilibrium-evidence"
      },
      {
        "id": "rates.c-eq4",
        "prompt": "A stable colour by itself proves dynamic equilibrium?",
        "options": [
          "Yes in every system",
          "No: check reversibility and closed-system conditions too",
          "Only if the colour is blue"
        ],
        "answer": 1,
        "why": "Stability can have other causes.",
        "concept": "rates.equilibrium-evidence"
      },
      {
        "id": "rates.c-eq5",
        "prompt": "A closed reversible system initially contains only reactant. Initially the reverse rate is…",
        "options": [
          "Zero until product is present",
          "Always larger than forward rate",
          "Unrelated to product presence"
        ],
        "answer": 0,
        "why": "No product is initially available for the reverse reaction.",
        "concept": "rates.equilibrium-evidence"
      },
      {
        "id": "rates.c-eq6",
        "prompt": "Which model correctly describes equilibrium?",
        "options": [
          "Equal exchanges in each direction with unchanged totals",
          "Every particle frozen",
          "All material converted into product"
        ],
        "answer": 0,
        "why": "Microscopic exchanges continue without net macroscopic change.",
        "concept": "rates.dynamic-equilibrium"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1c",
      "MS4a"
    ]
  },
  {
    "id": "science.chemistry.rates.equilibrium-shifts",
    "title": "Changing equilibrium conditions",
    "short": "Changing equilibrium conditions",
    "refs": [
      "6.2.4",
      "6.2.5",
      "6.2.6",
      "6.2.7"
    ],
    "minutes": 25,
    "widget": "equilibrium-shift",
    "higher": true,
    "prerequisites": [
      "science.chemistry.rates.reversible-reactions"
    ],
    "big": "Higher: Le Chatelier’s principle predicts how an equilibrium composition responds to changed conditions. The system shifts to counteract the imposed change until equilibrium is re-established. Distinguish equilibrium position, which concerns relative amounts, from speed of reaching it.",
    "learn": [
      {
        "title": "Counteract the change.",
        "text": "Higher: Le Chatelier’s principle predicts how an equilibrium composition responds to changed conditions. The system shifts to counteract the imposed change until equilibrium is re-established. Distinguish equilibrium position, which concerns relative amounts, from speed of reaching it.",
        "scene": "equilibrium:shift"
      },
      {
        "title": "Change concentration or temperature.",
        "text": "Adding a reactant favours its consumption, usually shifting toward products. Removing a product favours replacement of that product. Raising temperature favours the endothermic direction; cooling favours the exothermic direction. Use the stated reaction direction and energy information, not a rule that heating always gives more product.",
        "scene": "equilibrium:shift"
      },
      {
        "title": "Count gaseous molecules.",
        "text": "For gaseous equilibria, increasing pressure by compression favours the side with fewer gas molecules; decreasing pressure favours more. Count balanced coefficients, not atoms, and ignore solids/liquids in the gas count. Equal gas counts give no pressure-position shift. For N₂ +3H₂ ⇌2NH₃, higher pressure favours ammonia. The forward reaction is exothermic, so cooling favours equilibrium ammonia yield, although it slows reaction. A catalyst speeds equilibration without changing the equilibrium position.",
        "scene": "equilibrium:shift"
      }
    ],
    "practice": [
      {
        "id": "rates.p-shift1",
        "prompt": "Forward reaction is exothermic. Heating shifts equilibrium…",
        "options": [
          "Forward",
          "Reverse",
          "Always unchanged"
        ],
        "answer": 1,
        "why": "Heating favours the endothermic reverse direction.",
        "concept": "rates.equilibrium-temperature"
      },
      {
        "id": "rates.p-shift2",
        "prompt": "N₂ +3H₂ ⇌2NH₃: higher pressure favours…",
        "options": [
          "NH₃",
          "N₂ and H₂",
          "Neither due to atom conservation"
        ],
        "answer": 0,
        "why": "Four gas molecules on the left versus two on the right.",
        "concept": "rates.equilibrium-pressure"
      },
      {
        "id": "rates.p-shift3",
        "prompt": "Removing a product causes the system to…",
        "options": [
          "Favour replacing some product",
          "Stop all reactions",
          "Create matter"
        ],
        "answer": 0,
        "why": "The response opposes the removal.",
        "concept": "rates.equilibrium-concentration"
      }
    ],
    "check": [
      {
        "id": "rates.c-shift1",
        "prompt": "A + B ⇌ C. Add A at equilibrium. The response favours…",
        "options": [
          "More C formation",
          "Only C decomposition",
          "No possible change"
        ],
        "answer": 0,
        "why": "The added reactant is partly consumed.",
        "concept": "rates.equilibrium-concentration"
      },
      {
        "id": "rates.c-shift2",
        "prompt": "A forward endothermic reaction is heated. Product equilibrium proportion…",
        "options": [
          "Increases",
          "Decreases",
          "Always becomes100%"
        ],
        "answer": 0,
        "why": "The endothermic direction is favoured, not necessarily complete conversion.",
        "concept": "rates.equilibrium-temperature"
      },
      {
        "id": "rates.c-shift3",
        "prompt": "2SO₂(g)+O₂(g) ⇌2SO₃(g). Compression favours…",
        "options": [
          "Left",
          "Right",
          "Neither because atoms balance"
        ],
        "answer": 1,
        "why": "Three gas molecules become two.",
        "concept": "rates.equilibrium-pressure"
      },
      {
        "id": "rates.c-shift4",
        "prompt": "H₂(g)+I₂(g) ⇌2HI(g). Compression at constant temperature…",
        "options": [
          "Gives no equilibrium-position shift from gas counts",
          "Always favours HI",
          "Always favours H₂"
        ],
        "answer": 0,
        "why": "Both sides have two gaseous molecules.",
        "concept": "rates.equilibrium-pressure"
      },
      {
        "id": "rates.c-shift5",
        "prompt": "A catalyst added at fixed equilibrium conditions…",
        "options": [
          "Changes equilibrium yield",
          "Speeds both directions without shifting position",
          "Makes only the forward reaction possible"
        ],
        "answer": 1,
        "why": "It changes the pathway, not equilibrium composition.",
        "concept": "rates.equilibrium-evidence"
      },
      {
        "id": "rates.c-shift6",
        "prompt": "For an exothermic ammonia synthesis, why can lower temperature be impractical despite greater equilibrium yield?",
        "options": [
          "It can make the reaction too slow",
          "It destroys nitrogen atoms",
          "It makes the reaction irreversible"
        ],
        "answer": 0,
        "why": "Rate and equilibrium yield require different reasoning.",
        "concept": "rates.equilibrium-temperature"
      },
      {
        "id": "rates.c-shift7",
        "prompt": "A forward exothermic equilibrium is cooled. The equilibrium response favours…",
        "options": [
          "The forward product-forming direction",
          "The reverse direction",
          "Neither because all rates stop"
        ],
        "answer": 0,
        "why": "Cooling favours the exothermic direction, though reaching equilibrium may be slower.",
        "concept": "rates.equilibrium-temperature"
      },
      {
        "id": "rates.c-shift8",
        "prompt": "2SO₂(g)+O₂(g) ⇌2SO₃(g). Pressure decreases at constant temperature. The equilibrium shifts…",
        "options": [
          "Right, toward fewer gas molecules",
          "Left, toward more gas molecules",
          "No change because atoms balance"
        ],
        "answer": 1,
        "why": "Lower pressure favours the side with more gas molecules: three on the left versus two on the right.",
        "concept": "rates.equilibrium-pressure"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1c",
      "MS4a"
    ]
  }
];
export const equilibriumConcepts={"rates.reversibility": "Reversible changes and observations", "rates.reverse-energy": "Energy changes in reverse reactions", "rates.dynamic-equilibrium": "Dynamic closed-system equilibrium", "rates.equilibrium-evidence": "Equal rates versus constant amounts", "rates.equilibrium-temperature": "Temperature and equilibrium position", "rates.equilibrium-pressure": "Gas pressure and equilibrium position", "rates.equilibrium-concentration": "Concentration and equilibrium response"};
