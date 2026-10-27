export const energyTopic={id:'geography.a.energy',title:'Energy resource management',discipline:'Human geography'};
export const energy01Lessons=[
  {
    "id": "geography.a.resources.consumption",
    "topicId": "geography.a.resources-core",
    "title": "Who uses the world’s resources?",
    "refs": [
      "6.2b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Compare like with like",
        "Resource use depends on population, wealth, industry, climate, technology and access. Total use and use per person answer different questions. In a teaching example, 10 million people using 4 units each require 40 million units; 100 million using 1 unit each require 100 million. A country with lower use per person can still have a higher total."
      ],
      [
        "Food and energy patterns",
        "FAO’s 2023 food-balance summary places Europe, the Americas and Oceania above the world’s average dietary energy supply; Asia moved closer to that mean, while Africa remained lower with limited growth. Food supply is availability, not measured intake or equal access. Our 2022 WDI/IEA map compares primary energy per person in four selected countries: the USA exceeds the UK, Brazil and India. It is not a complete world ranking or a measure of electricity alone."
      ],
      [
        "Water use goes beyond the tap",
        "UN SDG reporting gives 2022 global freshwater withdrawal shares of 72% agriculture, 15% industry and 13% services. Irrigation and livestock draw on water, and households also use resources indirectly through food and goods. Agriculture dominates withdrawals in many farming economies; industrial water use is important in industrialised regions. Withdrawal is water taken from a source; some returns. It is not all water permanently consumed. Global shares hide seasonal and local differences."
      ]
    ],
    "cardViews": [
      "totals",
      "map",
      "water"
    ],
    "model": "dev-energy-consumption",
    "tasks": [
      [
        "A has 10 million people at 4 units each; B has 100 million at 1. Which has greater total use?",
        [
          "B: 100 million units",
          "A: 40 million is larger",
          "They are equal"
        ],
        0
      ],
      [
        "Read the energy map and key. What is its denominator?",
        [
          "People: kg oil equivalent per person",
          "Each country’s land area",
          "Only electricity generated"
        ],
        0
      ],
      [
        "What does dietary energy supply measure?",
        [
          "Food energy available per person, not actual intake",
          "Calories eaten by every individual",
          "Only the number of farms"
        ],
        0
      ],
      [
        "What does the water chart show?",
        [
          "Sector shares of global freshwater withdrawals",
          "Percent of people with safe drinking water",
          "Water permanently lost from Earth"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy01.consumption.p1",
        "prompt": "A national mean can hide…",
        "options": [
          "Different household access and use",
          "Every household being identical",
          "Only the map’s north arrow"
        ],
        "answer": 0,
        "why": "Averages do not describe every household.",
        "concept": "geo.a.energy01.resource-averages"
      },
      {
        "id": "geo.a.energy01.consumption.p2",
        "prompt": "In the supplied 2022 energy data, which selected country has the greatest use per person?",
        "options": [
          "United States",
          "India",
          "Brazil"
        ],
        "answer": 0,
        "why": "The USA has the highest value in this four-country selection.",
        "concept": "geo.a.energy01.energy-per-person",
        "energy01Evidence": "energy"
      },
      {
        "id": "geo.a.energy01.consumption.p3",
        "prompt": "Taking water for irrigation is recorded here as…",
        "options": [
          "Agricultural withdrawal",
          "A direct measure of everyone’s drinking intake",
          "The amount destroyed forever"
        ],
        "answer": 0,
        "why": "Withdrawal records extraction; return flows can occur.",
        "concept": "geo.a.energy01.water-withdrawal"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy01.consumption.c1",
        "prompt": "C has 20 million people at 3 units each; D has 50 million at 2. Which total is larger?",
        "options": [
          "D: 100 million units",
          "C: 60 million units",
          "Both are 50 million"
        ],
        "answer": 0,
        "why": "Multiply population by use per person.",
        "concept": "geo.a.energy01.total-per-person"
      },
      {
        "id": "geo.a.energy01.consumption.c2",
        "prompt": "Read the source chart. Which is higher per person in 2022?",
        "options": [
          "United Kingdom than Brazil",
          "Brazil than United Kingdom",
          "Both identical"
        ],
        "answer": 0,
        "why": "Compare the same indicator and year.",
        "concept": "geo.a.energy01.energy-per-person",
        "energy01Evidence": "energy"
      },
      {
        "id": "geo.a.energy01.consumption.c3",
        "prompt": "Does a higher national food supply prove every resident eats enough?",
        "options": [
          "No: distribution, waste and access matter",
          "Yes: national supply is each person’s intake",
          "Yes: population never matters"
        ],
        "answer": 0,
        "why": "Food availability is not an individual dietary survey.",
        "concept": "geo.a.energy01.food-supply"
      },
      {
        "id": "geo.a.energy01.consumption.c4",
        "prompt": "According to this global source, industry plus services account for…",
        "options": [
          "28% of withdrawals",
          "85% of withdrawals",
          "28% of all rainfall"
        ],
        "answer": 0,
        "why": "Add 15 and 13; keep the withdrawal denominator.",
        "concept": "geo.a.energy01.water-withdrawal",
        "energy01Evidence": "water"
      }
    ]
  },
  {
    "id": "geography.a.energy.types",
    "topicId": "geography.a.energy",
    "title": "Renewable and non-renewable energy",
    "refs": [
      "6.3a"
    ],
    "minutes": 30,
    "cards": [
      [
        "Start with replacement times",
        "Coal, oil and natural gas formed over geological time and are non-renewable on human timescales. Uranium is also finite: nuclear energy is non-renewable, although it is not a fossil fuel. A low-carbon source is not automatically renewable."
      ],
      [
        "Renewable flows still have limits",
        "Wind, sunlight and the water cycle replenish energy flows. Using wind does not remove a finite geological fuel stock, but wind output varies with conditions. Renewable does not mean constant output or no environmental effects. Biomass can be renewed through growth only when harvesting and management allow replenishment; burning it still releases carbon dioxide."
      ],
      [
        "Electricity carries energy",
        "Electricity is generated from primary sources including gas, uranium, wind and sunlight. It is a secondary energy carrier, so electricity itself is not simply a renewable fuel. Classify the source, then investigate its conversion, impacts and reliability."
      ]
    ],
    "cardViews": [
      "classify",
      "wind",
      "carrier"
    ],
    "model": "dev-energy-types",
    "tasks": [
      [
        "Uranium powers a nuclear station. Its resource class is…",
        [
          "Non-renewable, but not a fossil fuel",
          "Renewable because it is low carbon",
          "A fossil fuel because all finite fuels are fossil"
        ],
        0
      ],
      [
        "A finite fuel store falls from 100 to 80 units. The replay means…",
        [
          "The explanation repeats, not new fuel formation",
          "The real fuel instantly grows back",
          "The fuel was renewable"
        ],
        0
      ],
      [
        "Wind power varies with weather. This means…",
        [
          "Renewable supply can be variable",
          "Wind is a fossil fuel",
          "All wind output is constant"
        ],
        0
      ],
      [
        "Which condition supports renewable biomass supply?",
        [
          "Regrowth keeps pace with harvest over time",
          "Harvest always exceeds regrowth",
          "All combustion is emission-free"
        ],
        0
      ]
    ],
    "resourceOption": "energy",
    "practice": [
      {
        "id": "geo.a.energy01.types.p1",
        "prompt": "Which set contains only renewable sources?",
        "options": [
          "Wind, solar and HEP",
          "Coal, wind and oil",
          "Uranium, gas and solar"
        ],
        "answer": 0,
        "why": "Wind, sunlight and water-cycle flows replenish.",
        "concept": "geo.a.energy01.energy-class"
      },
      {
        "id": "geo.a.energy01.types.p2",
        "prompt": "Why is nuclear energy non-renewable?",
        "options": [
          "Uranium is a finite resource",
          "Every nuclear station burns coal",
          "It depends on daily rainfall"
        ],
        "answer": 0,
        "why": "Finite uranium differs from fossil fuels.",
        "concept": "geo.a.energy01.nuclear-class"
      },
      {
        "id": "geo.a.energy01.types.p3",
        "prompt": "Electricity made by a gas station is…",
        "options": [
          "A secondary carrier derived from a fossil source",
          "A renewable primary resource",
          "Proof gas regrows daily"
        ],
        "answer": 0,
        "why": "Classify the generating resource.",
        "concept": "geo.a.energy01.energy-carrier"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy01.types.c1",
        "prompt": "Which source is non-renewable without being a fossil fuel?",
        "options": [
          "Uranium",
          "Oil",
          "Wind"
        ],
        "answer": 0,
        "why": "Uranium is finite nuclear fuel, not fossil material.",
        "concept": "geo.a.energy01.nuclear-class"
      },
      {
        "id": "geo.a.energy01.types.c2",
        "prompt": "A solar panel’s variable output changes its classification to…",
        "options": [
          "Still renewable: replacement and variability differ",
          "Non-renewable every night",
          "A fossil fuel in winter"
        ],
        "answer": 0,
        "why": "Intermittency does not make sunlight finite.",
        "concept": "geo.a.energy01.energy-class"
      },
      {
        "id": "geo.a.energy01.types.c3",
        "prompt": "Trees are cut faster than they regrow. What follows?",
        "options": [
          "The biomass stock declines despite potential renewal",
          "The forest is unlimited",
          "No carbon can be released"
        ],
        "answer": 0,
        "why": "Management and rates determine stock change.",
        "concept": "geo.a.energy01.biomass-limit"
      },
      {
        "id": "geo.a.energy01.types.c4",
        "prompt": "Which information is needed to judge electricity’s source?",
        "options": [
          "How it was generated",
          "Only its voltage",
          "Whether a cable is blue"
        ],
        "answer": 0,
        "why": "Electricity can originate from renewable or finite sources.",
        "concept": "geo.a.energy01.energy-carrier"
      }
    ]
  },
  {
    "id": "geography.a.energy.natural-gas",
    "topicId": "geography.a.energy",
    "title": "Natural gas: benefits and costs",
    "refs": [
      "6.3b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Develop a supply chain",
        "Natural gas is a finite fossil resource extracted through wells, processed and transported by pipelines or as liquefied gas. Development needs finance, skilled workers, infrastructure and safety controls. It can provide employment and energy for heating, industry and generation; revenue and benefits are not necessarily shared equally."
      ],
      [
        "Useful flexibility has conditions",
        "A gas-fired generator can adjust output to help match demand, provided fuel and operating capacity are available. It can support a system with variable wind and solar, but buying fuel creates operating costs and exposure to prices or supply disruption. Producing gas domestically does not remove depletion or all market risks."
      ],
      [
        "Evaluate the whole chain",
        "Burning gas releases carbon dioxide; leaks along production and transport release methane, a different greenhouse gas. Gas combustion generally emits less CO2 than coal for the same heat input, but that does not mean zero emissions or a universal lifecycle advantage. Wells, pipelines and processing can disturb habitats and produce waste water, noise and local pollutants. Assess leakage control, land impacts, fuel dependence and services together."
      ]
    ],
    "cardViews": [
      "supply",
      "dispatch",
      "emissions"
    ],
    "model": "dev-energy-natural-gas",
    "tasks": [
      [
        "Which investment is needed to turn a deposit into a usable service?",
        [
          "Extraction, processing and transport infrastructure",
          "Only a mark on a map",
          "Immediate natural replenishment"
        ],
        0
      ],
      [
        "Demand increases while fuel is available. Gas generation can help by…",
        [
          "Adjusting output within plant limits",
          "Generating without any fuel",
          "Removing all supply risks"
        ],
        0
      ],
      [
        "A leak before combustion releases mainly…",
        [
          "Methane from the gas supply",
          "Only oxygen",
          "Only the CO2 from burning"
        ],
        0
      ],
      [
        "Which judgement balances development benefits and costs?",
        [
          "Energy/jobs alongside emissions, land impacts and fuel costs",
          "Every project benefits everyone equally",
          "Gas is harmless because it is useful"
        ],
        0
      ]
    ],
    "resourceOption": "energy",
    "practice": [
      {
        "id": "geo.a.energy01.natural-gas.p1",
        "prompt": "One advantage of developing gas is…",
        "options": [
          "Fuel for heat and controllable generation",
          "Unlimited fuel without costs",
          "No need for pipelines or staff"
        ],
        "answer": 0,
        "why": "Useful energy services require infrastructure and continuing fuel.",
        "concept": "geo.a.energy01.gas-benefits"
      },
      {
        "id": "geo.a.energy01.natural-gas.p2",
        "prompt": "Why can gas still affect climate if leaks are controlled?",
        "options": [
          "Combustion releases carbon dioxide",
          "CO2 only comes from wind",
          "Gas cannot burn"
        ],
        "answer": 0,
        "why": "Leakage prevention does not remove combustion CO2.",
        "concept": "geo.a.energy01.gas-emissions"
      },
      {
        "id": "geo.a.energy01.natural-gas.p3",
        "prompt": "A long pipeline may create…",
        "options": [
          "Land disturbance and construction costs",
          "An automatically renewable gas stock",
          "No maintenance needs"
        ],
        "answer": 0,
        "why": "Infrastructure brings costs and environmental pressures.",
        "concept": "geo.a.energy01.gas-development"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy01.natural-gas.c1",
        "prompt": "Which gas-development benefit is conditional on fuel supply?",
        "options": [
          "Adjustable generation",
          "Infinite reserves",
          "Zero pollution"
        ],
        "answer": 0,
        "why": "Dispatchable plant needs fuel and available operating capacity.",
        "concept": "geo.a.energy01.gas-benefits"
      },
      {
        "id": "geo.a.energy01.natural-gas.c2",
        "prompt": "A well leaks unburned natural gas. The key climate concern is…",
        "options": [
          "Methane release",
          "Only harmless water vapour",
          "Only ash from coal"
        ],
        "answer": 0,
        "why": "Methane can escape before combustion.",
        "concept": "geo.a.energy01.gas-emissions"
      },
      {
        "id": "geo.a.energy01.natural-gas.c3",
        "prompt": "What best tests whether jobs outweigh local disruption?",
        "options": [
          "Evidence on employment, duration, habitat costs and affected groups",
          "Only counting an announced project",
          "Assuming every resident gains"
        ],
        "answer": 0,
        "why": "Evaluate distribution and duration of benefits and costs.",
        "concept": "geo.a.energy01.gas-development"
      },
      {
        "id": "geo.a.energy01.natural-gas.c4",
        "prompt": "Lower combustion CO2 than coal per equal heat input means…",
        "options": [
          "A relative advantage, not zero lifecycle emissions",
          "All gas energy is renewable",
          "Methane leakage never matters"
        ],
        "answer": 0,
        "why": "The comparison needs a defined energy basis and whole-chain consideration.",
        "concept": "geo.a.energy01.gas-emissions"
      }
    ]
  },
  {
    "id": "geography.a.energy.wind",
    "topicId": "geography.a.energy",
    "title": "Wind power: benefits and costs",
    "refs": [
      "6.3c"
    ],
    "minutes": 30,
    "cards": [
      [
        "Turn a flow into electricity",
        "Moving air turns a rotor connected to a generator. Wind is renewed by atmospheric processes and has no fuel purchase or fuel combustion during generation. Developing turbines, foundations and grid connections needs materials, investment and skilled work. This can create employment, but construction and maintenance still have costs."
      ],
      [
        "Plan for variable output",
        "Output depends on suitable wind conditions; a turbine’s rated capacity is not its constant delivered power. Low wind can reduce output, while very strong winds may require shutdown. Electricity systems balance sources, demand, storage and connections. Batteries store energy produced earlier; they do not create new wind energy. Offshore wind can access strong winds, with more challenging installation and maintenance."
      ],
      [
        "Choose sites and assess tradeoffs",
        "Wind generation avoids combustion emissions at the turbine, but manufacturing, construction and decommissioning have impacts. Landscape appearance, noise and bird/bat collision risks require site-specific assessment and mitigation. Offshore development also needs marine habitat and cable-route assessment. Compare delivered energy, costs, grid access, biodiversity and community views; renewable does not mean impact-free."
      ]
    ],
    "cardViews": [
      "rotor",
      "low",
      "siting"
    ],
    "model": "dev-energy-wind",
    "tasks": [
      [
        "What does the rotor-generator sequence show?",
        [
          "Wind movement converted into electricity",
          "Electricity making new fossil fuel",
          "A turbine producing power without wind"
        ],
        0
      ],
      [
        "The wind drops below useful operating levels. What should change?",
        [
          "Output decreases; rated capacity is not a guarantee",
          "Output must stay at rated maximum",
          "The source becomes coal"
        ],
        0
      ],
      [
        "A charged battery helps during low wind by…",
        [
          "Releasing previously stored energy",
          "Making new wind",
          "Replacing every future grid investment"
        ],
        0
      ],
      [
        "Which evidence belongs in a wind development decision?",
        [
          "Grid connection, ecology, local views, costs and energy output",
          "Only the height of the nearest hill",
          "Only the fact it is renewable"
        ],
        0
      ]
    ],
    "resourceOption": "energy",
    "practice": [
      {
        "id": "geo.a.energy01.wind.p1",
        "prompt": "One operating advantage of wind is…",
        "options": [
          "No fuel combustion at the turbine",
          "No construction costs",
          "Guaranteed maximum output all day"
        ],
        "answer": 0,
        "why": "Wind avoids buying and burning fuel during generation.",
        "concept": "geo.a.energy01.wind-benefits"
      },
      {
        "id": "geo.a.energy01.wind.p2",
        "prompt": "A 10 MW turbine rating tells us…",
        "options": [
          "A rated power, not actual energy delivered over a year",
          "It always produces 10 MWh each year",
          "Every hour must be at full output"
        ],
        "answer": 0,
        "why": "Power rating and time-dependent energy output differ.",
        "concept": "geo.a.energy01.wind-variability"
      },
      {
        "id": "geo.a.energy01.wind.p3",
        "prompt": "Why assess local ecology?",
        "options": [
          "Risks depend on species, routes and site design",
          "All sites have identical effects",
          "Renewable means no effects"
        ],
        "answer": 0,
        "why": "Siting and mitigation need local evidence.",
        "concept": "geo.a.energy01.wind-siting"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy01.wind.c1",
        "prompt": "Which is a limitation of relying on wind alone?",
        "options": [
          "Output varies with weather",
          "Wind is a finite geological fuel",
          "It needs gas burned inside every rotor"
        ],
        "answer": 0,
        "why": "Variable supply requires system planning.",
        "concept": "geo.a.energy01.wind-variability"
      },
      {
        "id": "geo.a.energy01.wind.c2",
        "prompt": "Which claim about wind is justified?",
        "options": [
          "No fuel burning during operation; lifecycle impacts remain",
          "No emissions anywhere in its supply chain",
          "No materials are required"
        ],
        "answer": 0,
        "why": "Operation differs from manufacturing and construction.",
        "concept": "geo.a.energy01.wind-benefits"
      },
      {
        "id": "geo.a.energy01.wind.c3",
        "prompt": "An offshore proposal should consider…",
        "options": [
          "Marine habitats, connection, maintenance and delivered output",
          "Only whether the sea is blue",
          "No construction or maintenance costs"
        ],
        "answer": 0,
        "why": "Offshore siting has specific infrastructure and ecological tradeoffs.",
        "concept": "geo.a.energy01.wind-siting"
      },
      {
        "id": "geo.a.energy01.wind.c4",
        "prompt": "Stored electricity supports low-wind periods only if…",
        "options": [
          "Energy was charged earlier and storage capacity is available",
          "A battery creates unlimited new energy",
          "There is no grid or demand"
        ],
        "answer": 0,
        "why": "Storage shifts energy through time with limits and losses.",
        "concept": "geo.a.energy01.wind-variability"
      }
    ]
  },
  {
    "id": "geography.a.energy.uk-mix",
    "topicId": "geography.a.energy",
    "title": "Reading the UK energy mix",
    "refs": [
      "6.4a"
    ],
    "minutes": 30,
    "cards": [
      [
        "Name the mix and the year",
        "An energy mix is the proportions supplied by different sources within a defined energy account. Our DESNZ dataset, released in August 2026, shows 2025 inland primary energy consumption in million tonnes of oil equivalent (mtoe). It includes energy before conversion losses and excludes non-energy uses. Oil and gas are the largest categories in this account; it is not an electricity-only chart."
      ],
      [
        "Read grouped categories carefully",
        "The 2025 source cells show oil 63.02, gas 57.73, coal 1.22, primary electricity 20.06 and bioenergy/waste 20.44 mtoe: total 162.47. Primary electricity groups nuclear, wind, solar, hydro and net imports, so that entire category cannot be labelled renewable. Bioenergy/waste also requires care: not every waste component is renewable. Oil/gas/coal together are about 75.1% of this primary account."
      ],
      [
        "A share is not a quantity",
        "The matched 1990 and 2025 chart uses the same source categories. Coal fell from 66.90 to 1.22 mtoe. Gas rose from 51.17 to 57.73 mtoe while the total fell, so a share can rise more than the absolute quantity. Electricity is only one use of primary energy: heating and transport also matter. Compare the same year, units, accounting basis and category definitions; rounded chart shares may not sum to exactly 100%."
      ]
    ],
    "cardViews": [
      "mix",
      "groups",
      "history"
    ],
    "model": "dev-energy-uk-mix",
    "tasks": [
      [
        "What does the main 2025 chart measure?",
        [
          "Inland primary energy consumption, excluding non-energy uses",
          "Only electricity generated",
          "Energy cost in pounds"
        ],
        0
      ],
      [
        "The primary-electricity category includes nuclear and net imports. Can we label all of it renewable?",
        [
          "No: its grouped sources differ",
          "Yes: electricity is always renewable",
          "Yes: imports do not count"
        ],
        0
      ],
      [
        "Read the matched year chart. Which category has fallen most in absolute mtoe?",
        [
          "Coal",
          "Bioenergy & waste",
          "Gas"
        ],
        0
      ],
      [
        "A fuel’s amount stays steady while the total falls. Its share can…",
        [
          "Rise",
          "Only fall",
          "Never change"
        ],
        0
      ]
    ],
    "resourceOption": "energy",
    "practice": [
      {
        "id": "geo.a.energy01.uk-mix.p1",
        "prompt": "In the source’s 2025 primary account, which category is larger?",
        "options": [
          "Oil than gas",
          "Gas than oil",
          "Coal than oil"
        ],
        "answer": 0,
        "why": "Compare oil 63.02 with gas 57.73 mtoe.",
        "concept": "geo.a.energy01.uk-mix-reading",
        "energy01Evidence": "mix"
      },
      {
        "id": "geo.a.energy01.uk-mix.p2",
        "prompt": "Why is a renewable electricity percentage not the renewable share of all UK energy?",
        "options": [
          "The denominators and accounting systems differ",
          "Heat and transport never use energy",
          "All primary electricity is fossil"
        ],
        "answer": 0,
        "why": "Electricity generation is not the whole energy system.",
        "concept": "geo.a.energy01.uk-mix-basis"
      },
      {
        "id": "geo.a.energy01.uk-mix.p3",
        "prompt": "What must accompany an energy-mix percentage?",
        "options": [
          "Year, area, category definitions and denominator",
          "Only the colour",
          "Only the number of turbines"
        ],
        "answer": 0,
        "why": "Shares need their scope and definitions.",
        "concept": "geo.a.energy01.uk-mix-basis"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy01.uk-mix.c1",
        "prompt": "Read the 2025 source cells. Oil plus gas equals…",
        "options": [
          "120.75 mtoe",
          "63.02 mtoe",
          "20.06%"
        ],
        "answer": 0,
        "why": "63.02+57.73=120.75, retaining the quantity unit.",
        "concept": "geo.a.energy01.uk-mix-reading",
        "energy01Evidence": "mix"
      },
      {
        "id": "geo.a.energy01.uk-mix.c2",
        "prompt": "Which category includes nuclear, wind, solar, hydro and net imports?",
        "options": [
          "Primary electricity",
          "Only gas",
          "Only bioenergy & waste"
        ],
        "answer": 0,
        "why": "Read the official grouped-category definition.",
        "concept": "geo.a.energy01.uk-mix-groups",
        "energy01Evidence": "mix"
      },
      {
        "id": "geo.a.energy01.uk-mix.c3",
        "prompt": "Using the historical source table, the coal decrease is…",
        "options": [
          "65.68 mtoe",
          "1.22 mtoe",
          "66.90 percentage points"
        ],
        "answer": 0,
        "why": "66.90−1.22=65.68 mtoe, not percentage points.",
        "concept": "geo.a.energy01.uk-mix-change",
        "energy01Evidence": "history"
      },
      {
        "id": "geo.a.energy01.uk-mix.c4",
        "prompt": "Why can gas’s share rise more than its absolute quantity?",
        "options": [
          "The total energy denominator also decreased",
          "A share is always measured in mtoe",
          "Gas became renewable"
        ],
        "answer": 0,
        "why": "Changing totals affect percentages as well as fuel quantities.",
        "concept": "geo.a.energy01.uk-mix-change"
      }
    ]
  }
];
