export const organisationLessons=[
  {
    "id": "science.biology.organisation.levels",
    "title": "Cells to organ systems",
    "short": "Different levels, connected roles",
    "refs": [
      "2.1"
    ],
    "minutes": 30,
    "widget": "organisation-levels",
    "topicId": "science.biology.organisation",
    "big": "Cells form tissues, tissues form organs, and organs cooperate in systems. Use function and real scale to distinguish the levels.",
    "learn": [
      {
        "title": "Start with a cell",
        "text": "Cells are the basic building blocks of living organisms. A cell is different from a sub-cellular structure such as a nucleus or mitochondrion. In a multicellular organism, specialised cells perform particular roles and cooperate. A single-celled organism can carry out its life processes without having separate tissues and organs.",
        "scene": "org:cell"
      },
      {
        "title": "Group cells into tissue",
        "text": "A tissue is a group of cells with a similar structure and function. For example, muscle tissue contains cells suited to contraction. A tissue is not one enlarged cell; it contains many cells working in a related role. The drawing highlights a few examples rather than every cell in a real tissue.",
        "scene": "org:tissue"
      },
      {
        "title": "Combine tissues in an organ",
        "text": "An organ contains different tissues organised to perform particular functions. The stomach has muscular tissue for movement and other tissues involved in lining and secretion. A leaf is a plant organ containing several tissues too. Do not call every collection of cells an organ: tissue organisation and function matter.",
        "scene": "org:organ"
      },
      {
        "title": "Coordinate organs in a system",
        "text": "An organ system is a group of organs working together. Several digestive organs cooperate to break down food and absorb useful products. A single organ is therefore part of a system rather than the whole digestive system. Different systems cooperate within an organism.",
        "scene": "org:system"
      },
      {
        "title": "Connect the levels and their scale",
        "text": "For a multicellular example: cell → tissue → organ → organ system → organism. An organism is an individual living thing. Understand real size as well as the nesting:1 mm=1000 μm. A supplied0.02 mm cell is20 μm; a20 mm organ is1000 times that cell’s length. These example sizes are not universal measurements, and equal-sized pictures do not show real relative scale.",
        "scene": "org:organism"
      }
    ],
    "practice": [
      {
        "id": "bio.p-org1",
        "prompt": "Which description defines a tissue?",
        "options": [
          "A group of cells with similar structure and function",
          "One gene only",
          "Any whole organism"
        ],
        "answer": 0,
        "why": "Tissue groups related cells for a function.",
        "concept": "bio.org-levels"
      },
      {
        "id": "bio.p-org2",
        "prompt": "Which relationship is correct?",
        "options": [
          "Organs are inside each gene",
          "Different tissues form an organ",
          "Every tissue is a single cell"
        ],
        "answer": 1,
        "why": "An organ combines tissues with coordinated roles.",
        "concept": "bio.org-levels"
      },
      {
        "id": "bio.p-org3",
        "prompt": "The stomach, small intestine and other cooperating digestive organs form…",
        "options": [
          "One chromosome",
          "One cell",
          "An organ system"
        ],
        "answer": 2,
        "why": "A system coordinates several organs.",
        "concept": "bio.org-cooperation"
      },
      {
        "id": "bio.p-org4",
        "prompt": "An illustrative cell is0.03 mm long. Length in μm?",
        "type": "number",
        "answer": 30,
        "tolerance": 0.001,
        "unit": "μm",
        "why": "0.03×1000=30 μm.",
        "concept": "bio.org-scale"
      }
    ],
    "check": [
      {
        "id": "bio.c-org1",
        "prompt": "The basic building block of living organisms is a…",
        "options": [
          "Cell",
          "Whole organ system",
          "Stomach"
        ],
        "answer": 0,
        "why": "Cells form the biological starting level in this hierarchy.",
        "concept": "bio.org-levels"
      },
      {
        "id": "bio.c-org2",
        "prompt": "A group of cells with similar structure and function is a…",
        "options": [
          "Nucleus",
          "Tissue",
          "Whole organ system"
        ],
        "answer": 1,
        "why": "A tissue contains related cells working in a similar role.",
        "concept": "bio.org-levels"
      },
      {
        "id": "bio.c-org3",
        "prompt": "Which description best fits an organ?",
        "options": [
          "One protein molecule",
          "A single cell with no neighbours",
          "Different tissues organised for particular functions"
        ],
        "answer": 2,
        "why": "Several tissue types cooperate in an organ.",
        "concept": "bio.org-levels"
      },
      {
        "id": "bio.c-org4",
        "prompt": "Which sequence follows the levels in a multicellular organism?",
        "options": [
          "Cell→tissue→organ→organ system→organism",
          "Tissue→gene→organism→cell",
          "Organ system→single gene→tissue"
        ],
        "answer": 0,
        "why": "Each higher organisational level combines lower-level components.",
        "concept": "bio.org-levels"
      },
      {
        "id": "bio.c-org5",
        "prompt": "A stomach wall contains muscle tissue and lining tissue. Why is it an organ rather than just one tissue?",
        "options": [
          "It has no cells",
          "It combines different tissues contributing to its functions",
          "Every part performs an identical job"
        ],
        "answer": 1,
        "why": "Muscle movement and lining/secretory roles cooperate.",
        "concept": "bio.org-cooperation"
      },
      {
        "id": "bio.c-org6",
        "prompt": "Which statement about organisms is accurate?",
        "options": [
          "Every organism must have a stomach",
          "Every organism must have five organ systems",
          "An organism may be single-celled or multicellular"
        ],
        "answer": 2,
        "why": "Separate tissues and organs are not required in a single-celled organism.",
        "concept": "bio.org-cooperation"
      },
      {
        "id": "bio.c-org7",
        "prompt": "A supplied cell is0.015 mm long. Convert to μm.",
        "type": "number",
        "answer": 15,
        "tolerance": 0.001,
        "unit": "μm",
        "why": "0.015×1000=15 μm.",
        "concept": "bio.org-scale"
      },
      {
        "id": "bio.c-org8",
        "prompt": "A model organ is30 mm long and a model cell is0.03 mm long. How many times longer is the organ?",
        "type": "number",
        "answer": 1000,
        "tolerance": 0.001,
        "unit": "",
        "why": "30÷0.03=1000; use matching length units.",
        "concept": "bio.org-scale"
      }
    ],
    "skills": [
      "MS1c",
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.specialisation"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.digestion",
    "title": "The digestive route",
    "short": "Break down, absorb and transport",
    "refs": [
      "2.2.1"
    ],
    "minutes": 30,
    "widget": "digestion-route",
    "topicId": "science.biology.organisation",
    "big": "Digestive organs cooperate to break down large food molecules and absorb useful soluble products. Digestion and absorption are different processes.",
    "learn": [
      {
        "title": "Follow a coordinated organ system",
        "text": "The digestive system contains several organs working together to digest food and absorb useful substances. Food follows a route through the mouth, oesophagus, stomach, small intestine and large intestine; undigested material eventually leaves through the anus. Associated glands can add secretions without food passing through the glands themselves. This route is a simplified organisation map, not full anatomy.",
        "scene": "digest:mouth"
      },
      {
        "title": "Separate physical breakdown from digestion",
        "text": "Chewing breaks food into smaller pieces and mixes it with saliva. Movement through the oesophagus carries swallowed material towards the stomach. The stomach mixes food with its secretions. Breaking a food piece into smaller pieces is not the same as chemically breaking a large food molecule into small molecules; the two processes can help the system in different ways.",
        "scene": "digest:stomach"
      },
      {
        "title": "Make molecules suitable for absorption",
        "text": "Digestive enzymes catalyse the breakdown of large insoluble food molecules into small soluble molecules. Many of these products can then be absorbed through the small-intestine wall into the bloodstream. Not every component of food needs chemical digestion first: water and mineral ions are already small. Digestion changes molecules; absorption transfers suitable substances from the gut into the body.",
        "scene": "digest:intestine"
      },
      {
        "title": "Carry products away and remove what remains",
        "text": "The blood carries absorbed substances to cells, where they can be used for building materials or other processes. The large intestine absorbs water from remaining material; undigested material is egested, not chemically digested into nothing. Named digestive enzymes, their production sites and products, bile, reaction rates, temperature/pH and food-test/amylase practicals are planned later in this topic. This lesson establishes the route and distinction between digestion and absorption.",
        "scene": "digest:intestine"
      }
    ],
    "practice": [
      {
        "id": "bio.p-digest1",
        "prompt": "What is the main chemical purpose of digestion?",
        "options": [
          "Convert large insoluble food molecules into small soluble molecules",
          "Turn all food into whole blood cells",
          "Only move food from mouth to stomach"
        ],
        "answer": 0,
        "why": "Chemical breakdown prepares many food molecules for absorption.",
        "concept": "bio.digest-purpose"
      },
      {
        "id": "bio.p-digest2",
        "prompt": "Absorption differs from digestion because absorption…",
        "options": [
          "Always means chewing",
          "Transfers suitable substances from the gut into the body",
          "Means removing undigested material through the anus"
        ],
        "answer": 1,
        "why": "Moving across the intestinal boundary differs from chemical breakdown.",
        "concept": "bio.digest-absorption"
      },
      {
        "id": "bio.p-digest3",
        "prompt": "Which organ receives food after the oesophagus?",
        "options": [
          "Large intestine",
          "A lung",
          "Stomach"
        ],
        "answer": 2,
        "why": "The simplified food route places the stomach after the oesophagus.",
        "concept": "bio.digest-route"
      },
      {
        "id": "bio.p-digest4",
        "prompt": "Does all water need enzymatic digestion before absorption?",
        "options": [
          "No; water molecules are already small",
          "Yes; every molecule must be made into a smaller cell",
          "Yes; enzymes create water atoms"
        ],
        "answer": 0,
        "why": "Not every ingested substance is a large insoluble food molecule.",
        "concept": "bio.digest-purpose"
      }
    ],
    "check": [
      {
        "id": "bio.c-digest1",
        "prompt": "Which order fits the simplified digestive route?",
        "options": [
          "Mouth→oesophagus→stomach→small intestine→large intestine",
          "Mouth→lung→heart→stomach",
          "Large intestine→oesophagus→mouth→stomach"
        ],
        "answer": 0,
        "why": "Several organs form a connected digestive route.",
        "concept": "bio.digest-route"
      },
      {
        "id": "bio.c-digest2",
        "prompt": "A food piece is chewed into smaller pieces but its large molecules remain unchanged. What has occurred?",
        "options": [
          "Complete chemical digestion",
          "Physical breakdown, not yet breakdown of those molecules",
          "Absorption into blood"
        ],
        "answer": 1,
        "why": "Changing piece size is distinct from chemical molecular breakdown.",
        "concept": "bio.digest-purpose"
      },
      {
        "id": "bio.c-digest3",
        "prompt": "Digestive enzymes help produce…",
        "options": [
          "Only larger insoluble molecules",
          "Whole ready-made organs",
          "Small soluble molecules from large insoluble food molecules"
        ],
        "answer": 2,
        "why": "Many food molecules need chemical breakdown before absorption.",
        "concept": "bio.digest-purpose"
      },
      {
        "id": "bio.c-digest4",
        "prompt": "Which example describes absorption?",
        "options": [
          "Small soluble products cross the small-intestine wall into blood",
          "A starch molecule is chemically broken down",
          "Food is chewed into pieces"
        ],
        "answer": 0,
        "why": "Absorption is transfer across a boundary, not the preceding breakdown reaction.",
        "concept": "bio.digest-absorption"
      },
      {
        "id": "bio.c-digest5",
        "prompt": "Why is a blood supply useful near the small-intestine surface?",
        "options": [
          "It replaces every enzyme",
          "It carries absorbed substances away towards the rest of the body",
          "It turns an organ into a single cell"
        ],
        "answer": 1,
        "why": "Transport connects intestinal uptake to cells elsewhere.",
        "concept": "bio.digest-absorption"
      },
      {
        "id": "bio.c-digest6",
        "prompt": "Which comparison is correct?",
        "options": [
          "Every food component must first become a smaller atom",
          "Chewing alone makes every molecule small enough to absorb",
          "Large food molecules may need digestion; water and mineral ions do not need that breakdown"
        ],
        "answer": 2,
        "why": "The need for chemical digestion depends on the ingested substance.",
        "concept": "bio.digest-purpose"
      },
      {
        "id": "bio.c-digest7",
        "prompt": "What role does the large intestine have in this overview?",
        "options": [
          "Absorbing water from remaining material",
          "Being the only site of all enzyme production",
          "Carrying electrical impulses to the brain"
        ],
        "answer": 0,
        "why": "Water recovery occurs before undigested material is egested.",
        "concept": "bio.digest-route"
      },
      {
        "id": "bio.c-digest8",
        "prompt": "Why describe digestion as an organ-system function?",
        "options": [
          "One isolated cell performs every anatomical role",
          "Different organs cooperate in processing and absorbing food",
          "An organ system contains no tissues"
        ],
        "answer": 1,
        "why": "The route and secretions require coordinated organs.",
        "concept": "bio.digest-route"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.organisation.levels",
      "science.biology.cells.exchange-surfaces"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.enzyme-action",
    "title": "How enzymes work",
    "short": "Fit, react and use again",
    "refs": [
      "2.2.1"
    ],
    "minutes": 30,
    "widget": "enzyme-fit",
    "topicId": "science.biology.organisation",
    "big": "Enzymes are protein catalysts. Active-site shape helps explain specificity, while the enzyme remains available after products leave.",
    "learn": [
      {
        "title": "An enzyme is a molecule, not a cell",
        "text": "Enzymes are proteins that act as biological catalysts. They speed up particular chemical reactions without being used up overall. An enzyme molecule is not a living organism or a complete cell. Enzymes can catalyse reactions involving the breakdown or building of molecules; the digestive examples here focus on breakdown.",
        "scene": "enzyme:fit"
      },
      {
        "title": "Match a substrate to the active site",
        "text": "The substrate is the molecule an enzyme acts on. A particular region called the active site has a shape suited to its substrate, helping explain enzyme specificity. In the lock-and-key model, only a suitably shaped substrate fits. Shape labels in the model are symbolic: a literal coloured puzzle piece is not an actual molecular photograph.",
        "scene": "enzyme:fit"
      },
      {
        "title": "Follow substrate to products",
        "text": "A suitable substrate joins temporarily with the active site while the enzyme catalyses a reaction. In the illustrated breakdown reaction, one substrate becomes smaller product molecules. The products differ from the original substrate and leave the active site. The enzyme is not one of those products and does not turn into a product particle.",
        "scene": "enzyme:reaction"
      },
      {
        "title": "Reuse the catalyst and limit the model",
        "text": "After the reaction, the enzyme is available to act again; it has not been consumed overall. Specificity explains why one enzyme cannot catalyse every possible reaction. Lock-and-key is a simplified model, not a claim that real proteins are perfectly rigid. The model does not mean every enzyme event is directly powered by ATP or that enzymes create energy. Temperature/pH effects, specific digestive enzyme roles and measured rates follow in later lessons.",
        "scene": "enzyme:unchanged"
      }
    ],
    "practice": [
      {
        "id": "bio.p-enzyme1",
        "prompt": "An enzyme is best described as…",
        "options": [
          "A protein acting as a biological catalyst",
          "A tiny living organ",
          "A food product used up in every reaction"
        ],
        "answer": 0,
        "why": "An enzyme is a molecule that catalyses a particular reaction.",
        "concept": "bio.enzyme-nature"
      },
      {
        "id": "bio.p-enzyme2",
        "prompt": "What is a substrate?",
        "options": [
          "The entire digestive system",
          "The molecule acted on by an enzyme",
          "A type of blood vessel"
        ],
        "answer": 1,
        "why": "The substrate fits a suitable active site and is changed by the reaction.",
        "concept": "bio.enzyme-specificity"
      },
      {
        "id": "bio.p-enzyme3",
        "prompt": "Why does the lock-and-key model predict specificity?",
        "options": [
          "All substrates have the same shape",
          "Enzymes must turn into every possible substrate",
          "Only a suitable substrate fits the active site"
        ],
        "answer": 2,
        "why": "Complementary shape connects substrate recognition to specific reactions.",
        "concept": "bio.enzyme-specificity"
      },
      {
        "id": "bio.p-enzyme4",
        "prompt": "After a normal catalytic event the enzyme is…",
        "options": [
          "Available to catalyse another suitable reaction",
          "Necessarily turned into the products",
          "Always destroyed"
        ],
        "answer": 0,
        "why": "The catalyst is not consumed overall.",
        "concept": "bio.enzyme-reuse"
      }
    ],
    "check": [
      {
        "id": "bio.c-enzyme1",
        "prompt": "Which statement correctly distinguishes an enzyme from a cell?",
        "options": [
          "An enzyme is a protein molecule, not a complete living cell",
          "Every enzyme has its own nucleus",
          "Every enzyme is a bacterium"
        ],
        "answer": 0,
        "why": "Being involved in living processes does not make a molecule a living organism.",
        "concept": "bio.enzyme-nature"
      },
      {
        "id": "bio.c-enzyme2",
        "prompt": "What does a biological catalyst do?",
        "options": [
          "Stops every reaction permanently",
          "Speeds a reaction without being used up overall",
          "Creates new atoms from nothing"
        ],
        "answer": 1,
        "why": "Catalysis changes reaction speed while retaining the catalyst overall.",
        "concept": "bio.enzyme-nature"
      },
      {
        "id": "bio.c-enzyme3",
        "prompt": "A supplied substrate does not fit an enzyme’s active site in the lock-and-key model. Prediction?",
        "options": [
          "It must react identically to every fitting substrate",
          "The enzyme becomes a whole cell",
          "That enzyme will not catalyse the model reaction with that substrate"
        ],
        "answer": 2,
        "why": "Specificity depends on the supplied shape match.",
        "concept": "bio.enzyme-specificity"
      },
      {
        "id": "bio.c-enzyme4",
        "prompt": "Which region is directly associated with the substrate fit?",
        "options": [
          "Active site",
          "Cellulose wall",
          "Entire bloodstream"
        ],
        "answer": 0,
        "why": "The active site is the enzyme region involved in the reaction.",
        "concept": "bio.enzyme-specificity"
      },
      {
        "id": "bio.c-enzyme5",
        "prompt": "A breakdown model changes one substrate into two smaller products. Which particles should leave as products?",
        "options": [
          "The enzyme split in half",
          "The changed substrate fragments, while the enzyme remains available",
          "Two new whole enzymes made from nothing"
        ],
        "answer": 1,
        "why": "The enzyme catalyses the reaction rather than being the material broken into products.",
        "concept": "bio.enzyme-products"
      },
      {
        "id": "bio.c-enzyme6",
        "prompt": "Why can the same enzyme act on another suitable substrate?",
        "options": [
          "It was consumed by the first event",
          "It needs to become a new tissue first",
          "It is not used up overall by the reaction"
        ],
        "answer": 2,
        "why": "Reusability is consistent with its catalytic role.",
        "concept": "bio.enzyme-reuse"
      },
      {
        "id": "bio.c-enzyme7",
        "prompt": "What is a limitation of a rigid puzzle-piece enzyme model?",
        "options": [
          "Real protein shape is more complex and not perfectly rigid",
          "Real enzymes are complete digestive organs",
          "It proves colour alone controls reactions"
        ],
        "answer": 0,
        "why": "A simplified analogy captures specificity but not all molecular behaviour.",
        "concept": "bio.enzyme-model"
      },
      {
        "id": "bio.c-enzyme8",
        "prompt": "Which conclusion goes beyond this model’s evidence?",
        "options": [
          "A suitable active-site match helps explain specificity",
          "Every enzyme reaction is directly powered by a new ATP molecule",
          "The enzyme can be available after the reaction"
        ],
        "answer": 1,
        "why": "The model does not establish universal direct ATP requirements or create energy.",
        "concept": "bio.enzyme-model"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.organisation.digestion"
    ],
    "separate": false,
    "higher": false
  }
];
export const organisationConcepts={
  "bio.org-levels": "Cells, tissues, organs, systems and organisms",
  "bio.org-cooperation": "Coordinated structures and functions",
  "bio.org-scale": "Size and scale across organisational levels",
  "bio.digest-route": "Cooperating organs along the digestive route",
  "bio.digest-purpose": "Physical breakdown and chemical digestion",
  "bio.digest-absorption": "Absorption and transport of soluble products",
  "bio.enzyme-nature": "Protein molecules as biological catalysts",
  "bio.enzyme-specificity": "Substrate and active-site shape",
  "bio.enzyme-products": "Substrate change and released products",
  "bio.enzyme-reuse": "Catalysts not consumed overall",
  "bio.enzyme-model": "Limits of lock-and-key illustrations"
};
