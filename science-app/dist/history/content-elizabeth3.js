// Pearson Edexcel GCSE (9–1) History 1HI0, Option B4: Early Elizabethan England, 1558–88.
// Key topic 3: Elizabethan society in the Age of Exploration, 1558–88 (specification 3.1–3.4).
// All teaching text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261023-history01';

export const elizabethTopic3 = {id: 'history.elizabeth.kt3', unit: 'B4', title: 'Elizabethan society in the Age of Exploration, 1558–88', paper: 'Paper 2 · British depth study'};
const T = elizabethTopic3.id;

export const elizabethLessons3 = [
lesson(T, 'elizabeth.education', 'Education and leisure', ['B4 3.1'], [
  ['Education at home', 'Most children learned at home: farming, crafts and household skills for the work they would do. Wealthy families hired tutors. Daughters of the nobility and gentry might learn languages, music and how to run a large household, but girls were not sent to grammar schools or universities.'],
  ['Schools and universities', 'Petty schools taught younger boys, and some girls, to read and write. Grammar schools taught boys Latin and some Greek, which were needed for the law, the Church and government; many new ones were founded, some with places for poorer boys. The universities were Oxford and Cambridge; future lawyers trained at the Inns of Court in London.'],
  ['Sport and pastimes', 'The nobility hunted, hawked, fenced and played real tennis. Ordinary people played rough forms of football, wrestled, practised archery and watched cock fighting and bear-baiting. Music, dancing, cards and dice were enjoyed across society, and holy days brought fairs and festivals.'],
  ['The theatre', 'Travelling players needed a noble patron to avoid being treated as vagrants. In 1576 James Burbage built The Theatre in Shoreditch, the first purpose-built playhouse in London, followed by The Curtain and The Rose. All classes paid to watch, but Puritans and city authorities complained that playhouses spread disorder and disease.'],
], view.factors('Who learned what?', [
  ['Nobility and gentry', 'tutors at home; grammar school; university or the Inns of Court for sons'],
  ['Merchants and yeomen', 'petty school, then grammar school for some sons'],
  ['The poor', 'work skills learned at home; a few boys won grammar-school places'],
  ['Girls', 'household skills; noble girls might learn languages and music at home'],
]), [
  view.timeline('Schools and playhouses', [
    ['1560s–70s', 'Many new grammar schools founded'],
    ['1572', 'Act against vagabonds: players need a licence or a noble patron'],
    ['1576', 'James Burbage builds The Theatre in Shoreditch'],
    ['1577', 'The Curtain opens nearby'],
    ['1587', 'The Rose opens on the south bank of the Thames'],
  ]),
  view.people('Who did what', [
    ['James Burbage', 'Actor and builder of The Theatre (1576)'],
    ['Noble patrons', 'Gave acting companies their name and protection, such as Leicester\'s Men'],
    ['Grammar-school masters', 'Taught Latin grammar and classical texts'],
    ['Puritan preachers', 'Attacked playhouses and Sunday games as sinful'],
  ]),
  view.source('A source type: a school\'s founding statutes', 'The rules written when a grammar school was founded, saying who could attend, what was taught and how the master was paid.', 'Useful for what a school intended to teach; not proof of what pupils actually learned or how many poorer boys attended.'),
], [
  ['Why was Latin central to grammar schools?', ['It was needed for careers in the law, the Church and government', 'It was the language that most English people spoke at home', 'Parliament had banned all teaching in the English language'], 0, 'Latin was the language of learning and professions.'],
  ['Why did acting companies seek noble patrons?', ['Without one, players could be treated as vagrants under the law', 'Patrons wrote all the plays that the companies performed', 'The Church required every play to be approved by a noble'], 0, 'The 1572 Act made unlicensed players liable to punishment.'],
  ['Exam skill · Describe a feature. Which is a feature with supporting detail?', ['Grammar schools taught boys Latin, which they needed for careers in the law and the Church.', 'Education was very different for different people in Elizabethan times, depending on wealth.', 'Some people went to school in Elizabethan England, and some people did not go at all.'], 0, 'A feature is specific; the detail develops it.'],
  ['Why did Puritans and city authorities oppose the theatres?', ['They believed playhouses caused disorder, spread disease and drew people from church', 'Plays were performed only in Latin, which ordinary people could not follow', 'The theatres were owned by Catholic nobles who plotted against the queen'], 0, 'Moral and practical objections combined.'],
], [
  Q('edu.p1', 'Which schools taught younger children to read and write?', ['Petty schools', 'Grammar schools', 'The Inns of Court'], 0, 'Petty schools came before grammar school.', 'schools'),
  Q('edu.p2', 'Where did future lawyers train?', ['The Inns of Court', 'Petty schools', 'Cathedral schools'], 0, 'The Inns of Court were in London.', 'schools'),
  Q('edu.p3', 'Who built The Theatre in 1576?', ['James Burbage', 'William Shakespeare', 'Christopher Marlowe'], 0, 'Shakespeare\'s career began later.', 'theatre'),
  Q('edu.p4', 'Which sport was mainly for the nobility?', ['Real tennis', 'Village football', 'Wrestling matches'], 0, 'Real tennis needed expensive courts.', 'leisure'),
  Q('edu.p5', 'Which were the two universities in England?', ['Oxford and Cambridge', 'London and York', 'Durham and Bristol', 'Norwich and Exeter'], 0, 'England had only two universities.', 'schools'),
], [
  Q('edu.c1', 'What did grammar schools mainly teach?', ['Latin and some Greek', 'Farming and crafts', 'Navigation and mapping'], 0, 'Classical languages were the core.', 'schools'),
  Q('edu.c2', 'How were most children educated?', ['At home, learning the work they would do', 'At grammar schools paid for by the state', 'At universities from the age of seven'], 0, 'Formal schooling was for a minority.', 'schools'),
  Q('edu.c3', 'Which entertainment involved animals?', ['Bear-baiting', 'Real tennis', 'Fencing'], 0, 'Blood sports were popular with all classes.', 'leisure'),
  Q('edu.c4', 'Where was The Theatre built?', ['Shoreditch, outside the City of London', 'Inside the walls of the Tower of London', 'In the grounds of Hampton Court Palace'], 0, 'Playhouses were built outside the City authorities\' control.', 'theatre'),
  Q('edu.c5', 'What could noble girls learn at home?', ['Languages, music and household management', 'Latin grammar at a local grammar school', 'Law at the Inns of Court in London'], 0, 'Girls were educated at home, not in grammar schools.', 'schools'),
  Q('edu.c6', 'Who complained that playhouses spread disease and disorder?', ['Puritans and city authorities', 'The queen and the Privy Council', 'The acting companies themselves'], 0, 'The Court enjoyed plays; city leaders did not.', 'theatre'),
  Q('edu.c7', 'Which change helped some poorer boys go to school?', ['New grammar schools with places for poorer pupils', 'A law making school free for every child', 'New universities opening in every county'], 0, 'Some foundations offered free places.', 'schools'),
  Q('edu.c8', 'Which playhouse opened in 1587 on the south bank?', ['The Rose', 'The Globe', 'The Curtain'], 0, 'The Globe was built in 1599, after this period.', 'theatre'),
], {exam: 'Describe two features of education in Elizabethan England. (4 marks)'}),

lesson(T, 'elizabeth.poor', 'The \'problem\' of the poor', ['B4 3.2'], [
  ['Why poverty grew', 'The population grew quickly, so there were more workers than jobs. Prices rose faster than wages. Bad harvests pushed up the price of bread. Some landowners enclosed fields for sheep farming, which needed fewer workers, and the cloth trade suffered slumps. The monasteries, which had helped the poor, had been closed under Henry VIII.'],
  ['Vagabonds and fear', 'Vagabonds were people who wandered in search of work or charity. Many people feared them as a cause of crime and disorder, and pamphlets described tricks used by "rogues". The government worried that wandering poor people might also join rebellions.'],
  ['Deserving and undeserving poor', 'Elizabethans divided the poor into the deserving (the old, sick, disabled and orphans, who could not work) and the undeserving or "sturdy beggars", who were thought able to work but unwilling. Policies treated the two groups very differently.'],
  ['Changing policies', 'The 1563 Statute of Artificers regulated wages and apprenticeships. The 1572 Vagabonds Act punished vagrants harshly, but also made a local poor rate compulsory to help the deserving poor. The 1576 Poor Relief Act told towns to provide materials so the able-bodied poor could work, with houses of correction for those who refused. Towns such as Norwich and Ipswich ran their own schemes.'],
], view.factors('Causes of rising poverty', [
  ['Population growth', 'more people than jobs and food'],
  ['Inflation', 'prices rose faster than wages'],
  ['Bad harvests', 'food prices spiked in poor years'],
  ['Changes in farming', 'enclosure for sheep needed fewer labourers'],
  ['Trade slumps', 'falls in cloth exports cost jobs'],
]), [
  view.timeline('Laws on the poor', [
    ['1563', 'Statute of Artificers: wages and apprenticeships regulated'],
    ['1570', 'Norwich surveys its poor and organises work and relief'],
    ['1572', 'Vagabonds Act: harsh punishment; compulsory local poor rate'],
    ['1576', 'Poor Relief Act: work materials and houses of correction'],
  ]),
  view.people('Who was responsible', [
    ['Justices of the Peace', 'Enforced the vagrancy laws and oversaw the poor rate'],
    ['Town authorities', 'Ran local schemes in places like Norwich and Ipswich'],
    ['Parishes', 'Collected the poor rate and identified the deserving poor'],
    ['Parliament', 'Passed the national laws of 1563, 1572 and 1576'],
  ]),
  view.source('A source type: a town census of the poor', 'A survey made by town officials, such as Norwich\'s in 1570, listing poor households, their work and their needs.', 'Useful for who was poor in one town and why; it reflects the officials\' categories and may not be typical of other places.'),
], [
  ['Why did the closure of the monasteries matter for the poor?', ['A traditional source of charity and care had disappeared', 'Monks had been the main employers of farm labourers', 'The monasteries had collected the poor rate before 1572'], 0, 'Their charity was not replaced at once.'],
  ['What made the 1572 Vagabonds Act a turning point?', ['It made a local poor rate compulsory for the first time', 'It abolished all punishment for vagrancy in England', 'It ordered every town to build a grammar school'], 0, 'It accepted that the state must help the deserving poor.'],
  ['Exam skill · Explain why. Which sentence explains rather than describes?', ['Enclosure for sheep needed fewer labourers, so many families lost work and took to the roads.', 'Enclosure was when landowners put fences and hedges around fields that had been open.', 'There was a lot of enclosure in some parts of England during the sixteenth century.'], 0, 'Explanation links a cause to its result.'],
  ['How did attitudes to the poor change by 1576?', ['More people accepted that some poor needed work provided, not just punishment', 'Everyone agreed that the poor were simply lazy and should be whipped', 'People decided that poverty was no longer a problem for the government'], 0, 'Policy moved from punishment alone towards relief and work.'],
], [
  Q('poor.p1', 'Who were the "deserving poor"?', ['People who could not work, such as the old and sick', 'Vagrants who were thought able to work but refused', 'Unemployed soldiers returning from the wars abroad'], 0, 'They were seen as worthy of help.', 'attitudes'),
  Q('poor.p2', 'What did enclosure usually mean?', ['Fencing land for sheep, which needed fewer workers', 'Building new market towns on common land', 'Closing monasteries and selling their land to nobles'], 0, 'Sheep farming needed fewer labourers than crops.', 'causes'),
  Q('poor.p3', 'Which act made a local poor rate compulsory?', ['The Vagabonds Act, 1572', 'The Statute of Artificers, 1563', 'The Act of Uniformity, 1559'], 0, 'It combined punishment with relief.', 'policies'),
  Q('poor.p4', 'What were houses of correction for?', ['Making people who refused work do it', 'Housing orphans and the sick in each town', 'Training teachers for the new grammar schools'], 0, 'They were set up under the 1576 Act.', 'policies'),
  Q('poor.p5', 'Which town surveyed its poor in 1570?', ['Norwich', 'Bristol', 'Plymouth'], 0, 'Norwich\'s census guided its relief scheme.', 'policies'),
], [
  Q('poor.c1', 'Why did prices rise faster than wages?', ['A growing population pushed up demand for food and goods', 'Parliament ordered every wage to be doubled each year', 'The Crown stopped making coins and money ran short'], 0, 'More people competed for limited supplies.', 'causes'),
  Q('poor.c2', 'Why were vagabonds feared?', ['They were blamed for crime and disorder and might join rebellions', 'They carried the plague into every town they entered', 'They were known to work for Spain as spies and messengers'], 0, 'Fear of disorder drove harsh laws.', 'attitudes'),
  Q('poor.c3', 'What did the 1576 Poor Relief Act require?', ['Materials so the able-bodied poor could work', 'Free bread for every poor family in England', 'Every vagrant to be sent abroad to the colonies'], 0, 'It aimed to provide work.', 'policies'),
  Q('poor.c4', 'What did the 1563 Statute of Artificers regulate?', ['Wages and apprenticeships', 'Church services and prayer books', 'The size of ships'], 0, 'It set rules for workers.', 'policies'),
  Q('poor.c5', 'Who were the "sturdy beggars"?', ['People thought able to work who begged instead', 'Disabled former soldiers returning from war', 'Children whose parents had died of the plague'], 0, 'They were treated as undeserving.', 'attitudes'),
  Q('poor.c6', 'Which caused food prices to spike?', ['Bad harvests', 'The theatre', 'Grammar schools'], 0, 'Poor harvests cut the food supply.', 'causes'),
  Q('poor.c7', 'Who enforced the vagrancy laws locally?', ['Justices of the Peace', 'The parish bishops', 'Members of the Privy Council'], 0, 'JPs were the local authority.', 'policies'),
  Q('poor.c8', 'Why did the closing of the monasteries matter to the poor?', ['They had given charity and care to the poor', 'They had paid every labourer\'s wages in the area', 'They had collected the taxes for the Crown'], 0, 'Their charity was lost.', 'causes'),
], {exam: 'Explain why there was an increase in poverty and vagabondage in the years 1558–88. (12 marks)'}),

lesson(T, 'elizabeth.exploration', 'Exploration and Drake\'s circumnavigation', ['B4 3.3'], [
  ['Why explore?', 'English merchants wanted new markets: the cloth trade through Antwerp had been disrupted by war in the Netherlands. Spain and Portugal grew rich from the Americas and Asia, and privateering raids had shown how much wealth was at sea. Explorers also hoped to find a northern route to Asia.'],
  ['New technology', 'Better maps, including Mercator\'s 1569 projection, made long voyages safer to plan. Navigators used the compass, the astrolabe and cross-staff to find latitude, and the log and line to measure speed. Galleons with sleeker, "race-built" hulls were faster and more manoeuvrable, and could carry more guns.'],
  ['Drake\'s voyage, 1577–80', 'Drake left Plymouth in 1577 with five ships. Only the Pelican, renamed the Golden Hind, passed through the Strait of Magellan into the Pacific. He raided Spanish ports, captured a treasure ship, claimed land in California for Elizabeth and crossed the Pacific and Indian Oceans, returning to Plymouth in September 1580.'],
  ['Why the voyage mattered', 'Drake was the first Englishman, and the second captain after Magellan\'s expedition, to sail round the world. His treasure was worth more than a year of the Crown\'s ordinary income, and investors, including Elizabeth, made huge profits. It boosted English confidence at sea, angered Spain and encouraged further voyages and trade.'],
], view.factors('Why did exploration increase?', [
  ['Trade', 'new markets needed as the Antwerp cloth trade was disrupted'],
  ['Wealth', 'the riches of Spain and Portugal and the profits of privateering'],
  ['Technology', 'better maps, navigation instruments and race-built galleons'],
  ['Rivalry', 'competing with Spain and challenging its claims overseas'],
]), [
  view.timeline('Drake\'s circumnavigation', [
    ['Dec 1577', 'Leaves Plymouth with five ships'],
    ['1578', 'The Pelican, renamed the Golden Hind, enters the Pacific'],
    ['1579', 'Captures a Spanish treasure ship; lands in California'],
    ['1579–80', 'Crosses the Pacific and Indian Oceans; round the Cape of Good Hope'],
    ['Sept 1580', 'Returns to Plymouth with treasure'],
    ['1581', 'Knighted on board the Golden Hind'],
  ]),
  view.people('People', [
    ['Francis Drake', 'Commander; first Englishman to sail round the world'],
    ['Elizabeth I', 'A secret investor in the voyage'],
    ['Investors', 'Courtiers and merchants who paid for ships and shared the profits'],
    ['Gerardus Mercator', 'Mapmaker whose 1569 map helped navigators'],
  ]),
  view.source('A source type: an account published by the voyage\'s supporters', 'A narrative of Drake\'s voyage published in England some years later from the notes of men who sailed with him.', 'Useful for the route and events; written to celebrate Drake, so it may leave out failures and cruelty.'),
], [
  ['Why did disruption at Antwerp encourage exploration?', ['English cloth merchants needed new markets for their goods', 'Antwerp had banned English ships from crossing to Spain', 'The queen had moved her court from London to Antwerp'], 0, 'Trade needs drove voyages.'],
  ['What did race-built galleons offer?', ['Speed and manoeuvrability, with room for more guns', 'Huge cargo holds for trade but no space for any guns', 'Shallow hulls designed for use on rivers and in harbours'], 0, 'They were better for long voyages and fighting.'],
  ['Exam skill · Significance. Which answer best explains why the voyage was significant?', ['Its profits and success encouraged investors to back further voyages and trade.', 'Drake sailed through the Strait of Magellan and visited California on the way round.', 'The voyage started in 1577 and ended in 1580 at the port of Plymouth in England.'], 0, 'Significance explains the effects that followed.'],
  ['Why did the voyage anger Spain?', ['Drake raided Spanish ports and treasure in the Pacific', 'Drake claimed all of South America for England', 'Drake returned Spanish treasure to the Pope instead'], 0, 'Spain saw it as piracy in its own waters.'],
], [
  Q('exp.p1', 'What was Drake\'s ship renamed during the voyage?', ['The Golden Hind', 'The Revenge', 'The Ark Royal', 'The Mary Rose'], 0, 'It began as the Pelican.', 'drake'),
  Q('exp.p2', 'Which strait did Drake pass through into the Pacific?', ['The Strait of Magellan', 'The Strait of Gibraltar', 'The Bering Strait'], 0, 'It is at the southern tip of South America.', 'drake'),
  Q('exp.p3', 'What did the astrolabe help sailors to find?', ['Their latitude', 'The depth of the sea', 'The speed of the wind'], 0, 'It measured the height of the sun or stars.', 'technology'),
  Q('exp.p4', 'How many ships did Drake set out with?', ['Five', 'One', 'Twenty'], 0, 'Only the Golden Hind completed the voyage.', 'drake'),
  Q('exp.p5', 'Whose 1569 map projection helped navigators?', ['Mercator\'s', 'Galen\'s', 'Raleigh\'s', 'Hakluyt\'s'], 0, 'It showed courses as straight lines.', 'technology'),
], [
  Q('exp.c1', 'When did Drake return from his voyage?', ['1580', '1577', '1588'], 0, 'He reached Plymouth in September 1580.', 'drake'),
  Q('exp.c2', 'Who invested secretly in Drake\'s voyage?', ['Elizabeth I', 'Philip II', 'Mary, Queen of Scots'], 0, 'She shared in the profits.', 'drake'),
  Q('exp.c3', 'Which was a reason for exploration?', ['Finding new markets for English cloth', 'Escaping the plague that had struck London', 'Spreading Puritan ideas to Spain and Portugal'], 0, 'Trade was a central motive.', 'motives'),
  Q('exp.c4', 'What did the log and line measure?', ['A ship\'s speed', 'The height of a star', 'The weight of cargo'], 0, 'Knots on a line gave speed.', 'technology'),
  Q('exp.c5', 'Where did Drake claim land for Elizabeth?', ['California', 'Virginia', 'Newfoundland'], 0, 'He called it Nova Albion.', 'drake'),
  Q('exp.c6', 'Why was the voyage important for the Crown?', ['The treasure was worth more than a year of ordinary royal income', 'It ended the war with Spain and brought a lasting peace', 'It gave England control of the spice trade with Asia'], 0, 'Investors made enormous returns.', 'significance'),
  Q('exp.c7', 'How was the voyage a first for England?', ['Drake was the first Englishman to sail round the world', 'Drake was the first person ever to cross the Atlantic', 'Drake founded the first English colony'], 0, 'Magellan\'s expedition had gone first, but not with an English captain.', 'significance'),
  Q('exp.c8', 'What made galleons suited to long voyages and fighting?', ['Sleeker hulls that were faster and more manoeuvrable', 'Oars as well as sails, so they could move without wind', 'Flat bottoms so that they could be beached for repairs'], 0, 'Race-built design improved speed and handling.', 'technology'),
], {exam: 'Explain why Drake\'s circumnavigation of the globe (1577–80) was significant. (12 marks)'}),

lesson(T, 'elizabeth.virginia', 'The attempted colonisation of Virginia', ['B4 3.4'], [
  ['Why found a colony?', 'Supporters argued that a colony in North America would bring raw materials and trade, a base for privateers attacking Spanish ships, national pride and a challenge to Spain\'s claims, and land for England\'s growing population. Some also spoke of converting the native people to Christianity.'],
  ['Raleigh\'s role', 'In 1584 Walter Raleigh was given a royal licence, or patent, to colonise land not ruled by a Christian prince, following Humphrey Gilbert, who had died in 1583. Raleigh paid for a scouting voyage in 1584 and named the land Virginia in honour of the "Virgin Queen", but the queen would not let him sail himself.'],
  ['Roanoke, 1585–86', 'In 1585 Sir Richard Grenville took about a hundred men to Roanoke Island, with Ralph Lane as governor. Their supply ship had run aground and much of their food was spoiled, they arrived too late to plant crops, and many were soldiers and gentlemen who were not used to farming.'],
  ['Why it failed', 'The colonists depended on the local Algonquian people for food. Relations broke down, and Lane attacked and killed the chief, Wingina. A promised supply fleet was delayed. In June 1586 Drake arrived and the colonists sailed home with him. A second colony in 1587 later disappeared.'],
], view.factors('Why did the first settlement fail?', [
  ['Supplies', 'food spoiled when the supply ship ran aground; the relief fleet was late'],
  ['Timing', 'arrived too late to plant crops'],
  ['The colonists', 'mainly soldiers and gentlemen, not farmers'],
  ['Relations with the Algonquians', 'dependence turned to conflict and Wingina was killed'],
  ['Leadership and money', 'Raleigh could not go himself; the venture depended on investors'],
]), [
  view.timeline('Virginia, 1578–87', [
    ['1578', 'Humphrey Gilbert receives a patent to colonise'],
    ['1583', 'Gilbert dies at sea'],
    ['1584', 'Raleigh\'s patent; scouting voyage to Roanoke'],
    ['1585', 'Grenville lands colonists at Roanoke; Lane is governor'],
    ['1586', 'Wingina killed; colonists leave with Drake in June'],
    ['1587', 'A second colony is founded and later disappears'],
  ]),
  view.people('People', [
    ['Walter Raleigh', 'Courtier who held the patent and paid for the voyages'],
    ['Richard Grenville', 'Commanded the 1585 fleet'],
    ['Ralph Lane', 'Governor of the Roanoke colony'],
    ['Wingina', 'Algonquian chief, killed by the colonists in 1586'],
  ]),
  view.source('A source type: Thomas Harriot\'s report and John White\'s paintings', 'A report and watercolours made by two members of the 1585 expedition describing the land, its resources and the Algonquian people.', 'Valuable first-hand evidence; made partly to encourage further investment, so they stress the land\'s promise.'),
], [
  ['Why did supporters see a colony as useful against Spain?', ['It could be a base for privateers attacking Spanish ships', 'It would allow England to buy Spanish silver cheaply', 'It would give Philip II somewhere to send his rebels'], 0, 'Rivalry with Spain was a key motive.'],
  ['Why was the supply problem so serious?', ['The colonists had arrived too late to grow their own food', 'Food grown in America was poisonous to English settlers', 'The Algonquians refused ever to trade with them at all'], 0, 'They depended on supplies and local help.'],
  ['Exam skill · How far? Which judgement is best supported?', ['Poor relations with the Algonquians mattered most, because the colonists depended on them for food once supplies failed.', 'The colony failed because of a lot of different problems that the colonists faced in 1585 and 1586.', 'The colony failed only because Raleigh did not go himself, since he was the leader who had paid for it.'], 0, 'A supported judgement links factors and explains why one matters most.'],
  ['What happened to the first colonists in June 1586?', ['They sailed home with Drake', 'They moved inland and founded a city', 'They were captured by a Spanish fleet'], 0, 'Drake arrived and they chose to leave.'],
], [
  Q('vir.p1', 'Who received the patent to colonise in 1584?', ['Walter Raleigh', 'Francis Drake', 'Richard Grenville'], 0, 'He followed Humphrey Gilbert.', 'raleigh'),
  Q('vir.p2', 'Where was the first settlement?', ['Roanoke Island', 'Jamestown', 'Newfoundland', 'Chesapeake Bay'], 0, 'Jamestown was founded in 1607.', 'roanoke'),
  Q('vir.p3', 'Who was governor of the 1585 colony?', ['Ralph Lane', 'John White', 'Walter Raleigh'], 0, 'White led the 1587 colony.', 'roanoke'),
  Q('vir.p4', 'Who was the Algonquian chief killed by the colonists?', ['Wingina', 'Powhatan', 'Manteo'], 0, 'His death ended any hope of support.', 'failure'),
  Q('vir.p5', 'Why was the land named Virginia?', ['In honour of Elizabeth, the "Virgin Queen"', 'After the ship that first found its harbour', 'After a Spanish explorer who had landed there'], 0, 'Raleigh named it to please the queen.', 'raleigh'),
], [
  Q('vir.c1', 'Who held a patent to colonise before Raleigh?', ['Humphrey Gilbert', 'John Hawkins', 'Robert Dudley, Earl of Leicester'], 0, 'Gilbert died in 1583.', 'raleigh'),
  Q('vir.c2', 'Who commanded the 1585 fleet to Roanoke?', ['Richard Grenville', 'Walter Raleigh', 'Lord Howard of Effingham'], 0, 'Raleigh was not allowed to go.', 'roanoke'),
  Q('vir.c3', 'Why did many colonists struggle to farm?', ['Many were soldiers and gentlemen, not farmers', 'The queen had banned farming in colonies', 'The island had no land suitable for crops at all'], 0, 'They lacked skills and arrived late.', 'failure'),
  Q('vir.c4', 'What happened to the 1585 supply ship?', ['It ran aground and much of the food was spoiled', 'It was captured by a Spanish warship on the way', 'It sailed to Newfoundland instead of Roanoke'], 0, 'Losing supplies made them dependent.', 'failure'),
  Q('vir.c5', 'Which was a reason for the colony?', ['A base for privateers against Spain', 'A place to send the Catholic nobility', 'A new home for the royal court'], 0, 'Rivalry with Spain was a motive.', 'motives'),
  Q('vir.c6', 'Who recorded the land and people in paintings?', ['John White', 'Ralph Lane', 'Francis Drake'], 0, 'White\'s watercolours survive.', 'roanoke'),
  Q('vir.c7', 'What happened to the second colony of 1587?', ['It later disappeared', 'It became the capital of Virginia', 'It was moved to Newfoundland'], 0, 'It is known as the "lost colony".', 'failure'),
  Q('vir.c8', 'Why did the colonists depend on the Algonquians?', ['They had too little food of their own', 'They needed guides to find a route to Spain', 'They had brought no weapons with them'], 0, 'Dependence turned into conflict.', 'failure'),
], {exam: '"The main reason for the failure of the first colony in Virginia was poor relations with the Native Americans." How far do you agree? (16 marks)'}),
];
