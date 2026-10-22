export const eco5Lessons=[
  {
    "id": "science.biology.ecology.conservation",
    "title": "Maintaining biodiversity & evaluating action",
    "short": "Maintaining biodiversity & evaluating action",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.3.6"
    ],
    "combinedRefs": [
      "7.3.6"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Conservation responds to particular pressures. Breeding programmes can support endangered species, but successful release also needs suitable habitat. Protecting and regenerating (restoring) rare habitats can support many dependent species. Cutting habitat without considering those dependencies is a negative interaction; restoration is a possible positive one, not guaranteed instant recovery.",
    "learn": [
      {
        "title": "Match action to the pressure",
        "text": "Conservation responds to particular pressures. Breeding programmes can support endangered species, but successful release also needs suitable habitat. Protecting and regenerating (restoring) rare habitats can support many dependent species. Cutting habitat without considering those dependencies is a negative interaction; restoration is a possible positive one, not guaranteed instant recovery.",
        "scene": "eco5:conservation:0",
        "process": false
      },
      {
        "title": "Connect farms and wider action",
        "text": "Field margins and hedgerows can provide habitat alongside a crop grown in a monoculture. Governments can act to reduce deforestation and carbon dioxide emissions. Recycling resources can reduce the amount dumped in landfill. Compare the pathway each intervention addresses rather than assuming that one action solves every environmental problem.",
        "scene": "eco5:conservation:1",
        "process": false
      },
      {
        "title": "Build a bounded plan",
        "text": "Our fictional plan has 10 credits. Margins cost 6 credits and provide 4 hectares of habitat; recycling costs 4 and diverts 20 tonnes of waste; a breeding programme costs 5 but does not meet those two land/waste targets. Choose within the budget while meeting both explicit targets. These supplied costs and outcomes are not real conservation estimates or a universal ranking of programmes.",
        "scene": "eco5:conservation:2",
        "process": false
      },
      {
        "title": "Evaluate competing pressures",
        "text": "Land, money and resources have alternative uses, including food production and livelihoods. Explain benefits, costs, evidence and limitations before recommending an action. A plan meeting a stated target is not proof that every species survives. Monitor outcomes and revise decisions; numerical criteria support, rather than replace, ecological and ethical evaluation.",
        "scene": "eco5:conservation:3",
        "process": false
      }
    ],
    "widget": "eco5-conservation",
    "prerequisites": [
      "science.biology.ecology.biodiversity"
    ],
    "skills": [
      "WS1.4",
      "WS1.5"
    ],
    "practice": [
      {
        "id": "bio.p-eco5-conservation1",
        "prompt": "Which action directly supports endangered-species numbers?",
        "options": [
          "A suitable breeding programme",
          "Removing all remaining habitat",
          "Increasing unmanaged pollution"
        ],
        "answer": 0,
        "why": "Breeding can help, while habitat and genetic/management needs still matter.",
        "concept": "bio.eco5-conservation"
      },
      {
        "id": "bio.p-eco5-conservation2",
        "prompt": "Why restore field margins and hedgerows?",
        "options": [
          "To make habitat unnecessary",
          "To provide habitat within farmed landscapes",
          "To guarantee every pest disappears"
        ],
        "answer": 1,
        "why": "Consider dependencies and land-use trade-offs.",
        "concept": "bio.eco5-conservation"
      },
      {
        "id": "bio.p-eco5-conservation3",
        "prompt": "Which action addresses landfill pressure?",
        "options": [
          "Dumping the same resources elsewhere unchecked",
          "Calling every waste harmless",
          "Recycling suitable resources"
        ],
        "answer": 2,
        "why": "Recycling can reduce disposal demand.",
        "concept": "bio.eco5-conservation"
      },
      {
        "id": "bio.p-eco5-conservation4",
        "prompt": "A 10-credit plan buys margins 6 and recycling 4. Cost is…",
        "options": [
          "10 credits",
          "2 credits",
          "24 credits"
        ],
        "answer": 0,
        "why": "Add costs measured in the same units.",
        "concept": "bio.eco5-conservation"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco5-conservation1",
        "prompt": "Fresh budget 12: habitat project 7 and recycling 4 cost…",
        "options": [
          "11 credits, above budget",
          "11 credits, within budget",
          "13 credits, within budget"
        ],
        "answer": 1,
        "why": "7+4=11, leaving 1 credit.",
        "concept": "bio.eco5-conservation"
      },
      {
        "id": "bio.c-eco5-conservation2",
        "prompt": "Breeding alone does not guarantee successful release because…",
        "options": [
          "Every released organism is independent of its habitat",
          "No organism needs food",
          "Suitable habitat and other conditions still matter"
        ],
        "answer": 2,
        "why": "Evaluate the whole context.",
        "concept": "bio.eco5-conservation"
      },
      {
        "id": "bio.c-eco5-conservation3",
        "prompt": "Which government actions can support biodiversity?",
        "options": [
          "Reduce deforestation and CO₂ emissions",
          "Increase all habitat destruction",
          "Ignore all environmental evidence"
        ],
        "answer": 0,
        "why": "Different pressures need corresponding responses.",
        "concept": "bio.eco5-conservation"
      },
      {
        "id": "bio.c-eco5-conservation4",
        "prompt": "Regenerating a rare habitat can…",
        "options": [
          "Eliminate every competing land demand",
          "Support species depending on that habitat",
          "Instantly recreate all lost populations"
        ],
        "answer": 1,
        "why": "Potential benefit is not guaranteed complete recovery.",
        "concept": "bio.eco5-conservation"
      },
      {
        "id": "bio.c-eco5-conservation5",
        "prompt": "An evaluation of margins should consider…",
        "options": [
          "Only whether the name sounds positive",
          "No evidence about outcomes",
          "Habitat benefits and land/production costs"
        ],
        "answer": 2,
        "why": "Use both benefits and competing pressures.",
        "concept": "bio.eco5-conservation"
      },
      {
        "id": "bio.c-eco5-conservation6",
        "prompt": "A plan meets its waste target. This proves…",
        "options": [
          "That it meets that supplied target",
          "That all biodiversity is restored",
          "That monitoring is unnecessary"
        ],
        "answer": 0,
        "why": "A numerical target has a defined scope.",
        "concept": "bio.eco5-conservation"
      }
    ]
  },
  {
    "id": "science.biology.ecology.trophic",
    "title": "Trophic levels & decomposer nutrition",
    "short": "Trophic levels & decomposer nutrition",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.4.1"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Trophic level 1 contains producers such as plants and algae, which make organic food molecules. Herbivores eating producers are primary consumers at level 2. Carnivores eating them are secondary consumers at level 3; carnivores eating secondary consumers are tertiary consumers at level 4. The number describes feeding position, not an organism count.",
    "learn": [
      {
        "title": "Number positions in a food chain",
        "text": "Trophic level 1 contains producers such as plants and algae, which make organic food molecules. Herbivores eating producers are primary consumers at level 2. Carnivores eating them are secondary consumers at level 3; carnivores eating secondary consumers are tertiary consumers at level 4. The number describes feeding position, not an organism count.",
        "scene": "eco5:trophic:0",
        "processFilm": "eco5-feeding"
      },
      {
        "title": "Use the supplied feeding route",
        "text": "In our original grass→grasshopper→frog→hawk chain, arrows point from food towards its consumer. The hawk is level 4 and has no predator shown, so it is the apex predator in this supplied chain. Apex means no predators in the stated context, not a universal requirement to occupy exactly level 4. A species eating at different positions can occupy different trophic levels.",
        "scene": "eco5:trophic:1",
        "process": false
      },
      {
        "title": "Follow extracellular digestion",
        "text": "Decomposers break down dead plant and animal material. They secrete enzymes into their surroundings; these enzymes digest large food molecules into small soluble molecules outside the microorganism. The soluble products can then diffuse into the microorganism. The enzyme marker is distinct from the food-product marker; this is not engulfing an intact leaf.",
        "scene": "eco5:trophic:2",
        "processFilm": "eco5-decomposer"
      },
      {
        "title": "Keep roles and limits clear",
        "text": "Decomposers can receive material from several trophic levels, so they do not belong only after an apex predator in one linear chain. An arrow diagram omits many food-web links and does not show an exact feeding rate. Use what each organism eats in the given route to identify its role, and explain decomposer nutrition separately.",
        "scene": "eco5:trophic:3",
        "process": false
      }
    ],
    "widget": "eco5-trophic",
    "prerequisites": [
      "science.biology.ecology.food-chains"
    ],
    "skills": [
      "WS1.2"
    ],
    "practice": [
      {
        "id": "bio.p-eco5-trophic1",
        "prompt": "Plants and algae that make organic food occupy…",
        "options": [
          "Trophic level 1",
          "Trophic level 4 by definition",
          "Every consumer level only"
        ],
        "answer": 0,
        "why": "Number the producer as the first feeding level.",
        "concept": "bio.eco5-trophic"
      },
      {
        "id": "bio.p-eco5-trophic2",
        "prompt": "A herbivore eating a producer is a…",
        "options": [
          "Tertiary consumer at level 4",
          "Primary consumer at level 2",
          "Producer at level 1"
        ],
        "answer": 1,
        "why": "Follow the supplied feeding relationship.",
        "concept": "bio.eco5-trophic"
      },
      {
        "id": "bio.p-eco5-trophic3",
        "prompt": "Small soluble products enter decomposers after…",
        "options": [
          "An intact leaf diffuses through the cell surface",
          "Enzymes create food atoms from nothing",
          "External enzyme digestion followed by diffusion"
        ],
        "answer": 2,
        "why": "Extracellular digestion precedes uptake.",
        "concept": "bio.eco5-trophic"
      },
      {
        "id": "bio.p-eco5-trophic4",
        "prompt": "In grass→grasshopper→frog→hawk, the hawk is…",
        "options": [
          "A level 4 tertiary consumer in this chain",
          "A level 1 producer",
          "Always level 4 in every possible web"
        ],
        "answer": 0,
        "why": "The role follows this specific route.",
        "concept": "bio.eco5-trophic"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco5-trophic1",
        "prompt": "Fresh chain algae→snail→fish. Fish occupies…",
        "options": [
          "Level 1",
          "Level 3",
          "Level 2"
        ],
        "answer": 1,
        "why": "Algae 1, snail 2, fish 3.",
        "concept": "bio.eco5-trophic"
      },
      {
        "id": "bio.c-eco5-trophic2",
        "prompt": "An apex predator is…",
        "options": [
          "Always any organism at level 1",
          "Always exactly the fifth organism",
          "A carnivore with no predators in the stated context"
        ],
        "answer": 2,
        "why": "The definition is about predators, not a fixed number.",
        "concept": "bio.eco5-trophic"
      },
      {
        "id": "bio.c-eco5-trophic3",
        "prompt": "Where are decomposer enzymes acting in this account?",
        "options": [
          "Outside the microorganism",
          "Only inside an intact leaf swallowed whole",
          "Only in sunlight with no substrate"
        ],
        "answer": 0,
        "why": "Enzymes are secreted into the surroundings.",
        "concept": "bio.eco5-trophic"
      },
      {
        "id": "bio.c-eco5-trophic4",
        "prompt": "Which can diffuse into the decomposer?",
        "options": [
          "Only intact insoluble starch grains",
          "Small soluble digestion products",
          "An entire tree trunk"
        ],
        "answer": 1,
        "why": "Size and solubility matter.",
        "concept": "bio.eco5-trophic"
      },
      {
        "id": "bio.c-eco5-trophic5",
        "prompt": "Food-chain arrows generally point…",
        "options": [
          "From predator to all sunlight",
          "Towards whatever is largest",
          "From food to consumer"
        ],
        "answer": 2,
        "why": "They show the direction of feeding transfer.",
        "concept": "bio.eco5-trophic"
      },
      {
        "id": "bio.c-eco5-trophic6",
        "prompt": "Decomposers can receive dead material from…",
        "options": [
          "Several trophic levels",
          "Only the last predator",
          "Only inorganic rocks as food"
        ],
        "answer": 0,
        "why": "Death and waste occur across the community.",
        "concept": "bio.eco5-trophic"
      }
    ]
  },
  {
    "id": "science.biology.ecology.pyramids",
    "title": "Constructing pyramids of biomass",
    "short": "Constructing pyramids of biomass",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.4.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "A biomass pyramid compares the mass of living material at successive trophic levels. Use comparable measurements, such as grams per square metre from the same habitat and sampling context. The diagram is not a count of individuals, an energy budget or an anatomical drawing of organisms.",
    "learn": [
      {
        "title": "Compare biomass with common units",
        "text": "A biomass pyramid compares the mass of living material at successive trophic levels. Use comparable measurements, such as grams per square metre from the same habitat and sampling context. The diagram is not a count of individuals, an energy budget or an anatomical drawing of organisms.",
        "scene": "eco5:pyramids:0",
        "process": false
      },
      {
        "title": "Build widths to one scale",
        "text": "Place producers at the base, then primary, secondary and tertiary consumers above. Our original masses are 800,160,32 and 6.4 g/m². Use one common linear scale for the bar widths and equal bar heights. A producer width of 400 drawing units means a primary width of 80, secondary 16 and tertiary 3.2; tiny upper bars must not be enlarged without stating a change of scale.",
        "scene": "eco5:pyramids:1",
        "process": false
      },
      {
        "title": "Construct and check the representation",
        "text": "The builder lets you enter all four masses and choose the common reference width. Labels retain units even when an upper bar is narrow. A scale too small for a value clips the display and is flagged rather than silently distorting the bar. Confirm the producer-base orientation and the numerical data before recording.",
        "scene": "eco5:pyramids:2",
        "process": false
      },
      {
        "title": "Interpret the evidence carefully",
        "text": "The primary-to-producer biomass ratio in our example is 160/800=0.2. This is not automatically a species-number ratio: individual organisms differ in mass. A supplied biomass snapshot is not itself a measured energy-transfer rate. Explain what the units and widths represent before comparing levels.",
        "scene": "eco5:pyramids:3",
        "process": false
      }
    ],
    "widget": "eco5-pyramids",
    "prerequisites": [
      "science.biology.ecology.trophic"
    ],
    "skills": [
      "WS1.2",
      "MS2c"
    ],
    "practice": [
      {
        "id": "bio.p-eco5-pyramids1",
        "prompt": "What determines a biomass bar width here?",
        "options": [
          "Biomass at that trophic level using one scale",
          "Only the number of species names",
          "An arbitrary decorative width"
        ],
        "answer": 0,
        "why": "A common scale makes widths quantitatively comparable.",
        "concept": "bio.eco5-pyramids"
      },
      {
        "id": "bio.p-eco5-pyramids2",
        "prompt": "Which level belongs at the base?",
        "options": [
          "The smallest bar regardless of its label",
          "Producers",
          "Tertiary consumers by definition"
        ],
        "answer": 1,
        "why": "Label the feeding level, not just the shape.",
        "concept": "bio.eco5-pyramids"
      },
      {
        "id": "bio.p-eco5-pyramids3",
        "prompt": "Our primary 160 and producer 800 have ratio…",
        "options": [
          "5",
          "640",
          "0.2"
        ],
        "answer": 2,
        "why": "Divide primary biomass by producer biomass.",
        "concept": "bio.eco5-pyramids"
      },
      {
        "id": "bio.p-eco5-pyramids4",
        "prompt": "A tiny upper bar should be…",
        "options": [
          "Kept proportional and labelled",
          "Enlarged secretly until it looks balanced",
          "Assigned the same width as the producer"
        ],
        "answer": 0,
        "why": "Do not distort a common linear scale.",
        "concept": "bio.eco5-pyramids"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco5-pyramids1",
        "prompt": "Fresh data: producer 600, primary 120 g/m². Ratio primary/producer is…",
        "options": [
          "480",
          "0.2",
          "5"
        ],
        "answer": 1,
        "why": "120/600=0.2.",
        "concept": "bio.eco5-pyramids"
      },
      {
        "id": "bio.c-eco5-pyramids2",
        "prompt": "Which units allow a consistent biomass comparison?",
        "options": [
          "Grams for one level and organism count for another",
          "Degrees Celsius for every level",
          "g/m² for each level in the same context"
        ],
        "answer": 2,
        "why": "Compare like quantities.",
        "concept": "bio.eco5-pyramids"
      },
      {
        "id": "bio.c-eco5-pyramids3",
        "prompt": "A biomass pyramid directly measures…",
        "options": [
          "Mass of living material at feeding levels",
          "Exact species variety",
          "Every organism’s movement speed"
        ],
        "answer": 0,
        "why": "Do not substitute abundance or a biological rate.",
        "concept": "bio.eco5-pyramids"
      },
      {
        "id": "bio.c-eco5-pyramids4",
        "prompt": "Producer width 300 represents 900 g/m². Width for 90 g/m² is…",
        "options": [
          "300 drawing units",
          "30 drawing units",
          "2700 drawing units"
        ],
        "answer": 1,
        "why": "The same scale gives one tenth of the width.",
        "concept": "bio.eco5-pyramids"
      },
      {
        "id": "bio.c-eco5-pyramids5",
        "prompt": "Why retain a label beside a narrow top bar?",
        "options": [
          "To justify any secret enlargement",
          "To replace the mass with a head count",
          "So its value and unit remain readable"
        ],
        "answer": 2,
        "why": "Labels support exact interpretation.",
        "concept": "bio.eco5-pyramids"
      },
      {
        "id": "bio.c-eco5-pyramids6",
        "prompt": "A biomass ratio implies the same individual-number ratio only if…",
        "options": [
          "Relevant individual masses/context also justify it",
          "All organisms automatically have equal mass",
          "Species names are printed in the same font"
        ],
        "answer": 0,
        "why": "Biomass alone does not determine organism counts.",
        "concept": "bio.eco5-pyramids"
      }
    ]
  },
  {
    "id": "science.biology.ecology.biomass",
    "title": "Biomass transfer & efficiency",
    "short": "Biomass transfer & efficiency",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.4.3"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Producers typically capture only about 1% of incoming light energy for photosynthesis. About 10% of biomass at one trophic level is often transferred to the next in the GCSE account. These are approximate comparisons with different quantities and boundaries: light energy is not measured in grams of biomass, and neither percentage is exact for every ecosystem.",
    "learn": [
      {
        "title": "Keep light energy and biomass distinct",
        "text": "Producers typically capture only about 1% of incoming light energy for photosynthesis. About 10% of biomass at one trophic level is often transferred to the next in the GCSE account. These are approximate comparisons with different quantities and boundaries: light energy is not measured in grams of biomass, and neither percentage is exact for every ecosystem.",
        "scene": "eco5:biomass:0",
        "process": false
      },
      {
        "title": "Follow material not retained as growth",
        "text": "Not all material is eaten or absorbed. Unabsorbed material can leave as faeces. Much absorbed glucose is used in respiration, with carbon dioxide and water leaving the organism; water and urea also leave in urine. Less organic material is retained as new biomass for the next trophic level. Atoms have not disappeared.",
        "scene": "eco5:biomass:1",
        "processFilm": "eco5-transfer"
      },
      {
        "title": "Build an explicit organic-material account",
        "text": "Our fictional consumed 100 organic-material units are allocated as 20 unabsorbed units,70 units of organic substrate used in respiration and 10 retained as new biomass. The bars account for the original organic material, not the total mass of gases/products after oxygen enters. Urinary losses and other routes are omitted from this numerical toy account but remain part of the explanation.",
        "scene": "eco5:biomass:2",
        "processFilm": "eco5-transfer"
      },
      {
        "title": "Calculate transfer efficiency",
        "text": "For a supplied trophic transfer, efficiency=biomass transferred divided by biomass available at the previous level, multiplied by 100%. Original data 1000 g/m²→120 g/m² give 12%, showing the approximate 10% guide is not a compulsory answer. Reduced biomass supply can support fewer organisms at higher levels, but individual mass, food needs and context also affect numbers.",
        "scene": "eco5:biomass:3",
        "process": false
      }
    ],
    "widget": "eco5-biomass",
    "prerequisites": [
      "science.biology.ecology.pyramids"
    ],
    "skills": [
      "MS1c"
    ],
    "practice": [
      {
        "id": "bio.p-eco5-biomass1",
        "prompt": "The approximate 1% statement refers to…",
        "options": [
          "Incident light energy captured for photosynthesis",
          "Every organism’s biomass transfer exactly",
          "The fraction of species alive"
        ],
        "answer": 0,
        "why": "Energy and biomass are different quantities.",
        "concept": "bio.eco5-biomass"
      },
      {
        "id": "bio.p-eco5-biomass2",
        "prompt": "Which route removes unabsorbed material?",
        "options": [
          "Atoms vanishing",
          "Egestion as faeces",
          "Photosynthesis in every animal"
        ],
        "answer": 1,
        "why": "Do not confuse egestion with absorbed substrate used in respiration.",
        "concept": "bio.eco5-biomass"
      },
      {
        "id": "bio.p-eco5-biomass3",
        "prompt": "1000→120 g/m² transfer has efficiency…",
        "options": [
          "120%",
          "0.12%",
          "12%"
        ],
        "answer": 2,
        "why": "120/1000×100=12.",
        "concept": "bio.eco5-biomass"
      },
      {
        "id": "bio.p-eco5-biomass4",
        "prompt": "Why is 10% not the answer to every transfer question?",
        "options": [
          "Use the supplied data;10% is approximate",
          "Every answer must be rounded to 10 regardless",
          "Biomass cannot be measured"
        ],
        "answer": 0,
        "why": "Calculate from the actual numerator and denominator.",
        "concept": "bio.eco5-biomass"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco5-biomass1",
        "prompt": "Fresh biomass transfer 800→96 g/m² has efficiency…",
        "options": [
          "96%",
          "12%",
          "8%"
        ],
        "answer": 1,
        "why": "96/800×100=12.",
        "concept": "bio.eco5-biomass"
      },
      {
        "id": "bio.c-eco5-biomass2",
        "prompt": "Which are respiration products leaving the organism?",
        "options": [
          "Only intact insoluble starch",
          "New carbon atoms from nothing",
          "Carbon dioxide and water"
        ],
        "answer": 2,
        "why": "Organic substrate is used in respiration.",
        "concept": "bio.eco5-biomass"
      },
      {
        "id": "bio.c-eco5-biomass3",
        "prompt": "Which additional urinary losses belong in the full explanation?",
        "options": [
          "Water and urea",
          "Sunlight and glass",
          "Only whole leaves"
        ],
        "answer": 0,
        "why": "The numerical toy account omits routes without denying them.",
        "concept": "bio.eco5-biomass"
      },
      {
        "id": "bio.c-eco5-biomass4",
        "prompt": "A fraction 0.15 transferred is equivalent to…",
        "options": [
          "150%",
          "15%",
          "0.15%"
        ],
        "answer": 1,
        "why": "Multiply the fraction by 100.",
        "concept": "bio.eco5-biomass"
      },
      {
        "id": "bio.c-eco5-biomass5",
        "prompt": "Why can higher trophic levels support fewer organisms?",
        "options": [
          "All higher consumers have identical mass by law",
          "Material is always destroyed at each arrow",
          "Less retained biomass is available, subject to individual needs"
        ],
        "answer": 2,
        "why": "Supply limits matter, with organism-specific qualifications.",
        "concept": "bio.eco5-biomass"
      },
      {
        "id": "bio.c-eco5-biomass6",
        "prompt": "The 100-unit toy account is not a complete gas-mass budget because…",
        "options": [
          "Oxygen entering and product masses are not included",
          "Respiration creates matter",
          "Organic substrate has no atoms"
        ],
        "answer": 0,
        "why": "A stated accounting boundary matters.",
        "concept": "bio.eco5-biomass"
      }
    ]
  },
  {
    "id": "science.biology.ecology.food-security",
    "title": "Food security & population statistics",
    "short": "Food security & population statistics",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.5.1"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Food security means having enough food to feed a population. Total production, losses, access and distribution all matter. Increasing birth rates can raise demand in some countries; changing diets and international transport can redirect scarce resources. A model amount of food does not establish that everybody receives adequate nutrition.",
    "learn": [
      {
        "title": "Compare food with population needs",
        "text": "Food security means having enough food to feed a population. Total production, losses, access and distribution all matter. Increasing birth rates can raise demand in some countries; changing diets and international transport can redirect scarce resources. A model amount of food does not establish that everybody receives adequate nutrition.",
        "scene": "eco5:food-security:0",
        "process": false
      },
      {
        "title": "Trace threats through production and access",
        "text": "New pests and pathogens can damage crops or farm animals. Failed rains and other environmental changes can reduce yields. Agricultural inputs cost money, and conflict can limit access to water, farmland, transport or food. The importance of each factor depends on the supplied context; a single population number cannot explain every food shortage.",
        "scene": "eco5:food-security:1",
        "process": false
      },
      {
        "title": "Test original supply-demand scenarios",
        "text": "Our fictional baseline has 100 people needing 2 food-equivalent units each, with 240 available:40 surplus units. A population of 140 with the same supply needs 280, leaving a 40-unit shortfall. A drought case has 160 available for 100 people, also a 40-unit shortfall. Equal shortfalls can have different causes, so responses should address the actual pressure.",
        "scene": "eco5:food-security:2",
        "process": false
      },
      {
        "title": "Evaluate sustainability and limits",
        "text": "The model also includes pest, input-cost and conflict scenarios. In the conflict example 220 units exist but only 120 are accessible; aggregate production exceeds 200 required, yet access leaves an 80-unit shortfall. These are fictional food-equivalent units, not calorie recommendations. Sustainable provision must consider long-term resources, ecological effects, access and reliable population/production evidence.",
        "scene": "eco5:food-security:3",
        "process": false
      }
    ],
    "widget": "eco5-food-security",
    "prerequisites": [
      "science.biology.ecology.communities"
    ],
    "skills": [
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-eco5-food-security1",
        "prompt": "Food security is about…",
        "options": [
          "Enough food to feed a population",
          "Only the number of tractors",
          "Only maximising one crop without context"
        ],
        "answer": 0,
        "why": "Quantity, access and needs belong in the evaluation.",
        "concept": "bio.eco5-food-security"
      },
      {
        "id": "bio.p-eco5-food-security2",
        "prompt": "Which can threaten production?",
        "options": [
          "Every increase in crop health",
          "Pests, pathogens and failed rains",
          "Only spelling of a crop name"
        ],
        "answer": 1,
        "why": "Trace the biological or environmental mechanism.",
        "concept": "bio.eco5-food-security"
      },
      {
        "id": "bio.p-eco5-food-security3",
        "prompt": "100 people need 2 units each. Demand is…",
        "options": [
          "50 units",
          "102 units",
          "200 units"
        ],
        "answer": 2,
        "why": "Multiply population by the stated per-person requirement.",
        "concept": "bio.eco5-food-security"
      },
      {
        "id": "bio.p-eco5-food-security4",
        "prompt": "Why can enough total production coexist with food insecurity?",
        "options": [
          "Access and distribution can restrict available food",
          "Everybody automatically receives an equal share",
          "Food needs never differ"
        ],
        "answer": 0,
        "why": "Total supply does not establish access or nutrition.",
        "concept": "bio.eco5-food-security"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco5-food-security1",
        "prompt": "Fresh scenario:120 people need 2 units each;210 are available. Shortfall is…",
        "options": [
          "No shortfall",
          "30 units",
          "450 units"
        ],
        "answer": 1,
        "why": "Demand 240 minus available 210 gives 30.",
        "concept": "bio.eco5-food-security"
      },
      {
        "id": "bio.c-eco5-food-security2",
        "prompt": "Rising input costs may threaten security by…",
        "options": [
          "Creating unlimited fertiliser for free",
          "Removing every need for water",
          "Limiting affordable farming resources"
        ],
        "answer": 2,
        "why": "Use the supplied economic-production link.",
        "concept": "bio.eco5-food-security"
      },
      {
        "id": "bio.c-eco5-food-security3",
        "prompt": "Changing diets can matter because…",
        "options": [
          "Demand and transport can redirect scarce food resources",
          "All diets use identical resources everywhere",
          "Transport never changes access"
        ],
        "answer": 0,
        "why": "Evaluate context rather than a universal guarantee.",
        "concept": "bio.eco5-food-security"
      },
      {
        "id": "bio.c-eco5-food-security4",
        "prompt": "Conflict can affect security through…",
        "options": [
          "No possible supply or access pathway",
          "Reduced access to water, farmland or food",
          "An automatic increase in safe supply everywhere"
        ],
        "answer": 1,
        "why": "Trace the actual access constraint.",
        "concept": "bio.eco5-food-security"
      },
      {
        "id": "bio.c-eco5-food-security5",
        "prompt": "Two scenarios have equal shortfalls. They necessarily have…",
        "options": [
          "Identical causes and identical solutions",
          "The same biodiversity",
          "The same numerical deficit, possibly different causes"
        ],
        "answer": 2,
        "why": "Numbers alone do not identify mechanisms.",
        "concept": "bio.eco5-food-security"
      },
      {
        "id": "bio.c-eco5-food-security6",
        "prompt": "A sustainable response should evaluate…",
        "options": [
          "Long-term resources, ecological effects and access",
          "Only the largest first-year output",
          "Only a model score with no limitations"
        ],
        "answer": 0,
        "why": "Use evidence and competing pressures.",
        "concept": "bio.eco5-food-security"
      }
    ]
  }
];
export const eco5Concepts={"bio.eco5-conservation": "Maintaining biodiversity & evaluating action", "bio.eco5-trophic": "Trophic levels & decomposer nutrition", "bio.eco5-pyramids": "Constructing pyramids of biomass", "bio.eco5-biomass": "Biomass transfer & efficiency", "bio.eco5-food-security": "Food security & population statistics"};
