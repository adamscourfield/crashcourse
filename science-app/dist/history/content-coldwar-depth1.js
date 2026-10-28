// Pearson Edexcel GCSE (9–1) History 1HI0, Option P4: Superpower relations and the Cold War, 1941–91.
// Depth lessons for key topic 1 (specification 1.1–1.3). Each follows its subsection's overview lesson.
// All text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261028-history09';

const T = 'history.coldwar.kt1';

export const coldwarDepth1 = [
lesson(T, 'coldwar.conferences', 'Tehran, Yalta and Potsdam', ['P4 1.1'], [
  ['Tehran, November 1943', 'Stalin, Roosevelt and Churchill met for the first time. They agreed that Britain and the USA would open a second front by invading France, which they did on D-Day in 1944, and that the USSR would join the war against Japan once Germany was defeated. They also agreed in principle that Poland\'s borders would move west and that a new international organisation should be set up.'],
  ['Yalta, February 1945', 'With victory close, the three leaders agreed that Germany and Berlin would each be divided into four zones of occupation. They signed a Declaration on Liberated Europe promising free elections in the countries freed from Nazi control. Poland would fall within the Soviet sphere of influence, with a government including both Soviet-backed and London-based Poles, and the United Nations would be set up.'],
  ['Potsdam, July–August 1945', 'By Potsdam the mood had changed. Roosevelt had died and been replaced by Harry Truman, who distrusted Stalin, and Churchill was replaced midway by Clement Attlee after a British election. They agreed that Germany would be demilitarised and de-Nazified, and that each power would take reparations from its own zone, with the USSR also receiving some industrial equipment from the western zones.'],
  ['Growing disagreement', 'At Potsdam the leaders argued over Poland\'s new western border and over how much Germany should pay. Truman told Stalin about a powerful new weapon after the first atomic test in July 1945, and the bombing of Hiroshima in August showed the USA had a weapon the USSR did not. Trust between the wartime allies was breaking down.'],
], view.factors('From agreement to suspicion', [
  ['Tehran', 'agreement on a second front and on Poland\'s borders'],
  ['Yalta', 'zones in Germany; free elections promised; Poland in the Soviet sphere'],
  ['Potsdam', 'reparations and de-Nazification agreed; disputes over Poland and Germany'],
  ['Why the change', 'new leaders, the end of the common enemy and the atomic bomb'],
]), [
  view.timeline('The wartime conferences', [
    ['Nov 1943', 'Tehran'],
    ['Jun 1944', 'D-Day: the second front opens'],
    ['Feb 1945', 'Yalta'],
    ['Apr 1945', 'Roosevelt dies; Truman becomes President'],
    ['Jul–Aug 1945', 'Potsdam; Attlee replaces Churchill'],
    ['Aug 1945', 'Atomic bombs dropped on Japan'],
  ]),
  view.people('Leaders', [
    ['Joseph Stalin', 'Soviet leader at all three conferences'],
    ['Franklin D. Roosevelt', 'US President at Tehran and Yalta'],
    ['Harry Truman', 'US President at Potsdam'],
    ['Winston Churchill and Clement Attlee', 'British leaders; Attlee replaced Churchill during Potsdam'],
  ]),
  view.source('A source type: an official photograph from Yalta', 'A posed photograph of Churchill, Roosevelt and Stalin seated together outside the conference palace.', 'Useful for the public image of unity; posed photographs hide the disagreements discussed in private.'),
], [
  ['Why was Potsdam less friendly than Yalta?', ['Truman distrusted Stalin, Germany was defeated and the USA had the atomic bomb', 'Stalin refused to attend Potsdam and sent a junior minister to speak for him', 'Britain had joined the Soviet Union in opposing American plans for Japan'], 0, 'New leaders and new circumstances.'],
  ['What did the Yalta declaration promise?', ['Free elections in countries freed from Nazi control', 'Soviet control of all of Germany after the war', 'An American army based permanently in Poland'], 0, 'Later broken in Eastern Europe.'],
  ['Exam skill · Explain two consequences. Which is a consequence of the Potsdam Conference?', ['Disagreement over Germany and Poland increased mistrust between the USA and the USSR.', 'Potsdam was held in July and August 1945, near Berlin in Germany.', 'Clement Attlee replaced Winston Churchill as Prime Minister during the conference.'], 0, 'A consequence explains a result.'],
  ['What did Tehran agree about the war?', ['Britain and the USA would open a second front by invading France', 'The USSR would leave the war once Poland was freed from Germany', 'Germany would be allowed to keep its army after its surrender'], 0, 'Stalin had long demanded this.'],
], [
  Q('cwd1.p1', 'When was the Yalta Conference?', ['February 1945', 'November 1943', 'July 1945'], 0, 'Tehran was 1943; Potsdam July 1945.', 'yalta'),
  Q('cwd1.p2', 'Who represented the USA at Potsdam?', ['Harry Truman', 'Franklin D. Roosevelt', 'Dwight Eisenhower'], 0, 'Roosevelt had died in April.', 'potsdam'),
  Q('cwd1.p3', 'Into how many zones was Germany divided?', ['Four', 'Two', 'Six'], 0, 'And Berlin likewise.', 'yalta'),
  Q('cwd1.p4', 'What did Tehran agree on?', ['A second front in France', 'The division of Korea', 'The Marshall Plan'], 0, 'Opened on D-Day.', 'tehran'),
  Q('cwd1.p5', 'Who replaced Churchill during Potsdam?', ['Clement Attlee', 'Anthony Eden', 'Harold Macmillan'], 0, 'After a British election.', 'potsdam'),
], [
  Q('cwd1.c1', 'Where was each power to take reparations from?', ['Its own zone of Germany', 'The other powers\' zones', 'Japan and Italy only'], 0, 'Agreed at Potsdam.', 'potsdam'),
  Q('cwd1.c2', 'Which organisation did the leaders agree to set up?', ['The United Nations', 'NATO', 'The Warsaw Pact'], 0, 'Agreed in principle at Tehran.', 'tehran'),
  Q('cwd1.c3', 'Whose sphere would Poland fall into?', ['The Soviet sphere', 'The American sphere', 'The British sphere'], 0, 'Agreed at Yalta.', 'yalta'),
  Q('cwd1.c4', 'What did Truman tell Stalin about at Potsdam?', ['A powerful new weapon', 'A plan to invade Poland', 'A new trade agreement'], 0, 'The atomic bomb.', 'potsdam'),
  Q('cwd1.c5', 'When did the USSR agree to fight Japan?', ['After Germany was defeated', 'Before D-Day in June 1944', 'Never at any time in the war'], 0, 'Agreed at Tehran and Yalta.', 'tehran'),
  Q('cwd1.c6', 'What was agreed for Germany at Potsdam?', ['Demilitarisation and de-Nazification', 'Reunification under one government', 'Rearmament under Allied control'], 0, 'To prevent another war.', 'potsdam'),
  Q('cwd1.c7', 'Which city was bombed in August 1945?', ['Hiroshima', 'Berlin', 'Warsaw'], 0, 'The USA\'s atomic monopoly.', 'disagreement'),
  Q('cwd1.c8', 'What did the leaders argue over at Potsdam?', ['Poland\'s border and reparations', 'Opening a second front in France', 'Whether to restore the Kaiser'], 0, 'Trust was breaking down.', 'disagreement'),
], {exam: 'Explain two consequences of the Yalta Conference. (8 marks)'}),

lesson(T, 'coldwar.ideologies', 'Capitalism and communism', ['P4 1.1'], [
  ['Capitalism', 'The USA was capitalist. Businesses and property were privately owned, and a free market decided prices and wages. It was a democracy with several political parties, free elections and freedoms of speech, religion and the press. Americans believed this system brought wealth and liberty.'],
  ['Communism', 'The USSR was communist. The state owned industry and land and planned the economy, aiming to share wealth more equally. Only the Communist Party was allowed, and the state controlled the media and restricted freedoms. Communists believed capitalism exploited workers and would eventually be overthrown worldwide.'],
  ['A history of suspicion', 'Mistrust went back decades. Western countries had sent troops to fight against the communists in the Russian Civil War after 1918. The USSR saw the Munich agreement of 1938 as the West encouraging Hitler eastwards, while the West was shocked by Stalin\'s pact with Hitler in 1939. During the war Stalin resented how long the West took to open a second front.'],
  ['Why ideology mattered after 1945', 'Each side believed its system was right and that the other wanted to spread its system across the world. With Germany defeated, nothing held them together, and every action by one side could be seen by the other as aggression.'],
], view.factors('Capitalism and communism compared', [
  ['Economy', 'private ownership and a free market against state ownership and planning'],
  ['Politics', 'many parties and free elections against one-party rule'],
  ['Freedoms', 'individual liberty against equality and state control'],
  ['World view', 'each believed the other wanted to spread its system'],
]), [
  view.timeline('Roots of mistrust', [
    ['1917', 'The Russian Revolution brings communists to power'],
    ['1918–20', 'Western troops intervene in the Russian Civil War'],
    ['1938', 'The Munich agreement'],
    ['1939', 'The Nazi-Soviet Pact'],
    ['1941', 'Germany invades the USSR; the Grand Alliance forms'],
    ['1944', 'The second front finally opens'],
  ]),
  view.people('People', [
    ['Joseph Stalin', 'Soviet leader from the late 1920s'],
    ['Harry Truman', 'US President from 1945'],
    ['Communists', 'Believed in state ownership and world revolution'],
    ['Capitalists', 'Believed in private ownership and democracy'],
  ]),
  view.source('A source type: a Soviet poster', 'A poster showing a wealthy American businessman as greedy, with workers suffering beneath him.', 'Useful for how the USSR portrayed capitalism; it is propaganda and presents one side only.'),
], [
  ['Why did the Russian Civil War cause Soviet mistrust?', ['Western countries had sent troops to fight against the communists', 'The USA had refused to sell any food to Russia during the war', 'Britain had supported the communists and then changed sides'], 0, 'The USSR remembered the intervention.'],
  ['What did communists believe would happen to capitalism?', ['It would eventually be overthrown across the world', 'It would gradually become the same as communism', 'It would always remain the strongest system in the world'], 0, 'This frightened the West.'],
  ['Exam skill · Explain the importance. Which best explains why ideology was important to the start of the Cold War?', ['Each side believed the other wanted to spread its system, so actions were seen as threats.', 'The USA was a capitalist country and the USSR was a communist country after 1917.', 'Communism meant that the state owned industry and planned the economy.'], 0, 'Importance links a factor to an outcome.'],
  ['Why did nothing hold the allies together after 1945?', ['Their common enemy, Nazi Germany, had been defeated', 'They had all signed a treaty to become a single country', 'The United Nations ordered them to stop working together'], 0, 'Wartime unity was temporary.'],
], [
  Q('cwd2.p1', 'Which system did the USA have?', ['Capitalism', 'Communism', 'Fascism'], 0, 'Private ownership and democracy.', 'capitalism'),
  Q('cwd2.p2', 'Who owned industry under communism?', ['The state', 'Private businesses', 'Foreign banks'], 0, 'The economy was planned.', 'communism'),
  Q('cwd2.p3', 'How many parties were allowed in the USSR?', ['One', 'Two', 'Many'], 0, 'Only the Communist Party.', 'communism'),
  Q('cwd2.p4', 'When did Stalin sign a pact with Hitler?', ['1939', '1945', '1918'], 0, 'The Nazi-Soviet Pact.', 'suspicion'),
  Q('cwd2.p5', 'What did capitalists value most?', ['Individual freedom', 'Central state planning', 'Strict one-party rule'], 0, 'And private property.', 'capitalism'),
], [
  Q('cwd2.c1', 'What decided prices in a capitalist economy?', ['The free market', 'The government', 'The Communist Party'], 0, 'Supply and demand.', 'capitalism'),
  Q('cwd2.c2', 'Which agreement did the USSR resent from 1938?', ['Munich', 'Versailles', 'Yalta'], 0, 'It seemed to point Hitler east.', 'suspicion'),
  Q('cwd2.c3', 'What did Stalin resent during the war?', ['The delay in the second front', 'American loans to Britain in 1941', 'The first American atomic test'], 0, 'The USSR bore the heaviest losses.', 'suspicion'),
  Q('cwd2.c4', 'What did communism aim for?', ['Greater equality', 'Greater private wealth', 'Restoring monarchy'], 0, 'It aimed to share wealth.', 'communism'),
  Q('cwd2.c5', 'Who controlled the media in the USSR?', ['The state', 'Private owners', 'The UN'], 0, 'Freedoms were restricted.', 'communism'),
  Q('cwd2.c6', 'When did Western troops fight the Russian communists?', ['1918–20', '1941–45', '1950–53'], 0, 'The Russian Civil War.', 'suspicion'),
  Q('cwd2.c7', 'What did each side fear about the other?', ['Spreading its system', 'Leaving the United Nations', 'Disarming its own forces'], 0, 'Ideological rivalry.', 'importance'),
  Q('cwd2.c8', 'Which system held free elections?', ['Capitalist democracy', 'Soviet-style communism', 'Neither of the two systems'], 0, 'With several parties.', 'capitalism'),
], {exam: 'Explain the importance of ideological differences for the start of the Cold War. (8 marks)'}),

lesson(T, 'coldwar.satellites', 'Soviet expansion in Eastern Europe', ['P4 1.1'], [
  ['Why Stalin wanted control', 'Russia had been invaded from the west twice in thirty years, and around twenty million Soviet people died in the Second World War. Stalin wanted a buffer zone of friendly governments in Eastern Europe to protect the USSR from any future attack. He also wanted to spread communism.'],
  ['How control was taken', 'The Red Army was already in Eastern Europe after driving out the Germans. Communists took key posts, such as the interior ministry that controlled the police, then used intimidation, arrests and rigged elections to remove rivals step by step. These methods were later called "salami tactics", slicing away opponents one by one.'],
  ['The satellite states', 'By 1948 communist governments loyal to Moscow ruled Poland, Hungary, Romania, Bulgaria and Albania. In February 1948 communists seized power in Czechoslovakia, and the foreign minister, Jan Masaryk, was found dead soon after. Yugoslavia, under Tito, was communist but broke with Stalin in 1948. These countries became known as Soviet satellite states.'],
  ['The Western view', 'Western leaders saw Soviet actions as breaking the Yalta promise of free elections and as the start of communist expansion. In 1946 Churchill described an "iron curtain" dividing Europe. The USA concluded that Soviet expansion had to be stopped.'],
], view.factors('Defensive or aggressive?', [
  ['Defensive view', 'a buffer zone after two invasions and huge losses'],
  ['Aggressive view', 'broken promises of free elections and the spread of communism'],
  ['Methods', 'the Red Army, control of the police, rigged elections, salami tactics'],
  ['Effect', 'Western fear and the policy of containment'],
]), [
  view.timeline('Soviet expansion', [
    ['1945', 'The Red Army occupies Eastern Europe'],
    ['1946', 'Communists take power in Bulgaria; Churchill\'s "iron curtain" speech'],
    ['1947', 'Rigged elections in Poland; communists dominate Romania and Hungary'],
    ['Feb 1948', 'Communist takeover in Czechoslovakia'],
    ['1948', 'Tito\'s Yugoslavia breaks with Stalin'],
    ['1949', 'East Germany created'],
  ]),
  view.people('People', [
    ['Joseph Stalin', 'Wanted a buffer zone of friendly states'],
    ['Jan Masaryk', 'Czech foreign minister found dead in 1948'],
    ['Josip Broz Tito', 'Yugoslav leader who broke with Stalin'],
    ['Winston Churchill', 'Warned of an "iron curtain" in 1946'],
  ]),
  view.source('A source type: a 1947 Polish election poster', 'A poster for the communist-led bloc in the 1947 Polish election, which Western observers said was rigged.', 'Useful for communist campaign methods; it cannot show the intimidation and fraud reported in the election.'),
], [
  ['Why did Stalin want a buffer zone?', ['Russia had been invaded from the west twice, with huge losses', 'He wanted to build American air bases in Eastern Europe', 'The United Nations had ordered him to protect Eastern Europe'], 0, 'Security was a major motive.'],
  ['What were "salami tactics"?', ['Removing political opponents step by step', 'Cutting off trade with the West slice by slice', 'Dividing Germany into thin strips of land'], 0, 'Communists sliced away rivals.'],
  ['Exam skill · Narrative account. Which sequence of events is in the right order?', ['The Red Army occupies Eastern Europe; Churchill speaks of an iron curtain; communists take Czechoslovakia.', 'Communists take Czechoslovakia; the Red Army occupies Eastern Europe; Churchill speaks of an iron curtain.', 'Churchill speaks of an iron curtain; communists take Czechoslovakia; the Red Army occupies Eastern Europe.'], 0, 'A narrative needs events in a logical, linked order.'],
  ['Why did the West see Soviet actions as aggressive?', ['They broke the Yalta promise of free elections in Eastern Europe', 'Stalin had sent troops to occupy London and Washington in 1946', 'The USSR had attacked the United States with an atomic bomb'], 0, 'Promises were broken.'],
], [
  Q('cwd3.p1', 'Roughly how many Soviet people died in the war?', ['About twenty million', 'About two million', 'About two hundred thousand'], 0, 'Estimates vary but are huge.', 'buffer'),
  Q('cwd3.p2', 'When did communists take Czechoslovakia?', ['February 1948', 'May 1945', 'October 1956'], 0, 'Masaryk died soon after.', 'satellites'),
  Q('cwd3.p3', 'Which communist leader broke with Stalin?', ['Tito', 'Rákosi', 'Ulbricht'], 0, 'In Yugoslavia, 1948.', 'satellites'),
  Q('cwd3.p4', 'Who spoke of an "iron curtain" in 1946?', ['Churchill', 'Truman', 'Kennan'], 0, 'He spoke in the USA.', 'west'),
  Q('cwd3.p5', 'Which ministry did communists often take first?', ['The interior ministry', 'The ministry of culture', 'The ministry of sport'], 0, 'It controlled the police.', 'methods'),
], [
  Q('cwd3.c1', 'Where was the Red Army in 1945?', ['Eastern Europe', 'Western Europe', 'North America'], 0, 'After driving out Germany.', 'methods'),
  Q('cwd3.c2', 'What were the satellite states?', ['Countries controlled by Moscow', 'Independent, neutral democracies', 'Allies of the United States'], 0, 'Communist governments.', 'satellites'),
  Q('cwd3.c3', 'Who was found dead in 1948?', ['Jan Masaryk', 'Imre Nagy', 'Marshal Tito'], 0, 'Czech foreign minister.', 'satellites'),
  Q('cwd3.c4', 'What did salami tactics remove?', ['Political opponents', 'Soviet troops in the area', 'Barriers to trade'], 0, 'They were removed one by one.', 'methods'),
  Q('cwd3.c5', 'Which promise did the West say Stalin broke?', ['Free elections', 'The second front', 'Joining the UN'], 0, 'It was made at Yalta.', 'west'),
  Q('cwd3.c6', 'When was the Polish election that observers called rigged?', ['1947', '1945', '1956'], 0, 'The communists won it.', 'satellites'),
  Q('cwd3.c7', 'What did the USA conclude about Soviet expansion?', ['It had to be stopped', 'It was harmless', 'It should be copied'], 0, 'Containment followed.', 'west'),
  Q('cwd3.c8', 'Why did Stalin also expand?', ['To spread communism', 'To spread capitalism', 'To restore monarchies'], 0, 'As well as security.', 'buffer'),
], {exam: 'Write a narrative account analysing the key events of Soviet expansion in Eastern Europe in the years 1945–49. (8 marks)'}),

lesson(T, 'coldwar.telegrams', 'The Long and Novikov Telegrams', ['P4 1.1'], [
  ['The Long Telegram, 1946', 'In February 1946 George Kennan, an American diplomat in Moscow, sent a long telegram to Washington. He argued that Stalin saw capitalism as a threat, wanted to expand Soviet power, and would only back down when faced with strength. He advised that the USA should resist Soviet expansion.'],
  ['The Novikov Telegram, 1946', 'In September 1946 Nikolai Novikov, the Soviet ambassador in Washington, sent his own report to Moscow. He argued that the USA was seeking world domination, building military bases around the world and using its economic power to control other countries, and that it was preparing for war against the USSR.'],
  ['Why they mattered', 'Each telegram told its government that the other side was aggressive and expansionist. Each confirmed the fears that leaders already had, and they encouraged both sides to see the other\'s actions as threats rather than as defensive moves.'],
  ['From telegrams to policy', 'Kennan\'s ideas shaped the American policy of containment: stopping the spread of communism beyond where it already existed. Novikov\'s report reinforced Stalin\'s determination to keep tight control of Eastern Europe. Within a year the USA had announced the Truman Doctrine.'],
], view.factors('Two views of the other side', [
  ['Kennan on the USSR', 'sees capitalism as a threat; wants to expand; backs down only to strength'],
  ['Novikov on the USA', 'seeks world domination; builds bases; uses economic power'],
  ['Shared effect', 'each side\'s fears were confirmed'],
  ['Policy', 'containment in the USA; tighter control in Eastern Europe'],
]), [
  view.timeline('1946–47', [
    ['Feb 1946', 'Kennan\'s Long Telegram'],
    ['Mar 1946', 'Churchill\'s "iron curtain" speech'],
    ['Sept 1946', 'The Novikov Telegram'],
    ['Mar 1947', 'The Truman Doctrine'],
  ]),
  view.people('People', [
    ['George Kennan', 'American diplomat who wrote the Long Telegram'],
    ['Nikolai Novikov', 'Soviet ambassador who wrote the Novikov Telegram'],
    ['Harry Truman', 'President who adopted containment'],
    ['Vyacheslav Molotov', 'Soviet foreign minister who received Novikov\'s report'],
  ]),
  view.source('A source type: a diplomatic telegram', 'A confidential report sent by an ambassador to his own government analysing the other superpower\'s intentions.', 'Useful for what governments were being told in private; it reflects one diplomat\'s interpretation and what his leaders wanted to hear.'),
], [
  ['What did Kennan say the USA should do?', ['Resist Soviet expansion, because the USSR backed down when faced with strength', 'Withdraw from Europe and leave Stalin to decide its future entirely alone', 'Share the secret of the atomic bomb with Stalin to build lasting trust'], 0, 'This became containment.'],
  ['What did Novikov claim about the USA?', ['It was seeking world domination and preparing for war against the USSR', 'It wanted to become communist and join the Soviet bloc in Europe', 'It planned to leave Europe and return to isolation after 1946'], 0, 'A mirror image of Kennan.'],
  ['Exam skill · Explain two consequences. Which is a consequence of the Long Telegram?', ['It shaped the policy of containment, leading towards the Truman Doctrine in 1947.', 'It was written by George Kennan, an American diplomat working in Moscow.', 'It was sent from Moscow to Washington in February 1946 as a long message.'], 0, 'A consequence is a result, explained.'],
  ['Why did the telegrams increase tension?', ['Each confirmed its government\'s fears that the other side was aggressive', 'They were published in newspapers and caused riots in both countries', 'They revealed that both sides were secretly planning to attack Britain'], 0, 'Mutual suspicion grew.'],
], [
  Q('cwd4.p1', 'Who wrote the Long Telegram?', ['George Kennan', 'Nikolai Novikov', 'George Marshall'], 0, 'In February 1946.', 'long'),
  Q('cwd4.p2', 'Who wrote the Novikov Telegram?', ['The Soviet ambassador in Washington', 'The American ambassador in Moscow', 'The British Foreign Secretary in London'], 0, 'In September 1946.', 'novikov'),
  Q('cwd4.p3', 'When was the Long Telegram sent?', ['February 1946', 'September 1946', 'March 1947'], 0, 'It was sent from Moscow.', 'long'),
  Q('cwd4.p4', 'Which policy did Kennan\'s ideas shape?', ['Containment', 'Détente', 'Appeasement'], 0, 'Stop the spread of communism.', 'policy'),
  Q('cwd4.p5', 'What did Novikov say the USA was building?', ['Military bases around the world', 'Communist parties in Europe', 'A wall across Berlin'], 0, 'Evidence of ambition, he claimed.', 'novikov'),
], [
  Q('cwd4.c1', 'What did Kennan say the USSR would back down to?', ['Strength', 'Kindness', 'Trade'], 0, 'Firm resistance.', 'long'),
  Q('cwd4.c2', 'What did Novikov say the USA used to control others?', ['Economic power', 'Religion', 'Royal marriages'], 0, 'Such as loans and aid.', 'novikov'),
  Q('cwd4.c3', 'How did the telegrams affect each side\'s fears?', ['Confirmed them', 'Removed them', 'Had no effect'], 0, 'Suspicion grew as a result.', 'effect'),
  Q('cwd4.c4', 'What followed within a year of the telegrams?', ['The Truman Doctrine', 'The Berlin Wall', 'The Warsaw Pact'], 0, 'It came in March 1947.', 'policy'),
  Q('cwd4.c5', 'What did containment aim to stop?', ['The spread of communism', 'The spread of capitalism', 'World trade'], 0, 'Beyond existing areas.', 'policy'),
  Q('cwd4.c6', 'What did Novikov\'s report reinforce?', ['Stalin\'s control of Eastern Europe', 'Soviet plans to disarm after 1946', 'Friendship and trade with the USA'], 0, 'Tighter control.', 'policy'),
  Q('cwd4.c7', 'Where was Kennan based?', ['Moscow', 'Berlin', 'London'], 0, 'At the US embassy.', 'long'),
  Q('cwd4.c8', 'What did Novikov say the USA was preparing for?', ['War against the USSR', 'Peace talks with Moscow', 'Leaving Europe for good'], 0, 'A mirror of Kennan.', 'novikov'),
], {exam: 'Explain two consequences of the Long and Novikov Telegrams. (8 marks)'}),

lesson(T, 'coldwar.truman-marshall', 'The Truman Doctrine and the Marshall Plan', ['P4 1.2'], [
  ['Greece and Turkey, 1947', 'Britain had been supporting the Greek government against communist rebels in a civil war, and helping Turkey resist Soviet pressure. In early 1947 Britain told the USA it could no longer afford to do so. The USA feared that if Greece fell, communism would spread further.'],
  ['The Truman Doctrine, March 1947', 'President Truman asked Congress for $400 million to help Greece and Turkey. He declared that the USA would support free peoples resisting being taken over by armed minorities or outside pressure. This was the policy of containment, and it committed the USA to a role in Europe for the long term.'],
  ['The Marshall Plan', 'In June 1947 Secretary of State George Marshall announced a huge programme of aid to rebuild Europe\'s economies. Between 1948 and 1952 the USA gave around $13 billion to sixteen countries. Americans believed that poverty made communism attractive, and that a prosperous Europe would also buy American goods.'],
  ['The Soviet response', 'Aid was offered to Eastern Europe too, but Stalin forbade the satellite states from accepting it. The Soviet foreign minister called it "dollar imperialism", a way for the USA to buy influence. The plan deepened the economic division of Europe.'],
], view.factors('Containment in practice', [
  ['Political', 'the Truman Doctrine: support for governments resisting communism'],
  ['Economic', 'the Marshall Plan: aid to make communism less attractive'],
  ['US self-interest', 'European markets for American goods'],
  ['Soviet view', 'dollar imperialism; the satellites refused aid'],
]), [
  view.timeline('1947–52', [
    ['Feb 1947', 'Britain says it can no longer support Greece and Turkey'],
    ['Mar 1947', 'The Truman Doctrine'],
    ['Jun 1947', 'Marshall announces the aid plan'],
    ['1947', 'Stalin forbids satellites to accept Marshall Aid'],
    ['1948–52', 'About $13 billion given to sixteen countries'],
  ]),
  view.people('People', [
    ['Harry Truman', 'Announced the Truman Doctrine'],
    ['George Marshall', 'Secretary of State who proposed the aid plan'],
    ['Vyacheslav Molotov', 'Soviet foreign minister who rejected the plan'],
    ['Congress', 'Voted for the aid'],
  ]),
  view.source('A source type: a Marshall Plan poster', 'A poster showing European flags as sails on a ship, with the message that cooperation would bring prosperity.', 'Useful for how the USA promoted the plan; it shows its message, not how Europeans experienced the aid.'),
], [
  ['Why did Britain\'s announcement in 1947 matter?', ['The USA feared Greece would fall to communism without support', 'It meant Britain had joined the Soviet bloc in Eastern Europe', 'It forced the USA to withdraw all its troops from Germany'], 0, 'The USA stepped into Britain\'s role.'],
  ['Why did the USA offer Marshall Aid?', ['Poverty made communism attractive, and a prosperous Europe would buy American goods', 'Congress wanted to punish Germany by giving aid only to its many neighbours', 'The United Nations ordered the USA to rebuild all of Europe after the war'], 0, 'Containment and self-interest combined.'],
  ['Exam skill · Explain the importance. Which best explains the importance of the Truman Doctrine?', ['It committed the USA to containing communism in Europe for the long term, deepening the division.', 'It was announced by President Truman in March 1947 and asked Congress for $400 million.', 'It was about Greece and Turkey, which were both near the eastern Mediterranean.'], 0, 'Importance explains a lasting effect.'],
  ['Why did Stalin reject Marshall Aid?', ['He saw it as a way for the USA to buy influence in Eastern Europe', 'He wanted the aid to go only to Germany and not to Poland', 'He had already received more money than the USA could offer'], 0, 'Dollar imperialism.'],
], [
  Q('cwd5.p1', 'When was the Truman Doctrine announced?', ['March 1947', 'June 1948', 'February 1945'], 0, 'After Britain\'s warning.', 'truman'),
  Q('cwd5.p2', 'How much did Truman ask for Greece and Turkey?', ['$400 million', '$13 billion', '$4 million'], 0, 'He asked Congress for it.', 'truman'),
  Q('cwd5.p3', 'Roughly how much Marshall Aid was given?', ['About $13 billion', 'About $13 million', 'About $130 billion'], 0, 'Between 1948 and 1952.', 'marshall'),
  Q('cwd5.p4', 'Who announced the aid plan?', ['George Marshall', 'George Kennan', 'Dean Acheson'], 0, 'He announced it in June 1947.', 'marshall'),
  Q('cwd5.p5', 'What did the USSR call Marshall Aid?', ['Dollar imperialism', 'Peaceful coexistence', 'Salami tactics'], 0, 'Buying influence.', 'soviet-response'),
], [
  Q('cwd5.c1', 'Which country faced a communist civil war?', ['Greece', 'France', 'Spain'], 0, 'Britain had supported its government.', 'truman'),
  Q('cwd5.c2', 'How many countries received Marshall Aid?', ['Sixteen', 'Two', 'Sixty'], 0, 'In Western Europe.', 'marshall'),
  Q('cwd5.c3', 'Who forbade the satellites to accept aid?', ['Stalin', 'Truman', 'Tito'], 0, 'He did so in 1947.', 'soviet-response'),
  Q('cwd5.c4', 'What policy did the Truman Doctrine express?', ['Containment', 'Isolation', 'Détente'], 0, 'Stopping communism.', 'truman'),
  Q('cwd5.c5', 'What did Americans believe made communism attractive?', ['Poverty', 'Wealth', 'Democracy'], 0, 'Aid would counter it.', 'marshall'),
  Q('cwd5.c6', 'What did the USA gain economically?', ['Markets for its goods', 'Supplies of Soviet oil', 'Nothing in return at all'], 0, 'Self-interest too.', 'marshall'),
  Q('cwd5.c7', 'Why did Britain stop helping Greece?', ['It could no longer afford to', 'It had become a communist state', 'Greece had asked it to leave'], 0, 'After the war\'s costs.', 'truman'),
  Q('cwd5.c8', 'How did the plan affect Europe\'s division?', ['Deepened it', 'Ended it', 'Had no effect'], 0, 'East and West split further.', 'soviet-response'),
], {exam: 'Explain the importance of the Marshall Plan for relations between the USA and the USSR. (8 marks)'}),

lesson(T, 'coldwar.cominform-comecon', 'Cominform, Comecon and NATO', ['P4 1.2'], [
  ['Cominform, 1947', 'In September 1947 Stalin set up the Communist Information Bureau, Cominform, to coordinate communist parties across Europe and make sure they followed Moscow\'s line. When Yugoslavia\'s leader, Tito, refused to obey, Yugoslavia was expelled in 1948.'],
  ['Comecon, 1949', 'In January 1949 Stalin set up the Council for Mutual Economic Assistance, Comecon, as the Soviet answer to Marshall Aid. It organised trade and economic cooperation between the USSR and its satellites, but in practice it tied their economies to the needs of the USSR.'],
  ['NATO, 1949', 'In April 1949, during the Berlin Blockade, the USA, Canada and ten Western European countries formed the North Atlantic Treaty Organisation, NATO. Members agreed that an attack on one would be treated as an attack on all. It was the first time the USA had joined a military alliance in peacetime.'],
  ['Two blocs', 'By 1949 Europe was divided into two blocs: a Western bloc tied together by Marshall Aid and NATO, and an Eastern bloc tied together by Cominform and Comecon. Each side saw the other\'s organisations as evidence of hostile intentions.'],
], view.factors('The two blocs', [
  ['Western economic', 'the Marshall Plan'],
  ['Eastern economic', 'Comecon'],
  ['Western military', 'NATO'],
  ['Eastern political', 'Cominform'],
]), [
  view.timeline('1947–49', [
    ['Jun 1947', 'The Marshall Plan announced'],
    ['Sept 1947', 'Cominform set up'],
    ['1948', 'Yugoslavia expelled from Cominform'],
    ['Jan 1949', 'Comecon set up'],
    ['Apr 1949', 'NATO formed'],
  ]),
  view.people('People and members', [
    ['Joseph Stalin', 'Created Cominform and Comecon'],
    ['Josip Broz Tito', 'Yugoslav leader expelled from Cominform'],
    ['NATO members', 'The USA, Canada and ten Western European states'],
    ['Comecon members', 'The USSR and its satellite states'],
  ]),
  view.source('A source type: the North Atlantic Treaty', 'The signed text of the 1949 treaty, setting out that members would treat an attack on one as an attack on all.', 'Very useful for the alliance\'s formal commitments; it does not show how each side viewed it.'),
], [
  ['Why was Comecon set up?', ['As the Soviet answer to Marshall Aid, organising trade within the Eastern bloc', 'To send Soviet aid to Western European countries such as France and Italy', 'To organise a military alliance against NATO and its members in Western Europe'], 0, 'An economic rival to the Marshall Plan.'],
  ['Why was NATO significant for the USA?', ['It was the first time the USA had joined a military alliance in peacetime', 'It meant the USA would leave Europe once the Berlin Blockade ended', 'It placed the American army under the command of the Soviet Union'], 0, 'A long-term commitment.'],
  ['Exam skill · Explain two consequences. Which is a consequence of the formation of NATO?', ['The USSR saw it as a threat, which deepened the division of Europe into two blocs.', 'NATO was formed in April 1949 by the USA, Canada and ten European countries.', 'NATO stands for the North Atlantic Treaty Organisation, an alliance of states.'], 0, 'A consequence is a result, explained.'],
  ['What did Cominform do?', ['Made sure communist parties followed Moscow\'s line', 'Gave economic aid to countries in the Marshall Plan', 'Organised free elections in the satellite states'], 0, 'Political control.'],
], [
  Q('cwd6.p1', 'When was Cominform set up?', ['September 1947', 'January 1949', 'April 1949'], 0, 'To coordinate communist parties.', 'cominform'),
  Q('cwd6.p2', 'When was Comecon set up?', ['January 1949', 'September 1947', 'May 1955'], 0, 'The answer to Marshall Aid.', 'comecon'),
  Q('cwd6.p3', 'When was NATO formed?', ['April 1949', 'June 1948', 'May 1955'], 0, 'During the Berlin Blockade.', 'nato'),
  Q('cwd6.p4', 'Which country was expelled from Cominform?', ['Yugoslavia', 'Poland', 'Hungary'], 0, 'It was expelled in 1948.', 'cominform'),
  Q('cwd6.p5', 'What did NATO members agree?', ['An attack on one is an attack on all', 'To share all of their trade equally', 'To leave the United Nations together'], 0, 'Collective defence.', 'nato'),
], [
  Q('cwd6.c1', 'Which type of organisation was Comecon?', ['Economic', 'Military', 'Religious'], 0, 'Trade and cooperation.', 'comecon'),
  Q('cwd6.c2', 'Whose needs did Comecon serve in practice?', ['The USSR\'s', 'The USA\'s', 'Britain\'s'], 0, 'Satellite economies were tied to it.', 'comecon'),
  Q('cwd6.c3', 'Which North American countries joined NATO?', ['The USA and Canada', 'The USA and Mexico', 'Only the USA'], 0, 'With ten European states.', 'nato'),
  Q('cwd6.c4', 'Who led Yugoslavia?', ['Tito', 'Stalin', 'Nagy'], 0, 'He refused Moscow\'s line.', 'cominform'),
  Q('cwd6.c5', 'Which Western organisation was economic?', ['The Marshall Plan', 'NATO', 'Cominform'], 0, 'Aid for recovery.', 'blocs'),
  Q('cwd6.c6', 'Which Eastern organisation was political?', ['Cominform', 'Comecon', 'NATO'], 0, 'Controlled parties.', 'blocs'),
  Q('cwd6.c7', 'How did each side see the other\'s organisations?', ['As hostile', 'As friendly', 'As unimportant'], 0, 'Suspicion grew on both sides.', 'blocs'),
  Q('cwd6.c8', 'What did NATO\'s formation mean for the USA?', ['A peacetime military alliance', 'Leaving Europe for good', 'Joining the Soviet-led Comecon'], 0, 'It was a first for the USA.', 'nato'),
], {exam: 'Write a narrative account analysing the key events in the division of Europe in the years 1947–49. (8 marks)'}),

lesson(T, 'coldwar.arms-race', 'The arms race and the Warsaw Pact', ['P4 1.3'], [
  ['The atomic monopoly ends', 'The USA had the only atomic bombs from 1945 until August 1949, when the USSR tested its own, years earlier than the USA expected. Each side now feared the other could strike first, and both raced to build more and more powerful weapons.'],
  ['Hydrogen bombs and missiles', 'The USA tested the first hydrogen bomb, far more powerful than the atomic bomb, in 1952; the USSR followed in 1953. In 1957 the USSR tested the first intercontinental ballistic missile and launched Sputnik, the first satellite, which showed it could reach the USA with nuclear warheads. Americans feared they had fallen behind.'],
  ['The Warsaw Pact, 1955', 'In May 1955 West Germany joined NATO and was allowed to rearm. Days later the USSR and its satellites signed the Warsaw Pact, a military alliance in which members agreed to defend each other. It gave the USSR control over the armies of Eastern Europe and matched NATO.'],
  ['Effects', 'The arms race increased fear on both sides, and huge sums were spent on weapons. But it also created a balance: each side knew that a nuclear war could destroy both, which made direct war between the superpowers less likely.'],
], view.factors('The arms race', [
  ['Atomic bombs', 'USA 1945; USSR 1949'],
  ['Hydrogen bombs', 'USA 1952; USSR 1953'],
  ['Missiles and space', 'Soviet ICBM and Sputnik, 1957'],
  ['Alliances', 'West Germany into NATO and the Warsaw Pact, 1955'],
]), [
  view.timeline('Arms and alliances', [
    ['Aug 1945', 'US atomic bombs on Japan'],
    ['Aug 1949', 'First Soviet atomic test'],
    ['Nov 1952', 'First US hydrogen bomb'],
    ['Aug 1953', 'First Soviet hydrogen bomb'],
    ['May 1955', 'West Germany joins NATO; the Warsaw Pact signed'],
    ['1957', 'Soviet ICBM test and Sputnik'],
  ]),
  view.people('People and groups', [
    ['Nikita Khrushchev', 'Soviet leader from the mid-1950s'],
    ['Dwight Eisenhower', 'US President from 1953'],
    ['Warsaw Pact members', 'The USSR and seven Eastern European states'],
    ['Scientists', 'Developed bombs and missiles on both sides'],
  ]),
  view.source('A source type: a civil defence film', 'A US government film from the 1950s showing families how to shelter during a nuclear attack.', 'Useful for public fears of nuclear war; it was made to reassure, so it suggests survival was easier than it would have been.'),
], [
  ['Why did the first Soviet atomic test alarm the USA?', ['It ended the US monopoly years earlier than expected', 'It destroyed an American city in the Pacific Ocean', 'It proved the USSR had more bombs than the USA'], 0, 'The balance had changed.'],
  ['What triggered the Warsaw Pact?', ['West Germany joining NATO and being allowed to rearm', 'The first test of an American hydrogen bomb in 1952', 'The death of Stalin and the end of Cominform in 1953'], 0, 'A rearmed West Germany alarmed the USSR.'],
  ['Exam skill · Explain the importance. Which best explains the importance of the arms race?', ['It increased fear but also made direct war less likely, because both could be destroyed.', 'The USSR tested its first atomic bomb in August 1949, four years after the USA.', 'The USA tested a hydrogen bomb in 1952, and the USSR then tested its own one in 1953.'], 0, 'Importance explains an effect on relations.'],
  ['Why did Sputnik worry Americans?', ['It showed the USSR could reach the USA with nuclear warheads', 'It was used to spy on American cities and take photographs', 'It meant the USSR had won the Cold War in 1957'], 0, 'Missile technology mattered.'],
], [
  Q('cwd8.p1', 'When did the USSR test its first atomic bomb?', ['August 1949', 'August 1945', 'October 1957'], 0, 'Earlier than the USA expected.', 'atomic'),
  Q('cwd8.p2', 'When was the Warsaw Pact signed?', ['May 1955', 'April 1949', 'August 1961'], 0, 'After West Germany joined NATO.', 'warsaw'),
  Q('cwd8.p3', 'What was Sputnik?', ['The first satellite', 'A new hydrogen bomb', 'A famous Soviet spy'], 0, 'Launched in 1957.', 'missiles'),
  Q('cwd8.p4', 'Who tested the first hydrogen bomb?', ['The USA', 'The USSR', 'Britain'], 0, 'It did so in 1952.', 'hydrogen'),
  Q('cwd8.p5', 'Which country joined NATO in 1955?', ['West Germany', 'Hungary', 'Poland'], 0, 'And was allowed to rearm.', 'warsaw'),
], [
  Q('cwd8.c1', 'What was an ICBM?', ['A long-range nuclear missile', 'A high-altitude spy plane', 'A trade agreement on arms'], 0, 'Tested by the USSR in 1957.', 'missiles'),
  Q('cwd8.c2', 'When did the USSR test a hydrogen bomb?', ['1953', '1945', '1962'], 0, 'A year after the USA.', 'hydrogen'),
  Q('cwd8.c3', 'What did the Warsaw Pact give the USSR?', ['Control of Eastern European armies', 'Large amounts of Marshall Aid', 'Seats on NATO\'s main council'], 0, 'A military alliance.', 'warsaw'),
  Q('cwd8.c4', 'How did the arms race affect spending?', ['Huge sums on weapons', 'Much lower spending', 'No change in spending'], 0, 'This was true on both sides.', 'effects'),
  Q('cwd8.c5', 'Why did nuclear weapons make war less likely?', ['Both could be destroyed', 'They had been banned', 'Nobody had any left'], 0, 'A balance of terror.', 'effects'),
  Q('cwd8.c6', 'Who led the USA from 1953?', ['Eisenhower', 'Truman', 'Kennedy'], 0, 'During the arms race.', 'atomic'),
  Q('cwd8.c7', 'Which bomb was more powerful?', ['Hydrogen', 'Atomic', 'They were equal'], 0, 'Far more powerful.', 'hydrogen'),
  Q('cwd8.c8', 'What did Americans fear after 1957?', ['They had fallen behind', 'The arms race had ended', 'Sputnik had crashed'], 0, 'A "missile gap".', 'missiles'),
], {exam: 'Explain the importance of the arms race for relations between the USA and the USSR in the years 1949–58. (8 marks)'}),

lesson(T, 'coldwar.hungary-uprising', 'The Hungarian Uprising, 1956', ['P4 1.3'], [
  ['Hungary under Rákosi', 'From 1949 Hungary was ruled by Mátyás Rákosi, a harsh Stalinist. Thousands were imprisoned or killed by the secret police, the AVH, living standards were low and Hungarians resented Soviet control and the removal of their goods to the USSR.'],
  ['A thaw after Stalin', 'Stalin died in 1953. In February 1956 the new Soviet leader, Nikita Khrushchev, made a "secret speech" attacking Stalin\'s crimes, which encouraged people in Eastern Europe to hope for change. Rákosi was replaced in 1956, but protests continued.'],
  ['October 1956', 'On 23 October 1956 students and workers demonstrated in Budapest and pulled down a huge statue of Stalin. Fighting broke out with the AVH and Soviet troops. The reformer Imre Nagy became prime minister, Soviet troops withdrew from Budapest, and Nagy promised free elections. On 1 November he announced that Hungary would leave the Warsaw Pact.'],
  ['The Soviet invasion', 'Leaving the Warsaw Pact threatened the whole Soviet bloc. On 4 November about 1,000 Soviet tanks entered Budapest. Thousands of Hungarians were killed and around 200,000 fled abroad. János Kádár was installed as a loyal leader, and Nagy was later executed in 1958.'],
], view.factors('Why the uprising happened', [
  ['Long-term', 'Rákosi\'s harsh rule; poverty; resentment of Soviet control'],
  ['Short-term', 'Khrushchev\'s secret speech raised hopes of change'],
  ['Trigger', 'the demonstration of 23 October 1956'],
  ['Why Khrushchev acted', 'Nagy\'s plan to leave the Warsaw Pact'],
]), [
  view.timeline('Hungary, 1956', [
    ['Feb 1956', 'Khrushchev\'s secret speech'],
    ['Jul 1956', 'Rákosi removed'],
    ['23 Oct 1956', 'Demonstration in Budapest; Stalin\'s statue pulled down'],
    ['24 Oct 1956', 'Imre Nagy becomes prime minister'],
    ['1 Nov 1956', 'Nagy announces Hungary will leave the Warsaw Pact'],
    ['4 Nov 1956', 'Soviet tanks enter Budapest'],
    ['1958', 'Nagy executed'],
  ]),
  view.people('People', [
    ['Mátyás Rákosi', 'Hated Stalinist leader'],
    ['Imre Nagy', 'Reforming prime minister, later executed'],
    ['Nikita Khrushchev', 'Soviet leader who ordered the invasion'],
    ['János Kádár', 'Loyal leader installed by the USSR'],
  ]),
  view.source('A source type: a photograph from Budapest', 'A photograph of the head of the toppled Stalin statue lying in a Budapest street, surrounded by crowds.', 'Useful for the anger against Soviet rule; it captures one moment and does not show the fighting or the invasion.'),
], [
  ['Why did the secret speech encourage change?', ['Khrushchev\'s attack on Stalin raised hopes that Soviet control would loosen', 'It promised that the USSR would leave Eastern Europe within a year', 'It announced that Hungary would join NATO and receive Marshall Aid'], 0, 'Hope of reform spread.'],
  ['Why did Khrushchev invade Hungary?', ['Leaving the Warsaw Pact threatened the whole Soviet bloc', 'Hungary had attacked the Soviet Union with American support', 'Nagy had asked Soviet troops to come back to restore order'], 0, 'Other satellites might follow.'],
  ['Exam skill · Narrative account. Which sequence of events is in the right order?', ['The secret speech; protests in Budapest; Nagy announces leaving the Warsaw Pact; Soviet tanks invade.', 'Soviet tanks invade; the secret speech; Nagy announces leaving the Warsaw Pact; protests in Budapest.', 'Protests in Budapest; Soviet tanks invade; the secret speech; Nagy announces leaving the Warsaw Pact.'], 0, 'A narrative links events in order.'],
  ['What happened to Nagy?', ['He was executed in 1958', 'He became leader of the Warsaw Pact', 'He fled to the USA and stayed there'], 0, 'Kádár replaced him.'],
], [
  Q('cwd9.p1', 'Who was Hungary\'s harsh Stalinist leader?', ['Mátyás Rákosi', 'Imre Nagy', 'János Kádár'], 0, 'Replaced in 1956.', 'rakosi'),
  Q('cwd9.p2', 'When did the uprising begin?', ['23 October 1956', '4 November 1956', 'February 1956'], 0, 'With a demonstration.', 'october'),
  Q('cwd9.p3', 'Who became prime minister in October 1956?', ['Imre Nagy', 'Mátyás Rákosi', 'János Kádár'], 0, 'He was a reformer.', 'october'),
  Q('cwd9.p4', 'What did Nagy announce on 1 November?', ['Leaving the Warsaw Pact', 'Joining the Soviet Comecon', 'A war against the USA'], 0, 'This triggered invasion.', 'october'),
  Q('cwd9.p5', 'Roughly how many Hungarians fled?', ['About 200,000', 'About 2,000', 'About 2 million'], 0, 'After the invasion.', 'invasion'),
], [
  Q('cwd9.c1', 'What was the AVH?', ['Hungary\'s secret police', 'A Soviet tank division', 'A Hungarian political party'], 0, 'Feared and hated.', 'rakosi'),
  Q('cwd9.c2', 'Whose statue was pulled down?', ['Stalin\'s', 'Lenin\'s', 'Nagy\'s'], 0, 'It stood in Budapest.', 'october'),
  Q('cwd9.c3', 'When did Stalin die?', ['1953', '1949', '1956'], 0, 'Khrushchev followed.', 'thaw'),
  Q('cwd9.c4', 'When did Soviet tanks invade?', ['4 November 1956', '23 October 1956', 'August 1968'], 0, 'About 1,000 tanks.', 'invasion'),
  Q('cwd9.c5', 'Who was installed as leader?', ['János Kádár', 'Imre Nagy', 'Alexander Dubček'], 0, 'Loyal to Moscow.', 'invasion'),
  Q('cwd9.c6', 'What did Khrushchev attack in his secret speech?', ['Stalin\'s crimes', 'NATO\'s expansion', 'Imre Nagy\'s reforms'], 0, 'He spoke in February 1956.', 'thaw'),
  Q('cwd9.c7', 'What did Nagy promise?', ['Free elections', 'Closer Soviet ties', 'More secret police'], 0, 'With other reforms.', 'october'),
  Q('cwd9.c8', 'Why did Hungarians resent Soviet control?', ['Low living standards and repression', 'High wages paid by Soviet firms', 'Free elections every year'], 0, 'This was under Rákosi.', 'rakosi'),
], {exam: 'Write a narrative account analysing the key events of the Hungarian Uprising in 1956. (8 marks)'}),

lesson(T, 'coldwar.hungary-reaction', 'International reaction to Hungary', ['P4 1.3'], [
  ['Why the West did not intervene', 'The USA condemned the invasion but sent no help. President Eisenhower would not risk a nuclear war over a country inside the Soviet sphere. At the same moment Britain and France, with Israel, were attacking Egypt in the Suez Crisis, which divided the West and distracted attention.'],
  ['The United Nations', 'The UN called for Soviet troops to leave Hungary and for free elections, but the USSR ignored it. The UN had no means of forcing the Soviet Union to act.'],
  ['A sense of betrayal', 'Many Hungarians had believed Western radio broadcasts, such as Radio Free Europe, meant that help would come. When it did not, they felt betrayed. Western countries did accept many of the refugees who fled.'],
  ['Consequences for the Cold War', 'Khrushchev showed that the USSR would use force to keep control of the Warsaw Pact, and other satellite states took note. The West\'s inaction showed that it would not intervene inside the Soviet sphere, which effectively accepted the division of Europe. Relations between the superpowers worsened.'],
], view.factors('Consequences of Hungary', [
  ['For the USSR', 'control of the Warsaw Pact reinforced by force'],
  ['For the satellites', 'a warning against leaving the Pact'],
  ['For the West', 'the limits of containment exposed; the division of Europe accepted'],
  ['For relations', 'mistrust deepened'],
]), [
  view.timeline('Reactions, November 1956', [
    ['29 Oct 1956', 'Israel attacks Egypt; the Suez Crisis begins'],
    ['4 Nov 1956', 'Soviet invasion of Hungary'],
    ['Nov 1956', 'The UN calls for Soviet withdrawal'],
    ['Nov 1956', 'The USA condemns but does not intervene'],
    ['Late 1956', 'Western countries accept Hungarian refugees'],
  ]),
  view.people('People and bodies', [
    ['Dwight Eisenhower', 'US President who refused to intervene'],
    ['The United Nations', 'Called for withdrawal; ignored'],
    ['Radio Free Europe', 'Western radio that encouraged the rebels'],
    ['Hungarian refugees', 'Around 200,000 fled abroad'],
  ]),
  view.source('A source type: a UN resolution', 'A UN General Assembly resolution calling on the USSR to withdraw its forces from Hungary.', 'Useful for international disapproval; it shows words, not action, and the USSR ignored it.'),
], [
  ['Why did Eisenhower not intervene?', ['He would not risk nuclear war over a country in the Soviet sphere', 'Hungary had asked the USA to stay out of its internal affairs', 'The USA had no troops anywhere in Europe by 1956'], 0, 'The risks were too great.'],
  ['How did the Suez Crisis affect the response?', ['It divided the West and distracted attention from Hungary', 'It united Britain, France and the USA against the USSR', 'It forced the USSR to withdraw its tanks from Budapest'], 0, 'The timing helped Khrushchev.'],
  ['Exam skill · Explain two consequences. Which is a consequence of the Soviet invasion of Hungary?', ['The West\'s inaction showed it would not intervene inside the Soviet sphere, accepting the division of Europe.', 'Around a thousand Soviet tanks entered Budapest on the fourth of November 1956.', 'Imre Nagy had announced that Hungary would leave the Warsaw Pact on the first of November 1956.'], 0, 'A consequence is a result, explained.'],
  ['Why did many Hungarians feel betrayed?', ['Western broadcasts had led them to expect help that never came', 'The USA had promised Nagy an army in a signed and published treaty', 'Britain had secretly sent troops to help the Soviet invasion'], 0, 'Hope turned to bitterness.'],
], [
  Q('cwd10.p1', 'Which crisis distracted the West in 1956?', ['The Suez Crisis', 'The Cuban Missile Crisis', 'The Berlin Blockade'], 0, 'Britain and France attacked Egypt.', 'suez'),
  Q('cwd10.p2', 'Who was US President in 1956?', ['Eisenhower', 'Truman', 'Kennedy'], 0, 'He did not intervene.', 'west'),
  Q('cwd10.p3', 'What did the UN call for?', ['Soviet withdrawal', 'A NATO invasion', 'Hungary to join NATO'], 0, 'The USSR ignored it.', 'un'),
  Q('cwd10.p4', 'Which radio encouraged the rebels?', ['Radio Free Europe', 'Radio Moscow', 'The BBC and no other'], 0, 'Hopes were raised.', 'betrayal'),
  Q('cwd10.p5', 'What did the West do for refugees?', ['Accepted many of them', 'Sent them all back', 'Ignored them entirely'], 0, 'Around 200,000 fled.', 'betrayal'),
], [
  Q('cwd10.c1', 'What did the USSR do about the UN\'s call?', ['Ignored it', 'Obeyed it', 'Left the UN'], 0, 'The UN had no force.', 'un'),
  Q('cwd10.c2', 'Which countries attacked Egypt in 1956?', ['Britain, France and Israel', 'The USA and the Soviet Union', 'Hungary, Poland and Austria'], 0, 'The Suez Crisis.', 'suez'),
  Q('cwd10.c3', 'What did the invasion show the satellites?', ['The USSR would use force', 'They could leave freely', 'NATO would help'], 0, 'It was a clear warning.', 'consequences'),
  Q('cwd10.c4', 'What did Western inaction effectively accept?', ['The division of Europe', 'Hungary joining NATO', 'The end of the Cold War'], 0, 'Spheres of influence.', 'consequences'),
  Q('cwd10.c5', 'What did Eisenhower fear?', ['Nuclear war', 'Losing an election', 'Losing Suez'], 0, 'Too great a risk.', 'west'),
  Q('cwd10.c6', 'How did relations change after 1956?', ['They worsened', 'They improved', 'They ended'], 0, 'Mistrust deepened.', 'consequences'),
  Q('cwd10.c7', 'What limit of containment did Hungary expose?', ['It did not apply inside the Soviet sphere', 'It applied everywhere, including Hungary', 'It had ended completely in 1956'], 0, 'There was no rollback.', 'consequences'),
  Q('cwd10.c8', 'How did the USA respond in words?', ['It condemned the invasion', 'It praised the Soviet action', 'It said nothing at all'], 0, 'But took no action.', 'west'),
], {exam: 'Explain two consequences of the Soviet invasion of Hungary in 1956. (8 marks)'}),
];
