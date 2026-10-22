export const eco2Lessons=[
  {
    "id": "science.biology.ecology.biotic",
    "title": "Biotic factors & community change",
    "short": "Biotic factors & community change",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.1.3"
    ],
    "combinedRefs": [
      "7.1.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Biotic factors come from living organisms and their interactions. Food availability, new predators, new pathogens and competition can change a community. A food resource is a biotic influence even when an animal eats plant material; distinguish it from non-living conditions such as temperature.",
    "learn": [
      {
        "title": "Identify living influences",
        "text": "Biotic factors come from living organisms and their interactions. Food availability, new predators, new pathogens and competition can change a community. A food resource is a biotic influence even when an animal eats plant material; distinguish it from non-living conditions such as temperature.",
        "scene": "eco2:biotic:0",
        "process": false
      },
      {
        "title": "Trace a plausible mechanism",
        "text": "If a new predator increases deaths, prey numbers may fall. A pathogen can reduce survival or reproduction. Reduced food may limit growth and breeding. A successful competitor may leave another species with too few resources or individuals to breed. Effects can spread through interdependence.",
        "scene": "eco2:biotic:1",
        "process": false
      },
      {
        "title": "Use the supplied counts",
        "text": "Our fictional survey records plant A counts 18,12,6 while competitor B counts 2,8,14. This pattern is consistent with competition, but it does not prove competition is the sole cause. Check other conditions, repeated observations and an appropriate comparison.",
        "scene": "eco2:biotic-data:2",
        "process": false
      },
      {
        "title": "Separate a prediction from a guarantee",
        "text": "Outcomes depend on context. More food can support increased reproduction, but predators, disease and other limits may prevent a lasting increase. Explain the proposed link with evidence rather than assuming every change has one certain effect.",
        "scene": "eco2:biotic:3",
        "process": false
      }
    ],
    "widget": "eco2-biotic",
    "prerequisites": [
      "science.biology.ecology.communities",
      "science.biology.ecology.abiotic"
    ],
    "skills": [
      "WS1.2",
      "MS2c",
      "MS4a"
    ],
    "practice": [
      {
        "id": "bio.p-eco2-biotic1",
        "prompt": "Which is a biotic change?",
        "options": [
          "A new predator arrives",
          "The air temperature falls",
          "Soil pH changes"
        ],
        "answer": 0,
        "why": "A predator is a living influence.",
        "concept": "bio.eco2-biotic"
      },
      {
        "id": "bio.p-eco2-biotic2",
        "prompt": "Food availability falls. A plausible effect is…",
        "options": [
          "Guaranteed instant extinction of every species",
          "All non-living conditions disappear",
          "Reduced survival or breeding in consumers"
        ],
        "answer": 2,
        "why": "Connect the resource with the consumer’s needs.",
        "concept": "bio.eco2-biotic"
      },
      {
        "id": "bio.p-eco2-biotic3",
        "prompt": "Competitor B rises as A falls. This pattern alone…",
        "options": [
          "Proves the species never interact",
          "Does not establish the sole cause",
          "Proves no other factor matters"
        ],
        "answer": 1,
        "why": "A survey association needs further evidence.",
        "concept": "bio.eco2-biotic"
      },
      {
        "id": "bio.p-eco2-biotic4",
        "prompt": "Why might increased food fail to increase abundance indefinitely?",
        "options": [
          "Other factors can limit the population",
          "Food is never relevant",
          "Every organism has unlimited resources"
        ],
        "answer": 0,
        "why": "Community outcomes depend on several influences.",
        "concept": "bio.eco2-biotic"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco2-biotic1",
        "prompt": "Which set contains biotic influences?",
        "options": [
          "Food, predators, pathogens and competitors",
          "Light, pH and wind",
          "Temperature and moisture only"
        ],
        "answer": 0,
        "why": "These are the listed living influences.",
        "concept": "bio.eco2-biotic"
      },
      {
        "id": "bio.c-eco2-biotic2",
        "prompt": "A pathogen reduces successful breeding. This can…",
        "options": [
          "Guarantee a helpful mutation in every individual",
          "Remove all abiotic factors",
          "Reduce population replacement"
        ],
        "answer": 2,
        "why": "Reproduction affects the number of new individuals.",
        "concept": "bio.eco2-biotic"
      },
      {
        "id": "bio.c-eco2-biotic3",
        "prompt": "One species outcompetes another for food. The other may…",
        "options": [
          "Never change",
          "Have insufficient numbers or resources to breed",
          "Always become more abundant"
        ],
        "answer": 1,
        "why": "Competition can reduce survival and reproduction.",
        "concept": "bio.eco2-biotic"
      },
      {
        "id": "bio.c-eco2-biotic4",
        "prompt": "New predators are followed by lower prey counts. A sensible next step is…",
        "options": [
          "Investigate the mechanism and alternative factors",
          "Declare the single cause proven by timing",
          "Ignore all repeated evidence"
        ],
        "answer": 0,
        "why": "A causal explanation needs appropriate evidence.",
        "concept": "bio.eco2-biotic"
      },
      {
        "id": "bio.c-eco2-biotic5",
        "prompt": "Fresh counts fall from 20 to 12 after a disturbance. The decrease is…",
        "options": [
          "32 individuals",
          "240 individuals",
          "8 individuals"
        ],
        "answer": 2,
        "why": "Subtract the later count from the earlier count.",
        "concept": "bio.eco2-biotic"
      },
      {
        "id": "bio.c-eco2-biotic6",
        "prompt": "Why can a biotic change affect several populations?",
        "options": [
          "Living factors are the same as wind",
          "Species are linked by dependencies",
          "Every population is isolated from all others"
        ],
        "answer": 1,
        "why": "Interdependence can propagate a change.",
        "concept": "bio.eco2-biotic"
      }
    ]
  },
  {
    "id": "science.biology.ecology.adaptations",
    "title": "Structural, behavioural & functional adaptations",
    "short": "Structural, behavioural & functional adaptations",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.1.4"
    ],
    "combinedRefs": [
      "7.1.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "An adaptation is a feature that helps an organism survive and reproduce in its usual conditions. Structural adaptations concern physical features, such as a thick waxy plant cuticle reducing water loss. Explain what the feature does in the stated habitat rather than simply naming it.",
    "learn": [
      {
        "title": "Connect a feature to its context",
        "text": "An adaptation is a feature that helps an organism survive and reproduce in its usual conditions. Structural adaptations concern physical features, such as a thick waxy plant cuticle reducing water loss. Explain what the feature does in the stated habitat rather than simply naming it.",
        "scene": "eco2:adaptation-structure:0",
        "process": false
      },
      {
        "title": "Distinguish behaviour and function",
        "text": "Behavioural adaptations concern actions, such as feeding during cooler night-time conditions. Functional adaptations concern processes, such as producing concentrated urine to reduce water loss. Categories describe different aspects; some examples involve more than one aspect.",
        "scene": "eco2:adaptation-response:1",
        "processFilm": "eco2-response"
      },
      {
        "title": "Avoid a purpose-driven explanation",
        "text": "A desert organism does not grow a new inherited feature simply because it needs one. Inherited variation and selection across generations explain evolutionary adaptation. An individual can also change its behaviour or physiological state using features it already has. Our day/night loop shows an existing response, not new evolution.",
        "scene": "eco2:adaptation-response:2",
        "processFilm": "eco2-response"
      },
      {
        "title": "Recognise extreme environments",
        "text": "Extremophiles live in conditions such as very high temperature, pressure or salt concentration. Some bacteria at deep-sea vents are examples. Specify the relevant condition from the information supplied; not every organism tolerates every extreme and not all extremophiles belong to the same domain.",
        "scene": "eco2:extremophiles:3",
        "process": false
      }
    ],
    "widget": "eco2-adaptations",
    "prerequisites": [
      "science.biology.ecology.communities",
      "science.biology.ecology.abiotic"
    ],
    "skills": [
      "WS1.2",
      "MS2c",
      "MS4a"
    ],
    "practice": [
      {
        "id": "bio.p-eco2-adaptations1",
        "prompt": "A thick waxy cuticle is mainly a…",
        "options": [
          "Structural feature",
          "Daily feeding decision only",
          "Scientific name"
        ],
        "answer": 0,
        "why": "It is a physical feature that can reduce water loss.",
        "concept": "bio.eco2-adaptations"
      },
      {
        "id": "bio.p-eco2-adaptations2",
        "prompt": "Feeding at night in a hot habitat is mainly…",
        "options": [
          "A change in kingdom",
          "A guaranteed new mutation",
          "Behavioural"
        ],
        "answer": 2,
        "why": "It is an action using existing capabilities.",
        "concept": "bio.eco2-adaptations"
      },
      {
        "id": "bio.p-eco2-adaptations3",
        "prompt": "Producing concentrated urine conserves water through a…",
        "options": [
          "Change in food-chain direction",
          "Functional process",
          "Branch on a classification tree only"
        ],
        "answer": 1,
        "why": "Functional adaptations concern biological processes.",
        "concept": "bio.eco2-adaptations"
      },
      {
        "id": "bio.p-eco2-adaptations4",
        "prompt": "An organism at a high-salt site must be evaluated using…",
        "options": [
          "Evidence about its tolerance of that condition",
          "An assumption it tolerates every extreme",
          "Only the length of its name"
        ],
        "answer": 0,
        "why": "Adaptations have contextual benefits and limits.",
        "concept": "bio.eco2-adaptations"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco2-adaptations1",
        "prompt": "Which explanation links a structural feature to a benefit?",
        "options": [
          "Waxy cuticle reduces water loss in dry conditions",
          "A cuticle is helpful because it is helpful",
          "Every thick surface guarantees survival everywhere"
        ],
        "answer": 0,
        "why": "Explain the mechanism in the stated conditions.",
        "concept": "bio.eco2-adaptations"
      },
      {
        "id": "bio.c-eco2-adaptations2",
        "prompt": "A desert animal avoids daytime heat by sheltering. This is mainly…",
        "options": [
          "A new inherited mutation caused by need",
          "Linnaean classification",
          "Behavioural"
        ],
        "answer": 2,
        "why": "The action changes exposure using existing features.",
        "concept": "bio.eco2-adaptations"
      },
      {
        "id": "bio.c-eco2-adaptations3",
        "prompt": "Conserving water through urine concentration is mainly…",
        "options": [
          "A binomial name",
          "Functional",
          "A population survey method"
        ],
        "answer": 1,
        "why": "It is a biological process.",
        "concept": "bio.eco2-adaptations"
      },
      {
        "id": "bio.c-eco2-adaptations4",
        "prompt": "An individual shelters in shade. The animation demonstrates…",
        "options": [
          "An existing response, not evolution of a new inherited feature",
          "Instant creation of a new species",
          "A guaranteed allele change in every cell"
        ],
        "answer": 0,
        "why": "Separate within-life response from population evolution.",
        "concept": "bio.eco2-adaptations"
      },
      {
        "id": "bio.c-eco2-adaptations5",
        "prompt": "Which is an example of an extremophile context?",
        "options": [
          "Every animal in a school field",
          "Any organism with a short name",
          "Bacteria adapted to high-temperature deep-sea vent conditions"
        ],
        "answer": 2,
        "why": "Extremophiles tolerate extreme physical or chemical conditions.",
        "concept": "bio.eco2-adaptations"
      },
      {
        "id": "bio.c-eco2-adaptations6",
        "prompt": "Why can one feature be advantageous in one habitat but not another?",
        "options": [
          "Adaptations remove every resource limit",
          "Benefits depend on the environmental conditions",
          "Every habitat has identical conditions"
        ],
        "answer": 1,
        "why": "Interpret the supplied context rather than assuming universal benefit.",
        "concept": "bio.eco2-adaptations"
      }
    ]
  },
  {
    "id": "science.biology.ecology.food-chains",
    "title": "Food chains & predator–prey cycles",
    "short": "Food chains & predator–prey cycles",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.2.1"
    ],
    "combinedRefs": [
      "7.2.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Photosynthetic organisms make organic molecules and supply biomass for food chains. A chain usually starts with a green plant or alga making glucose by photosynthesis. Arrows point from a food resource towards the organism that consumes it, showing transfer of material and energy.",
    "learn": [
      {
        "title": "Begin with a producer",
        "text": "Photosynthetic organisms make organic molecules and supply biomass for food chains. A chain usually starts with a green plant or alga making glucose by photosynthesis. Arrows point from a food resource towards the organism that consumes it, showing transfer of material and energy.",
        "scene": "eco2:feeding:0",
        "processFilm": "eco2-feeding"
      },
      {
        "title": "Name the consumer levels",
        "text": "In grass → rabbit → fox, grass is the producer, rabbit the primary consumer and fox a secondary consumer. A longer supplied chain may add a tertiary consumer. A predator kills and eats another animal; that animal is its prey. One organism may occupy different positions in different food webs.",
        "scene": "eco2:feeding:1",
        "processFilm": "eco2-feeding"
      },
      {
        "title": "Follow a delayed response",
        "text": "In a simplified stable predator–prey system, prey numbers rise first; increased food can then support more predators. Greater predation can reduce prey; less food later reduces predators, allowing prey to recover. Other factors also matter. Our loop compresses this relationship and does not predict real population rates.",
        "scene": "eco2:predator-process:2",
        "processFilm": "eco2-predator"
      },
      {
        "title": "Build and read the population graph",
        "text": "The original paired dataset uses times 0–4 with prey counts 8,16,12,6,8 and predator counts 2,3,6,4,2. Use labelled time and population axes and a common scale. The prey peak is at 1 and predator peak at 2 in this example. A lag is a pattern to explain, not proof that every community follows this exact cycle.",
        "scene": "eco2:cycle-data:3",
        "process": false
      }
    ],
    "widget": "eco2-food-chains",
    "prerequisites": [
      "science.biology.ecology.communities",
      "science.biology.ecology.abiotic"
    ],
    "skills": [
      "WS1.2",
      "MS2c",
      "MS4a",
      "MS4c"
    ],
    "practice": [
      {
        "id": "bio.p-eco2-food-chains1",
        "prompt": "Food-chain arrows point…",
        "options": [
          "From the food towards its consumer",
          "From predator towards prey only",
          "Always towards the Sun"
        ],
        "answer": 0,
        "why": "They show the direction of transfer.",
        "concept": "bio.eco2-food-chains"
      },
      {
        "id": "bio.p-eco2-food-chains2",
        "prompt": "In algae → small invertebrate → fish, the invertebrate is a…",
        "options": [
          "Producer",
          "Tertiary consumer necessarily",
          "Primary consumer"
        ],
        "answer": 2,
        "why": "It feeds directly on the producer.",
        "concept": "bio.eco2-food-chains"
      },
      {
        "id": "bio.p-eco2-food-chains3",
        "prompt": "Why can predator numbers rise after prey numbers rise?",
        "options": [
          "The time axis runs backwards",
          "More prey can provide food supporting reproduction",
          "Predators are always producers"
        ],
        "answer": 1,
        "why": "A biological response can take time.",
        "concept": "bio.eco2-food-chains"
      },
      {
        "id": "bio.p-eco2-food-chains4",
        "prompt": "A rise and fall in a supplied graph…",
        "options": [
          "Needs context and does not prove one sole cause",
          "Means every species has the same cycle",
          "Proves there are no abiotic influences"
        ],
        "answer": 0,
        "why": "The graph is evidence to interpret with model limits.",
        "concept": "bio.eco2-food-chains"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco2-food-chains1",
        "prompt": "What starts the supplied photosynthetic food chain?",
        "options": [
          "A plant or alga producing organic molecules",
          "A fox producing sunlight",
          "A predator consuming its own ancestor"
        ],
        "answer": 0,
        "why": "Producers synthesise the molecules that supply the chain.",
        "concept": "bio.eco2-food-chains"
      },
      {
        "id": "bio.c-eco2-food-chains2",
        "prompt": "In plant → caterpillar → bird → hawk, the hawk is the…",
        "options": [
          "Primary producer",
          "Primary consumer",
          "Tertiary consumer"
        ],
        "answer": 2,
        "why": "Count successive consumer levels.",
        "concept": "bio.eco2-food-chains"
      },
      {
        "id": "bio.c-eco2-food-chains3",
        "prompt": "A predator is an animal that…",
        "options": [
          "Never depends on prey",
          "Kills and eats another animal",
          "Is always eaten by plants"
        ],
        "answer": 1,
        "why": "Prey is the animal consumed.",
        "concept": "bio.eco2-food-chains"
      },
      {
        "id": "bio.c-eco2-food-chains4",
        "prompt": "In a fresh graph, prey peak at time3 and predators at time5. The predator peak lags by…",
        "options": [
          "2 time units",
          "8 time units",
          "15 time units"
        ],
        "answer": 0,
        "why": "Subtract the prey peak time from the predator peak time.",
        "concept": "bio.eco2-food-chains"
      },
      {
        "id": "bio.c-eco2-food-chains5",
        "prompt": "Why may predator numbers later fall after prey decline?",
        "options": [
          "Predators turn into producers",
          "All prey deliberately change their genes",
          "Food availability for predators falls"
        ],
        "answer": 2,
        "why": "Link food supply with predator survival and reproduction.",
        "concept": "bio.eco2-food-chains"
      },
      {
        "id": "bio.c-eco2-food-chains6",
        "prompt": "A model shows repeatable cycles. Which limitation is appropriate?",
        "options": [
          "Graph patterns establish every cause without other evidence",
          "Real populations also respond to other influences",
          "Every ecosystem has these exact counts"
        ],
        "answer": 1,
        "why": "The simplified cycle is not a universal forecast.",
        "concept": "bio.eco2-food-chains"
      }
    ]
  },
  {
    "id": "science.biology.ecology.sampling",
    "title": "Quadrats & population estimates",
    "short": "Quadrats & population estimates",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.2.1"
    ],
    "combinedRefs": [
      "7.2.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A quadrat samples a known area. Use random coordinates to choose locations instead of placing it where plants look abundant. Identify the target species and use consistent boundary and whole-plant rules. Random placement reduces selection bias; it does not guarantee an exact estimate.",
    "learn": [
      {
        "title": "Choose positions without preference",
        "text": "A quadrat samples a known area. Use random coordinates to choose locations instead of placing it where plants look abundant. Identify the target species and use consistent boundary and whole-plant rules. Random placement reduces selection bias; it does not guarantee an exact estimate.",
        "scene": "eco2:sampling-process:0",
        "processFilm": "eco2-sampling"
      },
      {
        "title": "Scale a representative sample",
        "text": "Mean count per quadrat divided by quadrat area gives estimated density. Multiply density by habitat area for an estimated total. In our tutorial, four 1 m² quadrats give counts 2,6,2,6: mean 4, so a 16 m² habitat gives an estimate of 64 plants. Only one species is counted.",
        "scene": "eco2:sample-data:1",
        "process": false
      },
      {
        "title": "Describe variation honestly",
        "text": "For counts 2,6,2,6, the mean is 4, the median is 4 and the two modes are 2 and6. More independent representative samples can improve precision, but cannot automatically remove a biased placement rule. The original complete toy field contains68 plants; a sample estimate need not equal the true total.",
        "scene": "eco2:sample-data:2",
        "process": false
      },
      {
        "title": "Prepare for real fieldwork",
        "text": "These lessons prepare for separate Biology practical9 and Trilogy practical7. Real fieldwork requires suitable equipment, observations and records under the school’s risk assessment. Avoid damaging organisms, inspect ground hazards, handle specimens appropriately and follow hygiene instructions. Four virtual placements are a tutorial, not completion of the physical practical.",
        "scene": "eco2:sampling-method:3",
        "process": false
      }
    ],
    "widget": "eco2-sampling",
    "prerequisites": [
      "science.biology.ecology.communities",
      "science.biology.ecology.abiotic"
    ],
    "skills": [
      "WS1.2",
      "MS2c",
      "MS4a",
      "MS2b",
      "MS2d",
      "MS2f",
      "MS4c",
      "WS2.1",
      "WS2.2",
      "WS2.3"
    ],
    "practice": [
      {
        "id": "bio.p-eco2-sampling1",
        "prompt": "Which placement method reduces preference bias?",
        "options": [
          "Use randomly generated coordinates",
          "Choose only flower-rich patches",
          "Always place beside the path"
        ],
        "answer": 0,
        "why": "Sample positions without deliberately selecting abundance.",
        "concept": "bio.eco2-sampling"
      },
      {
        "id": "bio.p-eco2-sampling2",
        "prompt": "Mean 3 plants per 0.5 m² quadrat gives density…",
        "options": [
          "1.5 plants per m²",
          "3 plants in the whole habitat",
          "6 plants per m²"
        ],
        "answer": 2,
        "why": "Divide by the sampled area.",
        "concept": "bio.eco2-sampling"
      },
      {
        "id": "bio.p-eco2-sampling3",
        "prompt": "A density of 6 plants/m² in a 20 m² habitat estimates…",
        "options": [
          "0.3 plants",
          "120 plants",
          "26 plants"
        ],
        "answer": 1,
        "why": "Multiply density by habitat area.",
        "concept": "bio.eco2-sampling"
      },
      {
        "id": "bio.p-eco2-sampling4",
        "prompt": "Why might a representative sample estimate differ from the true total?",
        "options": [
          "Sampling variation",
          "A mean is always exact for the whole habitat",
          "All plants must be evenly spaced"
        ],
        "answer": 0,
        "why": "Different samples can contain different counts.",
        "concept": "bio.eco2-sampling"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco2-sampling1",
        "prompt": "Why use random coordinates rather than throwing a quadrat towards plants?",
        "options": [
          "To reduce selection by appearance or convenience",
          "To guarantee an exact total",
          "To ensure only the largest plants are sampled"
        ],
        "answer": 0,
        "why": "The position-selection method affects bias.",
        "concept": "bio.eco2-sampling"
      },
      {
        "id": "bio.c-eco2-sampling2",
        "prompt": "Fresh quadrat counts 1,3,5,7 have arithmetic mean…",
        "options": [
          "16",
          "7",
          "4"
        ],
        "answer": 2,
        "why": "The total 16 divided by 4 samples is 4.",
        "concept": "bio.eco2-sampling"
      },
      {
        "id": "bio.c-eco2-sampling3",
        "prompt": "A mean of 5 plants per 0.25 m² gives estimated density…",
        "options": [
          "5 plants in every habitat",
          "20 plants/m²",
          "1.25 plants/m²"
        ],
        "answer": 1,
        "why": "Divide by area:5/0.25=20.",
        "concept": "bio.eco2-sampling"
      },
      {
        "id": "bio.c-eco2-sampling4",
        "prompt": "A density of 20 plants/m² in 15 m² gives estimate…",
        "options": [
          "300 plants",
          "35 plants",
          "0.75 plants"
        ],
        "answer": 0,
        "why": "Scale the density to the whole area.",
        "concept": "bio.eco2-sampling"
      },
      {
        "id": "bio.c-eco2-sampling5",
        "prompt": "Which improves a sampling plan?",
        "options": [
          "Only sampling the densest patch",
          "Changing boundary rules between quadrats",
          "More representative samples and consistent counting rules"
        ],
        "answer": 2,
        "why": "Consistency and representation matter alongside sample size.",
        "concept": "bio.eco2-sampling"
      },
      {
        "id": "bio.c-eco2-sampling6",
        "prompt": "A simulator records four quadrats. This…",
        "options": [
          "Guarantees the true field total",
          "Prepares reasoning but does not replace required physical fieldwork",
          "Certifies the physical required practical complete"
        ],
        "answer": 1,
        "why": "Virtual practice and physical evidence are distinct.",
        "concept": "bio.eco2-sampling"
      }
    ]
  },
  {
    "id": "science.biology.ecology.transects",
    "title": "Transects, distribution & field evidence",
    "short": "Transects, distribution & field evidence",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.2.1"
    ],
    "combinedRefs": [
      "7.2.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A transect can examine how a species is distributed across changing conditions, such as from shade into open ground. Position a tape along the gradient, place quadrats at planned regular intervals, and record distance, organism counts and the relevant factor at each station.",
    "learn": [
      {
        "title": "Choose a line across a gradient",
        "text": "A transect can examine how a species is distributed across changing conditions, such as from shade into open ground. Position a tape along the gradient, place quadrats at planned regular intervals, and record distance, organism counts and the relevant factor at each station.",
        "scene": "eco2:transect-process:0",
        "processFilm": "eco2-transect"
      },
      {
        "title": "Keep the measurements comparable",
        "text": "Our original tutorial stations 0,2,4,6 m have light levels20,40,60,80 arbitrary instrument units. Three count repeats at each station are 2,3,1;4,5,3;6,7,5;8,9,7. The means are 2,4,6,8 plants per 1 m² quadrat. Use repeated independent transects in real work, a consistent quadrat area and target-species rule.",
        "scene": "eco2:transect-data:1",
        "process": false
      },
      {
        "title": "Plot and interpret a pattern",
        "text": "Plot distance on the horizontal axis and mean plants per quadrat on the vertical axis using an appropriate labelled scale. The supplied abundance rises with distance and light. Because both vary together, the pattern supports an association, not proof that light is the sole cause. Moisture or another factor may also vary.",
        "scene": "eco2:transect-data:2",
        "process": false
      },
      {
        "title": "Plan a testable investigation",
        "text": "A useful hypothesis predicts a relationship between the named factor and distribution. State the sampling interval, area, repeats, factor measurement and what other conditions should be measured or controlled where possible. Evaluate uncertainty, identify improvements and follow field safety and ethical handling. The simulation is preparation for RP9/RP7, not physical practical completion.",
        "scene": "eco2:transect-method:3",
        "process": false
      }
    ],
    "widget": "eco2-transects",
    "prerequisites": [
      "science.biology.ecology.sampling",
      "science.biology.ecology.abiotic"
    ],
    "skills": [
      "WS1.2",
      "MS2c",
      "MS4a",
      "MS2b",
      "MS2d",
      "MS2f",
      "MS4c",
      "WS2.1",
      "WS2.2",
      "WS2.3"
    ],
    "practice": [
      {
        "id": "bio.p-eco2-transects1",
        "prompt": "Why run a transect from shade into open ground?",
        "options": [
          "To investigate distribution along a changing condition",
          "To guarantee every species has the same count",
          "To remove the need to measure the factor"
        ],
        "answer": 0,
        "why": "Choose the line to match the question.",
        "concept": "bio.eco2-transects"
      },
      {
        "id": "bio.p-eco2-transects2",
        "prompt": "What should be recorded at each station?",
        "options": [
          "Only the observer’s favourite plant",
          "Only the final conclusion",
          "Distance, target-species count and relevant factor"
        ],
        "answer": 2,
        "why": "Keep comparable observations at known positions.",
        "concept": "bio.eco2-transects"
      },
      {
        "id": "bio.p-eco2-transects3",
        "prompt": "Three counts 2,3,1 have mean…",
        "options": [
          "3",
          "2",
          "6"
        ],
        "answer": 1,
        "why": "Add6 and divide by 3.",
        "concept": "bio.eco2-transects"
      },
      {
        "id": "bio.p-eco2-transects4",
        "prompt": "Abundance and light both rise along a transect. This alone…",
        "options": [
          "Does not prove light is the sole cause",
          "Proves moisture never matters",
          "Proves distance itself feeds the plants"
        ],
        "answer": 0,
        "why": "Other conditions may covary.",
        "concept": "bio.eco2-transects"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco2-transects1",
        "prompt": "Which plan best investigates a species along a gradient?",
        "options": [
          "Regularly spaced quadrats plus factor measurements",
          "Only the densest patch with no distance",
          "One chosen plant and no environmental measurement"
        ],
        "answer": 0,
        "why": "Systematic stations describe distribution across the gradient.",
        "concept": "bio.eco2-transects"
      },
      {
        "id": "bio.c-eco2-transects2",
        "prompt": "Why keep quadrat area and counting rules consistent?",
        "options": [
          "To force every count to be identical",
          "To guarantee no sampling variation",
          "To make counts comparable"
        ],
        "answer": 2,
        "why": "Standard methods support comparisons.",
        "concept": "bio.eco2-transects"
      },
      {
        "id": "bio.c-eco2-transects3",
        "prompt": "Fresh repeats 5,7,6 give a mean of…",
        "options": [
          "7",
          "6",
          "18"
        ],
        "answer": 1,
        "why": "18 divided by 3 is 6.",
        "concept": "bio.eco2-transects"
      },
      {
        "id": "bio.c-eco2-transects4",
        "prompt": "A distance graph needs…",
        "options": [
          "Labelled distance and abundance axes with suitable scales",
          "No units or labels",
          "Only an unlabelled conclusion"
        ],
        "answer": 0,
        "why": "Axes make the evidence interpretable.",
        "concept": "bio.eco2-transects"
      },
      {
        "id": "bio.c-eco2-transects5",
        "prompt": "What strengthens the investigation?",
        "options": [
          "Assuming one line proves every cause",
          "Ignoring changing moisture",
          "Repeated transects, measured factors and consideration of alternatives"
        ],
        "answer": 2,
        "why": "Replication and contextual measurements improve the evidence.",
        "concept": "bio.eco2-transects"
      },
      {
        "id": "bio.c-eco2-transects6",
        "prompt": "Which is an appropriate fieldwork statement?",
        "options": [
          "Ground hazards and hygiene never matter",
          "Use the school’s site risk assessment and avoid harming organisms",
          "A virtual activity certifies all field skills"
        ],
        "answer": 1,
        "why": "Practical technique, safety and records require physical work.",
        "concept": "bio.eco2-transects"
      }
    ]
  }
];
export const eco2Concepts={"bio.eco2-biotic": "Biotic factors & community change", "bio.eco2-adaptations": "Structural, behavioural & functional adaptations", "bio.eco2-food-chains": "Food chains & predator–prey cycles", "bio.eco2-sampling": "Quadrats & population estimates", "bio.eco2-transects": "Transects, distribution & field evidence"};
