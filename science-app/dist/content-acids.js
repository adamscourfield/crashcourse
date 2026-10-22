export const acidLessons=[
  {
    "id": "science.chemistry.changes.acid-metals",
    "title": "Acids reacting with metals",
    "short": "Make a salt and release hydrogen",
    "refs": [
      "4.2.1"
    ],
    "minutes": 25,
    "widget": "acids-metals",
    "prerequisites": [
      "science.chemistry.changes.reactivity-series"
    ],
    "higherQuestions": [
      "changes.p-acidht",
      "changes.c-acidht"
    ],
    "big": "Magnesium, zinc and iron react with dilute hydrochloric or sulfuric acid to form a salt and hydrogen. The acid determines the salt’s negative ion.",
    "learn": [
      {
        "title": "Use the acid–metal pattern.",
        "text": "Metal + acid → salt + hydrogen. For magnesium with dilute hydrochloric acid: Mg + 2HCl → MgCl₂ + H₂. Bubbles are hydrogen, not oxygen or carbon dioxide. Here the course examples use magnesium, zinc and iron with hydrochloric or sulfuric acid; do not extend this rule to every metal or acid.",
        "scene": "acids:metals"
      },
      {
        "title": "The acid names the salt.",
        "text": "Hydrochloric acid gives chlorides; sulfuric acid gives sulfates. Zn + H₂SO₄ → ZnSO₄ + H₂. Iron forms Fe²⁺ salts in these examples: Fe + 2HCl → FeCl₂ + H₂. Sulfate is SO₄²⁻ and chloride is Cl⁻, so the formula must balance the metal-ion charge.",
        "scene": "acids:metals"
      },
      {
        "title": "Link observations to reactivity.",
        "text": "Under comparable dilute-acid conditions magnesium reacts more vigorously than zinc, and iron reacts more slowly. The metals are above hydrogen in the series. Conditions such as surface area and acid concentration also affect observed rate. These are symbolic reaction accounts, not a method for carrying out an experiment.",
        "scene": "acids:metals"
      },
      {
        "title": "Higher: the metal and hydrogen ions exchange electrons.",
        "text": "For Mg + 2H⁺ → Mg²⁺ + H₂, Mg → Mg²⁺ + 2e⁻ is oxidation. 2H⁺ + 2e⁻ → H₂ is reduction. The metal loses electrons; hydrogen ions gain them. Chloride or sulfate ions are spectators in the net ionic account. The reacting species reduced is H⁺, not the hydrogen gas product.",
        "scene": "acids:metals",
        "higher": true
      }
    ],
    "practice": [
      {
        "id": "changes.p-acid1",
        "prompt": "Mg + dilute hydrochloric acid produces…",
        "options": [
          "Magnesium chloride and hydrogen",
          "Magnesium sulfate and oxygen",
          "Magnesium oxide and water"
        ],
        "answer": 0,
        "why": "Hydrochloric acid gives a chloride; the gas is H₂.",
        "concept": "changes.acid-metal-products"
      },
      {
        "id": "changes.p-acid2",
        "prompt": "Zinc with dilute sulfuric acid forms the salt…",
        "options": [
          "ZnCl₂",
          "ZnSO₄",
          "ZnO"
        ],
        "answer": 1,
        "why": "Sulfuric acid supplies sulfate ions.",
        "concept": "changes.acid-metal-salts"
      },
      {
        "id": "changes.p-acid3",
        "prompt": "Iron forms Fe²⁺ with hydrochloric acid. Salt formula?",
        "options": [
          "FeCl",
          "FeCl₂",
          "FeCl₃"
        ],
        "answer": 1,
        "why": "Two Cl⁻ ions balance one Fe²⁺.",
        "concept": "changes.acid-metal-salts"
      },
      {
        "id": "changes.p-acidht",
        "prompt": "Mg + 2H⁺ → Mg²⁺ + H₂. H⁺ is…",
        "options": [
          "Oxidised by losing electrons",
          "Reduced by gaining electrons",
          "A spectator"
        ],
        "answer": 1,
        "why": "Hydrogen ions gain electrons to form H₂.",
        "concept": "changes.acid-electrons"
      }
    ],
    "check": [
      {
        "id": "changes.c-acid1",
        "prompt": "Gas from zinc and dilute hydrochloric acid?",
        "options": [
          "H₂",
          "O₂",
          "CO₂"
        ],
        "answer": 0,
        "why": "Acid plus zinc produces salt and hydrogen.",
        "concept": "changes.acid-metal-products"
      },
      {
        "id": "changes.c-acid2",
        "prompt": "Magnesium with dilute sulfuric acid forms…",
        "options": [
          "MgCl₂",
          "MgSO₄",
          "Mg(NO₃)₂"
        ],
        "answer": 1,
        "why": "Sulfuric acid produces a sulfate.",
        "concept": "changes.acid-metal-salts"
      },
      {
        "id": "changes.c-acid3",
        "prompt": "Which is balanced for iron with dilute hydrochloric acid forming Fe²⁺?",
        "options": [
          "Fe + HCl → FeCl₂ + H₂",
          "Fe + 2HCl → FeCl₂ + H₂",
          "2Fe + HCl → FeCl₂ + H₂"
        ],
        "answer": 1,
        "why": "One Fe, two Cl and two H atoms occur on each side.",
        "concept": "changes.acid-metal-products"
      },
      {
        "id": "changes.c-acid4",
        "prompt": "Which pair is within this lesson’s specified metal/acid scope?",
        "options": [
          "Copper and nitric acid",
          "Zinc and dilute sulfuric acid",
          "Gold and any acid"
        ],
        "answer": 1,
        "why": "The stated scope is Mg,Zn,Fe with hydrochloric or sulfuric acid.",
        "concept": "changes.acid-metal-products"
      },
      {
        "id": "changes.c-acid5",
        "prompt": "Comparable dilute-acid reactions usually have vigour…",
        "options": [
          "Mg > Zn > Fe",
          "Fe > Zn > Mg",
          "All identical"
        ],
        "answer": 0,
        "why": "Magnesium is more reactive than zinc, which is above iron.",
        "concept": "changes.acid-metal-products"
      },
      {
        "id": "changes.c-acidht",
        "prompt": "Zn + 2H⁺ → Zn²⁺ + H₂. Which is correct?",
        "options": [
          "Zn is reduced; H⁺ oxidised",
          "Zn is oxidised; H⁺ reduced",
          "Both starting species gain electrons"
        ],
        "answer": 1,
        "why": "Zn loses two electrons and hydrogen ions gain them.",
        "concept": "changes.acid-electrons"
      }
    ],
    "skills": [
      "WS1.2",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.changes.neutralisation-salts",
    "title": "Neutralisation & salt formulae",
    "short": "Build the salt from its ions",
    "refs": [
      "4.2.2"
    ],
    "minutes": 25,
    "widget": "acids-neutralisation",
    "prerequisites": [
      "science.chemistry.bonding.ionic-lattices"
    ],
    "big": "Acid + base gives salt and water; acid + carbonate also gives carbon dioxide. Balance the charges of the ions to write the salt formula.",
    "learn": [
      {
        "title": "Bases neutralise acids.",
        "text": "Bases include metal oxides and hydroxides. Alkalis are soluble bases, such as sodium hydroxide. Acid + metal oxide or hydroxide → salt + water. Example: CuO + 2HCl → CuCl₂ + H₂O. NaOH + HCl → NaCl + H₂O. Not every base is soluble, so base and alkali are not identical terms.",
        "scene": "acids:neutralisation"
      },
      {
        "title": "Carbonates add a gas product.",
        "text": "Acid + metal carbonate → salt + water + carbon dioxide. CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂. Carbon dioxide comes from the carbonate; it is not the hydrogen gas produced by the metal–acid pattern. Use the reactant type to choose the products.",
        "scene": "acids:neutralisation"
      },
      {
        "title": "Use both ions, then balance charge.",
        "text": "Hydrochloric acid gives Cl⁻ chlorides, nitric acid gives NO₃⁻ nitrates and sulfuric acid gives SO₄²⁻ sulfates. The base or carbonate supplies the positive ion. Mg²⁺ needs two Cl⁻: MgCl₂. Two Na⁺ balance SO₄²⁻: Na₂SO₄. Ca²⁺ needs two complete nitrate ions: Ca(NO₃)₂. Brackets multiply a whole polyatomic ion.",
        "scene": "acids:neutralisation"
      }
    ],
    "practice": [
      {
        "id": "changes.p-neutral1",
        "prompt": "Acid + metal oxide produces…",
        "options": [
          "Salt and water",
          "Salt and hydrogen",
          "Salt only"
        ],
        "answer": 0,
        "why": "The oxide is a base; neutralisation produces water.",
        "concept": "changes.neutral-products"
      },
      {
        "id": "changes.p-neutral2",
        "prompt": "Acid + carbonate additionally produces…",
        "options": [
          "Oxygen",
          "Hydrogen",
          "Carbon dioxide"
        ],
        "answer": 2,
        "why": "The carbonate reaction gives CO₂ and water alongside the salt.",
        "concept": "changes.neutral-products"
      },
      {
        "id": "changes.p-neutral3",
        "prompt": "Salt from Na⁺ and SO₄²⁻?",
        "options": [
          "NaSO₄",
          "Na₂SO₄",
          "Na(SO₄)₂"
        ],
        "answer": 1,
        "why": "Two sodium ions balance the2− sulfate charge.",
        "concept": "changes.salt-formulae"
      }
    ],
    "check": [
      {
        "id": "changes.c-neutral1",
        "prompt": "Products of hydrochloric acid and magnesium oxide?",
        "options": [
          "MgCl₂ and water",
          "MgSO₄ and hydrogen",
          "MgCl₂ and oxygen"
        ],
        "answer": 0,
        "why": "Acid+oxide gives salt+water; HCl gives chloride.",
        "concept": "changes.neutral-products"
      },
      {
        "id": "changes.c-neutral2",
        "prompt": "Sulfuric acid plus copper(II) oxide gives the salt…",
        "options": [
          "Copper chloride",
          "Copper nitrate",
          "Copper sulfate"
        ],
        "answer": 2,
        "why": "The acid supplies sulfate and the oxide supplies Cu²⁺.",
        "concept": "changes.salt-ions"
      },
      {
        "id": "changes.c-neutral3",
        "prompt": "Nitric acid plus calcium carbonate produces…",
        "options": [
          "Calcium nitrate, water and CO₂",
          "Calcium chloride and hydrogen",
          "Calcium oxide and O₂"
        ],
        "answer": 0,
        "why": "Acid+carbonate gives salt+water+CO₂; nitric acid gives nitrate.",
        "concept": "changes.neutral-products"
      },
      {
        "id": "changes.c-neutral4",
        "prompt": "Formula from Mg²⁺ and NO₃⁻?",
        "options": [
          "MgNO₃",
          "Mg(NO₃)₂",
          "Mg₂NO₃"
        ],
        "answer": 1,
        "why": "Two whole nitrate ions balance Mg²⁺.",
        "concept": "changes.salt-formulae"
      },
      {
        "id": "changes.c-neutral5",
        "prompt": "Which distinction is correct?",
        "options": [
          "Every base is an alkali",
          "An alkali is a soluble base",
          "Alkalis cannot neutralise acids"
        ],
        "answer": 1,
        "why": "Bases include insoluble oxides as well as soluble hydroxides.",
        "concept": "changes.base-alkali"
      },
      {
        "id": "changes.c-neutral6",
        "prompt": "Formula from Al³⁺ and SO₄²⁻?",
        "options": [
          "AlSO₄",
          "Al₂(SO₄)₃",
          "Al₃(SO₄)₂"
        ],
        "answer": 1,
        "why": "2×3+ and3×2− give equal charge magnitudes.",
        "concept": "changes.salt-formulae"
      }
    ],
    "skills": [
      "WS4.1",
      "MS1c",
      "MS3a"
    ]
  }
];
export const acidConcepts={"changes.acid-metal-products": "Acid metal products", "changes.acid-metal-salts": "Acid metal salts", "changes.acid-electrons": "Acid electrons", "changes.neutral-products": "Neutral products", "changes.salt-formulae": "Salt formulae", "changes.salt-ions": "Salt ions", "changes.base-alkali": "Base alkali"};
