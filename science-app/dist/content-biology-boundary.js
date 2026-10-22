export const boundLessons=[
  {
    "id": "science.biology.inheritance-variation-and-evolution.extinction",
    "title": "Extinction & environmental change",
    "short": "Extinction & environmental change",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.3.6"
    ],
    "combinedRefs": [
      "6.3.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A species is extinct when none of its individuals remains alive anywhere. A local population can disappear while the species survives elsewhere. Endangered means at risk; it does not mean already extinct. Our fictional island/mainland counts distinguish these outcomes.",
    "learn": [
      {
        "title": "Count the whole species",
        "text": "A species is extinct when none of its individuals remains alive anywhere. A local population can disappear while the species survives elsewhere. Endangered means at risk; it does not mean already extinct. Our fictional island/mainland counts distinguish these outcomes.",
        "scene": "bound:extinction:0",
        "process": false
      },
      {
        "title": "Several pressures can combine",
        "text": "Environmental change, habitat loss, new predators, new pathogens, competition and catastrophic events can contribute to extinction. If survival and reproduction no longer replace losses, numbers may fall. A population is not guaranteed to evolve a helpful variant in time.",
        "scene": "bound:extinction-factors:1",
        "process": false
      },
      {
        "title": "Use the supplied evidence",
        "text": "Fictional surveys record island/mainland counts of12/8, then3/6, then0/5. The island population has disappeared, but five individuals remain elsewhere. If the final five also die without descendants, the species becomes extinct. Counts illustrate a definition, not a real extinction forecast.",
        "scene": "bound:extinction:2",
        "process": false
      },
      {
        "title": "Separate a mechanism from certainty",
        "text": "Several pressures may operate together. A fall in counts after a habitat change supports investigation of a possible cause, but the timing alone does not prove the sole cause. Use observations, comparisons and uncertainty when proposing explanations.",
        "scene": "bound:extinction-evidence:3",
        "process": false
      }
    ],
    "widget": "bound-extinction",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.natural-selection"
    ],
    "skills": [
      "WS1.1",
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-bound-extinction1",
        "prompt": "A species vanishes from one island but survives elsewhere. It is…",
        "options": [
          "Locally lost, not globally extinct",
          "Certainly extinct everywhere",
          "No longer at risk anywhere"
        ],
        "answer": 0,
        "why": "Extinction concerns every living individual of the species.",
        "concept": "bio.bound-extinction"
      },
      {
        "id": "bio.p-bound-extinction2",
        "prompt": "Which could contribute to extinction?",
        "options": [
          "Guaranteed creation of helpful alleles",
          "Any stable population forever",
          "A new pathogen plus habitat loss"
        ],
        "answer": 2,
        "why": "Multiple pressures may reduce survival and reproduction.",
        "concept": "bio.bound-extinction"
      },
      {
        "id": "bio.p-bound-extinction3",
        "prompt": "A population is endangered. This means…",
        "options": [
          "Its habitat cannot change",
          "It risks extinction but still has living members",
          "Every member is already dead"
        ],
        "answer": 1,
        "why": "Risk is distinct from the outcome.",
        "concept": "bio.bound-extinction"
      },
      {
        "id": "bio.p-bound-extinction4",
        "prompt": "Numbers fall after a disturbance. The timing alone…",
        "options": [
          "Does not prove a single cause",
          "Proves all other factors irrelevant",
          "Proves every survivor has adapted"
        ],
        "answer": 0,
        "why": "A causal explanation needs appropriate evidence.",
        "concept": "bio.bound-extinction"
      }
    ],
    "check": [
      {
        "id": "bio.c-bound-extinction1",
        "prompt": "Survey A finds0 on an island and4 on the mainland. The species is…",
        "options": [
          "Still alive globally",
          "Globally extinct",
          "Known to be completely safe"
        ],
        "answer": 0,
        "why": "Four living individuals rule out global extinction.",
        "concept": "bio.bound-extinction"
      },
      {
        "id": "bio.c-bound-extinction2",
        "prompt": "What observation establishes extinction in the stated model?",
        "options": [
          "No individuals in one sample",
          "A temporary fall in reproduction",
          "No living individuals anywhere"
        ],
        "answer": 2,
        "why": "The definition is species-wide absence.",
        "concept": "bio.bound-extinction"
      },
      {
        "id": "bio.c-bound-extinction3",
        "prompt": "Why might rapid habitat change lead to extinction?",
        "options": [
          "Evolution must always prevent losses",
          "Existing variation may not permit enough survival and reproduction",
          "Every organism can choose a useful mutation"
        ],
        "answer": 1,
        "why": "Adaptation is not guaranteed.",
        "concept": "bio.bound-extinction"
      },
      {
        "id": "bio.c-bound-extinction4",
        "prompt": "A new predator and reduced food both occur. An explanation should…",
        "options": [
          "Consider combined effects",
          "Assume only one factor can matter",
          "Ignore inherited variation in all cases"
        ],
        "answer": 0,
        "why": "Several factors can contribute.",
        "concept": "bio.bound-extinction"
      },
      {
        "id": "bio.c-bound-extinction5",
        "prompt": "A few individuals remain in a declining species. It is…",
        "options": [
          "Already extinct by definition",
          "Guaranteed to recover",
          "Not yet extinct"
        ],
        "answer": 2,
        "why": "Small numbers may create serious risk but differ from extinction.",
        "concept": "bio.bound-extinction"
      },
      {
        "id": "bio.c-bound-extinction6",
        "prompt": "A survey finds no individuals in one small area. A sound conclusion is…",
        "options": [
          "The species never existed",
          "More evidence is needed before claiming global extinction",
          "Every individual worldwide must be dead"
        ],
        "answer": 1,
        "why": "Sampling absence is not proof of global absence.",
        "concept": "bio.bound-extinction"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.resistance",
    "title": "Antibiotic resistance as evolution",
    "short": "Antibiotic resistance as evolution",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.3.7"
    ],
    "combinedRefs": [
      "6.3.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Mutations can produce bacterial variants with resistance to a particular antibiotic. Bacteria reproduce quickly, so selected inherited variants can spread rapidly through a population. The bacteria become resistant, not the person. Antibiotics do not produce a useful mutation because it is needed.",
    "learn": [
      {
        "title": "Start with inherited variation",
        "text": "Mutations can produce bacterial variants with resistance to a particular antibiotic. Bacteria reproduce quickly, so selected inherited variants can spread rapidly through a population. The bacteria become resistant, not the person. Antibiotics do not produce a useful mutation because it is needed.",
        "scene": "bound:resistance:0",
        "processFilm": "bound-resistance"
      },
      {
        "title": "Separate selection from reproduction",
        "text": "Our toy cohort begins with16 susceptible and4 resistant bacteria. The illustrated antibiotic removes the susceptible cells and leaves4 resistant survivors. Their proportion rises from20% to100% even before their number rises. A later division produces8 resistant cells.",
        "scene": "bound:resistance:1",
        "processFilm": "bound-resistance"
      },
      {
        "title": "Compare treatment contexts",
        "text": "Without the illustrated antibiotic, one model division gives32 susceptible and8 resistant cells: resistance remains20%. With it, the survivors give0 susceptible and8 resistant cells:100% resistant. These deterministic counts explain selection; they are not clinical survival rates or a model of every antibiotic.",
        "scene": "bound:culture-data:2",
        "process": false
      },
      {
        "title": "Slow the development and spread",
        "text": "AQA highlights avoiding inappropriate antibiotic prescriptions, following the prescribed course, and restricting agricultural use. Take treatment as directed by the prescriber or pharmacist. MRSA is a resistant bacterium but is not untreatable with every antibiotic. Resistance can make infections harder to treat and spread; new antibiotic development is slow and costly.",
        "scene": "bound:stewardship:3",
        "process": false
      }
    ],
    "widget": "bound-resistance",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.natural-selection"
    ],
    "skills": [
      "WS1.1",
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-bound-resistance1",
        "prompt": "Who has an inherited resistant variant?",
        "options": [
          "The bacterium",
          "The patient’s personality",
          "The antibiotic molecule"
        ],
        "answer": 0,
        "why": "Resistance in this explanation is a bacterial characteristic.",
        "concept": "bio.bound-resistance"
      },
      {
        "id": "bio.p-bound-resistance2",
        "prompt": "Immediately after susceptible cells die, resistant proportion can rise while…",
        "options": [
          "Every survivor must mutate on purpose",
          "The person becomes resistant",
          "Resistant count stays the same"
        ],
        "answer": 2,
        "why": "Selection can change proportions by removing susceptible cells.",
        "concept": "bio.bound-resistance"
      },
      {
        "id": "bio.p-bound-resistance3",
        "prompt": "Why can resistant populations increase quickly?",
        "options": [
          "All antibiotics act on viruses",
          "Survivors pass inherited resistance during rapid reproduction",
          "Antibiotics teach bacteria by need"
        ],
        "answer": 1,
        "why": "Inheritance and fast reproduction drive the change.",
        "concept": "bio.bound-resistance"
      },
      {
        "id": "bio.p-bound-resistance4",
        "prompt": "Which statement about MRSA is accurate?",
        "options": [
          "It resists some antibiotics; suitable treatments may still work",
          "No antibiotic can ever treat it",
          "It is a virus"
        ],
        "answer": 0,
        "why": "Do not equate resistance with universal untreatability.",
        "concept": "bio.bound-resistance"
      }
    ],
    "check": [
      {
        "id": "bio.c-bound-resistance1",
        "prompt": "A mutation giving resistance can be present…",
        "options": [
          "Before the antibiotic is applied",
          "Only because an individual decides to adapt",
          "Only in the patient’s human genome"
        ],
        "answer": 0,
        "why": "The variant need not arise in response to exposure.",
        "concept": "bio.bound-resistance"
      },
      {
        "id": "bio.c-bound-resistance2",
        "prompt": "A fresh cohort has18 susceptible and2 resistant bacteria. Susceptible cells are removed. Before reproduction, resistant count is…",
        "options": [
          "20",
          "0",
          "2"
        ],
        "answer": 2,
        "why": "Removing susceptible cells does not itself multiply resistant cells.",
        "concept": "bio.bound-resistance"
      },
      {
        "id": "bio.c-bound-resistance3",
        "prompt": "After that removal, the resistant proportion is…",
        "options": [
          "2%",
          "100%",
          "10%"
        ],
        "answer": 1,
        "why": "All remaining cells are resistant in this stated example.",
        "concept": "bio.bound-resistance"
      },
      {
        "id": "bio.c-bound-resistance4",
        "prompt": "Which sequence explains population change?",
        "options": [
          "Variation → selection → reproduction → spread",
          "Need → deliberate mutation → all antibiotics fail",
          "Patient immunity → bacterial extinction always"
        ],
        "answer": 0,
        "why": "Track inherited variants and reproductive success.",
        "concept": "bio.bound-resistance"
      },
      {
        "id": "bio.c-bound-resistance5",
        "prompt": "Which helps address resistance?",
        "options": [
          "Antibiotics for every viral cold",
          "Assuming discovery of new antibiotics is quick and free",
          "Appropriate prescribing, prescribed-treatment adherence and restricted agricultural use"
        ],
        "answer": 2,
        "why": "The specification includes these stewardship measures.",
        "concept": "bio.bound-resistance"
      },
      {
        "id": "bio.c-bound-resistance6",
        "prompt": "MRSA resistance means…",
        "options": [
          "It is the patient who has mutated bacterial genes",
          "Treatment must account for resistance; not all antibiotics are ineffective",
          "It is unaffected by every possible treatment"
        ],
        "answer": 1,
        "why": "Resistance is to particular agents, not an absolute property against everything.",
        "concept": "bio.bound-resistance"
      }
    ]
  },
  {
    "id": "science.biology.inheritance-variation-and-evolution.classification",
    "title": "Classification, domains & evolutionary trees",
    "short": "Classification, domains & evolutionary trees",
    "topicId": "science.biology.inheritance-variation-and-evolution",
    "refs": [
      "6.4"
    ],
    "combinedRefs": [
      "6.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Linnaeus grouped organisms using structure and characteristics. From broad to narrow the ranks are kingdom, phylum, class, order, family, genus and species. Organisms within a species share the more inclusive ranks. A rank is a level in the hierarchy, not a name for every individual organism.",
    "learn": [
      {
        "title": "Use nested groups",
        "text": "Linnaeus grouped organisms using structure and characteristics. From broad to narrow the ranks are kingdom, phylum, class, order, family, genus and species. Organisms within a species share the more inclusive ranks. A rank is a level in the hierarchy, not a name for every individual organism.",
        "scene": "bound:ranks:0",
        "process": false
      },
      {
        "title": "Name a species precisely",
        "text": "A binomial uses genus followed by species, for example Homo sapiens. The genus starts with a capital letter and the second part is lower case; scientific print normally uses italics. Sharing a genus indicates a narrower classification match than sharing only a family.",
        "scene": "bound:binomial:1",
        "process": false
      },
      {
        "title": "Revise groups when evidence improves",
        "text": "Improved microscopy revealed internal structures; biochemical and chemical evidence added new comparisons. Woese’s three domains are Archaea, Bacteria and Eukaryota. Eukaryota includes protists, fungi, plants and animals. Many archaea live in extreme conditions, but they are distinct from the domain Bacteria; not every extremophile is an archaeon.",
        "scene": "bound:domains:2",
        "process": false
      },
      {
        "title": "Read relationships, not a ladder",
        "text": "Evolutionary trees combine current classification and fossil evidence to propose relationships. In the supplied tree, Y and Z share a more recent common ancestor than X and Y. Rotating a branch does not change ancestry. Modern organisms at the tips are not necessarily direct ancestors of other modern tips.",
        "scene": "bound:tree:3",
        "process": false
      }
    ],
    "widget": "bound-classification",
    "prerequisites": [
      "science.biology.inheritance-variation-and-evolution.natural-selection"
    ],
    "skills": [
      "WS1.1",
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-bound-classification1",
        "prompt": "Which pair of ranks is in broad-to-narrow order?",
        "options": [
          "Family → genus",
          "Species → kingdom",
          "Class → phylum"
        ],
        "answer": 0,
        "why": "The seven ranks form a nested hierarchy.",
        "concept": "bio.bound-classification"
      },
      {
        "id": "bio.p-bound-classification2",
        "prompt": "A binomial contains…",
        "options": [
          "Kingdom and domain only",
          "An individual’s personal name",
          "Genus and species"
        ],
        "answer": 2,
        "why": "Binomial means a two-part species name.",
        "concept": "bio.bound-classification"
      },
      {
        "id": "bio.p-bound-classification3",
        "prompt": "Which domain includes plants and fungi?",
        "options": [
          "Archaea only",
          "Eukaryota",
          "Bacteria only"
        ],
        "answer": 1,
        "why": "Eukaryota includes the stated eukaryotic groups.",
        "concept": "bio.bound-classification"
      },
      {
        "id": "bio.p-bound-classification4",
        "prompt": "Why can classification change?",
        "options": [
          "New structural and chemical evidence can alter relationships",
          "Only an organism’s wish matters",
          "All groups must remain fixed forever"
        ],
        "answer": 0,
        "why": "Scientific classification responds to evidence.",
        "concept": "bio.bound-classification"
      }
    ],
    "check": [
      {
        "id": "bio.c-bound-classification1",
        "prompt": "Which rank sequence is correct?",
        "options": [
          "Kingdom, phylum, class, order, family, genus, species",
          "Species, genus, class, family, kingdom, phylum, order",
          "Kingdom, family, species, order, class, genus, phylum"
        ],
        "answer": 0,
        "why": "Recall the broad-to-narrow nested ranks.",
        "concept": "bio.bound-classification"
      },
      {
        "id": "bio.c-bound-classification2",
        "prompt": "Which is correctly formatted as a two-part name?",
        "options": [
          "homo Sapiens",
          "Homo family sapiens",
          "Homo sapiens"
        ],
        "answer": 2,
        "why": "Genus has the initial capital; the species part is lower case.",
        "concept": "bio.bound-classification"
      },
      {
        "id": "bio.c-bound-classification3",
        "prompt": "Two organisms share genus and family; another pair shares only family. The first pair has…",
        "options": [
          "A broader match than kingdom",
          "A narrower classification match",
          "Necessarily no shared ancestor"
        ],
        "answer": 1,
        "why": "Genus is nested within family.",
        "concept": "bio.bound-classification"
      },
      {
        "id": "bio.c-bound-classification4",
        "prompt": "Woese’s domains are…",
        "options": [
          "Archaea, Bacteria and Eukaryota",
          "Plants, animals and fungi",
          "Kingdom, genus and species"
        ],
        "answer": 0,
        "why": "Domains are distinct from kingdoms and ranks within the old sequence.",
        "concept": "bio.bound-classification"
      },
      {
        "id": "bio.c-bound-classification5",
        "prompt": "Evidence that helped classification develop includes…",
        "options": [
          "Only the size of names",
          "Only an organism’s geographic address",
          "Microscopy, biochemical processes and chemical analysis"
        ],
        "answer": 2,
        "why": "New biological evidence supported new models.",
        "concept": "bio.bound-classification"
      },
      {
        "id": "bio.c-bound-classification6",
        "prompt": "Tree R splits to X and S; S splits to Y and Z. Which pair shares S?",
        "options": [
          "X and Z only",
          "Y and Z",
          "X and Y only"
        ],
        "answer": 1,
        "why": "Trace branches back to the shared node.",
        "concept": "bio.bound-classification"
      }
    ]
  },
  {
    "id": "science.biology.ecology.communities",
    "title": "Communities, competition & interdependence",
    "short": "Communities, competition & interdependence",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.1.1"
    ],
    "combinedRefs": [
      "7.1.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "An individual is one organism. A population is members of one species in an area. A community includes the populations of different species there. An ecosystem includes that living community interacting with non-living surroundings. Water, air and soil conditions are part of the ecosystem, not species in the community.",
    "learn": [
      {
        "title": "Zoom from one organism to an ecosystem",
        "text": "An individual is one organism. A population is members of one species in an area. A community includes the populations of different species there. An ecosystem includes that living community interacting with non-living surroundings. Water, air and soil conditions are part of the ecosystem, not species in the community.",
        "scene": "bound:levels:0",
        "process": false
      },
      {
        "title": "Identify limited resources",
        "text": "Plants may compete for light, space, water and mineral ions. Animals may compete for food, mates and territory. Use the supplied habitat information: a broad leaf can help intercept light in shade, but which feature helps depends on the conditions. Full structural, behavioural and functional adaptations follow in later lessons.",
        "scene": "bound:competition:1",
        "process": false
      },
      {
        "title": "Trace a dependency",
        "text": "Species can depend on one another for food, shelter, pollination and seed dispersal. Removing a species may affect others through these links. Our worked example traces a pollinator’s service to a flowering plant and fruit availability to a consumer. It is one small network, not a complete ecosystem.",
        "scene": "bound:community-process:2",
        "processFilm": "bound-community-process"
      },
      {
        "title": "Test one change at a time",
        "text": "The toy berry model gives12 output units with adequate water and pollinators,4 without pollinators,6 with dry conditions and pollinators, and2 with both stresses. Compare baseline with one change to isolate a factor in this model. Stable communities have fairly constant populations despite fluctuations; stability does not mean nothing changes.",
        "scene": "bound:community-data:3",
        "process": false
      }
    ],
    "widget": "bound-communities",
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS2c",
      "MS4a"
    ],
    "practice": [
      {
        "id": "bio.p-bound-communities1",
        "prompt": "Many individuals of one species in an area form…",
        "options": [
          "A population",
          "An ecosystem including all non-living factors",
          "A kingdom by definition"
        ],
        "answer": 0,
        "why": "Population refers to one species in a stated area.",
        "concept": "bio.bound-communities"
      },
      {
        "id": "bio.p-bound-communities2",
        "prompt": "Plant competition can be for…",
        "options": [
          "Only mates and territory",
          "Only oxygen for fish",
          "Light, water, space and mineral ions"
        ],
        "answer": 2,
        "why": "Use the resources required by the organisms.",
        "concept": "bio.bound-communities"
      },
      {
        "id": "bio.p-bound-communities3",
        "prompt": "A bird depends on fruit from a plant pollinated by an insect. Removing that insect…",
        "options": [
          "Automatically proves global extinction",
          "May affect the plant and bird through dependencies",
          "Can never affect another species"
        ],
        "answer": 1,
        "why": "Changes can propagate through a community.",
        "concept": "bio.bound-communities"
      },
      {
        "id": "bio.p-bound-communities4",
        "prompt": "A stable community…",
        "options": [
          "Can fluctuate while population sizes remain fairly constant",
          "Has no interactions",
          "Has exactly identical counts every second"
        ],
        "answer": 0,
        "why": "Stability is relative balance, not a frozen state.",
        "concept": "bio.bound-communities"
      }
    ],
    "check": [
      {
        "id": "bio.c-bound-communities1",
        "prompt": "One frog, all frogs, frogs plus other species, and their non-living surroundings correspond to…",
        "options": [
          "Individual, population, community, ecosystem",
          "Community, individual, ecosystem, population",
          "Species, genus, family, kingdom"
        ],
        "answer": 0,
        "why": "Match the ecological levels.",
        "concept": "bio.bound-communities"
      },
      {
        "id": "bio.c-bound-communities2",
        "prompt": "Which is an abiotic part of an ecosystem?",
        "options": [
          "A pollinating bee",
          "A fungal pathogen",
          "Water availability"
        ],
        "answer": 2,
        "why": "Abiotic describes non-living conditions.",
        "concept": "bio.bound-communities"
      },
      {
        "id": "bio.c-bound-communities3",
        "prompt": "Animals in the supplied habitat may compete for…",
        "options": [
          "Only scientific names",
          "Food, mates and territory",
          "Only light and soil mineral ions"
        ],
        "answer": 1,
        "why": "Animal competition depends on their needs.",
        "concept": "bio.bound-communities"
      },
      {
        "id": "bio.c-bound-communities4",
        "prompt": "Two plants shade one another and draw water from the same soil. This supports…",
        "options": [
          "Competition for light and water",
          "Proof that plants do not compete",
          "Competition only for mates"
        ],
        "answer": 0,
        "why": "Limited shared resources create competition.",
        "concept": "bio.bound-communities"
      },
      {
        "id": "bio.c-bound-communities5",
        "prompt": "A toy model changes only pollinator availability and output falls. Within that model this supports…",
        "options": [
          "An exact real-world rate for every ecosystem",
          "Proof water never matters",
          "An effect of the pollinator input"
        ],
        "answer": 2,
        "why": "A controlled model comparison has a limited interpretation.",
        "concept": "bio.bound-communities"
      },
      {
        "id": "bio.c-bound-communities6",
        "prompt": "Why can loss of one species affect a community?",
        "options": [
          "Every ecosystem contains only one population",
          "Other species may depend on its services or resources",
          "Species never interact"
        ],
        "answer": 1,
        "why": "Trace the links of interdependence.",
        "concept": "bio.bound-communities"
      }
    ]
  },
  {
    "id": "science.biology.ecology.abiotic",
    "title": "Abiotic factors & community evidence",
    "short": "Abiotic factors & community evidence",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.1.2"
    ],
    "combinedRefs": [
      "7.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Abiotic factors include light intensity, temperature, moisture, soil pH and mineral content, wind intensity and direction, carbon dioxide for plants and dissolved oxygen for aquatic animals. Explain a particular community using the supplied information rather than assuming every species responds in the same way.",
    "learn": [
      {
        "title": "Identify non-living influences",
        "text": "Abiotic factors include light intensity, temperature, moisture, soil pH and mineral content, wind intensity and direction, carbon dioxide for plants and dissolved oxygen for aquatic animals. Explain a particular community using the supplied information rather than assuming every species responds in the same way.",
        "scene": "bound:abiotic-factors:0",
        "process": false
      },
      {
        "title": "Read an original response graph",
        "text": "Our fictional plant dataset gives mean counts6,14 and9 at10,20 and30°C under otherwise matched stated conditions. The highest supplied count is at20°C. This does not show that increasing temperature always increases abundance, or establish an exact optimum between the tested temperatures.",
        "scene": "bound:temperature-data:1",
        "process": false
      },
      {
        "title": "Make a controlled comparison",
        "text": "In our fictional moisture comparison, dry plots have counts4,6,5 and moist plots11,13,12. The means are5 and12. Repeated observations show some variation. If other conditions are matched, the comparison supports a moisture effect in this example; naturally surveyed sites may differ in several factors.",
        "scene": "bound:moisture-data:2",
        "process": false
      },
      {
        "title": "Explain the relevant mechanism",
        "text": "Low dissolved oxygen can limit aquatic animals’ aerobic respiration. Light and carbon dioxide can limit plant photosynthesis; soil pH can affect which plants grow well. Wind can affect water loss or dispersal in context. A field correlation alone does not prove one factor caused the pattern; investigate alternatives and collect appropriate evidence.",
        "scene": "bound:abiotic-evidence:3",
        "process": false
      }
    ],
    "widget": "bound-abiotic",
    "prerequisites": [
      "science.biology.ecology.communities"
    ],
    "skills": [
      "WS1.2",
      "MS2c",
      "MS4a"
    ],
    "practice": [
      {
        "id": "bio.p-bound-abiotic1",
        "prompt": "Which pair is entirely abiotic?",
        "options": [
          "Light intensity and soil pH",
          "Predators and pathogens",
          "Pollinators and seed dispersers"
        ],
        "answer": 0,
        "why": "The pair contains non-living conditions.",
        "concept": "bio.bound-abiotic"
      },
      {
        "id": "bio.p-bound-abiotic2",
        "prompt": "At10,20,30°C the supplied counts are6,14,9. Which tested temperature has the highest count?",
        "options": [
          "30°C because warmer is always better",
          "All temperatures are identical",
          "20°C"
        ],
        "answer": 2,
        "why": "Read the actual supplied data.",
        "concept": "bio.bound-abiotic"
      },
      {
        "id": "bio.p-bound-abiotic3",
        "prompt": "Why can low dissolved oxygen affect fish?",
        "options": [
          "It is a living predator",
          "It can limit aerobic respiration",
          "It prevents every plant from having DNA"
        ],
        "answer": 1,
        "why": "Connect the factor with a biological process.",
        "concept": "bio.bound-abiotic"
      },
      {
        "id": "bio.p-bound-abiotic4",
        "prompt": "A field survey shows two factors varying together. It…",
        "options": [
          "Does not alone establish the sole cause",
          "Proves both factors are the same thing",
          "Proves every species has the same optimum"
        ],
        "answer": 0,
        "why": "Consider alternative explanations and controlled evidence.",
        "concept": "bio.bound-abiotic"
      }
    ],
    "check": [
      {
        "id": "bio.c-bound-abiotic1",
        "prompt": "Which factor is abiotic?",
        "options": [
          "Wind direction",
          "Arrival of a new predator",
          "A disease-causing bacterium"
        ],
        "answer": 0,
        "why": "Wind is a non-living environmental influence.",
        "concept": "bio.bound-abiotic"
      },
      {
        "id": "bio.c-bound-abiotic2",
        "prompt": "Which pairing is biologically relevant?",
        "options": [
          "Only mineral ions as the food of all animals",
          "Only light as a replacement for water",
          "Carbon dioxide for plant photosynthesis"
        ],
        "answer": 2,
        "why": "Choose a mechanism that fits the organism.",
        "concept": "bio.bound-abiotic"
      },
      {
        "id": "bio.c-bound-abiotic3",
        "prompt": "Fresh matched plots have means3 in dry soil and10 in moist soil. Difference?",
        "options": [
          "30",
          "7",
          "13"
        ],
        "answer": 1,
        "why": "Subtract the means:10−3=7.",
        "concept": "bio.bound-abiotic"
      },
      {
        "id": "bio.c-bound-abiotic4",
        "prompt": "Three tested temperatures give counts5,11,8 in increasing order of temperature. This shows…",
        "options": [
          "A peak at the middle tested temperature",
          "A rise at every increase",
          "The exact optimum at every possible temperature"
        ],
        "answer": 0,
        "why": "Do not extrapolate beyond the tested data.",
        "concept": "bio.bound-abiotic"
      },
      {
        "id": "bio.c-bound-abiotic5",
        "prompt": "Why use repeated observations?",
        "options": [
          "To guarantee every value is identical",
          "To remove all possible bias automatically",
          "To examine variation and estimate a mean"
        ],
        "answer": 2,
        "why": "Repeats help assess the evidence, not eliminate every limitation.",
        "concept": "bio.bound-abiotic"
      },
      {
        "id": "bio.c-bound-abiotic6",
        "prompt": "Two natural sites differ in light and moisture. A count difference proves…",
        "options": [
          "Moisture is certainly irrelevant",
          "Neither factor alone without further evidence",
          "Light is certainly the sole cause"
        ],
        "answer": 1,
        "why": "Potential confounding needs investigation.",
        "concept": "bio.bound-abiotic"
      }
    ]
  }
];
export const boundConcepts={"bio.bound-extinction": "Extinction & environmental change", "bio.bound-resistance": "Antibiotic resistance as evolution", "bio.bound-classification": "Classification, domains & evolutionary trees", "bio.bound-communities": "Communities, competition & interdependence", "bio.bound-abiotic": "Abiotic factors & community evidence"};
