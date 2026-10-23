export const frc1Lessons=[
  {
    "id": "science.physics.forces.vectors",
    "title": "Scalars, vectors and interactions",
    "short": "Scalars, vectors and interactions",
    "topicId": "science.physics.forces",
    "refs": [
      "5.1.1",
      "5.1.2"
    ],
    "combinedRefs": [
      "5.1.1",
      "5.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Scalars have magnitude only: distance, speed, mass, time and energy. Vectors also have direction: displacement, velocity, acceleration and force. An arrow shows direction; its length represents magnitude using a stated scale. Turning a velocity arrow changes velocity even when its length stays the same.",
    "learn": [
      {
        "title": "Magnitude and direction",
        "text": "Scalars have magnitude only: distance, speed, mass, time and energy. Vectors also have direction: displacement, velocity, acceleration and force. An arrow shows direction; its length represents magnitude using a stated scale. Turning a velocity arrow changes velocity even when its length stays the same.",
        "scene": "frc1:vectors:0",
        "process": false
      },
      {
        "title": "Two objects, two forces",
        "text": "A force is a push or pull arising from an interaction. Contact interactions include friction, air resistance, tension and normal contact. Gravity, electrostatic and magnetic interactions act without physical contact. Each object exerts a force on the other; name the objects and what acts on what.",
        "scene": "frc1:vectors:1",
        "process": false
      },
      {
        "title": "Read a scaled arrow",
        "text": "With 1 cm representing 5 N, a 3 cm arrow represents 15 N in the arrow’s direction. Reversing the arrow reverses the represented force; it does not make its magnitude negative. A signed number can encode direction along a chosen straight-line axis.",
        "scene": "frc1:vectors:2",
        "process": false
      },
      {
        "title": "Build a vector representation",
        "text": "Choose a 10/20 N force and left/right direction. Predict the signed component when right is positive. The arrow scales with force; the block’s position is not a motion prediction. The model isolates one force and does not assert that a single force is the entire force system.",
        "scene": "frc1:vectors:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-vectors",
    "practice": [
      {
        "id": "frc1.vectors.practice1",
        "prompt": "Which is a vector?",
        "options": [
          "Force",
          "Mass",
          "Energy"
        ],
        "answer": 0,
        "why": "Force needs a magnitude and direction.",
        "concept": "frc1.vectors"
      },
      {
        "id": "frc1.vectors.practice2",
        "prompt": "Air resistance is…",
        "options": [
          "A gravitational field only",
          "A contact interaction with air",
          "A force requiring empty space"
        ],
        "answer": 1,
        "why": "Air molecules interact with the moving object.",
        "concept": "frc1.vectors"
      },
      {
        "id": "frc1.vectors.practice3",
        "prompt": "A vector arrow length represents…",
        "options": [
          "Time",
          "Object mass only",
          "Magnitude on a stated scale"
        ],
        "answer": 2,
        "why": "The arrowhead gives direction.",
        "concept": "frc1.vectors"
      }
    ],
    "check": [
      {
        "id": "frc1.vectors.check1",
        "prompt": "A 4 cm arrow at 2 N/cm represents…",
        "options": [
          "8 N in the arrow direction",
          "2 N with no direction",
          "6 N"
        ],
        "answer": 0,
        "why": "Multiply diagram length by the force scale.",
        "concept": "frc1.vectors"
      },
      {
        "id": "frc1.vectors.check2",
        "prompt": "A magnet attracts an iron object without touching. This is…",
        "options": [
          "Contact friction",
          "A non-contact magnetic interaction",
          "No interaction"
        ],
        "answer": 1,
        "why": "Magnetic forces can act through space.",
        "concept": "frc1.vectors"
      },
      {
        "id": "frc1.vectors.check3",
        "prompt": "Two objects interact. Which description is complete?",
        "options": [
          "Only the heavier exerts a force",
          "Only the moving one exerts a force",
          "Each exerts a force on the other"
        ],
        "answer": 2,
        "why": "Name both objects and both forces.",
        "concept": "frc1.vectors"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.weight",
    "title": "Mass, weight and gravity",
    "short": "Mass, weight and gravity",
    "topicId": "science.physics.forces",
    "refs": [
      "5.1.3"
    ],
    "combinedRefs": [
      "5.1.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Mass measures the amount of matter in kilograms; weight is the gravitational force in newtons. A gravitational field gives objects weight even when there is no contact. Moving an object to a different field changes its weight while its mass can remain unchanged.",
    "learn": [
      {
        "title": "Mass is not a force",
        "text": "Mass measures the amount of matter in kilograms; weight is the gravitational force in newtons. A gravitational field gives objects weight even when there is no contact. Moving an object to a different field changes its weight while its mass can remain unchanged.",
        "scene": "frc1:weight:0",
        "process": false
      },
      {
        "title": "Use W = mg",
        "text": "Weight W = mass m × field strength g. Use the supplied g in N/kg. For 3 kg with g=9.8 N/kg, W=29.4 N. Weight is directly proportional to mass at fixed g. A calibrated newtonmeter measures weight, not kilograms of mass.",
        "scene": "frc1:weight:1",
        "process": false
      },
      {
        "title": "Centre of mass",
        "text": "For force diagrams, the weight can be represented as acting through the centre of mass toward the attracting body. The marker is a simplified whole-object representation, not a statement that all the object’s matter lies at one point.",
        "scene": "frc1:weight:2",
        "process": false
      },
      {
        "title": "Compare fields",
        "text": "Choose mass and gravitational field strength. Predict the newtonmeter reading, then reveal. The downward arrow changes in proportion to mg. The demonstration is stationary; support balances weight, and no fall-time calculation is implied.",
        "scene": "frc1:weight:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-weight",
    "practice": [
      {
        "id": "frc1.weight.practice1",
        "prompt": "Weight is measured in…",
        "options": [
          "Newtons",
          "Kilograms",
          "Joules"
        ],
        "answer": 0,
        "why": "Weight is a force.",
        "concept": "frc1.weight"
      },
      {
        "id": "frc1.weight.practice2",
        "prompt": "At fixed g, doubling mass…",
        "options": [
          "Halves weight",
          "Doubles weight",
          "Leaves weight unchanged"
        ],
        "answer": 1,
        "why": "W=mg gives direct proportionality.",
        "concept": "frc1.weight"
      },
      {
        "id": "frc1.weight.practice3",
        "prompt": "Weight is represented as acting through…",
        "options": [
          "The brightest corner",
          "The top surface only",
          "The centre of mass"
        ],
        "answer": 2,
        "why": "This is the effective point for the whole-object force.",
        "concept": "frc1.weight"
      }
    ],
    "check": [
      {
        "id": "frc1.weight.check1",
        "prompt": "A 5 kg object in g=2 N/kg has weight…",
        "options": [
          "10 N",
          "2.5 N",
          "5 kg"
        ],
        "answer": 0,
        "why": "Weight = mass × field strength =5×2=10 N.",
        "concept": "frc1.weight"
      },
      {
        "id": "frc1.weight.check2",
        "prompt": "Moving an object to a weaker field changes…",
        "options": [
          "Its mass necessarily",
          "Its weight",
          "Its proton count"
        ],
        "answer": 1,
        "why": "Mass is unchanged; W depends on g.",
        "concept": "frc1.weight"
      },
      {
        "id": "frc1.weight.check3",
        "prompt": "A newtonmeter is calibrated to measure…",
        "options": [
          "Density",
          "Speed",
          "Force"
        ],
        "answer": 2,
        "why": "Its extension can be calibrated in newtons.",
        "concept": "frc1.weight"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.resultant",
    "title": "Resultant forces in a straight line",
    "short": "Resultant forces in a straight line",
    "topicId": "science.physics.forces",
    "refs": [
      "5.1.4"
    ],
    "combinedRefs": [
      "5.1.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A resultant force has the same effect as the combined forces on the selected object. Choose the object first. Along a straight line, add forces in the same direction and subtract opposing magnitudes. State the direction of a nonzero answer.",
    "learn": [
      {
        "title": "Replace the whole force set",
        "text": "A resultant force has the same effect as the combined forces on the selected object. Choose the object first. Along a straight line, add forces in the same direction and subtract opposing magnitudes. State the direction of a nonzero answer.",
        "scene": "frc1:resultant:0",
        "process": false
      },
      {
        "title": "Zero resultant does not mean no forces",
        "text": "A rightward 12 N force and leftward 8 N force give 4 N right. Equal opposing forces give zero resultant. A zero resultant means no acceleration: the object may be at rest or already moving at constant velocity.",
        "scene": "frc1:resultant:1",
        "process": false
      },
      {
        "title": "Avoid mixing objects",
        "text": "A force diagram contains forces on one chosen object. The force that object exerts on another belongs to a different diagram. Two equal opposite interaction forces on different objects do not cancel within one object’s force account.",
        "scene": "frc1:resultant:2",
        "process": false
      },
      {
        "title": "Balance the arrows",
        "text": "Choose rightward drive and leftward resistance. Predict signed resultant (right positive). Arrows share a scale; no speed is inferred without mass and time. Try both a balanced and unbalanced condition.",
        "scene": "frc1:resultant:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-resultant",
    "practice": [
      {
        "id": "frc1.resultant.practice1",
        "prompt": "A resultant replaces…",
        "options": [
          "All forces on the chosen object",
          "Every object’s mass",
          "Only gravity"
        ],
        "answer": 0,
        "why": "It has the same combined effect.",
        "concept": "frc1.resultant"
      },
      {
        "id": "frc1.resultant.practice2",
        "prompt": "Zero resultant allows…",
        "options": [
          "Only rest",
          "Rest or constant velocity",
          "Mandatory speeding up"
        ],
        "answer": 1,
        "why": "No resultant means no acceleration.",
        "concept": "frc1.resultant"
      },
      {
        "id": "frc1.resultant.practice3",
        "prompt": "Forces in one free-body account must act on…",
        "options": [
          "Different interacting objects",
          "Any chosen collection at random",
          "The same selected object"
        ],
        "answer": 2,
        "why": "Do not mix an action–reaction pair between diagrams.",
        "concept": "frc1.resultant"
      }
    ],
    "check": [
      {
        "id": "frc1.resultant.check1",
        "prompt": "15 N right and 9 N left give…",
        "options": [
          "6 N right",
          "24 N right",
          "6 N left"
        ],
        "answer": 0,
        "why": "Choose right positive:15−9=6.",
        "concept": "frc1.resultant"
      },
      {
        "id": "frc1.resultant.check2",
        "prompt": "A steadily moving car can have…",
        "options": [
          "No resistive force",
          "Balanced driving and resistive forces",
          "A mandatory forward resultant"
        ],
        "answer": 1,
        "why": "Constant velocity requires zero resultant.",
        "concept": "frc1.resultant"
      },
      {
        "id": "frc1.resultant.check3",
        "prompt": "Two 7 N opposing forces on one object have resultant…",
        "options": [
          "14 N",
          "7 N",
          "0 N"
        ],
        "answer": 2,
        "why": "The vector sum is zero.",
        "concept": "frc1.resultant"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.components",
    "title": "Force components and scale diagrams",
    "short": "Force components and scale diagrams",
    "topicId": "science.physics.forces",
    "refs": [
      "5.1.4"
    ],
    "combinedRefs": [
      "5.1.4"
    ],
    "separate": false,
    "higher": true,
    "minutes": 35,
    "big": "A force may be resolved into two perpendicular components with the same combined effect as the original. Draw the original arrow and a right-angle component rectangle. The original is the diagonal; the component arrows are not extra physical forces.",
    "learn": [
      {
        "title": "One force, two components",
        "text": "A force may be resolved into two perpendicular components with the same combined effect as the original. Draw the original arrow and a right-angle component rectangle. The original is the diagonal; the component arrows are not extra physical forces.",
        "scene": "frc1:components:0",
        "process": false
      },
      {
        "title": "Construct a resultant",
        "text": "For two forces at an angle, draw them tip-to-tail at a stated scale. The arrow from the first tail to the final tip is the resultant. Measure its length and direction. A closed tip-to-tail polygon indicates equilibrium. AQA requires scale drawings here, not trigonometric recall.",
        "scene": "frc1:components:1",
        "process": false
      },
      {
        "title": "Check direction and scale",
        "text": "A 3 N horizontal and 4 N vertical pair gives a 5 N diagonal in a familiar scaled example. Its direction is upwards and rightwards. The larger component pulls the resultant direction closer to that axis. A single force can be represented by this equivalent pair.",
        "scene": "frc1:components:2",
        "process": false
      },
      {
        "title": "Explore perpendicular pairs",
        "text": "Choose horizontal3/6 N and vertical4/8 N. Predict the resultant magnitude using the labelled diagram: the combinations3–4 and6–8 are similar triangles; mixed cases are supplied as measured values. This constrained diagram supports interpretation, but does not replace drawing a scale diagram yourself.",
        "scene": "frc1:components:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-components",
    "practice": [
      {
        "id": "frc1.components.practice1",
        "prompt": "Perpendicular components together are…",
        "options": [
          "Equivalent to the original force",
          "Additional forces to add to it again",
          "Always opposite"
        ],
        "answer": 0,
        "why": "Do not double count the original and its components.",
        "concept": "frc1.components"
      },
      {
        "id": "frc1.components.practice2",
        "prompt": "A resultant is drawn from…",
        "options": [
          "The last tip back to the first tail",
          "The first tail to the last tip",
          "An arbitrary point"
        ],
        "answer": 1,
        "why": "This gives the combined vector displacement.",
        "concept": "frc1.components"
      },
      {
        "id": "frc1.components.practice3",
        "prompt": "For equilibrium a tip-to-tail force polygon…",
        "options": [
          "Must be a circle",
          "Has no arrows",
          "Closes"
        ],
        "answer": 2,
        "why": "The resultant is zero.",
        "concept": "frc1.components"
      }
    ],
    "check": [
      {
        "id": "frc1.components.check1",
        "prompt": "A 6 N/8 N perpendicular pair has resultant…",
        "options": [
          "10 N",
          "14 N",
          "2 N"
        ],
        "answer": 0,
        "why": "It is twice the3–4–5 scaled triangle.",
        "concept": "frc1.components"
      },
      {
        "id": "frc1.components.check2",
        "prompt": "Which skill is still needed beyond this model?",
        "options": [
          "Memorising its colour",
          "Constructing and measuring a scale drawing",
          "Adding the original force again"
        ],
        "answer": 1,
        "why": "A constrained diagram is not independent construction.",
        "concept": "frc1.components"
      },
      {
        "id": "frc1.components.check3",
        "prompt": "Increasing only the upward component turns the resultant…",
        "options": [
          "More horizontal",
          "Into zero automatically",
          "Closer to vertical"
        ],
        "answer": 2,
        "why": "The larger vertical share changes the direction.",
        "concept": "frc1.components"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.work",
    "title": "Work done by a force",
    "short": "Work done by a force",
    "topicId": "science.physics.forces",
    "refs": [
      "5.2"
    ],
    "combinedRefs": [
      "5.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A force does work when it causes displacement along its line of action. Work done W=Fs, with force in N and distance along that force in m. The result is energy transferred in joules. One joule equals one newton-metre of work.",
    "learn": [
      {
        "title": "Force through a displacement",
        "text": "A force does work when it causes displacement along its line of action. Work done W=Fs, with force in N and distance along that force in m. The result is energy transferred in joules. One joule equals one newton-metre of work.",
        "scene": "frc1:work:0",
        "process": false
      },
      {
        "title": "Keep the direction condition",
        "text": "A 20 N force acting through3 m along its direction transfers60 J. A sideways force with no displacement along it does not transfer work through that sideways component. A large static force with zero displacement does no mechanical work on the stationary object.",
        "scene": "frc1:work:1",
        "process": true,
        "processFilm": "frc1-work"
      },
      {
        "title": "Friction transfers energy",
        "text": "Work done against friction reduces mechanical energy stores and raises internal energy/temperature of the object and surroundings. Energy is conserved even when the useful mechanical transfer is smaller than the input. Use the existing Energy lessons for the linked store account.",
        "scene": "frc1:work:2",
        "process": false
      },
      {
        "title": "Move a block",
        "text": "Choose constant force and along-force displacement. Predict work. The replay moves a block through a scaled illustrative distance and accumulates transferred energy; it is not a trajectory solved from the forces or a claim of constant acceleration.",
        "scene": "frc1:work:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.energy.stores"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-work",
    "practice": [
      {
        "id": "frc1.work.practice1",
        "prompt": "Mechanical work is…",
        "options": [
          "Energy transferred by a force through displacement",
          "The same as force alone",
          "Always measured in watts"
        ],
        "answer": 0,
        "why": "Work is measured in joules.",
        "concept": "frc1.work"
      },
      {
        "id": "frc1.work.practice2",
        "prompt": "For W=Fs, s is…",
        "options": [
          "Any route length regardless of direction",
          "Displacement along the force",
          "Only the object height"
        ],
        "answer": 1,
        "why": "Use the force’s line of action.",
        "concept": "frc1.work"
      },
      {
        "id": "frc1.work.practice3",
        "prompt": "Work against friction can increase…",
        "options": [
          "The total mass necessarily",
          "The proton count",
          "Internal energy and temperature"
        ],
        "answer": 2,
        "why": "The energy has been transferred, not destroyed.",
        "concept": "frc1.work"
      }
    ],
    "check": [
      {
        "id": "frc1.work.check1",
        "prompt": "8 N acts through5 m along the force. Work is…",
        "options": [
          "40 J",
          "1.6 J",
          "13 J"
        ],
        "answer": 0,
        "why": "Work = force × along-force distance =8×5=40 J.",
        "concept": "frc1.work"
      },
      {
        "id": "frc1.work.check2",
        "prompt": "A stationary block is held with no displacement. Work on it by the holding force is…",
        "options": [
          "Infinite",
          "Zero",
          "The force in newtons"
        ],
        "answer": 1,
        "why": "With no displacement along the force, W=F×0=0 J.",
        "concept": "frc1.work"
      },
      {
        "id": "frc1.work.check3",
        "prompt": "1 J of work equals…",
        "options": [
          "1 N/s",
          "1 kg/m",
          "1 N m"
        ],
        "answer": 2,
        "why": "Force times displacement gives energy.",
        "concept": "frc1.work"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.elasticity",
    "title": "Elasticity and force–extension graphs",
    "short": "Elasticity and force–extension graphs",
    "topicId": "science.physics.forces",
    "refs": [
      "5.3"
    ],
    "combinedRefs": [
      "5.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A stationary object needs opposing applied forces to stretch, bend or compress it. Elastic deformation reverses when forces are removed. Inelastic deformation leaves a permanent change. The limit of proportionality marks where a force–extension graph stops being a straight line through the origin; it is not a universal synonym for the elastic limit.",
    "learn": [
      {
        "title": "Two forces change shape",
        "text": "A stationary object needs opposing applied forces to stretch, bend or compress it. Elastic deformation reverses when forces are removed. Inelastic deformation leaves a permanent change. The limit of proportionality marks where a force–extension graph stops being a straight line through the origin; it is not a universal synonym for the elastic limit.",
        "scene": "frc1:elasticity:0",
        "process": false
      },
      {
        "title": "Use F = ke in the linear region",
        "text": "Extension e = stretched length − original length, in metres. Spring constant k is force per unit extension, N/m. A spring with k=100 N/m under5 N extends0.05 m. Compression can be treated similarly. A steeper F-versus-e gradient means a larger k.",
        "scene": "frc1:elasticity:1",
        "process": true,
        "processFilm": "frc1-elasticity"
      },
      {
        "title": "Energy stored while stretching",
        "text": "If the spring stays within the proportional elastic region, elastic energy E=½ke² equals work done stretching it. The force increases with extension, so multiplying the final force by extension overestimates the work. The energy is the triangular area under the F–e graph.",
        "scene": "frc1:elasticity:2",
        "process": false
      },
      {
        "title": "Stretch two ideal springs",
        "text": "Choose k and applied force, predict extension, then reveal. The model stays in the stated linear elastic region and returns to its original length on unloading. Coil thickness/diameter are symbolic; the spring is not a material-failure prediction.",
        "scene": "frc1:elasticity:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.energy.elastic"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-elasticity",
    "practice": [
      {
        "id": "frc1.elasticity.practice1",
        "prompt": "Extension is…",
        "options": [
          "Final length minus original length",
          "The entire stretched length",
          "Always equal to mass"
        ],
        "answer": 0,
        "why": "Use the change in length in metres.",
        "concept": "frc1.elasticity"
      },
      {
        "id": "frc1.elasticity.practice2",
        "prompt": "Inelastic deformation…",
        "options": [
          "Always reverses fully",
          "Leaves a permanent change",
          "Means no forces acted"
        ],
        "answer": 1,
        "why": "The original shape is not fully restored.",
        "concept": "frc1.elasticity"
      },
      {
        "id": "frc1.elasticity.practice3",
        "prompt": "For a linear elastic spring, stored energy is…",
        "options": [
          "ke²",
          "ke",
          "½ke²"
        ],
        "answer": 2,
        "why": "Force rises from zero; average force is half the final force.",
        "concept": "frc1.elasticity"
      }
    ],
    "check": [
      {
        "id": "frc1.elasticity.check1",
        "prompt": "A spring length changes from10 to14 cm. Extension is…",
        "options": [
          "0.04 m",
          "0.14 m",
          "4 m"
        ],
        "answer": 0,
        "why": "4 cm equals0.04 m.",
        "concept": "frc1.elasticity"
      },
      {
        "id": "frc1.elasticity.check2",
        "prompt": "The F–e graph becomes curved. This means…",
        "options": [
          "F/e stays constant necessarily",
          "The limit of proportionality has been exceeded",
          "The spring has no extension"
        ],
        "answer": 1,
        "why": "A straight-line proportional relation no longer applies.",
        "concept": "frc1.elasticity"
      },
      {
        "id": "frc1.elasticity.check3",
        "prompt": "Doubling extension at fixed k changes elastic energy by…",
        "options": [
          "A factor of2",
          "A factor of½",
          "A factor of4"
        ],
        "answer": 2,
        "why": "Extension is squared.",
        "concept": "frc1.elasticity"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.springs",
    "title": "Investigating force and extension",
    "short": "Investigating force and extension",
    "topicId": "science.physics.forces",
    "refs": [
      "5.3"
    ],
    "combinedRefs": [
      "5.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Required practical6 in separate Physics and18 in Trilogy investigates force versus extension of a spring. Clamp securely; align a ruler beside the spring with a pointer/reference point. Measure the unloaded length, add known forces in small increments, allow oscillation to settle and read at eye level to reduce parallax.",
    "learn": [
      {
        "title": "Plan the spring investigation",
        "text": "Required practical6 in separate Physics and18 in Trilogy investigates force versus extension of a spring. Clamp securely; align a ruler beside the spring with a pointer/reference point. Measure the unloaded length, add known forces in small increments, allow oscillation to settle and read at eye level to reduce parallax.",
        "scene": "frc1:springs:0",
        "process": false
      },
      {
        "title": "Control and record",
        "text": "Use the same spring, ruler position and reference point. Record applied force and total length, then calculate extension in metres. Repeat readings where useful. Keep clear of falling masses and avoid overloading; a catch tray helps. Physical school performance is still required.",
        "scene": "frc1:springs:1",
        "process": false
      },
      {
        "title": "Interpret the graph",
        "text": "Plot force vertically against extension horizontally with labelled units and a suitable scale. A straight best-fit line through the origin supports F∝e; gradient ΔF/Δe gives k. Do not force all points onto a line beyond proportional behaviour. Unloading can test whether deformation is reversible.",
        "scene": "frc1:springs:2",
        "process": false
      },
      {
        "title": "Analyse original trial data",
        "text": "Choose one of two ideal toy springs and extension. Predict force. These generated points have no measurement uncertainty; compare them with real repeated readings and evaluate ruler resolution, zero error, parallax and oscillation. This model does not establish practical or freehand graph competence.",
        "scene": "frc1:springs:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-springs",
    "practice": [
      {
        "id": "frc1.springs.practice1",
        "prompt": "First measure…",
        "options": [
          "Unloaded length",
          "Only the last loaded length",
          "Only the mass of the clamp"
        ],
        "answer": 0,
        "why": "Extension needs an original reference length.",
        "concept": "frc1.springs"
      },
      {
        "id": "frc1.springs.practice2",
        "prompt": "Read the ruler at eye level to reduce…",
        "options": [
          "Nuclear decay",
          "Parallax",
          "Spring constant"
        ],
        "answer": 1,
        "why": "Viewing angle can shift the apparent reading.",
        "concept": "frc1.springs"
      },
      {
        "id": "frc1.springs.practice3",
        "prompt": "On an F-versus-e graph, gradient gives…",
        "options": [
          "Mass",
          "Energy per second",
          "Spring constant"
        ],
        "answer": 2,
        "why": "Gradient has units N/m.",
        "concept": "frc1.springs"
      }
    ],
    "check": [
      {
        "id": "frc1.springs.check1",
        "prompt": "Lengths120 and145 mm give extension…",
        "options": [
          "0.025 m",
          "0.145 m",
          "25 m"
        ],
        "answer": 0,
        "why": "25mm equals0.025m.",
        "concept": "frc1.springs"
      },
      {
        "id": "frc1.springs.check2",
        "prompt": "Points curve at high force. Best response?",
        "options": [
          "Draw a straight line through all regardless",
          "Identify the non-proportional region",
          "Delete the high-force measurements silently"
        ],
        "answer": 1,
        "why": "Interpret the departure rather than hiding it.",
        "concept": "frc1.springs"
      },
      {
        "id": "frc1.springs.check3",
        "prompt": "An unloading measurement checks…",
        "options": [
          "Only the force scale colour",
          "The gravitational field name",
          "Whether the original length is recovered"
        ],
        "answer": 2,
        "why": "Recovery distinguishes elastic/inelastic response.",
        "concept": "frc1.springs"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.moments",
    "title": "Moments, levers and gears",
    "short": "Moments, levers and gears",
    "topicId": "science.physics.forces",
    "refs": [
      "5.4"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Moment M=F d, where d is the perpendicular distance from the pivot to the force’s line of action. Use N m. A longer lever arm can produce the same moment with a smaller force. A force directed through the pivot has zero moment even if applied far along the lever.",
    "learn": [
      {
        "title": "A turning effect",
        "text": "Moment M=F d, where d is the perpendicular distance from the pivot to the force’s line of action. Use N m. A longer lever arm can produce the same moment with a smaller force. A force directed through the pivot has zero moment even if applied far along the lever.",
        "scene": "frc1:moments:0",
        "process": false
      },
      {
        "title": "Balance clockwise and anticlockwise",
        "text": "A balanced object has equal total clockwise and anticlockwise moments about the pivot. A6 N downward force0.2 m left balances a3 N downward force0.4 m right: both moments are1.2 N m. Include every force with a moment, not just one pair.",
        "scene": "frc1:moments:1",
        "process": true,
        "processFilm": "frc1-moments"
      },
      {
        "title": "Transmit rotation",
        "text": "Levers transmit turning effects. Meshing gears rotate in opposite directions; a smaller gear turns through more revolutions than a larger meshing gear. Changing gear sizes changes turning effect/speed tradeoffs. A simple ideal gear train transfers energy; it does not create energy.",
        "scene": "frc1:moments:2",
        "process": false
      },
      {
        "title": "Balance a lever",
        "text": "An opposing moment is fixed at4 N m. Choose force and perpendicular distance on the other side; predict that side’s moment and decide whether it balances. The diagram shows a constrained force direction. Draw your own pivot/line of action/perpendicular distance to demonstrate the unrestricted skill.",
        "scene": "frc1:moments:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-moments",
    "practice": [
      {
        "id": "frc1.moments.practice1",
        "prompt": "The distance in M=Fd is…",
        "options": [
          "Perpendicular pivot-to-line distance",
          "Always the full lever length",
          "Distance travelled"
        ],
        "answer": 0,
        "why": "Use the shortest distance to the line of action.",
        "concept": "frc1.moments"
      },
      {
        "id": "frc1.moments.practice2",
        "prompt": "A lever is balanced when…",
        "options": [
          "Both forces must be equal",
          "Clockwise and anticlockwise moment totals are equal",
          "Every force is zero"
        ],
        "answer": 1,
        "why": "Forces can differ if distances differ.",
        "concept": "frc1.moments"
      },
      {
        "id": "frc1.moments.practice3",
        "prompt": "Meshing gears rotate…",
        "options": [
          "In the same direction always",
          "Only if equal size",
          "In opposite directions"
        ],
        "answer": 2,
        "why": "Their touching teeth move together at the contact.",
        "concept": "frc1.moments"
      }
    ],
    "check": [
      {
        "id": "frc1.moments.check1",
        "prompt": "5 N at perpendicular0.3 m gives moment…",
        "options": [
          "1.5 N m",
          "15 N m",
          "0.06 N m"
        ],
        "answer": 0,
        "why": "Multiply force by perpendicular distance.",
        "concept": "frc1.moments"
      },
      {
        "id": "frc1.moments.check2",
        "prompt": "A force line passes through the pivot. Moment is…",
        "options": [
          "The force alone",
          "Zero",
          "Always maximum"
        ],
        "answer": 1,
        "why": "Perpendicular distance is zero.",
        "concept": "frc1.moments"
      },
      {
        "id": "frc1.moments.check3",
        "prompt": "A12-tooth gear drives a24-tooth gear through2 turns. Driven gear turns…",
        "options": [
          "4 turns",
          "2 turns",
          "1 turn in the opposite direction"
        ],
        "answer": 2,
        "why": "The driven gear has twice as many teeth.",
        "concept": "frc1.moments"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.pressure",
    "title": "Fluid pressure and surface forces",
    "short": "Fluid pressure and surface forces",
    "topicId": "science.physics.forces",
    "refs": [
      "5.5.1.1"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Liquids and gases are fluids. Pressure produces a force at right angles to a surface. Pressure is force per unit area: p=F/A, in pascals, where1 Pa=1 N/m². A gas can press on side walls and a lid, not only downward.",
    "learn": [
      {
        "title": "Fluids exert normal forces",
        "text": "Liquids and gases are fluids. Pressure produces a force at right angles to a surface. Pressure is force per unit area: p=F/A, in pascals, where1 Pa=1 N/m². A gas can press on side walls and a lid, not only downward.",
        "scene": "frc1:pressure:0",
        "process": false
      },
      {
        "title": "Separate force and pressure",
        "text": "For the same normal force, a smaller area gives a larger pressure. A200 N normal force across0.5 m² gives400 Pa. To find the total force for a given pressure, rearrange F=pA. Area units must be m²;100 cm²=0.01 m².",
        "scene": "frc1:pressure:1",
        "process": false
      },
      {
        "title": "Apply the direction condition",
        "text": "Use the component of force normal to the chosen surface. The arrows in this view point outward from fluid toward the container wall; the wall exerts an opposite force on the fluid. Neither force is a sideways friction arrow.",
        "scene": "frc1:pressure:2",
        "process": false
      },
      {
        "title": "Change force and area",
        "text": "Choose normal force and surface area, predict pressure and reveal. The distribution is uniform in this simplified surface account; the demonstration does not calculate liquid depth, flow, gas compression or material failure.",
        "scene": "frc1:pressure:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-pressure",
    "practice": [
      {
        "id": "frc1.pressure.practice1",
        "prompt": "A pressure force acts…",
        "options": [
          "Normal to the surface",
          "Only parallel to the surface",
          "Only upward"
        ],
        "answer": 0,
        "why": "Normal means perpendicular.",
        "concept": "frc1.pressure"
      },
      {
        "id": "frc1.pressure.practice2",
        "prompt": "At fixed force, halving area makes pressure…",
        "options": [
          "Halve",
          "Double",
          "Stay fixed"
        ],
        "answer": 1,
        "why": "Pressure is normal force divided by area, p=F/A; halving A doubles p at fixed F.",
        "concept": "frc1.pressure"
      },
      {
        "id": "frc1.pressure.practice3",
        "prompt": "A pascal equals…",
        "options": [
          "N m",
          "kg/m",
          "N/m²"
        ],
        "answer": 2,
        "why": "Pressure is normal force per unit area.",
        "concept": "frc1.pressure"
      }
    ],
    "check": [
      {
        "id": "frc1.pressure.check1",
        "prompt": "100 N acts over0.2 m². Pressure is…",
        "options": [
          "500 Pa",
          "20 Pa",
          "0.002 Pa"
        ],
        "answer": 0,
        "why": "Pressure =100 N divided by0.2 m²=500 Pa.",
        "concept": "frc1.pressure"
      },
      {
        "id": "frc1.pressure.check2",
        "prompt": "A gas exerts force on a vertical wall…",
        "options": [
          "Only downward along it",
          "At right angles to it",
          "Only if it is liquid"
        ],
        "answer": 1,
        "why": "Pressure acts normal to all surfaces.",
        "concept": "frc1.pressure"
      },
      {
        "id": "frc1.pressure.check3",
        "prompt": "100 cm² equals…",
        "options": [
          "1 m²",
          "100 m²",
          "0.01 m²"
        ],
        "answer": 2,
        "why": "Square the length conversion.",
        "concept": "frc1.pressure"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.depth",
    "title": "Liquid depth, upthrust and floating",
    "short": "Liquid depth, upthrust and floating",
    "topicId": "science.physics.forces",
    "refs": [
      "5.5.1.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": true,
    "minutes": 35,
    "big": "The pressure due to a liquid column is p=hρg. Use column height/depth h in m, densityρ in kg/m³ and supplied g in N/kg. This is the additional liquid pressure; add surface pressure if asked for absolute pressure. Denser liquid or greater depth gives larger pressure.",
    "learn": [
      {
        "title": "Pressure increases with depth",
        "text": "The pressure due to a liquid column is p=hρg. Use column height/depth h in m, densityρ in kg/m³ and supplied g in N/kg. This is the additional liquid pressure; add surface pressure if asked for absolute pressure. Denser liquid or greater depth gives larger pressure.",
        "scene": "frc1:depth:0",
        "process": false
      },
      {
        "title": "A pressure difference gives upthrust",
        "text": "A submerged object has greater pressure on its bottom than its top. The vertical force difference gives upward upthrust; opposing horizontal forces can cancel. Upthrust depends on displaced fluid. The diagram exaggerates vertical pressure differences for clarity.",
        "scene": "frc1:depth:1",
        "process": false
      },
      {
        "title": "Float or sink",
        "text": "An unsupported object initially sinks if weight exceeds upthrust and rises if upthrust exceeds weight. It floats at rest when upthrust balances weight. A floating object displaces its own weight of fluid. Average object density and fluid density help decide whether it can float; shape affects the displaced volume.",
        "scene": "frc1:depth:2",
        "process": false
      },
      {
        "title": "Compare liquid columns",
        "text": "Choose depth and density with supplied g=10 N/kg. Predict pressure due to the column. The static model has no waves, viscosity or compressibility; it does not predict transient sinking speed. Use different depths to explain the pressure difference around a block.",
        "scene": "frc1:depth:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.forces.pressure"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-depth",
    "practice": [
      {
        "id": "frc1.depth.practice1",
        "prompt": "Pressure due to a liquid column is…",
        "options": [
          "hρg",
          "h/(ρg)",
          "ρ/(hg)"
        ],
        "answer": 0,
        "why": "Use SI units and supplied g.",
        "concept": "frc1.depth"
      },
      {
        "id": "frc1.depth.practice2",
        "prompt": "Upthrust arises because…",
        "options": [
          "Pressure is greater on top",
          "Pressure is greater underneath",
          "Fluid has no weight"
        ],
        "answer": 1,
        "why": "The bottom upward force exceeds the top downward force.",
        "concept": "frc1.depth"
      },
      {
        "id": "frc1.depth.practice3",
        "prompt": "Floating at rest requires…",
        "options": [
          "Weight greater than upthrust",
          "No gravity",
          "Upthrust equal to weight"
        ],
        "answer": 2,
        "why": "The vertical resultant is zero.",
        "concept": "frc1.depth"
      }
    ],
    "check": [
      {
        "id": "frc1.depth.check1",
        "prompt": "At h2 m,ρ1000 kg/m³,g10 N/kg, liquid pressure is…",
        "options": [
          "20000 Pa",
          "200 Pa",
          "20 Pa"
        ],
        "answer": 0,
        "why": "Column pressure hρg=2×1000×10=20000 Pa above the surface pressure.",
        "concept": "frc1.depth"
      },
      {
        "id": "frc1.depth.check2",
        "prompt": "Weight6 N and upthrust4 N give…",
        "options": [
          "A2 N upward resultant",
          "A2 N downward resultant",
          "Zero resultant"
        ],
        "answer": 1,
        "why": "Gravity exceeds the upward force.",
        "concept": "frc1.depth"
      },
      {
        "id": "frc1.depth.check3",
        "prompt": "For absolute pressure beneath a liquid surface, also account for…",
        "options": [
          "Only the vessel colour",
          "Only its width",
          "Pressure at the surface"
        ],
        "answer": 2,
        "why": "hρg is the column contribution.",
        "concept": "frc1.depth"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.atmosphere",
    "title": "Atmospheric pressure and altitude",
    "short": "Atmospheric pressure and altitude",
    "topicId": "science.physics.forces",
    "refs": [
      "5.5.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "The atmosphere is a thin layer compared with Earth’s size. Air molecules continually move and collide with surfaces, producing atmospheric pressure. The atmosphere is denser closer to the ground and becomes less dense at higher altitudes.",
    "learn": [
      {
        "title": "A thin layer around Earth",
        "text": "The atmosphere is a thin layer compared with Earth’s size. Air molecules continually move and collide with surfaces, producing atmospheric pressure. The atmosphere is denser closer to the ground and becomes less dense at higher altitudes.",
        "scene": "frc1:atmosphere:0",
        "process": false
      },
      {
        "title": "Less air above",
        "text": "At a higher altitude there are fewer air molecules and less weight of air above each unit area. Atmospheric pressure therefore decreases with altitude. Pressure does not suddenly become zero at the top of a building; the change depends on the height and atmospheric conditions.",
        "scene": "frc1:atmosphere:1",
        "process": true,
        "processFilm": "frc1-atmosphere"
      },
      {
        "title": "Use evidence carefully",
        "text": "Compare measured pressure at different heights while considering weather changes and instrument calibration. The gas particles are greatly enlarged and only a few are drawn. Their collisions represent a mechanism, not a literal number of air molecules.",
        "scene": "frc1:atmosphere:2",
        "process": false
      },
      {
        "title": "Read a supplied altitude comparison",
        "text": "Choose lower/higher altitude and one of two invented weather datasets. Predict which point has lower pressure. Values are supplied illustrative comparisons, not a standard-atmosphere calculation or local weather forecast.",
        "scene": "frc1:atmosphere:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-atmosphere",
    "practice": [
      {
        "id": "frc1.atmosphere.practice1",
        "prompt": "Atmospheric pressure is caused by…",
        "options": [
          "Air-molecule collisions with surfaces",
          "Only sunshine",
          "Only wind in one direction"
        ],
        "answer": 0,
        "why": "Random molecular motion transfers momentum to surfaces.",
        "concept": "frc1.atmosphere"
      },
      {
        "id": "frc1.atmosphere.practice2",
        "prompt": "At greater altitude, air is generally…",
        "options": [
          "More dense",
          "Less dense",
          "Always the same density"
        ],
        "answer": 1,
        "why": "There is less air above and lower pressure.",
        "concept": "frc1.atmosphere"
      },
      {
        "id": "frc1.atmosphere.practice3",
        "prompt": "At a high mountain compared with sea level, pressure is generally…",
        "options": [
          "Higher",
          "Identical necessarily",
          "Lower"
        ],
        "answer": 2,
        "why": "The overlying column has less weight.",
        "concept": "frc1.atmosphere"
      }
    ],
    "check": [
      {
        "id": "frc1.atmosphere.check1",
        "prompt": "The atmosphere compared with Earth is…",
        "options": [
          "A thin surrounding layer",
          "Thicker than Earth’s diameter",
          "Only a solid shell"
        ],
        "answer": 0,
        "why": "Its relative scale matters.",
        "concept": "frc1.atmosphere"
      },
      {
        "id": "frc1.atmosphere.check2",
        "prompt": "A fair height/pressure comparison should consider…",
        "options": [
          "Only the gauge colour",
          "Weather changes and calibration",
          "Only shoe size"
        ],
        "answer": 1,
        "why": "Other factors can influence the measurements.",
        "concept": "frc1.atmosphere"
      },
      {
        "id": "frc1.atmosphere.check3",
        "prompt": "A drawing with ten gas markers represents…",
        "options": [
          "Exactly ten real air molecules",
          "A measured molecular collision rate",
          "A schematic sample of random motion"
        ],
        "answer": 2,
        "why": "The count and size are illustrative.",
        "concept": "frc1.atmosphere"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.motion",
    "title": "Distance, displacement, speed and velocity",
    "short": "Distance, displacement, speed and velocity",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.1.1",
      "5.6.1.2",
      "5.6.1.3"
    ],
    "combinedRefs": [
      "5.4.1.1",
      "5.4.1.2",
      "5.4.1.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Distance is total path length, a scalar. Displacement is the straight-line change from start to finish with direction, a vector. Walk3 m east then3 m west: distance6 m, displacement0. Speed is scalar; velocity is speed in a stated direction.",
    "learn": [
      {
        "title": "A journey has two measures",
        "text": "Distance is total path length, a scalar. Displacement is the straight-line change from start to finish with direction, a vector. Walk3 m east then3 m west: distance6 m, displacement0. Speed is scalar; velocity is speed in a stated direction.",
        "scene": "frc1:motion:0",
        "process": false
      },
      {
        "title": "Use distance = speed × time",
        "text": "For constant speed, s=vt. Average speed for a variable journey is total distance divided by total time, including stated stops. Do not simply average two speeds unless the time intervals are equal. Convert km/h to m/s by dividing by3.6.",
        "scene": "frc1:motion:1",
        "process": true,
        "processFilm": "frc1-motion"
      },
      {
        "title": "Estimate sensible speeds",
        "text": "Typical walking speed is1.5 m/s, running3 m/s, cycling6 m/s and sound in air about330 m/s. Terrain, fitness, age and journey length affect human speeds. A car on a road may travel around13 m/s (about30 mph), while other transport varies widely. These are estimates, not universal constants.",
        "scene": "frc1:motion:2",
        "process": false
      },
      {
        "title": "Compare simple journeys",
        "text": "Choose constant speed and elapsed time. Predict total distance before watching a straight-line journey. The markers show equally spaced positions for equal times. A later return leg can change displacement without undoing the distance already travelled.",
        "scene": "frc1:motion:3",
        "process": false
      },
      {
        "title": "Higher: constant speed can still change velocity",
        "text": "An object moving in a circle changes direction continuously even at constant speed. Its velocity changes, so it accelerates. The resultant force is toward the centre; it is perpendicular to the instantaneous velocity, not a force pushing the object outward.",
        "scene": "frc1:motion:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-motion",
    "practice": [
      {
        "id": "frc1.motion.practice1",
        "prompt": "Distance counts…",
        "options": [
          "The whole path travelled",
          "Only straight-line start-to-finish change",
          "Direction only"
        ],
        "answer": 0,
        "why": "Distance is a scalar path length.",
        "concept": "frc1.motion"
      },
      {
        "id": "frc1.motion.practice2",
        "prompt": "Average speed is…",
        "options": [
          "Always the mean of the two listed speeds",
          "Total distance divided by total time",
          "Displacement times time"
        ],
        "answer": 1,
        "why": "Use the full time including stated stops.",
        "concept": "frc1.motion"
      },
      {
        "id": "frc1.motion.practice3",
        "prompt": "Velocity includes…",
        "options": [
          "Only magnitude",
          "Only journey duration",
          "Speed and direction"
        ],
        "answer": 2,
        "why": "Velocity is a vector: speed gives its magnitude, and its direction must also be stated.",
        "concept": "frc1.motion"
      }
    ],
    "check": [
      {
        "id": "frc1.motion.check1",
        "prompt": "A pupil walks4 m east then1 m west. Displacement is…",
        "options": [
          "3 m east",
          "5 m east",
          "3 m west"
        ],
        "answer": 0,
        "why": "Final position is3m east of start.",
        "concept": "frc1.motion"
      },
      {
        "id": "frc1.motion.check2",
        "prompt": "72 km/h is…",
        "options": [
          "72 m/s",
          "20 m/s",
          "259.2 m/s"
        ],
        "answer": 1,
        "why": "Divide km/h by3.6:72×1000/3600=20 m/s.",
        "concept": "frc1.motion"
      },
      {
        "id": "frc1.motion.check3",
        "prompt": "A typical walking speed is about…",
        "options": [
          "330 m/s",
          "60 m/s",
          "1.5 m/s"
        ],
        "answer": 2,
        "why": "Human speeds depend on conditions.",
        "concept": "frc1.motion"
      },
      {
        "id": "frc1.motion.check-higher",
        "prompt": "A satellite moves at constant speed in a circle. Its velocity…",
        "options": [
          "Changes because direction changes",
          "Is constant because speed is constant",
          "Is zero"
        ],
        "answer": 0,
        "why": "Velocity includes direction.",
        "concept": "frc1.motion"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model",
        "higher"
      ],
      "completionKey": "frc1Passed"
    },
    "higherQuestions": [
      "frc1.motion.check-higher"
    ]
  },
  {
    "id": "science.physics.forces.distancegraph",
    "title": "Reading distance–time graphs",
    "short": "Reading distance–time graphs",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.1.4"
    ],
    "combinedRefs": [
      "5.4.1.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "On a distance–time graph, gradient = change in distance ÷ change in time. A steeper positive line means greater speed. A horizontal section means no further distance travelled during that time. A straight sloping line represents constant speed.",
    "learn": [
      {
        "title": "A slope tells you speed",
        "text": "On a distance–time graph, gradient = change in distance ÷ change in time. A steeper positive line means greater speed. A horizontal section means no further distance travelled during that time. A straight sloping line represents constant speed.",
        "scene": "frc1:distancegraph:0",
        "process": false
      },
      {
        "title": "Construct from measurements",
        "text": "Choose sensible axis ranges, plot time horizontally and distance vertically with units, and plot measured points. A line or smooth curve should fit the evidence. Use a large gradient triangle, reading two points on the line rather than assuming it starts at the origin.",
        "scene": "frc1:distancegraph:1",
        "process": false
      },
      {
        "title": "Curves represent changing speed",
        "text": "A curve getting steeper represents increasing speed; a curve getting flatter represents decreasing speed. Total distance cannot decrease in a cumulative-distance account. A position/displacement graph can decrease, but that is a different vertical quantity.",
        "scene": "frc1:distancegraph:2",
        "process": false
      },
      {
        "title": "Compare slopes",
        "text": "Choose a distance increment and time interval; predict gradient in m/s and reveal the graph. This is constrained graph interpretation. It prepares for drawing and analysing your own measured graph, but does not itself provide unrestricted graph-construction evidence.",
        "scene": "frc1:distancegraph:3",
        "process": false
      },
      {
        "title": "Higher: measure a tangent",
        "text": "For instantaneous speed on a curved distance–time graph, draw a tangent at the chosen time and calculate its gradient using a large triangle on that tangent. Do not use the chord joining widely separated curve points. A tangent rising12 m over4 s gives3 m/s at the contact point.",
        "scene": "frc1:distancegraph:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-distancegraph",
    "practice": [
      {
        "id": "frc1.distancegraph.practice1",
        "prompt": "Gradient of distance–time gives…",
        "options": [
          "Speed",
          "Acceleration",
          "Mass"
        ],
        "answer": 0,
        "why": "Distance change per time is speed.",
        "concept": "frc1.distancegraph"
      },
      {
        "id": "frc1.distancegraph.practice2",
        "prompt": "A horizontal section means…",
        "options": [
          "Moving backward necessarily",
          "Stationary during that interval",
          "Infinite speed"
        ],
        "answer": 1,
        "why": "Distance does not increase.",
        "concept": "frc1.distancegraph"
      },
      {
        "id": "frc1.distancegraph.practice3",
        "prompt": "A curve getting steeper shows…",
        "options": [
          "Constant speed",
          "Zero distance",
          "Increasing speed"
        ],
        "answer": 2,
        "why": "The instantaneous gradient increases.",
        "concept": "frc1.distancegraph"
      }
    ],
    "check": [
      {
        "id": "frc1.distancegraph.check1",
        "prompt": "Distance changes20 m over5 s on a line. Speed is…",
        "options": [
          "4 m/s",
          "100 m/s",
          "0.25 m/s"
        ],
        "answer": 0,
        "why": "Speed is gradient Δdistance/Δtime=20/5=4 m/s.",
        "concept": "frc1.distancegraph"
      },
      {
        "id": "frc1.distancegraph.check2",
        "prompt": "For a line starting at10 m rather than zero, gradient uses…",
        "options": [
          "Only the final coordinate divided by time",
          "Differences in both coordinates",
          "Only the intercept"
        ],
        "answer": 1,
        "why": "Gradient is Δdistance/Δtime.",
        "concept": "frc1.distancegraph"
      },
      {
        "id": "frc1.distancegraph.check3",
        "prompt": "A cumulative-distance graph moving downward would…",
        "options": [
          "Show valid negative total path length",
          "Always mean acceleration",
          "Be inconsistent with its cumulative-distance label"
        ],
        "answer": 2,
        "why": "Cumulative distance cannot decrease.",
        "concept": "frc1.distancegraph"
      },
      {
        "id": "frc1.distancegraph.check-higher",
        "prompt": "Instantaneous speed on a curved distance–time graph is found from…",
        "options": [
          "A tangent gradient at that point",
          "The final height alone",
          "The whole-journey chord necessarily"
        ],
        "answer": 0,
        "why": "The tangent approximates local slope.",
        "concept": "frc1.distancegraph"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model",
        "higher"
      ],
      "completionKey": "frc1Passed"
    },
    "higherQuestions": [
      "frc1.distancegraph.check-higher"
    ]
  },
  {
    "id": "science.physics.forces.acceleration",
    "title": "Acceleration and uniform-motion calculations",
    "short": "Acceleration and uniform-motion calculations",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.1.5"
    ],
    "combinedRefs": [
      "5.4.1.5"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Average acceleration a=(v−u)/t. Units are m/s². Choose a positive direction first. A vehicle changing from2 to14 m/s in4 s has acceleration3 m/s². Slowing while moving in the positive direction gives negative acceleration; the magnitude of deceleration is positive.",
    "learn": [
      {
        "title": "Velocity changes per second",
        "text": "Average acceleration a=(v−u)/t. Units are m/s². Choose a positive direction first. A vehicle changing from2 to14 m/s in4 s has acceleration3 m/s². Slowing while moving in the positive direction gives negative acceleration; the magnitude of deceleration is positive.",
        "scene": "frc1:acceleration:0",
        "process": false
      },
      {
        "title": "A second relationship",
        "text": "For uniform acceleration, v²−u²=2as. Rearrange carefully and use SI units. With u=0, a=2 m/s² and s=9 m, v²=36 and speed=6 m/s. The relationship assumes constant acceleration; it cannot be applied indiscriminately to a whole nonuniform journey.",
        "scene": "frc1:acceleration:1",
        "process": true,
        "processFilm": "frc1-acceleration"
      },
      {
        "title": "Free fall and resistance",
        "text": "Near Earth, free-fall acceleration is about9.8 m/s² when gravity is the only significant force. Falling through air is not always free fall: air resistance changes the resultant. Everyday accelerations vary; reaching20 m/s from rest in10 s is about2 m/s² on average.",
        "scene": "frc1:acceleration:2",
        "process": false
      },
      {
        "title": "Predict a velocity change",
        "text": "The model starts from rest with constant acceleration. Choose a and time; predict final velocity. Position follows½at² while velocity follows at. Model time resets on replay; the object is not physically teleported back during one continuous journey.",
        "scene": "frc1:acceleration:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-acceleration",
    "practice": [
      {
        "id": "frc1.acceleration.practice1",
        "prompt": "Acceleration is…",
        "options": [
          "Change in velocity divided by time",
          "Velocity times time",
          "Distance divided by mass"
        ],
        "answer": 0,
        "why": "Use final minus initial velocity.",
        "concept": "frc1.acceleration"
      },
      {
        "id": "frc1.acceleration.practice2",
        "prompt": "Uniform acceleration means…",
        "options": [
          "Velocity is constant",
          "Acceleration is constant",
          "Distance is zero"
        ],
        "answer": 1,
        "why": "The squared-velocity relation uses this condition.",
        "concept": "frc1.acceleration"
      },
      {
        "id": "frc1.acceleration.practice3",
        "prompt": "Free fall near Earth has acceleration about…",
        "options": [
          "0.98 m/s",
          "330 m/s²",
          "9.8 m/s²"
        ],
        "answer": 2,
        "why": "Only gravity is significant in ideal free fall.",
        "concept": "frc1.acceleration"
      }
    ],
    "check": [
      {
        "id": "frc1.acceleration.check1",
        "prompt": "Velocity8→20 m/s in4 s gives acceleration…",
        "options": [
          "3 m/s²",
          "7 m/s²",
          "48 m/s²"
        ],
        "answer": 0,
        "why": "Average acceleration=(final−initial velocity)/time=(20−8)/4=3 m/s².",
        "concept": "frc1.acceleration"
      },
      {
        "id": "frc1.acceleration.check2",
        "prompt": "A car slows from15 to5 m/s in5 s, forward positive. Acceleration is…",
        "options": [
          "+2 m/s²",
          "−2 m/s²",
          "−10 m/s²"
        ],
        "answer": 1,
        "why": "With forward positive, acceleration=(5−15)/5=−2 m/s².",
        "concept": "frc1.acceleration"
      },
      {
        "id": "frc1.acceleration.check3",
        "prompt": "With u0,a3 m/s²,s6 m, v is…",
        "options": [
          "36 m/s",
          "18 m/s",
          "6 m/s"
        ],
        "answer": 2,
        "why": "v²=2×3×6=36; take the positive speed root.",
        "concept": "frc1.acceleration"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.velocitygraph",
    "title": "Velocity–time graphs",
    "short": "Velocity–time graphs",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.1.5"
    ],
    "combinedRefs": [
      "5.4.1.5"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "On a velocity–time graph, gradient=(change in velocity)/(change in time). A horizontal line means constant velocity, not stationary unless velocity is zero. A downward slope can show slowing in the positive direction. Read signs as well as steepness.",
    "learn": [
      {
        "title": "Gradient gives acceleration",
        "text": "On a velocity–time graph, gradient=(change in velocity)/(change in time). A horizontal line means constant velocity, not stationary unless velocity is zero. A downward slope can show slowing in the positive direction. Read signs as well as steepness.",
        "scene": "frc1:velocitygraph:0",
        "process": false
      },
      {
        "title": "Plot the measured motion",
        "text": "Place time on the horizontal axis and velocity on the vertical axis, with scales and units. Plot supplied measurements, then interpret segments or a best-fit curve. At a curved section, a tangent estimates instantaneous acceleration. A straight slope represents uniform acceleration.",
        "scene": "frc1:velocitygraph:1",
        "process": true,
        "processFilm": "frc1-velocitygraph"
      },
      {
        "title": "Distinguish the two graph types",
        "text": "Distance–time gradient gives speed; velocity–time gradient gives acceleration. Their vertical quantities differ. Do not read the height of a velocity–time graph as distance. A velocity can be negative because direction is encoded by the chosen axis.",
        "scene": "frc1:velocitygraph:2",
        "process": false
      },
      {
        "title": "Change the slope",
        "text": "Choose a velocity change over a fixed interval and predict acceleration. A cursor follows the illustrative straight segment; the visual is original data, not a measured vehicle trace. Graph construction in this tool is constrained; unrestricted drawings remain separate.",
        "scene": "frc1:velocitygraph:3",
        "process": false
      },
      {
        "title": "Higher: area gives displacement",
        "text": "The signed area under a velocity–time graph gives displacement. For motion staying in one direction its magnitude gives distance. A rectangle at4 m/s lasting3 s gives12 m; a triangle from0 to8 m/s over3 s gives12 m. Below-axis area is negative displacement; add absolute areas for total distance if direction changes. Curved areas can be estimated by counting squares.",
        "scene": "frc1:velocitygraph:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-velocitygraph",
    "practice": [
      {
        "id": "frc1.velocitygraph.practice1",
        "prompt": "Velocity–time gradient gives…",
        "options": [
          "Acceleration",
          "Distance",
          "Velocity itself"
        ],
        "answer": 0,
        "why": "The gradient is velocity change divided by time, so it represents acceleration.",
        "concept": "frc1.velocitygraph"
      },
      {
        "id": "frc1.velocitygraph.practice2",
        "prompt": "A horizontal line at5 m/s means…",
        "options": [
          "Stationary",
          "Constant velocity5 m/s",
          "Acceleration5 m/s²"
        ],
        "answer": 1,
        "why": "Its gradient is zero.",
        "concept": "frc1.velocitygraph"
      },
      {
        "id": "frc1.velocitygraph.practice3",
        "prompt": "A negative velocity indicates…",
        "options": [
          "Negative time",
          "No motion",
          "Motion opposite the positive direction"
        ],
        "answer": 2,
        "why": "Sign encodes direction.",
        "concept": "frc1.velocitygraph"
      }
    ],
    "check": [
      {
        "id": "frc1.velocitygraph.check1",
        "prompt": "A line rises from3 to15 m/s in4 s. Gradient is…",
        "options": [
          "3 m/s²",
          "4.5 m/s²",
          "48 m/s²"
        ],
        "answer": 0,
        "why": "Gradient=(15−3) m/s divided by4 s=3 m/s².",
        "concept": "frc1.velocitygraph"
      },
      {
        "id": "frc1.velocitygraph.check2",
        "prompt": "Height of a velocity–time graph represents…",
        "options": [
          "Distance",
          "Velocity",
          "Acceleration"
        ],
        "answer": 1,
        "why": "Read the labelled vertical axis.",
        "concept": "frc1.velocitygraph"
      },
      {
        "id": "frc1.velocitygraph.check3",
        "prompt": "A straight downward slope above zero represents…",
        "options": [
          "Rest",
          "Increasing positive speed",
          "Constant negative acceleration while still moving forward"
        ],
        "answer": 2,
        "why": "Velocity decreases at a steady rate.",
        "concept": "frc1.velocitygraph"
      },
      {
        "id": "frc1.velocitygraph.check-higher",
        "prompt": "A triangular positive velocity–time area has base4 s and height6 m/s. Displacement is…",
        "options": [
          "12 m",
          "24 m",
          "1.5 m"
        ],
        "answer": 0,
        "why": "Half ×base×height gives12 m.",
        "concept": "frc1.velocitygraph"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model",
        "higher"
      ],
      "completionKey": "frc1Passed"
    },
    "higherQuestions": [
      "frc1.velocitygraph.check-higher"
    ]
  },
  {
    "id": "science.physics.forces.terminal",
    "title": "Falling objects and terminal velocity",
    "short": "Falling objects and terminal velocity",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.1.5"
    ],
    "combinedRefs": [
      "5.4.1.5"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "A falling object initially has weight greater than air resistance, so it accelerates downward. As speed increases, air resistance rises and the downward resultant decreases. Weight remains approximately constant for the same mass and gravitational field.",
    "learn": [
      {
        "title": "Forces change during a fall",
        "text": "A falling object initially has weight greater than air resistance, so it accelerates downward. As speed increases, air resistance rises and the downward resultant decreases. Weight remains approximately constant for the same mass and gravitational field.",
        "scene": "frc1:terminal:0",
        "process": false
      },
      {
        "title": "Reach a balanced speed",
        "text": "At terminal velocity, drag balances weight and resultant force is zero. Acceleration is zero, but the object is still moving. A larger drag at a given speed, such as an opened parachute, can give a lower terminal speed. Immediately after opening, upward drag can exceed weight and the falling object slows.",
        "scene": "frc1:terminal:1",
        "process": true,
        "processFilm": "frc1-terminal"
      },
      {
        "title": "Read the motion",
        "text": "A velocity–time trace initially gets less steep as acceleration decreases and approaches a horizontal terminal-speed region. The supplied curve is an original qualitative shape, not measured parachute data. In separate Physics you should draw and interpret such a graph and connect it to the force account.",
        "scene": "frc1:terminal:2",
        "process": false
      },
      {
        "title": "Compare force snapshots",
        "text": "Choose weight and drag, predict signed downward resultant and reveal. These selected states do not solve a complete fluid model. A nonzero upward resultant can occur while velocity is still downward: force changes velocity, not necessarily its instantaneous direction.",
        "scene": "frc1:terminal:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-terminal",
    "practice": [
      {
        "id": "frc1.terminal.practice1",
        "prompt": "Initially weight greater than drag gives…",
        "options": [
          "Downward acceleration",
          "Zero speed necessarily",
          "Upward motion immediately"
        ],
        "answer": 0,
        "why": "The resultant is downward.",
        "concept": "frc1.terminal"
      },
      {
        "id": "frc1.terminal.practice2",
        "prompt": "At terminal velocity…",
        "options": [
          "There are no forces",
          "Drag equals weight",
          "Weight disappears"
        ],
        "answer": 1,
        "why": "Balanced forces give zero acceleration.",
        "concept": "frc1.terminal"
      },
      {
        "id": "frc1.terminal.practice3",
        "prompt": "Terminal velocity means…",
        "options": [
          "The object has stopped",
          "Acceleration equals weight",
          "Constant falling velocity"
        ],
        "answer": 2,
        "why": "Velocity is nonzero and constant.",
        "concept": "frc1.terminal"
      }
    ],
    "check": [
      {
        "id": "frc1.terminal.check1",
        "prompt": "Weight20 N, drag12 N gives resultant…",
        "options": [
          "8 N down",
          "32 N down",
          "8 N up"
        ],
        "answer": 0,
        "why": "Subtract opposing forces.",
        "concept": "frc1.terminal"
      },
      {
        "id": "frc1.terminal.check2",
        "prompt": "A parachute opens and drag briefly exceeds weight. The falling object…",
        "options": [
          "Must instantly move upward",
          "Decelerates while it can still move downward",
          "Loses its mass"
        ],
        "answer": 1,
        "why": "Acceleration and velocity need not share a direction.",
        "concept": "frc1.terminal"
      },
      {
        "id": "frc1.terminal.check3",
        "prompt": "At terminal speed a velocity–time graph becomes…",
        "options": [
          "Steeper",
          "Vertical",
          "Horizontal"
        ],
        "answer": 2,
        "why": "The acceleration/gradient is zero.",
        "concept": "frc1.terminal"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.firstlaw",
    "title": "Newton’s first law and inertia",
    "short": "Newton’s first law and inertia",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.2.1"
    ],
    "combinedRefs": [
      "5.4.2.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "If the resultant force is zero, a stationary object stays at rest and a moving object continues at the same speed in the same direction. A force is needed to change velocity, not to keep an ideal object moving at constant velocity.",
    "learn": [
      {
        "title": "Keep a constant velocity",
        "text": "If the resultant force is zero, a stationary object stays at rest and a moving object continues at the same speed in the same direction. A force is needed to change velocity, not to keep an ideal object moving at constant velocity.",
        "scene": "frc1:firstlaw:0",
        "process": false
      },
      {
        "title": "Balance a real vehicle",
        "text": "A car at steady speed has drive balancing resistance. Turning a corner changes direction and therefore velocity, so it requires a resultant even if speed stays the same. Friction explains why everyday coasting objects slow when drive is removed.",
        "scene": "frc1:firstlaw:1",
        "process": true,
        "processFilm": "frc1-firstlaw"
      },
      {
        "title": "Explain the interaction",
        "text": "Identify the chosen object and all important forces on it. Ask whether the vector sum is zero. A book resting on a table has balanced support and weight on the book; these are not Newton’s third-law partners because both act on the same object.",
        "scene": "frc1:firstlaw:2",
        "process": false
      },
      {
        "title": "Remove the drive",
        "text": "Choose an ideal resistance-free track or a resistive track, then drive balanced with resistance or drive removed. Predict whether velocity stays constant or changes. The film shows an ideal no-resultant coast; it deliberately omits friction.",
        "scene": "frc1:firstlaw:3",
        "process": false
      },
      {
        "title": "Higher: inertia",
        "text": "Inertia is the tendency of an object to remain at rest or continue in uniform straight-line motion. It does not mean a new force pushes the object forward. When a bus brakes, an unrestrained passenger tends to keep moving; a restraint exerts a force to change that motion.",
        "scene": "frc1:firstlaw:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-firstlaw",
    "practice": [
      {
        "id": "frc1.firstlaw.practice1",
        "prompt": "Zero resultant means velocity…",
        "options": [
          "Stays constant",
          "Must be zero",
          "Must increase"
        ],
        "answer": 0,
        "why": "Rest is one possible constant velocity.",
        "concept": "frc1.firstlaw"
      },
      {
        "id": "frc1.firstlaw.practice2",
        "prompt": "At steady straight-line speed a driven car has…",
        "options": [
          "No resistance",
          "Balanced drive and resistance",
          "Unbalanced drive necessarily"
        ],
        "answer": 1,
        "why": "The resultant is zero.",
        "concept": "frc1.firstlaw"
      },
      {
        "id": "frc1.firstlaw.practice3",
        "prompt": "Turning at constant speed changes…",
        "options": [
          "Only mass",
          "No aspect of velocity",
          "Velocity direction"
        ],
        "answer": 2,
        "why": "Velocity is a vector.",
        "concept": "frc1.firstlaw"
      }
    ],
    "check": [
      {
        "id": "frc1.firstlaw.check1",
        "prompt": "On an ideal frictionless track, drive is removed from a moving trolley. It…",
        "options": [
          "Continues at constant velocity",
          "Immediately stops",
          "Accelerates without a resultant"
        ],
        "answer": 0,
        "why": "The first law applies when the resultant is zero.",
        "concept": "frc1.firstlaw"
      },
      {
        "id": "frc1.firstlaw.check2",
        "prompt": "A real trolley slows after a push ends because…",
        "options": [
          "Motion needs a continuing forward force in every case",
          "Resistive forces give a backward resultant",
          "Its mass vanishes"
        ],
        "answer": 1,
        "why": "Friction changes velocity.",
        "concept": "frc1.firstlaw"
      },
      {
        "id": "frc1.firstlaw.check3",
        "prompt": "Support and weight on a resting book are…",
        "options": [
          "A third-law pair",
          "Forces on different objects",
          "Balanced forces on the same object"
        ],
        "answer": 2,
        "why": "Third-law partners act on different objects.",
        "concept": "frc1.firstlaw"
      },
      {
        "id": "frc1.firstlaw.check-higher",
        "prompt": "Inertia describes the tendency to…",
        "options": [
          "Maintain rest or uniform straight-line motion",
          "Always stop without a force",
          "Accelerate without a resultant"
        ],
        "answer": 0,
        "why": "Inertia is not an additional force.",
        "concept": "frc1.firstlaw"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model",
        "higher"
      ],
      "completionKey": "frc1Passed"
    },
    "higherQuestions": [
      "frc1.firstlaw.check-higher"
    ]
  },
  {
    "id": "science.physics.forces.secondlaw",
    "title": "Newton’s second law",
    "short": "Newton’s second law",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.2.2"
    ],
    "combinedRefs": [
      "5.4.2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "F=ma links resultant force in N, mass in kg and acceleration in m/s². The acceleration is in the resultant force’s direction. Use the resultant, not just the driving force when resistance is present.",
    "learn": [
      {
        "title": "Resultant force causes acceleration",
        "text": "F=ma links resultant force in N, mass in kg and acceleration in m/s². The acceleration is in the resultant force’s direction. Use the resultant, not just the driving force when resistance is present.",
        "scene": "frc1:secondlaw:0",
        "process": false
      },
      {
        "title": "Change one variable at a time",
        "text": "At fixed mass, acceleration is proportional to resultant force. At fixed resultant force it is inversely proportional to mass: doubling mass halves acceleration. A6 N resultant on2 kg gives3 m/s². The proportionality symbol is ∝.",
        "scene": "frc1:secondlaw:1",
        "process": true,
        "processFilm": "frc1-secondlaw"
      },
      {
        "title": "Estimate real motions",
        "text": "A1000 kg car accelerating at2 m/s² requires about2000 N resultant. Actual drive must also overcome resistance. Estimates depend on supplied mass, interval and assumptions; they are not exact engine ratings.",
        "scene": "frc1:secondlaw:2",
        "process": false
      },
      {
        "title": "Predict the acceleration",
        "text": "Choose resultant force and trolley mass, predict a=F/m, then watch a from-rest trajectory with that acceleration. Total mass is the moving system’s mass. The illustrative track has no unmodelled resistance.",
        "scene": "frc1:secondlaw:3",
        "process": false
      },
      {
        "title": "Higher: inertial mass",
        "text": "Inertial mass measures how difficult it is to change velocity. It is defined as the ratio of resultant force to acceleration, m=F/a, for a consistent system and direction. A12 N resultant producing3 m/s² implies inertial mass4 kg. It is not a separate force resisting motion.",
        "scene": "frc1:secondlaw:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [
      "science.physics.forces.resultant"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-secondlaw",
    "practice": [
      {
        "id": "frc1.secondlaw.practice1",
        "prompt": "F in F=ma means…",
        "options": [
          "Resultant force",
          "Only the largest force",
          "Weight in every example"
        ],
        "answer": 0,
        "why": "Sum the forces first.",
        "concept": "frc1.secondlaw"
      },
      {
        "id": "frc1.secondlaw.practice2",
        "prompt": "At fixed mass, doubling resultant…",
        "options": [
          "Halves acceleration",
          "Doubles acceleration",
          "Leaves it unchanged"
        ],
        "answer": 1,
        "why": "At fixed mass, a=F/m makes acceleration directly proportional to resultant force.",
        "concept": "frc1.secondlaw"
      },
      {
        "id": "frc1.secondlaw.practice3",
        "prompt": "At fixed resultant, doubling mass makes acceleration…",
        "options": [
          "Double",
          "Four times larger",
          "Half"
        ],
        "answer": 2,
        "why": "a is inversely proportional to m.",
        "concept": "frc1.secondlaw"
      }
    ],
    "check": [
      {
        "id": "frc1.secondlaw.check1",
        "prompt": "A12 N resultant acts on3 kg. Acceleration is…",
        "options": [
          "4 m/s²",
          "36 m/s²",
          "0.25 m/s²"
        ],
        "answer": 0,
        "why": "Acceleration=resultant force/mass=12/3=4 m/s².",
        "concept": "frc1.secondlaw"
      },
      {
        "id": "frc1.secondlaw.check2",
        "prompt": "Drive30 N, resistance10 N, mass5 kg. Acceleration is…",
        "options": [
          "6 m/s²",
          "4 m/s²",
          "8 m/s²"
        ],
        "answer": 1,
        "why": "Resultant20 N;20/5=4.",
        "concept": "frc1.secondlaw"
      },
      {
        "id": "frc1.secondlaw.check3",
        "prompt": "To estimate acceleration from a speed change you need…",
        "options": [
          "Only force colour",
          "Only final speed",
          "Change in velocity and elapsed time"
        ],
        "answer": 2,
        "why": "Average acceleration needs the velocity change and the time, a=Δv/t.",
        "concept": "frc1.secondlaw"
      },
      {
        "id": "frc1.secondlaw.check-higher",
        "prompt": "A12 N resultant gives3 m/s². Inertial mass is…",
        "options": [
          "4 kg",
          "36 kg",
          "0.25 kg"
        ],
        "answer": 0,
        "why": "Inertial mass is resultant force divided by acceleration:12/3=4 kg.",
        "concept": "frc1.secondlaw"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model",
        "higher"
      ],
      "completionKey": "frc1Passed"
    },
    "higherQuestions": [
      "frc1.secondlaw.check-higher"
    ]
  },
  {
    "id": "science.physics.forces.accelpractical",
    "title": "Investigating force, mass and acceleration",
    "short": "Investigating force, mass and acceleration",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.2.2"
    ],
    "combinedRefs": [
      "5.4.2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Required practical7 (separate) or19 (Trilogy) tests how acceleration changes with force at fixed mass and with mass at fixed force. Use a trolley/track, pulley and falling masses or a suitable alternative, with light gates or a motion sensor. Define the moving system consistently.",
    "learn": [
      {
        "title": "Two controlled comparisons",
        "text": "Required practical7 (separate) or19 (Trilogy) tests how acceleration changes with force at fixed mass and with mass at fixed force. Use a trolley/track, pulley and falling masses or a suitable alternative, with light gates or a motion sensor. Define the moving system consistently.",
        "scene": "frc1:accelpractical:0",
        "process": false
      },
      {
        "title": "Keep total mass controlled",
        "text": "When moving masses from trolley to hanger, the total moving mass can remain constant while the driving force changes. For the mass comparison, change total moving mass but maintain the same driving force. Keep track slope/alignment and release method controlled and reduce friction.",
        "scene": "frc1:accelpractical:1",
        "process": false
      },
      {
        "title": "Collect and evaluate",
        "text": "Measure velocities/times to obtain acceleration; repeat and compare mean values, spread and anomalies. Plot a against force for fixed mass and a against1/m for fixed force to test proportional predictions. Consider pulley inertia, track friction, sensor alignment and masses reaching the floor; catch the trolley safely.",
        "scene": "frc1:accelpractical:2",
        "process": false
      },
      {
        "title": "Analyse an ideal trial",
        "text": "Choose total moving mass and a supplied resultant force; predict acceleration. Here F is the known resultant, unlike a real hanging weight where tension, friction and acceleration of the hanger require attention. Generated readings have no noise; physical performance and independent graph construction remain separate.",
        "scene": "frc1:accelpractical:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-accelpractical",
    "practice": [
      {
        "id": "frc1.accelpractical.practice1",
        "prompt": "To vary force at fixed total moving mass, masses can be…",
        "options": [
          "Transferred from trolley to hanger",
          "Added to both without accounting",
          "Removed from the whole system unnoticed"
        ],
        "answer": 0,
        "why": "The redistribution changes drive while total moving mass stays fixed.",
        "concept": "frc1.accelpractical"
      },
      {
        "id": "frc1.accelpractical.practice2",
        "prompt": "To test mass at fixed force, control…",
        "options": [
          "Only trolley colour",
          "Driving/resultant force and track conditions",
          "The measured acceleration itself"
        ],
        "answer": 1,
        "why": "Acceleration is the dependent variable.",
        "concept": "frc1.accelpractical"
      },
      {
        "id": "frc1.accelpractical.practice3",
        "prompt": "Repeated readings help evaluate…",
        "options": [
          "Only the apparatus name",
          "Only units",
          "Variation and anomalous measurements"
        ],
        "answer": 2,
        "why": "They provide evidence about repeatability.",
        "concept": "frc1.accelpractical"
      }
    ],
    "check": [
      {
        "id": "frc1.accelpractical.check1",
        "prompt": "A doubles when F doubles at fixed mass. This supports…",
        "options": [
          "a∝F",
          "a∝1/F",
          "No relationship"
        ],
        "answer": 0,
        "why": "Direct proportionality predicts that change.",
        "concept": "frc1.accelpractical"
      },
      {
        "id": "frc1.accelpractical.check2",
        "prompt": "A major omitted effect in an ideal trolley model is…",
        "options": [
          "Whether it is drawn blue",
          "Friction and pulley effects",
          "The question number"
        ],
        "answer": 1,
        "why": "Real resultant force needs evaluation.",
        "concept": "frc1.accelpractical"
      },
      {
        "id": "frc1.accelpractical.check3",
        "prompt": "For fixed force, a plotted against1/m should ideally be…",
        "options": [
          "A horizontal line",
          "A decreasing straight line",
          "A straight line through the origin"
        ],
        "answer": 2,
        "why": "At fixed F, a=F(1/m), so plotting a against1/m gives a proportional straight line.",
        "concept": "frc1.accelpractical"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.thirdlaw",
    "title": "Newton’s third law",
    "short": "Newton’s third law",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.2.3"
    ],
    "combinedRefs": [
      "5.4.2.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "When two objects interact, each exerts an equal-magnitude opposite-direction force on the other. Both forces are the same interaction type and act at the same time, on different objects. A larger object does not exert the larger member of the pair.",
    "learn": [
      {
        "title": "Interactions come in pairs",
        "text": "When two objects interact, each exerts an equal-magnitude opposite-direction force on the other. Both forces are the same interaction type and act at the same time, on different objects. A larger object does not exert the larger member of the pair.",
        "scene": "frc1:thirdlaw:0",
        "process": false
      },
      {
        "title": "Name what acts on what",
        "text": "A hand pushes a wall; the wall pushes the hand oppositely. Earth pulls a falling object; the object pulls Earth oppositely. Equal forces can give very different accelerations because the masses differ. Do not put both forces in one object’s free-body diagram.",
        "scene": "frc1:thirdlaw:1",
        "process": false
      },
      {
        "title": "Equilibrium is a different account",
        "text": "Weight and support can balance on a stationary book, but their partners are book-on-Earth and book-on-table. Balanced forces act on the same object and may be different types; third-law partners act on different objects and are the same type.",
        "scene": "frc1:thirdlaw:2",
        "process": false
      },
      {
        "title": "Compare paired forces",
        "text": "Choose the magnitude of objectA onB and label its direction. Predict the signed force ofB onA, with right positive. The paired arrows sit on separate objects. No common acceleration is assumed, and the arrows do not cancel on one object.",
        "scene": "frc1:thirdlaw:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-thirdlaw",
    "practice": [
      {
        "id": "frc1.thirdlaw.practice1",
        "prompt": "Third-law partners act on…",
        "options": [
          "Different objects",
          "The same object",
          "Only objects with equal mass"
        ],
        "answer": 0,
        "why": "They arise from one mutual interaction.",
        "concept": "frc1.thirdlaw"
      },
      {
        "id": "frc1.thirdlaw.practice2",
        "prompt": "The two partner forces are…",
        "options": [
          "Unequal if masses differ",
          "Equal magnitude, opposite direction",
          "Equal direction"
        ],
        "answer": 1,
        "why": "The accelerations may still differ.",
        "concept": "frc1.thirdlaw"
      },
      {
        "id": "frc1.thirdlaw.practice3",
        "prompt": "Weight/support on one book are…",
        "options": [
          "A third-law pair",
          "Always unequal",
          "A possible balanced pair, not third-law partners"
        ],
        "answer": 2,
        "why": "They act on the same object.",
        "concept": "frc1.thirdlaw"
      }
    ],
    "check": [
      {
        "id": "frc1.thirdlaw.check1",
        "prompt": "A lorry exerts500 N on a small car. Car-on-lorry force is…",
        "options": [
          "500 N opposite",
          "Smaller because car is lighter",
          "Zero"
        ],
        "answer": 0,
        "why": "Partner force magnitudes are equal.",
        "concept": "frc1.thirdlaw"
      },
      {
        "id": "frc1.thirdlaw.check2",
        "prompt": "Earth and an apple have different accelerations because…",
        "options": [
          "Their gravity forces differ in magnitude",
          "Their masses differ",
          "Only the apple feels gravity"
        ],
        "answer": 1,
        "why": "a=F/m for equal force magnitudes.",
        "concept": "frc1.thirdlaw"
      },
      {
        "id": "frc1.thirdlaw.check3",
        "prompt": "Partner to table-on-book support is…",
        "options": [
          "Earth-on-book gravity",
          "Book-on-Earth gravity",
          "Book-on-table contact"
        ],
        "answer": 2,
        "why": "Reverse the acting and receiving objects for the same interaction.",
        "concept": "frc1.thirdlaw"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.stopping",
    "title": "Thinking distance, reaction time and stopping",
    "short": "Thinking distance, reaction time and stopping",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.3.1",
      "5.6.3.2",
      "5.6.3.3"
    ],
    "combinedRefs": [
      "5.4.3.1",
      "5.4.3.2",
      "5.4.3.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Stopping distance = thinking distance + braking distance. During reaction time the vehicle is still travelling before braking begins. At roughly constant speed, thinking distance = speed × reaction time. Braking distance begins when the brakes act.",
    "learn": [
      {
        "title": "Two parts of stopping",
        "text": "Stopping distance = thinking distance + braking distance. During reaction time the vehicle is still travelling before braking begins. At roughly constant speed, thinking distance = speed × reaction time. Braking distance begins when the brakes act.",
        "scene": "frc1:stopping:0",
        "process": false
      },
      {
        "title": "Reaction time varies",
        "text": "Typical human reaction times are about0.2–0.9 s. Tiredness, drugs/alcohol and distractions can increase reaction time. Measure with a ruler-drop test or a computer/light response test; control anticipation and practise effects, repeat and compare variability. A ruler measures fall distance, which must be converted to time using a supplied relationship.",
        "scene": "frc1:stopping:1",
        "process": true,
        "processFilm": "frc1-stopping"
      },
      {
        "title": "Road and vehicle conditions",
        "text": "Wet/icy roads and poor tyres/brakes can increase braking distance by reducing effective braking. They need not increase the driver’s intrinsic reaction time. Higher speed increases thinking distance and usually braking distance. Compare supplied emergency-stop graphs for different vehicles/conditions; values are not interchangeable universal rules.",
        "scene": "frc1:stopping:2",
        "process": false
      },
      {
        "title": "Watch the thinking interval",
        "text": "Choose speed and reaction time; predict distance travelled before braking starts. The loop separates a highlighted thinking phase from an illustrative later braking phase. Its selected control predicts only thinking distance; actual braking needs additional force/mass/road information.",
        "scene": "frc1:stopping:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-stopping",
    "practice": [
      {
        "id": "frc1.stopping.practice1",
        "prompt": "Stopping distance is…",
        "options": [
          "Thinking plus braking distance",
          "Only braking distance",
          "Speed plus time"
        ],
        "answer": 0,
        "why": "The thinking interval comes before brake application.",
        "concept": "frc1.stopping"
      },
      {
        "id": "frc1.stopping.practice2",
        "prompt": "At fixed speed, a longer reaction time gives…",
        "options": [
          "Less thinking distance",
          "More thinking distance",
          "Identical thinking distance"
        ],
        "answer": 1,
        "why": "Distance=vt during reaction.",
        "concept": "frc1.stopping"
      },
      {
        "id": "frc1.stopping.practice3",
        "prompt": "Wet roads mainly affect the…",
        "options": [
          "Atomic mass",
          "Direction convention",
          "Braking distance"
        ],
        "answer": 2,
        "why": "Grip/braking performance can change.",
        "concept": "frc1.stopping"
      }
    ],
    "check": [
      {
        "id": "frc1.stopping.check1",
        "prompt": "At10 m/s and reaction0.6 s, thinking distance is…",
        "options": [
          "6 m",
          "16.7 m",
          "0.06 m"
        ],
        "answer": 0,
        "why": "Thinking distance=speed×reaction time=10×0.6=6 m.",
        "concept": "frc1.stopping"
      },
      {
        "id": "frc1.stopping.check2",
        "prompt": "Thinking8 m and braking24 m give stopping distance…",
        "options": [
          "16 m",
          "32 m",
          "3 m"
        ],
        "answer": 1,
        "why": "Add the two distances.",
        "concept": "frc1.stopping"
      },
      {
        "id": "frc1.stopping.check3",
        "prompt": "To compare reaction tests fairly, consider…",
        "options": [
          "Only the ruler colour",
          "Only the tallest student",
          "Practice, anticipation, repeats and test conditions"
        ],
        "answer": 2,
        "why": "Method effects can alter the apparent reaction time.",
        "concept": "frc1.stopping"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.braking",
    "title": "Braking, energy and deceleration",
    "short": "Braking, energy and deceleration",
    "topicId": "science.physics.forces",
    "refs": [
      "5.6.3.3",
      "5.6.3.4"
    ],
    "combinedRefs": [
      "5.4.3.3",
      "5.4.3.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Brake friction transfers energy from the vehicle’s kinetic store to internal energy of brakes and surroundings; brake temperature rises. Work done by an approximately constant braking force is Fs. Setting that equal to½mv² gives an ideal stopping-energy account.",
    "learn": [
      {
        "title": "Transfer kinetic energy",
        "text": "Brake friction transfers energy from the vehicle’s kinetic store to internal energy of brakes and surroundings; brake temperature rises. Work done by an approximately constant braking force is Fs. Setting that equal to½mv² gives an ideal stopping-energy account.",
        "scene": "frc1:braking:0",
        "process": false
      },
      {
        "title": "Speed matters strongly",
        "text": "For fixed mass and braking force, doubling speed gives four times the initial kinetic energy and four times the ideal braking distance. Real road grip, brake/tyre condition and weather alter the available force. These assumptions must be stated when interpreting a squared-speed trend.",
        "scene": "frc1:braking:1",
        "process": true,
        "processFilm": "frc1-braking"
      },
      {
        "title": "Deceleration and control",
        "text": "For a given distance, greater speed requires greater braking force. Larger braking force gives larger deceleration. Very large deceleration can cause loss of control and brakes can overheat. A generated energy comparison cannot establish safe stopping distances for a real journey.",
        "scene": "frc1:braking:2",
        "process": false
      },
      {
        "title": "Compare an ideal stop",
        "text": "The toy vehicle has mass1000 kg. Choose speed and constant opposing force; predict distance from½mv²/F. The film shows velocity falling and transferred energy increasing; it omits thinking time, tyre dynamics, brake fading, gradient and drag.",
        "scene": "frc1:braking:3",
        "process": false
      },
      {
        "title": "Higher: estimate braking forces",
        "text": "For a1000 kg vehicle slowing from20 m/s to rest in4 s, acceleration is−5 m/s² and resultant force is−5000 N. Alternatively energy lost200000 J over40 m gives average opposing force5000 N in an ideal level-road account. State whether your result is resultant force or braking force and which other forces are neglected.",
        "scene": "frc1:braking:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [
      "science.physics.energy.kinetic"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-braking",
    "practice": [
      {
        "id": "frc1.braking.practice1",
        "prompt": "Braking transfers kinetic energy mainly into…",
        "options": [
          "Internal energy",
          "Extra mass",
          "New protons"
        ],
        "answer": 0,
        "why": "Brakes and surroundings warm.",
        "concept": "frc1.braking"
      },
      {
        "id": "frc1.braking.practice2",
        "prompt": "At fixed mass/force, doubling speed makes ideal braking distance…",
        "options": [
          "Double",
          "Four times as large",
          "Half"
        ],
        "answer": 1,
        "why": "Initial kinetic energy depends on v².",
        "concept": "frc1.braking"
      },
      {
        "id": "frc1.braking.practice3",
        "prompt": "Greater braking force gives…",
        "options": [
          "Less deceleration always",
          "No energy transfer",
          "Greater deceleration"
        ],
        "answer": 2,
        "why": "F=ma relates resultant force to acceleration.",
        "concept": "frc1.braking"
      }
    ],
    "check": [
      {
        "id": "frc1.braking.check1",
        "prompt": "A car’s speed triples at fixed mass. Its kinetic energy becomes…",
        "options": [
          "Nine times larger",
          "Three times larger",
          "One-third"
        ],
        "answer": 0,
        "why": "Energy scales with speed squared.",
        "concept": "frc1.braking"
      },
      {
        "id": "frc1.braking.check2",
        "prompt": "Why can an ideal model underestimate a real stop?",
        "options": [
          "Its units are correct",
          "Grip, overheating and other conditions differ",
          "Energy is always destroyed"
        ],
        "answer": 1,
        "why": "The simplified constant-force assumptions can fail.",
        "concept": "frc1.braking"
      },
      {
        "id": "frc1.braking.check3",
        "prompt": "At fixed braking force, a heavier vehicle at the same speed has…",
        "options": [
          "Less kinetic energy",
          "Zero braking work",
          "More kinetic energy and ideal braking distance"
        ],
        "answer": 2,
        "why": "Both are proportional to mass under the assumptions.",
        "concept": "frc1.braking"
      },
      {
        "id": "frc1.braking.check-higher",
        "prompt": "A1000 kg car slows20 m/s to rest in5 s. Average resultant is…",
        "options": [
          "−4000 N",
          "+4000 N",
          "−100 N"
        ],
        "answer": 0,
        "why": "a=−4 m/s², F=ma.",
        "concept": "frc1.braking"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model",
        "higher"
      ],
      "completionKey": "frc1Passed"
    },
    "higherQuestions": [
      "frc1.braking.check-higher"
    ]
  },
  {
    "id": "science.physics.forces.momentum",
    "title": "Momentum and conservation",
    "short": "Momentum and conservation",
    "topicId": "science.physics.forces",
    "refs": [
      "5.7.1",
      "5.7.2"
    ],
    "combinedRefs": [
      "5.5.1",
      "5.5.2"
    ],
    "separate": false,
    "higher": true,
    "minutes": 35,
    "big": "Momentum p=mv, in kg m/s. It is a vector, so choose positive direction and include signs. A2 kg trolley at3 m/s has momentum6 kg m/s. Equal speeds do not imply equal momentum if masses differ.",
    "learn": [
      {
        "title": "Mass times velocity",
        "text": "Momentum p=mv, in kg m/s. It is a vector, so choose positive direction and include signs. A2 kg trolley at3 m/s has momentum6 kg m/s. Equal speeds do not imply equal momentum if masses differ.",
        "scene": "frc1:momentum:0",
        "process": false
      },
      {
        "title": "Define the closed system",
        "text": "Total momentum before an event equals total momentum after if the system has no resultant external force during it. The interaction forces between objects are internal; they redistribute momentum without changing the system total. Momentum conservation does not require kinetic energy conservation in every collision.",
        "scene": "frc1:momentum:1",
        "process": true,
        "processFilm": "frc1-momentum"
      },
      {
        "title": "Explain a collision",
        "text": "If a moving trolley hits a stationary one, momentum can transfer to it. In a sticking collision the combined mass moves more slowly than the original trolley for equal masses. In explosions, opposite signed momenta can sum to the initial total. Direction signs prevent adding magnitudes incorrectly.",
        "scene": "frc1:momentum:2",
        "process": false
      },
      {
        "title": "Explore the momentum account",
        "text": "Choose mass and signed velocity. Predict momentum and reveal a moving trolley with an arrow in its velocity direction. The demonstration isolates p=mv; the loop does not simulate an elastic collision law. Numerical two-object collision solving is reserved for the separate-Physics extension.",
        "scene": "frc1:momentum:3",
        "process": false
      }
    ],
    "prerequisites": [],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-momentum",
    "practice": [
      {
        "id": "frc1.momentum.practice1",
        "prompt": "Momentum is…",
        "options": [
          "Mass times velocity",
          "Mass divided by velocity",
          "Only speed"
        ],
        "answer": 0,
        "why": "Momentum is mass times signed velocity, p=mv, in kg m/s.",
        "concept": "frc1.momentum"
      },
      {
        "id": "frc1.momentum.practice2",
        "prompt": "Momentum conservation requires…",
        "options": [
          "No internal interactions",
          "No resultant external force on the system",
          "Every collision to be elastic"
        ],
        "answer": 1,
        "why": "Choose the system boundary.",
        "concept": "frc1.momentum"
      },
      {
        "id": "frc1.momentum.practice3",
        "prompt": "A negative momentum indicates…",
        "options": [
          "Negative mass",
          "No motion",
          "Motion opposite the chosen positive direction"
        ],
        "answer": 2,
        "why": "Momentum is a signed vector component.",
        "concept": "frc1.momentum"
      }
    ],
    "check": [
      {
        "id": "frc1.momentum.check1",
        "prompt": "3 kg at−2 m/s has momentum…",
        "options": [
          "−6 kg m/s",
          "+6 kg m/s",
          "−1.5 kg m/s"
        ],
        "answer": 0,
        "why": "Mass is positive; velocity sets the sign.",
        "concept": "frc1.momentum"
      },
      {
        "id": "frc1.momentum.check2",
        "prompt": "Two trolleys stick. Kinetic energy…",
        "options": [
          "Must stay constant because momentum does",
          "Can decrease while total momentum is conserved",
          "Must increase"
        ],
        "answer": 1,
        "why": "Energy can transfer to internal stores/sound.",
        "concept": "frc1.momentum"
      },
      {
        "id": "frc1.momentum.check3",
        "prompt": "A closed explosion starting from rest must have…",
        "options": [
          "Both momenta in the same direction",
          "No fragment motion",
          "Final vector momentum sum zero"
        ],
        "answer": 2,
        "why": "Internal forces cannot change the system total.",
        "concept": "frc1.momentum"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.collisions",
    "title": "Calculating collision and recoil momentum",
    "short": "Calculating collision and recoil momentum",
    "topicId": "science.physics.forces",
    "refs": [
      "5.7.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": true,
    "minutes": 35,
    "big": "For an isolated two-object event, m₁u₁+m₂u₂=m₁v₁+m₂v₂ along a chosen positive direction. Include both objects and signs. This numerical collision-solving requirement is separate Physics Higher; Trilogy uses the conservation concept.",
    "learn": [
      {
        "title": "Write before equals after",
        "text": "For an isolated two-object event, m₁u₁+m₂u₂=m₁v₁+m₂v₂ along a chosen positive direction. Include both objects and signs. This numerical collision-solving requirement is separate Physics Higher; Trilogy uses the conservation concept.",
        "scene": "frc1:collisions:0",
        "process": false
      },
      {
        "title": "A sticking example",
        "text": "A2 kg trolley at3 m/s sticks to a stationary4 kg trolley. Initial momentum6 kg m/s equals6v afterwards, so v=1 m/s. Check that units are kg m/s and final velocity is plausible. Kinetic energy decreases; momentum still balances.",
        "scene": "frc1:collisions:1",
        "process": true,
        "processFilm": "frc1-collisions"
      },
      {
        "title": "Recoil and opposite directions",
        "text": "An initially stationary system has total momentum zero. If a1 kg object leaves at+4 m/s, the remaining2 kg must have−4 kg m/s and velocity−2 m/s. Opposite signs matter; do not conserve scalar speeds. Real external forces may make a chosen system only approximately isolated.",
        "scene": "frc1:collisions:2",
        "process": false
      },
      {
        "title": "Predict a sticking collision",
        "text": "The target trolley has mass2 kg and starts at rest. Choose moving mass and initial velocity; predict their common final velocity. The animation shows a single ideal sticking event and a momentum ledger. It omits wheel friction, deformation detail and kinetic-energy recovery.",
        "scene": "frc1:collisions:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.forces.momentum"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-collisions",
    "practice": [
      {
        "id": "frc1.collisions.practice1",
        "prompt": "In collision calculations conserve total…",
        "options": [
          "Signed momentum",
          "Speed",
          "Kinetic energy in every case"
        ],
        "answer": 0,
        "why": "Direction is part of the vector account.",
        "concept": "frc1.collisions"
      },
      {
        "id": "frc1.collisions.practice2",
        "prompt": "After trolleys stick, the moving mass is…",
        "options": [
          "Only the original moving trolley",
          "The sum of both masses",
          "Always1 kg"
        ],
        "answer": 1,
        "why": "They share the final velocity.",
        "concept": "frc1.collisions"
      },
      {
        "id": "frc1.collisions.practice3",
        "prompt": "An explosion from rest gives final momenta whose sum is…",
        "options": [
          "Always positive",
          "Equal to total mass",
          "Zero"
        ],
        "answer": 2,
        "why": "Assuming no resultant external force.",
        "concept": "frc1.collisions"
      }
    ],
    "check": [
      {
        "id": "frc1.collisions.check1",
        "prompt": "1 kg at6 m/s sticks to stationary2 kg. Final velocity is…",
        "options": [
          "2 m/s",
          "6 m/s",
          "3 m/s"
        ],
        "answer": 0,
        "why": "6 kg m/s divided by3 kg.",
        "concept": "frc1.collisions"
      },
      {
        "id": "frc1.collisions.check2",
        "prompt": "A1 kg piece has+6 kg m/s. A3 kg remainder from a system initially at rest has velocity…",
        "options": [
          "+2 m/s",
          "−2 m/s",
          "−6 m/s"
        ],
        "answer": 1,
        "why": "Its momentum is−6;divide by3.",
        "concept": "frc1.collisions"
      },
      {
        "id": "frc1.collisions.check3",
        "prompt": "A result giving more momentum after an isolated collision than before suggests…",
        "options": [
          "A valid closed-system solution",
          "That direction is irrelevant",
          "An error in signs, masses or assumptions"
        ],
        "answer": 2,
        "why": "Check both sides of the equation.",
        "concept": "frc1.collisions"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  },
  {
    "id": "science.physics.forces.impact",
    "title": "Force, momentum change and protection",
    "short": "Force, momentum change and protection",
    "topicId": "science.physics.forces",
    "refs": [
      "5.7.3"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": true,
    "minutes": 35,
    "big": "A resultant force changes momentum. Average force F=Δp/Δt, in newtons. Use final momentum minus initial momentum and a consistent positive direction. A2 kg object slowing from10 m/s to rest changes momentum by−20 kg m/s.",
    "learn": [
      {
        "title": "Change momentum over time",
        "text": "A resultant force changes momentum. Average force F=Δp/Δt, in newtons. Use final momentum minus initial momentum and a consistent positive direction. A2 kg object slowing from10 m/s to rest changes momentum by−20 kg m/s.",
        "scene": "frc1:impact:0",
        "process": false
      },
      {
        "title": "Spread the change over longer time",
        "text": "For the same momentum change, increasing collision time reduces average force. Seat belts, airbags, crumple zones and landing mats increase stopping time/distance while restraining or cushioning motion. They do not remove the momentum change required to stop an object.",
        "scene": "frc1:impact:1",
        "process": true,
        "processFilm": "frc1-impact"
      },
      {
        "title": "Evaluate a protection claim",
        "text": "A force calculated from Δp/Δt is an average, not necessarily the peak. Compare supplied time, force and injury-related evidence; a longer stopping interval alone does not guarantee every outcome. Protection must restrain the object effectively and avoid additional hazards.",
        "scene": "frc1:impact:2",
        "process": false
      },
      {
        "title": "Compare two stopping times",
        "text": "A toy object of2 kg stops from a selected speed. Choose stopping time and predict force magnitude2v/t. The animation stretches the stopping sequence for clarity. It is not a crash-test body model or a design certification.",
        "scene": "frc1:impact:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.forces.momentum"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "frc1-impact",
    "practice": [
      {
        "id": "frc1.impact.practice1",
        "prompt": "Average force equals…",
        "options": [
          "Momentum change divided by time",
          "Momentum change times time",
          "Only the mass"
        ],
        "answer": 0,
        "why": "Average resultant force is the signed change in momentum divided by the stopping interval.",
        "concept": "frc1.impact"
      },
      {
        "id": "frc1.impact.practice2",
        "prompt": "For the same Δp, doubling stopping time…",
        "options": [
          "Doubles force",
          "Halves average force",
          "Removes all force"
        ],
        "answer": 1,
        "why": "Force is inversely proportional to time.",
        "concept": "frc1.impact"
      },
      {
        "id": "frc1.impact.practice3",
        "prompt": "An average force is…",
        "options": [
          "Always the peak force",
          "An injury guarantee",
          "A time-averaged momentum-change rate"
        ],
        "answer": 2,
        "why": "Real force can vary throughout the collision.",
        "concept": "frc1.impact"
      }
    ],
    "check": [
      {
        "id": "frc1.impact.check1",
        "prompt": "Momentum changes by−30 kg m/s in0.5 s. Average force is…",
        "options": [
          "−60 N",
          "−15 N",
          "+60 N"
        ],
        "answer": 0,
        "why": "Use the signed change divided by time.",
        "concept": "frc1.impact"
      },
      {
        "id": "frc1.impact.check2",
        "prompt": "An airbag reduces average force by…",
        "options": [
          "Eliminating the stopping momentum change",
          "Increasing stopping time",
          "Removing mass"
        ],
        "answer": 1,
        "why": "The same object still has to stop.",
        "concept": "frc1.impact"
      },
      {
        "id": "frc1.impact.check3",
        "prompt": "A useful model limitation is…",
        "options": [
          "It draws arrows",
          "It uses numbers",
          "It gives average force without a peak-force/body response model"
        ],
        "answer": 2,
        "why": "That limits claims about injury or equipment performance.",
        "concept": "frc1.impact"
      }
    ],
    "widgetRequirements": {
      "Foundation": [
        "compare",
        "calculate",
        "model"
      ],
      "Higher": [
        "compare",
        "calculate",
        "model"
      ],
      "completionKey": "frc1Passed"
    }
  }
];
export const frc1Concepts={"frc1.vectors": "Scalars, vectors and interactions", "frc1.weight": "Mass, weight and gravity", "frc1.resultant": "Resultant forces in a straight line", "frc1.components": "Force components and scale diagrams", "frc1.work": "Work done by a force", "frc1.elasticity": "Elasticity and force–extension graphs", "frc1.springs": "Investigating force and extension", "frc1.moments": "Moments, levers and gears", "frc1.pressure": "Fluid pressure and surface forces", "frc1.depth": "Liquid depth, upthrust and floating", "frc1.atmosphere": "Atmospheric pressure and altitude", "frc1.motion": "Distance, displacement, speed and velocity", "frc1.distancegraph": "Reading distance–time graphs", "frc1.acceleration": "Acceleration and uniform-motion calculations", "frc1.velocitygraph": "Velocity–time graphs", "frc1.terminal": "Falling objects and terminal velocity", "frc1.firstlaw": "Newton’s first law and inertia", "frc1.secondlaw": "Newton’s second law", "frc1.accelpractical": "Investigating force, mass and acceleration", "frc1.thirdlaw": "Newton’s third law", "frc1.stopping": "Thinking distance, reaction time and stopping", "frc1.braking": "Braking, energy and deceleration", "frc1.momentum": "Momentum and conservation", "frc1.collisions": "Calculating collision and recoil momentum", "frc1.impact": "Force, momentum change and protection"};
