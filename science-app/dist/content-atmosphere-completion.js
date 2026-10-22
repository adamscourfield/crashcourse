export const atmosphereCompletionLessons=[
  {
    "id": "science.chemistry.atmosphere.evolving-air",
    "title": "The evolving atmosphere",
    "short": "The evolving atmosphere",
    "refs": [
      "9.1.1",
      "9.1.2"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.chemistry-of-the-atmosphere",
    "widget": "catalog-atmosphere",
    "prerequisites": [],
    "big": "Modern air is approximately four-fifths nitrogen and one-fifth oxygen, with small amounts of noble gases, carbon dioxide and variable water vapour. These are rounded GCSE proportions: 80% plus 20% is not a precise composition that leaves no room for other gases. Use a stated dataset when calculating a gas volume.",
    "learn": [
      {
        "title": "Air is a mixture.",
        "text": "Modern air is approximately four-fifths nitrogen and one-fifth oxygen, with small amounts of noble gases, carbon dioxide and variable water vapour. These are rounded GCSE proportions: 80% plus 20% is not a precise composition that leaves no room for other gases. Use a stated dataset when calculating a gas volume.",
        "scene": "catalog:science.chemistry.atmosphere.evolving-air"
      },
      {
        "title": "Reconstruct an ancient atmosphere.",
        "text": "Earth formed about 4.6 billion years ago. One model proposes intense volcanic activity in its first billion years: mainly carbon dioxide, water vapour and nitrogen, with little or no oxygen and possibly small amounts of methane and ammonia. The comparison with present-day Mars and Venus supports possible explanations; it is not a direct measurement of early Earth.",
        "scene": "catalog:science.chemistry.atmosphere.evolving-air"
      },
      {
        "title": "Cooling changed the mixture.",
        "text": "As Earth cooled, water vapour condensed into oceans. Carbon dioxide dissolved and carbonate sediments formed, reducing atmospheric carbon dioxide. Nitrogen accumulated because it is relatively unreactive. Evidence from this remote past is limited; scientists compare surviving evidence, develop models and revise explanations. Do not read a schematic timeline as measured percentages for every ancient date.",
        "scene": "catalog:science.chemistry.atmosphere.evolving-air"
      }
    ],
    "lab": [
      {
        "title": "Read the mixture",
        "prompt": "A simplified 1000 cm³ dry-air sample contains 780 nitrogen, 210 oxygen and 10 other gases. Calculate its nitrogen percentage.",
        "fields": [
          {
            "key": "nitrogen",
            "label": "Nitrogen (%)",
            "type": "number",
            "answer": 78,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Gas",
            "Volume /cm³"
          ],
          "rows": [
            [
              "Nitrogen",
              "780"
            ],
            [
              "Oxygen",
              "210"
            ],
            [
              "Other",
              "10"
            ]
          ]
        },
        "success": "780÷1000×100=78%. The 80% figure is a useful approximation.",
        "feedback": "Divide the gas volume by the whole sample, then multiply by 100.",
        "id": "science.chemistry.atmosphere.evolving-air.lab1"
      },
      {
        "title": "Explain ocean formation",
        "prompt": "Select the physical change as early Earth cooled.",
        "fields": [
          {
            "key": "change",
            "label": "Water-vapour change",
            "type": "select",
            "options": [
              {
                "value": "Condensation",
                "label": "Condensation"
              },
              {
                "value": "Evaporation",
                "label": "Evaporation"
              },
              {
                "value": "Combustion",
                "label": "Combustion"
              }
            ],
            "answer": "Condensation"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Volcanic water vapour",
            "Earth cools",
            "Liquid oceans"
          ]
        },
        "success": "Condensation forms liquid water from vapour.",
        "feedback": "Cooling moves water from gas to liquid, without creating a new substance.",
        "id": "science.chemistry.atmosphere.evolving-air.lab2"
      },
      {
        "title": "Weigh the evidence",
        "prompt": "A modern volcanic-gas sample is offered as proof of exact early-Earth percentages. Evaluate the claim.",
        "fields": [
          {
            "key": "evidence",
            "label": "Conclusion",
            "type": "select",
            "options": [
              {
                "value": "Useful comparison, but not exact ancient measurement",
                "label": "Useful comparison, but not exact ancient measurement"
              },
              {
                "value": "Exact proof of every ancient gas percentage",
                "label": "Exact proof of every ancient gas percentage"
              },
              {
                "value": "No relevance to any atmosphere model",
                "label": "No relevance to any atmosphere model"
              }
            ],
            "answer": "Useful comparison, but not exact ancient measurement"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Evidence",
            "Limitation"
          ],
          "rows": [
            [
              "Modern volcanic gas",
              "Different time and conditions"
            ],
            [
              "Ancient rocks",
              "Incomplete surviving record"
            ]
          ]
        },
        "success": "Evidence can support a model without supplying an exact ancient composition.",
        "feedback": "Distinguish a relevant analogy from a direct measurement.",
        "id": "science.chemistry.atmosphere.evolving-air.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Which gas makes up about four-fifths of modern air?",
        "options": [
          "Nitrogen",
          "Oxygen",
          "Carbon dioxide"
        ],
        "answer": 0,
        "why": "Nitrogen is the largest component, approximately 80%.",
        "id": "atmosphere.evolving-air.p1",
        "concept": "atmosphere.evolving-air"
      },
      {
        "prompt": "Using an 80% nitrogen approximation, how much nitrogen is in 250 cm³ of air?",
        "type": "number",
        "answer": 200,
        "unit": "cm³",
        "tolerance": 0.01,
        "why": "0.80×250=200 cm³.",
        "id": "atmosphere.evolving-air.p2",
        "concept": "atmosphere.evolving-air"
      },
      {
        "prompt": "Why is a drawing of early Earth not a direct measurement?",
        "options": [
          "It reconstructs limited evidence from a very remote past",
          "There were no gases on early Earth",
          "Models never use evidence"
        ],
        "answer": 0,
        "why": "Ancient evidence is incomplete and interpreted through models.",
        "id": "atmosphere.evolving-air.p3",
        "concept": "atmosphere.evolving-air"
      }
    ],
    "check": [
      {
        "prompt": "Which process formed oceans as Earth cooled?",
        "options": [
          "Condensation of water vapour",
          "Combustion of nitrogen",
          "Evaporation of rock"
        ],
        "answer": 0,
        "why": "Cooling water vapour produces liquid water.",
        "id": "atmosphere.evolving-air.c1",
        "concept": "atmosphere.evolving-air"
      },
      {
        "prompt": "One suggested early atmosphere was rich in which gas?",
        "options": [
          "Carbon dioxide",
          "Oxygen",
          "Helium only"
        ],
        "answer": 0,
        "why": "Volcanic-origin models include mainlyCO₂ and little oxygen.",
        "id": "atmosphere.evolving-air.c2",
        "concept": "atmosphere.evolving-air"
      },
      {
        "prompt": "Using 20% oxygen, calculate its volume in 350 cm³ of air.",
        "type": "number",
        "answer": 70,
        "unit": "cm³",
        "tolerance": 0.01,
        "why": "0.20×350=70 cm³.",
        "id": "atmosphere.evolving-air.c3",
        "concept": "atmosphere.evolving-air"
      },
      {
        "prompt": "Why must 80:20 nitrogen:oxygen be treated as approximate?",
        "options": [
          "Air also contains other gases",
          "Oxygen is absent from air",
          "Nitrogen is always exactly80.000%"
        ],
        "answer": 0,
        "why": "Rounded percentages omit small components.",
        "id": "atmosphere.evolving-air.c4",
        "concept": "atmosphere.evolving-air"
      },
      {
        "prompt": "New rock evidence conflicts with a model. Best scientific response?",
        "options": [
          "Evaluate the evidence and revise the model if justified",
          "Ignore the evidence to keep the model",
          "Treat one claim as proof without checking"
        ],
        "answer": 0,
        "why": "Models are tested against evidence and can change.",
        "id": "atmosphere.evolving-air.c5",
        "concept": "atmosphere.evolving-air"
      },
      {
        "id": "atmosphere.evolving-air.c6",
        "prompt": "Why did nitrogen gradually build up in the early atmosphere?",
        "options": [
          "It was released and is relatively unreactive",
          "It rapidly burned away in every ocean",
          "All oxygen atoms changed into nitrogen"
        ],
        "answer": 0,
        "why": "Nitrogen could accumulate as reactive gases were removed into other stores.",
        "concept": "atmosphere.evolving-air"
      },
      {
        "id": "atmosphere.evolving-air.c7",
        "prompt": "How did ocean formation help remove atmospheric carbon dioxide?",
        "options": [
          "CO₂ dissolved and carbonates formed sediments",
          "All CO₂ became oxygen without photosynthesis",
          "Oceans prevented every chemical reaction"
        ],
        "answer": 0,
        "why": "Dissolution and carbonate deposition transferred carbon out of the atmosphere.",
        "concept": "atmosphere.evolving-air"
      }
    ],
    "skills": [
      "WS1.1",
      "WS1.2",
      "WS1.3",
      "WS3.5",
      "WS3.6",
      "MS1c"
    ]
  },
  {
    "id": "science.chemistry.atmosphere.oxygen-carbon-stores",
    "title": "Oxygen and carbon stores",
    "short": "Oxygen and carbon stores",
    "refs": [
      "9.1.3",
      "9.1.4"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.chemistry-of-the-atmosphere",
    "widget": "catalog-atmosphere",
    "prerequisites": [],
    "big": "Algae first produced oxygen by photosynthesis about 2.7 billion years ago. Later plants evolved, removing carbon dioxide and releasing oxygen. Oxygen gradually accumulated over a long period, eventually supporting animal evolution. The word equation is carbon dioxide + water → glucose + oxygen, using light energy.",
    "learn": [
      {
        "title": "Photosynthesis transformed the air.",
        "text": "Algae first produced oxygen by photosynthesis about 2.7 billion years ago. Later plants evolved, removing carbon dioxide and releasing oxygen. Oxygen gradually accumulated over a long period, eventually supporting animal evolution. The word equation is carbon dioxide + water → glucose + oxygen, using light energy.",
        "scene": "catalog:science.chemistry.atmosphere.oxygen-carbon-stores"
      },
      {
        "title": "Follow carbon into rock.",
        "text": "Carbon dioxide dissolved in oceans; carbonates accumulated as sediments. Shells and skeletons of marine organisms can contribute calcium carbonate to limestone. Burial and compaction create rock stores of carbon. Photosynthesis and storage in sediments reduced atmospheric carbon dioxide; oxygen is not produced simply by carbon dioxide dissolving.",
        "scene": "catalog:science.chemistry.atmosphere.oxygen-carbon-stores"
      },
      {
        "title": "Burial stores ancient biomass.",
        "text": "Coal formed from buried plant material in swampy conditions. Crude oil and natural gas formed mainly from ancient microscopic organisms buried in marine sediments, transformed over millions of years by heat and pressure. Carbon originally captured by photosynthesis became stored in fossil fuels; burning them returns carbon dioxide to the atmosphere.",
        "scene": "catalog:science.chemistry.atmosphere.oxygen-carbon-stores"
      }
    ],
    "lab": [
      {
        "title": "Balance photosynthesis",
        "prompt": "Complete the oxygen coefficient:6 CO₂+6 H₂O→C₆H₁₂O₆+?O₂.",
        "fields": [
          {
            "key": "oxygen",
            "label": "O₂ coefficient",
            "type": "number",
            "answer": 6,
            "tolerance": 0
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "6CO₂ +6H₂O",
            "Light energy",
            "C₆H₁₂O₆ +?O₂"
          ]
        },
        "success": "SixO₂ molecules balance the oxygen atoms.",
        "feedback": "Count atoms, keeping the glucose formula unchanged.",
        "id": "science.chemistry.atmosphere.oxygen-carbon-stores.lab1"
      },
      {
        "title": "Identify the geological store",
        "prompt": "Match buried swamp vegetation to the fossil fuel.",
        "fields": [
          {
            "key": "fuel",
            "label": "Most direct match",
            "type": "select",
            "options": [
              {
                "value": "Coal",
                "label": "Coal"
              },
              {
                "value": "Crude oil mainly from plankton",
                "label": "Crude oil mainly from plankton"
              },
              {
                "value": "Hydrogen gas",
                "label": "Hydrogen gas"
              }
            ],
            "answer": "Coal"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Buried source",
            "Conditions"
          ],
          "rows": [
            [
              "Swamp plants",
              "Low oxygen, burial, geological time"
            ]
          ]
        },
        "success": "Coal records carbon from ancient plant material.",
        "feedback": "Distinguish terrestrial plant deposits from marine plankton deposits.",
        "id": "science.chemistry.atmosphere.oxygen-carbon-stores.lab2"
      },
      {
        "title": "Trace limestone carbon",
        "prompt": "Choose the process that moves carbon into a sedimentary rock.",
        "fields": [
          {
            "key": "store",
            "label": "Carbon-store route",
            "type": "select",
            "options": [
              {
                "value": "Carbonate shells accumulate and become limestone",
                "label": "Carbonate shells accumulate and become limestone"
              },
              {
                "value": "Oxygen condenses directly into coal",
                "label": "Oxygen condenses directly into coal"
              },
              {
                "value": "Nitrogen becomes oil without biomass",
                "label": "Nitrogen becomes oil without biomass"
              }
            ],
            "answer": "Carbonate shells accumulate and become limestone"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Ocean carbon compounds",
            "Carbonate shells/sediment",
            "Burial and limestone"
          ]
        },
        "success": "Carbon can be retained in carbonate rock over long periods.",
        "feedback": "Look for carbon-containing sediment and geological burial.",
        "id": "science.chemistry.atmosphere.oxygen-carbon-stores.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Which process removedCO₂ while releasing oxygen?",
        "options": [
          "Photosynthesis",
          "DissolvingCO₂ alone",
          "Burning coal"
        ],
        "answer": 0,
        "why": "Photosynthesis consumesCO₂ and producesO₂.",
        "id": "atmosphere.oxygen-carbon-stores.p1",
        "concept": "atmosphere.oxygen-carbon-stores"
      },
      {
        "prompt": "Which organisms first supplied oxygen about 2.7 billion years ago?",
        "options": [
          "Algae",
          "Humans",
          "Land mammals"
        ],
        "answer": 0,
        "why": "Algae photosynthesised long before animals.",
        "id": "atmosphere.oxygen-carbon-stores.p2",
        "concept": "atmosphere.oxygen-carbon-stores"
      },
      {
        "prompt": "Which material is a major component of limestone?",
        "options": [
          "Calcium carbonate",
          "Pure carbon gas",
          "Liquid methane"
        ],
        "answer": 0,
        "why": "Marine shells can contribute calcium carbonate sediments.",
        "id": "atmosphere.oxygen-carbon-stores.p3",
        "concept": "atmosphere.oxygen-carbon-stores"
      }
    ],
    "check": [
      {
        "prompt": "Coal mainly originated from which material?",
        "options": [
          "Ancient plants",
          "Freshly melted metal",
          "Pure oxygen"
        ],
        "answer": 0,
        "why": "Buried plant material was transformed over geological time.",
        "id": "atmosphere.oxygen-carbon-stores.c1",
        "concept": "atmosphere.oxygen-carbon-stores"
      },
      {
        "prompt": "Crude oil mainly formed from which source?",
        "options": [
          "Ancient biomass including plankton",
          "Recent household plastics",
          "Atmospheric nitrogen alone"
        ],
        "answer": 0,
        "why": "Buried ancient marine organisms supplied carbon-rich biomass.",
        "id": "atmosphere.oxygen-carbon-stores.c2",
        "concept": "atmosphere.oxygen-carbon-stores"
      },
      {
        "prompt": "What happens to stored fossil-fuel carbon during complete combustion?",
        "options": [
          "It forms carbon dioxide",
          "It all becomes nitrogen",
          "It disappears"
        ],
        "answer": 0,
        "why": "Carbon atoms remain and enterCO₂.",
        "id": "atmosphere.oxygen-carbon-stores.c3",
        "concept": "atmosphere.oxygen-carbon-stores"
      },
      {
        "prompt": "In 6 CO₂+6 H₂O→C₆H₁₂O₆+6 O₂, how manyO₂ molecules form for 12 CO₂ molecules?",
        "type": "number",
        "answer": 12,
        "unit": "molecules",
        "tolerance": 0,
        "why": "TheCO₂:O₂ ratio is 6:6 or 1:1.",
        "id": "atmosphere.oxygen-carbon-stores.c4",
        "concept": "atmosphere.oxygen-carbon-stores"
      },
      {
        "prompt": "Which account explains the long-term fall in atmosphericCO₂?",
        "options": [
          "Photosynthesis and burial in rocks/fossil fuels",
          "Only oxygen dissolving into oceans",
          "All carbon atoms were destroyed"
        ],
        "answer": 0,
        "why": "Carbon moved into other stores; atoms were conserved.",
        "id": "atmosphere.oxygen-carbon-stores.c5",
        "concept": "atmosphere.oxygen-carbon-stores"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.atmosphere.greenhouse-effect",
    "title": "How greenhouse gases warm Earth",
    "short": "How greenhouse gases warm Earth",
    "refs": [
      "9.2.1"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.chemistry-of-the-atmosphere",
    "widget": "catalog-atmosphere",
    "prerequisites": [],
    "big": "The Sun supplies mainly short-wavelength radiation that passes through much of the atmosphere and warms the surface. The warm Earth emits longer-wavelength infrared radiation. Greenhouse gases interact with some of this outgoing infrared; they absorb and emit it, including towards the surface. Do not model this as a solid lid trapping gas.",
    "learn": [
      {
        "title": "Let energy through and back out.",
        "text": "The Sun supplies mainly short-wavelength radiation that passes through much of the atmosphere and warms the surface. The warm Earth emits longer-wavelength infrared radiation. Greenhouse gases interact with some of this outgoing infrared; they absorb and emit it, including towards the surface. Do not model this as a solid lid trapping gas.",
        "scene": "catalog:science.chemistry.atmosphere.greenhouse-effect"
      },
      {
        "title": "A natural effect supports life.",
        "text": "Water vapour, carbon dioxide and methane are greenhouse gases. The natural greenhouse effect keeps Earth warm enough for life. Nitrogen and oxygen make up most air but are not the main greenhouse gases. More greenhouse gas can reduce the initial outward energy transfer, so the surface warms until incoming and outgoing energy balance again.",
        "scene": "catalog:science.chemistry.atmosphere.greenhouse-effect"
      },
      {
        "title": "Keep the mechanisms distinct.",
        "text": "Greenhouse warming concerns longwave infrared energy. Ozone depletion is a different atmospheric issue, while particulate global dimming reduces sunlight reaching the surface. A simple arrow diagram helps trace energy transfers but omits changing clouds, oceans, geography and feedbacks; it is not a complete climate forecast.",
        "scene": "catalog:science.chemistry.atmosphere.greenhouse-effect"
      }
    ],
    "lab": [
      {
        "title": "Route the radiation",
        "prompt": "Identify the radiation Earth emits after warming.",
        "fields": [
          {
            "key": "wave",
            "label": "Outgoing radiation",
            "type": "select",
            "options": [
              {
                "value": "Longwave infrared",
                "label": "Longwave infrared"
              },
              {
                "value": "Only shortwave ultraviolet",
                "label": "Only shortwave ultraviolet"
              },
              {
                "value": "A beam of oxygen",
                "label": "A beam of oxygen"
              }
            ],
            "answer": "Longwave infrared"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Sun:shortwave",
            "Warm surface",
            "Earth:outgoing radiation"
          ]
        },
        "success": "Earth emits longwave infrared radiation.",
        "feedback": "Separate incoming solar radiation from outgoing terrestrial radiation.",
        "id": "science.chemistry.atmosphere.greenhouse-effect.lab1"
      },
      {
        "title": "Account for energy",
        "prompt": "A schematic surface system receives 240 units and initially emits 236 units to space. Find the initial surplus.",
        "fields": [
          {
            "key": "surplus",
            "label": "Surplus /energy units",
            "type": "number",
            "answer": 4,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Transfer",
            "Units"
          ],
          "rows": [
            [
              "In",
              "240"
            ],
            [
              "Out",
              "236"
            ]
          ]
        },
        "success": "A 4-unit surplus initially warms the system. These are illustrative values.",
        "feedback": "Subtract outgoing from incoming; the model does not provide a complete climate forecast.",
        "id": "science.chemistry.atmosphere.greenhouse-effect.lab2"
      },
      {
        "title": "Choose the mechanism",
        "prompt": "Select the statement explaining greenhouse warming.",
        "fields": [
          {
            "key": "mechanism",
            "label": "Explanation",
            "type": "select",
            "options": [
              {
                "value": "Greenhouse gases absorb and emit some outgoing infrared",
                "label": "Greenhouse gases absorb and emit some outgoing infrared"
              },
              {
                "value": "CO₂ destroys incoming sunlight",
                "label": "CO₂ destroys incoming sunlight"
              },
              {
                "value": "Ozone depletion is the greenhouse effect",
                "label": "Ozone depletion is the greenhouse effect"
              }
            ],
            "answer": "Greenhouse gases absorb and emit some outgoing infrared"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Surface infrared",
            "Gas absorption/emission",
            "Energy returns in several directions"
          ]
        },
        "success": "Absorption and emission alter energy transfer.",
        "feedback": "Follow energy, rather than imagining an airtight glass lid.",
        "id": "science.chemistry.atmosphere.greenhouse-effect.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Earth mainly emits which outgoing radiation?",
        "options": [
          "Long-wavelength infrared",
          "Only short-wavelength ultraviolet",
          "No radiation"
        ],
        "answer": 0,
        "why": "A warm surface emits infrared.",
        "id": "atmosphere.greenhouse-effect.p1",
        "concept": "atmosphere.greenhouse-effect"
      },
      {
        "prompt": "Which set contains greenhouse gases?",
        "options": [
          "Water vapour,CO₂ and methane",
          "Only nitrogen and oxygen",
          "Helium,neon and argon only"
        ],
        "answer": 0,
        "why": "These gases absorb and emit infrared radiation.",
        "id": "atmosphere.greenhouse-effect.p2",
        "concept": "atmosphere.greenhouse-effect"
      },
      {
        "prompt": "What does a greenhouse gas do with some outgoing infrared?",
        "options": [
          "Absorbs and emits it",
          "Destroys the energy",
          "Changes all of it into oxygen"
        ],
        "answer": 0,
        "why": "Energy is transferred, not destroyed.",
        "id": "atmosphere.greenhouse-effect.p3",
        "concept": "atmosphere.greenhouse-effect"
      }
    ],
    "check": [
      {
        "prompt": "Why is the natural greenhouse effect important?",
        "options": [
          "It maintains temperatures suitable for life",
          "It removes all sunlight",
          "It prevents every temperature change"
        ],
        "answer": 0,
        "why": "It makes Earth warmer than it otherwise would be.",
        "id": "atmosphere.greenhouse-effect.c1",
        "concept": "atmosphere.greenhouse-effect"
      },
      {
        "prompt": "What mainly arrives from the Sun in this model?",
        "options": [
          "Shorter-wavelength radiation",
          "Only the same longwave radiation emitted by Earth",
          "No energy"
        ],
        "answer": 0,
        "why": "Solar and terrestrial radiation differ in typical wavelength.",
        "id": "atmosphere.greenhouse-effect.c2",
        "concept": "atmosphere.greenhouse-effect"
      },
      {
        "prompt": "Which is a different mechanism from greenhouse warming?",
        "options": [
          "Particulates reducing sunlight at the surface",
          "CO₂ absorbing infrared",
          "Water vapour emitting infrared"
        ],
        "answer": 0,
        "why": "Dimming changes incoming sunlight; greenhouse gases affect outgoing infrared.",
        "id": "atmosphere.greenhouse-effect.c3",
        "concept": "atmosphere.greenhouse-effect"
      },
      {
        "prompt": "What must a simplified energy-flow model disclose?",
        "options": [
          "It omits many climate-system details",
          "It predicts every future storm exactly",
          "It proves clouds do not matter"
        ],
        "answer": 0,
        "why": "Model limitations define what can be inferred.",
        "id": "atmosphere.greenhouse-effect.c4",
        "concept": "atmosphere.greenhouse-effect"
      },
      {
        "prompt": "A model receives 100 energy units and initially loses 96. How many units accumulate?",
        "type": "number",
        "answer": 4,
        "unit": "energy units",
        "tolerance": 0.01,
        "why": "100−96=4, initially warming the system.",
        "id": "atmosphere.greenhouse-effect.c5",
        "concept": "atmosphere.greenhouse-effect"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.atmosphere.climate-evidence",
    "title": "Climate evidence and consequences",
    "short": "Climate evidence and consequences",
    "refs": [
      "9.2.2",
      "9.2.3"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.chemistry-of-the-atmosphere",
    "widget": "catalog-atmosphere",
    "prerequisites": [],
    "big": "Burning fossil fuels and deforestation increase atmospheric carbon dioxide. Livestock farming and decomposition in landfill can release methane. Distinguish these source mechanisms: a gas does not become harmless simply because a different gas is emitted in larger amounts. Compare quantities and effects using appropriate data.",
    "learn": [
      {
        "title": "Connect activities to gases.",
        "text": "Burning fossil fuels and deforestation increase atmospheric carbon dioxide. Livestock farming and decomposition in landfill can release methane. Distinguish these source mechanisms: a gas does not become harmless simply because a different gas is emitted in larger amounts. Compare quantities and effects using appropriate data.",
        "scene": "catalog:science.chemistry.atmosphere.climate-evidence"
      },
      {
        "title": "Evaluate evidence rather than headlines.",
        "text": "Climate is a long-term pattern; a single hot day or cold winter is not a global climate trend. Compare observations across long periods, locations and independent methods. Peer review checks methods and reasoning but does not make results infallible. Uncertainties arise from measurements, models and future human activity; communicate both robust conclusions and the limits of forecasts.",
        "scene": "catalog:science.chemistry.atmosphere.climate-evidence"
      },
      {
        "title": "Assess scale and risk.",
        "text": "Increasing global average temperature can raise sea level, alter rainfall, change the frequency or severity of some extreme weather and shift habitats or species distributions. Effects differ between places and can affect food, water and infrastructure. Discuss likelihood, consequences and people exposed rather than claiming that every event is caused solely by warming.",
        "scene": "catalog:science.chemistry.atmosphere.climate-evidence"
      }
    ],
    "lab": [
      {
        "title": "Distinguish weather and climate",
        "prompt": "Select the dataset better suited to judging a climate trend.",
        "fields": [
          {
            "key": "record",
            "label": "Dataset",
            "type": "select",
            "options": [
              {
                "value": "Global measurements over many decades",
                "label": "Global measurements over many decades"
              },
              {
                "value": "A single local afternoon",
                "label": "A single local afternoon"
              },
              {
                "value": "An unattributed social-media image",
                "label": "An unattributed social-media image"
              }
            ],
            "answer": "Global measurements over many decades"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Dataset",
            "Coverage"
          ],
          "rows": [
            [
              "A",
              "One town,one day"
            ],
            [
              "B",
              "Many regions,60years"
            ]
          ]
        },
        "success": "Long periods and broad coverage are relevant to climate.",
        "feedback": "Match the scale of evidence to the scale of the claim.",
        "id": "science.chemistry.atmosphere.climate-evidence.lab1"
      },
      {
        "title": "Interpret a change",
        "prompt": "An illustrative regional mean rises from 13.2°C to 14.1°C. Calculate the difference; this alone does not establish a global trend.",
        "fields": [
          {
            "key": "change",
            "label": "Temperature difference /°C",
            "type": "number",
            "answer": 0.9,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Period",
            "Mean /°C"
          ],
          "rows": [
            [
              "Earlier",
              "13.2"
            ],
            [
              "Later",
              "14.1"
            ]
          ]
        },
        "success": "The difference is 0.9°C; attribution and global claims need more evidence.",
        "feedback": "Subtract earlier from later and keep the geographical limitation.",
        "id": "science.chemistry.atmosphere.climate-evidence.lab2"
      },
      {
        "title": "Communicate responsibly",
        "prompt": "A forecast gives a range under specified emissions. Choose a suitable report.",
        "fields": [
          {
            "key": "report",
            "label": "Report",
            "type": "select",
            "options": [
              {
                "value": "State the range,assumptions and evidence",
                "label": "State the range,assumptions and evidence"
              },
              {
                "value": "Publish only the largest value as certain",
                "label": "Publish only the largest value as certain"
              },
              {
                "value": "Conclude uncertainty means no evidence",
                "label": "Conclude uncertainty means no evidence"
              }
            ],
            "answer": "State the range,assumptions and evidence"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Observations",
            "Model assumptions",
            "Range and limitations"
          ]
        },
        "success": "A useful report communicates conclusions together with uncertainty.",
        "feedback": "Do not replace a range with certainty or confuse uncertainty with absence of evidence.",
        "id": "science.chemistry.atmosphere.climate-evidence.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Which human activity is a methane source?",
        "options": [
          "Livestock farming",
          "Only making glass from sand",
          "Photosynthesis releasing oxygen"
        ],
        "answer": 0,
        "why": "Livestock digestion can release methane.",
        "id": "atmosphere.climate-evidence.p1",
        "concept": "atmosphere.climate-evidence"
      },
      {
        "prompt": "Which activity can increaseCO₂?",
        "options": [
          "Burning fossil fuels",
          "Growing a forest with net carbon storage",
          "Condensing pure water"
        ],
        "answer": 0,
        "why": "Combustion transfers fossil carbon intoCO₂.",
        "id": "atmosphere.climate-evidence.p2",
        "concept": "atmosphere.climate-evidence"
      },
      {
        "prompt": "Which evidence is strongest for a long-term global trend?",
        "options": [
          "Many independent records over decades",
          "One hot afternoon at one school",
          "A headline without a method"
        ],
        "answer": 0,
        "why": "Long-term, geographically broad evidence addresses climate.",
        "id": "atmosphere.climate-evidence.p3",
        "concept": "atmosphere.climate-evidence"
      }
    ],
    "check": [
      {
        "prompt": "What is a useful role of peer review?",
        "options": [
          "Scrutinising methods and reasoning",
          "Guaranteeing that every conclusion is permanent",
          "Replacing all data collection"
        ],
        "answer": 0,
        "why": "Independent scrutiny can identify limitations and errors.",
        "id": "atmosphere.climate-evidence.c1",
        "concept": "atmosphere.climate-evidence"
      },
      {
        "prompt": "Which is a potential consequence of warming?",
        "options": [
          "Sea-level rise",
          "Guaranteed identical rainfall everywhere",
          "Instant disappearance of all oxygen"
        ],
        "answer": 0,
        "why": "Warming oceans and melting land ice can contribute to sea-level rise.",
        "id": "atmosphere.climate-evidence.c2",
        "concept": "atmosphere.climate-evidence"
      },
      {
        "prompt": "Why do future-emissions assumptions affect predictions?",
        "options": [
          "Future human activity is uncertain",
          "Energy is not conserved",
          "Climate models cannot use evidence"
        ],
        "answer": 0,
        "why": "Scenarios depend partly on future choices.",
        "id": "atmosphere.climate-evidence.c3",
        "concept": "atmosphere.climate-evidence"
      },
      {
        "prompt": "Which risk judgement is best supported?",
        "options": [
          "Consider likelihood,scale and consequences",
          "Ignore effects outside one town",
          "Treat every uncertainty as zero risk"
        ],
        "answer": 0,
        "why": "Risk combines possible consequences and their likelihood.",
        "id": "atmosphere.climate-evidence.c4",
        "concept": "atmosphere.climate-evidence"
      },
      {
        "prompt": "Which set gives four potential climate effects?",
        "options": [
          "Sea-level,rainfall,extreme-weather and habitat changes",
          "Ozone hole,all oxygen lost,all metals melt,no seasons",
          "Only changes in tomorrow’s school weather"
        ],
        "answer": 0,
        "why": "These are distinct effects with different regional impacts.",
        "id": "atmosphere.climate-evidence.c5",
        "concept": "atmosphere.climate-evidence"
      },
      {
        "id": "atmosphere.climate-evidence.c6",
        "prompt": "Which pair gives two human sources increasing methane?",
        "options": [
          "Livestock farming and decomposing landfill waste",
          "Photosynthesis and freezing pure water",
          "Making glass and splitting nitrogen atoms"
        ],
        "answer": 0,
        "why": "Livestock and anaerobic waste decomposition can release methane.",
        "concept": "atmosphere.climate-evidence"
      },
      {
        "id": "atmosphere.climate-evidence.c7",
        "prompt": "Which pair gives two human causes of increased atmospheric carbon dioxide?",
        "options": [
          "Fossil-fuel burning and deforestation",
          "Growing forests and storing carbon permanently",
          "Condensation and filtering sand"
        ],
        "answer": 0,
        "why": "Combustion emits fossil carbon and deforestation reduces carbon storage and can release carbon.",
        "concept": "atmosphere.climate-evidence"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.atmosphere.carbon-footprints",
    "title": "Comparing carbon footprints",
    "short": "Comparing carbon footprints",
    "refs": [
      "9.2.4"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.chemistry-of-the-atmosphere",
    "widget": "catalog-atmosphere",
    "prerequisites": [],
    "big": "A carbon footprint totals greenhouse-gas emissions across the life cycle of a product, service or event. Raw materials, manufacture, transport, use and disposal may all contribute. Comparisons need the same function and boundary: one journey is not comparable with a whole year of travel unless quantities are adjusted.",
    "learn": [
      {
        "title": "Count the whole life.",
        "text": "A carbon footprint totals greenhouse-gas emissions across the life cycle of a product, service or event. Raw materials, manufacture, transport, use and disposal may all contribute. Comparisons need the same function and boundary: one journey is not comparable with a whole year of travel unless quantities are adjusted.",
        "scene": "catalog:science.chemistry.atmosphere.carbon-footprints"
      },
      {
        "title": "Reduce sources of emissions.",
        "text": "Reducing fossil-fuel energy use, improving efficiency, choosing lower-emission energy and transport, preventing food waste and capturing landfill methane can reduce emissions. Maintaining forests and changing agricultural practices can also help. Check the full chain: an electric device still has manufacturing and electricity-supply impacts.",
        "scene": "catalog:science.chemistry.atmosphere.carbon-footprints"
      },
      {
        "title": "Evaluate practical limits.",
        "text": "Cost, infrastructure, available technology, consumer habits, international cooperation and competing needs can limit reductions. A numerical comparison cannot by itself decide fairness or affordability. Use supplied data to justify a choice and state what emissions are excluded; do not label an option zero-carbon solely because it has no exhaust.",
        "scene": "catalog:science.chemistry.atmosphere.carbon-footprints"
      }
    ],
    "lab": [
      {
        "title": "Total the stages",
        "prompt": "Calculate this illustrative product footprint.",
        "fields": [
          {
            "key": "total",
            "label": "Total /kg equivalent",
            "type": "number",
            "answer": 36,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Stage",
            "kg equivalent"
          ],
          "rows": [
            [
              "Materials",
              "12"
            ],
            [
              "Manufacture",
              "8"
            ],
            [
              "Transport",
              "3"
            ],
            [
              "Use",
              "10"
            ],
            [
              "Disposal",
              "3"
            ]
          ]
        },
        "success": "The full stated boundary totals 36 kg.",
        "feedback": "Include every listed stage once.",
        "id": "science.chemistry.atmosphere.carbon-footprints.lab1"
      },
      {
        "title": "Compare like with like",
        "prompt": "OptionA emits 60 kg for 20 journeys; B emits 48 kg for 20 equivalent journeys. Calculate the reduction per journey.",
        "fields": [
          {
            "key": "saving",
            "label": "Saving /kg per journey",
            "type": "number",
            "answer": 0.6,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Option",
            "20journeys /kg"
          ],
          "rows": [
            [
              "A",
              "60"
            ],
            [
              "B",
              "48"
            ]
          ]
        },
        "success": "(60−48)÷20=0.6 kg per equivalent journey.",
        "feedback": "First find the difference, then divide by the number of journeys.",
        "id": "science.chemistry.atmosphere.carbon-footprints.lab2"
      },
      {
        "title": "Identify a constraint",
        "prompt": "A village has no reliable public transport. Select a justified implication.",
        "fields": [
          {
            "key": "limit",
            "label": "Implication",
            "type": "select",
            "options": [
              {
                "value": "Infrastructure can limit low-emission travel choices",
                "label": "Infrastructure can limit low-emission travel choices"
              },
              {
                "value": "Residents can instantly remove all travel emissions",
                "label": "Residents can instantly remove all travel emissions"
              },
              {
                "value": "Emissions comparisons should omit travel",
                "label": "Emissions comparisons should omit travel"
              }
            ],
            "answer": "Infrastructure can limit low-emission travel choices"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Possible reduction",
            "Local access and cost",
            "Feasible action"
          ]
        },
        "success": "Reduction policies must account for practical access.",
        "feedback": "Keep the physical emission benefit and practical constraints distinct.",
        "id": "science.chemistry.atmosphere.carbon-footprints.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "What belongs in a full carbon footprint?",
        "options": [
          "Greenhouse emissions across the full life cycle",
          "Only exhaust during use",
          "OnlyCO₂ from one factory"
        ],
        "answer": 0,
        "why": "A footprint includes relevant upstream and downstream stages.",
        "id": "atmosphere.carbon-footprints.p1",
        "concept": "atmosphere.carbon-footprints"
      },
      {
        "prompt": "Production emits 20 kg, transport 5 kg, use 30 kg, disposal 2 kg. Total?",
        "type": "number",
        "answer": 57,
        "unit": "kg greenhouse-gas equivalent",
        "tolerance": 0.01,
        "why": "20+5+30+2=57 kg.",
        "id": "atmosphere.carbon-footprints.p2",
        "concept": "atmosphere.carbon-footprints"
      },
      {
        "prompt": "Which can reduce landfill methane emissions?",
        "options": [
          "Capturing methane for controlled use",
          "Adding more food waste without controls",
          "Ignoring decomposition"
        ],
        "answer": 0,
        "why": "Capture can reduce methane escaping; combustion still producesCO₂.",
        "id": "atmosphere.carbon-footprints.p3",
        "concept": "atmosphere.carbon-footprints"
      }
    ],
    "check": [
      {
        "prompt": "Which is a limitation on rapid transport changes?",
        "options": [
          "Availability of infrastructure",
          "Conservation of mass being optional",
          "All travel already having zero impact"
        ],
        "answer": 0,
        "why": "Infrastructure affects which choices people can make.",
        "id": "atmosphere.carbon-footprints.c1",
        "concept": "atmosphere.carbon-footprints"
      },
      {
        "prompt": "An event reduces its footprint from 80 kg to 60 kg. Percentage reduction?",
        "type": "number",
        "answer": 25,
        "unit": "%",
        "tolerance": 0.01,
        "why": "Reduction 20÷original 80×100=25%.",
        "id": "atmosphere.carbon-footprints.c2",
        "concept": "atmosphere.carbon-footprints"
      },
      {
        "prompt": "Why compare the same service when comparing footprints?",
        "options": [
          "Different quantities can make the comparison misleading",
          "All services have identical emissions",
          "Transport never matters"
        ],
        "answer": 0,
        "why": "Use a common functional basis.",
        "id": "atmosphere.carbon-footprints.c3",
        "concept": "atmosphere.carbon-footprints"
      },
      {
        "prompt": "Why is an electric vehicle not automatically zero-footprint?",
        "options": [
          "Manufacturing and electricity production can emit greenhouse gases",
          "It contains no atoms",
          "It must burn petrol in its motor"
        ],
        "answer": 0,
        "why": "The full supply chain matters.",
        "id": "atmosphere.carbon-footprints.c4",
        "concept": "atmosphere.carbon-footprints"
      },
      {
        "prompt": "Which statement is most defensible?",
        "options": [
          "State included stages and limitations alongside the total",
          "Hide inconvenient emissions",
          "A lower number proves every social question is solved"
        ],
        "answer": 0,
        "why": "Transparent assumptions make the comparison interpretable.",
        "id": "atmosphere.carbon-footprints.c5",
        "concept": "atmosphere.carbon-footprints"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.atmosphere.combustion-pollution",
    "title": "Combustion and air pollution",
    "short": "Combustion and air pollution",
    "refs": [
      "9.3.1",
      "9.3.2"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.chemistry-of-the-atmosphere",
    "widget": "catalog-atmosphere",
    "prerequisites": [],
    "big": "Complete combustion of a hydrocarbon forms carbon dioxide and water. Limited oxygen can produce carbon monoxide and carbon particles called soot, as well as water. Unburned hydrocarbons and solid particles can form particulates. Use both the fuel composition and the combustion conditions to predict emissions.",
    "learn": [
      {
        "title": "Conditions determine products.",
        "text": "Complete combustion of a hydrocarbon forms carbon dioxide and water. Limited oxygen can produce carbon monoxide and carbon particles called soot, as well as water. Unburned hydrocarbons and solid particles can form particulates. Use both the fuel composition and the combustion conditions to predict emissions.",
        "scene": "catalog:science.chemistry.atmosphere.combustion-pollution"
      },
      {
        "title": "Trace sulfur and nitrogen.",
        "text": "Sulfur impurities in fuels form sulfur dioxide when burned. At high temperatures in engines, nitrogen and oxygen from the air can react to form oxides of nitrogen: the fuel need not contain nitrogen. Sulfur dioxide and nitrogen oxides cause respiratory problems and contribute to acid rain.",
        "scene": "catalog:science.chemistry.atmosphere.combustion-pollution"
      },
      {
        "title": "Connect pollutants to harm.",
        "text": "Carbon monoxide is toxic, colourless and odourless, so human senses cannot reliably warn of its presence. Particulates can damage health and reduce sunlight reaching the surface, causing global dimming. Do not confuse soot with carbon dioxide or describe carbon monoxide as a greenhouse-gas explanation instead of addressing its toxicity.",
        "scene": "catalog:science.chemistry.atmosphere.combustion-pollution"
      }
    ],
    "lab": [
      {
        "title": "Predict from composition",
        "prompt": "A sulfur-free hydrocarbon burns completely in excess oxygen. Choose its main chemical products.",
        "fields": [
          {
            "key": "products",
            "label": "Products",
            "type": "select",
            "options": [
              {
                "value": "Carbon dioxide and water",
                "label": "Carbon dioxide and water"
              },
              {
                "value": "Sulfur dioxide and water",
                "label": "Sulfur dioxide and water"
              },
              {
                "value": "Carbon monoxide only",
                "label": "Carbon monoxide only"
              }
            ],
            "answer": "Carbon dioxide and water"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "C and H fuel",
            "Excess oxygen",
            "Complete combustion"
          ]
        },
        "success": "Only the present elements can supply the products.",
        "feedback": "There is no sulfur in this stated fuel and combustion is complete.",
        "id": "science.chemistry.atmosphere.combustion-pollution.lab1"
      },
      {
        "title": "DiagnoseNOx",
        "prompt": "The fuel contains no nitrogen but a hot engine emits nitrogen oxides. Identify the nitrogen source.",
        "fields": [
          {
            "key": "source",
            "label": "Nitrogen source",
            "type": "select",
            "options": [
              {
                "value": "The air entering the engine",
                "label": "The air entering the engine"
              },
              {
                "value": "Carbon atoms becoming nitrogen",
                "label": "Carbon atoms becoming nitrogen"
              },
              {
                "value": "The sulfur impurity",
                "label": "The sulfur impurity"
              }
            ],
            "answer": "The air entering the engine"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Input",
            "Contents"
          ],
          "rows": [
            [
              "Fuel",
              "Carbon and hydrogen"
            ],
            [
              "Air",
              "Nitrogen and oxygen"
            ]
          ]
        },
        "success": "Hot air can supply both nitrogen and oxygen forNOx.",
        "feedback": "Consider all reaction inputs, not only the fuel.",
        "id": "science.chemistry.atmosphere.combustion-pollution.lab2"
      },
      {
        "title": "Match harm to pollutant",
        "prompt": "Choose the link that correctly explains acid rain.",
        "fields": [
          {
            "key": "harm",
            "label": "Cause",
            "type": "select",
            "options": [
              {
                "value": "Sulfur dioxide and nitrogen oxides",
                "label": "Sulfur dioxide and nitrogen oxides"
              },
              {
                "value": "Carbon monoxide because it smells strong",
                "label": "Carbon monoxide because it smells strong"
              },
              {
                "value": "Argon because it is a noble gas",
                "label": "Argon because it is a noble gas"
              }
            ],
            "answer": "Sulfur dioxide and nitrogen oxides"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "SO₂ andNOx",
            "Atmospheric reactions",
            "Acidic precipitation"
          ]
        },
        "success": "SO₂ andNOx contribute to acid rain and respiratory problems.",
        "feedback": "CO is odourless and toxic; it is not the required acid-rain explanation.",
        "id": "science.chemistry.atmosphere.combustion-pollution.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Which condition favours carbon monoxide from a hydrocarbon?",
        "options": [
          "Insufficient oxygen",
          "Excess oxygen guaranteeing complete combustion",
          "No carbon in the fuel"
        ],
        "answer": 0,
        "why": "Incomplete combustion can leave carbon inCO rather thanCO₂.",
        "id": "atmosphere.combustion-pollution.p1",
        "concept": "atmosphere.combustion-pollution"
      },
      {
        "prompt": "Why can a fuel without nitrogen still produceNOx in an engine?",
        "options": [
          "Nitrogen and oxygen in air react at high temperature",
          "All carbon atoms become nitrogen",
          "NOx is made from pure helium"
        ],
        "answer": 0,
        "why": "Air supplies nitrogen and oxygen.",
        "id": "atmosphere.combustion-pollution.p2",
        "concept": "atmosphere.combustion-pollution"
      },
      {
        "prompt": "Which pollutant can form from sulfur impurities?",
        "options": [
          "Sulfur dioxide",
          "Only pure oxygen",
          "Calcium carbonate"
        ],
        "answer": 0,
        "why": "Sulfur is oxidised toSO₂.",
        "id": "atmosphere.combustion-pollution.p3",
        "concept": "atmosphere.combustion-pollution"
      }
    ],
    "check": [
      {
        "prompt": "Which gas is toxic, colourless and odourless?",
        "options": [
          "Carbon monoxide",
          "Water vapour only",
          "Nitrogen as the named combustion toxin"
        ],
        "answer": 0,
        "why": "CO is dangerous and not detectable by smell or colour.",
        "id": "atmosphere.combustion-pollution.c1",
        "concept": "atmosphere.combustion-pollution"
      },
      {
        "prompt": "Which pair contributes to acid rain?",
        "options": [
          "Sulfur dioxide and nitrogen oxides",
          "Oxygen and helium",
          "Soot and argon only"
        ],
        "answer": 0,
        "why": "SO₂ andNOx form acidic substances in the atmosphere.",
        "id": "atmosphere.combustion-pollution.c2",
        "concept": "atmosphere.combustion-pollution"
      },
      {
        "prompt": "What is global dimming?",
        "options": [
          "Reduced sunlight at the surface due to particulates",
          "The same mechanism as greenhouse absorption of infrared",
          "The disappearance of all sunlight"
        ],
        "answer": 0,
        "why": "Particles scatter or absorb incoming radiation.",
        "id": "atmosphere.combustion-pollution.c3",
        "concept": "atmosphere.combustion-pollution"
      },
      {
        "prompt": "Complete combustion of pure methane produces which substances?",
        "options": [
          "Carbon dioxide and water",
          "Sulfur dioxide and calcium oxide",
          "Only carbon monoxide"
        ],
        "answer": 0,
        "why": "Methane contains carbon and hydrogen; complete oxidation formsCO₂ andH₂O.",
        "id": "atmosphere.combustion-pollution.c4",
        "concept": "atmosphere.combustion-pollution"
      },
      {
        "prompt": "Which statement about soot is correct?",
        "options": [
          "It includes solid carbon particles",
          "It is the chemical formula forCO₂",
          "It is always invisible nitrogen gas"
        ],
        "answer": 0,
        "why": "Soot particles are distinct from gaseous carbon oxides.",
        "id": "atmosphere.combustion-pollution.c5",
        "concept": "atmosphere.combustion-pollution"
      },
      {
        "id": "atmosphere.combustion-pollution.c6",
        "prompt": "Which pollutant group can cause respiratory problems as well as acid rain?",
        "options": [
          "Sulfur dioxide and nitrogen oxides",
          "Helium and neon",
          "Pure water and argon"
        ],
        "answer": 0,
        "why": "SO₂ and NOx can harm the respiratory system and contribute to acid rain.",
        "concept": "atmosphere.combustion-pollution"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ]
  }
];
export const atmosphereCompletionConcepts={
  "atmosphere.evolving-air": "The evolving atmosphere",
  "atmosphere.oxygen-carbon-stores": "Oxygen and carbon stores",
  "atmosphere.greenhouse-effect": "How greenhouse gases warm Earth",
  "atmosphere.climate-evidence": "Climate evidence and consequences",
  "atmosphere.carbon-footprints": "Comparing carbon footprints",
  "atmosphere.combustion-pollution": "Combustion and air pollution"
};
