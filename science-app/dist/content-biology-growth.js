export const growthLessons=[
  {
    "id": "science.biology.homeostasis-and-response.hormone-feedback",
    "title": "Adrenaline, thyroxine & feedback",
    "short": "Adrenaline, thyroxine & feedback",
    "topicId": "science.biology.homeostasis-and-response",
    "refs": [
      "5.3.7"
    ],
    "combinedRefs": [
      "5.3.6"
    ],
    "minutes": 35,
    "separate": false,
    "higher": true,
    "big": "Fear or stress can trigger adrenaline release from the adrenal glands. Heart rate increases, helping deliver more oxygen and glucose to the brain and muscles for a rapid response.",
    "learn": [
      {
        "title": "Prepare for action",
        "text": "Fear or stress can trigger adrenaline release from the adrenal glands. Heart rate increases, helping deliver more oxygen and glucose to the brain and muscles for a rapid response.",
        "scene": "hgrowth:adrenaline:0",
        "processFilm": "growth-adrenaline"
      },
      {
        "title": "Control the resting rate",
        "text": "Thyroxine is released by the thyroid gland. It stimulates basal metabolic rate: the rate of energy use at rest. It also supports growth and development. Thyroxine and adrenaline have different roles.",
        "scene": "hgrowth:thyroid:1"
      },
      {
        "title": "A rise reduces further release",
        "text": "In a simplified thyroxine control loop, a low level permits more pituitary stimulation of the thyroid. A high level inhibits further pituitary stimulation, so thyroid thyroxine release falls. This opposes the original change.",
        "scene": "hgrowth:feedback:2"
      },
      {
        "title": "Read the inhibitory arrow",
        "text": "A minus sign on the return link means inhibition. If thyroxine rises, stimulation of further secretion decreases; if it falls, inhibition is reduced. Negative feedback maintains a suitable range rather than increasing a change without limit.",
        "scene": "hgrowth:control:3",
        "process": false
      }
    ],
    "widget": "hgrowth-hormone-feedback",
    "prerequisites": [
      "science.biology.homeostasis-and-response.endocrine-system"
    ],
    "skills": [
      "WS1.2",
      "MS2c"
    ],
    "practice": [
      {
        "id": "bio.p-growth-hormone-feedback1",
        "prompt": "Which gland releases adrenaline?",
        "options": [
          "Adrenal glands",
          "Thyroid",
          "Pancreas"
        ],
        "answer": 0,
        "why": "Adrenal glands release adrenaline during fear or stress.",
        "concept": "bio.growth-hormone-feedback"
      },
      {
        "id": "bio.p-growth-hormone-feedback2",
        "prompt": "What prepares muscles for a rapid response?",
        "options": [
          "A lower delivery of all fuels",
          "Increased heart rate and delivery of oxygen and glucose",
          "Converting adrenaline into muscle"
        ],
        "answer": 1,
        "why": "Adrenaline supports delivery of respiratory substrates.",
        "concept": "bio.growth-hormone-feedback"
      },
      {
        "id": "bio.p-growth-hormone-feedback3",
        "prompt": "Which is a role of thyroxine?",
        "options": [
          "Filtering urea",
          "Making sperm only",
          "Stimulating basal metabolic rate and supporting growth"
        ],
        "answer": 2,
        "why": "Thyroxine affects metabolic rate, growth and development.",
        "concept": "bio.growth-hormone-feedback"
      },
      {
        "id": "bio.p-growth-hormone-feedback4",
        "prompt": "Thyroxine rises. What should the feedback do?",
        "options": [
          "Reduce stimulation of further release",
          "Amplify release indefinitely",
          "Stop all blood circulation"
        ],
        "answer": 0,
        "why": "Negative feedback opposes the rise.",
        "concept": "bio.growth-hormone-feedback"
      }
    ],
    "check": [
      {
        "id": "bio.c-growth-hormone-feedback1",
        "prompt": "An unexpected threat triggers a faster heartbeat. Which hormone is involved?",
        "options": [
          "Insulin",
          "Adrenaline",
          "Progesterone"
        ],
        "answer": 1,
        "why": "Adrenaline prepares the body for rapid action.",
        "concept": "bio.growth-hormone-feedback"
      },
      {
        "id": "bio.c-growth-hormone-feedback2",
        "prompt": "Where is thyroxine produced?",
        "options": [
          "Adrenal gland",
          "Pituitary only",
          "Thyroid gland"
        ],
        "answer": 2,
        "why": "The thyroid produces thyroxine.",
        "concept": "bio.growth-hormone-feedback"
      },
      {
        "id": "bio.c-growth-hormone-feedback3",
        "prompt": "What does basal metabolic rate describe?",
        "options": [
          "Energy use at rest",
          "Only running speed",
          "Blood filtration rate"
        ],
        "answer": 0,
        "why": "Basal metabolic rate concerns resting energy use.",
        "concept": "bio.growth-hormone-feedback"
      },
      {
        "id": "bio.c-growth-hormone-feedback4",
        "prompt": "A diagram shows high thyroxine inhibiting pituitary stimulation. What follows?",
        "options": [
          "More stimulation without limit",
          "Less further thyroxine secretion",
          "Thyroxine becomes adrenaline"
        ],
        "answer": 1,
        "why": "Inhibition reduces further secretion.",
        "concept": "bio.growth-hormone-feedback"
      },
      {
        "id": "bio.c-growth-hormone-feedback5",
        "prompt": "Thyroxine falls below the suitable range. What happens in the simplified loop?",
        "options": [
          "All glands are destroyed",
          "Inhibition always increases",
          "Reduced inhibition allows more stimulation of secretion"
        ],
        "answer": 2,
        "why": "The response tends to restore the level.",
        "concept": "bio.growth-hormone-feedback"
      },
      {
        "id": "bio.c-growth-hormone-feedback6",
        "prompt": "Which explanation links adrenaline to respiration?",
        "options": [
          "More oxygen and glucose reach brain and muscle tissue",
          "Adrenaline replaces oxygen",
          "Muscles no longer need glucose"
        ],
        "answer": 0,
        "why": "These substrates support respiration for rapid activity.",
        "concept": "bio.growth-hormone-feedback"
      }
    ]
  },
  {
    "id": "science.biology.homeostasis-and-response.plant-tropisms",
    "title": "Plant growth: light & gravity",
    "short": "Plant growth: light & gravity",
    "topicId": "science.biology.homeostasis-and-response",
    "refs": [
      "5.4.1"
    ],
    "combinedRefs": [],
    "minutes": 35,
    "separate": true,
    "higher": false,
    "big": "A tropism is a directional growth response. Shoots grow towards light: positive phototropism. Auxin becomes unevenly distributed; cells on the shaded side elongate more, bending the shoot towards the light.",
    "learn": [
      {
        "title": "Grow towards useful light",
        "text": "A tropism is a directional growth response. Shoots grow towards light: positive phototropism. Auxin becomes unevenly distributed; cells on the shaded side elongate more, bending the shoot towards the light.",
        "scene": "hgrowth:light:0"
      },
      {
        "title": "Gravity gives a direction",
        "text": "When a seedling is placed horizontally, auxin accumulates on the lower side. In the shoot it promotes greater elongation there, so the shoot curves upwards, against gravity: negative gravitropism.",
        "scene": "hgrowth:shoot-gravity:1",
        "processFilm": "growth-shoot-gravity"
      },
      {
        "title": "Roots respond differently",
        "text": "In roots, the higher auxin concentration on the lower side inhibits elongation. The upper side grows more, so the root curves downwards with gravity: positive gravitropism. The same signal can have different effects in different tissues.",
        "scene": "hgrowth:root-gravity:2",
        "processFilm": "growth-root-gravity"
      },
      {
        "title": "Compare unequal sides",
        "text": "A bend develops because the two sides grow at different rates. The seedling does not pivot like a rigid rod. Hormones coordinate growth; the diagram enlarges cells and compresses time to make the difference visible.",
        "scene": "hgrowth:compare:3",
        "process": false
      }
    ],
    "widget": "hgrowth-plant-tropisms",
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "WS1.3",
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-growth-plant-tropisms1",
        "prompt": "A shoot bends towards a window. Name the response.",
        "options": [
          "Positive phototropism",
          "Negative gravitropism only",
          "Diffusion"
        ],
        "answer": 0,
        "why": "It grows towards a light stimulus.",
        "concept": "bio.growth-plant-tropisms"
      },
      {
        "id": "bio.p-growth-plant-tropisms2",
        "prompt": "Which shoot side elongates more with one-sided light?",
        "options": [
          "The lit side",
          "The shaded side",
          "Neither side"
        ],
        "answer": 1,
        "why": "More elongation on the shaded side bends the shoot towards light.",
        "concept": "bio.growth-plant-tropisms"
      },
      {
        "id": "bio.p-growth-plant-tropisms3",
        "prompt": "More auxin on the lower side of a root does what?",
        "options": [
          "Always increases elongation",
          "Turns cells into seeds",
          "Inhibits elongation there"
        ],
        "answer": 2,
        "why": "Roots respond differently from shoots.",
        "concept": "bio.growth-plant-tropisms"
      },
      {
        "id": "bio.p-growth-plant-tropisms4",
        "prompt": "A root grows downwards. Its gravity response is…",
        "options": [
          "Positive gravitropism",
          "Negative gravitropism",
          "Positive phototropism only"
        ],
        "answer": 0,
        "why": "Growth is towards the direction of gravity.",
        "concept": "bio.growth-plant-tropisms"
      }
    ],
    "check": [
      {
        "id": "bio.c-growth-plant-tropisms1",
        "prompt": "A lamp is on the left of a shoot. Which direction does it grow?",
        "options": [
          "Right",
          "Left, towards the lamp",
          "Down only"
        ],
        "answer": 1,
        "why": "Positive phototropism directs shoot growth towards light.",
        "concept": "bio.growth-plant-tropisms"
      },
      {
        "id": "bio.c-growth-plant-tropisms2",
        "prompt": "In that shoot, which side elongates more?",
        "options": [
          "Lit left side",
          "Both sides must stop",
          "Shaded right side"
        ],
        "answer": 2,
        "why": "Greater shaded-side elongation causes the bend.",
        "concept": "bio.growth-plant-tropisms"
      },
      {
        "id": "bio.c-growth-plant-tropisms3",
        "prompt": "A horizontal shoot has more auxin on its lower side. What follows?",
        "options": [
          "Lower side elongates more; shoot curves up",
          "Lower side stops; shoot curves down",
          "Both sides die"
        ],
        "answer": 0,
        "why": "Auxin promotes shoot elongation on the lower side.",
        "concept": "bio.growth-plant-tropisms"
      },
      {
        "id": "bio.c-growth-plant-tropisms4",
        "prompt": "A horizontal root has more auxin on its lower side. What follows?",
        "options": [
          "Lower side elongates more",
          "Lower side elongates less; root curves down",
          "Root becomes a shoot"
        ],
        "answer": 1,
        "why": "Higher auxin inhibits root elongation there.",
        "concept": "bio.growth-plant-tropisms"
      },
      {
        "id": "bio.c-growth-plant-tropisms5",
        "prompt": "Which statement compares the tissues correctly?",
        "options": [
          "Auxin has no effect on roots",
          "Roots and shoots always respond identically",
          "Unequal auxin causes different elongation responses in roots and shoots"
        ],
        "answer": 2,
        "why": "The effect depends on tissue and concentration.",
        "concept": "bio.growth-plant-tropisms"
      },
      {
        "id": "bio.c-growth-plant-tropisms6",
        "prompt": "What causes the curvature?",
        "options": [
          "Unequal growth on the two sides",
          "An instantaneous hinge rotation",
          "Movement without growth"
        ],
        "answer": 0,
        "why": "Tropisms are directional growth responses.",
        "concept": "bio.growth-plant-tropisms"
      }
    ]
  },
  {
    "id": "science.biology.homeostasis-and-response.seedling-practical",
    "title": "Investigating seedling growth",
    "short": "Investigating seedling growth",
    "topicId": "science.biology.homeostasis-and-response",
    "refs": [
      "5.4.1"
    ],
    "combinedRefs": [],
    "minutes": 35,
    "separate": true,
    "higher": false,
    "big": "Required practical 8 investigates light or gravity using newly germinated seedlings. To test light direction, compare one-sided light with evenly lit seedlings of the same species and similar starting size. Keep water, temperature and time comparable.",
    "learn": [
      {
        "title": "Change one stimulus",
        "text": "Required practical 8 investigates light or gravity using newly germinated seedlings. To test light direction, compare one-sided light with evenly lit seedlings of the same species and similar starting size. Keep water, temperature and time comparable.",
        "scene": "hgrowth:setup:0",
        "process": false
      },
      {
        "title": "Separate gravity from light",
        "text": "To investigate gravity, orient germinated seedlings horizontally and observe root and shoot growth, keeping light equal or using darkness so one-sided light is not the explanation. An upright comparison helps identify directional changes.",
        "scene": "hgrowth:gravity-setup:1",
        "process": false
      },
      {
        "title": "Record length and form",
        "text": "Measure root or shoot length consistently along the organ, from the same starting point. Record initial and final lengths with units and calculate changes. Use several seedlings and repeat. A mean describes the sample, not every individual.",
        "scene": "hgrowth:length:2",
        "process": false
      },
      {
        "title": "Draw what was observed",
        "text": "Make careful, labelled biological drawings as well as length measurements. Use clear continuous outlines and label lines to structures. Record light/gravity direction and time so curvature can be interpreted. This screen assembles a schematic; you still need real observation, measurement and freehand drawing practice.",
        "scene": "hgrowth:drawing:3",
        "process": false
      }
    ],
    "widget": "hgrowth-seedling-practical",
    "prerequisites": [
      "science.biology.homeostasis-and-response.plant-tropisms"
    ],
    "skills": [
      "AT1",
      "AT3",
      "AT4",
      "AT7",
      "WS2.2",
      "MS2b"
    ],
    "practice": [
      {
        "id": "bio.p-growth-seedling-practical1",
        "prompt": "What should change in a light-direction investigation?",
        "options": [
          "Direction of light",
          "Species and water together",
          "All conditions at once"
        ],
        "answer": 0,
        "why": "Change the independent variable while controlling other factors.",
        "concept": "bio.growth-seedling-practical"
      },
      {
        "id": "bio.p-growth-seedling-practical2",
        "prompt": "Why keep one-sided light out of a gravity test?",
        "options": [
          "To remove all water",
          "So a light response is not a competing explanation",
          "Because gravity disappears in light"
        ],
        "answer": 1,
        "why": "Control confounding light direction.",
        "concept": "bio.growth-seedling-practical"
      },
      {
        "id": "bio.p-growth-seedling-practical3",
        "prompt": "A shoot grows from 9 mm to 24 mm. Its increase is…",
        "options": [
          "33 mm",
          "2.7 mm",
          "15 mm"
        ],
        "answer": 2,
        "why": "24−9=15 mm.",
        "concept": "bio.growth-seedling-practical"
      },
      {
        "id": "bio.p-growth-seedling-practical4",
        "prompt": "What records must this practical include?",
        "options": [
          "Lengths and careful labelled biological drawings",
          "Only a decorative photograph",
          "Only a guessed direction"
        ],
        "answer": 0,
        "why": "The specification requires measurements and labelled drawings.",
        "concept": "bio.growth-seedling-practical"
      }
    ],
    "check": [
      {
        "id": "bio.c-growth-seedling-practical1",
        "prompt": "Which is a suitable controlled variable in a light-direction test?",
        "options": [
          "Bend direction",
          "Seedling species",
          "Final length"
        ],
        "answer": 1,
        "why": "Species should be kept comparable.",
        "concept": "bio.growth-seedling-practical"
      },
      {
        "id": "bio.c-growth-seedling-practical2",
        "prompt": "Which setup helps isolate a gravity response?",
        "options": [
          "Change light and water together",
          "Use unrelated species",
          "Horizontal seedlings without one-sided light"
        ],
        "answer": 2,
        "why": "Remove directional light as a competing stimulus.",
        "concept": "bio.growth-seedling-practical"
      },
      {
        "id": "bio.c-growth-seedling-practical3",
        "prompt": "A root grows from 7 mm to 25 mm. Increase?",
        "options": [
          "18 mm",
          "32 mm",
          "3.6 mm"
        ],
        "answer": 0,
        "why": "25−7=18 mm.",
        "concept": "bio.growth-seedling-practical"
      },
      {
        "id": "bio.c-growth-seedling-practical4",
        "prompt": "Three length increases are 8, 10 and 12 mm. Mean?",
        "options": [
          "30 mm",
          "10 mm",
          "2 mm"
        ],
        "answer": 1,
        "why": "Sum30 divided by3 is10 mm.",
        "concept": "bio.growth-seedling-practical"
      },
      {
        "id": "bio.c-growth-seedling-practical5",
        "prompt": "Which drawing is most useful scientifically?",
        "options": [
          "Shaded artwork without labels",
          "A guessed ideal result",
          "Clear observed outlines with root/shoot labels and direction/time recorded"
        ],
        "answer": 2,
        "why": "Drawings communicate observed structure and direction.",
        "concept": "bio.growth-seedling-practical"
      },
      {
        "id": "bio.c-growth-seedling-practical6",
        "prompt": "What does the digital schematic demonstrate?",
        "options": [
          "Planning and interpretation; it does not replace real practical work",
          "Certified apparatus competence",
          "Proof every seedling grows identically"
        ],
        "answer": 0,
        "why": "Physical observation, handling and freehand recording remain necessary.",
        "concept": "bio.growth-seedling-practical"
      }
    ]
  },
  {
    "id": "science.biology.homeostasis-and-response.auxin-applications",
    "title": "Using auxins in plant production",
    "short": "Using auxins in plant production",
    "topicId": "science.biology.homeostasis-and-response",
    "refs": [
      "5.4.2"
    ],
    "combinedRefs": [],
    "minutes": 35,
    "separate": true,
    "higher": true,
    "big": "Rooting powders contain auxins that promote root formation on plant cuttings. New roots help a cutting take up water as it becomes established. The hormone supports a developmental response; it is not a food supply.",
    "learn": [
      {
        "title": "Encourage roots on a cutting",
        "text": "Rooting powders contain auxins that promote root formation on plant cuttings. New roots help a cutting take up water as it becomes established. The hormone supports a developmental response; it is not a food supply.",
        "scene": "hgrowth:cutting:0"
      },
      {
        "title": "Grow cells in tissue culture",
        "text": "Auxins can promote growth in plant tissue culture. Small pieces of plant tissue are grown under controlled, sterile conditions. Hormone conditions help regulate development; the plant cells still need suitable nutrients and conditions.",
        "scene": "hgrowth:culture:1",
        "process": false
      },
      {
        "title": "Control weeds selectively",
        "text": "Some synthetic auxins are used as selective weedkillers, for example controlling broad-leaved weeds among cereal crops. Excessive disruption of growth kills susceptible plants. Selectivity does not mean every non-target plant is safe.",
        "scene": "hgrowth:weed:2",
        "process": false
      },
      {
        "title": "Weigh production and biodiversity",
        "text": "Reducing weeds can reduce competition and improve crop production. It can also remove wild plants and food or habitats for other organisms. Evaluate crop benefits alongside biodiversity, exposure and local evidence; do not assume a single result applies to every field.",
        "scene": "hgrowth:biodiversity:3",
        "process": false
      }
    ],
    "widget": "hgrowth-auxin-applications",
    "prerequisites": [
      "science.biology.homeostasis-and-response.plant-tropisms"
    ],
    "skills": [
      "WS1.2",
      "WS1.3",
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-growth-auxin-applications1",
        "prompt": "Why apply rooting powder to a cutting?",
        "options": [
          "Promote root formation",
          "Replace all water",
          "Prevent every cell division"
        ],
        "answer": 0,
        "why": "Auxins promote rooting.",
        "concept": "bio.growth-auxin-applications"
      },
      {
        "id": "bio.p-growth-auxin-applications2",
        "prompt": "Where else are auxins used to promote growth?",
        "options": [
          "Dialysis fluid",
          "Plant tissue culture",
          "Only human muscle"
        ],
        "answer": 1,
        "why": "Auxins have applications in tissue culture.",
        "concept": "bio.growth-auxin-applications"
      },
      {
        "id": "bio.p-growth-auxin-applications3",
        "prompt": "Why can a selective weedkiller affect biodiversity?",
        "options": [
          "It creates every species",
          "Only the crop matters",
          "Removing wild plants can affect food and habitats"
        ],
        "answer": 2,
        "why": "Effects can extend beyond the target weed.",
        "concept": "bio.growth-auxin-applications"
      },
      {
        "id": "bio.p-growth-auxin-applications4",
        "prompt": "Which evaluation is balanced?",
        "options": [
          "Compare reduced crop competition with non-target ecological effects",
          "Assume no side effects",
          "Reject all evidence"
        ],
        "answer": 0,
        "why": "Both production benefits and ecological costs matter.",
        "concept": "bio.growth-auxin-applications"
      }
    ],
    "check": [
      {
        "id": "bio.c-growth-auxin-applications1",
        "prompt": "A nursery wants cuttings to establish roots. Which treatment fits?",
        "options": [
          "Ethene only for ripening",
          "Auxin rooting powder",
          "Adrenaline"
        ],
        "answer": 1,
        "why": "Auxin promotes root formation on cuttings.",
        "concept": "bio.growth-auxin-applications"
      },
      {
        "id": "bio.c-growth-auxin-applications2",
        "prompt": "What does rooting powder supply?",
        "options": [
          "A complete substitute for photosynthesis",
          "Every mineral needed forever",
          "A growth regulator"
        ],
        "answer": 2,
        "why": "The auxin signal does not replace suitable conditions.",
        "concept": "bio.growth-auxin-applications"
      },
      {
        "id": "bio.c-growth-auxin-applications3",
        "prompt": "Which is a use of auxins in laboratories?",
        "options": [
          "Promoting plant tissue-culture growth",
          "Lowering human heart rate",
          "Transporting oxygen"
        ],
        "answer": 0,
        "why": "Tissue culture is a named application.",
        "concept": "bio.growth-auxin-applications"
      },
      {
        "id": "bio.c-growth-auxin-applications4",
        "prompt": "How can weed control benefit a cereal crop?",
        "options": [
          "By eliminating all photosynthesis",
          "By reducing competition for resources",
          "By removing the need for water"
        ],
        "answer": 1,
        "why": "Less competition can support crop growth.",
        "concept": "bio.growth-auxin-applications"
      },
      {
        "id": "bio.c-growth-auxin-applications5",
        "prompt": "A field has fewer wildflowers after weed control. What ecological effect is plausible?",
        "options": [
          "All biodiversity must rise",
          "All pollinators gain more food",
          "Some insects may lose food resources"
        ],
        "answer": 2,
        "why": "Plant losses can affect dependent organisms.",
        "concept": "bio.growth-auxin-applications"
      },
      {
        "id": "bio.c-growth-auxin-applications6",
        "prompt": "Fictional plots have 20 versus 15 wildflower species. Percentage decrease?",
        "options": [
          "25%",
          "5%",
          "75%"
        ],
        "answer": 0,
        "why": "(20−15)/20×100=25%; this supplied dataset does not prove a universal effect.",
        "concept": "bio.growth-auxin-applications"
      }
    ]
  },
  {
    "id": "science.biology.homeostasis-and-response.germination-ripening",
    "title": "Gibberellins, ethene & crop control",
    "short": "Gibberellins, ethene & crop control",
    "topicId": "science.biology.homeostasis-and-response",
    "refs": [
      "5.4.1",
      "5.4.2"
    ],
    "combinedRefs": [],
    "minutes": 35,
    "separate": true,
    "higher": true,
    "big": "Gibberellins help initiate germination. They can be used to end seed dormancy, allowing germination when other conditions are suitable. A hormone signal does not replace water, oxygen or a suitable temperature.",
    "learn": [
      {
        "title": "Start growth from a seed",
        "text": "Gibberellins help initiate germination. They can be used to end seed dormancy, allowing germination when other conditions are suitable. A hormone signal does not replace water, oxygen or a suitable temperature.",
        "scene": "hgrowth:germination:0",
        "processFilm": "growth-germination"
      },
      {
        "title": "Control more than germination",
        "text": "Gibberellins can also be used to promote flowering and increase fruit size. These are different developmental outcomes. The GCSE course requires the effects and uses, not their detailed molecular mechanisms.",
        "scene": "hgrowth:gibberellin:1",
        "process": false
      },
      {
        "title": "Coordinate fruit ripening",
        "text": "Ethene is a plant hormone involved in cell division and fruit ripening. In the food industry it is used to control ripening during storage and transport. Managing when fruit ripens helps coordinate arrival and sale.",
        "scene": "hgrowth:ripening:2"
      },
      {
        "title": "Match the purpose to the hormone",
        "text": "Use gibberellin for ending dormancy, promoting flowering or increasing fruit size. Use ethene to control ripening. Evaluate a decision using supplied evidence: earlier ripening may suit immediate sale but can reduce time available for storage.",
        "scene": "hgrowth:logistics:3",
        "process": false
      }
    ],
    "widget": "hgrowth-germination-ripening",
    "prerequisites": [
      "science.biology.homeostasis-and-response.plant-tropisms"
    ],
    "skills": [
      "WS1.2",
      "WS1.3",
      "WS1.4"
    ],
    "practice": [
      {
        "id": "bio.p-growth-germination-ripening1",
        "prompt": "Which hormone helps initiate germination?",
        "options": [
          "Gibberellin",
          "Insulin",
          "Thyroxine"
        ],
        "answer": 0,
        "why": "Gibberellins initiate germination.",
        "concept": "bio.growth-germination-ripening"
      },
      {
        "id": "bio.p-growth-germination-ripening2",
        "prompt": "Which is another use of gibberellins?",
        "options": [
          "Removing every seed nutrient",
          "Promoting flowering or increasing fruit size",
          "Only killing bacteria"
        ],
        "answer": 1,
        "why": "These are named horticultural uses.",
        "concept": "bio.growth-germination-ripening"
      },
      {
        "id": "bio.p-growth-germination-ripening3",
        "prompt": "Which hormone controls fruit ripening?",
        "options": [
          "Glucagon",
          "ADH",
          "Ethene"
        ],
        "answer": 2,
        "why": "Ethene coordinates ripening and also affects cell division.",
        "concept": "bio.growth-germination-ripening"
      },
      {
        "id": "bio.p-growth-germination-ripening4",
        "prompt": "Why manage ripening during transport?",
        "options": [
          "Coordinate fruit readiness with arrival and sale",
          "Guarantee fruit never spoils",
          "Replace all storage conditions"
        ],
        "answer": 0,
        "why": "Timing has practical value but does not guarantee shelf life.",
        "concept": "bio.growth-germination-ripening"
      }
    ],
    "check": [
      {
        "id": "bio.c-growth-germination-ripening1",
        "prompt": "A grower wants to break seed dormancy. Which hormone?",
        "options": [
          "Ethene for every purpose",
          "Gibberellin",
          "Testosterone"
        ],
        "answer": 1,
        "why": "Gibberellins can end dormancy.",
        "concept": "bio.growth-germination-ripening"
      },
      {
        "id": "bio.c-growth-germination-ripening2",
        "prompt": "Which conditions still matter for germination?",
        "options": [
          "No oxygen is ever needed",
          "Hormones replace water",
          "Water, oxygen and suitable temperature"
        ],
        "answer": 2,
        "why": "Hormones do not replace these requirements.",
        "concept": "bio.growth-germination-ripening"
      },
      {
        "id": "bio.c-growth-germination-ripening3",
        "prompt": "Which pair gives two further gibberellin uses?",
        "options": [
          "Promoting flowering and increasing fruit size",
          "Ripening only and urea production",
          "Contraception and dialysis"
        ],
        "answer": 0,
        "why": "Both are named uses.",
        "concept": "bio.growth-germination-ripening"
      },
      {
        "id": "bio.c-growth-germination-ripening4",
        "prompt": "Ethene is associated with…",
        "options": [
          "Only root water uptake",
          "Cell division and fruit ripening",
          "Human basal metabolism"
        ],
        "answer": 1,
        "why": "These are the required ethene roles.",
        "concept": "bio.growth-germination-ripening"
      },
      {
        "id": "bio.c-growth-germination-ripening5",
        "prompt": "Fruit must be ready after a journey. Which is a reasonable use?",
        "options": [
          "Ignore maturity and conditions",
          "Assume more ethene is always better",
          "Control ripening timing during storage and transport"
        ],
        "answer": 2,
        "why": "Match ripening to the production/logistics goal.",
        "concept": "bio.growth-germination-ripening"
      },
      {
        "id": "bio.c-growth-germination-ripening6",
        "prompt": "Fictional batches ripen in 8 versus 5 days. Reduction in time?",
        "options": [
          "3 days",
          "13 days",
          "40 days"
        ],
        "answer": 0,
        "why": "8−5=3 days; original classroom data are not a universal treatment rate.",
        "concept": "bio.growth-germination-ripening"
      }
    ]
  }
];
export const growthConcepts={"bio.growth-hormone-feedback": "Adrenaline, thyroxine & feedback", "bio.growth-plant-tropisms": "Plant growth: light & gravity", "bio.growth-seedling-practical": "Investigating seedling growth", "bio.growth-auxin-applications": "Using auxins in plant production", "bio.growth-germination-ripening": "Gibberellins, ethene & crop control"};
