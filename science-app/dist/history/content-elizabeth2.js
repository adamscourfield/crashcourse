// Pearson Edexcel GCSE (9–1) History 1HI0, Option B4: Early Elizabethan England, 1558–88.
// Key topic 2: Challenges to Elizabeth at home and abroad, 1569–88 (specification 2.1–2.4).
// Dates are those used in English accounts of the time (Old Style). All teaching text and questions
// are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history04';

export const elizabethTopic2 = {id: 'history.elizabeth.kt2', unit: 'B4', title: 'Challenges at home and abroad, 1569–88', paper: 'Paper 2 · British depth study'};
const T = elizabethTopic2.id;

export const elizabethLessons2 = [
lesson(T, 'elizabeth.plots', 'Revolt, plots and the execution of Mary', ['B4 2.1'], [
  ['The Revolt of the Northern Earls, 1569', 'The Catholic earls of Northumberland and Westmorland had lost influence in the north to Elizabeth\'s Protestant officials. A plan for the Duke of Norfolk to marry Mary, Queen of Scots, collapsed, and when Elizabeth summoned the earls to Court they rebelled. They celebrated Mass in Durham Cathedral and marched south to free Mary, but she was moved further south, support was limited and the rebellion collapsed as a royal army approached. Hundreds of rebels were executed.'],
  ['Why the revolt mattered', 'It was the most serious rebellion of the reign and the last led by great nobles. In 1570 the Pope excommunicated Elizabeth in a papal bull and released Catholics from obedience to her. From then on, every Catholic could be seen as a potential traitor, and laws against Catholics became harsher.'],
  ['Three plots', 'The Ridolfi plot (1571), organised by an Italian banker, planned a Spanish invasion from the Netherlands, Norfolk\'s marriage to Mary and Elizabeth\'s overthrow; Norfolk was executed in 1572. The Throckmorton plot (1583) planned a French invasion led by the Duke of Guise, backed by Spain and the Pope; the Spanish ambassador was expelled. The Babington plot (1586) planned Elizabeth\'s murder, and Mary approved it in writing.'],
  ['Walsingham, spies and Mary\'s execution', 'Sir Francis Walsingham ran a network of agents and codebreakers. In 1586 he let Mary\'s secret letters, smuggled in beer barrels, continue so that he could read them; her reply to Babington proved her involvement. Mary was tried and executed at Fotheringhay in February 1587. Elizabeth signed the death warrant but later claimed it was sent without her consent.'],
], view.factors('Why was Mary executed in 1587?', [
  ['Proof', 'her coded reply approving the Babington plot'],
  ['Pressure', 'the Privy Council and Parliament had urged her execution for years'],
  ['Law', 'the Act for the Queen\'s Safety (1585) made it legal to execute anyone who benefited from a plot'],
  ['Security', 'Catholic plots would continue while Mary lived'],
  ['Risk', 'executing an anointed queen could provoke Spain and France'],
]), [
  view.timeline('Plots and revolts, 1569–87', [
    ['1569', 'Revolt of the Northern Earls'],
    ['1570', 'The Pope excommunicates Elizabeth (papal bull)'],
    ['1571', 'Ridolfi plot; Norfolk executed in 1572'],
    ['1583', 'Throckmorton plot; Spanish ambassador Mendoza expelled in 1584'],
    ['1585', 'Act for the Queen\'s Safety'],
    ['1586', 'Babington plot; Mary tried at Fotheringhay'],
    ['1587', 'Mary executed (February)'],
  ]),
  view.people('People', [
    ['Earls of Northumberland and Westmorland', 'Catholic northern nobles who led the 1569 revolt'],
    ['Duke of Norfolk', 'England\'s leading noble; planned to marry Mary; executed 1572'],
    ['Sir Francis Walsingham', 'Secretary of State from 1573; ran the spy network'],
    ['Anthony Babington', 'Young Catholic gentleman whose plot trapped Mary'],
  ]),
  view.source('A source type: an intercepted coded letter, 1586', 'A letter in cipher from Mary to Babington, copied and decoded by Walsingham\'s staff before being sent on.', 'Strong evidence of what Mary agreed to, but it reached us through people trying to convict her, so its handling and any additions need checking.'),
], [
  ['What made the Revolt of the Northern Earls more than a protest about religion?', ['The earls had also lost power in the north to Protestant officials', 'The earls had been refused the right to sit in the House of Lords', 'The earls wanted to make the Duke of Norfolk the new king of England'], 0, 'Religion and the loss of local influence combined.'],
  ['Why did the papal bull of 1570 increase the danger to Elizabeth?', ['It released Catholics from obedience, so any Catholic could be seen as a traitor', 'It ordered Spain and France to declare war on England straight away in 1570', 'It made Mary, Queen of Scots, Supreme Governor of the Church of England'], 0, 'Excommunication turned religious loyalty into a political question.'],
  ['Exam skill · Narrative and significance. Which link best explains why the Babington plot mattered?', ['Walsingham\'s interception produced proof against Mary, which led to her trial and execution in 1587.', 'The Babington plot happened in 1586 and was organised by Anthony Babington and some friends.', 'There were several plots against Elizabeth, such as the Ridolfi and Throckmorton plots.'], 0, 'Significance links an event to what it led to.'],
  ['What was new about Walsingham\'s methods?', ['A network of agents and codebreakers who let plots run to gather proof', 'Paying the Spanish ambassador to reveal every plan to the Council', 'Asking Catholic priests to report what they heard in confession'], 0, 'He gathered evidence rather than acting at the first sign of a plot.'],
], [
  Q('plot.p1', 'Where did the northern rebels hold a Catholic Mass in 1569?', ['Durham Cathedral', 'York Minster', 'Westminster Abbey'], 0, 'Mass in Durham showed the revolt\'s religious aim.', 'northern-revolt'),
  Q('plot.p2', 'Which plot planned a Spanish invasion from the Netherlands in 1571?', ['The Ridolfi plot', 'The Babington plot', 'The Throckmorton plot'], 0, 'Roberto Ridolfi linked Norfolk, Mary, the Pope and Spain.', 'plots'),
  Q('plot.p3', 'Who would have led the invasion in the Throckmorton plot?', ['The Duke of Guise', 'The Duke of Parma', 'The Duke of Norfolk'], 0, 'Guise was a French Catholic leader; Spain and the Pope backed him.', 'plots'),
  Q('plot.p4', 'How were Mary\'s letters smuggled in the Babington plot?', ['In beer barrels', 'Inside prayer books', 'In the lining of shoes'], 0, 'Walsingham controlled the route from the start.', 'walsingham'),
  Q('plot.p5', 'When was Mary, Queen of Scots, executed?', ['February 1587', 'November 1569', 'July 1588'], 0, 'She was executed at Fotheringhay Castle.', 'execution'),
], [
  Q('plot.c1', 'Which two earls led the Revolt of the Northern Earls?', ['Northumberland and Westmorland', 'Leicester and Essex', 'Norfolk and Shrewsbury together'], 0, 'Both were Catholic nobles from the north.', 'northern-revolt'),
  Q('plot.c2', 'What did the papal bull of 1570 do?', ['Excommunicated Elizabeth', 'Made peace between England and Spain', 'Recognised the 1559 settlement'], 0, 'Regnans in Excelsis declared her a heretic and deposed her in Catholic eyes.', 'papal-bull'),
  Q('plot.c3', 'Who was executed after the Ridolfi plot?', ['The Duke of Norfolk', 'Francis Throckmorton\'s brother', 'The Earl of Leicester'], 0, 'Norfolk was executed in 1572.', 'plots'),
  Q('plot.c4', 'What happened to the Spanish ambassador after the Throckmorton plot?', ['He was expelled from England', 'He was executed for treason', 'He became a Privy Councillor'], 0, 'Mendoza was expelled in 1584.', 'plots'),
  Q('plot.c5', 'What did the Act for the Queen\'s Safety (1585) allow?', ['The execution of anyone who would benefit from a plot against Elizabeth', 'Catholic priests to say Mass in private houses without any fine', 'Parliament to choose Elizabeth\'s heir if she died without children'], 0, 'It was aimed at Mary.', 'execution'),
  Q('plot.c6', 'What evidence condemned Mary in 1586?', ['Her coded reply approving Babington\'s plan', 'A confession she made at her trial', 'A letter from the Pope naming her as heir'], 0, 'The intercepted letter was the key proof.', 'walsingham'),
  Q('plot.c7', 'Why did Elizabeth hesitate to execute Mary?', ['Killing an anointed queen set a dangerous example and could provoke Catholic powers', 'Parliament had voted to protect Mary and refused any trial of her', 'Mary had already been handed back to the Scottish lords for trial there'], 0, 'She feared the precedent and foreign reaction.', 'execution'),
  Q('plot.c8', 'Why was the Revolt of the Northern Earls significant?', ['It was the last major rebellion led by great nobles in the reign', 'It put Mary on the English throne for a few months', 'It ended the Catholic threat to Elizabeth for good'], 0, 'Later threats came from plots and abroad, not noble armies.', 'northern-revolt'),
], {exam: 'Explain why Mary, Queen of Scots, was executed in 1587. (12 marks)'}),

lesson(T, 'elizabeth.spain', 'Relations with Spain and the privateers', ['B4 2.2'], [
  ['Political rivalry', 'Philip II of Spain had been Mary I\'s husband and at first wanted good relations. But he ruled the Netherlands, just across the Channel, where Protestant rebels rose against him from 1566. A large Spanish army there was a threat to England, and English help to the rebels angered Philip.'],
  ['Religious rivalry', 'Philip saw himself as the defender of the Catholic Church. As England became more firmly Protestant, and English Catholics plotted with Spanish support, religion turned rivalry into hostility.'],
  ['Commercial rivalry', 'Spain claimed the trade of the Americas for itself and grew rich from silver. English merchants such as John Hawkins tried to break into the trade, including the trade in enslaved Africans. In 1568 Spanish ships attacked Hawkins\'s fleet at San Juan de Ulúa, and English sailors saw this as treachery.'],
  ['Privateers and Drake', 'Privateers were private ships licensed to attack enemy shipping. Francis Drake raided Spanish ports and treasure ships, including Nombre de Dios in Panama (1572–73), and returned from his voyage round the world in 1580 with a huge cargo of Spanish treasure. Elizabeth knighted him aboard the Golden Hind in 1581: Philip saw this as approval of piracy.'],
], view.factors('Why did relations with Spain get worse?', [
  ['Political', 'Spanish army in the Netherlands; English help to Dutch rebels'],
  ['Religious', 'Philip as defender of Catholicism; Spanish backing for Catholic plots'],
  ['Commercial', 'Spain\'s claim to American trade; English merchants shut out'],
  ['Privateering', 'Drake\'s raids and treasure; his knighthood in 1581'],
]), [
  view.timeline('England and Spain, 1558–84', [
    ['1559', 'Philip II proposes marriage to Elizabeth; she declines'],
    ['1566', 'Revolt begins in the Spanish Netherlands'],
    ['1568', 'Hawkins\'s fleet attacked at San Juan de Ulúa'],
    ['1572–73', 'Drake raids Nombre de Dios and seizes silver'],
    ['1577–80', 'Drake sails round the world'],
    ['1581', 'Elizabeth knights Drake on the Golden Hind'],
    ['1584', 'Spanish ambassador expelled after the Throckmorton plot'],
  ]),
  view.people('People', [
    ['Philip II', 'King of Spain; ruler of the Netherlands; widower of Mary I'],
    ['Francis Drake', 'Privateer and navigator; raided Spanish ports and ships'],
    ['John Hawkins', 'Merchant and slave trader; later rebuilt the navy'],
    ['Elizabeth I', 'Backed privateers secretly and took a share of their profits'],
  ]),
  view.source('A source type: a Spanish ambassador\'s report to Philip II', 'Letters from the Spanish ambassador in London reporting on English actions such as Drake\'s return and the queen\'s reaction.', 'Useful for how Spain saw England\'s behaviour; written by an opponent for his king, so it may exaggerate English hostility.'),
], [
  ['Why did the revolt in the Netherlands worry England?', ['It brought a large Spanish army close to the English coast', 'It meant Spain could no longer trade with England at all', 'It made Philip II the ruler of Scotland as well'], 0, 'The Netherlands were a short crossing from England.'],
  ['What were privateers?', ['Private ships licensed to attack enemy shipping', 'Royal warships owned and crewed by the Crown', 'Merchants who traded legally with Spain'], 0, 'They were private investors, not the royal navy.'],
  ['Exam skill · Explain a consequence. Which answer explains a consequence of Drake\'s voyages?', ['His raids made Philip II angrier, because Elizabeth rewarded him instead of punishing piracy.', 'Drake made several voyages to the Americas and became very famous and rich in England.', 'Drake sailed on the Golden Hind and was then knighted by Elizabeth in the year 1581.'], 0, 'A consequence says what happened because of the event, and why.'],
  ['Why was the attack at San Juan de Ulúa important to English sailors?', ['They saw it as Spanish treachery and wanted revenge', 'It gave England control of the Spanish silver mines', 'It ended the English trade in enslaved people'], 0, 'Drake, who was there, became a determined enemy of Spain.'],
], [
  Q('spain.p1', 'Who was King of Spain throughout this period?', ['Philip II', 'Charles V', 'Ferdinand II'], 0, 'Philip reigned from 1556 to 1598.', 'rivalry'),
  Q('spain.p2', 'Where did a Protestant revolt against Spain begin in 1566?', ['The Netherlands', 'Portugal and the Azores', 'Southern Ireland'], 0, 'The Dutch Revolt kept a Spanish army near England.', 'rivalry'),
  Q('spain.p3', 'Which merchant\'s fleet was attacked at San Juan de Ulúa?', ['John Hawkins', 'Walter Raleigh', 'Humphrey Gilbert'], 0, 'Drake was also on that voyage.', 'trade'),
  Q('spain.p4', 'In which year was Drake knighted?', ['1581', '1572', '1588'], 0, 'Elizabeth knighted him on board the Golden Hind.', 'privateers'),
  Q('spain.p5', 'Why did Spain object to English trade in the Americas?', ['Spain claimed that trade for itself', 'England had banned trade with Spain', 'Spain was Protestant and England Catholic'], 0, 'Spain treated American trade as its own monopoly.', 'trade'),
], [
  Q('spain.c1', 'What was Philip II\'s link to England before 1558?', ['He was married to Mary I', 'He was Elizabeth\'s brother-in-law through Anne Boleyn', 'He had been born in London'], 0, 'He had been Mary I\'s husband.', 'rivalry'),
  Q('spain.c2', 'Which raid in 1572–73 brought Drake Spanish silver?', ['Nombre de Dios in Panama', 'Cadiz in southern Spain', 'Lisbon in Portugal'], 0, 'Nombre de Dios was where silver was gathered for shipment.', 'privateers'),
  Q('spain.c3', 'How did Elizabeth benefit from privateering?', ['She invested and took a share of the profits', 'She received a yearly payment from Philip II', 'She was paid a fee by the Dutch rebel leaders'], 0, 'Privateering made money for the Crown without open war.', 'privateers'),
  Q('spain.c4', 'Why did religion make relations with Spain worse?', ['Philip saw himself as the defender of Catholicism against Protestant England', 'Spain had become Protestant in the 1570s under Philip II', 'England had sent Protestant missionaries to convert Spain'], 0, 'Religious difference turned rivalry into hostility.', 'rivalry'),
  Q('spain.c5', 'What was the significance of Drake\'s knighthood in 1581?', ['It showed Philip that Elizabeth approved of attacks on Spain', 'It ended English privateering against Spain for good', 'It made Drake Lord Admiral of the fleet against Spain'], 0, 'Philip took it as royal support for piracy.', 'privateers'),
  Q('spain.c6', 'When did Drake sail round the world?', ['1577–80', '1558–61', '1588–91'], 0, 'He returned in 1580 with great treasure.', 'privateers'),
  Q('spain.c7', 'Which trade did Hawkins try to break into?', ['The trade in enslaved Africans to the Americas', 'The spice trade with India and the East Indies', 'The wool and cloth trade with Flanders and France'], 0, 'His voyages carried enslaved Africans to Spanish colonies.', 'trade'),
  Q('spain.c8', 'Why was English help for the Dutch rebels risky?', ['It could provoke open war with Spain', 'It cost England its wool trade with France', 'It angered the Pope more than Spain'], 0, 'Philip saw it as interference in his own lands.', 'rivalry'),
], {exam: 'Describe two features of relations between England and Spain in the years 1569–84. (4 marks)'}),

lesson(T, 'elizabeth.war', 'The outbreak of war with Spain, 1585–88', ['B4 2.3'], [
  ['Why relations broke down', 'In 1584 the Dutch rebel leader, William of Orange, was assassinated, and Spain allied with the French Catholic League. The Dutch revolt looked close to defeat, which would leave a powerful Spanish army facing England across a short stretch of sea. Elizabeth decided she had to act.'],
  ['The Treaty of Nonsuch, 1585', 'Elizabeth agreed to pay for an English army of about 7,000 men to help the Dutch rebels, commanded by Robert Dudley, Earl of Leicester. This was open, direct involvement: in effect, England and Spain were now at war.'],
  ['Robert Dudley in the Netherlands', 'Dudley accepted the title of Governor-General of the Netherlands in 1586 without the queen\'s permission, which made it look as if England claimed the country; Elizabeth was furious. His campaign achieved little, his army was short of money and supplies, and he was recalled in 1587.'],
  ['Singeing the King of Spain\'s beard', 'In April 1587 Drake attacked Cadiz harbour, destroying many ships and a large store of supplies, including the seasoned wood for barrels. The raid delayed the Armada by about a year, giving England more time to prepare.'],
], view.factors('Why did war break out in 1585?', [
  ['Spanish success', 'the Dutch revolt was close to collapse after 1584'],
  ['The French Catholic League', 'Spain\'s new ally made France no counterweight'],
  ['English security', 'a Spanish army across the Channel threatened invasion'],
  ['Religion and plots', 'Spanish support for plots against Elizabeth'],
]), [
  view.timeline('Into war, 1584–88', [
    ['1584', 'William of Orange assassinated; Spain allies with the French Catholic League'],
    ['1585', 'Treaty of Nonsuch: England sends an army to the Netherlands'],
    ['1586', 'Dudley accepts the title Governor-General without permission'],
    ['1587', 'Mary executed (February); Drake raids Cadiz (April); Dudley recalled'],
    ['1588', 'The Armada sails'],
  ]),
  view.people('People', [
    ['Robert Dudley, Earl of Leicester', 'Elizabeth\'s favourite; led the English army in the Netherlands'],
    ['William of Orange', 'Leader of the Dutch revolt; assassinated in 1584'],
    ['Duke of Parma', 'Commander of the Spanish army in the Netherlands'],
    ['Francis Drake', 'Led the raid on Cadiz in 1587'],
  ]),
  view.source('A document type: the Treaty of Nonsuch, 1585', 'An agreement between Elizabeth and the Dutch rebels setting out the English troops and money she would provide, with Dudley as commander.', 'Shows what England committed to; it does not show how well the campaign went or what Elizabeth privately intended.'),
], [
  ['Why did the assassination of William of Orange matter to England?', ['It left the Dutch revolt close to defeat, with Spain\'s army facing England', 'It gave the Dutch throne to Elizabeth by inheritance through her mother', 'It ended Spain\'s new alliance with the French Catholic League in 1584'], 0, 'England feared being next.'],
  ['Why was Elizabeth angry with Robert Dudley in 1586?', ['He accepted the title Governor-General without her permission', 'He made peace with Spain without asking the queen or the Council', 'He refused to take the English army to the Netherlands at all'], 0, 'The title suggested England was claiming the Netherlands.'],
  ['Exam skill · Explain why. Which sentence explains the importance of the Cadiz raid?', ['Destroying supplies delayed the Armada by about a year, so England had longer to prepare.', 'Drake attacked Cadiz in April 1587 with a fleet of English ships and caused damage.', 'The raid on Cadiz was called "singeing the King of Spain\'s beard" by people at the time.'], 0, 'Explanation links the event to its effect.'],
  ['What did the Treaty of Nonsuch commit England to?', ['Paying for an English army to help the Dutch rebels', 'Handing Calais back to the Dutch in return for trade', 'Marrying Elizabeth to a Dutch prince'], 0, 'It was direct involvement in the war.'],
], [
  Q('war.p1', 'Who was assassinated in 1584?', ['William of Orange', 'The Duke of Parma', 'Robert Dudley'], 0, 'The Dutch rebel leader was shot in Delft.', 'causes'),
  Q('war.p2', 'Which treaty of 1585 sent English troops to the Netherlands?', ['The Treaty of Nonsuch', 'The Treaty of Edinburgh', 'The Treaty of Joinville'], 0, 'Joinville was the Spanish–French Catholic alliance.', 'nonsuch'),
  Q('war.p3', 'Who commanded the English army in the Netherlands?', ['Robert Dudley, Earl of Leicester', 'Sir Francis Drake, the Vice Admiral', 'William Cecil, Lord Burghley'], 0, 'Leicester led the expedition from 1585.', 'dudley'),
  Q('war.p4', 'What did Drake destroy at Cadiz in 1587?', ['Many ships and supplies, including wood for barrels', 'The royal palace and the Spanish treasury', 'The whole Armada fleet as it lay at anchor'], 0, 'The loss of supplies delayed the Armada.', 'cadiz'),
  Q('war.p5', 'How long did the Cadiz raid delay the Armada?', ['About a year', 'About a week', 'Ten years'], 0, 'The Armada sailed in 1588 instead of 1587.', 'cadiz'),
], [
  Q('war.c1', 'Which French group allied with Spain in 1584?', ['The Catholic League', 'The Huguenots', 'The French Parliament'], 0, 'This removed France as a balance to Spain.', 'causes'),
  Q('war.c2', 'About how many soldiers did England send to the Netherlands?', ['About 7,000', 'About 700', 'About 70,000'], 0, 'The treaty provided roughly 7,000 men.', 'nonsuch'),
  Q('war.c3', 'Why was Dudley\'s campaign judged a failure?', ['It achieved little and lacked money and supplies', 'It captured Madrid but could not hold the city', 'It made England lose its last ports in the Netherlands'], 0, 'He was recalled in 1587.', 'dudley'),
  Q('war.c4', 'What was the raid on Cadiz called at the time?', ['Singeing the King of Spain\'s beard', 'The Protestant wind', 'The Enterprise of England by sea'], 0, 'The Enterprise of England was Spain\'s name for the invasion.', 'cadiz'),
  Q('war.c5', 'Why is 1585 seen as the start of war with Spain?', ['England openly sent an army to fight Spain in the Netherlands', 'Spanish soldiers landed in Kent and marched towards London', 'Elizabeth declared war on France and on its Catholic League'], 0, 'Nonsuch meant direct involvement.', 'nonsuch'),
  Q('war.c6', 'Who commanded the Spanish army in the Netherlands?', ['The Duke of Parma', 'The Duke of Medina Sidonia', 'The Duke of Guise'], 0, 'Medina Sidonia later led the Armada fleet.', 'causes'),
  Q('war.c7', 'Which event in February 1587 removed one of Philip\'s reasons to hold back?', ['The execution of Mary, Queen of Scots', 'The death of William Cecil, Lord Burghley', 'The marriage of Elizabeth to the Duke of Anjou'], 0, 'Mary had left her claim to Philip, and he no longer risked putting a queen with French ties on the English throne.', 'causes'),
  Q('war.c8', 'What was the main gain from the raid on Cadiz?', ['Time for England to prepare its defences', 'A large ransom paid by Philip II', 'The capture of the Spanish treasure fleet'], 0, 'The delay helped England.', 'cadiz'),
], {exam: 'Explain why relations between England and Spain broke down in the years 1585–88. (12 marks)'}),

lesson(T, 'elizabeth.armada', 'The Spanish Armada, 1588', ['B4 2.4'], [
  ['The plan', 'Philip\'s "Enterprise of England" planned for a great fleet, commanded by the Duke of Medina Sidonia, to sail up the Channel and meet the Duke of Parma\'s army in the Netherlands. The fleet would then protect Parma\'s barges as they carried his soldiers across to land in Kent.'],
  ['Up the Channel', 'The Armada was sighted off Cornwall in July 1588 and sailed up the Channel in a tight crescent formation that was hard to break. English ships under Lord Howard and Drake attacked it off Plymouth, Portland and the Isle of Wight, but did little damage. The Armada anchored off Calais to wait for Parma.'],
  ['Fireships and Gravelines', 'Parma\'s army was not ready, and Dutch ships blocked his ports. During the night of 28 July the English sent burning fireships towards the anchored fleet. The Spanish cut their anchor cables and scattered. The next day, at the Battle of Gravelines, the English attacked the broken formation at close range.'],
  ['Defeat and the voyage home', 'A strong wind drove the Armada north into the North Sea. It returned to Spain round Scotland and Ireland, where storms wrecked many ships; thousands of men died. England lost no ships to Spanish fire. In August, Elizabeth spoke to her troops at Tilbury, where an invasion was still feared.'],
], view.factors('Why did the English win?', [
  ['English ships', 'faster, more manoeuvrable ships able to choose the range'],
  ['Weapons and gunnery', 'English guns reloaded faster and were used at close range at Gravelines'],
  ['Tactics', 'fireships broke the crescent formation at Calais'],
  ['Spanish mistakes', 'no deep-water port to meet Parma; slow communication; Parma not ready'],
  ['Weather', 'winds drove the fleet north; storms wrecked ships off Scotland and Ireland'],
]), [
  view.timeline('The Armada, 1588', [
    ['May', 'The Armada leaves Lisbon; storms force it into Corunna'],
    ['19 July', 'Sighted off Cornwall'],
    ['21–25 July', 'Fighting off Plymouth, Portland and the Isle of Wight'],
    ['27 July', 'Anchors off Calais'],
    ['28 July', 'English fireships at night'],
    ['29 July', 'Battle of Gravelines'],
    ['August', 'Driven north; Elizabeth at Tilbury; the fleet sails round Scotland'],
  ]),
  view.people('Commanders', [
    ['Duke of Medina Sidonia', 'Commanded the Armada; an able organiser but with little experience at sea'],
    ['Duke of Parma', 'Commanded the Spanish army waiting in the Netherlands'],
    ['Lord Howard of Effingham', 'Lord Admiral; commanded the English fleet'],
    ['Francis Drake', 'Vice Admiral; led part of the English fleet'],
  ]),
  view.source('A source type: a commemorative painting of the Armada', 'Paintings and engravings made in England after 1588 to celebrate the victory.', 'Useful for how the English remembered the victory; made to celebrate, often years later, so they are not accurate records of the fighting.'),
], [
  ['What was the main weakness in Philip\'s plan?', ['The fleet had to meet Parma\'s army without a deep-water port to do it in', 'The fleet had been ordered to land in Scotland rather than in England', 'Parma had no soldiers left anywhere in the Netherlands by the summer of 1588'], 0, 'Joining fleet and army was the hardest part.'],
  ['Why were the fireships so effective?', ['They broke the crescent formation, scattering the fleet before Gravelines', 'They sank most of the Spanish ships while they were in the harbour at Calais', 'They carried English soldiers who boarded and captured the Spanish ships'], 0, 'Few ships burned, but the formation was lost.'],
  ['Exam skill · How far? Which judgement is best supported?', ['English tactics mattered most, because the fireships broke the formation that weather and gunnery then exploited.', 'The English won because they were better than the Spanish in many different ways at sea in 1588.', 'The weather was the only reason, because storms sank every one of the Spanish ships on the way home.'], 0, 'A good judgement weighs factors and explains links between them.'],
  ['How did the Armada return to Spain?', ['North round Scotland and down the west coast of Ireland', 'Back down the English Channel, straight past the English fleet', 'Through the Mediterranean, after sailing round Africa'], 0, 'The winds and the English blocked the Channel route.'],
], [
  Q('arm.p1', 'Who commanded the Armada?', ['The Duke of Medina Sidonia', 'The Duke of Parma', 'Philip II, on board in person'], 0, 'Parma commanded the army, not the fleet.', 'plan'),
  Q('arm.p2', 'Where was the Armada to collect Parma\'s army?', ['The Netherlands', 'Southern Ireland', 'The Scottish lowlands'], 0, 'Parma\'s troops would cross to Kent.', 'plan'),
  Q('arm.p3', 'What formation did the Armada use in the Channel?', ['A crescent', 'A single line', 'Small scattered groups'], 0, 'The crescent protected the slower ships.', 'events'),
  Q('arm.p4', 'Where did the English use fireships?', ['Off Calais', 'Off Plymouth', 'Off Lisbon'], 0, 'The Armada had anchored off Calais.', 'events'),
  Q('arm.p5', 'Which battle followed the fireships?', ['Gravelines', 'Cadiz', 'Lepanto', 'San Juan de Ulúa'], 0, 'Gravelines was fought the next day.', 'events'),
], [
  Q('arm.c1', 'What did Spain call the planned invasion?', ['The Enterprise of England', 'Singeing the King\'s beard', 'The Holy League'], 0, 'Philip saw it as a religious crusade.', 'plan'),
  Q('arm.c2', 'Who commanded the English fleet?', ['Lord Howard of Effingham', 'Robert Dudley, Earl of Leicester', 'Sir Francis Walsingham'], 0, 'Drake was his vice admiral.', 'events'),
  Q('arm.c3', 'Why could Parma not join the Armada at Calais?', ['His army was not ready and Dutch ships blocked his ports', 'He had been killed in the earlier fighting off Plymouth', 'He had already sailed to Ireland ahead of the main fleet'], 0, 'The two forces never met.', 'events'),
  Q('arm.c4', 'What advantage did English ships have?', ['They were faster and more manoeuvrable', 'They carried far more soldiers on board', 'They were much larger and heavier ships'], 0, 'Speed let them choose when and where to fight.', 'victory'),
  Q('arm.c5', 'Where did many Armada ships wreck?', ['Off Scotland and Ireland', 'In the Thames estuary near London', 'Off the coast of Kent and Sussex'], 0, 'Storms on the long voyage home caused most losses.', 'victory'),
  Q('arm.c6', 'Where did Elizabeth address her troops in August 1588?', ['Tilbury', 'Greenwich', 'Dover Castle'], 0, 'An invasion was still feared.', 'events'),
  Q('arm.c7', 'Which was a Spanish mistake?', ['Planning to meet an army without a deep-water port', 'Sailing in the middle of winter from Lisbon', 'Leaving Medina Sidonia behind in Spain in 1588'], 0, 'The plan depended on a meeting that was very hard to arrange.', 'victory'),
  Q('arm.c8', 'How many English ships were lost to Spanish attack?', ['None', 'About half the fleet', 'About thirty'], 0, 'English losses came from disease, not Spanish guns.', 'victory'),
], {exam: '"The main reason for the defeat of the Spanish Armada was the weather." How far do you agree? (16 marks)'}),
];
