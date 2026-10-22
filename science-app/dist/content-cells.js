export const cellLessons=[
  {
    "id": "science.chemistry.energy.cells-batteries",
    "title": "Cells & batteries",
    "short": "Cells & batteries",
    "refs": [
      "5.2.1"
    ],
    "separate": true,
    "higher": false,
    "minutes": 25,
    "widget": "cells-voltage",
    "prerequisites": [
      "science.chemistry.energy.energy-transfer",
      "science.chemistry.changes.reactivity-series"
    ],
    "big": "Cells transfer chemical energy electrically. Electrode and electrolyte choices affect voltage; series cells can give a greater voltage.",
    "learn": [
      {
        "title": "Two metals, one electrolyte.",
        "text": "A simple cell uses two different metals in contact with an electrolyte, connected through an external circuit. Chemical reactions produce a potential difference. Electrons travel through the metal wire; ions carry charge through the electrolyte. In the illustrated reacting metal cell, electrons leave the more reactive metal. The diagram is schematic, not an instruction to build one.",
        "scene": "cells:voltage"
      },
      {
        "title": "Compare under controlled conditions.",
        "text": "Voltage depends on electrode materials and electrolyte, including conditions such as concentration. Compare supplied measurements with a shared reference metal and fixed electrolyte to infer an order for that experiment. Larger voltage alone is not a universal reactivity scale. Here, controlled data put magnesium above zinc above copper. Clean electrodes and consistent conditions support a fair comparison.",
        "scene": "cells:voltage"
      },
      {
        "title": "Keep the energy account.",
        "text": "A battery contains two or more cells connected in series, aligned so their voltages add. Non-rechargeable cells stop when a reactant is used up; alkaline batteries are non-rechargeable. In rechargeable cells, an external electrical current reverses the chemical reactions. Recharging transfers energy into the cell. Evaluate voltage, replacement, lifetime, cost and access to charging for the intended use.",
        "scene": "cells:voltage"
      }
    ],
    "practice": [
      {
        "id": "energy.p-cell1",
        "prompt": "What carries charge through the electrolyte?",
        "answer": 1,
        "why": "Ions carry charge in the electrolyte; electrons travel in the wire.",
        "concept": "energy.cell-voltage",
        "options": [
          "Electrons moving through solution",
          "Mobile ions",
          "Neutral metal atoms"
        ]
      },
      {
        "id": "energy.p-cell2",
        "prompt": "Three aligned cells each give 1.2 V. Battery voltage?",
        "answer": 3.6,
        "why": "Series aligned voltages add:3 ×1.2=3.6 V.",
        "concept": "energy.cell-voltage",
        "type": "number",
        "tolerance": 0.01,
        "unit": "V"
      },
      {
        "id": "energy.p-cell3",
        "prompt": "Why can a rechargeable cell be restored?",
        "answer": 1,
        "why": "Electrical energy drives the reverse chemical changes.",
        "concept": "energy.cell-recharge",
        "options": [
          "Its chemicals never change",
          "External current reverses its reactions",
          "It creates new energy"
        ]
      }
    ],
    "check": [
      {
        "id": "energy.c-cell1",
        "prompt": "A simple cell needs…",
        "answer": 0,
        "why": "Different electrodes and an electrolyte allow a chemical cell.",
        "concept": "energy.cell-voltage",
        "options": [
          "Two different metals in an electrolyte",
          "Only dry plastic plates",
          "A wire without reacting chemicals"
        ]
      },
      {
        "id": "energy.c-cell2",
        "prompt": "Four aligned 1.5 V cells in series supply what voltage?",
        "answer": 6,
        "why": "4 ×1.5=6.0 V.",
        "concept": "energy.cell-voltage",
        "type": "number",
        "tolerance": 0.01,
        "unit": "V"
      },
      {
        "id": "energy.c-cell3",
        "prompt": "Same electrolyte and copper reference: Mg gives 1.6 V; Zn gives 0.8 V. In both, electrons flow from test metal toward copper. What order is supported?",
        "answer": 1,
        "why": "The shared conditions and specified direction support Mg > Zn > Cu for these data.",
        "concept": "energy.cell-voltage",
        "options": [
          "Cu > Zn > Mg",
          "Mg > Zn > Cu",
          "Zn > Mg > Cu"
        ]
      },
      {
        "id": "energy.c-cell4",
        "prompt": "Which statement about alkaline batteries is correct?",
        "answer": 1,
        "why": "AQA specifies alkaline batteries as non-rechargeable.",
        "concept": "energy.cell-recharge",
        "options": [
          "They are all rechargeable",
          "They are non-rechargeable",
          "They work without reactants"
        ]
      },
      {
        "id": "energy.c-cell5",
        "prompt": "A non-rechargeable cell stops supplying useful current when…",
        "answer": 0,
        "why": "The chemical process needs its reactants.",
        "concept": "energy.cell-recharge",
        "options": [
          "A reactant is used up",
          "Its atoms disappear",
          "Energy conservation stops"
        ]
      },
      {
        "id": "energy.c-cell6",
        "prompt": "Why is a voltage comparison unreliable if the electrolyte also changes?",
        "answer": 1,
        "why": "More than one factor changed; the electrode effect is not isolated.",
        "concept": "energy.cell-voltage",
        "options": [
          "The voltage is always zero",
          "Electrolyte can affect voltage too",
          "Only electrode area can matter"
        ]
      },
      {
        "id": "energy.c-cell7",
        "prompt": "A rechargeable cell receives an external electrical current. What restores its chemical store?",
        "options": [
          "Its chemical reactions reverse",
          "Its atoms are replaced by energy",
          "Its reactions become non-rechargeable"
        ],
        "answer": 0,
        "why": "Electrical energy drives the reverse reactions; energy is transferred into the chemical store.",
        "concept": "energy.cell-recharge"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1",
      "WS4.2",
      "MS1a",
      "AT6"
    ]
  },
  {
    "id": "science.chemistry.energy.fuel-cells",
    "title": "Hydrogen fuel cells",
    "short": "Hydrogen fuel cells",
    "refs": [
      "5.2.2"
    ],
    "separate": true,
    "higher": false,
    "minutes": 25,
    "widget": "cells-fuel",
    "prerequisites": [
      "science.chemistry.energy.cells-batteries"
    ],
    "big": "A hydrogen fuel cell generates electricity while hydrogen and oxygen are supplied. Compare the whole system and its use, not just its exhaust.",
    "learn": [
      {
        "title": "Supply the reaction.",
        "text": "Hydrogen fuel cells receive fuel from an external source and oxygen or air. Hydrogen is oxidised electrochemically, producing a potential difference that can drive current in an external circuit. Ions move internally. Electricity is produced without burning the hydrogen in a flame. The overall reaction is 2H₂ + O₂ → 2H₂O.",
        "scene": "cells:fuel"
      },
      {
        "title": "Refuel or recharge.",
        "text": "A fuel cell can continue operating while reactants are supplied and the cell remains functional. A rechargeable battery stores reactants internally and needs an external electrical supply to reverse its reactions during charging. A fuel-cell system needs a hydrogen store and refuelling infrastructure; fast refuelling can help in some applications, but access and cost matter.",
        "scene": "cells:fuel"
      },
      {
        "title": "Evaluate the whole system.",
        "text": "Water is the hydrogen fuel cell’s reaction product, but that does not prove zero environmental impact overall. Consider how hydrogen and charging electricity are produced, energy losses, storage and transport, cost, materials and useful lifetime. Use supplied evidence for a particular application. Reliable local charging may favour a battery; demanding turnaround with available hydrogen may favour a fuel cell. Neither is always best.",
        "scene": "cells:fuel"
      }
    ],
    "practice": [
      {
        "id": "energy.p-fuel1",
        "prompt": "What must be supplied externally to a hydrogen fuel cell?",
        "answer": 0,
        "why": "Fuel and oxidant are continuously supplied.",
        "concept": "energy.fuel-supply",
        "options": [
          "Hydrogen and oxygen or air",
          "Only water",
          "Electricity to recharge every reaction"
        ]
      },
      {
        "id": "energy.p-fuel2",
        "prompt": "Overall product of hydrogen reacting with oxygen in a fuel cell?",
        "answer": 1,
        "why": "Hydrogen is oxidised to water.",
        "concept": "energy.fuel-supply",
        "options": [
          "Carbon dioxide",
          "Water",
          "Hydrogen chloride"
        ]
      },
      {
        "id": "energy.p-fuel3",
        "prompt": "Water-only exhaust proves…",
        "answer": 1,
        "why": "Upstream production, storage and transport still matter.",
        "concept": "energy.fuel-evaluate",
        "options": [
          "No impact anywhere in production",
          "Only that the cell reaction makes water",
          "Hydrogen needs no energy to produce"
        ]
      }
    ],
    "check": [
      {
        "id": "energy.c-fuel1",
        "prompt": "The fuel in a hydrogen fuel cell is…",
        "answer": 0,
        "why": "Electrochemical oxidation generates the potential difference.",
        "concept": "energy.fuel-supply",
        "options": [
          "Oxidised electrochemically",
          "Burned only in a flame",
          "Recharged by creating atoms"
        ]
      },
      {
        "id": "energy.c-fuel2",
        "prompt": "Which overall equation is balanced?",
        "answer": 1,
        "why": "Four H and two O atoms on both sides.",
        "concept": "energy.fuel-supply",
        "options": [
          "H₂ + O₂ → H₂O",
          "2H₂ + O₂ → 2H₂O",
          "H₂O → H₂ + O₂"
        ]
      },
      {
        "id": "energy.c-fuel3",
        "prompt": "A site has cheap overnight charging, no hydrogen supply and no rapid-turnaround need. Which is best supported?",
        "answer": 0,
        "why": "The stated infrastructure and timing favour rechargeable storage.",
        "concept": "energy.fuel-evaluate",
        "options": [
          "Rechargeable battery",
          "Fuel cell regardless of supply",
          "Neither could store energy"
        ]
      },
      {
        "id": "energy.c-fuel4",
        "prompt": "A hydrogen fuel cell runs out of external hydrogen. What follows?",
        "answer": 1,
        "why": "Continuing operation needs fuel and oxygen.",
        "concept": "energy.fuel-supply",
        "options": [
          "It supplies current indefinitely",
          "Its sustained reaction stops without fuel",
          "It makes hydrogen from nothing"
        ]
      },
      {
        "id": "energy.c-fuel5",
        "prompt": "Which evidence is needed before claiming lower lifecycle emissions than a battery?",
        "answer": 1,
        "why": "Compare upstream energy and materials, not only local exhaust.",
        "concept": "energy.fuel-evaluate",
        "options": [
          "Only exhaust colour",
          "Hydrogen and electricity production plus system manufacture/use",
          "Only cell shape"
        ]
      },
      {
        "id": "energy.c-fuel6",
        "prompt": "A remote fleet has delivered hydrogen and must return to work quickly; battery charging would exceed its available stops. What supports a fuel-cell choice?",
        "answer": 0,
        "why": "The decision is conditional on supplied operational evidence.",
        "concept": "energy.fuel-evaluate",
        "options": [
          "The stated refuelling and turnaround conditions",
          "Fuel cells never wear out",
          "Hydrogen is always free"
        ]
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1",
      "WS4.2",
      "MS1a"
    ]
  },
  {
    "id": "science.chemistry.energy.fuel-half-equations",
    "title": "Fuel-cell half-equations",
    "short": "Fuel-cell half-equations",
    "refs": [
      "5.2.2"
    ],
    "separate": true,
    "higher": true,
    "minutes": 25,
    "widget": "cells-equations",
    "prerequisites": [
      "science.chemistry.changes.electrode-half-equations",
      "science.chemistry.energy.fuel-cells"
    ],
    "big": "Hydrogen loses electrons at the fuel electrode; oxygen gains them at the other electrode. Balance atoms and charge in the stated electrolyte.",
    "learn": [
      {
        "title": "Oxidation supplies electrons.",
        "text": "In an acidic hydrogen fuel cell: H₂ → 2H⁺ + 2e⁻. Hydrogen loses electrons at the negative anode; electrons flow through the external circuit to the positive cathode. Oxidation is always at the anode. A fuel cell generates electricity, so its electrode signs differ from driven electrolysis.",
        "scene": "cells:equations"
      },
      {
        "title": "Reduction completes the circuit.",
        "text": "At the acidic cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O. Oxygen gains electrons. Double the hydrogen equation before adding it to this oxygen equation. Cancel 4H⁺ and 4e⁻ to obtain 2H₂ + O₂ → 2H₂O. Charge and each element must balance; electrons do not remain in the overall equation.",
        "scene": "cells:equations"
      },
      {
        "title": "Use the stated electrolyte.",
        "text": "In an alkaline cell, hydroxide ions participate: 2H₂ + 4OH⁻ → 4H₂O + 4e⁻ at the anode; O₂ + 2H₂O + 4e⁻ → 4OH⁻ at the cathode. Add and cancel common species to recover the same water-forming overall equation. Do not mix an acidic half-equation with an alkaline partner. State symbols are optional here; whole-number scaled equivalents and reordered terms are accepted.",
        "scene": "cells:equations"
      }
    ],
    "practice": [
      {
        "id": "energy.p-fh1",
        "prompt": "Acidic fuel cell: write hydrogen oxidation from H₂ to H⁺.",
        "answer": "H2 -> 2H+ + 2e-",
        "why": "H atoms balance and right-hand charge is2−2=0.",
        "concept": "energy.fuel-equations",
        "type": "equation"
      },
      {
        "id": "energy.p-fh2",
        "prompt": "Acidic fuel cell: O₂ is reduced with H⁺ to water. Write its half-equation.",
        "answer": "O2 + 4H+ + 4e- -> 2H2O",
        "why": "Two O and four H atoms balance; +4−4=0.",
        "concept": "energy.fuel-equations",
        "type": "equation"
      },
      {
        "id": "energy.p-fh3",
        "prompt": "At the fuel-cell hydrogen electrode, electrons are…",
        "answer": 1,
        "why": "Hydrogen oxidation releases electrons.",
        "concept": "energy.fuel-equations",
        "options": [
          "Gained in reduction",
          "Released in oxidation",
          "Destroyed"
        ]
      }
    ],
    "check": [
      {
        "id": "energy.c-fh1",
        "prompt": "Write hydrogen oxidation in an acidic fuel cell.",
        "answer": "H2 -> 2H+ + 2e-",
        "why": "Hydrogen loses electrons; atoms and charge balance.",
        "concept": "energy.fuel-equations",
        "type": "equation"
      },
      {
        "id": "energy.c-fh2",
        "prompt": "Write oxygen reduction to water in an acidic fuel cell.",
        "answer": "O2 + 4H+ + 4e- -> 2H2O",
        "why": "Oxygen gains four electrons for each O₂.",
        "concept": "energy.fuel-equations",
        "type": "equation"
      },
      {
        "id": "energy.c-fh3",
        "prompt": "Alkaline cell: H₂ and OH⁻ form water and electrons. Write the balanced half-equation.",
        "answer": "H2 + 2OH- -> 2H2O + 2e-",
        "why": "Four H, two O and charge−2 balance.",
        "concept": "energy.fuel-equations",
        "type": "equation"
      },
      {
        "id": "energy.c-fh4",
        "prompt": "Alkaline cell: O₂, water and electrons form OH⁻. Write the half-equation.",
        "answer": "O2 + 2H2O + 4e- -> 4OH-",
        "why": "Four O, four H and charge−4 balance.",
        "concept": "energy.fuel-equations",
        "type": "equation"
      },
      {
        "id": "energy.c-fh5",
        "prompt": "In a generating fuel cell the anode is…",
        "answer": 1,
        "why": "Oxidation supplies electrons at the negative fuel electrode.",
        "concept": "energy.fuel-equations",
        "options": [
          "Positive and reducing oxygen",
          "Negative and oxidising hydrogen",
          "Always the same sign as in electrolysis"
        ]
      },
      {
        "id": "energy.c-fh6",
        "prompt": "After adding matching acidic electrode equations, what cancels?",
        "answer": 1,
        "why": "Cancel4e⁻ and4H⁺ after doubling the hydrogen half-equation.",
        "concept": "energy.fuel-equations",
        "options": [
          "Only oxygen atoms",
          "Electrons and H⁺ ions",
          "All water products"
        ]
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1",
      "WS4.2",
      "MS1a"
    ]
  }
];
export const cellConcepts={"energy.cell-voltage": "Cell voltage and controlled comparisons", "energy.cell-recharge": "Reactants and recharging", "energy.fuel-supply": "Fuel-cell supply and overall reaction", "energy.fuel-evaluate": "Evaluating energy storage systems", "energy.fuel-equations": "Fuel-cell electrode half-equations"};
