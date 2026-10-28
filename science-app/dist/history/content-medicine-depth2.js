// Pearson Edexcel GCSE (9–1) History 1HI0, Option 11: Medicine in Britain, c1250–present.
// Depth lessons for key topic 2, c1500–c1700 (specification 2.1–2.3). Each follows its overview lesson.
// All text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

const T = 'history.medicine.kt2';

export const medicineDepth2 = [
lesson(T, 'medicine.renaissance-continuity', 'Continuity and change in ideas about cause', ['11 2.1'], [
  ['What "Renaissance" meant', 'The Renaissance was a revival of interest in ancient Greek and Roman learning. At first this strengthened old ideas: scholars such as Thomas Linacre, founder of the College of Physicians, translated Galen directly from Greek, so physicians read him more accurately than before.'],
  ['Challenges to authority', 'Some began to question the ancients. The Swiss physician Paracelsus attacked Galen, publicly burned a famous medical textbook in 1527 and promoted chemical remedies. His ideas were controversial, but they showed that ancient authority could be challenged.'],
  ['Religion loses ground', 'After the Reformation the Church no longer controlled universities and books, and educated people increasingly looked for natural causes of disease. Astrology also began to lose favour among scientists, though many ordinary people still used almanacs.'],
  ['What stayed the same', 'For most people, the Four Humours and miasma still explained disease, and many still saw illness as God\'s will. New ideas spread mainly among an educated minority, so change in the beliefs of ordinary people was slow.'],
], view.factors('Change and continuity in ideas, c1500–c1700', [
  ['Change', 'questioning of ancient authorities; less religious explanation'],
  ['Continuity', 'the humours and miasma still dominant'],
  ['Who changed', 'an educated minority of physicians and scientists'],
  ['Why slow', 'no new explanation of cause yet replaced the old ones'],
]), [
  view.timeline('Ideas in the Renaissance', [
    ['1518', 'Linacre founds the College of Physicians'],
    ['1520s', 'Paracelsus attacks Galen and promotes chemical remedies'],
    ['1530s', 'The Reformation; the Church loses control of learning'],
    ['1543', 'Vesalius corrects Galen\'s anatomy'],
    ['1628', 'Harvey publishes on the circulation of the blood'],
  ]),
  view.people('People', [
    ['Thomas Linacre', 'Translated Galen from Greek; founded the College of Physicians'],
    ['Paracelsus', 'Challenged Galen and promoted chemical remedies'],
    ['Educated physicians', 'Began to look for natural causes'],
    ['Ordinary people', 'Mostly kept older beliefs'],
  ]),
  view.source('A source type: a printed almanac', 'A cheap printed almanac from the 1600s giving the best days for bloodletting according to the stars.', 'Useful evidence that astrology remained popular; it shows what sold to ordinary readers, not what scientists believed.'),
], [
  ['Why did the Renaissance at first strengthen Galen?', ['Scholars translated Galen directly from Greek, so he was read more accurately', 'The Pope ordered that only Galen\'s books could be printed in England', 'Vesalius proved that every one of Galen\'s ideas was correct'], 0, 'Revival of ancient learning.'],
  ['Why did Paracelsus matter?', ['He showed that ancient authority could be challenged', 'He discovered that germs cause disease and decay', 'He invented the printing press in the year 1476'], 0, 'A bold challenge.'],
  ['Exam skill · Explain one difference. Which explains a difference in ideas about cause from c1250–c1500?', ['Educated people looked more for natural causes, because the Church no longer controlled learning.', 'Most people in both periods believed in the Four Humours and in miasma.', 'Thomas Linacre founded the College of Physicians in London in the year 1518.'], 0, 'A difference is explained by a cause.'],
  ['Why did ordinary people\'s beliefs change slowly?', ['New ideas spread mainly among an educated minority', 'The government banned new ideas from being printed', 'Ordinary people were forbidden to read any books'], 0, 'Change was uneven.'],
], [
  Q('mdd9.p1', 'Who founded the College of Physicians?', ['Thomas Linacre', 'Thomas Sydenham', 'William Harvey'], 0, 'He founded it in 1518.', 'renaissance'),
  Q('mdd9.p2', 'Who challenged Galen and promoted chemical remedies?', ['Paracelsus', 'Linacre', 'Hippocrates'], 0, 'He did so in the 1520s.', 'challenge'),
  Q('mdd9.p3', 'What was the Renaissance?', ['A revival of ancient learning', 'A new disease brought from abroad', 'A new kind of Church hospital'], 0, 'Greek and Roman texts.', 'renaissance'),
  Q('mdd9.p4', 'Which ideas stayed dominant for most people?', ['The humours and miasma', 'Germ theory of disease', 'Genetic causes of illness'], 0, 'This shows continuity.', 'continuity'),
  Q('mdd9.p5', 'What weakened the Church\'s control of learning?', ['The Reformation', 'The Black Death', 'The Royal Society'], 0, 'It began in the 1530s.', 'religion'),
], [
  Q('mdd9.c1', 'What did Paracelsus burn in 1527?', ['A famous medical textbook', 'A church in the city of Basel', 'A printing press in Germany'], 0, 'A public challenge.', 'challenge'),
  Q('mdd9.c2', 'Who still used almanacs?', ['Many ordinary people', 'Only leading scientists', 'Nobody at all by 1600'], 0, 'Astrology lasted.', 'continuity'),
  Q('mdd9.c3', 'From which language did Linacre translate Galen?', ['Greek', 'Arabic', 'French'], 0, 'More accurately.', 'renaissance'),
  Q('mdd9.c4', 'Who changed their ideas first?', ['An educated minority', 'Everyone, all at once', 'Only the poorest peasants'], 0, 'Change was uneven.', 'continuity'),
  Q('mdd9.c5', 'What did educated people increasingly seek?', ['Natural causes', 'Religious causes', 'Astrological causes'], 0, 'After the Reformation.', 'religion'),
  Q('mdd9.c6', 'What did many still see illness as?', ['God\'s will', 'Caused by germs', 'Genetic'], 0, 'This shows continuity.', 'continuity'),
  Q('mdd9.c7', 'What type of remedies did Paracelsus promote?', ['Chemical', 'Herbal only', 'Prayer'], 0, 'They were controversial.', 'challenge'),
  Q('mdd9.c8', 'Why did old ideas survive?', ['No new explanation replaced them', 'They had been scientifically proven', 'They were enforced by law'], 0, 'Until germ theory.', 'continuity'),
], {exam: 'Explain one way in which ideas about the cause of disease in the period c1500–c1700 were different from ideas in the period c1250–c1500. (4 marks)'}),

lesson(T, 'medicine.sydenham', 'Thomas Sydenham\'s scientific approach', ['11 2.1'], [
  ['Who was Sydenham?', 'Thomas Sydenham (1624–89) fought for Parliament in the Civil War, studied at Oxford and practised as a physician in London. He was never a member of the medical establishment, and some physicians distrusted his methods.'],
  ['Observing the patient', 'Sydenham believed doctors should learn from careful observation at the bedside rather than from ancient books. He recorded the symptoms and course of illnesses in detail, and in 1676 published his observations on diseases in London.'],
  ['Diseases as separate things', 'Sydenham argued that each disease was a distinct thing with its own pattern, whatever the patient, rather than a personal imbalance of the humours. This helped him tell apart illnesses that had been confused, such as scarlet fever and measles. He also used Peruvian bark, which contains quinine, to treat the fever we call malaria.'],
  ['Limits and legacy', 'Sydenham still used some humoral treatments, including bloodletting, and he did not know what caused disease. His influence came slowly, but his method of observing and classifying diseases became a foundation of modern diagnosis, and later doctors called him the "English Hippocrates".'],
], view.factors('Sydenham\'s contribution', [
  ['Method', 'careful observation and recording at the bedside'],
  ['Idea', 'each disease is a distinct thing with its own pattern'],
  ['Practice', 'telling apart scarlet fever and measles; using Peruvian bark'],
  ['Limits', 'still used bloodletting; did not know the causes'],
]), [
  view.timeline('Sydenham', [
    ['1624', 'Born in Dorset'],
    ['1640s', 'Fights for Parliament in the Civil War'],
    ['1650s', 'Studies at Oxford; begins practice in London'],
    ['1665', 'Observes the Great Plague in London'],
    ['1676', 'Publishes his observations on diseases'],
    ['1689', 'Dies in London'],
  ]),
  view.people('People', [
    ['Thomas Sydenham', 'Physician who stressed observation'],
    ['Hippocrates', 'Ancient doctor Sydenham was compared to'],
    ['Patients in London', 'Whose illnesses he recorded'],
    ['The College of Physicians', 'Some members distrusted his methods'],
  ]),
  view.source('A source type: a physician\'s case notes', 'Sydenham\'s published account of the symptoms and course of a fever outbreak in London, year by year.', 'Useful for his method of observation; his descriptions depend on his own interpretation of what he saw.'),
], [
  ['How did Sydenham\'s idea of disease differ from humoral theory?', ['He saw each disease as a distinct thing, not a personal imbalance', 'He said that all disease was caused by the planets and stars', 'He believed that disease was always a punishment from God'], 0, 'Diseases have their own patterns.'],
  ['What did Peruvian bark treat?', ['The fever we now call malaria', 'The bubonic plague', 'Broken bones and wounds'], 0, 'It contains quinine.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Sydenham changed how disease was diagnosed, but his impact was slow and he still used old treatments.', 'Sydenham was very important because he was called the English Hippocrates.', 'Sydenham changed nothing, because he still believed in bloodletting.'], 0, 'A supported judgement weighs change and limits.'],
  ['Why did some physicians distrust Sydenham?', ['He relied on observation rather than ancient books', 'He refused to treat any patients in London', 'He had been banned by the Royal Society'], 0, 'He broke with tradition.'],
], [
  Q('mdd10.p1', 'When did Sydenham live?', ['1624–89', '1514–64', '1749–1823'], 0, 'He lived in the 1600s.', 'sydenham'),
  Q('mdd10.p2', 'Which two diseases did Sydenham tell apart?', ['Scarlet fever and measles', 'Cholera and typhoid fever', 'Plague and smallpox'], 0, 'They had been confused.', 'diseases'),
  Q('mdd10.p3', 'What did Peruvian bark contain?', ['Quinine', 'Penicillin', 'Chloroform'], 0, 'Used against malaria.', 'diseases'),
  Q('mdd10.p4', 'What was Sydenham called?', ['The English Hippocrates', 'The father of germ theory', 'The Lady with the Lamp'], 0, 'By later doctors.', 'legacy'),
  Q('mdd10.p5', 'When did Sydenham publish his observations?', ['1676', '1543', '1628'], 0, 'On London diseases.', 'method'),
], [
  Q('mdd10.c1', 'Which side did Sydenham fight for?', ['Parliament', 'King Charles I', 'The Spanish'], 0, 'In the Civil War.', 'sydenham'),
  Q('mdd10.c2', 'Where did Sydenham learn most?', ['At the bedside', 'In ancient books', 'In monasteries'], 0, 'He learned by observation.', 'method'),
  Q('mdd10.c3', 'Did Sydenham still use bloodletting?', ['Yes, sometimes', 'No, never', 'He invented it'], 0, 'This shows continuity.', 'legacy'),
  Q('mdd10.c4', 'Did Sydenham know what caused disease?', ['No', 'Yes, germs', 'Yes, genes'], 0, 'That came later.', 'legacy'),
  Q('mdd10.c5', 'Where did Sydenham practise?', ['London', 'Edinburgh', 'Paris'], 0, 'He was a physician there.', 'sydenham'),
  Q('mdd10.c6', 'What did Sydenham record?', ['Symptoms and course of illness', 'The positions of the stars', 'The prayers of his patients'], 0, 'He recorded them in detail.', 'method'),
  Q('mdd10.c7', 'How quickly did his ideas spread?', ['Slowly', 'Overnight', 'Never'], 0, 'They spread over time.', 'legacy'),
  Q('mdd10.c8', 'What did his approach help found?', ['Modern diagnosis', 'Germ theory', 'Mass vaccination'], 0, 'Classifying disease.', 'legacy'),
], {exam: '"Sydenham was the most important individual in changing medicine in the period c1500–c1700." How far do you agree? (16 marks)'}),

lesson(T, 'medicine.royal-society', 'Printing and the Royal Society', ['11 2.1'], [
  ['The printing press', 'Johannes Gutenberg developed printing with movable type in Germany around 1440, and William Caxton set up England\'s first press at Westminster in 1476. Books could now be produced quickly, cheaply and identically, and by the 1600s many medical books were printed in English for readers who did not know Latin.'],
  ['Why printing mattered for medicine', 'Accurate copies meant that detailed anatomical drawings, such as those of Vesalius, could be reproduced exactly. New ideas spread quickly across Europe, and arguments could be published and answered. It became harder for any one authority to control what people read.'],
  ['The Royal Society', 'The Royal Society grew out of meetings of scientists in London and was founded in 1660, receiving a royal charter in 1662. Its Latin motto meant roughly "take nobody\'s word for it". Members such as Robert Boyle and Robert Hooke carried out and reported experiments, and in 1665 Hooke\'s book of microscope drawings showed tiny structures never seen before.'],
  ['Experiments and limits', 'Members experimented with blood transfusion, first between dogs in 1666 and then from a sheep into a man in 1667. Philosophical Transactions, from 1665, spread such reports. But the Society studied all sciences, and its work changed everyday medical treatment only slowly.'],
], view.factors('How printing and the Royal Society helped', [
  ['Accuracy', 'identical copies of drawings and texts'],
  ['Speed', 'new ideas spread quickly across Europe'],
  ['Method', 'the Royal Society promoted experiment and evidence'],
  ['Limit', 'little immediate change to treatment'],
]), [
  view.timeline('Printing and science', [
    ['c. 1440', 'Gutenberg\'s printing press in Germany'],
    ['1476', 'Caxton\'s press at Westminster'],
    ['1660', 'The Royal Society founded'],
    ['1662', 'Royal charter from Charles II'],
    ['1665', 'Philosophical Transactions; Hooke\'s microscope book'],
    ['1666–67', 'Blood transfusion experiments'],
  ]),
  view.people('People', [
    ['William Caxton', 'Set up England\'s first printing press'],
    ['Robert Boyle', 'Royal Society experimental scientist'],
    ['Robert Hooke', 'Published drawings made with a microscope'],
    ['Charles II', 'Gave the Royal Society its charter'],
  ]),
  view.source('A source type: an engraving from a microscope book', 'A printed engraving from 1665 showing a flea magnified many times, drawn from a microscope.', 'Useful for what new instruments could reveal; it shows observation, but not yet any link between tiny creatures and disease.'),
], [
  ['Why did printing matter for anatomy?', ['Detailed drawings could be reproduced exactly in every copy', 'It allowed surgeons to operate without causing any pain', 'It stopped anyone from questioning the books of Galen'], 0, 'Accuracy of images.'],
  ['What did the Royal Society\'s motto stress?', ['Taking nobody\'s word for it, but testing by experiment', 'Following the teachings of Galen in every detail', 'Obeying the Church in all questions of science'], 0, 'Evidence over authority.'],
  ['Exam skill · Explain why. Which explains why the Royal Society did not quickly change treatment?', ['It studied all sciences, and its experiments did not yet explain the causes of disease.', 'The Royal Society was founded in 1660 and received a royal charter in 1662.', 'Robert Hooke published a book of microscope drawings in the year 1665.'], 0, 'Explanation links its nature to its limited impact.'],
  ['Why did printing in English matter?', ['Readers who did not know Latin could read medical books', 'It meant medical books could only be read in England', 'It made all books much more expensive to buy'], 0, 'Wider readership.'],
], [
  Q('mdd11.p1', 'When did Caxton set up his press?', ['1476', '1440', '1543'], 0, 'It was at Westminster.', 'printing'),
  Q('mdd11.p2', 'When did the Royal Society get its charter?', ['1662', '1476', '1700'], 0, 'From Charles II.', 'royal-society'),
  Q('mdd11.p3', 'Who published microscope drawings in 1665?', ['Robert Hooke', 'Robert Boyle', 'William Harvey'], 0, 'Including a flea.', 'royal-society'),
  Q('mdd11.p4', 'Who developed movable-type printing?', ['Gutenberg', 'Caxton', 'Vesalius'], 0, 'He did so around 1440.', 'printing'),
  Q('mdd11.p5', 'From which animal was blood given to a man in 1667?', ['A sheep', 'A dog', 'A horse'], 0, 'An early experiment.', 'experiments'),
], [
  Q('mdd11.c1', 'What could printing make identical?', ['Copies of drawings', 'Treatments for patients', 'Results of operations'], 0, 'Printing brought accuracy.', 'printing'),
  Q('mdd11.c2', 'What did the Royal Society promote?', ['Experiment and evidence', 'Prayer and pilgrimage', 'Astrology and almanacs'], 0, 'It tested ideas.', 'royal-society'),
  Q('mdd11.c3', 'Which journal spread reports from 1665?', ['Philosophical Transactions', 'The Lancet medical journal', 'The Times newspaper'], 0, 'The Society\'s journal.', 'royal-society'),
  Q('mdd11.c4', 'Did the Royal Society quickly change treatment?', ['No', 'Yes', 'It banned treatment'], 0, 'Change was slow.', 'experiments'),
  Q('mdd11.c5', 'In which language were more books printed by the 1600s?', ['English', 'Greek', 'Arabic'], 0, 'Wider readership.', 'printing'),
  Q('mdd11.c6', 'Who was a Royal Society scientist?', ['Robert Boyle', 'Galen of Pergamum', 'Paracelsus'], 0, 'An experimenter.', 'royal-society'),
  Q('mdd11.c7', 'When were dog-to-dog transfusions tried?', ['1666', '1543', '1901'], 0, 'Then sheep to man.', 'experiments'),
  Q('mdd11.c8', 'What did printing make harder?', ['Controlling what people read', 'Learning to read at school', 'Writing letters to friends'], 0, 'Ideas spread more freely.', 'printing'),
], {exam: 'Explain why the printing press was important for the spread of medical ideas in the period c1500–c1700. (12 marks)'}),

lesson(T, 'medicine.renaissance-treatment', 'Renaissance prevention and treatment', ['11 2.2'], [
  ['Old treatments continued', 'Bloodletting and purging remained the most common treatments, because the humours still explained disease. Herbal remedies were still made at home and by apothecaries, and transference, passing an illness to an object or animal, was still tried.'],
  ['Books for ordinary people', 'Printed herbals and home-remedy books spread knowledge. In 1652 Nicholas Culpeper published a guide to herbal remedies in English, cheap enough for ordinary households, which angered physicians who wanted to keep medical knowledge to themselves.'],
  ['New ingredients', 'Trade and exploration brought new remedies. Tobacco was claimed to cure many illnesses, Peruvian bark treated fevers, and chemical remedies such as mercury were used against syphilis, following Paracelsus. Some, like the bark, worked; others, like mercury, were poisonous.'],
  ['Healers and quacks', 'Many people bought cures from travelling sellers called quacks, who made bold claims. Kings still touched people for the "king\'s evil": Charles II touched many thousands. Prevention still relied on cleanliness, regimen and purifying the air.'],
], view.factors('Change and continuity in treatment', [
  ['Continuity', 'bloodletting, purging, herbal remedies, transference, the royal touch'],
  ['Change', 'new ingredients from abroad; chemical remedies'],
  ['Spread', 'printed remedy books in English'],
  ['Why little change', 'ideas about cause had not changed'],
]), [
  view.timeline('Treatment, c1500–c1700', [
    ['1500s', 'Printed herbals become available'],
    ['1520s–30s', 'Paracelsus promotes chemical remedies'],
    ['1600s', 'Peruvian bark reaches Europe'],
    ['1652', 'Culpeper\'s English guide to herbal remedies'],
    ['1660s–80s', 'Charles II touches many thousands for scrofula'],
  ]),
  view.people('People', [
    ['Nicholas Culpeper', 'Published an English herbal guide'],
    ['Apothecaries', 'Made and sold remedies'],
    ['Quacks', 'Travelling sellers of cures'],
    ['Charles II', 'Touched people for the "king\'s evil"'],
  ]),
  view.source('A source type: a quack\'s advertisement', 'A printed handbill from the 1600s advertising a pill that claimed to cure dozens of illnesses.', 'Useful for the market in cures and what people hoped for; its claims were made to sell, not to inform.'),
], [
  ['Why did bloodletting continue?', ['The humours still explained disease, so restoring balance made sense', 'Bloodletting had been proved to cure the plague by the Royal Society', 'The law required every patient to be bled at least once a year'], 0, 'Treatment followed ideas.'],
  ['Why did physicians dislike Culpeper\'s book?', ['It spread medical knowledge to ordinary people in English', 'It said that all physicians should be banned from treating patients', 'It was written in Latin, which ordinary people could not read'], 0, 'Knowledge was power.'],
  ['Exam skill · Explain one similarity. Which explains a similarity in treatment between c1250–c1500 and c1500–c1700?', ['In both periods bloodletting and purging were common, because the humours still explained disease.', 'In the 1600s new ingredients such as tobacco and Peruvian bark came from abroad.', 'Nicholas Culpeper published his guide to herbal remedies in English in 1652.'], 0, 'A similarity is explained by a shared cause.'],
  ['Which new remedy was harmful?', ['Mercury, which is poisonous', 'Peruvian bark, which contains quinine', 'Honey, which helps to heal wounds'], 0, 'Not every new remedy helped.'],
], [
  Q('mdd12.p1', 'Who published an English herbal guide in 1652?', ['Nicholas Culpeper', 'Thomas Sydenham', 'Robert Hooke'], 0, 'For ordinary households.', 'books'),
  Q('mdd12.p2', 'What was mercury used against?', ['Syphilis', 'Plague', 'Malaria'], 0, 'It was poisonous.', 'ingredients'),
  Q('mdd12.p3', 'What were quacks?', ['Travelling sellers of cures', 'University-trained physicians', 'Nurses working in hospitals'], 0, 'They made bold claims.', 'healers'),
  Q('mdd12.p4', 'Which new product was claimed to cure many illnesses?', ['Tobacco', 'Potatoes', 'Coffee only'], 0, 'From the Americas.', 'ingredients'),
  Q('mdd12.p5', 'Which treatment stayed most common?', ['Bloodletting and purging', 'Vaccination against smallpox', 'Antibiotics from mould'], 0, 'This shows continuity.', 'continuity'),
], [
  Q('mdd12.c1', 'What was transference?', ['Passing illness to an object or animal', 'Moving patients between hospitals', 'Giving blood from one person to another'], 0, 'It was a folk remedy.', 'continuity'),
  Q('mdd12.c2', 'Which remedy treated fevers effectively?', ['Peruvian bark', 'Mercury', 'Tobacco'], 0, 'It contains quinine.', 'ingredients'),
  Q('mdd12.c3', 'Who touched people for the king\'s evil?', ['Charles II', 'Henry VIII', 'Edward III'], 0, 'He touched many thousands.', 'healers'),
  Q('mdd12.c4', 'Whose ideas led to chemical remedies?', ['Paracelsus\'', 'Galen\'s', 'Culpeper\'s'], 0, 'A challenge to Galen.', 'ingredients'),
  Q('mdd12.c5', 'Why did treatment change little?', ['Ideas about cause had not changed', 'Treatment had been banned by law', 'There were no doctors left'], 0, 'Humours still ruled.', 'continuity'),
  Q('mdd12.c6', 'Where did prevention still focus?', ['Cleanliness and pure air', 'Vaccines against disease', 'Killing germs in wounds'], 0, 'It followed miasma ideas.', 'continuity'),
  Q('mdd12.c7', 'What helped spread remedy knowledge?', ['Printed books', 'Radio broadcasts', 'Television programmes'], 0, 'Many were in English.', 'books'),
  Q('mdd12.c8', 'Where did new ingredients come from?', ['Trade and exploration', 'The closed monasteries', 'The old universities'], 0, 'From the Americas and Asia.', 'ingredients'),
], {exam: 'Explain one way in which the treatment of disease in the period c1500–c1700 was similar to treatment in the period c1250–c1500. (4 marks)'}),

lesson(T, 'medicine.renaissance-hospitals', 'Care in the community and in hospitals, c1500–c1700', ['11 2.2'], [
  ['The loss of the monasteries', 'Between 1536 and 1541 Henry VIII closed the monasteries, and with them most of the hospitals the Church had run. The sick poor lost a major source of care, and charity had to come from elsewhere.'],
  ['Refounded hospitals', 'In London some hospitals were refounded with royal and civic support: St Bartholomew\'s in 1546 and St Thomas\'s in 1551. Bethlem cared for people with mental illness. These hospitals began to employ physicians and surgeons, and William Harvey was physician at St Bartholomew\'s for over thirty years.'],
  ['Pest houses and almshouses', 'Towns built pest houses to isolate people with infectious diseases such as plague, and almshouses gave shelter to the elderly poor. Some new hospitals were funded by wealthy merchants and town councils rather than the Church.'],
  ['Care at home', 'Most people were still cared for at home by women. Some gentlewomen, such as Lady Grace Mildmay, kept detailed records of the remedies they made and treated people on their estates. Apothecaries and local healers remained the main source of help for ordinary families.'],
], view.factors('How care changed', [
  ['Change', 'most Church hospitals closed; some refounded with secular funding'],
  ['Change', 'hospitals began to employ physicians and treat patients'],
  ['New', 'pest houses for the infectious'],
  ['Continuity', 'most care at home, by women'],
]), [
  view.timeline('Care, c1500–c1700', [
    ['1536–41', 'The monasteries are closed'],
    ['1546', 'St Bartholomew\'s refounded'],
    ['1551', 'St Thomas\'s refounded'],
    ['1609', 'Harvey becomes physician at St Bartholomew\'s'],
    ['1600s', 'Pest houses built in many towns'],
  ]),
  view.people('People and places', [
    ['Henry VIII', 'Closed the monasteries'],
    ['St Bartholomew\'s and St Thomas\'s', 'London hospitals refounded in the 1540s–50s'],
    ['William Harvey', 'Physician at St Bartholomew\'s'],
    ['Lady Grace Mildmay', 'Gentlewoman who treated people on her estate'],
  ]),
  view.source('A source type: a hospital\'s admission register', 'A register from a refounded London hospital listing patients admitted, their illnesses and whether they were cured.', 'Useful for who was treated and the outcomes; hospital records may record cures more readily than failures.'),
], [
  ['What happened to care after the monasteries closed?', ['Most Church hospitals closed, so the sick poor lost a major source of care', 'Every town opened a new hospital paid for by the Church of England', 'The government took over all hospitals and made treatment free'], 0, 'It was a sudden loss.'],
  ['How were refounded hospitals different?', ['They began to employ physicians and surgeons to treat patients', 'They focused only on prayer and refused to treat anybody', 'They were run by monks who had returned from abroad'], 0, 'Treatment became part of their role.'],
  ['Exam skill · Explain one difference. Which explains a difference in hospitals between c1250–c1500 and c1500–c1700?', ['Later hospitals employed physicians to treat patients, because they were run by towns and the Crown, not monks.', 'St Bartholomew\'s Hospital in London was refounded in the year 1546.', 'William Harvey was the physician at St Bartholomew\'s for over thirty years.'], 0, 'A difference is explained by a cause.'],
  ['What were pest houses for?', ['Isolating people with infectious diseases', 'Training new physicians and surgeons', 'Housing the elderly poor of each parish'], 0, 'Separation of the sick.'],
], [
  Q('mdd13.p1', 'When was St Bartholomew\'s refounded?', ['1546', '1660', '1348'], 0, 'With royal support.', 'refounded'),
  Q('mdd13.p2', 'Who closed the monasteries?', ['Henry VIII', 'Elizabeth I', 'Charles II'], 0, 'He did so in 1536–41.', 'monasteries'),
  Q('mdd13.p3', 'Which hospital cared for people with mental illness?', ['Bethlem', 'St Thomas\'s', 'Guy\'s'], 0, 'It was in London.', 'refounded'),
  Q('mdd13.p4', 'Who was physician at St Bartholomew\'s?', ['William Harvey', 'Thomas Sydenham', 'Joseph Lister'], 0, 'For over thirty years.', 'refounded'),
  Q('mdd13.p5', 'Who still gave most care?', ['Women at home', 'Hospital physicians', 'The Church'], 0, 'This shows continuity.', 'home'),
], [
  Q('mdd13.c1', 'When was St Thomas\'s refounded?', ['1551', '1476', '1700'], 0, 'It is in London.', 'refounded'),
  Q('mdd13.c2', 'Who kept records of her remedies?', ['Lady Grace Mildmay', 'Florence Nightingale', 'Mary Seacole'], 0, 'She was a gentlewoman.', 'home'),
  Q('mdd13.c3', 'What gave shelter to the elderly poor?', ['Almshouses', 'Pest houses', 'Prisons'], 0, 'Charitable homes.', 'pest-houses'),
  Q('mdd13.c4', 'Who funded some new hospitals?', ['Merchants and councils', 'The Pope in Rome', 'Monks returning from abroad'], 0, 'Secular funding.', 'refounded'),
  Q('mdd13.c5', 'What did the sick poor lose in the 1530s?', ['A major source of care', 'Their homes and land', 'The right to vote'], 0, 'Church hospitals.', 'monasteries'),
  Q('mdd13.c6', 'Who was the main help for ordinary families?', ['Apothecaries and local healers', 'Physicians at the royal Court', 'Bishops of the new Church'], 0, 'They were affordable.', 'home'),
  Q('mdd13.c7', 'Which disease were pest houses often used for?', ['Plague', 'Gout', 'Toothache'], 0, 'Isolation was the aim.', 'pest-houses'),
  Q('mdd13.c8', 'What did refounded hospitals employ?', ['Physicians and surgeons', 'Monks and nobody else', 'Priests and nobody else'], 0, 'Treatment became part of their work.', 'refounded'),
], {exam: 'Explain why the provision of hospital care changed in the period c1500–c1700. (12 marks)'}),

lesson(T, 'medicine.vesalius', 'Vesalius and changes in training', ['11 2.2'], [
  ['Vesalius at Padua', 'Andreas Vesalius (1514–64), born in Brussels, became professor of anatomy at the University of Padua in Italy at about the age of twenty-three. Unlike earlier professors, who read Galen aloud while an assistant cut, he dissected bodies himself, often those of executed criminals.'],
  ['The Fabric of the Human Body, 1543', 'Vesalius\'s great book, published in 1543, contained detailed illustrations made with artists from the studio of the painter Titian. It showed that Galen had been wrong on many points: for example, the human jawbone is a single bone, not two, and the breastbone has three parts, not seven. Galen\'s mistakes came from dissecting animals.'],
  ['Spreading to England', 'Printing spread the book\'s drawings quickly. In 1545 Thomas Geminus published a copy of the illustrations in London, so English surgeons and physicians could see Vesalius\'s work. His approach encouraged others to check anatomy for themselves.'],
  ['Training in England', 'The College of Physicians, founded in 1518, licensed physicians in London. In 1540 barbers and surgeons were united in one company, which was allowed the bodies of four executed criminals a year for dissection. Training became more practical, but treatment changed little because better anatomy did not explain disease.'],
], view.factors('Vesalius\'s importance', [
  ['Method', 'dissecting himself and checking what he saw'],
  ['Evidence', 'accurate printed drawings of the human body'],
  ['Challenge', 'proved Galen wrong on many points'],
  ['Limit', 'anatomy did not explain the causes of disease'],
]), [
  view.timeline('Anatomy and training', [
    ['1514', 'Vesalius born in Brussels'],
    ['1518', 'The College of Physicians founded'],
    ['1537', 'Vesalius becomes professor at Padua'],
    ['1540', 'The Company of Barber-Surgeons formed'],
    ['1543', 'Vesalius publishes his book of anatomy'],
    ['1545', 'Geminus publishes the illustrations in London'],
  ]),
  view.people('People', [
    ['Andreas Vesalius', 'Anatomist who corrected Galen'],
    ['Titian\'s studio', 'Artists who made the illustrations'],
    ['Thomas Geminus', 'Published the drawings in London'],
    ['The Company of Barber-Surgeons', 'Trained surgeons and was allowed bodies to dissect'],
  ]),
  view.source('A source type: the title page of Vesalius\'s book', 'An engraving showing Vesalius dissecting a body himself in front of a crowded lecture theatre.', 'Useful for how Vesalius wanted to be seen, as a hands-on anatomist; it was designed to promote him and his book.'),
], [
  ['How did Vesalius\'s method differ from earlier professors?', ['He dissected bodies himself instead of reading Galen while an assistant cut', 'He refused to dissect any bodies and relied only on Galen\'s books', 'He used microscopes to look at germs inside the human body'], 0, 'Seeing for himself.'],
  ['Why had Galen made mistakes?', ['He had dissected animals rather than humans', 'He had never studied anatomy at any time', 'His books had been badly translated into English'], 0, 'Animal and human anatomy differ.'],
  ['Exam skill · Explain why. Which explains why Vesalius\'s work spread quickly?', ['Printed copies reproduced his drawings exactly, so readers across Europe, including England, could see them.', 'Vesalius was born in Brussels in 1514 and became a professor at Padua.', 'Vesalius showed that the human jawbone is one single bone and not two.'], 0, 'Explanation links printing to spread.'],
  ['Why did better anatomy not change treatment much?', ['It did not explain what caused disease', 'Doctors were banned from reading Vesalius', 'It was not published until 1900'], 0, 'Knowledge of the body is not knowledge of causes.'],
], [
  Q('mdd14.p1', 'Where did Vesalius teach?', ['Padua', 'Oxford', 'Paris'], 0, 'Padua is in Italy.', 'vesalius'),
  Q('mdd14.p2', 'When was his great book published?', ['1543', '1628', '1476'], 0, 'With detailed drawings.', 'book'),
  Q('mdd14.p3', 'How many bones did Galen say the jaw had?', ['Two', 'One', 'Seven'], 0, 'Vesalius showed one.', 'book'),
  Q('mdd14.p4', 'Who published the drawings in London?', ['Thomas Geminus', 'William Caxton', 'Thomas Linacre'], 0, 'He did so in 1545.', 'spread'),
  Q('mdd14.p5', 'How many bodies a year did the Barber-Surgeons receive?', ['Four', 'Forty', 'Four hundred'], 0, 'This began in 1540.', 'training'),
], [
  Q('mdd14.c1', 'Whose studio made the illustrations?', ['Titian\'s', 'Leonardo\'s', 'Rembrandt\'s'], 0, 'Skilled artists.', 'book'),
  Q('mdd14.c2', 'Whose bodies did Vesalius often dissect?', ['Executed criminals', 'Monks who had died', 'Soldiers killed in battle'], 0, 'This was what the law allowed.', 'vesalius'),
  Q('mdd14.c3', 'How many parts did Galen say the breastbone had?', ['Seven', 'Three', 'One'], 0, 'Vesalius showed three.', 'book'),
  Q('mdd14.c4', 'When were barbers and surgeons united?', ['1540', '1660', '1348'], 0, 'They became one company.', 'training'),
  Q('mdd14.c5', 'Who licensed physicians in London?', ['The College of Physicians', 'The new Royal Society', 'The Church of England'], 0, 'It did so from 1518.', 'training'),
  Q('mdd14.c6', 'What helped Vesalius\'s work spread?', ['Printing', 'Radio', 'The Church'], 0, 'Identical copies.', 'spread'),
  Q('mdd14.c7', 'How old was Vesalius at Padua?', ['About twenty-three', 'About sixty', 'About twelve'], 0, 'He was very young.', 'vesalius'),
  Q('mdd14.c8', 'Did Vesalius change treatment much?', ['No', 'Yes, completely', 'He ended bloodletting'], 0, 'Anatomy is not cause.', 'training'),
], {exam: 'Explain why Vesalius was important for the development of medicine in the period c1500–c1700. (12 marks)'}),

lesson(T, 'medicine.plague-compare', 'Plague in 1348 and 1665 compared', ['11 2.3'], [
  ['Ideas about the cause', 'In both 1348 and 1665 people blamed God, the stars and miasma, because nobody knew that fleas on rats carried the disease. By 1665 more people also believed plague passed from person to person, which encouraged efforts to separate the sick from the healthy.'],
  ['Treatments', 'In both outbreaks people prayed, carried herbs and tried bloodletting and remedies. In 1665 there were also new remedies, such as smoking tobacco to keep off bad air, and printed advice from the College of Physicians.'],
  ['Prevention and government', 'In 1348 the main government action was the king\'s order to clean London\'s streets. By 1665 national plague orders, first issued by the Privy Council in 1578, gave local authorities a plan: shutting up infected houses, appointing searchers and watchmen, banning gatherings and burying the dead at night.'],
  ['Why the difference, and what stayed the same', 'The greater organisation came from stronger local government, experience of repeated outbreaks and printed orders. But because the cause was still unknown, the plague still killed huge numbers in 1665, and some measures, like killing cats and dogs, probably made it worse.'],
], view.factors('1348 and 1665 compared', [
  ['Same', 'beliefs in God, the stars and miasma; prayer and herbs'],
  ['Different', 'organised plague orders: quarantine, searchers, watchmen'],
  ['Why different', 'stronger government; experience; printing'],
  ['Same outcome', 'the cause was unknown, so deaths were still huge'],
]), [
  view.timeline('From 1348 to 1665', [
    ['1348–49', 'The Black Death'],
    ['1349', 'Edward III orders London\'s streets cleaned'],
    ['1500s–1600s', 'Repeated outbreaks of plague in England'],
    ['1578', 'The Privy Council issues national plague orders'],
    ['1665', 'The Great Plague in London'],
  ]),
  view.people('People and bodies', [
    ['Edward III', 'Ordered street cleaning in 1349'],
    ['The Privy Council', 'Issued plague orders from 1578'],
    ['Searchers and watchmen', 'Officials in 1665'],
    ['The College of Physicians', 'Printed advice in 1665'],
  ]),
  view.source('A source type: a printed plague order', 'A printed set of orders from the Lord Mayor of London in 1665 setting out the rules for shutting up houses.', 'Useful for how organised the response was by 1665; it shows the rules, not how far they were obeyed.'),
], [
  ['What stayed the same between 1348 and 1665?', ['The real cause was unknown, so people blamed God, the stars and miasma', 'The government had no plan of any kind in either year', 'Both outbreaks were stopped quickly by quarantine'], 0, 'Continuity in ideas.'],
  ['What was new in 1665?', ['National plague orders gave local authorities an organised plan', 'Doctors knew that fleas on rats carried the plague', 'A vaccine was given to everyone living in London'], 0, 'Organisation, not knowledge.'],
  ['Exam skill · Explain one difference. Which explains a difference between 1348 and 1665?', ['In 1665 there was organised quarantine, because stronger government had plague orders from experience.', 'In 1665 the plague killed around a hundred thousand people in London.', 'In 1348 the plague first arrived in England at a port in Dorset.'], 0, 'A difference is explained by a cause.'],
  ['Why did killing cats and dogs probably make things worse?', ['They kill rats, so more rats and fleas survived', 'Their bodies blocked the streets of London', 'It caused a shortage of food in the city'], 0, 'Action based on the wrong cause.'],
], [
  Q('mdd15.p1', 'When were national plague orders first issued?', ['1578', '1348', '1665'], 0, 'By the Privy Council.', 'orders'),
  Q('mdd15.p2', 'Which belief grew stronger by 1665?', ['Plague passed person to person', 'Plague came from tiny germs', 'Plague was passed on in families'], 0, 'Encouraging separation.', 'ideas'),
  Q('mdd15.p3', 'What was the main government action in 1349?', ['Cleaning London\'s streets', 'Quarantine of every house', 'Banning all plays and fairs'], 0, 'Ordered by Edward III.', 'orders'),
  Q('mdd15.p4', 'Which new remedy was used in 1665?', ['Smoking tobacco', 'Antibiotic pills', 'Vaccination'], 0, 'Against bad air.', 'treatment'),
  Q('mdd15.p5', 'Who printed advice in 1665?', ['The College of Physicians', 'The Royal Society only', 'The Pope'], 0, 'It gave advice on treatment.', 'treatment'),
], [
  Q('mdd15.c1', 'Did anyone know fleas carried plague in 1665?', ['No', 'Yes', 'Only physicians'], 0, 'Found in the 1890s.', 'ideas'),
  Q('mdd15.c2', 'What did plague orders include?', ['Shutting up infected houses', 'Giving out free vaccines', 'Handing out antibiotics'], 0, 'Watchmen guarded them.', 'orders'),
  Q('mdd15.c3', 'Why was 1665 more organised?', ['Stronger government and experience', 'A full knowledge of germ theory', 'A much smaller population'], 0, 'Repeated outbreaks.', 'difference'),
  Q('mdd15.c4', 'What did both outbreaks share?', ['Prayer and herbs', 'Vaccines', 'Quarantine hospitals'], 0, 'This shows continuity.', 'treatment'),
  Q('mdd15.c5', 'When were the dead buried in 1665?', ['At night', 'At noon', 'Never'], 0, 'To limit contact.', 'orders'),
  Q('mdd15.c6', 'Which animals were wrongly killed in 1665?', ['Cats and dogs', 'Rats and mice', 'Horses and cattle'], 0, 'This helped rats.', 'difference'),
  Q('mdd15.c7', 'Did the death toll stay high in 1665?', ['Yes', 'No', 'Nobody died'], 0, 'The cause was still unknown.', 'difference'),
  Q('mdd15.c8', 'What was banned in 1665?', ['Public gatherings', 'Private prayer at home', 'Carrying sweet herbs'], 0, 'Crowds were feared.', 'orders'),
], {exam: 'Explain one way in which the response to plague in 1665 was different from the response in 1348. (4 marks)'}),
];
