export const mumbaiManagementLessons=[
  {
    "id": "geography.a.cities.mumbai-services",
    "topicId": "geography.a.cities",
    "title": "Mumbai: housing, infrastructure and services",
    "refs": [
      "4.8a"
    ],
    "minutes": 30,
    "cards": [
      [
        "Demand is more than a headcount",
        "Rapid growth increases demand for homes, water, drainage, electricity, schools and health care. Supply can lag when land is expensive, tenure is insecure and networks take time to build. Provision varies within Mumbai: being near a pipe, road or clinic does not guarantee a safe connection, reliable supply or affordable access. Dense neighbourhoods also contain businesses and social networks; they are not simply empty sites awaiting improvement."
      ],
      [
        "Follow water through the whole system",
        "Compare drinking-water supply with wastewater removal. A working tap alone cannot make sanitation safe: toilets need water, cleaning, drainage and safe treatment or disposal. Blocked drains and heavy monsoon rain can worsen local flooding and contamination. Our loop isolates this pathway; its coloured tokens are symbolic, not a laboratory test or measured Mumbai flow. Improving one link helps, but a failure elsewhere can still limit the benefit."
      ],
      [
        "Judge quality as well as quantity",
        "Use several indicators: water reliability, toilet access, crowding, journey time and residents’ accounts. A new building count measures an output; safe, affordable occupancy is an outcome. Compare the same area and dates, including tenants and people without formal documents. Housing improvement can fail to improve daily life if maintenance costs rise or work becomes harder to reach. No single regional statistic describes every household."
      ]
    ],
    "cardViews": [
      "demand",
      "water",
      "access"
    ],
    "model": "city-mumbai-services",
    "tasks": [
      [
        "A nearby main pipe guarantees every home safe water.",
        [
          "No: connection, quality and reliability also matter",
          "Yes: distance is the only condition",
          "Yes: all households have identical access"
        ],
        0
      ],
      [
        "What must accompany a working community toilet?",
        [
          "Water, cleaning and safe waste removal",
          "Only an attractive exterior",
          "No maintenance after opening"
        ],
        0
      ],
      [
        "Which is a service outcome?",
        [
          "Residents can use safe sanitation reliably",
          "A tender is announced",
          "A design drawing is approved"
        ],
        0
      ],
      [
        "Which comparison best tests access?",
        [
          "Dated reliability data plus residents’ experiences",
          "One citywide total without a date",
          "Only the tallest nearby building"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "A clinic is nearby but fees prevent a household using it. Which gap remains?",
        "options": [
          "Affordability",
          "Its map location is unknown",
          "There is no demand"
        ],
        "answer": 0,
        "why": "Physical proximity does not establish affordable access.",
        "concept": "geo.a.cities.mumbai.services-access",
        "id": "geo.a.c5.mumbai-services.p1"
      },
      {
        "prompt": "Why can improving a tap leave sanitation problems unresolved?",
        "options": [
          "Waste removal and treatment may still fail",
          "Drains become unnecessary",
          "Supply and wastewater are identical"
        ],
        "answer": 0,
        "why": "Safe water and safe wastewater management are linked but distinct.",
        "concept": "geo.a.cities.mumbai.services-chain",
        "id": "geo.a.c5.mumbai-services.p2"
      },
      {
        "prompt": "Which evidence would improve a housing evaluation?",
        "options": [
          "Occupancy, costs and resident feedback after completion",
          "Only a project logo",
          "Only the number of floors"
        ],
        "answer": 0,
        "why": "Follow what changed for people after construction.",
        "concept": "geo.a.cities.mumbai.services-outcomes",
        "id": "geo.a.c5.mumbai-services.p3"
      }
    ],
    "check": [
      {
        "prompt": "New homes are built but some residents cannot pay maintenance fees. What follows?",
        "options": [
          "Construction output alone does not prove affordable access",
          "Every household benefits equally",
          "Services no longer matter"
        ],
        "answer": 0,
        "why": "Compare delivered buildings with usable, affordable housing outcomes.",
        "concept": "geo.a.cities.mumbai.services-outcomes",
        "id": "geo.a.c5.mumbai-services.c1"
      },
      {
        "prompt": "Two neighbourhoods have equal tap counts. Which could still differ?",
        "options": [
          "Water reliability and household access",
          "Nothing about service quality",
          "Only their names"
        ],
        "answer": 0,
        "why": "Counts do not establish reliability, quality or who can connect.",
        "concept": "geo.a.cities.mumbai.services-access",
        "id": "geo.a.c5.mumbai-services.c2"
      },
      {
        "prompt": "Which sequence supports safer sanitation?",
        "options": [
          "Use → cleaning → safe collection and treatment",
          "Use → untreated discharge beside homes",
          "Build → abandon maintenance"
        ],
        "answer": 0,
        "why": "The whole chain must work; construction is only one stage.",
        "concept": "geo.a.cities.mumbai.services-chain",
        "id": "geo.a.c5.mumbai-services.c3"
      },
      {
        "prompt": "Which claim needs more evidence?",
        "options": [
          "All Mumbai residents now have equal service quality",
          "Growth can increase demand for services",
          "Affordability can restrict access"
        ],
        "answer": 0,
        "why": "A universal outcome requires coverage and quality evidence across groups.",
        "concept": "geo.a.cities.mumbai.services-access",
        "id": "geo.a.c5.mumbai-services.c4"
      }
    ]
  },
  {
    "id": "geography.a.cities.mumbai-work-pollution",
    "topicId": "geography.a.cities",
    "title": "Mumbai: work and pollution",
    "refs": [
      "4.8a"
    ],
    "minutes": 30,
    "cards": [
      [
        "Work can exist without security",
        "Informal employment includes work outside formal employment arrangements and protections; it is not automatically illegal or the same as unemployment. Dharavi’s pottery, garments and recycling illustrate productive enterprise. Under-employment means people have work but insufficient hours or inadequate use of their capacity. A city can create wealth while some workers have unstable earnings, unsafe conditions or limited protection. These categories overlap but cannot be substituted for one another."
      ],
      [
        "Trace source, pathway and exposure",
        "Traffic exhaust, industrial activity and construction dust can affect air quality. Untreated sewage and poorly managed waste can pollute waterways. Recycling recovers resources, yet unsafe handling or burning can expose workers and neighbours to hazards. Pollution is not caused by one community or by migration alone: infrastructure, regulation, technology and consumption matter. Our moving particles explain pathways, not measured pollutant concentrations or equal exposure across Mumbai."
      ],
      [
        "Choose an intervention and test it",
        "Safer workspaces, skills, social protection and reliable transport can improve access to opportunity. Dust controls, cleaner transport and sewage treatment address different pollution sources. A road project does not by itself prove cleaner air: traffic volumes, construction and weather also matter. Use comparable monitoring locations, periods and pollutant units, alongside worker and resident accounts. Avoid treating a job count as proof of secure livelihoods or a recycling total as proof of safe conditions."
      ]
    ],
    "cardViews": [
      "work",
      "air",
      "water"
    ],
    "model": "city-mumbai-work-pollution",
    "tasks": [
      [
        "A garment worker has paid work without formal protections. This is…",
        [
          "Informal employment",
          "Automatically unemployment",
          "Proof of illegal activity"
        ],
        0
      ],
      [
        "A worker wants more paid hours but receives too few. This illustrates…",
        [
          "Under-employment",
          "No employment at all",
          "Guaranteed secure full-time work"
        ],
        0
      ],
      [
        "Which route explains an air-quality risk?",
        [
          "Dust source → airborne particles → exposure",
          "Sewage pipe → more exam results",
          "Higher buildings → no emissions"
        ],
        0
      ],
      [
        "Does recycling guarantee safe work?",
        [
          "No: handling and exposure still matter",
          "Yes: resource recovery removes every hazard",
          "Yes: earnings prove safety"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "Which statement recognises Dharavi’s economic role?",
        "options": [
          "Household enterprises produce goods and recover materials",
          "Every resident is unemployed",
          "Every business has identical working conditions"
        ],
        "answer": 0,
        "why": "Productive informal enterprise and insecure work can coexist.",
        "concept": "geo.a.cities.mumbai.work-types",
        "id": "geo.a.c5.mumbai-work-pollution.p1"
      },
      {
        "prompt": "Which intervention directly addresses untreated wastewater?",
        "options": [
          "Collection and treatment before safe discharge",
          "Only repainting buses",
          "Only changing school uniforms"
        ],
        "answer": 0,
        "why": "Match an intervention to its pollution pathway.",
        "concept": "geo.a.cities.mumbai.pollution-pathway",
        "id": "geo.a.c5.mumbai-work-pollution.p2"
      },
      {
        "prompt": "Why compare the same air-monitoring sites and seasons?",
        "options": [
          "Location and weather can affect measured concentrations",
          "All stations always have identical readings",
          "Units never matter"
        ],
        "answer": 0,
        "why": "A fair comparison controls important differences.",
        "concept": "geo.a.cities.mumbai.pollution-evidence",
        "id": "geo.a.c5.mumbai-work-pollution.p3"
      }
    ],
    "check": [
      {
        "prompt": "A worker has ten hours of paid work and wants thirty. What does this illustrate?",
        "options": [
          "Under-employment",
          "Unemployment because nobody pays them",
          "Proof that all work is informal"
        ],
        "answer": 0,
        "why": "Insufficient hours despite having work is under-employment; formal status is a separate question.",
        "concept": "geo.a.cities.mumbai.work-types",
        "id": "geo.a.c5.mumbai-work-pollution.c1"
      },
      {
        "prompt": "Which is a defensible description of informal employment?",
        "options": [
          "Work may lack formal protections without being inherently illegal",
          "It always means no work",
          "It guarantees high earnings"
        ],
        "answer": 0,
        "why": "Employment arrangements and legality are distinct.",
        "concept": "geo.a.cities.mumbai.work-types",
        "id": "geo.a.c5.mumbai-work-pollution.c2"
      },
      {
        "prompt": "What is needed before claiming a transport scheme reduced particulate pollution?",
        "options": [
          "Comparable pollutant measurements and consideration of other influences",
          "Only its opening announcement",
          "Only a new station photograph"
        ],
        "answer": 0,
        "why": "Monitoring and alternative explanations matter.",
        "concept": "geo.a.cities.mumbai.pollution-evidence",
        "id": "geo.a.c5.mumbai-work-pollution.c3"
      },
      {
        "prompt": "Recovering plastic reduces waste. Which question still matters?",
        "options": [
          "Are workers protected from hazardous handling?",
          "Can safety now be ignored?",
          "Does recovery prove everyone has secure work?"
        ],
        "answer": 0,
        "why": "Environmental recovery does not automatically ensure safe livelihoods.",
        "concept": "geo.a.cities.mumbai.pollution-pathway",
        "id": "geo.a.c5.mumbai-work-pollution.c4"
      }
    ]
  },
  {
    "id": "geography.a.cities.mumbai-management",
    "topicId": "geography.a.cities",
    "title": "Mumbai: community and citywide management",
    "refs": [
      "4.8b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Ask who decides",
        "Bottom-up approaches give residents a role in identifying needs, design or management. They can fit local routines and support accountability, but limited funds, unequal participation and maintenance capacity can constrain them. Mumbai’s Slum Sanitation Program combined community operation with public finance and networks. It is a partnership, not proof that community action works without government. A local committee also needs to represent people with less power."
      ],
      [
        "Match the scale of the challenge",
        "Top-down programmes can coordinate large networks, technical standards and investment across a city. They can also overlook livelihoods, impose relocation or distribute benefits unevenly when consultation and safeguards are weak. Dharavi redevelopment is a government-directed example involving private development. Compare its policy intentions with delivery evidence; an official plan is not a completed benefit. A large scheme can include participation, and a community project can depend on public infrastructure."
      ],
      [
        "Compare benefits, costs and maintenance",
        "Choose criteria before judging: reach, affordability, continuity of work, resident voice and long-term upkeep. The sanitation example shows how cleaning and user fees can support operation, while affordability and representation need scrutiny. Redevelopment can improve housing and services but location and eligibility affect who gains. A reasoned judgement may favour a combination: public networks and finance with meaningful local decisions, rather than assuming one approach always wins."
      ]
    ],
    "cardViews": [
      "community",
      "citywide",
      "partnership"
    ],
    "model": "city-mumbai-management",
    "tasks": [
      [
        "Residents choose operating hours and oversee upkeep. This is…",
        [
          "A bottom-up element",
          "No involvement in management",
          "Proof of full citywide coverage"
        ],
        0
      ],
      [
        "What is a top-down strength?",
        [
          "Coordinating large infrastructure networks",
          "Guaranteeing no displacement",
          "Always representing every resident"
        ],
        0
      ],
      [
        "Why is the sanitation programme a partnership?",
        [
          "Community management depends on public support and networks",
          "No government is involved",
          "No residents are involved"
        ],
        0
      ],
      [
        "Which is a balanced judgement?",
        [
          "Compare reach and resident voice against costs and risks",
          "Larger projects are always better",
          "Community projects have no limitations"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "A local committee excludes tenants from meetings. Which limitation appears?",
        "options": [
          "Unequal representation",
          "Automatic full participation",
          "No need for consultation"
        ],
        "answer": 0,
        "why": "A committee’s existence does not establish inclusive decision-making.",
        "concept": "geo.a.cities.mumbai.management-voice",
        "id": "geo.a.c5.mumbai-management.p1"
      },
      {
        "prompt": "Why might citywide government investment be necessary?",
        "options": [
          "Networks cross neighbourhood boundaries and need coordination",
          "Residents have no useful knowledge",
          "Maintenance is never needed"
        ],
        "answer": 0,
        "why": "Local action alone may not provide trunk sewers or other large systems.",
        "concept": "geo.a.cities.mumbai.management-scale",
        "id": "geo.a.c5.mumbai-management.p2"
      },
      {
        "prompt": "Which combination best addresses scale and local fit?",
        "options": [
          "Public network investment plus inclusive resident decisions",
          "Only a publicity campaign",
          "No maintenance funding"
        ],
        "answer": 0,
        "why": "Hybrid arrangements can combine capacities, but still need evaluation.",
        "concept": "geo.a.cities.mumbai.management-judgement",
        "id": "geo.a.c5.mumbai-management.p3"
      }
    ],
    "check": [
      {
        "prompt": "A city plans a trunk sewer across many districts. What is a likely top-down advantage?",
        "options": [
          "Coordinated funding and network design",
          "Guaranteed equal benefits without consultation",
          "No technical standards needed"
        ],
        "answer": 0,
        "why": "Citywide systems require coordination beyond one community.",
        "concept": "geo.a.cities.mumbai.management-scale",
        "id": "geo.a.c5.mumbai-management.c1"
      },
      {
        "prompt": "Which is a possible bottom-up limitation?",
        "options": [
          "Limited funds and unequal local influence",
          "Guaranteed unlimited funding",
          "No knowledge of local routines"
        ],
        "answer": 0,
        "why": "Local knowledge is valuable but finance and power can limit implementation.",
        "concept": "geo.a.cities.mumbai.management-voice",
        "id": "geo.a.c5.mumbai-management.c2"
      },
      {
        "prompt": "Does community management make public water and sewer networks unnecessary?",
        "options": [
          "No: local operation can depend on wider infrastructure",
          "Yes: a committee replaces all pipes",
          "Yes: maintenance eliminates wastewater"
        ],
        "answer": 0,
        "why": "The Mumbai sanitation case combines local roles and public systems.",
        "concept": "geo.a.cities.mumbai.management-scale",
        "id": "geo.a.c5.mumbai-management.c3"
      },
      {
        "prompt": "Which conclusion best evaluates both approaches?",
        "options": [
          "Success depends on reach, affordability, participation and upkeep",
          "Bottom-up always succeeds",
          "Top-down never provides benefits"
        ],
        "answer": 0,
        "why": "Criteria and evidence support a qualified comparison.",
        "concept": "geo.a.cities.mumbai.management-judgement",
        "id": "geo.a.c5.mumbai-management.c4"
      }
    ]
  },
  {
    "id": "geography.a.cities.mumbai-policy",
    "topicId": "geography.a.cities",
    "title": "Mumbai: policy promises and outcomes",
    "refs": [
      "4.8c"
    ],
    "minutes": 30,
    "cards": [
      [
        "Government changes the conditions",
        "Governments influence land use, housing eligibility, infrastructure finance and environmental standards. These choices can improve social conditions, economic access and environmental quality, but outcomes depend on implementation and who qualifies. Dharavi’s official entitlement table lists different residential categories, areas and locations. Our comparison uses that table as policy evidence checked on 26 October 2026, not a personalised eligibility decision or proof that every listed home has been delivered."
      ],
      [
        "Read an entitlement carefully",
        "The published table lists 350 square feet within Dharavi for the on-or-before 1 January 2000 residential category, and 300 square feet within the MMR for the later category through 1 January 2011. Other categories include hire-purchase provisions. These are conditional policy categories, not a universal promise of free identical homes. Documentation, assessment, costs, location and implementation must be checked. A change in address can alter access to work and community networks."
      ],
      [
        "Separate a target from a result",
        "A September 2006 sanitation report records an original target of about one million residents and estimated reach of about 400,000 during 1996–2005. That is roughly 40% of the original target, not 40% of all Mumbai residents. Reach is not the same as proven health improvement. Judge housing and sanitation with follow-up evidence on safety, affordability, livelihoods, treatment and inclusion. A project announcement or survey count cannot establish every social, economic and environmental outcome."
      ]
    ],
    "cardViews": [
      "entitlement",
      "relocation",
      "reach"
    ],
    "model": "city-mumbai-policy",
    "tasks": [
      [
        "The entitlement table is evidence of…",
        [
          "Published policy categories",
          "All housing already occupied",
          "Every household’s final decision"
        ],
        0
      ],
      [
        "A new home is farther from a workshop. What should be checked?",
        [
          "Travel costs and continuity of livelihoods",
          "Only the paint colour",
          "Nothing beyond floor area"
        ],
        0
      ],
      [
        "400,000 estimated reach out of a 1,000,000 target is…",
        [
          "About 40% of the original target",
          "40% of all Mumbai residents",
          "Proof of 40% less disease"
        ],
        0
      ],
      [
        "Which supports an outcome judgement?",
        [
          "Dated delivery and resident follow-up evidence",
          "Only a planned entitlement",
          "Only the project name"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "Which document best establishes what government proposes to provide?",
        "options": [
          "The dated official entitlement table",
          "An unlabelled artist’s impression",
          "A guessed household decision"
        ],
        "answer": 0,
        "why": "Policy evidence sets conditions; delivery must be checked separately.",
        "concept": "geo.a.cities.mumbai.policy-evidence",
        "id": "geo.a.c5.mumbai-policy.p1"
      },
      {
        "prompt": "Which social and economic trade-off could relocation create?",
        "options": [
          "Better facilities but higher costs of reaching existing work",
          "Every household loses all work automatically",
          "Only environmental effects are possible"
        ],
        "answer": 0,
        "why": "Evaluate facilities and livelihoods together; effects vary.",
        "concept": "geo.a.cities.mumbai.policy-tradeoffs",
        "id": "geo.a.c5.mumbai-policy.p2"
      },
      {
        "prompt": "Using the source figures, what share of the original sanitation target was estimated reached?",
        "options": [
          "About 40%",
          "About 4%",
          "About 250%"
        ],
        "answer": 0,
        "why": "400,000 ÷ 1,000,000 × 100 =40%; the denominator is the target.",
        "concept": "geo.a.cities.mumbai.policy-target",
        "policyEvidence": "reach",
        "id": "geo.a.c5.mumbai-policy.p3"
      }
    ],
    "check": [
      {
        "prompt": "Which category is listed as 350 square feet within Dharavi?",
        "options": [
          "Residential on or before 1 January 2000",
          "Every post-2011 upper-floor household",
          "Every MMR resident regardless of documents"
        ],
        "answer": 0,
        "why": "Read the dated table’s first residential category, not a universal entitlement.",
        "concept": "geo.a.cities.mumbai.policy-evidence",
        "policyEvidence": "entitlement",
        "id": "geo.a.c5.mumbai-policy.c1"
      },
      {
        "prompt": "About 400,000 people were estimated reached against a one-million target. What is the approximate shortfall?",
        "options": [
          "600,000 people",
          "400 people",
          "No shortfall"
        ],
        "answer": 0,
        "why": "The difference is 1,000,000 −400,000=600,000; reach is estimated and historical.",
        "concept": "geo.a.cities.mumbai.policy-target",
        "policyEvidence": "reach",
        "id": "geo.a.c5.mumbai-policy.c2"
      },
      {
        "prompt": "Does increased toilet access by itself prove a measured fall in disease?",
        "options": [
          "No: health outcomes need separate evidence",
          "Yes: reach and disease are the same measure",
          "Yes: every other cause is excluded"
        ],
        "answer": 0,
        "why": "A plausible benefit is not automatically a measured causal outcome.",
        "concept": "geo.a.cities.mumbai.policy-evidence",
        "id": "geo.a.c5.mumbai-policy.c3"
      },
      {
        "prompt": "Which evaluation covers social, economic and environmental outcomes?",
        "options": [
          "Safety and inclusion, work access, and safe waste treatment",
          "Only the number of planned towers",
          "Only the project budget"
        ],
        "answer": 0,
        "why": "Several outcome measures are needed to judge quality of life.",
        "concept": "geo.a.cities.mumbai.policy-tradeoffs",
        "id": "geo.a.c5.mumbai-policy.c4"
      }
    ]
  },
  {
    "id": "geography.a.cities.mumbai-spatial-evidence",
    "topicId": "geography.a.cities",
    "title": "Mumbai: investigate spatial growth",
    "refs": [
      "4.integrated.6"
    ],
    "minutes": 30,
    "cards": [
      [
        "Compare the same ground",
        "These maps use real European Commission GHSL satellite-derived built-up surface estimates for the 1975 and 2020 epochs. Both show the same 60 by 60 kilometre window on the same one-kilometre equal-area grid and colour scale. An epoch is an estimated reference period, not the acquisition date of one photograph. Each cell records built-up surface area; zero built-up surface can include water or open land. The window is not the Greater Mumbai administrative boundary."
      ],
      [
        "Describe a pattern, then support it",
        "Switch between the two epochs, then inspect the side-by-side map. Use fixed reference points to keep your place. Compare a particular area before making a wider claim: new built-up surface may occur at an edge, between existing patches or within a previously developed cell. The maps show estimated surface change, not when each building was constructed. At this coarse scale they cannot identify individual houses, prove informal status or locate every urban function. The marked cells A and B provide exact source values: distinguish absolute increase from percentage growth."
      ],
      [
        "Keep the conclusion within the evidence",
        "GHSL combines Landsat and Sentinel-2 evidence with modelling; classification and temporal estimation create uncertainty. The 2020 layer is an epoch estimate, not a current survey or a 2020 photograph. A larger built-up surface total does not directly measure population, migration, wealth or why development occurred. Compare dated planning and census evidence before explaining causes. Use the comparison to form a cautious conclusion and identify the further evidence you need."
      ]
    ],
    "cardViews": [
      "early",
      "late",
      "compare"
    ],
    "model": "city-mumbai-spatial-evidence",
    "tasks": [
      [
        "What must stay the same when comparing the maps?",
        [
          "Extent, grid and colour scale",
          "Only the title font",
          "The amount of urban land"
        ],
        0
      ],
      [
        "What does a cell value measure?",
        [
          "Estimated built-up surface in square metres",
          "Number of residents",
          "Number of migrants"
        ],
        0
      ],
      [
        "Can a zero cell be labelled definitely forest?",
        [
          "No: it can include water or other unbuilt cover",
          "Yes: all zero values mean forest",
          "Yes: zero proves legal protection"
        ],
        0
      ],
      [
        "Which conclusion goes beyond these layers?",
        [
          "The exact number of migrants in every neighbourhood",
          "Built-up surface patterns differ between epochs",
          "The data use a common grid"
        ],
        0
      ]
    ],
    "practice": [
      {
        "prompt": "Why use one colour key for both epochs?",
        "options": [
          "The same shade must represent the same value range",
          "To make every cell equal",
          "To hide uncertainty"
        ],
        "answer": 0,
        "why": "Different colour scales could create a false visual change.",
        "concept": "geo.a.cities.mumbai.spatial-method",
        "id": "geo.a.c5.mumbai-spatial-evidence.p1"
      },
      {
        "prompt": "A cell gains estimated built-up surface. What is directly supported?",
        "options": [
          "Its estimated building footprint area increased",
          "Its population doubled",
          "Every building is informal"
        ],
        "answer": 0,
        "why": "Built-up surface is not a population or tenure measure.",
        "concept": "geo.a.cities.mumbai.spatial-limits",
        "id": "geo.a.c5.mumbai-spatial-evidence.p2"
      },
      {
        "prompt": "Which follow-up helps explain a mapped change?",
        "options": [
          "Dated planning, transport and population evidence",
          "An undated population guess",
          "Treating every model epoch as a photograph"
        ],
        "answer": 0,
        "why": "Mapped patterns need additional evidence before attributing causes.",
        "concept": "geo.a.cities.mumbai.spatial-inference",
        "id": "geo.a.c5.mumbai-spatial-evidence.p3"
      }
    ],
    "check": [
      {
        "prompt": "Which selected cell has the larger absolute increase in built-up surface?",
        "options": [
          "Cell A",
          "Cell B",
          "Both increases are equal"
        ],
        "answer": 0,
        "why": "A gains 55,174 m²; B gains 34,450 m². Compare absolute differences, not proportional growth.",
        "concept": "geo.a.cities.mumbai.spatial-method",
        "policyEvidence": "sample",
        "id": "geo.a.c5.mumbai-spatial-evidence.c1"
      },
      {
        "prompt": "What does the 2020 GHSL epoch establish?",
        "options": [
          "A satellite-derived model estimate for that reference period",
          "An exact photograph acquired on 1 January 2020",
          "A current population census"
        ],
        "answer": 0,
        "why": "An epoch is not one acquisition date or current census.",
        "concept": "geo.a.cities.mumbai.spatial-limits",
        "id": "geo.a.c5.mumbai-spatial-evidence.c2"
      },
      {
        "prompt": "Which claim cannot be read directly from these maps?",
        "options": [
          "How many households have insecure employment",
          "Where estimated built-up surface occurs",
          "Differences in mapped surface patterns"
        ],
        "answer": 0,
        "why": "Livelihood security requires separate social evidence.",
        "concept": "geo.a.cities.mumbai.spatial-inference",
        "policyEvidence": "late",
        "id": "geo.a.c5.mumbai-spatial-evidence.c3"
      },
      {
        "prompt": "Why does the map window total differ in meaning from a municipal statistic?",
        "options": [
          "The rectangular study window is not the municipal boundary",
          "Both necessarily describe identical residents",
          "Every rectangle is an administrative boundary"
        ],
        "answer": 0,
        "why": "Geographical boundaries must match before comparing totals.",
        "concept": "geo.a.cities.mumbai.spatial-method",
        "id": "geo.a.c5.mumbai-spatial-evidence.c4"
      }
    ]
  }
];
