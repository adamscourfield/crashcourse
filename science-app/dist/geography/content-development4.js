export const indiaChangeLessons=[
  {
    "id": "geography.a.development.india-population",
    "topicId": "geography.a.development",
    "title": "India: a changing population",
    "refs": [
      "5.6d"
    ],
    "minutes": 30,
    "caseStudy": "india",
    "cards": [
      [
        "Compare two genuine population structures",
        "The WDI/UN estimates show a smaller under-15 share in 2024 than in 1994, and larger working-age and older shares. The two pyramids use the same scale: each bar is a percentage of India’s total population, split by age and recorded sex. A narrower base as a share does not by itself mean fewer children in absolute numbers. These are national estimates, not today’s live population count."
      ],
      [
        "Longer lives change needs",
        "Estimated life expectancy at birth rose from 60.2 years in 1994 to 72.2 in 2024: about 12.0 years using the displayed rounded values. This period measure summarises mortality conditions; it does not predict the age at which every child will die. Health, sanitation, nutrition and care can contribute to longer lives. A larger older population also changes demand for care, accessible housing and income security."
      ],
      [
        "A potential dividend needs opportunity",
        "The 15–64 share rose from about 58.2% to 68.2% over these 30 years. A larger potential workforce can support production and saving if people can access education, health and suitable jobs. Working age does not mean employed: unpaid care, unemployment and unequal participation matter. Ageing and a changing birth rate also alter the balance of needs over time."
      ]
    ],
    "cardViews": [
      "1994",
      "life",
      "dividend"
    ],
    "model": "dev-india-population",
    "tasks": [
      [
        "What does one pyramid bar measure?",
        [
          "One age-and-sex group as a share of total population",
          "A share of only that sex after conversion",
          "The number of employed people"
        ],
        0
      ],
      [
        "Are 1994 and 2024 thirty years apart?",
        [
          "Yes: compare a 30-year interval",
          "No: compare three years",
          "No: compare a forecast only"
        ],
        0
      ],
      [
        "Does 72.2 years predict every person’s death age?",
        [
          "No: it is period life expectancy at birth",
          "Yes: every person dies at 72.2",
          "Yes: it measures only retired people"
        ],
        0
      ],
      [
        "What turns a potential workforce into economic opportunity?",
        [
          "Health, skills and access to suitable jobs",
          "Age alone guarantees a job",
          "A larger population removes every cost"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "Using the rounded life-expectancy figures, the increase is…",
        "options": [
          "12.0 years",
          "132.4 years",
          "12.0 percentage points"
        ],
        "answer": 0,
        "why": "72.2−60.2=12.0 years. Both are rounded period estimates at birth.",
        "concept": "geo.a.development.india.population-life",
        "indiaChangeEvidence": "life",
        "id": "geo.a.d4.india-population.p1"
      },
      {
        "prompt": "Compared with 1994, the 2024 pyramid has…",
        "options": [
          "A smaller youngest-group share",
          "No people above 65",
          "Only employed adults"
        ],
        "answer": 0,
        "why": "Read the same percentage scale; the youngest age groups form a smaller share in 2024.",
        "concept": "geo.a.development.india.population-pyramid",
        "indiaChangeEvidence": "pyramids",
        "id": "geo.a.d4.india-population.p2"
      },
      {
        "prompt": "Why is a demographic dividend conditional?",
        "options": [
          "Working-age people need skills, health and suitable work",
          "Everyone aged 15–64 is automatically employed",
          "Age structure alone determines wages"
        ],
        "answer": 0,
        "why": "The age profile offers potential; participation and productivity depend on supporting conditions.",
        "concept": "geo.a.development.india.population-dividend",
        "id": "geo.a.d4.india-population.p3"
      }
    ],
    "check": [
      {
        "prompt": "Which displayed year has the broader youngest-age base as a share?",
        "options": [
          "1994",
          "2024",
          "Both are identical"
        ],
        "answer": 0,
        "why": "The paired charts use the same scale and total-population denominator; the youngest-group shares are larger in 1994.",
        "concept": "geo.a.development.india.population-pyramid",
        "indiaChangeEvidence": "pyramids",
        "id": "geo.a.d4.india-population.c1"
      },
      {
        "prompt": "What is the unit of the life-expectancy chart?",
        "options": [
          "Years at birth under period mortality conditions",
          "Percentage of workers",
          "The age all individuals must reach"
        ],
        "answer": 0,
        "why": "Life expectancy is a population mortality summary, not an employment or individual guarantee.",
        "concept": "geo.a.development.india.population-life",
        "indiaChangeEvidence": "life",
        "id": "geo.a.d4.india-population.c2"
      },
      {
        "prompt": "Why can a rising 65+ share affect development planning?",
        "options": [
          "Demand for care and accessible services may rise",
          "All older people become unable to contribute",
          "Every school must close immediately"
        ],
        "answer": 0,
        "why": "Age structure changes needs; individual capacities and circumstances vary.",
        "concept": "geo.a.development.india.population-ageing",
        "id": "geo.a.d4.india-population.c3"
      },
      {
        "prompt": "The 15–64 share rises. Which additional evidence is needed to assess an employment dividend?",
        "options": [
          "Participation, skills and access to jobs",
          "Only the country’s total area",
          "The colour used for the pyramid"
        ],
        "answer": 0,
        "why": "Working-age status is distinct from employment and productivity.",
        "concept": "geo.a.development.india.population-dividend",
        "id": "geo.a.d4.india-population.c4"
      }
    ]
  },
  {
    "id": "geography.a.development.india-social-change",
    "topicId": "geography.a.development",
    "title": "India: education, inequality and the middle class",
    "refs": [
      "5.6e"
    ],
    "minutes": 30,
    "caseStudy": "india",
    "cards": [
      [
        "Education can expand opportunity",
        "The Education Ministry’s NEP secondary gross enrolment ratio rose from 67.6 in 2022–23 to 71.7 in 2025–26. This compares enrolment in Classes IX–XII with the official age-group population; it is not the percentage attending every day or reaching a learning standard. Better access and retention can widen opportunity, while costs, location, disability and differences in teaching can leave gaps."
      ],
      [
        "Middle class depends on the definition",
        "PRICE’s survey brief estimates 349 million people in its middle-class households in 2015–16 and 432 million in 2020–21. It defines these households using annual income of₹5–30 lakh at 2020–21 prices. These are people living in qualifying households, not 349 million households or an individual income threshold. Greater purchasing power can support services and aspirations, but definitions differ and financial security is not guaranteed."
      ],
      [
        "Growth can coexist with concentration",
        "The WIL research estimates that the top 10% of adults received 57.7% of national income in 2022–23, compared with 15.0% for the bottom 50%. Its longer series finds rising top-end inequality after the early 1980 s. These estimates combine several sources and have uncertainty; income, wealth and consumption inequality are different measures. The middle 40% income group is not automatically the same as PRICE’s middle class."
      ]
    ],
    "cardViews": [
      "education",
      "middle",
      "inequality"
    ],
    "model": "dev-india-social-change",
    "tasks": [
      [
        "Does gross enrolment measure learning quality?",
        [
          "No: participation and learning are different",
          "Yes: every enrolled student masters all content",
          "Yes: it is an exam pass rate"
        ],
        0
      ],
      [
        "PRICE’s ₹5–30 lakh cutoff applies to…",
        [
          "Annual household income at 2020–21 prices",
          "Every person’s monthly wage",
          "The middle 40% by definition"
        ],
        0
      ],
      [
        "Are the top 1% and top 10% separate groups to add?",
        [
          "No: the top 1% sits within the top 10%",
          "Yes: they are independent populations",
          "Yes: they total the entire country"
        ],
        0
      ],
      [
        "Can average growth coexist with greater inequality?",
        [
          "Yes: gains can be distributed unevenly",
          "No: all incomes must increase equally",
          "No: every household is identical"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "The displayed secondary GER changes by…",
        "options": [
          "4.1 percentage points",
          "139.3 percentage points",
          "4.1 million schools"
        ],
        "answer": 0,
        "why": "71.7−67.6=4.1 percentage points; these are ratios using the stated NEP secondary definition.",
        "concept": "geo.a.development.india.social-education",
        "indiaChangeEvidence": "education",
        "id": "geo.a.d4.india-social-change.p1"
      },
      {
        "prompt": "PRICE’s selected PDF estimates an increase of…",
        "options": [
          "83 million people in qualifying households",
          "83 million households",
          "781 million additional people"
        ],
        "answer": 0,
        "why": "432−349=83 million. This uses a defined income band and dated survey estimates, not a universal class count.",
        "concept": "geo.a.development.india.social-middle",
        "indiaChangeEvidence": "middle",
        "id": "geo.a.d4.india-social-change.p2"
      },
      {
        "prompt": "What does the income-share evidence show?",
        "options": [
          "A larger share for the top 10% than the bottom 50%",
          "Everyone receives the same income",
          "57.7% of people belong to the top 10%"
        ],
        "answer": 0,
        "why": "Population-group sizes and their shares of national income are different percentages.",
        "concept": "geo.a.development.india.social-inequality",
        "indiaChangeEvidence": "income",
        "id": "geo.a.d4.india-social-change.p3"
      }
    ],
    "check": [
      {
        "prompt": "Using the chart, the top 10%–bottom 50% income-share gap is…",
        "options": [
          "42.7 percentage points",
          "72.7 percentage points",
          "42.7 million people"
        ],
        "answer": 0,
        "why": "57.7−15.0=42.7 percentage points of national income, not a population count.",
        "concept": "geo.a.development.india.social-inequality",
        "indiaChangeEvidence": "income",
        "id": "geo.a.d4.india-social-change.c1"
      },
      {
        "prompt": "A student enrols but cannot attend regularly. Which claim needs more evidence?",
        "options": [
          "That enrolment has produced effective learning access",
          "That their name is on the enrolment list",
          "That enrolment and attendance differ"
        ],
        "answer": 0,
        "why": "Participation statistics alone cannot establish attendance, inclusion or attainment.",
        "concept": "geo.a.development.india.social-education",
        "id": "geo.a.d4.india-social-change.c2"
      },
      {
        "prompt": "Why should PRICE’s middle-class count not be compared directly with the WIL middle 40% as identical groups?",
        "options": [
          "They use different definitions and units",
          "Both are always 40% of all people",
          "Both measure only household wealth"
        ],
        "answer": 0,
        "why": "One uses a household income band; the other ranks adults within an income distribution.",
        "concept": "geo.a.development.india.social-definitions",
        "id": "geo.a.d4.india-social-change.c3"
      },
      {
        "prompt": "Which conclusion best fits expanding opportunity and persistent inequality?",
        "options": [
          "Some households gain while barriers and concentration remain",
          "Every household’s wellbeing has become equal",
          "Economic growth removes all education gaps"
        ],
        "answer": 0,
        "why": "Evaluate distribution and access alongside aggregate growth.",
        "concept": "geo.a.development.india.social-distribution",
        "id": "geo.a.d4.india-social-change.c4"
      }
    ]
  },
  {
    "id": "geography.a.development.india-geopolitics",
    "topicId": "geography.a.development",
    "title": "India: geopolitical relationships and development",
    "refs": [
      "5.7a"
    ],
    "minutes": 30,
    "caseStudy": "india",
    "cards": [
      [
        "Relationships can open opportunities",
        "Foreign policy includes how a government cooperates, negotiates and manages differences with other countries. India works with different partners on markets, technology, security and infrastructure. The 2024 Quad example brings together India, Australia, Japan and the USA on shared projects. It is a partnership rather than an automatic mutual-defence alliance. Announced cooperation still needs resources, delivery and access to benefit people."
      ],
      [
        "Read a defence agreement’s actual obligations",
        "India and the USA signed LEMOA on 29 August 2016 to facilitate reciprocal logistics support. Such cooperation can assist authorised visits, training or disaster relief, with supplies paid for or reciprocated. Its text does not require joint activity or establish military bases. A defence-cooperation agreement is therefore not automatically a military pact promising to fight for the other state. Security resources also have opportunity costs."
      ],
      [
        "Territorial disputes can affect wider development",
        "Boundary tension can raise uncertainty, costs and risks for communities, trade and investment. India and China reached patrolling arrangements in October 2024 concerning specified friction areas after diplomatic and military discussions. Disengagement and dialogue are different from a final settlement of the boundary question. Cooperation and disagreement can coexist; this dated case illustrates a mechanism, not a forecast of today’s relations or a judgement about sovereignty."
      ]
    ],
    "cardViews": [
      "links",
      "logistics",
      "border"
    ],
    "model": "dev-india-geopolitics",
    "tasks": [
      [
        "Which four countries form the Quad example?",
        [
          "India, Australia, Japan and the USA",
          "India, China, Brazil and France",
          "India alone"
        ],
        0
      ],
      [
        "Does LEMOA automatically require joint military activity?",
        [
          "No: the agreement specifies no such obligation",
          "Yes: any request triggers a war",
          "Yes: it establishes permanent bases"
        ],
        0
      ],
      [
        "Does a patrolling arrangement settle every territorial claim?",
        [
          "No: operational arrangements and final settlement differ",
          "Yes: every claim automatically disappears",
          "Yes: it measures national incomes"
        ],
        0
      ],
      [
        "Why might lower tension support development?",
        [
          "It can reduce uncertainty affecting activity",
          "It guarantees equal household incomes",
          "It removes all costs of foreign policy"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "An agreement allows paid logistics support but creates no duty to fight. It is best understood as…",
        "options": [
          "Specific cooperation with limited obligations",
          "An automatic mutual-defence guarantee",
          "Proof that bases have been established"
        ],
        "answer": 0,
        "why": "Read the agreed obligations; logistics cooperation does not imply every type of alliance.",
        "concept": "geo.a.development.india.geopolitics-terms",
        "indiaChangeEvidence": "terms",
        "id": "geo.a.d4.india-geopolitics.p1"
      },
      {
        "prompt": "Why might companies respond to a territorial dispute?",
        "options": [
          "Uncertainty can affect routes, costs and investment decisions",
          "Political conditions never affect economic decisions",
          "A dispute guarantees higher wages"
        ],
        "answer": 0,
        "why": "Risk can influence decisions, although responses differ by firm and place.",
        "concept": "geo.a.development.india.geopolitics-risk",
        "id": "geo.a.d4.india-geopolitics.p2"
      },
      {
        "prompt": "A partnership announces infrastructure projects. What is needed to assess development benefits?",
        "options": [
          "Evidence of delivery, access and who gains",
          "Only the announcement date",
          "An assumption that all commitments succeeded"
        ],
        "answer": 0,
        "why": "Foreign-policy commitments and delivered development outcomes are different evidence.",
        "concept": "geo.a.development.india.geopolitics-outcomes",
        "id": "geo.a.d4.india-geopolitics.p3"
      }
    ],
    "check": [
      {
        "prompt": "Which conclusion is supported by the displayed LEMOA terms?",
        "options": [
          "Logistics cooperation does not itself establish bases",
          "Either country must join every conflict",
          "All support must be a free gift"
        ],
        "answer": 0,
        "why": "The terms state no basing arrangements or obligation for joint activity.",
        "concept": "geo.a.development.india.geopolitics-terms",
        "indiaChangeEvidence": "terms",
        "id": "geo.a.d4.india-geopolitics.c1"
      },
      {
        "prompt": "A government shifts funds into security spending. A possible development trade-off is…",
        "options": [
          "Less funding available for another priority unless resources expand",
          "Every service improves automatically",
          "All public investment ceases by definition"
        ],
        "answer": 0,
        "why": "Opportunity cost concerns the best alternative use of limited resources.",
        "concept": "geo.a.development.india.geopolitics-cost",
        "id": "geo.a.d4.india-geopolitics.c2"
      },
      {
        "prompt": "Why should the October 2024 border example be dated?",
        "options": [
          "It records a particular arrangement, not a live guarantee of final settlement",
          "Dates make all later evidence irrelevant",
          "Any agreement permanently ends disagreement"
        ],
        "answer": 0,
        "why": "Relations and implementation change; a specific source cannot establish every later outcome.",
        "concept": "geo.a.development.india.geopolitics-dates",
        "id": "geo.a.d4.india-geopolitics.c3"
      },
      {
        "prompt": "Which distinction is most useful when reading about military pacts?",
        "options": [
          "Specific obligations versus broad labels such as partner",
          "Country size versus chart colour",
          "Signing a document versus counting every resident"
        ],
        "answer": 0,
        "why": "Agreements differ in duties, conditions and scope; partnership alone does not establish mutual defence.",
        "concept": "geo.a.development.india.geopolitics-obligations",
        "id": "geo.a.d4.india-geopolitics.c4"
      }
    ]
  },
  {
    "id": "geography.a.development.india-connectivity",
    "topicId": "geography.a.development",
    "title": "India: technology, connections and inclusion",
    "refs": [
      "5.7b"
    ],
    "minutes": 30,
    "caseStudy": "india",
    "cards": [
      [
        "Connections can change how services work",
        "Digital networks can connect Indian producers with buyers, students with learning resources and patients with information or consultations. Transport links move people and goods, including deliveries arranged online. A useful connection requires reliable infrastructure, suitable skills and affordable access. A national technology hub can support wider opportunities without guaranteeing that every rural area or household is included."
      ],
      [
        "Count subscriptions carefully",
        "TRAI’s 31 March 2026 snapshot reports 126.80 urban internet subscriptions per 100 people and 48.31 rural subscriptions per 100. A person or organisation may hold several connections, so these are not percentages of unique people online. They also do not measure speed, affordability or confidence using a service. The 78.49-per 100 gap describes the reported rural/urban aggregates; it is not a map of all core and periphery regions."
      ],
      [
        "Remove barriers across the whole journey",
        "A farmer may need a device, power, a usable language, digital skills, a trusted payment method and transport to sell online. A person with a disability may face additional accessibility barriers. Better roads or broadband can support less connected places, but distance, cost and unequal purchasing power still matter. Evaluate whether different groups can complete the task, not simply whether a cable or road exists."
      ]
    ],
    "cardViews": [
      "connect",
      "subscriptions",
      "barriers"
    ],
    "model": "dev-india-connectivity",
    "tasks": [
      [
        "A subscription count is the same as unique people online?",
        [
          "No: one person may have several connections",
          "Yes: one connection always equals one person",
          "Yes: values can never exceed 100 per 100"
        ],
        0
      ],
      [
        "Which link complements online sales of physical goods?",
        [
          "Reliable delivery and transport",
          "Removing every road",
          "Only a website colour change"
        ],
        0
      ],
      [
        "A device without usable skills demonstrates…",
        [
          "Access needs several supporting conditions",
          "All barriers are solved",
          "Every service is already inclusive"
        ],
        0
      ],
      [
        "Can rural/urban averages identify every core and periphery district?",
        [
          "No: conditions vary within those aggregates",
          "Yes: all urban people have equal access",
          "Yes: every rural area is identical"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "The displayed urban–rural subscription-density gap is…",
        "options": [
          "78.49 subscriptions per 100 people",
          "78.49% of unique people online",
          "175.11 subscriptions per 100 people"
        ],
        "answer": 0,
        "why": "126.80−48.31=78.49 per 100. This compares subscriptions, not unique people.",
        "concept": "geo.a.development.india.connectivity-data",
        "indiaChangeEvidence": "subscriptions",
        "id": "geo.a.d4.india-connectivity.p1"
      },
      {
        "prompt": "An online buyer pays, but no delivery route is available. What is missing?",
        "options": [
          "A physical connection needed to complete the sale",
          "Only another subscription count",
          "Proof that all digital links are useless"
        ],
        "answer": 0,
        "why": "Digital and transport networks can complement one another.",
        "concept": "geo.a.development.india.connectivity-transport",
        "id": "geo.a.d4.india-connectivity.p2"
      },
      {
        "prompt": "Why might an affordable network still exclude a group?",
        "options": [
          "Language, accessibility, skills or reliability can remain barriers",
          "Price is the only condition of access",
          "Every user has identical needs"
        ],
        "answer": 0,
        "why": "Meaningful access involves multiple conditions beyond the connection price.",
        "concept": "geo.a.development.india.connectivity-inclusion",
        "id": "geo.a.d4.india-connectivity.p3"
      }
    ],
    "check": [
      {
        "prompt": "Which statement correctly reads the urban figure?",
        "options": [
          "126.80 internet subscriptions per 100 people",
          "126.80% of distinct residents are online",
          "Every household has 126.80 users"
        ],
        "answer": 0,
        "why": "The denominator is population; multiple subscriptions mean density can exceed 100.",
        "concept": "geo.a.development.india.connectivity-data",
        "indiaChangeEvidence": "subscriptions",
        "id": "geo.a.d4.india-connectivity.c1"
      },
      {
        "prompt": "A rural clinic gets broadband but frequent power cuts interrupt use. What should an evaluation include?",
        "options": [
          "Supporting reliability as well as network availability",
          "Only whether a cable exists",
          "A guarantee every patient benefits"
        ],
        "answer": 0,
        "why": "A connection can be present without being continuously usable.",
        "concept": "geo.a.development.india.connectivity-conditions",
        "id": "geo.a.d4.india-connectivity.c2"
      },
      {
        "prompt": "Better transport and online market information may help producers by…",
        "options": [
          "Improving market reach and delivery options",
          "Guaranteeing a profit on every sale",
          "Removing every bargaining inequality"
        ],
        "answer": 0,
        "why": "Information and movement can support access, while prices, costs and power still matter.",
        "concept": "geo.a.development.india.connectivity-transport",
        "id": "geo.a.d4.india-connectivity.c3"
      },
      {
        "prompt": "Why does the rural average not describe every rural household?",
        "options": [
          "It combines places and users with different conditions",
          "All rural places are the same",
          "It measures only the least connected person"
        ],
        "answer": 0,
        "why": "Aggregate subscription density hides within-group differences and is not an individual access measure.",
        "concept": "geo.a.development.india.connectivity-distribution",
        "id": "geo.a.d4.india-connectivity.c4"
      }
    ]
  },
  {
    "id": "geography.a.development.india-rapid-impacts",
    "topicId": "geography.a.development",
    "title": "India: who gains from rapid development?",
    "refs": [
      "5.8a"
    ],
    "minutes": 30,
    "caseStudy": "india",
    "cards": [
      [
        "Economic expansion can create linked opportunities",
        "Investment in Indian manufacturing and services can create jobs, supplier demand and public revenues that help fund infrastructure and services. These are possible links: a new job may be insecure, require unavailable skills or pay too little to cover rising housing costs. Trace the connection from an activity to a benefit and identify who can access it; aggregate output alone does not establish an equal improvement in living standards."
      ],
      [
        "Social gains and pressures occur together",
        "Improved health, education, transport and housing can raise quality of life. Rapid urban growth may also put pressure on affordable homes, water, sanitation and commuting. Residents can experience both better opportunities and higher costs; displacement or unequal access may particularly affect groups with less power. Compare different people and places over time rather than labelling the whole country a single success or failure."
      ],
      [
        "Environmental costs change the judgement",
        "More production, transport and construction can increase energy demand, waste and land pressure. Untreated urban sewage and industrial effluents can reach rivers; treatment capacity, maintenance and dilution affect impacts. These costs can harm livelihoods and access to safe water, while reliable infrastructure and safeguards may reduce some risks. Judge economic, social and environmental effects together, using dated evidence and acknowledging uncertainty."
      ]
    ],
    "cardViews": [
      "economy",
      "society",
      "environment"
    ],
    "model": "dev-india-rapid-impacts",
    "tasks": [
      [
        "Which link could spread investment benefits?",
        [
          "Local supplier demand and suitable jobs",
          "Guaranteed identical wages for everyone",
          "Automatic removal of all costs"
        ],
        0
      ],
      [
        "Can a household gain work but face higher housing costs?",
        [
          "Yes: impacts can be mixed",
          "No: every effect has the same sign",
          "No: housing never affects wellbeing"
        ],
        0
      ],
      [
        "Can untreated sewage as well as industry pollute rivers?",
        [
          "Yes: sources and treatment conditions differ",
          "No: only factories can affect water",
          "No: every discharge is fully treated"
        ],
        0
      ],
      [
        "What makes an overall judgement stronger?",
        [
          "Comparing impacts, groups and timescales",
          "Counting only output growth",
          "Treating all project promises as outcomes"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "A factory creates employment but displaces some households. An evaluation should…",
        "options": [
          "Consider jobs alongside relocation costs and access",
          "Count jobs and ignore every cost",
          "Assume every displaced household gains equally"
        ],
        "answer": 0,
        "why": "Economic gains and social costs can fall on different groups.",
        "concept": "geo.a.development.india.impacts-distribution",
        "id": "geo.a.d4.india-rapid-impacts.p1"
      },
      {
        "prompt": "Why can pollution undermine an economic gain?",
        "options": [
          "It can damage health, livelihoods and usable water",
          "It can never affect people",
          "All extra output is identical to wellbeing"
        ],
        "answer": 0,
        "why": "Environmental effects can create economic and social costs elsewhere.",
        "concept": "geo.a.development.india.impacts-environment",
        "id": "geo.a.d4.india-rapid-impacts.p2"
      },
      {
        "prompt": "A city builds homes, but rents remain unaffordable to low-paid workers. Which issue remains?",
        "options": [
          "Access and affordability",
          "Proof that every resident is housed",
          "The disappearance of inequality"
        ],
        "answer": 0,
        "why": "An increased housing supply does not alone prove affordable access for everyone.",
        "concept": "geo.a.development.india.impacts-housing",
        "id": "geo.a.d4.india-rapid-impacts.p3"
      }
    ],
    "check": [
      {
        "prompt": "Which evidence best tests whether new jobs improve living standards?",
        "options": [
          "Pay, security, living costs and who can obtain them",
          "Only the number announced",
          "Only the factory’s national output share"
        ],
        "answer": 0,
        "why": "Job quality and household conditions influence the effect on wellbeing.",
        "concept": "geo.a.development.india.impacts-jobs",
        "id": "geo.a.d4.india-rapid-impacts.c1"
      },
      {
        "prompt": "A new road shortens journeys but removes habitat. The strongest judgement…",
        "options": [
          "Weighs access benefits and environmental losses",
          "Assumes a shorter journey removes every cost",
          "Considers only the road length"
        ],
        "answer": 0,
        "why": "Different impacts and stakeholders need explicit comparison.",
        "concept": "geo.a.development.india.impacts-balance",
        "id": "geo.a.d4.india-rapid-impacts.c2"
      },
      {
        "prompt": "A treatment plant is built but not maintained. Why might river pollution persist?",
        "options": [
          "Operating performance matters as well as installed capacity",
          "Construction guarantees complete treatment forever",
          "All sewage becomes harmless automatically"
        ],
        "answer": 0,
        "why": "Delivery and operation are distinct; untreated or poorly treated waste can continue to enter water.",
        "concept": "geo.a.development.india.impacts-environment",
        "id": "geo.a.d4.india-rapid-impacts.c3"
      },
      {
        "prompt": "Which conclusion is proportionate to varied regional evidence?",
        "options": [
          "Rapid development can produce unequal gains and costs",
          "All households have the same outcome",
          "One national average proves every local effect"
        ],
        "answer": 0,
        "why": "Assess distribution, place and timescale; no single figure establishes every consequence.",
        "concept": "geo.a.development.india.impacts-distribution",
        "id": "geo.a.d4.india-rapid-impacts.c4"
      }
    ]
  }
];
