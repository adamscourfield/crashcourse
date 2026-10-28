// Pearson Edexcel GCSE (9–1) History 1HI0: exam-skill lessons for Paper 1 (Option 11 and the Western Front)
// and the Paper 2 period study (P4). Question types follow the specification's assessment information (Issue 6);
// mark bands follow Pearson's published mark schemes and must be checked against the current ones.
// All text is original; no past-paper questions, sources or mark-scheme wording are reproduced.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const MED = 'history.medicine.kt1';
const WF = 'history.medicine.wf';
const CW = 'history.coldwar.kt1';

const timingP1 = view.timeline('Planning time in Paper 1 (1 hour 20 minutes, 52 marks)', [
  ['Section A', 'Western Front: describe features (4), source usefulness (8), follow-up (4)'],
  ['About 25 minutes', 'A common guide for Section A, at roughly a minute and a half per mark'],
  ['Section B', 'Thematic study: similarity or difference (4), explain why (12), one judgement question (16 + 4 SPaG)'],
  ['About 55 minutes', 'A common guide for Section B, leaving time to plan the 16-mark answer'],
]);
const timingP2 = view.timeline('Planning time in Paper 2 (1 hour 50 minutes, 64 marks)', [
  ['Booklet P', 'Cold War: two consequences (8), narrative account (8), importance of two of three (16)'],
  ['About 55 minutes', 'A common guide for the period study'],
  ['Booklet B', 'Elizabethan England: describe features (4), explain why (12), one judgement question (16)'],
  ['About 55 minutes', 'A common guide for the British depth study'],
]);

export const skillsLessons1 = [
lesson(MED, 'skills.p1-describe', 'Exam skills · Paper 1: explain one similarity or difference (4)', ['11 skills'], [
  ['What the question asks', 'The first thematic-study question asks you to explain one way in which something, such as ideas about the cause of disease, was similar or different in two periods. The specification says these questions normally span at least a century, so the two periods are usually far apart.'],
  ['How it is marked', 'The question is worth 4 marks. A simple, general point earns the lower level; the top level needs a clear similarity or difference supported by specific knowledge of both periods. Only one way is credited, so a second point gains nothing.'],
  ['A method', 'Start by naming the similarity or difference in one sentence, mentioning both periods. Give a specific example from the first period, then one from the second. Finish with a short explanation of why they were alike or different, such as the role of the Church or of science.'],
  ['Common mistakes', 'Writing about only one period; listing several ways instead of developing one; using vague phrases such as "medicine got better"; and telling a long story without stating the similarity or difference.'],
], view.factors('A four-step plan', [
  ['1 Point', 'state the similarity or difference, naming both periods'],
  ['2 First period', 'one specific example'],
  ['3 Second period', 'one specific example'],
  ['4 Explain', 'why they were similar or different'],
]), [
  timingP1,
  view.people('What examiners reward', [
    ['Comparison', 'a clear similarity or difference, not two descriptions'],
    ['Both periods', 'specific detail from each'],
    ['Precision', 'names, dates and examples rather than generalisations'],
    ['Focus', 'one way, developed'],
  ]),
  view.source('A question type to practise', 'A question asks you to explain one way in which hospital care in c1250–c1500 was different from care in c1700–c1900.', 'Choose one difference, such as who ran hospitals or what they did, and support it with an example from each period.'),
], [
  ['Which opening sentence best answers a similarity question?', ['In both periods supernatural ideas about disease remained common.', 'In the medieval period people believed in the Four Humours.', 'Medicine has changed a great deal over hundreds of years.'], 0, 'A similarity names both periods.'],
  ['Why does a second way gain no marks?', ['Only one way is credited by the mark scheme', 'The examiner stops reading after three lines', 'Second points are always counted as wrong'], 0, 'Develop one way.'],
  ['Exam skill · Explain one difference. Which answer would reach the top level?', ['Medieval doctors blamed the humours, but by the 1860s germ theory identified microbes, as microscopes improved.', 'Medicine was very different in the two periods, and a great many things changed over time.', 'In the Middle Ages doctors used urine charts and bled their patients to try to treat them.'], 0, 'Difference, two periods and an explanation.'],
  ['What is the best use of about five minutes?', ['One developed comparison with specific support', 'A full page about the earlier of the two periods', 'A list of four quick differences with no support'], 0, 'Matching time to marks.'],
], [
  Q('sk1.p1', 'How many marks is the similarity or difference question worth?', ['4', '8', '12'], 0, 'It is the first Section B question.', 'marks'),
  Q('sk1.p2', 'How many ways should you explain?', ['One', 'Two', 'Four'], 0, 'Only one is credited.', 'technique'),
  Q('sk1.p3', 'What do these questions normally span?', ['At least a century', 'A single year only', 'One decade at most'], 0, 'As the specification says.', 'technique'),
  Q('sk1.p4', 'What must your answer refer to?', ['Both periods', 'Only the later period', 'Only the earlier period'], 0, 'It is a comparison.', 'technique'),
  Q('sk1.p5', 'Which phrase is too vague?', ['"Medicine got better"', '"Germ theory, from 1861"', '"Galen\'s Four Humours"'], 0, 'Name specific features.', 'mistakes'),
], [
  Q('sk1.c1', 'Which paper includes this question?', ['Paper 1', 'Paper 2', 'Paper 3'], 0, 'The thematic study.', 'marks'),
  Q('sk1.c2', 'Which section of Paper 1 is the thematic study?', ['Section B', 'Section A', 'Booklet P'], 0, 'Section A is the Western Front.', 'marks'),
  Q('sk1.c3', 'What earns the top level?', ['Specific support from both periods', 'A long story about one of the periods', 'A list of as many changes as possible'], 0, 'A developed comparison.', 'technique'),
  Q('sk1.c4', 'What should the last step do?', ['Explain why', 'Repeat the question', 'Add a new way'], 0, 'Show understanding.', 'technique'),
  Q('sk1.c5', 'How long is Paper 1?', ['1 hour 20 minutes', '1 hour 50 minutes', '2 hours 30 minutes'], 0, 'Paper 1 is out of 52 marks.', 'timing'),
  Q('sk1.c6', 'What is a common mistake?', ['Writing about one period only', 'Naming both periods at the start', 'Giving a specific example from each'], 0, 'Comparison needs both periods.', 'mistakes'),
  Q('sk1.c7', 'Roughly how long suits a 4-mark answer?', ['About five minutes', 'About thirty minutes', 'About one minute'], 0, 'About a minute and a half per mark.', 'timing'),
  Q('sk1.c8', 'What links the two periods in a good answer?', ['An explanation of the cause', 'A list of the key dates', 'A personal opinion on it'], 0, 'Why they were alike or different.', 'technique'),
], {exam: 'Explain one way in which ideas about the causes of disease in the period c1500–c1700 were similar to ideas in the period c1250–c1500. (4 marks)'}),

lesson(MED, 'skills.p1-explain', 'Exam skills · Paper 1: explain why (12)', ['11 skills'], [
  ['What the question asks', 'The second thematic-study question asks you to explain why something happened or changed, such as why there was rapid change in surgery in a period. It focuses on the process of change and is worth 12 marks. Two stimulus points are printed with the question.'],
  ['How it is marked', 'Answers are marked in levels. Simple, general statements stay in the lowest levels; higher levels need several well-explained reasons, each linked clearly to the question, with accurate and relevant detail and a logical structure. The specification says you must add points of your own: answers that use only the stimulus points are penalised.'],
  ['A method', 'Plan three reasons: the two stimulus points and at least one of your own. Give each its own paragraph. Open with the reason, give specific evidence, then explain how it caused the change, using phrases such as "this meant that" or "as a result". Do not spend time on a separate introduction.'],
  ['Common mistakes', 'Describing events without explaining how they caused change; using only the stimulus points; writing about the wrong period; and giving a list of reasons with no development.'],
], view.factors('Paragraph pattern: point, evidence, explain', [
  ['Point', 'name the reason, linked to the question'],
  ['Evidence', 'specific dates, people and events'],
  ['Explain', 'how this caused or sped up the change'],
  ['Own knowledge', 'at least one reason beyond the stimulus points'],
]), [
  timingP1,
  view.people('What examiners reward', [
    ['Analysis', 'explaining how a cause led to the outcome'],
    ['Range', 'more than one reason, including your own'],
    ['Knowledge', 'accurate, relevant detail'],
    ['Structure', 'a clear line of reasoning'],
  ]),
  view.source('A question type to practise', 'A question asks you to explain why there was rapid progress in public health in the years c1800–c1900, with stimulus points about cholera and the 1875 Public Health Act.', 'Use the two prompts and add a reason of your own, such as the extension of the vote or new scientific evidence.'),
], [
  ['Why must you add your own point?', ['Answers using only the stimulus points are penalised', 'Stimulus points are always factually incorrect', 'Examiners always ignore the stimulus points'], 0, 'The specification requires it.'],
  ['Which sentence explains rather than describes?', ['The Great Stink made MPs feel the problem directly, so they agreed to fund new sewers.', 'In 1858 there was a Great Stink in London during a very hot summer.', 'Joseph Bazalgette was the engineer who built new sewers in London.'], 0, 'Explanation shows cause and effect.'],
  ['Exam skill · Explain why. Which plan would score most highly?', ['Three paragraphs: two stimulus points and one own reason, each explained.', 'One long paragraph describing what happened in the whole period.', 'Two paragraphs, one for each stimulus point, with a short story in each.'], 0, 'Range and explanation.'],
  ['What is the problem with a list of five reasons in one paragraph?', ['None of them is explained or supported', 'It is too long to be read in the time', 'Lists are never allowed in history exams'], 0, 'Development matters.'],
], [
  Q('sk2.p1', 'How many marks is the explain-why question worth?', ['12', '4', '16'], 0, 'In Paper 1 Section B.', 'marks'),
  Q('sk2.p2', 'How many stimulus points are printed?', ['Two', 'One', 'Five'], 0, 'You must add your own.', 'technique'),
  Q('sk2.p3', 'What concept does this question focus on?', ['The process of change', 'Similarity over time', 'How useful sources are'], 0, 'Why change happened.', 'technique'),
  Q('sk2.p4', 'What should each paragraph start with?', ['A reason linked to the question', 'A date from the period studied', 'A quotation from a historian'], 0, 'Put the point first.', 'structure'),
  Q('sk2.p5', 'Which phrase helps show explanation?', ['"As a result"', '"Once upon a time"', '"In conclusion"'], 0, 'It links cause and effect.', 'structure'),
], [
  Q('sk2.c1', 'How many reasons should you plan for?', ['About three', 'Only one', 'At least ten'], 0, 'Including one of your own.', 'structure'),
  Q('sk2.c2', 'What is penalised in the mark scheme?', ['Using only the stimulus points', 'Adding a reason of your own', 'Writing in separate paragraphs'], 0, 'As the specification states.', 'mistakes'),
  Q('sk2.c3', 'What separates higher levels from lower ones?', ['Explaining how the causes worked', 'Writing at much greater length', 'Neat and careful handwriting'], 0, 'Analysis lifts the level.', 'marks'),
  Q('sk2.c4', 'What is a common mistake?', ['Describing without explaining', 'Explaining how causes worked', 'Using specific, accurate detail'], 0, 'Story is not analysis.', 'mistakes'),
  Q('sk2.c5', 'Do you need a long introduction?', ['No', 'Yes, a full page', 'Yes, two paragraphs'], 0, 'Start with a reason.', 'structure'),
  Q('sk2.c6', 'Roughly how long suits a 12-mark answer?', ['About 15–18 minutes', 'About 5 or 6 minutes', 'About 40–45 minutes'], 0, 'About a minute and a half per mark.', 'timing'),
  Q('sk2.c7', 'What should evidence include?', ['Specific dates, people and events', 'General opinions about the topic', 'Modern examples from today\'s NHS'], 0, 'Accurate detail.', 'technique'),
  Q('sk2.c8', 'Which skill does this question reward with knowledge?', ['Analysis of causes', 'Source evaluation', 'Interpretation analysis'], 0, 'It targets AO1 and AO2.', 'marks'),
], {exam: 'Explain why there was rapid change in surgery in the period c1800–c1900. You may use anaesthetics and Lister\'s antiseptics in your answer. You must also use information of your own. (12 marks)'}),

lesson(MED, 'skills.p1-how-far', 'Exam skills · Paper 1: how far do you agree (16)', ['11 skills'], [
  ['What the question asks', 'The last thematic-study question gives a statement, such as a claim that an individual was the main reason for progress, and asks how far you agree. You answer one of two questions. It may focus on change and continuity, turning points, causes or consequences, and normally spans at least a whole period or two centuries.'],
  ['How it is marked', 'It is worth 16 marks, plus up to 4 for spelling, punctuation, grammar and specialist terms. Higher levels need a sustained argument that weighs the statement against other factors, uses accurate and relevant knowledge, and reaches a clear, justified judgement. As with the 12-mark question, you must add points of your own beyond the stimulus.'],
  ['A method', 'Plan briefly: one or two paragraphs that support the statement, one or two that challenge it, then a conclusion. State your view early. In each paragraph, explain how far the factor mattered. In the conclusion, weigh the factors against each other and explain your judgement with a criterion, such as which factor made the others possible.'],
  ['Common mistakes', 'Writing only about the factor in the statement; describing without judging; sitting on the fence in the conclusion; and leaving no time to check spelling and specialist terms.'],
], view.factors('A plan for a 16-mark judgement', [
  ['Agree', 'evidence that the statement is right'],
  ['Challenge', 'other factors and their importance'],
  ['Weigh', 'compare factors: which mattered most, and why'],
  ['Judge', 'a clear conclusion with a reason'],
]), [
  timingP1,
  view.people('What examiners reward', [
    ['Judgement', 'a clear answer to "how far"'],
    ['Balance', 'the statement weighed against other factors'],
    ['Criteria', 'a reason for the judgement, not just a preference'],
    ['SPaG', 'accurate spelling, punctuation, grammar and terms'],
  ]),
  view.source('A question type to practise', 'A question states that science and technology were the main reason for progress in medicine from c1700 to the present, and asks how far you agree.', 'Weigh science and technology against individuals, government and war, and decide which mattered most.'),
], [
  ['Which conclusion is strongest?', ['Science mattered most, because without new technology individuals like Fleming could not have succeeded.', 'There were many factors and they were all very important in their own different ways.', 'I agree with the statement because it is a good and true statement about medicine.'], 0, 'A judgement with a criterion.'],
  ['Why must you write about other factors?', ['To weigh the statement and judge how far it is right', 'Because the question bans writing about the named factor', 'Because examiners count up the number of factors'], 0, 'Balance enables judgement.'],
  ['Exam skill · How far? Which paragraph opening shows judgement?', ['Government action mattered, but less than science, because laws relied on scientific evidence.', 'Government action is another factor that played a part in improving public health.', 'The government passed the Public Health Act in 1875, some years after the Great Stink.'], 0, 'Weigh as you go.'],
  ['What are the 4 extra marks for?', ['Spelling, punctuation, grammar and specialist terms', 'Answering a second judgement question', 'Drawing a clear, labelled diagram'], 0, 'These are the SPaG marks.'],
], [
  Q('sk3.p1', 'How many marks is the judgement question worth?', ['16 plus 4 for SPaG', '12 with no SPaG', '8 plus 4 for SPaG'], 0, 'The biggest Paper 1 question.', 'marks'),
  Q('sk3.p2', 'How many of the two judgement questions do you answer?', ['One', 'Both', 'Neither'], 0, 'A choice of two.', 'technique'),
  Q('sk3.p3', 'What does a strong conclusion need?', ['A judgement with a reason', 'A new piece of evidence', 'A repeat of the question'], 0, 'Justify the judgement.', 'structure'),
  Q('sk3.p4', 'What should you do with the named factor?', ['Weigh it against others', 'Ignore it completely', 'Write only about it'], 0, 'Balance allows judgement.', 'technique'),
  Q('sk3.p5', 'What does SPaG include?', ['Specialist terms', 'Neat handwriting', 'Labelled diagrams'], 0, 'And spelling and grammar.', 'marks'),
], [
  Q('sk3.c1', 'What is "sitting on the fence"?', ['Avoiding a clear judgement', 'Making a clear judgement', 'Using plenty of evidence'], 0, 'It limits the level.', 'mistakes'),
  Q('sk3.c2', 'What is a criterion for judgement?', ['A reason one factor mattered more', 'A list of the most important dates', 'A personal feeling about the topic'], 0, 'It justifies the decision.', 'structure'),
  Q('sk3.c3', 'When should you state your view?', ['Early, then argue it', 'Only in the last line', 'Never'], 0, 'Sustain the argument.', 'structure'),
  Q('sk3.c4', 'What must you add beyond the stimulus?', ['Points of your own', 'Nothing else at all', 'A labelled diagram'], 0, 'Or the answer is penalised.', 'technique'),
  Q('sk3.c5', 'Roughly how long suits this question?', ['About 25 minutes', 'About 5 minutes', 'About 60 minutes'], 0, 'Including planning and checking.', 'timing'),
  Q('sk3.c6', 'Which is a common mistake?', ['Writing only about the named factor', 'Weighing factors against each other', 'Giving a clear, justified judgement'], 0, 'The answer becomes one-sided.', 'mistakes'),
  Q('sk3.c7', 'Which concepts can the question focus on?', ['Change, turning points, causes or consequences', 'Only how useful two sources are for an enquiry', 'Only how and why interpretations differ'], 0, 'As the specification says.', 'technique'),
  Q('sk3.c8', 'How should each paragraph end?', ['With how far the factor mattered', 'With a completely new topic', 'With a question for the reader'], 0, 'Judge as you go.', 'structure'),
], {exam: '"Individuals were the main reason for progress in medicine in the period c1700–c1900." How far do you agree? Explain your answer. (16 marks)'}),

lesson(WF, 'skills.he-describe', 'Exam skills · Western Front: describe two features (4)', ['11 HE skills'], [
  ['What the question asks', 'The first historic-environment questions ask you to describe features of something on the Western Front, such as the trench system or the work of stretcher bearers. They test knowledge and are worth 4 marks in total.'],
  ['How it is marked', 'Each feature earns a mark for identifying it and another for supporting detail that adds to it. A feature that is only named, or a detail that repeats the feature, does not earn the second mark.'],
  ['A method', 'Write two short paragraphs, one per feature. Begin with a clear feature, then add one specific supporting fact, such as a date, a number or how it worked. Two or three sentences each is enough.'],
  ['Common mistakes', 'Giving two features without detail; repeating the same feature in different words; explaining why things happened when the question asks for description; and writing far more than 4 marks need.'],
], view.factors('Feature + detail, twice', [
  ['Feature 1', 'a clear feature, stated simply'],
  ['Detail 1', 'a specific fact that adds to it'],
  ['Feature 2', 'a different feature'],
  ['Detail 2', 'a specific fact that adds to it'],
]), [
  timingP1,
  view.people('What examiners reward', [
    ['Identification', 'a valid feature'],
    ['Support', 'a specific detail that develops it'],
    ['Difference', 'two distinct features'],
    ['Brevity', 'no long explanation needed'],
  ]),
  view.source('A question type to practise', 'A question asks you to describe two features of the Casualty Clearing Stations.', 'For example: they were the first places with surgeons; they were often near railways so men could be moved by ambulance train.'),
], [
  ['Which answer earns both marks for one feature?', ['Casualty Clearing Stations had surgeons, who carried out urgent operations there.', 'Casualty Clearing Stations were very important places on the Western Front.', 'There were Casualty Clearing Stations that soldiers went to during the war.'], 0, 'Feature plus detail.'],
  ['Why might a second feature earn nothing?', ['It repeats the first feature in different words', 'It is written in a separate, second paragraph', 'It includes a date or a number'], 0, 'Features must differ.'],
  ['Exam skill · Describe two features. Which pair is best?', ['Trench foot came from cold water; whale oil helped. Lice spread trench fever, proved in 1918.', 'Trench conditions were very bad. Many soldiers became ill while in the trenches.', 'Soldiers suffered from many illnesses, and some of them had to go to a hospital.'], 0, 'Two features, each supported.'],
  ['How long should this answer take?', ['About five or six minutes', 'About twenty minutes or more', 'About one minute'], 0, 'It is worth only four marks.'],
], [
  Q('sk4.p1', 'How many marks are the describe questions worth?', ['4', '8', '12'], 0, 'In Paper 1 Section A.', 'marks'),
  Q('sk4.p2', 'What earns the second mark for each feature?', ['A supporting detail', 'A second new feature', 'A personal opinion'], 0, 'It develops the feature.', 'marks'),
  Q('sk4.p3', 'How many features should you describe?', ['Two', 'One', 'Five'], 0, 'Each with detail.', 'technique'),
  Q('sk4.p4', 'Which skill do these questions test?', ['Knowledge', 'Source analysis', 'Interpretations'], 0, 'They target AO1, knowledge.', 'technique'),
  Q('sk4.p5', 'Which section of Paper 1 is the Western Front?', ['Section A', 'Section B', 'Booklet B'], 0, 'The historic environment.', 'marks'),
], [
  Q('sk4.c1', 'What is a common mistake?', ['Repeating the same feature', 'Adding a supporting detail', 'Writing two short paragraphs'], 0, 'Features must differ.', 'mistakes'),
  Q('sk4.c2', 'Do you need to explain causes here?', ['No', 'Yes, always', 'Only for 4 marks'], 0, 'Describe, not explain.', 'mistakes'),
  Q('sk4.c3', 'How long should each feature be?', ['Two or three sentences', 'A full side of paper', 'Just one single word'], 0, 'Enough for feature and detail.', 'structure'),
  Q('sk4.c4', 'What is a good supporting detail?', ['A specific date or fact', 'A general comment on it', 'A question to the reader'], 0, 'Precise support.', 'technique'),
  Q('sk4.c5', 'How many marks are in Section A in total?', ['16', '36', '52'], 0, 'Of Paper 1\'s 52.', 'marks'),
  Q('sk4.c6', 'What does a named feature alone earn?', ['One mark', 'Two marks', 'Four marks'], 0, 'Detail earns the second.', 'marks'),
  Q('sk4.c7', 'Which is a valid feature of the RAMC?', ['It provided stretcher bearers', 'It was a type of poison gas', 'It was a battle fought in 1916'], 0, 'With a detail added.', 'technique'),
  Q('sk4.c8', 'What should you avoid?', ['Writing far more than needed', 'Adding a supporting detail', 'Writing two short paragraphs'], 0, 'It wastes time for later questions.', 'timing'),
], {exam: 'Describe two features of the chain of evacuation on the Western Front. (4 marks)'}),

lesson(WF, 'skills.he-sources', 'Exam skills · Western Front: source utility (8) and follow-up (4)', ['11 HE skills'], [
  ['What the questions ask', 'The two-part source question uses two contemporary sources, at least one of them written. Part (a) asks how useful both sources are for a named enquiry. Part (b) asks how you could follow up one of the sources to find out more.'],
  ['Marking part (a)', 'Part (a) is worth 8 marks, in three levels. Higher levels judge each source\'s usefulness for the specific enquiry, using its content, its provenance (nature, origin and purpose) and your own knowledge of the context. Simply describing what the sources show stays in the lower levels.'],
  ['Marking part (b)', 'Part (b) is worth 4 marks, one for each step: a detail in the source you would follow up; a question you would ask; the type of source you would use; and how that source would help answer the question. Each step must link to the one before.'],
  ['Common mistakes', 'Saying a source is biased without explaining how that affects its use; ignoring the enquiry; judging only one source; and in part (b), naming a vague source such as "the internet" or "books".'],
], view.factors('Judging usefulness', [
  ['Content', 'what it shows that is relevant to the enquiry'],
  ['Provenance', 'who made it, when, why and for whom'],
  ['Context', 'does your knowledge support or challenge it?'],
  ['Judgement', 'how useful, for this enquiry, and why'],
]), [
  timingP1,
  view.people('The four follow-up steps', [
    ['Detail', 'pick something specific in the source'],
    ['Question', 'ask a question about it'],
    ['Source type', 'name a precise type, e.g. a hospital admission register'],
    ['How it helps', 'explain how it would answer the question'],
  ]),
  view.source('A question type to practise', 'Two sources: a nurse\'s diary describing a busy Casualty Clearing Station, and an official photograph of an ambulance train. The enquiry is the treatment of the wounded.', 'Judge each for the enquiry: the diary for detail of care in one place; the photograph for transport, but staged for official use.'),
], [
  ['Which sentence best uses provenance?', ['As a private diary, it may be frank about conditions, but it shows only one station.', 'The diary was written by a nurse during the First World War, in France.', 'The source is biased, so it cannot be useful for the enquiry at all.'], 0, 'Provenance linked to usefulness.'],
  ['Which follow-up source is precise enough?', ['The station\'s admission register for that month', 'Some history books about the war', 'Searching on the internet'], 0, 'Name a specific type.'],
  ['Exam skill · Source utility. Which judgement is strongest for an enquiry into gas attacks?', ['Useful for symptoms seen in one hospital, but it says little about how widespread gas was.', 'The source is useful because it is about gas and it was written during 1917.', 'The source is not useful because it was written by just one army doctor.'], 0, 'Judge for the enquiry.'],
  ['Why must part (b) steps link?', ['Each mark builds on the one before', 'The examiner likes long answers', 'There is no reason'], 0, 'A connected follow-up.'],
], [
  Q('sk5.p1', 'How many marks is the usefulness question worth?', ['8', '4', '16'], 0, 'That is part (a) of the question.', 'marks'),
  Q('sk5.p2', 'How many marks is the follow-up question worth?', ['4', '8', '12'], 0, 'That is part (b) of the question.', 'marks'),
  Q('sk5.p3', 'What is provenance?', ['Nature, origin and purpose', 'What the source actually shows', 'How long the source is'], 0, 'Who made it, when and why.', 'technique'),
  Q('sk5.p4', 'How many sources does part (a) use?', ['Two', 'One', 'Four'], 0, 'At least one written.', 'technique'),
  Q('sk5.p5', 'What must usefulness be judged against?', ['The named enquiry', 'Your own opinion', 'Its date alone'], 0, 'Useful for what?', 'technique'),
], [
  Q('sk5.c1', 'What is the first follow-up step?', ['A detail in the source', 'The type of source to use', 'A conclusion about the source'], 0, 'Then a question.', 'structure'),
  Q('sk5.c2', 'Which follow-up source is too vague?', ['"The internet"', '"RAMC war diaries"', '"A hospital register"'], 0, 'A follow-up source must be specific.', 'mistakes'),
  Q('sk5.c3', 'What is wrong with "the source is biased"?', ['It does not explain the effect on usefulness', 'It is far too long for an 8-mark answer', 'It uses the provenance of the source'], 0, 'Explain the impact.', 'mistakes'),
  Q('sk5.c4', 'What should you use alongside the sources?', ['Your own knowledge of the context', 'Scenes shown in modern war films', 'Guesses about who the author was'], 0, 'Context tests content.', 'technique'),
  Q('sk5.c5', 'How many levels does part (a) have?', ['Three', 'Seven', 'Five'], 0, 'Simple to developed judgement.', 'marks'),
  Q('sk5.c6', 'Roughly how long suits part (a)?', ['About 12 minutes', 'About 2 minutes', 'About 40 minutes'], 0, 'About a minute and a half per mark.', 'timing'),
  Q('sk5.c7', 'What is a common mistake in part (a)?', ['Judging only one source', 'Judging both sources', 'Using provenance'], 0, 'Both must be judged.', 'mistakes'),
  Q('sk5.c8', 'What does the last follow-up step explain?', ['How the source would help', 'Who wrote the question', 'The date'], 0, 'The fourth mark.', 'structure'),
], {exam: 'How useful are a nurse\'s diary and an official photograph for an enquiry into the treatment of the wounded on the Western Front? (8 marks) How could you follow up the diary to find out more about the treatment of the wounded? (4 marks)'}),

lesson(CW, 'skills.p4-consequences', 'Exam skills · Cold War: explain two consequences (8)', ['P4 skills'], [
  ['What the question asks', 'The first period-study question asks you to explain two consequences of an event, such as the Soviet invasion of Hungary or the building of the Berlin Wall. The specification says these questions focus on consequence.'],
  ['How it is marked', 'Each consequence is worth 4 marks, in two levels. The higher level needs a consequence that is explained, not just stated, with specific supporting knowledge showing how the event led to it.'],
  ['A method', 'Write two paragraphs, each starting with the consequence. Use linking phrases such as "this led to" or "as a result", and support each with specific detail. Choose two consequences that are clearly different, for example one for the superpowers and one for the people affected.'],
  ['Common mistakes', 'Describing the event instead of its results; giving causes instead of consequences; giving two consequences that are really the same; and writing a long story before reaching the point.'],
], view.factors('A consequence paragraph', [
  ['Consequence', 'what happened as a result'],
  ['Link', 'how the event caused it'],
  ['Evidence', 'specific dates, names and facts'],
  ['Different', 'the second consequence must be distinct'],
]), [
  timingP2,
  view.people('What examiners reward', [
    ['Consequence', 'a result, not a cause or a description'],
    ['Explanation', 'how the event led to it'],
    ['Knowledge', 'accurate, specific support'],
    ['Two distinct points', 'each worth 4 marks'],
  ]),
  view.source('A question type to practise', 'A question asks you to explain two consequences of the Cuban Missile Crisis.', 'For example: the hotline was set up in 1963 so leaders could talk directly; the Limited Test Ban Treaty followed in the same year.'),
], [
  ['Which sentence states a consequence?', ['As a result, a hotline was set up in 1963 so the leaders could talk directly.', 'The crisis began when U-2 planes photographed missile sites on Cuba.', 'Khrushchev placed missiles on Cuba because of the US missiles in Turkey.'], 0, 'A result, not a cause.'],
  ['Why should the two consequences be different?', ['Each must earn its own 4 marks', 'The second is always marked as wrong', 'The examiner reads only one'], 0, 'Two distinct points.'],
  ['Exam skill · Explain two consequences. Which paragraph reaches the higher level?', ['The Wall stopped the flow of refugees, so East Germany kept its skilled workers and survived.', 'The Berlin Wall was built in August 1961 by the communist government of East Germany.', 'Many people tried to cross the Berlin Wall, and some of them were shot and killed.'], 0, 'Consequence explained with support.'],
  ['What is a common mistake?', ['Explaining causes instead of results', 'Using linking phrases between points', 'Giving specific, accurate detail'], 0, 'Read the question.'],
], [
  Q('sk6.p1', 'How many marks is each consequence worth?', ['4', '8', '2'], 0, 'There are eight marks in total.', 'marks'),
  Q('sk6.p2', 'Which paper includes this question?', ['Paper 2', 'Paper 1', 'Paper 3'], 0, 'The period study.', 'marks'),
  Q('sk6.p3', 'Which concept does it focus on?', ['Consequence', 'Interpretation', 'Usefulness'], 0, 'As the specification says.', 'technique'),
  Q('sk6.p4', 'Which phrase helps show a consequence?', ['"This led to"', '"This was caused by"', '"Once upon a time"'], 0, 'It shows results.', 'structure'),
  Q('sk6.p5', 'What should each paragraph start with?', ['The consequence', 'The date of the event', 'A quotation'], 0, 'Put the point first.', 'structure'),
], [
  Q('sk6.c1', 'How many levels for each consequence?', ['Two', 'Four', 'One'], 0, 'Stated or explained.', 'marks'),
  Q('sk6.c2', 'What is wrong with describing the event?', ['It does not explain results', 'It is always far too short', 'It is always inaccurate'], 0, 'Focus on consequences.', 'mistakes'),
  Q('sk6.c3', 'Which is a consequence of the Hungarian Uprising?', ['Other satellites saw the West would not help', 'Imre Nagy became the new leader of Hungary', 'Students in Budapest protested in the streets'], 0, 'That is a result, not a cause.', 'technique'),
  Q('sk6.c4', 'How long is Paper 2?', ['1 hour 50 minutes', '1 hour 20 minutes', '1 hour 30 minutes'], 0, 'Paper 2 is out of 64 marks.', 'timing'),
  Q('sk6.c5', 'Roughly how long suits this 8-mark question?', ['About 12 minutes', 'About 30 minutes', 'About 2 minutes'], 0, 'About a minute and a half per mark.', 'timing'),
  Q('sk6.c6', 'What makes a consequence "explained"?', ['Showing how the event led to it', 'Writing it out in capital letters', 'Giving the date of the event only'], 0, 'The link matters.', 'technique'),
  Q('sk6.c7', 'How many marks are in the period study?', ['32', '16', '52'], 0, 'Half of Paper 2.', 'marks'),
  Q('sk6.c8', 'What is a common mistake?', ['Two consequences that are the same', 'Using linking phrases between ideas', 'Specific, accurate supporting detail'], 0, 'Make them distinct.', 'mistakes'),
], {exam: 'Explain two consequences of the Soviet invasion of Afghanistan in 1979. (8 marks)'}),

lesson(CW, 'skills.p4-narrative', 'Exam skills · Cold War: narrative account (8)', ['P4 skills'], [
  ['What the question asks', 'The second period-study question asks you to write a narrative account analysing a sequence of events, such as the key events of the Berlin Crisis of 1958–61. The specification says the account must not only describe what happened but analyse it, finding connections to explain why events unfolded as they did.'],
  ['How it is marked', 'It is worth 8 marks, in three levels. Higher levels need an account in the right order that links events together, showing how one led to the next, with accurate detail. Two stimulus points are given, and you must add information of your own.'],
  ['A method', 'Plan three or four key events in chronological order, including the two prompts and at least one of your own. Write a paragraph for each. Use linking phrases such as "this led to", "in response" and "as a result" to show how each event caused the next. Finish with the outcome.'],
  ['Common mistakes', 'Writing a list of events with no links; going out of order; stopping too early or going beyond the dates in the question; and judging which event was most important, which this question does not ask for.'],
], view.factors('A linked narrative', [
  ['Start', 'the first event and its context'],
  ['Link', 'how it led to the next event'],
  ['Develop', 'the next events, each connected'],
  ['Outcome', 'how the sequence ended'],
]), [
  timingP2,
  view.people('What examiners reward', [
    ['Sequence', 'events in a logical, chronological order'],
    ['Connections', 'how each event led to the next'],
    ['Knowledge', 'accurate detail, including your own'],
    ['Focus', 'within the dates of the question'],
  ]),
  view.source('A question type to practise', 'A question asks for a narrative account analysing the key events of the Cuban Missile Crisis in 1962, with prompts about the U-2 photographs and the blockade.', 'Link: photographs, the decision to blockade, the confrontation at sea, the secret deal and the withdrawal.'),
], [
  ['Which sentence links events?', ['In response to the photographs, Kennedy chose a naval blockade rather than an air strike.', 'Kennedy announced a naval blockade of Cuba on television on 22 October 1962.', 'U-2 spy planes photographed Soviet missile sites on Cuba in October 1962.'], 0, 'Links show causation.'],
  ['Why does order matter?', ['The account must show how events led from one to the next', 'Examiners only ever read the first paragraph', 'Dates do not matter at all in this question'], 0, 'Chronology supports analysis.'],
  ['Exam skill · Narrative account. Which plan is strongest?', ['Four events in order, two prompts and two of my own, linked by causes and results.', 'A list of every single event in the Cold War from 1945 right up to 1991.', 'A long paragraph on the most important event and why it mattered most of all.'], 0, 'Sequence, links, own knowledge.'],
  ['What does this question not ask for?', ['A judgement of which event mattered most', 'Events set out in chronological order', 'Links showing how one event led to another'], 0, 'Stay on the task set.'],
], [
  Q('sk7.p1', 'How many marks is the narrative account worth?', ['8', '4', '16'], 0, 'In the period study.', 'marks'),
  Q('sk7.p2', 'What must a narrative account do besides describe?', ['Analyse connections', 'Judge the importance', 'Evaluate the sources'], 0, 'As the specification says.', 'technique'),
  Q('sk7.p3', 'In what order should events go?', ['Chronological', 'Alphabetical', 'Random'], 0, 'Sequence matters.', 'structure'),
  Q('sk7.p4', 'How many stimulus points are given?', ['Two', 'None', 'Five'], 0, 'Add your own too.', 'technique'),
  Q('sk7.p5', 'Which phrase shows a link?', ['"In response"', '"Also, there"', '"The end of it"'], 0, 'It connects events.', 'structure'),
], [
  Q('sk7.c1', 'How many levels does the narrative have?', ['Three', 'Seven', 'Five'], 0, 'From list to linked account.', 'marks'),
  Q('sk7.c2', 'What is a common mistake?', ['A list with no links', 'Linking events', 'Chronological order'], 0, 'Connections matter.', 'mistakes'),
  Q('sk7.c3', 'What should the final paragraph show?', ['The outcome', 'A new topic', 'A source'], 0, 'It shows how the events ended.', 'structure'),
  Q('sk7.c4', 'What should you avoid going beyond?', ['The dates in the question', 'The length of one full page', 'The two stimulus points'], 0, 'Stay within the range.', 'mistakes'),
  Q('sk7.c5', 'How many events should you plan?', ['Three or four', 'Just one', 'Twenty or more'], 0, 'Including your own.', 'structure'),
  Q('sk7.c6', 'Roughly how long suits this question?', ['About 12 minutes', 'About 45 minutes', 'About 3 minutes'], 0, 'It is worth eight marks.', 'timing'),
  Q('sk7.c7', 'What concepts may a narrative involve?', ['Causation, consequence and change', 'Only the usefulness of sources', 'Only interpretations of events'], 0, 'A mix, as the specification says.', 'technique'),
  Q('sk7.c8', 'What must you add to the prompts?', ['Information of your own', 'Nothing else at all', 'Quotations from sources'], 0, 'Own knowledge is required.', 'technique'),
], {exam: 'Write a narrative account analysing the key events of the Berlin Crisis, 1958–61. You may use the Berlin ultimatum and the building of the Berlin Wall in your answer. You must also use information of your own. (8 marks)'}),

lesson(CW, 'skills.p4-importance', 'Exam skills · Cold War: explain the importance (8)', ['P4 skills'], [
  ['What the question asks', 'The third period-study question lists three events, people or developments and asks you to explain the importance of two of them for something, such as for relations between the superpowers. The specification says it focuses on the difference they made: their consequence and significance.'],
  ['How it is marked', 'Each part you choose is worth 8 marks, in three levels, so 16 in total. Higher levels explain how the event changed the situation named in the question, with accurate detail, rather than describing the event itself.'],
  ['A method', 'Choose the two you know best. For each, write two paragraphs: what difference it made in the short term, and what difference it made in the longer term, both tied to the focus of the question. Use phrases such as "this was important because" and "this changed relations by".'],
  ['Common mistakes', 'Describing the event without explaining its importance; ignoring the focus named in the question; answering all three parts; and spending too long on the first part.'],
], view.factors('Showing importance', [
  ['Situation before', 'what relations were like'],
  ['The event', 'brief, accurate detail'],
  ['Difference made', 'how it changed the situation'],
  ['Short and long term', 'immediate and later effects'],
]), [
  timingP2,
  view.people('What examiners reward', [
    ['Importance', 'what difference it made'],
    ['Focus', 'tied to the situation named in the question'],
    ['Knowledge', 'accurate, relevant detail'],
    ['Development', 'more than one effect explained'],
  ]),
  view.source('A question type to practise', 'A question asks you to explain the importance of two of: the Truman Doctrine; the Berlin Blockade; the Hungarian Uprising, for the development of the Cold War.', 'For each, explain how it changed relations, for example the Blockade leading to the creation of NATO and two German states.'),
], [
  ['Which sentence explains importance?', ['The Blockade was important because it led directly to NATO, dividing Europe into armed blocs.', 'The Berlin Blockade lasted from June 1948 until it was lifted in May 1949.', 'The airlift brought food and fuel into West Berlin by aeroplane every day.'], 0, 'Difference made.'],
  ['How many of the three parts should you answer?', ['Two', 'All three', 'One'], 0, 'Two out of three.'],
  ['Exam skill · Explain the importance. Which plan is strongest?', ['Two paragraphs each on short- and long-term effects on superpower relations.', 'A detailed description of each event in the order that it happened.', 'A short paragraph on each of the three listed events and why they happened.'], 0, 'Importance, not description.'],
  ['What is a common mistake?', ['Ignoring the focus named in the question', 'Explaining the short- and long-term effects', 'Choosing the parts that you know well'], 0, 'Importance for what?'],
], [
  Q('sk8.p1', 'How many marks is each importance part worth?', ['8', '4', '16'], 0, 'Sixteen for two parts.', 'marks'),
  Q('sk8.p2', 'How many parts do you choose?', ['Two of three', 'All three parts', 'One of the two'], 0, 'As the specification says.', 'technique'),
  Q('sk8.p3', 'What does importance mean here?', ['The difference something made', 'How long the event lasted', 'Who was present at the time'], 0, 'Consequence and significance.', 'technique'),
  Q('sk8.p4', 'What should your answer be tied to?', ['The focus named in the question', 'Your own opinion on the event', 'A different event in the Cold War'], 0, 'Importance for something.', 'technique'),
  Q('sk8.p5', 'Which phrase helps?', ['"This was important because"', '"This happened in the year"', '"Firstly, the date was"'], 0, 'It explains significance.', 'structure'),
], [
  Q('sk8.c1', 'How many levels for each part?', ['Three', 'Seven', 'Five'], 0, 'Description to explanation.', 'marks'),
  Q('sk8.c2', 'How many marks is the whole question?', ['16', '8', '32'], 0, 'Two parts worth 8 marks each.', 'marks'),
  Q('sk8.c3', 'Which part should you choose?', ['The ones you know best', 'The first two always', 'The hardest'], 0, 'Play to strengths.', 'technique'),
  Q('sk8.c4', 'What is a common mistake?', ['Describing without explaining importance', 'Explaining short- and long-term effects', 'Using accurate and specific detail'], 0, 'Show the difference made.', 'mistakes'),
  Q('sk8.c5', 'What two time frames help?', ['Short and long term', 'Morning and evening', 'Past and future tense'], 0, 'Develop the effects.', 'structure'),
  Q('sk8.c6', 'Roughly how long suits each part?', ['About 12 minutes', 'About 40 minutes', 'About 2 minutes'], 0, 'Eight marks each.', 'timing'),
  Q('sk8.c7', 'Which is an importance point about the Truman Doctrine?', ['It committed the USA to containment', 'It was announced by Truman in 1947', 'It was a speech made to Congress'], 0, 'The difference it made.', 'technique'),
  Q('sk8.c8', 'What happens if you answer all three parts?', ['Time is wasted', 'Extra marks are given', 'All three parts are marked'], 0, 'Only two parts count.', 'mistakes'),
], {exam: 'Explain the importance of two of the following for relations between the USA and the USSR: the Cuban Missile Crisis; the Prague Spring; the Soviet invasion of Afghanistan. (16 marks)'}),
];
