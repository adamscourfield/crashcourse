// Pearson Edexcel GCSE (9–1) History 1HI0, Option 11: Medicine in Britain, c1250–present.
// Depth lessons for key topic 4, c1900–present (specification 4.1–4.2). Each follows its overview lesson.
// All text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

const T = 'history.medicine.kt4';

export const medicineDepth4 = [
lesson(T, 'medicine.genetics', 'Genetic and lifestyle causes', ['11 4.1'], [
  ['Discovering DNA', 'In 1952 Rosalind Franklin, working at King\'s College London, produced an X-ray image of DNA that showed its shape. Using it, Francis Crick and James Watson in Cambridge worked out the double-helix structure in 1953. Crick, Watson and Maurice Wilkins received the Nobel Prize in 1962; Franklin had died in 1958 and could not be included.'],
  ['Genes and disease', 'Scientists began to find the genes linked to particular conditions: the gene for cystic fibrosis was identified in 1989, and genes that greatly raise the risk of breast cancer in the mid-1990s. People at risk could be tested, and research began into treatments that target faulty genes.'],
  ['The Human Genome Project', 'From 1990 to 2003 an international project, with about a third of the work done at the Sanger Centre near Cambridge, mapped all the genes in human DNA. It relied on powerful computers and opened the way to medicine tailored to a person\'s genes.'],
  ['Lifestyle', 'As infectious diseases declined, conditions linked to the way people live became major killers. Research from 1950 showed the link between smoking and lung cancer, and later studies linked diet, alcohol and lack of exercise to heart disease, type 2 diabetes and some cancers. Ideas about cause now included behaviour as well as germs and genes.'],
], view.factors('What changed understanding of cause?', [
  ['Science and technology', 'X-ray crystallography; computers to map the genome'],
  ['Individuals and teams', 'Franklin, Crick, Watson and Wilkins; Doll and Hill'],
  ['Institutions', 'universities, research centres and government funding'],
  ['A changing pattern of disease', 'fewer infections, more lifestyle-related illness'],
]), [
  view.timeline('Genes and lifestyle', [
    ['1950', 'Smoking linked to lung cancer'],
    ['1952', 'Franklin\'s X-ray image of DNA'],
    ['1953', 'The double helix worked out'],
    ['1989', 'Cystic fibrosis gene identified'],
    ['1990–2003', 'The Human Genome Project'],
  ]),
  view.people('People', [
    ['Rosalind Franklin', 'Produced the key X-ray image of DNA'],
    ['Francis Crick and James Watson', 'Worked out the double helix'],
    ['Maurice Wilkins', 'Shared the 1962 Nobel Prize'],
    ['The Sanger Centre', 'Did about a third of the genome mapping'],
  ]),
  view.source('A source type: a 1953 scientific letter', 'The short paper in a scientific journal in which Watson and Crick proposed the double-helix structure of DNA.', 'Very useful for the discovery itself; it gives little credit to Franklin\'s data, which shaped later debate.'),
], [
  ['Why was Franklin\'s image important?', ['It showed DNA\'s shape, which Crick and Watson used to work out the structure', 'It was the first photograph ever taken of a germ under a microscope', 'It proved that smoking caused lung cancer in British doctors'], 0, 'Data behind the discovery.'],
  ['Why did lifestyle causes become more important?', ['Infectious diseases declined, and conditions linked to behaviour became major killers', 'Doctors stopped believing that germs caused any disease at all', 'The government banned research into infectious diseases'], 0, 'The pattern of disease changed.'],
  ['Exam skill · Explain one difference. Which explains a difference in ideas about cause from c1700–c1900?', ['Doctors now understood genetic and lifestyle causes as well as germs, because of new research and technology.', 'Francis Crick and James Watson worked out the double helix in Cambridge in 1953.', 'The Human Genome Project ran from 1990 to 2003 with work done in many countries.'], 0, 'A difference is explained by a cause.'],
  ['What did the Human Genome Project need?', ['Powerful computers to handle huge amounts of data', 'Thousands of swan-necked flasks and agar plates', 'Permission from the Pope to study human beings'], 0, 'Technology was essential.'],
], [
  Q('mdd23.p1', 'Who produced the key X-ray image of DNA?', ['Rosalind Franklin', 'Marie Curie', 'Dorothy Hodgkin'], 0, 'At King\'s College London.', 'dna'),
  Q('mdd23.p2', 'When was the double helix worked out?', ['1953', '1928', '2003'], 0, 'By Crick and Watson.', 'dna'),
  Q('mdd23.p3', 'Which gene was identified in 1989?', ['Cystic fibrosis', 'Penicillin resistance', 'Smallpox'], 0, 'A genetic condition.', 'genes'),
  Q('mdd23.p4', 'When did the Human Genome Project run?', ['1990–2003', '1953–1962', '1948–1960'], 0, 'An international project.', 'genome'),
  Q('mdd23.p5', 'Which habit was linked to lung cancer in 1950?', ['Smoking', 'Drinking milk', 'Eating fish'], 0, 'By Doll and Hill.', 'lifestyle'),
], [
  Q('mdd23.c1', 'Why was Franklin not given the 1962 Nobel Prize?', ['She had died in 1958', 'She refused it', 'She was not a scientist'], 0, 'It is not given after death.', 'dna'),
  Q('mdd23.c2', 'Where was about a third of the genome mapped?', ['The Sanger Centre', 'St Thomas\'s Hospital', 'The Royal Society'], 0, 'The Sanger Centre near Cambridge.', 'genome'),
  Q('mdd23.c3', 'Which conditions are linked to lifestyle?', ['Heart disease and diabetes', 'Cholera and the plague', 'Smallpox and also polio'], 0, 'Diet and exercise matter.', 'lifestyle'),
  Q('mdd23.c4', 'What could people at genetic risk now have?', ['Tests', 'Bloodletting', 'Leeches'], 0, 'Genetic testing.', 'genes'),
  Q('mdd23.c5', 'Where did Crick and Watson work?', ['Cambridge', 'Oxford', 'Edinburgh'], 0, 'At the university.', 'dna'),
  Q('mdd23.c6', 'What did genome mapping open the way to?', ['Medicine tailored to genes', 'An end to every disease', 'An end to all vaccination'], 0, 'Personalised medicine.', 'genome'),
  Q('mdd23.c7', 'What declined as lifestyle illness rose?', ['Infectious disease', 'Average life expectancy', 'Hospital building'], 0, 'Antibiotics and vaccines.', 'lifestyle'),
  Q('mdd23.c8', 'Which risk were some genes found to raise?', ['Breast cancer', 'Broken bones', 'Sunburn'], 0, 'In the mid-1990s.', 'genes'),
], {exam: 'Explain one way in which ideas about the cause of illness in the period c1900–present were different from ideas in the period c1700–c1900. (4 marks)'}),

lesson(T, 'medicine.diagnosis', 'Modern diagnosis', ['11 4.1'], [
  ['X-rays and blood tests', 'X-rays, discovered by Wilhelm Röntgen in 1895, let doctors see bones and some organs without surgery. The discovery of blood groups in 1901 and later laboratory tests meant blood could be checked for infection, sugar levels, cholesterol and many conditions.'],
  ['Scanning the body', 'Ultrasound, developed for pregnancy by Ian Donald in Glasgow in the 1950s, uses sound waves to show the inside of the body. The British engineer Godfrey Hounsfield invented the CT scanner, which builds a detailed picture from many X-ray images; it was first used on a patient in London in 1971. MRI scanners, which use magnets, followed in the 1970s and 1980s.'],
  ['Monitors', 'Electrocardiograms (ECGs) record the heart\'s electrical activity, and machines now monitor blood pressure, heart rate and oxygen levels continuously in hospitals. People with diabetes can test and monitor their own blood sugar at home.'],
  ['Impact', 'Better diagnosis means illnesses can be found earlier and more precisely, and treatment can be targeted. But scanners are expensive, so access depends on funding, and more tests can lead to longer waiting lists.'],
], view.factors('Why diagnosis improved', [
  ['Science and technology', 'X-rays, ultrasound, CT, MRI, laboratory tests'],
  ['Individuals', 'Röntgen, Donald and Hounsfield'],
  ['The NHS', 'made tests and scans available to everyone'],
  ['Limits', 'cost and waiting lists'],
]), [
  view.timeline('Diagnosis', [
    ['1895', 'X-rays discovered'],
    ['1901', 'Blood groups discovered'],
    ['1903', 'The electrocardiogram developed'],
    ['1950s', 'Ultrasound used in pregnancy'],
    ['1971', 'First CT scan of a patient, in London'],
    ['1980s', 'MRI scanners in hospitals'],
  ]),
  view.people('People', [
    ['Wilhelm Röntgen', 'Discovered X-rays'],
    ['Ian Donald', 'Developed ultrasound for pregnancy'],
    ['Godfrey Hounsfield', 'Invented the CT scanner'],
    ['Laboratory scientists', 'Developed blood tests'],
  ]),
  view.source('A source type: an early CT scan image', 'One of the first CT scan images of a patient\'s brain, from 1971, showing a tumour.', 'Useful evidence of what the new technology could show; one image does not show how widely scanners were available.'),
], [
  ['How did CT scanning improve diagnosis?', ['It built detailed pictures of the inside of the body from many X-ray images', 'It used germs to show which parts of the body were infected', 'It replaced the need for doctors to examine patients at all'], 0, 'Detail without surgery.'],
  ['What is a limit of modern diagnosis?', ['Scanners are expensive, so access and waiting lists depend on funding', 'Modern scanners cannot show any of the organs inside the body', 'Blood tests have been banned in British hospitals since 2000'], 0, 'Cost limits who can be scanned.'],
  ['Exam skill · Explain why. Which explains why diagnosis improved after 1900?', ['New technology such as X-rays and scanners showed the inside of the body, so illness was found earlier.', 'Godfrey Hounsfield was a British engineer who invented the CT scanner.', 'Ultrasound was developed for use in pregnancy by Ian Donald in Glasgow.'], 0, 'Explanation links technology to its effect.'],
  ['What does an ECG record?', ['The heart\'s electrical activity', 'The amount of sugar in the blood', 'The structure of a person\'s DNA'], 0, 'A monitor of the heart.'],
], [
  Q('mdd24.p1', 'Who discovered X-rays?', ['Wilhelm Röntgen', 'Godfrey Hounsfield', 'Marie Curie'], 0, 'Röntgen discovered them in 1895.', 'xray'),
  Q('mdd24.p2', 'Who invented the CT scanner?', ['Godfrey Hounsfield', 'Ian Donald', 'Alexander Fleming'], 0, 'A British engineer.', 'scans'),
  Q('mdd24.p3', 'What does ultrasound use?', ['Sound waves', 'Strong magnets', 'X-ray beams'], 0, 'Safe in pregnancy.', 'scans'),
  Q('mdd24.p4', 'When was the first CT scan of a patient?', ['1971', '1895', '1953'], 0, 'The first CT scan was in London.', 'scans'),
  Q('mdd24.p5', 'What does MRI use?', ['Powerful magnets', 'Sound waves', 'Radioactive dye only'], 0, 'From the 1970s–80s.', 'scans'),
], [
  Q('mdd24.c1', 'When were blood groups discovered?', ['1901', '1971', '1846'], 0, 'Enabling safe transfusion and tests.', 'blood'),
  Q('mdd24.c2', 'Who developed ultrasound for pregnancy?', ['Ian Donald', 'James Simpson', 'Joseph Lister'], 0, 'Ian Donald worked in Glasgow.', 'scans'),
  Q('mdd24.c3', 'What can people with diabetes monitor at home?', ['Blood sugar', 'Bone density', 'Brain waves'], 0, 'Self-testing at home.', 'monitors'),
  Q('mdd24.c4', 'What can blood tests check for?', ['Infection and cholesterol', 'Broken bones and sprains', 'Eyesight and hearing'], 0, 'Many conditions.', 'blood'),
  Q('mdd24.c5', 'What is a benefit of earlier diagnosis?', ['More targeted treatment', 'Higher costs and nothing else', 'Fewer doctors being needed'], 0, 'Illness is found sooner.', 'impact'),
  Q('mdd24.c6', 'What do hospital monitors track?', ['Heart rate and oxygen', 'Hospital running costs', 'Numbers of visitors'], 0, 'They monitor patients continuously.', 'monitors'),
  Q('mdd24.c7', 'What can more testing lead to?', ['Longer waiting lists', 'No waiting lists at all', 'Far fewer patients'], 0, 'A pressure on services.', 'impact'),
  Q('mdd24.c8', 'What did X-rays let doctors see?', ['Bones without surgery', 'Germs floating in the air', 'Genes inside the cells'], 0, 'X-rays were discovered in 1895.', 'xray'),
], {exam: 'Explain why there were improvements in diagnosis in the period c1900–present. (12 marks)'}),

lesson(T, 'medicine.nhs', 'Hospital care and the NHS', ['11 4.2'], [
  ['Before the NHS', 'In the early 1900s many people could not afford a doctor. The 1911 National Insurance Act gave some workers free treatment from a doctor, but not their wives or children. Hospitals were a mix of charity-funded voluntary hospitals and council hospitals, and their quality varied widely across the country.'],
  ['The impact of war', 'During the Second World War the government ran an Emergency Medical Service that organised hospitals nationally. Evacuating children revealed how poor and unhealthy many families were. In 1942 the Beveridge Report proposed tackling five "giants", including Disease, through a welfare state.'],
  ['Creating the NHS', 'The Labour government\'s NHS Act of 1946 created a National Health Service, launched on 5 July 1948 under Aneurin Bevan. Many doctors opposed it at first, fearing control by the state; Bevan won them over by letting GPs stay independent and hospital consultants keep private patients.'],
  ['Improved access', 'Demand was huge: millions of people received free treatment, prescriptions, glasses and false teeth for the first time. Costs rose so fast that charges for prescriptions were introduced in 1952. The NHS gave everyone access to care regardless of income, the biggest change in care in this period.'],
], view.factors('Why the NHS was created in 1948', [
  ['War', 'the Emergency Medical Service showed national organisation worked'],
  ['Evidence', 'evacuation revealed poor health and poverty'],
  ['Ideas', 'the Beveridge Report proposed a welfare state'],
  ['Politics', 'a Labour government elected in 1945 with a large majority'],
]), [
  view.timeline('Towards the NHS', [
    ['1911', 'National Insurance Act'],
    ['1939', 'Emergency Medical Service set up'],
    ['1942', 'The Beveridge Report'],
    ['1945', 'Labour wins the general election'],
    ['1946', 'NHS Act passed'],
    ['5 Jul 1948', 'The NHS launched'],
    ['1952', 'Prescription charges introduced'],
  ]),
  view.people('People and groups', [
    ['William Beveridge', 'Proposed the welfare state'],
    ['Aneurin Bevan', 'Minister of Health who launched the NHS'],
    ['The British Medical Association', 'Represented doctors who at first opposed the NHS'],
    ['Patients', 'Received free treatment from 1948'],
  ]),
  view.source('A source type: a 1948 government leaflet', 'A leaflet delivered to every home explaining that the new health service would provide free care for everyone.', 'Useful for what the NHS promised; published to encourage people to register, it does not show the problems that followed.'),
], [
  ['Why did many doctors oppose the NHS at first?', ['They feared losing their independence to state control', 'They wanted patients to pay much more for treatment', 'They believed that the NHS would ban all surgery'], 0, 'Professional independence.'],
  ['How did the war help create the NHS?', ['National organisation of hospitals worked, and evacuation revealed poor health', 'The war destroyed every hospital, so new ones had to be built by the state', 'Soldiers demanded that only they should receive free medical care'], 0, 'War changed expectations.'],
  ['Exam skill · How far? Which judgement is best supported?', ['The NHS was the biggest change in care, because it gave everyone access, though costs soon forced some charges.', 'The NHS was very important because it was launched in July 1948 by Aneurin Bevan.', 'The NHS changed nothing, because people still went to see their family doctor.'], 0, 'A supported judgement weighs impact and limits.'],
  ['Who was left out of the 1911 National Insurance scheme?', ['Workers\' wives and children', 'All men in work', 'Soldiers and sailors only'], 0, 'Coverage was limited.'],
], [
  Q('mdd25.p1', 'When was the NHS launched?', ['5 July 1948', '1 January 1911', '4 March 1942'], 0, 'Launched under Aneurin Bevan.', 'nhs'),
  Q('mdd25.p2', 'What did the 1911 Act give some workers?', ['Free treatment from a doctor', 'Free hospitals for families', 'Free prescriptions for all'], 0, 'Not their families.', 'before'),
  Q('mdd25.p3', 'What did the Beveridge Report propose tackling?', ['Five "giants"', 'Four humours', 'Three problems of surgery'], 0, 'Including Disease.', 'war'),
  Q('mdd25.p4', 'When were prescription charges introduced?', ['1952', '1948', '1911'], 0, 'Costs rose fast.', 'access'),
  Q('mdd25.p5', 'Which wartime service organised hospitals nationally?', ['The Emergency Medical Service', 'The Royal Army Medical Corps', 'The Royal Society of London'], 0, 'It was set up from 1939.', 'war'),
], [
  Q('mdd25.c1', 'Which party created the NHS?', ['Labour', 'Conservative', 'Liberal'], 0, 'Elected in 1945.', 'nhs'),
  Q('mdd25.c2', 'What did evacuation reveal?', ['Poor health and poverty', 'Rich, healthy families', 'Nothing new'], 0, 'Shocking evidence.', 'war'),
  Q('mdd25.c3', 'How did Bevan win doctors over?', ['GPs stayed independent', 'He paid them nothing', 'He banned private work'], 0, 'Consultants kept private patients.', 'nhs'),
  Q('mdd25.c4', 'What did many people get for free in 1948?', ['Glasses and false teeth', 'Houses and brand-new cars', 'Holidays at the seaside'], 0, 'Demand was huge in 1948.', 'access'),
  Q('mdd25.c5', 'Which Act created the NHS?', ['The 1946 NHS Act', 'The 1875 Public Health Act', 'The 1911 Insurance Act'], 0, 'It was passed in 1946.', 'nhs'),
  Q('mdd25.c6', 'What were voluntary hospitals funded by?', ['Charity', 'The NHS', 'The Church only'], 0, 'Voluntary hospitals before 1948.', 'before'),
  Q('mdd25.c7', 'What was the biggest change the NHS made?', ['Access for everyone', 'A new kind of surgery', 'An end to illness'], 0, 'Regardless of income.', 'access'),
  Q('mdd25.c8', 'Who represented doctors who opposed the NHS?', ['The BMA', 'The FANY', 'The RAMC'], 0, 'The British Medical Association.', 'nhs'),
], {exam: 'Explain why the NHS was set up in 1948. (12 marks)'}),

lesson(T, 'medicine.magic-bullets', 'Magic bullets and antibiotics', ['11 4.2'], [
  ['Ehrlich\'s magic bullet', 'Paul Ehrlich, a German scientist who had worked with Koch, searched for a chemical that would kill a particular germ without harming the body: a "magic bullet". In 1909 his team, including Sahachiro Hata, found that the 606th compound they tested, Salvarsan 606, cured syphilis.'],
  ['Prontosil and the sulphonamides', 'In 1932 Gerhard Domagk found that a red dye, Prontosil, killed the bacteria that cause blood poisoning; he used it to save his own daughter. Related drugs, the sulphonamides, followed. In 1943 one of them, M&B 693, cured Winston Churchill of pneumonia.'],
  ['Antibiotics', 'Antibiotics are drugs made from living organisms that kill bacteria. Penicillin, mass-produced from the 1940s, was the first; others followed, such as streptomycin in 1943, which treated tuberculosis. Infections that had killed millions became curable.'],
  ['New problems', 'Bacteria can become resistant when antibiotics are overused or courses are not finished. Resistant infections such as MRSA have become a serious problem in hospitals, and doctors are now urged to prescribe antibiotics only when needed.'],
], view.factors('Why new medicines were developed', [
  ['Science', 'Koch\'s identification of specific germs made targeted drugs possible'],
  ['Industry', 'chemical and drug companies tested thousands of compounds'],
  ['War', 'huge demand for treatments for wounds and infections'],
  ['Limit', 'resistance from overuse'],
]), [
  view.timeline('New medicines', [
    ['1909', 'Salvarsan 606 cures syphilis'],
    ['1932', 'Prontosil discovered'],
    ['1938', 'M&B 693 developed'],
    ['1943', 'Churchill cured of pneumonia; streptomycin discovered'],
    ['1940s', 'Penicillin mass-produced'],
    ['1960s onwards', 'Resistant bacteria such as MRSA appear'],
  ]),
  view.people('People', [
    ['Paul Ehrlich', 'Searched for a magic bullet'],
    ['Sahachiro Hata', 'Found that compound 606 worked'],
    ['Gerhard Domagk', 'Discovered Prontosil'],
    ['Winston Churchill', 'Cured by M&B 693 in 1943'],
  ]),
  view.source('A source type: a drug company advertisement', 'A 1940s advertisement in a medical journal promoting a sulphonamide drug for pneumonia.', 'Useful for how new drugs were marketed to doctors; it was written to sell, so it stresses benefits over risks.'),
], [
  ['What was a "magic bullet"?', ['A chemical that kills a particular germ without harming the body', 'A vaccine that protects against every disease at the same time', 'A machine that scans the body for any signs of disease'], 0, 'Targeted treatment.'],
  ['Why did Koch\'s work make magic bullets possible?', ['Scientists could identify the specific germ a drug had to target', 'Koch had already invented the first antibiotic in 1882', 'Koch proved that disease was caused by bad air in hospitals'], 0, 'Knowing the target.'],
  ['Exam skill · Explain one difference. Which explains a difference in treatment between c1700–c1900 and c1900–present?', ['After 1900 drugs could cure infections, because scientists could target specific germs.', 'Paul Ehrlich\'s team found that compound number 606 cured syphilis in 1909.', 'Gerhard Domagk used Prontosil to save the life of his own daughter.'], 0, 'A difference is explained by a cause.'],
  ['Why has antibiotic resistance grown?', ['Overuse and unfinished courses let resistant bacteria survive', 'Antibiotics have been banned in British hospitals since 1990', 'Doctors stopped using antibiotics after the Second World War'], 0, 'Misuse has consequences.'],
], [
  Q('mdd26.p1', 'What did Salvarsan 606 cure?', ['Syphilis', 'Smallpox', 'Pneumonia'], 0, 'Salvarsan 606 worked in 1909.', 'magic-bullet'),
  Q('mdd26.p2', 'Who discovered Prontosil?', ['Gerhard Domagk', 'Paul Ehrlich', 'Alexander Fleming'], 0, 'Domagk found it in 1932.', 'sulphonamides'),
  Q('mdd26.p3', 'Which drug cured Churchill in 1943?', ['M&B 693', 'Penicillin', 'Salvarsan'], 0, 'M&B 693 was a sulphonamide.', 'sulphonamides'),
  Q('mdd26.p4', 'Which antibiotic treated tuberculosis?', ['Streptomycin', 'Salvarsan 606', 'Prontosil dye'], 0, 'Discovered in 1943.', 'antibiotics'),
  Q('mdd26.p5', 'What is MRSA?', ['A resistant bacterium', 'A new type of vaccine', 'A kind of body scanner'], 0, 'A hospital problem.', 'resistance'),
], [
  Q('mdd26.c1', 'Who worked with Ehrlich to find 606?', ['Sahachiro Hata', 'Ernst Boris Chain', 'Robert Koch'], 0, 'He tested the compound.', 'magic-bullet'),
  Q('mdd26.c2', 'What was Prontosil originally?', ['A red dye', 'A mould', 'A vaccine'], 0, 'It killed bacteria.', 'sulphonamides'),
  Q('mdd26.c3', 'Whose life did Domagk save with Prontosil?', ['His daughter\'s', 'Winston Churchill\'s', 'His own wife\'s'], 0, 'From blood poisoning.', 'sulphonamides'),
  Q('mdd26.c4', 'What are antibiotics made from?', ['Living organisms', 'Metals such as mercury', 'Radiation beams'], 0, 'Such as moulds and fungi.', 'antibiotics'),
  Q('mdd26.c5', 'What did Churchill have in 1943?', ['Pneumonia', 'Smallpox', 'Cholera'], 0, 'Cured by M&B 693.', 'sulphonamides'),
  Q('mdd26.c6', 'Which was the first antibiotic?', ['Penicillin', 'Prontosil', 'Salvarsan'], 0, 'Mass-produced in the 1940s.', 'antibiotics'),
  Q('mdd26.c7', 'What are doctors urged to do now?', ['Prescribe antibiotics only when needed', 'Prescribe antibiotics for every illness', 'Stop prescribing antibiotics altogether'], 0, 'To limit resistance.', 'resistance'),
  Q('mdd26.c8', 'Whom had Ehrlich worked with?', ['Robert Koch', 'Louis Pasteur', 'Joseph Lister'], 0, 'Ehrlich had worked with Koch in Germany.', 'magic-bullet'),
], {exam: 'Explain why there were advances in medicines in the period c1900–c1950. (12 marks)'}),

lesson(T, 'medicine.high-tech', 'High-tech medical and surgical treatment', ['11 4.2'], [
  ['Replacing organs', 'Kidney dialysis machines, which filter the blood when the kidneys fail, came into use in the 1940s and spread in Britain in the 1960s. The first successful kidney transplant in Britain was carried out in Edinburgh in 1960, and the first British heart transplant in 1968. Drugs to stop the body rejecting new organs, developed from the 1970s, made transplants far more successful.'],
  ['New surgery', 'John Charnley developed the modern hip replacement in the early 1960s. Keyhole surgery, using small cuts and a camera, spread in the 1980s and 1990s, reducing pain and recovery time. Robotic surgery, in which surgeons control precise instruments, has been used since the 2000s.'],
  ['Cancer and fertility treatment', 'Radiotherapy uses radiation to destroy cancer cells, and chemotherapy uses drugs. In 1978 Louise Brown, born in Oldham, became the world\'s first baby conceived by IVF, developed by Patrick Steptoe and Robert Edwards.'],
  ['Limits', 'High-tech treatment is expensive and is mostly provided in large specialist hospitals. Demand rises as people live longer, which puts pressure on NHS budgets, and new treatments raise ethical questions about who should receive them.'],
], view.factors('High-tech treatment: progress and limits', [
  ['Progress', 'dialysis, transplants, joint replacement, keyhole and robotic surgery, IVF'],
  ['Science and technology', 'anti-rejection drugs, cameras, computers, robotics'],
  ['The NHS', 'made many treatments available to all'],
  ['Limits', 'cost, specialist hospitals, ethical questions'],
]), [
  view.timeline('High-tech treatment', [
    ['1940s', 'Kidney dialysis machines developed'],
    ['1960', 'First successful UK kidney transplant, in Edinburgh'],
    ['1962', 'Charnley\'s hip replacement'],
    ['1968', 'First UK heart transplant'],
    ['1978', 'First IVF baby born'],
    ['1980s–90s', 'Keyhole surgery spreads'],
    ['2000s', 'Robotic surgery introduced'],
  ]),
  view.people('People', [
    ['John Charnley', 'Developed the modern hip replacement'],
    ['Patrick Steptoe and Robert Edwards', 'Developed IVF'],
    ['Louise Brown', 'The first IVF baby, born in 1978'],
    ['Transplant surgeons', 'Pioneered organ transplants'],
  ]),
  view.source('A source type: an NHS annual report', 'An NHS report showing the rising number and cost of transplant and joint-replacement operations each year.', 'Useful for the growth and cost of high-tech treatment; official figures show activity, not patients\' experiences.'),
], [
  ['Why did anti-rejection drugs matter?', ['They stopped the body rejecting new organs, making transplants succeed', 'They removed the need for any surgery to replace organs', 'They allowed doctors to grow new organs inside the body'], 0, 'Transplants depended on them.'],
  ['What are the benefits of keyhole surgery?', ['Less pain and faster recovery from smaller cuts', 'It needs no anaesthetic and no hospital stay at all', 'It can be carried out by patients on themselves at home'], 0, 'Less invasive surgery.'],
  ['Exam skill · Explain one difference. Which explains a difference between surgery in c1800–c1900 and today?', ['Today damaged organs and joints can be replaced, because of new technology and anti-rejection drugs.', 'John Charnley developed the modern hip replacement in the early 1960s.', 'The first heart transplant in Britain was carried out in the year 1968.'], 0, 'A difference is explained by a cause.'],
  ['What is a limit of high-tech treatment?', ['It is expensive and mostly available in large specialist hospitals', 'It cannot be used on anyone over the age of forty', 'It has been replaced by bloodletting in many hospitals'], 0, 'Cost limits access.'],
], [
  Q('mdd27.p1', 'Where was the first UK kidney transplant?', ['Edinburgh', 'Manchester', 'Cardiff'], 0, 'The transplant was in 1960.', 'transplants'),
  Q('mdd27.p2', 'When was the first UK heart transplant?', ['1968', '1948', '1990'], 0, 'A landmark operation.', 'transplants'),
  Q('mdd27.p3', 'Who developed the modern hip replacement?', ['John Charnley', 'Godfrey Hounsfield', 'Joseph Lister'], 0, 'In the early 1960s.', 'surgery'),
  Q('mdd27.p4', 'Who was the first IVF baby?', ['Louise Brown', 'Rosalind Franklin', 'Hannah Greener'], 0, 'She was born in 1978.', 'fertility'),
  Q('mdd27.p5', 'What does dialysis do?', ['Filters the blood', 'Scans the brain', 'Replaces the heart'], 0, 'When kidneys fail.', 'transplants'),
], [
  Q('mdd27.c1', 'Which surgery uses small cuts and a camera?', ['Keyhole surgery', 'Amputation surgery', 'Bloodletting'], 0, 'It spread from the 1980s.', 'surgery'),
  Q('mdd27.c2', 'What does chemotherapy use?', ['Drugs', 'Radiation', 'Magnets'], 0, 'To destroy cancer cells.', 'fertility'),
  Q('mdd27.c3', 'Who developed IVF?', ['Steptoe and Edwards', 'Crick and Watson', 'Florey and Chain'], 0, 'IVF was developed in the 1970s.', 'fertility'),
  Q('mdd27.c4', 'When did anti-rejection drugs develop?', ['From the 1970s', 'From the 1840s', 'From about 1348'], 0, 'Transplants improved.', 'transplants'),
  Q('mdd27.c5', 'Where is high-tech care mostly provided?', ['Large specialist hospitals', 'Small village surgeries', 'Local high-street pharmacies'], 0, 'It is expensive.', 'limits'),
  Q('mdd27.c6', 'What raises demand for treatment?', ['People living longer', 'Fewer hospitals open', 'Lower rates of tax'], 0, 'An ageing population.', 'limits'),
  Q('mdd27.c7', 'When was robotic surgery introduced?', ['The 2000s', 'The 1940s', 'The 1960s'], 0, 'Precise instruments.', 'surgery'),
  Q('mdd27.c8', 'What does radiotherapy use?', ['Radiation', 'Antibiotics', 'Sound waves'], 0, 'It is used against cancer.', 'fertility'),
], {exam: '"Science and technology were the main reason for improvements in medical treatment in the period c1900–present." How far do you agree? (16 marks)'}),

lesson(T, 'medicine.campaigns', 'Mass vaccination and lifestyle campaigns', ['11 4.2'], [
  ['Mass vaccination', 'From 1942 the government ran a national campaign to vaccinate children against diphtheria, which had killed thousands each year, and deaths fell sharply. A polio vaccine was introduced in Britain in 1956, and from 1962 an oral version was given on a sugar lump. MMR followed in 1988, and the HPV vaccine for teenagers in 2008. Smallpox was declared eradicated worldwide in 1980.'],
  ['Why vaccination worked', 'Vaccines were free through the NHS and given through schools and GP surgeries, so most children were reached. Vaccination in Britain has remained voluntary, so campaigns depend on persuading parents; a now-discredited 1998 study linking MMR to autism lowered take-up for years.'],
  ['Lifestyle campaigns', 'As lifestyle-related illness grew, governments tried to change behaviour. Campaigns have targeted smoking, alcohol, drugs and sexual health, including a major AIDS awareness campaign in 1987, and healthy eating, such as "5 A Day" (2003) and Change4Life (2009).'],
  ['From persuasion to law', 'Persuasion alone often has limited effect, so governments have also used laws and taxes: banning smoking in enclosed public places in 2007 and taxing sugary drinks from 2018. Critics argue some measures interfere too much in personal choice, while supporters point to falling smoking rates.'],
], view.factors('Methods of prevention since 1900', [
  ['Vaccination', 'free national campaigns through the NHS'],
  ['Persuasion', 'lifestyle campaigns on smoking, diet, alcohol and sexual health'],
  ['Law and tax', 'smoking ban; sugar tax'],
  ['Limits', 'voluntary vaccination; personal choice; scares about vaccines'],
]), [
  view.timeline('Prevention', [
    ['1942', 'National diphtheria vaccination campaign'],
    ['1956', 'Polio vaccine introduced in Britain'],
    ['1980', 'Smallpox declared eradicated'],
    ['1987', 'AIDS awareness campaign'],
    ['1988', 'MMR vaccine introduced'],
    ['2007', 'Smoking banned in enclosed public places in England'],
    ['2018', 'Tax on sugary drinks'],
  ]),
  view.people('People and bodies', [
    ['The NHS', 'Provides free vaccines through schools and GPs'],
    ['The World Health Organization', 'Led the global eradication of smallpox'],
    ['The government', 'Runs campaigns and passes health laws'],
    ['Parents', 'Decide whether children are vaccinated'],
  ]),
  view.source('A source type: a public health campaign poster', 'A government poster encouraging people to eat five portions of fruit and vegetables a day.', 'Useful for the message and methods of a campaign; it shows what the government wanted, not whether people changed.'),
], [
  ['Why did mass vaccination reach most children?', ['Vaccines were free through the NHS and given in schools and surgeries', 'Vaccination was made compulsory by law for every child in Britain', 'Parents were paid a large sum of money for every vaccination'], 0, 'Free and accessible.'],
  ['Why have governments added laws to campaigns?', ['Persuasion alone often has limited effect on behaviour', 'Campaigns were banned by the European Union in 2000', 'Laws are cheaper than any kind of advertising campaign'], 0, 'Law changes behaviour more directly.'],
  ['Exam skill · Explain one similarity. Which explains a similarity between prevention in c1800–c1900 and today?', ['In both periods government acted to prevent disease, because evidence showed it could save lives.', 'In 1942 the government began a national campaign to vaccinate children against diphtheria.', 'Smallpox was declared eradicated across the whole world in the year 1980.'], 0, 'A similarity explained by a reason.'],
  ['What lowered MMR take-up for years?', ['A now-discredited 1998 study linking it to autism', 'A law banning the vaccine in British schools', 'A shortage of doctors trained to give vaccines'], 0, 'Confidence matters.'],
], [
  Q('mdd28.p1', 'When did the diphtheria campaign begin?', ['1942', '1988', '1956'], 0, 'Deaths fell sharply.', 'vaccination'),
  Q('mdd28.p2', 'When was smallpox declared eradicated?', ['1980', '1853', '1948'], 0, 'Eradicated worldwide.', 'vaccination'),
  Q('mdd28.p3', 'How was oral polio vaccine given from 1962?', ['On a sugar lump', 'By injection only', 'In bread'], 0, 'Easy for children.', 'vaccination'),
  Q('mdd28.p4', 'When was Change4Life launched?', ['2009', '1987', '1948'], 0, 'A healthy eating campaign.', 'campaigns'),
  Q('mdd28.p5', 'When was the sugary-drinks tax introduced?', ['2018', '2007', '1998'], 0, 'Using tax to change behaviour.', 'law'),
], [
  Q('mdd28.c1', 'Is vaccination compulsory in Britain?', ['No, voluntary', 'Yes, by law', 'Only for adults'], 0, 'Persuasion is needed.', 'why-worked'),
  Q('mdd28.c2', 'When was MMR introduced?', ['1988', '1942', '2008'], 0, 'Measles, mumps, rubella.', 'vaccination'),
  Q('mdd28.c3', 'Which campaign ran in 1987?', ['AIDS awareness', 'Change4Life', 'Five A Day campaign'], 0, 'A sexual health campaign.', 'campaigns'),
  Q('mdd28.c4', 'Which vaccine was given to teenagers from 2008?', ['HPV', 'Smallpox', 'Polio'], 0, 'A recent addition.', 'vaccination'),
  Q('mdd28.c5', 'What did critics say about some measures?', ['They interfered with personal choice', 'They did not go nearly far enough', 'They were kept secret from the public'], 0, 'A continuing debate.', 'law'),
  Q('mdd28.c6', 'Which organisation led smallpox eradication?', ['The World Health Organization', 'The NHS working on its own', 'The Royal Society of Medicine'], 0, 'It led the effort globally.', 'vaccination'),
  Q('mdd28.c7', 'When did "5 A Day" begin?', ['2003', '1942', '2018'], 0, 'Fruit and vegetables.', 'campaigns'),
  Q('mdd28.c8', 'Where are vaccines given?', ['Schools and GP surgeries', 'Only in clinics abroad', 'Only in army barracks'], 0, 'Reaching most children.', 'why-worked'),
], {exam: 'Explain one way in which the prevention of disease in the period c1900–present was similar to prevention in the period c1800–c1900. (4 marks)'}),
];
