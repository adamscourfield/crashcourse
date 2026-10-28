export const ukChallengesTopic={id:'geography.a.uk-challenges',title:'UK challenges',discipline:'Geographical investigations'};
export const ten03Lessons=[
  {
    "id": "geography.a.water.sustainable-use",
    "topicId": "geography.a.water",
    "title": "Keep water flowing for the future",
    "refs": [
      "6.12a"
    ],
    "minutes": 30,
    "cards": [
      [
        "Renewable does not mean unlimited",
        "Rain and recharge renew some freshwater, but usable flows and stored volumes are limited. Abstraction above recharge can lower groundwater storage, while pollution can reduce usable supply without changing total volume. Sustainable management considers future users and the water that ecosystems need, not only today’s withdrawals."
      ],
      [
        "Manage demand and supply together",
        "Leak repairs, efficient equipment and suitable irrigation can reduce withdrawals for an adequate service. Reuse can substitute for some new freshwater input; it does not create water. Storage, transfers and treatment can improve availability but carry costs and environmental effects. In a teaching aquifer,100 starting units plus 15 recharge minus 25 abstraction leave 90."
      ],
      [
        "Access and ecosystems matter",
        "An efficient system is not sustainable if basic needs are unmet or river habitats are damaged. Decisions need evidence on quantity, quality, costs, who benefits and who bears losses. Local actions interact with catchments and shared international rivers. Monitoring is needed because rainfall, demand and circumstances change."
      ]
    ],
    "cardViews": [
      "balance",
      "reuse",
      "criteria"
    ],
    "model": "dev-ten03-sustainable-use",
    "tasks": [
      [
        "An aquifer gains 15 and loses 25 teaching units. What happens to its store?",
        [
          "It falls by 10 units",
          "It rises by 10 units",
          "It stays constant because recharge exists"
        ],
        0
      ],
      [
        "If reuse replaces 30 units of a fixed 100-unit service, what fresh input remains?",
        [
          "70 units, under the stated assumptions",
          "130 units of newly created water",
          "30 units regardless of return flows"
        ],
        0
      ],
      [
        "Which is a loss-reduction action?",
        [
          "Repairing leaks in a supply main",
          "Abstracting more without a budget",
          "Counting polluted water as safe"
        ],
        0
      ],
      [
        "Which evidence belongs in a sustainability assessment?",
        [
          "Adequate access, environmental flows and future balances",
          "Only the largest current withdrawal",
          "Only the number of new pipes"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten03.sustainable-use.p1",
        "prompt": "Why may renewable water need limits on abstraction?",
        "options": [
          "Use can exceed replenishment",
          "Rain makes every aquifer unlimited",
          "Natural flows are always safe to drink"
        ],
        "answer": 0,
        "why": "A renewable flow can be overused and stored water can decline.",
        "concept": "geo.a.ten03.water-sustainability"
      },
      {
        "id": "geo.a.ten03.sustainable-use.p2",
        "prompt": "Why is reuse not a new natural source of water?",
        "options": [
          "It redirects an existing flow to another use",
          "It adds water molecules to Earth",
          "It eliminates every quality constraint"
        ],
        "answer": 0,
        "why": "Reuse can reduce fresh input under defined service and quality conditions.",
        "concept": "geo.a.ten03.water-reuse"
      },
      {
        "id": "geo.a.ten03.sustainable-use.p3",
        "prompt": "What can a volume-only account miss?",
        "options": [
          "Pollution, ecosystems and unequal access",
          "Only the name of the catchment",
          "The existence of a unit"
        ],
        "answer": 0,
        "why": "Usable water and fair services involve more than an aggregate volume.",
        "concept": "geo.a.ten03.water-sustainability"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten03.sustainable-use.c1",
        "prompt": "A teaching store starts 120, gains 18 and supplies 30. What remains?",
        "options": [
          "108 units",
          "132 units",
          "168 units"
        ],
        "answer": 0,
        "why": "120+18−30=108 under the stated balance.",
        "concept": "geo.a.ten03.water-balance"
      },
      {
        "id": "geo.a.ten03.sustainable-use.c2",
        "prompt": "A town cuts household use by leaving basic needs unmet. What follows?",
        "options": [
          "Lower use alone does not establish sustainability",
          "Every reduction proves sustainable management",
          "Equity is irrelevant to water services"
        ],
        "answer": 0,
        "why": "Adequate, accessible service is part of the evaluation.",
        "concept": "geo.a.ten03.water-sustainability"
      },
      {
        "id": "geo.a.ten03.sustainable-use.c3",
        "prompt": "Why retain an environmental-flow allowance?",
        "options": [
          "River and wetland ecosystems also depend on water",
          "All natural flow can always be abstracted",
          "It guarantees that rainfall will increase"
        ],
        "answer": 0,
        "why": "Usable human supply must consider ecological needs.",
        "concept": "geo.a.ten03.environmental-flows"
      },
      {
        "id": "geo.a.ten03.sustainable-use.c4",
        "prompt": "Which response fits changing rainfall and demand?",
        "options": [
          "Monitor balances and adapt the management plan",
          "Keep fixed withdrawals whatever changes",
          "Use a single wet day as the permanent baseline"
        ],
        "answer": 0,
        "why": "Sustainability needs continuing evidence and adaptation.",
        "concept": "geo.a.ten03.water-sustainability"
      }
    ],
    "resourceOption": "water"
  },
  {
    "id": "geography.a.water.management-views",
    "topicId": "geography.a.water",
    "title": "Compare ways to manage water",
    "refs": [
      "6.12b"
    ],
    "minutes": 30,
    "cards": [
      [
        "People can agree on goals but differ on methods",
        "A household may want reliable affordable water; a farmer may need predictable irrigation; a utility must operate infrastructure; a river group may prioritise ecological flows. Governments consider public services, food, investment and nature. These are possible interests, not fixed views held by every person in a group."
      ],
      [
        "Demand measures have conditions",
        "Leak reduction, efficient appliances and irrigation scheduling can reduce new withdrawals. Metering and prices may influence behaviour, but affordability, essential use and whether users control the equipment matter. Public information and practical support can help, while savings need measurement rather than assumption."
      ],
      [
        "Supply measures have tradeoffs",
        "Reservoirs, reuse, transfers and desalination can diversify supply but differ in energy, land, brine, cost and donor-catchment effects. Compare the same place, time and service level. A robust decision considers alternatives, affected groups and uncertainty, then explains who gains and who pays."
      ]
    ],
    "cardViews": [
      "roles",
      "demand",
      "supply"
    ],
    "model": "dev-ten03-management-views",
    "tasks": [
      [
        "Can two households weigh the same policy differently?",
        [
          "Yes: needs, control and costs can differ",
          "No: one role fixes a single view",
          "Only organisations can have values"
        ],
        0
      ],
      [
        "What strengthens a demand-reduction programme?",
        [
          "Practical support and adequate affordable service",
          "Assuming every user controls the building",
          "Counting a target as a measured saving"
        ],
        0
      ],
      [
        "What should a transfer assessment include?",
        [
          "Effects on both donor and recipient catchments",
          "Only benefits at the receiving tap",
          "Only the length of the pipeline"
        ],
        0
      ],
      [
        "What makes a comparison fair?",
        [
          "Matching service, period, costs and environmental criteria",
          "Comparing unrelated headline quantities",
          "Assuming consultation removes every disagreement"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten03.management-views.p1",
        "prompt": "Why might an efficient appliance scheme need financial support?",
        "options": [
          "Upfront cost can prevent participation",
          "Efficiency removes all upfront costs",
          "Every household has identical means"
        ],
        "answer": 0,
        "why": "Feasible participation depends on constraints as well as preferences.",
        "concept": "geo.a.ten03.management-views"
      },
      {
        "id": "geo.a.ten03.management-views.p2",
        "prompt": "Does a desalination target prove a sustainable water service?",
        "options": [
          "No: output, costs, access and impacts need evidence",
          "Yes: a capacity target is an observed outcome",
          "Yes: all saline feed is free to process"
        ],
        "answer": 0,
        "why": "Distinguish planned capacity from real adequate services.",
        "concept": "geo.a.ten03.management-evaluation"
      },
      {
        "id": "geo.a.ten03.management-views.p3",
        "prompt": "Why include an environmental organisation in consultation?",
        "options": [
          "It can contribute evidence about affected ecosystems",
          "It represents every resident’s opinion",
          "It can guarantee rainfall in a drought"
        ],
        "answer": 0,
        "why": "Relevant groups supply different evidence and interests.",
        "concept": "geo.a.ten03.management-views"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten03.management-views.c1",
        "prompt": "Which would best compare leak repair and new supply?",
        "options": [
          "Cost and reliable usable water saved or delivered over a common period",
          "Only the number of press releases",
          "Water saved per year versus installed power in MW"
        ],
        "answer": 0,
        "why": "Compare equivalent outcomes and definitions.",
        "concept": "geo.a.ten03.management-evaluation"
      },
      {
        "id": "geo.a.ten03.management-views.c2",
        "prompt": "A higher water price worries a low-income household. Which response tests the concern?",
        "options": [
          "Assess essential needs, affordability and available support",
          "Assume all opposition rejects conservation",
          "Ignore the household because its use is small"
        ],
        "answer": 0,
        "why": "Explain constraints without stereotyping a group.",
        "concept": "geo.a.ten03.management-views"
      },
      {
        "id": "geo.a.ten03.management-views.c3",
        "prompt": "Why may extra supply fail to close a long-term gap?",
        "options": [
          "Demand can grow or the source can become constrained",
          "Every new source is permanently unlimited",
          "Treatment capacity guarantees all future rainfall"
        ],
        "answer": 0,
        "why": "Assess future balances and uncertainty as well as present infrastructure.",
        "concept": "geo.a.ten03.management-evaluation"
      },
      {
        "id": "geo.a.ten03.management-views.c4",
        "prompt": "What should a justified decision acknowledge?",
        "options": [
          "Tradeoffs, affected users and remaining uncertainty",
          "Only arguments supporting one preferred option",
          "That all consultation guarantees agreement"
        ],
        "answer": 0,
        "why": "Selected responses identify components of judgement; a full written argument remains separate.",
        "concept": "geo.a.ten03.management-evaluation"
      }
    ],
    "resourceOption": "water"
  },
  {
    "id": "geography.a.water.developed-case",
    "topicId": "geography.a.water",
    "title": "Singapore: diversify and reuse",
    "refs": [
      "6.12c"
    ],
    "minutes": 30,
    "cards": [
      [
        "A wet island can still face water pressure",
        "Singapore has high rainfall but limited land for catchment and storage, with concentrated household and industrial demand. PUB’s Four National Taps combine local catchment water, imported water, NEWater and desalinated water. Diversification reduces reliance on one source, but each tap has constraints. The locator marks Singapore approximately, not the footprint of a water project."
      ],
      [
        "Close part of the water loop",
        "Used water is collected and treated; NEWater receives further advanced treatment for suitable uses, especially industry, with some indirect potable use through reservoirs. Treatment and reuse can reduce pressure for new inputs. Safe standards, maintenance, energy and reliable networks remain essential. It is not an unlimited closed loop without losses."
      ],
      [
        "Read progress critically",
        "PUB’s 2024/25 report gives household use of 149,141 and 142 litres/person/day for calendar 2022,2023 and 2024. The 2024 increase means this short series is not a steady annual decline. Potable-network distribution loss fell from 7.5% to 7.1%; the denominator differs from household litres. A 2030 target of 130 litres is a target, not an achieved observation. Efficiency, water pricing and public participation complement supply diversification."
      ]
    ],
    "cardViews": [
      "map",
      "reuse",
      "evidence"
    ],
    "model": "dev-ten03-developed-case",
    "tasks": [
      [
        "Why can Singapore be water-constrained despite rainfall?",
        [
          "Limited catchment/storage land and concentrated demand",
          "All rain there is saline",
          "Wet climates remove every delivery constraint"
        ],
        0
      ],
      [
        "What does NEWater add to the strategy?",
        [
          "Advanced treatment and reuse of existing used-water flows",
          "A natural aquifer with unlimited recharge",
          "A system requiring no energy or upkeep"
        ],
        0
      ],
      [
        "What happened to household litres/person/day from 2023 to 2024?",
        [
          "It increased by 1 litre",
          "It fell by 12 litres",
          "It reached the 130-litre target"
        ],
        0
      ],
      [
        "What is needed to evaluate the whole strategy?",
        [
          "Reliability, access, costs, energy and source constraints",
          "Only one target or one output headline",
          "Adding litres/person/day to distribution-loss percent"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten03.developed-case.p1",
        "prompt": "Are the Four Taps four unlimited natural freshwater sources?",
        "options": [
          "No: they combine sources with different constraints",
          "Yes: all are rainfall-independent and free",
          "Yes: four taps guarantee no future pressure"
        ],
        "answer": 0,
        "why": "Catchments, imports, reuse and desalination have distinct dependencies.",
        "concept": "geo.a.ten03.singapore-strategy"
      },
      {
        "id": "geo.a.ten03.developed-case.p2",
        "prompt": "Using displayed values, how did distribution loss change from 2022 to 2024?",
        "options": [
          "It fell by 0.4 percentage points",
          "It fell by 0.4 litres/person/day",
          "It rose by 7.1 percentage points"
        ],
        "answer": 0,
        "why": "7.5−7.1=0.4 percentage points; preserve the percentage denominator.",
        "concept": "geo.a.ten03.singapore-evidence",
        "ten03Evidence": "singapore"
      },
      {
        "id": "geo.a.ten03.developed-case.p3",
        "prompt": "Why assess energy use in advanced treatment?",
        "options": [
          "Reliable recycled supply still has operating impacts and costs",
          "Recycling creates energy automatically",
          "Only untreated sources require any maintenance"
        ],
        "answer": 0,
        "why": "Diversification can improve resilience while carrying tradeoffs.",
        "concept": "geo.a.ten03.singapore-strategy"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten03.developed-case.c1",
        "prompt": "What change occurred in household use from 2022 to 2024?",
        "options": [
          "A fall of 7 litres/person/day",
          "A fall of 19 litres/person/day",
          "A rise of 7 litres/person/day"
        ],
        "answer": 0,
        "why": "149−142=7; the intermediate point does not establish a steady decline.",
        "concept": "geo.a.ten03.singapore-evidence",
        "ten03Evidence": "singapore"
      },
      {
        "id": "geo.a.ten03.developed-case.c2",
        "prompt": "What does the 130-litre value represent?",
        "options": [
          "A household-use target for 2030",
          "The measured household value for 2024",
          "The percentage of potable-network loss"
        ],
        "answer": 0,
        "why": "Keep targets and observations distinct.",
        "concept": "geo.a.ten03.singapore-evidence",
        "ten03Evidence": "singapore"
      },
      {
        "id": "geo.a.ten03.developed-case.c3",
        "prompt": "Why is reuse paired with demand management?",
        "options": [
          "Reducing required fresh input and controlling demand address different parts of the balance",
          "Reuse makes demand irrelevant",
          "Pricing can replace all treatment infrastructure"
        ],
        "answer": 0,
        "why": "A strategy combines adequate services, efficient use and resilient sources.",
        "concept": "geo.a.ten03.singapore-strategy"
      },
      {
        "id": "geo.a.ten03.developed-case.c4",
        "prompt": "Which would overstate the evidence?",
        "options": [
          "The short PUB series proves every household’s access and all environmental impacts improved",
          "PUB reports household litres/person/day by calendar year",
          "The strategy has multiple source and demand measures"
        ],
        "answer": 0,
        "why": "Selected indicators do not establish every outcome or causal effect.",
        "concept": "geo.a.ten03.singapore-evidence"
      }
    ],
    "resourceOption": "water"
  },
  {
    "id": "geography.a.water.emerging-case",
    "topicId": "geography.a.water",
    "title": "India: manage groundwater together",
    "refs": [
      "6.12c"
    ],
    "minutes": 30,
    "cards": [
      [
        "Make the groundwater budget visible",
        "India’s Atal Bhujal Yojana is a community-led groundwater management attempt focused on demand as well as recharge. A Ministry of Jal Shakti release dated 7August 2025 reports coverage in 80 water-stressed districts across 7 states, with groundwater data disclosed across 8203 Gram Panchayats. These are programme-area figures, not every village in India or proof of national recovery."
      ],
      [
        "Link evidence to collective action",
        "Communities prepare water budgets and water-security plans, supported by monitoring and training. Possible actions include crop planning, suitable micro-irrigation and recharge works. Demand reductions matter where abstraction exceeds replenishment. A recharge structure does not guarantee recharge during low rainfall, and efficiency savings may be offset if irrigated area expands."
      ],
      [
        "Separate plans from measured recovery",
        "Maharashtra reports plans for 1133 Gram Panchayats and improved extraction rates in 71 of 73 assessed watersheds when comparing 2023 and 2024. A plan count is an administrative output; an extraction-rate comparison is different evidence. Neither proves every well level rose or that the scheme alone caused change. Rainfall, implementation, equity and later monitoring remain part of evaluation."
      ]
    ],
    "cardViews": [
      "map",
      "planning",
      "evidence"
    ],
    "model": "dev-ten03-emerging-case",
    "tasks": [
      [
        "What does 8203 describe in the dated national release?",
        [
          "Gram Panchayats in the programme’s disclosure coverage",
          "All villages in India with recovered aquifers",
          "A measured rise in groundwater metres"
        ],
        0
      ],
      [
        "Why link abstraction decisions to a water budget?",
        [
          "To compare use with available flows and stored water",
          "To guarantee a fixed monsoon every year",
          "To replace all monitoring with a target"
        ],
        0
      ],
      [
        "What does the Maharashtra 71-of 73 result describe?",
        [
          "Reported improvement in extraction rates across assessed watersheds",
          "Proof every well in India gained water",
          "The proportion of all Indian households with taps"
        ],
        0
      ],
      [
        "Which evidence best tests lasting management success?",
        [
          "Repeated groundwater, use and rainfall records with distributional effects",
          "Only the number of written plans",
          "Only a single photograph of a recharge structure"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten03.emerging-case.p1",
        "prompt": "Why may recharge works alone be insufficient?",
        "options": [
          "Abstraction may still exceed replenishment",
          "Every structure creates water without rain",
          "Demand never responds to irrigation expansion"
        ],
        "answer": 0,
        "why": "Management must consider both supply and use.",
        "concept": "geo.a.ten03.india-water-management"
      },
      {
        "id": "geo.a.ten03.emerging-case.p2",
        "prompt": "Are 1133 completed plans proof of 1133 recovered aquifers?",
        "options": [
          "No: plan preparation and hydrological outcomes differ",
          "Yes: a document count is a water-level measurement",
          "Yes: rainfall and use are fixed"
        ],
        "answer": 0,
        "why": "Use administrative outputs and environmental outcomes appropriately.",
        "concept": "geo.a.ten03.india-water-evidence",
        "ten03Evidence": "india"
      },
      {
        "id": "geo.a.ten03.emerging-case.p3",
        "prompt": "Why consider who can participate in planning?",
        "options": [
          "Benefits and costs may differ across users and livelihoods",
          "Participation guarantees unanimous agreement",
          "Only the largest pump owner is affected"
        ],
        "answer": 0,
        "why": "Community management still needs inclusive participation and attention to equity.",
        "concept": "geo.a.ten03.india-water-management"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten03.emerging-case.c1",
        "prompt": "How many of the 73 assessed watersheds were outside the reported 71 improved group?",
        "options": [
          "2 watersheds",
          "144 watersheds",
          "71% of all Indian watersheds"
        ],
        "answer": 0,
        "why": "73−71=2 within this state assessment, not a national recovery estimate.",
        "concept": "geo.a.ten03.india-water-evidence",
        "ten03Evidence": "india"
      },
      {
        "id": "geo.a.ten03.emerging-case.c2",
        "prompt": "Which action addresses demand directly?",
        "options": [
          "Plan crops and irrigation around available water",
          "Assume every new well has unlimited recharge",
          "Count a new monitoring device as saved water"
        ],
        "answer": 0,
        "why": "Demand-side actions complement monitoring and recharge.",
        "concept": "geo.a.ten03.india-water-management"
      },
      {
        "id": "geo.a.ten03.emerging-case.c3",
        "prompt": "Why does the state comparison not prove scheme-only causation?",
        "options": [
          "Rainfall, pumping and other changes can also influence the outcome",
          "All observations are therefore useless",
          "Programme coverage is identical to rainfall"
        ],
        "answer": 0,
        "why": "Dated observations are useful but need context and appropriate causal claims.",
        "concept": "geo.a.ten03.india-water-evidence"
      },
      {
        "id": "geo.a.ten03.emerging-case.c4",
        "prompt": "Which accurately compares Singapore and this Indian programme?",
        "options": [
          "Both combine management measures, but settings, institutions and indicators differ",
          "Both have identical sources and measured outcomes",
          "One indicator can rank every sustainability dimension"
        ],
        "answer": 0,
        "why": "Compare purposes and limitations without treating unlike indicators as a universal score.",
        "concept": "geo.a.ten03.water-case-comparison"
      }
    ],
    "resourceOption": "water"
  },
  {
    "id": "geography.a.uk-challenges.population-resources",
    "topicId": "geography.a.uk-challenges",
    "title": "Plan for a changing UK population",
    "refs": [
      "8.1a"
    ],
    "minutes": 30,
    "cards": [
      [
        "A projection is conditional",
        "Over the next 50 years, the number, age and distribution of UK residents will affect homes, food, water, energy and services. ONS 2024-based projections use assumptions about births, deaths and migration. Their principal path rises from 69.281 million in 2024 to 72.410 million in 2049, peaks around 72.5 million in 2054 and then declines. It is not a forecast that every place will grow continuously."
      ],
      [
        "Use a range and the right horizon",
        "Alternative assumptions produce different population paths. ONS 2049 low/high population variants are 66.8 million and 81.3 million; these are scenarios, not probability bounds. Our numerical line uses selected 2024–2049 points, not an invented 2074 value. Planning over the longer horizon needs updated scenarios and attention to ageing as well as total population."
      ],
      [
        "People times resource intensity",
        "Resource pressure depends on population and the amount used per person, with household size, technology, income and planning also important. An invented 10 million people at 4 units each use 40 million;12 million at 3 units use 36 million. A growing population need not raise every resource total if intensity falls enough. Such arithmetic is a conditional example, not an ONS resource forecast."
      ]
    ],
    "cardViews": [
      "projection",
      "variants",
      "intensity"
    ],
    "model": "dev-ten03-population-resources",
    "tasks": [
      [
        "What makes the ONS path conditional?",
        [
          "Its fertility, mortality and migration assumptions",
          "Its use of a date on the axis",
          "Its being an observation from 2049"
        ],
        0
      ],
      [
        "Do the 2049 variant points provide guaranteed upper and lower bounds?",
        [
          "No: they illustrate alternative assumptions",
          "Yes: every future must lie inside them",
          "Yes: they are measured probabilities"
        ],
        0
      ],
      [
        "10 million people use 4 units each;12 million use 3. What changes?",
        [
          "Total use falls 40→36 million units",
          "Total use rises 40→48 million automatically",
          "Only the population label changes"
        ],
        0
      ],
      [
        "Why not extend the selected line at a fixed rate to 2074?",
        [
          "The principal path itself changes direction and assumptions are uncertain",
          "A chart ending 2049 proves the same rate forever",
          "All future age structures are identical"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten03.population-resources.p1",
        "prompt": "Which is the 2024-based principal value shown for 2049?",
        "options": [
          "72.410 million people",
          "72.410 million units of water",
          "72.410% growth"
        ],
        "answer": 0,
        "why": "The line shows a dated population projection with units of million people.",
        "concept": "geo.a.ten03.uk-projections",
        "ten03Evidence": "population"
      },
      {
        "id": "geo.a.ten03.population-resources.p2",
        "prompt": "What can ageing change even with little total growth?",
        "options": [
          "The types and locations of service demand",
          "Only the national land area",
          "Nothing about resource or service needs"
        ],
        "answer": 0,
        "why": "Age structure influences health, housing and other service requirements.",
        "concept": "geo.a.ten03.uk-projections"
      },
      {
        "id": "geo.a.ten03.population-resources.p3",
        "prompt": "When could total use fall despite more residents?",
        "options": [
          "If use per person falls sufficiently",
          "Only if every resident leaves",
          "If per-person use rises at the same time"
        ],
        "answer": 0,
        "why": "Total use depends on both factors.",
        "concept": "geo.a.ten03.resource-intensity"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten03.population-resources.c1",
        "prompt": "An invented 15 million people use 6 units each, then 18 million use 4. What happens to total use?",
        "options": [
          "90→72 million units",
          "90→108 million units",
          "15→18 units"
        ],
        "answer": 0,
        "why": "15×6=90 and 18×4=72; these are illustrative assumptions.",
        "concept": "geo.a.ten03.resource-intensity"
      },
      {
        "id": "geo.a.ten03.population-resources.c2",
        "prompt": "What is the gap between the displayed 2049 high and low population variants?",
        "options": [
          "14.5 million people",
          "2.5 million people",
          "14.5percentage points"
        ],
        "answer": 0,
        "why": "81.3−66.8=14.5 million, not a probability interval.",
        "concept": "geo.a.ten03.uk-projections",
        "ten03Evidence": "variants"
      },
      {
        "id": "geo.a.ten03.population-resources.c3",
        "prompt": "Which conclusion fits the principal path’s 2054 peak?",
        "options": [
          "Continuous growth for the whole next 50 years should not be assumed",
          "Every region must grow until 2074",
          "Future service demand is therefore zero"
        ],
        "answer": 0,
        "why": "Planning must allow changing direction, age structure and uncertainty.",
        "concept": "geo.a.ten03.uk-projections"
      },
      {
        "id": "geo.a.ten03.population-resources.c4",
        "prompt": "Which additional evidence helps a local resource plan?",
        "options": [
          "Local population scenarios, service needs and resource intensity",
          "Only the national population total",
          "Only a single historical birth count"
        ],
        "answer": 0,
        "why": "National totals alone do not locate or quantify every local pressure.",
        "concept": "geo.a.ten03.resource-intensity"
      }
    ]
  },
  {
    "id": "geography.a.uk-challenges.ecosystem-pressure",
    "topicId": "geography.a.uk-challenges",
    "title": "Population pressure and UK ecosystems",
    "refs": [
      "8.1b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Land take can break connections",
        "New homes, roads and services can remove habitat or divide it into smaller patches. Fragmentation may limit movement, feeding and breeding. Effects depend on where development occurs, the habitat and the species; population growth is not the only cause. Reusing suitable sites and protecting important habitat can reduce some pressures."
      ],
      [
        "Pressure travels through water and air",
        "More activity can increase abstraction, wastewater, runoff, emissions and recreation unless demand and impacts are managed. A pressure can affect places beyond its source: polluted runoff moves downstream, while reduced flows can stress river ecosystems. These are causal pathways, not a claim that every extra resident has the same impact."
      ],
      [
        "Plan, connect and monitor",
        "Avoiding sensitive sites, retaining habitat networks, managing access and improving water systems can help. A corridor may improve connection but does not automatically replace lost habitat or benefit every species. JNCC’s biodiversity indicators provide dated evidence on change; a teaching animation is not a measured national population-impact percentage."
      ]
    ],
    "cardViews": [
      "fragment",
      "pollution",
      "corridor"
    ],
    "model": "dev-ten03-ecosystem-pressure",
    "tasks": [
      [
        "What changes when a road divides a habitat patch?",
        [
          "Connectivity and movement may be reduced",
          "All habitat quality stays identical",
          "Every species is affected in exactly the same way"
        ],
        0
      ],
      [
        "How can a pressure travel beyond a settlement?",
        [
          "Runoff and reduced flows can affect downstream ecosystems",
          "Only a map label can move",
          "All pollution stops at a district boundary"
        ],
        0
      ],
      [
        "What might a suitable habitat corridor improve?",
        [
          "Movement between some habitat patches",
          "Guaranteed recovery of every species",
          "Automatic replacement of all lost habitat"
        ],
        0
      ],
      [
        "What makes an impact evaluation stronger?",
        [
          "Before/after evidence with other causes and species considered",
          "Only counting the new residents",
          "Treating the simulation as a national field survey"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten03.ecosystem-pressure.p1",
        "prompt": "Why is habitat area alone insufficient?",
        "options": [
          "Connections and habitat quality also matter",
          "Patch arrangement never affects movement",
          "All species use the same habitat equally"
        ],
        "answer": 0,
        "why": "Area, quality and connectivity interact.",
        "concept": "geo.a.ten03.ecosystem-pressure"
      },
      {
        "id": "geo.a.ten03.ecosystem-pressure.p2",
        "prompt": "Could rising population coexist with lower water pressure per person?",
        "options": [
          "Yes: service efficiency and planning can change intensity",
          "No: every person has an identical fixed effect",
          "Only if all treatment stops"
        ],
        "answer": 0,
        "why": "Evaluate mechanisms and policies rather than population alone.",
        "concept": "geo.a.ten03.ecosystem-pressure"
      },
      {
        "id": "geo.a.ten03.ecosystem-pressure.p3",
        "prompt": "Why monitor a corridor after construction?",
        "options": [
          "Its actual ecological effects may differ from the plan",
          "All corridors guarantee the same recovery",
          "Monitoring creates habitat automatically"
        ],
        "answer": 0,
        "why": "Interventions need evidence of implementation and outcomes.",
        "concept": "geo.a.ten03.ecosystem-response"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten03.ecosystem-pressure.c1",
        "prompt": "Which chain is geographically plausible?",
        "options": [
          "More impermeable surface→runoff change→downstream habitat pressure",
          "More homes→automatic rise in every wildlife population",
          "A district border→all water flow stops"
        ],
        "answer": 0,
        "why": "Explain the mechanism and check local conditions.",
        "concept": "geo.a.ten03.ecosystem-pressure"
      },
      {
        "id": "geo.a.ten03.ecosystem-pressure.c2",
        "prompt": "Why might brownfield reuse still need ecological assessment?",
        "options": [
          "Previously used land can support valuable habitats",
          "Previously used land never contains wildlife",
          "Only green fields can have ecological value"
        ],
        "answer": 0,
        "why": "Site history does not establish present habitat value.",
        "concept": "geo.a.ten03.ecosystem-response"
      },
      {
        "id": "geo.a.ten03.ecosystem-pressure.c3",
        "prompt": "Which strategy best protects a sensitive habitat network?",
        "options": [
          "Assess alternatives and avoid fragmentation before relying on mitigation",
          "Build first and assume a small corridor replaces everything",
          "Measure only the number of residents"
        ],
        "answer": 0,
        "why": "Avoidance and evidence-led planning can prevent damage that mitigation cannot fully replace.",
        "concept": "geo.a.ten03.ecosystem-response"
      },
      {
        "id": "geo.a.ten03.ecosystem-pressure.c4",
        "prompt": "What could test a claimed population-driven biodiversity decline?",
        "options": [
          "Species/habitat trends, land-use changes and alternative pressures",
          "Only a population total and a correlation",
          "Only a developer’s prediction"
        ],
        "answer": 0,
        "why": "A causal explanation needs more than two changing totals.",
        "concept": "geo.a.ten03.ecosystem-pressure"
      }
    ]
  },
  {
    "id": "geography.a.uk-challenges.transport",
    "topicId": "geography.a.uk-challenges",
    "title": "Choose sustainable transport for the UK",
    "refs": [
      "8.1c"
    ],
    "minutes": 30,
    "cards": [
      [
        "A national range, not one universal mode",
        "Walking and cycling can suit some short journeys; accessible buses and rail can move many people, while interchange and reliable services connect trips. Rural distances, disability, cost, safety and service frequency affect feasible choices. National sustainable transport includes passenger and freight options and reducing unnecessary travel, not simply replacing every car with one mode."
      ],
      [
        "Occupancy and the system matter",
        "Compare emissions or energy per passenger over the same journey and boundary. A vehicle producing 80teaching units with 40 passengers averages 2each; with 10 passengers it averages 8. These are invented values, not a real bus or car factor. Walking/cycling infrastructure, integrated timetables and freight shift can help when appropriate; actual results depend on service and demand."
      ],
      [
        "Consider the full impacts",
        "Electric vehicles remove tailpipe exhaust but still have electricity, vehicle manufacture, battery, road-space and tyre impacts. Rail and bus also need infrastructure and energy. DESNZ’s provisional 2025 account assigns 31% of UK territorial greenhouse-gas emissions to domestic transport, excluding international aviation/shipping. That sector share is not a per-passenger comparison or a lifecycle footprint."
      ]
    ],
    "cardViews": [
      "options",
      "occupancy",
      "tradeoffs"
    ],
    "model": "dev-ten03-transport",
    "tasks": [
      [
        "Why offer several national transport options?",
        [
          "Journey needs and feasible access differ",
          "One mode serves every place equally",
          "Only city commuters need mobility"
        ],
        0
      ],
      [
        "80 vehicle units shared by 40 passengers give what average?",
        [
          "2 units per passenger",
          "40 units per passenger",
          "3200 units per passenger"
        ],
        0
      ],
      [
        "Does an electric vehicle have no environmental impacts?",
        [
          "No: lifecycle, electricity and non-exhaust effects remain",
          "Yes: no tailpipe means no impacts",
          "Yes: roads and batteries have no impacts"
        ],
        0
      ],
      [
        "What does the 31% source figure describe?",
        [
          "Domestic transport’s share of a territorial 2025 account",
          "Rail’s lifecycle emissions per passenger",
          "International aviation and shipping alone"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten03.transport.p1",
        "prompt": "Why might a rural resident need different options from an inner-city resident?",
        "options": [
          "Distance and service availability can differ",
          "Every resident has the same journey",
          "Only income determines every journey"
        ],
        "answer": 0,
        "why": "Sustainable choices must be feasible and accessible.",
        "concept": "geo.a.ten03.transport-access"
      },
      {
        "id": "geo.a.ten03.transport.p2",
        "prompt": "Why compare per passenger rather than vehicle alone?",
        "options": [
          "Occupancy changes the impact allocated to each traveller",
          "A vehicle always carries one person",
          "Passenger numbers determine all lifecycle emissions"
        ],
        "answer": 0,
        "why": "Use consistent denominators and account boundaries.",
        "concept": "geo.a.ten03.transport-comparison"
      },
      {
        "id": "geo.a.ten03.transport.p3",
        "prompt": "Does the domestic-sector share include international flights?",
        "options": [
          "No: international aviation/shipping are excluded",
          "Yes: it measures every journey worldwide",
          "Only if the flight uses a UK airport"
        ],
        "answer": 0,
        "why": "Retain the territorial domestic definition and provisional date.",
        "concept": "geo.a.ten03.transport-evidence",
        "ten03Evidence": "transport"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten03.transport.c1",
        "prompt": "A teaching service emits 120 units for 30 passengers. Average per passenger?",
        "options": [
          "4 units",
          "90 units",
          "150 units"
        ],
        "answer": 0,
        "why": "120/30=4 under the stated boundary.",
        "concept": "geo.a.ten03.transport-comparison"
      },
      {
        "id": "geo.a.ten03.transport.c2",
        "prompt": "Which helps make a rail-to-bus journey viable?",
        "options": [
          "Reliable connections, accessible stops and affordable fares",
          "Only a station with no onward service",
          "Ignoring the traveller’s access needs"
        ],
        "answer": 0,
        "why": "A sustainable network must support the whole journey.",
        "concept": "geo.a.ten03.transport-access"
      },
      {
        "id": "geo.a.ten03.transport.c3",
        "prompt": "Which comparison is strongest?",
        "options": [
          "Equivalent journeys with occupancy, energy source and lifecycle boundary stated",
          "Tailpipe car emissions versus full rail lifecycle without explanation",
          "Vehicle totals with passenger numbers omitted"
        ],
        "answer": 0,
        "why": "Compare like-for-like quantities and disclose assumptions.",
        "concept": "geo.a.ten03.transport-comparison"
      },
      {
        "id": "geo.a.ten03.transport.c4",
        "prompt": "What would overstate the 31% figure?",
        "options": [
          "It proves every bus journey is cleaner than every car journey",
          "It is a provisional 2025 domestic territorial share",
          "International aviation and shipping are outside this sector definition"
        ],
        "answer": 0,
        "why": "An aggregate sector share cannot establish all mode/journey comparisons.",
        "concept": "geo.a.ten03.transport-evidence",
        "ten03Evidence": "transport"
      }
    ]
  },
  {
    "id": "geography.a.uk-challenges.regional-economy",
    "topicId": "geography.a.uk-challenges",
    "title": "Bridge the UK’s economic gaps",
    "refs": [
      "8.2a"
    ],
    "minutes": 30,
    "cards": [
      [
        "The “two-speed” idea is a simplification",
        "London and the South East concentrate high-value jobs, investment and connections, while some other areas face weaker opportunities after industrial change. Yet every region contains variation, and some places outside the south east prosper. ONS provisional 2024 GDHI per head is£36,487 in London,£29,577 in South East and£20,562 in North East, versus£25,965 for UK. These are averages, not every household’s income."
      ],
      [
        "Why advantage can reinforce itself",
        "Connections, skills, firms, finance and research can attract further jobs and investment. Other areas may face lost industries, poor connectivity or skills mismatches. This is a possible cumulative mechanism, not proof that one cause explains every regional gap. Housing costs, inequality, environmental quality and access to services also influence quality of life."
      ],
      [
        "Bridging takes connected measures",
        "Transport and digital links, education/training, local business support and regeneration can widen opportunities. Their success depends on local needs, access, funding and delivery; investment can also displace residents or benefit commuters more than existing communities. GDHI is money available to spend/save after distribution measures, not wages, GDP or income after all living costs."
      ]
    ],
    "cardViews": [
      "income",
      "cycle",
      "bridges"
    ],
    "model": "dev-ten03-regional-economy",
    "tasks": [
      [
        "What is the denominator of GDHI per head?",
        [
          "People in the region’s population",
          "Only workers in one firm",
          "Only households above the median"
        ],
        0
      ],
      [
        "How can advantage reinforce itself?",
        [
          "Skills and connections attract activity that can support further investment",
          "Every investment benefits all places equally",
          "Higher income removes all housing pressures"
        ],
        0
      ],
      [
        "Which plan better tests a regional intervention?",
        [
          "Match local barriers with access, delivery and outcome evidence",
          "Assume one railway guarantees equal incomes",
          "Measure only the announced spending"
        ],
        0
      ],
      [
        "What does a regional average hide?",
        [
          "Differences within the region and among households",
          "Only the regional name",
          "The existence of all resource needs"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten03.regional-economy.p1",
        "prompt": "Which displayed region has the highest 2024 GDHI per head?",
        "options": [
          "London",
          "North East",
          "South East"
        ],
        "answer": 0,
        "why": "Use the dated comparable indicator, not a universal quality-of-life ranking.",
        "concept": "geo.a.ten03.regional-evidence",
        "ten03Evidence": "income"
      },
      {
        "id": "geo.a.ten03.regional-economy.p2",
        "prompt": "Why can transport investment need a skills programme too?",
        "options": [
          "Connections alone may not remove barriers to available jobs",
          "Transport creates every required qualification",
          "Skills never affect local opportunity"
        ],
        "answer": 0,
        "why": "Barriers interact, so connected measures can be appropriate.",
        "concept": "geo.a.ten03.regional-management"
      },
      {
        "id": "geo.a.ten03.regional-economy.p3",
        "prompt": "Does high GDHI per head prove cheap housing or equal incomes?",
        "options": [
          "No: housing costs and distribution require separate evidence",
          "Yes: it is measured after all household bills",
          "Yes: every person receives the average"
        ],
        "answer": 0,
        "why": "The indicator has a specific definition and hides within-region variation.",
        "concept": "geo.a.ten03.regional-evidence"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten03.regional-economy.c1",
        "prompt": "What is the displayed GDHI-per-head gap between South East and North East?",
        "options": [
          "£9,015",
          "£15,925",
          "9,015percentage points"
        ],
        "answer": 0,
        "why": "29,577−20,562=9,015 pounds per head in the stated account.",
        "concept": "geo.a.ten03.regional-evidence",
        "ten03Evidence": "income"
      },
      {
        "id": "geo.a.ten03.regional-economy.c2",
        "prompt": "Which would challenge a rigid north/south stereotype?",
        "options": [
          "Strong and weak local economies can occur within the same broad region",
          "Every southern household is wealthy",
          "Every northern place has identical industries"
        ],
        "answer": 0,
        "why": "Broad labels do not describe every place or resident.",
        "concept": "geo.a.ten03.regional-evidence"
      },
      {
        "id": "geo.a.ten03.regional-economy.c3",
        "prompt": "What best evaluates a regeneration programme?",
        "options": [
          "Local access to jobs, wages/services, displacement and environmental effects",
          "Only the headline budget",
          "Only changes among incoming high earners"
        ],
        "answer": 0,
        "why": "Assess who benefits and which outcomes actually change.",
        "concept": "geo.a.ten03.regional-management"
      },
      {
        "id": "geo.a.ten03.regional-economy.c4",
        "prompt": "Why is GDHI not the same as GDP?",
        "options": [
          "It measures household-sector disposable income rather than production output",
          "Both always measure identical values",
          "GDHI is only the wage of employed adults"
        ],
        "answer": 0,
        "why": "Keep measures, denominators and purposes distinct.",
        "concept": "geo.a.ten03.regional-evidence"
      }
    ]
  },
  {
    "id": "geography.a.uk-challenges.development-sites",
    "topicId": "geography.a.uk-challenges",
    "title": "Greenfield or brownfield?",
    "refs": [
      "8.2b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Different starting conditions",
        "Greenfield development uses land not previously developed; brownfield regeneration reuses previously developed land. Greenfield sites may offer space and simpler layouts but can remove habitat, farmland and open space, extend infrastructure and encourage travel. These are possible costs, not a statement that every greenfield site has the same value or constraints."
      ],
      [
        "Reuse has opportunities and costs",
        "Brownfield reuse can reduce new land take and use existing connections, revive derelict areas and create homes or jobs. Some sites need costly remediation or demolition, have fragmented ownership or weak infrastructure. Previously used sites can also support biodiversity, and regeneration may raise costs for residents. Assess actual conditions instead of assuming all brownfield is cheap, empty or ecologically barren."
      ],
      [
        "Choose for the actual place",
        "Compare housing/employment needs, ecology, contamination, flood risk, transport, infrastructure, costs and delivery. Scotland’s NPF 4 recognises sustainable reuse and the biodiversity value of naturalised brownfield land; it is a Scottish policy context, not a UK-wide automatic permission rule. Hypothetical cost bars in this lesson are invented and do not value every environmental or social effect."
      ]
    ],
    "cardViews": [
      "sites",
      "remediate",
      "costs"
    ],
    "model": "dev-ten03-development-sites",
    "tasks": [
      [
        "What defines brownfield land here?",
        [
          "Previously developed land",
          "Any land currently coloured brown",
          "Only land with no wildlife"
        ],
        0
      ],
      [
        "Why might remediation be needed before reuse?",
        [
          "Past uses may have left risks that need assessment and treatment",
          "All brownfield is automatically safe",
          "Remediation removes every cost of a project"
        ],
        0
      ],
      [
        "A toy site costs 20 acquisition+30 cleanup+50 infrastructure. Total?",
        [
          "100teaching units",
          "50teaching units",
          "150teaching units"
        ],
        0
      ],
      [
        "What belongs alongside a cost comparison?",
        [
          "Ecology, access, risk, delivery and effects on residents",
          "Only the lowest monetary total",
          "A guarantee that every site is identical"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten03.development-sites.p1",
        "prompt": "Can brownfield reuse reduce pressure on undeveloped land?",
        "options": [
          "Yes, when suitable reuse meets needs",
          "No, reuse always needs more new land",
          "Only if the site has no ecological value"
        ],
        "answer": 0,
        "why": "Reuse can reduce land take, but suitability and impacts still require assessment.",
        "concept": "geo.a.ten03.site-tradeoffs"
      },
      {
        "id": "geo.a.ten03.development-sites.p2",
        "prompt": "Why is a wildlife survey relevant on a former industrial site?",
        "options": [
          "Naturalised brownfield can support valuable habitats",
          "Only farmland can contain wildlife",
          "Past use proves there is no biodiversity"
        ],
        "answer": 0,
        "why": "Ecological value depends on current site conditions.",
        "concept": "geo.a.ten03.site-tradeoffs"
      },
      {
        "id": "geo.a.ten03.development-sites.p3",
        "prompt": "Does a Scottish planning-policy example apply unchanged to all UK nations?",
        "options": [
          "No: planning systems and local conditions differ",
          "Yes: one policy is automatic permission everywhere",
          "Only if the site is near a motorway"
        ],
        "answer": 0,
        "why": "Use jurisdiction and policy context accurately.",
        "concept": "geo.a.ten03.site-evaluation"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten03.development-sites.c1",
        "prompt": "A toy brownfield budget is 15land+25 cleanup+40works. What is the total?",
        "options": [
          "80 units",
          "65 units",
          "100 units"
        ],
        "answer": 0,
        "why": "15+25+40=80; a budget is not a complete social/ecological evaluation.",
        "concept": "geo.a.ten03.site-costs"
      },
      {
        "id": "geo.a.ten03.development-sites.c2",
        "prompt": "Which is a possible greenfield-development cost?",
        "options": [
          "Habitat/farmland loss and additional infrastructure needs",
          "Guaranteed elimination of all transport demand",
          "Automatic restoration of every nearby habitat"
        ],
        "answer": 0,
        "why": "Assess land take and supporting networks in context.",
        "concept": "geo.a.ten03.site-tradeoffs"
      },
      {
        "id": "geo.a.ten03.development-sites.c3",
        "prompt": "Which is a possible brownfield-regeneration limitation?",
        "options": [
          "Remediation, ownership and displacement can complicate delivery",
          "Every reused site is cheap and uncontaminated",
          "No previously developed site can support homes"
        ],
        "answer": 0,
        "why": "Benefits and constraints vary by site and design.",
        "concept": "geo.a.ten03.site-tradeoffs"
      },
      {
        "id": "geo.a.ten03.development-sites.c4",
        "prompt": "What best supports a justified site choice?",
        "options": [
          "Compare alternatives using local needs, risks, ecology, costs and distributional effects",
          "Choose solely by the colour of the existing land",
          "Assume the cheaper toy budget accounts for every impact"
        ],
        "answer": 0,
        "why": "A reasoned choice uses more than one criterion and acknowledges tradeoffs.",
        "concept": "geo.a.ten03.site-evaluation"
      }
    ]
  },
  {
    "id": "geography.a.uk-challenges.migration",
    "topicId": "geography.a.uk-challenges",
    "title": "Read UK migration evidence carefully",
    "refs": [
      "8.2c"
    ],
    "minutes": 30,
    "cards": [
      [
        "In, out and net are different",
        "Long-term international migration uses a 12-month-or-longer change of usual country of residence. Immigration is movement into UK, emigration is movement out; net migration is immigration minus emigration. ONS’s provisional year-endingDecember 2025 estimates are 813,000in,642,000out and 171,000net. Net is a flow difference, not the number of all migrants living in UK or a citizenship/ethnicity count."
      ],
      [
        "Useful estimates can be revised",
        "ONS uses multiple administrative and statistical sources with methods and coverage limits. The same release updates year-endingDecember 2024 net migration to 331,000. Compare the same definition, period and release vintage; revised estimates do not become useless, but apparent changes need uncertainty and methods considered. A lower positive net flow still means more people arriving than leaving."
      ],
      [
        "Values and experiences vary",
        "Employers may weigh recruitment, universities research/students, residents jobs/housing/services, governments finances and responsibilities, and migrants family, safety or opportunity. Views vary within groups, and both contributions and pressures differ by place and time. Test specific claims with evidence without treating a national total as proof of everyone’s experience or assigning fixed views by identity."
      ]
    ],
    "cardViews": [
      "flows",
      "evidence",
      "voices"
    ],
    "model": "dev-ten03-migration",
    "tasks": [
      [
        "How is net migration calculated?",
        [
          "Immigration minus emigration",
          "Immigration plus emigration",
          "All foreign-born residents divided by population"
        ],
        0
      ],
      [
        "What does 171,000 describe in this release?",
        [
          "Provisional net long-term flow in YE December 2025",
          "All arrivals in the calendar decade",
          "Every non-UK-born person living in UK"
        ],
        0
      ],
      [
        "Why compare release vintages?",
        [
          "Past estimates and methods can be updated",
          "Every published number is permanently exact",
          "Only chart colours determine comparability"
        ],
        0
      ],
      [
        "How should stakeholder views be studied?",
        [
          "Use evidence and recognise differences within groups",
          "Assign one fixed opinion to every employer or resident",
          "Assume the national total proves every local effect"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten03.migration.p1",
        "prompt": "Using the displayed flows, what is 813−642 in thousands?",
        "options": [
          "171",
          "1455",
          "642"
        ],
        "answer": 0,
        "why": "Immigration minus emigration gives the net flow.",
        "concept": "geo.a.ten03.migration-measures",
        "ten03Evidence": "migration"
      },
      {
        "id": "geo.a.ten03.migration.p2",
        "prompt": "Does positive net migration mean nobody leaves?",
        "options": [
          "No: arrivals exceed departures but both flows occur",
          "Yes: emigration must be zero",
          "Only if all arrivals have the same citizenship"
        ],
        "answer": 0,
        "why": "A difference does not remove either underlying flow.",
        "concept": "geo.a.ten03.migration-measures"
      },
      {
        "id": "geo.a.ten03.migration.p3",
        "prompt": "Why can a local housing claim need more than a UK migration total?",
        "options": [
          "Local supply, demand, household patterns and other changes matter",
          "A national flow establishes every local cause",
          "Only nationality determines housing costs"
        ],
        "answer": 0,
        "why": "Evaluate the claim at the appropriate scale with alternative causes.",
        "concept": "geo.a.ten03.migration-evaluation"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten03.migration.c1",
        "prompt": "A fresh teaching example has 500,000 arrivals and 380,000 departures. Net?",
        "options": [
          "120,000",
          "880,000",
          "380,000"
        ],
        "answer": 0,
        "why": "500,000−380,000=120,000; do not confuse flow sum or population stock.",
        "concept": "geo.a.ten03.migration-measures"
      },
      {
        "id": "geo.a.ten03.migration.c2",
        "prompt": "What happens when net falls from 331,000 to 171,000 in these estimates?",
        "options": [
          "It remains positive but is 160,000lower",
          "It becomes negative 171,000",
          "There are no arrivals at all"
        ],
        "answer": 0,
        "why": "The difference falls while arrivals still exceed departures; these are dated estimates.",
        "concept": "geo.a.ten03.migration-measures",
        "ten03Evidence": "migration"
      },
      {
        "id": "geo.a.ten03.migration.c3",
        "prompt": "What is the most careful use of a provisional estimate?",
        "options": [
          "State its period, definition, release and revision limits",
          "Present it as an exact permanent count",
          "Mix it with a different definition without explanation"
        ],
        "answer": 0,
        "why": "Transparency strengthens interpretation without pretending estimates are unusable.",
        "concept": "geo.a.ten03.migration-evaluation"
      },
      {
        "id": "geo.a.ten03.migration.c4",
        "prompt": "Which statement respects stakeholder diversity?",
        "options": [
          "People in the same role can weigh contributions and pressures differently",
          "All migrants and residents each have one fixed opposing view",
          "One employer’s claim represents all employers"
        ],
        "answer": 0,
        "why": "Avoid stereotyping; assess specific views and evidence at relevant scales.",
        "concept": "geo.a.ten03.migration-views"
      }
    ]
  }
];
