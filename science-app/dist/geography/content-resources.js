export const resourceTopic={id:'geography.a.resources-core',title:'Resource management overview',discipline:'Human geography'};
export const resourceOverviewLessons=[
  {
    "id": "geography.a.development.india-management",
    "topicId": "geography.a.development",
    "title": "India: managing rapid development",
    "refs": [
      "5.8b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Manage causes, not only symptoms",
        "Government and community action can reduce some costs of India’s rapid development. The Namami Gange programme includes sewerage and treatment infrastructure to reduce pollution in the Ganga and its tributaries. Useful delivery involves collecting waste, operating treatment reliably and maintaining equipment. Building capacity alone does not establish cleaner water everywhere or equal health benefits."
      ],
      [
        "Separate delivery from outcomes",
        "The government’s 23 March 2026 report lists 524 sanctioned programme projects, of which 355 were completed by February 2026. That leaves 169 not completed in this snapshot; it does not mean 169 failed. Project counts are outputs, not the proportion of river restored. Evaluate water quality, service access, maintenance and effects on different people alongside delivery."
      ],
      [
        "Combine public systems and local influence",
        "Bihar’s JEEViKA programme illustrates women’s groups working with finance, training and market access, supported by public institutions and World Bank funding. Community knowledge can improve local fit, but representation, affordability and sustained support still matter. Better services, skills and environmental management can improve quality of life and strengthen India’s reputation and capacity to cooperate internationally. Global status is not measured by the number of projects alone."
      ]
    ],
    "cardViews": [
      "treatment",
      "projects",
      "community"
    ],
    "model": "dev-india-management",
    "tasks": [
      [
        "What turns treatment capacity into a useful service?",
        [
          "Reliable collection, operation and maintenance",
          "Only announcing a building",
          "Assuming all water becomes safe automatically"
        ],
        0
      ],
      [
        "What do 524 and 355 count?",
        [
          "Sanctioned and completed programme projects",
          "Every river kilometre restored",
          "All Indian households served"
        ],
        0
      ],
      [
        "Why can local groups help programme design?",
        [
          "They can contribute local knowledge and priorities",
          "They guarantee equal representation automatically",
          "They replace every public network"
        ],
        0
      ],
      [
        "How should success be evaluated?",
        [
          "Delivery, outcomes, inclusion and lasting operation",
          "Only the number announced",
          "A claim all costs have disappeared"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "Using the dated project figures, how many were not completed?",
        "options": [
          "169",
          "879",
          "355"
        ],
        "answer": 0,
        "why": "524−355=169. Not yet completed does not prove failure or measure river quality.",
        "concept": "geo.a.resources.management-projects",
        "resourceEvidence": "projects",
        "id": "geo.a.r1.india-management.p1"
      },
      {
        "prompt": "A treatment plant exists but breaks down frequently. What needs attention?",
        "options": [
          "Operating reliability and maintenance",
          "Only whether it was announced",
          "Whether all community input should end"
        ],
        "answer": 0,
        "why": "Outputs require ongoing operation to produce useful environmental and social outcomes.",
        "concept": "geo.a.resources.management-operation",
        "id": "geo.a.r1.india-management.p2"
      },
      {
        "prompt": "A community committee excludes some residents. Which evaluation issue arises?",
        "options": [
          "Representation and access to decisions",
          "Proof everyone has equal influence",
          "The absence of any development challenge"
        ],
        "answer": 0,
        "why": "Community leadership needs inclusive participation as well as local knowledge.",
        "concept": "geo.a.resources.management-inclusion",
        "id": "geo.a.r1.india-management.p3"
      }
    ],
    "check": [
      {
        "prompt": "About what share of sanctioned projects was completed in this snapshot?",
        "options": [
          "67.7%",
          "32.3%",
          "147.6%"
        ],
        "answer": 0,
        "why": "355÷524×100≈67.7%. This is a project-count proportion, not river area cleaned.",
        "concept": "geo.a.resources.management-projects",
        "resourceEvidence": "projects",
        "id": "geo.a.r1.india-management.c1"
      },
      {
        "prompt": "Which evidence most directly tests environmental outcomes?",
        "options": [
          "Comparable water-quality results at relevant places and dates",
          "Only the project announcement total",
          "Only the cost of a signboard"
        ],
        "answer": 0,
        "why": "Outcomes require environmental evidence rather than delivery counts alone.",
        "concept": "geo.a.resources.management-outcomes",
        "id": "geo.a.r1.india-management.c2"
      },
      {
        "prompt": "Why can wider public support complement local groups?",
        "options": [
          "Finance and technical capacity can support locally informed work",
          "It guarantees every resident agrees",
          "It removes the need to check results"
        ],
        "answer": 0,
        "why": "Different institutions can contribute complementary capacities; inclusion and outcomes still need evaluation.",
        "concept": "geo.a.resources.management-inclusion",
        "id": "geo.a.r1.india-management.c3"
      },
      {
        "prompt": "Which claim about global status is proportionate?",
        "options": [
          "Effective environmental and social management can strengthen reputation and cooperation",
          "Every completed project guarantees world leadership",
          "Global status equals the number of plants built"
        ],
        "answer": 0,
        "why": "Quality, implementation and wider relationships matter; project counts are not a complete status measure.",
        "concept": "geo.a.resources.management-status",
        "id": "geo.a.r1.india-management.c4"
      }
    ],
    "caseStudy": "india"
  },
  {
    "id": "geography.a.resources.types",
    "topicId": "geography.a.resources-core",
    "title": "Natural resources: types and limits",
    "refs": [
      "6.1a"
    ],
    "minutes": 30,
    "cards": [
      [
        "A resource meets a human need",
        "Natural resources are parts of the environment used to meet needs, including water, food, timber, fuels and minerals. Biotic resources involve living things, such as fish and trees; abiotic examples include water and mineral ores. Renewable versus non-renewable asks a different question: how quickly can the resource be replenished compared with use? One classification does not determine the other."
      ],
      [
        "Renewable does not mean unlimited",
        "Fish populations and trees can replenish under suitable conditions, but use can exceed renewal. In our invented stock,100 units plus 20 renewed minus 20 harvested leaves 100. Taking 35 instead leaves 85. These are teaching quantities, not a prediction for a real fishery. Habitat, reproduction, weather and management affect actual recovery; local freshwater stores can also be depleted despite the water cycle."
      ],
      [
        "Some stocks form too slowly to replace",
        "Fossil fuels form over geological timescales, so extraction depletes a stock that is not renewed meaningfully within a human lifetime. Mineral ores are finite too; recycling materials can reduce new extraction but does not create new ore deposits. Soil is a vital resource that forms slowly and can be lost much faster through erosion or degradation. Treating a resource as renewable requires attention to scale, quality and rate."
      ]
    ],
    "cardViews": [
      "classify",
      "balanced",
      "finite"
    ],
    "model": "dev-resource-types",
    "tasks": [
      [
        "Which is a biotic resource?",
        [
          "Fish",
          "Water",
          "Copper ore"
        ],
        0
      ],
      [
        "Which is an abiotic example?",
        [
          "Freshwater",
          "A living forest",
          "A fish population"
        ],
        0
      ],
      [
        "What happens if harvest exceeds renewal?",
        [
          "The stock can decline",
          "Renewable guarantees an unlimited stock",
          "The stock must double"
        ],
        0
      ],
      [
        "Why are fossil fuels non-renewable on human timescales?",
        [
          "Formation is far slower than extraction",
          "They are replenished every day",
          "Using them creates new deposits"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "An invented stock has 80 units, adds 10 and loses 25. The remainder is…",
        "options": [
          "65 units",
          "115 units",
          "95 units"
        ],
        "answer": 0,
        "why": "80+10−25=65; the stock declines when removal exceeds replenishment.",
        "concept": "geo.a.resources.stock-balance",
        "id": "geo.a.r1.types.p1"
      },
      {
        "prompt": "Which pair separates the two classification questions correctly?",
        "options": [
          "Water:abiotic and potentially renewable",
          "Fish:abiotic because it can reproduce",
          "Mineral ore:renewable because it is useful"
        ],
        "answer": 0,
        "why": "Origin/type and replenishment are separate dimensions; freshwater renewal still has local limits.",
        "concept": "geo.a.resources.classification",
        "id": "geo.a.r1.types.p2"
      },
      {
        "prompt": "Why can recycling reduce pressure on mineral resources?",
        "options": [
          "Recovered material can replace some newly mined material",
          "It makes new ore deposits immediately",
          "It removes every environmental impact"
        ],
        "answer": 0,
        "why": "Recycling can reduce extraction demand, while stocks and processing impacts remain limited.",
        "concept": "geo.a.resources.finite",
        "id": "geo.a.r1.types.p3"
      }
    ],
    "check": [
      {
        "prompt": "A forest is cut faster than it regrows. Which statement is correct?",
        "options": [
          "A potentially renewable resource is being depleted",
          "The word renewable guarantees recovery",
          "Trees must be non-living minerals"
        ],
        "answer": 0,
        "why": "Renewability is conditional on rates, habitat and management.",
        "concept": "geo.a.resources.renewal",
        "id": "geo.a.r1.types.c1"
      },
      {
        "prompt": "Which example is abiotic and not renewed meaningfully on human timescales?",
        "options": [
          "A copper ore deposit",
          "A breeding fish population",
          "A growing timber stand"
        ],
        "answer": 0,
        "why": "Mineral deposits are non-living geological stocks; classification and renewal differ.",
        "concept": "geo.a.resources.classification",
        "id": "geo.a.r1.types.c2"
      },
      {
        "prompt": "Why does the water cycle not guarantee unlimited water in a town?",
        "options": [
          "Local storage, recharge, quality and demand can differ",
          "All water is created by taps",
          "Every place receives the same rainfall"
        ],
        "answer": 0,
        "why": "Global circulation does not ensure usable local supply at every time.",
        "concept": "geo.a.resources.water-limits",
        "id": "geo.a.r1.types.c3"
      },
      {
        "prompt": "What makes soil loss a resource concern?",
        "options": [
          "Soil formation can be much slower than erosion",
          "All lost soil regrows instantly",
          "Soil has no role in food production"
        ],
        "answer": 0,
        "why": "Productive soil supports food and ecosystem functions and is slow to replace.",
        "concept": "geo.a.resources.soil",
        "id": "geo.a.r1.types.c4"
      }
    ]
  },
  {
    "id": "geography.a.resources.exploitation",
    "topicId": "geography.a.resources-core",
    "title": "How people obtain water, food and energy",
    "refs": [
      "6.1b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Move water and fuels into use",
        "People abstract water from rivers, reservoirs and aquifers, then store, treat and distribute it. Removing water from a local store does not destroy water molecules, but can reduce availability there. Fossil fuels are extracted from underground deposits and processed for use. Both activities need infrastructure and can affect the surrounding environment; extraction is not the same as the amount ultimately delivered usefully."
      ],
      [
        "Produce and harvest food",
        "Farming uses land, soil, water and biological growth to produce crops or livestock. Fishing removes organisms from aquatic stocks. Inputs and harvest affect the rate and quantity obtained, but soil health, habitats, reproduction and weather impose limits. More equipment does not guarantee that a stock or ecosystem can sustain any level of removal."
      ],
      [
        "Forest clearance changes land use",
        "Forests may be cleared for farmland, settlement or infrastructure, or harvested for timber and fuel. Deforestation is the conversion of forest to another land use; cutting trees with planned regeneration is not automatically the same process. Clearance can provide resources or space while changing habitat, soils and water movement. Consider what is taken, how it is obtained and what remains."
      ]
    ],
    "cardViews": [
      "water",
      "fossil",
      "forest"
    ],
    "model": "dev-resource-exploitation",
    "tasks": [
      [
        "Pumping from an aquifer is…",
        [
          "Water abstraction",
          "Creation of new water molecules",
          "A guarantee of unlimited recharge"
        ],
        0
      ],
      [
        "An oil well obtains fuel by…",
        [
          "Extracting an underground geological stock",
          "Growing new oil each season",
          "Harvesting a fish population"
        ],
        0
      ],
      [
        "Fishing changes a stock by…",
        [
          "Removing organisms from it",
          "Automatically replacing every fish",
          "Creating mineral ore"
        ],
        0
      ],
      [
        "Farming relies on…",
        [
          "Soil, water and biological production",
          "Only the colour of machinery",
          "The absence of all environmental limits"
        ],
        0
      ],
      [
        "Which is deforestation?",
        [
          "Converting forest into permanent farmland",
          "Every cut followed by forest regeneration",
          "Any seasonal leaf fall"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "A water store starts 100, receives 20 and loses 30 through abstraction. It ends at…",
        "options": [
          "90 teaching units",
          "150 teaching units",
          "110 teaching units"
        ],
        "answer": 0,
        "why": "100+20−30=90. This invented local-store balance is not a measured aquifer or claim that molecules were destroyed.",
        "concept": "geo.a.resources.abstraction",
        "id": "geo.a.r1.exploitation.p1"
      },
      {
        "prompt": "What distinguishes farming from mineral extraction?",
        "options": [
          "Farming depends on biological production as well as land and water",
          "Farming creates all mineral deposits",
          "Extraction always produces food"
        ],
        "answer": 0,
        "why": "Activities obtain different resources through different processes and inputs.",
        "concept": "geo.a.resources.production",
        "id": "geo.a.r1.exploitation.p2"
      },
      {
        "prompt": "Why check whether harvested forest regenerates?",
        "options": [
          "It helps distinguish ongoing forestry from land-use conversion",
          "Every cut is identical to permanent clearance",
          "Regeneration restores every habitat instantly"
        ],
        "answer": 0,
        "why": "Forest use and deforestation differ; even regeneration can leave ecological changes.",
        "concept": "geo.a.resources.forest-use",
        "id": "geo.a.r1.exploitation.p3"
      }
    ],
    "check": [
      {
        "prompt": "Which activity directly obtains fossil energy?",
        "options": [
          "Drilling into an oil-bearing formation",
          "Pumping drinking water from an aquifer",
          "Harvesting wheat"
        ],
        "answer": 0,
        "why": "Oil extraction accesses a fossil-fuel stock; the other activities obtain different resources.",
        "concept": "geo.a.resources.fossils",
        "id": "geo.a.r1.exploitation.c1"
      },
      {
        "prompt": "A fleet catches more fish while reproduction is unchanged. What should be assessed?",
        "options": [
          "Whether removal can be sustained by the stock",
          "Only whether the boats are larger",
          "A guarantee the fish population increases"
        ],
        "answer": 0,
        "why": "Fishing pressure must be assessed against stock condition and replenishment.",
        "concept": "geo.a.resources.fishing",
        "id": "geo.a.r1.exploitation.c2"
      },
      {
        "prompt": "A forest is replaced by cattle pasture. This illustrates…",
        "options": [
          "Deforestation for agricultural land",
          "Only temporary timber harvesting with forest regeneration",
          "The creation of a new ore deposit"
        ],
        "answer": 0,
        "why": "The dominant land use changes from forest to pasture.",
        "concept": "geo.a.resources.forest-use",
        "id": "geo.a.r1.exploitation.c3"
      },
      {
        "prompt": "What does exploitation mean in this context?",
        "options": [
          "Obtaining or using resources, with effects that need evaluation",
          "Always an identical level of damage",
          "The absence of any human use"
        ],
        "answer": 0,
        "why": "Resource use has different methods and consequences; the term alone does not quantify harm.",
        "concept": "geo.a.resources.use-meaning",
        "id": "geo.a.r1.exploitation.c4"
      }
    ]
  },
  {
    "id": "geography.a.resources.impacts",
    "topicId": "geography.a.resources-core",
    "title": "Resource use: habitats, soil, water and air",
    "refs": [
      "6.1c"
    ],
    "minutes": 30,
    "cards": [
      [
        "Habitat change affects living systems",
        "Clearing land or extracting material can remove habitats and split surviving patches, affecting movement and biodiversity. The effect depends on the species, scale, remaining connections and later management. Replanting trees may help some functions but does not instantly reproduce an old forest’s full structure and community. Impacts extend beyond the material taken away."
      ],
      [
        "Trace soil and water pathways",
        "Removing protective vegetation or disturbing ground can leave soil exposed to rainfall and runoff. Eroded material moves downslope and may reach streams, while fertilisers, waste or chemicals can create other water-quality pressures. Sediment and dissolved pollutants are different pathways; their amounts and effects need evidence. Local soil loss can reduce future productive capacity."
      ],
      [
        "Air quality and wider effects matter",
        "Machinery, dust and fuel combustion can affect air quality. Burning fossil fuels also adds greenhouse gases, linking resource use with climate change; local air pollution and global climate effects are not the same measurement. Compare extraction, processing, transport and use, because reducing an impact at one stage may shift it elsewhere. Avoid assuming that one safeguard removes every pressure."
      ]
    ],
    "cardViews": [
      "habitat",
      "erosion",
      "air"
    ],
    "model": "dev-resource-impacts",
    "tasks": [
      [
        "Splitting a habitat into isolated patches may affect…",
        [
          "Movement and ecological connections",
          "Only the sale price of timber",
          "Every species in exactly the same way"
        ],
        0
      ],
      [
        "What can vegetation removal increase?",
        [
          "Exposure of soil to erosion",
          "Instant formation of deep soil",
          "The disappearance of all runoff"
        ],
        0
      ],
      [
        "Does sediment measure every water pollutant?",
        [
          "No: different materials and processes need different measures",
          "Yes: every pollutant is the same",
          "Yes: water quality has one universal unit"
        ],
        0
      ],
      [
        "Why distinguish dust from greenhouse gases?",
        [
          "Local air quality and climate effects differ",
          "Only one can ever be produced",
          "They are identical measurements"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "A bare slope loses topsoil during heavy rain. The most direct resource effect is…",
        "options": [
          "Reduced soil retained on that slope",
          "Instant creation of richer soil",
          "Proof every downstream river is toxic"
        ],
        "answer": 0,
        "why": "Soil is transferred away; downstream effects depend on the material and conditions.",
        "concept": "geo.a.resources.erosion",
        "id": "geo.a.r1.impacts.p1"
      },
      {
        "prompt": "Why might a replanted forest differ from the original habitat?",
        "options": [
          "Age, species composition and ecological structure can differ",
          "Every habitat recovers instantly",
          "New trees have no ecological role"
        ],
        "answer": 0,
        "why": "Recovery can help without instantly restoring all original biodiversity and functions.",
        "concept": "geo.a.resources.biodiversity",
        "id": "geo.a.r1.impacts.p2"
      },
      {
        "prompt": "Why examine transport as well as extraction?",
        "options": [
          "Impacts can occur across the whole supply chain",
          "Only the mine location can have effects",
          "All transport has zero emissions"
        ],
        "answer": 0,
        "why": "Processing, movement and use can add or shift environmental pressures.",
        "concept": "geo.a.resources.supply-impacts",
        "id": "geo.a.r1.impacts.p3"
      }
    ],
    "check": [
      {
        "prompt": "A road through a forest separates two surviving patches. Which impact is illustrated?",
        "options": [
          "Habitat fragmentation",
          "A guarantee of increased biodiversity",
          "The complete renewal of every resource"
        ],
        "answer": 0,
        "why": "Connections and movement may be disrupted even where some habitat remains.",
        "concept": "geo.a.resources.biodiversity",
        "id": "geo.a.r1.impacts.c1"
      },
      {
        "prompt": "Rainfall carries loose soil into a stream. What is being transferred?",
        "options": [
          "Sediment from the land",
          "Newly created copper ore",
          "Only invisible greenhouse gases"
        ],
        "answer": 0,
        "why": "Erosion and transport move soil particles; this is distinct from all dissolved pollutants.",
        "concept": "geo.a.resources.erosion",
        "id": "geo.a.r1.impacts.c2"
      },
      {
        "prompt": "Why should a study measure air quality separately from a carbon footprint?",
        "options": [
          "They describe different pollutants, scales and effects",
          "They always use identical units",
          "Carbon accounting measures every local dust exposure"
        ],
        "answer": 0,
        "why": "Climate emissions and local pollutant exposure require distinct indicators.",
        "concept": "geo.a.resources.air-climate",
        "id": "geo.a.r1.impacts.c3"
      },
      {
        "prompt": "Which evaluation is strongest?",
        "options": [
          "Compare biodiversity, soil, water and air effects over relevant places and times",
          "Assume one safeguard ends all damage",
          "Count only the amount sold"
        ],
        "answer": 0,
        "why": "Environmental effects differ by pathway, place, timescale and management.",
        "concept": "geo.a.resources.evaluation",
        "id": "geo.a.r1.impacts.c4"
      }
    ]
  },
  {
    "id": "geography.a.resources.distribution",
    "topicId": "geography.a.resources-core",
    "title": "Where are natural resources found?",
    "refs": [
      "6.2a"
    ],
    "minutes": 30,
    "cards": [
      [
        "Patterns reflect physical conditions",
        "Geology helps determine the location of fuels, rocks and mineral deposits; climate, water, soils and terrain influence agriculture and forestry. These patterns are uneven globally. Our selected-country forest map uses 2023 forest area as a percentage of land area, with grey showing countries outside this selection. A high percentage does not directly measure timber output, forest quality or permission to harvest."
      ],
      [
        "Read the UK’s varied resources",
        "UK arable land is more prevalent in the east, while improved grassland is more prevalent in the west. Woodland, wetter uplands, offshore oil and gas and geological mineral resources provide different opportunities. The locator marks selected examples, not complete resource boundaries. Rainfall can support potential supply, but treatment, storage, quality, demand and infrastructure affect usable water."
      ],
      [
        "A deposit is not the same as an accessible supply",
        "Resources may exist where extraction is costly, protected, technically difficult or contested. Chile’s copper and Saudi Arabia’s oil illustrate different geological resources; soils, forests and freshwater have other controls. Technology, investment, trade and governance affect access and use. Compare the stated measure and scale, rather than assuming a country’s resources guarantee equal wealth or a self-sufficient supply."
      ]
    ],
    "cardViews": [
      "forests",
      "uk",
      "controls"
    ],
    "model": "dev-resource-distribution",
    "tasks": [
      [
        "What does the forest choropleth measure?",
        [
          "Forest area as a share of land area",
          "Annual timber exports",
          "Percentage of households owning trees"
        ],
        0
      ],
      [
        "What does grey mean on this selected-country map?",
        [
          "Not included in this data selection",
          "No forests anywhere in that country",
          "No available land"
        ],
        0
      ],
      [
        "Do the UK markers show complete resource extents?",
        [
          "No: they locate selected examples",
          "Yes: every dot covers an entire deposit",
          "Yes: they are licence boundaries"
        ],
        0
      ],
      [
        "Why can resources exist without being economically usable?",
        [
          "Costs, technology, protection and access can constrain use",
          "Every deposit guarantees cheap extraction",
          "Only map distance determines availability"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "Using the rounded source values, Brazil exceeds Russia by…",
        "options": [
          "8.2 percentage points",
          "109.6 percentage points",
          "8.2 million hectares"
        ],
        "answer": 0,
        "why": "58.9−50.7=8.2 percentage points of land area, not absolute forest area.",
        "concept": "geo.a.resources.forest-map",
        "resourceEvidence": "forests",
        "id": "geo.a.r1.distribution.p1"
      },
      {
        "prompt": "Why might a wetter region still face supply difficulties?",
        "options": [
          "Storage, demand, quality and infrastructure also matter",
          "Rainfall is identical to treated water delivered",
          "Every drop can be used at zero cost"
        ],
        "answer": 0,
        "why": "Potential renewable water and reliable usable supply differ.",
        "concept": "geo.a.resources.water-distribution",
        "id": "geo.a.r1.distribution.p2"
      },
      {
        "prompt": "Which best explains different locations of mineral resources?",
        "options": [
          "Geological history and deposit formation",
          "Identical amounts everywhere",
          "Only today’s population density"
        ],
        "answer": 0,
        "why": "Geology affects deposits; economic access also depends on other factors.",
        "concept": "geo.a.resources.geology",
        "id": "geo.a.r1.distribution.p3"
      }
    ],
    "check": [
      {
        "prompt": "Which selected country has the largest displayed forest percentage?",
        "options": [
          "Brazil",
          "United Kingdom",
          "Saudi Arabia"
        ],
        "answer": 0,
        "why": "The selected 2023 values show Brazil 58.9%, above the other countries in this comparison. This is not a ranking of absolute forest area.",
        "concept": "geo.a.resources.forest-map",
        "resourceEvidence": "forests",
        "id": "geo.a.r1.distribution.c1"
      },
      {
        "prompt": "What does a grey country allow you to conclude?",
        "options": [
          "Its forest value is not shown in this selection",
          "Its value must be zero",
          "It cannot contain any resource"
        ],
        "answer": 0,
        "why": "Missing from a selected dataset does not mean an absence of the resource.",
        "concept": "geo.a.resources.map-key",
        "resourceEvidence": "forests",
        "id": "geo.a.r1.distribution.c2"
      },
      {
        "prompt": "The UK locator associates offshore oil/gas with…",
        "options": [
          "A selected North Sea location",
          "Every forest in Scotland",
          "All eastern arable fields"
        ],
        "answer": 0,
        "why": "Read the labelled offshore example; a locator is not a map of field boundaries or reserves.",
        "concept": "geo.a.resources.uk-patterns",
        "resourceEvidence": "uk",
        "id": "geo.a.r1.distribution.c3"
      },
      {
        "prompt": "Which statement best evaluates resource availability?",
        "options": [
          "Physical endowment and economic, technical and social access interact",
          "A deposit guarantees equal wealth for everyone",
          "A forest percentage proves timber output"
        ],
        "answer": 0,
        "why": "Presence, accessibility, use and distributed benefit are different questions.",
        "concept": "geo.a.resources.access",
        "id": "geo.a.r1.distribution.c4"
      }
    ]
  }
];
