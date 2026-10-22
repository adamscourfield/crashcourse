export const healthLessons=[
  {
    "id": "science.biology.organisation.coronary-disease",
    "title": "Coronary heart disease & treatments",
    "short": "Open the route. Weigh the tradeoffs.",
    "refs": [
      "2.2.4"
    ],
    "minutes": 35,
    "widget": "health-coronary",
    "topicId": "science.biology.organisation",
    "big": "Fatty deposits can accumulate inside coronary arteries. The narrower lumen restricts blood flow, reducing the supply of oxygen to heart muscle cells. Less aerobic respiration can impair their function. A coronary artery supplies the muscle itself; it is not a heart chamber. Coronary heart disease is non-communicable.",
    "learn": [
      {
        "title": "Narrow arteries limit the muscle supply",
        "text": "Fatty deposits can accumulate inside coronary arteries. The narrower lumen restricts blood flow, reducing the supply of oxygen to heart muscle cells. Less aerobic respiration can impair their function. A coronary artery supplies the muscle itself; it is not a heart chamber. Coronary heart disease is non-communicable.",
        "scene": "health:artery:narrow"
      },
      {
        "title": "A stent holds an artery open",
        "text": "A stent is a mesh tube placed in a narrowed artery to support its lumen and improve blood flow. It can act locally and quickly, but insertion has procedural risks, and clots can form around the device. It does not remove every risk factor or repair a faulty heart valve. The model shows support, not a surgical procedure or measured flow.",
        "scene": "health:artery:stent"
      },
      {
        "title": "Statins act on cholesterol",
        "text": "Statins lower blood cholesterol and slow the rate at which fatty material is deposited. They can reduce cardiovascular risk without inserting a device, but require ongoing use and can have side effects. They do not instantly dissolve an existing narrowing. Compare the same starting deposit at the same later model step with and without this slowing effect.",
        "scene": "health:statin"
      },
      {
        "title": "Valves have different failure modes",
        "text": "A valve that cannot open fully restricts forward flow; a leaking valve permits backflow, reducing effective one-way circulation. Biological and mechanical replacements can restore valve function. Mechanical valves are durable but generally require long-term anticoagulant medicine, bringing bleeding risk. Biological valves often avoid that long-term requirement but can wear out and need replacement. Both involve an operation and individual tradeoffs.",
        "scene": "health:treatments"
      },
      {
        "title": "Support a failing pump",
        "text": "For severe heart failure, a donor heart, or sometimes heart and lungs, may be transplanted. Benefits include restoring pumping, but donors are scarce, surgery carries risk, and rejection is managed with medicines that suppress immunity. Artificial hearts can temporarily maintain circulation while a donor is awaited, or allow recovery; they have device, clot, bleeding and infection risks. There is no universally best treatment.",
        "scene": "health:treatments"
      }
    ],
    "practice": [
      {
        "id": "bio.p-healthchd1",
        "prompt": "A coronary lumen narrows. Which sequence explains reduced muscle function?",
        "options": [
          "Less oxygen delivery → less aerobic respiration",
          "More oxygen made → fewer cells",
          "Blood changes into muscle"
        ],
        "answer": 0,
        "why": "Narrowing restricts supply to respiring heart muscle.",
        "concept": "bio.health-chd"
      },
      {
        "id": "bio.p-healthchd2",
        "prompt": "Which comparison distinguishes a stent from statins?",
        "options": [
          "Both replace the whole heart",
          "Stent supports a lumen; statins lower cholesterol",
          "Statins hold an artery open with mesh"
        ],
        "answer": 1,
        "why": "The device acts mechanically; the drug slows deposition through cholesterol reduction.",
        "concept": "bio.health-treatments"
      },
      {
        "id": "bio.p-healthchd3",
        "prompt": "A valve leaks. Which result follows?",
        "options": [
          "Oxygen is made in the valve",
          "Blood can flow backwards",
          "A coronary deposit must disappear"
        ],
        "answer": 1,
        "why": "Leakage reduces effective forward circulation.",
        "concept": "bio.health-valves"
      },
      {
        "id": "bio.p-healthchd4",
        "prompt": "Why weigh a donor heart against risks?",
        "options": [
          "No donor hearts ever work",
          "All hearts are interchangeable",
          "Benefit must be balanced with surgery, scarcity and rejection"
        ],
        "answer": 2,
        "why": "A benefit alone is not a full evaluation.",
        "concept": "bio.health-support"
      }
    ],
    "check": [
      {
        "id": "bio.c-healthchd1",
        "prompt": "Fatty material in a coronary artery most directly reduces…",
        "options": [
          "Air entering the trachea",
          "Blood reaching heart muscle",
          "Blood oxygen manufacture"
        ],
        "answer": 1,
        "why": "A coronary artery supplies the myocardium.",
        "concept": "bio.health-chd"
      },
      {
        "id": "bio.c-healthchd2",
        "prompt": "Which describes statins accurately?",
        "options": [
          "Lower cholesterol and slow fatty deposition",
          "Instantly replace blocked vessels",
          "Open a valve electrically"
        ],
        "answer": 0,
        "why": "Their effect is not instantaneous mechanical opening.",
        "concept": "bio.health-treatments"
      },
      {
        "id": "bio.c-healthchd3",
        "prompt": "A mesh support widens a coronary lumen. Which evaluation is balanced?",
        "options": [
          "It removes every future risk",
          "It has no possible clot risk",
          "It can improve flow but insertion and clot risks remain"
        ],
        "answer": 2,
        "why": "Stents have benefits and risks.",
        "concept": "bio.health-treatments"
      },
      {
        "id": "bio.c-healthchd4",
        "prompt": "A heart valve does not open fully. The direct problem is…",
        "options": [
          "Restricted forward blood flow",
          "Excess oxygen made by the valve",
          "The absence of all coronary arteries"
        ],
        "answer": 0,
        "why": "A restricted opening limits forward flow.",
        "concept": "bio.health-valves"
      },
      {
        "id": "bio.c-healthchd5",
        "prompt": "A mechanical replacement is durable but needs long-term anticoagulants. What tradeoff matters?",
        "options": [
          "It stops the need for blood",
          "Reduced clot formation versus increased bleeding risk",
          "It prevents every infection"
        ],
        "answer": 1,
        "why": "Anticoagulants reduce clotting and can increase bleeding.",
        "concept": "bio.health-valves"
      },
      {
        "id": "bio.c-healthchd6",
        "prompt": "Why might a biological replacement need another operation?",
        "options": [
          "It always turns into cancer",
          "It acts as a natural pacemaker",
          "It can wear out over time"
        ],
        "answer": 2,
        "why": "Biological valves have finite durability.",
        "concept": "bio.health-valves"
      },
      {
        "id": "bio.c-healthchd7",
        "prompt": "A donor heart restores pumping. Which limitation still matters?",
        "options": [
          "Donor availability and rejection risk",
          "It must be a coronary stent",
          "It removes all need for immune control"
        ],
        "answer": 0,
        "why": "Transplant benefit must be weighed against scarcity and rejection.",
        "concept": "bio.health-support"
      },
      {
        "id": "bio.c-healthchd8",
        "prompt": "Which is a recognised role of an artificial heart?",
        "options": [
          "Lowering cholesterol inside the liver",
          "Temporary circulation while awaiting transplant or recovery",
          "Replacing every lung exchange surface"
        ],
        "answer": 1,
        "why": "It supports pumping; it does not supply gas exchange.",
        "concept": "bio.health-support"
      }
    ],
    "skills": [
      "WS1.3",
      "WS1.4"
    ],
    "prerequisites": [
      "science.biology.organisation.heart",
      "science.biology.organisation.blood-vessels"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.health-and-disease",
    "title": "Health & interacting diseases",
    "short": "Connect physical and mental wellbeing.",
    "refs": [
      "2.2.5"
    ],
    "minutes": 30,
    "widget": "health-links",
    "topicId": "science.biology.organisation",
    "big": "Health includes physical and mental wellbeing. Having no diagnosed infection is not a complete definition. Communicable diseases can spread between organisms; non-communicable diseases do not spread that way. Either type can cause ill health, and a person can have both at once.",
    "learn": [
      {
        "title": "Health has two connected dimensions",
        "text": "Health includes physical and mental wellbeing. Having no diagnosed infection is not a complete definition. Communicable diseases can spread between organisms; non-communicable diseases do not spread that way. Either type can cause ill health, and a person can have both at once.",
        "scene": "health:wellbeing"
      },
      {
        "title": "Disease can change another risk",
        "text": "An impaired immune system can leave someone more susceptible to infections. Some viruses can trigger cell changes that lead to cancer; a virus-triggered cancer is still not itself a communicable disease. These are possible links, not a rule that every infection causes cancer.",
        "scene": "health:links:immune"
      },
      {
        "title": "Immune responses and mental health interact",
        "text": "Immune reactions initially triggered by a pathogen can lead to allergies such as rashes or asthma. Severe physical illness can also contribute to depression or other mental illness. These pathways connect conditions; they do not establish that every person follows the same sequence.",
        "scene": "health:links:physical"
      },
      {
        "title": "Life circumstances also matter",
        "text": "Diet, stress and life situations can affect both physical and mental wellbeing. Housing, relationships, access to food and healthcare, work or caring demands can shape health. A single behaviour does not determine a person’s health, and the absence of symptoms does not measure every dimension. Population data need careful sampling, which the data workshop develops.",
        "scene": "health:wellbeing"
      }
    ],
    "practice": [
      {
        "id": "bio.p-healthlinks1",
        "prompt": "Someone has no infection but experiences severe mental distress. Which statement is sound?",
        "options": [
          "They must be fully healthy",
          "Mental wellbeing is part of health",
          "Mental health cannot affect life"
        ],
        "answer": 1,
        "why": "Health includes mental as well as physical wellbeing.",
        "concept": "bio.health-wellbeing"
      },
      {
        "id": "bio.p-healthlinks2",
        "prompt": "Which pair can coexist?",
        "options": [
          "A communicable infection and non-communicable illness",
          "Only one disease at any time",
          "Only diseases with the same cause"
        ],
        "answer": 0,
        "why": "Types can coexist and interact.",
        "concept": "bio.health-types"
      },
      {
        "id": "bio.p-healthlinks3",
        "prompt": "Why can impaired immunity increase infection risk?",
        "options": [
          "Pathogens become healthy cells",
          "All infections become genetic",
          "Defence against pathogens is less effective"
        ],
        "answer": 2,
        "why": "A defect in immune defence changes susceptibility.",
        "concept": "bio.health-links"
      },
      {
        "id": "bio.p-healthlinks4",
        "prompt": "Which set includes factors beyond diagnosed disease?",
        "options": [
          "Only blood colour",
          "Stress, diet and life situations",
          "Only height and shoe size"
        ],
        "answer": 1,
        "why": "These circumstances can affect both wellbeing dimensions.",
        "concept": "bio.health-factors"
      }
    ],
    "check": [
      {
        "id": "bio.c-healthlinks1",
        "prompt": "Which definition includes the required health dimensions?",
        "options": [
          "Physical and mental wellbeing",
          "Freedom from bacteria only",
          "A normal temperature only"
        ],
        "answer": 0,
        "why": "Health extends beyond one physical measure.",
        "concept": "bio.health-wellbeing"
      },
      {
        "id": "bio.c-healthlinks2",
        "prompt": "Coronary disease cannot pass from person to person. It is…",
        "options": [
          "Always communicable",
          "Non-communicable",
          "Necessarily caused by a virus"
        ],
        "answer": 1,
        "why": "Communicability concerns spread between organisms.",
        "concept": "bio.health-types"
      },
      {
        "id": "bio.c-healthlinks3",
        "prompt": "A person with defective immunity has more infections. Which link explains this?",
        "options": [
          "More effective pathogen defence",
          "Infections repair every immune defect",
          "Less effective defence raises susceptibility"
        ],
        "answer": 2,
        "why": "This is an interaction between conditions.",
        "concept": "bio.health-links"
      },
      {
        "id": "bio.c-healthlinks4",
        "prompt": "Which claim about viruses and cancer is justified?",
        "options": [
          "Some viruses can trigger cancer-causing cell changes",
          "Every virus always causes a tumour",
          "Cancer must then spread by coughing"
        ],
        "answer": 0,
        "why": "A trigger does not make the cancer itself communicable.",
        "concept": "bio.health-links"
      },
      {
        "id": "bio.c-healthlinks5",
        "prompt": "An immune reaction initially caused by a pathogen could trigger…",
        "options": [
          "A coronary stent",
          "An allergy such as a skin rash",
          "A replacement donor heart"
        ],
        "answer": 1,
        "why": "An immune response can be linked to allergic illness.",
        "concept": "bio.health-links"
      },
      {
        "id": "bio.c-healthlinks6",
        "prompt": "Severe physical illness can…",
        "options": [
          "Never affect mental health",
          "Guarantee the same outcome in everyone",
          "Contribute to depression"
        ],
        "answer": 2,
        "why": "The link is possible, not inevitable.",
        "concept": "bio.health-links"
      },
      {
        "id": "bio.c-healthlinks7",
        "prompt": "Which conclusion about chronic stress is reasonable?",
        "options": [
          "It can affect mental and physical wellbeing",
          "It is the only cause of all disease",
          "It cannot influence health"
        ],
        "answer": 0,
        "why": "Stress interacts with other biological and social factors.",
        "concept": "bio.health-factors"
      },
      {
        "id": "bio.c-healthlinks8",
        "prompt": "Two communities differ in illness. Which additional information helps interpretation?",
        "options": [
          "Their favourite colour",
          "Diet, life situations and healthcare access",
          "Only their names"
        ],
        "answer": 1,
        "why": "Context can influence health and comparisons.",
        "concept": "bio.health-factors"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.4"
    ],
    "prerequisites": [
      "science.biology.organisation.coronary-disease"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.lifestyle-risk",
    "title": "Lifestyle, risk & disease costs",
    "short": "Follow a risk factor to its effects.",
    "refs": [
      "2.2.6"
    ],
    "minutes": 35,
    "widget": "health-risks",
    "topicId": "science.biology.organisation",
    "big": "A risk factor is associated with a higher rate of disease. It may be a lifestyle feature or a substance in the body or environment. Some links have a demonstrated causal mechanism; others are associations still being investigated. Greater risk is not a guarantee that an individual will become ill, and absence of one risk factor is not a guarantee of protection.",
    "learn": [
      {
        "title": "Risk is a population pattern",
        "text": "A risk factor is associated with a higher rate of disease. It may be a lifestyle feature or a substance in the body or environment. Some links have a demonstrated causal mechanism; others are associations still being investigated. Greater risk is not a guarantee that an individual will become ill, and absence of one risk factor is not a guarantee of protection.",
        "scene": "health:risks"
      },
      {
        "title": "Cardiovascular disease has multiple influences",
        "text": "Diet, smoking and exercise influence cardiovascular disease risk. Fatty deposition and reduced blood flow provide a mechanism linking some dietary patterns and cholesterol to coronary disease. Regular physical activity can reduce cardiovascular risk. Obesity increases the risk of Type 2 diabetes; that is not a statement that every person with obesity has diabetes. Genes, age, environment and behaviours can interact.",
        "scene": "health:risks:cardio"
      },
      {
        "title": "Smoking and alcohol affect more than one organ",
        "text": "Smoking increases the risk of lung disease and lung cancer and contributes to cardiovascular disease. Tobacco smoke contains carcinogens and carbon monoxide; carbon monoxide reduces blood oxygen-carrying capacity. Alcohol can damage the liver and impair brain function. Smoking during pregnancy can reduce oxygen supply to the fetus; alcohol can disrupt fetal development. These are mechanisms and increased risks, not individual diagnoses.",
        "scene": "health:risks:smoke"
      },
      {
        "title": "Cancer risks include environmental exposure",
        "text": "Carcinogens can cause changes that lead to cancer. Tobacco smoke and ionising radiation are examples of cancer risk factors. Risk depends on exposure and other influences; a symbolic model cannot calculate anyone’s personal chance of cancer. Disease commonly involves several interacting causes, rather than a single universal explanation.",
        "scene": "health:risks:radiation"
      },
      {
        "title": "Human costs and financial costs connect",
        "text": "Illness can mean pain, reduced independence, lost time with others and caring demands. Financial costs include treatment, lost earnings, care and reduced economic output. Individuals, communities, nations and the world can all bear costs. Disease rates differ with exposures, population age, healthcare and how data are collected; explain local, national and global patterns using evidence rather than blaming individuals.",
        "scene": "health:costs"
      }
    ],
    "practice": [
      {
        "id": "bio.p-healthrisk1",
        "prompt": "A risk factor is linked with…",
        "options": [
          "A certain outcome for each person",
          "An increased disease rate in a population",
          "Only inherited conditions"
        ],
        "answer": 1,
        "why": "A rate is a population measure, not individual certainty.",
        "concept": "bio.health-risk"
      },
      {
        "id": "bio.p-healthrisk2",
        "prompt": "Which pairing is valid?",
        "options": [
          "Obesity → increased Type 2 diabetes risk",
          "Alcohol → guaranteed stronger liver",
          "Smoking → guaranteed healthy lungs"
        ],
        "answer": 0,
        "why": "The link concerns increased risk, not inevitability.",
        "concept": "bio.health-effects"
      },
      {
        "id": "bio.p-healthrisk3",
        "prompt": "Which is a human cost rather than a direct money payment?",
        "options": [
          "Hospital equipment price",
          "Lost earnings",
          "Reduced independence"
        ],
        "answer": 2,
        "why": "Human costs include wellbeing and daily functioning.",
        "concept": "bio.health-cost"
      },
      {
        "id": "bio.p-healthrisk4",
        "prompt": "Disease rates correlate with exposure. What else strengthens a causal explanation?",
        "options": [
          "A bigger headline",
          "Evidence of a mechanism and control of confounders",
          "Changing both axes labels"
        ],
        "answer": 1,
        "why": "Correlation alone cannot rule out other explanations.",
        "concept": "bio.health-causation"
      }
    ],
    "check": [
      {
        "id": "bio.c-healthrisk1",
        "prompt": "Which can be a risk factor?",
        "options": [
          "A lifestyle feature or substance in the environment",
          "Only a pathogen",
          "Only an inherited gene"
        ],
        "answer": 0,
        "why": "Risk factors include lifestyle and body/environment substances.",
        "concept": "bio.health-risk"
      },
      {
        "id": "bio.c-healthrisk2",
        "prompt": "Which statement about cardiovascular disease is accurate?",
        "options": [
          "Only exercise matters",
          "Diet, smoking and activity can all influence risk",
          "Risk is identical in every environment"
        ],
        "answer": 1,
        "why": "Multiple influences can interact.",
        "concept": "bio.health-effects"
      },
      {
        "id": "bio.c-healthrisk3",
        "prompt": "Which pair correctly identifies effects of alcohol?",
        "options": [
          "Stronger liver and improved fetal growth",
          "No effect on organs",
          "Liver damage and impaired brain function"
        ],
        "answer": 2,
        "why": "Alcohol can damage the liver and affect the brain.",
        "concept": "bio.health-effects"
      },
      {
        "id": "bio.c-healthrisk4",
        "prompt": "Which smoking-related outcomes belong in the specification?",
        "options": [
          "Lung disease, lung cancer and cardiovascular disease",
          "Only bacterial food poisoning",
          "Only Type 1 diabetes"
        ],
        "answer": 0,
        "why": "Tobacco smoke affects several systems.",
        "concept": "bio.health-effects"
      },
      {
        "id": "bio.c-healthrisk5",
        "prompt": "Which statement about unborn babies is justified?",
        "options": [
          "The placenta blocks every harmful substance",
          "Smoking can reduce oxygen supply; alcohol can disrupt development",
          "Neither exposure can affect development"
        ],
        "answer": 1,
        "why": "Effects on fetal supply/development explain increased risks.",
        "concept": "bio.health-effects"
      },
      {
        "id": "bio.c-healthrisk6",
        "prompt": "Which environmental exposure is a cancer risk factor?",
        "options": [
          "A labelled diagram",
          "Pure water in a model",
          "Ionising radiation"
        ],
        "answer": 2,
        "why": "Ionising radiation can cause cell changes associated with cancer.",
        "concept": "bio.health-effects"
      },
      {
        "id": "bio.c-healthrisk7",
        "prompt": "A council spends more on care and families provide unpaid support. Which evaluation fits?",
        "options": [
          "There are financial and human costs at several levels",
          "Only hospital bills count",
          "There is no community impact"
        ],
        "answer": 0,
        "why": "Costs extend beyond the person and direct treatment bills.",
        "concept": "bio.health-cost"
      },
      {
        "id": "bio.c-healthrisk8",
        "prompt": "Which conclusion is justified by a regional association alone?",
        "options": [
          "Exposure is proven to be the only cause",
          "Variables are associated; other factors need investigation",
          "Every exposed individual will be ill"
        ],
        "answer": 1,
        "why": "Association alone does not establish sole causation or certainty.",
        "concept": "bio.health-causation"
      }
    ],
    "skills": [
      "WS1.4",
      "WS1.5",
      "MS2d"
    ],
    "prerequisites": [
      "science.biology.organisation.health-and-disease"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.health-data",
    "title": "Investigating health data",
    "short": "Build the chart. Challenge the claim.",
    "refs": [
      "2.2.5",
      "2.2.6"
    ],
    "minutes": 40,
    "widget": "health-data",
    "topicId": "science.biology.organisation",
    "big": "Disease incidence concerns new cases in a population during a defined period. Compare like populations and time intervals. In an original teaching dataset, 18 new cases among 300 people during one year is 6%; 24 among 800 is 3%. More cases does not necessarily mean a higher proportion. A percentage is cases ÷ population ×100, not cases ÷ unaffected people.",
    "learn": [
      {
        "title": "Counts need a denominator and a period",
        "text": "Disease incidence concerns new cases in a population during a defined period. Compare like populations and time intervals. In an original teaching dataset, 18 new cases among 300 people during one year is 6%; 24 among 800 is 3%. More cases does not necessarily mean a higher proportion. A percentage is cases ÷ population ×100, not cases ÷ unaffected people.",
        "scene": "health:data:rates"
      },
      {
        "title": "Build frequencies before the histogram",
        "text": "A frequency table groups observations into mutually exclusive intervals. For continuous data use adjoining histogram bars; equal-width intervals let bar height represent frequency directly. Unequal class widths require frequency density, outside this workshop. Categories use separated bars in a bar chart. Always label axes, include units and choose a scale that fits the values.",
        "scene": "health:data:hist"
      },
      {
        "title": "A scatter plot tests a relationship",
        "text": "Plot paired values with one variable on each axis. An upward overall pattern is positive correlation; a downward one is negative; points can vary around a trend. Correlation does not on its own prove causation. In regional health data, age, occupation or air pollution might affect the outcome too. Do not join every scatter point as a time sequence.",
        "scene": "health:data:scatter"
      },
      {
        "title": "Sample the population you want to describe",
        "text": "A large sample from one specialist clinic can still be biased for a whole town. Random selection across the target population, suitable representation of relevant groups and adequate sample size improve evidence. Account for non-response and comparable diagnosis/time periods. Comparing similar ages or accounting for age can reduce confounding, but does not automatically remove every alternative explanation.",
        "scene": "health:data:sample"
      }
    ],
    "practice": [
      {
        "id": "bio.p-healthdata1",
        "prompt": "A town records 12 new cases among 400 people in one year. Calculate the percentage.",
        "type": "number",
        "answer": 3,
        "tolerance": 0.001,
        "unit": "%",
        "why": "12 ÷400 ×100 =3%.",
        "concept": "bio.health-incidence"
      },
      {
        "id": "bio.p-healthdata2",
        "prompt": "For equal-width continuous intervals, which representation fits?",
        "options": [
          "Separated category bars",
          "Touching histogram bars",
          "A pie chart with missing sectors"
        ],
        "answer": 1,
        "why": "Histograms represent continuous class intervals.",
        "concept": "bio.health-frequency"
      },
      {
        "id": "bio.p-healthdata3",
        "prompt": "A scatter plot rises overall. This shows…",
        "options": [
          "Negative correlation",
          "Guaranteed causation",
          "Positive correlation"
        ],
        "answer": 2,
        "why": "Both variables tend to rise together, without proving a cause.",
        "concept": "bio.health-scatter"
      },
      {
        "id": "bio.p-healthdata4",
        "prompt": "Which sample better represents a town?",
        "options": [
          "Random residents across relevant groups",
          "Only volunteers at one disease clinic",
          "Only the researcher’s friends"
        ],
        "answer": 0,
        "why": "Selection across the target population reduces selection bias.",
        "concept": "bio.health-sampling"
      }
    ],
    "check": [
      {
        "id": "bio.c-healthdata1",
        "prompt": "There are 27 new cases among 900 residents in the same year. What percentage is this?",
        "type": "number",
        "answer": 3,
        "tolerance": 0.001,
        "unit": "%",
        "why": "27 ÷900 ×100 =3%.",
        "concept": "bio.health-incidence"
      },
      {
        "id": "bio.c-healthdata2",
        "prompt": "Region A: 40 cases/1000. Region B: 30/500 in the same year. Which has higher incidence proportion?",
        "options": [
          "A, because 40 is larger",
          "B: 6% compared with A: 4%",
          "They must be equal"
        ],
        "answer": 1,
        "why": "Denominators reverse the comparison of raw counts.",
        "concept": "bio.health-incidence"
      },
      {
        "id": "bio.c-healthdata3",
        "prompt": "Durations are 2, 3, 3, 5, 6, 8 hours. How many fall in 0 ≤ duration < 4 hours?",
        "type": "number",
        "answer": 3,
        "tolerance": 0.001,
        "unit": "observations",
        "why": "2,3,3 lie in that interval; 5,6,8 do not.",
        "concept": "bio.health-frequency"
      },
      {
        "id": "bio.c-healthdata4",
        "figure": {"kind":"health-plot","chart":"hist","bars":[2,4,3]},
        "prompt": "What must a correct equal-width histogram show?",
        "options": [
          "Gaps between every class",
          "Unlabelled axes",
          "Touching bars and an appropriate labelled scale"
        ],
        "answer": 2,
        "why": "Continuous class boundaries are adjacent.",
        "concept": "bio.health-frequency"
      },
      {
        "id": "bio.c-healthdata5",
        "figure": {"kind":"health-plot","chart":"scatter","points":[[10,80],[15,65],[20,69],[25,45],[30,35],[35,25]]},
        "prompt": "What relationship does this original teaching scatter plot show?",
        "options": [
          "Negative correlation",
          "No possible relationship",
          "Proof that x causes y"
        ],
        "answer": 0,
        "why": "Larger x tends to accompany smaller y.",
        "concept": "bio.health-scatter"
      },
      {
        "id": "bio.c-healthdata6",
        "prompt": "Disease and exposure rise together across regions. Why consider age?",
        "options": [
          "Age changes the units of a scatter plot",
          "Age could influence both and confound the association",
          "Age always eliminates the relationship"
        ],
        "answer": 1,
        "why": "A third variable can contribute to the observed pattern.",
        "concept": "bio.health-causation"
      },
      {
        "id": "bio.c-healthdata7",
        "prompt": "Ten thousand volunteers from one specialist clinic are sampled. Which limitation remains?",
        "options": [
          "A large number guarantees representation",
          "No one can interpret a large sample",
          "Selection may be biased for the general population"
        ],
        "answer": 2,
        "why": "Size does not repair a biased sampling frame.",
        "concept": "bio.health-sampling"
      },
      {
        "id": "bio.c-healthdata8",
        "prompt": "Which design best supports comparison?",
        "options": [
          "Representative samples, matching periods and comparable age structure",
          "Different diagnostic definitions in each group",
          "One group observed for ten years and the other one week"
        ],
        "answer": 0,
        "why": "Comparable methods and populations reduce misleading differences.",
        "concept": "bio.health-sampling"
      }
    ],
    "skills": [
      "MS2c",
      "MS2d",
      "MS2g",
      "MS4a",
      "WS1.5"
    ],
    "prerequisites": [
      "science.biology.organisation.lifestyle-risk"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.cancer",
    "title": "Cancer: growth & spread",
    "short": "Follow a cell population across boundaries.",
    "refs": [
      "2.2.7"
    ],
    "minutes": 30,
    "widget": "health-cancer",
    "topicId": "science.biology.organisation",
    "big": "Cancer develops when changes in cells lead to uncontrolled growth and division. Normal cell division is regulated for growth, replacement and repair. Not all cell division is cancer, and a larger normal tissue is not automatically a tumour. The model compares a controlled population with abnormal growth using discrete steps, not biological time.",
    "learn": [
      {
        "title": "Changes can disrupt division control",
        "text": "Cancer develops when changes in cells lead to uncontrolled growth and division. Normal cell division is regulated for growth, replacement and repair. Not all cell division is cancer, and a larger normal tissue is not automatically a tumour. The model compares a controlled population with abnormal growth using discrete steps, not biological time.",
        "scene": "health:cancer:normal"
      },
      {
        "title": "Contained growth differs from invasion",
        "text": "Benign tumours are abnormal growths confined to one area, usually within a membrane. They do not invade other tissues, although their position and size can still cause harm. Malignant tumours are cancers: their cells invade nearby tissues. Colour is a teaching cue; real diagnosis cannot be made from coloured spheres.",
        "scene": "health:cancer:benign"
      },
      {
        "title": "Malignant cells can spread through blood",
        "text": "Some malignant cells can leave a primary tumour, enter blood and travel to another part of the body. If they establish and divide there, they form a secondary tumour. A primary lung cancer spreading to another organ remains derived from the original cancer; it is not a new unrelated tissue type just because its location changed. Not every circulating cancer cell establishes a tumour.",
        "scene": "health:cancer:malignant"
      },
      {
        "title": "Risk includes lifestyle and genes",
        "text": "Scientists have identified lifestyle and environmental risks for several cancers, including smoking and exposure to carcinogens such as ionising radiation. Genetic factors also increase risk of some cancers. Risk can involve inherited susceptibility and acquired changes; a family history is not a certainty, and absence of family history does not make cancer impossible. Detailed mutation names and treatment regimens are outside this lesson.",
        "scene": "health:cancer:malignant"
      }
    ],
    "practice": [
      {
        "id": "bio.p-healthcancer1",
        "prompt": "Which change is central to cancer?",
        "options": [
          "Controlled repair only",
          "Uncontrolled cell growth and division",
          "Normal oxygen transport"
        ],
        "answer": 1,
        "why": "Division control is disrupted by changes in cells.",
        "concept": "bio.health-growth"
      },
      {
        "id": "bio.p-healthcancer2",
        "prompt": "Which observation distinguishes malignant from benign growth?",
        "options": [
          "Invading neighbouring tissue",
          "Being made of any cells",
          "Being visible in a diagram"
        ],
        "answer": 0,
        "why": "Invasion is a defining malignant behaviour.",
        "concept": "bio.health-benign"
      },
      {
        "id": "bio.p-healthcancer3",
        "prompt": "A secondary tumour forms when…",
        "options": [
          "Every healthy cell moves together",
          "A stent becomes a heart valve",
          "Spread malignant cells establish and divide elsewhere"
        ],
        "answer": 2,
        "why": "Spread and establishment are required; not all travelling cells survive.",
        "concept": "bio.health-spread"
      },
      {
        "id": "bio.p-healthcancer4",
        "prompt": "Which risk statement is sound?",
        "options": [
          "Only smoking ever matters",
          "Lifestyle and genetic factors can influence cancer risk",
          "A risk factor guarantees cancer"
        ],
        "answer": 1,
        "why": "Risk has multiple influences and is not certainty.",
        "concept": "bio.health-cancer-risk"
      }
    ],
    "check": [
      {
        "id": "bio.c-healthcancer1",
        "prompt": "A wound heals through regulated division. Why is this not enough evidence of cancer?",
        "options": [
          "Normal division can be controlled",
          "All division is malignant",
          "Only bacteria divide"
        ],
        "answer": 0,
        "why": "Uncontrolled growth, not division alone, characterises cancer.",
        "concept": "bio.health-growth"
      },
      {
        "id": "bio.c-healthcancer2",
        "prompt": "An abnormal growth remains enclosed and does not invade. It is described as…",
        "options": [
          "Definitely metastatic",
          "Benign",
          "A secondary malignant tumour"
        ],
        "answer": 1,
        "why": "Contained abnormal growth is benign in this simplified description.",
        "concept": "bio.health-benign"
      },
      {
        "id": "bio.c-healthcancer3",
        "prompt": "Which feature identifies malignant behaviour?",
        "options": [
          "A membrane always prevents movement",
          "No cell ever divides",
          "Cells invade nearby tissues"
        ],
        "answer": 2,
        "why": "Invasion distinguishes malignant cancer from contained benign growth.",
        "concept": "bio.health-benign"
      },
      {
        "id": "bio.c-healthcancer4",
        "prompt": "Which sequence explains a blood-borne secondary tumour?",
        "options": [
          "Primary cancer → blood transport → establishment elsewhere",
          "Healthy cell → oxygen → red cell",
          "Donor heart → stent → brain"
        ],
        "answer": 0,
        "why": "Cancer cells can travel and grow at another site.",
        "concept": "bio.health-spread"
      },
      {
        "id": "bio.c-healthcancer5",
        "prompt": "A lung cancer spreads to the liver. What is the liver growth?",
        "options": [
          "Proof of a new unrelated benign tumour",
          "A secondary tumour derived from the lung cancer",
          "A normal liver repair response"
        ],
        "answer": 1,
        "why": "Location changes but origin remains the primary cancer.",
        "concept": "bio.health-spread"
      },
      {
        "id": "bio.c-healthcancer6",
        "prompt": "Which correctly describes cancer risk?",
        "options": [
          "It comes only from lifestyle",
          "It is certain if a relative has cancer",
          "Lifestyle and genetic factors can both contribute"
        ],
        "answer": 2,
        "why": "Inherited susceptibility is possible without inevitability.",
        "concept": "bio.health-cancer-risk"
      },
      {
        "id": "bio.c-healthcancer7",
        "prompt": "Which statement about a benign tumour is sound?",
        "options": [
          "It does not invade, but its size or position may cause harm",
          "It always invades through blood",
          "It is necessarily harmless in every location"
        ],
        "answer": 0,
        "why": "Benign does not mean incapable of causing problems.",
        "concept": "bio.health-benign"
      },
      {
        "id": "bio.c-healthcancer8",
        "prompt": "What can the sphere model establish?",
        "options": [
          "A clinical diagnosis from colour",
          "A simplified distinction between containment, invasion and spread",
          "An exact tumour doubling time"
        ],
        "answer": 1,
        "why": "The model shows concepts rather than clinical measurements.",
        "concept": "bio.health-spread"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.5"
    ],
    "prerequisites": [
      "science.biology.cells.cell-cycle",
      "science.biology.organisation.lifestyle-risk"
    ],
    "separate": false,
    "higher": false
  }
];
export const healthConcepts={
  "bio.health-chd": "Coronary narrowing and oxygen supply",
  "bio.health-treatments": "Stents, statins and treatment tradeoffs",
  "bio.health-valves": "Faulty valve consequences and replacements",
  "bio.health-support": "Donor and artificial heart support",
  "bio.health-wellbeing": "Physical and mental wellbeing",
  "bio.health-types": "Communicable and non-communicable disease",
  "bio.health-links": "Interactions between diseases",
  "bio.health-factors": "Diet, stress and life situations",
  "bio.health-risk": "Risk factors and multiple causes",
  "bio.health-effects": "Lifestyle and environmental disease links",
  "bio.health-cost": "Human and financial disease costs",
  "bio.health-causation": "Association, mechanisms and confounding",
  "bio.health-frequency": "Frequency tables and equal-width histograms",
  "bio.health-incidence": "Comparing incidence with denominators",
  "bio.health-scatter": "Scatter patterns and correlation",
  "bio.health-sampling": "Representative epidemiological samples",
  "bio.health-growth": "Uncontrolled growth and division",
  "bio.health-benign": "Contained benign and invasive malignant tumours",
  "bio.health-spread": "Blood transport and secondary tumours",
  "bio.health-cancer-risk": "Lifestyle and genetic cancer risk"
};
