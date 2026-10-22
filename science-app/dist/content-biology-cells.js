export const biologyCellLessons=[
  {
    "id": "science.biology.cells.cell-types",
    "title": "Eukaryotes & prokaryotes",
    "short": "Two cell organisations",
    "refs": [
      "1.1.1"
    ],
    "minutes": 30,
    "widget": "bio-types",
    "topicId": "science.biology.cell-biology",
    "big": "Plant and animal cells enclose genetic material in a nucleus. Bacterial cells organise their genetic material without a nucleus.",
    "learn": [
      {
        "title": "Start with the shared parts",
        "text": "Plant, animal and bacterial cells all have cytoplasm and a cell membrane. Plant and animal cells are eukaryotic: their genetic material is enclosed in a nucleus. These are typical cell models; particular specialised cells can differ from the familiar diagram.",
        "scene": "bio:types:animal:nucleus"
      },
      {
        "title": "Locate bacterial DNA",
        "text": "Bacteria are prokaryotic and much smaller than typical plant or animal cells. They have cytoplasm, a cell membrane and a surrounding cell wall. Their genetic material is not enclosed in a nucleus: the main DNA is a single circular loop in the cytoplasm. Bacteria also have ribosomes; no nucleus does not mean no genetic material.",
        "scene": "bio:types:bacterium:dna"
      },
      {
        "title": "Recognise plasmids",
        "text": "A bacterium may also contain one or more plasmids: small rings of DNA separate from its main DNA loop. Plasmids carry genes that can provide useful features, for example resistance to an antibiotic. They are not tiny nuclei, and not every bacterial cell has them. A bacterial cell wall should not be confused with the cellulose wall of a plant cell.",
        "scene": "bio:types:bacterium:plasmid"
      },
      {
        "title": "Compare scale, not drawing size",
        "text": "The model diagrams are symbolic and are not drawn to a common scale. Use supplied measurements to compare cells. A20 μm animal cell is10 times the length of a2 μm bacterium: one order of magnitude. 1 mm =1000 μm; 1 μm =10⁻⁶ m, so20 μm =2×10⁻⁵ m. The prefixes centi, milli, micro and nano mean10⁻²,10⁻³,10⁻⁶ and10⁻⁹. Compare length with length; an enlarged drawing alone cannot establish real size.",
        "scene": "bio:types:plant:membrane"
      }
    ],
    "practice": [
      {
        "prompt": "Which feature distinguishes the typical eukaryotic cells taught here?",
        "options": [
          "Genetic material enclosed in a nucleus",
          "No cytoplasm",
          "No cell membrane"
        ],
        "answer": 0,
        "why": "Plant and animal cells have a nucleus; bacteria do not.",
        "concept": "bio.cell-groups",
        "id": "bio.p-cell-types1"
      },
      {
        "prompt": "What is a plasmid?",
        "options": [
          "A small ring of DNA separate from the main bacterial loop",
          "A small nucleus",
          "A cell wall made of cellulose"
        ],
        "answer": 0,
        "why": "A bacterium may carry one or more plasmids.",
        "concept": "bio.bacterial-dna",
        "id": "bio.p-cell-types2"
      },
      {
        "prompt": "A plant cell is40 μm long; a bacterium is2 μm long. How many times longer is the plant cell?",
        "type": "number",
        "answer": 20,
        "tolerance": 0.001,
        "unit": "",
        "why": "40÷2=20.",
        "concept": "bio.cell-scale",
        "id": "bio.p-cell-types3"
      },
      {
        "prompt": "Which is20 μm in metres?",
        "options": [
          "2×10⁻⁵ m",
          "2×10⁵ m",
          "2×10⁻² m"
        ],
        "answer": 0,
        "why": "20×10⁻⁶=2×10⁻⁵.",
        "concept": "bio.cell-scale",
        "id": "bio.p-cell-types4"
      }
    ],
    "check": [
      {
        "prompt": "This symbolic cell has a main circular DNA loop and no nucleus. Which type is represented?",
        "options": [
          "Bacterium",
          "Animal cell",
          "Typical plant cell"
        ],
        "answer": 0,
        "why": "The DNA organisation supports a prokaryotic bacterium.",
        "concept": "bio.cell-groups",
        "figure": {
          "kind": "bio-cell",
          "type": "bacterium",
          "labelled": false
        },
        "id": "bio.c-cell-types1"
      },
      {
        "prompt": "Which parts occur in all three typical cell types?",
        "options": [
          "Cytoplasm and cell membrane",
          "Nucleus and chloroplasts",
          "Chloroplasts and plasmids"
        ],
        "answer": 0,
        "why": "All three have a membrane around cytoplasm.",
        "concept": "bio.cell-groups",
        "id": "bio.c-cell-types2"
      },
      {
        "prompt": "Bacterial genetic material is…",
        "options": [
          "A main DNA loop not enclosed in a nucleus, sometimes with plasmids",
          "Always enclosed in a nucleus",
          "Absent because bacteria are small"
        ],
        "answer": 0,
        "why": "Prokaryotic means no nucleus, not no DNA.",
        "concept": "bio.bacterial-dna",
        "id": "bio.c-cell-types3"
      },
      {
        "prompt": "Which statement about plasmids is accurate?",
        "options": [
          "They may carry additional genes and are not present in every bacterium",
          "Every bacterium must have exactly two",
          "They are membrane-bound nuclei"
        ],
        "answer": 0,
        "why": "Small separate DNA rings can carry useful genes.",
        "concept": "bio.bacterial-dna",
        "id": "bio.c-cell-types4"
      },
      {
        "prompt": "A30 μm cell compared with a3 μm bacterium is how many times longer?",
        "type": "number",
        "answer": 10,
        "tolerance": 0.001,
        "unit": "",
        "why": "30÷3=10, one order of magnitude.",
        "concept": "bio.cell-scale",
        "id": "bio.c-cell-types5"
      },
      {
        "prompt": "A100-fold difference in length is…",
        "options": [
          "Two orders of magnitude",
          "One order of magnitude",
          "One hundred orders of magnitude"
        ],
        "answer": 0,
        "why": "100=10².",
        "concept": "bio.cell-scale",
        "id": "bio.c-cell-types6"
      },
      {
        "prompt": "Which is5 μm in metres?",
        "options": [
          "5×10⁻⁶ m",
          "5×10⁻³ m",
          "5×10⁶ m"
        ],
        "answer": 0,
        "why": "Micro means10⁻⁶.",
        "concept": "bio.cell-scale",
        "id": "bio.c-cell-types7"
      },
      {
        "prompt": "Two model drawings appear equally wide. What else is needed to compare real cell sizes?",
        "options": [
          "A scale or real-size measurements",
          "Only their decorative colours",
          "The number of labels"
        ],
        "answer": 0,
        "why": "Drawing size can be changed independently of real size.",
        "concept": "bio.cell-scale",
        "id": "bio.c-cell-types8"
      }
    ],
    "skills": [
      "MS1b",
      "MS2a",
      "MS2h",
      "WS4.4"
    ],
    "prerequisites": [],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.cells.cell-structures",
    "title": "Cell structures & functions",
    "short": "Match each part to its job",
    "refs": [
      "1.1.2"
    ],
    "minutes": 30,
    "widget": "bio-structures",
    "topicId": "science.biology.cell-biology",
    "big": "Sub-cellular structures have functions. Identify the evidence in a cell diagram and connect each structure to what the cell does.",
    "learn": [
      {
        "title": "Control and chemical reactions",
        "text": "Most animal cells have a nucleus, cytoplasm, cell membrane, mitochondria and ribosomes. The nucleus contains genetic material that controls cell activities. Cytoplasm is where most of the cell’s chemical reactions take place, with enzymes helping reactions. The cell membrane controls movement of substances into and out of the cell; it is not the same structure as a cell wall.",
        "scene": "bio:structures:animal:nucleus"
      },
      {
        "title": "Release energy and build proteins",
        "text": "Mitochondria are the site of aerobic respiration, which transfers energy for cell processes. Ribosomes are the site of protein synthesis. Plant cells also have mitochondria and ribosomes: photosynthesis does not remove the need for respiration. Small dots in our model represent ribosomes symbolically, not their appearance under an ordinary school light microscope.",
        "scene": "bio:structures:animal:mitochondria"
      },
      {
        "title": "Recognise plant structures",
        "text": "Plant and algal cells have a cellulose cell wall that strengthens the cell. Many plant cells have a permanent vacuole filled with cell sap; pressure from its contents helps support the cell. Chloroplasts contain chlorophyll and are the site of photosynthesis. Not every plant cell contains chloroplasts: root cells and onion-bulb epidermal cells are useful counterexamples. A cell wall and other structural evidence can support plant identification even without chloroplasts.",
        "scene": "bio:structures:plant:chloroplasts"
      },
      {
        "title": "Use evidence and sensible estimates",
        "text": "Recognise structures using position, boundaries and supplied labels, not colour alone. Models simplify shape, number and relative scale. Estimate a structure’s size when an exact edge or measurement is uncertain; state the assumption rather than pretend an estimate is exact. If a roughly circular nucleus is one quarter of the cell diameter, its projected area is about(1/4)²=1/16 of the cell’s circular area. This is a two-dimensional area estimate, not a volume ratio. Draw clear outlines and labels when comparing your observations with reference images.",
        "scene": "bio:structures:plant:vacuole"
      }
    ],
    "practice": [
      {
        "prompt": "Which structure is the site of protein synthesis?",
        "options": [
          "Ribosomes",
          "Permanent vacuole",
          "Cellulose wall"
        ],
        "answer": 0,
        "why": "Ribosomes join amino acids into proteins.",
        "concept": "bio.organelles",
        "id": "bio.p-cell-structures1"
      },
      {
        "prompt": "Why can a root cell be a plant cell without chloroplasts?",
        "options": [
          "Not all plant cells carry out photosynthesis",
          "All plant cells have no membrane",
          "Root cells must be bacteria"
        ],
        "answer": 0,
        "why": "A plant cell can retain a cellulose wall and other plant features without chloroplasts.",
        "concept": "bio.plant-features",
        "id": "bio.p-cell-structures2"
      },
      {
        "prompt": "Which plant-cell structure contains cell sap?",
        "options": [
          "Permanent vacuole",
          "Nucleus",
          "Ribosome"
        ],
        "answer": 0,
        "why": "The vacuole contains cell sap and helps support the cell.",
        "concept": "bio.plant-features",
        "id": "bio.p-cell-structures3"
      },
      {
        "prompt": "A roughly circular nucleus is half the cell diameter. Its projected area is what fraction of the cell area? Enter a decimal.",
        "type": "number",
        "answer": 0.25,
        "tolerance": 0.001,
        "unit": "",
        "why": "Area scales with diameter squared:0.5²=0.25.",
        "concept": "bio.relative-size",
        "id": "bio.p-cell-structures4"
      }
    ],
    "check": [
      {
        "prompt": "Which type of cell is represented by this symbolic diagram?",
        "options": [
          "Plant cell",
          "Animal cell",
          "Bacterium"
        ],
        "answer": 0,
        "why": "The cellulose-wall boundary, large vacuole and other plant structures support the identification.",
        "concept": "bio.plant-features",
        "figure": {
          "kind": "bio-cell",
          "type": "plant",
          "labelled": false
        },
        "id": "bio.c-cell-structures1"
      },
      {
        "prompt": "Which structure contains genetic material controlling activities in a typical animal cell?",
        "options": [
          "Nucleus",
          "Cell membrane",
          "Ribosome"
        ],
        "answer": 0,
        "why": "The nucleus contains the cell’s genetic material.",
        "concept": "bio.organelles",
        "id": "bio.c-cell-structures2"
      },
      {
        "prompt": "Where do most cell chemical reactions take place?",
        "options": [
          "Cytoplasm",
          "Cellulose wall",
          "Outside the membrane only"
        ],
        "answer": 0,
        "why": "The cytoplasm contains the machinery and enzymes for many reactions.",
        "concept": "bio.organelles",
        "id": "bio.c-cell-structures3"
      },
      {
        "prompt": "The cell membrane mainly…",
        "options": [
          "Controls movement into and out of the cell",
          "Carries out photosynthesis",
          "Makes the cellulose wall into a nucleus"
        ],
        "answer": 0,
        "why": "The membrane regulates exchange.",
        "concept": "bio.organelles",
        "id": "bio.c-cell-structures4"
      },
      {
        "prompt": "Which pairing is correct?",
        "options": [
          "Mitochondria — aerobic respiration; ribosomes — protein synthesis",
          "Mitochondria — photosynthesis; ribosomes — cell sap storage",
          "Mitochondria — DNA rings; ribosomes — cellulose walls"
        ],
        "answer": 0,
        "why": "Different structures perform different roles.",
        "concept": "bio.organelles",
        "id": "bio.c-cell-structures5"
      },
      {
        "prompt": "Which pairing describes plant-cell structures?",
        "options": [
          "Cellulose wall strengthens; chloroplasts carry out photosynthesis",
          "Cell wall controls all exchange instead of a membrane; chloroplasts store cell sap",
          "Vacuole makes proteins; wall is a plasmid"
        ],
        "answer": 0,
        "why": "The cell wall strengthens the cell and chloroplasts contain chlorophyll.",
        "concept": "bio.plant-features",
        "id": "bio.c-cell-structures6"
      },
      {
        "prompt": "Which statement about plant cells is correct?",
        "options": [
          "They have mitochondria; some have no chloroplasts",
          "They never respire",
          "Every plant cell must contain chloroplasts"
        ],
        "answer": 0,
        "why": "Plants respire, and chloroplast occurrence depends on cell function.",
        "concept": "bio.plant-features",
        "id": "bio.c-cell-structures7"
      },
      {
        "prompt": "For roughly circular outlines, a nucleus has one fifth of the cell diameter. Estimated nucleus area as a decimal fraction of the cell area?",
        "type": "number",
        "answer": 0.04,
        "tolerance": 0.001,
        "unit": "",
        "why": "(1/5)²=1/25=0.04; this is a projected-area estimate.",
        "concept": "bio.relative-size",
        "id": "bio.c-cell-structures8"
      },
      {
        "prompt": "Which structure contains cell sap and helps support a plant cell?",
        "options": [
          "Permanent vacuole",
          "Ribosome",
          "Mitochondrion"
        ],
        "answer": 0,
        "why": "Pressure from the vacuole contents helps support the cell.",
        "concept": "bio.plant-features",
        "id": "bio.c-cell-structures9"
      }
    ],
    "skills": [
      "WS1.2",
      "MS1d",
      "MS3a",
      "AT7"
    ],
    "prerequisites": [
      "science.biology.cells.cell-types"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.cells.microscopy",
    "title": "Microscopy & magnification",
    "short": "See detail and measure size",
    "refs": [
      "1.1.2",
      "1.1.5"
    ],
    "minutes": 30,
    "widget": "bio-microscopy",
    "topicId": "science.biology.cell-biology",
    "big": "Magnification enlarges an image. Resolution determines whether nearby details can be distinguished. Use consistent units to calculate size.",
    "learn": [
      {
        "title": "Enlargement is not detail",
        "text": "Magnification is how many times larger the image is than the real object. Resolution is the ability to distinguish two nearby points as separate. Enlarging a blurred image does not recover missing detail. Electron microscopes have higher magnification and resolving power than light microscopes, allowing finer sub-cellular structures to be studied and increasing biological understanding as microscopy developed.",
        "scene": "bio:microscopy"
      },
      {
        "title": "Keep the units consistent",
        "text": "Magnification = image size ÷ real size. Rearrange: real size = image size ÷ magnification; image size = magnification × real size. Convert units before dividing:1 mm =1000 μm,1 μm =1000 nm. A10 mm image of a20 μm cell has magnification10,000÷20=500. Magnification is a ratio with no length unit. A20 μm scale bar describes real length; its drawn length changes if an image is resized.",
        "scene": "bio:microscopy"
      },
      {
        "title": "Prepare and focus a light-microscope slide",
        "text": "Required practical1 uses a light microscope to observe, draw and label a selection of plant and animal cells, including a magnification scale. For a school-approved thin specimen, place it in a drop of water on a slide; use a suitable stain if needed to improve contrast. Lower the coverslip gently at an angle to reduce trapped bubbles. Start with the lowest-power objective, centre the specimen and focus carefully; avoid driving the lens into the slide. At higher power use fine focus and suitable illumination. Slide, stain and biological-sample handling follow the teacher’s method and risk assessment.",
        "scene": "bio:microscopy"
      },
      {
        "title": "Record what is observed",
        "text": "Make a large, clear biological drawing with single outlines and ruled label lines; include a title and a magnification or suitable scale. Draw visible structures rather than add every structure from a textbook model. A school light microscope will not resolve every structure shown in a simplified cell diagram. Compare plant and animal observations, calculate sizes from supplied measurements and state estimation limits. This online model is an illustration, not a real micrograph or proof of hands-on competence; supervised observation and your own drawing remain necessary.",
        "scene": "bio:microscopy"
      }
    ],
    "practice": [
      {
        "prompt": "Which change improves ability to distinguish nearby points?",
        "options": [
          "Higher resolving power",
          "Only printing the same blurred image larger",
          "Adding more decorative labels"
        ],
        "answer": 0,
        "why": "Resolution is detail separation, distinct from magnification.",
        "concept": "bio.microscopes",
        "id": "bio.p-microscopy1"
      },
      {
        "prompt": "A12 mm image represents a30 μm cell. Magnification?",
        "type": "number",
        "answer": 400,
        "tolerance": 0.001,
        "unit": "×",
        "why": "12 mm=12,000 μm;12,000÷30=400.",
        "concept": "bio.magnification",
        "id": "bio.p-microscopy2"
      },
      {
        "prompt": "At magnification500, a15 mm image represents what real length?",
        "type": "number",
        "answer": 30,
        "tolerance": 0.001,
        "unit": "μm",
        "why": "15,000 μm÷500=30 μm.",
        "concept": "bio.magnification",
        "id": "bio.p-microscopy3"
      },
      {
        "prompt": "Why lower a coverslip gently at an angle?",
        "options": [
          "To reduce trapped air bubbles",
          "To make every cell larger in reality",
          "To remove the cell membrane"
        ],
        "answer": 0,
        "why": "Air bubbles obscure the specimen.",
        "concept": "bio.microscopy-method",
        "id": "bio.p-microscopy4"
      }
    ],
    "check": [
      {
        "prompt": "Electron microscopy increased understanding because it…",
        "options": [
          "Resolves finer sub-cellular detail than light microscopy",
          "Only makes all objects physically bigger",
          "Removes the need for evidence"
        ],
        "answer": 0,
        "why": "Its greater resolving power reveals structures not distinguished by light microscopy.",
        "concept": "bio.microscopes",
        "id": "bio.c-microscopy1"
      },
      {
        "prompt": "A blurred image is digitally enlarged. What must be true?",
        "options": [
          "Its size increases but no missing fine detail is recovered",
          "Its resolution necessarily improves",
          "Every sub-cellular structure becomes visible"
        ],
        "answer": 0,
        "why": "Magnification alone does not create information.",
        "concept": "bio.microscopes",
        "id": "bio.c-microscopy2"
      },
      {
        "prompt": "A24 mm image represents a60 μm cell. Magnification?",
        "type": "number",
        "answer": 400,
        "tolerance": 0.001,
        "unit": "×",
        "why": "24,000 μm÷60 μm=400.",
        "concept": "bio.magnification",
        "id": "bio.c-microscopy3"
      },
      {
        "prompt": "At magnification800, an image is32 mm long. Real cell length?",
        "type": "number",
        "answer": 40,
        "tolerance": 0.001,
        "unit": "μm",
        "why": "32,000 μm÷800=40 μm.",
        "concept": "bio.magnification",
        "id": "bio.c-microscopy4"
      },
      {
        "prompt": "A cell is25 μm long and magnified200 times. Image length in mm?",
        "type": "number",
        "answer": 5,
        "tolerance": 0.001,
        "unit": "mm",
        "why": "25×200=5000 μm=5 mm.",
        "concept": "bio.magnification",
        "id": "bio.c-microscopy5"
      },
      {
        "prompt": "Why begin with the low-power objective?",
        "options": [
          "It gives a wider view for finding and centring the specimen",
          "It has the greatest possible resolving power",
          "It makes a coverslip unnecessary"
        ],
        "answer": 0,
        "why": "Finding the specimen first makes later higher-power viewing easier.",
        "concept": "bio.microscopy-method",
        "id": "bio.c-microscopy6"
      },
      {
        "prompt": "Which record best meets the microscopy practical purpose?",
        "options": [
          "Observed plant and animal cells drawn and labelled, with magnification or scale",
          "Only a copied model without scale",
          "Only the microscope brand name"
        ],
        "answer": 0,
        "why": "The practical requires observation, drawing, labelling and a magnification scale.",
        "concept": "bio.microscopy-method",
        "id": "bio.c-microscopy7"
      },
      {
        "prompt": "A symbolic scale bar below represents20 μm. If the cell is three bar-lengths long, its real length is…",
        "options": [
          "60 μm",
          "3 μm",
          "20 mm"
        ],
        "answer": 0,
        "why": "Three times20 μm is60 μm; use the scale rather than screen size.",
        "concept": "bio.magnification",
        "figure": {
          "kind": "bio-scale",
          "micrometres": 20
        },
        "id": "bio.c-microscopy8"
      },
      {
        "prompt": "Which is2 μm in metres?",
        "options": [
          "2×10⁻⁶ m",
          "2×10⁻² m",
          "2×10⁶ m"
        ],
        "answer": 0,
        "why": "Micro means10⁻⁶; standard form uses a coefficient from1 up to10.",
        "concept": "bio.magnification",
        "id": "bio.c-microscopy9"
      }
    ],
    "skills": [
      "WS1.1",
      "WS4.4",
      "MS1a",
      "MS1b",
      "MS2h",
      "MS3b",
      "AT1",
      "AT7"
    ],
    "prerequisites": [
      "science.biology.cells.cell-types",
      "science.biology.cells.cell-structures"
    ],
    "separate": false,
    "higher": false
  }
];
export const biologyCellConcepts={
  "bio.cell-groups": "Eukaryotic and prokaryotic cells",
  "bio.bacterial-dna": "Bacterial DNA and plasmids",
  "bio.cell-scale": "Cell scale and orders of magnitude",
  "bio.organelles": "Cell structures and their functions",
  "bio.plant-features": "Plant-cell features and exceptions",
  "bio.relative-size": "Estimated relative sizes and areas",
  "bio.microscopes": "Microscope magnification and resolution",
  "bio.magnification": "Magnification calculations and units",
  "bio.microscopy-method": "Microscopy preparation, focusing and drawing"
};
