export const mat2Lessons=[
  {
    "id": "science.physics.particle-model-of-matter.internal-energy",
    "title": "Internal energy and temperature",
    "short": "Internal energy and temperature",
    "topicId": "science.physics.particle-model-of-matter",
    "refs": [
      "3.2.1",
      "3.2.2"
    ],
    "combinedRefs": [
      "3.2.1",
      "3.2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Internal energy is the total kinetic energy and potential energy of the particles within a system. Kinetic energy relates to particle motion; potential energy relates to their arrangement and interactions. Temperature is related to average particle kinetic energy, not the total internal energy of a sample. A larger sample can have more internal energy at the same temperature.",
    "learn": [
      {
        "title": "Two parts of internal energy",
        "text": "Internal energy is the total kinetic energy and potential energy of the particles within a system. Kinetic energy relates to particle motion; potential energy relates to their arrangement and interactions. Temperature is related to average particle kinetic energy, not the total internal energy of a sample. A larger sample can have more internal energy at the same temperature.",
        "scene": "mat2:internal:0",
        "process": false
      },
      {
        "title": "Heating has two possible outcomes",
        "text": "Heating increases the energy stored in a system. Within a single phase, it can raise temperature as average kinetic energy increases. During an ideal change of state, energy can instead change particle arrangements and potential energy while temperature stays constant. Follow the two worked accounts: the same input need not produce the same kind of change.",
        "scene": "mat2:internal:1",
        "process": true,
        "processFilm": "mat2-internal"
      },
      {
        "title": "Retrieve specific heat capacity",
        "text": "The existing Specific heat capacity lesson supplies ΔE=mcΔθ and its practical preparation. For a single-phase sample, temperature rise depends on energy input, mass and material. With c=1000 J/(kg°C),2000 J raises0.5 kg by4°C. Doubling the mass at the same c and input halves the rise. Use final minus initial temperature; do not apply this formula across a melting plateau.",
        "scene": "mat2:internal:2",
        "process": false
      },
      {
        "title": "Keep an energy account",
        "text": "Our illustrative starting account has100 J kinetic and100 J potential energy. Choose single-phase warming or melting and an input40/80 J. Predict which part increases and what happens to temperature. The selected input is added to one part while total energy increases by the same amount. These accounts teach the distinction; they are not a molecular energy calibration.",
        "scene": "mat2:internal:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.particle-model-of-matter.states",
      "science.physics.energy.heating"
    ],
    "skills": [
      "WS1.2",
      "MS1a",
      "MS3b",
      "MS3c",
      "MS3d"
    ],
    "widget": "mat2-internal",
    "practice": [
      {
        "id": "mat2.p-internal1",
        "prompt": "Internal energy includes…",
        "options": [
          "Total particle kinetic and potential energy",
          "Only temperature readings",
          "Only motion of the whole container"
        ],
        "answer": 0,
        "why": "Internal energy includes both microscopic contributions.",
        "concept": "mat2.internal"
      },
      {
        "id": "mat2.p-internal2",
        "prompt": "Temperature is related to…",
        "options": [
          "Total energy regardless of sample size",
          "Average particle kinetic energy",
          "Only particle diameter"
        ],
        "answer": 1,
        "why": "Average kinetic energy and total internal energy differ.",
        "concept": "mat2.internal"
      },
      {
        "id": "mat2.p-internal3",
        "prompt": "During ideal melting, added energy mainly changes…",
        "options": [
          "Temperature without changing state",
          "Particle chemical identities",
          "Particle arrangement/potential energy"
        ],
        "answer": 2,
        "why": "Temperature remains constant during the phase change.",
        "concept": "mat2.internal"
      },
      {
        "id": "mat2.p-internal4",
        "prompt": "For the same material and input, doubling mass makes a single-phase temperature rise…",
        "options": [
          "Half as large",
          "Twice as large",
          "Unchanged by definition"
        ],
        "answer": 0,
        "why": "Δθ=ΔE/(mc).",
        "concept": "mat2.internal"
      }
    ],
    "check": [
      {
        "id": "mat2.c-internal5",
        "prompt": "A fresh0.5 kg sample with c=800 J/(kg°C) gains1200 J. Temperature rise?",
        "options": [
          "300°C",
          "3°C",
          "0.333°C"
        ],
        "answer": 1,
        "why": "1200/(0.5×800)=3.",
        "concept": "mat2.internal"
      },
      {
        "id": "mat2.c-internal6",
        "prompt": "A sample warms from18°C to25°C. Δθ is…",
        "options": [
          "25°C",
          "43°C",
          "7°C"
        ],
        "answer": 2,
        "why": "Temperature change is final minus initial.",
        "concept": "mat2.internal"
      },
      {
        "id": "mat2.c-internal7",
        "prompt": "Two equal-material samples have the same temperature but different masses. They…",
        "options": [
          "Can have different total internal energies",
          "Must have identical total internal energies",
          "Have identical numbers of particles"
        ],
        "answer": 0,
        "why": "Total energy depends on the amount of material too.",
        "concept": "mat2.internal"
      },
      {
        "id": "mat2.c-internal8",
        "prompt": "Why avoid ΔE=mcΔθ alone during a melting plateau?",
        "options": [
          "Melting destroys all supplied energy",
          "State changes use energy without a temperature rise",
          "Specific heat capacity equals latent heat"
        ],
        "answer": 1,
        "why": "Use latent heat for the phase-changing part.",
        "concept": "mat2.internal"
      },
      {
        "id": "mat2.c-internal9",
        "prompt": "Kinetic100 J and potential150 J give internal energy…",
        "options": [
          "50 J",
          "15000 J",
          "250 J"
        ],
        "answer": 2,
        "why": "Add the two microscopic energy accounts.",
        "concept": "mat2.internal"
      },
      {
        "id": "mat2.c-internal10",
        "prompt": "Which is a complete description of heating?",
        "options": [
          "It can raise temperature or produce a change of state",
          "It always raises temperature",
          "It only changes the number of particles"
        ],
        "answer": 0,
        "why": "Follow the system and its state.",
        "concept": "mat2.internal"
      }
    ]
  },
  {
    "id": "science.physics.particle-model-of-matter.latent-heat",
    "title": "Specific latent heat",
    "short": "Specific latent heat",
    "topicId": "science.physics.particle-model-of-matter",
    "refs": [
      "3.2.3"
    ],
    "combinedRefs": [
      "3.2.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Specific latent heat is the energy needed to change the state of1 kg of a substance without a temperature change. Use E=mL: E in joules, m in kilograms and L in J/kg. Fusion refers to solid↔liquid; vaporisation to liquid↔gas. Melting/vaporising absorb energy; freezing/condensing release energy.",
    "learn": [
      {
        "title": "Energy for a change of state",
        "text": "Specific latent heat is the energy needed to change the state of1 kg of a substance without a temperature change. Use E=mL: E in joules, m in kilograms and L in J/kg. Fusion refers to solid↔liquid; vaporisation to liquid↔gas. Melting/vaporising absorb energy; freezing/condensing release energy.",
        "scene": "mat2:latent:0",
        "process": false
      },
      {
        "title": "Transfer energy at constant temperature",
        "text": "For our original toy material, melting at20°C has L=10000 J/kg and vaporising at80°C has L=20000 J/kg. Melting0.1 kg needs1000 J; vaporising the same mass needs2000 J. The film changes the proportion in each state while the temperature stays fixed. These values describe an invented teaching material, not water.",
        "scene": "mat2:latent:1",
        "process": true,
        "processFilm": "mat2-latent"
      },
      {
        "title": "Calculate mass or latent heat",
        "text": "Rearrange m=E/L or L=E/m. Convert grams to kilograms before using J/kg:50 g is0.05 kg. With the toy fusion value,0.05 kg needs500 J. Specific heat capacity has units J/(kg°C) and concerns temperature rise; specific latent heat has units J/kg and concerns state change. Heating through several regions requires separate accounts.",
        "scene": "mat2:latent:2",
        "process": false
      },
      {
        "title": "Evaluate a melting measurement",
        "text": "To estimate a fusion latent heat, measure energy supplied and the mass actually melted, then use L=E/m. Account for background melting with an unheated comparison and for energy transferred to the apparatus/surroundings. The AT5 opportunity is not a new required-practical claim. Compare fusion/vaporisation at two masses here; real apparatus, uncertainty and safe school procedures remain separate evidence.",
        "scene": "mat2:latent:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.particle-model-of-matter.internal-energy"
    ],
    "skills": [
      "WS1.2",
      "MS1a",
      "MS3b",
      "MS3c",
      "MS3d",
      "AT5"
    ],
    "widget": "mat2-latent",
    "practice": [
      {
        "id": "mat2.p-latent1",
        "prompt": "Specific latent heat is energy needed to change the state of…",
        "options": [
          "1 kg without changing temperature",
          "Any sample by1°C",
          "One molecule into a different element"
        ],
        "answer": 0,
        "why": "The definition uses unit mass and no temperature change.",
        "concept": "mat2.latent"
      },
      {
        "id": "mat2.p-latent2",
        "prompt": "The state-change equation is…",
        "options": [
          "E=m/L",
          "E=mL",
          "E=L/m"
        ],
        "answer": 1,
        "why": "Multiply mass by specific latent heat.",
        "concept": "mat2.latent"
      },
      {
        "id": "mat2.p-latent3",
        "prompt": "Specific latent heat of fusion concerns…",
        "options": [
          "Only liquid and gas",
          "Only temperature rise in gas",
          "Solid and liquid"
        ],
        "answer": 2,
        "why": "Fusion covers melting/freezing.",
        "concept": "mat2.latent"
      },
      {
        "id": "mat2.p-latent4",
        "prompt": "At an ideal state-change plateau the temperature…",
        "options": [
          "Stays constant while energy is transferred",
          "Must rise with every joule",
          "Becomes zero in all substances"
        ],
        "answer": 0,
        "why": "Energy changes the internal-energy arrangement account.",
        "concept": "mat2.latent"
      }
    ],
    "check": [
      {
        "id": "mat2.c-latent5",
        "prompt": "A fresh0.3 kg sample has L=40000 J/kg. Energy for the change?",
        "options": [
          "133333 J",
          "12000 J",
          "0.0000075 J"
        ],
        "answer": 1,
        "why": "0.3×40000=12000.",
        "concept": "mat2.latent"
      },
      {
        "id": "mat2.c-latent6",
        "prompt": "A fresh6000 J changes0.2 kg. L is…",
        "options": [
          "1200 J/kg",
          "0.000033 J/kg",
          "30000 J/kg"
        ],
        "answer": 2,
        "why": "L=E/m=6000/0.2.",
        "concept": "mat2.latent"
      },
      {
        "id": "mat2.c-latent7",
        "prompt": "8000 J with L=20000 J/kg changes mass…",
        "options": [
          "0.4 kg",
          "2.5 kg",
          "160000000 kg"
        ],
        "answer": 0,
        "why": "m=E/L.",
        "concept": "mat2.latent"
      },
      {
        "id": "mat2.c-latent8",
        "prompt": "A50 g sample is…",
        "options": [
          "50 kg",
          "0.05 kg",
          "0.5 kg"
        ],
        "answer": 1,
        "why": "Divide grams by1000.",
        "concept": "mat2.latent"
      },
      {
        "id": "mat2.c-latent9",
        "prompt": "Condensation at its transition temperature…",
        "options": [
          "Requires no energy transfer",
          "Creates new particles",
          "Releases energy without changing temperature during the change"
        ],
        "answer": 2,
        "why": "The reverse state change transfers energy out.",
        "concept": "mat2.latent"
      },
      {
        "id": "mat2.c-latent10",
        "prompt": "For a melt experiment, why use an unheated comparison?",
        "options": [
          "Estimate melting caused by the surroundings",
          "Remove the need to measure mass",
          "Prove all energy enters only the sample"
        ],
        "answer": 0,
        "why": "Background energy transfer affects the estimate.",
        "concept": "mat2.latent"
      }
    ]
  },
  {
    "id": "science.physics.particle-model-of-matter.heating-curves",
    "title": "Heating and cooling curves",
    "short": "Heating and cooling curves",
    "topicId": "science.physics.particle-model-of-matter",
    "refs": [
      "3.2.3"
    ],
    "combinedRefs": [
      "3.2.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A heating/cooling curve plots temperature against time or energy transferred. A slope within a single phase means changing temperature; a horizontal region for a pure substance at fixed pressure indicates a state change. A plateau does not mean energy transfer has stopped. Read the stated conditions before interpreting a graph.",
    "learn": [
      {
        "title": "Read axes before regions",
        "text": "A heating/cooling curve plots temperature against time or energy transferred. A slope within a single phase means changing temperature; a horizontal region for a pure substance at fixed pressure indicates a state change. A plateau does not mean energy transfer has stopped. Read the stated conditions before interpreting a graph.",
        "scene": "mat2:curves:0",
        "process": false
      },
      {
        "title": "Follow the ideal heating account",
        "text": "Our1 kg toy material receives1000 W at constant pressure with no losses. In120 s it gains120 kJ: solid10→20°C; melting at20°C; liquid20→80°C; vaporising at80°C; gas80→100°C. The graph cursor follows the particle state. c=1000 J/(kg°C), Lfusion=10000 J/kg and Lvaporisation=20000 J/kg are invented but internally consistent.",
        "scene": "mat2:curves:1",
        "process": true,
        "processFilm": "mat2-curves"
      },
      {
        "title": "Reverse the energy transfer",
        "text": "For cooling, energy leaves the sample. Temperature falls in the single-phase regions, stays constant during condensation/freezing, then falls again. Internal energy decreases even on a horizontal cooling region. Our cooling model removes1000 W and retraces the same ideal states in reverse; real substances, losses and changing ambient temperature can alter measured curves.",
        "scene": "mat2:curves:2",
        "process": false
      },
      {
        "title": "Separate sensible and latent transfers",
        "text": "Use mcΔθ on sloping single-phase regions and mL on state-change regions. At fixed power, energy=P×time, so a longer plateau for the same mass means more latent energy transferred under comparable conditions. Choose heating/cooling and five elapsed times; predict temperature from the graph. Selecting/read-off evidence does not establish unrestricted graph construction.",
        "scene": "mat2:curves:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.particle-model-of-matter.latent-heat"
    ],
    "skills": [
      "WS1.2",
      "MS1a",
      "MS3b",
      "MS3c",
      "MS3d",
      "WS3.5",
      "MS4a"
    ],
    "widget": "mat2-curves",
    "practice": [
      {
        "id": "mat2.p-curves1",
        "prompt": "A horizontal heating-curve region can mean…",
        "options": [
          "Energy is changing state at constant temperature",
          "No energy is entering",
          "All particles have stopped moving"
        ],
        "answer": 0,
        "why": "A state change still transfers energy.",
        "concept": "mat2.curves"
      },
      {
        "id": "mat2.p-curves2",
        "prompt": "A sloping single-phase region represents…",
        "options": [
          "A compulsory chemical reaction",
          "Temperature changing",
          "Particles increasing in diameter"
        ],
        "answer": 1,
        "why": "Temperature changes with average kinetic energy.",
        "concept": "mat2.curves"
      },
      {
        "id": "mat2.p-curves3",
        "prompt": "On a cooling plateau, internal energy…",
        "options": [
          "Must stay constant",
          "Increases because the curve is flat",
          "Decreases while temperature stays constant"
        ],
        "answer": 2,
        "why": "Energy leaves during freezing/condensing.",
        "concept": "mat2.curves"
      },
      {
        "id": "mat2.p-curves4",
        "prompt": "Use mcΔθ for…",
        "options": [
          "A single-phase temperature change",
          "Only melting at constant temperature",
          "Creating particles"
        ],
        "answer": 0,
        "why": "State-change energy uses mL instead.",
        "concept": "mat2.curves"
      }
    ],
    "check": [
      {
        "id": "mat2.c-curves5",
        "prompt": "A fresh heater supplies500 W for30 s on a plateau. Energy?",
        "options": [
          "16.7 J",
          "15000 J",
          "530 J"
        ],
        "answer": 1,
        "why": "E=Pt=500×30.",
        "concept": "mat2.curves"
      },
      {
        "id": "mat2.c-curves6",
        "prompt": "A10 kJ plateau changes0.5 kg. L is…",
        "options": [
          "5000 J/kg",
          "20 J/kg",
          "20000 J/kg"
        ],
        "answer": 2,
        "why": "10000/0.5=20000.",
        "concept": "mat2.curves"
      },
      {
        "id": "mat2.c-curves7",
        "prompt": "On the toy heating curve,15 s lies in the20°C plateau. Temperature?",
        "options": [
          "20°C",
          "15°C",
          "35°C"
        ],
        "answer": 0,
        "why": "Read temperature from the vertical axis, not elapsed time.",
        "concept": "mat2.curves"
      },
      {
        "id": "mat2.c-curves8",
        "prompt": "On the toy heating curve,50 s lies in the liquid slope. Temperature?",
        "options": [
          "80°C",
          "50°C",
          "20°C"
        ],
        "answer": 1,
        "why": "After20s at20°C,30s adds30°C in this stated toy material.",
        "concept": "mat2.curves"
      },
      {
        "id": "mat2.c-curves9",
        "prompt": "If the cooling curve is horizontal during freezing…",
        "options": [
          "All particles are motionless",
          "Mass must decrease",
          "Energy still leaves the sample"
        ],
        "answer": 2,
        "why": "A plateau concerns temperature, not zero internal-energy change.",
        "concept": "mat2.curves"
      },
      {
        "id": "mat2.c-curves10",
        "prompt": "To compare plateau durations fairly, keep…",
        "options": [
          "Mass and power/conditions comparable",
          "Only the graph colour fixed",
          "All physical quantities changing"
        ],
        "answer": 0,
        "why": "Duration depends on energy and transfer rate.",
        "concept": "mat2.curves"
      }
    ]
  },
  {
    "id": "science.physics.particle-model-of-matter.gas-temperature",
    "title": "Gas motion, temperature and pressure",
    "short": "Gas motion, temperature and pressure",
    "topicId": "science.physics.particle-model-of-matter",
    "refs": [
      "3.3.1"
    ],
    "combinedRefs": [
      "3.3.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Gas molecules are in constant random motion. Collisions with a container wall exert forces on it; the combined wall force per area gives gas pressure. Temperature relates to average molecular kinetic energy. Particles do not all have the same velocity or travel in a single organised stream.",
    "learn": [
      {
        "title": "Random motion causes pressure",
        "text": "Gas molecules are in constant random motion. Collisions with a container wall exert forces on it; the combined wall force per area gives gas pressure. Temperature relates to average molecular kinetic energy. Particles do not all have the same velocity or travel in a single organised stream.",
        "scene": "mat2:gas:0",
        "process": false
      },
      {
        "title": "Warm a sealed rigid container",
        "text": "At fixed mass and volume, warming a gas increases average molecular kinetic energy. Faster molecules collide with walls more frequently and their impacts transfer more momentum, increasing pressure. Cooling has the opposite effect. The film keeps particle number and box size fixed, changes symbolic speeds and highlights wall impacts.",
        "scene": "mat2:gas:1",
        "process": true,
        "processFilm": "mat2-gas"
      },
      {
        "title": "Keep the conditions explicit",
        "text": "Compare gas temperature only while the volume and amount of gas stay fixed. A flexible balloon can expand, so it is not the same fixed-volume situation. No numerical pressure/temperature law is required here; do not double pressure by simply doubling a Celsius reading. Particle diameters remain unchanged.",
        "scene": "mat2:gas:2",
        "process": false
      },
      {
        "title": "Explain both warming and cooling",
        "text": "Choose an initial20/60°C and add/remove enough energy for a10°C temperature change in the illustrative scenario. Predict whether both average kinetic energy and pressure rise or fall. No real pressure in Pa or collision count is calculated. Trajectories and speeds are a visual explanation rather than measured molecular paths.",
        "scene": "mat2:gas:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.particle-model-of-matter.internal-energy"
    ],
    "skills": [
      "WS1.2"
    ],
    "widget": "mat2-gas",
    "practice": [
      {
        "id": "mat2.p-gas1",
        "prompt": "A gas’s molecules are in…",
        "options": [
          "Constant random motion",
          "Only fixed-position vibration",
          "One permanent clockwise stream"
        ],
        "answer": 0,
        "why": "The motion is disordered.",
        "concept": "mat2.gas"
      },
      {
        "id": "mat2.p-gas2",
        "prompt": "At fixed volume and mass, warming generally makes pressure…",
        "options": [
          "Decrease",
          "Increase",
          "Remain fixed regardless of temperature"
        ],
        "answer": 1,
        "why": "Average kinetic energy rises and wall impacts change.",
        "concept": "mat2.gas"
      },
      {
        "id": "mat2.p-gas3",
        "prompt": "Gas temperature is related to…",
        "options": [
          "Individual molecule diameter",
          "Only the mass of the vessel",
          "Average molecular kinetic energy"
        ],
        "answer": 2,
        "why": "It is an average, not identical molecular velocities.",
        "concept": "mat2.gas"
      },
      {
        "id": "mat2.p-gas4",
        "prompt": "Gas pressure comes from…",
        "options": [
          "Molecular collisions with walls",
          "Molecules becoming larger",
          "A continuous solid surface inside the gas"
        ],
        "answer": 0,
        "why": "Wall collisions exert force.",
        "concept": "mat2.gas"
      }
    ],
    "check": [
      {
        "id": "mat2.c-gas5",
        "prompt": "A sealed rigid vessel is cooled. Its gas pressure generally…",
        "options": [
          "Rises",
          "Falls",
          "Doubles at every temperature"
        ],
        "answer": 1,
        "why": "Lower average KE reduces the wall-force effect.",
        "concept": "mat2.gas"
      },
      {
        "id": "mat2.c-gas6",
        "prompt": "Which control is essential for the stated pressure/temperature comparison?",
        "options": [
          "A balloon free to expand",
          "Changing the number of molecules",
          "Fixed volume and amount of gas"
        ],
        "answer": 2,
        "why": "Isolate temperature as the changing condition.",
        "concept": "mat2.gas"
      },
      {
        "id": "mat2.c-gas7",
        "prompt": "Heating from20°C to40°C means pressure…",
        "options": [
          "Cannot be inferred to double using a Celsius ratio",
          "Must double because40/20=2",
          "Must fall to half"
        ],
        "answer": 0,
        "why": "The required relationship is qualitative; Celsius zero is not a pressure zero.",
        "concept": "mat2.gas"
      },
      {
        "id": "mat2.c-gas8",
        "prompt": "An animation shows faster molecular motion when warmed. It means…",
        "options": [
          "All molecules move identically",
          "Average KE increases; no real trajectory calibration is claimed",
          "Molecules expand in diameter"
        ],
        "answer": 1,
        "why": "Particle size and number stay fixed.",
        "concept": "mat2.gas"
      },
      {
        "id": "mat2.c-gas9",
        "prompt": "A flexible heated balloon can expand. Why is this different?",
        "options": [
          "It contains no moving molecules",
          "Pressure cannot exist in a balloon",
          "Its gas volume changes"
        ],
        "answer": 2,
        "why": "The fixed-volume condition no longer holds.",
        "concept": "mat2.gas"
      },
      {
        "id": "mat2.c-gas10",
        "prompt": "Why do faster particles increase wall pressure at fixed volume?",
        "options": [
          "More frequent impacts with greater momentum transfer",
          "They stop colliding with walls",
          "They gain extra protons"
        ],
        "answer": 0,
        "why": "Link motion to wall force.",
        "concept": "mat2.gas"
      }
    ]
  },
  {
    "id": "science.physics.particle-model-of-matter.gas-compression",
    "title": "Gas compression and pressure–volume",
    "short": "Gas compression and pressure–volume",
    "topicId": "science.physics.particle-model-of-matter",
    "refs": [
      "3.3.2",
      "3.3.3"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Gas pressure produces a net force at right angles to a container wall or piston surface. A pressure difference can compress or expand a gas. For the fixed-mass comparison here, temperature is maintained constant so average molecular kinetic energy stays constant.",
    "learn": [
      {
        "title": "Pressure acts on container surfaces",
        "text": "Gas pressure produces a net force at right angles to a container wall or piston surface. A pressure difference can compress or expand a gas. For the fixed-mass comparison here, temperature is maintained constant so average molecular kinetic energy stays constant.",
        "scene": "mat2:compression:0",
        "process": false
      },
      {
        "title": "Same particles in less space",
        "text": "Compressing a fixed mass at constant temperature makes molecules strike a wall more frequently, increasing pressure. Expanding the gas gives fewer wall impacts per unit time and lower pressure. The piston film keeps16 marker particles and their symbolic speed scale fixed; a reservoir maintains temperature. It is not a fast insulated compression.",
        "scene": "mat2:compression:1",
        "process": true,
        "processFilm": "mat2-compression"
      },
      {
        "title": "Use pV only under its conditions",
        "text": "For a fixed mass at constant temperature, pV is constant: p₁V₁=p₂V₂. Use pressure in Pa and volume in m³. From100000 Pa at0.004 m³, compressing to0.002 m³ gives200000 Pa. Doubling volume halves pressure. Do not apply this relationship unchanged when gas temperature changes.",
        "scene": "mat2:compression:2",
        "process": false
      },
      {
        "title": "Compare and rearrange",
        "text": "Calculate p₂=p₁V₁/V₂ or V₂=p₁V₁/p₂. Keep pressure and volume units consistent, and use absolute pressure rather than a gauge reading unless converted appropriately. Choose two final volumes and two initial pressures from a common initial0.004 m³. Real pump friction, leaks, heating and instrument uncertainty are not included.",
        "scene": "mat2:compression:3",
        "process": false
      },
      {
        "title": "Higher: doing work can warm gas",
        "text": "Work transfers energy by a force. Rapidly pushing a bicycle-pump piston can do work on the enclosed gas, increasing its internal energy and temperature. A slow compression maintained at constant temperature transfers energy to the surroundings instead. The Higher film contrasts quick insulated warming with the constant-temperature model: pV constant is not applied to the warming case. Friction can also warm a real pump, so warmth alone does not isolate the gas effect.",
        "scene": "mat2:work:0",
        "process": true,
        "processFilm": "mat2-work",
        "higher": true
      }
    ],
    "prerequisites": [
      "science.physics.particle-model-of-matter.gas-temperature"
    ],
    "skills": [
      "WS1.2",
      "MS1a",
      "MS3b",
      "MS3c",
      "MS3d"
    ],
    "widget": "mat2-compression",
    "practice": [
      {
        "id": "mat2.p-compression1",
        "prompt": "For a fixed mass at constant temperature…",
        "options": [
          "pV is constant",
          "p/V is always constant",
          "pV stays constant at every changing temperature"
        ],
        "answer": 0,
        "why": "The temperature condition is essential.",
        "concept": "mat2.compression"
      },
      {
        "id": "mat2.p-compression2",
        "prompt": "Halving gas volume at constant temperature makes pressure…",
        "options": [
          "Halve",
          "Double",
          "Remain unchanged"
        ],
        "answer": 1,
        "why": "p₁V₁=p₂V₂.",
        "concept": "mat2.compression"
      },
      {
        "id": "mat2.p-compression3",
        "prompt": "A pressure force on a flat container wall acts…",
        "options": [
          "Only parallel to the wall",
          "Only along the direction of gravity",
          "At right angles to the surface"
        ],
        "answer": 2,
        "why": "Pressure acts normal to the surface.",
        "concept": "mat2.compression"
      },
      {
        "id": "mat2.p-compression4",
        "prompt": "During the ideal maintained-temperature compression, average molecular KE…",
        "options": [
          "Stays constant",
          "Must rise because volume falls",
          "Disappears"
        ],
        "answer": 0,
        "why": "Temperature is held fixed.",
        "concept": "mat2.compression"
      },
      {
        "id": "mat2.practice-workHT",
        "prompt": "Rapid compression of an approximately insulated gas can…",
        "options": [
          "Increase internal energy and temperature through work",
          "Guarantee unchanged temperature",
          "Make pV constant regardless of heating"
        ],
        "answer": 0,
        "why": "Work transfers energy into the gas.",
        "concept": "mat2.compression"
      }
    ],
    "check": [
      {
        "id": "mat2.c-compression5",
        "prompt": "A fresh gas has150000 Pa at0.006 m³. At0.003 m³ and the same temperature, pressure?",
        "options": [
          "75000 Pa",
          "300000 Pa",
          "900 Pa"
        ],
        "answer": 1,
        "why": "150000×0.006/0.003=300000.",
        "concept": "mat2.compression"
      },
      {
        "id": "mat2.c-compression6",
        "prompt": "A fresh gas has120000 Pa at0.005 m³. At200000 Pa, its same-temperature volume is…",
        "options": [
          "0.00833 m³",
          "600 m³",
          "0.003 m³"
        ],
        "answer": 2,
        "why": "V₂=p₁V₁/p₂.",
        "concept": "mat2.compression"
      },
      {
        "id": "mat2.c-compression7",
        "prompt": "Increasing the volume at fixed mass and temperature makes wall impacts…",
        "options": [
          "Less frequent, reducing pressure",
          "Necessarily more frequent",
          "Stop forever"
        ],
        "answer": 0,
        "why": "Particles have farther to travel between walls.",
        "concept": "mat2.compression"
      },
      {
        "id": "mat2.c-compression8",
        "prompt": "Which invalidates a direct p₁V₁=p₂V₂ calculation here?",
        "options": [
          "Keeping mass fixed",
          "An unaccounted change in temperature",
          "Maintaining the same gas"
        ],
        "answer": 1,
        "why": "The relation assumes fixed temperature.",
        "concept": "mat2.compression"
      },
      {
        "id": "mat2.c-compression9",
        "prompt": "During maintained-temperature compression the particles…",
        "options": [
          "Grow to fill the smaller volume",
          "Are consumed at the piston",
          "Remain the same size and number"
        ],
        "answer": 2,
        "why": "Spacing and collision frequency change.",
        "concept": "mat2.compression"
      },
      {
        "id": "mat2.c-compression10",
        "prompt": "The pressure unit Pa is…",
        "options": [
          "A unit of pressure",
          "A unit of volume",
          "A temperature difference"
        ],
        "answer": 0,
        "why": "Use Pa with m³ consistently.",
        "concept": "mat2.compression"
      },
      {
        "id": "mat2.check-workHT",
        "prompt": "Why must the warming bicycle-pump case be separated from the constant-temperature pV model?",
        "options": [
          "Work can increase gas temperature, violating the fixed-temperature condition",
          "Doing work destroys gas molecules",
          "All compression must maintain temperature"
        ],
        "answer": 0,
        "why": "Two distinct conditions produce different energy accounts.",
        "concept": "mat2.compression"
      }
    ],
    "higherQuestions": [
      "mat2.practice-workHT",
      "mat2.check-workHT"
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
        "work"
      ],
      "completionKey": "mat2Passed"
    }
  }
];
export const mat2Concepts={"mat2.internal": "Internal energy and temperature", "mat2.latent": "Specific latent heat", "mat2.curves": "Heating and cooling curves", "mat2.gas": "Gas motion, temperature and pressure", "mat2.compression": "Gas compression and pressure–volume"};
