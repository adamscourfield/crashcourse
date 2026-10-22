export const eco4Lessons=[
  {
    "id": "science.biology.ecology.biodiversity",
    "title": "Biodiversity & ecosystem stability",
    "short": "Biodiversity & ecosystem stability",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.3.1"
    ],
    "combinedRefs": [
      "7.3.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Biodiversity describes the range of species in a place or across Earth. A field containing a thousand individuals of one grass species has high abundance but little species variety. Our equal-area samples contain A: four species with four individuals each, and B: one species with sixteen individuals. Equal totals do not mean equal biodiversity.",
    "learn": [
      {
        "title": "Count kinds, not just individuals",
        "text": "Biodiversity describes the range of species in a place or across Earth. A field containing a thousand individuals of one grass species has high abundance but little species variety. Our equal-area samples contain A: four species with four individuals each, and B: one species with sixteen individuals. Equal totals do not mean equal biodiversity.",
        "scene": "eco4:biodiversity:0",
        "process": false
      },
      {
        "title": "Trace alternative dependencies",
        "text": "Species rely on other species for food, shelter, pollination and environmental conditions. In our symbolic web, a bird can feed on either seeds or insects. Removing seeds leaves another route; removing both removes the displayed food supply. More varied dependencies can improve stability, but links alone do not guarantee that sufficient food remains.",
        "scene": "eco4:biodiversity:1",
        "process": false
      },
      {
        "title": "Connect biodiversity and people",
        "text": "People depend on ecosystems for food production, pollination and other services. Habitat damage and pollution can remove species and disrupt these dependencies. Protecting variety supports the conditions human societies need. A head count of one plentiful species cannot establish that an ecosystem is healthy.",
        "scene": "eco4:biodiversity:2",
        "process": false
      },
      {
        "title": "Evaluate the evidence",
        "text": "Compare habitats using consistent area, season, identification and sampling effort. Four detected species versus one supports a difference in the supplied samples, not a complete inventory of all life. Repeated representative samples help assess reliability. Stability is resistance to disruption, not a promise that every population stays exactly constant.",
        "scene": "eco4:biodiversity:3",
        "process": false
      }
    ],
    "widget": "eco4-biodiversity",
    "prerequisites": [
      "science.biology.ecology.communities"
    ],
    "skills": [
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-eco4-biodiversity1",
        "prompt": "A sample contains 40 beetles of one species. What is its recorded species variety?",
        "options": [
          "One species",
          "Forty species",
          "Forty ecosystems"
        ],
        "answer": 0,
        "why": "Individuals and species are different counting units.",
        "concept": "bio.eco4-biodiversity"
      },
      {
        "id": "bio.p-eco4-biodiversity2",
        "prompt": "A bird loses one food source but has another. What is justified?",
        "options": [
          "Food no longer matters",
          "An alternative route may reduce dependence",
          "Survival is guaranteed"
        ],
        "answer": 1,
        "why": "Availability and nutritional needs still matter.",
        "concept": "bio.eco4-biodiversity"
      },
      {
        "id": "bio.p-eco4-biodiversity3",
        "prompt": "Why does biodiversity matter to people?",
        "options": [
          "People live outside all ecosystems",
          "Only colourful animals matter",
          "People depend on ecosystem services"
        ],
        "answer": 2,
        "why": "Food production and pollination connect ecosystems to human life.",
        "concept": "bio.eco4-biodiversity"
      },
      {
        "id": "bio.p-eco4-biodiversity4",
        "prompt": "Two samples each contain 16 individuals; one has four species and one has one. Which has greater recorded variety?",
        "options": [
          "The four-species sample",
          "Both must be identical",
          "The one-species sample"
        ],
        "answer": 0,
        "why": "Equal abundance does not imply equal species variety.",
        "concept": "bio.eco4-biodiversity"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco4-biodiversity1",
        "prompt": "Fresh sample: 8 snails, 5 bees and 7 daisies, each a different species. How many species are recorded?",
        "options": [
          "8",
          "3",
          "20"
        ],
        "answer": 1,
        "why": "Count the three named species, not their individuals.",
        "concept": "bio.eco4-biodiversity"
      },
      {
        "id": "bio.c-eco4-biodiversity2",
        "prompt": "Which comparison better controls sampling effort?",
        "options": [
          "One large plot versus one tiny plot without adjustment",
          "Counting only the most visible animals",
          "Equal areas sampled using consistent methods"
        ],
        "answer": 2,
        "why": "Use comparable sampling before interpreting differences.",
        "concept": "bio.eco4-biodiversity"
      },
      {
        "id": "bio.c-eco4-biodiversity3",
        "prompt": "A web shows two alternative prey. Removing one proves…",
        "options": [
          "Only that a displayed alternative remains",
          "The predator can never decline",
          "The removed prey was unnecessary to every species"
        ],
        "answer": 0,
        "why": "A diagram is not a measured food budget.",
        "concept": "bio.eco4-biodiversity"
      },
      {
        "id": "bio.c-eco4-biodiversity4",
        "prompt": "A habitat has many plants of a single species. It necessarily has…",
        "options": [
          "No dependence between organisms",
          "High abundance of that species",
          "High variety of plant species"
        ],
        "answer": 1,
        "why": "Abundance alone does not establish diversity.",
        "concept": "bio.eco4-biodiversity"
      },
      {
        "id": "bio.c-eco4-biodiversity5",
        "prompt": "Loss of pollinators can affect people by…",
        "options": [
          "Creating unlimited crop yields",
          "Removing every need for food",
          "Reducing reproduction of dependent crop plants"
        ],
        "answer": 2,
        "why": "Use the dependency rather than a claim about every crop.",
        "concept": "bio.eco4-biodiversity"
      },
      {
        "id": "bio.c-eco4-biodiversity6",
        "prompt": "One small sample finds no species X. A careful conclusion is…",
        "options": [
          "X was not detected in that sample",
          "X is extinct worldwide",
          "All habitats contain the same species"
        ],
        "answer": 0,
        "why": "Detection limits and wider sampling matter.",
        "concept": "bio.eco4-biodiversity"
      }
    ]
  },
  {
    "id": "science.biology.ecology.waste",
    "title": "Waste, pollution & human population",
    "short": "Waste, pollution & human population",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.3.2"
    ],
    "combinedRefs": [
      "7.3.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A growing human population and higher consumption can increase resource use and waste. Environmental damage depends on the material, where it goes and how it is handled. Treatment and containment can reduce exposure; waste does not become harmless just because it leaves a house or factory.",
    "learn": [
      {
        "title": "Connect demand and waste",
        "text": "A growing human population and higher consumption can increase resource use and waste. Environmental damage depends on the material, where it goes and how it is handled. Treatment and containment can reduce exposure; waste does not become harmless just because it leaves a house or factory.",
        "scene": "eco4:waste:0",
        "processFilm": "eco4-waste"
      },
      {
        "title": "Follow pollutants through water",
        "text": "Sewage, fertiliser runoff and toxic chemicals can pollute water. In one possible pathway, added nutrients support algal growth; decay of dead material uses dissolved oxygen and can harm aquatic animals. This is an explanatory example, not a rule that every discharge has identical effects or that fertiliser is itself dissolved oxygen.",
        "scene": "eco4:waste:1",
        "processFilm": "eco4-waste"
      },
      {
        "title": "Separate air and land routes",
        "text": "Smoke and acidic gases can pollute air. Landfill occupies land, and toxic chemicals can contaminate land. The substance and exposure determine the damage: carbon dioxide warming is a different mechanism from harm caused by acidic gases. Pollutants can move between media, so categories help trace routes rather than creating sealed compartments.",
        "scene": "eco4:waste:2",
        "process": false
      },
      {
        "title": "Use evidence to evaluate handling",
        "text": "An original treatment example reduces a water pollutant from 60 to 15 model units: a reduction of 45, or 75% of the starting amount. This measures the supplied indicator, not all ecological recovery. Killing plants or animals can lower biodiversity, while a single pollutant reading alone does not count species.",
        "scene": "eco4:waste:3",
        "process": false
      }
    ],
    "widget": "eco4-waste",
    "prerequisites": [
      "science.biology.ecology.communities"
    ],
    "skills": [
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-eco4-waste1",
        "prompt": "Which pair can increase resource use and waste?",
        "options": [
          "Population growth and increased consumption",
          "Only the colour of bins",
          "Fewer people always using fewer resources per person"
        ],
        "answer": 0,
        "why": "Both population and consumption per person affect total pressure.",
        "concept": "bio.eco4-waste"
      },
      {
        "id": "bio.p-eco4-waste2",
        "prompt": "Which belongs to the water-pollution examples?",
        "options": [
          "Only harmless sunlight",
          "Sewage, fertiliser and toxic chemicals",
          "Only clean rainwater"
        ],
        "answer": 1,
        "why": "Follow the source and route.",
        "concept": "bio.eco4-waste"
      },
      {
        "id": "bio.p-eco4-waste3",
        "prompt": "Which pair identifies air pollutants here?",
        "options": [
          "Only mineral ions in roots",
          "Only sea salt locked in rock",
          "Smoke and acidic gases"
        ],
        "answer": 2,
        "why": "Do not substitute a different environmental mechanism.",
        "concept": "bio.eco4-waste"
      },
      {
        "id": "bio.p-eco4-waste4",
        "prompt": "Treatment lowers 60 units to 15. How many units are removed?",
        "options": [
          "45",
          "75",
          "15"
        ],
        "answer": 0,
        "why": "Subtract the final reading from the initial reading.",
        "concept": "bio.eco4-waste"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco4-waste1",
        "prompt": "Fresh treatment reduces 80 units to 20. What percentage is removed?",
        "options": [
          "60%",
          "75%",
          "25%"
        ],
        "answer": 1,
        "why": "60 removed divided by 80 initially gives 75%.",
        "concept": "bio.eco4-waste"
      },
      {
        "id": "bio.c-eco4-waste2",
        "prompt": "Why can nutrient pollution reduce aquatic animal survival?",
        "options": [
          "Fertiliser is always an animal poison by definition",
          "Algae permanently remove the need for oxygen",
          "Decay can use dissolved oxygen"
        ],
        "answer": 2,
        "why": "A possible indirect chain involves growth, death, decomposition and oxygen use.",
        "concept": "bio.eco4-waste"
      },
      {
        "id": "bio.c-eco4-waste3",
        "prompt": "Which is a land-pollution example?",
        "options": [
          "Toxic waste entering soil",
          "Photosynthesis in a leaf",
          "Condensation of clean vapour"
        ],
        "answer": 0,
        "why": "Use the stated contaminated medium.",
        "concept": "bio.eco4-waste"
      },
      {
        "id": "bio.c-eco4-waste4",
        "prompt": "A lower pollutant reading proves…",
        "options": [
          "No other pollutant exists",
          "A decrease in that measured pollutant",
          "Complete recovery of every species"
        ],
        "answer": 1,
        "why": "The observation has a defined scope.",
        "concept": "bio.eco4-waste"
      },
      {
        "id": "bio.c-eco4-waste5",
        "prompt": "Pollution may reduce biodiversity when it…",
        "options": [
          "Automatically creates new species instantly",
          "Makes all habitats identical in temperature",
          "Kills species or damages their habitat"
        ],
        "answer": 2,
        "why": "Connect exposure to organisms and habitat.",
        "concept": "bio.eco4-waste"
      },
      {
        "id": "bio.c-eco4-waste6",
        "prompt": "Which is the better prevention principle?",
        "options": [
          "Appropriate treatment and safe containment",
          "Move waste out of sight without assessing its route",
          "Dilution guarantees zero harm at any amount"
        ],
        "answer": 0,
        "why": "Handling changes exposure; moving waste is not proof of safety.",
        "concept": "bio.eco4-waste"
      }
    ]
  },
  {
    "id": "science.biology.ecology.land-peat",
    "title": "Land use & peatland trade-offs",
    "short": "Land use & peatland trade-offs",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.3.3"
    ],
    "combinedRefs": [
      "7.3.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Building, quarrying, farming and waste disposal can replace habitats used by other species. In our fictional 100-hectare area, developed land occupies 30 hectares, leaving 70 hectares of the original habitat. Area alone does not measure habitat quality, connectivity or the number of surviving species.",
    "learn": [
      {
        "title": "Account for habitat space",
        "text": "Building, quarrying, farming and waste disposal can replace habitats used by other species. In our fictional 100-hectare area, developed land occupies 30 hectares, leaving 70 hectares of the original habitat. Area alone does not measure habitat quality, connectivity or the number of surviving species.",
        "scene": "eco4:land-peat:0",
        "process": false
      },
      {
        "title": "Open the peat store",
        "text": "Peat accumulates from partly decomposed plant material under waterlogged conditions where decay is slow. Removing peat destroys a distinctive habitat for plants, animals and microorganisms. Draining or exposing peat can increase aerobic decay; burning also returns stored carbon to the air as carbon dioxide.",
        "scene": "eco4:land-peat:1",
        "processFilm": "eco4-land-peat"
      },
      {
        "title": "Trace carbon without inventing it",
        "text": "Carbon dioxide released by peat decay or burning contains carbon that was already stored in the peat. It is not created from nothing. Peat accumulation is slow, so extracting it for compost cannot be assumed to be quickly offset by new peat. Our loop shows a selected route, not a measured timescale or a full greenhouse-gas budget.",
        "scene": "eco4:land-peat:2",
        "processFilm": "eco4-land-peat"
      },
      {
        "title": "Weigh competing needs",
        "text": "Cheap compost can support affordable growing and food production, but peat extraction costs habitat and stored carbon. An original comparison prices peat compost at £4 and a supplied alternative at £6 per bag. The £2 difference is one cost, not a complete decision: assess suitability, quantities, access and environmental effects. This is a hypothetical classroom comparison, not current shopping advice.",
        "scene": "eco4:land-peat:3",
        "process": false
      }
    ],
    "widget": "eco4-land-peat",
    "prerequisites": [
      "science.biology.ecology.communities",
      "science.biology.ecology.carbon"
    ],
    "skills": [
      "WS1.4",
      "WS1.5"
    ],
    "practice": [
      {
        "id": "bio.p-eco4-land-peat1",
        "prompt": "Which activities can reduce land available to other species?",
        "options": [
          "Building, quarrying, farming and dumping waste",
          "Only naming an existing habitat",
          "Only counting organisms"
        ],
        "answer": 0,
        "why": "Land conversion changes available habitat.",
        "concept": "bio.eco4-land-peat"
      },
      {
        "id": "bio.p-eco4-land-peat2",
        "prompt": "Why can peat extraction lower biodiversity?",
        "options": [
          "Peat contains no living organisms",
          "It destroys a habitat used by many species",
          "It instantly creates the same habitat elsewhere"
        ],
        "answer": 1,
        "why": "Habitats support plants, animals and microorganisms.",
        "concept": "bio.eco4-land-peat"
      },
      {
        "id": "bio.p-eco4-land-peat3",
        "prompt": "Where does carbon released from decaying peat come from?",
        "options": [
          "Carbon created by draining",
          "Pure sunlight turning directly into carbon atoms",
          "Previously stored organic material"
        ],
        "answer": 2,
        "why": "Material is transferred rather than created.",
        "concept": "bio.eco4-land-peat"
      },
      {
        "id": "bio.p-eco4-land-peat4",
        "prompt": "In the supplied £4/£6 comparison, extra cost per alternative bag is…",
        "options": [
          "£2",
          "£10",
          "£24"
        ],
        "answer": 0,
        "why": "Subtract costs for the same quantity before evaluating other criteria.",
        "concept": "bio.eco4-land-peat"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco4-land-peat1",
        "prompt": "Fresh land plan develops 25 of 120 hectares. Original habitat area left is…",
        "options": [
          "25 hectares",
          "95 hectares",
          "145 hectares"
        ],
        "answer": 1,
        "why": "Subtract converted area from the starting area.",
        "concept": "bio.eco4-land-peat"
      },
      {
        "id": "bio.c-eco4-land-peat2",
        "prompt": "Which peatland action can expose stored material to more oxygen?",
        "options": [
          "Keeping all peat submerged indefinitely",
          "Counting species without disturbance",
          "Drainage"
        ],
        "answer": 2,
        "why": "More oxygen can permit faster aerobic decay under suitable conditions.",
        "concept": "bio.eco4-land-peat"
      },
      {
        "id": "bio.c-eco4-land-peat3",
        "prompt": "Burning peat transfers stored carbon mainly into…",
        "options": [
          "Carbon dioxide in the atmosphere",
          "New carbon atoms created in soil",
          "An unlimited supply of mineral energy"
        ],
        "answer": 0,
        "why": "Combustion releases carbon dioxide.",
        "concept": "bio.eco4-land-peat"
      },
      {
        "id": "bio.c-eco4-land-peat4",
        "prompt": "Why is peat not quickly replaced after extraction?",
        "options": [
          "Every loss is immediately balanced",
          "Its accumulation is slow",
          "It regrows instantly like a printed label"
        ],
        "answer": 1,
        "why": "Do not equate extraction rate with slow formation.",
        "concept": "bio.eco4-land-peat"
      },
      {
        "id": "bio.c-eco4-land-peat5",
        "prompt": "A fair compost evaluation considers…",
        "options": [
          "Only the cheapest label",
          "Only bag colour",
          "Cost, growing needs, habitat and carbon effects"
        ],
        "answer": 2,
        "why": "Trade-offs require more than one criterion.",
        "concept": "bio.eco4-land-peat"
      },
      {
        "id": "bio.c-eco4-land-peat6",
        "prompt": "A remaining area of 70 hectares proves…",
        "options": [
          "A supplied area calculation only",
          "Every original species survives",
          "Habitat connectivity is irrelevant"
        ],
        "answer": 0,
        "why": "Area is useful but does not encode every ecological property.",
        "concept": "bio.eco4-land-peat"
      }
    ]
  },
  {
    "id": "science.biology.ecology.deforestation",
    "title": "Deforestation & competing land demands",
    "short": "Deforestation & competing land demands",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.3.4"
    ],
    "combinedRefs": [
      "7.3.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Tropical forests have been cleared for cattle farming, rice fields and crops grown for biofuels. A biofuel crop may replace some fossil-fuel use, but that does not erase the impacts of clearing its growing land. Distinguish the purpose of conversion from its environmental consequences.",
    "learn": [
      {
        "title": "Identify the land demands",
        "text": "Tropical forests have been cleared for cattle farming, rice fields and crops grown for biofuels. A biofuel crop may replace some fossil-fuel use, but that does not erase the impacts of clearing its growing land. Distinguish the purpose of conversion from its environmental consequences.",
        "scene": "eco4:deforestation:0",
        "process": false
      },
      {
        "title": "Follow habitat and carbon effects",
        "text": "Clearing trees can remove habitat, shelter and feeding relationships. Burning wood or decay of cleared material can release carbon dioxide. Fewer trees can also mean less future carbon dioxide uptake by photosynthesis. Release from a stored pool and reduced uptake are two distinct contributions, not the same arrow counted twice.",
        "scene": "eco4:deforestation:1",
        "processFilm": "eco4-deforestation"
      },
      {
        "title": "Compare an original land account",
        "text": "A fictional 100-hectare forest plan retains 60 hectares, using 20 for cattle, 10 for rice and 10 for biofuel crops. The converted fraction is 40/100, or 40%. A habitat-area diagram shows land allocation, not a direct species-survival percentage; fragmentation and habitat quality can matter too.",
        "scene": "eco4:deforestation:2",
        "processFilm": "eco4-deforestation"
      },
      {
        "title": "Evaluate competing pressures",
        "text": "People need food, energy and livelihoods, while forest ecosystems provide habitat and store carbon. Evaluate benefits and costs using the supplied evidence, including land demand and alternative methods. A claim that every biofuel is automatically carbon-neutral ignores land-use change. One universal number cannot represent every forest, crop or management plan.",
        "scene": "eco4:deforestation:3",
        "process": false
      }
    ],
    "widget": "eco4-deforestation",
    "prerequisites": [
      "science.biology.ecology.communities",
      "science.biology.ecology.carbon"
    ],
    "skills": [
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-eco4-deforestation1",
        "prompt": "Which set includes AQA examples of tropical forest land demands?",
        "options": [
          "Cattle, rice and biofuel crops",
          "Only telescope storage",
          "Only glaciers forming"
        ],
        "answer": 0,
        "why": "Recall all three named uses.",
        "concept": "bio.eco4-deforestation"
      },
      {
        "id": "bio.p-eco4-deforestation2",
        "prompt": "Clearing and burning trees can…",
        "options": [
          "Guarantee increased biodiversity",
          "Release stored carbon and reduce later uptake",
          "Create carbon from nothing"
        ],
        "answer": 1,
        "why": "Carbon release and photosynthetic uptake are different flows.",
        "concept": "bio.eco4-deforestation"
      },
      {
        "id": "bio.p-eco4-deforestation3",
        "prompt": "Does the word biofuel guarantee zero environmental impact?",
        "options": [
          "Yes, regardless of forest loss",
          "Yes, all habitats recover immediately",
          "No; assess land-use effects as well"
        ],
        "answer": 2,
        "why": "The full context matters.",
        "concept": "bio.eco4-deforestation"
      },
      {
        "id": "bio.p-eco4-deforestation4",
        "prompt": "A plan retains 60 of 100 hectares. Percentage converted is…",
        "options": [
          "40%",
          "60%",
          "160%"
        ],
        "answer": 0,
        "why": "Forty hectares of the original hundred are converted.",
        "concept": "bio.eco4-deforestation"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco4-deforestation1",
        "prompt": "Fresh plan clears 30 of 150 hectares. Percentage cleared is…",
        "options": [
          "80%",
          "20%",
          "30%"
        ],
        "answer": 1,
        "why": "30 divided by 150 times 100 is 20%.",
        "concept": "bio.eco4-deforestation"
      },
      {
        "id": "bio.c-eco4-deforestation2",
        "prompt": "Which effect follows from fewer photosynthesising trees, all else equal?",
        "options": [
          "All plant respiration stops globally",
          "More original forest habitat automatically appears",
          "Less carbon dioxide uptake by those trees"
        ],
        "answer": 2,
        "why": "Keep the claim bounded to the lost trees.",
        "concept": "bio.eco4-deforestation"
      },
      {
        "id": "bio.c-eco4-deforestation3",
        "prompt": "Why can forest clearing lower species variety?",
        "options": [
          "It removes habitats and dependencies",
          "Every forest species eats only cattle",
          "Changing a map label creates extinction"
        ],
        "answer": 0,
        "why": "Habitat loss can affect survival and reproduction.",
        "concept": "bio.eco4-deforestation"
      },
      {
        "id": "bio.c-eco4-deforestation4",
        "prompt": "An evaluation should include…",
        "options": [
          "No supplied information",
          "Food or livelihood benefits and ecological costs",
          "Only one preferred benefit"
        ],
        "answer": 1,
        "why": "Consider competing pressures rather than a single slogan.",
        "concept": "bio.eco4-deforestation"
      },
      {
        "id": "bio.c-eco4-deforestation5",
        "prompt": "Forty percent habitat conversion directly means…",
        "options": [
          "Exactly forty percent of all species die",
          "Carbon release equals forty kilograms",
          "Forty percent of supplied land area is converted"
        ],
        "answer": 2,
        "why": "Area and species response are different quantities.",
        "concept": "bio.eco4-deforestation"
      },
      {
        "id": "bio.c-eco4-deforestation6",
        "prompt": "Which separates two carbon mechanisms correctly?",
        "options": [
          "Wood decay releases CO₂; lost trees remove less CO₂",
          "Both are photosynthesis producing carbon",
          "Neither involves stored carbon"
        ],
        "answer": 0,
        "why": "Distinguish release from reduced removal.",
        "concept": "bio.eco4-deforestation"
      }
    ]
  },
  {
    "id": "science.biology.ecology.warming",
    "title": "Global warming: biological consequences & evidence",
    "short": "Global warming: biological consequences & evidence",
    "topicId": "science.biology.ecology",
    "refs": [
      "7.3.5"
    ],
    "combinedRefs": [
      "7.3.5"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Carbon dioxide and methane contribute to the greenhouse effect. Atmospheric levels of both have risen. Increasing their atmospheric levels strengthens warming by changing the balance of incoming energy and outgoing infrared radiation. The greenhouse effect is not an ozone hole, and gases do not manufacture energy. Our arrows are qualitative energy routes, not measured fluxes or an impermeable lid.",
    "learn": [
      {
        "title": "Connect gases and energy transfer",
        "text": "Carbon dioxide and methane contribute to the greenhouse effect. Atmospheric levels of both have risen. Increasing their atmospheric levels strengthens warming by changing the balance of incoming energy and outgoing infrared radiation. The greenhouse effect is not an ozone hole, and gases do not manufacture energy. Our arrows are qualitative energy routes, not measured fluxes or an impermeable lid.",
        "scene": "eco4:warming:0",
        "processFilm": "eco4-warming"
      },
      {
        "title": "Follow biological consequences",
        "text": "Changing long-term temperatures can alter habitat suitability and species distributions. Seasonal cues can shift migration or breeding, sometimes changing timing relative to food availability. Some populations may adapt or move, but barriers and rapid change can increase extinction risk. Consequences differ among organisms and places; warming does not guarantee every species moves successfully.",
        "scene": "eco4:warming:1",
        "processFilm": "eco4-warming"
      },
      {
        "title": "Read trends at the right scale",
        "text": "An original teaching dataset gives temperature anomalies of 0.0, 0.2, 0.1 and 0.5°C for four successive model decades. The final value is 0.5°C above the first despite an intermediate dip. These are fictional anomalies relative to a chosen baseline, not absolute habitat temperatures or current observations. One cold day cannot overturn a long-term global trend.",
        "scene": "eco4:warming:2",
        "process": false
      },
      {
        "title": "Separate consensus from uncertainty",
        "text": "Scientific understanding is assessed through systematic reviews of thousands of peer-reviewed studies. Strong evidence for global warming can coexist with uncertainty about the exact local timing, ecological response or magnitude. Complex interactions and incomplete data limit precise predictions; uncertainty is a reason to examine evidence and limits, not to assume there is no knowledge.",
        "scene": "eco4:warming:3",
        "process": false
      }
    ],
    "widget": "eco4-warming",
    "prerequisites": [
      "science.biology.ecology.communities"
    ],
    "skills": [
      "WS1.4",
      "WS1.3",
      "WS1.6"
    ],
    "practice": [
      {
        "id": "bio.p-eco4-warming1",
        "prompt": "Which gases are named contributors to warming here?",
        "options": [
          "Carbon dioxide and methane",
          "Only oxygen and helium",
          "Only nitrogen in a closed jar"
        ],
        "answer": 0,
        "why": "Use the named greenhouse gases.",
        "concept": "bio.eco4-warming"
      },
      {
        "id": "bio.p-eco4-warming2",
        "prompt": "Which is a biological consequence to evaluate?",
        "options": [
          "A universal instant migration distance",
          "Changed distribution or breeding timing",
          "An automatic benefit to every species"
        ],
        "answer": 1,
        "why": "Effects depend on species, conditions and barriers.",
        "concept": "bio.eco4-warming"
      },
      {
        "id": "bio.p-eco4-warming3",
        "prompt": "The model anomaly rises from 0.0 to 0.5°C. Change is…",
        "options": [
          "+5°C",
          "−0.5°C",
          "+0.5°C"
        ],
        "answer": 2,
        "why": "Subtract the initial anomaly from the final one.",
        "concept": "bio.eco4-warming"
      },
      {
        "id": "bio.p-eco4-warming4",
        "prompt": "What supports scientific consensus?",
        "options": [
          "Systematic reviews of many peer-reviewed studies",
          "One untested claim",
          "A popularity vote without evidence"
        ],
        "answer": 0,
        "why": "Consensus rests on assessed evidence across research.",
        "concept": "bio.eco4-warming"
      }
    ],
    "check": [
      {
        "id": "bio.c-eco4-warming1",
        "prompt": "Fresh anomaly changes from −0.2 to +0.4°C. Increase is…",
        "options": [
          "−0.6°C",
          "0.6°C",
          "0.2°C"
        ],
        "answer": 1,
        "why": "Subtracting a negative gives 0.4−(−0.2)=0.6.",
        "concept": "bio.eco4-warming"
      },
      {
        "id": "bio.c-eco4-warming2",
        "prompt": "A cold day in one town disproves global warming because…",
        "options": [
          "Every place must warm every day",
          "Climate is defined by one afternoon",
          "It does not; local weather differs from long-term global climate"
        ],
        "answer": 2,
        "why": "Compare evidence at the correct spatial and temporal scales.",
        "concept": "bio.eco4-warming"
      },
      {
        "id": "bio.c-eco4-warming3",
        "prompt": "Which limitation can prevent a species shifting its range?",
        "options": [
          "A barrier or unavailable suitable habitat",
          "All species teleport instantly",
          "Every organism has identical temperature limits"
        ],
        "answer": 0,
        "why": "Movement and successful establishment are not guaranteed.",
        "concept": "bio.eco4-warming"
      },
      {
        "id": "bio.c-eco4-warming4",
        "prompt": "Uncertainty about exact local effects means…",
        "options": [
          "Any unsupported claim is equally good",
          "Assess ranges and limitations alongside strong wider evidence",
          "All scientific knowledge is absent"
        ],
        "answer": 1,
        "why": "Different claims can have different levels of confidence.",
        "concept": "bio.eco4-warming"
      },
      {
        "id": "bio.c-eco4-warming5",
        "prompt": "An anomaly is…",
        "options": [
          "Necessarily the absolute air temperature",
          "A count of species",
          "A difference from a defined reference baseline"
        ],
        "answer": 2,
        "why": "State the baseline and units when interpreting anomalies.",
        "concept": "bio.eco4-warming"
      },
      {
        "id": "bio.c-eco4-warming6",
        "prompt": "A food peak shifts before dependent birds breed. A possible consequence is…",
        "options": [
          "Less food during chick development",
          "Guaranteed improved feeding",
          "No conceivable biological consequence"
        ],
        "answer": 0,
        "why": "A timing mismatch can affect survival; the supplied context matters.",
        "concept": "bio.eco4-warming"
      }
    ]
  }
];
export const eco4Concepts={"bio.eco4-biodiversity": "Biodiversity & ecosystem stability", "bio.eco4-waste": "Waste, pollution & human population", "bio.eco4-land-peat": "Land use & peatland trade-offs", "bio.eco4-deforestation": "Deforestation & competing land demands", "bio.eco4-warming": "Global warming: biological consequences & evidence"};
