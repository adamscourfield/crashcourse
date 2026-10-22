export const titrationLessons=[
  {
    "id": "science.chemistry.changes.titrations",
    "title": "Titrations & accurate reacting volumes",
    "short": "Find the endpoint, compare the repeats",
    "refs": [
      "4.2.5"
    ],
    "separate": true,
    "minutes": 30,
    "widget": "titrate-volume",
    "prerequisites": [
      "science.chemistry.changes.ph-neutralisation"
    ],
    "higherQuestions": [
      "changes.p-titht",
      "changes.c-titht"
    ],
    "big": "Measure a fixed solution volume with a pipette, find the indicator endpoint with a burette, then calculate titre as final minus initial and compare precise repeats.",
    "learn": [
      {
        "title": "Measure and observe the endpoint.",
        "text": "In the supervised school method, rinse a pipette with the solution it will measure and use a filler to transfer a known volume of alkali to a conical flask. Rinse and fill a burette with the acid, ensure its jet is filled and remove the funnel before readings. Add a few drops of a suitable indicator, such as phenolphthalein or methyl orange. Use strong acids/alkalis; this section uses hydrochloric, nitric or sulfuric acid.",
        "scene": "titrate:volume"
      },
      {
        "title": "Approach accurately, then repeat.",
        "text": "Read the bottom of the meniscus at eye level. Swirl the flask while adding acid; near the endpoint add dropwise until the first permanent indicator colour change. A white tile helps observation. Record initial and final burette readings; titre=final−initial. A rough run locates the endpoint. Repeat accurately and average concordant precise titres under the stated agreement criterion, excluding the rough run. Universal indicator changes over too wide a range for a sharp endpoint.",
        "scene": "titrate:volume"
      },
      {
        "title": "Separate measured volumes from assumptions.",
        "text": "If initial reading is 0.20 cm³ and final 24.30 cm³, the titre is 24.10 cm³, not 24.30. With precise repeats 24.10, 24.00, 24.05 cm³, the mean is 24.05 cm³. Agreement does not prove there is no systematic error; overshooting can bias the titre high. This planner supports practical preparation and does not fulfil the required school titration practical.",
        "scene": "titrate:volume"
      },
      {
        "title": "Higher: convert titre to chemical quantities.",
        "text": "For HCl + NaOH → NaCl + H₂O, 25.0 cm³ of 0.100 mol/dm³ HCl neutralises 20.0 cm³ NaOH. HCl amount=0.00250 mol;1:1 gives the same NaOH amount. NaOH concentration=0.00250÷0.0200=0.125 mol/dm³. With Mᵣ(NaOH)=40, this is 5.00 g/dm³. A different balanced equation, such as sulfuric acid with NaOH, needs its own mole ratio.",
        "scene": "titrate:volume",
        "higher": true
      }
    ],
    "practice": [
      {
        "id": "changes.p-tit1",
        "prompt": "Initial 0.40 cm³, final 23.65 cm³. Titre?",
        "options": [],
        "answer": 23.25,
        "why": "Subtract initial from final.",
        "concept": "changes.titre-reading",
        "type": "number",
        "unit": "cm³",
        "tolerance": 0.001
      },
      {
        "id": "changes.p-tit2",
        "prompt": "Which belongs in a mean of concordant precise titres?",
        "options": [
          "The rough titre automatically",
          "Only selected agreeing precise repeats",
          "Every reading regardless of agreement"
        ],
        "answer": 1,
        "why": "Use the stated concordance rule and exclude the rough run.",
        "concept": "changes.titre-repeats"
      },
      {
        "id": "changes.p-tit3",
        "prompt": "Near the endpoint, add acid…",
        "options": [
          "Rapidly with no swirling",
          "Dropwise while swirling",
          "Until the flask boils"
        ],
        "answer": 1,
        "why": "Small additions reduce the chance of overshooting.",
        "concept": "changes.titre-method"
      },
      {
        "id": "changes.p-titht",
        "prompt": "NaOH concentration 0.125 mol/dm³, Mᵣ40. Concentration in g/dm³?",
        "options": [],
        "answer": 5,
        "why": "0.125×40=5.00 g/dm³.",
        "concept": "changes.titre-quantity",
        "type": "number",
        "unit": "g/dm³",
        "tolerance": 0.001
      }
    ],
    "check": [
      {
        "id": "changes.c-tit1",
        "prompt": "Initial 1.25 cm³, final 26.10 cm³. Titre?",
        "options": [],
        "answer": 24.85,
        "why": "26.10−1.25=24.85 cm³.",
        "concept": "changes.titre-reading",
        "type": "number",
        "unit": "cm³",
        "tolerance": 0.001
      },
      {
        "id": "changes.c-tit2",
        "prompt": "Rough 25.0 cm³; precise 24.1, 24.0, 24.6. Use agreeing precise titres within 0.10 cm³. Mean?",
        "options": [],
        "answer": 24.05,
        "why": "Exclude rough and 24.6 outlier; (24.1+24.0)/2=24.05.",
        "concept": "changes.titre-repeats",
        "type": "number",
        "unit": "cm³",
        "tolerance": 0.001
      },
      {
        "id": "changes.c-tit3",
        "prompt": "Why read the meniscus at eye level?",
        "options": [
          "To reduce parallax error",
          "To change concentration",
          "To neutralise the acid"
        ],
        "answer": 0,
        "why": "Viewing at an angle can shift the apparent scale reading.",
        "concept": "changes.titre-method"
      },
      {
        "id": "changes.c-tit4",
        "prompt": "A suitable sharp-endpoint indicator is…",
        "options": [
          "Universal indicator for every titration",
          "Phenolphthalein for the supplied strong acid/alkali titration",
          "A salt crystal"
        ],
        "answer": 1,
        "why": "Phenolphthalein has a narrower endpoint transition suitable here.",
        "concept": "changes.titre-method"
      },
      {
        "id": "changes.c-tit5",
        "prompt": "Overshooting an acid-addition endpoint tends to make recorded acid titre…",
        "options": [
          "Too low",
          "Too high",
          "Exactly correct by definition"
        ],
        "answer": 1,
        "why": "More acid than needed was delivered.",
        "concept": "changes.titre-method"
      },
      {
        "id": "changes.c-titht",
        "prompt": "HCl + NaOH → NaCl + H₂O.25 cm³ HCl at 0.20 mol/dm³ reacts with 20 cm³ NaOH. NaOH concentration in g/dm³? Mᵣ40.",
        "options": [],
        "answer": 10,
        "why": "HCl 0.005 mol →NaOH0.005 mol; c=0.25 mol/dm³; ×40=10 g/dm³.",
        "concept": "changes.titre-quantity",
        "type": "number",
        "unit": "g/dm³",
        "tolerance": 0.001
      }
    ],
    "skills": [
      "AT1",
      "AT8",
      "WS3.4",
      "MS1a",
      "MS1c"
    ]
  },
  {
    "id": "science.chemistry.changes.acid-strength",
    "title": "Strong/weak acids & the pH factor",
    "short": "Strength and concentration are different",
    "refs": [
      "4.2.6"
    ],
    "combinedRefs": [
      "4.2.5"
    ],
    "higher": true,
    "minutes": 25,
    "widget": "titrate-strength",
    "prerequisites": [
      "science.chemistry.changes.ph-neutralisation"
    ],
    "big": "Strength describes ionisation; concentration describes amount per volume. Each decrease of one pH unit means ten times the hydrogen-ion concentration.",
    "learn": [
      {
        "title": "Complete or partial ionisation.",
        "text": "Strong acids completely ionise in aqueous solution in the GCSE model: hydrochloric, nitric and sulfuric acids. Weak acids only partially ionise: ethanoic, citric and carbonic acids. A weak acid solution contains unionised acid molecules as well as ions. Weak does not mean harmless, and strong does not mean concentrated.",
        "scene": "titrate:strength"
      },
      {
        "title": "Keep concentration separate.",
        "text": "Dilute/concentrated compares amount of acid per solution volume. Strong/weak compares degree of ionisation. A dilute hydrochloric acid solution is still a strong acid. A concentrated ethanoic acid solution is still weak. For otherwise comparable solutions of the same concentration, a stronger acid gives a lower pH; without concentration information, strength alone is not enough to rank any two pH values.",
        "scene": "titrate:strength"
      },
      {
        "title": "pH steps multiply, not add.",
        "text": "As pH decreases by 1, hydrogen-ion concentration increases by 10. A solution at pH 2 has 100 times the H⁺ concentration of one at pH 4; pH 3 has 10 times that at pH 4. At the course neutral value pH 7, hydrogen and hydroxide ion concentrations balance. Use whole-number pH differences here; the particle sketches are qualitative, not calculated dissociation percentages.",
        "scene": "titrate:strength"
      }
    ],
    "practice": [
      {
        "id": "changes.p-strength1",
        "prompt": "A dilute strong acid is…",
        "options": [
          "Partially ionised because dilute",
          "Completely ionised despite low amount per volume",
          "Always concentrated"
        ],
        "answer": 1,
        "why": "Strength and concentration describe different properties.",
        "concept": "changes.acid-ionisation"
      },
      {
        "id": "changes.p-strength2",
        "prompt": "Which is weak in the GCSE examples?",
        "options": [
          "Hydrochloric acid",
          "Nitric acid",
          "Ethanoic acid"
        ],
        "answer": 2,
        "why": "Ethanoic acid is partially ionised.",
        "concept": "changes.acid-strength-examples"
      },
      {
        "id": "changes.p-strength3",
        "prompt": "H⁺ concentration factor: pH 2 compared with pH 5?",
        "options": [],
        "answer": 1000,
        "why": "Three pH steps:10³=1000.",
        "concept": "changes.ph-factor",
        "type": "number",
        "unit": "times",
        "tolerance": 0
      }
    ],
    "check": [
      {
        "id": "changes.c-strength1",
        "prompt": "Strong acid means…",
        "options": [
          "Completely ionised in aqueous solution",
          "A large amount per volume only",
          "Always dangerous and therefore concentrated"
        ],
        "answer": 0,
        "why": "Strength describes ionisation.",
        "concept": "changes.acid-ionisation"
      },
      {
        "id": "changes.c-strength2",
        "prompt": "A concentrated weak acid has…",
        "options": [
          "A high amount per volume and partial ionisation",
          "A low amount per volume and complete ionisation",
          "No dissolved particles"
        ],
        "answer": 0,
        "why": "Concentration and degree of ionisation are independent descriptions.",
        "concept": "changes.strength-concentration"
      },
      {
        "id": "changes.c-strength3",
        "prompt": "H⁺ concentration factor at pH 3 compared with pH 5?",
        "options": [],
        "answer": 100,
        "why": "Two lower pH units means 10²=100 times H⁺.",
        "concept": "changes.ph-factor",
        "type": "number",
        "unit": "times",
        "tolerance": 0
      },
      {
        "id": "changes.c-strength4",
        "prompt": "H⁺ concentration at pH 6 is what fraction of that at pH 4?",
        "options": [],
        "answer": 0.01,
        "why": "Two higher pH units means 1/100=0.01.",
        "concept": "changes.ph-factor",
        "type": "number",
        "unit": "fraction",
        "tolerance": 1e-05
      },
      {
        "id": "changes.c-strength5",
        "prompt": "At the same concentration and otherwise comparable conditions, stronger acid usually has…",
        "options": [
          "Higher pH",
          "Lower pH",
          "pH determined only by sample volume"
        ],
        "answer": 1,
        "why": "More ionisation produces more H⁺ and lower pH.",
        "concept": "changes.strength-concentration"
      }
    ],
    "skills": [
      "MS2h",
      "WS1.2",
      "AT8"
    ]
  }
];
export const titrationConcepts={"changes.titre-reading": "Titre reading", "changes.titre-repeats": "Titre repeats", "changes.titre-method": "Titre method", "changes.titre-quantity": "Titre quantity", "changes.acid-ionisation": "Acid ionisation", "changes.acid-strength-examples": "Acid strength examples", "changes.ph-factor": "Ph factor", "changes.strength-concentration": "Strength concentration"};
