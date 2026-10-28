export const fieldworkTopic={id:'geography.a.fieldwork',title:'Fieldwork and enquiry',discipline:'Geographical investigations'};
export const ten04Lessons=[
  {
    "id": "geography.a.uk-challenges.national-parks",
    "topicId": "geography.a.uk-challenges",
    "title": "National Parks: protect a working landscape",
    "refs": [
      "8.3a"
    ],
    "minutes": 30,
    "cards": [
      [
        "Protected, lived in and visited",
        "A National Park is a landscape where conservation, recreation and local livelihoods meet. In the Lake District, England, purposes include conserving natural beauty, wildlife and heritage, and helping people understand and enjoy them. The authority also works with others on community wellbeing. Conservation carries greater weight if the two purposes conflict; this is not a ban on all development."
      ],
      [
        "Repair the cause of damage",
        "Walking pressure and runoff can remove vegetation and deepen paths. Fix the Fells repairs paths and drainage, helping keep people on a durable route and reducing sediment washed into lakes and rivers. This protects habitats while keeping access possible. Poorly designed paths can divert walkers onto fragile ground; repairs need maintenance."
      ],
      [
        "Judge a package, not one promise",
        "Development can support homes, jobs and services but can add traffic or damage habitats and heritage. Public transport, suitable local housing, visitor management and planning controls can reduce conflicts. The Lake District partnership vision combines thriving communities with nature recovery and sustainable travel. A vision is an aim, not evidence that all outcomes have happened."
      ]
    ],
    "cardViews": [
      "purposes",
      "repair",
      "tradeoffs"
    ],
    "model": "dev-ten04-national-parks",
    "tasks": [
      [
        "What can repairing drainage reduce?",
        [
          "Water and sediment eroding the path",
          "Every visitor to the park",
          "All rainfall on the fells"
        ],
        0
      ],
      [
        "Why keep an accessible durable route?",
        [
          "Support enjoyment while reducing trampling",
          "Make the whole landscape artificial",
          "Guarantee no future maintenance"
        ],
        0
      ],
      [
        "A local housing proposal needs which comparison?",
        [
          "Community benefits against landscape and habitat effects",
          "Only the number of bedrooms",
          "Only whether any resident objects"
        ],
        0
      ],
      [
        "What would test a visitor-management scheme?",
        [
          "Repeated path condition and access evidence",
          "The publicity budget alone",
          "An attractive drawing alone"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten04.national-parks.p1",
        "prompt": "Why can a park contain farms and settlements?",
        "options": [
          "It is a working landscape with community needs",
          "Protection requires no people",
          "Only towns are legally protected"
        ],
        "answer": 0,
        "why": "Protection involves managing activities and impacts, not assuming an empty wilderness.",
        "concept": "geo.a.ten04.park-purposes"
      },
      {
        "id": "geo.a.ten04.national-parks.p2",
        "prompt": "Why might path repair help a lake downstream?",
        "options": [
          "It can reduce soil and sediment washed off the fell",
          "It stops every storm",
          "It removes the catchment"
        ],
        "answer": 0,
        "why": "Runoff connects damaged paths to downstream waters; maintaining drainage and surfaces can reduce erosion.",
        "concept": "geo.a.ten04.park-repair"
      },
      {
        "id": "geo.a.ten04.national-parks.p3",
        "prompt": "Does an ambition for sustainable travel prove traffic fell?",
        "options": [
          "No; comparable before/after evidence is needed",
          "Yes; an ambition is a measurement",
          "Yes; any bus eliminates cars"
        ],
        "answer": 0,
        "why": "A plan describes intentions; outcomes require evidence and consideration of other changes.",
        "concept": "geo.a.ten04.policy-evidence"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten04.national-parks.c1",
        "prompt": "A proposed visitor centre adds jobs but removes habitat. What is the strongest assessment?",
        "options": [
          "Compare alternatives, habitat effects, access and local benefits",
          "Approve because jobs are the only purpose",
          "Reject because parks cannot contain buildings"
        ],
        "answer": 0,
        "why": "A reasoned judgement weighs purposes and community needs against evidence and alternatives.",
        "concept": "geo.a.ten04.park-tradeoffs"
      },
      {
        "id": "geo.a.ten04.national-parks.c2",
        "prompt": "Walkers avoid a steep slippery repaired path. What should managers investigate?",
        "options": [
          "Whether design is displacing trampling onto nearby vegetation",
          "Whether all visitors oppose conservation",
          "Whether the park should stop monitoring"
        ],
        "answer": 0,
        "why": "A measure can create unintended behaviour; inspect usability and ecological effects.",
        "concept": "geo.a.ten04.park-repair"
      },
      {
        "id": "geo.a.ten04.national-parks.c3",
        "prompt": "Which outcome best tests a park shuttle scheme?",
        "options": [
          "Comparable traffic, ridership, access and habitat-pressure data",
          "Number of posters printed",
          "Whether its launch was popular online"
        ],
        "answer": 0,
        "why": "Several outcomes test transport and conservation aims; publicity is only an output.",
        "concept": "geo.a.ten04.policy-evidence"
      },
      {
        "id": "geo.a.ten04.national-parks.c4",
        "prompt": "For the Lake District England case, what if conservation and enjoyment purposes conflict?",
        "options": [
          "Greater weight is given to conservation",
          "Enjoyment always overrides conservation",
          "All local livelihoods cease automatically"
        ],
        "answer": 0,
        "why": "The conservation priority addresses conflicting purposes; it does not imply a blanket ban on economic activity.",
        "concept": "geo.a.ten04.park-purposes"
      }
    ],
    "bigIdea": "Judge a package, not one promise"
  },
  {
    "id": "geography.a.uk-challenges.flood-risk",
    "topicId": "geography.a.uk-challenges",
    "title": "Managing UK river and coastal flood risk",
    "refs": [
      "8.3b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Reduce risk in more than one way",
        "Flood risk combines the chance of flooding with consequences for exposed people and assets. River walls and embankments constrain water; upstream storage, woodland and land management can delay flows. Floodplain planning, warnings and property resilience reduce exposure or damage. None guarantees that all floods disappear. Measures need maintenance and catchment-wide assessment."
      ],
      [
        "Pickering: store and slow water",
        "At Pickering, North Yorkshire, the Slowing the Flow partnership combined a large storage area with woodland and leaky barriers. Forest Research reports an estimated 15\u201320% peak-flow reduction for the December 2015 event. Around half was attributed to upstream land management and half to the main storage area. That event estimate is not a guaranteed saving for every future storm."
      ],
      [
        "Coasts need space as well as barriers",
        "Sea walls and embankments protect land but require upkeep and can constrain intertidal habitat. At Medmerry, West Sussex, new inland defences allowed the sea into an area seaward of them. The historical EA2013/14 account describes improved protection and new habitat. Managed realignment changes which land floods; it requires land, negotiation and monitoring, and leaves residual risk."
      ]
    ],
    "cardViews": [
      "river",
      "storage",
      "coast"
    ],
    "model": "dev-ten04-flood-risk",
    "tasks": [
      [
        "What can upstream storage do to a flood peak?",
        [
          "Delay some water reaching downstream settlements",
          "Destroy water permanently",
          "Prevent every future storm"
        ],
        0
      ],
      [
        "What happens seaward of the new Medmerry defence?",
        [
          "Some land becomes intertidal",
          "All coastal flooding stops worldwide",
          "The tide is permanently removed"
        ],
        0
      ],
      [
        "What does a 1% annual chance mean?",
        [
          "A chance each year, not a 100-year timetable",
          "Exactly one flood each century",
          "No floods in the next 99 years"
        ],
        0
      ],
      [
        "How should Pickering\u2019s 15\u201320% figure be used?",
        [
          "As an event-specific estimated peak reduction",
          "As a guaranteed national reduction",
          "As the percentage of homes demolished"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten04.flood-risk.p1",
        "prompt": "Which intervention reduces damage rather than stopping rain?",
        "options": [
          "Moving vulnerable electrical fittings above likely flood levels",
          "Claiming a wall stops rainfall",
          "Removing all warnings"
        ],
        "answer": 0,
        "why": "Resilience aims to reduce consequences; it does not change the rainfall hazard.",
        "concept": "geo.a.ten04.flood-risk"
      },
      {
        "id": "geo.a.ten04.flood-risk.p2",
        "prompt": "What is an important tradeoff of realignment?",
        "options": [
          "Land is allowed to flood seaward of a relocated defence",
          "No land use changes",
          "Every home must be abandoned"
        ],
        "answer": 0,
        "why": "The new defence position changes exposure and creates intertidal space, with costs and negotiation.",
        "concept": "geo.a.ten04.realignment"
      },
      {
        "id": "geo.a.ten04.flood-risk.p3",
        "prompt": "A15\u201320% estimated peak reduction means what?",
        "options": [
          "The comparison concerns peak river flow for that event",
          "15\u201320% less rain necessarily fell",
          "All future storms lose the same fraction"
        ],
        "answer": 0,
        "why": "Rainfall and discharge are different, and a modelled event comparison is conditional.",
        "concept": "geo.a.ten04.flood-evidence"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten04.flood-risk.c1",
        "prompt": "Why combine warnings with flood defences?",
        "options": [
          "Defences can be exceeded and warnings can reduce consequences",
          "Warnings strengthen concrete automatically",
          "Warnings remove tidal surges"
        ],
        "answer": 0,
        "why": "Residual risk remains; a package addresses both probability and damage.",
        "concept": "geo.a.ten04.flood-risk"
      },
      {
        "id": "geo.a.ten04.flood-risk.c2",
        "prompt": "Which is a possible disadvantage of confining a river between walls?",
        "options": [
          "It may transfer risk or constrain floodplain space elsewhere",
          "It guarantees more rainfall upstream",
          "It eliminates all maintenance"
        ],
        "answer": 0,
        "why": "Effects depend on the catchment; risk transfer and lost storage must be assessed.",
        "concept": "geo.a.ten04.flood-tradeoffs"
      },
      {
        "id": "geo.a.ten04.flood-risk.c3",
        "prompt": "The source gives a 15\u201320% reduction range for one event. For a 100 m\u00b3/s comparison peak, what range follows?",
        "options": [
          "80\u201385 m\u00b3/s, under that illustrative assumption",
          "15\u201320 m\u00b3/s",
          "100\u2013120 m\u00b3/s"
        ],
        "answer": 0,
        "why": "100\u00d70.80 to 100\u00d70.85 gives 80\u201385; the 100 figure is invented, not a measured Pickering peak.",
        "concept": "geo.a.ten04.flood-evidence",
        "ten04Evidence": "flood"
      },
      {
        "id": "geo.a.ten04.flood-risk.c4",
        "prompt": "Which evidence would support choosing coastal realignment at a new site?",
        "options": [
          "Land availability, habitat effects, assets, costs and stakeholder views",
          "Only a distant scheme\u2019s publicity",
          "A promise of zero future risk"
        ],
        "answer": 0,
        "why": "Realignment suitability is site-specific and needs social, environmental and economic evidence.",
        "concept": "geo.a.ten04.realignment"
      }
    ],
    "bigIdea": "Coasts need space as well as barriers"
  },
  {
    "id": "geography.a.uk-challenges.climate-uncertainty",
    "topicId": "geography.a.uk-challenges",
    "title": "Planning for an uncertain UK climate",
    "refs": [
      "8.4a"
    ],
    "minutes": 30,
    "cards": [
      [
        "A projection has conditions",
        "A climate projection asks what could happen under stated assumptions, rather than predicting the weather on a particular day. Future emissions depend on decisions; models represent complex processes imperfectly; natural variability adds year-to-year differences. UK warming and seasonal rainfall changes can be meaningful even while their exact size and timing remain uncertain."
      ],
      [
        "Read the whole projection label",
        "The UK first Biennial Transparency Report 2024 reports a medium-emissions UK annual temperature example: central warming 2.3\u00b0C, with a 10th\u201390th percentile range 1.1\u20133.6\u00b0C for 2080\u20132100 relative to 1981\u20132000. This is a conditional change in a climate average, not an absolute temperature, daily maximum, observation or guarantee that values outside the range are impossible."
      ],
      [
        "Use uncertainty to improve decisions",
        "UK projections generally indicate hotter, drier summers and warmer, wetter winters, with regional and seasonal differences. Cold or wet summers can still occur. Rather than select one exact future, planners compare scenarios, monitor changes and keep options adaptable. The appropriate projection depends on place, timescale and decision; a national annual range cannot design a local drain by itself."
      ]
    ],
    "cardViews": [
      "drivers",
      "range",
      "variability"
    ],
    "model": "dev-ten04-climate-uncertainty",
    "tasks": [
      [
        "What changes an emissions scenario?",
        [
          "Assumptions about future human activity",
          "The day a graph is printed",
          "The colour used for the line"
        ],
        0
      ],
      [
        "Is the displayed 2.3\u00b0C an absolute daily temperature?",
        [
          "No; it is a conditional change in a UK climate average",
          "Yes; it is tomorrow\u2019s maximum",
          "Yes; it is the maximum possible warming"
        ],
        0
      ],
      [
        "Does one cool summer disprove long-term warming?",
        [
          "No; natural variability occurs around a climate trend",
          "Yes; climate never varies",
          "Yes; projections predict identical years"
        ],
        0
      ],
      [
        "What helps manage uncertainty?",
        [
          "Compare scenarios and review flexible measures",
          "Wait for perfect certainty before any planning",
          "Assume the central value is guaranteed"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten04.climate-uncertainty.p1",
        "prompt": "Why can two models give different warming?",
        "options": [
          "They represent climate processes differently",
          "Only one is permitted to contain physics",
          "Scenarios must therefore be useless"
        ],
        "answer": 0,
        "why": "Models approximate processes and feedbacks; compare their assumptions and evidence.",
        "concept": "geo.a.ten04.climate-uncertainty"
      },
      {
        "id": "geo.a.ten04.climate-uncertainty.p2",
        "prompt": "A projection is relative to 1981\u20132000. What does that mean?",
        "options": [
          "The change is compared with that baseline climate",
          "It was observed in every year since 1981",
          "It gives an absolute temperature of 2000\u00b0C"
        ],
        "answer": 0,
        "why": "The baseline defines the reference, and must accompany the scenario, period and units.",
        "concept": "geo.a.ten04.projection-label"
      },
      {
        "id": "geo.a.ten04.climate-uncertainty.p3",
        "prompt": "Why retain more than one drainage design option?",
        "options": [
          "Future rainfall and local needs have uncertainty",
          "Every option has identical costs",
          "Uncertainty means flooding is impossible"
        ],
        "answer": 0,
        "why": "Flexible choices can accommodate a range of outcomes, with monitoring and review.",
        "concept": "geo.a.ten04.robust-planning"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten04.climate-uncertainty.c1",
        "prompt": "Which interpretation matches this source?",
        "options": [
          "Conditional UK annual mean change under medium emissions",
          "Tomorrow\u2019s maximum temperature in London",
          "Observed warming for every UK location"
        ],
        "answer": 0,
        "why": "The scope is a UK annual average, future period and scenario relative to a named baseline.",
        "concept": "geo.a.ten04.projection-label",
        "ten04Evidence": "climate"
      },
      {
        "id": "geo.a.ten04.climate-uncertainty.c2",
        "prompt": "How wide is the displayed percentile range?",
        "options": [
          "2.5\u00b0C",
          "4.7\u00b0C",
          "1.3\u00b0C"
        ],
        "answer": 0,
        "why": "3.6\u22121.1=2.5\u00b0C; range width differs from the central warming.",
        "concept": "geo.a.ten04.projection-range",
        "ten04Evidence": "climate"
      },
      {
        "id": "geo.a.ten04.climate-uncertainty.c3",
        "prompt": "Is warming outside the displayed 10th\u201390th range impossible?",
        "options": [
          "No; those percentiles are not absolute bounds",
          "Yes; they are physical limits",
          "Yes; the central value is certain"
        ],
        "answer": 0,
        "why": "A percentile interval does not contain every possible outcome, and remains conditional on assumptions.",
        "concept": "geo.a.ten04.projection-range",
        "ten04Evidence": "climate"
      },
      {
        "id": "geo.a.ten04.climate-uncertainty.c4",
        "prompt": "A reservoir must operate for decades. What is the strongest approach?",
        "options": [
          "Test several scenarios and update plans as evidence improves",
          "Use one wet month as the complete future",
          "Treat a UK annual temperature change as a local rainfall forecast"
        ],
        "answer": 0,
        "why": "Long-lived decisions need relevant regional/seasonal evidence, scenarios and adaptive review.",
        "concept": "geo.a.ten04.robust-planning"
      }
    ],
    "bigIdea": "Use uncertainty to improve decisions"
  },
  {
    "id": "geography.a.uk-challenges.climate-impacts",
    "topicId": "geography.a.uk-challenges",
    "title": "UK climate impacts: people and landscapes",
    "refs": [
      "8.4b"
    ],
    "minutes": 30,
    "cards": [
      [
        "A hazard becomes an impact through exposure",
        "Hotter conditions can increase heat stress and water demand. Drier summers can lower soil moisture, affecting crops, rivers and habitats. People in poorly shaded or overheated buildings may face greater exposure; vulnerability also depends on age, health, resources and support. The same temperature change does not produce the same outcome everywhere."
      ],
      [
        "Follow connected landscape changes",
        "Heavier rainfall can increase runoff and flood damage, especially where soils are saturated or surfaces impermeable. Rising mean sea level can allow high coastal water levels to reach farther inland and contribute to habitat squeeze where fixed defences prevent landward movement. These are pathways of risk, not predictions that every winter or coastline will respond identically."
      ],
      [
        "Opportunities are conditional",
        "Longer growing seasons or warmer summer weather may offer opportunities for some crops and tourism. Water shortages, pests, heat, flood disruption or damaged habitats may limit those benefits. Compare sectors, regions and timescales, including how people adapt. UK climate impacts involve both physical change and social choices, rather than a simple national winners-versus-losers list."
      ]
    ],
    "cardViews": [
      "heat",
      "coast",
      "opportunities"
    ],
    "model": "dev-ten04-climate-impacts",
    "tasks": [
      [
        "Why might two streets experience different heat impacts?",
        [
          "Shade, buildings and vulnerability differ",
          "All people respond identically",
          "Only latitude matters"
        ],
        0
      ],
      [
        "Why can saturated soil increase storm runoff?",
        [
          "Less additional water can infiltrate",
          "It stops all rainfall",
          "It always increases soil storage without limit"
        ],
        0
      ],
      [
        "What causes coastal habitat squeeze?",
        [
          "Rising sea levels and barriers restricting landward movement",
          "All coastal habitats migrate without obstacles",
          "Only river sediment size"
        ],
        0
      ],
      [
        "Is a longer growing season a guaranteed yield increase?",
        [
          "No; water, heat, pests and crop suitability also matter",
          "Yes; water cannot limit crops",
          "Yes; every crop responds equally"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten04.climate-impacts.p1",
        "prompt": "Which chain best explains drought effects?",
        "options": [
          "Low rainfall and high demand reduce available water, stressing users and habitats",
          "Low rainfall necessarily raises river flow",
          "Drought only affects holidaymakers"
        ],
        "answer": 0,
        "why": "Impacts connect supply, demand and ecosystem needs; they vary with storage and management.",
        "concept": "geo.a.ten04.climate-impacts"
      },
      {
        "id": "geo.a.ten04.climate-impacts.p2",
        "prompt": "Why can sea-level rise increase coastal flood risk?",
        "options": [
          "A higher starting water level raises the reach of high tides and surges",
          "It prevents storm surges",
          "It guarantees every coast retreats at the same rate"
        ],
        "answer": 0,
        "why": "Higher mean level shifts the baseline for extreme water levels; local defences and landforms matter.",
        "concept": "geo.a.ten04.coastal-climate"
      },
      {
        "id": "geo.a.ten04.climate-impacts.p3",
        "prompt": "How should possible tourism benefits be assessed?",
        "options": [
          "Alongside heat, water, environmental and seasonal costs",
          "Only by assuming every summer is dry",
          "Without considering local capacity"
        ],
        "answer": 0,
        "why": "An opportunity is conditional and distributed unevenly, not an automatic net benefit.",
        "concept": "geo.a.ten04.climate-opportunities"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten04.climate-impacts.c1",
        "prompt": "Two neighbourhoods face equal outdoor heat. One has little shade and many vulnerable residents. What follows?",
        "options": [
          "Impacts can differ because exposure and vulnerability differ",
          "Equal temperature guarantees equal impacts",
          "Only rainfall can affect heat impacts"
        ],
        "answer": 0,
        "why": "Physical hazards interact with buildings and social circumstances.",
        "concept": "geo.a.ten04.climate-impacts"
      },
      {
        "id": "geo.a.ten04.climate-impacts.c2",
        "prompt": "What could limit benefits of a longer crop-growing season?",
        "options": [
          "Insufficient water and greater pest or heat stress",
          "The disappearance of all winter weather",
          "All soils becoming identical"
        ],
        "answer": 0,
        "why": "Different crops and management systems face interacting constraints.",
        "concept": "geo.a.ten04.climate-opportunities"
      },
      {
        "id": "geo.a.ten04.climate-impacts.c3",
        "prompt": "A wet winter follows a dry summer. Why can damage still be high?",
        "options": [
          "Different seasonal hazards can affect the same infrastructure and land",
          "Climate change requires only one kind of weather",
          "Drought always prevents later flooding"
        ],
        "answer": 0,
        "why": "Compound and sequential stresses can exceed capacity; neither season guarantees the next.",
        "concept": "geo.a.ten04.compound-risk"
      },
      {
        "id": "geo.a.ten04.climate-impacts.c4",
        "prompt": "Why might a fixed wall worsen habitat squeeze under sea-level rise?",
        "options": [
          "Intertidal habitat cannot easily shift landward past it",
          "The wall creates unlimited new land",
          "Sea level becomes fixed at the wall"
        ],
        "answer": 0,
        "why": "A constrained landward edge can reduce space between terrestrial and tidal zones.",
        "concept": "geo.a.ten04.coastal-climate"
      }
    ],
    "bigIdea": "Opportunities are conditional"
  },
  {
    "id": "geography.a.uk-challenges.climate-responses",
    "topicId": "geography.a.uk-challenges",
    "title": "Responding locally and nationally",
    "refs": [
      "8.4c"
    ],
    "minutes": 30,
    "cards": [
      [
        "Two different jobs",
        "Mitigation reduces greenhouse-gas emissions or increases their removal; adaptation adjusts to climate effects. Cleaner energy and lower-energy travel can mitigate. Flood resilience, shade and suitable water management can adapt. Some actions do both, but reducing emissions does not instantly remove warming already committed, and adaptation does not remove the need for mitigation."
      ],
      [
        "Connect local action with national planning",
        "London\u2019s Cool spaces project identifies places where people can take respite from heat. Its 2026 map operated seasonally; it is not a medical service and coverage depends on submissions. Nationally, the 2023\u20132028 NAP3 sets adaptation actions across infrastructure, buildings, nature and other sectors. This programme includes England policies and reserved UK responsibilities; devolved administrations also plan adaptation."
      ],
      [
        "Measure delivery and outcomes",
        "National standards, funding and coordination can enable local improvements, while councils, organisations and households implement many actions. Judge schemes by access, maintenance, distribution and measured effects, not just announcements. Shade may have cooling benefits but trees need suitable space, water and care. Track emissions for mitigation and exposure or damage for adaptation; do not confuse one indicator with the other."
      ]
    ],
    "cardViews": [
      "mitigation",
      "scales",
      "monitor"
    ],
    "model": "dev-ten04-climate-responses",
    "tasks": [
      [
        "Which action primarily adapts to heat?",
        [
          "Providing shade and cooler indoor spaces",
          "Increasing fossil-fuel use",
          "Calling an emissions target an outcome"
        ],
        0
      ],
      [
        "Which action primarily mitigates?",
        [
          "Reducing fossil energy needed for a journey",
          "Moving sockets above flood level",
          "Mapping vulnerable floodplain homes"
        ],
        0
      ],
      [
        "Does NAP3\u2019s existence prove all places are resilient?",
        [
          "No; delivery and outcomes need evaluation",
          "Yes; a plan removes every risk",
          "Yes; local implementation is unnecessary"
        ],
        0
      ],
      [
        "What should a cooling scheme assess?",
        [
          "Who can access it and whether exposure falls",
          "Only how many leaflets were printed",
          "Only whether its name is popular"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten04.climate-responses.p1",
        "prompt": "How can tree planting have two climate roles?",
        "options": [
          "Potential carbon storage and local shade, depending on survival and design",
          "It guarantees zero emissions immediately",
          "Shade is the same quantity as tonnes of carbon"
        ],
        "answer": 0,
        "why": "Co-benefits differ in mechanism, timescale and measurement.",
        "concept": "geo.a.ten04.climate-response"
      },
      {
        "id": "geo.a.ten04.climate-responses.p2",
        "prompt": "Why can national and local action complement each other?",
        "options": [
          "Funding and coordination can support place-specific delivery",
          "Only national government can plant trees",
          "Local conditions never differ"
        ],
        "answer": 0,
        "why": "Scale affects responsibilities, resources and adaptation to local needs.",
        "concept": "geo.a.ten04.response-scale"
      },
      {
        "id": "geo.a.ten04.climate-responses.p3",
        "prompt": "Does a 2026 summer map establish a space is open all year?",
        "options": [
          "No; seasonal availability and access need checking",
          "Yes; every mapped space operates permanently",
          "Yes; all locations provide medical care"
        ],
        "answer": 0,
        "why": "The London example is a dated seasonal service, not a current guarantee or medical provision.",
        "concept": "geo.a.ten04.response-evidence"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten04.climate-responses.c1",
        "prompt": "A council raises electrical equipment above flood level. Which description fits?",
        "options": [
          "Adaptation reducing potential damage",
          "Mitigation removing all atmospheric carbon",
          "A measure preventing all rain"
        ],
        "answer": 0,
        "why": "The intervention addresses consequences of an existing or future hazard.",
        "concept": "geo.a.ten04.climate-response"
      },
      {
        "id": "geo.a.ten04.climate-responses.c2",
        "prompt": "A national grant supports insulation fitted by local teams. What does it show?",
        "options": [
          "National resources and local implementation can interact",
          "Every benefit is guaranteed by announcing a grant",
          "Only one scale can act at once"
        ],
        "answer": 0,
        "why": "Policies link scales; outcomes depend on the quality and uptake of actual work.",
        "concept": "geo.a.ten04.response-scale"
      },
      {
        "id": "geo.a.ten04.climate-responses.c3",
        "prompt": "Which comparison best evaluates a heat adaptation scheme?",
        "options": [
          "Comparable exposure and access outcomes, accounting for weather differences",
          "Raw visitor totals in two very different summers alone",
          "The number of policy documents written"
        ],
        "answer": 0,
        "why": "Outcome evaluation needs context and who benefits, not just outputs.",
        "concept": "geo.a.ten04.response-evidence"
      },
      {
        "id": "geo.a.ten04.climate-responses.c4",
        "prompt": "Why continue mitigation after installing flood defences?",
        "options": [
          "Adaptation does not remove the emissions driving further change",
          "Defences absorb all greenhouse gases",
          "Mitigation only applies outside the UK"
        ],
        "answer": 0,
        "why": "The two responses address different parts of the risk chain and are complementary.",
        "concept": "geo.a.ten04.climate-response"
      }
    ],
    "bigIdea": "Measure delivery and outcomes"
  },
  {
    "id": "geography.a.fieldwork.1",
    "topicId": "geography.a.fieldwork",
    "title": "Ask a question fieldwork can answer",
    "refs": [
      "7A",
      "7B",
      "enquiry1"
    ],
    "minutes": 30,
    "cards": [
      [
        "Start with place, process and evidence",
        "An enquiry question connects a geographical idea to a named place and evidence you can collect. \u201cHow does noise vary with distance from this road during our survey?\u201d identifies variables and a scale. \u201cIs the town good?\u201d is vague until criteria are defined. A hypothesis is a reasoned expectation to test, not a result you must force the data to support."
      ],
      [
        "Build a testable chain",
        "Choose the factor to compare, define the outcome and keep methods consistent. A road-noise enquiry might predict lower scores farther from traffic, but buildings, wind and time could affect the result. An operational definition explains exactly how an observation is made. A perceived noise score is subjective; it is not a calibrated decibel reading."
      ],
      [
        "Match evidence to the enquiry",
        "Primary data are collected first-hand; secondary maps, census records or previous surveys provide context and comparison. Check dates, scale and definitions. Edexcel requires one physical investigation in rivers or coasts and one human investigation in a central/inner urban area or rural settlement, outside classroom and school grounds. This lesson rehearses planning; the invented local grid is not a completed field visit."
      ]
    ],
    "cardViews": [
      "chain",
      "variables",
      "context"
    ],
    "model": "dev-ten04-enquiry-questions",
    "tasks": [
      [
        "Which is a measurable enquiry?",
        [
          "How does the recorded noise score vary with distance from this road?",
          "Is this the best place ever?",
          "Why are all places identical?"
        ],
        0
      ],
      [
        "What is a hypothesis?",
        [
          "A reasoned expectation to test",
          "A conclusion that must be true",
          "A substitute for observations"
        ],
        0
      ],
      [
        "What must a noise score\u2019s method state?",
        [
          "A consistent defined scale and observation protocol",
          "Only the observer\u2019s favourite place",
          "That it is automatically a decibel reading"
        ],
        0
      ],
      [
        "Why use a dated secondary map?",
        [
          "To add context while checking fit to the enquiry",
          "To avoid collecting any required primary evidence",
          "To prove all sites are unchanged"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten04.enquiry-questions.p1",
        "prompt": "Which feature makes a question workable?",
        "options": [
          "Defined variables, location and feasible evidence",
          "A conclusion hidden in its wording",
          "An unmeasurable claim about everywhere"
        ],
        "answer": 0,
        "why": "A bounded enquiry connects concepts to evidence and methods.",
        "concept": "geo.a.ten04.enquiry-question"
      },
      {
        "id": "geo.a.ten04.enquiry-questions.p2",
        "prompt": "Your results oppose your hypothesis. What should you do?",
        "options": [
          "Report and examine the evidence and possible explanations",
          "Delete the contradictory sites",
          "Change all scores to fit"
        ],
        "answer": 0,
        "why": "A hypothesis is tested by evidence; disagreement can reveal limits or other factors.",
        "concept": "geo.a.ten04.hypothesis"
      },
      {
        "id": "geo.a.ten04.enquiry-questions.p3",
        "prompt": "Which is secondary data for your class?",
        "options": [
          "A published census table compiled by others",
          "Your own pedestrian count",
          "Your own field sketch"
        ],
        "answer": 0,
        "why": "Secondary status describes who collected it, not whether it is numerical.",
        "concept": "geo.a.ten04.field-source"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten04.enquiry-questions.c1",
        "prompt": "Which is the most testable rural enquiry?",
        "options": [
          "How do pedestrian flows differ between selected village streets at matched times?",
          "Is the countryside perfect?",
          "Why must our village have the highest flow?"
        ],
        "answer": 0,
        "why": "Sites, outcome and comparable timing make an enquiry testable without requiring a particular answer.",
        "concept": "geo.a.ten04.enquiry-question"
      },
      {
        "id": "geo.a.ten04.enquiry-questions.c2",
        "prompt": "For distance versus beach sediment size, what is essential?",
        "options": [
          "State how distance and sediment size will be measured",
          "Assume every beach has the same pattern",
          "Use only a town population table"
        ],
        "answer": 0,
        "why": "Operational definitions link the question to suitable coastal evidence.",
        "concept": "geo.a.ten04.operational-definition"
      },
      {
        "id": "geo.a.ten04.enquiry-questions.c3",
        "prompt": "A map is from 1990 and your survey is this year. What must you consider?",
        "options": [
          "Change in land use and whether the map fits your purpose",
          "That older sources are always false",
          "That primary evidence cannot be compared with maps"
        ],
        "answer": 0,
        "why": "Different dates can be useful for change, but are not automatically a matched present-day comparison.",
        "concept": "geo.a.ten04.field-source"
      },
      {
        "id": "geo.a.ten04.enquiry-questions.c4",
        "prompt": "Can this app confirm the required fieldwork participation?",
        "options": [
          "No; authentic school-organised investigations outside school grounds are needed",
          "Yes; finishing this quiz counts as two visits",
          "Yes; watching a map is physical data collection"
        ],
        "answer": 0,
        "why": "Online preparation develops understanding but cannot establish required physical participation.",
        "concept": "geo.a.ten04.fieldwork-scope"
      }
    ],
    "bigIdea": "Match evidence to the enquiry"
  },
  {
    "id": "geography.a.fieldwork.2",
    "topicId": "geography.a.fieldwork",
    "title": "Sample fairly and measure consistently",
    "refs": [
      "7A",
      "7B",
      "enquiry2"
    ],
    "minutes": 30,
    "cards": [
      [
        "A sample represents a defined population",
        "A random sample uses chance within a sampling frame; systematic sampling uses regular intervals; stratified sampling includes defined groups or zones. Convenience sampling chooses easy sites and may miss important variation. None is automatically best: link the design to the enquiry, feasible access and what you want to represent. A regular interval can accidentally align with a repeating pattern."
      ],
      [
        "Reliability and accuracy are different",
        "Repeat measurements with a consistent protocol to see how variable they are. Accuracy concerns closeness to the true value; repeated readings from a miscalibrated instrument can be consistent but wrong. Define units, count duration and observer rules. Match times when comparing pedestrian flows so a rush-hour site is not compared carelessly with a quiet-time site."
      ],
      [
        "Safety and ethics shape a valid method",
        "Follow the school\u2019s approved risk assessment and supervision. Changing water, traffic, tides, weather and access can make a planned site unsuitable; stop and seek the responsible adult\u2019s direction. Ask consent where appropriate, make participation voluntary and avoid identifiable personal records. Record omitted sites and likely bias; never enter danger just to fill a sampling interval."
      ]
    ],
    "cardViews": [
      "convenience",
      "repeats",
      "repeats"
    ],
    "model": "dev-ten04-sampling-methods",
    "tasks": [
      [
        "If only roadside sites are sampled, what may be missed?",
        [
          "Conditions farther from the road",
          "All traffic noise everywhere",
          "The need for any sampling frame"
        ],
        0
      ],
      [
        "Why sample within near, middle and far zones?",
        [
          "To represent each defined distance zone",
          "To guarantee a preferred conclusion",
          "To avoid recording location"
        ],
        0
      ],
      [
        "Three readings are similar but the instrument is miscalibrated. What follows?",
        [
          "They may be reliable but inaccurate",
          "They must be accurate",
          "No error is possible"
        ],
        0
      ],
      [
        "A planned site becomes unsafe. What should happen?",
        [
          "Follow the approved safety plan and record the omission",
          "Enter it to avoid a missing value",
          "Replace its reading with a guessed number"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten04.sampling-methods.p1",
        "prompt": "A sample every 20 m is what type?",
        "options": [
          "Systematic",
          "Convenience by definition",
          "A census of every person"
        ],
        "answer": 0,
        "why": "A fixed interval is systematic; consider whether it captures relevant variation.",
        "concept": "geo.a.ten04.sampling"
      },
      {
        "id": "geo.a.ten04.sampling-methods.p2",
        "prompt": "Why repeat a count using the same duration?",
        "options": [
          "Compare variability under a consistent protocol",
          "Guarantee identical results",
          "Remove all location bias"
        ],
        "answer": 0,
        "why": "Repeats help reliability but cannot by themselves correct a biased site selection.",
        "concept": "geo.a.ten04.measurement"
      },
      {
        "id": "geo.a.ten04.sampling-methods.p3",
        "prompt": "What is appropriate for a questionnaire?",
        "options": [
          "Voluntary informed participation without unnecessary identifying data",
          "Recording names and addresses without a purpose",
          "Treating refusal as a zero score"
        ],
        "answer": 0,
        "why": "Respect for participants and clear definitions support ethical, valid evidence.",
        "concept": "geo.a.ten04.field-ethics"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten04.sampling-methods.c1",
        "prompt": "A village survey samples only people outside one caf\u00e9 at noon. What is a key limitation?",
        "options": [
          "Convenience, place and time bias may miss other groups",
          "It guarantees representation of every resident",
          "The only problem is the colour of the form"
        ],
        "answer": 0,
        "why": "The sampling frame excludes many possible people and times.",
        "concept": "geo.a.ten04.sampling"
      },
      {
        "id": "geo.a.ten04.sampling-methods.c2",
        "prompt": "How could stratification improve a land-use survey?",
        "options": [
          "Sample within defined centre and edge zones",
          "Select only the easiest shops",
          "Repeat one central site 100times"
        ],
        "answer": 0,
        "why": "Stratification targets represented groups; the allocation should match the purpose.",
        "concept": "geo.a.ten04.sampling"
      },
      {
        "id": "geo.a.ten04.sampling-methods.c3",
        "prompt": "A counter records every location for 10 minutes except one for 5. What should you do before comparison?",
        "options": [
          "Use comparable durations or justify converting to rates",
          "Compare raw totals without comment",
          "Double every 10-minute total"
        ],
        "answer": 0,
        "why": "Different durations change exposure; consistent counts or carefully justified rates are needed.",
        "concept": "geo.a.ten04.measurement"
      },
      {
        "id": "geo.a.ten04.sampling-methods.c4",
        "prompt": "Why cannot more readings alone fix a miscalibrated sensor?",
        "options": [
          "They repeat the same systematic error",
          "They always remove bias after ten repeats",
          "Calibration affects only qualitative data"
        ],
        "answer": 0,
        "why": "More observations reduce some random uncertainty but do not automatically fix systematic error.",
        "concept": "geo.a.ten04.measurement"
      }
    ],
    "bigIdea": "Safety and ethics shape a valid method"
  },
  {
    "id": "geography.a.fieldwork.3",
    "topicId": "geography.a.fieldwork",
    "title": "Turn field records into maps and graphs",
    "refs": [
      "7A",
      "7B",
      "enquiry3"
    ],
    "minutes": 30,
    "cards": [
      [
        "Keep the link between value and place",
        "Every site needs a stable ID, location, units and method. In our invented local grid, site A is at(100, 100)m and site B at(200, 100)m. A GIS joins records by a shared key such as siteID; confusing names or coordinates can map a correct value to the wrong place. Our local grid is not an Ordnance Survey reference or a real location."
      ],
      [
        "Choose a representation for the question",
        "A scatter graph compares two numerical variables, such as distance and noise score. Separate bars compare categories, such as land-use types. A map shows spatial pattern. A line may show ordered change where joining points is meaningful, but connecting category bars implies a sequence that may not exist. Always label axes and units and show an appropriate scale."
      ],
      [
        "A clear graphic also shows its limits",
        "Our four invented sites have noise scores 12, 9, 6, 7 at distances 0, 100, 200, 300 m. A local-grid map retains position while the scatter plot exposes the relationship and exception. The 0\u201320 scores are subjective ratings, not decibels. A processed picture cannot repair biased collection; missing sites, dates and methods still need reporting."
      ]
    ],
    "cardViews": [
      "map",
      "scatter",
      "scale"
    ],
    "model": "dev-ten04-presenting-data",
    "tasks": [
      [
        "What links the record forB to its map point?",
        [
          "The same siteID and matching coordinates",
          "The alphabetically first noise score",
          "The colour of the browser"
        ],
        0
      ],
      [
        "Which plot compares distance with a numerical score?",
        [
          "A scatter graph with labelled axes",
          "A pie chart of unrelated sites",
          "An unlabelled photograph alone"
        ],
        0
      ],
      [
        "Which display suits counts by land-use category?",
        [
          "Separate labelled bars",
          "An implied continuous time series",
          "A map without a key or values"
        ],
        0
      ],
      [
        "Why inspect an axis starting above zero?",
        [
          "It may visually exaggerate differences",
          "It always proves fraud",
          "It changes the original observations"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten04.presenting-data.p1",
        "prompt": "A table has site B at(200, 100)m but its marker is at(100, 200)m. What needs fixing?",
        "options": [
          "The coordinate match; the value is mapped to a different place",
          "Only the title font",
          "The observations must be discarded entirely"
        ],
        "answer": 0,
        "why": "Position and value must refer to the same site; swapped coordinates distort spatial interpretation.",
        "concept": "geo.a.ten04.map-records"
      },
      {
        "id": "geo.a.ten04.presenting-data.p2",
        "prompt": "Can a graph prove a noise-distance cause on its own?",
        "options": [
          "No; it shows an association needing explanation and method checks",
          "Yes; any downward dots prove causation",
          "Yes; a GIS removes all uncertainty"
        ],
        "answer": 0,
        "why": "Presentation reveals patterns but does not establish a causal experiment.",
        "concept": "geo.a.ten04.graph-choice"
      },
      {
        "id": "geo.a.ten04.presenting-data.p3",
        "prompt": "What belongs on a distance axis?",
        "options": [
          "Variable name and unit, such as distance from road /m",
          "Only the word data",
          "A date unrelated to the observations"
        ],
        "answer": 0,
        "why": "Labels make quantities and comparisons interpretable.",
        "concept": "geo.a.ten04.graph-scale"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten04.presenting-data.c1",
        "prompt": "Which site is at(300, 100)m in this local teaching grid?",
        "options": [
          "C",
          "B",
          "D"
        ],
        "answer": 0,
        "why": "Match the siteID and both coordinates; C has easting 300 and northing 100.",
        "concept": "geo.a.ten04.map-records",
        "ten04Evidence": "map"
      },
      {
        "id": "geo.a.ten04.presenting-data.c2",
        "prompt": "For percentage land use in retail, housing and services, choose what?",
        "options": [
          "Labelled category bars on a stated percentage scale",
          "A continuous temperature line with no units",
          "An unlabelled set of dots"
        ],
        "answer": 0,
        "why": "Categories need a representation that does not invent continuity; percentages need a defined denominator.",
        "concept": "geo.a.ten04.graph-choice"
      },
      {
        "id": "geo.a.ten04.presenting-data.c3",
        "prompt": "The displayed fresh scatter data shows what exception?",
        "options": [
          "The score rises between 200 m and 300 m",
          "Every successive score is lower",
          "The first site has the lowest score"
        ],
        "answer": 0,
        "why": "Read the actual points, not just the overall downward tendency.",
        "concept": "geo.a.ten04.graph-choice",
        "ten04Evidence": "scatter"
      },
      {
        "id": "geo.a.ten04.presenting-data.c4",
        "prompt": "Which caption is essential for the teaching data?",
        "options": [
          "Invented subjective scores on a 0\u201320scale, with distances in metres",
          "Official calibrated national decibel survey",
          "Proof that all streets have the same relationship"
        ],
        "answer": 0,
        "why": "Definitions and provenance prevent a teaching example being mistaken for measured sound levels.",
        "concept": "geo.a.ten04.graph-scale"
      }
    ],
    "bigIdea": "A clear graphic also shows its limits"
  },
  {
    "id": "geography.a.fieldwork.4",
    "topicId": "geography.a.fieldwork",
    "title": "From a pattern to an evidenced conclusion",
    "refs": [
      "7A",
      "7B",
      "enquiry4",
      "enquiry5"
    ],
    "minutes": 30,
    "cards": [
      [
        "Describe pattern, evidence and exceptions",
        "In our invented example, scores fall from 12 at 0 m to 6 at 200 m, then rise to 7 at 300 m. The overall tendency is downward, but not every step follows it. Quote values, units and the exception. Site buildings, traffic timing or the subjective scoring method could contribute; the plot alone does not identify which explanation is correct."
      ],
      [
        "Use a summary without hiding variation",
        "The four scores 12, 9, 6, 7 total 34, giving a mean 8.5 and a range 6. A mean describes the sample, not every location. A range compares maximum and minimum. An unusual observation deserves checking against field notes and method; do not delete a valid observation just because it weakens the expected pattern."
      ],
      [
        "Conclude within the evidence",
        "Our four sites give limited support for the hypothesis that scores decline with distance, with an exception and possible confounders. A conclusion should answer the question, use evidence and qualify confidence. Compare with theory and suitable secondary evidence, but do not claim the sample proves a universal causal law or represents every time of day."
      ]
    ],
    "cardViews": [
      "pattern",
      "summary",
      "conclude"
    ],
    "model": "dev-ten04-analysing-data",
    "tasks": [
      [
        "What is the mean of 12, 9, 6, 7?",
        [
          "8.5",
          "34",
          "6"
        ],
        0
      ],
      [
        "What is the exception to the declining pattern?",
        [
          "The score rises from 6 to 7 at the last site",
          "The first site has a score 12",
          "All scores must be false"
        ],
        0
      ],
      [
        "Does association alone establish cause?",
        [
          "No; other factors and methods need checking",
          "Yes; the dots slope down",
          "Yes; four sites remove uncertainty"
        ],
        0
      ],
      [
        "What should a conclusion do?",
        [
          "Answer the question with evidence and limits",
          "Repeat the hypothesis as proven regardless of data",
          "Describe only equipment colours"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten04.analysing-data.p1",
        "prompt": "What is the range of scores 12, 9, 6, 7?",
        "options": [
          "6",
          "8.5",
          "34"
        ],
        "answer": 0,
        "why": "The highest 12 minus the lowest 6 equals 6; range measures spread, not average.",
        "concept": "geo.a.ten04.data-summary"
      },
      {
        "id": "geo.a.ten04.analysing-data.p2",
        "prompt": "What should you do with an unexpected but valid reading?",
        "options": [
          "Keep it and examine possible explanations",
          "Delete it until the graph is smooth",
          "Replace it with the mean without comment"
        ],
        "answer": 0,
        "why": "Unexpected evidence can reveal variation; check errors but preserve valid observations.",
        "concept": "geo.a.ten04.anomaly"
      },
      {
        "id": "geo.a.ten04.analysing-data.p3",
        "prompt": "Why mention survey time in a conclusion?",
        "options": [
          "Results may depend on time-specific traffic and activity",
          "Time is never relevant to field observations",
          "It proves all seasons are identical"
        ],
        "answer": 0,
        "why": "A limited survey window restricts the conclusions that can be drawn.",
        "concept": "geo.a.ten04.bounded-conclusion"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten04.analysing-data.c1",
        "prompt": "The four fresh counts are 8, 12, 10, 14 people per 10 minutes. What is their mean?",
        "options": [
          "11 people per 10 minutes",
          "44 people per 10 minutes",
          "6 people per 10 minutes"
        ],
        "answer": 0,
        "why": "The total 44 divided by four is 11, retaining the count-duration unit.",
        "concept": "geo.a.ten04.data-summary",
        "ten04Evidence": "counts"
      },
      {
        "id": "geo.a.ten04.analysing-data.c2",
        "prompt": "What is the range of those fresh counts?",
        "options": [
          "6 people per 10 minutes",
          "11 people per 10 minutes",
          "44 people per 10 minutes"
        ],
        "answer": 0,
        "why": "14\u22128=6; a range is not a sum or mean.",
        "concept": "geo.a.ten04.data-summary",
        "ten04Evidence": "counts"
      },
      {
        "id": "geo.a.ten04.analysing-data.c3",
        "prompt": "What conclusion fits the fresh distance-score plot?",
        "options": [
          "Scores generally decline, with a rise at the last site",
          "Scores fall at every step with no exception",
          "Distance alone has been proved to cause all noise"
        ],
        "answer": 0,
        "why": "14\u219211\u21927\u21929 is broadly downward with an exception; it cannot alone prove causation.",
        "concept": "geo.a.ten04.bounded-conclusion",
        "ten04Evidence": "scatter"
      },
      {
        "id": "geo.a.ten04.analysing-data.c4",
        "prompt": "The busiest surveyed street is near a bus station. What next?",
        "options": [
          "Consider the station as a possible explanatory factor and seek more evidence",
          "Declare the station the proven sole cause",
          "Delete the street as inconvenient"
        ],
        "answer": 0,
        "why": "Theory and context help explanations; a single association is not a controlled causal test.",
        "concept": "geo.a.ten04.data-explanation"
      }
    ],
    "bigIdea": "Conclude within the evidence"
  },
  {
    "id": "geography.a.fieldwork.5",
    "topicId": "geography.a.fieldwork",
    "title": "Evaluate what your evidence can support",
    "refs": [
      "7A",
      "7B",
      "enquiry6"
    ],
    "minutes": 30,
    "cards": [
      [
        "Connect limitation, effect and improvement",
        "\u201cWe needed more time\u201d is incomplete evaluation. If every pedestrian count was at lunchtime, commuter flows may be missed; repeat at matched morning, midday and afternoon periods. Explain how the change addresses the limitation. A larger biased sample can remain biased, while broader coverage may improve representativeness."
      ],
      [
        "Inspect sensitivity before changing data",
        "Three invented repeat scores 6, 7, 17 have a mean 10 and median 7. The 17 changes the mean strongly. It might reflect genuine variation, an unusual event or an error; field notes and consistent repeat measurements help distinguish them. Report any justified exclusion transparently rather than silently removing an inconvenient value."
      ],
      [
        "Judge confidence, not just equipment",
        "Triangulate suitable primary observations with independent secondary sources, checking date, definitions and spatial scale. Agreement can increase confidence, but shared bias or incompatible measures can mislead. Link method limitations to the strength and reach of the conclusion. These worked examples assess evaluation choices; your own fieldwork needs authentic records, reflection and extended written evidence."
      ]
    ],
    "cardViews": [
      "coverage",
      "sensitivity",
      "triangulate"
    ],
    "model": "dev-ten04-evaluating-enquiry",
    "tasks": [
      [
        "Why is \u201cmore data\u201d insufficient on its own?",
        [
          "It may repeat the same selection bias",
          "More data always makes a biased sample representative",
          "Only one observation is ever needed"
        ],
        0
      ],
      [
        "What is the median of 6, 7, 17?",
        [
          "7",
          "10",
          "17"
        ],
        0
      ],
      [
        "What should follow a suspected error?",
        [
          "Check notes, instrument and repeats before any transparent decision",
          "Delete the highest value automatically",
          "Hide the original data"
        ],
        0
      ],
      [
        "What makes an improvement useful?",
        [
          "It addresses a stated limitation and likely effect",
          "It sounds expensive",
          "It guarantees a desired conclusion"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.ten04.evaluating-enquiry.p1",
        "prompt": "Why repeat counts at matched times?",
        "options": [
          "To reduce timing differences in site comparisons",
          "To ensure all streets have identical flows",
          "To remove the need to record duration"
        ],
        "answer": 0,
        "why": "A justified improvement targets a known source of unfair comparison.",
        "concept": "geo.a.ten04.evaluation-chain"
      },
      {
        "id": "geo.a.ten04.evaluating-enquiry.p2",
        "prompt": "What is the mean of 6, 7, 17?",
        "options": [
          "10",
          "7",
          "17"
        ],
        "answer": 0,
        "why": "The sum 30 divided by three is 10; the median is 7. Their difference shows sensitivity to the 17.",
        "concept": "geo.a.ten04.sensitivity"
      },
      {
        "id": "geo.a.ten04.evaluating-enquiry.p3",
        "prompt": "When is triangulation most useful?",
        "options": [
          "When comparable independent sources test the same interpretation",
          "When sources repeat the same unsupported claim",
          "When dates and definitions are ignored"
        ],
        "answer": 0,
        "why": "Independent relevant evidence can test conclusions; agreement alone is not proof.",
        "concept": "geo.a.ten04.triangulation"
      }
    ],
    "check": [
      {
        "id": "geo.a.ten04.evaluating-enquiry.c1",
        "prompt": "A survey misses weekends. Which evaluation is strongest?",
        "options": [
          "Visitor flows may be missed; add comparable weekend counts",
          "Buy a brighter clipboard",
          "Delete the weekday counts without explanation"
        ],
        "answer": 0,
        "why": "The proposed change targets a likely coverage problem and explains its effect.",
        "concept": "geo.a.ten04.evaluation-chain"
      },
      {
        "id": "geo.a.ten04.evaluating-enquiry.c2",
        "prompt": "Three fresh counts are 5, 6, 19. Which statement is correct?",
        "options": [
          "The mean is 10 and the median is 6",
          "Both mean and median are 19",
          "The mean is 6 and the median is 10"
        ],
        "answer": 0,
        "why": "Sum 30 divided by three gives 10; the ordered middle value is 6. Check unusual values rather than automatically deleting them.",
        "concept": "geo.a.ten04.sensitivity"
      },
      {
        "id": "geo.a.ten04.evaluating-enquiry.c3",
        "prompt": "A secondary map and your survey disagree. What is a useful first check?",
        "options": [
          "Whether dates, areas and definitions are comparable",
          "Assume primary evidence is always wrong",
          "Assume the newest source must be correct"
        ],
        "answer": 0,
        "why": "Apparent disagreement may result from incompatible coverage or definitions.",
        "concept": "geo.a.ten04.triangulation"
      },
      {
        "id": "geo.a.ten04.evaluating-enquiry.c4",
        "prompt": "Only four safe sites were accessible. What conclusion is defensible?",
        "options": [
          "Describe those sites and explain limits on wider generalisation",
          "Claim the entire region is represented exactly",
          "Invent observations for inaccessible sites"
        ],
        "answer": 0,
        "why": "Safety takes priority; honest limitations are more valid than fabricated completeness.",
        "concept": "geo.a.ten04.evaluation-confidence"
      }
    ],
    "bigIdea": "Judge confidence, not just equipment"
  }
];
