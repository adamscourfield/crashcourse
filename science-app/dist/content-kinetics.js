export const kineticsLessons=[
  {
    "id": "science.chemistry.rates.graphs-tangents",
    "title": "Rate graphs & tangents",
    "short": "Read the curve, draw the tangent",
    "refs": [
      "6.1.1"
    ],
    "minutes": 30,
    "widget": "kinetics-graphs",
    "prerequisites": [
      "science.chemistry.rates.mean-rate"
    ],
    "big": "The slope shows reaction rate; the plateau shows total product. A tangent follows the curve’s direction at one instant.",
    "higherQuestions": [
      "rates.p-graph4",
      "rates.c-graph7"
    ],
    "learn": [
      {
        "title": "Plot the measured quantity.",
        "text": "Put time on the horizontal axis and quantity on the vertical axis, with units and suitable scales. Plot each reading at its time and draw an appropriate smooth curve for the trend rather than a jagged join of noisy readings. Product formed rises; cumulative reactant used also rises. A graph of reactant remaining instead falls, so read the label carefully.",
        "scene": "kinetics:graphs"
      },
      {
        "title": "Compare slope and endpoint.",
        "text": "For product-versus-time curves, steeper means a faster rate at that moment. The curve usually becomes less steep as reactants are consumed. A horizontal plateau shows no further measured product formation. Two curves can reach the same final amount at different times: one is faster but does not make more product overall.",
        "scene": "kinetics:compare"
      },
      {
        "title": "Turn a line into a tangent.",
        "text": "At the chosen time, draw a straight line matching the curve’s local direction. Extend it either side of that point and compare its steepness. It should not be a chord joining two curve readings and need not pass through the origin. A steeper tangent represents a greater instantaneous rate; a horizontal tangent represents zero rate of measured change.",
        "scene": "kinetics:tangent"
      },
      {
        "title": "Calculate the gradient.",
        "text": "Higher: select two well-separated points on the tangent, which need not be measured curve points. Gradient = change in quantity ÷ change in time. A tangent through(10 s,25 cm³) and(50 s,65 cm³) has gradient40÷40=1 cm³/s. Use both differences. This estimates a rate at the contact point, not the whole-reaction mean.",
        "scene": "kinetics:tangent",
        "higher": true
      }
    ],
    "practice": [
      {
        "id": "rates.p-graph1",
        "prompt": "Two product curves reach the same plateau, but A reaches it sooner. A…",
        "options": [
          "Is faster but gives the same total product",
          "Makes more product necessarily",
          "Has no reaction"
        ],
        "answer": 0,
        "why": "Time to the same quantity differs; plateau is the same.",
        "concept": "rates.graph-reading"
      },
      {
        "id": "rates.p-graph2",
        "prompt": "A tangent should…",
        "options": [
          "Always pass through the origin",
          "Match the curve direction at the chosen point",
          "Join the first and last measurements"
        ],
        "answer": 1,
        "why": "It represents local slope at one instant.",
        "concept": "rates.tangent"
      },
      {
        "id": "rates.p-graph3",
        "prompt": "A flat product-volume curve indicates…",
        "options": [
          "No further measured gas formation",
          "An infinitely fast reaction",
          "Increasing volume at constant rate"
        ],
        "answer": 0,
        "why": "Zero slope means zero measured change per time.",
        "concept": "rates.graph-reading"
      },
      {
        "id": "rates.p-graph4",
        "type": "number",
        "prompt": "Higher: tangent points(5 s,12 cm³) and(25 s,42 cm³). Gradient?",
        "answer": 1.5,
        "tolerance": 0.005,
        "unit": "cm³/s",
        "why": "(42−12)÷(25−5)=1.5.",
        "concept": "rates.tangent-gradient",
        "higher": true
      }
    ],
    "check": [
      {
        "id": "rates.c-graph1",
        "prompt": "Which curve has the greater initial rate?",
        "options": [
          "A",
          "B",
          "Equal"
        ],
        "answer": 0,
        "why": "A has the steeper initial slope.",
        "concept": "rates.graph-reading",
        "figure": {
          "kind": "rate-compare"
        }
      },
      {
        "id": "rates.c-graph2",
        "prompt": "What do the final plateaux show?",
        "options": [
          "A makes twice as much",
          "Both produce the same total volume",
          "B produces no gas"
        ],
        "answer": 1,
        "why": "Both level off at60 cm³.",
        "concept": "rates.graph-reading",
        "figure": {
          "kind": "rate-compare"
        }
      },
      {
        "id": "rates.c-graph3",
        "prompt": "On a product-formed graph, a tangent with zero slope means…",
        "options": [
          "Zero instantaneous measured rate",
          "Maximum reaction speed",
          "A larger total yield"
        ],
        "answer": 0,
        "why": "The quantity is not changing at that instant.",
        "concept": "rates.tangent"
      },
      {
        "id": "rates.c-graph4",
        "prompt": "Which axes correctly represent product formation?",
        "options": [
          "Quantity on x and time on y",
          "Time/s on x and volume/cm³ on y",
          "Temperature on both axes"
        ],
        "answer": 1,
        "why": "The independent time coordinate is horizontal; measured volume vertical.",
        "concept": "rates.graph-reading"
      },
      {
        "id": "rates.c-graph5",
        "prompt": "Why use a tangent rather than total product divided by total time?",
        "options": [
          "It estimates the rate at one chosen instant",
          "It changes the chemical reaction",
          "It always gives final yield"
        ],
        "answer": 0,
        "why": "Whole-run means and local instantaneous rates are different.",
        "concept": "rates.tangent"
      },
      {
        "id": "rates.c-graph6",
        "prompt": "A curve of cumulative reactant used rises then levels off. The plateau means…",
        "options": [
          "Reactant starts being created",
          "No further reactant is being used in the measured process",
          "Rate is rising forever"
        ],
        "answer": 1,
        "why": "The measured cumulative amount used stops changing.",
        "concept": "rates.graph-reading"
      },
      {
        "id": "rates.c-graph7",
        "type": "number",
        "prompt": "Higher: use the two labelled tangent points to calculate the rate at40 s.",
        "answer": 1,
        "tolerance": 0.005,
        "unit": "cm³/s",
        "why": "(80−40)÷(60−20)=1 cm³/s.",
        "concept": "rates.tangent-gradient",
        "figure": {
          "kind": "rate-tangent"
        },
        "higher": true
      }
    ],
    "skills": [
      "MS4a",
      "MS4b",
      "MS4c",
      "MS4d",
      "MS4e",
      "MS1a",
      "MS1c",
      "WS3.5"
    ]
  },
  {
    "id": "science.chemistry.rates.catalysts",
    "title": "Catalysts & activation energy",
    "short": "A different pathway",
    "refs": [
      "6.1.2",
      "6.1.4"
    ],
    "minutes": 25,
    "widget": "kinetics-catalysts",
    "prerequisites": [
      "science.chemistry.rates.collision-theory",
      "science.chemistry.energy.reaction-profiles"
    ],
    "big": "A catalyst speeds a reaction through a pathway with lower activation energy. It is not used up overall and does not change the endpoint energies.",
    "learn": [
      {
        "title": "Lower the barrier.",
        "text": "A catalyst provides a different reaction pathway with lower activation energy. At the same temperature, a larger fraction of collisions can now lead to reaction. The catalyst does not heat every particle or supply the overall reaction energy. In a profile comparison, keep reactant and product levels the same while lowering the peak.",
        "scene": "kinetics:catalyst"
      },
      {
        "title": "Recover the catalyst.",
        "text": "Catalysts affect reaction rate but are not used up overall. They can participate in intermediate steps and be regenerated; they are not reactants in the overall chemical equation. Controlled evidence might show a faster reaction with the same substance recovered afterwards. That supports a catalyst interpretation, rather than a substance being consumed to make more product.",
        "scene": "kinetics:catalyst"
      },
      {
        "title": "Choose the right catalyst.",
        "text": "Different reactions need different catalysts. Enzymes are catalysts in biological systems. A catalyst suitable for one reaction is not guaranteed to help another. With the same limiting reactant fully consumed in the same overall reaction, a catalyst changes how quickly the final amount is reached, not that final amount. Use rate and recovery evidence; this schematic does not replace an experiment.",
        "scene": "kinetics:catalyst"
      }
    ],
    "practice": [
      {
        "id": "rates.p-cat1",
        "prompt": "A catalyst increases rate by…",
        "options": [
          "Lowering activation energy via another pathway",
          "Increasing reactant energy level",
          "Creating more reactant atoms"
        ],
        "answer": 0,
        "why": "It changes the route and barrier.",
        "concept": "rates.catalyst-pathway"
      },
      {
        "id": "rates.p-cat2",
        "prompt": "A catalyst in the overall equation is…",
        "options": [
          "A net consumed reactant",
          "Not a net consumed reactant or product",
          "Always the main product"
        ],
        "answer": 1,
        "why": "It is regenerated overall, even if involved in intermediate steps.",
        "concept": "rates.catalyst-evidence"
      },
      {
        "id": "rates.p-cat3",
        "prompt": "An enzyme is…",
        "options": [
          "A biological catalyst",
          "Always an inert gas",
          "A substance guaranteed to catalyse every reaction"
        ],
        "answer": 0,
        "why": "Enzymes catalyse biological reactions and are specific.",
        "concept": "rates.enzyme"
      }
    ],
    "check": [
      {
        "id": "rates.c-cat1",
        "prompt": "Which change represents catalytic action on a reaction profile?",
        "options": [
          "Lower peak with unchanged endpoints",
          "Lower product level only",
          "Higher reactant level only"
        ],
        "answer": 0,
        "why": "Activation barrier falls while overall energy change stays the same.",
        "concept": "rates.catalyst-pathway",
        "figure": {
          "kind": "catalyst"
        }
      },
      {
        "id": "rates.c-cat2",
        "prompt": "At fixed temperature, a lower activation barrier means…",
        "options": [
          "A larger fraction of collisions can react",
          "Every collision must react",
          "All particles move faster"
        ],
        "answer": 0,
        "why": "More collisions meet the lower threshold; particle energy is not raised by the catalyst.",
        "concept": "rates.catalyst-pathway"
      },
      {
        "id": "rates.c-cat3",
        "prompt": "Controlled trials: substance X speeds a reaction and is recovered unchanged in amount. What is supported?",
        "options": [
          "X is consumed as a fuel",
          "X acts as a catalyst",
          "X creates atoms"
        ],
        "answer": 1,
        "why": "Rate increase with recovery supports catalyst action.",
        "concept": "rates.catalyst-evidence"
      },
      {
        "id": "rates.c-cat4",
        "prompt": "A suitable catalyst and the same limiting reactant are used. Both runs go to complete consumption in the same overall reaction. Final product amount…",
        "options": [
          "Must increase",
          "Stays the same although time can decrease",
          "Must become zero"
        ],
        "answer": 1,
        "why": "Catalyst changes rate, not the fixed complete-consumption stoichiometric yield.",
        "concept": "rates.catalyst-evidence"
      },
      {
        "id": "rates.c-cat5",
        "prompt": "Which statement is correct?",
        "options": [
          "One catalyst works for all reactions",
          "Different reactions may need different catalysts",
          "Enzymes are never catalysts"
        ],
        "answer": 1,
        "why": "Catalysts have reaction specificity, including enzymes.",
        "concept": "rates.enzyme"
      },
      {
        "id": "rates.c-cat6",
        "prompt": "Why is a catalyst omitted as a net reactant in the overall equation?",
        "options": [
          "It is not used up overall",
          "It contains no atoms",
          "It never interacts with particles"
        ],
        "answer": 0,
        "why": "Intermediate involvement cancels when the catalyst is regenerated.",
        "concept": "rates.catalyst-evidence"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS4a",
      "AT5"
    ]
  }
];
export const kineticsConcepts={"rates.graph-reading": "Reading quantity-time graphs", "rates.tangent": "Drawing and interpreting tangents", "rates.tangent-gradient": "Higher tangent-gradient calculation", "rates.catalyst-pathway": "Catalysts and activation pathways", "rates.catalyst-evidence": "Catalyst recovery and rate evidence", "rates.enzyme": "Biological and reaction-specific catalysts"};
