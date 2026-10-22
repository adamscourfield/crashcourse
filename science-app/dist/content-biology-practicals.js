export const practicalLessons=[
  {
    "id": "science.biology.organisation.food-tests",
    "title": "Food tests",
    "short": "Reagent, observation and inference",
    "refs": [
      "2.2.1"
    ],
    "minutes": 35,
    "widget": "food-tests",
    "topicId": "science.biology.organisation",
    "big": "Use the correct reagent and conditions, describe the observation and make a limited qualitative inference. Compare with suitable controls.",
    "learn": [
      {
        "title": "Prepare samples and separate portions",
        "text": "Food-test practicals identify food substances using qualitative reagents: Biology required practical4 / Trilogy practical3. In a supervised method, crush or mix a suitable food sample with distilled water and filter if needed to obtain a testable aqueous preparation. Keep fresh portions and clean tools for different reagents to reduce contamination. A lipid test can need a separate suitable ethanol preparation; an aqueous filtrate alone does not establish that all insoluble fat was sampled.",
        "scene": "bioexp:food"
      },
      {
        "title": "Test reducing sugars with Benedict’s reagent",
        "text": "Add Benedict’s reagent to a suitable sample and heat using a hot water bath under the school method, not by putting the test tube directly in a flame. A positive reducing-sugar result can form a green, yellow, orange or brick-red precipitate; a matched negative remains blue. The observation must be linked to reagent and heating conditions. Not all sugars respond: an unmodified Benedict’s test does not establish absence of every sugar.",
        "scene": "bioexp:food:sugar"
      },
      {
        "title": "Test starch with iodine",
        "text": "Iodine solution changes from orange/brown to blue-black when starch is detected. A negative test retains the orange/brown iodine appearance under comparable conditions. This is a starch test, not a general test for every carbohydrate or for protein. Use words describing the observation as well as the model’s coloured drawing.",
        "scene": "bioexp:food:starch"
      },
      {
        "title": "Test protein with Biuret reagent",
        "text": "Biuret reagent gives a lilac/purple colour when protein is detected; a matched negative remains blue. School methods may supply ready-made reagent or the two appropriate components. Use the teacher’s handling method because Biuret reagents can contain hazardous alkaline and copper-containing solutions. A positive observation supports protein presence; it does not identify the exact protein or calculate its mass.",
        "scene": "bioexp:food:protein"
      },
      {
        "title": "Test lipids with an ethanol emulsion",
        "text": "This lesson uses the ethanol-emulsion lipid test, consistent with the current AQA practical handbook. Use a fresh portion for ethanol extraction, then add the suitable extract to water under the supervised method. A white/cloudy emulsion supports lipid presence; a negative has no cloudy emulsion and remains clear under suitable comparison conditions. Ethanol is highly flammable: keep it away from flames and do not heat the ethanol test. This is a different test from a Benedict’s water-bath procedure.",
        "scene": "bioexp:food:lipid"
      },
      {
        "title": "Use controls and limit the conclusion",
        "text": "Compare known positive samples and an appropriate reagent blank/negative control to check that the method and observations work. Use comparable sample/reagent quantities and the specified conditions when comparing results. These tests are qualitative: they support detected presence or non-detection, not an exact concentration or a claim that a negative food contains no nutrient of any kind. A food’s own colour or cloudiness may complicate interpretation. Simulations do not replace supervised preparation, observation and recording.",
        "scene": "bioexp:food"
      }
    ],
    "practice": [
      {
        "id": "bio.p-bioexpfood1",
        "prompt": "Which combination tests for reducing sugar?",
        "options": [
          "Benedict’s reagent with suitable hot-water-bath heating",
          "Iodine without considering sample conditions",
          "Biuret reagent as a lipid test"
        ],
        "answer": 0,
        "why": "The reagent and required heating conditions belong together.",
        "concept": "bio.bioexp-food-reagents"
      },
      {
        "id": "bio.p-bioexpfood2",
        "prompt": "Iodine turns blue-black. What is supported?",
        "options": [
          "Protein detected",
          "Starch detected",
          "All sugars absent"
        ],
        "answer": 1,
        "why": "The iodine observation is specific to the taught starch test.",
        "concept": "bio.bioexp-food-results"
      },
      {
        "id": "bio.p-bioexpfood3",
        "prompt": "Which result supports lipid presence in the chosen method?",
        "options": [
          "Biuret remains blue",
          "Iodine remains brown",
          "A white/cloudy ethanol-water emulsion forms"
        ],
        "answer": 2,
        "why": "The emulsion test looks for cloudiness after suitable preparation.",
        "concept": "bio.bioexp-lipid"
      },
      {
        "id": "bio.p-bioexpfood4",
        "prompt": "Why use fresh sample portions for different tests?",
        "options": [
          "To reduce interference from reagents added in previous tests",
          "To guarantee every test is positive",
          "To turn all food into glucose"
        ],
        "answer": 0,
        "why": "Carry-over contamination can produce misleading results.",
        "concept": "bio.bioexp-food-controls"
      }
    ],
    "check": [
      {
        "id": "bio.c-bioexpfood1",
        "prompt": "A sample with Benedict’s reagent is heated in a suitable water bath and forms an orange precipitate. What is supported?",
        "options": [
          "Reducing sugar detected under these test conditions",
          "Protein must be absent",
          "Exact sugar mass is now known"
        ],
        "answer": 0,
        "why": "The precipitate is a positive qualitative reducing-sugar result.",
        "concept": "bio.bioexp-food-results"
      },
      {
        "id": "bio.c-bioexpfood2",
        "prompt": "Which observation is the specified positive Biuret result?",
        "options": [
          "Blue-black",
          "Lilac/purple",
          "A white ethanol emulsion"
        ],
        "answer": 1,
        "why": "Biuret detects protein with a lilac/purple response.",
        "concept": "bio.bioexp-food-results"
      },
      {
        "id": "bio.c-bioexpfood3",
        "prompt": "Which observation is a matched negative iodine test?",
        "options": [
          "A blue-black sample",
          "A brick-red precipitate",
          "The iodine remains orange/brown"
        ],
        "answer": 2,
        "why": "No characteristic starch colour change is detected in the comparison.",
        "concept": "bio.bioexp-food-results"
      },
      {
        "id": "bio.c-bioexpfood4",
        "prompt": "Which heating choice is appropriate for the taught Benedict’s test?",
        "options": [
          "A suitable hot water bath, following the school method",
          "Directly flame-heat an ethanol-containing lipid test",
          "Use no heating and assume the same evidence"
        ],
        "answer": 0,
        "why": "A water bath gives controlled heating; ethanol must be kept from flames.",
        "concept": "bio.bioexp-food-reagents"
      },
      {
        "id": "bio.c-bioexpfood5",
        "prompt": "A lipid-test sample remains clear with no emulsion, while the known positive forms an emulsion. Best conclusion?",
        "options": [
          "There are no molecules in the sample",
          "Lipid was not detected by this test under those conditions",
          "The sample certainly contains no sugar"
        ],
        "answer": 1,
        "why": "Negative results have scope and detection limits.",
        "concept": "bio.bioexp-lipid"
      },
      {
        "id": "bio.c-bioexpfood6",
        "prompt": "What is the critical hazard control for ethanol in the lipid test?",
        "options": [
          "Heat it over a direct flame",
          "Use the food’s smell as the result",
          "Keep it away from flames and do not heat this test"
        ],
        "answer": 2,
        "why": "Ethanol is highly flammable.",
        "concept": "bio.bioexp-lipid"
      },
      {
        "id": "bio.c-bioexpfood7",
        "prompt": "Why run a known positive and a suitable negative control?",
        "options": [
          "To check that the method can produce the expected positive and identify background interference",
          "To replace the need for any observation",
          "To force the unknown to match the positive"
        ],
        "answer": 0,
        "why": "Controls support interpretation of the unknown sample.",
        "concept": "bio.bioexp-food-controls"
      },
      {
        "id": "bio.c-bioexpfood8",
        "prompt": "A positive Biuret test by itself establishes…",
        "options": [
          "The exact grams of protein",
          "Evidence of protein presence, not an exact amount",
          "That every molecule is protein"
        ],
        "answer": 1,
        "why": "The test is qualitative rather than a calibrated quantitative measurement.",
        "concept": "bio.bioexp-food-controls"
      },
      {
        "id": "bio.c-bioexpfood9",
        "prompt": "Why might one aqueous filtered portion be unsuitable evidence for absence of lipid in the whole food?",
        "options": [
          "Every lipid dissolves perfectly in water",
          "Filtering guarantees all components enter the filtrate",
          "Insoluble lipid may not be represented in that portion"
        ],
        "answer": 2,
        "why": "Sampling and preparation affect what the test can detect.",
        "concept": "bio.bioexp-food-controls"
      }
    ],
    "skills": [
      "AT2",
      "AT8",
      "WS2.2",
      "WS3.5"
    ],
    "prerequisites": [
      "science.biology.organisation.digestive-enzymes"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.amylase-practical",
    "title": "Investigating pH & amylase",
    "short": "Sample, time and compare",
    "refs": [
      "2.2.1"
    ],
    "minutes": 35,
    "widget": "amylase-practical",
    "topicId": "science.biology.organisation",
    "big": "Change buffered pH, control temperature and use repeated iodine samples to time a comparable starch-disappearance endpoint.",
    "learn": [
      {
        "title": "Change pH while keeping the comparison fair",
        "text": "Biology required practical5 / Trilogy practical4 investigates pH effects on amylase breaking down starch. Use buffered solutions to establish the intended pH values. Change pH deliberately while keeping enzyme and starch volumes/concentrations, total reaction conditions and endpoint method comparable. Different amylases can have different activity patterns; the supplied illustrative data are not a universal optimum-pH rule.",
        "scene": "bioexp:amylase-example"
      },
      {
        "title": "Control temperature before mixing",
        "text": "Use a water bath or suitable electric heater to control temperature; allow the solutions to reach the chosen comparable temperature before reacting. Start timing consistently when enzyme and substrate are mixed. Temperature changes can affect reaction rate independently of pH, so unequal heating would confound the comparison. Actual handling, reagents and equipment follow the school risk assessment.",
        "scene": "bioexp:amylase-example"
      },
      {
        "title": "Sample continuously into fresh iodine",
        "text": "AQA specifies testing for starch every30 seconds. Take a fresh small sample of the reaction mixture each time and test it with a separate iodine drop; do not add iodine to the main reacting mixture or return tested samples to it. Blue-black means starch is still detected. The recorded endpoint is the first sample that no longer gives blue-black, leaving the iodine orange/brown under suitable conditions.",
        "scene": "bioexp:amylase-example"
      },
      {
        "title": "Repeat and compare endpoint rates",
        "text": "Repeat each pH condition and investigate unusual results before selecting suitable means. For comparable starting amounts and the same endpoint,1/mean endpoint time gives a relative rate index in s⁻¹. Original illustrative repeats60,90 and120 s have mean90 s. A60 s mean gives1/60≈0.0167 s⁻¹. This is not automatically grams of sugar per second, and changing the endpoint would invalidate the simple comparison.",
        "scene": "bioexp:amylase-example"
      },
      {
        "title": "Recognise the sampling interval limit",
        "text": "If starch is detected at90 s but not at120 s, disappearance occurred after90 s and by120 s under the sampling assumptions. Recording120 s does not establish the exact instant or guarantee it was105 s. Thirty-second sampling limits endpoint resolution. A teacher-approved shorter interval could improve timing evidence, while the required method teaches30-second sampling. Models/data here are original illustrations, not proof of real pipetting, timing, heating or required-practical completion.",
        "scene": "bioexp:amylase-example"
      }
    ],
    "practice": [
      {
        "id": "bio.p-bioexpamylase1",
        "prompt": "Which is the independent variable in this required investigation?",
        "options": [
          "pH set using buffered solutions",
          "Temperature deliberately changed each run",
          "The measured endpoint time"
        ],
        "answer": 0,
        "why": "pH is the intended cause being compared.",
        "concept": "bio.bioexp-amylase-method"
      },
      {
        "id": "bio.p-bioexpamylase2",
        "prompt": "Why use fresh iodine drops rather than put iodine into the main reaction?",
        "options": [
          "To ensure every sample must stay blue-black",
          "To test removed samples without changing the main reaction conditions",
          "To make pH irrelevant"
        ],
        "answer": 1,
        "why": "Separate sampling avoids reagent carry-over into the reaction.",
        "concept": "bio.bioexp-amylase-endpoint"
      },
      {
        "id": "bio.p-bioexpamylase3",
        "prompt": "Illustrative repeat endpoint times60,90 and120 s. Mean?",
        "type": "number",
        "answer": 90,
        "tolerance": 0.001,
        "unit": "s",
        "why": "(60+90+120)/3=90 s.",
        "concept": "bio.bioexp-amylase-rate"
      },
      {
        "id": "bio.p-bioexpamylase4",
        "prompt": "Comparable endpoint mean60 s. Calculate1/mean time, to4 decimal places.",
        "type": "number",
        "answer": 0.0167,
        "tolerance": 5e-05,
        "unit": "s⁻¹",
        "why": "1/60≈0.0167 s⁻¹.",
        "concept": "bio.bioexp-amylase-rate"
      }
    ],
    "check": [
      {
        "id": "bio.c-bioexpamylase1",
        "prompt": "Which combination makes a pH comparison fair?",
        "options": [
          "Buffered pH values with constant temperature and comparable enzyme/starch amounts",
          "Different temperatures and starch amounts at every pH",
          "Using different endpoints without recording them"
        ],
        "answer": 0,
        "why": "Control alternative causes of rate differences.",
        "concept": "bio.bioexp-amylase-method"
      },
      {
        "id": "bio.c-bioexpamylase2",
        "prompt": "When should the reaction timer start consistently?",
        "options": [
          "Only after the endpoint is reached",
          "When enzyme and starch are mixed",
          "Whenever the first result looks interesting"
        ],
        "answer": 1,
        "why": "A consistent mixing/start point makes times comparable.",
        "concept": "bio.bioexp-amylase-method"
      },
      {
        "id": "bio.c-bioexpamylase3",
        "prompt": "What sampling interval is specified by AQA for the iodine checks?",
        "options": [
          "Every3 minutes only",
          "Only once at the start",
          "Every30 seconds"
        ],
        "answer": 2,
        "why": "Repeated30-second sampling follows starch disappearance.",
        "concept": "bio.bioexp-amylase-endpoint"
      },
      {
        "id": "bio.c-bioexpamylase4",
        "prompt": "Which observation records the taught endpoint?",
        "options": [
          "The first tested sample no longer turns iodine blue-black",
          "The first sample still gives blue-black",
          "Every drop becomes purple like Biuret"
        ],
        "answer": 0,
        "why": "No blue-black means starch is not detected by that iodine sample.",
        "concept": "bio.bioexp-amylase-endpoint"
      },
      {
        "id": "bio.c-bioexpamylase5",
        "prompt": "Fresh illustrative repeat times90,120 and150 s. Mean endpoint time?",
        "type": "number",
        "answer": 120,
        "tolerance": 0.001,
        "unit": "s",
        "why": "(90+120+150)/3=120 s.",
        "concept": "bio.bioexp-amylase-rate"
      },
      {
        "id": "bio.c-bioexpamylase6",
        "prompt": "A comparable endpoint mean is120 s. Calculate1/mean time to4 decimal places.",
        "type": "number",
        "answer": 0.0083,
        "tolerance": 5e-05,
        "unit": "s⁻¹",
        "why": "1/120≈0.0083 s⁻¹.",
        "concept": "bio.bioexp-amylase-rate"
      },
      {
        "id": "bio.c-bioexpamylase7",
        "prompt": "A sample is blue-black at90 s and remains orange/brown at120 s. Which claim is supported?",
        "options": [
          "The exact disappearance time is definitely105 s",
          "Starch disappearance occurred after90 s and by120 s, within the method limits",
          "All starch disappeared before the run started"
        ],
        "answer": 1,
        "why": "The sampling interval brackets the endpoint rather than locating an exact instant.",
        "concept": "bio.bioexp-amylase-resolution"
      },
      {
        "id": "bio.c-bioexpamylase8",
        "prompt": "Why not compare1/time values when different runs use different endpoints?",
        "options": [
          "A reciprocal can never be calculated",
          "All endpoints always need the same amount of reaction",
          "The required amounts of change may differ, so the relative-rate comparison is not matched"
        ],
        "answer": 2,
        "why": "Use comparable starting amounts and endpoints.",
        "concept": "bio.bioexp-amylase-rate"
      },
      {
        "id": "bio.c-bioexpamylase9",
        "prompt": "One repeat time is far from the others. Best response?",
        "options": [
          "Check the method and repeat the condition before deciding how to handle the value",
          "Delete it automatically without checking",
          "Use only the unusual value as the exact answer"
        ],
        "answer": 0,
        "why": "Investigate mixing, sampling, temperature and observation before drawing conclusions.",
        "concept": "bio.bioexp-amylase-resolution"
      }
    ],
    "skills": [
      "AT1",
      "AT2",
      "AT5",
      "AT8",
      "MS1a",
      "MS1c",
      "WS2.2",
      "WS3.4"
    ],
    "prerequisites": [
      "science.biology.organisation.digestive-enzymes",
      "science.biology.organisation.enzyme-conditions"
    ],
    "separate": false,
    "higher": false
  }
];
export const practicalConcepts={
  "bio.bioexp-food-reagents": "Correct food-test reagents and heating",
  "bio.bioexp-food-results": "Verbal positive and negative food observations",
  "bio.bioexp-lipid": "Ethanol-emulsion lipid evidence and safety",
  "bio.bioexp-food-controls": "Qualitative controls, sampling and limits",
  "bio.bioexp-amylase-method": "pH buffers, temperature and fair comparisons",
  "bio.bioexp-amylase-endpoint": "Fresh iodine sampling and starch endpoint",
  "bio.bioexp-amylase-rate": "Mean endpoint time and inverse-time index",
  "bio.bioexp-amylase-resolution": "Sampling intervals, repeats and uncertainty"
};
