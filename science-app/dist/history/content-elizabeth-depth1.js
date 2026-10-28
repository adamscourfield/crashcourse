// Pearson Edexcel GCSE (9–1) History 1HI0, Option B4: Early Elizabethan England, 1558–88.
// Depth lessons for key topic 1 (specification 1.1–1.4). Each follows its subsection's overview lesson
// and answers one narrower question in more detail. All text and questions are original; documents are
// described by type, author, date and content, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.elizabeth.kt1';

export const elizabethDepth1 = [
lesson(T, 'elizabeth.england-1558', 'England in 1558: society and government', ['B4 1.1'], [
  ['A society of ranks', 'Everyone was expected to know their place in a hierarchy believed to be ordained by God. At the top were a few dozen noble families with great estates; below them the gentry, landowners who ran local affairs; then yeomen, who farmed their own land; then tenant farmers, labourers and the poor. In towns, wealthy merchants and professionals such as lawyers sat above craftsmen and apprentices.'],
  ['Town and countryside', 'About nine in ten people lived in villages and worked on the land. London was by far the largest city and was growing fast, drawing people in from the countryside; other towns, such as Norwich and Bristol, were much smaller. Wool and cloth were England\'s most important exports.'],
  ['The monarch and the Court', 'The queen\'s power rested on the royal prerogative: her right to decide on war and peace, call and dismiss Parliament, and grant titles, land and offices. The Court followed her wherever she lived. Nobles competed there for patronage, her gifts of offices and land, which bound them to her and kept them loyal.'],
  ['Councils, Parliament and the counties', 'The Privy Council advised the queen and ran government day to day; William Cecil was her most important minister. Parliament was called only when the queen needed taxes or new laws, and it could not discuss foreign policy or her marriage without permission. In the counties, unpaid Justices of the Peace from the gentry kept order, while Lords Lieutenant raised the local militia.'],
], view.factors('Who held power in 1558?', [
  ['The queen', 'the royal prerogative: war, peace, Parliament, titles and offices'],
  ['The Privy Council', 'advice and day-to-day government; Cecil its leading member'],
  ['Parliament', 'consent to taxation and new laws; called only when needed'],
  ['Local government', 'JPs and Lords Lieutenant from the gentry and nobility'],
]), [
  view.timeline('Government in Elizabeth\'s first year', [
    ['17 Nov 1558', 'Elizabeth becomes queen; Cecil appointed Secretary of State'],
    ['Late 1558', 'A smaller Privy Council chosen, mixing Mary\'s councillors with Elizabeth\'s supporters'],
    ['15 Jan 1559', 'Coronation in Westminster Abbey'],
    ['Jan–May 1559', 'First Parliament: the religious settlement and taxation'],
  ]),
  view.people('People and offices', [
    ['William Cecil', 'Secretary of State; Elizabeth\'s chief minister'],
    ['Justices of the Peace', 'Gentry who tried minor crimes and enforced laws locally'],
    ['Lords Lieutenant', 'Nobles who raised and commanded each county\'s militia'],
    ['Courtiers', 'Nobles at Court seeking the queen\'s patronage'],
  ]),
  view.source('A source type: a Privy Council letter to a county', 'A letter from the Privy Council ordering the Justices of the Peace in one county to enforce a new royal proclamation.', 'Useful for how orders travelled from the centre to the localities; it shows what was ordered, not whether it was obeyed.'),
], [
  ['Why was patronage important to Elizabeth\'s power?', ['Gifts of offices and land bound nobles to the queen and kept them loyal', 'Patronage allowed Parliament to choose the members of the Privy Council', 'It was the main way the Crown raised taxes from the counties each year'], 0, 'Rewards secured loyalty.'],
  ['What limited Parliament\'s power?', ['It met only when called and needed permission to discuss foreign policy or marriage', 'It could be called only by the Pope and the Archbishop of Canterbury together', 'It had no role at all in agreeing to taxation or in passing new laws'], 0, 'The queen controlled when it met and what it discussed.'],
  ['Exam skill · Describe one feature. Which is a valid feature of local government, with supporting detail?', ['Justices of the Peace were unpaid gentry who kept order and enforced laws in their county.', 'Local government in Elizabethan England was very important and very well organised.', 'The Privy Council met in London almost every day to advise Elizabeth on policy.'], 0, 'A feature names something specific and supports it.'],
  ['Why did London grow so quickly?', ['People moved in from the countryside looking for work and opportunity', 'The queen forced every noble family to live in London all year round', 'A law of 1558 banned anyone from living in towns other than London'], 0, 'Migration drove its growth.'],
], [
  Q('eld1.p1', 'What was the royal prerogative?', ['The queen\'s personal powers, such as deciding on war and peace', 'The right of Parliament to choose the next monarch', 'The tax paid by every household to the Crown each year'], 0, 'Powers the monarch held in person.', 'prerogative'),
  Q('eld1.p2', 'Who was Elizabeth\'s chief minister from 1558?', ['William Cecil', 'Robert Dudley', 'Francis Walsingham'], 0, 'He became Secretary of State.', 'privy-council'),
  Q('eld1.p3', 'Roughly what share of people lived in the countryside?', ['About nine in ten', 'About one in ten', 'About half'], 0, 'Most worked on the land.', 'society'),
  Q('eld1.p4', 'Who raised each county\'s militia?', ['The Lord Lieutenant', 'The parish priest', 'The Secretary of State'], 0, 'Usually a leading noble.', 'local-government'),
  Q('eld1.p5', 'What was England\'s most important export?', ['Wool and cloth', 'Silver and gold', 'Spices and silk'], 0, 'The cloth trade was vital.', 'society'),
], [
  Q('eld1.c1', 'Who ranked just below the nobility?', ['The gentry', 'The yeomen', 'The merchants'], 0, 'Landowners who ran local affairs.', 'society'),
  Q('eld1.c2', 'What did yeomen do?', ['Farmed their own land', 'Advised the queen at Court', 'Commanded the navy at sea'], 0, 'Below the gentry.', 'society'),
  Q('eld1.c3', 'When was Parliament called?', ['When the queen needed taxes or laws', 'Every week of the year without fail', 'Only when the Pope asked for it'], 0, 'At the queen\'s choice.', 'parliament'),
  Q('eld1.c4', 'Were Justices of the Peace paid?', ['No, they were unpaid gentry', 'Yes, by the Pope in Rome', 'Yes, by Parliament each month'], 0, 'Office brought status.', 'local-government'),
  Q('eld1.c5', 'What did nobles seek at Court?', ['Patronage from the queen', 'Election to Parliament by vote', 'Training as parish priests'], 0, 'Offices, land and titles.', 'court'),
  Q('eld1.c6', 'What could Parliament not discuss without permission?', ['Foreign policy and the queen\'s marriage', 'New taxes on wool and cloth exports', 'Laws about poverty, vagrancy and begging'], 0, 'Matters of prerogative.', 'parliament'),
  Q('eld1.c7', 'What did the Privy Council do?', ['Advised the queen and ran government', 'Tried criminals in every county', 'Elected the Archbishop each year'], 0, 'About twenty leading men.', 'privy-council'),
  Q('eld1.c8', 'Which was the largest city?', ['London', 'Norwich', 'Bristol'], 0, 'By a very wide margin.', 'society'),
], {exam: 'Describe one feature of Elizabethan government in 1558. (2 marks)'}),

lesson(T, 'elizabeth.virgin-queen', 'The Virgin Queen: legitimacy, gender and marriage', ['B4 1.1'], [
  ['Was she legitimate?', 'Elizabeth was the daughter of Henry VIII and Anne Boleyn. Catholics did not accept Henry\'s divorce from his first wife, so to them the marriage to Anne was invalid and Elizabeth illegitimate. In 1536 Parliament had itself declared her illegitimate, though a later Act restored her place in the succession. Many Catholics believed Mary, Queen of Scots had the better claim.'],
  ['A woman ruler', 'Most people believed women should obey men and were unfit to rule. The only previous queen regnant, Mary I, had been unpopular, and in 1558 the Scottish Protestant John Knox published a pamphlet attacking rule by women. Elizabeth was expected to marry and let a husband guide her.'],
  ['The marriage question', 'Marrying a foreign prince, such as Philip II of Spain, who proposed in 1559, risked making England a junior partner in his wars. Marrying an Englishman risked angering rival nobles; her favourite, Robert Dudley, was distrusted, especially after his wife died in suspicious circumstances in 1560. Parliament petitioned her to marry in 1559, 1563 and 1566, and she told it not to meddle.'],
  ['Character and strengths', 'Elizabeth was highly educated, spoke several languages and had survived danger under Mary I, which made her cautious and skilled at hiding her intentions. She chose able advisers, used her image as a "Virgin Queen" married to her country, and kept suitors interested to win diplomatic advantages without committing herself.'],
], view.factors('Why marriage was a dilemma', [
  ['Foreign husband', 'risk of being drawn into his wars and losing independence'],
  ['English husband', 'risk of jealousy and faction among the nobles'],
  ['Not marrying', 'no direct heir, so an uncertain succession'],
  ['Elizabeth\'s use of it', 'keeping suitors interested to gain diplomatic advantages'],
]), [
  view.timeline('Legitimacy and marriage', [
    ['1533', 'Born to Henry VIII and Anne Boleyn'],
    ['1536', 'Declared illegitimate by Parliament after her mother\'s execution'],
    ['1544', 'A new Succession Act restores her place in the line of succession'],
    ['1559', 'Philip II proposes; Parliament petitions her to marry'],
    ['1560', 'Death of Amy Robsart, Dudley\'s wife, damages his chances'],
    ['1566', 'Parliament presses again; Elizabeth refuses to be told'],
  ]),
  view.people('People', [
    ['Anne Boleyn', 'Elizabeth\'s mother, executed in 1536'],
    ['Philip II of Spain', 'Widower of Mary I who proposed in 1559'],
    ['Robert Dudley', 'Favourite and possible English husband'],
    ['John Knox', 'Scottish Protestant who wrote against rule by women'],
  ]),
  view.source('A source type: a speech recorded in Parliament', 'An account, written down by a member, of Elizabeth\'s reply to Parliament\'s petition that she should marry.', 'Useful for how she presented herself; it may be a polished version of what she said, written up afterwards.'),
], [
  ['Why did Catholics see Elizabeth as illegitimate?', ['They did not accept Henry VIII\'s divorce, so his marriage to Anne Boleyn was invalid', 'Elizabeth had been born in France and so could not inherit the English throne', 'The Pope had crowned Mary, Queen of Scots as Queen of England in 1558'], 0, 'Legitimacy depended on religion.'],
  ['Why was marrying a foreign prince risky?', ['England could be drawn into his wars and lose its independence', 'Foreign princes were banned by law from living in England at all', 'Parliament would refuse to grant any taxes to a married queen'], 0, 'Mary I\'s marriage to Philip showed the danger.'],
  ['Exam skill · Explain why. Which explains why Elizabeth\'s gender made her position harder?', ['Most people believed women were unfit to rule, so she had to prove her authority and was pressed to marry.', 'Elizabeth was a woman, and she was the daughter of King Henry VIII and Anne Boleyn.', 'John Knox was a Scottish Protestant who lived and preached in Geneva and Scotland.'], 0, 'Explanation links the belief to its effect.'],
  ['How did Elizabeth use the marriage question?', ['She kept suitors interested to gain diplomatic advantages without committing herself', 'She married Robert Dudley in secret in 1560 and kept it hidden from Parliament', 'She let Parliament choose her husband to avoid any blame for the decision'], 0, 'Uncertainty could be useful.'],
], [
  Q('eld2.p1', 'Who was Elizabeth\'s mother?', ['Anne Boleyn', 'Catherine of Aragon', 'Jane Seymour'], 0, 'Executed in 1536.', 'legitimacy'),
  Q('eld2.p2', 'Who proposed marriage in 1559?', ['Philip II of Spain', 'Henry II of France', 'Ivan IV of Russia'], 0, 'Mary I\'s widower.', 'marriage'),
  Q('eld2.p3', 'Who was Elizabeth\'s favourite and possible English husband?', ['Robert Dudley', 'William Cecil', 'Thomas Howard'], 0, 'Distrusted by other nobles.', 'marriage'),
  Q('eld2.p4', 'Who wrote against rule by women in 1558?', ['John Knox', 'William Cecil', 'Matthew Parker'], 0, 'A Scottish Protestant.', 'gender'),
  Q('eld2.p5', 'Whom did many Catholics see as the rightful heir?', ['Mary, Queen of Scots', 'Lady Jane Grey', 'Philip II of Spain'], 0, 'Through Margaret Tudor.', 'legitimacy'),
], [
  Q('eld2.c1', 'When did Parliament declare Elizabeth illegitimate?', ['1536', '1558', '1566'], 0, 'After her mother\'s fall.', 'legitimacy'),
  Q('eld2.c2', 'Why was Dudley distrusted after 1560?', ['His wife died in suspicious circumstances', 'He was secretly a Catholic priest in Rome', 'He had fought for Spain against England'], 0, 'Amy Robsart\'s death.', 'marriage'),
  Q('eld2.c3', 'How often did Parliament petition her to marry by 1566?', ['Three times', 'Never at all', 'Every single month'], 0, 'In 1559, 1563 and 1566.', 'marriage'),
  Q('eld2.c4', 'What image did Elizabeth develop?', ['The Virgin Queen', 'The Warrior King', 'The Catholic Queen'], 0, 'Married to her country.', 'character'),
  Q('eld2.c5', 'What was the risk of not marrying?', ['No heir and an uncertain succession', 'An immediate war with Scotland and France', 'The loss of all her lands to Parliament'], 0, 'The succession worried many.', 'marriage'),
  Q('eld2.c6', 'Who was the only previous queen regnant?', ['Mary I', 'Anne Boleyn', 'Margaret Tudor'], 0, 'Her reign was unpopular.', 'gender'),
  Q('eld2.c7', 'Which strength did Elizabeth have?', ['A strong education and caution', 'A large, loyal standing army', 'Strong support from the Pope'], 0, 'She spoke several languages.', 'character'),
  Q('eld2.c8', 'What did Elizabeth tell Parliament about her marriage?', ['Not to meddle in it', 'To choose for her', 'To ask the Pope'], 0, 'It was her prerogative.', 'marriage'),
], {exam: 'Explain why Elizabeth\'s position as queen was insecure in 1558. (12 marks)'}),

lesson(T, 'elizabeth.early-challenges', 'Early challenges: finance, France and Scotland', ['B4 1.1'], [
  ['An empty treasury', 'Elizabeth inherited debts of about £300,000, much of it from Mary I\'s war with France, while the Crown\'s yearly income was not much larger. Money had been borrowed from lenders in Antwerp at high interest, and earlier rulers had debased the coinage, mixing cheaper metals into coins, which pushed up prices.'],
  ['Repairing the finances', 'Elizabeth was careful with money. She cut spending, sold some Crown lands and avoided expensive wars where she could. In 1560–61 the debased coins were called in and replaced with coins of proper silver value, which restored confidence in the currency.'],
  ['The French threat', 'England lost Calais, its last possession in France, in January 1558. The Treaty of Cateau-Cambrésis (1559) ended the war but left Calais in French hands. France was far larger and richer than England, and in 1559 Mary, Queen of Scots became Queen of France as wife of Francis II, joining France and Scotland under one couple.'],
  ['Scotland and the "Auld Alliance"', 'French troops were in Scotland under Mary of Guise, the regent. When Scottish Protestant lords rebelled in 1559–60, Elizabeth sent money, a fleet and later an army to help them. The Treaty of Edinburgh (1560) removed French troops from Scotland. An attempt to regain Calais by occupying Le Havre in 1562–63 failed, and in 1564 Elizabeth gave up the claim.'],
], view.factors('How serious were the early challenges?', [
  ['Finance', 'heavy debt and debased coinage, but repaired by careful spending and recoinage'],
  ['France', 'a powerful enemy that had just taken Calais'],
  ['Scotland', 'French troops on England\'s northern border until 1560'],
  ['Outcome', 'the Treaty of Edinburgh eased the danger; Le Havre showed the limits of English power'],
]), [
  view.timeline('1558–64', [
    ['Jan 1558', 'Calais lost to France'],
    ['Apr 1559', 'Treaty of Cateau-Cambrésis'],
    ['Jul 1559', 'Mary, Queen of Scots becomes Queen of France'],
    ['1560', 'English help for Scottish Protestants; Treaty of Edinburgh'],
    ['1560–61', 'Recoinage restores the value of English money'],
    ['1562–64', 'Le Havre expedition fails; claim to Calais given up'],
  ]),
  view.people('People', [
    ['Mary of Guise', 'French regent of Scotland, mother of Mary, Queen of Scots'],
    ['Francis II', 'King of France, 1559–60, husband of Mary, Queen of Scots'],
    ['The Lords of the Congregation', 'Scottish Protestant nobles who rebelled in 1559'],
    ['William Cecil', 'Urged Elizabeth to intervene in Scotland'],
  ]),
  view.source('A source type: a royal proclamation, 1560', 'A printed proclamation announcing that old coins would be called in and exchanged for new ones.', 'Useful for the government\'s plan and how it explained it; it does not show how people reacted.'),
], [
  ['Why did debasement cause problems?', ['Coins contained less silver, so prices rose and confidence in money fell', 'Coins became so valuable that nobody was willing to spend them', 'It meant that only gold coins could legally be used in England'], 0, 'The recoinage fixed this.'],
  ['Why was Mary, Queen of Scots becoming Queen of France a danger?', ['It joined Scotland and France, England\'s enemies on two sides', 'It meant Mary would immediately invade England from Calais', 'It made France and England allies against Spain and Scotland'], 0, 'The Auld Alliance threatened encirclement.'],
  ['Exam skill · Describe one feature. Which is a valid feature of the French threat, with supporting detail?', ['France held Calais, which England had lost in January 1558.', 'France was a very dangerous country that Elizabeth was very worried about.', 'Elizabeth was crowned in Westminster Abbey in January 1559.'], 0, 'A feature with a supporting detail.'],
  ['What did the Treaty of Edinburgh achieve?', ['French troops left Scotland', 'England regained Calais', 'Mary married Robert Dudley'], 0, 'It removed the immediate threat.'],
], [
  Q('eld3.p1', 'Roughly how much debt did Elizabeth inherit?', ['About £300,000', 'About £3,000', 'About £30 million'], 0, 'Mostly from war.', 'finance'),
  Q('eld3.p2', 'When was Calais lost?', ['January 1558', 'April 1559, at Cateau-Cambrésis', 'July 1560, at Edinburgh'], 0, 'It was lost under Mary I.', 'france'),
  Q('eld3.p3', 'What was the recoinage of 1560–61?', ['Replacing debased coins with proper silver ones', 'Printing paper money for the first time', 'Borrowing gold from Spain and Portugal'], 0, 'It restored confidence.', 'finance'),
  Q('eld3.p4', 'Which treaty removed French troops from Scotland?', ['Treaty of Edinburgh', 'Treaty of Troyes', 'Treaty of Cateau-Cambrésis'], 0, 'It was agreed in 1560.', 'scotland'),
  Q('eld3.p5', 'Who was regent of Scotland in 1559?', ['Mary of Guise', 'Mary, Queen of Scots', 'Margaret Tudor'], 0, 'She was French by birth.', 'scotland'),
], [
  Q('eld3.c1', 'Where had money been borrowed at high interest?', ['Antwerp', 'Rome, Italy', 'Madrid, Spain'], 0, 'From Flemish lenders.', 'finance'),
  Q('eld3.c2', 'What was the "Auld Alliance"?', ['The alliance of France and Scotland', 'An English trade treaty with Spain', 'A Protestant league of German states'], 0, 'An old link against England.', 'scotland'),
  Q('eld3.c3', 'What happened at Le Havre in 1562–63?', ['An English occupation that failed', 'A French surrender to England', 'Mary\'s wedding to Darnley'], 0, 'Calais was not regained.', 'france'),
  Q('eld3.c4', 'When did Elizabeth give up the claim to Calais?', ['1564', '1558', '1588'], 0, 'By the Treaty of Troyes.', 'france'),
  Q('eld3.c5', 'Which treaty ended the war with France in 1559?', ['Cateau-Cambrésis', 'Edinburgh (1560)', 'Nonsuch (1585)'], 0, 'Calais stayed French.', 'france'),
  Q('eld3.c6', 'How did Elizabeth help Scottish Protestants?', ['Money, a fleet and an army', 'By marrying their leader', 'By asking the Pope'], 0, 'She did this in 1559–60.', 'scotland'),
  Q('eld3.c7', 'Which was a way Elizabeth saved money?', ['Avoiding costly wars', 'Building new palaces', 'Doubling the army'], 0, 'She was careful with money.', 'finance'),
  Q('eld3.c8', 'Who became King of France in 1559?', ['Francis II', 'Philip II', 'Henry VIII'], 0, 'He was Mary\'s husband.', 'france'),
], {exam: 'Describe one feature of the threat from France in the years 1558–60. (2 marks)'}),

lesson(T, 'elizabeth.religion-1558', 'Religious divisions in 1558', ['B4 1.2'], [
  ['Three changes in a generation', 'Henry VIII broke with Rome in the 1530s and made himself head of the Church, though he kept much Catholic worship. Under Edward VI (1547–53) the Church became firmly Protestant, with English prayer books. Mary I (1553–58) restored Catholicism and the Pope\'s authority, and nearly three hundred Protestants were burned for heresy.'],
  ['What divided Catholics and Protestants', 'They disagreed about the authority of the Pope; whether the bread and wine in the Mass became the body and blood of Christ; whether services and the Bible should be in Latin or English; whether priests could marry; and how churches should look, with images, statues and decoration or plain walls.'],
  ['Where people stood', 'Catholicism remained strong in the north and west of England, among many nobles and in the countryside. Protestantism was strongest in London, the south-east and East Anglia, among merchants and the educated. Many ordinary people followed whatever the Crown required. Protestant exiles who had fled to Geneva and Frankfurt under Mary returned with more radical ideas.'],
  ['The clergy and the Lords', 'The bishops appointed by Mary were Catholic and sat in the House of Lords, where they could block a Protestant settlement. Many parish clergy were poorly educated and had changed their practices several times. Any settlement had to satisfy enough people to keep order without provoking Catholic powers abroad.'],
], view.factors('Elizabeth\'s religious problem', [
  ['Division', 'the country split by region, class and belief'],
  ['The Lords', 'Catholic bishops could block change'],
  ['Radicals', 'returning exiles wanted more reform'],
  ['Abroad', 'Catholic Spain and France might react to a Protestant England'],
]), [
  view.timeline('Religious changes', [
    ['1534', 'Henry VIII becomes Supreme Head of the Church'],
    ['1549', 'Edward VI\'s first English prayer book'],
    ['1552', 'A more Protestant second prayer book'],
    ['1553–58', 'Mary I restores Catholicism; Protestants burned'],
    ['1558', 'Elizabeth inherits a divided Church'],
  ]),
  view.people('Groups', [
    ['Catholics', 'Loyal to the Pope; strongest in the north and west'],
    ['Protestants', 'Strongest in London and the south-east'],
    ['Marian exiles', 'Protestants returning from Geneva and Frankfurt'],
    ['Marian bishops', 'Catholic bishops who sat in the House of Lords'],
  ]),
  view.source('A source type: a churchwardens\' account book', 'A parish\'s accounts recording the cost of removing altars under Edward, rebuilding them under Mary and removing them again under Elizabeth.', 'Useful evidence of how often parishes had to change; it records spending, not what parishioners believed.'),
], [
  ['Why did the Marian bishops matter?', ['They sat in the House of Lords and could block a Protestant settlement', 'They controlled the navy and could stop Elizabeth from sailing abroad', 'They chose the members of the House of Commons in each county'], 0, 'Religion had to pass through Parliament.'],
  ['Why were the returning exiles a problem?', ['They brought more radical Protestant ideas and wanted further reform', 'They wanted to restore Catholicism and the authority of the Pope', 'They refused to live in England and stayed in Geneva instead'], 0, 'Pressure came from both sides.'],
  ['Exam skill · Explain why. Which explains why religion was a problem for Elizabeth in 1558?', ['The country was split by region and belief, so any settlement risked opposition at home and abroad.', 'Henry VIII had broken with Rome in the 1530s, and Edward VI was then a Protestant king.', 'Nearly three hundred Protestants were burned during the reign of Mary I, from 1553 to 1558.'], 0, 'Explanation links division to the danger.'],
  ['Where was Catholicism strongest?', ['The north and west of England', 'London and the south-east', 'East Anglia and Kent'], 0, 'Especially among nobles.'],
], [
  Q('eld4.p1', 'Which monarch restored Catholicism in 1553?', ['Mary I', 'Edward VI', 'Henry VIII'], 0, 'Protestants were burned.', 'changes'),
  Q('eld4.p2', 'Where were Protestants strongest?', ['London and the south-east', 'The north and the west', 'Wales, Cornwall and the Marches'], 0, 'Among merchants.', 'regions'),
  Q('eld4.p3', 'Where had many Protestant exiles lived?', ['Geneva and Frankfurt', 'Rome and Madrid', 'Paris, Lyon and Rouen'], 0, 'They returned in 1558–59.', 'exiles'),
  Q('eld4.p4', 'In which language did Catholics hold services?', ['Latin', 'English', 'French'], 0, 'Protestants wanted English.', 'differences'),
  Q('eld4.p5', 'Roughly how many Protestants were burned under Mary?', ['Nearly three hundred', 'About ten', 'About ten thousand'], 0, 'They were burned for heresy.', 'changes'),
], [
  Q('eld4.c1', 'When did Henry VIII break with Rome?', ['The 1530s', 'The 1550s', 'The 1500s'], 0, 'He became head of the Church.', 'changes'),
  Q('eld4.c2', 'Could Catholic priests marry?', ['No', 'Yes', 'Only bishops'], 0, 'Protestants allowed it.', 'differences'),
  Q('eld4.c3', 'Who did Catholics accept as head of the Church?', ['The Pope', 'The monarch', 'Parliament'], 0, 'A key difference.', 'differences'),
  Q('eld4.c4', 'What did Protestant churches look like?', ['Plain, with few images', 'Full of painted statues', 'Covered in gold leaf'], 0, 'They removed decoration.', 'differences'),
  Q('eld4.c5', 'Which reign made the Church firmly Protestant?', ['Edward VI\'s', 'Mary I\'s', 'Henry VII\'s'], 0, 'He reigned from 1547 to 1553.', 'changes'),
  Q('eld4.c6', 'How did many ordinary people respond to change?', ['They followed what the Crown required', 'They all emigrated to Protestant countries', 'They all rebelled against each change'], 0, 'Conformity was common.', 'regions'),
  Q('eld4.c7', 'Why might foreign powers react to a Protestant England?', ['Spain and France were Catholic', 'Both had become Protestant', 'Both were at war with the Pope'], 0, 'Religion affected diplomacy.', 'abroad'),
  Q('eld4.c8', 'What was the state of many parish clergy?', ['Poorly educated and used to change', 'Highly trained, university Puritans', 'Almost all recently returned exiles'], 0, 'They had changed several times.', 'clergy'),
], {exam: 'Explain why religion was a problem for Elizabeth when she became queen. (12 marks)'}),

lesson(T, 'elizabeth.settlement-acts', 'The Acts of Supremacy and Uniformity and the Injunctions', ['B4 1.2'], [
  ['The Act of Supremacy, 1559', 'The Act made Elizabeth Supreme Governor of the Church of England, rather than Supreme Head, a title that was more acceptable to Catholics and to those who believed a woman could not head the Church. Clergy and holders of public office had to swear an Oath of Supremacy recognising her authority. An Ecclesiastical High Commission was set up to enforce the settlement.'],
  ['The Act of Uniformity, 1559', 'The Act laid down the form of worship. Every church had to use a new Book of Common Prayer, largely based on the 1552 Protestant book but with wording on communion that Catholics could also accept. Everyone had to attend church on Sundays and holy days or pay a fine of twelve pence; those who refused were called recusants. The Act passed the Lords by only three votes, as the bishops opposed it.'],
  ['The Royal Injunctions, 1559', 'The Injunctions were instructions to the clergy on how to carry out the settlement. They required clergy to teach the royal supremacy, preach approved sermons and keep an English Bible in every church. Clergy were to wear special vestments, and they could marry only with approval. Images that led to superstition were to be removed, though some decoration remained.'],
  ['Enforcing the settlement', 'Almost all of Mary\'s bishops refused the Oath and lost their posts, and Elizabeth appointed Protestants, including Matthew Parker as Archbishop of Canterbury. Royal commissioners visited parishes in 1559 to check the changes. Most parish clergy took the Oath and stayed, accepting the new forms as they had accepted earlier changes.'],
], view.factors('A "middle way"', [
  ['Protestant', 'royal supremacy; English services and Bible; clergy could marry'],
  ['Catholic-friendly', 'the title Supreme Governor; vestments; some decoration; ambiguous communion wording'],
  ['Enforcement', 'the Oath; fines for non-attendance; visitations; the High Commission'],
  ['Result', 'most people conformed; most bishops did not'],
]), [
  view.timeline('The settlement', [
    ['Jan 1559', 'Parliament opens'],
    ['Apr 1559', 'Acts of Supremacy and Uniformity pass'],
    ['Summer 1559', 'Royal Injunctions issued'],
    ['1559', 'Royal visitations of parishes; Marian bishops removed'],
    ['Dec 1559', 'Matthew Parker becomes Archbishop of Canterbury'],
  ]),
  view.people('People and groups', [
    ['Elizabeth I', 'Supreme Governor of the Church of England'],
    ['Matthew Parker', 'Archbishop of Canterbury from 1559'],
    ['The Marian bishops', 'Almost all refused the Oath and were removed'],
    ['Recusants', 'Those who refused to attend church and were fined'],
  ]),
  view.source('A source type: the Book of Common Prayer, 1559', 'The printed service book every church had to use, setting out the words of each service in English.', 'Very useful for what worship officially looked like; it does not show how faithfully each parish followed it.'),
], [
  ['Why was "Supreme Governor" chosen instead of "Supreme Head"?', ['It was more acceptable to Catholics and to those who doubted a woman could head the Church', 'The Pope insisted on the title as a condition for accepting the new settlement', 'Parliament had banned the title "Supreme Head" in an Act passed in 1558'], 0, 'A careful compromise.'],
  ['What did the Act of Uniformity require?', ['Use of the new prayer book and church attendance, with fines for absence', 'That all clergy must be married and that every church be painted white', 'That every subject swear loyalty to the Pope as well as to Elizabeth'], 0, 'It set the form of worship.'],
  ['Exam skill · Describe one feature. Which is a valid feature of the religious settlement, with supporting detail?', ['The Act of Uniformity fined people twelve pence for not attending church.', 'The religious settlement was a very clever compromise that pleased lots of people.', 'Mary I had restored the Catholic Church before she died in 1558.'], 0, 'A feature with a specific detail.'],
  ['How did the bishops respond?', ['Almost all refused the Oath and were replaced by Protestants', 'They all welcomed the settlement and preached in favour of it', 'They left England and set up a new Church in Scotland instead'], 0, 'The upper clergy resisted.'],
], [
  Q('eld5.p1', 'What title did the Act of Supremacy give Elizabeth?', ['Supreme Governor', 'Supreme Head', 'Defender of Rome'], 0, 'Not the title Supreme Head.', 'supremacy'),
  Q('eld5.p2', 'What was the fine for not attending church?', ['Twelve pence', 'Twelve pounds', 'Nothing'], 0, 'Set by the Act of Uniformity.', 'uniformity'),
  Q('eld5.p3', 'Who became Archbishop of Canterbury in 1559?', ['Matthew Parker', 'Edmund Grindal', 'John Whitgift'], 0, 'A moderate Protestant.', 'enforcement'),
  Q('eld5.p4', 'What were people who refused to attend church called?', ['Recusants', 'Puritans', 'Separatists'], 0, 'They were fined.', 'uniformity'),
  Q('eld5.p5', 'By how many votes did the Act of Uniformity pass the Lords?', ['Three', 'Three hundred', 'It was unanimous'], 0, 'The bishops opposed it.', 'uniformity'),
], [
  Q('eld5.c1', 'Who had to swear the Oath of Supremacy?', ['Clergy and office holders', 'Every child over seven', 'Only the nobles at Court'], 0, 'Recognising her authority.', 'supremacy'),
  Q('eld5.c2', 'What did the Injunctions require in every church?', ['An English Bible', 'A statue of Mary', 'A Latin missal'], 0, 'Instructions for clergy.', 'injunctions'),
  Q('eld5.c3', 'Which prayer book was the 1559 book based on?', ['The 1552 book', 'The Catholic missal', 'A Puritan book'], 0, 'With some changes.', 'uniformity'),
  Q('eld5.c4', 'What did clergy have to wear?', ['Special vestments', 'Plain black cloaks only', 'Monks\' habits'], 0, 'Puritans objected.', 'injunctions'),
  Q('eld5.c5', 'What checked parishes in 1559?', ['Royal visitations', 'Envoys sent from Spain', 'Legates sent by the Pope'], 0, 'Commissioners inspected.', 'enforcement'),
  Q('eld5.c6', 'Could clergy marry under the Injunctions?', ['Yes, with approval', 'No, never at all', 'Only if they were bishops'], 0, 'A Protestant feature.', 'injunctions'),
  Q('eld5.c7', 'What did most parish clergy do?', ['Took the Oath and stayed', 'Fled abroad to Rome', 'Rebelled against her in 1559'], 0, 'Conformity was common.', 'enforcement'),
  Q('eld5.c8', 'What body enforced the settlement?', ['The Ecclesiastical High Commission', 'The Court of Star Chamber alone', 'The Council of Trent in Italy'], 0, 'Set up by the Act of Supremacy.', 'supremacy'),
], {exam: 'Describe one feature of the Act of Uniformity of 1559. (2 marks)'}),

lesson(T, 'elizabeth.church-society', 'The Church of England in society', ['B4 1.2'], [
  ['The parish at the centre', 'The parish church was the heart of community life. Everyone was baptised, married and buried there, and attendance was the law. Holy days and festivals marked the year, and the churchwardens, chosen from local people, managed the building, kept accounts and reported those who failed to attend.'],
  ['Teaching obedience', 'Many clergy were not licensed to preach their own sermons, so they read official homilies, printed sermons issued by the government. These taught that rebellion against the monarch was a sin against God. The Church was therefore a powerful way of spreading royal authority and order.'],
  ['Church courts', 'Church courts dealt with moral and religious matters: disputes over wills and marriages, slander, failing to attend church and sexual misconduct. They could order public penance, such as standing in church in a white sheet, or excommunicate offenders.'],
  ['Enforcing the details', 'The settlement left room for argument about vestments and decoration. In 1566 Archbishop Parker issued his Advertisements, rules on clergy dress and the conduct of services, and London clergy who refused to wear the required vestments were suspended. Elizabeth expected uniformity in outward practice, but did not try to examine what people privately believed.'],
], view.factors('Why the Church mattered to the queen', [
  ['Order', 'homilies taught obedience; rebellion was a sin'],
  ['Information', 'clergy read out royal messages to every parish'],
  ['Control', 'church courts policed behaviour; churchwardens reported absence'],
  ['Unity', 'one form of worship for the whole country'],
]), [
  view.timeline('The Church in practice', [
    ['1559', 'Visitations check that parishes follow the settlement'],
    ['1563', 'The Thirty-Nine Articles set out the Church\'s beliefs'],
    ['1566', 'Parker\'s Advertisements on vestments and services'],
    ['1566', 'London clergy suspended for refusing vestments'],
  ]),
  view.people('People', [
    ['Churchwardens', 'Local people who ran the parish and reported absence'],
    ['Parish clergy', 'Read homilies and led services'],
    ['Matthew Parker', 'Archbishop who issued the Advertisements'],
    ['Church court judges', 'Tried moral and religious offences'],
  ]),
  view.source('A source type: a church court record', 'A record of a church court ordering a villager to do public penance for slandering a neighbour.', 'Useful for how the Church policed behaviour; one case cannot show how common such cases were.'),
], [
  ['Why were homilies important to the government?', ['They taught every parish that rebellion against the monarch was a sin', 'They let each priest choose his own beliefs and preach them freely', 'They were read only to nobles at Court and never to ordinary people'], 0, 'The pulpit spread obedience.'],
  ['What did church courts deal with?', ['Moral and religious matters such as wills, slander and non-attendance', 'Treason and rebellion against the queen by members of the nobility', 'Disputes between England and foreign powers about trade and war'], 0, 'They policed everyday behaviour.'],
  ['Exam skill · Explain why. Which explains why the Church was important to Elizabeth\'s government?', ['Clergy reached every parish, so they could spread royal messages and teach obedience.', 'Every person in England was baptised, married and buried in their own parish church.', 'In 1566 Archbishop Parker issued rules called the Advertisements for the clergy.'], 0, 'Explanation links the Church to royal control.'],
  ['What did Elizabeth expect from her subjects in religion?', ['Outward conformity, without examining their private beliefs', 'Complete agreement with every Puritan idea in private', 'Loyalty to the Pope as well as attendance at church'], 0, 'She did not seek to make "windows into men\'s souls".'],
], [
  Q('eld6.p1', 'What were homilies?', ['Official printed sermons', 'Taxes paid to the Church', 'Catholic prayers in Latin'], 0, 'Clergy read them aloud.', 'homilies'),
  Q('eld6.p2', 'Who managed parish buildings and reported absence?', ['Churchwardens', 'Bishops', 'Justices of the Peace'], 0, 'They were chosen locally.', 'parish'),
  Q('eld6.p3', 'When did Parker issue his Advertisements?', ['1566', '1559', '1588'], 0, 'They set rules on vestments.', 'enforcement'),
  Q('eld6.p4', 'What could church courts order?', ['Public penance', 'Execution', 'Military service'], 0, 'Or excommunication.', 'courts'),
  Q('eld6.p5', 'What set out the Church\'s beliefs in 1563?', ['The Thirty-Nine Articles', 'The Book of Advertisements', 'The Injunctions'], 0, 'A statement of doctrine.', 'enforcement'),
], [
  Q('eld6.c1', 'What did homilies teach about rebellion?', ['It was a sin', 'It was allowed', 'It was heroic'], 0, 'Obedience was a duty.', 'homilies'),
  Q('eld6.c2', 'Which events took place in the parish church?', ['Baptisms, marriages and burials', 'Trials of nobles for treason', 'Elections to the House of Commons'], 0, 'Life\'s key moments.', 'parish'),
  Q('eld6.c3', 'Why were many clergy not allowed to preach own sermons?', ['They were not licensed', 'They spoke Latin only', 'They were Puritans'], 0, 'Homilies filled the gap.', 'homilies'),
  Q('eld6.c4', 'What happened to London clergy who refused vestments?', ['They were suspended', 'They were promoted', 'They were knighted'], 0, 'This happened in 1566.', 'enforcement'),
  Q('eld6.c5', 'What was a form of penance?', ['Standing in church in a white sheet', 'Paying a heavy fine to the Pope', 'Going on a pilgrimage to Rome'], 0, 'It was a public shaming.', 'courts'),
  Q('eld6.c6', 'What did Elizabeth not try to examine?', ['Private beliefs', 'Church attendance', 'Clergy dress'], 0, 'Outward conformity mattered.', 'enforcement'),
  Q('eld6.c7', 'Which offence did church courts hear?', ['Slander', 'Murder and theft', 'Piracy at sea'], 0, 'It was a moral offence.', 'courts'),
  Q('eld6.c8', 'What did clergy read out besides sermons?', ['Royal messages', 'Foreign news only', 'Nothing'], 0, 'The Church spread information.', 'homilies'),
], {exam: 'Explain why the Church of England was important in Elizabethan society. (12 marks)'}),

lesson(T, 'elizabeth.puritans', 'The Puritan challenge', ['B4 1.3'], [
  ['Who were the Puritans?', 'Puritans were Protestants who believed the 1559 settlement had not gone far enough. They wanted to "purify" the Church of anything Catholic. Many had been exiles in Geneva, and some held important posts as bishops, clergy, MPs or advisers; Robert Dudley and Francis Walsingham were sympathetic to them.'],
  ['The crucifix controversy', 'Elizabeth kept a silver crucifix and candles in her private chapel and at first wanted crucifixes kept in churches. Puritan bishops objected that it encouraged idolatry, and some threatened to resign. Elizabeth backed down over parish churches, but kept her own crucifix.'],
  ['The vestment controversy', 'Puritans objected to clergy wearing the white surplice and other vestments, which they saw as Catholic. In 1566 Archbishop Parker\'s Advertisements required them, and 37 London clergy who refused were suspended. Some Puritans began to argue for changes to how the Church was governed.'],
  ['How serious was the challenge?', 'The Puritan challenge was mostly a challenge from within: Puritans were loyal to Elizabeth and did not want a Catholic monarch. But they were well placed in Parliament and the Church, and their pressure for further reform irritated the queen, who saw it as a threat to her authority over the Church.'],
], view.factors('The Puritan challenge, 1558–69', [
  ['Aims', 'remove Catholic remnants: crucifixes, vestments, decoration'],
  ['Strength', 'supporters among bishops, MPs and courtiers'],
  ['Elizabeth\'s response', 'compromise on crucifixes in churches; firmness on vestments'],
  ['Limit', 'Puritans were loyal and did not seek to overthrow her'],
]), [
  view.timeline('Puritan pressure', [
    ['1558–59', 'Exiles return from Geneva and Frankfurt'],
    ['1559–60', 'The crucifix controversy'],
    ['1563', 'Attempts in Convocation to remove vestments narrowly fail'],
    ['1566', 'Parker\'s Advertisements; 37 London clergy suspended'],
  ]),
  view.people('People', [
    ['Matthew Parker', 'Archbishop who enforced vestments'],
    ['Puritan bishops', 'Some threatened to resign over the crucifix'],
    ['Robert Dudley', 'Courtier sympathetic to Puritans'],
    ['London clergy', 'Refused to wear the surplice in 1566'],
  ]),
  view.source('A source type: a Puritan pamphlet', 'A printed pamphlet arguing that the surplice was a relic of Catholicism and should be abandoned.', 'Useful for Puritan arguments; it was written to persuade, so it shows one side of the debate.'),
], [
  ['Why did Puritans object to vestments?', ['They saw them as Catholic and wanted a purer Church', 'They thought vestments were too expensive for parishes', 'They wanted clergy to wear armour instead of robes'], 0, 'Appearance carried religious meaning.'],
  ['How did Elizabeth handle the crucifix controversy?', ['She backed down over parish churches but kept her own crucifix', 'She ordered crucifixes in every house and church in England', 'She dismissed every Puritan bishop and replaced them with Catholics'], 0, 'Compromise kept bishops on side.'],
  ['Exam skill · How far? Which judgement is best supported?', ['The Puritan challenge was limited: Puritans were loyal, but their influence in the Church and Parliament irritated Elizabeth.', 'The Puritan challenge was very serious because Puritans disagreed with Elizabeth about religion.', 'There was no Puritan challenge at all, because every Puritan agreed with the settlement.'], 0, 'A supported judgement weighs nature and extent.'],
  ['Why was the Puritan challenge hard to deal with?', ['Puritans held important posts as bishops, MPs and advisers', 'Puritans had an army in Scotland ready to invade England', 'Puritans were supported by the Pope and King Philip II'], 0, 'They were part of the establishment.'],
], [
  Q('eld7.p1', 'What did Puritans want?', ['To purify the Church of Catholic features', 'To restore the Pope as head of the Church', 'To abolish the Church of England entirely'], 0, 'They wanted further reform.', 'puritan-aims'),
  Q('eld7.p2', 'What did Elizabeth keep in her chapel?', ['A crucifix and candles', 'A Puritan pulpit', 'A statue of Henry VIII'], 0, 'Puritans objected.', 'crucifix'),
  Q('eld7.p3', 'How many London clergy were suspended in 1566?', ['37', '370', '3'], 0, 'They refused to wear vestments.', 'vestments'),
  Q('eld7.p4', 'Where had many Puritans spent Mary\'s reign?', ['Geneva', 'Rome', 'Madrid'], 0, 'They had lived there as exiles.', 'puritan-aims'),
  Q('eld7.p5', 'Which garment did Puritans object to?', ['The surplice', 'The doublet', 'The ruff'], 0, 'A white vestment.', 'vestments'),
], [
  Q('eld7.c1', 'Which courtier was sympathetic to Puritans?', ['Robert Dudley', 'Thomas Howard', 'Mary of Guise'], 0, 'As was Walsingham.', 'puritan-strength'),
  Q('eld7.c2', 'Were Puritans loyal to Elizabeth?', ['Yes, mostly', 'No, they wanted her overthrown', 'They supported Mary instead'], 0, 'A challenge from within.', 'puritan-extent'),
  Q('eld7.c3', 'What did Puritans think crucifixes encouraged?', ['Idolatry', 'Obedience', 'Literacy'], 0, 'Worship of images.', 'crucifix'),
  Q('eld7.c4', 'Who enforced vestments in 1566?', ['Archbishop Parker', 'William Cecil, Secretary of State', 'Robert Dudley, Earl of Leicester'], 0, 'Through the Advertisements.', 'vestments'),
  Q('eld7.c5', 'What did some Puritan bishops threaten over the crucifix?', ['To resign', 'To rebel', 'To join Spain'], 0, 'Elizabeth compromised.', 'crucifix'),
  Q('eld7.c6', 'Where did Puritans have influence?', ['Parliament and the Church', 'The court of Philip II of Spain', 'The Pope\'s council in Rome'], 0, 'They were well placed.', 'puritan-strength'),
  Q('eld7.c7', 'Why did Puritan pressure irritate Elizabeth?', ['It challenged her authority over the Church', 'It was secretly paid for by the French', 'It was led by Catholics in the north'], 0, 'Supreme Governor.', 'puritan-extent'),
  Q('eld7.c8', 'What happened in Convocation in 1563?', ['Attempts to remove vestments narrowly failed', 'Vestments were abolished in every church', 'Catholicism was restored in some dioceses'], 0, 'Puritans came close.', 'vestments'),
], {exam: 'Describe one feature of the Puritan challenge to the religious settlement. (2 marks)'}),

lesson(T, 'elizabeth.catholic-challenge', 'The Catholic challenge: nobles, the Papacy and foreign powers', ['B4 1.3'], [
  ['Catholics at home', 'Many people remained Catholic in belief, especially in the north and west. Some attended Protestant services to avoid fines while privately keeping their faith; they were known as church papists. Others refused to attend and became recusants. Some Catholic nobles, such as the Earls of Northumberland and Westmorland in the north, were powerful local leaders with their own followers.'],
  ['The Papacy', 'At first the Pope hoped Elizabeth might return to Catholicism and avoided condemning her. The Council of Trent, which finished in 1563, strengthened the Catholic Church\'s Counter-Reformation. In 1566 the new Pope, Pius V, instructed English Catholics not to attend Protestant services, which increased recusancy.'],
  ['Foreign Catholic powers', 'Spain and France were Catholic, and either might support a Catholic rising or invasion. But the two were rivals, and Philip II of Spain at first wanted to keep England friendly against France. France was weakened in the 1560s by its own religious wars. This rivalry protected Elizabeth in her early years.'],
  ['How serious was the challenge by 1569?', 'Most Catholics stayed loyal and conformed, at least outwardly, and there was no Catholic rising in the 1560s until the arrival of Mary, Queen of Scots in 1568 gave Catholics an alternative queen. The danger came from a combination: discontented Catholic nobles, a Pope prepared to act against Elizabeth, foreign powers and a Catholic claimant.'],
], view.factors('Sources of Catholic danger', [
  ['Nobles', 'powerful northern earls with local followings'],
  ['The Papacy', 'the Council of Trent; the 1566 instruction not to attend services'],
  ['Foreign powers', 'Spain and France, held back by their rivalry'],
  ['Mary, Queen of Scots', 'from 1568 a Catholic alternative queen in England'],
]), [
  view.timeline('The Catholic challenge', [
    ['1559', 'The settlement; the Pope at first holds back'],
    ['1562', 'Religious wars begin in France'],
    ['1563', 'The Council of Trent ends'],
    ['1566', 'Pius V tells Catholics not to attend Protestant services'],
    ['1568', 'Mary, Queen of Scots arrives in England'],
    ['1569', 'The Revolt of the Northern Earls'],
  ]),
  view.people('People and powers', [
    ['Pope Pius V', 'Pope from 1566; hostile to Elizabeth'],
    ['Philip II of Spain', 'At first kept England friendly against France'],
    ['The Earls of Northumberland and Westmorland', 'Catholic northern nobles'],
    ['Church papists', 'Catholics who attended Protestant services to avoid fines'],
  ]),
  view.source('A source type: a report from a bishop', 'A report sent to the Privy Council listing gentry in a northern county thought to be secret Catholics.', 'Useful for the government\'s worries about Catholics in the north; the bishop may have exaggerated to show his own zeal.'),
], [
  ['What was the difference between recusants and church papists?', ['Recusants refused to attend church; church papists attended to avoid fines', 'Recusants were Puritans; church papists were Catholic priests from Rome', 'Recusants lived in London; church papists lived only in Scotland'], 0, 'Both were Catholic.'],
  ['Why did foreign Catholic powers not attack in the 1560s?', ['Spain and France were rivals, and France was weakened by religious wars', 'Both had become Protestant countries by 1560 and supported Elizabeth', 'The Pope had ordered them both to make peace with England for ever'], 0, 'Rivalry protected England.'],
  ['Exam skill · Explain why. Which explains why the Catholic threat grew after 1566?', ['The Pope told Catholics not to attend Protestant services, so loyalty was tested and recusancy rose.', 'The Council of Trent was a meeting of the Catholic Church that finished in 1563.', 'The Earls of Northumberland and Westmorland were nobles who lived in the north of England.'], 0, 'Explanation links a change to its effect.'],
  ['Why did Mary\'s arrival in 1568 increase the danger?', ['It gave English Catholics an alternative Catholic queen', 'It meant Spain and France immediately formed an alliance', 'It caused the Pope to accept the settlement of 1559'], 0, 'A claimant focused discontent.'],
], [
  Q('eld8.p1', 'What were Catholics who refused to attend church called?', ['Recusants', 'Puritans', 'Church papists'], 0, 'They were fined.', 'recusancy'),
  Q('eld8.p2', 'Which Pope told Catholics not to attend services in 1566?', ['Pius V', 'Pius IV', 'Gregory XIII'], 0, 'This increased recusancy.', 'papacy'),
  Q('eld8.p3', 'When did the Council of Trent finish?', ['1563', '1559', '1570'], 0, 'It strengthened the Counter-Reformation.', 'papacy'),
  Q('eld8.p4', 'Where were Catholic nobles especially powerful?', ['The north', 'London and Westminster', 'Kent and Sussex'], 0, 'Northumberland and Westmorland.', 'nobles'),
  Q('eld8.p5', 'Why did Philip II at first stay friendly?', ['To keep England against France', 'He had become a Protestant', 'He hoped to marry Mary instead'], 0, 'Rivalry with France.', 'foreign'),
], [
  Q('eld8.c1', 'What were church papists?', ['Catholics who attended Protestant services', 'Protestant bishops appointed by Elizabeth', 'Spanish spies working in English ports'], 0, 'Outward conformity.', 'recusancy'),
  Q('eld8.c2', 'What weakened France in the 1560s?', ['Its religious wars', 'A war with England', 'A plague'], 0, 'They began in 1562.', 'foreign'),
  Q('eld8.c3', 'Did most Catholics stay loyal?', ['Yes, mostly', 'No, they all rebelled', 'They all left England'], 0, 'Outward conformity.', 'extent'),
  Q('eld8.c4', 'What did the Counter-Reformation aim to do?', ['Strengthen the Catholic Church', 'Spread Puritan ideas across Europe', 'End the power of the papacy'], 0, 'It followed the Council of Trent.', 'papacy'),
  Q('eld8.c5', 'When did Mary, Queen of Scots arrive?', ['1568', '1558', '1587'], 0, 'She fled Scotland.', 'extent'),
  Q('eld8.c6', 'What did the Pope at first hope?', ['Elizabeth would return to Catholicism', 'Elizabeth would marry John Knox', 'England would unite with Spain'], 0, 'So at first he held back.', 'papacy'),
  Q('eld8.c7', 'Which rising followed in 1569?', ['The Revolt of the Northern Earls', 'The Pilgrimage of Grace (1536)', 'Kett\'s Rebellion in Norfolk (1549)'], 0, 'Catholic nobles rose.', 'nobles'),
  Q('eld8.c8', 'What protected Elizabeth from foreign Catholics early on?', ['Rivalry between Spain and France', 'A huge and modern English army', 'The Pope\'s support for England'], 0, 'They would not unite.', 'foreign'),
], {exam: 'Explain why Catholics were a threat to Elizabeth in the years 1558–69. (12 marks)'}),

lesson(T, 'elizabeth.mary-claim', 'Mary, Queen of Scots: her claim and arrival', ['B4 1.4'], [
  ['Mary\'s claim', 'Mary Stuart was the granddaughter of Margaret Tudor, Henry VIII\'s elder sister, so she was next in line to the English throne after Elizabeth. To Catholics who believed Elizabeth illegitimate, Mary was already the rightful Queen of England. She was Catholic, and through her mother, Mary of Guise, she was closely linked to France.'],
  ['Queen in France and Scotland', 'Mary became Queen of Scotland as a baby in 1542 and was brought up in France. She married the French heir in 1558 and was briefly Queen of France. After her husband died she returned to Scotland in 1561, a Catholic queen ruling a country whose nobles were increasingly Protestant.'],
  ['Darnley, Bothwell and downfall', 'In 1565 Mary married her cousin Lord Darnley, who also had a claim to the English throne; their son James was born in 1566. In 1567 Darnley was murdered, and Mary soon married the Earl of Bothwell, the man many suspected of the murder. Scottish nobles rebelled, imprisoned her at Lochleven and forced her to abdicate in favour of her baby son.'],
  ['Flight to England, 1568', 'In May 1568 Mary escaped, raised an army and was defeated at the Battle of Langside. She fled across the border into England and asked Elizabeth for help to regain her throne. Her arrival brought the strongest Catholic claimant to the English throne into England itself.'],
], view.factors('Why Mary was dangerous', [
  ['Claim', 'next in line through Margaret Tudor; the rightful queen to many Catholics'],
  ['Religion', 'a Catholic focus for English Catholics'],
  ['Foreign links', 'ties to France and potential support from Spain'],
  ['Location', 'after 1568 she was inside England'],
]), [
  view.timeline('Mary, Queen of Scots', [
    ['1542', 'Becomes Queen of Scotland as a baby'],
    ['1558', 'Marries the French heir, Francis'],
    ['1561', 'Returns to Scotland after Francis dies'],
    ['1565', 'Marries Lord Darnley'],
    ['1567', 'Darnley murdered; marries Bothwell; forced to abdicate'],
    ['May 1568', 'Defeated at Langside; flees to England'],
  ]),
  view.people('People', [
    ['Margaret Tudor', 'Henry VIII\'s sister, Mary\'s grandmother'],
    ['Lord Darnley', 'Mary\'s second husband, murdered in 1567'],
    ['The Earl of Bothwell', 'Suspected of the murder; Mary\'s third husband'],
    ['James VI', 'Mary\'s son, crowned King of Scotland in 1567'],
  ]),
  view.source('A source type: a family tree drawn up in the 1560s', 'A chart tracing the descent of the English crown from Henry VII, showing Mary\'s line through Margaret Tudor.', 'Useful for showing why her claim was strong; whoever drew it chose what to include to make a case.'),
], [
  ['Why did many Catholics see Mary as the rightful queen?', ['They thought Elizabeth illegitimate, and Mary was next in line through Margaret Tudor', 'Mary had been crowned Queen of England by the Pope in 1561 in Rome', 'Henry VIII had left the crown to Mary in his will in place of Elizabeth'], 0, 'Her claim rested on descent and religion.'],
  ['Why did the Scottish nobles turn against Mary?', ['She married Bothwell, suspected of murdering her husband Darnley', 'She tried to make Scotland Protestant against their wishes', 'She handed Scotland over to Elizabeth in a treaty of 1567'], 0, 'Scandal destroyed her support.'],
  ['Exam skill · Describe one feature. Which is a valid feature of Mary\'s claim, with supporting detail?', ['Mary was the granddaughter of Margaret Tudor, Henry VIII\'s elder sister.', 'Mary had a very strong claim that made her very dangerous to Elizabeth.', 'Mary fled to England in 1568 after she lost a battle in Scotland.'], 0, 'A feature about the claim, with a detail.'],
  ['Why was Mary\'s arrival in England so significant?', ['The strongest Catholic claimant was now inside England', 'It meant that Scotland had become Catholic once again', 'It ended the war between England and France at once'], 0, 'She could become a focus for plots.'],
], [
  Q('eld9.p1', 'Who was Mary\'s grandmother?', ['Margaret Tudor', 'Anne Boleyn', 'Catherine Parr'], 0, 'Henry VIII\'s elder sister.', 'claim'),
  Q('eld9.p2', 'When did Mary return to Scotland?', ['1561', '1542', '1568'], 0, 'After Francis II died.', 'scotland'),
  Q('eld9.p3', 'Whom did Mary marry in 1565?', ['Lord Darnley', 'The Earl of Bothwell', 'Philip II'], 0, 'Darnley was her cousin.', 'downfall'),
  Q('eld9.p4', 'Where was Mary defeated in 1568?', ['Langside', 'Flodden', 'Bosworth'], 0, 'She fled to England after it.', 'flight'),
  Q('eld9.p5', 'Who became King of Scotland in 1567?', ['James VI', 'Francis II', 'Lord Darnley'], 0, 'He was her baby son.', 'downfall'),
], [
  Q('eld9.c1', 'What happened to Darnley in 1567?', ['He was murdered', 'He became king', 'He fled to France'], 0, 'At Kirk o\' Field.', 'downfall'),
  Q('eld9.c2', 'Where was Mary imprisoned in 1567?', ['Lochleven', 'The Tower', 'Tutbury'], 0, 'By Scottish nobles.', 'downfall'),
  Q('eld9.c3', 'Where was Mary brought up?', ['France', 'England', 'Spain'], 0, 'With the French court.', 'scotland'),
  Q('eld9.c4', 'What was Mary\'s religion?', ['Catholic', 'Puritan', 'Lutheran'], 0, 'A focus for Catholics.', 'claim'),
  Q('eld9.c5', 'Who was suspected of murdering Darnley?', ['The Earl of Bothwell', 'William Cecil, the English minister', 'John Knox, the Protestant preacher'], 0, 'Mary married him.', 'downfall'),
  Q('eld9.c6', 'What did Mary ask Elizabeth for in 1568?', ['Help to regain her throne', 'The English crown for herself', 'A divorce from the Earl of Bothwell'], 0, 'She asked after fleeing.', 'flight'),
  Q('eld9.c7', 'When did Mary become Queen of Scotland?', ['1542', '1558', '1561'], 0, 'She became queen as a baby.', 'scotland'),
  Q('eld9.c8', 'Were Scottish nobles mostly Catholic in the 1560s?', ['No, increasingly Protestant', 'Yes, they were all Catholic', 'They had no religion at all'], 0, 'Mary ruled a divided land.', 'scotland'),
], {exam: 'Describe one feature of Mary, Queen of Scots\' claim to the English throne. (2 marks)'}),

lesson(T, 'elizabeth.mary-options', 'Elizabeth\'s options for dealing with Mary', ['B4 1.4'], [
  ['Option 1: restore her', 'Elizabeth could help Mary regain the Scottish throne. But that would anger the Protestant Scottish lords, who were England\'s allies, and put a Catholic queen with French links back on England\'s border.'],
  ['Option 2: hand her over or let her go', 'Mary could be returned to the Scottish lords, but they might put her on trial or kill her, setting a dangerous example of subjects removing an anointed monarch. Letting her go to France or Spain risked them using her to support an invasion of England.'],
  ['Option 3: keep her in England', 'Keeping Mary in England under guard let Elizabeth control her, but it placed a Catholic claimant at the heart of the kingdom, where she could become the focus of plots by English Catholics and foreign powers.'],
  ['The inquiry, 1568–69', 'Elizabeth held an inquiry at York and Westminster into whether Mary was involved in Darnley\'s murder. The Scottish lords produced the "Casket Letters", supposedly written by Mary to Bothwell; Mary said they were forged. The inquiry reached no verdict, which let Elizabeth keep Mary captive without either condemning or freeing her. Mary would remain a prisoner in England for nineteen years.'],
], view.factors('Weighing the options', [
  ['Restore her', 'offends Protestant Scots; Catholic queen on the border'],
  ['Hand her to the Scots', 'risks a monarch being killed by subjects'],
  ['Let her go abroad', 'France or Spain might use her against England'],
  ['Keep her captive', 'control, but a focus for plots'],
]), [
  view.timeline('Mary in England', [
    ['May 1568', 'Mary arrives and is held at Carlisle'],
    ['Oct 1568', 'The inquiry opens at York'],
    ['Dec 1568', 'The inquiry moves to Westminster; the Casket Letters shown'],
    ['Jan 1569', 'No verdict; Mary kept in custody'],
    ['1569', 'Moved to Tutbury Castle under guard'],
  ]),
  view.people('People', [
    ['Mary, Queen of Scots', 'Kept in English custody from 1568'],
    ['The Earl of Moray', 'Regent of Scotland who brought the Casket Letters'],
    ['William Cecil', 'Urged Elizabeth to keep Mary under control'],
    ['The Duke of Norfolk', 'A commissioner at the inquiry who later planned to marry Mary'],
  ]),
  view.source('A source type: a copy of a Casket Letter', 'A copy of one of the letters the Scottish lords claimed Mary wrote to Bothwell before Darnley\'s murder.', 'Contested evidence: only copies survive, and the lords had reasons to forge or alter them, so its reliability is doubtful.'),
], [
  ['Why did Elizabeth not hand Mary to the Scottish lords?', ['It would set an example of subjects removing or killing an anointed monarch', 'The Scottish lords had refused to take Mary back under any conditions', 'Mary had already been crowned Queen of England by the time she arrived'], 0, 'Elizabeth feared the precedent.'],
  ['Why was letting Mary go abroad dangerous?', ['France or Spain might use her to support an invasion of England', 'She would be forced to become a Protestant if she lived in France', 'It would mean that Elizabeth had to marry Philip II of Spain at once'], 0, 'She would become a foreign weapon.'],
  ['Exam skill · Explain why. Which explains why Mary\'s arrival created a problem for Elizabeth?', ['Every option carried danger, and keeping her in England made her a focus for Catholic plots.', 'Mary arrived in England in May 1568 and was first held at the castle in Carlisle.', 'The inquiry into Darnley\'s murder was held first at York and later at Westminster.'], 0, 'Explanation shows why there was no safe choice.'],
  ['Why did the inquiry\'s lack of verdict suit Elizabeth?', ['She could keep Mary captive without condemning or freeing her', 'It proved Mary innocent and let her return to Scotland as queen', 'It allowed Mary to marry the Duke of Norfolk with full approval'], 0, 'Uncertainty kept Elizabeth\'s options open.'],
], [
  Q('eld10.p1', 'What were the Casket Letters?', ['Letters said to be from Mary to Bothwell', 'Letters from the Pope to English Catholics', 'Letters from Elizabeth to Robert Dudley'], 0, 'Mary said they were forged.', 'inquiry'),
  Q('eld10.p2', 'Where did the inquiry open in 1568?', ['York', 'Edinburgh', 'Paris'], 0, 'Later Westminster.', 'inquiry'),
  Q('eld10.p3', 'What verdict did the inquiry reach?', ['None', 'Guilty', 'Innocent'], 0, 'Nothing was proven.', 'inquiry'),
  Q('eld10.p4', 'How long was Mary a prisoner in England?', ['Nineteen years', 'Nineteen days', 'Nine months'], 0, 'She was held until 1587.', 'captivity'),
  Q('eld10.p5', 'Where was Mary moved in 1569?', ['Tutbury Castle', 'Lochleven', 'The Tower of London'], 0, 'She was kept under guard.', 'captivity'),
], [
  Q('eld10.c1', 'Who brought the Casket Letters?', ['The Earl of Moray', 'The Earl of Bothwell', 'Lord Darnley'], 0, 'The Scottish regent.', 'inquiry'),
  Q('eld10.c2', 'Why might restoring Mary anger the Scots?', ['They were Protestant and had deposed her', 'They wanted Elizabeth as their queen', 'They had been bribed by the French'], 0, 'Allies of England.', 'options'),
  Q('eld10.c3', 'Which option risked a foreign invasion?', ['Letting her go abroad', 'Keeping her captive', 'Holding an inquiry'], 0, 'France or Spain.', 'options'),
  Q('eld10.c4', 'Which option kept Mary under Elizabeth\'s control?', ['Keeping her in England', 'Restoring her', 'Sending her to Spain'], 0, 'But risked plots.', 'options'),
  Q('eld10.c5', 'What did the inquiry investigate?', ['Darnley\'s murder', 'The Armada', 'The Northern Revolt'], 0, 'Mary\'s role in it.', 'inquiry'),
  Q('eld10.c6', 'What did Mary say about the Casket Letters?', ['They were forged', 'They were hers', 'They were Elizabeth\'s'], 0, 'Only copies survive.', 'inquiry'),
  Q('eld10.c7', 'Which commissioner later planned to marry Mary?', ['The Duke of Norfolk', 'William Cecil, Lord Burghley', 'Robert Dudley, Earl of Leicester'], 0, 'A link to later plots.', 'captivity'),
  Q('eld10.c8', 'Where was Mary first held in 1568?', ['Carlisle', 'London, at the Tower', 'Dover, on the coast'], 0, 'Near the border.', 'captivity'),
], {exam: 'Explain why Mary, Queen of Scots\' arrival in England in 1568 created problems for Elizabeth. (12 marks)'}),
];
