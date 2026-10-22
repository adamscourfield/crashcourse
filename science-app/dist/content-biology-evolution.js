export const evoLessons=[
  {
    "id": "science.biology.inheritance-variation-and-evolution.variation",
    "title": "Genes, environment & variation",
    "short": "Genes, environment & variation",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.2.1"
    ],
    "combinedRefs": [
      "6.2.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Variation means differences in characteristics among individuals in a population. Phenotype depends on the genome and its interaction with the environment. Differences can have genetic causes, environmental causes or both.",
    "learn": [
      {
        "title": "Individuals differ",
        "text": "Variation means differences in characteristics among individuals in a population. Phenotype depends on the genome and its interaction with the environment. Differences can have genetic causes, environmental causes or both.",
        "scene": "evo:variation:0",
        "process": false
      },
      {
        "title": "Compare like with like",
        "text": "Our fictional plant table compares two genotypes in dim and bright conditions: G1 heights10/16 cm; G2 heights14/22 cm. Compare the same genotype across environments, or the same environment across genotypes. The values are illustrative, not a real experiment.",
        "scene": "evo:trait-data:1",
        "process": false
      },
      {
        "title": "Where variants originate",
        "text": "There is usually extensive genetic variation within a species. New genetic variants arise through mutation; sexual reproduction reshuffles inherited information. Mutations occur continually, rather than being produced because an organism needs a particular trait.",
        "scene": "evo:mutation:2",
        "process": false
      },
      {
        "title": "Effects differ",
        "text": "Most variants have no effect on phenotype; some influence it and very few determine it. Rarely a mutation produces a new phenotype that is suited to a changed environment, allowing natural selection to change its frequency across generations.",
        "scene": "evo:variation:3",
        "process": false
      }
    ],
    "widget": "evo-variation",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.dna-genome"
    ],
    "skills": [
      "WS1.3",
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-evo-variation1",
        "prompt": "Variation describes…",
        "options": [
          "Differences in characteristics within a population",
          "Only differences between planets",
          "Identical phenotypes everywhere"
        ],
        "answer": 0,
        "why": "Variation concerns differences among individuals.",
        "concept": "bio.evo-variation"
      },
      {
        "id": "bio.p-evo-variation2",
        "prompt": "Phenotype can depend on…",
        "options": [
          "Genes alone in every case",
          "Genes and environmental interactions",
          "Environment alone in every case"
        ],
        "answer": 1,
        "why": "Both inherited information and conditions can matter.",
        "concept": "bio.evo-variation"
      },
      {
        "id": "bio.p-evo-variation3",
        "prompt": "New genetic variants arise through…",
        "options": [
          "An organism deciding to adapt",
          "Exercise always changing inherited DNA",
          "Mutation"
        ],
        "answer": 2,
        "why": "Mutation creates new variants; reproduction can reshuffle them.",
        "concept": "bio.evo-variation"
      },
      {
        "id": "bio.p-evo-variation4",
        "prompt": "Most variants…",
        "options": [
          "Have no phenotype effect",
          "Always determine a new phenotype",
          "Always improve survival"
        ],
        "answer": 0,
        "why": "The effect is often neutral at phenotype level.",
        "concept": "bio.evo-variation"
      }
    ],
    "check": [
      {
        "id": "bio.c-evo-variation1",
        "prompt": "Same genotype, different light conditions and heights: what is supported?",
        "options": [
          "Only genotype changed",
          "Environmental conditions can affect phenotype",
          "Every difference must be inherited"
        ],
        "answer": 1,
        "why": "The genotype is held constant while environment changes.",
        "concept": "bio.evo-variation"
      },
      {
        "id": "bio.c-evo-variation2",
        "prompt": "Different genotypes grown in the same conditions can show…",
        "options": [
          "No possible differences",
          "Only identical inherited information",
          "Genetic contributions to phenotype differences"
        ],
        "answer": 2,
        "why": "Holding environment comparable helps identify a genetic contribution.",
        "concept": "bio.evo-variation"
      },
      {
        "id": "bio.c-evo-variation3",
        "prompt": "When do mutations occur?",
        "options": [
          "Continually, not only when useful",
          "Only when an organism needs them",
          "Only after all conditions become favourable"
        ],
        "answer": 0,
        "why": "Mutation is not directed by need.",
        "concept": "bio.evo-variation"
      },
      {
        "id": "bio.c-evo-variation4",
        "prompt": "Sexual reproduction contributes by…",
        "options": [
          "Creating every variant without mutation",
          "Combining and reshuffling inherited information",
          "Removing all genetic differences"
        ],
        "answer": 1,
        "why": "Mixing gamete information generates combinations.",
        "concept": "bio.evo-variation"
      },
      {
        "id": "bio.c-evo-variation5",
        "prompt": "A rare new phenotype suited to new conditions may…",
        "options": [
          "Change every individual instantly",
          "Guarantee the whole species survives",
          "Become more common through natural selection"
        ],
        "answer": 2,
        "why": "Differential reproduction can change population composition.",
        "concept": "bio.evo-variation"
      },
      {
        "id": "bio.c-evo-variation6",
        "prompt": "Fictional G1 height changes from10 to16 cm. Difference?",
        "options": [
          "6 cm",
          "26 cm",
          "60 cm"
        ],
        "answer": 0,
        "why": "16−10=6 cm, holding genotype constant.",
        "concept": "bio.evo-variation"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.natural-selection",
    "title": "Evolution by natural selection",
    "short": "Evolution by natural selection",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.2.2"
    ],
    "combinedRefs": [
      "6.2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A population contains inherited variants. In a particular environment some phenotypes improve the chance of survival and successful reproduction. Better suited does not mean physically strongest in every context.",
    "learn": [
      {
        "title": "Begin with inherited variation",
        "text": "A population contains inherited variants. In a particular environment some phenotypes improve the chance of survival and successful reproduction. Better suited does not mean physically strongest in every context.",
        "scene": "evo:selection:0"
      },
      {
        "title": "Follow the next generation",
        "text": "Individuals with an advantageous inherited characteristic are more likely to reproduce successfully and pass on the relevant alleles. Over generations that characteristic can become more common in the population. Individuals do not change their inherited colour by choice.",
        "scene": "evo:selection:1"
      },
      {
        "title": "Evolution is population change",
        "text": "Evolution is a change in inherited characteristics of a population over time. Evidence supports descent of living species from simple early life more than three billion years ago. Natural selection can eventually contribute to new species.",
        "scene": "evo:selection:2"
      },
      {
        "title": "Know the model limits",
        "text": "Our deterministic cohort has20 offspring per generation and two existing colour variants. Camouflage changes their relative contribution to offspring. It is not a measured survival rate, a random simulation or a complete population-genetics model. New species are recognised when populations can no longer interbreed to produce fertile offspring; detailed speciation comes later.",
        "scene": "evo:selection-data:3",
        "process": false
      }
    ],
    "widget": "evo-natural-selection",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.dna-genome"
    ],
    "skills": [
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-evo-natural-selection1",
        "prompt": "Natural selection acts on…",
        "options": [
          "Existing inherited variation",
          "Only deliberate changes made by individuals",
          "Only acquired injuries"
        ],
        "answer": 0,
        "why": "Inherited variants can differ in reproductive success.",
        "concept": "bio.evo-natural-selection"
      },
      {
        "id": "bio.p-evo-natural-selection2",
        "prompt": "Which individuals contribute more to later generations?",
        "options": [
          "Always the largest",
          "Those more successful at surviving and reproducing in the context",
          "Those that choose their genes"
        ],
        "answer": 1,
        "why": "Relative reproductive success matters.",
        "concept": "bio.evo-natural-selection"
      },
      {
        "id": "bio.p-evo-natural-selection3",
        "prompt": "Evolution concerns…",
        "options": [
          "Every individual changing at once",
          "Only body growth",
          "Inherited population characteristics over generations"
        ],
        "answer": 2,
        "why": "The population changes across time.",
        "concept": "bio.evo-natural-selection"
      },
      {
        "id": "bio.p-evo-natural-selection4",
        "prompt": "What may separate new species?",
        "options": [
          "Inability to interbreed to produce fertile offspring",
          "Only different ages",
          "Any difference in height"
        ],
        "answer": 0,
        "why": "Reproductive isolation is the definition used here.",
        "concept": "bio.evo-natural-selection"
      }
    ],
    "check": [
      {
        "id": "bio.c-evo-natural-selection1",
        "prompt": "A dark habitat favours an existing dark variant. Over generations it may…",
        "options": [
          "Force light individuals to recolour",
          "Increase the dark variant’s frequency",
          "Create needed mutations deliberately"
        ],
        "answer": 1,
        "why": "Existing inherited variants can contribute unequally to offspring.",
        "concept": "bio.evo-natural-selection"
      },
      {
        "id": "bio.c-evo-natural-selection2",
        "prompt": "What must be passed on for this example to produce inherited change?",
        "options": [
          "An acquired scar only",
          "Only food eaten yesterday",
          "The relevant inherited information"
        ],
        "answer": 2,
        "why": "The selected characteristic must have a heritable basis.",
        "concept": "bio.evo-natural-selection"
      },
      {
        "id": "bio.c-evo-natural-selection3",
        "prompt": "In a fresh fictional cohort,12 of20 have the dark variant. Percentage?",
        "options": [
          "60%",
          "40%",
          "12%"
        ],
        "answer": 0,
        "why": "12/20×100=60%. Population counts are not a single individual changing.",
        "concept": "bio.evo-natural-selection"
      },
      {
        "id": "bio.c-evo-natural-selection4",
        "prompt": "A trait advantageous in one habitat…",
        "options": [
          "Must be best in every habitat",
          "May be less advantageous in another",
          "Cannot be inherited"
        ],
        "answer": 1,
        "why": "Advantage depends on environmental context.",
        "concept": "bio.evo-natural-selection"
      },
      {
        "id": "bio.c-evo-natural-selection5",
        "prompt": "The model’s fixed20-offspring size is…",
        "options": [
          "A law of every wild population",
          "Proof of exact survival rates",
          "A simplifying assumption"
        ],
        "answer": 2,
        "why": "Real population size, chance and inheritance are more complex.",
        "concept": "bio.evo-natural-selection"
      },
      {
        "id": "bio.c-evo-natural-selection6",
        "prompt": "Evolutionary theory links current species to…",
        "options": [
          "Simple early life over3billion years ago",
          "Individuals changing by intention",
          "Only identical modern ancestors"
        ],
        "answer": 0,
        "why": "This is the shared-ancestry framework required here.",
        "concept": "bio.evo-natural-selection"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.selective-breeding",
    "title": "Selective breeding: benefits & risks",
    "short": "Selective breeding: benefits & risks",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.2.3"
    ],
    "combinedRefs": [
      "6.2.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Selective breeding is artificial selection: humans choose plants or animals with desired inherited characteristics, breed them and select suitable offspring to breed again. This has been used for thousands of years in crops and domesticated animals.",
    "learn": [
      {
        "title": "People choose the parents",
        "text": "Selective breeding is artificial selection: humans choose plants or animals with desired inherited characteristics, breed them and select suitable offspring to breed again. This has been used for thousands of years in crops and domesticated animals.",
        "scene": "evo:breeding:0"
      },
      {
        "title": "Repeat across generations",
        "text": "Selection and breeding repeat over many generations until the desired characteristic becomes established in the line. Choosing one pair does not guarantee that every first-generation offspring has the desired trait.",
        "scene": "evo:breeding:1"
      },
      {
        "title": "Match the goal",
        "text": "Examples include disease resistance in food crops, more meat or milk from farm animals, a gentle nature in domestic dogs, and large or unusual flowers. Selection may concern usefulness or appearance.",
        "scene": "evo:breeding-goals:2",
        "process": false
      },
      {
        "title": "Consider diversity and welfare",
        "text": "Repeated breeding within a limited gene pool can increase inbreeding and the risk of inherited defects or disease susceptibility. Evaluate production benefits, genetic diversity, animal welfare and other ethical concerns using supplied information.",
        "scene": "evo:breeding-evidence:3",
        "process": false
      }
    ],
    "widget": "evo-selective-breeding",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.dna-genome"
    ],
    "skills": [
      "WS1.3",
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-evo-selective-breeding1",
        "prompt": "Who selects parents in selective breeding?",
        "options": [
          "Humans",
          "Only a changed habitat",
          "The offspring by intention"
        ],
        "answer": 0,
        "why": "People choose inherited characteristics for a goal.",
        "concept": "bio.evo-selective-breeding"
      },
      {
        "id": "bio.p-evo-selective-breeding2",
        "prompt": "What follows breeding selected parents?",
        "options": [
          "Stop after every first offspring",
          "Select suitable offspring to breed again",
          "Insert every gene using a plasmid"
        ],
        "answer": 1,
        "why": "Selection repeats over generations.",
        "concept": "bio.evo-selective-breeding"
      },
      {
        "id": "bio.p-evo-selective-breeding3",
        "prompt": "Which is a breeding goal?",
        "options": [
          "Guaranteed removal of all disease",
          "Acquired scars in every offspring",
          "Disease resistance in food crops"
        ],
        "answer": 2,
        "why": "A heritable useful trait can be selected.",
        "concept": "bio.evo-selective-breeding"
      },
      {
        "id": "bio.p-evo-selective-breeding4",
        "prompt": "A possible risk is…",
        "options": [
          "Inbreeding and inherited defects",
          "Guaranteed extra diversity",
          "Every offspring becoming unrelated"
        ],
        "answer": 0,
        "why": "A restricted gene pool can increase risks.",
        "concept": "bio.evo-selective-breeding"
      }
    ],
    "check": [
      {
        "id": "bio.c-evo-selective-breeding1",
        "prompt": "A farmer chooses high-milk-yield parents. This is…",
        "options": [
          "Gene transfer by vector",
          "Selective breeding",
          "Only a random mutation experiment"
        ],
        "answer": 1,
        "why": "Parents are chosen for an inherited production trait.",
        "concept": "bio.evo-selective-breeding"
      },
      {
        "id": "bio.c-evo-selective-breeding2",
        "prompt": "Which set contains other required goals?",
        "options": [
          "Only coat colour in every species",
          "Removing all inherited variation instantly",
          "Gentle dogs and large/unusual flowers"
        ],
        "answer": 2,
        "why": "Usefulness and appearance can both be selected.",
        "concept": "bio.evo-selective-breeding"
      },
      {
        "id": "bio.c-evo-selective-breeding3",
        "prompt": "Why continue over many generations?",
        "options": [
          "Offspring vary; selected traits must become established",
          "One mating guarantees every trait",
          "All inherited information disappears each generation"
        ],
        "answer": 0,
        "why": "Repeated selection changes the breeding line.",
        "concept": "bio.evo-selective-breeding"
      },
      {
        "id": "bio.c-evo-selective-breeding4",
        "prompt": "A narrow breeding pool may…",
        "options": [
          "Always prevent genetic disorders",
          "Increase inherited-defect risk",
          "Guarantee immunity to pathogens"
        ],
        "answer": 1,
        "why": "Inbreeding can concentrate harmful alleles.",
        "concept": "bio.evo-selective-breeding"
      },
      {
        "id": "bio.c-evo-selective-breeding5",
        "prompt": "Which evaluation is balanced?",
        "options": [
          "Yield is the only consideration",
          "Ignore animal welfare",
          "Consider productivity, diversity, welfare and evidence"
        ],
        "answer": 2,
        "why": "Benefits and risks need evaluation in context.",
        "concept": "bio.evo-selective-breeding"
      },
      {
        "id": "bio.c-evo-selective-breeding6",
        "prompt": "Unlike gene transfer, selective breeding…",
        "options": [
          "Chooses parents and offspring over generations",
          "Always inserts a foreign gene directly",
          "Requires no reproduction"
        ],
        "answer": 0,
        "why": "It selects combinations of inherited traits through breeding.",
        "concept": "bio.evo-selective-breeding"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.genetic-engineering",
    "title": "Genetic engineering: uses & choices",
    "short": "Genetic engineering: uses & choices",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.2.4"
    ],
    "combinedRefs": [
      "6.2.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "In the examples required here, genetic engineering modifies an organism’s genome by introducing a gene from another organism to obtain a desired characteristic. It differs from selecting whole parents through breeding. Detailed vector steps are Higher content.",
    "learn": [
      {
        "title": "Introduce a gene",
        "text": "In the examples required here, genetic engineering modifies an organism’s genome by introducing a gene from another organism to obtain a desired characteristic. It differs from selecting whole parents through breeding. Detailed vector steps are Higher content.",
        "scene": "evo:engineering-uses:0",
        "process": false
      },
      {
        "title": "Crops and useful traits",
        "text": "Crops can be engineered for disease resistance or improved fruit production, including insect-resistant or herbicide-resistant examples. These traits can improve yields in suitable circumstances; benefits depend on the crop, environment and management.",
        "scene": "evo:engineering-uses:1",
        "process": false
      },
      {
        "title": "A medical product",
        "text": "Engineered bacteria can produce human insulin. The useful insulin is harvested and purified; the product is not simply live bacteria injected as insulin. Genetic modification is also being researched to help overcome some inherited disorders.",
        "scene": "evo:engineering-uses:2",
        "process": false
      },
      {
        "title": "Evaluate a specific application",
        "text": "Consider benefits alongside effects on wildflowers, insects, gene spread, management and other evidence relevant to the case. Some people have objections or concerns about long-term health effects. A stated concern is not itself proof of harm; evaluate the evidence for the specific product and use.",
        "scene": "evo:engineering-evidence:3",
        "process": false
      }
    ],
    "widget": "evo-genetic-engineering",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.dna-genome"
    ],
    "skills": [
      "WS1.3",
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-evo-genetic-engineering1",
        "prompt": "The engineering examples here involve…",
        "options": [
          "Introducing a gene to modify a genome",
          "Only choosing adult parents",
          "Changing every gene by exercise"
        ],
        "answer": 0,
        "why": "A transferred gene can produce a desired characteristic.",
        "concept": "bio.evo-genetic-engineering"
      },
      {
        "id": "bio.p-evo-genetic-engineering2",
        "prompt": "Which is a medical application?",
        "options": [
          "Injecting live insulin-producing bacteria as insulin",
          "Bacteria producing insulin for harvesting and purification",
          "Only producing bigger fruit"
        ],
        "answer": 1,
        "why": "The useful product is purified insulin.",
        "concept": "bio.evo-genetic-engineering"
      },
      {
        "id": "bio.p-evo-genetic-engineering3",
        "prompt": "A GM crop example may resist…",
        "options": [
          "Every possible hazard",
          "All environmental variation",
          "Insect attack or a herbicide"
        ],
        "answer": 2,
        "why": "These are named examples, not universal protection.",
        "concept": "bio.evo-genetic-engineering"
      },
      {
        "id": "bio.p-evo-genetic-engineering4",
        "prompt": "Which evaluation is justified?",
        "options": [
          "Compare case-specific benefits, risks and evidence",
          "All GM crops have identical effects",
          "Every concern proves harm"
        ],
        "answer": 0,
        "why": "Different traits and contexts require evidence.",
        "concept": "bio.evo-genetic-engineering"
      }
    ],
    "check": [
      {
        "id": "bio.c-evo-genetic-engineering1",
        "prompt": "How does gene transfer differ from selective breeding?",
        "options": [
          "Both only select whole parents",
          "It introduces a gene into the recipient genome in this example",
          "It never changes inherited information"
        ],
        "answer": 1,
        "why": "The mechanism differs from repeated parental selection.",
        "concept": "bio.evo-genetic-engineering"
      },
      {
        "id": "bio.c-evo-genetic-engineering2",
        "prompt": "A crop with disease resistance may offer…",
        "options": [
          "Guaranteed maximum yield everywhere",
          "No possible agricultural use",
          "Reduced disease losses in a suitable context"
        ],
        "answer": 2,
        "why": "The benefit depends on conditions.",
        "concept": "bio.evo-genetic-engineering"
      },
      {
        "id": "bio.c-evo-genetic-engineering3",
        "prompt": "Which is a potential environmental concern to investigate?",
        "options": [
          "Effects on wildflowers and insects",
          "The colour of the lesson button",
          "Only whether the crop has a name"
        ],
        "answer": 0,
        "why": "Non-target ecological effects are relevant.",
        "concept": "bio.evo-genetic-engineering"
      },
      {
        "id": "bio.c-evo-genetic-engineering4",
        "prompt": "Human insulin from engineered bacteria should be…",
        "options": [
          "Replaced by injecting the bacteria directly",
          "Harvested and purified as the product",
          "Assumed to be a whole bacterium"
        ],
        "answer": 1,
        "why": "Production organism and final product differ.",
        "concept": "bio.evo-genetic-engineering"
      },
      {
        "id": "bio.c-evo-genetic-engineering5",
        "prompt": "A claim of possible long-term harm…",
        "options": [
          "Is automatically proof",
          "Can never be investigated",
          "Requires relevant evidence, not assumption"
        ],
        "answer": 2,
        "why": "Concerns and established evidence are distinct.",
        "concept": "bio.evo-genetic-engineering"
      },
      {
        "id": "bio.c-evo-genetic-engineering6",
        "prompt": "Research on inherited disorders is…",
        "options": [
          "A potential medical use of genetic modification",
          "A guarantee every disorder is already cured",
          "Only conventional crop breeding"
        ],
        "answer": 0,
        "why": "The specification includes medical research, not universal cure claims.",
        "concept": "bio.evo-genetic-engineering"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.engineering-steps",
    "title": "Enzymes, vectors & gene transfer",
    "short": "Enzymes, vectors & gene transfer",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.2.4"
    ],
    "combinedRefs": [
      "6.2.4"
    ],
    "separate": false,
    "higher": true,
    "minutes": 35,
    "big": "Enzymes are used to isolate a desired gene from DNA. A marked segment in the model tracks this gene; colour and scale are symbolic rather than a molecular structure.",
    "learn": [
      {
        "title": "Isolate the required gene",
        "text": "Enzymes are used to isolate a desired gene from DNA. A marked segment in the model tracks this gene; colour and scale are symbolic rather than a molecular structure.",
        "scene": "evo:transfer:0"
      },
      {
        "title": "Load a vector",
        "text": "Insert the gene into a vector, commonly a bacterial plasmid or a virus. A vector is a carrier for transferring genetic information; it is not the same as the desired final protein product.",
        "scene": "evo:transfer:1"
      },
      {
        "title": "Transfer into cells",
        "text": "Use the vector to insert the gene into the required recipient cells. In the GCSE summary, genes are introduced at an early stage of development so the organism can develop with the desired characteristic.",
        "scene": "evo:transfer:2"
      },
      {
        "title": "Link steps to outcome",
        "text": "The transferred gene must be expressed to produce its useful effect. The animation is a conceptual sequence, not a laboratory procedure, measured success rate or guarantee that every attempted transfer works.",
        "scene": "evo:transfer-evidence:3",
        "process": false
      }
    ],
    "widget": "evo-engineering-steps",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.dna-genome"
    ],
    "skills": [
      "WS1.3",
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-evo-engineering-steps1",
        "prompt": "What isolates the required gene?",
        "options": [
          "Enzymes",
          "Only a food supplement",
          "A complete animal parent"
        ],
        "answer": 0,
        "why": "Enzymes are used to isolate the gene.",
        "concept": "bio.evo-engineering-steps"
      },
      {
        "id": "bio.p-evo-engineering-steps2",
        "prompt": "A common vector is…",
        "options": [
          "Only the final insulin product",
          "A plasmid or virus",
          "Any entire ecosystem"
        ],
        "answer": 1,
        "why": "Vectors carry genetic information into cells.",
        "concept": "bio.evo-engineering-steps"
      },
      {
        "id": "bio.p-evo-engineering-steps3",
        "prompt": "The vector is used to…",
        "options": [
          "Remove every chromosome",
          "Guarantee every attempt succeeds",
          "Insert the gene into recipient cells"
        ],
        "answer": 2,
        "why": "The vector enables transfer into required cells.",
        "concept": "bio.evo-engineering-steps"
      },
      {
        "id": "bio.p-evo-engineering-steps4",
        "prompt": "Why introduce genes early in development in this summary?",
        "options": [
          "So the organism develops with the characteristic",
          "To eliminate all cell division",
          "Because genes cannot be expressed"
        ],
        "answer": 0,
        "why": "The introduced information can contribute during development.",
        "concept": "bio.evo-engineering-steps"
      }
    ],
    "check": [
      {
        "id": "bio.c-evo-engineering-steps1",
        "prompt": "Correct sequence?",
        "options": [
          "Express protein → find gene → no transfer",
          "Isolate gene → insert in vector → transfer to cells",
          "Choose parents only → no gene transfer"
        ],
        "answer": 1,
        "why": "Gene isolation and vector insertion precede transfer.",
        "concept": "bio.evo-engineering-steps"
      },
      {
        "id": "bio.c-evo-engineering-steps2",
        "prompt": "Which description identifies a plasmid here?",
        "options": [
          "A purified hormone",
          "A whole human chromosome set",
          "A DNA carrier used as a vector"
        ],
        "answer": 2,
        "why": "A bacterial plasmid can carry the inserted gene.",
        "concept": "bio.evo-engineering-steps"
      },
      {
        "id": "bio.c-evo-engineering-steps3",
        "prompt": "What is distinct from the vector?",
        "options": [
          "The final useful protein such as insulin",
          "The inserted gene is never distinct",
          "The recipient cell must be identical to the vector"
        ],
        "answer": 0,
        "why": "Gene, vector, cell and product have different roles.",
        "concept": "bio.evo-engineering-steps"
      },
      {
        "id": "bio.c-evo-engineering-steps4",
        "prompt": "Early introduction is part of the GCSE process because…",
        "options": [
          "It removes inheritance",
          "Cells develop with the introduced information",
          "It guarantees all mutations stop"
        ],
        "answer": 1,
        "why": "The recipient can develop with the desired characteristic.",
        "concept": "bio.evo-engineering-steps"
      },
      {
        "id": "bio.c-evo-engineering-steps5",
        "prompt": "What connects an inserted gene to a protein-based trait?",
        "options": [
          "Only its colour in the animation",
          "The plasmid becoming an organ",
          "Expression of the gene"
        ],
        "answer": 2,
        "why": "The information must be used to produce its effect.",
        "concept": "bio.evo-engineering-steps"
      },
      {
        "id": "bio.c-evo-engineering-steps6",
        "prompt": "A limitation of the process model is…",
        "options": [
          "It is not a lab protocol or a success guarantee",
          "It measures every real transfer rate",
          "It shows exact molecular dimensions"
        ],
        "answer": 0,
        "why": "The sequence abstracts real molecular and experimental complexity.",
        "concept": "bio.evo-engineering-steps"
      }
    ]
  }
];
export const evoConcepts={"bio.evo-variation": "Genes, environment & variation", "bio.evo-natural-selection": "Evolution by natural selection", "bio.evo-selective-breeding": "Selective breeding: benefits & risks", "bio.evo-genetic-engineering": "Genetic engineering: uses & choices", "bio.evo-engineering-steps": "Enzymes, vectors & gene transfer"};
