export const energy03Lessons=[
  {
    "id": "geography.a.energy.stakeholders",
    "topicId": "geography.a.energy",
    "resourceOption": "energy",
    "title": "Energy: whose priorities matter?",
    "refs": [
      "6.6a"
    ],
    "minutes": 30,
    "cards": [
      [
        "Interests shape attitudes",
        "People can value energy for warmth, transport, employment and affordable services while disagreeing about how it should be produced and consumed. A nearby resident, energy worker, business, environmental organisation and government may experience different costs and benefits. Members of the same group can also disagree: do not assume every resident or organisation holds one fixed view."
      ],
      [
        "Location and time change the question",
        "Someone may support renewable energy nationally yet worry about the landscape, noise, cost or distribution of benefits from a particular proposal. DESNZ’s Spring 2026 survey reports that 49% expected the UK’s move to renewables to raise bills over 1–2 years; 47% expected lower bills over 10 or more years. These are different response categories and horizons, not complementary shares or measured future prices."
      ],
      [
        "Ask for reasons and evidence",
        "Governments weigh security, affordability, emissions and wider economic effects. Companies consider investment, regulation and revenue; campaign organisations may prioritise climate, wildlife or community rights. Individuals balance comfort, cost and values within their circumstances. Test claims using evidence, who is affected and what alternatives exist. Meaningful consultation can improve a decision without guaranteeing agreement."
      ]
    ],
    "cardViews": [
      "roles",
      "survey",
      "discussion"
    ],
    "model": "dev-energy3-stakeholders",
    "tasks": [
      [
        "Two residents disagree about a nearby wind proposal. This shows…",
        [
          "People within one stakeholder group can hold different views",
          "Every resident has an identical opinion",
          "Only companies can have opinions"
        ],
        0
      ],
      [
        "A person supports national renewable investment but questions one site. Their position is…",
        [
          "Possible: local costs and national benefits can differ",
          "Always logically impossible",
          "Proof that all renewables are harmful"
        ],
        0
      ],
      [
        "What does the Spring 2026 survey measure?",
        [
          "Reported expectations with specified time horizons",
          "Actual energy bills ten years later",
          "Support for every local project"
        ],
        0
      ],
      [
        "What makes consultation useful?",
        [
          "Accessible evidence, different voices and accountable reasoning",
          "Assuming everyone already agrees",
          "Counting only the most powerful speaker"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy03.stakeholders.p1",
        "prompt": "An energy worker may support a project because…",
        "options": [
          "Employment and livelihoods matter to them",
          "Every worker has the same view",
          "Only landscape appearance matters"
        ],
        "answer": 0,
        "why": "Explain a plausible interest without stereotyping the group.",
        "concept": "geo.a.energy03.stakeholder-interests"
      },
      {
        "id": "geo.a.energy03.stakeholders.p2",
        "prompt": "Read the survey. The reported short-term bill-increase expectation is…",
        "options": [
          "49%",
          "47%",
          "96%"
        ],
        "answer": 0,
        "why": "The 49% relates specifically to 1–2 years.",
        "concept": "geo.a.energy03.attitude-evidence",
        "energy03Evidence": "attitudes"
      },
      {
        "id": "geo.a.energy03.stakeholders.p3",
        "prompt": "Why might low-income households evaluate a fuel change differently?",
        "options": [
          "Upfront costs and affordable warmth affect feasible choices",
          "They cannot have environmental views",
          "All households have equal resources"
        ],
        "answer": 0,
        "why": "Resources and circumstances shape the options people can use.",
        "concept": "geo.a.energy03.stakeholder-interests"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy03.stakeholders.c1",
        "prompt": "Which statement avoids stereotyping?",
        "options": [
          "A government balances several interests; its decisions can be contested",
          "Every business opposes all renewables",
          "All local residents support every project"
        ],
        "answer": 0,
        "why": "Stakeholder categories contain varied priorities and views.",
        "concept": "geo.a.energy03.stakeholder-interests"
      },
      {
        "id": "geo.a.energy03.stakeholders.c2",
        "prompt": "Does the survey prove bills will fall after ten years?",
        "options": [
          "No: it measures expectations, not future outcomes",
          "Yes: opinions are guaranteed forecasts",
          "Yes: a percentage is a measured future tariff"
        ],
        "answer": 0,
        "why": "Keep survey evidence separate from observed prices.",
        "concept": "geo.a.energy03.attitude-evidence",
        "energy03Evidence": "attitudes"
      },
      {
        "id": "geo.a.energy03.stakeholders.c3",
        "prompt": "A national benefit and a local cost should be…",
        "options": [
          "Considered together, including who gains and who pays",
          "Assumed to affect everyone identically",
          "Replaced by a single opinion with no evidence"
        ],
        "answer": 0,
        "why": "Scale and distribution matter in energy decisions.",
        "concept": "geo.a.energy03.stakeholder-scale"
      },
      {
        "id": "geo.a.energy03.stakeholders.c4",
        "prompt": "Which process best supports a defensible decision?",
        "options": [
          "Evidence, meaningful participation and reasons for the choice",
          "Only the loudest viewpoint",
          "Assuming discussion removes every tradeoff"
        ],
        "answer": 0,
        "why": "Consultation informs judgement without guaranteeing consensus.",
        "concept": "geo.a.energy03.stakeholder-scale"
      }
    ]
  },
  {
    "id": "geography.a.energy.sustainable-use",
    "topicId": "geography.a.energy",
    "resourceOption": "energy",
    "title": "Why energy needs sustainable management",
    "refs": [
      "6.7a"
    ],
    "minutes": 30,
    "cards": [
      [
        "Meet needs now and later",
        "Sustainable management considers present energy services alongside future resources, climate, ecosystems and livelihoods. Coal, oil, gas and uranium are finite on human timescales. Extracting less or using energy more efficiently can reduce pressure, but does not make geological stocks renewable. A transition also needs investment, reliable services and support for people whose jobs or costs change."
      ],
      [
        "Renewable does not mean unlimited",
        "Wind and sunlight are replenished flows, but development still uses materials, land and infrastructure. Water availability and habitats constrain HEP; biomass harvest must allow regrowth and ecosystem recovery. Managing renewable resources therefore includes siting, maintenance, biodiversity, waste and fair access, not merely installing more devices. Environmental protection and useful energy services must be considered together."
      ],
      [
        "Manage at connected scales",
        "Household efficiency, local transport and community projects interact with national grids, standards and investment. International trade and cooperation affect finance, supply chains and climate outcomes. In an invented example, 100 units of fuel use become 75 for the same service: a 25-unit saving. Real results depend on behaviour, conditions and costs; forcing people to live without adequate warmth is not the same as efficient service."
      ]
    ],
    "cardViews": [
      "finite",
      "renewal",
      "efficiency"
    ],
    "model": "dev-energy3-sustainable-use",
    "tasks": [
      [
        "Extracting 20 units from a finite stock of 100, without replacement, leaves…",
        [
          "80 units",
          "120 units",
          "A renewable fuel"
        ],
        0
      ],
      [
        "Biomass harvest exceeds regrowth. The stock…",
        [
          "Declines despite potential renewal",
          "Must remain unlimited",
          "Becomes uranium"
        ],
        0
      ],
      [
        "The same service uses 100 units before and 75 after an upgrade. The saving is…",
        [
          "25 units",
          "75 additional units",
          "175 units"
        ],
        0
      ],
      [
        "Why include international cooperation?",
        [
          "Climate, trade, finance and supply chains cross borders",
          "National borders stop all emissions",
          "Only households can influence energy"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy03.sustainable-use.p1",
        "prompt": "Why manage a renewable wind resource carefully?",
        "options": [
          "Materials, ecosystems, siting and access still matter",
          "Wind uses no equipment",
          "Renewable means no environmental effects"
        ],
        "answer": 0,
        "why": "Replenishment differs from having no development impacts.",
        "concept": "geo.a.energy03.sustainable-renewables"
      },
      {
        "id": "geo.a.energy03.sustainable-use.p2",
        "prompt": "Which change preserves an adequate service while reducing demand?",
        "options": [
          "Better insulation at a suitable comfort level",
          "Leaving vulnerable people without warmth",
          "Assuming every saving is free"
        ],
        "answer": 0,
        "why": "Efficiency concerns useful services, not deprivation.",
        "concept": "geo.a.energy03.service-efficiency"
      },
      {
        "id": "geo.a.energy03.sustainable-use.p3",
        "prompt": "Using less finite fuel can…",
        "options": [
          "Slow depletion without replenishing its stock",
          "Make gas renewable immediately",
          "Eliminate all transition costs"
        ],
        "answer": 0,
        "why": "Demand reduction changes extraction pressure, not geological formation.",
        "concept": "geo.a.energy03.finite-management"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy03.sustainable-use.c1",
        "prompt": "A finite store begins at 80 and 15 is extracted with no replacement. It ends at…",
        "options": [
          "65 units",
          "95 units",
          "80 renewable units"
        ],
        "answer": 0,
        "why": "80−15=65.",
        "concept": "geo.a.energy03.finite-management"
      },
      {
        "id": "geo.a.energy03.sustainable-use.c2",
        "prompt": "A solar project still needs sustainable management because…",
        "options": [
          "Materials, land, grid and end-of-life impacts remain",
          "Sunlight is mined like coal",
          "Every panel has zero lifecycle effects"
        ],
        "answer": 0,
        "why": "A renewable flow can require responsible infrastructure choices.",
        "concept": "geo.a.energy03.sustainable-renewables"
      },
      {
        "id": "geo.a.energy03.sustainable-use.c3",
        "prompt": "A fresh upgrade reduces use from 120 to 90 for the same service. The saving is…",
        "options": [
          "30 units, or 25% of the original use",
          "90 units, or 75% saved",
          "210 units"
        ],
        "answer": 0,
        "why": "120−90=30;30/120=25%.",
        "concept": "geo.a.energy03.service-efficiency"
      },
      {
        "id": "geo.a.energy03.sustainable-use.c4",
        "prompt": "Which approach links management scales?",
        "options": [
          "Local efficiency and access alongside national systems and international cooperation",
          "One household acting in complete isolation",
          "Only importing fuel without considering impacts"
        ],
        "answer": 0,
        "why": "Interacting scales affect energy security and sustainability.",
        "concept": "geo.a.energy03.management-scales"
      }
    ]
  },
  {
    "id": "geography.a.energy.management-views",
    "topicId": "geography.a.energy",
    "resourceOption": "energy",
    "title": "Choosing sustainable energy policies",
    "refs": [
      "6.7b"
    ],
    "minutes": 30,
    "cards": [
      [
        "Households have different starting points",
        "Individuals may support efficiency to reduce bills, prefer public transport, invest in rooftop solar or worry about upfront cost and disruption. Renters may lack control over insulation or heating equipment. Information can help, but finance, landlord decisions, local transport and suitable buildings affect whether a choice is practical. A view is better understood through its reasons and constraints."
      ],
      [
        "Organisations weigh incentives and responsibilities",
        "An employer might favour efficient equipment to lower operating costs but hesitate over initial investment or downtime. A community group could favour shared local benefits while questioning a project’s site; an environmental organisation might emphasise emissions and biodiversity. These are plausible positions, not fixed views of every organisation. Look for evidence about costs, effects and who can participate."
      ],
      [
        "Governments combine tools and justify tradeoffs",
        "Governments can use standards, infrastructure investment, information, financial support and price signals. Each creates benefits and costs for different groups. Long-term climate and security goals may need short-term spending and help for affected households or workers. National choices interact with international cooperation and markets. Compare options against clear criteria and evidence; no single intervention is automatically fair, affordable and sufficient everywhere."
      ]
    ],
    "cardViews": [
      "household",
      "organisation",
      "government"
    ],
    "model": "dev-energy3-management-views",
    "tasks": [
      [
        "A renter favours insulation but cannot approve building work. The key issue is…",
        [
          "Control over the property and access to support",
          "Lack of any possible environmental concern",
          "All renters having identical views"
        ],
        0
      ],
      [
        "Why might a firm delay an efficient-machine upgrade?",
        [
          "Upfront cost or downtime despite future savings",
          "Efficiency always makes costs higher forever",
          "Firms never consider revenue"
        ],
        0
      ],
      [
        "A government combines standards and targeted support. Why?",
        [
          "To improve performance while addressing unequal ability to pay",
          "To guarantee no tradeoff exists",
          "To remove the need for evidence"
        ],
        0
      ],
      [
        "What makes a policy comparison fair?",
        [
          "Defined criteria, affected groups, costs and credible outcomes",
          "One preferred policy declared universally best",
          "Only the biggest advertised percentage"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy03.management-views.p1",
        "prompt": "Which policy can help a household facing an upfront-cost barrier?",
        "options": [
          "Targeted finance or support with suitable safeguards",
          "Only telling them to buy equipment they cannot afford",
          "Ignoring their building conditions"
        ],
        "answer": 0,
        "why": "Information and affordability are different constraints.",
        "concept": "geo.a.energy03.policy-access"
      },
      {
        "id": "geo.a.energy03.management-views.p2",
        "prompt": "A community organisation may reasonably ask…",
        "options": [
          "Who gets benefits, who bears impacts and how decisions are made",
          "That every member must share one opinion",
          "That no monitoring ever takes place"
        ],
        "answer": 0,
        "why": "Participation and distribution shape views.",
        "concept": "geo.a.energy03.management-views"
      },
      {
        "id": "geo.a.energy03.management-views.p3",
        "prompt": "A government should judge an intervention using…",
        "options": [
          "Delivery, outcomes, costs and distribution",
          "Only its announcement date",
          "Only whether one group likes it"
        ],
        "answer": 0,
        "why": "A policy promise is not proof of implementation.",
        "concept": "geo.a.energy03.policy-evaluation"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy03.management-views.c1",
        "prompt": "A household supports efficient heating but cannot fund it. This is…",
        "options": [
          "A practical constraint, not proof of opposition to sustainability",
          "Proof all households reject efficiency",
          "A reason to ignore affordability"
        ],
        "answer": 0,
        "why": "Attitude and ability to act are distinct.",
        "concept": "geo.a.energy03.policy-access"
      },
      {
        "id": "geo.a.energy03.management-views.c2",
        "prompt": "Which organisational view is most carefully described?",
        "options": [
          "A business may value savings but need finance for an upgrade",
          "All businesses reject every environmental measure",
          "Every charity supports every site"
        ],
        "answer": 0,
        "why": "Use conditional explanations rather than stereotypes.",
        "concept": "geo.a.energy03.management-views"
      },
      {
        "id": "geo.a.energy03.management-views.c3",
        "prompt": "How can a national policy affect different groups differently?",
        "options": [
          "Costs, jobs, access and benefits are distributed unevenly",
          "Every person must experience the same result",
          "National decisions have no local effects"
        ],
        "answer": 0,
        "why": "Assess distribution as well as aggregate benefit.",
        "concept": "geo.a.energy03.policy-evaluation"
      },
      {
        "id": "geo.a.energy03.management-views.c4",
        "prompt": "A defensible comparison of two management options should…",
        "options": [
          "Use evidence and explain tradeoffs against stated criteria",
          "Assume the cheapest headline proves all outcomes",
          "Treat consultation as guaranteed agreement"
        ],
        "answer": 0,
        "why": "Judgement requires reasoning, evidence and limitations.",
        "concept": "geo.a.energy03.policy-evaluation"
      }
    ]
  },
  {
    "id": "geography.a.energy.developed-case",
    "topicId": "geography.a.energy",
    "resourceOption": "energy",
    "title": "Germany: managing an energy transition",
    "refs": [
      "6.7c"
    ],
    "minutes": 30,
    "cards": [
      [
        "A developed-country attempt",
        "Germany’s Energiewende combines a shift towards renewables with changes in buildings, industry, transport and energy networks. The IEA’s April 2025 review describes an approach involving renewable expansion, more efficient buildings, cleaner heating and better system integration. Energy security, affordability and emissions all matter; a programme’s aims are not proof that every household or sector has already benefited."
      ],
      [
        "Read the sector evidence",
        "UBA’s webpage updated 19 October 2026 reports Germany’s 2025 renewable shares as 55.1% of gross electricity consumption, 19.2% for heating/cooling, 8.0% for transport and 23.9% of gross final energy under the RED definition. These percentages use different denominators: do not add them or call the electricity figure the share of all energy. Progress in electricity coexists with much smaller renewable shares in heat and transport."
      ],
      [
        "Connect actions to remaining challenges",
        "Efficiency upgrades can reduce energy needed for a suitable level of warmth; cleaner heating and transport change sources. Grid connections, storage and flexible demand help integrate variable electricity supply. The 2025 IEA review stresses implementation, stable investment and distribution of costs. Judge actual service, reliability, affordability, emissions and local impacts alongside sector data; one percentage cannot demonstrate complete sustainability."
      ]
    ],
    "cardViews": [
      "map",
      "shares",
      "retrofit"
    ],
    "model": "dev-energy3-developed-case",
    "tasks": [
      [
        "Germany’s approach concerns…",
        [
          "Energy services across electricity, buildings, industry and transport",
          "Only a single wind turbine",
          "Only installing capacity without connections"
        ],
        0
      ],
      [
        "Read the 2025 evidence. The 55.1% figure refers to…",
        [
          "Gross electricity consumption",
          "All national energy consumption",
          "Households with solar panels"
        ],
        0
      ],
      [
        "An efficiency retrofit can help by…",
        [
          "Reducing energy needed for an adequate service",
          "Creating unlimited new fossil fuel",
          "Guaranteeing every household can afford installation"
        ],
        0
      ],
      [
        "Why invest in grids, storage and flexibility?",
        [
          "To help match variable supply and useful demand",
          "Because storage creates energy from nothing",
          "To remove all costs and local impacts"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy03.developed-case.p1",
        "prompt": "Which source is used for the dated sector shares?",
        "options": [
          "UBA / AGEE-Stat, updated October 2026",
          "An invented household survey",
          "A count of Indian power stations"
        ],
        "answer": 0,
        "why": "Use the stated source, year and metric.",
        "concept": "geo.a.energy03.germany-evidence",
        "energy03Evidence": "germany"
      },
      {
        "id": "geo.a.energy03.developed-case.p2",
        "prompt": "Why evaluate heat and transport as well as electricity?",
        "options": [
          "They are important energy uses with different progress",
          "They never use energy",
          "Electricity alone describes every sector"
        ],
        "answer": 0,
        "why": "Energy transition spans several sectors.",
        "concept": "geo.a.energy03.germany-management"
      },
      {
        "id": "geo.a.energy03.developed-case.p3",
        "prompt": "An announced policy differs from an outcome because…",
        "options": [
          "Implementation and measured results still need evidence",
          "An announcement guarantees affordability",
          "All plans are identical to observations"
        ],
        "answer": 0,
        "why": "Distinguish intention, delivery and effect.",
        "concept": "geo.a.energy03.case-evaluation"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy03.developed-case.c1",
        "prompt": "In the supplied evidence, the renewable share of gross final energy is…",
        "options": [
          "23.9%",
          "55.1%",
          "102.2%"
        ],
        "answer": 0,
        "why": "Read the appropriate denominator, not a sum of unlike sectors.",
        "concept": "geo.a.energy03.germany-evidence",
        "energy03Evidence": "germany"
      },
      {
        "id": "geo.a.energy03.developed-case.c2",
        "prompt": "The electricity and heating/cooling shares differ by…",
        "options": [
          "35.9 percentage points",
          "35.9% of Germany’s total energy",
          "74.3 percentage points"
        ],
        "answer": 0,
        "why": "55.1−19.2=35.9 percentage points between named sector shares.",
        "concept": "geo.a.energy03.germany-evidence",
        "energy03Evidence": "germany"
      },
      {
        "id": "geo.a.energy03.developed-case.c3",
        "prompt": "Which combination best represents the management approach?",
        "options": [
          "Renewables, efficient services and integrated networks",
          "Only fuel extraction forever",
          "Only a national target with no investment"
        ],
        "answer": 0,
        "why": "Combine supply, demand and system changes.",
        "concept": "geo.a.energy03.germany-management"
      },
      {
        "id": "geo.a.energy03.developed-case.c4",
        "prompt": "Do these sector shares prove the transition is complete and equally affordable?",
        "options": [
          "No: reliability, costs, distribution and wider impacts also need evidence",
          "Yes: every household is represented by one percentage",
          "Yes: all percentages have the same denominator"
        ],
        "answer": 0,
        "why": "A useful indicator is not a complete sustainability audit.",
        "concept": "geo.a.energy03.case-evaluation"
      }
    ],
    "caseStudy": "germany"
  },
  {
    "id": "geography.a.energy.emerging-case",
    "topicId": "geography.a.energy",
    "resourceOption": "energy",
    "title": "India: expanding cleaner energy services",
    "refs": [
      "6.7c"
    ],
    "minutes": 30,
    "cards": [
      [
        "An emerging-country attempt",
        "India is expanding renewable supply and electricity infrastructure while meeting growing energy-service needs. A June 2025 government snapshot reports 242.78 GW non-fossil installed electricity capacity out of 484.82 GW total, or a reported 50.08%. Non-fossil includes nuclear as well as renewables and large hydro. This is installed capacity, not the share of electricity actually generated or the share of all energy use."
      ],
      [
        "A national programme can reach rooftops",
        "PM Surya Ghar supports residential rooftop solar through an application and financial-support process linked to grid-connected homes. A government release on 25 March 2026 reports 9,566.89 MW rooftop capacity added by 20 March under the scheme since February 2024. It illustrates an attempt to expand cleaner supply and household participation. Capacity added is not the number of homes, annual electricity or proof of identical bill savings; projected jobs and emissions reductions are not observed results."
      ],
      [
        "Evaluate useful services and inclusion",
        "Solar installations need suitable roofs, finance, connections, safe operation and maintenance. National expansion also needs transmission, storage or flexible demand and effective implementation. Judge delivered electricity, reliability, affordability, access, land/ecological effects and which groups benefit. Germany’s consumption shares and India’s installed-capacity share use different dates and metrics; they cannot rank which country is more sustainable."
      ]
    ],
    "cardViews": [
      "capacity",
      "rooftop",
      "deliver"
    ],
    "model": "dev-energy3-emerging-case",
    "tasks": [
      [
        "India’s reported 50.08% snapshot measures…",
        [
          "Non-fossil share of installed electricity capacity",
          "Renewable share of every unit of energy consumed",
          "Households receiving free electricity"
        ],
        0
      ],
      [
        "Why is non-fossil not identical to renewable?",
        [
          "The non-fossil category also includes nuclear",
          "All coal plants are renewable",
          "Every resource is renewable"
        ],
        0
      ],
      [
        "A rooftop programme becomes a useful service when…",
        [
          "Installation, connection, maintenance and suitable use work together",
          "An application is merely announced",
          "Every roof is assumed identical"
        ],
        0
      ],
      [
        "Which comparison is justified?",
        [
          "Evaluate each country’s attempt with matching definitions and wider evidence",
          "Rank countries directly from unlike percentages",
          "Assume installed capacity guarantees annual output"
        ],
        0
      ]
    ],
    "practice": [
      {
        "id": "geo.a.energy03.emerging-case.p1",
        "prompt": "In the June 2025 snapshot, nuclear capacity is…",
        "options": [
          "8.78 GW",
          "234 GWh",
          "484.82%"
        ],
        "answer": 0,
        "why": "Read the capacity unit and category.",
        "concept": "geo.a.energy03.india-capacity",
        "energy03Evidence": "india"
      },
      {
        "id": "geo.a.energy03.emerging-case.p2",
        "prompt": "What does the rooftop figure report?",
        "options": [
          "Capacity added under the scheme by a stated date",
          "Observed annual generation in MW",
          "A count of jobs already created"
        ],
        "answer": 0,
        "why": "Capacity, energy, households and employment are distinct.",
        "concept": "geo.a.energy03.india-rooftop",
        "energy03Evidence": "rooftop"
      },
      {
        "id": "geo.a.energy03.emerging-case.p3",
        "prompt": "Why include maintenance and access in evaluation?",
        "options": [
          "Equipment alone does not ensure reliable, fairly shared service",
          "A connection guarantees all future outcomes",
          "Only headline capacity matters"
        ],
        "answer": 0,
        "why": "Management must connect infrastructure to useful and inclusive services.",
        "concept": "geo.a.energy03.india-management"
      }
    ],
    "check": [
      {
        "id": "geo.a.energy03.emerging-case.c1",
        "prompt": "Non-fossil capacity exceeds renewables including large hydro by…",
        "options": [
          "8.78 GW, the nuclear category",
          "242.04 GWh",
          "50.08% of households"
        ],
        "answer": 0,
        "why": "242.78−234.00=8.78 GW, consistent with the nuclear row.",
        "concept": "geo.a.energy03.india-capacity",
        "energy03Evidence": "india"
      },
      {
        "id": "geo.a.energy03.emerging-case.c2",
        "prompt": "Does a 50.08% installed non-fossil share prove half of all energy used is renewable?",
        "options": [
          "No: capacity, generation and all-energy use differ",
          "Yes: GW means annual energy",
          "Yes: nuclear is always renewable"
        ],
        "answer": 0,
        "why": "Keep the indicator’s denominator and category definition.",
        "concept": "geo.a.energy03.india-capacity",
        "energy03Evidence": "india"
      },
      {
        "id": "geo.a.energy03.emerging-case.c3",
        "prompt": "The rooftop programme’s reported 9,566.89 MW is approximately…",
        "options": [
          "9.57 GW of added capacity",
          "9.57 GWh of annual energy",
          "9.57 million homes"
        ],
        "answer": 0,
        "why": "1000 MW=1 GW; the quantity remains capacity.",
        "concept": "geo.a.energy03.india-rooftop",
        "energy03Evidence": "rooftop"
      },
      {
        "id": "geo.a.energy03.emerging-case.c4",
        "prompt": "Which evidence best tests progress towards sustainable services?",
        "options": [
          "Actual output, reliability, affordability, access and environmental effects",
          "Only a target or an installed-capacity headline",
          "Only comparing unlike German and Indian percentages"
        ],
        "answer": 0,
        "why": "Evaluate implementation and outcomes with comparable definitions.",
        "concept": "geo.a.energy03.india-management"
      }
    ],
    "caseStudy": "india"
  }
];
