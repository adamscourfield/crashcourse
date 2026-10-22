export const eco6Lessons=[
  {
    "id": "science.biology.ecology.farming",
    "title": "Farming efficiency & ethical trade-offs",
    "short": "Farming efficiency & ethical trade-offs",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.5.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Food animals use energy for movement and maintaining body temperature as well as growth. Reducing movement or controlling the surroundings can reduce some energy transfers, leaving more of a supplied intake available for growth. This is an explanation of a production method, not a claim that restriction is always acceptable or that heating indefinitely improves efficiency.",
    "learn": [
      {
        "title": "Follow energy transferred from food",
        "text": "Food animals use energy for movement and maintaining body temperature as well as growth. Reducing movement or controlling the surroundings can reduce some energy transfers, leaving more of a supplied intake available for growth. This is an explanation of a production method, not a claim that restriction is always acceptable or that heating indefinitely improves efficiency.",
        "scene": "eco6:farming:0",
        "processFilm": "eco6-farming"
      },
      {
        "title": "Compare controlled conditions",
        "text": "Our fictional account starts with 100 energy units. Free movement uses 20 and restricted movement 10; cold surroundings use 30 for thermoregulation and moderate surroundings 15. Another 30 units are allocated to other processes. Retained energy is the remainder:20,30,35 or 45 units across the four combinations. These are original comparisons, not measured animal rates or housing recommendations.",
        "scene": "eco6:farming:1",
        "process": false
      },
      {
        "title": "Connect diet and growth",
        "text": "Some farm animals receive high-protein feed to support growth. Proteins supply amino acids used in making new proteins; protein-rich feed does not remove the need for other nutrients, suitable conditions or animal health. Our energy account holds feed intake fixed, so it does not estimate the additional effect, cost or environmental footprint of a changed diet.",
        "scene": "eco6:farming:2",
        "process": false
      },
      {
        "title": "Evaluate efficiency and welfare",
        "text": "Modern intensive methods can increase output, but evaluation must also consider welfare, movement, disease risk, feed and energy inputs, environmental effects and cost. People can have ethical objections even when a method improves a numerical output. Explain benefits and concerns using the supplied context; an efficiency score cannot settle every ethical decision.",
        "scene": "eco6:farming:3",
        "process": false
      }
    ],
    "widget": "eco6-farming",
    "prerequisites": [
      "science.biology.ecology.food-security",
      "science.biology.ecology.biomass"
    ],
    "skills": [
      "WS1.3",
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-eco6-farming1",
        "prompt": "Reducing movement can increase growth from the same intake by…",
        "options": [
          "Reducing energy transferred through activity",
          "Creating new energy from nothing",
          "Eliminating all respiration"
        ],
        "answer": 0,
        "why": "An energy account must retain the other processes.",
        "concept": "bio.eco6-farming"
      },
      {
        "id": "bio.p-eco6-farming2",
        "prompt": "Controlling surroundings can reduce energy used for…",
        "options": [
          "Replacing every need for feed",
          "Maintaining body temperature",
          "Creating atoms"
        ],
        "answer": 1,
        "why": "Conditions and the animal matter; no unlimited heating rule follows.",
        "concept": "bio.eco6-farming"
      },
      {
        "id": "bio.p-eco6-farming3",
        "prompt": "High-protein feed can support growth because it supplies…",
        "options": [
          "An automatic cure for every disease",
          "Only empty space",
          "Amino acids for protein synthesis"
        ],
        "answer": 2,
        "why": "Growth still depends on a suitable overall diet and conditions.",
        "concept": "bio.eco6-farming"
      },
      {
        "id": "bio.p-eco6-farming4",
        "prompt": "100 intake minus 20 movement,30 thermal and 30 other leaves…",
        "options": [
          "20 units",
          "80 units",
          "0 units"
        ],
        "answer": 0,
        "why": "Subtract all stated allocations from the same intake.",
        "concept": "bio.eco6-farming"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco6-farming1",
        "prompt": "Fresh account:120 intake,25 activity,35 thermal,40 other. Retained is…",
        "options": [
          "220 units",
          "20 units",
          "100 units"
        ],
        "answer": 1,
        "why": "120−25−35−40=20.",
        "concept": "bio.eco6-farming"
      },
      {
        "id": "bio.c-eco6-farming2",
        "prompt": "A higher output score proves a method is ethically best because…",
        "options": [
          "Numbers remove every ethical concern",
          "Animals no longer need suitable conditions",
          "It does not; welfare and competing effects still require evaluation"
        ],
        "answer": 2,
        "why": "Efficiency and ethical acceptability are distinct claims.",
        "concept": "bio.eco6-farming"
      },
      {
        "id": "bio.c-eco6-farming3",
        "prompt": "A fair movement comparison should…",
        "options": [
          "Keep feed and other stated conditions consistent",
          "Change every factor simultaneously without records",
          "Ignore the original intake"
        ],
        "answer": 0,
        "why": "Isolate the intended variable.",
        "concept": "bio.eco6-farming"
      },
      {
        "id": "bio.c-eco6-farming4",
        "prompt": "Which is a relevant concern about severe restriction?",
        "options": [
          "Whether all proteins vanish",
          "Animal welfare and behaviour",
          "Whether energy can be created"
        ],
        "answer": 1,
        "why": "A welfare concern can remain despite higher output.",
        "concept": "bio.eco6-farming"
      },
      {
        "id": "bio.c-eco6-farming5",
        "prompt": "The model moderate temperature is…",
        "options": [
          "A safe prescription for every species",
          "Proof all extra heating helps",
          "A hypothetical condition, not a universal optimum"
        ],
        "answer": 2,
        "why": "Model settings are not actual housing guidance.",
        "concept": "bio.eco6-farming"
      },
      {
        "id": "bio.c-eco6-farming6",
        "prompt": "Evaluation of intensive farming should compare…",
        "options": [
          "Production benefits, welfare and resource/environmental costs",
          "Only one output number",
          "Only the name of the method"
        ],
        "answer": 0,
        "why": "Use evidence and acknowledge competing pressures.",
        "concept": "bio.eco6-farming"
      }
    ]
  },
  {
    "id": "science.biology.ecology.fisheries",
    "title": "Sustainable fisheries",
    "short": "Sustainable fisheries",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.5.3"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Fish stocks in many ocean fisheries have declined. Overfishing can reduce stocks until too few breeding fish remain. Continuing breeding is important for maintaining populations, and a species may disappear from a local area even while it exists elsewhere. Sustainable management aims to support future stocks and catches, not simply maximise the present catch.",
    "learn": [
      {
        "title": "Keep enough fish to reproduce",
        "text": "Fish stocks in many ocean fisheries have declined. Overfishing can reduce stocks until too few breeding fish remain. Continuing breeding is important for maintaining populations, and a species may disappear from a local area even while it exists elsewhere. Sustainable management aims to support future stocks and catches, not simply maximise the present catch.",
        "scene": "eco6:fisheries:0",
        "process": false
      },
      {
        "title": "Use mesh size and catch limits differently",
        "text": "A suitable larger mesh can allow smaller juvenile fish to escape, giving them a chance to grow and breed. Quotas restrict the permitted catch. Mesh size changes which fish are caught; a quota controls how much catch is allowed. Neither alone guarantees recovery, because compliance, species biology, bycatch and environmental conditions also matter.",
        "scene": "eco6:fisheries:1",
        "processFilm": "eco6-fisheries"
      },
      {
        "title": "Test an explicit one-cycle stock account",
        "text": "Our toy stock starts with 40 juveniles and 60 adults. The chosen adult catch is 20 or 60. Small mesh adds 10 juvenile bycatch outside that adult target; large mesh adds none. After the catch, new juveniles equal half the remaining adults in this fictional step. Add survivors and recruits to get the next total. This is not a real quota rule or a calibrated stock forecast.",
        "scene": "eco6:fisheries:2",
        "process": false
      },
      {
        "title": "Evaluate long-term evidence",
        "text": "With adult catch 20, next totals are 90 with small mesh and 100 with large mesh. Catch 60 leaves no breeding adults: next totals 30 or 40, even though some juveniles remain. The model omits maturation, immigration, natural deaths and density dependence. Longer-term survey data and reproductive biology are needed; a one-cycle total is not proof of permanent sustainability.",
        "scene": "eco6:fisheries:3",
        "process": false
      }
    ],
    "widget": "eco6-fisheries",
    "prerequisites": [
      "science.biology.ecology.food-security"
    ],
    "skills": [
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-eco6-fisheries1",
        "prompt": "Why retain breeding fish?",
        "options": [
          "So reproduction can help replenish stocks",
          "To guarantee an unlimited catch instantly",
          "Because no fish ever die naturally"
        ],
        "answer": 0,
        "why": "Recruitment depends on surviving breeding populations and conditions.",
        "concept": "bio.eco6-fisheries"
      },
      {
        "id": "bio.p-eco6-fisheries2",
        "prompt": "A suitable larger mesh can help by…",
        "options": [
          "Eliminating all environmental effects",
          "Allowing smaller juveniles to escape",
          "Catching every juvenile first"
        ],
        "answer": 1,
        "why": "Size selectivity can protect future breeders.",
        "concept": "bio.eco6-fisheries"
      },
      {
        "id": "bio.p-eco6-fisheries3",
        "prompt": "A quota primarily limits…",
        "options": [
          "Only the colour of fish",
          "Every fish’s exact growth rate",
          "The permitted catch"
        ],
        "answer": 2,
        "why": "Catch limits differ from mesh selectivity.",
        "concept": "bio.eco6-fisheries"
      },
      {
        "id": "bio.p-eco6-fisheries4",
        "prompt": "Model:60 adults,20 caught, recruits half the 40 survivors. Recruits are…",
        "options": [
          "20",
          "40",
          "80"
        ],
        "answer": 0,
        "why": "Apply the stated fictional reproduction rule to surviving adults.",
        "concept": "bio.eco6-fisheries"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco6-fisheries1",
        "prompt": "Fresh stock:80 adults,30 caught, recruits 40% of survivors. Recruits are…",
        "options": [
          "50",
          "20",
          "32"
        ],
        "answer": 1,
        "why": "50 survive;0.4×50=20.",
        "concept": "bio.eco6-fisheries"
      },
      {
        "id": "bio.c-eco6-fisheries2",
        "prompt": "Local disappearance means…",
        "options": [
          "Automatically extinct worldwide",
          "All other habitats have identical stocks",
          "Absent from an area, not necessarily globally extinct"
        ],
        "answer": 2,
        "why": "Keep local and global claims distinct.",
        "concept": "bio.eco6-fisheries"
      },
      {
        "id": "bio.c-eco6-fisheries3",
        "prompt": "Which response best supports future breeding?",
        "options": [
          "Evaluate catch limits and suitable mesh using stock data",
          "Always remove every adult",
          "Assume all catches are harmless"
        ],
        "answer": 0,
        "why": "Use population evidence and reproductive needs.",
        "concept": "bio.eco6-fisheries"
      },
      {
        "id": "bio.c-eco6-fisheries4",
        "prompt": "No adults remain in this one-cycle model. Recruitment is…",
        "options": [
          "A measured forecast for every ocean",
          "Zero under its stated rule",
          "Automatically infinite"
        ],
        "answer": 1,
        "why": "This follows the toy rule, not a universal real-world rate.",
        "concept": "bio.eco6-fisheries"
      },
      {
        "id": "bio.c-eco6-fisheries5",
        "prompt": "Why monitor stocks after introducing controls?",
        "options": [
          "Because a quota guarantees recovery without evidence",
          "To avoid recording any uncertainty",
          "To assess outcomes and adjust management"
        ],
        "answer": 2,
        "why": "Species and conditions vary over time.",
        "concept": "bio.eco6-fisheries"
      },
      {
        "id": "bio.c-eco6-fisheries6",
        "prompt": "The extra 10 juvenile bycatch is…",
        "options": [
          "An explicit fictional account assumption",
          "A legal allowance for every fishery",
          "An exact natural law"
        ],
        "answer": 0,
        "why": "Do not turn classroom assumptions into policy or predictions.",
        "concept": "bio.eco6-fisheries"
      }
    ]
  },
  {
    "id": "science.biology.ecology.biotechnology",
    "title": "Mycoprotein, insulin & GM food crops",
    "short": "Mycoprotein, insulin & GM food crops",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.5.4"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Large quantities of microorganisms can be cultured for food. Fusarium is a fungus used to produce mycoprotein, a protein-rich food suitable for vegetarians. In the GCSE account it grows on glucose syrup with oxygen available. The biomass is harvested and purified; the glucose feed is not itself the final protein-rich product.",
    "learn": [
      {
        "title": "Grow fungal biomass as food",
        "text": "Large quantities of microorganisms can be cultured for food. Fusarium is a fungus used to produce mycoprotein, a protein-rich food suitable for vegetarians. In the GCSE account it grows on glucose syrup with oxygen available. The biomass is harvested and purified; the glucose feed is not itself the final protein-rich product.",
        "scene": "eco6:biotechnology:0",
        "processFilm": "eco6-biotechnology"
      },
      {
        "title": "Trace controlled aerobic production",
        "text": "Our conceptual vessel supplies glucose and oxygen, supports fungal biomass growth, then sends biomass for harvesting and purification. The control model uses 20 or 40 glucose units with or without supplied oxygen. Illustrative aerobic harvest is 10 or 20 product units when oxygen is available and 0 in the no-oxygen version of this process. These are fictional output units, not a mass-balanced chemical yield or a universal rule about fungal survival.",
        "scene": "eco6:biotechnology:1",
        "processFilm": "eco6-biotechnology"
      },
      {
        "title": "Distinguish an insulin-producing bacterium",
        "text": "A genetically modified bacterium can produce human insulin. Insulin is harvested and purified and is used in treating diabetes. This is a different organism and product from fungal mycoprotein. Growing more bacteria does not replace product identity, purification and quality requirements; our film is a conceptual production route, not a medical or home-culture procedure.",
        "scene": "eco6:biotechnology:2",
        "processFilm": "eco6-insulin"
      },
      {
        "title": "Evaluate agricultural biotechnology",
        "text": "GM crops may help food supply through greater production or improved nutritional value; golden rice is a named example of nutritional improvement. The benefit depends on the trait and context, and a nutritional change is not proof of greater yield in every setting. Evaluate the supplied evidence, access, environmental effects and other constraints rather than treating all GM products as identical.",
        "scene": "eco6:biotechnology:3",
        "process": false
      }
    ],
    "widget": "eco6-biotechnology",
    "prerequisites": [
      "science.biology.ecology.food-security"
    ],
    "skills": [
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-eco6-biotechnology1",
        "prompt": "Fusarium used for mycoprotein is a…",
        "options": [
          "Fungus",
          "Genetically modified human organ",
          "Photosynthetic rice seed"
        ],
        "answer": 0,
        "why": "Distinguish the organism from its food product.",
        "concept": "bio.eco6-biotechnology"
      },
      {
        "id": "bio.p-eco6-biotechnology2",
        "prompt": "Its GCSE production conditions include…",
        "options": [
          "Only pure insulin as its food",
          "Glucose syrup and aerobic conditions",
          "No carbon source and no metabolism"
        ],
        "answer": 1,
        "why": "Oxygen is supplied for this aerobic process.",
        "concept": "bio.eco6-biotechnology"
      },
      {
        "id": "bio.p-eco6-biotechnology3",
        "prompt": "After fungal biomass grows it is…",
        "options": [
          "Automatically identical to every medicine",
          "Ignored while only the air is packaged",
          "Harvested and purified"
        ],
        "answer": 2,
        "why": "The biomass is processed into the food product.",
        "concept": "bio.eco6-biotechnology"
      },
      {
        "id": "bio.p-eco6-biotechnology4",
        "prompt": "Human insulin can be produced by…",
        "options": [
          "A genetically modified bacterium",
          "Every unmodified plant automatically",
          "Only the mycoprotein product itself"
        ],
        "answer": 0,
        "why": "The organism and product differ from Fusarium/mycoprotein.",
        "concept": "bio.eco6-biotechnology"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco6-biotechnology1",
        "prompt": "Fresh fictional harvest:30 product units from 60 supplied units. Output/input is…",
        "options": [
          "30",
          "0.5",
          "2"
        ],
        "answer": 1,
        "why": "30÷60=0.5; this ratio alone is not a complete mass balance.",
        "concept": "bio.eco6-biotechnology"
      },
      {
        "id": "bio.c-eco6-biotechnology2",
        "prompt": "Mycoprotein is described here as…",
        "options": [
          "A purified human hormone",
          "A type of fishing quota",
          "A protein-rich food suitable for vegetarians"
        ],
        "answer": 2,
        "why": "Use the specified product role.",
        "concept": "bio.eco6-biotechnology"
      },
      {
        "id": "bio.c-eco6-biotechnology3",
        "prompt": "Why is insulin purification part of the route?",
        "options": [
          "Growing cells and obtaining the required product are different steps",
          "Every growing culture is already a ready-to-use medicine",
          "Product identity never matters"
        ],
        "answer": 0,
        "why": "The model does not provide medical preparation instructions.",
        "concept": "bio.eco6-biotechnology"
      },
      {
        "id": "bio.c-eco6-biotechnology4",
        "prompt": "Golden rice is an example used for…",
        "options": [
          "Producing all animal insulin without genes",
          "Potentially improved nutritional value",
          "Proof every GM crop has identical yield"
        ],
        "answer": 1,
        "why": "Evaluate the named trait and actual evidence.",
        "concept": "bio.eco6-biotechnology"
      },
      {
        "id": "bio.c-eco6-biotechnology5",
        "prompt": "No oxygen gives 0 in our aerobic-output model. This establishes…",
        "options": [
          "That every fungus instantly dies without oxygen",
          "A real universal yield law",
          "Only the model process output under that assumption"
        ],
        "answer": 2,
        "why": "Do not extend a process assumption beyond its scope.",
        "concept": "bio.eco6-biotechnology"
      },
      {
        "id": "bio.c-eco6-biotechnology6",
        "prompt": "A balanced GM-crop evaluation uses…",
        "options": [
          "Trait-specific evidence, benefits and constraints",
          "Only the label GM",
          "A guarantee that access and environment never matter"
        ],
        "answer": 0,
        "why": "Different organisms and traits address different problems.",
        "concept": "bio.eco6-biotechnology"
      }
    ]
  }
];
export const eco6Concepts={"bio.eco6-farming": "Farming efficiency & ethical trade-offs", "bio.eco6-fisheries": "Sustainable fisheries", "bio.eco6-biotechnology": "Mycoprotein, insulin & GM food crops"};
