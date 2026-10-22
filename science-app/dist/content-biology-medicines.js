export const medicineLessons=[
  {
    "id": "science.biology.infection-and-response.vaccination",
    "title": "Vaccination",
    "short": "Vaccination",
    "topicId": "science.biology.infection-and-response",
    "refs": [
      "3.1.7"
    ],
    "minutes": 35,
    "widget": "medicine-vaccine",
    "big": "In the GCSE model, small quantities of dead or inactive pathogen material are introduced by vaccination. Antigens stimulate white blood cells to produce specific antibodies without the disease caused by the active pathogen. The model simplifies the variety of real vaccine technologies.",
    "learn": [
      {
        "title": "Prepare a specific response",
        "text": "In the GCSE model, small quantities of dead or inactive pathogen material are introduced by vaccination. Antigens stimulate white blood cells to produce specific antibodies without the disease caused by the active pathogen. The model simplifies the variety of real vaccine technologies.",
        "scene": "medicine:memory:initial"
      },
      {
        "title": "Respond faster next time",
        "text": "After the first response, immune memory allows a quicker production of the correct antibodies when the same pathogen enters again. This can stop the pathogen establishing disease. A vaccine against one pathogen does not automatically protect against every other pathogen; protection is not a universal guarantee.",
        "scene": "medicine:memory:repeat"
      },
      {
        "title": "Interrupt chains of spread",
        "text": "Immunising a large proportion of a population leaves fewer susceptible hosts. Transmission chains become harder to sustain, indirectly helping people who remain susceptible. The result depends on the disease, contact patterns and protection; there is no single coverage threshold for every disease.",
        "scene": "medicine:network"
      },
      {
        "title": "Evaluate global use",
        "text": "Vaccination programmes can prevent serious illness and reduce spread across populations. Supply, cost, storage and access can limit delivery, so achieving broad coverage matters as well as developing a vaccine. Use evidence about benefits, risks and access rather than assuming every programme has identical effects. Specific vaccine schedules or side effects are not required here.",
        "scene": "medicine:network"
      }
    ],
    "practice": [
      {
        "id": "bio.p-med-vaccination1",
        "prompt": "What does dead/inactive pathogen material stimulate?",
        "options": [
          "The active disease in every recipient",
          "White blood cells to make specific antibodies",
          "Red cells to make antibiotics"
        ],
        "answer": 1,
        "why": "Antigens trigger a specific immune response.",
        "concept": "bio.medicine-vaccination"
      },
      {
        "id": "bio.p-med-vaccination2",
        "prompt": "What changes when the same pathogen returns?",
        "options": [
          "Every antibody loses its binding site",
          "The vaccine becomes an antibiotic",
          "Correct antibodies can be produced more quickly"
        ],
        "answer": 2,
        "why": "Immune memory supports a faster response.",
        "concept": "bio.medicine-vaccination"
      },
      {
        "id": "bio.p-med-vaccination3",
        "prompt": "How can broad vaccination help a susceptible person indirectly?",
        "options": [
          "Fewer transmission chains reach them",
          "It guarantees they can never be infected",
          "It changes every pathogen into a harmless fungus"
        ],
        "answer": 0,
        "why": "Fewer susceptible hosts interrupt routes through a population.",
        "concept": "bio.medicine-vaccination"
      },
      {
        "id": "bio.p-med-vaccination4",
        "prompt": "Which is a sensible global programme consideration?",
        "options": [
          "Assume delivery is identical everywhere",
          "Reliable access and storage alongside evidence of benefit",
          "Only the colour of the packaging"
        ],
        "answer": 1,
        "why": "Availability and delivery affect achieved coverage.",
        "concept": "bio.medicine-vaccination"
      }
    ],
    "check": [
      {
        "id": "bio.c-med-vaccination1",
        "prompt": "Which description matches the GCSE vaccination model?",
        "options": [
          "An active pathogen must cause full disease",
          "Dead/inactive pathogen material stimulates antibody production",
          "An antibiotic changes red blood cells into viruses"
        ],
        "answer": 1,
        "why": "Vaccination prepares a response to antigens.",
        "concept": "bio.medicine-vaccination"
      },
      {
        "id": "bio.c-med-vaccination2",
        "prompt": "Which cells produce the antibodies?",
        "options": [
          "Red blood cells",
          "Platelets alone",
          "White blood cells"
        ],
        "answer": 2,
        "why": "Specific antibody production is a white-cell role.",
        "concept": "bio.medicine-vaccination"
      },
      {
        "id": "bio.c-med-vaccination3",
        "prompt": "A vaccinated person encounters the same antigen again. What is expected?",
        "options": [
          "A faster correct antibody response",
          "No possible immune response",
          "Antibodies to every unrelated antigen"
        ],
        "answer": 0,
        "why": "Memory improves the speed of the specific response.",
        "concept": "bio.medicine-vaccination"
      },
      {
        "id": "bio.c-med-vaccination4",
        "prompt": "Why does increasing the immunised proportion often reduce spread?",
        "options": [
          "Every contact has become an antibiotic",
          "There are fewer susceptible hosts in transmission chains",
          "Pathogens no longer need hosts anywhere"
        ],
        "answer": 1,
        "why": "Interrupting chains reduces transmission opportunities.",
        "concept": "bio.medicine-vaccination"
      },
      {
        "id": "bio.c-med-vaccination5",
        "prompt": "A vaccine targets pathogen A. Must it protect against unrelated B?",
        "options": [
          "Yes; all antigens are identical",
          "Only if B is a plant",
          "No; antibody recognition is specific"
        ],
        "answer": 2,
        "why": "The particular antigen matters.",
        "concept": "bio.medicine-vaccination"
      },
      {
        "id": "bio.c-med-vaccination6",
        "prompt": "Which conclusion is justified by an idealised20-person network model?",
        "options": [
          "It illustrates chain interruption under stated assumptions",
          "It establishes an exact real-world vaccination threshold",
          "It predicts one person’s medical risk"
        ],
        "answer": 0,
        "why": "A small deterministic network is a mechanism model, not measured epidemiology.",
        "concept": "bio.medicine-vaccination"
      },
      {
        "id": "bio.c-med-vaccination7",
        "prompt": "A programme has an effective vaccine but patchy delivery. What should be evaluated?",
        "options": [
          "Whether antibiotics can replace every vaccine",
          "Access, supply and achieved coverage",
          "Only whether all recipients have the same birthday"
        ],
        "answer": 1,
        "why": "Delivery determines how many people receive protection.",
        "concept": "bio.medicine-vaccination"
      },
      {
        "id": "bio.c-med-vaccination8",
        "prompt": "Does vaccination guarantee protection for every individual in all circumstances?",
        "options": [
          "Yes; no vaccine ever has limits",
          "It guarantees all pathogens disappear",
          "No; the model simplifies real protection"
        ],
        "answer": 2,
        "why": "Protection and population effects vary with the disease and circumstances.",
        "concept": "bio.medicine-vaccination"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "MS1c"
    ],
    "prerequisites": [
      "science.biology.infection-and-response.human-defences"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.infection-and-response.medicines",
    "title": "Antibiotics & painkillers",
    "short": "Antibiotics & painkillers",
    "topicId": "science.biology.infection-and-response",
    "refs": [
      "3.1.8"
    ],
    "minutes": 35,
    "widget": "medicine-medicines",
    "big": "Antibiotics such as penicillin help cure bacterial disease by killing infective bacteria inside the body. The antibiotic must be effective against the particular bacterium; one antibiotic cannot be assumed to work for every strain. Their use has greatly reduced deaths from bacterial infections.",
    "learn": [
      {
        "title": "Treat the bacterium",
        "text": "Antibiotics such as penicillin help cure bacterial disease by killing infective bacteria inside the body. The antibiotic must be effective against the particular bacterium; one antibiotic cannot be assumed to work for every strain. Their use has greatly reduced deaths from bacterial infections.",
        "scene": "medicine:treatment:bacterial"
      },
      {
        "title": "A virus is a different target",
        "text": "Antibiotics do not kill viral pathogens. Viruses replicate inside living host cells, so developing a drug that stops the virus without damaging body tissues is difficult. Antiviral treatments can exist, as the HIV lesson shows; difficult does not mean impossible.",
        "scene": "medicine:treatment:viral"
      },
      {
        "title": "Relief is not pathogen removal",
        "text": "Painkillers and other symptom-relieving medicines can reduce symptoms without killing pathogens. A patient feeling less pain is not evidence that bacteria or viruses have been removed. Distinguish relief of the symptom from treatment aimed at the cause.",
        "scene": "medicine:treatment:pain"
      },
      {
        "title": "Check effectiveness",
        "text": "A supplied laboratory susceptibility result can help compare whether an antibiotic affects a bacterial strain. This classroom comparison is qualitative: actual treatment requires appropriate clinical evidence and cannot be selected from a toy model.",
        "scene": "medicine:susceptibility"
      }
    ],
    "practice": [
      {
        "id": "bio.p-med-medicines1",
        "prompt": "Which target can an effective antibiotic kill?",
        "options": [
          "Only human antibodies",
          "Infective bacteria",
          "Every virus inside any host cell"
        ],
        "answer": 1,
        "why": "Antibiotics act on bacteria, not viral pathogens.",
        "concept": "bio.medicine-medicines"
      },
      {
        "id": "bio.p-med-medicines2",
        "prompt": "A painkiller reduces pain. What follows?",
        "options": [
          "Every pathogen must be dead",
          "The immune system has become an antibiotic",
          "Symptoms improved; pathogen removal is not established"
        ],
        "answer": 2,
        "why": "Symptom relief and pathogen removal are different outcomes.",
        "concept": "bio.medicine-medicines"
      },
      {
        "id": "bio.p-med-medicines3",
        "prompt": "Why are antiviral drugs difficult to develop?",
        "options": [
          "Viruses replicate in host cells, risking tissue damage",
          "Viruses are always larger than humans",
          "Viruses have no interaction with cells"
        ],
        "answer": 0,
        "why": "The treatment must affect viral processes without unacceptable host damage.",
        "concept": "bio.medicine-medicines"
      },
      {
        "id": "bio.p-med-medicines4",
        "prompt": "Why choose an antibiotic effective against the specific strain?",
        "options": [
          "Pain relief always proves susceptibility",
          "Susceptibility differs between bacteria/strains",
          "Every antibiotic kills every bacterium equally"
        ],
        "answer": 1,
        "why": "Appropriate antibiotics must match the bacterial target.",
        "concept": "bio.medicine-medicines"
      }
    ],
    "check": [
      {
        "id": "bio.c-med-medicines1",
        "prompt": "Penicillin is an example of…",
        "options": [
          "A vaccine antigen only",
          "An antibiotic",
          "An antibody"
        ],
        "answer": 1,
        "why": "Penicillin is an antibacterial medicine.",
        "concept": "bio.medicine-medicines"
      },
      {
        "id": "bio.c-med-medicines2",
        "prompt": "Which outcome has antibiotic use helped achieve?",
        "options": [
          "The elimination of every viral illness",
          "No possibility of resistant bacteria",
          "Fewer deaths from infectious bacterial disease"
        ],
        "answer": 2,
        "why": "Antibiotics have greatly reduced bacterial-disease deaths.",
        "concept": "bio.medicine-medicines"
      },
      {
        "id": "bio.c-med-medicines3",
        "prompt": "A viral infection is present. Will an antibiotic kill that virus?",
        "options": [
          "No",
          "Yes, always",
          "Only if the person has no pain"
        ],
        "answer": 0,
        "why": "Antibiotics cannot kill viral pathogens.",
        "concept": "bio.medicine-medicines"
      },
      {
        "id": "bio.c-med-medicines4",
        "prompt": "A medicine reduces fever but does not affect pathogen numbers. Its role here is…",
        "options": [
          "Vaccination against all pathogens",
          "Symptom relief",
          "Proof of bacterial elimination"
        ],
        "answer": 1,
        "why": "Symptoms can improve without killing pathogens.",
        "concept": "bio.medicine-medicines"
      },
      {
        "id": "bio.c-med-medicines5",
        "prompt": "Which evidence supports choosing antibiotic X over Y for a supplied bacterium?",
        "options": [
          "X has brighter packaging",
          "Both names have the same length",
          "The strain is susceptible to X but resistant to Y"
        ],
        "answer": 2,
        "why": "Effectiveness against the bacterium matters.",
        "concept": "bio.medicine-medicines"
      },
      {
        "id": "bio.c-med-medicines6",
        "prompt": "Why could a poorly selective antiviral harm tissues?",
        "options": [
          "The virus uses processes inside host cells",
          "The virus is a mosquito net",
          "All antiviral drugs are necessarily harmless"
        ],
        "answer": 0,
        "why": "Host-cell involvement makes selective treatment challenging.",
        "concept": "bio.medicine-medicines"
      },
      {
        "id": "bio.c-med-medicines7",
        "prompt": "Does the difficulty of antiviral development mean no antivirals exist?",
        "options": [
          "Only bacteria can enter cells",
          "No; treatments such as HIV antiretrovirals exist",
          "Yes; none can ever work"
        ],
        "answer": 1,
        "why": "Difficulty does not imply impossibility.",
        "concept": "bio.medicine-medicines"
      },
      {
        "id": "bio.c-med-medicines8",
        "prompt": "Which distinction is correct?",
        "options": [
          "Painkiller: kills every virus; vaccine: antibiotic",
          "Antibody and antibiotic are the same substance",
          "Antibiotic: targets bacteria; antibody: immune protein"
        ],
        "answer": 2,
        "why": "Do not confuse medicines with immune products.",
        "concept": "bio.medicine-medicines"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.4"
    ],
    "prerequisites": [
      "science.biology.infection-and-response.bacterial-diseases"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.infection-and-response.resistance",
    "title": "Antibiotic resistance",
    "short": "Antibiotic resistance",
    "topicId": "science.biology.infection-and-response",
    "refs": [
      "3.1.8",
      "6.3.7"
    ],
    "minutes": 35,
    "widget": "medicine-resistance",
    "big": "Bacteria reproduce quickly. Mutations can create new strains, and some variants may be resistant to an antibiotic. The variation is not a deliberate response to what a bacterium needs. In our model, resistant variants are already present before treatment begins.",
    "learn": [
      {
        "title": "Variation comes first",
        "text": "Bacteria reproduce quickly. Mutations can create new strains, and some variants may be resistant to an antibiotic. The variation is not a deliberate response to what a bacterium needs. In our model, resistant variants are already present before treatment begins.",
        "scene": "medicine:selection:before"
      },
      {
        "title": "Treatment changes survival",
        "text": "An antibiotic kills susceptible bacteria while resistant ones may survive. The survivors reproduce and pass on resistance, increasing the resistant strain’s share of the population. The bacteria become resistant, not the person. This is natural selection; the antibiotic does not teach each bacterium to resist.",
        "scene": "medicine:selection:after"
      },
      {
        "title": "A growing treatment problem",
        "text": "Resistant strains can spread and be hard to treat with the antibiotic they resist. MRSA is an example of antibiotic-resistant bacteria; resistance to some drugs does not mean resistance to every possible treatment. Developing new antibiotics is slow and costly, so it may not keep pace with resistant strains.",
        "scene": "medicine:selection:reproduce"
      },
      {
        "title": "Reduce unnecessary selection",
        "text": "Avoid inappropriate antibiotic prescribing, including use against viral infections, and restrict unnecessary agricultural use. Patients should follow the prescribed course and instructions rather than changing treatment themselves. Effective prescribed treatment aims to remove the infection; it is not a guarantee that every bacterium is killed. In this model, selection acts on existing variation.",
        "scene": "medicine:stewardship"
      }
    ],
    "practice": [
      {
        "id": "bio.p-med-resistance1",
        "prompt": "Where does the variation for resistance come from?",
        "options": [
          "People becoming immune to a tablet",
          "Mutations",
          "Every bacterium deciding to change"
        ],
        "answer": 1,
        "why": "Mutation produces variation; it is not directed by need.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.p-med-resistance2",
        "prompt": "What happens after susceptible bacteria are killed?",
        "options": [
          "All survivors must become viruses",
          "Resistance disappears from every offspring",
          "Resistant survivors can reproduce"
        ],
        "answer": 2,
        "why": "Survival and reproduction increase the resistant strain’s share.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.p-med-resistance3",
        "prompt": "Why avoid antibiotics for a viral infection?",
        "options": [
          "They do not kill the virus and unnecessary use selects resistance",
          "They always cure viruses instantly",
          "They make every antibody specific"
        ],
        "answer": 0,
        "why": "Unnecessary exposure can favour resistant bacteria without treating the virus.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.p-med-resistance4",
        "prompt": "Why is relying only on new antibiotics a weak long-term response?",
        "options": [
          "Resistance cannot spread",
          "Development is costly and slow relative to resistance",
          "New drugs are instant and free"
        ],
        "answer": 1,
        "why": "Stewardship and spread control matter alongside development.",
        "concept": "bio.medicine-resistance"
      }
    ],
    "check": [
      {
        "id": "bio.c-med-resistance1",
        "prompt": "Before treatment,2 of20 bacteria are resistant. What caused the variation?",
        "options": [
          "The patient became resistant",
          "Mutation in bacterial lineages",
          "The antibiotic instructed exactly two cells to change"
        ],
        "answer": 1,
        "why": "Variation can arise before selection.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.c-med-resistance2",
        "prompt": "An antibiotic kills18 susceptible cells, leaving2 resistant cells. What is the immediate effect?",
        "options": [
          "Every survivor has become a human cell",
          "The resistant count must already be20",
          "Resistant proportion rises even though total count falls"
        ],
        "answer": 2,
        "why": "Selection changes composition before reproduction increases numbers.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.c-med-resistance3",
        "prompt": "The2 survivors produce8 resistant descendants. What explains this?",
        "options": [
          "Survival, reproduction and inheritance",
          "All susceptible cells chose to become resistant",
          "The drug created eight antibodies"
        ],
        "answer": 0,
        "why": "Resistant lineages can expand after selection.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.c-med-resistance4",
        "prompt": "Who or what is antibiotic-resistant in this example?",
        "options": [
          "The painkiller’s packaging",
          "The bacterial strain",
          "The patient as a whole"
        ],
        "answer": 1,
        "why": "Resistance describes the bacteria’s response to an antibiotic.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.c-med-resistance5",
        "prompt": "MRSA is an example of…",
        "options": [
          "A vaccine against all disease",
          "A viral painkiller",
          "Antibiotic-resistant bacteria"
        ],
        "answer": 2,
        "why": "MRSA illustrates the resistant-strain problem.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.c-med-resistance6",
        "prompt": "Which prescribing decision reduces unnecessary selection?",
        "options": [
          "Avoid antibiotics that are inappropriate, such as for viral disease",
          "Use antibiotics for every cough regardless of cause",
          "Assume every infection requires penicillin"
        ],
        "answer": 0,
        "why": "Appropriate prescribing limits unnecessary antibiotic exposure.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.c-med-resistance7",
        "prompt": "Which agricultural policy supports stewardship?",
        "options": [
          "Replace all hygiene with antibiotics",
          "Restrict unnecessary antibiotic use",
          "Use unlimited antibiotics without a reason"
        ],
        "answer": 1,
        "why": "Agricultural use can contribute to selection pressure.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.c-med-resistance8",
        "prompt": "How should a patient use a prescribed course?",
        "options": [
          "Change the course using this classroom model",
          "Assume pain relief proves every pathogen is gone",
          "Follow the prescriber’s course and instructions"
        ],
        "answer": 2,
        "why": "The lesson illustrates selection, not individual treatment decisions.",
        "concept": "bio.medicine-resistance"
      },
      {
        "id": "bio.c-med-resistance9",
        "prompt": "Why can bacterial populations evolve rapidly?",
        "options": [
          "Fast reproduction allows variants to spread over generations",
          "Every bacterium lives for millions of years before dividing",
          "They never vary"
        ],
        "answer": 0,
        "why": "Short generation times allow population composition to change quickly.",
        "concept": "bio.medicine-resistance"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "MS1c"
    ],
    "prerequisites": [
      "science.biology.infection-and-response.medicines"
    ],
    "separate": false,
    "higher": false,
    "combinedRefs": [
      "3.1.8",
      "6.3.4"
    ],
    "extraSource": "https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/inheritance-variation-and-evolution"
  },
  {
    "id": "science.biology.infection-and-response.drug-discovery",
    "title": "Discovering & testing drugs",
    "short": "Discovering & testing drugs",
    "topicId": "science.biology.infection-and-response",
    "refs": [
      "3.1.9"
    ],
    "minutes": 35,
    "widget": "medicine-discovery",
    "big": "Traditional medicines often came from plants or microorganisms. Digitalis, used for heart conditions, originates from foxgloves. Aspirin has its origins in willow. Alexander Fleming discovered penicillin through the effect of Penicillium mould. A natural source does not make an untested substance safe to use.",
    "learn": [
      {
        "title": "Natural sources began the search",
        "text": "Traditional medicines often came from plants or microorganisms. Digitalis, used for heart conditions, originates from foxgloves. Aspirin has its origins in willow. Alexander Fleming discovered penicillin through the effect of Penicillium mould. A natural source does not make an untested substance safe to use.",
        "scene": "medicine:sources:foxglove"
      },
      {
        "title": "Chemists develop candidates",
        "text": "Most new drugs are synthesised by chemists in the pharmaceutical industry. A molecule extracted from a plant may still provide the starting point. Researchers can make and compare candidate compounds; finding a promising source is only the beginning of testing.",
        "scene": "medicine:sources:lab"
      },
      {
        "title": "Ask three different questions",
        "text": "Toxicity asks what harm a substance can cause. Efficacy asks whether it produces the intended effect. Dose is the amount given; testing seeks an effective amount with acceptable harms. A compound can be effective yet too toxic, or have little toxicity but no useful effect.",
        "scene": "medicine:screen"
      },
      {
        "title": "Test before human trials",
        "text": "Preclinical testing takes place in the laboratory using cells, tissues and live animals. It provides evidence about toxicity, efficacy and dose before clinical trials involving people. Each model has limitations; a promising result in cells does not prove a drug is safe and effective in humans.",
        "scene": "medicine:preclinical"
      }
    ],
    "practice": [
      {
        "id": "bio.p-med-drug-discovery1",
        "prompt": "Which source matches digitalis?",
        "options": [
          "A human red blood cell",
          "Foxglove",
          "Willow"
        ],
        "answer": 1,
        "why": "Digitalis originates from foxgloves.",
        "concept": "bio.medicine-drug-discovery"
      },
      {
        "id": "bio.p-med-drug-discovery2",
        "prompt": "Which pair is correct?",
        "options": [
          "Aspirin—mosquito; penicillin—rose black spot",
          "Digitalis—willow; aspirin—HIV",
          "Aspirin—willow; penicillin—Penicillium"
        ],
        "answer": 2,
        "why": "Recall the named origins without assuming natural substances are safe.",
        "concept": "bio.medicine-drug-discovery"
      },
      {
        "id": "bio.p-med-drug-discovery3",
        "prompt": "A candidate works but damages tissues badly. Which issue is raised?",
        "options": [
          "Toxicity",
          "Proof of safety",
          "Only the spelling of its name"
        ],
        "answer": 0,
        "why": "Efficacy and toxicity are different tests.",
        "concept": "bio.medicine-drug-discovery"
      },
      {
        "id": "bio.p-med-drug-discovery4",
        "prompt": "Which evidence is preclinical?",
        "options": [
          "Only advertising to healthy people",
          "Laboratory cells, tissues and live-animal testing",
          "A patient placebo trial"
        ],
        "answer": 1,
        "why": "Preclinical work precedes trials in people.",
        "concept": "bio.medicine-drug-discovery"
      }
    ],
    "check": [
      {
        "id": "bio.c-med-drug-discovery1",
        "prompt": "A heart medicine originates from foxgloves. Which named example is it?",
        "options": [
          "Aspirin",
          "Digitalis",
          "Penicillin"
        ],
        "answer": 1,
        "why": "Digitalis is the specified foxglove example.",
        "concept": "bio.medicine-drug-discovery"
      },
      {
        "id": "bio.c-med-drug-discovery2",
        "prompt": "Which plant is linked to aspirin’s origins?",
        "options": [
          "Foxglove",
          "Tobacco only",
          "Willow"
        ],
        "answer": 2,
        "why": "Aspirin has its origins in willow.",
        "concept": "bio.medicine-drug-discovery"
      },
      {
        "id": "bio.c-med-drug-discovery3",
        "prompt": "Who discovered penicillin through Penicillium mould?",
        "options": [
          "Alexander Fleming",
          "Gregor Mendel",
          "Charles Darwin"
        ],
        "answer": 0,
        "why": "Fleming is the specified discovery example.",
        "concept": "bio.medicine-drug-discovery"
      },
      {
        "id": "bio.c-med-drug-discovery4",
        "prompt": "How are most new drugs produced today?",
        "options": [
          "Only secreted by human platelets",
          "Synthesised by pharmaceutical chemists",
          "Always eaten directly from untreated plants"
        ],
        "answer": 1,
        "why": "Plant chemicals can still be starting points for synthesis.",
        "concept": "bio.medicine-drug-discovery"
      },
      {
        "id": "bio.c-med-drug-discovery5",
        "prompt": "A test measures whether a candidate produces the intended effect. It assesses…",
        "options": [
          "Only toxicity",
          "Only packaging",
          "Efficacy"
        ],
        "answer": 2,
        "why": "Efficacy means effectiveness for the intended purpose.",
        "concept": "bio.medicine-drug-discovery"
      },
      {
        "id": "bio.c-med-drug-discovery6",
        "prompt": "Which set belongs to preclinical testing?",
        "options": [
          "Cells, tissues and live animals",
          "Only patients given placebo",
          "Only peer-review journalists"
        ],
        "answer": 0,
        "why": "These are the laboratory systems named in the specification.",
        "concept": "bio.medicine-drug-discovery"
      },
      {
        "id": "bio.c-med-drug-discovery7",
        "prompt": "A candidate works in cultured cells. What can be concluded?",
        "options": [
          "Clinical trials are unnecessary",
          "It is promising in that test, but human evidence is still needed",
          "It is guaranteed safe at every human dose"
        ],
        "answer": 1,
        "why": "Model results cannot establish all human effects.",
        "concept": "bio.medicine-drug-discovery"
      },
      {
        "id": "bio.c-med-drug-discovery8",
        "prompt": "Why test dose as well as toxicity and efficacy?",
        "options": [
          "The biggest dose is always best",
          "Dose only changes the label colour",
          "Benefit and harm can change with amount given"
        ],
        "answer": 2,
        "why": "An effective dose must be considered alongside harms.",
        "concept": "bio.medicine-drug-discovery"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.4"
    ],
    "prerequisites": [
      "science.biology.infection-and-response.medicines"
    ],
    "separate": false,
    "higher": false
  },
  {
    "id": "science.biology.infection-and-response.clinical-trials",
    "title": "Clinical trials & evidence",
    "short": "Clinical trials & evidence",
    "topicId": "science.biology.infection-and-response",
    "refs": [
      "3.1.9"
    ],
    "minutes": 35,
    "widget": "medicine-trials",
    "big": "Clinical trials use healthy volunteers and patients. Initial trials start with very low doses and careful monitoring to assess safety. If results support proceeding, further trials investigate effectiveness and the optimum dose. No stage can guarantee that every possible adverse effect has been found.",
    "learn": [
      {
        "title": "Begin cautiously in people",
        "text": "Clinical trials use healthy volunteers and patients. Initial trials start with very low doses and careful monitoring to assess safety. If results support proceeding, further trials investigate effectiveness and the optimum dose. No stage can guarantee that every possible adverse effect has been found.",
        "scene": "medicine:trial:early"
      },
      {
        "title": "Use a fair comparison",
        "text": "Patients can be allocated to a drug or a placebo comparison group. A placebo resembles the treatment but lacks its active drug. People in either group may improve for other reasons, so compare groups rather than counting all improvement as a drug effect. Random allocation helps reduce systematic group differences.",
        "scene": "medicine:trial:blind"
      },
      {
        "title": "Reduce expectation bias",
        "text": "In a double-blind trial, neither participants nor the staff assessing their outcomes know who received drug or placebo during the comparison. Coded groups reduce expectation-related bias. The allocation can be revealed after the comparison; double blind does not mean nobody can ever access the data.",
        "scene": "medicine:trial:blind"
      },
      {
        "title": "Balance benefit and harm",
        "text": "The optimum dose is not automatically the largest dose. Compare the intended benefit and adverse effects at each tested level. In our fictional dataset, the selected level must meet a stated benefit criterion and stay below a stated harm limit; those thresholds are classroom rules, not clinical doses.",
        "scene": "medicine:dose"
      },
      {
        "title": "Scrutinise the result",
        "text": "If65 of100 people improve with drug and40 of100 with placebo, the difference is25 percentage points. That is a comparison, not proof every improvement was caused by the drug. Scientists scrutinise methods and results through peer review before publication. Review can identify weaknesses but does not guarantee a conclusion is true forever.",
        "scene": "medicine:results"
      }
    ],
    "practice": [
      {
        "id": "bio.p-med-clinical-trials1",
        "prompt": "Why start a clinical trial at a very low dose?",
        "options": [
          "Avoid collecting evidence",
          "Assess safety cautiously",
          "Guarantee every dose is harmless"
        ],
        "answer": 1,
        "why": "Low starting doses limit initial exposure while effects are monitored.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.p-med-clinical-trials2",
        "prompt": "What does double blind mean here?",
        "options": [
          "Nobody receives any treatment",
          "Researchers never collect outcomes",
          "Participants and outcome assessors do not know allocations"
        ],
        "answer": 2,
        "why": "Blinding reduces expectation bias during the comparison.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.p-med-clinical-trials3",
        "prompt": "A placebo group improves. What should researchers do?",
        "options": [
          "Compare the drug and placebo groups",
          "Count every improvement as drug action",
          "Delete the placebo results"
        ],
        "answer": 0,
        "why": "Improvement has other possible causes; a comparison is needed.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.p-med-clinical-trials4",
        "prompt": "What does peer review provide?",
        "options": [
          "Permission to skip human testing",
          "Expert scrutiny of methods and results",
          "A guarantee no error can exist"
        ],
        "answer": 1,
        "why": "Peer review checks work, but does not establish certainty.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.p-med-trial-difference",
        "prompt": "Original groups:65/100 improve with drug and40/100 with placebo. Difference in improvement / percentage points",
        "type": "number",
        "answer": 25,
        "tolerance": 0.001,
        "unit": "percentage points",
        "why": "Subtract the two percentages:65−40=25 percentage points.",
        "concept": "bio.medicine-clinical-trials"
      }
    ],
    "check": [
      {
        "id": "bio.c-med-clinical-trials1",
        "prompt": "Which participants are used in clinical testing?",
        "options": [
          "Only laboratory animals",
          "Healthy volunteers and patients",
          "Only isolated cells"
        ],
        "answer": 1,
        "why": "Clinical testing involves people; preclinical testing includes cells/tissues/animals.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.c-med-clinical-trials2",
        "prompt": "What is appropriate at the start of human testing?",
        "options": [
          "The maximum conceivable dose",
          "No safety observations",
          "Very low doses with monitoring"
        ],
        "answer": 2,
        "why": "Initial testing proceeds cautiously.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.c-med-clinical-trials3",
        "prompt": "After acceptable early safety results, what do further trials investigate?",
        "options": [
          "Efficacy and optimum dose",
          "Only the plant’s leaf shape",
          "Whether all bacteria are viruses"
        ],
        "answer": 0,
        "why": "Further trials build the benefit/dose evidence.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.c-med-clinical-trials4",
        "prompt": "What distinguishes a placebo?",
        "options": [
          "It ensures nobody improves",
          "It lacks the active drug being tested",
          "It contains a guaranteed stronger dose"
        ],
        "answer": 1,
        "why": "A placebo supports a comparison and can resemble the active treatment.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.c-med-clinical-trials5",
        "prompt": "Why conceal allocations from participants and assessors?",
        "options": [
          "Make every result automatically correct",
          "Prevent any measurement",
          "Reduce expectation-related bias"
        ],
        "answer": 2,
        "why": "Double blinding reduces a source of bias.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.c-med-clinical-trials6",
        "prompt": "Which dose is best supported by a stated benefit/harm criterion?",
        "options": [
          "One meeting the benefit target with acceptable harms",
          "Always the largest dose",
          "Always zero, even with no benefit"
        ],
        "answer": 0,
        "why": "Balance benefit and harm using the supplied evidence.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.c-med-clinical-trials7",
        "prompt": "Why use random allocation when possible?",
        "options": [
          "Replace the need for a comparison",
          "Reduce systematic differences between groups",
          "Guarantee identical outcomes"
        ],
        "answer": 1,
        "why": "Random allocation helps make the comparison fair.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.c-med-clinical-trials8",
        "prompt": "What happens in peer review?",
        "options": [
          "A company guarantees all future safety",
          "Every negative result must be erased",
          "Other experts scrutinise methods and conclusions"
        ],
        "answer": 2,
        "why": "Scrutiny can identify limitations before publication.",
        "concept": "bio.medicine-clinical-trials"
      },
      {
        "id": "bio.c-med-trial-difference",
        "prompt": "New original groups:54/80 improve with drug;36/80 with placebo. Difference / percentage points",
        "type": "number",
        "answer": 22.5,
        "tolerance": 0.001,
        "unit": "percentage points",
        "why": "67.5%−45%=22.5 percentage points.",
        "concept": "bio.medicine-clinical-trials"
      }
    ],
    "skills": [
      "WS1.2",
      "WS1.4",
      "WS1.6",
      "MS1c",
      "MS2c",
      "MS4a"
    ],
    "prerequisites": [
      "science.biology.infection-and-response.drug-discovery"
    ],
    "separate": false,
    "higher": false
  }
];
export const medicineConcepts={"bio.medicine-vaccination": "Vaccination", "bio.medicine-medicines": "Antibiotics & painkillers", "bio.medicine-resistance": "Antibiotic resistance", "bio.medicine-drug-discovery": "Discovering & testing drugs", "bio.medicine-clinical-trials": "Clinical trials & evidence"};
