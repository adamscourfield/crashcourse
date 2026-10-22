export const el2Lessons=[
  {
    "id": "science.physics.electricity.series",
    "title": "Series circuits: current, voltage & resistance",
    "short": "Series circuits: current, voltage & resistance",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.2"
    ],
    "combinedRefs": [
      "2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 40,
    "big": "Components in series share one conducting path. The same current passes through every component; it is not used up. Opening any point breaks this simple loop and stops its current. Circuit position is electrical connectivity, not where equipment sits on a desk.",
    "learn": [
      {
        "title": "One continuous path",
        "text": "Components in series share one conducting path. The same current passes through every component; it is not used up. Opening any point breaks this simple loop and stops its current. Circuit position is electrical connectivity, not where equipment sits on a desk.",
        "scene": "el2:series:0",
        "process": false
      },
      {
        "title": "Share the potential difference",
        "text": "The supply potential difference equals the sum across series components. With 6 V across 10Ω and 20Ω, totalR=30Ω, I=0.2 A everywhere, and the potential differences are 2 V and 4 V. Equal resistors sharepd equally; unequal resistors need not. Add the component potential differences to check the account.",
        "scene": "el2:series:1",
        "process": true,
        "processFilm": "el2-series"
      },
      {
        "title": "Use equivalent resistance",
        "text": "For series resistors, Rtotal=R 1+R 2. Replace a series group by its equivalent resistance when calculating I=V/Rtotal, then calculate each componentpd from its common current. Adding a positive resistance in series raises totalR and lowers current at fixed supplypd. This assumes ordinary resistors and an ideal source.",
        "scene": "el2:series:2",
        "process": false
      },
      {
        "title": "Design and check a measurement",
        "text": "Place an ammeter in the series path; connect a voltmeter across the selected component. Use a suitable low-voltage dc supply, check connections with the supply off and control resistor temperature. Compare all four source/resistor settings; the diagram and numbers describe an ideal circuit, not apparatus competence.",
        "scene": "el2:series:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.ohm"
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "MS1c",
      "MS3b",
      "MS3c",
      "MS3d",
      "AT7"
    ],
    "widget": "el2-series",
    "practice": [
      {
        "id": "el2.p-series1",
        "prompt": "In a simple series loop current is…",
        "options": [
          "The same through every component",
          "Used up by the first resistor",
          "Different because a resistor is drawn higher"
        ],
        "answer": 0,
        "why": "Charge does not accumulate in steady state.",
        "concept": "el2.series"
      },
      {
        "id": "el2.p-series2",
        "prompt": "For two series resistors total resistance is…",
        "options": [
          "Always less than either resistor",
          "R 1+R 2",
          "The same as the smaller resistor"
        ],
        "answer": 1,
        "why": "Series resistances add.",
        "concept": "el2.series"
      },
      {
        "id": "el2.p-series3",
        "prompt": "A 6 V source across 10Ω and 20Ω gives current…",
        "options": [
          "0.6 A",
          "3 A",
          "0.2 A"
        ],
        "answer": 2,
        "why": "Total 30Ω;6/30=0.2.",
        "concept": "el2.series"
      },
      {
        "id": "el2.p-series4",
        "prompt": "The component potential differences in a series loop…",
        "options": [
          "Add to the supplypd",
          "Must each equal the full supplypd",
          "Are always equal regardless of resistance"
        ],
        "answer": 0,
        "why": "Potential difference is shared.",
        "concept": "el2.series"
      }
    ],
    "check": [
      {
        "id": "el2.c-series5",
        "prompt": "Fresh circuit:4Ω and 6Ω in series across 5 V. Current is…",
        "options": [
          "2 A",
          "0.5 A",
          "50 A"
        ],
        "answer": 1,
        "why": "Total 10Ω;5/10=0.5.",
        "concept": "el2.series"
      },
      {
        "id": "el2.c-series6",
        "prompt": "A series current 0.3 A through 20Ω givespd…",
        "options": [
          "66.7 V",
          "0.015 V",
          "6 V"
        ],
        "answer": 2,
        "why": "V=IR.",
        "concept": "el2.series"
      },
      {
        "id": "el2.c-series7",
        "prompt": "Two identical resistors in series across 8 V each havepd…",
        "options": [
          "4 V",
          "8 V",
          "16 V"
        ],
        "answer": 0,
        "why": "EqualR and commonI give equal shares.",
        "concept": "el2.series"
      },
      {
        "id": "el2.c-series8",
        "prompt": "Adding another positive resistance in series at fixedpd…",
        "options": [
          "Creates extra charge",
          "Reduces current",
          "Always increases current"
        ],
        "answer": 1,
        "why": "The equivalent resistance increases.",
        "concept": "el2.series"
      },
      {
        "id": "el2.c-series9",
        "prompt": "Opening one point in the only loop…",
        "options": [
          "Only stops current after the gap",
          "Keeps full current through every resistor",
          "Stops current throughout that loop"
        ],
        "answer": 2,
        "why": "There is no closed source-to-component path.",
        "concept": "el2.series"
      },
      {
        "id": "el2.c-series10",
        "prompt": "To measurepd across one resistor connect a voltmeter…",
        "options": [
          "Across its two terminals",
          "In the only series path",
          "Instead of the supply"
        ],
        "answer": 0,
        "why": "A voltmeter compares two points.",
        "concept": "el2.series"
      }
    ]
  },
  {
    "id": "science.physics.electricity.parallel",
    "title": "Parallel circuits: branches & shared voltage",
    "short": "Parallel circuits: branches & shared voltage",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.2"
    ],
    "combinedRefs": [
      "2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 40,
    "big": "Parallel components connect between the same two junctions and share the same potential difference when their branches are closed. Each branch is an additional route for current. Drawings can bend wires without changing which nodes connect; a crossing without a junction dot is not automatically a connection.",
    "learn": [
      {
        "title": "Identify the branch junctions",
        "text": "Parallel components connect between the same two junctions and share the same potential difference when their branches are closed. Each branch is an additional route for current. Drawings can bend wires without changing which nodes connect; a crossing without a junction dot is not automatically a connection.",
        "scene": "el2:parallel:0",
        "process": false
      },
      {
        "title": "Split and rejoin the current",
        "text": "The source current equals the sum of branch currents. At 6 V,10Ω draws 0.6 A and 20Ω draws 0.3 A: total 0.9 A. Current splits equally only for equal branch resistances under the same conditions. Charge is conserved where currents join; it is not duplicated at a junction.",
        "scene": "el2:parallel:1",
        "process": true,
        "processFilm": "el2-parallel"
      },
      {
        "title": "Add or open a branch",
        "text": "Adding a closed parallel resistor gives another conducting path. At fixed supplypd the source current rises and total resistance becomes less than the smallest individual branch resistance. Opening one branch stops its current; another complete branch can still operate. We do not require a formula or numerical calculation for parallel equivalent resistance here.",
        "scene": "el2:parallel:2",
        "process": false
      },
      {
        "title": "Check the conditions",
        "text": "Our ideal source holds 6/12 V across each closed branch while branch 2 is 10Ω,20Ω or open. Predict source current by calculating or adding branch currents, then compare all six settings. The open branch has a gap and zero current; no full-sourcepd is claimed across its isolated resistor. Real supply resistance/heating and unrestricted circuit construction remain further evidence.",
        "scene": "el2:parallel:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.ohm"
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "MS1c",
      "MS3b",
      "MS3c",
      "MS3d",
      "AT7"
    ],
    "widget": "el2-parallel",
    "practice": [
      {
        "id": "el2.p-parallel1",
        "prompt": "Closed parallel branches between the same nodes have…",
        "options": [
          "The same potential difference",
          "Always the same current",
          "No resistance"
        ],
        "answer": 0,
        "why": "Both branch ends connect to the same pair of nodes.",
        "concept": "el2.parallel"
      },
      {
        "id": "el2.p-parallel2",
        "prompt": "The total source current equals…",
        "options": [
          "Only the largest branch current",
          "The sum of branch currents",
          "Each branch current divided by their sum"
        ],
        "answer": 1,
        "why": "Charge is conserved at junctions.",
        "concept": "el2.parallel"
      },
      {
        "id": "el2.p-parallel3",
        "prompt": "At 6 V,10Ω and 20Ω branches draw…",
        "options": [
          "Both 0.9 A",
          "6 A and 12 A",
          "0.6 A and 0.3 A"
        ],
        "answer": 2,
        "why": "Each closed branch uses I=V/R.",
        "concept": "el2.parallel"
      },
      {
        "id": "el2.p-parallel4",
        "prompt": "Adding a closed parallel resistor at fixed sourcepd…",
        "options": [
          "Raises total current and lowers total resistance",
          "Always raises total resistance",
          "Destroys current at the junction"
        ],
        "answer": 0,
        "why": "It provides another path.",
        "concept": "el2.parallel"
      }
    ],
    "check": [
      {
        "id": "el2.c-parallel5",
        "prompt": "Fresh branch currents 0.25 A and 0.40 A give total…",
        "options": [
          "0.15 A",
          "0.65 A",
          "0.10 A"
        ],
        "answer": 1,
        "why": "Add currents that join.",
        "concept": "el2.parallel"
      },
      {
        "id": "el2.c-parallel6",
        "prompt": "If branch 2 opens while branch 1 remains complete…",
        "options": [
          "All possible source current must stop",
          "Branch 1 charge is used up",
          "Branch 1 can still carry current"
        ],
        "answer": 2,
        "why": "The complete path through branch 1 remains.",
        "concept": "el2.parallel"
      },
      {
        "id": "el2.c-parallel7",
        "prompt": "Total resistance of two positive parallel resistors is…",
        "options": [
          "Less than the smaller individual resistance",
          "Their sum",
          "Always equal to the larger resistance"
        ],
        "answer": 0,
        "why": "More conducting paths reduce equivalent opposition.",
        "concept": "el2.parallel"
      },
      {
        "id": "el2.c-parallel8",
        "prompt": "Equal branch currents require…",
        "options": [
          "Only equal drawn wire length on screen",
          "Equal resistances under the samepd and conditions",
          "Only the same symbol colour"
        ],
        "answer": 1,
        "why": "Current division depends on branch resistance.",
        "concept": "el2.parallel"
      },
      {
        "id": "el2.c-parallel9",
        "prompt": "Three closed branches draw 0.1,0.2,0.3 A. Total is…",
        "options": [
          "0.3 A",
          "0.006 A",
          "0.6 A"
        ],
        "answer": 2,
        "why": "Sum every branch at the junction.",
        "concept": "el2.parallel"
      },
      {
        "id": "el2.c-parallel10",
        "prompt": "A device directly across an ideal 12 V source haspd…",
        "options": [
          "12 V if its branch is closed",
          "6 V automatically because another branch exists",
          "24 V because current splits"
        ],
        "answer": 0,
        "why": "Parallel branches share sourcepd.",
        "concept": "el2.parallel"
      }
    ]
  },
  {
    "id": "science.physics.electricity.combinations",
    "title": "Resistor combinations: practical preparation",
    "short": "Resistor combinations: practical preparation",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.1.3",
      "2.2"
    ],
    "combinedRefs": [
      "2.1.3",
      "2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 40,
    "big": "Two 10Ω resistors connected in series give one path and 20Ω total. Connected in parallel they give two paths, draw more total current at the samepd and have lower total resistance than either resistor. Trace nodes and paths before deciding which arrangement a drawing shows. The same physical resistors can be connected in either topology.",
    "learn": [
      {
        "title": "Compare topology before measuring",
        "text": "Two 10Ω resistors connected in series give one path and 20Ω total. Connected in parallel they give two paths, draw more total current at the samepd and have lower total resistance than either resistor. Trace nodes and paths before deciding which arrangement a drawing shows. The same physical resistors can be connected in either topology.",
        "scene": "el2:combinations:0",
        "process": false
      },
      {
        "title": "Use appropriate instruments",
        "text": "Use a suitable low-voltage dc source, ammeter in the source series path and voltmeter across the group under test. To measure one resistor, place the voltmeter across that resistor instead. Never connect an ammeter straight across the source. Switch off before changing connections; check meter ranges and connections with school supervision.",
        "scene": "el2:combinations:1",
        "process": true,
        "processFilm": "el2-combinations"
      },
      {
        "title": "Control and compare",
        "text": "Use the same resistors, comparable constant temperature and the same supplypd when comparing arrangements. Record topology, component resistances, sourcepd and total current, with repeated readings. For series calculate equivalentR and predict current. For parallel compare measured total current with the branch-current sum and explain the lower equivalent resistance qualitatively; no parallelR formula is required.",
        "scene": "el2:combinations:2",
        "process": false
      },
      {
        "title": "Complete the preparation, not the physical practical",
        "text": "Together with the existing wire-length lesson, this covers the planned teaching preparation for Physics RP 3 / Trilogy RP 15: wire length at constant temperature and series/parallel resistor combinations, AT 1/6/7. Virtual results do not certify real setup, reading instruments, uncertainty evaluation, unrestricted drawings/graphs or physical practical competence.",
        "scene": "el2:combinations:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.ohm",
      "science.physics.electricity.series",
      "science.physics.electricity.parallel"
    ],
    "skills": [
      "WS1.4",
      "WS2.2",
      "WS2.3",
      "AT1",
      "AT6",
      "AT7"
    ],
    "widget": "el2-combinations",
    "practice": [
      {
        "id": "el2.p-combinations1",
        "prompt": "A series pair and a parallel pair differ because…",
        "options": [
          "Their junctions create one path or alternative paths",
          "Only their colours differ",
          "Current is destroyed in one topology"
        ],
        "answer": 0,
        "why": "Trace electrical connections.",
        "concept": "el2.combinations"
      },
      {
        "id": "el2.p-combinations2",
        "prompt": "For a group measurement the voltmeter goes…",
        "options": [
          "In the source series path",
          "Across the whole group",
          "Directly in place of the ammeter"
        ],
        "answer": 1,
        "why": "Measure the same group whose total current is recorded.",
        "concept": "el2.combinations"
      },
      {
        "id": "el2.p-combinations3",
        "prompt": "A fair topology comparison should keep…",
        "options": [
          "All component values changing randomly",
          "Only the worksheet heading fixed",
          "The same resistors, sourcepd and comparable temperature"
        ],
        "answer": 2,
        "why": "Control alternative causes.",
        "concept": "el2.combinations"
      },
      {
        "id": "el2.p-combinations4",
        "prompt": "Before changing circuit connections…",
        "options": [
          "Switch off the source and check the plan",
          "Connect an ammeter across the source",
          "Heat every resistor as much as possible"
        ],
        "answer": 0,
        "why": "Use supervised school procedures.",
        "concept": "el2.combinations"
      }
    ],
    "check": [
      {
        "id": "el2.c-combinations5",
        "prompt": "Fresh series resistors 3Ω and 5Ω have equivalentR…",
        "options": [
          "2Ω",
          "8Ω",
          "15Ω"
        ],
        "answer": 1,
        "why": "Series values add.",
        "concept": "el2.combinations"
      },
      {
        "id": "el2.c-combinations6",
        "prompt": "A parallel pair has measured branch currents 0.2 A and 0.5 A. Source current should be…",
        "options": [
          "0.3 A",
          "0.1 A",
          "0.7 A"
        ],
        "answer": 2,
        "why": "Check the junction current sum.",
        "concept": "el2.combinations"
      },
      {
        "id": "el2.c-combinations7",
        "prompt": "At fixedpd a parallel pair normally draws more source current than the same series pair because…",
        "options": [
          "It offers alternative paths and lower total resistance",
          "It creates charge",
          "Parallel current ignores resistance"
        ],
        "answer": 0,
        "why": "Explain equivalent opposition qualitatively.",
        "concept": "el2.combinations"
      },
      {
        "id": "el2.c-combinations8",
        "prompt": "The resistance practical also requires…",
        "options": [
          "Only watching the combination animation",
          "Wire-length investigation at constant temperature",
          "Only naming the ammeter"
        ],
        "answer": 1,
        "why": "Both parts of RP 3/RP 15 matter.",
        "concept": "el2.combinations"
      },
      {
        "id": "el2.c-combinations9",
        "prompt": "Unexpected readings should lead to…",
        "options": [
          "Discarding every inconvenient result without reason",
          "Assuming energy has been created",
          "Checking connections, units, temperature and repeats"
        ],
        "answer": 2,
        "why": "Evaluate possible errors and anomalies.",
        "concept": "el2.combinations"
      },
      {
        "id": "el2.c-combinations10",
        "prompt": "Completing this virtual investigation establishes…",
        "options": [
          "Preparation and interpretation, with physical skills still separate",
          "Full practical competence automatically",
          "That school measurements are unnecessary"
        ],
        "answer": 0,
        "why": "Constrained simulation is not hands-on evidence.",
        "concept": "el2.combinations"
      }
    ]
  },
  {
    "id": "science.physics.electricity.thermistor",
    "title": "Thermistors: temperature sensing & thermostats",
    "short": "Thermistors: temperature sensing & thermostats",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.1.4"
    ],
    "combinedRefs": [
      "2.1.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 40,
    "big": "For the NTC thermistor behaviour required here, resistance decreases as temperature increases. At fixed potential difference, a lower resistance gives a larger current through the sensor. This differs from a metal filament whose resistance rises when it heats. State which component and conditions are being compared.",
    "learn": [
      {
        "title": "Temperature changes resistance",
        "text": "For the NTC thermistor behaviour required here, resistance decreases as temperature increases. At fixed potential difference, a lower resistance gives a larger current through the sensor. This differs from a metal filament whose resistance rises when it heats. State which component and conditions are being compared.",
        "scene": "el2:thermistor:0",
        "process": false
      },
      {
        "title": "Follow a sensing and control sequence",
        "text": "A thermostat can use a thermistor as a temperature sensor. A controller compares the sensed condition with a chosen threshold and changes the heater output. In our conceptual example heating is on below 40°C and off at or above 40°C. The thermistor does not supply heater energy or decide the control action on its own; a controller/power circuit is represented as a block.",
        "scene": "el2:thermistor:1",
        "process": true,
        "processFilm": "el2-thermistor"
      },
      {
        "title": "Investigate the relationship",
        "text": "Measure sensor temperature, current through it andpd across it; calculate R=V/I for each paired reading. Use series ammeter and parallel voltmeter, suitable low voltage and low current to limit self-heating. Change temperature while controlling other conditions, allow readings to settle and repeat. PlotR against temperature and evaluate the falling, non-linear trend. AT 6 opportunity, not a separate new required practical.",
        "scene": "el2:thermistor:2",
        "process": false
      },
      {
        "title": "Interpret the original model",
        "text": "Compare 20/60°C and 2/4 V; predict current in mA from the supplied sensor resistance. Our bounded curve R=1000/[1+0.04(T−20)] is a toy relation, not a required equation or a device calibration. The 40°C control threshold is arbitrary. No potential-divider/transistor theory is needed here; independent circuit/graph construction and physical investigation remain further evidence.",
        "scene": "el2:thermistor:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.ohm"
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "MS4c",
      "MS4d",
      "MS4e",
      "AT6"
    ],
    "widget": "el2-thermistor",
    "practice": [
      {
        "id": "el2.p-thermistor1",
        "prompt": "For the NTC thermistor here, increasing temperature…",
        "options": [
          "Decreases resistance",
          "Always increases resistance",
          "Leaves resistance fixed by definition"
        ],
        "answer": 0,
        "why": "Specify the component response.",
        "concept": "el2.thermistor"
      },
      {
        "id": "el2.p-thermistor2",
        "prompt": "At fixedpd, decreasing thermistorR makes sensor current…",
        "options": [
          "Disappear",
          "Increase",
          "Always decrease"
        ],
        "answer": 1,
        "why": "I=V/R.",
        "concept": "el2.thermistor"
      },
      {
        "id": "el2.p-thermistor3",
        "prompt": "A thermostat uses the thermistor mainly to…",
        "options": [
          "Provide all heater energy",
          "Guarantee a safe temperature without any circuit",
          "Sense temperature for a controller"
        ],
        "answer": 2,
        "why": "The controller interprets the sensing change.",
        "concept": "el2.thermistor"
      },
      {
        "id": "el2.p-thermistor4",
        "prompt": "Why use a low measuring current?",
        "options": [
          "To limit sensor self-heating",
          "To make charge vanish",
          "To remove the need for a voltmeter"
        ],
        "answer": 0,
        "why": "Measurement should not substantially change the temperature being studied.",
        "concept": "el2.thermistor"
      }
    ],
    "check": [
      {
        "id": "el2.c-thermistor5",
        "prompt": "Fresh sensor readings 3 V and 0.002 A giveR…",
        "options": [
          "0.006Ω",
          "1500Ω",
          "666.7Ω"
        ],
        "answer": 1,
        "why": "R=3/0.002.",
        "concept": "el2.thermistor"
      },
      {
        "id": "el2.c-thermistor6",
        "prompt": "Our thermostat is set to heat below 40°C. At 45°C it commands…",
        "options": [
          "Heater on forever",
          "The thermistor to create energy",
          "Heater off"
        ],
        "answer": 2,
        "why": "This is the stated controller rule, not a universal sensor action.",
        "concept": "el2.thermistor"
      },
      {
        "id": "el2.c-thermistor7",
        "prompt": "A useful thermistor investigation plots…",
        "options": [
          "Resistance against measured temperature",
          "Light level against resistor colour only",
          "Only the controller label"
        ],
        "answer": 0,
        "why": "Record paired quantities and units.",
        "concept": "el2.thermistor"
      },
      {
        "id": "el2.c-thermistor8",
        "prompt": "A falling curvedR–temperature graph suggests…",
        "options": [
          "An ohmic constantR at every temperature",
          "Non-constant resistance with temperature",
          "No possible current"
        ],
        "answer": 1,
        "why": "Compare the relevant axes and conditions.",
        "concept": "el2.thermistor"
      },
      {
        "id": "el2.c-thermistor9",
        "prompt": "The thermostat switching threshold is…",
        "options": [
          "A universal 40°C thermistor property",
          "The only temperature a thermistor can sense",
          "Chosen by the control design"
        ],
        "answer": 2,
        "why": "A sensor property and a chosen control rule are distinct.",
        "concept": "el2.thermistor"
      },
      {
        "id": "el2.c-thermistor10",
        "prompt": "A sensor reaches its environment’s temperature only after…",
        "options": [
          "Time to settle; readings should be checked",
          "Exactly the animation’s playback time for every device",
          "A mandatory infinite wait"
        ],
        "answer": 0,
        "why": "Allow for thermal response without treating toy timing as calibration.",
        "concept": "el2.thermistor"
      }
    ]
  },
  {
    "id": "science.physics.electricity.ldr",
    "title": "LDRs: light sensing & automatic lights",
    "short": "LDRs: light sensing & automatic lights",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.1.4"
    ],
    "combinedRefs": [
      "2.1.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 40,
    "big": "An LDR has lower resistance at higher light intensity. In darkness its resistance is higher. At fixedpd, more illumination usually means more sensor current. Do not confuse incoming arrows on an LDR symbol with outgoing light arrows on an LED. An LDR senses light; it does not emit the control lamp’s light or supply its energy.",
    "learn": [
      {
        "title": "Light changes resistance",
        "text": "An LDR has lower resistance at higher light intensity. In darkness its resistance is higher. At fixedpd, more illumination usually means more sensor current. Do not confuse incoming arrows on an LDR symbol with outgoing light arrows on an LED. An LDR senses light; it does not emit the control lamp’s light or supply its energy.",
        "scene": "el2:ldr:0",
        "process": false
      },
      {
        "title": "Switch a lamp on in the dark",
        "text": "An automatic light can use an LDR as a sensor and a separate controller/power stage. Our controller commands the lamp on below light-index 50 and off at or above 50. Sensor current is lower in darkness, but the controller is configured to turn the lamp on then. The intended output is a design choice, not a universal direct consequence of low sensor current.",
        "scene": "el2:ldr:1",
        "process": true,
        "processFilm": "el2-ldr"
      },
      {
        "title": "Measure and compare fairly",
        "text": "Use a suitable low-voltage measuring circuit: ammeter in series, voltmeter across the LDR. Change illumination while controlling sourcepd, sensor temperature, background light and geometry. Record pairedV/I readings and calculateR; repeat and plotR against a stated light measure or controlled light setting. AT 6 opportunity. Arbitrary brightness labels are not calibrated lux measurements.",
        "scene": "el2:ldr:2",
        "process": false
      },
      {
        "title": "Apply limits to the evidence",
        "text": "Compare darkness/high illumination indices 0/100 and sources 2/4 V using suppliedR. Our original relation R=10000/(1+0.09L) is only a bounded teaching curve. Lamp threshold 50 and animation timing are arbitrary, with an ideal controller and no hysteresis. Real applications must consider response time, changing ambient light and suitable circuit design. Freehand graphs/drawings and real measurements remain separate evidence.",
        "scene": "el2:ldr:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.ohm"
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "MS4c",
      "MS4d",
      "MS4e",
      "AT6"
    ],
    "widget": "el2-ldr",
    "practice": [
      {
        "id": "el2.p-ldr1",
        "prompt": "As light intensity increases an LDR’s resistance…",
        "options": [
          "Decreases",
          "Must increase",
          "Is always zero"
        ],
        "answer": 0,
        "why": "State the required light-response trend.",
        "concept": "el2.ldr"
      },
      {
        "id": "el2.p-ldr2",
        "prompt": "In darkness at fixedpd the sensor current is generally…",
        "options": [
          "Larger becauseR is zero",
          "Smaller becauseR is higher",
          "Unrelated to resistance"
        ],
        "answer": 1,
        "why": "Use I=V/R.",
        "concept": "el2.ldr"
      },
      {
        "id": "el2.p-ldr3",
        "prompt": "An LDR differs from an LED because it…",
        "options": [
          "Always emits control light",
          "Has arrows for outgoing light only",
          "Changes resistance with received light"
        ],
        "answer": 2,
        "why": "Distinguish the sensor from an emitting component.",
        "concept": "el2.ldr"
      },
      {
        "id": "el2.p-ldr4",
        "prompt": "A dark-operated lamp can turn on when sensor current falls because…",
        "options": [
          "A controller interprets the sensor and switches a separate output",
          "The sensor current must directly power a brighter lamp",
          "Charge is being created"
        ],
        "answer": 0,
        "why": "Sensing and power/control functions differ.",
        "concept": "el2.ldr"
      }
    ],
    "check": [
      {
        "id": "el2.c-ldr5",
        "prompt": "Fresh LDR readings 4 V and 0.001 A giveR…",
        "options": [
          "0.004Ω",
          "4000Ω",
          "250Ω"
        ],
        "answer": 1,
        "why": "R=4/0.001.",
        "concept": "el2.ldr"
      },
      {
        "id": "el2.c-ldr6",
        "prompt": "Our controller turns on below light-index 50. At index 20 it commands…",
        "options": [
          "Lamp off",
          "A universal real-lux alarm",
          "Lamp on"
        ],
        "answer": 2,
        "why": "Apply the stated arbitrary rule.",
        "concept": "el2.ldr"
      },
      {
        "id": "el2.c-ldr7",
        "prompt": "For a fair light-response test keep controlled…",
        "options": [
          "Sourcepd, background/geometry and sensor temperature",
          "Only the result you hope to see",
          "Every other factor changing too"
        ],
        "answer": 0,
        "why": "Control alternative causes.",
        "concept": "el2.ldr"
      },
      {
        "id": "el2.c-ldr8",
        "prompt": "The app’s light-index 100 means…",
        "options": [
          "A measured universal light intensity",
          "A stated illustrative setting, not calibrated 100 lux",
          "Every LDR has exactly the sameR"
        ],
        "answer": 1,
        "why": "Original indices do not claim calibration.",
        "concept": "el2.ldr"
      },
      {
        "id": "el2.c-ldr9",
        "prompt": "To find sensorR measure…",
        "options": [
          "Only lamp brightness",
          "Only the controller threshold",
          "pd across and current through the same sensor"
        ],
        "answer": 2,
        "why": "Use pairedV/I readings.",
        "concept": "el2.ldr"
      },
      {
        "id": "el2.c-ldr10",
        "prompt": "A controller that switches on in bright light instead is…",
        "options": [
          "A different chosen control action using the same sensor trend",
          "Proof LDRR rises in light",
          "Impossible for any circuit"
        ],
        "answer": 0,
        "why": "Response and interpretation are distinct.",
        "concept": "el2.ldr"
      }
    ]
  }
];
export const el2Concepts={"el2.series": "Series circuits: current, voltage & resistance", "el2.parallel": "Parallel circuits: branches & shared voltage", "el2.combinations": "Resistor combinations: practical preparation", "el2.thermistor": "Thermistors: temperature sensing & thermostats", "el2.ldr": "LDRs: light sensing & automatic lights"};
