export const industryLessons=[
  {
    "id": "science.chemistry.changes.aluminium-extraction",
    "title": "Extracting aluminium",
    "short": "Follow energy, ions and carbon",
    "refs": [
      "4.3.3"
    ],
    "minutes": 25,
    "widget": "industry-aluminium",
    "prerequisites": [
      "science.chemistry.changes.metal-extraction",
      "science.chemistry.changes.molten-electrolysis"
    ],
    "big": "Aluminium oxide is electrolysed in molten cryolite. A lower operating temperature saves heating energy, while oxygen consumes the carbon anodes.",
    "learn": [
      {
        "title": "Choose an electrical route.",
        "text": "Aluminium is more reactive than carbon, so carbon cannot extract it by reducing aluminium oxide. Electrolysis is used for metals that are too reactive for carbon reduction, or that react with carbon. Energy is needed to keep the electrolyte molten and to supply the electrical current.",
        "scene": "industry:cell"
      },
      {
        "title": "Keep the mixture molten.",
        "text": "Aluminium oxide dissolves in molten cryolite. This mixture can be electrolysed at a lower temperature than pure aluminium oxide, reducing the energy needed for heating. Aluminium oxide is the feedstock being decomposed; cryolite serves as the solvent. Aluminium is formed at the negative cathode.",
        "scene": "industry:cell"
      },
      {
        "title": "Account for the carbon.",
        "text": "In the GCSE model, oxide ions produce oxygen at the positive carbon anodes. The oxygen reacts with the hot carbon to form carbon dioxide. The anodes are consumed chemically, so they must be replaced continually. The diagram simplifies the industrial cell; it does not model production rates or detailed electrolyte species.",
        "scene": "industry:anode"
      }
    ],
    "practice": [
      {
        "id": "changes.p-al1",
        "prompt": "Why is carbon reduction unsuitable for aluminium oxide?",
        "options": [
          "Aluminium is above carbon in reactivity",
          "Aluminium oxide contains no oxygen",
          "Carbon cannot react with oxygen"
        ],
        "answer": 0,
        "why": "Aluminium is too reactive to be extracted from its oxide by carbon.",
        "concept": "changes.al-route"
      },
      {
        "id": "changes.p-al2",
        "prompt": "What does adding cryolite change?",
        "options": [
          "The anode becomes negative",
          "The required operating temperature is lower",
          "The need for electric current disappears"
        ],
        "answer": 1,
        "why": "The molten mixture works at a lower temperature, reducing heating demand.",
        "concept": "changes.al-energy"
      },
      {
        "id": "changes.p-al3",
        "prompt": "Why are the carbon anodes replaced?",
        "options": [
          "They are converted into aluminium",
          "They dissolve unchanged in cold water",
          "They react with oxygen and are consumed"
        ],
        "answer": 2,
        "why": "Oxygen reacts with the hot carbon, forming carbon dioxide.",
        "concept": "changes.al-anode"
      }
    ],
    "check": [
      {
        "id": "changes.c-al1",
        "prompt": "A metal above carbon must be extracted from its molten compound. Which method fits?",
        "options": [
          "Electrolysis",
          "Filtration of the compound",
          "Reduction with carbon"
        ],
        "answer": 0,
        "why": "A metal too reactive for carbon reduction needs an alternative chemical route, such as electrolysis.",
        "concept": "changes.al-route"
      },
      {
        "id": "changes.c-al2",
        "prompt": "Why use aluminium oxide dissolved in molten cryolite?",
        "options": [
          "To remove the need for current",
          "To allow a lower operating temperature",
          "To make the aluminium oxide solid"
        ],
        "answer": 1,
        "why": "The mixture reduces heating demand compared with pure molten aluminium oxide.",
        "concept": "changes.al-energy"
      },
      {
        "id": "changes.c-al3",
        "prompt": "Which change explains the loss of carbon from an anode?",
        "options": [
          "Carbon changes into cryolite",
          "Carbon melts into aluminium",
          "Carbon reacts with oxygen to form CO₂"
        ],
        "answer": 2,
        "why": "Carbon is chemically consumed by oxygen at the hot anode.",
        "concept": "changes.al-anode"
      },
      {
        "id": "changes.c-al4",
        "prompt": "Which two demands contribute to the extraction’s large energy use?",
        "options": [
          "Maintaining molten material and supplying current",
          "Filtering a cold solution and drying paper",
          "Cooling solid aluminium oxide and stirring it"
        ],
        "answer": 0,
        "why": "Both heating and electrical current require energy.",
        "concept": "changes.al-energy"
      },
      {
        "id": "changes.c-al5",
        "prompt": "At which electrode does aluminium form?",
        "options": [
          "Positive anode",
          "Negative cathode",
          "Both electrodes equally"
        ],
        "answer": 1,
        "why": "Positive aluminium ions are discharged at the cathode.",
        "concept": "changes.al-route"
      },
      {
        "id": "changes.c-al6",
        "prompt": "A replacement anode is inert and does not react with oxygen. What would change in this model?",
        "options": [
          "Aluminium would form at the anode",
          "Cryolite would no longer melt",
          "Carbon consumption by oxygen would be avoided"
        ],
        "answer": 2,
        "why": "The existing carbon loss is caused by its chemical reaction with oxygen.",
        "concept": "changes.al-anode"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5"
    ]
  },
  {
    "id": "science.chemistry.changes.electrode-half-equations",
    "title": "Writing electrode half-equations",
    "short": "Balance atoms and charge",
    "refs": [
      "4.3.1",
      "4.3.5"
    ],
    "minutes": 30,
    "widget": "industry-half",
    "higher": true,
    "prerequisites": [
      "science.chemistry.changes.electron-redox",
      "science.chemistry.changes.aqueous-electrolysis",
      "science.chemistry.changes.aluminium-extraction"
    ],
    "big": "A balanced half-equation conserves atoms and charge. Reduction gains electrons at the cathode; oxidation loses electrons at the anode.",
    "learn": [
      {
        "title": "Balance charge at the cathode.",
        "text": "Start with the ion and the element it forms. Al³⁺ → Al has one aluminium atom on each side, but +3 charge on the left and zero on the right. Add three electrons to the left: Al³⁺ + 3e⁻ → Al. Electron gain is reduction at the negative cathode.",
        "scene": "industry:half"
      },
      {
        "title": "Remember diatomic products.",
        "text": "Chloride forms Cl₂, so start with 2Cl⁻ → Cl₂. The left charge is −2; add two electrons to the right: 2Cl⁻ → Cl₂ + 2e⁻. Loss of electrons is oxidation at the positive anode. Change coefficients, not the formulae or ion charges. Oxide ions are already 2−: 2O²⁻ → O₂ + 4e⁻. Two oxide ions form one O₂ molecule and lose four electrons.",
        "scene": "industry:half"
      },
      {
        "title": "Balance aqueous oxygen.",
        "text": "Hydrogen: 2H⁺ + 2e⁻ → H₂. Oxygen from hydroxide: 4OH⁻ → O₂ + 2H₂O + 4e⁻. The latter has four oxygen and four hydrogen atoms on each side, and −4 total charge on both sides. Water is essential to conserve hydrogen. The equivalent form 4OH⁻ − 4e⁻ → O₂ + 2H₂O is also accepted.",
        "scene": "industry:half"
      }
    ],
    "practice": [
      {
        "id": "changes.p-half1",
        "type": "equation",
        "prompt": "Write the cathode half-equation: Mg²⁺ forms Mg.",
        "answer": "Mg2+ + 2e- -> Mg",
        "why": "One Mg atom; two electrons balance +2 charge.",
        "concept": "changes.half-reduction"
      },
      {
        "id": "changes.p-half2",
        "prompt": "Which change is oxidation at an electrode?",
        "options": [
          "An ion gains electrons",
          "An ion loses electrons",
          "A nucleus loses protons"
        ],
        "answer": 1,
        "why": "Oxidation is electron loss at the anode in electrolysis.",
        "concept": "changes.half-oxidation"
      },
      {
        "id": "changes.p-half3",
        "type": "equation",
        "prompt": "Write the anode half-equation: I⁻ forms I₂.",
        "answer": "2I- -> I2 + 2e-",
        "why": "Two iodide ions form one diatomic molecule and release two electrons.",
        "concept": "changes.half-oxidation"
      },
      {
        "id": "changes.p-half4",
        "prompt": "Why is water needed in the hydroxide-to-oxygen half-equation?",
        "options": [
          "To supply metal atoms",
          "To make the cathode positive",
          "To conserve hydrogen atoms"
        ],
        "answer": 2,
        "why": "OH⁻ contains hydrogen as well as oxygen.",
        "concept": "changes.half-aqueous"
      },
      {
        "id": "changes.p-half5",
        "type": "equation",
        "prompt": "Write the anode half-equation: O²⁻ forms O₂.",
        "answer": "2O2- -> O2 + 4e-",
        "why": "Two oxide ions carry −4 charge and release four electrons.",
        "concept": "changes.half-oxidation"
      }
    ],
    "check": [
      {
        "id": "changes.c-half1",
        "type": "equation",
        "prompt": "Write the cathode half-equation for Cu²⁺ forming Cu.",
        "answer": "Cu2+ + 2e- -> Cu",
        "why": "Two electrons are gained by each Cu²⁺ ion.",
        "concept": "changes.half-reduction"
      },
      {
        "id": "changes.c-half2",
        "type": "equation",
        "prompt": "Write the anode half-equation for Cl⁻ forming Cl₂.",
        "answer": "2Cl- -> Cl2 + 2e-",
        "why": "Two chloride ions release two electrons to form Cl₂.",
        "concept": "changes.half-oxidation"
      },
      {
        "id": "changes.c-half3",
        "prompt": "At a cathode, gaining electrons is…",
        "options": [
          "Reduction",
          "Oxidation",
          "Nuclear decay"
        ],
        "answer": 0,
        "why": "Reduction is electron gain.",
        "concept": "changes.half-reduction"
      },
      {
        "id": "changes.c-half4",
        "type": "equation",
        "prompt": "Write the cathode half-equation for H⁺ forming H₂.",
        "answer": "2H+ + 2e- -> H2",
        "why": "Two H⁺ ions gain two electrons to form one H₂ molecule.",
        "concept": "changes.half-reduction"
      },
      {
        "id": "changes.c-half5",
        "type": "equation",
        "prompt": "Write the anode half-equation for OH⁻ forming O₂ and H₂O.",
        "answer": "4OH- -> O2 + 2H2O + 4e-",
        "why": "Four O and four H atoms, with −4 total charge on each side.",
        "concept": "changes.half-aqueous"
      },
      {
        "id": "changes.c-half6",
        "prompt": "In 2Br⁻ → Br₂ + 2e⁻, total charge on the right is…",
        "options": [
          "0",
          "−2",
          "+2"
        ],
        "answer": 1,
        "why": "Br₂ is neutral and the two electrons have total charge −2.",
        "concept": "changes.half-oxidation"
      },
      {
        "id": "changes.c-half7",
        "type": "equation",
        "prompt": "Write the anode half-equation for O²⁻ forming O₂ in the GCSE extraction model.",
        "answer": "2O2- -> O2 + 4e-",
        "why": "Two O²⁻ ions make O₂ and lose four electrons, conserving −4 total charge.",
        "concept": "changes.half-oxidation"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1",
      "WS4.2"
    ]
  }
];
export const industryConcepts={"changes.al-route": "Choosing aluminium electrolysis", "changes.al-energy": "Cryolite and extraction energy", "changes.al-anode": "Carbon anode consumption", "changes.half-reduction": "Writing cathode reduction equations", "changes.half-oxidation": "Writing anode oxidation equations", "changes.half-aqueous": "Balancing aqueous oxygen equations"};
