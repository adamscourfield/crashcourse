export const rad1Lessons=[
  {
    "id": "science.physics.atomic-structure.atoms",
    "title": "Atoms, isotopes and energy levels",
    "short": "Atoms, isotopes and energy levels",
    "topicId": "science.physics.atomic-structure",
    "refs": [
      "4.1.1",
      "4.1.2"
    ],
    "combinedRefs": [
      "4.1.1",
      "4.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "An atom has a radius of about 1 × 10⁻¹⁰ m. Its positive nucleus contains protons and neutrons and holds most of its mass. The nuclear radius is less than one ten-thousandth of the atomic radius. The enlarged nucleus in this view cannot share the electron-shell scale.",
    "learn": [
      {
        "title": "A tiny nucleus, a much larger atom",
        "text": "An atom has a radius of about 1 × 10⁻¹⁰ m. Its positive nucleus contains protons and neutrons and holds most of its mass. The nuclear radius is less than one ten-thousandth of the atomic radius. The enlarged nucleus in this view cannot share the electron-shell scale.",
        "scene": "rad1:atoms:0",
        "process": false
      },
      {
        "title": "Read the nuclear account",
        "text": "Atomic number Z counts protons. Mass number A counts protons plus neutrons; neutrons = A − Z. Neutral atoms have Z electrons. Isotopes share Z but differ in neutron number. A carbon-14 atom has 6 protons, 8 neutrons and 6 electrons. Losing an outer electron makes a positive ion without changing the nucleus.",
        "scene": "rad1:atoms:1",
        "process": false
      },
      {
        "title": "Energy enters and leaves",
        "text": "Absorbing electromagnetic radiation can move an electron to a higher energy level, farther from the nucleus. A transition to a lower level emits electromagnetic radiation. These are electron transitions; they do not change proton number or describe nuclear decay.",
        "scene": "rad1:atoms:2",
        "process": true,
        "processFilm": "rad1-atoms"
      },
      {
        "title": "Change the isotope or charge",
        "text": "Choose carbon-12 or carbon-14, then a neutral atom or singly positive ion. Predict the neutron and electron counts before revealing. Isotope changes affect neutrons; ion formation affects electrons. Shell rings and glowing markers are a teaching convention, not literal planetary paths.",
        "scene": "rad1:atoms:3",
        "process": false
      }
    ],
    "prerequisites": [
      "subatomic",
      "isotopes",
      "electrons"
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1a",
      "MS3c"
    ],
    "widget": "rad1-atoms",
    "practice": [
      {
        "id": "rad1.atoms.practice1",
        "prompt": "Changing carbon-12 to carbon-14 changes…",
        "options": [
          "Neutron number",
          "Proton number",
          "Element identity"
        ],
        "answer": 0,
        "why": "Both have Z=6; A differs by two.",
        "concept": "rad1.atoms"
      },
      {
        "id": "rad1.atoms.practice2",
        "prompt": "A positive ion forms when an atom…",
        "options": [
          "Gains a proton",
          "Loses an outer electron",
          "Loses its entire nucleus"
        ],
        "answer": 1,
        "why": "Removing negative charge gives a positive ion.",
        "concept": "rad1.atoms"
      },
      {
        "id": "rad1.atoms.practice3",
        "prompt": "An electron emits radiation when it…",
        "options": [
          "Moves to a higher level",
          "Becomes a neutron",
          "Moves to a lower energy level"
        ],
        "answer": 2,
        "why": "The emitted radiation carries away the energy difference.",
        "concept": "rad1.atoms"
      }
    ],
    "check": [
      {
        "id": "rad1.atoms.check1",
        "prompt": "A neutral atom has 9 protons. Its electron count is…",
        "options": [
          "9",
          "18",
          "0"
        ],
        "answer": 0,
        "why": "Neutral charge balances equal proton and electron numbers.",
        "concept": "rad1.atoms"
      },
      {
        "id": "rad1.atoms.check2",
        "prompt": "Two atoms have Z=8 and A=16/18. They are…",
        "options": [
          "Different elements",
          "Isotopes of one element",
          "Oppositely charged ions necessarily"
        ],
        "answer": 1,
        "why": "Equal Z identifies the element; A changes the neutron count.",
        "concept": "rad1.atoms"
      },
      {
        "id": "rad1.atoms.check3",
        "prompt": "An atom absorbs radiation and an electron moves outward. The nucleus…",
        "options": [
          "Must split",
          "Gains a proton",
          "Can remain unchanged"
        ],
        "answer": 2,
        "why": "Excitation is an electron-level change.",
        "concept": "rad1.atoms"
      },
      {
        "id": "rad1.atoms.check4",
        "prompt": "A neutral nucleus has Z=11 and A=23. How many neutrons?",
        "options": [
          "12",
          "25",
          "6.0"
        ],
        "answer": 0,
        "why": "A minus Z counts neutrons.",
        "concept": "rad1.atoms"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "rad1Passed"
    }
  },
  {
    "id": "science.physics.atomic-structure.evidence",
    "title": "How evidence changed the atom",
    "short": "How evidence changed the atom",
    "topicId": "science.physics.atomic-structure",
    "refs": [
      "4.1.3"
    ],
    "combinedRefs": [
      "4.1.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "The early indivisible-sphere model changed after the electron was discovered. The plum-pudding model placed negative electrons inside spread-out positive charge. A scientific model must explain observations and may be replaced when new evidence disagrees.",
    "learn": [
      {
        "title": "Models answer to evidence",
        "text": "The early indivisible-sphere model changed after the electron was discovered. The plum-pudding model placed negative electrons inside spread-out positive charge. A scientific model must explain observations and may be replaced when new evidence disagrees.",
        "scene": "rad1:evidence:0",
        "process": false
      },
      {
        "title": "Most pass through; a few turn back",
        "text": "In alpha scattering, most particles passed through thin metal foil with little deflection: the atom is mostly empty space. A small fraction deflected strongly or returned: positive charge and much of the mass occupy a tiny dense nucleus. The movie deliberately shows rare large deflections more often so you can see them.",
        "scene": "rad1:evidence:1",
        "process": true,
        "processFilm": "rad1-evidence"
      },
      {
        "title": "Refine the nuclear model",
        "text": "Bohr proposed electrons at specific distances/energy levels; his calculations agreed with observations. Later work identified proton units of positive nuclear charge. Chadwick supplied evidence for neutrons about twenty years after the nuclear model was accepted. Detailed Bohr and Chadwick experimental apparatus is not required.",
        "scene": "rad1:evidence:2",
        "process": false
      },
      {
        "title": "Test an explanation",
        "text": "Compare spread-out positive charge with a concentrated nucleus. Choose a beam passing far from the centre or close to it. Predict the model’s qualitative deflection. Individual paths and encounter frequencies are schematic; use the actual distribution of observations, not this edited movie, as historical evidence.",
        "scene": "rad1:evidence:3",
        "process": false
      }
    ],
    "prerequisites": [
      "models"
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1a",
      "MS3c"
    ],
    "widget": "rad1-evidence",
    "practice": [
      {
        "id": "rad1.evidence.practice1",
        "prompt": "Most alpha particles passing through suggests…",
        "options": [
          "Mostly empty space",
          "A completely solid atom",
          "No nucleus can exist"
        ],
        "answer": 0,
        "why": "Most paths encounter very little concentrated matter.",
        "concept": "rad1.evidence"
      },
      {
        "id": "rad1.evidence.practice2",
        "prompt": "Rare large deflections imply…",
        "options": [
          "Spread-out negative mass",
          "A small concentrated positive nucleus",
          "Every atom has a huge nucleus"
        ],
        "answer": 1,
        "why": "Positive alphas can be strongly repelled in rare close approaches.",
        "concept": "rad1.evidence"
      },
      {
        "id": "rad1.evidence.practice3",
        "prompt": "Chadwick is associated with evidence for…",
        "options": [
          "Energy-level rings",
          "The original sphere",
          "Neutrons"
        ],
        "answer": 2,
        "why": "Neutrons explain neutral nuclear mass.",
        "concept": "rad1.evidence"
      }
    ],
    "check": [
      {
        "id": "rad1.evidence.check1",
        "prompt": "Why replace plum pudding?",
        "options": [
          "It failed to explain rare strong scattering",
          "It was older than Bohr",
          "It contained electrons"
        ],
        "answer": 0,
        "why": "A model is judged against evidence.",
        "concept": "rad1.evidence"
      },
      {
        "id": "rad1.evidence.check2",
        "prompt": "Which refinement concerns fixed electron energies?",
        "options": [
          "Chadwick’s neutron",
          "Bohr’s energy levels",
          "A larger nucleus"
        ],
        "answer": 1,
        "why": "Bohr adapted the nuclear model.",
        "concept": "rad1.evidence"
      },
      {
        "id": "rad1.evidence.check3",
        "prompt": "A teaching movie repeats one backscatter in five paths. This means…",
        "options": [
          "20% of real alphas backscatter",
          "The nucleus fills the atom",
          "The rare event is exaggerated for clarity"
        ],
        "answer": 2,
        "why": "Edited illustrative frequency is not measured evidence.",
        "concept": "rad1.evidence"
      },
      {
        "id": "rad1.evidence.check4",
        "prompt": "Out of 20000 incident particles, 10 turn back. What percentage turns back?",
        "options": [
          "0.05",
          "1.1",
          "0.025"
        ],
        "answer": 0,
        "why": "Rare events still place strong constraints on models.",
        "concept": "rad1.evidence"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "rad1Passed"
    }
  },
  {
    "id": "science.physics.atomic-structure.radiation",
    "title": "Activity and types of radiation",
    "short": "Activity and types of radiation",
    "topicId": "science.physics.atomic-structure",
    "refs": [
      "4.2.1"
    ],
    "combinedRefs": [
      "4.2.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Radioactive decay is spontaneous and random: you cannot predict exactly when one nucleus will decay. Activity counts decays per second, in becquerel (Bq). A detector’s count rate counts recorded events per second; geometry, absorption and detector efficiency mean it need not equal the source activity.",
    "learn": [
      {
        "title": "An unstable nucleus changes",
        "text": "Radioactive decay is spontaneous and random: you cannot predict exactly when one nucleus will decay. Activity counts decays per second, in becquerel (Bq). A detector’s count rate counts recorded events per second; geometry, absorption and detector efficiency mean it need not equal the source activity.",
        "scene": "rad1:radiation:0",
        "process": false
      },
      {
        "title": "Three emissions, different identities",
        "text": "Alpha is a helium nucleus: two protons and two neutrons. Beta-minus is a fast electron produced in the nucleus when a neutron becomes a proton; it is not an electron falling out of an outer shell. Gamma is electromagnetic radiation from the nucleus. Neutron emission is also possible.",
        "scene": "rad1:radiation:1",
        "process": true,
        "processFilm": "rad1-radiation"
      },
      {
        "title": "Penetration and ionisation",
        "text": "Alpha is strongly ionising with a short air range (a few centimetres) and is stopped by paper/skin. Beta has intermediate ionisation and range, and thin aluminium can stop it. Gamma is weakly ionising and very penetrating; thick lead or concrete reduces its intensity rather than guaranteeing zero transmission.",
        "scene": "rad1:radiation:2",
        "process": false
      },
      {
        "title": "Match a source to a job",
        "text": "A thickness gauge needs some radiation absorbed and some transmitted. An external source must reach its target; an internal alpha emitter can be very damaging to nearby tissue. Compare alpha/beta through paper/aluminium. Our barrier model gives qualitative outcomes, not dose or exact shield thicknesses.",
        "scene": "rad1:radiation:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.atomic-structure.atoms"
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1a",
      "MS3c"
    ],
    "widget": "rad1-radiation",
    "practice": [
      {
        "id": "rad1.radiation.practice1",
        "prompt": "Activity measures…",
        "options": [
          "Decays per second",
          "Number of protons",
          "Only detector clicks"
        ],
        "answer": 0,
        "why": "One Bq means one nuclear decay each second.",
        "concept": "rad1.radiation"
      },
      {
        "id": "rad1.radiation.practice2",
        "prompt": "Beta-minus comes from…",
        "options": [
          "An outer shell falling off",
          "A nuclear neutron changing to a proton",
          "Two protons joining"
        ],
        "answer": 1,
        "why": "The electron is produced in a nuclear change.",
        "concept": "rad1.radiation"
      },
      {
        "id": "rad1.radiation.practice3",
        "prompt": "Which is most penetrating?",
        "options": [
          "Alpha",
          "Beta",
          "Gamma"
        ],
        "answer": 2,
        "why": "Gamma intensity is reduced by substantial shielding.",
        "concept": "rad1.radiation"
      }
    ],
    "check": [
      {
        "id": "rad1.radiation.check1",
        "prompt": "A source has activity 100 Bq; a detector reads 12 counts/s. This is…",
        "options": [
          "Possible: not every decay is detected",
          "Impossible: both must be equal",
          "Proof of no background"
        ],
        "answer": 0,
        "why": "Detector geometry/efficiency and absorption matter.",
        "concept": "rad1.radiation"
      },
      {
        "id": "rad1.radiation.check2",
        "prompt": "Which emission is a helium nucleus?",
        "options": [
          "Gamma",
          "Alpha",
          "Beta"
        ],
        "answer": 1,
        "why": "Alpha contains two protons and two neutrons.",
        "concept": "rad1.radiation"
      },
      {
        "id": "rad1.radiation.check3",
        "prompt": "An external alpha source behind paper gives…",
        "options": [
          "Guaranteed huge transmitted dose",
          "More penetration than gamma",
          "Strongly reduced alpha transmission"
        ],
        "answer": 2,
        "why": "Paper stops alpha in this qualitative comparison.",
        "concept": "rad1.radiation"
      },
      {
        "id": "rad1.radiation.check4",
        "prompt": "A detector records 240 events in 60 s. Find mean count rate.",
        "options": [
          "4",
          "9",
          "2.0"
        ],
        "answer": 0,
        "why": "Count rate = recorded counts ÷ counting time.",
        "concept": "rad1.radiation"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "rad1Passed"
    }
  },
  {
    "id": "science.physics.atomic-structure.equations",
    "title": "Balance nuclear equations",
    "short": "Balance nuclear equations",
    "topicId": "science.physics.atomic-structure",
    "refs": [
      "4.2.2"
    ],
    "combinedRefs": [
      "4.2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Nuclear equations balance total mass number (top number A) and atomic number/charge number (bottom number Z) on each side. Use ⁴₂α and ⁰₋₁β for alpha and beta-minus. The daughter element symbol may be supplied; identifying an unfamiliar daughter element is not required.",
    "learn": [
      {
        "title": "Keep two accounts",
        "text": "Nuclear equations balance total mass number (top number A) and atomic number/charge number (bottom number Z) on each side. Use ⁴₂α and ⁰₋₁β for alpha and beta-minus. The daughter element symbol may be supplied; identifying an unfamiliar daughter element is not required.",
        "scene": "rad1:equations:0",
        "process": false
      },
      {
        "title": "Alpha removes a small nucleus",
        "text": "In single alpha decay, the daughter has A − 4 and Z − 2. A parent with A=210,Z=84 produces a daughter with A=206,Z=82 plus ⁴₂α. The whole equation still totals A=210 and Z=84. Mass number is a nucleon count, not the emitted energy.",
        "scene": "rad1:equations:1",
        "process": true,
        "processFilm": "rad1-equations"
      },
      {
        "title": "Beta changes nuclear charge",
        "text": "In beta-minus decay a neutron becomes a proton. Daughter A stays the same and Z increases by one; adding the emitted electron’s −1 balances charge. With A=14,Z=6, the daughter has A=14,Z=7. Gamma emission changes neither A nor Z.",
        "scene": "rad1:equations:2",
        "process": false
      },
      {
        "title": "Rebuild the ledger",
        "text": "Choose a supplied alpha-decay or beta-minus example, then select whether to find daughter A or Z. Predict the missing number before revealing. The examples specify a decay mode; balancing an equation alone does not predict whether any arbitrary isotope will undergo that mode. The animation isolates one event and uses enlarged symbols; it is not a prediction of a particular atom’s waiting time. Conservation applies to the entire equation, not the daughter alone.",
        "scene": "rad1:equations:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.atomic-structure.radiation"
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1a",
      "MS3c"
    ],
    "widget": "rad1-equations",
    "practice": [
      {
        "id": "rad1.equations.practice1",
        "prompt": "Single alpha decay changes daughter A by…",
        "options": [
          "−4",
          "+4",
          "0"
        ],
        "answer": 0,
        "why": "Alpha carries four nucleons away.",
        "concept": "rad1.equations"
      },
      {
        "id": "rad1.equations.practice2",
        "prompt": "Single beta-minus decay changes daughter Z by…",
        "options": [
          "−1",
          "+1",
          "0"
        ],
        "answer": 1,
        "why": "The electron’s −1 balances an increase of one in nuclear charge.",
        "concept": "rad1.equations"
      },
      {
        "id": "rad1.equations.practice3",
        "prompt": "Gamma changes A and Z by…",
        "options": [
          "−4 and −2",
          "0 and +1",
          "0 and 0"
        ],
        "answer": 2,
        "why": "Gamma carries energy without changing those counts.",
        "concept": "rad1.equations"
      }
    ],
    "check": [
      {
        "id": "rad1.equations.check1",
        "prompt": "After beta-minus decay of A=32,Z=15, daughter values are…",
        "options": [
          "A32,Z16",
          "A28,Z13",
          "A32,Z14"
        ],
        "answer": 0,
        "why": "A unchanged, Z increases by one.",
        "concept": "rad1.equations"
      },
      {
        "id": "rad1.equations.check2",
        "prompt": "After alpha decay of A=226,Z=88, daughter values are…",
        "options": [
          "A226,Z89",
          "A222,Z86",
          "A230,Z90"
        ],
        "answer": 1,
        "why": "Subtract four and two.",
        "concept": "rad1.equations"
      },
      {
        "id": "rad1.equations.check3",
        "prompt": "Why does beta-minus balance charge?",
        "options": [
          "The electron has +1",
          "Z falls by one",
          "Daughter Z rises by one and emitted electron has −1"
        ],
        "answer": 2,
        "why": "Total charge number remains the parent value.",
        "concept": "rad1.equations"
      },
      {
        "id": "rad1.equations.check4",
        "prompt": "A parent has A=238. After one alpha decay, find daughter A.",
        "options": [
          "234",
          "469",
          "117.0"
        ],
        "answer": 0,
        "why": "One alpha carries four nucleons.",
        "concept": "rad1.equations"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "rad1Passed"
    }
  },
  {
    "id": "science.physics.atomic-structure.half-life",
    "title": "Random decay and half-life",
    "short": "Random decay and half-life",
    "topicId": "science.physics.atomic-structure",
    "refs": [
      "4.2.3"
    ],
    "combinedRefs": [
      "4.2.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A single nucleus has no scheduled decay time. For a large sample, a roughly constant fraction decays in equal intervals. Half-life is the time for the number of original unstable nuclei, activity or background-corrected count rate to fall to half its starting value.",
    "learn": [
      {
        "title": "Random individuals, predictable populations",
        "text": "A single nucleus has no scheduled decay time. For a large sample, a roughly constant fraction decays in equal intervals. Half-life is the time for the number of original unstable nuclei, activity or background-corrected count rate to fall to half its starting value.",
        "scene": "rad1:half-life:0",
        "process": false
      },
      {
        "title": "Read a decay curve",
        "text": "For a source count rate 80,40,20,10 counts/s at 0,4,8,12 minutes, the half-life is 4 minutes. Start at any point and find the time to half that value. Equal half-lives remove equal fractions, not equal absolute counts. Small samples fluctuate more around a smooth expected curve.",
        "scene": "rad1:half-life:1",
        "process": true,
        "processFilm": "rad1-half-life"
      },
      {
        "title": "Remove background first",
        "text": "If total rate is 50 counts/s and background is 10, the source contributes 40. Half this source rate is 20, so the corresponding total is 30, not 25. Keep detector geometry and counting time comparable; repeated/longer counts reduce relative random variation.",
        "scene": "rad1:half-life:2",
        "process": false
      },
      {
        "title": "Follow an expected population",
        "text": "Choose 80 or 160 original nuclei and one or two half-lives. Predict the expected survivors. Markers disappear in a deterministic teaching sequence; real individual decay times are random. The smooth account gives an expectation, not a guarantee for a small real sample.",
        "scene": "rad1:half-life:3",
        "process": false
      },
      {
        "title": "Higher: express a net decline as a ratio",
        "text": "After n half-lives the expected surviving activity is 1/2ⁿ of its original value. After three half-lives, 1/8 remains and the net decline is 7/8 of the original. Distinguish remaining:original (1:8), decline:original (7:8) and original:remaining (8:1). Subtract detector background before applying these ratios.",
        "scene": "rad1:half-life:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [
      "science.physics.atomic-structure.radiation"
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1a",
      "MS3c"
    ],
    "widget": "rad1-half-life",
    "practice": [
      {
        "id": "rad1.half-life.practice1",
        "prompt": "Half-life means…",
        "options": [
          "Time to halve original unstable nuclei",
          "Time until every atom must decay",
          "Time to remove half the protons per atom"
        ],
        "answer": 0,
        "why": "It concerns a population of original unstable nuclei.",
        "concept": "rad1.half-life"
      },
      {
        "id": "rad1.half-life.practice2",
        "prompt": "Equal half-lives remove…",
        "options": [
          "Equal absolute numbers always",
          "Equal fractions on average",
          "No nuclei after the first interval"
        ],
        "answer": 1,
        "why": "The surviving population gets smaller each interval.",
        "concept": "rad1.half-life"
      },
      {
        "id": "rad1.half-life.practice3",
        "prompt": "Before finding half-life from detector rates, subtract…",
        "options": [
          "The half-life",
          "Source age",
          "Background count rate"
        ],
        "answer": 2,
        "why": "You need the source contribution.",
        "concept": "rad1.half-life"
      }
    ],
    "check": [
      {
        "id": "rad1.half-life.check1",
        "prompt": "Corrected rates 96→48 take 3 min. Half-life is…",
        "options": [
          "3 min",
          "6 min",
          "48 min"
        ],
        "answer": 0,
        "why": "One halving takes three minutes.",
        "concept": "rad1.half-life"
      },
      {
        "id": "rad1.half-life.check2",
        "prompt": "Which individual nucleus decays next?",
        "options": [
          "The oldest must",
          "Cannot be predicted exactly",
          "The largest drawn marker"
        ],
        "answer": 1,
        "why": "Radioactive decay is random.",
        "concept": "rad1.half-life"
      },
      {
        "id": "rad1.half-life.check3",
        "prompt": "Total initial rate 30 with background 6. At one half-life total should be about…",
        "options": [
          "15",
          "12",
          "18 counts/s"
        ],
        "answer": 2,
        "why": "Source24 halves to12; add background6.",
        "concept": "rad1.half-life"
      },
      {
        "id": "rad1.half-life.check4",
        "prompt": "Total rate is 74 counts/s; background is 10. Find source rate.",
        "options": [
          "64",
          "129",
          "32.0"
        ],
        "answer": 0,
        "why": "Subtract background measured with the source removed.",
        "concept": "rad1.half-life"
      },
      {
        "id": "rad1.half-life.check-higher",
        "prompt": "After three half-lives, net decline : original activity is…",
        "options": [
          "7:8",
          "1:8",
          "8:1"
        ],
        "answer": 0,
        "why": "One-eighth remains; seven-eighths has decayed.",
        "concept": "rad1.half-life"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model",
        "ratio"
      ],
      "completionKey": "rad1Passed"
    },
    "higherQuestions": [
      "rad1.half-life.check-higher"
    ]
  },
  {
    "id": "science.physics.atomic-structure.hazards",
    "title": "Contamination, irradiation and protection",
    "short": "Contamination, irradiation and protection",
    "topicId": "science.physics.atomic-structure",
    "refs": [
      "4.2.4"
    ],
    "combinedRefs": [
      "4.2.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Contamination means unwanted radioactive material is present on or inside something. It continues emitting until removed or decayed. Irradiation means exposure to nuclear radiation; ordinary irradiation in this GCSE model does not make the exposed object radioactive.",
    "learn": [
      {
        "title": "Source material or exposure?",
        "text": "Contamination means unwanted radioactive material is present on or inside something. It continues emitting until removed or decayed. Irradiation means exposure to nuclear radiation; ordinary irradiation in this GCSE model does not make the exposed object radioactive.",
        "scene": "rad1:hazards:0",
        "process": false
      },
      {
        "title": "Follow what remains",
        "text": "Move a sealed source away and irradiation from it ends. Remove an external source but leave contaminating dust behind and that dust remains a source. Contamination can spread; external irradiation is not itself a transferable substance. Alpha’s short range is little protection when an alpha source is inside tissue.",
        "scene": "rad1:hazards:1",
        "process": true,
        "processFilm": "rad1-hazards"
      },
      {
        "title": "Reduce unnecessary exposure",
        "text": "Use the shortest suitable exposure time, greater distance and appropriate shielding. Handle school sources only through supervised approved procedures, using suitable holders and secure storage. Containment reduces contamination; shielding reduces irradiation. The type of emission and exposure route affect risk.",
        "scene": "rad1:hazards:2",
        "process": false
      },
      {
        "title": "Scrutinise claims",
        "text": "Studies about radiation effects should publish methods, results and limitations so other scientists can check them through peer review and further research. One result is not certainty. Compare sealed versus leaking sources and whether the source has been moved away; predict whether local radioactive material remains.",
        "scene": "rad1:hazards:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.atomic-structure.radiation"
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1a",
      "MS3c"
    ],
    "widget": "rad1-hazards",
    "practice": [
      {
        "id": "rad1.hazards.practice1",
        "prompt": "Contamination means…",
        "options": [
          "Unwanted radioactive material present",
          "Any brief light exposure",
          "An object becoming hot"
        ],
        "answer": 0,
        "why": "The radioactive substance is on or inside the object.",
        "concept": "rad1.hazards"
      },
      {
        "id": "rad1.hazards.practice2",
        "prompt": "Moving a sealed source away…",
        "options": [
          "Makes the exposed object decay",
          "Ends exposure from that source",
          "Spreads all irradiation as dust"
        ],
        "answer": 1,
        "why": "Exposure does not leave radioactive source material behind.",
        "concept": "rad1.hazards"
      },
      {
        "id": "rad1.hazards.practice3",
        "prompt": "Peer review helps scientists…",
        "options": [
          "Guarantee no error exists",
          "Replace evidence with votes",
          "Check methods and interpretations"
        ],
        "answer": 2,
        "why": "Published work can be scrutinised and tested.",
        "concept": "rad1.hazards"
      }
    ],
    "check": [
      {
        "id": "rad1.hazards.check1",
        "prompt": "Which can spread to another surface?",
        "options": [
          "Contaminating radioactive dust",
          "Irradiation as a deposited material",
          "A previously received dose"
        ],
        "answer": 0,
        "why": "Physical radioactive material can transfer.",
        "concept": "rad1.hazards"
      },
      {
        "id": "rad1.hazards.check2",
        "prompt": "Best control for leaking powder is…",
        "options": [
          "Only a longer exposure",
          "Containment plus suitable procedures",
          "Removing every detector"
        ],
        "answer": 1,
        "why": "Containment addresses material transfer.",
        "concept": "rad1.hazards"
      },
      {
        "id": "rad1.hazards.check3",
        "prompt": "Internal alpha contamination can be hazardous because…",
        "options": [
          "Alpha becomes gamma inside",
          "Alpha stops ionising inside",
          "Strong ionisation occurs near tissue"
        ],
        "answer": 2,
        "why": "The emission deposits energy over a short distance.",
        "concept": "rad1.hazards"
      },
      {
        "id": "rad1.hazards.check4",
        "prompt": "An illustrative handling plan reduces exposure from 40 s to 10 s at the same rate. How many seconds are avoided?",
        "options": [
          "30",
          "61",
          "15.0"
        ],
        "answer": 0,
        "why": "Time is one factor; actual dose also depends on source and shielding.",
        "concept": "rad1.hazards"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "rad1Passed"
    }
  },
  {
    "id": "science.physics.atomic-structure.background",
    "title": "Background radiation and dose",
    "short": "Background radiation and dose",
    "topicId": "science.physics.atomic-structure",
    "refs": [
      "4.3.1",
      "4.3.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Natural background includes radioactive rocks (including radon from the ground) and cosmic radiation. Human-made sources include fallout from nuclear tests and accidents. Location and occupation change exposure. A detector reading without an experimental source is not necessarily zero.",
    "learn": [
      {
        "title": "Radiation is already around us",
        "text": "Natural background includes radioactive rocks (including radon from the ground) and cosmic radiation. Human-made sources include fallout from nuclear tests and accidents. Location and occupation change exposure. A detector reading without an experimental source is not necessarily zero.",
        "scene": "rad1:background:0",
        "process": false
      },
      {
        "title": "Compare dose with units",
        "text": "Radiation dose is expressed in sieverts (Sv); 1 Sv = 1000 mSv. You are not required to recall the unit, but must use supplied units consistently. Dose and health risk depend on exposure conditions; detector counts are not automatically a dose measurement.",
        "scene": "rad1:background:1",
        "process": false
      },
      {
        "title": "Half-life is part of a risk account",
        "text": "For the same number of radioactive nuclei, shorter half-life means higher initial activity. Long-lived material remains an issue for longer. Compare activity, radiation type, amount, exposure route and duration; half-life alone cannot rank every hazard.",
        "scene": "rad1:background:2",
        "process": false
      },
      {
        "title": "Correct a detector reading",
        "text": "Choose an illustrative site background and a measured total count rate. Subtract background to estimate source count rate, keeping geometry/time comparable. These invented counts demonstrate data correction; they are not local radiation surveys or personal dose estimates.",
        "scene": "rad1:background:3",
        "process": true,
        "processFilm": "rad1-background"
      }
    ],
    "prerequisites": [
      "science.physics.atomic-structure.half-life"
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1a",
      "MS3c"
    ],
    "widget": "rad1-background",
    "practice": [
      {
        "id": "rad1.background.practice1",
        "prompt": "A natural background source is…",
        "options": [
          "Cosmic radiation",
          "Only medical apparatus",
          "Only weapons tests"
        ],
        "answer": 0,
        "why": "Radiation can arrive from space.",
        "concept": "rad1.background"
      },
      {
        "id": "rad1.background.practice2",
        "prompt": "1000 mSv equals…",
        "options": [
          "1000 Sv",
          "1 Sv",
          "0.001 Sv"
        ],
        "answer": 1,
        "why": "The prefix milli is one-thousandth.",
        "concept": "rad1.background"
      },
      {
        "id": "rad1.background.practice3",
        "prompt": "Half-life alone…",
        "options": [
          "Determines all personal risk",
          "Replaces exposure-route information",
          "Cannot rank all radiation hazards"
        ],
        "answer": 2,
        "why": "Activity, type, amount and exposure matter.",
        "concept": "rad1.background"
      }
    ],
    "check": [
      {
        "id": "rad1.background.check1",
        "prompt": "Why measure background first?",
        "options": [
          "To estimate counts not due to the source",
          "To eliminate nuclear decay",
          "To guarantee a zero reading"
        ],
        "answer": 0,
        "why": "Background contributes to total counts.",
        "concept": "rad1.background"
      },
      {
        "id": "rad1.background.check2",
        "prompt": "For equal numbers of unstable nuclei, a shorter half-life generally gives…",
        "options": [
          "Lower initial activity",
          "Higher initial activity",
          "Identical activity necessarily"
        ],
        "answer": 1,
        "why": "A larger fraction decays per unit time.",
        "concept": "rad1.background"
      },
      {
        "id": "rad1.background.check3",
        "prompt": "Two occupations have different doses. Which is needed before explaining why?",
        "options": [
          "Only the job titles",
          "Only a colour chart",
          "Exposure duration and source conditions"
        ],
        "answer": 2,
        "why": "A causal comparison needs relevant exposure information.",
        "concept": "rad1.background"
      },
      {
        "id": "rad1.background.check4",
        "prompt": "Convert a supplied dose of 0.004 Sv to mSv.",
        "options": [
          "4",
          "9",
          "2.0"
        ],
        "answer": 0,
        "why": "Use consistent units before comparison.",
        "concept": "rad1.background"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "rad1Passed"
    }
  },
  {
    "id": "science.physics.atomic-structure.uses",
    "title": "Using radiation in medicine",
    "short": "Using radiation in medicine",
    "topicId": "science.physics.atomic-structure",
    "refs": [
      "4.3.3"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "A radioactive tracer can be introduced into the body and detected outside it. A suitable gamma emitter can provide a signal that escapes the body. Its half-life should allow the measurement but avoid unnecessary prolonged exposure; chemistry should target the intended pathway.",
    "learn": [
      {
        "title": "Trace an organ’s function",
        "text": "A radioactive tracer can be introduced into the body and detected outside it. A suitable gamma emitter can provide a signal that escapes the body. Its half-life should allow the measurement but avoid unnecessary prolonged exposure; chemistry should target the intended pathway.",
        "scene": "rad1:uses:0",
        "process": true,
        "processFilm": "rad1-uses"
      },
      {
        "title": "Treat unwanted tissue",
        "text": "Radiotherapy uses ionising radiation to damage or destroy unwanted tissue. External beams can be aimed from several directions to concentrate dose at the target while limiting healthy-tissue exposure. Some treatments use sources placed near or within the target. This is a conceptual comparison, not a treatment plan.",
        "scene": "rad1:uses:1",
        "process": false
      },
      {
        "title": "Weigh benefit and harm",
        "text": "Evaluate supplied evidence about diagnostic or treatment benefit alongside radiation harm, alternatives, uncertainty and consequences of doing nothing. A short half-life is not automatically suitable if most activity disappears before a tracer reaches the organ. A long half-life may prolong unnecessary exposure.",
        "scene": "rad1:uses:2",
        "process": false
      },
      {
        "title": "Choose for a stated purpose",
        "text": "Compare a tracer requiring external detection with a source intended to deposit energy close to tissue. Select a short-range strongly ionising alpha emission or penetrating gamma radiation and predict whether it matches the stated physical purpose. Real clinical selection needs many additional factors.",
        "scene": "rad1:uses:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.atomic-structure.hazards"
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1a",
      "MS3c"
    ],
    "widget": "rad1-uses",
    "practice": [
      {
        "id": "rad1.uses.practice1",
        "prompt": "An externally detected tracer generally needs…",
        "options": [
          "Radiation that can leave the body",
          "All radiation stopped immediately",
          "Only a long air range for alpha"
        ],
        "answer": 0,
        "why": "Gamma can reach an external detector.",
        "concept": "rad1.uses"
      },
      {
        "id": "rad1.uses.practice2",
        "prompt": "A tracer half-life should…",
        "options": [
          "Always be the longest possible",
          "Allow measurement without excessive persistence",
          "Be zero"
        ],
        "answer": 1,
        "why": "Balance time to measure against unnecessary exposure.",
        "concept": "rad1.uses"
      },
      {
        "id": "rad1.uses.practice3",
        "prompt": "Radiotherapy aims to…",
        "options": [
          "Make every healthy cell radioactive",
          "Avoid all ionisation",
          "Damage unwanted tissue while limiting other damage"
        ],
        "answer": 2,
        "why": "Ionisation has benefits and risks depending on where it occurs.",
        "concept": "rad1.uses"
      }
    ],
    "check": [
      {
        "id": "rad1.uses.check1",
        "prompt": "A tracer decays almost entirely before reaching its target. It is…",
        "options": [
          "Poorly matched to the measurement timescale",
          "Automatically best",
          "Safe regardless of dose"
        ],
        "answer": 0,
        "why": "The measurement needs enough activity at the relevant time.",
        "concept": "rad1.uses"
      },
      {
        "id": "rad1.uses.check2",
        "prompt": "Why use several beam directions?",
        "options": [
          "To raise dose uniformly everywhere",
          "To concentrate target dose while spreading other exposure",
          "To convert gamma into alpha"
        ],
        "answer": 1,
        "why": "Geometry helps reduce damage outside the target.",
        "concept": "rad1.uses"
      },
      {
        "id": "rad1.uses.check3",
        "prompt": "Evaluate a claimed radiation benefit using…",
        "options": [
          "Only fear of radiation",
          "Only a bright image",
          "Supplied benefits, harms, alternatives and uncertainty"
        ],
        "answer": 2,
        "why": "Compare evidence and consequences.",
        "concept": "rad1.uses"
      },
      {
        "id": "rad1.uses.check4",
        "prompt": "A supplied comparison has 85 successful outcomes out of 100 cases. Find the percentage.",
        "options": [
          "85",
          "171",
          "42.5"
        ],
        "answer": 0,
        "why": "This invented proportion is not a clinical effectiveness estimate.",
        "concept": "rad1.uses"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "rad1Passed"
    }
  },
  {
    "id": "science.physics.atomic-structure.fission",
    "title": "Nuclear fission and chain reactions",
    "short": "Nuclear fission and chain reactions",
    "topicId": "science.physics.atomic-structure",
    "refs": [
      "4.4.1"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Fission splits a large unstable nucleus, such as uranium or plutonium. Spontaneous fission is rare; usually the nucleus first absorbs a neutron. The split produces two smaller nuclei of roughly similar size, two or three neutrons and gamma radiation.",
    "learn": [
      {
        "title": "Split a large unstable nucleus",
        "text": "Fission splits a large unstable nucleus, such as uranium or plutonium. Spontaneous fission is rare; usually the nucleus first absorbs a neutron. The split produces two smaller nuclei of roughly similar size, two or three neutrons and gamma radiation.",
        "scene": "rad1:fission:0",
        "process": false
      },
      {
        "title": "Track the released energy",
        "text": "The products have kinetic energy and energy is released. A chain reaction occurs when emitted neutrons trigger further fissions. Not every emitted neutron must cause another event: some escape or are absorbed without causing fission. Our diagram shows a selected branch, not exact reactor geometry.",
        "scene": "rad1:fission:1",
        "process": true,
        "processFilm": "rad1-fission"
      },
      {
        "title": "Control the chain",
        "text": "A reactor controls the chain reaction and energy release, using neutron absorption to regulate further fissions. An uncontrolled chain reaction is associated with a nuclear weapon. Reactor operation and weapon engineering are not equivalent; the lesson models only the principle of neutron multiplication/control.",
        "scene": "rad1:fission:2",
        "process": false
      },
      {
        "title": "Count a toy generation",
        "text": "Choose one or two starting fissions and one or two successful next-generation triggers per fission. Predict next-generation fissions. Real products and neutron numbers vary; this branching arithmetic is an illustrative model, not a real reactor criticality calculation.",
        "scene": "rad1:fission:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.atomic-structure.equations"
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1a",
      "MS3c"
    ],
    "widget": "rad1-fission",
    "practice": [
      {
        "id": "rad1.fission.practice1",
        "prompt": "Fission usually begins when a suitable nucleus absorbs…",
        "options": [
          "A neutron",
          "An outer electron only",
          "A sound wave"
        ],
        "answer": 0,
        "why": "Neutron absorption can trigger the split.",
        "concept": "rad1.fission"
      },
      {
        "id": "rad1.fission.practice2",
        "prompt": "A typical fission emits…",
        "options": [
          "Only one intact parent",
          "Smaller nuclei, neutrons and gamma",
          "Only a pair of electrons"
        ],
        "answer": 1,
        "why": "Energy is released and all products have kinetic energy.",
        "concept": "rad1.fission"
      },
      {
        "id": "rad1.fission.practice3",
        "prompt": "A chain continues when emitted neutrons…",
        "options": [
          "Turn into protons in air",
          "Return to their original parent",
          "Trigger further fissions"
        ],
        "answer": 2,
        "why": "Further nuclei can absorb them and split.",
        "concept": "rad1.fission"
      }
    ],
    "check": [
      {
        "id": "rad1.fission.check1",
        "prompt": "Why can a chain fail to grow?",
        "options": [
          "Neutrons escape or are absorbed without fission",
          "Energy cannot be transferred",
          "All nuclei are identical spheres"
        ],
        "answer": 0,
        "why": "Not every neutron starts another split.",
        "concept": "rad1.fission"
      },
      {
        "id": "rad1.fission.check2",
        "prompt": "A controlled reactor regulates…",
        "options": [
          "Electron-shell colour",
          "Neutrons causing further fission",
          "Gravity"
        ],
        "answer": 1,
        "why": "Neutron absorption helps control the chain.",
        "concept": "rad1.fission"
      },
      {
        "id": "rad1.fission.check3",
        "prompt": "A fission diagram should show…",
        "options": [
          "Two light nuclei joining",
          "A nucleus gaining electrons only",
          "One large nucleus becoming smaller products with neutrons"
        ],
        "answer": 2,
        "why": "Fission is splitting.",
        "concept": "rad1.fission"
      },
      {
        "id": "rad1.fission.check4",
        "prompt": "In a toy chain, 3 fissions each trigger 2 further fissions. How many next-generation events?",
        "options": [
          "6",
          "13",
          "3.0"
        ],
        "answer": 0,
        "why": "This counts successful triggers, not every neutron emitted.",
        "concept": "rad1.fission"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "rad1Passed"
    }
  },
  {
    "id": "science.physics.atomic-structure.fusion",
    "title": "Nuclear fusion and energy",
    "short": "Nuclear fusion and energy",
    "topicId": "science.physics.atomic-structure",
    "refs": [
      "4.4.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Nuclear fusion joins two light nuclei into a heavier nucleus. In a fusion reaction, some mass can be converted into energy carried by radiation and other products. Fusion supplies energy in stars; it is distinct from chemical bonding and from fission of a heavy nucleus.",
    "learn": [
      {
        "title": "Join light nuclei",
        "text": "Nuclear fusion joins two light nuclei into a heavier nucleus. In a fusion reaction, some mass can be converted into energy carried by radiation and other products. Fusion supplies energy in stars; it is distinct from chemical bonding and from fission of a heavy nucleus.",
        "scene": "rad1:fusion:0",
        "process": false
      },
      {
        "title": "Overcome electric repulsion",
        "text": "Positive nuclei repel. Very high temperatures give nuclei enough kinetic energy for close encounters that can lead to fusion. Stellar conditions sustain fusion; this animation is a schematic successful event, not a collision probability model or a laboratory design.",
        "scene": "rad1:fusion:1",
        "process": true,
        "processFilm": "rad1-fusion"
      },
      {
        "title": "Compare three changes",
        "text": "Fission splits a large nucleus; fusion joins light nuclei; a chemical reaction rearranges electrons and bonds without changing the nuclei. Neither fusion nor fission should be explained as ordinary burning. Products and released radiation carry the energy away.",
        "scene": "rad1:fusion:2",
        "process": false
      },
      {
        "title": "Keep the nucleon ledger",
        "text": "For an illustrative hydrogen-2 plus hydrogen-3 reaction, helium-4 plus a neutron conserves total A=5 and Z=2. Choose repeated copies of this supplied reaction and predict total nucleon count before the reaction. The mass difference involves binding energy; integer mass numbers count nucleons and do not measure exact rest masses.",
        "scene": "rad1:fusion:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.atomic-structure.atoms"
    ],
    "skills": [
      "WS1.2",
      "WS3.5",
      "MS1a",
      "MS3c"
    ],
    "widget": "rad1-fusion",
    "practice": [
      {
        "id": "rad1.fusion.practice1",
        "prompt": "Fusion is…",
        "options": [
          "Joining light nuclei",
          "Splitting a heavy nucleus",
          "Joining atoms with electron bonds only"
        ],
        "answer": 0,
        "why": "Nuclear fusion changes nuclei.",
        "concept": "rad1.fusion"
      },
      {
        "id": "rad1.fusion.practice2",
        "prompt": "High temperature helps because nuclei have…",
        "options": [
          "No charge",
          "More kinetic energy for close encounters",
          "Less mass number by definition"
        ],
        "answer": 1,
        "why": "The positive nuclei repel at a distance.",
        "concept": "rad1.fusion"
      },
      {
        "id": "rad1.fusion.practice3",
        "prompt": "In fusion some mass can become…",
        "options": [
          "Extra charge",
          "Missing nucleons with no products",
          "Energy of radiation/products"
        ],
        "answer": 2,
        "why": "Total mass-energy is accounted for.",
        "concept": "rad1.fusion"
      }
    ],
    "check": [
      {
        "id": "rad1.fusion.check1",
        "prompt": "Which process powers stable stars?",
        "options": [
          "Nuclear fusion",
          "Chemical combustion alone",
          "Splitting water molecules"
        ],
        "answer": 0,
        "why": "Fusion releases energy in stellar cores.",
        "concept": "rad1.fusion"
      },
      {
        "id": "rad1.fusion.check2",
        "prompt": "Fission differs from fusion because fission…",
        "options": [
          "Joins light nuclei",
          "Splits a large nucleus",
          "Only rearranges electrons"
        ],
        "answer": 1,
        "why": "The nuclear changes have opposite structural descriptions.",
        "concept": "rad1.fusion"
      },
      {
        "id": "rad1.fusion.check3",
        "prompt": "In ²₁H + ³₁H → ⁴₂He + ¹₀n, total Z is…",
        "options": [
          "5",
          "4",
          "2 on both sides"
        ],
        "answer": 2,
        "why": "Charge number balances:1+1=2+0.",
        "concept": "rad1.fusion"
      },
      {
        "id": "rad1.fusion.check4",
        "prompt": "For the supplied ²H + ³H reaction, what total mass number is present before the reaction?",
        "options": [
          "5",
          "11",
          "2.5"
        ],
        "answer": 0,
        "why": "Integer mass numbers count nucleons, not exact rest mass.",
        "concept": "rad1.fusion"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "rad1Passed"
    }
  }
];
export const rad1Concepts={"rad1.atoms": "Atoms, isotopes and energy levels", "rad1.evidence": "How evidence changed the atom", "rad1.radiation": "Activity and types of radiation", "rad1.equations": "Balance nuclear equations", "rad1.half-life": "Random decay and half-life", "rad1.hazards": "Contamination, irradiation and protection", "rad1.background": "Background radiation and dose", "rad1.uses": "Using radiation in medicine", "rad1.fission": "Nuclear fission and chain reactions", "rad1.fusion": "Nuclear fusion and energy"};
