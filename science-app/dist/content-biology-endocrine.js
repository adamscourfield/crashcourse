export const endoLessons=[
  {
    "id": "science.biology.homeostasis-and-response.thermoregulation",
    "title": "Controlling body temperature",
    "short": "Controlling body temperature",
    "topicId": "science.biology.homeostasis-and-response",
    "refs": [
      "5.2.4"
    ],
    "combinedRefs": [],
    "minutes": 35,
    "separate": true,
    "higher": false,
    "big": "The thermoregulatory centre in the brain monitors and controls body temperature. Its receptors detect the temperature of the blood. Receptors in the skin also detect temperature changes and send nervous impulses to this centre.",
    "learn": [
      {
        "title": "Detect temperature changes",
        "text": "The thermoregulatory centre in the brain monitors and controls body temperature. Its receptors detect the temperature of the blood. Receptors in the skin also detect temperature changes and send nervous impulses to this centre.",
        "scene": "endo:temperature:0"
      },
      {
        "title": "Respond when too hot",
        "text": "When body temperature is too high, skin blood vessels dilate (vasodilation) and sweat glands produce sweat. These responses cause energy to transfer from the skin to the environment.",
        "scene": "endo:temperature:1"
      },
      {
        "title": "Respond when too cold",
        "text": "When body temperature is too low, skin blood vessels constrict (vasoconstriction), sweating stops and skeletal muscles contract repeatedly: shivering. Blood vessels change diameter; they do not move towards or away from the surface.",
        "scene": "endo:temperature:2"
      },
      {
        "title": "Explain cooling and warming",
        "text": "Higher: vasodilation increases blood flow near the skin surface, increasing energy transfer to a cooler environment. Evaporation of sweat transfers energy from the skin. Vasoconstriction reduces surface blood flow and energy loss. Shivering increases respiration in contracting muscles, transferring more energy to the body. Sweat must evaporate to provide this cooling effect.",
        "scene": "endo:temperature:3",
        "higher": true
      }
    ],
    "widget": "endo-thermoregulation",
    "prerequisites": [
      "science.biology.homeostasis-and-response.homeostasis"
    ],
    "skills": [
      "WS1.2",
      "MS2c"
    ],
    "practice": [
      {
        "id": "bio.p-endo-thermoregulation1",
        "prompt": "Where is the thermoregulatory centre?",
        "options": [
          "Brain",
          "Pancreas",
          "Skin surface only"
        ],
        "answer": 0,
        "why": "The coordination centre is in the brain.",
        "concept": "bio.endo-thermoregulation"
      },
      {
        "id": "bio.p-endo-thermoregulation2",
        "prompt": "What happens when body temperature is too high?",
        "options": [
          "Vasoconstriction and no sweating",
          "Vasodilation and sweating",
          "Only shivering"
        ],
        "answer": 1,
        "why": "These are the hot-condition responses.",
        "concept": "bio.endo-thermoregulation"
      },
      {
        "id": "bio.p-endo-thermoregulation3",
        "prompt": "Which is a cold-condition response?",
        "options": [
          "Sweating increases",
          "Blood vessels move deeper",
          "Vasoconstriction and shivering"
        ],
        "answer": 2,
        "why": "Vessels narrow; muscles shiver.",
        "concept": "bio.endo-thermoregulation"
      },
      {
        "id": "bio.p-endo-thermoregulation4",
        "prompt": "What do skin temperature receptors send to the centre?",
        "options": [
          "Nervous impulses",
          "Glycogen",
          "Sweat"
        ],
        "answer": 0,
        "why": "Skin receptors communicate through nervous signalling.",
        "concept": "bio.endo-thermoregulation"
      },
      {
        "id": "bio.p-endo-thermoregulation5",
        "prompt": "Why does evaporating sweat cool the skin?",
        "options": [
          "It transfers energy from the skin to the surroundings",
          "It makes glucose in the blood",
          "It stops all respiration"
        ],
        "answer": 0,
        "why": "Evaporation removes energy from the skin.",
        "concept": "bio.endo-thermoregulation",
        "higher": true
      }
    ],
    "check": [
      {
        "id": "bio.c-endo-thermoregulation1",
        "prompt": "Which detects the temperature of blood directly?",
        "options": [
          "Receptors in the brain’s thermoregulatory centre",
          "Only the cornea",
          "Only an external thermometer"
        ],
        "answer": 0,
        "why": "The centre contains temperature-sensitive receptors.",
        "concept": "bio.endo-thermoregulation"
      },
      {
        "id": "bio.c-endo-thermoregulation2",
        "prompt": "A person becomes too cold. Which paired response is expected?",
        "options": [
          "Vasodilation and more sweat",
          "Vasoconstriction and skeletal-muscle shivering",
          "The skin vessels move inward"
        ],
        "answer": 1,
        "why": "Narrowing vessels and shivering are cold responses.",
        "concept": "bio.endo-thermoregulation"
      },
      {
        "id": "bio.c-endo-thermoregulation3",
        "prompt": "After body temperature rises, which response is appropriate?",
        "options": [
          "Shivering only",
          "Stop all blood flow",
          "Skin vessel dilation and sweat production"
        ],
        "answer": 2,
        "why": "These responses support energy transfer to the environment.",
        "concept": "bio.endo-thermoregulation"
      },
      {
        "id": "bio.c-endo-thermoregulation4",
        "prompt": "Which statement about skin vessels is accurate?",
        "options": [
          "Their diameter changes during regulation",
          "They move outside the body",
          "They detect colour"
        ],
        "answer": 0,
        "why": "Dilation/constriction mean diameter changes.",
        "concept": "bio.endo-thermoregulation"
      },
      {
        "id": "bio.c-endo-thermoregulation5",
        "prompt": "A runner is hot, but sweat does not evaporate well in humid air. Why may cooling be limited?",
        "options": [
          "Evaporation transfers energy away, so reduced evaporation limits that pathway",
          "Sweat cools only by staying liquid forever",
          "Humidity turns sweat into insulin"
        ],
        "answer": 0,
        "why": "Evaporation is the relevant energy-transfer mechanism.",
        "concept": "bio.endo-thermoregulation",
        "higher": true
      },
      {
        "id": "bio.c-endo-thermoregulation6",
        "prompt": "How does shivering help raise body temperature?",
        "options": [
          "It decreases all muscle respiration",
          "Muscle contractions increase respiration and energy transfer to the body",
          "It produces glucose receptors"
        ],
        "answer": 1,
        "why": "Repeated contraction increases energy transfer through respiration.",
        "concept": "bio.endo-thermoregulation",
        "higher": true
      }
    ],
    "higherQuestions": [
      "bio.p-endo-thermoregulation5",
      "bio.c-endo-thermoregulation5",
      "bio.c-endo-thermoregulation6"
    ],
    "widgetRequirements": {
      "completionKey": "endoPassed",
      "Foundation": [
        "sensors",
        "responses"
      ],
      "Higher": [
        "sensors",
        "responses",
        "mechanisms"
      ]
    }
  },
  {
    "id": "science.biology.homeostasis-and-response.endocrine-system",
    "title": "The endocrine system: chemical messages",
    "short": "The endocrine system: chemical messages",
    "topicId": "science.biology.homeostasis-and-response",
    "refs": [
      "5.3.1"
    ],
    "combinedRefs": [
      "5.3.1"
    ],
    "minutes": 35,
    "separate": false,
    "higher": false,
    "big": "Endocrine glands secrete hormones directly into the bloodstream. The blood carries a hormone around the body; it has an effect at a suitable target organ. A hormone is a chemical signal, not an electrical impulse travelling along a nerve.",
    "learn": [
      {
        "title": "Send a chemical message",
        "text": "Endocrine glands secrete hormones directly into the bloodstream. The blood carries a hormone around the body; it has an effect at a suitable target organ. A hormone is a chemical signal, not an electrical impulse travelling along a nerve.",
        "scene": "endo:glands:0"
      },
      {
        "title": "Locate the glands",
        "text": "The pituitary is at the base of the brain, the thyroid in the neck, the adrenal glands above the kidneys and the pancreas in the abdomen. Ovaries are in the pelvis; testes are in the scrotum. The diagram uses alternative reproductive-gland insets, rather than showing both in one body.",
        "scene": "endo:glands:1",
        "process": false
      },
      {
        "title": "Coordinate other glands",
        "text": "The pituitary gland releases several hormones in response to body conditions. Some stimulate other glands to release hormones. This coordinating role is why it is called a master gland; it does not mean it makes every hormone.",
        "scene": "endo:glands:2"
      },
      {
        "title": "Compare chemical and nervous control",
        "text": "Compared with nervous responses, hormonal effects are generally slower to begin and last longer. Hormones travel in blood, while electrical impulses travel along neurones. Different control pathways can work together.",
        "scene": "endo:glands:3"
      }
    ],
    "widget": "endo-endocrine-system",
    "prerequisites": [
      "science.biology.homeostasis-and-response.homeostasis"
    ],
    "skills": [
      "WS1.2",
      "MS2c"
    ],
    "practice": [
      {
        "id": "bio.p-endo-endocrine-system1",
        "prompt": "How are hormones transported?",
        "options": [
          "In the blood",
          "Only through air",
          "Along an optical fibre"
        ],
        "answer": 0,
        "why": "Endocrine glands release hormones into blood.",
        "concept": "bio.endo-endocrine-system"
      },
      {
        "id": "bio.p-endo-endocrine-system2",
        "prompt": "Where is the thyroid?",
        "options": [
          "Above a kidney",
          "In the neck",
          "Inside the retina"
        ],
        "answer": 1,
        "why": "The thyroid lies in the neck.",
        "concept": "bio.endo-endocrine-system"
      },
      {
        "id": "bio.p-endo-endocrine-system3",
        "prompt": "Which gland is called the master gland?",
        "options": [
          "Pancreas",
          "Ovary",
          "Pituitary"
        ],
        "answer": 2,
        "why": "Pituitary hormones can stimulate other glands.",
        "concept": "bio.endo-endocrine-system"
      },
      {
        "id": "bio.p-endo-endocrine-system4",
        "prompt": "How do hormonal effects generally compare with nervous effects?",
        "options": [
          "Slower to begin and longer lasting",
          "Always faster and shorter",
          "They never reach a target"
        ],
        "answer": 0,
        "why": "This is the general GCSE comparison.",
        "concept": "bio.endo-endocrine-system"
      },
      {
        "id": "bio.p-endo-endocrine-system5",
        "prompt": "Which pair is located above the kidneys?",
        "options": [
          "Adrenal glands",
          "Testes",
          "Thyroid lobes"
        ],
        "answer": 0,
        "why": "Adrenal glands sit above the kidneys.",
        "concept": "bio.endo-endocrine-system"
      }
    ],
    "check": [
      {
        "id": "bio.c-endo-endocrine-system1",
        "prompt": "In the body diagram, which gland is marked A?",
        "options": [
          "Pituitary",
          "Pancreas",
          "Adrenal gland"
        ],
        "answer": 0,
        "why": "A marks the base of the brain.",
        "concept": "bio.endo-endocrine-system",
        "figure": {
          "kind": "endo-figure",
          "diagram": "glands",
          "neutral": true
        }
      },
      {
        "id": "bio.c-endo-endocrine-system2",
        "prompt": "Which label marks the thyroid in the neck?",
        "options": [
          "D",
          "B",
          "F"
        ],
        "answer": 1,
        "why": "B is at the neck.",
        "concept": "bio.endo-endocrine-system",
        "figure": {
          "kind": "endo-figure",
          "diagram": "glands",
          "neutral": true
        }
      },
      {
        "id": "bio.c-endo-endocrine-system3",
        "prompt": "Which gland sits above the kidneys at C?",
        "options": [
          "Ovary",
          "Pancreas",
          "Adrenal gland"
        ],
        "answer": 2,
        "why": "Adrenal glands are above the kidneys.",
        "concept": "bio.endo-endocrine-system",
        "figure": {
          "kind": "endo-figure",
          "diagram": "glands",
          "neutral": true
        }
      },
      {
        "id": "bio.c-endo-endocrine-system4",
        "prompt": "D marks an abdominal gland that controls blood glucose. Name it.",
        "options": [
          "Pancreas",
          "Thyroid",
          "Pituitary"
        ],
        "answer": 0,
        "why": "The pancreas monitors and controls glucose concentration.",
        "concept": "bio.endo-endocrine-system",
        "figure": {
          "kind": "endo-figure",
          "diagram": "glands",
          "neutral": true
        }
      },
      {
        "id": "bio.c-endo-endocrine-system5",
        "prompt": "E marks the pelvic reproductive glands. Identify them.",
        "options": [
          "Adrenal glands",
          "Ovaries",
          "Thyroid"
        ],
        "answer": 1,
        "why": "Ovaries are in the pelvis.",
        "concept": "bio.endo-endocrine-system",
        "figure": {
          "kind": "endo-figure",
          "diagram": "glands",
          "neutral": true
        }
      },
      {
        "id": "bio.c-endo-endocrine-system6",
        "prompt": "F marks the glands in the scrotal inset. Identify them.",
        "options": [
          "Pancreas",
          "Ovaries",
          "Testes"
        ],
        "answer": 2,
        "why": "The testes lie in the scrotum.",
        "concept": "bio.endo-endocrine-system",
        "figure": {
          "kind": "endo-figure",
          "diagram": "glands",
          "neutral": true
        }
      },
      {
        "id": "bio.c-endo-endocrine-system7",
        "prompt": "Which sequence describes hormonal coordination?",
        "options": [
          "Gland secretes → blood carries → target responds",
          "Target sends light → blood disappears",
          "Gland secretes directly into a nerve"
        ],
        "answer": 0,
        "why": "Endocrine hormones enter blood and act at targets.",
        "concept": "bio.endo-endocrine-system"
      },
      {
        "id": "bio.c-endo-endocrine-system8",
        "prompt": "Why does master gland not mean only gland?",
        "options": [
          "It makes every hormone",
          "Some pituitary hormones stimulate other endocrine glands",
          "Other glands have no function"
        ],
        "answer": 1,
        "why": "The pituitary coordinates other glands rather than replacing them.",
        "concept": "bio.endo-endocrine-system"
      }
    ],
    "higherQuestions": []
  },
  {
    "id": "science.biology.homeostasis-and-response.insulin-control",
    "title": "Insulin: controlling blood glucose",
    "short": "Insulin: controlling blood glucose",
    "topicId": "science.biology.homeostasis-and-response",
    "refs": [
      "5.3.2"
    ],
    "combinedRefs": [
      "5.3.2"
    ],
    "minutes": 35,
    "separate": false,
    "higher": false,
    "big": "The pancreas monitors and controls blood glucose concentration. After absorption of carbohydrate digestion products, glucose concentration can rise. The pancreas responds to a high concentration by secreting insulin.",
    "learn": [
      {
        "title": "Monitor blood glucose",
        "text": "The pancreas monitors and controls blood glucose concentration. After absorption of carbohydrate digestion products, glucose concentration can rise. The pancreas responds to a high concentration by secreting insulin.",
        "scene": "endo:insulin:0"
      },
      {
        "title": "Signal glucose uptake",
        "text": "Insulin causes glucose to move from the blood into body cells. In liver and muscle cells, excess glucose is converted into glycogen for storage. Insulin is the signal; glucose is the substance being stored. Glycogen and glucagon are different words and different substances.",
        "scene": "endo:insulin:1"
      },
      {
        "title": "Trace the change in concentration",
        "text": "Glucose uptake and storage reduce blood glucose towards a suitable level. The worked model separates blood glucose dots, an insulin signal and a linked glycogen store. Its particle counts and timing are symbolic, not a dose calculator.",
        "scene": "endo:insulin:2"
      },
      {
        "title": "Read glucose evidence",
        "text": "The supplied graph shows original illustrative glucose concentrations over time. Read time from the horizontal axis and concentration from the vertical axis. Compare readings at the same time, state units and distinguish the observed change from an explanation of the mechanism.",
        "scene": "endo:data",
        "process": false
      }
    ],
    "widget": "endo-insulin-control",
    "prerequisites": [
      "science.biology.homeostasis-and-response.homeostasis"
    ],
    "skills": [
      "WS1.2",
      "MS2c"
    ],
    "practice": [
      {
        "id": "bio.p-endo-insulin-control1",
        "prompt": "What secretes insulin when blood glucose is high?",
        "options": [
          "Pancreas",
          "Sclera",
          "Cerebellum"
        ],
        "answer": 0,
        "why": "The pancreas monitors glucose and secretes insulin.",
        "concept": "bio.endo-insulin-control"
      },
      {
        "id": "bio.p-endo-insulin-control2",
        "prompt": "What is insulin’s role?",
        "options": [
          "Stored carbohydrate",
          "A signal promoting glucose uptake",
          "An electrical wire"
        ],
        "answer": 1,
        "why": "Insulin signals changes in target cells.",
        "concept": "bio.endo-insulin-control"
      },
      {
        "id": "bio.p-endo-insulin-control3",
        "prompt": "In which form is excess glucose stored in liver and muscle?",
        "options": [
          "Glucagon",
          "Insulin",
          "Glycogen"
        ],
        "answer": 2,
        "why": "Glycogen is the storage carbohydrate.",
        "concept": "bio.endo-insulin-control"
      },
      {
        "id": "bio.p-endo-insulin-control4",
        "prompt": "Glucose falls from12 to8 mmol/L. What is the decrease?",
        "options": [
          "4 mmol/L",
          "20 mmol/L",
          "1.5 mmol/L"
        ],
        "answer": 0,
        "why": "Subtract final from initial:12−8=4 mmol/L.",
        "concept": "bio.endo-insulin-control"
      },
      {
        "id": "bio.p-endo-insulin-control5",
        "prompt": "Which direction of movement helps lower blood glucose?",
        "options": [
          "Blood into cells",
          "Cells into blood only",
          "Insulin into glycogen"
        ],
        "answer": 0,
        "why": "Uptake removes glucose from the blood.",
        "concept": "bio.endo-insulin-control"
      }
    ],
    "check": [
      {
        "id": "bio.c-endo-insulin-control1",
        "prompt": "After a meal, concentration rises. Which response is expected?",
        "options": [
          "Insulin release from the pancreas",
          "Insulin release from the retina",
          "Glycogen secretion from a nerve"
        ],
        "answer": 0,
        "why": "The pancreas responds to high glucose by secreting insulin.",
        "concept": "bio.endo-insulin-control"
      },
      {
        "id": "bio.c-endo-insulin-control2",
        "prompt": "Which statement separates signal from stored substance?",
        "options": [
          "Insulin is converted directly to glycogen",
          "Insulin signals uptake; excess glucose can form glycogen",
          "Glycogen is an electrical impulse"
        ],
        "answer": 1,
        "why": "Hormone and carbohydrate have distinct roles.",
        "concept": "bio.endo-insulin-control"
      },
      {
        "id": "bio.c-endo-insulin-control3",
        "prompt": "Which tissues store excess glucose as glycogen in this specification?",
        "options": [
          "Cornea and enamel",
          "Only the brainstem",
          "Liver and muscle"
        ],
        "answer": 2,
        "why": "These tissues convert excess glucose to glycogen.",
        "concept": "bio.endo-insulin-control"
      },
      {
        "id": "bio.c-endo-insulin-control4",
        "prompt": "What happens to glucose concentration in blood when uptake and storage exceed glucose entry?",
        "options": [
          "It falls",
          "It must rise",
          "It becomes insulin"
        ],
        "answer": 0,
        "why": "Net removal lowers concentration.",
        "concept": "bio.endo-insulin-control"
      },
      {
        "id": "bio.c-endo-insulin-control5",
        "prompt": "On the fresh graph, what is curve A at 60 minutes?",
        "options": [
          "14 mmol/L",
          "8 mmol/L",
          "6 mmol/L"
        ],
        "answer": 1,
        "why": "Read curve A at time 60:8 mmol/L.",
        "concept": "bio.endo-insulin-control",
        "figure": {
          "kind": "endo-figure",
          "diagram": "data",
          "fresh": true
        }
      },
      {
        "id": "bio.c-endo-insulin-control6",
        "prompt": "On the fresh graph, by how much does A fall between 30 and 120 minutes?",
        "options": [
          "4 mmol/L",
          "16 mmol/L",
          "0 mmol/L"
        ],
        "answer": 0,
        "why": "10−6=4 mmol/L.",
        "concept": "bio.endo-insulin-control",
        "figure": {
          "kind": "endo-figure",
          "diagram": "data",
          "fresh": true
        }
      }
    ],
    "higherQuestions": []
  },
  {
    "id": "science.biology.homeostasis-and-response.diabetes",
    "title": "Diabetes: mechanisms, treatment & evidence",
    "short": "Diabetes: mechanisms, treatment & evidence",
    "topicId": "science.biology.homeostasis-and-response",
    "refs": [
      "5.3.2"
    ],
    "combinedRefs": [
      "5.3.2"
    ],
    "minutes": 35,
    "separate": false,
    "higher": false,
    "big": "In Type1 diabetes the pancreas fails to produce sufficient insulin, leading to uncontrolled high blood glucose without effective treatment. It is normally treated with insulin injections. Type1 is not simply a result of eating sugar.",
    "learn": [
      {
        "title": "Distinguish two mechanisms",
        "text": "In Type 1 diabetes the pancreas fails to produce sufficient insulin, leading to uncontrolled high blood glucose without effective treatment. It is normally treated with insulin injections. Type 1 is not simply a result of eating sugar.",
        "scene": "endo:data:0"
      },
      {
        "title": "Understand reduced insulin response",
        "text": "In Type 2 diabetes, body cells no longer respond normally to insulin produced by the pancreas. A carbohydrate-controlled diet and an exercise regime are common treatments. Management depends on the person; these GCSE comparisons are not individual treatment instructions.",
        "scene": "endo:data:1"
      },
      {
        "title": "Interpret a response graph",
        "text": "The supplied curves are original illustrative records. Compare concentrations at matched times and describe the trend after the stated intervention. A glucose graph alone is not sufficient to diagnose the type of diabetes or select an insulin dose.",
        "scene": "endo:data:2"
      },
      {
        "title": "Evaluate risk evidence fairly",
        "text": "Obesity is a risk factor for Type 2 diabetes, not a guarantee or the sole explanation for every case. An association in group data does not prove causation in an individual. Evaluate study design, other factors and uncertainty. Consider access to support, affordability and stigma when recommending public-health measures.",
        "scene": "endo:data:3"
      }
    ],
    "widget": "endo-diabetes",
    "prerequisites": [
      "science.biology.homeostasis-and-response.insulin-control"
    ],
    "skills": [
      "WS1.3",
      "MS2c"
    ],
    "practice": [
      {
        "id": "bio.p-endo-diabetes1",
        "prompt": "Type 1 diabetes involves…",
        "options": [
          "Insufficient insulin production",
          "Only a longer optic nerve",
          "Cells storing too much insulin as glycogen"
        ],
        "answer": 0,
        "why": "The pancreas does not produce enough insulin.",
        "concept": "bio.endo-diabetes"
      },
      {
        "id": "bio.p-endo-diabetes2",
        "prompt": "What is a common treatment for Type 1?",
        "options": [
          "Laser corneal surgery",
          "Insulin injections",
          "No monitoring under any circumstances"
        ],
        "answer": 1,
        "why": "Insulin replacement is the normal GCSE treatment.",
        "concept": "bio.endo-diabetes"
      },
      {
        "id": "bio.p-endo-diabetes3",
        "prompt": "Type 2 diabetes primarily involves…",
        "options": [
          "An absence of blood",
          "A missing retina",
          "Reduced cell response to insulin"
        ],
        "answer": 2,
        "why": "Cells no longer respond normally to insulin.",
        "concept": "bio.endo-diabetes"
      },
      {
        "id": "bio.p-endo-diabetes4",
        "prompt": "What does risk factor mean?",
        "options": [
          "Associated with increased likelihood, not certainty",
          "Guarantees the condition",
          "Proves a person is at fault"
        ],
        "answer": 0,
        "why": "Risk describes probability, not blame or inevitability.",
        "concept": "bio.endo-diabetes"
      },
      {
        "id": "bio.p-endo-diabetes5",
        "prompt": "Which is a common Type 2 management approach in the spec?",
        "options": [
          "Carbohydrate-controlled diet and exercise",
          "Eye-lens replacement",
          "Always ignore blood glucose"
        ],
        "answer": 0,
        "why": "These are common GCSE examples of management.",
        "concept": "bio.endo-diabetes"
      }
    ],
    "check": [
      {
        "id": "bio.c-endo-diabetes1",
        "prompt": "A pancreas produces insufficient insulin. Which mechanism fits?",
        "options": [
          "Type1 diabetes",
          "Only myopia",
          "Only a low skin temperature"
        ],
        "answer": 0,
        "why": "Type 1 involves insufficient insulin production.",
        "concept": "bio.endo-diabetes"
      },
      {
        "id": "bio.c-endo-diabetes2",
        "prompt": "Insulin is present, but cells respond poorly. Which mechanism fits?",
        "options": [
          "Type1 only",
          "Type2 diabetes",
          "Normal accommodation"
        ],
        "answer": 1,
        "why": "Reduced response is the Type 2 mechanism.",
        "concept": "bio.endo-diabetes"
      },
      {
        "id": "bio.c-endo-diabetes3",
        "prompt": "Which comparison of treatments is accurate?",
        "options": [
          "Type1 never uses insulin",
          "Every Type2 case needs no support",
          "Type1 commonly uses insulin; diet/exercise are common Type2 approaches"
        ],
        "answer": 2,
        "why": "Compare the usual GCSE treatments without claiming all cases are identical.",
        "concept": "bio.endo-diabetes"
      },
      {
        "id": "bio.c-endo-diabetes4",
        "prompt": "A group study finds more Type 2 diabetes with obesity. What follows?",
        "options": [
          "An increased risk association, not certainty for each individual",
          "Every individual will develop diabetes",
          "The study alone proves every causal step"
        ],
        "answer": 0,
        "why": "Association and individual outcomes are different.",
        "concept": "bio.endo-diabetes"
      },
      {
        "id": "bio.c-endo-diabetes5",
        "prompt": "At120 minutes, what is the difference B−A on the fresh graph?",
        "options": [
          "18 mmol/L",
          "6 mmol/L",
          "2 mmol/L"
        ],
        "answer": 1,
        "why": "B: 12 minus A: 6=6 mmol/L.",
        "concept": "bio.endo-diabetes",
        "figure": {
          "kind": "endo-figure",
          "diagram": "data",
          "fresh": true
        }
      },
      {
        "id": "bio.c-endo-diabetes6",
        "prompt": "What conclusion is justified by the graph alone?",
        "options": [
          "A definite personal diagnosis and dose",
          "The cause of every case",
          "A description of the supplied concentration trends"
        ],
        "answer": 2,
        "why": "Interpret data without overclaiming diagnosis.",
        "concept": "bio.endo-diabetes"
      },
      {
        "id": "bio.c-endo-diabetes7",
        "prompt": "Which public-health recommendation considers social issues?",
        "options": [
          "Offer affordable support and avoid blaming individuals",
          "Assume everyone has equal access to healthy food",
          "Use stigma as the treatment"
        ],
        "answer": 0,
        "why": "Evidence-based support should consider access and stigma.",
        "concept": "bio.endo-diabetes"
      }
    ],
    "higherQuestions": []
  },
  {
    "id": "science.biology.homeostasis-and-response.glucagon-feedback",
    "title": "Glucagon & negative feedback",
    "short": "Glucagon & negative feedback",
    "topicId": "science.biology.homeostasis-and-response",
    "refs": [
      "5.3.2"
    ],
    "combinedRefs": [
      "5.3.2"
    ],
    "minutes": 35,
    "separate": false,
    "higher": true,
    "big": "When blood glucose concentration is too low, the pancreas releases glucagon. Glucagon acts on the liver, where stored glycogen is converted into glucose. Glucose is released into the blood, raising its concentration.",
    "learn": [
      {
        "title": "Respond to low blood glucose",
        "text": "When blood glucose concentration is too low, the pancreas releases glucagon. Glucagon acts on the liver, where stored glycogen is converted into glucose. Glucose is released into the blood, raising its concentration.",
        "scene": "endo:glucagon:0"
      },
      {
        "title": "Keep the names distinct",
        "text": "Glucose is a small sugar; glycogen is a storage carbohydrate; glucagon is the hormone involved in low-glucose correction. Insulin is the hormone involved in high-glucose correction. Glucagon is not converted into glucose.",
        "scene": "endo:glucagon:1"
      },
      {
        "title": "Explain negative feedback",
        "text": "When glucose rises above a suitable level, insulin promotes uptake and storage, lowering it. When glucose falls below a suitable level, glucagon promotes liver glucose release, raising it. Each response opposes the original change; as suitable levels are restored, the corrective hormonal drive decreases.",
        "scene": "endo:glucagon:2"
      },
      {
        "title": "Predict the direction of change",
        "text": "Negative feedback regulates around a suitable range rather than making a concentration mathematically fixed. Use the starting condition to choose the corrective pathway. The worked loop replays one example; it does not mean high and low states must alternate on a fixed schedule.",
        "scene": "endo:glucagon:3"
      }
    ],
    "widget": "endo-glucagon-feedback",
    "prerequisites": [
      "science.biology.homeostasis-and-response.insulin-control"
    ],
    "skills": [
      "WS1.2",
      "MS2c"
    ],
    "practice": [
      {
        "id": "bio.p-endo-glucagon-feedback1",
        "prompt": "Which hormone is released when blood glucose is too low?",
        "options": [
          "Glucagon",
          "Glycogen",
          "Glucose"
        ],
        "answer": 0,
        "why": "Glucagon is the pancreatic hormone.",
        "concept": "bio.endo-glucagon-feedback"
      },
      {
        "id": "bio.p-endo-glucagon-feedback2",
        "prompt": "Where does glucagon promote glycogen breakdown?",
        "options": [
          "Cornea",
          "Liver",
          "Only the scrotum"
        ],
        "answer": 1,
        "why": "The liver releases glucose into blood.",
        "concept": "bio.endo-glucagon-feedback"
      },
      {
        "id": "bio.p-endo-glucagon-feedback3",
        "prompt": "What happens to blood glucose after this liver release?",
        "options": [
          "It becomes a nerve impulse",
          "It must decrease",
          "It increases"
        ],
        "answer": 2,
        "why": "Release adds glucose to blood.",
        "concept": "bio.endo-glucagon-feedback"
      },
      {
        "id": "bio.p-endo-glucagon-feedback4",
        "prompt": "Why is this negative feedback?",
        "options": [
          "The response opposes the original change",
          "It always makes the change larger",
          "Negative means it is harmful"
        ],
        "answer": 0,
        "why": "A low concentration triggers a raising response.",
        "concept": "bio.endo-glucagon-feedback"
      },
      {
        "id": "bio.p-endo-glucagon-feedback5",
        "prompt": "What happens as a suitable level is restored?",
        "options": [
          "Corrective hormonal drive decreases",
          "Glucagon must rise forever",
          "Glucose becomes glucagon"
        ],
        "answer": 0,
        "why": "Feedback reduces the corrective drive.",
        "concept": "bio.endo-glucagon-feedback"
      }
    ],
    "check": [
      {
        "id": "bio.c-endo-glucagon-feedback1",
        "prompt": "A concentration falls below a suitable level. Which pathway is corrective?",
        "options": [
          "Pancreas releases glucagon → liver releases glucose",
          "Pancreas releases glycogen → retina stores insulin",
          "Only insulin-driven storage increases"
        ],
        "answer": 0,
        "why": "Glucagon supports liver glucose release.",
        "concept": "bio.endo-glucagon-feedback"
      },
      {
        "id": "bio.c-endo-glucagon-feedback2",
        "prompt": "What is converted to glucose in the liver?",
        "options": [
          "Glucagon",
          "Stored glycogen",
          "Insulin"
        ],
        "answer": 1,
        "why": "Glycogen supplies glucose; glucagon is a signal.",
        "concept": "bio.endo-glucagon-feedback"
      },
      {
        "id": "bio.c-endo-glucagon-feedback3",
        "prompt": "A high concentration triggers uptake/storage that lowers it. This is…",
        "options": [
          "Positive feedback",
          "A pupil response",
          "Negative feedback"
        ],
        "answer": 2,
        "why": "The response opposes the rise.",
        "concept": "bio.endo-glucagon-feedback"
      },
      {
        "id": "bio.c-endo-glucagon-feedback4",
        "prompt": "After low-glucose correction restores suitable levels, what should happen?",
        "options": [
          "The corrective glucagon drive decreases",
          "Glucagon necessarily increases forever",
          "All glucose must disappear"
        ],
        "answer": 0,
        "why": "Feedback reduces the corrective drive.",
        "concept": "bio.endo-glucagon-feedback"
      },
      {
        "id": "bio.c-endo-glucagon-feedback5",
        "prompt": "Which statement distinguishes the paired hormones?",
        "options": [
          "Insulin and glucagon are both stored sugars",
          "Insulin lowers high glucose; glucagon raises low glucose",
          "Both always lower blood glucose"
        ],
        "answer": 1,
        "why": "The two pathways correct opposite changes.",
        "concept": "bio.endo-glucagon-feedback"
      },
      {
        "id": "bio.c-endo-glucagon-feedback6",
        "prompt": "Does negative feedback require a perfectly constant glucose reading?",
        "options": [
          "Yes; no fluctuation is allowed",
          "Yes; the blood cannot transport glucose",
          "No; regulation permits fluctuations around a suitable range"
        ],
        "answer": 2,
        "why": "Regulation is dynamic, not exact constancy.",
        "concept": "bio.endo-glucagon-feedback"
      }
    ],
    "higherQuestions": []
  }
];
export const endoConcepts={"bio.endo-thermoregulation": "Controlling body temperature", "bio.endo-endocrine-system": "The endocrine system: chemical messages", "bio.endo-insulin-control": "Insulin: controlling blood glucose", "bio.endo-diabetes": "Diabetes: mechanisms, treatment & evidence", "bio.endo-glucagon-feedback": "Glucagon & negative feedback"};
