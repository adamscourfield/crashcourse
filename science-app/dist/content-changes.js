export const changesLessons=[
  {
    "id": "science.chemistry.changes.oxygen-redox",
    "title": "Metal oxides & oxygen redox",
    "short": "Follow the oxygen",
    "refs": [
      "4.1.1"
    ],
    "minutes": 20,
    "widget": "changes-oxygen",
    "prerequisites": [
      "equations"
    ],
    "big": "Oxidation is gain of oxygen; reduction is loss of oxygen. Track the substance before and after the reaction.",
    "learn": [
      {
        "title": "Metals gain oxygen to form oxides.",
        "text": "When magnesium reacts with oxygen, 2Mg + O₂ → 2MgO. Magnesium gains oxygen, so it is oxidised. The oxide is a compound of the metal and oxygen. The oxygen atoms are rearranged into the product; no atoms are created.",
        "scene": "changes:oxygen"
      },
      {
        "title": "Reduction removes oxygen.",
        "text": "In CuO + H₂ → Cu + H₂O, copper oxide loses oxygen to form copper: it is reduced. Hydrogen gains oxygen to form water: it is oxidised. Follow the oxygen transfer rather than deciding from which side of the equation a substance appears on. This equation is a supplied interpretation example, not a practical procedure.",
        "scene": "changes:oxygen"
      },
      {
        "title": "Track each substance separately.",
        "text": "For 2CuO + C → 2Cu + CO₂, CuO loses oxygen while C gains it. One substance is reduced and another oxidised in the same reaction. Changing coefficients balances atoms; changing formula subscripts changes substances. Metal extraction by carbon returns in the next lesson; Higher students later use electron definitions of redox.",
        "scene": "changes:oxygen"
      }
    ],
    "practice": [
      {
        "id": "changes.p-ox1",
        "prompt": "2Mg + O₂ → 2MgO. Magnesium is…",
        "options": [
          "Oxidised by oxygen gain",
          "Reduced by oxygen gain",
          "Neither"
        ],
        "answer": 0,
        "why": "Magnesium gains oxygen when it forms magnesium oxide.",
        "concept": "changes.oxygen-gain"
      },
      {
        "id": "changes.p-ox2",
        "prompt": "CuO + H₂ → Cu + H₂O. The substance losing oxygen is…",
        "options": [
          "H₂",
          "CuO",
          "H₂O"
        ],
        "answer": 1,
        "why": "CuO loses oxygen to form Cu.",
        "concept": "changes.oxygen-loss"
      },
      {
        "id": "changes.p-ox3",
        "prompt": "In CuO + H₂ → Cu + H₂O, hydrogen…",
        "options": [
          "Loses oxygen",
          "Gains oxygen",
          "Creates oxygen atoms"
        ],
        "answer": 1,
        "why": "H₂ gains oxygen to form H₂O, so it is oxidised.",
        "concept": "changes.oxygen-transfer"
      }
    ],
    "check": [
      {
        "id": "changes.c-ox1",
        "prompt": "2Zn + O₂ → 2ZnO. Zinc is…",
        "options": [
          "Oxidised",
          "Reduced",
          "Unchanged chemically"
        ],
        "answer": 0,
        "why": "Zinc gains oxygen.",
        "concept": "changes.oxygen-gain"
      },
      {
        "id": "changes.c-ox2",
        "prompt": "2CuO + C → 2Cu + CO₂. Which reactant is reduced?",
        "options": [
          "C",
          "CuO",
          "CO₂"
        ],
        "answer": 1,
        "why": "Copper oxide loses oxygen.",
        "concept": "changes.oxygen-loss"
      },
      {
        "id": "changes.c-ox3",
        "prompt": "2CuO + C → 2Cu + CO₂. Which reactant is oxidised?",
        "options": [
          "C",
          "CuO",
          "Cu"
        ],
        "answer": 0,
        "why": "Carbon gains oxygen to form carbon dioxide.",
        "concept": "changes.oxygen-transfer"
      },
      {
        "id": "changes.c-ox4",
        "prompt": "Reduction in terms of oxygen means…",
        "options": [
          "Gain of oxygen",
          "Loss of oxygen",
          "Loss of mass in every reaction"
        ],
        "answer": 1,
        "why": "The oxygen definition is loss of oxygen; mass alone is not the test.",
        "concept": "changes.oxygen-loss"
      },
      {
        "id": "changes.c-ox5",
        "prompt": "2Mg + O₂ → 2MgO conserves…",
        "options": [
          "Only magnesium atoms",
          "Both magnesium and oxygen atoms",
          "Neither element"
        ],
        "answer": 1,
        "why": "Two Mg and two O atoms appear on each side.",
        "concept": "changes.oxygen-transfer"
      }
    ],
    "skills": [
      "WS1.2",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.changes.reactivity-series",
    "title": "Reactivity series & evidence",
    "short": "Put the evidence in order",
    "refs": [
      "4.1.2"
    ],
    "minutes": 25,
    "widget": "changes-reactivity",
    "prerequisites": [
      "science.chemistry.bonding.ionic-bonding",
      "alkali"
    ],
    "big": "More reactive metals form positive ions more readily. Use reaction observations and displacement evidence to order metals.",
    "learn": [
      {
        "title": "Use the series as a comparison.",
        "text": "A useful order is potassium > sodium > lithium > calcium > magnesium > carbon > zinc > iron > hydrogen > copper. Carbon and hydrogen are non-metal reference points. More reactive metal atoms form positive ions more readily. A more reactive metal can displace a less reactive metal from a compound.",
        "scene": "changes:reactivity"
      },
      {
        "title": "Compare cold water and dilute acid.",
        "text": "At room temperature, K, Na and Li react vigorously with water, forming hydroxides and hydrogen; vigour rises Li < Na < K. Calcium reacts readily, giving hydrogen and calcium hydroxide. Magnesium reacts very slowly with cold water; zinc, iron and copper show no reaction under the course conditions. With dilute hydrochloric acid, Mg reacts rapidly, Zn less vigorously and Fe more slowly, producing hydrogen and salts; Cu does not react. K, Na, Li and Ca react very vigorously with dilute acid and are not suitable for a student acid comparison. Steam reactions are outside this section.",
        "scene": "changes:reactivity"
      },
      {
        "title": "Infer order from supplied observations.",
        "text": "If metal A displaces B from its compound, A is more reactive than B. If B displaces C, combine the evidence: A > B > C. Faster reaction in the same controlled conditions can support a reactivity comparison; do not confuse an uncontrolled rate difference with proof. Surface area, temperature and concentration affect observations.",
        "scene": "changes:reactivity"
      }
    ],
    "practice": [
      {
        "id": "changes.p-react1",
        "prompt": "Which reacts most vigorously with cold water?",
        "options": [
          "Lithium",
          "Sodium",
          "Potassium"
        ],
        "answer": 2,
        "why": "Among these Group1 metals, reactivity increases Li < Na < K.",
        "concept": "changes.reaction-pattern"
      },
      {
        "id": "changes.p-react2",
        "prompt": "Which does not react with dilute hydrochloric acid under course conditions?",
        "options": [
          "Magnesium",
          "Iron",
          "Copper"
        ],
        "answer": 2,
        "why": "Copper is below hydrogen in the series.",
        "concept": "changes.reaction-pattern"
      },
      {
        "id": "changes.p-react3",
        "prompt": "A displaces B; B displaces C. Most to least reactive?",
        "options": [
          "C > B > A",
          "A > B > C",
          "B > C > A"
        ],
        "answer": 1,
        "why": "Each successful displacement places the added metal above the displaced one.",
        "concept": "changes.reactivity-evidence"
      }
    ],
    "check": [
      {
        "id": "changes.c-react1",
        "prompt": "Which order is most to least reactive?",
        "options": [
          "Mg > Zn > Fe > Cu",
          "Cu > Fe > Zn > Mg",
          "Fe > Mg > Cu > Zn"
        ],
        "answer": 0,
        "why": "Mg is above Zn, then Fe, with Cu below hydrogen.",
        "concept": "changes.reactivity-order"
      },
      {
        "id": "changes.c-react2",
        "prompt": "Which statement describes calcium with cold water?",
        "options": [
          "No reaction in all conditions",
          "Hydrogen and calcium hydroxide form",
          "Copper is produced"
        ],
        "answer": 1,
        "why": "Calcium reacts with cold water to form hydroxide and hydrogen.",
        "concept": "changes.reaction-pattern"
      },
      {
        "id": "changes.c-react3",
        "prompt": "More reactive metal atoms have a greater tendency to…",
        "options": [
          "Form negative ions",
          "Form positive ions",
          "Keep every electron in every reaction"
        ],
        "answer": 1,
        "why": "Metal reactivity is linked to positive-ion formation.",
        "concept": "changes.ion-tendency"
      },
      {
        "id": "changes.c-react4",
        "prompt": "X displaces Y and Z. Y displaces Z. Order?",
        "options": [
          "Z > Y > X",
          "X > Y > Z",
          "Y > X > Z"
        ],
        "answer": 1,
        "why": "X is above both; Y is above Z.",
        "concept": "changes.reactivity-evidence"
      },
      {
        "id": "changes.c-react5",
        "prompt": "Which comparison fits cold water at room temperature?",
        "options": [
          "Mg reacts very slowly; Zn, Fe and Cu show no reaction",
          "Cu reacts more vigorously than K",
          "All eight required metals react equally"
        ],
        "answer": 0,
        "why": "The course comparison excludes steam: Mg is very slow, while Zn, Fe and Cu do not react.",
        "concept": "changes.reaction-pattern"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "AT6"
    ]
  }
];
export const changesConcepts={"changes.oxygen-gain": "Oxygen gain", "changes.oxygen-loss": "Oxygen loss", "changes.oxygen-transfer": "Oxygen transfer", "changes.reaction-pattern": "Reaction pattern", "changes.reactivity-evidence": "Reactivity evidence", "changes.reactivity-order": "Reactivity order", "changes.ion-tendency": "Ion tendency"};
