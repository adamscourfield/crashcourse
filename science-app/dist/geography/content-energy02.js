export const energy02Lessons=[
  {
    "id": "geography.a.energy.global-mix",
    "topicId": "geography.a.energy",
    "resourceOption": "energy",
    "title": "Why energy mixes differ",
    "refs": [
      "6.4b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Population and wealth shape services",
        "A larger population generally needs more energy services, but numbers alone do not select the fuels. Income, industry, travel, housing, climate and technology affect demand per person. Wealth can finance power stations, renewables and grids, yet established roads, buildings and industries can sustain fossil-fuel demand. Countries with similar incomes can have different mixes."
      ],
      [
        "Resources need access and investment",
        "Geology affects coal, oil, gas and uranium availability; wind, sunlight and rainfall create renewable opportunities. Having a resource does not guarantee that using it is economic or acceptable. Technology, imports, infrastructure, government choices and environmental protection influence which resources become useful supplies. Imported fuel can matter even where domestic deposits exist."
      ],
      [
        "Read dated country profiles",
        "EIA’s India2023 primary-consumption profile is dominated by coal at a rounded59%, with petroleum/liquids29%. The USA2024 preliminary profile instead shows petroleum38% and gas36%. India’s coal supply and power/industrial demand, and the USA’s transport and gas infrastructure, help explain these patterns. The profiles use different years and accounting conventions: use them as dated examples, not an exact matched-year experiment or proof of a single cause. A rounded0% does not establish no use."
      ]
    ],
    "cardViews": [
      "factors",
      "map",
      "india"
    ],
    "model": "dev-energy2-global-mix",
    "tasks": [
      [
        "A country’s population doubles. What can we conclude about its fuel mix?",
        [
          "More services may be needed; fuel shares still depend on other factors",
          "Its coal share must double",
          "It must use only nuclear power"
        ],
        0
      ],
      [
        "Strong winds exist but there is no grid connection. What limits development?",
        [
          "Infrastructure and investment",
          "The colour of the map",
          "Wind being non-renewable"
        ],
        0
      ],
      [
        "Read the India2023 profile. Its largest reported primary category is…",
        [
          "Coal",
          "Nuclear",
          "Natural gas"
        ],
        0
      ],
      [
        "Why treat the India2023 and USA2024 profiles cautiously?",
        [
          "Different dates and account conventions limit precise comparison",
          "Both show exactly the same year",
          "Their percentages measure population"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy02.global-mix.p1",
        "prompt": "Wealth may encourage renewable investment, but does it guarantee a renewable mix?",
        "options": [
          "No: infrastructure, resources and choices also matter",
          "Yes: every rich country uses only wind",
          "Yes: fuel imports stop"
        ],
        "answer": 0,
        "why": "Multiple factors interact.",
        "concept": "geo.a.energy02.mix-factors"
      },
      {
        "id": "geo.a.energy02.global-mix.p2",
        "prompt": "Read the USA2024 profile. Which source has a36% share?",
        "options": [
          "Natural gas",
          "Coal",
          "Nuclear"
        ],
        "answer": 0,
        "why": "The profile reports shares of primary consumption.",
        "concept": "geo.a.energy02.mix-reading",
        "energy02Evidence": "us"
      },
      {
        "id": "geo.a.energy02.global-mix.p3",
        "prompt": "A resource-poor country may still use gas because…",
        "options": [
          "Imports and transport infrastructure can supply it",
          "Gas must grow in every soil",
          "All countries have identical deposits"
        ],
        "answer": 0,
        "why": "Resource presence and access differ.",
        "concept": "geo.a.energy02.resource-access"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy02.global-mix.c1",
        "prompt": "A larger population necessarily means…",
        "options": [
          "Neither a fixed coal share nor a fixed renewable share",
          "Only a100% coal mix",
          "No change in energy services"
        ],
        "answer": 0,
        "why": "Population influences demand but does not uniquely choose fuels.",
        "concept": "geo.a.energy02.mix-factors"
      },
      {
        "id": "geo.a.energy02.global-mix.c2",
        "prompt": "Read the India2023 table. Coal plus petroleum/liquids totals…",
        "options": [
          "88% of the reported primary mix",
          "35% of the primary mix",
          "88% of electricity generation"
        ],
        "answer": 0,
        "why": "59+29=88 with the primary-consumption denominator.",
        "concept": "geo.a.energy02.mix-reading",
        "energy02Evidence": "india"
      },
      {
        "id": "geo.a.energy02.global-mix.c3",
        "prompt": "Which evidence best explains a country’s mix?",
        "options": [
          "Resources, demand, investment, infrastructure and policy together",
          "Only its population rank",
          "Only whether it is wealthy"
        ],
        "answer": 0,
        "why": "Use interacting mechanisms and specific evidence.",
        "concept": "geo.a.energy02.resource-access"
      },
      {
        "id": "geo.a.energy02.global-mix.c4",
        "prompt": "Can these two profiles isolate the effect of national wealth?",
        "options": [
          "No: years, methods and other influences differ",
          "Yes: every other variable is controlled",
          "Yes: primary energy means GDP"
        ],
        "answer": 0,
        "why": "A descriptive comparison is not a controlled causal test.",
        "concept": "geo.a.energy02.mix-comparison",
        "energy02Evidence": "us"
      }
    ]
  },
  {
    "id": "geography.a.energy.demand-change",
    "topicId": "geography.a.energy",
    "resourceOption": "energy",
    "title": "A century of changing energy demand",
    "refs": [
      "6.5a"
    ],
    "minutes": 30,
    "cards": [
      [
        "More people and changing lives",
        "Across the past century, population growth, industrial production, motor transport and expanding electricity services increased global energy demand and encouraged new supply. UN historical milestones place world population at roughly2billion in1927,4billion in1974 and8billion in2022. Energy demand did not simply follow one constant use-per-person rate: incomes, production, access and technology also changed. Wars, recessions and disruptions meant growth was not smooth everywhere."
      ],
      [
        "Technology changes demand and supply",
        "Over the twentieth century, oil expanded with motor transport, gas networks spread, nuclear generation developed and later wind and solar deployment accelerated. Drilling, mining, generation and transmission improvements made additional supply usable. Efficiency can reduce energy needed for a given service, while greater service use can offset savings. Electrification changes the fuel mix and conversion losses; it does not mean every energy need disappears."
      ],
      [
        "Slower growth can still mean more demand",
        "IEA’s2026 review reports global energy-demand growth of2.0% in2024 and1.3% in2025. The rate slowed, but demand still increased. Solar PV supplied more than a quarter of the2025 increase, not a quarter of all energy. Future population projections are conditional; population, use per person, efficiency and supply choices jointly shape demand. The UN trajectory is not an energy forecast or a depletion date."
      ]
    ],
    "cardViews": [
      "history",
      "drivers",
      "recent"
    ],
    "model": "dev-energy2-demand-change",
    "tasks": [
      [
        "The population milestones describe…",
        [
          "Rounded population estimates, not an annual energy series",
          "Exact annual global energy consumption",
          "A guarantee of future fuel shares"
        ],
        0
      ],
      [
        "The same service uses less energy after an efficiency improvement. If service use then rises greatly…",
        [
          "Total energy use can still rise",
          "Total use can never rise",
          "Population becomes irrelevant"
        ],
        0
      ],
      [
        "The growth rate falls from2.0% to1.3%, both positive. Demand…",
        [
          "Still increases, at a slower percentage rate",
          "Must decrease by0.7%",
          "Stops completely"
        ],
        0
      ],
      [
        "The UN future line should be read as…",
        [
          "A conditional population trajectory, not certain energy demand",
          "Measured future energy consumption",
          "A prediction of an exact fuel-exhaustion date"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy02.demand-change.p1",
        "prompt": "A toy system supplies10 service-units at3 energy-units each. Total energy is…",
        "options": [
          "30 units",
          "13 units",
          "3 units"
        ],
        "answer": 0,
        "why": "Services multiplied by energy per service gives total demand.",
        "concept": "geo.a.energy02.demand-drivers"
      },
      {
        "id": "geo.a.energy02.demand-change.p2",
        "prompt": "Why can technology expand supply?",
        "options": [
          "It can make previously inaccessible resources usable",
          "It creates unlimited geological fuels",
          "It removes every environmental cost"
        ],
        "answer": 0,
        "why": "Access changes, but resources and impacts still constrain supply.",
        "concept": "geo.a.energy02.supply-technology"
      },
      {
        "id": "geo.a.energy02.demand-change.p3",
        "prompt": "Read the IEA growth bars. Which year’s demand still grew?",
        "options": [
          "Both2024 and2025",
          "Only2024",
          "Neither year"
        ],
        "answer": 0,
        "why": "Both annual rates are positive.",
        "concept": "geo.a.energy02.growth-rate",
        "energy02Evidence": "growth"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy02.demand-change.c1",
        "prompt": "A fresh toy system supplies20 services at2 energy-units each, then30 at1.5. Total energy changes…",
        "options": [
          "40 to45 units: higher despite better efficiency",
          "40 to30 units",
          "20 to1.5 units"
        ],
        "answer": 0,
        "why": "20×2=40;30×1.5=45. More services can offset efficiency.",
        "concept": "geo.a.energy02.demand-drivers"
      },
      {
        "id": "geo.a.energy02.demand-change.c2",
        "prompt": "In the supplied IEA data, the growth-rate difference is…",
        "options": [
          "0.7 percentage points",
          "0.7% less total energy",
          "3.3 percentage points"
        ],
        "answer": 0,
        "why": "2.0−1.3=0.7 percentage points; both levels grew.",
        "concept": "geo.a.energy02.growth-rate",
        "energy02Evidence": "growth"
      },
      {
        "id": "geo.a.energy02.demand-change.c3",
        "prompt": "The chart’s later population points are…",
        "options": [
          "Conditional projections",
          "Observed future populations",
          "A fixed annual energy budget"
        ],
        "answer": 0,
        "why": "UNWPP future values depend on demographic assumptions.",
        "concept": "geo.a.energy02.future-demand",
        "energy02Evidence": "projection"
      },
      {
        "id": "geo.a.energy02.demand-change.c4",
        "prompt": "Solar supplied over25% of the2025 demand increase. This means…",
        "options": [
          "A share of growth, not25% of all global energy",
          "Solar supplied every energy service",
          "All fossil-fuel demand fell"
        ],
        "answer": 0,
        "why": "Growth contributions and total shares have different denominators.",
        "concept": "geo.a.energy02.growth-denominator"
      }
    ]
  },
  {
    "id": "geography.a.energy.nonrenewable-development",
    "topicId": "geography.a.energy",
    "resourceOption": "energy",
    "title": "Developing coal, oil, gas and uranium",
    "refs": [
      "6.5b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Reach and transport finite fuels",
        "Surface coal mining removes overburden to reach seams; underground mining uses shafts and tunnels. Both need transport and preparation, and affect land, water, safety and local livelihoods. Oil and gas development uses wells, processing and pipelines or shipping; offshore projects also require marine infrastructure. New supply can support jobs, income and energy services but needs large investment and ongoing maintenance."
      ],
      [
        "Combustion and production bring costs",
        "Coal, oil and gas release CO2 when burned, and combustion can produce air pollutants. Mining, drilling and transport can disturb habitats; spills, methane leakage, waste water and accidents need controls appropriate to each system. Useful employment or reliable fuel is a benefit, but it does not cancel harm or guarantee that every resident gains. Cleaner operations do not make a finite resource renewable."
      ],
      [
        "Uranium follows a different fuel cycle",
        "Uranium is mined, processed and made into reactor fuel. Nuclear fission releases energy for heat and generation without fossil-fuel combustion in the reactor. Construction, mining and fuel preparation still have impacts; projects need finance, skilled work, cooling and safety systems. Radioactive wastes require controlled storage and disposal. Evaluate useful generation against build time, cost, safety and long-term waste responsibilities, not as if nuclear were either fossil combustion or impact-free."
      ]
    ],
    "cardViews": [
      "coal",
      "oil",
      "uranium"
    ],
    "model": "dev-energy2-nonrenewable-development",
    "tasks": [
      [
        "Removing overburden to expose a coal seam is…",
        [
          "Surface mining",
          "A nuclear fuel cycle",
          "Solar generation"
        ],
        0
      ],
      [
        "An offshore oil deposit becomes a service only with…",
        [
          "Wells, processing, transport and operating support",
          "Only a discovery announcement",
          "Automatic geological renewal"
        ],
        0
      ],
      [
        "A gas development can benefit people while still needing…",
        [
          "Leak, water, land and emissions controls",
          "No fuel or maintenance",
          "No evaluation of who gains"
        ],
        0
      ],
      [
        "Which statement distinguishes nuclear from fossil generation?",
        [
          "Fission avoids fossil combustion in the reactor; fuel-cycle impacts remain",
          "Uranium is a rapidly growing crop",
          "All nuclear waste is ordinary air pollution"
        ],
        0
      ],
      [
        "Which is a balanced development judgement?",
        [
          "Compare services/jobs with costs, affected groups and long-term risks",
          "Any job makes every impact disappear",
          "Every project has identical impacts"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy02.nonrenewable-development.p1",
        "prompt": "Underground coal development usually requires…",
        "options": [
          "Shafts or tunnels and transport systems",
          "Only PV panels",
          "A wind rotor"
        ],
        "answer": 0,
        "why": "Different deposit depths require different access methods.",
        "concept": "geo.a.energy02.coal-development"
      },
      {
        "id": "geo.a.energy02.nonrenewable-development.p2",
        "prompt": "A tanker spill mainly illustrates…",
        "options": [
          "An oil transport/environmental risk",
          "Proof that uranium is fossil fuel",
          "A benefit shared equally by all"
        ],
        "answer": 0,
        "why": "Oil supply chains have transport risks as well as energy benefits.",
        "concept": "geo.a.energy02.oil-development"
      },
      {
        "id": "geo.a.energy02.nonrenewable-development.p3",
        "prompt": "A nuclear project must plan for…",
        "options": [
          "Fuel-cycle waste, safety, cooling and eventual decommissioning",
          "Only burning coal in its reactor",
          "No construction or fuel supply"
        ],
        "answer": 0,
        "why": "Low operating carbon differs from no lifecycle responsibilities.",
        "concept": "geo.a.energy02.uranium-development"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy02.nonrenewable-development.c1",
        "prompt": "Which development removes rock above a coal seam?",
        "options": [
          "Surface mining",
          "Only nuclear fission",
          "A photovoltaic cell"
        ],
        "answer": 0,
        "why": "Overburden removal exposes shallow seams.",
        "concept": "geo.a.energy02.coal-development"
      },
      {
        "id": "geo.a.energy02.nonrenewable-development.c2",
        "prompt": "A gas project’s methane leak control addresses…",
        "options": [
          "Emissions before combustion",
          "Every future CO2 emission from burning the fuel",
          "Whether gas becomes renewable"
        ],
        "answer": 0,
        "why": "Leakage and combustion are distinct pathways.",
        "concept": "geo.a.energy02.gas-development"
      },
      {
        "id": "geo.a.energy02.nonrenewable-development.c3",
        "prompt": "Why can uranium generation be useful without being renewable?",
        "options": [
          "Finite fuel can provide sustained low-operating-carbon electricity",
          "All finite fuels are fossil fuels",
          "Radioactive waste replenishes uranium instantly"
        ],
        "answer": 0,
        "why": "Resource replacement and generation benefits are separate issues.",
        "concept": "geo.a.energy02.uranium-development"
      },
      {
        "id": "geo.a.energy02.nonrenewable-development.c4",
        "prompt": "Which information best supports an oil-development judgement?",
        "options": [
          "Service benefits, jobs, investment, spill risks and affected communities",
          "Only the number of jobs announced",
          "Only its distance from the equator"
        ],
        "answer": 0,
        "why": "Compare benefits and costs across the full supply chain.",
        "concept": "geo.a.energy02.oil-development"
      }
    ]
  },
  {
    "id": "geography.a.energy.renewable-development",
    "topicId": "geography.a.energy",
    "resourceOption": "energy",
    "title": "Developing HEP, wind and solar power",
    "refs": [
      "6.5c"
    ],
    "minutes": 30,
    "cards": [
      [
        "Store water, release energy",
        "A reservoir can hold water above a turbine. Releasing it through a penstock turns a turbine and generator; rainfall and catchment flow replenish water, so hydropower draws on the water cycle. Reservoir schemes can supply adjustable electricity and sometimes storage or flood-management benefits. Construction costs, altered river flows, sediment, fish migration, flooded habitats and displaced communities need assessment. Drought can limit output."
      ],
      [
        "Use sunlight and moving air",
        "PV cells convert light directly into electricity; they do not need a steam or wind turbine. Output varies with daylight, cloud and seasons, while panels, inverters and grid connections need investment. Wind turbines use moving air and have their own variability and siting issues. Both can reduce fuel combustion during generation and support jobs, but materials, manufacturing, land or marine habitats, connections and end-of-life treatment still matter."
      ],
      [
        "Develop a system, not just a device",
        "Sites differ in rainfall, head, wind, sunlight, available land and access to the grid. Communities can benefit from electricity and employment yet face ecological or landscape costs. Evaluate delivered electricity, reliability, storage, affordability and local impacts together. Pumped storage moves water using electricity generated earlier; it stores energy with losses rather than creating a new primary energy source."
      ]
    ],
    "cardViews": [
      "hep",
      "solar",
      "compare"
    ],
    "model": "dev-energy2-renewable-development",
    "tasks": [
      [
        "In the HEP model, released water…",
        [
          "Turns a turbine linked to a generator",
          "Is burned as fossil fuel",
          "Creates extra uranium"
        ],
        0
      ],
      [
        "A PV panel makes electricity by…",
        [
          "Converting light in cells",
          "Spinning a turbine inside each cell",
          "Burning sunlight like coal"
        ],
        0
      ],
      [
        "When wind output changes, planning should include…",
        [
          "Other supply, flexibility, storage and connections",
          "Assuming every hour stays at rated output",
          "Classifying wind as finite"
        ],
        0
      ],
      [
        "A reservoir scheme should evaluate…",
        [
          "Electricity benefits alongside flow, habitat and community impacts",
          "Only whether the water looks blue",
          "No construction costs or downstream effects"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy02.renewable-development.p1",
        "prompt": "Which can limit HEP during a dry period?",
        "options": [
          "Reduced inflow and stored water",
          "Water becoming a fossil fuel",
          "PV panels inside every turbine"
        ],
        "answer": 0,
        "why": "Available water and operating constraints affect output.",
        "concept": "geo.a.energy02.hep-development"
      },
      {
        "id": "geo.a.energy02.renewable-development.p2",
        "prompt": "Why do solar projects need material and disposal planning?",
        "options": [
          "Manufacturing and end-of-life impacts remain",
          "They have no components",
          "Renewable means impact-free"
        ],
        "answer": 0,
        "why": "Operating benefits do not erase lifecycle costs.",
        "concept": "geo.a.energy02.solar-development"
      },
      {
        "id": "geo.a.energy02.renewable-development.p3",
        "prompt": "Why compare sites before building wind?",
        "options": [
          "Wind conditions, grid access and local effects vary",
          "Every site has identical output",
          "No communities can be affected"
        ],
        "answer": 0,
        "why": "Development depends on physical and human conditions.",
        "concept": "geo.a.energy02.renewable-siting"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy02.renewable-development.c1",
        "prompt": "What turns the generator in a conventional reservoir HEP scheme?",
        "options": [
          "Water-driven turbine",
          "Light directly inside a PV cell",
          "Combustion of water"
        ],
        "answer": 0,
        "why": "Water transfers energy to a turbine and generator.",
        "concept": "geo.a.energy02.hep-development"
      },
      {
        "id": "geo.a.energy02.renewable-development.c2",
        "prompt": "Which source converts light directly to electricity?",
        "options": [
          "Solar PV",
          "Coal mining",
          "A conventional gas turbine"
        ],
        "answer": 0,
        "why": "Photovoltaic cells use light without an intermediate turbine.",
        "concept": "geo.a.energy02.solar-development"
      },
      {
        "id": "geo.a.energy02.renewable-development.c3",
        "prompt": "Pumped storage delivers energy that was…",
        "options": [
          "Stored using earlier electricity, with losses",
          "Created from nothing",
          "Always produced directly from new rainfall"
        ],
        "answer": 0,
        "why": "Pumping uses energy; it is storage, not a new primary source.",
        "concept": "geo.a.energy02.energy-storage"
      },
      {
        "id": "geo.a.energy02.renewable-development.c4",
        "prompt": "Which appraisal is strongest for renewable development?",
        "options": [
          "Compare delivered energy, cost, variability and local/lifecycle impacts",
          "Ignore habitats because output is renewable",
          "Judge only installed capacity"
        ],
        "answer": 0,
        "why": "Assess the complete system and affected groups.",
        "concept": "geo.a.energy02.renewable-siting"
      }
    ]
  },
  {
    "id": "geography.a.energy.fracking",
    "topicId": "geography.a.energy",
    "resourceOption": "energy",
    "title": "Fracking: increasing recoverable supply",
    "refs": [
      "6.5d"
    ],
    "minutes": 30,
    "cards": [
      [
        "Reach low-permeability rock",
        "Some gas is trapped in shale and other rocks through which it does not flow easily. A well can be drilled down and then horizontally along a target formation. Steel casing and cement help isolate the well from surrounding formations. Drilling reaches the rock; hydraulic fracturing is a later stimulation step, not a synonym for all drilling."
      ],
      [
        "Create pathways, not new fuel",
        "Fluid is pumped at high pressure to open fractures in the target rock. Proppant, often sand, helps hold pathways open after pressure falls so existing gas can move towards the well. Flowback and produced water require containment and treatment or appropriate disposal. Horizontal access and fracturing can make more gas recoverable and add to supply, but they do not create gas or replenish a finite stock."
      ],
      [
        "More supply is conditional",
        "Potential gains include fuel, jobs and reduced dependence on some imports, where development is economic and permitted. Costs include water demand, waste water, traffic, methane leakage and induced seismicity. USGS distinguishes fracturing-related seismic events from the separate process of deep wastewater injection, which can also induce earthquakes. Geology, well integrity, monitoring, regulation, prices and decline rates affect outcomes; fracking is not a guaranteed solution to shortages or low bills."
      ]
    ],
    "cardViews": [
      "drill",
      "fracture",
      "risks"
    ],
    "model": "dev-energy2-fracking",
    "tasks": [
      [
        "Why turn a well horizontally in a shale layer?",
        [
          "To contact more of the target formation",
          "To make new gas from water",
          "To turn every rock into a reservoir"
        ],
        0
      ],
      [
        "What changes when fractures and proppant create connected paths?",
        [
          "Existing gas can move more readily to the well",
          "Geological fuel becomes renewable",
          "Gas is created each time the movie loops"
        ],
        0
      ],
      [
        "Why manage flowback and produced water?",
        [
          "They require containment and appropriate treatment/disposal",
          "They are always safe drinking water",
          "They never reach the surface"
        ],
        0
      ],
      [
        "Which conclusion is justified?",
        [
          "Fracking can increase recoverable supply, subject to costs and controls",
          "It always eliminates shortages and lowers every bill",
          "It replaces the need to monitor faults"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy02.fracking.p1",
        "prompt": "Hydraulic fracturing mainly improves…",
        "options": [
          "Flow pathways through low-permeability rock",
          "The speed of new fossil formation",
          "The renewable character of methane"
        ],
        "answer": 0,
        "why": "Greater connectivity can release existing gas.",
        "concept": "geo.a.energy02.fracking-mechanism"
      },
      {
        "id": "geo.a.energy02.fracking.p2",
        "prompt": "Proppant is used to…",
        "options": [
          "Help keep fracture pathways open",
          "Make electricity directly from sunlight",
          "Remove all seismic risk"
        ],
        "answer": 0,
        "why": "Keeping pathways open supports flow after stimulation.",
        "concept": "geo.a.energy02.fracking-mechanism"
      },
      {
        "id": "geo.a.energy02.fracking.p3",
        "prompt": "Which is distinct from hydraulic fracturing itself?",
        "options": [
          "Deep wastewater disposal injection",
          "Creating target-rock fractures",
          "Pumping fracture fluid"
        ],
        "answer": 0,
        "why": "Wastewater disposal is a separate operation with its own risks.",
        "concept": "geo.a.energy02.fracking-risks"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy02.fracking.c1",
        "prompt": "Why can shale gas output rise after successful stimulation?",
        "options": [
          "Previously poorly connected gas gains routes to the well",
          "Water turns into new methane",
          "The fuel stock grows indefinitely"
        ],
        "answer": 0,
        "why": "Recovery changes, not geological replacement.",
        "concept": "geo.a.energy02.fracking-mechanism"
      },
      {
        "id": "geo.a.energy02.fracking.c2",
        "prompt": "Which safeguards are relevant to groundwater protection?",
        "options": [
          "Well integrity plus surface fluid containment and monitoring",
          "Only painting the rig",
          "Assuming depth removes every risk"
        ],
        "answer": 0,
        "why": "Protect pathways and control fluids; risks need evidence.",
        "concept": "geo.a.energy02.fracking-risks"
      },
      {
        "id": "geo.a.energy02.fracking.c3",
        "prompt": "Which statement about induced seismicity is accurate?",
        "options": [
          "Fracturing and separate wastewater injection can both be relevant",
          "Only natural earthquakes ever occur",
          "Every induced event must have identical size"
        ],
        "answer": 0,
        "why": "Operations and local faults influence seismic effects.",
        "concept": "geo.a.energy02.fracking-risks"
      },
      {
        "id": "geo.a.energy02.fracking.c4",
        "prompt": "A new shale discovery guarantees cheap secure fuel because…",
        "options": [
          "It does not: costs, geology, decline and markets still matter",
          "Every deposit is automatically economic",
          "Recovery rates never fall"
        ],
        "answer": 0,
        "why": "A potential resource differs from a reliable affordable supply.",
        "concept": "geo.a.energy02.fracking-supply"
      }
    ]
  }
];
