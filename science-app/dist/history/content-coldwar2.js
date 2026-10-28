// Pearson Edexcel GCSE (9–1) History 1HI0, Option P4: Superpower relations and the Cold War,
// 1941–91. Key topic 2: Cold War crises, 1958–70 (specification 2.1–2.3). All teaching text and
// questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history08';

export const coldwarTopic2 = {id: 'history.coldwar.kt2', unit: 'P4', title: 'Cold War crises, 1958–70', paper: 'Paper 2 · Period study'};
const T = coldwarTopic2.id;

export const coldwarLessons2 = [
lesson(T, 'coldwar.wall', 'Berlin, 1958–63: the ultimatum and the Wall', ['P4 2.1', 'P4 2.2', 'P4 2.3'], [
  ['The refugee problem', 'Through the 1950s millions of East Germans, many of them young and skilled, left for the West, mostly through Berlin, where the border between the sectors was still open. This embarrassed the communist system and damaged the East German economy.'],
  ['The ultimatum and the summits', 'In 1958 Khrushchev demanded that the Western powers leave West Berlin within six months and make it a "free city". A series of summits followed: Geneva (1959), Camp David (1959), Paris (1960) and Vienna (1961). Paris collapsed after the USSR shot down an American U-2 spy plane, and at Vienna Khrushchev judged the new President, Kennedy, to be weak.'],
  ['The Wall, August 1961', 'On the night of 12–13 August 1961 East German troops sealed the border with barbed wire, soon replaced by a concrete wall with guard towers. Families were split and people who tried to cross were shot. In October 1961 US and Soviet tanks faced each other at Checkpoint Charlie before both sides pulled back.'],
  ['Consequences and Kennedy\'s visit', 'The Wall stopped the flow of refugees and removed the immediate crisis over Berlin: Kennedy accepted it as better than a war. It became a symbol of communist repression. In June 1963 Kennedy visited West Berlin and promised continued American support to huge crowds.'],
], view.factors('Why was the Wall built?', [
  ['Refugees', 'East Germany was losing skilled workers to the West'],
  ['Prestige', 'people choosing to leave made communism look like a failure'],
  ['Failed diplomacy', 'the ultimatum and summits had not removed the West from Berlin'],
  ['Avoiding war', 'sealing the border solved the problem without attacking West Berlin'],
]), [
  view.timeline('Berlin, 1958–63', [
    ['Nov 1958', 'Khrushchev\'s Berlin ultimatum'],
    ['1959', 'Geneva and Camp David summits'],
    ['May 1960', 'U-2 shot down; Paris summit collapses'],
    ['Jun 1961', 'Vienna summit'],
    ['Aug 1961', 'The border sealed; the Wall built'],
    ['Oct 1961', 'Tank stand-off at Checkpoint Charlie'],
    ['Jun 1963', 'Kennedy visits West Berlin'],
  ]),
  view.people('Leaders', [
    ['Nikita Khrushchev', 'Soviet leader; issued the ultimatum'],
    ['Dwight Eisenhower', 'US President to January 1961; at Camp David and Paris'],
    ['John F. Kennedy', 'US President from 1961; met Khrushchev at Vienna'],
    ['Walter Ulbricht', 'East German leader who pressed for the border to be closed'],
  ]),
  view.source('A source type: a photograph of the Wall', 'Photographs of the border being sealed, or of the later concrete wall, published in Western newspapers.', 'Strong evidence of what the Wall looked like and its human effects; the choice of image often served Western propaganda.'),
], [
  ['Why did the refugee problem matter so much to the East German government?', ['It lost skilled workers and made communism look like a failure', 'The refugees were all soldiers deserting from the army to the West', 'West Germany was paying East Germany for every refugee it lost'], 0, 'Both the economy and prestige suffered.'],
  ['Why did the Paris summit of 1960 collapse?', ['The USSR had shot down an American U-2 spy plane just before it', 'Kennedy refused to travel to Paris to meet Khrushchev at all', 'Khrushchev announced the Berlin Wall at the opening session'], 0, 'Eisenhower would not apologise for the flight.'],
  ['Exam skill · Explain importance. Which explains why the Berlin Wall mattered for superpower relations?', ['It ended the immediate crisis, because the West accepted it rather than risk war, but it became a symbol of division.', 'The Berlin Wall was built in August 1961, first from barbed wire and then later from solid concrete.', 'People who tried to cross the Berlin Wall were sometimes shot dead by the East German border guards.'], 0, 'Importance explains the effect on relations.'],
  ['Why did Kennedy accept the Wall rather than remove it?', ['A wall was better than a war, and it left West Berlin itself untouched', 'The Wall had been built entirely inside the American sector of the city', 'Kennedy had secretly agreed to the Wall at the Vienna summit in June'], 0, 'It defused the crisis.'],
], [
  Q('cw5.p1', 'What did Khrushchev demand in his 1958 ultimatum?', ['That the Western powers leave West Berlin', 'That the USA remove missiles from Turkey', 'That Hungary leave the Warsaw Pact'], 0, 'He wanted Berlin to become a "free city".', 'ultimatum'),
  Q('cw5.p2', 'Which incident wrecked the Paris summit of 1960?', ['The shooting down of a U-2 spy plane', 'The failure of the Bay of Pigs invasion', 'The building of the Berlin Wall in Berlin'], 0, 'Eisenhower refused to apologise.', 'summits'),
  Q('cw5.p3', 'When was the Berlin border sealed?', ['August 1961', 'June 1948', 'November 1989'], 0, 'The Wall fell in 1989.', 'wall'),
  Q('cw5.p4', 'Where did US and Soviet tanks face each other in October 1961?', ['Checkpoint Charlie', 'Tempelhof airport', 'The Brandenburg Gate'], 0, 'Both sides pulled back.', 'wall'),
  Q('cw5.p5', 'When did Kennedy visit West Berlin?', ['June 1963', 'August 1961', 'October 1962'], 0, 'He promised continued support.', 'kennedy-visit'),
], [
  Q('cw5.c1', 'Why did many East Germans leave through Berlin?', ['The border between the sectors there was still open', 'Berlin had the only railway line to West Germany', 'The Wall had gaps for workers to cross each day'], 0, 'Elsewhere the border had been closed in 1952.', 'refugees'),
  Q('cw5.c2', 'Which summit took place at the US presidential retreat in 1959?', ['Camp David', 'Vienna', 'Potsdam', 'Geneva'], 0, 'Eisenhower hosted Khrushchev there.', 'summits'),
  Q('cw5.c3', 'What did Khrushchev conclude about Kennedy at Vienna in 1961?', ['That he was inexperienced and could be pushed', 'That he would invade East Berlin within a year', 'That he would take the USA out of NATO'], 0, 'This encouraged Khrushchev to act.', 'summits'),
  Q('cw5.c4', 'Who led East Germany when the Wall was built?', ['Walter Ulbricht', 'Erich Honecker', 'Imre Nagy'], 0, 'Honecker succeeded him in 1971.', 'wall'),
  Q('cw5.c5', 'What was the main effect of the Wall on refugees?', ['It largely stopped the flow to the West', 'It doubled the number leaving each year', 'It allowed free travel to the West at weekends'], 0, 'That was its purpose.', 'wall'),
  Q('cw5.c6', 'Why did the Wall become a propaganda gift to the West?', ['It showed communism had to imprison its own people', 'It had been built by American engineers working for the West', 'It made West Berlin the new headquarters of the NATO alliance'], 0, 'It symbolised repression.', 'kennedy-visit'),
  Q('cw5.c7', 'Why did the Berlin Wall ease the crisis over the city?', ['It solved the refugee problem without an attack on West Berlin', 'It handed the whole of West Berlin over to the USSR', 'It ended the division of Germany into two states'], 0, 'Both sides could live with it.', 'wall'),
  Q('cw5.c8', 'Who was US President during the Paris summit?', ['Dwight Eisenhower', 'John F. Kennedy', 'Harry Truman', 'Lyndon B. Johnson'], 0, 'Kennedy became President in 1961.', 'summits'),
], {exam: 'Explain the importance of the construction of the Berlin Wall (1961) for relations between the USA and the USSR. (8 marks)'}),

lesson(T, 'coldwar.cuba', 'Cuba: revolution and the Bay of Pigs', ['P4 2.1'], [
  ['The Cuban Revolution, 1959', 'In 1959 Fidel Castro\'s revolutionaries overthrew Batista, a dictator friendly to the USA. American businesses owned much of Cuba\'s land, sugar and industry, only 145 kilometres from Florida. Castro nationalised American-owned property, and relations with Washington collapsed.'],
  ['The USA\'s response', 'The USA refused to recognise Castro\'s government, stopped buying Cuban sugar and imposed a trade embargo. To Castro, this was an attempt to strangle his revolution; to the USA, a hostile government so close was intolerable.'],
  ['Closer Cuban–Soviet links', 'The USSR stepped in, agreeing to buy Cuban sugar and to supply oil, machinery and weapons. In 1961 Castro declared himself a Marxist. For Khrushchev, a communist ally in the Americas was a great opportunity.'],
  ['The Bay of Pigs, April 1961', 'Kennedy approved a CIA plan for about 1,400 Cuban exiles to land at the Bay of Pigs and spark an uprising. They were quickly defeated, no uprising followed and the USA was humiliated. Castro was strengthened, Cuba moved closer to the USSR and Khrushchev judged Kennedy weak.'],
], view.factors('Consequences of the Bay of Pigs', [
  ['US humiliation', 'a failed, CIA-backed invasion became public'],
  ['Castro strengthened', 'he rallied Cubans against the USA'],
  ['Cuba and the USSR', 'Castro moved firmly into the Soviet camp and sought protection'],
  ['Khrushchev\'s view of Kennedy', 'he saw the young President as weak'],
]), [
  view.timeline('Cuba, 1959–61', [
    ['Jan 1959', 'Castro takes power'],
    ['1960', 'US property nationalised; Soviet sugar deal; US trade embargo begins'],
    ['Jan 1961', 'USA breaks off diplomatic relations'],
    ['Apr 1961', 'Bay of Pigs invasion fails'],
    ['Dec 1961', 'Castro declares himself a Marxist'],
  ]),
  view.people('People', [
    ['Fidel Castro', 'Revolutionary leader of Cuba from 1959'],
    ['Fulgencio Batista', 'Cuban dictator overthrown in 1959'],
    ['John F. Kennedy', 'Approved the Bay of Pigs invasion in 1961'],
    ['Nikita Khrushchev', 'Offered Cuba trade, aid and weapons'],
  ]),
  view.source('A source type: a CIA report on the Bay of Pigs', 'An internal report written afterwards for the US government on why the operation failed.', 'Useful for what went wrong from inside the US government; written by the agency involved, so it may shift blame.'),
], [
  ['Why did the Cuban Revolution worry the USA?', ['A hostile government was close to Florida and had seized American property', 'Cuba had declared war on the USA within days of the revolution in 1959', 'Castro had invited NATO and British troops onto the island in 1959'], 0, 'Distance and money both mattered.'],
  ['Why did Castro turn to the USSR?', ['The US embargo left him needing a buyer for sugar and a source of supplies', 'He had been a member of the Soviet Communist Party since the early 1940s', 'The Warsaw Pact required every new communist state anywhere to join it'], 0, 'US pressure pushed him towards Moscow.'],
  ['Exam skill · Explain consequences. Which explains a consequence of the Bay of Pigs?', ['Castro, fearing another invasion, sought Soviet protection, which led towards missiles on Cuba.', 'About 1,400 Cuban exiles landed at the Bay of Pigs in April 1961 with support from the CIA.', 'The Bay of Pigs is on the south coast of Cuba, and the invasion lasted for only three days.'], 0, 'A consequence links the event to what followed.'],
  ['Why was the Bay of Pigs so damaging for Kennedy?', ['It failed quickly and publicly, making the USA look weak and aggressive', 'It led to an immediate Soviet invasion of the USA, launched from Cuba', 'It caused him to lose the 1960 presidential election to Richard Nixon'], 0, 'It was a humiliation early in his presidency.'],
], [
  Q('cw6.p1', 'Who led the Cuban Revolution?', ['Fidel Castro', 'Fulgencio Batista', 'Che Guevara alone'], 0, 'Castro took power in 1959.', 'revolution'),
  Q('cw6.p2', 'How did the USA respond to Castro\'s nationalisations?', ['A trade embargo and refusal to recognise his government', 'An immediate nuclear strike on the Cuban capital, Havana', 'A gift of new economic aid to help the new Cuban government'], 0, 'Economic pressure came first.', 'us-response'),
  Q('cw6.p3', 'What did the USSR agree to buy from Cuba?', ['Sugar', 'Oil', 'Steel'], 0, 'Sugar was Cuba\'s main export.', 'soviet-links'),
  Q('cw6.p4', 'Who carried out the Bay of Pigs landing?', ['Cuban exiles trained by the CIA', 'US Marines landing from aircraft carriers', 'Soviet soldiers sent to support Castro'], 0, 'Kennedy avoided using US troops directly.', 'bay-of-pigs'),
  Q('cw6.p5', 'When did the Bay of Pigs invasion take place?', ['April 1961', 'October 1962', 'January 1959'], 0, 'It came three months into Kennedy\'s presidency.', 'bay-of-pigs'),
], [
  Q('cw6.c1', 'How far is Cuba from Florida?', ['About 145 kilometres', 'About 1,450 kilometres', 'About 14,500 kilometres'], 0, 'Its closeness made it strategically vital.', 'revolution'),
  Q('cw6.c2', 'Who was overthrown in the Cuban Revolution?', ['Batista', 'Kennedy', 'Ulbricht'], 0, 'Batista was friendly to the USA.', 'revolution'),
  Q('cw6.c3', 'When did the USA break off diplomatic relations with Cuba?', ['January 1961', 'April 1961', 'October 1962'], 0, 'Shortly before Kennedy took office.', 'us-response'),
  Q('cw6.c4', 'What did the Bay of Pigs do to Castro\'s position?', ['It strengthened him', 'It forced him to resign', 'It made him ally with the USA'], 0, 'He rallied Cubans against the invasion.', 'bay-of-pigs'),
  Q('cw6.c5', 'What did Khrushchev conclude from the Bay of Pigs?', ['That Kennedy was weak and indecisive', 'That Cuba should join NATO', 'That the USA would never act in Cuba'], 0, 'The failure shaped Soviet calculations.', 'bay-of-pigs'),
  Q('cw6.c6', 'What did Castro declare in December 1961?', ['That he was a Marxist', 'That Cuba would join the USA', 'That he would hold free elections'], 0, 'Cuba moved openly into the communist camp.', 'soviet-links'),
  Q('cw6.c7', 'Why was the invasion expected to succeed?', ['Planners hoped Cubans would rise against Castro', 'The USSR had promised to stay neutral in Cuba', 'Castro had no army or air force of his own'], 0, 'No uprising happened.', 'bay-of-pigs'),
  Q('cw6.c8', 'What did the USSR supply to Cuba after 1960?', ['Oil, machinery and weapons', 'Nothing at all, apart from advisers', 'Only grain and other foodstuffs'], 0, 'This tied Cuba to the Soviet bloc.', 'soviet-links'),
], {exam: 'Explain two consequences of the Bay of Pigs incident (1961). (8 marks)'}),

lesson(T, 'coldwar.missiles', 'The Cuban Missile Crisis, 1962', ['P4 2.2', 'P4 2.3'], [
  ['Why missiles in Cuba?', 'Khrushchev secretly sent nuclear missiles to Cuba in 1962. They could reach most American cities, which helped close the gap with US missiles already in Turkey and Italy. They also protected Castro from another invasion and tested Kennedy.'],
  ['Thirteen days', 'On 14 October 1962 a U-2 photographed missile sites. Kennedy and his advisers, the ExComm, rejected an air strike or invasion and on 22 October announced a naval blockade, called a "quarantine", to stop more weapons arriving. Soviet ships approaching the line turned back.'],
  ['The deal', 'Khrushchev sent two letters: the first offered to remove the missiles if the USA promised not to invade Cuba; the second also demanded the removal of US missiles from Turkey. On 27 October a U-2 was shot down over Cuba. Kennedy accepted the first letter publicly and secretly agreed to remove the missiles from Turkey later. On 28 October Khrushchev agreed.'],
  ['Consequences', 'Both sides had come close to nuclear war. A telephone "hotline" between Washington and Moscow was set up in 1963 so leaders could talk directly. Arms control followed: the Limited Test Ban Treaty (1963), the Outer Space Treaty (1967) and the Nuclear Non-Proliferation Treaty (1968). Kennedy\'s reputation rose; Khrushchev was removed in 1964.'],
], view.factors('Kennedy\'s options in October 1962', [
  ['Do nothing', 'accept the missiles; politically impossible'],
  ['Air strike', 'might not destroy every missile and could kill Soviet troops'],
  ['Invasion', 'risked war with Soviet forces on the island'],
  ['Blockade (chosen)', 'stopped more weapons arriving and left time to negotiate'],
]), [
  view.timeline('October 1962', [
    ['14 Oct', 'U-2 photographs missile sites'],
    ['16 Oct', 'Kennedy is shown the photographs; ExComm meets'],
    ['22 Oct', 'Kennedy announces the blockade'],
    ['24 Oct', 'Soviet ships stop and turn back'],
    ['26–27 Oct', 'Khrushchev\'s two letters; a U-2 is shot down'],
    ['28 Oct', 'Khrushchev agrees to remove the missiles'],
  ]),
  view.people('People', [
    ['John F. Kennedy', 'US President; chose the blockade'],
    ['Nikita Khrushchev', 'Soviet leader; sent the missiles and then agreed to remove them'],
    ['Robert Kennedy', 'The President\'s brother; negotiated secretly with the Soviet ambassador'],
    ['Fidel Castro', 'Cuban leader; angered that the deal was made without him'],
  ]),
  view.source('A source type: aerial reconnaissance photographs', 'Black-and-white photographs taken by U-2 planes showing missile sites, labelled by analysts.', 'Strong evidence of the missiles\' existence; the labels are the analysts\' interpretation, and untrained viewers could not read the images unaided.'),
], [
  ['Why did Khrushchev place missiles on Cuba?', ['To protect Cuba and balance US missiles in Turkey and Italy', 'Because Castro had built the missiles himself and asked for help', 'To prepare for an invasion of Florida by Soviet troops'], 0, 'Several motives combined.'],
  ['Why did Kennedy choose a blockade?', ['It stopped more weapons arriving and left time for talks', 'It would destroy every missile already on the island', 'It was the option preferred by Khrushchev in his letter'], 0, 'It avoided the first shot.'],
  ['Exam skill · Explain consequences. Which explains a consequence of the crisis?', ['Fear of nuclear war led to the hotline, so leaders could talk directly in future crises.', 'The crisis lasted thirteen days in October 1962 and involved Kennedy and Khrushchev.', 'U-2 spy planes took photographs of the missile sites on Cuba on 14 October 1962.'], 0, 'A consequence explains what followed and why.'],
  ['What did Kennedy secretly agree to?', ['Remove US missiles from Turkey later', 'Hand over West Berlin to the USSR', 'Allow Soviet troops to stay on Cuba for good'], 0, 'It was kept secret for years.'],
], [
  Q('cw7.p1', 'What did the U-2 photographs of 14 October show?', ['Missile sites on Cuba', 'Soviet tanks in Berlin', 'A nuclear test in Siberia'], 0, 'This began the crisis.', 'events'),
  Q('cw7.p2', 'What did Kennedy call the naval blockade?', ['A quarantine', 'Containment', 'Détente'], 0, 'A blockade could be seen as an act of war.', 'events'),
  Q('cw7.p3', 'What was the ExComm?', ['Kennedy\'s group of advisers during the crisis', 'A Soviet missile unit based on the island of Cuba', 'A Cuban militia trained to defend Havana'], 0, 'It debated the options.', 'events'),
  Q('cw7.p4', 'What was set up in 1963 so leaders could talk directly?', ['A hotline', 'NATO', 'The United Nations'], 0, 'It linked Washington and Moscow.', 'consequences'),
  Q('cw7.p5', 'When did Khrushchev agree to remove the missiles?', ['28 October 1962', '14 October 1962', '22 November 1963'], 0, 'The crisis ended after thirteen days.', 'events'),
], [
  Q('cw7.c1', 'Where were US missiles that Khrushchev wanted removed?', ['Turkey', 'Cuba', 'West Berlin'], 0, 'They were removed quietly in 1963.', 'deal'),
  Q('cw7.c2', 'What did Khrushchev\'s first letter offer?', ['Removing the missiles if the USA promised not to invade Cuba', 'Handing control of Cuba to the USA and the United Nations', 'Ending the Warsaw Pact if NATO was also dissolved at once'], 0, 'Kennedy accepted it publicly.', 'deal'),
  Q('cw7.c3', 'What happened on 27 October 1962?', ['A U-2 was shot down over Cuba', 'The Berlin Wall was opened for a day', 'Castro resigned as leader of Cuba'], 0, 'It was one of the most dangerous moments.', 'events'),
  Q('cw7.c4', 'Which treaty of 1963 limited nuclear tests?', ['The Limited Test Ban Treaty', 'The Outer Space Treaty', 'The Helsinki Agreements', 'The Non-Proliferation Treaty'], 0, 'It banned tests in the atmosphere, space and underwater.', 'consequences'),
  Q('cw7.c5', 'Which treaty in 1968 aimed to stop nuclear weapons spreading?', ['The Nuclear Non-Proliferation Treaty', 'SALT 1, the first arms limitation treaty', 'The Truman Doctrine on containment'], 0, 'SALT 1 came in 1972.', 'consequences'),
  Q('cw7.c6', 'What happened to Khrushchev in 1964?', ['He was removed from power', 'He became President of Cuba', 'He signed SALT 1'], 0, 'The crisis damaged his reputation at home.', 'consequences'),
  Q('cw7.c7', 'Why was Castro angry at the outcome?', ['The deal was made without consulting him', 'The USA invaded Cuba anyway a month later', 'The USSR left him even more missiles than before'], 0, 'He was left out of the negotiations.', 'deal'),
  Q('cw7.c8', 'Why did Kennedy reject an air strike?', ['It might not destroy every missile and could start a war', 'Castro had written to ask him not to bomb the island', 'The USA had no aircraft or bases anywhere near Cuba'], 0, 'The risks were too great.', 'events'),
], {exam: 'Write a narrative account analysing the key events of the Cuban Missile Crisis (1962). (8 marks)'}),

lesson(T, 'coldwar.prague', 'Czechoslovakia, 1968: the Prague Spring', ['P4 2.1', 'P4 2.2', 'P4 2.3'], [
  ['Opposition to Soviet control', 'Many Czechoslovaks resented a slow economy, censorship and control from Moscow. In January 1968 Alexander Dubček became leader of the Czechoslovak Communist Party and promised "socialism with a human face".'],
  ['The Prague Spring', 'Dubček relaxed censorship, allowed more freedom of speech and travel, permitted other political groups to form and allowed some trade with the West. He insisted Czechoslovakia would stay communist and remain in the Warsaw Pact, unlike Hungary in 1956.'],
  ['Invasion, August 1968', 'Brezhnev feared the reforms would spread and weaken Soviet control. On 20–21 August hundreds of thousands of Warsaw Pact troops invaded. Czechoslovaks mostly resisted without violence. Dubček was taken to Moscow, forced to reverse the reforms and later replaced by Gustáv Husák.'],
  ['The Brezhnev Doctrine and reactions', 'Brezhnev declared that the Warsaw Pact had the right to intervene in any member state where communism was threatened: the Brezhnev Doctrine. The USA condemned the invasion but did not act, being involved in Vietnam and seeking better relations with the USSR. Romania and Yugoslavia condemned it, and many Western communist parties criticised Moscow.'],
], view.factors('Why did Brezhnev invade?', [
  ['Spread of reform', 'other satellite states might demand the same freedoms'],
  ['Control of the bloc', 'loosening censorship weakened the Communist Party\'s grip'],
  ['Security', 'Czechoslovakia bordered West Germany'],
  ['Pressure from allies', 'East German and Polish leaders feared the reforms'],
]), [
  view.timeline('1968', [
    ['Jan 1968', 'Dubček becomes party leader'],
    ['Apr 1968', 'Action Programme of reforms published'],
    ['20–21 Aug 1968', 'Warsaw Pact invasion'],
    ['Nov 1968', 'Brezhnev Doctrine set out'],
    ['Apr 1969', 'Dubček replaced by Husák'],
  ]),
  view.people('People', [
    ['Alexander Dubček', 'Czechoslovak leader who introduced the reforms'],
    ['Leonid Brezhnev', 'Soviet leader who ordered the invasion'],
    ['Gustáv Husák', 'Replaced Dubček and reversed the reforms'],
    ['Lyndon Johnson', 'US President; condemned the invasion but did not intervene'],
  ]),
  view.source('A source type: a Czechoslovak street poster, August 1968', 'Hand-made posters and slogans put up by citizens in Prague protesting against the invading troops.', 'Good evidence of popular feeling in Prague; made in protest and in the heat of the moment, so not a balanced account.'),
], [
  ['How did Dubček\'s plans differ from Nagy\'s in 1956?', ['He promised to stay communist and remain in the Warsaw Pact', 'He promised to join NATO and hold free elections at once', 'He asked the USA to send troops to protect Prague'], 0, 'He tried to reassure Moscow.'],
  ['Why did Brezhnev invade even though Dubček stayed in the Pact?', ['He feared the reforms would spread and weaken control across the bloc', 'Dubček had secretly asked NATO to send troops to Czechoslovakia', 'The USA had demanded that the USSR remove Dubček from office'], 0, 'Reform itself was the threat.'],
  ['Exam skill · Explain importance. Which explains the importance of the Brezhnev Doctrine?', ['It warned every satellite state that reform could bring invasion, which kept the bloc under control.', 'The Brezhnev Doctrine was announced by Leonid Brezhnev in November 1968 after the invasion.', 'Brezhnev was the leader of the Soviet Union from 1964 until his death in the year 1982.'], 0, 'Importance explains what the doctrine changed.'],
  ['Why did the USA not intervene?', ['It was fighting in Vietnam and wanted better relations with the USSR', 'Dubček had asked the USA to stay out of Czechoslovak affairs entirely', 'The USA had already recognised the Brezhnev Doctrine officially in 1967'], 0, 'Its priorities lay elsewhere.'],
], [
  Q('cw8.p1', 'Who led the Prague Spring?', ['Alexander Dubček', 'Imre Nagy', 'Gustáv Husák', 'Leonid Brezhnev'], 0, 'Nagy led Hungary in 1956.', 'prague-spring'),
  Q('cw8.p2', 'What phrase described Dubček\'s aims?', ['Socialism with a human face', 'Peaceful coexistence with the West', 'Dollar imperialism and the market'], 0, 'He wanted a freer communism.', 'prague-spring'),
  Q('cw8.p3', 'When did the Warsaw Pact invade Czechoslovakia?', ['August 1968', 'November 1956', 'October 1962'], 0, '20–21 August 1968.', 'invasion'),
  Q('cw8.p4', 'What did the Brezhnev Doctrine claim?', ['The right to intervene where communism was threatened', 'The right of each member state to leave the Warsaw Pact', 'The right of Berliners to cross the Wall once a year'], 0, 'It justified the invasion.', 'brezhnev-doctrine'),
  Q('cw8.p5', 'Who replaced Dubček?', ['Gustáv Husák', 'Walter Ulbricht', 'János Kádár'], 0, 'Husák reversed the reforms.', 'invasion'),
], [
  Q('cw8.c1', 'Which reform did Dubček introduce?', ['Less censorship and more freedom of speech', 'Leaving the Warsaw Pact within a year', 'Joining NATO alongside West Germany'], 0, 'He kept Czechoslovakia in the Pact.', 'prague-spring'),
  Q('cw8.c2', 'How did most Czechoslovaks resist the invasion?', ['Mostly without violence', 'With a full-scale war', 'By fleeing to the USSR'], 0, 'Resistance was largely peaceful.', 'invasion'),
  Q('cw8.c3', 'Why was the USA unable to help?', ['It was involved in the Vietnam War', 'It had left NATO after the Cuban crisis', 'It had no forces anywhere in Europe'], 0, 'Vietnam dominated US policy.', 'reaction'),
  Q('cw8.c4', 'Which communist states condemned the invasion?', ['Romania and Yugoslavia', 'East Germany and Poland', 'Hungary and Bulgaria'], 0, 'East Germany and Poland took part.', 'reaction'),
  Q('cw8.c5', 'Why did Brezhnev fear the Prague Spring?', ['Reforms might spread to other satellite states', 'Czechoslovakia had attacked Soviet troops', 'Dubček wanted to become the Soviet leader'], 0, 'The bloc\'s control was at stake.', 'invasion'),
  Q('cw8.c6', 'When did Dubček become party leader?', ['January 1968', 'August 1968', 'January 1956'], 0, 'The Prague Spring followed.', 'prague-spring'),
  Q('cw8.c7', 'What did the Brezhnev Doctrine mean for satellite states?', ['Reform could lead to invasion', 'They could choose capitalism freely', 'They would receive Marshall Aid'], 0, 'It restricted their independence.', 'brezhnev-doctrine'),
  Q('cw8.c8', 'How did many Western communist parties react?', ['They criticised Moscow', 'They praised the invasion', 'They joined the Warsaw Pact'], 0, 'It damaged the USSR\'s image.', 'reaction'),
], {exam: 'Explain two consequences of the Prague Spring (1968). (8 marks)'}),
];
