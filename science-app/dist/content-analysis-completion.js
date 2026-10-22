export const analysisCompletionLessons=[
  {
    "id": "science.chemistry.analysis.purity-formulations",
    "title": "Purity & formulations",
    "short": "One substance or a designed mixture?",
    "refs": [
      "8.1.1",
      "8.1.2"
    ],
    "minutes": 30,
    "topicId": "science.chemistry.chemical-analysis",
    "widget": "catalog-analysis",
    "big": "Chemical purity means one substance. Formulations are deliberately designed mixtures whose component proportions give useful properties.",
    "learn": [
      {
        "title": "Use the chemical meaning of pure.",
        "text": "A chemically pure sample contains just one element or one compound. Pure copper and pure water qualify; milk contains many substances even if nothing has been added. Everyday descriptions such as natural or unadulterated do not establish chemical purity. A compound contains different elements chemically combined in fixed proportions; this does not make it a mixture.",
        "scene": "catalog:science.chemistry.analysis.purity-formulations"
      },
      {
        "title": "Compare physical-property evidence.",
        "text": "At a specified pressure, a pure substance has characteristic melting and boiling temperatures. Compare the sample with suitable reference data. A melting range or a depressed melting temperature can indicate impurities; a sharp matching result supports purity but one measurement cannot rule out every impurity. Keep pressure and measurement conditions comparable when using boiling data.",
        "scene": "catalog:science.chemistry.analysis.purity-formulations"
      },
      {
        "title": "Design a useful mixture.",
        "text": "A formulation is a mixture deliberately designed to have useful properties. Each component serves a purpose, and measured proportions control the result. Fuels, cleaning agents, paints, medicines, alloys, fertilisers and foods can be formulations. Identify this from information about design and function rather than trying to memorise proprietary ingredients.",
        "scene": "catalog:science.chemistry.analysis.purity-formulations"
      },
      {
        "title": "Link ingredients to performance.",
        "text": "In an illustrative paint, pigment supplies colour, binder holds the dried coating together and solvent helps application. More of one component is not automatically better: changing proportions changes properties. Evaluate a proposed formulation against its stated purpose and supplied performance data; natural origin or a chemical-sounding name does not determine whether it is a formulation.",
        "scene": "catalog:science.chemistry.analysis.purity-formulations"
      }
    ],
    "practice": [
      {
        "id": "analysis.p-purity1",
        "prompt": "Which sample is chemically pure?",
        "options": [
          "A single sample of water molecules only",
          "Unadulterated milk",
          "Air with no added pollutants"
        ],
        "answer": 0,
        "why": "Only the water sample contains a single compound.",
        "concept": "analysis.purity"
      },
      {
        "id": "analysis.p-purity2",
        "prompt": "Why are ingredients measured when making a formulation?",
        "options": [
          "To turn all ingredients into one element",
          "To achieve the intended properties consistently",
          "To remove every compound"
        ],
        "answer": 1,
        "why": "Component proportions affect the performance of the designed mixture.",
        "concept": "analysis.formulations"
      },
      {
        "id": "analysis.p-purity3",
        "prompt": "A solid reference melts at80°C. A sample melts over72–77°C. What is supported?",
        "options": [
          "It is certainly a different element",
          "It must contain no impurities",
          "Its melting behaviour suggests an impure sample"
        ],
        "answer": 2,
        "why": "A lowered range is evidence of impurity; it is not a complete identification.",
        "concept": "analysis.purity"
      }
    ],
    "check": [
      {
        "id": "analysis.c-purity1",
        "prompt": "A bottle labelled “pure fruit juice” contains water, sugars and acids. Chemically it is…",
        "options": [
          "An element",
          "A mixture",
          "A single compound"
        ],
        "answer": 1,
        "why": "Everyday pure can mean unadulterated; several substances remain.",
        "concept": "analysis.purity"
      },
      {
        "id": "analysis.c-purity2",
        "prompt": "Which description establishes a formulation?",
        "options": [
          "A product with measured components chosen for desired properties",
          "Any single atom",
          "Any mixture made by accident"
        ],
        "answer": 0,
        "why": "Design and controlled proportions distinguish a formulation.",
        "concept": "analysis.formulations"
      },
      {
        "id": "analysis.c-purity3",
        "prompt": "At the same pressure, a reference boils at100°C. Which supports a pure matching sample?",
        "options": [
          "A boiling interval from90 to105°C",
          "A characteristic boiling temperature close to100°C",
          "Any liquid that looks clear"
        ],
        "answer": 1,
        "why": "Characteristic matching boiling behaviour is useful evidence under comparable conditions.",
        "concept": "analysis.purity"
      },
      {
        "id": "analysis.c-purity4",
        "prompt": "A medicinal cream contains a measured active ingredient, carrier and stabiliser. Why does each matter?",
        "options": [
          "All must have identical functions",
          "They must all be elements",
          "Each contributes to required performance"
        ],
        "answer": 2,
        "why": "Formulations combine purposeful components in controlled proportions.",
        "concept": "analysis.formulations"
      },
      {
        "id": "analysis.c-purity5",
        "prompt": "Which list contains only examples that can be formulations?",
        "options": [
          "Fuels, paints, fertilisers and foods",
          "A single helium atom and pure copper",
          "Only naturally occurring substances"
        ],
        "answer": 0,
        "why": "These are specified useful-product contexts; design details establish each case.",
        "concept": "analysis.formulations"
      },
      {
        "id": "analysis.c-purity6",
        "prompt": "One sharp melting point matching a reference…",
        "options": [
          "Proves absolute purity in every possible test",
          "Supports purity, within the limits of that measurement",
          "Shows that the sample contains only atoms of one element"
        ],
        "answer": 1,
        "why": "A useful result is evidence, not a guarantee that no impurity exists.",
        "concept": "analysis.purity"
      }
    ],
    "lab": [
      {
        "id": "purity-evidence",
        "title": "Judge the sample",
        "prompt": "A reference solid melts at122°C. Compare the two samples at the same pressure.",
        "fields": [
          {
            "key": "sample",
            "label": "Which has stronger purity evidence?",
            "type": "select",
            "options": [
              {
                "value": "a",
                "label": "A: sharp melting at122°C"
              },
              {
                "value": "b",
                "label": "B: melts from115 to120°C"
              },
              {
                "value": "both",
                "label": "Both prove absolute purity"
              }
            ],
            "answer": "a"
          },
          {
            "key": "claim",
            "label": "Best conclusion",
            "type": "select",
            "options": [
              {
                "value": "support",
                "label": "A is consistent with the reference; further tests may help"
              },
              {
                "value": "proof",
                "label": "A proves every possible impurity absent"
              },
              {
                "value": "colour",
                "label": "Colour alone settles it"
              }
            ],
            "answer": "support"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Sample",
            "Melting observation"
          ],
          "rows": [
            [
              "Reference",
              "122°C"
            ],
            [
              "A",
              "122°C, sharp"
            ],
            [
              "B",
              "115–120°C"
            ]
          ]
        },
        "success": "Matching sharp behaviour supports A; the broad lower range suggests impurity in B.",
        "feedback": "Compare the temperatures and range with the reference. Do not turn supporting evidence into an absolute guarantee."
      },
      {
        "id": "formulation-design",
        "title": "Choose purposeful components",
        "prompt": "A coating must be coloured, spreadable before drying and firmly attached afterwards.",
        "fields": [
          {
            "key": "colour",
            "label": "Colour component",
            "type": "select",
            "options": [
              {
                "value": "pigment",
                "label": "Pigment"
              },
              {
                "value": "binder",
                "label": "Binder"
              },
              {
                "value": "solvent",
                "label": "Solvent"
              }
            ],
            "answer": "pigment"
          },
          {
            "key": "adhesion",
            "label": "Dry coating held together by…",
            "type": "select",
            "options": [
              {
                "value": "pigment",
                "label": "Pigment"
              },
              {
                "value": "binder",
                "label": "Binder"
              },
              {
                "value": "solvent",
                "label": "Solvent"
              }
            ],
            "answer": "binder"
          },
          {
            "key": "flow",
            "label": "Application helped by…",
            "type": "select",
            "options": [
              {
                "value": "pigment",
                "label": "Pigment"
              },
              {
                "value": "binder",
                "label": "Binder"
              },
              {
                "value": "solvent",
                "label": "Solvent"
              }
            ],
            "answer": "solvent"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Measured ingredients",
            "Mix to designed proportions",
            "Test coating performance"
          ]
        },
        "success": "The three components have distinct functions; the formulation combines them.",
        "feedback": "Match the supplied function to the ingredient, rather than assuming every ingredient has the same job."
      },
      {
        "id": "formulation-proportions",
        "title": "Meet the product brief",
        "prompt": "Illustrative test data: choose a cleaner that removes at least80% of the stain and has a rinse score of at least4.",
        "fields": [
          {
            "key": "product",
            "label": "Choose the mixture",
            "type": "select",
            "options": [
              {
                "value": "a",
                "label": "A"
              },
              {
                "value": "b",
                "label": "B"
              },
              {
                "value": "c",
                "label": "C"
              }
            ],
            "answer": "b"
          },
          {
            "key": "reason",
            "label": "Justification",
            "type": "select",
            "options": [
              {
                "value": "both",
                "label": "It meets both performance requirements"
              },
              {
                "value": "most",
                "label": "It has the most active ingredient regardless of rinsing"
              },
              {
                "value": "natural",
                "label": "Its name sounds natural"
              }
            ],
            "answer": "both"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Mixture",
            "Stain removed",
            "Rinse score"
          ],
          "rows": [
            [
              "A",
              "65%",
              "5"
            ],
            [
              "B",
              "85%",
              "4"
            ],
            [
              "C",
              "95%",
              "2"
            ]
          ]
        },
        "success": "B meets both thresholds; C removes more stain but fails the rinse requirement.",
        "feedback": "Judge the supplied requirements together. More active ingredient is not automatically a better formulation."
      }
    ],
    "skills": [
      "WS2.2",
      "WS4.1",
      "WS1.4"
    ]
  },
  {
    "id": "science.chemistry.analysis.chromatography-rf",
    "title": "Chromatography & Rf",
    "short": "Separate, measure and compare",
    "refs": [
      "8.1.3"
    ],
    "minutes": 30,
    "topicId": "science.chemistry.chemical-analysis",
    "widget": "catalog-analysis",
    "big": "Chromatography separates by differing distribution between phases; Rf compares spot travel with solvent travel under specified conditions.",
    "learn": [
      {
        "title": "Use two phases.",
        "text": "In paper chromatography the paper is treated as the stationary phase and the solvent is the moving mobile phase. Substances distribute differently between the phases. A substance that spends more time moving with the solvent travels farther than one held more strongly by the stationary phase, under those conditions. The separation is physical; it does not make new substances.",
        "scene": "catalog:science.chemistry.analysis.chromatography-rf"
      },
      {
        "title": "Measure from a common origin.",
        "text": "Measure from the pencil baseline to the centre of a substance spot and from the same baseline to the solvent front. Rf is substance distance divided by solvent distance. A spot30 mm above the origin with solvent60 mm above it gives30/60=0.50. Rf has no unit because equal distance units cancel. It is not solvent distance divided by spot distance.",
        "scene": "catalog:science.chemistry.analysis.chromatography-rf"
      },
      {
        "title": "Compare like with like.",
        "text": "Compare an unknown with references run using the same solvent and conditions. A matching position or Rf supports the presence of a substance, but different substances can overlap. Changing solvent can change Rf and resolve spots that overlapped. More than one spot shows a mixture; a single spot in one solvent alone does not guarantee purity. A pure compound gives one spot in each suitable solvent.",
        "scene": "catalog:science.chemistry.analysis.chromatography-rf"
      },
      {
        "title": "Read evidence carefully.",
        "text": "Count distinct spots, compare their heights and recognise unmatched components. Use the centre of each spot, not its top edge or distance from the bottom of the paper. Report a sensible number of significant figures for the measurement precision. A spot cannot normally outrun the solvent front, so a calculated Rf above1 should trigger a check of the distances or division.",
        "scene": "catalog:science.chemistry.analysis.chromatography-rf"
      }
    ],
    "practice": [
      {
        "id": "analysis.p-rf1",
        "type": "number",
        "prompt": "A spot moves24 mm and the solvent moves60 mm from the baseline. Rf?",
        "answer": 0.4,
        "tolerance": 0.001,
        "unit": "",
        "why": "24/60=0.40; the distance units cancel.",
        "concept": "analysis.rf"
      },
      {
        "id": "analysis.p-rf2",
        "prompt": "Two compounds overlap in water. What could improve the evidence?",
        "options": [
          "Declare the sample pure immediately",
          "Run a suitable different solvent and compare references",
          "Measure from the top of the paper"
        ],
        "answer": 1,
        "why": "A different solvent can change their relative travel and resolve overlapping spots.",
        "concept": "analysis.chromatogram"
      },
      {
        "id": "analysis.p-rf3",
        "prompt": "Why do components travel different distances?",
        "options": [
          "They have different distributions between the phases",
          "The largest molecule always goes furthest",
          "The paper changes each into a new element"
        ],
        "answer": 0,
        "why": "Different interactions with the phases give different movement.",
        "concept": "analysis.phases"
      }
    ],
    "check": [
      {
        "id": "analysis.c-rf1",
        "type": "number",
        "prompt": "A spot centre is18 mm above the origin; solvent front is72 mm above the origin. Rf?",
        "answer": 0.25,
        "tolerance": 0.001,
        "unit": "",
        "why": "18/72=0.25.",
        "concept": "analysis.rf"
      },
      {
        "id": "analysis.c-rf2",
        "type": "number",
        "prompt": "A substance has Rf0.60 and the solvent moves50 mm. Spot distance from the baseline?",
        "answer": 30,
        "tolerance": 0.001,
        "unit": "mm",
        "why": "0.60×50=30 mm.",
        "concept": "analysis.rf"
      },
      {
        "id": "analysis.c-rf3",
        "prompt": "Which is the mobile phase in paper chromatography?",
        "options": [
          "The baseline",
          "The solvent moving through the paper",
          "The ruler"
        ],
        "answer": 1,
        "why": "The solvent carries dissolved substances through the stationary phase.",
        "concept": "analysis.phases"
      },
      {
        "id": "analysis.c-rf4",
        "prompt": "An unknown has spots at Rf0.20 and0.70; references A and B have0.20 and0.50 in the same run. What is supported?",
        "options": [
          "A and B are both definitely present",
          "The unknown is pure",
          "A may be present, with an unmatched second component"
        ],
        "answer": 2,
        "why": "Only the0.20 position matches;0.70 is not the B reference.",
        "concept": "analysis.chromatogram"
      },
      {
        "id": "analysis.c-rf5",
        "prompt": "A single spot in one solvent…",
        "options": [
          "Is consistent with purity but could contain overlapping substances",
          "Proves no mixture can be present",
          "Shows chromatography failed every time"
        ],
        "answer": 0,
        "why": "Use more evidence or a different solvent to test unresolved overlap.",
        "concept": "analysis.chromatogram"
      },
      {
        "id": "analysis.c-rf6",
        "prompt": "Distances were recorded to two significant figures. Which Rf report is appropriate for21 mm/60 mm?",
        "options": [
          "0.35000000 mm",
          "2.9",
          "0.35"
        ],
        "answer": 2,
        "why": "21/60=0.35, dimensionless, without unsupported decimal precision.",
        "concept": "analysis.rf"
      }
    ],
    "lab": [
      {
        "id": "rf-measure",
        "title": "Calculate a ratio",
        "prompt": "All distances are measured from the same origin. Use the spot centre.",
        "fields": [
          {
            "key": "rf",
            "label": "Rf for X",
            "type": "number",
            "answer": 0.375,
            "tolerance": 0.001
          },
          {
            "key": "unit",
            "label": "Rf unit",
            "type": "select",
            "options": [
              {
                "value": "none",
                "label": "No unit"
              },
              {
                "value": "mm",
                "label": "mm"
              },
              {
                "value": "mm2",
                "label": "mm²"
              }
            ],
            "answer": "none"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Marker",
            "Distance from origin"
          ],
          "rows": [
            [
              "X centre",
              "30 mm"
            ],
            [
              "Solvent front",
              "80 mm"
            ]
          ]
        },
        "success": "30/80=0.375; the distance units cancel.",
        "feedback": "Divide spot travel by solvent travel, using the same origin and units."
      },
      {
        "id": "rf-identify",
        "title": "Compare reference lanes",
        "prompt": "All lanes use the same paper, solvent and conditions. Select the supported interpretation.",
        "fields": [
          {
            "key": "match",
            "label": "Unknown contains evidence matching…",
            "type": "select",
            "options": [
              {
                "value": "ac",
                "label": "A and C"
              },
              {
                "value": "ab",
                "label": "A and B"
              },
              {
                "value": "b",
                "label": "B only"
              }
            ],
            "answer": "ac"
          },
          {
            "key": "certainty",
            "label": "How strong is a position match?",
            "type": "select",
            "options": [
              {
                "value": "support",
                "label": "Supports identity; other compounds can overlap"
              },
              {
                "value": "proof",
                "label": "Proves identity without any other possible explanation"
              },
              {
                "value": "none",
                "label": "Never provides useful information"
              }
            ],
            "answer": "support"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Lane",
            "Rf positions"
          ],
          "rows": [
            [
              "A",
              "0.25"
            ],
            [
              "B",
              "0.45"
            ],
            [
              "C",
              "0.75"
            ],
            [
              "Unknown",
              "0.25,0.75"
            ]
          ]
        },
        "success": "The unknown matches A and C under these conditions; matching is supporting evidence.",
        "feedback": "Compare each unknown position with the references. A match supports an identification but is not logically unique."
      },
      {
        "id": "rf-second-solvent",
        "title": "Test an apparent single spot",
        "prompt": "The same unknown is run in two suitable solvents.",
        "fields": [
          {
            "key": "purity",
            "label": "Best conclusion",
            "type": "select",
            "options": [
              {
                "value": "mixture",
                "label": "The sample is a mixture"
              },
              {
                "value": "pure",
                "label": "The sample is certainly pure"
              },
              {
                "value": "element",
                "label": "The sample must be an element"
              }
            ],
            "answer": "mixture"
          },
          {
            "key": "distance",
            "label": "In solvent2, front60 mm and Rf0.70: higher spot distance /mm",
            "type": "number",
            "answer": 42,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Solvent",
            "Unknown spots"
          ],
          "rows": [
            [
              "1",
              "One spot at Rf0.50"
            ],
            [
              "2",
              "Two spots at Rf0.30 and0.70"
            ]
          ]
        },
        "success": "Solvent2 resolves two substances. The higher spot travels0.70×60=42 mm.",
        "feedback": "One unresolved spot can hide multiple substances; the second solvent supplies extra evidence."
      }
    ],
    "skills": [
      "WS2.2",
      "WS3.1",
      "WS3.2",
      "WS3.3",
      "MS1a",
      "MS1c",
      "MS1d",
      "MS2a"
    ]
  },
  {
    "id": "science.chemistry.analysis.chromatography-practical",
    "title": "Chromatography practical",
    "short": "Plan and evaluate a chromatogram",
    "refs": [
      "8.1.3"
    ],
    "minutes": 30,
    "topicId": "science.chemistry.chemical-analysis",
    "widget": "catalog-analysis",
    "big": "Good chromatography needs controlled setup, small samples and correct distances; evaluate what each error does to the evidence.",
    "learn": [
      {
        "title": "Set up a fair comparison.",
        "text": "For AQA Chemistry required practical6 / Trilogy required practical12, investigate separation and identification of coloured substances by paper chromatography and calculate Rf. Use known references alongside an unknown under matching solvent and paper conditions. Place small concentrated spots on a pencil baseline above the reservoir solvent. The solvent reaches the paper base and rises through it; samples should not dissolve directly into the reservoir.",
        "scene": "catalog:science.chemistry.analysis.chromatography-practical"
      },
      {
        "title": "Keep the result measurable.",
        "text": "Use clean separate spotting tools to prevent contamination. Keep spots small and spaced, and let applications dry if concentrating a spot. Support the paper without touching the vessel sides, keep it still and allow useful solvent travel. Mark the solvent front promptly after removing the paper, before evaporation makes it hard to locate. Dry the chromatogram and measure to spot centres from the baseline.",
        "scene": "catalog:science.chemistry.analysis.chromatography-practical"
      },
      {
        "title": "Evaluate evidence and errors.",
        "text": "An ink baseline may dissolve and introduce extra spots. A sample below the solvent washes off. Broad spots make the centre uncertain; the vessel wall can distort the front. Compare repeated runs and check measurements before averaging or rejecting unusual results. Use a suitable different solvent when components fail to separate; no single solvent guarantees separation of every mixture.",
        "scene": "catalog:science.chemistry.analysis.chromatography-practical"
      },
      {
        "title": "Prepare for school practical work.",
        "text": "Choose solvent and handling under the school risk assessment: eye protection and appropriate precautions for any flammable or hazardous solvent. The handbook offers suggested methods rather than one compulsory script. This simulation develops planning, interpretation and evaluation; it does not demonstrate hands-on competence or replace the supervised practical. A lid may help with a volatile solvent but is not universally essential with water.",
        "scene": "catalog:science.chemistry.analysis.chromatography-practical"
      }
    ],
    "practice": [
      {
        "id": "analysis.p-chrom1",
        "prompt": "Why draw the baseline in pencil rather than ink?",
        "options": [
          "Pencil causes the solvent to boil",
          "Ink may dissolve and interfere with the chromatogram",
          "Pencil is always the mobile phase"
        ],
        "answer": 1,
        "why": "An ink line can introduce extra dissolved components.",
        "concept": "analysis.chrom-method"
      },
      {
        "id": "analysis.p-chrom2",
        "prompt": "When should the solvent front be marked?",
        "options": [
          "After waiting until all evidence of the front has disappeared",
          "Only before putting the paper into solvent",
          "Promptly on removing the paper"
        ],
        "answer": 2,
        "why": "Evaporation can make the front difficult to locate later.",
        "concept": "analysis.chrom-method"
      },
      {
        "id": "analysis.p-chrom3",
        "type": "number",
        "prompt": "Front:64 mm; spot centre:40 mm, both from baseline. Rf?",
        "answer": 0.625,
        "tolerance": 0.001,
        "unit": "",
        "why": "40/64=0.625.",
        "concept": "analysis.rf"
      }
    ],
    "check": [
      {
        "id": "analysis.c-chrom1",
        "prompt": "The sample spots are below the solvent surface. Likely problem?",
        "options": [
          "They may dissolve into the reservoir instead of separating up the paper",
          "The solvent cannot wet any paper",
          "Every spot automatically has Rf1"
        ],
        "answer": 0,
        "why": "Keep the baseline above solvent while the paper base touches it.",
        "concept": "analysis.chrom-method"
      },
      {
        "id": "analysis.c-chrom2",
        "prompt": "Which helps avoid contaminating reference lanes?",
        "options": [
          "Use one dirty capillary for every sample",
          "Use clean separate spotting tools",
          "Mix unknown and references before spotting"
        ],
        "answer": 1,
        "why": "Clean tools prevent transfer between samples.",
        "concept": "analysis.chrom-method"
      },
      {
        "id": "analysis.c-chrom3",
        "prompt": "A broad streak rather than a small spot most directly makes what uncertain?",
        "options": [
          "The number of protons in the solvent",
          "Whether paper exists",
          "The centre distance used for Rf"
        ],
        "answer": 2,
        "why": "Diffuse regions reduce measurement precision and resolution.",
        "concept": "analysis.chrom-evaluation"
      },
      {
        "id": "analysis.c-chrom4",
        "type": "number",
        "prompt": "Origin is10 mm from paper bottom, spot centre46 mm and front70 mm from bottom. Rf?",
        "answer": 0.6,
        "tolerance": 0.001,
        "unit": "",
        "why": "Spot moves36 mm; solvent moves60 mm.36/60=0.60.",
        "concept": "analysis.rf"
      },
      {
        "id": "analysis.c-chrom5",
        "prompt": "A new solvent separates one apparent spot into two. What improves?",
        "options": [
          "Evidence that the sample contains multiple components",
          "Proof that a chemical reaction formed new elements",
          "The claim that all solvents give identical Rf"
        ],
        "answer": 0,
        "why": "Different distribution can resolve previously overlapping substances.",
        "concept": "analysis.chrom-evaluation"
      },
      {
        "id": "analysis.c-chrom6",
        "prompt": "Which best describes this online practical?",
        "options": [
          "It fulfils every physical AT requirement",
          "It prepares method and data reasoning; supervised practical work is still needed",
          "It removes the need for any risk assessment"
        ],
        "answer": 1,
        "why": "A simulation cannot certify hands-on technique.",
        "concept": "analysis.chrom-evaluation"
      }
    ],
    "lab": [
      {
        "id": "chrom-setup",
        "title": "Repair the setup",
        "prompt": "Choose the changes needed before beginning the run.",
        "fields": [
          {
            "key": "baseline",
            "label": "Baseline material",
            "type": "select",
            "options": [
              {
                "value": "pencil",
                "label": "Pencil"
              },
              {
                "value": "ink",
                "label": "Soluble ink"
              }
            ],
            "answer": "pencil"
          },
          {
            "key": "level",
            "label": "Solvent level",
            "type": "select",
            "options": [
              {
                "value": "below",
                "label": "Below the sample baseline, touching paper base"
              },
              {
                "value": "above",
                "label": "Above all sample spots"
              },
              {
                "value": "none",
                "label": "Not touching the paper at all"
              }
            ],
            "answer": "below"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Pencil origin with small samples",
            "Paper base in solvent",
            "Samples above solvent surface"
          ]
        },
        "success": "The mobile phase can rise through the sample without washing it into the reservoir.",
        "feedback": "The paper must contact solvent, but the spots must start above its surface; soluble baseline ink interferes."
      },
      {
        "id": "chrom-distances",
        "title": "Use the correct origin",
        "prompt": "The ruler values below are from the bottom edge, not from the origin.",
        "fields": [
          {
            "key": "spot",
            "label": "Distance travelled by spot /mm",
            "type": "number",
            "answer": 27,
            "tolerance": 0.001
          },
          {
            "key": "front",
            "label": "Distance travelled by solvent /mm",
            "type": "number",
            "answer": 60,
            "tolerance": 0.001
          },
          {
            "key": "rf",
            "label": "Rf",
            "type": "number",
            "answer": 0.45,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Feature",
            "Ruler reading from bottom"
          ],
          "rows": [
            [
              "Origin",
              "12 mm"
            ],
            [
              "Spot centre",
              "39 mm"
            ],
            [
              "Solvent front",
              "72 mm"
            ]
          ]
        },
        "success": "Subtract the12 mm origin:27/60=0.45.",
        "feedback": "Subtract the origin from both readings before forming the ratio. Do not divide the raw ruler positions."
      },
      {
        "id": "chrom-evaluate",
        "title": "Improve the evidence",
        "prompt": "A run has large overlapping streaks and an unmarked solvent front.",
        "fields": [
          {
            "key": "spot",
            "label": "Improve the samples",
            "type": "select",
            "options": [
              {
                "value": "small",
                "label": "Use small concentrated spots with clean tools"
              },
              {
                "value": "large",
                "label": "Use larger puddles on every lane"
              },
              {
                "value": "mix",
                "label": "Mix all references together first"
              }
            ],
            "answer": "small"
          },
          {
            "key": "front",
            "label": "Improve front measurement",
            "type": "select",
            "options": [
              {
                "value": "mark",
                "label": "Mark promptly when removing the paper"
              },
              {
                "value": "wait",
                "label": "Wait for the front to disappear"
              },
              {
                "value": "bottom",
                "label": "Use the paper top as the front every time"
              }
            ],
            "answer": "mark"
          },
          {
            "key": "separate",
            "label": "If spots still overlap…",
            "type": "select",
            "options": [
              {
                "value": "solvent",
                "label": "Try a suitable different solvent with references"
              },
              {
                "value": "pure",
                "label": "Assume purity without more evidence"
              },
              {
                "value": "ink",
                "label": "Add an ink baseline"
              }
            ],
            "answer": "solvent"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Problem",
            "Effect"
          ],
          "rows": [
            [
              "Broad spots",
              "Uncertain centres/overlap"
            ],
            [
              "Front not marked",
              "Uncertain solvent distance"
            ]
          ]
        },
        "success": "Small spots, a marked front and suitable solvent improve the information available.",
        "feedback": "Target the observed source of uncertainty. Decoration or assuming purity does not repair the measurements."
      }
    ],
    "skills": [
      "WS2.2",
      "WS2.3",
      "WS3.1",
      "WS3.2",
      "WS3.3",
      "MS1c",
      "MS2a",
      "AT1",
      "AT4"
    ]
  },
  {
    "id": "science.chemistry.analysis.gas-tests",
    "title": "Identifying common gases",
    "short": "Choose the test, interpret the observation",
    "refs": [
      "8.2.1",
      "8.2.2",
      "8.2.3",
      "8.2.4"
    ],
    "minutes": 30,
    "topicId": "science.chemistry.chemical-analysis",
    "widget": "catalog-analysis",
    "big": "Identify gases by a specified test and its distinctive positive observation, not bubbles or appearance alone.",
    "learn": [
      {
        "title": "Separate test from observation.",
        "text": "A useful gas identification names both the procedure and the positive observation. Appearance or bubbles alone does not identify a gas. Use the four specified tests in a supervised school setting; never identify an unknown by directly smelling it. These models show expected observations for suitable samples, not permission to generate or handle hazardous gases at home.",
        "scene": "catalog:science.chemistry.analysis.gas-tests"
      },
      {
        "title": "Distinguish the splints.",
        "text": "For hydrogen, hold a burning splint at the open mouth of the tube: hydrogen burns rapidly with a pop. For oxygen, insert a glowing splint: the splint relights. Burning and glowing splints are different starting conditions; a generic statement that a splint changes is not enough to distinguish them.",
        "scene": "catalog:science.chemistry.analysis.gas-tests"
      },
      {
        "title": "Use a reagent for carbon dioxide.",
        "text": "Bubble the gas through, or shake it with, limewater, an aqueous calcium hydroxide solution. Carbon dioxide makes it milky or cloudy. A colourless gas or a flame going out alone is not the specified positive identification. Connect this test with acid–carbonate reactions, which release carbon dioxide.",
        "scene": "catalog:science.chemistry.analysis.gas-tests"
      },
      {
        "title": "Test chlorine with damp litmus.",
        "text": "Chlorine bleaches damp litmus paper white. Dampness matters; a red colour alone merely indicates acidity and is not the decisive chlorine result. Interpret the final bleaching observation rather than confuse it with a universal acid test. Colour descriptions accompany the visual model so that identification does not depend on seeing colour.",
        "scene": "catalog:science.chemistry.analysis.gas-tests"
      }
    ],
    "practice": [
      {
        "id": "analysis.p-gas1",
        "prompt": "A glowing splint relights in a sample. Evidence for…",
        "options": [
          "Hydrogen",
          "Oxygen",
          "Carbon dioxide"
        ],
        "answer": 1,
        "why": "Relighting of a glowing splint is the oxygen test.",
        "concept": "analysis.gases"
      },
      {
        "id": "analysis.p-gas2",
        "prompt": "Which reagent identifies carbon dioxide by becoming cloudy?",
        "options": [
          "Limewater",
          "Silver nitrate alone",
          "Dry litmus"
        ],
        "answer": 0,
        "why": "Limewater becomes milky when tested with carbon dioxide.",
        "concept": "analysis.gases"
      },
      {
        "id": "analysis.p-gas3",
        "prompt": "Which chlorine result is decisive?",
        "options": [
          "An unknown gas looks colourless",
          "Dry paper stays unchanged",
          "Damp litmus is bleached white"
        ],
        "answer": 2,
        "why": "Bleaching of damp litmus is the specified positive test.",
        "concept": "analysis.gases"
      }
    ],
    "check": [
      {
        "id": "analysis.c-gas1",
        "prompt": "Choose the correct hydrogen test.",
        "options": [
          "Burning splint at tube mouth: pop",
          "Glowing splint inserted: relights",
          "Gas into limewater: clear forever"
        ],
        "answer": 0,
        "why": "Hydrogen burns rapidly with a pop at the burning splint.",
        "concept": "analysis.gases"
      },
      {
        "id": "analysis.c-gas2",
        "prompt": "A glowing splint inserted into a gas relights. The gas is identified as…",
        "options": [
          "Chlorine",
          "Carbon dioxide",
          "Oxygen"
        ],
        "answer": 2,
        "why": "The starting glowing splint and relighting identify oxygen.",
        "concept": "analysis.gases"
      },
      {
        "id": "analysis.c-gas3",
        "prompt": "An acid–carbonate gas turns limewater cloudy. Which conclusion is supported?",
        "options": [
          "It is certainly hydrogen",
          "It contains carbon dioxide",
          "It is chlorine because all gases bleach"
        ],
        "answer": 1,
        "why": "Carbon dioxide from the carbonate gives the positive limewater test.",
        "concept": "analysis.gases"
      },
      {
        "id": "analysis.c-gas4",
        "prompt": "Damp litmus becomes white in a gas. This is the specified test for…",
        "options": [
          "Chlorine",
          "Oxygen",
          "Hydrogen"
        ],
        "answer": 0,
        "why": "Chlorine bleaches damp litmus.",
        "concept": "analysis.gases"
      },
      {
        "id": "analysis.c-gas5",
        "prompt": "Which observation alone does NOT identify a gas?",
        "options": [
          "A glowing splint relights",
          "Limewater becomes milky",
          "Bubbles appear in a reaction mixture"
        ],
        "answer": 2,
        "why": "Many different gases can form bubbles; use a distinctive test.",
        "concept": "analysis.gas-evidence"
      },
      {
        "id": "analysis.c-gas6",
        "prompt": "An answer says only “use a splint”. What is missing?",
        "options": [
          "The atom size of the wood",
          "Whether it is burning or glowing and the positive observation",
          "A universal instruction to smell the sample"
        ],
        "answer": 1,
        "why": "Procedure and observation distinguish the hydrogen and oxygen tests.",
        "concept": "analysis.gas-evidence"
      }
    ],
    "lab": [
      {
        "id": "gas-splints",
        "title": "Choose contrasting tests",
        "prompt": "Match each sample to an appropriate positive test, then use the observation.",
        "fields": [
          {
            "key": "hydrogen",
            "label": "Hydrogen test",
            "type": "select",
            "options": [
              {
                "value": "burn",
                "label": "Burning splint at tube mouth: pop"
              },
              {
                "value": "glow",
                "label": "Glowing splint inserted: relights"
              },
              {
                "value": "lime",
                "label": "Limewater becomes cloudy"
              }
            ],
            "answer": "burn"
          },
          {
            "key": "oxygen",
            "label": "Oxygen test",
            "type": "select",
            "options": [
              {
                "value": "burn",
                "label": "Burning splint at tube mouth: pop"
              },
              {
                "value": "glow",
                "label": "Glowing splint inserted: relights"
              },
              {
                "value": "lime",
                "label": "Limewater becomes cloudy"
              }
            ],
            "answer": "glow"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Test",
            "Starting condition"
          ],
          "rows": [
            [
              "Hydrogen",
              "Burning splint"
            ],
            [
              "Oxygen",
              "Glowing splint"
            ]
          ]
        },
        "success": "Hydrogen gives a pop with a burning splint; oxygen relights a glowing splint.",
        "feedback": "The splint starting condition is part of the test. Do not interchange burning and glowing."
      },
      {
        "id": "gas-reagents",
        "title": "Select reagent and result",
        "prompt": "Distinguish the two reagent-based gas tests.",
        "fields": [
          {
            "key": "co2",
            "label": "Carbon dioxide",
            "type": "select",
            "options": [
              {
                "value": "lime",
                "label": "Limewater turns milky/cloudy"
              },
              {
                "value": "litmus",
                "label": "Damp litmus is bleached white"
              },
              {
                "value": "none",
                "label": "No reagent observation needed"
              }
            ],
            "answer": "lime"
          },
          {
            "key": "chlorine",
            "label": "Chlorine",
            "type": "select",
            "options": [
              {
                "value": "lime",
                "label": "Limewater turns milky/cloudy"
              },
              {
                "value": "litmus",
                "label": "Damp litmus is bleached white"
              },
              {
                "value": "dry",
                "label": "Dry litmus is the required positive test"
              }
            ],
            "answer": "litmus"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Gas sample",
            "Specified reagent",
            "Distinctive positive observation"
          ]
        },
        "success": "The reagent and observation work as a pair: limewater/CO₂ and damp litmus/chlorine.",
        "feedback": "Cloudiness and bleaching are different observations. Chlorine requires damp litmus."
      },
      {
        "id": "gas-evidence",
        "title": "Justify an identification",
        "prompt": "A carbonate reacts with dilute acid. The gas is colourless, forms bubbles and makes limewater cloudy.",
        "fields": [
          {
            "key": "identity",
            "label": "Supported identity",
            "type": "select",
            "options": [
              {
                "value": "co2",
                "label": "Carbon dioxide"
              },
              {
                "value": "h2",
                "label": "Hydrogen"
              },
              {
                "value": "o2",
                "label": "Oxygen"
              }
            ],
            "answer": "co2"
          },
          {
            "key": "decisive",
            "label": "Decisive observation",
            "type": "select",
            "options": [
              {
                "value": "cloud",
                "label": "Limewater becomes cloudy"
              },
              {
                "value": "bubbles",
                "label": "Bubbles alone"
              },
              {
                "value": "colourless",
                "label": "Colourless appearance alone"
              }
            ],
            "answer": "cloud"
          },
          {
            "key": "safe",
            "label": "Suitable handling",
            "type": "select",
            "options": [
              {
                "value": "school",
                "label": "Teacher-approved school method; do not directly smell gas"
              },
              {
                "value": "smell",
                "label": "Identify by smelling directly"
              },
              {
                "value": "home",
                "label": "Generate every unknown at home"
              }
            ],
            "answer": "school"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Observation",
            "Evidence"
          ],
          "rows": [
            [
              "Colourless",
              "Not unique"
            ],
            [
              "Bubbles",
              "Gas produced"
            ],
            [
              "Cloudy limewater",
              "Positive CO₂ test"
            ]
          ]
        },
        "success": "The limewater observation identifies carbon dioxide; bubbles and colourlessness do not.",
        "feedback": "Use the distinctive positive test and appropriate supervised handling, rather than a non-unique appearance."
      }
    ],
    "skills": [
      "WS2.2",
      "AT8"
    ]
  },
  {
    "id": "science.chemistry.analysis.cation-tests",
    "title": "Flame tests & metal hydroxides",
    "short": "Combine observations to identify cations",
    "refs": [
      "8.3.1",
      "8.3.2"
    ],
    "minutes": 30,
    "topicId": "science.chemistry.chemical-analysis",
    "widget": "catalog-analysis",
    "big": "Identify cations from reference observations, combine tests where one result is ambiguous, and balance hydroxide precipitation equations.",
    "learn": [
      {
        "title": "Read flame colours as evidence.",
        "text": "Separate Chemistry requires these flame-test colours: lithium crimson, sodium yellow, potassium lilac, calcium orange-red and copper green. Compare a sample with known references using a clean wire in a suitable flame. A mixture can mask some colours; an intense sodium colour does not prove no other cation is present. Other metal flame colours are not required knowledge.",
        "scene": "catalog:science.chemistry.analysis.cation-tests"
      },
      {
        "title": "Add sodium hydroxide solution.",
        "text": "With sodium hydroxide solution, copper(II) gives a blue hydroxide precipitate, iron(II) green and iron(III) brown. Aluminium, calcium and magnesium give white precipitates. A precipitate is an insoluble solid formed in solution; it is different from a flame colour or merely the original solution colour.",
        "scene": "catalog:science.chemistry.analysis.cation-tests"
      },
      {
        "title": "Test white precipitates further.",
        "text": "Only the aluminium hydroxide precipitate among aluminium, calcium and magnesium dissolves in excess sodium hydroxide. Calcium and magnesium remain white, so this observation alone does not distinguish those two. Combine suitable evidence, such as the specified calcium flame colour, or supplied reference data. Do not invent certainty from one non-unique observation.",
        "scene": "catalog:science.chemistry.analysis.cation-tests"
      },
      {
        "title": "Balance the precipitation equation.",
        "text": "For copper(II) sulfate: CuSO₄ + 2NaOH → Cu(OH)₂ + Na₂SO₄. Two hydroxide groups are needed for Cu²⁺, and the coefficient2 supplies them. For iron(III) chloride: FeCl₃ + 3NaOH → Fe(OH)₃ + 3NaCl. Balance coefficients without changing correct chemical formulae. Balanced molecular hydroxide equations are both-tier Chemistry content; equations forming sodium aluminate are not required.",
        "scene": "catalog:science.chemistry.analysis.cation-tests"
      },
      {
        "title": "Apply the same method to all six cations.",
        "text": "Using soluble chloride salts as examples: AlCl₃ +3NaOH →Al(OH)₃ +3NaCl; CaCl₂ +2NaOH →Ca(OH)₂ +2NaCl; MgCl₂ +2NaOH →Mg(OH)₂ +2NaCl; CuCl₂ +2NaOH →Cu(OH)₂ +2NaCl; FeCl₂ +2NaOH →Fe(OH)₂ +2NaCl; FeCl₃ +3NaOH →Fe(OH)₃ +3NaCl. Each hydroxide shown is the precipitate, and sodium chloride remains in solution. The cation charge determines the number of hydroxide groups; coefficients then conserve atoms. For calcium, use sufficiently concentrated solutions for the specified precipitate observation; limited solubility and sample conditions can affect visibility.",
        "scene": "catalog:science.chemistry.analysis.cation-tests"
      }
    ],
    "practice": [
      {
        "id": "analysis.p-cation1",
        "prompt": "Which ion gives the specified lilac flame?",
        "options": [
          "Potassium",
          "Lithium",
          "Calcium"
        ],
        "answer": 0,
        "why": "Potassium gives lilac; lithium crimson; calcium orange-red.",
        "concept": "analysis.flames"
      },
      {
        "id": "analysis.p-cation2",
        "prompt": "A white precipitate dissolves in excess NaOH. Which ion among Al,Ca,Mg is identified?",
        "options": [
          "Calcium",
          "Magnesium",
          "Aluminium"
        ],
        "answer": 2,
        "why": "Aluminium hydroxide dissolves in excess NaOH; the other two remain.",
        "concept": "analysis.hydroxides"
      },
      {
        "id": "analysis.p-cation3",
        "prompt": "Iron(III) solution plus NaOH gives…",
        "options": [
          "Green precipitate",
          "Brown precipitate",
          "No precipitate because all hydroxides dissolve"
        ],
        "answer": 1,
        "why": "Iron(III) hydroxide is brown; iron(II) hydroxide is green.",
        "concept": "analysis.hydroxides"
      },
      {
        "id": "analysis.p-cation4",
        "type": "number",
        "prompt": "In FeCl₃ + aNaOH → Fe(OH)₃ + aNaCl, what is a?",
        "answer": 3,
        "tolerance": 0,
        "unit": "",
        "why": "Three OH groups and three chloride ions require coefficient3.",
        "concept": "analysis.hydroxide-equations"
      }
    ],
    "check": [
      {
        "id": "analysis.c-cation1",
        "prompt": "Correct flame pair?",
        "options": [
          "Lithium yellow; sodium crimson",
          "Lithium crimson; sodium yellow",
          "Lithium green; sodium lilac"
        ],
        "answer": 1,
        "why": "The specified colours are lithium crimson and sodium yellow.",
        "concept": "analysis.flames"
      },
      {
        "id": "analysis.c-cation2",
        "prompt": "A calcium compound gives which specified flame colour?",
        "options": [
          "Orange-red",
          "Lilac",
          "Blue"
        ],
        "answer": 0,
        "why": "Calcium gives orange-red; copper gives green.",
        "concept": "analysis.flames"
      },
      {
        "id": "analysis.c-cation3",
        "prompt": "Which paired hydroxide colours are correct?",
        "options": [
          "Cu(II) brown; Fe(III) blue",
          "Cu(II) green; Fe(II) brown",
          "Cu(II) blue; Fe(II) green"
        ],
        "answer": 2,
        "why": "Copper(II) hydroxide is blue and iron(II) hydroxide green.",
        "concept": "analysis.hydroxides"
      },
      {
        "id": "analysis.c-cation4",
        "prompt": "White precipitate remains in excess NaOH. Which statement is supported?",
        "options": [
          "Calcium or magnesium are possible; this test alone does not distinguish them",
          "Aluminium is the only possible ion",
          "Every white precipitate identifies sodium"
        ],
        "answer": 0,
        "why": "Both calcium and magnesium fit the observation.",
        "concept": "analysis.cation-evidence"
      },
      {
        "id": "analysis.c-cation5",
        "type": "number",
        "prompt": "Coefficient of NaOH in AlCl₃ + aNaOH → Al(OH)₃ + aNaCl?",
        "answer": 3,
        "tolerance": 0,
        "unit": "",
        "why": "Aluminium hydroxide has three OH groups, so a=3.",
        "concept": "analysis.hydroxide-equations"
      },
      {
        "id": "analysis.c-cation6",
        "prompt": "Which formula is copper(II) hydroxide?",
        "options": [
          "CuOH",
          "Cu(OH)₂",
          "Cu₂OH"
        ],
        "answer": 1,
        "why": "Two OH− groups balance one Cu²⁺; do not change formulae just to balance equations.",
        "concept": "analysis.hydroxide-equations"
      },
      {
        "id": "analysis.c-cation7",
        "prompt": "A mixed sample shows a strong sodium-yellow flame. What follows?",
        "options": [
          "All other cations are proved absent",
          "Flame colours of mixtures can never be masked",
          "Other ion colours may be masked, so further evidence can help"
        ],
        "answer": 2,
        "why": "A mixture can mask colours; one observed colour is not exhaustive analysis.",
        "concept": "analysis.cation-evidence"
      },
      {
        "id": "analysis.c-cation8",
        "type": "number",
        "prompt": "Coefficient of NaOH in MgCl₂ + aNaOH → Mg(OH)₂ + aNaCl?",
        "answer": 2,
        "tolerance": 0,
        "unit": "",
        "why": "Two OH groups are needed for Mg²⁺ and two chloride ions form two NaCl.",
        "concept": "analysis.hydroxide-equations"
      }
    ],
    "lab": [
      {
        "id": "flame-reference",
        "title": "Match flame evidence",
        "prompt": "Use the specified observations to identify three reference samples.",
        "fields": [
          {
            "key": "crimson",
            "label": "Crimson flame",
            "type": "select",
            "options": [
              {
                "value": "li",
                "label": "Lithium"
              },
              {
                "value": "na",
                "label": "Sodium"
              },
              {
                "value": "cu",
                "label": "Copper"
              }
            ],
            "answer": "li"
          },
          {
            "key": "orange",
            "label": "Orange-red flame",
            "type": "select",
            "options": [
              {
                "value": "k",
                "label": "Potassium"
              },
              {
                "value": "ca",
                "label": "Calcium"
              },
              {
                "value": "mg",
                "label": "Magnesium"
              }
            ],
            "answer": "ca"
          },
          {
            "key": "green",
            "label": "Green flame",
            "type": "select",
            "options": [
              {
                "value": "cu",
                "label": "Copper"
              },
              {
                "value": "li",
                "label": "Lithium"
              },
              {
                "value": "na",
                "label": "Sodium"
              }
            ],
            "answer": "cu"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Metal ion",
            "Reference flame"
          ],
          "rows": [
            [
              "Li⁺",
              "Crimson"
            ],
            [
              "Na⁺",
              "Yellow"
            ],
            [
              "K⁺",
              "Lilac"
            ],
            [
              "Ca²⁺",
              "Orange-red"
            ],
            [
              "Cu²⁺",
              "Green"
            ]
          ]
        },
        "success": "The labels distinguish each specified reference colour; no extra flame colours are required.",
        "feedback": "Match the actual flame colour, not the solution or precipitate colour."
      },
      {
        "id": "white-precipitate",
        "title": "Resolve the white precipitate",
        "prompt": "An unknown gives a white precipitate with NaOH, which dissolves when more NaOH is added.",
        "fields": [
          {
            "key": "identity",
            "label": "Cation among Al,Ca,Mg",
            "type": "select",
            "options": [
              {
                "value": "al",
                "label": "Aluminium"
              },
              {
                "value": "ca",
                "label": "Calcium"
              },
              {
                "value": "mg",
                "label": "Magnesium"
              }
            ],
            "answer": "al"
          },
          {
            "key": "other",
            "label": "If it had remained white, this test alone would…",
            "type": "select",
            "options": [
              {
                "value": "ambiguous",
                "label": "Leave calcium and magnesium unresolved"
              },
              {
                "value": "calcium",
                "label": "Prove calcium uniquely"
              },
              {
                "value": "magnesium",
                "label": "Prove magnesium uniquely"
              }
            ],
            "answer": "ambiguous"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "NaOH added: white solid",
            "Excess NaOH: dissolves",
            "Among these candidates: Al³⁺"
          ]
        },
        "success": "Excess NaOH resolves aluminium; a persistent white solid does not resolve calcium from magnesium.",
        "feedback": "The first white precipitate is shared evidence. Use its response to excess reagent and respect remaining ambiguity."
      },
      {
        "id": "hydroxide-equation",
        "title": "Construct the hydroxide product",
        "prompt": "Complete the copper(II) sulfate equation. The other product is Na₂SO₄.",
        "fields": [
          {
            "key": "product",
            "label": "Hydroxide formula",
            "type": "formula",
            "answer": "Cu(OH)2"
          },
          {
            "key": "coefficient",
            "label": "NaOH coefficient",
            "type": "number",
            "answer": 2,
            "tolerance": 0
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Reactants",
            "Products"
          ],
          "rows": [
            [
              "CuSO₄ + ?NaOH",
              "? + Na₂SO₄"
            ]
          ]
        },
        "success": "Cu(OH)₂ needs two hydroxide groups: CuSO₄ +2NaOH →Cu(OH)₂ +Na₂SO₄.",
        "feedback": "One Cu²⁺ needs two OH− groups. Preserve the ion formula and balance with a coefficient."
      },
      {
        "id": "iron-equation",
        "title": "Build a second equation",
        "prompt": "For FeCl₃ + ?NaOH → ? + ?NaCl, construct the insoluble hydroxide and balance coefficients.",
        "fields": [
          {
            "key": "product",
            "label": "Hydroxide formula",
            "type": "formula",
            "answer": "Fe(OH)3"
          },
          {
            "key": "naoh",
            "label": "NaOH coefficient",
            "type": "number",
            "answer": 3,
            "tolerance": 0
          },
          {
            "key": "nacl",
            "label": "NaCl coefficient",
            "type": "number",
            "answer": 3,
            "tolerance": 0
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Ion",
            "Hydroxide observation"
          ],
          "rows": [
            [
              "Fe³⁺",
              "Brown precipitate"
            ]
          ]
        },
        "success": "FeCl₃ +3NaOH →Fe(OH)₃ +3NaCl balances all atoms; Fe(OH)₃ is brown.",
        "feedback": "Iron(III) needs three OH− groups; the three chloride ions also require three NaCl."
      },
      {
        "id": "divalent-hydroxides",
        "title": "Transfer the equation pattern",
        "prompt": "Complete the hydroxide formula for each metal chloride reacting with sodium hydroxide. Use the specified ion charge.",
        "fields": [
          {
            "key": "magnesium",
            "label": "Mg²⁺ hydroxide formula",
            "type": "formula",
            "answer": "Mg(OH)2"
          },
          {
            "key": "calcium",
            "label": "Ca²⁺ hydroxide formula",
            "type": "formula",
            "answer": "Ca(OH)2"
          },
          {
            "key": "iron2",
            "label": "Fe²⁺ hydroxide formula",
            "type": "formula",
            "answer": "Fe(OH)2"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Cation",
            "Precipitate observation"
          ],
          "rows": [
            [
              "Mg²⁺",
              "White"
            ],
            [
              "Ca²⁺",
              "White"
            ],
            [
              "Fe²⁺",
              "Green"
            ]
          ]
        },
        "success": "Each 2+ cation needs two OH− groups. The corresponding chloride equation uses2NaOH and forms2NaCl.",
        "feedback": "Keep the metal symbol and bracket the OH group. Two OH− groups balance each2+ charge; do not write a subscript on oxygen alone."
      }
    ],
    "skills": [
      "WS2.2",
      "AT8"
    ],
    "separate": true
  },
  {
    "id": "science.chemistry.analysis.anion-tests",
    "title": "Anion tests & unknown salts",
    "short": "Select reagents and combine ion evidence",
    "refs": [
      "8.3.1",
      "8.3.2",
      "8.3.3",
      "8.3.4",
      "8.3.5"
    ],
    "minutes": 30,
    "topicId": "science.chemistry.chemical-analysis",
    "widget": "catalog-analysis",
    "big": "Use specified reagent sequences on fresh portions, then combine cation and anion evidence to identify an unknown single salt.",
    "learn": [
      {
        "title": "Confirm carbonate gas.",
        "text": "A carbonate reacts with dilute acid to release carbon dioxide. Confirm that gas using limewater, which becomes cloudy. Effervescence alone is not unique to carbonates. For an unknown single ionic compound, identify the positive and negative ions using a planned set of observations; do not assume one result identifies the entire salt.",
        "scene": "catalog:science.chemistry.analysis.anion-tests"
      },
      {
        "title": "Distinguish the halides.",
        "text": "For chloride, bromide and iodide in solution, acidify a fresh portion with dilute nitric acid, then add silver nitrate solution. Silver chloride is white, silver bromide cream and silver iodide yellow. Nitric acid avoids introducing chloride; hydrochloric acid would add chloride and spoil a chloride inference. Acidification also reduces carbonate interference.",
        "scene": "catalog:science.chemistry.analysis.anion-tests"
      },
      {
        "title": "Test for sulfate.",
        "text": "Add dilute hydrochloric acid and then barium chloride solution to a separate fresh portion. Sulfate gives a white barium sulfate precipitate. A white solid alone is not an identification: silver chloride and several hydroxides are white too. State the reagent sequence with the observation. Do not transfer acidified silver-test mixtures into the sulfate test.",
        "scene": "catalog:science.chemistry.analysis.anion-tests"
      },
      {
        "title": "Plan a complete unknown analysis.",
        "text": "AQA Chemistry required practical7 identifies ions in unknown single ionic compounds using the specified flame and precipitation tests. Compare known references, use clean equipment and fresh sample portions, record both positive and negative observations, and infer each ion only as strongly as the evidence allows. A yellow flame and acidified-silver-nitrate cream precipitate support sodium bromide. This model prepares reasoning; school practical work and its risk assessment remain necessary.",
        "scene": "catalog:science.chemistry.analysis.anion-tests"
      }
    ],
    "practice": [
      {
        "id": "analysis.p-anion1",
        "prompt": "Which reagent sequence tests halides?",
        "options": [
          "Dilute nitric acid, then silver nitrate",
          "Hydrochloric acid, then silver nitrate",
          "NaOH followed by a burning splint"
        ],
        "answer": 0,
        "why": "Nitric acid avoids adding chloride before the silver nitrate test.",
        "concept": "analysis.halides"
      },
      {
        "id": "analysis.p-anion2",
        "prompt": "Acidified silver nitrate gives cream precipitate. Anion?",
        "options": [
          "Sulfate",
          "Chloride",
          "Bromide"
        ],
        "answer": 2,
        "why": "Silver bromide is cream; chloride white; iodide yellow.",
        "concept": "analysis.halides"
      },
      {
        "id": "analysis.p-anion3",
        "prompt": "Why use fresh portions for separate tests?",
        "options": [
          "To make all samples the same colour",
          "To avoid one reagent interfering with another test",
          "To turn a mixture into an element"
        ],
        "answer": 1,
        "why": "Carry-over contamination can create misleading observations.",
        "concept": "analysis.ion-method"
      },
      {
        "id": "analysis.p-anion4",
        "prompt": "Dilute acid releases a gas that turns limewater cloudy. This supports…",
        "options": [
          "Carbonate ions in the original sample",
          "Sodium ions uniquely",
          "Chlorine gas"
        ],
        "answer": 0,
        "why": "The confirmed CO₂ is evidence of carbonate reacting with acid.",
        "concept": "analysis.carbonates"
      }
    ],
    "check": [
      {
        "id": "analysis.c-anion1",
        "prompt": "A halide solution gives a yellow precipitate after nitric acid and silver nitrate. Identify it.",
        "options": [
          "Chloride",
          "Iodide",
          "Sulfate"
        ],
        "answer": 1,
        "why": "Silver iodide is yellow.",
        "concept": "analysis.halides"
      },
      {
        "id": "analysis.c-anion2",
        "prompt": "Which combination is the sulfate test?",
        "options": [
          "Dilute HCl and barium chloride: white precipitate",
          "Dilute nitric acid and silver nitrate: cream precipitate",
          "NaOH: blue precipitate"
        ],
        "answer": 0,
        "why": "Acidified barium chloride forms white BaSO₄ with sulfate.",
        "concept": "analysis.sulfates"
      },
      {
        "id": "analysis.c-anion3",
        "prompt": "Why is HCl unsuitable for acidifying a chloride-test sample?",
        "options": [
          "It removes every chloride ion",
          "It turns all ions into gases",
          "It introduces chloride ions"
        ],
        "answer": 2,
        "why": "The reagent would add the ion being tested for and can give a misleading positive.",
        "concept": "analysis.ion-method"
      },
      {
        "id": "analysis.c-anion4",
        "prompt": "A lilac flame plus white precipitate with acidified silver nitrate supports which single salt?",
        "options": [
          "Potassium chloride",
          "Sodium sulfate",
          "Calcium iodide"
        ],
        "answer": 0,
        "why": "Lilac identifies potassium; the specified white silver precipitate identifies chloride.",
        "concept": "analysis.unknown-salt"
      },
      {
        "id": "analysis.c-anion5",
        "prompt": "A white precipitate is reported without the reagent. Best response?",
        "options": [
          "Name sulfate immediately",
          "Request the reagent and procedure before identifying the ion",
          "Conclude the sample must be pure water"
        ],
        "answer": 1,
        "why": "Several specified tests give white precipitates; context is essential.",
        "concept": "analysis.unknown-salt"
      },
      {
        "id": "analysis.c-anion6",
        "prompt": "A carbonate test should include…",
        "options": [
          "Only a judgement of whether the solid looks white",
          "Only a flame colour",
          "Dilute acid and confirmation of evolved CO₂ with limewater"
        ],
        "answer": 2,
        "why": "Bubbles alone do not uniquely identify carbonate.",
        "concept": "analysis.carbonates"
      },
      {
        "id": "analysis.c-anion7",
        "prompt": "A green copper flame and acidified-barium-chloride white precipitate support…",
        "options": [
          "Copper sulfate",
          "Potassium bromide",
          "Sodium chloride"
        ],
        "answer": 0,
        "why": "Combine the cation and anion results to identify the single ionic compound.",
        "concept": "analysis.unknown-salt"
      }
    ],
    "lab": [
      {
        "id": "anion-reagents",
        "title": "Choose the correct acid",
        "prompt": "Use fresh portions and select a sequence for each test.",
        "fields": [
          {
            "key": "halide",
            "label": "Halide test",
            "type": "select",
            "options": [
              {
                "value": "nitric",
                "label": "Dilute nitric acid then silver nitrate"
              },
              {
                "value": "hcl",
                "label": "Dilute hydrochloric acid then silver nitrate"
              },
              {
                "value": "naoh",
                "label": "Sodium hydroxide only"
              }
            ],
            "answer": "nitric"
          },
          {
            "key": "sulfate",
            "label": "Sulfate test",
            "type": "select",
            "options": [
              {
                "value": "barium",
                "label": "Dilute HCl then barium chloride"
              },
              {
                "value": "silver",
                "label": "Dilute nitric acid then silver nitrate"
              },
              {
                "value": "litmus",
                "label": "Damp litmus"
              }
            ],
            "answer": "barium"
          },
          {
            "key": "aliquot",
            "label": "Sample handling",
            "type": "select",
            "options": [
              {
                "value": "fresh",
                "label": "Use a fresh portion for each test"
              },
              {
                "value": "same",
                "label": "Pour every reagent into one original portion"
              }
            ],
            "answer": "fresh"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Unknown solution",
            "Separate fresh portions",
            "Specific reagents",
            "Record observations"
          ]
        },
        "success": "The acid and reagent choices avoid misleading contamination and identify the intended anion.",
        "feedback": "HCl introduces chloride in a halide test. Use the specified sulfate reagents on a fresh portion."
      },
      {
        "id": "halide-bank",
        "title": "Interpret the silver precipitates",
        "prompt": "Each sample was acidified with nitric acid before silver nitrate was added.",
        "fields": [
          {
            "key": "white",
            "label": "White precipitate",
            "type": "select",
            "options": [
              {
                "value": "cl",
                "label": "Chloride"
              },
              {
                "value": "br",
                "label": "Bromide"
              },
              {
                "value": "i",
                "label": "Iodide"
              }
            ],
            "answer": "cl"
          },
          {
            "key": "cream",
            "label": "Cream precipitate",
            "type": "select",
            "options": [
              {
                "value": "cl",
                "label": "Chloride"
              },
              {
                "value": "br",
                "label": "Bromide"
              },
              {
                "value": "i",
                "label": "Iodide"
              }
            ],
            "answer": "br"
          },
          {
            "key": "yellow",
            "label": "Yellow precipitate",
            "type": "select",
            "options": [
              {
                "value": "cl",
                "label": "Chloride"
              },
              {
                "value": "br",
                "label": "Bromide"
              },
              {
                "value": "i",
                "label": "Iodide"
              }
            ],
            "answer": "i"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Solid",
            "Specified colour"
          ],
          "rows": [
            [
              "AgCl",
              "White"
            ],
            [
              "AgBr",
              "Cream"
            ],
            [
              "AgI",
              "Yellow"
            ]
          ]
        },
        "success": "The three silver halides give white, cream and yellow respectively.",
        "feedback": "Use precipitate colour after the specified reagent sequence; do not confuse flame colours with precipitates."
      },
      {
        "id": "unknown-salt",
        "title": "Identify both ions",
        "prompt": "An unknown single ionic compound gives the observations below.",
        "fields": [
          {
            "key": "cation",
            "label": "Positive ion",
            "type": "select",
            "options": [
              {
                "value": "na",
                "label": "Sodium"
              },
              {
                "value": "k",
                "label": "Potassium"
              },
              {
                "value": "ca",
                "label": "Calcium"
              }
            ],
            "answer": "na"
          },
          {
            "key": "anion",
            "label": "Negative ion",
            "type": "select",
            "options": [
              {
                "value": "br",
                "label": "Bromide"
              },
              {
                "value": "cl",
                "label": "Chloride"
              },
              {
                "value": "so4",
                "label": "Sulfate"
              }
            ],
            "answer": "br"
          },
          {
            "key": "salt",
            "label": "Formula of the compound",
            "type": "formula",
            "answer": "NaBr"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Test on fresh portion",
            "Observation"
          ],
          "rows": [
            [
              "Flame",
              "Yellow"
            ],
            [
              "Dilute HNO₃ then AgNO₃",
              "Cream precipitate"
            ],
            [
              "Dilute HCl then BaCl₂",
              "No precipitate"
            ]
          ]
        },
        "success": "The evidence supports sodium bromide, NaBr, with one Na⁺ for each Br−.",
        "feedback": "Identify each ion from its own test before combining charges into a formula."
      },
      {
        "id": "carbonate-confirm",
        "title": "Require a positive gas test",
        "prompt": "Dilute acid gives bubbles from a sample. Complete a justified conclusion.",
        "fields": [
          {
            "key": "confirm",
            "label": "Confirm the gas with…",
            "type": "select",
            "options": [
              {
                "value": "lime",
                "label": "Limewater becoming cloudy"
              },
              {
                "value": "glow",
                "label": "A glowing splint relighting"
              },
              {
                "value": "bleach",
                "label": "Damp litmus bleaching"
              }
            ],
            "answer": "lime"
          },
          {
            "key": "anion",
            "label": "Supported original anion",
            "type": "select",
            "options": [
              {
                "value": "carbonate",
                "label": "Carbonate"
              },
              {
                "value": "iodide",
                "label": "Iodide"
              },
              {
                "value": "sulfate",
                "label": "Sulfate"
              }
            ],
            "answer": "carbonate"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Sample + dilute acid",
            "Gas produced",
            "Cloudy limewater confirms CO₂"
          ]
        },
        "success": "Confirmed CO₂ from the acid reaction supports carbonate in the original sample.",
        "feedback": "Bubbles alone are not enough; connect the positive limewater result to the carbonate reaction."
      }
    ],
    "skills": [
      "WS2.2",
      "AT1",
      "AT8"
    ],
    "separate": true
  },
  {
    "id": "science.chemistry.analysis.flame-emission",
    "title": "Flame emission spectroscopy",
    "short": "Read line patterns and calibration data",
    "refs": [
      "8.3.6",
      "8.3.7"
    ],
    "minutes": 30,
    "topicId": "science.chemistry.chemical-analysis",
    "widget": "catalog-analysis",
    "big": "Use reference line positions to identify metal ions and supplied calibration data to estimate concentration; distinguish speed, sensitivity and accuracy.",
    "learn": [
      {
        "title": "Compare instrumental methods.",
        "text": "Instrumental methods can identify elements and compounds rapidly, sensitively and accurately. Rapid means fast; sensitive means able to detect small quantities; accurate results are close to an accepted value. Compare the instrument with the specified chemical tests for the task and supplied evidence. These benefits do not imply every instrument is automatically free from calibration or measurement error.",
        "scene": "catalog:science.chemistry.analysis.flame-emission"
      },
      {
        "title": "Follow the emission signal.",
        "text": "In flame emission spectroscopy, a sample containing metal ions is introduced into a flame. Light given out passes through a spectroscope, producing a line spectrum. Compare line positions with a reference set to identify metal ions. A line pattern contains more information than a single overall flame colour and can help analyse mixtures. This lesson does not require memorising real spectral wavelengths.",
        "scene": "catalog:science.chemistry.analysis.flame-emission"
      },
      {
        "title": "Use a calibration for concentration.",
        "text": "Supplied intensity or signal data can be compared with reference concentrations measured under comparable instrument conditions. For an illustrative calibration, signals20,40 and60 correspond to concentrations1,2 and3 mg/dm³. A signal50 corresponds to2.5 mg/dm³ if the given calibration is linear. Use that supplied relationship; brightness cannot compare concentrations across arbitrary different elements without calibration.",
        "scene": "catalog:science.chemistry.analysis.flame-emission"
      },
      {
        "title": "Interpret the limits of data.",
        "text": "Match line positions for identity and a stated calibrated signal for amount. A sample can contain a metal even at low concentration if its reference lines are detected. Do not treat a missing weak line as absolute proof of absence without considering detection limits. AQA requires interpreting flame-emission charts or tables accompanied by references, not an unsupported catalogue of unrelated instrumental techniques.",
        "scene": "catalog:science.chemistry.analysis.flame-emission"
      }
    ],
    "practice": [
      {
        "id": "analysis.p-spectra1",
        "prompt": "An instrument is described as sensitive. This means…",
        "options": [
          "It can detect small quantities",
          "It must take a long time",
          "Its casing changes colour"
        ],
        "answer": 0,
        "why": "Sensitivity concerns detection of small amounts.",
        "concept": "analysis.instrumental"
      },
      {
        "id": "analysis.p-spectra2",
        "prompt": "What is compared to identify a metal ion in flame emission?",
        "options": [
          "Only the sample bottle size",
          "Spectral line positions with reference patterns",
          "Only the total liquid volume"
        ],
        "answer": 1,
        "why": "Characteristic line patterns are compared with supplied references.",
        "concept": "analysis.emission"
      },
      {
        "id": "analysis.p-spectra3",
        "type": "number",
        "prompt": "Linear calibration:1 mg/dm³ gives20 signal units,3 gives60. Unknown signal50. Concentration?",
        "answer": 2.5,
        "tolerance": 0.001,
        "unit": "mg/dm³",
        "why": "50/20=2.5 using the supplied linear calibration.",
        "concept": "analysis.calibration"
      }
    ],
    "check": [
      {
        "id": "analysis.c-spectra1",
        "prompt": "Which advantage means that a result can be obtained quickly?",
        "options": [
          "Sensitive",
          "Accurate",
          "Rapid"
        ],
        "answer": 2,
        "why": "Rapid refers to speed; sensitivity and accuracy are different properties.",
        "concept": "analysis.instrumental"
      },
      {
        "id": "analysis.c-spectra2",
        "prompt": "Correct sequence for flame emission?",
        "options": [
          "Sample in flame → emitted light → spectroscope → line spectrum",
          "Sample in freezer → balance → chromatography paper",
          "Spectrum → new element automatically created"
        ],
        "answer": 0,
        "why": "Light emitted from the flame sample is analysed by the spectroscope.",
        "concept": "analysis.emission"
      },
      {
        "id": "analysis.c-spectra3",
        "prompt": "A reference has lines at illustrative positions10 and35; an unknown has10,35,60. What is supported?",
        "options": [
          "The reference ion may be present along with another signal",
          "The reference ion is proved absent",
          "The extra line means there is no chemical sample"
        ],
        "answer": 0,
        "why": "Matching reference positions support its presence; an additional signal may need further reference data.",
        "concept": "analysis.emission"
      },
      {
        "id": "analysis.c-spectra4",
        "type": "number",
        "prompt": "Calibration is linear through zero:2 mg/dm³ gives30 units. Unknown gives75 units. Concentration?",
        "answer": 5,
        "tolerance": 0.001,
        "unit": "mg/dm³",
        "why": "75/30×2=5 mg/dm³.",
        "concept": "analysis.calibration"
      },
      {
        "id": "analysis.c-spectra5",
        "prompt": "Can an uncalibrated brighter line from metal A prove more A than metal B?",
        "options": [
          "Yes, every element has identical brightness per concentration",
          "No; comparisons need suitable element-specific calibration",
          "Yes, because line wavelength is concentration"
        ],
        "answer": 1,
        "why": "Emission strengths differ; use the appropriate supplied calibration.",
        "concept": "analysis.calibration"
      },
      {
        "id": "analysis.c-spectra6",
        "prompt": "Which describes accuracy?",
        "options": [
          "Only detecting the smallest amount",
          "Only finishing quickly",
          "Closeness to the accepted value"
        ],
        "answer": 2,
        "why": "Accuracy concerns agreement with the accepted value.",
        "concept": "analysis.instrumental"
      }
    ],
    "lab": [
      {
        "id": "spectra-match",
        "title": "Read reference line patterns",
        "prompt": "Line positions are illustrative arbitrary units, not memorised real wavelengths.",
        "fields": [
          {
            "key": "identity",
            "label": "Pattern in unknown matching a reference",
            "type": "select",
            "options": [
              {
                "value": "a",
                "label": "Metal A"
              },
              {
                "value": "b",
                "label": "Metal B"
              },
              {
                "value": "none",
                "label": "Neither reference"
              }
            ],
            "answer": "b"
          },
          {
            "key": "evidence",
            "label": "Relevant evidence",
            "type": "select",
            "options": [
              {
                "value": "positions",
                "label": "Both line positions match B"
              },
              {
                "value": "count",
                "label": "Every two-line spectrum is the same element"
              },
              {
                "value": "volume",
                "label": "The bottle volume is identical"
              }
            ],
            "answer": "positions"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Sample",
            "Line positions /arbitrary units"
          ],
          "rows": [
            [
              "A",
              "12,48"
            ],
            [
              "B",
              "25,67"
            ],
            [
              "Unknown",
              "25,67"
            ]
          ]
        },
        "success": "Both unknown positions match B; line count alone would not distinguish these references.",
        "feedback": "Compare positions, not just the number of lines or overall colour."
      },
      {
        "id": "spectra-calibration",
        "title": "Read a linear calibration",
        "prompt": "This calibration is for the same metal under matching conditions and is linear through zero.",
        "fields": [
          {
            "key": "concentration",
            "label": "Unknown concentration /mg per dm³",
            "type": "number",
            "answer": 3,
            "tolerance": 0.001
          },
          {
            "key": "claim",
            "label": "What permits the calculation?",
            "type": "select",
            "options": [
              {
                "value": "calibrated",
                "label": "A supplied same-metal calibration under matching conditions"
              },
              {
                "value": "universal",
                "label": "Every metal has universally identical brightness"
              },
              {
                "value": "colour",
                "label": "The user-interface colour alone"
              }
            ],
            "answer": "calibrated"
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Concentration /mg dm⁻³",
            "Signal /arbitrary units"
          ],
          "rows": [
            [
              "0",
              "0"
            ],
            [
              "2",
              "36"
            ],
            [
              "4",
              "72"
            ],
            [
              "Unknown",
              "54"
            ]
          ]
        },
        "success": "54 is halfway between36 and72, so concentration is3 mg/dm³ for this calibration.",
        "feedback": "Use the stated proportional calibration, not a universal rule comparing unrelated metal lines."
      },
      {
        "id": "instrument-advantages",
        "title": "Choose a method for trace analysis",
        "prompt": "A lab must detect a very small metal amount and report promptly. A validated calibrated instrument is available.",
        "fields": [
          {
            "key": "small",
            "label": "Detecting small amounts is…",
            "type": "select",
            "options": [
              {
                "value": "sensitivity",
                "label": "Sensitivity"
              },
              {
                "value": "speed",
                "label": "Rapidity"
              },
              {
                "value": "accuracy",
                "label": "Accuracy"
              }
            ],
            "answer": "sensitivity"
          },
          {
            "key": "quick",
            "label": "Fast analysis is…",
            "type": "select",
            "options": [
              {
                "value": "sensitivity",
                "label": "Sensitivity"
              },
              {
                "value": "speed",
                "label": "Rapidity"
              },
              {
                "value": "accuracy",
                "label": "Accuracy"
              }
            ],
            "answer": "speed"
          },
          {
            "key": "valid",
            "label": "Best accuracy statement",
            "type": "select",
            "options": [
              {
                "value": "reference",
                "label": "Check calibration and compare with accepted/reference values"
              },
              {
                "value": "automatic",
                "label": "Every instrument reading is automatically exact"
              },
              {
                "value": "colour",
                "label": "Accuracy means the brightest display colour"
              }
            ],
            "answer": "reference"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Suitable calibrated method",
            "Sensitive detection",
            "Rapid results",
            "Evaluate accuracy against references"
          ]
        },
        "success": "Sensitivity, speed and accuracy describe different useful properties; calibration still matters.",
        "feedback": "Separate the meanings of sensitive, rapid and accurate, and avoid claiming an instrument is automatically perfect."
      }
    ],
    "skills": [
      "WS3.6",
      "MS4a",
      "AT8"
    ],
    "separate": true
  }
];
export const analysisCompletionConcepts={
  "analysis.purity": "Chemical purity and physical-property evidence",
  "analysis.formulations": "Purposeful formulation components",
  "analysis.rf": "Rf ratios and distances",
  "analysis.chromatogram": "Chromatogram interpretation",
  "analysis.phases": "Chromatography phases and distribution",
  "analysis.chrom-method": "Chromatography method choices",
  "analysis.chrom-evaluation": "Chromatography uncertainty and evaluation",
  "analysis.gases": "Specified gas tests",
  "analysis.gas-evidence": "Gas-identification evidence",
  "analysis.flames": "Specified flame colours",
  "analysis.hydroxides": "Metal hydroxide observations",
  "analysis.hydroxide-equations": "Balanced hydroxide equations",
  "analysis.cation-evidence": "Combining cation-test evidence",
  "analysis.halides": "Acidified silver-nitrate halide tests",
  "analysis.ion-method": "Fresh portions and reagent choice",
  "analysis.carbonates": "Carbonate confirmation",
  "analysis.sulfates": "Acidified barium-chloride sulfate test",
  "analysis.unknown-salt": "Combining unknown-salt ion evidence",
  "analysis.instrumental": "Instrumental method advantages",
  "analysis.emission": "Flame-emission reference patterns",
  "analysis.calibration": "Concentration calibration data"
};
