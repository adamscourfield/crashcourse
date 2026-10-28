// Pearson Edexcel GCSE (9–1) History 1HI0, Option 11: Medicine in Britain, c1250–present.
// Key topic 4: c1900–present, medicine in modern Britain (specification 4.1–4.3).
// All teaching text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

export const medicineTopic4 = {id: 'history.medicine.kt4', unit: '11', title: 'c1900–present: Medicine in modern Britain', paper: 'Paper 1 · Thematic study'};
const T = medicineTopic4.id;

export const medicineLessons4 = [
lesson(T, 'medicine.modern-ideas', 'Modern ideas: genetics, lifestyle and diagnosis', ['11 4.1'], [
  ['Germ theory and beyond', 'By 1900 germ theory was accepted, and it remained the main explanation for infectious disease. In the twentieth century doctors increasingly recognised other causes too: faults in genes, and lifestyle factors such as smoking, diet, alcohol and lack of exercise.'],
  ['Genetics', 'In 1953 Francis Crick and James Watson, using X-ray images produced by Rosalind Franklin and Maurice Wilkins, worked out the double-helix structure of DNA. This allowed scientists to understand how characteristics, and some diseases, are inherited. The Human Genome Project (1990–2003) mapped all human genes, helping to identify genes linked to conditions such as some cancers.'],
  ['Lifestyle', 'As infectious diseases declined, conditions such as heart disease, type 2 diabetes and many cancers became leading causes of death. Research linked these to lifestyle, for example the link between smoking and lung cancer shown by Richard Doll and Austin Bradford Hill in 1950.'],
  ['Diagnosis', 'New technology made diagnosis far more accurate: X-rays (from 1895), blood tests that identify infections and conditions, CT and MRI scans that show the inside of the body, and monitors that track blood pressure, heart rate and blood sugar.'],
], view.factors('What changed ideas about cause?', [
  ['Science and technology', 'X-ray crystallography; DNA research; computers to map the genome'],
  ['Individuals and teams', 'Crick, Watson, Franklin and Wilkins; Doll and Hill'],
  ['Government', 'funding for the Human Genome Project'],
  ['Continuity', 'germ theory still explains infectious disease'],
]), [
  view.timeline('Modern ideas', [
    ['1895', 'X-rays discovered'],
    ['1950', 'Doll and Hill link smoking to lung cancer'],
    ['1953', 'Structure of DNA worked out'],
    ['1970s', 'CT scanners introduced'],
    ['1980s', 'MRI scanners introduced'],
    ['2003', 'Human Genome Project completed'],
  ]),
  view.people('People', [
    ['Crick and Watson', 'Worked out the double-helix structure of DNA'],
    ['Rosalind Franklin', 'Produced the X-ray images that revealed the structure'],
    ['Doll and Hill', 'Showed the link between smoking and lung cancer'],
    ['Human Genome Project', 'International team that mapped human genes'],
  ]),
  view.source('A source type: a medical research paper', 'A published study comparing the smoking habits of lung-cancer patients with those of other patients.', 'Strong evidence of a statistical link; it needed further research to show how smoking caused cancer.'),
], [
  ['What did the discovery of DNA\'s structure make possible?', ['Understanding how characteristics and some diseases are inherited', 'Seeing bacteria for the first time under an ordinary microscope', 'Proving that miasma from rivers caused cholera in towns'], 0, 'Genetics opened a new understanding of cause.'],
  ['Why did lifestyle factors become more important?', ['Infectious diseases declined, so conditions linked to lifestyle caused more deaths', 'People in the twentieth century stopped catching infectious diseases altogether', 'The government banned doctors from treating infectious diseases after 1948'], 0, 'The pattern of disease changed.'],
  ['Exam skill · Explain a difference. Which explains a difference in ideas about cause compared with c1700–c1900?', ['Doctors now saw genes and lifestyle as causes as well as germs, because of new research.', 'In both periods doctors accepted that germs in the environment caused infections.', 'Crick and Watson worked out the structure of DNA in 1953, using Franklin\'s images.'], 0, 'A difference contrasts the periods and explains why.'],
  ['Which development improved diagnosis?', ['CT and MRI scans showing the inside of the body', 'Swan-necked flasks showing that air carries microbes', 'The Bills of Mortality listing the causes of death'], 0, 'Technology made diagnosis more accurate.'],
], [
  Q('med13.p1', 'When was the structure of DNA worked out?', ['1953', '1928', '2003'], 0, 'The genome map was completed in 2003.', 'genetics'),
  Q('med13.p2', 'Whose X-ray images helped reveal DNA\'s structure?', ['Rosalind Franklin', 'Florence Nightingale', 'Marie Stopes'], 0, 'With Maurice Wilkins.', 'genetics'),
  Q('med13.p3', 'What did the Human Genome Project do?', ['Mapped all human genes', 'Built the first CT scanner', 'Founded the NHS in 1948'], 0, 'It ran from 1990 to 2003.', 'genetics'),
  Q('med13.p4', 'Who linked smoking to lung cancer in 1950?', ['Doll and Hill', 'Crick and Watson', 'Florey and Chain'], 0, 'Using patient statistics.', 'lifestyle'),
  Q('med13.p5', 'When were X-rays discovered?', ['1895', '1953', '1848'], 0, 'By Wilhelm Röntgen.', 'diagnosis'),
], [
  Q('med13.c1', 'Which is a lifestyle factor?', ['Smoking', 'A faulty gene', 'A virus'], 0, 'It is a choice or habit.', 'lifestyle'),
  Q('med13.c2', 'What shape is DNA?', ['A double helix', 'A single straight line', 'A hollow sphere'], 0, 'Two twisted strands.', 'genetics'),
  Q('med13.c3', 'Which explanation remained for infectious disease?', ['Germ theory', 'The Four Humours', 'Miasma from rivers'], 0, 'Continuity since 1900.', 'continuity'),
  Q('med13.c4', 'What do CT and MRI scans show?', ['The inside of the body', 'Germs carried in the air', 'The patient\'s genes and DNA'], 0, 'Detailed images.', 'diagnosis'),
  Q('med13.c5', 'Which diseases became leading causes of death?', ['Heart disease and cancers', 'Plague and cholera outbreaks', 'Smallpox and scurvy epidemics'], 0, 'As infections declined.', 'lifestyle'),
  Q('med13.c6', 'What do blood tests help doctors do?', ['Identify infections and conditions', 'Mend broken bones more quickly', 'Carry out keyhole surgery safely'], 0, 'A key diagnostic tool.', 'diagnosis'),
  Q('med13.c7', 'Which helped map the human genome?', ['Powerful computers', 'Swan-necked flasks', 'Carbolic spray'], 0, 'Huge amounts of data.', 'genetics'),
  Q('med13.c8', 'What do monitors track?', ['Blood pressure and heart rate', 'Hospital costs and waiting times', 'Germs in the drinking water'], 0, 'Continuous measurement.', 'diagnosis'),
], {exam: 'Explain why there was progress in understanding the causes of illness in the period c1900–present. (12 marks)'}),

lesson(T, 'medicine.nhs-treatment', 'Treatment and care: magic bullets, the NHS and high-tech medicine', ['11 4.2'], [
  ['Magic bullets', 'A magic bullet is a chemical that kills a specific germ without harming the body. In 1909 Paul Ehrlich\'s team found Salvarsan 606, which treated syphilis. In 1932 Gerhard Domagk found Prontosil, the first sulphonamide drug, which treated blood poisoning. These were the first effective chemical cures.'],
  ['The NHS, 1948', 'The Second World War, and the 1942 Beveridge Report, created support for a welfare state. In 1948 the Labour government, with Aneurin Bevan as Minister of Health, launched the National Health Service: free care for everyone, paid for by taxation. Many people could now see a doctor or go to hospital without paying, and many hospitals were brought into one national system.'],
  ['High-tech treatment', 'Hospitals developed treatments such as kidney dialysis, transplants (the first UK heart transplant was in 1968), keyhole surgery, radiotherapy and chemotherapy, and later robotic surgery. These were expensive and mostly provided in large hospitals.'],
  ['Continuity and limits', 'Most care still happens at home or with a GP, and pharmacists and families still matter. The NHS has faced rising costs as people live longer and treatments become more expensive.'],
], view.factors('How far did care and treatment change?', [
  ['Big change', 'free care for all from 1948; effective chemical cures; high-tech hospital treatment'],
  ['Continuity', 'much care still at home and with family doctors'],
  ['Why', 'science and technology; government funding; the impact of war'],
  ['Limits', 'cost; waiting lists; side effects of drugs'],
]), [
  view.timeline('Treatment and care', [
    ['1909', 'Salvarsan 606, the first magic bullet'],
    ['1932', 'Prontosil discovered'],
    ['1942', 'The Beveridge Report'],
    ['1948', 'The NHS is launched'],
    ['1968', 'First UK heart transplant'],
    ['1980s', 'Keyhole surgery spreads'],
  ]),
  view.people('People', [
    ['Paul Ehrlich', 'Led the team that found Salvarsan 606'],
    ['Gerhard Domagk', 'Discovered Prontosil'],
    ['William Beveridge', 'His report proposed a welfare state'],
    ['Aneurin Bevan', 'Minister of Health who launched the NHS'],
  ]),
  view.source('A source type: a government information leaflet', 'A leaflet sent to households in 1948 explaining that the new health service would be free for everyone.', 'Useful evidence of what the NHS promised; it was published to encourage people to use it, so it does not show problems.'),
], [
  ['What is a magic bullet?', ['A chemical that kills a specific germ without harming the body', 'A vaccine that protects against several diseases with one injection', 'A type of surgery that removes a tumour through a very small cut'], 0, 'Ehrlich\'s idea of a targeted cure.'],
  ['What did the NHS change in 1948?', ['Medical care became free for everyone, paid for by taxation', 'Hospitals were closed and all care moved back into the home', 'Doctors were allowed to charge patients whatever they wanted'], 0, 'Access was the key change.'],
  ['Exam skill · Explain why. Which best explains why the NHS was set up in 1948?', ['The war and the Beveridge Report built support for the government to provide free care.', 'The NHS was launched by Aneurin Bevan, the Minister of Health, in July 1948.', 'High-tech treatments such as heart transplants were very expensive to provide.'], 0, 'The answer links causes to the outcome.'],
  ['Why has the NHS faced rising costs?', ['People live longer and new treatments are expensive', 'The number of doctors trained each year has fallen to zero', 'Taxes were abolished, so it has no source of money left'], 0, 'Success brings new pressures.'],
], [
  Q('med14.p1', 'When was the NHS launched?', ['1948', '1942', '1968'], 0, 'The Beveridge Report was 1942.', 'nhs'),
  Q('med14.p2', 'Who was Minister of Health when the NHS began?', ['Aneurin Bevan', 'William Beveridge', 'Edwin Chadwick'], 0, 'Beveridge wrote the report.', 'nhs'),
  Q('med14.p3', 'What was Salvarsan 606 used to treat?', ['Syphilis', 'Smallpox', 'Lung cancer'], 0, 'The first magic bullet, 1909.', 'magic-bullets'),
  Q('med14.p4', 'Who discovered Prontosil?', ['Gerhard Domagk', 'Paul Ehrlich', 'Alexander Fleming'], 0, 'He discovered it in 1932.', 'magic-bullets'),
  Q('med14.p5', 'When was the first UK heart transplant?', ['1968', '1948', '2003'], 0, 'A high-tech treatment.', 'high-tech'),
], [
  Q('med14.c1', 'How is the NHS paid for?', ['Through taxation', 'By patients at each visit', 'By the Church'], 0, 'Free at the point of use.', 'nhs'),
  Q('med14.c2', 'Which report proposed a welfare state?', ['The Beveridge Report', 'The Chadwick Report', 'The Bills of Mortality'], 0, 'Published in 1942.', 'nhs'),
  Q('med14.c3', 'What did Prontosil treat?', ['Blood poisoning', 'Syphilis', 'Tuberculosis (TB)'], 0, 'It was a sulphonamide.', 'magic-bullets'),
  Q('med14.c4', 'Which is a high-tech treatment?', ['Kidney dialysis', 'Bloodletting', 'Herbal remedies'], 0, 'Provided in hospitals.', 'high-tech'),
  Q('med14.c5', 'Where does most care still happen?', ['At home or with a GP', 'In large hospitals', 'In pest houses'], 0, 'This shows continuity.', 'continuity'),
  Q('med14.c6', 'Who led the team that found Salvarsan 606?', ['Paul Ehrlich', 'Robert Koch', 'Louis Pasteur'], 0, 'His team found it in 1909.', 'magic-bullets'),
  Q('med14.c7', 'What helped create support for the NHS?', ['The Second World War', 'The Great Plague of 1665', 'The Black Death of 1348'], 0, 'Shared wartime effort.', 'nhs'),
  Q('med14.c8', 'Which is a limit of high-tech medicine?', ['High cost', 'It never works', 'It is illegal'], 0, 'Expensive to provide.', 'continuity'),
], {exam: '"The creation of the NHS was the most important change in care and treatment in the period c1900–present." How far do you agree? (16 marks)'}),

lesson(T, 'medicine.modern-prevention', 'Modern prevention: vaccination, government action and lifestyle campaigns', ['11 4.2'], [
  ['Government action before 1948', 'After many volunteers for the Boer War (1899–1902) were found unfit, the Liberal governments introduced free school meals (1906), school medical inspections (1907) and National Insurance for some workers (1911). Government took a growing role in people\'s health.'],
  ['Mass vaccination', 'The government ran national vaccination campaigns: against diphtheria from 1942, polio from the 1950s, and later measles, mumps and rubella (the MMR vaccine, from 1988). Free vaccines through the NHS greatly reduced these diseases. A 1998 study wrongly linking MMR to autism, later discredited, temporarily cut vaccination rates.'],
  ['Laws to protect health', 'After the London smog of 1952 killed thousands, the Clean Air Act of 1956 controlled smoke from homes and factories. Later laws made seat belts compulsory (1983) and banned smoking in enclosed public places in England (2007).'],
  ['Lifestyle campaigns', 'Governments also tried to persuade people to change their behaviour: campaigns about smoking, drinking, safe sex, healthy eating (such as Change4Life from 2009) and exercise. Campaigns rely on people choosing to change, so their impact is uneven.'],
], view.factors('Methods of prevention', [
  ['Vaccination', 'national campaigns; free through the NHS'],
  ['Laws', 'Clean Air Act 1956; seat belts; smoking ban 2007'],
  ['Persuasion', 'lifestyle campaigns about diet, smoking and alcohol'],
  ['Why government acted', 'war, research evidence, disasters such as the 1952 smog'],
]), [
  view.timeline('Prevention', [
    ['1906–11', 'Liberal welfare reforms'],
    ['1942', 'National diphtheria vaccination campaign'],
    ['1952', 'The Great Smog of London'],
    ['1956', 'Clean Air Act'],
    ['1988', 'MMR vaccine introduced'],
    ['2007', 'Smoking banned in enclosed public places in England'],
  ]),
  view.people('People and bodies', [
    ['The Liberal governments', 'Introduced school meals, inspections and National Insurance'],
    ['The NHS', 'Provides free vaccinations'],
    ['Parliament', 'Passed laws such as the Clean Air Act'],
    ['Public health campaigns', 'Try to persuade people to live healthily'],
  ]),
  view.source('A source type: a public health poster', 'A government poster encouraging parents to have their children vaccinated against diphtheria.', 'Useful for the methods and message of a campaign; it does not show how many people responded.'),
], [
  ['Why did the government start to take more interest in health after 1900?', ['Many Boer War volunteers were found unfit to fight', 'The Church asked Parliament to take over all its hospitals', 'Germ theory was proved wrong, so new measures were needed'], 0, 'National strength depended on health.'],
  ['What did the Clean Air Act of 1956 do?', ['It controlled smoke from homes and factories after the 1952 smog', 'It banned smoking in all enclosed public places across England', 'It made vaccination against polio compulsory for all children'], 0, 'Law responded to disaster.'],
  ['Exam skill · Explain a similarity. Which explains a similarity with government action in the 1800s?', ['In both periods government passed laws to improve the environment, such as clean water and clean air.', 'In the 1900s the government ran national campaigns to vaccinate children against diphtheria.', 'In 1952 a thick smog in London killed thousands of people over a few days.'], 0, 'A similarity names what is shared and explains it.'],
  ['Why do lifestyle campaigns have uneven impact?', ['They rely on people choosing to change their behaviour', 'They are only shown to doctors and never to the public', 'They were banned by the NHS for being too expensive'], 0, 'Persuasion is weaker than law.'],
], [
  Q('med15.p1', 'When was the Clean Air Act passed?', ['1956', '1875', '2007'], 0, 'After the 1952 smog.', 'laws'),
  Q('med15.p2', 'Which combined vaccine was introduced in 1988?', ['MMR', 'Smallpox', 'Penicillin'], 0, 'Measles, mumps, rubella.', 'vaccination'),
  Q('med15.p3', 'When were free school meals introduced?', ['1906', '1948', '1853'], 0, 'A Liberal reform.', 'government'),
  Q('med15.p4', 'When did smoking become banned in enclosed public places in England?', ['2007', '1956', '1983'], 0, 'Seat belts were 1983.', 'laws'),
  Q('med15.p5', 'Which national vaccination campaign began in 1942?', ['Diphtheria', 'Polio', 'MMR (measles)'], 0, 'Polio followed in the 1950s.', 'vaccination'),
], [
  Q('med15.c1', 'What killed thousands in London in 1952?', ['A great smog', 'A cholera outbreak', 'The plague'], 0, 'Smoke-polluted air killed them.', 'laws'),
  Q('med15.c2', 'What was Change4Life?', ['A healthy-living campaign', 'A law making vaccination compulsory', 'A new NHS hospital in London'], 0, 'It was launched in 2009.', 'campaigns'),
  Q('med15.c3', 'Which war revealed poor health among volunteers?', ['The Boer War', 'The Crimean War', 'The Cold War'], 0, 'It was fought in 1899–1902.', 'government'),
  Q('med15.c4', 'When did National Insurance begin for some workers?', ['1911', '1948', '1875'], 0, 'A Liberal reform.', 'government'),
  Q('med15.c5', 'Why did MMR vaccination rates fall for a time?', ['A later-discredited study', 'The vaccine stopped working', 'It was banned'], 0, 'Published in 1998.', 'vaccination'),
  Q('med15.c6', 'When did seat belts become compulsory?', ['1983', '1956', '2007'], 0, 'For front-seat drivers and passengers.', 'laws'),
  Q('med15.c7', 'Which is a lifestyle campaign topic?', ['Healthy eating', 'Building sewers', 'Isolating plague victims'], 0, 'Persuasion, not law.', 'campaigns'),
  Q('med15.c8', 'How are vaccines provided in modern Britain?', ['Free through the NHS', 'Only by private doctors', 'Only in wartime'], 0, 'Free access raised take-up.', 'vaccination'),
], {exam: 'Explain one way in which government action to prevent disease in the period c1900–present was similar to action in the period c1800–c1900. (4 marks)'}),

lesson(T, 'medicine.penicillin', 'Case study: Fleming, Florey and Chain and penicillin', ['11 4.3', '11 4.2'], [
  ['Fleming\'s observation, 1928', 'Alexander Fleming, working at St Mary\'s Hospital in London, noticed that mould growing on a dish of staphylococcus bacteria had killed the bacteria around it. He identified the mould as penicillium and published his findings in 1929, but he could not produce enough pure penicillin to test it properly and moved on to other work.'],
  ['Florey and Chain', 'In 1938–40 Howard Florey and Ernst Chain, at Oxford University, read Fleming\'s paper and worked out how to purify penicillin. In 1940 they showed it cured infected mice. In 1941 they treated a policeman, Albert Alexander; he improved but died when their supply ran out.'],
  ['Mass production', 'British firms, busy with war production, could not make penicillin in large amounts. Florey went to the USA, where the government, after it entered the war in December 1941, funded drug companies to mass-produce it. By D-Day in 1944 there was enough for the Allied forces.'],
  ['Impact', 'Penicillin was the first antibiotic, and it saved huge numbers of lives from infected wounds and diseases such as pneumonia. Fleming, Florey and Chain shared the Nobel Prize in 1945. Overuse of antibiotics has since led to resistant bacteria such as MRSA.'],
], view.factors('Why was penicillin developed?', [
  ['Chance', 'Fleming\'s contaminated dish'],
  ['Individuals and teams', 'Florey and Chain\'s purification and testing'],
  ['War', 'huge demand to treat wounded soldiers'],
  ['Government and industry', 'US government funding for mass production'],
]), [
  view.timeline('Penicillin', [
    ['1928', 'Fleming notices the mould'],
    ['1929', 'Fleming publishes his findings'],
    ['1940', 'Florey and Chain test penicillin on mice'],
    ['1941', 'First human patient, Albert Alexander'],
    ['1942–44', 'US mass production'],
    ['1945', 'Nobel Prize for Fleming, Florey and Chain'],
  ]),
  view.people('People', [
    ['Alexander Fleming', 'Discovered penicillin\'s effect on bacteria'],
    ['Howard Florey', 'Led the Oxford team that developed it'],
    ['Ernst Chain', 'Worked out how to purify it'],
    ['Albert Alexander', 'The first patient to be treated with it'],
  ]),
  view.source('A source type: a wartime newspaper report', 'A newspaper article from 1944 praising a "wonder drug" that was saving wounded soldiers.', 'Shows public excitement and its wartime use; it simplifies the story and tends to credit one person.'),
], [
  ['Why did Fleming not develop penicillin himself?', ['He could not produce enough pure penicillin to test it properly', 'He was not allowed to work in a hospital laboratory after 1928', 'He believed that penicillin was too dangerous for any use at all'], 0, 'Discovery is not the same as development.'],
  ['Why did the USA mass-produce penicillin?', ['Its government funded drug companies after it entered the war', 'British law banned penicillin from being made in Britain', 'Fleming sold the rights to an American firm in 1929'], 0, 'War and money drove production.'],
  ['Exam skill · How far? Which judgement is best supported?', ['War was crucial, because it created the demand and funding that turned a discovery into a mass-produced drug.', 'Fleming was very important, because he was the person who discovered penicillin at St Mary\'s.', 'War did not matter at all, because penicillin had already been discovered by Fleming back in 1928.'], 0, 'A supported judgement explains how a factor mattered.'],
  ['What has been a problem with antibiotics since?', ['Overuse has led to resistant bacteria such as MRSA', 'They have been shown to cause lung cancer in most patients', 'They stop working completely after a few months in storage'], 0, 'Resistance is a modern challenge.'],
], [
  Q('med16.p1', 'When did Fleming notice penicillin\'s effect?', ['1928', '1940', '1945'], 0, 'At St Mary\'s Hospital.', 'fleming'),
  Q('med16.p2', 'Where did Florey and Chain work?', ['Oxford', 'Glasgow', 'Edinburgh'], 0, 'At Oxford University.', 'florey-chain'),
  Q('med16.p3', 'Who was the first human treated by Florey and Chain?', ['Albert Alexander', 'James Phipps', 'Hannah Greener'], 0, 'A policeman, in 1941.', 'florey-chain'),
  Q('med16.p4', 'Which country mass-produced penicillin?', ['The USA', 'France', 'Germany'], 0, 'With government funding.', 'mass-production'),
  Q('med16.p5', 'When did the three share the Nobel Prize?', ['1945', '1929', '1953'], 0, 'They shared it for penicillin.', 'impact'),
], [
  Q('med16.c1', 'Which bacteria had the mould killed?', ['Staphylococcus', 'Cholera bacteria', 'Anthrax bacteria'], 0, 'On Fleming\'s dish.', 'fleming'),
  Q('med16.c2', 'What did Florey and Chain test penicillin on in 1940?', ['Mice', 'Soldiers', 'Cows'], 0, 'It cured infected mice.', 'florey-chain'),
  Q('med16.c3', 'Why did Albert Alexander die?', ['The supply ran out', 'Penicillin poisoned him', 'He was never treated'], 0, 'He had improved first.', 'florey-chain'),
  Q('med16.c4', 'Why could British firms not mass-produce it?', ['They were busy with war production', 'It was illegal to make it in Britain', 'They had no trained scientists at all'], 0, 'Resources went to war.', 'mass-production'),
  Q('med16.c5', 'By when was there enough penicillin for the Allied forces?', ['D-Day in 1944', 'The end of 1929', 'The early 1960s'], 0, 'Mass production worked.', 'mass-production'),
  Q('med16.c6', 'What type of drug is penicillin?', ['An antibiotic', 'A vaccine', 'An anaesthetic'], 0, 'The first antibiotic.', 'impact'),
  Q('med16.c7', 'What is MRSA?', ['Antibiotic-resistant bacteria', 'A vaccine given to all babies', 'A scanner used to find tumours'], 0, 'Caused by overuse.', 'impact'),
  Q('med16.c8', 'What role did chance play?', ['A mould contaminated Fleming\'s dish', 'None; every step was carefully planned', 'Chance provided the money for research'], 0, 'Chance began it.', 'fleming'),
], {exam: 'Explain why penicillin became widely available in the 1940s. (12 marks)'}),

lesson(T, 'medicine.lung-cancer', 'Case study: the fight against lung cancer', ['11 4.3'], [
  ['A modern disease', 'Lung cancer became one of the most common causes of cancer death in Britain in the twentieth century, as cigarette smoking spread. Doll and Hill\'s 1950 study and later research showed that smoking was its main cause, though other factors such as air pollution, asbestos and genetics also play a part.'],
  ['Diagnosis', 'Science and technology made earlier diagnosis possible: chest X-rays, CT scans, bronchoscopy (a camera passed into the lungs) and biopsies to examine tissue. Genetic testing of tumours now helps doctors choose treatment.'],
  ['Treatment', 'Treatments include surgery to remove a tumour or part of a lung, chemotherapy, radiotherapy and, more recently, targeted drugs and immunotherapy based on the tumour\'s genetics. Survival rates have improved but remain low compared with many other cancers, because it is often found late.'],
  ['Government action', 'The government banned cigarette adverts on television (1965), required health warnings on packs (from 1971), banned smoking in enclosed public places in England (2007), raised the age to buy cigarettes to 18 (2007), banned smoking in cars carrying children (2015) and required plain packaging (2016–17). Taxes on tobacco were raised. Smoking rates have fallen, but the tobacco industry resisted many of these measures.'],
], view.factors('How has lung cancer been fought?', [
  ['Science and technology', 'scans, bronchoscopy, genetic testing; targeted drugs'],
  ['Government', 'advertising bans, health warnings, smoking ban, plain packaging, taxes'],
  ['Individuals', 'Doll and Hill\'s research'],
  ['Against progress', 'late diagnosis; the tobacco industry\'s resistance'],
]), [
  view.timeline('Lung cancer', [
    ['1950', 'Doll and Hill link smoking to lung cancer'],
    ['1965', 'Cigarette adverts banned on television'],
    ['1971', 'Health warnings on cigarette packs'],
    ['2007', 'Smoking banned in enclosed public places; age raised to 18'],
    ['2015', 'Smoking banned in cars carrying children'],
    ['2016–17', 'Plain packaging introduced'],
  ]),
  view.people('People and bodies', [
    ['Doll and Hill', 'Showed that smoking causes lung cancer'],
    ['Parliament', 'Passed laws limiting smoking and advertising'],
    ['The NHS', 'Diagnoses and treats patients'],
    ['The tobacco industry', 'Resisted many restrictions'],
  ]),
  view.source('A source type: a cigarette advert from the 1950s', 'A magazine advertisement showing a doctor recommending a brand of cigarettes.', 'Useful evidence of attitudes before the risks were accepted; it was produced to sell cigarettes.'),
], [
  ['Why is lung cancer survival still relatively low?', ['It is often diagnosed late, when it is harder to treat', 'Doctors are not allowed to operate on the lungs in Britain', 'There are no treatments for lung cancer of any kind at all'], 0, 'Early diagnosis matters most.'],
  ['How does genetic testing help treatment?', ['It helps doctors choose targeted drugs for the tumour', 'It proves that smoking has nothing to do with the disease', 'It replaces the need for any scans or other diagnosis'], 0, 'Modern treatment is personalised.'],
  ['Exam skill · Explain the significance. Which best explains the significance of the 2007 smoking ban?', ['It protected non-smokers from second-hand smoke and encouraged many smokers to quit.', 'It was passed in 2007, in the same year as the age for buying cigarettes was raised.', 'It was one of several laws passed against smoking in Britain since the year 1965.'], 0, 'Significance explains the effect.'],
  ['Why did the tobacco industry resist government action?', ['Restrictions threatened its sales and profits', 'It believed that smoking cured many lung diseases', 'It was owned by the NHS and wanted fewer patients'], 0, 'Economic interests opposed health measures.'],
], [
  Q('med17.p1', 'What is the main cause of lung cancer?', ['Smoking', 'A virus', 'Miasma'], 0, 'Shown by Doll and Hill.', 'lc-cause'),
  Q('med17.p2', 'What is bronchoscopy?', ['A camera passed into the lungs', 'A blood test for infections', 'A type of vaccine for babies'], 0, 'Used in diagnosis.', 'lc-diagnosis'),
  Q('med17.p3', 'When were cigarette adverts banned on television?', ['1965', '2007', '1950'], 0, 'Early government action.', 'lc-government'),
  Q('med17.p4', 'When was smoking banned in cars carrying children?', ['2015', '1965', '1971'], 0, 'It is a recent law.', 'lc-government'),
  Q('med17.p5', 'Which treatment uses high-energy rays?', ['Radiotherapy', 'Chemotherapy', 'Bronchoscopy'], 0, 'Chemotherapy uses drugs.', 'lc-treatment'),
], [
  Q('med17.c1', 'What did plain packaging do?', ['Removed branding from packs', 'Banned the sale of all cigarettes', 'Lowered the price of cigarettes'], 0, 'Introduced 2016–17.', 'lc-government'),
  Q('med17.c2', 'Which is another risk factor for lung cancer?', ['Asbestos', 'Cowpox', 'Clean air'], 0, 'Smoking is not the only cause.', 'lc-cause'),
  Q('med17.c3', 'What is a biopsy?', ['Examining a sample of tissue', 'A lung transplant operation', 'An anti-smoking poster campaign'], 0, 'Confirms diagnosis.', 'lc-diagnosis'),
  Q('med17.c4', 'When did health warnings appear on packs?', ['From 1971', 'From 1850', 'From 2015'], 0, 'Required by government.', 'lc-government'),
  Q('med17.c5', 'What is immunotherapy?', ['Helping the immune system attack cancer', 'A vaccine that stops people smoking', 'Removing blood to rebalance the humours'], 0, 'A recent treatment.', 'lc-treatment'),
  Q('med17.c6', 'What was the legal age to buy cigarettes raised to in 2007?', ['18', '16', '21'], 0, 'It had previously been 16.', 'lc-government'),
  Q('med17.c7', 'Which scan helps detect lung tumours?', ['A CT scan', 'An ECG', 'A blood pressure monitor'], 0, 'Detailed cross-sections.', 'lc-diagnosis'),
  Q('med17.c8', 'What else has the government used to cut smoking?', ['Higher tobacco taxes', 'Free cigarettes', 'Compulsory smoking'], 0, 'Price deters buyers.', 'lc-government'),
], {exam: 'Explain one way in which the fight against lung cancer in the twenty-first century was different from the fight against cholera in the 1800s. (4 marks)'}),
];
