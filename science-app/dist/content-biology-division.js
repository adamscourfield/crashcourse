export const divisionLessons=[
  {
    "id": "science.biology.cells.chromosomes",
    "title": "Chromosomes, DNA & genes",
    "short": "A map of genetic information",
    "refs": [
      "1.2.1"
    ],
    "minutes": 25,
    "widget": "chromosome-map",
    "topicId": "science.biology.cell-biology",
    "big": "The nucleus contains chromosomes made of DNA. Each chromosome carries many genes, and body-cell chromosomes are normally paired.",
    "learn": [
      {
        "title": "Find chromosomes in the nucleus",
        "text": "In a typical plant or animal cell, the nucleus contains chromosomes. Chromosomes are made of DNA molecules. The nested model links cell → nucleus → chromosome → DNA; it changes viewing scale rather than suggesting that all these structures are the same size.",
        "scene": "chromosomes:nucleus"
      },
      {
        "title": "Connect DNA and genes",
        "text": "Each chromosome carries a large number of genes. A gene is a section of DNA carrying genetic information. The diagram highlights a short section along a DNA molecule to represent a gene; it does not place a separate little chromosome inside DNA. The number of gene markers shown is illustrative, not the real total.",
        "scene": "chromosomes:dna"
      },
      {
        "title": "Recognise pairs in body cells",
        "text": "In body cells, chromosomes are normally found in pairs. The pair members are corresponding chromosomes, not necessarily identical DNA copies: they can carry different versions of genes. A supplied model with four chromosomes has two pairs. This small model is not a statement that real human cells have four chromosomes.",
        "scene": "chromosomes:nucleus"
      },
      {
        "title": "Separate pairing from copying",
        "text": "A pair of corresponding chromosomes is different from the two matching copies produced when one chromosome’s DNA is replicated before division. Replication is studied in the next lesson. Chromosomes are not permanently X-shaped: the compact doubled shape often drawn for division represents copied material. Colours, thickness and gene marks in this model are symbolic; use the supplied count key rather than infer a universal chromosome number.",
        "scene": "chromosomes:chromosome"
      }
    ],
    "practice": [
      {
        "id": "bio.p-chrom1",
        "prompt": "Which relationship is correct?",
        "options": [
          "The nucleus contains chromosomes made of DNA",
          "DNA contains little nuclei",
          "Every gene is a whole cell"
        ],
        "answer": 0,
        "why": "Locate each structure in the nested organisation.",
        "concept": "bio.chromosome-map"
      },
      {
        "id": "bio.p-chrom2",
        "prompt": "A gene is…",
        "options": [
          "A separate cell membrane",
          "A section of DNA carrying genetic information",
          "A type of mitochondrion"
        ],
        "answer": 1,
        "why": "A chromosome carries many genes along its DNA.",
        "concept": "bio.gene-map"
      },
      {
        "id": "bio.p-chrom3",
        "prompt": "A supplied body-cell model shows six chromosomes arranged in pairs. How many pairs?",
        "type": "number",
        "answer": 3,
        "tolerance": 0.001,
        "unit": "",
        "why": "Six chromosomes grouped two at a time give three pairs.",
        "concept": "bio.chromosome-pairs"
      },
      {
        "id": "bio.p-chrom4",
        "prompt": "Two corresponding chromosomes in a body-cell pair…",
        "options": [
          "Must be identical newly copied DNA",
          "Cannot contain any genes",
          "Can carry different versions of genes"
        ],
        "answer": 2,
        "why": "Corresponding pair members are not the same as matching copies made by replication.",
        "concept": "bio.chromosome-pairs"
      }
    ],
    "check": [
      {
        "id": "bio.c-chrom1",
        "prompt": "The highlighted structures inside the nucleus in this schematic represent…",
        "options": [
          "Chromosomes",
          "Whole separate organisms",
          "Cell walls"
        ],
        "answer": 0,
        "why": "Chromosomes are located inside the typical eukaryotic nucleus.",
        "concept": "bio.chromosome-map",
        "figure": {
          "kind": "bio-chromosomes",
          "level": "nucleus"
        }
      },
      {
        "id": "bio.c-chrom2",
        "prompt": "What are chromosomes made of?",
        "options": [
          "Cellulose only",
          "DNA molecules",
          "Cell sap"
        ],
        "answer": 1,
        "why": "Chromosomes are composed of DNA carrying genetic information.",
        "concept": "bio.chromosome-map"
      },
      {
        "id": "bio.c-chrom3",
        "prompt": "A highlighted short region on a DNA molecule is used to represent…",
        "options": [
          "A whole plant",
          "A cell membrane",
          "A gene"
        ],
        "answer": 2,
        "why": "A gene is a section of DNA; one chromosome carries many genes.",
        "concept": "bio.gene-map",
        "figure": {
          "kind": "bio-chromosomes",
          "level": "dna"
        }
      },
      {
        "id": "bio.c-chrom4",
        "prompt": "Which statement matches a typical chromosome?",
        "options": [
          "It carries many genes",
          "It contains no genetic information",
          "It is one bacterial cell"
        ],
        "answer": 0,
        "why": "Many genes occur along a chromosome’s DNA.",
        "concept": "bio.gene-map"
      },
      {
        "id": "bio.c-chrom5",
        "prompt": "A supplied model has eight chromosomes arranged into corresponding pairs. How many pairs?",
        "type": "number",
        "answer": 4,
        "tolerance": 0.001,
        "unit": "",
        "why": "8÷2=4 pairs.",
        "concept": "bio.chromosome-pairs"
      },
      {
        "id": "bio.c-chrom6",
        "prompt": "Why is “body-cell pair members are always identical copies” misleading?",
        "options": [
          "Corresponding pair members can carry different gene versions",
          "Pairs contain only protein and no DNA",
          "Only one member contains genes"
        ],
        "answer": 0,
        "why": "Pairing and copying refer to different relationships.",
        "concept": "bio.chromosome-pairs"
      },
      {
        "id": "bio.c-chrom7",
        "prompt": "A diagram shows four chromosomes in a hypothetical body cell. What does that establish?",
        "options": [
          "Every real organism has four chromosomes",
          "Only the supplied model’s count, not a universal number",
          "The cell must be a bacterium"
        ],
        "answer": 1,
        "why": "Use the stated model; chromosome counts differ between organisms.",
        "concept": "bio.chromosome-model"
      },
      {
        "id": "bio.c-chrom8",
        "prompt": "An X-like chromosome drawing should be interpreted as…",
        "options": [
          "The permanent shape of every chromosome",
          "Two complete cells joined together",
          "A compact representation of copied material during division"
        ],
        "answer": 2,
        "why": "Common division drawings simplify chromosome state and scale.",
        "concept": "bio.chromosome-model",
        "figure": {
          "kind": "bio-chromosomes",
          "level": "chromosome", "copied": true
        }
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.cell-types",
      "science.biology.cells.cell-structures"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.cells.cell-cycle",
    "title": "Mitosis & the cell cycle",
    "short": "Copy, allocate and divide",
    "refs": [
      "1.2.2"
    ],
    "minutes": 30,
    "widget": "cell-cycle",
    "topicId": "science.biology.cell-biology",
    "big": "Cells prepare and copy DNA, divide the nucleus by mitosis, then separate into two cells with complete matching genetic information.",
    "learn": [
      {
        "title": "Prepare before division",
        "text": "The cell cycle has three overall stages: preparation, mitosis and division of the cell contents. During preparation the cell grows and increases sub-cellular structures such as ribosomes and mitochondria. It needs enough cell material for the two resulting cells. Our five snapshots separate some events for clarity; they are not five named mitosis phases.",
        "scene": "cycle:0"
      },
      {
        "title": "Copy DNA before mitosis",
        "text": "During preparation, DNA replicates to form two matching copies of each original chromosome’s DNA. For this supplied model, the starting cell has four original chromosomes: label them A, B, C and D. After copying, there are two matching copies of A, two of B, two of C and two of D to allocate. We count labelled copies for this activity, not centromeres or a required chromatid vocabulary. DNA replication happens before mitosis, not as part of it.",
        "scene": "cycle:1"
      },
      {
        "title": "Give each new nucleus a complete set",
        "text": "In mitosis, one matching copy of each chromosome’s material is pulled to each end of the cell and the nucleus divides. Each resulting nucleus receives the complete A, B, C and D set in our model. Splitting four kinds into A/B at one end and C/D at the other would leave incomplete genetic information. Individual named phases of mitosis are not required here.",
        "scene": "cycle:2"
      },
      {
        "title": "Finish making two cells",
        "text": "Finally, the cytoplasm and cell membranes divide to form two cells. This final separation is distinct from nuclear division in mitosis. Each resulting cell normally has the same chromosome set and is genetically identical to the original cell, assuming no DNA-copying error. The genetic material was copied first so each daughter receives a complete set; the ordinary body-cell cycle does not halve that set.",
        "scene": "cycle:3"
      },
      {
        "title": "Use division for growth and repair",
        "text": "Cell division involving mitosis is important for growth and development in multicellular organisms. In a mature animal it replaces lost cells and repairs tissues, such as replacement of skin cells after damage. Making more cells is not the same as differentiation into a specialised role. A drawing of two cells alone does not prove the full preceding sequence or establish chromosome identity without supporting information.",
        "scene": "cycle:4"
      }
    ],
    "practice": [
      {
        "id": "bio.p-cycle1",
        "prompt": "What belongs to preparation before mitosis?",
        "options": [
          "Only splitting the cell membrane",
          "Growth, more sub-cellular structures and DNA replication",
          "Halving the original chromosome set"
        ],
        "answer": 1,
        "why": "Preparation supplies material and copied genetic information.",
        "concept": "bio.cycle-preparation"
      },
      {
        "id": "bio.p-cycle2",
        "prompt": "A model starts with four original chromosomes A,B,C,D. After DNA replication, how many labelled copies in total are available to allocate?",
        "type": "number",
        "answer": 8,
        "tolerance": 0.001,
        "unit": "",
        "why": "Two copies of each of four originals gives eight labelled copies.",
        "concept": "bio.cycle-allocation"
      },
      {
        "id": "bio.p-cycle3",
        "prompt": "Which allocation gives two complete matching genetic sets?",
        "options": [
          "Left A,A,B,B; right C,C,D,D",
          "Left A,B; right C,D",
          "Left A,B,C,D; right A,B,C,D"
        ],
        "answer": 2,
        "why": "Both resulting nuclei need one matching copy of each original.",
        "concept": "bio.cycle-allocation"
      },
      {
        "id": "bio.p-cycle4",
        "prompt": "Which event is distinct from nuclear division in mitosis?",
        "options": [
          "Division of cytoplasm and cell membranes to separate the cells",
          "Movement of copied chromosome material to opposite ends",
          "A complete genetic set reaching each end"
        ],
        "answer": 0,
        "why": "Mitosis concerns nuclear division; final cell separation follows.",
        "concept": "bio.cycle-sequence"
      }
    ],
    "check": [
      {
        "id": "bio.c-cycle1",
        "prompt": "Choose the three overall stages in order.",
        "options": [
          "Preparation → mitosis → cytoplasm/membrane division",
          "Mitosis → DNA replication → growth only",
          "Cell separation → DNA halving → no copying"
        ],
        "answer": 0,
        "why": "DNA copying and growth prepare the cell before nuclear and then cell-content division.",
        "concept": "bio.cycle-sequence"
      },
      {
        "id": "bio.c-cycle2",
        "prompt": "Why do ribosome and mitochondrion numbers increase before division?",
        "options": [
          "They replace DNA as the genetic material",
          "They provide enough sub-cellular structures for the resulting cells",
          "They turn the cell into a bacterium"
        ],
        "answer": 1,
        "why": "Growth and increased cell structures prepare material for the daughters.",
        "concept": "bio.cycle-preparation"
      },
      {
        "id": "bio.c-cycle3",
        "prompt": "When is DNA copied in this body-cell cycle?",
        "options": [
          "Only after both daughter cells are formed",
          "It is never copied",
          "Before mitosis, during preparation"
        ],
        "answer": 2,
        "why": "Replication precedes allocation of copied material.",
        "concept": "bio.cycle-preparation"
      },
      {
        "id": "bio.c-cycle4",
        "prompt": "A hypothetical cell begins with six original chromosomes. After copying, how many labelled copies of chromosome material are available in total before allocation?",
        "type": "number",
        "answer": 12,
        "tolerance": 0.001,
        "unit": "",
        "why": "Each of six originals is copied, giving twelve labelled copies.",
        "concept": "bio.cycle-allocation"
      },
      {
        "id": "bio.c-cycle5",
        "prompt": "A supplied cell starts with four chromosomes A,B,C,D. After normal copying and division, how many chromosomes does EACH resulting cell have?",
        "type": "number",
        "answer": 4,
        "tolerance": 0.001,
        "unit": "",
        "why": "Each receives one complete four-chromosome set, not half the starting set.",
        "concept": "bio.cycle-allocation"
      },
      {
        "id": "bio.c-cycle6",
        "prompt": "The model is allocating copied chromosome material to opposite ends. What event is being represented?",
        "options": [
          "Mitosis leading to nuclear division",
          "DNA replication occurring for the first time",
          "The final cutting of the cell membrane only"
        ],
        "answer": 0,
        "why": "Mitosis distributes the matching copies and divides the nucleus.",
        "concept": "bio.cycle-sequence",
        "figure": {
          "kind": "bio-cycle",
          "stage": 2,
          "pairs": 2
        }
      },
      {
        "id": "bio.c-cycle7",
        "prompt": "Which statement correctly separates nuclear and cell division?",
        "options": [
          "Mitosis must include all membrane splitting by definition",
          "Mitosis divides the nucleus; cytoplasm and membranes then divide",
          "DNA replication is the same event as splitting the cytoplasm"
        ],
        "answer": 1,
        "why": "These are distinct parts of the overall cell cycle.",
        "concept": "bio.cycle-sequence"
      },
      {
        "id": "bio.c-cycle8",
        "prompt": "Which supplied situation is consistent with mitosis in a multicellular organism?",
        "options": [
          "A printed image enlarges",
          "A cell loses all its genes",
          "New skin cells replace damaged cells"
        ],
        "answer": 2,
        "why": "Growth and repair require new genetically matching cells.",
        "concept": "bio.cycle-purpose"
      },
      {
        "id": "bio.c-cycle9",
        "prompt": "A daughter receives A,B,C but no D from a parent model A,B,C,D. Best judgement?",
        "options": [
          "The allocation is incomplete for the normal cycle described",
          "It is correct because every division halves information",
          "Missing genetic material is necessary for growth"
        ],
        "answer": 0,
        "why": "Each daughter should receive a matching copy of every original.",
        "concept": "bio.cycle-allocation"
      },
      {
        "id": "bio.c-cycle10",
        "prompt": "Normal completed division after correct copying produces…",
        "options": [
          "Two cells with matching complete genetic sets",
          "One cell with all DNA and one permanently without DNA",
          "Four cells with half the starting chromosome set"
        ],
        "answer": 0,
        "why": "The supplied body-cell cycle produces two genetically identical cells with the original set.",
        "concept": "bio.cycle-purpose",
        "figure": {
          "kind": "bio-cycle",
          "stage": 4,
          "pairs": 2
        }
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.chromosomes",
      "science.biology.cells.differentiation"
    ],
    "separate": false,
    "higher": false
  }
];
export const divisionConcepts={
  "bio.chromosome-map": "Nucleus, chromosome and DNA organisation",
  "bio.gene-map": "Genes as sections of chromosome DNA",
  "bio.chromosome-pairs": "Body-cell pairs compared with replicated copies",
  "bio.chromosome-model": "Limits of chromosome shapes and count models",
  "bio.cycle-preparation": "Growth, sub-cellular structures and DNA copying",
  "bio.cycle-allocation": "Complete matching chromosome sets",
  "bio.cycle-sequence": "Preparation, nuclear division and cell separation",
  "bio.cycle-purpose": "Mitosis in growth, development and repair"
};
