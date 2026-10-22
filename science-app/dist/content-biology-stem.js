export const stemLessons=[
  {
    "id": "science.biology.cells.stem-cells",
    "title": "Stem cells & cell potential",
    "short": "Keep a supply, develop a role",
    "refs": [
      "1.2.3"
    ],
    "minutes": 25,
    "widget": "stem-lineage",
    "topicId": "science.biology.cell-biology",
    "big": "Stem cells can produce more cells of their own type and give rise to specialised cells. Their potential depends on the source.",
    "learn": [
      {
        "title": "Keep a stem-cell supply",
        "text": "A stem cell is an undifferentiated cell that can give rise to more cells of the same type and to certain other cell types by differentiation. Producing further stem cells maintains the stem-cell supply; differentiation produces cells with specialised structures and roles. This does not mean every daughter must differentiate, or that every mature specialised cell is a stem cell.",
        "scene": "stem:embryo"
      },
      {
        "title": "Embryonic cells have broad potential",
        "text": "Stem cells from human embryos can be cloned to make more cells and made to differentiate into most different human cell types. Their potential is broad, not a claim that a single mature skin cell freely changes into any other type. Detailed techniques used to culture or direct the cells are not required here. The branching model shows possible cell fates under suitable conditions, not guaranteed outcomes.",
        "scene": "stem:embryo"
      },
      {
        "title": "Bone marrow has more restricted roles",
        "text": "Adult bone marrow contains stem cells capable of forming many cell types, including blood cells. Their potential is more restricted than that of embryonic stem cells; do not infer that adult marrow cells can form every type of human cell. Producing replacement blood cells is one important function. The example blood-cell branches are a teaching model, not a complete medical classification.",
        "scene": "stem:marrow"
      },
      {
        "title": "Meristems support plant growth",
        "text": "Plant meristems contain cells that retain the ability to differentiate into any type of plant cell throughout the plant’s life. New cells can develop into tissues suited to the plant’s needs. Any plant cell type does not mean any animal cell type, and it does not mean every mature plant cell retains this capacity. A dead mature xylem vessel is not a living meristem cell.",
        "scene": "stem:meristem"
      }
    ],
    "practice": [
      {
        "id": "bio.p-stem1",
        "prompt": "Which statement defines a stem cell?",
        "options": [
          "An undifferentiated cell able to make more of its type and give rise to certain other types",
          "Every cell with a nucleus",
          "A mature dead xylem vessel"
        ],
        "answer": 0,
        "why": "Stem cells combine further cell production with differentiation potential.",
        "concept": "bio.stem-definition"
      },
      {
        "id": "bio.p-stem2",
        "prompt": "Which comparison is accurate?",
        "options": [
          "Adult marrow cells always make every human cell",
          "Embryonic cells can form most human types; marrow cells have more restricted potential",
          "Embryonic cells can only make blood"
        ],
        "answer": 1,
        "why": "Different sources have different differentiation capacities.",
        "concept": "bio.stem-capacity"
      },
      {
        "id": "bio.p-stem3",
        "prompt": "Which source can form any plant cell type throughout life?",
        "options": [
          "A mature human nerve cell",
          "Every dead plant cell",
          "Meristem tissue"
        ],
        "answer": 2,
        "why": "Meristem cells retain broad plant differentiation potential.",
        "concept": "bio.stem-meristem"
      },
      {
        "id": "bio.p-stem4",
        "prompt": "A stem-cell population must maintain its supply while producing specialised cells. Which outcome fits?",
        "options": [
          "Some descendants remain stem cells while others differentiate",
          "Every stem cell must instantly become a mature cell",
          "No descendant can ever specialise"
        ],
        "answer": 0,
        "why": "Maintaining the stem-cell pool differs from making specialised descendants.",
        "concept": "bio.stem-definition"
      }
    ],
    "check": [
      {
        "id": "bio.c-stem1",
        "prompt": "Which property distinguishes a stem cell from a fully specialised cell in this lesson?",
        "options": [
          "Ability to produce more stem cells and certain differentiated types",
          "Absence of any DNA",
          "A cellulose wall in all cases"
        ],
        "answer": 0,
        "why": "Stem cells are undifferentiated and retain developmental capacities.",
        "concept": "bio.stem-definition"
      },
      {
        "id": "bio.c-stem2",
        "prompt": "What is the purpose of producing more cells of the same stem-cell type?",
        "options": [
          "To guarantee that every cell becomes a neuron",
          "To maintain a stem-cell supply",
          "To stop all division"
        ],
        "answer": 1,
        "why": "Self-renewal sustains the source of new cells.",
        "concept": "bio.stem-definition"
      },
      {
        "id": "bio.c-stem3",
        "prompt": "Human embryonic stem cells can be made to differentiate into…",
        "options": [
          "Only one blood-cell type",
          "Every possible organism",
          "Most different human cell types"
        ],
        "answer": 2,
        "why": "AQA describes broad human-cell potential, not unrestricted cross-species transformation.",
        "concept": "bio.stem-capacity"
      },
      {
        "id": "bio.c-stem4",
        "prompt": "Which proposed outcome fits the stated adult marrow capacity?",
        "options": [
          "Production of replacement blood cells",
          "Automatic production of every human tissue",
          "Production of a plant leaf"
        ],
        "answer": 0,
        "why": "Bone-marrow stem cells can form many types including blood, but are more restricted than embryonic cells.",
        "concept": "bio.stem-capacity"
      },
      {
        "id": "bio.c-stem5",
        "prompt": "A model gives adult marrow cells every human-cell fate without qualification. Best criticism?",
        "options": [
          "It is too restricted",
          "It overstates their differentiation potential",
          "It correctly shows all mature cells as identical"
        ],
        "answer": 1,
        "why": "Do not treat adult marrow potential as equivalent to embryonic potential.",
        "concept": "bio.stem-capacity"
      },
      {
        "id": "bio.c-stem6",
        "prompt": "Meristem cells can differentiate into…",
        "options": [
          "Any type of plant cell throughout life",
          "Any human cell",
          "Only dead cells in an old leaf"
        ],
        "answer": 0,
        "why": "This is a plant developmental capacity retained in meristems.",
        "concept": "bio.stem-meristem"
      },
      {
        "id": "bio.c-stem7",
        "prompt": "Why is “all mature plant cells can become anything” misleading?",
        "options": [
          "All plants lack DNA",
          "Meristems are animal tissues",
          "Meristem capacity does not imply unrestricted capacity of every mature plant cell"
        ],
        "answer": 2,
        "why": "Many plant cells retain flexibility, but dead xylem and other mature examples show the limit of the claim.",
        "concept": "bio.stem-meristem"
      },
      {
        "id": "bio.c-stem8",
        "prompt": "Which model observation is evidence of differentiation rather than self-renewal alone?",
        "options": [
          "Descendants acquire structures for a specialised role",
          "Only more identical undifferentiated cells appear",
          "The diagram changes decorative colour without structural evidence"
        ],
        "answer": 0,
        "why": "Acquiring specialised structures and functions supports a differentiated fate.",
        "concept": "bio.stem-definition"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.differentiation",
      "science.biology.cells.cell-cycle"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.cells.stem-cell-uses",
    "title": "Stem-cell uses & decisions",
    "short": "Potential benefits, risks and values",
    "refs": [
      "1.2.3"
    ],
    "minutes": 30,
    "widget": "stem-uses",
    "topicId": "science.biology.cell-biology",
    "big": "Stem cells have potential medical and plant-cloning uses. Evaluate the proposed benefit, the evidence, practical risks and ethical views.",
    "learn": [
      {
        "title": "Repair is a possibility, not a promise",
        "text": "Stem cells may provide replacement cells to help treat conditions such as diabetes and paralysis. The proposed benefit is to replace damaged or non-functioning cells with suitable specialised cells. Different conditions have different causes and treatment challenges; a promising result is not a guarantee of a cure or a statement that such a treatment is available to every patient.",
        "scene": "stemuse:therapy"
      },
      {
        "title": "Match genes in therapeutic cloning",
        "text": "In therapeutic cloning, an embryo is produced with the same genes as the patient. In the simplified AQA model, stem cells from this embryo are not rejected by the patient’s body because they are genetically matched, so they may be used for medical treatment. A genetic match addresses rejection in this model; it does not prove that the cells will work, remove infection risk, or guarantee recovery. Detailed cloning techniques are not required.",
        "scene": "stemuse:cloning"
      },
      {
        "title": "Weigh risks and values",
        "text": "Stem-cell use has potential risks such as transfer of viral infection. Some people also have ethical or religious objections, particularly concerning use of embryos. Infection risk can be investigated scientifically; ethical choices also depend on values about embryos, potential patient benefit and acceptable research. Evaluate the stated proposal using both evidence and the relevant viewpoint rather than assuming every person shares one objection or that a benefit cancels every risk.",
        "scene": "stemuse:therapy"
      },
      {
        "title": "Clone plants for useful purposes",
        "text": "Meristem cells can be used to produce clones of plants quickly and economically. Cloning rare species can help protect them from extinction. Cloning a crop plant with a desirable feature, such as disease resistance, can supply many genetically identical plants for farmers. The useful feature is preserved from the chosen parent; cloning does not create a new resistance trait just because copies are made.",
        "scene": "stemuse:plants"
      },
      {
        "title": "Judge what the evidence supports",
        "text": "A large set of identical plants can preserve a useful trait, but it does not automatically add genetic variation. In a supplied conservation or farming case, connect the benefit to the goal and acknowledge the limits. Similarly, a successful small treatment study supports further investigation, not a claim that every patient will benefit. Models show proposed cell or plant lineages rather than clinical trial data, actual culture protocols or instructions for performing cloning.",
        "scene": "stemuse:plants"
      }
    ],
    "practice": [
      {
        "id": "bio.p-stemuse1",
        "prompt": "A proposed stem-cell treatment aims to help paralysis. Which is a justified description?",
        "options": [
          "It is guaranteed to cure every patient",
          "It may help by supplying suitable replacement cells; evidence and risks matter",
          "It changes every cell into an embryo"
        ],
        "answer": 1,
        "why": "Potential applications must not be stated as certain cures.",
        "concept": "bio.stem-therapy"
      },
      {
        "id": "bio.p-stemuse2",
        "prompt": "Why is a patient genetic match useful in the AQA therapeutic-cloning model?",
        "options": [
          "It addresses immune rejection of the cells",
          "It removes every possible viral risk",
          "It guarantees that treatment works"
        ],
        "answer": 0,
        "why": "The match addresses rejection, not every source of treatment failure.",
        "concept": "bio.stem-cloning"
      },
      {
        "id": "bio.p-stemuse3",
        "prompt": "Which is a specified practical risk of stem-cell use?",
        "options": [
          "Every cloned cell becomes cellulose",
          "All recipients become genetically identical to one another",
          "Transfer of viral infection"
        ],
        "answer": 2,
        "why": "Potential infection transfer is a scientific risk requiring evidence and controls.",
        "concept": "bio.stem-evaluation"
      },
      {
        "id": "bio.p-stemuse4",
        "prompt": "Why clone a crop plant with disease resistance?",
        "options": [
          "To reproduce its useful feature in many identical plants",
          "To create any resistance trait from nothing",
          "To guarantee resistance to every future disease"
        ],
        "answer": 0,
        "why": "Cloning preserves the selected genetic features rather than inventing all possible resistance.",
        "concept": "bio.stem-plants"
      }
    ],
    "check": [
      {
        "id": "bio.c-stemuse1",
        "prompt": "Which pair of conditions is named as a potential stem-cell treatment application?",
        "options": [
          "Diabetes and paralysis",
          "Every infection with a guaranteed cure",
          "Only mineral deficiency in plants"
        ],
        "answer": 0,
        "why": "AQA gives diabetes and paralysis as possible applications, not guaranteed outcomes.",
        "concept": "bio.stem-therapy"
      },
      {
        "id": "bio.c-stemuse2",
        "prompt": "A proposal says “replacement cells may restore a lost function”. What further judgement is appropriate?",
        "options": [
          "The word may proves no research can ever help",
          "Evidence of benefit and risks is needed before claiming success",
          "A genetic match proves every patient will recover"
        ],
        "answer": 1,
        "why": "A plausible mechanism alone does not establish treatment success.",
        "concept": "bio.stem-therapy"
      },
      {
        "id": "bio.c-stemuse3",
        "prompt": "In therapeutic cloning, the embryo is produced with…",
        "options": [
          "No genetic material",
          "Only the same appearance as the patient",
          "The same genes as the patient"
        ],
        "answer": 2,
        "why": "The genetic match underlies the simplified rejection explanation.",
        "concept": "bio.stem-cloning"
      },
      {
        "id": "bio.c-stemuse4",
        "prompt": "Which statement keeps the rejection model separate from other risks?",
        "options": [
          "Genetically matched cells are not rejected in the AQA model, but infection risk still needs consideration",
          "Genetic matching removes every infection risk",
          "No matched cell can ever fail to function"
        ],
        "answer": 0,
        "why": "Rejection and infection are distinct concerns.",
        "concept": "bio.stem-cloning"
      },
      {
        "id": "bio.c-stemuse5",
        "prompt": "Which is an ethical or religious concern rather than the specified infection risk?",
        "options": [
          "Concern about using or destroying human embryos",
          "Transfer of a virus in material",
          "A measured rate of viral contamination"
        ],
        "answer": 0,
        "why": "Values concerning embryo use differ from measuring a biological hazard.",
        "concept": "bio.stem-evaluation"
      },
      {
        "id": "bio.c-stemuse6",
        "prompt": "Which is the strongest evaluation of a proposed embryo-based treatment?",
        "options": [
          "Ignore patient benefit because opinions exist",
          "Claim benefits cancel every risk",
          "Consider benefit evidence, infection risk and relevant ethical views"
        ],
        "answer": 2,
        "why": "Evaluation balances practical evidence and social/ethical issues without treating them as identical questions.",
        "concept": "bio.stem-evaluation"
      },
      {
        "id": "bio.c-stemuse7",
        "prompt": "Why can meristem cloning help conserve a rare plant species?",
        "options": [
          "It can quickly and economically produce more copies of the selected plant",
          "It guarantees the species has unlimited genetic variation",
          "It turns human stem cells into leaves"
        ],
        "answer": 0,
        "why": "Producing additional plants may help protect a species from extinction.",
        "concept": "bio.stem-plants"
      },
      {
        "id": "bio.c-stemuse8",
        "prompt": "A farmer selects a plant with a useful disease-resistance feature. Cloning it aims to…",
        "options": [
          "Produce unrelated plants with random new traits",
          "Produce many identical plants retaining that feature",
          "Ensure no future pathogen can ever infect any clone"
        ],
        "answer": 1,
        "why": "Clones preserve the chosen parent’s genetic feature, with realistic limits.",
        "concept": "bio.stem-plants"
      },
      {
        "id": "bio.c-stemuse9",
        "prompt": "A conservation programme produces many genetically identical clones. Which extra claim is unsupported?",
        "options": [
          "There are now more copies of that plant",
          "The selected genetic features can be retained",
          "The cloning step automatically increases genetic variation"
        ],
        "answer": 2,
        "why": "Increasing copy number is different from increasing genetic variation.",
        "concept": "bio.stem-plants"
      },
      {
        "id": "bio.c-stemuse10",
        "prompt": "A small supplied study reports benefit in some patients. Best conclusion?",
        "options": [
          "Every patient is now guaranteed a cure",
          "The results support further investigation, with limitations and risks still considered",
          "Ethical views can no longer be discussed"
        ],
        "answer": 1,
        "why": "Limited evidence should support a proportionate claim rather than universal certainty.",
        "concept": "bio.stem-evaluation"
      }
    ],
    "skills": [
      "WS1.3"
    ],
    "prerequisites": [
      "science.biology.cells.stem-cells"
    ],
    "separate": false,
    "higher": false
  }
];
export const stemConcepts={
  "bio.stem-definition": "Stem-cell self-renewal and differentiation",
  "bio.stem-capacity": "Embryonic and adult marrow potential",
  "bio.stem-meristem": "Meristem cell potential throughout plant life",
  "bio.stem-therapy": "Potential replacement-cell treatment benefits",
  "bio.stem-cloning": "Therapeutic genetic matching and rejection model",
  "bio.stem-evaluation": "Practical risks, evidence and ethical viewpoints",
  "bio.stem-plants": "Meristem clones for conservation and crops"
};
