// Pearson Edexcel GCSE (9–1) History 1HI0, Paper 2 period study, Option P4: Superpower relations
// and the Cold War, 1941–91. Key topic 1: The origins of the Cold War, 1941–58 (specification
// 1.1–1.3). All teaching text and questions are original; documents are described, never quoted.
import {Q, lesson, view} from './build.js?v=20261023-history01';

export const coldwarTopic1 = {id: 'history.coldwar.kt1', unit: 'P4', title: 'The origins of the Cold War, 1941–58', paper: 'Paper 2 · Period study'};
const T = coldwarTopic1.id;

export const coldwarLessons1 = [
lesson(T, 'coldwar.alliance', 'The Grand Alliance and early tension', ['P4 1.1'], [
  ['An alliance of necessity', 'The USA, Britain and the USSR fought together against Nazi Germany, but they had little else in common. The USA and Britain were capitalist democracies; the USSR was a communist one-party state. Each side believed its system should spread and distrusted the other\'s aims.'],
  ['Tehran and Yalta', 'At Tehran (1943) Roosevelt, Churchill and Stalin agreed that Britain and the USA would open a second front in France, and that the USSR would fight Japan once Germany was defeated. At Yalta (February 1945) they agreed to divide Germany and Berlin into four zones, to hold free elections in liberated Eastern Europe, and to join the new United Nations. Poland\'s borders and government were the hardest issue.'],
  ['Potsdam and the bomb', 'By Potsdam (July–August 1945) Roosevelt had died, Truman was President, and Attlee replaced Churchill during the conference. They argued over reparations and Poland. Truman told Stalin of a powerful new weapon; days later the USA used atomic bombs on Hiroshima and Nagasaki. Stalin saw the US monopoly of the bomb as a threat.'],
  ['Telegrams and satellite states', 'In 1946 the US diplomat George Kennan\'s Long Telegram warned that the USSR was hostile and would expand unless firmly resisted. The Soviet ambassador Novikov\'s telegram claimed the USA sought world domination. Meanwhile communist governments were set up across Eastern Europe as Soviet "satellite states", controlled by Moscow.'],
], view.factors('Why did the alliance break down?', [
  ['Ideology', 'capitalism and democracy against communism'],
  ['Leaders', 'Truman was tougher than Roosevelt; Stalin feared invasion from the west'],
  ['The atomic bomb', 'the US monopoly worried Stalin and changed the balance of power'],
  ['Mutual suspicion', 'the Long and Novikov telegrams each saw the other as aggressive'],
  ['Eastern Europe', 'Soviet control of satellite states broke the Yalta promise of free elections'],
]), [
  view.timeline('From allies to rivals', [
    ['1943', 'Tehran Conference'],
    ['Feb 1945', 'Yalta Conference'],
    ['Apr 1945', 'Roosevelt dies; Truman becomes President'],
    ['Jul–Aug 1945', 'Potsdam Conference'],
    ['Aug 1945', 'Atomic bombs on Hiroshima and Nagasaki'],
    ['Feb 1946', 'Kennan\'s Long Telegram'],
    ['Sept 1946', 'Novikov telegram'],
  ]),
  view.people('Leaders and diplomats', [
    ['Joseph Stalin', 'Soviet leader; wanted security through a buffer zone in Eastern Europe'],
    ['Franklin D. Roosevelt', 'US President to April 1945; sought cooperation with Stalin'],
    ['Harry S. Truman', 'US President from April 1945; more suspicious of Stalin'],
    ['Winston Churchill', 'British Prime Minister to July 1945; deeply anti-communist'],
  ]),
  view.source('A source type: a diplomatic telegram', 'A secret report from an ambassador or diplomat to his own government, such as the Long Telegram (1946), assessing the other superpower.', 'Shows what policymakers were told and helps explain their decisions; it is one official\'s interpretation, shaped by what his government expected to hear.'),
], [
  ['What did the Allies agree about Germany at Yalta?', ['To divide Germany and Berlin into four zones of occupation', 'To give the whole of Germany to the USSR as reparations', 'To let Germany keep its army under Allied supervision'], 0, 'Division was agreed in principle in February 1945.'],
  ['Why did the atomic bomb increase tension?', ['Stalin saw the US monopoly as a threat and pushed ahead with a Soviet bomb', 'The USA used the bomb against Soviet troops in eastern Germany in 1945', 'Britain and the USA refused to use the bomb against Japan at any point'], 0, 'It changed the balance of power.'],
  ['Exam skill · Explain a consequence. Which answer explains a consequence of the Long Telegram?', ['It persuaded US leaders that the USSR must be firmly resisted, which led towards containment.', 'It was written by George Kennan, a US diplomat, and sent from Moscow in February 1946.', 'The Long Telegram was a very long secret message about the Soviet Union and its leaders.'], 0, 'A consequence says what it led to.'],
  ['Why did the creation of satellite states worry the West?', ['It broke the Yalta promise of free elections in Eastern Europe', 'It meant the USSR had joined NATO without asking its members first', 'It gave the USA control of the trade of every Eastern European state'], 0, 'The West saw it as Soviet expansion.'],
], [
  Q('cw1.p1', 'Which conference agreed a second front in France?', ['Tehran, 1943', 'Yalta, 1945', 'Potsdam, 1945'], 0, 'D-Day followed in 1944.', 'conferences'),
  Q('cw1.p2', 'Who replaced Roosevelt as US President in April 1945?', ['Harry Truman', 'Dwight Eisenhower', 'John F. Kennedy'], 0, 'Truman was tougher towards Stalin.', 'leaders'),
  Q('cw1.p3', 'Who wrote the Long Telegram?', ['George Kennan', 'Nikolai Novikov', 'George Marshall'], 0, 'Kennan was a US diplomat in Moscow.', 'telegrams'),
  Q('cw1.p4', 'What were "satellite states"?', ['Eastern European countries controlled by the USSR', 'Countries that launched their own rockets into space', 'Neutral states that sat between East and West'], 0, 'Communist governments answered to Moscow.', 'satellites'),
  Q('cw1.p5', 'When were atomic bombs dropped on Japan?', ['August 1945', 'February 1945', 'June 1948'], 0, 'Hiroshima on 6 August, Nagasaki on 9 August.', 'bomb'),
], [
  Q('cw1.c1', 'Which three leaders met at Yalta?', ['Roosevelt, Churchill and Stalin', 'Truman, Attlee and Stalin', 'Eisenhower, Churchill and Khrushchev'], 0, 'Truman and Attlee were at Potsdam.', 'conferences'),
  Q('cw1.c2', 'What was promised for Eastern Europe at Yalta?', ['Free elections', 'Permanent Soviet rule', 'Membership of NATO'], 0, 'The promise was later broken.', 'conferences'),
  Q('cw1.c3', 'Who replaced Churchill during the Potsdam Conference?', ['Clement Attlee', 'Anthony Eden', 'Harold Macmillan'], 0, 'Labour won the 1945 election.', 'leaders'),
  Q('cw1.c4', 'What did the Novikov telegram claim?', ['That the USA wanted world domination', 'That the USSR would soon collapse', 'That Britain would leave the alliance'], 0, 'It mirrored Kennan\'s fears from the other side.', 'telegrams'),
  Q('cw1.c5', 'What was the main ideological difference?', ['Capitalist democracy against one-party communism', 'Monarchy against a republican government', 'Catholicism against Protestant Christianity'], 0, 'Each saw the other\'s system as a threat.', 'ideology'),
  Q('cw1.c6', 'Which issue was hardest to agree at Yalta and Potsdam?', ['Poland\'s borders and government', 'The future of Japan\'s emperor', 'The control of the Suez Canal'], 0, 'Poland became a symbol of Soviet control.', 'conferences'),
  Q('cw1.c7', 'Why did Stalin want friendly states in Eastern Europe?', ['To protect the USSR from future invasion from the west', 'To gain colonies in Africa through their empires', 'To be able to join the Marshall Plan on good terms'], 0, 'The USSR had been invaded twice through Eastern Europe.', 'satellites'),
  Q('cw1.c8', 'What did Truman tell Stalin at Potsdam?', ['That the USA had a powerful new weapon', 'That the USA would leave Europe at once', 'That Germany would be reunited'], 0, 'He did not give details of the atomic bomb.', 'bomb'),
], {exam: 'Explain two consequences of the creation of Soviet satellite states in Eastern Europe. (8 marks)'}),

lesson(T, 'coldwar.containment', 'The Truman Doctrine, the Marshall Plan and the new alliances', ['P4 1.2'], [
  ['The Truman Doctrine, 1947', 'In March 1947 Truman said the USA would support free peoples resisting outside pressure or armed minorities. He asked Congress for $400 million for Greece and Turkey. This was containment: stopping communism spreading further, rather than rolling it back.'],
  ['The Marshall Plan', 'Announced in June 1947, the European Recovery Programme offered billions of dollars to rebuild Europe. Poverty was seen as the breeding ground of communism. Sixteen western countries accepted. Stalin forbade the satellite states to apply, calling the plan "dollar imperialism" designed to make Europe dependent on the USA.'],
  ['The Soviet response', 'The USSR set up Cominform (1947) to coordinate communist parties and keep them loyal to Moscow, and Comecon (1949) to organise trade and aid among communist states as an alternative to Marshall Aid. Europe was dividing into two economic and political blocs.'],
  ['NATO, 1949', 'In April 1949 the USA, Canada and ten Western European countries formed the North Atlantic Treaty Organisation: an attack on one would be treated as an attack on all. It was the first time the USA joined a military alliance in peacetime, and the USSR saw it as aimed at itself.'],
], view.factors('Action and reaction', [
  ['Truman Doctrine (1947)', 'US promise to contain communism'],
  ['Marshall Plan (1947)', 'US money to rebuild Western Europe'],
  ['Cominform (1947)', 'Soviet control of communist parties'],
  ['Comecon (1949)', 'Soviet bloc trade and aid'],
  ['NATO (1949)', 'Western military alliance including the USA'],
]), [
  view.timeline('Two blocs, 1947–49', [
    ['Mar 1947', 'Truman Doctrine'],
    ['Jun 1947', 'Marshall Plan announced'],
    ['Sept 1947', 'Cominform founded'],
    ['Feb 1948', 'Communist takeover in Czechoslovakia'],
    ['Jan 1949', 'Comecon founded'],
    ['Apr 1949', 'NATO founded'],
  ]),
  view.people('People', [
    ['Harry S. Truman', 'Announced the doctrine of containment'],
    ['George Marshall', 'US Secretary of State; the plan carries his name'],
    ['Joseph Stalin', 'Rejected Marshall Aid for the Soviet bloc'],
    ['Vyacheslav Molotov', 'Soviet Foreign Minister; walked out of Marshall Plan talks'],
  ]),
  view.source('A source type: a political cartoon', 'A newspaper cartoon from 1947–48 commenting on Marshall Aid, from either a Western or a Soviet-bloc publication.', 'Useful for the attitude of its publication and audience; cartoons exaggerate to make a point, so check who made it and for whom.'),
], [
  ['What did "containment" mean?', ['Stopping communism spreading to new countries', 'Removing communism from the USSR by force', 'Sharing atomic secrets with the USSR'], 0, 'It accepted existing Soviet control but resisted expansion.'],
  ['Why did Stalin forbid the satellite states to accept Marshall Aid?', ['He feared it would draw them under US economic influence', 'He thought the money would not be enough to help them', 'The USA had refused to offer aid to Eastern Europe'], 0, 'He called it "dollar imperialism".'],
  ['Exam skill · Narrative account. Which links events in a chain?', ['The Marshall Plan led Stalin to create Comecon, which deepened the economic division of Europe.', 'The Marshall Plan was in 1947, Comecon was in 1949, and NATO was also founded in April 1949.', 'There were many organisations in the Cold War, including NATO, Comecon and also Cominform.'], 0, 'A narrative explains how one event led to the next.'],
  ['Why did the USSR see NATO as a threat?', ['It was a Western military alliance including the USA, aimed against Soviet expansion', 'It required every member to give up its own army within ten years of joining', 'It gave the USA control of Soviet territory in Eastern Europe after the war'], 0, 'Each side saw the other\'s alliances as aggressive.'],
], [
  Q('cw2.p1', 'Which two countries did the Truman Doctrine first help?', ['Greece and Turkey', 'France and Italy', 'Poland and Hungary'], 0, 'Congress approved $400 million.', 'truman-doctrine'),
  Q('cw2.p2', 'What was the Marshall Plan?', ['US economic aid to rebuild Europe', 'A Soviet plan to occupy Germany', 'A treaty ending the Second World War'], 0, 'It was the European Recovery Programme.', 'marshall'),
  Q('cw2.p3', 'What did Cominform do?', ['Coordinated communist parties under Soviet control', 'Organised Western military defence in Europe', 'Distributed Marshall Aid to Eastern Europe'], 0, 'It kept communist parties loyal to Moscow.', 'soviet-response'),
  Q('cw2.p4', 'When was NATO founded?', ['1949', '1945', '1955'], 0, 'NATO was founded in April 1949.', 'nato'),
  Q('cw2.p5', 'What did Comecon offer?', ['Trade and aid among communist states', 'Marshall Aid to Eastern Europe', 'Nuclear weapons to satellite states'], 0, 'It was a Soviet alternative to Marshall Aid.', 'soviet-response'),
], [
  Q('cw2.c1', 'In which year was the Truman Doctrine announced?', ['1947', '1945', '1950'], 0, 'Truman announced it in March 1947.', 'truman-doctrine'),
  Q('cw2.c2', 'What did Stalin call the Marshall Plan?', ['Dollar imperialism', 'Peaceful coexistence', 'The iron curtain'], 0, 'He saw it as economic domination.', 'marshall'),
  Q('cw2.c3', 'Why did the USA offer Marshall Aid?', ['It believed poverty helped communism spread', 'It wanted to help rebuild the Soviet army', 'It had promised the money to Stalin at Yalta'], 0, 'Prosperity was seen as a defence against communism.', 'marshall'),
  Q('cw2.c4', 'What was new about NATO for the USA?', ['It joined a military alliance in peacetime', 'It gave up all its atomic weapons', 'It left the United Nations for good'], 0, 'This marked a break from isolation.', 'nato'),
  Q('cw2.c5', 'What did NATO members agree?', ['An attack on one would be an attack on all', 'To adopt a single currency, the Deutschmark', 'To share their overseas colonies equally'], 0, 'Collective defence was the core idea.', 'nato'),
  Q('cw2.c6', 'Which Soviet organisation was founded in 1949?', ['Comecon', 'The Warsaw Pact', 'Cominform'], 0, 'The Warsaw Pact came in 1955; Cominform in 1947.', 'soviet-response'),
  Q('cw2.c7', 'Which country had a communist takeover in February 1948?', ['Czechoslovakia', 'Greece', 'Austria', 'Yugoslavia'], 0, 'It increased Western fears.', 'soviet-response'),
  Q('cw2.c8', 'What was the overall effect of these developments?', ['Europe divided into two rival blocs', 'The USA and USSR formed a new alliance', 'Germany was reunited'], 0, 'Economic and military division followed.', 'containment'),
], {exam: 'Write a narrative account analysing the key events of 1947–49 that divided Europe into two blocs. (8 marks)'}),

lesson(T, 'coldwar.berlin', 'Berlin, 1948–49: blockade and airlift', ['P4 1.2'], [
  ['A divided city', 'After 1945 Germany and Berlin were each divided into four zones. Berlin lay deep inside the Soviet zone. The Western powers wanted Germany to recover; the USSR wanted reparations and a weak Germany that could never invade again.'],
  ['Bizonia and the new currency', 'In 1947 the American and British zones merged into Bizonia, and the French zone soon joined. In June 1948 the Western powers introduced a new currency, the Deutschmark, in their zones and in West Berlin, without agreement from the USSR.'],
  ['The blockade', 'In June 1948 Stalin cut all road, rail and canal links between West Berlin and the Western zones. He hoped to force the Western powers out of Berlin or make them abandon plans for a separate West German state.'],
  ['The airlift and its results', 'For almost a year British and American aircraft flew in food, fuel and supplies, sometimes landing every few minutes. Stalin lifted the blockade in May 1949. That year Germany split into the Federal Republic of Germany (West) and the German Democratic Republic (East), and NATO was formed.'],
], view.factors('Why did Stalin blockade Berlin?', [
  ['Western plans for Germany', 'a strong, separate West Germany alarmed him'],
  ['The new currency', 'the Deutschmark threatened the Soviet zone\'s economy'],
  ['Berlin\'s position', 'a Western outpost inside the Soviet zone'],
  ['Testing the West', 'a chance to see if the Western powers would back down'],
]), [
  view.timeline('Berlin, 1945–49', [
    ['1945', 'Germany and Berlin divided into four zones'],
    ['1947', 'Bizonia created'],
    ['Jun 1948', 'Deutschmark introduced; blockade begins'],
    ['1948–49', 'Berlin airlift'],
    ['May 1949', 'Blockade lifted; FRG created'],
    ['Oct 1949', 'GDR created'],
  ]),
  view.people('People and powers', [
    ['Joseph Stalin', 'Ordered the blockade'],
    ['Harry S. Truman', 'Decided to supply West Berlin by air rather than force'],
    ['West Berliners', 'About two million people who depended on the airlift'],
    ['The Western Allies', 'The USA, Britain and France, who held West Berlin\'s zones'],
  ]),
  view.source('A source type: a press photograph of the airlift', 'Photographs of aircraft landing at Tempelhof airport and Berliners watching, published in Western newspapers.', 'Powerful evidence of the airlift\'s scale and public mood; chosen and published to show Western success.'),
], [
  ['Why was West Berlin vulnerable?', ['It lay deep inside the Soviet zone of Germany', 'It had no airport of its own at all in 1948', 'It was governed only by the USSR from 1945 to 1948'], 0, 'Every land route crossed Soviet-controlled territory.'],
  ['Why did the West choose an airlift?', ['It supplied the city without firing the first shot', 'Roads into Berlin had been destroyed in the war', 'Stalin had asked the West to send aircraft'], 0, 'Breaking the blockade by force risked war.'],
  ['Exam skill · Explain consequences. Which explains a consequence of the Berlin Crisis?', ['It speeded the creation of NATO, because Western states saw the need for a military alliance.', 'The blockade began in June 1948 and the airlift lasted until May 1949, almost a year.', 'Aircraft landed at Tempelhof and other airports in West Berlin every few minutes in 1948.'], 0, 'A consequence explains what followed and why.'],
  ['What did Stalin hope the blockade would achieve?', ['Force the West out of Berlin or stop a separate West German state', 'Make the West hand over its atomic weapons to the UN', 'Persuade the West to give him Marshall Aid for the USSR'], 0, 'It failed on both aims.'],
], [
  Q('cw3.p1', 'What new currency did the West introduce in 1948?', ['The Deutschmark', 'The Reichsmark', 'The Soviet rouble'], 0, 'It was introduced without Soviet agreement.', 'currency'),
  Q('cw3.p2', 'When did the Berlin blockade begin?', ['June 1948', 'May 1945', 'August 1961'], 0, 'The Berlin Wall came in 1961.', 'blockade'),
  Q('cw3.p3', 'How was West Berlin supplied during the blockade?', ['By air', 'By sea', 'Through tunnels'], 0, 'The airlift lasted almost a year.', 'airlift'),
  Q('cw3.p4', 'What was Bizonia?', ['The merged American and British zones', 'The Soviet zone of Berlin and its suburbs', 'A NATO military base in western Germany'], 0, 'It was created in 1947.', 'currency'),
  Q('cw3.p5', 'When did the blockade end?', ['May 1949', 'June 1948', 'October 1950'], 0, 'Stalin lifted it after almost a year.', 'blockade'),
], [
  Q('cw3.c1', 'What were the two German states created in 1949?', ['The FRG (West) and the GDR (East)', 'Bizonia and Trizonia, ruled by the West', 'Prussia and Bavaria, each with a king'], 0, 'Germany\'s division became formal.', 'division'),
  Q('cw3.c2', 'Which zone was Berlin inside?', ['The Soviet zone', 'The British zone', 'The American zone'], 0, 'This made West Berlin vulnerable.', 'blockade'),
  Q('cw3.c3', 'Why did the USSR want a weak Germany?', ['To prevent another invasion and to take reparations', 'To make Germany a full member of NATO', 'To share German industry equally with the USA'], 0, 'Soviet losses in the war were enormous.', 'blockade'),
  Q('cw3.c4', 'What did the airlift show?', ['The West would not abandon West Berlin', 'The USSR now controlled the whole of Germany', 'The USA would use the atomic bomb on Berlin'], 0, 'It was a propaganda victory for the West.', 'airlift'),
  Q('cw3.c5', 'Which alliance was formed in 1949 partly because of the crisis?', ['NATO', 'The Warsaw Pact', 'Comecon'], 0, 'The Warsaw Pact came in 1955.', 'division'),
  Q('cw3.c6', 'What links did Stalin cut in 1948?', ['Road, rail and canal links to West Berlin', 'Telephone lines between Washington and Moscow', 'Air routes over the Soviet zone'], 0, 'Air corridors stayed open.', 'blockade'),
  Q('cw3.c7', 'Which countries flew most airlift missions?', ['The USA and Britain', 'France and Italy', 'Poland and the GDR'], 0, 'American and British aircraft did most flying.', 'airlift'),
  Q('cw3.c8', 'Why did the new currency anger Stalin?', ['It was introduced without Soviet agreement and threatened the Soviet zone\'s economy', 'It replaced the rouble across the whole of the USSR and its satellites', 'It was printed in the Soviet zone and paid to Soviet troops in Berlin'], 0, 'It signalled a separate western economy.', 'currency'),
], {exam: 'Explain two consequences of the Berlin Crisis of 1948–49. (8 marks)'}),

lesson(T, 'coldwar.hungary', 'The arms race, the Warsaw Pact and Hungary, 1949–58', ['P4 1.3'], [
  ['The arms race', 'The USSR tested its own atomic bomb in 1949, ending the US monopoly. The USA tested a far more powerful hydrogen bomb in 1952 and the USSR followed in 1953. In 1957 the USSR tested an intercontinental ballistic missile and launched Sputnik, the first satellite, raising American fears of a "missile gap".'],
  ['The Warsaw Pact, 1955', 'When West Germany joined NATO in 1955, the USSR set up the Warsaw Pact, a military alliance of communist states in Eastern Europe. It bound the satellite states to the USSR and gave Moscow a legal basis for keeping troops in their territory.'],
  ['Hungary, 1956', 'After Stalin\'s death, Khrushchev criticised him in a secret speech in 1956, raising hopes of change. Hungarians protested against hardline rule; the reformer Imre Nagy became leader, promised free elections and announced that Hungary would leave the Warsaw Pact. In November Soviet tanks invaded; thousands were killed, Nagy was later executed and a pro-Soviet government was installed.'],
  ['The world reacts', 'The West condemned the invasion and the United Nations called for Soviet withdrawal, but no country intervened. The USA did not want to risk nuclear war, and Britain and France were distracted by the Suez crisis. Thousands of Hungarian refugees were accepted abroad. The message was that the West would not interfere inside the Soviet bloc.'],
], view.factors('Why did Khrushchev invade Hungary?', [
  ['The Warsaw Pact', 'leaving it threatened the whole Soviet bloc'],
  ['The domino effect', 'other satellite states might follow Hungary'],
  ['Security', 'Hungary was part of the USSR\'s buffer zone'],
  ['Authority', 'Khrushchev needed to show strength after de-Stalinisation'],
]), [
  view.timeline('Arms race and Hungary', [
    ['1949', 'Soviet atomic bomb tested'],
    ['1952–53', 'US and Soviet hydrogen bombs'],
    ['1953', 'Stalin dies'],
    ['1955', 'West Germany joins NATO; Warsaw Pact formed'],
    ['Feb 1956', 'Khrushchev\'s secret speech'],
    ['Oct–Nov 1956', 'Hungarian Uprising crushed'],
    ['1957', 'Soviet ICBM and Sputnik'],
  ]),
  view.people('People', [
    ['Nikita Khrushchev', 'Soviet leader after Stalin; ordered the invasion of Hungary'],
    ['Imre Nagy', 'Hungarian reformer and leader in 1956; executed in 1958'],
    ['János Kádár', 'Installed by the USSR to lead Hungary after the invasion'],
    ['Dwight Eisenhower', 'US President; condemned the invasion but did not intervene'],
  ]),
  view.source('A source type: a radio appeal from Budapest, November 1956', 'Broadcasts from Hungarian radio stations during the Soviet attack, asking the West for help.', 'Vivid evidence of Hungarian hopes and fear; made in desperate circumstances to win support, so they show feelings more than the full military picture.'),
], [
  ['Why did Sputnik alarm the USA?', ['A rocket that could reach orbit could also carry nuclear weapons to America', 'Sputnik was armed with nuclear weapons when it was launched in 1957', 'It showed that the USSR had already landed a man on the Moon'], 0, 'It suggested a "missile gap".'],
  ['Why was Nagy\'s plan to leave the Warsaw Pact decisive?', ['It threatened the whole Soviet bloc and buffer zone', 'It meant Hungary would join NATO on the very next day', 'It broke a promise that Hungary had made to the USA'], 0, 'Khrushchev could not allow the bloc to break up.'],
  ['Exam skill · Explain importance. Which explains why the West\'s reaction mattered?', ['By not intervening, the West showed it would not interfere inside the Soviet bloc, which reassured Moscow.', 'The West condemned the invasion, and the United Nations then passed a resolution about Hungary.', 'Thousands of Hungarians escaped to the West after the uprising, including to Britain and the USA.'], 0, 'Importance explains what the reaction changed.'],
  ['Why did the USA not intervene in Hungary?', ['It did not want to risk nuclear war with the USSR', 'Hungary had asked the USA to keep out of the uprising', 'The USA had already left NATO by 1956'], 0, 'Containment did not mean liberating the bloc.'],
], [
  Q('cw4.p1', 'When did the USSR test its first atomic bomb?', ['1949', '1945', '1957'], 0, 'It ended the US monopoly.', 'arms-race'),
  Q('cw4.p2', 'What was Sputnik?', ['The first artificial satellite, launched by the USSR', 'The first US hydrogen bomb, tested in the Pacific', 'A Soviet spy plane shot down over the USA'], 0, 'It was launched in October 1957.', 'arms-race'),
  Q('cw4.p3', 'What event prompted the Warsaw Pact?', ['West Germany joining NATO', 'The end of the Berlin blockade', 'The start of the Cuban Revolution'], 0, 'Both happened in 1955.', 'warsaw-pact'),
  Q('cw4.p4', 'Who led Hungary during the 1956 uprising?', ['Imre Nagy', 'János Kádár', 'Alexander Dubček'], 0, 'Dubček led Czechoslovakia in 1968.', 'hungary'),
  Q('cw4.p5', 'What did Khrushchev\'s secret speech do?', ['Criticised Stalin', 'Declared war on the USA', 'Announced the Warsaw Pact'], 0, 'It raised hopes of change in Eastern Europe.', 'hungary'),
], [
  Q('cw4.c1', 'Which country first tested a hydrogen bomb?', ['The USA', 'The USSR', 'Britain'], 0, 'The USA in 1952; the USSR in 1953.', 'arms-race'),
  Q('cw4.c2', 'When was the Warsaw Pact formed?', ['1955', '1949', '1961'], 0, 'After West Germany joined NATO.', 'warsaw-pact'),
  Q('cw4.c3', 'What did Nagy announce that provoked invasion?', ['Hungary would leave the Warsaw Pact', 'Hungary would join the USSR as a republic', 'Hungary would attack Austria to win land'], 0, 'This threatened the bloc.', 'hungary'),
  Q('cw4.c4', 'Who replaced Nagy?', ['János Kádár', 'Nikita Khrushchev', 'Walter Ulbricht'], 0, 'Kádár was installed by the USSR.', 'hungary'),
  Q('cw4.c5', 'Why were Britain and France distracted in 1956?', ['The Suez crisis', 'The Berlin Wall', 'The Korean War'], 0, 'They were fighting over the Suez Canal.', 'reaction'),
  Q('cw4.c6', 'What did the United Nations do about Hungary?', ['Called for Soviet withdrawal but could not enforce it', 'Sent an international army to free Hungary', 'Supported the Soviet invasion as lawful'], 0, 'The USSR had a veto and ignored the UN.', 'reaction'),
  Q('cw4.c7', 'What did the Hungarian crisis show about the West?', ['It would not intervene inside the Soviet bloc', 'It would invade any communist state that rebelled', 'It now supported the Warsaw Pact and its aims'], 0, 'Containment had limits.', 'reaction'),
  Q('cw4.c8', 'What fear did Soviet missiles create in the USA after 1957?', ['A "missile gap"', 'A shortage of oil', 'A falling birth rate'], 0, 'Americans feared falling behind.', 'arms-race'),
], {exam: 'Explain the importance of the Hungarian Uprising (1956) for relations between the USA and the USSR. (8 marks)'}),
];
