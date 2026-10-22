export const electroLessons=[
  {
    "id": "science.chemistry.changes.electrolysis-process",
    "title": "Electrolysis: ions on the move",
    "short": "Connect movement, charge and conduction",
    "refs": [
      "4.3.1"
    ],
    "minutes": 25,
    "widget": "electro-process",
    "prerequisites": [
      "science.chemistry.bonding.ionic-bonding"
    ],
    "big": "An electrolyte conducts because its ions can move. Oppositely charged electrodes attract the ions and discharge them to form elements.",
    "learn": [
      {
        "title": "Free the ions.",
        "text": "An ionic solid contains charged ions, but they are held in fixed positions and cannot carry charge through the solid. When the compound is molten or dissolved in water, its ions can move. An electrolyte is a liquid or solution that conducts electricity and is decomposed during electrolysis.",
        "scene": "electro:process"
      },
      {
        "title": "Opposite charges attract.",
        "text": "A direct-current power supply makes the cathode negative and the anode positive. Positive ions (cations) move to the negative cathode; negative ions (anions) move to the positive anode. Electrons carry charge through the wires; ions carry charge through the electrolyte. Electrons do not travel through the electrolyte from electrode to electrode.",
        "scene": "electro:process"
      },
      {
        "title": "Discharge produces elements.",
        "text": "At the electrodes, ions lose their charge and form atoms or molecules of elements. This is discharge. Passing current through the electrolyte to decompose it is electrolysis. Molten and aqueous electrolytes can give different products: water introduces additional possible products, which a later lesson will explain.",
        "scene": "electro:process"
      }
    ],
    "practice": [
      {
        "id": "changes.p-el1",
        "prompt": "Why does solid sodium chloride fail to conduct?",
        "options": [
          "Its ions cannot move through the solid",
          "It has no charged particles",
          "Its electrons flow too quickly"
        ],
        "answer": 0,
        "why": "The ions are charged but held in fixed positions.",
        "concept": "changes.electro-mobility"
      },
      {
        "id": "changes.p-el2",
        "prompt": "Where does a positive ion move?",
        "options": [
          "Negative cathode",
          "Positive anode",
          "Either electrode at random"
        ],
        "answer": 0,
        "why": "Opposite charges attract.",
        "concept": "changes.electro-direction"
      },
      {
        "id": "changes.p-el3",
        "prompt": "What carries charge through a molten electrolyte?",
        "options": [
          "Moving ions",
          "Electrons flowing through the liquid",
          "Neutral molecules only"
        ],
        "answer": 0,
        "why": "Ions move in the electrolyte; electrons move through the external circuit.",
        "concept": "changes.electro-mobility"
      }
    ],
    "check": [
      {
        "id": "changes.c-el1",
        "prompt": "Which sample can act as an electrolyte?",
        "options": [
          "Molten sodium chloride",
          "Solid sodium chloride",
          "Pure solid sugar"
        ],
        "answer": 0,
        "why": "Molten sodium chloride contains mobile ions.",
        "concept": "changes.electro-mobility"
      },
      {
        "id": "changes.c-el2",
        "prompt": "A chloride ion is negative. Which electrode attracts it?",
        "options": [
          "Positive anode",
          "Negative cathode",
          "Neither"
        ],
        "answer": 0,
        "why": "Negative ions are attracted to the positive anode.",
        "concept": "changes.electro-direction"
      },
      {
        "id": "changes.c-el3",
        "prompt": "What is the charge of the cathode in electrolysis?",
        "options": [
          "Negative",
          "Positive",
          "Always neutral"
        ],
        "answer": 0,
        "why": "The supply connects the cathode to its negative terminal.",
        "concept": "changes.electro-direction"
      },
      {
        "id": "changes.c-el4",
        "prompt": "Which statement distinguishes the charge carriers?",
        "options": [
          "Ions in electrolyte; electrons in wires",
          "Electrons in electrolyte; ions in wires",
          "Only protons move everywhere"
        ],
        "answer": 0,
        "why": "Different parts of the circuit have different mobile charge carriers.",
        "concept": "changes.electro-mobility"
      },
      {
        "id": "changes.c-el5",
        "prompt": "During electrolysis, discharge at an electrode means…",
        "options": [
          "Ions lose their charge and form elements",
          "The power supply always switches off",
          "The ions become more charged"
        ],
        "answer": 0,
        "why": "Ions form neutral atoms or molecules at electrodes.",
        "concept": "changes.electro-direction"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5"
    ]
  },
  {
    "id": "science.chemistry.changes.molten-electrolysis",
    "title": "Predicting molten electrolysis products",
    "short": "One compound, two electrode products",
    "refs": [
      "4.3.2",
      "4.3.1"
    ],
    "minutes": 25,
    "widget": "electro-molten",
    "prerequisites": [
      "science.chemistry.changes.electrolysis-process"
    ],
    "higherQuestions": [
      "changes.p-meltHT",
      "changes.c-meltHT"
    ],
    "big": "For a molten binary ionic compound with inert electrodes, the metal forms at the cathode and the non-metal at the anode.",
    "learn": [
      {
        "title": "Start with the ions.",
        "text": "A binary compound contains two elements. Molten lead bromide contains Pb²⁺ and Br⁻ ions. With inert electrodes, Pb²⁺ moves to the cathode and produces lead, Pb. Br⁻ moves to the anode and produces bromine, Br₂. The subscript 2 matters: bromine is diatomic.",
        "scene": "electro:molten"
      },
      {
        "title": "Predict both products.",
        "text": "For these simple molten binary compounds, the metal is produced at the negative cathode and the non-metal at the positive anode. Molten sodium chloride produces Na and Cl₂; molten magnesium chloride produces Mg and Cl₂. Do not apply this rule unchanged to aqueous solutions.",
        "scene": "electro:molten"
      },
      {
        "title": "State the model’s limits.",
        "text": "The diagrams show ion direction and product identity, not actual ion paths, scale, melting temperatures, production rates or gas volumes. The power supply transfers energy. These are symbolic prediction activities, not instructions to melt salts or collect products; they do not fulfil the required school electrolysis practical.",
        "scene": "electro:molten"
      },
      {
        "title": "Higher: account for atoms and charge.",
        "text": "At the cathode: Mg²⁺ + 2e⁻ → Mg. Gaining electrons is reduction. At the anode: 2Cl⁻ → Cl₂ + 2e⁻. Losing electrons is oxidation. Both atoms and total charge balance: the chlorine equation has −2 charge on each side. Two chloride ions are needed to form one Cl₂ molecule.",
        "scene": "electro:molten",
        "higher": true
      }
    ],
    "practice": [
      {
        "id": "changes.p-melt1",
        "prompt": "Molten lead bromide: cathode product?",
        "options": [
          "Pb",
          "Br₂",
          "PbBr₂"
        ],
        "answer": 0,
        "why": "Positive lead ions produce lead at the negative cathode.",
        "concept": "changes.electro-products"
      },
      {
        "id": "changes.p-melt2",
        "prompt": "Molten sodium chloride: anode product?",
        "options": [
          "Cl₂",
          "Na",
          "NaCl"
        ],
        "answer": 0,
        "why": "Chloride ions produce diatomic chlorine at the positive anode.",
        "concept": "changes.electro-products"
      },
      {
        "id": "changes.p-melt3",
        "prompt": "Can this simple product rule be used unchanged for aqueous salts?",
        "options": [
          "No: water adds competing products",
          "Yes: water has no role",
          "Only if the solution is cold"
        ],
        "answer": 0,
        "why": "Aqueous electrolysis requires additional rules.",
        "concept": "changes.electro-products"
      },
      {
        "id": "changes.p-meltHT",
        "prompt": "Which balanced cathode equation describes magnesium?",
        "options": [
          "Mg²⁺ + 2e⁻ → Mg",
          "Mg²⁺ → Mg + 2e⁻",
          "Mg²⁺ + e⁻ → Mg"
        ],
        "answer": 0,
        "why": "Two electrons neutralise the 2+ ion.",
        "concept": "changes.electro-half"
      }
    ],
    "check": [
      {
        "id": "changes.c-melt1",
        "prompt": "Molten magnesium chloride with inert electrodes gives…",
        "options": [
          "Mg at cathode, Cl₂ at anode",
          "Cl₂ at cathode, Mg at anode",
          "MgCl₂ at both electrodes"
        ],
        "answer": 0,
        "why": "The metal forms at the cathode and the non-metal at the anode.",
        "concept": "changes.electro-products"
      },
      {
        "id": "changes.c-melt2",
        "prompt": "Which formula represents the bromine product?",
        "options": [
          "Br₂",
          "Br⁻",
          "PbBr₂"
        ],
        "answer": 0,
        "why": "Discharged bromide ions form neutral diatomic bromine.",
        "concept": "changes.electro-products"
      },
      {
        "id": "changes.c-melt3",
        "prompt": "Which ion moves to the cathode in molten lead bromide?",
        "options": [
          "Pb²⁺",
          "Br⁻",
          "An electron from the liquid"
        ],
        "answer": 0,
        "why": "The positive lead ion is attracted to the negative electrode.",
        "concept": "changes.electro-direction"
      },
      {
        "id": "changes.c-melt4",
        "prompt": "Why specify inert electrodes in the prediction?",
        "options": [
          "They do not supply competing reaction products",
          "They stop ions moving",
          "They make the salt aqueous"
        ],
        "answer": 0,
        "why": "Reactive electrodes can participate in electrode reactions.",
        "concept": "changes.electro-products"
      },
      {
        "id": "changes.c-melt5",
        "prompt": "Which case fits the simple metal/non-metal product rule?",
        "options": [
          "A molten binary ionic compound",
          "Any aqueous ionic solution",
          "Any solid ionic crystal"
        ],
        "answer": 0,
        "why": "The rule here assumes a molten binary ionic compound and inert electrodes.",
        "concept": "changes.electro-products"
      },
      {
        "id": "changes.c-meltHT",
        "prompt": "In 2Cl⁻ → Cl₂ + 2e⁻, chloride undergoes…",
        "options": [
          "Oxidation by losing electrons",
          "Reduction by gaining electrons",
          "No change in charge"
        ],
        "answer": 0,
        "why": "Electrons are lost at the anode; total charge remains −2 on both sides.",
        "concept": "changes.electro-half"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5"
    ]
  }
];
export const electroConcepts={"changes.electro-mobility": "Mobile ions and conduction", "changes.electro-direction": "Electrode charge and ion movement", "changes.electro-products": "Products of molten electrolysis", "changes.electro-half": "Electrode half-equations"};
