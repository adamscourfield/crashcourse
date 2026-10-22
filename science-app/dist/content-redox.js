export const redoxLessons=[
  {
    "id": "science.chemistry.changes.metal-extraction",
    "title": "Extracting metals using carbon",
    "short": "Separate metal from oxygen",
    "refs": [
      "4.1.3"
    ],
    "minutes": 25,
    "widget": "redox-extraction",
    "prerequisites": [
      "science.chemistry.changes.oxygen-redox",
      "science.chemistry.changes.reactivity-series"
    ],
    "big": "Carbon can reduce oxides of metals less reactive than itself. Extraction method depends on the compound and the metal’s reactivity.",
    "learn": [
      {
        "title": "Most metals are chemically combined.",
        "text": "Very unreactive metals such as gold can occur as the metal itself. Most metals occur in compounds, so a chemical reaction is needed to obtain the metal. Physical separation can concentrate a mineral, but it does not by itself turn a metal oxide into a metal.",
        "scene": "redox:extraction"
      },
      {
        "title": "Carbon removes oxygen from some oxides.",
        "text": "Metals below carbon in the series can be extracted from their oxides by reduction with carbon. For the supplied equation 2CuO + C → 2Cu + CO₂, copper oxide loses oxygen and is reduced; carbon gains oxygen and is oxidised. Carbon cannot reduce aluminium oxide to aluminium in the GCSE model because aluminium is more reactive than carbon. Electrolysis returns later.",
        "scene": "redox:extraction"
      },
      {
        "title": "Evaluate the supplied process.",
        "text": "Do not choose a process from cost alone before checking that it works chemically. If a metal is below carbon and its oxide can be reduced, carbon reduction may be suitable. Given two viable routes, compare supplied energy use, cost and emissions against the stated goal. A cheap route can have a larger environmental cost. You do not need detailed industrial extraction machinery for this section.",
        "scene": "redox:extraction"
      }
    ],
    "practice": [
      {
        "id": "changes.p-extract1",
        "prompt": "Which metal can occur naturally as the metal itself?",
        "options": [
          "Gold",
          "Potassium",
          "Calcium"
        ],
        "answer": 0,
        "why": "Gold is very unreactive; reactive metals usually occur as compounds.",
        "concept": "changes.native-metals"
      },
      {
        "id": "changes.p-extract2",
        "prompt": "A metal is below carbon. Its oxide can generally be reduced by…",
        "options": [
          "Carbon",
          "Filtration alone",
          "Adding more oxygen"
        ],
        "answer": 0,
        "why": "Carbon can remove oxygen from oxides of less reactive metals.",
        "concept": "changes.carbon-extraction"
      },
      {
        "id": "changes.p-extract3",
        "prompt": "2CuO + C → 2Cu + CO₂. Carbon is…",
        "options": [
          "Reduced",
          "Oxidised",
          "Unchanged"
        ],
        "answer": 1,
        "why": "Carbon gains oxygen.",
        "concept": "changes.extraction-redox"
      }
    ],
    "check": [
      {
        "id": "changes.c-extract1",
        "prompt": "Iron is below carbon. Which route can obtain iron from its oxide?",
        "options": [
          "Reduction with carbon",
          "Filtering solid oxide",
          "Oxidising iron further"
        ],
        "answer": 0,
        "why": "Carbon is more reactive than iron and can remove oxygen from its oxide.",
        "concept": "changes.carbon-extraction"
      },
      {
        "id": "changes.c-extract2",
        "prompt": "Why does physical separation alone not extract copper from pure copper oxide?",
        "options": [
          "It does not remove chemically combined oxygen",
          "Copper oxide is already copper metal",
          "Filtering changes atomic numbers"
        ],
        "answer": 0,
        "why": "A chemical reaction must change the compound into the metal.",
        "concept": "changes.native-metals"
      },
      {
        "id": "changes.c-extract3",
        "prompt": "2CuO + C → 2Cu + CO₂. The reduced reactant is…",
        "options": [
          "CuO",
          "C",
          "CO₂"
        ],
        "answer": 0,
        "why": "CuO loses oxygen.",
        "concept": "changes.extraction-redox"
      },
      {
        "id": "changes.c-extract4",
        "prompt": "Aluminium is above carbon. Carbon reduction of aluminium oxide is…",
        "options": [
          "The usual GCSE extraction route",
          "Not suitable in this reactivity model",
          "A physical separation"
        ],
        "answer": 1,
        "why": "Carbon cannot remove oxygen from an oxide of a metal more reactive than itself in this model.",
        "concept": "changes.carbon-extraction"
      },
      {
        "id": "changes.c-extract5",
        "prompt": "Two viable routes: A costs £4/kg with high CO₂ emissions; B costs £9/kg with low CO₂ emissions. If low CO₂ is the priority and both costs are affordable…",
        "options": [
          "A must be chosen because cheapest is always best",
          "B meets the priority despite higher cost",
          "The routes have identical trade-offs"
        ],
        "answer": 1,
        "why": "Use the stated environmental priority and supplied comparable process data.",
        "concept": "changes.extraction-evaluation"
      }
    ],
    "skills": [
      "WS1.2",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.changes.electron-redox",
    "title": "Electron redox & ionic equations",
    "short": "Follow the electron transfer",
    "refs": [
      "4.1.4"
    ],
    "higher": true,
    "minutes": 30,
    "widget": "redox-electrons",
    "prerequisites": [
      "science.chemistry.changes.reactivity-series",
      "science.chemistry.bonding.ionic-bonding"
    ],
    "big": "Oxidation loses electrons; reduction gains them. Balanced ionic equations conserve both atoms and total charge.",
    "learn": [
      {
        "title": "Loss and gain happen together.",
        "text": "In Zn + Cu²⁺ → Zn²⁺ + Cu, zinc loses two electrons and is oxidised. Copper(II) ions gain two electrons and are reduced to copper atoms. Name the starting species precisely: Cu²⁺ is reduced, not the copper metal product. A metal can displace a less reactive metal from its ion solution.",
        "scene": "redox:electrons"
      },
      {
        "title": "Half-equations track the charge.",
        "text": "Oxidation: Zn → Zn²⁺ + 2e⁻. Reduction: Cu²⁺ + 2e⁻ → Cu. Zinc’s half-equation has total charge 0 on each side (+2−2 on the right). Copper’s has +2−2=0 on the left and 0 on the right. Put electrons on the correct side; changing the ion charge changes the species.",
        "scene": "redox:electrons"
      },
      {
        "title": "Cancel equal electrons to write an ionic equation.",
        "text": "Add the two half-equations and cancel electrons: Zn + Cu²⁺ → Zn²⁺ + Cu. Sulfate ions in zinc plus copper sulfate are spectators and omitted from the net ionic equation. Balance atoms and charge, not only the number of symbols. In this lesson’s construction tasks the metals form 2+ ions and Cu²⁺ becomes Cu. Other charges need different electron coefficients.",
        "scene": "redox:electrons"
      }
    ],
    "practice": [
      {
        "id": "changes.p-elect1",
        "prompt": "In Mg → Mg²⁺ + 2e⁻, magnesium is…",
        "options": [
          "Oxidised",
          "Reduced",
          "Neither"
        ],
        "answer": 0,
        "why": "Electrons are lost.",
        "concept": "changes.electron-oxidation"
      },
      {
        "id": "changes.p-elect2",
        "prompt": "How many electrons does Cu²⁺ gain to become Cu?",
        "options": [],
        "answer": 2,
        "why": "The 2+ charge is neutralised by two electrons.",
        "concept": "changes.electron-charge",
        "type": "number",
        "unit": "electrons",
        "tolerance": 0
      },
      {
        "id": "changes.p-elect3",
        "prompt": "Zn + CuSO₄ → ZnSO₄ + Cu. Which ions are spectators?",
        "options": [
          "Cu²⁺",
          "Zn²⁺",
          "SO₄²⁻"
        ],
        "answer": 2,
        "why": "Sulfate ions appear unchanged on both sides.",
        "concept": "changes.ionic-displacement"
      }
    ],
    "check": [
      {
        "id": "changes.c-elect1",
        "prompt": "Zn + Cu²⁺ → Zn²⁺ + Cu. Which starting species is reduced?",
        "options": [
          "Zn",
          "Cu²⁺",
          "Zn²⁺"
        ],
        "answer": 1,
        "why": "Cu²⁺ gains electrons.",
        "concept": "changes.electron-reduction"
      },
      {
        "id": "changes.c-elect2",
        "prompt": "Fe forms Fe²⁺. Number of electrons lost per Fe atom?",
        "options": [],
        "answer": 2,
        "why": "Fe → Fe²⁺ +2e⁻.",
        "concept": "changes.electron-charge",
        "type": "number",
        "unit": "electrons",
        "tolerance": 0
      },
      {
        "id": "changes.c-elect3",
        "prompt": "Which is a balanced reduction half-equation?",
        "options": [
          "Cu²⁺ → Cu + 2e⁻",
          "Cu²⁺ + 2e⁻ → Cu",
          "Cu²⁺ + e⁻ → Cu"
        ],
        "answer": 1,
        "why": "Two electrons are gained, conserving charge.",
        "concept": "changes.electron-reduction"
      },
      {
        "id": "changes.c-elect4",
        "prompt": "Correct net ionic equation for Mg displacing Cu²⁺?",
        "options": [
          "Mg + Cu²⁺ → Mg²⁺ + Cu",
          "Mg + Cu → Mg²⁺ + Cu²⁺",
          "Mg²⁺ + Cu²⁺ → Mg + Cu"
        ],
        "answer": 0,
        "why": "Mg loses and Cu²⁺ gains two electrons; charge is+2 on each side.",
        "concept": "changes.ionic-displacement"
      },
      {
        "id": "changes.c-elect5",
        "prompt": "An oxidation half-equation has electrons…",
        "options": [
          "On the product side because they are lost",
          "On the reactant side because they are gained",
          "Missing in all cases"
        ],
        "answer": 0,
        "why": "Oxidation is loss of electrons.",
        "concept": "changes.electron-oxidation"
      }
    ],
    "skills": [
      "WS1.2",
      "WS4.1",
      "MS3a"
    ]
  }
];
export const redoxConcepts={"changes.native-metals": "Native metals", "changes.carbon-extraction": "Carbon extraction", "changes.extraction-redox": "Extraction redox", "changes.extraction-evaluation": "Extraction evaluation", "changes.electron-oxidation": "Electron oxidation", "changes.electron-reduction": "Electron reduction", "changes.electron-charge": "Electron charge", "changes.ionic-displacement": "Ionic displacement"};
