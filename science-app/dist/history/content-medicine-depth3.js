// Pearson Edexcel GCSE (9–1) History 1HI0, Option 11: Medicine in Britain, c1250–present.
// Depth lessons for key topic 3, c1700–c1900 (specification 3.1–3.3). Each follows its overview lesson.
// All text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

const T = 'history.medicine.kt3';

export const medicineDepth3 = [
lesson(T, 'medicine.spontaneous', 'Spontaneous generation and miasma', ['11 3.1'], [
  ['Seeing microbes', 'In the 1670s the Dutch lens-maker Antonie van Leeuwenhoek used his own microscopes to see tiny living things he called "animalcules". In 1830 Joseph Jackson Lister, the father of the surgeon, improved microscope lenses so that images were much clearer. Scientists could now see microbes, but they did not know what they did.'],
  ['Spontaneous generation', 'Most scientists believed in spontaneous generation: that living things such as microbes, and even maggots in rotting meat, were produced by decaying matter itself. Microbes were therefore seen as a result of disease and decay, not the cause.'],
  ['Miasma in the industrial age', 'Fast-growing industrial towns were crowded and filthy, and disease spread quickly. Miasma, bad air from filth, seemed the obvious explanation. In 1842 Edwin Chadwick\'s report on the sanitary condition of the labouring population linked dirt and disease, using miasma ideas to argue for cleaner towns.'],
  ['Why old ideas lasted', 'Miasma explained why disease was worst where filth was worst, so cleaning up often worked even though the theory was wrong. The humours had faded among doctors after Harvey and others, but no new explanation of cause had yet been proved. That changed only when Pasteur showed microbes caused decay.'],
], view.factors('Why miasma lasted into the 1800s', [
  ['Evidence', 'disease was worst in the filthiest places'],
  ['Results', 'cleaning up often reduced disease, seeming to prove the theory'],
  ['Science', 'microbes could be seen but not linked to disease'],
  ['Authority', 'leading reformers such as Chadwick and Nightingale believed it'],
]), [
  view.timeline('Ideas before germ theory', [
    ['1670s', 'Van Leeuwenhoek sees "animalcules"'],
    ['1700s', 'Belief in the humours fades among doctors'],
    ['1830', 'J. J. Lister improves microscope lenses'],
    ['1831–32', 'First cholera epidemic in Britain'],
    ['1842', 'Chadwick\'s report on sanitary conditions'],
    ['1861', 'Pasteur publishes germ theory'],
  ]),
  view.people('People', [
    ['Antonie van Leeuwenhoek', 'First saw microbes through a microscope'],
    ['Joseph Jackson Lister', 'Improved microscope lenses in 1830'],
    ['Edwin Chadwick', 'Linked dirt and disease in 1842'],
    ['Henry Bastian', 'Still defended spontaneous generation in the 1870s'],
  ]),
  view.source('A source type: an 1842 government report', 'Chadwick\'s report describing filthy living conditions in industrial towns and linking them to disease and early death.', 'Useful for conditions and for the miasma thinking of reformers; it was written to persuade Parliament to act.'),
], [
  ['Why were microbes seen as a result of disease?', ['Scientists believed decaying matter produced them through spontaneous generation', 'Microbes could not be seen at all until the twentieth century', 'The Church had declared that microbes were created by God'], 0, 'Effect, not cause.'],
  ['Why did miasma seem convincing in industrial towns?', ['Disease was worst where filth and bad smells were worst', 'Doctors had proved that bad air carried germs from the river', 'Factories released gases that were known to carry cholera'], 0, 'Correlation seemed like proof.'],
  ['Exam skill · Explain why. Which explains why miasma ideas lasted into the 1800s?', ['Cleaning up filthy areas often reduced disease, so the theory seemed to work even though it was wrong.', 'Edwin Chadwick published a report on the sanitary conditions of workers in 1842.', 'Antonie van Leeuwenhoek saw tiny living things through his microscopes in the 1670s.'], 0, 'Explanation links evidence to belief.'],
  ['What did J. J. Lister\'s improved lenses make possible?', ['Much clearer images of microbes', 'The first vaccination against smallpox', 'Surgery without any infection'], 0, 'Better technology, same theory.'],
], [
  Q('mdd16.p1', 'Who first saw "animalcules"?', ['Van Leeuwenhoek', 'Louis Pasteur', 'Robert Koch of Berlin'], 0, 'He saw them in the 1670s.', 'microscopes'),
  Q('mdd16.p2', 'What did spontaneous generation claim?', ['Decay produced microbes', 'Microbes caused decay', 'God sent microbes'], 0, 'An effect, not a cause.', 'spontaneous'),
  Q('mdd16.p3', 'Who wrote the 1842 report on sanitary conditions?', ['Edwin Chadwick', 'John Snow', 'Joseph Lister'], 0, 'Linking dirt and disease.', 'miasma'),
  Q('mdd16.p4', 'When were microscope lenses improved by J. J. Lister?', ['1830', '1670', '1882'], 0, 'This gave clearer images.', 'microscopes'),
  Q('mdd16.p5', 'What did miasma blame for disease?', ['Bad air from filth', 'Germs in the water', 'Faulty genes'], 0, 'A long-lasting idea.', 'miasma'),
], [
  Q('mdd16.c1', 'Which idea had faded among doctors by 1800?', ['The four humours', 'Miasma', 'Spontaneous generation'], 0, 'After Harvey and others.', 'continuity'),
  Q('mdd16.c2', 'What did people think produced maggots in meat?', ['The rotting meat itself', 'Flies laying their eggs', 'Simple bad luck'], 0, 'Spontaneous generation.', 'spontaneous'),
  Q('mdd16.c3', 'Why did cleaning up often work?', ['It removed sources of germs', 'It rebalanced people\'s humours', 'It pleased God and the Church'], 0, 'Right action, wrong reason.', 'miasma'),
  Q('mdd16.c4', 'Who still defended spontaneous generation in the 1870s?', ['Henry Bastian', 'John Tyndall', 'Joseph Lister'], 0, 'A British scientist.', 'spontaneous'),
  Q('mdd16.c5', 'Where did disease spread fastest?', ['Crowded industrial towns', 'Remote country villages', 'Royal palaces and estates'], 0, 'Filth and crowding.', 'miasma'),
  Q('mdd16.c6', 'Could scientists see microbes by 1830?', ['Yes, clearly', 'No, not yet', 'Only in dreams'], 0, 'Better lenses made it possible.', 'microscopes'),
  Q('mdd16.c7', 'Who finally showed microbes caused decay?', ['Pasteur', 'Chadwick', 'Van Leeuwenhoek'], 0, 'He did so in 1861.', 'continuity'),
  Q('mdd16.c8', 'What did Chadwick\'s report argue for?', ['Cleaner towns', 'More bloodletting', 'Closing hospitals'], 0, 'Using miasma ideas.', 'miasma'),
], {exam: 'Explain why ideas about the cause of disease changed little in the period c1700–c1860. (12 marks)'}),

lesson(T, 'medicine.pasteur', 'Pasteur\'s germ theory', ['11 3.1'], [
  ['From brewing to germs', 'Louis Pasteur, a French chemist, was asked in 1857 by brewers and wine-makers to find out why their drinks went sour. He discovered that microbes caused fermentation and spoiling, and that heating liquids killed them, a process later called pasteurisation.'],
  ['The swan-necked flasks', 'To disprove spontaneous generation, Pasteur boiled broth in flasks with long, curved necks. Air could enter, but dust and microbes were trapped in the bend, and the broth stayed fresh. When the neck was broken, microbes reached the broth and it soon decayed. In 1861 he published his germ theory: microbes in the air cause decay.'],
  ['From decay to disease', 'Pasteur went on to study diseases. He helped save the French silk industry by showing microbes caused a disease of silkworms, and in the 1880s he developed vaccines for chicken cholera, anthrax and rabies, using weakened germs. This proved that specific microbes caused specific diseases in animals and humans.'],
  ['Influence in Britain', 'Pasteur\'s work was not accepted at once in Britain, but it was taken up by key figures. The surgeon Joseph Lister applied it to surgery from 1865, and the physicist John Tyndall publicly supported it against Henry Bastian in the 1870s. By the 1880s most British doctors accepted germ theory.'],
], view.factors('Why Pasteur succeeded', [
  ['Method', 'careful experiments that tested one idea at a time'],
  ['Technology', 'good microscopes and controlled laboratory conditions'],
  ['Support', 'industry and the French government funded his work'],
  ['Communication', 'public demonstrations and published results'],
]), [
  view.timeline('Pasteur', [
    ['1857', 'Studies fermentation for brewers'],
    ['1861', 'Publishes germ theory'],
    ['1865', 'Lister begins using germ theory in surgery'],
    ['1879', 'Chicken cholera vaccine'],
    ['1881', 'Public test of an anthrax vaccine on sheep'],
    ['1885', 'Rabies vaccine first used on a boy'],
  ]),
  view.people('People', [
    ['Louis Pasteur', 'French chemist who developed germ theory'],
    ['Joseph Lister', 'Applied germ theory to surgery in Britain'],
    ['John Tyndall', 'British physicist who supported germ theory'],
    ['Henry Bastian', 'British opponent of germ theory'],
  ]),
  view.source('A source type: a diagram of a swan-necked flask', 'A drawing from Pasteur\'s published work showing the curved neck of the flask and where dust collected.', 'Useful for how the experiment worked; it shows the design, not how other scientists reacted to it.'),
], [
  ['How did the swan-necked flask experiment work?', ['Air could enter but microbes were trapped in the bend, so the broth stayed fresh', 'The flask was sealed completely so that no air could ever reach the broth', 'The curved neck heated the broth, killing any germs that were inside it'], 0, 'It isolated microbes from air.'],
  ['Why did Pasteur\'s vaccines matter for germ theory?', ['They showed that specific microbes caused specific diseases', 'They proved that bad air was the true cause of most diseases', 'They showed that the humours had to be rebalanced first'], 0, 'From decay to disease.'],
  ['Exam skill · Explain why. Which explains why germ theory came to be accepted in Britain?', ['Influential scientists such as Lister and Tyndall used and defended it, and its results were hard to argue with.', 'Pasteur was a French chemist who studied beer and wine for brewers in 1857.', 'Pasteur developed a vaccine against rabies that was first used in the year 1885.'], 0, 'Explanation links people and evidence to acceptance.'],
  ['What is pasteurisation?', ['Heating a liquid to kill microbes', 'Growing microbes on agar plates', 'Washing wounds with carbolic acid'], 0, 'From his brewing work.'],
], [
  Q('mdd17.p1', 'Why did brewers ask Pasteur for help?', ['Their drinks went sour', 'Their workers were ill', 'Their barrels leaked'], 0, 'They asked him in 1857.', 'brewing'),
  Q('mdd17.p2', 'When did Pasteur publish germ theory?', ['1861', '1876', '1842'], 0, 'After his flask experiments.', 'flasks'),
  Q('mdd17.p3', 'What did swan-necked flasks trap?', ['Dust and microbes', 'Heat and steam', 'Bad smells from the air'], 0, 'In the curved neck.', 'flasks'),
  Q('mdd17.p4', 'Which British physicist supported germ theory?', ['John Tyndall', 'Henry Bastian', 'Edwin Chadwick'], 0, 'He did so in the 1870s.', 'influence'),
  Q('mdd17.p5', 'Which vaccine did Pasteur test on sheep in 1881?', ['Anthrax', 'Smallpox', 'Polio'], 0, 'It was a public test.', 'disease'),
], [
  Q('mdd17.c1', 'Which industry did Pasteur help save?', ['The French silk industry', 'The English cotton industry', 'The Scottish whisky trade'], 0, 'Diseased silkworms.', 'disease'),
  Q('mdd17.c2', 'When was the rabies vaccine first used?', ['1885', '1861', '1796'], 0, 'It was first used on a boy.', 'disease'),
  Q('mdd17.c3', 'What did Pasteur use to make vaccines?', ['Weakened germs', 'Cowpox matter', 'Dried herbs'], 0, 'Attenuated cultures.', 'disease'),
  Q('mdd17.c4', 'Who applied germ theory to surgery in Britain?', ['Joseph Lister', 'John Snow', 'James Simpson'], 0, 'He did so from 1865.', 'influence'),
  Q('mdd17.c5', 'What happened when the flask neck was broken?', ['The broth decayed', 'The broth froze', 'Nothing at all'], 0, 'Microbes reached it.', 'flasks'),
  Q('mdd17.c6', 'By when did most British doctors accept germ theory?', ['The 1880s', 'The 1700s', 'The 1940s'], 0, 'Acceptance took time.', 'influence'),
  Q('mdd17.c7', 'What did Pasteur find caused fermentation?', ['Microbes', 'Heat', 'Bad air'], 0, 'Microbes also caused spoiling.', 'brewing'),
  Q('mdd17.c8', 'Who funded some of Pasteur\'s work?', ['Industry and government', 'The Pope and the Church', 'The British army'], 0, 'Support mattered.', 'brewing'),
], {exam: 'Explain why Pasteur\'s germ theory was important for the development of medicine in Britain in the period c1860–c1900. (12 marks)'}),

lesson(T, 'medicine.koch', 'Koch and the identification of microbes', ['11 3.1'], [
  ['Anthrax, 1876', 'Robert Koch, a German country doctor, studied anthrax, a disease of cattle that could also kill people. In 1876 he identified the anthrax bacterium and showed its full life cycle, including the tough spores that let it survive in soil. For the first time, a specific microbe was proved to cause a specific disease.'],
  ['New methods', 'Koch developed techniques that other scientists copied. He stained bacteria with dyes so they could be seen and photographed through the microscope, and grew pure cultures on solid agar, a jelly made from seaweed, in shallow dishes designed by his assistant Julius Petri. He also set out tests, later called Koch\'s postulates, for proving that a microbe caused a disease.'],
  ['Tuberculosis and cholera', 'In 1882 Koch identified the bacterium that causes tuberculosis, which killed about one in seven people in Europe. In 1883–84, working in Egypt and India, he identified the cholera bacterium and showed it spread through contaminated water, confirming what John Snow had suspected.'],
  ['Influence in Britain', 'Koch\'s methods allowed scientists everywhere to identify the microbes behind diseases such as typhoid, diphtheria and plague. In Britain his work strengthened the case for clean water and sewers and encouraged research into how to fight particular germs, though an attempted cure for tuberculosis in 1890 failed.'],
], view.factors('Why Koch\'s work mattered', [
  ['Proof', 'specific microbes linked to specific diseases'],
  ['Methods', 'staining, photography, agar plates, Petri dishes'],
  ['Discoveries', 'anthrax, tuberculosis, cholera'],
  ['Influence', 'scientists worldwide identified more microbes'],
]), [
  view.timeline('Koch', [
    ['1876', 'Identifies the anthrax bacterium'],
    ['1880s', 'Staining, photography and agar plates'],
    ['1882', 'Identifies the tuberculosis bacterium'],
    ['1883–84', 'Identifies the cholera bacterium'],
    ['1887', 'Petri dishes described'],
    ['1890', 'An attempted tuberculosis cure fails'],
  ]),
  view.people('People', [
    ['Robert Koch', 'German doctor who identified specific bacteria'],
    ['Julius Petri', 'Assistant who designed the Petri dish'],
    ['Louis Pasteur', 'French rival'],
    ['British public-health reformers', 'Used Koch\'s findings to argue for clean water'],
  ]),
  view.source('A source type: a photograph through a microscope', 'One of Koch\'s published photographs of stained anthrax bacteria seen through a microscope.', 'Strong evidence of what he saw; it shows the bacteria, not his proof that they caused the disease.'),
], [
  ['Why was Koch\'s anthrax work a breakthrough?', ['It proved for the first time that a specific microbe caused a specific disease', 'It showed that anthrax was caused by bad air from cattle sheds', 'It produced the first antibiotic to cure anthrax in cattle'], 0, 'Germ theory applied to disease.'],
  ['How did staining help?', ['It made bacteria visible so they could be seen and photographed', 'It killed bacteria so that patients could be cured quickly', 'It made bacteria grow faster in the bodies of animals'], 0, 'A key technique.'],
  ['Exam skill · Explain one difference. Which explains a difference between ideas about cause in c1800 and c1900?', ['By 1900 specific microbes were known to cause specific diseases, because Koch\'s methods identified them.', 'Koch identified the bacterium that causes tuberculosis in the year 1882.', 'Koch worked in Egypt and India in 1883–84 when he studied cholera.'], 0, 'A difference is explained by a cause.'],
  ['How did Koch\'s cholera work connect to Snow?', ['It confirmed that cholera spread through contaminated water', 'It proved that Snow had been wrong about the Broad Street pump', 'It showed that cholera was caused by miasma after all'], 0, 'Snow was vindicated.'],
], [
  Q('mdd18.p1', 'When did Koch identify the anthrax bacterium?', ['1876', '1861', '1882'], 0, 'With its life cycle.', 'anthrax'),
  Q('mdd18.p2', 'What was agar?', ['A jelly for growing bacteria', 'A dye for staining bacteria', 'A vaccine made from seaweed'], 0, 'Made from seaweed.', 'methods'),
  Q('mdd18.p3', 'Who designed the Petri dish?', ['Julius Petri', 'Robert Koch', 'Louis Pasteur'], 0, 'Koch\'s assistant.', 'methods'),
  Q('mdd18.p4', 'Which bacterium did Koch identify in 1882?', ['Tuberculosis', 'Bubonic plague', 'Smallpox'], 0, 'TB was a major killer.', 'tb-cholera'),
  Q('mdd18.p5', 'Where did Koch study cholera?', ['Egypt and India', 'London and Paris', 'Russia and China'], 0, 'He worked there in 1883–84.', 'tb-cholera'),
], [
  Q('mdd18.c1', 'What let anthrax survive in soil?', ['Tough spores', 'Agar jelly', 'Coloured dyes'], 0, 'Part of its life cycle.', 'anthrax'),
  Q('mdd18.c2', 'What were Koch\'s postulates?', ['Tests to prove a microbe caused a disease', 'Rules for running a clean hospital ward', 'A timetable for vaccinating children'], 0, 'A scientific method.', 'methods'),
  Q('mdd18.c3', 'Roughly what share of Europeans did TB kill?', ['About one in seven', 'About one in a thousand', 'Almost everyone'], 0, 'TB was a huge killer.', 'tb-cholera'),
  Q('mdd18.c4', 'Whose theory did Koch\'s cholera work confirm?', ['John Snow\'s', 'Edwin Chadwick\'s', 'Henry Bastian\'s'], 0, 'It spread through water, not air.', 'tb-cholera'),
  Q('mdd18.c5', 'Why did Koch stain bacteria?', ['To see and photograph them', 'To kill them in the patient', 'To feed them so they grew'], 0, 'It made them visible.', 'methods'),
  Q('mdd18.c6', 'What failed in 1890?', ['An attempted TB cure', 'The anthrax vaccine', 'Agar plates'], 0, 'Not every effort worked.', 'influence'),
  Q('mdd18.c7', 'Which other microbes did scientists then identify?', ['Typhoid and diphtheria', 'The four humours', 'Different kinds of miasma'], 0, 'Using Koch\'s methods.', 'influence'),
  Q('mdd18.c8', 'What case did Koch\'s work strengthen in Britain?', ['Clean water and sewers', 'More bloodletting of patients', 'Using astrology in medicine'], 0, 'It helped public health.', 'influence'),
], {exam: '"Koch was more important than Pasteur in changing ideas about the cause of disease in the period c1860–c1900." How far do you agree? (16 marks)'}),

lesson(T, 'medicine.anaesthetics', 'Anaesthetics', ['11 3.2'], [
  ['Surgery before anaesthetics', 'Before the 1840s patients were awake during operations. Surgeons relied on speed, and on alcohol or opium to dull pain. In 1799 the chemist Humphry Davy noticed that nitrous oxide, "laughing gas", reduced pain, but it was used mainly for entertainment.'],
  ['Ether, 1846', 'In October 1846 ether was used successfully in an operation in Boston, USA, and in December the surgeon Robert Liston used it to amputate a leg in London. Ether worked, but it irritated the lungs, caused vomiting and was highly flammable.'],
  ['Chloroform, 1847', 'In November 1847 James Simpson, an Edinburgh professor, and his friends tested chemicals on themselves and found that chloroform made them unconscious. It was quicker and less irritating than ether. In 1853 John Snow gave chloroform to Queen Victoria during the birth of her son Leopold, which made it far more acceptable.'],
  ['Problems and opposition', 'Getting the dose right was difficult: fifteen-year-old Hannah Greener died in 1848 under chloroform. Some argued that pain in childbirth was God\'s will, and some army surgeons believed pain kept patients alert. Anaesthetics also let surgeons operate for longer, which, without antiseptics, increased deaths from infection.'],
], view.factors('Factors in the development of anaesthetics', [
  ['Science', 'chemists tested gases and liquids'],
  ['Individuals', 'Liston, Simpson and Snow'],
  ['Attitudes', 'Queen Victoria\'s example; religious and military objections'],
  ['Limits', 'dosage dangers and higher infection rates'],
]), [
  view.timeline('Anaesthetics', [
    ['1799', 'Davy notes nitrous oxide reduces pain'],
    ['Oct 1846', 'Ether used in an operation in Boston'],
    ['Dec 1846', 'Liston uses ether in London'],
    ['Nov 1847', 'Simpson discovers chloroform\'s effect'],
    ['Jan 1848', 'Hannah Greener dies under chloroform'],
    ['1853', 'Snow gives chloroform to Queen Victoria'],
  ]),
  view.people('People', [
    ['Humphry Davy', 'Chemist who noticed nitrous oxide\'s effect'],
    ['Robert Liston', 'London surgeon who used ether'],
    ['James Simpson', 'Discovered chloroform as an anaesthetic'],
    ['John Snow', 'Anaesthetist to Queen Victoria'],
  ]),
  view.source('A source type: a newspaper report from 1848', 'A newspaper report of the inquest into the death of a girl given chloroform for a minor operation.', 'Useful for public fears about anaesthetics; one dramatic case may have been reported because it was unusual.'),
], [
  ['Why was chloroform preferred to ether?', ['It acted faster and irritated the lungs less', 'It was completely safe at any dose for any patient', 'It killed germs in wounds as well as removing pain'], 0, 'Practical advantages.'],
  ['Why did Queen Victoria\'s use of chloroform matter?', ['It made anaesthetics far more acceptable to the public', 'It proved that chloroform had no dangers of any kind', 'It meant that Parliament made anaesthetics compulsory'], 0, 'Royal example changed attitudes.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Anaesthetics solved the problem of pain, but at first they increased deaths from infection, so their impact was mixed.', 'Anaesthetics were very important because surgeons could do operations without pain.', 'Anaesthetics made no difference, because some patients died under chloroform.'], 0, 'A supported judgement weighs benefits and problems.'],
  ['Why did some oppose anaesthetics in childbirth?', ['They believed pain in childbirth was God\'s will', 'They thought chloroform caused babies to be born early', 'They believed only surgeons should be present at births'], 0, 'Religious attitudes.'],
], [
  Q('mdd19.p1', 'Who noticed nitrous oxide reduced pain?', ['Humphry Davy', 'James Simpson', 'Robert Liston'], 0, 'He noticed this in 1799.', 'early'),
  Q('mdd19.p2', 'Who first used ether in a London operation?', ['Robert Liston', 'Joseph Lister', 'John Snow'], 0, 'In December 1846.', 'ether'),
  Q('mdd19.p3', 'When did Simpson discover chloroform\'s effect?', ['November 1847', 'October 1846', 'April 1853'], 0, 'Testing on himself.', 'chloroform'),
  Q('mdd19.p4', 'Who gave Queen Victoria chloroform?', ['John Snow', 'James Simpson', 'Joseph Lister'], 0, 'He did so in 1853.', 'chloroform'),
  Q('mdd19.p5', 'Which problem did ether have?', ['It was highly flammable', 'It caused fevers like malaria', 'It was far too weak to work'], 0, 'And irritated the lungs.', 'ether'),
], [
  Q('mdd19.c1', 'Where was ether first used successfully?', ['Boston, USA', 'Edinburgh, Scotland', 'Glasgow, Scotland'], 0, 'In October 1846.', 'ether'),
  Q('mdd19.c2', 'What did surgeons rely on before anaesthetics?', ['Speed', 'Antiseptics', 'X-rays'], 0, 'And alcohol or opium.', 'early'),
  Q('mdd19.c3', 'Which child did Victoria give birth to in 1853?', ['Leopold', 'Edward', 'Albert'], 0, 'Under chloroform.', 'chloroform'),
  Q('mdd19.c4', 'Why was dosage a problem?', ['Too much could kill', 'Too little cured all', 'It was not measured'], 0, 'Hannah Greener died.', 'problems'),
  Q('mdd19.c5', 'Why did some army surgeons oppose anaesthetics?', ['Pain kept patients alert', 'It was far too costly', 'It had been invented abroad'], 0, 'This was an attitude.', 'problems'),
  Q('mdd19.c6', 'How did anaesthetics affect infection rates at first?', ['They increased them', 'They ended infection', 'No effect'], 0, 'Longer operations.', 'problems'),
  Q('mdd19.c7', 'Where was Simpson a professor?', ['Edinburgh', 'London', 'Oxford'], 0, 'A Scottish university.', 'chloroform'),
  Q('mdd19.c8', 'What was nitrous oxide nicknamed?', ['Laughing gas', 'Sleeping gas', 'Sweet air'], 0, 'It was used for fun.', 'early'),
], {exam: 'Explain why anaesthetics were not fully accepted in surgery in the period c1846–c1870. (12 marks)'}),

lesson(T, 'medicine.antiseptics', 'Antiseptics and aseptic surgery', ['11 3.2'], [
  ['Infection after surgery', 'Even with anaesthetics, nearly half of patients having major amputations in some hospitals died, often from infection known as "hospital gangrene". Surgeons operated in their ordinary clothes, reused dirty instruments and did not wash their hands between patients.'],
  ['Lister\'s antiseptics', 'Joseph Lister, a surgeon at Glasgow Royal Infirmary, read Pasteur\'s work and reasoned that germs in the air caused wounds to rot. Knowing that carbolic acid was used to treat sewage, in August 1865 he used it to dress the broken leg of eleven-year-old James Greenlees, who recovered without infection. He published his results in The Lancet in 1867.'],
  ['Results and opposition', 'Lister reported that deaths after his amputations fell from around 45 per cent to around 15 per cent. From 1871 he also used a carbolic spray in the operating theatre. But many surgeons resisted: carbolic was unpleasant and made hands sore, it slowed operations, and some still did not accept germ theory.'],
  ['From antiseptic to aseptic', 'By the 1890s surgeons moved from killing germs to keeping them out altogether. Instruments and gowns were sterilised with steam, operating theatres were built to be easily cleaned, and surgeons wore masks and rubber gloves, first used by the American surgeon William Halsted in 1890.'],
], view.factors('Why antiseptics were slow to spread', [
  ['Attitudes', 'many surgeons did not accept germ theory'],
  ['Practical problems', 'carbolic was unpleasant and slowed operations'],
  ['Lister', 'kept changing his methods, which confused others'],
  ['Progress', 'by the 1890s aseptic surgery replaced antiseptics'],
]), [
  view.timeline('Fighting infection', [
    ['1847', 'Semmelweis in Vienna shows hand-washing reduces deaths'],
    ['1865', 'Lister uses carbolic acid on James Greenlees'],
    ['1867', 'Lister publishes his results'],
    ['1871', 'Lister introduces the carbolic spray'],
    ['1880s', 'Steam sterilisation of instruments'],
    ['1890', 'Rubber gloves first used in surgery'],
  ]),
  view.people('People', [
    ['Joseph Lister', 'Glasgow surgeon who introduced antiseptics'],
    ['James Greenlees', 'Boy whose broken leg healed without infection'],
    ['Ignaz Semmelweis', 'Hungarian doctor who promoted hand-washing'],
    ['William Halsted', 'American surgeon who introduced rubber gloves'],
  ]),
  view.source('A source type: an article in The Lancet', 'Lister\'s 1867 article describing his treatment of compound fractures with carbolic acid and the results.', 'Useful for his method and results; written to persuade other surgeons, it presents his successes.'),
], [
  ['Why did Lister think of carbolic acid?', ['It was used to treat sewage, and he believed germs caused wounds to rot', 'It had been used to cure smallpox by Edward Jenner in 1796', 'It was the anaesthetic Simpson had discovered in 1847'], 0, 'He linked Pasteur\'s ideas to a known chemical.'],
  ['Why did some surgeons resist antiseptics?', ['Carbolic was unpleasant, slowed operations, and some rejected germ theory', 'Antiseptics had been banned by the Royal College of Surgeons in 1867', 'Lister refused to tell other surgeons how to use carbolic acid'], 0, 'Practical and attitudinal reasons.'],
  ['Exam skill · Explain one difference. Which explains a difference between surgery in 1860 and 1900?', ['By 1900 surgery was aseptic, because germ theory showed germs had to be kept out.', 'Joseph Lister worked as a surgeon at Glasgow Royal Infirmary in the 1860s.', 'William Halsted first used rubber gloves in surgery in the year 1890.'], 0, 'A difference is explained by a cause.'],
  ['What is aseptic surgery?', ['Keeping germs out of the operation entirely', 'Spraying carbolic acid over the patient', 'Operating very fast to reduce infection'], 0, 'Prevention, not killing.'],
], [
  Q('mdd20.p1', 'Where did Lister work?', ['Glasgow Royal Infirmary', 'St Thomas\'s, London', 'Edinburgh University'], 0, 'He worked there in the 1860s.', 'lister'),
  Q('mdd20.p2', 'Who was Lister\'s first antiseptic patient?', ['James Greenlees', 'Hannah Greener', 'James Phipps'], 0, 'He was eleven years old.', 'lister'),
  Q('mdd20.p3', 'When did Lister publish his results?', ['1867', '1847', '1890'], 0, 'They appeared in The Lancet.', 'lister'),
  Q('mdd20.p4', 'Who first used rubber gloves in surgery?', ['William Halsted', 'Joseph Lister', 'Robert Koch'], 0, 'He did so in 1890.', 'aseptic'),
  Q('mdd20.p5', 'What was carbolic acid used for before Lister?', ['Treating sewage', 'Brewing beer and ale', 'Dyeing cotton cloth'], 0, 'He saw a useful link.', 'lister'),
], [
  Q('mdd20.c1', 'Roughly what did Lister\'s amputation death rate fall to?', ['About 15 per cent', 'About 45 per cent', 'About 1 per cent'], 0, 'From about 45 per cent.', 'results'),
  Q('mdd20.c2', 'When did Lister introduce the carbolic spray?', ['1871', '1865', '1890'], 0, 'He used it in the theatre.', 'results'),
  Q('mdd20.c3', 'What did surgeons wear before antiseptics?', ['Ordinary clothes', 'Rubber gloves and masks', 'Sterile surgical gowns'], 0, 'They had no protection.', 'infection'),
  Q('mdd20.c4', 'What did aseptic surgery use to sterilise?', ['Steam', 'Carbolic spray only', 'Prayer'], 0, 'Instruments and gowns.', 'aseptic'),
  Q('mdd20.c5', 'Whose work inspired Lister?', ['Pasteur\'s', 'Jenner\'s', 'Harvey\'s'], 0, 'He read about germ theory.', 'lister'),
  Q('mdd20.c6', 'Why did carbolic slow operations?', ['Spraying took time', 'It was solid', 'It needed sunlight'], 0, 'A practical problem.', 'results'),
  Q('mdd20.c7', 'Who promoted hand-washing in Vienna in 1847?', ['Semmelweis', 'Robert Koch', 'William Halsted'], 0, 'This was before Lister.', 'infection'),
  Q('mdd20.c8', 'What was "hospital gangrene"?', ['Infection after surgery', 'A type of anaesthetic', 'A hospital ward'], 0, 'It was a major killer.', 'infection'),
], {exam: 'Explain one way in which surgery in the period c1800–c1900 was different from surgery in the period c1500–c1700. (4 marks)'}),

lesson(T, 'medicine.broad-street', 'John Snow and the Broad Street pump', ['11 3.3'], [
  ['Snow\'s theory', 'John Snow, a London doctor best known as an expert anaesthetist, studied the 1848–49 cholera epidemic. He noticed that cholera affected the gut, not the lungs, so it was more likely swallowed than breathed in. In 1849 he published his argument that cholera spread through water contaminated by sewage.'],
  ['The Broad Street outbreak', 'In late August 1854 cholera broke out in Soho, and over five hundred people died in about ten days. Snow interviewed families and marked each death on a street map. The deaths clustered around the public water pump in Broad Street.'],
  ['Evidence and action', 'Snow found telling exceptions: workers at the local brewery drank beer, and the nearby workhouse had its own well, and few in either group died. He persuaded the local officials to remove the pump handle on 8 September, and cases fell, though the outbreak was already declining. A local clergyman, Henry Whitehead, later found that a baby\'s nappy had been washed into a cesspit next to the well.'],
  ['The "grand experiment"', 'Snow also compared south London households supplied by two water companies. One took its water from the Thames downstream of sewage outlets; the other had moved its intake upstream. Death rates were far higher among customers of the first. Yet in 1855 an official inquiry rejected his theory, and he died in 1858 before Koch identified the cholera bacterium.'],
], view.factors('The significance of Snow', [
  ['Method', 'mapping cases and collecting statistical evidence'],
  ['Discovery', 'cholera spread through contaminated water'],
  ['Limits', 'he could not identify the germ; officials rejected his theory'],
  ['Long-term', 'his evidence supported clean water and sewers'],
]), [
  view.timeline('Snow and cholera', [
    ['1848–49', 'Second cholera epidemic'],
    ['1849', 'Snow publishes his theory of water-borne cholera'],
    ['Aug 1854', 'Outbreak in Soho'],
    ['8 Sept 1854', 'The Broad Street pump handle removed'],
    ['1855', 'An official inquiry rejects Snow\'s theory'],
    ['1858', 'Snow dies'],
    ['1883', 'Koch identifies the cholera bacterium'],
  ]),
  view.people('People', [
    ['John Snow', 'Doctor who linked cholera to water'],
    ['Henry Whitehead', 'Clergyman who found the source of the outbreak'],
    ['Local officials', 'Agreed to remove the pump handle'],
    ['The water companies', 'Whose customers Snow compared'],
  ]),
  view.source('A source type: Snow\'s map of Soho', 'A street map with a bar for each cholera death, showing them clustered around the Broad Street pump.', 'Strong evidence of a link with the pump; it shows a pattern, not the germ that caused the disease.'),
], [
  ['Why did Snow think cholera was swallowed?', ['It affected the gut, not the lungs', 'Patients said they had drunk bad beer', 'He saw the bacteria under a microscope'], 0, 'Reasoning from symptoms.'],
  ['What did the "grand experiment" show?', ['Households with water from downstream of sewage had far higher death rates', 'Cholera was spread by bad air from the River Thames', 'Beer protected people from cholera better than water did'], 0, 'Statistical evidence.'],
  ['Exam skill · Explain the significance. Which best explains the significance of Snow\'s work?', ['He proved with evidence that cholera spread through water, which later supported clean water and sewers.', 'Snow marked each death on a street map of Soho during the outbreak of 1854.', 'Snow was a London doctor who was also an expert anaesthetist in the 1850s.'], 0, 'Significance explains the impact.'],
  ['Why did officials reject Snow\'s theory in 1855?', ['He could not identify what in the water caused cholera, and miasma was still widely believed', 'His map showed no deaths at all near the Broad Street pump', 'He had refused to share his evidence with the government'], 0, 'Correlation without a germ.'],
], [
  Q('mdd21.p1', 'When did Snow publish his water theory?', ['1849', '1854', '1875'], 0, 'After the second epidemic.', 'theory'),
  Q('mdd21.p2', 'When was the pump handle removed?', ['8 September 1854', '8 September 1849', '8 September 1858'], 0, 'After that, cases fell.', 'action'),
  Q('mdd21.p3', 'Who found the source of the outbreak?', ['Henry Whitehead', 'Edwin Chadwick', 'Joseph Bazalgette'], 0, 'A local clergyman.', 'action'),
  Q('mdd21.p4', 'Roughly how many died in the first ten days?', ['Over five hundred', 'About fifty', 'Over fifty thousand'], 0, 'They died in Soho.', 'outbreak'),
  Q('mdd21.p5', 'Why did the brewery workers escape cholera?', ['They drank beer', 'They were vaccinated', 'They lived elsewhere'], 0, 'They did not drink pump water.', 'action'),
], [
  Q('mdd21.c1', 'What was Snow best known for before 1854?', ['Anaesthetics', 'Vaccination', 'Germ theory'], 0, 'He treated Queen Victoria.', 'theory'),
  Q('mdd21.c2', 'Which part of the body did cholera affect?', ['The gut', 'The lungs', 'The brain'], 0, 'So it was swallowed.', 'theory'),
  Q('mdd21.c3', 'What did Snow mark on a map?', ['Each death', 'Each pub', 'Each hospital'], 0, 'The deaths clustered.', 'outbreak'),
  Q('mdd21.c4', 'Why did workhouse inmates escape?', ['It had its own well', 'It was empty that year', 'It was locked all summer'], 0, 'Another exception.', 'action'),
  Q('mdd21.c5', 'What did Snow compare in south London?', ['Water company customers', 'Numbers of hospital beds', 'Parish church records'], 0, 'The grand experiment.', 'grand'),
  Q('mdd21.c6', 'What did the 1855 inquiry do?', ['Rejected his theory', 'Gave him a knighthood', 'Built new sewers at once'], 0, 'Miasma still ruled.', 'grand'),
  Q('mdd21.c7', 'When did Snow die?', ['1858', '1883', '1875'], 0, 'Before Koch\'s discovery.', 'grand'),
  Q('mdd21.c8', 'What was washed into the cesspit by the well?', ['A baby\'s nappy', 'Brewery waste', 'Animal carcasses'], 0, 'Found by Whitehead.', 'action'),
], {exam: 'Explain the significance of John Snow\'s work on cholera in 1854. (12 marks)'}),

lesson(T, 'medicine.public-health-1875', 'The Public Health Act of 1875', ['11 3.2'], [
  ['Laissez-faire and the 1848 Act', 'In the early 1800s most politicians believed in laissez-faire: the government should not interfere in people\'s lives or businesses. The 1848 Public Health Act set up a General Board of Health, but local councils could choose whether to act, and many did nothing to avoid raising taxes.'],
  ['The Great Stink and Bazalgette', 'In the hot summer of 1858 the smell from the sewage-filled Thames was so bad that Parliament considered moving. Parliament quickly funded a new sewer system designed by the engineer Joseph Bazalgette, built mainly in the 1860s, which carried London\'s sewage away from the city centre.'],
  ['Why attitudes changed', 'Repeated cholera epidemics, better statistics on deaths, Snow\'s evidence and then germ theory showed that dirty water and filth caused disease. The Second Reform Act of 1867 gave the vote to many working men in towns, so politicians had to respond to their demands for better living conditions.'],
  ['The 1875 Act', 'Disraeli\'s government passed a Public Health Act that was compulsory. Every council had to provide clean water, proper drainage and sewage disposal, and appoint a Medical Officer of Health and sanitary inspectors. In the same year an Act allowed councils to clear slums. Death rates in towns began to fall in the decades that followed.'],
], view.factors('Why government action changed', [
  ['Evidence', 'cholera, statistics, Snow and germ theory'],
  ['Events', 'the Great Stink of 1858'],
  ['Politics', 'the 1867 Reform Act gave many working men the vote'],
  ['Attitudes', 'a move away from laissez-faire'],
]), [
  view.timeline('Public health', [
    ['1842', 'Chadwick\'s report'],
    ['1848', 'First Public Health Act (voluntary)'],
    ['1858', 'The Great Stink'],
    ['1860s', 'Bazalgette\'s sewers built'],
    ['1867', 'Second Reform Act'],
    ['1875', 'Second Public Health Act (compulsory)'],
  ]),
  view.people('People and bodies', [
    ['Edwin Chadwick', 'Reformer behind the 1842 report'],
    ['Joseph Bazalgette', 'Engineer of London\'s sewers'],
    ['Benjamin Disraeli', 'Prime Minister when the 1875 Act passed'],
    ['Medical Officers of Health', 'Officials every council had to appoint'],
  ]),
  view.source('A source type: a cartoon from 1858', 'A magazine cartoon showing a skeletal figure rowing on the filthy Thames, labelled as death.', 'Useful for public anger about the river; it was drawn to shock readers and push Parliament to act.'),
], [
  ['Why did many councils ignore the 1848 Act?', ['It was voluntary, and acting meant raising local taxes', 'It had been rejected by the House of Lords before passing', 'It only applied to towns in Scotland and Wales'], 0, 'Laissez-faire attitudes.'],
  ['Why did the 1867 Reform Act matter for public health?', ['Politicians had to respond to newly enfranchised working men', 'It made every doctor a member of the House of Commons', 'It gave councils money to build sewers in every town'], 0, 'Political change drove reform.'],
  ['Exam skill · Explain one difference. Which explains a difference between the 1848 and 1875 Public Health Acts?', ['The 1875 Act was compulsory, because attitudes had moved away from laissez-faire.', 'The 1848 Act set up a General Board of Health in London.', 'The 1875 Act was passed by Disraeli\'s Conservative government.'], 0, 'A difference is explained by a cause.'],
  ['What did the Great Stink lead to?', ['Funding for Bazalgette\'s new sewer system', 'The closure of Parliament for ten years', 'A ban on boats on the River Thames'], 0, 'Parliament felt the problem directly.'],
], [
  Q('mdd22.p1', 'When was the Great Stink?', ['1858', '1848', '1875'], 0, 'It was a hot summer.', 'stink'),
  Q('mdd22.p2', 'Who designed London\'s new sewers?', ['Joseph Bazalgette', 'Edwin Chadwick', 'John Snow'], 0, 'He was an engineer.', 'stink'),
  Q('mdd22.p3', 'What was laissez-faire?', ['Government not interfering', 'Compulsory public-health laws', 'Free hospitals for everybody'], 0, 'A common belief.', 'laissez'),
  Q('mdd22.p4', 'Which Act gave many working men the vote?', ['The 1867 Reform Act', 'The 1848 Health Act', 'The 1875 Health Act'], 0, 'It applied in towns.', 'attitudes'),
  Q('mdd22.p5', 'Who was Prime Minister in 1875?', ['Disraeli', 'Gladstone', 'Peel'], 0, 'He was a Conservative.', 'act'),
], [
  Q('mdd22.c1', 'Was the 1848 Act compulsory?', ['No, voluntary', 'Yes, fully', 'Only in London'], 0, 'Many towns did nothing.', 'laissez'),
  Q('mdd22.c2', 'What did councils have to appoint after 1875?', ['A Medical Officer of Health', 'A doctor to treat the plague', 'A physician to the Royal family'], 0, 'Inspectors were also needed.', 'act'),
  Q('mdd22.c3', 'What did the 1875 Act require councils to provide?', ['Clean water and drainage', 'Free medicine for all', 'Free schools for children'], 0, 'And sewage disposal.', 'act'),
  Q('mdd22.c4', 'What did Parliament consider in 1858?', ['Moving away', 'Closing for good', 'Banning boats'], 0, 'The smell was dreadful.', 'stink'),
  Q('mdd22.c5', 'What did the 1848 Act set up?', ['A General Board of Health', 'The National Health Service', 'The Royal Society of London'], 0, 'With limited powers.', 'laissez'),
  Q('mdd22.c6', 'What did another 1875 Act allow councils to do?', ['Clear slums', 'Close hospitals', 'Ban beer'], 0, 'This improved housing.', 'act'),
  Q('mdd22.c7', 'What happened to town death rates after 1875?', ['They began to fall', 'They rose sharply', 'No change'], 0, 'They fell over decades.', 'act'),
  Q('mdd22.c8', 'Why did many councils avoid acting before 1875?', ['To avoid raising taxes', 'They had no water', 'The Church forbade it'], 0, 'The cost put them off.', 'laissez'),
], {exam: 'Explain why the government took more action on public health in the period c1850–c1875. (12 marks)'}),
];
