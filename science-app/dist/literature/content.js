import {batch12} from './content-batch12.js?v=20261029-lit12';
import {batch11} from './content-batch11.js?v=20261029-lit11';
import {batch10} from './content-batch10.js?v=20261029-lit10';
import {batch09} from './content-batch09.js?v=20261028-lit09';
import {batch08} from './content-batch08.js?v=20261028-lit08';
import {batch07} from './content-batch07.js?v=20261028-lit07';
import {batch06} from './content-batch06.js?v=20261028-lit06';
import {batch05} from './content-batch05.js?v=20261028-lit05';
import {batch04} from './content-batch04.js?v=20261028-lit04';
import {batch03} from './content-batch03.js?v=20261028-lit03';
import {batch02} from './content-batch02.js?v=20261028-lit02';
export const source="https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification";
export const topics=[{id:"english-literature.macbeth",title:"Macbeth",unit:"8702"},{id:"english-literature.christmas-carol",title:"A Christmas Carol",unit:"8702"},{id:"english-literature.inspector-calls",title:"An Inspector Calls",unit:"8702-modern"},{id:"english-literature.power-conflict",title:"Power and Conflict",unit:"8702-poetry"}];
topics.push({id:"english-literature.unseen",title:"Unseen poetry",unit:"8702-unseen"},{id:"english-literature.reading-writing",title:"Reading and analytical writing",unit:"8702-skills"});
export const units=[{id:"8702",title:"AQA GCSE English Literature",paper:"Paper 1 · Shakespeare and the 19th-century novel"},{id:"8702-modern",title:"AQA GCSE English Literature",paper:"Paper 2 · Modern text"},{id:"8702-poetry",title:"AQA GCSE English Literature",paper:"Paper 2 · Anthology poetry"}];
units.push({id:"8702-unseen",title:"AQA GCSE English Literature",paper:"Paper 2 · Unseen poetry"},{id:"8702-skills",title:"AQA GCSE English Literature",paper:"Skills across Papers 1 and 2"});
export const specIssue="checked 28 October 2026";
export const lessons=[
  {
    "title": "A world turned upside down",
    "scope": "Act 1, scenes 1–2",
    "cards": [
      [
        "Begin with uncertainty",
        "Three witches arrange to meet Macbeth after a battle. Thunder and their contradictory language unsettle the audience before the hero appears. The short opening creates questions rather than explaining the whole conflict."
      ],
      [
        "Meet the hero through a report",
        "In scene 2, a wounded captain describes Macbeth fighting for Duncan against rebellion and invasion. Duncan orders the traitorous Thane of Cawdor’s execution and gives Macbeth that title. Macbeth does not yet know this. Public praise establishes a reputation that his later actions will test."
      ],
      [
        "Track who knows what",
        "The audience hears both the witches’ plan and Duncan’s decision. Macbeth has not heard either conversation. Shakespeare can build tension by giving the audience information that a character lacks; this is dramatic irony."
      ]
    ],
    "practice": [
      {
        "id": "lit.macbeth.opening.practice.1",
        "prompt": "What does the audience know before Macbeth?",
        "options": [
          "Duncan has given him Cawdor’s title.",
          "Lady Macbeth has become queen.",
          "Macbeth has met the witches."
        ],
        "answer": 0,
        "why": "Duncan announces the reward in scene 2; Macbeth receives the news in scene 3.",
        "concept": "lit.macbeth.knowledge"
      },
      {
        "id": "lit.macbeth.opening.practice.2",
        "prompt": "Which comment analyses rather than simply names a method?",
        "options": [
          "The reversed opposites make good and evil seem unstable.",
          "There is a technique.",
          "Shakespeare uses words."
        ],
        "answer": 0,
        "why": "An analytical comment connects a precise feature to meaning and its possible effect.",
        "concept": "lit.macbeth.methods"
      },
      {
        "id": "lit.macbeth.opening.practice.3",
        "prompt": "Does the opening prove the witches control every future action?",
        "options": [
          "No: it establishes uncertainty, not proof of total control.",
          "Yes: Macbeth has no responsibility.",
          "Yes: Duncan is a witch."
        ],
        "answer": 0,
        "why": "Distinguish an interpretation from a claim the text has established as fact.",
        "concept": "lit.macbeth.inference"
      }
    ],
    "check": [
      {
        "id": "lit.macbeth.opening.check.1",
        "prompt": "Why introduce Macbeth through the captain’s account?",
        "options": [
          "It establishes a celebrated reputation before we meet him.",
          "It proves that he is already king.",
          "It makes Duncan the narrator of the whole play."
        ],
        "answer": 0,
        "why": "Reported bravery establishes a public identity that later events complicate.",
        "concept": "lit.macbeth.reputation"
      },
      {
        "id": "lit.macbeth.opening.check.2",
        "prompt": "Which description fits dramatic irony here?",
        "options": [
          "The audience knows about the new title before Macbeth does.",
          "Every character knows the same information.",
          "A character speaks in rhyme."
        ],
        "answer": 0,
        "why": "Dramatic irony concerns a gap in knowledge, not rhyme.",
        "concept": "lit.macbeth.knowledge"
      },
      {
        "id": "lit.macbeth.opening.check.3",
        "prompt": "Which reading stays closest to the opening?",
        "options": [
          "The witches’ contradictions make appearances questionable.",
          "The witches explicitly order Duncan’s murder.",
          "Duncan already knows Macbeth will kill him."
        ],
        "answer": 0,
        "why": "The opening raises questions; it does not contain those instructions or knowledge.",
        "concept": "lit.macbeth.inference"
      },
      {
        "id": "lit.macbeth.opening.check.4",
        "prompt": "Which detail supports Macbeth’s initial loyalty?",
        "options": [
          "The captain describes him fighting Duncan’s enemies.",
          "He is already crowned.",
          "He refuses to fight."
        ],
        "answer": 0,
        "why": "His actions are reported as service to Duncan.",
        "concept": "lit.macbeth.reputation"
      }
    ],
    "writing": "How does Shakespeare make the opening unsettling? Connect one detail from scene 1 with the contrasting report in scene 2.",
    "rubric": [
      "Make a defensible interpretation of the opening.",
      "Use a precise word, contrast or dramatic detail as evidence.",
      "Explain how the method shapes uncertainty rather than just naming it."
    ],
    "id": "lit.macbeth.opening",
    "topicId": "english-literature.macbeth",
    "minutes": 25,
    "refs": [
      "3.1.1",
      "3.3"
    ],
    "views": [
      {
        "kind": "language",
        "title": "The witches · 1.1",
        "content": "Fair is foul, and foul is fair",
        "words": [
          [
            "Fair / foul",
            "The opposing words collapse moral distinctions. The audience may question whether appearances can be trusted."
          ],
          [
            "Repeated f sounds",
            "The repeated consonant connects the opposites in a memorable chant. Naming alliteration alone would not explain its effect."
          ],
          [
            "Reversed order",
            "The mirrored order makes the confusion seem systematic, not a single mistaken judgment."
          ]
        ]
      },
      {
        "kind": "people",
        "title": "Who knows what?",
        "rows": [
          [
            "Audience",
            "Knows the witches plan to meet Macbeth and Duncan has awarded Cawdor’s title."
          ],
          [
            "Duncan",
            "Trusts Macbeth’s reported bravery; knows the former Cawdor betrayed him."
          ],
          [
            "Macbeth",
            "Has fought in the battle but has not yet been told about his new title."
          ]
        ]
      },
      {
        "kind": "timeline",
        "title": "Follow the scene",
        "events": [
          [
            "1.1",
            "Witches arrange a meeting."
          ],
          [
            "1.2",
            "Captain reports Macbeth’s bravery."
          ],
          [
            "1.2",
            "Duncan awards Macbeth Cawdor’s title."
          ]
        ]
      }
    ],
    "tasks": [
      [
        "Which contrast best explains the opening’s tension?",
        [
          "The hero’s public reputation is praised while the witches create moral uncertainty.",
          "Macbeth has already betrayed Duncan.",
          "The witches tell Duncan to reward Macbeth."
        ],
        0,
        "The scenes juxtapose unsettling supernatural speech with human praise; they do not yet show Macbeth betraying Duncan."
      ]
    ]
  },
  {
    "title": "Prophecy is not a command",
    "scope": "Act 1, scene 3",
    "cards": [
      [
        "A greeting with consequences",
        "The witches greet Macbeth as Glamis, Cawdor and future king. They tell Banquo that his descendants will be kings, although he will not. Ross and Angus then confirm Macbeth’s new title. The fulfilment of one prediction makes the remaining promise tempting."
      ],
      [
        "Two responses to the same encounter",
        "Macbeth becomes absorbed in the possibility of kingship and privately imagines murder. Banquo warns that apparently truthful promises may lead to harm. His caution offers a contrasting response, so supernatural influence does not remove the question of human choice."
      ],
      [
        "An aside opens a private world",
        "Macbeth’s asides let the audience hear thoughts that other characters do not share. He considers both waiting for chance and taking violent action. Read this as a conflict within him, not an explicit order from the witches."
      ]
    ],
    "practice": [
      {
        "id": "lit.macbeth.prophecy.practice.1",
        "prompt": "Why does Cawdor’s confirmation matter?",
        "options": [
          "It gives the other prediction an appearance of credibility.",
          "It proves every prediction has the same meaning.",
          "It makes Banquo king immediately."
        ],
        "answer": 0,
        "why": "One confirmed title makes a further promise persuasive without proving its outcome or method.",
        "concept": "lit.macbeth.prophecy"
      },
      {
        "id": "lit.macbeth.prophecy.practice.2",
        "prompt": "What can an aside reveal?",
        "options": [
          "Private thoughts heard by the audience.",
          "A law obeyed by every character.",
          "A change of location only."
        ],
        "answer": 0,
        "why": "The theatrical convention creates unequal access to a character’s thoughts.",
        "concept": "lit.macbeth.methods"
      },
      {
        "id": "lit.macbeth.prophecy.practice.3",
        "prompt": "What is Banquo’s dramatic role in this encounter?",
        "options": [
          "A cautious contrast to Macbeth’s absorption.",
          "A messenger from Duncan.",
          "An identical response with no difference."
        ],
        "answer": 0,
        "why": "A contrast helps an audience consider different responses to temptation.",
        "concept": "lit.macbeth.contrast"
      }
    ],
    "check": [
      {
        "id": "lit.macbeth.prophecy.check.1",
        "prompt": "Who confirms the new title?",
        "options": [
          "Ross and Angus.",
          "Lady Macbeth.",
          "Macduff’s children."
        ],
        "answer": 0,
        "why": "Duncan’s messengers confirm Cawdor.",
        "concept": "lit.macbeth.sequence"
      },
      {
        "id": "lit.macbeth.prophecy.check.2",
        "prompt": "Which inference is best supported?",
        "options": [
          "Macbeth is tempted but has conflicting thoughts about action.",
          "Macbeth has already killed Duncan.",
          "Banquo hears every aside."
        ],
        "answer": 0,
        "why": "His private thoughts move between violence and waiting.",
        "concept": "lit.macbeth.inference"
      },
      {
        "id": "lit.macbeth.prophecy.check.3",
        "prompt": "Why compare Macbeth and Banquo?",
        "options": [
          "Their different reactions make choice and caution visible.",
          "Their responses prove that everyone must obey prophecy.",
          "Banquo has never heard the witches."
        ],
        "answer": 0,
        "why": "Their contrast complicates any simple claim of supernatural control.",
        "concept": "lit.macbeth.contrast"
      },
      {
        "id": "lit.macbeth.prophecy.check.4",
        "prompt": "What does the conditional opening of the quotation suggest?",
        "options": [
          "A possible future rather than a settled course of action.",
          "A stage direction for a coronation.",
          "Proof Duncan has died."
        ],
        "answer": 0,
        "why": "A conditional statement considers a possibility.",
        "concept": "lit.macbeth.methods"
      }
    ],
    "writing": "How does Shakespeare present Macbeth’s response to the witches? Develop a reading of the quoted conditional sentence and contrast it with Banquo’s caution.",
    "rubric": [
      "Distinguish prediction, temptation and decision.",
      "Connect wording or an aside to Macbeth’s inner conflict.",
      "Use Banquo’s response to develop or qualify your interpretation."
    ],
    "id": "lit.macbeth.prophecy",
    "topicId": "english-literature.macbeth",
    "minutes": 25,
    "refs": [
      "3.1.1",
      "3.3"
    ],
    "views": [
      {
        "kind": "language",
        "title": "Macbeth · 1.3",
        "content": "If chance will have me king, why, chance may crown me",
        "words": [
          [
            "If",
            "The conditional opening presents a possibility. Macbeth has not yet made a settled public decision."
          ],
          [
            "chance repeated",
            "Giving chance the action of crowning imagines kingship arriving without Macbeth’s intervention."
          ],
          [
            "crown me",
            "The desired reward remains central even when he considers waiting. This does not erase his separate thoughts of violence."
          ]
        ]
      },
      {
        "kind": "people",
        "title": "Who knows what?",
        "rows": [
          [
            "Macbeth",
            "Knows Cawdor’s title is real and privately imagines murder."
          ],
          [
            "Banquo",
            "Heard the prophecies but warns against trusting their apparent truth."
          ],
          [
            "Ross and Angus",
            "Bring Duncan’s news; do not hear Macbeth’s private thoughts."
          ]
        ]
      },
      {
        "kind": "timeline",
        "title": "Follow the scene",
        "events": [
          [
            "Greeting",
            "Three titles are spoken."
          ],
          [
            "Confirmation",
            "Messengers confirm Cawdor."
          ],
          [
            "Response",
            "Macbeth considers the future; Banquo warns him."
          ]
        ]
      }
    ],
    "tasks": [
      [
        "Which claim respects the difference between prediction and instruction?",
        [
          "The promise encourages Macbeth’s ambition, but the witches do not command murder.",
          "The witches order Macbeth to kill Duncan that night.",
          "Banquo wants Macbeth to murder Duncan."
        ],
        0,
        "Influence matters, but Macbeth supplies the imagined murder himself."
      ]
    ]
  },
  {
    "title": "Public loyalty, private ambition",
    "scope": "Act 1, scenes 4–5",
    "cards": [
      [
        "An obstacle appears",
        "Duncan thanks Macbeth and names Malcolm Prince of Cumberland, establishing him as successor. Macbeth privately sees Malcolm as an obstacle. His courteous public conduct and concealed desires create a gap that the audience can observe."
      ],
      [
        "A letter reaches Lady Macbeth",
        "Lady Macbeth reads Macbeth’s account of the encounter. She wants the promised power but fears he lacks the ruthlessness to take it. Her judgment is one character’s view; it should not be treated as an objective account of Macbeth’s entire nature."
      ],
      [
        "Language becomes a strategy",
        "Lady Macbeth calls on spirits to suppress pity and urges Macbeth to hide dangerous intentions beneath a welcoming appearance. Ideas of gender, violence and power enter the persuasion, but neither character simply represents all men or all women."
      ]
    ],
    "practice": [
      {
        "id": "lit.macbeth.hidden-desires.practice.1",
        "prompt": "Why is Malcolm’s new position important?",
        "options": [
          "Macbeth sees an obstacle between himself and the throne.",
          "It makes Macbeth Duncan’s legal successor.",
          "It cancels Duncan’s visit."
        ],
        "answer": 0,
        "why": "His private reaction turns the succession announcement into a personal obstacle.",
        "concept": "lit.macbeth.ambition"
      },
      {
        "id": "lit.macbeth.hidden-desires.practice.2",
        "prompt": "What makes the stars quotation revealing?",
        "options": [
          "Macbeth asks to conceal desires that the audience hears.",
          "Every guest hears his plan.",
          "He gives up ambition."
        ],
        "answer": 0,
        "why": "The audience gains access to concealed intention.",
        "concept": "lit.macbeth.appearance"
      },
      {
        "id": "lit.macbeth.hidden-desires.practice.3",
        "prompt": "How should context about gender be used?",
        "options": [
          "To illuminate specific language and its assumptions.",
          "To claim every early modern person had identical beliefs.",
          "To replace discussion of the text."
        ],
        "answer": 0,
        "why": "Context supports close reading; it should not become a sweeping substitute for evidence.",
        "concept": "lit.macbeth.context"
      }
    ],
    "check": [
      {
        "id": "lit.macbeth.hidden-desires.check.1",
        "prompt": "How does Lady Macbeth learn about the prophecies?",
        "options": [
          "From Macbeth’s letter.",
          "From Duncan’s speech to her.",
          "From Banquo’s children."
        ],
        "answer": 0,
        "why": "The letter carries Macbeth’s account into the domestic setting.",
        "concept": "lit.macbeth.sequence"
      },
      {
        "id": "lit.macbeth.hidden-desires.check.2",
        "prompt": "Who is named Prince of Cumberland?",
        "options": [
          "Malcolm.",
          "Macbeth.",
          "Banquo."
        ],
        "answer": 0,
        "why": "Duncan publicly identifies Malcolm as successor.",
        "concept": "lit.macbeth.ambition"
      },
      {
        "id": "lit.macbeth.hidden-desires.check.3",
        "prompt": "Which method links public conduct and private desire?",
        "options": [
          "The audience hears a private response alongside outward loyalty.",
          "The whole play has one narrator.",
          "Macbeth openly announces murder to Duncan."
        ],
        "answer": 0,
        "why": "The dramatic arrangement exposes a gap in appearance and intention.",
        "concept": "lit.macbeth.appearance"
      },
      {
        "id": "lit.macbeth.hidden-desires.check.4",
        "prompt": "Which claim about Lady Macbeth is defensible?",
        "options": [
          "Her view of Macbeth should be evaluated against his words and actions.",
          "She speaks as an infallible narrator.",
          "She has no desire for power."
        ],
        "answer": 0,
        "why": "A character’s interpretation is evidence to evaluate.",
        "concept": "lit.macbeth.inference"
      }
    ],
    "writing": "How does Shakespeare present concealed ambition in scenes 4–5? Analyse the light and darkness imagery and connect it to the difference between public conduct and private intention.",
    "rubric": [
      "Form an argument about concealed ambition.",
      "Analyse precise wording rather than listing symbols.",
      "Distinguish Macbeth’s thoughts from Lady Macbeth’s judgment of him."
    ],
    "id": "lit.macbeth.hidden-desires",
    "topicId": "english-literature.macbeth",
    "minutes": 25,
    "refs": [
      "3.1.1",
      "3.3"
    ],
    "views": [
      {
        "kind": "language",
        "title": "Macbeth · 1.4",
        "content": "Stars, hide your fires; Let not light see my black and deep desires.",
        "words": [
          [
            "hide",
            "The imperative asks for concealment. Macbeth understands a difference between his public identity and private wishes."
          ],
          [
            "light / black",
            "The contrast can associate visibility and moral judgment with his wish to hide ambition. It is figurative, not a literal experiment."
          ],
          [
            "deep desires",
            "The phrase presents ambition as inward and difficult to expose. His concealed wishes are now voiced directly to the audience."
          ]
        ]
      },
      {
        "kind": "people",
        "title": "Who knows what?",
        "rows": [
          [
            "Duncan",
            "Rewards Macbeth and names Malcolm successor."
          ],
          [
            "Macbeth",
            "Shows loyalty outwardly while concealing ambition."
          ],
          [
            "Lady Macbeth",
            "Learns the prophecy through the letter and plans to influence him."
          ]
        ]
      },
      {
        "kind": "timeline",
        "title": "Follow the scene",
        "events": [
          [
            "1.4",
            "Malcolm is named successor."
          ],
          [
            "1.4",
            "Macbeth privately responds to the obstacle."
          ],
          [
            "1.5",
            "Lady Macbeth reads the letter and prepares for Duncan’s visit."
          ]
        ]
      }
    ],
    "tasks": [
      [
        "Which interpretation distinguishes a viewpoint from a fact?",
        [
          "Lady Macbeth thinks Macbeth is too kind; later actions must test that judgment.",
          "Her description is Shakespeare’s final verdict on every action.",
          "Macbeth has no ambition until she speaks."
        ],
        0,
        "Characters interpret one another. Macbeth has already voiced desires in scene 4."
      ]
    ]
  },
  {
    "title": "The decision to kill",
    "scope": "Act 1, scenes 6–7",
    "cards": [
      [
        "The welcome is a performance",
        "Duncan praises the pleasant setting at Inverness, and Lady Macbeth welcomes him. The audience already knows about concealed ambition. Hospitality therefore creates dramatic irony: a place that seems safe to Duncan contains a threat he does not recognise."
      ],
      [
        "Macbeth argues against himself",
        "Alone, Macbeth considers the consequences of murder. Duncan is his king, relative and guest, and Macbeth recognises his virtues. Macbeth identifies ambition as his motive, then tells Lady Macbeth that they will go no further. A soliloquy lets the audience follow this reasoning."
      ],
      [
        "Persuasion changes the decision",
        "Lady Macbeth challenges his courage and masculinity, recalls a commitment, and describes a plan involving Duncan’s guards. Macbeth agrees. Her pressure matters, but the scene also shows his reasoning and consent; influence is not the same as the absence of agency."
      ]
    ],
    "practice": [
      {
        "id": "lit.macbeth.decision.practice.1",
        "prompt": "Why is the welcome dramatically ironic?",
        "options": [
          "The audience knows of a threat that Duncan does not recognise.",
          "Duncan explains the entire plot to the audience.",
          "The castle is literally invisible."
        ],
        "answer": 0,
        "why": "The irony depends on unequal knowledge.",
        "concept": "lit.macbeth.irony"
      },
      {
        "id": "lit.macbeth.decision.practice.2",
        "prompt": "What is a soliloquy doing here?",
        "options": [
          "Giving access to a character’s extended private reasoning.",
          "Proving every thought will become an action.",
          "Addressing a formal letter to Duncan."
        ],
        "answer": 0,
        "why": "Private reasoning can contain conflicting possibilities.",
        "concept": "lit.macbeth.methods"
      },
      {
        "id": "lit.macbeth.decision.practice.3",
        "prompt": "How does the riding image develop ambition?",
        "options": [
          "It suggests overreaching and possible loss of control.",
          "It confirms Macbeth owns the fastest horse.",
          "It removes every moral concern."
        ],
        "answer": 0,
        "why": "The metaphor shapes an interpretation of ambition, not a factual description of transport.",
        "concept": "lit.macbeth.ambition"
      }
    ],
    "check": [
      {
        "id": "lit.macbeth.decision.check.1",
        "prompt": "Which duty does Macbeth recognise?",
        "options": [
          "A host should protect a guest.",
          "A host must kill a guest.",
          "Duncan is an enemy invading the castle."
        ],
        "answer": 0,
        "why": "Hospitality is one of the obligations Macbeth knows he would violate.",
        "concept": "lit.macbeth.duty"
      },
      {
        "id": "lit.macbeth.decision.check.2",
        "prompt": "Why does his initial refusal matter?",
        "options": [
          "It shows the decision is contested rather than inevitable.",
          "It proves the murder has already happened.",
          "It shows Lady Macbeth is absent."
        ],
        "answer": 0,
        "why": "The scene stages a change in decision.",
        "concept": "lit.macbeth.agency"
      },
      {
        "id": "lit.macbeth.decision.check.3",
        "prompt": "What does Lady Macbeth’s persuasion include?",
        "options": [
          "Challenges to courage and a practical plan.",
          "Proof that Duncan has no heirs.",
          "An order from Malcolm."
        ],
        "answer": 0,
        "why": "Her persuasion joins personal pressure with proposed means.",
        "concept": "lit.macbeth.persuasion"
      },
      {
        "id": "lit.macbeth.decision.check.4",
        "prompt": "Which analysis explains a method’s effect?",
        "options": [
          "The riding metaphor presents ambition as dangerously overreaching.",
          "There is a metaphor, so Macbeth is good.",
          "The word ambition has eight letters."
        ],
        "answer": 0,
        "why": "Connect the image to its implications for the argument.",
        "concept": "lit.macbeth.methods"
      }
    ],
    "writing": "How does Shakespeare present the struggle over Duncan’s murder? Explain a change in Macbeth’s reasoning and analyse one method used to present ambition or persuasion.",
    "rubric": [
      "Track the change from reluctance to agreement.",
      "Analyse language or the dramatic form of private reasoning.",
      "Acknowledge pressure without erasing Macbeth’s decision."
    ],
    "id": "lit.macbeth.decision",
    "topicId": "english-literature.macbeth",
    "minutes": 25,
    "refs": [
      "3.1.1",
      "3.3"
    ],
    "views": [
      {
        "kind": "language",
        "title": "Macbeth · 1.7",
        "content": "I have no spur To prick the sides of my intent, but only Vaulting ambition",
        "words": [
          [
            "no spur",
            "The riding image suggests he lacks a justified driving reason for the act."
          ],
          [
            "but only",
            "The qualification isolates ambition after Macbeth has considered reasons against murder."
          ],
          [
            "Vaulting ambition",
            "The image of an overreaching rider suggests a desire that may exceed control and cause a fall."
          ]
        ]
      },
      {
        "kind": "people",
        "title": "Who knows what?",
        "rows": [
          [
            "Duncan",
            "Believes he has received a loyal welcome."
          ],
          [
            "Macbeth",
            "Lists duties against murder, refuses, then agrees to the plan."
          ],
          [
            "Lady Macbeth",
            "Challenges his resolve and proposes how to shift suspicion to the guards."
          ]
        ]
      },
      {
        "kind": "timeline",
        "title": "Follow the scene",
        "events": [
          [
            "Welcome",
            "Duncan arrives as a guest."
          ],
          [
            "Deliberation",
            "Macbeth reasons against murder and refuses."
          ],
          [
            "Persuasion",
            "Lady Macbeth pressures him and describes a plan."
          ],
          [
            "Decision",
            "Macbeth commits himself."
          ]
        ]
      }
    ],
    "tasks": [
      [
        "Which account preserves Macbeth’s responsibility?",
        [
          "He considers reasons not to kill and then agrees after pressure.",
          "He is unconscious throughout the discussion.",
          "Duncan orders his own murder."
        ],
        0,
        "The movement from deliberation to consent keeps agency visible alongside manipulation."
      ]
    ]
  },
  {
    "title": "A mind that cannot rest",
    "scope": "Act 2, scenes 1–2",
    "cards": [
      [
        "The imagined dagger",
        "Banquo and Fleance appear at night before Macbeth speaks alone. Macbeth questions a dagger he sees but cannot grasp. Shakespeare brings the audience into an unstable perception before the murder; the vision is not reliable evidence that a physical dagger is floating on stage."
      ],
      [
        "Violence happens offstage",
        "A bell signals the moment to act. Duncan’s killing is not shown directly. In scene 2 Macbeth returns disturbed, carrying the daggers. Broken exchanges, sounds and his account of voices shift attention from the act itself to its psychological consequences."
      ],
      [
        "Different responses to guilt",
        "Macbeth fears that he has destroyed his ability to sleep and imagines blood that cannot be washed away. Lady Macbeth initially treats washing as a practical solution and returns the daggers herself. Their contrast invites questions about guilt; it does not establish a medical diagnosis."
      ]
    ],
    "practice": [
      {
        "id": "lit.macbeth.murder.practice.1",
        "prompt": "Where does Duncan’s murder occur?",
        "options": [
          "Offstage between the scenes.",
          "In front of the audience during scene 1.",
          "In Malcolm’s letter."
        ],
        "answer": 0,
        "why": "Shakespeare focuses the next scene on the aftermath rather than displaying the act.",
        "concept": "lit.macbeth.staging"
      },
      {
        "id": "lit.macbeth.murder.practice.2",
        "prompt": "Why analyse the opening question?",
        "options": [
          "It conveys uncertainty in Macbeth’s perception.",
          "It proves he has no doubts.",
          "It is a command to Banquo."
        ],
        "answer": 0,
        "why": "Question form matters because it makes perception unstable.",
        "concept": "lit.macbeth.methods"
      },
      {
        "id": "lit.macbeth.murder.practice.3",
        "prompt": "What is the contrast over washing?",
        "options": [
          "Macbeth imagines lasting guilt; Lady Macbeth initially offers a practical response.",
          "Both say guilt is impossible.",
          "Lady Macbeth admits Duncan survived."
        ],
        "answer": 0,
        "why": "Distinguish literal cleaning from the figurative consequences of guilt.",
        "concept": "lit.macbeth.guilt"
      }
    ],
    "check": [
      {
        "id": "lit.macbeth.murder.check.1",
        "prompt": "What signals Macbeth to go?",
        "options": [
          "A bell.",
          "Duncan’s public order.",
          "Banquo’s coronation."
        ],
        "answer": 0,
        "why": "The bell is the agreed signal.",
        "concept": "lit.macbeth.sequence"
      },
      {
        "id": "lit.macbeth.murder.check.2",
        "prompt": "Which claim is supported by the speech?",
        "options": [
          "Macbeth is uncertain about the reality of what he sees.",
          "The audience must see an actual floating dagger.",
          "Banquo hands him the vision."
        ],
        "answer": 0,
        "why": "The questioning language preserves uncertainty.",
        "concept": "lit.macbeth.perception"
      },
      {
        "id": "lit.macbeth.murder.check.3",
        "prompt": "Why might offstage violence be effective?",
        "options": [
          "It directs attention to anticipation, sound and the disturbed aftermath.",
          "It means no murder occurs in the story.",
          "It removes all tension."
        ],
        "answer": 0,
        "why": "An event can be central without being directly shown.",
        "concept": "lit.macbeth.staging"
      },
      {
        "id": "lit.macbeth.murder.check.4",
        "prompt": "What should an analysis of sleep imagery explain?",
        "options": [
          "How the loss of rest can suggest guilt and inner disorder.",
          "Only how many times sleep is mentioned.",
          "A definite modern medical diagnosis."
        ],
        "answer": 0,
        "why": "Explore the imagery’s dramatic implications without imposing unsupported diagnosis.",
        "concept": "lit.macbeth.guilt"
      }
    ],
    "writing": "How does Shakespeare present Macbeth’s disturbed mind before and after the murder? Analyse the questioning voice and connect it to one dramatic or symbolic detail from scene 2.",
    "rubric": [
      "Make an interpretation about disturbance with evidence.",
      "Explain how a question, soliloquy, sound or offstage action shapes the audience’s experience.",
      "Connect before and after without claiming an uncertain vision is objective fact."
    ],
    "id": "lit.macbeth.murder",
    "topicId": "english-literature.macbeth",
    "minutes": 25,
    "refs": [
      "3.1.1",
      "3.3"
    ],
    "views": [
      {
        "kind": "language",
        "title": "Macbeth · 2.1",
        "content": "Is this a dagger which I see before me",
        "words": [
          [
            "Is this",
            "A question opens the speech in uncertainty rather than certainty."
          ],
          [
            "see",
            "The focus on perception invites an audience to question whether the object exists outside Macbeth’s mind."
          ],
          [
            "before me",
            "The apparent object lies on his route towards the murder, connecting perception with contemplated action."
          ]
        ]
      },
      {
        "kind": "people",
        "title": "Who knows what?",
        "rows": [
          [
            "Audience",
            "Hears the soliloquy and later the account of the killing; does not see Duncan murdered."
          ],
          [
            "Macbeth",
            "Questions a vision, kills Duncan offstage, then responds with fear and guilt."
          ],
          [
            "Lady Macbeth",
            "Signals the plan and later returns the daggers when Macbeth will not."
          ]
        ]
      },
      {
        "kind": "timeline",
        "title": "Follow the scene",
        "events": [
          [
            "2.1",
            "Macbeth speaks after Banquo and Fleance leave."
          ],
          [
            "Signal",
            "A bell prompts Macbeth to act."
          ],
          [
            "Offstage",
            "Duncan is killed."
          ],
          [
            "2.2",
            "Macbeth returns disturbed; Lady Macbeth deals with the daggers."
          ]
        ]
      }
    ],
    "tasks": [
      [
        "Which staging choice keeps the interpretation open?",
        [
          "Macbeth questions what he sees; a production may show a dagger or leave the audience to imagine it.",
          "Every production must prove a real magical dagger exists.",
          "Duncan watches Macbeth’s soliloquy."
        ],
        0,
        "The speech establishes uncertainty. A director’s choice is an interpretation, not a compulsory fact of the text."
      ]
    ]
  }
];

lessons.push(...batch02);

lessons.push(...batch03);

lessons.push(...batch04);

lessons.push(...batch05);

lessons.push(...batch06);

lessons.push(...batch07);

lessons.push(...batch08);

lessons.push(...batch09);

lessons.push(...batch10);

lessons.push(...batch11);

lessons.push(...batch12);
