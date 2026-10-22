export const specialLessons=[
  {
    "id": "science.biology.infection-and-response.monoclonal-production",
    "title": "Making monoclonal antibodies",
    "short": "Making monoclonal antibodies",
    "topicId": "science.biology.infection-and-response",
    "refs": [
      "3.2.1"
    ],
    "minutes": 35,
    "widget": "separatebio-production",
    "big": "Monoclonal antibodies are produced by a single clone of cells. The antibodies share a binding specificity for one site on one protein antigen. This allows them to target a particular chemical or cell carrying that antigen. Monoclonal does not mean that only one antibody molecule is made.",
    "learn": [
      {
        "title": "One clone, one binding specificity",
        "text": "Monoclonal antibodies are produced by a single clone of cells. The antibodies share a binding specificity for one site on one protein antigen. This allows them to target a particular chemical or cell carrying that antigen. Monoclonal does not mean that only one antibody molecule is made.",
        "scene": "separatebio:binding:match"
      },
      {
        "title": "Combine two useful capabilities",
        "text": "Mouse lymphocytes are stimulated to make a particular antibody. A lymphocyte is combined with a particular tumour cell to form a hybridoma. The lymphocyte supplies the specific antibody-making capability; the tumour cell supplies the ability to divide repeatedly. The hybridoma can do both.",
        "scene": "separatebio:fusion:parents"
      },
      {
        "title": "Select and clone the hybridoma",
        "text": "A suitable single hybridoma is selected and cloned to produce many identical cells. Those cells all produce the same antibody. Starting from one chosen clone preserves specificity; mixing unrelated antibody-producing cells would not give the same single-clone product.",
        "scene": "separatebio:fusion:clone"
      },
      {
        "title": "Collect and purify",
        "text": "The cloned hybridoma cells divide and make large amounts of antibody. The antibody is collected and purified for its intended use. The final useful product is antibody, not a mixture of live tumour cells placed directly into a patient. Cell culture and purification are simplified in this model.",
        "scene": "separatebio:fusion:purify"
      }
    ],
    "practice": [
      {
        "id": "bio.p-sp-monoclonal-production1",
        "prompt": "What does monoclonal describe?",
        "options": [
          "Only one antibody molecule exists",
          "Every possible antigen is bound",
          "Antibodies from one clone with one specificity"
        ],
        "answer": 2,
        "why": "A clone can make many antibody molecules with the same binding specificity.",
        "concept": "bio.special-monoclonal-production"
      },
      {
        "id": "bio.p-sp-monoclonal-production2",
        "prompt": "Which fusion produces a hybridoma?",
        "options": [
          "Antibody-producing lymphocyte + particular tumour cell",
          "Red cell + platelet",
          "Virus + antibiotic"
        ],
        "answer": 0,
        "why": "The combined cell can divide and make the particular antibody.",
        "concept": "bio.special-monoclonal-production"
      },
      {
        "id": "bio.p-sp-monoclonal-production3",
        "prompt": "Why clone one selected hybridoma?",
        "options": [
          "Remove the ability to divide",
          "Produce identical antibody-making cells",
          "Make every cell bind unrelated antigens"
        ],
        "answer": 1,
        "why": "Single-clone production preserves the selected specificity.",
        "concept": "bio.special-monoclonal-production"
      },
      {
        "id": "bio.p-sp-monoclonal-production4",
        "prompt": "What is collected and purified?",
        "options": [
          "All live tumour cells for injection",
          "Only the culture dish",
          "The antibody product"
        ],
        "answer": 2,
        "why": "The product is antibody, separated and purified for use.",
        "concept": "bio.special-monoclonal-production"
      }
    ],
    "check": [
      {
        "id": "bio.c-sp-monoclonal-production1",
        "prompt": "Antibodies from one clone bind one site on a protein antigen. Which property is illustrated?",
        "options": [
          "Binding every antigen equally",
          "Antibiotic resistance",
          "Specificity"
        ],
        "answer": 2,
        "why": "The binding site recognises a particular antigen site.",
        "concept": "bio.special-monoclonal-production"
      },
      {
        "id": "bio.c-sp-monoclonal-production2",
        "prompt": "Which cell is stimulated to make the particular antibody?",
        "options": [
          "A mouse lymphocyte",
          "A human red blood cell",
          "A plant guard cell"
        ],
        "answer": 0,
        "why": "This is the lymphocyte step in the specified production method.",
        "concept": "bio.special-monoclonal-production"
      },
      {
        "id": "bio.c-sp-monoclonal-production3",
        "prompt": "Which partner supplies repeated cell division in the fusion?",
        "options": [
          "A leaf cuticle",
          "A particular tumour cell",
          "An antibiotic molecule"
        ],
        "answer": 1,
        "why": "The hybridoma combines repeated division with specific antibody production.",
        "concept": "bio.special-monoclonal-production"
      },
      {
        "id": "bio.c-sp-monoclonal-production4",
        "prompt": "What can the resulting hybridoma do?",
        "options": [
          "Only carry oxygen",
          "Produce every possible antibody indiscriminately",
          "Divide and produce the particular antibody"
        ],
        "answer": 2,
        "why": "Both capabilities are needed for production.",
        "concept": "bio.special-monoclonal-production"
      },
      {
        "id": "bio.c-sp-monoclonal-production5",
        "prompt": "What follows selection of a suitable single hybridoma?",
        "options": [
          "Clone it to make many identical cells",
          "Mix it with unrelated clones to guarantee one specificity",
          "Stop all division permanently"
        ],
        "answer": 0,
        "why": "Cloning expands that chosen cell lineage.",
        "concept": "bio.special-monoclonal-production"
      },
      {
        "id": "bio.c-sp-monoclonal-production6",
        "prompt": "What do the cloned cells produce?",
        "options": [
          "Only a painkiller",
          "The same antibody specificity",
          "A random new specificity in every cell"
        ],
        "answer": 1,
        "why": "They share the selected antibody-making property.",
        "concept": "bio.special-monoclonal-production"
      },
      {
        "id": "bio.c-sp-monoclonal-production7",
        "prompt": "Why collect and purify the antibody?",
        "options": [
          "Use live tumour cells as the final medicine",
          "Convert the antibody into a bacterium",
          "Obtain the intended antibody product from the culture"
        ],
        "answer": 2,
        "why": "The desired product is purified antibody.",
        "concept": "bio.special-monoclonal-production"
      },
      {
        "id": "bio.c-sp-monoclonal-production8",
        "prompt": "A sample contains many antibody molecules from one clone. Is monoclonal an appropriate description?",
        "options": [
          "Yes; molecule count can be large",
          "No; monoclonal means exactly one molecule",
          "Only if it binds every antigen"
        ],
        "answer": 0,
        "why": "Monoclonal concerns origin/specificity, not a count of one molecule.",
        "concept": "bio.special-monoclonal-production"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.4"
    ],
    "prerequisites": [
      "science.biology.infection-and-response.human-defences"
    ],
    "separate": true,
    "higher": true
  },
  {
    "id": "science.biology.infection-and-response.monoclonal-uses",
    "title": "Using monoclonal antibodies",
    "short": "Using monoclonal antibodies",
    "topicId": "science.biology.infection-and-response",
    "refs": [
      "3.2.2"
    ],
    "minutes": 35,
    "widget": "separatebio-uses",
    "big": "A monoclonal antibody can detect a particular antigen. In a supplied diagnostic test, a labelled antibody binds the target and a capture region produces a visible signal. Pregnancy tests are one example of this application. You need to explain a supplied mechanism, not memorise a brand or every test design.",
    "learn": [
      {
        "title": "Turn binding into a signal",
        "text": "A monoclonal antibody can detect a particular antigen. In a supplied diagnostic test, a labelled antibody binds the target and a capture region produces a visible signal. Pregnancy tests are one example of this application. You need to explain a supplied mechanism, not memorise a brand or every test design.",
        "scene": "separatebio:assay:present"
      },
      {
        "title": "Measure or locate a target",
        "text": "Laboratory assays use specific binding to measure hormones and other chemicals or detect pathogens. In research, attaching a fluorescent dye to an antibody can reveal where its target molecule occurs in a cell or tissue. A fluorescent label is a location signal; it is not automatically a treatment.",
        "scene": "separatebio:binding:fluorescent"
      },
      {
        "title": "Deliver a payload",
        "text": "An antibody can target a protein antigen on cancer cells and carry a radioactive substance, a toxic drug or a chemical that stops growth and division. The aim is to concentrate the payload at target cells and minimise damage elsewhere. Targeting does not guarantee that healthy tissue is never affected or that there are no side effects.",
        "scene": "separatebio:binding:payload"
      },
      {
        "title": "Evaluate benefits and limitations",
        "text": "Specific targeting can be powerful, but safety, side effects and effectiveness still need evidence. AQA highlights that early monoclonal treatments produced more side effects than initially expected and did not meet every early hope. This is an evaluation context, not a claim about the current use of every modern treatment. Consider ethical issues such as animal use in production and weigh a supplied benefit against a supplied harm.",
        "scene": "separatebio:binding:nonmatch"
      }
    ],
    "practice": [
      {
        "id": "bio.p-sp-monoclonal-uses1",
        "prompt": "What makes an antibody-based test selective?",
        "options": [
          "Every antibody binds all chemicals",
          "The test is always red",
          "Binding a particular antigen site"
        ],
        "answer": 2,
        "why": "Specificity can convert target binding into a measurable signal.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.p-sp-monoclonal-uses2",
        "prompt": "What can a fluorescent antibody label show?",
        "options": [
          "Where a target molecule occurs",
          "That all labelled cells must be cured",
          "The dose of every antibiotic"
        ],
        "answer": 0,
        "why": "Fluorescence can locate molecules in cells or tissues.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.p-sp-monoclonal-uses3",
        "prompt": "Why attach a toxic payload to an antibody?",
        "options": [
          "Turn every cell into a hybridoma",
          "Aim delivery at cells carrying the target antigen",
          "Guarantee no possible adverse effect"
        ],
        "answer": 1,
        "why": "Specific binding can concentrate delivery, but safety still needs evidence.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.p-sp-monoclonal-uses4",
        "prompt": "Which is an appropriate evaluation?",
        "options": [
          "Assume a targeted drug cannot harm healthy tissue",
          "Reject all evidence except the label colour",
          "Weigh targeting benefits against side effects and ethical concerns"
        ],
        "answer": 2,
        "why": "A mechanism alone cannot establish net benefit.",
        "concept": "bio.special-monoclonal-uses"
      }
    ],
    "check": [
      {
        "id": "bio.c-sp-monoclonal-uses1",
        "prompt": "Which application uses an antigen-binding diagnostic signal?",
        "options": [
          "A thermometer with no antibody",
          "An unlabelled leaf ruler",
          "A supplied pregnancy test"
        ],
        "answer": 2,
        "why": "Pregnancy testing is one specified example.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.c-sp-monoclonal-uses2",
        "prompt": "Which laboratory uses are appropriate?",
        "options": [
          "Measure hormones/chemicals or detect pathogens",
          "Create every mineral ion in soil",
          "Replace all peer review"
        ],
        "answer": 0,
        "why": "Specific binding can support detection and measurement.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.c-sp-monoclonal-uses3",
        "prompt": "An antibody with fluorescent dye binds a target in tissue. What is its role here?",
        "options": [
          "Prove no disease exists elsewhere",
          "Locate the target molecule",
          "Deliver an antibiotic in every case"
        ],
        "answer": 1,
        "why": "A dye label reports location.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.c-sp-monoclonal-uses4",
        "prompt": "An antibody recognises a protein on a cancer cell. Why can it deliver a linked drug preferentially there?",
        "options": [
          "All cells must have identical antigens",
          "Antibodies digest all tissues indiscriminately",
          "Binding concentrates the linked payload at target cells"
        ],
        "answer": 2,
        "why": "The particular target antigen provides selectivity.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.c-sp-monoclonal-uses5",
        "prompt": "Which payloads are specified examples?",
        "options": [
          "Radioactive substance, toxic drug, or growth/division inhibitor",
          "Only water and oxygen",
          "Only a living tumour cell"
        ],
        "answer": 0,
        "why": "These are alternative linked treatment payloads.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.c-sp-monoclonal-uses6",
        "prompt": "Does targeted delivery prove no side effects will occur?",
        "options": [
          "Only if all adverse outcomes are hidden",
          "No; safety and off-target effects still require evidence",
          "Yes; targeting guarantees zero harm"
        ],
        "answer": 1,
        "why": "Selectivity is an aim, not an absolute safety guarantee.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.c-sp-monoclonal-uses7",
        "prompt": "A supplied test has a target band but its required control band is absent. What is justified?",
        "options": [
          "It must be positive",
          "It must be negative",
          "The result is invalid under this test’s stated rules"
        ],
        "answer": 2,
        "why": "A required control is needed before interpreting that supplied test.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.c-sp-monoclonal-uses8",
        "prompt": "Which ethical issue is relevant to the specified production method?",
        "options": [
          "Use of animals in obtaining antibody-producing lymphocytes",
          "Whether every flower has the same colour",
          "Whether antibodies are a type of copper wire"
        ],
        "answer": 0,
        "why": "Evaluate animal use alongside potential benefits; scientific and ethical issues differ.",
        "concept": "bio.special-monoclonal-uses"
      },
      {
        "id": "bio.c-sp-monoclonal-uses9",
        "prompt": "Given a treatment benefit and serious adverse effects, what should evaluation include?",
        "options": [
          "A claim that all modern treatments have the same uptake",
          "Both benefits and harms with limitations of the evidence",
          "Only the intended targeting mechanism"
        ],
        "answer": 1,
        "why": "Weigh the supplied evidence without making unsupported current-usage claims.",
        "concept": "bio.special-monoclonal-uses"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.3",
      "WS1.5"
    ],
    "prerequisites": [
      "science.biology.infection-and-response.monoclonal-production"
    ],
    "separate": true,
    "higher": true
  },
  {
    "id": "science.biology.infection-and-response.plant-detection",
    "title": "Detecting plant disease",
    "short": "Detecting plant disease",
    "topicId": "science.biology.infection-and-response",
    "refs": [
      "3.3.1"
    ],
    "minutes": 35,
    "widget": "separatebio-detection",
    "big": "Stunted growth, leaf spots, decay or rot, unusual growths, malformed stems or leaves, discolouration and visible pests can alert you to a plant problem. These are signs for investigation. A simplified drawing or a single symptom does not establish a unique cause.",
    "learn": [
      {
        "title": "Look for signs of a problem",
        "text": "Stunted growth, leaf spots, decay or rot, unusual growths, malformed stems or leaves, discolouration and visible pests can alert you to a plant problem. These are signs for investigation. A simplified drawing or a single symptom does not establish a unique cause.",
        "scene": "separatebio:symptoms:spots"
      },
      {
        "title": "Detection is not identification",
        "text": "Detecting a problem means noticing evidence that the plant is affected. Identifying the cause needs more information. Similar yellowing can arise from pathogens or a mineral deficiency; compare the whole pattern, growth conditions and other observations rather than treating a colour as a diagnosis.",
        "scene": "separatebio:symptoms:yellow"
      },
      {
        "title": "Choose stronger evidence",
        "text": "A gardening manual or reliable website can help compare signs and host information. A laboratory can examine infected material to identify a pathogen. A test kit containing monoclonal antibodies can detect a particular target, if the kit is appropriate and valid. These methods answer different questions.",
        "scene": "separatebio:evidence:lab"
      },
      {
        "title": "Interpret a specific test",
        "text": "A valid positive antibody test provides evidence for the antigen it is designed to detect. A negative result for one target does not rule out every plant disease, pest or ion deficiency. Use the stated control, target and limitations of the supplied test; do not infer more than it measures.",
        "scene": "separatebio:assay:absent"
      }
    ],
    "practice": [
      {
        "id": "bio.p-sp-plant-detection1",
        "prompt": "Leaf spots and unusual growths establish…",
        "options": [
          "Proof of one particular virus in every plant",
          "Proof that mineral ions are pathogens",
          "Signs to investigate, not a unique cause"
        ],
        "answer": 2,
        "why": "Detection and identification are different.",
        "concept": "bio.special-plant-detection"
      },
      {
        "id": "bio.p-sp-plant-detection2",
        "prompt": "Which approach can identify a pathogen in a plant sample?",
        "options": [
          "Laboratory examination/testing",
          "Leaf colour alone in every case",
          "Ignoring the plant species and conditions"
        ],
        "answer": 0,
        "why": "A lab can provide evidence beyond a non-specific sign.",
        "concept": "bio.special-plant-detection"
      },
      {
        "id": "bio.p-sp-plant-detection3",
        "prompt": "What does a valid negative target-A kit establish?",
        "options": [
          "All plants are nitrate deficient",
          "A was not detected under the test conditions",
          "No plant problem of any kind exists"
        ],
        "answer": 1,
        "why": "A specific test cannot exclude unrelated causes.",
        "concept": "bio.special-plant-detection"
      },
      {
        "id": "bio.p-sp-plant-detection4",
        "prompt": "Why consult a reliable gardening reference?",
        "options": [
          "Guarantee any picture is a diagnosis",
          "Replace every laboratory control",
          "Compare signs, host and likely causes"
        ],
        "answer": 2,
        "why": "Reference comparison supports identification but has limits.",
        "concept": "bio.special-plant-detection"
      }
    ],
    "check": [
      {
        "id": "bio.c-sp-plant-detection1",
        "prompt": "Which set contains recognised warning signs?",
        "options": [
          "Only a correctly named cultivar",
          "Only a green ruler beside a plant",
          "Stunted growth, spots, rot, unusual growths"
        ],
        "answer": 2,
        "why": "These signs can trigger investigation.",
        "concept": "bio.special-plant-detection"
      },
      {
        "id": "bio.c-sp-plant-detection2",
        "prompt": "Which additional set contains recognised warning signs?",
        "options": [
          "Malformed stems/leaves, discolouration, pests",
          "Only identical healthy leaves",
          "Only correctly stored seeds"
        ],
        "answer": 0,
        "why": "All seven specified signs are covered across these sets.",
        "concept": "bio.special-plant-detection"
      },
      {
        "id": "bio.c-sp-plant-detection3",
        "prompt": "A yellow leaf is observed. What can be concluded immediately?",
        "options": [
          "Magnesium deficiency is impossible",
          "There is a sign to investigate; cause is not unique",
          "A virus is certainly present"
        ],
        "answer": 1,
        "why": "Different causes can produce similar signs.",
        "concept": "bio.special-plant-detection"
      },
      {
        "id": "bio.c-sp-plant-detection4",
        "prompt": "Which resource can help compare a plant’s symptoms and host?",
        "options": [
          "An unrelated random advert",
          "Only the price of the pot",
          "A reliable gardening manual or website"
        ],
        "answer": 2,
        "why": "References support evidence-based identification.",
        "concept": "bio.special-plant-detection"
      },
      {
        "id": "bio.c-sp-plant-detection5",
        "prompt": "Why send an infected sample to a suitable laboratory?",
        "options": [
          "To investigate and identify its pathogen",
          "To prove every symptom has one cause without tests",
          "To replace all measurements with guesses"
        ],
        "answer": 0,
        "why": "Laboratory methods add evidence.",
        "concept": "bio.special-plant-detection"
      },
      {
        "id": "bio.c-sp-plant-detection6",
        "prompt": "What gives an antibody-containing kit specificity?",
        "options": [
          "The shape of the cardboard box",
          "Binding a particular target antigen",
          "Binding every mineral ion and pathogen equally"
        ],
        "answer": 1,
        "why": "The chosen antibody recognises a particular antigen.",
        "concept": "bio.special-plant-detection"
      },
      {
        "id": "bio.c-sp-plant-detection7",
        "prompt": "A valid positive kit detects antigen A. What is justified?",
        "options": [
          "Proof every symptom was caused only by A",
          "Proof all other plants are infected",
          "Evidence for A in that sample under the stated test"
        ],
        "answer": 2,
        "why": "Interpret only the supplied test’s scope.",
        "concept": "bio.special-plant-detection"
      },
      {
        "id": "bio.c-sp-plant-detection8",
        "prompt": "A target-A kit is negative, but symptoms remain. What next?",
        "options": [
          "Consider other causes and further appropriate evidence",
          "Declare every possible disease excluded",
          "Assume the control is unnecessary"
        ],
        "answer": 0,
        "why": "A specific negative does not rule out all disease or deficiency.",
        "concept": "bio.special-plant-detection"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.4"
    ],
    "prerequisites": [
      "science.biology.infection-and-response.monoclonal-uses"
    ],
    "separate": true,
    "higher": true
  },
  {
    "id": "science.biology.infection-and-response.plant-pests-and-deficiencies",
    "title": "Plant pests & deficiencies",
    "short": "Plant pests & deficiencies",
    "topicId": "science.biology.infection-and-response",
    "refs": [
      "3.3.1"
    ],
    "minutes": 35,
    "widget": "separatebio-nutrients",
    "big": "Plants can suffer viral, bacterial and fungal infections, and damage from insect pests. Tobacco mosaic virus is the specified viral example, rose black spot the fungal example, and aphids the insect example. Use the earlier shared disease lessons for TMV and rose black spot; an aphid is an insect, not a fungus or bacterium.",
    "learn": [
      {
        "title": "Separate different kinds of damage",
        "text": "Plants can suffer viral, bacterial and fungal infections, and damage from insect pests. Tobacco mosaic virus is the specified viral example, rose black spot the fungal example, and aphids the insect example. Use the earlier shared disease lessons for TMV and rose black spot; an aphid is an insect, not a fungus or bacterium.",
        "scene": "separatebio:plant:aphid"
      },
      {
        "title": "Nitrate supports protein synthesis",
        "text": "Plants need nitrate ions for protein synthesis and therefore growth. Too little nitrate can cause stunted growth. Nitrate ions are nutrients, not an energy source or a pathogen. The matched comparison changes nitrate supply while other conditions remain suitable.",
        "scene": "separatebio:nutrient:nitrate-low"
      },
      {
        "title": "Magnesium supports chlorophyll",
        "text": "Magnesium ions are needed to make chlorophyll. A shortage can cause chlorosis, meaning leaf yellowing or loss of green colour. Less chlorophyll can limit photosynthesis. This is an ion deficiency, not automatically an infectious disease.",
        "scene": "separatebio:nutrient:magnesium-low"
      },
      {
        "title": "Compare the cause before the remedy",
        "text": "Aphids feed on plant sap and can affect growth. A mineral deficiency instead results from insufficient mineral-ion supply. In a controlled investigation vary one ion at a time and compare matched plants; adding nitrate will not specifically correct magnesium deficiency. Real plants vary, so these schematics illustrate mechanisms rather than diagnose a specimen.",
        "scene": "separatebio:nutrient:complete"
      }
    ],
    "practice": [
      {
        "id": "bio.p-sp-plant-pests-and-deficiencies1",
        "prompt": "Which specified example is an insect pest?",
        "options": [
          "TMV",
          "Rose black spot fungus",
          "Aphid"
        ],
        "answer": 2,
        "why": "Aphids are sap-feeding insects.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.p-sp-plant-pests-and-deficiencies2",
        "prompt": "Nitrate shortage primarily limits…",
        "options": [
          "Protein synthesis and growth",
          "Production of antibiotics by red cells",
          "Only the thickness of a metal wire"
        ],
        "answer": 0,
        "why": "Nitrate supports protein synthesis.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.p-sp-plant-pests-and-deficiencies3",
        "prompt": "Magnesium shortage can cause…",
        "options": [
          "Every leaf to make unlimited sugar",
          "Chlorosis because chlorophyll production is limited",
          "A guaranteed fungal infection"
        ],
        "answer": 1,
        "why": "Magnesium is needed for chlorophyll.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.p-sp-plant-pests-and-deficiencies4",
        "prompt": "How should an ion comparison be controlled?",
        "options": [
          "Change light, water and all ions at once",
          "Use no comparison plants",
          "Change one ion while matching other conditions"
        ],
        "answer": 2,
        "why": "A matched comparison helps attribute the difference to the changed ion.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      }
    ],
    "check": [
      {
        "id": "bio.c-sp-plant-pests-and-deficiencies1",
        "prompt": "Which groups can cause plant infections?",
        "options": [
          "Only human red blood cells",
          "Only metal ions",
          "Viruses, bacteria and fungi"
        ],
        "answer": 2,
        "why": "Plants can host multiple pathogen groups.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.c-sp-plant-pests-and-deficiencies2",
        "prompt": "Which pairing is correct?",
        "options": [
          "TMV—virus; rose black spot—fungus",
          "TMV—insect; aphid—fungus",
          "Rose black spot—magnesium ion"
        ],
        "answer": 0,
        "why": "These are the specified named examples.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.c-sp-plant-pests-and-deficiencies3",
        "prompt": "What is an aphid?",
        "options": [
          "A nitrate ion",
          "A sap-feeding insect pest",
          "A bacterium producing chlorophyll"
        ],
        "answer": 1,
        "why": "Aphids are insects and feed on sap.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.c-sp-plant-pests-and-deficiencies4",
        "prompt": "Why are nitrate ions needed?",
        "options": [
          "To supply all energy directly",
          "To replace every chloroplast",
          "Protein synthesis and growth"
        ],
        "answer": 2,
        "why": "Nitrate deficiency can restrict growth.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.c-sp-plant-pests-and-deficiencies5",
        "prompt": "Which effect is associated with nitrate deficiency?",
        "options": [
          "Stunted growth",
          "Guaranteed leaf rot from a named bacterium",
          "Unlimited new protein synthesis"
        ],
        "answer": 0,
        "why": "Reduced nitrate supply limits protein production and growth.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.c-sp-plant-pests-and-deficiencies6",
        "prompt": "Why are magnesium ions needed?",
        "options": [
          "To supply a plant’s entire energy budget",
          "To make chlorophyll",
          "To make the cellulose wall into an antibody"
        ],
        "answer": 1,
        "why": "Magnesium is required for chlorophyll.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.c-sp-plant-pests-and-deficiencies7",
        "prompt": "What does chlorosis mean here?",
        "options": [
          "Only an increase in stem height",
          "Proof of a virus in every case",
          "Loss of green colour/yellowing"
        ],
        "answer": 2,
        "why": "It describes a sign, not a unique infectious cause.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.c-sp-plant-pests-and-deficiencies8",
        "prompt": "A plant lacks magnesium but has sufficient nitrate. What should a matched supply test vary?",
        "options": [
          "Magnesium while keeping other factors suitable",
          "Only nitrate, assuming all ions are interchangeable",
          "Every variable simultaneously"
        ],
        "answer": 0,
        "why": "Different ions have different roles.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      },
      {
        "id": "bio.c-sp-plant-pests-and-deficiencies9",
        "prompt": "Does mineral deficiency itself constitute a pathogen infection?",
        "options": [
          "Only if the pot is large",
          "No; insufficient mineral supply is non-infectious",
          "Yes; every mineral is a bacterium"
        ],
        "answer": 1,
        "why": "Separate nutritional causes from pathogens and pests.",
        "concept": "bio.special-plant-pests-and-deficiencies"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.4"
    ],
    "prerequisites": [
      "science.biology.organisation.plant-tissues"
    ],
    "separate": true,
    "higher": false
  },
  {
    "id": "science.biology.infection-and-response.plant-defences",
    "title": "Plant defence responses",
    "short": "Plant defence responses",
    "topicId": "science.biology.infection-and-response",
    "refs": [
      "3.3.2"
    ],
    "minutes": 35,
    "widget": "separatebio-defences",
    "big": "Cellulose cell walls and a tough waxy leaf cuticle resist invasion by microorganisms. Layers of dead cells around stems form bark; outer layers can fall off, removing organisms on that surface. These are physical barriers, not specific antibodies.",
    "learn": [
      {
        "title": "Physical barriers resist entry",
        "text": "Cellulose cell walls and a tough waxy leaf cuticle resist invasion by microorganisms. Layers of dead cells around stems form bark; outer layers can fall off, removing organisms on that surface. These are physical barriers, not specific antibodies.",
        "scene": "separatebio:barrier:cuticle"
      },
      {
        "title": "Chemicals can deter or inhibit",
        "text": "Some plants produce antibacterial chemicals that inhibit bacteria. Poisons can deter herbivores from eating the plant. Those are chemical defences with different targets. A poison that deters an animal does not imply every bacterium is killed.",
        "scene": "separatebio:chemical:antibacterial"
      },
      {
        "title": "Mechanical adaptations discourage feeding",
        "text": "Thorns and hairs can deter animals. Some leaves droop or curl when touched, changing what a feeding animal encounters. These adaptations reduce feeding opportunities under suitable conditions; they do not guarantee that no animal can eat any part of the plant.",
        "scene": "separatebio:mechanical:thorns"
      },
      {
        "title": "Mimicry can change behaviour",
        "text": "A plant feature may mimic another organism or a cue that changes an animal’s behaviour. In the supplied example, harmless egg-like markings discourage an insect that avoids laying where eggs already appear present. The markings do not poison the insect or become real eggs. This is one illustrative mechanism, not a feature of every plant.",
        "scene": "separatebio:mechanical:mimicry"
      }
    ],
    "practice": [
      {
        "id": "bio.p-sp-plant-defences1",
        "prompt": "Which defence is a physical barrier?",
        "options": [
          "A specific monoclonal antibody made by a plant",
          "Only a toxic payload in a syringe",
          "Cellulose cell wall"
        ],
        "answer": 2,
        "why": "Walls can resist entry by microorganisms.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.p-sp-plant-defences2",
        "prompt": "What can falling bark layers remove?",
        "options": [
          "Organisms on the outer surface",
          "Every pathogen already in every cell",
          "All mineral ions permanently"
        ],
        "answer": 0,
        "why": "Shedding removes affected surface material, with limits.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.p-sp-plant-defences3",
        "prompt": "Which distinction is correct?",
        "options": [
          "Every defence acts on the same target",
          "Antibacterial chemical inhibits bacteria; poison deters herbivores",
          "Thorns are antibodies; wax is a white cell"
        ],
        "answer": 1,
        "why": "Match each mechanism with its target.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.p-sp-plant-defences4",
        "prompt": "In a supplied model, touch makes leaflets fold. What is shown?",
        "options": [
          "Nitrate becoming a virus",
          "A new antibody schedule",
          "A mechanical adaptation that can discourage feeding"
        ],
        "answer": 2,
        "why": "Changed leaf position can affect an animal’s feeding behaviour.",
        "concept": "bio.special-plant-defences"
      }
    ],
    "check": [
      {
        "id": "bio.c-sp-plant-defences1",
        "prompt": "Which substance forms a specified physical cell barrier?",
        "options": [
          "An antibiotic made by a human platelet",
          "Only glucose in blood",
          "Cellulose in cell walls"
        ],
        "answer": 2,
        "why": "Cell walls resist microorganism invasion.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.c-sp-plant-defences2",
        "prompt": "What is the role of a tough waxy cuticle?",
        "options": [
          "A surface barrier resisting microorganism entry",
          "Produce mouse lymphocytes",
          "Guarantee every infection is impossible"
        ],
        "answer": 0,
        "why": "The cuticle is a physical defence with limits.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.c-sp-plant-defences3",
        "prompt": "Which description matches bark defence?",
        "options": [
          "A mineral-ion deficiency",
          "Dead outer stem-cell layers that can fall off",
          "Only living antibodies in blood"
        ],
        "answer": 1,
        "why": "Outer layers form a barrier and can shed surface organisms.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.c-sp-plant-defences4",
        "prompt": "Which target is appropriate for an antibacterial plant chemical?",
        "options": [
          "Only large herbivores through thorns",
          "Every possible organism with equal effect",
          "Bacteria"
        ],
        "answer": 2,
        "why": "The name specifies antibacterial action.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.c-sp-plant-defences5",
        "prompt": "What can a plant poison do?",
        "options": [
          "Deter herbivores",
          "Guarantee increased protein synthesis in every animal",
          "Become a cellulose wall"
        ],
        "answer": 0,
        "why": "A chemical deterrent affects feeding animals.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.c-sp-plant-defences6",
        "prompt": "How can thorns protect a plant?",
        "options": [
          "Treat every viral infection",
          "Mechanically discourage animals from feeding",
          "Produce human antibodies"
        ],
        "answer": 1,
        "why": "Sharp structures can make feeding difficult.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.c-sp-plant-defences7",
        "prompt": "Plant hairs can act as…",
        "options": [
          "A substitute for all chlorophyll",
          "Only bacterial toxins",
          "Mechanical deterrents to animals"
        ],
        "answer": 2,
        "why": "Hairs are a specified mechanical adaptation.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.c-sp-plant-defences8",
        "prompt": "Leaves droop or curl after touch. Which type of defence is illustrated?",
        "options": [
          "Mechanical adaptation",
          "A monoclonal antibody clone",
          "Only a nitrate deficiency"
        ],
        "answer": 0,
        "why": "A physical change in leaf arrangement can discourage feeding.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.c-sp-plant-defences9",
        "prompt": "A supplied plant has egg-like marks and an insect avoids occupied leaves. What mechanism fits?",
        "options": [
          "The marks are living insect eggs in every case",
          "Mimicry changes the insect’s behaviour",
          "The marks are necessarily toxic"
        ],
        "answer": 1,
        "why": "The resemblance acts as a misleading cue in the supplied example.",
        "concept": "bio.special-plant-defences"
      },
      {
        "id": "bio.c-sp-plant-defences10",
        "prompt": "Why is it wrong to claim a single defence guarantees complete protection?",
        "options": [
          "All plants use identical antibodies",
          "Every barrier kills every internal pathogen",
          "Mechanisms and targets differ and can have limits"
        ],
        "answer": 2,
        "why": "Defences can reduce damage without guaranteeing no attack or infection.",
        "concept": "bio.special-plant-defences"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.4"
    ],
    "prerequisites": [
      "science.biology.infection-and-response.plant-pests-and-deficiencies"
    ],
    "separate": true,
    "higher": false
  }
];
export const specialConcepts={"bio.special-monoclonal-production": "Making monoclonal antibodies", "bio.special-monoclonal-uses": "Using monoclonal antibodies", "bio.special-plant-detection": "Detecting plant disease", "bio.special-plant-pests-and-deficiencies": "Plant pests & deficiencies", "bio.special-plant-defences": "Plant defence responses"};
