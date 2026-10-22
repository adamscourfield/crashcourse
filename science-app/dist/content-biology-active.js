export const activeLessons=[
  {
    "id": "science.biology.cells.active-transport",
    "title": "Active transport",
    "short": "Move against the gradient",
    "refs": [
      "1.3.3"
    ],
    "minutes": 25,
    "widget": "active-lab",
    "topicId": "science.biology.cell-biology",
    "big": "Active transport uses energy from respiration to move substances from a lower to a higher concentration. Roots and the gut provide useful examples.",
    "learn": [
      {
        "title": "Move against the concentration gradient",
        "text": "Active transport moves a substance from a more dilute solution to a more concentrated solution, against that substance’s concentration gradient. This requires energy transferred from respiration. Membrane transport machinery uses this energy to move particular substances; the simple model shows selective transfer, not a machine pushing every particle indiscriminately.",
        "scene": "active:energy"
      },
      {
        "title": "Recover mineral ions from dilute soil",
        "text": "Plant root hair cells can absorb mineral ions from very dilute soil solutions even when ion concentration is already higher inside the root cells. Active transport supplies movement against the mineral-ion gradient. Plants need mineral ions for healthy growth. The root hair’s large surface area helps exchange, but area alone cannot explain net uptake against a gradient.",
        "scene": "active:root"
      },
      {
        "title": "Absorb sugar when the gut concentration is lower",
        "text": "Active transport can allow sugar molecules to be absorbed from a lower concentration in the gut into blood with a higher sugar concentration. The example describes the overall absorption route rather than every microscopic transfer step. Sugar molecules are used in cell respiration. Do not assume every sugar molecule is always transported actively: direction and conditions determine which explanation the supplied evidence supports.",
        "scene": "active:gut"
      },
      {
        "title": "Separate energy supply from random motion",
        "text": "If usable energy for active transport is unavailable, the against-gradient transport process cannot continue as shown. This does not make all particles stop moving or remove all possible diffusion and osmosis. Those passive processes can continue when their conditions permit. The model’s energy indicator is qualitative, not a measured ATP budget or evidence of an actual tissue experiment.",
        "scene": "active:energy"
      }
    ],
    "practice": [
      {
        "id": "bio.p-active1",
        "prompt": "What distinguishes active transport?",
        "options": [
          "Net movement against a concentration gradient using energy from respiration",
          "Water movement through every solid wall",
          "Net movement only down a gradient with no respiratory energy requirement"
        ],
        "answer": 0,
        "why": "Lower-to-higher movement requires an energy-linked process.",
        "concept": "bio.active-direction"
      },
      {
        "id": "bio.p-active2",
        "prompt": "Mineral-ion concentration is lower in soil than inside a root hair. Which explanation supports continued net uptake?",
        "options": [
          "Diffusion alone must move lower to higher",
          "Active transport using energy from respiration",
          "The root hair makes all mineral ions from water"
        ],
        "answer": 1,
        "why": "The ion gradient opposes the uptake described.",
        "concept": "bio.active-root"
      },
      {
        "id": "bio.p-active3",
        "prompt": "Which supplied sugar-absorption case needs an against-gradient explanation?",
        "options": [
          "Gut sugar high; blood sugar low; movement towards blood",
          "No membrane and equal solutions",
          "Gut sugar low; blood sugar higher; net uptake into blood"
        ],
        "answer": 2,
        "why": "Net movement from the lower concentration towards the higher is against the gradient.",
        "concept": "bio.active-gut"
      },
      {
        "id": "bio.p-active4",
        "prompt": "Energy-linked uptake stops. Which claim is too broad?",
        "options": [
          "Every particle in the cell has stopped moving",
          "This active transport needs an energy supply",
          "Diffusion may still occur under suitable conditions"
        ],
        "answer": 0,
        "why": "Random motion and passive exchange are not switched off by stopping a model pump.",
        "concept": "bio.active-energy"
      }
    ],
    "check": [
      {
        "id": "bio.c-active1",
        "prompt": "Active transport moves a substance…",
        "options": [
          "From lower to higher concentration using energy from respiration",
          "Only from outside to inside in every case",
          "Only if it is water"
        ],
        "answer": 0,
        "why": "The defining comparison is the substance gradient and energy requirement, not a fixed inside/outside direction.",
        "concept": "bio.active-direction"
      },
      {
        "id": "bio.c-active2",
        "prompt": "Equal-volume compartments contain the same solute at the indicated relative concentrations. Proposed net transfer is left→right. Which statement fits?",
        "options": [
          "This necessarily needs no energy because particles exist",
          "It is against the gradient and requires an energy-linked process",
          "It is osmosis of the solute"
        ],
        "answer": 1,
        "why": "The move4→12 goes from lower to higher solute concentration.",
        "concept": "bio.active-direction",
        "figure": {
          "kind": "bio-transport",
          "mode": "active",
          "left": 4,
          "right": 12
        }
      },
      {
        "id": "bio.c-active3",
        "prompt": "Why is active transport useful to a root hair in very dilute soil?",
        "options": [
          "It lets the cell make mineral atoms from nothing",
          "It means mineral ions are not needed for growth",
          "It allows mineral uptake even when the cell concentration is higher"
        ],
        "answer": 2,
        "why": "A plant can acquire needed ions against their gradient.",
        "concept": "bio.active-root"
      },
      {
        "id": "bio.c-active4",
        "prompt": "Plants require mineral ions for…",
        "options": [
          "Healthy growth",
          "Replacing every water molecule",
          "Stopping all respiration"
        ],
        "answer": 0,
        "why": "Root uptake supplies mineral ions needed for plant functions and growth.",
        "concept": "bio.active-root"
      },
      {
        "id": "bio.c-active5",
        "prompt": "Gut sugar concentration is3 units; blood is8 units. Net absorption from gut into blood is…",
        "options": [
          "Automatically simple diffusion",
          "Against the sugar gradient",
          "Osmosis of sugar molecules"
        ],
        "answer": 1,
        "why": "The stated transfer goes lower→higher and supports an active-transport explanation.",
        "concept": "bio.active-gut"
      },
      {
        "id": "bio.c-active6",
        "prompt": "What role do absorbed sugar molecules have in the specified example?",
        "options": [
          "They are used in cell respiration",
          "They are all converted directly to cellulose in blood",
          "They replace the need for every mineral ion"
        ],
        "answer": 0,
        "why": "Sugar provides material used in respiration; the lesson does not say every molecule has only one possible fate.",
        "concept": "bio.active-gut"
      },
      {
        "id": "bio.c-active7",
        "prompt": "The direct energy source required by the GCSE active-transport explanation is…",
        "options": [
          "Only the colour of the membrane",
          "Only random particle collisions with no biological energy link",
          "Energy transferred from respiration"
        ],
        "answer": 2,
        "why": "Active transport is energy dependent, unlike the passive processes compared here.",
        "concept": "bio.active-energy"
      },
      {
        "id": "bio.c-active8",
        "prompt": "A model turns off usable energy for its active transporter. Which interpretation is justified?",
        "options": [
          "The against-gradient transporter stops; random movement/passive transfer may continue",
          "All diffusion in every tissue must stop instantly",
          "Every particle becomes motionless"
        ],
        "answer": 0,
        "why": "Do not equate transporter activity with all molecular motion.",
        "concept": "bio.active-energy"
      },
      {
        "id": "bio.c-active9",
        "prompt": "A root hair has a large surface but must take ions from low outside concentration to high inside concentration. Which explanation is complete?",
        "options": [
          "Area alone reverses the diffusion gradient",
          "Large area helps exchange; active transport supplies energy-linked against-gradient uptake",
          "A cellulose wall creates all ions"
        ],
        "answer": 1,
        "why": "Geometry and transport mechanism answer different parts of the explanation.",
        "concept": "bio.active-root"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.diffusion",
      "science.biology.cells.specialisation"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.cells.transport-comparison",
    "title": "Compare cell transport",
    "short": "Substance, gradient and energy",
    "refs": [
      "1.3.1",
      "1.3.2",
      "1.3.3"
    ],
    "minutes": 25,
    "widget": "transport-compare",
    "topicId": "science.biology.cell-biology",
    "big": "Identify transport from the substance, concentration gradient and membrane/energy conditions. Into or out of a cell alone is not enough.",
    "learn": [
      {
        "title": "Track the substance and its gradient",
        "text": "Diffusion spreads particles in a gas or solution, producing net movement from higher to lower concentration. Oxygen, carbon dioxide and urea are examples in earlier lessons. Suitable substances can cross membranes if able to pass. Diffusion is passive: it does not require energy supplied by cell respiration, although the particles have thermal motion. Net direction can be into or out of a cell.",
        "scene": "transport:diffusion"
      },
      {
        "title": "Reserve osmosis for water",
        "text": "Osmosis is diffusion of water from a dilute solution to a more concentrated solution through a partially permeable membrane. Describe the water and the relative solutions; do not call solute uptake osmosis. In the ideal model, water can cross but the supplied solute cannot. Osmosis is passive and does not need energy supplied by respiration. Water can enter or leave a cell depending on the surrounding solution.",
        "scene": "transport:osmosis"
      },
      {
        "title": "Identify energy-linked transfer",
        "text": "Active transport moves a specified substance from lower to higher concentration, against its gradient, using energy from respiration. A label saying into the cell is not enough to identify it: oxygen can diffuse inward, water can enter by osmosis, and ions may be transported actively inward. The concentration and substance evidence distinguish these cases.",
        "scene": "transport:active"
      },
      {
        "title": "Explain a case using all the evidence",
        "text": "Ask three questions: what substance moves, in which net direction relative to its concentration, and what membrane/energy conditions are supplied? The processes can occur in the same living cell without becoming the same mechanism. At equal concentrations passive particles can still cross both ways without net movement. Stopping an active transporter does not by itself prove that all diffusion and osmosis have stopped. Models and particle counts are qualitative illustrations rather than recorded rates.",
        "scene": "transport:diffusion"
      }
    ],
    "practice": [
      {
        "id": "bio.p-compare1",
        "prompt": "Water moves from a dilute solution into a more concentrated one through a partially permeable membrane. Process?",
        "options": [
          "Osmosis",
          "Active transport of solute",
          "Division"
        ],
        "answer": 0,
        "why": "Water plus selective membrane plus relative solutions identifies osmosis.",
        "concept": "bio.transport-distinguish"
      },
      {
        "id": "bio.p-compare2",
        "prompt": "A gas spreads from higher to lower concentration. Process?",
        "options": [
          "Osmosis because all particles are water",
          "Diffusion",
          "Active transport because it moves"
        ],
        "answer": 1,
        "why": "Gas diffusion follows its concentration gradient.",
        "concept": "bio.transport-distinguish"
      },
      {
        "id": "bio.p-compare3",
        "prompt": "Which pair does not require energy supplied by cell respiration?",
        "options": [
          "Active transport and mitosis",
          "Only active transport",
          "Diffusion and osmosis"
        ],
        "answer": 2,
        "why": "They are passive processes; thermal particle motion is not the same as respiratory energy supply.",
        "concept": "bio.transport-energy"
      },
      {
        "id": "bio.p-compare4",
        "prompt": "A learner only says “particles move into a cell”. Best next question?",
        "options": [
          "Which substance, concentration gradient and conditions are involved?",
          "Is the cell illustration blue?",
          "How many words are in the cell name?"
        ],
        "answer": 0,
        "why": "Direction relative to the cell alone does not identify a transport mechanism.",
        "concept": "bio.transport-evidence"
      }
    ],
    "check": [
      {
        "id": "bio.c-compare1",
        "prompt": "Oxygen outside a cell is more concentrated than inside and crosses a suitable membrane inward. Best explanation?",
        "options": [
          "Diffusion down the oxygen gradient",
          "Osmosis of oxygen",
          "Active transport must occur whenever movement is inward"
        ],
        "answer": 0,
        "why": "The substance and higher→lower direction identify diffusion.",
        "concept": "bio.transport-distinguish"
      },
      {
        "id": "bio.c-compare2",
        "prompt": "A solute is moved from low concentration to high concentration using energy from respiration. Process?",
        "options": [
          "Osmosis",
          "Active transport",
          "Simple diffusion down its gradient"
        ],
        "answer": 1,
        "why": "An energy-linked against-gradient transfer is active transport.",
        "concept": "bio.transport-distinguish"
      },
      {
        "id": "bio.c-compare3",
        "prompt": "Which condition is essential in the GCSE osmosis definition?",
        "options": [
          "Every solute must cross freely",
          "A nucleus is destroyed",
          "A partially permeable membrane separates the solutions"
        ],
        "answer": 2,
        "why": "Water moves across the selective barrier.",
        "concept": "bio.transport-distinguish"
      },
      {
        "id": "bio.c-compare4",
        "prompt": "Diffusion and osmosis are both passive, meaning…",
        "options": [
          "They do not require energy supplied by cell respiration",
          "No particles have any energy or movement",
          "They only occur outside living things"
        ],
        "answer": 0,
        "why": "Thermal motion still occurs; passive refers to the respiratory energy requirement.",
        "concept": "bio.transport-energy"
      },
      {
        "id": "bio.c-compare5",
        "prompt": "Equal-volume compartments contain a permeant solute at the shown relative concentrations. What net direction does diffusion predict?",
        "options": [
          "Left→right, from12 towards4",
          "Right→left, from4 towards12",
          "No movement of any molecule"
        ],
        "answer": 0,
        "why": "Net diffusion follows higher to lower concentration while individual particles move randomly.",
        "concept": "bio.transport-evidence",
        "figure": {
          "kind": "bio-transport",
          "mode": "diffusion",
          "left": 12,
          "right": 4
        }
      },
      {
        "id": "bio.c-compare6",
        "prompt": "Two sides in a suitable passive-exchange model reach equal concentrations. What continues?",
        "options": [
          "Only against-gradient transfer without energy",
          "Random movement, balanced overall",
          "Permanent stillness of all particles"
        ],
        "answer": 1,
        "why": "Equal concentrations remove the net gradient but not motion.",
        "concept": "bio.transport-energy"
      },
      {
        "id": "bio.c-compare7",
        "prompt": "A plant cell absorbs water and mineral ions at the same time. Which is a sound explanation?",
        "options": [
          "They must both use exactly the same mechanism",
          "Water is always actively transported because it enters",
          "Water may enter by osmosis while ions use active transport under the stated gradients"
        ],
        "answer": 2,
        "why": "Different substances can use different mechanisms in one cell.",
        "concept": "bio.transport-evidence"
      },
      {
        "id": "bio.c-compare8",
        "prompt": "Which answer uses enough evidence to explain a transport process?",
        "options": [
          "Sugar moves lower→higher using respiratory energy, so active transport is involved",
          "The arrow points into a cell, so the process is known",
          "The particles are purple, so osmosis must occur"
        ],
        "answer": 0,
        "why": "Identify substance, gradient and energy/membrane conditions rather than decorative cues.",
        "concept": "bio.transport-evidence"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.diffusion",
      "science.biology.cells.osmosis",
      "science.biology.cells.active-transport"
    ],
    "separate": false,
    "higher": false
  }
];
export const activeConcepts={
  "bio.active-direction": "Against-gradient active transport",
  "bio.active-root": "Root mineral-ion uptake and healthy growth",
  "bio.active-gut": "Sugar absorption against a gradient",
  "bio.active-energy": "Respiratory energy and transport limits",
  "bio.transport-distinguish": "Diffusion, osmosis and active transport definitions",
  "bio.transport-energy": "Passive motion versus energy-linked transport",
  "bio.transport-evidence": "Use substance, gradient and membrane evidence"
};
