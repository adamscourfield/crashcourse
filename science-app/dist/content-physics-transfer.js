export const phy2Lessons=[
  {
    "id": "science.physics.energy.power",
    "title": "Power: energy transferred each second",
    "short": "Power: energy transferred each second",
    "topicId": "science.physics.energy",
    "refs": [
      "1.1.4"
    ],
    "combinedRefs": [
      "1.1.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Power tells us how quickly energy is transferred or work is done. P=E/t and P=W/t, with energy/work in joules, time in seconds and power in watts. One watt means one joule per second. The symbol W can mean work in an equation or the watt unit after a number: use the context.",
    "learn": [
      {
        "title": "Power is a rate",
        "text": "Power tells us how quickly energy is transferred or work is done. P=E/t and P=W/t, with energy/work in joules, time in seconds and power in watts. One watt means one joule per second. The symbol W can mean work in an equation or the watt unit after a number: use the context.",
        "scene": "phy2:power:0",
        "process": false
      },
      {
        "title": "Equal work, different time",
        "text": "Two ideal motors each lift the same weight through the same height, doing 120 J of work. One takes 2 s and the other 4 s. Their powers are 60 W and 30 W. The faster motor transfers the same energy at twice the rate; it does not do twice the work.",
        "scene": "phy2:power:1",
        "process": true,
        "processFilm": "phy2-power"
      },
      {
        "title": "Calculate and rearrange",
        "text": "For 300 J transferred in 5 s, P=300/5=60 W. Rearrange to E=Pt or t=E/P; for a 50 W device running 6 s, E=300 J. Convert minutes to seconds and kilowatts to watts before using these forms.",
        "scene": "phy2:power:2",
        "process": false
      },
      {
        "title": "Choose a fair comparison",
        "text": "Compare motors doing the same work, then measure time. Our virtual lift uses supplied work and duration; it omits start-up, friction and motor heating. Model time is shown explicitly, while playback duration is a viewing choice. Power is not an efficiency percentage.",
        "scene": "phy2:power:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.energy.stores"
    ],
    "skills": [
      "MS3b",
      "MS3c"
    ],
    "widget": "phy2-power",
    "practice": [
      {
        "id": "phy2.p-power1",
        "prompt": "Power describes…",
        "options": [
          "Energy transferred per second",
          "Total stored energy alone",
          "Force multiplied by mass"
        ],
        "answer": 0,
        "why": "Power is a rate, measured in watts.",
        "concept": "phy2.power"
      },
      {
        "id": "phy2.p-power2",
        "prompt": "120 J in 2 s gives…",
        "options": [
          "240 W",
          "60 W",
          "0.0167 W"
        ],
        "answer": 1,
        "why": "Divide energy by time.",
        "concept": "phy2.power"
      },
      {
        "id": "phy2.p-power3",
        "prompt": "Two motors each do 120 J; the quicker one has…",
        "options": [
          "Greater work by definition",
          "Less energy transferred in total",
          "Greater power, equal work"
        ],
        "answer": 2,
        "why": "Compare equal work over different times.",
        "concept": "phy2.power"
      },
      {
        "id": "phy2.p-power4",
        "prompt": "A 50 W device runs 6 s. Energy transferred is…",
        "options": [
          "300 J",
          "8.33 J",
          "56 J"
        ],
        "answer": 0,
        "why": "E=Pt.",
        "concept": "phy2.power"
      }
    ],
    "check": [
      {
        "id": "phy2.c-power1",
        "prompt": "Fresh motor:240 J in 8 s. Power is…",
        "options": [
          "30 W",
          "1920 W",
          "0.033 W"
        ],
        "answer": 0,
        "why": "240/8=30.",
        "concept": "phy2.power"
      },
      {
        "id": "phy2.c-power2",
        "prompt": "A 60 W motor does 300 J work. Time is…",
        "options": [
          "18000 s",
          "5 s",
          "0.2 s"
        ],
        "answer": 1,
        "why": "t=W/P.",
        "concept": "phy2.power"
      },
      {
        "id": "phy2.c-power3",
        "prompt": "2 minutes must be entered as…",
        "options": [
          "2 s",
          "0.033 s",
          "120 s"
        ],
        "answer": 2,
        "why": "Multiply minutes by 60.",
        "concept": "phy2.power"
      },
      {
        "id": "phy2.c-power4",
        "prompt": "A 0.5 kW device transfers each second…",
        "options": [
          "500 J",
          "0.5 J",
          "500000 J"
        ],
        "answer": 0,
        "why": "0.5 kW=500 W=500 J/s.",
        "concept": "phy2.power"
      },
      {
        "id": "phy2.c-power5",
        "prompt": "In P=W/t the numerator W represents…",
        "options": [
          "The watt unit used as a quantity",
          "Work done in joules",
          "Mass in kilograms"
        ],
        "answer": 1,
        "why": "Distinguish quantity symbol and unit.",
        "concept": "phy2.power"
      },
      {
        "id": "phy2.c-power6",
        "prompt": "A device transfers 600 J in 10 s and another 300 J in 5 s. Their powers are…",
        "options": [
          "Different because energies differ",
          "6000 W and 1500 W",
          "Equal at 60 W"
        ],
        "answer": 2,
        "why": "Compare each ratio, not only totals.",
        "concept": "phy2.power"
      }
    ]
  },
  {
    "id": "science.physics.energy.dissipation",
    "title": "Conservation, dissipation & unwanted transfers",
    "short": "Conservation, dissipation & unwanted transfers",
    "topicId": "science.physics.energy",
    "refs": [
      "1.2.1"
    ],
    "combinedRefs": [
      "1.2.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Energy can be transferred usefully, stored or dissipated; it cannot be created or destroyed. A closed system has no net transfer across its boundary, so its total energy stays constant. Include relevant objects and surroundings when tracking changes. A decrease in one store requires increases elsewhere.",
    "learn": [
      {
        "title": "Close the energy account",
        "text": "Energy can be transferred usefully, stored or dissipated; it cannot be created or destroyed. A closed system has no net transfer across its boundary, so its total energy stays constant. Include relevant objects and surroundings when tracking changes. A decrease in one store requires increases elsewhere.",
        "scene": "phy2:dissipation:0",
        "process": false
      },
      {
        "title": "Wasted means less useful",
        "text": "A motor can transfer 100 J from its source:60 J increases the intended gravitational store and 40 J ends in thermal stores of the motor and surroundings. All 100 J still exists. Dissipation spreads energy into less useful stores, often warming surroundings; it is not destruction.",
        "scene": "phy2:dissipation:1",
        "process": true,
        "processFilm": "phy2-dissipation"
      },
      {
        "title": "Reduce unwanted transfer",
        "text": "Lubrication can reduce friction between moving surfaces, reducing unwanted thermal transfer for a specified task. Thermal insulation reduces unwanted transfer between warmer and cooler objects. Neither measure creates energy or guarantees zero loss. A useful transfer depends on the intended purpose: heating water is useful for a kettle.",
        "scene": "phy2:dissipation:2",
        "process": false
      },
      {
        "title": "Track boundary and purpose",
        "text": "Our original motor scenarios allocate either 100 or 200 J of input with 25% or 40% dissipated. Predict thermal transfer, then compare all four accounts on one scale. The animation gradually reveals a worked account: moving dots are energy markers, not literal energy particles or temperature measurements.",
        "scene": "phy2:dissipation:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.energy.stores"
    ],
    "skills": [
      "WS1.2",
      "WS4.5"
    ],
    "widget": "phy2-dissipation",
    "practice": [
      {
        "id": "phy2.p-dissipation1",
        "prompt": "A closed system has…",
        "options": [
          "No net energy transfer across its boundary",
          "No internal energy changes",
          "No thermal stores"
        ],
        "answer": 0,
        "why": "Internal redistribution can occur with constant total.",
        "concept": "phy2.dissipation"
      },
      {
        "id": "phy2.p-dissipation2",
        "prompt": "Dissipated energy is…",
        "options": [
          "Destroyed permanently",
          "Stored in less useful ways",
          "Always converted into massless nothing"
        ],
        "answer": 1,
        "why": "Wasted is a judgement about usefulness.",
        "concept": "phy2.dissipation"
      },
      {
        "id": "phy2.p-dissipation3",
        "prompt": "100 J input with 60 J useful leaves…",
        "options": [
          "160 J destroyed",
          "60 J missing",
          "40 J in other stores"
        ],
        "answer": 2,
        "why": "100−60=40; total remains 100.",
        "concept": "phy2.dissipation"
      },
      {
        "id": "phy2.p-dissipation4",
        "prompt": "Lubrication can reduce…",
        "options": [
          "Frictional unwanted thermal transfer",
          "The need to conserve energy",
          "All possible energy transfers"
        ],
        "answer": 0,
        "why": "Lower friction can reduce unwanted heating.",
        "concept": "phy2.dissipation"
      }
    ],
    "check": [
      {
        "id": "phy2.c-dissipation1",
        "prompt": "Fresh account:250 J input,175 J useful. Dissipated is…",
        "options": [
          "75 J",
          "425 J",
          "1.43 J"
        ],
        "answer": 0,
        "why": "Subtract useful from total input.",
        "concept": "phy2.dissipation"
      },
      {
        "id": "phy2.c-dissipation2",
        "prompt": "For a kettle, the intended useful change is…",
        "options": [
          "Thermal energy must always be wasted",
          "Increase in water thermal energy",
          "Energy destruction in the wire"
        ],
        "answer": 1,
        "why": "Usefulness depends on purpose.",
        "concept": "phy2.dissipation"
      },
      {
        "id": "phy2.c-dissipation3",
        "prompt": "A ball slows in air. Its lost kinetic energy…",
        "options": [
          "Vanishes from the universe",
          "Must all become gravitational energy",
          "Transfers to other stores including thermal"
        ],
        "answer": 2,
        "why": "Extend the system to account for surroundings.",
        "concept": "phy2.dissipation"
      },
      {
        "id": "phy2.c-dissipation4",
        "prompt": "Insulation reduces…",
        "options": [
          "Unwanted thermal transfer",
          "Total energy conservation",
          "All energy in the warm object immediately"
        ],
        "answer": 0,
        "why": "It reduces a transfer rate.",
        "concept": "phy2.dissipation"
      },
      {
        "id": "phy2.c-dissipation5",
        "prompt": "An account of 100 J input and 120 J total output with no other input is…",
        "options": [
          "Proof of a powerful machine",
          "Inconsistent with conservation",
          "Always normal for a closed system"
        ],
        "answer": 1,
        "why": "The output cannot exceed input without another store decreasing.",
        "concept": "phy2.dissipation"
      },
      {
        "id": "phy2.c-dissipation6",
        "prompt": "When energy spreads through cooler surroundings it generally becomes…",
        "options": [
          "Newly created energy",
          "A new heating store",
          "Less useful for the original task"
        ],
        "answer": 2,
        "why": "Heating is a transfer pathway, not an extra store.",
        "concept": "phy2.dissipation"
      }
    ]
  },
  {
    "id": "science.physics.energy.insulation",
    "title": "Thermal conduction & insulation",
    "short": "Thermal conduction & insulation",
    "topicId": "science.physics.energy",
    "refs": [
      "1.2.1"
    ],
    "combinedRefs": [
      "1.2.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "When a warm object and cooler surroundings exchange energy, thermal energy transfers towards the cooler surroundings. Conduction transfers energy through a material. With the same geometry and temperature difference, higher thermal conductivity means a greater rate of transfer. A formal definition of conductivity is not required here.",
    "learn": [
      {
        "title": "Follow thermal transfer",
        "text": "When a warm object and cooler surroundings exchange energy, thermal energy transfers towards the cooler surroundings. Conduction transfers energy through a material. With the same geometry and temperature difference, higher thermal conductivity means a greater rate of transfer. A formal definition of conductivity is not required here.",
        "scene": "phy2:insulation:0",
        "process": false
      },
      {
        "title": "Thickness and material matter",
        "text": "For otherwise comparable walls, a thicker wall or a material with lower thermal conductivity reduces the rate of transfer by conduction. A building then cools more slowly under those controlled conditions. Real buildings also lose energy through roofs, windows, air movement and radiation: wall conduction alone is not a full house model.",
        "scene": "phy2:insulation:1",
        "process": true,
        "processFilm": "phy2-insulation"
      },
      {
        "title": "Compare cooling fairly",
        "text": "Use equal masses and volumes, the same container, exposed area, initial temperature and room conditions; change only the chosen insulating material or thickness. Measure temperature at equal time intervals, compare temperature drops over the same time and repeat readings. Control material when testing thickness and thickness when testing material. Avoid burns and use school risk assessment.",
        "scene": "phy2:insulation:2",
        "process": false
      },
      {
        "title": "Interpret virtual evidence",
        "text": "The model starts at 80°C in 20°C surroundings. Its original exponential curve assumes uniform temperature and fixed surroundings; its arbitrary conductivity index is not a measured material property. Compare all four material/thickness combinations. Separate Physics requires insulation practical RP 2, AT 1/5; Trilogy shares the conduction teaching but has no RP 2 requirement. Rod-conductivity investigation is an AT 1/5 opportunity for both routes. Simulation prepares reasoning, not hands-on competence.",
        "scene": "phy2:insulation:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.energy.stores",
      "science.physics.energy.heating"
    ],
    "skills": [
      "WS1.4",
      "AT1",
      "AT5"
    ],
    "widget": "phy2-insulation",
    "practice": [
      {
        "id": "phy2.p-insulation1",
        "prompt": "Under equal conditions, higher conductivity produces…",
        "options": [
          "Faster energy transfer by conduction",
          "No energy transfer",
          "Slower conduction by definition"
        ],
        "answer": 0,
        "why": "Compare the rate with other factors held constant.",
        "concept": "phy2.insulation"
      },
      {
        "id": "phy2.p-insulation2",
        "prompt": "A thicker wall of the same material usually makes conduction…",
        "options": [
          "Faster without limit",
          "Slower for equal area and temperature difference",
          "Create energy inside the wall"
        ],
        "answer": 1,
        "why": "Thickness reduces conduction rate under comparable conditions.",
        "concept": "phy2.insulation"
      },
      {
        "id": "phy2.p-insulation3",
        "prompt": "For a fair material comparison keep…",
        "options": [
          "Every variable changing together",
          "Only the colour of the results table fixed",
          "Thickness, starting temperature, area and mass controlled"
        ],
        "answer": 2,
        "why": "Control alternatives that could affect cooling.",
        "concept": "phy2.insulation"
      },
      {
        "id": "phy2.p-insulation4",
        "prompt": "Insulation is useful because it…",
        "options": [
          "Reduces unwanted thermal transfer",
          "Generates thermal energy forever",
          "Stops every kind of energy transfer completely"
        ],
        "answer": 0,
        "why": "The effect is a reduced rate, not energy creation.",
        "concept": "phy2.insulation"
      }
    ],
    "check": [
      {
        "id": "phy2.c-insulation1",
        "prompt": "A sample cools 80→62°C over the fixed interval. Drop is…",
        "options": [
          "18°C",
          "62°C",
          "142°C"
        ],
        "answer": 0,
        "why": "Initial minus final temperature.",
        "concept": "phy2.insulation"
      },
      {
        "id": "phy2.c-insulation2",
        "prompt": "A real house may cool differently because…",
        "options": [
          "Only walls can transfer energy",
          "Windows, air movement and other routes also transfer energy",
          "Our toy index is a certified building rating"
        ],
        "answer": 1,
        "why": "Recognise omitted transfer routes.",
        "concept": "phy2.insulation"
      },
      {
        "id": "phy2.c-insulation3",
        "prompt": "Repeats help us…",
        "options": [
          "Prove every result is exact",
          "Remove the need to control variables",
          "Check consistency and identify anomalous readings"
        ],
        "answer": 2,
        "why": "Repeats support evaluation of measurement variability.",
        "concept": "phy2.insulation"
      },
      {
        "id": "phy2.c-insulation4",
        "prompt": "A cooling graph should compare temperatures at…",
        "options": [
          "Equal elapsed time intervals",
          "Different unrecorded times for each sample",
          "Whatever times make curves identical"
        ],
        "answer": 0,
        "why": "Use a consistent time basis.",
        "concept": "phy2.insulation"
      },
      {
        "id": "phy2.c-insulation5",
        "prompt": "The rod investigation mainly compares…",
        "options": [
          "Energy being created by rods",
          "Energy transfer through different materials",
          "Radioactive half-lives"
        ],
        "answer": 1,
        "why": "It is a conductivity investigation opportunity.",
        "concept": "phy2.insulation"
      },
      {
        "id": "phy2.c-insulation6",
        "prompt": "Virtual readings demonstrate…",
        "options": [
          "Physical apparatus competence by themselves",
          "A universal cooling law for every building",
          "A controlled illustration, with school practical evidence still needed"
        ],
        "answer": 2,
        "why": "The supplied curve is explicitly a simplified model.",
        "concept": "phy2.insulation"
      }
    ]
  },
  {
    "id": "science.physics.energy.efficiency",
    "title": "Energy efficiency: useful output & input",
    "short": "Energy efficiency: useful output & input",
    "topicId": "science.physics.energy",
    "refs": [
      "1.2.2"
    ],
    "combinedRefs": [
      "1.2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Efficiency=useful output energy/total input energy. It can also be useful power output/total power input. Use matching units and a consistent time interval. Efficiency has no unit: multiply the decimal ratio by 100 to express a percentage. A device receiving 100 J and delivering 60 J usefully has efficiency 0.60=60%.",
    "learn": [
      {
        "title": "Compare useful with total input",
        "text": "Efficiency=useful output energy/total input energy. It can also be useful power output/total power input. Use matching units and a consistent time interval. Efficiency has no unit: multiply the decimal ratio by 100 to express a percentage. A device receiving 100 J and delivering 60 J usefully has efficiency 0.60=60%.",
        "scene": "phy2:efficiency:0",
        "process": false
      },
      {
        "title": "Account for unwanted output",
        "text": "The remaining 40 J in that example transfers to other stores. Energy is conserved even though not all output is useful for the chosen purpose. A common-scale flow diagram splits input width into useful and unwanted widths. A normal device cannot deliver more useful energy than its total input without drawing on an additional store.",
        "scene": "phy2:efficiency:1",
        "process": true,
        "processFilm": "phy2-efficiency"
      },
      {
        "title": "Use either ratio",
        "text": "A motor receives 200 W and delivers 150 W usefully: efficiency=150/200=0.75=75%. If useful energy is 180 J and efficiency 0.60, input=180/0.60=300 J. Use 0.60 rather than 60 when rearranging. Equal efficiency does not imply equal power or identical total energy.",
        "scene": "phy2:efficiency:2",
        "process": false
      },
      {
        "title": "Read the model boundaries",
        "text": "Compare input 100/200 units and useful fractions 0.60/0.80. Use energy in J or a consistent power account in W, never divide joules by watts to claim a unitless efficiency. The flow animation is a worked account; arrow widths are proportional to the stated quantities, not measured losses from a real motor.",
        "scene": "phy2:efficiency:3",
        "process": false
      },
      {
        "title": "Improve the intended transfer · Higher",
        "text": "For a stated intended transfer, reduce unwanted pathways: lubricate moving parts to reduce frictional heating, insulate a hot-water vessel to reduce cooling, or select a lamp that transfers a greater input fraction to useful visible light. Evaluate the device and purpose; insulation is not a universal improvement for equipment that needs to lose heat. An increase from 60% to 80% is 20 percentage points. This efficiency-improvement extension is Higher only.",
        "scene": "phy2:efficiency:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [
      "science.physics.energy.stores"
    ],
    "skills": [
      "MS3b",
      "MS3c"
    ],
    "widget": "phy2-efficiency",
    "practice": [
      {
        "id": "phy2.p-efficiency1",
        "prompt": "Efficiency is…",
        "options": [
          "Useful output divided by total input",
          "Total input divided by useful output",
          "Useful output plus all input"
        ],
        "answer": 0,
        "why": "Use the intended useful transfer as numerator.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.p-efficiency2",
        "prompt": "60 J useful from 100 J input is…",
        "options": [
          "60 J/s",
          "0.60 or 60%",
          "1.67 or 167%"
        ],
        "answer": 1,
        "why": "Efficiency is a unitless ratio.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.p-efficiency3",
        "prompt": "150 W useful from 200 W input gives…",
        "options": [
          "50 W efficiency",
          "133%",
          "75%"
        ],
        "answer": 2,
        "why": "Use the power ratio with matching units.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.p-efficiency4",
        "prompt": "Unwanted output energy…",
        "options": [
          "Is accounted in other stores",
          "Has been destroyed",
          "Must always be useful to the same task"
        ],
        "answer": 0,
        "why": "Conservation and usefulness are different ideas.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.p-efficiency5",
        "prompt": "A Higher efficiency improvement for a lifting motor is…",
        "options": [
          "Destroy unwanted energy",
          "Reduce frictional heating with suitable lubrication",
          "Increase unwanted thermal transfer"
        ],
        "answer": 1,
        "why": "Match the intervention to the intended transfer.",
        "concept": "phy2.efficiency"
      }
    ],
    "check": [
      {
        "id": "phy2.c-efficiency1",
        "prompt": "Fresh device: input 400 J, useful 300 J. Efficiency is…",
        "options": [
          "75%",
          "25%",
          "133%"
        ],
        "answer": 0,
        "why": "300/400=0.75.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.c-efficiency2",
        "prompt": "180 J useful at 60% efficiency needs input…",
        "options": [
          "10800 J",
          "300 J",
          "108 J"
        ],
        "answer": 1,
        "why": "Divide by the decimal 0.60.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.c-efficiency3",
        "prompt": "Useful 100 J from input 80 J with no other store change is…",
        "options": [
          "A normal 125% efficient device",
          "Always a better device",
          "An inconsistent account"
        ],
        "answer": 2,
        "why": "Check the full boundary and every input.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.c-efficiency4",
        "prompt": "Equal efficiency means two devices must have…",
        "options": [
          "The same useful/input fraction",
          "The same power",
          "The same running time"
        ],
        "answer": 0,
        "why": "Only the fraction is fixed.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.c-efficiency5",
        "prompt": "Which is a valid efficiency calculation?",
        "options": [
          "Useful 80 J divided by input 100 W",
          "Useful 80 W divided by input 100 W",
          "Input 100 J divided by useful 80 J"
        ],
        "answer": 1,
        "why": "Use like quantities and the correct order.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.c-efficiency6",
        "prompt": "A flow diagram with 100 J input,60 J useful and 40 J unwanted should have…",
        "options": [
          "Two output arrows each as wide as input",
          "An unwanted arrow labelled energy destroyed",
          "Output widths that add to the input width"
        ],
        "answer": 2,
        "why": "The widths represent conserved quantities.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.c-efficiency7",
        "prompt": "A hot-water vessel loses unwanted thermal energy. An appropriate improvement is…",
        "options": [
          "Add suitable insulation",
          "Guarantee that all energy vanishes",
          "Ignore the purpose of the device"
        ],
        "answer": 0,
        "why": "Reducing unwanted loss can improve the useful fraction.",
        "concept": "phy2.efficiency"
      },
      {
        "id": "phy2.c-efficiency8",
        "prompt": "Efficiency 60%→80% improves by…",
        "options": [
          "20% relative to the original value",
          "20 percentage points",
          "200 percentage points"
        ],
        "answer": 1,
        "why": "The absolute percentage-point difference is 80−60.",
        "concept": "phy2.efficiency"
      }
    ],
    "higherQuestions": [
      "phy2.p-efficiency5",
      "phy2.c-efficiency7",
      "phy2.c-efficiency8"
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
        "improve"
      ],
      "completionKey": "phy2Passed"
    }
  },
  {
    "id": "science.physics.energy.resources",
    "title": "Energy resources: choices, reliability & impacts",
    "short": "Energy resources: choices, reliability & impacts",
    "topicId": "science.physics.energy",
    "refs": [
      "1.3"
    ],
    "combinedRefs": [
      "1.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 40,
    "big": "Non-renewable resources include coal, oil and natural gas (fossil fuels), and nuclear fuel. Renewable resources include biofuel, wind, hydroelectricity, geothermal energy, tides, sunlight and water waves. Renewable means replenished as used or on a useful human timescale; it does not mean unlimited output at every moment or no environmental impact.",
    "learn": [
      {
        "title": "Know the resource families",
        "text": "Non-renewable resources include coal, oil and natural gas (fossil fuels), and nuclear fuel. Renewable resources include biofuel, wind, hydroelectricity, geothermal energy, tides, sunlight and water waves. Renewable means replenished as used or on a useful human timescale; it does not mean unlimited output at every moment or no environmental impact.",
        "scene": "phy2:resources:0",
        "process": false
      },
      {
        "title": "Match resource to use",
        "text": "Resources supply electricity generation, transport and heating. Oil fuels are widely useful in transport; biofuels can also fuel vehicles. Gas and other fuels can provide heating; solar thermal and geothermal can also heat. Wind, solar, tides, waves, hydro and nuclear can contribute electricity. Electrified transport/heating use electricity from a mix. Detailed generator mechanisms are not required by this Energy section.",
        "scene": "phy2:resources:1",
        "process": true,
        "processFilm": "phy2-resources"
      },
      {
        "title": "Separate predictability and availability",
        "text": "Wind and solar output depend on weather, with solar unavailable at night. Tidal timing is predictable but output varies through the tidal cycle. Waves vary with conditions. Hydroelectric output depends on water availability and storage; geothermal can be steady in suitable locations. Fuelled generation can generally be scheduled but still has fuel, maintenance and start-up limits. A reliable system considers demand, storage, backup and location.",
        "scene": "phy2:resources:2",
        "process": false
      },
      {
        "title": "Evaluate environmental trade-offs",
        "text": "Burning fossil fuels releases carbon dioxide; some combustion also produces air pollutants. Nuclear has low operational carbon emissions but radioactive waste and accident-management issues. Biofuel combustion emits CO₂; regrowth can take it up, but land use, processing and biodiversity mean carbon neutrality is not automatic. Wind/solar have land, habitat, visual/material impacts; dams can flood habitats, tidal schemes affect estuaries, wave devices affect marine uses, and geothermal has local impacts. No resource is impact-free.",
        "scene": "phy2:resources:3",
        "process": false
      },
      {
        "title": "Read patterns from evidence",
        "text": "Our fictional 100-unit electricity account changes from coal 60/renewables 20/nuclear 20 to coal 20/renewables 50/nuclear 30. Renewables rise 30 percentage points, not merely 30% relative: the relative increase is 150%. A graph shows the supplied trend; it is not a current UK statistic or proof of its cause. Changing costs, policy, technology and energy security may contribute, but causal explanations need evidence.",
        "scene": "phy2:resources:4",
        "process": false
      },
      {
        "title": "Make a reasoned choice",
        "text": "Science can identify emissions, habitat effects and reliability limits. It cannot alone decide a policy: costs, jobs, consent, fairness, political priorities and ethical choices also matter. In the wind model, compare capacity 20/40 units in calm/windy conditions against demand 30; predict backup requirement. These original snapshots omit storage, price and forecasts. State an evidence-based trade-off rather than claiming one resource is best everywhere.",
        "scene": "phy2:resources:5",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.energy.stores"
    ],
    "skills": [
      "WS1.3",
      "WS1.4",
      "WS4.4",
      "WS3.5",
      "MS1c",
      "MS2c",
      "MS4a"
    ],
    "widget": "phy2-resources",
    "practice": [
      {
        "id": "phy2.p-resources1",
        "prompt": "Which set is entirely non-renewable?",
        "options": [
          "Coal, oil, gas and nuclear fuel",
          "Wind, sunlight and tides",
          "Hydro, waves and biofuel"
        ],
        "answer": 0,
        "why": "Fuels in the first set are finite on useful human timescales.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.p-resources2",
        "prompt": "Renewable means…",
        "options": [
          "Always available at full rated output",
          "Replenished as it is used or on a useful timescale",
          "Unable to cause environmental harm"
        ],
        "answer": 1,
        "why": "Availability and impact are separate questions.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.p-resources3",
        "prompt": "Tidal generation is…",
        "options": [
          "Always at maximum output",
          "Dependent on whether it is sunny",
          "Predictable in timing but variable through the cycle"
        ],
        "answer": 2,
        "why": "Predictable does not mean continuous maximum output.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.p-resources4",
        "prompt": "Which is a sound matching of uses?",
        "options": [
          "Oil for transport; gas for heating; wind for electricity",
          "Wind directly burns in a petrol engine",
          "Nuclear fuel is renewable firewood"
        ],
        "answer": 0,
        "why": "Different resources suit different uses.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.p-resources5",
        "prompt": "Biofuel is automatically carbon neutral because it regrows. This is…",
        "options": [
          "Always proven for every supply chain",
          "Too strong: land use, processing and regrowth matter",
          "Correct because combustion emits no CO₂"
        ],
        "answer": 1,
        "why": "Evaluate the complete lifecycle.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.p-resources6",
        "prompt": "Hydroelectricity and geothermal are…",
        "options": [
          "Both fossil fuels",
          "Always identical to intermittent wind",
          "Renewable but dependent on water/location conditions"
        ],
        "answer": 2,
        "why": "Renewables differ in their availability.",
        "concept": "phy2.resources"
      }
    ],
    "check": [
      {
        "id": "phy2.c-resources1",
        "prompt": "Fresh fictional demand 30, wind output 18. Backup needed is…",
        "options": [
          "12 units",
          "48 units",
          "30 units regardless of output"
        ],
        "answer": 0,
        "why": "30−18=12, with no storage in this snapshot.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.c-resources2",
        "prompt": "A renewable share changes 20%→50%. The increase is…",
        "options": [
          "150 percentage points",
          "30 percentage points",
          "Only 30% relative to its starting value"
        ],
        "answer": 1,
        "why": "Distinguish percentage points and relative change.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.c-resources3",
        "prompt": "For 20%→50%, the relative increase is…",
        "options": [
          "30%",
          "2.5%",
          "150%"
        ],
        "answer": 2,
        "why": "(50−20)/20×100=150%.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.c-resources4",
        "prompt": "A reason to use backup or storage is…",
        "options": [
          "Output and demand may not match at the same time",
          "Energy conservation has stopped working",
          "All renewable resources always fail together"
        ],
        "answer": 0,
        "why": "A system must balance supply with demand.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.c-resources5",
        "prompt": "A nuclear-energy environmental issue is…",
        "options": [
          "No possible waste of any type",
          "Radioactive waste management",
          "Renewable replenishment of uranium by weather"
        ],
        "answer": 1,
        "why": "Low operational carbon does not remove other impacts.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.c-resources6",
        "prompt": "Coal combustion can produce…",
        "options": [
          "No environmental change",
          "Only useful kinetic energy",
          "CO₂ and air pollutants"
        ],
        "answer": 2,
        "why": "Consider climate and air quality.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.c-resources7",
        "prompt": "A dam may…",
        "options": [
          "Flood habitats and affect river ecosystems",
          "Have no environmental impact because renewable",
          "Make water a non-renewable fossil fuel"
        ],
        "answer": 0,
        "why": "Renewable does not mean impact-free.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.c-resources8",
        "prompt": "Why can scientific findings alone fail to settle energy policy?",
        "options": [
          "Science cannot identify any impact",
          "Economic, political, social and ethical factors also matter",
          "Only the colour of generators matters"
        ],
        "answer": 1,
        "why": "Distinguish measuring consequences from agreeing priorities.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.c-resources9",
        "prompt": "The app’s 100-unit trend chart is…",
        "options": [
          "A verified current UK energy census",
          "Proof that policy had one sole cause",
          "Original illustrative evidence, not current national statistics"
        ],
        "answer": 2,
        "why": "Use the explicitly fictional source and avoid causal overclaims.",
        "concept": "phy2.resources"
      },
      {
        "id": "phy2.c-resources10",
        "prompt": "Which correctly includes all the remaining named renewable examples?",
        "options": [
          "Sun, water waves, tides, wind, biofuel, hydro and geothermal",
          "Coal, oil and gas",
          "Only nuclear fuel"
        ],
        "answer": 0,
        "why": "Recognise all seven named renewable families.",
        "concept": "phy2.resources"
      }
    ]
  }
];
export const phy2Concepts={"phy2.power": "Power: energy transferred each second", "phy2.dissipation": "Conservation, dissipation & unwanted transfers", "phy2.insulation": "Thermal conduction & insulation", "phy2.efficiency": "Energy efficiency: useful output & input", "phy2.resources": "Energy resources: choices, reliability & impacts"};
