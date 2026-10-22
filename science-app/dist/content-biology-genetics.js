export const genLessons=[
  {
    "id": "science.biology.inheritance-variation-and-evolution.dna-nucleotides",
    "title": "Nucleotides & the DNA polymer",
    "short": "Nucleotides & the DNA polymer",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.5"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Each DNA nucleotide contains a sugar, a phosphate group and one base. The base attaches to the sugar. Repeated nucleotides build the DNA polymer.",
    "learn": [
      {
        "title": "Three parts",
        "text": "Each DNA nucleotide contains a sugar, a phosphate group and one base. The base attaches to the sugar. Repeated nucleotides build the DNA polymer.",
        "scene": "gen:nucleotide:0",
        "process": false
      },
      {
        "title": "Four bases",
        "text": "DNA uses four bases: A, C, G and T. Nucleotides share the sugar/phosphate parts but differ in their attached base.",
        "scene": "gen:nucleotide:1",
        "process": false
      },
      {
        "title": "A repeating backbone",
        "text": "Each long strand has alternating sugar and phosphate sections. Bases project from the sugars. Interpret the labelled diagram; you do not need to reproduce its detailed structure.",
        "scene": "gen:backbone:2",
        "process": false
      },
      {
        "title": "Order carries information",
        "text": "Three bases code for a particular amino acid. Base order controls amino-acid order in a protein. The activity uses an invented code to isolate the idea of sequence; it is not a real genetic-code table.",
        "scene": "gen:triplet:3",
        "process": false
      }
    ],
    "widget": "gen-dna-nucleotides",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.dna-genome"
    ],
    "skills": [
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-gen-dna-nucleotides1",
        "prompt": "A nucleotide contains…",
        "options": [
          "Sugar, phosphate and base",
          "Only amino acids",
          "A complete chromosome"
        ],
        "answer": 0,
        "why": "Each repeating nucleotide has three components: sugar, phosphate and one base.",
        "concept": "bio.gen-dna-nucleotides"
      },
      {
        "id": "bio.p-gen-dna-nucleotides2",
        "prompt": "Which are DNA bases?",
        "options": [
          "A,C,G,U",
          "A,C,G,T",
          "Only A and G"
        ],
        "answer": 1,
        "why": "DNA uses T; U is not one of its four bases.",
        "concept": "bio.gen-dna-nucleotides"
      },
      {
        "id": "bio.p-gen-dna-nucleotides3",
        "prompt": "What alternates along the backbone?",
        "options": [
          "Bases and proteins",
          "Ribosomes and genes",
          "Sugar and phosphate"
        ],
        "answer": 2,
        "why": "Bases attach to sugars; the long backbone alternates sugar and phosphate.",
        "concept": "bio.gen-dna-nucleotides"
      },
      {
        "id": "bio.p-gen-dna-nucleotides4",
        "prompt": "How many bases form a coding triplet?",
        "options": [
          "3",
          "2",
          "4"
        ],
        "answer": 0,
        "why": "A triplet has three bases; letter order specifies an amino-acid position.",
        "concept": "bio.gen-dna-nucleotides"
      }
    ],
    "check": [
      {
        "id": "bio.c-gen-dna-nucleotides1",
        "prompt": "Where is a base attached?",
        "options": [
          "To a sugar",
          "To an amino acid",
          "To a ribosome"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: To a sugar.",
        "concept": "bio.gen-dna-nucleotides"
      },
      {
        "id": "bio.c-gen-dna-nucleotides2",
        "prompt": "Which part differs among the four DNA nucleotides?",
        "options": [
          "The base",
          "The common sugar",
          "The phosphate group"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: The base.",
        "concept": "bio.gen-dna-nucleotides"
      },
      {
        "id": "bio.c-gen-dna-nucleotides3",
        "prompt": "A DNA strand has a backbone of…",
        "options": [
          "Amino acids",
          "Alternating sugar/phosphate",
          "Only bases"
        ],
        "answer": 1,
        "why": "Use the lesson evidence: Alternating sugar/phosphate.",
        "concept": "bio.gen-dna-nucleotides"
      },
      {
        "id": "bio.c-gen-dna-nucleotides4",
        "prompt": "Changing base order can change…",
        "options": [
          "Only cell size directly",
          "No encoded information",
          "Amino-acid order"
        ],
        "answer": 2,
        "why": "Use the lesson evidence: Amino-acid order.",
        "concept": "bio.gen-dna-nucleotides"
      },
      {
        "id": "bio.c-gen-dna-nucleotides5",
        "prompt": "Two sequences have the same letters in different orders. Must their information match?",
        "options": [
          "No; order matters",
          "Yes; only totals matter",
          "Yes; order never matters"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: No; order matters.",
        "concept": "bio.gen-dna-nucleotides"
      },
      {
        "id": "bio.c-gen-dna-nucleotides6",
        "prompt": "What is the model code used here?",
        "options": [
          "A clinical genetic test",
          "An invented teaching code",
          "A universal codon table"
        ],
        "answer": 1,
        "why": "Use the lesson evidence: An invented teaching code.",
        "concept": "bio.gen-dna-nucleotides"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.protein-synthesis",
    "title": "Protein synthesis & folding",
    "short": "Protein synthesis & folding",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.5"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": true,
    "minutes": 35,
    "big": "On opposite DNA strands, A pairs with T and C with G. This complementary pairing detail is Higher separate Biology. The two strands together carry related information.",
    "learn": [
      {
        "title": "Complementary strands",
        "text": "On opposite DNA strands, A pairs with T and C with G. This complementary pairing detail is Higher separate Biology. The two strands together carry related information.",
        "scene": "gen:pairing:0",
        "process": false
      },
      {
        "title": "Use a template",
        "text": "Proteins are assembled on ribosomes according to a template derived from a gene. The animation abstracts transfer of information; it does not place intact nuclear DNA through a ribosome.",
        "scene": "gen:synthesis:1"
      },
      {
        "title": "Build in the right order",
        "text": "Carrier molecules bring specific amino acids. The ribosome joins them in the order specified by the template, extending the protein chain. Detailed RNA structures are outside this course.",
        "scene": "gen:synthesis:2"
      },
      {
        "title": "Fold to function",
        "text": "The completed chain folds into a particular shape. Shape helps proteins function as enzymes, hormones or structural materials such as collagen. A changed sequence can alter folding and activity.",
        "scene": "gen:synthesis:3"
      }
    ],
    "widget": "gen-protein-synthesis",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.dna-genome"
    ],
    "skills": [
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-gen-protein-synthesis1",
        "prompt": "What pairs with C?",
        "options": [
          "G",
          "A",
          "T"
        ],
        "answer": 0,
        "why": "C is complementary to G, while A pairs with T.",
        "concept": "bio.gen-protein-synthesis"
      },
      {
        "id": "bio.p-gen-protein-synthesis2",
        "prompt": "Where are proteins assembled?",
        "options": [
          "Nucleus only",
          "Ribosomes",
          "Cell wall"
        ],
        "answer": 1,
        "why": "Ribosomes assemble amino acids according to template information.",
        "concept": "bio.gen-protein-synthesis"
      },
      {
        "id": "bio.p-gen-protein-synthesis3",
        "prompt": "What do carrier molecules bring?",
        "options": [
          "Whole chromosomes",
          "DNA polymers",
          "Specific amino acids"
        ],
        "answer": 2,
        "why": "Carriers deliver specific amino acids rather than whole chromosomes.",
        "concept": "bio.gen-protein-synthesis"
      },
      {
        "id": "bio.p-gen-protein-synthesis4",
        "prompt": "Why does folding matter?",
        "options": [
          "Shape affects function",
          "It removes all genes",
          "Only chain length matters"
        ],
        "answer": 0,
        "why": "A protein’s shape contributes to its interactions and function.",
        "concept": "bio.gen-protein-synthesis"
      }
    ],
    "check": [
      {
        "id": "bio.c-gen-protein-synthesis1",
        "prompt": "The complement of ACG is…",
        "options": [
          "TGC",
          "ACG",
          "UGC"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: TGC.",
        "concept": "bio.gen-protein-synthesis"
      },
      {
        "id": "bio.c-gen-protein-synthesis2",
        "prompt": "What determines amino-acid order?",
        "options": [
          "Template information from the gene",
          "Random choice only",
          "Only protein colour"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: Template information from the gene.",
        "concept": "bio.gen-protein-synthesis"
      },
      {
        "id": "bio.c-gen-protein-synthesis3",
        "prompt": "What is joined into the growing chain?",
        "options": [
          "Nucleotides",
          "Amino acids",
          "Whole cells"
        ],
        "answer": 1,
        "why": "Use the lesson evidence: Amino acids.",
        "concept": "bio.gen-protein-synthesis"
      },
      {
        "id": "bio.c-gen-protein-synthesis4",
        "prompt": "After assembly, a protein…",
        "options": [
          "Always becomes DNA",
          "Has no functional shape",
          "Folds into a particular shape"
        ],
        "answer": 2,
        "why": "Use the lesson evidence: Folds into a particular shape.",
        "concept": "bio.gen-protein-synthesis"
      },
      {
        "id": "bio.c-gen-protein-synthesis5",
        "prompt": "An enzyme shape changes at its active site. What may happen?",
        "options": [
          "Substrate binding/activity may change",
          "It must become a chromosome",
          "Function never changes"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: Substrate binding/activity may change.",
        "concept": "bio.gen-protein-synthesis"
      },
      {
        "id": "bio.c-gen-protein-synthesis6",
        "prompt": "Which statement matches the model limit?",
        "options": [
          "Intact DNA travels through every ribosome",
          "RNA molecular structures are not modelled in detail",
          "Carriers bring whole genes"
        ],
        "answer": 1,
        "why": "Use the lesson evidence: RNA molecular structures are not modelled in detail.",
        "concept": "bio.gen-protein-synthesis"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.coding-variants",
    "title": "Coding & non-coding variants",
    "short": "Coding & non-coding variants",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.5"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": true,
    "minutes": 35,
    "big": "Mutations are changes in genetic material and occur continually. Most do not alter a protein, or alter it only slightly without changing its appearance or function. A change does not automatically cause disease.",
    "learn": [
      {
        "title": "Changes occur continually",
        "text": "Mutations are changes in genetic material and occur continually. Most do not alter a protein, or alter it only slightly without changing its appearance or function. A change does not automatically cause disease.",
        "scene": "gen:variants:0"
      },
      {
        "title": "A coding change can matter",
        "text": "Some coding variants change the amino-acid sequence. The protein may fold differently: an enzyme may bind its substrate poorly, or a structural protein may lose strength. Outcomes depend on the change.",
        "scene": "gen:variants:1"
      },
      {
        "title": "Insert or delete a base",
        "text": "Adding or removing bases can change how a sequence is read in groups of three. Use the token model to compare the original grouping with insertion/deletion. Not every mutation is a single-base insertion or deletion.",
        "scene": "gen:edit:2",
        "process": false
      },
      {
        "title": "Control gene expression",
        "text": "Not all DNA codes for proteins. Non-coding regions can help switch genes on or off. A variant there can alter gene expression, such as how much protein is produced, without changing its amino-acid sequence.",
        "scene": "gen:expression:3",
        "process": false
      }
    ],
    "widget": "gen-coding-variants",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.dna-genome"
    ],
    "skills": [
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-gen-coding-variants1",
        "prompt": "Must every mutation cause disease?",
        "options": [
          "No",
          "Yes",
          "Only in plants"
        ],
        "answer": 0,
        "why": "A DNA change need not change protein activity or phenotype.",
        "concept": "bio.gen-coding-variants"
      },
      {
        "id": "bio.p-gen-coding-variants2",
        "prompt": "A coding variant can change…",
        "options": [
          "Only gene location",
          "A protein sequence/activity",
          "Every chromosome number"
        ],
        "answer": 1,
        "why": "A coding change may alter amino-acid order, folding and activity.",
        "concept": "bio.gen-coding-variants"
      },
      {
        "id": "bio.p-gen-coding-variants3",
        "prompt": "A non-coding variant may affect…",
        "options": [
          "Only sugar production",
          "Nothing ever",
          "Gene expression"
        ],
        "answer": 2,
        "why": "Some non-coding regions regulate expression rather than encode amino acids.",
        "concept": "bio.gen-coding-variants"
      },
      {
        "id": "bio.p-gen-coding-variants4",
        "prompt": "What is a deletion?",
        "options": [
          "Removal of genetic material",
          "Addition of a base",
          "Protein folding only"
        ],
        "answer": 0,
        "why": "Deletion removes genetic material; insertion adds it.",
        "concept": "bio.gen-coding-variants"
      }
    ],
    "check": [
      {
        "id": "bio.c-gen-coding-variants1",
        "prompt": "Most mutations…",
        "options": [
          "Have no protein effect or only small changes without changed function",
          "Always destroy the protein",
          "Always improve fitness"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: Have no protein effect or only small changes without changed function.",
        "concept": "bio.gen-coding-variants"
      },
      {
        "id": "bio.c-gen-coding-variants2",
        "prompt": "A changed enzyme active site may…",
        "options": [
          "Fit its substrate less well",
          "Always make a faster enzyme",
          "Become a ribosome"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: Fit its substrate less well.",
        "concept": "bio.gen-coding-variants"
      },
      {
        "id": "bio.c-gen-coding-variants3",
        "prompt": "An insertion is…",
        "options": [
          "Loss of a base",
          "Addition of genetic material",
          "A protein chain fold"
        ],
        "answer": 1,
        "why": "Use the lesson evidence: Addition of genetic material.",
        "concept": "bio.gen-coding-variants"
      },
      {
        "id": "bio.c-gen-coding-variants4",
        "prompt": "A variant in a switch region could change…",
        "options": [
          "Only chromosome count",
          "Every amino acid automatically",
          "How much of a gene product is made"
        ],
        "answer": 2,
        "why": "Use the lesson evidence: How much of a gene product is made.",
        "concept": "bio.gen-coding-variants"
      },
      {
        "id": "bio.c-gen-coding-variants5",
        "prompt": "Does non-coding mean biologically useless?",
        "options": [
          "No; some regions regulate expression",
          "Yes, always",
          "It means no DNA is present"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: No; some regions regulate expression.",
        "concept": "bio.gen-coding-variants"
      },
      {
        "id": "bio.c-gen-coding-variants6",
        "prompt": "Why use groups of three in the edit model?",
        "options": [
          "To count whole chromosomes",
          "To show how reading groups can change",
          "To prove every change causes illness"
        ],
        "answer": 1,
        "why": "Use the lesson evidence: To show how reading groups can change.",
        "concept": "bio.gen-coding-variants"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.alleles",
    "title": "Alleles, genotype & phenotype",
    "short": "Alleles, genotype & phenotype",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.6"
    ],
    "combinedRefs": [
      "6.1.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A chromosome contains DNA; a gene is a section of DNA. An allele is a version of a gene. Gametes carry one allele of the modelled paired gene and combine at fertilisation.",
    "learn": [
      {
        "title": "Versions of a gene",
        "text": "A chromosome contains DNA; a gene is a section of DNA. An allele is a version of a gene. Gametes carry one allele of the modelled paired gene and combine at fertilisation.",
        "scene": "gen:alleles:0",
        "process": false
      },
      {
        "title": "Read the pair",
        "text": "Genotype is the allele combination. AA and aa are homozygous because both alleles match. Aa is heterozygous because the two differ. Letters identify variants, not entire chromosomes.",
        "scene": "gen:alleles:1",
        "process": false
      },
      {
        "title": "From genotype to phenotype",
        "text": "Phenotype is the expressed characteristic. In our simple paired-gene model A is dominant: AA and Aa show the dominant phenotype; aa shows the recessive phenotype. Dominant does not mean common, better or stronger.",
        "scene": "gen:alleles:2",
        "process": false
      },
      {
        "title": "Know the model limits",
        "text": "Some characteristics involve a single gene, including mouse fur-colour examples and red-green colour blindness. Colour blindness involves sex-linked inheritance, so it is not represented by our autosomal toy cross. Most characteristics involve multiple genes interacting, often with environmental effects.",
        "scene": "gen:limits:3",
        "process": false
      }
    ],
    "widget": "gen-alleles",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.dna-genome"
    ],
    "skills": [
      "MS1c",
      "MS2e",
      "MS2c",
      "MS4a"
    ],
    "practice": [
      {
        "id": "bio.p-gen-alleles1",
        "prompt": "An allele is…",
        "options": [
          "A gene version",
          "An entire genome",
          "Only a phenotype"
        ],
        "answer": 0,
        "why": "Different versions of the same gene are alleles.",
        "concept": "bio.gen-alleles"
      },
      {
        "id": "bio.p-gen-alleles2",
        "prompt": "Aa is…",
        "options": [
          "Homozygous",
          "Heterozygous",
          "A single gamete"
        ],
        "answer": 1,
        "why": "Aa contains two different alleles; identical pairs are homozygous.",
        "concept": "bio.gen-alleles"
      },
      {
        "id": "bio.p-gen-alleles3",
        "prompt": "An expressed characteristic is the…",
        "options": [
          "Genotype",
          "Chromosome",
          "Phenotype"
        ],
        "answer": 2,
        "why": "Phenotype is the characteristic expressed; genotype is the allele combination.",
        "concept": "bio.gen-alleles"
      },
      {
        "id": "bio.p-gen-alleles4",
        "prompt": "Which is homozygous?",
        "options": [
          "aa",
          "Aa",
          "aA"
        ],
        "answer": 0,
        "why": "Both alleles in aa match, so this is homozygous recessive.",
        "concept": "bio.gen-alleles"
      }
    ],
    "check": [
      {
        "id": "bio.c-gen-alleles1",
        "prompt": "Genotype means…",
        "options": [
          "Allele combination",
          "Only outward appearance",
          "A whole ecosystem"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: Allele combination.",
        "concept": "bio.gen-alleles"
      },
      {
        "id": "bio.c-gen-alleles2",
        "prompt": "With A dominant, Aa shows…",
        "options": [
          "The dominant phenotype",
          "Only the recessive phenotype",
          "No phenotype"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: The dominant phenotype.",
        "concept": "bio.gen-alleles"
      },
      {
        "id": "bio.c-gen-alleles3",
        "prompt": "A recessive phenotype in the paired model appears with…",
        "options": [
          "AA",
          "aa",
          "Aa"
        ],
        "answer": 1,
        "why": "Use the lesson evidence: aa.",
        "concept": "bio.gen-alleles"
      },
      {
        "id": "bio.c-gen-alleles4",
        "prompt": "Dominant means…",
        "options": [
          "Always most common",
          "Always beneficial",
          "Expressed with one copy in this model"
        ],
        "answer": 2,
        "why": "Use the lesson evidence: Expressed with one copy in this model.",
        "concept": "bio.gen-alleles"
      },
      {
        "id": "bio.c-gen-alleles5",
        "prompt": "Most characteristics are influenced by…",
        "options": [
          "Multiple genes interacting",
          "Only one gene without exception",
          "No genes"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: Multiple genes interacting.",
        "concept": "bio.gen-alleles"
      },
      {
        "id": "bio.c-gen-alleles6",
        "prompt": "What does a gamete carry for this modelled gene?",
        "options": [
          "Both parental pairs",
          "One allele",
          "No genetic information"
        ],
        "answer": 1,
        "why": "Use the lesson evidence: One allele.",
        "concept": "bio.gen-alleles"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.crosses",
    "title": "Complete genetic crosses",
    "short": "Complete genetic crosses",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.6"
    ],
    "combinedRefs": [
      "6.1.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A Punnett square combines one allele from each parent. Here the parental genotypes and row/column gametes are supplied. Each cell records a possible allele combination, not a scheduled birth.",
    "learn": [
      {
        "title": "Use the supplied gametes",
        "text": "A Punnett square combines one allele from each parent. Here the parental genotypes and row/column gametes are supplied. Each cell records a possible allele combination, not a scheduled birth.",
        "scene": "gen:cross:0",
        "process": false
      },
      {
        "title": "Complete all four cells",
        "text": "For Aa × Aa, gametes A and a label each axis. The cells are AA, Aa, Aa and aa. This gives genotype ratio1:2:1 and, with A dominant, phenotype ratio3:1.",
        "scene": "gen:cross:1",
        "process": false
      },
      {
        "title": "Turn counts into probabilities",
        "text": "One of the four equally likely combinations is aa, giving1/4 or25%. Three show the dominant phenotype, giving3/4 or75%. Equal gamete likelihood is part of this simplified model.",
        "scene": "gen:cross:2",
        "process": false
      },
      {
        "title": "Probability is not a promise",
        "text": "Each fertilisation is a new event. A25% chance does not mean exactly one recessive offspring in every four births. Most traits are not controlled by one gene. Creating a cross from unsupplied gametes is reserved for the later Higher lesson; family trees follow separately.",
        "scene": "gen:limits:3",
        "process": false
      }
    ],
    "widget": "gen-crosses",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.dna-genome"
    ],
    "skills": [
      "MS1c",
      "MS2e",
      "MS2c",
      "MS4a"
    ],
    "practice": [
      {
        "id": "bio.p-gen-crosses1",
        "prompt": "Each Punnett cell combines…",
        "options": [
          "One gamete allele from each parent",
          "Two complete genomes from each parent",
          "No alleles"
        ],
        "answer": 0,
        "why": "Each possible offspring genotype receives one allele from each gamete.",
        "concept": "bio.gen-crosses"
      },
      {
        "id": "bio.p-gen-crosses2",
        "prompt": "Aa × Aa gives how many aa cells out of4?",
        "options": [
          "2",
          "1",
          "4"
        ],
        "answer": 1,
        "why": "The four combinations AA,Aa,Aa,aa contain one aa.",
        "concept": "bio.gen-crosses"
      },
      {
        "id": "bio.p-gen-crosses3",
        "prompt": "For that cross, dominant phenotype probability is…",
        "options": [
          "25%",
          "50%",
          "75%"
        ],
        "answer": 2,
        "why": "AA and both Aa cells express A:3/4=75%.",
        "concept": "bio.gen-crosses"
      },
      {
        "id": "bio.p-gen-crosses4",
        "prompt": "Genotype ratio AA:Aa:aa is…",
        "options": [
          "1:2:1",
          "3:1:0",
          "1:1:2"
        ],
        "answer": 0,
        "why": "AA appears once, Aa twice and aa once:1:2:1.",
        "concept": "bio.gen-crosses"
      }
    ],
    "check": [
      {
        "id": "bio.c-gen-crosses1",
        "prompt": "Aa × aa gives aa probability…",
        "options": [
          "50%",
          "25%",
          "100%"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: 50%.",
        "concept": "bio.gen-crosses"
      },
      {
        "id": "bio.c-gen-crosses2",
        "prompt": "AA × aa gives offspring genotype…",
        "options": [
          "Aa",
          "AA only",
          "aa only"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: Aa.",
        "concept": "bio.gen-crosses"
      },
      {
        "id": "bio.c-gen-crosses3",
        "prompt": "Aa × Aa phenotype ratio dominant:recessive is…",
        "options": [
          "1:2:1",
          "3:1",
          "1:3"
        ],
        "answer": 1,
        "why": "Use the lesson evidence: 3:1.",
        "concept": "bio.gen-crosses"
      },
      {
        "id": "bio.c-gen-crosses4",
        "prompt": "A25% recessive chance means…",
        "options": [
          "Exactly one in every four births",
          "Only the fourth birth may be recessive",
          "A probability for each event, not an exact family quota"
        ],
        "answer": 2,
        "why": "Use the lesson evidence: A probability for each event, not an exact family quota.",
        "concept": "bio.gen-crosses"
      },
      {
        "id": "bio.c-gen-crosses5",
        "prompt": "Two Aa cells out of4 represent…",
        "options": [
          "1/2 or50%",
          "1/4 or25%",
          "3/4 or75%"
        ],
        "answer": 0,
        "why": "Use the lesson evidence: 1/2 or50%.",
        "concept": "bio.gen-crosses"
      },
      {
        "id": "bio.c-gen-crosses6",
        "prompt": "What is supplied in this lesson’s completion tasks?",
        "options": [
          "No parental information",
          "Parent genotypes and gamete headers",
          "The actual future family outcomes"
        ],
        "answer": 1,
        "why": "Use the lesson evidence: Parent genotypes and gamete headers.",
        "concept": "bio.gen-crosses"
      }
    ]
  }
];
export const genConcepts={"bio.gen-dna-nucleotides": "Nucleotides & the DNA polymer", "bio.gen-protein-synthesis": "Protein synthesis & folding", "bio.gen-coding-variants": "Coding & non-coding variants", "bio.gen-alleles": "Alleles, genotype & phenotype", "bio.gen-crosses": "Complete genetic crosses"};
