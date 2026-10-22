export const diffusionLessons=[
  {
    "id": "science.biology.cells.diffusion",
    "title": "Diffusion & its rate",
    "short": "Random movement, net transfer",
    "refs": [
      "1.3.1"
    ],
    "minutes": 30,
    "widget": "diffusion-lab",
    "topicId": "science.biology.cell-biology",
    "big": "Diffusion gives a net movement of particles down a concentration gradient. The particles keep moving even when concentrations are equal.",
    "learn": [
      {
        "title": "Look for net movement",
        "text": "Diffusion is the spreading out of particles in a gas or in solution, giving a net movement from higher to lower concentration. Particles move randomly in both directions; more move from the higher-concentration side overall. A suitable substance can diffuse across a cell membrane if it can pass through it. Net direction describes the overall balance, not a rule that every particle moves only one way.",
        "scene": "diff:gradient"
      },
      {
        "title": "Use biological examples",
        "text": "Oxygen and carbon dioxide diffuse during gas exchange. Where oxygen concentration is higher outside a respiring cell than inside, oxygen moves into it overall. Where carbon dioxide is higher inside, it moves out overall. The waste product urea can diffuse from cells into blood plasma for transport to the kidneys and excretion. Direction depends on the actual gradient; the same substance is not permanently assigned one direction.",
        "scene": "diff:gradient"
      },
      {
        "title": "Make the gradient steeper",
        "text": "A larger concentration difference usually produces a faster net diffusion rate when other conditions are comparable. At equal concentrations, particles still move, but there is no net movement in either direction across a freely permeable boundary. In a closed model, the gradient becomes smaller as particles spread. Maintaining supply and removal can maintain a gradient in an organism.",
        "scene": "diff:gradient"
      },
      {
        "title": "Change temperature or membrane area",
        "text": "Increasing temperature increases particle movement and usually speeds diffusion under comparable conditions. Increasing the available membrane surface area also allows more particles to cross per unit time. Compare one factor at a time and keep others constant. The interactive model illustrates these tendencies; its particle counts and motion do not give a measured biological rate or a universal exact temperature multiplier.",
        "scene": "diff:temperature"
      },
      {
        "title": "Distinguish area from cell size",
        "text": "A larger exposed membrane area offers more places for particles to cross. That does not mean a larger organism always exchanges enough for its needs: requirements also depend on volume, and diffusion paths may be longer. The next lesson compares surface area with volume. This particle model is not a laboratory record or evidence of hands-on practical competence.",
        "scene": "diff:area"
      }
    ],
    "practice": [
      {
        "id": "bio.p-diff1",
        "prompt": "A permeable boundary separates oxygen concentrations8 and2 in the same units. Net oxygen movement is…",
        "options": [
          "From8 towards2",
          "From2 towards8 by diffusion",
          "Impossible unless all particles move identically"
        ],
        "answer": 0,
        "why": "Random motion produces net transfer down the gradient.",
        "concept": "bio.diff-direction"
      },
      {
        "id": "bio.p-diff2",
        "prompt": "What happens at equal concentrations in this closed diffusion model?",
        "options": [
          "All particles stop",
          "Particles continue moving, with no net transfer",
          "Every particle moves only left"
        ],
        "answer": 1,
        "why": "Equal opposing movement gives no overall directional change.",
        "concept": "bio.diff-equilibrium"
      },
      {
        "id": "bio.p-diff3",
        "prompt": "Which change generally speeds diffusion, other factors held constant?",
        "options": [
          "Reducing membrane area",
          "Making both sides equal",
          "Increasing temperature"
        ],
        "answer": 2,
        "why": "Faster particle motion generally increases diffusion rate.",
        "concept": "bio.diff-factors"
      },
      {
        "id": "bio.p-diff4",
        "prompt": "Which waste product can diffuse from cells into blood plasma for kidney excretion?",
        "options": [
          "Urea",
          "Cellulose",
          "A whole nucleus"
        ],
        "answer": 0,
        "why": "Urea is carried in plasma to the kidneys.",
        "concept": "bio.diff-examples"
      }
    ],
    "check": [
      {
        "id": "bio.c-diff1",
        "prompt": "Diffusion is a net movement…",
        "options": [
          "From higher to lower concentration in a gas or solution",
          "Always from outside a cell to inside",
          "Only of whole cells"
        ],
        "answer": 0,
        "why": "The concentration gradient determines the net direction.",
        "concept": "bio.diff-direction"
      },
      {
        "id": "bio.c-diff2",
        "prompt": "Which account of individual particle movement is correct?",
        "options": [
          "Every particle moves only down the gradient",
          "Particles move randomly both ways; the overall balance follows the gradient",
          "Particles know which side needs them"
        ],
        "answer": 1,
        "why": "Net transfer emerges from random movements, not directed decisions.",
        "concept": "bio.diff-direction"
      },
      {
        "id": "bio.c-diff3",
        "prompt": "A larger concentration difference, other conditions unchanged, generally gives…",
        "options": [
          "A slower diffusion rate",
          "No possible movement",
          "A faster net diffusion rate"
        ],
        "answer": 2,
        "why": "A steeper gradient increases the net transfer tendency.",
        "concept": "bio.diff-factors"
      },
      {
        "id": "bio.c-diff4",
        "prompt": "Why does a higher temperature generally speed diffusion?",
        "options": [
          "Particles move more rapidly",
          "It creates new particles",
          "It turns all cell membranes into walls"
        ],
        "answer": 0,
        "why": "Greater thermal motion supports faster spreading.",
        "concept": "bio.diff-factors"
      },
      {
        "id": "bio.c-diff5",
        "prompt": "Why does a larger available membrane area increase total exchange per second?",
        "options": [
          "It guarantees every particle crosses",
          "More membrane surface is available for crossing",
          "It forces the gradient to reverse"
        ],
        "answer": 1,
        "why": "Area adds parallel opportunities for transfer.",
        "concept": "bio.diff-factors"
      },
      {
        "id": "bio.c-diff6",
        "prompt": "A respiring cell has lower oxygen concentration than its surroundings. Net diffusion carries oxygen…",
        "options": [
          "Out of the cell only",
          "Nowhere because cells are alive",
          "Into the cell"
        ],
        "answer": 2,
        "why": "The stated oxygen gradient points into the cell.",
        "concept": "bio.diff-examples"
      },
      {
        "id": "bio.c-diff7",
        "prompt": "A cell has higher carbon dioxide concentration than surrounding fluid. Its net diffusion direction is…",
        "options": [
          "Out towards the surrounding fluid",
          "Into the cell because every gas moves inward",
          "Unrelated to concentration"
        ],
        "answer": 0,
        "why": "Carbon dioxide follows its own higher-to-lower gradient.",
        "concept": "bio.diff-examples"
      },
      {
        "id": "bio.c-diff8",
        "prompt": "Which path matches the specified urea example?",
        "options": [
          "Kidney directly into plant chloroplasts",
          "From cells into blood plasma, then carried for kidney excretion",
          "From cellulose into a nucleus"
        ],
        "answer": 1,
        "why": "Diffusion transfers urea into plasma before its later transport/excretion.",
        "concept": "bio.diff-examples"
      },
      {
        "id": "bio.c-diff9",
        "prompt": "At equal concentrations across a permeable boundary, particles…",
        "options": [
          "Stop permanently",
          "Move only in the original direction",
          "Continue random movement without a net transfer"
        ],
        "answer": 2,
        "why": "Dynamic particle movement can persist at equal concentrations.",
        "concept": "bio.diff-equilibrium"
      }
    ],
    "skills": [
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.cell-structures"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.cells.surface-area",
    "title": "Surface area to volume",
    "short": "Size changes exchange needs",
    "refs": [
      "1.3.1"
    ],
    "minutes": 30,
    "widget": "surface-lab",
    "topicId": "science.biology.cell-biology",
    "big": "As geometrically similar shapes get larger, surface area grows less rapidly than volume. Compare exchange surface with the amount of tissue it supplies.",
    "learn": [
      {
        "title": "Calculate a cube model",
        "text": "For a cube of side length a, total surface area is6a² and volume is a³. A1 cm cube has6 cm² area and1 cm³ volume, so its surface-area-to-volume ratio is6:1. These cubes are mathematical models of size, not claims that real cells are cubes. Keep area and volume units consistent before comparing.",
        "scene": "surface:1"
      },
      {
        "title": "Grow a similar shape",
        "text": "A2 cm cube has24 cm² area and8 cm³ volume:24:8 simplifies to3:1. A4 cm cube has96 cm² and64 cm³:96:64=1.5:1. Its total surface is larger, but there is less surface per unit volume. For cubes, area divided by volume is6/a in inverse-length units; simplified ratios here compare values expressed in the same stated centimetre system.",
        "scene": "surface:2"
      },
      {
        "title": "Connect ratio to exchange",
        "text": "A single-celled organism has a relatively large surface area compared with its volume. Its membrane can allow enough transport of molecules to meet the needs of the whole cell, with short internal distances. Larger similar bodies have lower surface area relative to volume and more material needing supplies and waste removal. A large absolute area alone does not establish adequate exchange.",
        "scene": "surface:4"
      },
      {
        "title": "Build specialised exchange and transport",
        "text": "Multicellular organisms need specialised exchange surfaces and transport systems to supply cells sufficiently. Folding or branching increases exchange surface; thin barriers shorten diffusion paths. Animal blood transports substances between exchange organs and deeper cells, helping maintain gradients. A small surface-area-to-volume ratio does not mean no diffusion occurs; it means the outside surface alone may not meet the organism’s demands.",
        "scene": "surface:4"
      }
    ],
    "practice": [
      {
        "id": "bio.p-surface1",
        "prompt": "Cube side3 cm. Total surface area?",
        "type": "number",
        "answer": 54,
        "tolerance": 0.001,
        "unit": "cm²",
        "why": "6×3²=54 cm².",
        "concept": "bio.surface-calculate"
      },
      {
        "id": "bio.p-surface2",
        "prompt": "Cube side3 cm. Volume?",
        "type": "number",
        "answer": 27,
        "tolerance": 0.001,
        "unit": "cm³",
        "why": "3³=27 cm³.",
        "concept": "bio.surface-calculate"
      },
      {
        "id": "bio.p-surface3",
        "prompt": "Area54 cm² and volume27 cm³. Enter x in SA:V=x:1.",
        "type": "number",
        "answer": 2,
        "tolerance": 0.001,
        "unit": "",
        "why": "54÷27=2.",
        "concept": "bio.surface-calculate"
      },
      {
        "id": "bio.p-surface4",
        "prompt": "If a cube doubles in side length, which happens to its SA:V?",
        "options": [
          "It doubles",
          "It stays constant",
          "It halves"
        ],
        "answer": 2,
        "why": "Area scales with length squared; volume with length cubed.",
        "concept": "bio.surface-size"
      }
    ],
    "check": [
      {
        "id": "bio.c-surface1",
        "prompt": "Cube side5 cm. Total surface area?",
        "type": "number",
        "answer": 150,
        "tolerance": 0.001,
        "unit": "cm²",
        "why": "6×5²=150 cm².",
        "concept": "bio.surface-calculate"
      },
      {
        "id": "bio.c-surface2",
        "prompt": "Cube side5 cm. Volume?",
        "type": "number",
        "answer": 125,
        "tolerance": 0.001,
        "unit": "cm³",
        "why": "5³=125 cm³.",
        "concept": "bio.surface-calculate"
      },
      {
        "id": "bio.c-surface3",
        "prompt": "Area150 cm², volume125 cm³. Enter x in SA:V=x:1.",
        "type": "number",
        "answer": 1.2,
        "tolerance": 0.001,
        "unit": "",
        "why": "150÷125=1.2.",
        "concept": "bio.surface-calculate"
      },
      {
        "id": "bio.c-surface4",
        "prompt": "A1 cm cube and a4 cm cube are compared. The larger cube has…",
        "options": [
          "More total surface but a lower SA:V",
          "Less total surface and a higher SA:V",
          "No surface"
        ],
        "answer": 0,
        "why": "Its area is96 instead of6, but ratio1.5:1 instead of6:1.",
        "concept": "bio.surface-size"
      },
      {
        "id": "bio.c-surface5",
        "prompt": "Why can many single-celled organisms exchange sufficiently across their membrane?",
        "options": [
          "They never need substances",
          "They have relatively large SA:V and short internal distances",
          "They contain a full animal circulatory system"
        ],
        "answer": 1,
        "why": "A large exchange surface relative to demand supports transport.",
        "concept": "bio.surface-organisms"
      },
      {
        "id": "bio.c-surface6",
        "prompt": "Why do larger multicellular organisms need specialised exchange surfaces and transport?",
        "options": [
          "Their outer surface alone may not supply all their cells fast enough",
          "They cannot ever use diffusion",
          "All their cells touch the outside"
        ],
        "answer": 0,
        "why": "Lower external SA:V and longer internal paths require additional adaptations.",
        "concept": "bio.surface-organisms"
      },
      {
        "id": "bio.c-surface7",
        "prompt": "Folding an exchange surface mainly helps by…",
        "options": [
          "Making volume vanish",
          "Increasing available surface area",
          "Stopping particle motion"
        ],
        "answer": 1,
        "why": "Folds add exchange area without a proportionate increase in overall size.",
        "concept": "bio.surface-organisms"
      },
      {
        "id": "bio.c-surface8",
        "prompt": "A lower SA:V means…",
        "options": [
          "Every diffusion event stops",
          "The organism has no membrane",
          "Less surface per unit volume, not necessarily less total surface"
        ],
        "answer": 2,
        "why": "Ratio and total amount are different quantities.",
        "concept": "bio.surface-size"
      },
      {
        "id": "bio.c-surface9",
        "prompt": "A cube has side6 cm. Enter x in its SA:V=x:1.",
        "type": "number",
        "answer": 1,
        "tolerance": 0.001,
        "unit": "",
        "why": "6×6²=216 cm² and6³=216 cm³, so1:1.",
        "concept": "bio.surface-calculate"
      }
    ],
    "skills": [
      "MS1c",
      "MS5c",
      "WS1.2"
    ],
    "prerequisites": [
      "science.biology.cells.diffusion"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.cells.exchange-surfaces",
    "title": "Specialised exchange surfaces",
    "short": "More area, shorter paths",
    "refs": [
      "1.3.1"
    ],
    "minutes": 30,
    "widget": "exchange-lab",
    "topicId": "science.biology.cell-biology",
    "big": "Exchange organs combine large surfaces and short paths with processes that maintain concentration differences. Connect each adaptation to its effect.",
    "learn": [
      {
        "title": "Lungs exchange gases with blood",
        "text": "In mammalian lungs, many alveoli create a large gas-exchange area. Thin alveolar and capillary walls give a short path between air and blood. Blood supply brings carbon-dioxide-rich, oxygen-poor blood and carries oxygen away; ventilation refreshes alveolar air. These processes help maintain gradients for oxygen into blood and carbon dioxide out. Ventilation moves air in bulk; it is distinct from diffusion across the exchange surface.",
        "scene": "exchange:lungs"
      },
      {
        "title": "Small-intestine walls absorb substances",
        "text": "Villi and microvilli provide a large absorptive surface in the mammalian small intestine. The lining is thin, giving a short route into the body; a good blood supply carries absorbed substances away and can maintain gradients. Some substances diffuse when their concentrations permit; not every nutrient crosses solely by diffusion, and active transport is studied later. Do not describe intestinal ventilation as the adaptation for nutrient absorption.",
        "scene": "exchange:intestine"
      },
      {
        "title": "Gills exchange with flowing water",
        "text": "Fish gills have many filaments and thin lamellae, giving a large area and short diffusion path. Blood passes close to the surface. Water flow over gills refreshes the external supply of dissolved oxygen, while blood carries oxygen away. The refreshed water is analogous to ventilation of a gas-exchange surface, although fish take oxygen from water rather than breathe it through mammalian lungs. No counter-current mechanism recall is required in this lesson.",
        "scene": "exchange:gills"
      },
      {
        "title": "Roots reach the soil solution",
        "text": "Root hairs increase surface area in contact with soil solution and provide a short route into living root cells. This supports uptake of water and mineral ions for the plant. Plants do not use blood to carry substances: transport tissues distribute materials. Water uptake by osmosis and mineral-ion uptake by active transport are explained in later lessons; do not call all root uptake diffusion down a concentration gradient.",
        "scene": "exchange:roots"
      },
      {
        "title": "Leaves provide short gas pathways",
        "text": "Broad leaves offer a large area; their thin form gives short paths to photosynthesising cells. Stomata allow gases to enter and leave, and internal air spaces distribute gases near cell surfaces. During photosynthesis, carbon dioxide can diffuse into cells down its gradient, with oxygen moving out under the stated conditions. Actual net direction depends on photosynthesis, respiration and the concentrations. Plant leaves do not require an animal blood supply.",
        "scene": "exchange:leaves"
      }
    ],
    "practice": [
      {
        "id": "bio.p-exchange1",
        "prompt": "Why do thin alveolar walls support gas exchange?",
        "options": [
          "They shorten the diffusion path",
          "They create oxygen from nothing",
          "They prevent every carbon dioxide molecule moving"
        ],
        "answer": 0,
        "why": "A short path supports faster diffusion.",
        "concept": "bio.exchange-principles"
      },
      {
        "id": "bio.p-exchange2",
        "prompt": "How does blood flow help an absorptive surface?",
        "options": [
          "It replaces all membranes with walls",
          "It carries substances away and can maintain a gradient",
          "It is plant ventilation"
        ],
        "answer": 1,
        "why": "Supply and removal prevent gradients collapsing as quickly.",
        "concept": "bio.exchange-principles"
      },
      {
        "id": "bio.p-exchange3",
        "prompt": "Which is a gill adaptation?",
        "options": [
          "A single very thick barrier",
          "No water flow",
          "Many thin exchange surfaces with a blood supply"
        ],
        "answer": 2,
        "why": "Area, short path and supply/removal work together.",
        "concept": "bio.exchange-animals"
      },
      {
        "id": "bio.p-exchange4",
        "prompt": "Which pairing is accurate?",
        "options": [
          "Root hairs — larger soil-contact area; stomata — gas access in leaves",
          "Root hairs — animal blood vessels; stomata — sugar-producing nuclei",
          "Every plant uptake process — diffusion only"
        ],
        "answer": 0,
        "why": "Different plant structures support different exchanges; transport mechanisms vary.",
        "concept": "bio.exchange-plants"
      }
    ],
    "check": [
      {
        "id": "bio.c-exchange1",
        "prompt": "Which combination improves a general diffusion exchange surface?",
        "options": [
          "Large area and a thin barrier",
          "Small area and a thick barrier",
          "No concentration difference"
        ],
        "answer": 0,
        "why": "More area and a shorter path support exchange.",
        "concept": "bio.exchange-principles"
      },
      {
        "id": "bio.c-exchange2",
        "prompt": "Ventilation in lungs helps gas diffusion mainly by…",
        "options": [
          "Directly carrying every oxygen molecule through the alveolar wall",
          "Refreshing air to maintain concentration differences",
          "Replacing blood circulation"
        ],
        "answer": 1,
        "why": "Ventilation moves air; diffusion crosses the thin exchange barrier.",
        "concept": "bio.exchange-animals"
      },
      {
        "id": "bio.c-exchange3",
        "prompt": "Why are many alveoli useful?",
        "options": [
          "They make blood unnecessary",
          "They block every gas pathway",
          "They provide a large exchange area"
        ],
        "answer": 2,
        "why": "Many small air sacs add total surface.",
        "concept": "bio.exchange-animals"
      },
      {
        "id": "bio.c-exchange4",
        "prompt": "Villi in the small intestine mainly increase…",
        "options": [
          "Surface available for absorption",
          "The distance molecules must cross",
          "The number of lungs"
        ],
        "answer": 0,
        "why": "The folded surface increases absorptive area.",
        "concept": "bio.exchange-animals"
      },
      {
        "id": "bio.c-exchange5",
        "prompt": "An efficient blood supply at an animal exchange surface helps by…",
        "options": [
          "Stopping all diffusion",
          "Transporting substances and maintaining gradients",
          "Creating cellulose walls"
        ],
        "answer": 1,
        "why": "Blood connects the exchange surface with the rest of the organism.",
        "concept": "bio.exchange-principles"
      },
      {
        "id": "bio.c-exchange6",
        "prompt": "Which gill feature shortens the diffusion path?",
        "options": [
          "Very thick lamellae",
          "No water touching the surface",
          "Thin lamellae with blood close to water"
        ],
        "answer": 2,
        "why": "A thin barrier separates the two exchange media.",
        "concept": "bio.exchange-animals"
      },
      {
        "id": "bio.c-exchange7",
        "prompt": "Why does refreshed water flowing over gills help?",
        "options": [
          "It maintains an oxygen supply and concentration difference",
          "It converts the gills into intestines",
          "It removes the need for a thin surface"
        ],
        "answer": 0,
        "why": "External supply and blood removal support continued diffusion.",
        "concept": "bio.exchange-animals"
      },
      {
        "id": "bio.c-exchange8",
        "prompt": "A root hair is an exchange adaptation because…",
        "options": [
          "It has an animal capillary inside",
          "Its projection increases soil-contacting surface",
          "Every substance enters it by diffusion only"
        ],
        "answer": 1,
        "why": "Large contact surface supports uptake, whose mechanisms differ.",
        "concept": "bio.exchange-plants"
      },
      {
        "id": "bio.c-exchange9",
        "prompt": "Which leaf features support gas exchange?",
        "options": [
          "Only a thick sealed surface",
          "An animal blood supply in every leaf",
          "Stomata, internal air spaces and short paths through a thin leaf"
        ],
        "answer": 2,
        "why": "These connect outside air with photosynthesising tissues.",
        "concept": "bio.exchange-plants"
      },
      {
        "id": "bio.c-exchange10",
        "prompt": "During a supplied photosynthesis case, carbon dioxide concentration is lower inside leaf cells than outside. Net diffusion is…",
        "options": [
          "Into the cells through available gas pathways",
          "Always out because leaves produce oxygen",
          "Unrelated to the gradient"
        ],
        "answer": 0,
        "why": "The stated carbon dioxide gradient points into the cells.",
        "concept": "bio.exchange-plants"
      }
    ],
    "skills": [
      "WS1.2",
      "MS1c"
    ],
    "prerequisites": [
      "science.biology.cells.diffusion",
      "science.biology.cells.surface-area",
      "science.biology.cells.specialisation"
    ],
    "separate": false,
    "higher": false
  }
];
export const diffusionConcepts={
  "bio.diff-direction": "Random motion and net diffusion direction",
  "bio.diff-equilibrium": "Particle movement without net transfer",
  "bio.diff-factors": "Gradient, temperature and membrane area",
  "bio.diff-examples": "Oxygen, carbon dioxide and urea diffusion",
  "bio.surface-calculate": "Cube surface area, volume and ratios",
  "bio.surface-size": "Geometrical size and SA:V",
  "bio.surface-organisms": "Exchange needs in single and multicellular organisms",
  "bio.exchange-principles": "Large area, short path and maintained gradients",
  "bio.exchange-animals": "Lung, intestine and gill adaptations",
  "bio.exchange-plants": "Root and leaf exchange adaptations"
};
