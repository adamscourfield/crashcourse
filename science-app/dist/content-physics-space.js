export const spa1Lessons=[
  {
    "id": "science.physics.space-physics.system",
    "title": "Our solar system and the birth of stars",
    "short": "Our solar system and the birth of stars",
    "topicId": "science.physics.space-physics",
    "refs": [
      "8.1.1"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Our solar system contains one star, the Sun, eight planets, dwarf planets and natural satellites such as moons orbiting planets. The solar system is a small part of the Milky Way galaxy. A galaxy is not another name for one solar system.",
    "learn": [
      {
        "title": "A system inside a galaxy",
        "text": "Our solar system contains one star, the Sun, eight planets, dwarf planets and natural satellites such as moons orbiting planets. The solar system is a small part of the Milky Way galaxy. A galaxy is not another name for one solar system.",
        "scene": "spa1:system:0",
        "process": false
      },
      {
        "title": "Gravity forms a protostar",
        "text": "The Sun formed from a nebula of gas and dust drawn together by gravity. As the cloud contracts, temperature and pressure rise. A hot protostar forms; when conditions permit, hydrogen fusion begins in the core. Fusion is a nuclear process, not chemical burning.",
        "scene": "spa1:system:1",
        "process": true,
        "processFilm": "spa1-system"
      },
      {
        "title": "A stable main-sequence star",
        "text": "Energy from fusion supports an outward effect against gravitational collapse. A stable main-sequence star has a balance between inward gravity and outward pressure effects associated with fusion energy. This is a dynamic energy-producing state, not a star with no forces.",
        "scene": "spa1:system:2",
        "process": false
      },
      {
        "title": "Place an object in the hierarchy",
        "text": "Choose a planet/moon and its orbit centre. Predict whether that is the stated natural relationship. The orbit animation is a teaching diagram: planet sizes, separations and periods are independently exaggerated; the star-formation process uses a separate time scale.",
        "scene": "spa1:system:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.atomic-structure.fusion"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "spa1-system",
    "practice": [
      {
        "id": "spa1.system.practice1",
        "prompt": "Our solar system is part of…",
        "options": [
          "The Milky Way galaxy",
          "Every galaxy simultaneously",
          "Only Earth’s atmosphere"
        ],
        "answer": 0,
        "why": "A galaxy contains many stars and systems.",
        "concept": "spa1.system"
      },
      {
        "id": "spa1.system.practice2",
        "prompt": "A nebula contracts mainly because of…",
        "options": [
          "Only electron colour",
          "Gravitational attraction",
          "Sound in vacuum"
        ],
        "answer": 1,
        "why": "Gravity draws matter together.",
        "concept": "spa1.system"
      },
      {
        "id": "spa1.system.practice3",
        "prompt": "Main-sequence stability involves…",
        "options": [
          "No gravity",
          "No energy release",
          "A balance of gravitational collapse and outward effects from fusion energy"
        ],
        "answer": 2,
        "why": "Fusion maintains the energy supply.",
        "concept": "spa1.system"
      }
    ],
    "check": [
      {
        "id": "spa1.system.check1",
        "prompt": "A natural satellite normally orbits…",
        "options": [
          "A planet",
          "Only a laboratory",
          "Only another galaxy"
        ],
        "answer": 0,
        "why": "Moons are natural satellites.",
        "concept": "spa1.system"
      },
      {
        "id": "spa1.system.check2",
        "prompt": "At the start of a star’s life, contraction causes…",
        "options": [
          "Permanent cooling to absolute zero",
          "Rising temperature/pressure enabling fusion",
          "No physical change"
        ],
        "answer": 1,
        "why": "The core must become hot enough.",
        "concept": "spa1.system"
      },
      {
        "id": "spa1.system.check3",
        "prompt": "The Sun’s energy source is…",
        "options": [
          "Ordinary coal burning",
          "Only stored sound",
          "Nuclear fusion"
        ],
        "answer": 2,
        "why": "Light nuclei join and release energy.",
        "concept": "spa1.system"
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
      "completionKey": "spa1Passed"
    }
  },
  {
    "id": "science.physics.space-physics.stars",
    "title": "Stellar life cycles and new elements",
    "short": "Stellar life cycles and new elements",
    "topicId": "science.physics.space-physics",
    "refs": [
      "8.1.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "A star’s life cycle depends on its initial mass. Both pathways begin nebula → protostar → main sequence. Fusion builds heavier nuclei from lighter ones and releases energy in the stages considered here. A star does not become a planet when its fuel changes.",
    "learn": [
      {
        "title": "Mass sets the pathway",
        "text": "A star’s life cycle depends on its initial mass. Both pathways begin nebula → protostar → main sequence. Fusion builds heavier nuclei from lighter ones and releases energy in the stages considered here. A star does not become a planet when its fuel changes.",
        "scene": "spa1:stars:0",
        "process": false
      },
      {
        "title": "A Sun-sized star",
        "text": "After its main-sequence phase a Sun-sized star expands into a red giant. It sheds outer layers, leaving a hot dense white dwarf that cools. The GCSE pathway describes a later black dwarf; the universe is not yet old enough for white dwarfs to have cooled fully to such objects.",
        "scene": "spa1:stars:1",
        "process": true,
        "processFilm": "spa1-stars"
      },
      {
        "title": "A much more massive star",
        "text": "A high-mass star becomes a red supergiant, then undergoes a supernova, leaving a neutron star or black hole depending on the remnant. Fusion in stars produces nuclei up to iron in the GCSE account; supernova processes produce heavier elements and disperse elements into space. Detailed modern neutron-star-merger nucleosynthesis is beyond the required model.",
        "scene": "spa1:stars:2",
        "process": false
      },
      {
        "title": "Choose the branch",
        "text": "Select a Sun-like/high-mass star and an endpoint candidate. Predict whether it matches that pathway. A branching animated timeline shows the two sequences; spacing and playback times are symbolic, not relative stellar lifetimes or a forecast for a particular observed star.",
        "scene": "spa1:stars:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.space-physics.system"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "spa1-stars",
    "practice": [
      {
        "id": "spa1.stars.practice1",
        "prompt": "The main determinant of a star’s life pathway is its…",
        "options": [
          "Initial mass",
          "Screen colour",
          "Distance from Earth alone"
        ],
        "answer": 0,
        "why": "Mass controls the conditions and evolution.",
        "concept": "spa1.stars"
      },
      {
        "id": "spa1.stars.practice2",
        "prompt": "A Sun-like star leaves a…",
        "options": [
          "Mandatory black hole",
          "White dwarf after red-giant stages",
          "Neutron star after every case"
        ],
        "answer": 1,
        "why": "The high-mass pathway is different.",
        "concept": "spa1.stars"
      },
      {
        "id": "spa1.stars.practice3",
        "prompt": "A supernova helps distribute…",
        "options": [
          "Only original hydrogen",
          "Only photons with no matter",
          "Elements into surrounding space"
        ],
        "answer": 2,
        "why": "This enriches material for later systems.",
        "concept": "spa1.stars"
      }
    ],
    "check": [
      {
        "id": "spa1.stars.check1",
        "prompt": "A high-mass star can end as…",
        "options": [
          "A neutron star or black hole",
          "Only a white dwarf",
          "A small rocky planet"
        ],
        "answer": 0,
        "why": "The remnant outcome depends on its mass.",
        "concept": "spa1.stars"
      },
      {
        "id": "spa1.stars.check2",
        "prompt": "Elements heavier than iron in the required stellar account are formed in…",
        "options": [
          "Ordinary chemical burning",
          "Supernova processes",
          "Electron-shell filling alone"
        ],
        "answer": 1,
        "why": "The specification uses this stellar model.",
        "concept": "spa1.stars"
      },
      {
        "id": "spa1.stars.check3",
        "prompt": "A black dwarf stage should be understood as…",
        "options": [
          "A common directly observed object",
          "The same as a black hole",
          "A theoretical cooled remnant not yet expected within the universe’s age"
        ],
        "answer": 2,
        "why": "Cooling time is extremely long.",
        "concept": "spa1.stars"
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
      "completionKey": "spa1Passed"
    }
  },
  {
    "id": "science.physics.space-physics.orbits",
    "title": "Gravity and orbital motion",
    "short": "Gravity and orbital motion",
    "topicId": "science.physics.space-physics",
    "refs": [
      "8.1.3"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Gravity provides the inward force that maintains a planet or satellite’s circular orbit. The object’s velocity is tangent to the path while the force points toward the centre. It is continuously falling toward the central body rather than needing an outward thrust to balance gravity.",
    "learn": [
      {
        "title": "Gravity keeps an orbit turning",
        "text": "Gravity provides the inward force that maintains a planet or satellite’s circular orbit. The object’s velocity is tangent to the path while the force points toward the centre. It is continuously falling toward the central body rather than needing an outward thrust to balance gravity.",
        "scene": "spa1:orbits:0",
        "process": false
      },
      {
        "title": "Natural and artificial satellites",
        "text": "Planets orbit their star; moons are natural satellites orbiting planets; artificial satellites are human-made objects placed in orbit. The same gravitational interaction applies. Real orbits can be elliptical; this lesson uses circular paths to isolate the direction account.",
        "scene": "spa1:orbits:1",
        "process": true,
        "processFilm": "spa1-orbits"
      },
      {
        "title": "Separate speed and direction",
        "text": "A stable circular path can have constant speed while the velocity direction changes. There is therefore an inward acceleration. It is not correct to draw gravity tangentially forward or to claim that orbiting means gravity has disappeared. Higher students must explain this velocity change explicitly.",
        "scene": "spa1:orbits:2",
        "process": false
      },
      {
        "title": "Predict the inward direction",
        "text": "Choose a satellite at the right/top position of a circular orbit and the centre marker. Predict gravity’s direction. The loop keeps an inward force arrow and tangent velocity arrow distinct. Radius, period and body sizes are symbolic; no inverse-square calculation is required.",
        "scene": "spa1:orbits:3",
        "process": false
      },
      {
        "title": "Higher: stable speed and radius",
        "text": "In a circular orbit, gravity changes velocity direction while speed can stay constant. For a stable orbit around the same body, changing the orbital speed requires a change of orbital radius. Lower circular orbits have higher orbital speeds than higher circular orbits. A thrust/change of speed at one point can initially produce a noncircular path; do not infer instant movement to another circle. No orbital-speed equation is required here.",
        "scene": "spa1:orbits:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [
      "science.physics.forces.motion"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "spa1-orbits",
    "practice": [
      {
        "id": "spa1.orbits.practice1",
        "prompt": "The force maintaining a circular orbit is…",
        "options": [
          "Gravity toward the centre",
          "An outward magnetic force necessarily",
          "No force"
        ],
        "answer": 0,
        "why": "Gravity changes the velocity direction.",
        "concept": "spa1.orbits"
      },
      {
        "id": "spa1.orbits.practice2",
        "prompt": "A human-made orbiting object is…",
        "options": [
          "A natural moon",
          "An artificial satellite",
          "A star necessarily"
        ],
        "answer": 1,
        "why": "Distinguish origin from gravitational mechanism.",
        "concept": "spa1.orbits"
      },
      {
        "id": "spa1.orbits.practice3",
        "prompt": "An orbiting satellite’s instantaneous velocity is…",
        "options": [
          "Toward the centre always",
          "Zero",
          "Tangent to the path"
        ],
        "answer": 2,
        "why": "It is not the same direction as the inward force.",
        "concept": "spa1.orbits"
      }
    ],
    "check": [
      {
        "id": "spa1.orbits.check1",
        "prompt": "At the right-hand side of a circular orbit, gravity points…",
        "options": [
          "Left toward the centre",
          "Right away from the centre",
          "Up along the tangent necessarily"
        ],
        "answer": 0,
        "why": "Force points inward.",
        "concept": "spa1.orbits"
      },
      {
        "id": "spa1.orbits.check2",
        "prompt": "Natural moons and artificial satellites share…",
        "options": [
          "Identical sizes",
          "Gravity as their orbital interaction",
          "Identical origins"
        ],
        "answer": 1,
        "why": "The physical interaction is the same.",
        "concept": "spa1.orbits"
      },
      {
        "id": "spa1.orbits.check3",
        "prompt": "A circular-orbit diagram omits…",
        "options": [
          "The existence of gravity",
          "Any velocity",
          "Ellipticity and other perturbations"
        ],
        "answer": 2,
        "why": "The circular model isolates the key geometry.",
        "concept": "spa1.orbits"
      },
      {
        "id": "spa1.orbits.check-higher",
        "prompt": "For stable circular orbits around the same body, a change in orbital speed requires…",
        "options": [
          "A change in orbital radius",
          "Gravity to disappear",
          "A constant radius always"
        ],
        "answer": 0,
        "why": "Different stable orbital speeds correspond to different radii.",
        "concept": "spa1.orbits"
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
      "completionKey": "spa1Passed"
    },
    "higherQuestions": [
      "spa1.orbits.check-higher"
    ]
  },
  {
    "id": "science.physics.space-physics.redshift",
    "title": "Redshift, expansion and the Big Bang",
    "short": "Redshift, expansion and the Big Bang",
    "topicId": "science.physics.space-physics",
    "refs": [
      "8.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Light from most distant galaxies has spectral lines shifted to longer wavelengths compared with matching reference lines measured nearby. This is redshift. It does not mean every galaxy looks visibly red or that all wavelengths have the same numerical change. The pattern of matching lines identifies the comparison.",
    "learn": [
      {
        "title": "Compare spectral features",
        "text": "Light from most distant galaxies has spectral lines shifted to longer wavelengths compared with matching reference lines measured nearby. This is redshift. It does not mean every galaxy looks visibly red or that all wavelengths have the same numerical change. The pattern of matching lines identifies the comparison.",
        "scene": "spa1:redshift:0",
        "process": false
      },
      {
        "title": "A distance–recession pattern",
        "text": "More distant galaxies generally show larger redshift and greater recession speeds. This supports expansion of space itself, rather than a special explosion centre located at Earth. A stretching-grid model separates points as the grid expands; points need not grow with the spacing.",
        "scene": "spa1:redshift:1",
        "process": true,
        "processFilm": "spa1-redshift"
      },
      {
        "title": "Evidence and open questions",
        "text": "Expansion supports the Big Bang model: the universe began in an extremely hot dense state in a very small region. Observations of supernovae since1998 suggest accelerating expansion. Dark matter (called dark mass in the specification) and dark energy remain incompletely understood. Scientists develop and revise theories from observations; the model is not a complete explanation of everything.",
        "scene": "spa1:redshift:2",
        "process": false
      },
      {
        "title": "Measure a supplied shift",
        "text": "Choose a reference wavelength and an observed increase; predict observed wavelength. The animation separates matching spectral markers while the galaxy grid spacing grows. It is a qualitative teaching analogy, not a full cosmological redshift–distance/time calculation.",
        "scene": "spa1:redshift:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.waves.spectrum"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "spa1-redshift",
    "practice": [
      {
        "id": "spa1.redshift.practice1",
        "prompt": "Redshift means an observed shift toward…",
        "options": [
          "Longer wavelengths",
          "Shorter wavelengths",
          "No spectral pattern"
        ],
        "answer": 0,
        "why": "Compare matching features with a reference.",
        "concept": "spa1.redshift"
      },
      {
        "id": "spa1.redshift.practice2",
        "prompt": "The distance/redshift pattern supports…",
        "options": [
          "A static universe with no change",
          "Expansion of space",
          "Earth as a special universal centre"
        ],
        "answer": 1,
        "why": "The pattern is seen from our viewpoint without a special centre here.",
        "concept": "spa1.redshift"
      },
      {
        "id": "spa1.redshift.practice3",
        "prompt": "The Big Bang model describes an early state that was…",
        "options": [
          "Cold and dilute",
          "A chemical fire in air",
          "Extremely hot and dense"
        ],
        "answer": 2,
        "why": "It is a cosmological model supported by observations.",
        "concept": "spa1.redshift"
      }
    ],
    "check": [
      {
        "id": "spa1.redshift.check1",
        "prompt": "A reference line500 nm is observed at550 nm. It is…",
        "options": [
          "Redshifted",
          "Blueshifted",
          "Unchanged"
        ],
        "answer": 0,
        "why": "Observed wavelength is larger.",
        "concept": "spa1.redshift"
      },
      {
        "id": "spa1.redshift.check2",
        "prompt": "Supernova observations since1998 suggest…",
        "options": [
          "Expansion has necessarily stopped",
          "Expansion is accelerating",
          "Every galaxy is stationary"
        ],
        "answer": 1,
        "why": "They changed understanding of cosmic expansion.",
        "concept": "spa1.redshift"
      },
      {
        "id": "spa1.redshift.check3",
        "prompt": "Dark matter/energy are examples of…",
        "options": [
          "Fully solved classroom mechanisms",
          "Proof observations are useless",
          "Open questions in our understanding"
        ],
        "answer": 2,
        "why": "Evidence can support a model while major questions remain.",
        "concept": "spa1.redshift"
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
      "completionKey": "spa1Passed"
    }
  }
];
export const spa1Concepts={"spa1.system": "Our solar system and the birth of stars", "spa1.stars": "Stellar life cycles and new elements", "spa1.orbits": "Gravity and orbital motion", "spa1.redshift": "Redshift, expansion and the Big Bang"};
