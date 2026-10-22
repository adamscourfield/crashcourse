export const ratePracticalLessons=[
  {
    "id": "science.chemistry.rates.concentration-practical",
    "title": "Investigating concentration & rate",
    "short": "Plan, measure and evaluate",
    "refs": [
      "6.1.2"
    ],
    "minutes": 35,
    "widget": "practical-rates",
    "prerequisites": [
      "science.chemistry.rates.mean-rate",
      "science.chemistry.rates.collision-theory"
    ],
    "big": "Change concentration while controlling other conditions. Compare gas formation over time or time to a consistent turbidity endpoint, then evaluate the evidence.",
    "learn": [
      {
        "title": "Make a testable prediction.",
        "text": "Predict that increasing concentration increases the rate because more reacting particles per volume give more frequent collisions. Specify what you will measure: gas volume at fixed times, or time until a fixed turbidity endpoint. Change only the intended concentration; keep temperature, total volume, other reactant conditions and the measurement method consistent. Repeat each condition and record all readings before deciding how to handle unusual results.",
        "scene": "practical:plan"
      },
      {
        "title": "Measure gas as it forms.",
        "text": "A supervised acid–magnesium investigation can collect hydrogen through a delivery tube into a gas syringe. Use equal magnesium mass and exposed surface, a fixed acid volume and excess acid at every tested concentration. Start timing consistently on mixing, minimise the delay before sealing, check connections and take readings at regular intervals. Plot volume against time and compare early rates. With magnesium limiting and acid still in excess, faster reaction need not give more final hydrogen. Leaks can reduce collected volume.",
        "scene": "practical:gas"
      },
      {
        "title": "Time a consistent endpoint.",
        "text": "Sodium thiosulfate reacts with acid to form sulfur, making the mixture cloudy. In the disappearing-cross method, time from mixing until the same cross is no longer visible through the same depth of solution. Vary thiosulfate concentration by replacing some stock with water while keeping their combined volume fixed; add the same acid volume and concentration each time. A40 g/dm³ stock diluted using20 cm³ stock plus30 cm³ water gives16 g/dm³ before acid addition:40 ×20/50. Keep flask, temperature, lighting and viewing conditions consistent. Shorter times mean faster change to that endpoint;1/time can be a relative index for comparable endpoints, not a gas-volume rate.",
        "scene": "practical:turbidity"
      },
      {
        "title": "Evaluate the method.",
        "text": "Repeat trials, check anomalies and report suitable means and spread. Gas collection gives a sequence of quantitative readings but can suffer leaks or early gas loss. A disappearing-cross endpoint is subjective; use a consistent observer and setup, or suitable light-sensor equipment, to reduce judgement variation. Investigate disagreements rather than deleting readings just because they differ. School methods require eye protection and teacher-approved handling: hydrogen away from ignition; thiosulfate/acid releases sulfur dioxide, requiring school ventilation and disposal controls. This lesson prepares AQA Chemistry practical5 / Trilogy practical11; it does not replace either supervised method.",
        "scene": "practical:evaluate"
      }
    ],
    "practice": [
      {
        "id": "rates.p-practical1",
        "prompt": "Which is a testable concentration–rate hypothesis?",
        "options": [
          "Higher concentration gives faster gas formation because collisions are more frequent",
          "Every acid always makes the same gas volume instantly",
          "Increasing concentration creates atoms"
        ],
        "answer": 0,
        "why": "It predicts a measurable change and links it to collision theory.",
        "concept": "rates.rate-controls"
      },
      {
        "id": "rates.p-practical2",
        "type": "number",
        "prompt": "36 cm³ gas is collected in20 s from the start. Mean rate?",
        "answer": 1.8,
        "tolerance": 0.001,
        "unit": "cm³/s",
        "why": "36÷20=1.8.",
        "concept": "rates.gas-method"
      },
      {
        "id": "rates.p-practical3",
        "type": "number",
        "prompt": "To make50 cm³ before acid addition using30 cm³ stock, how much water is needed?",
        "answer": 20,
        "tolerance": 0.001,
        "unit": "cm³",
        "why": "50−30=20 cm³.",
        "concept": "rates.turbidity-method"
      },
      {
        "id": "rates.p-practical4",
        "prompt": "Same endpoint reached in30 s rather than60 s indicates…",
        "options": [
          "A slower change",
          "A faster change to that endpoint",
          "Twice as much final product necessarily"
        ],
        "answer": 1,
        "why": "Shorter time to a comparable endpoint indicates faster rate.",
        "concept": "rates.turbidity-method"
      }
    ],
    "check": [
      {
        "id": "rates.c-practical1",
        "prompt": "When investigating acid concentration with magnesium, which should be controlled?",
        "options": [
          "Magnesium mass and exposed surface plus temperature",
          "The independent concentration itself",
          "The measured gas rate"
        ],
        "answer": 0,
        "why": "These influence rate independently of concentration.",
        "concept": "rates.rate-controls"
      },
      {
        "id": "rates.c-practical2",
        "type": "number",
        "prompt": "Gas collection:30 cm³ at10 s and54 cm³ at30 s. Mean rate for this interval?",
        "answer": 1.2,
        "tolerance": 0.001,
        "unit": "cm³/s",
        "why": "(54−30)÷(30−10)=1.2.",
        "concept": "rates.gas-method"
      },
      {
        "id": "rates.c-practical3",
        "prompt": "Equal limiting magnesium masses react fully with two excess-acid concentrations. The faster run should…",
        "options": [
          "Necessarily make more final gas",
          "Reach the same final hydrogen volume sooner",
          "Make no gas"
        ],
        "answer": 1,
        "why": "Fixed limiting magnesium fixes final amount under comparable collection conditions.",
        "concept": "rates.gas-method"
      },
      {
        "id": "rates.c-practical4",
        "type": "number",
        "prompt": "A40 g/dm³ stock:10 cm³ stock plus40 cm³ water. Concentration before fixed acid addition?",
        "answer": 8,
        "tolerance": 0.001,
        "unit": "g/dm³",
        "why": "40×10/50=8 g/dm³.",
        "concept": "rates.turbidity-method"
      },
      {
        "id": "rates.c-practical5",
        "prompt": "Why keep total liquid volume and flask constant for a disappearing-cross comparison?",
        "options": [
          "To keep solution depth and viewing conditions comparable",
          "To guarantee every reading is exact",
          "To prevent any chemical reaction"
        ],
        "answer": 0,
        "why": "Optical path length affects when the cross becomes hidden.",
        "concept": "rates.turbidity-method"
      },
      {
        "id": "rates.c-practical6",
        "prompt": "A loose connection loses some gas. What limitation follows?",
        "options": [
          "Collected volume can underestimate gas formed",
          "The reaction creates fewer atoms",
          "The gas syringe must read more gas"
        ],
        "answer": 0,
        "why": "Collection losses are a method error, not proof of lower chemical yield.",
        "concept": "rates.gas-method"
      },
      {
        "id": "rates.c-practical7",
        "prompt": "Repeated endpoint times are40,41 and75 s. Best response?",
        "options": [
          "Delete75 without checking",
          "Check method and repeat the condition",
          "Treat40 as automatically exact"
        ],
        "answer": 1,
        "why": "Investigate starting, mixing and endpoint judgement before deciding how to handle the unusual value.",
        "concept": "rates.rate-controls"
      },
      {
        "id": "rates.c-practical8",
        "prompt": "For a consistent endpoint,1/time is best described as…",
        "options": [
          "A relative rate index under comparable conditions",
          "Gas volume per second in every method",
          "The total product mass"
        ],
        "answer": 0,
        "why": "An inverse time can compare endpoint speed; it is not automatically cm³/s or mol/s.",
        "concept": "rates.turbidity-method"
      }
    ],
    "skills": [
      "WS2.1",
      "WS2.2",
      "WS2.4",
      "WS3.4",
      "WS3.5",
      "MS1a",
      "MS1c",
      "MS4a",
      "AT1",
      "AT3",
      "AT5",
      "AT6"
    ]
  }
];
export const ratePracticalConcepts={"rates.rate-controls": "Rate investigation hypotheses and controls", "rates.gas-method": "Gas collection and rate evidence", "rates.turbidity-method": "Turbidity endpoints and dilution"};
