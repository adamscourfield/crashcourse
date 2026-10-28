// Pearson Edexcel GCSE (9–1) History 1HI0, Option B4: Early Elizabethan England, 1558–88.
// Depth lessons for key topic 3 (specification 3.1–3.4). Each follows its subsection's overview lesson.
// All text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.elizabeth.kt3';

export const elizabethDepth3 = [
lesson(T, 'elizabeth.schools', 'Education in the home, schools and universities', ['B4 3.1'], [
  ['Education in the home', 'Most children learned at home: girls were taught to run a household, and boys learned their father\'s trade or farming. Wealthy families employed tutors, and some noble and gentry girls learned languages, music and needlework. Elizabeth herself had been taught Latin, Greek, French and Italian.'],
  ['Petty schools and grammar schools', 'Petty schools, often run by the parish clergy or local women, taught young children to read and write and to learn the catechism. Grammar schools took boys from about seven to fourteen and taught mainly Latin, with some Greek, through long hours of grammar, translation and rhetoric. Many new grammar schools were founded in this period, often with gifts from merchants.'],
  ['Universities and the Inns of Court', 'Oxford and Cambridge educated the sons of nobles, gentry and wealthy merchants, and trained future clergy. Young gentlemen often went on to the Inns of Court in London to study law, which was useful for running estates and serving as Justices of the Peace.'],
  ['Why education grew', 'A Protestant Church wanted people who could read the Bible in English, and printing made books cheaper. Government and trade needed educated men, and a good education was a sign of status for the gentry. But most poor children, and most girls, received little formal schooling.'],
], view.factors('Who was educated, and how?', [
  ['Nobility and gentry', 'tutors at home; grammar school; university; the Inns of Court'],
  ['Merchants and yeomen', 'petty and grammar schools; some university'],
  ['The poor', 'little formal schooling; learning a trade'],
  ['Girls', 'mostly at home; wealthy girls might learn languages and music'],
]), [
  view.timeline('Education', [
    ['1550s–80s', 'Many new grammar schools founded'],
    ['1567', 'Rugby School founded'],
    ['1571', 'Jesus College, Oxford founded'],
    ['1572', 'Harrow School founded'],
    ['1584', 'Emmanuel College, Cambridge founded'],
  ]),
  view.people('People and places', [
    ['Petty school teachers', 'Often parish clergy or local women'],
    ['Grammar school masters', 'Taught Latin through long, strict lessons'],
    ['Oxford and Cambridge', 'The two English universities'],
    ['The Inns of Court', 'Where young gentlemen studied law'],
  ]),
  view.source('A source type: a school\'s founding statutes', 'The rules set out by a merchant when founding a grammar school, listing hours, subjects and punishments.', 'Useful for what a school was meant to be like; rules show intentions, not how lessons actually ran.'),
], [
  ['Why did grammar schools focus on Latin?', ['Latin was the language of learning, law, the Church and diplomacy', 'English had been banned from schools by the Act of Uniformity in 1559', 'Latin was the only language that could be printed in Elizabethan books'], 0, 'It opened careers.'],
  ['Why did the Protestant Church encourage education?', ['It wanted people who could read the Bible in English for themselves', 'It wanted all children to learn to say the Catholic Mass in Latin', 'It wanted to train every boy in England to become a Puritan preacher'], 0, 'Reading the Bible mattered to Protestants.'],
  ['Exam skill · Describe two features. Which is a valid feature of grammar schools, with supporting detail?', ['Boys of about seven to fourteen studied mainly Latin through translation and grammar.', 'Grammar schools were very important places that taught a lot of useful things.', 'Elizabeth I spoke Latin, Greek, French and Italian when she became queen.'], 0, 'A feature with a specific detail.'],
  ['Why did young gentlemen attend the Inns of Court?', ['To study law, which helped them run estates and serve as JPs', 'To train as soldiers for the army in the Netherlands', 'To learn to sail before joining Drake and the privateers'], 0, 'Law was a useful skill for landowners.'],
], [
  Q('eld21.p1', 'What did petty schools teach?', ['Reading, writing and the catechism', 'Latin, Greek and rhetoric for boys', 'Law and estate management for gentlemen'], 0, 'For young children.', 'petty'),
  Q('eld21.p2', 'What was the main subject in grammar schools?', ['Latin', 'Science', 'French'], 0, 'With some Greek.', 'grammar'),
  Q('eld21.p3', 'Which were the two universities?', ['Oxford and Cambridge', 'London and Durham', 'York, Bristol and Norwich'], 0, 'Both were very old.', 'universities'),
  Q('eld21.p4', 'Where did young gentlemen study law?', ['The Inns of Court', 'Petty schools in villages', 'The grammar school at Rugby'], 0, 'They were in London.', 'universities'),
  Q('eld21.p5', 'How were most girls educated?', ['At home', 'At grammar school', 'At university'], 0, 'Running a household.', 'home'),
], [
  Q('eld21.c1', 'Who often ran petty schools?', ['Parish clergy or local women', 'University professors from Oxford', 'Lawyers from the Inns of Court'], 0, 'They taught in the parish.', 'petty'),
  Q('eld21.c2', 'Roughly what ages attended grammar school?', ['About seven to fourteen', 'About one to five', 'About twenty to thirty'], 0, 'Only boys attended.', 'grammar'),
  Q('eld21.c3', 'Which school was founded in 1572?', ['Harrow', 'Eton', 'Winchester'], 0, 'One of many new schools.', 'growth'),
  Q('eld21.c4', 'Who often paid to found new schools?', ['Merchants', 'Spanish nobles', 'The Pope'], 0, 'As charitable gifts.', 'growth'),
  Q('eld21.c5', 'Why did printing help education?', ['Books became cheaper', 'Books were banned by law', 'Schools were all closed'], 0, 'More could read.', 'growth'),
  Q('eld21.c6', 'Who received little formal schooling?', ['Most poor children', 'The sons of nobles', 'Boys training as clergy'], 0, 'They learned a trade.', 'growth'),
  Q('eld21.c7', 'Which languages did Elizabeth learn?', ['Latin, Greek, French, Italian', 'Only English and Welsh', 'Spanish and German only'], 0, 'She was well educated.', 'home'),
  Q('eld21.c8', 'Whom did the universities train?', ['Future clergy and gentlemen', 'Soldiers and sailors for the navy', 'Farm labourers and their sons'], 0, 'And merchants\' sons.', 'universities'),
], {exam: 'Describe two features of education in Elizabethan England. (4 marks)'}),

lesson(T, 'elizabeth.leisure', 'Sport, pastimes and the theatre', ['B4 3.1'], [
  ['Sports and pastimes', 'The nobility hunted deer, practised hawking and fencing, and played real tennis. Ordinary people played football, which was violent and had few rules, and enjoyed wrestling, archery, cards and dice. Blood sports such as bear-baiting, bull-baiting and cock-fighting drew large crowds of all classes.'],
  ['Festivals and music', 'Holy days, fairs and seasonal festivals such as May Day and harvest gave breaks from work, with dancing, music and drinking. Music was popular at every level, from Court musicians to ballad singers in the streets.'],
  ['The rise of the theatre', 'At first, companies of actors travelled the country performing in inn yards. A 1572 Act treated actors without a noble patron as vagabonds, so companies took the names of nobles, such as Leicester\'s Men. In 1576 James Burbage built The Theatre in Shoreditch, the first purpose-built playhouse in London, followed by The Curtain (1577) and The Rose (1587).'],
  ['Opposition to the theatre', 'Puritans attacked plays as immoral and sinful, and the authorities of the City of London disliked the crowds, which they feared spread plague and disorder. That is why the playhouses were built just outside the City\'s boundaries. But the queen enjoyed plays, and in 1583 the Queen\'s Men company was formed.'],
], view.factors('Leisure and class', [
  ['Nobility', 'hunting, hawking, fencing, real tennis, Court entertainments'],
  ['All classes', 'bear-baiting, cock-fighting, music, the theatre'],
  ['Ordinary people', 'football, wrestling, cards, dice, fairs and festivals'],
  ['Controls', 'the 1572 Act; City of London objections; Puritan criticism'],
]), [
  view.timeline('The theatre', [
    ['1572', 'Act requires acting companies to have a noble patron'],
    ['1576', 'The Theatre built in Shoreditch'],
    ['1577', 'The Curtain opens'],
    ['1583', 'The Queen\'s Men formed'],
    ['1587', 'The Rose opens on Bankside'],
  ]),
  view.people('People and groups', [
    ['James Burbage', 'Built The Theatre in 1576'],
    ['Leicester\'s Men', 'Acting company named after its patron'],
    ['The Queen\'s Men', 'Company formed in 1583'],
    ['Puritan writers', 'Attacked plays as sinful'],
  ]),
  view.source('A source type: a Puritan pamphlet against plays', 'A pamphlet arguing that playhouses drew people away from church and encouraged idleness and sin.', 'Useful for Puritan attitudes; it was written to attack the theatre, so it shows one hostile view.'),
], [
  ['Why did actors need a noble patron after 1572?', ['Without one they could be treated as vagabonds and punished', 'Only nobles were allowed to watch plays in Elizabethan England', 'The patron wrote all the plays that the companies performed'], 0, 'Patronage gave legal protection.'],
  ['Why were playhouses built outside the City of London?', ['The City authorities disliked the crowds, fearing plague and disorder', 'The queen had ordered that no plays be performed anywhere in England', 'Land outside the City was the only place large enough for stages'], 0, 'They escaped the City\'s control.'],
  ['Exam skill · Explain why. Which explains why the theatre grew in popularity?', ['Purpose-built playhouses and noble patrons gave companies stable homes, and plays appealed to all classes.', 'The Theatre was built in Shoreditch, outside London, in 1576 by a man called James Burbage.', 'Puritans attacked plays and said that they drew people away from going to church on Sundays.'], 0, 'Explanation links causes to the growth.'],
  ['Which pastime was enjoyed mainly by the nobility?', ['Hawking', 'Football', 'Cock-fighting'], 0, 'It needed trained birds and land.'],
], [
  Q('eld22.p1', 'Who built The Theatre in 1576?', ['James Burbage', 'William Cecil', 'Francis Drake'], 0, 'It was in Shoreditch.', 'theatre'),
  Q('eld22.p2', 'Which blood sport drew large crowds?', ['Bear-baiting', 'Real tennis', 'Fencing'], 0, 'All classes watched.', 'sports'),
  Q('eld22.p3', 'What did the 1572 Act require actors to have?', ['A noble patron', 'A university degree', 'A licence from the Pope'], 0, 'Or be vagabonds.', 'theatre'),
  Q('eld22.p4', 'Who attacked plays as sinful?', ['Puritans', 'The queen', 'Merchants'], 0, 'On moral grounds.', 'opposition'),
  Q('eld22.p5', 'When was the Queen\'s Men formed?', ['1583', '1558', '1600'], 0, 'The queen enjoyed plays.', 'theatre'),
], [
  Q('eld22.c1', 'Where did travelling actors often perform?', ['Inn yards', 'Cathedrals', 'Royal palaces only'], 0, 'Before playhouses.', 'theatre'),
  Q('eld22.c2', 'What did the City fear crowds would spread?', ['Plague and disorder', 'Literacy and learning', 'Puritan ideas'], 0, 'So it opposed playhouses.', 'opposition'),
  Q('eld22.c3', 'Which was a sport of ordinary people?', ['Football', 'Hawking', 'Hunting deer'], 0, 'Violent, with few rules.', 'sports'),
  Q('eld22.c4', 'Which playhouse opened in 1587?', ['The Rose', 'The Globe', 'The Swan'], 0, 'It stood on Bankside.', 'theatre'),
  Q('eld22.c5', 'What did festivals such as May Day offer?', ['Breaks from work', 'Extra taxes on wages', 'Sessions of church courts'], 0, 'With dancing and music.', 'pastimes'),
  Q('eld22.c6', 'What was Leicester\'s Men?', ['An acting company', 'A regiment', 'A trading company'], 0, 'Named after its patron.', 'theatre'),
  Q('eld22.c7', 'Where were playhouses built?', ['Outside the City\'s boundaries', 'Inside St Paul\'s Cathedral', 'In the grounds of Westminster Abbey'], 0, 'Beyond its control.', 'opposition'),
  Q('eld22.c8', 'Which game was played by nobles indoors?', ['Real tennis', 'Football', 'Wrestling bouts'], 0, 'In special courts.', 'sports'),
], {exam: 'Explain why the theatre became popular in Elizabethan England. (12 marks)'}),

lesson(T, 'elizabeth.poverty-causes', 'Why poverty increased', ['B4 3.2'], [
  ['Population growth and prices', 'England\'s population grew from about three million to about four million during Elizabeth\'s reign. More people competed for food, land and work, so prices rose faster than wages. Many labourers became worse off even when they had work.'],
  ['Changes in farming', 'Some landowners enclosed open fields and common land to graze sheep, which made more profit than crops and needed fewer workers. Others raised rents sharply, known as rack-renting. Families who lost land or work were pushed into poverty and often onto the roads.'],
  ['Bad harvests and trade', 'Poor harvests, as in 1586–87, made bread expensive and caused hunger. The cloth trade suffered when markets in the Netherlands were disrupted, throwing weavers and spinners out of work.'],
  ['Loss of old support', 'The closure of the monasteries in the 1530s had removed a major source of charity for the poor. Soldiers returning from wars, often without pay, added to the numbers of the unemployed. Some of the poor moved to towns, especially London, looking for work.'],
], view.factors('Causes of poverty', [
  ['Population', 'growth from about three to about four million'],
  ['Prices and wages', 'prices rose faster than wages'],
  ['Farming', 'enclosure for sheep; rack-renting'],
  ['Shocks', 'bad harvests; the cloth trade\'s problems; returning soldiers; the loss of monastic charity'],
]), [
  view.timeline('Poverty and its causes', [
    ['1530s', 'Monasteries closed; their charity lost'],
    ['1558', 'Population about three million'],
    ['1560s–70s', 'Prices continue to rise faster than wages'],
    ['1586–87', 'Bad harvests and dearth'],
    ['1603', 'Population about four million'],
  ]),
  view.people('Groups', [
    ['Labourers', 'Their wages bought less as prices rose'],
    ['Tenants', 'Faced enclosure and rising rents'],
    ['Cloth workers', 'Lost work when trade was disrupted'],
    ['Returning soldiers', 'Often unpaid and unemployed'],
  ]),
  view.source('A source type: a sermon on enclosure', 'A sermon by a clergyman condemning landowners who turned fields into sheep pasture and drove tenants away.', 'Useful for contemporary concern about enclosure; preachers often exaggerated to make a moral point.'),
], [
  ['Why did population growth make the poor worse off?', ['More people competed for food, land and work, so prices rose faster than wages', 'The government taxed every new baby, so large families paid far more tax', 'Population growth led to the closing of all grammar schools for the poor'], 0, 'Supply and demand worked against labourers.'],
  ['How did enclosure increase poverty?', ['Sheep farming needed fewer workers and people lost access to land', 'Enclosure created so many new jobs that wages fell to almost nothing', 'Enclosure meant that every farmer had to grow wheat instead of barley'], 0, 'Fewer jobs and less land.'],
  ['Exam skill · Explain why. Which explains why poverty increased?', ['Prices rose faster than wages as the population grew, so many working families could no longer afford food.', 'The population of England grew from about three million to about four million people in her reign.', 'There was a bad harvest in 1586–87, and there were several other bad harvests during Elizabeth\'s reign.'], 0, 'Explanation links cause to effect.'],
  ['Why did the closure of the monasteries matter for the poor?', ['It removed a major source of charity', 'It created thousands of new jobs for the poor', 'It gave all monastic land to poor families'], 0, 'Help had to come from elsewhere.'],
], [
  Q('eld23.p1', 'Roughly what was England\'s population in 1558?', ['About three million', 'About thirty million', 'About three hundred thousand'], 0, 'It grew to about four million.', 'population'),
  Q('eld23.p2', 'What was enclosure?', ['Fencing land, often for sheep', 'Locking vagabonds in prisons', 'Closing the old monasteries'], 0, 'Fewer workers needed.', 'farming'),
  Q('eld23.p3', 'What was rack-renting?', ['Raising rents sharply', 'Renting out racks for torture', 'Lending money to the Crown'], 0, 'Tenants suffered.', 'farming'),
  Q('eld23.p4', 'When was there a bad harvest?', ['1586–87', '1558–59', '1570–71'], 0, 'Bread became expensive.', 'shocks'),
  Q('eld23.p5', 'What happened to prices compared with wages?', ['Prices rose faster', 'Wages rose faster', 'Both fell'], 0, 'Real wages fell.', 'population'),
], [
  Q('eld23.c1', 'Why did landowners prefer sheep?', ['They made more profit', 'Sheep were cheaper to buy', 'Wool was banned'], 0, 'Fewer workers needed.', 'farming'),
  Q('eld23.c2', 'Which trade suffered from disruption?', ['The cloth trade', 'The spice trade', 'The coal trade'], 0, 'Markets in the Netherlands.', 'shocks'),
  Q('eld23.c3', 'What did returning soldiers add to?', ['The unemployed', 'The nobility at Court', 'The parish clergy'], 0, 'They were often unpaid.', 'shocks'),
  Q('eld23.c4', 'Where did many poor people move?', ['Towns, especially London', 'Abroad to Spain and Portugal', 'Into the old monasteries'], 0, 'Looking for work.', 'shocks'),
  Q('eld23.c5', 'What did the monasteries provide before the 1530s?', ['Charity for the poor', 'Grammar schools only', 'Army training'], 0, 'Lost when they closed.', 'charity'),
  Q('eld23.c6', 'Roughly what was the population by 1603?', ['About four million', 'About forty million', 'About one million'], 0, 'Growth continued.', 'population'),
  Q('eld23.c7', 'Who suffered most from rising prices?', ['Labourers', 'Nobles', 'Bishops'], 0, 'Their wages bought less.', 'population'),
  Q('eld23.c8', 'What did bad harvests cause?', ['Expensive bread and hunger', 'Cheaper food for everyone', 'Many more jobs on farms'], 0, 'This shortage was called dearth.', 'shocks'),
], {exam: 'Explain why poverty increased in Elizabethan England. (12 marks)'}),

lesson(T, 'elizabeth.poor-laws', 'Changing attitudes and the Poor Laws', ['B4 3.2'], [
  ['Deserving and undeserving', 'Elizabethans divided the poor into two groups. The "deserving" or impotent poor, such as the old, sick, disabled and orphans, could not work and deserved help. The "undeserving", able-bodied people who did not work, especially vagabonds wandering the roads, were feared as idle, criminal and a threat to order.'],
  ['Laws against vagabonds', 'Under the Vagabonds Act of 1572, vagrants over fourteen could be whipped and burned through the ear, and repeat offenders could be executed. The same Act made the poor rate, a local tax to support the deserving poor, compulsory, with overseers of the poor appointed in each parish.'],
  ['Work for the poor', 'The Poor Relief Act of 1576 ordered JPs to provide materials, such as wool and flax, so that able-bodied poor people could work, and to set up houses of correction where those who refused to work could be sent. This showed a growing belief that some poor people wanted to work but could not find it.'],
  ['Town schemes', 'Some towns acted before Parliament. Norwich carried out a census of its poor in 1570, organised work, and paid for relief with a compulsory rate. Ipswich, York and London (with its Bridewell house of correction) also ran schemes. These experiments influenced national laws.'],
], view.factors('How attitudes changed', [
  ['Fear', 'vagabonds seen as a threat; harsh punishments in 1572'],
  ['Responsibility', 'the compulsory poor rate made parishes support the deserving poor'],
  ['Work', 'the 1576 Act recognised that some people could not find work'],
  ['Local example', 'Norwich and other towns led the way'],
]), [
  view.timeline('Poor laws', [
    ['1563', 'Act allows JPs to pressure people to contribute to poor relief'],
    ['1570', 'Norwich census of the poor'],
    ['1572', 'Vagabonds Act: harsh punishment and a compulsory poor rate'],
    ['1576', 'Poor Relief Act: work materials and houses of correction'],
  ]),
  view.people('People and roles', [
    ['Overseers of the poor', 'Collected the poor rate and gave relief in each parish'],
    ['Justices of the Peace', 'Enforced the poor laws'],
    ['Vagabonds', 'Able-bodied wanderers, punished harshly'],
    ['The impotent poor', 'The old, sick and disabled, who received help'],
  ]),
  view.source('A source type: a pamphlet about vagabonds', 'A pamphlet describing the tricks of beggars who pretended to be sick or injured to get money.', 'Useful for fears about vagabonds; it was written to entertain and alarm, so it exaggerates.'),
], [
  ['Who were the "deserving" poor?', ['People who could not work, such as the old, sick, disabled and orphans', 'Able-bodied people who wandered the roads looking for easy money', 'Wealthy merchants who had lost money when trade was disrupted'], 0, 'They were thought to deserve help.'],
  ['What did the 1576 Act recognise?', ['Some able-bodied poor wanted work but could not find it', 'All poor people were lazy and should be executed', 'The poor should be supported only by the monasteries'], 0, 'A shift in attitude.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Attitudes became more sympathetic to the deserving poor and those without work, though vagabonds were still punished harshly.', 'Attitudes to the poor changed a lot because there were lots of new laws passed by Parliament.', 'Attitudes to the poor did not change at all in any way between 1558 and 1588.'], 0, 'A supported judgement weighs change and continuity.'],
  ['Why did Norwich matter?', ['Its census and relief scheme influenced national laws', 'It was the only town that refused to help the poor', 'It was where the Vagabonds Act was first written by the queen'], 0, 'Local experiments led the way.'],
], [
  Q('eld24.p1', 'When was the Vagabonds Act?', ['1572', '1576', '1601'], 0, 'With harsh punishments.', 'vagabonds'),
  Q('eld24.p2', 'What was the poor rate?', ['A local tax for poor relief', 'A wage paid to vagabonds', 'A fine charged for begging'], 0, 'Made compulsory in 1572.', 'rate'),
  Q('eld24.p3', 'What were houses of correction for?', ['Those who refused to work', 'The sick and the elderly', 'Orphans and nobody else'], 0, 'They were set up in 1576.', 'work'),
  Q('eld24.p4', 'Which town held a census of its poor in 1570?', ['Norwich', 'Bristol', 'Durham'], 0, 'It organised work.', 'towns'),
  Q('eld24.p5', 'Who collected the poor rate?', ['Overseers of the poor', 'Bishops and archdeacons', 'Lords Lieutenant'], 0, 'There were overseers in each parish.', 'rate'),
], [
  Q('eld24.c1', 'How could vagrants be punished in 1572?', ['Whipped and burned through the ear', 'Fined twelve pence for each offence', 'Sent to study at a university'], 0, 'Harsh treatment.', 'vagabonds'),
  Q('eld24.c2', 'Who were the impotent poor?', ['Those unable to work', 'Idle, wandering vagabonds', 'Rich merchants who lost money'], 0, 'The old, sick, disabled.', 'attitudes'),
  Q('eld24.c3', 'What did the 1576 Act provide?', ['Materials for the poor to work', 'Free land for every poor family', 'Ships for poor sailors'], 0, 'Such as wool and flax.', 'work'),
  Q('eld24.c4', 'Which London institution was a house of correction?', ['Bridewell', 'The Tower', 'The Globe'], 0, 'An early example.', 'towns'),
  Q('eld24.c5', 'Why were vagabonds feared?', ['Seen as idle and criminal', 'They were Spanish spies', 'They were Puritans'], 0, 'A threat to order.', 'attitudes'),
  Q('eld24.c6', 'Who enforced the poor laws?', ['Justices of the Peace', 'The Pope and bishops', 'Privateers at sea'], 0, 'JPs enforced them locally.', 'rate'),
  Q('eld24.c7', 'Did towns act before Parliament?', ['Yes, some did', 'No, never at all', 'Only London did so'], 0, 'Norwich, Ipswich, York.', 'towns'),
  Q('eld24.c8', 'What could happen to repeat vagrants?', ['Execution', 'A reward', 'Nothing'], 0, 'Under the 1572 Act.', 'vagabonds'),
], {exam: 'Describe two features of the government\'s response to poverty in the years 1572–76. (4 marks)'}),

lesson(T, 'elizabeth.exploration-factors', 'Factors prompting exploration', ['B4 3.3'], [
  ['New technology', 'Better navigation instruments, such as improved compasses and the astrolabe, helped sailors work out their position. Mercator\'s map of 1569 made it easier to plot a course, and printed books spread navigation skills. Larger, sturdier ships could carry more supplies on long voyages.'],
  ['Trade', 'When the cloth trade through Antwerp was disrupted, English merchants needed new markets. They looked for routes to the riches of Asia, including a "North-West Passage" around North America; Martin Frobisher searched for it in 1576–78. Trading companies, such as the Muscovy Company, shared the costs and risks among investors.'],
  ['Wealth and rivalry', 'Spain\'s silver from the Americas showed the wealth to be gained. Privateering against Spanish ships could be hugely profitable, as Drake\'s voyages showed. Rivalry with Catholic Spain, and a wish to spread Protestantism, encouraged England to compete overseas.'],
  ['Promoters and patrons', 'Writers such as Richard Hakluyt published accounts of voyages and argued that England should found colonies. The queen and her courtiers invested in voyages, hoping for profit, and some, such as Sir Humphrey Gilbert and Sir Walter Raleigh, planned colonies of their own.'],
], view.factors('Why exploration grew', [
  ['Technology', 'compasses, astrolabes, Mercator\'s map, better ships'],
  ['Trade', 'new markets after Antwerp; the search for routes to Asia'],
  ['Wealth', 'Spanish silver; profits from privateering'],
  ['Rivalry and promotion', 'competition with Spain; Hakluyt; investors at Court'],
]), [
  view.timeline('Exploration', [
    ['1555', 'The Muscovy Company founded'],
    ['1569', 'Mercator\'s world map'],
    ['1576–78', 'Frobisher searches for the North-West Passage'],
    ['1577–80', 'Drake sails around the world'],
    ['1583', 'Gilbert claims Newfoundland'],
    ['1584', 'Raleigh granted the right to found a colony'],
  ]),
  view.people('People', [
    ['Martin Frobisher', 'Searched for the North-West Passage'],
    ['Richard Hakluyt', 'Writer who promoted exploration and colonies'],
    ['Sir Humphrey Gilbert', 'Claimed Newfoundland in 1583'],
    ['Investors at Court', 'Funded voyages for profit'],
  ]),
  view.source('A source type: a book of voyages', 'A printed collection of sailors\' accounts of their voyages, gathered by a writer promoting English exploration.', 'Useful for what voyages achieved and how they were promoted; the editor chose accounts that made exploration look worthwhile.'),
], [
  ['Why did English merchants look for new markets?', ['The cloth trade through Antwerp had been disrupted', 'Parliament had banned all trade with Europe in 1558', 'The queen wanted to stop the export of English wool'], 0, 'Trade needed new outlets.'],
  ['How did trading companies help exploration?', ['They shared the costs and risks among many investors', 'They were run by the Royal Navy and paid by taxes', 'They gave every sailor a share of the land they found'], 0, 'Risk was spread.'],
  ['Exam skill · Explain why. Which explains why exploration increased?', ['New instruments and maps made long voyages safer, while the hope of trade and wealth gave strong motives.', 'Martin Frobisher searched for the North-West Passage around North America between 1576 and 1578.', 'Richard Hakluyt was a writer who published accounts of many English voyages and explorers.'], 0, 'Explanation combines factors and their effect.'],
  ['What was the North-West Passage?', ['A hoped-for sea route around North America to Asia', 'A road across Scotland to the coast of the North Sea', 'A channel dug across the sea between England and France'], 0, 'It was never found then.'],
], [
  Q('eld25.p1', 'Whose map of 1569 helped navigation?', ['Mercator\'s', 'Hakluyt\'s', 'Raleigh\'s'], 0, 'A new projection.', 'technology'),
  Q('eld25.p2', 'Who searched for the North-West Passage?', ['Martin Frobisher', 'Francis Drake', 'John Hawkins'], 0, 'He searched in 1576–78.', 'trade'),
  Q('eld25.p3', 'Who wrote to promote exploration?', ['Richard Hakluyt', 'William Cecil', 'John Knox, the preacher'], 0, 'He collected voyages.', 'promoters'),
  Q('eld25.p4', 'Which instrument helped find position?', ['The astrolabe', 'The telescope', 'The barometer'], 0, 'With the compass.', 'technology'),
  Q('eld25.p5', 'Which company was founded in 1555?', ['The Muscovy Company', 'The East India Company', 'The Virginia Company'], 0, 'For trade with Russia.', 'trade'),
], [
  Q('eld25.c1', 'Who claimed Newfoundland in 1583?', ['Sir Humphrey Gilbert', 'Sir Walter Raleigh', 'Sir Francis Drake'], 0, 'He claimed it for England.', 'promoters'),
  Q('eld25.c2', 'What did Spanish silver show?', ['The wealth to be gained', 'That trade was useless', 'Spain was poor'], 0, 'A powerful motive.', 'wealth'),
  Q('eld25.c3', 'Which rivalry encouraged exploration?', ['With Catholic Spain', 'With Scotland in the north', 'With the Welsh Marches'], 0, 'Religion and wealth.', 'wealth'),
  Q('eld25.c4', 'Who invested in voyages?', ['The queen and courtiers', 'Only the Pope in Rome', 'Nobody; the Crown paid'], 0, 'Hoping for profit.', 'promoters'),
  Q('eld25.c5', 'Where were English merchants hoping to trade?', ['Asia', 'Scotland', 'Ireland'], 0, 'For spices and silk.', 'trade'),
  Q('eld25.c6', 'How did printing help exploration?', ['It spread navigation skills', 'It led to maps being banned', 'It was used to build ships'], 0, 'Books on navigation.', 'technology'),
  Q('eld25.c7', 'Who received the right to found a colony in 1584?', ['Raleigh', 'Frobisher', 'Hakluyt'], 0, 'Virginia followed.', 'promoters'),
  Q('eld25.c8', 'What made ships better for long voyages?', ['Larger, sturdier designs', 'Smaller sails and masts', 'Crews of rowers below deck'], 0, 'More supplies carried.', 'technology'),
], {exam: 'Explain why there was an increase in exploration in the years 1558–88. (12 marks)'}),

lesson(T, 'elizabeth.drake', 'Drake\'s circumnavigation, 1577–80', ['B4 3.3'], [
  ['The voyage begins', 'In December 1577 Francis Drake left Plymouth with five ships, officially on a trading voyage but with the queen\'s secret backing to raid Spanish possessions. The crossing was hard: storms scattered the fleet, one ship turned back, and Drake executed one of his officers, Thomas Doughty, for alleged mutiny.'],
  ['Through to the Pacific', 'Drake sailed through the dangerous Strait of Magellan at the tip of South America in 1578. Only his own ship, renamed the Golden Hind, continued into the Pacific. He raided Spanish ports along the coasts of Chile and Peru, where Spain did not expect English ships.'],
  ['Treasure and claims', 'In 1579 Drake captured a Spanish treasure ship carrying a huge cargo of silver and gold. He landed on the coast of California, which he claimed for England as Nova Albion, then crossed the Pacific and returned around Africa.'],
  ['Return and significance', 'Drake arrived back at Plymouth in September 1580, the first Englishman to sail around the world. The treasure was worth more than the Crown\'s yearly income, and investors, including the queen, made enormous profits. Elizabeth knighted him in 1581. The voyage boosted English pride and confidence at sea, encouraged further exploration, and deepened Spain\'s anger.'],
], view.factors('Why the voyage mattered', [
  ['Wealth', 'treasure worth more than the Crown\'s annual income'],
  ['Pride', 'the first English circumnavigation'],
  ['Exploration', 'knowledge of routes and confidence for later voyages'],
  ['Relations with Spain', 'raids in the Pacific and the knighthood angered Philip II'],
]), [
  view.timeline('The voyage', [
    ['Dec 1577', 'Leaves Plymouth with five ships'],
    ['1578', 'Doughty executed; through the Strait of Magellan'],
    ['1579', 'Treasure ship captured; Nova Albion claimed'],
    ['1579–80', 'Across the Pacific and around Africa'],
    ['Sept 1580', 'Returns to Plymouth'],
    ['Apr 1581', 'Knighted on board the Golden Hind'],
  ]),
  view.people('People', [
    ['Francis Drake', 'Commander of the voyage'],
    ['Thomas Doughty', 'Officer executed for alleged mutiny'],
    ['Elizabeth I', 'Secret investor who knighted Drake'],
    ['Philip II', 'Demanded the treasure back'],
  ]),
  view.source('A source type: a map of Drake\'s route', 'A map drawn after the voyage showing Drake\'s route around the world and places he claimed.', 'Useful for the route and English claims; it was made to celebrate the voyage, so it may present it in the best light.'),
], [
  ['Why did Drake raid Spanish ports in the Pacific?', ['Spain did not expect English ships there, so the ports were poorly defended', 'Philip II had invited English traders to visit his ports in Peru and Chile', 'The queen had ordered him to conquer Chile and make it an English colony'], 0, 'Surprise made the raids easy.'],
  ['Why was the voyage so profitable?', ['Drake captured Spanish treasure worth more than the Crown\'s yearly income', 'He sold English wool at very high prices in the markets of China', 'The Pope paid him a reward for exploring the Pacific Ocean'], 0, 'Investors made huge profits.'],
  ['Exam skill · Explain the significance. Which best explains why the voyage was significant?', ['It brought great wealth, boosted English confidence at sea and worsened relations with Spain.', 'Drake left Plymouth in December 1577 with five ships and finally returned in 1580.', 'Drake sailed through the dangerous Strait of Magellan at the tip of South America.'], 0, 'Significance explains effects.'],
  ['What was Nova Albion?', ['Land in California that Drake claimed for England', 'The new name for Drake\'s ship after the Strait', 'A Spanish treasure ship captured in 1579'], 0, 'An early English claim.'],
], [
  Q('eld26.p1', 'When did Drake return from his voyage?', ['September 1580', 'December 1577', 'July 1588'], 0, 'He returned to Plymouth.', 'return'),
  Q('eld26.p2', 'What was Drake\'s ship renamed?', ['The Golden Hind', 'The Revenge', 'The Ark Royal'], 0, 'Originally the Pelican.', 'pacific'),
  Q('eld26.p3', 'Who was executed during the voyage?', ['Thomas Doughty', 'John Hawkins', 'Martin Frobisher'], 0, 'For alleged mutiny.', 'voyage'),
  Q('eld26.p4', 'What did Drake claim as Nova Albion?', ['Part of California', 'Newfoundland', 'Virginia'], 0, 'He claimed it in 1579.', 'treasure'),
  Q('eld26.p5', 'When was Drake knighted?', ['1581', '1577', '1588'], 0, 'On board his ship.', 'return'),
], [
  Q('eld26.c1', 'How many ships set out?', ['Five', 'One', 'Fifty'], 0, 'Only one completed the voyage.', 'voyage'),
  Q('eld26.c2', 'Which strait did Drake pass through?', ['Magellan', 'Gibraltar', 'Dover'], 0, 'At the tip of South America.', 'pacific'),
  Q('eld26.c3', 'Which coasts did Drake raid?', ['Chile and Peru', 'France and Spain', 'Scotland and Ireland'], 0, 'They were on the Pacific.', 'pacific'),
  Q('eld26.c4', 'Who secretly backed the voyage?', ['The queen', 'Philip II', 'The Pope'], 0, 'She invested in it.', 'voyage'),
  Q('eld26.c5', 'How did Spain react?', ['With anger', 'With thanks', 'It did not notice'], 0, 'Relations worsened.', 'return'),
  Q('eld26.c6', 'Which ocean did Drake cross?', ['The Pacific', 'The Arctic', 'The Southern only'], 0, 'Then around Africa.', 'treasure'),
  Q('eld26.c7', 'What was Drake\'s achievement?', ['First English circumnavigation', 'Finding the North-West Passage', 'Conquering Mexico for England'], 0, 'It boosted national pride.', 'return'),
  Q('eld26.c8', 'Where did the voyage begin?', ['Plymouth', 'London', 'Bristol'], 0, 'In December 1577.', 'voyage'),
], {exam: 'Explain the significance of Drake\'s circumnavigation of 1577–80. (12 marks)'}),

lesson(T, 'elizabeth.roanoke', 'Raleigh and the Roanoke colonies', ['B4 3.4'], [
  ['Raleigh\'s plan', 'In 1584 Elizabeth granted Sir Walter Raleigh the right to found a colony in North America. He sent a scouting voyage that year, which returned with good reports, and the land was named Virginia in honour of the "Virgin Queen". Raleigh hoped a colony would bring wealth, a base for attacking Spanish ships and land for English settlers.'],
  ['The first colony, 1585–86', 'In 1585 about a hundred men, led by Ralph Lane, settled on Roanoke Island off the coast of what is now North Carolina. They included the scientist Thomas Harriot and the artist John White, who recorded the people, plants and animals. The colonists were mostly soldiers, and they struggled to feed themselves.'],
  ['Abandoning the first colony', 'Relations with the local Native Americans broke down, and Lane attacked and killed a local leader, Wingina, in 1586. When Drake arrived with a fleet in June 1586, the colonists, short of food and frightened, sailed home with him. A supply ship arrived soon after and found the island empty.'],
  ['The second colony, 1587', 'In 1587 John White led a second group of about 115 settlers, including women and children, intending to settle further north but left on Roanoke. White\'s granddaughter, Virginia Dare, was born there, the first English child born in America. White returned to England for supplies, but the Armada crisis kept ships at home, and when he came back in 1590 the colonists had vanished. It became known as the "lost colony".'],
], view.factors('Aims of the Virginia colony', [
  ['Wealth', 'hopes of gold, silver and valuable crops'],
  ['Rivalry', 'a base for attacking Spanish treasure fleets'],
  ['Settlement', 'land for English settlers'],
  ['Prestige', 'English power and Protestantism in the New World'],
]), [
  view.timeline('Roanoke', [
    ['1584', 'Raleigh\'s patent and scouting voyage'],
    ['1585', 'First colony under Ralph Lane'],
    ['1586', 'Wingina killed; colonists leave with Drake'],
    ['1587', 'Second colony under John White; Virginia Dare born'],
    ['1588', 'The Armada keeps ships in England'],
    ['1590', 'White returns to find the colony gone'],
  ]),
  view.people('People', [
    ['Sir Walter Raleigh', 'Organised the colonies but never went himself'],
    ['Ralph Lane', 'Governor of the first colony'],
    ['John White', 'Artist and governor of the second colony'],
    ['Wingina', 'Local Native American leader killed in 1586'],
  ]),
  view.source('A source type: John White\'s watercolours', 'Paintings made by White in 1585 showing Native American villages, people and wildlife.', 'Very useful for what the colonists saw; White chose and arranged his scenes, and they were later published to encourage settlement.'),
], [
  ['Why did Raleigh want a colony in Virginia?', ['For wealth, a base against Spanish ships and land for English settlers', 'To find a new place to send all the vagabonds and beggars from London', 'To build a new university for Native Americans in North America'], 0, 'Several aims combined.'],
  ['Why did the first colonists leave in 1586?', ['They were short of food and frightened after relations broke down', 'Raleigh ordered them home to fight against the Spanish Armada', 'They had found gold and wanted to bring it back to England'], 0, 'Hunger and conflict.'],
  ['Exam skill · Describe two features. Which is a valid feature of the 1587 colony, with supporting detail?', ['It included women and children, and Virginia Dare was born there.', 'It was a very brave attempt to start a new life in a new land.', 'Walter Raleigh had been granted the right to found a colony in 1584.'], 0, 'A feature about 1587 with a detail.'],
  ['Why could White not return quickly?', ['The Armada crisis kept English ships at home', 'Raleigh refused to pay for any more voyages', 'Spain had captured Roanoke Island in 1587'], 0, 'War with Spain interrupted supply.'],
], [
  Q('eld27.p1', 'Who organised the Roanoke colonies?', ['Sir Walter Raleigh', 'Sir Francis Drake', 'Sir Humphrey Gilbert'], 0, 'He never went himself.', 'raleigh'),
  Q('eld27.p2', 'Who led the first colony?', ['Ralph Lane', 'John White', 'Thomas Harriot'], 0, 'He led it in 1585.', 'first-colony'),
  Q('eld27.p3', 'Who was the first English child born in America?', ['Virginia Dare', 'Elizabeth Raleigh', 'Mary White'], 0, 'She was born in 1587.', 'second-colony'),
  Q('eld27.p4', 'Why was it named Virginia?', ['For the "Virgin Queen"', 'For a Spanish saint', 'For a local leader'], 0, 'It honoured Elizabeth.', 'raleigh'),
  Q('eld27.p5', 'When did White find the colony gone?', ['1590', '1586', '1588'], 0, 'The "lost colony".', 'second-colony'),
], [
  Q('eld27.c1', 'Who recorded the land in paintings?', ['John White', 'Ralph Lane', 'Walter Raleigh'], 0, 'He was an artist.', 'first-colony'),
  Q('eld27.c2', 'Who killed Wingina in 1586?', ['Ralph Lane', 'John White', 'Francis Drake'], 0, 'Relations collapsed.', 'first-colony'),
  Q('eld27.c3', 'Whom did the first colonists sail home with?', ['Drake', 'Raleigh', 'Hawkins'], 0, 'They left in June 1586.', 'first-colony'),
  Q('eld27.c4', 'Who were most of the first colonists?', ['Soldiers', 'Farmers', 'Families'], 0, 'They struggled to farm.', 'first-colony'),
  Q('eld27.c5', 'Roughly how many settlers went in 1587?', ['About 115', 'About 1,500', 'About 15'], 0, 'Including families.', 'second-colony'),
  Q('eld27.c6', 'Which scientist joined the 1585 colony?', ['Thomas Harriot', 'John Dee', 'Isaac Newton'], 0, 'He studied the land.', 'first-colony'),
  Q('eld27.c7', 'Where was Roanoke Island?', ['Off North Carolina', 'In the Caribbean', 'Off Newfoundland'], 0, 'It lay off the coast.', 'raleigh'),
  Q('eld27.c8', 'Why did White return to England in 1587?', ['For supplies', 'To fight Spain', 'To see the queen'], 0, 'He could not return quickly.', 'second-colony'),
], {exam: 'Describe two features of the attempts to found a colony in Virginia in the years 1585–87. (4 marks)'}),

lesson(T, 'elizabeth.virginia-failure', 'Why the Virginia colony failed', ['B4 3.4'], [
  ['Poor planning and supplies', 'The 1585 expedition arrived too late in the year to plant crops, and much of its food was spoiled when its main ship ran aground. The colonists depended on supplies from England and on food from the Native Americans.'],
  ['The wrong people', 'Most of the first colonists were soldiers and gentlemen hoping for quick riches, not farmers with the skills to grow food or build a settlement. They spent time searching for gold rather than preparing for winter.'],
  ['Relations with Native Americans', 'At first local people traded and shared food. But the colonists\' demands for food grew in a hard year, misunderstandings and violence followed, and disease brought by the English killed many Native Americans. Lane\'s killing of Wingina ended any chance of cooperation.'],
  ['Distance, location and war', 'Roanoke was a poor site: the island lacked a deep harbour, and dangerous shoals made it hard for ships to land. The colony was thousands of miles from England and needed regular supply, but in 1588 the Armada crisis kept ships at home. Without support the second colony disappeared.'],
], view.factors('Reasons for failure', [
  ['Planning', 'arrived too late to plant crops; supplies lost'],
  ['People', 'soldiers and gentlemen without farming skills'],
  ['Relations', 'conflict with Native Americans; the killing of Wingina'],
  ['Location and war', 'no deep harbour; the Armada blocked resupply'],
]), [
  view.timeline('From hope to failure', [
    ['Jun 1585', 'Main ship runs aground; food spoiled'],
    ['1585–86', 'Winter shortages; demands on local food'],
    ['1586', 'Wingina killed; colony abandoned'],
    ['1587', 'Second colony left on Roanoke'],
    ['1588', 'Armada keeps supply ships at home'],
    ['1590', 'The colony found deserted'],
  ]),
  view.people('People', [
    ['Ralph Lane', 'Governor whose violence ended cooperation'],
    ['John White', 'Could not bring supplies back in time'],
    ['Wingina', 'Leader whose people first helped, then resisted'],
    ['Sir Walter Raleigh', 'Funded the colony from England'],
  ]),
  view.source('A source type: a colonist\'s report', 'A report written by one of the 1585 colonists after returning, describing the land\'s riches and blaming others for the failure.', 'Useful for what colonists experienced; the author wanted to defend himself and encourage future investment.'),
], [
  ['Why did the colonists struggle to feed themselves?', ['They arrived too late to plant crops and their supplies were spoiled', 'The soil on Roanoke Island was too rich for English crops to grow', 'They were forbidden to farm by the rules Raleigh had written'], 0, 'Timing and bad luck mattered.'],
  ['Why did relations with Native Americans break down?', ['Growing demands for food led to conflict, and Lane killed Wingina', 'The Native Americans had signed a treaty with Spain to drive out the English', 'The colonists refused to trade anything with the local people at all'], 0, 'Dependence turned to violence.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Poor planning was crucial, but the Armada\'s interruption of supply finally doomed the second colony.', 'The colony failed because it was a very difficult thing to start a new colony so far away.', 'The colony failed only because of the Native Americans living there and for no other reason at all.'], 0, 'A supported judgement weighs factors.'],
  ['Why was Roanoke a poor site?', ['It lacked a deep harbour and was surrounded by dangerous shoals', 'It was too close to England and easy for Spain to attack by sea', 'It was a desert island with no fresh water or trees'], 0, 'Ships struggled to land.'],
], [
  Q('eld28.p1', 'Why did the 1585 colonists lack food?', ['They arrived too late to plant', 'They refused to eat local food', 'The queen took it'], 0, 'And supplies were spoiled.', 'planning'),
  Q('eld28.p2', 'Who were most of the first colonists?', ['Soldiers and gentlemen', 'Skilled farmers', 'Families with children'], 0, 'Few farming skills.', 'people'),
  Q('eld28.p3', 'What did some colonists search for instead of farming?', ['Gold', 'Spices', 'Coal'], 0, 'Hoping for riches.', 'people'),
  Q('eld28.p4', 'What blocked supply in 1588?', ['The Armada crisis', 'A plague', 'A French blockade'], 0, 'Ships stayed home.', 'distance'),
  Q('eld28.p5', 'What did English disease do to Native Americans?', ['Killed many of them', 'Had no effect', 'Made them stronger'], 0, 'A tragic consequence.', 'relations'),
], [
  Q('eld28.c1', 'What made landing at Roanoke dangerous?', ['Shoals', 'Ice', 'Cliffs'], 0, 'No deep harbour.', 'distance'),
  Q('eld28.c2', 'What happened to the main supply ship in 1585?', ['It ran aground', 'It sank in a battle', 'It was captured'], 0, 'Food was spoiled.', 'planning'),
  Q('eld28.c3', 'What ended cooperation with local people?', ['The killing of Wingina', 'A peace treaty with Spain', 'A marriage between leaders'], 0, 'This happened in 1586.', 'relations'),
  Q('eld28.c4', 'How did the colonists first get food?', ['Trade with Native Americans', 'Shipments sent from Spain', 'Fishing and nothing else'], 0, 'Dependence grew.', 'relations'),
  Q('eld28.c5', 'How far away was England?', ['Thousands of miles', 'Only a day\'s sail', 'About fifty miles'], 0, 'Supply was hard.', 'distance'),
  Q('eld28.c6', 'What happened to the second colony?', ['It disappeared', 'It thrived', 'It moved to Spain'], 0, 'The "lost colony".', 'distance'),
  Q('eld28.c7', 'Who was governor in 1585–86?', ['Ralph Lane', 'John White', 'Walter Raleigh'], 0, 'His violence mattered.', 'relations'),
  Q('eld28.c8', 'What did the colonists need from England?', ['Regular supplies', 'Nothing at all', 'Only letters and news'], 0, 'They were not self-sufficient.', 'planning'),
], {exam: '"The main reason for the failure of the Virginia colony was poor planning." How far do you agree? (16 marks)'}),
];
