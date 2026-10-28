// Pearson Edexcel GCSE (9–1) History 1HI0, Option P4: Superpower relations and the Cold War, 1941–91.
// Depth lessons for key topic 2 (specification 2.1–2.3). Each follows its subsection's overview lesson.
// All text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history-geofinal2';

const T = 'history.coldwar.kt2';

export const coldwarDepth2 = [
lesson(T, 'coldwar.berlin-refugees', 'The refugee problem and Khrushchev\'s ultimatum', ['P4 2.1'], [
  ['Escape through Berlin', 'Between 1949 and 1961 around three million East Germans left for the West, most of them through Berlin, where crossing between the sectors was still easy. Once in West Berlin they could fly to West Germany.'],
  ['A "brain drain"', 'Many of those who left were young and skilled: doctors, engineers, teachers and skilled workers. Their loss damaged East Germany\'s economy and was a huge embarrassment to communism, because people were choosing capitalism with their feet.'],
  ['A showcase of the West', 'West Berlin, rebuilt with American money, was wealthy and full of shops and lights, a short train ride from the much poorer East. It was also a base for Western spying deep inside the Soviet bloc.'],
  ['The ultimatum, 1958', 'In November 1958 Khrushchev demanded that the Western powers leave West Berlin within six months and that it become a "free city". The West refused, unwilling to abandon two million West Berliners or to look weak. The ultimatum began three years of crisis over the city.'],
], view.factors('Why Berlin was a problem for Khrushchev', [
  ['Refugees', 'around three million left, mostly through Berlin'],
  ['Brain drain', 'the loss of young, skilled workers'],
  ['Propaganda', 'West Berlin\'s wealth showed up the East'],
  ['Security', 'West Berlin was a base for Western spying'],
]), [
  view.timeline('1949–58', [
    ['1949', 'Two German states created'],
    ['1950s', 'Refugees cross into West Berlin every year'],
    ['1952', 'The border between the two Germanies is closed; Berlin stays open'],
    ['1953', 'An uprising in East Germany is crushed'],
    ['Nov 1958', 'Khrushchev\'s ultimatum on Berlin'],
  ]),
  view.people('People and groups', [
    ['Nikita Khrushchev', 'Soviet leader who issued the ultimatum'],
    ['Walter Ulbricht', 'East German leader who wanted the border closed'],
    ['Dwight Eisenhower', 'US President who refused to leave Berlin'],
    ['Refugees', 'Mostly young and skilled East Germans'],
  ]),
  view.source('A source type: an East German newspaper', 'An East German newspaper article claiming that people leaving for the West had been tricked by Western agents.', 'Useful for how the East explained the refugee problem; it is propaganda and hides the real reasons people left.'),
], [
  ['Why was the refugee problem so damaging?', ['Many of those leaving were young, skilled workers that East Germany needed', 'The refugees took East Germany\'s gold reserves with them when they left', 'It meant that West Germany had to give up its own capital city, Bonn'], 0, 'A brain drain hurt the economy.'],
  ['Why did the West refuse the ultimatum?', ['It would not abandon West Berliners or look weak', 'It had already agreed to give Berlin to the USSR', 'The United Nations had told it to stay in Berlin'], 0, 'Credibility was at stake.'],
  ['Exam skill · Explain two consequences. Which is a consequence of Khrushchev\'s ultimatum?', ['It began three years of crisis over Berlin, leading to a series of summits.', 'It was issued in November 1958 and demanded that the West leave within six months.', 'Khrushchev became the leader of the Soviet Union after Stalin died in 1953.'], 0, 'A consequence explains what followed.'],
  ['Why was West Berlin a "showcase" of the West?', ['Its wealth and shops contrasted with the poorer East nearby', 'It held the headquarters of NATO and the United Nations', 'It was the only city in Europe with an airport in 1958'], 0, 'Propaganda by example.'],
], [
  Q('cwd11.p1', 'Roughly how many East Germans left between 1949 and 1961?', ['About three million', 'About three thousand', 'About thirty million'], 0, 'Most went through Berlin.', 'refugees'),
  Q('cwd11.p2', 'When did Khrushchev issue his ultimatum?', ['November 1958', 'August 1961, at the Wall', 'June 1948, at the Blockade'], 0, 'Demanding a "free city".', 'ultimatum'),
  Q('cwd11.p3', 'What was the "brain drain"?', ['The loss of skilled workers to the West', 'Soviet spies stealing Western science', 'A fall in school standards in the East'], 0, 'Doctors, engineers and others.', 'refugees'),
  Q('cwd11.p4', 'How long did the ultimatum give the West?', ['Six months', 'Six days', 'Six years'], 0, 'To leave West Berlin.', 'ultimatum'),
  Q('cwd11.p5', 'Who led East Germany?', ['Walter Ulbricht', 'Willy Brandt', 'Konrad Adenauer'], 0, 'He wanted the border closed.', 'refugees'),
], [
  Q('cwd11.c1', 'What did Khrushchev want West Berlin to become?', ['A "free city"', 'Part of West Germany', 'A NATO base'], 0, 'Without Western troops.', 'ultimatum'),
  Q('cwd11.c2', 'What kind of people often left?', ['Young and skilled', 'Elderly and retired', 'Soviet soldiers'], 0, 'Their loss was serious.', 'refugees'),
  Q('cwd11.c3', 'Why was Berlin the easiest route out?', ['Crossing sectors was still easy', 'It had no guards of any kind', 'It was a port on the Baltic Sea'], 0, 'The main border was closed.', 'refugees'),
  Q('cwd11.c4', 'How did the West use West Berlin?', ['As a base for spying', 'As a port for the Soviet navy', 'As a prison for communists'], 0, 'Deep in the Soviet bloc.', 'showcase'),
  Q('cwd11.c5', 'Who paid to rebuild West Berlin?', ['The USA', 'The USSR', 'East Germany'], 0, 'It became wealthy.', 'showcase'),
  Q('cwd11.c6', 'Did the West accept the ultimatum?', ['No, it refused', 'Yes, at once', 'Only France did'], 0, 'Crisis followed.', 'ultimatum'),
  Q('cwd11.c7', 'Why was the exodus an embarrassment?', ['People chose capitalism', 'Most refugees were spies', 'The numbers were too small'], 0, 'With their feet.', 'refugees'),
  Q('cwd11.c8', 'How many West Berliners did the West refuse to abandon?', ['About two million', 'About two thousand', 'About twenty million'], 0, 'Credibility mattered.', 'ultimatum'),
], {exam: 'Explain two consequences of the refugee problem in Berlin in the years 1949–61. (8 marks)'}),

lesson(T, 'coldwar.summits', 'The summits of 1959–61', ['P4 2.1'], [
  ['Geneva and Camp David, 1959', 'Foreign ministers met in Geneva in 1959 but reached no agreement on Berlin. In September 1959 Khrushchev visited the USA and held talks with Eisenhower at Camp David. They did not settle Berlin, but Khrushchev withdrew his deadline and they agreed to meet again in Paris.'],
  ['The U-2 incident, May 1960', 'Just before the Paris summit, on 1 May 1960, the USSR shot down an American U-2 spy plane over its territory and captured the pilot, Gary Powers. The USA at first claimed it was a weather plane. Eisenhower refused to apologise, and Khrushchev walked out of the Paris summit.'],
  ['Vienna, June 1961', 'Khrushchev met the new, young President John F. Kennedy in Vienna. Kennedy had just suffered the Bay of Pigs failure, and Khrushchev believed he could bully him. He renewed the demand that the West leave Berlin within six months. Kennedy refused and afterwards increased US defence spending.'],
  ['Results', 'The summits failed to solve the Berlin problem. Each failure increased tension, and by summer 1961 thousands of East Germans a day were leaving for the West, fearing the border would close. Khrushchev and Ulbricht decided on a drastic solution.'],
], view.factors('Why the summits failed', [
  ['Geneva', 'no agreement on Berlin'],
  ['Camp David', 'friendlier talks but no settlement'],
  ['Paris', 'wrecked by the U-2 incident'],
  ['Vienna', 'Khrushchev saw Kennedy as weak and renewed the ultimatum'],
]), [
  view.timeline('The summits', [
    ['May 1959', 'Geneva foreign ministers\' meeting'],
    ['Sept 1959', 'Camp David talks'],
    ['1 May 1960', 'U-2 shot down; Gary Powers captured'],
    ['May 1960', 'Paris summit collapses'],
    ['Apr 1961', 'Bay of Pigs failure'],
    ['Jun 1961', 'Vienna summit'],
  ]),
  view.people('People', [
    ['Dwight Eisenhower', 'Met Khrushchev at Camp David'],
    ['Gary Powers', 'U-2 pilot captured in 1960'],
    ['John F. Kennedy', 'President from January 1961'],
    ['Nikita Khrushchev', 'Pressed for the West to leave Berlin'],
  ]),
  view.source('A source type: a photograph of U-2 wreckage', 'A Soviet photograph of the wreckage of the U-2 spy plane displayed in Moscow in 1960.', 'Useful evidence that the USA had been spying; the USSR displayed it to embarrass the USA.'),
], [
  ['Why did the Paris summit collapse?', ['The U-2 incident: Eisenhower refused to apologise and Khrushchev walked out', 'Kennedy refused to attend because he wanted to visit Cuba and Mexico instead', 'France refused to host the summit after the failed Bay of Pigs invasion'], 0, 'Spying wrecked trust.'],
  ['Why did Khrushchev think he could bully Kennedy?', ['Kennedy was young and had just suffered the Bay of Pigs failure', 'Kennedy had promised to give Berlin to the USSR during his election', 'Kennedy had already agreed to remove all US troops from Europe'], 0, 'He saw weakness.'],
  ['Exam skill · Narrative account. Which sequence of events is in the right order?', ['Camp David talks; the U-2 incident; the Paris summit collapses; the Vienna summit.', 'The Vienna summit; Camp David talks; the U-2 incident; the Paris summit collapses.', 'The U-2 incident; the Vienna summit; Camp David talks; the Paris summit collapses.'], 0, 'A narrative needs a clear, linked order.'],
  ['What did Kennedy do after Vienna?', ['Refused to leave Berlin and increased defence spending', 'Agreed to make West Berlin a free city within six months', 'Withdrew US troops from West Germany to calm tension'], 0, 'He stood firm against Khrushchev.'],
], [
  Q('cwd12.p1', 'Where did Khrushchev and Eisenhower meet in 1959?', ['Camp David', 'Vienna, Austria', 'Paris, France'], 0, 'It is in the USA.', 'camp-david'),
  Q('cwd12.p2', 'When was the U-2 shot down?', ['1 May 1960', 'June 1961', 'October 1962'], 0, 'Before the Paris summit.', 'spy-plane'),
  Q('cwd12.p3', 'Who was the U-2 pilot?', ['Gary Powers', 'John Glenn', 'Rudolf Anderson'], 0, 'He was captured.', 'spy-plane'),
  Q('cwd12.p4', 'Where did Kennedy meet Khrushchev in 1961?', ['Vienna', 'Geneva', 'Camp David'], 0, 'They met in June 1961.', 'vienna'),
  Q('cwd12.p5', 'Who walked out of the Paris summit?', ['Khrushchev', 'Eisenhower', 'De Gaulle'], 0, 'He left over the U-2.', 'spy-plane'),
], [
  Q('cwd12.c1', 'What did the USA first claim the U-2 was?', ['A weather plane', 'A passenger jet', 'A fighter'], 0, 'Then the truth emerged.', 'spy-plane'),
  Q('cwd12.c2', 'What did Khrushchev do after Camp David?', ['Withdrew his deadline', 'Invaded West Berlin', 'Built the Berlin Wall'], 0, 'He did so for a time.', 'camp-david'),
  Q('cwd12.c3', 'What did Khrushchev renew at Vienna?', ['The Berlin ultimatum', 'Offers of peace talks', 'A new trade agreement'], 0, 'Six more months.', 'vienna'),
  Q('cwd12.c4', 'Which failure came just before Vienna?', ['The Bay of Pigs', 'The Berlin Airlift', 'Sputnik'], 0, 'It came in April 1961.', 'vienna'),
  Q('cwd12.c5', 'Did the summits solve Berlin?', ['No', 'Yes', 'Only Vienna did'], 0, 'Tension rose instead.', 'results'),
  Q('cwd12.c6', 'What did Eisenhower refuse to do?', ['Apologise for the U-2', 'Visit the Soviet Union', 'Meet President de Gaulle'], 0, 'Paris collapsed.', 'spy-plane'),
  Q('cwd12.c7', 'What rose sharply in summer 1961?', ['Refugees leaving the East', 'Soviet trade', 'Western aid to the East'], 0, 'Thousands a day.', 'results'),
  Q('cwd12.c8', 'Where did foreign ministers meet in 1959?', ['Geneva', 'Moscow', 'London'], 0, 'They reached no agreement.', 'camp-david'),
], {exam: 'Write a narrative account analysing the key events of the summits of 1959–61. (8 marks)'}),

lesson(T, 'coldwar.wall-impact', 'The impact of the Berlin Wall', ['P4 2.2', 'P4 2.3'], [
  ['Overnight, 13 August 1961', 'In the early hours of 13 August 1961 East German soldiers and police strung barbed wire across Berlin, closing the border between East and West. Over the following days and months it was replaced by a concrete wall with watchtowers, guards and a "death strip". Families and friends were suddenly divided.'],
  ['Stand-off at Checkpoint Charlie', 'In October 1961 a dispute over the right of American officials to enter East Berlin led to US and Soviet tanks facing each other at Checkpoint Charlie, a crossing point, for about sixteen hours. Both sides withdrew without firing.'],
  ['Escapes and deaths', 'People continued to try to escape over, under or through the Wall. Guards had orders to shoot, and many were killed; in 1962 eighteen-year-old Peter Fechter was shot and left to bleed to death in view of the West. Such deaths were powerful Western propaganda.'],
  ['Consequences', 'The Wall stopped the flow of refugees and saved East Germany from economic collapse. It ended the crisis over Berlin, because Khrushchev no longer needed the West to leave. But it became the great symbol of the Cold War and of communism\'s failure. In 1963 Kennedy visited West Berlin and declared his solidarity with its people to huge crowds.'],
], view.factors('Consequences of the Wall', [
  ['For East Germany', 'refugees stopped; the economy stabilised'],
  ['For tension', 'the Berlin crisis ended; war over Berlin avoided'],
  ['For Berliners', 'families divided; escapes and deaths'],
  ['For propaganda', 'a symbol of communist failure'],
]), [
  view.timeline('The Wall', [
    ['13 Aug 1961', 'Barbed wire closes the border'],
    ['Aug–Sept 1961', 'Concrete wall built'],
    ['Oct 1961', 'Tank stand-off at Checkpoint Charlie'],
    ['Aug 1962', 'Peter Fechter killed trying to escape'],
    ['Jun 1963', 'Kennedy visits West Berlin'],
  ]),
  view.people('People', [
    ['Walter Ulbricht', 'East German leader who pressed for the Wall'],
    ['Nikita Khrushchev', 'Agreed to the Wall'],
    ['John F. Kennedy', 'Accepted the Wall but visited Berlin in 1963'],
    ['Peter Fechter', 'Killed trying to escape in 1962'],
  ]),
  view.source('A source type: a photograph of an escape', 'A photograph of an East German soldier jumping over barbed wire into West Berlin in August 1961.', 'Powerful evidence of people\'s desperation to leave; one dramatic image cannot show how most people experienced the Wall.'),
], [
  ['Why did the Wall end the Berlin crisis?', ['It stopped the refugees, so Khrushchev no longer needed the West to leave', 'It forced the Western powers to withdraw all their troops from Berlin', 'It united East and West Berlin under a single city government'], 0, 'It solved Khrushchev\'s problem another way.'],
  ['Why was the Wall a propaganda gift to the West?', ['It showed communism had to wall people in to stop them leaving', 'It proved the USSR was richer than the West in every way', 'It was built by Western soldiers and paid for by the USA'], 0, 'A symbol of failure.'],
  ['Exam skill · Explain the importance. Which best explains the importance of the Berlin Wall?', ['It ended the Berlin crisis by stopping refugees, but became the great symbol of a divided Europe.', 'It was built in August 1961, starting with barbed wire before the concrete was added.', 'Peter Fechter was shot while trying to escape over the Berlin Wall in August 1962.'], 0, 'Importance explains effects.'],
  ['What happened at Checkpoint Charlie in October 1961?', ['US and Soviet tanks faced each other before both withdrew', 'East German guards opened the crossing for a whole week', 'Kennedy and Khrushchev met there to sign a peace treaty'], 0, 'A dangerous stand-off.'],
], [
  Q('cwd13.p1', 'When was the border closed?', ['13 August 1961', '9 November 1989', '24 June 1948'], 0, 'With barbed wire first.', 'building'),
  Q('cwd13.p2', 'Where did US and Soviet tanks face each other?', ['Checkpoint Charlie', 'Tempelhof', 'Brandenburg Gate only'], 0, 'This was in October 1961.', 'checkpoint'),
  Q('cwd13.p3', 'Who was shot trying to escape in 1962?', ['Peter Fechter', 'Gary Powers', 'Jan Palach'], 0, 'He was eighteen years old.', 'escapes'),
  Q('cwd13.p4', 'When did Kennedy visit West Berlin?', ['1963', '1961', '1989'], 0, 'He spoke to huge crowds.', 'consequences'),
  Q('cwd13.p5', 'What did the Wall stop?', ['The flow of refugees', 'All trade with the West', 'The nuclear arms race'], 0, 'Saving the East\'s economy.', 'consequences'),
], [
  Q('cwd13.c1', 'What was the "death strip"?', ['Guarded ground beside the Wall', 'A wide road built for tanks', 'A market for Western goods'], 0, 'Escapers were shot there.', 'building'),
  Q('cwd13.c2', 'How long did the tank stand-off last?', ['About sixteen hours', 'About sixteen days', 'Sixteen minutes'], 0, 'Then both sides withdrew.', 'checkpoint'),
  Q('cwd13.c3', 'What orders did guards have?', ['To shoot escapers', 'To let people go', 'To ignore crossings'], 0, 'Many were killed.', 'escapes'),
  Q('cwd13.c4', 'What did the Wall become a symbol of?', ['The Cold War', 'Friendship', 'German unity'], 0, 'And communist failure.', 'consequences'),
  Q('cwd13.c5', 'Who pressed for the Wall?', ['Walter Ulbricht', 'Willy Brandt', 'John F. Kennedy'], 0, 'East German leader.', 'building'),
  Q('cwd13.c6', 'What happened to families in Berlin?', ['Many were divided', 'They were all moved West', 'Nothing changed'], 0, 'It happened overnight.', 'building'),
  Q('cwd13.c7', 'Did the Wall lead to war?', ['No', 'Yes, at once', 'Only in Asia'], 0, 'It ended the crisis.', 'consequences'),
  Q('cwd13.c8', 'What replaced the barbed wire?', ['A concrete wall', 'A canal', 'A fence of wood'], 0, 'With watchtowers.', 'building'),
], {exam: 'Explain the importance of the building of the Berlin Wall for relations between the superpowers. (8 marks)'}),

lesson(T, 'coldwar.bay-of-pigs', 'The Bay of Pigs, 1961', ['P4 2.1'], [
  ['The Cuban Revolution', 'In January 1959 Fidel Castro overthrew Fulgencio Batista, a dictator friendly to the USA. American businesses owned much of Cuba\'s land and industry. Castro took over US-owned businesses and land, and the USA responded by cutting its purchases of Cuban sugar and then banning most trade.'],
  ['Castro turns to the USSR', 'In 1960 the USSR agreed to buy Cuban sugar and supply oil, machinery and weapons. For the USA, a communist ally of the USSR only about 150 kilometres from Florida was alarming.'],
  ['The invasion, April 1961', 'The CIA had trained around 1,400 Cuban exiles to invade and overthrow Castro, a plan Kennedy inherited. On 17 April 1961 they landed at the Bay of Pigs. Kennedy refused to send US air support, the expected uprising against Castro did not happen, and the invaders were defeated within three days.'],
  ['Consequences', 'The failure humiliated Kennedy, and Khrushchev concluded he was weak and inexperienced. Castro declared Cuba a socialist state and moved even closer to the USSR, asking for more weapons to defend against another attack. This led directly towards the Cuban Missile Crisis.'],
], view.factors('Why the invasion failed', [
  ['Too few', 'about 1,400 exiles against Castro\'s large army'],
  ['No air support', 'Kennedy refused to commit US forces openly'],
  ['No uprising', 'most Cubans did not rise against Castro'],
  ['Poor secrecy', 'the plan was widely known before it happened'],
]), [
  view.timeline('Cuba, 1959–61', [
    ['Jan 1959', 'Castro takes power'],
    ['1960', 'US businesses taken over; USA cuts sugar purchases'],
    ['1960', 'Soviet trade agreement with Cuba'],
    ['Jan 1961', 'Kennedy becomes President'],
    ['17 Apr 1961', 'The Bay of Pigs landing'],
    ['Late 1961', 'Castro declares himself a Marxist-Leninist'],
  ]),
  view.people('People', [
    ['Fidel Castro', 'Revolutionary leader of Cuba'],
    ['Fulgencio Batista', 'Dictator overthrown in 1959'],
    ['John F. Kennedy', 'Approved the invasion'],
    ['Cuban exiles', 'Trained by the CIA for the invasion'],
  ]),
  view.source('A source type: a CIA report', 'An internal report written after the invasion, criticising the planning and the assumption that Cubans would rise up.', 'Useful for why the plan failed; written later inside the CIA, it may also reflect blame between departments.'),
], [
  ['Why did the USA turn against Castro?', ['He took over US-owned businesses and moved towards the USSR', 'He had attacked Florida with Soviet missiles in 1959', 'He refused to sell any sugar to the USSR or China'], 0, 'Economic and strategic interests.'],
  ['Why did the invasion fail?', ['There was no US air support and no uprising against Castro', 'The exiles were too many and Castro surrendered too quickly', 'Soviet troops on the island fought off the invasion'], 0, 'It depended on help that never came.'],
  ['Exam skill · Explain two consequences. Which is a consequence of the Bay of Pigs?', ['Castro moved closer to the USSR and asked for weapons, leading towards the missile crisis.', 'The invasion took place on 17 April 1961 at the Bay of Pigs on Cuba\'s south coast.', 'About 1,400 Cuban exiles had been trained by the CIA before the landing.'], 0, 'A consequence explains a result.'],
  ['How did the failure affect Kennedy?', ['It humiliated him and made Khrushchev think he was weak', 'It made him more popular and helped him win re-election', 'It ended his presidency and he resigned in May 1961'], 0, 'Reputation mattered in the Cold War.'],
], [
  Q('cwd14.p1', 'When did Castro take power?', ['January 1959', 'April 1961', 'October 1962'], 0, 'Overthrowing Batista.', 'revolution'),
  Q('cwd14.p2', 'When was the Bay of Pigs invasion?', ['April 1961', 'October 1962', 'August 1961'], 0, 'The landing was on 17 April.', 'invasion'),
  Q('cwd14.p3', 'Who trained the exiles?', ['The CIA', 'The KGB', 'The British army'], 0, 'A plan Kennedy inherited.', 'invasion'),
  Q('cwd14.p4', 'Roughly how many exiles invaded?', ['About 1,400', 'About 14,000', 'About 140'], 0, 'They were far too few.', 'invasion'),
  Q('cwd14.p5', 'Who did Castro overthrow?', ['Batista', 'Khrushchev', 'Allende'], 0, 'A pro-US dictator.', 'revolution'),
], [
  Q('cwd14.c1', 'What did the USA stop buying from Cuba?', ['Sugar', 'Oil', 'Tobacco only'], 0, 'Cuba\'s main export.', 'revolution'),
  Q('cwd14.c2', 'What did the USSR agree to buy from Cuba?', ['Sugar', 'Missiles', 'Cars'], 0, 'It agreed to in 1960.', 'ussr'),
  Q('cwd14.c3', 'How far is Cuba from Florida?', ['About 150 kilometres', 'About 1,500 kilometres', 'About 15,000 kilometres'], 0, 'It is very close to the USA.', 'ussr'),
  Q('cwd14.c4', 'What did Kennedy refuse to send?', ['Air support', 'Food', 'Ambassadors'], 0, 'He wanted US involvement hidden.', 'invasion'),
  Q('cwd14.c5', 'How long did the invasion last?', ['About three days', 'About three months', 'About three years'], 0, 'It was a quick defeat.', 'invasion'),
  Q('cwd14.c6', 'What did Castro declare Cuba?', ['A socialist state', 'An ally of the USA', 'A neutral country'], 0, 'Closer to the USSR.', 'consequences'),
  Q('cwd14.c7', 'What did Castro then ask the USSR for?', ['Weapons for defence', 'Talks with Kennedy', 'Nothing at all'], 0, 'Fearing another attack.', 'consequences'),
  Q('cwd14.c8', 'What did most Cubans not do?', ['Rise against Castro', 'Support Castro\'s army', 'Remain on the island'], 0, 'The plan assumed they would.', 'invasion'),
], {exam: 'Explain two consequences of the Bay of Pigs invasion of 1961. (8 marks)'}),

lesson(T, 'coldwar.thirteen-days', 'Thirteen days: October 1962', ['P4 2.2'], [
  ['Discovery', 'On 14 October 1962 an American U-2 spy plane photographed Soviet nuclear missile sites being built in Cuba. Kennedy was shown the photographs on 16 October. Missiles in Cuba could reach most American cities within minutes.'],
  ['Choosing a response', 'Kennedy and his advisers, the Executive Committee (ExComm), considered doing nothing, diplomacy, an air strike, an invasion or a naval blockade. On 22 October Kennedy announced a naval "quarantine" around Cuba to stop more missiles arriving, and demanded that the existing ones be removed.'],
  ['The most dangerous days', 'On 24 October Soviet ships heading for Cuba stopped and turned back. On 26 October Khrushchev offered to remove the missiles if the USA promised not to invade Cuba. On 27 October a second message also demanded the removal of US missiles from Turkey, and a U-2 was shot down over Cuba, killing its pilot.'],
  ['The deal', 'Kennedy publicly accepted the first offer and ignored the second, while his brother Robert secretly agreed to remove the missiles in Turkey later. On 28 October Khrushchev announced that the missiles would be removed. The world had come closer to nuclear war than at any other time.'],
], view.factors('Kennedy\'s options', [
  ['Air strike or invasion', 'might destroy the missiles but could start nuclear war'],
  ['Do nothing', 'would leave missiles close to the USA and look weak'],
  ['Blockade', 'stopped more missiles while giving Khrushchev time'],
  ['Diplomacy', 'used alongside the blockade, including the secret Turkey deal'],
]), [
  view.timeline('October 1962', [
    ['14 Oct', 'U-2 photographs missile sites'],
    ['16 Oct', 'Kennedy is shown the photographs'],
    ['22 Oct', 'Kennedy announces the quarantine'],
    ['24 Oct', 'Soviet ships turn back'],
    ['26 Oct', 'Khrushchev\'s first message'],
    ['27 Oct', 'Second message; U-2 shot down over Cuba'],
    ['28 Oct', 'Khrushchev agrees to remove the missiles'],
  ]),
  view.people('People', [
    ['John F. Kennedy', 'US President'],
    ['Robert Kennedy', 'Attorney General who negotiated the secret deal'],
    ['Nikita Khrushchev', 'Soviet leader'],
    ['ExComm', 'Kennedy\'s advisers during the crisis'],
  ]),
  view.source('A source type: a U-2 reconnaissance photograph', 'An aerial photograph of a Cuban field with missile equipment labelled by American analysts.', 'Strong evidence of the missiles; the labels are the analysts\' interpretation and the image was used to persuade the world.'),
], [
  ['Why did Kennedy choose a blockade?', ['It stopped more missiles arriving without starting a war at once', 'It was the only option that ExComm had not discussed at all', 'Khrushchev had already asked the USA to blockade Cuba'], 0, 'It gave time for a deal.'],
  ['What did Khrushchev\'s second message add?', ['A demand that US missiles be removed from Turkey', 'A promise to remove all Soviet troops from Europe', 'An apology for shooting down the U-2 spy plane'], 0, 'This complicated the deal.'],
  ['Exam skill · Narrative account. Which sequence of events is in the right order?', ['Missiles photographed; the quarantine announced; Soviet ships turn back; Khrushchev agrees to remove the missiles.', 'The quarantine announced; missiles photographed; Khrushchev agrees to remove the missiles; Soviet ships turn back.', 'Soviet ships turn back; missiles photographed; the quarantine announced; Khrushchev agrees to remove the missiles.'], 0, 'A narrative links events in order.'],
  ['How was the crisis resolved?', ['Khrushchev removed the missiles; Kennedy promised not to invade and secretly agreed to Turkey', 'Kennedy invaded Cuba and removed all the missiles by force on 28 October', 'The United Nations took control of Cuba and all its missiles in November'], 0, 'A public and a secret deal.'],
], [
  Q('cwd15.p1', 'When were the missile sites photographed?', ['14 October 1962', '22 October 1962', '17 April 1961'], 0, 'They were photographed by a U-2.', 'discovery'),
  Q('cwd15.p2', 'What did Kennedy announce on 22 October?', ['A naval quarantine', 'A full invasion of Cuba', 'A surprise air strike'], 0, 'A blockade by another name.', 'response'),
  Q('cwd15.p3', 'What was ExComm?', ['Kennedy\'s advisers', 'A Soviet committee', 'A UN body'], 0, 'The Executive Committee.', 'response'),
  Q('cwd15.p4', 'When did Khrushchev agree to remove the missiles?', ['28 October', '24 October', '16 October'], 0, 'Ending the crisis.', 'deal'),
  Q('cwd15.p5', 'Where were the US missiles that Khrushchev wanted removed?', ['Turkey', 'Britain', 'Japan'], 0, 'Secretly agreed.', 'deal'),
], [
  Q('cwd15.c1', 'What happened on 24 October?', ['Soviet ships turned back', 'Soviet missiles were fired', 'US troops invaded Cuba'], 0, 'It was a key moment.', 'dangerous'),
  Q('cwd15.c2', 'What happened over Cuba on 27 October?', ['A U-2 was shot down', 'A missile was fired', 'A ship sank'], 0, 'Its pilot was killed.', 'dangerous'),
  Q('cwd15.c3', 'Who negotiated the secret Turkey deal?', ['Robert Kennedy', 'Fidel Castro', 'Dean Rusk'], 0, 'The President\'s brother.', 'deal'),
  Q('cwd15.c4', 'What did Khrushchev\'s first message offer?', ['Removal for a no-invasion promise', 'An immediate declaration of war', 'A summit meeting in Paris'], 0, 'It came on 26 October.', 'dangerous'),
  Q('cwd15.c5', 'Which option risked immediate nuclear war?', ['An air strike or invasion', 'The naval blockade', 'Diplomacy and talks'], 0, 'They were too dangerous.', 'response'),
  Q('cwd15.c6', 'Which offer did Kennedy accept publicly?', ['The first', 'The second', 'Neither'], 0, 'Ignoring the second.', 'deal'),
  Q('cwd15.c7', 'When was Kennedy shown the photographs?', ['16 October', '28 October', '1 May'], 0, 'Thirteen days began.', 'discovery'),
  Q('cwd15.c8', 'What could missiles in Cuba reach?', ['Most American cities', 'Only the state of Florida', 'Only Moscow and Leningrad'], 0, 'They could strike within minutes.', 'discovery'),
], {exam: 'Write a narrative account analysing the key events of the Cuban Missile Crisis in October 1962. (8 marks)'}),

lesson(T, 'coldwar.missile-consequences', 'The consequences of the Cuban Missile Crisis', ['P4 2.3'], [
  ['A shock to both sides', 'Both leaders realised how close they had come to a nuclear war that would have destroyed both countries. Neither wanted to risk such a confrontation again, and they took steps to reduce the danger.'],
  ['The hotline and the Test Ban Treaty', 'In 1963 a direct telephone and teleprinter link, the "hotline", was set up between Washington and Moscow so the leaders could talk quickly in a crisis. In August 1963 the USA, the USSR and Britain signed the Limited Test Ban Treaty, banning nuclear tests in the atmosphere, in space and underwater.'],
  ['Later agreements', 'The Outer Space Treaty (1967) banned nuclear weapons in space, and the Nuclear Non-Proliferation Treaty (1968) aimed to stop the spread of nuclear weapons to other countries. These were early steps towards later détente.'],
  ['Winners and losers', 'Kennedy\'s reputation rose because he appeared to have forced Khrushchev to back down. Khrushchev looked weak, because the Turkey deal was secret, and he was removed from power in 1964. Castro was angry that he had not been consulted. The crisis also pushed the USSR to build up its nuclear forces so it would never be so outmatched again.'],
], view.factors('Consequences of the crisis', [
  ['Communication', 'the hotline, 1963'],
  ['Arms control', 'Test Ban 1963; Outer Space 1967; Non-Proliferation 1968'],
  ['Leaders', 'Kennedy\'s reputation rose; Khrushchev removed in 1964'],
  ['Arms race', 'the USSR built up its nuclear forces'],
]), [
  view.timeline('After the crisis', [
    ['Apr 1963', 'US Jupiter missiles quietly removed from Turkey'],
    ['Jun 1963', 'The hotline set up'],
    ['Aug 1963', 'Limited Test Ban Treaty'],
    ['Oct 1964', 'Khrushchev removed from power'],
    ['1967', 'Outer Space Treaty'],
    ['1968', 'Nuclear Non-Proliferation Treaty'],
  ]),
  view.people('People', [
    ['John F. Kennedy', 'Seen as the winner of the crisis'],
    ['Nikita Khrushchev', 'Removed in 1964, partly because of Cuba'],
    ['Fidel Castro', 'Angry at being left out of the deal'],
    ['Leonid Brezhnev', 'Replaced Khrushchev and built up Soviet arms'],
  ]),
  view.source('A source type: a cartoon from 1962', 'A cartoon showing Kennedy and Khrushchev arm-wrestling while each sits on a nuclear bomb, both with fingers on the button.', 'Useful for how close to disaster people felt the world had come; it is one cartoonist\'s comment.'),
], [
  ['Why was the hotline set up?', ['So the leaders could talk quickly in a crisis and avoid misunderstanding', 'So the USA could listen in to secret Soviet military discussions', 'So the United Nations could control both countries\' nuclear weapons'], 0, 'Slow messages had added to the danger.'],
  ['Why did Khrushchev look weak after the crisis?', ['The Turkey deal was secret, so he seemed to have backed down', 'He had allowed the USA to invade Cuba and remove Castro', 'He had agreed to give East Germany to the Western powers'], 0, 'Appearances mattered.'],
  ['Exam skill · Explain two consequences. Which is a consequence of the Cuban Missile Crisis?', ['Both sides set up the hotline and signed the Test Ban Treaty to reduce the risk of nuclear war.', 'The crisis lasted for thirteen days in October 1962 and finally ended on 28 October.', 'Kennedy announced a naval quarantine around the island of Cuba on 22 October 1962.'], 0, 'A consequence is a result, explained.'],
  ['What did the Limited Test Ban Treaty ban?', ['Nuclear tests in the atmosphere, in space and underwater', 'All nuclear weapons held by the USA and USSR', 'The building of any missile bases outside each country'], 0, 'Underground tests continued.'],
], [
  Q('cwd16.p1', 'When was the hotline set up?', ['1963', '1962', '1968'], 0, 'Washington to Moscow.', 'hotline'),
  Q('cwd16.p2', 'Which treaty was signed in August 1963?', ['Limited Test Ban Treaty', 'Non-Proliferation Treaty', 'SALT 1'], 0, 'Banned some tests.', 'arms-control'),
  Q('cwd16.p3', 'When was Khrushchev removed?', ['1964', '1962', '1971'], 0, 'Partly because of Cuba.', 'leaders'),
  Q('cwd16.p4', 'Which treaty aimed to stop the spread of nuclear weapons?', ['Non-Proliferation Treaty', 'Outer Space Treaty', 'Limited Test Ban Treaty'], 0, 'It was signed in 1968.', 'arms-control'),
  Q('cwd16.p5', 'Whose reputation rose after the crisis?', ['Kennedy\'s', 'Khrushchev\'s', 'Castro\'s'], 0, 'He seemed to win.', 'leaders'),
], [
  Q('cwd16.c1', 'Who was angry at not being consulted?', ['Castro', 'Kennedy', 'Brezhnev'], 0, 'Cuba was left out.', 'leaders'),
  Q('cwd16.c2', 'When were the Jupiter missiles removed from Turkey?', ['1963', '1962', '1970'], 0, 'They were removed quietly.', 'leaders'),
  Q('cwd16.c3', 'What did the Outer Space Treaty ban?', ['Nuclear weapons in space', 'All space travel', 'Launching satellites'], 0, 'It was signed in 1967.', 'arms-control'),
  Q('cwd16.c4', 'How did the USSR respond in the long term?', ['Built up its nuclear forces', 'Gave up all its weapons', 'Left the Warsaw Pact'], 0, 'Never outmatched again.', 'arms-race'),
  Q('cwd16.c5', 'Which countries signed the Test Ban Treaty?', ['USA, USSR and Britain', 'The USA and Cuba alone', 'Only the Soviet Union'], 0, 'They signed it in 1963.', 'arms-control'),
  Q('cwd16.c6', 'What did both leaders realise?', ['How close they came to nuclear war', 'That a nuclear war was easy to win', 'That nothing had really been at risk'], 0, 'It was a profound shock.', 'shock'),
  Q('cwd16.c7', 'Who replaced Khrushchev?', ['Leonid Brezhnev', 'Mikhail Gorbachev', 'Yuri Andropov'], 0, 'He took over in 1964.', 'leaders'),
  Q('cwd16.c8', 'What were these agreements early steps towards?', ['Détente', 'War', 'Isolation'], 0, 'They helped ease tension.', 'arms-control'),
], {exam: 'Explain two consequences of the Cuban Missile Crisis. (8 marks)'}),

lesson(T, 'coldwar.dubcek', 'Dubček and opposition in Czechoslovakia', ['P4 2.1'], [
  ['Discontent in the 1960s', 'Czechoslovakia\'s economy stagnated in the 1960s and living standards fell behind the West. The communist leader Antonín Novotný was unpopular, and students, writers and economists called for change.'],
  ['Socialism with a human face', 'In January 1968 Alexander Dubček became leader of the Czechoslovak Communist Party. He wanted to keep communism but make it more popular and humane, a goal he called "socialism with a human face".'],
  ['The Prague Spring', 'Dubček\'s reforms relaxed censorship, allowed more freedom of speech and travel abroad, gave more power to trade unions and regional governments, and allowed some private business. People began to criticise the government openly, and some called for other political parties.'],
  ['Why Moscow worried', 'Dubček promised Czechoslovakia would stay in the Warsaw Pact and Comecon. But Brezhnev feared the reforms would weaken Communist Party control and spread to other satellites. In August 1968 Yugoslavia\'s Tito and Romania\'s Ceaușescu, both independent-minded communists, visited Prague, which alarmed the Soviet leaders further.'],
], view.factors('Why the reforms alarmed the USSR', [
  ['Party control', 'free speech and criticism could undermine the Communist Party'],
  ['Contagion', 'reforms might spread to other satellites'],
  ['Independence', 'visits from Tito and Ceaușescu suggested a breakaway'],
  ['Security', 'Czechoslovakia bordered West Germany'],
]), [
  view.timeline('1968', [
    ['Jan 1968', 'Dubček becomes party leader'],
    ['Apr 1968', 'The Action Programme of reforms'],
    ['Jun 1968', 'Censorship ended; a manifesto calls for faster reform'],
    ['Jul 1968', 'Warsaw Pact leaders warn Czechoslovakia'],
    ['Aug 1968', 'Tito and Ceaușescu visit Prague'],
  ]),
  view.people('People', [
    ['Alexander Dubček', 'Reforming Czechoslovak leader'],
    ['Antonín Novotný', 'Unpopular leader replaced in 1968'],
    ['Leonid Brezhnev', 'Soviet leader alarmed by the reforms'],
    ['Tito and Ceaușescu', 'Independent communist leaders who visited Prague'],
  ]),
  view.source('A source type: a Czechoslovak newspaper in 1968', 'A newspaper article openly criticising past communist abuses, published after censorship was relaxed.', 'Useful evidence of the new freedom of speech; one newspaper cannot show what all Czechoslovaks thought.'),
], [
  ['What did "socialism with a human face" mean?', ['Keeping communism but making it freer and more humane', 'Ending communism and joining NATO and the Marshall Plan', 'Making the Communist Party stricter and closer to Moscow'], 0, 'Reform, not revolution.'],
  ['Why did Brezhnev fear the Prague Spring?', ['Reforms could weaken party control and spread to other satellites', 'Dubček had announced that Czechoslovakia would join NATO at once', 'The reforms had caused a war between Czechoslovakia and Poland'], 0, 'The bloc could unravel.'],
  ['Exam skill · Explain the importance. Which best explains the importance of the Prague Spring for the Soviet bloc?', ['It threatened communist control across the bloc, which led the USSR to act to stop it spreading.', 'Dubček became the leader of the Czechoslovak Communist Party in January 1968.', 'Censorship was relaxed, and people could travel abroad much more freely during 1968.'], 0, 'Importance explains the effect on the bloc.'],
  ['Why did the visits of Tito and Ceaușescu alarm Moscow?', ['Both were independent-minded communists, suggesting a breakaway', 'Both had armies on Czechoslovakia\'s border ready to invade', 'Both had asked the USA to send troops to protect Prague'], 0, 'A sign of drifting loyalty.'],
], [
  Q('cwd17.p1', 'When did Dubček become leader?', ['January 1968', 'August 1968', 'October 1956'], 0, 'Replacing Novotný.', 'dubcek'),
  Q('cwd17.p2', 'What did Dubček call his aim?', ['Socialism with a human face', 'Peaceful coexistence with the West', 'Salami tactics against rivals'], 0, 'Humane communism.', 'dubcek'),
  Q('cwd17.p3', 'What was relaxed under the Prague Spring?', ['Censorship', 'The Warsaw Pact', 'Trade with the USSR'], 0, 'Free speech grew.', 'reforms'),
  Q('cwd17.p4', 'Who was the Soviet leader in 1968?', ['Brezhnev', 'Khrushchev', 'Gorbachev'], 0, 'He feared the reforms.', 'moscow'),
  Q('cwd17.p5', 'Which Romanian leader visited Prague?', ['Ceaușescu', 'János Kádár', 'Gustáv Husák'], 0, 'He came with Tito.', 'moscow'),
], [
  Q('cwd17.c1', 'Who was the unpopular leader before Dubček?', ['Novotný', 'Husák', 'Masaryk'], 0, 'Replaced in 1968.', 'discontent'),
  Q('cwd17.c2', 'Did Dubček plan to leave the Warsaw Pact?', ['No', 'Yes', 'He had already left'], 0, 'He promised to stay.', 'moscow'),
  Q('cwd17.c3', 'What did reforms allow some people to do?', ['Travel abroad', 'Join NATO', 'Vote for Brezhnev'], 0, 'It gave them more freedom.', 'reforms'),
  Q('cwd17.c4', 'What was the economy like in the 1960s?', ['Stagnating', 'Booming', 'Rich as the West'], 0, 'Living standards fell behind.', 'discontent'),
  Q('cwd17.c5', 'Which country bordered Czechoslovakia to the west?', ['West Germany', 'France', 'Italy'], 0, 'A security worry.', 'moscow'),
  Q('cwd17.c6', 'What did some people call for?', ['Other political parties', 'Stricter press censorship', 'More Soviet troops'], 0, 'Beyond Dubček\'s aims.', 'reforms'),
  Q('cwd17.c7', 'Who gained more power under the reforms?', ['Trade unions', 'The secret police', 'Soviet advisers'], 0, 'And regional governments.', 'reforms'),
  Q('cwd17.c8', 'Which Yugoslav leader visited Prague?', ['Tito', 'Stalin', 'Nagy'], 0, 'He visited in August 1968.', 'moscow'),
], {exam: 'Explain the importance of Dubček\'s reforms for Soviet control of Eastern Europe. (8 marks)'}),

lesson(T, 'coldwar.brezhnev-doctrine', 'The Brezhnev Doctrine and its consequences', ['P4 2.2', 'P4 2.3'], [
  ['The invasion, August 1968', 'On the night of 20–21 August 1968 around half a million troops from the USSR and other Warsaw Pact countries invaded Czechoslovakia. Dubček told the army not to resist, so there was little fighting, but people protested in the streets, argued with soldiers and painted slogans. Dubček was taken to Moscow and later replaced by Gustáv Husák in 1969.'],
  ['The Brezhnev Doctrine', 'Brezhnev justified the invasion by declaring that if socialism was threatened in any communist country, the others had the right and duty to intervene. This became known as the Brezhnev Doctrine. It meant that satellite states could not reform beyond limits set by Moscow.'],
  ['International reaction', 'The USA condemned the invasion but did nothing; it was deeply involved in the Vietnam War and would not risk war in the Soviet sphere. A UN resolution condemning the invasion was blocked by a Soviet veto. Yugoslavia, Romania and many Western communist parties criticised the USSR.'],
  ['Consequences', 'Soviet control over Eastern Europe was tightened, and reform was crushed for two decades. But the invasion damaged the USSR\'s reputation and divided communists around the world. Within a few years both superpowers nevertheless moved towards détente.'],
], view.factors('Consequences of the invasion', [
  ['For Czechoslovakia', 'reforms reversed; Dubček replaced by Husák'],
  ['For the bloc', 'the Brezhnev Doctrine limited reform everywhere'],
  ['For the West', 'condemnation without action; the division of Europe confirmed'],
  ['For communism', 'damaged reputation and a split among communist parties'],
]), [
  view.timeline('1968–69', [
    ['20–21 Aug 1968', 'Warsaw Pact invasion'],
    ['Aug 1968', 'Dubček taken to Moscow'],
    ['Aug 1968', 'UN resolution blocked by Soviet veto'],
    ['Nov 1968', 'The Brezhnev Doctrine set out'],
    ['Apr 1969', 'Husák replaces Dubček'],
  ]),
  view.people('People', [
    ['Leonid Brezhnev', 'Ordered the invasion'],
    ['Alexander Dubček', 'Told the army not to resist'],
    ['Gustáv Husák', 'Hard-line leader from 1969'],
    ['Lyndon Johnson', 'US President focused on Vietnam'],
  ]),
  view.source('A source type: a photograph of protesters and a tank', 'A photograph of Prague residents surrounding a Soviet tank, arguing with the soldiers on top.', 'Useful for the non-violent resistance; one image cannot show the whole country\'s response.'),
], [
  ['Why was there little fighting in 1968?', ['Dubček told the army not to resist the invasion', 'The Czechoslovak army had already been disbanded', 'NATO troops arrived to keep the two sides apart'], 0, 'Resistance was mostly peaceful protest.'],
  ['What did the Brezhnev Doctrine claim?', ['Communist states had the right to intervene if socialism was threatened in one', 'The USSR would never again send troops into another communist country', 'All satellite states were free to leave the Warsaw Pact if they wished'], 0, 'It limited reform.'],
  ['Exam skill · Explain two consequences. Which is a consequence of the invasion of Czechoslovakia?', ['The Brezhnev Doctrine meant no satellite could reform beyond Moscow\'s limits for two decades.', 'Around half a million Warsaw Pact troops took part in the invasion in August 1968.', 'Dubček was taken to Moscow and later replaced by Gustáv Husák in April 1969.'], 0, 'A consequence explains a lasting result.'],
  ['Why did the USA not act?', ['It was involved in Vietnam and would not risk war in the Soviet sphere', 'It had agreed in advance that the USSR should invade Czechoslovakia', 'Czechoslovakia had asked the USA not to send help of any kind'], 0, 'Spheres of influence again.'],
], [
  Q('cwd18.p1', 'When was Czechoslovakia invaded?', ['August 1968', 'November 1956', 'August 1961'], 0, 'On 20–21 August.', 'invasion'),
  Q('cwd18.p2', 'Roughly how many troops invaded?', ['About half a million', 'About five thousand', 'About five million'], 0, 'From several Warsaw Pact states.', 'invasion'),
  Q('cwd18.p3', 'Who replaced Dubček?', ['Gustáv Husák', 'Antonín Novotný', 'Václav Havel'], 0, 'He took over in 1969.', 'invasion'),
  Q('cwd18.p4', 'What blocked the UN resolution?', ['A Soviet veto', 'A US veto', 'A British veto'], 0, 'In the Security Council.', 'reaction'),
  Q('cwd18.p5', 'Which war occupied the USA in 1968?', ['Vietnam', 'Korea', 'Afghanistan'], 0, 'So it did not act.', 'reaction'),
], [
  Q('cwd18.c1', 'What did Dubček order the army to do?', ['Not resist', 'Fight back hard', 'Flee the country'], 0, 'Little fighting.', 'invasion'),
  Q('cwd18.c2', 'Which countries criticised the USSR?', ['Yugoslavia and Romania', 'East Germany and Poland', 'Hungary and Bulgaria'], 0, 'Independent communists.', 'reaction'),
  Q('cwd18.c3', 'What happened to reform in the bloc?', ['It was crushed for two decades', 'It spread to every satellite', 'It became law across the bloc'], 0, 'Until Gorbachev.', 'consequences'),
  Q('cwd18.c4', 'How did people in Prague resist?', ['Peaceful protest', 'Armed rebellion', 'They did not'], 0, 'Arguing with soldiers.', 'invasion'),
  Q('cwd18.c5', 'How did the invasion affect communism abroad?', ['It divided communists', 'It united all communists', 'It had no effect at all'], 0, 'Western parties criticised.', 'consequences'),
  Q('cwd18.c6', 'Where was Dubček taken?', ['Moscow', 'Washington', 'Berlin'], 0, 'After the invasion.', 'invasion'),
  Q('cwd18.c7', 'What did the USA do?', ['Condemned but did nothing', 'Invaded with NATO forces', 'Praised the Soviet action'], 0, 'It took no action.', 'reaction'),
  Q('cwd18.c8', 'What did both superpowers move towards soon after?', ['Détente', 'Open war', 'Isolation'], 0, 'This came in the 1970s.', 'consequences'),
], {exam: 'Explain two consequences of the Warsaw Pact invasion of Czechoslovakia in 1968. (8 marks)'}),
];
