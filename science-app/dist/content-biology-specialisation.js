export const specialisationLessons=[
  {
    "id": "science.biology.cells.specialisation",
    "title": "Specialised cells",
    "short": "Structures suited to a job",
    "refs": [
      "1.1.3"
    ],
    "minutes": 35,
    "widget": "special-cell",
    "topicId": "science.biology.cell-biology",
    "big": "Explain an adaptation by linking a cell structure to the process it supports and the job the cell performs.",
    "learn": [
      {
        "title": "A sperm cell reaches an egg",
        "text": "A sperm cell is specialised for reaching and fertilising an egg. Its tail helps it move, while mitochondria in the middle region transfer energy through respiration for movement. The head contains genetic material. In the supplied model, an enzyme-containing acrosome at the head helps penetrate the egg’s outer layers. Connect each feature to its job; the cell does not contain a miniature developing organism.",
        "scene": "special:sperm"
      },
      {
        "title": "A nerve cell connects distant regions",
        "text": "A nerve cell, or neuron, carries electrical impulses. A long extension connects distant parts of an organism, while branched ends allow connections with other cells. Many neurons have an insulating myelin sheath that helps impulses travel efficiently. Neurons differ in shape; this is one schematic example, not a rule that every neuron has identical branches or insulation.",
        "scene": "special:nerve"
      },
      {
        "title": "A muscle cell generates force",
        "text": "Muscle cells contain protein structures that slide relative to each other, allowing contraction and force. Many mitochondria support the energy demand of repeated activity through respiration. A long fibre arrangement helps force act along the muscle. More mitochondria do not themselves make a cell contract: the contractile structures provide that ability.",
        "scene": "special:muscle"
      },
      {
        "title": "A root hair increases contact",
        "text": "A root hair cell has a long projection that increases its surface area in contact with soil solution. This supports uptake of water and mineral ions. It does not need chloroplasts for its underground role. The projection is part of one cell, not a miniature root or a separate organism. The membrane controls exchange; uptake mechanisms are studied in later transport lessons.",
        "scene": "special:root"
      },
      {
        "title": "Xylem forms an open water pathway",
        "text": "Mature xylem vessels are formed from dead cells whose contents and end walls have been lost, leaving a hollow pathway for water and dissolved mineral ions. Lignin strengthens the walls and helps prevent collapse; xylem also supports the plant. Mature conducting xylem vessel cells do not retain a functioning nucleus or cytoplasm. The model shows a short section, not the full length of a vessel.",
        "scene": "special:xylem"
      },
      {
        "title": "Phloem moves dissolved sugars",
        "text": "Phloem transports dissolved sugars around a plant. Living sieve-tube elements join end to end; perforated end plates allow sap to pass between them. Companion cells provide metabolic support. Mature sieve-tube elements lack a nucleus, while companion cells retain one. Do not confuse these specialised living tissues with dead hollow xylem vessels, or imply that every cell in phloem lacks a nucleus.",
        "scene": "special:phloem"
      }
    ],
    "practice": [
      {
        "id": "bio.p-special1",
        "prompt": "A sperm model shows a tail and many mitochondria in its middle region. Best linked explanation?",
        "options": [
          "The tail provides movement and respiration transfers energy for it",
          "Mitochondria store a miniature embryo",
          "The tail carries out photosynthesis"
        ],
        "answer": 0,
        "why": "An adaptation explanation links a structure to a process and function.",
        "concept": "bio.special-animal"
      },
      {
        "id": "bio.p-special2",
        "prompt": "Why can a long branched nerve cell be useful?",
        "options": [
          "It becomes a hollow water tube",
          "It connects distant regions and other cells",
          "It absorbs soil water"
        ],
        "answer": 1,
        "why": "Length and branches support communication.",
        "concept": "bio.special-animal"
      },
      {
        "id": "bio.p-special3",
        "prompt": "What does a root hair projection primarily increase?",
        "options": [
          "Number of nuclei",
          "Photosynthesis underground",
          "Surface area contacting soil solution"
        ],
        "answer": 2,
        "why": "Greater contact surface supports exchange with the soil.",
        "concept": "bio.special-plant"
      },
      {
        "id": "bio.p-special4",
        "prompt": "Which contrast is correct?",
        "options": [
          "Both mature xylem vessels and sieve tubes are ordinary nucleated cells",
          "Xylem conducts water in dead hollow vessels; phloem transports sugars using living tissue",
          "Phloem transports only mineral ions upward"
        ],
        "answer": 1,
        "why": "The two tissues have different transport roles and structures.",
        "concept": "bio.special-transport"
      }
    ],
    "check": [
      {
        "id": "bio.c-special1",
        "prompt": "Which specialised cell is represented by this unlabelled schematic?",
        "options": [
          "Sperm cell",
          "Root hair cell",
          "Nerve cell"
        ],
        "answer": 0,
        "why": "A head, middle region and long tail fit a sperm cell.",
        "concept": "bio.special-animal",
        "figure": {
          "kind": "bio-special",
          "type": "sperm",
          "adapted": true
        }
      },
      {
        "id": "bio.c-special2",
        "prompt": "A cell must carry impulses between distant regions. Which adaptation best fits?",
        "options": [
          "A long extension with connections to other cells",
          "A cellulose wall only",
          "No membrane"
        ],
        "answer": 0,
        "why": "Length and branched connections support communication.",
        "concept": "bio.special-animal",
        "figure": {
          "kind": "bio-special",
          "type": "nerve",
          "adapted": true
        }
      },
      {
        "id": "bio.c-special3",
        "prompt": "A muscle cell has many mitochondria. What does this support?",
        "options": [
          "Storage of soil mineral ions",
          "Energy transfer through respiration for repeated contraction",
          "Photosynthesis"
        ],
        "answer": 1,
        "why": "Respiration supports activity; contractile proteins produce shortening.",
        "concept": "bio.special-animal",
        "figure": {
          "kind": "bio-special",
          "type": "muscle",
          "adapted": true
        }
      },
      {
        "id": "bio.c-special4",
        "prompt": "The projection shown in this plant-cell schematic is useful because it…",
        "options": [
          "Increases the soil-contacting surface for uptake",
          "Contains every plant organ",
          "Makes a separate root inside the cell"
        ],
        "answer": 0,
        "why": "The extended surface supports water and mineral uptake.",
        "concept": "bio.special-plant",
        "figure": {
          "kind": "bio-special",
          "type": "root",
          "adapted": true
        }
      },
      {
        "id": "bio.c-special5",
        "prompt": "Which feature supports water movement through mature xylem vessels?",
        "options": [
          "Dense living cytoplasm blocking the lumen",
          "A large functioning nucleus in every mature vessel cell",
          "A hollow continuous pathway with lost cell contents"
        ],
        "answer": 2,
        "why": "Dead vessel cells leave an open lumen; lignified walls strengthen it.",
        "concept": "bio.special-transport",
        "figure": {
          "kind": "bio-special",
          "type": "xylem",
          "adapted": true
        }
      },
      {
        "id": "bio.c-special6",
        "prompt": "Perforated end plates in phloem sieve tubes help…",
        "options": [
          "Water become a solid",
          "Dissolved sugars pass between tube elements",
          "The tube become a nerve"
        ],
        "answer": 1,
        "why": "Phloem sap moves through connections between living sieve-tube elements.",
        "concept": "bio.special-transport",
        "figure": {
          "kind": "bio-special",
          "type": "phloem",
          "adapted": true
        }
      },
      {
        "id": "bio.c-special7",
        "prompt": "Which statement avoids a misleading nucleus claim?",
        "options": [
          "Mature xylem vessels retain active nuclei",
          "Every plant cell has an active nucleus throughout life",
          "Mature sieve-tube elements lack nuclei; companion cells retain them"
        ],
        "answer": 2,
        "why": "Specialised cells can differ from the typical plant-cell diagram.",
        "concept": "bio.special-transport"
      },
      {
        "id": "bio.c-special8",
        "prompt": "A new muscle-cell model has many mitochondria but no contractile structures. What is the best criticism?",
        "options": [
          "Energy supply alone does not provide a contraction mechanism",
          "Mitochondria are the contraction proteins",
          "No muscle cell needs respiration"
        ],
        "answer": 0,
        "why": "A structure-function explanation must include the mechanism generating force.",
        "concept": "bio.special-animal"
      },
      {
        "id": "bio.c-special9",
        "prompt": "A diagram enlarges a root hair to show its structure. What can you infer without a scale?",
        "options": [
          "It is really larger than every nerve cell",
          "Its shape includes a projection, but its real size needs scale information",
          "Its projected area is the exact real area"
        ],
        "answer": 1,
        "why": "Schematic form can show an adaptation without establishing true size.",
        "concept": "bio.special-model"
      },
      {
        "id": "bio.c-special10",
        "prompt": "A sperm cell’s middle region contains many mitochondria. How does this support its function?",
        "options": [
          "Respiration transfers energy for tail movement",
          "The mitochondria make cellulose",
          "The mitochondria replace the head’s genetic material"
        ],
        "answer": 0,
        "why": "Connect respiratory energy transfer to the movement used to reach an egg.",
        "concept": "bio.special-animal"
      },
      {
        "id": "bio.c-special11",
        "prompt": "Lignin strengthens a mature xylem vessel wall. Why is this useful?",
        "options": [
          "It makes the vessel photosynthesise",
          "It helps prevent collapse and supports the plant",
          "It gives a dead vessel a functioning nucleus"
        ],
        "answer": 1,
        "why": "Strengthened walls help keep the water pathway open and contribute support.",
        "concept": "bio.special-transport"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.cell-structures"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.cells.differentiation",
    "title": "Cell differentiation",
    "short": "Developing a specialised role",
    "refs": [
      "1.1.4"
    ],
    "minutes": 25,
    "widget": "cell-fate",
    "topicId": "science.biology.cell-biology",
    "big": "Differentiation gives cells specialised structures and roles. It differs from division, which increases cell number.",
    "learn": [
      {
        "title": "Differentiation changes what a cell can do",
        "text": "Differentiation is the process by which a cell develops specialised features for a particular function. It acquires or changes sub-cellular structures as it specialises. For example, developing muscle cells build contractile structures and a suitable energy supply. This allows different cells to perform different roles in tissues, organs and the organism.",
        "scene": "fate:animal"
      },
      {
        "title": "Most animal cells specialise early",
        "text": "Most types of animal cell differentiate at an early stage of development. In mature animals, cell division is mainly used for repair and replacement rather than unrestricted growth. Some cells retain the capacity to produce particular replacement cells; this does not mean every mature specialised animal cell can freely become any other type. Stem cells are explored in a separate lesson.",
        "scene": "fate:animal"
      },
      {
        "title": "Many plant cells retain more flexibility",
        "text": "Many types of plant cells retain the ability to differentiate throughout life. New specialised cells can therefore develop as a plant grows, for example into root or transport tissues in the appropriate context. Many does not mean every mature plant cell: a dead mature xylem vessel cannot become a different living cell.",
        "scene": "fate:plant"
      },
      {
        "title": "Separate differentiation from division",
        "text": "Cell division increases cell number; differentiation changes cells’ structures and roles. A cell may divide before its descendants differentiate, so both processes can contribute to development, but they are not the same event. A model branch represents a possible developmental route under suitable conditions, not instant transformation of a mature cell. Identify the evidence: more cells suggests division; acquisition of function-related structures supports differentiation.",
        "scene": "fate:adult"
      }
    ],
    "practice": [
      {
        "id": "bio.p-fate1",
        "prompt": "A developing cell acquires structures suited to a particular job. This is…",
        "options": [
          "Differentiation",
          "Only evaporation",
          "Necessarily fertilisation"
        ],
        "answer": 0,
        "why": "Specialised structures and function develop during differentiation.",
        "concept": "bio.differentiation"
      },
      {
        "id": "bio.p-fate2",
        "prompt": "One cell becomes two cells. What process does that observation directly show?",
        "options": [
          "Differentiation only",
          "Cell division",
          "A change from animal to plant"
        ],
        "answer": 1,
        "why": "Increased cell number directly indicates division; specialisation needs other evidence.",
        "concept": "bio.division-vs-fate"
      },
      {
        "id": "bio.p-fate3",
        "prompt": "Which statement matches the broad developmental contrast?",
        "options": [
          "Every plant cell can become any cell",
          "Animal cells never differentiate",
          "Most animal types differentiate early; many plant types retain this ability"
        ],
        "answer": 2,
        "why": "These are broad patterns, not unrestricted rules for every cell.",
        "concept": "bio.fate-patterns"
      },
      {
        "id": "bio.p-fate4",
        "prompt": "Cell division in a mature animal is mainly important for…",
        "options": [
          "Repair and replacement",
          "Making every cell into a sperm",
          "Forming cellulose walls"
        ],
        "answer": 0,
        "why": "Mature animal division mainly replaces lost or damaged cells.",
        "concept": "bio.fate-patterns"
      }
    ],
    "check": [
      {
        "id": "bio.c-fate1",
        "prompt": "Why is differentiation important in a multicellular organism?",
        "options": [
          "It allows cells with different structures to carry out different roles",
          "It removes all need for cell division",
          "It makes every cell identical in function"
        ],
        "answer": 0,
        "why": "Specialised cells cooperate in tissues and organs.",
        "concept": "bio.differentiation"
      },
      {
        "id": "bio.c-fate2",
        "prompt": "Which change is evidence of differentiation?",
        "options": [
          "A cell acquires contractile structures for a muscle role",
          "A printed cell picture becomes larger",
          "A sample is divided into two test tubes"
        ],
        "answer": 0,
        "why": "Acquiring function-related sub-cellular structures supports specialisation.",
        "concept": "bio.differentiation"
      },
      {
        "id": "bio.c-fate3",
        "prompt": "Which statement is accurate for most types of animal cell?",
        "options": [
          "They only differentiate after the animal dies",
          "They differentiate at an early developmental stage",
          "They can always become any mature cell type"
        ],
        "answer": 1,
        "why": "Most animal-cell types specialise early.",
        "concept": "bio.fate-patterns"
      },
      {
        "id": "bio.c-fate4",
        "prompt": "Which statement is accurate for many types of plant cell?",
        "options": [
          "They retain the ability to differentiate throughout life",
          "Every mature plant cell can freely become any other",
          "They cannot ever specialise"
        ],
        "answer": 0,
        "why": "Many plant-cell types retain differentiation ability, but there are exceptions.",
        "concept": "bio.fate-patterns"
      },
      {
        "id": "bio.c-fate5",
        "prompt": "In mature animals, division mainly supports…",
        "options": [
          "Only new body plans",
          "Photosynthesis",
          "Repair and replacement"
        ],
        "answer": 2,
        "why": "Growth-related developmental processes differ from the main adult role.",
        "concept": "bio.fate-patterns"
      },
      {
        "id": "bio.c-fate6",
        "prompt": "A model shows one cell dividing into two, followed by descendants developing different structures. Which interpretation fits?",
        "options": [
          "Division increased number; differentiation changed roles",
          "Both steps are necessarily the same process",
          "Differentiation means only producing more identical cells"
        ],
        "answer": 0,
        "why": "Separate cell-number change from acquisition of specialised features.",
        "concept": "bio.division-vs-fate"
      },
      {
        "id": "bio.c-fate7",
        "prompt": "A learner says every mature specialised animal cell can become any other type. Best correction?",
        "options": [
          "Correct: all specialised cells transform freely",
          "Differentiation abilities are restricted; the statement is too broad",
          "Only mature xylem can do this"
        ],
        "answer": 1,
        "why": "Some replacement-producing cells retain particular capacities, but unrestricted transformation is not the general rule.",
        "concept": "bio.fate-patterns"
      },
      {
        "id": "bio.c-fate8",
        "prompt": "Why should a plant-development model not show a dead mature xylem vessel becoming a living root hair?",
        "options": [
          "It is dead and cannot freely differentiate into a new living type",
          "It needs only a new diagram colour",
          "All plant cells always become root hairs"
        ],
        "answer": 0,
        "why": "Many plant types retain flexibility; dead mature vessels do not.",
        "concept": "bio.fate-patterns"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.specialisation"
    ],
    "separate": false,
    "higher": false
  }
];
export const specialisationConcepts={
  "bio.special-animal": "Animal-cell adaptations and function",
  "bio.special-plant": "Root-hair structure and uptake",
  "bio.special-transport": "Xylem and phloem adaptations",
  "bio.special-model": "Limits of specialised-cell models",
  "bio.differentiation": "Acquiring specialised structures and functions",
  "bio.division-vs-fate": "Differentiation compared with division",
  "bio.fate-patterns": "Animal and plant differentiation patterns"
};
