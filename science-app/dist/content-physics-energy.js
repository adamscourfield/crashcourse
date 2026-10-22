export const phy1Lessons=[
  {
    "id": "science.physics.energy.stores",
    "title": "Energy stores, systems & transfers",
    "short": "Energy stores, systems & transfers",
    "topicId": "science.physics.energy",
    "refs": [
      "1.1.1"
    ],
    "combinedRefs": [
      "1.1.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A system is an object or group of objects. Name its boundary before describing energy changes: a falling ball alone differs from the ball–Earth system, and braking can warm the brakes, road and air. Energy is conserved in a closed account, even when it ends up spread through less useful thermal stores.",
    "learn": [
      {
        "title": "Choose the system",
        "text": "A system is an object or group of objects. Name its boundary before describing energy changes: a falling ball alone differs from the ball–Earth system, and braking can warm the brakes, road and air. Energy is conserved in a closed account, even when it ends up spread through less useful thermal stores.",
        "scene": "phy1:stores:0",
        "process": false
      },
      {
        "title": "Separate stores from pathways",
        "text": "Energy can be stored kinetically, thermally, chemically, elastically, gravitationally, magnetically, electrostatically or in nuclear stores. Energy is transferred mechanically, electrically, by heating or by radiation. Heating, light and sound are not extra stores. A pathway describes how transfer happens; it does not name where energy is stored.",
        "scene": "phy1:stores:1",
        "process": false
      },
      {
        "title": "Explain common changes",
        "text": "An upward-projected object transfers kinetic energy into the gravitational store of the object–Earth system. A collision or a slowing vehicle can increase thermal stores of objects and surroundings. A constant force doing work can increase kinetic energy. An electric kettle transfers energy electrically to thermal stores of the water and surroundings.",
        "scene": "phy1:stores:2",
        "processFilm": "phy1-stores"
      },
      {
        "title": "Account on one common scale",
        "text": "Our original examples each account for400 J across the chosen wider system. A launch example ends with100 J kinetic and300 J gravitational; a kettle example allocates320 J to water and80 J to surroundings. These are supplied examples, not universal efficiencies. Compare stores on the same joule scale; electrical and mechanical work calculations receive fuller treatment later.",
        "scene": "phy1:stores:3",
        "process": false
      }
    ],
    "widget": "phy1-stores",
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "WS4.3",
      "WS4.5",
      "WS4.6",
      "MS1a",
      "MS1c",
      "MS3b",
      "MS3c"
    ],
    "practice": [
      {
        "id": "phy1.p-stores1",
        "prompt": "Which describes a system?",
        "options": [
          "An object or group of objects",
          "Only a numerical answer",
          "Only an energy-transfer pathway"
        ],
        "answer": 0,
        "why": "Identify which objects belong inside the boundary.",
        "concept": "phy1.stores"
      },
      {
        "id": "phy1.p-stores2",
        "prompt": "Which is a transfer pathway rather than a store?",
        "options": [
          "Chemical",
          "Heating",
          "Kinetic"
        ],
        "answer": 1,
        "why": "Heating describes a process of transfer.",
        "concept": "phy1.stores"
      },
      {
        "id": "phy1.p-stores3",
        "prompt": "A ball rises with negligible air resistance. Its kinetic energy mainly transfers into…",
        "options": [
          "New energy created by height",
          "An electrical store in empty space",
          "The gravitational store of the ball–Earth system"
        ],
        "answer": 2,
        "why": "Include Earth in the gravitational system.",
        "concept": "phy1.stores"
      },
      {
        "id": "phy1.p-stores4",
        "prompt": "A kettle input400 J warms water by320 J and surroundings by80 J. Total accounted is…",
        "options": [
          "400 J",
          "240 J",
          "Only320 J"
        ],
        "answer": 0,
        "why": "The surroundings are part of this wider account.",
        "concept": "phy1.stores"
      }
    ],
    "check": [
      {
        "id": "phy1.c-stores1",
        "prompt": "Fresh account: input 500 J, useful store 350 J. Other stores receive…",
        "options": [
          "0 J because it vanished",
          "150 J",
          "850 J"
        ],
        "answer": 1,
        "why": "500−350=150 J.",
        "concept": "phy1.stores"
      },
      {
        "id": "phy1.c-stores2",
        "prompt": "A vehicle slows through braking. Relevant increases include…",
        "options": [
          "An automatic increase in vehicle kinetic energy",
          "Energy being destroyed",
          "Thermal stores of brakes and surroundings"
        ],
        "answer": 2,
        "why": "Trace energy into the named objects.",
        "concept": "phy1.stores"
      },
      {
        "id": "phy1.c-stores3",
        "prompt": "A constant force does positive work accelerating an object. Its kinetic store can…",
        "options": [
          "Increase",
          "Only disappear",
          "Become a heating pathway as a new store"
        ],
        "answer": 0,
        "why": "Mechanical transfer can increase kinetic energy.",
        "concept": "phy1.stores"
      },
      {
        "id": "phy1.c-stores4",
        "prompt": "Which kettle description is appropriate?",
        "options": [
          "Light must be the only useful output",
          "Electrical transfer increases thermal stores",
          "Electricity is a store held in the water"
        ],
        "answer": 1,
        "why": "Distinguish transfer pathway and final stores.",
        "concept": "phy1.stores"
      },
      {
        "id": "phy1.c-stores5",
        "prompt": "A collision stops a moving object. A complete account considers…",
        "options": [
          "Only energy destruction",
          "Only the name of its colour",
          "Deformation and thermal changes in objects/surroundings"
        ],
        "answer": 2,
        "why": "The system boundary determines what must be tracked.",
        "concept": "phy1.stores"
      },
      {
        "id": "phy1.c-stores6",
        "prompt": "Using equal drawing widths for 100 J and 400 J on a common linear scale is…",
        "options": [
          "A distorted energy account",
          "Always a correct proportion",
          "Proof the values are equal"
        ],
        "answer": 0,
        "why": "Widths should be proportional to the energy values.",
        "concept": "phy1.stores"
      }
    ]
  },
  {
    "id": "science.physics.energy.kinetic",
    "title": "Kinetic energy: mass & speed",
    "short": "Kinetic energy: mass & speed",
    "topicId": "science.physics.energy",
    "refs": [
      "1.1.2"
    ],
    "combinedRefs": [
      "1.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A moving object has kinetic energy. Use Ek=½mv² with mass in kilograms, speed in metres per second and energy in joules. A stationary object has zero kinetic energy in the chosen reference frame; it can still have energy in other stores.",
    "learn": [
      {
        "title": "Energy of motion",
        "text": "A moving object has kinetic energy. Use Ek=½mv² with mass in kilograms, speed in metres per second and energy in joules. A stationary object has zero kinetic energy in the chosen reference frame; it can still have energy in other stores.",
        "scene": "phy1:kinetic:0",
        "processFilm": "phy1-kinetic"
      },
      {
        "title": "Square the speed",
        "text": "For mass 2 kg at 3 m/s, Ek=0.5×2×3²=9 J. Doubling speed to6 m/s gives36 J: four times as much. Doubling mass at the same speed doubles kinetic energy. The equation squares speed, not the whole product of mass and speed.",
        "scene": "phy1:kinetic:1",
        "process": false
      },
      {
        "title": "Control one variable at a time",
        "text": "Change the cart mass between2 and4 kg and its speed between3 and6 m/s. Predict energy, reveal the common-scale bar, and compare all four cases. The worked moving cart is separate from your saved experiment. Track displacement in a chosen direction without confusing it with a changing energy store at constant speed.",
        "scene": "phy1:kinetic:2",
        "process": false
      },
      {
        "title": "Rearrange and convert units",
        "text": "Use m=2Ek/v² or v=√(2Ek/m) when needed. Convert grams to kilograms before substitution. For Ek=25 J and mass 2 kg, v=√25=5 m/s. Our cart ignores air resistance, friction and rotation; the illustration is not a collision test or a real vehicle stopping-distance model.",
        "scene": "phy1:kinetic:3",
        "process": false
      }
    ],
    "widget": "phy1-kinetic",
    "prerequisites": [
      "science.physics.energy.stores"
    ],
    "skills": [
      "WS1.2",
      "WS4.3",
      "WS4.5",
      "WS4.6",
      "MS1a",
      "MS1c",
      "MS3b",
      "MS3c"
    ],
    "practice": [
      {
        "id": "phy1.p-kinetic1",
        "prompt": "Kinetic energy is calculated as…",
        "options": [
          "½mv²",
          "mv",
          "½m²v"
        ],
        "answer": 0,
        "why": "Square the speed before multiplying by half the mass.",
        "concept": "phy1.kinetic"
      },
      {
        "id": "phy1.p-kinetic2",
        "prompt": "For2 kg at 3 m/s, kinetic energy is…",
        "options": [
          "18 J",
          "9 J",
          "6 J"
        ],
        "answer": 1,
        "why": "0.5×2×9=9.",
        "concept": "phy1.kinetic"
      },
      {
        "id": "phy1.p-kinetic3",
        "prompt": "Doubling speed at fixed mass changes kinetic energy by…",
        "options": [
          "A factor of 2",
          "No change",
          "A factor of 4"
        ],
        "answer": 2,
        "why": "The squared speed dependence matters.",
        "concept": "phy1.kinetic"
      },
      {
        "id": "phy1.p-kinetic4",
        "prompt": "Doubling mass at fixed speed changes kinetic energy by…",
        "options": [
          "A factor of 2",
          "A factor of 4",
          "A factor of0"
        ],
        "answer": 0,
        "why": "Mass is a linear factor.",
        "concept": "phy1.kinetic"
      }
    ],
    "check": [
      {
        "id": "phy1.c-kinetic1",
        "prompt": "Fresh object: 4 kg at 5 m/s. Ek is…",
        "options": [
          "100 J",
          "50 J",
          "20 J"
        ],
        "answer": 1,
        "why": "0.5×4×25=50.",
        "concept": "phy1.kinetic"
      },
      {
        "id": "phy1.c-kinetic2",
        "prompt": "An object has 25 J kinetic energy and mass 2 kg. Speed is…",
        "options": [
          "25 m/s",
          "12.5 m/s",
          "5 m/s"
        ],
        "answer": 2,
        "why": "v=√(2E/m)=√25.",
        "concept": "phy1.kinetic"
      },
      {
        "id": "phy1.c-kinetic3",
        "prompt": "500 g entered in the equation should be…",
        "options": [
          "0.5 kg",
          "500 kg",
          "5000 kg"
        ],
        "answer": 0,
        "why": "Divide grams by1000.",
        "concept": "phy1.kinetic"
      },
      {
        "id": "phy1.c-kinetic4",
        "prompt": "At constant mass, halving speed makes kinetic energy…",
        "options": [
          "Twice as large",
          "One quarter",
          "One half"
        ],
        "answer": 1,
        "why": "(v/2)²=v²/4.",
        "concept": "phy1.kinetic"
      },
      {
        "id": "phy1.c-kinetic5",
        "prompt": "A stationary object has…",
        "options": [
          "No possible energy in any store",
          "Infinite kinetic energy",
          "Zero kinetic energy in the selected frame"
        ],
        "answer": 2,
        "why": "Other stores can still exist.",
        "concept": "phy1.kinetic"
      },
      {
        "id": "phy1.c-kinetic6",
        "prompt": "Which quantity is squared in Ek=½mv²?",
        "options": [
          "Speed",
          "Mass only",
          "The final joule unit only"
        ],
        "answer": 0,
        "why": "Follow the algebraic grouping.",
        "concept": "phy1.kinetic"
      }
    ]
  },
  {
    "id": "science.physics.energy.gravitational",
    "title": "Gravitational potential energy",
    "short": "Gravitational potential energy",
    "topicId": "science.physics.energy",
    "refs": [
      "1.1.2"
    ],
    "combinedRefs": [
      "1.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Raising an object changes the gravitational potential energy of the object–Earth system. Use Ep=mgh, with mass in kg, gravitational field strength in N/kg and vertical height change in m. The value of g is supplied in a calculation; this model uses10 N/kg, not an exact universal value for all places.",
    "learn": [
      {
        "title": "Choose a height reference",
        "text": "Raising an object changes the gravitational potential energy of the object–Earth system. Use Ep=mgh, with mass in kg, gravitational field strength in N/kg and vertical height change in m. The value of g is supplied in a calculation; this model uses10 N/kg, not an exact universal value for all places.",
        "scene": "phy1:gravitational:0",
        "process": false
      },
      {
        "title": "Calculate the change",
        "text": "Lifting2 kg through3 m with g=10 N/kg gives2×10×3=60 J. Doubling height doubles the change; doubling mass also doubles it. The height is the vertical difference between chosen levels, not the full distance along a ramp or the total route travelled.",
        "scene": "phy1:gravitational:1",
        "process": false
      },
      {
        "title": "Follow lifting and falling",
        "text": "Work done lifting can increase the gravitational store. In an ideal fall, a decrease in this store can increase kinetic energy. Our loop shows selected energy changes with air resistance omitted and a reset between examples. It does not create energy when replay starts, and a real falling object can also transfer energy to surroundings.",
        "scene": "phy1:gravitational:2",
        "processFilm": "phy1-gravitational"
      },
      {
        "title": "Rearrange with the stated units",
        "text": "Use h=Ep/(mg) or m=Ep/(gh). For120 J, mass3 kg and g = 10 N/kg, h=4 m. An energy value depends on its reference; a lower level need not mean that all energy in every store has disappeared. Physical measurements and AT1 investigation of gravitational-to-kinetic transfer remain school evidence.",
        "scene": "phy1:gravitational:3",
        "process": false
      }
    ],
    "widget": "phy1-gravitational",
    "prerequisites": [
      "science.physics.energy.stores"
    ],
    "skills": [
      "WS1.2",
      "WS4.3",
      "WS4.5",
      "WS4.6",
      "MS1a",
      "MS1c",
      "MS3b",
      "MS3c"
    ],
    "practice": [
      {
        "id": "phy1.p-gravitational1",
        "prompt": "The equation for gravitational energy change is…",
        "options": [
          "mgh",
          "½mv²",
          "m/g/h"
        ],
        "answer": 0,
        "why": "Use mass, supplied field strength and vertical height change.",
        "concept": "phy1.gravitational"
      },
      {
        "id": "phy1.p-gravitational2",
        "prompt": "2 kg raised 3 m with g = 10 N/kg gains…",
        "options": [
          "600 J",
          "60 J",
          "15 J"
        ],
        "answer": 1,
        "why": "2×10×3=60.",
        "concept": "phy1.gravitational"
      },
      {
        "id": "phy1.p-gravitational3",
        "prompt": "The height in this calculation is…",
        "options": [
          "Every metre of an inclined path",
          "The width of the object",
          "Vertical change from the reference level"
        ],
        "answer": 2,
        "why": "Separate vertical displacement from route length.",
        "concept": "phy1.gravitational"
      },
      {
        "id": "phy1.p-gravitational4",
        "prompt": "Doubling mass at fixed g and height…",
        "options": [
          "Doubles energy change",
          "Quadruples it",
          "Halves it"
        ],
        "answer": 0,
        "why": "Mass enters linearly.",
        "concept": "phy1.gravitational"
      }
    ],
    "check": [
      {
        "id": "phy1.c-gravitational1",
        "prompt": "Fresh lift: 3 kg through 4 m with g = 10 N/kg. Gain is…",
        "options": [
          "7.5 J",
          "120 J",
          "12 J"
        ],
        "answer": 1,
        "why": "3×10×4=120.",
        "concept": "phy1.gravitational"
      },
      {
        "id": "phy1.c-gravitational2",
        "prompt": "120 J for 3 kg with g = 10 N/kg corresponds to height…",
        "options": [
          "40 m",
          "3600 m",
          "4 m"
        ],
        "answer": 2,
        "why": "h=120/(3×10).",
        "concept": "phy1.gravitational"
      },
      {
        "id": "phy1.c-gravitational3",
        "prompt": "If the question gives g=9.8 N/kg, use…",
        "options": [
          "9.8 N/kg",
          "10 regardless of the supplied value",
          "No value for g"
        ],
        "answer": 0,
        "why": "Use the value given for that calculation.",
        "concept": "phy1.gravitational"
      },
      {
        "id": "phy1.c-gravitational4",
        "prompt": "In an ideal fall, decreasing gravitational energy can increase…",
        "options": [
          "Only mass",
          "Kinetic energy",
          "Newly created energy"
        ],
        "answer": 1,
        "why": "Conservation connects the stores under stated assumptions.",
        "concept": "phy1.gravitational"
      },
      {
        "id": "phy1.c-gravitational5",
        "prompt": "A 2 m ramp with a 0.5 m rise uses height…",
        "options": [
          "2 m",
          "2.5 m",
          "0.5 m"
        ],
        "answer": 2,
        "why": "The vertical rise determines mgh.",
        "concept": "phy1.gravitational"
      },
      {
        "id": "phy1.c-gravitational6",
        "prompt": "The gravitational store here belongs to…",
        "options": [
          "The object–Earth system",
          "Only a heating pathway",
          "Only a joule symbol"
        ],
        "answer": 0,
        "why": "Gravitational interaction involves the system.",
        "concept": "phy1.gravitational"
      }
    ]
  },
  {
    "id": "science.physics.energy.elastic",
    "title": "Elastic potential energy in springs",
    "short": "Elastic potential energy in springs",
    "topicId": "science.physics.energy",
    "refs": [
      "1.1.2"
    ],
    "combinedRefs": [
      "1.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A spring can store elastic potential energy when stretched. Extension e is the increase from its original length. Use Ee=½ke², where k is the spring constant in N/m, e is in metres and Ee is in joules. The relation assumes the limit of proportionality has not been exceeded.",
    "learn": [
      {
        "title": "Measure extension, not whole length",
        "text": "A spring can store elastic potential energy when stretched. Extension e is the increase from its original length. Use Ee=½ke², where k is the spring constant in N/m, e is in metres and Ee is in joules. The relation assumes the limit of proportionality has not been exceeded.",
        "scene": "phy1:elastic:0",
        "process": false
      },
      {
        "title": "Use the squared extension",
        "text": "For k = 100 N/m and extension0.10 m, Ee=0.5×100×0.10²=0.5 J. Doubling extension to0.20 m gives2 J. Doubling spring constant at the same extension doubles stored energy. Convert centimetres to metres before squaring.",
        "scene": "phy1:elastic:1",
        "process": false
      },
      {
        "title": "Compare supported springs",
        "text": "The model offers k = 100 or200 N/m and extension0.10 or0.20 m. All supplied cases are assumed within the proportional range. The displayed0.20 m limit is a model constraint, not a universal safe extension for every real spring. Predict, reveal and compare four cases.",
        "scene": "phy1:elastic:2",
        "process": false
      },
      {
        "title": "Connect work and release",
        "text": "Work done stretching transfers energy into the elastic store. Releasing an ideal spring can transfer energy to movement; real systems also dissipate energy. For a spring whose natural length is0.15 m and stretched length 0.25 m, extension is0.10 m. Detailed force-extension investigations are covered later in Forces.",
        "scene": "phy1:elastic:3",
        "processFilm": "phy1-elastic"
      }
    ],
    "widget": "phy1-elastic",
    "prerequisites": [
      "science.physics.energy.stores"
    ],
    "skills": [
      "WS1.2",
      "WS4.3",
      "WS4.5",
      "WS4.6",
      "MS1a",
      "MS1c",
      "MS3b",
      "MS3c"
    ],
    "practice": [
      {
        "id": "phy1.p-elastic1",
        "prompt": "Elastic potential energy is calculated with…",
        "options": [
          "½ke²",
          "ke",
          "½k²e"
        ],
        "answer": 0,
        "why": "Square extension, not spring constant.",
        "concept": "phy1.elastic"
      },
      {
        "id": "phy1.p-elastic2",
        "prompt": "k = 100 N/m and e = 0.10 m store…",
        "options": [
          "10 J",
          "0.5 J",
          "5 J"
        ],
        "answer": 1,
        "why": "0.5×100×0.01=0.5.",
        "concept": "phy1.elastic"
      },
      {
        "id": "phy1.p-elastic3",
        "prompt": "Doubling extension at fixed k changes stored energy by…",
        "options": [
          "A factor of 2",
          "No change",
          "A factor of 4"
        ],
        "answer": 2,
        "why": "Extension is squared.",
        "concept": "phy1.elastic"
      },
      {
        "id": "phy1.p-elastic4",
        "prompt": "The equation assumes…",
        "options": [
          "The proportionality limit has not been exceeded",
          "Any amount of permanent deformation is acceptable",
          "All springs have the same k"
        ],
        "answer": 0,
        "why": "State the range in which the relation applies.",
        "concept": "phy1.elastic"
      }
    ],
    "check": [
      {
        "id": "phy1.c-elastic1",
        "prompt": "Fresh spring: k = 200 N/m, e = 0.10 m. Stored energy is…",
        "options": [
          "20 J",
          "1 J",
          "10 J"
        ],
        "answer": 1,
        "why": "0.5×200×0.01=1.",
        "concept": "phy1.elastic"
      },
      {
        "id": "phy1.c-elastic2",
        "prompt": "Original length 0.15 m, stretched length 0.25 m. Extension is…",
        "options": [
          "0.25 m",
          "0.40 m",
          "0.10 m"
        ],
        "answer": 2,
        "why": "Subtract original length from stretched length.",
        "concept": "phy1.elastic"
      },
      {
        "id": "phy1.c-elastic3",
        "prompt": "20 cm should be substituted as…",
        "options": [
          "0.20 m",
          "20 m",
          "200 m"
        ],
        "answer": 0,
        "why": "Convert before squaring.",
        "concept": "phy1.elastic"
      },
      {
        "id": "phy1.c-elastic4",
        "prompt": "Doubling k with the same extension…",
        "options": [
          "Halves energy",
          "Doubles energy",
          "Quadruples energy"
        ],
        "answer": 1,
        "why": "Spring constant enters linearly.",
        "concept": "phy1.elastic"
      },
      {
        "id": "phy1.c-elastic5",
        "prompt": "The model 0.20 m extension limit means…",
        "options": [
          "Every real spring is safe at0.20 m",
          "Every spring obeys the equation forever",
          "Only the stated supported range for this model"
        ],
        "answer": 2,
        "why": "Do not generalise a model boundary.",
        "concept": "phy1.elastic"
      },
      {
        "id": "phy1.c-elastic6",
        "prompt": "Stretching a spring stores energy by…",
        "options": [
          "Mechanical work transferring energy",
          "Creating new energy from nowhere",
          "Destroying every other energy store"
        ],
        "answer": 0,
        "why": "Use the energy-transfer account.",
        "concept": "phy1.elastic"
      }
    ]
  },
  {
    "id": "science.physics.energy.heating",
    "title": "Specific heat capacity & virtual practical",
    "short": "Specific heat capacity & virtual practical",
    "topicId": "science.physics.energy",
    "refs": [
      "1.1.3",
      "3.2.2"
    ],
    "combinedRefs": [
      "1.1.3",
      "3.2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Specific heat capacity c is the energy required to raise1 kg of a substance by1°C. Use ΔE=mcΔθ with energy in J, mass in kg, c in J/(kg°C) and temperature change in°C. A temperature rise is final minus initial temperature, not simply the final reading.",
    "learn": [
      {
        "title": "Define specific heat capacity",
        "text": "Specific heat capacity c is the energy required to raise1 kg of a substance by1°C. Use ΔE=mcΔθ with energy in J, mass in kg, c in J/(kg°C) and temperature change in°C. A temperature rise is final minus initial temperature, not simply the final reading.",
        "scene": "phy1:heating:0",
        "process": false
      },
      {
        "title": "Link energy and temperature",
        "text": "Our original model block has c = 1000 J/(kg°C), starts at20°C and receives a6000 J heater input. Ideally, a 0.5 kg block rises12°C to32°C. With10% of input going elsewhere, the block gains5400 J and rises10.8°C. Heater input and energy gained by the block are different when losses occur.",
        "scene": "phy1:heating:1",
        "processFilm": "phy1-heating"
      },
      {
        "title": "Plan a school investigation",
        "text": "Physics required practical1, or Trilogy practical14, determines specific heat capacity by linking energy transfer to mass and temperature change. Measure mass, initial/final temperature and energy transferred; consider insulation, thermal contact, thermometer placement, repeats and suitable controls. Use approved equipment and school risk assessment. The virtual block does not establish real apparatus, safe handling or measurement competence.",
        "scene": "phy1:heating:2",
        "process": false
      },
      {
        "title": "Calculate and evaluate c",
        "text": "Rearrange to c=ΔE/(mΔθ). If6000 J input is treated as block energy despite10% losses, c appears about1111 J/(kg°C) instead of the model value1000. Better insulation and accounting for losses improve the estimate. Our original readings assume no phase change, constant c and uniform block temperature; graph construction and unrestricted written evaluation remain further evidence.",
        "scene": "phy1:heating:3",
        "process": false
      }
    ],
    "widget": "phy1-heating",
    "prerequisites": [
      "science.physics.energy.stores"
    ],
    "skills": [
      "WS1.2",
      "WS4.3",
      "WS4.5",
      "WS4.6",
      "MS1a",
      "MS1c",
      "MS3b",
      "MS3c",
      "AT1",
      "AT5"
    ],
    "practice": [
      {
        "id": "phy1.p-heating1",
        "prompt": "Specific heat capacity is energy per…",
        "options": [
          "1 kg per 1°C rise",
          "Any mass per final temperature reading",
          "One metre per second"
        ],
        "answer": 0,
        "why": "Use the defined mass and temperature change.",
        "concept": "phy1.heating"
      },
      {
        "id": "phy1.p-heating2",
        "prompt": "The thermal energy equation is…",
        "options": [
          "ΔE=½mv²",
          "ΔE=mcΔθ",
          "ΔE=m/c/Δθ"
        ],
        "answer": 1,
        "why": "Keep the quantities and units distinct.",
        "concept": "phy1.heating"
      },
      {
        "id": "phy1.p-heating3",
        "prompt": "A block warms 20→32°C. Temperature change is…",
        "options": [
          "32°C",
          "52°C",
          "12°C"
        ],
        "answer": 2,
        "why": "Subtract initial from final temperature.",
        "concept": "phy1.heating"
      },
      {
        "id": "phy1.p-heating4",
        "prompt": "6000 J goes into0.5 kg with c = 1000. Ideal rise is…",
        "options": [
          "12°C",
          "3°C",
          "12000°C"
        ],
        "answer": 0,
        "why": "Δθ=6000/(0.5×1000).",
        "concept": "phy1.heating"
      }
    ],
    "check": [
      {
        "id": "phy1.c-heating1",
        "prompt": "Fresh block:0.5 kg,12000 J gained,24°C rise. c is…",
        "options": [
          "576000 J/(kg°C)",
          "1000 J/(kg°C)",
          "250 J/(kg°C)"
        ],
        "answer": 1,
        "why": "c=12000/(0.5×24).",
        "concept": "phy1.heating"
      },
      {
        "id": "phy1.c-heating2",
        "prompt": "Heater input exceeds the energy gained by the block when…",
        "options": [
          "Energy is created in the thermometer",
          "Mass must be zero",
          "Some energy transfers to surroundings"
        ],
        "answer": 2,
        "why": "Choose the correct system boundary.",
        "concept": "phy1.heating"
      },
      {
        "id": "phy1.c-heating3",
        "prompt": "Using all input as block energy despite losses usually makes the calculated c…",
        "options": [
          "Too high in this setup",
          "Exactly correct by definition",
          "Always negative"
        ],
        "answer": 0,
        "why": "The numerator is too large for the measured rise.",
        "concept": "phy1.heating"
      },
      {
        "id": "phy1.c-heating4",
        "prompt": "Which measurements are needed for this c calculation?",
        "options": [
          "Only block colour",
          "Mass, energy gain and temperature change",
          "Only final temperature"
        ],
        "answer": 1,
        "why": "All three factors are required.",
        "concept": "phy1.heating"
      },
      {
        "id": "phy1.c-heating5",
        "prompt": "Why use insulation and good thermal contact?",
        "options": [
          "To remove every possible uncertainty instantly",
          "To change the unit of mass",
          "To reduce unwanted transfers and improve representative readings"
        ],
        "answer": 2,
        "why": "These measures help; they do not prove zero losses.",
        "concept": "phy1.heating"
      },
      {
        "id": "phy1.c-heating6",
        "prompt": "A virtual practical demonstrates…",
        "options": [
          "Preparation and reasoning, not physical practical competence",
          "That real measurement is unnecessary",
          "That every material has c = 1000"
        ],
        "answer": 0,
        "why": "The model assumptions and evidence limits remain explicit.",
        "concept": "phy1.heating"
      }
    ]
  }
];
export const phy1Concepts={"phy1.stores": "Energy stores, systems & transfers", "phy1.kinetic": "Kinetic energy: mass & speed", "phy1.gravitational": "Gravitational potential energy", "phy1.elastic": "Elastic potential energy in springs", "phy1.heating": "Specific heat capacity & virtual practical"};
