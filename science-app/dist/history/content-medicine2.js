// Pearson Edexcel GCSE (9–1) History 1HI0, Option 11: Medicine in Britain, c1250–present.
// Key topic 2: c1500–c1700, the Medical Renaissance in England (specification 2.1–2.3).
// All teaching text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

export const medicineTopic2 = {id: 'history.medicine.kt2', unit: '11', title: 'c1500–c1700: The Medical Renaissance in England', paper: 'Paper 1 · Thematic study'};
const T = medicineTopic2.id;

export const medicineLessons2 = [
lesson(T, 'medicine.renaissance-ideas', 'Renaissance ideas: Sydenham, printing and the Royal Society', ['11 2.1'], [
  ['Continuity in ideas', 'Most people still believed in the Four Humours and miasma, and many still saw disease as God\'s will. But religious explanations became less dominant: after the Reformation the Church lost its control of learning, and more people looked for natural causes.'],
  ['Thomas Sydenham', 'Sydenham (1624–89), sometimes called the "English Hippocrates", stressed careful observation of patients\' symptoms rather than relying on old books. He treated diseases as separate conditions with their own patterns, and helped tell apart illnesses such as measles and scarlet fever. This improved diagnosis, though he still used humoral treatments.'],
  ['The printing press', 'Printing reached England in 1476. By the 1500s and 1600s, books could be copied quickly and accurately, so new ideas and detailed drawings spread across Europe, and it was harder for any single authority to control what physicians read.'],
  ['The Royal Society', 'Founded in 1660 and given a royal charter by Charles II, the Royal Society brought together scientists who believed in experiment and observation. From 1665 it published a journal, Philosophical Transactions, which shared new discoveries. Its members were interested in many sciences, so its impact on everyday medicine was slow.'],
], view.factors('What encouraged new ideas?', [
  ['Individuals', 'Sydenham\'s observation; Harvey\'s experiments'],
  ['Science and technology', 'printing spread ideas; better instruments'],
  ['Institutions', 'the Royal Society encouraged experiments; the Church lost control of learning'],
  ['Attitudes', 'more willingness to question ancient authorities'],
]), [
  view.timeline('A changing climate of ideas', [
    ['1476', 'Caxton sets up the first printing press in England'],
    ['1530s', 'The Reformation; the Church loses control of learning'],
    ['1543', 'Vesalius publishes his book on anatomy'],
    ['1660', 'The Royal Society founded'],
    ['1665', 'Philosophical Transactions first published'],
    ['1676', 'Sydenham publishes his observations on diseases'],
  ]),
  view.people('People and institutions', [
    ['Thomas Sydenham', 'Physician who based diagnosis on observing symptoms'],
    ['William Caxton', 'Brought printing to England in 1476'],
    ['The Royal Society', 'Promoted experiment and shared discoveries'],
    ['Charles II', 'Gave the Royal Society its charter'],
  ]),
  view.source('A source type: an article in Philosophical Transactions', 'A report of an experiment or observation written by a scientist for the Royal Society\'s journal.', 'Shows what scientists were testing and sharing; it reflects an educated minority, not what ordinary doctors did.'),
], [
  ['Why was Sydenham\'s approach important?', ['He based diagnosis on observing symptoms rather than ancient books', 'He discovered that germs cause disease and invented vaccination', 'He proved that the Four Humours did not exist in any form at all'], 0, 'Observation was the new element.'],
  ['How did printing help medicine?', ['New ideas and accurate drawings spread quickly across Europe', 'Printing presses were used to sterilise surgical instruments', 'It allowed the Church to stop new ideas from spreading at all'], 0, 'Copies no longer had to be made by hand.'],
  ['Exam skill · Explain a difference. Which explains a difference in ideas from the medieval period?', ['The Church no longer controlled learning, so natural explanations of disease spread more widely.', 'People in the 1600s still believed in the Four Humours and miasma, just as before.', 'Thomas Sydenham lived from 1624 to 1689 and was later known as the English Hippocrates.'], 0, 'A difference contrasts the two periods and explains why.'],
  ['Why was the Royal Society\'s effect on everyday medicine slow?', ['Its members studied many sciences, and ordinary doctors kept their old methods', 'It was banned by Charles II soon after it was founded in 1660 by scientists', 'It refused to publish any work at all on medicine or on the human body'], 0, 'New ideas took time to change practice.'],
], [
  Q('med4.p1', 'Who was called the "English Hippocrates"?', ['Thomas Sydenham', 'William Harvey', 'Edward Jenner'], 0, 'He stressed observation like Hippocrates.', 'sydenham'),
  Q('med4.p2', 'When was the Royal Society founded?', ['1660', '1476', '1543'], 0, 'Charles II gave it a royal charter.', 'royal-society'),
  Q('med4.p3', 'When did printing reach England?', ['1476', '1348', '1665'], 0, 'William Caxton set up a press in London.', 'printing'),
  Q('med4.p4', 'What did the Royal Society publish from 1665?', ['Philosophical Transactions', 'The Book of Common Prayer', 'The Bills of Mortality'], 0, 'It shared scientific discoveries.', 'royal-society'),
  Q('med4.p5', 'Which belief about disease continued in this period?', ['The Four Humours', 'Germ theory of disease', 'Genetic causes of illness'], 0, 'Humoral ideas lasted into the 1700s.', 'continuity'),
], [
  Q('med4.c1', 'What did Sydenham emphasise?', ['Careful observation of symptoms', 'Prayer and pilgrimage to holy shrines', 'Astrology and the position of the planets'], 0, 'This improved diagnosis.', 'sydenham'),
  Q('med4.c2', 'Which diseases did Sydenham help tell apart?', ['Measles and scarlet fever', 'Cholera and typhoid', 'Plague and smallpox only'], 0, 'He treated diseases as distinct conditions.', 'sydenham'),
  Q('med4.c3', 'Why did the Church lose control of medical learning?', ['The Reformation weakened its authority', 'The Pope banned the study of medicine', 'Parliament closed all the universities in England'], 0, 'Learning became more independent.', 'church'),
  Q('med4.c4', 'What did the Royal Society encourage?', ['Experiment and observation', 'Reliance on the books of Galen alone', 'Religious explanations of disease'], 0, 'It valued evidence.', 'royal-society'),
  Q('med4.c5', 'How did printing change the spread of ideas?', ['Accurate copies could be made quickly', 'It made books far more expensive to buy', 'It limited all books to Latin for scholars'], 0, 'Ideas travelled faster.', 'printing'),
  Q('med4.c6', 'Who gave the Royal Society its charter?', ['Charles II', 'Henry VIII', 'Elizabeth I'], 0, 'The charter was granted in 1662.', 'royal-society'),
  Q('med4.c7', 'Which factor most helped new ideas spread?', ['Science and technology, especially printing', 'The growing power of the Church over learning', 'Government public-health laws passed by Parliament'], 0, 'Printing was crucial.', 'printing'),
  Q('med4.c8', 'What did Sydenham still use in treatment?', ['Humoral treatments such as bloodletting', 'Antibiotics made from penicillin mould', 'Vaccination with cowpox against smallpox'], 0, 'Change in treatment was limited.', 'continuity'),
], {exam: 'Explain why there was progress in ideas about the causes of disease in the period c1500–c1700. (12 marks)'}),

lesson(T, 'medicine.renaissance-care', 'Treatment, care and training, c1500–c1700', ['11 2.2'], [
  ['Continuity in treatment', 'Treatments changed little. Bloodletting and purging continued, people used herbal remedies, and remedies such as transference (rubbing an illness onto an object or animal) were common. New ingredients arrived from the Americas and Asia, but treatment was still based on old ideas.'],
  ['Care in the community and hospitals', 'Most care was still at home, often by women. When Henry VIII closed the monasteries in the 1530s, most Church hospitals closed too. Some, such as St Bartholomew\'s and St Thomas\'s in London, were refounded with charitable money, and they began to employ physicians and treat patients rather than only care for them. Pest houses isolated people with infectious diseases.'],
  ['Andreas Vesalius', 'Vesalius, a Flemish doctor, dissected human bodies himself and published a detailed, illustrated book of anatomy in 1543. He showed that Galen had made mistakes, often because Galen had dissected animals rather than humans. Printing spread his accurate drawings across Europe, including to England.'],
  ['Training', 'Physicians still studied Galen, but anatomy based on dissection became more important. The College of Physicians (founded 1518) licensed physicians in London, and surgeons were allowed a small number of bodies of executed criminals each year for dissection. Training improved slowly, but treatment did not change much as a result.'],
], view.factors('Change and continuity, c1500–c1700', [
  ['Changed', 'anatomy based on dissection; some hospitals treat patients; better knowledge spread by printing'],
  ['Stayed the same', 'bloodletting, purging and herbal remedies; most care at home'],
  ['Why change was limited', 'new knowledge of the body did not explain what caused disease'],
]), [
  view.timeline('Care and training', [
    ['1518', 'College of Physicians founded'],
    ['1536–41', 'Monasteries and most Church hospitals closed'],
    ['1543', 'Vesalius publishes his book of anatomy'],
    ['1540s–50s', 'St Bartholomew\'s and St Thomas\'s refounded with charitable funding'],
  ]),
  view.people('People', [
    ['Andreas Vesalius', 'Anatomist who corrected Galen through human dissection'],
    ['Henry VIII', 'Closed the monasteries and with them most hospitals'],
    ['Physicians', 'Licensed by the College of Physicians in London'],
    ['Women at home', 'Still provided most everyday care'],
  ]),
  view.source('A source type: an anatomical illustration', 'A detailed printed drawing of the human body, such as those in Vesalius\'s 1543 book, made from dissections.', 'Strong evidence of new anatomical knowledge; it shows what was known, not whether doctors used it to treat patients.'),
], [
  ['Why did Vesalius find mistakes in Galen?', ['Galen had dissected animals, while Vesalius dissected human bodies', 'Vesalius used a microscope to see germs that Galen could not see', 'Galen\'s books had been lost, so Vesalius rewrote them from memory'], 0, 'Direct observation of humans corrected errors.'],
  ['What happened to care after the monasteries closed?', ['Most Church hospitals closed, and some were refounded with charity money', 'The government built a hospital in every town to replace them', 'Hospitals were moved into the new grammar schools being founded across England'], 0, 'Care became less dependent on the Church.'],
  ['Exam skill · Explain why. Which explains why treatment changed little?', ['Better anatomy did not explain what caused disease, so doctors kept using old treatments.', 'Bloodletting, purging and herbal remedies were all still used in the 1500s and 1600s.', 'Vesalius published a book with detailed drawings of human anatomy in the year 1543.'], 0, 'Explanation links cause and effect.'],
  ['What was a pest house?', ['A building for isolating people with infectious diseases', 'A shop that sold herbal remedies and plague water to the public', 'A place where physicians and surgeons studied human dissection'], 0, 'Isolation was a growing response.'],
], [
  Q('med5.p1', 'Who published a detailed book of human anatomy in 1543?', ['Andreas Vesalius', 'William Harvey', 'Galen of Pergamum'], 0, 'He corrected Galen\'s errors.', 'vesalius'),
  Q('med5.p2', 'What happened to most hospitals in the 1530s?', ['They closed with the monasteries', 'They became free for all patients', 'They were taken over by the army'], 0, 'Henry VIII dissolved the monasteries.', 'hospitals'),
  Q('med5.p3', 'What was transference?', ['Rubbing an illness onto an object or animal', 'Moving patients between different hospitals', 'Giving blood from one person to another person'], 0, 'It was a folk remedy.', 'treatment'),
  Q('med5.p4', 'When was the College of Physicians founded?', ['1518', '1660', '1348'], 0, 'It licensed physicians in London.', 'training'),
  Q('med5.p5', 'Which London hospitals were refounded with charitable money?', ['St Bartholomew\'s and St Thomas\'s', 'Guy\'s and the London', 'The Royal Free and Charing Cross'], 0, 'They began treating patients.', 'hospitals'),
], [
  Q('med5.c1', 'Why did Galen make mistakes about human anatomy?', ['He dissected animals rather than humans', 'He refused to study anatomy of any kind', 'He had no books or teachers to learn from'], 0, 'Animal anatomy differs from human.', 'vesalius'),
  Q('med5.c2', 'How did Vesalius\'s work reach England?', ['Through printed books and drawings', 'By word of mouth from travelling monks only', 'Through letters sent by the Pope to bishops'], 0, 'Printing spread it widely.', 'vesalius'),
  Q('med5.c3', 'Which treatments continued from the medieval period?', ['Bloodletting and purging', 'Antiseptic sprays during surgery', 'Vaccination against smallpox'], 0, 'Humoral treatments lasted.', 'treatment'),
  Q('med5.c4', 'Where did surgeons get bodies for dissection?', ['Executed criminals', 'Hospital patients who agreed', 'Animals only'], 0, 'A small number each year were allowed.', 'training'),
  Q('med5.c5', 'How did refounded hospitals change?', ['They began to treat patients and employ physicians', 'They were turned into prisons for debtors', 'They only looked after elderly monks and nuns'], 0, 'Treatment became part of their role.', 'hospitals'),
  Q('med5.c6', 'Who still gave most care?', ['Women at home', 'Hospital physicians', 'The government'], 0, 'Home care remained the norm.', 'care'),
  Q('med5.c7', 'Why did better anatomy not change treatment much?', ['It did not explain what caused disease', 'Doctors were not allowed to read it', 'It was published only in 1900'], 0, 'Knowing the body is not the same as knowing causes.', 'continuity'),
  Q('med5.c8', 'What were pest houses for?', ['Isolating people with infectious diseases', 'Training new apothecaries in their trade', 'Storing herbs and spices from overseas'], 0, 'They separated the sick.', 'care'),
], {exam: 'Explain one way in which hospitals in the period c1500–c1700 were different from hospitals in the period c1250–c1500. (4 marks)'}),

lesson(T, 'medicine.harvey', 'Case study: William Harvey and the circulation of the blood', ['11 2.3'], [
  ['Galen\'s view', 'Galen taught that blood was made in the liver from food and was used up by the body, and that it passed through tiny holes in the wall between the two sides of the heart. These ideas were still taught in the early 1600s.'],
  ['Harvey\'s experiments', 'William Harvey, physician to James I and Charles I, dissected living and dead animals and human bodies. He showed that the heart is a pump, that the valves in the veins let blood flow only one way, and, by calculating how much blood the heart pumps, that the body could not make that much: the same blood must circulate.'],
  ['Publication, 1628', 'Harvey published his findings in 1628. Printing helped his book spread, and his method of experiment and measurement was as important as his conclusion. But many doctors rejected his ideas at first, and some patients left his practice.'],
  ['Impact', 'Harvey\'s discovery did not change treatment in his lifetime: doctors kept bloodletting, and his ideas did not explain the cause of disease. But by the late 1600s his theory was accepted, and in the long run it made later developments, such as blood transfusion and surgery, possible.'],
], view.factors('Why was Harvey\'s discovery slow to change medicine?', [
  ['No practical use yet', 'it did not explain disease or suggest new treatments'],
  ['Attitudes', 'many doctors trusted Galen and resisted a new theory'],
  ['Technology', 'without microscopes good enough, he could not see the capillaries linking arteries and veins'],
  ['Long-term value', 'the basis for later transfusion and surgery'],
]), [
  view.timeline('Harvey', [
    ['1578', 'Born in Kent'],
    ['1600s', 'Studies at Cambridge and Padua'],
    ['1618', 'Physician to James I'],
    ['1628', 'Publishes his book on the motion of the heart and blood'],
    ['1661', 'Capillaries observed under a microscope by Malpighi, after Harvey\'s death'],
  ]),
  view.people('People', [
    ['William Harvey', 'Proved the circulation of the blood'],
    ['Galen', 'Whose ideas about blood Harvey overturned'],
    ['James I and Charles I', 'Kings Harvey served as physician'],
    ['Marcello Malpighi', 'Observed capillaries, completing Harvey\'s picture'],
  ]),
  view.source('A source type: an anatomical demonstration drawing', 'A printed illustration showing the veins of the arm and how pressing on them shows the valves at work, from Harvey\'s book.', 'Useful for how Harvey proved his argument by demonstration; it shows his evidence, not how readers received it.'),
], [
  ['How did Harvey show that blood circulates?', ['He calculated that the heart pumps far more blood than the body could make', 'He looked at blood under a microscope and saw it moving in a circle', 'He found that the liver made new blood from digested food every few minutes'], 0, 'Measurement was key to his argument.'],
  ['Why did Harvey\'s discovery not change treatment at once?', ['It did not explain the causes of disease or suggest new treatments', 'Harvey kept his discovery secret until after the 1665 plague', 'Parliament banned doctors from using his ideas until 1700'], 0, 'Knowledge did not translate into practice yet.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Harvey\'s method mattered most in the long term, because it showed that experiment could overturn Galen.', 'Harvey was very important because he discovered something important about the human body.', 'Harvey made no difference at all, because doctors carried on bloodletting and purging their patients.'], 0, 'A supported judgement weighs short- and long-term impact.'],
  ['Which factor helped Harvey\'s ideas spread?', ['The printing press', 'The Church', 'Government public-health laws'], 0, 'His book circulated across Europe.'],
], [
  Q('med6.p1', 'When did Harvey publish his discovery?', ['1628', '1543', '1665'], 0, 'Vesalius published in 1543.', 'harvey'),
  Q('med6.p2', 'What did Harvey show the heart was?', ['A pump', 'The place where blood is made', 'The home of the soul'], 0, 'It pushes blood round the body.', 'harvey'),
  Q('med6.p3', 'What did the valves in the veins show?', ['Blood flows one way', 'Blood is made in the liver', 'Blood passes through the heart wall'], 0, 'One-way valves support circulation.', 'harvey'),
  Q('med6.p4', 'Whose ideas about blood did Harvey overturn?', ['Galen\'s', 'Sydenham\'s', 'Jenner\'s'], 0, 'Galen thought blood was used up.', 'harvey'),
  Q('med6.p5', 'Which kings did Harvey serve?', ['James I and Charles I', 'Henry VIII and Edward VI', 'Charles II and James II'], 0, 'He was royal physician.', 'harvey'),
], [
  Q('med6.c1', 'Where did Galen think blood was made?', ['In the liver', 'In the heart', 'In the brain'], 0, 'From digested food.', 'harvey'),
  Q('med6.c2', 'What did Harvey calculate?', ['How much blood the heart pumps', 'How many people died of plague', 'The number of bones in the body'], 0, 'The volume proved circulation.', 'harvey'),
  Q('med6.c3', 'Why could Harvey not see the link between arteries and veins?', ['Microscopes were not yet good enough', 'He refused to dissect any human bodies', 'The Church banned him from looking for it'], 0, 'Capillaries were seen later.', 'harvey-impact'),
  Q('med6.c4', 'How did many doctors first react to Harvey?', ['Many rejected his ideas', 'All accepted them at once', 'They made him President of the Royal Society'], 0, 'They trusted Galen.', 'harvey-impact'),
  Q('med6.c5', 'Did Harvey\'s discovery change treatment in his lifetime?', ['No; bloodletting continued', 'Yes; bloodletting stopped at once', 'Yes; vaccination began'], 0, 'Practice changed slowly.', 'harvey-impact'),
  Q('med6.c6', 'Which later developments did Harvey\'s work make possible?', ['Blood transfusion and modern surgery', 'The invention of the printing press', 'A stronger belief in the miasma theory'], 0, 'Long-term impact was large.', 'harvey-impact'),
  Q('med6.c7', 'What was most important about Harvey\'s method?', ['Experiment and measurement', 'Reading ancient books closely', 'Astrology and star charts'], 0, 'It showed the value of evidence.', 'harvey'),
  Q('med6.c8', 'Who observed capillaries after Harvey\'s death?', ['Malpighi', 'Vesalius', 'Pasteur'], 0, 'In 1661, with a microscope.', 'harvey-impact'),
], {exam: '"Harvey\'s discovery of the circulation of the blood had little impact on medicine in the period c1500–c1700." How far do you agree? (16 marks)'}),

lesson(T, 'medicine.great-plague', 'Case study: the Great Plague in London, 1665', ['11 2.3'], [
  ['The outbreak', 'Plague returned to London in 1665 and killed around a hundred thousand people, perhaps a quarter of the city. Weekly Bills of Mortality, compiled from reports by women employed as "searchers" who examined the dead, recorded the deaths.'],
  ['Ideas about the cause', 'Many people still blamed God, the stars or miasma. Some thought it spread from person to person. Nobody knew that fleas on rats carried it, so explanations had changed little since 1348.'],
  ['Treatments and protection', 'People used herbal remedies and "plague water", carried sweet herbs, smoked tobacco to keep off bad air, and prayed. Some physicians wore beaked masks stuffed with herbs to filter the air. Many who could afford it, including the king and court, left London.'],
  ['Government action', 'Much more than in 1348, the authorities organised a response. Infected households were shut in for forty days with a red cross painted on the door and a watchman outside; public gatherings and plays were banned; bodies were buried at night in mass graves; streets were cleaned and fires lit; and large numbers of cats and dogs were killed, wrongly believed to spread it.'],
], view.factors('1348 compared with 1665', [
  ['Same', 'causes explained by God, the stars and miasma; herbal remedies and prayer'],
  ['Different', 'organised government orders: quarantine, searchers, Bills of Mortality, bans on gatherings'],
  ['Why the difference', 'stronger local government and more experience of plague, not better knowledge of its cause'],
]), [
  view.timeline('London, 1665–66', [
    ['Spring 1665', 'Plague deaths rise in London\'s suburbs'],
    ['June 1665', 'The king\'s court and many wealthy people leave'],
    ['Sept 1665', 'Deaths peak at several thousand a week'],
    ['1666', 'The outbreak declines; the Great Fire in September'],
  ]),
  view.people('People and roles', [
    ['Searchers', 'Women who examined bodies and reported the cause of death'],
    ['Watchmen', 'Guarded shut-up houses to stop people leaving'],
    ['The Lord Mayor', 'Issued orders for the city'],
    ['Plague doctors', 'Some wore beaked masks filled with herbs'],
  ]),
  view.source('A source type: a Bill of Mortality', 'A weekly printed list of deaths in each London parish and their recorded causes, based on the searchers\' reports.', 'Valuable for the scale and timing of the plague; causes were judged by untrained searchers, and some families hid plague deaths.'),
], [
  ['Why were houses shut up for forty days?', ['To stop the disease spreading from infected households', 'To punish families who had not paid their taxes', 'To let doctors search the houses carefully for fleas and rats'], 0, 'Quarantine was the main organised measure.'],
  ['Why did physicians wear beaked masks full of herbs?', ['They believed the herbs filtered out bad air', 'The masks protected them from flea bites', 'The masks hid their identity from patients'], 0, 'The design followed miasma ideas.'],
  ['Exam skill · Explain a similarity. Which explains a similarity between 1348 and 1665?', ['In both, people explained plague with God and miasma, because the real cause was still unknown.', 'In 1665 the authorities shut infected families in their houses for forty days.', 'In 1348 the plague arrived through a port in Dorset, but in 1665 it was worst in London.'], 0, 'A similarity names what stayed the same and why.'],
  ['Why did killing cats and dogs probably make things worse?', ['They kill rats, so fewer cats and dogs meant more rats and fleas', 'Cats and dogs were the main carriers of the plague bacteria', 'Their bodies were left in the streets and caused miasma'], 0, 'The action came from a wrong idea of the cause.'],
], [
  Q('med7.p1', 'Roughly how many people died in London in 1665?', ['About 100,000', 'About 1,000', 'About 1,000,000'], 0, 'Perhaps a quarter of the city.', 'great-plague'),
  Q('med7.p2', 'Who examined bodies and reported causes of death?', ['Searchers', 'Physicians', 'Barber surgeons'], 0, 'They were women employed by parishes.', 'great-plague'),
  Q('med7.p3', 'How long were infected houses shut up?', ['Forty days', 'Two days only', 'One whole year'], 0, 'A red cross marked the door.', 'gp-government'),
  Q('med7.p4', 'What were the Bills of Mortality?', ['Weekly lists of deaths and their causes', 'Laws that banned plays and public gatherings', 'Bills that physicians sent to their patients'], 0, 'They tracked the outbreak.', 'great-plague'),
  Q('med7.p5', 'What did some people smoke to keep off bad air?', ['Tobacco', 'Herbs from the apothecary only', 'Nothing'], 0, 'It followed the miasma theory.', 'gp-treatment'),
], [
  Q('med7.c1', 'What was painted on the doors of infected houses?', ['A red cross', 'A white circle', 'A black X'], 0, 'It warned others to keep away.', 'gp-government'),
  Q('med7.c2', 'Which public events were banned?', ['Gatherings and plays', 'Church services only', 'Markets only'], 0, 'Crowds were thought to spread it.', 'gp-government'),
  Q('med7.c3', 'Which animals were killed in large numbers?', ['Cats and dogs', 'Rats and mice in the sewers', 'Horses used to pull carts'], 0, 'Killing rats would have helped more.', 'gp-government'),
  Q('med7.c4', 'What was the biggest difference from 1348?', ['More organised government action', 'The true cause of plague was now known', 'Far fewer people died than in 1348'], 0, 'Knowledge of the cause had not changed.', 'gp-compare'),
  Q('med7.c5', 'Who left London during the plague?', ['The king and court and many wealthy people', 'Only the searchers and the watchmen employed', 'Nobody, because the city gates were all locked'], 0, 'Those who could, fled.', 'great-plague'),
  Q('med7.c6', 'What did physicians\' beaked masks contain?', ['Sweet-smelling herbs', 'Medicine to drink through a tube', 'Nothing; they were only for show'], 0, 'To filter bad air.', 'gp-treatment'),
  Q('med7.c7', 'When were victims buried?', ['At night in mass graves', 'In family vaults only', 'At sea'], 0, 'To limit contact.', 'gp-government'),
  Q('med7.c8', 'What still caused people to fear the plague was God\'s punishment?', ['Religious beliefs about disease continued', 'The Church had banned all medicine', 'Germ theory had been proved wrong'], 0, 'Continuity in ideas.', 'gp-compare'),
], {exam: 'Explain one way in which attempts to prevent the spread of plague were similar in 1348 and 1665. (4 marks)'}),
];
