// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 2 British depth study, Option B4: Early Elizabethan
// England, 1558–88. Key topic 1: Queen, government and religion, 1558–69 (specification 1.1–1.4).
// All teaching text and questions are original. Documents are described by type, author, date and
// content; no quotation is invented or attributed to a real person.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

export const elizabethTopic1 = {id: 'history.elizabeth.kt1', unit: 'B4', title: 'Queen, government and religion, 1558–69', paper: 'Paper 2 · British depth study'};
const T = elizabethTopic1.id;

export const elizabethLessons1 = [
lesson(T, 'elizabeth.accession', 'England in 1558 and the new queen', ['B4 1.1'], [
  ['England in 1558', 'About three million people lived in England, most of them in the countryside. Society was a hierarchy: the nobility and gentry owned most land and held local power; yeomen farmed their own land; tenant farmers and labourers worked for others; vagrants had no settled place. In towns, merchants and professionals sat above craftsmen and unskilled workers.'],
  ['How England was governed', 'The monarch ruled in person. The Court surrounded the queen and was where nobles competed for favour. The Privy Council of about twenty advisers met almost daily; William Cecil became Secretary of State. Parliament met only when the monarch called it and was needed to pass laws and grant taxes. In the counties, Lord Lieutenants raised the militia and Justices of the Peace kept order.'],
  ['A queen with questions over her', 'Elizabeth was 25 and well educated, but her position was weak. Many Catholics believed her father\'s marriage to Anne Boleyn was invalid, which made her illegitimate. People expected a woman to marry and be guided by a husband, yet a foreign husband might drag England into his wars and an English one might split the nobility.'],
  ['Problems she inherited', 'The Crown was about £300,000 in debt after Mary I\'s war with France, which had also lost Calais in 1558. Religion divided the country after the changes of Henry VIII, Edward VI and Mary I. France was allied with Scotland, and Mary, Queen of Scots, married to the French heir, had her own claim to the English throne.'],
], view.factors('Problems in 1558', [
  ['Legitimacy', 'Catholics saw her parents\' marriage as invalid'],
  ['Gender and marriage', 'expected to marry; any choice of husband carried risks'],
  ['Finance', 'Crown debt of about £300,000'],
  ['Religion', 'a country divided after three changes of official religion'],
  ['France and Scotland', 'the "Auld Alliance" and Mary, Queen of Scots\' claim'],
]), [
  view.timeline('Elizabeth\'s route to the throne', [
    ['1533', 'Born to Henry VIII and Anne Boleyn'],
    ['1554', 'Held in the Tower of London after Wyatt\'s rebellion against Mary I'],
    ['1558', 'Calais lost to France (January); Mary I dies and Elizabeth becomes queen (17 November)'],
    ['1559', 'Crowned (January); Treaty of Cateau-Cambrésis ends the war with France'],
  ]),
  view.people('Government in 1558', [
    ['The Court', 'Nobles, advisers and servants around the queen; the route to patronage and power'],
    ['Privy Council', 'About twenty leading advisers; advised the queen and ran day-to-day government'],
    ['Parliament', 'Lords and Commons; called by the monarch; passed laws and granted taxation'],
    ['Lord Lieutenants and JPs', 'Ran the counties: the militia, and local law and order'],
  ]),
  view.source('A document type: the Privy Council register', 'The minutes the Council kept of its meetings, decisions and letters.', 'Useful for what the government decided and worried about day to day; it records decisions, not the private views of the queen or of ordinary people.'),
], [
  ['Which institution could refuse to grant the queen new taxes?', ['Parliament', 'The Privy Council', 'The Court'], 0, 'Parliament had to consent to taxation; the Council only advised.'],
  ['Why did some Catholics say Elizabeth was illegitimate?', ['They did not accept her father\'s marriage to Anne Boleyn', 'She had been born in France while her mother was in exile', 'She had been named after Henry VIII\'s first wife, Catherine'], 0, 'The Catholic Church never recognised the annulment of Henry\'s first marriage.'],
  ['Exam skill · Describe a feature. Which answer gives a feature AND a supporting detail?', ['The Crown was in debt: it owed about £300,000, partly from Mary I\'s war with France.', 'Elizabeth had many problems when she became queen, and money and religion were some of them.', 'Money was a big problem for Elizabeth in 1558, which made being queen very hard for her.'], 0, 'A 2-mark feature names something specific and adds a detail that develops it.'],
  ['Which threat came from England\'s northern border?', ['Scotland, allied with France', 'Spain, through the Netherlands', 'Ireland, through Wales'], 0, 'The "Auld Alliance" linked Scotland and France; French troops were in Scotland in 1559.'],
], [
  Q('acc.p1', 'Who did Elizabeth appoint as her Secretary of State in 1558?', ['William Cecil', 'Robert Dudley', 'Francis Walsingham'], 0, 'Cecil was her chief minister from the start of the reign.', 'government'),
  Q('acc.p2', 'Which group kept law and order in each county?', ['Justices of the Peace', 'Privy Councillors', 'Members of Parliament'], 0, 'JPs were local gentry appointed to keep order.', 'government'),
  Q('acc.p3', 'Why was marriage a problem for Elizabeth?', ['A foreign husband risked war; an English one risked splitting the nobles', 'The law forbade a reigning queen from marrying a foreign prince', 'Parliament had already agreed a marriage to a French duke for her'], 0, 'Each possible husband carried a political risk.', 'marriage'),
  Q('acc.p4', 'What did England lose to France in January 1558?', ['Calais', 'The Isle of Wight', 'Boulogne and Normandy'], 0, 'Calais, England\'s last possession in France, fell under Mary I.', 'france'),
  Q('acc.p5', 'Roughly how did most people in England earn their living in 1558?', ['Farming and work on the land', 'Trade in large cities', 'Making cloth in factories'], 0, 'England was overwhelmingly rural; factories did not exist.', 'society'),
], [
  Q('acc.c1', 'Which body met only when the monarch called it?', ['Parliament', 'The Court', 'The Privy Council'], 0, 'Parliament had no fixed sittings; the monarch summoned and dismissed it.', 'government'),
  Q('acc.c2', 'Who raised the militia in a county?', ['The Lord Lieutenant', 'The Archbishop of Canterbury', 'The Secretary of State'], 0, 'Lord Lieutenants were responsible for county defence.', 'government'),
  Q('acc.c3', 'About how large was the Crown\'s debt in 1558?', ['£300,000', '£3,000', '£30 million'], 0, 'The usual estimate is about £300,000, more than a year\'s ordinary income.', 'finance'),
  Q('acc.c4', 'Why was Mary, Queen of Scots, a threat in 1558?', ['She had a claim to the English throne and was married to the heir of France', 'She was Elizabeth\'s named heir and controlled the English Privy Council', 'She was the leader of the English Puritans who opposed the settlement'], 0, 'Her Tudor descent and French marriage combined two dangers.', 'france'),
  Q('acc.c5', 'Which statement about Elizabeth in 1558 is accurate?', ['She was 25 and well educated', 'She had ruled Scotland before', 'She had already married Philip II'], 0, 'She was highly educated, with several languages.', 'queen'),
  Q('acc.c6', 'Which group sat between the gentry and labourers in the countryside?', ['Yeomen', 'Vagrants', 'Merchants'], 0, 'Yeomen farmed their own land, below the gentry.', 'society'),
  Q('acc.c7', 'Why was being a woman seen as a weakness for a ruler in 1558?', ['Most people expected a woman to be guided by a husband, not to rule alone', 'The law said a woman could not inherit the throne without Parliament\'s vote', 'Parliament had refused to meet while a woman was on the throne'], 0, 'Contemporary attitudes, not the law, made her gender a problem.', 'queen'),
  Q('acc.c8', 'Which treaty in 1559 ended England\'s war with France?', ['Cateau-Cambrésis', 'Edinburgh', 'Nonsuch', 'Blois'], 0, 'France kept Calais under the Treaty of Cateau-Cambrésis.', 'france'),
], {exam: 'Describe one feature of the problems Elizabeth faced when she became queen in 1558. (2 marks)'}),

lesson(T, 'elizabeth.settlement', 'The religious settlement of 1559', ['B4 1.2'], [
  ['Why a settlement was needed', 'England had changed official religion three times in twenty-five years. Elizabeth was Protestant, but many of her subjects, especially in the north, and most of Mary I\'s bishops were Catholic. She needed a Church most people would accept, without provoking Catholic powers abroad.'],
  ['The Act of Supremacy, 1559', 'Elizabeth became Supreme Governor of the Church of England, not Supreme Head, a title that was easier for Catholics and for those who thought a woman could not head the Church. Clergy and royal officials had to swear an oath accepting her authority.'],
  ['The Act of Uniformity and the Injunctions', 'Every church had to use the English Book of Common Prayer. Everyone had to attend church on Sundays and holy days, with a fine of 12 pence for missing. The Royal Injunctions told clergy how to run parishes: an English Bible in every church, licensed preachers, special clothing (vestments) for clergy, and loyalty to the queen taught to the people.'],
  ['A middle way', 'The settlement mixed Protestant beliefs with Catholic appearances. Services were in English and clergy could marry, but vestments, ornaments and some ceremonies stayed. The communion wording could be read in a Catholic or a Protestant way. Almost all Mary\'s bishops refused the oath and were replaced; most parish clergy accepted it.'],
], view.factors('Protestant and Catholic features', [
  ['Protestant', 'English Bible and English services; clergy could marry; the queen, not the Pope, governed the Church'],
  ['Catholic in appearance', 'vestments, crucifixes and candles allowed; bishops kept; some ceremonies kept'],
  ['Deliberately unclear', 'communion wording open to Catholic and Protestant readings'],
]), [
  view.timeline('Making the settlement', [
    ['1558', 'Elizabeth becomes queen (November)'],
    ['1559', 'Parliament passes the Acts of Supremacy and Uniformity; the Royal Injunctions are issued'],
    ['1559', 'Most of Mary I\'s bishops refuse the oath and are removed; new Protestant bishops appointed'],
    ['1559', 'Visitations: officials check that parishes are following the new rules'],
  ]),
  view.people('Who did what', [
    ['Elizabeth I', 'Wanted a broad Church that kept order; disliked extreme Protestant and Catholic views'],
    ['William Cecil', 'Steered the settlement through Parliament'],
    ['Matthew Parker', 'Became Archbishop of Canterbury in 1559 and enforced the settlement'],
    ['Mary I\'s bishops', 'All but one refused the oath of supremacy and lost their posts'],
  ]),
  view.source('A document type: the Act of Uniformity, 1559', 'A statute passed by Parliament. It set the form of services, required the Book of Common Prayer in every church, and fined anyone who missed church 12 pence each time.', 'Useful for what the law required; not, on its own, evidence of what people actually did in their parishes or believed in private.'),
], [
  ['Why was Elizabeth called "Supreme Governor" rather than "Supreme Head"?', ['It was less offensive to Catholics and to those who doubted a woman could lead the Church', 'Parliament had refused to give any monarch power over the Church again', 'The Pope had offered her the title Governor in return for her support'], 0, 'The change of word made the authority easier to accept without changing her power much.'],
  ['Which feature would most please Catholics?', ['Clergy still wore vestments and some ornaments stayed', 'All services were held in English, not Latin', 'The Pope lost all authority over English churches'], 0, 'Appearance and ceremony stayed familiar.'],
  ['Exam skill · Explain why. Which sentence explains rather than describes?', ['The settlement kept vestments so that Catholics would find services familiar and be less likely to resist.', 'The settlement kept vestments, which were special clothes that the clergy wore during services.', 'There were vestments in the settlement, and also crucifixes and candles in some churches.'], 0, 'Explanation links a feature to a reason or consequence ("so that…").'],
  ['How did people who missed church get punished under the Act of Uniformity?', ['A fine of 12 pence each time', 'Removal from their parish and its land', 'A year in prison for each absence'], 0, 'Recusancy fines began small in 1559 and rose later in the reign.'],
], [
  Q('set.p1', 'What did the Act of Supremacy make Elizabeth?', ['Supreme Governor of the Church of England', 'Supreme Head of the Church, with the power to lead services', 'Archbishop of Canterbury and head of the bishops'], 0, 'She governed the Church; she was not a priest.', 'supremacy'),
  Q('set.p2', 'Which book had to be used in every church?', ['The Book of Common Prayer', 'The Latin Mass book', 'The Book of Martyrs'], 0, 'The Act of Uniformity required the English prayer book.', 'uniformity'),
  Q('set.p3', 'Who became Archbishop of Canterbury in 1559?', ['Matthew Parker', 'Thomas Cranmer', 'Edmund Campion'], 0, 'Parker enforced the settlement; Cranmer died in 1556.', 'church'),
  Q('set.p4', 'What did the Royal Injunctions do?', ['Gave instructions to clergy on how to run their parishes', 'Set the fine for missing church and the words of every service', 'Made Elizabeth the Supreme Governor of the Church'], 0, 'The Injunctions reinforced the Acts at parish level.', 'injunctions'),
  Q('set.p5', 'Which was a Protestant feature of the settlement?', ['Services in English', 'Keeping the Pope as head of the Church', 'Banning the English Bible'], 0, 'English services and Bibles were Protestant priorities.', 'middle-way'),
], [
  Q('set.c1', 'Which officials had to swear the oath of supremacy?', ['Clergy and royal officials', 'Every child over seven', 'Only foreign ambassadors'], 0, 'The oath tested loyalty among those who served Church and Crown.', 'supremacy'),
  Q('set.c2', 'How did Mary I\'s bishops respond to the settlement?', ['All but one refused the oath and were removed', 'All of them accepted it and kept their dioceses', 'Most accepted it after Parliament threatened them'], 0, 'Elizabeth appointed new bishops to replace them.', 'church'),
  Q('set.c3', 'How did most parish clergy respond?', ['Most accepted the settlement and stayed in post', 'Most refused and were replaced by Puritans', 'Most left England to serve in Catholic Europe'], 0, 'Only a few hundred parish clergy lost their posts.', 'church'),
  Q('set.c4', 'Why was the communion wording important?', ['It could be read in a Catholic or a Protestant way', 'It was said only in Latin, as in Mary I\'s reign', 'It followed the strict Puritan wording word for word'], 0, 'The ambiguity helped people of different views accept it.', 'middle-way'),
  Q('set.c5', 'What was the fine for missing church under the Act of Uniformity?', ['12 pence', '£20', '£1,000'], 0, 'The fine was 12 pence (1 shilling) per absence.', 'uniformity'),
  Q('set.c6', 'Which feature kept a Catholic appearance?', ['Vestments worn by clergy', 'Clergy allowed to marry', 'An English Bible in every church'], 0, 'Vestments were associated with the Catholic past.', 'middle-way'),
  Q('set.c7', 'What was a "visitation"?', ['An inspection of parishes to check they followed the rules', 'A royal progress in which the queen visited her nobles', 'A meeting of bishops to write the new prayer book'], 0, 'Visitations enforced the settlement locally.', 'injunctions'),
  Q('set.c8', 'Why did Elizabeth avoid an extreme settlement?', ['To keep order at home and avoid provoking Catholic powers abroad', 'Because she had no strong religious views of her own at all', 'Because the Pope had approved the settlement in advance'], 0, 'A broad settlement reduced the risk of revolt and foreign attack.', 'middle-way'),
], {exam: 'Explain why Elizabeth\'s religious settlement of 1559 included features that would appeal to Catholics. (12 marks)'}),

lesson(T, 'elizabeth.challenges', 'Puritan and Catholic challenges', ['B4 1.3'], [
  ['The Puritan challenge', 'Puritans were committed Protestants who thought the settlement had not gone far enough. They wanted plain churches and plain clothing for clergy, and objected to crucifixes and vestments. Some held positions as bishops, in Parliament and at Court, which made them influential.'],
  ['Crucifixes and vestments', 'Elizabeth kept a silver crucifix in her chapel and wanted crucifixes in churches; some Puritan bishops threatened to resign and she backed down. In 1566 Archbishop Parker\'s Book of Advertisements insisted on vestments; 37 London clergy who refused lost their posts. Elizabeth showed she would not be pushed further.'],
  ['The Catholic challenge', 'Many Catholics, especially in the north and among some nobles, outwardly conformed while keeping their beliefs. Some nobles, such as the earls of Northumberland and Westmorland, resented the new Protestant advisers at Court. The danger grew if Catholic nobles, the Papacy and foreign powers acted together.'],
  ['The Papacy and foreign powers', 'At first the Pope hoped Elizabeth might be won back. In 1566 he instructed Catholics not to attend Church of England services. The Council of Trent had restated Catholic teaching and launched the Counter-Reformation. Spain and France were Catholic powers, but in the 1560s both were distracted by other problems.'],
], view.factors('How big was each challenge in the 1560s?', [
  ['Puritans', 'influential and vocal, but loyal to the queen; argued about clothing and ornaments'],
  ['Catholic nobility', 'powerful in the north; resentful but had not yet rebelled'],
  ['The Papacy', 'growing pressure: Catholics told not to attend services (1566)'],
  ['Foreign powers', 'Spain and France were Catholic but distracted in the 1560s'],
]), [
  view.timeline('Challenges, 1559–69', [
    ['1559', 'Settlement passed; crucifix dispute with Puritan bishops follows'],
    ['1563', 'The Council of Trent closes, having restated Catholic doctrine'],
    ['1566', 'Book of Advertisements; 37 London clergy dismissed for refusing vestments'],
    ['1566', 'The Pope tells Catholics not to attend Protestant services'],
    ['1568', 'Mary, Queen of Scots, arrives in England'],
  ]),
  view.people('Groups and people', [
    ['Puritans', 'Wanted a "purer" Church without Catholic ornaments and clothing'],
    ['Matthew Parker', 'Archbishop who issued the Book of Advertisements in 1566'],
    ['Northern earls', 'Northumberland and Westmorland: Catholic nobles losing influence at Court'],
    ['The Pope', 'Led the Counter-Reformation; by 1566 was ordering Catholics not to conform'],
  ]),
  view.source('A document type: the Book of Advertisements, 1566', 'Rules issued by Archbishop Parker setting out how services were to be run and what clergy must wear.', 'Useful for what the Church required; the dismissals that followed show it was enforced, but not how many clergy privately disagreed.'),
], [
  ['Why were Puritans a serious challenge despite being Protestant?', ['They held positions as bishops, in Parliament and at Court', 'They had promises of support from the Spanish army', 'They wanted to restore the Pope\'s authority in England'], 0, 'Their influence inside the establishment gave them weight.'],
  ['What did the 1566 vestment controversy show?', ['Elizabeth would enforce the settlement even against Protestants', 'Puritans had now won control of the Church of England', 'Vestments were removed from all English churches in 1566'], 0, 'Clergy who refused vestments lost their posts.'],
  ['Exam skill · How far? Which judgement is best supported?', ['The Catholic threat was limited in the 1560s because foreign powers were distracted, but it was growing after 1566.', 'Catholics were a big threat because there were lots of Catholics in England at the time.', 'There was no threat at all, because England had become a Protestant country in 1559.'], 0, 'A supported judgement weighs evidence and recognises change over time.'],
  ['Why did the Pope\'s 1566 instruction matter?', ['It made it harder for Catholics to conform outwardly', 'It made Elizabeth the Supreme Head of the Church', 'It called on Spain to invade England straight away'], 0, 'Catholics now faced a choice between their Church and the law.'],
], [
  Q('chal.p1', 'What did Puritans object to?', ['Crucifixes and vestments', 'Services held in English', 'The use of the English Bible'], 0, 'They saw these as Catholic survivals.', 'puritans'),
  Q('chal.p2', 'What happened to 37 London clergy in 1566?', ['They lost their posts for refusing to wear vestments', 'They were promoted to be bishops for supporting the queen', 'They were fined 12 pence for missing services'], 0, 'Parker\'s Book of Advertisements was enforced.', 'puritans'),
  Q('chal.p3', 'Which two earls led northern Catholic resentment?', ['Northumberland and Westmorland', 'Leicester and Essex', 'Norfolk and Suffolk only'], 0, 'They resented their loss of influence to new Protestant advisers.', 'catholics'),
  Q('chal.p4', 'What was the Counter-Reformation?', ['The Catholic Church\'s effort to reform itself and win back Protestants', 'A Puritan campaign in Parliament to remove vestments from churches', 'A set of English laws passed to punish Catholic priests and recusants'], 0, 'The Council of Trent was central to it.', 'papacy'),
  Q('chal.p5', 'Why did the Catholic powers not act against Elizabeth in the 1560s?', ['Spain and France were busy with their own problems', 'They had signed treaties promising never to attack England', 'Both had become Protestant after the Council of Trent'], 0, 'Distraction, not friendship, kept them back.', 'foreign'),
], [
  Q('chal.c1', 'Where did Elizabeth keep a crucifix that angered Puritans?', ['In her private chapel', 'In the House of Commons', 'In St Paul\'s Cathedral'], 0, 'Her chapel signalled her own preference for ceremony.', 'puritans'),
  Q('chal.c2', 'Who issued the Book of Advertisements?', ['Archbishop Matthew Parker', 'Pope Pius V', 'William Cecil', 'Robert Dudley, Earl of Leicester'], 0, 'It set rules for services and clerical dress.', 'puritans'),
  Q('chal.c3', 'What did many Catholics do in the 1560s?', ['Attended church outwardly while keeping their beliefs', 'Moved abroad to Spain and France in large numbers', 'Rebelled openly in the north every year'], 0, 'Outward conformity was common before 1566.', 'catholics'),
  Q('chal.c4', 'What did the Pope instruct in 1566?', ['Catholics should not attend Church of England services', 'Catholics should obey Elizabeth in all matters of religion', 'Catholics should leave England and settle in Spain'], 0, 'It increased pressure on English Catholics.', 'papacy'),
  Q('chal.c5', 'Why did the Puritan challenge not become a revolt?', ['Puritans were loyal to the queen and wanted reform, not rebellion', 'There were too few Puritans to matter outside London', 'Elizabeth gave the Puritans everything they asked for'], 0, 'Their challenge was through argument and influence.', 'puritans'),
  Q('chal.c6', 'Which combination made the Catholic threat most dangerous?', ['Catholic nobles, the Papacy and foreign powers acting together', 'Puritan bishops and Members of Parliament working together', 'The Privy Council and the Lord Lieutenants turning against her'], 0, 'Separately each was manageable; together they were not.', 'catholics'),
  Q('chal.c7', 'What did the Council of Trent do?', ['Restated Catholic doctrine', 'Made Elizabeth Supreme Governor', 'Created the Book of Common Prayer'], 0, 'It defined Catholic teaching against Protestant ideas.', 'papacy'),
  Q('chal.c8', 'Why did northern nobles resent the new regime?', ['They were losing influence to new Protestant advisers', 'They had been ordered to give their lands to the Church', 'They had been forced to pay the Crown\'s war debts'], 0, 'Religion and loss of power combined.', 'catholics'),
], {exam: '"The Puritans were the main religious threat to Elizabeth in the years 1558–69." How far do you agree? (16 marks)'}),

lesson(T, 'elizabeth.mary', 'The problem of Mary, Queen of Scots', ['B4 1.4'], [
  ['Mary\'s claim', 'Mary was the granddaughter of Margaret Tudor, Henry VIII\'s elder sister. To Catholics who thought Elizabeth illegitimate, Mary was the rightful queen of England. Even to others she was the likely heir while Elizabeth had no children, which made her a natural focus for plots.'],
  ['From Scotland to England', 'Mary returned to Scotland in 1561 after her French husband died. In 1567 her second husband, Lord Darnley, was murdered, and she then married the Earl of Bothwell, widely suspected of the killing. Scottish lords rebelled, forced her to abdicate in favour of her baby son, James, and after her defeat at Langside she fled to England in May 1568.'],
  ['Elizabeth\'s dilemma', 'Each option was dangerous. Restoring Mary would anger Scottish Protestants and might bring back French influence. Handing her to the Scottish lords would mean helping subjects overthrow a queen. Letting her go to France or Spain could start an invasion. Keeping her in England left a Catholic claimant close at hand.'],
  ['The inquiry of 1568–69', 'An inquiry at York and then Westminster considered whether Mary was involved in Darnley\'s murder. The Scottish lords produced the "casket letters", which they said were Mary\'s. The inquiry reached no verdict, which allowed Elizabeth to keep Mary in captivity without declaring her guilty.'],
], view.factors('Elizabeth\'s options in 1568', [
  ['Restore her in Scotland', 'Scottish Protestants would resist; French influence might return'],
  ['Hand her to the Scottish lords', 'would support rebels against a lawful queen'],
  ['Let her leave for France or Spain', 'a Catholic power could use her claim to invade'],
  ['Keep her in England', 'a Catholic claimant held close to the throne: chosen'],
]), [
  view.timeline('Mary, Queen of Scots, to 1569', [
    ['1542', 'Becomes Queen of Scots as a baby'],
    ['1558', 'Marries Francis, heir to the French throne'],
    ['1561', 'Returns to Scotland after Francis dies'],
    ['1567', 'Darnley murdered; Mary marries Bothwell; forced to abdicate'],
    ['1568', 'Defeated at Langside; flees to England (May)'],
    ['1568–69', 'Inquiry at York and Westminster reaches no verdict'],
  ]),
  view.people('People in the crisis', [
    ['Mary, Queen of Scots', 'Catholic; granddaughter of Margaret Tudor; claimant to the English throne'],
    ['Lord Darnley', 'Mary\'s second husband, murdered in 1567'],
    ['Earl of Bothwell', 'Suspected of Darnley\'s murder; married Mary in 1567'],
    ['James VI', 'Mary\'s baby son, crowned when she abdicated'],
  ]),
  view.source('A source type: the "casket letters"', 'Letters produced by the Scottish lords in 1568, said to be written by Mary, which seemed to link her to Darnley\'s murder.', 'Their usefulness depends on authenticity: the lords who produced them wanted Mary condemned, and the originals are now lost.'),
], [
  ['Why was Mary a threat simply by being in England?', ['She was a Catholic claimant who could become the focus of plots', 'She commanded the army raised by the northern earls in 1568', 'She had already been named Elizabeth\'s heir by Parliament'], 0, 'Her presence gave Catholics an alternative queen.'],
  ['Why did Elizabeth not hand Mary to the Scottish lords?', ['It would mean supporting rebels against a lawful monarch', 'The Scottish lords were Catholic and loyal to Spain', 'Mary had already agreed to return to France'], 0, 'Elizabeth disliked encouraging subjects to depose rulers.'],
  ['Exam skill · Source provenance. Why must the casket letters be used carefully?', ['They were produced by Mary\'s enemies and the originals are lost', 'They were written in Latin, which few people could read', 'They were written by Elizabeth to trap Mary'], 0, 'Who made a source, and why, affects how far it can be trusted.'],
  ['What did the 1568–69 inquiry decide?', ['It reached no verdict, so Mary stayed in captivity', 'Mary was found guilty and sent to the Tower', 'Mary was cleared and restored to the Scottish throne'], 0, 'No verdict suited Elizabeth: Mary could be held without being condemned.'],
], [
  Q('mary.p1', 'How was Mary related to the Tudors?', ['Granddaughter of Margaret Tudor, Henry VIII\'s sister', 'Daughter of Henry VIII\'s first marriage', 'Niece of Anne Boleyn through her French mother'], 0, 'Her descent from Margaret Tudor gave her claim.', 'claim'),
  Q('mary.p2', 'Why did Mary flee to England in 1568?', ['She had been defeated at Langside after being forced to abdicate', 'Elizabeth had invited her to come and become her official heir', 'France had expelled her and Scotland would not take her back'], 0, 'Defeat left her nowhere safer to go.', 'flight'),
  Q('mary.p3', 'Who was murdered in 1567?', ['Lord Darnley', 'The Earl of Bothwell', 'William Cecil'], 0, 'Mary\'s second husband was killed at Kirk o\' Field.', 'flight'),
  Q('mary.p4', 'What were the casket letters?', ['Letters said to link Mary to Darnley\'s murder', 'Letters from Elizabeth asking the Pope for support', 'Treaties between France and Scotland'], 0, 'The Scottish lords produced them at the 1568 inquiry.', 'inquiry'),
  Q('mary.p5', 'Which option did Elizabeth choose in 1568?', ['Keep Mary in captivity in England', 'Restore her as Queen of Scots', 'Send her to Spain'], 0, 'Captivity was the least bad option.', 'dilemma'),
], [
  Q('mary.c1', 'To Catholics who thought Elizabeth illegitimate, who was the rightful queen?', ['Mary, Queen of Scots', 'Catherine of Aragon', 'Lady Jane Grey'], 0, 'Mary\'s Tudor descent made her the Catholic claimant.', 'claim'),
  Q('mary.c2', 'Whom did Mary marry in 1567?', ['The Earl of Bothwell', 'Philip II', 'Robert Dudley', 'The Duke of Norfolk'], 0, 'Bothwell was suspected of murdering Darnley.', 'flight'),
  Q('mary.c3', 'Who became King of Scotland when Mary abdicated?', ['Her son James', 'The Earl of Moray', 'Francis II'], 0, 'James VI was a baby; regents ruled for him.', 'flight'),
  Q('mary.c4', 'Where was the inquiry into Mary held?', ['York and then Westminster', 'Paris and then Rome', 'Edinburgh and then Stirling'], 0, 'It moved from York to Westminster in 1568.', 'inquiry'),
  Q('mary.c5', 'Why was letting Mary go to France dangerous?', ['France could use her claim to back an invasion', 'France would make her marry a Protestant prince', 'She would give France her claim to Scotland'], 0, 'A Catholic power holding her claim was a threat.', 'dilemma'),
  Q('mary.c6', 'Why did the inquiry\'s lack of a verdict suit Elizabeth?', ['She could keep Mary captive without condemning a fellow queen', 'It allowed Mary to marry Robert Dudley and settle in England', 'It ended the Catholic threat to Elizabeth for twenty years'], 0, 'It kept her options open.', 'inquiry'),
  Q('mary.c7', 'In which year did Mary arrive in England?', ['1568', '1558', '1587'], 0, 'She crossed the Solway in May 1568.', 'flight'),
  Q('mary.c8', 'Why must the casket letters be treated with caution?', ['Mary\'s enemies produced them and the originals are lost', 'They were only published two hundred years later', 'They were written by Elizabeth\'s secretaries'], 0, 'Provenance affects reliability.', 'inquiry'),
], {exam: 'Explain why Mary, Queen of Scots, was a threat to Elizabeth in the years 1568–69. (12 marks)'}),
];
