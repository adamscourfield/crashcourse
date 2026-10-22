export const familyLessons=[
  {
    "id": "science.biology.inheritance-variation-and-evolution.construct-crosses",
    "title": "Construct & predict genetic crosses",
    "short": "Construct & predict genetic crosses",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.6"
    ],
    "combinedRefs": [
      "6.1.4"
    ],
    "separate": false,
    "higher": true,
    "minutes": 35,
    "big": "Read each parental genotype before setting up a cross. In our single-gene model, an Aa parent can make gametes carrying A or a; an aa parent makes gametes carrying only a. A gamete does not carry the whole pair.",
    "learn": [
      {
        "title": "Start from the parents",
        "text": "Read each parental genotype before setting up a cross. In our single-gene model, an Aa parent can make gametes carrying A or a; an aa parent makes gametes carrying only a. A gamete does not carry the whole pair.",
        "scene": "family:cross:0",
        "process": false
      },
      {
        "title": "Build the axes",
        "text": "Choose gamete headers from each parent, then combine one row allele with one column allele in every cell. Changing header order changes cell positions, not the underlying probabilities.",
        "scene": "family:cross:1",
        "process": false
      },
      {
        "title": "Count the outcomes",
        "text": "For Aa × aa, half the cells are Aa and half aa. With A dominant, the expected phenotype ratio is1:1 and the recessive probability is50%. For Aa × Aa it is25%.",
        "scene": "family:cross:2",
        "process": false
      },
      {
        "title": "Predict without a quota",
        "text": "Each fertilisation is a new event. Probabilities describe possible outcomes under equal gamete likelihood, not an exact birth sequence. Most characteristics are more complex than this single-gene model.",
        "scene": "family:evidence:3",
        "process": false
      }
    ],
    "widget": "family-construct-crosses",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.alleles",
      "science.biology.inheritance-variation-and-evolution.crosses"
    ],
    "skills": [
      "MS2e",
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-family-construct-crosses1",
        "prompt": "Aa can produce which gamete alleles?",
        "options": [
          "A or a",
          "Aa only",
          "AA only"
        ],
        "answer": 0,
        "why": "Each gamete carries one allele.",
        "concept": "bio.family-construct-crosses"
      },
      {
        "id": "bio.p-family-construct-crosses2",
        "prompt": "An aa parent contributes…",
        "options": [
          "A only",
          "a only",
          "Aa together"
        ],
        "answer": 1,
        "why": "Both copies are a, so each gamete carries a.",
        "concept": "bio.family-construct-crosses"
      },
      {
        "id": "bio.p-family-construct-crosses3",
        "prompt": "Aa × aa has recessive probability…",
        "options": [
          "25%",
          "75%",
          "50%"
        ],
        "answer": 2,
        "why": "Two of four equally likely cells are aa.",
        "concept": "bio.family-construct-crosses"
      },
      {
        "id": "bio.p-family-construct-crosses4",
        "prompt": "Swapping header order changes…",
        "options": [
          "Cell positions, not probabilities",
          "The parents’ genotypes",
          "The inheritance rule"
        ],
        "answer": 0,
        "why": "All combinations remain represented.",
        "concept": "bio.family-construct-crosses"
      }
    ],
    "check": [
      {
        "id": "bio.c-family-construct-crosses1",
        "prompt": "Which gametes can BB produce?",
        "options": [
          "B or b",
          "B only",
          "BB together"
        ],
        "answer": 1,
        "why": "Only B alleles are available.",
        "concept": "bio.family-construct-crosses"
      },
      {
        "id": "bio.c-family-construct-crosses2",
        "prompt": "Bb × bb gives which offspring set?",
        "options": [
          "BB only",
          "All BB and bb",
          "Bb and bb"
        ],
        "answer": 2,
        "why": "One parent contributes B/b, the other b.",
        "concept": "bio.family-construct-crosses"
      },
      {
        "id": "bio.c-family-construct-crosses3",
        "prompt": "Bb × Bb gives bb probability…",
        "options": [
          "25%",
          "50%",
          "75%"
        ],
        "answer": 0,
        "why": "One of four combinations is bb.",
        "concept": "bio.family-construct-crosses"
      },
      {
        "id": "bio.c-family-construct-crosses4",
        "prompt": "Two recessive cells out of four give…",
        "options": [
          "25%",
          "50%",
          "100%"
        ],
        "answer": 1,
        "why": "2/4=1/2=50%.",
        "concept": "bio.family-construct-crosses"
      },
      {
        "id": "bio.c-family-construct-crosses5",
        "prompt": "A correct cross must include…",
        "options": [
          "Only the desired child",
          "Only one parental allele pair",
          "Every row-column combination"
        ],
        "answer": 2,
        "why": "The grid represents all supplied gamete combinations.",
        "concept": "bio.family-construct-crosses"
      },
      {
        "id": "bio.c-family-construct-crosses6",
        "prompt": "A50% chance means…",
        "options": [
          "Probability per event, not an exact family quota",
          "Every second child is recessive",
          "Exactly half of any small family"
        ],
        "answer": 0,
        "why": "Small samples need not match expected proportions.",
        "concept": "bio.family-construct-crosses"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.family-trees",
    "title": "Read genetic family trees",
    "short": "Read genetic family trees",
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
    "big": "A pedigree records family relationships and a stated characteristic. In these diagrams squares/circles follow the conventional male/female symbols; a filled symbol and the word affected indicate the characteristic. Unfilled means unaffected, not necessarily non-carrier.",
    "learn": [
      {
        "title": "Read the key first",
        "text": "A pedigree records family relationships and a stated characteristic. In these diagrams squares/circles follow the conventional male/female symbols; a filled symbol and the word affected indicate the characteristic. Unfilled means unaffected, not necessarily non-carrier.",
        "scene": "family:pedigree:0",
        "process": false
      },
      {
        "title": "Follow generations",
        "text": "A horizontal partner line links two parents; a vertical line reaches their offspring. Generation labels and individual IDs make a conclusion traceable. These fictional families use a stated simple autosomal inheritance model.",
        "scene": "family:pedigree:1",
        "process": false
      },
      {
        "title": "Infer only what follows",
        "text": "If two unaffected parents have an affected child under a recessive model, both parents must carry a. They are Aa; the child is aa. An unaffected sibling could be AA or Aa, so its exact genotype is not established.",
        "scene": "family:pedigree:2",
        "process": false
      },
      {
        "title": "Test possible explanations",
        "text": "Use the specified inheritance rule and all the relationships. A small tree can leave several genotypes possible. A trait appearing to skip a generation is not by itself proof of recessive inheritance in every real family.",
        "scene": "family:evidence:3",
        "process": false
      }
    ],
    "widget": "family-family-trees",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.alleles",
      "science.biology.inheritance-variation-and-evolution.crosses"
    ],
    "skills": [
      "MS1c",
      "MS2c",
      "MS4a"
    ],
    "practice": [
      {
        "id": "bio.p-family-family-trees1",
        "prompt": "Does unfilled always mean non-carrier?",
        "options": [
          "No",
          "Yes",
          "Only in generationII"
        ],
        "answer": 0,
        "why": "Unaffected heterozygotes can carry a recessive allele.",
        "concept": "bio.family-family-trees"
      },
      {
        "id": "bio.p-family-family-trees2",
        "prompt": "Under the stated recessive model, two unaffected parents have an aa child. Parents are…",
        "options": [
          "AA and AA",
          "Aa and Aa",
          "aa and aa"
        ],
        "answer": 1,
        "why": "Each supplied a, but neither is affected.",
        "concept": "bio.family-family-trees"
      },
      {
        "id": "bio.p-family-family-trees3",
        "prompt": "An unaffected sibling in that family could be…",
        "options": [
          "Only aa",
          "Only AA",
          "AA or Aa"
        ],
        "answer": 2,
        "why": "The phenotype alone cannot distinguish AA from Aa.",
        "concept": "bio.family-family-trees"
      },
      {
        "id": "bio.p-family-family-trees4",
        "prompt": "What should a pedigree conclusion cite?",
        "options": [
          "Individual IDs, links and inheritance rule",
          "Only the prettiest symbol",
          "A guaranteed future birth"
        ],
        "answer": 0,
        "why": "The evidence must support the inference.",
        "concept": "bio.family-family-trees"
      }
    ],
    "check": [
      {
        "id": "bio.c-family-family-trees1",
        "prompt": "In the displayed recessive family, I-1 is unaffected but has an affected child. I-1 must be…",
        "options": [
          "AA",
          "Aa",
          "aa"
        ],
        "answer": 1,
        "why": "An unaffected parent of aa must contribute a and also carry A.",
        "concept": "bio.family-family-trees",
        "figure": {
          "kind": "family-assessment",
          "diagram": "recessive"
        }
      },
      {
        "id": "bio.c-family-family-trees2",
        "prompt": "Which genotype is certain for affected II-1?",
        "options": [
          "AA",
          "Aa",
          "aa"
        ],
        "answer": 2,
        "why": "Affected is aa in the stated recessive model.",
        "concept": "bio.family-family-trees",
        "figure": {
          "kind": "family-assessment",
          "diagram": "recessive"
        }
      },
      {
        "id": "bio.c-family-family-trees3",
        "prompt": "What is established about unaffected II-2?",
        "options": [
          "AA or Aa",
          "Definitely AA",
          "Definitely aa"
        ],
        "answer": 0,
        "why": "Both unaffected genotypes remain possible.",
        "concept": "bio.family-family-trees",
        "figure": {
          "kind": "family-assessment",
          "diagram": "recessive"
        }
      },
      {
        "id": "bio.c-family-family-trees4",
        "prompt": "Which link identifies offspring?",
        "options": [
          "Any nearby label",
          "Vertical descent from the parental line",
          "Only matching colours"
        ],
        "answer": 1,
        "why": "Pedigree lines specify relationships.",
        "concept": "bio.family-family-trees"
      },
      {
        "id": "bio.c-family-family-trees5",
        "prompt": "Why is the key necessary?",
        "options": [
          "Filled always means male",
          "Every trait follows the same rule",
          "Symbols and shading need stated meanings"
        ],
        "answer": 2,
        "why": "Interpret symbols using the stated key.",
        "concept": "bio.family-family-trees"
      },
      {
        "id": "bio.c-family-family-trees6",
        "prompt": "A small family tree may…",
        "options": [
          "Leave more than one genotype possible",
          "Prove every future outcome",
          "Remove inheritance uncertainty"
        ],
        "answer": 0,
        "why": "Do not claim more than the evidence establishes.",
        "concept": "bio.family-family-trees"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.inherited-disorders",
    "title": "Polydactyly & cystic fibrosis",
    "short": "Polydactyly & cystic fibrosis",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.7"
    ],
    "combinedRefs": [
      "6.1.5"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Some disorders result from inherited alleles. In the GCSE model polydactyly, extra fingers or toes, is caused by a dominant allele P. With p representing the alternative, Pp is affected and pp is unaffected.",
    "learn": [
      {
        "title": "Alleles can cause disorders",
        "text": "Some disorders result from inherited alleles. In the GCSE model polydactyly, extra fingers or toes, is caused by a dominant allele P. With p representing the alternative, Pp is affected and pp is unaffected.",
        "scene": "family:disorders:0",
        "process": false
      },
      {
        "title": "A recessive example",
        "text": "Cystic fibrosis affects cell membranes and is caused by a recessive allele. Here f is the CF allele and F the alternative. ff is affected; Ff is an unaffected carrier in this simplified model. Letters are labels, not measures of severity.",
        "scene": "family:disorders:1",
        "process": false
      },
      {
        "title": "Complete a supplied cross",
        "text": "For two carriers Ff × Ff, the possibilities are FF, Ff, Ff and ff:25% affected,50% unaffected carriers,25% unaffected non-carriers. For Pp × pp, half the possibilities are affected.",
        "scene": "family:cross:2",
        "process": false
      },
      {
        "title": "Risk applies each time",
        "text": "An earlier child’s outcome does not use up an allele or change the model’s probability for the next pregnancy. These educational crosses do not diagnose an individual or represent every biological complication.",
        "scene": "family:evidence:3",
        "process": false
      }
    ],
    "widget": "family-inherited-disorders",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.alleles",
      "science.biology.inheritance-variation-and-evolution.crosses"
    ],
    "skills": [
      "MS1c",
      "MS2c",
      "MS4a"
    ],
    "practice": [
      {
        "id": "bio.p-family-inherited-disorders1",
        "prompt": "Polydactyly in the GCSE model is…",
        "options": [
          "Dominant",
          "Always recessive",
          "Not inherited"
        ],
        "answer": 0,
        "why": "One P is sufficient in the model.",
        "concept": "bio.family-inherited-disorders"
      },
      {
        "id": "bio.p-family-inherited-disorders2",
        "prompt": "Cystic fibrosis is caused by a…",
        "options": [
          "Dominant P allele",
          "Recessive allele",
          "Lack of all chromosomes"
        ],
        "answer": 1,
        "why": "Two f alleles give ff in this model.",
        "concept": "bio.family-inherited-disorders"
      },
      {
        "id": "bio.p-family-inherited-disorders3",
        "prompt": "Ff is…",
        "options": [
          "Affected with recessive CF",
          "A gamete",
          "An unaffected carrier"
        ],
        "answer": 2,
        "why": "It carries f but also F.",
        "concept": "bio.family-inherited-disorders"
      },
      {
        "id": "bio.p-family-inherited-disorders4",
        "prompt": "Ff × Ff gives ff probability…",
        "options": [
          "25%",
          "50%",
          "100%"
        ],
        "answer": 0,
        "why": "One of the four combinations is ff.",
        "concept": "bio.family-inherited-disorders"
      }
    ],
    "check": [
      {
        "id": "bio.c-family-inherited-disorders1",
        "prompt": "Which genotype is affected by polydactyly in the supplied P model?",
        "options": [
          "pp only",
          "Pp",
          "Neither"
        ],
        "answer": 1,
        "why": "P is dominant.",
        "concept": "bio.family-inherited-disorders"
      },
      {
        "id": "bio.c-family-inherited-disorders2",
        "prompt": "Which genotype is affected by recessive CF in the supplied F/f model?",
        "options": [
          "FF",
          "Ff",
          "ff"
        ],
        "answer": 2,
        "why": "Two recessive alleles are required.",
        "concept": "bio.family-inherited-disorders"
      },
      {
        "id": "bio.c-family-inherited-disorders3",
        "prompt": "What is the carrier probability in Ff × Ff?",
        "options": [
          "50%",
          "25%",
          "0%"
        ],
        "answer": 0,
        "why": "Two of four cells are Ff.",
        "concept": "bio.family-inherited-disorders"
      },
      {
        "id": "bio.c-family-inherited-disorders4",
        "prompt": "What does CF affect, as required here?",
        "options": [
          "Only finger number",
          "Cell membranes",
          "Only chromosome count"
        ],
        "answer": 1,
        "why": "The specification identifies a membrane disorder.",
        "concept": "bio.family-inherited-disorders"
      },
      {
        "id": "bio.c-family-inherited-disorders5",
        "prompt": "Pp × pp gives an affected probability of…",
        "options": [
          "0%",
          "25%",
          "50%"
        ],
        "answer": 2,
        "why": "Two of four possibilities contain P.",
        "concept": "bio.family-inherited-disorders"
      },
      {
        "id": "bio.c-family-inherited-disorders6",
        "prompt": "After an affected child, Ff × Ff gives the next child an ff chance of…",
        "options": [
          "25% again",
          "0% because it was used up",
          "100%"
        ],
        "answer": 0,
        "why": "Each fertilisation is a new event in the model.",
        "concept": "bio.family-inherited-disorders"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.screening",
    "title": "Evaluate embryo screening",
    "short": "Evaluate embryo screening",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.7"
    ],
    "combinedRefs": [
      "6.1.5"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Embryo testing can check for a particular inherited condition as part of IVF. Results may inform which embryos are considered for transfer. Testing and selection do not edit a gene or treat an affected embryo.",
    "learn": [
      {
        "title": "Test for a specified condition",
        "text": "Embryo testing can check for a particular inherited condition as part of IVF. Results may inform which embryos are considered for transfer. Testing and selection do not edit a gene or treat an affected embryo.",
        "scene": "family:screening:0",
        "process": false
      },
      {
        "title": "Consider benefits and limits",
        "text": "Testing may reduce the chance of passing on a particular condition. It cannot guarantee a child free of every health problem or a successful pregnancy. Tests can fail or give incorrect information, and suitable embryos may not be available.",
        "scene": "family:screening:1",
        "process": false
      },
      {
        "title": "Include costs and burdens",
        "text": "IVF and testing can involve financial costs, time, physical procedures and emotional stress. Access and available resources raise social questions. Weigh these alongside the potential benefit rather than treating one number as the whole decision.",
        "scene": "family:evidence:2",
        "process": false
      },
      {
        "title": "Evaluate different perspectives",
        "text": "Some people support reducing the risk of serious inherited illness; others have concerns about embryo selection, what happens to embryos, disability perspectives or unequal access. Scientific evidence informs the discussion, but does not settle every ethical value. Gene therapy is a distinct approach aimed at changing gene function; possible benefits also raise ethical questions.",
        "scene": "family:screening:3",
        "process": false
      }
    ],
    "widget": "family-screening",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.alleles",
      "science.biology.inheritance-variation-and-evolution.crosses"
    ],
    "skills": [
      "WS1.3"
    ],
    "practice": [
      {
        "id": "bio.p-family-screening1",
        "prompt": "Embryo screening is best described as…",
        "options": [
          "Testing for a specified condition",
          "Always rewriting every gene",
          "Guaranteed prevention of all illness"
        ],
        "answer": 0,
        "why": "Testing provides information; it is not gene editing.",
        "concept": "bio.family-screening"
      },
      {
        "id": "bio.p-family-screening2",
        "prompt": "Which is a possible benefit?",
        "options": [
          "Guaranteed birth",
          "Reduced transmission risk for the tested condition",
          "No IVF procedures ever"
        ],
        "answer": 1,
        "why": "Testing may inform selection for a particular condition.",
        "concept": "bio.family-screening"
      },
      {
        "id": "bio.p-family-screening3",
        "prompt": "A relevant social issue is…",
        "options": [
          "Only symbol colour",
          "Nothing beyond the gene",
          "Unequal access and resources"
        ],
        "answer": 2,
        "why": "Access and resource allocation matter.",
        "concept": "bio.family-screening"
      },
      {
        "id": "bio.p-family-screening4",
        "prompt": "Which evaluation is balanced?",
        "options": [
          "Weigh benefits, uncertainty, burdens and different values",
          "Assume science alone settles every value",
          "Ignore affected people’s perspectives"
        ],
        "answer": 0,
        "why": "Evaluation needs evidence and perspectives.",
        "concept": "bio.family-screening"
      }
    ],
    "check": [
      {
        "id": "bio.c-family-screening1",
        "prompt": "A test does not identify the specified condition. Which conclusion follows?",
        "options": [
          "All future health problems are excluded",
          "This result concerns the tested condition, with test limitations",
          "Pregnancy is certain"
        ],
        "answer": 1,
        "why": "Testing has a specified scope and is not perfect.",
        "concept": "bio.family-screening"
      },
      {
        "id": "bio.c-family-screening2",
        "prompt": "Why consider patients’ perspectives?",
        "options": [
          "Only price matters",
          "Values never differ",
          "Treatment burden and priorities can differ"
        ],
        "answer": 2,
        "why": "Physical/emotional burdens and values matter.",
        "concept": "bio.family-screening"
      },
      {
        "id": "bio.c-family-screening3",
        "prompt": "Which distinguishes testing from gene therapy?",
        "options": [
          "Testing obtains information; gene therapy seeks to change gene function",
          "Both always edit every embryo",
          "Neither relates to inherited disorders"
        ],
        "answer": 0,
        "why": "The approaches have different purposes.",
        "concept": "bio.family-screening"
      },
      {
        "id": "bio.c-family-screening4",
        "prompt": "A fictional8-embryo set has6 without the tested condition identified. Percentage?",
        "options": [
          "25%",
          "75%",
          "100%"
        ],
        "answer": 1,
        "why": "6/8×100=75%; this is supplied classroom data.",
        "concept": "bio.family-screening"
      },
      {
        "id": "bio.c-family-screening5",
        "prompt": "Which ethical issue can remain despite accurate biological evidence?",
        "options": [
          "How many chromosomes are in the given diagram",
          "Whether6/8 is75%",
          "Whether embryo selection is acceptable to a person"
        ],
        "answer": 2,
        "why": "Values cannot be resolved solely by biological measurement.",
        "concept": "bio.family-screening"
      },
      {
        "id": "bio.c-family-screening6",
        "prompt": "Why can a good test result still fail to lead to a birth?",
        "options": [
          "Transfer and pregnancy success are not guaranteed",
          "The test creates a child immediately",
          "All testing eliminates IVF risks"
        ],
        "answer": 0,
        "why": "Embryo testing and successful birth are different outcomes.",
        "concept": "bio.family-screening"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.sex-inheritance",
    "title": "Chromosomal sex inheritance",
    "short": "Chromosomal sex inheritance",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.1.8"
    ],
    "combinedRefs": [
      "6.1.6"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Ordinary human body cells typically have23 chromosome pairs:22 pairs of autosomes and one sex-chromosome pair. The GCSE model uses XX for female and XY for male chromosomal sex. This simplified model does not describe every biological variation or a person’s identity.",
    "learn": [
      {
        "title": "Locate the chromosome pair",
        "text": "Ordinary human body cells typically have23 chromosome pairs:22 pairs of autosomes and one sex-chromosome pair. The GCSE model uses XX for female and XY for male chromosomal sex. This simplified model does not describe every biological variation or a person’s identity.",
        "scene": "family:sex:0",
        "process": false
      },
      {
        "title": "Make the gametes",
        "text": "In the model, eggs carry X; sperm carry X or Y. Each gamete has one sex chromosome as part of its23-chromosome set. It does not carry a whole XX or XY pair.",
        "scene": "family:sex:1",
        "process": false
      },
      {
        "title": "Combine the contributions",
        "text": "An X egg with an X sperm gives XX; an X egg with a Y sperm gives XY. The sex chromosome contributed by the sperm distinguishes these two outcomes in the standard cross.",
        "scene": "family:sex-process:2"
      },
      {
        "title": "Read the probability",
        "text": "With equal X/Y sperm likelihood, XX:XY is1:1, or50% each per fertilisation. Earlier children do not force the next result. These probabilities are a model, not a prediction of a particular family.",
        "scene": "family:evidence:3",
        "process": false
      }
    ],
    "widget": "family-sex-inheritance",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.alleles",
      "science.biology.inheritance-variation-and-evolution.crosses"
    ],
    "skills": [
      "MS1c",
      "MS2c",
      "MS4a"
    ],
    "practice": [
      {
        "id": "bio.p-family-sex-inheritance1",
        "prompt": "Typical body cells have how many chromosome pairs?",
        "options": [
          "23",
          "46",
          "22 total"
        ],
        "answer": 0,
        "why": "There are23 pairs,46 chromosomes.",
        "concept": "bio.family-sex-inheritance"
      },
      {
        "id": "bio.p-family-sex-inheritance2",
        "prompt": "In the standard cross, an egg carries…",
        "options": [
          "XX",
          "X",
          "Y only"
        ],
        "answer": 1,
        "why": "A gamete carries one sex chromosome.",
        "concept": "bio.family-sex-inheritance"
      },
      {
        "id": "bio.p-family-sex-inheritance3",
        "prompt": "Which sperm contribution can produce XY with an X egg?",
        "options": [
          "XX",
          "Only X",
          "Y"
        ],
        "answer": 2,
        "why": "X+Y gives XY.",
        "concept": "bio.family-sex-inheritance"
      },
      {
        "id": "bio.p-family-sex-inheritance4",
        "prompt": "Expected XX:XY ratio is…",
        "options": [
          "1:1",
          "3:1",
          "1:2:1"
        ],
        "answer": 0,
        "why": "Two equally likely outcomes occur in the model.",
        "concept": "bio.family-sex-inheritance"
      }
    ],
    "check": [
      {
        "id": "bio.c-family-sex-inheritance1",
        "prompt": "How many autosome pairs are typical in ordinary body cells?",
        "options": [
          "23",
          "22",
          "46"
        ],
        "answer": 1,
        "why": "One of the23 pairs is the sex-chromosome pair.",
        "concept": "bio.family-sex-inheritance"
      },
      {
        "id": "bio.c-family-sex-inheritance2",
        "prompt": "In the standard GCSE model XY represents…",
        "options": [
          "A complete gamete",
          "Typical female chromosomal sex",
          "Typical male chromosomal sex"
        ],
        "answer": 2,
        "why": "This is the simplified XX/XY model.",
        "concept": "bio.family-sex-inheritance"
      },
      {
        "id": "bio.c-family-sex-inheritance3",
        "prompt": "Which combination produces XX?",
        "options": [
          "X egg and X sperm",
          "X egg and Y sperm",
          "Y egg and Y sperm"
        ],
        "answer": 0,
        "why": "X+X gives XX.",
        "concept": "bio.family-sex-inheritance"
      },
      {
        "id": "bio.c-family-sex-inheritance4",
        "prompt": "Probability of XY per event in the supplied model?",
        "options": [
          "25%",
          "50%",
          "100%"
        ],
        "answer": 1,
        "why": "Half the equally likely cells are XY.",
        "concept": "bio.family-sex-inheritance"
      },
      {
        "id": "bio.c-family-sex-inheritance5",
        "prompt": "After three XX outcomes, the next XY probability remains…",
        "options": [
          "100%",
          "0%",
          "50%"
        ],
        "answer": 2,
        "why": "Previous independent events do not determine the next.",
        "concept": "bio.family-sex-inheritance"
      },
      {
        "id": "bio.c-family-sex-inheritance6",
        "prompt": "What is a limitation of this cross?",
        "options": [
          "It does not describe every biological variation or identity",
          "It proves an exact order of births",
          "It gives every gamete two sex chromosomes"
        ],
        "answer": 0,
        "why": "The model has a specific limited purpose.",
        "concept": "bio.family-sex-inheritance"
      }
    ]
  }
];
export const familyConcepts={"bio.family-construct-crosses": "Construct & predict genetic crosses", "bio.family-family-trees": "Read genetic family trees", "bio.family-inherited-disorders": "Polydactyly & cystic fibrosis", "bio.family-screening": "Evaluate embryo screening", "bio.family-sex-inheritance": "Chromosomal sex inheritance"};
