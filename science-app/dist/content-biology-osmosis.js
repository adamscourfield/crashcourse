export const osmosisLessons=[
  {
    "id": "science.biology.cells.osmosis",
    "title": "Osmosis & water balance",
    "short": "Water across a selective barrier",
    "refs": [
      "1.3.2"
    ],
    "minutes": 30,
    "widget": "osmosis-lab",
    "topicId": "science.biology.cell-biology",
    "big": "Osmosis transfers water across a partially permeable membrane from a dilute solution to a more concentrated one. Use signed mass changes to describe the evidence.",
    "learn": [
      {
        "title": "Follow water, not dissolved solute",
        "text": "Osmosis is the diffusion of water from a dilute solution to a more concentrated solution through a partially permeable membrane. Dilute here means less dissolved solute and relatively more water. In the simplified model, the membrane allows water to pass but not the solute. The cell membrane provides this selective barrier; a plant cell wall is not a substitute for it.",
        "scene": "osmo:dilute"
      },
      {
        "title": "Predict a plant cell’s response",
        "text": "If the solution outside a plant cell is more dilute than the cell contents, water moves into the cell overall by osmosis. The vacuole can expand and the contents press against the supporting wall. If the outside is more concentrated, net water movement is out and the cell loses water. Direction depends on the relative solutions, not a rule that water always moves into cells.",
        "scene": "osmo:concentrated"
      },
      {
        "title": "Net zero does not mean still",
        "text": "Water molecules move in both directions. With equal water concentrations in this simplified model there is no net transfer, even though individual molecules still cross. The model uses particles to explain direction; it does not reproduce every dissolved substance, cell pressure or real tissue measurement. A zero mass change can support no net water transfer over the observation period, not proof that every molecule stopped.",
        "scene": "osmo:equal"
      },
      {
        "title": "Calculate signed changes and uptake rates",
        "text": "Percentage mass change = (final mass − initial mass) ÷ initial mass ×100. A sample changing from2.0 g to2.2 g gains10%;2.0 g to1.8 g gives−10%, a10% loss. Use the initial mass in the denominator. Under a stated assumption that mass change is due to water, mean uptake rate = mass gained ÷ elapsed time: a0.6 g gain in3 h is0.2 g/h. This is an average mass-change proxy, not a claim to measure each molecule or a constant instantaneous rate.",
        "scene": "osmo:dilute"
      }
    ],
    "practice": [
      {
        "id": "bio.p-osmo1",
        "prompt": "A membrane allows water but not the supplied solute to pass. Water moves overall…",
        "options": [
          "From the more dilute to the more concentrated solution",
          "Only from concentrated to dilute",
          "Only if solute also crosses"
        ],
        "answer": 0,
        "why": "Osmosis describes water transfer across a partially permeable membrane.",
        "concept": "bio.osmosis-direction"
      },
      {
        "id": "bio.p-osmo2",
        "prompt": "A plant-tissue sample changes from4.0 g to4.4 g. Signed percentage mass change?",
        "type": "number",
        "answer": 10,
        "tolerance": 0.001,
        "unit": "%",
        "why": "(4.4−4.0)/4.0×100=+10%.",
        "concept": "bio.osmosis-percent"
      },
      {
        "id": "bio.p-osmo3",
        "prompt": "A sample changes from5.0 g to4.0 g. Signed percentage mass change?",
        "type": "number",
        "answer": -20,
        "tolerance": 0.001,
        "unit": "%",
        "why": "(4−5)/5×100=−20%.",
        "concept": "bio.osmosis-percent"
      },
      {
        "id": "bio.p-osmo4",
        "prompt": "Assume all mass gain is water: a0.8 g gain in4 h. Mean uptake rate?",
        "type": "number",
        "answer": 0.2,
        "tolerance": 0.001,
        "unit": "g/h",
        "why": "0.8÷4=0.2 g/h.",
        "concept": "bio.osmosis-rate"
      }
    ],
    "check": [
      {
        "id": "bio.c-osmo1",
        "prompt": "Which definition includes all key conditions?",
        "options": [
          "Net water diffusion from dilute to concentrated through a partially permeable membrane",
          "Net solute movement through any solid wall",
          "Movement of whole cells from high to low temperature"
        ],
        "answer": 0,
        "why": "Water, relative solution concentration and the membrane are all needed.",
        "concept": "bio.osmosis-direction"
      },
      {
        "id": "bio.c-osmo2",
        "prompt": "The outside solution is more concentrated than the plant-cell contents. Net water movement is…",
        "options": [
          "Into the cell regardless of conditions",
          "Out of the cell",
          "Impossible because a wall stops every water molecule"
        ],
        "answer": 1,
        "why": "Water moves from relatively dilute cell contents to the more concentrated outside.",
        "concept": "bio.osmosis-cells"
      },
      {
        "id": "bio.c-osmo3",
        "prompt": "Which structure provides the partially permeable barrier in a plant cell?",
        "options": [
          "Cellulose wall alone",
          "Chloroplast colour",
          "Cell membrane"
        ],
        "answer": 2,
        "why": "The membrane controls passage; the wall mainly supports.",
        "concept": "bio.osmosis-cells"
      },
      {
        "id": "bio.c-osmo4",
        "prompt": "Equal water concentrations across the supplied membrane mean…",
        "options": [
          "Water still crosses both ways, with no net movement",
          "All water molecules stop",
          "Every water molecule must enter the cell"
        ],
        "answer": 0,
        "why": "Random movement persists without an overall transfer.",
        "concept": "bio.osmosis-net"
      },
      {
        "id": "bio.c-osmo5",
        "prompt": "A sample changes from3.0 g to3.6 g. Signed percentage mass change?",
        "type": "number",
        "answer": 20,
        "tolerance": 0.001,
        "unit": "%",
        "why": "0.6/3.0×100=+20%.",
        "concept": "bio.osmosis-percent"
      },
      {
        "id": "bio.c-osmo6",
        "prompt": "A sample changes from8.0 g to6.8 g. Signed percentage mass change?",
        "type": "number",
        "answer": -15,
        "tolerance": 0.001,
        "unit": "%",
        "why": "(6.8−8)/8×100=−15%.",
        "concept": "bio.osmosis-percent"
      },
      {
        "id": "bio.c-osmo7",
        "prompt": "Assume a0.9 g tissue mass gain over3 h is entirely water. Mean uptake rate?",
        "type": "number",
        "answer": 0.3,
        "tolerance": 0.001,
        "unit": "g/h",
        "why": "0.9÷3=0.3 g/h.",
        "concept": "bio.osmosis-rate"
      },
      {
        "id": "bio.c-osmo8",
        "prompt": "A sample’s mass does not change over the interval. What is supported under the water-only mass-change assumption?",
        "options": [
          "The membrane has vanished",
          "No net water uptake during that interval",
          "Every molecule stayed in its original position"
        ],
        "answer": 1,
        "why": "Balanced movement can produce no net mass change.",
        "concept": "bio.osmosis-net"
      }
    ],
    "skills": [
      "WS1.2",
      "MS1a",
      "MS1c"
    ],
    "prerequisites": [
      "science.biology.cells.diffusion",
      "science.biology.cells.cell-structures"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.cells.osmosis-practical",
    "title": "Investigating osmosis",
    "short": "From tissue mass to a graph",
    "refs": [
      "1.3.2"
    ],
    "minutes": 35,
    "widget": "osmosis-practical",
    "topicId": "science.biology.cell-biology",
    "big": "Change solution concentration, control the comparison and use percentage mass change to estimate where the tissue has no net water transfer.",
    "learn": [
      {
        "title": "Compare a range fairly",
        "text": "AQA Biology required practical3 / Trilogy required practical2 investigates the effect of a range of salt or sugar concentrations on plant-tissue mass. The AQA suggested method uses potato cylinders with equal diameter and length, records initial masses, immerses them in measured solutions for a chosen time, then reweighs them. Keep tissue source, cylinder dimensions, immersion time, temperature and solution volume comparable while changing concentration. Suggested handbook methods are not compulsory scripts.",
        "scene": "osmoprac:method"
      },
      {
        "title": "Measure tissue, not surface droplets",
        "text": "Label the solutions and record each sample’s initial mass. After immersion, blot surface liquid gently and consistently before weighing again; retained droplets would increase apparent tissue mass. Avoid squeezing out internal water. Use repeats at each concentration, investigate unusual results and calculate suitable means. A teacher-approved method controls sharp-tool and solution-handling risks; the simulation does not establish safe cutting, weighing or practical competence.",
        "scene": "osmoprac:method"
      },
      {
        "title": "Calculate before plotting",
        "text": "For every sample calculate signed percentage mass change using initial mass. This helps compare samples with different starting masses; it does not remove the need for similar dimensions because surface area and path length affect change over time. A2.5 g sample ending at2.75 g gives+10%. Plot solution concentration on x and mean percentage mass change on y. Show units, suitable scales and a sensible best-fit line or curve rather than claim every point is exact.",
        "scene": "osmoprac:data"
      },
      {
        "title": "Estimate the zero-change concentration",
        "text": "At the graph’s zero-percentage crossing, there is no net mass change over the interval. In the simple model this estimates the solution concentration giving no net water transfer for that tissue. Supplied illustrative points at0.2 mol/dm³,+4% and0.4 mol/dm³,−4% give an interpolated zero near0.3 mol/dm³ if the relationship between them is treated as straight. This is an estimate from that tissue and method, not a universal potato concentration or a measurement of every cell solute.",
        "scene": "osmoprac:graph"
      },
      {
        "title": "Evaluate uncertainty and evidence",
        "text": "More closely spaced concentrations near the crossing and repeated samples can improve the estimate. Keep raw readings so a suspected anomaly can be investigated rather than automatically deleted. Compare spread and measurement precision; a balance rounding to0.01 g does not prove every mass is exact to that amount. Data and graph in this lesson are original illustrative values, not a real laboratory record. Supervised school work, your own graph and explanation remain necessary.",
        "scene": "osmoprac:graph"
      }
    ],
    "practice": [
      {
        "id": "bio.p-osmoprac1",
        "prompt": "To investigate solution concentration, which should be kept comparable?",
        "options": [
          "Cylinder dimensions, immersion time, temperature and solution volume",
          "Only the colour of the label",
          "Every final mass"
        ],
        "answer": 0,
        "why": "These conditions can affect the mass change independently.",
        "concept": "bio.osmoprac-method"
      },
      {
        "id": "bio.p-osmoprac2",
        "prompt": "Why blot each cylinder before its final weighing?",
        "options": [
          "To remove all intracellular water",
          "To reduce surface liquid being counted as tissue mass",
          "To turn salt into sugar"
        ],
        "answer": 1,
        "why": "Use consistent gentle blotting rather than squeezing.",
        "concept": "bio.osmoprac-method"
      },
      {
        "id": "bio.p-osmoprac3",
        "prompt": "A cylinder changes from2.5 g to2.25 g. Signed percentage mass change?",
        "type": "number",
        "answer": -10,
        "tolerance": 0.001,
        "unit": "%",
        "why": "(2.25−2.5)/2.5×100=−10%.",
        "concept": "bio.osmosis-percent"
      },
      {
        "id": "bio.p-osmoprac4",
        "prompt": "A straight interpolation between concentration0.2,+4% and0.4,−4% crosses zero at what concentration?",
        "type": "number",
        "answer": 0.3,
        "tolerance": 0.001,
        "unit": "mol/dm³",
        "why": "Zero lies halfway between equal positive/negative changes, at0.3.",
        "concept": "bio.osmoprac-graph"
      }
    ],
    "check": [
      {
        "id": "bio.c-osmoprac1",
        "prompt": "What is the independent variable in this concentration investigation?",
        "options": [
          "Salt or sugar solution concentration",
          "The final tissue mass",
          "The percentage mass change"
        ],
        "answer": 0,
        "why": "Concentration is deliberately changed; mass change is measured/calculated.",
        "concept": "bio.osmoprac-method"
      },
      {
        "id": "bio.c-osmoprac2",
        "prompt": "Why use cylinders with the same diameter and length?",
        "options": [
          "They must then have perfectly identical cells",
          "To keep geometry and exchange conditions comparable",
          "To guarantee no water moves"
        ],
        "answer": 1,
        "why": "Different surface area and path lengths can affect change over a fixed time.",
        "concept": "bio.osmoprac-method"
      },
      {
        "id": "bio.c-osmoprac3",
        "prompt": "A wet surface droplet remains on one sample at final weighing. Likely bias?",
        "options": [
          "Measured final mass is too low",
          "No possible effect",
          "Apparent mass gain may be too high"
        ],
        "answer": 2,
        "why": "External liquid adds to the reading without being tissue water uptake.",
        "concept": "bio.osmoprac-method"
      },
      {
        "id": "bio.c-osmoprac4",
        "prompt": "A fresh sample starts at4.0 g and finishes at3.4 g. Signed percentage mass change?",
        "type": "number",
        "answer": -15,
        "tolerance": 0.001,
        "unit": "%",
        "why": "−0.6/4.0×100=−15%.",
        "concept": "bio.osmosis-percent"
      },
      {
        "id": "bio.c-osmoprac5",
        "prompt": "A fresh sample starts at6.0 g and finishes at6.9 g. Signed percentage mass change?",
        "type": "number",
        "answer": 15,
        "tolerance": 0.001,
        "unit": "%",
        "why": "0.9/6.0×100=+15%.",
        "concept": "bio.osmosis-percent"
      },
      {
        "id": "bio.c-osmoprac6",
        "prompt": "Which graph axes match this investigation?",
        "options": [
          "x: concentration; y: mean percentage mass change",
          "x: final mass; y: microscope magnification",
          "x: percentage change; y: cylinder colour"
        ],
        "answer": 0,
        "why": "Plot the independent concentration against the calculated response.",
        "concept": "bio.osmoprac-graph"
      },
      {
        "id": "bio.c-osmoprac7",
        "prompt": "Use straight interpolation between the two central plotted points. Estimate concentration at zero mass change.",
        "type": "number",
        "answer": 0.4,
        "tolerance": 0.001,
        "unit": "mol/dm³",
        "why": "Between0.3,+3% and0.5,−3%, the zero is halfway at0.4.",
        "concept": "bio.osmoprac-graph",
        "figure": {
          "kind": "bio-osmosis-graph",
          "points": [
            [
              0.1,
              9
            ],
            [
              0.3,
              3
            ],
            [
              0.5,
              -3
            ],
            [
              0.7,
              -9
            ]
          ]
        }
      },
      {
        "id": "bio.c-osmoprac8",
        "prompt": "Which improvement best refines an estimated crossing near0.4 mol/dm³?",
        "options": [
          "Only add a point at5.0 mol/dm³",
          "Repeat samples and use more closely spaced concentrations near0.4",
          "Delete all negative changes"
        ],
        "answer": 1,
        "why": "Additional local evidence and repeats improve interpolation and assess variability.",
        "concept": "bio.osmoprac-evaluation"
      },
      {
        "id": "bio.c-osmoprac9",
        "prompt": "Repeat percentage changes are8,9 and25. Best next action?",
        "options": [
          "Delete25 automatically",
          "Report25 alone as exact",
          "Check procedure and repeat before deciding how to handle the unusual result"
        ],
        "answer": 2,
        "why": "Investigate timing, dimensions, blotting and measurements rather than hiding disagreement.",
        "concept": "bio.osmoprac-evaluation"
      }
    ],
    "skills": [
      "MS1a",
      "MS1c",
      "MS4a",
      "MS4b",
      "MS4c",
      "MS4d",
      "WS2.2",
      "WS3.4",
      "AT1",
      "AT3",
      "AT5"
    ],
    "prerequisites": [
      "science.biology.cells.osmosis"
    ],
    "separate": false,
    "higher": false
  }
];
export const osmosisConcepts={
  "bio.osmosis-direction": "Water diffusion across partially permeable membranes",
  "bio.osmosis-cells": "Plant-cell water balance and barriers",
  "bio.osmosis-net": "No net transfer despite water movement",
  "bio.osmosis-percent": "Signed percentage mass change",
  "bio.osmosis-rate": "Mean mass-based water uptake rates",
  "bio.osmoprac-method": "Plant-tissue osmosis variables and measurement",
  "bio.osmoprac-graph": "Concentration versus mass-change graphs",
  "bio.osmoprac-evaluation": "Repeats, uncertainty and improved estimates"
};
