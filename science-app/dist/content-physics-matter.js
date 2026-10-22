export const mat1Lessons=[
  {
    "id": "science.physics.electricity.static-charge",
    "title": "Static charge: transferring electrons",
    "short": "Static charge: transferring electrons",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.5.1"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "A neutral object contains equal positive and negative charge overall. In ordinary rubbing, electrons transfer between certain insulating materials; protons remain bound in nuclei. The object gaining electrons becomes negative. The one losing them has an equal positive charge. Rubbing transfers charge rather than creating it.",
    "learn": [
      {
        "title": "Start with balanced charge",
        "text": "A neutral object contains equal positive and negative charge overall. In ordinary rubbing, electrons transfer between certain insulating materials; protons remain bound in nuclei. The object gaining electrons becomes negative. The one losing them has an equal positive charge. Rubbing transfers charge rather than creating it.",
        "scene": "mat1:charge:0",
        "process": false
      },
      {
        "title": "Follow electrons across the boundary",
        "text": "Our two surfaces begin neutral with eight positive and eight negative markers each. Transfer three electrons from A to B: A has a deficit of three and B a surplus of three. Total electrons remain sixteen. The loop resets the example; it does not suggest that every material transfers in the same direction or that protons move.",
        "scene": "mat1:charge:1",
        "process": true,
        "processFilm": "mat1-charge"
      },
      {
        "title": "Explain the signs",
        "text": "A positive object has lost some electrons; it has not gained protons. An insulating surface can retain charge locally because charge does not flow freely through it. Whether a particular pair gains or loses electrons depends on the materials and conditions. The simplified counts represent charge balance, not eight real atoms or a calibrated charging rate.",
        "scene": "mat1:charge:2",
        "process": false
      },
      {
        "title": "Predict before transferring",
        "text": "Choose which surface gains electrons and whether two or four transfer. Predict the gaining surface’s final electron count, starting from eight. Compare all four cases, explaining why gain and loss are equal and opposite. Use conceptual school demonstrations; no high-voltage apparatus is needed here.",
        "scene": "mat1:charge:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.current"
    ],
    "skills": [
      "WS1.2"
    ],
    "widget": "mat1-charge",
    "practice": [
      {
        "id": "mat1.p-charge1",
        "prompt": "Rubbing certain insulators transfers…",
        "options": [
          "Electrons",
          "Protons between nuclei",
          "Newly created charge"
        ],
        "answer": 0,
        "why": "Electrons can move between surfaces.",
        "concept": "mat1.charge"
      },
      {
        "id": "mat1.p-charge2",
        "prompt": "An object gaining electrons becomes…",
        "options": [
          "Positive",
          "Negative",
          "Necessarily neutral"
        ],
        "answer": 1,
        "why": "Electrons carry negative charge.",
        "concept": "mat1.charge"
      },
      {
        "id": "mat1.p-charge3",
        "prompt": "An object losing electrons becomes…",
        "options": [
          "Negative",
          "A new chemical element",
          "Positive"
        ],
        "answer": 2,
        "why": "Its positive charge is no longer balanced.",
        "concept": "mat1.charge"
      },
      {
        "id": "mat1.p-charge4",
        "prompt": "The charges on two initially neutral rubbed objects are…",
        "options": [
          "Equal in magnitude and opposite in sign",
          "Always both negative",
          "Created from nothing"
        ],
        "answer": 0,
        "why": "Charge is conserved across the pair.",
        "concept": "mat1.charge"
      }
    ],
    "check": [
      {
        "id": "mat1.c-charge5",
        "prompt": "A neutral model has 10 positive and10 negative markers. Losing2 electrons leaves…",
        "options": [
          "12 negative markers",
          "A positive deficit of2 electrons",
          "A negative surplus of2"
        ],
        "answer": 1,
        "why": "Positive markers remain10; negative markers become8.",
        "concept": "mat1.charge"
      },
      {
        "id": "mat1.c-charge6",
        "prompt": "A second neutral model gains those2 electrons. Its final electron count is…",
        "options": [
          "8",
          "10",
          "12"
        ],
        "answer": 2,
        "why": "10+2=12; the pair conserves20 electrons.",
        "concept": "mat1.charge"
      },
      {
        "id": "mat1.c-charge7",
        "prompt": "Why do protons stay in place during ordinary rubbing?",
        "options": [
          "They remain bound within nuclei",
          "They have no charge",
          "Every proton becomes an electron"
        ],
        "answer": 0,
        "why": "Rubbing does not transfer atomic nuclei.",
        "concept": "mat1.charge"
      },
      {
        "id": "mat1.c-charge8",
        "prompt": "A positive object is best explained as…",
        "options": [
          "An excess of newly produced protons",
          "An electron deficit",
          "A store of positive electrons"
        ],
        "answer": 1,
        "why": "Positive charge can result from losing negative electrons.",
        "concept": "mat1.charge"
      },
      {
        "id": "mat1.c-charge9",
        "prompt": "A model repeats the same transfer every few seconds. This means…",
        "options": [
          "Every insulator charges at that fixed rate",
          "Charge is created on every loop",
          "Playback repeats an example, not a real charging rate"
        ],
        "answer": 2,
        "why": "Timing is symbolic.",
        "concept": "mat1.charge"
      },
      {
        "id": "mat1.c-charge10",
        "prompt": "If one object gains four electrons, the other…",
        "options": [
          "Loses four electrons",
          "Gains four protons",
          "Must also gain four electrons"
        ],
        "answer": 0,
        "why": "The transfer has two ends.",
        "concept": "mat1.charge"
      }
    ]
  },
  {
    "id": "science.physics.electricity.static-forces",
    "title": "Static forces: attraction and repulsion",
    "short": "Static forces: attraction and repulsion",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.5.1"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Two charged objects exert forces without touching: like signs repel and unlike signs attract. Positive/positive and negative/negative pairs repel; positive/negative pairs attract. The gap between the objects matters: the effect is a non-contact force, not a hidden connecting string.",
    "learn": [
      {
        "title": "Predict the interaction",
        "text": "Two charged objects exert forces without touching: like signs repel and unlike signs attract. Positive/positive and negative/negative pairs repel; positive/negative pairs attract. The gap between the objects matters: the effect is a non-contact force, not a hidden connecting string.",
        "scene": "mat1:forces:0",
        "process": false
      },
      {
        "title": "Compare signs, then observe",
        "text": "Two suspended charged objects can move apart or towards each other. Our film compares like and unlike signs with arrows before showing the response. The objects never overlap or collide. Their small displacement illustrates force direction; it is not a force measurement or a calculation of acceleration.",
        "scene": "mat1:forces:1",
        "process": true,
        "processFilm": "mat1-forces"
      },
      {
        "title": "Read the evidence carefully",
        "text": "Repulsion between two objects is evidence that both are charged with the same sign. Attraction alone does not establish opposite net charges: a charged object can also attract a neutral object when charge within it redistributes. That neutral-object caveat supports interpreting evidence; detailed polarisation theory is not required here.",
        "scene": "mat1:forces:2",
        "process": false
      },
      {
        "title": "Control the comparison",
        "text": "Keep object geometry and gap fixed when comparing signs. Predict all four sign combinations before revealing direction. Forces act across a gap. We do not attach invented force values or require Coulomb’s law; distance effects are examined qualitatively in the electric-field lesson.",
        "scene": "mat1:forces:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.static-charge"
    ],
    "skills": [
      "WS1.2"
    ],
    "widget": "mat1-forces",
    "practice": [
      {
        "id": "mat1.p-forces1",
        "prompt": "Two positive charges…",
        "options": [
          "Repel",
          "Attract",
          "Exert force only when touching"
        ],
        "answer": 0,
        "why": "Like signs repel.",
        "concept": "mat1.forces"
      },
      {
        "id": "mat1.p-forces2",
        "prompt": "A positive and a negative charge…",
        "options": [
          "Repel",
          "Attract",
          "Cancel every force at a distance"
        ],
        "answer": 1,
        "why": "Unlike signs attract.",
        "concept": "mat1.forces"
      },
      {
        "id": "mat1.p-forces3",
        "prompt": "Two negative charges…",
        "options": [
          "Attract",
          "Cannot exert any force",
          "Repel"
        ],
        "answer": 2,
        "why": "Like signs repel regardless of sign.",
        "concept": "mat1.forces"
      },
      {
        "id": "mat1.p-forces4",
        "prompt": "Electrostatic attraction across a gap is a…",
        "options": [
          "Non-contact force",
          "Contact force requiring a wire",
          "Chemical bond in every case"
        ],
        "answer": 0,
        "why": "No contact is needed.",
        "concept": "mat1.forces"
      }
    ],
    "check": [
      {
        "id": "mat1.c-forces5",
        "prompt": "Two suspended charged objects move apart. Best inference?",
        "options": [
          "Their signs must be opposite",
          "Their signs are alike",
          "One must be neutral"
        ],
        "answer": 1,
        "why": "Repulsion indicates like charges.",
        "concept": "mat1.forces"
      },
      {
        "id": "mat1.c-forces6",
        "prompt": "A charged object attracts an unknown object. Attraction alone…",
        "options": [
          "Proves both are positive",
          "Proves the unknown object is negative",
          "Does not prove opposite net charges"
        ],
        "answer": 2,
        "why": "A neutral object can be attracted too.",
        "concept": "mat1.forces"
      },
      {
        "id": "mat1.c-forces7",
        "prompt": "For a fair sign comparison keep…",
        "options": [
          "Gap and geometry fixed",
          "Only the page colour fixed",
          "Every other condition changing"
        ],
        "answer": 0,
        "why": "Control alternative causes.",
        "concept": "mat1.forces"
      },
      {
        "id": "mat1.c-forces8",
        "prompt": "A negative rod and a positive suspended object…",
        "options": [
          "Push apart",
          "Pull towards each other",
          "Need contact before any force"
        ],
        "answer": 1,
        "why": "Opposite charges attract.",
        "concept": "mat1.forces"
      },
      {
        "id": "mat1.c-forces9",
        "prompt": "Why are arrows included alongside colours?",
        "options": [
          "To represent literal electrons flowing through air",
          "To calculate a numerical force from arrow pixels",
          "To show force direction without relying on colour"
        ],
        "answer": 2,
        "why": "Arrows encode direction; length is qualitative.",
        "concept": "mat1.forces"
      },
      {
        "id": "mat1.c-forces10",
        "prompt": "A model’s small displacement is…",
        "options": [
          "An illustration of response, not calibrated force",
          "A universal real displacement for all charges",
          "Evidence that charge has been consumed"
        ],
        "answer": 0,
        "why": "The model is bounded.",
        "concept": "mat1.forces"
      }
    ]
  },
  {
    "id": "science.physics.electricity.electric-fields",
    "title": "Electric fields and sparks",
    "short": "Electric fields and sparks",
    "topicId": "science.physics.electricity",
    "refs": [
      "2.5.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "A charged object creates an electric field around it. Another charge in that field experiences a force. The field is strongest close to the source and weaker farther away; the force on the same test charge is stronger when it is closer. We compare distance qualitatively, without a field-strength equation.",
    "learn": [
      {
        "title": "A field explains force at a distance",
        "text": "A charged object creates an electric field around it. Another charge in that field experiences a force. The field is strongest close to the source and weaker farther away; the force on the same test charge is stronger when it is closer. We compare distance qualitatively, without a field-strength equation.",
        "scene": "mat1:fields:0",
        "process": false
      },
      {
        "title": "Charge build-up can lead to a spark",
        "text": "As charge builds up, the field across an air gap can become strong enough for the air to conduct. Charge then flows across the gap in a discharge, reducing the charge imbalance and field. The film shows build-up, a brief conducting path and discharge; it is not instructions for producing a spark.",
        "scene": "mat1:fields:1",
        "process": true,
        "processFilm": "mat1-fields"
      },
      {
        "title": "Draw a radial field",
        "text": "For an isolated charged sphere draw straight radial lines around the whole sphere. Arrow direction is the force direction on a positive test charge: outward from positive, inward towards negative. Lines are a representation, not material threads or electron tracks. Closer line spacing represents stronger field near the sphere; a negative test charge would feel force opposite to the arrows.",
        "scene": "mat1:fields:2",
        "process": false
      },
      {
        "title": "Test sign and distance",
        "text": "Select positive or negative source and near or far observation point. Predict both radial direction and relative strength for a positive test charge. Compare all four states. Our equal-size source and test charges stay fixed in magnitude; there is no numerical force calibration. Drawing your own complete radial pattern remains additional evidence.",
        "scene": "mat1:fields:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.electricity.static-forces"
    ],
    "skills": [
      "WS1.2",
      "WS1.5"
    ],
    "widget": "mat1-fields",
    "practice": [
      {
        "id": "mat1.p-fields1",
        "prompt": "The field around an isolated positive sphere points…",
        "options": [
          "Radially outward",
          "Radially inward",
          "In circles with no radial direction"
        ],
        "answer": 0,
        "why": "Use force direction on a positive test charge.",
        "concept": "mat1.fields"
      },
      {
        "id": "mat1.p-fields2",
        "prompt": "Around an isolated negative sphere it points…",
        "options": [
          "Radially outward",
          "Radially inward",
          "Only upwards"
        ],
        "answer": 1,
        "why": "Field direction uses a positive test charge.",
        "concept": "mat1.fields"
      },
      {
        "id": "mat1.p-fields3",
        "prompt": "For the same source/test charges, force is stronger…",
        "options": [
          "Farther away in every case",
          "Only when they touch",
          "Closer to the source"
        ],
        "answer": 2,
        "why": "The field is stronger close to the charge.",
        "concept": "mat1.fields"
      },
      {
        "id": "mat1.p-fields4",
        "prompt": "Field lines are…",
        "options": [
          "A representation of field direction and strength",
          "Material strings that pull charges",
          "Tracks followed by protons during rubbing"
        ],
        "answer": 0,
        "why": "They are a model of the field.",
        "concept": "mat1.fields"
      }
    ],
    "check": [
      {
        "id": "mat1.c-fields5",
        "prompt": "A positive test charge near a positive sphere is pushed…",
        "options": [
          "Inward",
          "Outward",
          "Around a circular orbit necessarily"
        ],
        "answer": 1,
        "why": "Positive is repelled by positive.",
        "concept": "mat1.fields"
      },
      {
        "id": "mat1.c-fields6",
        "prompt": "A positive test charge near a negative sphere is pulled…",
        "options": [
          "Outward",
          "Only if a wire joins them",
          "Inward"
        ],
        "answer": 2,
        "why": "Unlike charges attract across a gap.",
        "concept": "mat1.fields"
      },
      {
        "id": "mat1.c-fields7",
        "prompt": "Moving the same test charge farther away makes its force…",
        "options": [
          "Weaker",
          "Always stronger",
          "Exactly zero immediately"
        ],
        "answer": 0,
        "why": "Field strength decreases with distance.",
        "concept": "mat1.fields"
      },
      {
        "id": "mat1.c-fields8",
        "prompt": "A spark can occur when…",
        "options": [
          "Protons are rubbed out of nuclei",
          "A strong field makes the air gap conducting",
          "Electric field lines become solid wires"
        ],
        "answer": 1,
        "why": "A conducting air path permits discharge.",
        "concept": "mat1.fields"
      },
      {
        "id": "mat1.c-fields9",
        "prompt": "After discharge reduces the charge imbalance, the field generally…",
        "options": [
          "Must increase without limit",
          "Creates extra electrons",
          "Weakens"
        ],
        "answer": 2,
        "why": "The source imbalance has decreased.",
        "concept": "mat1.fields"
      },
      {
        "id": "mat1.c-fields10",
        "prompt": "For an isolated sphere the field pattern should have…",
        "options": [
          "Radial lines distributed around the sphere",
          "Parallel lines on only one side",
          "Closed loops with no arrows"
        ],
        "answer": 0,
        "why": "Arrows point out for positive and in for negative.",
        "concept": "mat1.fields"
      }
    ]
  },
  {
    "id": "science.physics.particle-model-of-matter.density",
    "title": "Density: measurement and particle spacing",
    "short": "Density: measurement and particle spacing",
    "topicId": "science.physics.particle-model-of-matter",
    "refs": [
      "3.1.1"
    ],
    "combinedRefs": [
      "3.1.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Density is mass divided by volume: ρ = m/V. SI units are kg/m³, with mass in kg and volume in m³. Rearrange m = ρV or V = m/ρ. A 0.12 kg sample occupying0.00004 m³ has density3000 kg/m³. Using g and cm³ consistently gives g/cm³;1 g/cm³ =1000 kg/m³.",
    "learn": [
      {
        "title": "Mass in a given volume",
        "text": "Density is mass divided by volume: ρ = m/V. SI units are kg/m³, with mass in kg and volume in m³. Rearrange m = ρV or V = m/ρ. A 0.12 kg sample occupying0.00004 m³ has density3000 kg/m³. Using g and cm³ consistently gives g/cm³;1 g/cm³ =1000 kg/m³.",
        "scene": "mat1:density:0",
        "process": false
      },
      {
        "title": "Measure an irregular solid by displacement",
        "text": "An irregular non-absorbing solid raises a measuring-cylinder reading from30 to50 cm³ when fully submerged without trapped air. Its volume is20 cm³, not50 cm³. With mass60 g, density is3 g/cm³. The film shows the before/after readings; water displaced equals the immersed solid volume under these assumptions.",
        "scene": "mat1:density:1",
        "process": true,
        "processFilm": "mat1-density"
      },
      {
        "title": "Choose the apparatus and account",
        "text": "For a regular cuboid measure length, width and height and multiply for volume; select ruler, callipers or micrometer to suit size/resolution. Weigh it on a suitable balance. For a liquid subtract the empty-container mass from container-plus-liquid mass and read liquid volume. Read a meniscus at eye level, repeat measurements and consider resolution, bubbles, absorption or incomplete immersion. This prepares Physics RP5 / Trilogy RP17, AT1; physical competence still needs real apparatus.",
        "scene": "mat1:density:2",
        "process": false
      },
      {
        "title": "Connect density to particles",
        "text": "Solids usually have closely packed particles vibrating about fixed positions; liquids have close but disordered particles that move past each other; gases have widely separated particles. More empty space lowers density for a fixed number/type of particles. Solid and liquid density ordering is not universal: ice is less dense than liquid water. When a closed sample expands its mass stays constant and density decreases. Compare three measurement methods and two supplied samples; diagrams are not scale measurements.",
        "scene": "mat1:density:3",
        "process": false
      }
    ],
    "prerequisites": [
      "particles"
    ],
    "skills": [
      "WS1.2",
      "MS1a",
      "MS1b",
      "MS1c",
      "MS3b",
      "MS3c",
      "AT1"
    ],
    "widget": "mat1-density",
    "practice": [
      {
        "id": "mat1.p-density1",
        "prompt": "Density is…",
        "options": [
          "Mass ÷ volume",
          "Volume ÷ mass",
          "Mass × volume"
        ],
        "answer": 0,
        "why": "ρ = m/V.",
        "concept": "mat1.density"
      },
      {
        "id": "mat1.p-density2",
        "prompt": "SI density units are…",
        "options": [
          "kg × m³",
          "kg/m³",
          "m³/kg"
        ],
        "answer": 1,
        "why": "Use kilograms divided by cubic metres.",
        "concept": "mat1.density"
      },
      {
        "id": "mat1.p-density3",
        "prompt": "An irregular solid displaces volume equal to…",
        "options": [
          "The final reading alone",
          "The initial reading alone",
          "The increase in cylinder reading"
        ],
        "answer": 2,
        "why": "Subtract before from after.",
        "concept": "mat1.density"
      },
      {
        "id": "mat1.p-density4",
        "prompt": "For liquid mass subtract…",
        "options": [
          "Empty-container mass from filled-container mass",
          "Liquid volume from container mass",
          "Filled-container mass from zero"
        ],
        "answer": 0,
        "why": "Tare or subtract the container.",
        "concept": "mat1.density"
      }
    ],
    "check": [
      {
        "id": "mat1.c-density5",
        "prompt": "A fresh sample has mass80 g and volume20 cm³. Density?",
        "options": [
          "0.25 g/cm³",
          "4 g/cm³",
          "1600 g/cm³"
        ],
        "answer": 1,
        "why": "80/20=4.",
        "concept": "mat1.density"
      },
      {
        "id": "mat1.c-density6",
        "prompt": "A 0.2 kg block occupies0.0001 m³. Density?",
        "options": [
          "0.0005 kg/m³",
          "0.00002 kg/m³",
          "2000 kg/m³"
        ],
        "answer": 2,
        "why": "0.2/0.0001=2000.",
        "concept": "mat1.density"
      },
      {
        "id": "mat1.c-density7",
        "prompt": "Cylinder readings change from40 to65 cm³. Object volume?",
        "options": [
          "25 cm³",
          "65 cm³",
          "105 cm³"
        ],
        "answer": 0,
        "why": "65−40=25.",
        "concept": "mat1.density"
      },
      {
        "id": "mat1.c-density8",
        "prompt": "A filled container is95 g; empty container35 g; liquid volume50 cm³. Density?",
        "options": [
          "1.9 g/cm³",
          "1.2 g/cm³",
          "2.6 g/cm³"
        ],
        "answer": 1,
        "why": "Liquid mass60g;60/50=1.2.",
        "concept": "mat1.density"
      },
      {
        "id": "mat1.c-density9",
        "prompt": "A closed sample expands at constant mass. Its density…",
        "options": [
          "Increases",
          "Must stay constant because mass does",
          "Decreases"
        ],
        "answer": 2,
        "why": "The volume denominator increases.",
        "concept": "mat1.density"
      },
      {
        "id": "mat1.c-density10",
        "prompt": "Which statement about particle spacing is sound?",
        "options": [
          "Gas particles are usually much farther apart than liquid particles",
          "Every solid must be denser than its liquid",
          "Particles themselves swell to make a gas"
        ],
        "answer": 0,
        "why": "Arrangement/spacing change; water is a known ordering exception.",
        "concept": "mat1.density"
      }
    ]
  },
  {
    "id": "science.physics.particle-model-of-matter.states",
    "title": "Changes of state and conserved mass",
    "short": "Changes of state and conserved mass",
    "topicId": "science.physics.particle-model-of-matter",
    "refs": [
      "3.1.2"
    ],
    "combinedRefs": [
      "3.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "In a solid, particles vibrate around fixed positions. In a liquid they stay close but move past one another; a gas has widely spaced moving particles. A change of state changes their arrangement and motion, not the chemical identity of the particles. Particle diameter is fixed in our diagrams; view-box sizes are symbolic.",
    "learn": [
      {
        "title": "Same particles, different arrangement",
        "text": "In a solid, particles vibrate around fixed positions. In a liquid they stay close but move past one another; a gas has widely spaced moving particles. A change of state changes their arrangement and motion, not the chemical identity of the particles. Particle diameter is fixed in our diagrams; view-box sizes are symbolic.",
        "scene": "mat1:states:0",
        "process": false
      },
      {
        "title": "Follow a sealed sample",
        "text": "Melting changes solid to liquid; freezing reverses it. Boiling and evaporation change liquid to gas, while condensation changes gas to liquid. Sublimation changes solid directly to gas. In a sealed sample, the same particles remain and mass is conserved throughout. Our loop returns to the starting state as a teaching sequence, not a natural clock or a prediction of transition temperatures.",
        "scene": "mat1:states:1",
        "process": true,
        "processFilm": "mat1-states"
      },
      {
        "title": "Physical change, not reaction",
        "text": "If a state change is reversed, the material recovers its original properties: this is a physical change. A chemical reaction produces different substances. In an open container, measured liquid mass can fall during evaporation because particles leave the measured system; they are not destroyed. Include the escaped vapour to conserve the total mass.",
        "scene": "mat1:states:2",
        "process": false
      },
      {
        "title": "Separate boiling and evaporation",
        "text": "Evaporation occurs at a liquid surface and can happen below its boiling point. Boiling occurs throughout the liquid at its boiling temperature for the conditions. Compare five named processes and two sealed-sample masses. Predict final state and whether sealed mass changes before revealing. Internal energy, latent heat and heating/cooling graphs follow in later lessons; this model does not supply their quantitative teaching.",
        "scene": "mat1:states:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.particle-model-of-matter.density"
    ],
    "skills": [
      "WS1.2"
    ],
    "widget": "mat1-states",
    "practice": [
      {
        "id": "mat1.p-states1",
        "prompt": "Melting changes…",
        "options": [
          "Solid to liquid",
          "Liquid to solid",
          "Gas to liquid"
        ],
        "answer": 0,
        "why": "Name the starting and finishing states.",
        "concept": "mat1.states"
      },
      {
        "id": "mat1.p-states2",
        "prompt": "Condensation changes…",
        "options": [
          "Liquid to gas",
          "Gas to liquid",
          "Solid directly to gas"
        ],
        "answer": 1,
        "why": "Gas becomes liquid.",
        "concept": "mat1.states"
      },
      {
        "id": "mat1.p-states3",
        "prompt": "During a state change in a sealed sample, mass…",
        "options": [
          "Is created when gas forms",
          "Must fall to zero",
          "Is conserved"
        ],
        "answer": 2,
        "why": "No particles leave or are destroyed.",
        "concept": "mat1.states"
      },
      {
        "id": "mat1.p-states4",
        "prompt": "Sublimation is…",
        "options": [
          "Solid directly to gas",
          "Liquid to solid",
          "Gas to liquid"
        ],
        "answer": 0,
        "why": "It bypasses the liquid state.",
        "concept": "mat1.states"
      }
    ],
    "check": [
      {
        "id": "mat1.c-states5",
        "prompt": "A sealed40 g sample melts and then evaporates fully. Final total mass?",
        "options": [
          "0 g",
          "40 g",
          "80 g"
        ],
        "answer": 1,
        "why": "Same material retained inside the closed boundary.",
        "concept": "mat1.states"
      },
      {
        "id": "mat1.c-states6",
        "prompt": "Freezing is the change from…",
        "options": [
          "Solid to gas",
          "Gas to liquid",
          "Liquid to solid"
        ],
        "answer": 2,
        "why": "It reverses melting.",
        "concept": "mat1.states"
      },
      {
        "id": "mat1.c-states7",
        "prompt": "An open dish loses measured mass during evaporation because…",
        "options": [
          "Particles leave the measured dish into the air",
          "Particles are destroyed",
          "Every particle becomes lighter"
        ],
        "answer": 0,
        "why": "Include the vapour in the total system.",
        "concept": "mat1.states"
      },
      {
        "id": "mat1.c-states8",
        "prompt": "A change reversible to the material’s original properties is…",
        "options": [
          "Necessarily a reaction forming new substances",
          "Physical",
          "A transfer of protons between nuclei"
        ],
        "answer": 1,
        "why": "State changes do not create a new substance.",
        "concept": "mat1.states"
      },
      {
        "id": "mat1.c-states9",
        "prompt": "Compared with boiling, evaporation…",
        "options": [
          "Must occur throughout the liquid only",
          "Requires particles to grow",
          "Can occur at the surface below boiling temperature"
        ],
        "answer": 2,
        "why": "Both make gas; the process conditions differ.",
        "concept": "mat1.states"
      },
      {
        "id": "mat1.c-states10",
        "prompt": "In a gas the particles…",
        "options": [
          "Are widely separated, rather than individually enlarged",
          "Are larger versions of liquid particles",
          "Have disappeared between collisions"
        ],
        "answer": 0,
        "why": "Particle spacing changes, not particle identity or size.",
        "concept": "mat1.states"
      }
    ]
  }
];
export const mat1Concepts={"mat1.charge": "Static charge: transferring electrons", "mat1.forces": "Static forces: attraction and repulsion", "mat1.fields": "Electric fields and sparks", "mat1.density": "Density: measurement and particle spacing", "mat1.states": "Changes of state and conserved mass"};
