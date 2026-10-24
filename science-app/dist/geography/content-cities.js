export const citiesTopic={id:'geography.a.cities',title:'Changing cities',discipline:'Human geography'};
export const citiesLessons=[
  {
    "id": "geography.a.cities.urban-trends",
    "topicId": "geography.a.cities",
    "title": "Urbanisation: fifty years of change",
    "refs": [
      "4.1a"
    ],
    "minutes": 25,
    "cards": [
      [
        "Urban share and urban growth are different",
        "Urbanisation is an increase in the proportion of a population living in urban areas. Urban population growth is an increase in the number of urban residents. They can differ: if urban residents increase from 50 to 60 while the total rises from 100 to 150, urban numbers grow but the share falls from 50% to 40%. Always identify the numerator, denominator and time period."
      ],
      [
        "Compare consistent national series",
        "Our World Bank/UN series follows the UK, China and Nigeria from 1975 to 2025 using national urban definitions. Rounded urban shares rise from 77.5% to 83.3% in the UK, 17.3% to 66.3% in China and 23.7% to 63.8% in Nigeria. The UK was already highly urbanised; China and Nigeria show much larger increases over these fifty years. Use all annual points and matching 0–100% axes, rather than judging only a final value."
      ],
      [
        "Examples illustrate contrasts, not universal stages",
        "The UK illustrates an early-industrialised developed economy, China rapid change in an emerging economy, and Nigeria change in a developing-country context. Countries within each group differ. National definitions and revisions affect comparisons; our series was downloaded from the same World Bank release, updated 8 October 2026. Do not combine it directly with the UN 2025 harmonised city-only 45% headline, which treats cities, towns and rural areas differently."
      ]
    ],
    "model": "city-urban-trends",
    "cardViews": [
      "measure",
      "compare",
      "definitions"
    ],
    "tasks": [
      [
        "Urbanisation refers to…",
        [
          "A rising urban share of population",
          "Any rise in city numbers even if the share falls",
          "Only the land area of one building"
        ],
        0
      ],
      [
        "Which country had the highest urban share in 1975 in these series?",
        [
          "United Kingdom",
          "China",
          "Nigeria"
        ],
        0
      ],
      [
        "Which has the largest 1975–2025 increase in rounded percentage points?",
        [
          "China",
          "United Kingdom",
          "They all change equally"
        ],
        0
      ],
      [
        "Why keep definition and source vintage consistent?",
        [
          "Reclassification or revision can affect comparisons",
          "Every country uses identical criteria forever",
          "Different measures can always be mixed"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.c1.urban-trends.p1",
        "prompt": "Urban residents 60, total population 150. What is the urban share?",
        "options": [
          "40%",
          "60%",
          "150%"
        ],
        "answer": 0,
        "why": "60 ÷ 150 × 100=40%. Count and share answer different questions.",
        "concept": "geo.a.cities.urban-share"
      },
      {
        "id": "geo.a.c1.urban-trends.p2",
        "prompt": "Why can a highly urbanised country have a smaller recent rise in urban share?",
        "options": [
          "Much urbanisation happened before the comparison period",
          "A high initial share guarantees the fastest increase",
          "It must have no cities"
        ],
        "answer": 0,
        "why": "Starting level and change over a period are separate measures.",
        "concept": "geo.a.cities.urban-level-rate"
      },
      {
        "id": "geo.a.c1.urban-trends.p3",
        "prompt": "Which comparison is methodologically safer?",
        "options": [
          "Same indicator, dates, units and source release, with definition caveats",
          "A nationalurban percentage versus city-onlyshare with no explanation",
          "Different axes that hide the scale"
        ],
        "answer": 0,
        "why": "Consistent series make change easier to interpret, while national definitions still vary.",
        "concept": "geo.a.cities.urban-data-definitions"
      }
    ],
    "check": [
      {
        "id": "geo.a.c1.urban-trends.c1",
        "prompt": "A town’s residents rise while the national urban percentage falls. Is that possible?",
        "options": [
          "Yes, if the total or rural population grows faster",
          "No: urban counts and shares are identical",
          "No: percentages cannot change"
        ],
        "answer": 0,
        "why": "The urban share depends on both urban residents and the national denominator.",
        "concept": "geo.a.cities.urban-share"
      },
      {
        "id": "geo.a.c1.urban-trends.c2",
        "prompt": "Read the neutral 1975–2025 chart. Which country starts above 75%?",
        "options": [
          "United Kingdom",
          "China",
          "Nigeria"
        ],
        "answer": 0,
        "why": "Locate the starting points on the common percentage scale.",
        "concept": "geo.a.cities.urban-chart-reading",
        "urbanEvidence": true
      },
      {
        "id": "geo.a.c1.urban-trends.c3",
        "prompt": "Using rounded China values 17.3% and 66.3%, what is the change?",
        "options": [
          "49.0 percentage points",
          "49.0 people",
          "A fall of 49.0 percentage points"
        ],
        "answer": 0,
        "why": "66.3−17.3=49.0 percentage points, not 49 people or a relative percentage growth rate.",
        "concept": "geo.a.cities.urban-change"
      },
      {
        "id": "geo.a.c1.urban-trends.c4",
        "prompt": "Why is the UN 2025 city-onlyshare not directly interchangeable with this nationalurban series?",
        "options": [
          "Settlement definitions and included categories differ",
          "Both are counts of identical national areas",
          "Neither has any definition"
        ],
        "answer": 0,
        "why": "Check whether towns/suburbs and national classifications are included before comparing.",
        "concept": "geo.a.cities.urban-data-definitions"
      }
    ]
  },
  {
    "id": "geography.a.cities.urban-causes",
    "topicId": "geography.a.cities",
    "title": "Why urbanisation happens",
    "refs": [
      "4.1b"
    ],
    "minutes": 25,
    "cards": [
      [
        "Employment and change happened at different times",
        "Industrialisation and expanding services concentrate jobs, investment and infrastructure. The UK’s industrial towns expanded strongly before our recent fifty-year comparison; industrial and service growth occurred later or at different speeds in many emerging and developing economies. Rural change can reduce available work while cities offer education and services. Migration involves varied choices and constraints, not a guaranteed better outcome for every person."
      ],
      [
        "Three contributions need separating",
        "Urban populations change through births minus deaths, net migration and reclassification of settlements or boundaries. Natural increase can be important where a young urban population has more births than deaths. Rural-to-urban migration can contribute too, but not all migration is internal or rural-to-urban. An increase in urban numbers becomes urbanisation only if the urban share also rises."
      ],
      [
        "Growth brings opportunities and pressures",
        "Concentrated people and firms can support markets, services and innovation. Rapid growth can also outpace affordable housing, water, transport and employment, especially when investment or governance is weak. Effects depend on planning, resources and inclusion, not simply a country label. Compare an invented housing-capacity example; it illustrates a possible shortfall, not a measured city or a forecast of informal settlement growth."
      ]
    ],
    "model": "city-urban-causes",
    "cardViews": [
      "migration",
      "balance",
      "capacity"
    ],
    "tasks": [
      [
        "Why can industrialisation attract urban migration?",
        [
          "Jobs and associated services concentrate",
          "Every city guarantees identical incomes",
          "Rural areas become empty instantly"
        ],
        0
      ],
      [
        "Which is natural increase?",
        [
          "Births minus deaths",
          "In-migrants minus out-migrants",
          "Renaming a rural settlement"
        ],
        0
      ],
      [
        "Urban growth can also come from…",
        [
          "Reclassification as well as migration and natural change",
          "Only overseas migration",
          "Only people leaving a city"
        ],
        0
      ],
      [
        "When growth outpaces housing capacity…",
        [
          "A shortfall can arise, depending on provision and access",
          "Every new resident receives a home automatically",
          "There can be no effects on services"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.c1.urban-causes.p1",
        "prompt": "Why do urbanisation histories differ?",
        "options": [
          "Economic restructuring, demography and migration have different timing",
          "Every country industrialised in the same year",
          "All countries have the same initial urban share"
        ],
        "answer": 0,
        "why": "Causes overlap but differ in timing, intensity and context.",
        "concept": "geo.a.cities.urban-causes"
      },
      {
        "id": "geo.a.c1.urban-causes.p2",
        "prompt": "In a toy city, births 12, deaths 4, in-migrants 6, out-migrants 2. What is the total change before reclassification?",
        "options": [
          "+12 people",
          "+24 people",
          "−12 people"
        ],
        "answer": 0,
        "why": "Natural increase is 8 and net migration 4;8+4=12.",
        "concept": "geo.a.cities.urban-population-balance"
      },
      {
        "id": "geo.a.c1.urban-causes.p3",
        "prompt": "Which conclusion about urban opportunities is sound?",
        "options": [
          "Benefits can be uneven and depend on access to jobs and services",
          "All urban residents benefit equally",
          "Growth removes the need for planning"
        ],
        "answer": 0,
        "why": "Aggregate growth can coexist with unequal outcomes.",
        "concept": "geo.a.cities.urban-effects"
      }
    ],
    "check": [
      {
        "id": "geo.a.c1.urban-causes.c1",
        "prompt": "A previously rural settlement meets the urban classification threshold. Which contribution is involved?",
        "options": [
          "Reclassification",
          "Only natural increase",
          "Only international migration"
        ],
        "answer": 0,
        "why": "A classification change can increase recorded urban population without everyone moving.",
        "concept": "geo.a.cities.urban-reclassification"
      },
      {
        "id": "geo.a.c1.urban-causes.c2",
        "prompt": "Why can natural increase remain important after migration?",
        "options": [
          "A young population may have more births than deaths",
          "All migrants immediately stop having children",
          "Urban population never changes through births"
        ],
        "answer": 0,
        "why": "Demographic structure affects births and deaths within cities.",
        "concept": "geo.a.cities.urban-population-balance"
      },
      {
        "id": "geo.a.c1.urban-causes.c3",
        "prompt": "In an invented example 120 households need housing but 110 places are available. What is the shortfall?",
        "options": [
          "10 places",
          "230 places",
          "No shortfall by definition"
        ],
        "answer": 0,
        "why": "120−110=10. Real housing access also depends on affordability and suitability.",
        "concept": "geo.a.cities.urban-service-capacity"
      },
      {
        "id": "geo.a.c1.urban-causes.c4",
        "prompt": "Which policy question best addresses growth-related inequality?",
        "options": [
          "Who can access affordable housing, services and employment?",
          "Only how tall the tallest building is",
          "Only whether total output increases"
        ],
        "answer": 0,
        "why": "Distribution and access matter alongside aggregate growth.",
        "concept": "geo.a.cities.urban-effects"
      }
    ]
  },
  {
    "id": "geography.a.cities.uk-distribution",
    "topicId": "geography.a.cities",
    "title": "Where the UK’s urban population lives",
    "refs": [
      "4.2a"
    ],
    "minutes": 25,
    "cards": [
      [
        "A concentrated but uneven pattern",
        "The UK is highly urbanised, with major concentrations in London and south-east England, the Midlands, north-west and Yorkshire urban areas, and other regional centres. Population is more dispersed in many upland and remote areas. This is not a simple empty-north/full-south pattern: large northern cities coexist with sparsely populated uplands. Our generalised country outline and approximate city markers show locations, not measured urban footprints or population-density boundaries."
      ],
      [
        "Centres across the four nations",
        "Locate London, Birmingham, Manchester, Leeds, Liverpool and Newcastle in England;Glasgow and Edinburgh in Scotland;Cardiff in Wales;and Belfast in Northern Ireland. Scotland’s central belt, south Wales and the Belfast area contain major concentrations. Borders, coasts, rivers, transport and economic history provide spatial context, but a location map alone does not prove why each place grew."
      ],
      [
        "Read the geography behind a statistic",
        "Defra’s 2021 classification reports 83.1% of England’s population in urban areas and 16.9% in rural areas. Those are England figures, not whole-UK figures. Statistical urban areas, administrative city boundaries and wider conurbations differ. A large administrative area can include open countryside, and population rankings change with the boundary used. Compare definitions before comparing places or dates."
      ]
    ],
    "model": "city-uk-distribution",
    "cardViews": [
      "england",
      "nations",
      "share"
    ],
    "tasks": [
      [
        "Which statement best describes the pattern?",
        [
          "Several large urban concentrations and more dispersed areas",
          "Every northern location is unpopulated",
          "All UK residents live in London"
        ],
        0
      ],
      [
        "Which pair is correctly located?",
        [
          "Cardiff:Wales;Belfast:Northern Ireland",
          "Cardiff:Scotland;Belfast:Wales",
          "Both are in south-east England"
        ],
        0
      ],
      [
        "The 83.1% figure here applies to…",
        [
          "England in 2021 under the stated classification",
          "The wholeUKin every year",
          "Only GreaterLondon"
        ],
        0
      ],
      [
        "Why can city population rankings differ?",
        [
          "Boundaries and definitions can differ",
          "Every count uses identical footprints",
          "All areas exclude countryside"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.c1.uk-distribution.p1",
        "prompt": "Which major centre lies in Scotland’s central belt?",
        "options": [
          "Glasgow",
          "Cardiff",
          "Belfast"
        ],
        "answer": 0,
        "why": "Check country and location, rather than treating every urban centre as English.",
        "concept": "geo.a.cities.uk-city-locations"
      },
      {
        "id": "geo.a.c1.uk-distribution.p2",
        "prompt": "Why is a city-dot map not a population-density map?",
        "options": [
          "It marks locations without measuring density across all land",
          "Every dot shows the exact built-up boundary",
          "Areas without dots must have no residents"
        ],
        "answer": 0,
        "why": "Selected markers are not a complete population surface.",
        "concept": "geo.a.cities.uk-map-reading"
      },
      {
        "id": "geo.a.c1.uk-distribution.p3",
        "prompt": "What follows from England’s urban share 83.1%?",
        "options": [
          "Its complementary rural share is 16.9% in this classification",
          "The wholeUKhas exactly the same share",
          "All urban land is covered by buildings"
        ],
        "answer": 0,
        "why": "100−83.1=16.9;keep the population and geographical scope.",
        "concept": "geo.a.cities.uk-urban-scope"
      }
    ],
    "check": [
      {
        "id": "geo.a.c1.uk-distribution.c1",
        "prompt": "Which city lies in Northern Ireland?",
        "options": [
          "Belfast",
          "Edinburgh",
          "Manchester"
        ],
        "answer": 0,
        "why": "Belfast is a major urban centre in Northern Ireland.",
        "concept": "geo.a.cities.uk-city-locations"
      },
      {
        "id": "geo.a.c1.uk-distribution.c2",
        "prompt": "Which pair illustrates that large urban centres occur beyond south-east England?",
        "options": [
          "Manchester and Glasgow",
          "Only London and its nearest suburbs",
          "No cities exist outside the south-east"
        ],
        "answer": 0,
        "why": "The pattern includes major northern and devolved-nation centres.",
        "concept": "geo.a.cities.uk-distribution"
      },
      {
        "id": "geo.a.c1.uk-distribution.c3",
        "prompt": "A source says 83.1% of England’s population is urban. Which claim goes beyond it?",
        "options": [
          "Exactly 83.1% of the wholeUKis urban",
          "The statistic refers to England",
          "The remaining England share is 16.9% rural"
        ],
        "answer": 0,
        "why": "Extending one country’s statistic to the wholeUKrequires additional evidence.",
        "concept": "geo.a.cities.uk-urban-scope"
      },
      {
        "id": "geo.a.c1.uk-distribution.c4",
        "prompt": "Why must GreaterLondon and a narrow administrative city boundary not be compared uncritically?",
        "options": [
          "They may cover different spatial populations",
          "Every boundary encloses identical residents",
          "Boundary choice never affects totals"
        ],
        "answer": 0,
        "why": "Compare like geographies and dates before ranking population sizes.",
        "concept": "geo.a.cities.uk-city-boundaries"
      }
    ]
  },
  {
    "id": "geography.a.cities.uk-regional-change",
    "topicId": "geography.a.cities",
    "title": "Why urbanisation differs across the UK",
    "refs": [
      "4.2b"
    ],
    "minutes": 25,
    "cards": [
      [
        "History leaves a spatial legacy",
        "Ports, coalfields, manufacturing, water routes and railways contributed to the growth of different UK urban areas. Historical industrial concentrations help explain high urbanisation in parts of the Midlands, north and central Scotland, not just London. Deindustrialisation changed employment, but outcomes vary: service growth, regeneration and local conditions can produce different trajectories within the same broad region."
      ],
      [
        "Employment, connections and movement interact",
        "Services, universities, investment and transport links can attract people and firms. International migration, natural change, and moves between UK regions contribute differently across places. Improved transport can support commuting and suburban growth without everyone moving into a city centre. Counter-urbanisation may shift residents to smaller settlements. Planning, housing costs, available land and physical constraints also affect where growth occurs."
      ],
      [
        "Degree and rate are separate questions",
        "Degree of urbanisation is the share urban at a time;rate concerns how quickly that share changes over a stated period. A highly urbanised region can change slowly, while a less urbanised one changes faster. Our two-region numbers are invented to isolate the distinction, not ONSregional estimates. For real trends, use consistent boundaries, classifications and years: the 2021 Rural Urban Classification differs from earlier versions."
      ]
    ],
    "model": "city-uk-regional-change",
    "cardViews": [
      "industry",
      "connections",
      "measure"
    ],
    "tasks": [
      [
        "Industrial history can help explain…",
        [
          "Existing concentrations of urban settlement",
          "Why all northern regions are now empty",
          "Identical growth in every place"
        ],
        0
      ],
      [
        "Commuting means…",
        [
          "Travelling between home and work, not necessarily moving residence",
          "Always becoming a permanent city-centre resident",
          "Always reducing national population"
        ],
        0
      ],
      [
        "Which place can have the faster rise in urban share?",
        [
          "A lower-share place if its percentage-point increase is larger",
          "Always the place with the highest starting share",
          "Neither, because shares cannot change"
        ],
        0
      ],
      [
        "Why compare matching definitions through time?",
        [
          "Reclassification can otherwise resemble real demographic change",
          "Every classification is fixed forever",
          "Changing boundaries never changes a count"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.c1.uk-regional-change.p1",
        "prompt": "Why can two former industrial cities develop differently?",
        "options": [
          "Different investment, skills, connections and local conditions",
          "All industrial cities follow one fixed path",
          "Economic change cannot affect settlement"
        ],
        "answer": 0,
        "why": "A shared history does not guarantee the same later trajectory.",
        "concept": "geo.a.cities.uk-regional-causes"
      },
      {
        "id": "geo.a.c1.uk-regional-change.p2",
        "prompt": "Which factor can encourage suburbanisation?",
        "options": [
          "Transport access and housing choices outside a centre",
          "Every resident being forced into one central block",
          "No connection between homes and employment"
        ],
        "answer": 0,
        "why": "People may live farther out while retaining links to urban jobs.",
        "concept": "geo.a.cities.uk-mobility"
      },
      {
        "id": "geo.a.c1.uk-regional-change.p3",
        "prompt": "A toy region rises from 40% to 50% urban over 10 years. What is the change?",
        "options": [
          "10 percentage points",
          "10 people",
          "A fall of 10 percentage points"
        ],
        "answer": 0,
        "why": "Subtract comparable shares;the unit is percentage points over the stated period.",
        "concept": "geo.a.cities.uk-rate-degree"
      }
    ],
    "check": [
      {
        "id": "geo.a.c1.uk-regional-change.c1",
        "prompt": "Which combination best explains regional differences?",
        "options": [
          "Economic history, employment, connections, demography, planning and physical conditions",
          "Only latitude with no human factors",
          "Only the tallest building"
        ],
        "answer": 0,
        "why": "Regional settlement patterns arise from interacting factors.",
        "concept": "geo.a.cities.uk-regional-causes"
      },
      {
        "id": "geo.a.c1.uk-regional-change.c2",
        "prompt": "A resident travels from a rural home to an urban job daily. What can be inferred?",
        "options": [
          "The person commutes;no residential move is established",
          "The person has certainly migrated permanently into the city",
          "The rural settlement has become an urban area automatically"
        ],
        "answer": 0,
        "why": "Daily travel and a change of usual residence are different.",
        "concept": "geo.a.cities.uk-mobility"
      },
      {
        "id": "geo.a.c1.uk-regional-change.c3",
        "prompt": "Over one period, regionAchanges 80%→82% andB 40%→50%. Which has the higher final degree but smaller rise?",
        "options": [
          "RegionA",
          "RegionB",
          "Both have identical levels and changes"
        ],
        "answer": 0,
        "why": "Aends 82% but rises 2 points;Bends 50% but rises 10 points.",
        "concept": "geo.a.cities.uk-rate-degree"
      },
      {
        "id": "geo.a.c1.uk-regional-change.c4",
        "prompt": "Why should a 2011 and 2021 urban percentage be checked before claiming demographic change?",
        "options": [
          "Boundaries or classification rules may differ",
          "All changes are always measurement errors",
          "The population never changes"
        ],
        "answer": 0,
        "why": "A methodological change can affect comparisons;it does not rule out real change.",
        "concept": "geo.a.cities.uk-statistical-comparison"
      }
    ]
  }
];
export const gisLessons=[
  {
    "id": "geography.a.ecosystems.forest-loss-gis",
    "topicId": "geography.a.ecosystems",
    "title": "Reading a forest-loss GIS map",
    "refs": [
      "Topic3 skill6;3.5c;3.7c"
    ],
    "minutes": 25,
    "cards": [
      [
        "A GIS joins location and attributes",
        "A geographical information system links spatial features to information about them. Here, real state boundaries from Natural Earth are joined by state code to INPE PRODES forest-clearance figures. We show four selected Brazilian states, not all Brazil. Changing the year or attribute changes the map layer, not the boundaries. The coloured state represents a regional total; it does not mean every part of that state was cleared."
      ],
      [
        "Read the date, unit and definition",
        "INPE’s consolidated 2024 release covers 1 August 2023 to 31 July 2024. The annual figures for Pará, Amazonas, Mato Grosso and Rondônia are 2395, 1223, 1257 and 360 km² respectively. PRODES records complete primary-forest canopy removal under its monitoring definition; the rate series counts mapped polygons larger than 6.25 ha. This is not every kind of tree-cover change, a current live map or a direct record of subsequent land use. Some state territory lies outside the monitored forest region."
      ],
      [
        "A pattern needs careful interpretation",
        "Pará has the largest 2024 area among the four selected states. Compare the same indicator across years: Rondônia falls from 867 km² in 2023 to 360 km² in 2024. Absolute loss, percentage change and the percentage of a state cleared are different measures. No loss value is supplied for the states omitted here; missing does not mean zero. The joined layers identify a regional pattern, but do not alone establish its causes or locate individual clearings."
      ]
    ],
    "model": "eco-forest-loss-gis",
    "cardViews": [
      "join",
      "year24",
      "change"
    ],
    "tasks": [
      [
        "What makes this a GIS-style join?",
        [
          "Matching boundary features and data by state code",
          "Inventing a shape from the highest number",
          "Assuming colour proves causation"
        ],
        0
      ],
      [
        "What does the 2024 layer measure?",
        [
          "Annual PRODESclearance area inkm²",
          "Every square kilometre of each state cleared",
          "A percentage of all local trees"
        ],
        0
      ],
      [
        "Which 2024 area is largest among the selected states?",
        [
          "Pará",
          "Rondônia",
          "Amazonas"
        ],
        0
      ],
      [
        "What does a fall from 867 to 360 show?",
        [
          "A lower annual value, not recovery of all previous forest",
          "All previous clearance has regrown",
          "The state boundary has moved"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.c1.forest-loss-gis.p1",
        "prompt": "Why join by a stable state code?",
        "options": [
          "It links each attribute row to the correct geographical feature",
          "It makes all states the same size",
          "It turns missing values into zero"
        ],
        "answer": 0,
        "why": "A common identifier connects the geometry and attribute layers.",
        "concept": "geo.a.ecosystems.gis-attribute-join"
      },
      {
        "id": "geo.a.c1.forest-loss-gis.p2",
        "prompt": "The whole of Mato Grosso is shaded by its regional total. What must not be inferred?",
        "options": [
          "That all shaded land was cleared",
          "That a state-level value exists",
          "That a date and unit are needed"
        ],
        "answer": 0,
        "why": "Choropleth shading summarises a region rather than drawing the actual clearing polygons.",
        "concept": "geo.a.ecosystems.gis-map-scale"
      },
      {
        "id": "geo.a.c1.forest-loss-gis.p3",
        "prompt": "Which comparison uses the same measure?",
        "options": [
          "2023 and 2024 PRODESannual clearance area for Rondônia",
          "2023 area versus 2024 percentage of the regional total with no conversion",
          "A state’s forest-loss area versus its population as if units match"
        ],
        "answer": 0,
        "why": "Compare dates with the same definition and units; other questions need extra data.",
        "concept": "geo.a.ecosystems.gis-comparison"
      }
    ],
    "check": [
      {
        "id": "geo.a.c1.forest-loss-gis.c1",
        "prompt": "A state boundary has codeBR-PA. Which attribute should be joined to it?",
        "options": [
          "The Pará row using the same code",
          "The largest number regardless of state",
          "The first row in any file"
        ],
        "answer": 0,
        "why": "Joining by identifier prevents mismatches caused by file order.",
        "concept": "geo.a.ecosystems.gis-attribute-join"
      },
      {
        "id": "geo.a.c1.forest-loss-gis.c2",
        "prompt": "Using the neutral 2024 map, which selected state records 360 km²?",
        "options": [
          "Rondônia",
          "Pará",
          "Mato Grosso"
        ],
        "answer": 0,
        "why": "Read the labelled region and value; the figures are annual PRODESareas.",
        "concept": "geo.a.ecosystems.gis-map-reading",
        "forestEvidence": true
      },
      {
        "id": "geo.a.c1.forest-loss-gis.c3",
        "prompt": "A state is not included in this four-state extract. What can you infer about its clearance?",
        "options": [
          "Nothing about its value from its omission alone",
          "It must have zero clearance",
          "It must have more clearance than every mapped state"
        ],
        "answer": 0,
        "why": "No-data and zero are different.",
        "concept": "geo.a.ecosystems.gis-no-data"
      },
      {
        "id": "geo.a.c1.forest-loss-gis.c4",
        "prompt": "Pará’s comparable annual values are 3299 and 2395 km². What is the absolute decrease?",
        "options": [
          "904 km²",
          "904%",
          "5694 km²"
        ],
        "answer": 0,
        "why": "3299−2395=904 km². The unit is area, not percentage change.",
        "concept": "geo.a.ecosystems.gis-comparison"
      }
    ]
  }
];
