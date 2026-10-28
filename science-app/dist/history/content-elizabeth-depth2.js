// Pearson Edexcel GCSE (9–1) History 1HI0, Option B4: Early Elizabethan England, 1558–88.
// Depth lessons for key topic 2 (specification 2.1–2.4). Each follows its subsection's overview lesson.
// All text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

const T = 'history.elizabeth.kt2';

export const elizabethDepth2 = [
lesson(T, 'elizabeth.northern-earls', 'The Revolt of the Northern Earls, 1569', ['B4 2.1'], [
  ['Why the earls were discontented', 'The Earls of Northumberland and Westmorland were Catholic nobles who had once dominated the north. They resented losing influence to Protestant "new men" such as William Cecil, and the Crown had placed southerners in charge of the north. Northumberland also lost valuable rights to a copper mine found on his land, which the Crown claimed.'],
  ['The Norfolk marriage plan', 'In 1569 a scheme emerged for the Duke of Norfolk, England\'s only duke and a Protestant, to marry Mary, Queen of Scots, so that she could be named Elizabeth\'s heir. Elizabeth was furious when she found out, and Norfolk was sent to the Tower in October. The northern earls, who had been involved, feared arrest and rose in rebellion.'],
  ['Events', 'In November 1569 the rebels took Durham and held a Catholic Mass in the cathedral. They marched south, aiming to free Mary, who was quickly moved from Tutbury to Coventry. Expected help from Spanish troops in the Netherlands never came. As a royal army of about 14,000 approached, the rebels retreated and the earls fled to Scotland in December.'],
  ['Consequences', 'About 450 rebels were executed. Northumberland was handed over by the Scots and executed in 1572; Westmorland escaped abroad. The revolt was the most serious rising of Elizabeth\'s reign, and in 1570 the Pope excommunicated her, which made Catholics\' loyalty more suspect and led to harsher laws.'],
], view.factors('Why the revolt happened', [
  ['Religion', 'Catholic earls wanted to restore Catholicism'],
  ['Power', 'loss of influence in the north to Protestant "new men"'],
  ['Money', 'Northumberland\'s loss of copper-mining rights'],
  ['Trigger', 'the failure of the Norfolk marriage plan and fear of arrest'],
]), [
  view.timeline('1569–72', [
    ['1569', 'Plan for Norfolk to marry Mary'],
    ['Oct 1569', 'Norfolk sent to the Tower'],
    ['14 Nov 1569', 'Rebels take Durham; Catholic Mass in the cathedral'],
    ['Dec 1569', 'Rebels retreat; earls flee to Scotland'],
    ['Feb 1570', 'The Pope excommunicates Elizabeth'],
    ['1572', 'Northumberland executed'],
  ]),
  view.people('People', [
    ['Thomas Percy, Earl of Northumberland', 'Catholic rebel leader, executed in 1572'],
    ['Charles Neville, Earl of Westmorland', 'Rebel leader who fled abroad'],
    ['Thomas Howard, Duke of Norfolk', 'Planned to marry Mary; sent to the Tower'],
    ['The Earl of Sussex', 'Led the royal army against the rebels'],
  ]),
  view.source('A source type: a proclamation by the rebels', 'A statement issued by the earls in 1569 explaining that they rose to restore the true Catholic religion and protect the succession.', 'Useful for how the rebels justified themselves; they may have stressed religion and hidden personal grievances.'),
], [
  ['Why did the Norfolk marriage plan alarm Elizabeth?', ['It would strengthen Mary\'s claim and make her the obvious heir', 'Norfolk planned to take Mary back to Scotland as its king', 'It meant Norfolk would join the Spanish army in the Netherlands'], 0, 'Marriage would make Mary a stronger rival.'],
  ['Why did the revolt fail?', ['Spanish help never came and the rebels retreated before a large royal army', 'The rebels captured Mary but she refused to go with them to London', 'The Pope ordered the earls to stop fighting before they reached Durham'], 0, 'They were isolated and outnumbered.'],
  ['Exam skill · Explain why. Which explains why the northern earls rebelled?', ['They had lost power in the north to Protestant "new men", so restoring Catholicism and Mary would restore their influence.', 'The revolt began in November 1569, and the rebels soon took the city of Durham in the north.', 'Thomas Percy was the Earl of Northumberland, and Charles Neville was the Earl of Westmorland at the time.'], 0, 'Explanation links grievances to the rising.'],
  ['How did the revolt change things for Catholics?', ['It led to excommunication in 1570, making Catholic loyalty more suspect', 'It made Elizabeth accept Catholic services in every parish in England', 'It gave Catholic nobles more power in the north than ever before'], 0, 'Suspicion and harsher laws followed.'],
], [
  Q('eld11.p1', 'Which city did the rebels take in 1569?', ['Durham', 'York', 'London'], 0, 'They held a Catholic Mass there.', 'events'),
  Q('eld11.p2', 'Whom did Norfolk plan to marry?', ['Mary, Queen of Scots', 'Elizabeth I herself', 'Mary of Guise, the regent'], 0, 'To make her Elizabeth\'s heir.', 'norfolk'),
  Q('eld11.p3', 'Where was Norfolk sent in October 1569?', ['The Tower of London', 'Tutbury Castle in Staffordshire', 'Fotheringhay Castle'], 0, 'Elizabeth was furious.', 'norfolk'),
  Q('eld11.p4', 'Roughly how many rebels were executed?', ['About 450', 'About 45', 'About 4,500'], 0, 'Punishment was harsh.', 'consequences'),
  Q('eld11.p5', 'When was Elizabeth excommunicated?', ['1570', '1559', '1588'], 0, 'After the revolt.', 'consequences'),
], [
  Q('eld11.c1', 'Which earl lost rights to a copper mine?', ['Northumberland', 'Westmorland', 'Leicester, the favourite'], 0, 'The Crown claimed them.', 'causes'),
  Q('eld11.c2', 'Where was Mary moved during the revolt?', ['From Tutbury to Coventry', 'From York north to Durham', 'From London to the coast at Dover'], 0, 'Away from the rebels.', 'events'),
  Q('eld11.c3', 'Whose help did the rebels expect?', ['Spanish troops in the Netherlands', 'Scottish Protestant lords and their men', 'The French navy waiting off Calais'], 0, 'That help never came.', 'events'),
  Q('eld11.c4', 'Where did the earls flee?', ['Scotland', 'Ireland', 'Spain'], 0, 'In December 1569.', 'events'),
  Q('eld11.c5', 'What happened to Northumberland?', ['He was executed in 1572', 'He was pardoned at once', 'He became Lord Lieutenant'], 0, 'The Scots handed him over.', 'consequences'),
  Q('eld11.c6', 'Whom did the earls resent?', ['Protestant "new men" like Cecil', 'The Pope and his bishops', 'Mary, Queen of Scots herself'], 0, 'They had lost influence.', 'causes'),
  Q('eld11.c7', 'Roughly how large was the royal army?', ['About 14,000', 'About 1,400', 'About 140,000'], 0, 'The rebels retreated.', 'events'),
  Q('eld11.c8', 'What made the revolt significant?', ['It was the most serious rising of the reign', 'It put Mary on the English throne for a month', 'It ended England\'s long war with Spain at once'], 0, 'It led to excommunication.', 'consequences'),
], {exam: 'Explain why there was a rebellion in the north of England in 1569. (12 marks)'}),

lesson(T, 'elizabeth.three-plots', 'The Ridolfi, Throckmorton and Babington plots', ['B4 2.1'], [
  ['The Ridolfi plot, 1571', 'Roberto Ridolfi, an Italian banker, planned for Spanish troops from the Netherlands to invade, Catholics to rise, Elizabeth to be overthrown, and Mary to marry the Duke of Norfolk and take the throne. The plot was uncovered through intercepted letters. Norfolk was executed in 1572, and the Spanish ambassador was expelled.'],
  ['The Throckmorton plot, 1583', 'Francis Throckmorton, a young Catholic, was the go-between in a plan for a French Catholic force led by the Duke of Guise, backed by Spain and the Pope, to invade, free Mary and put her on the throne. He was watched, arrested, tortured and executed in 1584. The Spanish ambassador, Mendoza, was expelled.'],
  ['The Babington plot, 1586', 'Anthony Babington planned to murder Elizabeth, free Mary and support a foreign invasion. Mary\'s letters were smuggled in and out of her prison in beer barrels, but the messenger was a double agent working for Walsingham. Mary wrote approving the plan. Babington and the other plotters were executed in September 1586.'],
  ['What the plots had in common', 'Each plot aimed to replace Elizabeth with Mary and relied on foreign Catholic help and an English Catholic rising. None came close to success, because the government\'s intelligence uncovered them. But they showed the danger Mary posed while she lived and pushed the government towards harsher action against Catholics.'],
], view.factors('Comparing the plots', [
  ['Ridolfi, 1571', 'Spanish invasion; Mary to marry Norfolk; Norfolk executed'],
  ['Throckmorton, 1583', 'French invasion led by Guise; Mendoza expelled'],
  ['Babington, 1586', 'assassination of Elizabeth; Mary\'s approval in writing'],
  ['Common features', 'Mary as queen; foreign help; uncovered by intelligence'],
]), [
  view.timeline('The plots', [
    ['1571', 'The Ridolfi plot uncovered'],
    ['1572', 'Norfolk executed'],
    ['Nov 1583', 'Throckmorton arrested'],
    ['1584', 'Throckmorton executed; Mendoza expelled'],
    ['Jul 1586', 'Mary\'s letter approving the Babington plot intercepted'],
    ['Sept 1586', 'Babington and the plotters executed'],
  ]),
  view.people('People', [
    ['Roberto Ridolfi', 'Italian banker behind the 1571 plot'],
    ['Francis Throckmorton', 'Go-between in the 1583 plot'],
    ['Anthony Babington', 'Leader of the 1586 plot'],
    ['Bernardino de Mendoza', 'Spanish ambassador expelled in 1584'],
  ]),
  view.source('A source type: a decoded letter', 'A copy of a coded letter from Mary approving the Babington plot, deciphered by Walsingham\'s codebreaker.', 'Strong evidence of Mary\'s involvement; Mary\'s supporters argued parts were added by the decoder.'),
], [
  ['How was the Babington plot uncovered?', ['The messenger carrying Mary\'s letters was a double agent for Walsingham', 'Mary handed the letters to her guards and reported the plot herself', 'Babington confessed to the Privy Council before the plot had started'], 0, 'Walsingham read every letter.'],
  ['What did all three plots aim to do?', ['Replace Elizabeth with Mary, with foreign help and a Catholic rising', 'Make Robert Dudley king by forcing Elizabeth to marry him in secret', 'Return England to Spain and make Philip II its king without Mary'], 0, 'Mary was the focus.'],
  ['Exam skill · Describe two features. Which is a valid feature of the Throckmorton plot, with supporting detail?', ['The plan was for a French force led by the Duke of Guise to invade and free Mary.', 'The Throckmorton plot was a very dangerous plan against Elizabeth and England.', 'Elizabeth was excommunicated by the Pope in 1570 after the northern revolt.'], 0, 'A feature with specific detail.'],
  ['Why did the plots fail?', ['The government\'s intelligence uncovered them before they could happen', 'The foreign powers involved always refused to send any money at all', 'English Catholics rose too early and were defeated in every battle'], 0, 'Surveillance was effective.'],
], [
  Q('eld12.p1', 'Who was executed after the Ridolfi plot?', ['The Duke of Norfolk', 'Francis Throckmorton', 'Anthony Babington'], 0, 'He was executed in 1572.', 'ridolfi'),
  Q('eld12.p2', 'Who would have led the invasion in the Throckmorton plot?', ['The Duke of Guise', 'The Duke of Parma', 'Philip II himself'], 0, 'A French Catholic leader.', 'throckmorton'),
  Q('eld12.p3', 'How were Mary\'s letters smuggled in 1586?', ['In beer barrels', 'Inside books', 'Sewn into clothes'], 0, 'Via a double agent.', 'babington'),
  Q('eld12.p4', 'When was the Babington plot?', ['1586', '1571', '1583'], 0, 'It led to Mary\'s trial.', 'babington'),
  Q('eld12.p5', 'Which ambassador was expelled in 1584?', ['Mendoza', 'Ridolfi', 'De Quadra'], 0, 'The Spanish ambassador.', 'throckmorton'),
], [
  Q('eld12.c1', 'What was Ridolfi?', ['An Italian banker', 'A Spanish general', 'An English priest'], 0, 'He organised the plot.', 'ridolfi'),
  Q('eld12.c2', 'What did the Babington plot plan to do to Elizabeth?', ['Murder her', 'Marry her to Philip', 'Exile her to France'], 0, 'The plan was assassination.', 'babington'),
  Q('eld12.c3', 'What happened to Throckmorton?', ['Tortured and executed', 'Pardoned and released', 'Made an ambassador'], 0, 'This happened in 1584.', 'throckmorton'),
  Q('eld12.c4', 'Where would Ridolfi\'s troops come from?', ['The Netherlands', 'Scotland, via the border', 'Ireland, via Wales'], 0, 'Spanish forces there.', 'ridolfi'),
  Q('eld12.c5', 'What did Mary do in 1586?', ['Wrote approving the plot', 'Reported it to Elizabeth', 'Refused to reply'], 0, 'This sealed her fate.', 'babington'),
  Q('eld12.c6', 'Did any plot come close to success?', ['No', 'Yes, all three', 'Only Ridolfi'], 0, 'All were uncovered.', 'common'),
  Q('eld12.c7', 'How were the plots usually uncovered?', ['Intelligence and intercepted letters', 'Confessions made by priests to bishops', 'Warnings sent by Philip II himself'], 0, 'Surveillance worked.', 'common'),
  Q('eld12.c8', 'Who backed the Throckmorton plan besides France?', ['Spain and the Pope', 'Scotland and Ireland', 'The Dutch rebels'], 0, 'A Catholic coalition.', 'throckmorton'),
], {exam: 'Describe two features of the Babington plot. (4 marks)'}),

lesson(T, 'elizabeth.walsingham', 'Walsingham and the spy network', ['B4 2.1'], [
  ['Sir Francis Walsingham', 'Walsingham, a committed Protestant, became Principal Secretary in 1573. He believed Catholics and Mary, Queen of Scots were a constant danger, and he built an intelligence network to protect Elizabeth.'],
  ['Methods', 'Walsingham used informers and agents in English Catholic communities and abroad, including in the colleges in Europe that trained English Catholic priests. He intercepted and copied letters, employed a skilled codebreaker, Thomas Phelippes, and used double agents. Suspects such as Throckmorton were tortured to extract information.'],
  ['Seminary priests and Jesuits', 'From 1574 Catholic priests trained abroad began arriving secretly in England; from 1580 they were joined by Jesuits, such as Edmund Campion. The government saw them as agents of the Pope and of Spain. Campion was captured and executed in 1581, and many priests were hunted down.'],
  ['Laws against Catholics', 'An Act of 1581 raised the recusancy fine to £20 a month and made converting someone to Catholicism treason. A 1585 Act ordered all Jesuits and seminary priests to leave England or face execution. The Bond of Association (1584), signed by thousands of gentry, and an Act of 1585 declared that anyone in whose name a plot was made could be executed.'],
], view.factors('How the threat was contained', [
  ['Intelligence', 'informers, intercepted letters, codebreaking and double agents'],
  ['Force', 'torture and execution of plotters and priests'],
  ['Law', 'heavier recusancy fines; priests banned; the 1585 Act'],
  ['Loyalty', 'the Bond of Association'],
]), [
  view.timeline('Intelligence and the law', [
    ['1573', 'Walsingham becomes Principal Secretary'],
    ['1574', 'First seminary priests arrive in England'],
    ['1580', 'Jesuit mission begins'],
    ['1581', 'Campion executed; recusancy fine raised to £20 a month'],
    ['1584', 'The Bond of Association'],
    ['1585', 'Acts against priests and for the queen\'s safety'],
  ]),
  view.people('People', [
    ['Sir Francis Walsingham', 'Principal Secretary and spymaster'],
    ['Thomas Phelippes', 'Codebreaker who deciphered Mary\'s letters'],
    ['Edmund Campion', 'Jesuit priest executed in 1581'],
    ['Gilbert Gifford', 'Double agent in the Babington plot'],
  ]),
  view.source('A source type: a spy\'s report', 'A report sent to Walsingham by an agent in a Catholic college abroad, listing priests about to travel to England.', 'Useful for how Walsingham gathered intelligence; agents were paid, so some may have exaggerated to stay useful.'),
], [
  ['Why did the government fear seminary priests and Jesuits?', ['They were seen as agents of the Pope and Spain who could encourage plots', 'They were trying to make every English parish Puritan instead of Catholic', 'They had been invited by Elizabeth to replace the Protestant bishops'], 0, 'Religion and loyalty were linked.'],
  ['What did the 1581 Act do?', ['Raised the recusancy fine to £20 a month and made converting people treason', 'Allowed Catholic Masses to be held openly in every town in England', 'Ended all fines for people who did not attend church on Sundays'], 0, 'A sharp increase in pressure.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Walsingham\'s intelligence was the main reason plots failed, though weak foreign support and harsh laws also mattered.', 'Walsingham was very important because he was a spymaster who had a very large number of spies.', 'Walsingham made no difference at all, because no Catholics ever really plotted against Elizabeth.'], 0, 'A supported judgement weighs several factors.'],
  ['What was the Bond of Association?', ['A pledge by thousands of gentry to kill anyone in whose name a plot was made', 'A trade agreement between English and Spanish merchants trading in Antwerp', 'A Catholic oath to free Mary and make her Queen of England'], 0, 'Loyalty organised against Mary.'],
], [
  Q('eld13.p1', 'When did Walsingham become Principal Secretary?', ['1573', '1558', '1588'], 0, 'He served until 1590.', 'walsingham'),
  Q('eld13.p2', 'Who was Walsingham\'s codebreaker?', ['Thomas Phelippes', 'Gilbert Gifford', 'Edmund Campion'], 0, 'He decoded Mary\'s letters.', 'methods'),
  Q('eld13.p3', 'Which Jesuit was executed in 1581?', ['Edmund Campion', 'Robert Parsons', 'Anthony Babington'], 0, 'A famous missionary.', 'priests'),
  Q('eld13.p4', 'What was the recusancy fine raised to in 1581?', ['£20 a month', '12 pence a week', '£1 a year'], 0, 'It was a huge sum then.', 'laws'),
  Q('eld13.p5', 'When did seminary priests begin arriving?', ['1574', '1559', '1600'], 0, 'They were trained abroad.', 'priests'),
], [
  Q('eld13.c1', 'Where were seminary priests trained?', ['Colleges in Europe', 'Oxford and Cambridge', 'London churches'], 0, 'Douai was the best known.', 'priests'),
  Q('eld13.c2', 'What did the 1585 Act order priests to do?', ['Leave or face execution', 'Join the Church of England', 'Pay a fine of twelve pence'], 0, 'Jesuits and seminarians.', 'laws'),
  Q('eld13.c3', 'Which method did Walsingham use?', ['Intercepting letters', 'Holding public debates', 'Paying bribes to the Pope'], 0, 'And codebreaking.', 'methods'),
  Q('eld13.c4', 'What were double agents?', ['Spies pretending to work for the other side', 'Two ambassadors sent to the same court', 'Priests who travelled to England in pairs'], 0, 'Gilbert Gifford was one.', 'methods'),
  Q('eld13.c5', 'When was the Jesuit mission begun?', ['1580', '1570', '1590'], 0, 'With Campion and Parsons.', 'priests'),
  Q('eld13.c6', 'What made converting to Catholicism treason?', ['The 1581 Act', 'The 1559 Act', 'The Bond of Association'], 0, 'Converting others.', 'laws'),
  Q('eld13.c7', 'Was torture used on suspects?', ['Yes', 'No, never', 'Only abroad'], 0, 'Throckmorton was racked.', 'methods'),
  Q('eld13.c8', 'What was Walsingham\'s religion?', ['Committed Protestant', 'Catholic', 'Puritan exile in Rome'], 0, 'He feared Catholic plots.', 'walsingham'),
], {exam: 'Explain why the Catholic threat to Elizabeth was contained in the years 1570–87. (12 marks)'}),

lesson(T, 'elizabeth.mary-execution', 'The execution of Mary, Queen of Scots, 1587', ['B4 2.1'], [
  ['Trial', 'After the Babington plot, Mary was tried in October 1586 at Fotheringhay Castle by a commission of nobles and councillors under the 1585 Act. She denied the court\'s right to try a queen, but was found guilty of plotting to kill Elizabeth.'],
  ['Elizabeth\'s hesitation', 'Parliament and the Privy Council pressed for Mary\'s execution, but Elizabeth hesitated for months. Executing an anointed queen set a dangerous example and could provoke Catholic powers. She signed the death warrant on 1 February 1587 and gave it to her secretary, William Davison.'],
  ['Execution', 'The Council sent the warrant without waiting for further instructions, and Mary was beheaded at Fotheringhay on 8 February 1587. Elizabeth claimed she had not meant the warrant to be sent; she banned Cecil from Court for a time, and Davison was fined and imprisoned in the Tower.'],
  ['Consequences', 'Mary\'s death removed the Catholic alternative to Elizabeth inside England. Mary\'s son, James VI of Scotland, protested only mildly, hoping to inherit the English throne. But it gave Philip II a further reason to invade, and he now planned to claim the crown himself, with the Pope promising money once Spanish troops landed.'],
], view.factors('Why Mary was executed in 1587', [
  ['Evidence', 'her written approval of the Babington plot'],
  ['Law', 'the 1585 Act allowed trial of anyone in whose name a plot was made'],
  ['Pressure', 'Parliament and the Privy Council demanded it'],
  ['Danger', 'while Mary lived, plots would continue'],
]), [
  view.timeline('1586–87', [
    ['Sept 1586', 'Babington plotters executed'],
    ['Oct 1586', 'Mary tried at Fotheringhay'],
    ['Nov 1586', 'Parliament petitions for her execution'],
    ['1 Feb 1587', 'Elizabeth signs the warrant'],
    ['8 Feb 1587', 'Mary executed'],
    ['1587', 'Davison imprisoned; Philip II plans invasion'],
  ]),
  view.people('People', [
    ['Mary, Queen of Scots', 'Executed in February 1587'],
    ['William Davison', 'Secretary who passed on the warrant, later imprisoned'],
    ['James VI of Scotland', 'Mary\'s son; protested only mildly'],
    ['Philip II of Spain', 'Took up the Catholic claim to England'],
  ]),
  view.source('A source type: an eyewitness account of the execution', 'An account written by an official present at Fotheringhay describing Mary\'s final words and death.', 'Valuable for detail of the event; written for the government, it may shape Mary\'s death to suit its message.'),
], [
  ['Why did Elizabeth hesitate to execute Mary?', ['Executing a queen set a dangerous example and could provoke Catholic powers', 'Mary had been found innocent at her trial at Fotheringhay in 1586', 'Parliament had begged Elizabeth to free Mary and send her to France'], 0, 'Killing an anointed monarch was momentous.'],
  ['Why did Elizabeth punish Davison?', ['She claimed she had not meant the warrant to be sent', 'He had helped Mary escape from Fotheringhay Castle', 'He had refused to give the warrant to the Privy Council'], 0, 'She distanced herself from the decision.'],
  ['Exam skill · Explain why. Which explains why Mary was executed in 1587?', ['Her approval of the Babington plot gave evidence of treason under the 1585 Act, so she could be tried and condemned.', 'Mary was executed at Fotheringhay Castle in Northamptonshire on the eighth of February in 1587.', 'Mary\'s son, James VI, was already the King of Scotland at the time of his mother\'s execution.'], 0, 'Explanation links the evidence and law to the outcome.'],
  ['What was one consequence of Mary\'s execution?', ['Philip II had a further reason to invade and claim the throne', 'James VI declared war on England and invaded the north at once', 'The Pope accepted Elizabeth as the rightful Queen of England'], 0, 'It brought war with Spain closer.'],
], [
  Q('eld14.p1', 'Where was Mary tried and executed?', ['Fotheringhay Castle', 'The Tower of London', 'Tutbury Castle'], 0, 'In Northamptonshire.', 'trial'),
  Q('eld14.p2', 'When was Mary executed?', ['8 February 1587', '8 August 1588', '17 November 1558'], 0, 'After months of delay.', 'execution'),
  Q('eld14.p3', 'Who passed on the death warrant?', ['William Davison', 'Francis Walsingham', 'Robert Dudley'], 0, 'He was later imprisoned.', 'execution'),
  Q('eld14.p4', 'Which law allowed Mary\'s trial?', ['The 1585 Act', 'The Act of Uniformity', 'The Poor Law'], 0, 'For the queen\'s safety.', 'trial'),
  Q('eld14.p5', 'How did James VI respond?', ['He protested only mildly', 'He invaded the north of England', 'He became a Catholic in protest'], 0, 'He hoped to inherit.', 'consequences'),
], [
  Q('eld14.c1', 'What did Mary say about the court?', ['It had no right to try a queen', 'It was fair and she accepted it', 'It should have met in Scotland'], 0, 'She was found guilty anyway.', 'trial'),
  Q('eld14.c2', 'Who pressed for Mary\'s execution?', ['Parliament and the Council', 'Philip II and his ambassador', 'The Pope and the Catholic bishops'], 0, 'Elizabeth hesitated.', 'hesitation'),
  Q('eld14.c3', 'When did Elizabeth sign the warrant?', ['1 February 1587', 'October 1586, after the trial', 'May 1568, on her arrival'], 0, 'A week before the execution.', 'hesitation'),
  Q('eld14.c4', 'What did Mary\'s death remove?', ['A Catholic alternative to Elizabeth', 'The threat of a Spanish invasion', 'The Puritan challenge in Parliament'], 0, 'That alternative was inside England.', 'consequences'),
  Q('eld14.c5', 'What did the Pope promise Philip?', ['Money once troops landed', 'An army of papal soldiers', 'Nothing at all to Spain'], 0, 'For an invasion.', 'consequences'),
  Q('eld14.c6', 'What was Mary found guilty of?', ['Plotting to kill Elizabeth', 'Murdering her husband Darnley', 'Heresy against the Church'], 0, 'After the Babington plot.', 'trial'),
  Q('eld14.c7', 'Who was banned from Court for a time?', ['William Cecil', 'Robert Dudley', 'Francis Drake'], 0, 'Elizabeth blamed her council.', 'execution'),
  Q('eld14.c8', 'Why did James not protest strongly?', ['He hoped to inherit England', 'He had never liked his mother', 'He was being held as a prisoner'], 0, 'The English crown mattered more.', 'consequences'),
], {exam: 'Explain why Mary, Queen of Scots was executed in 1587. (12 marks)'}),

lesson(T, 'elizabeth.spain-rivalry', 'Political and religious rivalry with Spain', ['B4 2.2'], [
  ['Philip II\'s power', 'Philip II ruled Spain, much of Italy, the Netherlands and a huge empire in the Americas, which supplied silver. He had been king of England as Mary I\'s husband, and he saw himself as the defender of the Catholic faith against Protestantism.'],
  ['From friendship to hostility', 'At first Philip wanted England as an ally against France and proposed to Elizabeth in 1559. Relations worsened as Elizabeth\'s Church became firmly Protestant and as Spanish ambassadors became involved in plots, including the Ridolfi and Throckmorton plots.'],
  ['The Netherlands and the Duke of Alba', 'When Protestants in the Netherlands rebelled in 1566, Philip sent the Duke of Alba with a large army in 1567 to crush them. A powerful Catholic army just across the Channel alarmed England, and English Protestants sympathised with the Dutch rebels.'],
  ['The treasure ships, 1568', 'In 1568 Spanish ships carrying money to pay Alba\'s army sheltered from storms and pirates in English ports. Elizabeth took the money, claiming it was a loan to Spain from Italian bankers that she could take over. Spain seized English ships and goods, and trade between England and the Netherlands was halted until 1573.'],
], view.factors('Why relations worsened', [
  ['Religion', 'Philip defended Catholicism; England became firmly Protestant'],
  ['Plots', 'Spanish ambassadors involved in plots against Elizabeth'],
  ['The Netherlands', 'Alba\'s army across the Channel; English sympathy for Dutch Protestants'],
  ['Money', 'the seizure of the treasure ships in 1568'],
]), [
  view.timeline('England and Spain', [
    ['1559', 'Philip proposes marriage to Elizabeth'],
    ['1566', 'Revolt begins in the Netherlands'],
    ['1567', 'Alba\'s army arrives in the Netherlands'],
    ['1568', 'Elizabeth seizes Spanish treasure ships'],
    ['1568–73', 'Trade between England and the Netherlands halted'],
    ['1584', 'Spanish ambassador Mendoza expelled'],
  ]),
  view.people('People', [
    ['Philip II', 'King of Spain and defender of Catholicism'],
    ['The Duke of Alba', 'Commanded Spain\'s army in the Netherlands'],
    ['Spanish ambassadors', 'Some were involved in plots against Elizabeth'],
    ['Dutch Protestants', 'Rebels against Spanish rule'],
  ]),
  view.source('A source type: a letter from a Spanish ambassador', 'A letter from the Spanish ambassador in London to Philip II reporting on English Catholics who might support a rising.', 'Useful for Spanish involvement in English affairs; the ambassador may have exaggerated Catholic support to encourage Philip.'),
], [
  ['Why did Alba\'s army in the Netherlands alarm England?', ['A large Catholic army sat just across the Channel from England', 'Alba had announced that he would invade Scotland within a year', 'The army was there to help the Dutch Protestants against France'], 0, 'Proximity mattered.'],
  ['Why did Philip at first want friendship with England?', ['He wanted England as an ally against France', 'He hoped England would help him conquer Portugal', 'He wanted English sailors for his New World fleets'], 0, 'France was the common enemy.'],
  ['Exam skill · Explain why. Which explains why relations with Spain worsened?', ['Philip saw himself as defender of Catholicism, so England\'s Protestant Church and links to the Dutch rebels made them rivals.', 'Philip II was the King of Spain, and he had once been married to Queen Mary I of England.', 'The Duke of Alba arrived in the Netherlands with a large and powerful Spanish army in the year 1567.'], 0, 'Explanation links religion to the rivalry.'],
  ['What happened after Elizabeth seized the treasure in 1568?', ['Spain seized English goods and trade with the Netherlands stopped', 'Spain declared war on England and invaded Ireland the same year', 'Philip thanked Elizabeth and paid her interest on the money'], 0, 'Economic retaliation followed.'],
], [
  Q('eld15.p1', 'Whom did Philip send to the Netherlands in 1567?', ['The Duke of Alba', 'The Duke of Parma', 'Medina Sidonia'], 0, 'With a large army.', 'netherlands'),
  Q('eld15.p2', 'When did the Dutch revolt begin?', ['1566', '1585', '1588'], 0, 'Against Spanish rule.', 'netherlands'),
  Q('eld15.p3', 'What did Elizabeth seize in 1568?', ['Money on Spanish ships', 'Spanish land in Italy', 'Calais'], 0, 'It was meant to pay Alba.', 'treasure'),
  Q('eld15.p4', 'How did Philip see himself?', ['Defender of the Catholic faith', 'Protector of Europe\'s Protestants', 'An ally of the Ottoman sultan'], 0, 'A religious mission.', 'religion'),
  Q('eld15.p5', 'Where did Spain\'s silver come from?', ['The Americas', 'England', 'The Netherlands'], 0, 'It came from Spain\'s empire.', 'power'),
], [
  Q('eld15.c1', 'How long was trade halted after 1568?', ['Until 1573', 'Until 1600', 'For a week'], 0, 'Both sides suffered.', 'treasure'),
  Q('eld15.c2', 'Who had Philip been married to?', ['Mary I', 'Mary, Queen of Scots', 'Anne Boleyn'], 0, 'He was briefly king of England.', 'power'),
  Q('eld15.c3', 'Whom did English Protestants sympathise with?', ['The Dutch rebels', 'The Duke of Alba', 'The Pope'], 0, 'Fellow Protestants.', 'netherlands'),
  Q('eld15.c4', 'How were Spanish ambassadors linked to plots?', ['Some were involved in them', 'They reported them to Elizabeth', 'They never were'], 0, 'Ridolfi and Throckmorton.', 'religion'),
  Q('eld15.c5', 'Why did the treasure ships enter English ports?', ['To shelter from storms and pirates', 'To trade wool and cloth in Southampton', 'To attack English ports by surprise'], 0, 'This happened in 1568.', 'treasure'),
  Q('eld15.c6', 'How did Elizabeth justify taking the money?', ['It was a loan she could take over', 'It had been stolen from England', 'It was a gift from Philip II'], 0, 'From Italian bankers.', 'treasure'),
  Q('eld15.c7', 'Which territory did Philip rule near England?', ['The Netherlands', 'Scotland and the Borders', 'Brittany in France'], 0, 'Across the Channel.', 'power'),
  Q('eld15.c8', 'When did Philip propose to Elizabeth?', ['1559', '1568', '1587'], 0, 'She refused his proposal.', 'power'),
], {exam: 'Describe two features of the rivalry between England and Spain in the years 1566–73. (4 marks)'}),

lesson(T, 'elizabeth.privateering', 'Commercial rivalry and privateering', ['B4 2.2'], [
  ['The New World', 'Spain claimed most of the Americas and controlled trade with its colonies, which supplied enormous amounts of silver. English merchants wanted a share of this trade and of the wealth, but Spain allowed only licensed Spanish ships to trade there.'],
  ['John Hawkins', 'In the 1560s John Hawkins made voyages taking enslaved Africans to sell in Spanish colonies, breaking Spain\'s monopoly. In 1568 his fleet was attacked by Spanish ships at San Juan de Ulúa in Mexico; many English sailors were killed or captured, and English hostility to Spain grew.'],
  ['Privateers', 'Privateers were private ship owners who were licensed, or quietly encouraged, by the queen to attack enemy ships and ports and keep a share of what they took. Elizabeth often invested in their voyages and took a share of the profits, while denying official responsibility to Spain.'],
  ['Francis Drake', 'In 1572–73 Francis Drake attacked Spanish settlements in Panama and captured silver being carried overland. His later voyage around the world (1577–80) raided Spanish ships and ports on the Pacific coast and returned with huge treasure. Elizabeth knighted him on board his ship in 1581, which Spain saw as approval of piracy.'],
], view.factors('Why privateering worsened relations', [
  ['Spain\'s view', 'piracy that broke its trade monopoly and stole its silver'],
  ['England\'s view', 'a way to win wealth and weaken Spain without open war'],
  ['The queen\'s role', 'she invested in voyages and knighted Drake'],
  ['Effect', 'growing hostility and a reason for Spain to go to war'],
]), [
  view.timeline('Trade and privateering', [
    ['1562–68', 'Hawkins\'s voyages to Spanish America'],
    ['1568', 'Hawkins attacked at San Juan de Ulúa'],
    ['1572–73', 'Drake raids Panama'],
    ['1577–80', 'Drake sails around the world'],
    ['1581', 'Elizabeth knights Drake on the Golden Hind'],
  ]),
  view.people('People', [
    ['John Hawkins', 'Merchant and slave trader; later reformed the navy'],
    ['Francis Drake', 'Privateer who raided Spanish ships and ports'],
    ['Elizabeth I', 'Invested in voyages and shared the profits'],
    ['Philip II', 'Saw privateers as pirates'],
  ]),
  view.source('A source type: a Spanish complaint', 'A formal protest from the Spanish ambassador listing ships and goods taken by English privateers.', 'Useful for the scale of Spanish losses and anger; it was written to demand compensation, so it may inflate the losses.'),
], [
  ['Why did English merchants want to trade in the New World?', ['It was a source of great wealth, especially silver', 'Spain had invited English ships to trade there freely', 'It was the only place where English wool could be sold'], 0, 'Wealth drew them in.'],
  ['Why did Elizabeth support privateers?', ['They brought her profits and weakened Spain without open war', 'They were part of the Royal Navy under the Lord Admiral\'s command', 'Spain had agreed that English ships could attack its colonies'], 0, 'Deniable pressure on Spain.'],
  ['Exam skill · Describe two features. Which is a valid feature of privateering, with supporting detail?', ['Privateers were private ship owners encouraged by the queen to attack Spanish ships for a share of the profit.', 'Privateering was very exciting and made a lot of people in England very rich.', 'Philip II ruled a very large empire that included the Netherlands and much of Italy.'], 0, 'A feature with a specific detail.'],
  ['Why did knighting Drake anger Spain?', ['It looked like royal approval of piracy against Spain', 'Drake had been born in Spain and was a Spanish subject', 'It broke a treaty that banned England from naming knights'], 0, 'The honour sent a message.'],
], [
  Q('eld16.p1', 'Where was Hawkins attacked in 1568?', ['San Juan de Ulúa', 'Cadiz, in southern Spain', 'Gravelines, near Calais'], 0, 'It is in Mexico.', 'hawkins'),
  Q('eld16.p2', 'Where did Drake raid in 1572–73?', ['Panama', 'Lisbon', 'Calais'], 0, 'He seized Spanish silver.', 'drake'),
  Q('eld16.p3', 'What was a privateer?', ['A licensed private raider', 'A Spanish colonial governor', 'An admiral of the Royal Navy'], 0, 'Kept a share of the loot.', 'privateers'),
  Q('eld16.p4', 'When was Drake knighted?', ['1581', '1568', '1588'], 0, 'On the Golden Hind.', 'drake'),
  Q('eld16.p5', 'What did Spain control in the Americas?', ['Trade with its colonies', 'Nothing in the Americas', 'Only the land of Brazil'], 0, 'Spain held a monopoly.', 'new-world'),
], [
  Q('eld16.c1', 'What did Hawkins trade?', ['Enslaved Africans', 'Wool and woollen cloth', 'Spices from the East Indies'], 0, 'Breaking Spain\'s monopoly.', 'hawkins'),
  Q('eld16.c2', 'How did Elizabeth benefit from privateers?', ['She shared their profits', 'They paid her new taxes', 'She gained nothing from them'], 0, 'She invested in voyages.', 'privateers'),
  Q('eld16.c3', 'What did Spain call privateers?', ['Pirates', 'Allies', 'Merchants'], 0, 'Criminals at sea.', 'privateers'),
  Q('eld16.c4', 'When did Drake sail around the world?', ['1577–80', '1588–90', '1558–60'], 0, 'With huge treasure.', 'drake'),
  Q('eld16.c5', 'What did the New World supply Spain with?', ['Silver', 'Wool and cloth', 'Coal and iron'], 0, 'It supplied huge amounts.', 'new-world'),
  Q('eld16.c6', 'What did Elizabeth deny to Spain?', ['Official responsibility', 'Any trade with Spain', 'Spanish ambassadors at Court'], 0, 'Privateers were deniable.', 'privateers'),
  Q('eld16.c7', 'What did San Juan de Ulúa increase?', ['English hostility to Spain', 'Friendly trade with Spain', 'Hawkins\'s personal fortune'], 0, 'Many sailors died.', 'hawkins'),
  Q('eld16.c8', 'Who could legally trade with Spain\'s colonies?', ['Licensed Spanish ships', 'Any merchant who wished to', 'English and Dutch ships'], 0, 'Spain held a monopoly.', 'new-world'),
], {exam: 'Explain why there was commercial rivalry between England and Spain in the years 1568–85. (12 marks)'}),

lesson(T, 'elizabeth.netherlands', 'English involvement in the Netherlands, 1585–88', ['B4 2.3'], [
  ['Why 1585?', 'By 1584 the Dutch revolt was failing. The Duke of Parma, Spain\'s commander, was winning back territory, and in July 1584 the Dutch leader William of Orange was assassinated. In the same year Spain made a treaty with the French Catholic League. Elizabeth feared that if the Dutch were defeated, Spain would use the Netherlands as a base to invade England.'],
  ['The Treaty of Nonsuch, 1585', 'In August 1585, as Parma took the great port of Antwerp, Elizabeth signed the Treaty of Nonsuch with the Dutch rebels. She agreed to send an army of about 7,000 men and to pay for it. This made England and Spain effectively at war.'],
  ['Leicester\'s campaign', 'Robert Dudley, Earl of Leicester, led the army. In 1586 he accepted the title of Governor-General of the Netherlands without Elizabeth\'s permission, which angered her because it suggested she was claiming the country. The campaign was poorly funded and achieved little; the poet Sir Philip Sidney died after the Battle of Zutphen.'],
  ['Results', 'Leicester returned to England in 1587. The intervention did not defeat Parma, but it helped keep the Dutch fighting and stretched Spanish resources. For Philip it was a major reason to launch an invasion of England.'],
], view.factors('Why Elizabeth intervened', [
  ['Security', 'a Spanish-controlled Netherlands could be a base to invade England'],
  ['Religion', 'support for fellow Protestants'],
  ['Trade', 'the Netherlands, especially Antwerp, mattered to the English cloth trade'],
  ['Events', 'Orange\'s assassination and Parma\'s advance'],
]), [
  view.timeline('England in the Netherlands', [
    ['Jul 1584', 'William of Orange assassinated'],
    ['Dec 1584', 'Treaty of Joinville between Spain and the French Catholic League'],
    ['Aug 1585', 'Antwerp falls; Treaty of Nonsuch'],
    ['Dec 1585', 'Leicester arrives with the English army'],
    ['Jan 1586', 'Leicester accepts the title of Governor-General'],
    ['1587', 'Leicester returns to England'],
  ]),
  view.people('People', [
    ['The Duke of Parma', 'Spain\'s commander in the Netherlands'],
    ['William of Orange', 'Dutch leader assassinated in 1584'],
    ['Robert Dudley, Earl of Leicester', 'Led the English army'],
    ['Sir Philip Sidney', 'Poet and soldier who died after Zutphen'],
  ]),
  view.source('A source type: a letter from Elizabeth to Leicester', 'A letter from the queen rebuking Leicester for accepting the title of Governor-General without her consent.', 'Useful for Elizabeth\'s anger and her wish to avoid claiming the Netherlands; private letters show her views but not Leicester\'s side.'),
], [
  ['Why did the fall of Antwerp matter?', ['It showed Parma was winning and threatened England\'s trade and security', 'It meant the Dutch had defeated Spain and no longer needed English help', 'It gave England a port from which to invade Spain directly'], 0, 'The revolt looked close to collapse.'],
  ['Why was Elizabeth angry with Leicester?', ['He accepted the title of Governor-General without her permission', 'He refused to go to the Netherlands and stayed at Court instead', 'He made peace with Parma without telling the Privy Council'], 0, 'It implied a claim to rule the Netherlands.'],
  ['Exam skill · Explain why. Which explains why Elizabeth intervened in 1585?', ['After Orange\'s death and Parma\'s advance, she feared Spain would use the Netherlands to invade England.', 'The Treaty of Nonsuch was signed in August 1585 between England and the Dutch rebels in Holland.', 'Leicester led an army of about 7,000 English soldiers across to the Netherlands in the year 1585.'], 0, 'Explanation links fear to action.'],
  ['What did the Treaty of Nonsuch commit England to?', ['Sending and paying for an army to help the Dutch rebels', 'Handing the town of Calais over to the Dutch rebels', 'Paying reparations to Spain for Drake\'s raids'], 0, 'It meant open conflict with Spain.'],
], [
  Q('eld17.p1', 'Which treaty committed England to help the Dutch?', ['The Treaty of Nonsuch', 'The Treaty of Edinburgh', 'The Treaty of Troyes'], 0, 'It was signed in August 1585.', 'nonsuch'),
  Q('eld17.p2', 'Who led the English army?', ['The Earl of Leicester', 'Sir Francis Drake', 'William Cecil, Lord Burghley'], 0, 'He was Robert Dudley.', 'leicester'),
  Q('eld17.p3', 'Who was assassinated in 1584?', ['William of Orange', 'The Duke of Parma', 'Philip Sidney'], 0, 'The Dutch leader.', 'causes'),
  Q('eld17.p4', 'Roughly how many soldiers did England send?', ['About 7,000', 'About 700', 'About 70,000'], 0, 'Paid by Elizabeth.', 'nonsuch'),
  Q('eld17.p5', 'Which port fell to Parma in 1585?', ['Antwerp', 'Calais', 'Plymouth'], 0, 'Its fall was a major blow.', 'causes'),
], [
  Q('eld17.c1', 'Who died after the Battle of Zutphen?', ['Sir Philip Sidney', 'The Earl of Leicester', 'The Duke of Parma'], 0, 'A poet and soldier.', 'leicester'),
  Q('eld17.c2', 'What title did Leicester accept?', ['Governor-General', 'King of the Netherlands', 'Lord Admiral'], 0, 'Without permission.', 'leicester'),
  Q('eld17.c3', 'With whom did Spain sign the Treaty of Joinville?', ['The French Catholic League', 'England and the Dutch', 'The Dutch rebels alone'], 0, 'It was signed in 1584.', 'causes'),
  Q('eld17.c4', 'When did Leicester return?', ['1587', '1585', '1590'], 0, 'Having achieved little.', 'results'),
  Q('eld17.c5', 'What did the intervention help do?', ['Keep the Dutch fighting', 'Defeat Parma completely', 'End the war with Spain'], 0, 'It stretched Spain.', 'results'),
  Q('eld17.c6', 'Who was Spain\'s commander in the Netherlands?', ['The Duke of Parma', 'The Duke of Alba', 'Medina Sidonia'], 0, 'He commanded from 1578.', 'causes'),
  Q('eld17.c7', 'Why did Elizabeth fear a Spanish victory?', ['It could be a base to invade England', 'It would end the wool trade forever', 'It would make Parma king'], 0, 'It was a matter of security.', 'causes'),
  Q('eld17.c8', 'How did Philip see the intervention?', ['A major reason to invade England', 'A friendly gesture by Elizabeth', 'An unimportant sideshow'], 0, 'It meant open war.', 'results'),
], {exam: 'Explain why Elizabeth sent an army to the Netherlands in 1585. (12 marks)'}),

lesson(T, 'elizabeth.cadiz', 'Drake and the raid on Cadiz, 1587', ['B4 2.3'], [
  ['A pre-emptive strike', 'By 1587 Philip II was gathering ships and supplies for an invasion of England. Elizabeth sent Francis Drake with a fleet to disrupt the preparations before the Armada could sail.'],
  ['The raid', 'In April 1587 Drake sailed into the harbour at Cadiz, in southern Spain, and destroyed or captured around thirty ships and large quantities of supplies. He boasted that he had "singed the King of Spain\'s beard".'],
  ['The barrel staves', 'Drake then cruised off the Spanish coast and destroyed a huge store of barrel staves, the seasoned wood used to make barrels for food and water. The Armada later had to use barrels made of unseasoned wood, which leaked, spoiling food and water on the voyage.'],
  ['Effects', 'The raid delayed the Armada by about a year, giving England more time to prepare. Drake also captured a rich Spanish treasure ship near the Azores, which helped pay for the war. But it did not stop Philip, who continued building his fleet.'],
], view.factors('How important was the raid?', [
  ['Delay', 'the Armada was put back by about a year'],
  ['Supplies', 'the loss of barrel staves led to leaking barrels and spoiled food'],
  ['Morale and money', 'English confidence rose; captured treasure paid for war'],
  ['Limit', 'Philip still sent the Armada in 1588'],
]), [
  view.timeline('1587', [
    ['Feb 1587', 'Mary, Queen of Scots executed'],
    ['Apr 1587', 'Drake leaves Plymouth'],
    ['Apr 1587', 'The raid on Cadiz'],
    ['May 1587', 'Barrel staves destroyed off the Spanish coast'],
    ['Jun 1587', 'A treasure ship captured near the Azores'],
  ]),
  view.people('People', [
    ['Francis Drake', 'Led the raid'],
    ['Philip II', 'Whose invasion preparations were disrupted'],
    ['The Marquis of Santa Cruz', 'Spain\'s admiral preparing the Armada'],
    ['Elizabeth I', 'Ordered the raid'],
  ]),
  view.source('A source type: Drake\'s report to the Privy Council', 'A report from Drake describing the ships destroyed at Cadiz and the supplies he seized.', 'Useful for what happened; Drake had reasons to exaggerate his success to impress the queen.'),
], [
  ['Why were the barrel staves important?', ['Without seasoned wood the Armada used leaking barrels that spoiled food and water', 'They were used to build the hulls of the largest Spanish warships in Lisbon', 'They were the only fuel the Spanish fleet could use for cooking at sea'], 0, 'A small detail with big effects.'],
  ['What was the main effect of the raid?', ['It delayed the Armada by about a year', 'It ended Spain\'s plans to invade England for good', 'It led Philip to make peace with England in 1587'], 0, 'Time to prepare.'],
  ['Exam skill · Describe two features. Which is a valid feature of the raid on Cadiz, with supporting detail?', ['Drake destroyed or captured around thirty ships in Cadiz harbour in April 1587.', 'The raid on Cadiz was a very brave and successful attack by the English.', 'The Armada finally sailed from Lisbon in May 1588 to invade England.'], 0, 'A feature with specific detail.'],
  ['Why was the raid called "singeing the King of Spain\'s beard"?', ['It was a bold but limited blow that embarrassed Philip without defeating him', 'Drake set fire to Philip\'s palace in Madrid and burned all of his clothes', 'It ended with Philip himself being captured and brought back to England'], 0, 'An insult, not a knockout.'],
], [
  Q('eld18.p1', 'When was the raid on Cadiz?', ['April 1587', 'July 1588', 'August 1585'], 0, 'Before the Armada.', 'raid'),
  Q('eld18.p2', 'Roughly how many ships did Drake destroy or capture?', ['Around thirty', 'Around three', 'Around three hundred'], 0, 'They were in the harbour.', 'raid'),
  Q('eld18.p3', 'What were barrel staves?', ['Seasoned wood for barrels', 'Swords made in Toledo', 'Masts for the largest ships'], 0, 'Their loss mattered.', 'staves'),
  Q('eld18.p4', 'How long was the Armada delayed?', ['About a year', 'About a week', 'Ten years'], 0, 'England gained time.', 'effects'),
  Q('eld18.p5', 'Where did Drake capture a treasure ship?', ['Near the Azores', 'In the River Thames', 'Off the coast at Calais'], 0, 'It paid for the war.', 'effects'),
], [
  Q('eld18.c1', 'Where is Cadiz?', ['Southern Spain', 'Northern France', 'The Netherlands'], 0, 'It was a major Spanish port.', 'raid'),
  Q('eld18.c2', 'What happened to the Armada\'s barrels?', ['They leaked', 'They exploded', 'They were stolen'], 0, 'Unseasoned wood.', 'staves'),
  Q('eld18.c3', 'Who was preparing the Armada in 1587?', ['The Marquis of Santa Cruz', 'The Duke of Alba, in Brussels', 'The Duke of Guise, in Paris'], 0, 'He died in 1588.', 'raid'),
  Q('eld18.c4', 'Did the raid stop the Armada?', ['No, only delayed it', 'Yes, completely', 'It made it larger'], 0, 'It sailed in 1588.', 'effects'),
  Q('eld18.c5', 'What did Drake boast about?', ['Singeing the king\'s beard', 'Capturing King Philip himself', 'Burning the city of Madrid'], 0, 'A famous phrase.', 'raid'),
  Q('eld18.c6', 'What type of strike was the raid?', ['Pre-emptive', 'Defensive', 'Accidental'], 0, 'Before the attack came.', 'raid'),
  Q('eld18.c7', 'How did the raid affect English morale?', ['It rose', 'It collapsed', 'No effect'], 0, 'It was a bold success.', 'effects'),
  Q('eld18.c8', 'Who ordered the raid?', ['Elizabeth I', 'Parliament', 'Leicester'], 0, 'Drake acted for the queen.', 'raid'),
], {exam: 'Describe two features of Drake\'s raid on Cadiz in 1587. (4 marks)'}),

lesson(T, 'elizabeth.armada-plans', 'Spanish plans for invasion', ['B4 2.4'], [
  ['Why Philip invaded', 'By 1588 Philip had many reasons: English support for the Dutch rebels, privateering, the execution of Mary, Queen of Scots and his wish to restore Catholicism in England. The Pope backed the plan and promised money once Spanish troops landed.'],
  ['The plan', 'A great fleet, the Armada, would sail up the English Channel to the Netherlands. There it would meet the Duke of Parma, whose army of around 27,000 soldiers would cross to England in barges, escorted by the Armada, and land in Kent. Philip hoped English Catholics would rise to support them.'],
  ['The fleet', 'The Armada of about 130 ships carried soldiers as well as sailors. Its experienced commander, the Marquis of Santa Cruz, died in February 1588, and Philip appointed the Duke of Medina Sidonia, a nobleman with little experience at sea, who did not want the job.'],
  ['Weaknesses in the plan', 'Parma had no deep-water port where the large Armada ships could meet his barges, and Dutch ships patrolled the shallow coast. Messages between Medina Sidonia and Parma took days. The fleet sailed from Lisbon in May 1588, was battered by storms and had to stop at Corunna to repair, finally reaching the Channel in July.'],
], view.factors('Problems with the Spanish plan', [
  ['No port', 'Parma had no deep-water harbour to meet the Armada'],
  ['Communication', 'slow messages between Medina Sidonia and Parma'],
  ['Leadership', 'an inexperienced commander after Santa Cruz\'s death'],
  ['Supplies', 'leaking barrels and spoiled food after the Cadiz raid'],
]), [
  view.timeline('The Armada sets out', [
    ['Feb 1588', 'Santa Cruz dies; Medina Sidonia appointed'],
    ['May 1588', 'The Armada leaves Lisbon'],
    ['Jun 1588', 'Storms force it into Corunna for repairs'],
    ['Jul 1588', 'The Armada sails again and is sighted off Cornwall'],
  ]),
  view.people('People', [
    ['Philip II', 'Planned the invasion'],
    ['The Duke of Medina Sidonia', 'Commander of the Armada'],
    ['The Duke of Parma', 'Commander of the army in the Netherlands'],
    ['Pope Sixtus V', 'Promised money for the invasion'],
  ]),
  view.source('A source type: Philip II\'s instructions', 'A letter from Philip to Medina Sidonia setting out the plan to join Parma and protect the crossing.', 'Useful for what Philip intended; it shows the plan on paper, not the practical problems facing his commanders.'),
], [
  ['Why did the plan depend on Parma?', ['His army was to cross to England, escorted by the Armada', 'He was to lead the fleet up the Channel from Lisbon', 'He had promised to bring Scottish troops to the invasion'], 0, 'The fleet and army had to meet.'],
  ['Why was the lack of a deep-water port a problem?', ['The large Armada ships could not get close to Parma\'s barges', 'It meant Parma\'s army had nowhere to sleep before sailing', 'It stopped Spanish merchants from selling goods to England'], 0, 'Geography undermined the plan.'],
  ['Exam skill · Explain why. Which explains why Philip launched the Armada?', ['English support for the Dutch, privateering and Mary\'s execution convinced Philip only invasion would end the threat.', 'The Armada left Lisbon in May 1588 and was later badly damaged by storms out at sea.', 'The Duke of Medina Sidonia was appointed commander of the Armada after Santa Cruz had died.'], 0, 'Explanation links causes to the decision.'],
  ['Why was Medina Sidonia a weak choice?', ['He had little experience at sea and did not want the command', 'He was a Protestant who secretly supported Elizabeth', 'He had already been defeated by Drake in the raid at Cadiz'], 0, 'Leadership mattered.'],
], [
  Q('eld19.p1', 'Who commanded the Armada?', ['The Duke of Medina Sidonia', 'The Duke of Parma', 'The Marquis of Santa Cruz'], 0, 'Santa Cruz had died.', 'fleet'),
  Q('eld19.p2', 'Roughly how many ships were in the Armada?', ['About 130', 'About 30', 'About 1,300'], 0, 'It was a huge fleet.', 'fleet'),
  Q('eld19.p3', 'Where was Parma\'s army?', ['The Netherlands', 'Ireland, near Dublin', 'Scotland, near Edinburgh'], 0, 'Across the Channel.', 'plan'),
  Q('eld19.p4', 'When did the Armada leave Lisbon?', ['May 1588', 'April 1587', 'August 1588'], 0, 'Storms followed.', 'weaknesses'),
  Q('eld19.p5', 'Where were the troops meant to land?', ['Kent', 'Cornwall', 'Yorkshire'], 0, 'It is close to London.', 'plan'),
], [
  Q('eld19.c1', 'Where did the Armada stop for repairs?', ['Corunna', 'Calais, in France', 'Cadiz, in Spain'], 0, 'It stopped after storms.', 'weaknesses'),
  Q('eld19.c2', 'When did Santa Cruz die?', ['February 1588', 'April 1587, at Cadiz', 'August 1588, at Gravelines'], 0, 'Before the fleet sailed.', 'fleet'),
  Q('eld19.c3', 'What did Philip hope English Catholics would do?', ['Rise in support', 'Flee to Spain for safety', 'Join the English navy'], 0, 'In fact they did not rise.', 'plan'),
  Q('eld19.c4', 'Roughly how large was Parma\'s army?', ['About 27,000', 'About 2,700', 'About 270,000'], 0, 'To cross in barges.', 'plan'),
  Q('eld19.c5', 'Who patrolled the shallow Dutch coast?', ['Dutch ships', 'French ships', 'Scottish ships'], 0, 'They blocked Parma\'s barges.', 'weaknesses'),
  Q('eld19.c6', 'What did the Pope promise?', ['Money once troops landed', 'Ships from the papal fleet', 'Nothing at all to Philip'], 0, 'Conditional support.', 'reasons'),
  Q('eld19.c7', 'How did Parma\'s troops plan to cross?', ['In barges', 'By bridge', 'Through tunnels'], 0, 'Escorted by the fleet.', 'plan'),
  Q('eld19.c8', 'What slowed communication?', ['Messages took days', 'No common language', 'A ban on letters'], 0, 'Coordination failed.', 'weaknesses'),
], {exam: 'Describe two features of Spain\'s plans to invade England in 1588. (4 marks)'}),

lesson(T, 'elizabeth.armada-failure', 'Why the Armada failed', ['B4 2.4'], [
  ['In the Channel', 'The Armada was sighted off Cornwall on 19 July 1588 (English calendar dates are used here; Spain\'s calendar ran ten days ahead) and sailed in a tight crescent formation that the English fleet, under Lord Howard of Effingham with Drake, could not break. Fighting at long range did little damage to either side as the Armada moved towards Calais.'],
  ['Fireships at Calais', 'The Armada anchored off Calais on 27 July to wait for Parma, who was not ready. On the night of 28 July the English sent eight fireships, ships set alight and packed with explosives, into the anchored fleet. The Spanish ships cut their anchors and scattered in panic, breaking the formation.'],
  ['The Battle of Gravelines', 'On 29 July the English attacked the scattered Armada off Gravelines. Their faster, more manoeuvrable ships, many rebuilt to Hawkins\'s designs, and their better long-range guns caused heavy damage. Strong winds then drove the Armada north into the North Sea, away from Parma.'],
  ['The voyage home', 'The Armada sailed around Scotland and the west of Ireland to get home. Storms wrecked many ships, and sailors who reached the Irish coast were often killed. Only about half the ships returned to Spain, and thousands of men died. English losses were very small.'],
], view.factors('Why the Armada failed', [
  ['English strengths', 'faster ships, better guns and tactics such as the fireships'],
  ['Spanish mistakes', 'the plan to meet Parma; no deep-water port; poor supplies'],
  ['Leadership', 'Howard and Drake\'s experience against Medina Sidonia\'s inexperience'],
  ['Weather', 'winds and storms drove the Armada north and wrecked it'],
]), [
  view.timeline('July–September 1588 (English calendar)', [
    ['19 Jul', 'The Armada sighted off Cornwall'],
    ['20–27 Jul', 'Running fights up the Channel'],
    ['27 Jul', 'The Armada anchors off Calais'],
    ['28 Jul', 'Fireships attack at night'],
    ['29 Jul', 'The Battle of Gravelines'],
    ['9 Aug', 'Elizabeth speaks to her troops at Tilbury'],
    ['Sept 1588', 'Ships wrecked off Scotland and Ireland'],
  ]),
  view.people('People', [
    ['Lord Howard of Effingham', 'Commander of the English fleet'],
    ['Francis Drake', 'Vice-admiral of the English fleet'],
    ['John Hawkins', 'Rebuilt the navy\'s ships'],
    ['The Duke of Medina Sidonia', 'Spanish commander'],
  ]),
  view.source('A source type: a commemorative medal', 'A medal made after 1588 showing ships wrecked by a storm, celebrating England\'s deliverance by God.', 'Useful for how the victory was presented as God\'s will; it was made to celebrate, so it plays down English skill or luck.'),
], [
  ['Why were the fireships so effective?', ['The Spanish cut their anchors and scattered, breaking their formation', 'They sank more than half of the Armada in a single night at Calais', 'They set fire to Parma\'s barges waiting in the Dutch harbours'], 0, 'The formation had protected the fleet.'],
  ['What advantage did English ships have at Gravelines?', ['They were faster and more manoeuvrable, with better long-range guns', 'They carried many more soldiers ready to board the Spanish ships', 'They had been built in Spain and knew the Spanish signals'], 0, 'Ship design and gunnery mattered.'],
  ['Exam skill · How far? Which judgement is best supported?', ['English tactics broke the Armada, but Spanish planning failures and the weather turned defeat into disaster.', 'The Armada failed because the English sailors were brave and their leaders were very good.', 'The Armada failed only because of the bad weather in 1588 and because of nothing else at all.'], 0, 'A supported judgement weighs several factors.'],
  ['What happened on the voyage home?', ['Storms wrecked many ships off Scotland and Ireland', 'The Armada was escorted home safely by French ships', 'The Spanish captured several English ports on the way'], 0, 'Most losses came after the battle.'],
], [
  Q('eld20.p1', 'Who commanded the English fleet?', ['Lord Howard of Effingham', 'Francis Drake', 'The Earl of Leicester'], 0, 'With Drake as vice-admiral.', 'channel'),
  Q('eld20.p2', 'Where were the fireships sent in?', ['Calais', 'Plymouth', 'Lisbon'], 0, 'This was on the night of 28 July.', 'fireships'),
  Q('eld20.p3', 'Where was the main battle fought?', ['Gravelines', 'Cadiz harbour', 'Zutphen, inland'], 0, 'It was fought on 29 July 1588.', 'gravelines'),
  Q('eld20.p4', 'What formation did the Armada use?', ['A crescent', 'A single line', 'A square'], 0, 'It was hard to break.', 'channel'),
  Q('eld20.p5', 'Roughly how many Spanish ships returned?', ['About half', 'Almost all', 'None at all'], 0, 'Many were wrecked.', 'voyage-home'),
], [
  Q('eld20.c1', 'How many fireships were sent?', ['Eight', 'Eighty', 'Two'], 0, 'Packed with explosives.', 'fireships'),
  Q('eld20.c2', 'Who rebuilt many English ships?', ['John Hawkins', 'Francis Walsingham', 'William Cecil'], 0, 'He designed faster ships.', 'gravelines'),
  Q('eld20.c3', 'Which way did the wind drive the Armada?', ['North', 'South', 'West'], 0, 'Away from Parma.', 'gravelines'),
  Q('eld20.c4', 'Where did Elizabeth speak to her troops?', ['Tilbury', 'Dover', 'Windsor'], 0, 'She spoke on 9 August 1588.', 'channel'),
  Q('eld20.c5', 'Why was the Armada waiting off Calais?', ['For Parma, who was not ready', 'For more food and fresh water', 'For orders from the Pope'], 0, 'The plan failed.', 'fireships'),
  Q('eld20.c6', 'Were English losses heavy?', ['No, very small', 'Yes, very heavy', 'Half the fleet'], 0, 'Spain lost thousands.', 'voyage-home'),
  Q('eld20.c7', 'Which route did the Armada take home?', ['Around Scotland and Ireland', 'Back down the English Channel', 'Overland through France'], 0, 'Storms then struck.', 'voyage-home'),
  Q('eld20.c8', 'How was the victory presented?', ['As God\'s will', 'As luck alone', 'As a Spanish mistake only'], 0, 'Medals showed it so.', 'voyage-home'),
], {exam: '"The main reason for the defeat of the Spanish Armada was the weather." How far do you agree? (16 marks)'}),
];
