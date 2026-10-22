export const resourcesCompletionLessons=[
  {
    "id": "science.chemistry.resources.sustainable-resources",
    "title": "Resources and sustainable development",
    "short": "Resources and sustainable development",
    "refs": [
      "10.1.1"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "People use resources for warmth, shelter, food and transport. Finite resources are used faster than geological processes replace them: metal ores and fossil fuels are examples. Renewable resources can be replenished on a useful timescale, but only if managed appropriately. A renewable source is not automatically impact-free or unlimited.",
    "learn": [
      {
        "title": "Distinguish a stock from a supply.",
        "text": "People use resources for warmth, shelter, food and transport. Finite resources are used faster than geological processes replace them: metal ores and fossil fuels are examples. Renewable resources can be replenished on a useful timescale, but only if managed appropriately. A renewable source is not automatically impact-free or unlimited.",
        "scene": "catalog:science.chemistry.resources.sustainable-resources"
      },
      {
        "title": "Compare alternatives.",
        "text": "Agriculture supplements natural food, timber, fibres and fuels; synthetic materials can replace natural products. Examples include manufactured polymers replacing some natural fibres or rubber uses. Chemistry improves agricultural and industrial processes, helping make useful products while reducing waste and resource demand. Evaluate the stated use rather than assuming natural always means better.",
        "scene": "catalog:science.chemistry.resources.sustainable-resources"
      },
      {
        "title": "Read resource data critically.",
        "text": "Sustainable development meets present needs without undermining future generations’ ability to meet theirs. Compare quantities with consistent units, identify trends and use orders of magnitude to judge scale. An estimate of remaining reserves depends on consumption, discoveries, technology and economic viability; it is not a fixed date when an element ceases to exist.",
        "scene": "catalog:science.chemistry.resources.sustainable-resources"
      }
    ],
    "lab": [
      {
        "title": "Compare scale",
        "prompt": "A design uses 4 tonnes of material and another uses 400 kg. Calculate the ratio of the first to second.",
        "fields": [
          {
            "key": "ratio",
            "label": "Ratio",
            "type": "number",
            "answer": 10,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Design",
            "Material"
          ],
          "rows": [
            [
              "A",
              "4tonnes"
            ],
            [
              "B",
              "400kg"
            ]
          ]
        },
        "success": "4000÷400=10. The difference is one order of magnitude.",
        "feedback": "Convert 4 tonnes to 4000 kg before dividing.",
        "id": "science.chemistry.resources.sustainable-resources.lab1"
      },
      {
        "title": "Test renewability",
        "prompt": "A forest grows 600 tonnes each year while 900 tonnes are removed. Is this harvest maintained by annual regrowth?",
        "fields": [
          {
            "key": "renew",
            "label": "Judgement",
            "type": "select",
            "options": [
              {
                "value": "No:harvest exceeds replacement",
                "label": "No:harvest exceeds replacement"
              },
              {
                "value": "Yes:any plant resource is unlimited",
                "label": "Yes:any plant resource is unlimited"
              },
              {
                "value": "Yes:all carbon disappears",
                "label": "Yes:all carbon disappears"
              }
            ],
            "answer": "No:harvest exceeds replacement"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Annual flow",
            "tonnes"
          ],
          "rows": [
            [
              "Growth",
              "600"
            ],
            [
              "Harvest",
              "900"
            ]
          ]
        },
        "success": "Harvest exceeds regrowth by 300 tonnes per year.",
        "feedback": "Compare replacement with removal, not only the word renewable.",
        "id": "science.chemistry.resources.sustainable-resources.lab2"
      },
      {
        "title": "Choose evidence",
        "prompt": "A synthetic fabric is advertised as better because it is synthetic. Select the missing evidence.",
        "fields": [
          {
            "key": "compare",
            "label": "Needed evidence",
            "type": "select",
            "options": [
              {
                "value": "Comparable life-cycle and performance data",
                "label": "Comparable life-cycle and performance data"
              },
              {
                "value": "Only the product colour",
                "label": "Only the product colour"
              },
              {
                "value": "A claim that natural means harmless",
                "label": "A claim that natural means harmless"
              }
            ],
            "answer": "Comparable life-cycle and performance data"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Same clothing function",
            "Resource and performance evidence",
            "Justified comparison"
          ]
        },
        "success": "Compare alternatives for the same function using evidence.",
        "feedback": "A label describing origin does not quantify impacts.",
        "id": "science.chemistry.resources.sustainable-resources.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Which is a finite resource?",
        "options": [
          "Copper ore",
          "Managed woodland replacing harvested trees",
          "Wind"
        ],
        "answer": 0,
        "why": "Ore deposits do not replenish on a human timescale.",
        "id": "resources.sustainable-resources.p1",
        "concept": "resources.sustainable-resources"
      },
      {
        "prompt": "Which statement best expresses sustainable development?",
        "options": [
          "Meet present needs while protecting future generations’ ability to meet theirs",
          "Use every reserve as quickly as possible",
          "Stop all material use instantly"
        ],
        "answer": 0,
        "why": "Sustainability considers both current and future needs.",
        "id": "resources.sustainable-resources.p2",
        "concept": "resources.sustainable-resources"
      },
      {
        "prompt": "A process uses 2000 kg while a replacement uses 200 kg. How many times larger is the first use?",
        "type": "number",
        "answer": 10,
        "unit": "times",
        "tolerance": 0.01,
        "why": "2000÷200=10, one order of magnitude.",
        "id": "resources.sustainable-resources.p3",
        "concept": "resources.sustainable-resources"
      }
    ],
    "check": [
      {
        "prompt": "When is timber use renewable in practice?",
        "options": [
          "When growth and management can replace harvesting",
          "Whenever trees are cut regardless of regrowth",
          "Only when it is made from metal"
        ],
        "answer": 0,
        "why": "Renewal depends on replacement over an appropriate timescale.",
        "id": "resources.sustainable-resources.c1",
        "concept": "resources.sustainable-resources"
      },
      {
        "prompt": "Which is a reasonable comparison of natural and synthetic products?",
        "options": [
          "Assess function,resource use and environmental impacts",
          "Natural always has no environmental impact",
          "Synthetic always contains no finite resources"
        ],
        "answer": 0,
        "why": "Origin alone does not establish impact.",
        "id": "resources.sustainable-resources.c2",
        "concept": "resources.sustainable-resources"
      },
      {
        "prompt": "A resource use falls from 500 kg to 400 kg. Percentage reduction?",
        "type": "number",
        "answer": 20,
        "unit": "%",
        "tolerance": 0.01,
        "why": "100÷500×100=20%.",
        "id": "resources.sustainable-resources.c3",
        "concept": "resources.sustainable-resources"
      },
      {
        "prompt": "Why might an estimate of usable ore reserves change?",
        "options": [
          "Prices and extraction technology can change what is viable",
          "Copper atoms are routinely destroyed",
          "Consumption has no effect"
        ],
        "answer": 0,
        "why": "Reserves are economically and technically accessible resources.",
        "id": "resources.sustainable-resources.c4",
        "concept": "resources.sustainable-resources"
      },
      {
        "prompt": "Which data comparison is valid?",
        "options": [
          "Convert both quantities to the same units first",
          "Compare1000g with2kg as1000versus2 directly",
          "Ignore scale on a chart"
        ],
        "answer": 0,
        "why": "Consistent units are essential.",
        "id": "resources.sustainable-resources.c5",
        "concept": "resources.sustainable-resources"
      }
    ],
    "skills": [
      "WS3.2",
      "MS2c",
      "MS4a",
      "MS2h"
    ]
  },
  {
    "id": "science.chemistry.resources.potable-water",
    "title": "Making water potable",
    "short": "Making water potable",
    "refs": [
      "10.1.2"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "Potable water is safe to drink: dissolved salts and microbes must be at sufficiently low levels. It is not chemically pureH₂O, because safe drinking water can contain dissolved substances. Clear water is not necessarily safe, and measuring pH alone cannot establish that pathogens or toxic substances are absent.",
    "learn": [
      {
        "title": "Safe is not chemically pure.",
        "text": "Potable water is safe to drink: dissolved salts and microbes must be at sufficiently low levels. It is not chemically pureH₂O, because safe drinking water can contain dissolved substances. Clear water is not necessarily safe, and measuring pH alone cannot establish that pathogens or toxic substances are absent.",
        "scene": "catalog:science.chemistry.resources.potable-water"
      },
      {
        "title": "Treat a suitable freshwater source.",
        "text": "In the UK, rain supplies freshwater collected in reservoirs, rivers and groundwater. Treatment selects a suitable source, filters through beds to remove particles and sterilises to control microbes. Chlorine, ozone or ultraviolet light may sterilise water. Filtration alone does not reliably remove dissolved salts or all microorganisms.",
        "scene": "catalog:science.chemistry.resources.potable-water"
      },
      {
        "title": "Choose desalination when needed.",
        "text": "Seawater has too much dissolved salt for drinking. Distillation evaporates water then condenses the vapour separately, leaving salts behind. Reverse osmosis uses pressure and a membrane to separate water from dissolved salts. Both require substantial energy. Choose treatment using local supplies, contamination, cost and energy; do not assume every source requires the same process.",
        "scene": "catalog:science.chemistry.resources.potable-water"
      }
    ],
    "lab": [
      {
        "title": "Treat the impurity",
        "prompt": "A freshwater source contains suspended soil and microbes but acceptable salt levels. Choose the appropriate sequence.",
        "fields": [
          {
            "key": "sequence",
            "label": "Treatment",
            "type": "select",
            "options": [
              {
                "value": "Filtration then sterilisation",
                "label": "Filtration then sterilisation"
              },
              {
                "value": "Only add more dissolved salt",
                "label": "Only add more dissolved salt"
              },
              {
                "value": "Only check its colour",
                "label": "Only check its colour"
              }
            ],
            "answer": "Filtration then sterilisation"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Freshwater source",
            "Suspended solids and microbes",
            "Treatment decision"
          ]
        },
        "success": "Filtration removes particles; sterilisation controls microbes.",
        "feedback": "Address both types of contamination.",
        "id": "science.chemistry.resources.potable-water.lab1"
      },
      {
        "title": "Separate seawater",
        "prompt": "Choose the process that can remove dissolved salt.",
        "fields": [
          {
            "key": "salt",
            "label": "Process",
            "type": "select",
            "options": [
              {
                "value": "Distillation or reverse osmosis",
                "label": "Distillation or reverse osmosis"
              },
              {
                "value": "A coarse filter alone",
                "label": "A coarse filter alone"
              },
              {
                "value": "UV alone",
                "label": "UV alone"
              }
            ],
            "answer": "Distillation or reverse osmosis"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Issue",
            "Required change"
          ],
          "rows": [
            [
              "High dissolved salt",
              "Separate water from salts"
            ]
          ]
        },
        "success": "Desalination targets dissolved salt; ordinary filtration andUV do not.",
        "feedback": "Match the separation method to dissolved material.",
        "id": "science.chemistry.resources.potable-water.lab2"
      },
      {
        "title": "Evaluate a claim",
        "prompt": "A clear sample haspH 7. Select the justified conclusion.",
        "fields": [
          {
            "key": "safe",
            "label": "Conclusion",
            "type": "select",
            "options": [
              {
                "value": "Insufficient evidence that it is safe to drink",
                "label": "Insufficient evidence that it is safe to drink"
              },
              {
                "value": "Proven pureH₂O",
                "label": "Proven pureH₂O"
              },
              {
                "value": "Proven free of microbes",
                "label": "Proven free of microbes"
              }
            ],
            "answer": "Insufficient evidence that it is safe to drink"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Observation",
            "Result"
          ],
          "rows": [
            [
              "Appearance",
              "Clear"
            ],
            [
              "pH",
              "7"
            ]
          ]
        },
        "success": "Neither appearance norpH rules out pathogens or harmful solutes.",
        "feedback": "Safety requires more than clarity and a neutralpH.",
        "id": "science.chemistry.resources.potable-water.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Which definition describes potable water?",
        "options": [
          "Water safe to drink",
          "Water containing onlyH₂O molecules",
          "Any transparent liquid"
        ],
        "answer": 0,
        "why": "Potability concerns safety, not chemical purity.",
        "id": "resources.potable-water.p1",
        "concept": "resources.potable-water"
      },
      {
        "prompt": "Which process mainly removes suspended particles?",
        "options": [
          "Filtration",
          "Sterilisation byUV alone",
          "Adding more salt"
        ],
        "answer": 0,
        "why": "Filter beds remove solid particles.",
        "id": "resources.potable-water.p2",
        "concept": "resources.potable-water"
      },
      {
        "prompt": "Which is a sterilising treatment?",
        "options": [
          "Ultraviolet light",
          "Simple coarse sieving only",
          "Adding sand without filtration"
        ],
        "answer": 0,
        "why": "UV can inactivate microorganisms.",
        "id": "resources.potable-water.p3",
        "concept": "resources.potable-water"
      }
    ],
    "check": [
      {
        "prompt": "Why may seawater need desalination?",
        "options": [
          "It contains excessive dissolved salts",
          "It never containsH₂O",
          "It is always chemically pure"
        ],
        "answer": 0,
        "why": "Salt levels must be reduced.",
        "id": "resources.potable-water.c1",
        "concept": "resources.potable-water"
      },
      {
        "prompt": "In distillation, what is collected after condensation?",
        "options": [
          "Water separated from nonvolatile dissolved salts",
          "All the original salts as vapour",
          "Only dry oxygen"
        ],
        "answer": 0,
        "why": "Water evaporates and condenses; dissolved salts largely remain.",
        "id": "resources.potable-water.c2",
        "concept": "resources.potable-water"
      },
      {
        "prompt": "What is a drawback of desalination?",
        "options": [
          "Large energy demand",
          "It always destroys water atoms",
          "It never works with seawater"
        ],
        "answer": 0,
        "why": "Separating water from salt requires energy.",
        "id": "resources.potable-water.c3",
        "concept": "resources.potable-water"
      },
      {
        "prompt": "Which treatment uses pressure and a membrane?",
        "options": [
          "Reverse osmosis",
          "Rusting",
          "Fractional cracking"
        ],
        "answer": 0,
        "why": "Reverse osmosis separates through a membrane under pressure.",
        "id": "resources.potable-water.c4",
        "concept": "resources.potable-water"
      },
      {
        "prompt": "Does neutral pH prove a sample is potable?",
        "options": [
          "No,it may still contain microbes or harmful dissolved substances",
          "Yes,neutral water contains no impurities",
          "Yes,all microbes require acid"
        ],
        "answer": 0,
        "why": "One measurement cannot establish safety.",
        "id": "resources.potable-water.c5",
        "concept": "resources.potable-water"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.resources.water-practical",
    "title": "Analysing and purifying water",
    "short": "Analysing and purifying water",
    "refs": [
      "10.1.2"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "Chemistry required practical 8 / Trilogy activity 13 analyses water samples from different sources, includingpH, dissolved solids and distillation. MeasurepH with suitable equipment using a consistent method. Compare equal sample volumes when judging evaporation residues. Samples are not for tasting; follow supervised school procedures, eye protection and heating instructions.",
    "learn": [
      {
        "title": "Plan a comparison.",
        "text": "Chemistry required practical 8 / Trilogy activity 13 analyses water samples from different sources, includingpH, dissolved solids and distillation. MeasurepH with suitable equipment using a consistent method. Compare equal sample volumes when judging evaporation residues. Samples are not for tasting; follow supervised school procedures, eye protection and heating instructions.",
        "scene": "catalog:science.chemistry.resources.water-practical"
      },
      {
        "title": "Measure dissolved solids.",
        "text": "Weigh a clean, dry evaporating basin, add a measured sample and heat safely to evaporate the water. Allow the basin to cool before reweighing; repeat heating/cooling/weighing to constant mass where appropriate. Residue mass equals final basin-plus-residue mass minus empty-basin mass. Residues indicate nonvolatile dissolved material, not the identity of every impurity.",
        "scene": "catalog:science.chemistry.resources.water-practical"
      },
      {
        "title": "Recover distilled water.",
        "text": "Heat the sample in suitable distillation apparatus. Water vapour travels to a condenser, where cooling converts it back to liquid collected separately. Cooling water enters the condenser jacket at the bottom and exits at the top so the jacket stays full. Do not seal heated apparatus. Distillation removes dissolved salts in this school model but does not by itself certify every possible sample safe for drinking.",
        "scene": "catalog:science.chemistry.resources.water-practical"
      }
    ],
    "lab": [
      {
        "title": "Calculate a residue",
        "prompt": "A 25 cm³ sample is evaporated. Calculate the dry-residue mass.",
        "fields": [
          {
            "key": "residue",
            "label": "Residue /g",
            "type": "number",
            "answer": 0.12,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Measurement",
            "Mass /g"
          ],
          "rows": [
            [
              "Empty basin",
              "41.25"
            ],
            [
              "Basin plus residue",
              "41.37"
            ]
          ]
        },
        "success": "41.37−41.25=0.12 g.",
        "feedback": "Subtract the empty-container mass from the final mass.",
        "id": "science.chemistry.resources.water-practical.lab1"
      },
      {
        "title": "Compare samples fairly",
        "prompt": "SampleA:25 cm³ leaves 0.10 g. SampleB:50 cm³ leaves 0.16 g. CalculateB’s residue per 25 cm³.",
        "fields": [
          {
            "key": "normalise",
            "label": "B residue per25cm³ /g",
            "type": "number",
            "answer": 0.08,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Sample",
            "Volume /cm³",
            "Residue /g"
          ],
          "rows": [
            [
              "A",
              "25",
              "0.1"
            ],
            [
              "B",
              "50",
              "0.16"
            ]
          ]
        },
        "success": "B gives 0.08 g per 25 cm³, less thanA. Raw residue masses alone mislead.",
        "feedback": "HalveB’s residue to compare equal volumes.",
        "id": "science.chemistry.resources.water-practical.lab2"
      },
      {
        "title": "Inspect the apparatus",
        "prompt": "Choose the condenser connection and apparatus condition.",
        "fields": [
          {
            "key": "inlet",
            "label": "Cooling-water inlet",
            "type": "select",
            "options": [
              {
                "value": "Lower jacket connection",
                "label": "Lower jacket connection"
              },
              {
                "value": "Upper jacket connection only",
                "label": "Upper jacket connection only"
              },
              {
                "value": "Directly into boiling sample",
                "label": "Directly into boiling sample"
              }
            ],
            "answer": "Lower jacket connection"
          },
          {
            "key": "sealed",
            "label": "Heated apparatus",
            "type": "select",
            "options": [
              {
                "value": "Must have a safe open route;do not seal",
                "label": "Must have a safe open route;do not seal"
              },
              {
                "value": "Seal every outlet",
                "label": "Seal every outlet"
              },
              {
                "value": "Remove all cooling water",
                "label": "Remove all cooling water"
              }
            ],
            "answer": "Must have a safe open route;do not seal"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Heated sample",
            "Vapour",
            "Water-cooled condenser",
            "Separate receiver"
          ]
        },
        "success": "Bottom-entry cooling fills the jacket; a safe vapour route avoids pressure build-up.",
        "feedback": "Distinguish cooling-jacket water from the vapour path; heated apparatus must not be sealed.",
        "id": "science.chemistry.resources.water-practical.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Empty basin 32.40 g; basin plus dry residue 32.58 g. Residue mass?",
        "type": "number",
        "answer": 0.18,
        "unit": "g",
        "tolerance": 0.01,
        "why": "32.58−32.40=0.18 g.",
        "id": "resources.water-practical.p1",
        "concept": "resources.water-practical"
      },
      {
        "prompt": "Why compare equal water volumes?",
        "options": [
          "A larger volume can leave more residue even at the same concentration",
          "Volume cannot affect residue mass",
          "Equal volumes sterilise samples"
        ],
        "answer": 0,
        "why": "Control volume to compare dissolved-solids content fairly.",
        "id": "resources.water-practical.p2",
        "concept": "resources.water-practical"
      },
      {
        "prompt": "Why cool a basin before weighing?",
        "options": [
          "Hot equipment affects weighing and handling",
          "Cooling creates extra dissolved salt",
          "Cooling guarantees sterility"
        ],
        "answer": 0,
        "why": "Use safe, consistent weighing conditions.",
        "id": "resources.water-practical.p3",
        "concept": "resources.water-practical"
      }
    ],
    "check": [
      {
        "prompt": "Which practical components are required here?",
        "options": [
          "pH,dissolved solids and distillation",
          "Only colour",
          "Only a taste test"
        ],
        "answer": 0,
        "why": "AQA names these three elements.",
        "id": "resources.water-practical.c1",
        "concept": "resources.water-practical"
      },
      {
        "prompt": "A 50 cm³ sample leaves 0.25 g residue. Estimate residue in 100 cm³ of the same solution.",
        "type": "number",
        "answer": 0.5,
        "unit": "g",
        "tolerance": 0.01,
        "why": "Twice the volume contains twice the dissolved solids under the stated uniformity assumption.",
        "id": "resources.water-practical.c2",
        "concept": "resources.water-practical"
      },
      {
        "prompt": "Where should condenser cooling water enter?",
        "options": [
          "At the lower jacket connection",
          "Into the receiving distilled water directly",
          "Through the heated flask stopper without an outlet"
        ],
        "answer": 0,
        "why": "Bottom entry keeps the cooling jacket full.",
        "id": "resources.water-practical.c3",
        "concept": "resources.water-practical"
      },
      {
        "prompt": "What happens in the condenser?",
        "options": [
          "Water vapour changes to liquid",
          "Salt turns into hydrogen",
          "All microbes are measured"
        ],
        "answer": 0,
        "why": "Condensation is a physical state change.",
        "id": "resources.water-practical.c4",
        "concept": "resources.water-practical"
      },
      {
        "prompt": "What can evaporation residue establish on its own?",
        "options": [
          "The mass of nonvolatile material left by the tested volume",
          "The identity of every dissolved substance",
          "That the original sample was safe to drink"
        ],
        "answer": 0,
        "why": "Residue mass is limited evidence, not a complete chemical or biological analysis.",
        "id": "resources.water-practical.c5",
        "concept": "resources.water-practical"
      }
    ],
    "skills": [
      "AT2",
      "AT3",
      "AT4",
      "WS2.1",
      "WS2.2",
      "WS3.1",
      "MS1a"
    ]
  },
  {
    "id": "science.chemistry.resources.wastewater",
    "title": "Treating wastewater",
    "short": "Treating wastewater",
    "refs": [
      "10.1.3"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "Sewage and agricultural wastewater can contain organic matter and harmful microbes. Industrial wastewater may also contain harmful chemicals needing specific removal. Screening removes large objects; grit removal separates sand and similar heavy material. Treatment design depends on contaminants rather than assuming all wastewater has identical contents.",
    "learn": [
      {
        "title": "Remove large solids first.",
        "text": "Sewage and agricultural wastewater can contain organic matter and harmful microbes. Industrial wastewater may also contain harmful chemicals needing specific removal. Screening removes large objects; grit removal separates sand and similar heavy material. Treatment design depends on contaminants rather than assuming all wastewater has identical contents.",
        "scene": "catalog:science.chemistry.resources.wastewater"
      },
      {
        "title": "Separate sludge from effluent.",
        "text": "Sedimentation allows suspended solids to settle, forming sewage sludge, with liquid effluent above. Sludge and effluent then follow different treatment paths. Sludge undergoes anaerobic digestion without oxygen; effluent receives aerobic biological treatment with oxygen, allowing microorganisms to break down organic matter.",
        "scene": "catalog:science.chemistry.resources.wastewater"
      },
      {
        "title": "Compare starting points.",
        "text": "Groundwater may need less treatment than heavily polluted sewage, while seawater requires energy-intensive desalination. The relative ease depends on local contamination and the quality required. Treating wastewater for environmental discharge and producing potable water are different targets; a sewage-treatment diagram alone does not guarantee drinking quality.",
        "scene": "catalog:science.chemistry.resources.wastewater"
      }
    ],
    "lab": [
      {
        "title": "Route the solid fraction",
        "prompt": "After sedimentation, choose the treatment for sludge.",
        "fields": [
          {
            "key": "sludge",
            "label": "Sludge treatment",
            "type": "select",
            "options": [
              {
                "value": "Anaerobic digestion",
                "label": "Anaerobic digestion"
              },
              {
                "value": "Aerobic treatment as the effluent route",
                "label": "Aerobic treatment as the effluent route"
              },
              {
                "value": "Use as drinking water immediately",
                "label": "Use as drinking water immediately"
              }
            ],
            "answer": "Anaerobic digestion"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Screening and grit removal",
            "Sedimentation",
            "Sludge +effluent"
          ]
        },
        "success": "Sludge goes to anaerobic digestion.",
        "feedback": "Keep the solid-rich sludge and liquid effluent routes distinct.",
        "id": "science.chemistry.resources.wastewater.lab1"
      },
      {
        "title": "Route the liquid fraction",
        "prompt": "Choose the biological treatment for effluent.",
        "fields": [
          {
            "key": "effluent",
            "label": "Effluent treatment",
            "type": "select",
            "options": [
              {
                "value": "Aerobic biological treatment",
                "label": "Aerobic biological treatment"
              },
              {
                "value": "Anaerobic digestion as the sludge route",
                "label": "Anaerobic digestion as the sludge route"
              },
              {
                "value": "No treatment because it looks liquid",
                "label": "No treatment because it looks liquid"
              }
            ],
            "answer": "Aerobic biological treatment"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Liquid effluent",
            "Oxygen supply",
            "Microorganisms break down organic matter"
          ]
        },
        "success": "Effluent undergoes aerobic treatment.",
        "feedback": "Aerobic treatment requires oxygen.",
        "id": "science.chemistry.resources.wastewater.lab2"
      },
      {
        "title": "Select source-specific treatment",
        "prompt": "Industrial water contains a dissolved toxic chemical after biological treatment. Choose the next judgement.",
        "fields": [
          {
            "key": "chemical",
            "label": "Judgement",
            "type": "select",
            "options": [
              {
                "value": "Identify and remove the chemical with suitable additional treatment",
                "label": "Identify and remove the chemical with suitable additional treatment"
              },
              {
                "value": "Assume biology removes every chemical",
                "label": "Assume biology removes every chemical"
              },
              {
                "value": "Declare it potable because it is clear",
                "label": "Declare it potable because it is clear"
              }
            ],
            "answer": "Identify and remove the chemical with suitable additional treatment"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Test",
            "Result"
          ],
          "rows": [
            [
              "Organic matter",
              "Reduced"
            ],
            [
              "Toxic dissolved chemical",
              "Still present"
            ]
          ]
        },
        "success": "A successful biological stage does not remove every possible contaminant.",
        "feedback": "Use the chemical-test evidence, not appearance alone.",
        "id": "science.chemistry.resources.wastewater.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "What is removed by screening?",
        "options": [
          "Large solid objects",
          "All dissolved salt",
          "All individual water molecules"
        ],
        "answer": 0,
        "why": "Screens catch large debris.",
        "id": "resources.wastewater.p1",
        "concept": "resources.wastewater"
      },
      {
        "prompt": "What forms at the bottom during sedimentation?",
        "options": [
          "Sludge",
          "Only oxygen",
          "Pure distilled water"
        ],
        "answer": 0,
        "why": "Settling suspended solids form sludge.",
        "id": "resources.wastewater.p2",
        "concept": "resources.wastewater"
      },
      {
        "prompt": "Which treatment is used for sewage sludge?",
        "options": [
          "Anaerobic digestion",
          "Only adding oxygen for aerobic effluent treatment",
          "Fractional distillation of crude oil"
        ],
        "answer": 0,
        "why": "Sludge digestion occurs without oxygen.",
        "id": "resources.wastewater.p3",
        "concept": "resources.wastewater"
      }
    ],
    "check": [
      {
        "prompt": "Which treatment is used for effluent?",
        "options": [
          "Aerobic biological treatment",
          "Heating until all nitrogen becomes metal",
          "Only screening after discharge"
        ],
        "answer": 0,
        "why": "Aerobic microorganisms use oxygen to break down organic matter.",
        "id": "resources.wastewater.c1",
        "concept": "resources.wastewater"
      },
      {
        "prompt": "What extra issue may industrial wastewater have?",
        "options": [
          "Harmful chemicals requiring specific removal",
          "It cannot contain water",
          "It is automatically sterile"
        ],
        "answer": 0,
        "why": "Treatment must address the actual contaminants.",
        "id": "resources.wastewater.c2",
        "concept": "resources.wastewater"
      },
      {
        "prompt": "Which statement distinguishes treatment targets?",
        "options": [
          "Safe environmental discharge does not automatically mean potable water",
          "Every effluent is immediately potable",
          "All treated water is chemically pure"
        ],
        "answer": 0,
        "why": "Water-quality requirements differ by use.",
        "id": "resources.wastewater.c3",
        "concept": "resources.wastewater"
      },
      {
        "prompt": "Which comparison is justified?",
        "options": [
          "Relative treatment effort depends on source contamination",
          "Seawater always needs only a coarse screen",
          "Sewage contains no organic matter"
        ],
        "answer": 0,
        "why": "Local conditions and contaminants determine treatment.",
        "id": "resources.wastewater.c4",
        "concept": "resources.wastewater"
      },
      {
        "prompt": "What does anaerobic mean?",
        "options": [
          "Without oxygen",
          "At exactly100°C",
          "Containing only salt"
        ],
        "answer": 0,
        "why": "Anaerobic digestion proceeds without oxygen.",
        "id": "resources.wastewater.c5",
        "concept": "resources.wastewater"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.resources.biological-extraction",
    "title": "Biological metal extraction",
    "short": "Biological metal extraction",
    "refs": [
      "10.1.4"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "Metal ores are finite and some accessible copper deposits are becoming lower grade. Biological extraction can recover metal compounds while avoiding some digging, moving and disposal of large amounts of rock. Evaluate recovery, energy, time, land use and pollution using given evidence; biological does not automatically mean harmless or economically best.",
    "learn": [
      {
        "title": "Use low-grade sources.",
        "text": "Metal ores are finite and some accessible copper deposits are becoming lower grade. Biological extraction can recover metal compounds while avoiding some digging, moving and disposal of large amounts of rock. Evaluate recovery, energy, time, land use and pollution using given evidence; biological does not automatically mean harmless or economically best.",
        "scene": "catalog:science.chemistry.resources.biological-extraction"
      },
      {
        "title": "Follow each route.",
        "text": "In phytomining, plants absorb metal compounds from soil. Harvesting and burning produces ash containing the metal compounds; it does not produce a pile of pure copper directly. In bioleaching, bacteria help produce a leachate solution containing metal compounds. The solution still needs processing to recover the metal.",
        "scene": "catalog:science.chemistry.resources.biological-extraction"
      },
      {
        "title": "Recover the metal.",
        "text": "Copper can be displaced from a copper-compound solution by more reactive scrap iron. Electrolysis is another possible recovery step. Compare extraction routes on the same quantity of recovered metal, and include downstream processing. Slower growth or bacterial processing may be a limitation even where mining impacts are reduced.",
        "scene": "catalog:science.chemistry.resources.biological-extraction"
      }
    ],
    "lab": [
      {
        "title": "Complete phytomining",
        "prompt": "Choose the correct state after harvested plants are burned.",
        "fields": [
          {
            "key": "ash",
            "label": "Product",
            "type": "select",
            "options": [
              {
                "value": "Ash containing metal compounds",
                "label": "Ash containing metal compounds"
              },
              {
                "value": "Pure copper ready for wiring",
                "label": "Pure copper ready for wiring"
              },
              {
                "value": "Nitrogen-only residue",
                "label": "Nitrogen-only residue"
              }
            ],
            "answer": "Ash containing metal compounds"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Metal-compound uptake",
            "Harvest",
            "Burn",
            "Further recovery"
          ]
        },
        "success": "Burning concentrates compounds in ash; recovery is still required.",
        "feedback": "Do not skip the distinction between a compound and a metal.",
        "id": "science.chemistry.resources.biological-extraction.lab1"
      },
      {
        "title": "Recover copper",
        "prompt": "Choose a metal that can displace copper given the stated order.",
        "fields": [
          {
            "key": "metal",
            "label": "Added metal",
            "type": "select",
            "options": [
              {
                "value": "Iron",
                "label": "Iron"
              },
              {
                "value": "Silver",
                "label": "Silver"
              },
              {
                "value": "Gold",
                "label": "Gold"
              }
            ],
            "answer": "Iron"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Relative reactivity",
            "Metal"
          ],
          "rows": [
            [
              "More reactive",
              "Iron"
            ],
            [
              "Then",
              "Copper"
            ],
            [
              "Less reactive",
              "Silver,Gold"
            ]
          ]
        },
        "success": "Iron displaces copper because it is more reactive.",
        "feedback": "The added metal must lie above copper in the reactivity order.",
        "id": "science.chemistry.resources.biological-extraction.lab2"
      },
      {
        "title": "Compare recovery",
        "prompt": "RouteA recovers 8 kg from 10 kg available; B recovers 9 kg. CalculateB’s recovery percentage.",
        "fields": [
          {
            "key": "yield",
            "label": "B recovery /%",
            "type": "number",
            "answer": 90,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Route",
            "Recovered /kg",
            "Time /days"
          ],
          "rows": [
            [
              "A",
              "8",
              "2"
            ],
            [
              "B",
              "9",
              "20"
            ]
          ]
        },
        "success": "B recovers 90%, but its longer duration is also relevant.",
        "feedback": "Calculate recovered÷available×100, and keep recovery separate from speed.",
        "id": "science.chemistry.resources.biological-extraction.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "What does phytomining harvest?",
        "options": [
          "Plants containing absorbed metal compounds",
          "Ready-made pure copper sheets",
          "Only atmospheric oxygen"
        ],
        "answer": 0,
        "why": "Plants concentrate compounds that require further processing.",
        "id": "resources.biological-extraction.p1",
        "concept": "resources.biological-extraction"
      },
      {
        "prompt": "What does burning harvested plants leave?",
        "options": [
          "Ash containing metal compounds",
          "Guaranteed pure copper without further treatment",
          "Only water"
        ],
        "answer": 0,
        "why": "The ash still needs metal recovery.",
        "id": "resources.biological-extraction.p2",
        "concept": "resources.biological-extraction"
      },
      {
        "prompt": "What is a leachate in this context?",
        "options": [
          "A solution containing metal compounds",
          "A pure metal bar",
          "An alloy of gold"
        ],
        "answer": 0,
        "why": "Bioleaching produces a solution for further processing.",
        "id": "resources.biological-extraction.p3",
        "concept": "resources.biological-extraction"
      }
    ],
    "check": [
      {
        "prompt": "Why can scrap iron recover copper from solution?",
        "options": [
          "Iron is more reactive than copper",
          "Iron is less reactive than copper",
          "Iron destroys the copper atoms"
        ],
        "answer": 0,
        "why": "A more reactive metal displaces a less reactive one.",
        "id": "resources.biological-extraction.c1",
        "concept": "resources.biological-extraction"
      },
      {
        "prompt": "Which is another way to recover copper from its compounds?",
        "options": [
          "Electrolysis",
          "Simple colour matching",
          "Condensing nitrogen"
        ],
        "answer": 0,
        "why": "Electrical energy can drive metal recovery.",
        "id": "resources.biological-extraction.c2",
        "concept": "resources.biological-extraction"
      },
      {
        "prompt": "An illustrative crop gives 2 kg copper per harvested plot. How many plots supply 10 kg?",
        "type": "number",
        "answer": 5,
        "unit": "plots",
        "tolerance": 0,
        "why": "10÷2=5 under the stated equal-yield assumption.",
        "id": "resources.biological-extraction.c3",
        "concept": "resources.biological-extraction"
      },
      {
        "prompt": "Which evidence is needed to evaluate a biological route?",
        "options": [
          "Recovery,time,energy and environmental impacts",
          "Only that living organisms are involved",
          "Only the colour of the plants"
        ],
        "answer": 0,
        "why": "Comparison requires benefits and limitations.",
        "id": "resources.biological-extraction.c4",
        "concept": "resources.biological-extraction"
      },
      {
        "prompt": "Which claim overstates the method?",
        "options": [
          "Bioleaching always has no environmental impact",
          "Bioleaching produces a metal-compound solution",
          "Further processing may recover copper"
        ],
        "answer": 0,
        "why": "Leachates and processing can still have environmental impacts.",
        "id": "resources.biological-extraction.c5",
        "concept": "resources.biological-extraction"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ],
    "higher": true
  },
  {
    "id": "science.chemistry.resources.life-cycle-assessment",
    "title": "Life-cycle assessments",
    "short": "Life-cycle assessments",
    "refs": [
      "10.2.1"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "A life-cycle assessment considers environmental impacts from raw-material extraction and processing, manufacture and packaging, use, and disposal. Include transport and distribution at every relevant stage. Compare products providing the same service: a reusable shopping bag should be compared over a stated number of shopping trips, not just against one disposable bag regardless of use.",
    "learn": [
      {
        "title": "Define the comparison.",
        "text": "A life-cycle assessment considers environmental impacts from raw-material extraction and processing, manufacture and packaging, use, and disposal. Include transport and distribution at every relevant stage. Compare products providing the same service: a reusable shopping bag should be compared over a stated number of shopping trips, not just against one disposable bag regardless of use.",
        "scene": "catalog:science.chemistry.resources.life-cycle-assessment"
      },
      {
        "title": "Quantify what can be measured.",
        "text": "Energy, water, raw-material use and some wastes can be measured or estimated. Keep categories and units separate rather than adding kilograms of waste directly to litres of water. Reuse can spread a larger manufacturing impact over many uses, but cleaning and transport may add impacts. Use supplied data and state the assumptions.",
        "scene": "catalog:science.chemistry.resources.life-cycle-assessment"
      },
      {
        "title": "Expose value judgements.",
        "text": "Assigning a number to the harm caused by different pollutants is less straightforward and involves value judgements. Selective boundaries, missing stages and abbreviated comparisons can support misleading advertising. A product may score better in one category and worse in another: explain the trade-off instead of declaring every LCA purely objective.",
        "scene": "catalog:science.chemistry.resources.life-cycle-assessment"
      }
    ],
    "lab": [
      {
        "title": "Add relevant stages",
        "prompt": "Calculate the energy total for this illustrative bag.",
        "fields": [
          {
            "key": "energy",
            "label": "Total /energy units",
            "type": "number",
            "answer": 24,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Stage",
            "Energy"
          ],
          "rows": [
            [
              "Materials",
              "8"
            ],
            [
              "Manufacture",
              "10"
            ],
            [
              "Transport",
              "4"
            ],
            [
              "Disposal",
              "2"
            ]
          ]
        },
        "success": "8+10+4+2=24 units.",
        "feedback": "Include extraction through disposal and transport.",
        "id": "science.chemistry.resources.life-cycle-assessment.lab1"
      },
      {
        "title": "Compare repeated use",
        "prompt": "Disposable bag:3 units each trip. Reusable bag:36 to make, 0.5 per trip. At 20 trips, calculate reusable total.",
        "fields": [
          {
            "key": "reuse",
            "label": "Reusable /energy units",
            "type": "number",
            "answer": 46,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Option",
            "Making",
            "Each trip"
          ],
          "rows": [
            [
              "Disposable",
              "0",
              "3"
            ],
            [
              "Reusable",
              "36",
              "0.5"
            ]
          ]
        },
        "success": "36+20×0.5=46 units, compared with 60 for the disposable option.",
        "feedback": "Include both the initial investment and repeated-use impacts.",
        "id": "science.chemistry.resources.life-cycle-assessment.lab2"
      },
      {
        "title": "Challenge the advertisement",
        "prompt": "An advert compares energy but says nothing about water, waste or disposal. Select the supported judgement.",
        "fields": [
          {
            "key": "claim",
            "label": "Judgement",
            "type": "select",
            "options": [
              {
                "value": "Energy evidence alone cannot prove lowest overall impact",
                "label": "Energy evidence alone cannot prove lowest overall impact"
              },
              {
                "value": "The product has no environmental impacts",
                "label": "The product has no environmental impacts"
              },
              {
                "value": "Omitted categories must all be zero",
                "label": "Omitted categories must all be zero"
              }
            ],
            "answer": "Energy evidence alone cannot prove lowest overall impact"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Selected energy data",
            "Missing impact categories",
            "Qualified conclusion"
          ]
        },
        "success": "A limited comparison needs a limited conclusion.",
        "feedback": "Check boundaries before accepting an overall claim.",
        "id": "science.chemistry.resources.life-cycle-assessment.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Which stage belongs in an LCA?",
        "options": [
          "Disposal and transport as well as manufacture",
          "Only the factory stage",
          "Only packaging colour"
        ],
        "answer": 0,
        "why": "A full assessment covers all relevant life stages.",
        "id": "resources.life-cycle-assessment.p1",
        "concept": "resources.life-cycle-assessment"
      },
      {
        "prompt": "BagA uses 2 energy units per use. BagB uses 30 to make and 0.5 per use. After 20 uses, B total?",
        "type": "number",
        "answer": 40,
        "unit": "energy units",
        "tolerance": 0.01,
        "why": "30+20×0.5=40 units.",
        "id": "resources.life-cycle-assessment.p2",
        "concept": "resources.life-cycle-assessment"
      },
      {
        "prompt": "Why can twoLCAs reach different conclusions?",
        "options": [
          "Boundaries,data and impact weightings can differ",
          "Conservation of mass is false",
          "All measurements are always invented"
        ],
        "answer": 0,
        "why": "Some choices and pollutant valuations involve judgement.",
        "id": "resources.life-cycle-assessment.p3",
        "concept": "resources.life-cycle-assessment"
      }
    ],
    "check": [
      {
        "prompt": "What is a fair basis for comparing shopping bags?",
        "options": [
          "The same carrying service and stated number of trips",
          "One reusable bag versus unlimited disposable bags",
          "Only equal colour"
        ],
        "answer": 0,
        "why": "Compare the same function.",
        "id": "resources.life-cycle-assessment.c1",
        "concept": "resources.life-cycle-assessment"
      },
      {
        "prompt": "A reusable bag requires 48 energy units to make. Ignoring cleaning, energy per use after 24 uses?",
        "type": "number",
        "answer": 2,
        "unit": "units per use",
        "tolerance": 0.01,
        "why": "48÷24=2 units per use.",
        "id": "resources.life-cycle-assessment.c2",
        "concept": "resources.life-cycle-assessment"
      },
      {
        "prompt": "Which is a warning sign of a selectiveLCA?",
        "options": [
          "Disposal is omitted without explanation",
          "All stages and assumptions are documented",
          "Separate impact categories are shown"
        ],
        "answer": 0,
        "why": "An omitted stage may change the conclusion.",
        "id": "resources.life-cycle-assessment.c3",
        "concept": "resources.life-cycle-assessment"
      },
      {
        "prompt": "Can litres of water and kilograms of waste simply be added as one physical total?",
        "options": [
          "No,they measure different quantities",
          "Yes,units never matter",
          "Yes,if printed in the same table"
        ],
        "answer": 0,
        "why": "Different measures require separate reporting or explicit justified weighting.",
        "id": "resources.life-cycle-assessment.c4",
        "concept": "resources.life-cycle-assessment"
      },
      {
        "prompt": "Which conclusion is appropriate when one bag uses less energy but more water?",
        "options": [
          "Describe the trade-off and assumptions",
          "State it is automatically best in every respect",
          "Hide the water result"
        ],
        "answer": 0,
        "why": "A multidimensional comparison needs a reasoned judgement.",
        "id": "resources.life-cycle-assessment.c5",
        "concept": "resources.life-cycle-assessment"
      }
    ],
    "skills": [
      "WS1.3",
      "WS4",
      "WS5",
      "MS1a",
      "MS1c",
      "MS1d",
      "MS2a",
      "MS4a"
    ]
  },
  {
    "id": "science.chemistry.resources.reuse-recycling",
    "title": "Reducing,reusing and recycling",
    "short": "Reducing,reusing and recycling",
    "refs": [
      "10.2.2"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "Reducing material use, reusing products and recycling can reduce finite-resource demand, energy consumption, waste and environmental impact. Metals, glass, building materials, clay ceramics and most plastics depend on limited raw materials. Quarrying and mining disturb land and require energy; using less material can avoid some of these impacts.",
    "learn": [
      {
        "title": "Reduce demand first.",
        "text": "Reducing material use, reusing products and recycling can reduce finite-resource demand, energy consumption, waste and environmental impact. Metals, glass, building materials, clay ceramics and most plastics depend on limited raw materials. Quarrying and mining disturb land and require energy; using less material can avoid some of these impacts.",
        "scene": "catalog:science.chemistry.resources.reuse-recycling"
      },
      {
        "title": "Keep a product or recover a material.",
        "text": "Reusing a glass bottle preserves the product, but collection, transport and cleaning still have impacts. Recycling glass crushes and remelts it into glass products. Metals can be melted and recast or reformed. Some scrap steel is added to iron from a blast furnace, reducing the amount extracted from ore. Recycling is not the same as reusing.",
        "scene": "catalog:science.chemistry.resources.reuse-recycling"
      },
      {
        "title": "Purity and separation matter.",
        "text": "Sorting requirements depend on the material and the properties needed in the final product. Mixed scrap may be suitable for one use but not a high-purity application. Evaluate collection, transport, separation and processing costs against resource and energy savings; recovery is not always 100%, and recycling does not remove every environmental impact.",
        "scene": "catalog:science.chemistry.resources.reuse-recycling"
      }
    ],
    "lab": [
      {
        "title": "Identify the route",
        "prompt": "A bottle is crushed and remelted. Classify the route.",
        "fields": [
          {
            "key": "route",
            "label": "Route",
            "type": "select",
            "options": [
              {
                "value": "Recycling",
                "label": "Recycling"
              },
              {
                "value": "Reuse without reprocessing",
                "label": "Reuse without reprocessing"
              },
              {
                "value": "New extraction only",
                "label": "New extraction only"
              }
            ],
            "answer": "Recycling"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Used bottle",
            "Crush and melt",
            "New glass"
          ]
        },
        "success": "This is recycling; refilling the original bottle would be reuse.",
        "feedback": "Ask whether the same product survives or its material is reprocessed.",
        "id": "science.chemistry.resources.reuse-recycling.lab1"
      },
      {
        "title": "Calculate fresh demand",
        "prompt": "A maker needs 200 kg metal and can use 70 kg suitable scrap. How much fresh metal is needed?",
        "fields": [
          {
            "key": "fresh",
            "label": "Fresh metal /kg",
            "type": "number",
            "answer": 130,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Required",
            "Suitable scrap"
          ],
          "rows": [
            [
              "200kg",
              "70kg"
            ]
          ]
        },
        "success": "200−70=130 kg fresh metal is needed.",
        "feedback": "Subtract suitable recovered material from the total requirement.",
        "id": "science.chemistry.resources.reuse-recycling.lab2"
      },
      {
        "title": "Match purity to use",
        "prompt": "A high-conductivity application requires very pure copper. Mixed scrap contains other metals. Choose the decision.",
        "fields": [
          {
            "key": "sort",
            "label": "Decision",
            "type": "select",
            "options": [
              {
                "value": "Separate and refine to the required purity",
                "label": "Separate and refine to the required purity"
              },
              {
                "value": "Assume all mixed scrap is equivalent",
                "label": "Assume all mixed scrap is equivalent"
              },
              {
                "value": "Declare sorting always unnecessary",
                "label": "Declare sorting always unnecessary"
              }
            ],
            "answer": "Separate and refine to the required purity"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Application",
            "Requirement"
          ],
          "rows": [
            [
              "Electrical conductor",
              "High-purity copper"
            ],
            [
              "Scrap",
              "Mixed metals"
            ]
          ]
        },
        "success": "The required properties determine separation and refining.",
        "feedback": "Material identity and purity affect performance.",
        "id": "science.chemistry.resources.reuse-recycling.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Which example is reuse?",
        "options": [
          "Washing and refilling the same glass bottle",
          "Melting broken bottles into new glass",
          "Extracting fresh sand for a bottle"
        ],
        "answer": 0,
        "why": "Reuse retains the product rather than remaking the material.",
        "id": "resources.reuse-recycling.p1",
        "concept": "resources.reuse-recycling"
      },
      {
        "prompt": "Which example is recycling?",
        "options": [
          "Melting scrap metal and recasting it",
          "Using the same chair again",
          "Buying more ore"
        ],
        "answer": 0,
        "why": "Recycling processes recovered material into products.",
        "id": "resources.reuse-recycling.p2",
        "concept": "resources.reuse-recycling"
      },
      {
        "prompt": "A process recovers 72 kg glass from 90 kg collected. Recovery percentage?",
        "type": "number",
        "answer": 80,
        "unit": "%",
        "tolerance": 0.01,
        "why": "72÷90×100=80%.",
        "id": "resources.reuse-recycling.p3",
        "concept": "resources.reuse-recycling"
      }
    ],
    "check": [
      {
        "prompt": "Why might scrap need sorting?",
        "options": [
          "Final-product purity and properties matter",
          "All metals have identical properties",
          "Sorting creates new elements"
        ],
        "answer": 0,
        "why": "Contaminants can alter performance.",
        "id": "resources.reuse-recycling.c1",
        "concept": "resources.reuse-recycling"
      },
      {
        "prompt": "Why add scrap steel in steelmaking?",
        "options": [
          "Reduce the amount of fresh iron needed",
          "Eliminate all energy use",
          "Turn iron into gold"
        ],
        "answer": 0,
        "why": "Recovered metal replaces some ore-derived iron.",
        "id": "resources.reuse-recycling.c2",
        "concept": "resources.reuse-recycling"
      },
      {
        "prompt": "Which impact still matters for reusable bottles?",
        "options": [
          "Transport and cleaning",
          "None because reuse has zero impacts",
          "Only the label font"
        ],
        "answer": 0,
        "why": "Reuse still involves processes and energy.",
        "id": "resources.reuse-recycling.c3",
        "concept": "resources.reuse-recycling"
      },
      {
        "prompt": "Using recovered material cuts virgin feedstock from 120 kg to 45 kg. Saving?",
        "type": "number",
        "answer": 75,
        "unit": "kg",
        "tolerance": 0.01,
        "why": "120−45=75 kg.",
        "id": "resources.reuse-recycling.c4",
        "concept": "resources.reuse-recycling"
      },
      {
        "prompt": "Which judgement is evidence-led?",
        "options": [
          "Compare resource savings with collection and processing impacts",
          "Always claim recycling needs no energy",
          "Ignore material losses"
        ],
        "answer": 0,
        "why": "Benefits depend on the complete process.",
        "id": "resources.reuse-recycling.c5",
        "concept": "resources.reuse-recycling"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ]
  },
  {
    "id": "science.chemistry.resources.corrosion",
    "title": "Corrosion and protection",
    "short": "Corrosion and protection",
    "refs": [
      "10.3.1"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "Corrosion destroys materials through chemical reactions with substances in their environment. Iron rusts only when both air and water are available. A comparison can include iron in dry air, iron under boiled water with an oil barrier, and iron exposed to ordinary air and water. Controls are needed to isolate which condition is missing.",
    "learn": [
      {
        "title": "Test both conditions.",
        "text": "Corrosion destroys materials through chemical reactions with substances in their environment. Iron rusts only when both air and water are available. A comparison can include iron in dry air, iron under boiled water with an oil barrier, and iron exposed to ordinary air and water. Controls are needed to isolate which condition is missing.",
        "scene": "catalog:science.chemistry.resources.corrosion"
      },
      {
        "title": "Block access to the metal.",
        "text": "Paint, grease and electroplating can act as barriers to air and water. Their performance depends on an intact coating. Aluminium forms a thin oxide layer that protects it from further corrosion; this is why a reactive metal can appear resistant in everyday use. The protective surface layer is not evidence that aluminium is unreactive.",
        "scene": "catalog:science.chemistry.resources.corrosion"
      },
      {
        "title": "Use a more reactive metal.",
        "text": "A coating or connected piece of a more reactive metal can provide sacrificial protection. Zinc galvanising protects iron as a barrier and because zinc reacts preferentially. If zinc remains electrically connected, it can protect exposed iron even when scratched. A less reactive metal coating may be a barrier but does not supply this sacrificial protection.",
        "scene": "catalog:science.chemistry.resources.corrosion"
      }
    ],
    "lab": [
      {
        "title": "Interpret the tubes",
        "prompt": "Predict which setup rusts under the stated conditions.",
        "fields": [
          {
            "key": "rust",
            "label": "Rusting setup",
            "type": "select",
            "options": [
              {
                "value": "Air and water",
                "label": "Air and water"
              },
              {
                "value": "Dry air only",
                "label": "Dry air only"
              },
              {
                "value": "Boiled water isolated from air by oil",
                "label": "Boiled water isolated from air by oil"
              }
            ],
            "answer": "Air and water"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Tube",
            "Conditions"
          ],
          "rows": [
            [
              "A",
              "Dry air"
            ],
            [
              "B",
              "Water without air access"
            ],
            [
              "C",
              "Air and water"
            ]
          ]
        },
        "success": "C contains both required conditions.",
        "feedback": "Identify where both air and water can reach the iron.",
        "id": "science.chemistry.resources.corrosion.lab1"
      },
      {
        "title": "Choose a sacrificial metal",
        "prompt": "Given the order magnesium>zinc>iron>copper, select a suitable sacrificial metal from the choices.",
        "fields": [
          {
            "key": "metal",
            "label": "Connected metal",
            "type": "select",
            "options": [
              {
                "value": "Zinc",
                "label": "Zinc"
              },
              {
                "value": "Copper",
                "label": "Copper"
              },
              {
                "value": "Silver",
                "label": "Silver"
              }
            ],
            "answer": "Zinc"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "More reactive:Mg,Zn",
            "Iron",
            "Less reactive:Cu,Ag"
          ]
        },
        "success": "Zinc reacts preferentially and can protect iron.",
        "feedback": "Choose a metal above iron, not below it.",
        "id": "science.chemistry.resources.corrosion.lab2"
      },
      {
        "title": "Explain the scratch",
        "prompt": "A galvanised nail is scratched but zinc remains connected. Choose the best explanation.",
        "fields": [
          {
            "key": "scratch",
            "label": "Protection",
            "type": "select",
            "options": [
              {
                "value": "Zinc still reacts preferentially",
                "label": "Zinc still reacts preferentially"
              },
              {
                "value": "The zinc becomes less reactive than iron",
                "label": "The zinc becomes less reactive than iron"
              },
              {
                "value": "The scratch contains no water in every setting",
                "label": "The scratch contains no water in every setting"
              }
            ],
            "answer": "Zinc still reacts preferentially"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Scratched coating",
            "Connected zinc remains",
            "Sacrificial reaction"
          ]
        },
        "success": "Sacrificial action can protect exposed iron while zinc remains.",
        "feedback": "Barrier protection and sacrificial action are distinct mechanisms.",
        "id": "science.chemistry.resources.corrosion.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Which conditions are both needed for iron to rust?",
        "options": [
          "Air and water",
          "Dry nitrogen only",
          "Water absent and oxygen absent"
        ],
        "answer": 0,
        "why": "The rusting comparison requires both oxygen from air and water.",
        "id": "resources.corrosion.p1",
        "concept": "resources.corrosion"
      },
      {
        "prompt": "Why does paint protect iron?",
        "options": [
          "It forms a barrier to air and water",
          "It turns iron into aluminium",
          "It destroys every nearby water molecule"
        ],
        "answer": 0,
        "why": "An intact barrier prevents contact.",
        "id": "resources.corrosion.p2",
        "concept": "resources.corrosion"
      },
      {
        "prompt": "Which metal commonly galvanises iron?",
        "options": [
          "Zinc",
          "Gold",
          "Silver"
        ],
        "answer": 0,
        "why": "Zinc is more reactive than iron and can act sacrificially.",
        "id": "resources.corrosion.p3",
        "concept": "resources.corrosion"
      }
    ],
    "check": [
      {
        "prompt": "Why can aluminium resist further corrosion?",
        "options": [
          "A protective oxide layer forms",
          "It is less reactive than all metals",
          "It never reacts with oxygen"
        ],
        "answer": 0,
        "why": "The oxide surface limits further reaction.",
        "id": "resources.corrosion.c1",
        "concept": "resources.corrosion"
      },
      {
        "prompt": "Why can attached zinc protect scratched iron?",
        "options": [
          "Zinc reacts preferentially",
          "Zinc is less reactive than iron",
          "The scratch cannot contact water"
        ],
        "answer": 0,
        "why": "The more reactive metal is sacrificed.",
        "id": "resources.corrosion.c2",
        "concept": "resources.corrosion"
      },
      {
        "prompt": "Which control investigates the need for water?",
        "options": [
          "Iron in dry air compared with moist air",
          "Two identical nails in the same wet tube",
          "Changing iron to copper and adding salt simultaneously"
        ],
        "answer": 0,
        "why": "The intended difference is water availability.",
        "id": "resources.corrosion.c3",
        "concept": "resources.corrosion"
      },
      {
        "prompt": "What happens to sacrificial protection over time?",
        "options": [
          "The sacrificial metal is gradually consumed",
          "The sacrificial metal is never changed",
          "Iron becomes a noble gas"
        ],
        "answer": 0,
        "why": "Protection uses the more reactive metal.",
        "id": "resources.corrosion.c4",
        "concept": "resources.corrosion"
      },
      {
        "prompt": "A less reactive metal coating is scratched. Which claim is justified?",
        "options": [
          "Its barrier is damaged and it does not provide sacrificial protection",
          "It must protect exactly like zinc",
          "Iron can no longer rust under any conditions"
        ],
        "answer": 0,
        "why": "Reactivity determines whether sacrificial action is possible.",
        "id": "resources.corrosion.c5",
        "concept": "resources.corrosion"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ],
    "separate": true
  },
  {
    "id": "science.chemistry.resources.useful-alloys",
    "title": "Choosing useful alloys",
    "short": "Choosing useful alloys",
    "refs": [
      "10.3.2"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "Bronze is copper with tin and is used for statues or bearings. Brass is copper with zinc and is used for fittings or musical instruments. Jewellery gold is usually alloyed with silver, copper and zinc to alter its properties. Carats express the proportion of gold:24 carat is pure gold, 18 carat is 18/24=75% gold by mass.",
    "learn": [
      {
        "title": "Know the copper and gold alloys.",
        "text": "Bronze is copper with tin and is used for statues or bearings. Brass is copper with zinc and is used for fittings or musical instruments. Jewellery gold is usually alloyed with silver, copper and zinc to alter its properties. Carats express the proportion of gold:24 carat is pure gold, 18 carat is 18/24=75% gold by mass.",
        "scene": "catalog:science.chemistry.resources.useful-alloys"
      },
      {
        "title": "Choose the right steel.",
        "text": "Steels contain iron with controlled amounts of carbon and sometimes other metals. High-carbon steel is strong but brittle, suiting cutting tools. Low-carbon steel is softer and more easily shaped, suiting car-body panels. Stainless steels containing chromium and nickel are hard and corrosion-resistant, suiting cutlery and food equipment.",
        "scene": "catalog:science.chemistry.resources.useful-alloys"
      },
      {
        "title": "Balance properties and composition.",
        "text": "Aluminium alloys have low density and are useful in aircraft components where mass matters. An alloy is a mixture whose properties depend on composition and structure. For unfamiliar alloys, use provided property data to select a suitable material for the job; do not assume the most expensive alloy is best or that all iron alloys resist corrosion.",
        "scene": "catalog:science.chemistry.resources.useful-alloys"
      }
    ],
    "lab": [
      {
        "title": "Calculate gold content",
        "prompt": "A 16 g item is 9 carat gold. Calculate its gold mass.",
        "fields": [
          {
            "key": "gold",
            "label": "Gold mass /g",
            "type": "number",
            "answer": 6,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Item mass",
            "Carats"
          ],
          "rows": [
            [
              "16g",
              "9"
            ]
          ]
        },
        "success": "16×9/24=6 g gold.",
        "feedback": "Carats/24 is the mass fraction of gold.",
        "id": "science.chemistry.resources.useful-alloys.lab1"
      },
      {
        "title": "Select a steel",
        "prompt": "A panel must be shaped easily and painted afterwards. Choose the most suitable stated steel.",
        "fields": [
          {
            "key": "steel",
            "label": "Steel",
            "type": "select",
            "options": [
              {
                "value": "Low-carbon steel",
                "label": "Low-carbon steel"
              },
              {
                "value": "High-carbon steel because brittle",
                "label": "High-carbon steel because brittle"
              },
              {
                "value": "Neither because all steels are identical",
                "label": "Neither because all steels are identical"
              }
            ],
            "answer": "Low-carbon steel"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Steel",
            "Property"
          ],
          "rows": [
            [
              "Low-carbon",
              "Softer,formable"
            ],
            [
              "High-carbon",
              "Strong,brittle"
            ]
          ]
        },
        "success": "Low-carbon steel suits forming a panel.",
        "feedback": "Choose for the required property, not strength alone.",
        "id": "science.chemistry.resources.useful-alloys.lab2"
      },
      {
        "title": "Read unfamiliar alloy data",
        "prompt": "A lightweight bracket needs density below 3 g/cm³ and strength above 250 MPa. Select the candidate.",
        "fields": [
          {
            "key": "alloy",
            "label": "Candidate",
            "type": "select",
            "options": [
              {
                "value": "AlloyB",
                "label": "AlloyB"
              },
              {
                "value": "AlloyA",
                "label": "AlloyA"
              },
              {
                "value": "AlloyC",
                "label": "AlloyC"
              }
            ],
            "answer": "AlloyB"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Alloy",
            "Density /gcm⁻³",
            "Strength /MPa"
          ],
          "rows": [
            [
              "AlloyA",
              "7.8",
              "500"
            ],
            [
              "AlloyB",
              "2.8",
              "310"
            ],
            [
              "AlloyC",
              "2.6",
              "180"
            ]
          ]
        },
        "success": "B meets both constraints; A is too dense andC too weak.",
        "feedback": "Test each candidate against both limits.",
        "id": "science.chemistry.resources.useful-alloys.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "What is brass made from?",
        "options": [
          "Copper and zinc",
          "Copper and tin",
          "Iron and carbon only"
        ],
        "answer": 0,
        "why": "Brass contains copper and zinc; bronze contains copper and tin.",
        "id": "resources.useful-alloys.p1",
        "concept": "resources.useful-alloys"
      },
      {
        "prompt": "What percentage gold is 12 carat?",
        "type": "number",
        "answer": 50,
        "unit": "%",
        "tolerance": 0.01,
        "why": "12÷24×100=50%.",
        "id": "resources.useful-alloys.p2",
        "concept": "resources.useful-alloys"
      },
      {
        "prompt": "Which steel best fits a readily shaped panel?",
        "options": [
          "Low-carbon steel",
          "High-carbon steel because brittleness is essential",
          "Any steel must be equally formable"
        ],
        "answer": 0,
        "why": "Low-carbon steel is softer and more easily shaped.",
        "id": "resources.useful-alloys.p3",
        "concept": "resources.useful-alloys"
      }
    ],
    "check": [
      {
        "prompt": "Which alloy contains copper and tin?",
        "options": [
          "Bronze",
          "Brass",
          "Stainless steel"
        ],
        "answer": 0,
        "why": "Bronze is used for objects such as statues and bearings.",
        "id": "resources.useful-alloys.c1",
        "concept": "resources.useful-alloys"
      },
      {
        "prompt": "Which metals are associated with stainless steel?",
        "options": [
          "Chromium and nickel with iron",
          "Only copper and zinc",
          "Only gold and silver"
        ],
        "answer": 0,
        "why": "Cr andNi contribute useful hardness and corrosion resistance.",
        "id": "resources.useful-alloys.c2",
        "concept": "resources.useful-alloys"
      },
      {
        "prompt": "A 20 g piece is 18 carat gold. How much gold does it contain?",
        "type": "number",
        "answer": 15,
        "unit": "g",
        "tolerance": 0.01,
        "why": "20×18/24=15 g.",
        "id": "resources.useful-alloys.c3",
        "concept": "resources.useful-alloys"
      },
      {
        "prompt": "Why use an aluminium alloy in an aircraft component?",
        "options": [
          "Its low density can reduce mass",
          "It is always the densest available metal",
          "It contains no atoms"
        ],
        "answer": 0,
        "why": "Low density is useful where low mass matters.",
        "id": "resources.useful-alloys.c4",
        "concept": "resources.useful-alloys"
      },
      {
        "prompt": "Which use matches high-carbon steel?",
        "options": [
          "A strong cutting tool where hardness is useful",
          "A flexible food bag",
          "A transparent window"
        ],
        "answer": 0,
        "why": "High-carbon steel is strong but brittle; match properties to function.",
        "id": "resources.useful-alloys.c5",
        "concept": "resources.useful-alloys"
      },
      {
        "id": "resources.useful-alloys.c6",
        "prompt": "Which application matches bronze?",
        "options": [
          "Statues or bearings",
          "A flexible transparent food film",
          "An iron-free stainless-steel knife"
        ],
        "answer": 0,
        "why": "Copper–tin bronze is useful in statues and bearings.",
        "concept": "resources.useful-alloys"
      },
      {
        "id": "resources.useful-alloys.c7",
        "prompt": "Which application matches brass?",
        "options": [
          "Fittings or musical instruments",
          "A pure-gold bullion bar",
          "A poly(ethene) shopping bag"
        ],
        "answer": 0,
        "why": "Copper–zinc brass is used in fittings and instruments.",
        "concept": "resources.useful-alloys"
      },
      {
        "id": "resources.useful-alloys.c8",
        "prompt": "Which choice matches jewellery gold?",
        "options": [
          "Gold alloyed with other metals such as silver,copper and zinc",
          "A nitrogen–oxygen gas mixture",
          "Always pure24-carat gold for every purpose"
        ],
        "answer": 0,
        "why": "Alloying changes properties for jewellery; carats specify the gold fraction.",
        "concept": "resources.useful-alloys"
      },
      {
        "id": "resources.useful-alloys.c9",
        "prompt": "Which use matches corrosion-resistant stainless steel?",
        "options": [
          "Cutlery or food equipment",
          "A disposable flexible food bag",
          "A low-density gas balloon"
        ],
        "answer": 0,
        "why": "Chromium/nickel-containing stainless steel is hard and corrosion-resistant.",
        "concept": "resources.useful-alloys"
      }
    ],
    "skills": [
      "MS1a",
      "MS1c",
      "WS3.5"
    ],
    "separate": true
  },
  {
    "id": "science.chemistry.resources.glass-ceramics",
    "title": "Glass and clay ceramics",
    "short": "Glass and clay ceramics",
    "refs": [
      "10.3.3"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "Most everyday glass is soda-lime glass, made by heating sand, sodium carbonate and limestone. Borosilicate glass is made from sand and boron trioxide and melts at higher temperatures than soda-lime glass. Different compositions produce different properties; glass is not simply every possible melted solid.",
    "learn": [
      {
        "title": "Make a useful glass.",
        "text": "Most everyday glass is soda-lime glass, made by heating sand, sodium carbonate and limestone. Borosilicate glass is made from sand and boron trioxide and melts at higher temperatures than soda-lime glass. Different compositions produce different properties; glass is not simply every possible melted solid.",
        "scene": "catalog:science.chemistry.resources.glass-ceramics"
      },
      {
        "title": "Shape clay,then fire it.",
        "text": "Clay ceramics include pottery and bricks. Wet clay is shaped, then heated in a furnace to produce a hard material. Once fired, it does not behave like soft wet clay. Ceramics are often hard and withstand high temperatures, but can be brittle; choose a material based on the required combination of properties.",
        "scene": "catalog:science.chemistry.resources.glass-ceramics"
      },
      {
        "title": "Use quantitative comparisons.",
        "text": "Select materials using supplied data such as density, strength, maximum service temperature and cost. Melting temperature and safe working temperature are not interchangeable. A transparent material may suit a window, but a structural component may require impact resistance. State which measured property supports a choice and what limitation remains.",
        "scene": "catalog:science.chemistry.resources.glass-ceramics"
      }
    ],
    "lab": [
      {
        "title": "Select the recipe",
        "prompt": "Choose the stated soda-lime ingredients.",
        "fields": [
          {
            "key": "glass",
            "label": "Ingredients",
            "type": "select",
            "options": [
              {
                "value": "Sand +sodium carbonate +limestone",
                "label": "Sand +sodium carbonate +limestone"
              },
              {
                "value": "Sand +copper +tin",
                "label": "Sand +copper +tin"
              },
              {
                "value": "Ethene +oxygen only",
                "label": "Ethene +oxygen only"
              }
            ],
            "answer": "Sand +sodium carbonate +limestone"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Raw ingredients",
            "Heating",
            "Soda-lime glass"
          ]
        },
        "success": "Sand, sodium carbonate and limestone make soda-lime glass.",
        "feedback": "Do not confuse glass recipes with alloys or polymers.",
        "id": "science.chemistry.resources.glass-ceramics.lab1"
      },
      {
        "title": "Follow the ceramic process",
        "prompt": "Choose the correct process order.",
        "fields": [
          {
            "key": "clay",
            "label": "Order",
            "type": "select",
            "options": [
              {
                "value": "Shape wet clay then fire",
                "label": "Shape wet clay then fire"
              },
              {
                "value": "Fire a finished polymer then add wet clay",
                "label": "Fire a finished polymer then add wet clay"
              },
              {
                "value": "Condense air then electrolyse",
                "label": "Condense air then electrolyse"
              }
            ],
            "answer": "Shape wet clay then fire"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Wet clay",
            "Shape",
            "Furnace",
            "Hard ceramic"
          ]
        },
        "success": "Shaping precedes firing in the clay-ceramic process.",
        "feedback": "Wet-clay formability is used before high-temperature firing.",
        "id": "science.chemistry.resources.glass-ceramics.lab2"
      },
      {
        "title": "Use material data",
        "prompt": "A transparent vessel must tolerate 300°C in the supplied service tests. Select the candidate.",
        "fields": [
          {
            "key": "choice",
            "label": "Candidate",
            "type": "select",
            "options": [
              {
                "value": "GlassB",
                "label": "GlassB"
              },
              {
                "value": "GlassA",
                "label": "GlassA"
              },
              {
                "value": "Opaque ceramicC",
                "label": "Opaque ceramicC"
              }
            ],
            "answer": "GlassB"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Candidate",
            "Transparent",
            "Service limit /°C"
          ],
          "rows": [
            [
              "GlassA",
              "Yes",
              "200"
            ],
            [
              "GlassB",
              "Yes",
              "350"
            ],
            [
              "CeramicC",
              "No",
              "500"
            ]
          ]
        },
        "success": "GlassB meets transparency and temperature requirements. These values are illustrative.",
        "feedback": "Apply both constraints; the highest temperature alone is not enough.",
        "id": "science.chemistry.resources.glass-ceramics.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Which raw materials make soda-lime glass?",
        "options": [
          "Sand,sodium carbonate and limestone",
          "Only copper and tin",
          "Ethene and iron"
        ],
        "answer": 0,
        "why": "The three stated ingredients form common soda-lime glass.",
        "id": "resources.glass-ceramics.p1",
        "concept": "resources.glass-ceramics"
      },
      {
        "prompt": "Which ingredient distinguishes borosilicate glass here?",
        "options": [
          "Boron trioxide",
          "Pure gold",
          "Methane only"
        ],
        "answer": 0,
        "why": "Borosilicate uses sand and boron trioxide.",
        "id": "resources.glass-ceramics.p2",
        "concept": "resources.glass-ceramics"
      },
      {
        "prompt": "How are clay bricks made?",
        "options": [
          "Shape wet clay then heat in a furnace",
          "Freeze dry nitrogen",
          "Electrolyse brass"
        ],
        "answer": 0,
        "why": "Shaping and firing produce clay ceramics.",
        "id": "resources.glass-ceramics.p3",
        "concept": "resources.glass-ceramics"
      }
    ],
    "check": [
      {
        "prompt": "Compared with soda-lime glass, borosilicate glass has what stated property?",
        "options": [
          "It melts at a higher temperature",
          "It must melt at a lower temperature",
          "It is an alloy of zinc"
        ],
        "answer": 0,
        "why": "Composition changes properties.",
        "id": "resources.glass-ceramics.c1",
        "concept": "resources.glass-ceramics"
      },
      {
        "prompt": "Which property can limit ceramic uses under impact?",
        "options": [
          "Brittleness",
          "Being made entirely of liquid water",
          "Always conducting electricity better than copper"
        ],
        "answer": 0,
        "why": "A brittle material can fracture rather than deform.",
        "id": "resources.glass-ceramics.c2",
        "concept": "resources.glass-ceramics"
      },
      {
        "prompt": "Which evidence best supports selecting a material for a hot vessel?",
        "options": [
          "Suitable service-temperature data and other required properties",
          "Only its colour",
          "Its density alone regardless of temperature"
        ],
        "answer": 0,
        "why": "The property must match the use.",
        "id": "resources.glass-ceramics.c3",
        "concept": "resources.glass-ceramics"
      },
      {
        "prompt": "SampleA withstands 250°C andB withstands 400°C in supplied tests. What is the difference?",
        "type": "number",
        "answer": 150,
        "unit": "°C",
        "tolerance": 0.01,
        "why": "400−250=150°C.",
        "id": "resources.glass-ceramics.c4",
        "concept": "resources.glass-ceramics"
      },
      {
        "prompt": "Why not use melting point alone as a safe-use temperature?",
        "options": [
          "Other damage or failure may occur before melting",
          "All solids are safe until their exact melting point",
          "Melting point and cost are the same quantity"
        ],
        "answer": 0,
        "why": "Service limits can depend on more than melting.",
        "id": "resources.glass-ceramics.c5",
        "concept": "resources.glass-ceramics"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ],
    "separate": true
  },
  {
    "id": "science.chemistry.resources.polymers-composites",
    "title": "Polymers and composite materials",
    "short": "Polymers and composite materials",
    "refs": [
      "10.3.3"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "Polymer properties depend on monomers and manufacturing conditions. Low-density and high-density poly(ethene) both come from ethene, but conditions produce different chain arrangements. More branching in the low-density model prevents close packing; less branching permits closer packing in high-density material. Changing properties does not require a different monomer.",
    "learn": [
      {
        "title": "Same monomer,different structure.",
        "text": "Polymer properties depend on monomers and manufacturing conditions. Low-density and high-density poly(ethene) both come from ethene, but conditions produce different chain arrangements. More branching in the low-density model prevents close packing; less branching permits closer packing in high-density material. Changing properties does not require a different monomer.",
        "scene": "catalog:science.chemistry.resources.polymers-composites"
      },
      {
        "title": "Explain heating behaviour.",
        "text": "Thermosoftening polymers contain chains held together by intermolecular forces; heating allows chains to move past one another so the material softens and can melt. Thermosetting polymers have crosslinks between chains, forming a connected structure that does not melt when heated. Strong heating can eventually decompose them; do not claim they cannot ever be damaged.",
        "scene": "catalog:science.chemistry.resources.polymers-composites"
      },
      {
        "title": "Combine components for a purpose.",
        "text": "A composite usually has a matrix or binder surrounding a reinforcement of fibres or fragments. Fibreglass combines glass fibres with a polymer matrix; carbon-fibre composites use carbon fibres and a matrix; reinforced concrete uses steel reinforcement in concrete. Properties depend on components and arrangement. Compare data for metals, ceramics, polymers and composites against the use rather than assuming every composite has the same properties.",
        "scene": "catalog:science.chemistry.resources.polymers-composites"
      }
    ],
    "lab": [
      {
        "title": "Compare chain models",
        "prompt": "Select the model more consistent with high-density poly(ethene).",
        "fields": [
          {
            "key": "packing",
            "label": "Chain arrangement",
            "type": "select",
            "options": [
              {
                "value": "Less branching and closer packing",
                "label": "Less branching and closer packing"
              },
              {
                "value": "More branching and widely separated packing",
                "label": "More branching and widely separated packing"
              },
              {
                "value": "A lattice of positive metal ions",
                "label": "A lattice of positive metal ions"
              }
            ],
            "answer": "Less branching and closer packing"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Ethene monomer",
            "Different manufacturing conditions",
            "Different chain arrangements"
          ]
        },
        "success": "Closer packing can give higher density even with the same monomer.",
        "feedback": "Focus on arrangement, not an invented change of monomer.",
        "id": "science.chemistry.resources.polymers-composites.lab1"
      },
      {
        "title": "Predict remoulding",
        "prompt": "A polymer has covalent crosslinks between chains. Choose the expected heating behaviour.",
        "fields": [
          {
            "key": "heat",
            "label": "Behaviour",
            "type": "select",
            "options": [
              {
                "value": "Does not melt into a remouldable liquid",
                "label": "Does not melt into a remouldable liquid"
              },
              {
                "value": "Always melts like separate unlinked chains",
                "label": "Always melts like separate unlinked chains"
              },
              {
                "value": "Turns into pure copper",
                "label": "Turns into pure copper"
              }
            ],
            "answer": "Does not melt into a remouldable liquid"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Chains",
            "Crosslinks",
            "Connected thermosetting structure"
          ]
        },
        "success": "Crosslinks prevent the chain motion needed for melting.",
        "feedback": "A connected network behaves differently from separate chains.",
        "id": "science.chemistry.resources.polymers-composites.lab2"
      },
      {
        "title": "Choose a composite",
        "prompt": "A panel needs density below 2 g/cm³ and tensile strength above 400 MPa. Choose the material from the illustrative data.",
        "fields": [
          {
            "key": "panel",
            "label": "Material",
            "type": "select",
            "options": [
              {
                "value": "CompositeB",
                "label": "CompositeB"
              },
              {
                "value": "MetalA",
                "label": "MetalA"
              },
              {
                "value": "PolymerC",
                "label": "PolymerC"
              }
            ],
            "answer": "CompositeB"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Material",
            "Density /gcm⁻³",
            "Strength /MPa"
          ],
          "rows": [
            [
              "MetalA",
              "7.8",
              "600"
            ],
            [
              "CompositeB",
              "1.6",
              "550"
            ],
            [
              "PolymerC",
              "1.0",
              "80"
            ]
          ]
        },
        "success": "CompositeB meets both requirements; no one property alone decides.",
        "feedback": "Test density and strength together.",
        "id": "science.chemistry.resources.polymers-composites.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "What monomer can produce bothLD andHD poly(ethene)?",
        "options": [
          "Ethene",
          "Two necessarily different monomers",
          "Only glucose"
        ],
        "answer": 0,
        "why": "Manufacturing conditions can change structure while monomer stays the same.",
        "id": "resources.polymers-composites.p1",
        "concept": "resources.polymers-composites"
      },
      {
        "prompt": "Why can a thermosoftening polymer melt?",
        "options": [
          "Chains can move as intermolecular attractions are overcome",
          "All covalent bonds must disappear at once",
          "It contains only isolated metal atoms"
        ],
        "answer": 0,
        "why": "Chains can slide without breaking every covalent bond.",
        "id": "resources.polymers-composites.p2",
        "concept": "resources.polymers-composites"
      },
      {
        "prompt": "What gives thermosetting polymers their heating behaviour?",
        "options": [
          "Crosslinks joining chains",
          "Only more water vapour",
          "No atoms in the structure"
        ],
        "answer": 0,
        "why": "A crosslinked network does not melt into separate sliding chains.",
        "id": "resources.polymers-composites.p3",
        "concept": "resources.polymers-composites"
      }
    ],
    "check": [
      {
        "prompt": "What is the matrix in a composite?",
        "options": [
          "The material binding the reinforcement",
          "Always pure oxygen",
          "The empty space outside it"
        ],
        "answer": 0,
        "why": "The binder surrounds and holds the reinforcing component.",
        "id": "resources.polymers-composites.c1",
        "concept": "resources.polymers-composites"
      },
      {
        "prompt": "Which is a composite example?",
        "options": [
          "Glass fibres in a polymer matrix",
          "Pure copper only",
          "One isolated water molecule"
        ],
        "answer": 0,
        "why": "Fibres and matrix form a composite.",
        "id": "resources.polymers-composites.c2",
        "concept": "resources.polymers-composites"
      },
      {
        "prompt": "What does greater branching do in theLD poly(ethene) model?",
        "options": [
          "Prevents chains packing as closely",
          "Makes every chain identical to a metal lattice",
          "Changes ethene into a different element"
        ],
        "answer": 0,
        "why": "Packing differences help explain density differences.",
        "id": "resources.polymers-composites.c3",
        "concept": "resources.polymers-composites"
      },
      {
        "prompt": "Which heating statement is accurate?",
        "options": [
          "A thermoset does not melt but can decompose under strong heating",
          "A thermoset can never suffer heat damage",
          "Every polymer melts identically"
        ],
        "answer": 0,
        "why": "Not melting does not mean indestructible.",
        "id": "resources.polymers-composites.c4",
        "concept": "resources.polymers-composites"
      },
      {
        "prompt": "A composite contains 80 g matrix and 20 g fibres. What percentage is reinforcement?",
        "type": "number",
        "answer": 20,
        "unit": "%",
        "tolerance": 0.01,
        "why": "20÷100×100=20%.",
        "id": "resources.polymers-composites.c5",
        "concept": "resources.polymers-composites"
      },
      {
        "id": "resources.polymers-composites.c6",
        "prompt": "Which example correctly identifies reinforcement and matrix?",
        "options": [
          "Steel reinforcement in a concrete matrix",
          "Only pure copper with no second material",
          "Water vapour inside pure nitrogen"
        ],
        "answer": 0,
        "why": "Reinforced concrete combines reinforcing steel with a surrounding concrete matrix.",
        "concept": "resources.polymers-composites"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ],
    "separate": true
  },
  {
    "id": "science.chemistry.resources.haber-production",
    "title": "Manufacturing ammonia",
    "short": "Manufacturing ammonia",
    "refs": [
      "10.4.1"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "The Haber process makes ammonia, a starting material for nitrogen-based fertilisers. Nitrogen is obtained from air; hydrogen can be obtained from natural gas, mainly methane. Purified nitrogen and hydrogen react in a 1:3 molecular ratio: N₂+3 H₂⇌2 NH₃. The reverse arrow means ammonia can also break down into nitrogen and hydrogen.",
    "learn": [
      {
        "title": "Supply the reactants.",
        "text": "The Haber process makes ammonia, a starting material for nitrogen-based fertilisers. Nitrogen is obtained from air; hydrogen can be obtained from natural gas, mainly methane. Purified nitrogen and hydrogen react in a 1:3 molecular ratio: N₂+3 H₂⇌2 NH₃. The reverse arrow means ammonia can also break down into nitrogen and hydrogen.",
        "scene": "catalog:science.chemistry.resources.haber-production"
      },
      {
        "title": "Run the industrial loop.",
        "text": "The purified gases pass over an iron catalyst at about 450°C and about 200 atmospheres. Some reactants form ammonia on each pass; the reaction mixture still contains unreacted gases. These are the specified approximate operating conditions, not exact universal values for every industrial plant.",
        "scene": "catalog:science.chemistry.resources.haber-production"
      },
      {
        "title": "Separate and recycle.",
        "text": "Cooling the mixture liquefies ammonia, which is removed. Unreacted nitrogen and hydrogen are recycled through the reactor. Recycling increases overall use of raw materials but does not imply 100%conversion in one pass. Keep this gas-recycling loop distinct from catalysts: iron speeds reaction and is not used up as a reactant.",
        "scene": "catalog:science.chemistry.resources.haber-production"
      }
    ],
    "lab": [
      {
        "title": "Set the gas ratio",
        "prompt": "A feed contains 5 moles ofN₂.Choose the matching amount ofH₂ for the equation.",
        "fields": [
          {
            "key": "hydrogen",
            "label": "H₂ /mol",
            "type": "number",
            "answer": 15,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "N₂ +3H₂",
            "Iron catalyst",
            "2NH₃"
          ]
        },
        "success": "The ratio is 1:3, so 5 molN₂ pairs with 15 molH₂.",
        "feedback": "Use coefficients, not the number of atoms in one hydrogen molecule.",
        "id": "science.chemistry.resources.haber-production.lab1"
      },
      {
        "title": "Configure the reactor",
        "prompt": "Select the stated catalyst and approximate operating conditions.",
        "fields": [
          {
            "key": "catalyst",
            "label": "Catalyst",
            "type": "select",
            "options": [
              {
                "value": "Iron",
                "label": "Iron"
              },
              {
                "value": "Copper sulfate",
                "label": "Copper sulfate"
              },
              {
                "value": "None",
                "label": "None"
              }
            ],
            "answer": "Iron"
          },
          {
            "key": "conditions",
            "label": "Conditions",
            "type": "select",
            "options": [
              {
                "value": "450°C and200atm",
                "label": "450°C and200atm"
              },
              {
                "value": "25°C and1atm",
                "label": "25°C and1atm"
              },
              {
                "value": "0°C and no pressure",
                "label": "0°C and no pressure"
              }
            ],
            "answer": "450°C and200atm"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Purified gases",
            "Reactor",
            "Mixture containing ammonia"
          ]
        },
        "success": "Iron, about 450°C and 200 atm describe the specified process.",
        "feedback": "Keep the catalyst and operating conditions distinct.",
        "id": "science.chemistry.resources.haber-production.lab2"
      },
      {
        "title": "Close the loop",
        "prompt": "After cooling and ammonia removal, select the destination of the remaining gases.",
        "fields": [
          {
            "key": "recycle",
            "label": "Unreacted gases",
            "type": "select",
            "options": [
              {
                "value": "Return to the reactor",
                "label": "Return to the reactor"
              },
              {
                "value": "Discard all immediately",
                "label": "Discard all immediately"
              },
              {
                "value": "Collect as pure ammonia",
                "label": "Collect as pure ammonia"
              }
            ],
            "answer": "Return to the reactor"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Reaction mixture",
            "Cool and remove liquidNH₃",
            "N₂/H₂ remain"
          ]
        },
        "success": "Recycling improves overall raw-material use without claiming full single-pass conversion.",
        "feedback": "The remaining gases are reactants, not the separated ammonia.",
        "id": "science.chemistry.resources.haber-production.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "What is the Haber product?",
        "options": [
          "Ammonia",
          "Nitric acid directly from only nitrogen",
          "Pure potassium"
        ],
        "answer": 0,
        "why": "Ammonia is made from nitrogen and hydrogen.",
        "id": "resources.haber-production.p1",
        "concept": "resources.haber-production"
      },
      {
        "prompt": "Which sources are suitable?",
        "options": [
          "Nitrogen from air;hydrogen from methane",
          "Nitrogen from copper;hydrogen from zinc only",
          "Both gases from molten gold"
        ],
        "answer": 0,
        "why": "These are standard sources for the raw materials.",
        "id": "resources.haber-production.p2",
        "concept": "resources.haber-production"
      },
      {
        "prompt": "Which catalyst is specified?",
        "options": [
          "Iron",
          "Sodium chloride",
          "Aluminium oxide as the required answer"
        ],
        "answer": 0,
        "why": "The Haber process uses an iron catalyst.",
        "id": "resources.haber-production.p3",
        "concept": "resources.haber-production"
      }
    ],
    "check": [
      {
        "prompt": "Which approximate conditions are specified?",
        "options": [
          "450°C and200atmospheres",
          "25°C and1atmosphere",
          "−100°C and no pressure"
        ],
        "answer": 0,
        "why": "These are the stated industrial conditions.",
        "id": "resources.haber-production.c1",
        "concept": "resources.haber-production"
      },
      {
        "prompt": "For 4 molecules ofN₂, how manyH₂ molecules matchN₂+3 H₂⇌2 NH₃?",
        "type": "number",
        "answer": 12,
        "unit": "molecules",
        "tolerance": 0,
        "why": "EachN₂ needs 3 H₂; 4×3=12.",
        "id": "resources.haber-production.c2",
        "concept": "resources.haber-production"
      },
      {
        "prompt": "How is ammonia removed from the reaction mixture?",
        "options": [
          "Cooling to liquefy it",
          "Filtering all gases through coarse sand",
          "Turning it into iron"
        ],
        "answer": 0,
        "why": "Ammonia is condensed and separated.",
        "id": "resources.haber-production.c3",
        "concept": "resources.haber-production"
      },
      {
        "prompt": "What happens to unreacted nitrogen and hydrogen?",
        "options": [
          "They are recycled",
          "They must all be thrown away",
          "They turn into the catalyst"
        ],
        "answer": 0,
        "why": "The loop returns unreacted gases to the reactor.",
        "id": "resources.haber-production.c4",
        "concept": "resources.haber-production"
      },
      {
        "prompt": "What does the reversible arrow show?",
        "options": [
          "Products can react to reform reactants",
          "The reaction has no energy change",
          "All molecules are stationary"
        ],
        "answer": 0,
        "why": "Ammonia can decompose back to nitrogen and hydrogen.",
        "id": "resources.haber-production.c5",
        "concept": "resources.haber-production"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ],
    "separate": true
  },
  {
    "id": "science.chemistry.resources.haber-optimisation",
    "title": "The Haber compromise",
    "short": "The Haber compromise",
    "refs": [
      "10.4.1"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "ForN₂+3 H₂⇌2 NH₃, the forward reaction is exothermic and gas-molecule count decreases from four to two. Lower temperature favours ammonia at equilibrium, but reaction is slower. Higher temperature makes collisions more energetic and increases rate, but favours the endothermic reverse direction, reducing equilibrium ammonia yield.",
    "learn": [
      {
        "title": "Separate rate from equilibrium.",
        "text": "ForN₂+3 H₂⇌2 NH₃, the forward reaction is exothermic and gas-molecule count decreases from four to two. Lower temperature favours ammonia at equilibrium, but reaction is slower. Higher temperature makes collisions more energetic and increases rate, but favours the endothermic reverse direction, reducing equilibrium ammonia yield.",
        "scene": "catalog:science.chemistry.resources.haber-optimisation"
      },
      {
        "title": "Balance pressure and cost.",
        "text": "Increasing pressure shifts equilibrium towards fewer gas molecules, so it favours ammonia and can also increase reaction rate. However, compressing gases needs energy and strong equipment costs money. About 200 atmospheres is a commercial compromise rather than the theoretical maximum pressure. Interpret supplied graphs and compare output per time, not equilibrium percentage alone.",
        "scene": "catalog:science.chemistry.resources.haber-optimisation"
      },
      {
        "title": "Use catalyst and separation intelligently.",
        "text": "Iron lowers activation energy for both directions, so equilibrium is reached faster without changing its position at a fixed temperature and pressure. Cooling to remove ammonia and recycling unreacted gases improves overall production. Around 450°C balances rate and yield; commercial decisions also depend on raw-material and energy availability and cost.",
        "scene": "catalog:science.chemistry.resources.haber-optimisation"
      }
    ],
    "lab": [
      {
        "title": "Predict the shift",
        "prompt": "At equilibrium, the forward Haber reaction is exothermic. Choose the effect of cooling.",
        "fields": [
          {
            "key": "temperature",
            "label": "Equilibrium ammonia",
            "type": "select",
            "options": [
              {
                "value": "Increases",
                "label": "Increases"
              },
              {
                "value": "Decreases",
                "label": "Decreases"
              },
              {
                "value": "Must become zero",
                "label": "Must become zero"
              }
            ],
            "answer": "Increases"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "N₂ +3H₂",
            "Exothermic forward",
            "2NH₃"
          ]
        },
        "success": "Cooling favours the exothermic ammonia-forming direction.",
        "feedback": "Rate and equilibrium yield are different questions.",
        "id": "science.chemistry.resources.haber-optimisation.lab1"
      },
      {
        "title": "Read operating evidence",
        "prompt": "Calculate reactedN₂ per hour for conditionB using the illustrative data.",
        "fields": [
          {
            "key": "output",
            "label": "B reactedN₂ /mol h⁻¹",
            "type": "number",
            "answer": 30,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Condition",
            "N₂ feed /molh⁻¹",
            "Conversion /%"
          ],
          "rows": [
            [
              "A",
              "50",
              "40"
            ],
            [
              "B",
              "150",
              "20"
            ]
          ]
        },
        "success": "B:150×0.20=30 mol per hour; A:20 mol per hour despite its higher conversion.",
        "feedback": "Multiply feed by fractional conversion; do not compare percentages alone.",
        "id": "science.chemistry.resources.haber-optimisation.lab2"
      },
      {
        "title": "Choose an explanation",
        "prompt": "Select why the catalyst is useful without claiming it changes equilibrium.",
        "fields": [
          {
            "key": "catalyst",
            "label": "Catalyst explanation",
            "type": "select",
            "options": [
              {
                "value": "Lowers activation energy for both directions",
                "label": "Lowers activation energy for both directions"
              },
              {
                "value": "Makes the equilibrium yield100%",
                "label": "Makes the equilibrium yield100%"
              },
              {
                "value": "Raises activation energy and stops the reverse reaction",
                "label": "Raises activation energy and stops the reverse reaction"
              }
            ],
            "answer": "Lowers activation energy for both directions"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Alternative pathway",
            "Lower activation energy",
            "Equilibrium reached faster"
          ]
        },
        "success": "The catalyst improves rate while fixed-condition equilibrium position stays unchanged.",
        "feedback": "A faster route does not imply a different final equilibrium composition.",
        "id": "science.chemistry.resources.haber-optimisation.lab3"
      }
    ],
    "practice": [
      {
        "prompt": "Why does lower temperature favour ammonia at equilibrium?",
        "options": [
          "The forward reaction is exothermic",
          "The forward reaction is endothermic",
          "Temperature cannot affect equilibrium"
        ],
        "answer": 0,
        "why": "Cooling favours the exothermic direction.",
        "id": "resources.haber-optimisation.p1",
        "concept": "resources.haber-optimisation"
      },
      {
        "prompt": "Why is very low temperature not chosen simply for maximum equilibrium yield?",
        "options": [
          "Reaction would be too slow",
          "It guarantees instant reaction",
          "It removes all catalyst"
        ],
        "answer": 0,
        "why": "Industrial production needs a useful rate.",
        "id": "resources.haber-optimisation.p2",
        "concept": "resources.haber-optimisation"
      },
      {
        "prompt": "Why does higher pressure favour ammonia?",
        "options": [
          "The ammonia side has fewer gas molecules",
          "It has more gas molecules",
          "Pressure destroys nitrogen atoms"
        ],
        "answer": 0,
        "why": "Four reactant gas molecules become two product molecules.",
        "id": "resources.haber-optimisation.p3",
        "concept": "resources.haber-optimisation"
      }
    ],
    "check": [
      {
        "prompt": "What does iron do to equilibrium position at fixed conditions?",
        "options": [
          "Does not change it",
          "Moves it completely to ammonia",
          "Removes the reverse reaction"
        ],
        "answer": 0,
        "why": "Catalysts speed both directions without altering equilibrium composition.",
        "id": "resources.haber-optimisation.c1",
        "concept": "resources.haber-optimisation"
      },
      {
        "prompt": "Why not use arbitrarily high pressure?",
        "options": [
          "Energy and equipment costs increase",
          "Pressure never affects rate",
          "The reactants become elements only at low pressure"
        ],
        "answer": 0,
        "why": "Commercial decisions consider cost as well as yield.",
        "id": "resources.haber-optimisation.c2",
        "concept": "resources.haber-optimisation"
      },
      {
        "prompt": "A model processes 100 molN₂ per hour with 20% conversion. How many molN₂ react per hour?",
        "type": "number",
        "answer": 20,
        "unit": "mol per hour",
        "tolerance": 0.01,
        "why": "100×0.20=20 mol per hour; conversion is not product mole count.",
        "id": "resources.haber-optimisation.c3",
        "concept": "resources.haber-optimisation"
      },
      {
        "prompt": "A hotter condition has lower equilibrium yield but much faster rate. What must a producer compare?",
        "options": [
          "Ammonia production per time and operating costs",
          "Only the largest equilibrium percentage",
          "Only the lowest temperature"
        ],
        "answer": 0,
        "why": "Yield, rate and costs together determine useful output.",
        "id": "resources.haber-optimisation.c4",
        "concept": "resources.haber-optimisation"
      },
      {
        "prompt": "Why does removing ammonia help continued production?",
        "options": [
          "The system responds to product removal by forming more ammonia",
          "It makes the reaction irreversible in principle",
          "It changes nitrogen atoms into iron"
        ],
        "answer": 0,
        "why": "Product withdrawal and recycling improve overall conversion.",
        "id": "resources.haber-optimisation.c5",
        "concept": "resources.haber-optimisation"
      }
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "WS4.1"
    ],
    "separate": true,
    "higher": true
  },
  {
    "id": "science.chemistry.resources.npk-fertilisers",
    "title": "NPK fertilisers and salt production",
    "short": "NPK fertilisers and salt production",
    "refs": [
      "10.4.2"
    ],
    "minutes": 25,
    "topicId": "science.chemistry.using-resources",
    "widget": "catalog-resources",
    "prerequisites": [],
    "big": "NPK fertilisers are formulations containing compounds of nitrogen, phosphorus and potassium in appropriate proportions to improve agricultural productivity. They are not mixtures of the free elements. Potassium chloride, potassium sulfate and phosphate rock are obtained by mining. Ammonia is used to manufacture ammonium salts and nitric acid in linked industrial processes.",
    "learn": [
      {
        "title": "Formulate the nutrients.",
        "text": "NPK fertilisers are formulations containing compounds of nitrogen, phosphorus and potassium in appropriate proportions to improve agricultural productivity. They are not mixtures of the free elements. Potassium chloride, potassium sulfate and phosphate rock are obtained by mining. Ammonia is used to manufacture ammonium salts and nitric acid in linked industrial processes.",
        "scene": "catalog:science.chemistry.resources.npk-fertilisers"
      },
      {
        "title": "Make phosphate available.",
        "text": "Phosphate rock is insufficiently soluble to be used directly as a fertiliser. Nitric-acid treatment produces calcium nitrate and phosphoric acid. Sulfuric-acid treatment produces single superphosphate, a mixture including calcium sulfate and a soluble calcium phosphate. Phosphoric-acid treatment produces triple superphosphate, a soluble calcium phosphate form. The soluble phosphate differs from the original insoluble rock; precisely, it is commonly calcium dihydrogen phosphate.",
        "scene": "catalog:science.chemistry.resources.npk-fertilisers"
      },
      {
        "title": "Connect laboratory and factory.",
        "text": "Ammonia reacts with nitric acid to make ammonium nitrate, and with sulfuric acid to make ammonium sulfate. For a pure laboratory sample from soluble acid and alkali, identify neutralising volumes by titration, repeat without indicator, then concentrate, cool and crystallise. Industrial production integrates raw-material supply, reaction control, separation and continuous large-scale output. Compare supplied methods rather than assuming a school batch can supply a whole industry.",
        "scene": "catalog:science.chemistry.resources.npk-fertilisers"
      },
      {
        "title": "Calculate a useful composition.",
        "text": "A formulation mixes salts to supply required percentages of nutrient elements. An assessment table should state whether values are elemental masses; commercial labels may use conventions not covered by that simplified calculation. Add contributions from all supplied salts, divide by total mixture mass and multiply by 100. Preparing an ammonium salt is anAT 4 opportunity, not a new named required practical in this topic.",
        "scene": "catalog:science.chemistry.resources.npk-fertilisers"
      }
    ],
    "lab": [
      {
        "title": "Choose the feedstocks",
        "prompt": "Select the named mined potassium salts and the ammonia-derived nitrogen salt.",
        "fields": [
          {
            "key": "potassium",
            "label": "Potassium source",
            "type": "select",
            "options": [
              {
                "value": "Potassium chloride or potassium sulfate",
                "label": "Potassium chloride or potassium sulfate"
              },
              {
                "value": "Calcium nitrate only",
                "label": "Calcium nitrate only"
              },
              {
                "value": "Pure nitrogen gas only",
                "label": "Pure nitrogen gas only"
              }
            ],
            "answer": "Potassium chloride or potassium sulfate"
          },
          {
            "key": "nitrogen",
            "label": "Ammonia +nitric acid",
            "type": "select",
            "options": [
              {
                "value": "Ammonium nitrate",
                "label": "Ammonium nitrate"
              },
              {
                "value": "Calcium carbonate",
                "label": "Calcium carbonate"
              },
              {
                "value": "Copper sulfate",
                "label": "Copper sulfate"
              }
            ],
            "answer": "Ammonium nitrate"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Mined K salts",
            "Manufactured N salts",
            "NPK formulation"
          ]
        },
        "success": "KCl/K₂SO₄ supply potassium; ammonium nitrate supplies nitrogen.",
        "feedback": "Distinguish the nutrient element from the different salt sources.",
        "id": "science.chemistry.resources.npk-fertilisers.lab1"
      },
      {
        "title": "Match phosphate treatment",
        "prompt": "Choose the products for sulfuric and phosphoric acid treatment.",
        "fields": [
          {
            "key": "sulfuric",
            "label": "Sulfuric-acid product",
            "type": "select",
            "options": [
              {
                "value": "Single superphosphate",
                "label": "Single superphosphate"
              },
              {
                "value": "Triple superphosphate only",
                "label": "Triple superphosphate only"
              },
              {
                "value": "Brass",
                "label": "Brass"
              }
            ],
            "answer": "Single superphosphate"
          },
          {
            "key": "phosphoric",
            "label": "Phosphoric-acid product",
            "type": "select",
            "options": [
              {
                "value": "Triple superphosphate",
                "label": "Triple superphosphate"
              },
              {
                "value": "Single superphosphate only",
                "label": "Single superphosphate only"
              },
              {
                "value": "Bronze",
                "label": "Bronze"
              }
            ],
            "answer": "Triple superphosphate"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Treatment",
            "Product clue"
          ],
          "rows": [
            [
              "Nitric acid",
              "Calcium nitrate +phosphoric acid"
            ],
            [
              "Sulfuric acid",
              "Sulfate/phosphate mixture"
            ],
            [
              "Phosphoric acid",
              "Soluble phosphate"
            ]
          ]
        },
        "success": "Sulfuric acid gives single superphosphate; phosphoric acid gives triple superphosphate.",
        "feedback": "Single contains sulfate with phosphate; triple is the phosphate product.",
        "id": "science.chemistry.resources.npk-fertilisers.lab2"
      },
      {
        "title": "Calculate nutrient content",
        "prompt": "A stated elemental dataset gives 10 g nitrogen from saltA and 5 g from saltB in a 150 g formulation. Calculate nitrogen percentage.",
        "fields": [
          {
            "key": "nitrogen",
            "label": "Nitrogen /%",
            "type": "number",
            "answer": 10,
            "tolerance": 0.01
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Contribution",
            "Nitrogen /g"
          ],
          "rows": [
            [
              "SaltA",
              "10"
            ],
            [
              "SaltB",
              "5"
            ],
            [
              "Total formulation mass",
              "150g"
            ]
          ]
        },
        "success": "(10+5)÷150×100=10%. This uses explicitly elemental masses.",
        "feedback": "Add the nitrogen contributions, then divide by the whole mixture mass.",
        "id": "science.chemistry.resources.npk-fertilisers.lab3"
      },
      {
        "title": "Prepare a pure salt",
        "prompt": "After measuring neutralising acid/alkali volumes, choose the next laboratory preparation strategy.",
        "fields": [
          {
            "key": "pure",
            "label": "Method",
            "type": "select",
            "options": [
              {
                "value": "Repeat without indicator,then concentrate and crystallise",
                "label": "Repeat without indicator,then concentrate and crystallise"
              },
              {
                "value": "Add excess indicator to the final crystals",
                "label": "Add excess indicator to the final crystals"
              },
              {
                "value": "Ignore the measured volumes",
                "label": "Ignore the measured volumes"
              }
            ],
            "answer": "Repeat without indicator,then concentrate and crystallise"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Titration finds volumes",
            "Repeat clean reaction",
            "Concentrate,cool,crystallise"
          ]
        },
        "success": "The repeat removes indicator contamination while retaining the neutralising ratio.",
        "feedback": "Separate finding the end point from preparing the clean product.",
        "id": "science.chemistry.resources.npk-fertilisers.lab4"
      }
    ],
    "practice": [
      {
        "prompt": "What doesNPK identify?",
        "options": [
          "Nitrogen,phosphorus and potassium supplied in compounds",
          "Only sodium,platinum and krypton",
          "A mixture of three free metals"
        ],
        "answer": 0,
        "why": "The formulation supplies these nutrient elements as compounds.",
        "id": "resources.npk-fertilisers.p1",
        "concept": "resources.npk-fertilisers"
      },
      {
        "prompt": "Why treat phosphate rock with acids?",
        "options": [
          "To obtain salts with useful solubility for plant uptake",
          "To make all phosphorus disappear",
          "Because every rock is already readily soluble"
        ],
        "answer": 0,
        "why": "The original phosphate rock is insufficiently soluble.",
        "id": "resources.npk-fertilisers.p2",
        "concept": "resources.npk-fertilisers"
      },
      {
        "prompt": "Which salt forms when ammonia reacts with nitric acid?",
        "options": [
          "Ammonium nitrate",
          "Potassium chloride",
          "Calcium sulfate"
        ],
        "answer": 0,
        "why": "The ammonium ion and nitrate ion form ammonium nitrate.",
        "id": "resources.npk-fertilisers.p3",
        "concept": "resources.npk-fertilisers"
      }
    ],
    "check": [
      {
        "prompt": "Which are mined potassium sources named in the specification?",
        "options": [
          "Potassium chloride and potassium sulfate",
          "Only pure potassium metal",
          "Ammonia and nitric acid"
        ],
        "answer": 0,
        "why": "These salts supply potassium in formulations.",
        "id": "resources.npk-fertilisers.c1",
        "concept": "resources.npk-fertilisers"
      },
      {
        "prompt": "Nitric acid treats phosphate rock. Which salt is produced?",
        "options": [
          "Calcium nitrate",
          "Sodium chloride",
          "Ammonium sulfate only"
        ],
        "answer": 0,
        "why": "Calcium nitrate forms along with phosphoric acid.",
        "id": "resources.npk-fertilisers.c2",
        "concept": "resources.npk-fertilisers"
      },
      {
        "prompt": "Which mapping is correct?",
        "options": [
          "Sulfuric acid:single superphosphate;phosphoric acid:triple superphosphate",
          "Sulfuric acid:brass;phosphoric acid:bronze",
          "Both acids produce only pure potassium"
        ],
        "answer": 0,
        "why": "These processes make fertiliser phosphate products.",
        "id": "resources.npk-fertilisers.c3",
        "concept": "resources.npk-fertilisers"
      },
      {
        "prompt": "An explicitly elemental dataset gives 12 g nitrogen in 200 g fertiliser. What is the nitrogen mass percentage?",
        "type": "number",
        "answer": 6,
        "unit": "%",
        "tolerance": 0.01,
        "why": "12÷200×100=6%.",
        "id": "resources.npk-fertilisers.c4",
        "concept": "resources.npk-fertilisers"
      },
      {
        "prompt": "Why repeat a laboratory titration preparation without indicator?",
        "options": [
          "Avoid indicator contamination in the crystallised salt",
          "Make the acid volume unknown",
          "Make the salt insoluble before reaction"
        ],
        "answer": 0,
        "why": "Measured neutralising volumes allow preparation of an uncontaminated salt solution.",
        "id": "resources.npk-fertilisers.c5",
        "concept": "resources.npk-fertilisers"
      },
      {
        "prompt": "Which describes industrial compared with school preparation?",
        "options": [
          "Integrated large-scale processes with controlled continuous production",
          "Exactly one small evaporating basin for all output",
          "No need to consider raw materials"
        ],
        "answer": 0,
        "why": "Scale, supply and process control distinguish industrial production.",
        "id": "resources.npk-fertilisers.c6",
        "concept": "resources.npk-fertilisers"
      },
      {
        "id": "resources.npk-fertilisers.c7",
        "prompt": "What is made when ammonia reacts with sulfuric acid?",
        "options": [
          "Ammonium sulfate",
          "Potassium chloride",
          "Calcium nitrate"
        ],
        "answer": 0,
        "why": "The acid supplies sulfate and ammonia supplies ammonium ions.",
        "concept": "resources.npk-fertilisers"
      }
    ],
    "skills": [
      "AT4",
      "MS1a",
      "MS1c",
      "WS3.5",
      "WS4.1"
    ],
    "separate": true
  }
];
export const resourcesCompletionConcepts={
  "resources.sustainable-resources": "Resources and sustainable development",
  "resources.potable-water": "Making water potable",
  "resources.water-practical": "Analysing and purifying water",
  "resources.wastewater": "Treating wastewater",
  "resources.biological-extraction": "Biological metal extraction",
  "resources.life-cycle-assessment": "Life-cycle assessments",
  "resources.reuse-recycling": "Reducing,reusing and recycling",
  "resources.corrosion": "Corrosion and protection",
  "resources.useful-alloys": "Choosing useful alloys",
  "resources.glass-ceramics": "Glass and clay ceramics",
  "resources.polymers-composites": "Polymers and composite materials",
  "resources.haber-production": "Manufacturing ammonia",
  "resources.haber-optimisation": "The Haber compromise",
  "resources.npk-fertilisers": "NPK fertilisers and salt production"
};
