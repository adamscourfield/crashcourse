// Pearson Edexcel GCSE (9–1) History 1HI0, Option 11: Medicine in Britain, c1250–present.
// Depth lessons for key topic 1, c1250–c1500 (specification 1.1–1.3). Each follows its overview lesson.
// All text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.medicine.kt1';

export const medicineDepth1 = [
lesson(T, 'medicine.religion-cause', 'Supernatural and religious explanations', ['11 1.1'], [
  ['Disease as God\'s will', 'The Church taught that God controlled everything, so illness could be a punishment for sin or a test of faith. A sick person might be told to confess and pray. Because the Church was at the centre of village life, its explanation reached almost everyone and was rarely questioned.'],
  ['Saints, shrines and the king\'s touch', 'People prayed to saints linked to particular illnesses and travelled on pilgrimage to shrines, such as Thomas Becket\'s tomb at Canterbury, hoping for a cure. Many believed the monarch\'s touch could cure scrofula, a disease of the neck glands known as the "king\'s evil".'],
  ['Astrology', 'Educated physicians also believed that the positions of the planets and stars affected the body. A "zodiac man" diagram linked each part of the body to a star sign, and physicians carried folding almanacs to check the heavens before treating a patient or letting blood.'],
  ['Why these ideas lasted', 'There was no scientific way to see what caused disease, and religious and astrological ideas could explain sudden, unexplained illness and death. They were supported by the most powerful institution in society, the Church, and by the most educated men, the physicians.'],
], view.factors('Why supernatural ideas were believed', [
  ['The Church', 'dominated learning and daily life'],
  ['No alternative', 'nobody could see microbes or test causes'],
  ['Authority', 'physicians themselves used astrology'],
  ['Explanation', 'they made sense of sudden, unexplained death'],
]), [
  view.timeline('Faith and healing', [
    ['1170', 'Thomas Becket murdered; his shrine becomes a centre of pilgrimage'],
    ['1200s', 'Pilgrimage to healing shrines widespread'],
    ['1300s', 'Physicians use almanacs and zodiac charts'],
    ['1348', 'The Black Death is widely seen as God\'s punishment'],
  ]),
  view.people('People and practices', [
    ['Priests', 'Taught that illness could be a punishment or test'],
    ['Pilgrims', 'Travelled to shrines seeking cures'],
    ['Physicians', 'Checked the stars before treatment'],
    ['The monarch', 'Was believed to cure the "king\'s evil" by touch'],
  ]),
  view.source('A source type: a "zodiac man" illustration', 'A manuscript drawing of a man with star signs placed on different parts of his body, from a physician\'s almanac.', 'Useful for how astrology shaped medical practice; it shows what educated physicians believed, not ordinary people\'s ideas.'),
], [
  ['Why did people believe God caused disease?', ['The Church taught that God controlled everything and dominated daily life', 'Physicians had proved through experiments that sin caused illness', 'The king had passed a law saying that God was the cause of disease'], 0, 'Religious authority shaped ideas.'],
  ['How did physicians use astrology?', ['They checked the positions of the planets before treating or letting blood', 'They used telescopes to look for germs travelling from the stars', 'They refused to treat anyone born under certain star signs at all'], 0, 'Timing treatment by the heavens.'],
  ['Exam skill · Explain why. Which explains why supernatural explanations lasted so long?', ['Nobody could see what caused disease, so religious and astrological ideas filled the gap and were backed by the Church.', 'Many people went on pilgrimage to the shrine of Thomas Becket at Canterbury Cathedral in Kent.', 'A zodiac man diagram linked each different part of the body to one of the twelve star signs.'], 0, 'Explanation links the cause to why ideas lasted.'],
  ['What was the "king\'s evil"?', ['Scrofula, which the monarch\'s touch was believed to cure', 'A plague spread deliberately by the king\'s enemies', 'A tax on medicine paid by every parish to the Crown'], 0, 'Royal healing was a religious idea.'],
], [
  Q('mdd1.p1', 'Whose shrine at Canterbury attracted pilgrims?', ['Thomas Becket\'s', 'St Cuthbert\'s at Durham', 'Edward the Confessor\'s'], 0, 'He was murdered in 1170.', 'pilgrimage'),
  Q('mdd1.p2', 'What did a "zodiac man" show?', ['Star signs linked to body parts', 'The four humours in the blood', 'The route of a pilgrimage'], 0, 'Used in astrology.', 'astrology'),
  Q('mdd1.p3', 'What could disease be, according to the Church?', ['A punishment or a test', 'Caused by tiny germs', 'Passed on through genes'], 0, 'God controlled everything.', 'religion'),
  Q('mdd1.p4', 'What did physicians carry to check the heavens?', ['Folding almanacs', 'Pocket microscopes', 'Glass thermometers'], 0, 'Before bloodletting.', 'astrology'),
  Q('mdd1.p5', 'What was believed to cure scrofula?', ['The monarch\'s touch', 'Bloodletting alone', 'Swallowing gold'], 0, 'The "king\'s evil".', 'religion'),
], [
  Q('mdd1.c1', 'Why did few people question religious ideas?', ['The Church dominated life', 'They were scientifically proven', 'The king banned questions'], 0, 'It reached everyone.', 'why-lasted'),
  Q('mdd1.c2', 'What might a sick person be told to do?', ['Confess and pray', 'Take antibiotics', 'Have an X-ray'], 0, 'Illness could follow sin.', 'religion'),
  Q('mdd1.c3', 'Who used astrology in treatment?', ['Educated physicians', 'Only the poorest peasants', 'Nobody at all in England'], 0, 'It had authority.', 'astrology'),
  Q('mdd1.c4', 'Why did people go on pilgrimage?', ['To seek a cure at a shrine', 'To find new herbs abroad', 'To study at a university'], 0, 'They hoped for faith healing.', 'pilgrimage'),
  Q('mdd1.c5', 'What could people not see in this period?', ['The real causes of disease', 'The stars and the planets', 'Their own signs and symptoms'], 0, 'There were no microscopes.', 'why-lasted'),
  Q('mdd1.c6', 'What did people pray to for particular illnesses?', ['Saints', 'Planets', 'Kings'], 0, 'Each saint had links.', 'pilgrimage'),
  Q('mdd1.c7', 'When was treatment timed by astrology?', ['Before bloodletting', 'After the patient died', 'Never, by law'], 0, 'The heavens mattered.', 'astrology'),
  Q('mdd1.c8', 'What did religious ideas explain well?', ['Sudden, unexplained death', 'How germs spread illness', 'How the heart pumps blood'], 0, 'They made sense of tragedy.', 'why-lasted'),
], {exam: 'Explain why religious ideas about the cause of disease were so important in the period c1250–c1500. (12 marks)'}),

lesson(T, 'medicine.humours', 'The Four Humours and miasma', ['11 1.1'], [
  ['Hippocrates and observation', 'Hippocrates, a Greek doctor of the fifth century BC, taught that disease had natural causes rather than being sent by the gods. He stressed careful observation of the patient and recording of symptoms, an approach that was admired in medieval Europe even though his writings were often known only through later authors.'],
  ['The Four Humours', 'The theory held that the body contained four humours: blood, phlegm, yellow bile and black bile. Each was linked to one of the four elements, a season and a combination of hot, cold, wet and dry. Health meant balance; illness meant that one humour had become too strong. A heavy cold in winter, for example, was explained as an excess of phlegm.'],
  ['Diagnosing imbalance', 'Physicians diagnosed imbalances by examining a patient\'s urine, comparing its colour, smell and even taste with a chart, and by taking the pulse. The aim was to work out which humour was out of balance and restore it.'],
  ['Miasma', 'Many also believed that "miasma", bad air given off by rotting matter, swamps, sewage and dead bodies, caused disease. The idea made sense, because disease often did spread where there was filth. It encouraged efforts to remove bad smells and lasted, in different forms, into the nineteenth century.'],
], view.factors('Why rational explanations were accepted', [
  ['Ancient authority', 'they came from respected Greek and Roman doctors'],
  ['Logic', 'the humours fitted the elements, seasons and qualities into one system'],
  ['Observation', 'seasonal illness and the link between filth and disease seemed to confirm them'],
  ['Practicality', 'they suggested clear treatments: bloodletting, purging, purifying the air'],
]), [
  view.timeline('Rational ideas', [
    ['c. 400s BC', 'Hippocrates and his followers in Greece'],
    ['AD 100s', 'Galen develops the theory in Rome'],
    ['900s–1000s', 'Islamic physicians preserve and extend Greek medicine'],
    ['1100s–1200s', 'Greek and Arabic texts translated into Latin in Europe'],
    ['c1250–1500', 'The humours taught in universities and used by physicians'],
  ]),
  view.people('People', [
    ['Hippocrates', 'Greek doctor who stressed natural causes and observation'],
    ['Galen', 'Roman-era doctor who developed the humours'],
    ['Physicians', 'Diagnosed imbalances using urine charts and the pulse'],
    ['Islamic scholars', 'Preserved and passed on Greek medical writing'],
  ]),
  view.source('A source type: a urine chart', 'A medieval chart showing a circle of flasks of urine in different colours, each linked to a condition.', 'Useful for how physicians diagnosed patients; it shows the method, not how accurate it was.'),
], [
  ['How was a heavy winter cold explained?', ['As an excess of phlegm, the humour linked to cold and wet', 'As a sign that the patient had too little blood in the body', 'As a punishment from the planets for eating too much'], 0, 'Seasons were linked to humours.'],
  ['Why did the miasma theory seem convincing?', ['Disease often did spread where there was filth and bad smells', 'Physicians had seen tiny creatures in bad air under microscopes', 'The Church had banned all other explanations of disease'], 0, 'It matched what people observed.'],
  ['Exam skill · Explain one similarity. Which explains a similarity between the Four Humours and miasma?', ['Both gave natural, rather than supernatural, explanations, so both led to practical treatments.', 'The Four Humours were blood, phlegm, yellow bile and black bile, all inside the body.', 'Miasma was bad air given off by rotting matter, sewage, swamps and dead bodies.'], 0, 'A similarity names what is shared and explains it.'],
  ['How did physicians diagnose imbalance?', ['By examining urine and taking the pulse', 'By taking X-rays of the chest and lungs', 'By testing the blood for germs and viruses'], 0, 'Uroscopy was central.'],
], [
  Q('mdd2.p1', 'Which were the four humours?', ['Blood, phlegm, yellow bile, black bile', 'Air, fire, earth and pure water', 'Heart, lungs, liver and the brain'], 0, 'Linked to the elements.', 'humours'),
  Q('mdd2.p2', 'What did Hippocrates teach about disease?', ['It had natural causes', 'It was sent by the gods', 'It was caused by germs'], 0, 'Fifth century BC.', 'hippocrates'),
  Q('mdd2.p3', 'What was miasma?', ['Bad air from rotting matter', 'An imbalance of the humours', 'A Greek doctor\'s theory of opposites'], 0, 'Linked to filth.', 'miasma'),
  Q('mdd2.p4', 'What did physicians examine to diagnose patients?', ['Urine', 'X-rays', 'DNA'], 0, 'They used urine charts.', 'diagnosis'),
  Q('mdd2.p5', 'What did health mean in humoral theory?', ['Balance of the humours', 'Having much more blood', 'Avoiding all rich food'], 0, 'Illness was imbalance.', 'humours'),
], [
  Q('mdd2.c1', 'What did Hippocrates stress?', ['Observing and recording symptoms', 'Prayer and pilgrimage to shrines', 'Dissecting human bodies often'], 0, 'A clinical approach.', 'hippocrates'),
  Q('mdd2.c2', 'Which humour was linked to winter?', ['Phlegm', 'Yellow bile', 'Blood'], 0, 'It was cold and wet.', 'humours'),
  Q('mdd2.c3', 'Who preserved Greek medical writing?', ['Islamic scholars', 'English kings', 'Viking traders'], 0, 'Then translated into Latin.', 'transmission'),
  Q('mdd2.c4', 'How long did miasma ideas last?', ['Into the nineteenth century', 'Only until about 1300', 'They never really existed'], 0, 'A long continuity.', 'miasma'),
  Q('mdd2.c5', 'What did the humours link together?', ['Elements, seasons and qualities', 'Planets, saints and shrines', 'Kings, bishops and nobles'], 0, 'A unified system.', 'humours'),
  Q('mdd2.c6', 'Besides urine, what did physicians check?', ['The pulse', 'Blood pressure with a cuff', 'Brain scans'], 0, 'To find imbalance.', 'diagnosis'),
  Q('mdd2.c7', 'What did miasma encourage people to remove?', ['Bad smells', 'Saints\' relics', 'The planets'], 0, 'Purifying the air.', 'miasma'),
  Q('mdd2.c8', 'Where were the humours taught?', ['In universities', 'In grammar schools only', 'Nowhere'], 0, 'Physicians learned them there.', 'transmission'),
], {exam: 'Explain one way in which ideas about the cause of disease in the period c1250–c1500 were similar to ideas in the period c1500–c1700. (4 marks)'}),

lesson(T, 'medicine.galen-church', 'Hippocrates, Galen and the Church', ['11 1.1'], [
  ['Galen', 'Galen was a Greek doctor who worked in Rome in the second century AD, including as doctor to gladiators. He dissected animals such as pigs and apes and wrote hundreds of works. He developed the Theory of Opposites: an illness caused by too much of a hot, dry humour should be treated with something cold and wet, and the reverse.'],
  ['Why the Church supported Galen', 'Galen believed the body had been designed by a single creator for a purpose. This fitted Christian teaching, so the Church approved of his ideas. Challenging Galen could look like challenging the Church itself.'],
  ['Control of learning', 'The Church ran the universities where physicians trained and the monasteries where books were copied by hand. Students learned by reading and memorising Galen and other ancient authorities, rather than by experiment. Human dissection was rare and was used mainly to show what Galen had already described.'],
  ['A long-lasting authority', 'Through Islamic scholars such as Ibn Sina, whose great medical encyclopedia was translated into Latin, Greek medicine reached medieval Europe. Galen\'s authority lasted for more than a thousand years, until printing, dissection and experiment in the 1500s and 1600s began to expose his mistakes.'],
], view.factors('Why Galen\'s ideas lasted', [
  ['The Church', 'his idea of a designed body fitted Christian belief'],
  ['Education', 'universities taught by reading ancient authorities'],
  ['Technology', 'books copied by hand; no printing until the 1400s'],
  ['Attitudes', 'challenging an ancient authority was not encouraged'],
]), [
  view.timeline('Galen\'s influence', [
    ['AD 129', 'Galen born in Pergamum'],
    ['AD 160s', 'Galen works in Rome'],
    ['c. 1020s', 'Ibn Sina writes his medical encyclopedia'],
    ['1100s–1200s', 'Arabic and Greek texts translated into Latin'],
    ['1200s', 'Universities at Oxford and Cambridge teach Galen'],
    ['1543', 'Vesalius begins to correct Galen'],
  ]),
  view.people('People and institutions', [
    ['Galen', 'Developed the Theory of Opposites'],
    ['Ibn Sina (Avicenna)', 'Islamic physician whose encyclopedia spread Greek medicine'],
    ['The Church', 'Ran universities and monasteries'],
    ['Monks', 'Copied medical books by hand'],
  ]),
  view.source('A source type: a hand-copied medical manuscript', 'A monastery copy of one of Galen\'s works, with notes added in the margins by later readers.', 'Useful for how Galen\'s ideas were preserved and studied; copying could introduce errors, and the notes show only some readers\' views.'),
], [
  ['What was the Theory of Opposites?', ['Treating an illness with something of the opposite quality, such as cold for hot', 'Giving patients the opposite of what a priest recommended for them', 'Dissecting the opposite side of the body to find the cause of disease'], 0, 'Galen\'s guide to treatment.'],
  ['Why did the Church support Galen?', ['His belief in a designed body fitted Christian teaching', 'Galen had been a Christian bishop in Rome', 'Galen said that only prayer could cure disease'], 0, 'Religion and medicine reinforced each other.'],
  ['Exam skill · Explain why. Which explains why Galen\'s ideas lasted so long?', ['The Church controlled learning and his ideas fitted its teaching, so students studied Galen rather than test him.', 'Galen worked in Rome as a doctor to gladiators and emperors in the second century AD.', 'Galen dissected animals such as pigs and apes and wrote hundreds of medical works.'], 0, 'Explanation links factors to the result.'],
  ['How did Greek medicine reach medieval Europe?', ['Through Islamic scholars whose works were translated into Latin', 'Through Roman soldiers who stayed in England after AD 1000', 'Through printed books sent from China in the year 1250'], 0, 'Transmission through the Islamic world.'],
], [
  Q('mdd3.p1', 'Which animals did Galen dissect?', ['Pigs and apes', 'Humans only', 'Horses and dogs only'], 0, 'He did not dissect humans.', 'galen'),
  Q('mdd3.p2', 'In which century did Galen work?', ['The second century AD', 'The fifth century BC', 'The fourteenth century'], 0, 'He worked in Rome.', 'galen'),
  Q('mdd3.p3', 'Who ran the universities?', ['The Church', 'The king', 'Merchants'], 0, 'Controlling learning.', 'church'),
  Q('mdd3.p4', 'How did students learn medicine?', ['Reading ancient authorities', 'Experiments in laboratories', 'Dissecting many humans'], 0, 'Memorising Galen.', 'church'),
  Q('mdd3.p5', 'Which Islamic physician wrote a great encyclopedia?', ['Ibn Sina', 'Hippocrates', 'Vesalius'], 0, 'Known as Avicenna.', 'transmission'),
], [
  Q('mdd3.c1', 'Whom did Galen treat in Rome?', ['Gladiators', 'Monks', 'Sailors'], 0, 'He treated others too.', 'galen'),
  Q('mdd3.c2', 'What did Galen believe about the body?', ['It was designed by a creator', 'It had evolved slowly by chance', 'It had no purpose of any kind'], 0, 'Fitting Christianity.', 'church'),
  Q('mdd3.c3', 'Who copied books in monasteries?', ['Monks', 'Printers', 'Physicians'], 0, 'They copied them by hand.', 'church'),
  Q('mdd3.c4', 'How was human dissection used?', ['Rarely, to show Galen\'s ideas', 'Daily, to test Galen\'s claims', 'It was compulsory in all schools'], 0, 'Not to challenge him.', 'church'),
  Q('mdd3.c5', 'How long did Galen\'s authority last?', ['Over a thousand years', 'About ten or twenty years', 'About fifty years'], 0, 'Until the 1500s.', 'authority'),
  Q('mdd3.c6', 'What would treat a hot, dry illness?', ['Something cold and wet', 'Something hot and dry', 'Nothing at all'], 0, 'Theory of Opposites.', 'galen'),
  Q('mdd3.c7', 'What began to expose Galen\'s mistakes?', ['Printing, dissection and experiment', 'Prayer and pilgrimage to shrines', 'Astrology and almanacs'], 0, 'This began in the 1500s.', 'authority'),
  Q('mdd3.c8', 'Why was challenging Galen difficult?', ['It seemed to challenge the Church', 'It was a crime punished by death', 'Nobody had read his books'], 0, 'Authority was strong.', 'church'),
], {exam: '"The Church was the main reason why ideas about the cause of disease changed little in the period c1250–c1500." How far do you agree? (16 marks)'}),

lesson(T, 'medicine.medieval-prevention', 'Medieval prevention and treatment', ['11 1.2'], [
  ['Keeping healthy', 'Wealthier people followed a regimen sanitatis, a guide to healthy living covering diet, exercise, sleep, bathing and emotions. Monasteries often had piped fresh water, drains and latrines, which gave monks better hygiene than most people.'],
  ['Purifying the air', 'To fight miasma, people carried posies of sweet-smelling flowers and herbs, burned herbs such as juniper, and kept away from bad smells where they could. Some towns paid workers to clean the streets and passed rules against dumping waste, though these were often ignored.'],
  ['Restoring the humours', 'Physicians and barber surgeons let blood by cutting a vein or applying leeches, and purged patients with laxatives and emetics to remove excess humours. They often used astrological charts to choose the right day for bloodletting.'],
  ['Remedies and charms', 'Apothecaries and wise women made remedies from herbs, honey, spices and animal products. Some had real benefits: honey, for example, helps to prevent infection in wounds. Others relied on charms, prayers and amulets worn for protection.'],
], view.factors('How treatment followed ideas', [
  ['God\'s will', 'prayer, pilgrimage, charms'],
  ['Imbalance of humours', 'bloodletting and purging'],
  ['Miasma', 'sweet herbs, burning, cleaning streets'],
  ['Experience', 'herbal remedies passed down in families'],
]), [
  view.timeline('Practice in medieval England', [
    ['1200s', 'Regimen sanitatis guides copied for the wealthy'],
    ['1200s–1300s', 'Monasteries maintain piped water and drains'],
    ['1300s', 'Towns appoint street cleaners and pass waste rules'],
    ['1349', 'The king orders London\'s streets to be cleaned'],
  ]),
  view.people('People', [
    ['Physicians', 'Prescribed bloodletting, purging and regimens'],
    ['Barber surgeons', 'Carried out bloodletting'],
    ['Apothecaries', 'Made and sold remedies'],
    ['Wise women', 'Gave remedies at home and in villages'],
  ]),
  view.source('A source type: a book of household remedies', 'A handwritten collection of herbal recipes for common illnesses, kept by a gentry family.', 'Useful for everyday treatment at home; it shows what was used, not whether it worked.'),
], [
  ['Why did monks often have better hygiene?', ['Monasteries often had piped fresh water, drains and latrines', 'Monks were forbidden by the Church from ever falling ill', 'Monks studied germ theory at the universities run by the Church'], 0, 'Infrastructure mattered.'],
  ['Why did people carry posies of herbs?', ['To protect themselves from miasma, bad air thought to cause disease', 'To pay physicians, who accepted herbs instead of money', 'To show that they had been on a pilgrimage to Canterbury'], 0, 'Treatment followed belief.'],
  ['Exam skill · Explain one difference. Which explains a difference between prevention in c1250–c1500 and today?', ['Medieval prevention aimed to avoid bad air and keep humours balanced, because germs were unknown.', 'In the Middle Ages, physicians and barber surgeons often used leeches to let blood from patients.', 'Apothecaries made their remedies from herbs, honey, spices and many animal products.'], 0, 'A difference contrasts periods and explains why.'],
  ['Which remedy had a real benefit?', ['Honey on wounds, which helps prevent infection', 'Amulets worn round the neck against the plague', 'Letting blood on a day chosen by the stars'], 0, 'Some traditional remedies worked.'],
], [
  Q('mdd4.p1', 'What was a regimen sanitatis?', ['A guide to healthy living', 'A type of Church hospital', 'A law passed by the Church'], 0, 'For the wealthy.', 'regimen'),
  Q('mdd4.p2', 'What were leeches used for?', ['Letting blood', 'Cleaning wounds of germs', 'Purifying the air'], 0, 'To restore humours.', 'humoral-treatment'),
  Q('mdd4.p3', 'What did purging remove?', ['Excess humours', 'Germs and bacteria', 'Bad air in the lungs'], 0, 'With laxatives and emetics.', 'humoral-treatment'),
  Q('mdd4.p4', 'Which remedy helps prevent infection?', ['Honey', 'Mercury', 'Amulets'], 0, 'It had a real benefit.', 'remedies'),
  Q('mdd4.p5', 'What did people burn to purify the air?', ['Herbs such as juniper', 'Coal from the mines', 'Old books and papers'], 0, 'This was against miasma.', 'air'),
], [
  Q('mdd4.c1', 'Who often had piped water and drains?', ['Monasteries', 'Peasant villages', 'Castles only'], 0, 'They had better hygiene.', 'regimen'),
  Q('mdd4.c2', 'Why were days for bloodletting chosen carefully?', ['Astrology', 'Weather', 'Market days'], 0, 'The stars mattered.', 'humoral-treatment'),
  Q('mdd4.c3', 'Who made remedies at home?', ['Wise women', 'Bishops', 'Knights'], 0, 'Family knowledge.', 'remedies'),
  Q('mdd4.c4', 'Were town waste rules well enforced?', ['Often not', 'Always', 'There were none'], 0, 'They were often ignored.', 'air'),
  Q('mdd4.c5', 'What did a regimen cover?', ['Diet, exercise, sleep and bathing', 'Prayer, fasting and pilgrimage', 'Surgery and amputation only'], 0, 'It covered healthy living.', 'regimen'),
  Q('mdd4.c6', 'What were amulets?', ['Charms worn for protection', 'Surgical tools for bloodletting', 'Herbal drinks to cause vomiting'], 0, 'Supernatural protection.', 'remedies'),
  Q('mdd4.c7', 'Which ideas did purifying the air follow?', ['Miasma', 'Germ theory', 'Genetics'], 0, 'They believed in bad air.', 'air'),
  Q('mdd4.c8', 'What did emetics do?', ['Made patients vomit', 'Stopped any bleeding', 'Killed germs in wounds'], 0, 'A form of purging.', 'humoral-treatment'),
], {exam: 'Explain one way in which the prevention of disease in the period c1250–c1500 was different from prevention in the period c1900–present. (4 marks)'}),

lesson(T, 'medicine.medieval-hospitals', 'Hospitals in the 13th century', ['11 1.2'], [
  ['Who ran hospitals?', 'Most hospitals were founded by the Church or by wealthy people giving money for the good of their souls, and were run by monks, nuns or lay brothers and sisters. By 1500 there were hundreds of hospitals in England, many of them small.'],
  ['Care, not cure', 'Hospitals focused on care rather than treatment. Patients were given food, warmth, clean bedding and rest. Physicians rarely visited, because the aim was to comfort the body and save the soul.'],
  ['Prayer at the centre', 'Prayer was central to hospital life. Beds were often arranged so that patients could see the altar and take part in services. Patients were expected to pray for the souls of the hospital\'s founders and benefactors.'],
  ['Who was admitted?', 'Many hospitals cared for the elderly, the poor, travellers and pilgrims. Some, such as St Leonard\'s in York, were large, but many refused to take people with infectious diseases. Lepers were cared for in separate leper houses, usually outside towns.'],
], view.factors('What medieval hospitals were like', [
  ['Run by', 'the Church; monks, nuns and lay brothers and sisters'],
  ['Purpose', 'care and prayer, not cure'],
  ['Patients', 'the old, the poor, travellers; often not the infectious'],
  ['Funding', 'gifts from the wealthy for the good of their souls'],
]), [
  view.timeline('Medieval hospitals', [
    ['1100s', 'Many hospitals founded by the Church and wealthy donors'],
    ['1200s', 'St Leonard\'s in York among the largest hospitals'],
    ['1200s–1300s', 'Leper houses built outside many towns'],
    ['1500', 'Hundreds of hospitals in England'],
    ['1536–41', 'Most closed with the monasteries'],
  ]),
  view.people('People', [
    ['Monks and nuns', 'Cared for patients'],
    ['Benefactors', 'Wealthy people who paid for hospitals'],
    ['Patients', 'The elderly, the poor and travellers'],
    ['Lepers', 'Cared for in separate leper houses'],
  ]),
  view.source('A source type: a hospital\'s rules', 'A list of rules for a medieval hospital setting out prayers, meals and who could be admitted.', 'Useful for how hospitals were meant to run; rules show intentions, not daily reality.'),
], [
  ['Why were hospitals founded?', ['Wealthy people gave money for the good of their souls', 'The king required every town to build a hospital by law', 'Physicians wanted somewhere to test new treatments'], 0, 'Charity and faith.'],
  ['Why did many hospitals refuse infectious patients?', ['They aimed to care for others and feared spreading disease', 'Infectious diseases did not exist in the Middle Ages', 'Only physicians were allowed to care for the infectious'], 0, 'Care for the vulnerable came first.'],
  ['Exam skill · Explain one difference. Which explains a difference between hospitals c1250–c1500 and c1800–c1900?', ['Medieval hospitals offered care and prayer, but later hospitals treated patients with trained nurses.', 'Medieval hospitals were very often run by monks, nuns and lay brothers and sisters.', 'Beds were often arranged so that the patients could see the altar during church services.'], 0, 'A difference contrasts periods and explains why.'],
  ['Where were lepers cared for?', ['In separate leper houses outside towns', 'In the largest hospitals in the centre of towns', 'In the monasteries alongside the monks'], 0, 'They were isolated.'],
], [
  Q('mdd5.p1', 'Who ran most hospitals?', ['The Church', 'The government', 'Physicians'], 0, 'Monks and nuns ran them.', 'running'),
  Q('mdd5.p2', 'What did hospitals focus on?', ['Care rather than cure', 'Surgery and operations', 'Medical research'], 0, 'Food, warmth and rest.', 'purpose'),
  Q('mdd5.p3', 'Where were lepers cared for?', ['Leper houses', 'Universities', 'Royal palaces'], 0, 'They were outside towns.', 'patients'),
  Q('mdd5.p4', 'Which was a large hospital in York?', ['St Leonard\'s', 'St Thomas\'s', 'Guy\'s'], 0, 'One of the largest.', 'patients'),
  Q('mdd5.p5', 'What could patients see from their beds?', ['The altar', 'The operating table', 'The street'], 0, 'Prayer was central.', 'prayer'),
], [
  Q('mdd5.c1', 'Why did wealthy people fund hospitals?', ['For the good of their souls', 'To make a large profit', 'Because a tax required it'], 0, 'It was an act of charity.', 'running'),
  Q('mdd5.c2', 'How often did physicians visit?', ['Rarely', 'Daily', 'Hourly'], 0, 'Cure was not the aim.', 'purpose'),
  Q('mdd5.c3', 'Whom did patients pray for?', ['Founders and benefactors', 'The king and nobody else', 'The physicians who visited'], 0, 'They prayed for their souls.', 'prayer'),
  Q('mdd5.c4', 'Which group was often refused?', ['The infectious', 'The elderly', 'Travellers'], 0, 'To avoid spread.', 'patients'),
  Q('mdd5.c5', 'What happened to most hospitals in 1536–41?', ['They closed', 'They expanded', 'They became free'], 0, 'With the monasteries.', 'running'),
  Q('mdd5.c6', 'What did hospitals provide?', ['Food, warmth and rest', 'Antibiotics and vaccines', 'X-rays and scans'], 0, 'It was basic care.', 'purpose'),
  Q('mdd5.c7', 'Who were common patients?', ['The old and poor', 'Soldiers and nobody else', 'Nobles and their families'], 0, 'Travellers were common too.', 'patients'),
  Q('mdd5.c8', 'How many hospitals were there by 1500?', ['Hundreds', 'Two', 'Tens of thousands'], 0, 'Many were small.', 'running'),
], {exam: 'Explain why hospitals in the period c1250–c1500 focused on care rather than cure. (12 marks)'}),

lesson(T, 'medicine.medieval-practitioners', 'Physicians, apothecaries and barber surgeons', ['11 1.2'], [
  ['Physicians', 'Physicians studied at university for many years, learning from the books of Galen and Hippocrates. They diagnosed by examining urine, taking the pulse and consulting the stars, and they recommended treatments. They were few and expensive, so they mainly treated the wealthy.'],
  ['Apothecaries', 'Apothecaries learned their trade through apprenticeship. They mixed and sold remedies made from herbs, spices, minerals and animal parts, often following physicians\' instructions but also advising customers directly. They were cheaper and easier to reach than physicians.'],
  ['Barber surgeons', 'Barber surgeons, who also cut hair, carried out bloodletting, pulled teeth, lanced boils, set broken bones and performed simple operations such as amputations, often without effective pain relief. A few skilled surgeons, such as the fourteenth-century Englishman John of Arderne, wrote about their methods and achieved real success with some operations.'],
  ['Women and the home', 'Most sick people were never seen by a physician. Mothers, wives and local "wise women" cared for them at home with remedies handed down through families. Midwives, almost always women, delivered babies.'],
], view.factors('Who treated the sick?', [
  ['Physicians', 'university-trained; diagnosis and advice; expensive'],
  ['Apothecaries', 'trained by apprenticeship; mixed and sold remedies'],
  ['Barber surgeons', 'bloodletting, teeth, bones, simple operations'],
  ['Women at home', 'most everyday care; midwifery'],
]), [
  view.timeline('Medical practitioners', [
    ['1200s', 'Physicians trained at Oxford and Cambridge'],
    ['1300s', 'John of Arderne practises as a surgeon'],
    ['1300s–1400s', 'Guilds of barbers and surgeons in London'],
    ['1518', 'The College of Physicians is founded'],
  ]),
  view.people('People', [
    ['Physicians', 'Diagnosed using urine, pulse and stars'],
    ['Apothecaries', 'Made remedies'],
    ['John of Arderne', 'Skilled English surgeon of the 1300s'],
    ['Midwives and wise women', 'Gave care in the home'],
  ]),
  view.source('A source type: a surgeon\'s treatise', 'A manuscript by a fourteenth-century English surgeon describing an operation and the instruments he used.', 'Useful for surgical methods; the author was promoting his own skill, so he may describe his successes rather than failures.'),
], [
  ['Why did most people never see a physician?', ['Physicians were few and expensive and mainly treated the wealthy', 'Physicians were banned from treating anyone outside a monastery', 'Physicians only treated patients during the Black Death'], 0, 'Cost limited access.'],
  ['How did apothecaries train?', ['Through apprenticeship', 'At university for seven years', 'By studying in monasteries abroad'], 0, 'Learning the trade.'],
  ['Exam skill · Explain one similarity. Which explains a similarity between care c1250–c1500 and c1500–c1700?', ['In both periods most care was given at home by women, because physicians were expensive.', 'Barber surgeons pulled teeth, set broken bones and carried out simple operations.', 'John of Arderne was a skilled English surgeon who lived in the fourteenth century.'], 0, 'A similarity is explained by a reason.'],
  ['What did barber surgeons do?', ['Bloodletting, pulling teeth and simple operations', 'Diagnosing illness by studying the stars', 'Running hospitals for the poor and travellers'], 0, 'Practical, hands-on work.'],
], [
  Q('mdd6.p1', 'Where did physicians train?', ['University', 'Apprenticeship', 'The army'], 0, 'They trained for many years.', 'physicians'),
  Q('mdd6.p2', 'What did apothecaries do?', ['Mixed and sold remedies', 'Performed surgery on patients', 'Ran the Church hospitals'], 0, 'From herbs and spices.', 'apothecaries'),
  Q('mdd6.p3', 'Who pulled teeth and set bones?', ['Barber surgeons', 'University physicians', 'Monks and nuns'], 0, 'Theirs was practical work.', 'surgeons'),
  Q('mdd6.p4', 'Who was John of Arderne?', ['A skilled English surgeon', 'A physician to the Pope', 'A Roman doctor'], 0, 'He lived in the 1300s.', 'surgeons'),
  Q('mdd6.p5', 'Who delivered babies?', ['Midwives', 'Physicians', 'Barber surgeons'], 0, 'Almost always women.', 'home'),
], [
  Q('mdd6.c1', 'Whom did physicians mainly treat?', ['The wealthy', 'The poorest', 'Soldiers'], 0, 'They were expensive.', 'physicians'),
  Q('mdd6.c2', 'How did physicians diagnose?', ['Urine, pulse and stars', 'Blood tests in a laboratory', 'X-rays and scans'], 0, 'Following Galen.', 'physicians'),
  Q('mdd6.c3', 'Which practitioner was cheapest to reach?', ['The apothecary', 'The physician', 'The royal doctor'], 0, 'They were easier to reach.', 'apothecaries'),
  Q('mdd6.c4', 'Where was most care given?', ['At home', 'In hospitals', 'In universities'], 0, 'Women usually gave it.', 'home'),
  Q('mdd6.c5', 'What else did barber surgeons do?', ['Cut hair', 'Teach Latin', 'Write almanacs'], 0, 'That explains the name.', 'surgeons'),
  Q('mdd6.c6', 'Whose books did physicians study?', ['Galen\'s and Hippocrates\'', 'Pasteur\'s and Koch\'s', 'Vesalius\' and Harvey\'s'], 0, 'Ancient authorities.', 'physicians'),
  Q('mdd6.c7', 'Was there effective pain relief for surgery?', ['No', 'Yes, chloroform', 'Yes, ether'], 0, 'Anaesthetics came later.', 'surgeons'),
  Q('mdd6.c8', 'Who handed down remedies?', ['Families', 'Universities', 'The king'], 0, 'Through generations.', 'home'),
], {exam: 'Explain one way in which the role of the barber surgeon in the period c1250–c1500 was different from the role of the surgeon in the period c1800–c1900. (4 marks)'}),

lesson(T, 'medicine.bd-treatment', 'The Black Death: beliefs and treatments', ['11 1.3'], [
  ['Explaining the plague', 'In 1348 the medical faculty of the University of Paris reported that the plague was caused by a conjunction of Saturn, Jupiter and Mars in 1345, which had corrupted the air. Many in England accepted this, alongside the belief that God was punishing people for their sins.'],
  ['Penance and prayer', 'The Church organised prayers and processions. In 1349 a group of flagellants from the Netherlands came to London and publicly whipped themselves in penance, hoping to win God\'s mercy. Many people fasted, confessed and made offerings.'],
  ['Medical treatments', 'Physicians tried to restore the humours with bloodletting and purging. Some lanced the buboes to drain them, or applied poultices made from herbs and other substances. Others recommended sweet-smelling herbs or vinegar to fight the corrupted air.'],
  ['Why nothing worked', 'The plague was caused by bacteria carried by fleas on rats, and the pneumonic form spread through coughing. Because no one understood this, treatments based on God, the stars, miasma or the humours could not stop it. Physicians themselves died or fled.'],
], view.factors('How beliefs shaped treatment', [
  ['God\'s punishment', 'prayer, fasting, processions and flagellants'],
  ['The planets and corrupted air', 'herbs, vinegar and avoiding bad air'],
  ['The humours', 'bloodletting and purging'],
  ['The buboes', 'lancing and poultices'],
]), [
  view.timeline('Beliefs about the Black Death', [
    ['1345', 'The planetary conjunction later blamed for the plague'],
    ['1348', 'Paris medical faculty reports on the cause'],
    ['Jun 1348', 'The plague arrives in England'],
    ['1349', 'Flagellants arrive in London'],
    ['1890s', 'The true cause is discovered'],
  ]),
  view.people('People and groups', [
    ['The Paris medical faculty', 'Blamed the planets and corrupted air'],
    ['Flagellants', 'Whipped themselves in public penance'],
    ['Physicians', 'Used bloodletting, purging and lancing'],
    ['Priests', 'Led prayers and processions'],
  ]),
  view.source('A source type: a chronicle', 'A chronicle written by a monk describing the arrival of the plague and attributing it to God\'s anger.', 'Useful for contemporary beliefs; the monk wrote with a religious purpose and may exaggerate numbers.'),
], [
  ['What did the Paris medical faculty blame?', ['A conjunction of planets that corrupted the air', 'Fleas carried by rats arriving on ships', 'Germs spread by touching infected people'], 0, 'Astrology and miasma combined.'],
  ['Why did flagellants whip themselves?', ['As penance, hoping God would end the plague', 'To let blood and rebalance their humours', 'To protest against the king and his taxes'], 0, 'Religious explanation, religious response.'],
  ['Exam skill · Explain why. Which explains why treatments for the Black Death failed?', ['No one knew bacteria spread by fleas caused it, so treatments aimed at the wrong causes.', 'Physicians used bloodletting and purging, and some lanced the buboes on patients.', 'The plague arrived in England in June 1348 and spread very quickly across the country.'], 0, 'Explanation links ignorance of cause to failure.'],
  ['Why did some physicians recommend vinegar?', ['To fight the corrupted air thought to carry disease', 'Because it killed bacteria inside the body', 'Because the Church had blessed it as a cure'], 0, 'Treatment followed miasma ideas.'],
], [
  Q('mdd7.p1', 'Which planets did the Paris faculty blame?', ['Saturn, Jupiter and Mars', 'Venus, Mercury and the Moon', 'The Sun, the Moon and comets'], 0, 'A conjunction in 1345.', 'beliefs'),
  Q('mdd7.p2', 'When did flagellants come to London?', ['1349', '1665', '1250'], 0, 'From the Netherlands.', 'penance'),
  Q('mdd7.p3', 'What were buboes?', ['Swellings on the body', 'Herbal remedies for fever', 'Types of rat fleas'], 0, 'Some were lanced.', 'treatment'),
  Q('mdd7.p4', 'What actually caused the plague?', ['Bacteria carried by fleas', 'Bad air from swamps', 'An imbalance of humours'], 0, 'Discovered in the 1890s.', 'failure'),
  Q('mdd7.p5', 'Which treatment aimed to restore humours?', ['Bloodletting', 'Prayer', 'Processions'], 0, 'Purging was used too.', 'treatment'),
], [
  Q('mdd7.c1', 'What were poultices?', ['Remedies applied to the skin', 'Prayers said over the sick', 'Bandages made of metal'], 0, 'Made from herbs.', 'treatment'),
  Q('mdd7.c2', 'Which form of plague spread through coughing?', ['Pneumonic', 'Bubonic', 'Neither form'], 0, 'It attacked the lungs.', 'failure'),
  Q('mdd7.c3', 'What did the Church organise?', ['Prayers and processions', 'Quarantine hospitals', 'Vaccinations'], 0, 'They sought God\'s mercy.', 'penance'),
  Q('mdd7.c4', 'What happened to many physicians?', ['They died or fled', 'They found a cure', 'They were knighted'], 0, 'Treatment failed.', 'failure'),
  Q('mdd7.c5', 'In which year was the conjunction said to have occurred?', ['1345', '1348', '1349'], 0, 'Three years earlier.', 'beliefs'),
  Q('mdd7.c6', 'What did many people do besides praying?', ['Fasted and confessed', 'Took antibiotics', 'Emigrated to America'], 0, 'This was a form of penance.', 'penance'),
  Q('mdd7.c7', 'Why could none of the treatments work?', ['The real cause was unknown', 'They had been banned by law', 'There was no time to try them'], 0, 'They aimed at the wrong causes.', 'failure'),
  Q('mdd7.c8', 'Where did the plague first arrive?', ['A port in Dorset', 'The port of London', 'York, in the north'], 0, 'It arrived in June 1348.', 'beliefs'),
], {exam: 'Explain why the treatments used during the Black Death were not effective. (12 marks)'}),

lesson(T, 'medicine.bd-prevention', 'The Black Death: attempts to stop its spread', ['11 1.3'], [
  ['Avoiding the sick and fleeing', 'Many people tried to avoid the sick, and those who could afford it fled to the countryside. Some towns tried to keep outsiders away: Gloucester is said to have shut its gates against people from Bristol in 1348, but the plague arrived anyway.'],
  ['Purifying the air', 'People carried herbs and flowers, burned sweet-smelling woods, rang church bells and kept fires burning to drive away the corrupted air. Some even thought strong bad smells would overcome the plague air.'],
  ['Cleaning the streets', 'In 1349 King Edward III wrote to the Lord Mayor of London ordering the streets to be cleared of filth, because the stink was thought to be spreading disease. This showed some royal concern for public health, but there was no national plan and little enforcement.'],
  ['Burying the dead', 'So many died that churchyards filled up and the dead were buried in mass graves, such as the plague pits at East Smithfield in London. Archaeologists have since studied these burials, confirming the scale of the disaster and identifying the plague bacterium in the victims\' remains.'],
], view.factors('Why prevention failed', [
  ['Wrong cause', 'actions aimed at bad air and sin, not fleas and rats'],
  ['No organisation', 'no national plan; weak local enforcement'],
  ['Movement', 'people fleeing carried the disease further'],
  ['Scale', 'too many deaths for normal burial and care'],
]), [
  view.timeline('England, 1348–49', [
    ['Jun 1348', 'The plague reaches a port in Dorset'],
    ['1348', 'Gloucester tries to keep out people from Bristol'],
    ['Late 1348', 'The plague reaches London'],
    ['1349', 'Edward III orders London\'s streets to be cleaned'],
    ['1349', 'Mass burials at East Smithfield'],
  ]),
  view.people('People', [
    ['Edward III', 'Ordered London\'s streets to be cleaned'],
    ['The Lord Mayor of London', 'Received the king\'s order'],
    ['Townspeople', 'Tried to keep outsiders away'],
    ['Archaeologists', 'Have studied the plague burials'],
  ]),
  view.source('A source type: a royal letter', 'A letter from Edward III to the Lord Mayor of London in 1349 ordering the removal of filth from the streets.', 'Useful for royal concern and belief in miasma; it shows what was ordered, not whether the streets were cleaned.'),
], [
  ['Why did fleeing sometimes make things worse?', ['People carried the disease with them to new places', 'It meant there were too many doctors in the countryside', 'The king punished anyone who left the towns with death'], 0, 'Movement spread the plague.'],
  ['Why did Edward III order the streets cleaned?', ['The stink was thought to spread disease through bad air', 'He knew that rats lived in rubbish and carried fleas', 'He wanted to build new palaces in the centre of London'], 0, 'Miasma shaped royal action.'],
  ['Exam skill · Explain one similarity. Which explains a similarity between attempts to stop plague in 1348 and 1665?', ['In both, people tried to purify the air and avoid the sick, because they believed in miasma.', 'In 1349 the plague dead were buried in mass graves at East Smithfield in London.', 'In 1665 infected households were shut up for forty days with a red cross on the door.'], 0, 'A similarity is explained by a shared belief.'],
  ['What has archaeology confirmed?', ['The scale of deaths and the plague bacterium in victims\' remains', 'That the Black Death was caused by an imbalance of humours', 'That nobody died in London during the plague of 1348–49'], 0, 'Modern science supports the record.'],
], [
  Q('mdd8.p1', 'Which king ordered London\'s streets cleaned?', ['Edward III', 'Henry VIII', 'Charles II'], 0, 'He did so in 1349.', 'streets'),
  Q('mdd8.p2', 'Which town tried to keep out people from Bristol?', ['Gloucester', 'York', 'Norwich'], 0, 'This happened in 1348.', 'avoidance'),
  Q('mdd8.p3', 'Where were plague pits dug in London?', ['East Smithfield', 'Westminster', 'Greenwich'], 0, 'They were mass graves.', 'burial'),
  Q('mdd8.p4', 'What did people ring to drive away bad air?', ['Church bells', 'Hand bells only', 'Nothing'], 0, 'This was against miasma.', 'air'),
  Q('mdd8.p5', 'Who fled to the countryside?', ['Those who could afford it', 'Only the very poorest people', 'Nobody left the towns at all'], 0, 'Spreading disease.', 'avoidance'),
], [
  Q('mdd8.c1', 'Was there a national plan in 1348?', ['No', 'Yes', 'Only in Wales'], 0, 'Little organisation.', 'streets'),
  Q('mdd8.c2', 'What did some think would overcome plague air?', ['Strong bad smells', 'Taking cold baths', 'Keeping complete silence'], 0, 'It was a strange idea.', 'air'),
  Q('mdd8.c3', 'Why were mass graves needed?', ['Churchyards filled up', 'Burial had been banned', 'Coffins had been taxed'], 0, 'Too many deaths.', 'burial'),
  Q('mdd8.c4', 'What has been found in victims\' remains?', ['The plague bacterium', 'Traces of antibiotics', 'Nothing at all'], 0, 'Scientists have found it.', 'burial'),
  Q('mdd8.c5', 'Did Gloucester keep the plague out?', ['No', 'Yes', 'For ten years'], 0, 'It arrived anyway.', 'avoidance'),
  Q('mdd8.c6', 'What did people burn?', ['Sweet-smelling woods', 'Old books and papers', 'Coal and nothing else'], 0, 'To purify the air.', 'air'),
  Q('mdd8.c7', 'Whom did Edward III write to?', ['The Lord Mayor of London', 'The Pope, then in Avignon', 'The King of France in Paris'], 0, 'He wrote in 1349.', 'streets'),
  Q('mdd8.c8', 'Why did prevention fail?', ['It aimed at the wrong causes', 'It was much too expensive', 'Nobody tried to stop it'], 0, 'Fleas and rats were ignored.', 'failure'),
], {exam: 'Explain one way in which attempts to stop the spread of plague in 1348 were similar to attempts in 1665. (4 marks)'}),
];
