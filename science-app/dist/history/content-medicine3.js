// Pearson Edexcel GCSE (9–1) History 1HI0, Option 11: Medicine in Britain, c1250–present.
// Key topic 3: c1700–c1900, medicine in eighteenth- and nineteenth-century Britain (specification 3.1–3.3).
// All teaching text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history08';

export const medicineTopic3 = {id: 'history.medicine.kt3', unit: '11', title: 'c1700–c1900: Medicine in 18th- and 19th-century Britain', paper: 'Paper 1 · Thematic study'};
const T = medicineTopic3.id;

export const medicineLessons3 = [
lesson(T, 'medicine.germ-theory', 'From spontaneous generation to germ theory', ['11 3.1'], [
  ['Continuity in ideas', 'In the early 1800s many people still believed miasma caused disease, and the Four Humours were slowly abandoned. When microscopes improved, scientists could see microbes, but most believed in spontaneous generation: that microbes were produced by decaying matter, so they were a result of disease rather than its cause.'],
  ['Louis Pasteur', 'Pasteur, a French chemist, was asked to find out why beer and wine went sour. In 1861 he published germ theory: microbes in the air cause decay. His experiments with swan-necked flasks showed that sterilised liquid stayed fresh when air-borne microbes could not reach it. At first he did not link specific germs to specific human diseases.'],
  ['Robert Koch', 'Koch, a German doctor, proved that particular bacteria cause particular diseases: anthrax (1876), tuberculosis (1882) and cholera (1883). He stained bacteria with dyes so they could be seen and photographed, and grew them on solid agar plates. Rivalry between French and German teams, fuelled by national pride, sped up discoveries.'],
  ['Impact in Britain', 'Germ theory was not accepted at once. Some British scientists, such as Henry Bastian, argued for spontaneous generation into the 1870s, and many doctors kept believing in miasma. By the 1880s and 1890s germ theory was widely accepted, and it changed ideas about cause more than any previous discovery.'],
], view.factors('Why did ideas about cause change?', [
  ['Science and technology', 'better microscopes; Koch\'s dyes, agar plates and photography'],
  ['Individuals', 'Pasteur\'s experiments; Koch\'s method of linking germs to diseases'],
  ['Government and rivalry', 'France and Germany funded research; national rivalry after the war of 1870–71'],
  ['Attitudes', 'many doctors resisted at first and kept believing in miasma'],
]), [
  view.timeline('Ideas about cause', [
    ['1840s', 'Miasma theory dominant; microbes seen but thought to be caused by decay'],
    ['1861', 'Pasteur publishes germ theory'],
    ['1870s', 'Bastian still argues for spontaneous generation in Britain'],
    ['1876', 'Koch identifies the anthrax bacterium'],
    ['1882', 'Koch identifies the tuberculosis bacterium'],
    ['1883', 'Koch identifies the cholera bacterium'],
  ]),
  view.people('People', [
    ['Louis Pasteur', 'French chemist who showed that microbes in the air cause decay'],
    ['Robert Koch', 'German doctor who linked specific bacteria to specific diseases'],
    ['Henry Bastian', 'British scientist who defended spontaneous generation'],
    ['Joseph Lister', 'British surgeon who used germ theory in surgery'],
  ]),
  view.source('A source type: a scientific paper', 'A published account of Pasteur\'s or Koch\'s experiments, describing the method and results.', 'Strong evidence of what was proved and how; it does not show how quickly ordinary doctors accepted the ideas.'),
], [
  ['What did spontaneous generation claim?', ['Microbes were produced by decaying matter, so they resulted from disease', 'Microbes in the air were the main cause of disease and of decay in food', 'Disease was sent by God as a punishment for the sins of a whole community'], 0, 'Microbes were seen as an effect, not a cause.'],
  ['What did Koch add to Pasteur\'s germ theory?', ['He proved that particular bacteria cause particular diseases', 'He showed that microbes in the air make liquids go sour', 'He discovered that cowpox protects people against smallpox'], 0, 'Koch linked specific germs to specific diseases.'],
  ['Exam skill · Explain why. Which explains why germ theory spread quickly after the 1860s?', ['Rivalry between France and Germany led both governments to fund research teams, which sped up discoveries.', 'Pasteur published his germ theory in 1861, and Koch identified the anthrax bacterium in 1876.', 'Many British doctors kept believing in miasma, and Henry Bastian defended spontaneous generation.'], 0, 'The answer links a factor to its effect.'],
  ['Why was germ theory not accepted at once in Britain?', ['Many doctors kept believing in miasma and some defended spontaneous generation', 'The government banned doctors from reading French and German scientific papers', 'Pasteur refused to publish his work outside France until the twentieth century'], 0, 'Existing ideas were hard to shift.'],
], [
  Q('med8.p1', 'When did Pasteur publish germ theory?', ['1861', '1796', '1883'], 0, 'Jenner\'s vaccine was 1796; Koch\'s cholera work 1883.', 'pasteur'),
  Q('med8.p2', 'What did Pasteur use to show that air carries microbes?', ['Swan-necked flasks', 'A stethoscope and thermometer', 'X-ray photographs of the body'], 0, 'Liquid stayed fresh when microbes could not reach it.', 'pasteur'),
  Q('med8.p3', 'Which bacterium did Koch identify in 1882?', ['Tuberculosis', 'Smallpox', 'The Black Death'], 0, 'Anthrax was 1876, cholera 1883.', 'koch'),
  Q('med8.p4', 'What did Koch use to see bacteria clearly?', ['Dyes to stain them', 'Swan-necked flasks', 'Carbolic acid spray'], 0, 'Stained bacteria could be photographed.', 'koch'),
  Q('med8.p5', 'Who defended spontaneous generation in Britain?', ['Henry Bastian', 'Joseph Lister', 'John Snow'], 0, 'He argued into the 1870s.', 'impact'),
], [
  Q('med8.c1', 'What was Pasteur first asked to investigate?', ['Why beer and wine went sour', 'Why cholera spread in Soho', 'Why surgery patients died'], 0, 'His work began in industry.', 'pasteur'),
  Q('med8.c2', 'What did Koch grow bacteria on?', ['Solid agar plates', 'Cowpox blisters', 'Bread and cheese'], 0, 'This let him study pure cultures.', 'koch'),
  Q('med8.c3', 'Which disease did Koch identify first, in 1876?', ['Anthrax', 'Cholera', 'Tuberculosis'], 0, 'TB followed in 1882.', 'koch'),
  Q('med8.c4', 'What sped up French and German research?', ['National rivalry and government funding', 'A shared international laboratory in Paris', 'Generous funding from the Catholic Church'], 0, 'After the war of 1870–71.', 'rivalry'),
  Q('med8.c5', 'What did most scientists think microbes were before germ theory?', ['A result of decay', 'The cause of all disease', 'Too small to exist'], 0, 'Spontaneous generation.', 'spontaneous'),
  Q('med8.c6', 'Which theory did many doctors still hold in the 1860s?', ['Miasma', 'Genetic causes', 'Magic bullets'], 0, 'Continuity in ideas.', 'impact'),
  Q('med8.c7', 'What did improved microscopes allow?', ['Microbes to be seen', 'Germs to be killed', 'Surgery without pain'], 0, 'Seeing them did not explain them.', 'spontaneous'),
  Q('med8.c8', 'By when was germ theory widely accepted in Britain?', ['The 1880s and 1890s', 'The early 1700s', 'The 1940s, after the war'], 0, 'Acceptance took decades.', 'impact'),
], {exam: 'Explain why there was rapid change in ideas about the cause of disease in the period c1700–c1900. (12 marks)'}),

lesson(T, 'medicine.nightingale', 'Florence Nightingale and hospital care', ['11 3.2'], [
  ['Hospitals before Nightingale', 'By 1800 more hospitals had been founded with charitable money, but they were often dirty and overcrowded, and nurses had little training and a poor reputation. Patients risked catching new infections there.'],
  ['The Crimean War', 'In 1854 Nightingale took a team of nurses to the British army hospital at Scutari, in Turkey. She improved cleanliness, ventilation, food and laundry. The death rate among patients fell sharply, from around 40 per cent to around 2 per cent according to commonly cited figures. Mary Seacole, a Jamaican nurse, also cared for soldiers, near the front line.'],
  ['Changing nursing and hospitals', 'Back in Britain, Nightingale used her fame and statistics to campaign. She wrote Notes on Nursing (1859) and set up the Nightingale School of Nursing at St Thomas\'s Hospital in 1860. She promoted "pavilion" hospitals with separate wards, plenty of windows and space between beds.'],
  ['Limits', 'Nightingale believed in miasma, not germ theory, so her reasons were wrong even though cleanliness and fresh air worked. Her improvements raised standards of care, but they did not change ideas about cause.'],
], view.factors('Nightingale\'s impact', [
  ['Care', 'clean wards, ventilation, good food and laundry'],
  ['Nursing', 'training school at St Thomas\'s; nursing a respected profession for women'],
  ['Hospital design', 'pavilion plan with airy, separate wards'],
  ['Limit', 'based on miasma, not germ theory'],
]), [
  view.timeline('Nightingale', [
    ['1854', 'Arrives at Scutari during the Crimean War'],
    ['1855', 'Death rates at Scutari fall sharply'],
    ['1859', 'Publishes Notes on Nursing and Notes on Hospitals'],
    ['1860', 'Nightingale School of Nursing opens at St Thomas\'s'],
  ]),
  view.people('People', [
    ['Florence Nightingale', 'Reformed nursing and hospital design'],
    ['Mary Seacole', 'Jamaican nurse who cared for soldiers near the front line'],
    ['Sidney Herbert', 'Government minister who sent Nightingale to Scutari'],
    ['Trained nurses', 'Spread Nightingale\'s methods to hospitals across Britain'],
  ]),
  view.source('A source type: a statistical diagram', 'A chart Nightingale produced showing soldiers\' deaths from disease compared with deaths from wounds, month by month.', 'Shows how she used evidence to persuade the government; it was made to support her campaign.'),
], [
  ['Why did deaths at Scutari fall?', ['Nightingale improved cleanliness, ventilation, food and laundry', 'Nightingale gave the soldiers antibiotics and vaccinations', 'The army stopped sending wounded soldiers to the hospital'], 0, 'Basic hygiene had a large effect.'],
  ['What was a pavilion hospital?', ['A hospital with separate, airy wards and space between beds', 'A temporary tent hospital built close to the battlefield', 'A hospital run by monks, attached to a large monastery'], 0, 'The design followed miasma ideas.'],
  ['Exam skill · Explain a difference. Which explains a difference between hospitals c1500–c1700 and c1800–c1900?', ['By the late 1800s hospitals had trained nurses, because Nightingale made nursing a profession.', 'Nightingale went to Scutari in 1854 and later wrote Notes on Nursing in 1859.', 'In both periods most people were still cared for at home by members of their family.'], 0, 'A difference contrasts periods and explains why.'],
  ['Why was Nightingale\'s work limited?', ['She believed in miasma, so it did not change ideas about cause', 'She refused to train any nurses after she returned from the war', 'Her ideas were banned by the army and ignored by the government'], 0, 'Right methods, wrong reasons.'],
], [
  Q('med9.p1', 'Where did Nightingale work during the Crimean War?', ['Scutari', 'Cambrai', 'Soho'], 0, 'An army hospital in Turkey.', 'nightingale'),
  Q('med9.p2', 'When did the Nightingale School of Nursing open?', ['1860', '1798', '1875'], 0, 'At St Thomas\'s Hospital.', 'nursing'),
  Q('med9.p3', 'Which book did Nightingale publish in 1859?', ['Notes on Nursing', 'Philosophical Transactions', 'On the Mode of Communication of Cholera'], 0, 'It became a guide for nurses.', 'nursing'),
  Q('med9.p4', 'Which theory did Nightingale believe in?', ['Miasma', 'Germ theory', 'Genetic causes'], 0, 'Fresh air was meant to clear bad air.', 'limits'),
  Q('med9.p5', 'Who cared for soldiers near the Crimean front line?', ['Mary Seacole', 'Elizabeth Garrett Anderson', 'Marie Curie'], 0, 'She was a Jamaican nurse.', 'nightingale'),
], [
  Q('med9.c1', 'Roughly what did the death rate at Scutari fall to?', ['About 2 per cent', 'About 40 per cent', 'About 20 per cent'], 0, 'From about 40 per cent.', 'nightingale'),
  Q('med9.c2', 'How did Nightingale persuade the government?', ['Statistics and fame', 'Threats and strikes', 'Royal decree'], 0, 'She used evidence.', 'nursing'),
  Q('med9.c3', 'Which hospital design did Nightingale promote?', ['Pavilion wards', 'Underground wards', 'Single large hall'], 0, 'Airy, separate wards.', 'design'),
  Q('med9.c4', 'What was the reputation of nurses before Nightingale?', ['Poor, with little training', 'High, with long training', 'They did not exist'], 0, 'She made it respected.', 'nursing'),
  Q('med9.c5', 'Which improvement did Nightingale make at Scutari?', ['Cleaner wards and better food', 'Antiseptic surgery with carbolic', 'Vaccination of all the soldiers'], 0, 'Basic hygiene saved lives.', 'nightingale'),
  Q('med9.c6', 'Why did Nightingale\'s methods work despite her beliefs?', ['Cleanliness reduced germs', 'Bad air was the real cause', 'The war ended'], 0, 'Right methods, wrong reasons.', 'limits'),
  Q('med9.c7', 'Who sent Nightingale to Scutari?', ['Sidney Herbert', 'Edwin Chadwick', 'Queen Victoria herself'], 0, 'A government minister.', 'nightingale'),
  Q('med9.c8', 'What was a lasting result of Nightingale\'s work?', ['Nursing became a trained profession', 'Germ theory was proved by her work', 'Surgery became painless for patients'], 0, 'Training spread.', 'nursing'),
], {exam: 'Explain one way in which hospital care in the period c1800–c1900 was different from care in the period c1500–c1700. (4 marks)'}),

lesson(T, 'medicine.surgery', 'Surgery: anaesthetics and antiseptics', ['11 3.2'], [
  ['Three problems', 'In 1800 surgery faced pain, infection and blood loss. Surgeons worked fast, often amputating a leg in under a minute, and many patients died of shock or of infection afterwards.'],
  ['Anaesthetics', 'Ether was first used in Britain in 1846. In 1847 James Simpson, an Edinburgh doctor, discovered that chloroform worked as an anaesthetic. It became more accepted after Queen Victoria used it during childbirth in 1853. But some patients died from overdoses, such as fifteen-year-old Hannah Greener in 1848, and some people argued that pain was natural or God-given.'],
  ['The "black period"', 'Anaesthetics let surgeons attempt longer and deeper operations. Without any understanding of germs, this made infection worse, so death rates after surgery may have risen. Historians sometimes call this the black period of surgery.'],
  ['Antiseptics and asepsis', 'Joseph Lister, a surgeon in Glasgow, read Pasteur\'s work and from 1865 used carbolic acid to clean wounds, dressings and instruments, and later as a spray in the operating theatre. Infection rates fell. Some surgeons resisted, finding carbolic unpleasant. By the 1890s aseptic surgery, which keeps germs out with steam-sterilised instruments, gowns and rubber gloves, was replacing it.'],
], view.factors('What helped and hindered surgery?', [
  ['Helped', 'Simpson\'s chloroform; Lister\'s use of germ theory; Queen Victoria\'s example'],
  ['Hindered', 'deaths from overdoses; surgeons\' resistance to carbolic; belief that pain was natural'],
  ['Unintended effect', 'longer operations raised infection rates before antiseptics'],
  ['Next step', 'aseptic surgery by the 1890s'],
]), [
  view.timeline('Surgery', [
    ['1846', 'Ether first used in an operation in Britain'],
    ['1847', 'Simpson discovers chloroform\'s effect'],
    ['1848', 'Hannah Greener dies under chloroform'],
    ['1853', 'Queen Victoria uses chloroform in childbirth'],
    ['1865', 'Lister first uses carbolic acid'],
    ['1890s', 'Aseptic surgery spreads'],
  ]),
  view.people('People', [
    ['James Simpson', 'Discovered chloroform\'s anaesthetic effect'],
    ['Joseph Lister', 'Used carbolic acid as an antiseptic'],
    ['Queen Victoria', 'Her use of chloroform made it acceptable'],
    ['Hannah Greener', 'Died under chloroform, showing its dangers'],
  ]),
  view.source('A source type: a surgeon\'s published case notes', 'Lister\'s account of treating patients with compound fractures using carbolic acid, with the outcomes recorded.', 'Valuable evidence of his method and results; written by Lister himself to persuade other surgeons.'),
], [
  ['Why did anaesthetics at first make some surgery more dangerous?', ['Longer, deeper operations meant more chance of infection', 'Chloroform itself carried germs into the open wounds', 'Surgeons stopped washing because the patients felt no pain'], 0, 'Without germ theory, infection rose.'],
  ['How did Lister use Pasteur\'s ideas?', ['He used carbolic acid to kill germs in wounds and on instruments', 'He grew bacteria on agar plates to identify diseases in patients', 'He made a vaccine against infection from weakened germs'], 0, 'Germ theory applied to surgery.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Anaesthetics solved pain, but surgery only became safer when antiseptics tackled infection too.', 'Anaesthetics were very important because they were a new discovery in the 1840s.', 'Anaesthetics made no difference, because many patients still died after operations.'], 0, 'A supported judgement weighs both problems.'],
  ['Why did some surgeons resist carbolic acid?', ['It was unpleasant, irritated the skin and slowed operations', 'It was banned by Parliament because it caused explosions', 'It was too expensive for any hospital in Britain to buy'], 0, 'Practical objections slowed change.'],
], [
  Q('med10.p1', 'Who discovered chloroform\'s anaesthetic effect?', ['James Simpson', 'Joseph Lister', 'John Snow'], 0, 'In Edinburgh, 1847.', 'anaesthetics'),
  Q('med10.p2', 'What did Lister use as an antiseptic?', ['Carbolic acid', 'Chloroform gas', 'Penicillin mould'], 0, 'He began using it in 1865.', 'antiseptics'),
  Q('med10.p3', 'Who made chloroform more acceptable in 1853?', ['Queen Victoria', 'Florence Nightingale', 'Hannah Greener'], 0, 'She used it in childbirth.', 'anaesthetics'),
  Q('med10.p4', 'What were the three problems of surgery?', ['Pain, infection and blood loss', 'Cost, time and a lack of space', 'Diet, rest and a lack of exercise'], 0, 'Each needed a solution.', 'problems'),
  Q('med10.p5', 'What is aseptic surgery?', ['Keeping germs out of the theatre', 'Killing germs with a carbolic spray', 'Surgery carried out without anaesthetic'], 0, 'Sterilisation replaced spraying.', 'antiseptics'),
], [
  Q('med10.c1', 'Which anaesthetic was first used in Britain in 1846?', ['Ether', 'Chloroform', 'Nitrous oxide gas'], 0, 'Chloroform followed in 1847.', 'anaesthetics'),
  Q('med10.c2', 'Who died under chloroform in 1848?', ['Hannah Greener', 'Mary Seacole', 'Sarah Nelmes'], 0, 'She was fifteen.', 'anaesthetics'),
  Q('med10.c3', 'What is the "black period" of surgery?', ['When infection rose after anaesthetics', 'Surgery in the Middle Ages before 1250', 'Surgery during the Great Plague of 1665'], 0, 'Longer operations, more infection.', 'black-period'),
  Q('med10.c4', 'Whose work did Lister read?', ['Pasteur\'s', 'Jenner\'s', 'Harvey\'s'], 0, 'He applied germ theory.', 'antiseptics'),
  Q('med10.c5', 'Where did Lister work when he began using carbolic?', ['Glasgow', 'Edinburgh', 'Manchester'], 0, 'At the Royal Infirmary.', 'antiseptics'),
  Q('med10.c6', 'What did aseptic surgery use?', ['Steam-sterilised instruments and rubber gloves', 'A stronger carbolic spray used over the patient', 'Sweet-smelling herbs and prayers before operating'], 0, 'This spread by the 1890s.', 'antiseptics'),
  Q('med10.c7', 'Why did some people oppose anaesthetics?', ['They thought pain was natural or God-given', 'They had been made illegal by Parliament', 'They were far too cheap to be trusted'], 0, 'Attitudes slowed change.', 'anaesthetics'),
  Q('med10.c8', 'Why did surgeons operate very fast before anaesthetics?', ['To limit pain and shock', 'To save money', 'Hospitals closed early'], 0, 'Speed reduced suffering.', 'problems'),
], {exam: '"Anaesthetics were the most important development in surgery in the period c1700–c1900." How far do you agree? (16 marks)'}),

lesson(T, 'medicine.jenner', 'Case study: Edward Jenner and smallpox vaccination', ['11 3.3', '11 3.2'], [
  ['Smallpox and inoculation', 'Smallpox killed many people in the 1700s and scarred survivors. Inoculation, brought to Britain by Lady Mary Wortley Montagu in the 1720s, gave people a mild dose of smallpox to protect them. It worked, but some people died or spread the disease.'],
  ['Jenner\'s experiment', 'Jenner, a country doctor in Gloucestershire, noticed that milkmaids who had caught cowpox did not catch smallpox. In 1796 he took material from a cowpox blister on milkmaid Sarah Nelmes and put it into a cut on James Phipps, a boy, then later exposed him to smallpox. Phipps did not catch it.'],
  ['Publication and opposition', 'Jenner published his findings in 1798. The Royal Society had refused to publish them. Some doctors who earned money from inoculation opposed him; some people disliked using material from cows, and cartoons mocked him. Jenner could not explain how vaccination worked, because germ theory came later.'],
  ['Government action', 'Parliament gave Jenner £10,000 in 1802. In 1840 inoculation was banned and vaccination made free; in 1853 vaccination of infants became compulsory. This was unusual government involvement in health at the time, and smallpox deaths fell.'],
], view.factors('Why did vaccination succeed?', [
  ['Individual', 'Jenner\'s careful observation and experiment'],
  ['Science and technology', 'publishing spread his findings'],
  ['Government', 'grants to Jenner; inoculation banned 1840; compulsory vaccination 1853'],
  ['Against it', 'opposition from inoculators; no explanation of how it worked'],
]), [
  view.timeline('Smallpox', [
    ['1720s', 'Inoculation introduced to Britain'],
    ['1796', 'Jenner vaccinates James Phipps'],
    ['1798', 'Jenner publishes his findings'],
    ['1802', 'Parliament grants Jenner £10,000'],
    ['1840', 'Inoculation banned; free vaccination'],
    ['1853', 'Vaccination of infants made compulsory'],
  ]),
  view.people('People', [
    ['Edward Jenner', 'Country doctor who developed vaccination'],
    ['James Phipps', 'The boy Jenner vaccinated in 1796'],
    ['Sarah Nelmes', 'Milkmaid whose cowpox was used'],
    ['Lady Mary Wortley Montagu', 'Brought inoculation to Britain'],
  ]),
  view.source('A source type: a satirical cartoon', 'A printed cartoon showing vaccinated people sprouting cows\' heads, mocking Jenner\'s vaccine.', 'Useful evidence of public fears and opposition; it was drawn to mock, so it exaggerates.'),
], [
  ['What did Jenner notice?', ['Milkmaids who had caught cowpox did not catch smallpox', 'People who drank milk every day never caught any disease', 'Children who were inoculated always died of the smallpox'], 0, 'Observation started the investigation.'],
  ['Why did some doctors oppose vaccination?', ['They earned money from inoculation and disliked the change', 'They had already proved that vaccination did not work at all', 'The Church had banned vaccination as against God\'s will'], 0, 'Money and habit slowed acceptance.'],
  ['Exam skill · Explain the significance. Which best explains why government involvement mattered?', ['Banning inoculation and making vaccination compulsory meant far more people were protected.', 'Parliament gave Jenner £10,000 in 1802, which was a very large sum of money at the time.', 'Jenner published his findings in 1798 after the Royal Society had refused them.'], 0, 'Significance links action to outcome.'],
  ['Why could Jenner not explain how vaccination worked?', ['Germ theory had not yet been developed', 'He refused to look at cowpox under a microscope', 'He lost his notes before he could publish them'], 0, 'Practice ran ahead of theory.'],
], [
  Q('med11.p1', 'When did Jenner vaccinate James Phipps?', ['1796', '1853', '1861'], 0, 'Publication followed in 1798.', 'jenner'),
  Q('med11.p2', 'Which disease protects against smallpox?', ['Cowpox', 'Chickenpox', 'Measles'], 0, 'Milkmaids caught it.', 'jenner'),
  Q('med11.p3', 'What was inoculation?', ['Giving a mild dose of smallpox', 'Giving people a dose of cowpox', 'Isolating patients in pest houses'], 0, 'It worked but was risky.', 'inoculation'),
  Q('med11.p4', 'When did infant vaccination become compulsory?', ['1853', '1798', '1875'], 0, 'Inoculation was banned in 1840.', 'government'),
  Q('med11.p5', 'Who refused to publish Jenner\'s findings?', ['The Royal Society', 'The House of Commons', 'The Church of England'], 0, 'He published them himself.', 'opposition'),
], [
  Q('med11.c1', 'Who brought inoculation to Britain?', ['Lady Mary Wortley Montagu', 'Florence Nightingale', 'Queen Victoria and her doctors'], 0, 'She did so in the 1720s.', 'inoculation'),
  Q('med11.c2', 'How much did Parliament give Jenner in 1802?', ['£10,000', '£100', '£1 million'], 0, 'A very large sum then.', 'government'),
  Q('med11.c3', 'Whose cowpox did Jenner use?', ['Sarah Nelmes', 'Hannah Greener', 'Mary Seacole'], 0, 'She was a milkmaid.', 'jenner'),
  Q('med11.c4', 'What happened to inoculation in 1840?', ['It was banned', 'It became compulsory', 'It became free'], 0, 'Vaccination became free.', 'government'),
  Q('med11.c5', 'Why did some people dislike vaccination?', ['It used material from cows', 'It cost far too much money', 'It was a French invention'], 0, 'Cartoons mocked it.', 'opposition'),
  Q('med11.c6', 'Where did Jenner work?', ['Gloucestershire', 'Edinburgh, Scotland', 'London hospitals'], 0, 'He was a country doctor.', 'jenner'),
  Q('med11.c7', 'What was the main weakness of Jenner\'s discovery?', ['He could not explain how it worked', 'It did not protect people against smallpox', 'It was banned by Parliament in 1802'], 0, 'Germ theory came later.', 'opposition'),
  Q('med11.c8', 'What was unusual about government action on smallpox?', ['It got involved in health', 'It ignored vaccination', 'It banned all doctors'], 0, 'Laissez-faire usually ruled.', 'government'),
], {exam: 'Explain one way in which the government\'s role in preventing disease in the 1800s was different from its role in the 1600s. (4 marks)'}),

lesson(T, 'medicine.cholera', 'Case study: cholera, John Snow and public health', ['11 3.3', '11 3.2'], [
  ['Cholera in industrial towns', 'Cholera first reached Britain in 1831–32 and returned in 1848–49 and 1854. Fast-growing towns had crowded housing, shared privies and water drawn from rivers and pumps polluted by sewage. Most people blamed miasma.'],
  ['John Snow, 1854', 'Snow, a London doctor, suspected cholera spread through water. In the 1854 outbreak in Soho he mapped the deaths and found they clustered around the Broad Street pump. Workers at a nearby brewery, who drank beer, and inmates of a workhouse with its own well escaped. He persuaded the local authorities to remove the pump handle, and cases fell.'],
  ['Limits of Snow\'s work', 'Snow could not identify what in the water caused cholera, so many people, including officials, still believed in miasma. Koch identified the cholera bacterium only in 1883. But Snow\'s evidence later supported the case for clean water.'],
  ['Public health reform', 'The 1848 Public Health Act was voluntary, so many towns did nothing. After the "Great Stink" of 1858, Joseph Bazalgette built London\'s new sewer system. The 1875 Public Health Act was compulsory: councils had to provide clean water, sewers and drainage and appoint a Medical Officer of Health. Germ theory, better statistics and the 1867 extension of the vote to many working men all pushed government to act.'],
], view.factors('Why was the 1875 Act passed?', [
  ['Science', 'germ theory and Snow\'s evidence linked dirty water to disease'],
  ['Government', 'a shift away from laissez-faire; councils given duties'],
  ['Politics', 'many working men gained the vote in 1867'],
  ['Events', 'repeated cholera outbreaks and the Great Stink of 1858'],
]), [
  view.timeline('Cholera and public health', [
    ['1831–32', 'First cholera epidemic in Britain'],
    ['1848', 'First Public Health Act (voluntary)'],
    ['1854', 'Snow and the Broad Street pump'],
    ['1858', 'The Great Stink in London'],
    ['1867', 'Second Reform Act gives many working men the vote'],
    ['1875', 'Second Public Health Act (compulsory)'],
  ]),
  view.people('People', [
    ['John Snow', 'Linked cholera to a contaminated water pump'],
    ['Edwin Chadwick', 'His 1842 report linked poverty, dirt and disease'],
    ['Joseph Bazalgette', 'Engineer of London\'s sewer system'],
    ['Medical Officers of Health', 'Officials every council had to appoint after 1875'],
  ]),
  view.source('A source type: Snow\'s map of Soho', 'A street map marking each cholera death in the 1854 outbreak and the position of the water pumps.', 'Powerful evidence of a link between the pump and deaths; it shows correlation, not the germ itself.'),
], [
  ['Why did the brewery workers escape cholera?', ['They drank beer, not water from the Broad Street pump', 'They had all been vaccinated against cholera in 1853', 'They lived outside London and only visited Soho'], 0, 'The exceptions supported Snow\'s theory.'],
  ['Why did many officials still doubt Snow?', ['He could not identify what in the water caused cholera', 'His map showed no deaths near the Broad Street pump', 'He refused to share his evidence with anyone else'], 0, 'Correlation was not yet explanation.'],
  ['Exam skill · Explain the difference. Which explains how the 1875 Act differed from the 1848 Act?', ['The 1875 Act was compulsory, so every council had to provide clean water and sewers.', 'The 1848 Act was passed after the second outbreak of cholera reached Britain.', 'John Snow mapped deaths in Soho in 1854 and removed the handle of a water pump.'], 0, 'The difference is explained by its effect.'],
  ['Why did the vote in 1867 matter for public health?', ['Politicians had to respond to working men who wanted better conditions', 'It gave councils the money to build hospitals in every single town', 'It made John Snow a Member of Parliament for the Soho district'], 0, 'Political change encouraged reform.'],
], [
  Q('med12.p1', 'Which pump did Snow link to cholera?', ['Broad Street', 'Baker Street', 'Fleet Street'], 0, 'In Soho, London, in 1854.', 'snow'),
  Q('med12.p2', 'When was the compulsory Public Health Act passed?', ['1875', '1848', '1854'], 0, '1848 was voluntary.', 'public-health'),
  Q('med12.p3', 'What did most people blame for cholera?', ['Miasma', 'Germs in the water', 'Cowpox'], 0, 'Bad air from filth.', 'snow'),
  Q('med12.p4', 'Who built London\'s new sewer system?', ['Joseph Bazalgette', 'Edwin Chadwick', 'Joseph Lister of Glasgow'], 0, 'After the Great Stink.', 'public-health'),
  Q('med12.p5', 'When did Koch identify the cholera bacterium?', ['1883', '1854', '1831'], 0, 'After Snow\'s death.', 'snow-limits'),
], [
  Q('med12.c1', 'What did Snow do to the pump?', ['Had its handle removed', 'Had it painted with a red cross', 'Moved it to another street'], 0, 'Cases then fell.', 'snow'),
  Q('med12.c2', 'Which group in Soho also escaped cholera?', ['Workhouse inmates with their own well', 'Families living closest to the pump itself', 'Children who drank water from the pump daily'], 0, 'They did not use the pump.', 'snow'),
  Q('med12.c3', 'What was the Great Stink?', ['A heatwave smell from the Thames in 1858', 'The name given to the plague of 1665', 'The smell of Lister\'s carbolic spray'], 0, 'It pushed Parliament to act.', 'public-health'),
  Q('med12.c4', 'What did the 1875 Act require councils to appoint?', ['A Medical Officer of Health', 'A plague doctor with a mask', 'A bishop to oversee hospitals'], 0, 'To oversee public health.', 'public-health'),
  Q('med12.c5', 'Why was the 1848 Act weak?', ['It was voluntary', 'It was compulsory', 'It was never passed'], 0, 'Many towns did nothing.', 'public-health'),
  Q('med12.c6', 'Whose 1842 report linked dirt and disease?', ['Edwin Chadwick', 'John Snow', 'Florence Nightingale'], 0, 'On the poor\'s living conditions.', 'public-health'),
  Q('med12.c7', 'What did Snow\'s map show?', ['Deaths clustered round the pump', 'Deaths spread evenly across London', 'No deaths at all near the pump'], 0, 'Evidence of a link.', 'snow'),
  Q('med12.c8', 'When did cholera first reach Britain?', ['1831–32', '1665–66', '1348–49'], 0, 'From Asia via Europe.', 'snow'),
], {exam: 'Explain why there were improvements in public health in the period c1800–c1900. (12 marks)'}),
];
