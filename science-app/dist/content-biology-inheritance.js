export const inheritLessons=[
  {
    "id": "science.biology.inheritance-variation-and-evolution.reproduction",
    "title": "Sexual & asexual reproduction",
    "short": "Sexual & asexual reproduction",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.1"
    ],
    "combinedRefs": [
      "6.1.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Sexual reproduction involves fusion of male and female gametes. In animals these are sperm and egg cells. Their genetic information combines, contributing to variation among offspring.",
    "learn": [
      {
        "title": "Two routes to offspring",
        "text": "Sexual reproduction involves fusion of male and female gametes. In animals these are sperm and egg cells. Their genetic information combines, contributing to variation among offspring.",
        "scene": "inherit:sexual:0"
      },
      {
        "title": "Flowers have gametes too",
        "text": "In flowering plants, pollen carries male gametes to the female structures; a male gamete fuses with an egg cell. The pollen grain is a carrier, not simply an egg or an entire new plant.",
        "scene": "inherit:plants:1",
        "process": false
      },
      {
        "title": "One parent, no fusion",
        "text": "Asexual reproduction involves one parent and no fusion of gametes. Mitosis produces genetically identical offspring, or clones, apart from changes such as new mutations. There is no mixing of genetic information from two gametes.",
        "scene": "inherit:asexual:2", "processFilm": "inherit-asexual"
      },
      {
        "title": "Different divisions, different outcomes",
        "text": "Meiosis forms genetically non-identical gametes. Mitosis normally makes genetically identical cells and supports asexual reproduction in the examples here. Reproduction is classified by gamete fusion and inheritance, not merely by how many adults are visible.",
        "scene": "inherit:compare:3",
        "process": false
      }
    ],
    "widget": "inherit-reproduction",
    "prerequisites": [
      "science.biology.cells.chromosomes"
    ],
    "skills": [
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-inherit-reproduction1",
        "prompt": "What defines sexual reproduction?",
        "options": [
          "Fusion of gametes",
          "A large parent",
          "Only mitosis"
        ],
        "answer": 0,
        "why": "Gametes fuse and genetic information combines.",
        "concept": "bio.inherit-reproduction"
      },
      {
        "id": "bio.p-inherit-reproduction2",
        "prompt": "Which cells fuse in animal sexual reproduction?",
        "options": [
          "Two skin cells",
          "Sperm and egg",
          "Two red blood cells"
        ],
        "answer": 1,
        "why": "Sperm and egg are gametes.",
        "concept": "bio.inherit-reproduction"
      },
      {
        "id": "bio.p-inherit-reproduction3",
        "prompt": "Asexual reproduction involves…",
        "options": [
          "Two gametes fusing",
          "Meiosis only",
          "One parent without gamete fusion"
        ],
        "answer": 2,
        "why": "There is no fusion or two-gamete genetic mixing.",
        "concept": "bio.inherit-reproduction"
      },
      {
        "id": "bio.p-inherit-reproduction4",
        "prompt": "What is a clone?",
        "options": [
          "A genetically identical copy",
          "Any offspring of two parents",
          "A hormone"
        ],
        "answer": 0,
        "why": "A clone has the same genetic information, allowing for new mutations.",
        "concept": "bio.inherit-reproduction"
      }
    ],
    "check": [
      {
        "id": "bio.c-inherit-reproduction1",
        "prompt": "A new organism develops from one parent by mitosis without gametes. Which route?",
        "options": [
          "Sexual",
          "Asexual",
          "Fertilisation"
        ],
        "answer": 1,
        "why": "One-parent reproduction without gamete fusion is asexual.",
        "concept": "bio.inherit-reproduction"
      },
      {
        "id": "bio.c-inherit-reproduction2",
        "prompt": "Which process combines genetic information from gametes?",
        "options": [
          "Root elongation",
          "Only mitosis",
          "Sexual reproduction"
        ],
        "answer": 2,
        "why": "Fertilisation combines gamete information.",
        "concept": "bio.inherit-reproduction"
      },
      {
        "id": "bio.c-inherit-reproduction3",
        "prompt": "Which division produces non-identical gametes?",
        "options": [
          "Meiosis",
          "Mitosis",
          "Diffusion"
        ],
        "answer": 0,
        "why": "Meiosis forms gametes with different genetic information.",
        "concept": "bio.inherit-reproduction"
      },
      {
        "id": "bio.c-inherit-reproduction4",
        "prompt": "What does pollen do in flowering-plant reproduction?",
        "options": [
          "Is an egg cell",
          "Carries male gametes",
          "Is a clone of the offspring"
        ],
        "answer": 1,
        "why": "Pollen carries the male gametes.",
        "concept": "bio.inherit-reproduction"
      },
      {
        "id": "bio.c-inherit-reproduction5",
        "prompt": "A clone and its parent grow to different sizes. What is possible?",
        "options": [
          "They must have different inherited genomes",
          "Environment never affects growth",
          "They can share genetic information but experience different conditions"
        ],
        "answer": 2,
        "why": "Genetic identity does not require identical development.",
        "concept": "bio.inherit-reproduction"
      },
      {
        "id": "bio.c-inherit-reproduction6",
        "prompt": "Which criterion is most useful for identifying sexual reproduction?",
        "options": [
          "Fusion of male and female gametes",
          "Number of visible adults alone",
          "Whether offspring are large"
        ],
        "answer": 0,
        "why": "Gamete fusion defines the route.",
        "concept": "bio.inherit-reproduction"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.meiosis",
    "title": "Meiosis: halve the chromosome set",
    "short": "Meiosis: halve the chromosome set",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.2"
    ],
    "combinedRefs": [
      "6.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A cell in a reproductive organ begins with chromosome pairs. Before meiosis, its genetic information is copied. A copied chromosome has two joined copies of its DNA; copying DNA does not by itself double the chromosome count when counted by joined units.",
    "learn": [
      {
        "title": "Copy once",
        "text": "A cell in a reproductive organ begins with chromosome pairs. Before meiosis, its genetic information is copied. A copied chromosome has two joined copies of its DNA; copying DNA does not by itself double the chromosome count when counted by joined units.",
        "scene": "inherit:copy:0"
      },
      {
        "title": "Divide twice",
        "text": "Meiosis involves two cell divisions after the genetic information has been copied once. The final products each have one set of chromosomes, half the original paired-cell number. You do not need the names of the individual phases for this course.",
        "scene": "inherit:divide:1"
      },
      {
        "title": "Four single-set products",
        "text": "The overall model shows four genetically different gametes. Human gametes have 23 chromosomes rather than the 46 in an ordinary body cell. The animation generalises gamete formation; animal egg production does not produce four equivalent functional eggs.",
        "scene": "inherit:products:2"
      },
      {
        "title": "Read the model carefully",
        "text": "Type numbers and chromosome lengths identify corresponding types; symbols are greatly enlarged. The model illustrates different combinations of inherited information. It is not a complete molecular explanation of the sources of variation or a picture of every human chromosome.",
        "scene": "inherit:ledger:3",
        "process": false
      }
    ],
    "widget": "inherit-meiosis",
    "prerequisites": [
      "science.biology.cells.chromosomes"
    ],
    "skills": [
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-inherit-meiosis1",
        "prompt": "Before meiosis, genetic information is…",
        "options": [
          "Copied once",
          "Never copied",
          "Copied after every gamete is released"
        ],
        "answer": 0,
        "why": "Replication occurs before the two divisions.",
        "concept": "bio.inherit-meiosis"
      },
      {
        "id": "bio.p-inherit-meiosis2",
        "prompt": "How many divisions occur in meiosis?",
        "options": [
          "One",
          "Two",
          "Four"
        ],
        "answer": 1,
        "why": "There are two divisions.",
        "concept": "bio.inherit-meiosis"
      },
      {
        "id": "bio.p-inherit-meiosis3",
        "prompt": "The final products each have…",
        "options": [
          "Two complete paired sets",
          "No DNA",
          "One chromosome set"
        ],
        "answer": 2,
        "why": "Each gamete has a single set.",
        "concept": "bio.inherit-meiosis"
      },
      {
        "id": "bio.p-inherit-meiosis4",
        "prompt": "A body cell of an example species has12 chromosomes. Gametes have…",
        "options": [
          "6",
          "12",
          "24"
        ],
        "answer": 0,
        "why": "The chromosome number halves.",
        "concept": "bio.inherit-meiosis"
      }
    ],
    "check": [
      {
        "id": "bio.c-inherit-meiosis1",
        "prompt": "A paired cell has16 chromosomes. Its gametes contain…",
        "options": [
          "32",
          "8",
          "16"
        ],
        "answer": 1,
        "why": "Half of16 is8.",
        "concept": "bio.inherit-meiosis"
      },
      {
        "id": "bio.c-inherit-meiosis2",
        "prompt": "How many final products are shown in the overall meiosis model?",
        "options": [
          "Two",
          "Eight",
          "Four"
        ],
        "answer": 2,
        "why": "Two divisions yield four products in the generalised model.",
        "concept": "bio.inherit-meiosis"
      },
      {
        "id": "bio.c-inherit-meiosis3",
        "prompt": "Which description is correct?",
        "options": [
          "One DNA-copying event followed by two divisions",
          "Two DNA-copying events followed by no division",
          "No copying and only growth"
        ],
        "answer": 0,
        "why": "Replication precedes two divisions.",
        "concept": "bio.inherit-meiosis"
      },
      {
        "id": "bio.c-inherit-meiosis4",
        "prompt": "How do gametes produced by meiosis compare genetically?",
        "options": [
          "All always identical",
          "Genetically different",
          "They contain no genes"
        ],
        "answer": 1,
        "why": "Meiosis produces non-identical gametes.",
        "concept": "bio.inherit-meiosis"
      },
      {
        "id": "bio.c-inherit-meiosis5",
        "prompt": "Why are type numbers and lengths shown as well as colours?",
        "options": [
          "To show measured gene sizes",
          "To replace chromosome sets with hormones",
          "To identify chromosome types without relying on colour"
        ],
        "answer": 2,
        "why": "Multiple visual cues identify types in a symbolic model.",
        "concept": "bio.inherit-meiosis"
      },
      {
        "id": "bio.c-inherit-meiosis6",
        "prompt": "A copied joined chromosome is counted as how many joined chromosome units before separation?",
        "options": [
          "One",
          "Zero",
          "Four"
        ],
        "answer": 0,
        "why": "DNA content and joined chromosome-unit count are different quantities.",
        "concept": "bio.inherit-meiosis"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.fertilisation-growth",
    "title": "Fertilisation & embryo growth",
    "short": "Fertilisation & embryo growth",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.2"
    ],
    "combinedRefs": [
      "6.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "At fertilisation, two single-set gametes join. Their genetic information combines and the normal paired chromosome number is restored in the fertilised egg, or zygote. In humans,23 from each gamete makes46.",
    "learn": [
      {
        "title": "Restore the paired number",
        "text": "At fertilisation, two single-set gametes join. Their genetic information combines and the normal paired chromosome number is restored in the fertilised egg, or zygote. In humans,23 from each gamete makes46.",
        "scene": "inherit:fusion:0"
      },
      {
        "title": "Increase the cell number",
        "text": "The fertilised egg divides by mitosis. Genetic information is copied before each division, and the cells normally retain the same chromosome number and inherited information. Growth in cell number does not mean the chromosome number doubles at every division.",
        "scene": "inherit:growth:1"
      },
      {
        "title": "Cells become specialised",
        "text": "As an embryo develops, cells differentiate for different functions. Increasing cell number by mitosis and becoming specialised by differentiation are different processes.",
        "scene": "inherit:differentiate:2"
      },
      {
        "title": "Track sets, not body size",
        "text": "In an example species with eight chromosomes in each gamete, fertilisation produces a16-chromosome cell. After a mitotic division each daughter cell normally still has16 chromosomes. Model cells and time are symbolic.",
        "scene": "inherit:ledger:3",
        "process": false
      }
    ],
    "widget": "inherit-fertilisation-growth",
    "prerequisites": [
      "science.biology.cells.chromosomes"
    ],
    "skills": [
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-inherit-fertilisation-growth1",
        "prompt": "What does fertilisation restore?",
        "options": [
          "The paired chromosome number",
          "A lack of genetic material",
          "Only body temperature"
        ],
        "answer": 0,
        "why": "Two single sets combine.",
        "concept": "bio.inherit-fertilisation-growth"
      },
      {
        "id": "bio.p-inherit-fertilisation-growth2",
        "prompt": "Which division increases embryo cell number?",
        "options": [
          "Meiosis only",
          "Mitosis",
          "Osmosis"
        ],
        "answer": 1,
        "why": "Mitosis makes more cells.",
        "concept": "bio.inherit-fertilisation-growth"
      },
      {
        "id": "bio.p-inherit-fertilisation-growth3",
        "prompt": "Cells becoming specialised is…",
        "options": [
          "Fertilisation",
          "Only replication",
          "Differentiation"
        ],
        "answer": 2,
        "why": "Differentiation produces specialised cells.",
        "concept": "bio.inherit-fertilisation-growth"
      },
      {
        "id": "bio.p-inherit-fertilisation-growth4",
        "prompt": "Gametes each contain7 chromosomes. The zygote contains…",
        "options": [
          "14",
          "7",
          "28"
        ],
        "answer": 0,
        "why": "7+7=14.",
        "concept": "bio.inherit-fertilisation-growth"
      }
    ],
    "check": [
      {
        "id": "bio.c-inherit-fertilisation-growth1",
        "prompt": "Two gametes each have10 chromosomes. Zygote number?",
        "options": [
          "10",
          "20",
          "40"
        ],
        "answer": 1,
        "why": "10+10 restores20.",
        "concept": "bio.inherit-fertilisation-growth"
      },
      {
        "id": "bio.c-inherit-fertilisation-growth2",
        "prompt": "After mitosis of that zygote, each daughter normally contains…",
        "options": [
          "10",
          "40",
          "20"
        ],
        "answer": 2,
        "why": "Mitosis preserves the chromosome number.",
        "concept": "bio.inherit-fertilisation-growth"
      },
      {
        "id": "bio.c-inherit-fertilisation-growth3",
        "prompt": "Which order is correct?",
        "options": [
          "Gamete fusion → mitotic divisions → differentiation",
          "Differentiation → no fertilisation → meiosis only",
          "Mitosis makes gametes with no DNA"
        ],
        "answer": 0,
        "why": "Fusion precedes embryo growth and specialisation.",
        "concept": "bio.inherit-fertilisation-growth"
      },
      {
        "id": "bio.c-inherit-fertilisation-growth4",
        "prompt": "Human sperm and egg normally contribute…",
        "options": [
          "46 each",
          "23 each",
          "One chromosome each"
        ],
        "answer": 1,
        "why": "Each gamete has23.",
        "concept": "bio.inherit-fertilisation-growth"
      },
      {
        "id": "bio.c-inherit-fertilisation-growth5",
        "prompt": "Why is increasing embryo cell number different from differentiation?",
        "options": [
          "They are identical terms",
          "Differentiation halves every chromosome number",
          "Mitosis adds cells; differentiation changes their specialised functions"
        ],
        "answer": 2,
        "why": "Division and specialisation have different roles.",
        "concept": "bio.inherit-fertilisation-growth"
      },
      {
        "id": "bio.c-inherit-fertilisation-growth6",
        "prompt": "What remains normally constant through mitotic embryo divisions?",
        "options": [
          "Chromosome number per daughter cell",
          "Total number of cells",
          "Embryo size forever"
        ],
        "answer": 0,
        "why": "Each cell retains the inherited chromosome set.",
        "concept": "bio.inherit-fertilisation-growth"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.reproduction-strategies",
    "title": "Reproduction strategies",
    "short": "Reproduction strategies",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.3"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Sexual reproduction produces variation. If conditions change, some variants may survive and reproduce better, allowing natural selection. This is a population advantage, not a guarantee that every sexually produced offspring survives.",
    "learn": [
      {
        "title": "Variation can matter",
        "text": "Sexual reproduction produces variation. If conditions change, some variants may survive and reproduce better, allowing natural selection. This is a population advantage, not a guarantee that every sexually produced offspring survives.",
        "scene": "inherit:variation:0",
        "process": false
      },
      {
        "title": "Multiply without finding a mate",
        "text": "Asexual reproduction needs one parent and avoids finding a mate. It can be faster and use less time and energy, producing many identical offspring in favourable conditions. Low genetic variation can be a disadvantage if conditions change.",
        "scene": "inherit:clones:1",
        "process": false
      },
      {
        "title": "Some organisms use both",
        "text": "Malarial parasites reproduce asexually in humans and sexually in mosquitoes. Many fungi can reproduce asexually by spores and also sexually. Plants can form seeds sexually and reproduce asexually by strawberry runners or daffodil bulb division.",
        "scene": "inherit:examples:2",
        "process": false
      },
      {
        "title": "Evaluate the circumstances",
        "text": "Apply the advantages and disadvantages to the supplied organism and environment. Humans can use selection of breeding parents over generations to increase useful characteristics in food production; the detailed selective-breeding process comes later.",
        "scene": "inherit:evidence:3",
        "process": false
      }
    ],
    "widget": "inherit-reproduction-strategies",
    "prerequisites": [
      "science.biology.cells.chromosomes"
    ],
    "skills": [
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-inherit-reproduction-strategies1",
        "prompt": "Which can be an advantage of asexual reproduction?",
        "options": [
          "No need to find a mate",
          "Always more genetic variation",
          "It requires two gametes"
        ],
        "answer": 0,
        "why": "Only one parent is needed.",
        "concept": "bio.inherit-reproduction-strategies"
      },
      {
        "id": "bio.p-inherit-reproduction-strategies2",
        "prompt": "Why can variation help when conditions change?",
        "options": [
          "All offspring become identical",
          "Some variants may be better suited",
          "It guarantees no extinction"
        ],
        "answer": 1,
        "why": "Natural selection can favour suitable variants.",
        "concept": "bio.inherit-reproduction-strategies"
      },
      {
        "id": "bio.p-inherit-reproduction-strategies3",
        "prompt": "Strawberry runners are an example of…",
        "options": [
          "Sexual fusion",
          "Only meiosis",
          "Asexual reproduction"
        ],
        "answer": 2,
        "why": "Runners form clonal plants.",
        "concept": "bio.inherit-reproduction-strategies"
      },
      {
        "id": "bio.p-inherit-reproduction-strategies4",
        "prompt": "Where do malarial parasites reproduce sexually?",
        "options": [
          "In mosquitoes",
          "Only in human liver cells",
          "In every strawberry"
        ],
        "answer": 0,
        "why": "The sexual part occurs in the mosquito.",
        "concept": "bio.inherit-reproduction-strategies"
      }
    ],
    "check": [
      {
        "id": "bio.c-inherit-reproduction-strategies1",
        "prompt": "Which can produce many clones quickly in favourable conditions?",
        "options": [
          "Only fertilisation",
          "Asexual reproduction",
          "Random mating only"
        ],
        "answer": 1,
        "why": "One-parent reproduction can be efficient.",
        "concept": "bio.inherit-reproduction-strategies"
      },
      {
        "id": "bio.c-inherit-reproduction-strategies2",
        "prompt": "Why might clonal offspring be vulnerable to a new disease?",
        "options": [
          "They all have no DNA",
          "Variation guarantees survival",
          "Shared susceptibility can affect many genetically similar individuals"
        ],
        "answer": 2,
        "why": "Low variation can leave a population vulnerable.",
        "concept": "bio.inherit-reproduction-strategies"
      },
      {
        "id": "bio.c-inherit-reproduction-strategies3",
        "prompt": "Which plant example is asexual?",
        "options": [
          "Daffodil bulb division",
          "Fusion of plant gametes",
          "Seed formation by fertilisation"
        ],
        "answer": 0,
        "why": "Bulb division is asexual.",
        "concept": "bio.inherit-reproduction-strategies"
      },
      {
        "id": "bio.c-inherit-reproduction-strategies4",
        "prompt": "Which statement about many fungi is correct?",
        "options": [
          "They only reproduce sexually",
          "They can reproduce asexually by spores and also sexually",
          "They lack genetic material"
        ],
        "answer": 1,
        "why": "Many fungi use both routes.",
        "concept": "bio.inherit-reproduction-strategies"
      },
      {
        "id": "bio.c-inherit-reproduction-strategies5",
        "prompt": "Malarial parasites reproduce asexually in…",
        "options": [
          "Strawberry runners",
          "Only cereal seeds",
          "Humans"
        ],
        "answer": 2,
        "why": "The human-host stage includes asexual multiplication.",
        "concept": "bio.inherit-reproduction-strategies"
      },
      {
        "id": "bio.c-inherit-reproduction-strategies6",
        "prompt": "Which evaluation is justified?",
        "options": [
          "The best strategy depends on conditions and supplied evidence",
          "Sexual reproduction always guarantees survival",
          "Asexual reproduction always needs a mate"
        ],
        "answer": 0,
        "why": "Benefits and costs depend on context.",
        "concept": "bio.inherit-reproduction-strategies"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.dna-genome",
    "title": "DNA, genes & the genome",
    "short": "DNA, genes & the genome",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.4"
    ],
    "combinedRefs": [
      "6.1.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "In a typical animal or plant cell, nuclear genetic material is DNA. DNA is a polymer with two strands arranged in a double helix. Chromosomes contain long DNA molecules. This overview does not require nucleotide or base-pairing detail.",
    "learn": [
      {
        "title": "DNA is a polymer",
        "text": "In a typical animal or plant cell, nuclear genetic material is DNA. DNA is a polymer with two strands arranged in a double helix. Chromosomes contain long DNA molecules. This overview does not require nucleotide or base-pairing detail.",
        "scene": "inherit:dna:0",
        "process": false
      },
      {
        "title": "A gene is a section",
        "text": "A gene is a section of DNA on a chromosome. It codes for a particular sequence of amino acids used to make a specific protein. A gene, a chromosome and a whole genome are different scales of genetic information.",
        "scene": "inherit:gene:1",
        "process": false
      },
      {
        "title": "The complete collection",
        "text": "The genome is the entire genetic material of an organism. One gene is not the genome. The model nests a highlighted DNA section within a chromosome and a whole collection; the sizes and packaging are schematic.",
        "scene": "inherit:hierarchy:2",
        "process": false
      },
      {
        "title": "Why study human genomes?",
        "text": "Studying human genomes helps identify genes linked to disease, improve understanding and treatment of inherited disorders, and investigate past human migration. Genetic associations provide evidence; a genome is not a certain prediction of every individual outcome.",
        "scene": "inherit:applications:3",
        "process": false
      }
    ],
    "widget": "inherit-dna-genome",
    "prerequisites": [
      "science.biology.cells.chromosomes"
    ],
    "skills": [
      "WS1.1",
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-inherit-dna-genome1",
        "prompt": "DNA has what overall arrangement?",
        "options": [
          "Two strands in a double helix",
          "Only a single protein ball",
          "No repeating units"
        ],
        "answer": 0,
        "why": "DNA is a double-stranded polymer.",
        "concept": "bio.inherit-dna-genome"
      },
      {
        "id": "bio.p-inherit-dna-genome2",
        "prompt": "A gene is…",
        "options": [
          "An entire organism",
          "A section of DNA on a chromosome",
          "A hormone gland"
        ],
        "answer": 1,
        "why": "Genes are sections of chromosome DNA.",
        "concept": "bio.inherit-dna-genome"
      },
      {
        "id": "bio.p-inherit-dna-genome3",
        "prompt": "A gene codes for…",
        "options": [
          "Only the number of adult cells",
          "An entire ecosystem",
          "An amino-acid sequence to make a protein"
        ],
        "answer": 2,
        "why": "The sequence specifies a protein product.",
        "concept": "bio.inherit-dna-genome"
      },
      {
        "id": "bio.p-inherit-dna-genome4",
        "prompt": "The genome is…",
        "options": [
          "The entire genetic material of an organism",
          "One chosen gene only",
          "Only a muscle cell shape"
        ],
        "answer": 0,
        "why": "Genome means the whole genetic collection.",
        "concept": "bio.inherit-dna-genome"
      }
    ],
    "check": [
      {
        "id": "bio.c-inherit-dna-genome1",
        "prompt": "Which structure contains DNA in a typical nucleus?",
        "options": [
          "A glucose droplet",
          "Chromosomes",
          "Only the cell wall"
        ],
        "answer": 1,
        "why": "Nuclear DNA is organised into chromosomes.",
        "concept": "bio.inherit-dna-genome"
      },
      {
        "id": "bio.c-inherit-dna-genome2",
        "prompt": "Which description of DNA is correct?",
        "options": [
          "A single amino acid",
          "A sugar with no polymer structure",
          "A two-stranded double-helical polymer"
        ],
        "answer": 2,
        "why": "Two DNA strands form a double helix.",
        "concept": "bio.inherit-dna-genome"
      },
      {
        "id": "bio.c-inherit-dna-genome3",
        "prompt": "Which is a gene?",
        "options": [
          "A section of DNA coding for an amino-acid sequence",
          "The entire human population",
          "A complete ecosystem"
        ],
        "answer": 0,
        "why": "A gene is a DNA section.",
        "concept": "bio.inherit-dna-genome"
      },
      {
        "id": "bio.c-inherit-dna-genome4",
        "prompt": "How does a genome differ from a gene?",
        "options": [
          "They are always identical in size",
          "A genome is the whole genetic material; a gene is a section",
          "A genome has no DNA"
        ],
        "answer": 1,
        "why": "They describe different scales.",
        "concept": "bio.inherit-dna-genome"
      },
      {
        "id": "bio.c-inherit-dna-genome5",
        "prompt": "Which is a use of human genome study?",
        "options": [
          "Guaranteed prediction of every illness",
          "Replacing all clinical evidence",
          "Tracing past human migration patterns"
        ],
        "answer": 2,
        "why": "Patterns in genomes can inform migration history.",
        "concept": "bio.inherit-dna-genome"
      },
      {
        "id": "bio.c-inherit-dna-genome6",
        "prompt": "Which medical use is supported?",
        "options": [
          "Searching for disease-linked genes and understanding inherited disorders",
          "Guaranteeing every person has the same health",
          "Eliminating the need for other evidence"
        ],
        "answer": 0,
        "why": "Genome research can support disease understanding and treatment.",
        "concept": "bio.inherit-dna-genome"
      }
    ]
  }
];
export const inheritConcepts={"bio.inherit-reproduction": "Sexual & asexual reproduction", "bio.inherit-meiosis": "Meiosis: halve the chromosome set", "bio.inherit-fertilisation-growth": "Fertilisation & embryo growth", "bio.inherit-reproduction-strategies": "Reproduction strategies", "bio.inherit-dna-genome": "DNA, genes & the genome"};
