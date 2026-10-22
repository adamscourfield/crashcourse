export const circulationLessons=[
  {
    "id": "science.biology.organisation.heart",
    "title": "The heart",
    "short": "Receive, pump and keep direction",
    "refs": [
      "2.2.2"
    ],
    "minutes": 30,
    "widget": "heart-lab",
    "topicId": "science.biology.organisation",
    "big": "The heart is a muscular organ that pumps blood.",
    "learn": [
      {
        "title": "Four chambers coordinate the pump",
        "text": "The heart is a muscular organ that pumps blood. The right atrium receives blood returning from the body and passes it to the right ventricle; the left atrium receives blood from the lungs and passes it to the left ventricle. Atria receive blood, while ventricles pump it out of the heart. Right and left refer to the person’s sides, not automatically the viewer’s sides of a diagram.",
        "scene": "circ:heart"
      },
      {
        "title": "Two ventricles serve different routes",
        "text": "The right ventricle pumps blood to the lungs for gas exchange. The left ventricle pumps blood around the rest of the body. Its muscular wall is thicker because it must generate the higher pressure needed for that systemic route. The dividing wall helps keep the two blood streams separate; the model simplifies the wall and chamber geometry.",
        "scene": "circ:heart"
      },
      {
        "title": "Valves prevent backward flow",
        "text": "Heart valves help keep blood flowing in one direction by preventing backflow. They open or close as pressure differences change, rather than acting as separate pumps. You need their role, not the individual valve names. A correct route must pass from receiving atrium to ventricle and then out through its appropriate vessel.",
        "scene": "circ:heart"
      },
      {
        "title": "Supply the heart muscle itself",
        "text": "Coronary arteries supply the heart muscle with oxygenated blood, including oxygen and dissolved glucose needed for respiration. Blood merely passing through a chamber does not automatically supply all muscle cells adequately. Coronary arteries are part of the named vessel knowledge here; detailed coronary disease and treatments follow in another batch.",
        "scene": "circ:heart"
      },
      {
        "title": "Set the rhythm",
        "text": "A group of cells in the right atrium acts as the natural pacemaker and controls the resting heart rate. Artificial pacemakers are electrical devices used to correct irregularities in heart rate. They are not replacement hearts, valves or coronary arteries. This is a function model, not a clinical test or advice about a particular person’s rhythm.",
        "scene": "circ:heart"
      }
    ],
    "practice": [
      {
        "id": "bio.p-circheart1",
        "prompt": "Which chamber pumps blood towards the lungs?",
        "options": [
          "Right ventricle",
          "Left ventricle",
          "Left atrium"
        ],
        "answer": 0,
        "why": "The right ventricle supplies the pulmonary route.",
        "concept": "bio.circ-heart-route"
      },
      {
        "id": "bio.p-circheart2",
        "prompt": "Why is the left-ventricular muscle wall thicker?",
        "options": [
          "It contains no blood",
          "It generates pressure for the route around the body",
          "It makes every blood cell"
        ],
        "answer": 1,
        "why": "The systemic route requires higher pumping pressure.",
        "concept": "bio.circ-heart-structure"
      },
      {
        "id": "bio.p-circheart3",
        "prompt": "Heart valves mainly…",
        "options": [
          "Create oxygen",
          "Pump blood independently",
          "Prevent backward flow"
        ],
        "answer": 2,
        "why": "Their one-way function depends on pressure differences.",
        "concept": "bio.circ-heart-structure"
      },
      {
        "id": "bio.p-circheart4",
        "prompt": "Where is the natural resting-rate pacemaker located?",
        "options": [
          "Right atrium",
          "Aorta only",
          "Left lung"
        ],
        "answer": 0,
        "why": "A specialised group of cells in the right atrium controls resting rate.",
        "concept": "bio.circ-pacemaker"
      }
    ],
    "check": [
      {
        "id": "bio.c-circheart1",
        "prompt": "Which pairing is correct?",
        "options": [
          "Right ventricle→lungs;left ventricle→rest of body",
          "Right atrium→whole body as the main pump;left ventricle→lungs only",
          "Both ventricles→lungs only"
        ],
        "answer": 0,
        "why": "The ventricles drive different circuits.",
        "concept": "bio.circ-heart-route"
      },
      {
        "id": "bio.c-circheart2",
        "prompt": "Blood returning from the lungs first enters which chamber?",
        "options": [
          "Right ventricle",
          "Left atrium",
          "Right atrium"
        ],
        "answer": 1,
        "why": "The left atrium receives the pulmonary return before the left ventricle.",
        "concept": "bio.circ-heart-route"
      },
      {
        "id": "bio.c-circheart3",
        "prompt": "Blood returning from the body enters the…",
        "options": [
          "Left ventricle directly",
          "Left atrium only",
          "Right atrium"
        ],
        "answer": 2,
        "why": "The body-returning blood feeds the right side of the heart.",
        "concept": "bio.circ-heart-route"
      },
      {
        "id": "bio.c-circheart4",
        "prompt": "Which structure–function link explains the thicker left-ventricular wall?",
        "options": [
          "More muscle generates the higher pressure for body circulation",
          "A thicker wall makes oxygen in the chamber",
          "Only thick-walled chambers can receive blood"
        ],
        "answer": 0,
        "why": "Relate muscle to pumping demand, not blood colour.",
        "concept": "bio.circ-heart-structure"
      },
      {
        "id": "bio.c-circheart5",
        "prompt": "A valve fails to prevent backflow. Which normal function is lost?",
        "options": [
          "Producing antibodies",
          "Maintaining one-way flow through that part of the heart",
          "Digesting blood sugar"
        ],
        "answer": 1,
        "why": "Valve action prevents blood moving backward as pressures change.",
        "concept": "bio.circ-heart-structure"
      },
      {
        "id": "bio.c-circheart6",
        "prompt": "Why does heart muscle need coronary arteries?",
        "options": [
          "To replace the atria",
          "To remove every valve",
          "To supply its cells with oxygenated blood for respiration"
        ],
        "answer": 2,
        "why": "The pumping muscle has its own need for oxygen and substrates.",
        "concept": "bio.circ-coronary"
      },
      {
        "id": "bio.c-circheart7",
        "prompt": "The group controlling the natural resting heart rate is in the…",
        "options": [
          "Right atrium",
          "Left ventricle wall only",
          "Pulmonary vein"
        ],
        "answer": 0,
        "why": "The specified pacemaker location is the right atrium.",
        "concept": "bio.circ-pacemaker"
      },
      {
        "id": "bio.c-circheart8",
        "prompt": "An artificial pacemaker is used to…",
        "options": [
          "Replace every blood vessel",
          "Correct irregularities in heart rate using an electrical device",
          "Absorb oxygen from the air"
        ],
        "answer": 1,
        "why": "It helps control rhythm rather than replacing the entire pump.",
        "concept": "bio.circ-pacemaker"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.organisation.levels"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.double-circulation",
    "title": "Double circulation",
    "short": "Two circuits, one complete route",
    "refs": [
      "2.2.2"
    ],
    "minutes": 30,
    "widget": "circulation-route",
    "topicId": "science.biology.organisation",
    "big": "The circulation is double: blood passes through the heart twice in one complete journey through the lung and body circuits.",
    "learn": [
      {
        "title": "Follow the lung circuit",
        "text": "The circulation is double: blood passes through the heart twice in one complete journey through the lung and body circuits. From the right ventricle it travels along the pulmonary artery to the lungs. Gas exchange adds oxygen to the blood and removes carbon dioxide. The pulmonary vein returns the blood to the left atrium.",
        "scene": "circ:route"
      },
      {
        "title": "Follow the body circuit",
        "text": "Blood passes to the left ventricle, then through the aorta towards the body. At body tissues it supplies oxygen and useful dissolved substances and collects waste products. Blood returns through the vena cava to the right atrium and then right ventricle. This completes the route rather than sending body blood directly to the lungs without the heart.",
        "scene": "circ:route"
      },
      {
        "title": "Define vessels by direction",
        "text": "Arteries carry blood away from the heart; veins return it towards the heart. These definitions do not depend on oxygen content. The pulmonary artery carries relatively deoxygenated blood towards the lungs, while the pulmonary vein carries oxygenated blood towards the heart. Deoxygenated blood is not literally oxygen-free, and human blood is not blue.",
        "scene": "circ:route"
      },
      {
        "title": "Pump again between the circuits",
        "text": "Returning blood to the heart between lung and body routes allows it to be pumped again, supporting pressure for the next circuit. The right and left sides direct the two routes and normally keep their streams separate inside the heart. A schematic may use colours and arrows for clarity, but lengths, pressures and travel times are not drawn to scale.",
        "scene": "circ:route"
      },
      {
        "title": "Calculate an average blood-flow rate",
        "text": "Mean volume flow rate = blood volume ÷ time. Original illustrative data:450 cm³ passing in30 s gives15 cm³/s. Use matching time units;1 min=60 s and1 cm³=1 mL. A stated per-beat volume multiplied by beats per minute gives a per-minute volume only under those supplied assumptions. Averages are not the instantaneous pulsating flow or a clinical reading.",
        "scene": "circ:route"
      }
    ],
    "practice": [
      {
        "id": "bio.p-circroute1",
        "prompt": "Which vessel carries blood from the right ventricle to the lungs?",
        "options": [
          "Pulmonary artery",
          "Pulmonary vein",
          "Aorta"
        ],
        "answer": 0,
        "why": "The pulmonary artery leaves the right ventricle.",
        "concept": "bio.circ-route"
      },
      {
        "id": "bio.p-circroute2",
        "prompt": "Which vessel brings blood from the lungs back to the heart?",
        "options": [
          "Vena cava",
          "Pulmonary vein",
          "Coronary artery only"
        ],
        "answer": 1,
        "why": "The pulmonary vein enters the left atrium.",
        "concept": "bio.circ-route"
      },
      {
        "id": "bio.p-circroute3",
        "prompt": "Illustrative volume600 cm³ passes in40 s. Mean flow rate?",
        "type": "number",
        "answer": 15,
        "tolerance": 0.001,
        "unit": "cm³/s",
        "why": "600÷40=15 cm³/s.",
        "concept": "bio.circ-flow"
      },
      {
        "id": "bio.p-circroute4",
        "prompt": "Supplied model:50 cm³ per beat at80 beats/min. Volume per minute?",
        "type": "number",
        "answer": 4000,
        "tolerance": 0.001,
        "unit": "cm³/min",
        "why": "50×80=4000 cm³/min for those inputs.",
        "concept": "bio.circ-flow"
      }
    ],
    "check": [
      {
        "id": "bio.c-circroute1",
        "prompt": "Which route correctly starts at the right ventricle?",
        "options": [
          "Pulmonary artery→lungs→pulmonary vein→left atrium",
          "Aorta→body→pulmonary vein→left atrium",
          "Vena cava→lungs→aorta→right atrium"
        ],
        "answer": 0,
        "why": "The named vessels must match the direction and destination.",
        "concept": "bio.circ-route"
      },
      {
        "id": "bio.c-circroute2",
        "prompt": "Which sequence fits the body circuit?",
        "options": [
          "Left ventricle→pulmonary vein→lungs→right atrium",
          "Left ventricle→aorta→body→vena cava→right atrium",
          "Right ventricle→aorta→lungs→left ventricle"
        ],
        "answer": 1,
        "why": "The aorta supplies the body and vena cava returns blood.",
        "concept": "bio.circ-route"
      },
      {
        "id": "bio.c-circroute3",
        "prompt": "Why is the pulmonary artery still an artery although its blood has less oxygen?",
        "options": [
          "Arteries must contain no oxygen",
          "Its name means it enters the left atrium",
          "It carries blood away from the heart"
        ],
        "answer": 2,
        "why": "Direction defines an artery; oxygen content is not the definition.",
        "concept": "bio.circ-direction"
      },
      {
        "id": "bio.c-circroute4",
        "prompt": "Why is the pulmonary vein a vein?",
        "options": [
          "It returns blood towards the heart",
          "It always contains oxygen-free blood",
          "It has no lumen"
        ],
        "answer": 0,
        "why": "It returns oxygenated blood from lungs to heart.",
        "concept": "bio.circ-direction"
      },
      {
        "id": "bio.c-circroute5",
        "prompt": "In one full lung-and-body circulation, blood passes through the heart…",
        "options": [
          "Only once",
          "Twice",
          "Never after leaving the lungs"
        ],
        "answer": 1,
        "why": "Double circulation has the heart between both circuits.",
        "concept": "bio.circ-route"
      },
      {
        "id": "bio.c-circroute6",
        "prompt": "Fresh illustrative data:750 cm³ passes in30 s. Mean flow rate?",
        "type": "number",
        "answer": 25,
        "tolerance": 0.001,
        "unit": "cm³/s",
        "why": "750÷30=25 cm³/s.",
        "concept": "bio.circ-flow"
      },
      {
        "id": "bio.c-circroute7",
        "prompt": "Fresh illustrative data:900 mL passes in3 min. Mean flow in mL/min?",
        "type": "number",
        "answer": 300,
        "tolerance": 0.001,
        "unit": "mL/min",
        "why": "900÷3=300 mL/min.",
        "concept": "bio.circ-flow"
      },
      {
        "id": "bio.c-circroute8",
        "prompt": "A diagram colours some blood blue. Best interpretation?",
        "options": [
          "Human deoxygenated blood is literally blue",
          "No oxygen at all exists in that blood",
          "The colour is a symbolic code; real blood is not blue"
        ],
        "answer": 2,
        "why": "Diagram colours communicate relative oxygenation rather than literal appearance.",
        "concept": "bio.circ-model"
      }
    ],
    "skills": [
      "MS1a",
      "MS1c",
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.organisation.heart",
      "science.biology.cells.exchange-surfaces"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.blood-vessels",
    "title": "Blood vessel adaptations",
    "short": "Pressure, return and exchange",
    "refs": [
      "2.2.2"
    ],
    "minutes": 30,
    "widget": "vessel-lab",
    "topicId": "science.biology.organisation",
    "big": "Arteries carry blood away from the heart, usually at higher pressure than veins.",
    "learn": [
      {
        "title": "Arteries withstand pressure",
        "text": "Arteries carry blood away from the heart, usually at higher pressure than veins. Thick walls with muscle and elastic tissue help withstand and respond to this pressure. The lumen is the space carrying blood; compared with a similar-sized vein, an artery typically has a smaller lumen and thicker wall. Do not identify every artery only by oxygen content.",
        "scene": "circ:vessels:artery"
      },
      {
        "title": "Veins return blood at lower pressure",
        "text": "Veins carry blood towards the heart at lower pressure, with thinner walls and a larger lumen than comparable arteries. Many veins have valves that prevent backflow, supporting return when pressure is low. The model includes a representative valve; it does not assert every named vein has an identical valve arrangement.",
        "scene": "circ:vessels:vein"
      },
      {
        "title": "Capillaries make exchange possible",
        "text": "Capillaries form networks between arterial and venous routes. Their walls are one cell thick, giving a short diffusion path for exchange between blood and tissues. A narrow lumen keeps blood close to the wall; many capillaries together provide a large total exchange surface. Not all blood contents can simply leave through the wall: intact blood cells normally remain in the vessels.",
        "scene": "circ:vessels:capillary"
      },
      {
        "title": "Match the adaptation to the task",
        "text": "A thick pressure-resistant wall suits transport away from the pump; a low-pressure return benefits from lumen size and one-way support; a thin exchange barrier suits capillaries. A cross-section diagram simplifies real sizes and tissues. Wall thickness and flow direction are stronger evidence than a decorative red or blue colour. Exchanges and pressure vary around the circulation; these are GCSE comparison models.",
        "scene": "circ:vessels:artery"
      }
    ],
    "practice": [
      {
        "id": "bio.p-circvessel1",
        "prompt": "Which vessel type is adapted to withstand relatively high pressure leaving the heart?",
        "options": [
          "Artery",
          "Vein only",
          "Capillary with a thick multilayer wall"
        ],
        "answer": 0,
        "why": "Arteries have thick muscular/elastic walls.",
        "concept": "bio.circ-vessel-structure"
      },
      {
        "id": "bio.p-circvessel2",
        "prompt": "Why are valves useful in many veins?",
        "options": [
          "To produce oxygen",
          "To prevent backflow at lower pressure",
          "To digest nutrients"
        ],
        "answer": 1,
        "why": "One-way support assists return towards the heart.",
        "concept": "bio.circ-veins"
      },
      {
        "id": "bio.p-circvessel3",
        "prompt": "A capillary wall is one cell thick mainly to…",
        "options": [
          "Create a long diffusion path",
          "Stop every exchange",
          "Provide a short diffusion path"
        ],
        "answer": 2,
        "why": "Thin barriers support exchange with tissues.",
        "concept": "bio.circ-capillaries"
      },
      {
        "id": "bio.p-circvessel4",
        "prompt": "Which feature names the blood-containing space in a vessel?",
        "options": [
          "Lumen",
          "Active site",
          "Alveolus"
        ],
        "answer": 0,
        "why": "Lumen refers to the internal channel.",
        "concept": "bio.circ-vessel-structure"
      }
    ],
    "check": [
      {
        "id": "bio.c-circvessel1",
        "prompt": "A vessel leaves the heart with a thick muscular/elastic wall. Best identification?",
        "options": [
          "Artery",
          "Vein based only on blue ink",
          "Alveolus"
        ],
        "answer": 0,
        "why": "Direction and wall structure fit arterial pressure demands.",
        "concept": "bio.circ-vessel-structure"
      },
      {
        "id": "bio.c-circvessel2",
        "prompt": "Compared with a similar-sized artery, a vein typically has…",
        "options": [
          "A thicker wall and narrower lumen",
          "A thinner wall and larger lumen",
          "No internal space"
        ],
        "answer": 1,
        "why": "Vein structure suits lower-pressure return.",
        "concept": "bio.circ-veins"
      },
      {
        "id": "bio.c-circvessel3",
        "prompt": "Which adaptation directly reduces the blood-to-tissue diffusion distance?",
        "options": [
          "A thick muscle wall",
          "A complete absence of vessels",
          "A one-cell-thick capillary wall"
        ],
        "answer": 2,
        "why": "The exchange barrier is short.",
        "concept": "bio.circ-capillaries"
      },
      {
        "id": "bio.c-circvessel4",
        "prompt": "Why do many small capillaries form useful exchange networks?",
        "options": [
          "They provide a large total surface close to tissue cells",
          "They make all blood stop permanently",
          "They replace all tissue membranes with solid bone"
        ],
        "answer": 0,
        "why": "A network increases available exchange area.",
        "concept": "bio.circ-capillaries"
      },
      {
        "id": "bio.c-circvessel5",
        "prompt": "A vein valve prevents blood moving…",
        "options": [
          "Towards the heart under all conditions",
          "Backward when pressure would otherwise reverse flow",
          "Through the body’s arteries only"
        ],
        "answer": 1,
        "why": "Its purpose is to support one-way return.",
        "concept": "bio.circ-veins"
      },
      {
        "id": "bio.c-circvessel6",
        "prompt": "Why is elastic tissue useful in artery walls?",
        "options": [
          "It is the main site of antibody production",
          "It stores bile",
          "It helps accommodate pressure changes and recoil"
        ],
        "answer": 2,
        "why": "Elastic response supports pulsating arterial flow.",
        "concept": "bio.circ-vessel-structure"
      },
      {
        "id": "bio.c-circvessel7",
        "prompt": "Which statement avoids confusing structure with oxygen colour?",
        "options": [
          "An artery is defined by flow away from the heart, not by red colouring",
          "Every blue drawing must be a vein",
          "Capillaries only occur in lungs"
        ],
        "answer": 0,
        "why": "Use direction, function and structure rather than a colour shortcut.",
        "concept": "bio.circ-vessel-structure"
      },
      {
        "id": "bio.c-circvessel8",
        "prompt": "A proposed exchange vessel has a very thick wall. Best criticism?",
        "options": [
          "Thicker walls always shorten diffusion distance",
          "A thick barrier increases the path and is poorly suited to rapid diffusion",
          "Every vessel must have the same wall thickness"
        ],
        "answer": 1,
        "why": "Capillaries trade pressure-wall thickness for an efficient exchange barrier.",
        "concept": "bio.circ-capillaries"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.organisation.double-circulation"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.blood",
    "title": "Blood components",
    "short": "Transport, defence and clotting",
    "refs": [
      "2.2.3"
    ],
    "minutes": 30,
    "widget": "blood-lab",
    "topicId": "science.biology.organisation",
    "big": "Blood consists of liquid plasma with red blood cells, white blood cells and platelets suspended in it.",
    "learn": [
      {
        "title": "Blood is a transport tissue",
        "text": "Blood consists of liquid plasma with red blood cells, white blood cells and platelets suspended in it. Plasma carries the cellular components and dissolved substances, including nutrients, carbon dioxide and urea. It also distributes thermal energy around the body. Blood is not only red cells, and plasma is not the same as the oxygen-binding protein inside red cells.",
        "scene": "circ:blood:plasma"
      },
      {
        "title": "Red cells carry oxygen",
        "text": "Red blood cells contain haemoglobin, which binds oxygen for transport. Their biconcave shape provides a large surface area relative to volume and a short path through the thin centre. Mature human red cells lack a nucleus, leaving more space for haemoglobin, and are flexible enough to pass through narrow capillaries. The model shows these features symbolically, not at a calibrated size.",
        "scene": "circ:blood:red"
      },
      {
        "title": "White cells defend against pathogens",
        "text": "White blood cells have nuclei and help defend the body against pathogens. Different types have different roles: some change shape to engulf and digest pathogens, while others produce antibodies or antitoxins. A lobed nucleus is one illustrative appearance, not a claim that every white cell has the same shape. Detailed immune mechanisms follow in another topic.",
        "scene": "circ:blood:white"
      },
      {
        "title": "Platelets support clotting",
        "text": "Platelets are small cell fragments that help blood clot at a damaged vessel. Clotting reduces blood loss and helps stop microorganisms entering through a wound. Platelets are not complete red or white blood cells and do not perform the main oxygen-transport role. The diagram enlarges them so they can be seen; its size ratios are not measurements.",
        "scene": "circ:blood:platelet"
      },
      {
        "title": "Evaluate blood-product benefits and risks",
        "text": "Blood products can replace components whose functions are needed, such as red-cell oxygen transport or platelets involved in clotting. Benefits must be considered alongside risks such as infection transfer or a reaction. Screening, testing and compatibility checks reduce risks but do not prove zero risk. This is general GCSE evidence evaluation, not a recommendation about a patient or instructions for transfusion.",
        "scene": "circ:blood:plasma"
      },
      {
        "title": "Read a model without claiming a photograph",
        "text": "Use visible features to distinguish a red cell with a pale centre and no nucleus, a nucleated white cell and small platelet fragments in a supplied schematic. Real stained blood photographs vary in appearance, so schematic recognition alone does not demonstrate recognition in micrographs. Actual microscope observation and your own labelled drawing remain separate practical evidence. Colours, cell numbers and scale in the interactive view are symbolic.",
        "scene": "circ:blood:red"
      }
    ],
    "practice": [
      {
        "id": "bio.p-circblood1",
        "prompt": "Which component carries many dissolved substances and suspends blood cells?",
        "options": [
          "Plasma",
          "Haemoglobin alone",
          "A heart valve"
        ],
        "answer": 0,
        "why": "Plasma is the liquid transport medium.",
        "concept": "bio.circ-plasma"
      },
      {
        "id": "bio.p-circblood2",
        "prompt": "Why does a mature human red cell’s lack of a nucleus help oxygen transport?",
        "options": [
          "It makes a cellulose wall",
          "It leaves more space for haemoglobin",
          "It turns the cell into plasma"
        ],
        "answer": 1,
        "why": "Haemoglobin binds the oxygen carried by red cells.",
        "concept": "bio.circ-red-cells"
      },
      {
        "id": "bio.p-circblood3",
        "prompt": "Which function belongs to white blood cells?",
        "options": [
          "Main transport of bile",
          "Preventing every heartbeat",
          "Defence against pathogens"
        ],
        "answer": 2,
        "why": "Different white-cell types contribute to defence in different ways.",
        "concept": "bio.circ-white-cells"
      },
      {
        "id": "bio.p-circblood4",
        "prompt": "Platelets mainly help with…",
        "options": [
          "Blood clotting",
          "Producing all antibodies",
          "Carrying most oxygen"
        ],
        "answer": 0,
        "why": "Their clotting role reduces blood loss after vessel damage.",
        "concept": "bio.circ-platelets"
      }
    ],
    "check": [
      {
        "id": "bio.c-circblood1",
        "prompt": "Which component is represented by this schematic with a pale centre and no nucleus?",
        "options": [
          "Red blood cell",
          "White blood cell",
          "Platelet fragment"
        ],
        "answer": 0,
        "why": "The biconcave, non-nucleated representation fits a mature human red cell.",
        "concept": "bio.circ-blood-recognition",
        "figure": {
          "kind": "bio-blood",
          "component": "red",
          "labelled": false
        }
      },
      {
        "id": "bio.c-circblood2",
        "prompt": "Which component is represented by the supplied nucleated-cell schematic?",
        "options": [
          "Platelet fragment",
          "White blood cell",
          "Plasma molecule"
        ],
        "answer": 1,
        "why": "The nucleus and cell outline fit the illustrated white cell, unlike a mature red cell or platelet.",
        "concept": "bio.circ-blood-recognition",
        "figure": {
          "kind": "bio-blood",
          "component": "white",
          "labelled": false
        }
      },
      {
        "id": "bio.c-circblood3",
        "prompt": "The small fragments shown represent…",
        "options": [
          "Whole multicellular organs",
          "Red cells containing nuclei",
          "Platelets"
        ],
        "answer": 2,
        "why": "Platelets are cell fragments involved in clotting.",
        "concept": "bio.circ-blood-recognition",
        "figure": {
          "kind": "bio-blood",
          "component": "platelet",
          "labelled": false
        }
      },
      {
        "id": "bio.c-circblood4",
        "prompt": "Which list contains substances transported dissolved in plasma?",
        "options": [
          "Nutrients, carbon dioxide and urea",
          "Only whole chromosomes and cell walls",
          "Only insoluble lumps of food"
        ],
        "answer": 0,
        "why": "Plasma carries dissolved materials between organs and cells.",
        "concept": "bio.circ-plasma"
      },
      {
        "id": "bio.c-circblood5",
        "prompt": "How does a red cell’s biconcave form support its function?",
        "options": [
          "It gives it a thick impermeable wall",
          "It provides a large relative surface and short diffusion path",
          "It converts oxygen into antibodies"
        ],
        "answer": 1,
        "why": "Shape helps oxygen exchange while haemoglobin provides binding.",
        "concept": "bio.circ-red-cells"
      },
      {
        "id": "bio.c-circblood6",
        "prompt": "Which pairing is consistent with white-cell defence?",
        "options": [
          "All white cells carry most oxygen",
          "Every white cell is an empty dead tube",
          "Some engulf pathogens; others produce antibodies or antitoxins"
        ],
        "answer": 2,
        "why": "White-cell functions vary rather than all performing one identical task.",
        "concept": "bio.circ-white-cells"
      },
      {
        "id": "bio.c-circblood7",
        "prompt": "Why is platelet-assisted clotting useful after vessel damage?",
        "options": [
          "It reduces blood loss and entry of microorganisms",
          "It makes all dissolved nutrients",
          "It ensures blood never moves anywhere"
        ],
        "answer": 0,
        "why": "A local clot helps seal a damaged site.",
        "concept": "bio.circ-platelets"
      },
      {
        "id": "bio.c-circblood8",
        "prompt": "Which distinction is correct?",
        "options": [
          "Haemoglobin is the entire liquid plasma",
          "Red-cell haemoglobin binds oxygen; plasma transports many dissolved substances",
          "Platelets carry all oxygen instead of red cells"
        ],
        "answer": 1,
        "why": "Different components contribute different transport and protection functions.",
        "concept": "bio.circ-red-cells"
      },
      {
        "id": "bio.c-circblood9",
        "prompt": "A supplied blood-product evaluation says screening removes all possible risk. Best correction?",
        "options": [
          "No benefits can ever justify using blood products",
          "Only appearance is relevant to compatibility",
          "Screening and checks reduce risks; benefits and remaining risks still need evaluation"
        ],
        "answer": 2,
        "why": "Risk reduction does not justify an absolute zero-risk claim.",
        "concept": "bio.circ-blood-risk"
      }
    ],
    "skills": [
      "AT7",
      "WS1.5",
      "WS3.5"
    ],
    "prerequisites": [
      "science.biology.organisation.levels",
      "science.biology.organisation.double-circulation"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.organisation.lungs",
    "title": "Lungs & gas exchange",
    "short": "Airways, thin barriers and gradients",
    "refs": [
      "2.2.2"
    ],
    "minutes": 30,
    "widget": "lung-lab",
    "topicId": "science.biology.organisation",
    "big": "Air passes along the trachea into bronchi leading into the lungs; branching airways deliver it to many alveoli.",
    "learn": [
      {
        "title": "Connect the airways to exchange surfaces",
        "text": "Air passes along the trachea into bronchi leading into the lungs; branching airways deliver it to many alveoli. An alveolus is a small air sac where gas exchange occurs, not another chamber of the heart. This lesson’s named lung structures are the trachea, bronchi, alveoli and the surrounding capillary network; detailed breathing mechanics are not required here.",
        "scene": "circ:airway"
      },
      {
        "title": "Provide area and a short path",
        "text": "Many alveoli provide a large total gas-exchange surface. Their thin walls and the thin walls of nearby capillaries give a short diffusion path between air and blood. Oxygen crosses the exchange barrier rather than travelling through a hollow airway directly into a heart chamber. The diagram exaggerates size and spacing so both tissues can be seen.",
        "scene": "circ:lungs"
      },
      {
        "title": "Follow oxygen and carbon dioxide gradients",
        "text": "In the supplied lung context, oxygen concentration is higher in alveolar air than in incoming blood, so oxygen diffuses into the blood. Carbon dioxide concentration is higher in incoming blood than in alveolar air, so it diffuses into the air for removal. Each gas follows its own gradient; neither gas needs to be actively pumped across this barrier in the GCSE explanation.",
        "scene": "circ:lungs"
      },
      {
        "title": "Maintain gradients using blood flow",
        "text": "A capillary network carries blood close to the alveolar surface. Flow brings relatively oxygen-poor, carbon-dioxide-rich blood and carries oxygenated blood away, maintaining differences for continued exchange. Blood flow and diffusion are different processes: circulation transports blood in bulk, while molecules diffuse across the thin exchange barrier.",
        "scene": "circ:lungs"
      },
      {
        "title": "Refresh the air by ventilation",
        "text": "Ventilation brings fresh air into and removes air from the lungs, helping maintain the gas concentration differences. It does not mean the lung pumps the blood or that the heart makes oxygen. The model isolates surface area, barrier thickness and air/blood refresh to explain their roles; its flow speeds and particle counts are illustrative rather than a lung-function measurement.",
        "scene": "circ:lungs"
      }
    ],
    "practice": [
      {
        "id": "bio.p-circlung1",
        "prompt": "Which structure is a lung gas-exchange air sac?",
        "options": [
          "Alveolus",
          "Ventricle",
          "Vena cava"
        ],
        "answer": 0,
        "why": "Alveoli provide the air-facing exchange surface.",
        "concept": "bio.circ-lung-route"
      },
      {
        "id": "bio.p-circlung2",
        "prompt": "Why are capillaries close to alveoli useful?",
        "options": [
          "They stop every gas molecule moving",
          "They provide blood supply across a short exchange path",
          "They replace the bronchi with bone"
        ],
        "answer": 1,
        "why": "Close thin walls support diffusion between air and blood.",
        "concept": "bio.circ-lung-adapt"
      },
      {
        "id": "bio.p-circlung3",
        "prompt": "In the stated lung gradient, oxygen moves overall…",
        "options": [
          "From blood to air regardless of concentration",
          "Only into plasma by active transport",
          "From alveolar air into blood"
        ],
        "answer": 2,
        "why": "The supplied oxygen gradient points into blood.",
        "concept": "bio.circ-lung-gradient"
      },
      {
        "id": "bio.p-circlung4",
        "prompt": "What does ventilation contribute?",
        "options": [
          "Refreshes alveolar air and helps maintain gradients",
          "Directly pumps blood around the body",
          "Creates oxygen atoms"
        ],
        "answer": 0,
        "why": "Air refresh differs from circulation and membrane diffusion.",
        "concept": "bio.circ-lung-adapt"
      }
    ],
    "check": [
      {
        "id": "bio.c-circlung1",
        "prompt": "Which sequence correctly begins the named airway route?",
        "options": [
          "Trachea→bronchi→lung airways and alveoli",
          "Aorta→vena cava→trachea",
          "Alveoli→left ventricle→bronchi"
        ],
        "answer": 0,
        "why": "The trachea branches into bronchi leading into lungs.",
        "concept": "bio.circ-lung-route"
      },
      {
        "id": "bio.c-circlung2",
        "prompt": "Why do many alveoli improve gas exchange?",
        "options": [
          "They guarantee no blood supply is needed",
          "They provide a large total surface area",
          "They make the diffusion barrier thicker"
        ],
        "answer": 1,
        "why": "Large available area allows more exchange.",
        "concept": "bio.circ-lung-adapt"
      },
      {
        "id": "bio.c-circlung3",
        "prompt": "Which feature shortens the air-to-blood diffusion path?",
        "options": [
          "A thick muscle wall around every air space",
          "Only a large heart valve",
          "Thin alveolar and capillary walls close together"
        ],
        "answer": 2,
        "why": "Both sides of the exchange barrier are thin.",
        "concept": "bio.circ-lung-adapt"
      },
      {
        "id": "bio.c-circlung4",
        "prompt": "Why surround alveoli with a capillary network?",
        "options": [
          "It brings blood close to the exchange surface and transports gases away/towards it",
          "It gives alveoli their own digestive enzymes",
          "It makes all air pass through blood vessels as whole bubbles"
        ],
        "answer": 0,
        "why": "Blood flow supports exchange without air being pumped into vessels.",
        "concept": "bio.circ-lung-adapt"
      },
      {
        "id": "bio.c-circlung5",
        "prompt": "Oxygen concentration is greater in alveolar air than incoming blood. Net diffusion is…",
        "options": [
          "Blood→alveolar air",
          "Alveolar air→blood",
          "Always equal both ways despite the stated gradient"
        ],
        "answer": 1,
        "why": "Use the given concentration difference.",
        "concept": "bio.circ-lung-gradient"
      },
      {
        "id": "bio.c-circlung6",
        "prompt": "Carbon dioxide is greater in incoming blood than alveolar air. Net diffusion is…",
        "options": [
          "Air→blood because all gases move inward",
          "Only through a solid valve",
          "Blood→alveolar air"
        ],
        "answer": 2,
        "why": "Carbon dioxide follows its own higher-to-lower gradient.",
        "concept": "bio.circ-lung-gradient"
      },
      {
        "id": "bio.c-circlung7",
        "prompt": "Which distinction is correct?",
        "options": [
          "Ventilation refreshes air; diffusion moves molecules across the gas-exchange barrier",
          "Ventilation means the heart pumps blood",
          "Diffusion means whole capillaries travel into airways"
        ],
        "answer": 0,
        "why": "Bulk air movement and molecular exchange serve different roles.",
        "concept": "bio.circ-lung-adapt"
      },
      {
        "id": "bio.c-circlung8",
        "prompt": "If air and blood were never refreshed in a closed exchange model, what would happen to a maintained gradient?",
        "options": [
          "It must increase forever",
          "It would tend to become smaller as exchange proceeds",
          "It would create new oxygen"
        ],
        "answer": 1,
        "why": "Supply/removal help prevent the gradient from disappearing.",
        "concept": "bio.circ-lung-gradient"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.exchange-surfaces",
      "science.biology.organisation.double-circulation"
    ],
    "separate": false,
    "higher": false
  }
];
export const circulationConcepts={
  "bio.circ-heart-route": "Chambers receiving and pumping blood",
  "bio.circ-heart-structure": "Muscular walls and one-way heart valves",
  "bio.circ-coronary": "Coronary supply to heart muscle",
  "bio.circ-pacemaker": "Natural and artificial rhythm control",
  "bio.circ-route": "Named vessels in double circulation",
  "bio.circ-direction": "Vessel direction versus oxygen content",
  "bio.circ-flow": "Mean blood-volume flow calculations",
  "bio.circ-model": "Limits of circulation diagrams",
  "bio.circ-vessel-structure": "Artery wall and lumen adaptations",
  "bio.circ-veins": "Lower-pressure return and vein valves",
  "bio.circ-capillaries": "Thin-walled capillary networks for exchange",
  "bio.circ-plasma": "Dissolved transport in plasma",
  "bio.circ-red-cells": "Red-cell adaptations and haemoglobin",
  "bio.circ-white-cells": "White-cell defence functions",
  "bio.circ-platelets": "Clotting roles of platelet fragments",
  "bio.circ-blood-recognition": "Schematic blood-component recognition",
  "bio.circ-blood-risk": "Blood-product benefits and risk controls",
  "bio.circ-lung-route": "Trachea, bronchi and alveoli",
  "bio.circ-lung-adapt": "Area, short path, blood and ventilation",
  "bio.circ-lung-gradient": "Separate oxygen and carbon dioxide gradients"
};
