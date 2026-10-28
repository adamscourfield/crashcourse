// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 1 thematic study, Option 11: Medicine in Britain,
// c1250–present. Key topic 1: c1250–c1500, medicine in medieval England (specification 1.1–1.3).
// The thematic study asks how far ideas, prevention, treatment and care changed, and which factors
// (individuals, institutions such as the Church and government, science and technology, attitudes
// in society) caused change or continuity. All teaching text and questions are original.
import {Q, lesson, view} from './build.js?v=20261028-history05';

export const medicineTopic1 = {id: 'history.medicine.kt1', unit: '11', title: 'c1250–c1500: Medicine in medieval England', paper: 'Paper 1 · Thematic study'};
const T = medicineTopic1.id;

export const medicineLessons1 = [
lesson(T, 'medicine.medieval-ideas', 'Medieval ideas about the causes of disease', ['11 1.1'], [
  ['Studying change over time', 'This thematic study follows medicine in Britain from about 1250 to today. For each period ask: what did people believe caused disease, how did they prevent and treat it, and who cared for the sick? Then ask which factors brought change or kept things the same: individuals, institutions such as the Church and government, science and technology, and attitudes in society.'],
  ['Supernatural and religious explanations', 'Most people believed God sent disease, often as a punishment for sin or a test of faith. Many also believed the movement of the planets and stars affected health; physicians used astrological charts to decide when to treat a patient.'],
  ['The Four Humours and miasma', 'Rational explanations came from ancient Greece. Hippocrates taught that the body had four humours (blood, phlegm, yellow bile and black bile) and that illness came from an imbalance. Many people also believed in miasma: bad air from rotting matter, such as sewage or dead bodies, could carry disease.'],
  ['Why Galen lasted', 'The Roman doctor Galen developed the humours into the Theory of Opposites: treat too much of one humour with its opposite. His books were the basis of medical training for over a thousand years. The Church supported his ideas because they fitted the Christian belief that God designed the body, and it controlled the universities where physicians trained.'],
], view.factors('Medieval explanations of disease', [
  ['Religious', 'God sent disease as punishment or test'],
  ['Astrological', 'the planets and stars influenced health'],
  ['The Four Humours', 'an imbalance of blood, phlegm, yellow bile and black bile'],
  ['Miasma', 'bad air from rotting matter'],
]), [
  view.timeline('Where the ideas came from', [
    ['c400 BC', 'Hippocrates and the Four Humours'],
    ['c AD 130–210', 'Galen: Theory of Opposites; studies of anatomy (mainly on animals)'],
    ['c1100s–1200s', 'Galen\'s works taught in European universities'],
    ['c1250–1500', 'Physicians in England trained from Galen\'s texts'],
  ]),
  view.people('Who held the ideas', [
    ['Hippocrates', 'Ancient Greek doctor; the Four Humours and close observation of patients'],
    ['Galen', 'Roman doctor whose books dominated medical training'],
    ['The Church', 'Ran the universities; taught that disease could come from God'],
    ['Physicians', 'University-trained doctors who used humours and astrology'],
  ]),
  view.source('A source type: a medieval urine chart', 'A diagram showing flasks of urine in different colours, each linked to a condition or humour, used by physicians to diagnose patients.', 'Good evidence of how physicians diagnosed; it shows trained practice, not how most ordinary people understood illness.'),
], [
  ['Why did the Church support Galen\'s ideas?', ['They fitted the Christian belief that God designed the body', 'Galen had been a Christian bishop in Rome in the second century', 'Galen\'s books said disease could never be sent by God'], 0, 'Galen believed the body had a creator\'s design.'],
  ['How did the Four Humours explain illness?', ['Illness came from an imbalance of the four humours', 'Illness came from tiny living organisms in the blood', 'Illness came only from the position of the planets'], 0, 'Germs were not understood until the 1860s.'],
  ['Exam skill · Explain why. Which explains why ideas changed little in this period?', ['The Church controlled training and backed Galen, so new ideas were rarely tested or accepted.', 'Medieval people believed in God, the humours, astrology and miasma as causes of disease.', 'Galen was a Roman doctor who wrote many books about medicine, anatomy and treatments.'], 0, 'Explanation links a factor to the outcome.'],
  ['Why did people believe in miasma?', ['Bad smells often came from places where disease spread, such as sewage', 'Physicians had seen the germs in bad air under early microscopes', 'The Bible taught that bad air was the only cause of all illness'], 0, 'The link with dirt was real even if the explanation was wrong.'],
], [
  Q('med1.p1', 'Which were the Four Humours?', ['Blood, phlegm, yellow bile and black bile', 'The heart, the lungs, the liver and the brain', 'Earth, air, fire and water, with nothing else'], 0, 'Hippocrates linked each to qualities such as hot and wet.', 'humours'),
  Q('med1.p2', 'What was miasma?', ['Bad air from rotting matter believed to cause disease', 'A disease spread from person to person by fleas', 'A cure made from herbs and honey by apothecaries'], 0, 'Smell was linked to disease.', 'miasma'),
  Q('med1.p3', 'Who developed the Theory of Opposites?', ['Galen', 'Hippocrates', 'Vesalius'], 0, 'Galen built on Hippocrates\' humours.', 'galen'),
  Q('med1.p4', 'Why did physicians use astrological charts?', ['They believed the planets affected health', 'They used them to find their way to patients', 'They were required by Parliament'], 0, 'Astrology guided timing of treatment.', 'religion'),
  Q('med1.p5', 'Which institution controlled medical training?', ['The Church', 'Parliament', 'The army'], 0, 'Universities were Church institutions.', 'church'),
], [
  Q('med1.c1', 'What did many medieval people believe about disease and God?', ['God sent disease as punishment for sin', 'God had no link with health or illness', 'God only caused accidents and injuries'], 0, 'Religious explanations were common.', 'religion'),
  Q('med1.c2', 'Who first set out the Four Humours?', ['Hippocrates', 'Galen', 'William Harvey', 'Andreas Vesalius'], 0, 'Galen developed the theory later.', 'humours'),
  Q('med1.c3', 'How would the Theory of Opposites treat a cold?', ['With something hot, such as pepper', 'With more cold water and cold food', 'By letting the illness run its course'], 0, 'Opposites restored balance.', 'galen'),
  Q('med1.c4', 'Why did Galen\'s ideas last so long?', ['The Church backed them and controlled training', 'They had been proved correct by experiments', 'Parliament had made them part of the law'], 0, 'Institutional support kept them in place.', 'church'),
  Q('med1.c5', 'Which explanation was rational rather than supernatural?', ['The Four Humours', 'Punishment from God', 'The position of the stars'], 0, 'It looked for natural causes in the body.', 'humours'),
  Q('med1.c6', 'What did physicians examine to diagnose patients?', ['Urine', 'X-rays', 'Blood under a microscope'], 0, 'Urine charts linked colour to conditions.', 'diagnosis'),
  Q('med1.c7', 'Which factor most kept ideas the same in this period?', ['The power of the Church', 'New technology', 'Government public-health laws'], 0, 'The Church dominated learning.', 'church'),
  Q('med1.c8', 'What did the miasma theory link disease to?', ['Bad smells from rotting matter', 'Imbalanced humours and nothing else', 'Microbes living in drinking water'], 0, 'Smell was seen as the danger.', 'miasma'),
], {exam: 'Explain why there was little change in ideas about the causes of disease in the years c1250–c1500. (12 marks)'}),

lesson(T, 'medicine.medieval-treatment', 'Medieval prevention, treatment and care', ['11 1.2'], [
  ['Treatment linked to ideas', 'Treatments followed beliefs about causes. Religious treatments included prayer, pilgrimage to shrines and charms. To restore the humours, physicians and barber surgeons used bloodletting (cutting a vein or using leeches) and purging (making patients vomit or empty their bowels).'],
  ['Preventing disease', 'People tried to avoid illness through regimen sanitatis, a regime of healthy diet, exercise, sleep and bathing for those who could afford it. To fight miasma they carried posies of sweet-smelling herbs and burned herbs to purify the air. Towns made some rules about waste, but they were weakly enforced.'],
  ['Who treated the sick?', 'Physicians trained at university for years, diagnosed using urine and astrology, and were expensive. Apothecaries mixed herbal remedies and sold them. Barber surgeons carried out bloodletting, pulled teeth and did simple operations. Most care was given at home by women, using remedies passed down in families.'],
  ['Hospitals', 'Hospitals were mostly run by the Church and focused on care and prayer rather than cure. Many cared for the elderly, travellers and the poor, and some refused people with infectious diseases. Monks and nuns provided food, warmth and rest.'],
], view.factors('Who gave care?', [
  ['Physicians', 'university trained; diagnosis and advice; costly'],
  ['Apothecaries', 'mixed and sold herbal remedies'],
  ['Barber surgeons', 'bloodletting, tooth pulling and simple surgery'],
  ['Women at home', 'most everyday care, using family remedies'],
  ['Church hospitals', 'care, rest and prayer rather than cure'],
]), [
  view.timeline('Care in medieval England', [
    ['1123', 'St Bartholomew\'s Hospital founded in London'],
    ['1200s–1400s', 'Hundreds of small Church-run hospitals in England'],
    ['1348–49', 'The Black Death tests every approach'],
    ['c1500', 'Care still mainly at home and from the Church'],
  ]),
  view.people('People in care', [
    ['Physician', 'Trained for years at university in Galen\'s ideas'],
    ['Apothecary', 'Shopkeeper who mixed remedies from herbs and other ingredients'],
    ['Barber surgeon', 'Cut hair and also let blood and treated wounds'],
    ['Monks and nuns', 'Ran hospitals and provided care'],
  ]),
  view.source('A source type: a book of herbal remedies', 'A handwritten collection of recipes for remedies made from plants, honey and other ingredients, kept by a household or monastery.', 'Useful for what treatments were used; it does not show whether they worked or how often they were used.'),
], [
  ['Why was bloodletting used?', ['To remove excess blood and rebalance the humours', 'To test blood for germs under a microscope', 'To find the patient\'s blood group for transfusion'], 0, 'Treatment followed the humoral theory.'],
  ['Why did people carry posies of herbs?', ['To protect themselves from miasma, the bad air believed to carry disease', 'Because herbs killed the fleas that were already known to carry disease', 'Because the Church fined anyone who did not carry them in the street'], 0, 'Prevention followed the miasma theory.'],
  ['Exam skill · Explain a similarity. Which describes a similarity with later periods?', ['Most care was given at home by women, which was still true in the 1500s and 1600s.', 'Medieval physicians trained at university for many years using the books of Galen.', 'Barber surgeons pulled teeth, cut hair and carried out bloodletting for their patients.'], 0, 'A similarity compares across periods.'],
  ['What was the main aim of most medieval hospitals?', ['Care, rest and prayer rather than cure', 'Surgery to remove diseased organs', 'Training doctors in new scientific methods'], 0, 'They were religious institutions.'],
], [
  Q('med2.p1', 'What was purging?', ['Making a patient vomit or empty their bowels', 'Praying at the shrine of a saint for a cure', 'Carrying sweet-smelling herbs to clean the air'], 0, 'It removed excess humours.', 'treatment'),
  Q('med2.p2', 'Who mixed and sold herbal remedies?', ['Apothecaries', 'Physicians', 'Barber surgeons'], 0, 'They worked from shops.', 'care'),
  Q('med2.p3', 'What was regimen sanitatis?', ['A regime of diet, exercise and rest to stay healthy', 'A Church law about who could enter hospitals', 'A type of surgery done by barber surgeons'], 0, 'It aimed to prevent imbalance.', 'prevention'),
  Q('med2.p4', 'Who gave most everyday care?', ['Women at home', 'University physicians', 'The government'], 0, 'Physicians were too expensive for most.', 'care'),
  Q('med2.p5', 'Who mainly ran medieval hospitals?', ['The Church', 'Town councils', 'Physicians'], 0, 'Monks and nuns cared for patients.', 'hospitals'),
], [
  Q('med2.c1', 'Why were leeches used?', ['For bloodletting', 'To clean wounds', 'To test urine'], 0, 'They removed blood to rebalance humours.', 'treatment'),
  Q('med2.c2', 'What did barber surgeons do?', ['Bloodletting, pulling teeth and simple operations', 'Mixing and selling herbal remedies only', 'Training new physicians at the universities'], 0, 'They were practical craftsmen.', 'care'),
  Q('med2.c3', 'Why did some hospitals refuse infectious patients?', ['They feared spreading disease to others', 'The law banned all treatment of the sick', 'Infectious people were sent abroad by ship'], 0, 'Care was for the elderly and poor.', 'hospitals'),
  Q('med2.c4', 'Which was a religious treatment?', ['Pilgrimage to a shrine', 'Bloodletting with leeches', 'Purging with laxatives'], 0, 'Faith was part of healing.', 'treatment'),
  Q('med2.c5', 'How did people try to purify the air?', ['Burning herbs and carrying posies', 'Opening every window in the depths of winter', 'Using vaccination to protect the town'], 0, 'This followed the miasma theory.', 'prevention'),
  Q('med2.c6', 'Why could few people see a physician?', ['Physicians were expensive', 'Physicians were banned in towns', 'Physicians only treated animals'], 0, 'Training was long and costly.', 'care'),
  Q('med2.c7', 'How was treatment linked to ideas about cause?', ['Bloodletting followed the humours; posies followed miasma', 'Treatments were chosen at random by each physician', 'All the treatments came from the germ theory of disease'], 0, 'Ideas shaped every treatment.', 'treatment'),
  Q('med2.c8', 'Which London hospital was founded in 1123?', ['St Bartholomew\'s', 'St Thomas\'s', 'Guy\'s', 'The Royal London'], 0, 'It is one of the oldest in England.', 'hospitals'),
], {exam: 'Explain one way in which medieval hospitals were different from hospitals in the period c1500–c1700. (4 marks)'}),

lesson(T, 'medicine.black-death', 'Case study: the Black Death, 1348–49', ['11 1.3'], [
  ['A new and terrible disease', 'The Black Death reached England in 1348, arriving at a port in Dorset and spreading quickly. It killed between a third and a half of the population. Most victims had swellings called buboes and died within days; another form attacked the lungs and spread from person to person.'],
  ['What people thought caused it', 'People explained it with existing ideas: God\'s punishment for sin; a bad alignment of the planets; miasma, the corrupted air; or an imbalance of the humours. Nobody knew it was spread by fleas carried by rats, a fact not discovered until the 1890s.'],
  ['Treatments', 'Treatments matched the ideas. People prayed and fasted, and some joined processions of flagellants who whipped themselves to show penance. Physicians let blood and purged patients, and some lanced the buboes. None of these worked.'],
  ['Attempts to stop it spreading', 'People carried herbs, lit fires and rang bells to drive away bad air, and avoided the sick if they could. In 1349 the king ordered the streets of London to be cleaned. These steps had little effect, because no one understood how the disease spread.'],
], view.factors('Explanations and actions', [
  ['God\'s punishment', 'prayer, fasting, flagellant processions'],
  ['The planets', 'little anyone could do except pray'],
  ['Miasma', 'herbs, fires, bells, cleaning streets'],
  ['The humours', 'bloodletting and purging'],
]), [
  view.timeline('The Black Death in England', [
    ['June 1348', 'Arrives at a port in Dorset'],
    ['Autumn 1348', 'Reaches London'],
    ['1349', 'The king orders London streets cleaned; spreads across the country'],
    ['1349–50', 'The outbreak declines; plague returns in later outbreaks'],
  ]),
  view.people('People', [
    ['Physicians', 'Used humoral treatments that did not work'],
    ['Flagellants', 'Groups who whipped themselves in public penance'],
    ['Edward III', 'King who ordered London streets cleaned in 1349'],
    ['Ordinary people', 'Relied on prayer, herbs and avoiding the sick'],
  ]),
  view.source('A source type: a monastic chronicle', 'A record of events written by a monk, such as an account of the plague arriving in his area.', 'Shows how an educated churchman explained the plague, often as God\'s will; numbers of deaths in chronicles are often guesses.'),
], [
  ['Why did no treatment for the Black Death work?', ['Nobody knew that it was spread by fleas carried by rats', 'Physicians refused to treat anyone with the plague', 'The Church banned all treatment for the disease'], 0, 'Treatments followed mistaken ideas.'],
  ['Why did the king order the streets cleaned?', ['People linked dirt and smells with bad air that spread disease', 'He knew rats in rubbish carried the fleas that spread plague', 'The Pope had ordered all Christian rulers to clean their cities'], 0, 'Action followed the miasma theory.'],
  ['Exam skill · Explain a difference. Which explains a difference between 1348 and 1665?', ['In 1665 the government ordered more organised action, such as quarantine, than in 1348.', 'In 1348 the Black Death killed between a third and a half of the population of England.', 'In both 1348 and 1665 people believed that bad air was one of the causes of the plague.'], 0, 'A difference compares the two periods directly.'],
  ['Which shows continuity in ideas about disease?', ['People explained the plague with existing ideas such as God, the humours and miasma', 'People discovered that fleas spread the plague and began to kill rats', 'People stopped believing in God after the plague ended in the year 1349'], 0, 'No new explanation emerged.'],
], [
  Q('med3.p1', 'When did the Black Death reach England?', ['1348', '1665', '1066'], 0, 'It arrived in Dorset in June 1348.', 'black-death'),
  Q('med3.p2', 'What were buboes?', ['Swellings caused by the plague', 'Small bags of herbs worn round the neck', 'Leeches used to let blood from patients'], 0, 'They gave bubonic plague its name.', 'black-death'),
  Q('med3.p3', 'Who whipped themselves in public penance?', ['Flagellants', 'Barber surgeons', 'Apothecaries'], 0, 'They believed it would win God\'s mercy.', 'bd-treatment'),
  Q('med3.p4', 'How much of the population died?', ['Between a third and a half', 'About one person in every hundred', 'Almost everyone in every village'], 0, 'Estimates vary within this range.', 'black-death'),
  Q('med3.p5', 'What really spread bubonic plague?', ['Fleas carried by rats', 'Bad smells from rotting rubbish', 'Unbalanced humours in the body'], 0, 'This was discovered in the 1890s.', 'bd-cause'),
], [
  Q('med3.c1', 'Which explanation did people give for the Black Death?', ['God\'s punishment for sin', 'Germs in the water supply', 'Genetic factors passed down in families'], 0, 'Religious explanations were common.', 'bd-cause'),
  Q('med3.c2', 'Why did people ring bells and light fires?', ['To drive away bad air', 'To warn of invasion', 'To call people to hospital'], 0, 'This followed the miasma theory.', 'bd-prevention'),
  Q('med3.c3', 'Which treatment followed the humoral theory?', ['Bloodletting', 'Pilgrimage', 'Ringing bells'], 0, 'It aimed to rebalance the body.', 'bd-treatment'),
  Q('med3.c4', 'What did the king order in 1349?', ['London\'s streets to be cleaned', 'All rats in the city to be killed', 'Every hospital in London to close'], 0, 'Dirt was linked to bad air.', 'bd-prevention'),
  Q('med3.c5', 'Why did the plague spread so fast?', ['No one knew how it spread, so the right steps were not taken', 'The government spread it deliberately to the poor', 'Doctors carried it on purpose from patient to patient'], 0, 'Ignorance of the cause was decisive.', 'bd-cause'),
  Q('med3.c6', 'When was the real cause of plague discovered?', ['In the 1890s', 'In 1349, during the outbreak', 'In 1665, during the Great Plague'], 0, 'Long after the medieval period.', 'bd-cause'),
  Q('med3.c7', 'Which belief linked the plague to the stars?', ['A bad alignment of the planets', 'Miasma rising from the rivers', 'The Theory of Opposites in the body'], 0, 'Astrology was part of medical thinking.', 'bd-cause'),
  Q('med3.c8', 'What does the Black Death show about medieval medicine?', ['Existing ideas could not explain or stop a new disease', 'Medieval medicine had already found the cause of disease', 'The government controlled all medical care in England'], 0, 'It exposed medicine\'s limits.', 'black-death'),
], {exam: '"The Church was the main reason why there was little progress in dealing with the Black Death." How far do you agree? (16 marks)'}),
];
