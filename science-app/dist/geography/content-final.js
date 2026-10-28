export const skillsTopic={id:'geography.a.skills',title:'Geographical skills',discipline:'Geography A'};
export const finalLessons=[
  {
    "id": "geography.a.fieldwork.6",
    "topicId": "geography.a.fieldwork",
    "title": "Investigate change in a river channel",
    "refs": [
      "7A",
      "enquiry1",
      "enquiry2",
      "enquiry3",
      "enquiry4",
      "enquiry5",
      "enquiry6"
    ],
    "minutes": 30,
    "cards": [
      [
        "Ask how and why the channel changes",
        "Choose a question at your actual sites, such as how discharge changes downstream. Use a consistent sampling plan and record conditions, tributaries and human activity. Discharge is volume per second, not water level. Follow the school risk assessment; this online model does not authorise entering water."
      ],
      [
        "Measure, observe and connect",
        "Estimate cross-sectional area from width and representative depths, and combine it with an estimate of mean velocity. Our invented rectangular example is 4 m wide, mean depth 0.3 m and mean velocity 0.5 m/s: area 1.2 m\u00b2 and discharge 0.6 m\u00b3/s. Actual channel shapes, velocity profiles and float methods introduce uncertainty. Annotated sketches record qualitative landforms alongside measurements."
      ],
      [
        "Use sources to explain implications",
        "Edexcel requires discharge measurement, qualitative landform evidence, implications for people, a flood-risk map and another secondary source. Compare your dated records with an appropriate EA map and rainfall or historical information. Risk-map probability is not a live warning; a gauge\u2019s height is not discharge. Reach a site-specific conclusion with limitations."
      ]
    ],
    "cardViews": [
      "flow",
      "section",
      "sources"
    ],
    "model": "dev-final-river",
    "labRequired": true,
    "tasks": [
      [
        "Which quantity describes river discharge?",
        [
          "Volume passing per second",
          "Height above a gauge datum",
          "Length of the river"
        ],
        0
      ],
      [
        "Why measure several representative depths?",
        [
          "Channel depth varies across its width",
          "To guarantee all rivers are rectangular",
          "To remove the need for velocity"
        ],
        0
      ],
      [
        "What qualitative record is useful?",
        [
          "A labelled landform sketch with location and direction",
          "Only a list of numbers without units",
          "An invented flood date"
        ],
        0
      ],
      [
        "Why pair a risk map with field data?",
        [
          "Different evidence adds context if dates and definitions fit",
          "It replaces required observations",
          "It predicts tomorrow\u2019s water level exactly"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.river.p1",
        "prompt": "Area 2 m\u00b2 and mean velocity 0.4 m/s give what discharge?",
        "options": [
          "0.8 m\u00b3/s",
          "5 m\u00b3/s",
          "2.4 m\u00b3/s"
        ],
        "answer": 0,
        "why": "Multiply cross-sectional area by mean velocity; the result is volume per second.",
        "concept": "geo.a.final.discharge"
      },
      {
        "id": "geo.a.final.river.p2",
        "prompt": "Can a gauge stage of 2 m be used as 2 m\u00b3/s?",
        "options": [
          "No; stage and discharge are different quantities",
          "Yes; their numerical values always match",
          "Yes; units do not matter"
        ],
        "answer": 0,
        "why": "Stage is height above a datum; conversion to discharge needs a site-specific relationship.",
        "concept": "geo.a.final.stage"
      },
      {
        "id": "geo.a.final.river.p3",
        "prompt": "Why record upstream land use?",
        "options": [
          "It can help explain runoff and implications for people",
          "It guarantees the hypothesis",
          "It replaces the river measurements"
        ],
        "answer": 0,
        "why": "Catchment conditions affect river behaviour and exposure, but explanations need evidence.",
        "concept": "geo.a.final.river-enquiry"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.river.c1",
        "prompt": "A channel has area 1.5 m\u00b2 and mean velocity 0.6 m/s. Discharge?",
        "options": [
          "0.9 m\u00b3/s",
          "2.1 m\u00b3/s",
          "2.5 m\u00b3/s"
        ],
        "answer": 0,
        "why": "1.5\u00d70.6=0.9 m\u00b3/s.",
        "concept": "geo.a.final.discharge"
      },
      {
        "id": "geo.a.final.river.c2",
        "prompt": "Which pair meets the specified secondary-source types?",
        "options": [
          "Flood-risk map and a suitable rainfall record",
          "Two unlocated selfies",
          "Only your own width measurements"
        ],
        "answer": 0,
        "why": "River work needs a flood-risk map and another secondary source, alongside primary methods.",
        "concept": "geo.a.final.field-sources"
      },
      {
        "id": "geo.a.final.river.c3",
        "prompt": "A surface float runs faster than much of the channel. What follows?",
        "options": [
          "It may overestimate mean velocity and discharge without an appropriate method",
          "It proves the water is shallower",
          "It measures volume directly"
        ],
        "answer": 0,
        "why": "Surface speed may differ from cross-sectional mean speed; evaluate the method rather than assume equality.",
        "concept": "geo.a.final.river-method"
      },
      {
        "id": "geo.a.final.river.c4",
        "prompt": "Why compare survey-day conditions across sites?",
        "options": [
          "Recent rainfall and timing may affect the apparent downstream pattern",
          "Every downstream increase is guaranteed",
          "Weather cannot affect discharge"
        ],
        "answer": 0,
        "why": "A fair interpretation considers conditions as well as geographical theory.",
        "concept": "geo.a.final.river-enquiry"
      }
    ],
    "bigIdea": "Use sources to explain implications",
    "fieldworkOption": "rivers",
    "fieldworkGroup": "physical"
  },
  {
    "id": "geography.a.fieldwork.7",
    "topicId": "geography.a.fieldwork",
    "title": "Investigate a changing coastal landscape",
    "refs": [
      "7A",
      "enquiry1",
      "enquiry2",
      "enquiry3",
      "enquiry4",
      "enquiry5",
      "enquiry6"
    ],
    "minutes": 30,
    "cards": [
      [
        "Turn process ideas into an enquiry",
        "Choose a location-specific question about coastal processes through landscape evidence. Beach profiles and sediment characteristics provide numerical evidence; sketches or descriptions record landforms. Record tide, weather, site and direction. Use approved safe access and supervision; an online profile is not permission to approach cliffs, waves or groynes."
      ],
      [
        "Measure shape and sediment fairly",
        "A profile records changes in beach height with horizontal distance; slope angle and gradient are related but different. Our teaching rise 2 m over run 20 m gives gradient 1:10. Sediment sampling needs a consistent rule, enough locations and a stated measure such as long-axis length or roundness category. Selecting only the largest pebbles biases the result."
      ],
      [
        "Explain place and people",
        "Edexcel requires beach morphology and sediment measurement, qualitative landforms, implications for people, a geology map and another secondary source. BGS distinguishes bedrock and superficial deposits; a beach photograph alone cannot establish either. Compare mapped geology with dated imagery or management records and your field evidence. Groynes and defences can affect sediment movement and access; evaluate alternatives and limits."
      ]
    ],
    "cardViews": [
      "profile",
      "sediment",
      "sources"
    ],
    "model": "dev-final-coast",
    "labRequired": true,
    "tasks": [
      [
        "Which measurements describe beach morphology?",
        [
          "Heights or slopes at recorded distances",
          "Only visitor opinions",
          "Only the price of nearby houses"
        ],
        0
      ],
      [
        "How should sediment be selected?",
        [
          "Use a stated representative sampling procedure",
          "Pick the largest attractive pebble each time",
          "Ignore the site location"
        ],
        0
      ],
      [
        "Which map is specifically required?",
        [
          "A geology map",
          "Only a world political map",
          "Only a bus route poster"
        ],
        0
      ],
      [
        "Why note the tide?",
        [
          "Exposed beach and accessible sampling area change",
          "It makes all profiles identical",
          "It replaces safety planning"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.coast.p1",
        "prompt": "A rise 1 m over horizontal run 20 m is what gradient?",
        "options": [
          "1:20",
          "1:1",
          "20:1"
        ],
        "answer": 0,
        "why": "Use rise:run in the same units; gradient is not an angle of 20degrees.",
        "concept": "geo.a.final.gradient"
      },
      {
        "id": "geo.a.final.coast.p2",
        "prompt": "Is rock identity certain from one photograph?",
        "options": [
          "No; use geological evidence and appropriate observations",
          "Yes; colour always identifies bedrock",
          "Yes; beach sediment must be the cliff rock"
        ],
        "answer": 0,
        "why": "Appearance is evidence but not a unique geological diagnosis.",
        "concept": "geo.a.final.coast-source"
      },
      {
        "id": "geo.a.final.coast.p3",
        "prompt": "Why repeat sediment sampling across sites?",
        "options": [
          "To capture spatial variation and reduce selection bias",
          "To force a perfect trend",
          "To establish that all pebbles are equal"
        ],
        "answer": 0,
        "why": "A structured sample supports the enquiry without predetermining its result.",
        "concept": "geo.a.final.coast-method"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.coast.c1",
        "prompt": "A beach rises 3 m over 30 m horizontal run. Gradient?",
        "options": [
          "1:10",
          "1:30",
          "10:1"
        ],
        "answer": 0,
        "why": "3:30 simplifies to 1:10.",
        "concept": "geo.a.final.gradient"
      },
      {
        "id": "geo.a.final.coast.c2",
        "prompt": "Which evidence meets the coastal minimum combination?",
        "options": [
          "Profile and sediment data, landform record, geology map and another secondary source",
          "Only beach width and a selfie",
          "Only a national population table"
        ],
        "answer": 0,
        "why": "Quantitative, qualitative and secondary evidence serve complementary roles; implications for people also need explanation.",
        "concept": "geo.a.final.field-sources"
      },
      {
        "id": "geo.a.final.coast.c3",
        "prompt": "A groyne traps sand on one side. What should an enquiry consider?",
        "options": [
          "Transport direction and possible downdrift effects",
          "That all beaches must gain sand equally",
          "That tides stop at the structure"
        ],
        "answer": 0,
        "why": "Management can redistribute sediment; a local benefit may accompany effects elsewhere.",
        "concept": "geo.a.final.coast-people"
      },
      {
        "id": "geo.a.final.coast.c4",
        "prompt": "Why avoid comparing two profiles without dates or tide context?",
        "options": [
          "Different conditions may explain part of the contrast",
          "Profiles never change",
          "Any difference proves long-term erosion"
        ],
        "answer": 0,
        "why": "Temporal context helps separate survey conditions from longer-term change.",
        "concept": "geo.a.final.coast-method"
      }
    ],
    "bigIdea": "Explain place and people",
    "fieldworkOption": "coasts",
    "fieldworkGroup": "physical"
  },
  {
    "id": "geography.a.fieldwork.8",
    "topicId": "geography.a.fieldwork",
    "title": "Investigate change in an urban area",
    "refs": [
      "7B",
      "enquiry1",
      "enquiry2",
      "enquiry3",
      "enquiry4",
      "enquiry5",
      "enquiry6"
    ],
    "minutes": 30,
    "cards": [
      [
        "Locate the change you want to test",
        "Focus on a central or inner urban area and define the question, sites and time period. A land-use survey records function quantitatively; an environmental-quality survey records qualitative judgements using stated criteria. A score is not automatically objective because it is a number. Keep observer rules and comparison times consistent."
      ],
      [
        "Match people, land and physical setting",
        "In an invented 20-premises sample, 8retail premises form 40%. Define mixed uses and vacant premises before surveying. Compare streets with respect to relief, waterways, flood exposure and routes, alongside residents and visitors. Perceived quality can differ between people; record reasons and variation rather than assuming a single score captures every view."
      ],
      [
        "Check secondary dates and boundaries",
        "Use Census data and at least one other secondary source, such as dated maps or planning records. Census 2021 is a snapshot, not a live count. Ensure neighbourhood boundaries, definitions and denominators match before comparing change. Observing new businesses after regeneration does not by itself prove the scheme caused every change."
      ]
    ],
    "cardViews": [
      "landuse",
      "quality",
      "sources"
    ],
    "model": "dev-final-urban",
    "labRequired": true,
    "tasks": [
      [
        "What is measured by a land-use function survey?",
        [
          "Counts or shares of defined uses",
          "Only opinions about traffic",
          "The age of every resident"
        ],
        0
      ],
      [
        "Why define mixed-use premises first?",
        [
          "So sites are classified consistently",
          "To exclude inconvenient observations",
          "To guarantee retail dominates"
        ],
        0
      ],
      [
        "What is qualitative environmental evidence?",
        [
          "Descriptions or criterion-based judgements about the environment",
          "Only a building count",
          "Only its postcode"
        ],
        0
      ],
      [
        "What secondary source must be included?",
        [
          "Census data plus another suitable source",
          "Only current social-media likes",
          "No dated source"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.urban.p1",
        "prompt": "6retail premises out of 24 surveyed equal what share?",
        "options": [
          "25%",
          "4%",
          "400%"
        ],
        "answer": 0,
        "why": "6\u00f724\u00d7100=25%; state the sampled denominator.",
        "concept": "geo.a.final.landuse-share"
      },
      {
        "id": "geo.a.final.urban.p2",
        "prompt": "Why compare neighbourhood boundaries?",
        "options": [
          "A changed area can create misleading apparent population change",
          "Every boundary is identical",
          "Population tables never use areas"
        ],
        "answer": 0,
        "why": "Like-for-like comparison needs consistent geography and definitions.",
        "concept": "geo.a.final.census-scope"
      },
      {
        "id": "geo.a.final.urban.p3",
        "prompt": "Does an ordinal quality score measure exact equal gaps?",
        "options": [
          "Not necessarily; the scoring criteria may rank judgements",
          "Yes; every scoring gap has a physical unit",
          "Yes; it is a census count"
        ],
        "answer": 0,
        "why": "Numerical coding does not automatically make subjective categories interval measurements.",
        "concept": "geo.a.final.quality-score"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.urban.c1",
        "prompt": "9 of 30premises are services. Share?",
        "options": [
          "30%",
          "3.3%",
          "270%"
        ],
        "answer": 0,
        "why": "9\u00f730\u00d7100=30%.",
        "concept": "geo.a.final.landuse-share"
      },
      {
        "id": "geo.a.final.urban.c2",
        "prompt": "Which design most fairly compares two urban streets?",
        "options": [
          "Same criteria, comparable survey times and stated sampling rules",
          "Different durations with no adjustment",
          "One observer using undefined impressions"
        ],
        "answer": 0,
        "why": "Consistent methods help interpret differences; remaining bias still needs evaluation.",
        "concept": "geo.a.final.urban-method"
      },
      {
        "id": "geo.a.final.urban.c3",
        "prompt": "Which physical-human interaction is relevant?",
        "options": [
          "A riverside floodplain constraining housing and access",
          "Only the colour of a survey sheet",
          "The assumption that relief never affects cities"
        ],
        "answer": 0,
        "why": "Physical setting interacts with development and users of urban space.",
        "concept": "geo.a.final.urban-interaction"
      },
      {
        "id": "geo.a.final.urban.c4",
        "prompt": "A census snapshot and present shop count differ in date and unit. What follows?",
        "options": [
          "They provide different context and cannot be treated as the same measure",
          "One must be false",
          "They can be subtracted as identical population counts"
        ],
        "answer": 0,
        "why": "Date, geography and variable must be checked before numerical comparison.",
        "concept": "geo.a.final.census-scope"
      }
    ],
    "bigIdea": "Check secondary dates and boundaries",
    "fieldworkOption": "urban",
    "fieldworkGroup": "human"
  },
  {
    "id": "geography.a.fieldwork.9",
    "topicId": "geography.a.fieldwork",
    "title": "Investigate change in a rural settlement",
    "refs": [
      "7B",
      "enquiry1",
      "enquiry2",
      "enquiry3",
      "enquiry4",
      "enquiry5",
      "enquiry6"
    ],
    "minutes": 30,
    "cards": [
      [
        "Count movement and listen to views",
        "A rural settlement enquiry combines quantitative flows of people with qualitative views about environmental quality. Define who is counted, crossing point, direction and duration. Questionnaires or interviews need voluntary participation, respectful wording and no unnecessary identifying data. Residents and visitors may value a place differently."
      ],
      [
        "Compare rates and settings",
        "Our invented counts are 18 people in 6 minutes and 30 in 10 minutes. Both equal 3 people/minute, although totals differ. Match times, weather and weekdays where possible; cover appropriate routes rather than only the easiest caf\u00e9. Relief, rivers, roads and footpaths can channel movement and shape settlement, services and visitor experiences."
      ],
      [
        "Connect observations with change",
        "Use Census data and another secondary source, such as a historical map or service record. Resident population is not the same as daily visitor flow. Report nonresponse, inaccessible sites and unrepresented periods. A limited survey can support a bounded interpretation, but cannot establish every resident\u2019s opinion or a year-round tourism effect."
      ]
    ],
    "cardViews": [
      "flow",
      "views",
      "sources"
    ],
    "model": "dev-final-rural",
    "labRequired": true,
    "tasks": [
      [
        "What is a comparable flow measure?",
        [
          "People per stated time at a defined crossing",
          "Only the number of questionnaire pages",
          "Only permanent residents counted in a census"
        ],
        0
      ],
      [
        "Why can a larger raw count be misleading?",
        [
          "It may cover a longer observation period",
          "It always shows a higher rate",
          "All durations are identical"
        ],
        0
      ],
      [
        "How should nonresponse be handled?",
        [
          "Report it and consider who may be missing",
          "Count every refusal as a negative opinion",
          "Invent responses"
        ],
        0
      ],
      [
        "Which sources are required?",
        [
          "Census and another suitable secondary source",
          "Only an undated photo",
          "Only your own counts"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.rural.p1",
        "prompt": "24 people in 8 minutes gives what rate?",
        "options": [
          "3 people/minute",
          "192 people/minute",
          "0.33 people/minute"
        ],
        "answer": 0,
        "why": "Divide count by duration and retain the rate unit.",
        "concept": "geo.a.final.flow-rate"
      },
      {
        "id": "geo.a.final.rural.p2",
        "prompt": "Does a census measure all tourists passing a village today?",
        "options": [
          "No; usual residents and current visitor flows differ",
          "Yes; all movement is population",
          "Yes; census data is live"
        ],
        "answer": 0,
        "why": "Variables and dates define what each source can support.",
        "concept": "geo.a.final.rural-sources"
      },
      {
        "id": "geo.a.final.rural.p3",
        "prompt": "Why sample more than one route?",
        "options": [
          "Relief, paths and destinations can concentrate movement",
          "To force all rates to match",
          "Because every route has the same users"
        ],
        "answer": 0,
        "why": "Spatial coverage matters to representativeness and explanation.",
        "concept": "geo.a.final.rural-method"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.rural.c1",
        "prompt": "40 people in 10 minutes compared with 18 in 6 minutes means what?",
        "options": [
          "The rates are 4 and 3 people/minute",
          "The second rate is higher because 6 is smaller",
          "Both rates are 40 people/minute"
        ],
        "answer": 0,
        "why": "Normalise by duration:40/10=4 and 18/6=3.",
        "concept": "geo.a.final.flow-rate"
      },
      {
        "id": "geo.a.final.rural.c2",
        "prompt": "An interview asks \u201cDon\u2019t you hate the traffic?\u201d What is wrong?",
        "options": [
          "Leading wording may bias views",
          "It is a neutral census question",
          "It guarantees a reliable sample"
        ],
        "answer": 0,
        "why": "Neutral wording and voluntary responses support credible qualitative evidence.",
        "concept": "geo.a.final.rural-ethics"
      },
      {
        "id": "geo.a.final.rural.c3",
        "prompt": "How might steep relief affect a settlement enquiry?",
        "options": [
          "It can channel roads, paths and development",
          "It determines every person\u2019s opinion",
          "It makes census boundaries irrelevant"
        ],
        "answer": 0,
        "why": "Physical features interact with access and land use without explaining everything alone.",
        "concept": "geo.a.final.rural-interaction"
      },
      {
        "id": "geo.a.final.rural.c4",
        "prompt": "Which conclusion fits a two-hour weekday survey?",
        "options": [
          "A statement about sampled places/times, with limits",
          "A definitive claim about all annual flows",
          "Every resident shares one view"
        ],
        "answer": 0,
        "why": "Bound conclusions to the actual coverage and sources.",
        "concept": "geo.a.final.rural-method"
      }
    ],
    "bigIdea": "Connect observations with change",
    "fieldworkOption": "rural",
    "fieldworkGroup": "human"
  },
  {
    "id": "geography.a.skills.1",
    "topicId": "geography.a.skills",
    "title": "Read and build a useful sketch map",
    "refs": [
      "skills.atlas",
      "skills.sketch",
      "skills.settlements"
    ],
    "minutes": 30,
    "cards": [
      [
        "Pattern, scale and exceptions",
        "Describe a distribution using its pattern, location and exceptions. Clustered points concentrate; dispersed points spread apart; a linear settlement follows a route or feature. Regional and local maps answer different questions. A distribution does not establish why it formed: add relevant relief, transport or historical evidence."
      ],
      [
        "Site and situation",
        "Site describes the land occupied, such as a dry terrace beside a river. Situation describes connections to other places, such as a route junction near a market town. Settlement shape can be linear, nucleated or dispersed. A useful sketch simplifies these relationships with a title, north indication, key and clearly placed annotations."
      ],
      [
        "Draw to communicate a claim",
        "A sketch is selective rather than a copy of every detail. Add features needed for the question, show relative position and distinguish observation from inference. A note such as \u201chouses follow the east bank road\u201d explains a spatial pattern better than \u201cnice village\u201d. Our diagrams are invented and not navigation maps."
      ]
    ],
    "cardViews": [
      "patterns",
      "settlement",
      "sketch"
    ],
    "model": "dev-final-maps",
    "labRequired": true,
    "tasks": [
      [
        "Which describes a linear pattern?",
        [
          "Features follow a narrow route or line",
          "Every feature is isolated equally",
          "All points occupy one identical location"
        ],
        0
      ],
      [
        "Which is situation?",
        [
          "Connection to surrounding towns and routes",
          "Only the rock under one building",
          "Only the height of a doorstep"
        ],
        0
      ],
      [
        "Why include a key?",
        [
          "Symbols need stated meanings",
          "It proves all features are to scale",
          "It replaces direction"
        ],
        0
      ],
      [
        "What makes an annotation useful?",
        [
          "It links a placed feature to a relevant observation",
          "It just says beautiful",
          "It hides uncertainty"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.maps.p1",
        "prompt": "What should a distribution description include?",
        "options": [
          "Pattern, location and relevant exceptions",
          "Only a cause with no description",
          "Every individual map label copied"
        ],
        "answer": 0,
        "why": "Describe what is spatially present before explaining why.",
        "concept": "geo.a.final.map-pattern"
      },
      {
        "id": "geo.a.final.maps.p2",
        "prompt": "A settlement occupies a flat river terrace. This describes what?",
        "options": [
          "Site",
          "Only situation",
          "Its annual birth rate"
        ],
        "answer": 0,
        "why": "Site refers to the land occupied; situation concerns wider relationships.",
        "concept": "geo.a.final.site-situation"
      },
      {
        "id": "geo.a.final.maps.p3",
        "prompt": "Does an unlabeled arrow necessarily mean north?",
        "options": [
          "No; its meaning must be stated",
          "Yes; all arrows point north",
          "Yes; it always shows wind"
        ],
        "answer": 0,
        "why": "Symbols and orientation need explicit interpretation.",
        "concept": "geo.a.final.map-key"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.maps.c1",
        "prompt": "Homes cluster at a road junction with two outlying farms. Best description?",
        "options": [
          "A main cluster with two dispersed exceptions",
          "Every building forms a continuous line",
          "Uniform density everywhere"
        ],
        "answer": 0,
        "why": "A description should retain the pattern and exceptions.",
        "concept": "geo.a.final.map-pattern"
      },
      {
        "id": "geo.a.final.maps.c2",
        "prompt": "Which is a situation statement?",
        "options": [
          "The village links two towns at a road crossing",
          "The village stands on gravel",
          "The ground slopes gently east"
        ],
        "answer": 0,
        "why": "Situation relates the settlement to surrounding places and networks.",
        "concept": "geo.a.final.site-situation"
      },
      {
        "id": "geo.a.final.maps.c3",
        "prompt": "A sketch shows roads and housing with no purpose. What improves it most?",
        "options": [
          "A title, meaningful key, orientation and relevant annotations",
          "More decoration without labels",
          "Removing all explanations"
        ],
        "answer": 0,
        "why": "Useful cartography serves a question and communicates symbols and relationships.",
        "concept": "geo.a.final.map-key"
      },
      {
        "id": "geo.a.final.maps.c4",
        "prompt": "Can a simple sketch prove the cause of settlement growth?",
        "options": [
          "No; spatial interpretation needs supporting evidence",
          "Yes; every sketch is causal proof",
          "Yes; north arrows prove history"
        ],
        "answer": 0,
        "why": "Patterns can suggest explanations but do not by themselves establish causation.",
        "concept": "geo.a.final.map-inference"
      }
    ],
    "bigIdea": "Draw to communicate a claim"
  },
  {
    "id": "geography.a.skills.2",
    "topicId": "geography.a.skills",
    "title": "Contours, coordinates, scale and gradient",
    "refs": [
      "skills.relief",
      "skills.coordinates",
      "skills.sections"
    ],
    "minutes": 30,
    "cards": [
      [
        "Read height and slope",
        "Contours join equal heights; spot heights mark a point. Close spacing usually indicates a steeper slope when interval and scale match. A cross-section plots height along a stated transect, using the distance and height scales. Vertical exaggeration can make a gentle landscape look dramatic; read both axes."
      ],
      [
        "Use the map\u2019s reference system",
        "In a six-figure reference, read eastings then northings and estimate tenths within a 1 km square. In our original teaching grid, a point at easting 23.4 km and northing 46.7 km gives 234467 within its stated square context. Real British National Grid references also need their two-letter 100 km square. These diagrams teach conventions; they are not actual OS maps."
      ],
      [
        "Convert before calculating",
        "At 1:25000, 1cm represents 250 m, so 4cm represents 1 km. A rise 50 m over horizontal distance 1000 m gives gradient 1:20. Keep units consistent. Area scale squares the linear factor:1cm\u00b2 on that map represents 62500 m\u00b2. Estimate curved routes in sections and state measurement precision."
      ]
    ],
    "cardViews": [
      "contours",
      "grid",
      "profile"
    ],
    "model": "dev-final-relief",
    "labRequired": true,
    "tasks": [
      [
        "What do contours connect?",
        [
          "Points of equal height",
          "Points with identical rainfall always",
          "Only settlement centres"
        ],
        0
      ],
      [
        "Which coordinate comes first?",
        [
          "Easting",
          "Northing",
          "The nearest town\u2019s population"
        ],
        0
      ],
      [
        "What does 4cm represent at 1:25000?",
        [
          "1 km",
          "100 km",
          "100 m"
        ],
        0
      ],
      [
        "What is gradient?",
        [
          "Vertical change divided by horizontal distance in matching units",
          "The map\u2019s title",
          "Always an angle in degrees"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.relief.p1",
        "prompt": "At 1:50000, 2cm represents what distance?",
        "options": [
          "1 km",
          "100 m",
          "100 km"
        ],
        "answer": 0,
        "why": "2\u00d750000cm=100000cm=1000 m=1 km.",
        "concept": "geo.a.final.map-scale"
      },
      {
        "id": "geo.a.final.relief.p2",
        "prompt": "A rise 20 m over 400 m has what gradient?",
        "options": [
          "1:20",
          "20:1",
          "1:400"
        ],
        "answer": 0,
        "why": "20:400 simplifies to 1:20.",
        "concept": "geo.a.final.gradient"
      },
      {
        "id": "geo.a.final.relief.p3",
        "prompt": "Why may a cross-section appear too steep?",
        "options": [
          "Its vertical scale may be exaggerated relative to horizontal",
          "Contours always exaggerate real slopes",
          "North arrows change altitude"
        ],
        "answer": 0,
        "why": "Different axis scales alter visual steepness without changing the values.",
        "concept": "geo.a.final.section"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.relief.c1",
        "prompt": "At 1:25000, 6cm is what distance?",
        "options": [
          "1.5 km",
          "15 km",
          "150 m"
        ],
        "answer": 0,
        "why": "6\u00d7250 m=1500 m=1.5 km.",
        "concept": "geo.a.final.map-scale"
      },
      {
        "id": "geo.a.final.relief.c2",
        "prompt": "A rise 30 m across 600 m horizontal run gives what gradient?",
        "options": [
          "1:20",
          "1:30",
          "20:1"
        ],
        "answer": 0,
        "why": "30/600=1/20.",
        "concept": "geo.a.final.gradient"
      },
      {
        "id": "geo.a.final.relief.c3",
        "prompt": "A point lies 0.2 into easting 31square and 0.8 into northing 52square. Six figures?",
        "options": [
          "312528",
          "528312",
          "315228"
        ],
        "answer": 0,
        "why": "Read 31then 2, then 52then 8; include the appropriate grid-square context on a real map.",
        "concept": "geo.a.final.grid-reference"
      },
      {
        "id": "geo.a.final.relief.c4",
        "prompt": "At 1:10000, 1cm\u00b2 on a map represents what ground area?",
        "options": [
          "10000 m\u00b2",
          "100 m\u00b2",
          "1000000 m\u00b2"
        ],
        "answer": 0,
        "why": "1cm represents 100 m, so the square represents 100\u00d7100=10000 m\u00b2.",
        "concept": "geo.a.final.area-scale"
      }
    ],
    "bigIdea": "Convert before calculating"
  },
  {
    "id": "geography.a.skills.3",
    "topicId": "geography.a.skills",
    "title": "Connect photographs with maps",
    "refs": [
      "skills.photos",
      "skills.linked-resources"
    ],
    "minutes": 30,
    "cards": [
      [
        "Recognise the viewpoint",
        "Ground photographs show a view from near ground level; vertical aerial images look down, oblique images look at an angle, and satellite sensors provide wider coverage. A photograph is dated evidence with a limited field of view. It does not automatically identify compass direction, exact distance or the cause of every visible feature."
      ],
      [
        "Separate what is seen from what is inferred",
        "The genuine High Force image shows a waterfall, a steep rock face and a pool. It cannot alone establish an annual erosion rate. The retained Mumbai Landsat image is false-colour historical cover evidence, not current housing quality. Its published source date is 23 July 2002; acquisition date is not supplied on that page."
      ],
      [
        "Match stable landmarks and direction",
        "Link a photograph to a map using features such as a bend, bridge, coast or ridge and the camera\u2019s stated location/direction. Left in the image is not automatically west. Annotate visible evidence first, then a supported interpretation, and state uncertainty where features are hidden or ambiguous."
      ]
    ],
    "cardViews": [
      "ground",
      "satellite",
      "direction"
    ],
    "model": "dev-final-photos",
    "labRequired": true,
    "tasks": [
      [
        "Which is directly visible at High Force?",
        [
          "Water dropping over a rock face into a pool",
          "The exact annual erosion rate",
          "Every past flood"
        ],
        0
      ],
      [
        "Can false colour be interpreted like a natural-colour photograph?",
        [
          "No; use its key and sensor context",
          "Yes; all dark pixels mean poverty",
          "Yes; blue-grey always means water"
        ],
        0
      ],
      [
        "Does left in a photo necessarily mean west?",
        [
          "No; camera direction matters",
          "Yes; all cameras face north",
          "Yes; every image is an OS map"
        ],
        0
      ],
      [
        "What helps locate an image on a map?",
        [
          "Matching a stable landmark and known viewpoint",
          "Only the filename length",
          "Only the colour of the caption"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.photos.p1",
        "prompt": "Why label an image\u2019s date?",
        "options": [
          "Land cover and management may have changed",
          "All images show today",
          "Dates prove causation"
        ],
        "answer": 0,
        "why": "Images are snapshots, not automatically current or a time series.",
        "concept": "geo.a.final.photo-date"
      },
      {
        "id": "geo.a.final.photos.p2",
        "prompt": "What separates observation from inference?",
        "options": [
          "A visible feature versus an explanation requiring support",
          "Only the number of words",
          "An observation is always a cause"
        ],
        "answer": 0,
        "why": "Describe visible evidence before proposing how it formed or what it implies.",
        "concept": "geo.a.final.photo-inference"
      },
      {
        "id": "geo.a.final.photos.p3",
        "prompt": "Which image is most map-like for plan layout?",
        "options": [
          "A vertical aerial image with known orientation and scale",
          "An unlocated ground portrait",
          "A close-up with no context"
        ],
        "answer": 0,
        "why": "Plan-view geometry can be related to a map, but scale/distortion still matter.",
        "concept": "geo.a.final.photo-types"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.photos.c1",
        "prompt": "The camera faces east. Which direction is to its left?",
        "options": [
          "North",
          "South",
          "West"
        ],
        "answer": 0,
        "why": "Facing east, left is north; left is not always west.",
        "concept": "geo.a.final.photo-direction"
      },
      {
        "id": "geo.a.final.photos.c2",
        "prompt": "A historical satellite image shows an area of vegetation. What can it alone establish?",
        "options": [
          "Cover visible for that dated image and classification",
          "Current household incomes",
          "Exact biodiversity for all species"
        ],
        "answer": 0,
        "why": "Sensor evidence has a scope and cannot directly reveal every social or ecological property.",
        "concept": "geo.a.final.photo-inference"
      },
      {
        "id": "geo.a.final.photos.c3",
        "prompt": "Which annotation is best supported by the High Force image?",
        "options": [
          "A waterfall drops from a steep rock face to a pool",
          "The waterfall retreats exactly 2 m each year",
          "The entire catchment is flooded now"
        ],
        "answer": 0,
        "why": "The first describes visible evidence; the others require independent dated measurements.",
        "concept": "geo.a.final.photo-inference"
      },
      {
        "id": "geo.a.final.photos.c4",
        "prompt": "An image has no acquisition date on its source page. What is honest?",
        "options": [
          "State the known publication date and that acquisition date is not given",
          "Invent a precise date",
          "Treat publication as proven acquisition"
        ],
        "answer": 0,
        "why": "Do not silently turn publication metadata into sensor acquisition metadata.",
        "concept": "geo.a.final.photo-date"
      }
    ],
    "bigIdea": "Match stable landmarks and direction"
  },
  {
    "id": "geography.a.skills.4",
    "topicId": "geography.a.skills",
    "title": "Join spatial records and research Census data",
    "refs": [
      "skills.gis",
      "skills.census",
      "skills.population-maps"
    ],
    "minutes": 30,
    "cards": [
      [
        "A GIS links location and attributes",
        "A shared unique identifier can join a boundary layer to a data table. Our retained four-state example uses real Natural Earth geometry and INPE PRODES2024 consolidated annual forest-clearance attributes. Choose the state code and year to highlight a polygon and its value. A regional colour summarises an area; it does not locate individual clearings."
      ],
      [
        "Make the right query",
        "For Amazonas, codeBR-AM, the retained 2024value is 1223 km\u00b2 of monitored annual primary-forest clearance;2023 is 1610 km\u00b2. These are annual monitored-region indicators, not total forest area, all forest loss or percentages of the entire state. Use matching keys, dates and units, and distinguish a missing value from zero."
      ],
      [
        "Census research needs definitions",
        "ONS Census 2021 maps describe England and Wales at that census date; other UK nations have different census systems and dates. Choose variable and geography, then check units and denominators. The retained GLA summary gives median age 35 for London versus 40 for England and Wales; median age is not the percentage over 35 or a current average."
      ]
    ],
    "cardViews": [
      "join",
      "map",
      "census"
    ],
    "model": "dev-final-gis",
    "labRequired": true,
    "tasks": [
      [
        "What joins a polygon and its correct row?",
        [
          "A shared compatible unique area code",
          "The order rows happen to appear",
          "The same display colour"
        ],
        0
      ],
      [
        "Why does regional clearance colouring not show each cleared patch?",
        [
          "The attribute summarises the region",
          "Every pixel was measured as cleared",
          "The whole state lost all forest"
        ],
        0
      ],
      [
        "Is missing data the same as zero?",
        [
          "No; the source may not supply a value",
          "Yes; both mean no change",
          "Yes; all joins fill zero"
        ],
        0
      ],
      [
        "What must Census research record?",
        [
          "Date, geography, variable and denominator",
          "Only a screenshot title",
          "Only a percentage with no population"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.gis.p1",
        "prompt": "Why join on area codes rather than names alone?",
        "options": [
          "Names can vary or repeat while compatible codes identify areas",
          "Codes prove every number is current",
          "Names never change"
        ],
        "answer": 0,
        "why": "Stable compatible keys reduce mismatches; boundary versions still need checking.",
        "concept": "geo.a.final.gis-join"
      },
      {
        "id": "geo.a.final.gis.p2",
        "prompt": "Does a median age 35mean 35%are older?",
        "options": [
          "No; it is an age in years, not a population share",
          "Yes; medians are percentages",
          "Yes; it means mean age 35"
        ],
        "answer": 0,
        "why": "Median splits the ordered age distribution; do not change its unit or statistic.",
        "concept": "geo.a.final.census-measure"
      },
      {
        "id": "geo.a.final.gis.p3",
        "prompt": "Can a Census 2021 map be called a live 2026count?",
        "options": [
          "No; keep its date and definition",
          "Yes; online always means live",
          "Yes; every census refreshes daily"
        ],
        "answer": 0,
        "why": "Publication on the web does not make observations current.",
        "concept": "geo.a.final.census-date"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.gis.c1",
        "prompt": "The attribute table supplies BR-RO2024=360 km\u00b2. Which join is correct?",
        "options": [
          "Rond\u00f4nia\u2019s matching code and 2024field",
          "Amazonas by row position",
          "Any polygon coloured blue"
        ],
        "answer": 0,
        "why": "Code and year determine the matching regional record.",
        "concept": "geo.a.final.gis-join"
      },
      {
        "id": "geo.a.final.gis.c2",
        "prompt": "What does a choropleth summarise?",
        "options": [
          "An area\u2019s assigned statistic, with limits inside the area",
          "The exact value at every location",
          "A household-by-household survey point"
        ],
        "answer": 0,
        "why": "Within-area variation is hidden by aggregate colouring.",
        "concept": "geo.a.final.choropleth"
      },
      {
        "id": "geo.a.final.gis.c3",
        "prompt": "London\u2019s median age 35 and comparator 40differ by how much?",
        "options": [
          "5 years",
          "5percentage points",
          "35%"
        ],
        "answer": 0,
        "why": "Subtract ages in years; the statistic is not a percentage.",
        "concept": "geo.a.final.census-measure"
      },
      {
        "id": "geo.a.final.gis.c4",
        "prompt": "Why check boundaries in a Census change comparison?",
        "options": [
          "Changing geography may alter totals even without equivalent population change",
          "All boundaries are permanent",
          "Only colour choice affects totals"
        ],
        "answer": 0,
        "why": "Use comparable areas or an appropriate harmonised dataset.",
        "concept": "geo.a.final.census-date"
      }
    ],
    "bigIdea": "Census research needs definitions"
  },
  {
    "id": "geography.a.skills.5",
    "topicId": "geography.a.skills",
    "title": "Choose, build and interpret graphs",
    "refs": [
      "skills.graphs-construct",
      "skills.graphs-interpret",
      "skills.population-maps"
    ],
    "minutes": 30,
    "cards": [
      [
        "Match the display to the variable",
        "Bars compare categories; a line can show change over ordered time; a pie shows parts of a complete whole. A pictogram needs a key. An equal-interval histogram groups continuous values into touching classes. State axes, units and scales. In our construction lab, enter counts 4, 8, 12 with a zero-based maximum 12or greater and label people."
      ],
      [
        "Read specialised diagrams carefully",
        "A population pyramid shows age-sex structure, not a time series. Choropleths show area summaries; flow maps use line direction and width with a key. In triangular plots three shares sum to 100%; radial diagrams need axis scales; a wind rose shows direction-frequency, conventionally where wind comes from. Proportional circles should scale area, so four times the value means twice the radius."
      ],
      [
        "Construct before drawing conclusions",
        "Our bar builder updates the chart from your entries, exposing scale errors and missing units. A25%pie sector is 90\u00b0because 0.25\u00d7360=90. When reading cumulative frequencies, values are running totals; obtain a class frequency by subtraction. A single lab rehearses construction, not every required hand-drawn chart or full graphical fluency."
      ]
    ],
    "cardViews": [
      "types",
      "special",
      "construct"
    ],
    "model": "dev-final-graphs",
    "labRequired": true,
    "tasks": [
      [
        "Which suits change over measured years?",
        [
          "A labelled time-series line graph",
          "An unordered category pie with no whole",
          "An unlabelled image"
        ],
        0
      ],
      [
        "What must three triangular shares total?",
        [
          "100%",
          "360%",
          "Any unrelated total"
        ],
        0
      ],
      [
        "Why do histogram bars touch?",
        [
          "They represent adjacent continuous class intervals",
          "All bars always touch",
          "They represent compass directions"
        ],
        0
      ],
      [
        "What happens to radius when a proportional circle\u2019s value quadruples?",
        [
          "It doubles when area represents value",
          "It quadruples",
          "It stays unchanged"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.graphs.p1",
        "prompt": "A20%pie share spans how many degrees?",
        "options": [
          "72\u00b0",
          "20\u00b0",
          "180\u00b0"
        ],
        "answer": 0,
        "why": "0.20\u00d7360=72degrees.",
        "concept": "geo.a.final.pie-angle"
      },
      {
        "id": "geo.a.final.graphs.p2",
        "prompt": "A pictogram key says one symbol=10 people. Three and a half symbols mean?",
        "options": [
          "35 people",
          "3.5 people",
          "350 people"
        ],
        "answer": 0,
        "why": "Use the stated key, including the half symbol.",
        "concept": "geo.a.final.graph-key"
      },
      {
        "id": "geo.a.final.graphs.p3",
        "prompt": "Does a broad pyramid base directly show future population exactly?",
        "options": [
          "No; it shows the age-sex structure at the source date",
          "Yes; it predicts all migration",
          "Yes; it is a rainfall graph"
        ],
        "answer": 0,
        "why": "Structure can inform interpretation but does not determine births, deaths and migration.",
        "concept": "geo.a.final.pyramid"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.graphs.c1",
        "prompt": "A15%pie sector is what angle?",
        "options": [
          "54\u00b0",
          "15\u00b0",
          "150\u00b0"
        ],
        "answer": 0,
        "why": "0.15\u00d7360=54degrees.",
        "concept": "geo.a.final.pie-angle"
      },
      {
        "id": "geo.a.final.graphs.c2",
        "prompt": "Which suits grouped continuous measurements in equal-width classes?",
        "options": [
          "A histogram with adjacent labelled intervals",
          "Unrelated pictures without a key",
          "A population flow line"
        ],
        "answer": 0,
        "why": "A histogram represents grouped continuous data; equal-width classes allow frequency heights.",
        "concept": "geo.a.final.graph-choice"
      },
      {
        "id": "geo.a.final.graphs.c3",
        "prompt": "A triangular point has shares 20%, 30%, 50%. What is true?",
        "options": [
          "They form a complete 100%composition",
          "They total 90%",
          "They must be temperatures"
        ],
        "answer": 0,
        "why": "The three components sum to 100%; axes and direction still need reading.",
        "concept": "geo.a.final.triangular"
      },
      {
        "id": "geo.a.final.graphs.c4",
        "prompt": "A wind rose\u2019s longest northern spoke conventionally indicates what?",
        "options": [
          "Most frequent winds from the north, under its key",
          "All winds travel toward the north",
          "The north has the highest population"
        ],
        "answer": 0,
        "why": "Wind-direction convention is from-direction; read the frequency scale and any speed categories.",
        "concept": "geo.a.final.windrose"
      }
    ],
    "bigIdea": "Construct before drawing conclusions"
  },
  {
    "id": "geography.a.skills.6",
    "topicId": "geography.a.skills",
    "title": "Ratios, units, probabilities and log scales",
    "refs": [
      "skills.units",
      "skills.ratio-frequency"
    ],
    "minutes": 30,
    "cards": [
      [
        "Convert the quantity you actually have",
        "Length, area and volume scale differently:1 km=1000 m, but 1 km\u00b2=1000000 m\u00b2. A ratio expresses a relationship in common units; a proportion is a part of a defined whole. Keep the denominator and units visible so a large number is not mistaken for a large rate."
      ],
      [
        "A return period is not a timetable",
        "A1 in 200 annual chance corresponds to 0.5%in any year under the stated model. It does not promise 199safe years between floods. Repeated events can occur close together; risk also depends on exposure and consequences. Do not turn this classroom probability into a site-specific flood forecast."
      ],
      [
        "Equal log steps multiply",
        "On a base 10logarithmic axis, 1, 10, 100, 1000are equally spaced because each step multiplies by 10. Zero and negative values cannot appear on that scale. A change from 10 to 100has the same log-distance as 100 to 1000, although the absolute increases differ. State the scale before comparing apparent rates of change."
      ]
    ],
    "cardViews": [
      "units",
      "probability",
      "log"
    ],
    "model": "dev-final-units",
    "labRequired": true,
    "tasks": [
      [
        "How many m\u00b2are in 2 km\u00b2?",
        [
          "2000000 m\u00b2",
          "2000 m\u00b2",
          "200 m\u00b2"
        ],
        0
      ],
      [
        "A1 in 100 annual chance is what percentage?",
        [
          "1%",
          "100%",
          "0.01%"
        ],
        0
      ],
      [
        "What changes equally on a base 10 log axis?",
        [
          "Multiplicative factors",
          "Absolute differences always",
          "Only category names"
        ],
        0
      ],
      [
        "Can zero be plotted on a logarithmic axis?",
        [
          "No; log of zero is undefined",
          "Yes; it is always the first tick",
          "Yes; it equals log 10"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.units.p1",
        "prompt": "0.5 km\u00b2 equals what?",
        "options": [
          "500000 m\u00b2",
          "500 m\u00b2",
          "5000 m\u00b2"
        ],
        "answer": 0,
        "why": "Square the length conversion:0.5\u00d71000000.",
        "concept": "geo.a.final.area-units"
      },
      {
        "id": "geo.a.final.units.p2",
        "prompt": "A1 in 50 annual chance equals what?",
        "options": [
          "2%",
          "50%",
          "0.02%"
        ],
        "answer": 0,
        "why": "1\u00f750\u00d7100=2%; it is an annual probability under the stated assumptions.",
        "concept": "geo.a.final.annual-probability"
      },
      {
        "id": "geo.a.final.units.p3",
        "prompt": "Which values are equally spaced on a base 10 log axis?",
        "options": [
          "2, 20, 200",
          "2, 12, 22",
          "0, 10, 20"
        ],
        "answer": 0,
        "why": "Each value is ten times the previous one; equal log steps represent ratios.",
        "concept": "geo.a.final.log-scale"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.units.c1",
        "prompt": "3 ha is how many m\u00b2?",
        "options": [
          "30000 m\u00b2",
          "300 m\u00b2",
          "3000000 m\u00b2"
        ],
        "answer": 0,
        "why": "1hectare=10000 m\u00b2.",
        "concept": "geo.a.final.area-units"
      },
      {
        "id": "geo.a.final.units.c2",
        "prompt": "A1 in 250 annual probability is what percent?",
        "options": [
          "0.4%",
          "4%",
          "250%"
        ],
        "answer": 0,
        "why": "1/250\u00d7100=0.4%.",
        "concept": "geo.a.final.annual-probability"
      },
      {
        "id": "geo.a.final.units.c3",
        "prompt": "Two severe floods occur in consecutive years. Does that contradict a 1 in 100 annual model?",
        "options": [
          "No; it is not a fixed 100-year schedule",
          "Yes; this is mathematically impossible",
          "Yes; no second flood is allowed"
        ],
        "answer": 0,
        "why": "Annual probability is not a waiting-time guarantee; real risks may also change.",
        "concept": "geo.a.final.annual-probability"
      },
      {
        "id": "geo.a.final.units.c4",
        "prompt": "On a base 10 log axis, 10\u2192100 and 100\u21921000have what relation?",
        "options": [
          "Equal plotted steps, different absolute increases",
          "Equal absolute increases",
          "No possible comparison"
        ],
        "answer": 0,
        "why": "Both multiply by 10; the absolute increases are 90 and 900.",
        "concept": "geo.a.final.log-scale"
      }
    ],
    "bigIdea": "Equal log steps multiply"
  },
  {
    "id": "geography.a.skills.7",
    "topicId": "geography.a.skills",
    "title": "Summarise data without hiding variation",
    "refs": [
      "skills.statistics",
      "skills.percentage-percentiles"
    ],
    "minutes": 30,
    "cards": [
      [
        "Centre and spread answer different questions",
        "The mean uses every value; the median is the ordered middle; the mode is most frequent. Range is maximum minus minimum. For 2, 4, 6, 8, 10, 12, 14, 16the mean and median are 9. Using median-of-halves, Q1=5andQ3=13so IQR=8. State the quartile convention because methods can differ for small samples."
      ],
      [
        "Read cumulative frequency and grouped data",
        "Cumulative frequency counts observations at or below a boundary and never decreases. Quartiles occur at 25%, 50%, 75%of the ordered cumulative distribution. A grouped modal class has the greatest relevant frequency (with equal intervals); it is not an exact individual mode. Interpolation within grouped data is an estimate, not a recovered original observation."
      ],
      [
        "Percent change is not percentile",
        "A rise from 40 to 50 is 25%of the original 40, not 10%. A percentile locates a value within an ordered distribution; it is not the percent of answers correct. Report sample, units, range and unusual values alongside an average. A convenient sample can remain biased even when its mean is calculated perfectly."
      ]
    ],
    "cardViews": [
      "ordered",
      "cumulative",
      "percent"
    ],
    "model": "dev-final-statistics",
    "labRequired": true,
    "tasks": [
      [
        "What should happen before finding a median?",
        [
          "Order the data",
          "Delete every low value",
          "Convert all values to percentages"
        ],
        0
      ],
      [
        "What does IQR measure?",
        [
          "Spread of the middle half",
          "The mean of all observations",
          "The maximum alone"
        ],
        0
      ],
      [
        "Why state a quartile convention?",
        [
          "Small-sample algorithms can differ",
          "All calculations are arbitrary",
          "It changes the observation units"
        ],
        0
      ],
      [
        "Which denominator is used in percent increase?",
        [
          "The original value",
          "The final value always",
          "The range of the sample"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.statistics.p1",
        "prompt": "What is the mean of 2, 4, 6?",
        "options": [
          "4",
          "6",
          "12"
        ],
        "answer": 0,
        "why": "Sum 12 divided by three gives 4.",
        "concept": "geo.a.final.average"
      },
      {
        "id": "geo.a.final.statistics.p2",
        "prompt": "A rise 20 to 30 is what percentage increase?",
        "options": [
          "50%",
          "10%",
          "33.3%"
        ],
        "answer": 0,
        "why": "Increase 10 divided by original 20 gives 0.5=50%.",
        "concept": "geo.a.final.percentage-change"
      },
      {
        "id": "geo.a.final.statistics.p3",
        "prompt": "Does the 90thpercentile mean 90%correct?",
        "options": [
          "No; it locates a value in an ordered distribution",
          "Yes; all percentiles are exam scores",
          "Yes; it is the highest possible value"
        ],
        "answer": 0,
        "why": "The meaning depends on the measured variable and distribution.",
        "concept": "geo.a.final.percentile"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.statistics.c1",
        "prompt": "For 3, 5, 7, 9, 11what is the mean?",
        "options": [
          "7",
          "11",
          "35"
        ],
        "answer": 0,
        "why": "35\u00f75=7.",
        "concept": "geo.a.final.average"
      },
      {
        "id": "geo.a.final.statistics.c2",
        "prompt": "A quantity falls 80 to 60. Percentage decrease?",
        "options": [
          "25%",
          "20%",
          "33.3%"
        ],
        "answer": 0,
        "why": "Fall 20 divided by original 80 is 25%.",
        "concept": "geo.a.final.percentage-change"
      },
      {
        "id": "geo.a.final.statistics.c3",
        "prompt": "Q1=12andQ3=20. IQR?",
        "options": [
          "8",
          "32",
          "16"
        ],
        "answer": 0,
        "why": "20\u221212=8, retaining the original variable unit.",
        "concept": "geo.a.final.iqr"
      },
      {
        "id": "geo.a.final.statistics.c4",
        "prompt": "A cumulative total rises from 12 to 20across a class. Class frequency?",
        "options": [
          "8",
          "20",
          "32"
        ],
        "answer": 0,
        "why": "Subtract successive cumulative totals:20\u221212=8.",
        "concept": "geo.a.final.cumulative"
      }
    ],
    "bigIdea": "Percent change is not percentile"
  },
  {
    "id": "geography.a.skills.8",
    "topicId": "geography.a.skills",
    "title": "Fit a trend and question the evidence",
    "refs": [
      "skills.bivariate",
      "skills.statistical-bias"
    ],
    "minutes": 30,
    "cards": [
      [
        "Describe two variables together",
        "A scatter plot pairs two numerical variables for each observation. Describe direction, strength and exceptions without assuming causation. A possible third factor or sampling design may produce association. Use a line of best fit to summarise a tendency, not a join-the-dots path through every point."
      ],
      [
        "Fit and predict with stated limits",
        "Our invented points follow approximately y=2x+1over x 1\u20135. In the lab enter slope 2 and intercept 1 to draw the candidate line. Interpolation predicts within observed x-values; extrapolation goes beyond and is usually less secure. Your line is a simple teaching approximation, not a fitted law for a real landscape."
      ],
      [
        "Presentation and selection can mislead",
        "A truncated axis may exaggerate a small absolute difference; a selectively chosen time window may hide a longer trend. Missing groups, inconsistent units or unequal observation periods can bias a comparison. Check source and method as well as whether the graphic is neat. A good-looking correlation cannot repair an unrepresentative sample."
      ]
    ],
    "cardViews": [
      "scatter",
      "prediction",
      "bias"
    ],
    "model": "dev-final-bivariate",
    "labRequired": true,
    "tasks": [
      [
        "What is interpolation?",
        [
          "Prediction within the observed range",
          "Prediction beyond every observation",
          "Proof of a causal mechanism"
        ],
        0
      ],
      [
        "Must a best-fit line pass through every point?",
        [
          "No; it summarises the tendency",
          "Yes; all variation is error",
          "Yes; otherwise no relationship exists"
        ],
        0
      ],
      [
        "Does positive correlation prove a cause?",
        [
          "No; alternatives and method need examination",
          "Yes; a sloping line proves cause",
          "Yes; plotting removes bias"
        ],
        0
      ],
      [
        "What can a selective date window do?",
        [
          "Hide a different longer-term pattern",
          "Change past measurements physically",
          "Guarantee representativeness"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.bivariate.p1",
        "prompt": "For y=3x+2, estimate y at x 4.",
        "options": [
          "14",
          "9",
          "20"
        ],
        "answer": 0,
        "why": "3\u00d74+2=14; distinguish applying a stated relationship from proving it.",
        "concept": "geo.a.final.linear-prediction"
      },
      {
        "id": "geo.a.final.bivariate.p2",
        "prompt": "Observed x-values 1\u20136; a prediction at x 9 is what?",
        "options": [
          "Extrapolation",
          "Interpolation",
          "A measured observation"
        ],
        "answer": 0,
        "why": "9lies beyond the observed range; confidence needs caution.",
        "concept": "geo.a.final.extrapolation"
      },
      {
        "id": "geo.a.final.bivariate.p3",
        "prompt": "Why inspect axis limits?",
        "options": [
          "They affect apparent size and steepness of differences",
          "They change the raw data",
          "They establish causation"
        ],
        "answer": 0,
        "why": "Visual framing and quantitative differences are different things.",
        "concept": "geo.a.final.statistical-bias"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.bivariate.c1",
        "prompt": "For y=2x+3, estimate y at x 4.",
        "options": [
          "11",
          "14",
          "9"
        ],
        "answer": 0,
        "why": "2\u00d74+3=11.",
        "concept": "geo.a.final.linear-prediction"
      },
      {
        "id": "geo.a.final.bivariate.c2",
        "prompt": "A line based on distances 0\u2013500 m predicts at 200 m. This is what?",
        "options": [
          "Interpolation",
          "Extrapolation",
          "Automatic causal proof"
        ],
        "answer": 0,
        "why": "200 is within the observed distance interval.",
        "concept": "geo.a.final.interpolation"
      },
      {
        "id": "geo.a.final.bivariate.c3",
        "prompt": "What most weakens a causal claim from a scatter plot?",
        "options": [
          "An uncontrolled third variable may explain the association",
          "Every point has a label",
          "Both axes include units"
        ],
        "answer": 0,
        "why": "A relationship can have alternative explanations; method and theory matter.",
        "concept": "geo.a.final.correlation"
      },
      {
        "id": "geo.a.final.bivariate.c4",
        "prompt": "Which comparison is potentially biased?",
        "options": [
          "Choosing only years that support the desired trend",
          "Reporting the full relevant period with source",
          "Showing the sample limitations"
        ],
        "answer": 0,
        "why": "Selection can alter the impression without altering each retained observation.",
        "concept": "geo.a.final.statistical-bias"
      }
    ],
    "bigIdea": "Presentation and selection can mislead"
  },
  {
    "id": "geography.a.skills.9",
    "topicId": "geography.a.skills",
    "title": "Answer the question the command word asks",
    "refs": [
      "Appendix3",
      "skills.analysis-writing",
      "skills.argument"
    ],
    "minutes": 30,
    "cards": [
      [
        "Select the required job",
        "Identify, state and name recall information; define gives meaning. Calculate needs a numerical answer and working; draw/plot creates a representation and label adds information to it. Describe develops characteristics or steps; compare relates similarities and differences between both elements. Do not answer an explain question with only a description."
      ],
      [
        "Connect evidence to reasoning",
        "Explain gives reasons for how or why; suggest applies understanding to a plausible explanation. Examine breaks components down and relates them to the theme. Use a mechanism: \u201cimpermeable surfaces reduce infiltration, so more water reaches drains quickly\u201d. Evidence and context support the link; a claim without a reason is incomplete."
      ],
      [
        "Build a justified judgement",
        "Assess weighs relative significance; discuss explores strengths and weaknesses; evaluate reaches a substantiated judgement using evidence, limitations and alternatives. Draft an explanation in the model and use its self-review questions. The app saves your writing but does not automatically mark it. Extended exam writing still needs feedback from a teacher or a suitable assessed process."
      ]
    ],
    "cardViews": [
      "commands",
      "chain",
      "judgement"
    ],
    "model": "dev-final-reasoning",
    "labRequired": true,
    "tasks": [
      [
        "What must compare do?",
        [
          "Relate both elements through similarities or differences",
          "Describe only the first element",
          "Give only a personal preference"
        ],
        0
      ],
      [
        "What turns description into explanation?",
        [
          "A reasoned how-or-why link",
          "More adjectives without a mechanism",
          "Only repeating the title"
        ],
        0
      ],
      [
        "What should evaluate finish with?",
        [
          "A substantiated judgement",
          "An unsupported preference",
          "Only a definition"
        ],
        0
      ],
      [
        "Does saving a draft mean it has been marked?",
        [
          "No; this draft is unmarked and self-reviewed",
          "Yes; any text proves full marks",
          "Yes; length guarantees quality"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.reasoning.p1",
        "prompt": "Which best answers \u201cExplain a runoff increase\u201d?",
        "options": [
          "More impermeable surface limits infiltration, increasing rapid runoff",
          "The runoff is larger",
          "The graph is blue"
        ],
        "answer": 0,
        "why": "A mechanism links land cover to runoff; the second merely describes.",
        "concept": "geo.a.final.explanation"
      },
      {
        "id": "geo.a.final.reasoning.p2",
        "prompt": "What does calculate require?",
        "options": [
          "A numerical answer with relevant working",
          "Only a map title",
          "Only a balanced discussion"
        ],
        "answer": 0,
        "why": "Make the numerical method and units clear.",
        "concept": "geo.a.final.command-calculate"
      },
      {
        "id": "geo.a.final.reasoning.p3",
        "prompt": "What distinguishes assess from list?",
        "options": [
          "Weighing relative significance with evidence",
          "Writing the largest number of items",
          "Avoiding a judgement"
        ],
        "answer": 0,
        "why": "A list alone does not determine importance or support a reasoned assessment.",
        "concept": "geo.a.final.assessment"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.reasoning.c1",
        "prompt": "Which is a genuine comparison?",
        "options": [
          "SiteAhas greater flow thanB, while both peak at noon",
          "SiteAis busy",
          "SiteBexists"
        ],
        "answer": 0,
        "why": "The response relates both sites through a difference and a similarity.",
        "concept": "geo.a.final.comparison"
      },
      {
        "id": "geo.a.final.reasoning.c2",
        "prompt": "Which response adds a mechanism?",
        "options": [
          "Trees can intercept rain and affect how quickly water reaches the ground",
          "Trees are present",
          "The landscape is green"
        ],
        "answer": 0,
        "why": "An explanation identifies a causal pathway and should acknowledge relevant limits.",
        "concept": "geo.a.final.explanation"
      },
      {
        "id": "geo.a.final.reasoning.c3",
        "prompt": "For \u201cEvaluate this scheme\u201d, what is strongest?",
        "options": [
          "Judge success against aims using benefits, costs, evidence and limitations",
          "Only repeat its name",
          "State it is good without evidence"
        ],
        "answer": 0,
        "why": "Evaluation draws on evidence and alternatives to support a conclusion.",
        "concept": "geo.a.final.evaluation"
      },
      {
        "id": "geo.a.final.reasoning.c4",
        "prompt": "Can a saved 100-word draft establish extended-writing mastery automatically here?",
        "options": [
          "No; the draft is unmarked and needs substantive feedback",
          "Yes; word count is a valid mark scheme",
          "Yes; opening the page passes every command word"
        ],
        "answer": 0,
        "why": "The app distinguishes activity completion from assessed written quality.",
        "concept": "geo.a.final.writing-limit"
      }
    ],
    "bigIdea": "Build a justified judgement"
  },
  {
    "id": "geography.a.skills.footprints",
    "topicId": "geography.a.skills",
    "title": "Calculate carbon and ecological footprints",
    "refs": [
      "Energy integrated skill3",
      "skills.units",
      "skills.ratio-frequency"
    ],
    "minutes": 30,
    "cards": [
      [
        "Carbon: add like-for-like emissions",
        "A carbon account sums activity multiplied by a compatible emissions factor, often kgCO2e per unit. CO2e compares greenhouse gases using a stated warming metric; it is not simply every gas\u2019s mass added. Define period, person or household, operational versus lifecycle coverage and factor year. Our factors are invented teaching values, not official 2026factors or a real personal estimate."
      ],
      [
        "Ecological footprint is an area account",
        "Ecological footprint expresses demand on productive land and water, commonly global hectares. A global hectare is normalised for average productivity; it is not the same as a local hectare or a tonne ofCO2e. Our toy crop demand 1000 kg divided by yield 500 kg/ha gives 2 ha; an invented equivalence factor 1.5 gives 3 gha. Real accounts need more categories, trade, yields and full methodology."
      ],
      [
        "Compare scenarios without double counting",
        "In the lab, 100 kWh at 0.2kgCO2e/kWh plus 50 passenger-km at 0.1kgCO2e/passenger-km gives 25kgCO2e. Separately compare a toy footprint 3 gha with available biocapacity 2 gha: demand is 1.5 times capacity. Do not add gha to kgCO2e or count carbon twice inside an ecological account. Results depend on boundaries and assumptions, not just arithmetic."
      ]
    ],
    "cardViews": [
      "carbon",
      "ecological",
      "compare"
    ],
    "model": "dev-final-footprints",
    "labRequired": true,
    "tasks": [
      [
        "What does activity\u00d7compatible factor give?",
        [
          "Estimated emissions in the defined boundary",
          "A universal exact lifetime footprint",
          "The area of all land"
        ],
        0
      ],
      [
        "Can kgCO2e and gha be added?",
        [
          "No; they measure different quantities",
          "Yes; both are numbers",
          "Yes; one always equals the other"
        ],
        0
      ],
      [
        "Why state factor year and coverage?",
        [
          "Technology and accounting boundaries differ",
          "Units never matter",
          "It guarantees official certification"
        ],
        0
      ],
      [
        "What does footprint above biocapacity indicate in a matching account?",
        [
          "Demand exceeds the stated regenerative capacity",
          "No environmental pressure can occur",
          "Every impact has been measured"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.final.footprints.p1",
        "prompt": "200 kWh at 0.15kgCO2e/kWh gives what?",
        "options": [
          "30kgCO2e",
          "1333kgCO2e",
          "200.15kgCO2e"
        ],
        "answer": 0,
        "why": "Multiply 200\u00d70.15=30; this factor is an invented teaching value.",
        "concept": "geo.a.final.carbon-account"
      },
      {
        "id": "geo.a.final.footprints.p2",
        "prompt": "Demand 600 kg at yield 300 kg/ha requires what area?",
        "options": [
          "2 ha",
          "180000 ha",
          "0.5 ha"
        ],
        "answer": 0,
        "why": "Divide demand by yield:600/300=2 ha before any normalisation factor.",
        "concept": "geo.a.final.ecological-account"
      },
      {
        "id": "geo.a.final.footprints.p3",
        "prompt": "Why avoid double counting carbon inside an ecological account?",
        "options": [
          "Some ecological footprint methods already include carbon-related demand",
          "Carbon has no role in any footprint",
          "Every category is independent by definition"
        ],
        "answer": 0,
        "why": "Understand the framework before combining totals or adding a separate carbon quantity.",
        "concept": "geo.a.final.account-boundary"
      }
    ],
    "check": [
      {
        "id": "geo.a.final.footprints.c1",
        "prompt": "Teaching activities:80 kWh\u00d70.25kgCO2e/kWh and 40 passenger-km\u00d70.1kgCO2e/passenger-km. Total?",
        "options": [
          "24kgCO2e",
          "20kgCO2e",
          "120kgCO2e"
        ],
        "answer": 0,
        "why": "20+4=24kgCO2e within the stated invented boundary.",
        "concept": "geo.a.final.carbon-account"
      },
      {
        "id": "geo.a.final.footprints.c2",
        "prompt": "Demand 1200 kg, yield 400 kg/ha, equivalence factor 2 gha/ha. Toy footprint?",
        "options": [
          "6 gha",
          "3 gha",
          "0.67 gha"
        ],
        "answer": 0,
        "why": "1200/400=3 ha;3\u00d72=6 gha. These invented factors do not reproduce a full real account.",
        "concept": "geo.a.final.ecological-account"
      },
      {
        "id": "geo.a.final.footprints.c3",
        "prompt": "A matching footprint 4 gha and biocapacity 2 gha give what ratio?",
        "options": [
          "2 times capacity",
          "0.5 times capacity",
          "6kgCO2e"
        ],
        "answer": 0,
        "why": "4/2=2; state compatible period and scope.",
        "concept": "geo.a.final.biocapacity"
      },
      {
        "id": "geo.a.final.footprints.c4",
        "prompt": "Does the app\u2019s toy calculation certify your real personal footprint?",
        "options": [
          "No; actual activity, appropriate factors and complete methodology are required",
          "Yes; all people use the same energy",
          "Yes; every hectare has identical productivity"
        ],
        "answer": 0,
        "why": "Teaching arithmetic makes assumptions visible; it is not an official personal-footprint calculator.",
        "concept": "geo.a.final.account-boundary"
      }
    ],
    "bigIdea": "Compare scenarios without double counting"
  }
];
