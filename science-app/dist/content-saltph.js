export const saltphLessons=[
  {
    "id": "science.chemistry.changes.soluble-salts",
    "title": "Preparing pure, dry soluble salts",
    "short": "From reaction mixture to crystals",
    "refs": [
      "4.2.3"
    ],
    "minutes": 30,
    "widget": "saltph-salts",
    "prerequisites": [
      "science.chemistry.changes.neutralisation-salts"
    ],
    "big": "Use an excess insoluble solid to consume acid, filter it off, then concentrate and cool the salt solution to grow crystals. Separate and dry the crystals.",
    "learn": [
      {
        "title": "Choose reactants that give the named salt.",
        "text": "For copper(II) sulfate, use dilute sulfuric acid and insoluble copper(II) oxide: CuO + H₂SO₄ → CuSO₄ + H₂O. The acid supplies sulfate; the oxide supplies Cu²⁺. This excess-solid method needs an insoluble reactant that can be removed by filtration. A soluble alkali needs a different approach, taught later in titrations.",
        "scene": "saltph:salts"
      },
      {
        "title": "Remove acid, then remove the excess solid.",
        "text": "In the supervised school practical, dilute acid is gently warmed using a Bunsen burner, then removed from the flame before the insoluble oxide or carbonate is added in small portions with stirring. Continue until some solid remains unreacted. Excess solid shows the acid has been used up. Filter to remove the unreacted solid; the dissolved salt is in the filtrate. Carbonates release CO₂ as they react.",
        "scene": "saltph:salts"
      },
      {
        "title": "Concentrate, crystallise and dry.",
        "text": "Gently evaporate some water from the filtrate using a water bath or electric heater, stopping before it is dry. Leave the concentrated solution to cool so crystals form. Filter the crystals, rinse with a little cold distilled water and dry between filter papers or as directed by the school method. Excess acid or unremoved solid lowers purity; wet crystals inflate the measured mass. The interactive planner does not fulfil the required practical.",
        "scene": "saltph:salts"
      }
    ],
    "practice": [
      {
        "id": "changes.p-saltprep1",
        "prompt": "Why add excess insoluble oxide?",
        "options": [
          "To use up all the acid",
          "To make the salt insoluble",
          "To remove water"
        ],
        "answer": 0,
        "why": "Remaining insoluble solid signals that no acid remains to react.",
        "concept": "changes.salt-purity"
      },
      {
        "id": "changes.p-saltprep2",
        "prompt": "After filtering excess oxide, the dissolved salt is in…",
        "options": [
          "The solid residue",
          "The filtrate",
          "The filter paper only"
        ],
        "answer": 1,
        "why": "Dissolved salt passes through with the solution.",
        "concept": "changes.salt-sequence"
      },
      {
        "id": "changes.p-saltprep3",
        "prompt": "After partial evaporation, crystals form mainly as the solution…",
        "options": [
          "Is filtered before reacting",
          "Cools",
          "Is diluted indefinitely"
        ],
        "answer": 1,
        "why": "Cooling the concentrated solution allows crystals to form.",
        "concept": "changes.salt-crystallise"
      }
    ],
    "check": [
      {
        "id": "changes.c-saltprep1",
        "prompt": "Reactants for magnesium chloride by the excess insoluble-oxide method?",
        "options": [
          "Magnesium oxide and hydrochloric acid",
          "Magnesium oxide and sulfuric acid",
          "Sodium hydroxide and nitric acid"
        ],
        "answer": 0,
        "why": "MgO supplies magnesium; HCl supplies chloride.",
        "concept": "changes.salt-reactants"
      },
      {
        "id": "changes.c-saltprep2",
        "prompt": "Why filter before concentrating the solution?",
        "options": [
          "To remove dissolved salt",
          "To remove unreacted insoluble solid",
          "To remove every water molecule"
        ],
        "answer": 1,
        "why": "Excess solid should not contaminate the crystals.",
        "concept": "changes.salt-purity"
      },
      {
        "id": "changes.c-saltprep3",
        "prompt": "Correct order after excess solid has reacted?",
        "options": [
          "Evaporate dry → filter → add acid",
          "Filter → partially evaporate → cool → separate/dry crystals",
          "Cool → add water → discard filtrate"
        ],
        "answer": 1,
        "why": "Remove solid before concentrating and crystallising the dissolved salt.",
        "concept": "changes.salt-sequence"
      },
      {
        "id": "changes.c-saltprep4",
        "prompt": "Why avoid boiling the salt solution completely dry in this method?",
        "options": [
          "The method aims to crystallise from concentrated solution on cooling",
          "All salts evaporate like water",
          "Drying creates new metal atoms"
        ],
        "answer": 0,
        "why": "Partial evaporation followed by cooling gives controlled crystallisation.",
        "concept": "changes.salt-crystallise"
      },
      {
        "id": "changes.c-saltprep5",
        "prompt": "Wet crystals can give an inflated recorded yield because…",
        "options": [
          "Water adds to the measured mass",
          "The salt has gained extra metal atoms",
          "Water has no mass"
        ],
        "answer": 0,
        "why": "Recorded mass includes water as well as salt.",
        "concept": "changes.salt-purity"
      }
    ],
    "skills": [
      "AT2",
      "AT3",
      "AT4",
      "AT6",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.changes.ph-neutralisation",
    "title": "pH, indicators & neutralisation",
    "short": "Read the scale, follow the ions",
    "refs": [
      "4.2.4"
    ],
    "minutes": 25,
    "widget": "saltph-ph",
    "prerequisites": [
      "science.chemistry.changes.neutralisation-salts"
    ],
    "big": "On the course pH scale, below 7 is acidic,7 is neutral and above 7 is alkaline. In neutralisation H⁺ and OH⁻ react to form water.",
    "learn": [
      {
        "title": "Connect pH to the ions in solution.",
        "text": "Acids produce H⁺ ions in aqueous solution; aqueous alkalis contain OH⁻ ions. On the GCSE 0–14 pH scale, pH below 7 is acidic,7 is neutral and above 7 is alkaline. A lower pH is more acidic. pH is not a measure of how much solution is present.",
        "scene": "saltph:ph"
      },
      {
        "title": "An indicator estimates; a probe gives a reading.",
        "text": "Add universal indicator to a small sample or use indicator paper according to the supplied method. Compare its colour with the manufacturer’s chart to estimate pH. Typical colours run red/orange/yellow for acidic, green near 7 and blue/purple for alkaline. Colours depend on the indicator chart and give approximate values. A suitably calibrated pH probe gives a numerical reading; its display precision does not remove measurement uncertainty.",
        "scene": "saltph:ph"
      },
      {
        "title": "Neutralisation makes water from ions.",
        "text": "H⁺(aq) + OH⁻(aq) → H₂O(l). One positive and one negative charge sum to zero; atoms are conserved. Adding an appropriate amount of alkali to acid removes excess H⁺ by forming water. Too much acid leaves an acidic mixture; too much alkali leaves an alkaline mixture. Equal liquid volumes alone do not guarantee neutralisation because concentration and equation ratios matter.",
        "scene": "saltph:ph"
      }
    ],
    "practice": [
      {
        "id": "changes.p-ph1",
        "prompt": "pH 3 is…",
        "options": [
          "Acidic",
          "Neutral",
          "Alkaline"
        ],
        "answer": 0,
        "why": "3 is below 7.",
        "concept": "changes.ph-classification"
      },
      {
        "id": "changes.p-ph2",
        "prompt": "A universal indicator chart gives a colour closest to pH 5. Report…",
        "options": [
          "An approximate pH around 5",
          "Exactly 5.000 with no uncertainty",
          "A definite concentration in grams"
        ],
        "answer": 0,
        "why": "Colour matching estimates pH.",
        "concept": "changes.ph-measurement"
      },
      {
        "id": "changes.p-ph3",
        "prompt": "Ions reacting to form water in neutralisation?",
        "options": [
          "H⁺ and OH⁻",
          "Na⁺ and Cl⁻ only",
          "Cu²⁺ and SO₄²⁻"
        ],
        "answer": 0,
        "why": "Hydrogen and hydroxide ions form water.",
        "concept": "changes.neutralisation-ions"
      }
    ],
    "check": [
      {
        "id": "changes.c-ph1",
        "prompt": "Which solution is alkaline?",
        "options": [
          "pH 2",
          "pH 7",
          "pH 11"
        ],
        "answer": 2,
        "why": "11 is above 7.",
        "concept": "changes.ph-classification"
      },
      {
        "id": "changes.c-ph2",
        "prompt": "Which is most acidic?",
        "options": [
          "pH 6",
          "pH 4",
          "pH 1"
        ],
        "answer": 2,
        "why": "The lowest pH is most acidic.",
        "concept": "changes.ph-classification"
      },
      {
        "id": "changes.c-ph3",
        "prompt": "Universal indicator is used to estimate pH by…",
        "options": [
          "Comparing its colour with the supplied chart",
          "Counting bubbles",
          "Measuring solution mass only"
        ],
        "answer": 0,
        "why": "The indicator’s colour is matched to its chart.",
        "concept": "changes.ph-measurement"
      },
      {
        "id": "changes.c-ph4",
        "prompt": "Correct ionic equation for acid–alkali neutralisation?",
        "options": [
          "H⁺ + OH⁻ → H₂O",
          "H⁺ + OH⁻ → H₂ + O₂",
          "Na⁺ + Cl⁻ → H₂O"
        ],
        "answer": 0,
        "why": "Atoms and total charge balance in the water-forming reaction.",
        "concept": "changes.neutralisation-ions"
      },
      {
        "id": "changes.c-ph5",
        "prompt": "Mixing equal volumes of acid and alkali guarantees pH 7…",
        "options": [
          "Always",
          "Only because both are liquids",
          "No: concentrations and reacting ratio also matter"
        ],
        "answer": 2,
        "why": "Volumes alone do not determine equal reacting amounts.",
        "concept": "changes.neutralisation-ions"
      }
    ],
    "skills": [
      "AT3",
      "WS4.1"
    ]
  }
];
export const saltphConcepts={"changes.salt-purity": "Salt purity", "changes.salt-sequence": "Salt sequence", "changes.salt-crystallise": "Salt crystallise", "changes.salt-reactants": "Salt reactants", "changes.ph-classification": "Ph classification", "changes.ph-measurement": "Ph measurement", "changes.neutralisation-ions": "Neutralisation ions"};
