export const cultureLessons=[
  {
    "id": "science.biology.cells.culturing",
    "title": "Culturing microorganisms",
    "short": "Understand contamination controls",
    "refs": [
      "1.1.6"
    ],
    "minutes": 30,
    "widget": "culture-lab",
    "topicId": "science.biology.cell-biology",
    "big": "Bacteria can grow in nutrient broth or as colonies on nutrient agar.",
    "learn": [
      {
        "title": "Use a known, uncontaminated culture",
        "text": "Bacteria can grow in nutrient broth or as colonies on nutrient agar. Broth is a nutrient-containing liquid; agar provides a gel surface on which growth can form visible colonies. Uncontaminated cultures allow investigations of disinfectants or antibiotics to be interpreted: growth should be from the intended organism rather than an unknown mixture. These are supervised school-laboratory concepts, not a home-culturing activity.",
        "scene": "culture:broth"
      },
      {
        "title": "Prevent other microorganisms entering",
        "text": "Aseptic technique reduces contamination by unwanted microorganisms. Petri dishes and culture media are sterilised before use to kill microorganisms already present. Clean handling and suitable school-approved cultures matter as well; an apparently clean surface is not proof of sterility. The model shows why contamination changes evidence, not how to set up a home laboratory.",
        "scene": "culture:agar"
      },
      {
        "title": "Explain the loop treatment",
        "text": "AQA requires understanding why an inoculating loop used to transfer microorganisms is sterilised by passing it through a flame: this kills unwanted microorganisms on the loop and helps avoid carrying contaminants into a culture. Actual equipment, heating, handling and disposal follow teacher/technician instruction and the school risk assessment. A picture of a sterilised tool does not establish practical competence.",
        "scene": "culture:aseptic"
      },
      {
        "title": "Keep the lid secure and the plate inverted",
        "text": "Securing a Petri-dish lid with suitable tape helps prevent accidental opening and contamination. School methods use small pieces rather than a complete airtight seal, which can create unwanted anaerobic conditions. Storing the plate upside down helps prevent condensation falling onto the agar and spreading colonies. Do not reopen an incubated culture to inspect or handle growth; school staff manage safe handling and disposal.",
        "scene": "culture:aseptic"
      },
      {
        "title": "Use the school temperature limit",
        "text": "In school and college laboratories, cultures are incubated at a maximum of25°C to reduce the likelihood of encouraging harmful microorganisms adapted to body temperature. This limit does not sterilise the culture or make unknown samples safe. Use approved organisms, supervised procedures and school risk controls; do not culture unknown environmental or body samples at home. The simulation contains no living culture and is not evidence that physical work was completed.",
        "scene": "culture:aseptic"
      }
    ],
    "practice": [
      {
        "id": "bio.p-culture1",
        "prompt": "What does an uncontaminated culture help establish?",
        "options": [
          "Observed growth is from the intended organism rather than unwanted contaminants",
          "Every organism is harmless",
          "No school supervision is needed"
        ],
        "answer": 0,
        "why": "Contamination can undermine both safety and interpretation.",
        "concept": "bio.culture-purpose"
      },
      {
        "id": "bio.p-culture2",
        "prompt": "Why sterilise culture media and Petri dishes before use?",
        "options": [
          "To increase the number of unknown organisms",
          "To kill microorganisms already present",
          "To supply extra antibiotic"
        ],
        "answer": 1,
        "why": "Sterilisation reduces organisms that would contaminate the intended culture.",
        "concept": "bio.culture-aseptic"
      },
      {
        "id": "bio.p-culture3",
        "prompt": "A plate is stored inverted mainly to…",
        "options": [
          "Allow every airborne organism in",
          "Remove all agar",
          "Reduce condensation dripping onto and spreading growth"
        ],
        "answer": 2,
        "why": "Condensation can redistribute colonies and spoil interpretation.",
        "concept": "bio.culture-aseptic"
      },
      {
        "id": "bio.p-culture4",
        "prompt": "What is the maximum incubation temperature specified for school cultures?",
        "options": [
          "25°C",
          "37°C as a universal rule",
          "Any temperature if the lid is taped"
        ],
        "answer": 0,
        "why": "AQA specifies a maximum of25°C in school/college laboratories.",
        "concept": "bio.culture-safety"
      }
    ],
    "check": [
      {
        "id": "bio.c-culture1",
        "prompt": "Which statement distinguishes the media?",
        "options": [
          "Nutrient broth is liquid; nutrient agar provides a gel surface",
          "Agar is a gas and broth is solid metal",
          "Neither can support bacteria"
        ],
        "answer": 0,
        "why": "Bacteria can grow in both specified media with suitable conditions.",
        "concept": "bio.culture-purpose"
      },
      {
        "id": "bio.c-culture2",
        "prompt": "An investigation intended to compare antibiotics is contaminated with other bacteria. Main interpretation problem?",
        "options": [
          "It now proves every antibiotic works",
          "Growth may not be attributable only to the intended organism",
          "The Petri dish must contain no living cells"
        ],
        "answer": 1,
        "why": "Different organisms can respond differently, confounding the comparison.",
        "concept": "bio.culture-purpose"
      },
      {
        "id": "bio.c-culture3",
        "prompt": "Why sterilise an inoculating loop by the specified flame treatment?",
        "options": [
          "To turn bacteria into agar",
          "To make every antibiotic stronger",
          "To kill unwanted microorganisms on the loop"
        ],
        "answer": 2,
        "why": "Loop sterilisation helps prevent transfer of contaminants.",
        "concept": "bio.culture-aseptic"
      },
      {
        "id": "bio.c-culture4",
        "prompt": "Which reason supports sterilising the medium before use?",
        "options": [
          "Removing microorganisms already present before the intended culture is introduced",
          "Guaranteeing that all future handling cannot contaminate it",
          "Making nutrients unnecessary"
        ],
        "answer": 0,
        "why": "Sterilisation addresses pre-existing organisms, not every possible later error.",
        "concept": "bio.culture-aseptic"
      },
      {
        "id": "bio.c-culture5",
        "prompt": "Why secure a culture-plate lid with appropriate tape?",
        "options": [
          "To provide the bacteria with sugar",
          "To reduce accidental opening and contamination",
          "To prove growth is safe to touch"
        ],
        "answer": 1,
        "why": "Tape supports containment; it does not remove biological risk.",
        "concept": "bio.culture-aseptic"
      },
      {
        "id": "bio.c-culture6",
        "prompt": "Why keep the culture plate inverted in the specified method?",
        "options": [
          "To increase the temperature above37°C",
          "To remove the lid during incubation",
          "To reduce condensation dripping onto the agar"
        ],
        "answer": 2,
        "why": "Falling droplets can spread organisms and merge growth.",
        "concept": "bio.culture-aseptic"
      },
      {
        "id": "bio.c-culture7",
        "prompt": "Why use a maximum of25°C for school cultures?",
        "options": [
          "To reduce the chance of promoting harmful microorganisms adapted to body temperature",
          "To sterilise every culture completely",
          "To guarantee unknown bacteria are harmless"
        ],
        "answer": 0,
        "why": "The temperature is one safety control, not a complete safety guarantee.",
        "concept": "bio.culture-safety"
      },
      {
        "id": "bio.c-culture8",
        "prompt": "Which action matches the school-only scope of this lesson?",
        "options": [
          "Reopen an incubated unknown culture at home",
          "Use approved supervised school procedures and leave disposal to staff",
          "Treat the simulation as proof of safe physical technique"
        ],
        "answer": 1,
        "why": "Online reasoning cannot replace supervised practical technique and containment.",
        "concept": "bio.culture-safety"
      }
    ],
    "skills": [
      "WS2.2",
      "WS2.4"
    ],
    "prerequisites": [
      "science.biology.cells.cell-types"
    ],
    "separate": true,
    "higher": false
  },
  {
    "id": "science.biology.cells.bacterial-growth",
    "title": "Bacterial growth calculations",
    "short": "Count the doubling intervals",
    "refs": [
      "1.1.6"
    ],
    "minutes": 30,
    "widget": "growth-lab",
    "topicId": "science.biology.cell-biology",
    "big": "Bacteria multiply by simple cell division, called binary fission.",
    "learn": [
      {
        "title": "Binary fission increases cell number",
        "text": "Bacteria multiply by simple cell division, called binary fission. One bacterium divides to form two. Bacteria have no nucleus, so binary fission is not nuclear division by mitosis. Division can occur as often as once every20 minutes if enough nutrients and a suitable temperature are available. This is a conditional example, not a fixed interval for every bacterium or unlimited growth in a real culture.",
        "scene": "growth:0"
      },
      {
        "title": "Count complete doubling intervals",
        "text": "For a supplied constant mean division time, count the complete intervals in the stated time. Starting with one bacterium and a20-minute division time, after60 minutes there are three doublings:1→2→4→8. Multiply the starting population by2 once per interval; do not add2 each time. The model assumes synchronous doubling with no deaths or resource limit.",
        "scene": "growth:1"
      },
      {
        "title": "Use a different starting population",
        "text": "For an initial population N and n complete doublings, the model population is N×2ⁿ. Starting with5 bacteria and a30-minute division time, after2 hours there are four doublings:5×16=80. Convert hours to minutes before dividing. These calculations are required at both tiers; no real-time growth experiment is claimed.",
        "scene": "growth:3"
      },
      {
        "title": "Recognise a limited model",
        "text": "Real populations may grow more slowly as nutrients are used or conditions become unsuitable, and cells need not divide together. Apply the supplied mean division time and explicit assumptions in a question. The model does not predict a real culture indefinitely and should not be used to select unsafe incubation conditions.",
        "scene": "growth:3"
      },
      {
        "title": "Higher: express a population in standard form",
        "text": "Expressing the calculated bacterial population in standard form is Higher-only in this paragraph. For example6400 =6.4×10³. The coefficient is at least1 and less than10. Foundation learners still calculate the population as an ordinary number; a scientific-notation input is not required to complete the shared investigation.",
        "scene": "growth:3",
        "higher": true
      }
    ],
    "practice": [
      {
        "id": "bio.p-growth1",
        "prompt": "Starting with2 bacteria, three complete doublings occur. Population?",
        "type": "number",
        "answer": 16,
        "tolerance": 0.001,
        "unit": "",
        "why": "2×2³=16.",
        "concept": "bio.growth-calculate"
      },
      {
        "id": "bio.p-growth2",
        "prompt": "Mean division time20 min. How many complete doublings in100 min?",
        "type": "number",
        "answer": 5,
        "tolerance": 0.001,
        "unit": "",
        "why": "100÷20=5.",
        "concept": "bio.growth-time"
      },
      {
        "id": "bio.p-growth3",
        "prompt": "Starting with3 bacteria, mean division time30 min for2 h, with no deaths. Population?",
        "type": "number",
        "answer": 48,
        "tolerance": 0.001,
        "unit": "",
        "why": "120÷30=4 doublings;3×2⁴=48.",
        "concept": "bio.growth-calculate"
      },
      {
        "id": "bio.p-growth4",
        "prompt": "Why might real growth depart from repeated doubling?",
        "options": [
          "Nutrients can become limited and conditions change",
          "The model creates unlimited nutrients",
          "Every bacterium must divide exactly every20 minutes forever"
        ],
        "answer": 0,
        "why": "The ideal assumptions can fail in real cultures.",
        "concept": "bio.growth-limits"
      },
      {
        "id": "bio.p-growthht",
        "prompt": "Higher: write a model population of4096 in normalised standard form.",
        "options": [
          "40.96×10²",
          "4.096×10³",
          "0.4096×10⁴"
        ],
        "answer": 1,
        "why": "The coefficient must be at least1 and less than10.",
        "concept": "bio.growth-standard"
      }
    ],
    "check": [
      {
        "id": "bio.c-growth1",
        "prompt": "Starting with4 bacteria, two complete doublings occur. Population?",
        "type": "number",
        "answer": 16,
        "tolerance": 0.001,
        "unit": "",
        "why": "4×2²=16.",
        "concept": "bio.growth-calculate"
      },
      {
        "id": "bio.c-growth2",
        "prompt": "A model uses a20-minute division time for3 h. Number of complete doublings?",
        "type": "number",
        "answer": 9,
        "tolerance": 0.001,
        "unit": "",
        "why": "180÷20=9.",
        "concept": "bio.growth-time"
      },
      {
        "id": "bio.c-growth3",
        "prompt": "Starting with4 bacteria, division time20 min for2 h, no deaths. Population?",
        "type": "number",
        "answer": 256,
        "tolerance": 0.001,
        "unit": "",
        "why": "120÷20=6 doublings;4×2⁶=256.",
        "concept": "bio.growth-calculate"
      },
      {
        "id": "bio.c-growth4",
        "prompt": "Starting with10 bacteria, division time30 min for90 min, no deaths. Population?",
        "type": "number",
        "answer": 80,
        "tolerance": 0.001,
        "unit": "",
        "why": "90÷30=3;10×8=80.",
        "concept": "bio.growth-calculate"
      },
      {
        "id": "bio.c-growth5",
        "prompt": "The statement “bacteria can divide every20 minutes” applies…",
        "options": [
          "Under suitable temperature and nutrient conditions",
          "To every species at every temperature",
          "Only when nutrients are absent"
        ],
        "answer": 0,
        "why": "The specification gives a possible rate under suitable conditions.",
        "concept": "bio.growth-limits"
      },
      {
        "id": "bio.c-growth6",
        "prompt": "Which sequence shows doubling from an initial population of3?",
        "options": [
          "3,5,7,9",
          "3,6,12,24",
          "3,9,27,81"
        ],
        "answer": 1,
        "why": "Each complete division doubles the population.",
        "concept": "bio.growth-calculate"
      },
      {
        "id": "bio.c-growth7",
        "prompt": "Why convert2 h to120 min before using a20-minute division time?",
        "options": [
          "Because time units do not matter",
          "To create more bacterial nutrients",
          "The total time and division interval must use matching units"
        ],
        "answer": 2,
        "why": "Consistent units give the correct number of intervals.",
        "concept": "bio.growth-time"
      },
      {
        "id": "bio.c-growth8",
        "prompt": "A forecast continues doubling forever despite exhausted nutrients. Best criticism?",
        "options": [
          "The forecast ignores conditions required by its model",
          "Every forecast is an actual culture measurement",
          "Nutrient exhaustion guarantees faster growth"
        ],
        "answer": 0,
        "why": "A simple growth law has biological limits.",
        "concept": "bio.growth-limits"
      },
      {
        "id": "bio.c-growthht",
        "prompt": "Higher: a supplied calculation gives a population of3072. Which is normalised standard form?",
        "options": [
          "30.72×10²",
          "0.3072×10⁴",
          "3.072×10³"
        ],
        "answer": 2,
        "why": "A coefficient between1 and10 gives3.072×10³.",
        "concept": "bio.growth-standard"
      }
    ],
    "skills": [
      "MS1a",
      "MS1b",
      "MS1d",
      "MS2a",
      "MS2h"
    ],
    "prerequisites": [
      "science.biology.cells.culturing",
      "science.biology.cells.cell-cycle"
    ],
    "separate": true,
    "higher": false,
    "higherQuestions": [
      "bio.p-growthht",
      "bio.c-growthht"
    ]
  },
  {
    "id": "science.biology.cells.inhibition-zones",
    "title": "Investigating inhibition zones",
    "short": "Measure evidence, limit the claim",
    "refs": [
      "1.1.6"
    ],
    "minutes": 30,
    "widget": "zone-lab",
    "topicId": "science.biology.cell-biology",
    "big": "AQA Biology required practical2 investigates how antiseptics or antibiotics affect bacterial growth on agar, measuring zones of inhibition.",
    "learn": [
      {
        "title": "Investigate inhibition in a school setting",
        "text": "AQA Biology required practical2 investigates how antiseptics or antibiotics affect bacterial growth on agar, measuring zones of inhibition. School-prepared plates and approved supervised procedures are used; this lesson is interpretation and planning, not directions for culturing unknown samples at home. A clear region means visible growth was inhibited under those test conditions, not proof that every bacterium was killed.",
        "scene": "zone:measure"
      },
      {
        "title": "Measure a diameter, then find radius",
        "text": "A clear zone is often approximated as a circle. Measure across its full width through the centre; if imperfectly circular, use two perpendicular diameters and calculate their mean as in the AQA suggested method. Radius is half the diameter. Use area =πr². For a12 mm mean diameter, r=6 mm and area is approximately113.04 mm² usingπ=3.14. State whether the total circular region includes the disc.",
        "scene": "zone:measure"
      },
      {
        "title": "Make the comparison fair",
        "text": "Compare zones using the same bacterial strain, agar conditions, disc size, treatment concentration/amount, incubation time and school temperature conditions where these are not the intended variable. A control disc with only the relevant carrier tests whether the disc or carrier causes inhibition. Repeat suitable samples and compare means and spread. A model comparison should not claim one uncontrolled plate proves the universal best chemical.",
        "scene": "zone:compare"
      },
      {
        "title": "Separate area conventions",
        "text": "When a question asks for the total circular zone including the disc, useπR² for the outer radius. If it explicitly asks for clear area excluding a central disc, subtract the disc area:π(R²−r²). For outer diameter20 mm and disc diameter6 mm, these are314 mm² and285.74 mm² respectively usingπ=3.14. The subtraction is a supplied geometry extension, not a second mandatory biological mechanism.",
        "scene": "zone:measure"
      },
      {
        "title": "Evaluate what a larger zone means",
        "text": "A larger inhibition zone can support greater inhibition in that test, but diffusion through agar, concentrations and bacterial susceptibility also affect zone size. It does not establish a clinical cure, safety in a patient, or effectiveness against every organism. Check controls, repeat results and possible contamination before drawing a proportionate conclusion. Irregular zones make a circular-area estimate approximate. The app uses original illustrative measurements, not real clinical or school experiment records.",
        "scene": "zone:evaluate"
      }
    ],
    "practice": [
      {
        "id": "bio.p-zone1",
        "prompt": "A zone has diameter14 mm. Radius?",
        "type": "number",
        "answer": 7,
        "tolerance": 0.001,
        "unit": "mm",
        "why": "Radius=diameter÷2.",
        "concept": "bio.zone-area"
      },
      {
        "id": "bio.p-zone2",
        "prompt": "Useπ=3.14. A circular zone has radius6 mm. Total area including its central disc?",
        "type": "number",
        "answer": 113.04,
        "tolerance": 0.01,
        "unit": "mm²",
        "why": "3.14×6²=113.04 mm².",
        "concept": "bio.zone-area"
      },
      {
        "id": "bio.p-zone3",
        "prompt": "Why include a carrier-only control disc?",
        "options": [
          "To guarantee all bacteria are killed",
          "To test whether the disc/carrier itself causes inhibition",
          "To replace every repeat"
        ],
        "answer": 1,
        "why": "A control separates treatment effects from carrier effects.",
        "concept": "bio.zone-method"
      },
      {
        "id": "bio.p-zone4",
        "prompt": "A treatment gives the largest zone in the supplied controlled school test. Supported conclusion?",
        "options": [
          "It cures all bacterial infections",
          "It is safe for every patient",
          "It gave the greatest observed inhibition in this test"
        ],
        "answer": 2,
        "why": "The result supports a test-specific inference, not a clinical guarantee.",
        "concept": "bio.zone-limits"
      }
    ],
    "check": [
      {
        "id": "bio.c-zone1",
        "prompt": "The schematic labels the OUTER zone diameter. What is its radius?",
        "type": "number",
        "answer": 10,
        "tolerance": 0.001,
        "unit": "mm",
        "why": "20÷2=10 mm.",
        "concept": "bio.zone-area",
        "figure": {
          "kind": "bio-zone",
          "diameter": 20,
          "disc": 6
        }
      },
      {
        "id": "bio.c-zone2",
        "prompt": "Useπ=3.14. A zone diameter is16 mm. Total circular area including the disc?",
        "type": "number",
        "answer": 200.96,
        "tolerance": 0.01,
        "unit": "mm²",
        "why": "r=8 mm;3.14×64=200.96 mm².",
        "concept": "bio.zone-area"
      },
      {
        "id": "bio.c-zone3",
        "prompt": "Two perpendicular diameters are18 and22 mm. Mean diameter?",
        "type": "number",
        "answer": 20,
        "tolerance": 0.001,
        "unit": "mm",
        "why": "(18+22)÷2=20 mm.",
        "concept": "bio.zone-measure"
      },
      {
        "id": "bio.c-zone4",
        "prompt": "The independent variable is antibiotic type. Which should be held comparable?",
        "options": [
          "Bacterial strain, disc size and incubation conditions",
          "The resulting zone area",
          "Only the colour of the chart"
        ],
        "answer": 0,
        "why": "Control alternative causes of a difference in growth inhibition.",
        "concept": "bio.zone-method"
      },
      {
        "id": "bio.c-zone5",
        "prompt": "A carrier-only disc also produces a clear zone. Best interpretation?",
        "options": [
          "The active treatment alone is certainly responsible",
          "The carrier/disc may contribute and must be considered",
          "Every sample is automatically sterile"
        ],
        "answer": 1,
        "why": "A positive control effect complicates attribution to the active treatment.",
        "concept": "bio.zone-method"
      },
      {
        "id": "bio.c-zone6",
        "prompt": "Repeated matched tests give larger mean zones for A than B. What is justified?",
        "options": [
          "A is guaranteed to cure patients",
          "A must work against every species",
          "A showed greater growth inhibition under those test conditions"
        ],
        "answer": 2,
        "why": "Clinical effectiveness and universal susceptibility are not established by this model.",
        "concept": "bio.zone-limits"
      },
      {
        "id": "bio.c-zone7",
        "prompt": "Why use repeats and examine spread?",
        "options": [
          "To assess variability and reliability of the comparison",
          "To hide any inconvenient result",
          "To make contamination harmless"
        ],
        "answer": 0,
        "why": "Repeat variation helps judge confidence and investigate anomalies.",
        "concept": "bio.zone-method"
      },
      {
        "id": "bio.c-zone8",
        "prompt": "Useπ=3.14. Outer zone radius9 mm, central disc radius3 mm. Clear area EXCLUDING the disc?",
        "type": "number",
        "answer": 226.08,
        "tolerance": 0.01,
        "unit": "mm²",
        "why": "3.14×(81−9)=226.08 mm².",
        "concept": "bio.zone-area"
      },
      {
        "id": "bio.c-zone9",
        "prompt": "Why isπr² only an estimate for a strongly irregular inhibition zone?",
        "options": [
          "Every zone has zero area",
          "The circular-shape assumption is imperfect",
          "Using millimetres makes area impossible"
        ],
        "answer": 1,
        "why": "The model geometry does not reproduce an irregular boundary exactly.",
        "concept": "bio.zone-limits"
      }
    ],
    "skills": [
      "WS2.2",
      "WS2.4",
      "WS3.4",
      "MS5c",
      "AT1",
      "AT3",
      "AT4",
      "AT8"
    ],
    "prerequisites": [
      "science.biology.cells.culturing"
    ],
    "separate": true,
    "higher": false
  }
];
export const cultureConcepts={
  "bio.culture-purpose": "Broth, colonies and uncontaminated cultures",
  "bio.culture-aseptic": "Reasons for aseptic culture controls",
  "bio.culture-safety": "Supervised school culture limits",
  "bio.growth-calculate": "Population from repeated doubling",
  "bio.growth-time": "Consistent division-time intervals",
  "bio.growth-limits": "Conditional growth and model assumptions",
  "bio.growth-standard": "Higher-only standard form of populations",
  "bio.zone-area": "Radius and circular inhibition area",
  "bio.zone-measure": "Mean perpendicular zone diameters",
  "bio.zone-method": "Controls, variables and repeats",
  "bio.zone-limits": "Scope of inhibition evidence"
};
