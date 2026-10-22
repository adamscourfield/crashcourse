export const nanoLessons=[
  {
    "id": "science.chemistry.bonding.nano-sizes",
    "title": "Nanoparticle sizes & units",
    "short": "Zoom into the nanoscale",
    "refs": [
      "2.4.1"
    ],
    "separate": true,
    "minutes": 20,
    "widget": "nano-sizes",
    "prerequisites": [
      "subatomic",
      "isotopes"
    ],
    "big": "One nanometre is one billionth of a metre. Compare sizes using common units and powers of ten before deciding whether a particle is nanoscale.",
    "learn": [
      {
        "title": "Read the prefix.",
        "text": "1 nm = 10⁻⁹ m. Multiply a size in nm by 10⁻⁹ to express it in metres. For example, 20 nm = 2 × 10⁻⁸ m. Numeric boxes accept e notation: type 2e-8 for 2 × 10⁻⁸. A representative atomic diameter is about 0.1 nm, so a 20 nm particle is roughly 200 atomic diameters across. This compares lengths, not the total number of atoms.",
        "scene": "nano:scale"
      },
      {
        "title": "Compare course size bands.",
        "text": "AQA describes nanoparticles as 1–100 nm. Fine particles are about 100–2500 nm (10⁻⁷–2.5 × 10⁻⁶ m); coarse particles, often called dust, are about 2500–10 000 nm (2.5 × 10⁻⁶–10⁻⁵ m). The stated bands share boundary values, so avoid assuming an exact boundary has a uniquely defined category. Nanoparticles contain many atoms, with the count depending on size, shape and material.",
        "scene": "nano:scale"
      },
      {
        "title": "Use orders of magnitude.",
        "text": "A 10 nm particle is ten times smaller in diameter than a 100 nm particle, and one hundred times larger than a 0.1 nm atom. On a logarithmic ruler, equal distances represent multiplication by the same factor, not adding the same length. Molecular dimensions vary; use a supplied value instead of assuming every molecule is the same size.",
        "scene": "nano:scale"
      }
    ],
    "practice": [
      {
        "id": "bonding.p-nsize1",
        "prompt": "Convert 50 nm to metres. You may type 5e-8.",
        "options": [],
        "answer": 5e-8,
        "why": "50 × 10⁻⁹ = 5 × 10⁻⁸ m.",
        "concept": "bonding.nano-units",
        "type": "number",
        "unit": "m",
        "tolerance": 1e-15
      },
      {
        "id": "bonding.p-nsize2",
        "prompt": "A 500 nm particle lies in which course size band?",
        "options": [
          "Nanoparticle",
          "Fine particle",
          "Coarse particle"
        ],
        "answer": 1,
        "why": "500 is above 100 and below 2500 nm.",
        "concept": "bonding.nano-bands"
      },
      {
        "id": "bonding.p-nsize3",
        "prompt": "A 10 nm particle is how many times the diameter of a 0.1 nm atom?",
        "options": [],
        "answer": 100,
        "why": "10 ÷ 0.1 = 100. This is a diameter ratio, not an atom count.",
        "concept": "bonding.nano-scale",
        "type": "number",
        "unit": "times",
        "tolerance": 0
      }
    ],
    "check": [
      {
        "id": "bonding.c-nsize1",
        "prompt": "Convert 30 nm to metres. Use decimal or e notation.",
        "options": [],
        "answer": 3e-8,
        "why": "30 × 10⁻⁹ = 3 × 10⁻⁸ m.",
        "concept": "bonding.nano-units",
        "type": "number",
        "unit": "m",
        "tolerance": 1e-15
      },
      {
        "id": "bonding.c-nsize2",
        "prompt": "Which size is clearly inside the nanoparticle range?",
        "options": [
          "40 nm",
          "400 nm",
          "4000 nm"
        ],
        "answer": 0,
        "why": "40 lies between 1 and 100 nm.",
        "concept": "bonding.nano-bands"
      },
      {
        "id": "bonding.c-nsize3",
        "prompt": "A particle has diameter 6000 nm. Course category?",
        "options": [
          "Nanoparticle",
          "Fine particle",
          "Coarse particle"
        ],
        "answer": 2,
        "why": "6000 nm lies between 2500 and 10 000 nm.",
        "concept": "bonding.nano-bands"
      },
      {
        "id": "bonding.c-nsize4",
        "prompt": "How many times larger in diameter is 80 nm than a 0.1 nm atom?",
        "options": [],
        "answer": 800,
        "why": "80 ÷ 0.1 = 800.",
        "concept": "bonding.nano-scale",
        "type": "number",
        "unit": "times",
        "tolerance": 0
      },
      {
        "id": "bonding.c-nsize5",
        "prompt": "Equal gaps on a base-ten logarithmic size ruler represent…",
        "options": [
          "Multiplication by10",
          "Addition of10 nm in every interval",
          "Identical actual particle diameters"
        ],
        "answer": 0,
        "why": "A log ruler spaces orders of magnitude equally.",
        "concept": "bonding.nano-scale"
      }
    ],
    "skills": [
      "MS1b",
      "MS1c",
      "MS1d",
      "MS2h",
      "WS1.2"
    ]
  },
  {
    "id": "science.chemistry.bonding.nano-surface",
    "title": "Surface area, volume & particle size",
    "short": "Smaller pieces, more exposed surface",
    "refs": [
      "2.4.1"
    ],
    "separate": true,
    "minutes": 25,
    "widget": "nano-surface",
    "prerequisites": [
      "science.chemistry.bonding.nano-sizes"
    ],
    "big": "As particles get smaller, surface-area-to-volume ratio increases. Dividing the same amount of material exposes more surface without increasing its total volume.",
    "learn": [
      {
        "title": "Build the cube calculation.",
        "text": "For a cube of side d, one face has area d². Six faces give surface area 6d², and volume is d³. Surface-area-to-volume ratio is 6/d. For d=10 nm, area=600 nm², volume=1000 nm³ and SA/V=0.6 nm⁻¹. Keep area, volume and ratio units distinct. Cubes are a calculation model; real particles need not be cubic.",
        "scene": "nano:cubes"
      },
      {
        "title": "Keep the amount constant.",
        "text": "Cut a 10 nm cube into eight 5 nm cubes and separate them so every face is exposed. Each small cube has area 150 nm² and volume 125 nm³. Total volume remains 1000 nm³, but total exposed area becomes 1200 nm². The total SA/V doubles from 0.6 to 1.2 nm⁻¹. Cutting and exposing faces increases surface area; it does not create extra material.",
        "scene": "nano:split"
      },
      {
        "title": "Connect ratio to behaviour.",
        "text": "Reducing cube side length by a factor of 10 increases its SA/V by a factor of 10. A larger fraction of the material is near a surface. This can change properties and provide more accessible sites for reactions, so a smaller mass of a nanoparticle catalyst may sometimes be effective. The effect depends on material and application. Particles clumping together can reduce accessible surface.",
        "scene": "nano:split"
      }
    ],
    "practice": [
      {
        "id": "bonding.p-nsurface1",
        "prompt": "A cube has side 2 nm. What is its surface area?",
        "options": [],
        "answer": 24,
        "why": "6 × 2² = 24 nm².",
        "concept": "bonding.nano-cubes",
        "type": "number",
        "unit": "nm²",
        "tolerance": 0
      },
      {
        "id": "bonding.p-nsurface2",
        "prompt": "What is the volume of a cube of side 2 nm?",
        "options": [],
        "answer": 8,
        "why": "2³ = 8 nm³.",
        "concept": "bonding.nano-cubes",
        "type": "number",
        "unit": "nm³",
        "tolerance": 0
      },
      {
        "id": "bonding.p-nsurface3",
        "prompt": "Side length decreases tenfold. What happens to SA/V?",
        "options": [
          "It increases tenfold",
          "It decreases tenfold",
          "It stays the same"
        ],
        "answer": 0,
        "why": "SA/V=6/d, so a tenfold reduction in d gives tenfold increase in ratio.",
        "concept": "bonding.nano-ratio"
      }
    ],
    "check": [
      {
        "id": "bonding.c-nsurface1",
        "prompt": "Calculate the surface area of a cube with side 3 nm.",
        "options": [],
        "answer": 54,
        "why": "6 × 3² = 54 nm².",
        "concept": "bonding.nano-cubes",
        "type": "number",
        "unit": "nm²",
        "tolerance": 0
      },
      {
        "id": "bonding.c-nsurface2",
        "prompt": "Calculate the volume of a cube with side 3 nm.",
        "options": [],
        "answer": 27,
        "why": "3³ = 27 nm³.",
        "concept": "bonding.nano-cubes",
        "type": "number",
        "unit": "nm³",
        "tolerance": 0
      },
      {
        "id": "bonding.c-nsurface3",
        "prompt": "For a cube of side 3 nm, calculate SA/V.",
        "options": [],
        "answer": 2,
        "why": "54 ÷ 27 = 2 nm⁻¹; equivalently 6 ÷ 3.",
        "concept": "bonding.nano-ratio",
        "type": "number",
        "unit": "nm⁻¹",
        "tolerance": 0
      },
      {
        "id": "bonding.c-nsurface4",
        "prompt": "One cube is divided into smaller separated cubes. What stays constant?",
        "options": [
          "Total volume of material",
          "Total exposed surface area",
          "The side length of each piece"
        ],
        "answer": 0,
        "why": "Dividing material conserves its volume but exposes extra surfaces.",
        "concept": "bonding.nano-ratio"
      },
      {
        "id": "bonding.c-nsurface5",
        "prompt": "Why may a small mass of nanoparticle catalyst be effective?",
        "options": [
          "It can offer a large accessible surface per amount of material",
          "It contains no atoms",
          "Its total material volume must increase automatically"
        ],
        "answer": 0,
        "why": "High SA/V can provide more accessible reaction sites per amount of material.",
        "concept": "bonding.nano-properties"
      }
    ],
    "skills": [
      "MS5c",
      "MS1c",
      "MS2h",
      "WS1.2",
      "WS1.4"
    ]
  },
  {
    "id": "science.chemistry.bonding.nano-uses",
    "title": "Nanoparticle uses, evidence & risks",
    "short": "Useful properties, careful conclusions",
    "refs": [
      "2.4.2"
    ],
    "separate": true,
    "minutes": 20,
    "widget": "nano-uses",
    "prerequisites": [
      "science.chemistry.bonding.nano-surface"
    ],
    "big": "Evaluate an application by linking a measured benefit to a possible risk and the evidence still needed. “Nano” alone proves neither safety nor danger.",
    "learn": [
      {
        "title": "Start with a useful property.",
        "text": "Nanoparticles are used or investigated in catalysts, electronics, medicine, cosmetics and sun creams, and antimicrobial materials such as some deodorants. High surface-area-to-volume ratio or altered optical, electrical or chemical properties can offer advantages. For example, an effective catalyst might use less material, or a formulation might provide useful UV protection with a different appearance. Judge the supplied evidence for the specific material.",
        "scene": "nano:evidence"
      },
      {
        "title": "Ask about exposure and uncertainty.",
        "text": "Possible risks depend on material, size, dose and route of exposure. Inhalation, release to water, persistence or interactions with living cells may need investigation. A benefit measured in one laboratory test does not establish long-term safety in every use. Equally, a possible hazard does not prove harm will occur in every setting. Distinguish an observed result from a question that remains unanswered.",
        "scene": "nano:evidence"
      },
      {
        "title": "Build a balanced evaluation.",
        "text": "State the intended benefit, cite relevant evidence, identify a possible drawback and ask for a test that would reduce uncertainty. Compare with an alternative or control where useful. Our activity uses invented research summaries to practise this reasoning; its numbers are not claims about real products. A choice-based evaluation can support reasoning but does not replace writing a full evidence-based answer.",
        "scene": "nano:evidence"
      }
    ],
    "practice": [
      {
        "id": "bonding.p-nuse1",
        "prompt": "A nanoparticle catalyst performs as well using less material. A supported advantage is…",
        "options": [
          "Reduced material use in that tested process",
          "Proof of no environmental risks",
          "Proof all nanoparticles are harmless"
        ],
        "answer": 0,
        "why": "The result supports that process advantage, not universal safety.",
        "concept": "bonding.nano-benefits"
      },
      {
        "id": "bonding.p-nuse2",
        "prompt": "A material may be inhaled during manufacture. Which test is relevant?",
        "options": [
          "Exposure and effects for the likely inhaled dose",
          "Only the colour of the packaging",
          "Only whether its name contains nano"
        ],
        "answer": 0,
        "why": "Assess the actual exposure route and dose.",
        "concept": "bonding.nano-risks"
      },
      {
        "id": "bonding.p-nuse3",
        "prompt": "A short test finds no harm. What can be concluded?",
        "options": [
          "No harm was detected under those conditions",
          "Long-term safety in all uses is proven",
          "Every untested exposure is dangerous"
        ],
        "answer": 0,
        "why": "The conclusion must stay within the test conditions and duration.",
        "concept": "bonding.nano-evaluation"
      }
    ],
    "check": [
      {
        "id": "bonding.c-nuse1",
        "prompt": "Which is a valid example of a nanoparticle application?",
        "options": [
          "Catalysts",
          "Removing every atom from matter",
          "Making all substances identical"
        ],
        "answer": 0,
        "why": "High surface area can benefit catalysis.",
        "concept": "bonding.nano-benefits"
      },
      {
        "id": "bonding.c-nuse2",
        "prompt": "A coating reduces bacterial growth in a lab. What remains useful to investigate?",
        "options": [
          "Whether release harms organisms at realistic exposure",
          "Whether every organism is definitely safe already",
          "Whether all materials must have identical effects"
        ],
        "answer": 0,
        "why": "The laboratory benefit does not answer every exposure question.",
        "concept": "bonding.nano-risks"
      },
      {
        "id": "bonding.c-nuse3",
        "prompt": "What best supports adopting a nanoparticle material?",
        "options": [
          "Evidence of useful performance plus assessment of relevant risks",
          "Only the word nano in an advert",
          "A claim that small size always guarantees safety"
        ],
        "answer": 0,
        "why": "Balance benefits with evidence about the proposed use.",
        "concept": "bonding.nano-evaluation"
      },
      {
        "id": "bonding.c-nuse4",
        "prompt": "Which information most helps evaluate a proposed suncream ingredient?",
        "options": [
          "UV protection and relevant exposure/safety results for that formulation",
          "Only the package colour",
          "Only the number of letters in its name"
        ],
        "answer": 0,
        "why": "Performance and exposure evidence directly address the use.",
        "concept": "bonding.nano-evaluation"
      },
      {
        "id": "bonding.c-nuse5",
        "prompt": "Why can nanoparticle properties differ from bulk material?",
        "options": [
          "A higher fraction of material lies near surfaces and other size effects can occur",
          "They are always made from a new element",
          "They have no surface"
        ],
        "answer": 0,
        "why": "High SA/V and size-dependent behaviour can alter properties.",
        "concept": "bonding.nano-properties"
      }
    ],
    "skills": [
      "WS1.3",
      "WS1.4",
      "WS1.5"
    ]
  }
];
export const nanoConcepts={
  "bonding.nano-units": "Nanometres and standard form",
  "bonding.nano-bands": "Nano, fine and coarse sizes",
  "bonding.nano-scale": "Orders of magnitude",
  "bonding.nano-cubes": "Cube surface area and volume",
  "bonding.nano-ratio": "Surface-area-to-volume ratio",
  "bonding.nano-properties": "Size and material properties",
  "bonding.nano-benefits": "Nanoparticle applications",
  "bonding.nano-risks": "Exposure and possible risks",
  "bonding.nano-evaluation": "Evidence-based evaluation"
};
