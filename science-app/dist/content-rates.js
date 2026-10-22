export const rateLessons=[
  {
    "id": "science.chemistry.rates.mean-rate",
    "title": "Measuring reaction rate",
    "short": "Quantity change per second",
    "refs": [
      "6.1.1"
    ],
    "minutes": 25,
    "widget": "rates-mean",
    "higherQuestions": [
      "rates.p-mean4",
      "rates.c-mean7"
    ],
    "prerequisites": [
      "science.chemistry.quantitative.mass-conservation"
    ],
    "big": "Mean rate = quantity of reactant used or product formed ÷ elapsed time. Use changes in both readings for the same interval.",
    "learn": [
      {
        "title": "Measure a change.",
        "text": "Rate describes how quickly a reaction proceeds. Measure a product forming or a reactant being used over time. Divide the quantity change by the elapsed time. Gas volume gives cm³/s; mass gives g/s. A larger quantity of product alone does not establish a faster reaction unless the time is considered.",
        "scene": "rates:mean"
      },
      {
        "title": "Use the same interval.",
        "text": "Gas readings rise from 12 cm³ at10 s to36 cm³ at30 s. The change is24 cm³ in20 s, so the interval mean is1.2 cm³/s. Do not divide the final reading by30 s for this interval. A whole-reaction mean and a subinterval mean describe different parts of a changing reaction.",
        "scene": "rates:mean"
      },
      {
        "title": "Track what the instrument measures.",
        "text": "If a reactant falls from5.0 g to3.8 g in60 s,1.2 g is used and its mean consumption rate is0.020 g/s. A balance reading for a whole open reaction mixture can decrease when gas escapes; that reading is not automatically the mass of one remaining reactant. State the measured quantity, control conditions and compare like intervals. Total yield and reaction speed are distinct.",
        "scene": "rates:mean"
      },
      {
        "title": "Use amount in moles.",
        "text": "Higher: the quantity can be an amount in moles. If0.006 mol is used in30 s, the mean rate is0.0002 mol/s. Divide moles by seconds, rather than multiplying. Use the quantity and units in the supplied question; do not convert grams to moles unless sufficient information is provided.",
        "scene": "rates:mean",
        "higher": true
      }
    ],
    "practice": [
      {
        "id": "rates.p-mean1",
        "type": "number",
        "prompt": "48 cm³ of gas forms in24 s. Mean rate?",
        "answer": 2,
        "tolerance": 0.002,
        "unit": "cm³/s",
        "why": "48 ÷24=2 cm³/s.",
        "concept": "rates.mean-rate"
      },
      {
        "id": "rates.p-mean2",
        "type": "number",
        "prompt": "A reactant falls from4.0 g to3.1 g over30 s. Mean consumption rate?",
        "answer": 0.03,
        "tolerance": 3e-05,
        "unit": "g/s",
        "why": "0.9 g is used in30 s:0.9÷30=0.03.",
        "concept": "rates.quantity-change"
      },
      {
        "id": "rates.p-mean3",
        "prompt": "Which quantity is needed to compare reaction speed fairly?",
        "options": [
          "Only final product amount",
          "Product change and time over a comparable interval",
          "Only the colour of the flask"
        ],
        "answer": 1,
        "why": "Rate relates quantity change to elapsed time.",
        "concept": "rates.mean-rate"
      },
      {
        "id": "rates.p-mean4",
        "type": "number",
        "prompt": "Higher:0.008 mol is used in40 s. Mean rate?",
        "answer": 0.0002,
        "tolerance": 1e-06,
        "unit": "mol/s",
        "why": "0.008 ÷40=0.0002 mol/s.",
        "concept": "rates.mole-rate",
        "higher": true
      }
    ],
    "check": [
      {
        "id": "rates.c-mean1",
        "type": "number",
        "prompt": "72 cm³ of gas forms in30 s. Mean rate?",
        "answer": 2.4,
        "tolerance": 0.0024,
        "unit": "cm³/s",
        "why": "72÷30=2.4.",
        "concept": "rates.mean-rate"
      },
      {
        "id": "rates.c-mean2",
        "type": "number",
        "prompt": "A reactant mass falls from6.2 g to5.0 g in80 s. Mean consumption rate?",
        "answer": 0.015,
        "tolerance": 1.5e-05,
        "unit": "g/s",
        "why": "1.2÷80=0.015.",
        "concept": "rates.quantity-change"
      },
      {
        "id": "rates.c-mean3",
        "type": "number",
        "prompt": "Gas volume is10 cm³ at5 s and40 cm³ at20 s. Mean rate over this interval?",
        "answer": 2,
        "tolerance": 0.002,
        "unit": "cm³/s",
        "why": "Change30 cm³; elapsed15 s; rate2.",
        "concept": "rates.quantity-change"
      },
      {
        "id": "rates.c-mean4",
        "prompt": "A rate calculated from mass in grams and time in seconds has units…",
        "options": [
          "g/s",
          "s/g",
          "g × s"
        ],
        "answer": 0,
        "why": "Quantity per time gives grams per second.",
        "concept": "rates.mean-rate"
      },
      {
        "id": "rates.c-mean5",
        "prompt": "Reaction A makes100 cm³ in100 s. B makes60 cm³ in30 s. Which has the larger mean rate?",
        "options": [
          "A because it makes more gas",
          "B because2 cm³/s exceeds1 cm³/s",
          "They must be equal"
        ],
        "answer": 1,
        "why": "Compare quantity divided by time, not final amounts alone.",
        "concept": "rates.mean-rate"
      },
      {
        "id": "rates.c-mean6",
        "prompt": "An open flask loses mass as gas escapes. The mass decrease directly measures…",
        "options": [
          "The remaining solid reactant mass",
          "Escaped material, under the stated method",
          "Atoms being destroyed"
        ],
        "answer": 1,
        "why": "Interpret the balance in terms of what leaves the weighed boundary.",
        "concept": "rates.quantity-change"
      },
      {
        "id": "rates.c-mean7",
        "type": "number",
        "prompt": "Higher:0.015 mol is consumed in50 s. Mean rate?",
        "answer": 0.0003,
        "tolerance": 1e-06,
        "unit": "mol/s",
        "why": "0.015÷50=0.0003 mol/s.",
        "concept": "rates.mole-rate",
        "higher": true
      }
    ],
    "skills": [
      "MS1a",
      "MS1c",
      "MS1d",
      "MS4a",
      "WS3.5"
    ]
  },
  {
    "id": "science.chemistry.rates.collision-theory",
    "title": "Collision theory",
    "short": "Frequency, energy and exposed surface",
    "refs": [
      "6.1.2",
      "6.1.3"
    ],
    "minutes": 30,
    "widget": "rates-collision",
    "prerequisites": [
      "science.chemistry.energy.reaction-profiles"
    ],
    "big": "Reactions need collisions with enough energy. Conditions can change how often particles meet and how many collisions meet the energy threshold.",
    "learn": [
      {
        "title": "A collision needs enough energy.",
        "text": "Particles must collide with sufficient energy to react. Activation energy is the minimum energy needed; many collisions do not cause reaction. Rate depends on successful collisions per unit time. The symbolic diagrams compare conditions; they do not predict exact real rates.",
        "scene": "rates:collision"
      },
      {
        "title": "Pack more particles into the space.",
        "text": "At the same temperature, a greater solution concentration puts more reacting particles in the same volume and increases collision frequency. Compressing a fixed amount of reacting gas increases its pressure and particle density, so collisions occur more frequently. These changes do not lower activation energy. Pressure explanations here apply to reacting gases, not an identical compression effect on a solid.",
        "scene": "rates:collision"
      },
      {
        "title": "Heat changes motion and energy.",
        "text": "At higher temperature, particles move faster and collide more frequently. Collisions also have greater energy, so a larger fraction reach the activation threshold. Heating does not lower that threshold. Do not treat the effect as a universal doubling rule; compare the conditions supplied. Catalysts, which change the pathway, will be considered separately.",
        "scene": "rates:collision"
      },
      {
        "title": "Expose more solid.",
        "text": "For the same mass of solid, smaller pieces expose more total surface to the other reactant. This raises the frequency of collisions at the surface. Cutting one cube into eight smaller cubes doubles its total surface area without changing total volume; it does not halve the particle mass. Simple proportional reasoning can compare a stated collision model, but a doubled surface area does not guarantee an exact doubled rate for every real reaction.",
        "scene": "rates:collision"
      }
    ],
    "practice": [
      {
        "id": "rates.p-collision1",
        "prompt": "Increasing concentration at fixed temperature mainly…",
        "options": [
          "Lowers activation energy",
          "Increases collision frequency",
          "Makes each particle larger"
        ],
        "answer": 1,
        "why": "More particles per volume meet more often.",
        "concept": "rates.frequency"
      },
      {
        "id": "rates.p-collision2",
        "prompt": "Why does heating increase reaction rate?",
        "options": [
          "Threshold falls automatically",
          "Collisions are more frequent and more energetic",
          "All collisions become reactions"
        ],
        "answer": 1,
        "why": "Faster motion and more collisions above the same threshold both matter.",
        "concept": "rates.temperature"
      },
      {
        "id": "rates.p-collision3",
        "prompt": "Same mass: powder reacts faster than a large lump because…",
        "options": [
          "More total exposed surface",
          "Powder has more total mass",
          "The reaction needs no collisions"
        ],
        "answer": 0,
        "why": "Surface collisions can occur at more exposed sites.",
        "concept": "rates.surface"
      }
    ],
    "check": [
      {
        "id": "rates.c-collision1",
        "prompt": "Which collision can cause reaction?",
        "options": [
          "Any collision however weak",
          "A collision with sufficient energy",
          "Only a collision with no energy"
        ],
        "answer": 1,
        "why": "The activation threshold must be met.",
        "concept": "rates.frequency"
      },
      {
        "id": "rates.c-collision2",
        "prompt": "A reacting gas is compressed at constant temperature. Why can its rate rise?",
        "options": [
          "More frequent collisions in a smaller volume",
          "The energy threshold becomes zero",
          "Each molecule doubles in mass"
        ],
        "answer": 0,
        "why": "The fixed gas amount is packed more densely.",
        "concept": "rates.frequency"
      },
      {
        "id": "rates.c-collision3",
        "prompt": "At higher temperature the activation energy for an unchanged pathway…",
        "options": [
          "Decreases",
          "Stays the same while a larger fraction of collisions can exceed it",
          "Is no longer needed"
        ],
        "answer": 1,
        "why": "Temperature changes the energy distribution, not the pathway barrier.",
        "concept": "rates.temperature"
      },
      {
        "id": "rates.c-collision4",
        "prompt": "Equal masses of the same solid: eight small cubes have more exposed surface than one large cube. What increases?",
        "options": [
          "Total solid volume",
          "Frequency of collisions at the surface",
          "Mass of every atom"
        ],
        "answer": 1,
        "why": "The area available for contact increases.",
        "concept": "rates.surface"
      },
      {
        "id": "rates.c-collision5",
        "type": "number",
        "prompt": "A supplied fixed-speed model counts20 encounters per second. Doubling particle density gives40. Encounter-frequency ratio new/old?",
        "answer": 2,
        "tolerance": 0.002,
        "unit": "times",
        "why": "40÷20=2 in the supplied model; no universal kinetic law is implied.",
        "concept": "rates.frequency"
      },
      {
        "id": "rates.c-collision6",
        "prompt": "A solution is diluted without changing temperature. What explains a slower reaction?",
        "options": [
          "Fewer reactant particles per unit volume give fewer collisions",
          "Dilution necessarily raises activation energy",
          "All particles stop moving"
        ],
        "answer": 0,
        "why": "Dilution reduces concentration and collision frequency.",
        "concept": "rates.frequency"
      }
    ],
    "skills": [
      "WS1.2",
      "MS1c",
      "MS5c"
    ]
  }
];
export const rateConcepts={"rates.mean-rate": "Mean rate and units", "rates.quantity-change": "Quantity and time interval changes", "rates.mole-rate": "Higher amount rate in mol/s", "rates.frequency": "Collision frequency and activation threshold", "rates.temperature": "Temperature and energetic collisions", "rates.surface": "Surface area and solid reaction rate"};
