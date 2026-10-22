export const aqueousLessons=[
  {
    "id": "science.chemistry.changes.aqueous-electrolysis",
    "title": "Electrolysis in water",
    "short": "Predict competing electrode products",
    "refs": [
      "4.3.4"
    ],
    "minutes": 25,
    "widget": "aqueous-products",
    "prerequisites": [
      "science.chemistry.changes.molten-electrolysis",
      "science.chemistry.changes.reactivity-series"
    ],
    "big": "Water introduces competing ions. Compare the metal with hydrogen at the cathode; check for halide ions at the anode.",
    "learn": [
      {
        "title": "Water changes the choice.",
        "text": "An aqueous solution contains the dissolved compound’s ions and H⁺ and OH⁻ associated with water. With inert electrodes, more than one ion can be available at each electrode. The aqueous product rules therefore differ from the rule for a molten binary compound.",
        "scene": "aqueous:water"
      },
      {
        "title": "Cathode: metal or hydrogen?",
        "text": "If the dissolved metal is more reactive than hydrogen, hydrogen forms at the negative cathode. If the metal is less reactive than hydrogen, the metal forms. Sodium chloride solution produces H₂, not sodium; copper(II) sulfate solution produces copper.",
        "scene": "aqueous:cathode"
      },
      {
        "title": "Anode: look for a halide.",
        "text": "For the AQA GCSE model, a halide solution produces the halogen at the positive anode: chloride gives Cl₂, bromide gives Br₂ and iodide gives I₂. Without halide ions, oxygen forms from hydroxide ions. Aqueous sodium sulfate therefore gives H₂ and O₂. Assume one dissolved ionic compound and inert electrodes; concentration and electrode material can affect real experiments.",
        "scene": "aqueous:anode"
      }
    ],
    "practice": [
      {
        "id": "changes.p-aq1",
        "prompt": "Why can aqueous sodium chloride produce hydrogen?",
        "options": [
          "Water contributes a competing source of ions",
          "Sodium atoms split into hydrogen",
          "Chloride contains hydrogen"
        ],
        "answer": 0,
        "why": "Water provides hydrogen ions; sodium is more reactive than hydrogen.",
        "concept": "changes.aqueous-water"
      },
      {
        "id": "changes.p-aq2",
        "prompt": "Aqueous copper(II) sulfate, inert electrodes: cathode product?",
        "options": [
          "H₂",
          "Cu",
          "O₂"
        ],
        "answer": 1,
        "why": "Copper is less reactive than hydrogen, so copper is deposited.",
        "concept": "changes.aqueous-cathode"
      },
      {
        "id": "changes.p-aq3",
        "prompt": "Aqueous potassium bromide: anode product in the GCSE model?",
        "options": [
          "K",
          "O₂",
          "Br₂"
        ],
        "answer": 2,
        "why": "Bromide is a halide ion: bromine is the anode product.",
        "concept": "changes.aqueous-anode"
      },
      {
        "id": "changes.p-aq4",
        "prompt": "Aqueous sodium sulfate: which products?",
        "options": [
          "H₂ at cathode; O₂ at anode",
          "Na at cathode; sulfur at anode",
          "O₂ at cathode; H₂ at anode"
        ],
        "answer": 0,
        "why": "Sodium is above hydrogen; sulfate is not a halide.",
        "concept": "changes.aqueous-products"
      }
    ],
    "check": [
      {
        "id": "changes.c-aq1",
        "prompt": "Aqueous potassium chloride is electrolysed using inert electrodes. Which pair is predicted?",
        "options": [
          "K / Cl₂",
          "H₂ / Cl₂",
          "H₂ / O₂"
        ],
        "answer": 1,
        "why": "Potassium is above hydrogen; chloride is a halide. Order: cathode / anode.",
        "concept": "changes.aqueous-products"
      },
      {
        "id": "changes.c-aq2",
        "prompt": "Silver is less reactive than hydrogen. Aqueous silver nitrate, inert electrodes: cathode product?",
        "options": [
          "H₂",
          "O₂",
          "Ag"
        ],
        "answer": 2,
        "why": "A metal below hydrogen is deposited at the cathode.",
        "concept": "changes.aqueous-cathode"
      },
      {
        "id": "changes.c-aq3",
        "prompt": "Aqueous magnesium sulfate, inert electrodes: anode product?",
        "options": [
          "O₂",
          "Mg",
          "H₂"
        ],
        "answer": 0,
        "why": "There is no halide ion, so oxygen forms at the anode.",
        "concept": "changes.aqueous-anode"
      },
      {
        "id": "changes.c-aq4",
        "prompt": "Aqueous sodium iodide, inert electrodes: anode product in the GCSE model?",
        "options": [
          "Na",
          "I₂",
          "O₂"
        ],
        "answer": 1,
        "why": "Iodide ions are halide ions and produce iodine.",
        "concept": "changes.aqueous-anode"
      },
      {
        "id": "changes.c-aq5",
        "prompt": "Why does aqueous sodium chloride give a different cathode product from molten sodium chloride?",
        "options": [
          "The cathode becomes positive",
          "Chlorine moves to the cathode",
          "Water supplies competing ions"
        ],
        "answer": 2,
        "why": "Water introduces a route to hydrogen production.",
        "concept": "changes.aqueous-water"
      },
      {
        "id": "changes.c-aq6",
        "prompt": "Which change could make these simple aqueous predictions unreliable?",
        "options": [
          "Replacing inert electrodes with reactive metal electrodes",
          "Using the same inert electrodes",
          "Keeping the same single dissolved compound"
        ],
        "answer": 0,
        "why": "Reactive electrodes can participate in reactions. The rules assume inert electrodes.",
        "concept": "changes.aqueous-products"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5"
    ]
  },
  {
    "id": "science.chemistry.changes.electrolysis-practical",
    "title": "Investigating aqueous electrolysis",
    "short": "Connect predictions to evidence",
    "refs": [
      "4.3.4"
    ],
    "minutes": 25,
    "widget": "aqueous-practical",
    "prerequisites": [
      "science.chemistry.changes.aqueous-electrolysis"
    ],
    "big": "A prediction becomes useful evidence when the method controls competing explanations and observations identify the products.",
    "learn": [
      {
        "title": "Make a testable prediction.",
        "text": "Compare aqueous copper(II) chloride and copper(II) sulfate with inert electrodes. Predict copper at both cathodes, but chlorine from chloride and oxygen from sulfate at the anodes. Change solution identity; keep concentration, volume, electrode material, immersed area, spacing, supply setting and time consistent. This tests product identity, not equal production rates.",
        "scene": "aqueous:plan"
      },
      {
        "title": "Record evidence at each electrode.",
        "text": "In a teacher-supervised investigation, inert graphite electrodes connect to a low-voltage DC supply without touching. Record observations and product-test results separately for each electrode. Copper makes a reddish-brown deposit. Hydrogen gives a squeaky pop with a lighted splint; oxygen relights a glowing splint; chlorine bleaches damp litmus paper. Bubbles alone do not identify a gas.",
        "scene": "aqueous:evidence"
      },
      {
        "title": "Check the method before the conclusion.",
        "text": "Switch off before changing connections or solutions. Use clean equipment and fresh solutions to reduce contamination, then repeat surprising results. Chlorine requires the school’s risk controls; never identify gases by smelling them. This is preparation for AQA Chemistry required practical 3 / Trilogy practical 9. Completing the simulation does not replace the supervised school investigation.",
        "scene": "aqueous:evaluate"
      }
    ],
    "practice": [
      {
        "id": "changes.p-aqp1",
        "prompt": "What makes a useful hypothesis for this investigation?",
        "options": [
          "The apparatus will look interesting",
          "Changing chloride to sulfate changes the anode gas",
          "The experiment always proves the textbook"
        ],
        "answer": 1,
        "why": "It predicts an observable difference linked to the changed solution.",
        "concept": "changes.electro-hypothesis"
      },
      {
        "id": "changes.p-aqp2",
        "prompt": "Bubbles appear at the anode. What can you conclude from that observation alone?",
        "options": [
          "The gas must be oxygen",
          "The gas must be chlorine",
          "A gas forms; its identity needs a test"
        ],
        "answer": 2,
        "why": "Several electrolysis products are gases. Use an appropriate product test.",
        "concept": "changes.electro-evidence"
      },
      {
        "id": "changes.p-aqp3",
        "prompt": "Why rinse equipment before changing solutions?",
        "options": [
          "To reduce contamination by previous ions",
          "To increase the number of different ions",
          "To reverse electrode polarity"
        ],
        "answer": 0,
        "why": "Residual chloride could affect the next anode product.",
        "concept": "changes.electro-method"
      }
    ],
    "check": [
      {
        "id": "changes.c-aqp1",
        "prompt": "A student compares chloride and sulfate solutions but also changes graphite to copper electrodes. What is the problem?",
        "options": [
          "Copper cannot conduct electricity",
          "Electrode material is another possible cause of changed products",
          "All conditions have been controlled"
        ],
        "answer": 1,
        "why": "Change one intended factor; reactive copper electrodes can alter the chemistry.",
        "concept": "changes.electro-method"
      },
      {
        "id": "changes.c-aqp2",
        "prompt": "Which recorded result supports identifying an anode gas as oxygen?",
        "options": [
          "Bubbles are colourless",
          "A lighted splint gives a pop",
          "A glowing splint relights"
        ],
        "answer": 2,
        "why": "Relighting a glowing splint is the oxygen test; bubbles alone are insufficient.",
        "concept": "changes.electro-evidence"
      },
      {
        "id": "changes.c-aqp3",
        "prompt": "Chlorine is unexpectedly detected after switching from chloride to sulfate. Which response best tests contamination?",
        "options": [
          "Repeat with clean equipment and fresh sulfate solution",
          "Rename the sulfate as chloride without checking",
          "Conclude all sulfates contain chloride"
        ],
        "answer": 0,
        "why": "A controlled repeat investigates residual chloride rather than dismissing the observation.",
        "concept": "changes.electro-method"
      },
      {
        "id": "changes.c-aqp4",
        "prompt": "Which hypothesis can be tested by comparing aqueous copper chloride with copper sulfate?",
        "options": [
          "Every gas has the same test result",
          "The anode product changes while copper forms at both cathodes",
          "Copper forms only when electrodes touch"
        ],
        "answer": 1,
        "why": "The predicted change follows from halide versus non-halide anions.",
        "concept": "changes.electro-hypothesis"
      },
      {
        "id": "changes.c-aqp5",
        "prompt": "A deposit at the negative electrode is reddish-brown. Which interpretation fits copper(II) sulfate electrolysis?",
        "options": [
          "Chlorine forms a metal coating",
          "Sulfate becomes hydrogen",
          "Copper ions form copper metal"
        ],
        "answer": 2,
        "why": "Copper is deposited at the cathode; oxygen is formed at the anode.",
        "concept": "changes.electro-evidence"
      }
    ],
    "skills": [
      "WS2.1",
      "WS2.2",
      "WS2.4",
      "WS3.5"
    ]
  }
];
export const aqueousConcepts={"changes.aqueous-water": "Water and competing ions", "changes.aqueous-cathode": "Aqueous cathode products", "changes.aqueous-anode": "Aqueous anode products", "changes.aqueous-products": "Predicting aqueous electrolysis products", "changes.electro-hypothesis": "Testable electrolysis hypotheses", "changes.electro-evidence": "Electrode observations and product tests", "changes.electro-method": "Controlling and evaluating electrolysis methods"};
