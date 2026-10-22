export const el3Lessons=[
  {
    "id": "science.physics.electricity.sources",
    "title": "AC and DC sources",
    "short": "AC and DC sources",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.3.1"
    ],
    "combinedRefs": [
      "2.3.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 30,
    "big": "A direct potential difference keeps the same polarity, so current in a simple resistive circuit flows in one direction. A cell or battery supplies dc. Alternating potential difference repeatedly reverses polarity; the current through a resistor repeatedly reverses too. DC need not mean an absolutely constant magnitude.",
    "learn": [
      {
        "title": "One direction or alternating",
        "text": "A direct potential difference keeps the same polarity, so current in a simple resistive circuit flows in one direction. A cell or battery supplies dc. Alternating potential difference repeatedly reverses polarity; the current through a resistor repeatedly reverses too. DC need not mean an absolutely constant magnitude.",
        "scene": "el3:sources:0",
        "process": false
      },
      {
        "title": "Read the waveform",
        "text": "The horizontal axis is time and the vertical axis is potential difference. An ac trace crosses zero and changes sign; a steady dc trace remains on one side. Follow the marker through a complete cycle, from one upward zero crossing to the next. The slow playback expands time so that reversals can be seen.",
        "scene": "el3:sources:1",
        "process": true,
        "processFilm": "el3-sources"
      },
      {
        "title": "UK domestic supply",
        "text": "UK mains is ac, about 230 V and 50 Hz: 50 complete cycles each second. The period is 1/50 s = 0.020 s, or 20 ms. Reversing twice per cycle does not make the supply 100 Hz. The quoted 230 V is not the maximum of a sine-wave trace; our normalised graph deliberately avoids peak-voltage calculations.",
        "scene": "el3:sources:2",
        "process": false
      },
      {
        "title": "Compare sources",
        "text": "Choose dc or ac and a frequency. Predict how many complete cycles of ac occur in one second. The dc graph stays positive: its cycle count is zero. Frequency calculations here support interpreting the required 50 Hz statement; they are not a new required electricity equation.",
        "scene": "el3:sources:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.current"
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "MS3b",
      "MS3c"
    ],
    "widget": "el3-sources",
    "practice": [
      {
        "id": "el3.p-sources1",
        "prompt": "An alternating potential difference…",
        "options": [
          "Repeatedly reverses polarity",
          "Must always stay positive",
          "Is used up by a resistor"
        ],
        "answer": 0,
        "why": "Its sign changes repeatedly.",
        "concept": "el3.sources"
      },
      {
        "id": "el3.p-sources2",
        "prompt": "A battery normally supplies…",
        "options": [
          "UK mains ac",
          "Direct potential difference",
          "No potential difference"
        ],
        "answer": 1,
        "why": "Its polarity stays the same.",
        "concept": "el3.sources"
      },
      {
        "id": "el3.p-sources3",
        "prompt": "UK domestic mains frequency is…",
        "options": [
          "230 Hz",
          "100 Hz",
          "50 Hz"
        ],
        "answer": 2,
        "why": "Frequency counts full cycles per second.",
        "concept": "el3.sources"
      },
      {
        "id": "el3.p-sources4",
        "prompt": "The quoted UK domestic mains potential difference is about…",
        "options": [
          "230 V",
          "50 V",
          "230 A"
        ],
        "answer": 0,
        "why": "Potential difference is measured in volts.",
        "concept": "el3.sources"
      }
    ],
    "check": [
      {
        "id": "el3.c-sources5",
        "prompt": "A trace that repeatedly changes from positive to negative is…",
        "options": [
          "Steady positive dc",
          "AC",
          "Evidence that charge is consumed"
        ],
        "answer": 1,
        "why": "It reverses polarity.",
        "concept": "el3.sources"
      },
      {
        "id": "el3.c-sources6",
        "prompt": "A 50 Hz supply completes how many cycles in 0.1 s?",
        "options": [
          "50",
          "500",
          "5"
        ],
        "answer": 2,
        "why": "50 × 0.1 = 5 complete cycles.",
        "concept": "el3.sources"
      },
      {
        "id": "el3.c-sources7",
        "prompt": "One full 50 Hz cycle takes…",
        "options": [
          "0.020 s",
          "50 s",
          "0.010 s"
        ],
        "answer": 0,
        "why": "One second divided by 50.",
        "concept": "el3.sources"
      },
      {
        "id": "el3.c-sources8",
        "prompt": "A direct potential difference has…",
        "options": [
          "A compulsory sign reversal every second",
          "One polarity, even if its magnitude varies",
          "Zero voltage at all times"
        ],
        "answer": 1,
        "why": "Direction and magnitude are different properties.",
        "concept": "el3.sources"
      },
      {
        "id": "el3.c-sources9",
        "prompt": "Why is the process played slowly?",
        "options": [
          "Because UK mains is really 1 Hz",
          "To change the required mains frequency",
          "To make reversals visible; it is not real-time mains"
        ],
        "answer": 2,
        "why": "Playback time is expanded.",
        "concept": "el3.sources"
      },
      {
        "id": "el3.c-sources10",
        "prompt": "A resistor on an ac source carries current…",
        "options": [
          "In alternating directions",
          "In one permanent direction only",
          "Only when voltage is zero"
        ],
        "answer": 0,
        "why": "Current reverses with the applied polarity.",
        "concept": "el3.sources"
      }
    ]
  },
  {
    "id": "science.physics.electricity.mains",
    "title": "Mains wiring and safety",
    "short": "Mains wiring and safety",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.3.2"
    ],
    "combinedRefs": [
      "2.3.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 30,
    "big": "For a typical earthed appliance, brown insulation identifies live, blue identifies neutral, and green/yellow stripes identify earth. Live carries alternating potential difference from the supply. Neutral completes the operating circuit. Earth connects the exposed metal case to earth potential as a protective path; it is not the normal return wire.",
    "learn": [
      {
        "title": "Three cores, three roles",
        "text": "For a typical earthed appliance, brown insulation identifies live, blue identifies neutral, and green/yellow stripes identify earth. Live carries alternating potential difference from the supply. Neutral completes the operating circuit. Earth connects the exposed metal case to earth potential as a protective path; it is not the normal return wire.",
        "scene": "el3:mains:0",
        "process": false
      },
      {
        "title": "Trace a fault",
        "text": "Normally the earth wire carries no current. If live touches an earthed metal case, fault current can flow along the protective earth path, allowing a suitable fuse or protective device to disconnect the live supply. The model steps through normal operation, fault and disconnection. It represents a properly protected earthed appliance, not a wiring exercise or a real fault-current/time calculation.",
        "scene": "el3:mains:1",
        "process": true,
        "processFilm": "el3-mains"
      },
      {
        "title": "A switch is not isolation",
        "text": "Live is about 230 V relative to earth; neutral is at or close to earth potential, about 0 V. Even with a switch open, the live conductor on the supply side can remain dangerous. A person providing a live-to-earth connection can receive a dangerous current. Never use the mains for an experiment; the diagram is a conceptual study.",
        "scene": "el3:mains:2",
        "process": false
      },
      {
        "title": "Identify the pair",
        "text": "Select a conductor pair and compare potential differences. In this simplified domestic reference, live–earth and live–neutral are about 230 V; neutral–earth is about 0 V. These are nominal values, not instantaneous sine-wave voltages or a guarantee that a conductor is safe to touch. An earth wire does not replace insulation or correct protective equipment.",
        "scene": "el3:mains:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.sources"
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "WS1.5"
    ],
    "widget": "el3-mains",
    "practice": [
      {
        "id": "el3.p-mains1",
        "prompt": "The live insulation colour is…",
        "options": [
          "Brown",
          "Blue",
          "Green/yellow stripes"
        ],
        "answer": 0,
        "why": "Identify the wire by its role and insulation.",
        "concept": "el3.mains"
      },
      {
        "id": "el3.p-mains2",
        "prompt": "The neutral wire normally…",
        "options": [
          "Carries current only in a case fault",
          "Completes the operating circuit",
          "Makes every live wire safe to touch"
        ],
        "answer": 1,
        "why": "Neutral is the operating return.",
        "concept": "el3.mains"
      },
      {
        "id": "el3.p-mains3",
        "prompt": "Protective earth insulation is…",
        "options": [
          "Plain brown",
          "Blue",
          "Green/yellow stripes"
        ],
        "answer": 2,
        "why": "Its labelled striped identity distinguishes it from neutral.",
        "concept": "el3.mains"
      },
      {
        "id": "el3.p-mains4",
        "prompt": "In normal operation the earth wire…",
        "options": [
          "Carries no current",
          "Carries all appliance operating current",
          "Replaces the neutral wire"
        ],
        "answer": 0,
        "why": "Its role is protection during a fault.",
        "concept": "el3.mains"
      }
    ],
    "check": [
      {
        "id": "el3.c-mains5",
        "prompt": "The nominal live-to-earth potential difference is about…",
        "options": [
          "0 V",
          "230 V",
          "50 Hz"
        ],
        "answer": 1,
        "why": "Live remains at a dangerous potential relative to earth.",
        "concept": "el3.mains"
      },
      {
        "id": "el3.c-mains6",
        "prompt": "A live conductor upstream of an open switch…",
        "options": [
          "Must be at earth potential",
          "Cannot drive current through a person",
          "Can remain dangerous"
        ],
        "answer": 2,
        "why": "Opening a switch does not isolate every live part.",
        "concept": "el3.mains"
      },
      {
        "id": "el3.c-mains7",
        "prompt": "Neutral is normally at or close to…",
        "options": [
          "Earth potential, about 0 V",
          "230 V above earth",
          "50 A"
        ],
        "answer": 0,
        "why": "Neutral and earth roles still differ.",
        "concept": "el3.mains"
      },
      {
        "id": "el3.c-mains8",
        "prompt": "A person connecting live to earth risks…",
        "options": [
          "Only harmless charge storage",
          "A dangerous current through their body",
          "Automatically zero current"
        ],
        "answer": 1,
        "why": "A potential difference can drive current through the body.",
        "concept": "el3.mains"
      },
      {
        "id": "el3.c-mains9",
        "prompt": "If live touches a correctly earthed metal case…",
        "options": [
          "The case must stay safe without a protective device",
          "Neutral insulation changes to brown",
          "Fault current can enable protective disconnection"
        ],
        "answer": 2,
        "why": "A protective path and suitable protection work together.",
        "concept": "el3.mains"
      },
      {
        "id": "el3.c-mains10",
        "prompt": "Why must earth not serve as the normal neutral?",
        "options": [
          "Earth is a fault-protection path, not the operating return",
          "They have identical roles in every condition",
          "Earth is a source of energy"
        ],
        "answer": 0,
        "why": "Distinguish operation from protection.",
        "concept": "el3.mains"
      }
    ]
  },
  {
    "id": "science.physics.electricity.power",
    "title": "Electrical power",
    "short": "Electrical power",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.4.1"
    ],
    "combinedRefs": [
      "2.4.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 30,
    "big": "Electrical power is the rate of energy transfer: one watt is one joule per second. For a device, P = VI. Use volts, amperes and watts: a 12 V motor drawing 2 A transfers 24 J each second, so its input power is 24 W. This is input power, not automatically useful mechanical output.",
    "learn": [
      {
        "title": "Rate, not a store",
        "text": "Electrical power is the rate of energy transfer: one watt is one joule per second. For a device, P = VI. Use volts, amperes and watts: a 12 V motor drawing 2 A transfers 24 J each second, so its input power is 24 W. This is input power, not automatically useful mechanical output.",
        "scene": "el3:power:0",
        "process": false
      },
      {
        "title": "See energy accumulate",
        "text": "At constant 24 W the transferred energy grows by 24 J each second. Compare that with a higher power for the same duration. The moving bar represents an energy account, not charge being consumed. The current does not shrink after the device.",
        "scene": "el3:power:1",
        "process": true,
        "processFilm": "el3-power"
      },
      {
        "title": "Use resistance too",
        "text": "For a resistive component P = I²R. At 2 A through 3 Ω, P = 2² × 3 = 12 W. The square matters: doubling current at fixed resistance multiplies power by four. At fixed voltage instead, changing resistance also changes current; say what is held constant.",
        "scene": "el3:power:2",
        "process": false
      },
      {
        "title": "Choose and rearrange",
        "text": "From P = VI, I = P/V and V = P/I. From P = I²R, R = P/I². Convert kW to W before using SI values. Compare all voltage/current settings and predict power. Component ratings describe intended operating conditions; these ideal examples are not instructions for connecting real devices.",
        "scene": "el3:power:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.ohm"
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "MS3b",
      "MS3c",
      "WS4.5"
    ],
    "widget": "el3-power",
    "practice": [
      {
        "id": "el3.p-power1",
        "prompt": "A watt is…",
        "options": [
          "One joule per second",
          "One joule stored permanently",
          "One coulomb per volt"
        ],
        "answer": 0,
        "why": "Power measures a rate.",
        "concept": "el3.power"
      },
      {
        "id": "el3.p-power2",
        "prompt": "Power from potential difference and current is…",
        "options": [
          "P = V/I",
          "P = VI",
          "P = I/V"
        ],
        "answer": 1,
        "why": "Multiply volts by amperes.",
        "concept": "el3.power"
      },
      {
        "id": "el3.p-power3",
        "prompt": "A 12 V device drawing 2 A has input power…",
        "options": [
          "6 W",
          "0.167 W",
          "24 W"
        ],
        "answer": 2,
        "why": "12 × 2 = 24.",
        "concept": "el3.power"
      },
      {
        "id": "el3.p-power4",
        "prompt": "At fixed resistance, doubling current makes I²R…",
        "options": [
          "Four times as large",
          "Twice as large",
          "Half as large"
        ],
        "answer": 0,
        "why": "The current is squared.",
        "concept": "el3.power"
      }
    ],
    "check": [
      {
        "id": "el3.c-power5",
        "prompt": "A fresh device at 6 V and 3 A transfers power…",
        "options": [
          "2 W",
          "18 W",
          "9 W"
        ],
        "answer": 1,
        "why": "P = VI = 6 × 3.",
        "concept": "el3.power"
      },
      {
        "id": "el3.c-power6",
        "prompt": "A 4 Ω resistor carrying 3 A dissipates…",
        "options": [
          "12 W",
          "0.75 W",
          "36 W"
        ],
        "answer": 2,
        "why": "P = I²R = 9 × 4.",
        "concept": "el3.power"
      },
      {
        "id": "el3.c-power7",
        "prompt": "A 48 W device at 12 V draws…",
        "options": [
          "4 A",
          "576 A",
          "0.25 A"
        ],
        "answer": 0,
        "why": "I = P/V.",
        "concept": "el3.power"
      },
      {
        "id": "el3.c-power8",
        "prompt": "A 20 W resistor carrying 2 A has resistance…",
        "options": [
          "10 Ω",
          "5 Ω",
          "40 Ω"
        ],
        "answer": 1,
        "why": "R = P/I² = 20/4.",
        "concept": "el3.power"
      },
      {
        "id": "el3.c-power9",
        "prompt": "A 1.5 kW power rating is…",
        "options": [
          "0.0015 W",
          "15 W",
          "1500 W"
        ],
        "answer": 2,
        "why": "Kilo means one thousand.",
        "concept": "el3.power"
      },
      {
        "id": "el3.c-power10",
        "prompt": "A motor with 30 W electrical input…",
        "options": [
          "May have useful mechanical power below 30 W",
          "Must create 30 J of extra charge each second",
          "Has exactly 30 J of stored energy"
        ],
        "answer": 0,
        "why": "Some energy is dissipated; power is not a store.",
        "concept": "el3.power"
      }
    ]
  },
  {
    "id": "science.physics.electricity.appliances",
    "title": "Energy transfers in appliances",
    "short": "Energy transfers in appliances",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.4.2"
    ],
    "combinedRefs": [
      "2.4.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 30,
    "big": "A battery-powered fan transfers energy electrically from the battery’s chemical store to the motor’s kinetic energy and to thermal stores of the device and surroundings. A mains heater transfers energy electrically to thermal stores. A mains motor can drive motion. Describe the transfer pathway and stores; electricity is not a substance used up inside the appliance.",
    "learn": [
      {
        "title": "Identify the energy change",
        "text": "A battery-powered fan transfers energy electrically from the battery’s chemical store to the motor’s kinetic energy and to thermal stores of the device and surroundings. A mains heater transfers energy electrically to thermal stores. A mains motor can drive motion. Describe the transfer pathway and stores; electricity is not a substance used up inside the appliance.",
        "scene": "el3:appliances:0",
        "process": false
      },
      {
        "title": "Power multiplied by time",
        "text": "Electrical work is done when charge flows. At constant power, E = Pt: 100 W for 30 s transfers 3000 J. A higher rating means faster transfer under the stated conditions; total energy also depends on duration. A lower-power appliance run longer can transfer more energy.",
        "scene": "el3:appliances:1",
        "process": true,
        "processFilm": "el3-appliances"
      },
      {
        "title": "Energy per charge",
        "text": "E = QV: 5 C passing through a potential difference of 12 V transfers 60 J. Potential difference is energy transferred per unit charge. Charge continues around the circuit; it is not converted into energy. Use coulombs, volts and joules, and rearrange Q = E/V or V = E/Q.",
        "scene": "el3:appliances:2",
        "process": false
      },
      {
        "title": "Compare fair durations",
        "text": "Convert minutes to seconds for E = Pt in joules, and kW to W. A 2 kW heater for 2 minutes transfers 240000 J; a 1 kW heater for 5 minutes transfers 300000 J. Ratings alone do not decide total energy or useful output. Our timed counter assumes constant input power; thermal losses and actual switching are not simulated.",
        "scene": "el3:appliances:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.power"
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "MS3b",
      "MS3c"
    ],
    "widget": "el3-appliances",
    "practice": [
      {
        "id": "el3.p-appliances1",
        "prompt": "A battery fan transfers energy from the battery’s…",
        "options": [
          "Chemical store, electrically to motion and heating",
          "Supply of used-up electrons",
          "Kinetic store only"
        ],
        "answer": 0,
        "why": "Name a source store and transfer pathway.",
        "concept": "el3.appliances"
      },
      {
        "id": "el3.p-appliances2",
        "prompt": "Electrical energy from constant power and duration is…",
        "options": [
          "E = P/t",
          "E = Pt",
          "E = t/P"
        ],
        "answer": 1,
        "why": "Power is energy per second.",
        "concept": "el3.appliances"
      },
      {
        "id": "el3.p-appliances3",
        "prompt": "100 W for 30 s transfers…",
        "options": [
          "3.33 J",
          "130 J",
          "3000 J"
        ],
        "answer": 2,
        "why": "100 × 30 = 3000.",
        "concept": "el3.appliances"
      },
      {
        "id": "el3.p-appliances4",
        "prompt": "Energy from charge and potential difference is…",
        "options": [
          "E = QV",
          "E = Q/V",
          "E = V/Q"
        ],
        "answer": 0,
        "why": "Each coulomb transfers V joules.",
        "concept": "el3.appliances"
      }
    ],
    "check": [
      {
        "id": "el3.c-appliances5",
        "prompt": "A fresh 60 W device runs for 2 minutes. Energy is…",
        "options": [
          "120 J",
          "7200 J",
          "30 J"
        ],
        "answer": 1,
        "why": "Convert 2 minutes to 120 seconds.",
        "concept": "el3.appliances"
      },
      {
        "id": "el3.c-appliances6",
        "prompt": "8 C across 9 V transfers…",
        "options": [
          "0.889 J",
          "1.125 J",
          "72 J"
        ],
        "answer": 2,
        "why": "E = QV = 8 × 9.",
        "concept": "el3.appliances"
      },
      {
        "id": "el3.c-appliances7",
        "prompt": "180 J transferred by 15 C means potential difference…",
        "options": [
          "12 V",
          "2700 V",
          "0.083 V"
        ],
        "answer": 0,
        "why": "V = E/Q.",
        "concept": "el3.appliances"
      },
      {
        "id": "el3.c-appliances8",
        "prompt": "A 2 kW heater used for 10 s transfers…",
        "options": [
          "20 J",
          "20000 J",
          "200 J"
        ],
        "answer": 1,
        "why": "2000 W × 10 s.",
        "concept": "el3.appliances"
      },
      {
        "id": "el3.c-appliances9",
        "prompt": "Compared with 100 W for 60 s, 200 W for 10 s transfers…",
        "options": [
          "More energy because its rating is greater",
          "The same energy because both are appliances",
          "Less energy: 2000 J rather than 6000 J"
        ],
        "answer": 2,
        "why": "Compare power × duration.",
        "concept": "el3.appliances"
      },
      {
        "id": "el3.c-appliances10",
        "prompt": "Charge flowing through a heater…",
        "options": [
          "Transfers energy without being consumed",
          "Is converted entirely to thermal energy",
          "Disappears at the neutral terminal"
        ],
        "answer": 0,
        "why": "Charge is conserved; energy is transferred.",
        "concept": "el3.appliances"
      }
    ]
  },
  {
    "id": "science.physics.electricity.grid",
    "title": "The National Grid",
    "short": "The National Grid",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.4.3"
    ],
    "combinedRefs": [
      "2.4.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 30,
    "big": "The National Grid links power stations and consumers through cables and transformers. Step-up transformers increase potential difference before transmission. Step-down transformers reduce it before domestic use, ultimately to about 230 V. Transformers transfer energy; they do not create it.",
    "learn": [
      {
        "title": "Follow the network",
        "text": "The National Grid links power stations and consumers through cables and transformers. Step-up transformers increase potential difference before transmission. Step-down transformers reduce it before domestic use, ultimately to about 230 V. Transformers transfer energy; they do not create it.",
        "scene": "el3:grid:0",
        "process": false
      },
      {
        "title": "High voltage, lower current",
        "text": "For a given power transfer, increasing potential difference reduces current because P = VI. Heating in the cables depends on I²R: lower current means less power dissipated for the same cable resistance. Follow the worked comparison: double transmission voltage, halve current, quarter the cable heating.",
        "scene": "el3:grid:1",
        "process": true,
        "processFilm": "el3-grid"
      },
      {
        "title": "Keep the account honest",
        "text": "Our comparison holds sending power and total line resistance fixed. It calculates current = sending power / sending voltage, cable loss = I²R, and received power = sending power − cable loss. The transformer blocks show their purpose only. Real networks have additional losses, regulation and changing demand; low current alone does not mean low delivered power.",
        "scene": "el3:grid:2",
        "process": false
      },
      {
        "title": "Explain the design",
        "text": "Explain the full chain: step up voltage → lower current for the same power → less cable heating → step down for consumers. Use all four voltage/power settings to compare loss. Toy voltages are deliberately below real transmission values and must not be treated as National Grid operating specifications.",
        "scene": "el3:grid:3",
        "process": false
      },
      {
        "title": "Higher: ideal transformer power balance",
        "text": "For a 100% efficient transformer, VpIp = VsIs. Input power equals output power: 120 V × 2 A = 240 V × 1 A. If voltage doubles, current halves for the same power. Trilogy requires this in 6.2.4.3; separate Physics returns to this relationship with transformer construction and turns ratio in 4.7.3.4. Those later mechanisms are not taught here.",
        "scene": "el3:grid:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [
      "science.physics.electricity.power"
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "MS3b",
      "MS3c"
    ],
    "widget": "el3-grid",
    "practice": [
      {
        "id": "el3.p-grid1",
        "prompt": "The National Grid links stations and consumers with…",
        "options": [
          "Cables and transformers",
          "Only batteries in series",
          "Only neutral wires"
        ],
        "answer": 0,
        "why": "It is a transmission network.",
        "concept": "el3.grid"
      },
      {
        "id": "el3.p-grid2",
        "prompt": "Before transmission a step-up transformer…",
        "options": [
          "Creates extra energy",
          "Increases potential difference",
          "Necessarily increases current at fixed power"
        ],
        "answer": 1,
        "why": "Higher voltage allows lower current for a given power.",
        "concept": "el3.grid"
      },
      {
        "id": "el3.p-grid3",
        "prompt": "Cable heating at fixed resistance depends on…",
        "options": [
          "I/R only",
          "Voltage colour on a map",
          "I²R"
        ],
        "answer": 2,
        "why": "Lower current reduces heating strongly.",
        "concept": "el3.grid"
      },
      {
        "id": "el3.p-grid4",
        "prompt": "Before domestic use step-down transformers…",
        "options": [
          "Reduce potential difference",
          "Eliminate all losses",
          "Make the supply dc automatically"
        ],
        "answer": 0,
        "why": "Domestic supply needs a much lower voltage.",
        "concept": "el3.grid"
      },
      {
        "id": "el3.practice-gridHT",
        "prompt": "An ideal transformer takes 100 V at 3 A and outputs 300 V. Output current?",
        "options": [
          "1 A",
          "9 A",
          "0.5 A"
        ],
        "answer": 0,
        "why": "Input power 300 W equals output power, so 300/300 = 1 A.",
        "concept": "el3.grid"
      }
    ],
    "check": [
      {
        "id": "el3.c-grid5",
        "prompt": "For fixed power, doubling transmission voltage…",
        "options": [
          "Doubles current",
          "Halves current",
          "Leaves current unchanged"
        ],
        "answer": 1,
        "why": "I = P/V.",
        "concept": "el3.grid"
      },
      {
        "id": "el3.c-grid6",
        "prompt": "If current halves and cable resistance is unchanged, heating power…",
        "options": [
          "Falls to one half",
          "Doubles",
          "Falls to one quarter"
        ],
        "answer": 2,
        "why": "(I/2)²R = I²R/4.",
        "concept": "el3.grid"
      },
      {
        "id": "el3.c-grid7",
        "prompt": "A 1000 W input with 40 W cable loss leaves…",
        "options": [
          "960 W after the cable",
          "1040 W after the cable",
          "Exactly 1000 W after the cable"
        ],
        "answer": 0,
        "why": "Power is conserved in the loss account.",
        "concept": "el3.grid"
      },
      {
        "id": "el3.c-grid8",
        "prompt": "Why step down near consumers?",
        "options": [
          "High transmission voltage contains no energy",
          "Domestic equipment needs a much lower potential difference",
          "Transformers consume all charge"
        ],
        "answer": 1,
        "why": "Connect transmission efficiency to consumer requirements.",
        "concept": "el3.grid"
      },
      {
        "id": "el3.c-grid9",
        "prompt": "A high-voltage line can transfer large power with low current because…",
        "options": [
          "Power equals current alone",
          "Current must be destroyed in transformers",
          "Power depends on both voltage and current"
        ],
        "answer": 2,
        "why": "P = VI.",
        "concept": "el3.grid"
      },
      {
        "id": "el3.c-grid10",
        "prompt": "The model omits real network losses beyond cable heating. Therefore…",
        "options": [
          "It illustrates a trend, not an exact real-grid efficiency",
          "It proves every real grid is lossless",
          "Every displayed toy voltage is an actual UK transmission value"
        ],
        "answer": 0,
        "why": "Recognise stated assumptions.",
        "concept": "el3.grid"
      },
      {
        "id": "el3.check-gridHT",
        "prompt": "An ideal transformer takes 200 V at 4 A and outputs 400 V. Output current?",
        "options": [
          "2 A",
          "8 A",
          "0.5 A"
        ],
        "answer": 0,
        "why": "800 W divided by 400 V = 2 A.",
        "concept": "el3.grid"
      }
    ],
    "higherQuestions": [
      "el3.practice-gridHT",
      "el3.check-gridHT"
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
        "transformer"
      ],
      "completionKey": "el3Passed"
    }
  }
];
export const el3Concepts={"el3.sources": "AC and DC sources", "el3.mains": "Mains wiring and safety", "el3.power": "Electrical power", "el3.appliances": "Energy transfers in appliances", "el3.grid": "The National Grid"};
