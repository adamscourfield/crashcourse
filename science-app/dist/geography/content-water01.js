export const waterTopic={id:'geography.a.water',title:'Water resource management',discipline:'Human geography'};
export const water01Lessons=[
  {
    "id": "geography.a.water.distribution",
    "topicId": "geography.a.water",
    "resourceOption": "water",
    "title": "Where is the world’s freshwater?",
    "refs": [
      "6.8a"
    ],
    "minutes": 30,
    "cards": [
      [
        "A small share, unevenly stored",
        "Only about 2.5% of Earth’s water is freshwater. In the USGS historical estimate, 68.7% of that freshwater is in glaciers and ice caps, 30.1% is fresh groundwater and 1.2% is surface and other freshwater. These percentages have freshwater as their denominator: 68.7% does not mean 68.7% of all Earth’s water. Stores are not all easily accessible or safe to drink."
      ],
      [
        "Renewable flows are uneven",
        "Water cycles between stores, but rainfall, evaporation and recharge vary. The map shows five countries’ 2022 WDI internal renewable resources per person: long-term internal river flow and groundwater recharge divided by population. Brazil is in the highest selected class; India and Ethiopia are much lower. Grey countries have not been selected, rather than having zero water. This is not a map of household access or current rainfall."
      ],
      [
        "A store is not an annual supply",
        "Groundwater lies in pores and fractures in rock. Recharge can replenish some aquifers; some deep groundwater changes very slowly. Pumps can make a store accessible, but taking more than recharge can lower it. Internal resources exclude water arriving from another country: Egypt’s low internal figure does not include the full Nile inflow. Read stocks, flows and boundaries separately."
      ]
    ],
    "cardViews": [
      "stores",
      "map",
      "recharge"
    ],
    "model": "dev-water-distribution",
    "tasks": [
      [
        "Read the freshwater-store bars. Which is the largest store?",
        [
          "Glaciers and ice caps",
          "Rivers",
          "Fresh groundwater"
        ],
        0
      ],
      [
        "What does grey mean on the five-country map?",
        [
          "Not selected in this extract",
          "No freshwater exists there",
          "Every household lacks water"
        ],
        0
      ],
      [
        "Why can groundwater pumping exceed a sustainable flow?",
        [
          "Withdrawal can exceed recharge",
          "Pumps create new rainfall",
          "All aquifers refill instantly"
        ],
        0
      ],
      [
        "Which addition would make Egypt’s internal-resource figure a fuller supply account?",
        [
          "External inflows and availability constraints",
          "Its total land area alone",
          "Only glacier ice worldwide"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.water01.distribution.p1",
        "prompt": "What is the denominator of the 30.1% groundwater figure?",
        "options": [
          "All freshwater",
          "All water on Earth",
          "Only rivers"
        ],
        "answer": 0,
        "why": "The nested figure is a share of freshwater, not all water.",
        "concept": "geo.a.water01.stores",
        "water01Evidence": "stores"
      },
      {
        "id": "geo.a.water01.distribution.p2",
        "prompt": "Which selected country is above 20,000 m³/person/year?",
        "options": [
          "Brazil",
          "Egypt",
          "India"
        ],
        "answer": 0,
        "why": "Use the map key and dated source values; this is internal renewable flow per person.",
        "concept": "geo.a.water01.map-reading",
        "water01Evidence": "map"
      },
      {
        "id": "geo.a.water01.distribution.p3",
        "prompt": "Why is freshwater in a glacier not equivalent to local tap supply?",
        "options": [
          "Location, treatment and delivery constrain access",
          "All ice is saline",
          "All freshwater is already piped"
        ],
        "answer": 0,
        "why": "A natural store and accessible safe supply are different.",
        "concept": "geo.a.water01.stock-flow"
      }
    ],
    "check": [
      {
        "id": "geo.a.water01.distribution.c1",
        "prompt": "In this estimate, how many percentage points separate ice and fresh groundwater?",
        "options": [
          "38.6 percentage points",
          "98.8 percentage points",
          "38.6% of all Earth’s water"
        ],
        "answer": 0,
        "why": "68.7−30.1=38.6 percentage points, both shares of freshwater.",
        "concept": "geo.a.water01.stores",
        "water01Evidence": "stores"
      },
      {
        "id": "geo.a.water01.distribution.c2",
        "prompt": "What does the map’s per-person measure divide by?",
        "options": [
          "Population",
          "Country land area",
          "Number of reservoirs"
        ],
        "answer": 0,
        "why": "The indicator divides internal renewable flows by population.",
        "concept": "geo.a.water01.map-reading",
        "water01Evidence": "map"
      },
      {
        "id": "geo.a.water01.distribution.c3",
        "prompt": "Can Egypt’s internal-resource value establish its total freshwater supply?",
        "options": [
          "No: external flows are excluded",
          "Yes: it includes every transboundary river",
          "Yes: it measures all treated tap water"
        ],
        "answer": 0,
        "why": "The Nile illustrates why an internal account is not a complete water-supply account.",
        "concept": "geo.a.water01.stock-flow",
        "water01Evidence": "map"
      },
      {
        "id": "geo.a.water01.distribution.c4",
        "prompt": "An aquifer loses 25 units to pumping and gains 10 from recharge. What happens?",
        "options": [
          "Its stored volume falls by 15 units",
          "It gains 15 units",
          "It stays constant because water is renewable"
        ],
        "answer": 0,
        "why": "Ignoring other flows, recharge−withdrawal=10−25=−15.",
        "concept": "geo.a.water01.groundwater"
      }
    ]
  },
  {
    "id": "geography.a.water.availability-scales",
    "topicId": "geography.a.water",
    "resourceOption": "water",
    "title": "Water availability: zoom in",
    "refs": [
      "6.8b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Global averages hide differences",
        "A world total does not show where renewable resources occur or how many people share them. Our five-country map uses a common internal-flow-per-person measure and fixed key. It is useful for selected comparisons, but excludes external inflows and does not show each country’s seasonal or regional variation."
      ],
      [
        "A national mean can hide local gaps",
        "Within one country, a wet upland catchment may have low demand while a drier city has high demand. Seasonal rain may arrive when use is low. Reservoirs and transfers can redistribute water through time or space, but cost, evaporation, ecosystems and competing users constrain what is available. The two-catchment example is invented, not a real national map."
      ],
      [
        "At the tap, quality and infrastructure matter",
        "Rain or river water may be present while residents lack a reliable safe supply. Treatment, storage, pipes, maintenance and affordable access connect a source to users. Pollution can reduce usable supply, and leaks reduce delivery. Physical shortage and limited access can overlap; neither a wet climate nor a large national average guarantees safe local water."
      ]
    ],
    "cardViews": [
      "map",
      "catchments",
      "delivery"
    ],
    "model": "dev-water-availability-scales",
    "tasks": [
      [
        "Which is a valid use of this map?",
        [
          "Compare selected countries using the same defined indicator",
          "Rank every household’s tap reliability",
          "Measure current monthly rainfall"
        ],
        0
      ],
      [
        "In the invented country, why can the city face a gap despite an overall surplus?",
        [
          "Supply and demand are in different places",
          "Every national average is wrong",
          "Rain can never be stored"
        ],
        0
      ],
      [
        "What can reduce delivered supply while source water is unchanged?",
        [
          "Leaks or insufficient treatment",
          "A change in map colour alone",
          "An extra caption"
        ],
        0
      ],
      [
        "What must a local availability investigation include?",
        [
          "Season, quality, infrastructure and users",
          "Only the national average",
          "Only total global water"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.water01.availability-scales.p1",
        "prompt": "Does Brazil’s high internal per-person value prove equal access?",
        "options": [
          "No: local distribution and infrastructure still matter",
          "Yes: the mean applies to every home",
          "Yes: quality is included automatically"
        ],
        "answer": 0,
        "why": "A national mean hides variation and does not measure safe access.",
        "concept": "geo.a.water01.availability-scales",
        "water01Evidence": "map"
      },
      {
        "id": "geo.a.water01.availability-scales.p2",
        "prompt": "A reservoir fills in a wet season. What does storage mainly change?",
        "options": [
          "When stored water can be used",
          "The total number of water molecules on Earth",
          "All seawater into drinking water"
        ],
        "answer": 0,
        "why": "Storage can shift timing; it does not create water.",
        "concept": "geo.a.water01.availability-timing"
      },
      {
        "id": "geo.a.water01.availability-scales.p3",
        "prompt": "A village is near a polluted river. What is missing from a rainfall-only analysis?",
        "options": [
          "Whether water can be treated and reliably delivered",
          "Only the village’s longitude",
          "Only the world’s ice stock"
        ],
        "answer": 0,
        "why": "Quality and infrastructure affect usable supply.",
        "concept": "geo.a.water01.access"
      }
    ],
    "check": [
      {
        "id": "geo.a.water01.availability-scales.c1",
        "prompt": "A national mean is high. One district has dry summers and damaged pipes. Which follows?",
        "options": [
          "The district may still face shortages",
          "The district must have abundant tap water",
          "The national mean measures every pipe"
        ],
        "answer": 0,
        "why": "Local timing and delivery differ from a national average.",
        "concept": "geo.a.water01.availability-scales"
      },
      {
        "id": "geo.a.water01.availability-scales.c2",
        "prompt": "A wet catchment has 120 usable units and demand 40; a city has 30 and demand 70. Which is correct?",
        "options": [
          "Overall supply exceeds demand, yet the city has a local deficit",
          "Both places must have a surplus",
          "The city has a surplus of 40"
        ],
        "answer": 0,
        "why": "Totals 150 versus 110 hide the city’s 40-unit shortfall before feasible transfers.",
        "concept": "geo.a.water01.availability-scales"
      },
      {
        "id": "geo.a.water01.availability-scales.c3",
        "prompt": "Which indicator best tests safe local access?",
        "options": [
          "Reliable treated water reaching users",
          "Only internal resources per person",
          "Only the number of rainy days"
        ],
        "answer": 0,
        "why": "Local access requires evidence of quality, reliability and delivery.",
        "concept": "geo.a.water01.access"
      },
      {
        "id": "geo.a.water01.availability-scales.c4",
        "prompt": "Why should a source comparison use matching units and definitions?",
        "options": [
          "A stock, an annual flow and safe access answer different questions",
          "Every water statistic measures the same thing",
          "A larger number always means safer water"
        ],
        "answer": 0,
        "why": "Read what each measure includes before comparing.",
        "concept": "geo.a.water01.stock-flow"
      }
    ]
  },
  {
    "id": "geography.a.water.surplus-deficit",
    "topicId": "geography.a.water",
    "resourceOption": "water",
    "title": "Why does water run short?",
    "refs": [
      "6.8c"
    ],
    "minutes": 30,
    "cards": [
      [
        "Climate sets part of the balance",
        "Rainfall and snowmelt add water; evaporation returns it to the atmosphere. High rainfall can support renewable supply, while low rainfall and high evaporation can limit it. Geology and vegetation influence runoff and recharge. A meteorological balance is not yet a safe-supply account: environmental needs, quality and access also matter."
      ],
      [
        "Timing can turn abundance into shortage",
        "A wet season may replenish stores before a dry period with high demand. Reservoirs and aquifers buffer this mismatch, but their volumes are finite. In our invented store, 80 starting units plus 20 inflow minus 35 withdrawal and 5 evaporation leave 60. The moving water shows direction and sequence, not measured rainfall or a real reservoir forecast."
      ],
      [
        "A deficit has more than one cause",
        "Compare usable supply with demand over the same place and period, after allowing for ecosystems. Demand can rise through irrigation, population growth and industry. Pollution and broken infrastructure can reduce usable supply even where rain is plentiful. Pumping more may close a short-term gap while depleting a store; renewal does not guarantee sustainable use."
      ]
    ],
    "cardViews": [
      "climate",
      "storage",
      "balance"
    ],
    "model": "dev-water-surplus-deficit",
    "tasks": [
      [
        "What changes in the dry-climate example?",
        [
          "Less rainfall and larger evaporation losses",
          "Water molecules vanish from Earth",
          "Demand is automatically zero"
        ],
        0
      ],
      [
        "Predict the store after 80+20−35−5.",
        [
          "60 teaching units",
          "140 teaching units",
          "100 teaching units"
        ],
        0
      ],
      [
        "Pumping exceeds aquifer recharge. What is the likely direction of stored water?",
        [
          "Down, unless other inflows compensate",
          "Always up",
          "Always unchanged"
        ],
        0
      ],
      [
        "Usable supply is 60 units and demand 80. What is the gap?",
        [
          "A 20-unit deficit",
          "A 20-unit surplus",
          "A 140-unit surplus"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.water01.surplus-deficit.p1",
        "prompt": "Why can a wet place face a water deficit?",
        "options": [
          "Demand, pollution or delivery limits may exceed usable supply",
          "Wet places never have shortages",
          "Rainfall is always immediately drinkable"
        ],
        "answer": 0,
        "why": "Supply is usable water at a particular time/place, not rain alone.",
        "concept": "geo.a.water01.deficit-causes"
      },
      {
        "id": "geo.a.water01.surplus-deficit.p2",
        "prompt": "An invented store starts 50, gains 20, loses 30 to use and 5 to evaporation. End volume?",
        "options": [
          "35 units",
          "65 units",
          "105 units"
        ],
        "answer": 0,
        "why": "50+20−30−5=35; account for all listed transfers.",
        "concept": "geo.a.water01.water-balance"
      },
      {
        "id": "geo.a.water01.surplus-deficit.p3",
        "prompt": "What does a loop restarting mean?",
        "options": [
          "The teaching sequence restarts",
          "The real aquifer instantly refills",
          "A drought has ended"
        ],
        "answer": 0,
        "why": "Replay is a worked process, not natural recovery.",
        "concept": "geo.a.water01.groundwater"
      }
    ],
    "check": [
      {
        "id": "geo.a.water01.surplus-deficit.c1",
        "prompt": "A store starts 90, gains 15, supplies 25 and loses 10 to evaporation. What remains?",
        "options": [
          "70 units",
          "100 units",
          "140 units"
        ],
        "answer": 0,
        "why": "90+15−25−10=70 units.",
        "concept": "geo.a.water01.water-balance"
      },
      {
        "id": "geo.a.water01.surplus-deficit.c2",
        "prompt": "Usable supply after environmental needs is 45 and demand 60. Which describes it?",
        "options": [
          "A 15-unit deficit",
          "A 15-unit surplus",
          "No gap because rain occurred"
        ],
        "answer": 0,
        "why": "45−60=−15; the defined usable-supply account has a deficit.",
        "concept": "geo.a.water01.water-balance"
      },
      {
        "id": "geo.a.water01.surplus-deficit.c3",
        "prompt": "Which pair most plausibly increases physical water pressure?",
        "options": [
          "Lower rainfall and higher evaporation",
          "Lower demand and greater recharge",
          "Less leakage and better treatment"
        ],
        "answer": 0,
        "why": "Reduced inputs and greater losses can shrink renewable availability.",
        "concept": "geo.a.water01.deficit-causes"
      },
      {
        "id": "geo.a.water01.surplus-deficit.c4",
        "prompt": "Why might extra groundwater pumping be a temporary fix?",
        "options": [
          "It may remove stored water faster than recharge replaces it",
          "Groundwater is unlimited",
          "Pumping always increases future rain"
        ],
        "answer": 0,
        "why": "A finite store can decline even while short-term supply rises.",
        "concept": "geo.a.water01.groundwater"
      }
    ]
  },
  {
    "id": "geography.a.water.supply-demand-change",
    "topicId": "geography.a.water",
    "resourceOption": "water",
    "title": "Water supply and demand are changing",
    "refs": [
      "6.8d"
    ],
    "minutes": 30,
    "cards": [
      [
        "Demand has changed since the 1970s",
        "Over roughly the last half-century, population growth, urbanisation, changing diets and expanded irrigation have increased pressure for water services in many regions. Industrial and energy uses matter too. UNESCO’s 2024 report describes global freshwater demand rising by just under 1% per year since the 1980s; this dated summary is not a 2026 forecast or proof of the same rate in every country. Efficiency and industrial restructuring can reduce some withdrawals."
      ],
      [
        "Intervention changes accessible supply",
        "Dams store water across seasons; transfers move it between catchments; pumps make groundwater accessible; treatment and reuse can increase usable supply. These do not create unlimited freshwater. Storage loses water to evaporation, transfers affect donor catchments, and pumping beyond recharge lowers stocks. More reliable irrigation can also encourage further demand."
      ],
      [
        "Future pressure is conditional",
        "The genuine UN 2024 population projection has a central path and an uncertainty range, not a certain future. Population alone does not determine demand: water use per person, crop choices, industry, efficiency and access matter. With a fixed illustrative 100-unit supply,10 people share 10 units each while 20 share 5. That assumption explains pressure; it is not a forecast of future water resources."
      ]
    ],
    "cardViews": [
      "history",
      "interventions",
      "projection"
    ],
    "model": "dev-water-supply-demand-change",
    "tasks": [
      [
        "What does the dated historical summary support?",
        [
          "Demand pressure has grown overall, with regional/sector variation",
          "Every country increased at exactly the same rate",
          "Supply and safe access are identical"
        ],
        0
      ],
      [
        "What does a transfer mainly change?",
        [
          "The location where water can be supplied",
          "The total water on Earth",
          "All sea water into fresh water"
        ],
        0
      ],
      [
        "How should the UN projection range be read?",
        [
          "As uncertainty around future population",
          "As known future observations",
          "As a measured water forecast"
        ],
        0
      ],
      [
        "Hold teaching supply 100 units; population doubles 10→20. Per-person amount?",
        [
          "Falls 10→5 units",
          "Rises 10→20 units",
          "Stays 10 units"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.water01.supply-demand-change.p1",
        "prompt": "Which can raise water demand without a larger population?",
        "options": [
          "More water-intensive production per person",
          "A smaller irrigated area alone",
          "Lower pipe leakage alone"
        ],
        "answer": 0,
        "why": "Intensity and production choices matter as well as population.",
        "concept": "geo.a.water01.demand-change"
      },
      {
        "id": "geo.a.water01.supply-demand-change.p2",
        "prompt": "Why can a new reservoir increase accessible supply but cause tradeoffs?",
        "options": [
          "It shifts timing while affecting land, flows and evaporation",
          "It manufactures new freshwater",
          "It has no downstream effects"
        ],
        "answer": 0,
        "why": "Interventions change access and distribution with costs and constraints.",
        "concept": "geo.a.water01.human-intervention"
      },
      {
        "id": "geo.a.water01.supply-demand-change.p3",
        "prompt": "What must be stated in a future per-person water scenario?",
        "options": [
          "Assumed supply, population and use intensity",
          "Only the central population number",
          "That all future demand is certain"
        ],
        "answer": 0,
        "why": "A conditional model needs explicit assumptions and uncertainty.",
        "concept": "geo.a.water01.future-water"
      }
    ],
    "check": [
      {
        "id": "geo.a.water01.supply-demand-change.c1",
        "prompt": "Why may water demand rise as a city grows?",
        "options": [
          "More users and services can increase required supply",
          "Urban growth creates rainfall",
          "Every city has identical use per person"
        ],
        "answer": 0,
        "why": "Population and services can raise demand; the effect depends on intensity and access.",
        "concept": "geo.a.water01.demand-change"
      },
      {
        "id": "geo.a.water01.supply-demand-change.c2",
        "prompt": "Which illustrates a supply intervention since the 1970s?",
        "options": [
          "Pumping and transfers improve access while potentially stressing source stores",
          "Changing a chart label creates water",
          "Unlimited pumping always preserves aquifers"
        ],
        "answer": 0,
        "why": "Access can improve, but abstraction and transfers have constraints.",
        "concept": "geo.a.water01.human-intervention"
      },
      {
        "id": "geo.a.water01.supply-demand-change.c3",
        "prompt": "A fixed teaching supply 120 is shared by 15 people, then 20. What happens per person?",
        "options": [
          "8→6 units",
          "6→8 units",
          "120→140 units"
        ],
        "answer": 0,
        "why": "120/15=8;120/20=6 under the explicitly fixed-supply assumption.",
        "concept": "geo.a.water01.future-water"
      },
      {
        "id": "geo.a.water01.supply-demand-change.c4",
        "prompt": "What does the UN line’s 2100 central value represent?",
        "options": [
          "A conditional population projection, not certain future water supply",
          "An observed population census in 2100",
          "The only possible future"
        ],
        "answer": 0,
        "why": "Population uncertainty and separate water assumptions must be retained.",
        "concept": "geo.a.water01.future-water",
        "water01Evidence": "projection"
      }
    ]
  },
  {
    "id": "geography.a.water.sector-use",
    "topicId": "geography.a.water",
    "resourceOption": "water",
    "title": "Who withdraws the water?",
    "refs": [
      "6.9a"
    ],
    "minutes": 30,
    "cards": [
      [
        "Three sectors, one total",
        "Agriculture includes irrigation and livestock; industry includes uses such as manufacturing and power-station cooling; domestic withdrawals serve household/municipal needs. A withdrawal takes water from a source and some may return. It is different from permanent consumption, all rain falling on crops or the share of people with safe drinking water."
      ],
      [
        "Compare matched country shares",
        "The FAO/WDI 2022 snapshot gives agriculture/industry/domestic shares of about 39.7/47.2/13.1% for the USA,90.4/2.2/7.4% for India, and 91.8/0.5/7.7% for Ethiopia. These developed, emerging and developing examples illustrate contrasts, not a rule for every country. Agriculture has a larger share in India and Ethiopia; industrial withdrawal has a larger share in the USA. Climate, production and methods also matter."
      ],
      [
        "A share is not an amount",
        "All three sectors share each country’s own withdrawal total. A small domestic share can still represent a large volume in a large total. Use percentage-point differences to compare shares:90.4−39.7=50.7 percentage points. The global 2022 UN 72/15/13 chart uses the broader services label for its last category; do not silently treat services as an identical household-only measure."
      ]
    ],
    "cardViews": [
      "definitions",
      "countries",
      "amounts"
    ],
    "model": "dev-water-sector-use",
    "tasks": [
      [
        "Does withdrawal mean every litre is permanently consumed?",
        [
          "No: some water can return to the environment",
          "Yes: water ceases to exist",
          "Yes: no return flows are possible"
        ],
        0
      ],
      [
        "Read the 2022 chart. Which country has the largest industrial share?",
        [
          "USA",
          "India",
          "Ethiopia"
        ],
        0
      ],
      [
        "A uses 10% of 1000 units domestically; B uses 20% of 100. Which is larger in volume?",
        [
          "A:100 units versus 20",
          "B:20 is always greater than 10",
          "Both 20 units"
        ],
        0
      ],
      [
        "Which comparison is sound?",
        [
          "Matched shares with the same categories and dated definitions",
          "Domestic share versus global services as identical household-only measures",
          "A national share as the exact share for every farm"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.water01.sector-use.p1",
        "prompt": "Which sector has the largest share in India’s 2022 extract?",
        "options": [
          "Agriculture",
          "Industry",
          "Domestic"
        ],
        "answer": 0,
        "why": "Use the matched source chart; agriculture exceeds the other shares.",
        "concept": "geo.a.water01.sector-shares",
        "water01Evidence": "countries"
      },
      {
        "id": "geo.a.water01.sector-use.p2",
        "prompt": "USA industry 47.2% versus India 2.2%: difference?",
        "options": [
          "45.0 percentage points",
          "49.4 percentage points",
          "45.0% of all Earth’s water"
        ],
        "answer": 0,
        "why": "Subtract comparable rounded shares:47.2−2.2=45.0 percentage points.",
        "concept": "geo.a.water01.sector-calculation",
        "water01Evidence": "countries"
      },
      {
        "id": "geo.a.water01.sector-use.p3",
        "prompt": "Why can a smaller share still mean more withdrawn water?",
        "options": [
          "The total can be much larger",
          "A share is always a fixed volume",
          "Percentages have no denominator"
        ],
        "answer": 0,
        "why": "A fraction must be multiplied by its own total.",
        "concept": "geo.a.water01.share-volume"
      }
    ],
    "check": [
      {
        "id": "geo.a.water01.sector-use.c1",
        "prompt": "Which sector dominates Ethiopia’s displayed 2022 withdrawals?",
        "options": [
          "Agriculture",
          "Industry",
          "Domestic"
        ],
        "answer": 0,
        "why": "Agriculture is 91.8% of this country’s own total.",
        "concept": "geo.a.water01.sector-shares",
        "water01Evidence": "countries"
      },
      {
        "id": "geo.a.water01.sector-use.c2",
        "prompt": "How many percentage points separate USA industry and domestic shares, using displayed values?",
        "options": [
          "34.1 percentage points",
          "60.3 percentage points",
          "3.6 percentage points"
        ],
        "answer": 0,
        "why": "47.2−13.1=34.1 percentage points.",
        "concept": "geo.a.water01.sector-calculation",
        "water01Evidence": "countries"
      },
      {
        "id": "geo.a.water01.sector-use.c3",
        "prompt": "Country X:5% of 2000 units domestic;Y:25% of 200. Which is correct?",
        "options": [
          "X withdraws 100 versusY 50 units",
          "Y must withdraw more because 25>5",
          "Both withdraw 25 units"
        ],
        "answer": 0,
        "why": "5/100×2000=100;25/100×200=50.",
        "concept": "geo.a.water01.share-volume"
      },
      {
        "id": "geo.a.water01.sector-use.c4",
        "prompt": "What conclusion can these three country examples support?",
        "options": [
          "Their sector compositions differ; development alone does not explain every country",
          "Every developed country has identical shares",
          "The domestic share measures safe-water coverage"
        ],
        "answer": 0,
        "why": "These are dated examples, not universal development-stage laws or access measures.",
        "concept": "geo.a.water01.sector-shares",
        "water01Evidence": "countries"
      }
    ]
  }
];
