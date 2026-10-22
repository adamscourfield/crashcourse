export const organicCompletionLessons=[
  {
    "id": "science.chemistry.organic.alkanes",
    "title": "Crude oil & alkanes",
    "short": "Crude oil & alkanes",
    "refs": [
      "7.1.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "Crude oil is a finite resource in rocks, formed from ancient biomass, mainly plankton buried in mud.",
    "learn": [
      {
        "title": "A finite mixture",
        "text": "Crude oil is a finite resource in rocks, formed from ancient biomass, mainly plankton buried in mud. It is a mixture of many compounds, mostly hydrocarbons: molecules containing only carbon and hydrogen.",
        "scene": "catalog:science.chemistry.organic.alkanes"
      },
      {
        "title": "Recognise the family",
        "text": "Alkanes have only single carbon–carbon bonds and follow CnH2n+2. Methane CH4, ethane C2H6, propane C3H8 and butane C4H10 are the first four. A homologous series has related structures and similar chemical behaviour.",
        "scene": "catalog:science.chemistry.organic.alkanes"
      },
      {
        "title": "Connect formulas and structures",
        "text": "Carbon forms four bonds; hydrogen one. Ethane is CH3–CH3: each carbon has three H atoms and one bond to the other carbon. Molecular formula counts atoms; a displayed formula shows every atom and bond. Use the text bond lists in the lab to check every carbon valence; draw the fully displayed version on paper.",
        "scene": "catalog:science.chemistry.organic.alkanes"
      }
    ],
    "practice": [
      {
        "prompt": "Which is a hydrocarbon?",
        "options": [
          "C3H8",
          "C2H5OH",
          "CO2"
        ],
        "answer": 0,
        "why": "It contains only C and H.",
        "id": "organic.p-alkanes1",
        "concept": "organic.alkanes"
      },
      {
        "prompt": "An alkane has 6 carbon atoms. How many hydrogen atoms?",
        "type": "number",
        "answer": 14,
        "tolerance": 0.001,
        "unit": "",
        "why": "2×6+2=14.",
        "id": "organic.p-alkanes2",
        "concept": "organic.alkanes"
      },
      {
        "prompt": "Why is crude oil finite?",
        "options": [
          "It is used far faster than it forms",
          "It is one pure element",
          "It reforms overnight"
        ],
        "answer": 0,
        "why": "Formation takes geological time.",
        "id": "organic.p-alkanes3",
        "concept": "organic.alkanes"
      }
    ],
    "check": [
      {
        "prompt": "Which description matches crude oil?",
        "options": [
          "A mixture formed from ancient biomass",
          "A pure compound",
          "A renewable metal"
        ],
        "answer": 0,
        "why": "Mainly plankton was buried in mud.",
        "id": "organic.c-alkanes1",
        "concept": "organic.alkanes"
      },
      {
        "prompt": "Hydrogen count in an alkane with 7 carbons?",
        "type": "number",
        "answer": 16,
        "tolerance": 0.001,
        "unit": "",
        "why": "2×7+2=16.",
        "id": "organic.c-alkanes2",
        "concept": "organic.alkanes"
      },
      {
        "prompt": "Name C4H10.",
        "options": [
          "Butane",
          "Propane",
          "Ethane"
        ],
        "answer": 0,
        "why": "The first four end in butane.",
        "id": "organic.c-alkanes3",
        "concept": "organic.alkanes"
      },
      {
        "prompt": "Which atom count matches ethane?",
        "options": [
          "2 carbon and 6 hydrogen",
          "2 carbon and 4 hydrogen",
          "6 carbon and 2 hydrogen"
        ],
        "answer": 0,
        "why": "C2H6 counts each atom type.",
        "id": "organic.c-alkanes4",
        "concept": "organic.alkanes"
      },
      {
        "prompt": "A displayed formula provides…",
        "options": [
          "The atoms and bonds between them",
          "Only boiling point",
          "A photograph at actual scale"
        ],
        "answer": 0,
        "why": "A molecular formula only gives counts.",
        "id": "organic.c-alkanes5",
        "concept": "organic.alkanes"
      }
    ],
    "lab": [
      {
        "title": "Predict a family formula",
        "prompt": "Enter the alkane with three carbons.",
        "fields": [
          {
            "key": "formula",
            "label": "Molecular formula",
            "type": "formula",
            "answer": "C3H8"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "C count = 3",
            "H count = 2n + 2"
          ]
        },
        "success": "C3H8 belongs to the alkane family.",
        "feedback": "Apply 2n+2 and preserve element case.",
        "id": "alkanes1"
      },
      {
        "title": "Check a structure",
        "prompt": "A chain has two carbons joined by one bond. How many H atoms attach to EACH carbon?",
        "fields": [
          {
            "key": "h",
            "label": "H on each C",
            "type": "number",
            "answer": 3,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "molecule",
          "atoms": [
            "C",
            "C",
            "H",
            "H",
            "H",
            "H",
            "H",
            "H"
          ],
          "bonds": [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              1
            ],
            [
              0,
              3,
              1
            ],
            [
              0,
              4,
              1
            ],
            [
              1,
              5,
              1
            ],
            [
              1,
              6,
              1
            ],
            [
              1,
              7,
              1
            ]
          ]
        },
        "success": "Three H on each carbon gives C2H6.",
        "feedback": "The C–C bond uses one of each carbon’s four bonds.",
        "id": "alkanes2"
      },
      {
        "title": "Identify a mixture",
        "prompt": "A sample contains CH4 and C2H6. Predict its classification.",
        "fields": [
          {
            "key": "class",
            "label": "Classification",
            "type": "select",
            "answer": "mixture",
            "options": [
              {
                "value": "mixture",
                "label": "Mixture"
              },
              {
                "value": "compound",
                "label": "One compound"
              },
              {
                "value": "element",
                "label": "One element"
              }
            ]
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Molecule",
            "Count"
          ],
          "rows": [
            [
              "CH4",
              "12"
            ],
            [
              "C2H6",
              "8"
            ]
          ]
        },
        "success": "Two different compounds form a mixture.",
        "feedback": "The two types have not become one compound.",
        "id": "alkanes3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.distillation",
    "title": "Fractional distillation & feedstock",
    "short": "Fractional distillation & feedstock",
    "refs": [
      "7.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "Heat crude oil so much of it evaporates.",
    "learn": [
      {
        "title": "Separate by boiling behaviour",
        "text": "Heat crude oil so much of it evaporates. The fractionating column is hot at the bottom and cooler at the top. Vapours rise and condense when the surroundings are cool enough for their boiling ranges.",
        "scene": "catalog:science.chemistry.organic.distillation"
      },
      {
        "title": "Collect useful fractions",
        "text": "Fractions contain hydrocarbons with similar carbon counts and boiling ranges; they remain mixtures. Smaller molecules usually have lower boiling points and are collected higher up. Large molecules condense lower down; very heavy residue remains near the bottom. No new molecules are made by distillation.",
        "scene": "catalog:science.chemistry.organic.distillation"
      },
      {
        "title": "Fuel and feedstock",
        "text": "Crude-oil products include petrol, diesel oil, kerosene, heavy fuel oil and liquefied petroleum gases. Petrochemical feedstock is processed to make solvents, lubricants, polymers and detergents. These are examples; recall of further fraction names is not required.",
        "scene": "catalog:science.chemistry.organic.distillation"
      }
    ],
    "practice": [
      {
        "prompt": "Why is the top cooler useful?",
        "options": [
          "Different vapours condense at different levels",
          "It converts all molecules into water",
          "It makes every fraction pure"
        ],
        "answer": 0,
        "why": "Boiling ranges allow separation.",
        "id": "organic.p-distillation1",
        "concept": "organic.distillation"
      },
      {
        "prompt": "What is feedstock?",
        "options": [
          "A starting material for chemical manufacture",
          "Only something burned",
          "A catalyst"
        ],
        "answer": 0,
        "why": "Hydrocarbons can make many useful chemicals.",
        "id": "organic.p-distillation2",
        "concept": "organic.distillation"
      },
      {
        "prompt": "What happens chemically in distillation?",
        "options": [
          "No new substances are formed",
          "Hydrocarbons split",
          "Carbon becomes hydrogen"
        ],
        "answer": 0,
        "why": "It is a physical separation.",
        "id": "organic.p-distillation3",
        "concept": "organic.distillation"
      }
    ],
    "check": [
      {
        "prompt": "A lower-boiling fraction is collected…",
        "options": [
          "Higher in the cooler column",
          "Only at the hottest bottom",
          "Always as solid carbon"
        ],
        "answer": 0,
        "why": "It stays vapour until reaching a cooler region.",
        "id": "organic.c-distillation1",
        "concept": "organic.distillation"
      },
      {
        "prompt": "Why does a fraction remain a mixture?",
        "options": [
          "It contains several hydrocarbons with similar boiling ranges",
          "Every molecule is identical",
          "Condensation creates oxygen"
        ],
        "answer": 0,
        "why": "A fraction is not normally one pure compound.",
        "id": "organic.c-distillation2",
        "concept": "organic.distillation"
      },
      {
        "prompt": "Which pair contains petrochemical products?",
        "options": [
          "Detergents and solvents",
          "Iron and helium",
          "Only oxygen and water"
        ],
        "answer": 0,
        "why": "Both can be manufactured from feedstock.",
        "id": "organic.c-distillation3",
        "concept": "organic.distillation"
      },
      {
        "prompt": "Condensation is…",
        "options": [
          "Gas changing to liquid",
          "Breaking C–C bonds",
          "Liquid becoming gas"
        ],
        "answer": 0,
        "why": "Cooling vapour makes liquid fractions.",
        "id": "organic.c-distillation4",
        "concept": "organic.distillation"
      },
      {
        "prompt": "Why can a column separate hydrocarbons?",
        "options": [
          "Their boiling points differ",
          "Their carbon atoms are different elements",
          "They all boil at exactly one temperature"
        ],
        "answer": 0,
        "why": "Evaporation and condensation separate them.",
        "id": "organic.c-distillation5",
        "concept": "organic.distillation"
      }
    ],
    "lab": [
      {
        "title": "Choose a collection region",
        "prompt": "A supplied fraction boils near 70°C. Choose a region cool enough to condense it from rising vapour.",
        "fields": [
          {
            "key": "zone",
            "label": "Column region",
            "type": "select",
            "answer": "cool",
            "options": [
              {
                "value": "cool",
                "label": "Upper region around 60°C"
              },
              {
                "value": "hot",
                "label": "Lower region around 250°C"
              }
            ]
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Region",
            "Temperature"
          ],
          "rows": [
            [
              "Upper",
              "60°C"
            ],
            [
              "Lower",
              "250°C"
            ]
          ]
        },
        "success": "The upper cooler region can condense this vapour.",
        "feedback": "At 250°C this low-boiling material remains vapour.",
        "id": "distillation1"
      },
      {
        "title": "Order the fractions",
        "prompt": "Which sample travels highest before condensing?",
        "fields": [
          {
            "key": "sample",
            "label": "Sample",
            "type": "select",
            "answer": "a",
            "options": [
              {
                "value": "a",
                "label": "A: boiling range 30–70°C"
              },
              {
                "value": "b",
                "label": "B: 180–250°C"
              },
              {
                "value": "c",
                "label": "C: 300–400°C"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Hot base",
            "Cool top"
          ]
        },
        "success": "A has the lowest boiling range.",
        "feedback": "Lower boiling materials remain vapour further up.",
        "id": "distillation2"
      },
      {
        "title": "Select the process",
        "prompt": "We want to separate a mixture without changing molecules.",
        "fields": [
          {
            "key": "process",
            "label": "Process",
            "type": "select",
            "answer": "distil",
            "options": [
              {
                "value": "distil",
                "label": "Fractional distillation"
              },
              {
                "value": "crack",
                "label": "Cracking"
              },
              {
                "value": "burn",
                "label": "Combustion"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Mixture",
            "Fractions"
          ]
        },
        "success": "Distillation separates existing compounds.",
        "feedback": "Cracking and combustion make new substances.",
        "id": "distillation3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.hydrocarbon-properties",
    "title": "Hydrocarbon properties & combustion",
    "short": "Hydrocarbon properties & combustion",
    "refs": [
      "7.1.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "As hydrocarbon molecules become larger, boiling point and viscosity increase, while flammability decreases.",
    "learn": [
      {
        "title": "Molecular size changes properties",
        "text": "As hydrocarbon molecules become larger, boiling point and viscosity increase, while flammability decreases. Viscosity means resistance to flow. These trends help explain why small molecules suit readily ignited fuels and larger molecules suit lubricants.",
        "scene": "catalog:science.chemistry.organic.hydrocarbon-properties"
      },
      {
        "title": "Burn completely",
        "text": "Combustion releases energy. In complete combustion enough oxygen is available: carbon is oxidised to carbon dioxide and hydrogen to water. Methane: CH4 + 2O2 → CO2 + 2H2O.",
        "scene": "catalog:science.chemistry.organic.hydrocarbon-properties"
      },
      {
        "title": "Balance atoms, not formulas",
        "text": "For propane start C3H8 → 3CO2 + 4H2O. Products contain ten oxygen atoms, so add 5O2. Final equation: C3H8 + 5O2 → 3CO2 + 4H2O. Change coefficients only. With insufficient oxygen, incomplete combustion can give carbon monoxide and soot; that is not the complete-combustion equation.",
        "scene": "catalog:science.chemistry.organic.hydrocarbon-properties"
      }
    ],
    "practice": [
      {
        "prompt": "A larger hydrocarbon tends to be…",
        "options": [
          "More viscous",
          "More flammable always",
          "Lower boiling always"
        ],
        "answer": 0,
        "why": "Larger molecules flow less easily.",
        "id": "organic.p-hydrocarbon-properties1",
        "concept": "organic.hydrocarbon-properties"
      },
      {
        "prompt": "O2 coefficient: CH4 + ?O2 → CO2 + 2H2O",
        "type": "number",
        "answer": 2,
        "tolerance": 0.001,
        "unit": "",
        "why": "Four oxygen atoms need two O2.",
        "id": "organic.p-hydrocarbon-properties2",
        "concept": "organic.hydrocarbon-properties"
      },
      {
        "prompt": "CO2 coefficient when one C4H10 burns completely?",
        "type": "number",
        "answer": 4,
        "tolerance": 0.001,
        "unit": "",
        "why": "Each of four carbon atoms makes a CO2.",
        "id": "organic.p-hydrocarbon-properties3",
        "concept": "organic.hydrocarbon-properties"
      }
    ],
    "check": [
      {
        "prompt": "Increasing molecule size usually causes…",
        "options": [
          "Higher boiling point",
          "Lower viscosity",
          "Greater flammability"
        ],
        "answer": 0,
        "why": "More energy is needed to separate the molecules.",
        "id": "organic.c-hydrocarbon-properties1",
        "concept": "organic.hydrocarbon-properties"
      },
      {
        "prompt": "H2O coefficient: C2H6 + O2 → CO2 + ?H2O, before integer scaling",
        "type": "number",
        "answer": 3,
        "tolerance": 0.001,
        "unit": "",
        "why": "Six H atoms make three waters.",
        "id": "organic.c-hydrocarbon-properties2",
        "concept": "organic.hydrocarbon-properties"
      },
      {
        "prompt": "O2 coefficient: 2C2H6 + ?O2 → 4CO2 + 6H2O",
        "type": "number",
        "answer": 7,
        "tolerance": 0.001,
        "unit": "",
        "why": "Four CO2 and six waters contain fourteen O atoms.",
        "id": "organic.c-hydrocarbon-properties3",
        "concept": "organic.hydrocarbon-properties"
      },
      {
        "prompt": "Complete combustion produces…",
        "options": [
          "Carbon dioxide and water",
          "Only carbon monoxide",
          "Hydrogen and carbon"
        ],
        "answer": 0,
        "why": "Carbon and hydrogen are oxidised.",
        "id": "organic.c-hydrocarbon-properties4",
        "concept": "organic.hydrocarbon-properties"
      },
      {
        "prompt": "A balanced equation preserves…",
        "options": [
          "The number of each type of atom",
          "Only the total number of molecules",
          "The same coefficients everywhere"
        ],
        "answer": 0,
        "why": "Atoms are rearranged, not created.",
        "id": "organic.c-hydrocarbon-properties5",
        "concept": "organic.hydrocarbon-properties"
      }
    ],
    "lab": [
      {
        "title": "Predict trends",
        "prompt": "Compare a long-chain hydrocarbon with a short-chain one.",
        "fields": [
          {
            "key": "bp",
            "label": "Boiling point",
            "type": "select",
            "answer": "higher",
            "options": [
              {
                "value": "higher",
                "label": "Higher"
              },
              {
                "value": "lower",
                "label": "Lower"
              }
            ]
          },
          {
            "key": "flow",
            "label": "Viscosity",
            "type": "select",
            "answer": "higher",
            "options": [
              {
                "value": "higher",
                "label": "Higher"
              },
              {
                "value": "lower",
                "label": "Lower"
              }
            ]
          },
          {
            "key": "flame",
            "label": "Flammability",
            "type": "select",
            "answer": "lower",
            "options": [
              {
                "value": "higher",
                "label": "Higher"
              },
              {
                "value": "lower",
                "label": "Lower"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Short chains",
            "Long chains"
          ]
        },
        "success": "All three trends match increasing molecular size.",
        "feedback": "Boiling point and viscosity rise; flammability falls.",
        "id": "hydrocarbon-properties1"
      },
      {
        "title": "Balance propane",
        "prompt": "C3H8 + aO2 → bCO2 + cH2O",
        "fields": [
          {
            "key": "a",
            "label": "a",
            "type": "number",
            "answer": 5,
            "tolerance": 0.001
          },
          {
            "key": "b",
            "label": "b",
            "type": "number",
            "answer": 3,
            "tolerance": 0.001
          },
          {
            "key": "c",
            "label": "c",
            "type": "number",
            "answer": 4,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "C3H8 + O2",
            "CO2 + H2O"
          ]
        },
        "success": "Carbon, hydrogen and oxygen are balanced.",
        "feedback": "Balance C first, H next, O last.",
        "id": "hydrocarbon-properties2"
      },
      {
        "title": "Balance a fresh fuel",
        "prompt": "C5H12 + aO2 → bCO2 + cH2O",
        "fields": [
          {
            "key": "a",
            "label": "a",
            "type": "number",
            "answer": 8,
            "tolerance": 0.001
          },
          {
            "key": "b",
            "label": "b",
            "type": "number",
            "answer": 5,
            "tolerance": 0.001
          },
          {
            "key": "c",
            "label": "c",
            "type": "number",
            "answer": 6,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "C5H12 + O2",
            "CO2 + H2O"
          ]
        },
        "success": "5 CO2 and 6 waters need 8 O2.",
        "feedback": "Five carbons give five CO2; twelve H give six waters.",
        "id": "hydrocarbon-properties3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.cracking",
    "title": "Cracking & the alkene test",
    "short": "Cracking & the alkene test",
    "refs": [
      "7.1.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "Cracking converts large hydrocarbon molecules into smaller, more useful ones.",
    "learn": [
      {
        "title": "Split useful molecules",
        "text": "Cracking converts large hydrocarbon molecules into smaller, more useful ones. Heat vaporises the feedstock; catalytic cracking passes vapour over a hot catalyst. Steam cracking mixes hydrocarbon vapour with steam and heats strongly. General conditions matter; no precise numerical temperature is required here.",
        "scene": "catalog:science.chemistry.organic.cracking"
      },
      {
        "title": "Conserve the atoms",
        "text": "Products include alkanes and more reactive alkenes. One possible reaction is C10H22 → C8H18 + C2H4. Many product combinations are possible; balance given formulae rather than assuming one unique split. Trilogy students need not recall individual alkene names or formulae.",
        "scene": "catalog:science.chemistry.organic.cracking"
      },
      {
        "title": "Test and use alkenes",
        "text": "Bromine water changes from orange/brown to colourless when it reacts with an alkene. Under ordinary test conditions an alkane does not decolourise it. Smaller fuel molecules meet high demand, while alkenes make polymers and other chemicals. Hydrocarbons supply transport fuels and feedstock for many everyday materials.",
        "scene": "catalog:science.chemistry.organic.cracking"
      }
    ],
    "practice": [
      {
        "prompt": "Cracking is useful because…",
        "options": [
          "It makes smaller fuels and alkene feedstock",
          "It produces atoms from nothing",
          "It is only a physical separation"
        ],
        "answer": 0,
        "why": "Demand differs between molecule sizes.",
        "id": "organic.p-cracking1",
        "concept": "organic.cracking"
      },
      {
        "prompt": "C12H26 → C10H22 + CxH4. What is x?",
        "type": "number",
        "answer": 2,
        "tolerance": 0.001,
        "unit": "",
        "why": "12−10=2 carbon atoms.",
        "id": "organic.p-cracking2",
        "concept": "organic.cracking"
      },
      {
        "prompt": "An alkene turns bromine water…",
        "options": [
          "From orange/brown to colourless",
          "From colourless to purple",
          "Permanently orange"
        ],
        "answer": 0,
        "why": "The reagent reacts with the alkene.",
        "id": "organic.p-cracking3",
        "concept": "organic.cracking"
      }
    ],
    "check": [
      {
        "prompt": "Catalytic cracking uses…",
        "options": [
          "Hydrocarbon vapour and a hot catalyst",
          "Only a cold filter",
          "Only sunlight"
        ],
        "answer": 0,
        "why": "Heat plus catalyst breaks larger molecules.",
        "id": "organic.c-cracking1",
        "concept": "organic.cracking"
      },
      {
        "prompt": "Steam cracking generally uses…",
        "options": [
          "Hydrocarbon vapour, steam and strong heating",
          "Liquid water at room temperature only",
          "A freezing column"
        ],
        "answer": 0,
        "why": "It is a different cracking method.",
        "id": "organic.c-cracking2",
        "concept": "organic.cracking"
      },
      {
        "prompt": "C14H30 → C12H26 + CxH4. Carbon count x?",
        "type": "number",
        "answer": 2,
        "tolerance": 0.001,
        "unit": "",
        "why": "Carbon is conserved.",
        "id": "organic.c-cracking3",
        "concept": "organic.cracking"
      },
      {
        "prompt": "Which observation supports alkene presence?",
        "options": [
          "Bromine water decolourises",
          "Bromine water stays orange in the ordinary test",
          "A mixture becomes colder only"
        ],
        "answer": 0,
        "why": "Alkenes react with bromine water.",
        "id": "organic.c-cracking4",
        "concept": "organic.cracking"
      },
      {
        "prompt": "Which product has a feedstock role?",
        "options": [
          "An alkene used to make a polymer",
          "A hydrocarbon can only ever be burned",
          "A catalyst used up as fuel"
        ],
        "answer": 0,
        "why": "It can be chemically converted into useful materials.",
        "id": "organic.c-cracking5",
        "concept": "organic.cracking"
      }
    ],
    "lab": [
      {
        "title": "Complete a supplied equation",
        "prompt": "C9H20 → C7H16 + ? Enter the missing molecular formula.",
        "fields": [
          {
            "key": "product",
            "label": "Missing product",
            "type": "formula",
            "answer": "C2H4"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "C9H20",
            "C7H16 + ?"
          ]
        },
        "success": "C2H4 preserves both atom counts.",
        "feedback": "Subtract carbon and hydrogen atoms separately.",
        "id": "cracking1"
      },
      {
        "title": "Predict the test",
        "prompt": "Sample contains an alkene. What will happen to bromine water?",
        "fields": [
          {
            "key": "test",
            "label": "Observation",
            "type": "select",
            "answer": "clear",
            "options": [
              {
                "value": "clear",
                "label": "Orange/brown becomes colourless"
              },
              {
                "value": "same",
                "label": "Remains orange/brown"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Alkene",
            "Bromine-water test"
          ]
        },
        "success": "Decolourisation supports an alkene.",
        "feedback": "Alkenes react; ordinary alkanes do not decolourise this reagent.",
        "id": "cracking2"
      },
      {
        "title": "Choose a process",
        "prompt": "A refinery has excess large molecules and demand for smaller fuels.",
        "fields": [
          {
            "key": "method",
            "label": "Useful change",
            "type": "select",
            "answer": "crack",
            "options": [
              {
                "value": "crack",
                "label": "Crack large hydrocarbons"
              },
              {
                "value": "filter",
                "label": "Filter the crude oil"
              },
              {
                "value": "freeze",
                "label": "Freeze every fraction"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Large molecules",
            "Smaller fuels + alkenes"
          ]
        },
        "success": "Cracking changes the molecule sizes.",
        "feedback": "Distillation sorts molecules; cracking changes them.",
        "id": "cracking3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.alkenes",
    "title": "Alkene structures",
    "short": "Alkene structures",
    "refs": [
      "7.2.1"
    ],
    "separate": true,
    "higher": false,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "Alkenes are hydrocarbons containing a carbon–carbon double bond.",
    "learn": [
      {
        "title": "Spot the double bond",
        "text": "Alkenes are hydrocarbons containing a carbon–carbon double bond. For the family with one C=C and no ring, the general formula is CnH2n. They are unsaturated: compared with the corresponding alkane, they have two fewer hydrogen atoms.",
        "scene": "catalog:science.chemistry.organic.alkenes"
      },
      {
        "title": "Name the first four",
        "text": "Ethene C2H4, propene C3H6, butene C4H8 and pentene C5H10 are the first four members. Recognise both names and supplied molecular/displayed formulae. In this lesson, butene and pentene examples put the double bond at the end of a straight chain.",
        "scene": "catalog:science.chemistry.organic.alkenes"
      },
      {
        "title": "Build every bond",
        "text": "Ethene is CH2=CH2; propene is CH2=CH–CH3. Every carbon must have four bonds, counting a double bond as two. Fully displayed structures show each H and C–H bond as well as the carbon skeleton. But-1-ene is CH2=CH–CH2–CH3; pent-1-ene is CH2=CH–CH2–CH2–CH3. Extend CH2=CH– with –CH2– units and a final –CH3 to build the family. A formula alone is not always enough to distinguish structural arrangements; use the supplied structure.",
        "scene": "catalog:science.chemistry.organic.alkenes"
      }
    ],
    "practice": [
      {
        "prompt": "Which group identifies an alkene?",
        "options": [
          "C=C",
          "C–O–C",
          "Only C–C single bonds"
        ],
        "answer": 0,
        "why": "A carbon–carbon double bond is the functional group.",
        "id": "organic.p-alkenes1",
        "concept": "organic.alkenes"
      },
      {
        "prompt": "Hydrogen atoms in a five-carbon alkene in this family?",
        "type": "number",
        "answer": 10,
        "tolerance": 0.001,
        "unit": "",
        "why": "CnH2n gives ten.",
        "id": "organic.p-alkenes2",
        "concept": "organic.alkenes"
      },
      {
        "prompt": "CH2=CH–CH3 is…",
        "options": [
          "Propene",
          "Propane",
          "Ethene"
        ],
        "answer": 0,
        "why": "There are three carbons and one double bond.",
        "id": "organic.p-alkenes3",
        "concept": "organic.alkenes"
      }
    ],
    "check": [
      {
        "prompt": "The first alkene is…",
        "options": [
          "Ethene",
          "Methene",
          "Methane"
        ],
        "answer": 0,
        "why": "A C=C needs two carbons.",
        "id": "organic.c-alkenes1",
        "concept": "organic.alkenes"
      },
      {
        "prompt": "Hydrogen atoms in a six-carbon alkene with one double bond and no ring?",
        "type": "number",
        "answer": 12,
        "tolerance": 0.001,
        "unit": "",
        "why": "2×6=12.",
        "id": "organic.c-alkenes2",
        "concept": "organic.alkenes"
      },
      {
        "prompt": "Why is ethene unsaturated?",
        "options": [
          "It has a C=C and fewer H than ethane",
          "It contains oxygen",
          "Its carbons have five bonds"
        ],
        "answer": 0,
        "why": "It can undergo addition across C=C.",
        "id": "organic.c-alkenes3",
        "concept": "organic.alkenes"
      },
      {
        "prompt": "Which structure is butene?",
        "options": [
          "CH2=CH–CH2–CH3",
          "CH3–CH2–CH2–CH3",
          "CH2=CH2"
        ],
        "answer": 0,
        "why": "Four carbons and a double bond.",
        "id": "organic.c-alkenes4",
        "concept": "organic.alkenes"
      },
      {
        "prompt": "H atoms attached to the central carbon in CH2=CH–CH3?",
        "type": "number",
        "answer": 1,
        "tolerance": 0.001,
        "unit": "",
        "why": "Two bonds to the first C plus one to the third leave one H.",
        "id": "organic.c-alkenes5",
        "concept": "organic.alkenes"
      }
    ],
    "lab": [
      {
        "title": "Construct a molecular formula",
        "prompt": "The alkene has four carbon atoms and one C=C, with no ring.",
        "fields": [
          {
            "key": "formula",
            "label": "Molecular formula",
            "type": "formula",
            "answer": "C4H8"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "n = 4",
            "CnH2n"
          ]
        },
        "success": "C4H8 is the formula of butene.",
        "feedback": "Multiply the carbon count by two for H.",
        "id": "alkenes1"
      },
      {
        "title": "Complete a carbon valence",
        "prompt": "In CH2=C?–CH3, how many H belong on the middle carbon?",
        "fields": [
          {
            "key": "h",
            "label": "Middle-carbon H count",
            "type": "number",
            "answer": 1,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "molecule",
          "atoms": [
            "C",
            "C",
            "C",
            "H",
            "H",
            "H",
            "H",
            "H",
            "H"
          ],
          "bonds": [
            [
              0,
              1,
              2
            ],
            [
              1,
              2,
              1
            ],
            [
              0,
              3,
              1
            ],
            [
              0,
              4,
              1
            ],
            [
              1,
              5,
              1
            ],
            [
              2,
              6,
              1
            ],
            [
              2,
              7,
              1
            ],
            [
              2,
              8,
              1
            ]
          ]
        },
        "success": "One H completes four bonds.",
        "feedback": "The double bond counts as two, and the single C–C as one.",
        "id": "alkenes2"
      },
      {
        "title": "Extend the displayed skeleton",
        "prompt": "For pent-1-ene use CH2=CH–(CH2)x–CH3. Enter x.",
        "fields": [
          {
            "key": "units",
            "label": "Internal CH2 units",
            "type": "number",
            "answer": 2,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "CH2=CH",
            "(CH2)x",
            "CH3"
          ]
        },
        "success": "Two internal CH2 units give five carbons.",
        "feedback": "The start and final group already contain three carbons.",
        "id": "alkenes3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.alkene-reactions",
    "title": "Addition reactions of alkenes",
    "short": "Addition reactions of alkenes",
    "refs": [
      "7.2.2"
    ],
    "separate": true,
    "higher": false,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "The C=C group gives alkenes similar reactions.",
    "learn": [
      {
        "title": "One functional group, related reactions",
        "text": "The C=C group gives alkenes similar reactions. In addition, the double bond becomes a single C–C bond and atoms attach to the two carbons. Alkenes also burn; in air they can produce smoky flames because incomplete combustion makes carbon particles.",
        "scene": "catalog:science.chemistry.organic.alkene-reactions"
      },
      {
        "title": "Hydrogen and steam",
        "text": "Adding hydrogen makes an alkane; a nickel catalyst and heating are used. Ethene + hydrogen → ethane: CH2=CH2 + H2 → CH3–CH3. Adding steam makes an alcohol using a phosphoric-acid catalyst at raised temperature and pressure: CH2=CH2 + H2O → CH3–CH2OH. The H and OH add across the C=C. For the terminal propene, butene and pentene examples, the supplied main-product structures are CH3–CH(OH)–CH3, CH3–CH(OH)–CH2–CH3 and CH3–CH(OH)–CH2–CH2–CH3. These locate OH on the second carbon; the molecular formula alone does not show its position.",
        "scene": "catalog:science.chemistry.organic.alkene-reactions"
      },
      {
        "title": "Halogens and displayed products",
        "text": "Chlorine, bromine and iodine add across C=C; no special high-temperature catalyst conditions are needed for the school-level description. CH2=CH2 + Br2 → CH2Br–CH2Br. Each double-bond carbon receives one halogen atom. For terminal propene, butene and pentene, place one X on each former C=C carbon: CH2X–CHX–R. Hydrogen gives CH3–CH2–R. Water adds H/OH; supplied structures specify the product arrangement for unsymmetrical molecules. Practise drawing every H and bond on paper; the lab checks condensed bond strings, not a complete displayed drawing.",
        "scene": "catalog:science.chemistry.organic.alkene-reactions"
      }
    ],
    "practice": [
      {
        "prompt": "Hydrogen addition to ethene makes…",
        "options": [
          "Ethane",
          "Ethanol",
          "Ethanoic acid"
        ],
        "answer": 0,
        "why": "Two H atoms add across C=C.",
        "id": "organic.p-alkene-reactions1",
        "concept": "organic.alkene-reactions"
      },
      {
        "prompt": "Steam addition requires…",
        "options": [
          "A phosphoric-acid catalyst and raised temperature/pressure",
          "Only cold filtration",
          "A glowing splint"
        ],
        "answer": 0,
        "why": "Steam supplies H and OH.",
        "id": "organic.p-alkene-reactions2",
        "concept": "organic.alkene-reactions"
      },
      {
        "prompt": "Why can alkenes burn with smoky flames?",
        "options": [
          "Incomplete combustion can produce carbon particles",
          "All alkenes contain sulfur",
          "Oxygen is produced"
        ],
        "answer": 0,
        "why": "Smoke is not proof that all carbon became CO2.",
        "id": "organic.p-alkene-reactions3",
        "concept": "organic.alkene-reactions"
      }
    ],
    "check": [
      {
        "prompt": "After bromine addition, the former C=C is…",
        "options": [
          "A single C–C bond",
          "A triple bond",
          "Removed with both carbons"
        ],
        "answer": 0,
        "why": "Each carbon gains a Br atom.",
        "id": "organic.c-alkene-reactions1",
        "concept": "organic.alkene-reactions"
      },
      {
        "prompt": "Which catalyst is used for hydrogen addition?",
        "options": [
          "Nickel",
          "Yeast",
          "Universal indicator"
        ],
        "answer": 0,
        "why": "Hydrogenation uses a nickel catalyst with heating.",
        "id": "organic.c-alkene-reactions2",
        "concept": "organic.alkene-reactions"
      },
      {
        "prompt": "Product of CH2=CH2 + Cl2?",
        "options": [
          "CH2Cl–CH2Cl",
          "CH3–CH3",
          "CH3–COOH"
        ],
        "answer": 0,
        "why": "One chlorine atom adds to each carbon.",
        "id": "organic.c-alkene-reactions3",
        "concept": "organic.alkene-reactions"
      },
      {
        "prompt": "Which atoms add in hydration?",
        "options": [
          "H and OH",
          "Two H only",
          "Two Cl only"
        ],
        "answer": 0,
        "why": "Water adds across the double bond.",
        "id": "organic.c-alkene-reactions4",
        "concept": "organic.alkene-reactions"
      },
      {
        "prompt": "For CH2=CH–CH2–CH3 plus I2, the product is…",
        "options": [
          "CH2I–CHI–CH2–CH3",
          "CH3–CH2–CH2–CH3",
          "CH2=CH–CH2I–CH2I"
        ],
        "answer": 0,
        "why": "The original double-bond carbons receive iodine.",
        "id": "organic.c-alkene-reactions5",
        "concept": "organic.alkene-reactions"
      }
    ],
    "lab": [
      {
        "title": "Hydrogenate pentene",
        "prompt": "CH2=CH–CH2–CH2–CH3 reacts with hydrogen. Predict its molecular formula.",
        "fields": [
          {
            "key": "formula",
            "label": "Product formula",
            "type": "formula",
            "answer": "C5H12"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "C5H10 + H2",
            "Alkane"
          ]
        },
        "success": "C5H12 retains all five carbons and gains two H.",
        "feedback": "Hydrogen adds; carbons are not lost.",
        "id": "alkene-reactions1"
      },
      {
        "title": "Build a bromine-addition product",
        "prompt": "Predict the condensed product of ethene and Br2. Use a single hyphen for the C–C bond and write Br on each carbon group.",
        "fields": [
          {
            "key": "product",
            "label": "Product bond string",
            "type": "formula",
            "answer": "CH2Br-CH2Br"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "CH2=CH2 + Br2",
            "?"
          ]
        },
        "success": "Each C gains one Br and C=C becomes C–C.",
        "feedback": "Keep both carbons; put Br on both former double-bond carbons.",
        "id": "alkene-reactions2"
      },
      {
        "title": "Supply the right reagent",
        "prompt": "Choose the reagent for ethene → ethanol.",
        "fields": [
          {
            "key": "reagent",
            "label": "Added reagent",
            "type": "select",
            "answer": "steam",
            "options": [
              {
                "value": "steam",
                "label": "Steam"
              },
              {
                "value": "hydrogen",
                "label": "Hydrogen"
              },
              {
                "value": "bromine",
                "label": "Bromine"
              }
            ]
          },
          {
            "key": "conditions",
            "label": "Conditions",
            "type": "select",
            "answer": "acid",
            "options": [
              {
                "value": "acid",
                "label": "Phosphoric acid, raised temperature/pressure"
              },
              {
                "value": "nickel",
                "label": "Nickel and heating"
              },
              {
                "value": "yeast",
                "label": "Yeast fermentation"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Ethene",
            "Ethanol"
          ]
        },
        "success": "Steam hydration forms ethanol.",
        "feedback": "Match the added H/OH to water and the hydration conditions.",
        "id": "alkene-reactions3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.alcohols",
    "title": "Alcohols & fermentation",
    "short": "Alcohols & fermentation",
    "refs": [
      "7.2.3"
    ],
    "separate": true,
    "higher": false,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "Alcohols contain –OH.",
    "learn": [
      {
        "title": "Recognise alcohols",
        "text": "Alcohols contain –OH. Methanol CH3OH, ethanol CH3CH2OH, propanol CH3CH2CH2OH and butanol CH3CH2CH2CH2OH are the first four straight-chain examples. Their uses include fuels and solvents; ethanol is also present in alcoholic drinks. Recognition uses the functional group, not merely an O atom.",
        "scene": "catalog:science.chemistry.organic.alcohols"
      },
      {
        "title": "Compare reactions",
        "text": "These alcohols dissolve in water to make neutral solutions. They react with sodium to release hydrogen, burn in air and can be oxidised by an oxidising agent to corresponding carboxylic acids. Ethanol burns completely: C2H5OH + 3O2 → 2CO2 + 3H2O. Balanced equations for alcohol reactions other than combustion are not required. These are supervised laboratory observations, not instructions for home experiments.",
        "scene": "catalog:science.chemistry.organic.alcohols"
      },
      {
        "title": "Ferment sugar",
        "text": "Yeast enzymes convert sugar in aqueous solution into ethanol and carbon dioxide. Warm conditions around 30°C support fermentation; exclude oxygen so sugar is fermented rather than aerobically respired. Cold slows the process and excessive heat damages yeast enzymes. Fermentation makes aqueous ethanol, not pure ethanol; separation would require further processing.",
        "scene": "catalog:science.chemistry.organic.alcohols"
      }
    ],
    "practice": [
      {
        "prompt": "The alcohol functional group is…",
        "options": [
          "–OH",
          "–COOH",
          "C=C"
        ],
        "answer": 0,
        "why": "An alcohol has a hydroxyl group attached to carbon.",
        "id": "organic.p-alcohols1",
        "concept": "organic.alcohols"
      },
      {
        "prompt": "Alcohol with sodium releases…",
        "options": [
          "Hydrogen",
          "Carbon dioxide only",
          "Oxygen"
        ],
        "answer": 0,
        "why": "Sodium reacts with the alcohol.",
        "id": "organic.p-alcohols2",
        "concept": "organic.alcohols"
      },
      {
        "prompt": "O2 coefficient in complete combustion of one C2H5OH?",
        "type": "number",
        "answer": 3,
        "tolerance": 0.001,
        "unit": "",
        "why": "Products have seven O atoms; ethanol supplies one, leaving six from O2.",
        "id": "organic.p-alcohols3",
        "concept": "organic.alcohols"
      }
    ],
    "check": [
      {
        "prompt": "Which structure is propanol?",
        "options": [
          "CH3CH2CH2OH",
          "CH3COOH",
          "CH2=CH2"
        ],
        "answer": 0,
        "why": "Three carbons and an –OH group.",
        "id": "organic.c-alcohols1",
        "concept": "organic.alcohols"
      },
      {
        "prompt": "An oxidising agent converts ethanol into…",
        "options": [
          "Ethanoic acid",
          "Ethene only",
          "Methane"
        ],
        "answer": 0,
        "why": "Oxidation produces the corresponding acid.",
        "id": "organic.c-alcohols2",
        "concept": "organic.alcohols"
      },
      {
        "prompt": "Why exclude oxygen in fermentation?",
        "options": [
          "To favour fermentation rather than aerobic respiration",
          "To create carbon atoms",
          "To freeze the sugar"
        ],
        "answer": 0,
        "why": "Yeast can respire in oxygen.",
        "id": "organic.c-alcohols3",
        "concept": "organic.alcohols"
      },
      {
        "prompt": "Alcohols added to water generally make…",
        "options": [
          "Neutral solutions",
          "Strongly acidic solutions automatically",
          "An insoluble metal"
        ],
        "answer": 0,
        "why": "They dissolve without behaving like carboxylic acids.",
        "id": "organic.c-alcohols4",
        "concept": "organic.alcohols"
      },
      {
        "prompt": "CO2 coefficient when one C4H9OH burns completely?",
        "type": "number",
        "answer": 4,
        "tolerance": 0.001,
        "unit": "",
        "why": "Four carbons form four CO2.",
        "id": "organic.c-alcohols5",
        "concept": "organic.alcohols"
      }
    ],
    "lab": [
      {
        "title": "Identify the fourth alcohol",
        "prompt": "Predict the condensed formula of butanol, grouping its four-carbon alkyl part first and ending in OH, as CnHmOH.",
        "fields": [
          {
            "key": "formula",
            "label": "Formula",
            "type": "formula",
            "answer": "C4H9OH"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Methanol",
            "Ethanol",
            "Propanol",
            "Butanol"
          ]
        },
        "success": "Four carbons with an –OH group.",
        "feedback": "Use C4H9OH to show the functional group explicitly.",
        "id": "alcohols1"
      },
      {
        "title": "Balance fresh combustion",
        "prompt": "C3H7OH + aO2 → bCO2 + cH2O. Use the coefficients for TWO propanol molecules: 2C3H7OH + aO2 → bCO2 + cH2O.",
        "fields": [
          {
            "key": "a",
            "label": "a",
            "type": "number",
            "answer": 9,
            "tolerance": 0.001
          },
          {
            "key": "b",
            "label": "b",
            "type": "number",
            "answer": 6,
            "tolerance": 0.001
          },
          {
            "key": "c",
            "label": "c",
            "type": "number",
            "answer": 8,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "2C3H7OH + O2",
            "CO2 + H2O"
          ]
        },
        "success": "Six CO2 and eight waters require nine O2 after alcohol oxygen is counted.",
        "feedback": "There are two O atoms already in the two alcohol molecules.",
        "id": "alcohols2"
      },
      {
        "title": "Plan fermentation",
        "prompt": "Choose conditions for yeast fermentation of aqueous sugar.",
        "fields": [
          {
            "key": "temp",
            "label": "Temperature",
            "type": "select",
            "answer": "warm",
            "options": [
              {
                "value": "warm",
                "label": "Warm, around 30°C"
              },
              {
                "value": "boil",
                "label": "Boiling"
              },
              {
                "value": "freeze",
                "label": "Frozen"
              }
            ]
          },
          {
            "key": "air",
            "label": "Oxygen condition",
            "type": "select",
            "answer": "exclude",
            "options": [
              {
                "value": "exclude",
                "label": "Exclude oxygen"
              },
              {
                "value": "bubble",
                "label": "Continuously bubble oxygen"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Sugar + yeast",
            "Aqueous ethanol + CO2"
          ]
        },
        "success": "Warm, oxygen-excluding conditions support fermentation.",
        "feedback": "Boiling damages enzymes; oxygen favours aerobic respiration.",
        "id": "alcohols3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.carboxylic-acids",
    "title": "Carboxylic acids & esters",
    "short": "Carboxylic acids & esters",
    "refs": [
      "7.2.4"
    ],
    "separate": true,
    "higher": false,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "Carboxylic acids contain –COOH.",
    "learn": [
      {
        "title": "Find the acid group",
        "text": "Carboxylic acids contain –COOH. Methanoic acid HCOOH, ethanoic acid CH3COOH, propanoic acid CH3CH2COOH and butanoic acid CH3CH2CH2COOH are the first four. The carbon in COOH counts towards the total carbon number. Recognise names, molecular groups and displayed structures.",
        "scene": "catalog:science.chemistry.organic.carboxylic-acids"
      },
      {
        "title": "Acid behaviour",
        "text": "Carboxylic acids dissolve in water to give acidic solutions. With a carbonate they produce a salt, carbon dioxide and water; fizzing is evidence of gas production. Ethanoic acid with sodium carbonate makes sodium ethanoate. Balanced equations for these acid reactions are not required here. Higher students study the partial-ionisation explanation separately.",
        "scene": "catalog:science.chemistry.organic.carboxylic-acids"
      },
      {
        "title": "Make an ester",
        "text": "A carboxylic acid reacts with an alcohol to form an ester and water. Ethanoic acid + ethanol ⇌ ethyl ethanoate + water; an acid catalyst and warming support ester preparation. Ethyl ethanoate is the only ester name required for recall. Recognise the ester linkage –C(=O)–O–; an ester does not retain the acid –COOH hydroxyl group. Real preparation requires supervised equipment and risk controls.",
        "scene": "catalog:science.chemistry.organic.carboxylic-acids"
      }
    ],
    "practice": [
      {
        "prompt": "Which group identifies a carboxylic acid?",
        "options": [
          "–COOH",
          "Only –OH",
          "C=C"
        ],
        "answer": 0,
        "why": "It includes C=O and OH on the same carbon.",
        "id": "organic.p-carboxylic-acids1",
        "concept": "organic.carboxylic-acids"
      },
      {
        "prompt": "Acid plus carbonate releases…",
        "options": [
          "Carbon dioxide",
          "Oxygen",
          "Hydrogen only"
        ],
        "answer": 0,
        "why": "The other products are salt and water.",
        "id": "organic.p-carboxylic-acids2",
        "concept": "organic.carboxylic-acids"
      },
      {
        "prompt": "Ethanol plus ethanoic acid makes…",
        "options": [
          "Ethyl ethanoate and water",
          "Only sodium ethanoate",
          "Ethene and chlorine"
        ],
        "answer": 0,
        "why": "This is esterification.",
        "id": "organic.p-carboxylic-acids3",
        "concept": "organic.carboxylic-acids"
      }
    ],
    "check": [
      {
        "prompt": "HCOOH is…",
        "options": [
          "Methanoic acid",
          "Ethanol",
          "Ethanoic acid"
        ],
        "answer": 0,
        "why": "It has one carbon in total.",
        "id": "organic.c-carboxylic-acids1",
        "concept": "organic.carboxylic-acids"
      },
      {
        "prompt": "Total carbon atoms in CH3CH2COOH?",
        "type": "number",
        "answer": 3,
        "tolerance": 0.001,
        "unit": "",
        "why": "Include the carbon inside COOH.",
        "id": "organic.c-carboxylic-acids2",
        "concept": "organic.carboxylic-acids"
      },
      {
        "prompt": "An aqueous carboxylic-acid solution is…",
        "options": [
          "Acidic",
          "Always neutral",
          "Always alkaline"
        ],
        "answer": 0,
        "why": "Its pH is below 7 under the usual conditions.",
        "id": "organic.c-carboxylic-acids3",
        "concept": "organic.carboxylic-acids"
      },
      {
        "prompt": "Sodium carbonate and ethanoic acid produce which salt?",
        "options": [
          "Sodium ethanoate",
          "Sodium chloride",
          "Sodium hydroxide"
        ],
        "answer": 0,
        "why": "The acid gives the ethanoate part.",
        "id": "organic.c-carboxylic-acids4",
        "concept": "organic.carboxylic-acids"
      },
      {
        "prompt": "Which observation supports reaction with a carbonate?",
        "options": [
          "Fizzing as carbon dioxide forms",
          "A glowing splint relights from oxygen",
          "No gas can form"
        ],
        "answer": 0,
        "why": "Acid–carbonate reactions release CO2.",
        "id": "organic.c-carboxylic-acids5",
        "concept": "organic.carboxylic-acids"
      }
    ],
    "lab": [
      {
        "title": "Recognise the carbon count",
        "prompt": "Write the straight-chain acid with two carbon atoms.",
        "fields": [
          {
            "key": "formula",
            "label": "Condensed formula",
            "type": "formula",
            "answer": "CH3COOH"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Two C atoms",
            "–COOH required"
          ]
        },
        "success": "CH3COOH is ethanoic acid.",
        "feedback": "The acid-group carbon is one of the two.",
        "id": "carboxylic-acids1"
      },
      {
        "title": "Predict a carbonate product",
        "prompt": "Choose the gas from butanoic acid and a carbonate.",
        "fields": [
          {
            "key": "gas",
            "label": "Gas",
            "type": "select",
            "answer": "co2",
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
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Carboxylic acid + carbonate",
            "Salt + gas + water"
          ]
        },
        "success": "Carbon dioxide is released.",
        "feedback": "Carbonates with acids release CO2.",
        "id": "carboxylic-acids2"
      },
      {
        "title": "Build the ester reaction",
        "prompt": "Choose products of ethanol and ethanoic acid.",
        "fields": [
          {
            "key": "organic",
            "label": "Organic product",
            "type": "select",
            "answer": "ester",
            "options": [
              {
                "value": "ester",
                "label": "Ethyl ethanoate"
              },
              {
                "value": "salt",
                "label": "Sodium ethanoate"
              },
              {
                "value": "alkane",
                "label": "Ethane"
              }
            ]
          },
          {
            "key": "small",
            "label": "Small product formula",
            "type": "formula",
            "answer": "H2O"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Ethanol + ethanoic acid",
            "Ester + small molecule"
          ]
        },
        "success": "The ester and water are formed.",
        "feedback": "An acid and alcohol form an ester with loss of water.",
        "id": "carboxylic-acids3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.weak-organic-acids",
    "title": "Why carboxylic acids are weak",
    "short": "Why carboxylic acids are weak",
    "refs": [
      "7.2.4"
    ],
    "separate": true,
    "higher": true,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "A weak acid ionises only partly in water.",
    "learn": [
      {
        "title": "Weak means partial ionisation",
        "text": "A weak acid ionises only partly in water. For ethanoic acid: CH3COOH ⇌ CH3COO− + H+. Most dissolved acid molecules remain unionised; the reversible arrow represents a dynamic balance.",
        "scene": "catalog:science.chemistry.organic.weak-organic-acids"
      },
      {
        "title": "Compare equal concentrations",
        "text": "At the same concentration, a weak carboxylic acid produces fewer H+ ions than a strong acid, so has a higher pH. A strong acid ionises completely in water. Weak is not the same as dilute: concentration describes amount per volume, while strength describes degree of ionisation.",
        "scene": "catalog:science.chemistry.organic.weak-organic-acids"
      },
      {
        "title": "Use pH evidence carefully",
        "text": "A decrease of one pH unit represents a tenfold increase in H+ concentration. A pH3 solution has 100 times the H+ concentration of pH5. Compare strength using controlled acid concentration and conditions; pH alone for two differently concentrated solutions cannot establish which acid is stronger.",
        "scene": "catalog:science.chemistry.organic.weak-organic-acids"
      }
    ],
    "practice": [
      {
        "prompt": "Weak acid means…",
        "options": [
          "Partly ionised in water",
          "Always very dilute",
          "Unable to react"
        ],
        "answer": 0,
        "why": "Strength is about ionisation.",
        "id": "organic.p-weak-organic-acids1",
        "concept": "organic.weak-organic-acids"
      },
      {
        "prompt": "At equal concentrations, ethanoic acid versus a strong acid has…",
        "options": [
          "A higher pH",
          "A lower pH necessarily",
          "No acid molecules"
        ],
        "answer": 0,
        "why": "It produces fewer H+ ions.",
        "id": "organic.p-weak-organic-acids2",
        "concept": "organic.weak-organic-acids"
      },
      {
        "prompt": "H+ concentration factor: pH2 compared with pH4?",
        "type": "number",
        "answer": 100,
        "tolerance": 0.001,
        "unit": "",
        "why": "Two pH units means 10×10.",
        "id": "organic.p-weak-organic-acids3",
        "concept": "organic.weak-organic-acids"
      }
    ],
    "check": [
      {
        "prompt": "CH3COOH ⇌ CH3COO− + H+ shows…",
        "options": [
          "Partial reversible ionisation",
          "Complete irreversible ionisation",
          "Creation of carbon atoms"
        ],
        "answer": 0,
        "why": "Most weak-acid molecules remain unionised.",
        "id": "organic.c-weak-organic-acids1",
        "concept": "organic.weak-organic-acids"
      },
      {
        "prompt": "A concentrated weak acid can exist because…",
        "options": [
          "Strength and concentration describe different things",
          "Weak always means little acid",
          "Concentration fixes strength"
        ],
        "answer": 0,
        "why": "Amount per volume differs from degree of ionisation.",
        "id": "organic.c-weak-organic-acids2",
        "concept": "organic.weak-organic-acids"
      },
      {
        "prompt": "H+ factor: pH3 compared with pH6?",
        "type": "number",
        "answer": 1000,
        "tolerance": 0.001,
        "unit": "",
        "why": "10 to the power of three.",
        "id": "organic.c-weak-organic-acids3",
        "concept": "organic.weak-organic-acids"
      },
      {
        "prompt": "Equal-concentration weak and strong acids differ because…",
        "options": [
          "The weak acid produces fewer H+ ions",
          "The weak acid contains no hydrogen",
          "The strong acid cannot dissolve"
        ],
        "answer": 0,
        "why": "It ionises to a smaller extent.",
        "id": "organic.c-weak-organic-acids4",
        "concept": "organic.weak-organic-acids"
      },
      {
        "prompt": "To compare acid strength using pH, control…",
        "options": [
          "Acid concentration and measurement conditions",
          "Only the label colour",
          "Nothing"
        ],
        "answer": 0,
        "why": "Different concentrations would confound the comparison.",
        "id": "organic.c-weak-organic-acids5",
        "concept": "organic.weak-organic-acids"
      }
    ],
    "lab": [
      {
        "title": "Interpret a particle model",
        "prompt": "Of 100 acid molecules, 4 have ionised. Predict the acid behaviour.",
        "fields": [
          {
            "key": "strength",
            "label": "Interpretation",
            "type": "select",
            "answer": "weak",
            "options": [
              {
                "value": "weak",
                "label": "Weak: partial ionisation"
              },
              {
                "value": "strong",
                "label": "Strong: complete ionisation"
              }
            ]
          },
          {
            "key": "remain",
            "label": "Unionised molecules",
            "type": "number",
            "answer": 96,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Initial molecules",
            "Ionised"
          ],
          "rows": [
            [
              "100",
              "4"
            ]
          ]
        },
        "success": "Partial ionisation leaves 96 acid molecules unionised.",
        "feedback": "Subtract ionised from initial; partial is weak.",
        "id": "weak-organic-acids1"
      },
      {
        "title": "Compare equal concentrations",
        "prompt": "Select which has the lower pH.",
        "fields": [
          {
            "key": "acid",
            "label": "Lower pH",
            "type": "select",
            "answer": "strong",
            "options": [
              {
                "value": "strong",
                "label": "Completely ionising acid"
              },
              {
                "value": "weak",
                "label": "Partially ionising acid"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Same concentration",
            "Compare H+ released"
          ]
        },
        "success": "The completely ionising acid produces more H+.",
        "feedback": "More H+ means lower pH.",
        "id": "weak-organic-acids2"
      },
      {
        "title": "Calculate a pH ratio",
        "prompt": "Compare H+ concentration in pH4 with pH6.",
        "fields": [
          {
            "key": "ratio",
            "label": "pH4 ÷ pH6",
            "type": "number",
            "answer": 100,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "pH4",
            "pH6"
          ]
        },
        "success": "Two units gives a factor of 100.",
        "feedback": "Each pH unit is a factor of ten.",
        "id": "weak-organic-acids3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.addition-polymers",
    "title": "Addition polymerisation",
    "short": "Addition polymerisation",
    "refs": [
      "7.3.1"
    ],
    "separate": true,
    "higher": false,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "Addition polymerisation joins many small alkene monomers into a very large polymer.",
    "learn": [
      {
        "title": "Join many alkenes",
        "text": "Addition polymerisation joins many small alkene monomers into a very large polymer. The monomer C=C becomes a C–C link in the backbone. Poly(ethene) forms from ethene; poly(propene) from propene. No other molecule is formed, so every monomer atom is retained.",
        "scene": "catalog:science.chemistry.organic.addition-polymers"
      },
      {
        "title": "Draw the repeat",
        "text": "Ethene CH2=CH2 gives [–CH2–CH2–]n. Draw brackets, continuation bonds passing through the brackets and n outside. Propene CH2=CH–CH3 gives [–CH2–CH(CH3)–]n: the CH3 branch stays attached. A repeat unit is the smallest repeating section shown for the chosen monomer; it is not a free monomer molecule.",
        "scene": "catalog:science.chemistry.organic.addition-polymers"
      },
      {
        "title": "Recover the monomer",
        "text": "To infer a monomer, identify its two backbone carbons, remove continuation bonds and restore C=C without changing attached groups. The lab asks for condensed repeat strings without brackets/n; your paper diagram must include them and every required bond. The symbolic chain shows connectivity rather than a full polymer length or literal molecular shape.",
        "scene": "catalog:science.chemistry.organic.addition-polymers"
      }
    ],
    "practice": [
      {
        "prompt": "An addition polymerisation by-product is…",
        "options": [
          "None",
          "Water always",
          "Carbon dioxide always"
        ],
        "answer": 0,
        "why": "All monomer atoms remain in the polymer.",
        "id": "organic.p-addition-polymers1",
        "concept": "organic.addition-polymers"
      },
      {
        "prompt": "The monomer for poly(propene) is…",
        "options": [
          "CH2=CH–CH3",
          "CH3–CH3",
          "CH3OH"
        ],
        "answer": 0,
        "why": "Restore C=C between the two backbone carbons.",
        "id": "organic.p-addition-polymers2",
        "concept": "organic.addition-polymers"
      },
      {
        "prompt": "Five ethene monomers contain how many carbon atoms in total?",
        "type": "number",
        "answer": 10,
        "tolerance": 0.001,
        "unit": "",
        "why": "Two carbon atoms per ethene, all retained.",
        "id": "organic.p-addition-polymers3",
        "concept": "organic.addition-polymers"
      }
    ],
    "check": [
      {
        "prompt": "Which feature identifies an alkene monomer?",
        "options": [
          "C=C",
          "–COOH alone",
          "A metal ion"
        ],
        "answer": 0,
        "why": "The double bond can open during addition polymerisation.",
        "id": "organic.c-addition-polymers1",
        "concept": "organic.addition-polymers"
      },
      {
        "prompt": "Poly(ethene) has a repeat unit…",
        "options": [
          "–CH2–CH2–",
          "–CH=CH–",
          "–COOH–"
        ],
        "answer": 0,
        "why": "The original two carbons are linked by single bonds.",
        "id": "organic.c-addition-polymers2",
        "concept": "organic.addition-polymers"
      },
      {
        "prompt": "What happens to the CH3 branch in propene?",
        "options": [
          "It remains attached to a backbone carbon",
          "It becomes water",
          "It disappears"
        ],
        "answer": 0,
        "why": "Addition does not remove monomer atoms.",
        "id": "organic.c-addition-polymers3",
        "concept": "organic.addition-polymers"
      },
      {
        "prompt": "Twelve ethene monomers provide how many H atoms?",
        "type": "number",
        "answer": 48,
        "tolerance": 0.001,
        "unit": "",
        "why": "12×4=48, all retained.",
        "id": "organic.c-addition-polymers4",
        "concept": "organic.addition-polymers"
      },
      {
        "prompt": "What must a polymer repeat diagram include?",
        "options": [
          "Brackets, continuation bonds and n",
          "Only a circle around one H",
          "An unchanged C=C in every repeat"
        ],
        "answer": 0,
        "why": "These show that the section repeats.",
        "id": "organic.c-addition-polymers5",
        "concept": "organic.addition-polymers"
      }
    ],
    "lab": [
      {
        "title": "Construct an ethene repeat",
        "prompt": "Predict the condensed repeat from ethene. Omit brackets/n; use hyphens for the single bond and both continuation bonds.",
        "fields": [
          {
            "key": "repeat",
            "label": "Repeat bond string",
            "type": "formula",
            "answer": "-CH2-CH2-"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "CH2=CH2",
            "[repeat]n"
          ]
        },
        "success": "The double bond is replaced by a single-bond backbone.",
        "feedback": "Use single bonds and retain four H atoms.",
        "id": "addition-polymers1"
      },
      {
        "title": "Reverse the process",
        "prompt": "Given repeat -CH2-CH(CH3)-, reconstruct the monomer. Put the C=C first, then a hyphen and the branch written as the final CH3 group.",
        "fields": [
          {
            "key": "monomer",
            "label": "Monomer bond string",
            "type": "formula",
            "answer": "CH2=CH-CH3"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "-CH2-CH(CH3)-",
            "Alkene monomer"
          ]
        },
        "success": "The methyl branch is retained and C=C restored.",
        "feedback": "Only restore the double bond between the backbone carbons.",
        "id": "addition-polymers2"
      },
      {
        "title": "Conserve mass",
        "prompt": "100 monomers of mass 28 units each join by addition, ignoring end-group detail. Total polymer mass in the same units?",
        "fields": [
          {
            "key": "mass",
            "label": "Mass",
            "type": "number",
            "answer": 2800,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "100 × 28",
            "No other product"
          ]
        },
        "success": "No small molecules are lost.",
        "feedback": "Multiply the monomer count by its mass; addition has no by-product.",
        "id": "addition-polymers3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.condensation-polymers",
    "title": "Condensation polymerisation",
    "short": "Condensation polymerisation",
    "refs": [
      "7.3.2"
    ],
    "separate": true,
    "higher": true,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "Condensation polymerisation uses monomers with two functional groups.",
    "learn": [
      {
        "title": "Two reactive ends",
        "text": "Condensation polymerisation uses monomers with two functional groups. Joining creates links while eliminating small molecules, often water. In the simplest polyester example, each diol has two –OH groups and each dicarboxylic acid has two –COOH groups, allowing chains rather than just one small ester.",
        "scene": "catalog:science.chemistry.organic.condensation-polymers"
      },
      {
        "title": "Build a polyester",
        "text": "AQA’s example uses ethanediol HO–CH2–CH2–OH and hexanedioic acid HOOC–(CH2)4–COOH. Joining the alcohol and acid groups forms ester links –C(=O)–O– and water. A representative repeat is [–O–CH2–CH2–O–C(=O)–(CH2)4–C(=O)–]n. Recognise the functional groups and connect them to the repeat; naming every possible monomer is not required.",
        "scene": "catalog:science.chemistry.organic.condensation-polymers"
      },
      {
        "title": "Track water and chain ends",
        "text": "Each new ester link eliminates one water molecule: an OH from the acid and H from an alcohol OH. A finite open chain made by joining four initially separate monomers using three links produces three waters. Do not equate water count automatically with monomer count; chain ends and links matter. In contrast, addition polymerisation loses no small molecule.",
        "scene": "catalog:science.chemistry.organic.condensation-polymers"
      }
    ],
    "practice": [
      {
        "prompt": "Why must these monomers have two functional groups?",
        "options": [
          "Both ends can form links in a chain",
          "They must both contain C=C",
          "They need to be metals"
        ],
        "answer": 0,
        "why": "One reactive group alone would stop chain growth.",
        "id": "organic.p-condensation-polymers1",
        "concept": "organic.condensation-polymers"
      },
      {
        "prompt": "A polyester contains…",
        "options": [
          "Ester links",
          "Only ionic bonds between monomers",
          "Only C=C links"
        ],
        "answer": 0,
        "why": "Diol and dicarboxylic acid groups condense.",
        "id": "organic.p-condensation-polymers2",
        "concept": "organic.condensation-polymers"
      },
      {
        "prompt": "Five separate monomers join into one open chain with four new links. Waters formed?",
        "type": "number",
        "answer": 4,
        "tolerance": 0.001,
        "unit": "",
        "why": "One water per condensation link.",
        "id": "organic.p-condensation-polymers3",
        "concept": "organic.condensation-polymers"
      }
    ],
    "check": [
      {
        "prompt": "A suitable simplest polyester pair is…",
        "options": [
          "A diol and a dicarboxylic acid",
          "Only ethene molecules",
          "An alkane and helium"
        ],
        "answer": 0,
        "why": "Both monomers have two appropriate groups.",
        "id": "organic.c-condensation-polymers1",
        "concept": "organic.condensation-polymers"
      },
      {
        "prompt": "Condensation differs from addition because…",
        "options": [
          "Small molecules are eliminated",
          "It destroys all carbons",
          "It requires every monomer to be an alkene"
        ],
        "answer": 0,
        "why": "Addition retains all monomer atoms in the polymer.",
        "id": "organic.c-condensation-polymers2",
        "concept": "organic.condensation-polymers"
      },
      {
        "prompt": "Which linkage is an ester?",
        "options": [
          "–C(=O)–O–",
          "–C=C–",
          "–NH–NH–"
        ],
        "answer": 0,
        "why": "This links alcohol-derived and acid-derived sections.",
        "id": "organic.c-condensation-polymers3",
        "concept": "organic.condensation-polymers"
      },
      {
        "prompt": "Eight initially separate monomers make one open chain with seven links. Waters formed?",
        "type": "number",
        "answer": 7,
        "tolerance": 0.001,
        "unit": "",
        "why": "Seven links each release one water.",
        "id": "organic.c-condensation-polymers4",
        "concept": "organic.condensation-polymers"
      },
      {
        "prompt": "The two groups in ethanediol are…",
        "options": [
          "Two –OH groups",
          "Two –COOH groups",
          "Two C=C groups"
        ],
        "answer": 0,
        "why": "A diol has two alcohol groups.",
        "id": "organic.c-condensation-polymers5",
        "concept": "organic.condensation-polymers"
      }
    ],
    "lab": [
      {
        "title": "Choose chain-building monomers",
        "prompt": "Select the simplest polyester pair.",
        "fields": [
          {
            "key": "pair",
            "label": "Monomers",
            "type": "select",
            "answer": "di",
            "options": [
              {
                "value": "di",
                "label": "Diol + dicarboxylic acid"
              },
              {
                "value": "mono",
                "label": "Methanol + ethanoic acid only"
              },
              {
                "value": "alkene",
                "label": "Ethene only"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Two groups on each monomer",
            "Polyester chain"
          ]
        },
        "success": "Two reactive ends enable repeated linking.",
        "feedback": "A single alcohol/acid group makes a small ester, not this repeating chain.",
        "id": "condensation-polymers1"
      },
      {
        "title": "Account for the by-product",
        "prompt": "Six separate monomers form one open chain with five ester links.",
        "fields": [
          {
            "key": "product",
            "label": "Small molecule formula",
            "type": "formula",
            "answer": "H2O"
          },
          {
            "key": "count",
            "label": "Small molecules formed",
            "type": "number",
            "answer": 5,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "6 monomers",
            "5 links"
          ]
        },
        "success": "Five links eliminate five waters.",
        "feedback": "Count links, not just monomers.",
        "id": "condensation-polymers2"
      },
      {
        "title": "Recognise the repeat linkage",
        "prompt": "Which link joins diol-derived and acid-derived sections?",
        "fields": [
          {
            "key": "link",
            "label": "Linkage",
            "type": "select",
            "answer": "ester",
            "options": [
              {
                "value": "ester",
                "label": "-C(=O)-O-"
              },
              {
                "value": "alkene",
                "label": "-C=C-"
              },
              {
                "value": "peptide",
                "label": "-C(=O)-NH-"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Diol section",
            "Link",
            "Diacid section"
          ]
        },
        "success": "A polyester has ester links.",
        "feedback": "The O next to C=O identifies an ester link.",
        "id": "condensation-polymers3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.amino-acids",
    "title": "Amino acids & polypeptides",
    "short": "Amino acids & polypeptides",
    "refs": [
      "7.3.3"
    ],
    "separate": true,
    "higher": true,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "An amino acid contains an amino group –NH2 and a carboxylic acid group –COOH.",
    "learn": [
      {
        "title": "Two different groups",
        "text": "An amino acid contains an amino group –NH2 and a carboxylic acid group –COOH. Glycine is H2N–CH2–COOH. Unlike the two-monomer polyester example, one amino-acid molecule contains two different reactive group types.",
        "scene": "catalog:science.chemistry.organic.amino-acids"
      },
      {
        "title": "Condense into a chain",
        "text": "The amino group of one molecule reacts with the acid group of another, releasing water and forming a peptide link –C(=O)–NH–. Glycine can form a polypeptide with repeat [–NH–CH2–C(=O)–]n. Show the C=O and N–H; replacing them with a generic line hides the chemistry.",
        "scene": "catalog:science.chemistry.organic.amino-acids"
      },
      {
        "title": "Build varied proteins",
        "text": "Different amino acids can join in the same polypeptide chain. Their sequence and chain structure contribute to proteins. In a finite open chain of n initially separate amino acids there are n−1 links and n−1 waters formed. This model simplifies the full folded protein and does not depict the detailed biological synthesis process.",
        "scene": "catalog:science.chemistry.organic.amino-acids"
      }
    ],
    "practice": [
      {
        "prompt": "Glycine has which two groups?",
        "options": [
          "–NH2 and –COOH",
          "Two C=C groups",
          "Only two alcohol groups"
        ],
        "answer": 0,
        "why": "An amino acid has amino and acid groups.",
        "id": "organic.p-amino-acids1",
        "concept": "organic.amino-acids"
      },
      {
        "prompt": "A peptide link is…",
        "options": [
          "–C(=O)–NH–",
          "–C(=O)–O–",
          "–C=C–"
        ],
        "answer": 0,
        "why": "Condensation joins acid and amino groups.",
        "id": "organic.p-amino-acids2",
        "concept": "organic.amino-acids"
      },
      {
        "prompt": "Three amino acids form one open chain. New peptide links?",
        "type": "number",
        "answer": 2,
        "tolerance": 0.001,
        "unit": "",
        "why": "Three monomers need two links.",
        "id": "organic.p-amino-acids3",
        "concept": "organic.amino-acids"
      }
    ],
    "check": [
      {
        "prompt": "The formula of glycine is…",
        "options": [
          "H2NCH2COOH",
          "CH3OH",
          "CH2=CH2"
        ],
        "answer": 0,
        "why": "Its two groups are attached to CH2.",
        "id": "organic.c-amino-acids1",
        "concept": "organic.amino-acids"
      },
      {
        "prompt": "Polypeptides form by…",
        "options": [
          "Condensation polymerisation",
          "Addition with no by-product",
          "Fractional distillation"
        ],
        "answer": 0,
        "why": "Water is released as links form.",
        "id": "organic.c-amino-acids2",
        "concept": "organic.amino-acids"
      },
      {
        "prompt": "Ten amino acids form one open chain. Waters released?",
        "type": "number",
        "answer": 9,
        "tolerance": 0.001,
        "unit": "",
        "why": "Nine peptide links release nine waters.",
        "id": "organic.c-amino-acids3",
        "concept": "organic.amino-acids"
      },
      {
        "prompt": "Proteins can contain…",
        "options": [
          "Different amino acids in the same chain",
          "Only glycine in every protein",
          "Only one nucleotide"
        ],
        "answer": 0,
        "why": "The sequence can vary.",
        "id": "organic.c-amino-acids4",
        "concept": "organic.amino-acids"
      },
      {
        "prompt": "Which groups react to form a peptide link?",
        "options": [
          "An amino group and a carboxylic acid group",
          "Two double carbon bonds",
          "Two sodium ions"
        ],
        "answer": 0,
        "why": "They form –C(=O)–NH– with water loss.",
        "id": "organic.c-amino-acids5",
        "concept": "organic.amino-acids"
      }
    ],
    "lab": [
      {
        "title": "Identify the functional groups",
        "prompt": "How many amino groups and acid groups does one glycine molecule contain?",
        "fields": [
          {
            "key": "amino",
            "label": "-NH2 count",
            "type": "number",
            "answer": 1,
            "tolerance": 0.001
          },
          {
            "key": "acid",
            "label": "-COOH count",
            "type": "number",
            "answer": 1,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "H2N",
            "CH2",
            "COOH"
          ]
        },
        "success": "One of each group allows repeated condensation.",
        "feedback": "Identify the two different ends.",
        "id": "amino-acids1"
      },
      {
        "title": "Count chain links",
        "prompt": "Seven separate amino acids form a single open chain.",
        "fields": [
          {
            "key": "links",
            "label": "Peptide links",
            "type": "number",
            "answer": 6,
            "tolerance": 0.001
          },
          {
            "key": "waters",
            "label": "Waters formed",
            "type": "number",
            "answer": 6,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "7 amino acids",
            "One chain"
          ]
        },
        "success": "Six links join seven monomers, releasing six waters.",
        "feedback": "For one open chain, links = monomers − 1.",
        "id": "amino-acids2"
      },
      {
        "title": "Recognise the chemistry",
        "prompt": "Select the link and by-product of amino-acid polymerisation.",
        "fields": [
          {
            "key": "link",
            "label": "Link",
            "type": "select",
            "answer": "peptide",
            "options": [
              {
                "value": "peptide",
                "label": "-C(=O)-NH-"
              },
              {
                "value": "ester",
                "label": "-C(=O)-O-"
              },
              {
                "value": "double",
                "label": "-C=C-"
              }
            ]
          },
          {
            "key": "product",
            "label": "Small molecule",
            "type": "formula",
            "answer": "H2O"
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Amino group + acid group",
            "Polypeptide"
          ]
        },
        "success": "A peptide linkage and water form.",
        "feedback": "An amino group contributes N to the linkage.",
        "id": "amino-acids3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  },
  {
    "id": "science.chemistry.organic.natural-polymers",
    "title": "DNA & naturally occurring polymers",
    "short": "DNA & naturally occurring polymers",
    "refs": [
      "7.3.4"
    ],
    "separate": true,
    "higher": false,
    "minutes": 30,
    "widget": "catalog-organic",
    "topicId": "science.chemistry.organic-chemistry",
    "prerequisites": [],
    "big": "Naturally occurring polymers include proteins, starch, cellulose and DNA.",
    "learn": [
      {
        "title": "Life uses polymers",
        "text": "Naturally occurring polymers include proteins, starch, cellulose and DNA. Proteins are built from amino acids. Starch and cellulose are both built from glucose monomers; different arrangements give different structures and properties. Detailed carbohydrate linkage names are outside this Chemistry requirement.",
        "scene": "catalog:science.chemistry.organic.natural-polymers"
      },
      {
        "title": "DNA stores instructions",
        "text": "DNA, deoxyribonucleic acid, encodes genetic instructions for the development and functioning of organisms and viruses. Most DNA molecules contain two polymer chains in a double helix. The monomers are nucleotides, of four different types; four types does not mean only four monomers in a DNA molecule.",
        "scene": "catalog:science.chemistry.organic.natural-polymers"
      },
      {
        "title": "Read models at the right scale",
        "text": "A twisted-ladder diagram models the two DNA chains and their arrangement; it does not show every atom. A sequence model uses letters for nucleotide types, not amino acids. Match polymer to monomer from supplied evidence and distinguish DNA information storage from starch energy storage and cellulose structural roles. Basic protein/amino-acid matching is required at both tiers; peptide reaction chemistry is Higher-only elsewhere.",
        "scene": "catalog:science.chemistry.organic.natural-polymers"
      }
    ],
    "practice": [
      {
        "prompt": "The monomers of DNA are…",
        "options": [
          "Nucleotides",
          "Amino acids",
          "Only glucose"
        ],
        "answer": 0,
        "why": "DNA uses four nucleotide types.",
        "id": "organic.p-natural-polymers1",
        "concept": "organic.natural-polymers"
      },
      {
        "prompt": "Proteins are built from…",
        "options": [
          "Amino acids",
          "Nucleotides",
          "Ethene"
        ],
        "answer": 0,
        "why": "Different amino-acid sequences can make different proteins.",
        "id": "organic.p-natural-polymers2",
        "concept": "organic.natural-polymers"
      },
      {
        "prompt": "Starch and cellulose share which monomer?",
        "options": [
          "Glucose",
          "Glycine only",
          "Methane"
        ],
        "answer": 0,
        "why": "Their structures differ despite the same monomer type.",
        "id": "organic.p-natural-polymers3",
        "concept": "organic.natural-polymers"
      }
    ],
    "check": [
      {
        "prompt": "Most DNA molecules have…",
        "options": [
          "Two polymer chains in a double helix",
          "Exactly four atoms",
          "One metal chain"
        ],
        "answer": 0,
        "why": "The model shows two twisting strands.",
        "id": "organic.c-natural-polymers1",
        "concept": "organic.natural-polymers"
      },
      {
        "prompt": "How many different nucleotide types are used in DNA?",
        "type": "number",
        "answer": 4,
        "tolerance": 0.001,
        "unit": "",
        "why": "There are four types, repeated many times.",
        "id": "organic.c-natural-polymers2",
        "concept": "organic.natural-polymers"
      },
      {
        "prompt": "DNA principally encodes…",
        "options": [
          "Genetic instructions",
          "Only a boiling temperature",
          "A list of hydrocarbon fractions"
        ],
        "answer": 0,
        "why": "These guide development and functioning.",
        "id": "organic.c-natural-polymers3",
        "concept": "organic.natural-polymers"
      },
      {
        "prompt": "Which pairing is correct?",
        "options": [
          "Cellulose — glucose",
          "Protein — ethene",
          "DNA — amino acids"
        ],
        "answer": 0,
        "why": "Cellulose is a natural glucose polymer.",
        "id": "organic.c-natural-polymers4",
        "concept": "organic.natural-polymers"
      },
      {
        "prompt": "Four nucleotide types means…",
        "options": [
          "Long chains can contain many monomers drawn from four types",
          "Each DNA molecule contains only four monomers",
          "Every strand has four atoms"
        ],
        "answer": 0,
        "why": "Type count differs from total monomer count.",
        "id": "organic.c-natural-polymers5",
        "concept": "organic.natural-polymers"
      }
    ],
    "lab": [
      {
        "title": "Match a natural polymer",
        "prompt": "Choose the monomer for cellulose.",
        "fields": [
          {
            "key": "monomer",
            "label": "Monomer",
            "type": "select",
            "answer": "glucose",
            "options": [
              {
                "value": "glucose",
                "label": "Glucose"
              },
              {
                "value": "amino",
                "label": "Amino acid"
              },
              {
                "value": "nucleotide",
                "label": "Nucleotide"
              }
            ]
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Cellulose",
            "Monomer?"
          ]
        },
        "success": "Cellulose is made from glucose.",
        "feedback": "Both starch and cellulose use glucose.",
        "id": "natural-polymers1"
      },
      {
        "title": "Read the DNA model",
        "prompt": "Enter the usual number of strands and the number of nucleotide TYPES.",
        "fields": [
          {
            "key": "strands",
            "label": "Strands",
            "type": "number",
            "answer": 2,
            "tolerance": 0.001
          },
          {
            "key": "types",
            "label": "Nucleotide types",
            "type": "number",
            "answer": 4,
            "tolerance": 0.001
          }
        ],
        "visual": {
          "kind": "flow",
          "nodes": [
            "Twisting strand",
            "Twisting strand"
          ]
        },
        "success": "Two chains, four nucleotide types.",
        "feedback": "Do not confuse number of types with total monomer number.",
        "id": "natural-polymers2"
      },
      {
        "title": "Identify a chain from evidence",
        "prompt": "A polymer contains many different amino acids. What is it?",
        "fields": [
          {
            "key": "polymer",
            "label": "Polymer",
            "type": "select",
            "answer": "protein",
            "options": [
              {
                "value": "protein",
                "label": "Protein"
              },
              {
                "value": "dna",
                "label": "DNA"
              },
              {
                "value": "starch",
                "label": "Starch"
              }
            ]
          }
        ],
        "visual": {
          "kind": "table",
          "columns": [
            "Evidence",
            "Observation"
          ],
          "rows": [
            [
              "Building blocks",
              "Amino acids"
            ],
            [
              "Chain",
              "Many linked units"
            ]
          ]
        },
        "success": "A protein is an amino-acid polymer.",
        "feedback": "DNA uses nucleotides; starch uses glucose.",
        "id": "natural-polymers3"
      }
    ],
    "skills": [
      "WS1.2",
      "MS5b"
    ]
  }
];
export const organicCompletionConcepts={
  "organic.alkanes": "Crude oil & alkanes",
  "organic.distillation": "Fractional distillation & feedstock",
  "organic.hydrocarbon-properties": "Hydrocarbon properties & combustion",
  "organic.cracking": "Cracking & the alkene test",
  "organic.alkenes": "Alkene structures",
  "organic.alkene-reactions": "Addition reactions of alkenes",
  "organic.alcohols": "Alcohols & fermentation",
  "organic.carboxylic-acids": "Carboxylic acids & esters",
  "organic.weak-organic-acids": "Why carboxylic acids are weak",
  "organic.addition-polymers": "Addition polymerisation",
  "organic.condensation-polymers": "Condensation polymerisation",
  "organic.amino-acids": "Amino acids & polypeptides",
  "organic.natural-polymers": "DNA & naturally occurring polymers"
};
