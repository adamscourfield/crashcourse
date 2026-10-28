// Pearson Edexcel GCSE (9–1) History 1HI0: exam-skill lessons for the Paper 2 British depth study (B4)
// and Paper 3 (option 31). Question types follow the specification's assessment information (Issue 6);
// mark bands follow Pearson's published mark schemes and must be checked against the current ones.
// All text is original; no past-paper questions, sources, interpretations or mark-scheme wording are reproduced.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const ELIZ = 'history.elizabeth.kt1';
const GER = 'history.germany.kt1';

const timingP2 = view.timeline('Planning time in Paper 2 (1 hour 50 minutes, 64 marks)', [
  ['Booklet P', 'Cold War: two consequences (8), narrative account (8), importance of two of three (16)'],
  ['About 55 minutes', 'A common guide for the period study'],
  ['Booklet B', 'Elizabethan England: describe features (4), explain why (12), one judgement question (16)'],
  ['About 55 minutes', 'A common guide for the British depth study'],
]);
const timingP3 = view.timeline('Planning time in Paper 3 (1 hour 30 minutes, 52 marks)', [
  ['Section A', 'Inference from a source (4); one explain-why question from a choice of two (12)'],
  ['About 25 minutes', 'A common guide for Section A'],
  ['Section B', 'Usefulness of two sources (8); how interpretations differ (4); why they differ (4); how far you agree (16 + 4 SPaG)'],
  ['About 60 minutes', 'A common guide for Section B, including time to read the sources and interpretations'],
]);

export const skillsLessons2 = [
lesson(ELIZ, 'skills.b4-describe-explain', 'Exam skills · Elizabethan England: describe one feature (2 + 2) and explain why (12)', ['B4 skills'], [
  ['What the questions ask', 'The British depth study begins with two short questions, 1(a) and 1(b), each asking you to describe one feature of something, such as the Elizabethan theatre; each is worth 2 marks. (Papers up to 2024 asked for two features of one topic for 4 marks.) Question 2 asks you to explain why something happened and focuses on causation. It is worth 12 marks and comes with two stimulus points.'],
  ['Describing features', 'In each part, one mark is for identifying a valid feature and one for supporting information that develops it, such as a date, a name or how it worked. One or two sentences per part are enough. Do not explain causes in these answers.'],
  ['Explaining why', 'The 12-mark question is marked in four levels (1–3, 4–6, 7–9, 10–12). Higher levels analyse how each reason caused the outcome, with accurate detail and a logical structure. Answers covering fewer than three aspects of content are capped at 8 marks, so add at least one point of your own beyond the two stimulus points.'],
  ['Common mistakes', 'Describing features at great length; repeating one feature in different words; in the 12-mark answer, telling the story of events without explaining their effect, or relying only on the stimulus points.'],
], view.factors('Two answer patterns', [
  ['Describe', 'feature + detail; feature + detail'],
  ['Explain: point', 'a reason linked to the question'],
  ['Explain: evidence', 'specific dates, names and events'],
  ['Explain: link', 'how the reason caused the outcome'],
]), [
  timingP2,
  view.people('What examiners reward', [
    ['Describe', 'one feature per part, each supported'],
    ['Explain', 'analysis of how causes worked'],
    ['Own knowledge', 'at least one reason beyond the stimulus'],
    ['Knowledge', 'accurate, relevant detail'],
  ]),
  view.source('A question type to practise', 'A question asks you to explain why there were plots against Elizabeth in the years 1569–87, with stimulus points about Mary, Queen of Scots, and the Pope\'s excommunication of Elizabeth.', 'Use both prompts and add a reason of your own, such as Spanish support for the plotters.'),
], [
  ['Which answer earns both marks for one feature?', ['Theatres such as the Globe were open-air, so plays were performed in daylight.', 'Theatres were very popular places for many people to visit in Elizabethan times.', 'There were theatres in London that people went to in the reign of Elizabeth.'], 0, 'A feature with a supporting detail.'],
  ['Why must a 12-mark answer use your own point?', ['Answers using only the stimulus points are penalised', 'The stimulus points are always factually wrong', 'Examiners do not read the stimulus points at all'], 0, 'The specification requires it.'],
  ['Exam skill · Explain why. Which sentence explains a cause?', ['The excommunication freed Catholics from obedience, so plotters felt justified in acting.', 'Pope Pius V excommunicated Elizabeth in 1570 by issuing an official papal bull.', 'Mary, Queen of Scots, fled from Scotland into England in the year 1568.'], 0, 'Explanation shows how the cause worked.'],
  ['What is wrong with explaining causes in the describe question?', ['It wastes time, as only features and details earn marks', 'It earns extra marks, so it should always be done', 'It is the only way to reach the top mark there'], 0, 'Answer the question asked.'],
], [
  Q('sk9.p1', 'How many marks are the describe questions worth in total?', ['4', '8', '12'], 0, 'One for each feature and one for each detail.', 'marks'),
  Q('sk9.p2', 'How many marks is the explain-why question worth?', ['12', '16', '8'], 0, 'It focuses on causation.', 'marks'),
  Q('sk9.p3', 'Which booklet contains the British depth study?', ['Booklet B', 'Booklet P', 'Section A'], 0, 'It is in Paper 2.', 'marks'),
  Q('sk9.p4', 'What earns the second mark for a feature?', ['A supporting detail', 'A second new feature', 'A personal opinion'], 0, 'It develops the feature.', 'technique'),
  Q('sk9.p5', 'How many stimulus points come with the 12-mark question?', ['Two', 'One', 'Four'], 0, 'You must add your own.', 'technique'),
], [
  Q('sk9.c1', 'Which concept does the 12-mark question focus on?', ['Causation', 'Usefulness of sources', 'Interpretations'], 0, 'As the specification says.', 'technique'),
  Q('sk9.c2', 'What is a common mistake in the 12-mark answer?', ['Telling the story without explaining', 'Explaining how causes worked', 'Using accurate supporting detail'], 0, 'Narrative is not analysis.', 'mistakes'),
  Q('sk9.c3', 'How many marks is Booklet B worth?', ['32', '16', '64'], 0, 'Half of Paper 2.', 'marks'),
  Q('sk9.c4', 'Roughly how long suits the 12-mark answer?', ['About 18 minutes', 'About 5 minutes', 'About 45 minutes'], 0, 'About a minute and a half per mark.', 'timing'),
  Q('sk9.c5', 'Which phrase links a cause to its effect?', ['"As a result"', '"Once upon a time"', '"In the year"'], 0, 'It shows how causes worked.', 'structure'),
  Q('sk9.c6', 'Is SPaG assessed in Paper 2?', ['No', 'Yes, in every question', 'Yes, in the describe question'], 0, 'SPaG marks are in Papers 1 and 3.', 'marks'),
  Q('sk9.c7', 'What should each of 1(a) and 1(b) describe?', ['One feature of its own topic', 'Two features of one topic', 'A cause of the event'], 0, 'Each part has its own topic.', 'technique'),
  Q('sk9.c8', 'How many reasons should a 12-mark plan include?', ['About three', 'Only one', 'At least eight'], 0, 'Including one of your own.', 'structure'),
], {exam: 'Explain why there were plots against Elizabeth in the years 1569–87. You may use Mary, Queen of Scots, and the papal bull of 1570 in your answer. You must also use information of your own. (12 marks)'}),

lesson(ELIZ, 'skills.b4-how-far', 'Exam skills · Elizabethan England: how far do you agree (16)', ['B4 skills'], [
  ['What the question asks', 'The last British depth study question gives a statement, such as a claim that religion was the main reason for war with Spain, and asks how far you agree. You answer one of two. The specification says it may focus on similarity, difference, change, continuity, causation, consequence or significance.'],
  ['How it is marked', 'It is worth 16 marks in four levels (1–4, 5–8, 9–12, 13–16); there are no SPaG marks in Paper 2. Within each level, one mark depends on the quality of your judgement and its criteria. Answers covering fewer than three aspects of content are capped at 11 marks, so add points of your own beyond the two stimulus points.'],
  ['A method', 'Plan quickly: one or two paragraphs supporting the statement, one or two challenging it, then a conclusion. In each paragraph explain how far that factor mattered. In the conclusion, decide how far you agree and give a reason, such as which factor made the others matter.'],
  ['Common mistakes', 'Writing only about the factor in the statement; describing events without judging; avoiding a clear conclusion; and choosing the question you know less about because it looks shorter.'],
], view.factors('Judgement in four moves', [
  ['Support', 'evidence for the statement'],
  ['Challenge', 'other factors and their weight'],
  ['Weigh', 'which mattered most, and why'],
  ['Conclude', 'how far you agree, with a reason'],
]), [
  timingP2,
  view.people('What examiners reward', [
    ['Judgement', 'a clear answer to "how far"'],
    ['Balance', 'the statement weighed against other factors'],
    ['Justification', 'a reason for the final judgement'],
    ['Own knowledge', 'points beyond the stimulus'],
  ]),
  view.source('A question type to practise', 'A question states that the main reason for the defeat of the Spanish Armada was English tactics, and asks how far you agree.', 'Weigh English tactics, such as the fireships, against Spanish mistakes, the weather and the design of the ships.'),
], [
  ['Which conclusion is strongest?', ['The weather mattered most, because the storms caused most of the Spanish losses after Gravelines.', 'Many different factors all helped to defeat the Spanish Armada in their own different ways.', 'I agree with the statement because English tactics were a very important part of the story.'], 0, 'A judgement with a reason.'],
  ['Why should you write about other factors?', ['To judge how far the statement is right', 'Because the named factor is always wrong', 'Because the question bans the named factor'], 0, 'Balance allows judgement.'],
  ['Exam skill · How far? Which paragraph opening shows judgement?', ['Spanish mistakes mattered, but less than the weather, because the storms caused most of the losses.', 'Spanish mistakes are another factor that played a part in the defeat of the Spanish Armada.', 'The Spanish commander, the Duke of Medina Sidonia, made several mistakes in the year 1588.'], 0, 'Weigh as you go.'],
  ['Are there SPaG marks in this question?', ['No, Paper 2 has no SPaG marks', 'Yes, four extra marks for SPaG', 'Yes, eight extra marks for SPaG'], 0, 'Unlike Papers 1 and 3.'],
], [
  Q('sk10.p1', 'How many marks is the B4 judgement question worth?', ['16', '12', '20'], 0, 'With no SPaG marks.', 'marks'),
  Q('sk10.p2', 'How many of the two judgement questions do you answer?', ['One', 'Both', 'Neither'], 0, 'A choice of two.', 'technique'),
  Q('sk10.p3', 'What must a conclusion include?', ['A judgement with a reason', 'A new piece of evidence', 'A repeat of the question'], 0, 'The judgement must be justified.', 'structure'),
  Q('sk10.p4', 'What should you add beyond the stimulus points?', ['Points of your own', 'Nothing else at all', 'A labelled diagram'], 0, 'Or be penalised.', 'technique'),
  Q('sk10.p5', 'Which concepts can the question focus on?', ['Change, causation or significance', 'Only the usefulness of sources', 'Only historians\' interpretations'], 0, 'As the specification lists.', 'technique'),
], [
  Q('sk10.c1', 'What is "sitting on the fence"?', ['Avoiding a clear judgement', 'Making a clear judgement', 'Using plenty of evidence'], 0, 'It limits the level.', 'mistakes'),
  Q('sk10.c2', 'What should each paragraph end with?', ['How far the factor mattered', 'A brand-new topic', 'A question to the reader'], 0, 'Judge as you go.', 'structure'),
  Q('sk10.c3', 'How should you choose between the two questions?', ['Pick the one you know best', 'Always pick the first one', 'Pick the one that looks shorter'], 0, 'Play to your strengths.', 'technique'),
  Q('sk10.c4', 'Roughly how long suits this question?', ['About 25 minutes', 'About 5 minutes', 'About 60 minutes'], 0, 'Including planning.', 'timing'),
  Q('sk10.c5', 'What is a common mistake?', ['Writing only about the named factor', 'Weighing factors against each other', 'Reaching a justified judgement'], 0, 'One-sided answers.', 'mistakes'),
  Q('sk10.c6', 'What is a criterion for judgement?', ['A reason one factor mattered more', 'A list of all of the key dates', 'A personal feeling about the topic'], 0, 'It justifies the decision.', 'structure'),
  Q('sk10.c7', 'When should you state your view?', ['Early, then argue it', 'Only in the last line', 'Never in the answer'], 0, 'Sustain the argument.', 'structure'),
  Q('sk10.c8', 'Which paper has no SPaG marks?', ['Paper 2', 'Paper 1', 'Paper 3'], 0, 'SPaG is in Papers 1 and 3.', 'marks'),
], {exam: '"The main reason for the defeat of the Spanish Armada was English tactics." How far do you agree? Explain your answer. You may use the fireships at Calais and the weather in your answer. You must also use information of your own. (16 marks)'}),

lesson(GER, 'skills.p3-inference', 'Exam skills · Paper 3: inference (4)', ['31 skills'], [
  ['What the question asks', 'Paper 3 opens with a source and asks you to give two things you can infer from it about a topic, such as attitudes to the Treaty of Versailles. An inference is something the source suggests but does not state directly. The specification says this question targets source analysis (AO3).'],
  ['How it is marked', 'It is worth 4 marks: for each of two inferences, one mark for a valid inference and one for a detail from the source that supports it. Copying or describing what the source says is not an inference.'],
  ['A method', 'For each inference, write one sentence beginning "This suggests that…", then quote or describe the specific detail in the source that supports it. Make the two inferences different. Keep it short: the question is worth only 4 marks.'],
  ['Common mistakes', 'Describing the source instead of inferring; giving two inferences that are really the same; using your own knowledge instead of the source; and writing a long analysis of the source\'s reliability, which this question does not ask for.'],
], view.factors('Inference + support, twice', [
  ['Inference 1', 'what the source suggests'],
  ['Support 1', 'the detail that shows it'],
  ['Inference 2', 'a different suggestion'],
  ['Support 2', 'the detail that shows it'],
]), [
  timingP3,
  view.people('What examiners reward', [
    ['Inference', 'a valid suggestion beyond the surface'],
    ['Support', 'a detail taken from the source'],
    ['Difference', 'two distinct inferences'],
    ['Brevity', 'no evaluation needed'],
  ]),
  view.source('A question type to practise', 'A cartoon from 1919 shows a German figure being forced to drink from a cup labelled with the treaty\'s terms.', 'Infer, for example, that the artist saw the treaty as forced on Germany, supported by the figure being held down.'),
], [
  ['Which is an inference rather than a description?', ['The artist believed Germany was being forced to accept the treaty.', 'The cartoon shows a figure drinking from a cup with words on it.', 'There are three people in the cartoon, standing around a table.'], 0, 'An inference goes beyond the surface.'],
  ['Why does reliability not matter here?', ['The question asks only what can be inferred', 'All Paper 3 sources are always reliable', 'Reliability is never assessed in Paper 3'], 0, 'Answer the question set.'],
  ['Exam skill · Inference. Which answer earns full marks for one inference?', ['It suggests many resented the treaty: the figure struggles while being held down.', 'The cartoon is about the Treaty of Versailles and it was drawn in 1919.', 'Germans hated the treaty because they lost land, colonies and their army.'], 0, 'Inference supported from the source.'],
  ['What is wrong with using only your own knowledge?', ['The support must come from the source itself', 'Own knowledge is always historically wrong', 'Examiners prefer answers without any facts'], 0, 'Source-based support.'],
], [
  Q('sk11.p1', 'How many marks is the inference question worth?', ['4', '8', '12'], 0, 'Two inferences, each supported.', 'marks'),
  Q('sk11.p2', 'How many inferences should you give?', ['Two', 'One', 'Five'], 0, 'Each with support.', 'technique'),
  Q('sk11.p3', 'What is an inference?', ['Something suggested, not stated', 'A direct quotation from the source', 'A date that is given in the source'], 0, 'Reading between the lines.', 'technique'),
  Q('sk11.p4', 'Where must supporting detail come from?', ['The source', 'Your textbook', 'The internet'], 0, 'Not own knowledge.', 'technique'),
  Q('sk11.p5', 'Which phrase helps start an inference?', ['"This suggests that"', '"The source was made"', '"In conclusion, it"'], 0, 'It signals an inference.', 'structure'),
], [
  Q('sk11.c1', 'Which assessment objective does this question target?', ['AO3, sources', 'AO4, interpretations', 'AO1, knowledge only'], 0, 'As the specification says.', 'marks'),
  Q('sk11.c2', 'What is a common mistake?', ['Describing instead of inferring', 'Supporting an inference', 'Giving two distinct inferences'], 0, 'Go beyond the surface.', 'mistakes'),
  Q('sk11.c3', 'How long is Paper 3?', ['1 hour 30 minutes', '1 hour 20 minutes', '1 hour 50 minutes'], 0, 'Paper 3 is out of 52 marks.', 'timing'),
  Q('sk11.c4', 'Roughly how long suits this question?', ['About six minutes', 'About thirty minutes', 'About one minute'], 0, 'It is worth 4 marks.', 'timing'),
  Q('sk11.c5', 'Should you judge the source\'s reliability here?', ['No', 'Yes, always', 'Only at length'], 0, 'It is not asked for here.', 'mistakes'),
  Q('sk11.c6', 'What earns the second mark for each inference?', ['Supporting detail from the source', 'A second, unrelated inference', 'A judgement on reliability'], 0, 'The support from the source.', 'marks'),
  Q('sk11.c7', 'Which section of Paper 3 is the inference question in?', ['Section A', 'Section B', 'Booklet P'], 0, 'The first question.', 'marks'),
  Q('sk11.c8', 'What should the two inferences be?', ['Different from each other', 'The same in other words', 'About different sources'], 0, 'Distinct points.', 'technique'),
], {exam: 'Give two things you can infer from a 1919 German cartoon about German attitudes to the Treaty of Versailles. (4 marks)'}),

lesson(GER, 'skills.p3-explain', 'Exam skills · Paper 3: explain why (12)', ['31 skills'], [
  ['What the question asks', 'The second Section A question offers a choice of two explain-why questions, for example on why the Nazis won support in 1929–32. You answer one. The specification says these questions focus on causation. Each is worth 12 marks and comes with two stimulus points.'],
  ['How it is marked', 'It is marked in four levels (1–3, 4–6, 7–9, 10–12). Higher levels analyse how each reason caused the outcome, with accurate, relevant detail, logically organised. Answers covering fewer than three aspects of content are capped at 8 marks, so add points of your own beyond the two stimulus points.'],
  ['A method', 'Choose the question you know best. Plan three reasons, including at least one of your own. Give each reason a paragraph: state it, support it with specific knowledge, then explain how it led to the outcome. Where you can, show how reasons connected, for example how the Depression made propaganda more effective.'],
  ['Common mistakes', 'Choosing the wrong question in a hurry; narrating events without explaining them; using only the stimulus points; and running out of time for Section B, which is worth far more marks.'],
], view.factors('Building a 12-mark answer', [
  ['Choose', 'the question you know best'],
  ['Plan', 'three reasons, one of your own'],
  ['Explain', 'point, evidence, how it caused the outcome'],
  ['Connect', 'show how reasons worked together'],
]), [
  timingP3,
  view.people('What examiners reward', [
    ['Analysis', 'how each cause led to the outcome'],
    ['Range', 'several reasons, including your own'],
    ['Knowledge', 'accurate, relevant detail'],
    ['Structure', 'a logical line of reasoning'],
  ]),
  view.source('A question type to practise', 'A question asks you to explain why Hitler was able to become Chancellor in January 1933, with stimulus points about the July 1932 election and Papen.', 'Use both and add a reason of your own, such as Schleicher\'s failure to win support.'),
], [
  ['How many of the two questions should you answer?', ['One', 'Both', 'Neither'], 0, 'A choice of two.'],
  ['Which sentence shows connections between reasons?', ['The Depression made people desperate, so Nazi propaganda promising work became far more persuasive.', 'The Depression began after the Wall Street Crash of October 1929 in New York City, USA.', 'Nazi propaganda was organised by Joseph Goebbels from the year 1930 onwards.'], 0, 'The causes are linked.'],
  ['Exam skill · Explain why. Which plan would score most highly?', ['Three explained reasons, one of my own, with links between them.', 'One long paragraph telling the story of the years 1929–33.', 'Two short paragraphs, one on each stimulus point, with dates.'], 0, 'Range, explanation and links.'],
  ['Why keep an eye on time here?', ['Section B is worth far more marks and needs time', 'Section A is marked only if it is very short', 'Examiners stop reading after ten minutes'], 0, 'Plan your time carefully.'],
], [
  Q('sk12.p1', 'How many marks is the Paper 3 explain-why question worth?', ['12', '4', '16'], 0, 'It is in Section A.', 'marks'),
  Q('sk12.p2', 'Which concept does it focus on?', ['Causation', 'Inference', 'Interpretation'], 0, 'As the specification says.', 'technique'),
  Q('sk12.p3', 'How many stimulus points are given?', ['Two', 'None', 'Four'], 0, 'Add your own too.', 'technique'),
  Q('sk12.p4', 'How many reasons should you plan?', ['About three', 'Only one', 'At least eight'], 0, 'Including one of your own.', 'structure'),
  Q('sk12.p5', 'What lifts an answer higher?', ['Showing how reasons connect', 'Writing in capital letters', 'Copying the stimulus points'], 0, 'Links show understanding.', 'technique'),
], [
  Q('sk12.c1', 'How many marks is Section A in total?', ['16', '36', '52'], 0, 'Inference plus explain why.', 'marks'),
  Q('sk12.c2', 'How many marks is Section B in total?', ['36', '16', '12'], 0, 'Including the 4 SPaG marks.', 'marks'),
  Q('sk12.c3', 'What is penalised?', ['Using only the stimulus points', 'Adding a reason of your own', 'Explaining how causes worked'], 0, 'As the specification says.', 'mistakes'),
  Q('sk12.c4', 'Roughly how long suits this question?', ['About 18 minutes', 'About 5 minutes', 'About 50 minutes'], 0, 'Leaving time for Section B.', 'timing'),
  Q('sk12.c5', 'What should you do first?', ['Choose the question you know best', 'Start writing straight away at once', 'Answer both of the two questions'], 0, 'Choose carefully.', 'technique'),
  Q('sk12.c6', 'What is a common mistake?', ['Narrating without explaining', 'Explaining how causes worked', 'Using specific, accurate detail'], 0, 'Story is not analysis.', 'mistakes'),
  Q('sk12.c7', 'What does each paragraph need?', ['Point, evidence and explanation', 'A quotation and then a date', 'A question and then an answer'], 0, 'The core pattern.', 'structure'),
  Q('sk12.c8', 'Is there an introduction needed?', ['No, start with a reason', 'Yes, a full page of it', 'Yes, two long paragraphs'], 0, 'Starting with a reason saves time.', 'structure'),
], {exam: 'Explain why the Nazis were able to increase their support in the years 1929–32. You may use the Depression and propaganda in your answer. You must also use information of your own. (12 marks)'}),

lesson(GER, 'skills.p3-sources', 'Exam skills · Paper 3: source utility (8)', ['31 skills'], [
  ['What the question asks', 'Section B begins with two contemporary sources, at least one of them written, and asks how useful they are for a specified enquiry, such as the attitudes of young people to the Hitler Youth. The specification says you must use your knowledge of the historical context.'],
  ['How it is marked', 'It is worth 8 marks, in three levels (1–2, 3–5, 6–8). The top level weighs how each source\'s provenance (nature, origin and purpose) affects the usefulness of its content for the specific enquiry. Contextual knowledge earns credit only when it is used to evaluate the sources, and general comments about provenance earn nothing unless tied to the content.'],
  ['A method', 'Write one paragraph per source. For each, say what it shows that is useful for the enquiry, then use provenance (who made it, when and why) to explain how that affects its usefulness, and test it with your own knowledge. End each paragraph with a judgement on how useful the source is.'],
  ['Common mistakes', 'Saying a source is biased and therefore useless; ignoring the enquiry; judging only one source; and writing about reliability in general instead of usefulness for the enquiry.'],
], view.factors('Usefulness for an enquiry', [
  ['Content', 'what it shows that is relevant'],
  ['Provenance', 'nature, origin, purpose'],
  ['Context', 'does your knowledge support it?'],
  ['Judgement', 'how useful, and why'],
]), [
  timingP3,
  view.people('What examiners reward', [
    ['Focus', 'usefulness for the specific enquiry'],
    ['Provenance', 'explained, not just named'],
    ['Context', 'own knowledge used to test the content'],
    ['Both sources', 'each judged'],
  ]),
  view.source('A question type to practise', 'Two sources: a Hitler Youth poster inviting boys to join, and a later memoir by a former member describing boredom with drill. The enquiry is young people\'s attitudes to the Hitler Youth.', 'Judge the poster for the regime\'s aims (not attitudes) and the memoir for one person\'s experience (written later, with hindsight).'),
], [
  ['Which sentence uses provenance well?', ['As propaganda, the poster shows what the regime wanted, not how boys really felt.', 'The poster was produced by the Nazi Party in the year 1936 to recruit boys.', 'The poster is biased, so it cannot be at all useful for this enquiry.'], 0, 'Provenance linked to usefulness.'],
  ['Why can a biased source still be useful?', ['It can show the views or aims of the person who made it', 'Biased sources always contain completely accurate facts', 'Examiners give extra marks for every biased source'], 0, 'Useful for something.'],
  ['Exam skill · Source utility. Which judgement is strongest?', ['The memoir is useful for one boy\'s boredom, but hindsight and one view limit how far it shows wider attitudes.', 'The memoir is useful because it is about the Hitler Youth and it was written by a former member.', 'The memoir is not useful at all, because it was written many years after the events it describes.'], 0, 'A balanced, focused judgement.'],
  ['What should end each paragraph?', ['A judgement on how useful the source is', 'A summary of everything the source says', 'A new source for further research'], 0, 'Judge, don\'t describe.'],
], [
  Q('sk13.p1', 'How many marks is the Paper 3 utility question worth?', ['8', '4', '16'], 0, 'It is question 3(a).', 'marks'),
  Q('sk13.p2', 'How many sources does it use?', ['Two', 'One', 'Four'], 0, 'At least one written.', 'technique'),
  Q('sk13.p3', 'What does provenance include?', ['Nature, origin and purpose', 'Only the date of the source', 'Only the length of the source'], 0, 'Who made it, when and why.', 'technique'),
  Q('sk13.p4', 'What must usefulness be judged for?', ['The specified enquiry', 'Any enquiry you choose', 'Your own interests'], 0, 'Useful for what?', 'technique'),
  Q('sk13.p5', 'What else must you use?', ['Contextual knowledge', 'A historian\'s view', 'A third source'], 0, 'As the specification says.', 'technique'),
], [
  Q('sk13.c1', 'How many levels does the utility question have?', ['Three', 'Seven', 'Five'], 0, 'Description to judgement.', 'marks'),
  Q('sk13.c2', 'What is a common mistake?', ['Calling a source useless because biased', 'Judging both of the sources in turn', 'Using provenance to explain usefulness'], 0, 'Bias can be useful.', 'mistakes'),
  Q('sk13.c3', 'Roughly how long suits this question?', ['About 12 minutes', 'About 3 minutes', 'About 40 minutes'], 0, 'It is worth eight marks.', 'timing'),
  Q('sk13.c4', 'What can a propaganda poster be useful for?', ['The regime\'s aims', 'Private feelings', 'Exact statistics'], 0, 'What it was meant to do.', 'technique'),
  Q('sk13.c5', 'What limits a memoir written decades later?', ['Hindsight', 'Its length', 'Its handwriting'], 0, 'Memory changes over time.', 'technique'),
  Q('sk13.c6', 'Which skill does this question target?', ['AO3, sources', 'AO4, interpretations', 'AO1 alone'], 0, 'Source evaluation.', 'marks'),
  Q('sk13.c7', 'How many paragraphs suit two sources?', ['One per source, or more', 'One for both together', 'None at all'], 0, 'Judge each source in turn.', 'structure'),
  Q('sk13.c8', 'What is wrong with judging only one source?', ['Both must be judged', 'Nothing at all', 'It earns extra marks'], 0, 'The question asks about both.', 'mistakes'),
], {exam: 'How useful are a Hitler Youth recruitment poster and a former member\'s memoir for an enquiry into young people\'s attitudes to the Hitler Youth? (8 marks)'}),

lesson(GER, 'skills.p3-interpretations', 'Exam skills · Paper 3: how and why interpretations differ (4 + 4)', ['31 skills'], [
  ['What an interpretation is', 'An interpretation is a later account of the past, usually by a historian, such as a view of how far Germans supported the Nazis. Paper 3 gives two interpretations. The specification says question 3(b) asks how they differ and 3(c) asks why they might differ.'],
  ['How they differ (4)', 'Question 3(b) is worth 4 marks, in two levels (1–2 and 3–4). The top level identifies a key difference in the main views of the two interpretations, supported by detail from both. Surface differences, or a difference asserted without support, stay in the lower level.'],
  ['Why they differ (4)', 'Question 3(c) is worth 4 marks, in two levels (1–2 and 3–4). Good answers explain one reason for the difference: the historians may have given weight to different sources (you can show that each of the two sources in the paper supports a different interpretation), taken a different perspective, or put a different emphasis on the topic. Saying one historian is simply biased or wrong is weak.'],
  ['Common mistakes', 'Saying which interpretation is right (that is for 3(d)); comparing the sources instead of the interpretations; listing minor differences; and explaining why historians differ in general without linking to these two.'],
], view.factors('Two short answers', [
  ['3(b) How', 'state the main difference in view'],
  ['3(b) Support', 'detail from each interpretation'],
  ['3(c) Why', 'different evidence, focus or emphasis'],
  ['3(c) Link', 'tie the reason to these interpretations'],
]), [
  timingP3,
  view.people('Reasons interpretations may differ', [
    ['Evidence', 'different sources, such as Gestapo files or reports of public mood'],
    ['Focus', 'different groups, places or periods'],
    ['Emphasis', 'different weight on the same evidence'],
    ['Question', 'historians asking different questions'],
  ]),
  view.source('A question type to practise', 'Interpretation 1 argues that most Germans supported the Nazis because of jobs and national pride. Interpretation 2 argues that terror and fear kept Germans obedient.', '3(b): consent versus fear. 3(c): the first may rest on evidence of popularity, the second on police and camp records.'),
], [
  ['Which states the main difference best?', ['Interpretation 1 says Germans consented; Interpretation 2 says they obeyed out of fear.', 'Interpretation 1 is longer and uses more dates than Interpretation 2 does.', 'Interpretation 2 mentions the Gestapo while Interpretation 1 does not do so.'], 0, 'A difference in the overall view.'],
  ['Which is a strong reason for a difference?', ['The historians may have relied on different kinds of evidence', 'One of the historians must simply be lying about the past', 'One interpretation was printed in a different font size'], 0, 'Evidence shapes views.'],
  ['Exam skill · Interpretations. Which 3(c) answer is strongest?', ['They differ because the first draws on reports of popularity, while the second rests on Gestapo records.', 'They differ because historians often disagree with each other about a great many things.', 'They differ because one of the two historians is right and the other one is wrong.'], 0, 'A specific reason linked to these two.'],
  ['Where should you judge which view is more convincing?', ['In question 3(d), not 3(b) or 3(c)', 'In every single part of question 3', 'Nowhere at all in the whole paper'], 0, 'Stick to the question.'],
], [
  Q('sk14.p1', 'How many marks is "how they differ" worth?', ['4', '8', '16'], 0, 'It is question 3(b).', 'marks'),
  Q('sk14.p2', 'How many marks is "why they differ" worth?', ['4', '12', '2'], 0, 'It is question 3(c).', 'marks'),
  Q('sk14.p3', 'What is an interpretation?', ['A later account of the past', 'A source from the time itself', 'A list of the key dates'], 0, 'Usually by a historian.', 'technique'),
  Q('sk14.p4', 'Which assessment objective do 3(b) and 3(c) target?', ['AO4, interpretations', 'AO3, using sources', 'AO1, knowledge'], 0, 'As the specification says.', 'marks'),
  Q('sk14.p5', 'What can help explain why views differ?', ['The two sources in the paper', 'A favourite film about it', 'The exam timetable'], 0, 'Different evidence.', 'technique'),
], [
  Q('sk14.c1', 'What is weak in 3(c)?', ['"One historian is biased"', '"They used different evidence"', '"They focused on different groups"'], 0, 'It is too simple a reason.', 'mistakes'),
  Q('sk14.c2', 'What should 3(b) identify?', ['The main difference in view', 'Every small difference in wording', 'Which of the two is correct'], 0, 'The overall views.', 'technique'),
  Q('sk14.c3', 'What is a common mistake in 3(b)?', ['Comparing the sources instead', 'Comparing the interpretations', 'Using detail from both'], 0, 'Read the question.', 'mistakes'),
  Q('sk14.c4', 'Roughly how long suits each part?', ['About six minutes', 'About thirty minutes', 'About one minute'], 0, 'Four marks each.', 'timing'),
  Q('sk14.c5', 'Which is a valid reason for difference?', ['Different emphasis on the same evidence', 'Different styles of handwriting in them', 'Different page numbers in the paper'], 0, 'Weighting evidence.', 'technique'),
  Q('sk14.c6', 'How many interpretations does Paper 3 give?', ['Two', 'One', 'Four'], 0, 'Used in 3(b)–(d).', 'technique'),
  Q('sk14.c7', 'Where do you judge which view is better?', ['Question 3(d)', 'Question 3(b)', 'Question 1'], 0, 'The 16-mark part.', 'structure'),
  Q('sk14.c8', 'What must a 3(b) difference be supported by?', ['Detail from both interpretations', 'Your own opinion on the topic', 'A date taken from a source'], 0, 'Evidence from each.', 'technique'),
], {exam: 'Explain what is the main difference between two interpretations of how far Germans supported the Nazi regime. Use details from both interpretations to support your answer. Suggest one reason why the interpretations give different views. (4 marks)'}),

lesson(GER, 'skills.p3-judgement', 'Exam skills · Paper 3: how far do you agree with the interpretation (16 + 4)', ['31 skills'], [
  ['What the question asks', 'The final question asks how far you agree with one of the two interpretations. The specification says you must evaluate it using the other interpretation and your own knowledge of the historical context.'],
  ['How it is marked', 'It is worth 16 marks in four levels (1–4, 5–8, 9–12, 13–16), plus up to 4 for spelling, punctuation, grammar and specialist terms. Higher levels evaluate the named interpretation by testing its claims against your knowledge and the other interpretation, and reach a substantiated judgement. Contextual knowledge earns credit only when it is used to evaluate the interpretations; summarising them without evaluating is held to the lowest marks.'],
  ['A method', 'State how far you agree at the start. Write two or three paragraphs: test the interpretation\'s main claim with knowledge that supports it, then with knowledge and the other interpretation that challenge it. Finish with a judgement that explains why you find it more or less convincing.'],
  ['Common mistakes', 'Summarising both interpretations without evaluating; writing about the sources instead of the interpretations; agreeing or disagreeing without evidence; and leaving too little time for this, the largest question on the paper.'],
], view.factors('Evaluating an interpretation', [
  ['Claim', 'what the interpretation argues'],
  ['Support', 'knowledge that backs it'],
  ['Challenge', 'knowledge and the other interpretation against it'],
  ['Judge', 'how far you agree, and why'],
]), [
  timingP3,
  view.people('What examiners reward', [
    ['Evaluation', 'testing the interpretation, not summarising it'],
    ['Both', 'the other interpretation and own knowledge used'],
    ['Judgement', 'a clear, justified view on how far'],
    ['SPaG', 'accurate spelling, punctuation, grammar and terms'],
  ]),
  view.source('A question type to practise', 'Interpretation 2 argues that terror and fear kept Germans obedient. You are asked how far you agree with it, using Interpretation 1, which stresses popular support.', 'Support with the Gestapo and camps; challenge with jobs, national pride and the Hitler myth; then judge.'),
], [
  ['Which opening states a clear view?', ['I agree only partly: fear mattered, but many Germans also supported the regime for real benefits.', 'Interpretation 2 is about how the Nazis controlled the German people in the 1930s.', 'There are two interpretations and they both say different things about Nazi Germany.'], 0, 'State how far early.'],
  ['What must you use besides your own knowledge?', ['The other interpretation', 'A third, unseen source', 'A modern film about it'], 0, 'As the specification says.'],
  ['Exam skill · Interpretation judgement. Which paragraph evaluates rather than summarises?', ['The Gestapo had only 30,000 officers, so fear relied on informers; this supports Interpretation 2 only partly.', 'Interpretation 2 says that Germans were very afraid of the Gestapo and the concentration camps.', 'Interpretation 1 says that many Germans supported the Nazis because of jobs and national pride.'], 0, 'Test the claim with knowledge.'],
  ['What are the 4 extra marks for?', ['Spelling, punctuation, grammar and terms', 'Answering a second question as well', 'Drawing a clear diagram'], 0, 'These are the SPaG marks.'],
], [
  Q('sk15.p1', 'How many marks is the final question worth?', ['16 plus 4 for SPaG', '12 with no SPaG', '8 plus 4 for SPaG'], 0, 'The largest on Paper 3.', 'marks'),
  Q('sk15.p2', 'What must you evaluate?', ['The named interpretation', 'Both of the sources', 'The wording of the question'], 0, 'Using the other one too.', 'technique'),
  Q('sk15.p3', 'What should your conclusion include?', ['A justified judgement', 'A list of dates', 'A new interpretation'], 0, 'How far, and why.', 'structure'),
  Q('sk15.p4', 'When should you state your view?', ['At the start', 'Only at the very end', 'Never'], 0, 'Then argue it throughout.', 'structure'),
  Q('sk15.p5', 'Which assessment objective does it target?', ['AO4, interpretations', 'AO3, using sources', 'AO1 on its own'], 0, 'As the specification says.', 'marks'),
], [
  Q('sk15.c1', 'What is a common mistake?', ['Summarising without evaluating', 'Testing claims with evidence', 'Reaching a judgement'], 0, 'Evaluate, don\'t describe.', 'mistakes'),
  Q('sk15.c2', 'How is the other interpretation used?', ['To challenge or support the named one', 'It should be ignored completely', 'It should only be quoted at length'], 0, 'As evidence in the argument.', 'technique'),
  Q('sk15.c3', 'Roughly how long suits this question?', ['About 25–30 minutes', 'About 5 or 6 minutes', 'About 70–75 minutes'], 0, 'Leave enough time.', 'timing'),
  Q('sk15.c4', 'Which papers have SPaG marks?', ['Papers 1 and 3', 'Paper 2 only', 'All three papers'], 0, 'Four marks each.', 'marks'),
  Q('sk15.c5', 'What is wrong with writing about the sources here?', ['The question is about the interpretations', 'The sources are always factually wrong', 'There is nothing wrong with doing so'], 0, 'Stay on the task set.', 'mistakes'),
  Q('sk15.c6', 'What does "evaluate" mean here?', ['Test how convincing it is', 'Copy it out word for word', 'Count up all of its words'], 0, 'Judge with evidence.', 'technique'),
  Q('sk15.c7', 'What supports a judgement best?', ['Specific contextual knowledge', 'A strong personal feeling', 'The overall length of the answer'], 0, 'Evidence supports judgement.', 'technique'),
  Q('sk15.c8', 'How many paragraphs suit the argument?', ['Two or three, then a conclusion', 'Just one short sentence', 'Ten short lines of bullet notes'], 0, 'Support, challenge, judge.', 'structure'),
], {exam: 'How far do you agree with the interpretation that terror and fear were the main reasons Germans obeyed the Nazi regime? Explain your answer, using both interpretations and your knowledge of the historical context. (16 marks)'}),
];
