export const wav1Lessons=[
  {
    "id": "science.physics.waves.types",
    "title": "Transverse and longitudinal waves",
    "short": "Transverse and longitudinal waves",
    "topicId": "science.physics.waves",
    "refs": [
      "6.1.1"
    ],
    "combinedRefs": [
      "6.1.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Waves transfer energy without an overall transfer of the medium’s material. A floating marker moves up/down as ripples pass rather than travelling across the whole tank. Air molecules vibrate around local positions as a sound disturbance travels.",
    "learn": [
      {
        "title": "Disturbance and travel are different",
        "text": "Waves transfer energy without an overall transfer of the medium’s material. A floating marker moves up/down as ripples pass rather than travelling across the whole tank. Air molecules vibrate around local positions as a sound disturbance travels.",
        "scene": "wav1:types:0",
        "process": false
      },
      {
        "title": "Compare the oscillation direction",
        "text": "In a transverse wave, oscillation is perpendicular to energy-transfer direction. Water ripples are treated as a transverse example in this course, although real surface-particle motion is more complex. In a longitudinal wave, oscillations are parallel to travel, creating compressions and rarefactions. Sound in air is longitudinal.",
        "scene": "wav1:types:1",
        "process": true,
        "processFilm": "wav1-types"
      },
      {
        "title": "Watch one marker",
        "text": "Follow the highlighted marker, not just the moving crest/compression. Its local repeated motion differs from the pattern’s progress. A slinky can demonstrate both directions, with care not to confuse the physical coil shape with the representation of air particles.",
        "scene": "wav1:types:2",
        "process": false
      },
      {
        "title": "Predict the oscillation",
        "text": "Choose transverse/longitudinal and the travel direction. Predict whether oscillation is perpendicular or parallel. The dots show local oscillation while the disturbance crosses the view; they do not drift along with each crest. Shapes/amplitudes are exaggerated and not molecular paths.",
        "scene": "wav1:types:3",
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
    "widget": "wav1-types",
    "practice": [
      {
        "id": "wav1.types.practice1",
        "prompt": "A wave mainly transfers…",
        "options": [
          "Energy without net transport of the medium",
          "All medium particles across the tank",
          "Only mass"
        ],
        "answer": 0,
        "why": "Local oscillation carries a travelling disturbance.",
        "concept": "wav1.types"
      },
      {
        "id": "wav1.types.practice2",
        "prompt": "Sound in air is…",
        "options": [
          "Transverse",
          "Longitudinal",
          "A stationary magnetic field"
        ],
        "answer": 1,
        "why": "Compressions/rarefactions travel through the air.",
        "concept": "wav1.types"
      },
      {
        "id": "wav1.types.practice3",
        "prompt": "In a transverse wave oscillations are…",
        "options": [
          "Parallel to travel",
          "Absent",
          "Perpendicular to travel"
        ],
        "answer": 2,
        "why": "Compare directions, not the drawn line shape alone.",
        "concept": "wav1.types"
      }
    ],
    "check": [
      {
        "id": "wav1.types.check1",
        "prompt": "A floating marker rises and falls while ripples pass. This supports…",
        "options": [
          "Energy travels while water has local oscillation",
          "Every water particle crosses the tank",
          "No wave exists"
        ],
        "answer": 0,
        "why": "Disturbance and medium motion differ.",
        "concept": "wav1.types"
      },
      {
        "id": "wav1.types.check2",
        "prompt": "A longitudinal compression is a region where particles are…",
        "options": [
          "More spread out",
          "Closer together",
          "At zero temperature"
        ],
        "answer": 1,
        "why": "Rarefaction has lower particle concentration.",
        "concept": "wav1.types"
      },
      {
        "id": "wav1.types.check3",
        "prompt": "For a wave travelling right, transverse oscillation could be…",
        "options": [
          "Right only",
          "Right and left only",
          "Up and down"
        ],
        "answer": 2,
        "why": "It is perpendicular to rightward travel.",
        "concept": "wav1.types"
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
      "completionKey": "wav1Passed"
    }
  },
  {
    "id": "science.physics.waves.properties",
    "title": "Amplitude, wavelength, frequency and speed",
    "short": "Amplitude, wavelength, frequency and speed",
    "topicId": "science.physics.waves",
    "refs": [
      "6.1.2"
    ],
    "combinedRefs": [
      "6.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Amplitude is maximum displacement from equilibrium, not peak-to-trough height. Wavelength λ is distance between adjacent equivalent-phase points, such as crest to crest or compression to compression. Frequency f is cycles per second in hertz. Period T is time per cycle: T=1/f.",
    "learn": [
      {
        "title": "Name four wave quantities",
        "text": "Amplitude is maximum displacement from equilibrium, not peak-to-trough height. Wavelength λ is distance between adjacent equivalent-phase points, such as crest to crest or compression to compression. Frequency f is cycles per second in hertz. Period T is time per cycle: T=1/f.",
        "scene": "wav1:properties:0",
        "process": false
      },
      {
        "title": "Use v = fλ",
        "text": "Wave speed is frequency times wavelength. For f=5 Hz and λ=0.4 m, v=2 m/s. All waves obey the wave equation. Use metres for wavelength and seconds for time. Rearranging gives λ=v/f and f=v/λ.",
        "scene": "wav1:properties:1",
        "process": true,
        "processFilm": "wav1-properties"
      },
      {
        "title": "Changing medium",
        "text": "Frequency is fixed by the source. When a sound wave enters a medium with a different speed, wavelength changes in proportion to speed at unchanged frequency. This explicit speed/frequency/wavelength transmission requirement is separate Physics. It does not mean amplitude or energy transmission must stay unchanged.",
        "scene": "wav1:properties:2",
        "process": false
      },
      {
        "title": "Make a wave prediction",
        "text": "Choose frequency and wavelength; predict wave speed. Markers oscillate locally and crests move across a ruler. The horizontal distance represents model wavelength while playback is slowed; visual speed is illustrative and the numerical ledger supplies SI values.",
        "scene": "wav1:properties:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.waves.types"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "wav1-properties",
    "practice": [
      {
        "id": "wav1.properties.practice1",
        "prompt": "Amplitude is measured from…",
        "options": [
          "Equilibrium to maximum displacement",
          "Crest to adjacent crest",
          "Peak to trough"
        ],
        "answer": 0,
        "why": "Peak-to-trough is twice the amplitude for a symmetric wave.",
        "concept": "wav1.properties"
      },
      {
        "id": "wav1.properties.practice2",
        "prompt": "Period is…",
        "options": [
          "Frequency times wavelength",
          "1/frequency",
          "Frequency squared"
        ],
        "answer": 1,
        "why": "Units are seconds per cycle.",
        "concept": "wav1.properties"
      },
      {
        "id": "wav1.properties.practice3",
        "prompt": "Wave speed equals…",
        "options": [
          "f/λ",
          "λ/f",
          "fλ"
        ],
        "answer": 2,
        "why": "Check units:1/s ×m=m/s.",
        "concept": "wav1.properties"
      }
    ],
    "check": [
      {
        "id": "wav1.properties.check1",
        "prompt": "A wave has f4 Hz and λ0.5 m. Speed is…",
        "options": [
          "2 m/s",
          "8 m/s",
          "0.125 m/s"
        ],
        "answer": 0,
        "why": "Wave speed=fλ=4 Hz×0.5 m=2 m/s.",
        "concept": "wav1.properties"
      },
      {
        "id": "wav1.properties.check2",
        "prompt": "A period of0.02 s corresponds to…",
        "options": [
          "0.02 Hz",
          "50 Hz",
          "2 Hz"
        ],
        "answer": 1,
        "why": "Frequency is reciprocal period:1/0.02 s=50 Hz.",
        "concept": "wav1.properties"
      },
      {
        "id": "wav1.properties.check3",
        "prompt": "A symmetric wave has peak-to-trough height8 cm. Amplitude is…",
        "options": [
          "8 cm",
          "16 cm",
          "4 cm"
        ],
        "answer": 2,
        "why": "Amplitude is half the full vertical excursion.",
        "concept": "wav1.properties"
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
      "completionKey": "wav1Passed"
    }
  },
  {
    "id": "science.physics.waves.measure",
    "title": "Measuring waves in water, solids and air",
    "short": "Measuring waves in water, solids and air",
    "topicId": "science.physics.waves",
    "refs": [
      "6.1.2"
    ],
    "combinedRefs": [
      "6.1.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Required practical8 (separate) or20 (Trilogy) investigates frequency, wavelength and speed in a ripple tank and in a solid. Use a vibrating source, shallow water, illumination and a scale for ripples; use a vibrating string/cord with a signal generator for waves in a solid. Keep electrical equipment appropriately separated from water and control volume/amplitude.",
    "learn": [
      {
        "title": "Choose suitable apparatus",
        "text": "Required practical8 (separate) or20 (Trilogy) investigates frequency, wavelength and speed in a ripple tank and in a solid. Use a vibrating source, shallow water, illumination and a scale for ripples; use a vibrating string/cord with a signal generator for waves in a solid. Keep electrical equipment appropriately separated from water and control volume/amplitude.",
        "scene": "wav1:measure:0",
        "process": false
      },
      {
        "title": "Measure repeated intervals",
        "text": "Measure several wavelengths then divide by the number of complete wavelength intervals to reduce relative reading error. Determine frequency from source calibration or count cycles over a timed interval. A strobe/frozen image can help read a pattern, but avoid confusing it with an actual stationary wave or a different strobe alias. Calculate v=fλ.",
        "scene": "wav1:measure:1",
        "process": false
      },
      {
        "title": "Measure speed of sound",
        "text": "Use two microphones a measured distance apart with a data logger/oscilloscope to measure arrival delay of a pulse; v=distance/time. An echo method needs twice the reflector distance for the out-and-back path. Avoid hand timing a short sound journey; long baselines and repeats improve resolution. Record methods, uncertainties and controls.",
        "scene": "wav1:measure:2",
        "process": false
      },
      {
        "title": "Analyse a ripple measurement",
        "text": "Choose measured length covering four wavelengths and source frequency. Predict speed using λ=length/4, then v=fλ. Generated images/data are ideal; they prepare for judging apparatus suitability and real measurements rather than establish hands-on competence.",
        "scene": "wav1:measure:3",
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
    "widget": "wav1-measure",
    "practice": [
      {
        "id": "wav1.measure.practice1",
        "prompt": "Measuring several wavelengths then dividing helps…",
        "options": [
          "Reduce relative reading uncertainty",
          "Eliminate every error",
          "Change the source frequency"
        ],
        "answer": 0,
        "why": "A larger baseline reduces the relative effect of a ruler error.",
        "concept": "wav1.measure"
      },
      {
        "id": "wav1.measure.practice2",
        "prompt": "A microphone delay method uses…",
        "options": [
          "Only sound loudness",
          "Microphone separation divided by arrival-time delay",
          "Distance times delay"
        ],
        "answer": 1,
        "why": "The same pulse travels between the microphones.",
        "concept": "wav1.measure"
      },
      {
        "id": "wav1.measure.practice3",
        "prompt": "For an echo from a wall, sound travels…",
        "options": [
          "Only to the wall",
          "Half the wall distance",
          "To the wall and back"
        ],
        "answer": 2,
        "why": "Use twice the one-way distance.",
        "concept": "wav1.measure"
      }
    ],
    "check": [
      {
        "id": "wav1.measure.check1",
        "prompt": "Four wavelengths span0.8 m. One wavelength is…",
        "options": [
          "0.2 m",
          "3.2 m",
          "0.8 m"
        ],
        "answer": 0,
        "why": "Divide by four complete intervals.",
        "concept": "wav1.measure"
      },
      {
        "id": "wav1.measure.check2",
        "prompt": "Two microphones0.66 m apart detect a pulse0.002 s apart. Speed is…",
        "options": [
          "0.00132 m/s",
          "330 m/s",
          "33 m/s"
        ],
        "answer": 1,
        "why": "The pulse covers0.66 m in0.002 s, so speed=330 m/s.",
        "concept": "wav1.measure"
      },
      {
        "id": "wav1.measure.check3",
        "prompt": "Hand timing a very short sound trip is poor because…",
        "options": [
          "Sound has no speed",
          "Distances cannot be measured",
          "Reaction time is large compared with the travel time"
        ],
        "answer": 2,
        "why": "Instrument time resolution matters.",
        "concept": "wav1.measure"
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
      "completionKey": "wav1Passed"
    }
  },
  {
    "id": "science.physics.waves.reflection",
    "title": "Reflection, transmission and absorption",
    "short": "Reflection, transmission and absorption",
    "topicId": "science.physics.waves",
    "refs": [
      "6.1.3"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "A wave arriving at a boundary can be reflected, transmitted or absorbed. Absorption transfers energy into the material. Reflection changes travel direction back into the original medium; transmission carries energy onward. The proportions depend on materials, wave and surface conditions.",
    "learn": [
      {
        "title": "Three outcomes at a boundary",
        "text": "A wave arriving at a boundary can be reflected, transmitted or absorbed. Absorption transfers energy into the material. Reflection changes travel direction back into the original medium; transmission carries energy onward. The proportions depend on materials, wave and surface conditions.",
        "scene": "wav1:reflection:0",
        "process": false
      },
      {
        "title": "Measure from the normal",
        "text": "Draw a normal perpendicular to the surface where the ray meets it. Angle of incidence equals angle of reflection, both measured between ray and normal. A ray diagram represents travel direction, not the oscillation direction. Mark arrows on both rays.",
        "scene": "wav1:reflection:1",
        "process": true,
        "processFilm": "wav1-reflection"
      },
      {
        "title": "Prepare the light practical",
        "text": "Separate required practical9 investigates reflection by different surfaces and refraction by different substances. Use a ray box, narrow slit, surface/block, paper and protractor. Trace rays, mark the boundary and normal, measure angles from the normal, repeat and compare surfaces. Avoid looking into a bright beam and use school procedures.",
        "scene": "wav1:reflection:2",
        "process": false
      },
      {
        "title": "Predict the reflected ray",
        "text": "Choose incidence angle and smooth/rough surface. Predict the local reflection angle for an individual surface facet. Roughness changes the facet normals and scatters a beam even though each local reflection obeys the law. The model uses a representative labelled facet, not a roughness distribution.",
        "scene": "wav1:reflection:3",
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
    "widget": "wav1-reflection",
    "practice": [
      {
        "id": "wav1.reflection.practice1",
        "prompt": "Incidence/reflection angles are measured from…",
        "options": [
          "The normal",
          "The surface",
          "The page edge"
        ],
        "answer": 0,
        "why": "The normal is perpendicular to the surface.",
        "concept": "wav1.reflection"
      },
      {
        "id": "wav1.reflection.practice2",
        "prompt": "Absorption transfers wave energy…",
        "options": [
          "Back without entering",
          "Into the material",
          "Into negative mass"
        ],
        "answer": 1,
        "why": "The absorber gains energy.",
        "concept": "wav1.reflection"
      },
      {
        "id": "wav1.reflection.practice3",
        "prompt": "At a boundary waves may be…",
        "options": [
          "Only reflected",
          "Only transmitted",
          "Reflected, absorbed or transmitted"
        ],
        "answer": 2,
        "why": "More than one outcome can occur.",
        "concept": "wav1.reflection"
      }
    ],
    "check": [
      {
        "id": "wav1.reflection.check1",
        "prompt": "Incidence is35° from normal. Reflection angle is…",
        "options": [
          "35°",
          "55°",
          "70°"
        ],
        "answer": 0,
        "why": "Angles from the normal are equal.",
        "concept": "wav1.reflection"
      },
      {
        "id": "wav1.reflection.check2",
        "prompt": "A ray30° from the surface is…",
        "options": [
          "30° from normal",
          "60° from normal",
          "90° from normal"
        ],
        "answer": 1,
        "why": "Normal and surface differ by90°.",
        "concept": "wav1.reflection"
      },
      {
        "id": "wav1.reflection.check3",
        "prompt": "A rough surface scatters because…",
        "options": [
          "Reflection law fails everywhere",
          "There is no reflection",
          "Local surface normals vary"
        ],
        "answer": 2,
        "why": "Each facet can still obey equal local angles.",
        "concept": "wav1.reflection"
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
      "completionKey": "wav1Passed"
    }
  },
  {
    "id": "science.physics.waves.sound",
    "title": "Sound, solids and hearing",
    "short": "Sound, solids and hearing",
    "topicId": "science.physics.waves",
    "refs": [
      "6.1.4"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": true,
    "minutes": 35,
    "big": "Sound can travel through solids as vibrations. A vibrating solid can set nearby air into pressure oscillations; air sound can make a solid vibrate. These conversions happen in loudspeaker cones, microphones and the ear. They are mechanical waves and need a material medium.",
    "learn": [
      {
        "title": "Sound crosses different materials",
        "text": "Sound can travel through solids as vibrations. A vibrating solid can set nearby air into pressure oscillations; air sound can make a solid vibrate. These conversions happen in loudspeaker cones, microphones and the ear. They are mechanical waves and need a material medium.",
        "scene": "wav1:sound:0",
        "process": false
      },
      {
        "title": "From air to the ear",
        "text": "Pressure oscillations vibrate the eardrum and other structures in the ear, producing the sensation of sound through further biological processes. The conversion works over a limited frequency range. A schematic eardrum is not a complete anatomical or hearing-diagnostic model.",
        "scene": "wav1:sound:1",
        "process": true,
        "processFilm": "wav1-sound"
      },
      {
        "title": "A limited hearing range",
        "text": "Normal human hearing is approximately20 Hz to20000 Hz (20 kHz). Individual sensitivity varies and can change with age or damage. Frequency influences pitch; amplitude/intensity influences loudness. Ultrasound is above the upper human hearing limit, not necessarily louder sound.",
        "scene": "wav1:sound:2",
        "process": false
      },
      {
        "title": "Classify a frequency",
        "text": "Choose frequency and the supplied normal hearing range. Predict whether it falls within the range. The animation shows an exaggerated air compression driving a solid membrane; its playback rate is unrelated to the actual audible frequency.",
        "scene": "wav1:sound:3",
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
    "widget": "wav1-sound",
    "practice": [
      {
        "id": "wav1.sound.practice1",
        "prompt": "Sound can travel through…",
        "options": [
          "Solids as vibrations",
          "Only empty space",
          "Only air"
        ],
        "answer": 0,
        "why": "Solids can transmit mechanical disturbances.",
        "concept": "wav1.sound"
      },
      {
        "id": "wav1.sound.practice2",
        "prompt": "The eardrum converts air pressure oscillations to…",
        "options": [
          "Gamma rays",
          "Vibrations of a solid",
          "No motion"
        ],
        "answer": 1,
        "why": "This conversion is part of hearing.",
        "concept": "wav1.sound"
      },
      {
        "id": "wav1.sound.practice3",
        "prompt": "Normal upper hearing limit is about…",
        "options": [
          "20 Hz",
          "200 Hz",
          "20 kHz"
        ],
        "answer": 2,
        "why": "20kHz equals20000Hz.",
        "concept": "wav1.sound"
      }
    ],
    "check": [
      {
        "id": "wav1.sound.check1",
        "prompt": "A25 kHz wave is…",
        "options": [
          "Ultrasound relative to normal human hearing",
          "Always very loud audible sound",
          "A low-pitch audible wave"
        ],
        "answer": 0,
        "why": "Its frequency exceeds20000Hz.",
        "concept": "wav1.sound"
      },
      {
        "id": "wav1.sound.check2",
        "prompt": "Increasing frequency mainly raises…",
        "options": [
          "Wavelength in every medium",
          "Pitch",
          "Mass of air"
        ],
        "answer": 1,
        "why": "Frequency sets pitch for an audible tone.",
        "concept": "wav1.sound"
      },
      {
        "id": "wav1.sound.check3",
        "prompt": "The hearing model omits…",
        "options": [
          "The existence of vibrations",
          "Any medium",
          "Detailed anatomy and individual frequency response"
        ],
        "answer": 2,
        "why": "It is not a clinical hearing test.",
        "concept": "wav1.sound"
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
      "completionKey": "wav1Passed"
    }
  },
  {
    "id": "science.physics.waves.detection",
    "title": "Ultrasound, sonar and seismic evidence",
    "short": "Ultrasound, sonar and seismic evidence",
    "topicId": "science.physics.waves",
    "refs": [
      "6.1.5"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": true,
    "minutes": 35,
    "big": "Ultrasound partly reflects at boundaries between media. Measure the return time and use supplied wave speed: one-way depth=vt/2. Different speeds, absorption and reflection can reveal structures inside objects. Medical imaging and industrial flaw detection exploit these differences.",
    "learn": [
      {
        "title": "Echoes reveal hidden boundaries",
        "text": "Ultrasound partly reflects at boundaries between media. Measure the return time and use supplied wave speed: one-way depth=vt/2. Different speeds, absorption and reflection can reveal structures inside objects. Medical imaging and industrial flaw detection exploit these differences.",
        "scene": "wav1:detection:0",
        "process": false
      },
      {
        "title": "Sound the sea",
        "text": "High-frequency echo sounding sends a pulse toward an object/seabed and records a reflected signal. The pulse travels out and back, so divide total path length by two. A single speed is an approximation if the medium varies. Multiple echoes can indicate several boundaries.",
        "scene": "wav1:detection:1",
        "process": true,
        "processFilm": "wav1-detection"
      },
      {
        "title": "Seismic waves probe Earth",
        "text": "Earthquakes generate longitudinal P-waves that travel through solids and liquids at different speeds, and transverse S-waves that cannot travel through liquid. Arrival times, paths and shadow regions provide evidence for Earth’s internal structure and core. The model is evidence-based inference, not direct viewing of the core.",
        "scene": "wav1:detection:2",
        "process": false
      },
      {
        "title": "Predict an echo depth",
        "text": "Choose supplied wave speed and round-trip time; predict one-way distance. Watch a pulse travel out and back. The scale and playback are exaggerated. The single-boundary homogeneous-medium model omits scattering, variable speeds and signal processing.",
        "scene": "wav1:detection:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.waves.properties"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "wav1-detection",
    "practice": [
      {
        "id": "wav1.detection.practice1",
        "prompt": "An echo depth calculation uses…",
        "options": [
          "vt/2",
          "2vt",
          "v/t"
        ],
        "answer": 0,
        "why": "The measured travel time is out-and-back.",
        "concept": "wav1.detection"
      },
      {
        "id": "wav1.detection.practice2",
        "prompt": "Which seismic wave cannot travel through a liquid?",
        "options": [
          "P-wave",
          "S-wave",
          "Both always pass"
        ],
        "answer": 1,
        "why": "S-waves are transverse.",
        "concept": "wav1.detection"
      },
      {
        "id": "wav1.detection.practice3",
        "prompt": "Seismic observations support…",
        "options": [
          "Direct photographs of the core",
          "No model of Earth",
          "Inference about hidden internal structure"
        ],
        "answer": 2,
        "why": "Different wave behaviours constrain the model.",
        "concept": "wav1.detection"
      }
    ],
    "check": [
      {
        "id": "wav1.detection.check1",
        "prompt": "At1500 m/s, echo return0.2 s indicates depth…",
        "options": [
          "150 m",
          "300 m",
          "7500 m"
        ],
        "answer": 0,
        "why": "The pulse travels out and back:one-way distance=1500×0.2/2=150 m.",
        "concept": "wav1.detection"
      },
      {
        "id": "wav1.detection.check2",
        "prompt": "P-waves are…",
        "options": [
          "Transverse only in vacuum",
          "Longitudinal and able to cross solids/liquids",
          "Unable to cross liquids"
        ],
        "answer": 1,
        "why": "Their speeds differ between materials.",
        "concept": "wav1.detection"
      },
      {
        "id": "wav1.detection.check3",
        "prompt": "A single-speed echo calculation may fail when…",
        "options": [
          "Time is measured in seconds",
          "There is a reflector",
          "Speed varies along the path"
        ],
        "answer": 2,
        "why": "The homogeneous-medium assumption needs checking.",
        "concept": "wav1.detection"
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
      "completionKey": "wav1Passed"
    }
  },
  {
    "id": "science.physics.waves.spectrum",
    "title": "The electromagnetic spectrum",
    "short": "The electromagnetic spectrum",
    "topicId": "science.physics.waves",
    "refs": [
      "6.2.1"
    ],
    "combinedRefs": [
      "6.2.1"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Electromagnetic waves are transverse and transfer energy from a source to an absorber. All types travel at the same speed in vacuum, about3×10⁸ m/s; the GCSE specification also treats their speed in air as the same. They do not require a material medium.",
    "learn": [
      {
        "title": "One continuous family",
        "text": "Electromagnetic waves are transverse and transfer energy from a source to an absorber. All types travel at the same speed in vacuum, about3×10⁸ m/s; the GCSE specification also treats their speed in air as the same. They do not require a material medium.",
        "scene": "wav1:spectrum:0",
        "process": false
      },
      {
        "title": "Order the bands",
        "text": "From long wavelength/low frequency to short wavelength/high frequency: radio, microwave, infrared, visible (red to violet), ultraviolet, X-ray, gamma. These named groups form a continuous spectrum rather than seven isolated wave speeds. Human eyes detect only the visible band.",
        "scene": "wav1:spectrum:1",
        "process": true,
        "processFilm": "wav1-spectrum"
      },
      {
        "title": "Frequency versus wavelength",
        "text": "At fixed speed v=fλ, higher frequency means shorter wavelength. A radio and gamma wave in vacuum have very different wavelengths but equal speeds. Their interactions with matter and potential uses differ; visible colours occupy only a narrow portion.",
        "scene": "wav1:spectrum:2",
        "process": false
      },
      {
        "title": "Compare two frequencies",
        "text": "Choose frequency in MHz and a multiplier. Predict vacuum wavelength using λ=300/f when f is in MHz. The animated wave is a schematic transverse trace, not a literal electric-field magnitude or an audible oscillation.",
        "scene": "wav1:spectrum:3",
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
    "widget": "wav1-spectrum",
    "practice": [
      {
        "id": "wav1.spectrum.practice1",
        "prompt": "All EM waves in vacuum have the same…",
        "options": [
          "Speed",
          "Wavelength",
          "Frequency"
        ],
        "answer": 0,
        "why": "They share c, not f orλ.",
        "concept": "wav1.spectrum"
      },
      {
        "id": "wav1.spectrum.practice2",
        "prompt": "Immediately beyond violet in increasing frequency lies…",
        "options": [
          "Infrared",
          "Ultraviolet",
          "Radio"
        ],
        "answer": 1,
        "why": "UV has shorter wavelength than visible violet.",
        "concept": "wav1.spectrum"
      },
      {
        "id": "wav1.spectrum.practice3",
        "prompt": "Increasing EM frequency in vacuum gives…",
        "options": [
          "Greater speed",
          "Longer wavelength",
          "Shorter wavelength"
        ],
        "answer": 2,
        "why": "c=fλ stays fixed.",
        "concept": "wav1.spectrum"
      }
    ],
    "check": [
      {
        "id": "wav1.spectrum.check1",
        "prompt": "Which sequence goes from lower to higher frequency?",
        "options": [
          "Radio → microwave → infrared",
          "Gamma → X-ray → UV",
          "Visible → infrared → microwave"
        ],
        "answer": 0,
        "why": "Recall the continuous spectrum order.",
        "concept": "wav1.spectrum"
      },
      {
        "id": "wav1.spectrum.check2",
        "prompt": "An EM wave can cross space because it…",
        "options": [
          "Needs air everywhere",
          "Does not require a material medium",
          "Is always audible"
        ],
        "answer": 1,
        "why": "It is not a mechanical sound wave.",
        "concept": "wav1.spectrum"
      },
      {
        "id": "wav1.spectrum.check3",
        "prompt": "Our eyes directly detect…",
        "options": [
          "Every EM band",
          "Only gamma rays",
          "A limited visible band"
        ],
        "answer": 2,
        "why": "Other bands need appropriate detectors.",
        "concept": "wav1.spectrum"
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
      "completionKey": "wav1Passed"
    }
  },
  {
    "id": "science.physics.waves.refraction",
    "title": "Refraction at a boundary",
    "short": "Refraction at a boundary",
    "topicId": "science.physics.waves",
    "refs": [
      "6.2.2"
    ],
    "combinedRefs": [
      "6.2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Refraction is a change of wave direction at a boundary when the speed changes and incidence is oblique. Draw a normal at the incidence point, mark travel arrows and measure both angles from it. A normal-incidence ray changes speed without bending.",
    "learn": [
      {
        "title": "Draw the boundary and normal",
        "text": "Refraction is a change of wave direction at a boundary when the speed changes and incidence is oblique. Draw a normal at the incidence point, mark travel arrows and measure both angles from it. A normal-incidence ray changes speed without bending.",
        "scene": "wav1:refraction:0",
        "process": false
      },
      {
        "title": "Toward or away from normal",
        "text": "On entering a slower medium, an oblique ray bends toward the normal. On entering a faster medium, it bends away. Frequency remains set by the source, so changing speed changes wavelength. The drawn medium is an ideal transparent region, not a material identification test.",
        "scene": "wav1:refraction:1",
        "process": true,
        "processFilm": "wav1-refraction"
      },
      {
        "title": "Measure with a block",
        "text": "Trace incident/emergent rays through a transparent block, mark the block outline, remove it and draw the internal path. Compare several angles, keeping ray width small and reading the protractor from the normal. This prepares the refraction part of separate practical9; common students still construct refraction ray diagrams.",
        "scene": "wav1:refraction:2",
        "process": false
      },
      {
        "title": "Predict the bend",
        "text": "Choose faster/slower destination and normal/oblique incidence. Predict toward, away or no bend. Exact illustrative angles are supplied rather than using a required Snell-law calculation. The model omits dispersion, partial reflection and total internal reflection.",
        "scene": "wav1:refraction:3",
        "process": false
      },
      {
        "title": "Higher: wavefronts explain the turn",
        "text": "When one part of an oblique wavefront enters a slower medium first, that part advances less while the other side still travels faster. The wavefront turns; its perpendicular ray turns toward the normal. Wavelength is shorter at the same frequency. Absorption, transmission and reflection can vary with wavelength and material.",
        "scene": "wav1:refraction:4",
        "process": false,
        "higher": true
      }
    ],
    "prerequisites": [
      "science.physics.waves.properties"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "wav1-refraction",
    "practice": [
      {
        "id": "wav1.refraction.practice1",
        "prompt": "Refraction angles are measured from…",
        "options": [
          "The normal",
          "The surface",
          "The page edge"
        ],
        "answer": 0,
        "why": "Label the perpendicular normal.",
        "concept": "wav1.refraction"
      },
      {
        "id": "wav1.refraction.practice2",
        "prompt": "An oblique wave entering a slower medium bends…",
        "options": [
          "Away from normal",
          "Toward normal",
          "Never changes direction"
        ],
        "answer": 1,
        "why": "Speed change changes the wavefront direction.",
        "concept": "wav1.refraction"
      },
      {
        "id": "wav1.refraction.practice3",
        "prompt": "At normal incidence, a speed change causes…",
        "options": [
          "Always a90° turn",
          "A frequency change",
          "No bend though wavelength may change"
        ],
        "answer": 2,
        "why": "The ray remains along the normal.",
        "concept": "wav1.refraction"
      }
    ],
    "check": [
      {
        "id": "wav1.refraction.check1",
        "prompt": "An oblique ray enters a faster medium. It bends…",
        "options": [
          "Away from normal",
          "Toward normal",
          "Only backward"
        ],
        "answer": 0,
        "why": "The angle from the normal increases.",
        "concept": "wav1.refraction"
      },
      {
        "id": "wav1.refraction.check2",
        "prompt": "Which must be drawn before measuring incidence?",
        "options": [
          "Only a coloured region",
          "A normal at the boundary",
          "The final answer"
        ],
        "answer": 1,
        "why": "Angles refer to the normal.",
        "concept": "wav1.refraction"
      },
      {
        "id": "wav1.refraction.check3",
        "prompt": "In transmission across a stationary boundary, the source frequency…",
        "options": [
          "Must double",
          "Becomes zero",
          "Remains unchanged"
        ],
        "answer": 2,
        "why": "Speed and wavelength change together.",
        "concept": "wav1.refraction"
      },
      {
        "id": "wav1.refraction.check-higher",
        "prompt": "Which change explains oblique refraction into a slower medium?",
        "options": [
          "One side of a wavefront slows first, turning the wavefront",
          "Frequency suddenly becomes zero",
          "The ray ignores speed"
        ],
        "answer": 0,
        "why": "Wavefront turning follows unequal advance across the boundary.",
        "concept": "wav1.refraction"
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
      "completionKey": "wav1Passed"
    },
    "higherQuestions": [
      "wav1.refraction.check-higher"
    ]
  },
  {
    "id": "science.physics.waves.hazards",
    "title": "EM production, absorption and radiation risk",
    "short": "EM production, absorption and radiation risk",
    "topicId": "science.physics.waves",
    "refs": [
      "6.2.3"
    ],
    "combinedRefs": [
      "6.2.3"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Changes in atoms and their nuclei can generate or absorb electromagnetic radiation over a wide range of frequencies. Gamma rays originate from nuclear changes; electron-level transitions are different. Transfer of energy does not require visible light.",
    "learn": [
      {
        "title": "Atoms and nuclei emit and absorb",
        "text": "Changes in atoms and their nuclei can generate or absorb electromagnetic radiation over a wide range of frequencies. Gamma rays originate from nuclear changes; electron-level transitions are different. Transfer of energy does not require visible light.",
        "scene": "wav1:hazards:0",
        "process": false
      },
      {
        "title": "Different waves, different hazards",
        "text": "Ultraviolet can cause premature skin ageing and increase skin-cancer risk. X-rays and gamma rays are ionising and can cause gene mutations and cancer. Risk depends on type and dose; a useful exposure can still carry risk. Draw conclusions from supplied data, not just the band’s name.",
        "scene": "wav1:hazards:1",
        "process": false
      },
      {
        "title": "Compare dose consistently",
        "text": "A supplied dose may be in Sv or mSv;1000 mSv=1 Sv. The unit is not required recall, but comparisons need matching units. Evaluate consequences, exposure conditions, benefits and uncertainties. A detector count or an image brightness is not automatically a dose measurement.",
        "scene": "wav1:hazards:2",
        "process": false
      },
      {
        "title": "Read a dose comparison",
        "text": "Choose a supplied dose in mSv and a number of equal exposures. Predict their total in mSv. This arithmetic is an invented same-condition comparison, not a personal medical-risk estimate or an assumption that biological responses always combine linearly.",
        "scene": "wav1:hazards:3",
        "process": false
      },
      {
        "title": "Higher: radio circuits oscillate",
        "text": "Oscillations in an electrical circuit can produce radio waves. An incoming radio wave absorbed by a suitable circuit can induce an alternating current at the same frequency. Emission and reception transfer energy through oscillating electrical and electromagnetic systems; the detector does not have to be at the transmitter.",
        "scene": "wav1:hazards:4",
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
    "widget": "wav1-hazards",
    "practice": [
      {
        "id": "wav1.hazards.practice1",
        "prompt": "Gamma emission originates in…",
        "options": [
          "The nucleus",
          "Only an outer shell",
          "Only a vibrating string"
        ],
        "answer": 0,
        "why": "Distinguish nuclear and electron changes.",
        "concept": "wav1.hazards"
      },
      {
        "id": "wav1.hazards.practice2",
        "prompt": "UV exposure can increase risk of…",
        "options": [
          "Only hearing loss",
          "Skin ageing and skin cancer",
          "Mass disappearing"
        ],
        "answer": 1,
        "why": "Hazard depends on type and dose.",
        "concept": "wav1.hazards"
      },
      {
        "id": "wav1.hazards.practice3",
        "prompt": "A valid dose comparison needs…",
        "options": [
          "Only matching colours",
          "Only exposure counts",
          "Consistent units and exposure context"
        ],
        "answer": 2,
        "why": "Risk is not determined by the radiation name alone.",
        "concept": "wav1.hazards"
      }
    ],
    "check": [
      {
        "id": "wav1.hazards.check1",
        "prompt": "0.003 Sv equals…",
        "options": [
          "3 mSv",
          "0.003 mSv",
          "3000 mSv"
        ],
        "answer": 0,
        "why": "Multiply Sv by1000 for mSv.",
        "concept": "wav1.hazards"
      },
      {
        "id": "wav1.hazards.check2",
        "prompt": "X-rays and gamma can…",
        "options": [
          "Only warm skin harmlessly",
          "Ionise tissue and cause mutations",
          "Never affect cells"
        ],
        "answer": 1,
        "why": "Ionisation can damage biological molecules.",
        "concept": "wav1.hazards"
      },
      {
        "id": "wav1.hazards.check3",
        "prompt": "A benefit–risk judgment should use…",
        "options": [
          "Only a frightening label",
          "Only the image quality",
          "Supplied outcomes, dose, alternatives and uncertainty"
        ],
        "answer": 2,
        "why": "Weigh relevant evidence and consequences.",
        "concept": "wav1.hazards"
      },
      {
        "id": "wav1.hazards.check-higher",
        "prompt": "A radio wave absorbed by a suitable circuit can induce…",
        "options": [
          "AC at the radio-wave frequency",
          "Only DC regardless of frequency",
          "A current at an unrelated mandatory frequency"
        ],
        "answer": 0,
        "why": "Reception can produce matching electrical oscillations.",
        "concept": "wav1.hazards"
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
      "completionKey": "wav1Passed"
    },
    "higherQuestions": [
      "wav1.hazards.check-higher"
    ]
  },
  {
    "id": "science.physics.waves.applications",
    "title": "Using the electromagnetic spectrum",
    "short": "Using the electromagnetic spectrum",
    "topicId": "science.physics.waves",
    "refs": [
      "6.2.4"
    ],
    "combinedRefs": [
      "6.2.4"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Radio waves carry radio/TV signals. Microwaves are used for satellite communication and cooking; infrared is used in electrical heaters, cooking and thermal cameras. Visible light is used for fibre-optic communication. The named band is linked to a useful interaction, not a unique speed in vacuum.",
    "learn": [
      {
        "title": "Communication and heating",
        "text": "Radio waves carry radio/TV signals. Microwaves are used for satellite communication and cooking; infrared is used in electrical heaters, cooking and thermal cameras. Visible light is used for fibre-optic communication. The named band is linked to a useful interaction, not a unique speed in vacuum.",
        "scene": "wav1:applications:0",
        "process": false
      },
      {
        "title": "Light, imaging and treatment",
        "text": "Ultraviolet is used in energy-efficient lamps (with materials that emit visible light) and sun tanning, which carries skin risk. X-rays and gamma rays have medical imaging and treatment uses. Choose a wave according to what it must penetrate, transmit, detect or deposit energy in.",
        "scene": "wav1:applications:1",
        "process": false
      },
      {
        "title": "Compare alternatives",
        "text": "An infrared camera detects emitted infrared rather than seeing visible colour. A fibre carries a modulated light signal; it is not a sound pipe. Cooking uses energy absorbed by the food. Real communication systems also depend on atmosphere, bandwidth, detectors and engineering constraints.",
        "scene": "wav1:applications:2",
        "process": false
      },
      {
        "title": "Match a requirement",
        "text": "Choose a thermal-image or internal-transmission imaging requirement, then infrared or X-ray. Predict the stated match. This constrained selection illustrates a physical reason, not a universal product choice or clinical recommendation.",
        "scene": "wav1:applications:3",
        "process": false
      },
      {
        "title": "Higher: explain suitability",
        "text": "Microwaves can pass through Earth’s atmosphere for satellite links; radio waves can carry broadcast signals; infrared is readily absorbed to warm surfaces and emitted by warm objects for thermal imaging. Visible light can be guided in optical fibres. UV can excite lamp coatings to emit visible light but can damage skin. X-rays penetrate soft tissue differently from bone; gamma can reach internal detectors/targets. Suitability depends on the interaction needed, with risks evaluated alongside benefits.",
        "scene": "wav1:applications:4",
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
    "widget": "wav1-applications",
    "practice": [
      {
        "id": "wav1.applications.practice1",
        "prompt": "Satellite communication commonly uses…",
        "options": [
          "Microwaves",
          "Only sound in space",
          "Only gamma rays"
        ],
        "answer": 0,
        "why": "Microwaves can carry the signal through the atmosphere.",
        "concept": "wav1.applications"
      },
      {
        "id": "wav1.applications.practice2",
        "prompt": "Thermal cameras detect…",
        "options": [
          "Only visible green light",
          "Infrared radiation",
          "Only audible sound"
        ],
        "answer": 1,
        "why": "Warm objects emit infrared.",
        "concept": "wav1.applications"
      },
      {
        "id": "wav1.applications.practice3",
        "prompt": "Fibre-optic communication commonly uses…",
        "options": [
          "Sound waves in air",
          "Radioactive dust",
          "Visible/optical light signals"
        ],
        "answer": 2,
        "why": "Light transfers the modulated signal along the fibre.",
        "concept": "wav1.applications"
      }
    ],
    "check": [
      {
        "id": "wav1.applications.check1",
        "prompt": "An electrical radiant heater mainly uses…",
        "options": [
          "Infrared",
          "X-rays",
          "Gamma"
        ],
        "answer": 0,
        "why": "Absorbed infrared transfers energy to surfaces.",
        "concept": "wav1.applications"
      },
      {
        "id": "wav1.applications.check2",
        "prompt": "UV tanning should be evaluated with…",
        "options": [
          "No possible health effect",
          "Skin damage/cancer risk as well as the intended effect",
          "Only the lamp colour"
        ],
        "answer": 1,
        "why": "The application does not remove the hazard.",
        "concept": "wav1.applications"
      },
      {
        "id": "wav1.applications.check3",
        "prompt": "X-ray imaging depends partly on…",
        "options": [
          "All tissue absorbing identically",
          "X-rays having a different vacuum speed",
          "Different absorption/transmission in different tissues"
        ],
        "answer": 2,
        "why": "Different interactions create the image contrast.",
        "concept": "wav1.applications"
      },
      {
        "id": "wav1.applications.check-higher",
        "prompt": "Why are microwaves useful for satellite links?",
        "options": [
          "They can pass through the atmosphere and carry signals",
          "They travel faster than radio in vacuum",
          "They are mechanical waves"
        ],
        "answer": 0,
        "why": "Suitability depends on propagation and signal transfer.",
        "concept": "wav1.applications"
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
      "completionKey": "wav1Passed"
    },
    "higherQuestions": [
      "wav1.applications.check-higher"
    ]
  },
  {
    "id": "science.physics.waves.lenses",
    "title": "Lenses, ray diagrams and magnification",
    "short": "Lenses, ray diagrams and magnification",
    "topicId": "science.physics.waves",
    "refs": [
      "6.2.5"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "A lens refracts light. A convex/converging lens brings incident parallel rays toward a principal focus; focal length is distance from lens centre to focus. A concave/diverging lens spreads parallel rays as if they came from a focus on the incoming side.",
    "learn": [
      {
        "title": "Convex and concave lenses",
        "text": "A lens refracts light. A convex/converging lens brings incident parallel rays toward a principal focus; focal length is distance from lens centre to focus. A concave/diverging lens spreads parallel rays as if they came from a focus on the incoming side.",
        "scene": "wav1:lenses:0",
        "process": false
      },
      {
        "title": "Construct the image",
        "text": "Use a ray parallel to the principal axis then through the far focus for a convex lens; a ray through the lens centre continues straight in the thin-lens model. Their crossing gives a real inverted image. With the object inside a convex focal length, extend emerging rays backward to find an upright virtual image. A concave lens forms a virtual image.",
        "scene": "wav1:lenses:1",
        "process": false
      },
      {
        "title": "Real, virtual and magnified",
        "text": "A real image can be projected onto a screen; a virtual image is found by backward extensions and cannot be projected at that apparent location. Magnification=image height/object height, using the same length units; it has no unit. A converging lens can give real or virtual images depending on object position.",
        "scene": "wav1:lenses:2",
        "process": false
      },
      {
        "title": "Compare image sizes",
        "text": "Choose object and supplied image heights, predict magnification and reveal a ray schematic. The actual image heights are supplied measurements, not a thin-lens-equation solution from the fixed drawing. Independent ray construction still needs your own correctly scaled diagram.",
        "scene": "wav1:lenses:3",
        "process": false
      }
    ],
    "prerequisites": [
      "science.physics.waves.refraction"
    ],
    "skills": [
      "WS1.2",
      "MS3b",
      "MS3c",
      "MS4a"
    ],
    "widget": "wav1-lenses",
    "practice": [
      {
        "id": "wav1.lenses.practice1",
        "prompt": "Focal length is distance from…",
        "options": [
          "Lens centre to principal focus",
          "Object to image",
          "Top to bottom of lens"
        ],
        "answer": 0,
        "why": "Use the principal axis.",
        "concept": "wav1.lenses"
      },
      {
        "id": "wav1.lenses.practice2",
        "prompt": "A concave lens forms…",
        "options": [
          "Always a real image",
          "A virtual image",
          "No refracted rays"
        ],
        "answer": 1,
        "why": "Diverging rays can be extended backward.",
        "concept": "wav1.lenses"
      },
      {
        "id": "wav1.lenses.practice3",
        "prompt": "Magnification has…",
        "options": [
          "Units of mm",
          "Units of cm",
          "No units"
        ],
        "answer": 2,
        "why": "It is a ratio of same-unit lengths.",
        "concept": "wav1.lenses"
      }
    ],
    "check": [
      {
        "id": "wav1.lenses.check1",
        "prompt": "Image12 mm and object4 mm give magnification…",
        "options": [
          "3",
          "0.333 mm",
          "8 mm"
        ],
        "answer": 0,
        "why": "12/4=3 with no unit.",
        "concept": "wav1.lenses"
      },
      {
        "id": "wav1.lenses.check2",
        "prompt": "An image projected onto a screen is…",
        "options": [
          "Always virtual",
          "Real",
          "Impossible with a convex lens"
        ],
        "answer": 1,
        "why": "Actual rays meet at a real image.",
        "concept": "wav1.lenses"
      },
      {
        "id": "wav1.lenses.check3",
        "prompt": "For an object inside a convex focal length, the image is…",
        "options": [
          "Always real and inverted",
          "At the focus necessarily",
          "Virtual and upright"
        ],
        "answer": 2,
        "why": "Backward extensions locate the apparent image.",
        "concept": "wav1.lenses"
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
      "completionKey": "wav1Passed"
    }
  },
  {
    "id": "science.physics.waves.colour",
    "title": "Visible colour, surfaces and filters",
    "short": "Visible colour, surfaces and filters",
    "topicId": "science.physics.waves",
    "refs": [
      "6.2.6"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "Each visible colour covers a narrow wavelength/frequency band. White light contains a mixture of visible wavelengths. A smooth surface reflects a beam in one direction (specular reflection); a rough surface scatters reflected rays (diffuse reflection).",
    "learn": [
      {
        "title": "Visible colours are wavelength bands",
        "text": "Each visible colour covers a narrow wavelength/frequency band. White light contains a mixture of visible wavelengths. A smooth surface reflects a beam in one direction (specular reflection); a rough surface scatters reflected rays (diffuse reflection).",
        "scene": "wav1:colour:0",
        "process": false
      },
      {
        "title": "Reflection gives an opaque object its colour",
        "text": "An opaque object appears the colour of wavelengths it reflects strongly under the available illumination. A red object reflects red and absorbs much other visible light; under only blue light it may look dark. White reflects visible wavelengths broadly; black absorbs them broadly.",
        "scene": "wav1:colour:1",
        "process": false
      },
      {
        "title": "Filters transmit selectively",
        "text": "A colour filter transmits selected wavelengths and absorbs others. A red filter transmits red; it cannot add red to a purely blue incoming beam. Transparent materials transmit a clear image; translucent materials transmit light but scatter it. Real filters have broad, imperfect transmission bands.",
        "scene": "wav1:colour:2",
        "process": false
      },
      {
        "title": "Predict a filter result",
        "text": "Choose an ideal red/blue incoming beam and red/blue filter. Predict transmitted colour or no beam. Colour labels accompany every outcome. This ideal single-band model omits partial transmission, perception and real spectral curves.",
        "scene": "wav1:colour:3",
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
    "widget": "wav1-colour",
    "practice": [
      {
        "id": "wav1.colour.practice1",
        "prompt": "An opaque red object in white light appears red because it…",
        "options": [
          "Reflects red more strongly",
          "Creates red nuclei",
          "Transmits every colour"
        ],
        "answer": 0,
        "why": "Other wavelengths are absorbed more strongly.",
        "concept": "wav1.colour"
      },
      {
        "id": "wav1.colour.practice2",
        "prompt": "A red filter mainly…",
        "options": [
          "Adds red to any beam",
          "Transmits red and absorbs other bands",
          "Reflects all colours equally"
        ],
        "answer": 1,
        "why": "A filter selects from incoming light.",
        "concept": "wav1.colour"
      },
      {
        "id": "wav1.colour.practice3",
        "prompt": "Diffuse reflection is associated with…",
        "options": [
          "A perfect smooth mirror only",
          "No reflected light",
          "Varying surface normals on a rough surface"
        ],
        "answer": 2,
        "why": "Reflection is scattered in different directions.",
        "concept": "wav1.colour"
      }
    ],
    "check": [
      {
        "id": "wav1.colour.check1",
        "prompt": "A red object under ideal blue-only light may appear…",
        "options": [
          "Dark",
          "Bright red automatically",
          "White"
        ],
        "answer": 0,
        "why": "There may be little red available to reflect.",
        "concept": "wav1.colour"
      },
      {
        "id": "wav1.colour.check2",
        "prompt": "An ideal blue filter with blue incoming light transmits…",
        "options": [
          "Red",
          "Blue",
          "Every band"
        ],
        "answer": 1,
        "why": "Its pass band matches the incoming band.",
        "concept": "wav1.colour"
      },
      {
        "id": "wav1.colour.check3",
        "prompt": "A translucent material…",
        "options": [
          "Transmits a perfectly clear image always",
          "Absorbs every wavelength",
          "Transmits light with scattering"
        ],
        "answer": 2,
        "why": "Light gets through without a clear view.",
        "concept": "wav1.colour"
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
      "completionKey": "wav1Passed"
    }
  },
  {
    "id": "science.physics.waves.blackbody",
    "title": "Black bodies and thermal emission",
    "short": "Black bodies and thermal emission",
    "topicId": "science.physics.waves",
    "refs": [
      "6.3.1",
      "6.3.2"
    ],
    "combinedRefs": [],
    "separate": true,
    "higher": false,
    "minutes": 35,
    "big": "All objects emit and absorb infrared radiation regardless of temperature. A hotter object emits more energy per second. Temperature changes both emission intensity and the wavelength distribution: the peak shifts toward shorter wavelengths as temperature increases.",
    "learn": [
      {
        "title": "Every object emits radiation",
        "text": "All objects emit and absorb infrared radiation regardless of temperature. A hotter object emits more energy per second. Temperature changes both emission intensity and the wavelength distribution: the peak shifts toward shorter wavelengths as temperature increases.",
        "scene": "wav1:blackbody:0",
        "process": false
      },
      {
        "title": "An ideal absorber and emitter",
        "text": "A perfect black body absorbs all radiation incident on it, with no reflection or transmission. A good absorber is also a good emitter, so a perfect black body is the best possible emitter at a given temperature. It is an ideal model, not simply any object painted black.",
        "scene": "wav1:blackbody:1",
        "process": false
      },
      {
        "title": "Read a spectrum",
        "text": "An emission spectrum plots intensity against wavelength. Hotter black-body curves are higher and peak at shorter wavelengths. A thermal camera’s false colours are chosen display colours; they do not mean a room-temperature object emits visible blue/red as drawn.",
        "scene": "wav1:blackbody:2",
        "process": false
      },
      {
        "title": "Compare ideal spectra",
        "text": "Choose a lower/higher supplied temperature and a low/high emitted-power comparison. Predict which spectrum peaks at shorter wavelength. The curves are qualitative illustrations, not Planck-law calculations or calibrated temperatures.",
        "scene": "wav1:blackbody:3",
        "process": false
      },
      {
        "title": "Higher: balance incoming and outgoing radiation",
        "text": "Constant temperature requires absorbed radiation power to equal emitted radiation power. If absorption exceeds emission, temperature rises; if emission exceeds absorption, it falls. Earth’s temperature depends on absorption, emission and reflection into space, including surface and atmospheric interactions. Compare energy-flow arrows and supplied values; a one-box model omits circulation, feedbacks and wavelength-dependent atmosphere.",
        "scene": "wav1:blackbody:4",
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
    "widget": "wav1-blackbody",
    "practice": [
      {
        "id": "wav1.blackbody.practice1",
        "prompt": "A perfect black body…",
        "options": [
          "Absorbs all incident radiation",
          "Reflects every wavelength",
          "Transmits every wavelength"
        ],
        "answer": 0,
        "why": "No incident energy is reflected or transmitted.",
        "concept": "wav1.blackbody"
      },
      {
        "id": "wav1.blackbody.practice2",
        "prompt": "At higher temperature, emission generally…",
        "options": [
          "Always decreases",
          "Increases with peak toward shorter wavelengths",
          "Has an unchanged spectrum"
        ],
        "answer": 1,
        "why": "Intensity and wavelength distribution change.",
        "concept": "wav1.blackbody"
      },
      {
        "id": "wav1.blackbody.practice3",
        "prompt": "At the same temperature a good absorber is also…",
        "options": [
          "Always transparent",
          "Unable to emit",
          "A good emitter"
        ],
        "answer": 2,
        "why": "Absorption and emission properties are linked.",
        "concept": "wav1.blackbody"
      }
    ],
    "check": [
      {
        "id": "wav1.blackbody.check1",
        "prompt": "A cold object can emit infrared because…",
        "options": [
          "All objects emit radiation",
          "Only glowing objects emit",
          "It must be radioactive"
        ],
        "answer": 0,
        "why": "Emission does not require visible glow.",
        "concept": "wav1.blackbody"
      },
      {
        "id": "wav1.blackbody.check2",
        "prompt": "A false-colour thermal image is…",
        "options": [
          "A visible-wavelength photograph necessarily",
          "A display representation of detected infrared",
          "A direct chemical analysis"
        ],
        "answer": 1,
        "why": "Display colours are assigned.",
        "concept": "wav1.blackbody"
      },
      {
        "id": "wav1.blackbody.check3",
        "prompt": "A hotter black-body curve has a peak at…",
        "options": [
          "Longer wavelength necessarily",
          "The same wavelength necessarily",
          "Shorter wavelength"
        ],
        "answer": 2,
        "why": "Its wavelength distribution changes.",
        "concept": "wav1.blackbody"
      },
      {
        "id": "wav1.blackbody.check-higher",
        "prompt": "An object absorbs80 W and emits60 W of radiation. Its temperature tends to…",
        "options": [
          "Rise",
          "Stay constant",
          "Fall"
        ],
        "answer": 0,
        "why": "Net radiation input is20W; the energy store increases.",
        "concept": "wav1.blackbody"
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
      "completionKey": "wav1Passed"
    },
    "higherQuestions": [
      "wav1.blackbody.check-higher"
    ]
  },
  {
    "id": "science.physics.waves.infrared",
    "title": "Investigating infrared surfaces",
    "short": "Investigating infrared surfaces",
    "topicId": "science.physics.waves",
    "refs": [
      "6.2.2"
    ],
    "combinedRefs": [
      "6.2.2"
    ],
    "separate": false,
    "higher": false,
    "minutes": 35,
    "big": "Required practical10 (separate) or21 (Trilogy) investigates how infrared absorbed or radiated depends on the surface. Compare matt black and shiny surfaces while controlling temperatures, area, distance, angle and detector settings. A Leslie cube with different faces can provide a common internal temperature for emission comparisons.",
    "learn": [
      {
        "title": "Compare the nature of surfaces",
        "text": "Required practical10 (separate) or21 (Trilogy) investigates how infrared absorbed or radiated depends on the surface. Compare matt black and shiny surfaces while controlling temperatures, area, distance, angle and detector settings. A Leslie cube with different faces can provide a common internal temperature for emission comparisons.",
        "scene": "wav1:infrared:0",
        "process": false
      },
      {
        "title": "Measure emitted radiation",
        "text": "Keep detector position/distance and face area comparable; allow a stable temperature and record repeated readings. Matt dark surfaces are generally better emitters than shiny reflective surfaces at equal temperature. Detector readings are evidence under the apparatus conditions, not a universal colour-only law.",
        "scene": "wav1:infrared:1",
        "process": false
      },
      {
        "title": "Investigate absorption fairly",
        "text": "Use identical containers/sensors and equal incident radiation/initial temperature. Compare temperature rise over the same time with other heat transfers controlled as far as possible. Avoid touching hot apparatus; follow school procedures. Conduction, convection and cooling can affect results.",
        "scene": "wav1:infrared:2",
        "process": false
      },
      {
        "title": "Predict an illustrative reading",
        "text": "Choose matt/shiny surface and one of two common source temperatures. Predict which supplied relative detector reading applies. Values are original toy data, not emissivities or a complete cooling model. Physical apparatus use and uncertainty evaluation remain school evidence.",
        "scene": "wav1:infrared:3",
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
    "widget": "wav1-infrared",
    "practice": [
      {
        "id": "wav1.infrared.practice1",
        "prompt": "For an emission comparison, keep…",
        "options": [
          "Temperature and detector geometry comparable",
          "Only the surface names equal",
          "Every reading forced equal"
        ],
        "answer": 0,
        "why": "Control confounding variables.",
        "concept": "wav1.infrared"
      },
      {
        "id": "wav1.infrared.practice2",
        "prompt": "At equal temperature matt black is generally…",
        "options": [
          "A poorer emitter than shiny",
          "A better emitter than shiny",
          "A perfect black body necessarily"
        ],
        "answer": 1,
        "why": "Real surfaces approximate rather than equal the ideal.",
        "concept": "wav1.infrared"
      },
      {
        "id": "wav1.infrared.practice3",
        "prompt": "A Leslie cube helps control…",
        "options": [
          "The detector count to zero",
          "The wavelength to one colour",
          "The source temperature across faces"
        ],
        "answer": 2,
        "why": "Different faces share the heated interior.",
        "concept": "wav1.infrared"
      }
    ],
    "check": [
      {
        "id": "wav1.infrared.check1",
        "prompt": "Changing detector distance between surfaces makes comparison…",
        "options": [
          "Potentially confounded",
          "Automatically more accurate",
          "Independent of geometry"
        ],
        "answer": 0,
        "why": "Distance affects received radiation.",
        "concept": "wav1.infrared"
      },
      {
        "id": "wav1.infrared.check2",
        "prompt": "An absorption trial should compare…",
        "options": [
          "Different starting temperatures without correction",
          "Equal incident radiation and controlled initial conditions",
          "Only the final container colours"
        ],
        "answer": 1,
        "why": "Control conditions to interpret the temperature change.",
        "concept": "wav1.infrared"
      },
      {
        "id": "wav1.infrared.check3",
        "prompt": "A simulated high detector reading proves…",
        "options": [
          "Hands-on practical competence",
          "A universal emissivity value",
          "Only the stated model comparison"
        ],
        "answer": 2,
        "why": "Real data and uncertainty need separate evidence.",
        "concept": "wav1.infrared"
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
      "completionKey": "wav1Passed"
    }
  }
];
export const wav1Concepts={"wav1.types": "Transverse and longitudinal waves", "wav1.properties": "Amplitude, wavelength, frequency and speed", "wav1.measure": "Measuring waves in water, solids and air", "wav1.reflection": "Reflection, transmission and absorption", "wav1.sound": "Sound, solids and hearing", "wav1.detection": "Ultrasound, sonar and seismic evidence", "wav1.spectrum": "The electromagnetic spectrum", "wav1.refraction": "Refraction at a boundary", "wav1.hazards": "EM production, absorption and radiation risk", "wav1.applications": "Using the electromagnetic spectrum", "wav1.lenses": "Lenses, ray diagrams and magnification", "wav1.colour": "Visible colour, surfaces and filters", "wav1.blackbody": "Black bodies and thermal emission", "wav1.infrared": "Investigating infrared surfaces"};
